import { useState, useEffect } from "react";
import { auth, db } from './firebase'
import { collection, query, where, getDocs} from "firebase/firestore"; 
import { onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import { Inter } from "next/font/google";
import Homepage from "@/pages/components/Homepage";
import Homeadmin from "@/pages/components/Sidebar";
import NotFound from "@/pages/components/NotFound";
import NotLogin from "@/pages/components/NotLogin";
import Sidebar from "./components/Sidebar";
import MyNav from '@/pages/components/Navbar' 

// import Course from "./components/Course"

export default function Home() {
  const [isStdORTc, setIsStdORTc] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let q = query(collection(db, "students"), where("email", "==", user.email));
        getDocs(q).then((querySnapshot) => {
          if(querySnapshot.size > 0){
            setIsStdORTc("student")
            return;
          }
        }).catch((error) => {
          console.log("Error getting documents: ", error);
        });
        q = query(collection(db, "teachers"), where("email", "==", user.email));
        getDocs(q).then((querySnapshot) => {
          if(querySnapshot.size > 0){
            setIsStdORTc("teacher")
            window.location.assign("/components/Sidebar");
          }
        }).catch((error) => {
          console.log("Error getting documents: ", error);
        });
        // if(user.email.split("@")[1] == "kkumail.com"){
        //   setIsStdORTc("student")
        //   return;
        // }
      }else{
        setIsStdORTc("unknown")
        return;
      }
    });
  }, [])
  return (
    <main className=' font-mtsans overflow-hidden'>
      <div>
        {isStdORTc === "student" ? <Homepage/>: isStdORTc === "unknown" && <Homepage/>}
      </div>
      {/* <Homepage/> */}
    
    
    {/* <Course/> */}
    
    {/* <Sidebar/>  */}
    
    </main>
  );
}
