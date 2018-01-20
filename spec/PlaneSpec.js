describe('Plane',function() {

  beforeEach(function() {
    plane = new Plane("Bombardier");
    airport = new Airport;
  });

  describe('when created', function(){

    beforeEach(function(){
      spyOn(weather, 'isStormy').and.returnValue(false)
    });

    it('is flying', function(){
      expect(plane.isFlying).toEqual(true)
    });

    it('has a name', function(){
      expect(plane.name).toEqual("Bombardier")
    });
  });

  describe('is flying?', function(){

    beforeEach(function(){
      spyOn(weather, 'isStormy').and.returnValue(false)
    });

    it('changes status when landing', function(){
      airport.land(plane);
      expect(plane.isFlying).toEqual(false);
    });

    it('changes status when taking off', function(){
      airport.land(plane);
      airport.takeOff(plane);
      expect(plane.isFlying).toEqual(true);
    });
  });
});
