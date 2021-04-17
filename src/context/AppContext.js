import React from 'react';

export const AppContext = React.createContext();

export const appReducer = (state, action) => {
    switch (action.type) {
        case 'createCountriesList':
            return {...state, countries: action.payload};
        
        case 'addToFavoritesList':
            return state;
        
        default:
            return state;

    }
};

export const initialState = {
    countries: new Array(),
    favoriteCountries: new Array(),
};