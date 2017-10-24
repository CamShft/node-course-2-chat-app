var moment = require('moment');

var generateMessage = (from,text) =>{
  return{
    from,
    text,
    createAt: moment().valueOf()
  }
};

var generateLocationMessage = (from,lat,lng)=>{
  var date = moment()
  return{
    from,
    url: `https://www.google.com/maps?q=${lat},${lng}`,
    createdAt: moment().valueOf()
  }
}

module.exports = {generateMessage,generateLocationMessage};
