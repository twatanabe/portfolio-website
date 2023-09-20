import React from 'react'
import PropTypes from 'prop-types'
import 'styles/Experience.css'
import { addTargetRef, onTargetScroll } from 'utils/AutoScroll'

const SubSectionItem = ({ headerLabel, bodyText, onClick, imageFile }) => {
  return (
    <div className='sub-section-wrapper'>
      <div className='sub-section-container'>
        <header className="item-1">2019 — 2023</header>
        <div className="item-2">
          <h3><a class='inline-flex'>Principal Software Engineer - BlackBerry</a></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul>
            <li>Python</li>
          </ul>
        </div>
      </div>
      {/* <Image imgStyle={{ borderRadius: 0 }} filename={imageFile} />
      <div className='sub-section-text-content'>
        <Header priority='2'>{headerLabel}</Header>
        <p>{bodyText}</p>
        <div><Button onClick={onClick} label='Learn More' /></div>
      </div> */}
    </div>
  )
}

const Experience = ({ onClick = () => { }, section = [] }) => {
  return (
    <div onScroll={onTargetScroll} ref={(ref) => addTargetRef({ ref, id: 'experience' })} className='experience-container'>
      {section.data.map((sectionProp, index) => <SubSectionItem key={`ssi_${index}`} {...sectionProp} onClick={onClick} />)}
    </div>
  )
}

Experience.propTypes = {
  onClick: PropTypes.func,
  section: PropTypes.object
}


export default Experience
