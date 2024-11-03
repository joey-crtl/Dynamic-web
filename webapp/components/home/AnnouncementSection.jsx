"use client"

import React from 'react'
import { announcements } from '@/sample/data'
import { Colors } from '@/constants/colors'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';

export default function AnnouncementSection() {
  return (
    <section className={`bg-white w-full paddingvr py-10 flex flex-col gap-9 justify-between items-center`}>
        <h2 className={`text-[${Colors.primary}] text-2xl font-bold`}>Announcement</h2>
        <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={{ delay: 10000, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
            className='w-full h-[250px] md:h-[500px] shadow rounded-lg'
        >
            {announcements.map((data) => (
            <SwiperSlide key={data.id} className='w-full flex justify-center items-center'>
                <Image src={data.image} alt={data.title} objectFit='cover' layout='fill'/>
            </SwiperSlide>
            ))}
        </Swiper>
    </section>
  )
}
