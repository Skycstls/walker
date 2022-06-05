particles = []
function setup() {
  createCanvas(400, 400);
  pixelDensity(2)
  noSmooth()
  for (var i = 0; i < 1; i++) {
    particles.push(new Walker(200, 200))
  }
}

function draw() {
  background(220)
for(var i = 0; i < particles.length; i++) {
  particles[i].walk()
  particles[i].display()
}
  }

class Walker {
  constructor(x,y){
    this.x = x
    this.y = y
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
  }
  right(){
    this.x += 1;
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
    stroke(this.color);
    point(this.x,this.y);
    
    }
  }