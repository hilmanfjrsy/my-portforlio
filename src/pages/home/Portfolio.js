import React, { Component } from 'react';
import CardPortfolio from '../../components/CardPortfolio';

const data = {
  "portfolio": [
    {
      "total": 1,
      "color": "#F9627D",
      "icon": "fas fa-globe",
      "platform": "Website"
    },
    {
      "total": 3,
      "color": "#689f38",
      "icon": "fab fa-google-play",
      "platform": "Android"
    },
    {
      "total": 3,
      "color": "#1774F1",
      "icon": "fab fa-app-store-ios",
      "platform": "IOS"
    },
    {
      "total": 5,
      "color": "#69747C",
      "icon": "fas fa-network-wired",
      "platform": "Apps Not Published"
    }
  ]
}
export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio" className="justify-content-center p-4 d-flex flex-column">
        <h2 data-aos="fade-up" className="title mb-5 text-center">Portfolio</h2>
        <div className="d-flex flex-row justify-content-evenly align-items-center">
          {data.portfolio.map((item, index) => <CardPortfolio item={item} key={index} />)}
        </div>
      </section>
    )
  }
}