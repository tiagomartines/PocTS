import { GetWeatherHandler } from "@domain/use-cases/queries/get-weather/get-weather-handler";
import { MemoryRepository } from "@data/repositories/memory-repository";

export class WeatherPresenter {
  private _interactor: GetWeatherHandler;

  constructor() {
    this._interactor = new GetWeatherHandler(
      new MemoryRepository()
    );
  }

  getWeather(cityName: string): string {
    return JSON.stringify(this._interactor.handle(cityName));
  }
}
