import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmarks = add => {
    const newBookmarks = [...bookmarks, add];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time => {
    const updateReadingTime = readingTime + time;
    setReadingTime(updateReadingTime)
  }

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <div className='md:flex'>
          <Blogs handleAddToBookmarks={handleAddToBookmarks}
            handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks
            bInfos={bookmarks}
            readingTime={readingTime}>
          </Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
