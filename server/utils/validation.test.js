const expect = require('expect');
const {isRealString} = require('./validation.js');

describe('isRealString',()=>{
  it('should reject non-string value',()=>{
    var str = 12;
    expect(isRealString(str)).toBe(false);
  });
  it('should reject string with only space',()=>{
    var str = '      ';
    expect(isRealString(str)).toBe(false);
  });
  it('should validate correct data',()=>{
    var str = '  Samuel ';
    expect(isRealString(str)).toBe(true);
  });
});
