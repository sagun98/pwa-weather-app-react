import axios from 'axios';


const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '0fa9582812ad9238db84757c543c9f02';


export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL,{
        params: {
            q:query,
            units: 'metric',
            APPID: API_KEY,
        }
    });
    return data;
}