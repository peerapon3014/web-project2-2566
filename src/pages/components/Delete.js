import { useState } from 'react'
import MyYoshi from '../images/Yoshi.png';
import Home from '../images/home.png';
import { ChevronDoubleLeftIcon, HomeIcon, ArchiveBoxXMarkIcon, PencilSquareIcon, DocumentPlusIcon } from "@heroicons/react/24/outline";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import Table from './Table';
import Link from 'next/link';

const SidebarContext = () => {
    const [open, setOpen] = useState(true);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
             
                                <span className={`${!open && "hidden"} origin-left text-[1.2em] duration-200`}>
                                    <p className='text-[1em] mt-2  text-gray-200'>ลบรายวิชา</p>
                                </span>


                            </li>
                        </Link>


                    </ul>


                </div>

                <div className=' flex-1 bg-white  p-6 py-8 lg:px-32 md:px-8 m-5 rounded-lg h-[60em]'>
                    <h2 className=" mt-5 text-[2em] leading-6 text-center font-bold  text-[#0F75BE] ">ลบรายวิชา</h2>
                    <div className='mt-10'>
                        <Table />
                    </div>
                    <div className='flex items-center justify-end mt-5 '>

                   
                    <Button className='rounded-md bg-[#1373BB] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' onPress={onOpen}>บันทึก</Button>
                    <Modal
                        backdrop="opaque"
                        isOpen={isOpen}
                        onOpenChange={onOpenChange}
                        classNames={{
                            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                        }}
                    >
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    
                                    <ModalBody>
                                        <div class="p-4 md:p-5 text-center">
                                            <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">คุณต้องการลบรายวิชาที่เลือกทั้งหมด</h3>


                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            ยกเลิก
                                        </Button>
                                        <Button color="primary" onPress={onClose}>
                                            ลบ
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal> </div>



                </div>
            </div>

        </>

    )
}

export default SidebarContext