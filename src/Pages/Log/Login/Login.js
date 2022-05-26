import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const Login = () => {
    const [signInWithGoogle, glUser, glLoading, glError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let form = location.state?.from.pathname || "/";

    if(loading || glLoading){
        return <Loading></Loading>
    }
 
    if(error || glError){
        signInError= <p className='text-orange-700'>{ error?.message || glError?.message }</p>
    }

    if (glUser || user) {
        navigate(form, { replace: true});
    }
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    };
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className='text-center text-2xl font-bold'>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Email feild */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]{2,3}/,
                                        message: 'Please provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span
                                    className="label-text-alt text-orange-400">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span
                                    className="label-text-alt text-orange-400">{errors.email.message}</span>}

                            </label>
                        </div>
                        {/* PassWord feild */}

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'You need to put 6 characers or more'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span
                                    className="label-text-alt text-orange-400">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span
                                    className="label-text-alt text-orange-400">{errors.password.message}</span>}

                            </label>
                        </div>

                        {signInError}
                        {/* Submit button */}
                        <input className='btn w-full max-w-xs' value="LOGIN" type="submit" />
                    </form>
                    <p>New to Doctors Portal <Link className='text-sky-300' to='/signup'>Create New Account</Link></p>
                    <div className='divider'>or</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-outline'>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;