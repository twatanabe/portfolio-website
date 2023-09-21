import React from 'react'
import PropTypes from 'prop-types'
import 'styles/SiteHeader.css'

const SiteHeader = () => {
  return (
    <div className='header-container center'>
      <div className='header-content'>

        <div className="logo">
          <a href="https://takumiwatanabe.me" className="link">TW.</a>
        </div>
        <button></button>
      </div>
    </div>
  )
}

SiteHeader.propTypes = {
  history: PropTypes.object.isRequired,
  headerLinks: PropTypes.array
}

export default SiteHeader
