import React, { useState } from "react";
import { FiDownload  } from "react-icons/fi";
import {FaCircle} from "react-icons/fa";
import * as Scroll from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";
import { AiOutlineArrowRight } from "react-icons/ai";

function Projects() {
  const [inUse, setinUse] = useState("first");
  return (
    <>
      <div className="heading mb-12  pt-12" id="profile">
        <p className="font-bold text-center text-white text-xl">Resume</p>
      </div>

      <div className="w-8/12 mx-auto">
        <div className="grid grid-flow-row  text-white grid-cols-1 md:grid-cols-3">
          <div className="sidebar mb-12 md:mt-12 col-span-1 md:col-span-1">
            <div className="ul">
              <ul className="sidebar_ul ">
                <li
                  className={
                    inUse === "first"
                      ? "sidebar_li mt-5 sidebar_li_active"
                      : "sidebar_li mt-5"
                  }
                >
                  <Link
                    to="firstInsideContainer"
                    containerId="containerElement"
                    onClick={() => setinUse("first")}
                  >
                    <span className="flex flex-row">
                      <FiDownload
                        size={22}
                        className="mt-1 mr-3  sidebar_icon"
                        color="white"
                      />
                      <span className="text-xl sidebar_text font-bold">
                        Education
                      </span>
                    </span>
                  </Link>
                </li>

                <li
                  className={
                    inUse === "second"
                      ? "sidebar_li mt-5 sidebar_li_active"
                      : "sidebar_li mt-5"
                  }
                >
                  <Link
                    to="secondInsideContainer"
                    containerId="containerElement"
                    onClick={() => setinUse("second")}
                  >
                    <span className="flex flex-row">
                      <FiDownload
                        size={22}
                        className="mt-1 mr-3 sidebar_icon"
                        color="white"
                      />
                      <span className="text-xl sidebar_text font-bold">
                        Work History
                      </span>
                    </span>
                  </Link>
                </li>

                <li
                  className={
                    inUse === "third"
                      ? "sidebar_li mt-5 sidebar_li_active"
                      : "sidebar_li mt-5"
                  }
                >
                  <Link
                    to="thirdInsideContainer"
                    containerId="containerElement"
                    onClick={() => setinUse("third")}
                  >
                    <span className="flex flex-row">
                      <FiDownload
                        size={22}
                        className="mt-1 mr-3 sidebar_icon"
                        color="white"
                      />
                      <span className="text-xl sidebar_text font-bold">
                        Programming Skills
                      </span>
                    </span>
                  </Link>
                </li>

                <li
                  className={
                    inUse === "fourth"
                      ? "sidebar_li mt-5 sidebar_li_active"
                      : "sidebar_li mt-5"
                  }
                >
                  <Link
                    to="fourthInsideContainer"
                    containerId="containerElement"
                    onClick={() => setinUse("fourth")}
                  >
                    <span className="flex flex-row">
                      <FiDownload
                        size={22}
                        className="mt-1 mr-3 sidebar_icon"
                        color="white"
                      />
                      <span className="text-xl sidebar_text font-bold">
                        Projects
                      </span>
                    </span>
                  </Link>
                </li>

                <li
                  className={
                    inUse === "fifth"
                      ? "sidebar_li mt-5 sidebar_li_active"
                      : "sidebar_li mt-5"
                  }
                >
                  <Link
                    to="fifthInsideContainer"
                    containerId="containerElement"
                    onClick={() => setinUse("fifth")}
                  >
                    <span className="flex flex-row">
                      <FiDownload
                        size={22}
                        className="mt-1 mr-3 sidebar_icon"
                        color="white"
                      />
                      <span className="text-xl sidebar_text font-bold">
                        Intersts
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="mainview h-80 element col-span-1 md:col-span-2"
            id="containerElement"
            style={{ overflowY: "scroll"}}>
            <div className="first pt-9" id="test1" name="firstInsideContainer">
              <div className="flex  flex-row justify-between container mx-auto mt-12">
                <div className="title flex flex row">
                  <div className="iconn mx-2 mt-1"><FaCircle color="orange" /></div>
                  <div className="det">
                    <p className="edu_title text-xl font-bold text-orange-500">
                      Quaid E Azam Collage Mardan{" "}
                    </p>
                    <p className="edu_text">FSC Got 843/1100 </p>
                  </div>
                </div>
                <div className="year">
                  <p className="py-0 px-3 rounded-full bg-orange-500">
                    2010-2014
                  </p>
                </div>
              </div>

             

              <div className="flex pb-5 flex-row justify-between container mx-auto mt-9">
                <div className="title flex flex row">
                  <div className="iconn mx-2 mt-1"><FaCircle color="orange" /></div>
                  <div className="det">
                    <p className="edu_title text-xl font-bold text-orange-500">
                      Quaid E Azam Collage Mardan{" "}
                    </p>
                    <p className="edu_text">FSC Got 843/1100 </p>
                  </div>
                </div>
                <div className="year">
                  <p className="py-0 px-3 rounded-full bg-orange-500">
                    2010-2014
                  </p>
                </div>
              </div>
            </div>
            <div className="second py-3 md:py-24" name="secondInsideContainer">
              <div className="flex pb-5 flex-row justify-between container mx-auto mt-9">
                <div className="title flex flex row">
                  <div className="iconn mx-2 mt-1"><FaCircle color="orange" /></div>
                  <div className="det">
                    <p className="edu_title text-xl font-bold text-orange-500">
                      Full Stack Web Developer
                    </p>
                    <p className="edu_text">Part Time Freelancer </p>
                  </div>
                </div>
                <div className="year">
                  <p className="py-0 px-3 rounded-full bg-orange-500">
                    2020 - Till
                  </p>
                </div>
              </div>
              <div className="desc ">
                <p className="text-sm px-1 md:px-5 ">
                  I am a CS student , working as part time freelancer. I have
                  worked on many projects in web development. I mostly love to
                  work in NODE.JS , EJS/HBS , MONGODB . I had worked with
                  different client through fiverr and had got enough
                  oppertunites to work on huge projects. that included Finetech
                  , online loan applications , blogging , ecommerce , and many
                  more.
                </p>
                <div className="buttons mt-3 px-5 md:mt-9">
                  <button className="bg-orange-500 rounded-full py-1 px-5 border-2 border-orange-800 text-black font-bold w-full mt-2 md:w-40 ">
                    <span className="flex flex-row">
                      Readmore{" "}
                      <AiOutlineArrowRight size={18} className="mt-1 ml-3" />
                    </span>
                  </button>
                  <button className="bg-black text-white mt-2  py-1 rounded-full border-2 border-white px-5 w-full md:w-40 font-bold ">
                    Hire Me
                  </button>
                </div>
              </div>
            </div>

            <div className="third" name="thirdInsideContainer">
              <p className="text-center text-white mb-4 text-sm mt-3 font-bold">
                Skills
              </p>
              <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2">
                <div className="left ">
                  <div className=" text-white ">
                    <div className="flex flex-row justify-between">
                      <span>HTML</span>
                      <span>95%</span>
                    </div>
                    <div className="pb-container">
                      <div className="pb-itself95"></div>
                    </div>
                  </div>

                  <div className=" text-white  mt-4">
                    <div className="flex flex-row justify-between">
                      <span>CSS</span>
                      <span>90%</span>
                    </div>
                    <div className="pb-container">
                      <div className="pb-itself90"></div>
                    </div>
                  </div>

                  <div className=" text-white  mt-4">
                    <div className="flex flex-row justify-between">
                      <span>JAVASCRIPT</span>
                      <span>85%</span>
                    </div>
                    <div className="pb-container">
                      <div className="pb-itself85"></div>
                    </div>
                  </div>

                  <div className=" text-white  mt-4">
                    <div className="flex flex-row justify-between">
                      <span>BOOTSTRAP</span>
                      <span>100%</span>
                    </div>
                    <div className="pb-container">
                      <div className="pb-itself100"></div>
                    </div>
                  </div>

                  <div className=" text-white  mt-4">
                    <div className="flex flex-row justify-between">
                      <span>TAILWIND CSS</span>
                      <span>85%</span>
                    </div>
                    <div className="pb-container">
                      <div className="pb-itself85"></div>
                    </div>
                  </div>
                </div>

                {/* right */}
                <div className="right md:ml-5">
                  <div className=" text-white mt-3">
                    <div className="flex flex-row justify-between">
                      <span>NODEJS</span>
                      <span>85%</span>
                    </div>
                    <div className="pb-container">
                      <div className="pb-itself85"></div>
                    </div>
                  </div>
                  <div className=" text-white  mt-4">
                    <div className="flex flex-row justify-between">
                      <span>AXIOS / AJAX</span>
                      <span>95%</span>
                    </div>
                    <div className="pb-container">
                      <div className="pb-itself95"></div>
                    </div>
                  </div>

                  <div className=" text-white  mt-4">
                    <div className="flex flex-row justify-between">
                      <span>JQUERY</span>
                      <span>85%</span>
                    </div>
                    <div className="pb-container">
                      <div className="pb-itself85"></div>
                    </div>
                  </div>

                  <div className=" text-white  mt-4">
                    <div className="flex flex-row justify-between">
                      <span>EJS / HBS</span>
                      <span>95%</span>
                    </div>
                    <div className="pb-container">
                      <div className="pb-itself95"></div>
                    </div>
                  </div>

                  <div className=" text-white  mt-4">
                    <div className="flex flex-row justify-between">
                      <span>MONGODB / MYSQL</span>
                      <span>90%</span>
                    </div>
                    <div className="pb-container">
                      <div className="pb-itself90"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="fourth py-12 md:py-20" name="fourthInsideContainer">
              <p className="text-center my-3 font-bold text-white ">Some of my Projects</p>
              <div className="inner  flex flex-row gap-2">
              <div className="card rounded-md border-gray-300">
                <div className="img w-60 ">
                  <a href="https://specscamp.com/index.php">
                    <img src="specscamp.png" alt="" />
                  </a>
                </div>
                <div className="card-title">
                  <p className="text-white text-center">
                    <a href="https://specscamp.com/index.php">specscamp</a>
                  </p>
                </div>
              </div>


              <div className="card rounded-md border-gray-300">
                <div className="img w-60 ">
                  <a href="https://web.soozmarket.com/">
                    <img src="sooz.png" alt="" />
                  </a>
                </div>
                <div className="card-title">
                  <p className="text-white text-center">
                    <a href="https://web.soozmarket.com/">SuuzMarket</a>
                  </p>
                </div>
              </div>

              <div className="card rounded-md border-gray-300">
                <div className="img w-60 ">
                  <a href="https://invest.specscamp.com/index.php">
                    <img src="invest.png" alt="" />
                  </a>
                </div>
                <div className="card-title">
                  <p className="text-white text-center">
                    <a href="https://specscamp.com/index.php">Invest</a>
                  </p>
                </div>
              </div>
              </div>
            

              <div className="second py-3 md:py-24" name="fifthInsideContainer">
                <p className="text-center my-3 font-bold text-white ">MY Interests</p>
                <div className="inner_fifth">
                  <ul className="pl-2 md:px-5 ">
                    <li className="flex flex-row"><FaCircle color="orange" className="mt-1"/><span className="ml-2">Coding</span></li>


                    <li className="flex flex-row mt-2"><FaCircle color="orange" className="mt-1"/><span className="ml-2">Cricket</span></li>

                    <li className="flex flex-row mt-2"><FaCircle color="orange" className="mt-1"/><span className="ml-2">Outings</span></li>
                    <li className="flex flex-row mt-2"><FaCircle color="orange" className="mt-1"/><span className="ml-2">Youtubing</span></li>
                    <li className="flex flex-row mt-2"><FaCircle color="orange" className="mt-1"/><span className="ml-2">Exploring Tech Realted Things</span></li>
                  </ul>
                </div>
            </div>




            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
