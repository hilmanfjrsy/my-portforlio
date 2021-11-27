import React, { Component } from 'react';
import CardPortfolio from '../../components/CardPortfolio';
import academy from '../../assets/Untitled-1.png'
import rakata from '../../assets/Untitled-2.png'
import wakool from '../../assets/Untitled-3.png'
import lms from '../../assets/Untitled-4.png'
import lazuardi from '../../assets/Untitled-5.png'

export default class Portfolio extends Component {
  render() {
    const data = this.props.portfolio
    return (
      <>
      <section id="portfolio" className="justify-content-center p-4 d-flex flex-column">
        <h2 data-aos="fade-up" className="title mb-5 text-center">Portfolio</h2>
        <div className="d-flex flex-row justify-content-evenly align-items-center">
          {data.map((item, index) => <CardPortfolio item={item} key={index} />)}
        </div>
      </section>
      <div className="container-portfolio d-flex row">
        <img src={rakata} />
        <img src={academy} />
        <img src={wakool} />
        <img src={lms} />
        <img src={lazuardi} />
      </div>
      </>
    )
  }
}