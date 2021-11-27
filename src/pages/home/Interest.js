import React, { Component } from 'react';
import CardInterest from '../../components/CardInterest';

export default class Interest extends Component {
    render() {
        const data = this.props.interest
        return (
            <section id="interest" className="p-4 justify-content-center d-flex flex-column">
                <h2 className="title mb-5" data-aos="fade-up">Interests</h2>
                <div className="d-flex row justify-content-evenly align-items-center">
                {data.map((item, index) => <CardInterest item={item} key={index} />)}
                </div>
            </section>
        )
    }
}