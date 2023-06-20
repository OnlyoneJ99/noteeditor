import { Component } from "react";
import "./moviereview.css";
const url = new URL("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=soldier&api-key=El3CAieCm7wzeC4bdhcz1ac4oAUAD0Sx")
export default class MovieReview extends Component{
    constructor(){
        super();
        this.state = {movies:[]};
    }
    async fetchMovies(){
        try{
            let response = await fetch(url.href);
            let movies = await response.json();
            this.setState({movies:movies.results});
        }catch(error){
            console.log(error)
        }
    }
    componentDidMount(){
        this.fetchMovies();
    }
    render(){
        return (
            <div className="wrapper">
                {
                    this.state.movies.map(function(movie){
                        return(
                            <div key={movie.display_title} className="movie">
                                <h2 className="movie_name">{movie.display_title}</h2>
                                <p className="byline">{movie.byline}</p>
                                <p className="headline">{movie.headline}</p>
                                <p className="criticspick">{movie.critics_pick}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}