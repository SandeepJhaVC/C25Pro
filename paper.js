class Paper {
    constructor() {
        var options = {
            restitution : 0.3,
            density: 0.65,
            friction: 0.5,
            isStatic: false
        }
        this.body = Bodies.circle(50, 100, 30, options);
        this.img = loadImage("paper.png");

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        strokeWeight(2.9);
        imageMode(CENTER);
        stroke("white");
        fill("red");
        image(this.img,pos.x, pos.y, 55, 60);
        pop();
    }
};
