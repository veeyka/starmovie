import React from 'react';

export default function useHandleInputEnter(idName:string, callback:()=>void):void{
    React.useEffect(()=>{
        const listener = (event) => {
            if (event.key === "Enter") {
                callback();
            }
        }
        const input = document.getElementById(idName);
        input.addEventListener("keyup", listener);
        return ()=>input.removeEventListener("keyup", listener)
    },[callback])
}