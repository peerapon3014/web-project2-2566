import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase'; // นำเข้า Firestore object (db) จากไฟล์ firebase ของคุณ

const AddQuestionForm = () => {
  const [question, setQuestion] = useState('');

  const handleAddQuestion = async () => {
    if (!question) {
      alert('Please enter a question.');
      return;
    }

    try {
      // เพิ่มคำถามใหม่เข้าไปใน subcollection "checkin"
      const docRef = await addDoc(collection(db, 'questions'), {
        question: question,
        answer: '',   // ใส่ข้อมูลคำตอบเป็นค่าว่างเพื่อรอการกรอกจากผู้ใช้
        senderName: ''  // ใส่ข้อมูลชื่อผู้ส่งเป็นค่าว่างเพื่อรอการกรอกจากผู้ใช้
      });

      alert('Question added successfully!');
      setQuestion(''); // ล้างคำถามหลังจากเพิ่มเสร็จ
    } catch (error) {
      console.error('Error adding question:', error);
      alert('An error occurred while adding the question.');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)} 
        placeholder="Enter your question" 
      />
      <button onClick={handleAddQuestion}>Add Question</button>
    </div>
  );
};

export default AddQuestionForm;
