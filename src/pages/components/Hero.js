import { useState, useEffect } from "react";
import { auth, db } from '../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { Dialog } from '@headlessui/react'
import { Bars3Icon, ArrowLongRightIcon, CodeBracketSquareIcon, QrCodeIcon, GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline'
import BgHero from '../images/cover.png';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

export default function Hero() {
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
      <div className="hero h-96 md:h-[40em]  flex justify-start " style={{ backgroundImage: `url(${BgHero.src})` }}>
        <div className="text-white p-6 py-8 lg:px-32 md:px-8 ">
          <div className="max-w-md ">
            <h1 className="mb-5 text-5xl font-bold text-[#1c7aff]">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'TWACHI.NET',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"

                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1.5em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </h1>
            <p className="mb-5 text-xl ">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Web Classroom',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"

                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </p>
            {isRole === "student" && (
              <Link href="/components/Allcourse">
                <button className="btn btn-white">
                  เริ่มเรียน
                  <ArrowLongRightIcon className="h-6 w-6 text-gray-500" />
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className='mt-[-4em] ml-24  '>
        <div className="grid grid-cols-3 gap-8 p-6 lg:px-32 md:px-8 ">
          <Link href="/components/cs/cscourse" className="flex px-8 p-4 flex-col items-center bg-white  cursor-pointer hover:-translate-y-1 hover:shadow-2xl border h-20 border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-200 ">
            <QrCodeIcon className="object-cover w-auto  h-10 md:h-10 md:w-auto text-[#1373BB]" />
            <div className="flex flex-col justify-between p-4 leading-normal ">
              <p className=" text-xl text-gray-500 ">วิทยาการคอมพิวเตอร์</p>
            </div>
          </Link>
          <Link href="/components/ITs/itcourse" className="flex px-8 p-4 flex-col cursor-pointer hover:-translate-y-1 hover:shadow-2xl items-center bg-gray-100 border h-20 border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-200 ">
            <CodeBracketSquareIcon className="object-cover w-auto  h-10 md:h-10 md:w-auto text-[#1373BB]" />
            <div className="flex flex-col justify-between p-4 leading-normal ">
              <p className=" text-xl text-gray-500 ">เทคโนโลยีสารสนเทศ</p>
            </div>
          </Link>
          <Link href='/components/gis/giscourse' className='flex px-8 p-4 flex-col cursor-pointer hover:-translate-y-1 hover:shadow-2xl items-center bg-gray-100 border h-20 border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-200 '>
            <GlobeAsiaAustraliaIcon className="object-cover w-auto  h-10 md:h-10 md:w-auto text-[#1373BB]" />
            <div className="flex flex-col justify-between p-4 leading-normal ">
              <p className=" text-xl text-gray-500 ">ภูมิศาสตร์สารสนเทศ</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
