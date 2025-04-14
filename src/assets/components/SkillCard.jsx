import React from "react";

const SkillCard = ({ image }) => {
  return (
    <div className="flex max-w-[150px] max-h-[150px] h-[150px] border-2 border-[var(--imp-text-color)] rounded-lg shadow-md shadow-pink-300/20 transition-all duration-300 ease-in-out flex-col items-center justify-center p-5  w-full my-5 max-sm:h-[120px] max-sm:w-[120px] max-sm:max-h-[120px] max-sm:my-2 ">
      <img src={image} alt="Skill" className="w-full h-full object-contain" />
    </div>
  );
};

export default SkillCard;
