import React from 'react';
import {ReactComponent as ShareIcon} from '../../public/svg/share.svg';
import {ReactComponent as TelegramIcon} from '../../public/svg/telegram.svg';
import {ReactComponent as WhatsappIcon} from '../../public/svg/whatsapp.svg';
import {ReactComponent as InstaIcon} from '../../public/svg/instagram.svg';
import {ReactComponent as TwitterIcon} from '../../public/svg/twitter.svg';





const ShareThisMovie = ()=>{
    return(
        <div className='w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300 absolute left-3 top-0 duration-300 hover:w-40 md:hover:w-60 flex flex-row items-center justify-end overflow-hidden'>
            <TwitterIcon className='fill-white w-5 h-5 md:w-7 md:h-7 ml-2 md:ml-[14px] cursor-pointer hover:fill-siteRed' />
            <div className='flex flex-row items-center'>
                <TelegramIcon className='stroke-white w-6 h-6 md:w-8 md:h-8 ml-2 md:ml-[14px] cursor-pointer hover:fill-siteRed' />
                <WhatsappIcon className='fill-white w-5 h-5 md:w-7 md:h-7 ml-2 md:ml-[14px] cursor-pointer hover:fill-siteRed' />
                <InstaIcon className='fill-white w-7 h-7 md:w-9 md:h-9 ml-2 md:ml-[14px] cursor-pointer hover:stroke-siteRed' />
                <ShareIcon className='fill-white w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3' />
            </div>

        </div>
    )
}

export default React.memo(ShareThisMovie);