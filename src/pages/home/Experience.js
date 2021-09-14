import React, { Component } from 'react';
import CardExperience from '../../components/CardExperience';

export default class Experience extends Component {
  render() {
    const data = this.props.experience
    return (
      <section id="experience" className="p-4 d-flex flex-column justify-content-center">
        <h2 data-aos="fade-up" className="title mb-5">Experience</h2>
        {data.map((item, index) => <CardExperience data={item} key={index} />)}
      </section >
    )
  }
}