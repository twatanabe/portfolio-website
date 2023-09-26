import React from 'react'
import PropTypes from 'prop-types'
import Image from 'components/Image'
import { addTargetRef } from 'utils/AutoScroll'
import 'styles/Profile.css'

const Profile = ({containerClassName = 'profile-container'}) => {
  return (
    <section
      ref={(ref) => addTargetRef({ ref, id: "profile" })}
      className={`${containerClassName}`}
    >
      {/* <div className="profile-image">
        <Image filename="flying-spaghetti-monster" />
      </div> */}
      <h1 className="profile-header">Takumi Watanabe</h1>
      <p className="description">
        I provide technical solutions for web, cloud, and automation.
      </p>
    </section>
  );
}

Profile.propTypes = {}

export default Profile
