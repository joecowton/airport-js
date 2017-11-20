describe('Plane',function() {

  var plane;

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

    plane = new Plane("Bombardier");
    airport = new Airport;

    it('changes status when landing', function(){
      airport.land(plane)
      expect(plane.isFlying).toEqual(false)
    });

    it('changes status when taking off', function(){
      airport.takeOff(plane)
      expect(plane.isFlying).toEqual(true)
    });
  });




});
