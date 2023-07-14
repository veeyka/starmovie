import { useSelector } from "react-redux";
import { RootStates } from "../../redux/reducers";




export default function DarkMode():JSX.Element{
    const { mode } = useSelector((state:RootStates)=> state.darkMode)
    if(mode === "dark"){
        document.documentElement.classList.add("dark");
    }else{
        document.documentElement.classList.remove("dark");
    }
    return(<></>)
}