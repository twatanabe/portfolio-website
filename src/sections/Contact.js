import React from 'react'
import { addTargetRef } from 'utils/AutoScroll'
import 'styles/Contact.css'

const Contact = () => {
  return (
    <section
      ref={(ref) => addTargetRef({ ref, id: "contact" })}
      className="contact-section-container"
    >
      <h2>Let's get in touch!</h2>
      <p>
        Wanna say hi? I'm always excited for new opportunities :)
      </p>
      <a href="mailto:hi@takumiwatanabe.me" className="link">hi@takumiwatanabe.me</a>
    </section>
  );
}

Contact.propTypes = {}

export default Contact
