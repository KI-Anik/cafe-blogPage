import PropTypes from 'prop-types';

const Blog = ({info}) => {
    const {title} = info;
    return (
        <div>
           <h3 className="text-2xl">{title}</h3> 
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired
}
export default Blog;