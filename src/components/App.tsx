import { Component } from 'react';

import { connect } from 'react-redux';

import { AppProps, RootState } from '../types/models';

import Calendar from './Calendar';
import WeatherSearchForm from './WeatherSearchForm';

export class App extends Component<AppProps> {

  render() {
    const { error, cityName } = this.props;
    return (
      <>
        <h1 className="city">{ error ? error : cityName}</h1>
        <WeatherSearchForm/>
        <Calendar />
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    cityName: state.cityName,
    weatherData: state.weatherData,
    error: state.fetchingStatus.error,
  };
};

export default connect(mapStateToProps)(App);