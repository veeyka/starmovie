import { Fragment,useContext } from 'react';
import MovieItem from './movieItem';
import ScrollContainer from 'react-indiana-drag-scroll';
import headersList from '../../constant/config/headersList';
import {ReactComponent as FavImage} from '../../public/svg/favm1.svg';
import {ReactComponent as DotsImage} from '../../public/svg/horidots.svg';
import HomeContext from '../../context/home-context';
import MidPart from '../../components/base/midPart';
import RenderBanners from '../../components/base/renderBanners';

interface propTypes {
    movies:IMovies[];
    iniIndex:number;
}

const RenderMovie = ({movies, iniIndex}: propTypes) =>{
    const {handleSearchMovieByGenre, handleMovieDetail} = useContext(HomeContext);
    return(
        <>
            <div className='w-full -mt-4 md:-mt-0 px-4 md:px-8 pt-0 md:pt-5 flex flex-row justify-between items-center py-2 md:py-5'>
                <div className='flex flex-row justify-center items-center' onClick={()=>handleSearchMovieByGenre(headersList[iniIndex].name)}>
                    <FavImage className='w-7 md:w-9 h-7 md:h-9 ml-3 fill-amber-500 cursor-pointer' /> 
                    <span className='text-md md:text-lg text-textHeaders font-bold dark:text-textDark cursor-pointer'>{headersList[iniIndex].title}</span>
                </div>
                <DotsImage className='w-10 h-10 fill-grayColor dark:fill-white cursor-pointer' onClick={()=>handleSearchMovieByGenre(headersList[iniIndex].name)} />
            </div>
            <ScrollContainer vertical={false} horizontal={true}>
                <div className="w-[2490px] md:w-[2940px] ml-5 flex flex-row">
                    {movies.map((movie:IMovies,i:number)=>
                        <Fragment key={i.toString()+"list"}>
                            <MovieItem movieItem={movie} handleMovieDetail={handleMovieDetail} />
                        </Fragment>
                    )}
                </div>
            </ScrollContainer>
            {iniIndex === 0 && <RenderBanners /> }
            {iniIndex === 1 && <MidPart />}
        </>
    )
}

export default RenderMovie;