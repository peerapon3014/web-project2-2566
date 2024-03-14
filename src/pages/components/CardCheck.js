
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import { PencilSquareIcon, TrashIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { Button } from "flowbite-react";
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebaseConfig'

async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, "checkin"))

    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
    });
    return data;
}

export default function App() {
    const [checkData, setCheckData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataFromFirestore();
            setCheckData(data)
        }
        fetchData();
    }, [])
    return (
        <>
            {/* {checkData.map((check) => ( */}
                <div  className="card w-50 bg-base-100 shadow-xl max-w-[500px] cursor-pointer hover:-translate-y-1 hover:shadow-2xl dark:bg-white mt-3">
                    <div className="card-body p-5 ">
                        <div className="flex gap-3">
                            <BookOpenIcon className="h-8 w-8 text-blue-500 transition-all" />
                            <div className="flex flex-col">
                                <p className="text-sm text-[#1373BB] mt-2">เช็คชื่อ </p>
                            </div>
                        </div>
                        <hr></hr>
                        <p className="text-sm text-black"><b>วิชา</b> </p>
                        <p className="text-sm text-black"><b>รหัสเช็คชื่อ</b> </p>
                        {/* <hr></hr> */}
                        {/* <div className="card-actions justify-end">
                    <div className="tooltip" data-tip="แก้ไข">
                    <PencilSquareIcon className="h-6 w-6 text-yellow-500 "/>
                    </div>
                    <div className="tooltip" data-tip="ลบ">
                    <TrashIcon className="h-6 w-6 text-red-500" />
                    </div>
                </div> */}
                    </div>
                </div>
            {/* ))} */}
        </>
    );
}
