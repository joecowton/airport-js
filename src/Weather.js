function Weather(){
};

Weather.prototype.isStormy = function(random = Math.random()) {
  if (Math.random() > 0.7) {
    return true
  };
  return false;
};
