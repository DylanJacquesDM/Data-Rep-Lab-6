import React from 'react';
import { MovieItem } from './movieItem';


//Exportable 'Movies' class
export class Movies extends React.Component{
    //render method
    render(){
        // map method
        return this.props.movies.map( (movie)=>{
            return <MovieItem movie={movie}></MovieItem>

        })

    }
}



