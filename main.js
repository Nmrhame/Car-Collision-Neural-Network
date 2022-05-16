const canvas = document.getElementById('myCanvas');
canvas.height = window.innerHeight;
canvas.width = 200;

const context = canvas.getContext("2d");
const road = new Road(canvas.width/2, canvas.width*0.9);
const car = new Car(road.getLaneCenter(3), 100, 30, 50);
car.draw(context);

AnimationEffect();

function AnimationEffect(){
    car.update();
    canvas.height = window.innerHeight;

    context.save();
    context.translate(0, -car.y + canvas.height*.7);
    road.draw(context);
    car.draw(context);
    context.restore();
    requestAnimationFrame(AnimationEffect);
}