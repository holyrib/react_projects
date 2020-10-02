import axios from 'axios';

const KEY = 'AIzaSyAoUUp1wdJIczmkTY3ju_VYva7H95krapU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY

    }
});


