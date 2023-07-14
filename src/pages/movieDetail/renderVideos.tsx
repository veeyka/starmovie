import React from 'react';
import Button from '../../components/base/button';
import RenderMovieTypes from './renderMovieTypes';

const RenderVideos = ()=>{
    const handleNavigation = ()=>{

    }
    return (
        <div className='w-full md:w-11/12 mb-10 mx-auto '>
            <div className='w-full h-20 flex flex-row justify-between px-3 items-center'>
                <p className='text-md md:text-xl text-textGray dark:text-white'>دانلود یا پخش آنلاین</p>
                <Button title='نسخه زبان اصلی' className="" style={{marginTop:"25px"}} callback={handleNavigation} />
            </div>

            <div className='w-full overflow-x-scroll mt-5'>
                <table className='w-full '>
                    <thead>
                        <tr>
                            <th className='text-left shabnam text-textGray dark:text-white p-3 text-xs md:text-md'></th>
                            <th className='text-left shabnam text-textGray dark:text-white p-3 text-xs md:text-md'></th>
                            <th className='text-left shabnam text-textGray dark:text-white p-3 text-xs md:text-md'></th>
                            <th className='text-left shabnam text-textGray dark:text-white p-3 text-xs md:text-md'></th>
                            <th className='text-left shabnam text-textGray dark:text-white p-3 text-xs md:text-md'>Size</th>
                            <th className='text-left shabnam text-textGray dark:text-white p-3 text-xs md:text-md'>Format</th>
                            <th className='text-left shabnam text-textGray dark:text-white p-3 text-xs md:text-md'>Encoding</th>
                            <th className='text-left shabnam text-textGray dark:text-white p-3 text-xs md:text-md'>Quality</th>
                            <th className='text-left shabnam text-textGray dark:text-white p-3 text-xs md:text-md'>Encoders</th>
                        </tr>
                    </thead>
                    <RenderMovieTypes />
                    <RenderMovieTypes />
                    <RenderMovieTypes />
                    <RenderMovieTypes />
                </table>
            </div>
        </div>
    )
}



export default React.memo(RenderVideos);