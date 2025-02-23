'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cell = exports.Grid = exports.GridContainer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _enums = require('../enums');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Grid container component.
 *
 * @param {Object} props
 * @returns {Object}
 */
var GridContainer = exports.GridContainer = function GridContainer(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'grid-container', props.className, {
    'fluid': props.fluid,
    'full': props.full
  }, (0, _utils.generalClassNames)(props), (0, _utils.flexboxClassNames)(props));

  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(GridContainer.propTypes));

  return _react2.default.createElement('div', _extends({}, passProps, { className: className }));
};

GridContainer.propTypes = _extends({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  fluid: _propTypes2.default.bool,
  full: _propTypes2.default.bool
});

/**
 * Grid component.
 *
 * @param {Object} props
 * @returns {Object}
 */
var Grid = exports.Grid = function Grid(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : (0, _utils.setDirection)(props.vertical), props.className, (0, _utils.isDefined)(props.gutters) ? (0, _utils.setDirection)(props.vertical, props.gutters) : null, (0, _utils.isDefined)(props.upOnSmall) ? 'small-up-' + props.upOnSmall : null, (0, _utils.isDefined)(props.upOnMedium) ? 'medium-up-' + props.upOnMedium : null, (0, _utils.isDefined)(props.upOnLarge) ? 'large-up-' + props.upOnLarge : null, (0, _utils.isDefined)(props.collapseOnSmall) ? 'small-' + props.collapseOnSmall + '-collapse' : null, (0, _utils.isDefined)(props.collapseOnMedium) ? 'medium-' + props.collapseOnMedium + '-collapse' : null, (0, _utils.isDefined)(props.collapseOnLarge) ? 'large-' + props.collapseOnLarge + '-collapse' : null, (0, _utils.isDefined)(props.gridFrame) ? props.gridFrame === true ? 'grid-frame' : (0, _utils.addBreakpoint)('grid-frame', props.gridFrame) : null, (0, _utils.generalClassNames)(props), (0, _utils.flexboxClassNames)(props));

  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Grid.propTypes));

  return _react2.default.createElement('div', _extends({}, passProps, { className: className }));
};

Grid.propTypes = _extends({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  vertical: _propTypes2.default.bool,
  gutters: _propTypes2.default.oneOf((0, _utils.objectValues)(_enums.GutterTypes)),
  upOnSmall: _propTypes2.default.number,
  upOnMedium: _propTypes2.default.number,
  upOnLarge: _propTypes2.default.number,
  collapseOnSmall: _propTypes2.default.oneOf((0, _utils.objectValues)(_enums.GutterTypes)),
  collapseOnMedium: _propTypes2.default.oneOf((0, _utils.objectValues)(_enums.GutterTypes)),
  collapseOnLarge: _propTypes2.default.oneOf((0, _utils.objectValues)(_enums.GutterTypes)),
  gridFrame: _propTypes2.default.oneOf((0, _utils.objectValues)(_enums.ExtendedBreakpoints))
});

/**
 * Cell component.
 *
 * @param {Object} props
 * @returns {Object}
 */
var Cell = exports.Cell = function Cell(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'cell', props.className, props.small ? 'small-' + props.small : null, props.medium ? 'medium-' + props.medium : null, props.large ? 'large-' + props.large : null, (0, _utils.isDefined)(props.auto) ? (0, _utils.addBreakpoint)('auto', props.auto) : null, (0, _utils.isDefined)(props.shrink) ? (0, _utils.addBreakpoint)('shrink', props.shrink) : null, (0, _utils.isDefined)(props.offsetOnSmall) ? 'small-offset-' + props.offsetOnSmall : null, (0, _utils.isDefined)(props.offsetOnMedium) ? 'medium-offset-' + props.offsetOnMedium : null, (0, _utils.isDefined)(props.offsetOnLarge) ? 'large-offset-' + props.offsetOnLarge : null, (0, _utils.generalClassNames)(props), (0, _utils.flexboxClassNames)(props));

  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Cell.propTypes));

  return _react2.default.createElement('div', _extends({}, passProps, { className: className }));
};

Cell.propTypes = _extends({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  small: _propTypes2.default.number,
  medium: _propTypes2.default.number,
  large: _propTypes2.default.number,
  auto: _propTypes2.default.oneOf((0, _utils.objectValues)(_enums.ExtendedBreakpoints)),
  shrink: _propTypes2.default.oneOf((0, _utils.objectValues)(_enums.ExtendedBreakpoints)),
  offsetOnSmall: _propTypes2.default.number,
  offsetOnMedium: _propTypes2.default.number,
  offsetOnLarge: _propTypes2.default.number
});