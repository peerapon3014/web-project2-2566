import React from 'react'
import Cards from './CardCheck'
import MyFooter from '@/pages/components/footer'
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

function HomeAdmin() {
    return (
        <>
            <div className='bg-white  p-6 py-8 lg:px-32 md:px-8 m-5 rounded-lg h-[60em]'>


                <div class="grid grid-cols-1 gap-12  md:grid-cols-2 lg:grid-cols-3 mt-10">
                    <div className='block max-w-sm p-6 bg-blue-100 border-b-4 border-[#1373BB] rounded-lg shadow '>
                        <p className='text-2xl font-bold tracking-tight text-[#0F75BE] '>จำนวนนักศึกษาทั้งหมด</p>
                        <p className='mb-2 mt-5 text-2xl font-bold tracking-tight text-blue-500'>52</p>
                    </div>
                    <div className='block max-w-sm p-6 bg-blue-100 rounded-lg shadow border-b-4 border-[#1373BB]'>
                        <p className='text-2xl font-bold tracking-tight text-[#0F75BE] '> จำนวนนักศึกษาที่เช็คชื่อ</p>
                        <p className='mb-2 mt-5 text-2xl font-bold tracking-tight text-blue-500'>48</p>
                    </div>
                    <div className='block max-w-sm p-6 bg-blue-100 rounded-lg shadow border-b-4 border-[#1373BB]'>
                        <p className='text-2xl font-bold tracking-tight text-[#0F75BE] '> จำนวนนักศึกษาที่ขาด</p>
                        <p className='mb-2 mt-5 text-2xl font-bold tracking-tight text-blue-500'>5</p>
                    </div>
                </div>

                <div className='mt-10 text-xl'>
                    <p className='text-3xl font-bold text-[#1373BB]'>รายวิชาทั้งหมด</p>
                    <div className='ml-2 flex justify-end'>
                        <div>
                            <Link href="/components/AddCheck">
                                <button
                                    className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    เพิ่มเช็คชื่อ
                                </button>
                            </Link>
                        </div>
                    </div>
                    
                    <div className='mt-10 grid grid-cols-1 gap-12  md:grid-cols-2 lg:grid-cols-3 '>
                        <Link href="/components/CheckDetail"><Cards /> </Link>
                        <Link href="/components/CheckDetail"><Cards /> </Link>
                        <Link href="/components/CheckDetail"><Cards /> </Link>
                        <Link href="/components/CheckDetail"><Cards /> </Link>
                        <Link href="/components/CheckDetail"><Cards /> </Link>
                        <Link href="/components/CheckDetail"><Cards /> </Link>
                    </div>
                </div>

            </div>

        </>

    )
}

export default HomeAdmin