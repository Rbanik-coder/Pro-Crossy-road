class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.spt = createSprite(this.x,this.y,50,50);
        this.spt.shapeColor="white"
    }

    move(xdir,ydir){
        this.spt.x += xdir;
        this.spt.y += ydir;
    }
}