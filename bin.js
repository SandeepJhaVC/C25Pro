class Bin extends Base{
    constructor(){
        super(1350);
        this.width = 300;
        this.height = 10;
        this.body.position.y = 480;
        this.img = loadImage("dustbingreen.png");
    }
    display(){
        super.display();
        image(this.img,1130,325,380,170);
    }
}