"use client";

import Topbar from '@/components/common/Topbar';
import CustomButton from '@/components/CustomButton';
import React from 'react';
import { Colors } from '@/constants/colors';
import { usePathname, useRouter } from 'next/navigation';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';

export default function StudentLayout({ children }) {
  return (
    <ThemeProvider> {/* Wrap the children with ThemeProvider */}
      <InnerLayout>{children}</InnerLayout>
    </ThemeProvider>
  );
}


const InnerLayout = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { isDarkMode, toggleTheme } = useTheme();

  const buttonStyles = {
    dashboard: pathname === '/student/dashboard' ? `text-white bg-[${Colors.primary}]` : "",
    schedules: pathname === '/student/schedules' ? `text-white bg-[${Colors.primary}]` : "",
    requests: pathname === '/student/requests' ? `text-white bg-[${Colors.primary}]` : "",
    grades: pathname === '/student/grades' ? `text-white bg-[${Colors.primary}]` : ""
  };

  return (
    <div className={`h-screen overflow-hidden ${isDarkMode ? `bg-[#282828] text-white` : 'bg-white text-black'}`}>
      <Topbar />
      <div className="h-[calc(100%-84px)] grid grid-cols-5">
        <div className="col-span-1 h-full shadow-md p-6 flex flex-col gap-3">
          <CustomButton title={"Dashboard"} cmStyle={buttonStyles.dashboard} onClick={() => router.push('/student/dashboard')} />
          <CustomButton title={"Schedules"} cmStyle={buttonStyles.schedules} onClick={() => router.push('/student/schedules')} />
          <CustomButton title={"Grades"} cmStyle={buttonStyles.grades} onClick={() => router.push('/student/grades')} />
          <CustomButton title={"Requests"} cmStyle={buttonStyles.requests} onClick={() => router.push('/student/requests')} />
        </div>
        <div className={`col-span-4 overflow-auto ${isDarkMode ? `bg-[#121212] text-white` : 'bg-[#f1f1f1] text-black'} p-6 flex flex-col justify-between`}>
          {children}    
        </div>
      </div>
    </div>
  );
}