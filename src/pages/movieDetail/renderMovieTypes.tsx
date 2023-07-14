
import {ReactComponent as SaveImage} from '../../public/svg/save.svg';
import {ReactComponent as SubImage} from '../../public/svg/subtitle.svg';
import {ReactComponent as ScreenImage} from '../../public/svg/screenshot.svg';

export default function RenderMovieTypes(){
    return(
        <tbody>
            <tr className='hover:bg-[#eaeaea] dark:hover:bg-[#bcbcbc]'>
                <td className='text-left p-1 md:text-md md:p-3 cursor-pointer'><span className='text-xs text-textGray dark:text-white shabnam'>Download </span><SaveImage className='w-6 h-6 stroke-textGray dark:fill-white mr-1 float-left' /></td>
                <td className='text-left p-1 md:text-md md:p-3 cursor-pointer'><span className='text-xs text-textGray dark:text-white shabnam'>Auto sub </span> <SubImage className='w-6 h-6 fill-textGray dark:fill-white mr-1 float-left' /></td>
                <td className='text-left p-1 md:text-md md:p-3 cursor-pointer'><span className='text-xs text-textGray dark:text-white shabnam'>Manual sub </span><SubImage className='w-6 h-6 fill-textGray dark:fill-white mr-1 float-left' /></td>
                <td className='text-left p-1 md:text-md md:p-3 cursor-pointer'><span className='text-xs text-textGray dark:text-white shabnam'>ScreenShot </span><ScreenImage className='w-6 h-6 fill-textGray dark:fill-white mr-1 float-left' /> </td>
                <td className='text-left shabnam text-textGray dark:text-white p-1 text-xs md:text-md md:p-3 '>2.3 Gb</td>
                <td className='text-left shabnam text-textGray dark:text-white p-1 text-xs md:text-md md:p-3 '>MP4</td>
                <td className='text-left shabnam text-textGray dark:text-white p-1 text-xs md:text-md md:p-3 '>x264</td>
                <td className='text-left shabnam text-textGray dark:text-white p-1 text-xs md:text-md md:p-3 '>WEB-DL 1080p</td>
                <td className='text-left shabnam text-textGray dark:text-white p-1 text-xs md:text-md md:p-3 '>RARBG</td>
            </tr>
        </tbody>
    )
}