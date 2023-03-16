export class Clear {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
  }
  drawSun(x, y) {
    const sunColor = '#FFFF00'; // color of the sun
    const sunRadius = 50; // radius of each cloud puff
    // const cloudSpacing = 30; // spacing between cloud puffs
    
    this.ctx.beginPath();
    this.ctx.arc(x, y, sunRadius, 0, 2 * Math.PI);
    this.ctx.fillStyle = sunColor;
    this.ctx.fill();
  }

  generateWeather() {
    const sunOffset = 10; // offset from top-left corner of canvas
      const x = Math.random() * this.canvas.width / 2 + sunOffset;
      const y = Math.random() * this.canvas.height / 2 + sunOffset;
      this.drawSun(x, y);
  }
}