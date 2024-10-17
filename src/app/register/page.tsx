"use client";
import Link from "next/link";
import React from "react";
import Header from "../ui/header";
import { createUser } from "@/actions/actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";

export default function Register() {
  const [formData, setFormData] = React.useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });
  const { pending } = useFormStatus();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const router = useRouter();
  const handleSubmit = async (e) => {
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    const result = await createUser(data);

    if (result && result.success) {
      toast.success(result.message, { duration: 3000 });
      if (result.redirect) {
        router.push(result.redirect);
      }
    } else if (result) {
      toast.error(result.message, { duration: 3000 });
    } else {
      toast.error("An unexpected error occurred", { duration: 3000 });
    }
  };
  return (
    <>
      <Header />
      <div className=" max-w-[500px] md:max-w-[700px] px-8 mx-auto mt-20">
        <h1 className="text-3xl text-center mb-6">Register</h1>
        <form
          action={handleSubmit}
          className="flex flex-col md:grid md:grid-cols-[repeat(2,1fr)]  gap-4"
        >
          <input
            onChange={handleInputChange}
            placeholder="Email"
            required
            type="email"
            name="email"
          />
          <input
            onChange={handleInputChange}
            placeholder="Username"
            required
            type="text"
            name="username"
          />
          <input
            onChange={handleInputChange}
            placeholder="Phone number"
            type="number"
            name="phone"
          />

          <input
            onChange={handleInputChange}
            placeholder="Your Address"
            type="text"
            name="address"
          />
          <input
            onChange={handleInputChange}
            placeholder="Password"
            required
            type="password"
            name="password"
          />
          <input
            onChange={handleInputChange}
            placeholder="Confirm Password"
            required
            type="password"
            name="confirmPassword"
          />
          {/* {error && <p className="error">{error}</p>} */}
          <button
            disabled={pending}
            className=" col-span-full focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-8 mt-6"
          >
            {pending ? <>loading..</> : <>Signup</>}
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Already have an account?
          <Link
            //   state={{ from: location.pathname, recent: location.state?.from }}
            href="../login"
          >
            Login
          </Link>
        </p>
      </div>
    </>
  );
}
