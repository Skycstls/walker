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

  }
  walk(){
    this.x += random(-2,2)
    this.y += random(-2,2)
  }
  display(){
    noStroke()
    stroke(this.color)
    point(this.x,this.y);
    
    }
  }