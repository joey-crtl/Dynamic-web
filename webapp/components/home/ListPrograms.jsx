import { Colors } from '@/constants/colors'
import React from 'react'

export default function ListPrograms() {
  return (
    <div>
        <h3 onClick={toggleBSITVisibility} className={`cursor-pointer text-[${Colors.primary}] p-3 bg-[${Colors.primary}] bg-opacity-25 rounded-md shadow-md flex justify-between`}>
            {program_name} ({program_code}) <span>▼</span>
        </h3>
        {isBSITVisible && (
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
                </tbody>
            </table>
            </div>
        )}
    </div>
  )
}
