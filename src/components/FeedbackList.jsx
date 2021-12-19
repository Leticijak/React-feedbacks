import FeedbackItem from "./FeedbackItem"
import PropTypes from "prop-types"

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) return <h1>No Feedbacks Yet</h1>

  return (
    <div className='feedback-list'>
      {feedback.map((feed) => (
        <FeedbackItem key={feed.id} feed={feed} handleDelete={handleDelete} />
      ))}
    </div>
  )
}
FeedbackList.propTypes = {
  feedback: PropTypes.array,
}

export default FeedbackList
