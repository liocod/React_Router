import React from "react"
import MovieCard from "./MovieCard";
import { Datas } from "../Assets/Datas";
import {Link} from 'react-router-dom'



const MoviList = () =>  {
    return(
        <div>
          {Datas.map((data)=>( 
              <div> 
                  <Link to={`/MovieList/${data.id}`} >

              <MovieCard poster =   {data.posterURL} />
              </Link>
              <MovieCard title =   {data.title}
                       
                        description = {data.description}
                        url= {data.url}
                />
                
                </div>
          ))}
        </div>
    )
}

export default MoviList;