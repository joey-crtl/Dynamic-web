"use client"

// webapp/components/CustomButton.jsx
import { Colors } from '@/constants/colors';
import React from 'react';
import { useTheme } from '@/context/ThemeContext'; // Import the useTheme hook

export default function CustomButton({ title, cmStyle, onClick, bgColor }) {
  const { isDarkMode } = useTheme();

  return (
    <button
      onClick={onClick}
      className={`w-full p-3 rounded-xl text-lg font-semibold text-left shadow hover:text-white ${cmStyle} 
        ${isDarkMode ? 'text-white' : 'text-black'} 
        ${isDarkMode ? 'hover:bg-[#444]' : `hover:bg-[${Colors.primary}]`}`}
      style={{ backgroundColor: bgColor }}
    >
      {title}
    </button>
  );
}