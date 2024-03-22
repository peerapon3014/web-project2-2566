import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { XMarkIcon, TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { Input } from "@nextui-org/react";

function ShowTeacher() {
    const [teachers, setTeachers] = useState([]);
    const [newTeacherName, setNewTeacherName] = useState('');
    const [newTeacherEmail, setNewTeacherEmail] = useState('');
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [editTeacherName, setEditTeacherName] = useState('');
    const [editTeacherEmail, setEditTeacherEmail] = useState('');

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'teachers'));
                const teacherList = [];
                querySnapshot.forEach((doc) => {
                    const teacherData = { id: doc.id, ...doc.data() };
                    teacherList.push(teacherData);
                });
                setTeachers(teacherList);
            } catch (error) {
                console.error('Error fetching teachers: ', error);
            }
        };
        fetchTeachers();
    }, []);

    const handleAddTeacher = async () => {
        try {
            const docRef = await addDoc(collection(db, 'teachers'), {
                name: newTeacherName,
                email: newTeacherEmail
            });
            console.log('Document written with ID: ', docRef.id);
            setNewTeacherName('');
            setNewTeacherEmail('');
            setIsAddDialogOpen(false);
            window.location.reload();
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    const handleDeleteTeacher = async (teacherId) => {
        const confirmDelete = window.confirm('คุณแน่ใจหรือไม่ที่จะลบอาจารย์คนนี้?');
        if (confirmDelete) {
            try {
                await deleteDoc(doc(db, 'teachers', teacherId));
                const updatedTeachers = teachers.filter(teacher => teacher.id !== teacherId);
                setTeachers(updatedTeachers);
            } catch (error) {
                console.error('Error deleting document: ', error);
            }
        }
    };

    const handleEditTeacher = async () => {
        try {
            if (!selectedTeacher) {
                console.error('No teacher selected for editing.');
                return;
            }

            await updateDoc(doc(db, 'teachers', selectedTeacher.id), {
                name: editTeacherName,
                email: editTeacherEmail
            });

            const updatedTeachers = teachers.map(teacher => {
                if (teacher.id === selectedTeacher.id) {
                    return { ...teacher, name: editTeacherName, email: editTeacherEmail };
                }
                return teacher;
            });
            setTeachers(updatedTeachers);
            setIsEditDialogOpen(false);
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    };

    return (
        <>
            <div className='bg-white  p-6 py-8 lg:px-32 md:px-8 m-5 rounded-lg h-[60em]'>
                <div className='mt-10 text-xl'>
                    <p className='text-3xl font-bold text-[#1373BB]'>แสดงรายชื่ออาจารย์</p>
                    <div className='flex justify-end'>
                        <button
                            onClick={() => setIsAddDialogOpen(true)}
                            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            เพิ่มอาจารย์
                        </button>
                    </div>
                </div>
                <div className="mt-5">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ชื่อ</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">การดำเนินการ</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {teachers.map((teacher, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">{teacher.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{teacher.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button onClick={() => {
                                            setSelectedTeacher(teacher);
                                            setEditTeacherName(teacher.name);
                                            setEditTeacherEmail(teacher.email);
                                            setIsEditDialogOpen(true);
                                        }} className="ml-2">
                                            <PencilSquareIcon className="h-6 w-6 text-primary-600" />
                                        </button>
                                        <button onClick={() => handleDeleteTeacher(teacher.id)} className="ml-2">
                                            <TrashIcon className="h-6 w-6 text-red-600" />
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
                                    label="ชื่อ"
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="given-name"
                                    variant='underlined'
                                    isRequired={true}
                                    value={newTeacherName}
                                    onChange={(e) => setNewTeacherName(e.target.value)}
                                    className="max-w-xs"
                                />
                            </div>
                            <div className="mt-6">
                                <Input
                                    label="Email"
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    value={newTeacherEmail}
                                    variant='underlined'
                                    isRequired={true}
                                    onChange={(e) => setNewTeacherEmail(e.target.value)}
                                    className="max-w-xs"
                                />
                            </div>
                            <div className="mt-6">
                                <button
                                    onClick={handleAddTeacher}
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-indigo-500 sm:text-sm"
                                >
                                    เพิ่ม
                                </button>
                            </div>
                        </div>
                    </div>
                </div >
            ) : isEditDialogOpen && (
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
                                    label="ชื่อ"
                                    type="text"
                                    name="edit-name"
                                    id="edit-name"
                                    autoComplete="given-name"
                                    value={editTeacherName}
                                    variant='underlined'
                                    isRequired={true}
                                    onChange={(e) => setEditTeacherName(e.target.value)}
                                    className="max-w-xs"
                                />
                            </div>
                            <div className="mt-6">
                                <Input
                                    label="Email"
                                    type="email"
                                    name="edit-email"
                                    id="edit-email"
                                    autoComplete="email"
                                    value={editTeacherEmail}
                                    variant='underlined'
                                    isRequired={true}
                                    onChange={(e) => setEditTeacherEmail(e.target.value)}
                                    className="max-w-xs"
                                />
                            </div>
                            <div className="mt-6">
                                <button
                                    onClick={handleEditTeacher}
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-indigo-500 sm:text-sm"
                                >
                                    บันทึก
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    );
}

export default ShowTeacher;