import PropTypes from 'prop-types';

const Blog = ({info}) => {
    console.log(info)
    const {title} = info;
    return (
        <div>
           <h3 className="text-2xl">{title}</h3> 
        </div>
    );
};

Blog.propTypes = {
    info:PropTypes.object.isRequired
}

export default Blog;