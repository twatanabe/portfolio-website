import React from 'react'
import PropTypes from 'prop-types'
import Arrow from 'components/Arrow';
import 'styles/Experience.css'
import { addTargetRef, onTargetScroll } from "utils/AutoScroll";

const ExperienceItem = ({title, company, industry, description, date, achievements, tools, link}) => {
  return (
    <div className="sub-experience-wrapper">
      <a href={`${link}`}>
        <div className="sub-experience-container bg-ease">
          <div className="experience-date">
            <header>{date}</header>
          </div>
          <div>
            <h3 className="color-ease">{title} • {company} <Arrow /></h3>
            {/* <p>{industry}</p> */}
            <p>{description}</p>
            <ul>
              {achievements.map((achievement) => (
                <li className="achievement">{achievement}</li>
              ))}
            </ul>
            {tools.map((tool) => (
              <span className="experience-used-item">{tool}</span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}

const Experience = ({ section = [] }) => {
  return (
    <section onScroll={onTargetScroll} ref={(ref) => addTargetRef({ ref, id: 'experience' })} className='experience-container'>
      {section.data.map((sectionProp, index) => <ExperienceItem key={`ssi_${index}`} {...sectionProp} />)}
    </section>
  )
}

Experience.propTypes = {
  onClick: PropTypes.func,
  section: PropTypes.object
}


export default Experience