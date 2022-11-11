"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
var _index = require("../context/index");
var _reactRouterDom = require("react-router-dom");
var _Loader = _interopRequireDefault(require("./UI/Loader/Loader"));
var _Login = _interopRequireDefault(require("../pages/Login"));
var _AuthRouter = _interopRequireDefault(require("./AuthRouter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var AppRouter = function AppRouter() {
  var _React$useContext = React.useContext(_index.AuthContext),
    isAuth = _React$useContext.isAuth,
    isLoading = _React$useContext.isLoading;
  if (isLoading) {
    return /*#__PURE__*/React.createElement(_Loader["default"], null);
  }
  return isAuth ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_AuthRouter["default"], null)) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, null), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/login",
    element: /*#__PURE__*/React.createElement(_Login["default"], null)
  })), /*#__PURE__*/React.createElement(_reactRouterDom.Navigate, {
    to: "/login",
    replace: true
  }));
};
var _default = AppRouter;
exports["default"] = _default;