// var Airport = function() {};

function Airport() {
  this.planes = [];
};

Airport.prototype.land = function (plane){
  this.planes.push(plane);
  console.log(this.planes);
  return 'Plane has landed!'
};

Airport.prototype.takeOff = function (plane){
  this.planes.pop();
  console.log(this.planes);
  return 'Plane has taken off!'
};
