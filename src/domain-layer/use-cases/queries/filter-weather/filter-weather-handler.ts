import { Repository } from "src/domain-layer/repositories/weather-repository"
import { RequestHandler } from "src/domain-layer/request-handler"
import { WeatherEntity } from "src/domain-layer/entities/weather-entity";
import { FilterWeatherRequest } from "src/domain-layer/use-cases/queries/filter-weather/filter-weather-request";
import { FilterWeatherResponse } from "src/domain-layer/use-cases/queries/filter-weather/filter-weather-response";

export class FilterWeatherHandler implements RequestHandler<FilterWeatherRequest, FilterWeatherResponse> {
  constructor(private repository: Repository) { }

  handle(request: FilterWeatherRequest): FilterWeatherResponse {
    let result: FilterWeatherResponse = [
      new WeatherEntity("Chuva", 10, 20),
    ];
    
    return result;
  }
}
