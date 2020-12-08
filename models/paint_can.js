const PaintCan = function (size) {
  this.size = size;

};
PaintCan.prototype.isEmpty = function () {
  if (this.size === 0) {
    return true;
  } else {
    return false;
  }
};

PaintCan.prototype.makeEmpty = function(){
  this.size = 0;
}

module.exports = PaintCan;