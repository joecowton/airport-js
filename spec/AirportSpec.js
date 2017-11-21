describe('Airport',function() {

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane("Plane");
    weather = new Weather();
    Math.random = function() { return 0.2; };
  });

  describe('when instructing plane', function(){
    describe('to land', function(){

      it('updates the planes array', function(){
        airport.land(plane);
        expect(airport.planes.length).toEqual(1);
      });

      it('It returns a message', function(){
        expect(airport.land(plane)).toEqual("Plane has landed!");
      });

      it('Returns error if already landed', function(){
        airport.land(plane);
        expect(function() {airport.land(plane)}).toThrow("Plane is already on the ground!")
      });
    });

    describe('to take off', function(){

      it('updates the planes array', function(){
        airport.land(plane);
        airport.takeOff(plane);
        expect(airport.planes.length).toEqual(0);
      });

      it('It returns a message', function(){
        airport.land(plane);
        expect(airport.takeOff(plane)).toEqual("Plane has taken off!");
      });

      it('Returns error if already flying', function(){
        expect(function() {airport.takeOff(plane)}).toThrow("Plane is already in the air!")
      });
    });

    describe('bad weather', function(){
      beforeEach(function() {
      });

      it('plane cannot take off when stormy', function(){

        airport.land(plane);
        spyOn(weather, 'isStormy').and.returnValue(true);
        expect(function() { airport.takeOff(plane)}).toThrow("Weather is stormy, can't take off!");
      });

      it('prevents landing when stormy', function(){
         spyOn(weather, 'isStormy').and.returnValue(true);
        expect(function() { airport.land(plane)}).toThrow("Weather is stormy, can't land!");
      });
    });
  });
});
