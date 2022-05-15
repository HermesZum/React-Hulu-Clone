import Image from "next/image";
import {ThumbUpIcon} from "@heroicons/react/outline";
import {forwardRef} from "react";

const Thumbnail = forwardRef(({result}, flip) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return(
        <div ref={flip} className={'p-2 group cursor-pointer transition duration-200 ease-in transform md:hover:scale-105 hover:z-50'}>
            <Image
                layout={'responsive'}
                src={`${BASE_URL}${result.poster_path || result.backdrop_path}`}
                alt={result.title}
                width={'100%'}
                height={'100%'}
            />
            <div className={'p-2'}>
                <p className={'truncate max-w-md'}>
                    {result.overview}
                </p>
                <h2 className={'truncate mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'}>
                    {result.title || result.original_title}
                </h2>
                <span className={'flex items-center opacity-0 group-hover:opacity-100'}>
                    {result.media_type && `${result.media_type} ● `}{" "}
                    {result.release_date || result.first_air_date} ● {" "}
                    <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
                </span>
            </div>
        </div>
    )
})

export default Thumbnail;