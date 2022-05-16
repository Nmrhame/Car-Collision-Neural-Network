class Car{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 0;
        this.acceralation = 0.2;
        this.maxSpeed = 3;
        this.friction = 0.05;
        this.control = new Control();
    }

    update(){
        if(this.control.forward){
            this.speed += this.acceralation;
        }
        if(this.control.reverse){
            this.speed -= this.acceralation;
        }
        if(this.control.left){
            this.x -= 2;
        }
        if(this.control.right){
            this.x += 2;
        }
        if(this.speed > this.maxSpeed){
            this.speed = this.maxSpeed;
        }
        if(this.speed < -this.maxSpeed){
            this.speed = -this.maxSpeed/2;
        }
        if(this.speed > 0){
            this.speed -= this.friction;
        }
        if(this.speed < 0){
            this.speed += this.friction;
        }  
        this.y -= this.speed;
    }

    draw(context){
        context.beginPath();
        context.rect(
            this.x - this.width/2, 
            this.y - this.height/2, 
            this.width, 
            this.height
        );
        context.fill();
    }
}