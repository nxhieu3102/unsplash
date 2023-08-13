import axios from 'axios';

const API_IMAGE = process.env.REACT_APP_API_IMAGE;
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

const APIService = {
    getRandomPhotos: async (param) => {
        try {
            const response = await axios.get(`${API_IMAGE}/photos/random`,
                {
                    params: {
                        count: 20,
                        client_id: ACCESS_KEY,
                    }
                });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    getRandomPhotosNext: async (param) => {
        try {
            const response = await axios.get(`${API_IMAGE}/photos/random`,
                {
                    params: {
                        count: 10,
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
                        page: 1,
                        per_page: 20,
                        client_id: ACCESS_KEY,
                    }
                });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    getPhotosByTopicNext: async (topic) => {
        try {
            const response = await axios.get(`${API_IMAGE}/topics/${topic}/photos`,
                {
                    params: {
                        page: 1,
                        per_page: 10,
                        client_id: ACCESS_KEY,
                    }
                });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    searchPhotos: async (query) => {
        console.log(query)
        try {
            const response = await axios.get(`${API_IMAGE}/search/photos`, {
                params: {
                    query: query,
                    per_page: 20,
                    client_id: ACCESS_KEY,
                },
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    searchPhotosNext: async (query) => {
    
        try {
            const response = await axios.get(`${API_IMAGE}/search/photos`, {
                params: {
                    query: query,
                    per_page: 10,
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