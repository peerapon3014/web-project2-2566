import React, { useState, useEffect } from 'react'
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
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  }, []);

  return (
    <>
      <div className='bg-white'>
        <MyNav />
        <div className='inset-0 -z-10'>
          <Hero />
        </div>
        <div className='p-6 py-8 lg:px-32 md:px-8 mt- inset-0 -z-10'>
          {!user ? null : (
            <div>
              <p className='mt-20 mb-10 text-3xl font-bold text-[#1373BB]'>รายวิชาเรียนล่าสุด </p>
              <Cards />
            </div>
          )}
          <div>
            <p className='mt-20 mb-10 text-3xl font-bold text-[#1373BB]'>รายวิชาทั้งหมด</p>
            <Accordion />
          </div>
        </div>
      </div>
      <MyFooter />
    </>
  )
}
