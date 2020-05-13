'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../controllers/user');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userRoutes = _express2.default.Router();

userRoutes.use('/auth/signup', _user.userSignup);

exports.default = userRoutes;
//# sourceMappingURL=user.js.map