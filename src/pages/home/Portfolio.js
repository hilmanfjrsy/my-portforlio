import React, { Component } from 'react';
import CardPortfolio from '../../components/CardPortfolio';

export default class Portfolio extends Component {
  render() {
    const data = this.props.portfolio
    return (
      <section id="portfolio" className="justify-content-center p-4 d-flex flex-column">
        <h2 data-aos="fade-up" className="title mb-5 text-center">Portfolio</h2>
        <div className="d-flex flex-row justify-content-evenly align-items-center">
          {data.map((item, index) => <CardPortfolio item={item} key={index} />)}
        </div>
      </section>
    )
  }
}