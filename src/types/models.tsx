export interface AppProps {
  cityName: string;
  weatherData: [];
  error: string;

}

export interface WeatherSearchFormState {
  inputValue: string;
}

export interface WeatherSearchFormProps {
  actionGetCityName: (cityName: string) => void;
  actionFetchWeatherApiData: (cityName: string) => void;
}

export interface CalendarProps {
  weatherData: [];
}

export interface CalendarState {
  activeDay: string;
}

export interface WeatherProps {
  activeDay: string;
  weatherData: GroupedForecast;
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