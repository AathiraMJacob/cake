class Person{
    constructor(x,y,r){
        var options = {
        restitution:1.2,
        density:0.01,
        friction:0.1,
        isStatic:true
        //frictionAir=0,
        }
        
       
       // this.image=loadImage("images/burger.png");
        this.body= Bodies.circle(x,y,r, options);
       
        this.r=r;
        World.add(world,this.body);

       // Matter.Body.setPosition(this.body,{x:-width,y:height/2})
    }
    display(){
       var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
      //  imageMode(CENTER);
        ellipseMode(RADIUS);
      ellipse(0,0,this.r,this.r)
      //image(this.image, 0,0,this.r);
        pop();
    }
}