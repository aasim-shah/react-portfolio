import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import {SiFiverr} from 'react-icons/si'
import "../App.css";

function HeroSection() {
  return (
    <div id="home" className="pt-40">
      <div className="grid grid-flow-row grid-cols-1 items-center md:grid-cols-3">
        <div className="hero_left col-start-1 col-span-2  items-center flex flex-col mt-5">
          <div className="socialIcons ">
            <div className="icons  flex flex-row">
              <a href="https://www.instagram.com/aasimshahh/" className="text-[#C13584] mx-2">
                <AiFillInstagram size={30} />
              </a>
              <a href="https://www.facebook.com/asimshah0/" className="text-blue-300 mx-2">
                <AiFillFacebook size={30} />
              </a>
             
              <a href="whatsapp://send?text=Assalamuailkum!&phone=+923179936736" className="text-[#25d366] mx-2">
                <IoLogoWhatsapp size={30} />
              </a>
              <a href="https://www.github.com/aasim-shah/" className="text-white mx-2">
                <AiFillGithub size={30} />
              </a>
            </div>
          </div>
          <div className="name text-white mt-4">
            <p className="text-2xl font-bold">
              Hi ! <span>I am Aasim Shah :)</span>
            </p>
          </div>
          <div className="mr-6 text-white my-4 text-sm ">
            A Freelance WEB / APP developer from Pakistan 
          </div>
          <div className="buttons mt-3 md:mt-9">
              <button className="bg-black text-white mr-3 py-1 rounded-full border-2 border-white px-5  font-bold "><a href="/#contact">Hire Me</a></button> 
              <button className="bg-orange-500 rounded-full py-1 px-5 border-2 border-orange-800 text-black font-bold  "><a href="Aasim_shah_resume.pdf" download>
              <span className="flex flex-row">Resume <FiDownload size={18} className="mt-1 ml-3"/></span>
                </a></button> 
          </div>
        </div>
        <div className="hero_right flex flex-col  my-8 items-center md:items-start">
              <div className=" rounded-full border-2 border-orange-500">
              <img src="hah.jpg" alt="Image" className="rounded-full h-60 w-60" />
              </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
