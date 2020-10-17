import React, {useEffect, useState} from "react";
import OpenWeather from "../apis/OpenWeather";

const CurrentWeather = () => {
    const [currentWeather, setCurrentWeather] = useState([]);
    useEffect(() => {
        const getCurrentWeather = async () => {
            const response = await OpenWeather.get('/weather',{
                params: {
                    lat: 43.2220,
                    lon: 76.8512,
                },
            });
            const weatherInfo = response;
            console.log(weatherInfo);
            setCurrentWeather({weatherInfo});
            console.log(response);
        };
        getCurrentWeather();
        console.log(currentWeather);
    }, []);

    return (
        <div>
            <div className="ui statistics">
                <div className="statistic">
                    <div className="value">{currentWeather.length}</div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;