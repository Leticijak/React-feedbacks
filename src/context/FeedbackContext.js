import React, { createContext, useState } from "react"
import feedbackData from "../data/feedbackData"
import { v4 as uuidv4 } from "uuid"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  //data
  const [feedback, setFeedback] = useState(feedbackData)

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })
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

  //update item
  const editFeedback = (feed) => {
    setFeedbackEdit({
      feed,
      edit: true,
    })
  }
  //functions

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
