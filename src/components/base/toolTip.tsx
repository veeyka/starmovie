
interface propTypes {
    desc : string;
    countery:string;
    vote:string;
    imdb:string;
}


export default function ToolTip({desc,imdb, countery, vote}: propTypes){
    return (
        <span className="w-72 h-52 left-0 absolute top-0 scale-0 rounded bg-white hidden md:flex md:flex-col
        p-3 text-xs text-textGray group-hover:scale-100 z-50 shadow-black shadow-2xl text-right" >
            <h3 className="font-bold text-md text-textLight">خلاصه داستان</h3>
            <p className="mt-2 shabnam">{desc.substring(0,150)}</p>
            <div className="flex flex-row mt-5">
                <div className="w-28 h-24 mt-1 p-2">
                    <h3 className="font-bold text-textLight text-md">کشور تولید</h3>
                    <h4 className="text-textGray text-xs mt-1">{countery}</h4>
                </div>
                <div className="w-28 h-24 mt-1 p-2">
                    <h3 className="font-bold text-textLight text-md">امتیاز IMDB</h3>
                    <h3 className="text-textGray text-xs">رتبه {imdb} از 10</h3>
                    <h3 className="font-bold text-textLight text-md">از تعداد رای</h3>
                    <h3 className="text-textGray text-xs">{vote}</h3>
                </div>
            </div>
        </span>
    )
}