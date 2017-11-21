describe('Airport',function() {

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane("Plane");
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
    });

    describe('bad weather', function(){
      beforeEach(function() {
        // spyOn(weather, 'isStormy').and.returnValue(true);
        // airport.weather.isStormy = function() { return true };
      });

      it('It returns a message', function(){
        airport.land(plane);
        airport.weather.isStormy = function() { return true };
        expect(airport.takeOff(plane)).toEqual("Weather is stormy, can't take off!");
      });

      it('prevents landing when stormy', function(){
        expect(airport.land(plane)).toEqual("Weather is stormy, can't land!");
      });
    });
  });
});
