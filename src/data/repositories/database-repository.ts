import { Repository } from "@domain/repositories/weather-repository";
import { WeatherEntity } from "@domain/entities/weather-entity";

export class DatabaseRepository implements Repository {
  getWeather(cityName: string): WeatherEntity {
    return new WeatherEntity("Database", 27, 32);
  }
}
