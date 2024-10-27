import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks,setBookmarks] =useState([]);

  const handleAddToBookmarks = blog =>{
    console.log('bookmark')
  }

  return (
    <>
    <div className='max-w-7xl mx-auto'> 
     <Header></Header>
     <div className='md:flex'>
      <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
      <Bookmarks></Bookmarks>
     </div>
     </div>
    </>
  )
}

export default App
