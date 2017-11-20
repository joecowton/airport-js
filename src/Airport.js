function Airport() {
  this.planes = [];
};

Airport.prototype.land = function (plane, number = Math.random()){
  if(weather.isStormy(number)) {
    return "Weather is stormy, can't land!"
  };
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
