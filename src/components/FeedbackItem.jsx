import Card from "./shared/Card"

function FeedbackItem({ feed }) {
  return (
    <Card>
      <div className='num-display'>{feed.rating}</div>
      <div className='text-display'>{feed.text}</div>
    </Card>
  )
}

export default FeedbackItem
