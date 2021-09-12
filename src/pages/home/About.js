import React, { Component } from 'react';
import CardPortfolio from '../../components/CardPortfolio';

export default class About extends Component {
  render() {
    const data = this.props.about
    return (
      <section id="about" className="p-5 text-center justify-content-center d-flex flex-column">
        <h2 className="title mb-5" data-aos="fade-up" data-aos-delay="100">About me</h2>
        <h3 data-aos="fade-up" data-aos-delay="200">{data.name}</h3>
        <h6 className="mb-4" data-aos="fade-up" data-aos-delay="300">{data.role}</h6>
        <p data-aos="fade-up" data-aos-delay="350">{data.about_me}</p>
      </section>
    )
  }
}