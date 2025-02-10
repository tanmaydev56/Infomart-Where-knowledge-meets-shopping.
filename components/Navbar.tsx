"use client";
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link'
import React from 'react'
import {MoonIcon, SunIcon} from '@heroicons/react/24/solid'
const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
  return (
    <nav className="bg-blue-600 text-white py-4 px-6 shadow-md sticky top-0 z-50">
    <div className="max-w-4xl mx-auto flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        MyWebsite
      </Link>
      <ul className="flex gap-6">
        <li>
          <Link href="/" className="hover:text-gray-200 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/articles" className="hover:text-gray-200 transition">
            Articles
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-200 transition">
            Contact
          </Link>
        </li>
      </ul>
  
    </div>
    <button
onClick={toggleTheme}
className="fixed top-2 right-5 p-3 bg-gray-200 dark:bg-gray-800 rounded-full"
>
{theme === "light" ? (
  <MoonIcon className="h-6 w-6 text-black" />
) : (
  <SunIcon className="h-6 w-6 text-yellow-400" />
)}
</button>
  </nav>
  )
}

export default Navbar
