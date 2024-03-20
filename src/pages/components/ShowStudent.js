import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import Cards from './CardAdcourse'
import MyFooter from '@/pages/components/footer'
import Link from 'next/link';
import { auth, db } from '../firebase'
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { XMarkIcon, TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

function ShowStudent() {
    const [students, setStudents] = useState([]);
    const [newStudentID, setNewStudentID] = useState('');
    const [newStudentName, setNewStudentName] = useState('');
    const [newStudentEmail, setNewStudentEmail] = useState('');
    const [newStudentSection, setNewStudentSection] = useState('');
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [selectedStudent, setselectedStudent] = useState(null);
    const [editStudentID, setEditStudentID] = useState('');
    const [editStudentName, setEditStudentName] = useState('');
    const [editStudentEmail, seteditStudentEmail] = useState('');
    const [editStudentSection, setEditStudentSection] = useState('');

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'students'));
                const studentList = [];
                querySnapshot.forEach((doc) => {
                    const studentData = { id: doc.id, ...doc.data() };
                    studentList.push(studentData);
                });
                setStudents(studentList);
            } catch (error) {
                console.error('Error fetching teachers: ', error);
            }
        };
        fetchStudents();
    }, []);

    const handleAddStudent = async () => {
        try {
            const docRef = await addDoc(collection(db, 'students'), {
                id: newStudentID,
                name: newStudentName,
                email: newStudentEmail,
                section: newStudentSection
            });
            console.log('Document written with ID: ', docRef.id);
            setNewStudentID('');
            setNewStudentName('');
            setNewStudentEmail('');
            setNewStudentSection('');
            setIsAddDialogOpen(false);
            window.location.reload();
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    const handleDeleteStudent = async (studentId) => {
        const confirmDelete = window.confirm('คุณแน่ใจหรือไม่ที่จะลบนักเรียนคนนี้?');
        if (confirmDelete) {
            try {
                const studentDocRef = doc(db, 'students', studentId);
                await deleteDoc(studentDocRef);
                const updatedStudents = students.filter(student => student.id !== studentId);
                setStudents(updatedStudents);
            } catch (error) {
                console.error('Error deleting document: ', error);
            }
        }
    };

    const handleEditStudent = async () => {
        try {
            if (!selectedStudent) {
                console.error('No teacher selected for editing.');
                return;
            }

            await updateDoc(doc(db, 'students', selectedStudent.id), {
                id: editStudentID,
                name: editStudentName,
                email: editStudentEmail,
                section: editStudentSection
            });

            const updatedStudents = students.map(student => {
                if (student.id === selectedStudent.id) {
                    return { ...student, id: editStudentID, name: editStudentName, email: editStudentEmail, section: editStudentSection };
                }
                return student;
            });
            setStudents(updatedStudents);
            setIsEditDialogOpen(false);
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    };

    return (
        <>
            <div className='bg-white  p-6 py-8 lg:px-32 md:px-8 m-5 rounded-lg h-[60em]'>
                <div className='mt-10 text-xl'>
                    <p className='text-3xl font-bold text-[#1373BB]'>แสดงรายชื่อนักเรียน</p>
                    <div className='flex justify-end'>
                        <button
                            onClick={() => setIsAddDialogOpen(true)}
                            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            เพิ่มนักเรียน
                        </button>
                    </div>
                </div>
                <div className="mt-5">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">รหัสนักศึกษา</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ชื่อ</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">อีเมล์</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Section</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">การดำเนินการ</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {students.map((student, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">{student.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{student.section}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button onClick={() => {
                                            setselectedStudent(student);
                                            setEditStudentID(student.id);
                                            setEditStudentName(student.name);
                                            seteditStudentEmail(student.email);
                                            setEditStudentSection(student.section);
                                            setIsEditDialogOpen(true);
                                        }} className="ml-2">
                                            <PencilSquareIcon className="h-6 w-6 text-indigo-600" />
                                        </button>
                                        <button onClick={() => handleDeleteStudent(student.id)} className="ml-2">
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
                                <label htmlFor="id" className="block text-sm font-medium text-gray-700">รหัสนักศึกษา</label>
                                <input
                                    type="text"
                                    name="id"
                                    id="id"
                                    autoComplete="given-name"
                                    value={newStudentID}
                                    onChange={(e) => setNewStudentID(e.target.value)}
                                    className="mt-1 p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mt-6">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">ชื่อ</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="given-name"
                                    value={newStudentName}
                                    onChange={(e) => setNewStudentName(e.target.value)}
                                    className="mt-1 p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mt-6">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">อีเมล</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    value={newStudentEmail}
                                    onChange={(e) => setNewStudentEmail(e.target.value)}
                                    className="mt-1 p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mt-6">
                                <label htmlFor="section" className="block text-sm font-medium text-gray-700">Section</label>
                                <input
                                    type="number"
                                    name="section"
                                    id="section"
                                    autoComplete="given-name"
                                    value={newStudentSection}
                                    onChange={(e) => setNewStudentSection(e.target.value)}
                                    className="mt-1 p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mt-6">
                                <button
                                    onClick={handleAddStudent}
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm"
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
                                <label htmlFor="edit-id" className="block text-sm font-medium text-gray-700">รหัสนักศึกษา</label>
                                <input
                                    type="text"
                                    name="edit-id"
                                    id="edit-id"
                                    autoComplete="given-name"
                                    value={editStudentID}
                                    onChange={(e) => setEditStudentID(e.target.value)}
                                    className="mt-1 p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mt-6">
                                <label htmlFor="edit-name" className="block text-sm font-medium text-gray-700">ชื่อ</label>
                                <input
                                    type="text"
                                    name="edit-name"
                                    id="edit-name"
                                    autoComplete="given-name"
                                    value={editStudentName}
                                    onChange={(e) => setEditStudentName(e.target.value)}
                                    className="mt-1 p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mt-6">
                                <label htmlFor="edit-email" className="block text-sm font-medium text-gray-700">อีเมล</label>
                                <input
                                    type="email"
                                    name="edit-email"
                                    id="edit-email"
                                    autoComplete="email"
                                    value={editStudentEmail}
                                    onChange={(e) => seteditStudentEmail(e.target.value)}
                                    className="mt-1 p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mt-6">
                                <label htmlFor="edit-section" className="block text-sm font-medium text-gray-700">Section</label>
                                <input
                                    type="number"
                                    name="edit-section"
                                    id="edit-section"
                                    autoComplete="given-name"
                                    value={editStudentSection}
                                    onChange={(e) => setEditStudentSection(e.target.value)}
                                    className="mt-1 p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mt-6">
                                <button
                                    onClick={handleEditStudent}
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm"
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

export default ShowStudent;