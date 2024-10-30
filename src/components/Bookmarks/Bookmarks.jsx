import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bInfos }) => {
    return (
        <div className="md:w-1/3 ml-5 bg-gray-300 mt-2 p-4">
            <h2 className="text-3xl text-center">Bookmarked Blogs: {bInfos.length}</h2>
            
            {
                bInfos.map((bmark) => <Bookmark key={bmark.id}
                    bProp={bmark}>
                        
                </Bookmark>)
                
            }
            
        </div>
    );

};

Bookmarks.propTypes = {
    bInfos: PropTypes.array
}
export default Bookmarks;