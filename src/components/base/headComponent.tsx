import React, {useContext, useRef} from 'react';
import { RootStates } from '../../redux/reducers';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {ReactComponent as LogoImage} from '../../public/svg/logo.svg';
import {ReactComponent as DarkModeImage} from '../../public/svg/darkmode.svg';
import {ReactComponent as AndroidIcon} from '../../public/svg/android.svg';
import {ReactComponent as MenuImage} from '../../public/svg/menu.svg';
import {ReactComponent as UserImage} from '../../public/svg/user.svg';
import {ReactComponent as User2Image} from '../../public/svg/user2.svg';
import {ReactComponent as AppleIcon} from '../../public/svg/apple.svg';
import {ReactComponent as WindowsIcon} from '../../public/svg/windows.svg';
import {ReactComponent as MacIcon} from '../../public/svg/mac.svg';
import HomeContext from '../../context/home-context';
import useCallAction from '../../hooks/use-call-action';
import { ls } from '../../tools';
import useHandleInputEnter from '../../hooks/use-handle-input-enter';
import OpenSlider from '../../util/open-slider';
import CloseSlider from '../../util/close-slider';

interface propTypes {
    width:number;
}
const HeadComponent = ({width}:propTypes):JSX.Element=>{
    const { mode } = useSelector((state: RootStates)=>state.darkMode);
    const { handleSearchMovieByName } = useContext(HomeContext);
    const callAction = useCallAction();
    const {userId}  = useSelector((state:RootStates)=>state.user);


    const SliderState = useRef(true);
    const toogleSlider = ()=>{
        if(SliderState.current){
            CloseSlider();
            SliderState.current = false;
        }else{
            OpenSlider();
            SliderState.current = true;
        }
    }
    const MobileSlider = ()=>{
        document.getElementById("sliderId").style.width = "200px";
    }
    const handleSearch = ()=>{
        handleSearchMovieByName();
    }
    useHandleInputEnter("home-search-bar",handleSearch);
    const darkModeHandler = ():void=>{
        if(mode === "light"){
            ls.set("SMovieDarkMode", "dark");
            callAction("SET_DARK_MODE");
        }else{
            ls.set("SMovieDarkMode", "light");
            callAction("SET_LIGHT_MODE");
        }
    }

    return(
        <nav className='bg-gradient-to-l from-amber-400 to-gray-600 dark:from-menuBackDark z-30 fixed dark:bg-menuBackDark opacity-90 h-16 md:h-[72px] flex flex-row justify-between px-2 md:px-6 items-center' id="headerCompId"  style={{width:width>800?(window.innerWidth)-190:"100%"}}>
            {/* -------- mobile right menu trigger - in mobile */}
            <span className='flex md:hidden' onClick={MobileSlider}>
                <MenuImage className='cursor-pointer stroke-white dark:stroke-white w-10 h-10 md:w-11 md:h-11' />
            </span>
            {/* just in desktop */}
            <div className='hidden md:flex flex-row items-center'>
                {/* -------- right logo in desktop */}
                <MenuImage onClick={toogleSlider} className='cursor-pointer stroke-grayColor dark:stroke-white w-10 h-10 md:w-11 md:h-11' />
                <AndroidIcon className='w-6 h-6 fill-white dark:fill-white hover:fill-siteRed dark:hover:fill-siteRed mr-3 cursor-pointer' />
                <AppleIcon className='w-6 h-6 fill-white dark:fill-white hover:fill-siteRed dark:hover:fill-siteRed mr-3 cursor-pointer' />
                <WindowsIcon className='w-6 h-6 fill-white dark:fill-white hover:fill-siteRed dark:hover:fill-siteRed mr-3 cursor-pointer' />
                <MacIcon className='w-6 h-6 fill-white dark:fill-white hover:fill-siteRed dark:hover:fill-siteRed mr-3 cursor-pointer' />
            </div>

            {/* dark mode icon and search input */}
            <div className='flex justify-center items-center'>
                <div className='w-52 md:w-72 h-9 md:h-10 relative rounded-full'>
                    <input id="home-search-bar"
				        placeholder="جستجو فیلم"
                        type="text" className='focus:!outline-none w-full h-full ml-3 rounded-full pr-12 px-2 text-center' />
                    <LogoImage className='w-6 md:w-10 h-6 md:h-7 absolute right-2 top-[6px] md:top-[6px] fill-siteRed' onClick={handleSearch} />
                </div>
                {userId === 0 ?
                    <Link to="/login">
                        <UserImage className='cursor-pointer hover:opacity-50 stroke-iconsColor dark:stroke-white w-11 h-11 mr-2 md:mr-4'  />
                    </Link>:
                    <Link to="/profile">
                        <User2Image className='cursor-pointer hover:opacity-50 stroke-iconsColor dark:stroke-white w-9 h-9 mr-2 md:mr-4'  />
                    </Link>
                }
                
                
                <DarkModeImage className='cursor-pointer hover:opacity-50 dark:fill-white fill-white w-12 h-12 md:w-12 md:h-12' onClick={darkModeHandler} />
            </div>
        </nav>
    )
}

export default React.memo(HeadComponent);