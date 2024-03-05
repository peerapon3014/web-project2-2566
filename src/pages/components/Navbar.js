import { GetServerSideProps } from 'next';
import Image from 'next/image';

import { Fragment, useState, useEffect } from 'react';
import { Dialog, Disclosure, Popover, Menu, Transition } from '@headlessui/react';
import {
    Bars3BottomLeftIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    ShoppingBagIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import MyLogo from '../images/Logo.png';
import Yoshi from '../images/Yoshi.png';
import MyLogoWhite from '../images/Logo-white.png';


const products = [
    { name: 'วิทยาการคอมพิวเตอร์', href: '/components/cs/cscourse', icon: ChartPieIcon },
    { name: 'เทคโนโลยีสารสนเทศ', href: '/components/ITs/itcourse', icon: CursorArrowRaysIcon },
    { name: 'ภูมิศาสตร์สารสนเทศ', href: '/components/gis/giscourse', icon: FingerPrintIcon },

]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = () => {
    const TOP_OFFSET = 50;
    const [showBackground, setShowBackground] = useState(false);
    //logo scroll when active
    const [navbarLogo, setNavbarLogo] = useState(MyLogo)
    
    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    //logo scroll function
    const changeLogo = () => {
        if (window.scrollY >= TOP_OFFSET) {
            setNavbarLogo(MyLogoWhite)
        } else {
            setNavbarLogo(MyLogo)
        }
    }

    useEffect(() => {
        changeLogo()
        
        window.addEventListener("scroll", changeLogo)
    })

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (

        <header className={` ${showBackground ? "bg-[#1373BB]" : "bg-white"} ,font-mtsans sticky top-0 shadow-sm z-40`}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 py-8 lg:px-8" aria-label="Global">
                <div className='flex flex-row items-center justify-center'>
                    <div className="flex lg:flex-1 mr-12">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <Image className="h-10 w-auto" src={navbarLogo} alt="Logo" />
                        </Link>
                    </div>
                    <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
                        <Link href="/" className={`text-md font-normal   ${showBackground ? "text-white" : ""
                            }`}>
                            หน้าหลัก
                        </Link>
                        <Popover className="relative">

                            <Popover.Button className={`flex items-center gap-x-1 text-md font-normal leading-6  ${showBackground ? "text-white" : ""
                                }`}>
                                สาขาวิชา 
                                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                    <div className="p-4">
                                        {products.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-gray-50"
                                            >
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon className="h-6 w-6 text-gray-500 group-hover:text-[#0F172A]" aria-hidden="true" />
                                                </div>
                                                <div className="flex-auto">
                                                    <Link href={item.href} className="block font-normal text-gray-900">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </Link>
                                                    <p className="mt-1 font-light text-gray-600">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>


                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <Link href="/components/Allcourse" className={`text-md font-normal leading-6  ${showBackground ? "text-white" : ""
                            }`}>
                            รายวิชาทั้งหมด
                        </Link>
                        <Link href="/components/Mycourse" className={`text-md font-normal leading-6  ${showBackground ? "text-white" : ""
                            }`}>
                            รายวิชาของฉัน
                        </Link>
                        
                    </Popover.Group>
                </div>
                <div className="flex lg:flex lg:flex-1 lg:justify-end gap-8">
                    {/* <button className= {`flex md:flex lg:flex text-md font-normal leading-6 text-gray-900 ${showBackground ? "text-white" : ""
                            }`}>
                        Signin
                    </button> */}
                    <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={Yoshi.src}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/components/Profile"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            ข้อมูลส่วนตัว
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/components/Sidebar"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            ออกจากระบบ
                          </Link>
                        )}
                      </Menu.Item>
                      
                    </Menu.Items>
                  </Transition>
                </Menu>

                    <div className="flex lg:hidden">
                        <button
                            type="button" 
                            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black ${showBackground ? "text-white" : ""
                        }`}
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-white px-6 py-8 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 z-40">
                    <div className="flex items-center justify-between sm:justify-end">
                        <Link href="/" className="flex -m-1.5 p-1.5 sm:invisible sm:hidden">
                            
                            <Image
                                className="h-10 w-auto"
                                src={MyLogo}
                                alt="Logo"
                            />
                        </Link>
                        <div className='flex flex-row flex-wrap gap-8 sm:-m-1.5 sm:p-1.5 sm:py-3.5'>

                          
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-blue-100"
                                >
                                   หน้าหลัก
                                </Link>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-normal leading-7 text-gray-900 hover:bg-blue-100">
                                                สาขาวิชา
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>

                                        </>
                                    )}
                                </Disclosure>
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-blue-100"
                                >
                                    รายวิชาทั้งหมด
                                </Link>
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-blue-100"
                                >
                                   รายวิชาของฉัน
                                </Link>
                              
                            </div>

                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}


export default navigation