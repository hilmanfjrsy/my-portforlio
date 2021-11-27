import React, { Component } from 'react';
import TextIcon from '../../components/Atom/TextIcon';

export default class Awards extends Component {
  render() {
    const data = this.props.awards
    return (
      <section id="awards" className="p-4 justify-content-center d-flex flex-column">
        <h2 className="title mb-5 text-center">Courses & Certifications</h2>
        <Timeline data={data} />
      </section >
    )
  }
}