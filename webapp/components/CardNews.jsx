"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardNews({title, date, description, image}) {
  return (
    <div className='w-full  shadow-md rounded-[10px]'>
        <Image  className='rounded-t-[10px]' src={ image ? image : require("../public/images/news.png")} />
        <div className='w-full h-full flex flex-col p-4 gap-1'>
            <div className='w-full flex flex-col gap-2'>
                <div>
                    <h3 className='h3'>{title}</h3>
                    <h4 className='h4'>{date}</h4>
                </div>
                <p className='text-justify h-[50px] overflow-hidden opacity-60'>
                    {description}
                </p>
            </div>
            <Link href={""}>
                <h3 className='p-2 border-[#044721] border-2 w-full text-center text-[#044721] font-semibold'>Read more</h3>
            </Link>
        </div>
    </div>
  )
}
