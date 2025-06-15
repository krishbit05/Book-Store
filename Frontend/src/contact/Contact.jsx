import React from 'react'

function Contact() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
                <a
                    href="/"
                    className="absolute top-4 right-4 text-4xl text-black dark:text-white transition duration-200 font-bold"
                >
                    &times;
                </a>
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-lg">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">Contact Us</h2>
                    <form className="flex flex-col gap-5">
                        <div>
                            <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Write your message"
                                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact