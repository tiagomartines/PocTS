import { Repository } from "@domain/repositories/weather-repository"
import { RequestHandler } from "@domain/request-handler"
import { WeatherEntity } from "@domain/entities/weather-entity";
import { FilterWeatherRequest } from "@domain/use-cases/queries/filter-weather/filter-weather-request";
import { FilterWeatherResponse } from "@domain/use-cases/queries/filter-weather/filter-weather-response";

export class FilterWeatherHandler implements RequestHandler<FilterWeatherRequest, FilterWeatherResponse> {
  constructor(private repository: Repository) { }

  handle(request: FilterWeatherRequest): FilterWeatherResponse {
    let result: FilterWeatherResponse = [
      new WeatherEntity("Chuva", 10, 20),
    ];
    
    return result;
  }
}
