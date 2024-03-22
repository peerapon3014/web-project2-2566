import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import { XMarkIcon, TrashIcon, PencilSquareIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Input } from "@nextui-org/react";

function ShowCheckIN() {
    const [checkin, setCheckIn] = useState([]);
    const [newCheckInSubject, setnewCheckInSubject] = useState('');
    const [newCheckInRoom, setnewCheckInRoom] = useState('');
    const [newCheckInSection, setnewCheckInSection] = useState('');
    const [newCheckInDateTime, setnewCheckInDateTime] = useState('');
    const [newCheckInRoomCode, setnewCheckInRoomCode] = useState('');
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [isGetCheckinOpen, setIsGetCheckinOpen] = useState(false);
    const [isShowRoomCodeDialogOpen, setIsShowRoomCodeDialogOpen] = useState(false);
    const [selectedCheckIn, setselectedCheckIn] = useState(null);
    const [editCheckInSubject, seteditCheckInSubject] = useState('');
    const [editCheckInRoom, seteditCheckInRoom] = useState('');
    const [editCheckInRoomCode, seteditCheckInRoomCode] = useState('');
    const [editCheckInSection, seteditCheckInSection] = useState('');
    const [editCheckInDateTime, seteditCheckInDateTime] = useState('');
    const [checkedStudents, setCheckedStudents] = useState([]);

    useEffect(() => {
        const fetchCheckIns = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'checkin'));
                const checkinList = [];
                querySnapshot.forEach((doc) => {
                    const checkinData = { id: doc.id, ...doc.data() };
                    checkinList.push(checkinData);
                });
                setCheckIn(checkinList);
            } catch (error) {
                console.error('Error fetching checkin: ', error);
            }
        };
        fetchCheckIns();
    }, []);

    const handleAddCheckIn = async () => {
        try {
            const docRef = await addDoc(collection(db, 'checkin'), {
                subject: newCheckInSubject,
                room_code: newCheckInRoomCode,
                room: newCheckInRoom,
                section: newCheckInSection,
                class_datetime: newCheckInDateTime,
            });
            console.log('Document written with ID: ', docRef.id);
            setnewCheckInSubject('');
            setnewCheckInRoomCode('');
            setnewCheckInRoom('');
            setnewCheckInSection('');
            setnewCheckInDateTime('');
            setIsAddDialogOpen(false);
            window.location.reload();
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    const handleEditCheckIn = async () => {
        try {
            if (!selectedCheckIn) {
                console.error('No checkin selected for editing.');
                return;
            }

            await updateDoc(doc(db, 'checkin', selectedCheckIn.id), {
                subject: editCheckInSubject,
                room_code: newCheckInRoomCode,
                room: editCheckInRoom,
                section: editCheckInSection,
                class_datetime: editCheckInDateTime,
            });

            const updatedCheckIns = checkin.map(checkin => {
                if (checkin.id === selectedCheckIn.id) {
                    return {
                        ...checkin, subject: editCheckInSubject,
                        room_code: newCheckInRoomCode,
                        room: editCheckInRoom,
                        section: editCheckInSection,
                        class_datetime: editCheckInDateTime
                    };
                }
                return checkin;
            });
            setCheckIn(updatedCheckIns);
            setIsEditDialogOpen(false);
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    };

    const handleDeleteCheckIn = async (checkinId) => {
        const confirmDelete = window.confirm('คุณแน่ใจหรือไม่ที่จะลบการเช็คชื่อ?');
        if (confirmDelete) {
            try {
                await deleteDoc(doc(db, 'checkin', checkinId));
                const updatedCheckIns = checkin.filter(checkin => checkin.id !== checkinId);
                setCheckIn(updatedCheckIns);
                console.log('Document Deleted with ID: ', checkinId);
            } catch (error) {
                console.error('Error deleting document: ', error);
            }
        }
    };

    const generateRoomCode = () => {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    useEffect(() => {
        const generatedRoomCode = generateRoomCode();
        setnewCheckInRoomCode(generatedRoomCode);
    }, []);

    const handleRefreshRoomCode = () => {
        const generatedRoomCode = generateRoomCode();
        setnewCheckInRoomCode(generatedRoomCode);
    };

    const handleShowCheckedStudents = async (checkinId) => {
        try {
            const docRef = doc(db, 'checkin', checkinId);
            const docSnapshot = await getDoc(docRef);
            if (docSnapshot.exists()) {
                const checkedData = docSnapshot.data().checked;
                setCheckedStudents(checkedData);
                console.log(checkedData);
                setIsGetCheckinOpen(true);
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error('Error fetching checked students: ', error);
        }
    };

    return (
        <>
            <div className='bg-white  p-6 py-8 lg:px-32 md:px-8 m-5 rounded-lg h-[60em]'>
                <div className='mt-10 text-xl'>
                    <p className='text-3xl font-bold text-[#1373BB]'>แสดงประวัติการเช็คชื่อ</p>
                    <div className='flex justify-end'>
                        <button
                            onClick={() => setIsAddDialogOpen(true)}
                            className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            เพิ่มการเช็คชื่อ
                        </button>
                    </div>
                </div>
                <div className="mt-5">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ชื่อวิชา</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">รหัสห้อง</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ห้องเรียน</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Section</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">วันที่</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">การดำเนินการ</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {checkin.map((checkin, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">{checkin.subject}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {checkin.room_code}
                                        <button onClick={() => {
                                            seteditCheckInRoomCode(checkin.room_code);
                                            setIsShowRoomCodeDialogOpen(true)
                                        }} className="ml-2">
                                            <EyeIcon className="h-5 w-5" />
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{checkin.room}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{checkin.section}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{new Date(checkin.class_datetime).toLocaleString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap flex items-center">
                                        <button onClick={() => {
                                            setselectedCheckIn(checkin);
                                            seteditCheckInSubject(checkin.subject);
                                            setnewCheckInRoomCode(checkin.room_code);
                                            seteditCheckInRoom(checkin.room);
                                            seteditCheckInSection(checkin.section);
                                            seteditCheckInDateTime(checkin.class_datetime);
                                            setIsEditDialogOpen(true);
                                        }} className="ml-2">
                                            <PencilSquareIcon className="h-6 w-6 text-primary-600" />
                                        </button>
                                        <button onClick={() => handleDeleteCheckIn(checkin.id)} className="ml-2">
                                            <TrashIcon className="h-6 w-6 text-red-600" />
                                        </button>
                                        <button onClick={() => handleShowCheckedStudents(checkin.id)} className="ml-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            แสดงรายการเช็คชื่อ
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isAddDialogOpen ? (
                <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                        <div className="relative bg-white w-96 h-auto rounded-lg p-8">
                            <div className="flex justify-end">
                                <button onClick={() => setIsAddDialogOpen(false)}>
                                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                                </button>
                            </div>
                            <div className="mt-6">
                                <Input
                                    label="วิชา"
                                    type="text"
                                    variant="underlined"
                                    name="subject"
                                    id="subject"
                                    autoComplete="given-name"
                                    isRequired={true}
                                    value={newCheckInSubject}
                                    onChange={(e) => setnewCheckInSubject(e.target.value)}
                                    className="max-w-xs"
                                />
                            </div>
                            <div className="mt-6">
                                <div className='flex'>
                                    <Input
                                        label="รหัสห้อง"
                                        type="text"
                                        variant="underlined"
                                        name="roomCode"
                                        id="roomCode"
                                        autoComplete="given-name"
                                        isReadOnly
                                        value={newCheckInRoomCode}
                                        onChange={(e) => setnewCheckInRoomCode(e.target.value)}
                                        className="max-w-xs"
                                        endContent={
                                            <button
                                                onClick={handleRefreshRoomCode}
                                                className="focus:outline-none"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                </svg>
                                            </button>
                                        }
                                    />

                                </div>
                            </div>
                            <div className="mt-6">
                                <Input
                                    label="ห้อง"
                                    type="text"
                                    variant="underlined"
                                    name="room"
                                    id="room"
                                    autoComplete="given-name"
                                    value={newCheckInRoom}
                                    onChange={(e) => setnewCheckInRoom(e.target.value)}
                                    className="max-w-xs"
                                />
                            </div>
                            <div className="mt-6">
                                <Input
                                    label="Section"
                                    type="number"
                                    variant="underlined"
                                    name="section"
                                    id="section"
                                    autoComplete="given-name"
                                    isRequired={true}
                                    value={newCheckInSection}
                                    onChange={(e) => setnewCheckInSection(e.target.value)}
                                    className="max-w-xs"
                                />
                            </div>
                            <div className="mt-6">
                                <Input
                                    label="วันที่และเวลา"
                                    type="datetime-local"
                                    name="datetime"
                                    id="datetime"
                                    variant="underlined"
                                    autoComplete="given-name"
                                    placeholder="Enter your datetime"
                                    isRequired={true}
                                    value={newCheckInDateTime}
                                    onChange={(e) => setnewCheckInDateTime(e.target.value)}
                                    className="max-w-xs"
                                />
                            </div>
                            <div className="mt-6">
                                <button
                                    onClick={handleAddCheckIn}
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-indigo-700 sm:text-sm"
                                >
                                    เพิ่ม
                                </button>
                            </div>
                        </div>
                    </div>
                </div >
            ) : isEditDialogOpen ? (
                <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                        <div className="relative bg-white w-96 h-auto rounded-lg p-8">
                            <div className="flex justify-end">
                                <button onClick={() => setIsEditDialogOpen(false)}>
                                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                                </button>
                            </div>
                            <div className="mt-6">
                                <Input
                                    label="วิชา"
                                    type="text"
                                    name="edit-subject"
                                    id="edit-subject"
                                    autoComplete="given-name"
                                    variant="underlined"
                                    isRequired={true}
                                    value={editCheckInSubject}
                                    onChange={(e) => seteditCheckInSubject(e.target.value)}
                                    className="max-w-xs"
                                />
                            </div>
                            <div className="mt-6">
                                <div className='flex'>
                                    <Input
                                        label="รหัสห้อง"
                                        type="text"
                                        variant="underlined"
                                        name="roomcode"
                                        id="roomcode"
                                        autoComplete="given-name"
                                        isReadOnly
                                        value={newCheckInRoomCode}
                                        onChange={(e) => setnewCheckInRoomCode(e.target.value)}
                                        className="max-w-xs"
                                        endContent={
                                            <button
                                                onClick={handleRefreshRoomCode}
                                                className="focus:outline-none"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                </svg>
                                            </button>
                                        }
                                    />

                                </div>
                            </div>
                            <div className="mt-6">
                                <Input
                                    label="ห้อง"
                                    type="room"
                                    name="edit-room"
                                    id="edit-room"
                                    autoComplete="room"
                                    variant="underlined"
                                    value={editCheckInRoom}
                                    onChange={(e) => seteditCheckInRoom(e.target.value)}
                                    className="max-w-xs"
                                />
                            </div>
                            <div className="mt-6">
                                <Input
                                    label="Section"
                                    type="number"
                                    name="edit-section"
                                    id="edit-section"
                                    autoComplete="given-name"
                                    variant="underlined"
                                    value={editCheckInSection}
                                    isRequired={true}
                                    onChange={(e) => seteditCheckInSection(e.target.value)}
                                    className="max-w-xs"
                                />
                            </div>
                            <div className="mt-6">
                                <Input
                                    label="วันที่และเวลา"
                                    type="datetime-local"
                                    name="datetime"
                                    id="datetime"
                                    autoComplete="given-name"
                                    variant="underlined"
                                    value={editCheckInDateTime}
                                    placeholder="Enter your datetime"
                                    isRequired={true}
                                    onChange={(e) => seteditCheckInDateTime(e.target.value)}
                                    className="max-w-xs"
                                />
                            </div>
                            <div className="mt-6">
                                <button
                                    onClick={handleEditCheckIn}
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-indigo-700 sm:text-sm"
                                >
                                    บันทึก
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : isGetCheckinOpen ? (
                <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                        <div className="relative bg-white w-auto h-auto rounded-lg p-8">
                            <div className="flex justify-end">
                                <button onClick={() => setIsGetCheckinOpen(false)}>
                                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                                </button>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold mb-2">นักเรียนที่เช็คชื่อแล้ว</h2>
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">รหัสนักศึกษา</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ชื่อ</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">สาขา</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Section</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">วันที่</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {checkedStudents.map((student, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap">{student.stdid}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{student.course}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{student.section}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{new Date(student.checked_date).toLocaleString()}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            ) : isShowRoomCodeDialogOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                        <div className="relative bg-white w-auto h-auto rounded-lg p-8">
                            <div className="flex justify-end">
                                <button onClick={() => setIsShowRoomCodeDialogOpen(false)}>
                                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                                </button>
                            </div>
                            <div className='mt-2'>
                                <p style={{ fontSize: "72px" }}>รหัสห้อง: {editCheckInRoomCode}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    );
}

export default ShowCheckIN;