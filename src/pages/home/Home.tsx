import React, { useCallback ,useState,useMemo, lazy,useEffect} from 'react';
import { useGetHomeSearchName } from '../../api/use-get-home-search-name';
import { ApiUrl } from '../../service/http/types';
import { useGetHomeSearchGenre } from '../../api/use-get-home-search-genre';
import { IHomeState } from '../../types/common/common';
import Loading from '../../components/unites/Loading/Loading';
import NoResultFound from '../../components/base/noResultFound';
import MovieDetail from '../movieDetail/movieDetail';
import useResize from '../../hooks/use-resize';
import useGetHomeMovies from '../../api/use-get-home-movies';
import HeadComponent from '../../components/base/headComponent';
import RightSlider from '../../components/base/rightSlider';
import HomeContext from '../../context/home-context';


const RenderMovieList = lazy(()=>import('./renderMovieList'));
const RenderSearch = lazy(()=>import('./renderSearch'));

const Home: React.FC = (): JSX.Element =>{
  const [pageStates, setPageStates] = useState<IHomeState>({searchStr: "", genre: "", offset: 1, dataEnded: false,
    pageMovieType: "film", searchIsLoading: false, noResultFound:false, showMovieDetail:false, movieDetail:null});
  const searchMovieName = useCallback(useGetHomeSearchName,[]);
  const searchMovieGenre = useCallback(useGetHomeSearchGenre,[]);
  const [searchResult, setSearchResult] = useState<IMovies[]>([]);

	let {data = [], isLoading, error, refetch } = useGetHomeMovies(pageStates.pageMovieType);
  const movieList = useMemo(()=>data as IMovies[][], [data]);
  const searchResults = useMemo(()=>searchResult as IMovies[], [searchResult]);


  useEffect(()=>{
    const checkScroll = () =>{
      if (window.innerHeight + window.scrollY >= (document.body.offsetHeight -1) && searchResult.length
       && !pageStates.dataEnded && !pageStates.searchIsLoading) {
        addMoviesData();}
    }
    window.addEventListener("scroll",checkScroll);
    return ()=> window.removeEventListener("scroll" , checkScroll);
  },[searchResult,pageStates.dataEnded,pageStates.searchIsLoading]);

  const [width, height] = useResize();

  const handleSearchMovieByName = async ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let searchStr = (document.getElementById("home-search-bar") as HTMLInputElement).value;
    const result = await searchMovieName(searchStr, 0); // 0 is offset for first and get extra data on scroll with func addMoviesData
    setSearchResult(result);
    setPageStates(prev=>({...prev, searchStr, genre: "", offset: 1, dataEnded: false, searchIsLoading: false, noResultFound:!result.length,showMovieDetail:false}));
  }

  const handleSearchMovieByGenre = async (genre:string)=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const result = await searchMovieGenre(genre,pageStates.pageMovieType,0); // 0 is offset for first and get extra data on scroll with addMoviesData
    setSearchResult(result);
    setPageStates(prev=>({...prev, searchStr:"",noResultFound:false, genre, offset: 1, dataEnded: false, searchIsLoading: false,showMovieDetail:false}));
  }

  const addMoviesData = async ()=>{
    setPageStates(prev=>({...prev, searchIsLoading:true}));
    let result:IMovies[] = [];
    if(pageStates.genre){
      result = await searchMovieGenre(pageStates.genre,pageStates.pageMovieType,pageStates.offset);
    }else result = await searchMovieName(pageStates.searchStr,pageStates.offset);
    setPageStates(prev=>({...prev, dataEnded:(result.length<20)?true:false, offset:prev.offset+1,searchIsLoading:false}));
    setSearchResult(prev=>([...prev , ...result]));
  }

  const handlePageType = (pageMovieType:ApiUrl)=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSearchResult([]);
    (document.getElementById("home-search-bar") as HTMLInputElement).value = "";
    setPageStates(prev=>({...prev, searchStr: "", genre:"", offset: 1,dataEnded: true, pageMovieType, noResultFound:false,showMovieDetail:false,}));
  }
  
  const handleMovieDetail = (movie:IMovies)=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPageStates(prev=>({...prev, showMovieDetail:true, movieDetail:movie}));
  }

  const closeDetail = ()=>setPageStates(prev=>({...prev, showMovieDetail:false}));
  const contextValue = useMemo(() => ({handleSearchMovieByName, pageStates, handlePageType, handleSearchMovieByGenre, handleMovieDetail}), [pageStates.pageMovieType]);

  return (
    <HomeContext.Provider value={contextValue} >
      <div className='w-full flex flxe-row dark:bg-siteBgDark'>
        <RightSlider pageStates={pageStates} />
        <main className='h-full bg-siteBg dark:bg-siteBgDark duration-500 flex flex-col mx-auto ml-0 min-h-screen' id="mainHomeElement" style={{width:width>800?(window.innerWidth)-190:"100%"}}>
          <HeadComponent width={width} />
          {pageStates.showMovieDetail && <MovieDetail movie={pageStates.movieDetail} closeDetail={closeDetail} />}
          {!!isLoading && <Loading style={{marginTop:"100px"}} />}
          {pageStates.noResultFound && <NoResultFound />}
          {!!searchResults.length && <RenderSearch searchResults={searchResults} handleMovieDetail={handleMovieDetail} />}
          {pageStates.searchIsLoading && <Loading style={{marginTop:"20px"}} />}
          {!searchResults.length && !pageStates.noResultFound && <RenderMovieList movieList={movieList} />}
        </main> 
      </div>
    </HomeContext.Provider>
  )
}
export default Home;

//todo 
// in apis remove nested object and make a payload type
// in home page remove some extra codes and make some hooks



// const queryClient = useQueryClient();
// const {data,isLoading,error,refetch} = useQuery("posts",dataApi,{enabled:false});

// const dataApi = async ({queryKey}:any)=>{
//   const data =  await axios.get('https://jsonplaceholder.typicode.com/posts')
//   return data.data

// }

// const delPost = (id:number)=>{
//   const posts:any = queryClient.getQueriesData("posts")[0][1];
//   const postsFiltered = posts.filter((post:any)=>post.id !== id)
//   queryClient.setQueriesData("posts", postsFiltered)
  
// }



 