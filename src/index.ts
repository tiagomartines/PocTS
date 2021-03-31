import { GetWeatherHandler } from "src/domain-layer/use-cases/queries/get-weather/get-weather-handler";
import { MemoryRepository } from "src/data-layer/repositories/memory-repository";

const interactor = new GetWeatherHandler(
  new MemoryRepository()
);

console.log(interactor.handle("São Paulo"));
