
import React, { Component } from 'react'
import Link from 'next/link';
import MyLogo from '../images/Logo.png'
import Image from 'next/image';
import {
    ArrowRightIcon, BarsArrowUpIcon, ChevronRightIcon
} from '@heroicons/react/24/outline'


export default function footer() {
    return (
        <footer className="shadow-sm z-50 font-mtsans bg-[#0976BC]">
            <div className="mx-auto w-full max-w-screen-xl pt-6 lg:pt-8 px-4">
                <div className='md:flex md:items-center md:justify-between md:p-2 '>
                    <ul className="flex flex-wrap items-center justify-center gap-2 text-sm font-normal text-white sm:mt-0 pb-2 pt-2.5">
                        <li>
                            <Link href="#" className="mr-4 hover:underline md:mr-6">รายวิชาทั้งหมด</Link>
                        </li>
                        <li>
                            <Link href="#" className="mr-4 hover:underline md:mr-6">รายวิชาของฉัน</Link>
                        </li>
                        <li>
                            <Link href="#" className="mr-4 hover:underline md:mr-6">สาขาวิชา</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline">คู่มือการใช้งาน</Link>
                        </li>
                    </ul>
                    <span className="flex md:mt-0 sm:mt-2 w-full sm:w-auto text-sm text-white sm:text-center justify-center pb-2 pt-2.5"> College of Computing Khon Kaen University </span>
                </div>
            </div>
        </footer>
    );
}