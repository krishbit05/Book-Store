import React from 'react'
import Login from '../components/Login'
import { useState } from 'react'
import { useForm } from "react-hook-form";

function Signup() {
    const [showLogin, setShowLogin] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div
                className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-lg w-[90%] max-w-md shadow-lg transition-all duration-300">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Sign up</h3>
                        <a
                            href="/"
                            className="absolute top-4 right-4 text-4xl text-black dark:text-white transition duration-200 font-bold"
                        >
                            &times;
                        </a>

                    </div>
                    <div className="flex flex-col gap-6">
                        <div>
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="mt-1 w-full border border-gray-400 dark:border-gray-600 rounded-md p-2 bg-transparent"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className="text-sm text-red-500">*This field is required</span>}
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="mt-1 w-full border border-gray-400 dark:border-gray-600 rounded-md p-2 bg-transparent"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-sm text-red-500">*This field is required</span>}
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="mt-1 w-full border border-gray-400 dark:border-gray-600 rounded-md p-2 bg-transparent"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-sm text-red-500">*This field is required</span>}
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                        <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition">
                            Sign up
                        </button>
                        <div className="text-sm">
                            <span>Have account? </span>
                            <button onClick={() => setShowLogin(true)} className="underline text-blue-500">
                                login
                            </button>
                            <Login isOpen={showLogin} onClose={() => setShowLogin(false)} />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Signup