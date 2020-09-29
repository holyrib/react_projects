import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID VTH8T6IulVvZZEA_RPQ9d5y_pwqHNA9BLq89-BGo08A',
    },
});

