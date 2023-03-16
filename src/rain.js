export class Rain {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.drops = [];
  }

  generateWeather() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    for (let i = 0; i < 900; i++) {
      this.drops.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        speed: Math.random() * 5 + 5,
        length: Math.random() * 15 + 10
      });
    }

    this.loop();
  }

  loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.drops.length; i++) {
      const drop = this.drops[i];

      this.ctx.beginPath();
      this.ctx.moveTo(drop.x, drop.y);
      this.ctx.lineTo(drop.x, drop.y + drop.length);
      this.ctx.strokeStyle = "#5555";
      this.ctx.lineWidth = 2;
      this.ctx.stroke();

      drop.y += drop.speed;

      if (drop.y - drop.length > this.canvas.height) {
        drop.y = -drop.length;
      }
    }

    requestAnimationFrame(()=>this.loop());
  }

}
