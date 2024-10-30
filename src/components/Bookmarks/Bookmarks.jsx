import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bInfos, readingTime }) => {
    return (
        <div className="md:w-1/3 ml-5  text-center">
            <h2 className=' p-4 text-3xl border border-blue-300 mt-10 rounded-lg'>Reading Time: {readingTime}</h2>

            <div className=' bg-gray-300 mt-2 p-4'>
                <h2 className="text-3xl">Bookmarked Blogs: {bInfos.length}</h2>

                {
                    bInfos.map((bmark, idx) => <Bookmark key={idx}
                        bProp={bmark}>

                    </Bookmark>)
                }

            </div>
        </div>
    );

};

Bookmarks.propTypes = {
    bInfos: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;