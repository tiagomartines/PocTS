import { IRepository } from "./repository-interface"
import { IRequestHandler } from "./request-handler-interface"
import { WeatherEntity } from "./weather-entity";

export class GetWeatherInteractor implements IRequestHandler<string, WeatherEntity> {
  constructor(private repository: IRepository) { }

  handle(data: string): WeatherEntity {
    return this.repository.getWeather("São Paulo");
  }
}
