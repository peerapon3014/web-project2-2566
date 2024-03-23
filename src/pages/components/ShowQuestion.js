import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import { XMarkIcon, TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { Input } from "@nextui-org/react";

function ShowQuestion() {
    const [question, setQuestion] = useState([]);
    const [newQuestion, setNewQuestion] = useState('');
    const [editQuestion, setEditQuestion] = useState('');
    const [selectedQuestion, setselectedQuestion] = useState(null);
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [isGetCheckinOpen, setIsGetCheckinOpen] = useState(false);
    const [checkedAnswers, setCheckedAnswers] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'questions'));
                const questionList = [];
                querySnapshot.forEach((doc) => {
                    const questionData = { id: doc.id, ...doc.data() };
                    questionList.push(questionData);
                });
                setQuestion(questionList);
            } catch (error) {
                console.error('Error fetching questions: ', error);
            }
        };
        fetchQuestions();
    }, []);

    const handleAddQuestion = async () => {
        try {
            const docRef = await addDoc(collection(db, 'questions'), {
                question: newQuestion,

            });
            console.log('Document written with ID: ', docRef.id);
            setNewQuestion('');
            setIsAddDialogOpen(false);
            window.location.reload();
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    const handleEditQuestion = async () => {
        try {
            if (!selectedQuestion) {
                console.error('No question selected for editing.');
                return;
            }

            await updateDoc(doc(db, 'questions', selectedQuestion.id), {
                question: editQuestion
            });

            const updatedQuestions = question.map(question => {
                if (question.id === selectedQuestion.id) {
                    return {
                        ...question, question: editQuestion
                    };
                }
                return question;
            });
            setQuestion(updatedQuestions);
            setIsEditDialogOpen(false);
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    };

    const handleDeleteQuestion = async (questionId) => {
        const confirmDelete = window.confirm('คุณแน่ใจหรือไม่ที่จะลบคำถามนี้?');
        if (confirmDelete) {
            try {
                await deleteDoc(doc(db, 'questions', questionId));
                const updatedQuestions = question.filter(question => question.id !== questionId);
                setQuestion(updatedQuestions);
                console.log('Document Deleted with ID: ', questionId);
            } catch (error) {
                console.error('Error deleting document: ', error);
            }
        }
    };

    const handleShowAnswers = async (questionId) => {
        try {
            const docRef = doc(db, 'questions', questionId);
            const docSnapshot = await getDoc(docRef);
            if (docSnapshot.exists()) {
                const answerData = docSnapshot.data().answer;
                if (answerData && answerData.length > 0) {
                    setCheckedAnswers(answerData);
                    console.log(answerData);
                    setIsGetCheckinOpen(true);
                } else {
                    // แสดง Alert ว่าไม่พบคำตอบ
                    alert('ไม่พบคำตอบ');
                }
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
                    <p className='text-3xl font-bold text-[#1373BB]'>แสดงคำถามทั้งหมด</p>
                    <div className='flex justify-end'>
                        <button
                            onClick={() => setIsAddDialogOpen(true)}
                            className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            เพิ่มคำถาม
                        </button>
                    </div>
                </div>
                <div className="mt-5">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">คำถาม</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">การดำเนินการ</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {question.map((question, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">{question.question}</td>
                                    <td className="px-6 py-4 whitespace-nowrap flex item-center">
                                        <button onClick={() => {
                                            setselectedQuestion(question);
                                            setEditQuestion(question.question);
                                            setIsEditDialogOpen(true);
                                        }} className="ml-2">
                                            <PencilSquareIcon className="h-6 w-6 text-primary-600" />
                                        </button>
                                        <button onClick={() => handleDeleteQuestion(question.id)} className="ml-2">
                                            <TrashIcon className="h-6 w-6 text-red-600" />
                                        </button>
                                        <button onClick={() => handleShowAnswers(question.id)}
                                            className="ml-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            ดูคำตอบ
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
                            <div className="mt-2">
                                <Input
                                    label="คำถาม"
                                    type="text"
                                    name="question"
                                    id="question"
                                    autoComplete="given-name"
                                    placeholder='กรอกคำถาม'
                                    value={newQuestion}
                                    onChange={(e) => setNewQuestion(e.target.value)}
                                    className="max-w-xs"
                                    variant='underlined'
                                    isRequired={true}
                                />
                            </div>
                            <div className="mt-6">
                                <button
                                    onClick={handleAddQuestion}
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-indigo-500 sm:text-sm"
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
                            <div className="mt-2">
                                <Input
                                    label="คำถาม"
                                    type="text"
                                    name="edit-question"
                                    id="edit-question"
                                    autoComplete="given-name"
                                    value={editQuestion}
                                    onChange={(e) => setEditQuestion(e.target.value)}
                                    className="max-w-xs"
                                    variant='underlined'
                                    isRequired={true}
                                />
                            </div>
                            <div className="mt-6">
                                <button
                                    onClick={handleEditQuestion}
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-indigo-500 sm:text-sm"
                                >
                                    บันทึก
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : isGetCheckinOpen && (
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
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">คำตอบ</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">รหัสนักศึกษา</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ชื่อ</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">สาขา</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Section</th>
                                            {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">วันที่</th> */}
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {checkedAnswers.map((answer, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap">{answer.answer}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{answer.stdid}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{answer.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{answer.email}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{answer.course}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{answer.section}</td>
                                                {/* <td className="px-6 py-4 whitespace-nowrap">{new Date(answer.answered_date).toLocaleString()}</td> */}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ShowQuestion;