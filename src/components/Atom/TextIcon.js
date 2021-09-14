import React, { Component } from 'react';

export default class TextIcon extends Component {
    render() {
        const item = this.props.item
        return (
            <div className="d-flex flex-row align-items-center mt-2 mb-3">
                <i className={this.props.icon} style={{color:this.props.colorIcon}}></i>
                <p className="mb-0" style={{marginLeft:10}}>{item}</p>
            </div>
        )
    }
}