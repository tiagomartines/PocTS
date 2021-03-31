import { WeatherEntity } from "src/domain-layer/entities/weather-entity";

export interface Repository {
  getWeather(cityName: string): WeatherEntity
}
