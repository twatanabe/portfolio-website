import React from 'react'
import PropTypes from 'prop-types'
import 'styles/SiteHeader.css'

const HeaderLinkItem = (props) => {
  const { label, path, history } = props
  const isActive = history.location.pathname === path
  return (
    <div className='header-link-item-container' onClick={() => history.push(path)}>
      <div className={`header-link-item-content${isActive ? '--active' : ''}`}>{label}</div>
    </div>
  )
}

const HeaderLinks = ({ headerLinks, history }) => {
  return (
    <div className='header-links-container'>
      {headerLinks.map((linkItem, index) => <HeaderLinkItem key={`hli_${index}`} {...linkItem} history={history} />)}
    </div>
  )
}

const SiteHeader = ({ history, headerLinks = [] }) => {
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
