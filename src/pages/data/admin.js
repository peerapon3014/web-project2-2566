import React, { useState } from "react";
import AccordionUI from "../components/AccourseUI";

const Accordion = () => {
  const [Index, setIndex] = useState(false);

  const data = [
    {
      id: 1,
      question: "หลักการออกแบบเว็บ",
      
      answer: ["ใบความรู้ - หลักการออกแบบเว็บไซต์", "วิดีโอ - หลักการออกแบบเว็บไซต์ ตอนที่ 1" ,"วิดีโอ - หลักการออกแบบเว็บไซต์ ตอนที่ 2"
      ]
    },
    {
        id: 2,
        question: "การวางแผนออกแบบเว็บไซต์",
        
        answer: ["ใบความรู้ - การวางแผนออกแบบเว็บไซต์", "วิดีโอ - การวางแผนออกแบบเว็บไซต์ ตอนที่ 1" ,"วิดีโอ - การวางแผนออกแบบเว็บไซต์ ตอนที่ 2"
        ]
      },
      {
        id: 3,
        question: "การวางแผนระบบนำทาง",
        
        answer: ["ใบความรู้ - การวางแผนระบบนำทาง", "วิดีโอ - การวางแผนระบบนำทางตอนที่ 1" ,"วิดีโอ - การวางแผนระบบนำทาง ตอนที่ 2"
        ]
      },
      {
        id: 4,
        question: "การออกแบบเนื้อหา",
        
        answer: ["ใบความรู้ - การออกแบบเนื้อหา", "วิดีโอ - การออกแบบเนื้อหา ตอนที่ 1" ,"วิดีโอ - การออกแบบเนื้อหาตอนที่ 2"
        ]
      },
      {
        id: 5,
        question: "แบบทดสอบหลังเรียน",
        
        answer: ["แบบทดสอบหลังเรียน"
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