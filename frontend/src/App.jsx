import './App.css'
import PostList from './components/PostList'
import CreatePost  from './components/CreatePost'
import PostPage from './pages/PostPage'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/create-post' element={<CreatePost/>}/>
        <Route path='/allposts' element={<PostList/>}/>
        <Route path='/posts/:id' element={<PostPage/>}/>
      </Routes>
    </div>
  )
}

export default App
