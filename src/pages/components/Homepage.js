import React from 'react'
import Hero from './Hero'

import Cards from './cardlate'
import EN from '../images/Software-engineer.png'
import styles from '@/styles/cardstyle.module.css'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Network from "../images/network.png"
import Parallel from "../images/parallel-programming.webp"
import Xml from "../images/XML.png"
import Accordion from "@/pages/data/Accordion"
import MyNav from '@/pages/components/Navbar' 
import MyFooter from '@/pages/components/footer'  
export default function Home() {
  return (
    <>
    <MyNav/>
      <div className='inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_bottom,theme(colors.indigo.100),white)] '>

        <Hero />
      </div>
      <div className='p-6 py-8 lg:px-32 md:px-8 mt- inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)]'>
        <div>
          <p className='mt-20 mb-10 text-3xl font-bold text-[#1373BB]'>รายวิชาเรียนล่าสุด </p>
          <Cards />
        </div>




        <div className=''>
          < div>   <p className='mt-20 mb-10 text-3xl font-bold text-[#1373BB]'>รายวิชาทั้งหมด</p>
            <Accordion /> </div>


        </div>
      </div>

      <MyFooter/> 

    </>
  )
}
