describe('Airport',function() {

  var airport_1;
  var airport_2;

  var plane;

  describe('when instructing plane', function(){

    describe('to land', function(){

      airport_1 = new Airport();
      plane = new Plane();
      weather = new Weather();

      it('updates the planes array', function(){
        airport_1.land(plane, 0.1);
        expect(airport_1.planes.length).toEqual(1);
      });

      it('It returns a message', function(){
        expect(airport_1.land(plane, 0.1)).toEqual("Plane has landed!");
      });

      it('prevents landing when stormy', function(){
        expect(airport_1.land(plane, 0.9)).toEqual("Weather is stormy, can't land!");
        expect(airport_1.planes.length).toEqual(2);
      });

    });

    describe('to take off', function(){
      airport_2 = new Airport();
      plane = new Plane();
      it('updates the planes array', function(){
        airport_2.land(plane, 0.1);
        airport_2.takeOff(plane);
        expect(airport_2.planes.length).toEqual(0);
      });

      it('It returns a message', function(){
        airport_2.land(plane, 0.1);
        expect(airport_2.takeOff(plane)).toEqual("Plane has taken off!");
      });
    });
  });
});
