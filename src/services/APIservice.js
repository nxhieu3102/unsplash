import axios from 'axios';

const API_IMAGE = process.env.REACT_APP_API_IMAGE;
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY2;

const APIService = {
    getRandomPhotos: async () => {
        try {
            const response = await axios.get(`${API_IMAGE}/photos/random/?client_id=${ACCESS_KEY}`,
                {
                    params: {
                        count: 30
                    }
                });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    getPhotosByCollection: async (collection) => {
        try {
            const response = await axios.get(`${API_IMAGE}/search/collections/${collection}/?client_id=${ACCESS_KEY}`);
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