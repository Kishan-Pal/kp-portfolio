import React from "react";
import { useEffect } from "react";
import MyResume from "../assets/kishan_pal_resume.pdf";
import HighlightText from "../assets/components/HighlightText";
import { FaFileDownload } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col  min-h-screen gap-6 p-8 bg-[var(--background-color)] max-md:p-6">
      <h1 className="text-3xl font-semibold text-center text-white">
        My <HighlightText>Profile</HighlightText>
      </h1>

      <h2 className="text-2xl font-semibold text-center text-white">
        <HighlightText>Education </HighlightText>Details{" "}
      </h2>

      <div className="flex justify-center flex-wrap items-center w-full h-fit gap-6 max-md:flex-col">
        <div className="flex flex-col w-full max-w-[450px] min-w-[400px] max-sm:min-w-[300px] h-fit rounded-xl border-2 border-[var(--imp-text-color)] shadow-md shadow-pink-300/20 transition-all duration-300 ease-in-out  ">
          <div className="flex items-center justify-center py-4 gap-2">
            <FaBookOpen className="text-white" />
            <h3 className="text-md text-center font-semibold text-white">
              B.E. in Computer Science Engineering
            </h3>
          </div>

          <hr className="border-[var(--imp-text-color)] mx-4" />
          <div className="flex flex-col items-center justify-center py-3 gap-2">
            <div className="flex items-center justify-center gap-2">
              <FaLocationDot className="text-white" />
              <h4 className="text-sm text-center  font-semibold text-white">
                RNS Institute of Technology, Bangalore
              </h4>
            </div>

            <h4 className="text-sm text-center  font-semibold text-white">
              2022 - 2026
            </h4>
            <h4 className="text-sm text-center  font-semibold text-white">
              CGPA - <HighlightText>8.98</HighlightText> (Till 5th Sem)
            </h4>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[450px] min-w-[400px] max-sm:min-w-[300px] h-fit rounded-xl border-2 border-[var(--imp-text-color)] shadow-md shadow-pink-300/20 transition-all duration-300 ease-in-out  ">
          <div className="flex items-center justify-center py-4 gap-2">
            <FaBookOpen className="text-white" />
            <h3 className="text-md text-center font-semibold text-white">
              Pre University - Science
            </h3>
          </div>

          <hr className="border-[var(--imp-text-color)] mx-4" />
          <div className="flex flex-col items-center justify-center py-3 gap-2">
            <div className="flex items-center justify-center gap-2">
              <FaLocationDot className="text-white" />
              <h4 className="text-sm text-center  font-semibold text-white">
                PES PU College, Bangalore
              </h4>
            </div>

            <h4 className="text-sm text-center  font-semibold text-white">
              2020 - 2022
            </h4>
            <h4 className="text-sm text-center  font-semibold text-white">
              Percentage - <HighlightText>95.56</HighlightText> %
            </h4>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[450px] min-w-[400px] max-sm:min-w-[300px] h-fit rounded-xl border-2 border-[var(--imp-text-color)] shadow-md shadow-pink-300/20 transition-all duration-300 ease-in-out  ">
          <div className="flex items-center justify-center py-4 gap-2">
            <FaBookOpen className="text-white" />
            <h3 className="text-md text-center font-semibold text-white">
              10th Std - CBSE
            </h3>
          </div>

          <hr className="border-[var(--imp-text-color)] mx-4" />
          <div className="flex flex-col items-center justify-center py-3 gap-2">
            <div className="flex items-center justify-center gap-2">
              <FaLocationDot className="text-white" />
              <h4 className="text-sm text-center  font-semibold text-white">
                B.B.U.L. Jain Vidhyalaya, Bangalore
              </h4>
            </div>

            <h4 className="text-sm text-center  font-semibold text-white">
              2014 - 2020
            </h4>
            <h4 className="text-sm text-center  font-semibold text-white">
              Percentage - <HighlightText>84.20</HighlightText> %
            </h4>
          </div>
        </div>
      </div>

      <a
        href={MyResume}
        download
        className="flex items-center mx-auto py-2 px-3 rounded-md h-fit w-fit justify-center gap-1 bg-[var(--imp-text-color)] text-white"
      >
        <FaFileDownload />
        <span>Download Resume</span>
      </a>
    </div>
  );
};

export default Resume;
