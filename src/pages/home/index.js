import React, { Component } from 'react';
import SocialIcon from '../../components/Atom/SocialIcon';
import SideBar from '../../components/Sidebar';

export default class Home extends Component {
  render() {
    const data = this.props.data
    return (
      <section id="home" className="d-flex flex-column justify-content-center ">
        <div className="home-container p-5" data-aos="fade-in">
          <h1>{data.name}</h1>
          <div className="d-flex flex-row">
            <h4>{data.phone}</h4>
            <h4 className="email">{data.email}</h4>
          </div>
          <p className="description">{data.about_me}</p>
          <div className="social-media">
            {data.social_media.map((item, index) => <SocialIcon key={index} href={item.url} iconName={item.icon} />)}
          </div>
        </div>
      </section>
    )
  }
}