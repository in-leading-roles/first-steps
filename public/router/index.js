"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publicRoutes = exports.privateRoutes = void 0;
var _Login = _interopRequireDefault(require("../pages/Login"));
var _HrPanelAddUser = _interopRequireDefault(require("../pages/HrPanelAddUser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var privateRoutes = [{
  path: '/HR',
  component: _HrPanelAddUser["default"],
  exact: true
}];
exports.privateRoutes = privateRoutes;
var publicRoutes = [{
  path: '/login',
  component: _Login["default"],
  exact: true
}];
exports.publicRoutes = publicRoutes;