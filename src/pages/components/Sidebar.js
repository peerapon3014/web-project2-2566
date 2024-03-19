import React, { useState, useEffect } from 'react'
import { ChevronDoubleLeftIcon, HomeIcon, ArchiveBoxXMarkIcon, PencilSquareIcon, DocumentPlusIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import HomeAdmin from './HomeAdmin';
import Link from 'next/link';
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, db } from '../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";
import Homepage from "@/pages/components/Homepage";

const SidebarContext = () => {
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRole, setIsRole] = useState(null)


  const Logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        window.location.assign("/");
      })
      .catch((error) => {
        console.log(error);
      });
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
            window.location.assign("/");
          }
        }).catch((error) => {
          console.log("Error getting documents: ", error);
        });
        q = query(collection(db, "teachers"), where("email", "==", user.email));
        getDocs(q).then((querySnapshot) => {
          if (querySnapshot.size > 0) {
            setIsRole("teacher")
            return;
          }
        }).catch((error) => {
          console.log("Error getting documents: ", error);
        });
        // if(user.email.split("@")[1] == "kkumail.com"){
        //   setIsRole("student")
        //   return;
        // }
        setIsRole("unknown")
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
                <li
                  className={"flex hover:bg-blue-400  p-2  cursor-pointer  rounded-md   text-white text-sm items-center gap-x-4 "}
                >
                  <HomeIcon className="h-8 w-8 text-white" />

                  {/* <img
                    src={MyYoshi.src}
                    className={`cursor-pointer rounded-full w-10 duration-500  ${open && "rotate-[360deg]  "
                      }`}
                  /> */}
                  <span className={`${!open && "hidden"} origin-left text-[1.2em] duration-200`}>
                    <p className='text-lg mt-2  text-white '>หน้าหลัก</p>
                  </span>
                </li>
              </Link>

              <Link href='/components/Addcourse'>
                <li
                  className={"flex hover:bg-blue-400  p-2  cursor-pointer  rounded-md   text-white text-sm items-center gap-x-4 "}
                >
                  <DocumentPlusIcon className="h-8 w-8 text-gray-200" />
                  {/* <img
                    src={MyYoshi.src}
                    className={`cursor-pointer rounded-full w-10 duration-500  ${open && "rotate-[360deg]  "
                      }`}
                  /> */}
                  <span className={`${!open && "hidden"} origin-left text-[1.2em] duration-200`}>
                    <p className='text-[1em] mt-2  text-gray-200'>เพิ่มรายวิชา</p>
                  </span>
                </li>
              </Link>
              <Link href='/components/Edit'>
                <li
                  className={"flex hover:bg-blue-400  p-2  cursor-pointer  rounded-md   text-white text-sm items-center gap-x-4 "}
                >
                  <PencilSquareIcon className="h-8 w-8text-gray-200" />
                  {/* <img
                    src={MyYoshi.src}
                    className={`cursor-pointer rounded-full w-10 duration-500  ${open && "rotate-[360deg]  "
                      }`}
                  /> */}
                  <span className={`${!open && "hidden"} origin-left text-[1.2em] duration-200`}>
                    <p className='text-[1em] mt-2  text-gray-200'>แก้ไขรายวิชา</p>
                  </span>
                </li>
              </Link>
              <Link href='/components/Delete'>
                <li
                  className={"flex hover:bg-blue-400  p-2  cursor-pointer  rounded-md   text-white text-sm items-center gap-x-4 "}
                >
                  <ArchiveBoxXMarkIcon className="h-8 w-8 text-gray-200" />
                  {/* <img
                    src={MyYoshi.src}
                    className={`cursor-pointer rounded-full w-10 duration-500  ${open && "rotate-[360deg]  "
                      }`}
                  /> */}
                  <span className={`${!open && "hidden"} origin-left text-[1.2em] duration-200`}>
                    <p className='text-[1em] mt-2  text-gray-200'>ลบรายวิชา</p>
                  </span>
                </li>
              </Link>
              <button onClick={Logout}>
                <li
                  className={"flex hover:bg-blue-400  p-2  cursor-pointer  rounded-md   text-white text-sm items-center gap-x-4 "}
                >
                  <ArrowRightStartOnRectangleIcon className="h-8 w-8 text-gray-200" />
                  {/* <img
                    src={MyYoshi.src}
                    className={`cursor-pointer rounded-full w-10 duration-500  ${open && "rotate-[360deg]  "
                      }`}
                  /> */}
                  <span className={`${!open && "hidden"} origin-left text-[1.2em] duration-200`}>
                    <p className='text-[1em] mt-2  text-gray-200'>ออกจากระบบ</p>
                  </span>
                </li>
              </button>
            </ul>
          </div>
          <div className=' flex-1 '>
            <HomeAdmin />
          </div>
        </div>
      )}
    </>
  )
}

export default SidebarContext