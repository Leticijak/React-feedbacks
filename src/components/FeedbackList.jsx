import FeedbackItem from "./FeedbackItem"

import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackList() {
  // context
  const { feedback } = useContext(FeedbackContext)

  // context

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
            <FeedbackItem key={feed.id} feed={feed} />
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

export default FeedbackList
