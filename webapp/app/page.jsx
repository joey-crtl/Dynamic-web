
import CardNews from '@/components/CardNews'
import AnnouncementSection from '@/components/home/AnnouncementSection'
import NewsUpdateSection from '@/components/home/NewsUpdateSection'


import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Colors } from '@/constants/colors'
import InstitutesSection from '@/components/home/InstitutesSection'
import Navbar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'




export default function Home() {
  return (
    <div>
      <Navbar />

      <section className={`bg-[${Colors.background[1]}] w-full h-[720px] flex justify-center items-center`}>
        <h1 className='text-center text-white'>
          Welcome to <br />
          <span className='text-[#FEFE00]'>Colegio de Montalban</span>
        </h1>
      </section>

      <NewsUpdateSection />

      <AnnouncementSection />
      
      <InstitutesSection />

      <Footer />
    </div>
  )
}