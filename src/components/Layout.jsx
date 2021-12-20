import React from "react"
import Header from "./Header"
import { Link } from "react-router-dom"

const Layout = ({ children }) => {
  return (
    <>
      <Link to='/'>
        <Header />
      </Link>
      <div className='container'>{children}</div>
    </>
  )
}

export default Layout
