import { GetWeatherInteractor } from "./get-weather-interactor";
import { WeatherRepository } from "./weather-repository";

let repository = new WeatherRepository();
let interactor = new GetWeatherInteractor(repository);
console.log(interactor.handle('São Paulo'));
