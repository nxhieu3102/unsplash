import axios from 'axios';

const API_IMAGE = process.env.REACT_APP_API_IMAGE;
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

const APIService = {
    getRandomPhotos: async () => {
        try {
            const response = await axios.get(`${API_IMAGE}/photos/random/?client_id=${ACCESS_KEY}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    getPhotosByTopic: async (topic) => {
        try {
            const response = await axios.get(`${API_IMAGE}/search/collections/${topic}/?client_id=${ACCESS_KEY}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    searchPhotos: async (query) => {
        try {
            const response = await axios.get(`${API_IMAGE}/photos/search/?client_id=${ACCESS_KEY}`, {
                params: { q: query },
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default APIService;