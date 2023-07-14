import React , { Fragment } from 'react';
import RenderMovie from './renderMovie';

interface propTypes {
    movieList: IMovies[][];
}

const RenderMovieList = ({movieList}:propTypes)=>{
    console.log("renderMovieList refreshed");
    return (
       <div className='pt-24'>
            {
                movieList.map((movieList:IMovies[] ,i :number)=>
                    <Fragment key={i.toString()+"list"}>
                        <RenderMovie movies={movieList} iniIndex={i} />
                    </Fragment>
                )
            }
       </div>
    )
}

export default React.memo(RenderMovieList);