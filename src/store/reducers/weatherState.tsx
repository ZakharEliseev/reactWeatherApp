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
        fetching: true,
      };
    }
    case FETCH_WEATHER_REJECTED: {
      return {
        ...state, fetching: false, error: action.payload.e
      }
    }
    case FETCHING_WEATHER_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        weatherData: [action.payload.data]
      }
    }
    default: {
       return state
    }
  }
};
