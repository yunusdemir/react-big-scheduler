"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _index = require("./index");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HeaderView = /*#__PURE__*/function (_Component) {
  _inherits(HeaderView, _Component);

  var _super = _createSuper(HeaderView);

  function HeaderView(props) {
    _classCallCheck(this, HeaderView);

    return _super.call(this, props);
  }

  _createClass(HeaderView, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          schedulerData = _this$props.schedulerData,
          nonAgendaCellHeaderTemplateResolver = _this$props.nonAgendaCellHeaderTemplateResolver;
      var headers = schedulerData.headers,
          cellUnit = schedulerData.cellUnit,
          config = schedulerData.config,
          localeMoment = schedulerData.localeMoment;
      var headerHeight = schedulerData.getTableHeaderHeight();
      var cellWidth = schedulerData.getContentCellWidth();
      var minuteStepsInHour = schedulerData.getMinuteStepsInHour();
      var headerList = [];
      var style = {};

      if (cellUnit === _index.CellUnits.Hour) {
        headers.forEach(function (item, index) {
          if (index % minuteStepsInHour === 0) {
            var datetime = localeMoment(item.time);
            var isCurrentTime = datetime.isSame(new Date(), 'hour');
            style = !!item.nonWorkingTime ? {
              width: cellWidth * minuteStepsInHour,
              color: config.nonWorkingTimeHeadColor,
              backgroundColor: config.nonWorkingTimeHeadBgColor
            } : {
              width: cellWidth * minuteStepsInHour
            };
            if (index === headers.length - minuteStepsInHour) style = !!item.nonWorkingTime ? {
              color: config.nonWorkingTimeHeadColor,
              backgroundColor: config.nonWorkingTimeHeadBgColor
            } : {};
            var pFormattedList = config.nonAgendaDayCellHeaderFormat.split('|').map(function (item) {
              return datetime.format(item);
            });
            var element;

            if (typeof nonAgendaCellHeaderTemplateResolver === 'function') {
              element = nonAgendaCellHeaderTemplateResolver(schedulerData, item, pFormattedList, style);
            } else {
              var pList = pFormattedList.map(function (item, index) {
                return /*#__PURE__*/_react["default"].createElement("div", {
                  key: index
                }, item);
              });
              element = /*#__PURE__*/_react["default"].createElement("th", {
                key: item.time,
                className: "header3-text",
                style: style
              }, /*#__PURE__*/_react["default"].createElement("div", null, pList));
            }

            headerList.push(element);
          }
        });
      } else {
        headerList = headers.map(function (item, index) {
          var datetime = localeMoment(item.time);
          style = !!item.nonWorkingTime ? {
            width: cellWidth,
            color: config.nonWorkingTimeHeadColor,
            backgroundColor: config.nonWorkingTimeHeadBgColor
          } : {
            width: cellWidth
          };
          if (index === headers.length - 1) style = !!item.nonWorkingTime ? {
            color: config.nonWorkingTimeHeadColor,
            backgroundColor: config.nonWorkingTimeHeadBgColor
          } : {};
          var pFormattedList = config.nonAgendaOtherCellHeaderFormat.split('|').map(function (item) {
            return datetime.format(item);
          });

          if (typeof nonAgendaCellHeaderTemplateResolver === 'function') {
            return nonAgendaCellHeaderTemplateResolver(schedulerData, item, pFormattedList, style);
          }

          var pList = pFormattedList.map(function (item, index) {
            return /*#__PURE__*/_react["default"].createElement("div", {
              key: index
            }, item);
          });
          return /*#__PURE__*/_react["default"].createElement("th", {
            key: item.time,
            className: "header3-text",
            style: style
          }, /*#__PURE__*/_react["default"].createElement("div", null, pList));
        });
      }

      return /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", {
        style: {
          height: headerHeight
        }
      }, headerList));
    }
  }]);

  return HeaderView;
}(_react.Component);

_defineProperty(HeaderView, "propTypes", {
  schedulerData: _propTypes.PropTypes.object.isRequired,
  nonAgendaCellHeaderTemplateResolver: _propTypes.PropTypes.func
});

var _default = HeaderView;
exports["default"] = _default;