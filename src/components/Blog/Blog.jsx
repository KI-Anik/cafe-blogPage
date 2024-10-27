import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ info,handleAddToBookmarks }) => {
    const { title, cover_img, author, author_img, posted_date,
        reading_time, hashtags } = info;
    return (
        <div className='mb-20' >
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
                    onClick={handleAddToBookmarks}
                    className='ml-4'><FaRegBookmark /></button>
                </div>
            </div>
            <h3 className="text-2xl">{title}</h3>
            {
                hashtags.map((hash, idx) => <span
                    key={idx}>
                    {hash} </span>)
            }
        </div>
    );
};

Blog.propTypes = {
    info: PropTypes.object.isRequired
}

export default Blog;