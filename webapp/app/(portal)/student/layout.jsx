import Topbar from '@/components/common/Topbar';
import CustomButton from '@/components/CustomButton';
import React from 'react';

export default function StudentLayout({ children }) {
  return (
    <div className="h-screen overflow-hidden">
      <Topbar />
      <div className="h-[calc(100vh-64px)] grid grid-cols-5">
        <div className="col-span-1 h-full shadow-md p-6 flex flex-col gap-3">
          <CustomButton title={"Dashboard"}/>
          <CustomButton title={"Dashboard"}/>
          <CustomButton title={"Dashboard"}/>
          <CustomButton title={"Dashboard"}/>
        </div>
        <div className="col-span-4 overflow-auto bg-[#f1f1f1] p-6">
          {children}  
        </div>
      </div>
    </div>
  );
}