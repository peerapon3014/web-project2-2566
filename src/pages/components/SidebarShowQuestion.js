import React, { useState, useEffect } from 'react'
import {
  ChevronDoubleLeftIcon,
  ArrowRightStartOnRectangleIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  UserIcon,
  QuestionMarkCircleIcon 
} from "@heroicons/react/24/outline";
import Link from 'next/link';
import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, db } from '../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";
import { useRouter } from 'next/router';
import ShowQuestion from "@/pages/components/ShowQuestion";

const SidebarShowQuestionContext = () => {
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [isRole, setIsRole] = useState(null)
  const router = useRouter();

  const Logout = () => {
    if (window.confirm('คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?')) {
      signOut(auth)
        .then(() => {
          setUser(null);
          router.push('/');
          alert('คุณได้ออกจากระบบแล้ว');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('ยกเลิกการออกจากระบบ');
    }
  };

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let q = query(collection(db, "students"), where("email", "==", user.email));
        getDocs(q).then((querySnapshot) => {
          if (querySnapshot.size > 0) {
            setIsRole("student")
            history.push("/");
          }
        }).catch((error) => {
          console.log("Error getting documents: ", error);
        });
        q = query(collection(db, "teachers"), where("email", "==", user.email));
        getDocs(q).then((querySnapshot) => {
          if (querySnapshot.size > 0) {
            setIsRole("teacher")
          } else {
            setIsRole("unknown");
            router.push('/');
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
      {isRole === "teacher" && (
        <div className='flex bg-[#0F75BE] '>
          <div className={`${open ? "w-72" : "w-20 "
            } bg-[#1373BB] h-screen p-5  pt-8 relative duration-300`}>

            <ChevronDoubleLeftIcon className={`absolute cursor-pointer -right-3 top-12 w-7  text-white
              ${!open && "rotate-180"}`}
              onClick={() => setOpen(!open)} />

            <div className="flex gap-x-4 items-center">
              <img src={user.photoURL}
                className={`cursor-pointer rounded-full w-10 duration-500  ${open && "rotate-[360deg]"
                  }`}
              />
              <h1
                className={`text-white origin-left font-medium text-lg duration-200 ${!open && "scale-0"
                  }`}
              >
                {user.displayName}
                <p className='text-sm text-gray-300 '>{user.email}</p>
              </h1>
            </div>
            <ul className="pt-6">
              <Link href='/components/Sidebar'>
                <li className={"flex hover:bg-blue-400  p-2  cursor-pointer  rounded-md   text-white text-sm items-center gap-x-4 "}>
                  <ClipboardDocumentCheckIcon className="h-8 w-8 text-white" />
                  <span className={`${!open && "hidden"} origin-left text-[1.2em] duration-200`}>
                    <p className='text-lg mt-2  text-white '>เช็คชื่อ</p>
                  </span>
                </li>
              </Link>
              <Link href='/components/SidebarShowStudent'>
                <li className={"flex hover:bg-blue-400  p-2  cursor-pointer  rounded-md   text-white text-sm items-center gap-x-4 "}>
                  <UserGroupIcon className="h-8 w-8 text-white" />
                  <span className={`${!open && "hidden"} origin-left text-[1.2em] duration-200`}>
                    <p className='text-lg mt-2  text-white '>แสดงรายชื่อนักเรียน</p>
                  </span>
                </li>
              </Link>
              <Link href='/components/SidebarShowTeacher'>
                <li className={"flex hover:bg-blue-400  p-2  cursor-pointer  rounded-md   text-white text-sm items-center gap-x-4 "}>
                  <UserIcon className="h-8 w-8 text-white" />
                  <span className={`${!open && "hidden"} origin-left text-[1.2em] duration-200`}>
                    <p className='text-lg mt-2  text-white '>แสดงรายชื่ออาจารย์</p>
                  </span>
                </li>
              </Link>
              <Link href='/components/SidebarShowQuestion'>
                <li className={"flex hover:bg-blue-400  p-2  cursor-pointer  rounded-md   text-white text-sm items-center gap-x-4 "}>
                  <QuestionMarkCircleIcon  className="h-8 w-8 text-white" />
                  <span className={`${!open && "hidden"} origin-left text-[1.2em] duration-200`}>
                    <p className='text-lg mt-2  text-white '>แสดงคำถามทั้งหมด</p>
                  </span>
                </li>
              </Link>
              <Link href="#" onClick={Logout}>
                <li
                  className={"flex hover:bg-blue-400  p-2  cursor-pointer  rounded-md   text-white text-sm items-center gap-x-4 "}
                >
                  <ArrowRightStartOnRectangleIcon className="h-8 w-8 text-white" />
                  <span className={`${!open && "hidden"} origin-left text-[1.2em] duration-200`}>
                    <p className='text-[1em] mt-2  text-gray-200'>ออกจากระบบ</p>
                  </span>
                </li>
              </Link>
            </ul>
          </div>
          <div className=' flex-1 '>
            <ShowQuestion />
          </div>
        </div>
      )}
    </>
  )
}

export default SidebarShowQuestionContext