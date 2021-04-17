import React from 'react';

import BaseUrl from '../api/BaseUrl';
import { AppContext } from '../context/AppContext';

export const useCountries = () => {
    const {state, dispatch} = React.useContext(AppContext);

    React.useEffect(() => {
        BaseUrl().get('/all').then((response) => {
            const action = {type: 'createCountriesList', payload: response.data};
            dispatch(action);
        });
    }, []);

    return {countries: state.countries};
};
