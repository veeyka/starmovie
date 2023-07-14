import React from 'react';
import background from '../../public/images/footerbg.png';
import bazzar from '../../public/images/bazzar.png';
import myket from '../../public/images/myket.png';
import {ReactComponent as TwitterImage} from '../../public/svg/twitter.svg';
import {ReactComponent as TelegramImage} from '../../public/svg/telegram.svg';
import {ReactComponent as InstagramImage} from '../../public/svg/instagram.svg';
import {ReactComponent as WhatsappImage} from '../../public/svg/whatsapp.svg';
import { Link } from 'react-router-dom';

const FooterComponent = ()=>{
    return (
        <footer className='w-full h-28 bg-[length:100%_100%] fixed bottom-0 pt-12 md:flex bg-siteBg dark:bg-siteBgDark' style={{backgroundImage: `url(${background})`}}>
            <div className='flex flex-row w-full h-16 justify-between items-center mb-auto px-10'>
                <div className='flex flex-row justify-center items-center'>
                    <Link to="/">
                        <TwitterImage className='w-8 h-8 fill-white' />
                    </Link>
                    <Link to="/">
                        <TelegramImage className='w-9 h-9 mr-6' />
                    </Link>
                    <Link to="/">
                        <InstagramImage className='w-11 h-11 mr-5' />
                    </Link>
                    <Link to="/">
                        <WhatsappImage className='w-8 h-8 mr-5' />
                    </Link>
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <Link to="/" className='w-32 h-10 bg-[length:100%_100%]' style={{backgroundImage: `url(${bazzar})`}}></Link>
                    <Link to="/" className='w-32 h-10 bg-[length:100%_100%] mr-5' style={{backgroundImage: `url(${myket})`}}></Link>
                </div>
                
            </div>
        </footer>
    )
}



export default React.memo(FooterComponent);