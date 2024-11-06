import Image from 'next/image'
import React from 'react'

export default function Topbar() {
  return (
    <div className='w-full flex justify-between items-center p-6 shadow-md bg-white'>
        <h2>Student Portal</h2>

        <div className='flex items-center gap-4'>
            <h3>22-01383</h3>
            <Image src={require("@/public/images/avatar.png")} height={40} width={40} />
        </div>
    </div>
  )
}
