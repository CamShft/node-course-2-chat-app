const expect = require('expect');
const {Users} = require('./users');

describe('Users', ()=>{

  beforeEach(()=>{
    users = new Users();
    users.users = [{
      id:'1',
      name: 'Samuel',
      room: 'Node Course'
    }, {
      id:'2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id:'3',
      name: 'Julie',
      room: 'Node Course'
    }];
  });

  it('should add new user', () =>{
    var users = new Users();
    var user = {
      id: '123',
      name: 'Samuel',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id,user.name,user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user',()=>{
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user',()=>{
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user',()=>{
    var id = '1'
    var user = users.getUser(id);

    expect(user.id).toBe(id);
    expect(user.name).toBe("Samuel");
  });

  it('should not find user',()=>{
    var userID = '99';
    var user = users.getUser(userID);

    expect(user).toNotExist();
  });

  it('should return names for node course', () =>{
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Samuel','Julie']);
  });
  it('should return names for React course', () =>{
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });
});
