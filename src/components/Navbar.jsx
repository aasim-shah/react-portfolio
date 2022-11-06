import React , {useState} from 'react'
import { AiFillHome , AiOutlineUser } from "react-icons/ai";
import { RiHeartsFill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
function Header() {
  const [tabSelected, settabSelected] = useState('#home');

  return (
        <div className="navbar">
          <ul className="navUl">
            <li
            onClick={()=>{settabSelected('#home')}}
            className={tabSelected  === "#home" ? "iconActive" : "icon"}>
              <a href="#home"  ><AiFillHome  /></a>
            </li>
            <li 
            onClick={()=>{settabSelected('#profile')}}
            className={tabSelected  === "#profile" ? "iconActive" : "icon"}>
              <a href="#profile" ><AiOutlineUser /></a>
            </li>
            <li
            onClick={()=>{settabSelected('#testomonials')}}
            className={tabSelected  === "#testomonials" ? "iconActive" : "icon"}>
              <a href="#testomonials" className=""><RiHeartsFill /></a>
            </li>
            <li
            onClick={()=>{settabSelected('#contact')}}
            className={tabSelected  === "#contact" ? "iconActive" : "icon"}>
              <a href="#contact" className=""><MdMessage /></a>
            </li>
          </ul>
        </div>
  )
}

export default Header