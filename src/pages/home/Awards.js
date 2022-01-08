import React, { Component } from 'react';
import Timeline from '../../components/Timeline'
import 'react-vertical-timeline-component/style.min.css';

export default class Awards extends Component {
  render() {
    const data = this.props.awards
    return (
      <section id="certifications" className="p-4 justify-content-center d-flex flex-column">
        <h2 className="title mb-5 text-center">Courses & Certifications</h2>
        <Timeline data={data} />
      </section >
    )
  }
}