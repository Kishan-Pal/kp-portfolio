import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="flex bg-gray-950 text-white  py-4 px-10 justify-between items-center max-md:flex-col max-md:gap-3 ">
      <div className="text-center text-sm">
        {" "}
        Designed and Developed by Kishan Pal H{" "}
      </div>
      <div className="text-center text-sm">
        {" "}
        © {new Date().getFullYear()} All rights reserved.
      </div>
      <ul className="flex gap-4">
        <li className="social-icons">
          <a
            href="https://github.com/Kishan-Pal"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://x.com/KishanPal_6145"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/kishan-pal-8b3305291/"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.instagram.com/_kishan1k1_/"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram />
          </a>
        </li>

        <li className="social-icons">
          <a
            href="mailto:kishanpal6145@gmail.com"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMail />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
