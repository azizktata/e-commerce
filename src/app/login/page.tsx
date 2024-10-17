"use client";
import Link from "next/link";
import React from "react";
import Header from "../ui/header";
import { loginUser } from "@/actions/actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";

export default function Login() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const { pending: loading } = useFormStatus();
  const router = useRouter();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    const result = await loginUser(data);

    if (result.success) {
      toast.success(result.message, { duration: 3000 });
      if (result.redirect) {
        router.push(result.redirect);
      }
    } else {
      toast.error(result.message, { duration: 3000 });
    }
  };
  return (
    <>
      <Header />
      <div className=" max-w-[500px] px-8 mx-auto mt-20">
        <h1 className="text-3xl text-center mb-6">Login</h1>
        <form action={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={handleInputChange}
            //   onChange={(event) => handleChange("email", event.target.value)}
            placeholder="Email"
            required
            type="email"
            name="email"
          />
          <input
            //   onChange={(event) => handleChange("password", event.target.value)}
            onChange={handleInputChange}
            placeholder="Password"
            required
            type="password"
            name="password"
          />
          {/* {error && <p className="error">{error}</p>} */}
          <button
            disabled={loading}
            className=" focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-8 mt-6"
          >
            {loading ? <>loading..</> : <>Login</>}
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
