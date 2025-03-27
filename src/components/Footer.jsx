import React from "react";
import { data, Link } from "react-router";
import { FaGithub } from "react-icons/fa6";
import { FaTelegram, FaInstagram, FaDiscord } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
const Footer = () => {
  return (
    <>
      <footer className="flex bg-[#1E1E1E] flex-col">
        <IconContext.Provider value={{ size: "2rem" }}>
          <div className="flex flex-row justify-evenly px-5 pb-2 items-center">
            <div className="flex flex-col">
              <Link to={"/"}>
                <img src="logo.png" alt="" className="w-[224px]" />
              </Link>
              <div className="flex flex-row justify-between px-4 w-[224px]">
                <a
                  href="https://github.com/ParsaDokhtMohammadi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a href="#">
                  <FaTelegram />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaDiscord />{" "}
                </a>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-center">

            <div className="flex flex-col gap-3 p-4">
                <h2 className="text-2xl border-b-1">Pages</h2>
                <Link to={"/trending"}>trending</Link>
                <Link to={"/cart"}>cart</Link>
                <Link to={"/favorites"}>favorites</Link>
            </div>
            <div className="w-[225px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eveniet dignissimos tempore ?
            </div>
            </div>
          </div>

          <div className="flex justify-center p-3 border-t-1">
            <span>
              © {new Date().getFullYear()} MOVIES. All rights
              reserved. Designed & Developed by{" "}
              <a
                href="https://github.com/ParsaDokhtMohammadi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Parsa Dokht Mohammadi
              </a>
              .
            </span>
          </div>
        </IconContext.Provider>
      </footer>
    </>
  );
};

export default Footer;
