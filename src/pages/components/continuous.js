import React, { useState, useEffect } from "react";
import { auth, db } from '../firebase'
import { collection, query, where, getDocs, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'
import Webde from '../images/webde.png'
const includedFeatures = [
  'การพัฒนาโปรแกรมประยุกต์สำหรับอุปกรณ์โทรศัพท์ แทปเล็ต และ อุปกรณ์เคลื่อนที่อื่นๆ ที่ใช้ระบบปฏิบัติการ แอนดรอยด์ หรือ ไอโอเอส โดยใช้เว็บเทคโนโลยี ได้แก่ HTML5 CSS และส่วนต่อประสานโปรแกรมประยุกต์ด้วยจาวาสคริปต์เพื่อเข้าถึงการวางแนวอุปกรณ์ การจัดการการสัมผัสหน้าจอ แหล่งเก็บข้อมูลท้องถิ่น การเข้าถึงกล้องและการระบุตำแหน่ง'
]
import Accordion from "@/pages/data/Acconlate"
import MyNav from '@/pages/components/Navbar'
import MyFooter from '@/pages/components/footer'
import Link from 'next/link';
import NotFound from '@/pages/components/NotFound'
import { useRouter } from 'next/router';
import { Input } from "@nextui-org/react";

export function postToFirebase(origObj) {
  let string = JSON.stringify(origObj);
  let newObj = JSON.parse(string);
  return newObj;
}

export default function Coursedetail() {
  const [isRole, setIsRole] = useState(null)
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [roomCode, setCode] = useState("");
  const [studentData, setStuddentData] = useState(null);

  const handleCheckin = async () => {
    if (!roomCode.trim()) {
      alert("กรุณากรอกรหัสห้อง");
      return;
    }

    let q = query(collection(db, "checkin"), where("room_code", "==", roomCode));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      alert("ไม่พบรหัสห้อง");
      return;
    }

    if (!studentData) {
      querySnapshot.forEach((doc) => {
        if (doc.exists()) {
          let room = doc.data();
          let checked = room.checked ? room.checked : [];
          let data = postToFirebase({
            stdid: "unknown",
            name: user.displayName,
            checked_date: new Date(),
          });
          checked.push(data);
          updateDoc(doc.ref, { checked })
            .then(() => {
              console.log("Document successfully updated!");
            })
            .catch((error) => {
              console.error("Error updating document: ", error);
            });
        }
      });
      return;
    }

    querySnapshot.forEach((doc) => {
      if (doc.exists()) {
        let room = doc.data();
        let student = studentData;
        let checked = room.checked ? room.checked : [];
        let data = postToFirebase({
          stdid: student.stdid,
          name: student.name,
          email: student.email,
          section: student.section,
          checked_date: new Date(),
        });
        checked.push(data);
        updateDoc(doc.ref, { checked })
          .then(() => {
            console.log("Check-in successful");
            alert(student.stdid + " " + student.name + " เช็คชื่อสำเร็จ");
          })
          .catch((error) => {
            console.error("Error Check-in: ", error);
          });
      }
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        let q = query(collection(db, "students"), where("email", "==", user.email));
        getDocs(q).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setStuddentData(doc.data());
          });
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
      } else {
        setIsRole("unknown")
        router.push('/');
      }
    });
  }, [])
  return (
    <>
      {isRole === "student" ? (
        <>
          <MyNav />
          <div className="p-6 py-8 lg:px-32 md:px-8 p-6 py-8 lg:px-32 md:px-8 mt- inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

              <div className="mx-auto  max-w-2xl rounded-3xl bg-white ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">SC362202 Mobile and Web Application Development</h3>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    สาขาเทคโนโลยีสารสนเทศ ปริญญาตรี
                  </p>
                  <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-[#1373BB]">คำอธิบายรายวิชา</h4>
                    <div className="h-px flex-auto bg-blue-100" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-1 sm:gap-6"
                  >
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon className="h-6 w-5 flex-none text-[#1373BB]" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className=" py-10  lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <img className="object-cover w-full  rounded-t-lg h-96 md:h-auto md:w-100 md:rounded-none md:rounded-s-lg" src={Webde.src} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-white  shadow-xl shadow-blue-100/50  mt-10 p-8 '>
                <Link href='#' onClick={() => setIsDialogOpen(true)}>
                  <div className="flex group cursor-pointer w-4/4 h-16 justify-between  items-center  mt-5 rounded-md bg-[#1373BB] hover:bg-blue-100 hover:shadow-lg text-white pl-10 hover:text-[#1373BB]">
                    เช็คชื่อเข้าเรียน
                  </div>
                </Link>
                {isDialogOpen && (
                  <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
                    <div className="flex items-center justify-center min-h-screen">
                      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                      <div className="relative bg-white w-96 h-auto rounded-lg p-8">
                        <div className="flex justify-end">
                          <button onClick={() => setIsDialogOpen(false)}>
                            <XMarkIcon className="h-6 w-6 text-gray-500" />
                          </button>
                        </div>
                        <div>
                          <div>
                            <Input
                              label="รหัสห้อง"
                              type="text"
                              variant="underlined"
                              name="roomCode"
                              id="roomCode"
                              autoComplete="given-name"
                              className="max-w-xs"
                              placeholder="กรอกรหัสห้องเรียน"
                              onChange={(e) => {
                                setCode(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="mt-6">
                          <button
                            onClick={() => {
                              handleCheckin();
                              setIsDialogOpen(false);
                            }}
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-indigo-700 sm:text-sm"
                          >
                            เช็คชื่อ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <Link href='/components/Course'>
                  <div className="flex group cursor-pointer w-4/4 h-16 justify-between  items-center  mt-5 rounded-md bg-[#1373BB] hover:bg-blue-100 hover:shadow-lg text-white pl-10 hover:text-[#1373BB]">
                    ตอบคำถาม
                  </div>
                </Link>
                <div className='mb-5 '>
                  <Accordion />
                </div>
              </div>
            </div>
          </div><MyFooter />
        </>
      ) : isRole === "unknown" && <NotFound />
      }
    </>
  )
}
