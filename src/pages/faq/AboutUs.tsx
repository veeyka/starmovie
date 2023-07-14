import React from 'react';
import { useParams } from 'react-router-dom';


interface pageProps{
   
}
console.log("about -- outsize")
const AboutUs :React.FC<pageProps>  = ():JSX.Element=>{
    console.log("about -- in")
    const {id} = useParams();
    console.log(window.location.search)
    // document.title ="Welcome | here is your page title to display";
    // (document.getElementsByTagName("META")[4] as HTMLMetaElement).content="eeee";

    return (
        <div>
            about {id}
        </div>
    )
}


export default AboutUs;