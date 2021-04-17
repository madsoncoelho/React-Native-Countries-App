import React from 'react';
import { Appbar } from 'react-native-paper';

import CountryList from '../components/lists/CountryList';

const HomeScreen = () => {
    const titleScreen = 'Países';
    const subtitleScreen = 'Lista de todos os países';

    return (
        <>
            <Appbar.Header>
                <Appbar.Content title={titleScreen} subtitle={subtitleScreen} />
            </Appbar.Header>
            <CountryList />
        </>
    );
};

export default HomeScreen;