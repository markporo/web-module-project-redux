export const ADD_FAVORITE = "ADD_FAVORITE";
export const DISPLAY_FAVORITES = "DISPLAY_FAVORITES";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const addFavorite = (movie) => {
    return ({ type: ADD_FAVORITE, payload: movie });
}

export const displayFavorites = () => {
    return ({ type: DISPLAY_FAVORITES });
}

export const removeFavorite = (movie) => {
    return (
        {
            type: REMOVE_FAVORITE,
            payload: movie,
        }
    )
}