import Card from "./shared/Card"
import PropTypes from "prop-types"
import { FaTimes, FaEdit } from "react-icons/fa"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackItem({ feed }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
  return (
    <Card>
      <div className='num-display'>{feed.rating}</div>
      <button className='close' onClick={() => deleteFeedback(feed.id)}>
        <FaTimes color='#162b29' size='1.2em' />
      </button>
      <button className='edit'>
        <FaEdit
          color='#b82e29'
          size='1.2em'
          onClick={() => editFeedback(feed)}
        />
      </button>
      <div className='text-display'>{feed.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  feed: PropTypes.object.isRequired,
}

export default FeedbackItem
