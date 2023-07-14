

interface propTypes{
    name:string
}
export default function RenderNames(props:propTypes){
    return (
        <span onClick={()=>window.open("http://www.google.com/search?q= +" + props.name)} className="text-textGray shabnam dark:text-white hover:text-black dark:hover:text-[#c4c4c4] cursor-pointer text-xs md:text-sm">
            {props.name}</span>
    )
}