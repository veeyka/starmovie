import React, {useState} from 'react';
import {ReactComponent as ExitImage} from '../../public/svg/exit.svg';
import {ReactComponent as EmailImage} from '../../public/svg/email.svg';
import { Link } from 'react-router-dom';
import { ILoginState } from '../../types/common/common';
import Loading from '../../components/unites/Loading/Loading';
import Button from '../../components/base/button';
import { useInput } from '../../hooks';
import TextInput from '../../components/unites/TextInput/TextInput';
import BGImage from '../../public/images/loginback.jpg';

const ResetPassword: React.FC = (): JSX.Element => {
    console.log("login ref")
    const [pageStates, setPageStates] = useState<ILoginState>({
        errorPlace:"",
        showLoading:false,
        errorMessage:"",
    });
    const [email, onChangeEmail] = useInput();

    const handleLoginBtn = ()=>{
        alert(12)
    }
    
    return(
        <>
            <div className="h-screen bg-siteBg flex flex-row justify-center items-center bg-[length:0%_0%] md:bg-[length:100%_100%]" style={{backgroundImage:`url(${BGImage})`}}>
                {/*---- right box which is visible in both desktop and mobile*/}
                <div className="flex flex-col justify-center items-center w-10/12 md:w-4/12">
                    {/* -- top  exit icon */}
                    <Link to="/" className="px-3 border-2 border-borderColor rounded-full py-3 pt-3 mt-3 lg:mt-6">
                        <ExitImage className='w-6 h-6' />
                    </Link>
                        
                    {/* page title */}
                    <p className="font-bold text-sm lg:text-lg text-textColor mt-2">تغییر کلمه ی عبور</p>

                    {/*  email input  */}
                    <TextInput title="ایمیل شما" isFor='email' required={true} onChange={onChangeEmail} value={email} isPassword={false}
                       icon={<EmailImage className='w-7 mx-1 h-8 stroke-siteRed' />} />

                    {/*  loading /login button*/}
                    {pageStates.showLoading && <Loading style={{marginTop:"40px"}} />}
                    {!pageStates.showLoading && <Button title="ارسال ایمیل تغییر کلمه ی عبور" callback={handleLoginBtn} /> }

                    {/* login error */}
                    <p className="text-siteRed text-center text-sm">{pageStates.errorPlace}</p>
                </div>


            </div>
        </>
    )
}

export default ResetPassword;