import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='text-3xl'>Sign up</h1>
      <form className='w-[400px]'>
        <div className="mb-6">
          <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your username</label>
          <input
          type="text"
          id="username"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
          "
          placeholder="username"
          />
          </div>
        <div className="mb-6">
          <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your email</label>
          <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
          "
          placeholder="email"
          />
          </div>
        <div className="mb-6">
          <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your password</label>
          <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
          "
          placeholder="password"
          />
          </div>
        <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
        font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Submit</button>
      
      
      </form>
      
    </div>
  )
}

export default page
