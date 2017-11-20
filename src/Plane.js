function Plane(name) {
  this.isFlying  = true;
  this.name = name;
};

Plane.prototype.name = function(){
   return this.name;
};

Plane.prototype.isFlying = function(){
   return this.isFlying;
};

Plane.prototype.changeStatus = function(){
    this.isFlying = !this.isFlying
};
