import React, { Component } from 'react';

export default class SocialIcon extends Component{
    render(){
        return <a href={this.props.href} target="_blank"><i className={this.props.iconName}></i></a>
    }
}