import React from "react";
import { useEffect } from "react";
import HighlightText from "../assets/components/HighlightText";
import ProjectCard from "../assets/components/ProjectCard";
import VendOPrint from "../assets/images/vendoprint.jpg";
import JoyFlick from "../assets/images/joyflick.jpg";
import Eventus from "../assets/images/eventus.jpg";
import Cybershield from "../assets/images/cybershield.jpg";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col gap-7 mx-20 my-10 max-sm:mx-15 max-sm:my-10">
      <div className="text-center text-white text-4xl max-md:text-3xl">
        My <HighlightText>Projects</HighlightText>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-5 mt-10 max-sm:mt-3">
        <ProjectCard
          title={"CYBERSHIELD"}
          image={Cybershield}
          isGithub={false}
          isDemo={false}
        >
          Simulated both normal and DoS (Denial of Service) traffic using two
          virtual machines on Microsoft Azure. Network packets were captured and
          stored in an Azure SQL Database. A machine learning model, deployed
          through a Flask backend, analyzed the traffic to detect potential DoS
          attacks in real-time. The results were visualized through a
          user-friendly frontend interface, enabling effective monitoring and
          threat detection.
        </ProjectCard>

        <ProjectCard
          title={"EVENTUS"}
          image={Eventus}
          isGithub={true}
          isDemo={false}
          github={"https://github.com/orgs/Event-page-rns/repositories"}
        >
          Developed an event management system for college clubs that allows
          users to create and delete events seamlessly. The system features
          automatic removal of expired events, ensuring up-to-date event
          listings. It streamlines event organization and enhances efficiency
          for club coordinators and members.
        </ProjectCard>
        <ProjectCard
          title={"JOYFLICK"}
          image={JoyFlick}
          isGithub={true}
          isDemo={true}
          github={"https://github.com/Kishan-Pal/Joyflick_js"}
          demo={"https://joyflick.vercel.app"}
        >
          Built an interactive website featuring a collection of mini-games and
          visual experiments. Included a Color Fill Game powered by BFS
          (Breadth-First Search), a Terrain and Pattern Generator using the Wave
          Function Collapse algorithm, and a vibrant Sand Simulator that mimics
          the behavior of realistic, colorful falling sand particles. Aimed to
          blend fun with creative algorithmic logic.
        </ProjectCard>
        <ProjectCard
          title={"VEND-O-PRINT"}
          image={VendOPrint}
          isGithub={true}
          isDemo={false}
          github={"https://github.com/Kishan-Pal/vend-o-print"}
        >
          Developed a responsive frontend for a startup offering a smart vending
          machine that prints documents uploaded via a mobile or web app. The
          system supports seamless online payments and provides a user-friendly
          interface for quick and efficient document printing.
        </ProjectCard>
      </div>
    </div>
  );
};

export default Projects;
