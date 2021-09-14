import React, { Component } from 'react';
import CardExperience from '../../components/CardExperience';

export default class Education extends Component {
  render() {
    const data = this.props.education
    return (
      <section id="education" className="p-4 d-flex flex-column justify-content-center">
        <h2 data-aos="fade-up" className="title mb-5">Education</h2>
        {data.map((item, index) => <CardExperience data={item} key={index} />)}
      </section >
    )
  }
}