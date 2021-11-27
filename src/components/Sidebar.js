import React, { Component, useEffect } from 'react';
import avatar from '../assets/profile.jpeg'
import './style.css'

export default class SideBar extends Component {
  render() {
    return (
      <div className="d-flex flex-row">
        <div className="d-flex flex-column p-3 sidebar">
          <div className="profile p-2 rounded-circle" data-aos="zoom-in" data-aos-delay="100">
            <img src={avatar} alt="" className="img-fluid rounded-circle" />
          </div>

          <nav class="nav-menu">
            <ul>
              <li className="hero active" data-aos="fade-up" data-aos-delay="100"><a href="#"><span>Home</span></a></li>
              <li className="about" data-aos="fade-up" data-aos-delay="100"><a href="#about">About</a></li>
              <li className="portfolio" data-aos="fade-up" data-aos-delay="100"><a href="#portfolio">Portfolio</a></li>
              <li className="experience" data-aos="fade-up" data-aos-delay="200"><a href="#experience">Experience</a></li>
              <li className="skill" data-aos="fade-up" data-aos-delay="300"><a href="#skill">Skills</a></li>
              <li className="interest" data-aos="fade-up" data-aos-delay="400"><a href="#interest">Interest</a></li>
              <li className="awards" data-aos="fade-up" data-aos-delay="500"><a href="#awards">Awards</a></li>
            </ul>
          </nav>
        </div>
        <div className="d-flex flex-column w-100 main">
          {this.props.children}
        </div>
      </div>
    )
  }
}