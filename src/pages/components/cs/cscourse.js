import React from 'react'
import { useState, useEffect } from "react";
import { auth, db } from '../../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import Selects from '@/pages/components/cs/select'
import Programming from '@/pages/images/programming.png';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Cards from './cscard'
import MyNav from '@/pages/components/Navbar'
import MyFooter from '@/pages/components/footer'
function CsCourse() {
    const [isRole, setIsRole] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                let q = query(collection(db, "students"), where("email", "==", user.email));
                getDocs(q).then((querySnapshot) => {
                    if (querySnapshot.size > 0) {
                        setIsRole("student")
                        return;
                    }
                }).catch((error) => {
                    console.log("Error getting documents: ", error);
                });
                q = query(collection(db, "teachers"), where("email", "==", user.email));
                getDocs(q).then((querySnapshot) => {
                    if (querySnapshot.size > 0) {
                        setIsRole("teacher")
                        window.location.assign("/components/Sidebar");
                    }
                }).catch((error) => {
                    console.log("Error getting documents: ", error);
                });
                setIsRole("unknown")
            }
        });
    }, [])
    return (
        <>
            {isRole === "student" ? (
                <>
                    <MyNav />
                    <div className=''>
                        <div className="hero h-96 md:h-[15em]   " style={{ backgroundImage: `url(${Programming.src})` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="text-white text-center p-6 py-8 lg:px-32 md:px-8 ">
                                <div className="max-w-md ">
                                    <h1 className="mb-5 text-5xl font-bold text-white">วิทยาการคอมพิวเตอร์</h1>
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
                            <p className='mt-5 mb-10 text-3xl font-bold text-[#1373BB]'>วิทยาการคอมพิวเตอร์</p>
                            <div className='mb-10'>
                                <Cards />
                            </div>
                        </div>
                    </div> <MyFooter />
                </>
            ) : (
                <>
                    <MyNav />
                    <div className=''>
                        <div className="hero h-96 md:h-[15em]   " style={{ backgroundImage: `url(${Programming.src})` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="text-white text-center p-6 py-8 lg:px-32 md:px-8 ">
                                <div className="max-w-md ">
                                    <h1 className="mb-5 text-5xl font-bold text-white">วิทยาการคอมพิวเตอร์</h1>
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
                            <p className='mt-5 mb-10 text-3xl font-bold text-[#1373BB]'>วิทยาการคอมพิวเตอร์</p>
                            <div className='mb-10'>
                                <Cards />
                            </div>
                        </div>
                    </div> <MyFooter />
                </>
            )}
        </>
    )
}

export default CsCourse