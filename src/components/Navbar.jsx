import React , {useState} from 'react'
import { AiFillHome , AiOutlineUser } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { RiHeartsFill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
function Header() {
  const [tabSelected, settabSelected] = useState('#home');

  return (
        <div className="navbar">
          <ul className="navUl">
            <li className={tabSelected  === "#home" ? "iconActive" : "icon"}>
              <a href="#home"  ><AiFillHome onClick={()=>{settabSelected('#home')}} /></a>
            </li>
            <li className={tabSelected  === "#profile" ? "iconActive" : "icon"}>
              <a href="#profile" ><AiOutlineUser onClick={()=>{settabSelected('#profile')}}/></a>
            </li>
            <li className={tabSelected  === "#projects" ? "iconActive" : "icon"}>
              <a href="#projects" className=""><FaTasks onClick={()=>{settabSelected('#projects')}}/></a>
            </li>
            <li className={tabSelected  === "#testomonials" ? "iconActive" : "icon"}>
              <a href="#testomonials" className=""><RiHeartsFill onClick={()=>{settabSelected('#testomonials')}}/></a>
            </li>
            <li className={tabSelected  === "#contact" ? "iconActive" : "icon"}>
              <a href="#contact" className=""><MdMessage onClick={()=>{settabSelected('#contact')}}/></a>
            </li>
          </ul>
        </div>
  )
}

export default Header