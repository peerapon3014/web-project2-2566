import React, { useState } from "react";
import AccordionUI from "../components/AccordionUI";

const Accordion = () => {
  const [Index, setIndex] = useState(false);

  const data = [
    {
      id: 1,
      question: "ปริญญาตรี",
      answer: ["322 275 XML TOWARDS WEB TECHNOLOGIES AND APPLICATIONS", 
      "322 371 Computer Network Security", 
      "322364 PARALLEL PROGRAMMING",
    "322371 SOFTWARE ENGINEERING","322371 Web Desigh Technologies","322113 sAna Fundamental Computer Science","322212 DATA STRUCTURES","322251 PROGRAMMING IN JAVA"]



    },
    {
      id: 2,
      question: "ปริญญาโท",
      answer:
      ["322117 Computer Programming", 
      "322754 KNOWLEDGE ENGINEERING", 
      "340733 database and design",
    "322758-Big Data Analytics","322735 XML TECHNOLOGIES AND APPLICATIONS","322212 DATA STRUCTURES","322251 PROGRAMMING IN JAVA"]
    },

  ];

  return (
    <div className="flex flex-col justify-center items-center  rounded-xl h-auto ">
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