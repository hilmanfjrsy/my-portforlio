import React, { Component } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

import SideBar from '../components/Sidebar';
import About from './home/About';
import Awards from './home/Awards';
import Experience from './home/Experience';
import Hero from './home/Hero';
import Interest from './home/Interest';
import Skills from './home/Skills';

import data from './data.json'
import Portfolio from './home/Portfolio';

export default class App extends Component {

  componentDidMount() {
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
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration: 1500,
      easing: "ease-in-out-back",
      once: true
    });
  }

  render() {
    return (
      <>
        <SideBar >
          <Hero data={data.about} />
          <About about={data.about} />
          <Portfolio />
          <Experience experience={data.experience} />
          <Skills skills={data.skills} />
          <Interest interest={data.interest} />
          <Awards awards={data.awards} />
        </SideBar>
      </>
    )
  }
}