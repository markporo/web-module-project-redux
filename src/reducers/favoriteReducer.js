//- favorites: an array of movie objects
//- displayFavorites: a boolean that holds 
//if favorite elements should be displayed in app

import { ADD_FAVORITE, TOGGLE_FAVORITES, REMOVE_FAVORITE } from "../actions/favoriteActions"

const initialFavorites = {
    favorites: [],
    displayFavorites: false,
}

const favoriteReducer = (state = initialFavorites, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: [state.favorites.filter(movie => (action.payload !== movie))]
            }
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites,
            }
        default:
            return state;
    }
}

export default favoriteReducer;