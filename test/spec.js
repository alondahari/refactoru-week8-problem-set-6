describe('secondGreatLow', function() {
  it('should take an array and return second lowest and second highest numbers', function() {
    expect(secondGreatLow([7, 7, 12, 98, 106])).toEqual('12 98');
    expect(secondGreatLow([7, 106])).toEqual('7 106');
    expect(secondGreatLow([7, 7, 12])).toEqual('7 12');
    expect(secondGreatLow([7, 8, 12])).toEqual('8 8');
  });

});

describe("timeConvert", function() {
	
});