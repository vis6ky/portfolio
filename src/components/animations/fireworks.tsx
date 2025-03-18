// const canvas = document.getElementById("fireworksCanvas") as HTMLCanvasElement;
// const ctx: any = canvas.getContext("2d");

// const random = (min: number, max: number) => Math.random() * (max - min) + min;

// const getRandomColor = () => {
//     const hue = random(0, 360);
//     const saturation = random(70, 100);
//     const lightness = random(50, 70);
//     return { hue, color: `hsl(${hue}, ${saturation}%, ${lightness}%)` };
// };

// const Fireworks = () => {
//     let exploded = false;
//     const history: any = [];
//     let particles: any = [];
//     const color: string = getRandomColor().color;
//     let x = random(100, canvas.width - 100);
//     let y = canvas.height;
//     const isTextFirework = false;
//     const speed = isTextFirework ? random(4, 6) : random(3, 7);
//     const angle = random((-5 * Math.PI) / 12, (-7 * Math.PI) / 12);
//     const vx = Math.cos(angle) * speed;
//     let vy = Math.sin(angle) * speed;
//     const gravity = 0.015;
//     const maxHistory = 15;
//     let done = false;
//     let hue = getRandomColor().hue;
//     const targetY = isTextFirework
//       ? random(canvas.height / 3, canvas.height / 2.5)
//       : random(canvas.height / 4, canvas.height / 2);
    
//     const draw = () => {
//         if (!exploded) {
//           ctx.save();
//           ctx.globalAlpha = 0.5;
//           history.forEach((point: any) => {
//             ctx.beginPath();
//             ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
//             ctx.fillStyle = color;
//             ctx.fill();
//             ctx.closePath();
//           });
//           ctx.restore();
    
//           ctx.save();
//           ctx.shadowBlur = 10;
//           ctx.shadowColor = color;
//           ctx.beginPath();
//           ctx.arc(x, y, 3, 0, Math.PI * 2);
//           ctx.fillStyle = color;
//           ctx.fill();
//           ctx.closePath();
//           ctx.restore();
//         }
    
//         particles.forEach((particle: any) => particle.draw());
//     }

//     const update = () => {
//         if (!exploded) {
//             vy += gravity;
//             x += vx + random(-0.5, 0.5);
//             y += vy;
      
//             history.push({ x: x, y: y });
//             if (history.length > maxHistory) {
//               history.shift();
//             }
      
//             if (vy >= 0 || y <= targetY) {
//               exploded = true;
//               this.explode();
//             }
//           }
      
//           particles.forEach((particle: any) => particle.update());
//           particles = particles.filter((particle: any) => !particle.done);
      
//           if (exploded && particles.length === 0) {
//             done = true;
//           }
//     }
// }

//     const createStarParticles = (color: any) => {
//         const particleCount = 100;
//         for (let i = 0; i < particleCount; i++) {
//           const angle = (i / particleCount) * Math.PI * 2;
//           const speed = random(2, 6);
//           particles.push(
//             Particle(
//               x,
//               y,
//               color === "green" ? "hsl(120, 100%, 50%)" : color,
//               angle,
//               speed,
//               "star"
//             )
//           );
//         }
//       }

//     const explode = () => {
//         let explosionType;
    
//         if (
//           (hue >= 0 && hue <= 30) ||
//           (hue >= 330 && hue <= 360)
//         ) {
//           explosionType = "heart";
//         } else if (hue >= 180 && hue <= 240) {
//           explosionType = "text";
//         } else if (hue >= 90 && hue <= 150) {
//           explosionType = "greenStar";
//         } else {
//           explosionType = Math.random() < 0.5 ? "round" : "star";
//         }
    
//         const particleCountMap = {
//           round: { count: Math.floor(random(80, 120)), angleOffset: 0 },
//           star: { count: 50, angleOffset: Math.PI / 5 },
//           heart: { count: 100, angleOffset: 0 },
//           text: { count: 200, angleOffset: 0 },
//           greenStar: { count: 100, angleOffset: 0 }
//         };
    
//         const { count: particleCount, angleOffset } = particleCountMap[
//           explosionType
//         ] || { count: 100, angleOffset: 0 };
    
//         if (explosionType === "text") {
//           const texts = ["Happy New Year", "codepen", "2025"];
//           const selectedText = texts[Math.floor(Math.random() * texts.length)];
//         //   this.createTextParticles(selectedText, 100);
//         } else if (explosionType === "greenStar") {
//         //   this.createStarParticles("green");
//         } else {
//           for (let i = 0; i < particleCount; i++) {
//             let angle;
//             let speed = random(1, 10);
//             if (explosionType === "round") {
//               angle = random(0, Math.PI * 2);
//             } else if (explosionType === "star") {
//               angle = (i / particleCount) * Math.PI * 2 + angleOffset;
//             } else if (explosionType === "heart") {
//               const t = (i / particleCount) * Math.PI * 2;
//               const x = 16 * Math.pow(Math.sin(t), 3);
//               const y = -(
//                 13 * Math.cos(t) -
//                 5 * Math.cos(2 * t) -
//                 2 * Math.cos(3 * t) -
//                 Math.cos(4 * t)
//               );
//               angle = Math.atan2(y, x);
//               speed = Math.sqrt(x * x + y * y) / 5;
//             }
//             particles.push(
//               Particle(x, y, color, angle, speed, explosionType)
//             );
//           }
//         }
//       }
// }

// const Particle = (x: any, y: any, color: any, angle: any= null, speed: any = null, explosionType: string="round") => {
//     let px = x;
//     let py = y;
//     let pcolor = color;
//     let size = random(1, 3);
//     let pspeed = speed !== null ? speed : random(1, 10);
//     let pangle = angle !== null ? angle : random(0, Math.PI * 2);
//     let gravity = 0.05;
//     let friction = 0.98;
//     let opacity = 1;
//     let done = false;
//     let vx = Math.cos(angle) * speed;
//     let vy = Math.sin(angle) * speed;
//     let decay = random(0.015, 0.03);
//     let history: any = [];
//     let maxHistory = 5;
//     let pexplosionType = explosionType;

//     const update = () => {
//         history.push({ x: x, y: y });
//         if (history.length > maxHistory) {
//           history.shift();
//         }
    
//         const wind = 0.002;
//         vx += wind * (Math.random() - 0.5);
    
//         vx *= friction;
//         vy *= friction;
//         vy += gravity;
//         x += vx;
//         y += vy;
//         opacity -= decay;
    
//         if (opacity <= 0.01) {
//           done = true;
//         }
//       }

//     const draw = () => {
//         ctx.save();
//         ctx.globalAlpha = opacity * 0.5;
//         ctx.beginPath();
//         if (history.length > 0) {
//           ctx.moveTo(history[0].x, history[0].y);
//           history.forEach((point: any) => ctx.lineTo(point.x, point.y));
//         } else {
//           ctx.moveTo(x, y);
//         }
//         ctx.strokeStyle = color;
//         ctx.lineWidth = 0.5;
//         ctx.stroke();
//         ctx.closePath();
//         ctx.restore();
    
//         ctx.save();
//         ctx.globalAlpha = opacity;
//         ctx.shadowBlur = 5;
//         ctx.shadowColor = color;
//         ctx.beginPath();
//         ctx.arc(x, y, size, 0, Math.PI * 2);
//         ctx.fillStyle = color;
//         ctx.fill();
//         ctx.closePath();
//         ctx.restore();
//       }
// }  

  
//   class Firework {
//     constructor(isTextFirework = false, text = "") {
//       this.isTextFirework = isTextFirework;
//       this.text = text;
//       this.reset();
//     }
  
//     reset() {
//       this.x = random(100, canvas.width - 100);
//       this.y = canvas.height;
//       this.speed = this.isTextFirework ? random(4, 6) : random(3, 7);
//       const angle = random((-5 * Math.PI) / 12, (-7 * Math.PI) / 12);
//       this.vx = Math.cos(angle) * this.speed;
//       this.vy = Math.sin(angle) * this.speed;
//       this.gravity = 0.015;
//       const colorObj = getRandomColor();
//       this.hue = colorObj.hue;
//       this.color = colorObj.color;
//       this.exploded = false;
//       this.particles = [];
//       this.targetY = this.isTextFirework
//         ? random(canvas.height / 3, canvas.height / 2.5)
//         : random(canvas.height / 4, canvas.height / 2);
//       this.history = [];
//       this.maxHistory = 15;
//       this.done = false;
//     }
  
//     update() {
//       if (!this.exploded) {
//         this.vy += this.gravity;
//         this.x += this.vx + random(-0.5, 0.5);
//         this.y += this.vy;
  
//         this.history.push({ x: this.x, y: this.y });
//         if (this.history.length > this.maxHistory) {
//           this.history.shift();
//         }
  
//         if (this.vy >= 0 || this.y <= this.targetY) {
//           this.exploded = true;
//           this.explode();
//         }
//       }
  
//       this.particles.forEach((particle) => particle.update());
//       this.particles = this.particles.filter((particle) => !particle.done);
  
//       if (this.exploded && this.particles.length === 0) {
//         this.done = true;
//       }
//     }
  
//     explode() {
//       let explosionType;
  
//       if (
//         (this.hue >= 0 && this.hue <= 30) ||
//         (this.hue >= 330 && this.hue <= 360)
//       ) {
//         explosionType = "heart";
//       } else if (this.hue >= 180 && this.hue <= 240) {
//         explosionType = "text";
//       } else if (this.hue >= 90 && this.hue <= 150) {
//         explosionType = "greenStar";
//       } else {
//         explosionType = Math.random() < 0.5 ? "round" : "star";
//       }
  
//       const particleCountMap = {
//         round: { count: Math.floor(random(80, 120)), angleOffset: 0 },
//         star: { count: 50, angleOffset: Math.PI / 5 },
//         heart: { count: 100, angleOffset: 0 },
//         text: { count: 200, angleOffset: 0 },
//         greenStar: { count: 100, angleOffset: 0 }
//       };
  
//       const { count: particleCount, angleOffset } = particleCountMap[
//         explosionType
//       ] || { count: 100, angleOffset: 0 };
  
//       if (explosionType === "text") {
//         const texts = ["Happy New Year", "codepen", "2025"];
//         const selectedText = texts[Math.floor(Math.random() * texts.length)];
//         this.createTextParticles(selectedText, 100);
//       } else if (explosionType === "greenStar") {
//         this.createStarParticles("green");
//       } else {
//         for (let i = 0; i < particleCount; i++) {
//           let angle;
//           let speed = random(1, 10);
//           if (explosionType === "round") {
//             angle = random(0, Math.PI * 2);
//           } else if (explosionType === "star") {
//             angle = (i / particleCount) * Math.PI * 2 + angleOffset;
//           } else if (explosionType === "heart") {
//             const t = (i / particleCount) * Math.PI * 2;
//             const x = 16 * Math.pow(Math.sin(t), 3);
//             const y = -(
//               13 * Math.cos(t) -
//               5 * Math.cos(2 * t) -
//               2 * Math.cos(3 * t) -
//               Math.cos(4 * t)
//             );
//             angle = Math.atan2(y, x);
//             speed = Math.sqrt(x * x + y * y) / 5;
//           }
//           this.particles.push(
//             new Particle(this.x, this.y, this.color, angle, speed, explosionType)
//           );
//         }
//       }
//     }
  
//     createTextParticles(text, fontSize) {
//       const tempCanvas = document.createElement("canvas");
//       const tempCtx = tempCanvas.getContext("2d");
  
//       tempCtx.font = `${fontSize}px Arial`;
  
//       const textMetrics = tempCtx.measureText(text);
//       tempCanvas.width = textMetrics.width;
//       tempCanvas.height = fontSize * 1.2;
  
//       tempCtx.font = `${fontSize}px Arial`;
//       tempCtx.fillStyle = "white";
//       tempCtx.textBaseline = "middle";
//       tempCtx.fillText(text, 0, tempCanvas.height / 2);
  
//       const imageData = tempCtx.getImageData(
//         0,
//         0,
//         tempCanvas.width,
//         tempCanvas.height
//       ).data;
  
//       const density = 4;
//       for (let y = 0; y < tempCanvas.height; y += density) {
//         for (let x = 0; x < tempCanvas.width; x += density) {
//           const index = (y * tempCanvas.width + x) * 4;
//           const alpha = imageData[index + 3];
//           if (alpha > 128) {
//             const offsetX = x - tempCanvas.width / 2;
//             const offsetY = y - tempCanvas.height / 2;
  
//             const posX = this.x + offsetX;
//             const posY = this.y + offsetY;
  
//             const angle = 0;
//             const speed = random(0.5, 1.5);
  
//             this.particles.push(
//               new Particle(posX, posY, this.color, angle, speed, "text")
//             );
//           }
//         }
//       }
//     }
  
//     createStarParticles(color) {
//       const particleCount = 100;
//       for (let i = 0; i < particleCount; i++) {
//         const angle = (i / particleCount) * Math.PI * 2;
//         const speed = random(2, 6);
//         this.particles.push(
//           new Particle(
//             this.x,
//             this.y,
//             color === "green" ? "hsl(120, 100%, 50%)" : this.color,
//             angle,
//             speed,
//             "star"
//           )
//         );
//       }
//     }
  
//     draw() {
//       if (!this.exploded) {
//         ctx.save();
//         ctx.globalAlpha = 0.5;
//         this.history.forEach((point) => {
//           ctx.beginPath();
//           ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
//           ctx.fillStyle = this.color;
//           ctx.fill();
//           ctx.closePath();
//         });
//         ctx.restore();
  
//         ctx.save();
//         ctx.shadowBlur = 10;
//         ctx.shadowColor = this.color;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
//         ctx.fillStyle = this.color;
//         ctx.fill();
//         ctx.closePath();
//         ctx.restore();
//       }
  
//       this.particles.forEach((particle) => particle.draw());
//     }
//   }
  

export {}