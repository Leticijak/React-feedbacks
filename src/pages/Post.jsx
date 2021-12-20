import React from "react"
import Layout from "../components/Layout"
import { Navigate, useNavigate } from "react-router-dom"

const Post = () => {
  const status = 200
  const navigate = useNavigate()

  if (status === 404) {
    return <Navigate to='/notfound' />
  }

  const hanClick = () => {
    navigate("/about")
  }
  return (
    <Layout>
      <h1>Post</h1>
      <button className='btn btn-secondary' onClick={hanClick}>
        Click
      </button>
    </Layout>
  )
}

export default Post
