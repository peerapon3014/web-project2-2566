import React, { useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import CsCards from './cs/cscard'
import ITCards from './ITs/itcard'
import GisCards from './gis/giscard'
import AllCards from './Allcard'
import Webde from '../images/webde.png'
import MyNav from '@/pages/components/Navbar'
import MyFooter from '@/pages/components/footer'

function Allcourse() {
    const [isRole, setIsRole] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                let query = query(collection(db, "students"), where("email", "==", user.email));
                getDocs(query).then((querySnapshot) => {
                    if (querySnapshot.size > 0) {
                        setIsRole("student")
                        return;
                    }
                }).catch((error) => {
                    console.log("Error getting documents: ", error);
                });
                query = query(collection(db, "teachers"), where("email", "==", user.email));
                getDocs(query).then((querySnapshot) => {
                    if (querySnapshot.size > 0) {
                        setIsRole("teacher")
                        window.location.assign("/components/Sidebar");
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
            {isRole === "student" ? (
                <>
                    <MyNav />
                    <div className="relative isolate overflow-hidden bg-white p-6 py-8 lg:px-32 md:px-8 ">
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#1373BB] opacity-20 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                        <h1 className='mt-10 mb-10 text-3xl font-bold text-center text-[#1373BB]'>รายวิชาทั้งหมด</h1>
                        <div className=" py-24 sm:py-14">
                            <div className='mb-5'><AllCards /></div>
                            {/* <div className='mb-5'><ITCards /></div>
                                <div className='mb-5'><CsCards /></div>
                                <div className='mb-5'><GisCards /></div>  */}
                        </div>
                    </div><MyFooter />
                </>
            ) : (
                <>
                    <MyNav />
                    <div className="relative isolate overflow-hidden bg-white p-6 py-8 lg:px-32 md:px-8 ">
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#1373BB] opacity-20 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                        <h1 className='mt-10 mb-10 text-3xl font-bold text-center text-[#1373BB]'>รายวิชาทั้งหมด</h1>
                        <div className=" py-24 sm:py-14">
                            <div className='mb-5'><AllCards /></div>
                            {/* <div className='mb-5'><ITCards /></div>
                                <div className='mb-5'><CsCards /></div>
                                <div className='mb-5'><GisCards /></div>  */}
                        </div>
                    </div><MyFooter />
                </>
            )}
        </>
    )
}
export default Allcourse