import { useState, useEffect } from "react";
import { auth, db } from './firebase'
import { collection, query, where, getDocs} from "firebase/firestore"; 
import { onAuthStateChanged } from "firebase/auth";
import Homepage from "@/pages/components/Homepage";

export default function Home() {
  const [isRole, setIsRole] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let q = query(collection(db, "students"), where("email", "==", user.email));
        getDocs(q).then((querySnapshot) => {
          if(querySnapshot.size > 0){
            setIsRole("student")
            return;
          }
        }).catch((error) => {
          console.log("Error getting documents: ", error);
        });
        q = query(collection(db, "teachers"), where("email", "==", user.email));
        getDocs(q).then((querySnapshot) => {
          if(querySnapshot.size > 0){
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
    <main className=' font-mtsans overflow-hidden'>
      <div>
        {isRole === "student" ? <Homepage/>: <Homepage/>}
      </div>
    </main>
  );
}
