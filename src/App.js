import { useState } from "react"
import feedbackData from "./data/feedbackData"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

function App() {
  const [feedback, setFeedback] = useState(feedbackData)

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((feed) => feed.id !== id))
  }
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
