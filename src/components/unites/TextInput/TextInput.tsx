import './TextInput.scss'
import React ,{ChangeEventHandler,ReactNode,useState} from 'react';
import {ReactComponent as EyeImage} from '../../../public/svg/eye.svg';
import {ReactComponent as Eye2Image} from '../../../public/svg/eye2.svg';

interface propTypes {
    isFor: string;
    name?:string;
    title?: string;
    value: string;
    placeholder?: string;
    required?: boolean;
    id?:string;
    errorPlace?: string;
    onChange: any;
    isPassword?: boolean;
    icon?: ReactNode;
    style?: Record<any, any>;
    className?:string;
}

export default function TextInput(props:propTypes){
    const {
        name= "", title= "", value, placeholder= "", required= false, errorPlace= "", onChange, isPassword= false,
        icon= null, style = {}, className = "", isFor , id = ""} = props;

    // if isPassword is true we handle secure password for input .
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleShowPassword = ()=>{
        setShowPassword(prev=>!prev);
    }
    return(
        <>
            <label className={'w-9/12 text-right text-textGray text-[10px] lg:text-sm pr-2 mt-3'}>
                {title}
                {required && <span className="text-2xl text-red-500 mr-2 ">*</span>}
            </label>

            <div className={`w-11/12 md:w-9/12 h-8 lg:h-10 px-1 rounded-md flex flex-row justify-between items-center 
                border-2 ${errorPlace===isFor?" border-red-600":" border-gray"}`}>
                {isPassword ? (showPassword ?
                    <EyeImage className='w-9 h-9 ' onClick={handleShowPassword} />:
                    <Eye2Image className='w-9 h-9 ' onClick={handleShowPassword} />): icon}
                <input autoComplete='new-password' id={id} placeholder={placeholder} name={name} required type={`${isPassword?(showPassword?"text":"password"):"text"}`} 
                    className={"w-full px-3 outline-none " + className} onChange={onChange} value={value} style={style} />
            </div>
       </>
    )
}