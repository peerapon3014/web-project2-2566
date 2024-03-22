import { useState } from 'react'
import MyYoshi from '../images/Yoshi.png';
import Ann from '../images/Ann.jpg';
import Home from '../images/home.png';
import { animals, fac, pack } from "../data/dataselect";
import HomeAdmin from './HomeAdmin';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Input, Select, SelectItem } from "@nextui-org/react";
import { ChevronDoubleLeftIcon, HomeIcon, ArchiveBoxXMarkIcon, PencilSquareIcon, DocumentPlusIcon,ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

const SidebarContext = () => {
    const [open, setOpen] = useState(true);
    const variants = ["bordered"];

    const placements = [

        "outside",

    ];
    const Menus = [
        { title: "หน้าหลัก", src: "home" },
        { title: "เพิ่มวิชาเรียน", src: "Chat" },
        { title: "แก้ไขวิชาเรียน", src: "User" },

    ];

    return (
        <>
            <div className='flex bg-[#0F75BE] '>
                <div className={`${open ? "w-72" : "w-20 "
                    } bg-[#1373BB] h-screen p-5  pt-8 relative duration-300`}>

                    <ChevronDoubleLeftIcon className={`absolute cursor-pointer -right-3 top-12 w-7  text-white
            ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)} />

                    <div className="flex gap-x-4 items-center">
                        <image
                            src={Ann.src}
                            className={`cursor-pointer rounded-full w-10 duration-500  ${open && "rotate-[360deg]"
                                }`}
                        />
                        <h1
                            className={`text-white origin-left font-medium text-lg duration-200 ${!open && "scale-0"
                                }`}
                        >
                            Ann
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

                        <Link href='/components/SidebarQuestion'>
                            <li

                                className={"flex hover:bg-blue-400  p-2  cursor-pointer  rounded-md   text-white text-sm items-center gap-x-4 "}
                            >
                                <ChatBubbleOvalLeftIcon className="h-8 w-8 text-gray-200" />

                                {/* <img
                  src={MyYoshi.src}
                  className={`cursor-pointer rounded-full w-10 duration-500  ${open && "rotate-[360deg]  "
                    }`}
                /> */}
                                <span className={`${!open && "hidden"} origin-left text-[1.2em] duration-200`}>
                                    <p className='text-lg mt-2  text-white '>เพิ่มคำถาม</p>
                                </span>

                            </li>
                        </Link>

                    </ul>


                </div>
                <div className=' flex-1 bg-white  p-6 py-8 lg:px-32 md:px-8 m-5 rounded-lg h-[60em]'>
                    <form>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className=" mt-5 text-[2em] leading-6 text-center font-bold  text-[#0F75BE] ">เพิ่มเช็คชื่อ</h2>


                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 ">

                                    {/* <div className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-2">

                                            <div className=" w-full items-end md:flex-nowrap mb-6 md:mb-0 gap-4">

                                                {placements.map((placement) => (
                                                    <Input
                                                        key={placement}
                                                        type="text"
                                                        label="ชื่อรายวิชา"
                                                        labelPlacement={placement}

                                                    />
                                                ))}
                                            </div>
                                        </div>

                                    </div> */}
                                    <div className="w-full sm:col-span-2 gap-4">
                                        {variants.map((variant) => (
                                            <div key={variant} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                                <Input type="email" variant={variant} label="ชื่อรายวิชา" />

                                            </div>
                                        ))}
                                    </div>
                                    <div className="w-full sm:col-span-2 ">
                                        {variants.map((variant) => (
                                            <div key={variant} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                                <Select
                                                    variant={variant}
                                                    label="ระดับการศึกษา"
                                                    className="max-w-xs"
                                                >
                                                    {animals.map((animal) => (
                                                        <SelectItem key={animal.value} value={animal.value}>
                                                            {animal.label}
                                                        </SelectItem>
                                                    ))}
                                                </Select>

                                            </div>
                                        ))}
                                    </div>
                                    {/* <div className="sm:col-span-2">
                                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                            ระดับการศึกษา
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                                <option>ปริญญาตรี</option>
                                                <option>ปริญญาโท</option>

                                            </select>
                                        </div>
                                    </div> */}
                                    <div className="w-full sm:col-span-2 ">
                                        {variants.map((variant) => (
                                            <div key={variant} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                                <Select
                                                    variant={variant}
                                                    label="สาขาวิชา"
                                                    className="max-w-xs"
                                                >
                                                    {fac.map((animal) => (
                                                        <SelectItem key={animal.value} value={animal.value}>
                                                            {animal.label}
                                                        </SelectItem>
                                                    ))}
                                                </Select>

                                            </div>
                                        ))}
                                    </div>

                                    {/* <div className="sm:col-span-2">
                                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                            ภาคการศึกษา
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                                <option>ภาคต้น</option>
                                                <option>ภาคปลาย</option>

                                            </select>
                                        </div>
                                    </div> */}
                                    <div className="w-full sm:col-span-2 ">
                                        {variants.map((variant) => (
                                            <div key={variant} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                                <Select
                                                    variant={variant}
                                                    label="ภาคการศึกษา"
                                                    className="max-w-xs"
                                                >
                                                    {pack.map((animal) => (
                                                        <SelectItem key={animal.value} value={animal.value}>
                                                            {animal.label}
                                                        </SelectItem>
                                                    ))}
                                                </Select>

                                            </div>
                                        ))}
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="cover-photo" className="block text-xl font-medium leading-6 text-gray-900">
                                            เนื้อหา
                                        </label>
                                        <div className="w-full sm:col-span-2 gap-4 mt-5">
                                        {variants.map((variant) => (
                                            <div key={variant} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                                <Input type="email" variant={variant} label="ชื่อหัวข้อบทเรียน" />

                                            </div>
                                        ))}
                                    </div>
                                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                            <div className="text-center">
                                                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                    >
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs leading-5 text-gray-600">PNG, JPG, PDF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <Link href='/components/Sidebar'>
                            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                ยกเลิก
                            </button>
                            </Link>

                            <Link href='/components/Sidebar'>
                                <button

                                    type="submit"
                                    className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    บันทึก
                                </button>

                            </Link>

                        </div>
                    </form>
                </div>
            </div>

        </>

    )
}

export default SidebarContext