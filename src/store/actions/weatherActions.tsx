import axios from 'axios';

import { FETCHING_WEATHER_FULFILLED, FETCH_WEATHER, FETCH_WEATHER_REJECTED, GET_CITY_NAME } from '../../types/constants';

import 'dayjs/locale/ru';

import {DateTimeService} from '../../services/dateTimeService';

const dateTimeService = new DateTimeService();

export const actionGetCityName = (cityName: string) => ({
  type: GET_CITY_NAME,
  payload: { cityName },
});

export const actionFetchWeatherApiData = (cityName: string) => (dispatch: any) => {
  dispatch({ type: FETCH_WEATHER });

  axios
    .get('https://api.openweathermap.org/data/2.5/forecast', {
      params: {
        q: cityName,
        appid: '286e99238dc4343e41f63ec35cf640ea',
        units: 'metric',
        lang: 'ru',
      },
    })
    .then((response) => {
      const weatherData = response.data;
      const groupedWeatherData = weatherData.list.reduce((acc: any, item: any) => {
              const date = dateTimeService.format(item.dt_txt, 'YYYY-MM-DD')
              const time = dateTimeService.format(item.dt_txt, 'HH:mm');
              const entry = {
                time,
                temp: Math.ceil(item.main.temp),
                description: item.weather[0].description,
                icon: item.weather[0].icon,
                wind: Math.ceil(item.wind.speed),
                pressure: Math.ceil(item.main.pressure / 1.33),
                humidity: item.main.humidity,
              };
              if (!acc[date]) acc[date] = [];
              acc[date].push(entry);
              return acc;
            }, {})
      console.log(groupedWeatherData)
      dispatch({ type: FETCHING_WEATHER_FULFILLED, payload: groupedWeatherData });
    })
    .catch((e) => {
      dispatch({ type: FETCH_WEATHER_REJECTED , payload: e});
    });
};


// async processWeatherData(city: string): Promise<void> {
//     const list = await this.fetchWeatherData(city);
//     this.groupedForecast = list?.reduce((acc: GroupedForecast, item: any) => {
//       const date = this.dateTimeService.format(item.dt_txt, 'YYYY-MM-DD')
//       const time = this.dateTimeService.format(item.dt_txt, 'HH:mm');

//       const entry = {
//         time,
//         temp: Math.ceil(item.main.temp),
//         description: item.weather[0].description,
//         icon: item.weather[0].icon,
//         wind: Math.ceil(item.wind.speed),
//         pressure: Math.ceil(item.main.pressure / 1.33),
//         humidity: item.main.humidity,
//       };

//       if (!acc[date]) acc[date] = [];
//       acc[date].push(entry);
//       return acc;
//     }, {});
//   }