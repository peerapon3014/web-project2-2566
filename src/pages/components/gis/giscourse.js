import React from 'react'
import Link from 'next/link';
import Selects from '@/pages/components/cs/select'
import Gis from '@/pages/images/gis.png';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Select } from 'flowbite-react';
import Cards from './giscard'
import MyNav from '@/pages/components/Navbar' 
import MyFooter from '@/pages/components/footer'  
function cscourse() {
    return (
        <>
        <MyNav/>
         <div className=''>
                <div className="hero h-96 md:h-[15em]   " style={{ backgroundImage: `url(${Gis.src})` }}>
                    <div className="hero-overlay "></div>
                    <div className="text-white text-center p-6 py-8 lg:px-32 md:px-8 ">
                        <div className="max-w-md ">
                            <h1 className="mb-5 text-5xl font-bold text-white">ภูมิศาสตร์สารสนเทศ</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className="flex justify-center p-6  bg-blue-100 lg:px-32 md:px-8 ">
                    <Selects />
                    <button className="btn group ml-5 rounded-full px-6 border text-[#1373BB] border-[#1373BB] bg-white hover:bg-[#1373BB] hover:text-white">   
                        <MagnifyingGlassIcon className="h-6 w-6  text-[#1373BB] group-hover:text-white" />
                        ค้นหา
                    </button>
                </div>
            </div>
            <div className='p-6 py-8 lg:px-32 md:px-8 mt- inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)]'>
                <div>
                    <p className='mt-5 mb-10 text-3xl font-bold text-[#1373BB]'>ภูมิศาสตร์สารสนเทศ</p>
                    <div className='mb-10'>
                        <Cards />
                    </div>
                    <div className='mb-10'>
                        <Cards />
                    </div>
                </div>
            </div> 
            <MyFooter/> 

        </>

    )
}

export default cscourse