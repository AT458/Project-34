class Monster {
    constructor(x, y, radius) {
        var options = {
            density: 1,
            frictionAir: 1
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("Images/Monster-01.png");
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.body);
    }
    display() {
        var monsterPos = this.body.position;

        push();
        translate(monsterPos.x, monsterPos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius);
        pop();
    }
}