import axios from 'axios';

import { ForecastResponseItem, GroupedForecast } from '@/types/models';

// eslint-disable-next-line import/order
import {
  FETCHING_WEATHER_FULFILLED,
  FETCH_WEATHER,
  FETCH_WEATHER_REJECTED,
  GET_CITY_NAME,
} from '../../types/constants';

// eslint-disable-next-line import/order
import { DateTimeService } from '../../services/dateTimeService';

const dateTimeService = new DateTimeService();

export const actionGetCityName = (cityName: string) => ({
  type: GET_CITY_NAME,
  payload: { cityName },
} as const);

export const actionFetchWeatherApiData = (cityName: string) => async (dispatch: any) => {
  dispatch({ type: FETCH_WEATHER });
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
      params: {
        q: cityName,
        appid: '286e99238dc4343e41f63ec35cf640ea',
        units: 'metric',
        lang: 'ru',
      },
    });
    const groupedWeatherData = response.data.list.reduce(
      (acc: GroupedForecast, item: ForecastResponseItem) => {
        const date = dateTimeService.format(item.dt_txt, 'YYYY-MM-DD');
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
        return {
          ...acc,
          [date]: acc[date] ? [...acc[date], entry] : [entry],
        };
      },
      {},
    );
    dispatch({ type: FETCHING_WEATHER_FULFILLED, payload: { groupedWeatherData } });
  } catch (e) {
    dispatch({ type: FETCH_WEATHER_REJECTED, payload: { e } });
  }
};
