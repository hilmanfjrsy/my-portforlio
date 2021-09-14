import React, { Component } from 'react';

export default class CardInterest extends Component {
    render() {
        const item = this.props.item
        return (
            <div className="card-interest mt-5">
                <h5>{item.title}</h5>
                <p>{item.interest}</p>
            </div>
        )
    }
}