import React from 'react';

//Exportable 'Create' class
export class Create extends React.Component {


    constructor() {
        super();

        //Bind methods
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

//Submit method
    onSubmit(e) {
        e.preventDefault()
        alert("Movie: " + this.state.Title + " " + this.state.Year + ' ' + this.state.Poster);
    }

    //ChangeTitle method
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    //ChangePoster method
    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        });
    }

    //ChangeYear method
    onChangeYear(e){
        this.setState({
        Year: e.target.value
        });
    }

    //render method
    render() {
        return (
            //form
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input type='text' className='form-control' value={this.state.Title} onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="from-group">
                        <label>Add Movie Year: </label>
                        <input type ='text'
                        className = 'form-control'
                        value = {this.state.Year}
                        onChange = {this.onChangeYear}></input>
                    </div>
                    <div className='form-group'>
                        <label>Movie Poster: </label>
                        <textarea type ='text'
                        className = 'form-control'
                        value={this.state.Poster}
                        onChange={this.onChangePoster}>
                        </textarea>
                    </div>
                    <div className="from-group">
                        <input type='submit'
                            value='addMovie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}



