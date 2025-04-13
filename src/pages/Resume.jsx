import React from "react";
import { useEffect } from "react";
import MyResume from "../assets/kishan_pal_resume.pdf";
import HighlightText from "../assets/components/HighlightText";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-[var(--background-color)]">
      <h1 className="text-3xl font-semibold mb-6 text-white">
        My <HighlightText>Profile</HighlightText>
      </h1>

      {/* PDF Viewer */}
      <div className="w-full max-w-4xl h-[80vh] mb-6 border rounded-lg overflow-hidden shadow-lg bg-white max-sm:h-[60vh]">
        <iframe src={MyResume} title="My Resume PDF" className="w-full h-full">
          Your browser does not support iframes. Please download the resume
          below.
        </iframe>
      </div>

      <div className="flex items-center justify-center mb-4 gap-5">
        <a
          href={MyResume}
          download
          className="px-6 py-2 bg-[var(--imp-text-color)] text-white font-medium rounded hover:scale-105 transition duration-200 ease-in-out"
        >
          Download
        </a>
        <p className="text-white">
          Resume isn't visible? Click here for{" "}
          <a
            href={MyResume}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <HighlightText>Preview</HighlightText>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Resume;
