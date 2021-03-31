import { GetWeatherHandler } from "@domain/use-cases/queries/get-weather/get-weather-handler";
import { MemoryRepository } from "@data/repositories/memory-repository";

const interactor = new GetWeatherHandler(
  new MemoryRepository()
);

console.log(interactor.handle("São Paulo"));
