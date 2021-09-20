export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = (id) => {
    return ({ type: DELETE_MOVIE, payload: id });
}

export const addMovie = (movie) => {
    return ({ type: ADD_MOVIE, payload: { id: movie.id, title: movie.title, director: movie.director, genre: movie.genre, metascore: movie.metascore, description: movie.description } });
}