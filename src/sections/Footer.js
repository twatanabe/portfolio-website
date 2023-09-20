import React from 'react'
import PropTypes from 'prop-types'
import DottedLink from '../components/DottedLink'
import 'styles/Footer.css'

const Footer = ({ style = {} }) => {
  return (
    <div style={style} className='footer-container'>
      <div className='footer-container-content'>
        <span style={{ borderRight: '1px solid rgba(255, 255, 255, 0.15)', paddingLeft: 20, marginRight: 20 }} />
      </div>
    </div>
  )
}

Footer.propTypes = {
  style: PropTypes.object
}

export default Footer
