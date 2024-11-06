"use client"

import React, { useState } from 'react';
import HeroSection from '@/components/common/HeroSection';
import Footer from '@/components/home/Footer';
import Navbar from '@/components/home/Navbar';
import { Colors } from '@/constants/colors';

export default function ProgramPage() {
  const [isBSITVisible, setBSITVisible] = useState(false);

  const toggleBSITVisibility = () => {
    setBSITVisible(prev => !prev);
  };

  const [isBSCPEVisible, setBSCPEVisible] = useState(false);

  const toggleBSCPEVisibility = () => {
    setBSCPEVisible(prev => !prev);
  };

  return (
    <div>
      <Navbar />
      <HeroSection heading={"Program"} sub={"Offers"} />
      <section className='w-full paddingvr'>
        <div className='flex flex-col gap-6'>
          

          <div>
            <h3 onClick={toggleBSCPEVisibility} className={`cursor-pointer text-[${Colors.primary}] p-3 bg-[${Colors.primary}] hover:text-[${Colors.accent}] hover:bg-[${Colors.accent}] bg-opacity-25 rounded-md shadow-md flex justify-between`}>
              Bachelor of Science in Computer Engineer (BSCPE) <span>▼</span>
            </h3>
            {isBSCPEVisible && (
              <div className='p-9'>
                <table className='program-table'>
                  <thead className='w-full border-b-2 border-gray-300'>
                    <tr className='flex justify-between'>
                      <th>Course Code</th>
                      <th>Description</th>
                      <th>Credits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='course bg-gray-200'>
                      <th>1st Year - 1st Semester</th>
                    </tr>
                    <tr className='course'>
                      <td>CS-101</td>
                      <td>Introduction to Computer Science</td>
                      <td>3</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}