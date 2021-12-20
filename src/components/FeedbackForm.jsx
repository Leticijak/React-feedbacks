import React, { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
import { useEffect } from "react"

const FeedbackForm = () => {
  const { addFeedback, feedbackEdit } = useContext(FeedbackContext)
  const [text, setText] = useState("")
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState(10)

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage("Text must be at least 10 characters long")
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      addFeedback(newFeedback)
      setText("")
    }
  }

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.feed.text)
      setRating(feedbackEdit.feed.rating)
    }
  }, [feedbackEdit])

  return (
    <Card>
      <form onSubmit={handleFormSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button version='secondary' type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
