import React from 'react'
import Link from 'next/link';
import Webde from '../images/webde.png'
import { BookOpenIcon } from "@heroicons/react/24/outline";
import MyNav from '@/pages/components/Navbar' 
import MyFooter from '@/pages/components/footer' 
function Cscourse() {
  return (
    <>
<MyNav/>
      <div className="relative isolate overflow-hidden p-6 py-8 lg:px-32 md:px-8 mb-0 ">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className=" py-24 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="">

              <h1 className=' mb-10 text-3xl font-bold text-[#1373BB]'>รายวิชาของฉัน</h1>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4  mb-32" >
                

                <Link href='/components/Coursedetail'
                  class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                  <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-green-500  transition-all duration-300 group-hover:scale-[10]"></span>
                  <div class="relative z-10  mx-auto max-w-md ">
                    <span class="grid h-20 w-20 place-items-center rounded-full bg-green-500 transition-all duration-300 group-hover:bg-green-300">
                      <BookOpenIcon className="h-10 w-10 text-white transition-all" />

                    </span>
                    <div
                      class=" pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                      <h1 class=" text-xl font-bold  ">Programming in java</h1>
                      <p class="mb-3 font-normal ">หลักการการออกแบบเว็บไซต์ การวางแผนการทำเว็บไซต์ การออกแบบเว็บไซต์ </p>
                    </div>

                  </div>
                  <div class=" text-base font-semibold leading-7">
                    <div class="w-full bg-gray-200 rounded-full ">
                      <div class="bg-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[13em]" > 50%</div>
                    </div>
                  </div>
                </Link>

                <Link href='/components/continuous'
                  class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                  <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#1373BB] transition-all duration-300 group-hover:scale-[10]"></span>
                  <div class="relative z-10  mx-auto max-w-md ">
                    <span class="grid h-20 w-20 place-items-center rounded-full bg-[#1373BB] transition-all duration-300 group-hover:bg-sky-300">
                      <BookOpenIcon className="h-10 w-10 text-white transition-all" />

                    </span>
                    <div
                      class=" pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                      <h1 class=" text-xl font-bold  ">Web Desigh Technology</h1>
                      <p class="mb-3 font-normal ">หลักการการออกแบบเว็บไซต์ การวางแผนการทำเว็บไซต์ การออกแบบเว็บไซต์ </p>
                    </div>

                  </div>
                  <div class=" text-base font-semibold leading-7">
                    <div class="w-full bg-gray-200 rounded-full ">
                      <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[5em]" > 10%</div>
                    </div>
                  </div>
                </Link>
                <Link href='/components/continuous'
                  class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                  <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-500 transition-all duration-300 group-hover:scale-[10]"></span>
                  <div class="relative z-10  mx-auto max-w-md ">
                    <span class="grid h-20 w-20 place-items-center rounded-full bg-yellow-500 transition-all duration-300 group-hover:bg-yellow-300">
                      <BookOpenIcon className="h-10 w-10 text-white transition-all" />

                    </span>
                    <div
                      class=" pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                      <h1 class=" text-xl font-bold  "> Web Services Methodology</h1>
                      <p class="mb-3 font-normal ">หลักการการออกแบบเว็บไซต์ การวางแผนการทำเว็บไซต์ การออกแบบเว็บไซต์ </p>
                    </div>

                  </div>
                  <div class=" text-base font-semibold leading-7">
                    <div class="w-full bg-gray-200 rounded-full ">
                      <div class="bg-yellow-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[5em]" > 5%</div>
                    </div>
                  </div>
                </Link>
                {/* <Link href='/components/Coursedetail'
                  class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                  <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                  <div class="relative z-10  mx-auto max-w-md ">
                    <span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                      <BookOpenIcon className="h-10 w-10 text-white transition-all" />

                    </span>
                    <div
                      class=" pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                      <h1 class=" text-xl font-bold  ">Programming in java</h1>
                      <p class="mb-3 font-normal ">หลักการการออกแบบเว็บไซต์ การวางแผนการทำเว็บไซต์ การออกแบบเว็บไซต์ </p>
                    </div>

                  </div>
                  <div class=" text-base font-semibold leading-7">
                    <div class="w-full bg-gray-200 rounded-full ">
                      <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[5em]" > 10%</div>
                    </div>
                  </div>
                </Link> */}
                {/* <Link href='/components/Coursedetail'
                  class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                  <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                  <div class="relative z-10  mx-auto max-w-md ">
                    <span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                      <BookOpenIcon className="h-10 w-10 text-white transition-all" />

                    </span>
                    <div
                      class=" pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                      <h1 class=" text-xl font-bold  ">Web Desigh Technology</h1>
                      <p class="mb-3 font-normal ">หลักการการออกแบบเว็บไซต์ การวางแผนการทำเว็บไซต์ การออกแบบเว็บไซต์ </p>
                    </div>

                  </div>
                  <div class=" text-base font-semibold leading-7">
                    <div class="w-full bg-gray-200 rounded-full ">
                      <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[5em]" > 10%</div>
                    </div>
                  </div>
                </Link> */}
                {/* <Link href='/components/Coursedetail'
                  class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                  <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                  <div class="relative z-10  mx-auto max-w-md ">
                    <span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                      <BookOpenIcon className="h-10 w-10 text-white transition-all" />

                    </span>
                    <div
                      class=" pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                      <h1 class=" text-xl font-bold  ">Web Desigh Technology</h1>
                      <p class="mb-3 font-normal ">หลักการการออกแบบเว็บไซต์ การวางแผนการทำเว็บไซต์ การออกแบบเว็บไซต์ </p>
                    </div>

                  </div>
                  <div class=" text-base font-semibold leading-7">
                    <div class="w-full bg-gray-200 rounded-full ">
                      <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[5em]" > 10%</div>
                    </div>
                  </div>
                </Link> */}





              </div>
            </div>
          </div>
        </div>
      </div>
      <MyFooter/> 


    </>
  )
}
export default Cscourse