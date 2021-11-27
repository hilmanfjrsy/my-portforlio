import React, { Component } from 'react';
import Timeline from '../../components/Timeline'
import 'react-vertical-timeline-component/style.min.css';

export default class Experience extends Component {
  render() {
    const data = this.props.experience
    return (
      <section id="experience" className="p-4 justify-content-center d-flex flex-column">
        <h2 data-aos="fade-up" className="title mb-5 text-center">Work Experience & Education</h2>
        <Timeline data={data} />
      </section >
    )
  }
}