import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import "../App.css";
import Typical from "react-typical";

function HeroSection() {
  return (
    <div id="home" className=" mt-40">
      <div className="grid grid-flow-row grid-cols-1 items-center md:grid-cols-3">
        <div className="hero_left col-start-1 col-span-2  items-center flex flex-col mt-5">
          <div className="socialIcons ">
            <div className="icons  flex flex-row">
              <a href="https://www.instagram.com/aasim._.shah/" className="text-[#C13584] mx-2">
                <AiFillInstagram size={30} />
              </a>
              <a href="https://www.instagram.com/aasim._.shah/" className="text-blue-600 mx-2">
                <AiFillFacebook size={30} />
              </a>
              <a href="https://www.instagram.com/aasim._.shah/" className="text-[#25d366] mx-2">
                <IoLogoWhatsapp size={30} />
              </a>
              <a href="https://www.instagram.com/aasim._.shah/" className="text-white mx-2">
                <AiFillGithub size={30} />
              </a>
            </div>
          </div>
          <div className="name text-white mt-4">
            <p className="text-2xl font-bold">
              Hi ! <span>I am Aasim Shah :)</span>
            </p>
          </div>
          <div className="mr-6 text-white my-4 text-xl font-bold">
            <Typical
              steps={[
                "Freelancer 😍",
                3000,
                "Developer ✌",
                3000,
                "React/React Native ✌",
                3000,
                "Nodejs Web Dev ✌",
                3000,
              ]}
              loop={Infinity}
              wrapper="h2"
            />
          </div>
          <div className="buttons mt-3 md:mt-9">
              <button className="bg-black text-white mr-3 py-1 rounded-full border-2 border-white px-5  font-bold ">Hire Me</button> 
              <button className="bg-orange-500 rounded-full py-1 px-5 border-2 border-orange-800 text-black font-bold  "><span className="flex flex-row">Resume <FiDownload size={18} className="mt-1 ml-3"/></span></button> 
          </div>
        </div>
        <div className="hero_right flex flex-col mt  my-4 items-center md:items-start">
              <div className=" rounded-full border-4  h-60 w-60 border-orange-500">
              <img src="hero.png" alt="Image" className="rounded-full h-60 w-60" />
              </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
