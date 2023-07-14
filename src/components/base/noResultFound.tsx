import React from 'react';
import {ReactComponent as SadImage} from '../../public/svg/sad.svg'
import image404 from '../../public/images/404.png'


const NoResultFound = ()=>{
    return(
        <section className='mt-32 flex flex-col items-center justify-center w-6/12 bg-white shadow-lg dark:bg-siteBgDark2 mx-auto py-10 rounded-xl'>
            <img src={image404} className='w-52' />

            <div className="flex flex-row justify-center items-center mt-10">
                <SadImage className='w-8 h-8 stroke-iconsColor dark:stroke-white' />
                <h1 className='text-textLight mr-3 dark:text-white'>مطلبی پیدا نشد .</h1>
            </div>
            <h1 className='text-textGray mr-3 dark:text-white'>این فیلمو پیدا نکردم . دوباره جست و جو کن .</h1>
        </section>

    )
}




export default React.memo(NoResultFound);