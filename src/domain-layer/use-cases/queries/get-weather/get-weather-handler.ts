import { Repository } from "src/domain-layer/repositories/weather-repository"
import { RequestHandler } from "src/domain-layer/request-handler"
import { WeatherEntity } from "src/domain-layer/entities/weather-entity";

export class GetWeatherHandler implements RequestHandler<string, WeatherEntity> {
  constructor(private repository: Repository) { }

  handle(data: string): WeatherEntity {
    return this.repository.getWeather("São Paulo");
  }
}
