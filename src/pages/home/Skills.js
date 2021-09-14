import React, { Component } from 'react';
import TextIcon from '../../components/Atom/TextIcon'

export default class Skills extends Component {
    render() {
        const data = this.props.skills
        return (
            <section id="skill" className="p-4 justify-content-center d-flex flex-column">
                <h2 className="title">Skills</h2>
                <p className="sub-title-secondary" >Programming Languages & Skills</p>
                <div className="d-flex flex-row align-items-start">
                    <div style={{marginRight:50}}>
                        {data.map((item, index) => index % 2 == 0 ? <TextIcon item={item} key={index} icon={"fas fa-check-circle"} colorIcon={'green'} /> : null)}
                    </div>
                    <div>
                        {data.map((item, index) => index % 2 != 0 ? <TextIcon item={item} key={index} icon={"fas fa-check-circle"} colorIcon={'green'} /> : null)}
                    </div>
                </div>
            </section>
        )
    }
}