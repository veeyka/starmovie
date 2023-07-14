import {useContext} from "react";
import React from "react";
import {ReactComponent as CloseIcon} from '../../public/svg/close.svg';
import {ReactComponent as LogoImage} from '../../public/svg/logo.svg';
import {ReactComponent as SeriesImage} from '../../public/svg/series.svg';
import {ReactComponent as MoviesImage} from '../../public/svg/movies.svg';
import {ReactComponent as FavImage} from '../../public/svg/bookmark.svg';
import {ReactComponent as ArtImage} from '../../public/svg/art.svg';
import {ReactComponent as DotIcon} from '../../public/svg/dot.svg';
import { Link } from "react-router-dom";
import HomeContext from "../../context/home-context";

interface propTypes {
    pageStates: Record<any, any>
}
const RightSlider = ({pageStates}: propTypes):JSX.Element=>{

    const closeSlider = ()=>{
        document.getElementById("sliderId").style.width = "0px";
    }

    const {handlePageType, handleSearchMovieByGenre} = useContext(HomeContext);

    return(
        <div id="sliderId" className="w-[0px] md:w-[185px] fixed top-0 right-0 rounded-bl-2xl duration-500
              h-screen overflow-hidden flex z-50 flex-col bg-gradient-to-l from-amber-500 to-amber-400 dark:from-black dark:to-menuBackDark">
            <div className="flex md:hidden justify-end" onClick={closeSlider}>
                <CloseIcon className="stroke-[#808080] cursor-pointer dark:stroke-white w-5 h-5 m-4" />
            </div>

            <Link to="/" className="flex flex-row justify-start text-white items-center mt-4 md:mt-10 pr-3">
                <LogoImage className="w-9 h-9 fill-white hover:opacity-50 ml-2" />
                استار مووی
            </Link>
            <div className="w-10/12 h-[3px] bg-white dark:bg-white mx-auto mt-2 rounded-t-full"></div>

            {/* series */}
            <span className="mr-4 mt-10 flex flex-row items-center cursor-pointer" onClick={()=>handlePageType("tv")}>
                <SeriesImage className="w-6 h-6 fill-amber-700 dark:fill-white" />
                <span className="mr-3 text-sm text-white hover:opacity-50 dark:text-white" style={{color:pageStates.pageMovieType==="tv"?"#f53b71":""}}>سریال</span>
            </span>

            {/* movies */}
            <span className="mr-4 mt-3 flex flex-row items-center cursor-pointer" onClick={()=>handlePageType("film")}>
                <MoviesImage className="w-6 h-6 fill-amber-700 dark:fill-white" />
                <span className="mr-3 text-sm text-white hover:opacity-50 dark:text-white" style={{color:pageStates.pageMovieType==="film"?"#f53b71":""}}>فیلم</span>
            </span>

            {/* fav */}
            <Link to="/favorite" className="mr-4 mt-3 flex flex-row items-center cursor-pointer">
                <FavImage className="w-7 h-7 fill-amber-700 dark:fill-white" />
                <span className="mr-3 text-sm text-white hover:opacity-50 dark:text-white">لیست علاقه</span>
            </Link>

            {/* art */}
            <span className="mr-4 mt-3 flex flex-row items-center cursor-pointer">
                <ArtImage className="w-6 h-6 fill-amber-700 dark:fill-white" />
                <span className="mr-4 text-sm text-white hover:opacity-50 dark:text-white">هنرمندان</span>
            </span>

            <div className="w-8/12 h-[1px] bg-[#eaeaea] self-start mr-4 mt-5"></div>
            {/* genre */}
            <span className="mr-4 mt-5 flex flex-row items-center cursor-pointer" onClick={()=>handleSearchMovieByGenre("iran")}>
                <DotIcon className="w-7 h-7 fill-white dark:fill-white" style={{fill:pageStates.genre==="iran"?"#f53b71":""}} />
                <span className="mr-3 text-sm text-white hover:opacity-50 dark:text-white">ایرانی</span>
            </span>
            <span className="mr-4 mt-1 flex flex-row items-center cursor-pointer" onClick={()=>handleSearchMovieByGenre("animation")}>
                <DotIcon className="w-7 h-7 fill-white dark:fill-white" style={{fill:pageStates.genre==="animation"?"#f53b71":""}} />
                <span className="mr-3 text-sm text-white hover:opacity-50 dark:text-white">انیمیشن</span>
            </span>
            <span className="mr-4 mt-1 flex flex-row items-center cursor-pointer" onClick={()=>handleSearchMovieByGenre("fear")}>
                <DotIcon className="w-7 h-7 fill-white dark:fill-white" style={{fill:pageStates.genre==="fear"?"#f53b71":""}} />
                <span className="mr-3 text-sm text-white hover:opacity-50 dark:text-white">ترسناک</span>
            </span>
            <span className="mr-4 mt-1 flex flex-row items-center cursor-pointer" onClick={()=>handleSearchMovieByGenre("western")}>
                <DotIcon className="w-7 h-7 fill-white dark:fill-white" style={{fill:pageStates.genre==="western"?"#f53b71":""}} />
                <span className="mr-3 text-sm text-white hover:opacity-50 dark:text-white">وسترن</span>
            </span>
            <span className="mr-4 mt-1 flex flex-row items-center cursor-pointer" onClick={()=>handleSearchMovieByGenre("police")}>
                <DotIcon className="w-7 h-7 fill-white dark:fill-white" style={{fill:pageStates.genre==="police"?"#f53b71":""}} />
                <span className="mr-3 text-sm text-white hover:opacity-50 dark:text-white">جنایی</span>
            </span>
            <span className="mr-4 mt-1 flex flex-row items-center cursor-pointer" onClick={()=>handleSearchMovieByGenre("love")}>
                <DotIcon className="w-7 h-7 fill-white dark:fill-white" style={{fill:pageStates.genre==="love"?"#f53b71":""}} />
                <span className="mr-3 text-sm text-white hover:opacity-50 dark:text-white">عاشقانه</span>
            </span>
            <span className="mr-4 mt-1 flex flex-row items-center cursor-pointer" onClick={()=>handleSearchMovieByGenre("comedy")}>
                <DotIcon className="w-7 h-7 fill-white dark:fill-white" style={{fill:pageStates.genre==="comedy"?"#f53b71":""}} />
                <span className="mr-3 text-sm text-white hover:opacity-50 dark:text-white">کمدی</span>
            </span>
            <span className="mr-4 mt-1 flex flex-row items-center cursor-pointer" onClick={()=>handleSearchMovieByGenre("history")}>
                <DotIcon className="w-7 h-7 fill-white dark:fill-white" style={{fill:pageStates.genre==="history"?"#f53b71":""}} />
                <span className="mr-3 text-sm text-white hover:opacity-50 dark:text-white">تاریخی</span>
            </span>
            <span className="mr-4 mt-1 flex flex-row items-center cursor-pointer" onClick={()=>handleSearchMovieByGenre("document")}>
                <DotIcon className="w-7 h-7 fill-white dark:fill-white" style={{fill:pageStates.genre==="document"?"#f53b71":""}} />
                <span className="mr-3 text-sm text-white hover:opacity-50 dark:text-white">مستند</span>
            </span>
        </div>
    )
}

export default React.memo(RightSlider);