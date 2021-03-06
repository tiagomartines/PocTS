import { Repository } from "@domain/repositories/weather-repository";
import { WeatherEntity } from "@domain/entities/weather-entity";

export class MemoryRepository implements Repository {
  getWeather(cityName: string): WeatherEntity {
    return new WeatherEntity("Memory", 27, 32);
  }
}
