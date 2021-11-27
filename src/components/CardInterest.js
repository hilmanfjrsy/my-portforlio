import React, { Component } from 'react';

export default class CardInterest extends Component {
    render() {
        const randomNumber = Math.floor(Math.random() * 6) * 100
        const item = this.props.item
        return (
            <div class="flip-card card-interest" data-aos="fade-up" data-aos-delay={randomNumber}>
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <i class={item.icon}></i>
                        <h5>{item.title}</h5>
                    </div>
                    <div class="flip-card-back">
                        <p>{item.interest}</p>
                    </div>
                </div>
            </div>
        )
    }
}