import React, { Component } from 'react';
import SocialIcon from '../../components/Atom/SocialIcon';

export default class Hero extends Component {
  render() {
    const data = this.props.data
    return (
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container p-5" data-aos="fade-in">
          <h1 data-aos="fade-up" data-aos-delay="100">{data.name}</h1>
          <p  data-aos="fade-up" data-aos-delay="250">I'm <span>{data.role}</span></p>
          <div className="social-media" data-aos="fade-up" data-aos-delay="350">
            {data.social_media.map((item,index)=><SocialIcon key={index} href={item.url} iconName={item.icon} />)}
          </div>
        </div>
      </section>
    )
  }
}