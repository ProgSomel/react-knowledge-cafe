import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleBookMarks, handleMarkAsRead}) => {
    const {title, cover_img, author, author_img, reading_time, posted_date, hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
        <img className="w-full"  src={cover_img} alt={`cover picture of the title ${title}`} />
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-5">
                <img className="w-16" src={author_img} alt="" />
                <div>
                    <h3 className="text-2xl">{author}</h3>
                    <p>{posted_date}</p>
                </div>
            </div>
            <div>
                <span>{reading_time} min read</span>
                <button onClick={() => handleBookMarks(blog)} className='ml-2 text-red-400 text-2xl'><FaBookmark></FaBookmark></button>
            </div>
        </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
            {
                hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span> )
            }
            <br />
            <button onClick={ () => handleMarkAsRead(reading_time)} className='text-purple-800 font-bold underline'>Mark As Read</button>
            </p>
        </div>
    );
};

export default Blog;