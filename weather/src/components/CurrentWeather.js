import React, {useEffect, useState} from "react";
import OpenWeather from "../apis/OpenWeather";

const CurrentWeather = () => {
    const [currentWeather, setCurrentWeather] = useState([]);
    useEffect(() => {
       getCurrentWeather();
       console.log(currentWeather);
    }, []);
    useEffect(() => {
        console.log(currentWeather);
    }, [currentWeather]);
    const getCurrentWeather = async () => {
        try{
            const response = await OpenWeather.get('/weather',{
                params: {
                    lat: 43.2220,
                    lon: 76.8512,
                },
            }).then((response) => {
                setCurrentWeather(response.data);
            });
        } catch (error) {
            console.log('error happened');
        }

    };
    return (
        <div>
            <div className="ui statistics">
                <div className="statistic">
                    <div className="label"></div>
                    {currentWeather.main.temp !== undefined ?  <div className="value"></div> : <div>nothing</div>}

                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;