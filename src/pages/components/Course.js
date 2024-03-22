import { useState, useEffect } from "react";
import { auth, db } from '../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { CheckIcon } from '@heroicons/react/20/solid'
import Webde from '../images/webde.png'
const includedFeatures = [
  'HTML CSS Java Script',
  'JQuery Bootstap',
  'WebVR A-Frame',
  'VueJS',
  'ReactJS ',
  'Mobile App: React Native',
  'Firebase'
]
import Accordion from "@/pages/data/Adcordioncourse"
import MyNav from '@/pages/components/Navbar'
import MyFooter from '@/pages/components/footer'
import { Footer } from 'flowbite-react'
import { BookmarkSquareIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';
import Homepage from "@/pages/components/Homepage";
import Homeadmin from "@/pages/components/Sidebar";
import NotFound from '@/pages/components/NotFound'
import { useRouter } from 'next/router';

export default function Coursedetail() {
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
          <div className="p-6 py-8 lg:px-32 md:px-8 p-6 py-8 lg:px-32 md:px-8 mt- inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto  max-w-2xl rounded-3xl bg-white ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">SC362202 Mobile and Web Application Development</h3>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    สาขาเทคโนโลยีสารสนเทศ ปริญญาตรี
                  </p>
                  <div className='mt-10 '>
                    <p className='text-xl font-bold text-[#1373BB]'>เนื้อหา <span className='ml-[10.5em] text-xl text-gray-600'> 7 บทเรียน</span></p>
                    <p className='text-xl mt-5 font-bold text-[#1373BB]'>เหมาะสำหรับนักศึกษา<span className='ml-20 text-xl text-gray-600'> ระดับปริญาตรี </span></p>
                  </div>
                  <Link href='/components/Coursedetail'>
                    <button className='p-8 bg-[#1373BB] text-white py-2 rounded-lg  mt-10 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>
                      เริ่มเรียน
                    </button>
                  </Link>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className="   lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <img className="object-cover w-full  rounded-t-lg h-96 md:h-auto md:w-50 md:rounded-none md:rounded-s-lg" src={Webde.src} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=' mt-10 p-12 grid grid-cols-1 md:grid-cols-2 gap-4 '>
              <div>
                <button type="button" className="text-white bg-gradient-to-r   inline-flex  from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <BookmarkSquareIcon className="h-6 w-6 me-2 text-white" />
                  เกี่ยวกับรายวิชา
                </button>
                <p className='mt-5 text-sm leading-6 pr-10 text-gray-600'>
                  การพัฒนาโปรแกรมประยุกต์สำหรับอุปกรณ์โทรศัพท์ แทปเล็ต และ อุปกรณ์เคลื่อนที่อื่นๆ ที่ใช้ระบบปฏิบัติการ แอนดรอยด์ หรือ ไอโอเอส โดยใช้เว็บเทคโนโลยี ได้แก่ HTML5 CSS และส่วนต่อประสานโปรแกรมประยุกต์ด้วยจาวาสคริปต์เพื่อเข้าถึงการวางแนวอุปกรณ์ การจัดการการสัมผัสหน้าจอ แหล่งเก็บข้อมูลท้องถิ่น การเข้าถึงกล้องและการระบุตำแหน่ง
                </p>
              </div>
              <div>
                <button type="button" className="text-white bg-gradient-to-r   inline-flex  from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <BookmarkSquareIcon className="h-6 w-6 me-2 text-white" />
                  เนื้อหารายวิชา
                </button>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-[#1373BB]" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <MyFooter />
        </>
      )}
    </>
  )
}
