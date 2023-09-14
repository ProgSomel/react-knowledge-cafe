import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  
  const [bookMarks, setBookMarks] = useState([]);


  const handleBookMarks = blog => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  }

  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = time => {
    setReadingTime(readingTime+time);
  }


  return (
    <div className='max-w-5xl mx-auto'>
      
      <Header></Header>
      <div className='md:flex mt-5'>
        <Blogs handleBookMarks={handleBookMarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
      </div>
      
    </div>
  )
}

export default App
