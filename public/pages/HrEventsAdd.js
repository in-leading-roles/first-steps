"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
var _HrPanelNavbar = _interopRequireDefault(require("../component/HrPanelNavbar"));
var _material = require("@mui/material");
var _xDatePickers = require("@mui/x-date-pickers");
var _AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var HrEventsAdd = function HrEventsAdd() {
  var _React$useState = React.useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    users = _React$useState2[0],
    setUsers = _React$useState2[1];
  var _React$useState3 = React.useState(''),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    titleValue = _React$useState4[0],
    settitle = _React$useState4[1];
  var _React$useState5 = React.useState(''),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    contentValue = _React$useState6[0],
    setcontent = _React$useState6[1];
  var _React$useState7 = React.useState(),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    startDateValue = _React$useState8[0],
    setstartDate = _React$useState8[1];
  var _React$useState9 = React.useState(),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    endDateValue = _React$useState10[0],
    setEndDate = _React$useState10[1];
  var handleForm = function handleForm(e) {
    fetch('/events', {
      method: 'post',
      headers: new Headers({
        Authorization: "Bearer ".concat(localStorage.getItem('auth')),
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        title: titleValue,
        content: contentValue,
        startDate: startDateValue,
        endDate: endDateValue
      })
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      if (res['title']) {
        window.location.href = "/eventspanel";
      } else {}
    });
    e.preventDefault();
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_HrPanelNavbar["default"], null), /*#__PURE__*/React.createElement(_material.TextField, {
    label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u044F",
    onChange: function onChange(e) {
      return settitle(e.target.value);
    },
    type: "text"
  }), /*#__PURE__*/React.createElement(_material.TextField, {
    label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
    multiline: true,
    maxRows: 4,
    value: contentValue,
    onChange: function onChange(e) {
      return setcontent(e.target.value);
    }
  }), /*#__PURE__*/React.createElement(_xDatePickers.LocalizationProvider, {
    dateAdapter: _AdapterDayjs.AdapterDayjs
  }, /*#__PURE__*/React.createElement(_xDatePickers.DateTimePicker, {
    renderInput: function renderInput(props) {
      return /*#__PURE__*/React.createElement(_material.TextField, props);
    },
    label: "\u041D\u0430\u0447\u0430\u043B\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u044F",
    value: startDateValue,
    onChange: function onChange(newValue) {
      setstartDate(newValue);
    }
  })), /*#__PURE__*/React.createElement(_xDatePickers.LocalizationProvider, {
    dateAdapter: _AdapterDayjs.AdapterDayjs
  }, /*#__PURE__*/React.createElement(_xDatePickers.DateTimePicker, {
    renderInput: function renderInput(props) {
      return /*#__PURE__*/React.createElement(_material.TextField, props);
    },
    label: "\u041A\u043E\u043D\u0435\u0446 \u0441\u043E\u0431\u044B\u0442\u0438\u044F",
    value: endDateValue,
    onChange: function onChange(newValue) {
      setEndDate(newValue);
    }
  })), /*#__PURE__*/React.createElement(_material.Button, {
    onClick: handleForm
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"));
};
var _default = HrEventsAdd;
exports["default"] = _default;