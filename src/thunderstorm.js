export class Thunder {
  constructor(canvas, clouds, rain) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.body = document.body;
    this.clouds = clouds;
    this.rain = rain;
  }

  generateWeather() {
    this.clouds.generateWeather();
    this.rain.generateWeather();
    this.body.classList.add('thunder_efect');
  }
}
