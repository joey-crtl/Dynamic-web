"use client"

import { Colors } from '@/constants/colors';
import { useTheme } from '@/context/ThemeContext';
import React from 'react';

export default function StudentDashboardPage() {
  const { isDarkMode } = useTheme(); 

  return (
    <>
      <div className='grid grid-cols-5 gap-4 h-[40%]'>
        <div className={`col-span-3 ${isDarkMode ? `bg-[${Colors.background[1]}]` : `bg-white`} shadow-md rounded-lg flex flex-col items-center justify-between p-3`}>
          <h2 className={`border-b-2 ${isDarkMode ? `border-[${Colors.accent}]` : `border-[${Colors.primary}]` } inline-block`}>Profile</h2>
          <div>
            details
          </div>
        </div>
        <div className={`col-span-2 ${isDarkMode ? `bg-[${Colors.background[1]}]` : `bg-white`} shadow-md rounded-lg flex flex-col items-center justify-between p-3`}>
          <h2 className={`border-b-2 ${isDarkMode ? `border-[${Colors.accent}]` : `border-[${Colors.primary}]` } inline-block`}>Announcements</h2>
          d
        </div>
      </div>

      <div className='grid grid-cols-5 gap-4 h-[58%]'>
        <div className={`col-span-3 ${isDarkMode ? `bg-[${Colors.background[1]}]` : `bg-white`} shadow-md rounded-lg flex flex-col items-center justify-between p-3`}>
          <h2 className={`border-b-2 ${isDarkMode ? `border-[${Colors.accent}]` : `border-[${Colors.primary}]` } inline-block`}>Enrolled Courses</h2>
        </div>
        <div className={`col-span-2 ${isDarkMode ? `bg-[${Colors.background[1]}]` : `bg-white`} shadow-md rounded-lg flex flex-col items-center justify-between p-3`}>
          <h2 className={`border-b-2 ${isDarkMode ? `border-[${Colors.accent}]` : `border-[${Colors.primary}]` } inline-block`}>Schedules</h2>
        </div>
      </div>
    </>
  );
}