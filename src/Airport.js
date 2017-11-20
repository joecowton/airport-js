function Airport() {
  this.planes = [];
};

Airport.prototype.land = function (plane){
  this.planes.push(plane);
  plane.changeStatus();
  console.log(this.planes);
  return 'Plane has landed!'
};

Airport.prototype.takeOff = function (plane){
  this.planes.pop();
  plane.changeStatus();
  console.log(this.planes);
  return 'Plane has taken off!'
};
