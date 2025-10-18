import './App.css'
import PostList from './components/PostList'
import CreatePost  from './components/CreatePost'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/create-post' element={<CreatePost/>}/>
        <Route path='/allposts' element={<PostList/>}/>
      </Routes>
    </div>
  )
}

export default App
