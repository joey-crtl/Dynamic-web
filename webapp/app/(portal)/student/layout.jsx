"use client";

import Topbar from '@/components/common/Topbar';

import React, { useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import Sidebar from '@/components/common/Sidebar';
import { StudentMenu } from '@/sample/navigation';

export default function StudentLayout({ children }) {
  return (
    <ThemeProvider> 
      <InnerLayout>{children}</InnerLayout>
    </ThemeProvider>
  );
}


const InnerLayout = ({ children }) => {
  
  const { isDarkMode } = useTheme(); 
  const [menu, setMenu] = useState([])

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("../../../lib/studentMenu.php");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMenu(data);
      } catch (error) {
        console.error('Error fetching the student menu:', error);
      }
    }

    fetchMenu()
  }, [])

  return (
    <div className={`h-screen overflow-hidden ${isDarkMode ? `bg-[#282828] text-white` : 'bg-white text-black'}`}>
      <Topbar heading={"Student Portal"}/>
      <div className="h-[calc(100%-84px)] grid grid-cols-5">
        <Sidebar menu={menu}/>
        <div className={`col-span-4 overflow-auto ${isDarkMode ? `bg-[#121212] text-white` : 'bg-[#f1f1f1] text-black'} p-6 flex flex-col justify-between`}>
          {children}    
        </div>
      </div>
    </div>
  );
}