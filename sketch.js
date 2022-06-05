particles = []

function setup() {
  createCanvas(displayWidth, displayHeight);
  pixelDensity(2)
  noSmooth()
  for (var i = 0; i < 100; i++) {
    particles.push(new Walker(displayWidth/2, random(0,displayHeight, particles)))
  }
    background(0)

}

function draw() {
for(var i = 0; i < particles.length; i++) {
  particles[i].walk()
  particles[i].display()
}
  }

class Walker {
  constructor(x,y,arr){
    this.x = x;
    this.y = y;
    this.x2 = x;
    this.color = 0;
    this.direccion = 0;
    this.pasos;
    this.size = 1;
    this.arr = arr;
  }
  up(steps){
    for(let i = 0; i < steps; i++){
    this.y += 1;
    this.display();
    }
  }
  down(steps){
    for(let i = 0; i < steps; i++){
      this.y -= 1;
      this.display();
      }
  }
  left(steps){
    for(let i = 0; i < steps; i++){
      this.x -= 1;
      this.x2 += 1;
      this.display();
      }
  }
  right(steps){
    for(let i = 0; i < steps; i++){
      this.x += 1;
      this.x2 -= 1;
      this.display();
      }
  }

  walk(){
    this.direccion = int(random(0,4))
    this.pasos = int(random(this.size, this.size*2))
    if(this.direccion == 0){
      this.up(this.pasos);
    }
    if(this.direccion == 1){
      this.down(this.pasos);
    }
    if(this.direccion == 2){
      this.left(this.pasos);
    }
    if(this.direccion == 3){
      this.right(this.pasos);
    }

  }
  clone(){
    if(frameCount%100 == 0){
        
      }
    }
  display(){
    noStroke();
    colorMode(HSB)
    fill(0,0,255,0.1);
    rect(this.x,this.y, this.size, this.size);
    rect(this.x2,this.y, this.size, this.size);
    }
  }