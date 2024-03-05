import { useState } from 'react'
import MyYoshi from '../images/Yoshi.png';
import Home from '../images/home.png';
import { ChevronDoubleLeftIcon,HomeIcon ,ArchiveBoxXMarkIcon,PencilSquareIcon,DocumentPlusIcon } from "@heroicons/react/24/outline";
import HomeAdmin from './HomeAdmin';
import Link from 'next/link';

const SidebarContext = () => {
  const [open, setOpen] = useState(true);
  // const Menus = [
  //   { title: "หน้าหลัก", src: "home", link: "/" },
  //   { title: "เพิ่มวิชาเรียน", src: "Chat", link: "/components/" },
  //   { title: "แก้ไขวิชาเรียน", src: "User", link: "/edit-course" },
  //   { title: "ลบวิชาเรียน", src: "User", link: "/delete-course" },
  // ];

  return (
    <>
      <div className='flex bg-[#0F75BE] '>
        <div className={`${open ? "w-72" : "w-20 "
          } bg-[#1373BB] h-screen p-5  pt-8 relative duration-300`}>

          <ChevronDoubleLeftIcon className={`absolute cursor-pointer -right-3 top-12 w-7  text-white
            ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)} />

          <div className="flex gap-x-4 items-center">
            <img
              src={MyYoshi.src}
              className={`cursor-pointer rounded-full w-10 duration-500  ${open && "rotate-[360deg]"
                }`}
            />
            <h1
              className={`text-white origin-left font-medium text-lg duration-200 ${!open && "scale-0"
                }`}
            >
              Kamon eiei
              <p className='text-sm text-gray-300 '>Admin</p>
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
                <DocumentPlusIcon  className="h-8 w-8 text-gray-200" />

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

          </ul>


        </div>

        <div className=' flex-1 '>
          <HomeAdmin />
        </div>
      </div>

    </>

  )
}

export default SidebarContext