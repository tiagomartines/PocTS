import { IRepository } from "./repository-interface";
import { WeatherEntity } from "./weather-entity";

export class WeatherRepository implements IRepository {
  getWeather(cityName: string): WeatherEntity {
    return new WeatherEntity("Sol", 27, 32);
  }
}
