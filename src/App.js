import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
import Post from "./pages/Post"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { FeedbackProvider } from "./context/FeedbackContext"

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/post/*' element={<Post />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  )
}

export default App
