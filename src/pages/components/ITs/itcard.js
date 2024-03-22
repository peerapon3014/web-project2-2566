// import React from 'react'
import EN from '@/pages/images/Software-engineer.png'
import Link from 'next/link';
// // import Data from '../images/Datastructure.png'
import Network from "@/pages/images/network.png"
import Parallel from "@/pages/images/parallel-programming.webp"
import Xml from "@/pages/images/XML.png"
import { useState, useEffect } from "react";
import { auth, db } from '../../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import React from 'react'

function Cards() {
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
      {isRole === "student" ? (
        <div className='flex item-center justify-center  mx-auto gap-20 container group'>
          <div className='grid grid-cols-1 gap-12  md:grid-cols-2 lg:grid-cols-3'>
            <div className='card bg-white group-hover:blur-sm shadow-xl shadow-blue-100/50  hover:!blur-none group-hover:scale-[0.9] hover:!scale-100 cursor-pointer'>
              <div className='rounded-xl overflow-hidden'>
                <img className=' ' src={Network.src} alt="En" />
              </div>
              <h4 className='text-xl font-bold mt-3'>SC362002 Algorithms and Data Structures</h4>
              <p className='text-sm leading-7 my-3  '>เทคโนโลยีสารสนเทศ ปริญญาตรี ภาคต้น</p>
              <button className='p-8 bg-[#1373BB] text-white py-2 rounded-lg  mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>
                ดูเพิ่มเติม
              </button>
            </div>
            <Link href='/components/Course' className='card bg-white group-hover:blur-sm shadow-xl shadow-blue-100/50  hover:!blur-none group-hover:scale-[0.9] hover:!scale-100 cursor-pointer'>
              <div className='card bg-white group-hover:blur-sm shadow-xl shadow-blue-100/50  hover:!blur-none group-hover:scale-[0.9] hover:!scale-100 cursor-pointer'>
                <div className='p-5 flex flex-col'>
                  <div className='rounded-xl overflow-hidden'>
                    <img className=' ' src={EN.src} alt="En" />
                  </div>
                  <h4 className='text-xl font-bold mt-3'>SC362202 Mobile and Web Application Development</h4>
                  <p className='text-sm leading-7 my-3  '>เทคโนโลยีสารสนเทศ ปริญญาตรี ภาคปลาย</p>
                  <button className='p-8 bg-[#1373BB] text-white py-2 rounded-lg  mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>
                    ดูเพิ่มเติม
                  </button>
                </div>
              </div>
            </Link>
            {/* <div className='card bg-white group-hover:blur-sm shadow-xl shadow-blue-100/50  hover:!blur-none group-hover:scale-[0.9] hover:!scale-100 cursor-pointer'>
            <div className='p-5 flex flex-col'>
              <div className='rounded-xl overflow-hidden'>
                <img className=' ' src={Parallel.src} alt="En" />
              </div>
              <h4 className='text-xl font-bold mt-3'>322371 Palallel programming</h4>
              <p className='text-sm leading-7 my-3  '>เทคโนโลยีสารสนเทศ ปริญญาตรี</p>
              <button className='p-8 bg-[#1373BB] text-white py-2 rounded-lg  mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>
                ดูเพิ่มเติม
              </button>
            </div>
          </div> */}
          </div>
        </div >
      ) : (
        <div className='flex item-center justify-center  mx-auto gap-20 container group'>
          <div className='grid grid-cols-1 gap-12  md:grid-cols-2 lg:grid-cols-3'>
            <div className='card bg-white group-hover:blur-sm shadow-xl shadow-blue-100/50  hover:!blur-none group-hover:scale-[0.9] hover:!scale-100 cursor-pointer'>
              <div className='rounded-xl overflow-hidden'>
                <img className=' ' src={Network.src} alt="En" />
              </div>
              <h4 className='text-xl font-bold mt-3'>SC362002 Algorithms and Data Structures</h4>
              <p className='text-sm leading-7 my-3  '>เทคโนโลยีสารสนเทศ ปริญญาตรี ภาคต้น</p>
              <button className='p-8 bg-[#1373BB] text-white py-2 rounded-lg  mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>
                ดูเพิ่มเติม
              </button>
            </div>
            <div className='card bg-white group-hover:blur-sm shadow-xl shadow-blue-100/50  hover:!blur-none group-hover:scale-[0.9] hover:!scale-100 cursor-pointer'>
              <div className='p-5 flex flex-col'>
                <div className='rounded-xl overflow-hidden'>
                  <img className=' ' src={EN.src} alt="En" />
                </div>
                <h4 className='text-xl font-bold mt-3'>SC362202 Mobile and Web Application Development</h4>
                <p className='text-sm leading-7 my-3  '>เทคโนโลยีสารสนเทศ ปริญญาตรี ภาคปลาย</p>
                <button className='p-8 bg-[#1373BB] text-white py-2 rounded-lg  mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>
                  ดูเพิ่มเติม
                </button>
              </div>
            </div>
            {/* <div className='card bg-white group-hover:blur-sm shadow-xl shadow-blue-100/50  hover:!blur-none group-hover:scale-[0.9] hover:!scale-100 cursor-pointer'>
          <div className='p-5 flex flex-col'>
            <div className='rounded-xl overflow-hidden'>
              <img className=' ' src={Parallel.src} alt="En" />
            </div>
            <h4 className='text-xl font-bold mt-3'>322371 Palallel programming</h4>
            <p className='text-sm leading-7 my-3  '>เทคโนโลยีสารสนเทศ ปริญญาตรี</p>
            <button className='p-8 bg-[#1373BB] text-white py-2 rounded-lg  mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>
              ดูเพิ่มเติม
            </button>
          </div>
        </div> */}
          </div>
        </div >
      )}
    </>

  )
}

export default Cards