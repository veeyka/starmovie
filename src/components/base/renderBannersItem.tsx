

interface propTypes{
    imageName:string
}

export default function RenderBannersItem({imageName}:propTypes){
    return (
        <img src={process.env.REACT_APP_BANNER_URL + imageName} className='cursor-pointer shadow-2xl w-[300px] md:w-[500px] h-32 md:h-40 rounded-[4px] mr-5' />
    )
}