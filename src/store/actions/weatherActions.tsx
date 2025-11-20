import axios from 'axios';

import { FETCHING_WEATHER_FULFILLED, FETCH_WEATHER, FETCH_WEATHER_REJECTED, GET_CITY_NAME } from '../../types/constants';

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
      dispatch({ type: FETCHING_WEATHER_FULFILLED, payload: response.data });
      console.log(response)
    })
    .catch((e) => {
      dispatch({ type: FETCH_WEATHER_REJECTED , payload: e});
    });
};
