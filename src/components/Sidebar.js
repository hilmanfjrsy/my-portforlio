import React, { Component, useEffect } from 'react';
import avatar from '../assets/profile.jpg'
import './style.css'
import {
  Link,
  useLocation
} from "react-router-dom";

export default function SideBar({ children }) {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash
    // Check if there is a hash and if an element with that id exists
    const el = hash && document.getElementById(hash.substr(1))
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
    
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li");
    window.onscroll = () => {
      var current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id");
          // console.log('CURRENT', current)
        }
      });
      // console.log('NAV', navLi)

      navLi.forEach((li) => {
        li.classList.remove("active");
        // console.log("MASUK", li.classList)
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });
    };
  }, [location])

  return (
    <div className="d-flex flex-row">
      <div className="d-flex flex-column p-3 sidebar">
        <div className="profile p-2 rounded-circle" data-aos="zoom-in" data-aos-delay="100">
          <img src={avatar} alt="" className="img-fluid rounded-circle" />
        </div>

        <nav className="nav-menu">
          <ul>
            <li className="home active" ><Link to="#home"><span>Home</span></Link></li>
            <li className="experience" ><Link to="#experience">Experience</Link></li>
            <li className="education" ><Link to="#education">Education</Link></li>
            <li className="skill"><Link to="#skill">Skills</Link></li>
            <li className="interest"><Link to="#interest">Interest</Link></li>
            <li className="awards"><Link to="#awards">Awards</Link></li>
          </ul>
        </nav>
      </div>
      <div className="d-flex flex-column w-100 main">
        {children}
      </div>
    </div>
  )
}