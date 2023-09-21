import React from 'react'
import { addTargetRef } from 'utils/AutoScroll'
import 'styles/Contact.css'

// const Social = (
//   <div className='contact-section-stats-container-item'>
//     Social
//     <p>
//       <span className='contact-section-icon-container'>
//         <FontAwesomeIcon icon={['fab', 'twitter']} />
//       </span>
//       <span className='contact-section-icon-container'>
//         <FontAwesomeIcon icon={['fab', 'facebook-f']} />
//       </span>
//       <span className='contact-section-icon-container'>
//         <FontAwesomeIcon icon={['fab', 'github']} />
//       </span>
//       <span className='contact-section-icon-container'>
//         <FontAwesomeIcon icon={['fab', 'instagram']} />
//       </span>
//       <span className='contact-section-icon-container'>
//         <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
//       </span>
//     </p>
//   </div>
// )

const Contact = () => {
  return (
    <section
      ref={(ref) => addTargetRef({ ref, id: "contact" })}
      className="contact-section-container"
    >
      <p>
        Wanna say hi? I'm always excited for new opportunities :)
      </p>
      {/* <Button label="Say Hi" /> <p>or</p> */}
      <a href="mailto:hi@takumiwatanabe.me" className="link">hi@takumiwatanabe.me</a>
    </section>
  );
}

Contact.propTypes = {}

export default Contact
