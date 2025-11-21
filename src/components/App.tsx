import { Component } from 'react';

import { connect } from 'react-redux';

import { actionFetchWeatherApiData, actionGetCityName } from '@/store/actions/weatherActions';

import { AppProps } from '../types/models';

import {Calendar} from './calendar';
import { WeatherSearchForm } from './weatherSearchForm';

export class App extends Component<AppProps> {
  handleRenderCityName = (cityName: string) => {
    this.props.actionGetCityName(cityName)
  }

  handleFetchWeatherApiData = (cityName: string) => {
    this.props.actionFetchWeatherApiData(cityName);
  }

  render() {
    const { weatherData } = this.props;
    return (
      <>
        <h1 className="city">{this.props.cityName}</h1>
        <WeatherSearchForm
          onCitySubmit={this.handleRenderCityName}
          onFetchData={this.handleFetchWeatherApiData}
        />
        <Calendar weatherData={weatherData} />
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    cityName: state.cityName,
    weatherData: state.weatherData,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  actionGetCityName: (cityName: string) => dispatch(actionGetCityName(cityName)),
  actionFetchWeatherApiData: (cityName: string) => dispatch(actionFetchWeatherApiData(cityName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);