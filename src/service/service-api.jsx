import axios from 'axios';


const apiKey = '23515062-7934c938ce0e5818a24acf627';
const baseUrl = 'https://pixabay.com/api/';


export const getImages = (name, page) =>
    axios
        .get(`${baseUrl}?q=${name}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`)
        .then((response) => response.data.hits);