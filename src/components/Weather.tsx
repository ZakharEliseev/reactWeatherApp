import { Component } from 'react';

import { connect } from 'react-redux';

import { WeatherProps } from '@/types/models';


export class Weather extends Component<WeatherProps> {
  constructor(props: WeatherProps) {
    super(props);
  }

  render() {
    const { weatherData, activeDay } = this.props;
    const currentDay = weatherData[activeDay];
    return (
      <ul className="weather">
        {!currentDay ? (
          <li className="pureData"> Данные не были загружены.</li>
        ) : (
          currentDay.map((data: any, index: number) => {
            return (
              <li key={index} className="weatherItem">
                <div className="weatherTemp">
                  <p className="weatherTempTime">{data.time}</p>
                  <p className="weatherTempDegree">{data.temp} °C</p>
                </div>
                <div className="weatherDescr">
                  <p className="weatherDescrText">{data.description}</p>
                  <img className="weatherDescrIcon" src={`./src/img/icons/${data.icon}@2x.png`} />
                </div>
                <div className="weatherWind">
                  <p className="weatherWindTitle">Скорость ветра</p>
                  <p className="weatherWindMetric">{data.wind} м/с</p>
                </div>
                <div className="weatherPressure">
                  <p className="weatherPressureTitle">Атмосферное давление</p>
                  <p className="weatherPressureMetric">{data.pressure} мм рт.</p>
                </div>
                <div className="weatherHumidity">
                  <p className="weatherHumidityTitle">Влажность</p>
                  <p className="weatherHumidityMetric">{data.humidity}</p>
                </div>
              </li>
            );
          })
        )}
      </ul>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    weatherData: state.weatherData,
  };
};

export default connect(mapStateToProps, null)(Weather);