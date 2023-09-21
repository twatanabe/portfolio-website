import React from 'react'
import PropTypes from 'prop-types'
import { addTargetRef } from 'utils/AutoScroll'
import 'styles/About.css'

const AboutItem = ({header, description }) => {
  return (
    <div className="sub-about-wrapper">
      <div className="sub-about-container">
        <h3 className="about-header">
          {header}
        </h3>
        <p>{description}</p>
      </div>

    </div>
  )
}

const About = ({ section = [] }) => {
  return (
    <section
      ref={(ref) => addTargetRef({ ref, id: "about" })}
      className="about-container"
    >
      {section.data.map((sectionProp, index) => <AboutItem key={`ssi_${index}`} {...sectionProp} />)}
    </section>
  );
}

About.propTypes = {
  onClick: PropTypes.func.isRequired,
  section: PropTypes.object.isRequired
}

export default About
