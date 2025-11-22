export interface AppProps {
  cityName: string;
  weatherData: GroupedForecast;
  error: string | null;
}

export interface WeatherSearchFormState {
  inputValue: string;
}

export interface WeatherSearchFormProps {
  actionGetCityName: (cityName: string) => void;
  actionFetchWeatherApiData: (cityName: string) => void;
}

export interface CalendarProps {
  weatherData: GroupedForecast;
}

export interface CalendarState {
  activeDay: string;
}

export interface WeatherProps {
  activeDay: string;
  weatherData: GroupedForecast;
}

export type GroupedForecast = {
  [date: string]: WeatherEntry[];
};

export interface WeatherEntry {
  time: string;
  temp: number;
  description: string;
  icon: string;
  wind: number;
  pressure: number;
  humidity: number;
}

export interface ForecastResponseItem {
  dt_txt: string;
  wind: { speed: number };
  main: { temp: number; pressure: number; humidity: number };
  weather: Array<{ description: string; icon: string }>;
}

export interface RootState {
  cityName: string;
  weatherData: GroupedForecast;
  fetchingStatus: {
    fetching: boolean;
    fetched: boolean;
    error: string | null;
  };
}
