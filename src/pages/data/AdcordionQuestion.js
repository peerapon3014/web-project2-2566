import React, { useState } from "react";
import AccordionUI from "../components/AccourseUI";

const Accordion = () => {
  const [Index, setIndex] = useState(false);

  const data = [
    {
      id: 1,
      question: "คำถามที่ 1 : ไอ่แก่ปี 3 รักน้องปี 1",
      
      answer: ["จำนวนนักศึกษาที่ตอบคำถาม : 25 คน", 
      ]
    },
    {
        id: 2,
        question: "คำถามที่ 2 : ",
        
        answer: ["จำนวนนักศึกษาที่ตอบคำถาม : ",
        ]
      },
      {
        id: 3,
        question: "คำถามที่ 3 : ",
        
        answer: ["จำนวนนักศึกษาที่ตอบคำถาม : ",
        ]
      },
      {
        id: 4,
        question: "คำถามที่ 4 : ",
        
        answer: ["จำนวนนักศึกษาที่ตอบคำถาม : ",
        ]
      },
      {
        id: 5,
        question: "คำถามที่ 5 : ",
        
        answer: ["จำนวนนักศึกษาที่ตอบคำถาม : ",
        ]
      },
      {
        id: 6,
        question: "คำถามที่ 6 : ",
        
        answer: ["จำนวนนักศึกษาที่ตอบคำถาม : ",
        ]
      },
     
      
  ];

  return (
    <div className="flex flex-col justify-start rounded-xl h-auto ">
      {data.map((data) => (
        <AccordionUI
          key={data.id} // เพิ่ม key prop
          title={data.question}
          Id={data.id}
          answers={data.answer} // ใช้ชื่อ prop ที่ไม่ใช่ children
          Index={Index}
          setIndex={setIndex}
        />
      ))}
    </div>
  );
};
export default Accordion;