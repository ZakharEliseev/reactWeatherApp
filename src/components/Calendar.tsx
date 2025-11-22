import { Component } from 'react';

import { Dispatch } from 'redux';

import { connect } from 'react-redux';

import { DateTimeService } from '@/services/dateTimeService';
import { actionFetchWeatherApiData } from '@/store/actions/weatherActions';

import { CalendarProps, CalendarState, RootState } from '../types/models';

import Weather  from './Weather';


class Calendar extends Component<CalendarProps, CalendarState> {
  private dateTimeService = new DateTimeService();
  constructor(props: CalendarProps) {
    super(props);
    this.state = {
      activeDay: this.dateTimeService.getToday(),
    };
  }

  handleSetActiveDay = (activeDay: string) => {
    this.setState({activeDay});
  };

  render() {
    const { weatherData } = this.props;
    const days = Object.keys(weatherData);
    const { activeDay } = this.state;
    return (
      <>
        <ul className="calendar">
          {days.map((day): any => {
            return (
              <li
                className={day === activeDay ? 'calendarItem activeDate' : 'calendarItem'}
                key={day}
                onClick={() => this.handleSetActiveDay(day)}>
                <h2 className="calendarDay">{this.dateTimeService.format(day, 'D')}</h2>
                <div className="calendarHeader">
                  <p className="calendarHeaderMonth">{this.dateTimeService.getMonth(day)}</p>
                  <p className="calendarHeaderWeekday">{this.dateTimeService.getWeekday(day)}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <Weather activeDay={this.state.activeDay} weatherData={{}} />
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    cityName: state.cityName,
    weatherData: state.weatherData,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  actionFetchWeatherApiData: (cityName: string) => dispatch(actionFetchWeatherApiData(cityName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
