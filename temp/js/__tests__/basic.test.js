"use strict";

var _Description = require("../Description");
describe('Check description', function () {
  var character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [{
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    }, {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
    }]
  };
  test('description checker', function () {
    var result = (0, _Description.descriptionHider)(character);
    expect(result).toEqual([{
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    }, {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно'
    }]);
  });
});