describe('Weather',function() {

  var weather;

    beforeEach(function() {
      weather = new Weather();
    });

    describe('when asked', function(){
      it('returns false if not stormy', function(){
        Math.random = function() { return 0.2; };
        expect(weather.isStormy()).toEqual(false)
      });

      it('returns true if stormy', function(){
        Math.random = function() { return 0.9; };
        expect(weather.isStormy()).toEqual(true)
    });
  });
});
