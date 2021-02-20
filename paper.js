class Paper{
    constructor(){
        this.paper=Bodies.circle(200,200,25,{restitution:0.5,density:2});
        this.image=loadImage("paper.png");
        World.add(world,this.paper);
       
    }
    display(){
        push();
        translate(this.paper.position.x,this.paper.position.y);
        rotate(this.paper.angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }

    
}