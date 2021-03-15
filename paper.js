class paper{
    constructor(x,y,r){
        this.x=x
        this.y=y
        this.r=r
        this.h=100
        this.w=50
        this.img=loadImage("paper.png")
        this.body=Bodies.circle(this.x,this.y,this.r/2,{isStatic:false,restitution:0,density:1.2,friction:1})
        Matter.World.add(world,this.body)
        
    }
    Display(){
      
        push()
        imageMode(CENTER)
        fill(230)
        translate(this.body.position.x,this.body.position.y) 
        rotate(this.body.angle)
        image(this.img,0,0,this.r,this.r)
       // ellipse(0,0,this.r)
       pop()
    }
    }
    function keyPressed(){

        if (keyCode===(UP_ARROW)){
            Matter.Body.applyForce(ball1.body,ball1.body.position,{x:240,y:-200})
        }
    }