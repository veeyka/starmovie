import CloseSlider from "./close-slider";

export default function handleClickOut(){
    window.addEventListener('click', function(e:MouseEvent){   
        if (document.getElementById('sliderId').contains((e.target as HTMLElement))){
           
        } else{
          CloseSlider();
        }
    });
}