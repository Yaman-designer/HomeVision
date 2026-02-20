"use client";

import Link from "next/link";
import { Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-[#fff7f1]">
 

      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
            <img    src="/logo.png" alt="Logo" className="w-20 h-15 object-contain" />
        </Link>

        {/* Middle links */}
        <ul className="flex items-center gap-10 text-sm font-medium text-[#2c1b14]">
          <li>
            <Link
              href="#home"
              className="transition-colors font-bold hover:text-[#8a5b39]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#service"
              className="transition-colors font-bold  hover:text-[#8a5b39]"
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              href="#agents"
              className="transition-colors font-bold hover:text-[#8a5b39]"
            >
              Agents
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="transition-colors font-bold hover:text-[#8a5b39]"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Right side: icons + button */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-transparent text-[#2c1b14] transition-colors hover:border-[#2c1b14]/30 hover:bg-[#2c1b14]/5"
          >
            <Search className="h-4 w-4" />
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-transparent text-[#2c1b14] transition-colors hover:border-[#2c1b14]/30 hover:bg-[#2c1b14]/5"
          >
            <User className="h-4 w-4" />
          </button>

          <button
            type="button"
            className="rounded-md bg-[#2c1b14] px-5 py-2 text-sm font-medium text-[#fdf5ef] shadow-sm transition-all hover:-translate-y-[1px] hover:bg-[#3a251a]"
          >
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
}