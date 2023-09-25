import React from 'react'
import { addTargetRef } from 'utils/AutoScroll'
import 'styles/About.css'

const About = () => {
  return (
    <section
      ref={(ref) => addTargetRef({ ref, id: "about" })}
      className="about-container"
    >
      <div className="about-wrapper">
        <h2>About</h2>
        <p>
          Back in 2011, I earned my Bachelors in Mathematics. But why Math? Some
          believe it's a dry and boring subject with no job opportunities.
        </p>
        <p>
          Studying Math was an essential milestone for me to build abilities to
          break down complex problems and discover breakthrough solutions.
        </p>
        <p>
          Since then I have earned my Masters in Computer Science, received many
          cloud certifications, and consulted in various enterprise industries
          including Healthcare, Life-Science, and Cybersecurity.
        </p>
        <p>
          If you're interested in working with me, please reach out to{" "}
          <a href="mailto:hi@takumiwatanabe.me" className="link">
            hi@takumiwatanabe.me
          </a>
        </p>
        <p>
          I'm always excited for new opportunities :)
        </p>
      </div>
    </section>
  );
}

About.propTypes = {}

export default About
