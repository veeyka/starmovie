import {useState} from 'react';

export default function useInput():[string , (e:React.ChangeEvent<HTMLInputElement>)=>void]{
  const [value, setValue] = useState("");
  function onChange(e:React.ChangeEvent<HTMLInputElement>){
    setValue(e.target.value);
  }
  return [value, onChange];
}