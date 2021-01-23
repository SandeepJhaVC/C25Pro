class Base {
    constructor(x) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, 410, 10, 150, options);
        this.img = loadImage("base.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        translate(pos.x,pos.y);
        image(this.img,0, 0, this.width, this.height);
        pop();
    }
}