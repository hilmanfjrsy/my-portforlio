import React, { Component } from 'react';

export default class CardSkills extends Component {
    render() {
        const item = this.props.item
        const randomNumber = Math.floor(Math.random() * 6) * 100
        return (
            <div className="card-skill" data-aos="fade-up" data-aos-delay={randomNumber}>
                <div className="icon-skill" style={{ backgroundColor: item.color }}>
                    <i className={item.icon}></i>
                </div>
                <h3 className="mt-2 mb-3" style={{ color: item.color }}>{item.title}</h3>
                {item.skill.map((skill,index) => <p key={index}>{skill}</p>)}
            </div>
        )
    }
}