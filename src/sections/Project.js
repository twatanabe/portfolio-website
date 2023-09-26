import React from 'react'
import PropTypes from 'prop-types'
import { addTargetRef, onTargetScroll } from 'utils/AutoScroll'
import Arrow from 'components/Arrow'
import 'styles/Project.css'

const ProjectItem = ({ title, description, tools = [], year, link }) => {
  return (
    <div className="sub-project-wrapper">
      <div className="sub-project-container bg-ease">
        <h3 className="project-name color-ease">
          <a href={`${link}`} target="_blank">
            {title}
            <Arrow />
          </a>
        </h3>
        <p>{description}</p>
        <div className="project-used">
          {/* {items.map((item) => <Item {...item} />)} */}
          {tools.map((tool, id) => (
            <span key={id} className="project-used-tool">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const Project = ({ section = [] }) => {
  return (
    <section onScroll={onTargetScroll} ref={(ref) => addTargetRef({ ref, id: 'projects' })} className='project-container'>
      <h2>Projects</h2>
      {section.data.map((sectionProp, index) => <ProjectItem key={`ssi_${index}`} {...sectionProp} />)}
    </section>
  )
}

Project.propTypes = {
  section: PropTypes.object.isRequired
}

export default Project
