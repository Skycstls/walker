particles = []

function setup() {
  createCanvas(displayWidth, displayHeight);
  pixelDensity(2)
  noSmooth()
  for (var i = 0; i < 20; i++) {
    particles.push(new Walker(displayWidth/2, displayHeight/2))
  }
}

function draw() {
  //background(220)
for(var i = 0; i < particles.length; i++) {
  particles[i].walk()
  particles[i].display()
}
  }

class Walker {
  constructor(x,y){
    this.x = x
    this.y = y
    this.x2 = x
    this.color = 0
    this.direccion = 0
  }
  up(){
    this.y += 1;
  }
  down(){
    this.y -= 1;
  }
  left(){
    this.x -= 1;
    this.x2 += 1;
  }
  right(){
    this.x += 1;
    this.x2 -= 1;
  }

  walk(){
    this.direccion = int(random(0,4))
    if(this.direccion == 0){
      this.up();
    }
    if(this.direccion == 1){
      this.down();
    }
    if(this.direccion == 2){
      this.left();
    }
    if(this.direccion == 3){
      this.right();
    }

  }
  display(){
    noStroke();
    colorMode(HSB)
    stroke(0,0,0,0.5);
    point(this.x,this.y);
    point(this.x2,this.y);
    }
  }