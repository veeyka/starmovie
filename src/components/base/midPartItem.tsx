import { ReactNode, useContext } from "react"
import HomeContext from "../../context/home-context";


interface proptypes {
    icon:ReactNode;
    title:string;
    genre:string;
    image:string;
}
export default function MidPartItem({icon, title, genre, image}:proptypes){
    const {handleSearchMovieByGenre} = useContext(HomeContext);
    return(
        <div className='w-32 h-40 text-center text-xs text-grayColor cursor-pointer bg-white rounded-lg relative shadow-md mt-10' onClick={()=>handleSearchMovieByGenre(genre)}>
            <div className='w-11 h-11 absolute right-3 -top-4 rounded-full flex justify-center items-center border-[4px] bg-[#eaeaea] border-siteBg dark:border-siteBgDark'>
                {icon}
            </div>
            <div className='w-full h-32 bg-[length:100%_100%] mb-2 rounded-t-lg' style={{backgroundImage:`url(${image})`}}>
        </div>
        {title}
    </div>
    )
}