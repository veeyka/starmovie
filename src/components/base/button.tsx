import React, { ReactNode } from 'react';
import {ReactComponent as LeftImage} from '../../public/svg/left.svg';

interface propTypes {
    title: string,
    callback:()=>void;
    className?:string;
    icon?:ReactNode;
    style?:Record<any, any>;
}
const Button = (props:propTypes)=>{
    const { title = "تایید", callback, className, icon= <LeftImage className='w-7 h-7' />, style} = props;
    const classname = "bg-siteRed py-2 flex flex-row items-center justify-center px-5 rounded-xl mt-10 cursor-pointer mb-5" + className;
    return(
        <div onClick={callback} style={style}
        className={classname}>
            <p className="text-center text-white w-full text-[12px] lg:text-sm">{title}</p>
            {icon}
        </div>
    )
}

export default React.memo(Button);