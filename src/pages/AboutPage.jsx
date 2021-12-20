import React from "react"
import Card from "../components/shared/Card"
import { Link } from "react-router-dom"
import Layout from "../components/Layout"

const AboutPage = () => {
  return (
    <Layout>
      <Card>
        <div className='about'>
          <h1>About this project</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            aspernatur aperiam sed esse sequi? Corporis quaerat, enim,
            dignissimos sint et placeat impedit aperiam veniam maiores deserunt,
            possimus laudantium? Quod asperiores fugit, repellendus, voluptatem
            amet illo molestias eaque explicabo, reprehenderit error magni
            quidem. Dolorum ducimus iste voluptatibus commodi, laboriosam
            suscipit! Rem totam blanditiis sequi cupiditate distinctio porro
            nemo exercitationem inventore fuga.
          </p>
          <Link to='/'>Back to Home</Link>
        </div>
      </Card>
    </Layout>
  )
}

export default AboutPage
