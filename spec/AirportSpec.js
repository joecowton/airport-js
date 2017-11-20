describe('Airport',function() {

  var airport;
  var plane;
  // spyOn(plane, new)
  // let(plane) { double (plane) };
  describe('when instructing plane', function(){

    it('to land', function(){
      airport = new Airport();
      // plane = new Plane();
      expect(airport.land(plane)).toEqual("Plane has landed!");
    });
  });
});
