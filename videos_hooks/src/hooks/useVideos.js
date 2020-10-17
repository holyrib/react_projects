import {useEffect, useState, useUffect} from 'react';
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() =>{
        search(defaultSearchTerm);
    }, []);
    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
            },
        });
        setVideos(response.data.items);
        // console.log(search(defaultSearchTerm));
    };
    debugger;
    return [videos, search];
};

export default useVideos;