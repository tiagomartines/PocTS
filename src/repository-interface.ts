import { WeatherEntity } from "./weather-entity";

export interface IRepository {
  getWeather(cityName: string): WeatherEntity
}
