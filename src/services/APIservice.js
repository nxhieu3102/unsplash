import axios from 'axios';

const API_IMAGE = process.env.REACT_APP_API_IMAGE;
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY2;

const APIService = {
    getRandomPhotos: async () => {
        try {
            const response = await axios.get(`${API_IMAGE}/photos/random`,
                {
                    params: {
                        count: 30,
                        client_id: ACCESS_KEY,
                    }
                });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    getPhotosByTopic: async (topic) => {
        try {
            const response = await axios.get(`${API_IMAGE}/topics/${topic}/photos`,
                {
                    params: {
                        client_id: ACCESS_KEY,
                    }
                });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    searchPhotos: async (query) => {
        try {
            const response = await axios.get(`${API_IMAGE}/photos/search/`, {
                params: { 
                    query: query,
                    client_id: ACCESS_KEY,
                },
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default APIService;