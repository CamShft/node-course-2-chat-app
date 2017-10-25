var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',()=>{
  it('should generate correct message object', ()=>{
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from,text);
    // expect(message.from).toBe(from);
    // expect(message.text).toBe(text);
    expect(message).toInclude({from,text});
  expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage',()=>{
  it('should generate correct location object',()=>{
    var from = 'Samuel';
    var lat = 1;
    var lng = 1;

    var message = generateLocationMessage(from,lat,lng);

    expect(message).toInclude({from,url:`https://www.google.com/maps?q=${lat},${lng}`});
    expect(typeof message.createdAt).toBe('number');
  });
});
