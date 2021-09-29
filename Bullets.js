class Bullets{
    constructor(x, y,r) {
        var options = {
            isStatic:true,
            'restitution':0.5,
            'friction':1.0,
            'density':0.5
        }
        this.body = Bodies.circle(x, y,r, options);
        this.r = r;
        this.image = loadImage("images/b1.png");
        this.trajectory=[]
        World.add(world, this.body);
        this.Visibility=0;
      }
      
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS)
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
      }
      /*
      display(){
        var position=this.body.position;
        var angle = this.body.angle;

        if(bx !== true ){
          
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          ellipseMode(RADIUS)
          imageMode(CENTER);
          image(this.image, 0, 0, this.r, this.r);
          this.trajectory.push(position);
          for(var i=0;i<this.trajectory.length;i++);
          (
            image(this.image,this.trajectory[i][0],this.trajectory[i][1])
          )
          pop();;
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          pop();
        }
       }
       */
    }