import React from "react";
import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="bg-emerald-100 py-10 sm:py-14">
        <div className="align-element grid md:grid-cols-2 items-center gap-x-64 ">
          <article className="flex flex-col items-center sm:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wider">I'm Utkarsh</h1>
            <p className="mt-4 text-sm md:text-xl text-indigo-800 tracking-wide capitalize">
              full-stack developer | practicing GCP
            </p>
            <p className="mt-2 text-sm md:text-lg text-slate-700 capitalize tracking-wide">
              turning idea's into reality
            </p>
            <div className="flex gap-x-4 mt-4">
              <a href="https://github.com/primeURL" target="_blank">
                <FaGithubSquare className="h-8 w-8 text-slate-600 hover:text-black duration-100" />
              </a>
              <a href="https://www.linkedin.com/in/utkarsh-lanjewar-4a8b5119a/" target="_blank">
                <FaLinkedin className="h-8 w-8 text-slate-600 hover:text-black duration-100" />
              </a>
              <a href="">
                <FaTwitterSquare className="h-8 w-8 text-slate-600 hover:text-black duration-100" />
              </a>
            </div>
          </article>
          <article className="hidden md:block">
            <img src={heroImg} className="h-80  hover:scale-110 transition duration-700" />
          </article>
        </div>
      </div>
    </>
  );
};

export default Hero;
