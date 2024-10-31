import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ info, handleAddToBookmarks, handleMarkAsRead }) => {
    const { title, cover_img, author, author_img, posted_date,
        reading_time, hashtags, id } = info;
    return (
        <div className='mb-20 space-y-4' >
            <img className='w-full mb-4' src={cover_img} alt={`cover picture of the ${title}`} />
            <div className='flex justify-between'>
                <div className='flex mb-8'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookmarks(info)}
                        className='ml-4'><FaRegBookmark /></button>
                </div>
            </div>
            <h3 className="text-2xl">{title}</h3>
            <p>
                {
                    hashtags.map((hash, idx) => <span
                        key={idx}>
                        {hash}
                    </span>)
                }
            </p>
            <button
                onClick={() => handleMarkAsRead(reading_time, id)}
                className='text-blue-800 font-bold underline'>
                Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    info: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;