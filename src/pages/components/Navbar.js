import Image from 'next/image';
import { Avatar } from "@nextui-org/react";
import { Fragment, useState, useEffect } from 'react';
import { Dialog, Disclosure, Popover, Menu, Transition } from '@headlessui/react';
import {
    Bars3BottomLeftIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import MyLogo from '../images/Logo.png';
import {
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { auth, db } from '../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navigation = () => {
    const [showBackground, setShowBackground] = useState(false);
    const [navbarLogo, setNavbarLogo] = useState(MyLogo)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isRole, setIsRole] = useState(null)

    const Login = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    };

    const Logout = () => {
        if (window.confirm('คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?')) {
            signOut(auth)
                .then(() => {
                    setUser(null);
                    router.push('/');
                    alert('คุณได้ออกจากระบบแล้ว');
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            console.log('ยกเลิกการออกจากระบบ');
        }
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            } else {
                setUser(null);
                setLoading(false);
            }
        });
    }, []);

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
                        return;
                    }
                }).catch((error) => {
                    console.log("Error getting documents: ", error);
                });
                setIsRole("unknown")
            }
        });
    }, [])

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
                        <Link href="/components/Allcourse" className={`text-md font-normal leading-6  ${showBackground ? "text-white" : ""
                            }`}>
                            รายวิชาทั้งหมด
                        </Link>
                        {isRole === "student" && (
                            <Link href="/components/Mycourse" className={`text-md font-normal leading-6  ${showBackground ? "text-white" : ""
                                }`}>
                                รายวิชาของฉัน
                            </Link>
                        )}
                    </Popover.Group>
                </div>
                <div className="flex lg:flex lg:flex-1 lg:justify-end gap-8">
                    {loading ? null : !user ? (
                        <button className={`flex md:flex lg:flex text-md font-normal leading-6 text-gray-900 ${showBackground ? "text-white" : ""}`} onClick={Login}>
                            login
                        </button>
                    ) : (
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <Menu.Button className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <div className='p-2'>
                                        <Avatar src={user.photoURL} />
                                    </div>
                                    <div className='p-2 text-left'>
                                        <p>{user.displayName}</p>
                                        <p>{user.email}</p>
                                    </div>
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
                                            <button
                                                onClick={Logout}
                                                className={'block px-4 py-2 text-sm text-gray-700'}
                                            >
                                                ออกจากระบบ
                                            </button>
                                        )}
                                    </Menu.Item>

                                </Menu.Items>
                            </Transition>
                        </Menu>
                    )}
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


export default Navigation