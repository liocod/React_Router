import React from 'react'
// import './MovieCard.css'



 function MovieCard(props) {
    return (
        <article className="Moviecard">
                    <img className="Moviecard-poster" src= {props.poster}alt={props.title} />
        <div >
             <h3>{props.title}</h3>
             <h3 /*style={{marginLeft:'10px'}}*/>{props.description}</h3>   
             <a href={props.url} target={'blank'} > <button>WATCH</button>  </a>        
        </div>
        </article>
    )
}

export default MovieCard