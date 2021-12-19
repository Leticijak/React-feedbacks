import FeedbackItem from "./FeedbackItem"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) return <h1>No Feedbacks Yet</h1>
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((feed) => (
          <motion.div
            key={feed.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={feed.id}
              feed={feed}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((feed) => (
  //       <FeedbackItem key={feed.id} feed={feed} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // )
}
FeedbackList.propTypes = {
  feedback: PropTypes.array,
}

export default FeedbackList
