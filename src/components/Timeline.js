import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class Timeline extends Component {
  render() {
    return (
      <VerticalTimeline animate={true}>
        {this.props.data.map((item, index) => {
          return (
            // <div data-aos="fade-up">
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work mt-4"
                date={item.date}
                iconStyle={{ background: 'rgb(33, 150, 243)', backgroundColor: '#fff', color: item.color, fontSize: 25, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                icon={<i class={item.icon}></i>}
              >
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h5 className="vertical-timeline-element-subtitle">{item.location}</h5>
                <p dangerouslySetInnerHTML={{__html:item.description}}>
                  {/* {item.description} */}
                </p>
              </VerticalTimelineElement>
            // </div>
          )
        })}
      </VerticalTimeline>
    )
  }
}