const Decorator = function () {
  this.paintStock = []
};

Decorator.prototype.addPaint = function (paintCan) {
  this.paintStock.push(paintCan);
}

Decorator.prototype.paintTotal = function () {
  total = 0;
  for (var paint of this.paintStock) {
    total += paint.size;
  }
  return total;
}

Decorator.prototype.checkIfEnoughPaint = function (room) {
  if (this.paintTotal() >= room.area){
    return true
  }else{
  return false
  }
}

Decorator.prototype.paint = function (room) {
  if (this.checkIfEnoughPaint(room) && room.toBePainted){
    // remove paint cans
    paintUsed = room.area;
    while(paintUsed>0){
      //remove the whole can
      if (paintUsed>= this.paintStock[this.paintStock.length-1]){
        paintUsed-=this.paintStock[this.paintStock.length-1].size
        this.paintStock.pop()
      }else{ // reduce can content
        this.paintStock[this.paintStock.length-1].size-=paintUsed
        paintUsed=0;
      }

    }
    // set room to painted
    room.painted = true;
    // unset room to be painted
    room.toBePainted = false
  }
}

module.exports = Decorator;