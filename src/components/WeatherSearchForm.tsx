import { Component } from 'react';

import { Dispatch } from 'redux';

import { connect } from 'react-redux';

import { actionFetchWeatherApiData, actionGetCityName } from '@/store/actions/weatherActions';
import { WeatherSearchFormProps, WeatherSearchFormState } from '@/types/models';

class WeatherSearchForm extends Component<WeatherSearchFormProps, WeatherSearchFormState> {
  constructor(props: WeatherSearchFormProps) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { inputValue } = this.state;
    this.props.actionGetCityName(inputValue);
    this.props.actionFetchWeatherApiData(inputValue);
    this.setState({
      inputValue: '',
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <form className="weatherForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="searchForm"
          className="weatherFormInput"
          value={inputValue}
          onChange={this.handleValueChange}
        />
        <button type="submit">Найти</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  actionGetCityName: (cityName: string) => dispatch(actionGetCityName(cityName)),
  actionFetchWeatherApiData: (cityName: string) => dispatch(actionFetchWeatherApiData(cityName)),
});

export default connect(null, mapDispatchToProps)(WeatherSearchForm);
