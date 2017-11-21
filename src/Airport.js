function Airport() {
  this.planes = [];
  this.weather = new Weather();
};

Airport.prototype.land = function (plane){
  if (this.weather.isStormy === true) throw "Weather is stormy, can't land!"
  this.planes.push(plane);
  plane.changeStatus();
  console.log(this.planes);
  return 'Plane has landed!'
};

Airport.prototype.takeOff = function (plane){
  if(this.weather.isStormy === true) throw "Weather is stormy, can't take off!"
  this.planes.pop();
  plane.changeStatus();
  console.log(this.planes);
  return 'Plane has taken off!'
};

Airport.prototype.isStormy = function () {
  return (Math.random() > 0.8) ? true : false;
};
