"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { log } from "console";
const SignupPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [user]);
  const submitHandler = async () => {
    //console.log(user);
    try {
      const res = await axios.post("/api/users/signup", user);
      console.log(res);

      router.push("/login");
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <div className="flex bg-[#669bbc] min-h-screen justify-center items-center">
      <div className="bg-white text-black p-10 shadow-lg rounded-lg">
        <h1 className="font-bold text-center">SIGNUP</h1>
        <div className="flex flex-col my-4">
          <label>Username</label>
          <input
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="border-3 outline-none border border-zinc-600 rounded-md px-2 py-1"
          />
        </div>
        <div className="flex flex-col my-4">
          <label>Email</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="border-3 outline-none border border-zinc-600 rounded-md px-2 py-1"
          />
        </div>
        <div className="flex flex-col my-4">
          <label>Password</label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="border-3 outline-none border border-zinc-600 rounded-md px-2 py-1"
          />
        </div>
        <button
          onClick={submitHandler}
          className="bg-[#ff698f] w-full py-1 my-2 rounded-md text-white"
        >
          Signup
        </button>
        <p className="mt-4">
          Already have an account{" "}
          <Link href={"/login"} className="font-bold">
            LOGIN
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
