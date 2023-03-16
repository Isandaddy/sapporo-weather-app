export class Cloud {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
  }
  drawCloud(x, y) {
    const cloudColor = '#5555'; // color of the cloud
    const cloudRadius = 50; // radius of each cloud puff
    // const cloudSpacing = 30; // spacing between cloud puffs
    
    this.ctx.beginPath();
    this.ctx.arc(x, y, cloudRadius, 0, 2 * Math.PI);
    this.ctx.arc(x + cloudRadius, y, cloudRadius, 0, 2 * Math.PI);
    this.ctx.arc(x + cloudRadius * 2, y, cloudRadius, 0, 2 * Math.PI);
    this.ctx.arc(x + cloudRadius * 3, y, cloudRadius, 0, 2 * Math.PI);
    this.ctx.arc(x + cloudRadius * 2, y - cloudRadius, cloudRadius, 0, 2 * Math.PI);
    this.ctx.arc(x + cloudRadius, y - cloudRadius, cloudRadius, 0, 2 * Math.PI);
    this.ctx.arc(x + cloudRadius * 3, y - cloudRadius, cloudRadius, 0, 2 * Math.PI);
    this.ctx.arc(x + cloudRadius * 2, y - cloudRadius * 2, cloudRadius, 0, 2 * Math.PI);
    this.ctx.fillStyle = cloudColor;
    this.ctx.fill();
  }

  generateWeather() {
    this.canvas.width = window.innerWidth;
    // this.canvas.height = window.innerHeight;
    for (let i = 0; i < 7; i++) {
      const cloudOffset = 10; // offset from top-left corner of canvas
      const x = Math.random() * this.canvas.width / 2 + cloudOffset;
      const y = Math.random() * this.canvas.height / 2 + cloudOffset;
      this.drawCloud(x, y);
    }
  }
}