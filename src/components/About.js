import React from 'react'
import { Link } from "react-router-dom";
import hero from "../Images/hero.jpg";
import "../styles/About.css"


function About() {
  return (
   <>
     <div className="home">
           <div className="content">
             <p>WELCOME TO</p>
             <h1>E-Commerce</h1>
             <p className="para">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
               veritatis fugiat, natus culpa nihil tenetur.
             </p>
             <Link className="btn1">SHOP NOW</Link>
           </div>
           <div className="img">
             <img src={hero} alt="" />
           </div>
         </div>
   </>
  )
}

export default About
