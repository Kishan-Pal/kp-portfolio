import React from "react";
import { useEffect } from "react";
import HighlightText from "../assets/components/HighlightText";
import aboutLogo from "../assets/images/about.png";
import SkillCard from "../assets/components/SkillCard";
import AchievementCard from "../assets/components/AchievementCard";
import Codeflix from "../assets/images/codeflix.jpg";
import Deployment from "../assets/images/deployment.jpg";
import IEEEExtreme from "../assets/images/ieeeextreme.jpg";
import Keystroke from "../assets/images/keystroke.jpg";

import { useState } from "react";
const About = () => {
  const [skillImages, setSkillImages] = useState([
    "https://cdn.iconscout.com/icon/free/png-512/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png?f=webp&w=512",
    "https://2ality.com/2011/10/logo-js/js.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    "https://www.liblogo.com/img-logo/max/py286fd1b-python-logo-file-python-logo-notext-svg-wikimedia-commons.png",
    "https://pngimg.com/uploads/mysql/mysql_PNG19.png",
    "https://static-00.iconduck.com/assets.00/react-original-wordmark-icon-421x512-6l3sw2sy.png",
    "https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg",
  ]);
  const [toolImages, setToolImages] = useState([
    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
    "https://cdn.iconscout.com/icon/free/png-512/free-git-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-language-pack-logos-icons-1175195.png?f=webp&w=512",
    "https://www.primarymarkets.com/wp-content/uploads/2024/07/Postman-Circle-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg",
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col gap-14 mx-20 my-10 max-sm:mx-[5%] max-sm:my-0 max-sm:text-center">
      <div className="flex w-full h-fit justify-between">
        <div className="w-[60%] max-sm:w-full ">
          <div className="w-full t text-4xl py-5 text-white max-md:text-3xl">
            Peek Into <HighlightText>My</HighlightText> Story
          </div>
          <div className="w-full h-fit mt-10 max-md:mt-5 text-white text-[20px] max-md:text-[17px]">
            <p className="flex flex-col gap-2 text-justify ">
              <span>
                Hello there! I'm <HighlightText>Kishan Pal H</HighlightText>{" "}
                from <HighlightText>Bangalore</HighlightText>, India.
              </span>
              <span>
                I am currently pursuing my B.E. in{" "}
                <HighlightText>Computer Science</HighlightText> and Engineering
                at <HighlightText>RNSIT</HighlightText>, Bangalore.
              </span>
              <span>
                I am a passionate and dedicated software developer with a strong
                foundation in computer science. I have a keen interest in web
                technologies and product development, and I am always eager to
                learn new skills and technologies. My goal is to create
                innovative and efficient solutions that make a positive impact
                on users' lives.
              </span>
            </p>
          </div>
        </div>
        <div className="flex w-[30%] max-sm:hidden items-center justify-center">
          <img src={aboutLogo} alt="About Me" className="w-full h-auto" />
        </div>
      </div>
      <div className="w-[70%] h-fit max-sm:w-full">
        <div className="text-3xl text-white max-md:text-3xl  ml-2xl max-md:ml-0 max-sm:mx-auto">
          I Also <HighlightText>Like</HighlightText>
        </div>
        <ul className="text-xl text-white mt-10 space-y-3 max-md:text-lg max-sm:text-md">
          <li className="flex items-center gap-3 ">
            <span>🎵</span>
            <span>Listening to Music</span>
          </li>
          <li className="flex items-center gap-3 ">
            <span>🎤</span>
            <span>Singing</span>
          </li>
          <li className="flex items-center gap-3 ">
            <span>🏊‍♂️</span>
            <span>Swimming</span>
          </li>
          <li className="flex items-center gap-3 ">
            <span>⌨️</span>
            <span>Fast Typing</span>
          </li>
          <li className="flex items-center gap-3 ">
            <span>🍥</span>
            <span>Watching Anime</span>
          </li>
        </ul>
      </div>

      <div className="w-full h-fit">
        <div className="text-4xl text-white text-center max-md:text-3xl">
          Professional <HighlightText>SkillSet</HighlightText>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-0 mt-10">
          {skillImages.map((image, index) => (
            <SkillCard key={index} image={image} />
          ))}
        </div>
      </div>
      <div className="w-full h-fit">
        <div className="text-4xl text-white text-center max-md:text-3xl">
          <HighlightText>Tools</HighlightText> I use
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-0 mt-10">
          {toolImages.map((image, index) => (
            <SkillCard key={index} image={image} />
          ))}
        </div>
      </div>
      <div className="w-full h-fit">
        <div className="text-4xl text-white text-center max-md:text-3xl">
          My <HighlightText>Achievements</HighlightText>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-5 mt-10">
          <a href={Codeflix} target="_blank" rel="noopener noreferrer">
            <AchievementCard title={"CODEFLIX-5.0"} image={Codeflix}>
              Secured <HighlightText>1st place</HighlightText> in a coding
              competition.
            </AchievementCard>
          </a>
          <a href={Deployment} target="_blank" rel="noopener noreferrer">
            <AchievementCard
              title={"Deployment Competition"}
              image={Deployment}
            >
              Secured <HighlightText>1st place</HighlightText> in a Blockchain
              project deployment competition.
            </AchievementCard>
          </a>
          <a href={IEEEExtreme} target="_blank" rel="noopener noreferrer">
            <AchievementCard title={"IEEEEXTREME 18.0"} image={IEEEExtreme}>
              Achieved a <HighlightText>Global Rank of 1651</HighlightText> out
              of 8785 teams in a hackathon.
            </AchievementCard>
          </a>
          <a href={Keystroke} target="_blank" rel="noopener noreferrer">
            <AchievementCard title={"KEYSTROKE BATTLE"} image={Keystroke}>
              Secured <HighlightText>1st place</HighlightText> in a typing
              competition.
            </AchievementCard>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
