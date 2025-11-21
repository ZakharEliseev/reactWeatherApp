import { FETCHING_WEATHER_FULFILLED, FETCH_WEATHER, FETCH_WEATHER_REJECTED, GET_CITY_NAME } from "@/types/constants";

const initialState: any = {
  cityName: '',
  weatherData: [],
  fetchingStatus: {
    fetching: false,
    fetched: false,
    error: null,
  }
};

export const reducer = (state = initialState, action: any) => {
  switch(action.type){
    case GET_CITY_NAME: {
      return {
      ...state,
      cityName: action.payload.cityName
      }
    }
    case FETCH_WEATHER  : {
      return {
        ...state,
        fetchingStatus: {
          fetching: true,
          fetched: false,
          error: null,
        },
      };
    }
    case FETCH_WEATHER_REJECTED: {
      return {
        ...initialState,
        weatherData: [],
        fetchingStatus: {
          fetching: false,
          fetched: false,
          error: action.payload.e?.message || 'Unknown Error',
        },
      };
    }
    case FETCHING_WEATHER_FULFILLED: {
      return {
        ...state,
        weatherData: action.payload.groupedWeatherData,
        fetchingStatus: {
          fetching: false,
          fetched: true,
          error: null,
        },
      };
    }
    default: {
       return state
    }
  }
};
