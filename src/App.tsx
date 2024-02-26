import './App.css'
import getTweets from './Twitter-api'

function App() {
  return (
    <>
      <div>
        <h1>Hashtags</h1>
        <div>{getTweets}</div>
      </div>
    </>
  )
}

export default App
