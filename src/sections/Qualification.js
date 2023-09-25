import React from 'react'
import PropTypes from 'prop-types'
import { addTargetRef } from 'utils/AutoScroll'
import Image from 'components/Image'
import Arrow from 'components/Arrow'
import 'styles/Qualification.css'

const QualificationItem = ({ imageName, category, title, subtitle, date, link }) => {
  return (
    <div className="sub-qualification-wrapper">
      <div className="sub-qualification-container bg-ease">
        <div className="qualification-image">
          <Image filename={`${imageName}`} />
          {/* {category == "Education" && <SchoolOutlinedIcon />}
          {category == "Certification" && <WorkspacePremiumOutlinedIcon />} */}
        </div>

        <div className="qualification-data">
          <h3 className="qualification-title color-ease">
            <a href={`${link}`}>
              {title} <Arrow />
            </a>
          </h3>
          <span className="qualification-subtitle">{subtitle}</span>
          <span className="qualification-date">{date}</span>
        </div>
      </div>
    </div>
  );
}

const Qualification = ({ section = [] }) => {
  return (
    <section
      ref={(ref) => addTargetRef({ ref, id: "qualification" })}
      className="qualification-container"
    >
      <div className="education-section">
        <h2>Education</h2>
        {section.educations.map((sectionProp, index) => (
          <QualificationItem key={`ssi_${index}`} {...sectionProp} />
        ))}
      </div>
      <div className="certification-section">
        <h2>Certification</h2>
        {section.certifications.map((sectionProp, index) => (
          <QualificationItem key={`ssi_${index}`} {...sectionProp} />
        ))}
      </div>
    </section>
  );
}

Qualification.propTypes = {
  section: PropTypes.object.isRequired
}

export default Qualification
