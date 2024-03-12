import Image from "next/image";
import { Inter } from "next/font/google";
import Homepage from "@/pages/components/Homepage";
import Sidebar from "./components/Sidebar";
import { AuthContextProvider } from "./context/AuthContext";

// import Course from "./components/Course"


export default function Home() {
  return (
    <main className=' font-mtsans overflow-hidden'>
      <AuthContextProvider>
        <Homepage/>
      </AuthContextProvider>
    
    
    {/* <Course/> */}
    
    {/* <Sidebar/>  */}
    
    </main>
  );
}
