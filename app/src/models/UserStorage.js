"use strict";

class UserStorage {
  static _users = {
    id: ['test', 'admin', 'root'],
    password: ['1234', '1234', 'asdf'],
    name: ['테스트', '관리자', '주인'],
  };

  static getUsers(...fields) {
    const users = this._users;
    const newUsers = fields.reduce((newUsers, field) => {
      if(users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});

    return this._users;
  }

  static getUserInfo(id) {
    const users = this._users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // [id, password, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }
}

module.exports = UserStorage;