import React, { Component } from 'react';

export default class CardPortfolio extends Component {
  render() {
    const item = this.props.item
    const randomNumber = Math.floor(Math.random() * 6) * 100
    return (
      <div className="card-portfolio text-center" data-aos="fade-up" data-aos-delay={randomNumber}>
        <i className={item.icon} style={{ color: item.color, fontSize: 50 }}></i>
        <h3>{item.total}</h3>
        <p>{item.platform}</p>
      </div>
    )
  }
}