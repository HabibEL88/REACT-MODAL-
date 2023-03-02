"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _reactTransitionGroup = require("react-transition-group");
require("./Modal.css");
var Modal = function Modal(props) {
  return /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    in: props.show,
    unmountOnExit: true,
    timeout: {
      enter: 0,
      exit: 300
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    onClick: props.onClose
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, props.title && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "modal-title"
  }, props.title)), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, props.children, /*#__PURE__*/_react.default.createElement("button", {
    onClick: props.onClose,
    className: "button"
  }, "\xD7"))))), document.getElementById("root"));
};
var _default = Modal;
exports.default = _default;