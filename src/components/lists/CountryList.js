import React from 'react';
import { FlatList } from 'react-native';

import CountryCard from '../cards/CountryCard';
import { useCountries } from '../../hooks/useCountries';

const CountryList = () => {

    let { countries } = useCountries();

    countries = countries.map((country) => {
        return {
            name: country.translations.pt,
            population: country.population,
            flag: country.flag,
            numericCode: country.numericCode,            
        };
    });
    countries.sort((previous, current) => previous.name.localeCompare(current.name));

    const _renderItem = ({ item }) => (
        <CountryCard title={item.name} subtitle={`População: ${item.population} habitantes`} flag={item.flag} />
    );

    return (
        <FlatList data={countries} keyExtractor={(country) => country.numericCode}
            renderItem={_renderItem} />
    );
}

export default CountryList;
