import FeedbackItem from "./FeedbackItem"

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) return <h1>No Feedbacks Yet</h1>

  return (
    <div className='feedback-list'>
      {feedback.map((feed) => (
        <FeedbackItem key={feed.id} feed={feed} />
      ))}
    </div>
  )
}

export default FeedbackList
