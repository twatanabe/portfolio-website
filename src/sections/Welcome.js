import { React, Fragment } from 'react'
import Header from 'components/Header'
import Image from 'components/Image'
import { addTargetRef } from 'utils/AutoScroll'
import 'styles/Welcome.css'

const Welcome = () => {
  return (
    <section ref={ref => addTargetRef({ ref, id: 'welcome' })} className='welcome-container'>
      <div className="welcome-content">
        <div className="me">
          <Image filename="flying-spaghetti-monster" />
        </div>
        <Header children={<Fragment>Hi, my <br/>name is <strong>Takumi</strong><span className='dot'>.</span></Fragment>} />
        <p>
          I'm an <strong>independent software engineer</strong> from California.
        </p>
        <span class="page-header__scroll" aria-hidden="true"><span>
          <span>S</span> <span>c</span> <span>r</span> <span>o</span> <span>l</span> <span>l</span> </span>
        </span>
      </div>
    </section>
  )
}

Welcome.propTypes = {}

export default Welcome
