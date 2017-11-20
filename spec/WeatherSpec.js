describe('Weather',function() {

  var weather;

  describe('when asked', function(){
    weather = new Weather;

    it('returns false if not stormy', function(){
      expect(weather.isStormy(0.4)).toEqual(false)
    });

    it('returns true if stormy', function(){
      expect(weather.isStormy(0.8)).toEqual(true)
    });

    // it('has a name', function(){
    //   expect(plane.name).toEqual("Bombardier")
    // });
  });
});
