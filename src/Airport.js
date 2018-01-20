function Airport() {
  this.planes = [];
  this.weather = new Weather();
};

Airport.prototype.land = function (plane){
  if (airport.full() === true) throw "Airport is full!"
  if (weather.isStormy() === true) throw "Weather is stormy, can't land!"
  if (plane.isFlying === false) throw "Plane is already on the ground!"
  this.planes.push(plane);
  plane.changeStatus();
  return 'Plane has landed!'
};

Airport.prototype.takeOff = function (plane){
  if( weather.isStormy() === true) throw "Weather is stormy, can't take off!"
  if (plane.isFlying === true) throw "Plane is already in the air!"
  this.planes.pop();
  plane.changeStatus();
  return 'Plane has taken off!'
};

Airport.prototype.isStormy = function () {
  return (Math.random() > 0.8) ? true : false;
};

Airport.prototype.full = function () {
  return this.planes.length >= 2 ? true : false;
};
