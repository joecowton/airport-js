describe('Airport',function() {

  var airport_1;
  var airport_2;

  var plane;

  describe('when instructing plane', function(){
    describe('to land', function(){
      beforeEach(function() {
        spyOn(airport_1, 'isStormy').and.returnValue(false);
      });

      airport_1 = new Airport();
      plane = new Plane();
      // weather = new Weather();

      it('updates the planes array', function(){
        airport_1.land(plane);
        expect(airport_1.planes.length).toEqual(1);
      });

      it('It returns a message', function(){
        // spyOn(airport_1, 'isStormy').and.returnValue(false);
        expect(airport_1.land(plane)).toEqual("Plane has landed!");
      });
    });

    describe('to take off', function(){
      beforeEach(function() {
        spyOn(airport_1, 'isStormy').and.returnValue(false);
        airport_2 = new Airport();
        plane = new Plane();
      });

      it('updates the planes array', function(){
        airport_2.land(plane);
        airport_2.takeOff(plane);
        expect(airport_2.planes.length).toEqual(0);
      });

      it('It returns a message', function(){
        airport_2.land(plane);
        expect(airport_2.takeOff(plane)).toEqual("Plane has taken off!");
      });
    });

    describe('bad weather', function(){
      beforeEach(function() {
        airport = new Airport();
        plane = new Plane();
        spyOn(airport, 'isStormy').and.returnValue(true);
      });

      it('It returns a message', function(){
        airport_1.land(plane);
        expect(airport_1.takeOff(plane)).toEqual("Weather is stormy, can't take off!");
      });

      it('prevents landing when stormy', function(){
        expect(airport_1.land(plane)).toEqual("Weather is stormy, can't land!");
      });
    });
  });
});
