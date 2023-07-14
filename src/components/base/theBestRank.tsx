import React from 'react';
import {ReactComponent as RankIcon} from '../../public/svg/rank.svg';


const TheBestRank = ()=>{
    return (
        <div className='group cursor-pointer flex justify-center items-center w-9 h-9 absolute left-12 md:left-16 top-0 md:top-1'>
            <RankIcon className='w-8 md:w-11 h-8 md:h-11' />

            <span className="w-72 h-10 absolute top-4 left-10 scale-0 rounded bg-white hidden md:flex
                p-3 text-xs md:text-md text-textGray group-hover:scale-100 z-10 shadow-black shadow-2xl text-right" >
                    رتبه 80 از 250 فیلم برتر
            </span>
        </div>
    )
}

export default React.memo(TheBestRank);