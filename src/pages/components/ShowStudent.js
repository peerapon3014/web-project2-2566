import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import Cards from './CardAdcourse'
import MyFooter from '@/pages/components/footer'
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';
import { auth, db } from '../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";

function ShowStudent() {
    return (
        <>
            <div className='bg-white  p-6 py-8 lg:px-32 md:px-8 m-5 rounded-lg h-[60em]'>
                {/* <div className="grid grid-cols-1 gap-12  md:grid-cols-2 lg:grid-cols-3 mt-10">
                    <div className='block max-w-sm p-6 bg-blue-100 rounded-lg shadow border-b-4 border-[#1373BB]'>
                        <p className='text-2xl font-bold tracking-tight text-[#0F75BE] '>จำนวนนักศึกษาที่เช็คชื่อทั้งหมด</p>
                        <p className='mb-2 mt-5 text-2xl font-bold tracking-tight text-blue-500'>24</p>
                    </div>
                    <div className='block max-w-sm p-6 bg-blue-100 border-b-4 border-[#1373BB] rounded-lg shadow '>
                        <p className='text-2xl font-bold tracking-tight text-[#0F75BE] '>นักศึกษาทั้งหมด</p>
                        <p className='mb-2 mt-5 text-2xl font-bold tracking-tight text-blue-500'>{studentCount}</p>
                    </div>
                    <div className='block max-w-sm p-6 bg-blue-100 rounded-lg shadow border-b-4 border-[#1373BB]'>
                        <p className='text-2xl font-bold tracking-tight text-[#0F75BE] '>นักศึกษาที่ไม่ได้เช็คชื่อ</p>
                        <p className='mb-2 mt-5 text-2xl font-bold tracking-tight text-blue-500'>2</p>
                    </div>
                </div> */}
                <div className='mt-10 text-xl'>
                    <p className='text-3xl font-bold text-[#1373BB]'>แสดงรายชื่อนักเรียน</p>
                    <div className='flex justify-end'>
                        <Link href="/components/Addcourse">
                            <button className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                เพิ่มการเช็คชื่อ
                            </button>
                        </Link>
                    </div>
                    <div className='mt-10 grid grid-cols-1 gap-12  md:grid-cols-2 lg:grid-cols-3 '>
                        {/* <Link href="/components/Coursedetail"><Cards /> </Link>
                        <Link href="/components/Coursedetail"><Cards /> </Link>
                        <Link href="/components/Coursedetail"><Cards /> </Link>
                        <Link href="/components/Coursedetail"><Cards /> </Link>
                        <Link href="/components/Coursedetail"><Cards /> </Link>
                        <Link href="/components/Coursedetail"><Cards /> </Link> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowStudent