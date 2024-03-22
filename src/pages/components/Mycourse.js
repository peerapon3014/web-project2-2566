import React from 'react'
import { useState, useEffect } from "react";
import { auth, db } from '../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import Link from 'next/link';
import { BookOpenIcon } from "@heroicons/react/24/outline";
import MyNav from '@/pages/components/Navbar'
import MyFooter from '@/pages/components/footer'
import { useRouter } from 'next/router';

function Cscourse() {
  const [isRole, setIsRole] = useState(null)
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let q = query(collection(db, "students"), where("email", "==", user.email));
        getDocs(q).then((querySnapshot) => {
          if (querySnapshot.size > 0) {
            setIsRole("student")
          } else {
            setIsRole("unknown");
            router.push('/');
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
      } else {
        setIsRole("unknown")
        router.push('/');
      }
    });
  }, [])
  return (
    <>
      {isRole === "student" && (
        <>
          <MyNav />
          <div className="relative isolate overflow-hidden p-6 py-8 lg:px-32 md:px-8 mb-0 ">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className=" py-24 sm:py-14">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="">
                  <h1 className=' mb-10 text-3xl font-bold text-[#1373BB]'>รายวิชาของฉัน</h1>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mb-32" >
                    <Link href='/components/continuous'
                      className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                      <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#1373BB] transition-all duration-300 group-hover:scale-[10]"></span>
                      <div className="relative z-10  mx-auto max-w-md ">
                        <span className="grid h-20 w-20 place-items-center rounded-full bg-[#1373BB] transition-all duration-300 group-hover:bg-sky-300">
                          <BookOpenIcon className="h-10 w-10 text-white transition-all" />
                        </span>
                        <div
                          className=" pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                          <h1 className=" text-xl font-bold  ">Mobile and Web Application Development</h1>
                          <p className="mb-3 font-normal ">การพัฒนาโปรแกรมประยุกต์สำหรับอุปกรณ์เคลื่อนที่และเว็บ</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MyFooter />
        </>
      )}
    </>
  )
}
export default Cscourse