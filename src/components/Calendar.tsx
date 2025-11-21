import { Component } from 'react';


import { DateTimeService } from '@/services/dateTimeService';

import { CalendarProps, CalendarState } from '../types/models';

import { Weather } from './Weather';

export class Calendar extends Component<CalendarProps, CalendarState> {
  private dateTimeService = new DateTimeService();
  constructor(props: CalendarProps) {
    super(props);
    this.state = {
      activeDay: this.dateTimeService.getToday(),
    };
  }

  handleSetActiveDay = (activeDay: any) => {
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
        <Weather weatherData={weatherData} activeDay={this.state.activeDay} />
      </>
    );
  }
}
