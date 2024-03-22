import React, { useState } from "react";
import AccordionUI from "../components/AccordionUI";

const Accordion = () => {
  const [Index, setIndex] = useState(false);

  const data = [
    {
      id: 1,
      question: "ปริญญาตรี",
      answer: [
        "SC362002 Algorithms and Data Structures",
        "CP352203 Computer Game Development",
        "SC362202 Mobile and Web Application Development",
        "CP350001 COMPUTER PROGRAMMING I"
      ]
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center  rounded-xl h-auto ">
      {data.map((data, index) => (
        <AccordionUI
          key={index}
          title={data.question}
          Id={data.id}
          Index={Index}
          setIndex={setIndex}
          answers={data.answer} // ส่งคำตอบเป็น props แทน
        />
      ))}
    </div>
  );
};
export default Accordion;
