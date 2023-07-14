import {useState, useEffect} from 'react';


export default function useResize(){
    const [state, setState] = useState({width:0,height:0});

    function updateWindowDimension(){
        setState({width:window.innerWidth, height:window.innerHeight});
    }

    useEffect(()=>{
        updateWindowDimension();
        window.addEventListener("resize",updateWindowDimension);
        return ()=>window.removeEventListener("resize",updateWindowDimension);
    },[])

    return [state.width, state.height];
}