"use client"

import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import React from 'react';
import { Colors } from '@/constants/colors';

export default function Topbar() {
  const { isDarkMode, toggleTheme } = useTheme(); 

  return (
    <div className={`w-full flex justify-between items-center p-6 shadow-md ${isDarkMode ? `bg-[${Colors.background[1]}]` : 'bg-white'}`}>
      <h2 className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Student Portal</h2>

      <div className='flex items-center gap-4'>
        <button onClick={toggleTheme} className='flex items-center'>
          {/* Show moon icon if in light mode, otherwise show light icon */}
          {isDarkMode ? (
            <Image src={require("@/public/icons/light.png")} width={24} height={24} alt="Light Mode" />
          ) : (
            <Image src={require("@/public/icons/moon.png")} width={24} height={24} alt="Dark Mode" />
          )}
        </button>
        <h3 className={`${isDarkMode ? 'text-white' : 'text-black'}`}>22-01383</h3>
        <Image src={require("@/public/images/avatar.png")} height={40} width={40} alt="Avatar" />
      </div>
    </div>
  );
}