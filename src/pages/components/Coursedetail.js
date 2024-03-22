import { useState, useEffect } from "react";
import { auth, db } from '../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { CheckIcon } from '@heroicons/react/20/solid'
import Webde from '../images/webde.png'
const includedFeatures = [
  'การพัฒนาโปรแกรมประยุกต์สำหรับอุปกรณ์โทรศัพท์ แทปเล็ต และ อุปกรณ์เคลื่อนที่อื่นๆ ที่ใช้ระบบปฏิบัติการ แอนดรอยด์ หรือ ไอโอเอส โดยใช้เว็บเทคโนโลยี ได้แก่ HTML5 CSS และส่วนต่อประสานโปรแกรมประยุกต์ด้วยจาวาสคริปต์เพื่อเข้าถึงการวางแนวอุปกรณ์ การจัดการการสัมผัสหน้าจอ แหล่งเก็บข้อมูลท้องถิ่น การเข้าถึงกล้องและการระบุตำแหน่ง'
]
import Accordion from "@/pages/data/Acconlate"
import MyNav from '@/pages/components/Navbar'
import MyFooter from '@/pages/components/footer'
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
                  <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-[#1373BB]">คำอธิบายรายวิชา</h4>
                    <div className="h-px flex-auto bg-blue-100" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-1 sm:gap-6"
                  >
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon className="h-6 w-5 flex-none text-[#1373BB]" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className=" py-10  lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <img className="object-cover w-full  rounded-t-lg h-96 md:h-auto md:w-100 md:rounded-none md:rounded-s-lg" src={Webde.src} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-white  shadow-xl shadow-blue-100/50  mt-10 p-8 '>
                <div className='mb-5 '>
                  <Accordion />

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
