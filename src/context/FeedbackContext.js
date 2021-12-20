import React, { createContext, useState } from "react"
import feedbackData from "../data/feedbackData"
import { v4 as uuidv4 } from "uuid"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  //data
  const [feedback, setFeedback] = useState(feedbackData)
  //data
  //...................//
  //functions

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((feed) => feed.id !== id))
  }
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  //functions

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
