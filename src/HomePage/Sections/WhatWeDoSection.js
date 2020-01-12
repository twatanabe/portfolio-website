import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'components/Button'
import Header from 'components/Header'
import { addTargetRef } from 'utils/AutoScroll'
import siteData from 'siteData'
import './WhatWeDoSection.css'

const { sections } = siteData
const whatWeDoSection = sections.find(section => section.id === 'whatWeDo') || { data: [] }

const ListRow = ({ row = [] }) => {
  return (
    <div className='row'>
      {
        row.map((item, index) => <ListItem key={`lir_${index}`} {...item} />)
      }
    </div>
  )
}

// has icon, sub header, and paragraph text
const ListItem = (props) => {
  const { icon, headerLabel, bodyText } = props
  return (
    <div className='list-item' style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: 20 }}>
        <div
          // FIXME: revisit for tablet 
          style={{
            borderRadius: '50%',
            fontSize: 20,
            backgroundColor: 'white',
            display: 'flex',
            alignSelf: 'flex-start',
            padding: 5,
            marginTop: 10,
            marginRight: 20
          }}>
          <div style={{ color: '#b74e91' }}>
            <FontAwesomeIcon icon={`${icon}`} />
          </div>
        </div>
        <div>
          <div>
            <Header priority='3'>{headerLabel}</Header>
          </div>
          <div>
            <p>{bodyText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const WhatWeDoSection = ({ onClick }) => {
  return (
    <div ref={(ref) => addTargetRef({ ref, id: 'whatWeDoSection' })} className='what-we-do-container'>
      <Header priority='2'>What we do</Header>
      <p>
        Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.
      </p>
      <div className='what-we-do-content-container'>
        {whatWeDoSection.data.map((rowItem, index) => {
          return (
            <ListRow key={`lr_${index}`} {...rowItem} />
          )
        })}
      </div>
      <Button onClick={onClick} label='Learn More' />
    </div>
  )
}

export default WhatWeDoSection
