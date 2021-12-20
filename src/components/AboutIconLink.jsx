import React from "react"
import { FaQuestion } from "react-icons/fa"
import { Link } from "react-router-dom"
const AboutIconLink = () => {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <FaQuestion size='2em' color='white' />
      </Link>
    </div>
  )
}

export default AboutIconLink
