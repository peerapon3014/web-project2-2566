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
        <Link href={"https://www.w3schools.com/html/"}>
          https://www.w3schools.com/html/
        </Link>,
        <Link href={"https://www.w3schools.com/css/default.asp"}>
          https://www.w3schools.com/css/default.asp
        </Link>,
        <Link href={"https://www.w3schools.com/js/default.asp"}>
          https://www.w3schools.com/js/default.asp
        </Link>
      ]
    },
    {
      id: 3,
      question: "2. JQuery  Bootstap",
      answer: ["งานที่ 1  เกมจับคู่ภาพ ด้วย JQuery + Boostrap",
        "เอกสารประกอบ",
        <Link href={"https://docs.google.com/document/d/1V7WbDhlzx4z4RGKqfUwKDxSa5_AAeSgB/edit"}>
          https://docs.google.com/document/d/1V7WbDhlzx4z4RGKqfUwKDxSa5_AAeSgB/edit
        </Link>
      ]
    },
    {
      id: 4,
      question: "3. WebVR   A-Frame2",
      answer: ["งานที่ 2 สร้างเว็บแบบ VR 360 โดยใช้ A-Frame",
        <Link href={"https://aframe.io/docs/1.5.0/introduction/"}>
          https://aframe.io/docs/1.5.0/introduction/
        </Link>,
        "เอกสารประกอบ",
        <Link href={"https://docs.google.com/document/d/1zRbG5MVENH5WpPi3B9OjkNGYGhZ0LipSqcyZUpCwsEw/edit?usp=sharing"}>
          https://docs.google.com/document/d/1zRbG5MVENH5WpPi3B9OjkNGYGhZ0LipSqcyZUpCwsEw/edit?usp=sharing
        </Link>
      ]
    },
    {
      id: 5,
      question: "4. VueJS",
      answer: ["งานที่ 3  สร้างเกมจับคู่ภาพโดยใช้  VueJS Vuetify",
        "เอกสารประกอบ",
        <Link href={"https://docs.google.com/document/d/1d5_HsGUlWiqBSHQIAXv8m9TyeLXCWPH_PyYGQ1Y5ypY/edit?usp=sharing"}>
          https://docs.google.com/document/d/1d5_HsGUlWiqBSHQIAXv8m9TyeLXCWPH_PyYGQ1Y5ypY/edit?usp=sharing
        </Link>
      ]
    }, {
      id: 6,
      question: "5. ReactJS",
      answer: ["งานที่ 4 สร้างเกมส์จับคู่ภาพด้วย ReactJS",
        "เอกสารประกอบ",
        <Link href={"https://docs.google.com/document/d/1XmWHQu8Tl6c0iu7wCk-7fNIWaACkoqpJrpVahLo_EaY/edit?usp=sharing"}>
          https://docs.google.com/document/d/1XmWHQu8Tl6c0iu7wCk-7fNIWaACkoqpJrpVahLo_EaY/edit?usp=sharing
        </Link>
      ]
    }, {
      id: 7,
      question: "6. Mobile App :  React Native ",
      answer: ["งานที่ 5 สร้าง ReacNative Application ตามเอกสาร",
        "เอกสารประกอบ",
        <Link href={"https://docs.google.com/document/d/1_TlFMEhh465RzMtHgozWdReCCog6v1072SINzU7CJZg/edit?usp=sharing"}>
          https://docs.google.com/document/d/1_TlFMEhh465RzMtHgozWdReCCog6v1072SINzU7CJZg/edit?usp=sharing
        </Link>
      ]
    },
    {
      id: 8,
      question: "7. Firebase",
      answer: ["งานที่ 6 เชื่อมต่อ firebase กับ React และ VueJS",
        "Documents",
        <Link href={"https://firebase.google.com/"}>
          https://firebase.google.com/
        </Link>,
        <Link href={"https://docs.expo.dev/guides/using-firebase/#using-react-native-firebase"}>
          https://docs.expo.dev/guides/using-firebase/#using-react-native-firebase
        </Link>,
        "เอกสารประกอบ",
        <Link href={"https://docs.google.com/document/d/1vdxC14X7JuDdUdugdDVhOSas31blD0c73N0_hzsY23A/edit?usp=sharing"}>
          https://docs.google.com/document/d/1vdxC14X7JuDdUdugdDVhOSas31blD0c73N0_hzsY23A/edit?usp=sharing
        </Link>
      ]
    },



  ];

  return (
    <div className="flex flex-col justify-start rounded-xl h-auto">
      {data.map((data, index) => {
        return (
          <AccordionUI
            key={index}
            title={data.question}
            Id={data.id}
            children={data.answer}
            Index={Index}
            setIndex={setIndex}
            color={data.color}
          ></AccordionUI>
        );
      })}
    </div>
  );
};
export default Accordion;