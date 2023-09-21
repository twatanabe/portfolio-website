import React from 'react'
import PropTypes from 'prop-types'
import 'styles/Footer.css'

const Footer = ({ style = {} }) => {
  return (
    <div style={style} className="footer-container">
      <div className="footer-container-content">
        <p className="site-details">
          Developed in <a href="https://react.dev/">React.js</a> using {" "}
          <a href="https://www.vim.org/">Vim</a> and {" "}
          <a href="https://code.visualstudio.com/">Visual Studio Code</a>.
          <br />
          Deployed with <a href="https://vercel.com/">Vercel</a>.
        </p>
        <p className="watermark">
          © TAKUMI WATANABE <a href="takumiwatanabe.me">TAKUMIWATANABE.ME</a>
        </p>
      </div>
    </div>
  );
}

Footer.propTypes = {
  style: PropTypes.object
}

export default Footer
