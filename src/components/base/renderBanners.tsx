import { Fragment } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import RenderBannersItem from './renderBannersItem';




export default function RenderBanners(){
    const names = ["banner.jpg", "banner2.jpg", "banner3.jpg", "banner4.jpg", "banner5.jpg"]
    return(
        <ScrollContainer vertical={false} horizontal={true} className='mb-10 md:my-5'>
            <div className="w-[1630px] md:w-[2640px] flex flex-row">
                {names.map((item: string, i: number)=><Fragment key={i}><RenderBannersItem imageName={item} /></Fragment>)}
            </div>
        </ScrollContainer>
    )
}