import React, { useState } from "react";
import AccordionUI from "../components/AcconlateUI";
import Link from 'next/link';

const Accordion = () => {
  const [Index, setIndex] = useState(false);

  const data = [
    {
      id: 1,
      question: "บทเรียน",
      color: "#FF0000",
      answer: ["1. HTML  CSS  Java Script", "2. JQuery  Bootstap", "3. WebVR   A-Frame2", "4. VueJS", "5. ReactJS", "6. Mobile App :  React Native ", "7. Firebase"
      ]
    },
    {
      id: 2,
      question: "1. HTML  CSS  Java Script",
      color: "#FF0000",
      answer: ["เอกสาร",
        <Link key={1} href={"https://www.w3schools.com/html/"}>
          https://www.w3schools.com/html/
        </Link>,
        <Link key={2} href={"https://www.w3schools.com/css/default.asp"}>
          https://www.w3schools.com/css/default.asp
        </Link>,
        <Link key={3} href={"https://www.w3schools.com/js/default.asp"}>
          https://www.w3schools.com/js/default.asp
        </Link>
      ]
    },
    // เพิ่มข้อมูลอื่น ๆ ต่อไปตามความเหมาะสม
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
