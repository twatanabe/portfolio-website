import React from 'react'
import PropTypes from 'prop-types'
import 'styles/PageContent.css'

const PageContent = ({
  children,
  pageContentContainerClassName = 'page-content-container',
  pageContentClassName = 'page-content',
  ...props
}) => {
  if (children.length) {
    return (
      <div className={`${pageContentContainerClassName}`}>
        <div className={`${pageContentClassName}`}>
          {
            children.map((child, index) => React.cloneElement(child, { key: `pc_${index}`, ...props }))
          }
        </div>
      </div>
    )
  }
  return (
    <div className={`${pageContentContainerClassName}`}>
      <div className={`${pageContentClassName}`}>
        {
          React.cloneElement(children, { ...props })
        }
      </div>
    </div>
  )
}

PageContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  pageContentContainerClassName: PropTypes.string,
  pageContentClassName: PropTypes.string,
  onScroll: PropTypes.func
}

export default PageContent
