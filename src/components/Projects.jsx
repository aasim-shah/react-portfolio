import React, {useState} from "react";
import { FiDownload } from "react-icons/fi";
import * as Scroll from "react-scroll";
import {
  Link,

  animateScroll as scroll,

} from "react-scroll";

function Projects() {
  const [inUse, setinUse] = useState('first')
  return (
    <>
      <div className="heading my-12 ">
        <p className="font-bold text-center text-white text-xl">Resume</p>
      </div>

      <div className="w-8/12 mx-auto">
        <div className="grid grid-flow-row  text-white grid-cols-1 md:grid-cols-3">
          <div className="sidebar mb-12 md:mt-12 col-span-1 md:col-span-1">
            <div className="ul">
              <ul className="sidebar_ul ">
                <li  className={inUse === 'first' ? 'sidebar_li mt-5 sidebar_li_active' : 'sidebar_li mt-5'}>
                  <Link 
                    to="firstInsideContainer"
                    containerId="containerElement"
                    onClick={() => setinUse('first')}
                  >
                    <span className="flex flex-row">
                      <FiDownload
                        size={22}
                        className="mt-1 mr-3  sidebar_icon"
                        color="white"
                      />
                      <span className="text-xl sidebar_text font-bold">Education</span>
                    </span>
                  </Link>
                </li>

                <li className={inUse === 'second' ? 'sidebar_li mt-5 sidebar_li_active' : 'sidebar_li mt-5'}>
                  <Link
                    to="secondInsideContainer"
                    containerId="containerElement"
                    onClick={() => setinUse('second')}
                  >
                    <span className="flex flex-row">
                      <FiDownload
                        size={22}
                        className="mt-1 mr-3 sidebar_icon"
                        color="white"
                      />
                      <span className="text-xl sidebar_text font-bold">Work History</span>
                    </span>
                  </Link>
                </li>

                <li className={inUse === 'third' ? 'sidebar_li mt-5 sidebar_li_active' : 'sidebar_li mt-5'}>
                  <Link
                    to="secondInsideContainer"
                    containerId="containerElement"
                    onClick={() => setinUse('third')}
                  >
                    <span className="flex flex-row">
                      <FiDownload
                        size={22}
                        className="mt-1 mr-3 sidebar_icon"
                        color="white"
                      />
                      <span className="text-xl sidebar_text font-bold">Programming Skills</span>
                    </span>
                  </Link>
                </li>

                <li className={inUse === 'fourth' ? 'sidebar_li mt-5 sidebar_li_active' : 'sidebar_li mt-5'}>
                  <Link
                    to="secondInsideContainer"
                    containerId="containerElement"
                    onClick={() => setinUse('fourth')}
                  >
                    <span className="flex flex-row">
                      <FiDownload
                        size={22}
                        className="mt-1 mr-3 sidebar_icon"
                        color="white"
                      />
                      <span className="text-xl sidebar_text font-bold">Projects</span>
                    </span>
                  </Link>
                </li>
                
                <li className={inUse === 'fifth' ? 'sidebar_li mt-5 sidebar_li_active' : 'sidebar_li mt-5'}>
                  <Link
                    to="secondInsideContainer"
                    containerId="containerElement"
                    onClick={() => setinUse('fifth')}
                  >
                    <span className="flex flex-row">
                      <FiDownload
                        size={22}
                        className="mt-1 mr-3 sidebar_icon"
                        color="white"
                      />
                      <span className="text-xl sidebar_text font-bold">Intersts</span>
                    </span>
                  </Link>
                </li>

              </ul>
            </div>
          </div>
          <div
            className="mainview h-80 element col-span-1 md:col-span-2"
            id="containerElement"
            style={{ overflowY: "scroll" }}
            
          >
            <div className="first pt-9"  id="test1" name="firstInsideContainer" >
              <div className="flex  flex-row justify-between container mx-auto mt-12">
                <div className="title flex flex row">
                  <div className="iconn mx-2 mt-1">icons</div>
                  <div className="det">
                  <p className="edu_title text-xl font-bold text-orange-500">Quaid E Azam Collage Mardan </p>
                  <p className="edu_text">FSC  Got 843/1100 </p>
                  </div>
                </div>
                <div className="year">
                  <p className="py-0 px-3 rounded-full bg-orange-500">2010-2014</p>
                </div>
              </div>

              <div className="flex  flex-row justify-between container mx-auto mt-9">
                <div className="title flex flex row">
                  <div className="iconn mx-2 mt-1">icons</div>
                  <div className="det">
                  <p className="edu_title text-xl font-bold text-orange-500">Quaid E Azam Collage Mardan </p>
                  <p className="edu_text">FSC  Got 843/1100 </p>
                  </div>
                </div>
                <div className="year">
                  <p className="py-0 px-3 rounded-full bg-orange-500">2010-2014</p>
                </div>
              </div>

              <div className="flex pb-5 flex-row justify-between container mx-auto mt-9">
                <div className="title flex flex row">
                  <div className="iconn mx-2 mt-1">icons</div>
                  <div className="det">
                  <p className="edu_title text-xl font-bold text-orange-500">Quaid E Azam Collage Mardan </p>
                  <p className="edu_text">FSC  Got 843/1100 </p>
                  </div>
                </div>
                <div className="year">
                  <p className="py-0 px-3 rounded-full bg-orange-500">2010-2014</p>
                </div>
              </div>
              
            </div>
            <div className="second" name="secondInsideContainer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              tenetur maiores corporis cupiditate, repellendus quis iste magni
              vero! Aut rem explicabo recusandae minima mollitia ut accusamus
              doloribus ad obcaecati, quisquam illo voluptate debitis veritatis
              similique pariatur accusantium? Rem laudantium impedit saepe
              officiis eligendi doloribus ipsam iure iusto nemo similique aut at
              ut nobis culpa minus beatae praesentium, amet consequatur aperiam
              tenetur ab. Minus quia iure sunt ipsum id. Rerum autem, dolorum
              deleniti dolore molestiae animi ratione enim quasi tempore. Ex
              eaque molestiae dolores quas magni? Eaque beatae, alias suscipit
              non laudantium iure inventore animi repudiandae tenetur voluptas
              maiores autem temporibus, nihil nobis, deleniti deserunt quos et
              ab! Odio temporibus labore perferendis at in adipisci sint magnam
              quod, eius obcaecati vel nobis enim odit eveniet, veniam ab fuga
              dolorum necessitatibus officia dolore molestias. Dolorem animi
              officia pariatur sequi optio odio eligendi mollitia labore quidem
              ea, aperiam beatae rem dolorum repellendus iste magni! Aperiam sit
              magnam, ab sint quisquam vitae, velit, alias vel ex eum dolorum
              dolorem culpa beatae cupiditate esse non id? Ab rerum tempora
              ipsum minus enim distinctio nemo iste adipisci soluta ratione
              omnis doloremque esse, laborum ullam reprehenderit iure ipsa porro
              maiores aliquam fugit officiis vitae beatae laboriosam
              dignissimos?
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
