import React from 'react';
import { Movies } from './movies';
//axios method to access Json
import axios from 'axios';

//Exportable 'Read' class
export class Read extends React.Component {

    //state object
    state = {
        movies: []
    };

    //DidMount method to import Json data
    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
            .then(
                (response) => {
                    //setting movies to "search" in Json file
                    this.setState({ movies: response.data.movies })
                }
            )
            //catch method to report error
            .catch(
                (error) => {
                    console.log(error)

                });
    }


    //render method
    render() {
        return (
            <div>
                <h1>Here is a list of movies</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}



