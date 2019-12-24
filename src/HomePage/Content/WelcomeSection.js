import React from 'react'
import Button from '../../Button'
import './WelcomeSection.css'

const DottedLink = ({ text, href }) =>
  <span
    style={{ borderBottom: 'dotted 1px rgba(255, 255, 255, 0.35)' }}
    onClick={() => window.open(href, '_blank')}
  >
    {text}
  </span>

const WelcomeSection = () => {
  return (
    <div className='welcome-section-container'>
      <div>
        <h1>Hyperspace</h1>
        <p>
          Just another fine responsive site template designed by <DottedLink text='HTML5 UP' href={'http://html5up.net/'} /><br />
          &nbsp;and released for free under the <DottedLink text='Creative Commons' href={'http://html5up.net/license'} />.
        </p>
      </div>
      <div>
        <Button label='Learn More' />
      </div>
    </div>
  )
}

export default WelcomeSection