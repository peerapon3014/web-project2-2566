import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import MyLogo from '../images/Logo.png';
import {
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
  import { auth } from "../firebase";


const navigation = () => {
    const TOP_OFFSET = 50;
    const [showBackground] = useState(false);
    const [navbarLogo] = useState(MyLogo)

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

    return (

        <header className={` ${showBackground ? "bg-[#1373BB]" : "bg-white"} ,font-mtsans sticky top-0 shadow-sm z-40`}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 py-8 lg:px-8" aria-label="Global">
                <div className='flex flex-row items-center justify-center'>
                    <div className="flex lg:flex-1 mr-12">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <Image className="h-10 w-auto" src={navbarLogo} alt="Logo" />
                        </Link>
                    </div>
                </div>
                <div className="flex lg:flex lg:flex-1 lg:justify-end gap-8">
                    <button className={`flex md:flex lg:flex text-md font-normal leading-6 text-gray-900 ${showBackground ? "text-white" : ""}`} onClick={Login}>
                        login
                    </button>
                </div>
            </nav>
            
        </header>
    )
}


export default navigation