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
import { auth, db } from '../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const [isRole, setIsRole] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let q = query(collection(db, "students"), where("email", "==", user.email));
        getDocs(q).then((querySnapshot) => {
          if (querySnapshot.size > 0) {
            setIsRole("student")
            return;
          }
        }).catch((error) => {
          console.log("Error getting documents: ", error);
        });
        q = query(collection(db, "teachers"), where("email", "==", user.email));
        getDocs(q).then((querySnapshot) => {
          if (querySnapshot.size > 0) {
            setIsRole("teacher")
            window.location.assign("/components/Sidebar");
          }
        }).catch((error) => {
          console.log("Error getting documents: ", error);
        });
        setIsRole("unknown")
      }
    });
  }, [])

  return (
    <>
      <div className='bg-white'>
        <MyNav />
        <div className='inset-0 -z-10'>
          <Hero />
        </div>
        <div className='p-6 py-8 lg:px-32 md:px-8 mt- inset-0 -z-10'>
          {isRole === "student" && (
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
