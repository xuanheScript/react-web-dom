'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ViewMax = exports.ScrollView = exports.Text = exports.View = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactInline = require('react-inline');

var _reactInline2 = _interopRequireDefault(_reactInline);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

var View = exports.View = function (_React$Component) {
    _inherits(View, _React$Component);

    function View() {
        _classCallCheck(this, View);

        return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
    }

    _createClass(View, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                _extends({}, this.props, {
                    className: '' + this.props.className,
                    style: Object.assign({}, styles.View, this.props.style)
                }),
                this.props.children
            );
        }
    }]);

    return View;
}(_react2.default.Component);

View.propTypes = {
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};
View.defaultProps = {
    className: '',
    style: undefined
};

var Text = exports.Text = function (_React$Component2) {
    _inherits(Text, _React$Component2);

    function Text() {
        _classCallCheck(this, Text);

        return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
    }

    _createClass(Text, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                _extends({}, this.props, {
                    className: '' + this.props.className,
                    style: Object.assign({}, styles.Text, this.props.style)
                }),
                this.props.children
            );
        }
    }]);

    return Text;
}(_react2.default.Component);

Text.propTypes = {
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};
Text.defaultProps = {
    className: '',
    style: undefined
};

var ScrollView = exports.ScrollView = function (_React$Component3) {
    _inherits(ScrollView, _React$Component3);

    function ScrollView() {
        _classCallCheck(this, ScrollView);

        return _possibleConstructorReturn(this, (ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).apply(this, arguments));
    }

    _createClass(ScrollView, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                {
                    className: '' + this.props.className,
                    style: Object.assign({}, styles.ScrollView, this.props.style)
                },
                this.props.children
            );
        }
    }]);

    return ScrollView;
}(_react2.default.Component);

ScrollView.propTypes = {
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};
ScrollView.defaultProps = {
    className: '',
    style: undefined
};

var ViewMax = exports.ViewMax = function (_React$Component4) {
    _inherits(ViewMax, _React$Component4);

    function ViewMax() {
        _classCallCheck(this, ViewMax);

        return _possibleConstructorReturn(this, (ViewMax.__proto__ || Object.getPrototypeOf(ViewMax)).apply(this, arguments));
    }

    _createClass(ViewMax, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                View,
                {
                    className: '' + this.props.className,
                    style: Object.assign({}, { height: windowHeight }, this.props.style)
                },
                this.props.children
            );
        }
    }]);

    return ViewMax;
}(_react2.default.Component);

ViewMax.propTypes = {
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};
ViewMax.defaultProps = {
    className: '',
    style: undefined
};


var styles = _reactInline2.default.create({
    View: {
        display: 'flex',
        alignItems: 'initial',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    Text: {
        margin: 0
    },
    ScrollView: {
        display: 'flex',
        alignItems: 'initial',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        overflow: 'scroll',
        WebkitOverflowScrolling: 'touch'
    }
});