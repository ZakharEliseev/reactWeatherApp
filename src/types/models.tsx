export interface AppProps {
  cityName: string;
  actionGetCityName: (cityName: string) => void;
  actionFetchWeatherApiData: (cityName: string) => void;
};

export interface WeatherSearchFormState {
  inputValue: string;
};

export interface WeatherSearchFormProps {
  onCitySubmit: (cityName: string) => void;
  onFetchData: (cityName: string)  => void;
}