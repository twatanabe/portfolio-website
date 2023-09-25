import React from 'react'
import 'styles/SiteHeader.css'

const SiteHeader = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logo">
          <a href="https://takumiwatanabe.me" className="link">
            TW.
          </a>
        </div>
      </div>
    </div>
  );
}

SiteHeader.propTypes = {
}

export default SiteHeader
