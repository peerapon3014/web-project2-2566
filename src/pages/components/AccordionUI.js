import React from "react";

const AccordionUI = ({ title, answer, Id, Index, setIndex }) => {
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
        className="flex cursor-pointer w-3/4 mx-auto h-16 justify-between items-center mt-2 rounded-md bg-[#1373BB] hover:bg-blue-100 hover:shadow-lg"
      >
        <div className="text-white font-semibold pl-10 group-hover:text-[#1373BB]">
          {title}
        </div>
      </div>

      {Index === Id && (
        <div className="bg-blue-100 pl-10 font-semibold text-[#1373BB] w-3/4 h-auto rounded-md p-4 border-l-2 border-blue-500 mb-2">
          {answer.map((text, index) => (
            <p key={index} className="mb-2">
              {text}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default AccordionUI;
