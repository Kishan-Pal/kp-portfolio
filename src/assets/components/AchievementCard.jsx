import React from "react";
import HighlightText from "./HighlightText";
const AchievementCard = ({ children, title, image }) => {
  return (
    <div className="flex flex-col max-h-[400px] max-w-[400px] sm:h-[400px] w-full border-2 border-[var(--imp-text-color)] rounded-lg shadow-md shadow-pink-300/20 transition-all duration-300 ease-in-out  p-5 text-white text-xl">
      <div className="text-center text-white text-2xl max-sm:text-xl">
        {title}
      </div>
      <img
        src={image}
        alt="Project"
        className="w-full mt-3 object-contain rounded-md"
      />
      <div className="text-white  mt-2 text-xl text-center max-sm:text-sm">
        {children}
      </div>
    </div>
  );
};

export default AchievementCard;
