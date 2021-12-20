import React from "react"
import Layout from "../components/Layout"
import FeedbackStats from "../components/FeedbackStats"
import FeedbackForm from "../components/FeedbackForm"
import FeedbackList from "../components/FeedbackList"
import { useState } from "react"
import feedbackData from "../data/feedbackData"
import { v4 as uuidv4 } from "uuid"
import AboutIconLink from "../components/AboutIconLink"
const HomePage = () => {
  const [feedback, setFeedback] = useState(feedbackData)

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((feed) => feed.id !== id))
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }
  return (
    <Layout>
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      <AboutIconLink />
    </Layout>
  )
}

export default HomePage
