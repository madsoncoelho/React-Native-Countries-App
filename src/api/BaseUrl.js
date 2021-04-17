import axios from 'axios';

const BaseUrl = () => {
    return axios.create({
        baseURL: 'https://restcountries.eu/rest/v2',
    });
};

export default BaseUrl;