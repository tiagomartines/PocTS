import { WeatherEntity } from "@domain/entities/weather-entity";

export interface Repository {
  getWeather(cityName: string): WeatherEntity
}
