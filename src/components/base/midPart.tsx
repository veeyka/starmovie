import React from 'react';
import fearImage from '../../public/images/fearimage.jpg';
import comedyImage from '../../public/images/comedyimage.jpg';
import loveImage from '../../public/images/loveimage.jpg';
import documentImage from '../../public/images/documentimage.jpg';
import historyImage from '../../public/images/historyimage.jpg';
import crimeImage from '../../public/images/crimeimage.jpg';
import {ReactComponent as FearIcon} from '../../public/svg/fearicon.svg';
import {ReactComponent as ComedyIcon} from '../../public/svg/comedyicon.svg';
import {ReactComponent as DocumentIcon} from '../../public/svg/documenticon.svg';
import {ReactComponent as HistoryIcon} from '../../public/svg/historyicon.svg';
import {ReactComponent as LoveIcon} from '../../public/svg/loveicon.svg';
import {ReactComponent as CrimeIcon} from '../../public/svg/crimeicon.svg';
import MidPartItem from './midPartItem';




const MidPart = ()=>{
    return(
        <div className='w-full mb-10 flex flex-wrap justify-around items-center'>
            <MidPartItem icon={<FearIcon className='w-6 h-6 fill-siteRed' />} title="ترسناک ترین ها" genre="fear" image={fearImage} />
            <MidPartItem icon={<ComedyIcon className='w-5 h-5 fill-siteRed' />} title="خنده دار ترین ها" genre="comedy" image={comedyImage} />
            <MidPartItem icon={<HistoryIcon className='w-5 h-5 ' />} title="تاریخی ها" genre="history" image={historyImage} />
            <MidPartItem icon={<LoveIcon className='w-5 h-5' />} title="عاشقانه" genre="love" image={loveImage} />
            <MidPartItem icon={<DocumentIcon className='w-6 h-6 fill-siteRed' />} title="مستند ها" genre="document" image={documentImage} />
            <MidPartItem icon={<CrimeIcon className='w-5 h-5' />} title="جنایی ها" genre="police" image={crimeImage} />
        </div>
    )
}



export default React.memo(MidPart);