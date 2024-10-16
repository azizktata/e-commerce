import Link from "next/link";
import React from "react";
import Header from "../ui/header";

export default function Login() {
  return (
    <>
      <Header />
      <div className=" max-w-[500px] px-8 mx-auto mt-20">
        <h1 className="text-3xl text-center mb-6">Login</h1>
        <form className="flex flex-col gap-4">
          <input
            //   onChange={(event) => handleChange("email", event.target.value)}
            placeholder="Email"
            required
            type="email"
            id="email"
          />
          <input
            //   onChange={(event) => handleChange("password", event.target.value)}
            placeholder="Password"
            required
            type="password"
            id="password"
          />
          {/* {error && <p className="error">{error}</p>} */}
          <button className=" focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-8 mt-6">
            Login
            {/* {loading ? <>loading..</> : <>Login</>} */}
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Don&apos;t have an account?
          <Link
            //   state={{ from: location.pathname, recent: location.state?.from }}
            href="./register"
          >
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
}
