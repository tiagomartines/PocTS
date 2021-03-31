import { Repository } from "src/domain-layer/repositories/weather-repository";
import { WeatherEntity } from "src/domain-layer/entities/weather-entity";

export class MemoryRepository implements Repository {
  getWeather(cityName: string): WeatherEntity {
    return new WeatherEntity("Sol", 27, 32);
  }
}
