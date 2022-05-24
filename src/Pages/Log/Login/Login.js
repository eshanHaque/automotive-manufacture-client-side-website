import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';

const Login = () => {
    const [signInWithGoogle, glUser, glLoading, glError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    if (glUser) {
        console.log(glUser);
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
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
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
                            <label class="label">
                                {errors.email?.type === 'required' && <span
                                    class="label-text-alt text-orange-400">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span
                                    class="label-text-alt text-orange-400">{errors.email.message}</span>}

                            </label>
                        </div>
                        {/* PassWord feild */}

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your password"
                                class="input input-bordered w-full max-w-xs"
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
                            <label class="label">
                                {errors.password?.type === 'required' && <span
                                    class="label-text-alt text-orange-400">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span
                                    class="label-text-alt text-orange-400">{errors.password.message}</span>}

                            </label>
                        </div>

                        {/* Submit button */}
                        <input className='btn w-full max-w-xs' value="LOGIN" type="submit" />
                    </form>

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