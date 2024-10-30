import PropTypes from 'prop-types';

const Bookmark = ({bProp}) => {
    const {title} = bProp;
    return (
        <div className='text-center bg-slate-200 m-2 p-4 rounded-lg'>
            <h2 >{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bProp: PropTypes.object
}
export default Bookmark;