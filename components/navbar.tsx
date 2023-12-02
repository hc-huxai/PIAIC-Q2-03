"use client";

import { BookOpenText, CircleUser, PenSquare, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <header className="w-full h-14 border-b border-b-gray-300 p-6 flex items-center justify-between gap-4 fixed top-0 bg-white z-10">
      {/* Logo */}
      <div
        className="flex items-center gap-x-2 cursor-pointer opacity-100 hover:opacity-75 transition-opacity"
        onClick={() => router.push("/")}
      >
        <BookOpenText size={30} />{" "}
        {window.location.pathname != '/' && (
          <h1 className="text-2xl font-semibold font-serif tracking-tighter">
            Directory
          </h1>
        )}
      </div>

      {/* Search Bar */}
      <div className="ml-0 mr-auto flex items-center gap-x-2 bg-gray-100 py-2 px-4 rounded-3xl">
        <input
          type="text"
          className="focus:outline-none peer bg-gray-100 text-sm"
          placeholder="Search"
        />
        <Search
          strokeWidth={1.3}
          size={20}
          className="stroke-gray-700 peer-focus:stroke-black transition-all cursor-pointer hover:stroke-black"
        />{" "}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-x-4">
        {/* Write Button */}
        <button className="flex items-center gap-x-1 text-gray-500 text-sm hover:text-black transition-colors">
          <PenSquare size={12} /> Write
        </button>

        {/* Auth Buttons */}
        {/* <div className="flex items-center gap-x-1 mx-4">
          <button className="py-1 px-3 text-sm rounded-3xl bg-green-600 hover:bg-green-700 text-white transition-colors">
            Login
          </button>
          <button className="py-1 px-3 text-sm rounded-3xl hover:bg-gray-100 transition-colors">
            Sign Up
          </button>
        </div> */}

        {/* Account Circle */}
        <CircleUser
          className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          size={28}
        />
      </div>
    </header>
  );
};

export { Navbar };
