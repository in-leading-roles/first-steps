"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _material = require("@mui/material");
var _react = _interopRequireDefault(require("react"));
var _context = require("../context");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LogoutButton = function LogoutButton() {
  var _React$useContext = _react["default"].useContext(_context.AuthContext),
    isAuth = _React$useContext.isAuth,
    setIsAuth = _React$useContext.setIsAuth,
    roles = _React$useContext.roles,
    setRoles = _React$useContext.setRoles;
  var handlePostForm = function handlePostForm(e) {
    setIsAuth(false);
    setRoles(null);
    localStorage.removeItem('auth');
    localStorage.removeItem('roles');
    e.preventDefault();
  };
  return /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: handlePostForm,
    variant: "contained"
  }, "LOG OUT");
};
var _default = LogoutButton;
exports["default"] = _default;