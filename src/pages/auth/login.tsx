import React, {useState} from 'react';
import {ReactComponent as GoogleImage} from '../../public/svg/google-icon.svg';
import {ReactComponent as Email} from '../../public/svg/email.svg';
import { Link } from 'react-router-dom';
import { ILoginState, NestedObject } from '../../types/common/common';
import Loading from '../../components/unites/Loading/Loading';
import Button from '../../components/base/button';
import { useInput } from '../../hooks';
import TextInput from '../../components/unites/TextInput/TextInput';
import BGImage from '../../public/images/loginback.jpg';
import { ValidateEmail } from '../../util/form-validation';
import useHandleInputEnter from '../../hooks/use-handle-input-enter';
import httpClient from '../../service/http/http-client';
import axios from 'axios';


const Login: React.FC = (): JSX.Element => {
  
    const [pageStates, setPageStates] = useState<ILoginState>({
        errorPlace:"",
        showLoading:false,
        errorMessage:""
    });
    const [email, onChangeEmail] = useInput();
    const [password, onChangePassword] = useInput();
    const handleLoginBtn = async ()=>{
        // axios.post("http://localhost:8000/user/dd", {data:2,  })
        const x = await httpClient.post<NestedObject, any>("userlogin", {data:{id:12}});
        console.log("x", x);
        if(!ValidateEmail(email)){
            setPageStates(prev=>({...prev, errorMessage:"لطفا ایمیل خود را به درستی وارد کنید", errorPlace:"email",}));
        }else if(password.length < 5){
            setPageStates(prev=>({...prev, errorMessage:"لطفا کلمه ی عبور خود را به درستی وارد کنید", errorPlace:"password",}));
        }else{
            // setPageStates(prev=>({...prev, errorMessage:"", errorPlace:"",showLoading:true}));
          
            
            // console.log(x);
        }
    }
    useHandleInputEnter("loginPassword", handleLoginBtn)
    return(
        <>
            <div className="h-screen bg-siteBg  flex flex-row justify-center items-center bg-[length:0%_0%] md:bg-[length:100%_100%]" style={{backgroundImage:`url(${BGImage})`}}>
                {/*---- right box which is visible in both desktop and mobile*/}
                <div className="flex flex-col justify-center items-center w-11/12 md:w-4/12">
                        
                    {/* page title */}
                    <p className="font-bold text-sm lg:text-xl text-textGray mt-2  mb-5">ورود کاربران</p>

                    {/*  email input  */}
                    <TextInput id="loginEmail" title="ایمیل شما" required={true} isFor='email' onChange={onChangeEmail} value={email} errorPlace={pageStates.errorPlace}
                        icon={<Email className='w-7 mx-1 h-8 stroke-siteRed' />} className='text-left shabnam' style={{direction:"ltr"}}  />

                    {/*  password input  */}
                    <TextInput title="کلمه ی عبور" id="loginPassword" isFor='password' required={true} onChange={onChangePassword} value={password} 
                    isPassword={true} className='text-left shabnam' style={{direction:"ltr"}} errorPlace={pageStates.errorPlace} />

                    {/*  loading /login button*/}
                    <div className='w-11/12 md:w-9/12 flex flex-row justify-between items-center'>
                        <div>
                            {pageStates.showLoading && <Loading style={{marginTop:"40px"}} />}
                            {!pageStates.showLoading && <Button title="ورود به سیستم" callback={handleLoginBtn} /> }
                        </div>
                        <Link to="/resetpassword" className='mt-10'>
                            <span className="text-textGray text-[12px] lg:text-sm">فراموشی رمز عبور</span>
                        </Link>
                    </div>

                    {/* login error */}
                    <p className="text-siteRed text-center text-sm mt-7">{pageStates.errorMessage}</p>

                    <div className='w-9/12 h-1 bg-gray-200 mt-10'></div>
                    <span className='mx-auto bg-white px-4 -mt-[14px] text-textGray'>ورود گوگل</span>
        

                    <div className='flex flex-row w-8/12 cursor-pointer md:w-5/12 rounded-full border-[2px] mt-5 h-11 border-grayColor justify-between items-center px-4'>
                        <span className='text-textGray'>ورود با گوگل</span>
                        <GoogleImage className='w-5 h-5' />
                    </div>
                   
                </div>



            </div>
        
        </>
    )
}

export default Login;