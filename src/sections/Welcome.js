import { React, Fragment } from 'react'
import Header from 'components/Header'
import { addTargetRef, onControlScroll } from 'utils/AutoScroll'
import 'styles/Welcome.css'


const Welcome = () => {
  return (
    <div ref={ref => addTargetRef({ ref, id: 'welcome' })} className='welcome-container'>
      <Header children={<Fragment>Hi, my <br/>name is <strong>Takumi</strong><span className='dot'>.</span></Fragment>} />
      <p>
        I'm an <strong>independent software engineer</strong> from California.
      </p>
      {/* <Button onClick={() => onControlScroll('experience')} label='Learn More' /> */}
      <span class="page-header__scroll" aria-hidden="true"><span>
        <span>S</span> <span>c</span> <span>r</span> <span>o</span> <span>l</span> <span>l</span> </span>
      </span>
    </div>
  )
}

Welcome.propTypes = {}

export default Welcome
