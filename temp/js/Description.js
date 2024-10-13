"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.descriptionHider = descriptionHider;
function descriptionHider(_ref) {
  var special = _ref.special;
  return special.map(function (_ref2) {
    var id = _ref2.id,
      name = _ref2.name,
      icon = _ref2.icon,
      _ref2$description = _ref2.description,
      description = _ref2$description === void 0 ? 'Описание недоступно' : _ref2$description;
    return {
      id: id,
      name: name,
      icon: icon,
      description: description
    };
  });
}