import React, { Fragment } from 'react';
import MovieItem from './movieItem';

interface pageProps{
    searchResults:IMovies[];
    handleMovieDetail:(movie:IMovies)=>void
}

const RenderSearch= ({searchResults,handleMovieDetail}: pageProps)=>{
    return(
        <div className='w-full h-full min-h-screen flex flex-wrap justify-around pl-4 pt-24' style={{height:"100%"}}>
            {searchResults.map((movieItem: IMovies, i: number)=>
                <Fragment key={i}>
                    <MovieItem movieItem={movieItem} handleMovieDetail={handleMovieDetail} />
                </Fragment>
            )}
        </div>
    )
}

export default React.memo(RenderSearch);