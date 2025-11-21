import { Component } from 'react';

// eslint-disable-next-line no-restricted-imports
import dayjs from 'dayjs';

import { DateTimeService } from '@/services/dateTimeService';

import { CalendarProps, CalendarState } from '../types/models';

import { Weather } from './weather';



const dateTimeService = new DateTimeService();


export class Calendar extends Component<CalendarProps, CalendarState> {
  constructor(props: CalendarProps) {
    super(props);
    this.state = {
      activeDay: dayjs().format('YYYY-MM-DD'),
    };
  }

  handleSetActiveDay = (e: React.MouseEvent<HTMLLIElement>) => {
    const timeStamp = e.currentTarget.dataset.timestamp;
    if (timeStamp) {
      this.setState(() => ({
        activeDay: timeStamp,
      }));
    }
    return this.state;
  }

  render() {
    const { weatherData } = this.props;
    const days = Object.keys(weatherData);
    const { activeDay } = this.state;
    const classActiveDay = 'calendarItem activeDate';
    return (
      <>
        <ul className="calendar">
          {days.map((day): any => {
            return (
              <li
                data-timestamp={day}
                className={day === activeDay ? classActiveDay : 'calendarItem'}
                key={day}
                onClick={(e) => this.handleSetActiveDay(e)}>
                <h2 className="calendarDay">{dateTimeService.format(day, 'D')}</h2>
                <div className="calendarHeader">
                  <p className="calendarHeaderMonth">{dateTimeService.getMonth(day)}</p>
                  <p className="calendarHeaderWeekday">{dateTimeService.getWeekday(day)}</p>
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
