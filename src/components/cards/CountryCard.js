import React from 'react';
import { StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { Card } from 'react-native-paper';

const CountryCard = (props) => {
    const leftContent = () => <SvgUri width="100%" height="100%" uri={props.flag} />

    return (
        <Card>
            <Card.Title title={props.title} subtitle={props.subtitle} left={leftContent} />
        </Card>
    );
};

const styles = StyleSheet.create({
    flagStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});

export default CountryCard;