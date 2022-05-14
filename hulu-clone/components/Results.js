import Image from "next/image";
import {ThumbUpIcon} from "@heroicons/react/outline";
import FlipMove from "react-flip-move";

function Results( {results} ){
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return(
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 3xl:flex flex-wrap justify-center">
            {results.map(result => (
               <div key={result.id} results={result}>
                   <div className="p-2 group cursor-pointer transition duration-200 ease-in transform md:hover:scale-105 hover:z-50">
                       <div>
                            <Image
                                layout="responsive"
                                src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`}
                                alt={result.title}
                                width={640}
                                height={360}
                            />
                       </div>
                         <div className="p-2">
                             <p className="truncate max-w-md">
                                 {result.overview}
                             </p>
                             <h2 className="truncate mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                                 {result.title || result.original_name}
                             </h2>
                             <p className="flex items-center opacity-0 group-hover:opacity-100">
                                 {result.media_type && `${result.media_type} ● `}{" "}
                                 {result.release_date || result.first_air_date} ● {" "}
                                 <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
                             </p>
                         </div>
                   </div>
               </div>
            ))}
        </FlipMove>
    );
}

export default Results;