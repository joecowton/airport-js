function Airport() {
  this.planes = [];
};

Airport.prototype.land = function (plane){
    if(airport.isStormy === true) {
    return "Weather is stormy, can't land!"
    };
    (airport.isStormy === false)
    this.planes.push(plane);
    plane.changeStatus();
    console.log(this.planes);
    return 'Plane has landed!'

};

Airport.prototype.takeOff = function (plane){
  if(airport.isStormy === true) {
    return "Weather is stormy, can't take off!"
  };
  this.planes.pop();
  plane.changeStatus();
  console.log(this.planes);
  return 'Plane has taken off!'
};

Airport.prototype.isStormy = function () {
  if (random > 0.7) {
    return true
  };
  return false;
};
