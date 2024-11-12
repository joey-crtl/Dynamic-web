"use client"

import { Colors } from '@/constants/colors'
import { useTheme } from '@/context/ThemeContext'
import { grades } from '@/sample/grades'
import React from 'react'

export default function StudentGradesPage() {

  const { isDarkMode } = useTheme()
 
  return (
    <div className='flex flex-col gap-4'>
      <h3>Grades</h3>

      <div className={`flex items-center  ${isDarkMode ? `bg-[#282828] text-white` : 'bg-white text-black'} pl-3 gap-2 rounded-md`}>
        <table className='flex flex-col w-full'>
          <thead className='w-full'>
            <tr className={`flex justify-between items-center bg-[${Colors.primary}] text-white rounded-t-md grid grid-cols-7`}>
              <th className='data items-center col-span-1'>Course Code</th>
              <th className='data items-center col-span-4'>Course Name</th>
              <th className='data items-center col-span-1'>Credits</th>
              <th className='data items-center col-span-1'>Grades</th>
            </tr>
          </thead>
          <tbody>
            {/* {grades.map((grades))} */}
          </tbody>
        </table>
      </div>
    </div>
  )
}
