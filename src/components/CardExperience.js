import React, { Component } from 'react';

export default class CardExperience extends Component {
  render() {
    const data = this.props.data
    return (
      <div className="d-flex flex-row justify-content-between align-items-center mt-3">
        <div>
          <h4 className="sub-title">{data.title}</h4>
          <h5 className="sub-title-secondary">{data.location}</h5>
          <p className="description mt-4">{data.description}</p>
        </div>
        <p className="color-primary">{data.date}</p>
      </div>
    )
  }
}