class Monster{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/m2.png");
        this.exp = loadImage("images/f3.png")
        this.Visibility=255;
        World.add(world, this.body);
     
    }
      
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
      /*
      kaboom(){
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility-1;
        //tint(255,255);
        //image(this.exp,400, 400, 300, 200);
        pop();
      }
      
     display(){
      var angle = this.body.angle;
      if(bg !== true ){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
      }
      }    
    
    

*/
      score(){
        if(this.body.Visibility===0){
          console.log("score increase by 1");
          score = score +1;
        }
      }
    
}
