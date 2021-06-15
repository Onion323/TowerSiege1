var world;

class Slingshot {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.x = x
      this.y = y
      this.body = Bodies.circle(50,200,20);
      World.add(world, this.body);
    }
    display(){
     var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(this.x, this.y, this.width, this.height);
    }
  };