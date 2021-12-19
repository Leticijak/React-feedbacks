import Card from "./shared/Card"
import PropTypes from "prop-types"
import { FaTimes } from "react-icons/fa"

function FeedbackItem({ feed, handleDelete }) {
  return (
    <Card>
      <div className='num-display'>{feed.rating}</div>
      <button className='close' onClick={() => handleDelete(feed.id)}>
        <FaTimes color='#162b29' size='1.2em' />
      </button>
      <div className='text-display'>{feed.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  feed: PropTypes.object.isRequired,
}

export default FeedbackItem
