import { Link } from 'react-router-dom';
import ToolTip from '../../components/base/toolTip';

interface propTypes {
    movieItem: IMovies;
    handleMovieDetail: (movie:IMovies)=>void;
}

const MovieItem = ({movieItem,handleMovieDetail}:propTypes):JSX.Element=>{
    return (
        <>
            <div onClick={()=>handleMovieDetail(movieItem)}  className='group relative w-[150px] md:w-[180px] mr-4 mt-3 h-[300px] md:h-[330px] text-left cursor-pointer'>
                <img src={process.env.REACT_APP_IMAGE_URL + movieItem.image} className='shadow-2xl w-full h-48 md:h-60 rounded-[4px]' />
                <h3 className='font-bold text-xs md:text-sm leading-4 mt-2 text-textLight dark:text-textDark shabnam'>{movieItem.title + " " + movieItem.year}</h3>
                <h3 className='text-xs md:text-sm leading-4 mt-1 text-textGray dark:text-[#a8a7a7]'>{movieItem.genre}</h3>
                <ToolTip desc={movieItem.description} imdb={movieItem.imdb} vote={movieItem.votes} countery={movieItem.countery} />
            </div>
        </>
    )
}


export default MovieItem;