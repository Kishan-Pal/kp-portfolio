import React from "react";
import { useEffect } from "react";
import homeLogo from "../assets/images/home-main.svg";
import HighlightText from "../assets/components/HighlightText";
import KishanPal from "../assets/images/kishanpal4.jpg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="my-10 mx-20 max-md:mx-[10%]">
      <div className="flex w-full h-fit  max-sm:flex-col-reverse">
        <div className="w-[50%]  p-30 text-[50px] text-white my-auto max-sm:w-full  max-sm:p-0 max-md:p-5 max-md:py-20 md:p-5 md:py-20 max-md:text-[40px] max-lg:text-[35px]">
          <p>Hi there!</p>
          <p>
            I'm <HighlightText> Kishan Pal H </HighlightText>
          </p>
        </div>
        <div className="w-[50%] max-sm:w-[80%] max-sm:mx-auto max-sm:mb-5">
          <img
            src={KishanPal}
            alt=""
            className="w-full rounded-[50%] max-w-[250px] mx-auto"
          />
        </div>
      </div>
      <div className="flex w-full h-fit py-10 max-md:mt-3">
        <div className="w-[70%] max-md:w-full ">
          <div className="w-full text-center text-4xl py-5 text-white max-md:text-[30px]">
            Some <HighlightText>Facts</HighlightText> About Me
          </div>
          <div className="w-full h-fit mt-10 max-md:mt-5 text-white text-[20px] max-md:text-[20px]">
            <ul className="list-none flex flex-col gap-6 ">
              <li className="flex gap-1">
                <span>💻</span>{" "}
                <span>
                  I unexpectedly fell in love with{" "}
                  <HighlightText>Programming</HighlightText> and have never
                  looked back since.
                </span>
              </li>
              <li className="flex gap-1">
                <span>🧠</span>{" "}
                <span>
                  {" "}
                  I'm fluent in{" "}
                  <HighlightText>JavaScript, Java, and Python</HighlightText> —
                  my go-to tools for building and problem-solving.
                </span>
              </li>
              <li className="flex gap-1">
                <span>🌐</span>
                <span>
                  My interests lie in{" "}
                  <HighlightText>web technologies</HighlightText> and product
                  development, with a growing curiosity in{" "}
                  <HighlightText>machine learning</HighlightText>.
                </span>
              </li>
              <li className="flex gap-1">
                <span>⚡</span>
                <span>
                  I enjoy <HighlightText>fast typing</HighlightText>,{" "}
                  <HighlightText>competitive programming</HighlightText>, and
                  challenging myself through code.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-[30%] max-md:hidden items-center justify-center ">
          <img
            src={homeLogo}
            alt="Home Logo"
            className="w-full h-auto max-sm:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
