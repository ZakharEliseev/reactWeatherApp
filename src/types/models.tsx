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
