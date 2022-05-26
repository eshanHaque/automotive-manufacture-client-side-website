import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link,  useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Loading/Loading';

const SignUp = () => {
    const [signInWithGoogle, glUser, glLoading, glError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, UpError] = useUpdateProfile(auth);
    const [token] = useToken(glUser || user);

    const navigate = useNavigate();

    let signInError;

    if(loading || glLoading || updating){
        return <Loading></Loading>
    }
 
    if(error || glError || UpError){
        signInError= <p className='text-orange-700'>{ error?.message || glError?.message }</p>
    }

    if (token) {
        navigate('/product');
    }
    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        
    };
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className='text-center text-2xl font-bold'>Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Pass feild */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="name"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span
                                    className="label-text-alt text-orange-400">{errors.name.message}</span>}
                                

                            </label>
                        </div>
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
                        <input className='btn w-full max-w-xs' value="SIGN UP" type="submit" />
                    </form>
                    <p>Have an Account? <Link className='text-sky-300' to='/login'>Login</Link></p>
                    <div className='divider'>or</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-outline'>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;