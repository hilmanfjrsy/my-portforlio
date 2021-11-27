import React, { Component } from 'react';
import CardSkills from '../../components/CardSkills'

export default class Skills extends Component {
    render() {
        const data = this.props.skills
        return (
            <section id="skill" className="p-4 justify-content-center d-flex flex-column text-center">
                <h2 className="title" data-aos="fade-up">Skills</h2>
                <div className="d-flex row justify-content-evenly">
                    {data.map((item, index) => <CardSkills item={item} key={index} />)}
                </div>
            </section>
        )
    }
}