import Layout from "../components/Layout"
import FeedbackStats from "../components/FeedbackStats"
import FeedbackForm from "../components/FeedbackForm"
import FeedbackList from "../components/FeedbackList"

import AboutIconLink from "../components/AboutIconLink"
const HomePage = () => {
  return (
    <Layout>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
      <AboutIconLink />
    </Layout>
  )
}

export default HomePage
