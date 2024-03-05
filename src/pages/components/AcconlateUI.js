import React from "react";
import { HiArrowCircleDown, HiX } from "react-icons/hi";

const AccordionUI = ({ title, children, Id, Index, setIndex }) => {
    const handleSetIndex = (Id) => Index !== Id && setIndex(Id);
    const handleToggleIndex = (Id) => {
        if (Index === Id) {
            setIndex(null);
        } else {
            setIndex(Id);
        }
    };

    return (
        <>
            <div
                onClick={() => handleToggleIndex(Id)}
                
                className="flex group cursor-pointer w-4/4 h-16 justify-between  items-center  mt-5 rounded-md bg-[#1373BB] hover:bg-blue-100 hover:shadow-lg "
            >
                <div className="flex group cursor-pointer">
                    <div className="text-white pl-10 group-hover:text-[#1373BB]">
                        {title}
                    </div>
                </div>
                <div className="flex items-center px-8 justify-center ">
                    {Index !== Id ? (
                        <HiArrowCircleDown className="w-6 h-6 group-hover:text-white text-white" />
                    ) : (
                        <HiX className="w-6 h-6 group-hover:text-white text-white" />
                    )}
                </div>
            </div>

            {Index === Id && (
                <div className="bg-blue-100 pl-10   text-[#1373BB]  w-4/4 h-auto  rounded-md p-4 border-l-2 border-blue-500 mb-2 ">
                    {children.map((text, index) => (
                        <p key={index} className="mb-5 ">{text}</p>

                    ))}
                </div>
            )}
        </>
    );
};

export default AccordionUI;
