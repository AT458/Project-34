class Hero {
    constructor(x, y, radius) {
        var options = {
            density: 1,
            frictionAir: 1
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("Images/Superhero-01.png");
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.body);
    }
    display() {
        var heroPos = this.body.position;

        push();
        translate(heroPos.x, heroPos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius);
        pop();
    }
}