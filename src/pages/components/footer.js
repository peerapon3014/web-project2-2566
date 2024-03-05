
import React, { Component } from 'react'
import Link from 'next/link';
import MyLogo from '../images/Logo.png'
import Image from 'next/image';
import {
    ArrowRightIcon, BarsArrowUpIcon, ChevronRightIcon
} from '@heroicons/react/24/outline'


export default function footer() {
    return (
        <footer className=" shadow-sm z-50 font-mtsans bg-[#0976BC]">
            <div className="mx-auto w-full max-w-screen-xl pt-6 lg:pt-8 px-4">
                {/* <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 ml-5">
                        <Link href="/" className="-m-1.5 p-1.5">

                            <Image className="h-10 w-auto" src={MyLogo} alt="Logo" />
                        </Link>
                        <p className='mt-2 text-md text-gray-500'>วิทยาลัยการคอมพิวเตอร์
                            123 ถ.มิตรภาพ ต.ในเมือง อ.เมือง จ.ขอนแก่น 40002
                        </p>
                        <p className='mt-5 text-md text-gray-500'>โทรศัพท์ 043-009700 ต่อ 44456, 44459, 44457</p>
                        <p className='mt-5 text-md text-gray-500'>Hot Line. 089-7102651, 089-71026459</p> 
                        <p className='mt-5 text-md text-gray-500'>Email : computing.kku@kku.ac.th</p> 
                    </div>
                    <div className="grid grid-cols-12 gap-8 sm:gap-6 mx-5 lg:mx-20 mt-5">
                        <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
                            <h2 className="mb-6 text-lg font-medium text-gray-900 uppercase">Help & Information</h2>
                            <ul className="text-gray-500 font-normal">
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Contact Us</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">FAQs</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Shipping & Returns</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Order Tracking</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Product Assurance</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Jewelry Care & Repair</Link>
                                </li>

                                <li >
                                    <Link href="#" className="hover:underline">Book an Appointment</Link>
                                </li>

                            </ul>
                        </div>
                        <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
                            <h2 className="mb-6 text-lg font-medium text-gray-900 uppercase ">Categories</h2>
                            <ul className="text-gray-500 font-normal">
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Earrings</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Necklaces</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Best Sellers</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Engagement Ring</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Casual Ring</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Women</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Men</Link>
                                </li>

                            </ul>
                        </div>
                        <div className='col-span-12 sm:col-span-12 lg:col-span-4'>
                            <h2 className="mb-6 text-lg font-medium text-gray-900 uppercase">Join Our Exclusive Offers</h2>
                            <ul className="text-gray-500 font-normal">
                                <span >Want exclusive offers and first access to the products? Sign up for the latest alert</span>

                                <div className="flex flex-row">
                                    <input type="text" placeholder="E-maill address" className="input bg-gray-50 input-bordered rounded-none my-6 w-full" />
                                    <button className="btn bg-[#0F172A] rounded-none my-6 hover:bg-gray-900">
                                        <ChevronRightIcon className="h-5 w-5 text-white translate-y-[0.15em]" />
                                    </button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div> */}
               

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