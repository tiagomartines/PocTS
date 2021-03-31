import { WeatherPresenter } from "@presentation/presenters/weather-presenter";

const presenter = new WeatherPresenter();
const json = presenter.getWeather("São Paulo");

console.log(json);
