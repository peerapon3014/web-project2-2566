import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import { PencilSquareIcon, TrashIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { Button } from "flowbite-react";


export default function App() {
    return (

        <div className="card w-50 bg-base-100 shadow-xl max-w-[500px] cursor-pointer hover:-translate-y-1 hover:shadow-2xl dark:bg-white">
            <div className="card-body p-5">
                 <div className="flex gap-3">
                 <BookOpenIcon className="h-8 w-8 text-blue-500 transition-all" />
                     <div className="flex flex-col">
                        <p className="text-sm text-[#1373BB] mt-2">คำถาม</p>
                    </div>
                 </div>
               <hr></hr>
                <p className="text-sm text-black">คำถามที่ 1 </p>
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
        
        // <Card className="max-w-[400px] cursor-pointer hover:-translate-y-1 hover:shadow-2xl">
        //     <CardHeader className="flex gap-3">

        //         <BookOpenIcon className="h-10 w-10 text-blue-500 transition-all" />


        //         <div className="flex flex-col">

        //             <p className="text-sm text-[#1373BB]">Web Desigh Technology</p>
        //         </div>
        //     </CardHeader>
        //     <Divider />
        //     <CardBody>
        //         <p className="text-sm text-black">322371 Web Desigh Technologies เทคโนโลยีสารสนเทศ ปริญญาตรี </p>
        //     </CardBody>
        //     <Divider />
        //     <CardFooter className="flex justify-end ">
        //         <Link
                   
        //            href=""
                    
        //         >
        //             <Tooltip content="แก้ไข">
        //                 <span className="text-lg pr-2 item-center text-default-400 cursor-pointer active:opacity-50">
        //                     <PencilSquareIcon className="h-6 w-6 text-yellow-500" />
        //                 </span>
        //             </Tooltip>
        //             <Tooltip content="ลบ">
        //                 <span className="text-lg item-center text-default-400 cursor-pointer active:opacity-50">
        //                     <TrashIcon className="h-6 w-6 text-red-500" />
        //                 </span>
        //             </Tooltip>
        //         </Link>

        //     </CardFooter>
        // </Card>
    );
}
