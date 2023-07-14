import { Fragment } from "react";
import RenderNames from "./renderNames";

interface propTypes {
    data:string;
    title:string;
}

export default function RenderMovieMakers({title,data}:propTypes){
    return (
        <div className='flex flex-col p-2 mt-5 md:mx-5'>
            <span className='text-textGray dark:text-textDark mb-2 shabnam font-bold'>{title}</span>
            {data?.split(",").map((item:string,i:number)=>
                <Fragment key={i}><RenderNames name={item} /></Fragment>
            )}
        </div>
    )
}