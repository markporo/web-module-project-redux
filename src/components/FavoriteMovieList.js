import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeFavorite } from "../actions/favoriteActions"

const FavoriteMovieList = (props) => {
    const favorites = props.favorites;

    // const handleRemoveClick = (movie) => {
    //     // e.preventDefault()
    //     console.log();
    //     // props.removeFavorite(e.target.value)
    // }
    console.log(props);

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie => {
                return <div onClick={() => { props.removeFavorite(movie) }} key={movie.id}>

                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span ><span className="material-icons">remove_circle</span></span>
                    </Link>

                </div>
            })
        }
    </div>);
}

const mapPropsToState = (state) => {
    return {
        favorites: state.favoriteReducer.favorites,
    }
}


export default connect(mapPropsToState, { removeFavorite })(FavoriteMovieList);