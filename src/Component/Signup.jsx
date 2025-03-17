import React from 'react'

const Signup = () => {
  return (
    <>
    <main className="p-5">
  <form action="" method="post" className="w-[400px] mx-auto p-6 my-16">
    <h2 className="text-2xl font-semibold text-center mb-4">
      Create an account
    </h2>
    <p className="text-center text-gray-500 mb-3">
      or
      <a
        href="/src/login.html"
        className="text-sm text-purple-700 hover:text-purple-600"
      >
        login with existing account
      </a>
    </p>
    <div className="mb-4">
      <input
        placeholder="Your name"
        type="text"
        name="name"
        className="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
      />
    </div>
    <p />
    <div className="mb-4">
      <input
        placeholder="Your Email"
        type="email"
        name="email"
        className="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
      />
    </div>
    <div className="mb-4">
      <input
        placeholder="Password"
        type="password"
        name="password"
        className="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
      />
    </div>
    <div className="mb-4">
      <input
        placeholder="Repeat Password"
        type="password"
        name="password"
        className="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
      />
    </div>
    <button className="btn-primary bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 w-full">
      Signup
    </button>
  </form>
</main>

    </>
  )
}

export default Signup