import React, { useState, useEffect } from 'react';
import axios from './helper/axios';
import './row.css';

const base_url = `https://image.tmdb.org/t/p/original/`;

function Row( { title, fetchUrl ,isLargeRow }  ) {
    const [movies, setMovies] = useState( [] );

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

    console.log(movies)


    return(
    <div className='row'>

        {/* title */}
        <h2> {title} </h2>

        <div className='row_posters'>
            {/*several row_poster(s) */}

            {
                movies.map(movie => {
                    return <img 
                    className={`row_poster_img ${isLargeRow && `row_posterLarge_img`}`} 
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} 
                    key={movie.id}/>
                })
            }
        </div>

    </div>
    )
}

export default Row;