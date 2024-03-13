import React, { useState } from "react";
import AccordionUI from "../components/AccourseUI";

const Accordion = () => {
  const [Index, setIndex] = useState(false);

  const data = [
    {
      id: 1,
      question: "เช็คชื่อครั้งที่ 1",
      
      answer: ["จำนวนนักศึกษาที่เช็คชื่อแล้ว : 48 คน"
      ]
    },
    {
        id: 2,
        question: "เช็คชื่อครั้งที่ 2",
        
        answer: ["จำนวนนักศึกษาที่เช็คชื่อแล้ว :"
        ]
      },
      {
        id: 3,
        question: "เช็คชื่อครั้งที่ 3",
        
        answer: ["จำนวนนักศึกษาที่เช็คชื่อแล้ว :"
        ]
      },
      {
        id: 4,
        question: "เช็คชื่อครั้งที่ 4",
        
        answer: ["จำนวนนักศึกษาที่เช็คชื่อแล้ว :"
        ]
      },
      {
        id: 5,
        question: "เช็คชื่อครั้งที่ 5",
        
        answer: ["จำนวนนักศึกษาที่เช็คชื่อแล้ว :"
        ]
      },
      {
        id: 6,
        question: "เช็คชื่อครั้งที่ 6",
        
        answer: ["จำนวนนักศึกษาที่เช็คชื่อแล้ว :"
        ]
      },
     
      
    

  ];

  return (
    <div className="flex flex-col justify-start rounded-xl h-auto ">
      {data.map((data) => {
        return (
          <AccordionUI
            title={data.question}
            Id={data.id}
            children={data.answer}
            Index={Index}
            setIndex={setIndex}
          ></AccordionUI>
        );
      })}
    </div>
  );
};
export default Accordion;