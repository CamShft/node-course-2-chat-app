// Jan 1st 1970 00:00
var moment = require('moment') ;
moment.locale('fr-ca');
// new Date().getTime();
// var date = new Date();
// var months = ['Jan','Feb']
// console.log(date.getMonth());

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('H:mm a'));
