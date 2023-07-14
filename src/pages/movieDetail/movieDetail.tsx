import RenderMovieMakers from './renderMovieMakers';
import {ReactComponent as ArrowTop} from '../../public/svg/arrowtop.svg';
import {ReactComponent as Bookmark} from '../../public/svg/bookmark2.svg';
import {ReactComponent as LogoIcon} from '../../public/svg/logo.svg';
import RenderVideos from './renderVideos';
import ShareThisMovie from '../../components/base/shareThisMovie';
import TheBestRank from '../../components/base/theBestRank';
import {useState} from 'react';


interface propTypes {
    movie:IMovies;
    closeDetail:()=>void
}
const MovieDetail = ({movie,closeDetail}:propTypes)=>{
    const [bookmark, setBookmark] = useState<Boolean>(false);
    return(
        <main className='w-full flex flex-col bg-siteBg dark:bg-siteBgDark pt-20 md:pt-24'>
           <div className='w-11/12 self-center py-4 pl-4 bg-siteBg2 mt-7 md:mt-10 flex flex-row mb-10 dark:bg-siteBgDark2 relative shadow-lg'>
                <div onClick={()=>closeDetail()} className='p-0 md:p-1 cursor-pointer bg-siteBg dark:bg-siteBgDark2 absolute right-2 md:right-4 -top-5 rounded-full border-[6px] border-gray-300 dark:border-siteBgDark '>
                    <ArrowTop className='fill-grayColor w-7 h-7 dark:fill-white' />
                </div>

                <div onClick={()=>setBookmark(!bookmark)} className='p-0 md:p-1 cursor-pointer bg-siteBg dark:bg-siteBgDark2 absolute right-14 md:right-20 -top-5 rounded-full border-[6px] border-gray-300 dark:border-siteBgDark '>
                    <Bookmark className='stroke-grayColor w-7 h-7 dark:stroke-white' style={{stroke:bookmark?"#f53b71":""}} />
                </div>
                {/* right part */}
                <section className='w-8/12 md:w-10/12 p-2 md:p-5 relative'>
                    <TheBestRank />
                    <ShareThisMovie />
                    {/* description */}
                    <h1 className='text-textLight dark:text-textDark text-md md:text-xl mt-5'>خلاصه داستان</h1>
                    <h2 className='text-textGray dark:text-textDark mt-3 text-xs md:text-sm'>{movie.description}</h2>
                    {/* director - cast - composer */}
                    <div className='flex flex-col md:flex-row justify-center md:justify-end text-left mt-5 md:mt-40'>
                        {/* composer */}
                        <RenderMovieMakers title="composer" data={movie.composer} />
                        {/* cast */}
                        <RenderMovieMakers title="cast" data={movie.cast} />
                        {/* director */}
                        <RenderMovieMakers title="director" data={movie.director} />
                    </div>
                    
                </section>
                {/* left part */}
                <section className='w-4/12 md:w-2/12 flex flex-col items-end'>
                    <img src={process.env.REACT_APP_IMAGE_URL + movie.image} className='w-32 md:w-48 shadow-2xl' />
                    {/* title - year - genre - language - time - imdb - vote - age - countery in this part */}
                    <h2 className='text-xs md:text-lg mt-5 shabnam font-bold text-left dark:text-textDark'>{movie.title} {movie.year}</h2>
                    <h3 className='text-xs md:text-md mt-1 md:mt-2 text-left text-textGray dark:text-textDark'>{movie.genre}</h3>
                    <h3 className='text-xs md:text-md mt-4 md:mt-6 text-left text-textGray dark:text-textDark'>زبان اصلی</h3>
                    <h3 className='text-xs md:text-md mt-1 text-left text-textLight dark:text-textDark shabnam'>{movie.language}</h3>
                    <h3 className='text-xs md:text-md mt-4 md:mt-6 text-left text-textGray dark:text-textDark'>امتیاز {<span className='bg-siteRed px-1 text-white rounded-lg'>IMDB</span>}</h3>
                    <h3 className='text-xs md:text-md mt-1 text-left text-textLight dark:text-textDark shabnam'>{movie.imdb}</h3>
                    <h3 className='text-xs md:text-md mt-2 md:mt-3 text-left text-textGray dark:text-textDark'>از تعداد رای</h3>
                    <h3 className='text-xs md:text-md mt-1 text-left text-textLight dark:text-textDark shabnam'>{movie.votes}</h3>
                    <h3 className='text-xs md:text-md mt-2 md:mt-3 text-left text-textGray dark:text-textDark'>امتیاز Metacritic</h3>
                    <h3 className='text-xs md:text-md mt-1 text-left text-textLight dark:text-textDark shabnam'>0/100</h3>
                    <h3 className='text-xs md:text-md mt-2 md:mt-3 text-left text-textGray dark:text-textDark'>رده سنی</h3>
                    <h3 className='text-xs md:text-md mt-1 text-left text-textLight dark:text-textDark shabnam'>{movie.agesupported}</h3>
                    <h3 className='text-xs md:text-md mt-2 md:mt-3 text-left text-textGray dark:text-textDark'>محصول کشور</h3>
                    <h3 className='text-xs md:text-md mt-1 text-left text-textLight dark:text-textDark shabnam'>{movie.countery}</h3>
                </section>

                <div className='p-0 md:p-3 cursor-pointer bg-siteBg dark:bg-siteBgDark2 hidden md:flex absolute right-0 bottom-0 rounded-full border-[6px] border-gray-300 dark:border-siteBgDark '>
                    <LogoIcon className='fill-grayColor w-7 h-7 dark:fill-white' />
                </div>
            </div>
            <RenderVideos />
        </main>
    )
}
export default MovieDetail;