import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({
  children,
  image,
  title,
  isGithub,
  github,
  isDemo,
  demo,
}) => {
  return (
    <div className="flex flex-col h-[450px] w-[300px] border-2 border-[var(--imp-text-color)] gap-4 rounded-lg shadow-md shadow-pink-300/20 transition-all duration-300 ease-in-out  px-3 py-5 text-white text-xl">
      <div className="text-center text-white text-2xl  ">{title}</div>
      <img
        src={image}
        alt="Project"
        className="w-full max-h-[100px] object-contain rounded-xl overflow-hidden"
      />

      <div className="text-white text-justify text-[15px] ">{children}</div>
      <div className="flex justify-center items-center gap-5 mt-auto mb-0">
        <button
          className={
            `flex gap-1 items-center justify-center bg-[var(--imp-text-color)] text-white text-sm px-4 py-2 rounded-lg hover:bg-[var(--imp-text-color)]/80 transition duration-300 ease-in-out cursor-pointer` +
            (isGithub ? "" : " hidden")
          }
          onClick={() => {
            window.open(github, "_blank");
          }}
        >
          <BsGithub />
          Github
        </button>
        <button
          className={
            `flex gap-1 items-center justify-center bg-[var(--imp-text-color)] text-white text-sm px-4 py-2 rounded-lg hover:bg-[var(--imp-text-color)]/80 transition duration-300 ease-in-out cursor-pointer` +
            (isDemo ? "" : " hidden")
          }
          onClick={() => {
            window.open(demo, "_blank");
          }}
        >
          <CgWebsite />
          Link
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
