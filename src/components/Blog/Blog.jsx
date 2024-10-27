import PropTypes from 'prop-types';

const Blog = ({ info }) => {
    console.log(info)
    const { title, cover_img, author, author_img, posted_date,
        reading_time, hashtags } = info;
    return (
        <div>
            <img className='w-1/2' src={cover_img} alt={`cover picture of the ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
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