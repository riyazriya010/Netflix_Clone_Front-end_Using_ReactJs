import React, { useState, useEffect } from 'react';
import axios from '../../services/axios'
import './row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const base_url = `https://image.tmdb.org/t/p/original/`;

function Row( { title, fetchUrl ,isLargeRow }  ) {
    const [movies, setMovies] = useState( [] );
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() =>{

        // if [] - run once when the row loads, and not run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();

        // everytime outside variable using inside the useEffect we want to add in the array to track the changes
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay:1,
        }
    }

    const handleClick = (movie) => {
        console.log(movie)
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || movie?.title || movie?.original_name || movie?.original_title || "")
                .then((url) => {
                    if (url) {
                        const urlParams = new URLSearchParams(new URL(url).search);
                        setTrailerUrl(urlParams.get("v"));
                    } else {
                        console.log("No trailer found");
                    }
                })
                .catch((error) => console.error("Error fetching trailer: ", error));
        }
    };


    // console.log(movies)


    return(
    <div className='row'>

        {/* title */}
        <h2> {title} </h2>

        <div className='row_posters'>
            {/*several row_poster(s) */}

            {
                movies.map(movie => {
                    return <img 
                    onClick={() => handleClick(movie)}
                    className={`row_poster_img ${isLargeRow && `row_posterLarge_img`}`} 
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} 
                    key={movie.id}/>
                })
            }
        </div>
        { trailerUrl && <YouTube videoId={trailerUrl} otps={opts}/> }
    </div>
    );
}

export default Row;