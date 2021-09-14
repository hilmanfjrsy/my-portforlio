import React, { Component } from 'react';

import Awards from './home/Awards';
import Experience from './home/Experience';
import Home from './home';
import Interest from './home/Interest';
import Skills from './home/Skills';

import data from './data.json'
import Education from './home/Education';

export default class App extends Component {

  render() {
    return (
      <>
        <Home data={data.about} />
        <Experience experience={data.experience} />
        <Education education={data.education} />
        <Skills skills={data.skills} />
        <Interest interest={data.interest} />
        <Awards awards={data.awards} />
      </>
    )
  }
}