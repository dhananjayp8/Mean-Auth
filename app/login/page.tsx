import React from "react";

const page = () => {
  return (
    <div className="flex bg-[#669bbc] min-h-screen justify-center items-center">
      <div className="bg-white text-black p-10 shadow-lg rounded-lg">
        <h1 className="text-center">LOGIN</h1>
        <div className="flex flex-col my-4">
          <label>Email</label>
          <input
            type="email"
            className="border-3 outline-none border border-zinc-600 rounded-md px-2 py-1"
          />
        </div>
        <div className="flex flex-col my-4">
          <label>Password</label>
          <input
            type="password"
            className="border-3 outline-none border border-zinc-600 rounded-md px-2 py-1"
          />
        </div>
        <button className="bg-[#ff698f] w-full py-1 my-2 rounded-md text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default page;
