import BookMark from "../BookMark/BookMark";

const Bookmarks = ({bookMarks, readingTime}) => {
    console.log(bookMarks);
    return (
       <div className='w-1/3 text-center bg-gray-300 ml-4 mt-2 pt-5'>
         <div className="">
            <h3 className="text-4xl">Reading Time: {readingTime}</h3>
        </div>
        <div >
        
            <h2 className="text-3xl">Bookmarked Blogs: {bookMarks.length}</h2>

            {
                bookMarks.map(bookMark => <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>)
            }
        </div>
       </div>
    );
};

export default Bookmarks;