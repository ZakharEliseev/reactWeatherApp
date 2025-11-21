export interface AppProps {
  cityName: string;
  weatherData: [];
  error: string;
  actionGetCityName: (cityName: string) => void;
  actionFetchWeatherApiData: (cityName: string) => void;
}

export interface WeatherSearchFormState {
  inputValue: string;
}

export interface WeatherSearchFormProps {
  onCitySubmit: (cityName: string) => void;
  onFetchData: (cityName: string) => void;
}

export interface CalendarProps {
  weatherData: [];
}

export interface CalendarState {
  activeDay: string;
}

export interface WeatherProps {
  weatherData: {
    [key: string]: any;
  };
  activeDay: string;
}

export type ForecastResponse = {
  list: Array<{
    dt_txt: string;
    main: { temp: number; pressure: number; humidity: number };
    weather: Array<{ description: string; icon: string }>;
    wind: { speed: number };
  }>;
};
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