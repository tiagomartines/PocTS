import { Repository } from "@domain/repositories/weather-repository"
import { RequestHandler } from "@domain/request-handler"
import { WeatherEntity } from "@domain/entities/weather-entity";

export class GetWeatherHandler implements RequestHandler<string, WeatherEntity> {
  constructor(private repository: Repository) { }

  handle(data: string): WeatherEntity {
    return this.repository.getWeather("São Paulo");
  }
}
