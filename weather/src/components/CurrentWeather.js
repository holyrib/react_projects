import React, {useEffect, useState} from "react";
import OpenWeather from "../apis/OpenWeather";

const CurrentWeather = () => {
    const [currentWeather, setCurrentWeather] = useState([]);
    useEffect(() => {
        getCurrentWeather();
        console.log(currentWeather)
    }, []);

    const getCurrentWeather = async (term) => {
        const response = await OpenWeather.get('/weather',{
            params: {
                lat: 43.2220,
                lon: 76.8512,
            },
        });
        console.log(currentWeather);
        setCurrentWeather(response.data)
        console.log(response.data);
        console.log(currentWeather);

    }
    return (
        <div>
            <div className="ui statistics">
                <div className="statistic">
                    {/*{currentWeather.main.temp}*/}
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;