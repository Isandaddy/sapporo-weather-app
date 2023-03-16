export class Atmosphere {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width = window.innerWidth;
    this.height = canvas.height = window.innerHeight;
    this.mistParticles = [];

    this.createMistParticles(100);
  }

  createMistParticles(count) {
    for (let i = 0; i < count; i++) {
      const x = Math.random() * this.width;
      const y = Math.random() * this.height;
      const radius = Math.random() * 20 + 10;
      const alpha = Math.random() * 0.5 + 0.1;
      this.mistParticles.push({x, y, radius, alpha});
    }
  }

  updateMistParticles() {
    for (let i = 0; i < this.mistParticles.length; i++) {
      const mistParticle = this.mistParticles[i];
      mistParticle.alpha -= 0.001;
      if (mistParticle.alpha < 0) {
        mistParticle.alpha = 0;
      }
    }
  }

  drawMistParticles() {
    this.ctx.fillStyle = "#0000007F";
    for (let i = 0; i < this.mistParticles.length; i++) {
      const mistParticle = this.mistParticles[i];
      this.ctx.beginPath();
      this.ctx.arc(mistParticle.x, mistParticle.y, mistParticle.radius, 0, Math.PI * 2);
      this.ctx.globalAlpha = mistParticle.alpha;
      this.ctx.fill();
    }
    this.ctx.globalAlpha = 1;
  }

  generateWeather() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.updateMistParticles();
    this.drawMistParticles();
    requestAnimationFrame(() => this.generateWeather());
  }
}

