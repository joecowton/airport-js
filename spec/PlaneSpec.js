describe('Plane',function() {
  //
  // var plane;

  beforeEach(function() {
    weather = new Weather();
    plane = new Plane("Bombardier");
    airport = new Airport;
  });

  describe('when created', function(){
    plane = new Plane("Bombardier");

    it('is flying', function(){
      expect(plane.isFlying).toEqual(true)
    });

    it('has a name', function(){
      expect(plane.name).toEqual("Bombardier")
    });
  });

  describe('is flying?', function(){

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
