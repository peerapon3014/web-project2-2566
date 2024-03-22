import React from 'react'
import MyNav from '@/pages/components/Navbar'
import MyFooter from '@/pages/components/footer'
import Yoshi from '../images/Yoshi.png';
import BgHero from '../images/cover.png';
import { EnvelopeIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { Tabs, Tab, Chip, Input, Link, Button } from "@nextui-org/react";
function Profile() {
    const colors = [
        "primary",
        

    ];

    return (
        <>
            <MyNav />
            <div className='p-6 py-8 lg:px-32 md:px-8 mb-0 '>
                <div className="grid grid-rows-4 grid-flow-col gap-4 ">
                    <div className="row-span-3 ">


                        <div
                            className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                            <div className="rounded-t-lg h-32 overflow-hidden">
                                <img
                                    className="object-cover object-top w-full"
                                    src={BgHero.src}
                                    alt=""
                                />

                            </div>
                            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                <img
                                    className="object-cover object-top w-full"
                                    src={Yoshi.src}
                                    alt=""
                                />
                            </div>
                            <div className="text-center mt-2">
                                <h2 className="font-semibold">Kanemoto Yoshinori</h2>
                                <p className="text-gray-500">643020349-6    วิทยาการคอมพิวเตอร์</p>
                            </div>
                            <ul className="py-4 mt-2 text-gray-700 flex items-center ml-10">
                                <li className="flex flex-col items-center">


                                    <EnvelopeIcon className="h-6 w-6 text-gray-500" />



                                </li>
                                <span className='ml-5'>
                                    Yoshinori.k@kkumail.com
                                </span>

                            </ul>
                            <div className="p-4 border-t mx-8 mt-2">
                                <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">   ออกจากระบบ</button>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-3 col-span-2 bg-white   mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                        <div className="flex w-full flex-col ">
                            <Tabs
                                aria-label="Options"
                                color="primary"
                                variant="underlined"
                                classNames={{
                                    tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                                    cursor: "w-full bg-[#1373BB]",
                                    tab: "max-w-fit px-0 h-12",
                                    tabContent: "group-data-[selected=true]:text-[#1373BB]"
                                }}
                            >
                                <Tab
                                    key="photos"
                                    title={
                                        <div className="flex items-center space-x-2">
                                            <BookOpenIcon className="h-10 w-10 text-white transition-all" />
                                            <span>รายวิชา</span>

                                        </div>
                                    }>
                                    <div className="flex flex-col">


                                        <div className="grid grid-cols-1 px-12 mt-4 gap-4">
                                            <div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
                                                <div className="radial-progress text-[#1373BB]" style={{ "--value": 70 }} role="progressbar">70%</div>


                                                <div className="ml-4">
                                                    <h4 className='text-xl font-bold mt-3'>322371 Web Desigh Technologies</h4>
                                                    <p className='text-sm leading-7 my-3  '>เทคโนโลยีสารสนเทศ ปริญญาตรี</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
                                                <div className="radial-progress text-green-500 " style={{ "--value": 50 }} role="progressbar">50%</div>


                                                <div className="ml-4">
                                                    <h4 className='text-xl font-bold mt-3'>322371 Web Desigh Technologies</h4>
                                                    <p className='text-sm leading-7 my-3  '>เทคโนโลยีสารสนเทศ ปริญญาตรี</p>
                                                </div>
                                            </div>



                                        </div>
                                    </div>

                                </Tab>
                                <Tab
                                    key="mm"
                                    title={
                                        <div className="flex items-center space-x-2">
                                            <BookOpenIcon className="h-10 w-10 text-white transition-all" />
                                            <span>แก้ไขข้อมูล</span>

                                        </div>
                                    }>
                                    
                                    <div className='px-12 mt-4'>
                                    <form>
                                        <div className="mb-5">
                                            <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                                ชื่อ
                                            </label>
                                            <Input
                                                key={colors.white}
                                                type="email"
                                                color={colors}
                                               
                                                
                                                defaultValue="Yoshinori"
                                                className="max-w-[300px] "
                                            />
                                        </div>
                                        <div className="mb-5">
                                            <label for="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                                                นามสกุล
                                            </label>
                                            <Input
                                                key={colors}
                                                type="email"
                                                color={colors}
                                               
                                               
                                                defaultValue="Kanemoto "
                                                className="max-w-[300px] "
                                            />
                                        </div>
                                        <div className="mb-5">
                                            <label for="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                                                นามสกุล
                                            </label>
                                            <Input
                                                key={colors}
                                                type="email"
                                                color={colors}
                                               
                                               
                                                defaultValue="Yoshinori.k@kkumail.com"
                                                className="max-w-[300px] "
                                            />
                                        </div>
                                        
                                        </form>
                                    </div>
                                    <div className="mt-6 flex items-center justify-end gap-x-6 mr-10 mb-5">
                          

                            <Link href=''>
                                <button
                                   
                                    type="submit"
                                    className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    บันทึก
                                </button>
                                
                            
                            </Link>
                            
                        </div>
                                </Tab>


                            </Tabs>
                        </div> </div>
                </div>
            </div>
            <MyFooter />
        </>

    )
}

export default Profile