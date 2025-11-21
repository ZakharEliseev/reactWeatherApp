import { Component } from 'react';

import { WeatherSearchFormProps, WeatherSearchFormState } from '@/types/models';


export class WeatherSearchForm extends Component<WeatherSearchFormProps, WeatherSearchFormState> {
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
    const { onFetchData, onCitySubmit } = this.props;
    onFetchData(inputValue);
    onCitySubmit(inputValue)
    this.setState({
      inputValue: ''
    })
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
