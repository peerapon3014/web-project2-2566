import Image from "next/image";
import { Inter } from "next/font/google";
import Homepage from "@/pages/components/Homepage";
import Sidebar from "./components/Sidebar";

// import Course from "./components/Course"


export default function Home() {
  return (
    <main className=' font-mtsans overflow-hidden'>
    <Homepage/>
    
    {/* <Course/> */}
    
    {/* <Sidebar/>  */}
    
    </main>
  );
}
