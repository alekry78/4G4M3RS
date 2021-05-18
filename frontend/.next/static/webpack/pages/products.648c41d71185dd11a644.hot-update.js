self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./components/Products/Products.js":
/*!*****************************************!*\
  !*** ./components/Products/Products.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Projects_SickFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Projects\\SickFits\\frontend\\components\\Products\\Products.js",
    _this = undefined;

function _templateObject() {
  var data = (0,C_Projects_SickFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ALL_PRODUCTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var Products = function Products() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Products!!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }, _this);
};

_c = Products;
/* harmony default export */ __webpack_exports__["default"] = (Products);

var _c;

$RefreshReg$(_c, "Products");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/graphql-tag/src/index.js":
/*!***********************************************!*\
  !*** ./node_modules/graphql-tag/src/index.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parser = __webpack_require__(/*! graphql/language/parser */ "./node_modules/graphql/language/parser.mjs");

var parse = parser.parse;

// Strip insignificant whitespace
// Note that this could do a lot more, such as reorder fields etc.
function normalize(string) {
  return string.replace(/[\s,]+/g, ' ').trim();
}

// A map docString -> graphql document
var docCache = {};

// A map fragmentName -> [normalized source]
var fragmentSourceMap = {};

function cacheKeyFromLoc(loc) {
  return normalize(loc.source.body.substring(loc.start, loc.end));
}

// For testing.
function resetCaches() {
  docCache = {};
  fragmentSourceMap = {};
}

// Take a unstripped parsed document (query/mutation or even fragment), and
// check all fragment definitions, checking for name->source uniqueness.
// We also want to make sure only unique fragments exist in the document.
var printFragmentWarnings = true;
function processFragments(ast) {
  var astFragmentMap = {};
  var definitions = [];

  for (var i = 0; i < ast.definitions.length; i++) {
    var fragmentDefinition = ast.definitions[i];

    if (fragmentDefinition.kind === 'FragmentDefinition') {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);

      // We know something about this fragment
      if (fragmentSourceMap.hasOwnProperty(fragmentName) && !fragmentSourceMap[fragmentName][sourceKey]) {

        // this is a problem because the app developer is trying to register another fragment with
        // the same name as one previously registered. So, we tell them about it.
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
            + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
            + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }

        fragmentSourceMap[fragmentName][sourceKey] = true;

      } else if (!fragmentSourceMap.hasOwnProperty(fragmentName)) {
        fragmentSourceMap[fragmentName] = {};
        fragmentSourceMap[fragmentName][sourceKey] = true;
      }

      if (!astFragmentMap[sourceKey]) {
        astFragmentMap[sourceKey] = true;
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  }

  ast.definitions = definitions;
  return ast;
}

function disableFragmentWarnings() {
  printFragmentWarnings = false;
}

function stripLoc(doc, removeLocAtThisLevel) {
  var docType = Object.prototype.toString.call(doc);

  if (docType === '[object Array]') {
    return doc.map(function (d) {
      return stripLoc(d, removeLocAtThisLevel);
    });
  }

  if (docType !== '[object Object]') {
    throw new Error('Unexpected input.');
  }

  // We don't want to remove the root loc field so we can use it
  // for fragment substitution (see below)
  if (removeLocAtThisLevel && doc.loc) {
    delete doc.loc;
  }

  // https://github.com/apollographql/graphql-tag/issues/40
  if (doc.loc) {
    delete doc.loc.startToken;
    delete doc.loc.endToken;
  }

  var keys = Object.keys(doc);
  var key;
  var value;
  var valueType;

  for (key in keys) {
    if (keys.hasOwnProperty(key)) {
      value = doc[keys[key]];
      valueType = Object.prototype.toString.call(value);

      if (valueType === '[object Object]' || valueType === '[object Array]') {
        doc[keys[key]] = stripLoc(value, true);
      }
    }
  }

  return doc;
}

var experimentalFragmentVariables = false;
function parseDocument(doc) {
  var cacheKey = normalize(doc);

  if (docCache[cacheKey]) {
    return docCache[cacheKey];
  }

  var parsed = parse(doc, { experimentalFragmentVariables: experimentalFragmentVariables });
  if (!parsed || parsed.kind !== 'Document') {
    throw new Error('Not a valid GraphQL document.');
  }

  // check that all "new" fragments inside the documents are consistent with
  // existing fragments of the same name
  parsed = processFragments(parsed);
  parsed = stripLoc(parsed, false);
  docCache[cacheKey] = parsed;

  return parsed;
}

function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}

function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}

// XXX This should eventually disallow arbitrary string interpolation, like Relay does
function gql(/* arguments */) {
  var args = Array.prototype.slice.call(arguments);

  var literals = args[0];

  // We always get literals[0] and then matching post literals for each arg given
  var result = (typeof(literals) === "string") ? literals : literals[0];

  for (var i = 1; i < args.length; i++) {
    if (args[i] && args[i].kind && args[i].kind === 'Document') {
      result += args[i].loc.source.body;
    } else {
      result += args[i];
    }

    result += literals[i];
  }

  return parseDocument(result);
}

// Support typescript, which isn't as nice as Babel about default exports
gql.default = gql;
gql.resetCaches = resetCaches;
gql.disableFragmentWarnings = disableFragmentWarnings;
gql.enableExperimentalFragmentVariables = enableExperimentalFragmentVariables;
gql.disableExperimentalFragmentVariables = disableExperimentalFragmentVariables;

module.exports = gql;


/***/ }),

/***/ "./node_modules/graphql/error/GraphQLError.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/error/GraphQLError.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphQLError": function() { return /* binding */ GraphQLError; },
/* harmony export */   "printError": function() { return /* binding */ printError; }
/* harmony export */ });
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
/* harmony import */ var _language_location_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/location.mjs */ "./node_modules/graphql/language/location.mjs");
/* harmony import */ var _language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/printLocation.mjs */ "./node_modules/graphql/language/printLocation.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// FIXME:
// flowlint uninitialized-instance-property:off




/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

var GraphQLError = /*#__PURE__*/function (_Error) {
  _inherits(GraphQLError, _Error);

  var _super = _createSuper(GraphQLError);

  /**
   * A message describing the Error for debugging purposes.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   *
   * Note: should be treated as readonly, despite invariant usage.
   */

  /**
   * An array of { line, column } locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */

  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */

  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */

  /**
   * The original error thrown from a field resolver during execution.
   */

  /**
   * Extension fields to add to the formatted error.
   */
  function GraphQLError(message, nodes, source, positions, path, originalError, extensions) {
    var _locations2, _source2, _positions2, _extensions2;

    var _this;

    _classCallCheck(this, GraphQLError);

    _this = _super.call(this, message); // Compute list of blame nodes.

    var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


    var _source = source;

    if (!_source && _nodes) {
      var _nodes$0$loc;

      _source = (_nodes$0$loc = _nodes[0].loc) === null || _nodes$0$loc === void 0 ? void 0 : _nodes$0$loc.source;
    }

    var _positions = positions;

    if (!_positions && _nodes) {
      _positions = _nodes.reduce(function (list, node) {
        if (node.loc) {
          list.push(node.loc.start);
        }

        return list;
      }, []);
    }

    if (_positions && _positions.length === 0) {
      _positions = undefined;
    }

    var _locations;

    if (positions && source) {
      _locations = positions.map(function (pos) {
        return (0,_language_location_mjs__WEBPACK_IMPORTED_MODULE_0__.getLocation)(source, pos);
      });
    } else if (_nodes) {
      _locations = _nodes.reduce(function (list, node) {
        if (node.loc) {
          list.push((0,_language_location_mjs__WEBPACK_IMPORTED_MODULE_0__.getLocation)(node.loc.source, node.loc.start));
        }

        return list;
      }, []);
    }

    var _extensions = extensions;

    if (_extensions == null && originalError != null) {
      var originalExtensions = originalError.extensions;

      if ((0,_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(originalExtensions)) {
        _extensions = originalExtensions;
      }
    }

    Object.defineProperties(_assertThisInitialized(_this), {
      name: {
        value: 'GraphQLError'
      },
      message: {
        value: message,
        // By being enumerable, JSON.stringify will include `message` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: true,
        writable: true
      },
      locations: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: (_locations2 = _locations) !== null && _locations2 !== void 0 ? _locations2 : undefined,
        // By being enumerable, JSON.stringify will include `locations` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: _locations != null
      },
      path: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: path !== null && path !== void 0 ? path : undefined,
        // By being enumerable, JSON.stringify will include `path` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: path != null
      },
      nodes: {
        value: _nodes !== null && _nodes !== void 0 ? _nodes : undefined
      },
      source: {
        value: (_source2 = _source) !== null && _source2 !== void 0 ? _source2 : undefined
      },
      positions: {
        value: (_positions2 = _positions) !== null && _positions2 !== void 0 ? _positions2 : undefined
      },
      originalError: {
        value: originalError
      },
      extensions: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: (_extensions2 = _extensions) !== null && _extensions2 !== void 0 ? _extensions2 : undefined,
        // By being enumerable, JSON.stringify will include `path` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: _extensions != null
      }
    }); // Include (non-enumerable) stack trace.

    if (originalError === null || originalError === void 0 ? void 0 : originalError.stack) {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: originalError.stack,
        writable: true,
        configurable: true
      });
      return _possibleConstructorReturn(_this);
    } // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')


    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this), GraphQLError);
    } else {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: Error().stack,
        writable: true,
        configurable: true
      });
    }

    return _this;
  }

  _createClass(GraphQLError, [{
    key: "toString",
    value: function toString() {
      return printError(this);
    } // FIXME: workaround to not break chai comparisons, should be remove in v16
    // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet

  }, {
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__.SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'Object';
    }
  }]);

  return GraphQLError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */

function printError(error) {
  var output = error.message;

  if (error.nodes) {
    for (var _i2 = 0, _error$nodes2 = error.nodes; _i2 < _error$nodes2.length; _i2++) {
      var node = _error$nodes2[_i2];

      if (node.loc) {
        output += '\n\n' + (0,_language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.printLocation)(node.loc);
      }
    }
  } else if (error.source && error.locations) {
    for (var _i4 = 0, _error$locations2 = error.locations; _i4 < _error$locations2.length; _i4++) {
      var location = _error$locations2[_i4];
      output += '\n\n' + (0,_language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.printSourceLocation)(error.source, location);
    }
  }

  return output;
}


/***/ }),

/***/ "./node_modules/graphql/error/syntaxError.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/error/syntaxError.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "syntaxError": function() { return /* binding */ syntaxError; }
/* harmony export */ });
/* harmony import */ var _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("Syntax Error: ".concat(description), undefined, source, [position]);
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/defineInspect.mjs":
/*!********************************************************!*\
  !*** ./node_modules/graphql/jsutils/defineInspect.mjs ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ defineInspect; }
/* harmony export */ });
/* harmony import */ var _invariant_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol.mjs */ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");


/**
 * The `defineInspect()` function defines `inspect()` prototype method as alias of `toJSON`
 */

function defineInspect(classObject) {
  var fn = classObject.prototype.toJSON;
  typeof fn === 'function' || (0,_invariant_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(0);
  classObject.prototype.inspect = fn; // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2317')

  if (_nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_1__.default) {
    classObject.prototype[_nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_1__.default] = fn;
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/devAssert.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/devAssert.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ devAssert; }
/* harmony export */ });
function devAssert(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message);
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/inspect.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/jsutils/inspect.mjs ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ inspect; }
/* harmony export */ });
/* harmony import */ var _nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol.mjs */ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable flowtype/no-weak-types */

var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (_typeof(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      if (value === null) {
        return 'null';
      }

      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return '[Circular]';
  }

  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);

  if (customInspectFn !== undefined) {
    var customValue = customInspectFn.call(value); // check for infinite recursion

    if (customValue !== value) {
      return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function formatObject(object, seenValues) {
  var keys = Object.keys(object);

  if (keys.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  var properties = keys.map(function (key) {
    var value = formatValue(object[key], seenValues);
    return key + ': ' + value;
  });
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];

  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }

  return '[' + items.join(', ') + ']';
}

function getCustomFn(object) {
  var customInspectFn = object[String(_nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_0__.default)];

  if (typeof customInspectFn === 'function') {
    return customInspectFn;
  }

  if (typeof object.inspect === 'function') {
    return object.inspect;
  }
}

function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    var name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/instanceOf.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/jsutils/instanceOf.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */
// See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
// See: https://webpack.js.org/guides/production/
/* harmony default export */ __webpack_exports__["default"] = ( false ? // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
// eslint-disable-next-line no-shadow
0 : // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  if (value instanceof constructor) {
    return true;
  }

  if (value) {
    var valueClass = value.constructor;
    var className = constructor.name;

    if (className && valueClass && valueClass.name === className) {
      throw new Error("Cannot use ".concat(className, " \"").concat(value, "\" from another module or realm.\n\nEnsure that there is only one instance of \"graphql\" in the node_modules\ndirectory. If different versions of \"graphql\" are the dependencies of other\nrelied on modules, use \"resolutions\" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate \"graphql\" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results."));
    }
  }

  return false;
});


/***/ }),

/***/ "./node_modules/graphql/jsutils/invariant.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/invariant.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ invariant; }
/* harmony export */ });
function invariant(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message != null ? message : 'Unexpected invariant triggered.');
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/isObjectLike.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/jsutils/isObjectLike.mjs ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isObjectLike; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
function isObjectLike(value) {
  return _typeof(value) == 'object' && value !== null;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;
/* harmony default export */ __webpack_exports__["default"] = (nodejsCustomInspectSymbol);


/***/ }),

/***/ "./node_modules/graphql/language/ast.mjs":
/*!***********************************************!*\
  !*** ./node_modules/graphql/language/ast.mjs ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Location": function() { return /* binding */ Location; },
/* harmony export */   "Token": function() { return /* binding */ Token; },
/* harmony export */   "isNode": function() { return /* binding */ isNode; }
/* harmony export */ });
/* harmony import */ var _jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/defineInspect.mjs */ "./node_modules/graphql/jsutils/defineInspect.mjs");


/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
var Location = /*#__PURE__*/function () {
  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The Token at which this Node begins.
   */

  /**
   * The Token at which this Node ends.
   */

  /**
   * The Source document the AST represents.
   */
  function Location(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }

  var _proto = Location.prototype;

  _proto.toJSON = function toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  };

  return Location;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

(0,_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(Location);
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */

var Token = /*#__PURE__*/function () {
  /**
   * The kind of Token.
   */

  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The 1-indexed line number on which this Token appears.
   */

  /**
   * The 1-indexed column number at which this Token begins.
   */

  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   */

  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  function Token(kind, start, end, line, column, prev, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = prev;
    this.next = null;
  }

  var _proto2 = Token.prototype;

  _proto2.toJSON = function toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  };

  return Token;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

(0,_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(Token);
/**
 * @internal
 */

function isNode(maybeNode) {
  return maybeNode != null && typeof maybeNode.kind === 'string';
}
/**
 * The list of all possible AST node types.
 */


/***/ }),

/***/ "./node_modules/graphql/language/blockString.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/language/blockString.mjs ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dedentBlockStringValue": function() { return /* binding */ dedentBlockStringValue; },
/* harmony export */   "getBlockStringIndentation": function() { return /* binding */ getBlockStringIndentation; },
/* harmony export */   "printBlockString": function() { return /* binding */ printBlockString; }
/* harmony export */ });
/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */
function dedentBlockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  var commonIndent = getBlockStringIndentation(rawString);

  if (commonIndent !== 0) {
    for (var i = 1; i < lines.length; i++) {
      lines[i] = lines[i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.


  var startLine = 0;

  while (startLine < lines.length && isBlank(lines[startLine])) {
    ++startLine;
  }

  var endLine = lines.length;

  while (endLine > startLine && isBlank(lines[endLine - 1])) {
    --endLine;
  } // Return a string of the lines joined with U+000A.


  return lines.slice(startLine, endLine).join('\n');
}

function isBlank(str) {
  for (var i = 0; i < str.length; ++i) {
    if (str[i] !== ' ' && str[i] !== '\t') {
      return false;
    }
  }

  return true;
}
/**
 * @internal
 */


function getBlockStringIndentation(value) {
  var _commonIndent;

  var isFirstLine = true;
  var isEmptyLine = true;
  var indent = 0;
  var commonIndent = null;

  for (var i = 0; i < value.length; ++i) {
    switch (value.charCodeAt(i)) {
      case 13:
        //  \r
        if (value.charCodeAt(i + 1) === 10) {
          ++i; // skip \r\n as one symbol
        }

      // falls through

      case 10:
        //  \n
        isFirstLine = false;
        isEmptyLine = true;
        indent = 0;
        break;

      case 9: //   \t

      case 32:
        //  <space>
        ++indent;
        break;

      default:
        if (isEmptyLine && !isFirstLine && (commonIndent === null || indent < commonIndent)) {
          commonIndent = indent;
        }

        isEmptyLine = false;
    }
  }

  return (_commonIndent = commonIndent) !== null && _commonIndent !== void 0 ? _commonIndent : 0;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */

function printBlockString(value) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var preferMultipleLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSingleLine = value.indexOf('\n') === -1;
  var hasLeadingSpace = value[0] === ' ' || value[0] === '\t';
  var hasTrailingQuote = value[value.length - 1] === '"';
  var hasTrailingSlash = value[value.length - 1] === '\\';
  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
  var result = ''; // Format a multi-line block quote to account for leading space.

  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result += '\n' + indentation;
  }

  result += indentation ? value.replace(/\n/g, '\n' + indentation) : value;

  if (printAsMultipleLines) {
    result += '\n';
  }

  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}


/***/ }),

/***/ "./node_modules/graphql/language/directiveLocation.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/graphql/language/directiveLocation.mjs ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectiveLocation": function() { return /* binding */ DirectiveLocation; }
/* harmony export */ });
/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});
/**
 * The enum type representing the directive location values.
 */


/***/ }),

/***/ "./node_modules/graphql/language/kinds.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/kinds.mjs ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kind": function() { return /* binding */ Kind; }
/* harmony export */ });
/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = Object.freeze({
  // Name
  NAME: 'Name',
  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  // Values
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  // Directives
  DIRECTIVE: 'Directive',
  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  // Type System Extensions
  SCHEMA_EXTENSION: 'SchemaExtension',
  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
/**
 * The enum type representing the possible kind values of AST nodes.
 */


/***/ }),

/***/ "./node_modules/graphql/language/lexer.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/lexer.mjs ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lexer": function() { return /* binding */ Lexer; },
/* harmony export */   "isPunctuatorTokenKind": function() { return /* binding */ isPunctuatorTokenKind; }
/* harmony export */ });
/* harmony import */ var _error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error/syntaxError.mjs */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");
/* harmony import */ var _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");
/* harmony import */ var _blockString_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blockString.mjs */ "./node_modules/graphql/language/blockString.mjs");




/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */

var Lexer = /*#__PURE__*/function () {
  /**
   * The previously focused non-ignored token.
   */

  /**
   * The currently focused non-ignored token.
   */

  /**
   * The (1-indexed) line containing the current token.
   */

  /**
   * The character offset at which the current line begins.
   */
  function Lexer(source) {
    var startOfFileToken = new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.SOF, 0, 0, 0, 0, null);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */


  var _proto = Lexer.prototype;

  _proto.advance = function advance() {
    this.lastToken = this.token;
    var token = this.token = this.lookahead();
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  ;

  _proto.lookahead = function lookahead() {
    var token = this.token;

    if (token.kind !== _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EOF) {
      do {
        var _token$next;

        // Note: next is only mutable during parsing, so we cast to allow this.
        token = (_token$next = token.next) !== null && _token$next !== void 0 ? _token$next : token.next = readToken(this, token);
      } while (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.COMMENT);
    }

    return token;
  };

  return Lexer;
}();
/**
 * @internal
 */

function isPunctuatorTokenKind(kind) {
  return kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BANG || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.DOLLAR || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.AMP || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PAREN_L || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PAREN_R || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.SPREAD || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.COLON || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EQUALS || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.AT || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACKET_L || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACKET_R || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACE_L || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PIPE || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACE_R;
}

function printCharCode(code) {
  return (// NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
  );
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */


function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;
  var pos = prev.end;

  while (pos < bodyLength) {
    var code = body.charCodeAt(pos);
    var _line = lexer.line;

    var _col = 1 + pos - lexer.lineStart; // SourceCharacter


    switch (code) {
      case 0xfeff: // <BOM>

      case 9: //   \t

      case 32: //  <space>

      case 44:
        //  ,
        ++pos;
        continue;

      case 10:
        //  \n
        ++pos;
        ++lexer.line;
        lexer.lineStart = pos;
        continue;

      case 13:
        //  \r
        if (body.charCodeAt(pos + 1) === 10) {
          pos += 2;
        } else {
          ++pos;
        }

        ++lexer.line;
        lexer.lineStart = pos;
        continue;

      case 33:
        //  !
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BANG, pos, pos + 1, _line, _col, prev);

      case 35:
        //  #
        return readComment(source, pos, _line, _col, prev);

      case 36:
        //  $
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.DOLLAR, pos, pos + 1, _line, _col, prev);

      case 38:
        //  &
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.AMP, pos, pos + 1, _line, _col, prev);

      case 40:
        //  (
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PAREN_L, pos, pos + 1, _line, _col, prev);

      case 41:
        //  )
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PAREN_R, pos, pos + 1, _line, _col, prev);

      case 46:
        //  .
        if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
          return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.SPREAD, pos, pos + 3, _line, _col, prev);
        }

        break;

      case 58:
        //  :
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.COLON, pos, pos + 1, _line, _col, prev);

      case 61:
        //  =
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EQUALS, pos, pos + 1, _line, _col, prev);

      case 64:
        //  @
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.AT, pos, pos + 1, _line, _col, prev);

      case 91:
        //  [
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACKET_L, pos, pos + 1, _line, _col, prev);

      case 93:
        //  ]
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACKET_R, pos, pos + 1, _line, _col, prev);

      case 123:
        // {
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACE_L, pos, pos + 1, _line, _col, prev);

      case 124:
        // |
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PIPE, pos, pos + 1, _line, _col, prev);

      case 125:
        // }
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACE_R, pos, pos + 1, _line, _col, prev);

      case 34:
        //  "
        if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
          return readBlockString(source, pos, _line, _col, prev, lexer);
        }

        return readString(source, pos, _line, _col, prev);

      case 45: //  -

      case 48: //  0

      case 49: //  1

      case 50: //  2

      case 51: //  3

      case 52: //  4

      case 53: //  5

      case 54: //  6

      case 55: //  7

      case 56: //  8

      case 57:
        //  9
        return readNumber(source, pos, code, _line, _col, prev);

      case 65: //  A

      case 66: //  B

      case 67: //  C

      case 68: //  D

      case 69: //  E

      case 70: //  F

      case 71: //  G

      case 72: //  H

      case 73: //  I

      case 74: //  J

      case 75: //  K

      case 76: //  L

      case 77: //  M

      case 78: //  N

      case 79: //  O

      case 80: //  P

      case 81: //  Q

      case 82: //  R

      case 83: //  S

      case 84: //  T

      case 85: //  U

      case 86: //  V

      case 87: //  W

      case 88: //  X

      case 89: //  Y

      case 90: //  Z

      case 95: //  _

      case 97: //  a

      case 98: //  b

      case 99: //  c

      case 100: // d

      case 101: // e

      case 102: // f

      case 103: // g

      case 104: // h

      case 105: // i

      case 106: // j

      case 107: // k

      case 108: // l

      case 109: // m

      case 110: // n

      case 111: // o

      case 112: // p

      case 113: // q

      case 114: // r

      case 115: // s

      case 116: // t

      case 117: // u

      case 118: // v

      case 119: // w

      case 120: // x

      case 121: // y

      case 122:
        // z
        return readName(source, pos, _line, _col, prev);
    }

    throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, pos, unexpectedCharacterMessage(code));
  }

  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;
  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
}
/**
 * Report a message that an unexpected character was encountered.
 */


function unexpectedCharacterMessage(code) {
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
  }

  if (code === 39) {
    // '
    return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
  }

  return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
}
/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */


function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code;
  var position = start;

  do {
    code = body.charCodeAt(++position);
  } while (!isNaN(code) && ( // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */


function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = body.charCodeAt(++position);
  }

  if (code === 48) {
    // 0
    code = body.charCodeAt(++position);

    if (code >= 48 && code <= 57) {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
    }
  } else {
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 46) {
    // .
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;
    code = body.charCodeAt(++position);

    if (code === 43 || code === 45) {
      // + -
      code = body.charCodeAt(++position);
    }

    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  } // Numbers cannot be followed by . or NameStart


  if (code === 46 || isNameStart(code)) {
    throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
  }

  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(isFloat ? _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.FLOAT : _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.INT, start, position, line, col, prev, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading digits.
 */


function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;

  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = body.charCodeAt(++position);
    } while (code >= 48 && code <= 57); // 0 - 9


    return position;
  }

  throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
}
/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */


function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position)) && // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.STRING, start, position + 1, line, col, prev, value);
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009) {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    ++position;

    if (code === 92) {
      // \
      value += body.slice(chunkStart, position - 1);
      code = body.charCodeAt(position);

      switch (code) {
        case 34:
          value += '"';
          break;

        case 47:
          value += '/';
          break;

        case 92:
          value += '\\';
          break;

        case 98:
          value += '\b';
          break;

        case 102:
          value += '\f';
          break;

        case 110:
          value += '\n';
          break;

        case 114:
          value += '\r';
          break;

        case 116:
          value += '\t';
          break;

        case 117:
          {
            // uXXXX
            var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));

            if (charCode < 0) {
              var invalidSequence = body.slice(position + 1, position + 5);
              throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
            }

            value += String.fromCharCode(charCode);
            position += 4;
            break;
          }

        default:
          throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
      }

      ++position;
      chunkStart = position;
    }
  }

  throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, 'Unterminated string.');
}
/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */


function readBlockString(source, start, line, col, prev, lexer) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
    // Closing Triple-Quote (""")
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      rawValue += body.slice(chunkStart, position);
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, (0,_blockString_mjs__WEBPACK_IMPORTED_MODULE_3__.dedentBlockStringValue)(rawValue));
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else if ( // Escape Triple-Quote (\""")
    code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      rawValue += body.slice(chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, 'Unterminated string.');
}
/**
 * Converts four hexadecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */


function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}
/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */


function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */


function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;

  while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }

  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.NAME, start, position, line, col, prev, body.slice(start, position));
} // _ A-Z a-z


function isNameStart(code) {
  return code === 95 || code >= 65 && code <= 90 || code >= 97 && code <= 122;
}


/***/ }),

/***/ "./node_modules/graphql/language/location.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/language/location.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocation": function() { return /* binding */ getLocation; }
/* harmony export */ });
/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}


/***/ }),

/***/ "./node_modules/graphql/language/parser.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/parser.mjs ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parse": function() { return /* binding */ parse; },
/* harmony export */   "parseValue": function() { return /* binding */ parseValue; },
/* harmony export */   "parseType": function() { return /* binding */ parseType; },
/* harmony export */   "Parser": function() { return /* binding */ Parser; }
/* harmony export */ });
/* harmony import */ var _error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error/syntaxError.mjs */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony import */ var _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");
/* harmony import */ var _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");
/* harmony import */ var _source_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./source.mjs */ "./node_modules/graphql/language/source.mjs");
/* harmony import */ var _directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directiveLocation.mjs */ "./node_modules/graphql/language/directiveLocation.mjs");
/* harmony import */ var _lexer_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lexer.mjs */ "./node_modules/graphql/language/lexer.mjs");







/**
 * Configuration options to control parser behavior
 */

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source, options) {
  var parser = new Parser(source, options);
  return parser.parseDocument();
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */

function parseValue(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SOF);
  var value = parser.parseValueLiteral(false);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EOF);
  return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */

function parseType(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SOF);
  var type = parser.parseTypeReference();
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EOF);
  return type;
}
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */

var Parser = /*#__PURE__*/function () {
  function Parser(source, options) {
    var sourceObj = (0,_source_mjs__WEBPACK_IMPORTED_MODULE_1__.isSource)(source) ? source : new _source_mjs__WEBPACK_IMPORTED_MODULE_1__.Source(source);
    this._lexer = new _lexer_mjs__WEBPACK_IMPORTED_MODULE_2__.Lexer(sourceObj);
    this._options = options;
  }
  /**
   * Converts a name lex token into a name parse node.
   */


  var _proto = Parser.prototype;

  _proto.parseName = function parseName() {
    var token = this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.NAME,
      value: token.value,
      loc: this.loc(token)
    };
  } // Implements the parsing rules in the Document section.

  /**
   * Document : Definition+
   */
  ;

  _proto.parseDocument = function parseDocument() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.DOCUMENT,
      definitions: this.many(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SOF, this.parseDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EOF),
      loc: this.loc(start)
    };
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   */
  ;

  _proto.parseDefinition = function parseDefinition() {
    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME)) {
      switch (this._lexer.token.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition();

        case 'fragment':
          return this.parseFragmentDefinition();

        case 'schema':
        case 'scalar':
        case 'type':
        case 'interface':
        case 'union':
        case 'enum':
        case 'input':
        case 'directive':
          return this.parseTypeSystemDefinition();

        case 'extend':
          return this.parseTypeSystemExtension();
      }
    } else if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    } else if (this.peekDescription()) {
      return this.parseTypeSystemDefinition();
    }

    throw this.unexpected();
  } // Implements the parsing rules in the Operations section.

  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  ;

  _proto.parseOperationDefinition = function parseOperationDefinition() {
    var start = this._lexer.token;

    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L)) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OPERATION_DEFINITION,
        operation: 'query',
        name: undefined,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    var operation = this.parseOperationType();
    var name;

    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME)) {
      name = this.parseName();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OPERATION_DEFINITION,
      operation: operation,
      name: name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * OperationType : one of query mutation subscription
   */
  ;

  _proto.parseOperationType = function parseOperationType() {
    var operationToken = this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME);

    switch (operationToken.value) {
      case 'query':
        return 'query';

      case 'mutation':
        return 'mutation';

      case 'subscription':
        return 'subscription';
    }

    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  ;

  _proto.parseVariableDefinitions = function parseVariableDefinitions() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_L, this.parseVariableDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_R);
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseVariableDefinition = function parseVariableDefinition() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EQUALS) ? this.parseValueLiteral(true) : undefined,
      directives: this.parseDirectives(true),
      loc: this.loc(start)
    };
  }
  /**
   * Variable : $ Name
   */
  ;

  _proto.parseVariable = function parseVariable() {
    var start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.DOLLAR);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.VARIABLE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  }
  /**
   * SelectionSet : { Selection+ }
   */
  ;

  _proto.parseSelectionSet = function parseSelectionSet() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SELECTION_SET,
      selections: this.many(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, this.parseSelection, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  ;

  _proto.parseSelection = function parseSelection() {
    return this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  ;

  _proto.parseField = function parseField() {
    var start = this._lexer.token;
    var nameOrAlias = this.parseName();
    var alias;
    var name;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FIELD,
      alias: alias,
      name: name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L) ? this.parseSelectionSet() : undefined,
      loc: this.loc(start)
    };
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  ;

  _proto.parseArguments = function parseArguments(isConst) {
    var item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseArgument = function parseArgument() {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ARGUMENT,
      name: name,
      value: this.parseValueLiteral(false),
      loc: this.loc(start)
    };
  };

  _proto.parseConstArgument = function parseConstArgument() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ARGUMENT,
      name: this.parseName(),
      value: (this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON), this.parseValueLiteral(true)),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Fragments section.

  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  ;

  _proto.parseFragment = function parseFragment() {
    var start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SPREAD);
    var hasTypeCondition = this.expectOptionalKeyword('on');

    if (!hasTypeCondition && this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME)) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false),
        loc: this.loc(start)
      };
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  ;

  _proto.parseFragmentDefinition = function parseFragmentDefinition() {
    var _this$_options;

    var start = this._lexer.token;
    this.expectKeyword('fragment'); // Experimental support for defining variables within fragments changes
    // the grammar of FragmentDefinition:
    //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

    if (((_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.experimentalFragmentVariables) === true) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentName : Name but not `on`
   */
  ;

  _proto.parseFragmentName = function parseFragmentName() {
    if (this._lexer.token.value === 'on') {
      throw this.unexpected();
    }

    return this.parseName();
  } // Implements the parsing rules in the Values section.

  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  ;

  _proto.parseValueLiteral = function parseValueLiteral(isConst) {
    var token = this._lexer.token;

    switch (token.kind) {
      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_L:
        return this.parseList(isConst);

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L:
        return this.parseObject(isConst);

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.INT:
        this._lexer.advance();

        return {
          kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INT,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.FLOAT:
        this._lexer.advance();

        return {
          kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FLOAT,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.STRING:
      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME:
        this._lexer.advance();

        switch (token.value) {
          case 'true':
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.BOOLEAN,
              value: true,
              loc: this.loc(token)
            };

          case 'false':
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.BOOLEAN,
              value: false,
              loc: this.loc(token)
            };

          case 'null':
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.NULL,
              loc: this.loc(token)
            };

          default:
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ENUM,
              value: token.value,
              loc: this.loc(token)
            };
        }

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.DOLLAR:
        if (!isConst) {
          return this.parseVariable();
        }

        break;
    }

    throw this.unexpected();
  };

  _proto.parseStringLiteral = function parseStringLiteral() {
    var token = this._lexer.token;

    this._lexer.advance();

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.STRING,
      value: token.value,
      block: token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BLOCK_STRING,
      loc: this.loc(token)
    };
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  ;

  _proto.parseList = function parseList(isConst) {
    var _this = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this.parseValueLiteral(isConst);
    };

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.LIST,
      values: this.any(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   */
  ;

  _proto.parseObject = function parseObject(isConst) {
    var _this2 = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this2.parseObjectField(isConst);
    };

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OBJECT,
      fields: this.any(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseObjectField = function parseObjectField(isConst) {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OBJECT_FIELD,
      name: name,
      value: this.parseValueLiteral(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Directives section.

  /**
   * Directives[Const] : Directive[?Const]+
   */
  ;

  _proto.parseDirectives = function parseDirectives(isConst) {
    var directives = [];

    while (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }

    return directives;
  }
  /**
   * Directive[Const] : @ Name Arguments[?Const]?
   */
  ;

  _proto.parseDirective = function parseDirective(isConst) {
    var start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AT);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Types section.

  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  ;

  _proto.parseTypeReference = function parseTypeReference() {
    var start = this._lexer.token;
    var type;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_L)) {
      type = this.parseTypeReference();
      this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_R);
      type = {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.LIST_TYPE,
        type: type,
        loc: this.loc(start)
      };
    } else {
      type = this.parseNamedType();
    }

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BANG)) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.NON_NULL_TYPE,
        type: type,
        loc: this.loc(start)
      };
    }

    return type;
  }
  /**
   * NamedType : Name
   */
  ;

  _proto.parseNamedType = function parseNamedType() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.NAMED_TYPE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Type Definition section.

  /**
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
    // Many definitions begin with a description and require a lookahead.
    var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;

    if (keywordToken.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaDefinition();

        case 'scalar':
          return this.parseScalarTypeDefinition();

        case 'type':
          return this.parseObjectTypeDefinition();

        case 'interface':
          return this.parseInterfaceTypeDefinition();

        case 'union':
          return this.parseUnionTypeDefinition();

        case 'enum':
          return this.parseEnumTypeDefinition();

        case 'input':
          return this.parseInputObjectTypeDefinition();

        case 'directive':
          return this.parseDirectiveDefinition();
      }
    }

    throw this.unexpected(keywordToken);
  };

  _proto.peekDescription = function peekDescription() {
    return this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.STRING) || this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  ;

  _proto.parseDescription = function parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   */
  ;

  _proto.parseSchemaDefinition = function parseSchemaDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.many(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SCHEMA_DEFINITION,
      description: description,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  ;

  _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
    var start = this._lexer.token;
    var operation = this.parseOperationType();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    var type = this.parseNamedType();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OPERATION_TYPE_DEFINITION,
      operation: operation,
      type: type,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  ;

  _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SCALAR_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  ;

  _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
    var _this$_options2;

    if (!this.expectOptionalKeyword('implements')) {
      return [];
    }

    if (((_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.allowLegacySDLImplementsInterfaces) === true) {
      var types = []; // Optional leading ampersand

      this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AMP);

      do {
        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AMP) || this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME));

      return types;
    }

    return this.delimitedMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AMP, this.parseNamedType);
  }
  /**
   * FieldsDefinition : { FieldDefinition+ }
   */
  ;

  _proto.parseFieldsDefinition = function parseFieldsDefinition() {
    var _this$_options3;

    // Legacy support for the SDL?
    if (((_this$_options3 = this._options) === null || _this$_options3 === void 0 ? void 0 : _this$_options3.allowLegacySDLEmptyFields) === true && this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L) && this._lexer.lookahead().kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R) {
      this._lexer.advance();

      this._lexer.advance();

      return [];
    }

    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, this.parseFieldDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R);
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  ;

  _proto.parseFieldDefinition = function parseFieldDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    var type = this.parseTypeReference();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FIELD_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      type: type,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  ;

  _proto.parseArgumentDefs = function parseArgumentDefs() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_L, this.parseInputValueDef, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_R);
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseInputValueDef = function parseInputValueDef() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    var type = this.parseTypeReference();
    var defaultValue;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EQUALS)) {
      defaultValue = this.parseValueLiteral(true);
    }

    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INPUT_VALUE_DEFINITION,
      description: description,
      name: name,
      type: type,
      defaultValue: defaultValue,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INTERFACE_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  ;

  _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.UNION_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  ;

  _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
    return this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EQUALS) ? this.delimitedMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  ;

  _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ENUM_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * EnumValuesDefinition : { EnumValueDefinition+ }
   */
  ;

  _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, this.parseEnumValueDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R);
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   *
   * EnumValue : Name
   */
  ;

  _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ENUM_VALUE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  ;

  _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InputFieldsDefinition : { InputValueDefinition+ }
   */
  ;

  _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, this.parseInputValueDef, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R);
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
    var keywordToken = this._lexer.lookahead();

    if (keywordToken.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaExtension();

        case 'scalar':
          return this.parseScalarTypeExtension();

        case 'type':
          return this.parseObjectTypeExtension();

        case 'interface':
          return this.parseInterfaceTypeExtension();

        case 'union':
          return this.parseUnionTypeExtension();

        case 'enum':
          return this.parseEnumTypeExtension();

        case 'input':
          return this.parseInputObjectTypeExtension();
      }
    }

    throw this.unexpected(keywordToken);
  }
  /**
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   */
  ;

  _proto.parseSchemaExtension = function parseSchemaExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R);

    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SCHEMA_EXTENSION,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  ;

  _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);

    if (directives.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SCALAR_TYPE_EXTENSION,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  ;

  _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OBJECT_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  ;

  _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INTERFACE_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  ;

  _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();

    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.UNION_TYPE_EXTENSION,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  ;

  _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();

    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ENUM_TYPE_EXTENSION,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  ;

  _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   */
  ;

  _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('directive');
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AT);
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    var repeatable = this.expectOptionalKeyword('repeatable');
    this.expectKeyword('on');
    var locations = this.parseDirectiveLocations();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.DIRECTIVE_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      repeatable: repeatable,
      locations: locations,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  ;

  _proto.parseDirectiveLocations = function parseDirectiveLocations() {
    return this.delimitedMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  ;

  _proto.parseDirectiveLocation = function parseDirectiveLocation() {
    var start = this._lexer.token;
    var name = this.parseName();

    if (_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation[name.value] !== undefined) {
      return name;
    }

    throw this.unexpected(start);
  } // Core parsing utility functions

  /**
   * Returns a location object, used to identify the place in the source that created a given parsed object.
   */
  ;

  _proto.loc = function loc(startToken) {
    var _this$_options4;

    if (((_this$_options4 = this._options) === null || _this$_options4 === void 0 ? void 0 : _this$_options4.noLocation) !== true) {
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_5__.Location(startToken, this._lexer.lastToken, this._lexer.source);
    }
  }
  /**
   * Determines if the next token is of a given kind
   */
  ;

  _proto.peek = function peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectToken = function expectToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_6__.syntaxError)(this._lexer.source, token.start, "Expected ".concat(getTokenKindDesc(kind), ", found ").concat(getTokenDesc(token), "."));
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and return undefined.
   */
  ;

  _proto.expectOptionalToken = function expectOptionalToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    return undefined;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectKeyword = function expectKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME && token.value === value) {
      this._lexer.advance();
    } else {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_6__.syntaxError)(this._lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat(getTokenDesc(token), "."));
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  ;

  _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME && token.value === value) {
      this._lexer.advance();

      return true;
    }

    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  ;

  _proto.unexpected = function unexpected(atToken) {
    var token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_6__.syntaxError)(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token), "."));
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.any = function any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }

    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      var nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    }

    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.many = function many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));

    return nodes;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  ;

  _proto.delimitedMany = function delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));

    return nodes;
  };

  return Parser;
}();
/**
 * A helper function to describe a token as a string for debugging.
 */

function getTokenDesc(token) {
  var value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? " \"".concat(value, "\"") : '');
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */


function getTokenKindDesc(kind) {
  return (0,_lexer_mjs__WEBPACK_IMPORTED_MODULE_2__.isPunctuatorTokenKind)(kind) ? "\"".concat(kind, "\"") : kind;
}


/***/ }),

/***/ "./node_modules/graphql/language/printLocation.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/language/printLocation.mjs ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printLocation": function() { return /* binding */ printLocation; },
/* harmony export */   "printSourceLocation": function() { return /* binding */ printSourceLocation; }
/* harmony export */ });
/* harmony import */ var _location_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.mjs */ "./node_modules/graphql/language/location.mjs");

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printLocation(location) {
  return printSourceLocation(location.source, (0,_location_mjs__WEBPACK_IMPORTED_MODULE_0__.getLocation)(location.source, location.start));
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = sourceLocation.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = sourceLocation.line + lineOffset;
  var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = sourceLocation.column + columnOffset;
  var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
  var lines = body.split(/\r\n|[\n\r]/g);
  var locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    var subLineIndex = Math.floor(columnNum / 80);
    var subLineColumnNum = columnNum % 80;
    var subLines = [];

    for (var i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }

    return locationStr + printPrefixedLines([["".concat(lineNum), subLines[0]]].concat(subLines.slice(1, subLineIndex + 1).map(function (subLine) {
      return ['', subLine];
    }), [[' ', whitespace(subLineColumnNum - 1) + '^'], ['', subLines[subLineIndex + 1]]]));
  }

  return locationStr + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1), lines[lineIndex - 1]], ["".concat(lineNum), locationLine], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    var _ = _ref[0],
        line = _ref[1];
    return line !== undefined;
  });
  var padLen = Math.max.apply(Math, existingLines.map(function (_ref2) {
    var prefix = _ref2[0];
    return prefix.length;
  }));
  return existingLines.map(function (_ref3) {
    var prefix = _ref3[0],
        line = _ref3[1];
    return leftPad(padLen, prefix) + (line ? ' | ' + line : ' |');
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function leftPad(len, str) {
  return whitespace(len - str.length) + str;
}


/***/ }),

/***/ "./node_modules/graphql/language/source.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/source.mjs ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Source": function() { return /* binding */ Source; },
/* harmony export */   "isSource": function() { return /* binding */ isSource; }
/* harmony export */ });
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/instanceOf.mjs */ "./node_modules/graphql/jsutils/instanceOf.mjs");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */
var Source = /*#__PURE__*/function () {
  function Source(body) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GraphQL request';
    var locationOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      line: 1,
      column: 1
    };
    typeof body === 'string' || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(0, "Body must be a string. Received: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(body), "."));
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(0, 'line in locationOffset is 1-indexed and must be positive.');
    this.locationOffset.column > 0 || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(0, 'column in locationOffset is 1-indexed and must be positive.');
  } // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet


  _createClass(Source, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__.SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'Source';
    }
  }]);

  return Source;
}();
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */

// eslint-disable-next-line no-redeclare
function isSource(source) {
  return (0,_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(source, Source);
}


/***/ }),

/***/ "./node_modules/graphql/language/tokenKind.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/language/tokenKind.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenKind": function() { return /* binding */ TokenKind; }
/* harmony export */ });
/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});
/**
 * The enum type representing the token kinds values.
 */


/***/ }),

/***/ "./node_modules/graphql/polyfills/symbols.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/polyfills/symbols.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SYMBOL_ITERATOR": function() { return /* binding */ SYMBOL_ITERATOR; },
/* harmony export */   "SYMBOL_ASYNC_ITERATOR": function() { return /* binding */ SYMBOL_ASYNC_ITERATOR; },
/* harmony export */   "SYMBOL_TO_STRING_TAG": function() { return /* binding */ SYMBOL_TO_STRING_TAG; }
/* harmony export */ });
// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var SYMBOL_ITERATOR = typeof Symbol === 'function' && Symbol.iterator != null ? Symbol.iterator : '@@iterator'; // In ES2017 (or a polyfilled) environment, this will be Symbol.asyncIterator
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')

var SYMBOL_ASYNC_ITERATOR = typeof Symbol === 'function' && Symbol.asyncIterator != null ? Symbol.asyncIterator : '@@asyncIterator'; // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')

var SYMBOL_TO_STRING_TAG = typeof Symbol === 'function' && Symbol.toStringTag != null ? Symbol.toStringTag : '@@toStringTag';


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _taggedTemplateLiteral; }
/* harmony export */ });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwtdGFnL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvZXJyb3IvR3JhcGhRTEVycm9yLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvZXJyb3Ivc3ludGF4RXJyb3IubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9qc3V0aWxzL2RlZmluZUluc3BlY3QubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9qc3V0aWxzL2RldkFzc2VydC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2pzdXRpbHMvaW5zcGVjdC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2pzdXRpbHMvaW5zdGFuY2VPZi5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2pzdXRpbHMvaW52YXJpYW50Lm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvanN1dGlscy9pc09iamVjdExpa2UubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9qc3V0aWxzL25vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2wubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9hc3QubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9ibG9ja1N0cmluZy5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2xhbmd1YWdlL2RpcmVjdGl2ZUxvY2F0aW9uLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2Uva2luZHMubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9sZXhlci5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2xhbmd1YWdlL2xvY2F0aW9uLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvcGFyc2VyLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvcHJpbnRMb2NhdGlvbi5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2xhbmd1YWdlL3NvdXJjZS5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2xhbmd1YWdlL3Rva2VuS2luZC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL3BvbHlmaWxscy9zeW1ib2xzLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC5qcyJdLCJuYW1lcyI6WyJBTExfUFJPRFVDVFNfUVVFUlkiLCJncWwiLCJQcm9kdWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLGtCQUFrQixHQUFHQyxrREFBSCxtQkFBeEI7O0FBR0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQixzQkFDRTtBQUFBLDJCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0gsQ0FORDs7S0FBTUEsUTtBQVFOLCtEQUFlQSxRQUFmOzs7Ozs7Ozs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSEE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0R1RDtBQUNyQjtBQUNVO0FBQ2U7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNPLCtHQUErRztBQUN0SDs7QUFFTyxvSUFBb0k7O0FBRXBJOzs7Ozs7Ozs7Ozs7Ozs7O0FDUFE7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy42NDhjNDFkNzExODVkZDExYTY0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuXHJcbmNvbnN0IEFMTF9QUk9EVUNUU19RVUVSWSA9IGdxbGBcclxuXHJcbmBcclxuY29uc3QgUHJvZHVjdHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cD5Qcm9kdWN0cyEhPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzIiwidmFyIHBhcnNlciA9IHJlcXVpcmUoJ2dyYXBocWwvbGFuZ3VhZ2UvcGFyc2VyJyk7XG5cbnZhciBwYXJzZSA9IHBhcnNlci5wYXJzZTtcblxuLy8gU3RyaXAgaW5zaWduaWZpY2FudCB3aGl0ZXNwYWNlXG4vLyBOb3RlIHRoYXQgdGhpcyBjb3VsZCBkbyBhIGxvdCBtb3JlLCBzdWNoIGFzIHJlb3JkZXIgZmllbGRzIGV0Yy5cbmZ1bmN0aW9uIG5vcm1hbGl6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bXFxzLF0rL2csICcgJykudHJpbSgpO1xufVxuXG4vLyBBIG1hcCBkb2NTdHJpbmcgLT4gZ3JhcGhxbCBkb2N1bWVudFxudmFyIGRvY0NhY2hlID0ge307XG5cbi8vIEEgbWFwIGZyYWdtZW50TmFtZSAtPiBbbm9ybWFsaXplZCBzb3VyY2VdXG52YXIgZnJhZ21lbnRTb3VyY2VNYXAgPSB7fTtcblxuZnVuY3Rpb24gY2FjaGVLZXlGcm9tTG9jKGxvYykge1xuICByZXR1cm4gbm9ybWFsaXplKGxvYy5zb3VyY2UuYm9keS5zdWJzdHJpbmcobG9jLnN0YXJ0LCBsb2MuZW5kKSk7XG59XG5cbi8vIEZvciB0ZXN0aW5nLlxuZnVuY3Rpb24gcmVzZXRDYWNoZXMoKSB7XG4gIGRvY0NhY2hlID0ge307XG4gIGZyYWdtZW50U291cmNlTWFwID0ge307XG59XG5cbi8vIFRha2UgYSB1bnN0cmlwcGVkIHBhcnNlZCBkb2N1bWVudCAocXVlcnkvbXV0YXRpb24gb3IgZXZlbiBmcmFnbWVudCksIGFuZFxuLy8gY2hlY2sgYWxsIGZyYWdtZW50IGRlZmluaXRpb25zLCBjaGVja2luZyBmb3IgbmFtZS0+c291cmNlIHVuaXF1ZW5lc3MuXG4vLyBXZSBhbHNvIHdhbnQgdG8gbWFrZSBzdXJlIG9ubHkgdW5pcXVlIGZyYWdtZW50cyBleGlzdCBpbiB0aGUgZG9jdW1lbnQuXG52YXIgcHJpbnRGcmFnbWVudFdhcm5pbmdzID0gdHJ1ZTtcbmZ1bmN0aW9uIHByb2Nlc3NGcmFnbWVudHMoYXN0KSB7XG4gIHZhciBhc3RGcmFnbWVudE1hcCA9IHt9O1xuICB2YXIgZGVmaW5pdGlvbnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFzdC5kZWZpbml0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBmcmFnbWVudERlZmluaXRpb24gPSBhc3QuZGVmaW5pdGlvbnNbaV07XG5cbiAgICBpZiAoZnJhZ21lbnREZWZpbml0aW9uLmtpbmQgPT09ICdGcmFnbWVudERlZmluaXRpb24nKSB7XG4gICAgICB2YXIgZnJhZ21lbnROYW1lID0gZnJhZ21lbnREZWZpbml0aW9uLm5hbWUudmFsdWU7XG4gICAgICB2YXIgc291cmNlS2V5ID0gY2FjaGVLZXlGcm9tTG9jKGZyYWdtZW50RGVmaW5pdGlvbi5sb2MpO1xuXG4gICAgICAvLyBXZSBrbm93IHNvbWV0aGluZyBhYm91dCB0aGlzIGZyYWdtZW50XG4gICAgICBpZiAoZnJhZ21lbnRTb3VyY2VNYXAuaGFzT3duUHJvcGVydHkoZnJhZ21lbnROYW1lKSAmJiAhZnJhZ21lbnRTb3VyY2VNYXBbZnJhZ21lbnROYW1lXVtzb3VyY2VLZXldKSB7XG5cbiAgICAgICAgLy8gdGhpcyBpcyBhIHByb2JsZW0gYmVjYXVzZSB0aGUgYXBwIGRldmVsb3BlciBpcyB0cnlpbmcgdG8gcmVnaXN0ZXIgYW5vdGhlciBmcmFnbWVudCB3aXRoXG4gICAgICAgIC8vIHRoZSBzYW1lIG5hbWUgYXMgb25lIHByZXZpb3VzbHkgcmVnaXN0ZXJlZC4gU28sIHdlIHRlbGwgdGhlbSBhYm91dCBpdC5cbiAgICAgICAgaWYgKHByaW50RnJhZ21lbnRXYXJuaW5ncykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIldhcm5pbmc6IGZyYWdtZW50IHdpdGggbmFtZSBcIiArIGZyYWdtZW50TmFtZSArIFwiIGFscmVhZHkgZXhpc3RzLlxcblwiXG4gICAgICAgICAgICArIFwiZ3JhcGhxbC10YWcgZW5mb3JjZXMgYWxsIGZyYWdtZW50IG5hbWVzIGFjcm9zcyB5b3VyIGFwcGxpY2F0aW9uIHRvIGJlIHVuaXF1ZTsgcmVhZCBtb3JlIGFib3V0XFxuXCJcbiAgICAgICAgICAgICsgXCJ0aGlzIGluIHRoZSBkb2NzOiBodHRwOi8vZGV2LmFwb2xsb2RhdGEuY29tL2NvcmUvZnJhZ21lbnRzLmh0bWwjdW5pcXVlLW5hbWVzXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnJhZ21lbnRTb3VyY2VNYXBbZnJhZ21lbnROYW1lXVtzb3VyY2VLZXldID0gdHJ1ZTtcblxuICAgICAgfSBlbHNlIGlmICghZnJhZ21lbnRTb3VyY2VNYXAuaGFzT3duUHJvcGVydHkoZnJhZ21lbnROYW1lKSkge1xuICAgICAgICBmcmFnbWVudFNvdXJjZU1hcFtmcmFnbWVudE5hbWVdID0ge307XG4gICAgICAgIGZyYWdtZW50U291cmNlTWFwW2ZyYWdtZW50TmFtZV1bc291cmNlS2V5XSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghYXN0RnJhZ21lbnRNYXBbc291cmNlS2V5XSkge1xuICAgICAgICBhc3RGcmFnbWVudE1hcFtzb3VyY2VLZXldID0gdHJ1ZTtcbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChmcmFnbWVudERlZmluaXRpb24pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWZpbml0aW9ucy5wdXNoKGZyYWdtZW50RGVmaW5pdGlvbik7XG4gICAgfVxuICB9XG5cbiAgYXN0LmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gIHJldHVybiBhc3Q7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVGcmFnbWVudFdhcm5pbmdzKCkge1xuICBwcmludEZyYWdtZW50V2FybmluZ3MgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc3RyaXBMb2MoZG9jLCByZW1vdmVMb2NBdFRoaXNMZXZlbCkge1xuICB2YXIgZG9jVHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkb2MpO1xuXG4gIGlmIChkb2NUeXBlID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgcmV0dXJuIGRvYy5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBzdHJpcExvYyhkLCByZW1vdmVMb2NBdFRoaXNMZXZlbCk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoZG9jVHlwZSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgaW5wdXQuJyk7XG4gIH1cblxuICAvLyBXZSBkb24ndCB3YW50IHRvIHJlbW92ZSB0aGUgcm9vdCBsb2MgZmllbGQgc28gd2UgY2FuIHVzZSBpdFxuICAvLyBmb3IgZnJhZ21lbnQgc3Vic3RpdHV0aW9uIChzZWUgYmVsb3cpXG4gIGlmIChyZW1vdmVMb2NBdFRoaXNMZXZlbCAmJiBkb2MubG9jKSB7XG4gICAgZGVsZXRlIGRvYy5sb2M7XG4gIH1cblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYXBvbGxvZ3JhcGhxbC9ncmFwaHFsLXRhZy9pc3N1ZXMvNDBcbiAgaWYgKGRvYy5sb2MpIHtcbiAgICBkZWxldGUgZG9jLmxvYy5zdGFydFRva2VuO1xuICAgIGRlbGV0ZSBkb2MubG9jLmVuZFRva2VuO1xuICB9XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhkb2MpO1xuICB2YXIga2V5O1xuICB2YXIgdmFsdWU7XG4gIHZhciB2YWx1ZVR5cGU7XG5cbiAgZm9yIChrZXkgaW4ga2V5cykge1xuICAgIGlmIChrZXlzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhbHVlID0gZG9jW2tleXNba2V5XV07XG4gICAgICB2YWx1ZVR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG4gICAgICBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBPYmplY3RdJyB8fCB2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgZG9jW2tleXNba2V5XV0gPSBzdHJpcExvYyh2YWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRvYztcbn1cblxudmFyIGV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzID0gZmFsc2U7XG5mdW5jdGlvbiBwYXJzZURvY3VtZW50KGRvYykge1xuICB2YXIgY2FjaGVLZXkgPSBub3JtYWxpemUoZG9jKTtcblxuICBpZiAoZG9jQ2FjaGVbY2FjaGVLZXldKSB7XG4gICAgcmV0dXJuIGRvY0NhY2hlW2NhY2hlS2V5XTtcbiAgfVxuXG4gIHZhciBwYXJzZWQgPSBwYXJzZShkb2MsIHsgZXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXM6IGV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzIH0pO1xuICBpZiAoIXBhcnNlZCB8fCBwYXJzZWQua2luZCAhPT0gJ0RvY3VtZW50Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgdmFsaWQgR3JhcGhRTCBkb2N1bWVudC4nKTtcbiAgfVxuXG4gIC8vIGNoZWNrIHRoYXQgYWxsIFwibmV3XCIgZnJhZ21lbnRzIGluc2lkZSB0aGUgZG9jdW1lbnRzIGFyZSBjb25zaXN0ZW50IHdpdGhcbiAgLy8gZXhpc3RpbmcgZnJhZ21lbnRzIG9mIHRoZSBzYW1lIG5hbWVcbiAgcGFyc2VkID0gcHJvY2Vzc0ZyYWdtZW50cyhwYXJzZWQpO1xuICBwYXJzZWQgPSBzdHJpcExvYyhwYXJzZWQsIGZhbHNlKTtcbiAgZG9jQ2FjaGVbY2FjaGVLZXldID0gcGFyc2VkO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzKCkge1xuICBleHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcygpIHtcbiAgZXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMgPSBmYWxzZTtcbn1cblxuLy8gWFhYIFRoaXMgc2hvdWxkIGV2ZW50dWFsbHkgZGlzYWxsb3cgYXJiaXRyYXJ5IHN0cmluZyBpbnRlcnBvbGF0aW9uLCBsaWtlIFJlbGF5IGRvZXNcbmZ1bmN0aW9uIGdxbCgvKiBhcmd1bWVudHMgKi8pIHtcbiAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gIHZhciBsaXRlcmFscyA9IGFyZ3NbMF07XG5cbiAgLy8gV2UgYWx3YXlzIGdldCBsaXRlcmFsc1swXSBhbmQgdGhlbiBtYXRjaGluZyBwb3N0IGxpdGVyYWxzIGZvciBlYWNoIGFyZyBnaXZlblxuICB2YXIgcmVzdWx0ID0gKHR5cGVvZihsaXRlcmFscykgPT09IFwic3RyaW5nXCIpID8gbGl0ZXJhbHMgOiBsaXRlcmFsc1swXTtcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJnc1tpXSAmJiBhcmdzW2ldLmtpbmQgJiYgYXJnc1tpXS5raW5kID09PSAnRG9jdW1lbnQnKSB7XG4gICAgICByZXN1bHQgKz0gYXJnc1tpXS5sb2Muc291cmNlLmJvZHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCArPSBhcmdzW2ldO1xuICAgIH1cblxuICAgIHJlc3VsdCArPSBsaXRlcmFsc1tpXTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZURvY3VtZW50KHJlc3VsdCk7XG59XG5cbi8vIFN1cHBvcnQgdHlwZXNjcmlwdCwgd2hpY2ggaXNuJ3QgYXMgbmljZSBhcyBCYWJlbCBhYm91dCBkZWZhdWx0IGV4cG9ydHNcbmdxbC5kZWZhdWx0ID0gZ3FsO1xuZ3FsLnJlc2V0Q2FjaGVzID0gcmVzZXRDYWNoZXM7XG5ncWwuZGlzYWJsZUZyYWdtZW50V2FybmluZ3MgPSBkaXNhYmxlRnJhZ21lbnRXYXJuaW5ncztcbmdxbC5lbmFibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IGVuYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzO1xuZ3FsLmRpc2FibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IGRpc2FibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcztcblxubW9kdWxlLmV4cG9ydHMgPSBncWw7XG4iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkOyBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzOyBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7IGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpOyBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTsgfSBmdW5jdGlvbiBXcmFwcGVyKCkgeyByZXR1cm4gX2NvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpOyB9IFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IFdyYXBwZXIsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IHJldHVybiBfc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpOyB9OyByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7IH1cblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHsgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0OyB9IGVsc2UgeyBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IHZhciBhID0gW251bGxdOyBhLnB1c2guYXBwbHkoYSwgYXJncyk7IHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTsgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7IGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpOyByZXR1cm4gaW5zdGFuY2U7IH07IH0gcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7IHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG4vLyBGSVhNRTpcbi8vIGZsb3dsaW50IHVuaW5pdGlhbGl6ZWQtaW5zdGFuY2UtcHJvcGVydHk6b2ZmXG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gXCIuLi9qc3V0aWxzL2lzT2JqZWN0TGlrZS5tanNcIjtcbmltcG9ydCB7IFNZTUJPTF9UT19TVFJJTkdfVEFHIH0gZnJvbSBcIi4uL3BvbHlmaWxscy9zeW1ib2xzLm1qc1wiO1xuaW1wb3J0IHsgZ2V0TG9jYXRpb24gfSBmcm9tIFwiLi4vbGFuZ3VhZ2UvbG9jYXRpb24ubWpzXCI7XG5pbXBvcnQgeyBwcmludExvY2F0aW9uLCBwcmludFNvdXJjZUxvY2F0aW9uIH0gZnJvbSBcIi4uL2xhbmd1YWdlL3ByaW50TG9jYXRpb24ubWpzXCI7XG4vKipcbiAqIEEgR3JhcGhRTEVycm9yIGRlc2NyaWJlcyBhbiBFcnJvciBmb3VuZCBkdXJpbmcgdGhlIHBhcnNlLCB2YWxpZGF0ZSwgb3JcbiAqIGV4ZWN1dGUgcGhhc2VzIG9mIHBlcmZvcm1pbmcgYSBHcmFwaFFMIG9wZXJhdGlvbi4gSW4gYWRkaXRpb24gdG8gYSBtZXNzYWdlXG4gKiBhbmQgc3RhY2sgdHJhY2UsIGl0IGFsc28gaW5jbHVkZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGxvY2F0aW9ucyBpbiBhXG4gKiBHcmFwaFFMIGRvY3VtZW50IGFuZC9vciBleGVjdXRpb24gcmVzdWx0IHRoYXQgY29ycmVzcG9uZCB0byB0aGUgRXJyb3IuXG4gKi9cblxuZXhwb3J0IHZhciBHcmFwaFFMRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9FcnJvcikge1xuICBfaW5oZXJpdHMoR3JhcGhRTEVycm9yLCBfRXJyb3IpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoR3JhcGhRTEVycm9yKTtcblxuICAvKipcbiAgICogQSBtZXNzYWdlIGRlc2NyaWJpbmcgdGhlIEVycm9yIGZvciBkZWJ1Z2dpbmcgcHVycG9zZXMuXG4gICAqXG4gICAqIEVudW1lcmFibGUsIGFuZCBhcHBlYXJzIGluIHRoZSByZXN1bHQgb2YgSlNPTi5zdHJpbmdpZnkoKS5cbiAgICpcbiAgICogTm90ZTogc2hvdWxkIGJlIHRyZWF0ZWQgYXMgcmVhZG9ubHksIGRlc3BpdGUgaW52YXJpYW50IHVzYWdlLlxuICAgKi9cblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgeyBsaW5lLCBjb2x1bW4gfSBsb2NhdGlvbnMgd2l0aGluIHRoZSBzb3VyY2UgR3JhcGhRTCBkb2N1bWVudFxuICAgKiB3aGljaCBjb3JyZXNwb25kIHRvIHRoaXMgZXJyb3IuXG4gICAqXG4gICAqIEVycm9ycyBkdXJpbmcgdmFsaWRhdGlvbiBvZnRlbiBjb250YWluIG11bHRpcGxlIGxvY2F0aW9ucywgZm9yIGV4YW1wbGUgdG9cbiAgICogcG9pbnQgb3V0IHR3byB0aGluZ3Mgd2l0aCB0aGUgc2FtZSBuYW1lLiBFcnJvcnMgZHVyaW5nIGV4ZWN1dGlvbiBpbmNsdWRlIGFcbiAgICogc2luZ2xlIGxvY2F0aW9uLCB0aGUgZmllbGQgd2hpY2ggcHJvZHVjZWQgdGhlIGVycm9yLlxuICAgKlxuICAgKiBFbnVtZXJhYmxlLCBhbmQgYXBwZWFycyBpbiB0aGUgcmVzdWx0IG9mIEpTT04uc3RyaW5naWZ5KCkuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBkZXNjcmliaW5nIHRoZSBKU09OLXBhdGggaW50byB0aGUgZXhlY3V0aW9uIHJlc3BvbnNlIHdoaWNoXG4gICAqIGNvcnJlc3BvbmRzIHRvIHRoaXMgZXJyb3IuIE9ubHkgaW5jbHVkZWQgZm9yIGVycm9ycyBkdXJpbmcgZXhlY3V0aW9uLlxuICAgKlxuICAgKiBFbnVtZXJhYmxlLCBhbmQgYXBwZWFycyBpbiB0aGUgcmVzdWx0IG9mIEpTT04uc3RyaW5naWZ5KCkuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBHcmFwaFFMIEFTVCBOb2RlcyBjb3JyZXNwb25kaW5nIHRvIHRoaXMgZXJyb3IuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgc291cmNlIEdyYXBoUUwgZG9jdW1lbnQgZm9yIHRoZSBmaXJzdCBsb2NhdGlvbiBvZiB0aGlzIGVycm9yLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgaWYgdGhpcyBFcnJvciByZXByZXNlbnRzIG1vcmUgdGhhbiBvbmUgbm9kZSwgdGhlIHNvdXJjZSBtYXkgbm90XG4gICAqIHJlcHJlc2VudCBub2RlcyBhZnRlciB0aGUgZmlyc3Qgbm9kZS5cbiAgICovXG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGNoYXJhY3RlciBvZmZzZXRzIHdpdGhpbiB0aGUgc291cmNlIEdyYXBoUUwgZG9jdW1lbnRcbiAgICogd2hpY2ggY29ycmVzcG9uZCB0byB0aGlzIGVycm9yLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIG9yaWdpbmFsIGVycm9yIHRocm93biBmcm9tIGEgZmllbGQgcmVzb2x2ZXIgZHVyaW5nIGV4ZWN1dGlvbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIEV4dGVuc2lvbiBmaWVsZHMgdG8gYWRkIHRvIHRoZSBmb3JtYXR0ZWQgZXJyb3IuXG4gICAqL1xuICBmdW5jdGlvbiBHcmFwaFFMRXJyb3IobWVzc2FnZSwgbm9kZXMsIHNvdXJjZSwgcG9zaXRpb25zLCBwYXRoLCBvcmlnaW5hbEVycm9yLCBleHRlbnNpb25zKSB7XG4gICAgdmFyIF9sb2NhdGlvbnMyLCBfc291cmNlMiwgX3Bvc2l0aW9uczIsIF9leHRlbnNpb25zMjtcblxuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHcmFwaFFMRXJyb3IpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlKTsgLy8gQ29tcHV0ZSBsaXN0IG9mIGJsYW1lIG5vZGVzLlxuXG4gICAgdmFyIF9ub2RlcyA9IEFycmF5LmlzQXJyYXkobm9kZXMpID8gbm9kZXMubGVuZ3RoICE9PSAwID8gbm9kZXMgOiB1bmRlZmluZWQgOiBub2RlcyA/IFtub2Rlc10gOiB1bmRlZmluZWQ7IC8vIENvbXB1dGUgbG9jYXRpb25zIGluIHRoZSBzb3VyY2UgZm9yIHRoZSBnaXZlbiBub2Rlcy9wb3NpdGlvbnMuXG5cblxuICAgIHZhciBfc291cmNlID0gc291cmNlO1xuXG4gICAgaWYgKCFfc291cmNlICYmIF9ub2Rlcykge1xuICAgICAgdmFyIF9ub2RlcyQwJGxvYztcblxuICAgICAgX3NvdXJjZSA9IChfbm9kZXMkMCRsb2MgPSBfbm9kZXNbMF0ubG9jKSA9PT0gbnVsbCB8fCBfbm9kZXMkMCRsb2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ub2RlcyQwJGxvYy5zb3VyY2U7XG4gICAgfVxuXG4gICAgdmFyIF9wb3NpdGlvbnMgPSBwb3NpdGlvbnM7XG5cbiAgICBpZiAoIV9wb3NpdGlvbnMgJiYgX25vZGVzKSB7XG4gICAgICBfcG9zaXRpb25zID0gX25vZGVzLnJlZHVjZShmdW5jdGlvbiAobGlzdCwgbm9kZSkge1xuICAgICAgICBpZiAobm9kZS5sb2MpIHtcbiAgICAgICAgICBsaXN0LnB1c2gobm9kZS5sb2Muc3RhcnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICB9LCBbXSk7XG4gICAgfVxuXG4gICAgaWYgKF9wb3NpdGlvbnMgJiYgX3Bvc2l0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIF9wb3NpdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIF9sb2NhdGlvbnM7XG5cbiAgICBpZiAocG9zaXRpb25zICYmIHNvdXJjZSkge1xuICAgICAgX2xvY2F0aW9ucyA9IHBvc2l0aW9ucy5tYXAoZnVuY3Rpb24gKHBvcykge1xuICAgICAgICByZXR1cm4gZ2V0TG9jYXRpb24oc291cmNlLCBwb3MpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChfbm9kZXMpIHtcbiAgICAgIF9sb2NhdGlvbnMgPSBfbm9kZXMucmVkdWNlKGZ1bmN0aW9uIChsaXN0LCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmxvYykge1xuICAgICAgICAgIGxpc3QucHVzaChnZXRMb2NhdGlvbihub2RlLmxvYy5zb3VyY2UsIG5vZGUubG9jLnN0YXJ0KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgIH0sIFtdKTtcbiAgICB9XG5cbiAgICB2YXIgX2V4dGVuc2lvbnMgPSBleHRlbnNpb25zO1xuXG4gICAgaWYgKF9leHRlbnNpb25zID09IG51bGwgJiYgb3JpZ2luYWxFcnJvciAhPSBudWxsKSB7XG4gICAgICB2YXIgb3JpZ2luYWxFeHRlbnNpb25zID0gb3JpZ2luYWxFcnJvci5leHRlbnNpb25zO1xuXG4gICAgICBpZiAoaXNPYmplY3RMaWtlKG9yaWdpbmFsRXh0ZW5zaW9ucykpIHtcbiAgICAgICAgX2V4dGVuc2lvbnMgPSBvcmlnaW5hbEV4dGVuc2lvbnM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIHtcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdmFsdWU6ICdHcmFwaFFMRXJyb3InXG4gICAgICB9LFxuICAgICAgbWVzc2FnZToge1xuICAgICAgICB2YWx1ZTogbWVzc2FnZSxcbiAgICAgICAgLy8gQnkgYmVpbmcgZW51bWVyYWJsZSwgSlNPTi5zdHJpbmdpZnkgd2lsbCBpbmNsdWRlIGBtZXNzYWdlYCBpbiB0aGVcbiAgICAgICAgLy8gcmVzdWx0aW5nIG91dHB1dC4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHNpbXBsZXN0IHBvc3NpYmxlIEdyYXBoUUxcbiAgICAgICAgLy8gc2VydmljZSBhZGhlcmVzIHRvIHRoZSBzcGVjLlxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGxvY2F0aW9uczoge1xuICAgICAgICAvLyBDb2VyY2luZyBmYWxzeSB2YWx1ZXMgdG8gdW5kZWZpbmVkIGVuc3VyZXMgdGhleSB3aWxsIG5vdCBiZSBpbmNsdWRlZFxuICAgICAgICAvLyBpbiBKU09OLnN0cmluZ2lmeSgpIHdoZW4gbm90IHByb3ZpZGVkLlxuICAgICAgICB2YWx1ZTogKF9sb2NhdGlvbnMyID0gX2xvY2F0aW9ucykgIT09IG51bGwgJiYgX2xvY2F0aW9uczIgIT09IHZvaWQgMCA/IF9sb2NhdGlvbnMyIDogdW5kZWZpbmVkLFxuICAgICAgICAvLyBCeSBiZWluZyBlbnVtZXJhYmxlLCBKU09OLnN0cmluZ2lmeSB3aWxsIGluY2x1ZGUgYGxvY2F0aW9uc2AgaW4gdGhlXG4gICAgICAgIC8vIHJlc3VsdGluZyBvdXRwdXQuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSBzaW1wbGVzdCBwb3NzaWJsZSBHcmFwaFFMXG4gICAgICAgIC8vIHNlcnZpY2UgYWRoZXJlcyB0byB0aGUgc3BlYy5cbiAgICAgICAgZW51bWVyYWJsZTogX2xvY2F0aW9ucyAhPSBudWxsXG4gICAgICB9LFxuICAgICAgcGF0aDoge1xuICAgICAgICAvLyBDb2VyY2luZyBmYWxzeSB2YWx1ZXMgdG8gdW5kZWZpbmVkIGVuc3VyZXMgdGhleSB3aWxsIG5vdCBiZSBpbmNsdWRlZFxuICAgICAgICAvLyBpbiBKU09OLnN0cmluZ2lmeSgpIHdoZW4gbm90IHByb3ZpZGVkLlxuICAgICAgICB2YWx1ZTogcGF0aCAhPT0gbnVsbCAmJiBwYXRoICE9PSB2b2lkIDAgPyBwYXRoIDogdW5kZWZpbmVkLFxuICAgICAgICAvLyBCeSBiZWluZyBlbnVtZXJhYmxlLCBKU09OLnN0cmluZ2lmeSB3aWxsIGluY2x1ZGUgYHBhdGhgIGluIHRoZVxuICAgICAgICAvLyByZXN1bHRpbmcgb3V0cHV0LiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgc2ltcGxlc3QgcG9zc2libGUgR3JhcGhRTFxuICAgICAgICAvLyBzZXJ2aWNlIGFkaGVyZXMgdG8gdGhlIHNwZWMuXG4gICAgICAgIGVudW1lcmFibGU6IHBhdGggIT0gbnVsbFxuICAgICAgfSxcbiAgICAgIG5vZGVzOiB7XG4gICAgICAgIHZhbHVlOiBfbm9kZXMgIT09IG51bGwgJiYgX25vZGVzICE9PSB2b2lkIDAgPyBfbm9kZXMgOiB1bmRlZmluZWRcbiAgICAgIH0sXG4gICAgICBzb3VyY2U6IHtcbiAgICAgICAgdmFsdWU6IChfc291cmNlMiA9IF9zb3VyY2UpICE9PSBudWxsICYmIF9zb3VyY2UyICE9PSB2b2lkIDAgPyBfc291cmNlMiA6IHVuZGVmaW5lZFxuICAgICAgfSxcbiAgICAgIHBvc2l0aW9uczoge1xuICAgICAgICB2YWx1ZTogKF9wb3NpdGlvbnMyID0gX3Bvc2l0aW9ucykgIT09IG51bGwgJiYgX3Bvc2l0aW9uczIgIT09IHZvaWQgMCA/IF9wb3NpdGlvbnMyIDogdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgb3JpZ2luYWxFcnJvcjoge1xuICAgICAgICB2YWx1ZTogb3JpZ2luYWxFcnJvclxuICAgICAgfSxcbiAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgLy8gQ29lcmNpbmcgZmFsc3kgdmFsdWVzIHRvIHVuZGVmaW5lZCBlbnN1cmVzIHRoZXkgd2lsbCBub3QgYmUgaW5jbHVkZWRcbiAgICAgICAgLy8gaW4gSlNPTi5zdHJpbmdpZnkoKSB3aGVuIG5vdCBwcm92aWRlZC5cbiAgICAgICAgdmFsdWU6IChfZXh0ZW5zaW9uczIgPSBfZXh0ZW5zaW9ucykgIT09IG51bGwgJiYgX2V4dGVuc2lvbnMyICE9PSB2b2lkIDAgPyBfZXh0ZW5zaW9uczIgOiB1bmRlZmluZWQsXG4gICAgICAgIC8vIEJ5IGJlaW5nIGVudW1lcmFibGUsIEpTT04uc3RyaW5naWZ5IHdpbGwgaW5jbHVkZSBgcGF0aGAgaW4gdGhlXG4gICAgICAgIC8vIHJlc3VsdGluZyBvdXRwdXQuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSBzaW1wbGVzdCBwb3NzaWJsZSBHcmFwaFFMXG4gICAgICAgIC8vIHNlcnZpY2UgYWRoZXJlcyB0byB0aGUgc3BlYy5cbiAgICAgICAgZW51bWVyYWJsZTogX2V4dGVuc2lvbnMgIT0gbnVsbFxuICAgICAgfVxuICAgIH0pOyAvLyBJbmNsdWRlIChub24tZW51bWVyYWJsZSkgc3RhY2sgdHJhY2UuXG5cbiAgICBpZiAob3JpZ2luYWxFcnJvciA9PT0gbnVsbCB8fCBvcmlnaW5hbEVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbEVycm9yLnN0YWNrKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksICdzdGFjaycsIHtcbiAgICAgICAgdmFsdWU6IG9yaWdpbmFsRXJyb3Iuc3RhY2ssXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzKTtcbiAgICB9IC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0IChTZWU6ICdodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL2lzc3Vlcy8yMzE3JylcblxuXG4gICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgR3JhcGhRTEVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCAnc3RhY2snLCB7XG4gICAgICAgIHZhbHVlOiBFcnJvcigpLnN0YWNrLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR3JhcGhRTEVycm9yLCBbe1xuICAgIGtleTogXCJ0b1N0cmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBwcmludEVycm9yKHRoaXMpO1xuICAgIH0gLy8gRklYTUU6IHdvcmthcm91bmQgdG8gbm90IGJyZWFrIGNoYWkgY29tcGFyaXNvbnMsIHNob3VsZCBiZSByZW1vdmUgaW4gdjE2XG4gICAgLy8gJEZsb3dGaXhNZVt1bnN1cHBvcnRlZC1zeW50YXhdIEZsb3cgZG9lc24ndCBzdXBwb3J0IGNvbXB1dGVkIHByb3BlcnRpZXMgeWV0XG5cbiAgfSwge1xuICAgIGtleTogU1lNQk9MX1RPX1NUUklOR19UQUcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gJ09iamVjdCc7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdyYXBoUUxFcnJvcjtcbn0oIC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKEVycm9yKSk7XG4vKipcbiAqIFByaW50cyBhIEdyYXBoUUxFcnJvciB0byBhIHN0cmluZywgcmVwcmVzZW50aW5nIHVzZWZ1bCBsb2NhdGlvbiBpbmZvcm1hdGlvblxuICogYWJvdXQgdGhlIGVycm9yJ3MgcG9zaXRpb24gaW4gdGhlIHNvdXJjZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRFcnJvcihlcnJvcikge1xuICB2YXIgb3V0cHV0ID0gZXJyb3IubWVzc2FnZTtcblxuICBpZiAoZXJyb3Iubm9kZXMpIHtcbiAgICBmb3IgKHZhciBfaTIgPSAwLCBfZXJyb3Ikbm9kZXMyID0gZXJyb3Iubm9kZXM7IF9pMiA8IF9lcnJvciRub2RlczIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIG5vZGUgPSBfZXJyb3Ikbm9kZXMyW19pMl07XG5cbiAgICAgIGlmIChub2RlLmxvYykge1xuICAgICAgICBvdXRwdXQgKz0gJ1xcblxcbicgKyBwcmludExvY2F0aW9uKG5vZGUubG9jKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoZXJyb3Iuc291cmNlICYmIGVycm9yLmxvY2F0aW9ucykge1xuICAgIGZvciAodmFyIF9pNCA9IDAsIF9lcnJvciRsb2NhdGlvbnMyID0gZXJyb3IubG9jYXRpb25zOyBfaTQgPCBfZXJyb3IkbG9jYXRpb25zMi5sZW5ndGg7IF9pNCsrKSB7XG4gICAgICB2YXIgbG9jYXRpb24gPSBfZXJyb3IkbG9jYXRpb25zMltfaTRdO1xuICAgICAgb3V0cHV0ICs9ICdcXG5cXG4nICsgcHJpbnRTb3VyY2VMb2NhdGlvbihlcnJvci5zb3VyY2UsIGxvY2F0aW9uKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuIiwiaW1wb3J0IHsgR3JhcGhRTEVycm9yIH0gZnJvbSBcIi4vR3JhcGhRTEVycm9yLm1qc1wiO1xuLyoqXG4gKiBQcm9kdWNlcyBhIEdyYXBoUUxFcnJvciByZXByZXNlbnRpbmcgYSBzeW50YXggZXJyb3IsIGNvbnRhaW5pbmcgdXNlZnVsXG4gKiBkZXNjcmlwdGl2ZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc3ludGF4IGVycm9yJ3MgcG9zaXRpb24gaW4gdGhlIHNvdXJjZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3ludGF4RXJyb3Ioc291cmNlLCBwb3NpdGlvbiwgZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIG5ldyBHcmFwaFFMRXJyb3IoXCJTeW50YXggRXJyb3I6IFwiLmNvbmNhdChkZXNjcmlwdGlvbiksIHVuZGVmaW5lZCwgc291cmNlLCBbcG9zaXRpb25dKTtcbn1cbiIsImltcG9ydCBpbnZhcmlhbnQgZnJvbSBcIi4vaW52YXJpYW50Lm1qc1wiO1xuaW1wb3J0IG5vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2wgZnJvbSBcIi4vbm9kZWpzQ3VzdG9tSW5zcGVjdFN5bWJvbC5tanNcIjtcbi8qKlxuICogVGhlIGBkZWZpbmVJbnNwZWN0KClgIGZ1bmN0aW9uIGRlZmluZXMgYGluc3BlY3QoKWAgcHJvdG90eXBlIG1ldGhvZCBhcyBhbGlhcyBvZiBgdG9KU09OYFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmluZUluc3BlY3QoY2xhc3NPYmplY3QpIHtcbiAgdmFyIGZuID0gY2xhc3NPYmplY3QucHJvdG90eXBlLnRvSlNPTjtcbiAgdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nIHx8IGludmFyaWFudCgwKTtcbiAgY2xhc3NPYmplY3QucHJvdG90eXBlLmluc3BlY3QgPSBmbjsgLy8gaXN0YW5idWwgaWdub3JlIGVsc2UgKFNlZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ncmFwaHFsL2dyYXBocWwtanMvaXNzdWVzLzIzMTcnKVxuXG4gIGlmIChub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sKSB7XG4gICAgY2xhc3NPYmplY3QucHJvdG90eXBlW25vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2xdID0gZm47XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldkFzc2VydChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgdmFyIGJvb2xlYW5Db25kaXRpb24gPSBCb29sZWFuKGNvbmRpdGlvbik7IC8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlIChTZWUgdHJhbnNmb3JtYXRpb24gZG9uZSBpbiAnLi9yZXNvdXJjZXMvaW5saW5lSW52YXJpYW50LmpzJylcblxuICBpZiAoIWJvb2xlYW5Db25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cbn1cbiIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuLyogZXNsaW50LWRpc2FibGUgZmxvd3R5cGUvbm8td2Vhay10eXBlcyAqL1xuaW1wb3J0IG5vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2wgZnJvbSBcIi4vbm9kZWpzQ3VzdG9tSW5zcGVjdFN5bWJvbC5tanNcIjtcbnZhciBNQVhfQVJSQVlfTEVOR1RIID0gMTA7XG52YXIgTUFYX1JFQ1VSU0lWRV9ERVBUSCA9IDI7XG4vKipcbiAqIFVzZWQgdG8gcHJpbnQgdmFsdWVzIGluIGVycm9yIG1lc3NhZ2VzLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluc3BlY3QodmFsdWUpIHtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKHZhbHVlLCBbXSk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKHZhbHVlLCBzZWVuVmFsdWVzKSB7XG4gIHN3aXRjaCAoX3R5cGVvZih2YWx1ZSkpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIHJldHVybiB2YWx1ZS5uYW1lID8gXCJbZnVuY3Rpb24gXCIuY29uY2F0KHZhbHVlLm5hbWUsIFwiXVwiKSA6ICdbZnVuY3Rpb25dJztcblxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdE9iamVjdFZhbHVlKHZhbHVlLCBzZWVuVmFsdWVzKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRPYmplY3RWYWx1ZSh2YWx1ZSwgcHJldmlvdXNseVNlZW5WYWx1ZXMpIHtcbiAgaWYgKHByZXZpb3VzbHlTZWVuVmFsdWVzLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gIH1cblxuICB2YXIgc2VlblZhbHVlcyA9IFtdLmNvbmNhdChwcmV2aW91c2x5U2VlblZhbHVlcywgW3ZhbHVlXSk7XG4gIHZhciBjdXN0b21JbnNwZWN0Rm4gPSBnZXRDdXN0b21Gbih2YWx1ZSk7XG5cbiAgaWYgKGN1c3RvbUluc3BlY3RGbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGN1c3RvbVZhbHVlID0gY3VzdG9tSW5zcGVjdEZuLmNhbGwodmFsdWUpOyAvLyBjaGVjayBmb3IgaW5maW5pdGUgcmVjdXJzaW9uXG5cbiAgICBpZiAoY3VzdG9tVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGN1c3RvbVZhbHVlID09PSAnc3RyaW5nJyA/IGN1c3RvbVZhbHVlIDogZm9ybWF0VmFsdWUoY3VzdG9tVmFsdWUsIHNlZW5WYWx1ZXMpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmb3JtYXRBcnJheSh2YWx1ZSwgc2VlblZhbHVlcyk7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0T2JqZWN0KHZhbHVlLCBzZWVuVmFsdWVzKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0T2JqZWN0KG9iamVjdCwgc2VlblZhbHVlcykge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICd7fSc7XG4gIH1cblxuICBpZiAoc2VlblZhbHVlcy5sZW5ndGggPiBNQVhfUkVDVVJTSVZFX0RFUFRIKSB7XG4gICAgcmV0dXJuICdbJyArIGdldE9iamVjdFRhZyhvYmplY3QpICsgJ10nO1xuICB9XG5cbiAgdmFyIHByb3BlcnRpZXMgPSBrZXlzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHZhbHVlID0gZm9ybWF0VmFsdWUob2JqZWN0W2tleV0sIHNlZW5WYWx1ZXMpO1xuICAgIHJldHVybiBrZXkgKyAnOiAnICsgdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gJ3sgJyArIHByb3BlcnRpZXMuam9pbignLCAnKSArICcgfSc7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGFycmF5LCBzZWVuVmFsdWVzKSB7XG4gIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ1tdJztcbiAgfVxuXG4gIGlmIChzZWVuVmFsdWVzLmxlbmd0aCA+IE1BWF9SRUNVUlNJVkVfREVQVEgpIHtcbiAgICByZXR1cm4gJ1tBcnJheV0nO1xuICB9XG5cbiAgdmFyIGxlbiA9IE1hdGgubWluKE1BWF9BUlJBWV9MRU5HVEgsIGFycmF5Lmxlbmd0aCk7XG4gIHZhciByZW1haW5pbmcgPSBhcnJheS5sZW5ndGggLSBsZW47XG4gIHZhciBpdGVtcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpdGVtcy5wdXNoKGZvcm1hdFZhbHVlKGFycmF5W2ldLCBzZWVuVmFsdWVzKSk7XG4gIH1cblxuICBpZiAocmVtYWluaW5nID09PSAxKSB7XG4gICAgaXRlbXMucHVzaCgnLi4uIDEgbW9yZSBpdGVtJyk7XG4gIH0gZWxzZSBpZiAocmVtYWluaW5nID4gMSkge1xuICAgIGl0ZW1zLnB1c2goXCIuLi4gXCIuY29uY2F0KHJlbWFpbmluZywgXCIgbW9yZSBpdGVtc1wiKSk7XG4gIH1cblxuICByZXR1cm4gJ1snICsgaXRlbXMuam9pbignLCAnKSArICddJztcbn1cblxuZnVuY3Rpb24gZ2V0Q3VzdG9tRm4ob2JqZWN0KSB7XG4gIHZhciBjdXN0b21JbnNwZWN0Rm4gPSBvYmplY3RbU3RyaW5nKG5vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2wpXTtcblxuICBpZiAodHlwZW9mIGN1c3RvbUluc3BlY3RGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBjdXN0b21JbnNwZWN0Rm47XG4gIH1cblxuICBpZiAodHlwZW9mIG9iamVjdC5pbnNwZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG9iamVjdC5pbnNwZWN0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldE9iamVjdFRhZyhvYmplY3QpIHtcbiAgdmFyIHRhZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpLnJlcGxhY2UoL15cXFtvYmplY3QgLywgJycpLnJlcGxhY2UoL10kLywgJycpO1xuXG4gIGlmICh0YWcgPT09ICdPYmplY3QnICYmIHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgbmFtZSA9IG9iamVjdC5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyAmJiBuYW1lICE9PSAnJykge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhZztcbn1cbiIsIi8qKlxuICogQSByZXBsYWNlbWVudCBmb3IgaW5zdGFuY2VvZiB3aGljaCBpbmNsdWRlcyBhbiBlcnJvciB3YXJuaW5nIHdoZW4gbXVsdGktcmVhbG1cbiAqIGNvbnN0cnVjdG9ycyBhcmUgZGV0ZWN0ZWQuXG4gKi9cbi8vIFNlZTogaHR0cHM6Ly9leHByZXNzanMuY29tL2VuL2FkdmFuY2VkL2Jlc3QtcHJhY3RpY2UtcGVyZm9ybWFuY2UuaHRtbCNzZXQtbm9kZV9lbnYtdG8tcHJvZHVjdGlvblxuLy8gU2VlOiBodHRwczovL3dlYnBhY2suanMub3JnL2d1aWRlcy9wcm9kdWN0aW9uL1xuZXhwb3J0IGRlZmF1bHQgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0IChTZWU6ICdodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL2lzc3Vlcy8yMzE3Jylcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbmZ1bmN0aW9uIGluc3RhbmNlT2YodmFsdWUsIGNvbnN0cnVjdG9yKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yO1xufSA6IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbmZ1bmN0aW9uIGluc3RhbmNlT2YodmFsdWUsIGNvbnN0cnVjdG9yKSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodmFsdWUpIHtcbiAgICB2YXIgdmFsdWVDbGFzcyA9IHZhbHVlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjbGFzc05hbWUgPSBjb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgaWYgKGNsYXNzTmFtZSAmJiB2YWx1ZUNsYXNzICYmIHZhbHVlQ2xhc3MubmFtZSA9PT0gY2xhc3NOYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgdXNlIFwiLmNvbmNhdChjbGFzc05hbWUsIFwiIFxcXCJcIikuY29uY2F0KHZhbHVlLCBcIlxcXCIgZnJvbSBhbm90aGVyIG1vZHVsZSBvciByZWFsbS5cXG5cXG5FbnN1cmUgdGhhdCB0aGVyZSBpcyBvbmx5IG9uZSBpbnN0YW5jZSBvZiBcXFwiZ3JhcGhxbFxcXCIgaW4gdGhlIG5vZGVfbW9kdWxlc1xcbmRpcmVjdG9yeS4gSWYgZGlmZmVyZW50IHZlcnNpb25zIG9mIFxcXCJncmFwaHFsXFxcIiBhcmUgdGhlIGRlcGVuZGVuY2llcyBvZiBvdGhlclxcbnJlbGllZCBvbiBtb2R1bGVzLCB1c2UgXFxcInJlc29sdXRpb25zXFxcIiB0byBlbnN1cmUgb25seSBvbmUgdmVyc2lvbiBpcyBpbnN0YWxsZWQuXFxuXFxuaHR0cHM6Ly95YXJucGtnLmNvbS9lbi9kb2NzL3NlbGVjdGl2ZS12ZXJzaW9uLXJlc29sdXRpb25zXFxuXFxuRHVwbGljYXRlIFxcXCJncmFwaHFsXFxcIiBtb2R1bGVzIGNhbm5vdCBiZSB1c2VkIGF0IHRoZSBzYW1lIHRpbWUgc2luY2UgZGlmZmVyZW50XFxudmVyc2lvbnMgbWF5IGhhdmUgZGlmZmVyZW50IGNhcGFiaWxpdGllcyBhbmQgYmVoYXZpb3IuIFRoZSBkYXRhIGZyb20gb25lXFxudmVyc2lvbiB1c2VkIGluIHRoZSBmdW5jdGlvbiBmcm9tIGFub3RoZXIgY291bGQgcHJvZHVjZSBjb25mdXNpbmcgYW5kXFxuc3B1cmlvdXMgcmVzdWx0cy5cIikpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIHZhciBib29sZWFuQ29uZGl0aW9uID0gQm9vbGVhbihjb25kaXRpb24pOyAvLyBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAoU2VlIHRyYW5zZm9ybWF0aW9uIGRvbmUgaW4gJy4vcmVzb3VyY2VzL2lubGluZUludmFyaWFudC5qcycpXG5cbiAgaWYgKCFib29sZWFuQ29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgIT0gbnVsbCA/IG1lc3NhZ2UgOiAnVW5leHBlY3RlZCBpbnZhcmlhbnQgdHJpZ2dlcmVkLicpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdFxuICogYG51bGxgIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiBfdHlwZW9mKHZhbHVlKSA9PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cbiIsIi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0IChTZWU6ICdodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL2lzc3Vlcy8yMzE3JylcbnZhciBub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLmZvciA9PT0gJ2Z1bmN0aW9uJyA/IFN5bWJvbC5mb3IoJ25vZGVqcy51dGlsLmluc3BlY3QuY3VzdG9tJykgOiB1bmRlZmluZWQ7XG5leHBvcnQgZGVmYXVsdCBub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sO1xuIiwiaW1wb3J0IGRlZmluZUluc3BlY3QgZnJvbSBcIi4uL2pzdXRpbHMvZGVmaW5lSW5zcGVjdC5tanNcIjtcblxuLyoqXG4gKiBDb250YWlucyBhIHJhbmdlIG9mIFVURi04IGNoYXJhY3RlciBvZmZzZXRzIGFuZCB0b2tlbiByZWZlcmVuY2VzIHRoYXRcbiAqIGlkZW50aWZ5IHRoZSByZWdpb24gb2YgdGhlIHNvdXJjZSBmcm9tIHdoaWNoIHRoZSBBU1QgZGVyaXZlZC5cbiAqL1xuZXhwb3J0IHZhciBMb2NhdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBUaGUgY2hhcmFjdGVyIG9mZnNldCBhdCB3aGljaCB0aGlzIE5vZGUgYmVnaW5zLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIGNoYXJhY3RlciBvZmZzZXQgYXQgd2hpY2ggdGhpcyBOb2RlIGVuZHMuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgVG9rZW4gYXQgd2hpY2ggdGhpcyBOb2RlIGJlZ2lucy5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBUb2tlbiBhdCB3aGljaCB0aGlzIE5vZGUgZW5kcy5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBTb3VyY2UgZG9jdW1lbnQgdGhlIEFTVCByZXByZXNlbnRzLlxuICAgKi9cbiAgZnVuY3Rpb24gTG9jYXRpb24oc3RhcnRUb2tlbiwgZW5kVG9rZW4sIHNvdXJjZSkge1xuICAgIHRoaXMuc3RhcnQgPSBzdGFydFRva2VuLnN0YXJ0O1xuICAgIHRoaXMuZW5kID0gZW5kVG9rZW4uZW5kO1xuICAgIHRoaXMuc3RhcnRUb2tlbiA9IHN0YXJ0VG9rZW47XG4gICAgdGhpcy5lbmRUb2tlbiA9IGVuZFRva2VuO1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IExvY2F0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogdGhpcy5zdGFydCxcbiAgICAgIGVuZDogdGhpcy5lbmRcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBMb2NhdGlvbjtcbn0oKTsgLy8gUHJpbnQgYSBzaW1wbGlmaWVkIGZvcm0gd2hlbiBhcHBlYXJpbmcgaW4gYGluc3BlY3RgIGFuZCBgdXRpbC5pbnNwZWN0YC5cblxuZGVmaW5lSW5zcGVjdChMb2NhdGlvbik7XG4vKipcbiAqIFJlcHJlc2VudHMgYSByYW5nZSBvZiBjaGFyYWN0ZXJzIHJlcHJlc2VudGVkIGJ5IGEgbGV4aWNhbCB0b2tlblxuICogd2l0aGluIGEgU291cmNlLlxuICovXG5cbmV4cG9ydCB2YXIgVG9rZW4gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogVGhlIGtpbmQgb2YgVG9rZW4uXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgY2hhcmFjdGVyIG9mZnNldCBhdCB3aGljaCB0aGlzIE5vZGUgYmVnaW5zLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIGNoYXJhY3RlciBvZmZzZXQgYXQgd2hpY2ggdGhpcyBOb2RlIGVuZHMuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgMS1pbmRleGVkIGxpbmUgbnVtYmVyIG9uIHdoaWNoIHRoaXMgVG9rZW4gYXBwZWFycy5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSAxLWluZGV4ZWQgY29sdW1uIG51bWJlciBhdCB3aGljaCB0aGlzIFRva2VuIGJlZ2lucy5cbiAgICovXG5cbiAgLyoqXG4gICAqIEZvciBub24tcHVuY3R1YXRpb24gdG9rZW5zLCByZXByZXNlbnRzIHRoZSBpbnRlcnByZXRlZCB2YWx1ZSBvZiB0aGUgdG9rZW4uXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUb2tlbnMgZXhpc3QgYXMgbm9kZXMgaW4gYSBkb3VibGUtbGlua2VkLWxpc3QgYW1vbmdzdCBhbGwgdG9rZW5zXG4gICAqIGluY2x1ZGluZyBpZ25vcmVkIHRva2Vucy4gPFNPRj4gaXMgYWx3YXlzIHRoZSBmaXJzdCBub2RlIGFuZCA8RU9GPlxuICAgKiB0aGUgbGFzdC5cbiAgICovXG4gIGZ1bmN0aW9uIFRva2VuKGtpbmQsIHN0YXJ0LCBlbmQsIGxpbmUsIGNvbHVtbiwgcHJldiwgdmFsdWUpIHtcbiAgICB0aGlzLmtpbmQgPSBraW5kO1xuICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnByZXYgPSBwcmV2O1xuICAgIHRoaXMubmV4dCA9IG51bGw7XG4gIH1cblxuICB2YXIgX3Byb3RvMiA9IFRva2VuLnByb3RvdHlwZTtcblxuICBfcHJvdG8yLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogdGhpcy5raW5kLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBsaW5lOiB0aGlzLmxpbmUsXG4gICAgICBjb2x1bW46IHRoaXMuY29sdW1uXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gVG9rZW47XG59KCk7IC8vIFByaW50IGEgc2ltcGxpZmllZCBmb3JtIHdoZW4gYXBwZWFyaW5nIGluIGBpbnNwZWN0YCBhbmQgYHV0aWwuaW5zcGVjdGAuXG5cbmRlZmluZUluc3BlY3QoVG9rZW4pO1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlKG1heWJlTm9kZSkge1xuICByZXR1cm4gbWF5YmVOb2RlICE9IG51bGwgJiYgdHlwZW9mIG1heWJlTm9kZS5raW5kID09PSAnc3RyaW5nJztcbn1cbi8qKlxuICogVGhlIGxpc3Qgb2YgYWxsIHBvc3NpYmxlIEFTVCBub2RlIHR5cGVzLlxuICovXG4iLCIvKipcbiAqIFByb2R1Y2VzIHRoZSB2YWx1ZSBvZiBhIGJsb2NrIHN0cmluZyBmcm9tIGl0cyBwYXJzZWQgcmF3IHZhbHVlLCBzaW1pbGFyIHRvXG4gKiBDb2ZmZWVTY3JpcHQncyBibG9jayBzdHJpbmcsIFB5dGhvbidzIGRvY3N0cmluZyB0cmltIG9yIFJ1YnkncyBzdHJpcF9oZXJlZG9jLlxuICpcbiAqIFRoaXMgaW1wbGVtZW50cyB0aGUgR3JhcGhRTCBzcGVjJ3MgQmxvY2tTdHJpbmdWYWx1ZSgpIHN0YXRpYyBhbGdvcml0aG0uXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWRlbnRCbG9ja1N0cmluZ1ZhbHVlKHJhd1N0cmluZykge1xuICAvLyBFeHBhbmQgYSBibG9jayBzdHJpbmcncyByYXcgdmFsdWUgaW50byBpbmRlcGVuZGVudCBsaW5lcy5cbiAgdmFyIGxpbmVzID0gcmF3U3RyaW5nLnNwbGl0KC9cXHJcXG58W1xcblxccl0vZyk7IC8vIFJlbW92ZSBjb21tb24gaW5kZW50YXRpb24gZnJvbSBhbGwgbGluZXMgYnV0IGZpcnN0LlxuXG4gIHZhciBjb21tb25JbmRlbnQgPSBnZXRCbG9ja1N0cmluZ0luZGVudGF0aW9uKHJhd1N0cmluZyk7XG5cbiAgaWYgKGNvbW1vbkluZGVudCAhPT0gMCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpbmVzW2ldID0gbGluZXNbaV0uc2xpY2UoY29tbW9uSW5kZW50KTtcbiAgICB9XG4gIH0gLy8gUmVtb3ZlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIGJsYW5rIGxpbmVzLlxuXG5cbiAgdmFyIHN0YXJ0TGluZSA9IDA7XG5cbiAgd2hpbGUgKHN0YXJ0TGluZSA8IGxpbmVzLmxlbmd0aCAmJiBpc0JsYW5rKGxpbmVzW3N0YXJ0TGluZV0pKSB7XG4gICAgKytzdGFydExpbmU7XG4gIH1cblxuICB2YXIgZW5kTGluZSA9IGxpbmVzLmxlbmd0aDtcblxuICB3aGlsZSAoZW5kTGluZSA+IHN0YXJ0TGluZSAmJiBpc0JsYW5rKGxpbmVzW2VuZExpbmUgLSAxXSkpIHtcbiAgICAtLWVuZExpbmU7XG4gIH0gLy8gUmV0dXJuIGEgc3RyaW5nIG9mIHRoZSBsaW5lcyBqb2luZWQgd2l0aCBVKzAwMEEuXG5cblxuICByZXR1cm4gbGluZXMuc2xpY2Uoc3RhcnRMaW5lLCBlbmRMaW5lKS5qb2luKCdcXG4nKTtcbn1cblxuZnVuY3Rpb24gaXNCbGFuayhzdHIpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoc3RyW2ldICE9PSAnICcgJiYgc3RyW2ldICE9PSAnXFx0Jykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCbG9ja1N0cmluZ0luZGVudGF0aW9uKHZhbHVlKSB7XG4gIHZhciBfY29tbW9uSW5kZW50O1xuXG4gIHZhciBpc0ZpcnN0TGluZSA9IHRydWU7XG4gIHZhciBpc0VtcHR5TGluZSA9IHRydWU7XG4gIHZhciBpbmRlbnQgPSAwO1xuICB2YXIgY29tbW9uSW5kZW50ID0gbnVsbDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgKytpKSB7XG4gICAgc3dpdGNoICh2YWx1ZS5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICBjYXNlIDEzOlxuICAgICAgICAvLyAgXFxyXG4gICAgICAgIGlmICh2YWx1ZS5jaGFyQ29kZUF0KGkgKyAxKSA9PT0gMTApIHtcbiAgICAgICAgICArK2k7IC8vIHNraXAgXFxyXFxuIGFzIG9uZSBzeW1ib2xcbiAgICAgICAgfVxuXG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG5cbiAgICAgIGNhc2UgMTA6XG4gICAgICAgIC8vICBcXG5cbiAgICAgICAgaXNGaXJzdExpbmUgPSBmYWxzZTtcbiAgICAgICAgaXNFbXB0eUxpbmUgPSB0cnVlO1xuICAgICAgICBpbmRlbnQgPSAwO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5OiAvLyAgIFxcdFxuXG4gICAgICBjYXNlIDMyOlxuICAgICAgICAvLyAgPHNwYWNlPlxuICAgICAgICArK2luZGVudDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChpc0VtcHR5TGluZSAmJiAhaXNGaXJzdExpbmUgJiYgKGNvbW1vbkluZGVudCA9PT0gbnVsbCB8fCBpbmRlbnQgPCBjb21tb25JbmRlbnQpKSB7XG4gICAgICAgICAgY29tbW9uSW5kZW50ID0gaW5kZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaXNFbXB0eUxpbmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKF9jb21tb25JbmRlbnQgPSBjb21tb25JbmRlbnQpICE9PSBudWxsICYmIF9jb21tb25JbmRlbnQgIT09IHZvaWQgMCA/IF9jb21tb25JbmRlbnQgOiAwO1xufVxuLyoqXG4gKiBQcmludCBhIGJsb2NrIHN0cmluZyBpbiB0aGUgaW5kZW50ZWQgYmxvY2sgZm9ybSBieSBhZGRpbmcgYSBsZWFkaW5nIGFuZFxuICogdHJhaWxpbmcgYmxhbmsgbGluZS4gSG93ZXZlciwgaWYgYSBibG9jayBzdHJpbmcgc3RhcnRzIHdpdGggd2hpdGVzcGFjZSBhbmQgaXNcbiAqIGEgc2luZ2xlLWxpbmUsIGFkZGluZyBhIGxlYWRpbmcgYmxhbmsgbGluZSB3b3VsZCBzdHJpcCB0aGF0IHdoaXRlc3BhY2UuXG4gKlxuICogQGludGVybmFsXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50QmxvY2tTdHJpbmcodmFsdWUpIHtcbiAgdmFyIGluZGVudGF0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcbiAgdmFyIHByZWZlck11bHRpcGxlTGluZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuICB2YXIgaXNTaW5nbGVMaW5lID0gdmFsdWUuaW5kZXhPZignXFxuJykgPT09IC0xO1xuICB2YXIgaGFzTGVhZGluZ1NwYWNlID0gdmFsdWVbMF0gPT09ICcgJyB8fCB2YWx1ZVswXSA9PT0gJ1xcdCc7XG4gIHZhciBoYXNUcmFpbGluZ1F1b3RlID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV0gPT09ICdcIic7XG4gIHZhciBoYXNUcmFpbGluZ1NsYXNoID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV0gPT09ICdcXFxcJztcbiAgdmFyIHByaW50QXNNdWx0aXBsZUxpbmVzID0gIWlzU2luZ2xlTGluZSB8fCBoYXNUcmFpbGluZ1F1b3RlIHx8IGhhc1RyYWlsaW5nU2xhc2ggfHwgcHJlZmVyTXVsdGlwbGVMaW5lcztcbiAgdmFyIHJlc3VsdCA9ICcnOyAvLyBGb3JtYXQgYSBtdWx0aS1saW5lIGJsb2NrIHF1b3RlIHRvIGFjY291bnQgZm9yIGxlYWRpbmcgc3BhY2UuXG5cbiAgaWYgKHByaW50QXNNdWx0aXBsZUxpbmVzICYmICEoaXNTaW5nbGVMaW5lICYmIGhhc0xlYWRpbmdTcGFjZSkpIHtcbiAgICByZXN1bHQgKz0gJ1xcbicgKyBpbmRlbnRhdGlvbjtcbiAgfVxuXG4gIHJlc3VsdCArPSBpbmRlbnRhdGlvbiA/IHZhbHVlLnJlcGxhY2UoL1xcbi9nLCAnXFxuJyArIGluZGVudGF0aW9uKSA6IHZhbHVlO1xuXG4gIGlmIChwcmludEFzTXVsdGlwbGVMaW5lcykge1xuICAgIHJlc3VsdCArPSAnXFxuJztcbiAgfVxuXG4gIHJldHVybiAnXCJcIlwiJyArIHJlc3VsdC5yZXBsYWNlKC9cIlwiXCIvZywgJ1xcXFxcIlwiXCInKSArICdcIlwiXCInO1xufVxuIiwiLyoqXG4gKiBUaGUgc2V0IG9mIGFsbG93ZWQgZGlyZWN0aXZlIGxvY2F0aW9uIHZhbHVlcy5cbiAqL1xuZXhwb3J0IHZhciBEaXJlY3RpdmVMb2NhdGlvbiA9IE9iamVjdC5mcmVlemUoe1xuICAvLyBSZXF1ZXN0IERlZmluaXRpb25zXG4gIFFVRVJZOiAnUVVFUlknLFxuICBNVVRBVElPTjogJ01VVEFUSU9OJyxcbiAgU1VCU0NSSVBUSU9OOiAnU1VCU0NSSVBUSU9OJyxcbiAgRklFTEQ6ICdGSUVMRCcsXG4gIEZSQUdNRU5UX0RFRklOSVRJT046ICdGUkFHTUVOVF9ERUZJTklUSU9OJyxcbiAgRlJBR01FTlRfU1BSRUFEOiAnRlJBR01FTlRfU1BSRUFEJyxcbiAgSU5MSU5FX0ZSQUdNRU5UOiAnSU5MSU5FX0ZSQUdNRU5UJyxcbiAgVkFSSUFCTEVfREVGSU5JVElPTjogJ1ZBUklBQkxFX0RFRklOSVRJT04nLFxuICAvLyBUeXBlIFN5c3RlbSBEZWZpbml0aW9uc1xuICBTQ0hFTUE6ICdTQ0hFTUEnLFxuICBTQ0FMQVI6ICdTQ0FMQVInLFxuICBPQkpFQ1Q6ICdPQkpFQ1QnLFxuICBGSUVMRF9ERUZJTklUSU9OOiAnRklFTERfREVGSU5JVElPTicsXG4gIEFSR1VNRU5UX0RFRklOSVRJT046ICdBUkdVTUVOVF9ERUZJTklUSU9OJyxcbiAgSU5URVJGQUNFOiAnSU5URVJGQUNFJyxcbiAgVU5JT046ICdVTklPTicsXG4gIEVOVU06ICdFTlVNJyxcbiAgRU5VTV9WQUxVRTogJ0VOVU1fVkFMVUUnLFxuICBJTlBVVF9PQkpFQ1Q6ICdJTlBVVF9PQkpFQ1QnLFxuICBJTlBVVF9GSUVMRF9ERUZJTklUSU9OOiAnSU5QVVRfRklFTERfREVGSU5JVElPTidcbn0pO1xuLyoqXG4gKiBUaGUgZW51bSB0eXBlIHJlcHJlc2VudGluZyB0aGUgZGlyZWN0aXZlIGxvY2F0aW9uIHZhbHVlcy5cbiAqL1xuIiwiLyoqXG4gKiBUaGUgc2V0IG9mIGFsbG93ZWQga2luZCB2YWx1ZXMgZm9yIEFTVCBub2Rlcy5cbiAqL1xuZXhwb3J0IHZhciBLaW5kID0gT2JqZWN0LmZyZWV6ZSh7XG4gIC8vIE5hbWVcbiAgTkFNRTogJ05hbWUnLFxuICAvLyBEb2N1bWVudFxuICBET0NVTUVOVDogJ0RvY3VtZW50JyxcbiAgT1BFUkFUSU9OX0RFRklOSVRJT046ICdPcGVyYXRpb25EZWZpbml0aW9uJyxcbiAgVkFSSUFCTEVfREVGSU5JVElPTjogJ1ZhcmlhYmxlRGVmaW5pdGlvbicsXG4gIFNFTEVDVElPTl9TRVQ6ICdTZWxlY3Rpb25TZXQnLFxuICBGSUVMRDogJ0ZpZWxkJyxcbiAgQVJHVU1FTlQ6ICdBcmd1bWVudCcsXG4gIC8vIEZyYWdtZW50c1xuICBGUkFHTUVOVF9TUFJFQUQ6ICdGcmFnbWVudFNwcmVhZCcsXG4gIElOTElORV9GUkFHTUVOVDogJ0lubGluZUZyYWdtZW50JyxcbiAgRlJBR01FTlRfREVGSU5JVElPTjogJ0ZyYWdtZW50RGVmaW5pdGlvbicsXG4gIC8vIFZhbHVlc1xuICBWQVJJQUJMRTogJ1ZhcmlhYmxlJyxcbiAgSU5UOiAnSW50VmFsdWUnLFxuICBGTE9BVDogJ0Zsb2F0VmFsdWUnLFxuICBTVFJJTkc6ICdTdHJpbmdWYWx1ZScsXG4gIEJPT0xFQU46ICdCb29sZWFuVmFsdWUnLFxuICBOVUxMOiAnTnVsbFZhbHVlJyxcbiAgRU5VTTogJ0VudW1WYWx1ZScsXG4gIExJU1Q6ICdMaXN0VmFsdWUnLFxuICBPQkpFQ1Q6ICdPYmplY3RWYWx1ZScsXG4gIE9CSkVDVF9GSUVMRDogJ09iamVjdEZpZWxkJyxcbiAgLy8gRGlyZWN0aXZlc1xuICBESVJFQ1RJVkU6ICdEaXJlY3RpdmUnLFxuICAvLyBUeXBlc1xuICBOQU1FRF9UWVBFOiAnTmFtZWRUeXBlJyxcbiAgTElTVF9UWVBFOiAnTGlzdFR5cGUnLFxuICBOT05fTlVMTF9UWVBFOiAnTm9uTnVsbFR5cGUnLFxuICAvLyBUeXBlIFN5c3RlbSBEZWZpbml0aW9uc1xuICBTQ0hFTUFfREVGSU5JVElPTjogJ1NjaGVtYURlZmluaXRpb24nLFxuICBPUEVSQVRJT05fVFlQRV9ERUZJTklUSU9OOiAnT3BlcmF0aW9uVHlwZURlZmluaXRpb24nLFxuICAvLyBUeXBlIERlZmluaXRpb25zXG4gIFNDQUxBUl9UWVBFX0RFRklOSVRJT046ICdTY2FsYXJUeXBlRGVmaW5pdGlvbicsXG4gIE9CSkVDVF9UWVBFX0RFRklOSVRJT046ICdPYmplY3RUeXBlRGVmaW5pdGlvbicsXG4gIEZJRUxEX0RFRklOSVRJT046ICdGaWVsZERlZmluaXRpb24nLFxuICBJTlBVVF9WQUxVRV9ERUZJTklUSU9OOiAnSW5wdXRWYWx1ZURlZmluaXRpb24nLFxuICBJTlRFUkZBQ0VfVFlQRV9ERUZJTklUSU9OOiAnSW50ZXJmYWNlVHlwZURlZmluaXRpb24nLFxuICBVTklPTl9UWVBFX0RFRklOSVRJT046ICdVbmlvblR5cGVEZWZpbml0aW9uJyxcbiAgRU5VTV9UWVBFX0RFRklOSVRJT046ICdFbnVtVHlwZURlZmluaXRpb24nLFxuICBFTlVNX1ZBTFVFX0RFRklOSVRJT046ICdFbnVtVmFsdWVEZWZpbml0aW9uJyxcbiAgSU5QVVRfT0JKRUNUX1RZUEVfREVGSU5JVElPTjogJ0lucHV0T2JqZWN0VHlwZURlZmluaXRpb24nLFxuICAvLyBEaXJlY3RpdmUgRGVmaW5pdGlvbnNcbiAgRElSRUNUSVZFX0RFRklOSVRJT046ICdEaXJlY3RpdmVEZWZpbml0aW9uJyxcbiAgLy8gVHlwZSBTeXN0ZW0gRXh0ZW5zaW9uc1xuICBTQ0hFTUFfRVhURU5TSU9OOiAnU2NoZW1hRXh0ZW5zaW9uJyxcbiAgLy8gVHlwZSBFeHRlbnNpb25zXG4gIFNDQUxBUl9UWVBFX0VYVEVOU0lPTjogJ1NjYWxhclR5cGVFeHRlbnNpb24nLFxuICBPQkpFQ1RfVFlQRV9FWFRFTlNJT046ICdPYmplY3RUeXBlRXh0ZW5zaW9uJyxcbiAgSU5URVJGQUNFX1RZUEVfRVhURU5TSU9OOiAnSW50ZXJmYWNlVHlwZUV4dGVuc2lvbicsXG4gIFVOSU9OX1RZUEVfRVhURU5TSU9OOiAnVW5pb25UeXBlRXh0ZW5zaW9uJyxcbiAgRU5VTV9UWVBFX0VYVEVOU0lPTjogJ0VudW1UeXBlRXh0ZW5zaW9uJyxcbiAgSU5QVVRfT0JKRUNUX1RZUEVfRVhURU5TSU9OOiAnSW5wdXRPYmplY3RUeXBlRXh0ZW5zaW9uJ1xufSk7XG4vKipcbiAqIFRoZSBlbnVtIHR5cGUgcmVwcmVzZW50aW5nIHRoZSBwb3NzaWJsZSBraW5kIHZhbHVlcyBvZiBBU1Qgbm9kZXMuXG4gKi9cbiIsImltcG9ydCB7IHN5bnRheEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL3N5bnRheEVycm9yLm1qc1wiO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tIFwiLi9hc3QubWpzXCI7XG5pbXBvcnQgeyBUb2tlbktpbmQgfSBmcm9tIFwiLi90b2tlbktpbmQubWpzXCI7XG5pbXBvcnQgeyBkZWRlbnRCbG9ja1N0cmluZ1ZhbHVlIH0gZnJvbSBcIi4vYmxvY2tTdHJpbmcubWpzXCI7XG4vKipcbiAqIEdpdmVuIGEgU291cmNlIG9iamVjdCwgY3JlYXRlcyBhIExleGVyIGZvciB0aGF0IHNvdXJjZS5cbiAqIEEgTGV4ZXIgaXMgYSBzdGF0ZWZ1bCBzdHJlYW0gZ2VuZXJhdG9yIGluIHRoYXQgZXZlcnkgdGltZVxuICogaXQgaXMgYWR2YW5jZWQsIGl0IHJldHVybnMgdGhlIG5leHQgdG9rZW4gaW4gdGhlIFNvdXJjZS4gQXNzdW1pbmcgdGhlXG4gKiBzb3VyY2UgbGV4ZXMsIHRoZSBmaW5hbCBUb2tlbiBlbWl0dGVkIGJ5IHRoZSBsZXhlciB3aWxsIGJlIG9mIGtpbmRcbiAqIEVPRiwgYWZ0ZXIgd2hpY2ggdGhlIGxleGVyIHdpbGwgcmVwZWF0ZWRseSByZXR1cm4gdGhlIHNhbWUgRU9GIHRva2VuXG4gKiB3aGVuZXZlciBjYWxsZWQuXG4gKi9cblxuZXhwb3J0IHZhciBMZXhlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBUaGUgcHJldmlvdXNseSBmb2N1c2VkIG5vbi1pZ25vcmVkIHRva2VuLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIGN1cnJlbnRseSBmb2N1c2VkIG5vbi1pZ25vcmVkIHRva2VuLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlICgxLWluZGV4ZWQpIGxpbmUgY29udGFpbmluZyB0aGUgY3VycmVudCB0b2tlbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBjaGFyYWN0ZXIgb2Zmc2V0IGF0IHdoaWNoIHRoZSBjdXJyZW50IGxpbmUgYmVnaW5zLlxuICAgKi9cbiAgZnVuY3Rpb24gTGV4ZXIoc291cmNlKSB7XG4gICAgdmFyIHN0YXJ0T2ZGaWxlVG9rZW4gPSBuZXcgVG9rZW4oVG9rZW5LaW5kLlNPRiwgMCwgMCwgMCwgMCwgbnVsbCk7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgdGhpcy5sYXN0VG9rZW4gPSBzdGFydE9mRmlsZVRva2VuO1xuICAgIHRoaXMudG9rZW4gPSBzdGFydE9mRmlsZVRva2VuO1xuICAgIHRoaXMubGluZSA9IDE7XG4gICAgdGhpcy5saW5lU3RhcnQgPSAwO1xuICB9XG4gIC8qKlxuICAgKiBBZHZhbmNlcyB0aGUgdG9rZW4gc3RyZWFtIHRvIHRoZSBuZXh0IG5vbi1pZ25vcmVkIHRva2VuLlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBMZXhlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkdmFuY2UgPSBmdW5jdGlvbiBhZHZhbmNlKCkge1xuICAgIHRoaXMubGFzdFRva2VuID0gdGhpcy50b2tlbjtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2VuID0gdGhpcy5sb29rYWhlYWQoKTtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cbiAgLyoqXG4gICAqIExvb2tzIGFoZWFkIGFuZCByZXR1cm5zIHRoZSBuZXh0IG5vbi1pZ25vcmVkIHRva2VuLCBidXQgZG9lcyBub3QgY2hhbmdlXG4gICAqIHRoZSBzdGF0ZSBvZiBMZXhlci5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ubG9va2FoZWFkID0gZnVuY3Rpb24gbG9va2FoZWFkKCkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMudG9rZW47XG5cbiAgICBpZiAodG9rZW4ua2luZCAhPT0gVG9rZW5LaW5kLkVPRikge1xuICAgICAgZG8ge1xuICAgICAgICB2YXIgX3Rva2VuJG5leHQ7XG5cbiAgICAgICAgLy8gTm90ZTogbmV4dCBpcyBvbmx5IG11dGFibGUgZHVyaW5nIHBhcnNpbmcsIHNvIHdlIGNhc3QgdG8gYWxsb3cgdGhpcy5cbiAgICAgICAgdG9rZW4gPSAoX3Rva2VuJG5leHQgPSB0b2tlbi5uZXh0KSAhPT0gbnVsbCAmJiBfdG9rZW4kbmV4dCAhPT0gdm9pZCAwID8gX3Rva2VuJG5leHQgOiB0b2tlbi5uZXh0ID0gcmVhZFRva2VuKHRoaXMsIHRva2VuKTtcbiAgICAgIH0gd2hpbGUgKHRva2VuLmtpbmQgPT09IFRva2VuS2luZC5DT01NRU5UKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH07XG5cbiAgcmV0dXJuIExleGVyO1xufSgpO1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQdW5jdHVhdG9yVG9rZW5LaW5kKGtpbmQpIHtcbiAgcmV0dXJuIGtpbmQgPT09IFRva2VuS2luZC5CQU5HIHx8IGtpbmQgPT09IFRva2VuS2luZC5ET0xMQVIgfHwga2luZCA9PT0gVG9rZW5LaW5kLkFNUCB8fCBraW5kID09PSBUb2tlbktpbmQuUEFSRU5fTCB8fCBraW5kID09PSBUb2tlbktpbmQuUEFSRU5fUiB8fCBraW5kID09PSBUb2tlbktpbmQuU1BSRUFEIHx8IGtpbmQgPT09IFRva2VuS2luZC5DT0xPTiB8fCBraW5kID09PSBUb2tlbktpbmQuRVFVQUxTIHx8IGtpbmQgPT09IFRva2VuS2luZC5BVCB8fCBraW5kID09PSBUb2tlbktpbmQuQlJBQ0tFVF9MIHx8IGtpbmQgPT09IFRva2VuS2luZC5CUkFDS0VUX1IgfHwga2luZCA9PT0gVG9rZW5LaW5kLkJSQUNFX0wgfHwga2luZCA9PT0gVG9rZW5LaW5kLlBJUEUgfHwga2luZCA9PT0gVG9rZW5LaW5kLkJSQUNFX1I7XG59XG5cbmZ1bmN0aW9uIHByaW50Q2hhckNvZGUoY29kZSkge1xuICByZXR1cm4gKC8vIE5hTi91bmRlZmluZWQgcmVwcmVzZW50cyBhY2Nlc3MgYmV5b25kIHRoZSBlbmQgb2YgdGhlIGZpbGUuXG4gICAgaXNOYU4oY29kZSkgPyBUb2tlbktpbmQuRU9GIDogLy8gVHJ1c3QgSlNPTiBmb3IgQVNDSUkuXG4gICAgY29kZSA8IDB4MDA3ZiA/IEpTT04uc3RyaW5naWZ5KFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSkpIDogLy8gT3RoZXJ3aXNlIHByaW50IHRoZSBlc2NhcGVkIGZvcm0uXG4gICAgXCJcXFwiXFxcXHVcIi5jb25jYXQoKCcwMCcgKyBjb2RlLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKS5zbGljZSgtNCksIFwiXFxcIlwiKVxuICApO1xufVxuLyoqXG4gKiBHZXRzIHRoZSBuZXh0IHRva2VuIGZyb20gdGhlIHNvdXJjZSBzdGFydGluZyBhdCB0aGUgZ2l2ZW4gcG9zaXRpb24uXG4gKlxuICogVGhpcyBza2lwcyBvdmVyIHdoaXRlc3BhY2UgdW50aWwgaXQgZmluZHMgdGhlIG5leHQgbGV4YWJsZSB0b2tlbiwgdGhlbiBsZXhlc1xuICogcHVuY3R1YXRvcnMgaW1tZWRpYXRlbHkgb3IgY2FsbHMgdGhlIGFwcHJvcHJpYXRlIGhlbHBlciBmdW5jdGlvbiBmb3IgbW9yZVxuICogY29tcGxpY2F0ZWQgdG9rZW5zLlxuICovXG5cblxuZnVuY3Rpb24gcmVhZFRva2VuKGxleGVyLCBwcmV2KSB7XG4gIHZhciBzb3VyY2UgPSBsZXhlci5zb3VyY2U7XG4gIHZhciBib2R5ID0gc291cmNlLmJvZHk7XG4gIHZhciBib2R5TGVuZ3RoID0gYm9keS5sZW5ndGg7XG4gIHZhciBwb3MgPSBwcmV2LmVuZDtcblxuICB3aGlsZSAocG9zIDwgYm9keUxlbmd0aCkge1xuICAgIHZhciBjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvcyk7XG4gICAgdmFyIF9saW5lID0gbGV4ZXIubGluZTtcblxuICAgIHZhciBfY29sID0gMSArIHBvcyAtIGxleGVyLmxpbmVTdGFydDsgLy8gU291cmNlQ2hhcmFjdGVyXG5cblxuICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgY2FzZSAweGZlZmY6IC8vIDxCT00+XG5cbiAgICAgIGNhc2UgOTogLy8gICBcXHRcblxuICAgICAgY2FzZSAzMjogLy8gIDxzcGFjZT5cblxuICAgICAgY2FzZSA0NDpcbiAgICAgICAgLy8gICxcbiAgICAgICAgKytwb3M7XG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBjYXNlIDEwOlxuICAgICAgICAvLyAgXFxuXG4gICAgICAgICsrcG9zO1xuICAgICAgICArK2xleGVyLmxpbmU7XG4gICAgICAgIGxleGVyLmxpbmVTdGFydCA9IHBvcztcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIGNhc2UgMTM6XG4gICAgICAgIC8vICBcXHJcbiAgICAgICAgaWYgKGJvZHkuY2hhckNvZGVBdChwb3MgKyAxKSA9PT0gMTApIHtcbiAgICAgICAgICBwb3MgKz0gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICArK3BvcztcbiAgICAgICAgfVxuXG4gICAgICAgICsrbGV4ZXIubGluZTtcbiAgICAgICAgbGV4ZXIubGluZVN0YXJ0ID0gcG9zO1xuICAgICAgICBjb250aW51ZTtcblxuICAgICAgY2FzZSAzMzpcbiAgICAgICAgLy8gICFcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQkFORywgcG9zLCBwb3MgKyAxLCBfbGluZSwgX2NvbCwgcHJldik7XG5cbiAgICAgIGNhc2UgMzU6XG4gICAgICAgIC8vICAjXG4gICAgICAgIHJldHVybiByZWFkQ29tbWVudChzb3VyY2UsIHBvcywgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDM2OlxuICAgICAgICAvLyAgJFxuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5ET0xMQVIsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDM4OlxuICAgICAgICAvLyAgJlxuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5BTVAsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDQwOlxuICAgICAgICAvLyAgKFxuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5QQVJFTl9MLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA0MTpcbiAgICAgICAgLy8gIClcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuUEFSRU5fUiwgcG9zLCBwb3MgKyAxLCBfbGluZSwgX2NvbCwgcHJldik7XG5cbiAgICAgIGNhc2UgNDY6XG4gICAgICAgIC8vICAuXG4gICAgICAgIGlmIChib2R5LmNoYXJDb2RlQXQocG9zICsgMSkgPT09IDQ2ICYmIGJvZHkuY2hhckNvZGVBdChwb3MgKyAyKSA9PT0gNDYpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5TUFJFQUQsIHBvcywgcG9zICsgMywgX2xpbmUsIF9jb2wsIHByZXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNTg6XG4gICAgICAgIC8vICA6XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkNPTE9OLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA2MTpcbiAgICAgICAgLy8gID1cbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuRVFVQUxTLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA2NDpcbiAgICAgICAgLy8gIEBcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQVQsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDkxOlxuICAgICAgICAvLyAgW1xuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5CUkFDS0VUX0wsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDkzOlxuICAgICAgICAvLyAgXVxuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5CUkFDS0VUX1IsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDEyMzpcbiAgICAgICAgLy8ge1xuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5CUkFDRV9MLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSAxMjQ6XG4gICAgICAgIC8vIHxcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuUElQRSwgcG9zLCBwb3MgKyAxLCBfbGluZSwgX2NvbCwgcHJldik7XG5cbiAgICAgIGNhc2UgMTI1OlxuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkJSQUNFX1IsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDM0OlxuICAgICAgICAvLyAgXCJcbiAgICAgICAgaWYgKGJvZHkuY2hhckNvZGVBdChwb3MgKyAxKSA9PT0gMzQgJiYgYm9keS5jaGFyQ29kZUF0KHBvcyArIDIpID09PSAzNCkge1xuICAgICAgICAgIHJldHVybiByZWFkQmxvY2tTdHJpbmcoc291cmNlLCBwb3MsIF9saW5lLCBfY29sLCBwcmV2LCBsZXhlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVhZFN0cmluZyhzb3VyY2UsIHBvcywgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDQ1OiAvLyAgLVxuXG4gICAgICBjYXNlIDQ4OiAvLyAgMFxuXG4gICAgICBjYXNlIDQ5OiAvLyAgMVxuXG4gICAgICBjYXNlIDUwOiAvLyAgMlxuXG4gICAgICBjYXNlIDUxOiAvLyAgM1xuXG4gICAgICBjYXNlIDUyOiAvLyAgNFxuXG4gICAgICBjYXNlIDUzOiAvLyAgNVxuXG4gICAgICBjYXNlIDU0OiAvLyAgNlxuXG4gICAgICBjYXNlIDU1OiAvLyAgN1xuXG4gICAgICBjYXNlIDU2OiAvLyAgOFxuXG4gICAgICBjYXNlIDU3OlxuICAgICAgICAvLyAgOVxuICAgICAgICByZXR1cm4gcmVhZE51bWJlcihzb3VyY2UsIHBvcywgY29kZSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDY1OiAvLyAgQVxuXG4gICAgICBjYXNlIDY2OiAvLyAgQlxuXG4gICAgICBjYXNlIDY3OiAvLyAgQ1xuXG4gICAgICBjYXNlIDY4OiAvLyAgRFxuXG4gICAgICBjYXNlIDY5OiAvLyAgRVxuXG4gICAgICBjYXNlIDcwOiAvLyAgRlxuXG4gICAgICBjYXNlIDcxOiAvLyAgR1xuXG4gICAgICBjYXNlIDcyOiAvLyAgSFxuXG4gICAgICBjYXNlIDczOiAvLyAgSVxuXG4gICAgICBjYXNlIDc0OiAvLyAgSlxuXG4gICAgICBjYXNlIDc1OiAvLyAgS1xuXG4gICAgICBjYXNlIDc2OiAvLyAgTFxuXG4gICAgICBjYXNlIDc3OiAvLyAgTVxuXG4gICAgICBjYXNlIDc4OiAvLyAgTlxuXG4gICAgICBjYXNlIDc5OiAvLyAgT1xuXG4gICAgICBjYXNlIDgwOiAvLyAgUFxuXG4gICAgICBjYXNlIDgxOiAvLyAgUVxuXG4gICAgICBjYXNlIDgyOiAvLyAgUlxuXG4gICAgICBjYXNlIDgzOiAvLyAgU1xuXG4gICAgICBjYXNlIDg0OiAvLyAgVFxuXG4gICAgICBjYXNlIDg1OiAvLyAgVVxuXG4gICAgICBjYXNlIDg2OiAvLyAgVlxuXG4gICAgICBjYXNlIDg3OiAvLyAgV1xuXG4gICAgICBjYXNlIDg4OiAvLyAgWFxuXG4gICAgICBjYXNlIDg5OiAvLyAgWVxuXG4gICAgICBjYXNlIDkwOiAvLyAgWlxuXG4gICAgICBjYXNlIDk1OiAvLyAgX1xuXG4gICAgICBjYXNlIDk3OiAvLyAgYVxuXG4gICAgICBjYXNlIDk4OiAvLyAgYlxuXG4gICAgICBjYXNlIDk5OiAvLyAgY1xuXG4gICAgICBjYXNlIDEwMDogLy8gZFxuXG4gICAgICBjYXNlIDEwMTogLy8gZVxuXG4gICAgICBjYXNlIDEwMjogLy8gZlxuXG4gICAgICBjYXNlIDEwMzogLy8gZ1xuXG4gICAgICBjYXNlIDEwNDogLy8gaFxuXG4gICAgICBjYXNlIDEwNTogLy8gaVxuXG4gICAgICBjYXNlIDEwNjogLy8galxuXG4gICAgICBjYXNlIDEwNzogLy8ga1xuXG4gICAgICBjYXNlIDEwODogLy8gbFxuXG4gICAgICBjYXNlIDEwOTogLy8gbVxuXG4gICAgICBjYXNlIDExMDogLy8gblxuXG4gICAgICBjYXNlIDExMTogLy8gb1xuXG4gICAgICBjYXNlIDExMjogLy8gcFxuXG4gICAgICBjYXNlIDExMzogLy8gcVxuXG4gICAgICBjYXNlIDExNDogLy8gclxuXG4gICAgICBjYXNlIDExNTogLy8gc1xuXG4gICAgICBjYXNlIDExNjogLy8gdFxuXG4gICAgICBjYXNlIDExNzogLy8gdVxuXG4gICAgICBjYXNlIDExODogLy8gdlxuXG4gICAgICBjYXNlIDExOTogLy8gd1xuXG4gICAgICBjYXNlIDEyMDogLy8geFxuXG4gICAgICBjYXNlIDEyMTogLy8geVxuXG4gICAgICBjYXNlIDEyMjpcbiAgICAgICAgLy8gelxuICAgICAgICByZXR1cm4gcmVhZE5hbWUoc291cmNlLCBwb3MsIF9saW5lLCBfY29sLCBwcmV2KTtcbiAgICB9XG5cbiAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvcywgdW5leHBlY3RlZENoYXJhY3Rlck1lc3NhZ2UoY29kZSkpO1xuICB9XG5cbiAgdmFyIGxpbmUgPSBsZXhlci5saW5lO1xuICB2YXIgY29sID0gMSArIHBvcyAtIGxleGVyLmxpbmVTdGFydDtcbiAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuRU9GLCBib2R5TGVuZ3RoLCBib2R5TGVuZ3RoLCBsaW5lLCBjb2wsIHByZXYpO1xufVxuLyoqXG4gKiBSZXBvcnQgYSBtZXNzYWdlIHRoYXQgYW4gdW5leHBlY3RlZCBjaGFyYWN0ZXIgd2FzIGVuY291bnRlcmVkLlxuICovXG5cblxuZnVuY3Rpb24gdW5leHBlY3RlZENoYXJhY3Rlck1lc3NhZ2UoY29kZSkge1xuICBpZiAoY29kZSA8IDB4MDAyMCAmJiBjb2RlICE9PSAweDAwMDkgJiYgY29kZSAhPT0gMHgwMDBhICYmIGNvZGUgIT09IDB4MDAwZCkge1xuICAgIHJldHVybiBcIkNhbm5vdCBjb250YWluIHRoZSBpbnZhbGlkIGNoYXJhY3RlciBcIi5jb25jYXQocHJpbnRDaGFyQ29kZShjb2RlKSwgXCIuXCIpO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09IDM5KSB7XG4gICAgLy8gJ1xuICAgIHJldHVybiAnVW5leHBlY3RlZCBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyIChcXCcpLCBkaWQgeW91IG1lYW4gdG8gdXNlIGEgZG91YmxlIHF1b3RlIChcIik/JztcbiAgfVxuXG4gIHJldHVybiBcIkNhbm5vdCBwYXJzZSB0aGUgdW5leHBlY3RlZCBjaGFyYWN0ZXIgXCIuY29uY2F0KHByaW50Q2hhckNvZGUoY29kZSksIFwiLlwiKTtcbn1cbi8qKlxuICogUmVhZHMgYSBjb21tZW50IHRva2VuIGZyb20gdGhlIHNvdXJjZSBmaWxlLlxuICpcbiAqICNbXFx1MDAwOVxcdTAwMjAtXFx1RkZGRl0qXG4gKi9cblxuXG5mdW5jdGlvbiByZWFkQ29tbWVudChzb3VyY2UsIHN0YXJ0LCBsaW5lLCBjb2wsIHByZXYpIHtcbiAgdmFyIGJvZHkgPSBzb3VyY2UuYm9keTtcbiAgdmFyIGNvZGU7XG4gIHZhciBwb3NpdGlvbiA9IHN0YXJ0O1xuXG4gIGRvIHtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuICB9IHdoaWxlICghaXNOYU4oY29kZSkgJiYgKCAvLyBTb3VyY2VDaGFyYWN0ZXIgYnV0IG5vdCBMaW5lVGVybWluYXRvclxuICBjb2RlID4gMHgwMDFmIHx8IGNvZGUgPT09IDB4MDAwOSkpO1xuXG4gIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkNPTU1FTlQsIHN0YXJ0LCBwb3NpdGlvbiwgbGluZSwgY29sLCBwcmV2LCBib2R5LnNsaWNlKHN0YXJ0ICsgMSwgcG9zaXRpb24pKTtcbn1cbi8qKlxuICogUmVhZHMgYSBudW1iZXIgdG9rZW4gZnJvbSB0aGUgc291cmNlIGZpbGUsIGVpdGhlciBhIGZsb2F0XG4gKiBvciBhbiBpbnQgZGVwZW5kaW5nIG9uIHdoZXRoZXIgYSBkZWNpbWFsIHBvaW50IGFwcGVhcnMuXG4gKlxuICogSW50OiAgIC0/KDB8WzEtOV1bMC05XSopXG4gKiBGbG9hdDogLT8oMHxbMS05XVswLTldKikoXFwuWzAtOV0rKT8oKEV8ZSkoK3wtKT9bMC05XSspP1xuICovXG5cblxuZnVuY3Rpb24gcmVhZE51bWJlcihzb3VyY2UsIHN0YXJ0LCBmaXJzdENvZGUsIGxpbmUsIGNvbCwgcHJldikge1xuICB2YXIgYm9keSA9IHNvdXJjZS5ib2R5O1xuICB2YXIgY29kZSA9IGZpcnN0Q29kZTtcbiAgdmFyIHBvc2l0aW9uID0gc3RhcnQ7XG4gIHZhciBpc0Zsb2F0ID0gZmFsc2U7XG5cbiAgaWYgKGNvZGUgPT09IDQ1KSB7XG4gICAgLy8gLVxuICAgIGNvZGUgPSBib2R5LmNoYXJDb2RlQXQoKytwb3NpdGlvbik7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gNDgpIHtcbiAgICAvLyAwXG4gICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKTtcblxuICAgIGlmIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHtcbiAgICAgIHRocm93IHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sIFwiSW52YWxpZCBudW1iZXIsIHVuZXhwZWN0ZWQgZGlnaXQgYWZ0ZXIgMDogXCIuY29uY2F0KHByaW50Q2hhckNvZGUoY29kZSksIFwiLlwiKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBvc2l0aW9uID0gcmVhZERpZ2l0cyhzb3VyY2UsIHBvc2l0aW9uLCBjb2RlKTtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgfVxuXG4gIGlmIChjb2RlID09PSA0Nikge1xuICAgIC8vIC5cbiAgICBpc0Zsb2F0ID0gdHJ1ZTtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuICAgIHBvc2l0aW9uID0gcmVhZERpZ2l0cyhzb3VyY2UsIHBvc2l0aW9uLCBjb2RlKTtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgfVxuXG4gIGlmIChjb2RlID09PSA2OSB8fCBjb2RlID09PSAxMDEpIHtcbiAgICAvLyBFIGVcbiAgICBpc0Zsb2F0ID0gdHJ1ZTtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuXG4gICAgaWYgKGNvZGUgPT09IDQzIHx8IGNvZGUgPT09IDQ1KSB7XG4gICAgICAvLyArIC1cbiAgICAgIGNvZGUgPSBib2R5LmNoYXJDb2RlQXQoKytwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgcG9zaXRpb24gPSByZWFkRGlnaXRzKHNvdXJjZSwgcG9zaXRpb24sIGNvZGUpO1xuICAgIGNvZGUgPSBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24pO1xuICB9IC8vIE51bWJlcnMgY2Fubm90IGJlIGZvbGxvd2VkIGJ5IC4gb3IgTmFtZVN0YXJ0XG5cblxuICBpZiAoY29kZSA9PT0gNDYgfHwgaXNOYW1lU3RhcnQoY29kZSkpIHtcbiAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgbnVtYmVyLCBleHBlY3RlZCBkaWdpdCBidXQgZ290OiBcIi5jb25jYXQocHJpbnRDaGFyQ29kZShjb2RlKSwgXCIuXCIpKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgVG9rZW4oaXNGbG9hdCA/IFRva2VuS2luZC5GTE9BVCA6IFRva2VuS2luZC5JTlQsIHN0YXJ0LCBwb3NpdGlvbiwgbGluZSwgY29sLCBwcmV2LCBib2R5LnNsaWNlKHN0YXJ0LCBwb3NpdGlvbikpO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXcgcG9zaXRpb24gaW4gdGhlIHNvdXJjZSBhZnRlciByZWFkaW5nIGRpZ2l0cy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHJlYWREaWdpdHMoc291cmNlLCBzdGFydCwgZmlyc3RDb2RlKSB7XG4gIHZhciBib2R5ID0gc291cmNlLmJvZHk7XG4gIHZhciBwb3NpdGlvbiA9IHN0YXJ0O1xuICB2YXIgY29kZSA9IGZpcnN0Q29kZTtcblxuICBpZiAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB7XG4gICAgLy8gMCAtIDlcbiAgICBkbyB7XG4gICAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuICAgIH0gd2hpbGUgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1Nyk7IC8vIDAgLSA5XG5cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIHRocm93IHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sIFwiSW52YWxpZCBudW1iZXIsIGV4cGVjdGVkIGRpZ2l0IGJ1dCBnb3Q6IFwiLmNvbmNhdChwcmludENoYXJDb2RlKGNvZGUpLCBcIi5cIikpO1xufVxuLyoqXG4gKiBSZWFkcyBhIHN0cmluZyB0b2tlbiBmcm9tIHRoZSBzb3VyY2UgZmlsZS5cbiAqXG4gKiBcIihbXlwiXFxcXFxcdTAwMEFcXHUwMDBEXXwoXFxcXCh1WzAtOWEtZkEtRl17NH18W1wiXFxcXC9iZm5ydF0pKSkqXCJcbiAqL1xuXG5cbmZ1bmN0aW9uIHJlYWRTdHJpbmcoc291cmNlLCBzdGFydCwgbGluZSwgY29sLCBwcmV2KSB7XG4gIHZhciBib2R5ID0gc291cmNlLmJvZHk7XG4gIHZhciBwb3NpdGlvbiA9IHN0YXJ0ICsgMTtcbiAgdmFyIGNodW5rU3RhcnQgPSBwb3NpdGlvbjtcbiAgdmFyIGNvZGUgPSAwO1xuICB2YXIgdmFsdWUgPSAnJztcblxuICB3aGlsZSAocG9zaXRpb24gPCBib2R5Lmxlbmd0aCAmJiAhaXNOYU4oY29kZSA9IGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbikpICYmIC8vIG5vdCBMaW5lVGVybWluYXRvclxuICBjb2RlICE9PSAweDAwMGEgJiYgY29kZSAhPT0gMHgwMDBkKSB7XG4gICAgLy8gQ2xvc2luZyBRdW90ZSAoXCIpXG4gICAgaWYgKGNvZGUgPT09IDM0KSB7XG4gICAgICB2YWx1ZSArPSBib2R5LnNsaWNlKGNodW5rU3RhcnQsIHBvc2l0aW9uKTtcbiAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLlNUUklORywgc3RhcnQsIHBvc2l0aW9uICsgMSwgbGluZSwgY29sLCBwcmV2LCB2YWx1ZSk7XG4gICAgfSAvLyBTb3VyY2VDaGFyYWN0ZXJcblxuXG4gICAgaWYgKGNvZGUgPCAweDAwMjAgJiYgY29kZSAhPT0gMHgwMDA5KSB7XG4gICAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgY2hhcmFjdGVyIHdpdGhpbiBTdHJpbmc6IFwiLmNvbmNhdChwcmludENoYXJDb2RlKGNvZGUpLCBcIi5cIikpO1xuICAgIH1cblxuICAgICsrcG9zaXRpb247XG5cbiAgICBpZiAoY29kZSA9PT0gOTIpIHtcbiAgICAgIC8vIFxcXG4gICAgICB2YWx1ZSArPSBib2R5LnNsaWNlKGNodW5rU3RhcnQsIHBvc2l0aW9uIC0gMSk7XG4gICAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcblxuICAgICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgdmFsdWUgKz0gJ1wiJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgIHZhbHVlICs9ICcvJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDkyOlxuICAgICAgICAgIHZhbHVlICs9ICdcXFxcJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDk4OlxuICAgICAgICAgIHZhbHVlICs9ICdcXGInO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgIHZhbHVlICs9ICdcXGYnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTEwOlxuICAgICAgICAgIHZhbHVlICs9ICdcXG4nO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTE0OlxuICAgICAgICAgIHZhbHVlICs9ICdcXHInO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTE2OlxuICAgICAgICAgIHZhbHVlICs9ICdcXHQnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTE3OlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIHVYWFhYXG4gICAgICAgICAgICB2YXIgY2hhckNvZGUgPSB1bmlDaGFyQ29kZShib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKSwgYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMiksIGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDMpLCBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyA0KSk7XG5cbiAgICAgICAgICAgIGlmIChjaGFyQ29kZSA8IDApIHtcbiAgICAgICAgICAgICAgdmFyIGludmFsaWRTZXF1ZW5jZSA9IGJvZHkuc2xpY2UocG9zaXRpb24gKyAxLCBwb3NpdGlvbiArIDUpO1xuICAgICAgICAgICAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgY2hhcmFjdGVyIGVzY2FwZSBzZXF1ZW5jZTogXFxcXHVcIi5jb25jYXQoaW52YWxpZFNlcXVlbmNlLCBcIi5cIikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlKTtcbiAgICAgICAgICAgIHBvc2l0aW9uICs9IDQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgY2hhcmFjdGVyIGVzY2FwZSBzZXF1ZW5jZTogXFxcXFwiLmNvbmNhdChTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpLCBcIi5cIikpO1xuICAgICAgfVxuXG4gICAgICArK3Bvc2l0aW9uO1xuICAgICAgY2h1bmtTdGFydCA9IHBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHRocm93IHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sICdVbnRlcm1pbmF0ZWQgc3RyaW5nLicpO1xufVxuLyoqXG4gKiBSZWFkcyBhIGJsb2NrIHN0cmluZyB0b2tlbiBmcm9tIHRoZSBzb3VyY2UgZmlsZS5cbiAqXG4gKiBcIlwiXCIoXCI/XCI/KFxcXFxcIlwiXCJ8XFxcXCg/IT1cIlwiXCIpfFteXCJcXFxcXSkpKlwiXCJcIlxuICovXG5cblxuZnVuY3Rpb24gcmVhZEJsb2NrU3RyaW5nKHNvdXJjZSwgc3RhcnQsIGxpbmUsIGNvbCwgcHJldiwgbGV4ZXIpIHtcbiAgdmFyIGJvZHkgPSBzb3VyY2UuYm9keTtcbiAgdmFyIHBvc2l0aW9uID0gc3RhcnQgKyAzO1xuICB2YXIgY2h1bmtTdGFydCA9IHBvc2l0aW9uO1xuICB2YXIgY29kZSA9IDA7XG4gIHZhciByYXdWYWx1ZSA9ICcnO1xuXG4gIHdoaWxlIChwb3NpdGlvbiA8IGJvZHkubGVuZ3RoICYmICFpc05hTihjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKSkpIHtcbiAgICAvLyBDbG9zaW5nIFRyaXBsZS1RdW90ZSAoXCJcIlwiKVxuICAgIGlmIChjb2RlID09PSAzNCAmJiBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKSA9PT0gMzQgJiYgYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMikgPT09IDM0KSB7XG4gICAgICByYXdWYWx1ZSArPSBib2R5LnNsaWNlKGNodW5rU3RhcnQsIHBvc2l0aW9uKTtcbiAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkJMT0NLX1NUUklORywgc3RhcnQsIHBvc2l0aW9uICsgMywgbGluZSwgY29sLCBwcmV2LCBkZWRlbnRCbG9ja1N0cmluZ1ZhbHVlKHJhd1ZhbHVlKSk7XG4gICAgfSAvLyBTb3VyY2VDaGFyYWN0ZXJcblxuXG4gICAgaWYgKGNvZGUgPCAweDAwMjAgJiYgY29kZSAhPT0gMHgwMDA5ICYmIGNvZGUgIT09IDB4MDAwYSAmJiBjb2RlICE9PSAweDAwMGQpIHtcbiAgICAgIHRocm93IHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sIFwiSW52YWxpZCBjaGFyYWN0ZXIgd2l0aGluIFN0cmluZzogXCIuY29uY2F0KHByaW50Q2hhckNvZGUoY29kZSksIFwiLlwiKSk7XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDEwKSB7XG4gICAgICAvLyBuZXcgbGluZVxuICAgICAgKytwb3NpdGlvbjtcbiAgICAgICsrbGV4ZXIubGluZTtcbiAgICAgIGxleGVyLmxpbmVTdGFydCA9IHBvc2l0aW9uO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMTMpIHtcbiAgICAgIC8vIGNhcnJpYWdlIHJldHVyblxuICAgICAgaWYgKGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDEpID09PSAxMCkge1xuICAgICAgICBwb3NpdGlvbiArPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKytwb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgKytsZXhlci5saW5lO1xuICAgICAgbGV4ZXIubGluZVN0YXJ0ID0gcG9zaXRpb247XG4gICAgfSBlbHNlIGlmICggLy8gRXNjYXBlIFRyaXBsZS1RdW90ZSAoXFxcIlwiXCIpXG4gICAgY29kZSA9PT0gOTIgJiYgYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSkgPT09IDM0ICYmIGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDIpID09PSAzNCAmJiBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyAzKSA9PT0gMzQpIHtcbiAgICAgIHJhd1ZhbHVlICs9IGJvZHkuc2xpY2UoY2h1bmtTdGFydCwgcG9zaXRpb24pICsgJ1wiXCJcIic7XG4gICAgICBwb3NpdGlvbiArPSA0O1xuICAgICAgY2h1bmtTdGFydCA9IHBvc2l0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICArK3Bvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHRocm93IHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sICdVbnRlcm1pbmF0ZWQgc3RyaW5nLicpO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBmb3VyIGhleGFkZWNpbWFsIGNoYXJzIHRvIHRoZSBpbnRlZ2VyIHRoYXQgdGhlXG4gKiBzdHJpbmcgcmVwcmVzZW50cy4gRm9yIGV4YW1wbGUsIHVuaUNoYXJDb2RlKCcwJywnMCcsJzAnLCdmJylcbiAqIHdpbGwgcmV0dXJuIDE1LCBhbmQgdW5pQ2hhckNvZGUoJzAnLCcwJywnZicsJ2YnKSByZXR1cm5zIDI1NS5cbiAqXG4gKiBSZXR1cm5zIGEgbmVnYXRpdmUgbnVtYmVyIG9uIGVycm9yLCBpZiBhIGNoYXIgd2FzIGludmFsaWQuXG4gKlxuICogVGhpcyBpcyBpbXBsZW1lbnRlZCBieSBub3RpbmcgdGhhdCBjaGFyMmhleCgpIHJldHVybnMgLTEgb24gZXJyb3IsXG4gKiB3aGljaCBtZWFucyB0aGUgcmVzdWx0IG9mIE9SaW5nIHRoZSBjaGFyMmhleCgpIHdpbGwgYWxzbyBiZSBuZWdhdGl2ZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHVuaUNoYXJDb2RlKGEsIGIsIGMsIGQpIHtcbiAgcmV0dXJuIGNoYXIyaGV4KGEpIDw8IDEyIHwgY2hhcjJoZXgoYikgPDwgOCB8IGNoYXIyaGV4KGMpIDw8IDQgfCBjaGFyMmhleChkKTtcbn1cbi8qKlxuICogQ29udmVydHMgYSBoZXggY2hhcmFjdGVyIHRvIGl0cyBpbnRlZ2VyIHZhbHVlLlxuICogJzAnIGJlY29tZXMgMCwgJzknIGJlY29tZXMgOVxuICogJ0EnIGJlY29tZXMgMTAsICdGJyBiZWNvbWVzIDE1XG4gKiAnYScgYmVjb21lcyAxMCwgJ2YnIGJlY29tZXMgMTVcbiAqXG4gKiBSZXR1cm5zIC0xIG9uIGVycm9yLlxuICovXG5cblxuZnVuY3Rpb24gY2hhcjJoZXgoYSkge1xuICByZXR1cm4gYSA+PSA0OCAmJiBhIDw9IDU3ID8gYSAtIDQ4IC8vIDAtOVxuICA6IGEgPj0gNjUgJiYgYSA8PSA3MCA/IGEgLSA1NSAvLyBBLUZcbiAgOiBhID49IDk3ICYmIGEgPD0gMTAyID8gYSAtIDg3IC8vIGEtZlxuICA6IC0xO1xufVxuLyoqXG4gKiBSZWFkcyBhbiBhbHBoYW51bWVyaWMgKyB1bmRlcnNjb3JlIG5hbWUgZnJvbSB0aGUgc291cmNlLlxuICpcbiAqIFtfQS1aYS16XVtfMC05QS1aYS16XSpcbiAqL1xuXG5cbmZ1bmN0aW9uIHJlYWROYW1lKHNvdXJjZSwgc3RhcnQsIGxpbmUsIGNvbCwgcHJldikge1xuICB2YXIgYm9keSA9IHNvdXJjZS5ib2R5O1xuICB2YXIgYm9keUxlbmd0aCA9IGJvZHkubGVuZ3RoO1xuICB2YXIgcG9zaXRpb24gPSBzdGFydCArIDE7XG4gIHZhciBjb2RlID0gMDtcblxuICB3aGlsZSAocG9zaXRpb24gIT09IGJvZHlMZW5ndGggJiYgIWlzTmFOKGNvZGUgPSBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24pKSAmJiAoY29kZSA9PT0gOTUgfHwgLy8gX1xuICBjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcgfHwgLy8gMC05XG4gIGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCB8fCAvLyBBLVpcbiAgY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgLy8gYS16XG4gICkge1xuICAgICsrcG9zaXRpb247XG4gIH1cblxuICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5OQU1FLCBzdGFydCwgcG9zaXRpb24sIGxpbmUsIGNvbCwgcHJldiwgYm9keS5zbGljZShzdGFydCwgcG9zaXRpb24pKTtcbn0gLy8gXyBBLVogYS16XG5cblxuZnVuY3Rpb24gaXNOYW1lU3RhcnQoY29kZSkge1xuICByZXR1cm4gY29kZSA9PT0gOTUgfHwgY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwIHx8IGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjI7XG59XG4iLCIvKipcbiAqIFJlcHJlc2VudHMgYSBsb2NhdGlvbiBpbiBhIFNvdXJjZS5cbiAqL1xuXG4vKipcbiAqIFRha2VzIGEgU291cmNlIGFuZCBhIFVURi04IGNoYXJhY3RlciBvZmZzZXQsIGFuZCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nXG4gKiBsaW5lIGFuZCBjb2x1bW4gYXMgYSBTb3VyY2VMb2NhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uKHNvdXJjZSwgcG9zaXRpb24pIHtcbiAgdmFyIGxpbmVSZWdleHAgPSAvXFxyXFxufFtcXG5cXHJdL2c7XG4gIHZhciBsaW5lID0gMTtcbiAgdmFyIGNvbHVtbiA9IHBvc2l0aW9uICsgMTtcbiAgdmFyIG1hdGNoO1xuXG4gIHdoaWxlICgobWF0Y2ggPSBsaW5lUmVnZXhwLmV4ZWMoc291cmNlLmJvZHkpKSAmJiBtYXRjaC5pbmRleCA8IHBvc2l0aW9uKSB7XG4gICAgbGluZSArPSAxO1xuICAgIGNvbHVtbiA9IHBvc2l0aW9uICsgMSAtIChtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxpbmU6IGxpbmUsXG4gICAgY29sdW1uOiBjb2x1bW5cbiAgfTtcbn1cbiIsImltcG9ydCB7IHN5bnRheEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL3N5bnRheEVycm9yLm1qc1wiO1xuaW1wb3J0IHsgS2luZCB9IGZyb20gXCIuL2tpbmRzLm1qc1wiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiLi9hc3QubWpzXCI7XG5pbXBvcnQgeyBUb2tlbktpbmQgfSBmcm9tIFwiLi90b2tlbktpbmQubWpzXCI7XG5pbXBvcnQgeyBTb3VyY2UsIGlzU291cmNlIH0gZnJvbSBcIi4vc291cmNlLm1qc1wiO1xuaW1wb3J0IHsgRGlyZWN0aXZlTG9jYXRpb24gfSBmcm9tIFwiLi9kaXJlY3RpdmVMb2NhdGlvbi5tanNcIjtcbmltcG9ydCB7IExleGVyLCBpc1B1bmN0dWF0b3JUb2tlbktpbmQgfSBmcm9tIFwiLi9sZXhlci5tanNcIjtcbi8qKlxuICogQ29uZmlndXJhdGlvbiBvcHRpb25zIHRvIGNvbnRyb2wgcGFyc2VyIGJlaGF2aW9yXG4gKi9cblxuLyoqXG4gKiBHaXZlbiBhIEdyYXBoUUwgc291cmNlLCBwYXJzZXMgaXQgaW50byBhIERvY3VtZW50LlxuICogVGhyb3dzIEdyYXBoUUxFcnJvciBpZiBhIHN5bnRheCBlcnJvciBpcyBlbmNvdW50ZXJlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgcGFyc2VyID0gbmV3IFBhcnNlcihzb3VyY2UsIG9wdGlvbnMpO1xuICByZXR1cm4gcGFyc2VyLnBhcnNlRG9jdW1lbnQoKTtcbn1cbi8qKlxuICogR2l2ZW4gYSBzdHJpbmcgY29udGFpbmluZyBhIEdyYXBoUUwgdmFsdWUgKGV4LiBgWzQyXWApLCBwYXJzZSB0aGUgQVNUIGZvclxuICogdGhhdCB2YWx1ZS5cbiAqIFRocm93cyBHcmFwaFFMRXJyb3IgaWYgYSBzeW50YXggZXJyb3IgaXMgZW5jb3VudGVyZWQuXG4gKlxuICogVGhpcyBpcyB1c2VmdWwgd2l0aGluIHRvb2xzIHRoYXQgb3BlcmF0ZSB1cG9uIEdyYXBoUUwgVmFsdWVzIGRpcmVjdGx5IGFuZFxuICogaW4gaXNvbGF0aW9uIG9mIGNvbXBsZXRlIEdyYXBoUUwgZG9jdW1lbnRzLlxuICpcbiAqIENvbnNpZGVyIHByb3ZpZGluZyB0aGUgcmVzdWx0cyB0byB0aGUgdXRpbGl0eSBmdW5jdGlvbjogdmFsdWVGcm9tQVNUKCkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVmFsdWUoc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBwYXJzZXIgPSBuZXcgUGFyc2VyKHNvdXJjZSwgb3B0aW9ucyk7XG4gIHBhcnNlci5leHBlY3RUb2tlbihUb2tlbktpbmQuU09GKTtcbiAgdmFyIHZhbHVlID0gcGFyc2VyLnBhcnNlVmFsdWVMaXRlcmFsKGZhbHNlKTtcbiAgcGFyc2VyLmV4cGVjdFRva2VuKFRva2VuS2luZC5FT0YpO1xuICByZXR1cm4gdmFsdWU7XG59XG4vKipcbiAqIEdpdmVuIGEgc3RyaW5nIGNvbnRhaW5pbmcgYSBHcmFwaFFMIFR5cGUgKGV4LiBgW0ludCFdYCksIHBhcnNlIHRoZSBBU1QgZm9yXG4gKiB0aGF0IHR5cGUuXG4gKiBUaHJvd3MgR3JhcGhRTEVycm9yIGlmIGEgc3ludGF4IGVycm9yIGlzIGVuY291bnRlcmVkLlxuICpcbiAqIFRoaXMgaXMgdXNlZnVsIHdpdGhpbiB0b29scyB0aGF0IG9wZXJhdGUgdXBvbiBHcmFwaFFMIFR5cGVzIGRpcmVjdGx5IGFuZFxuICogaW4gaXNvbGF0aW9uIG9mIGNvbXBsZXRlIEdyYXBoUUwgZG9jdW1lbnRzLlxuICpcbiAqIENvbnNpZGVyIHByb3ZpZGluZyB0aGUgcmVzdWx0cyB0byB0aGUgdXRpbGl0eSBmdW5jdGlvbjogdHlwZUZyb21BU1QoKS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUeXBlKHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgcGFyc2VyID0gbmV3IFBhcnNlcihzb3VyY2UsIG9wdGlvbnMpO1xuICBwYXJzZXIuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLlNPRik7XG4gIHZhciB0eXBlID0gcGFyc2VyLnBhcnNlVHlwZVJlZmVyZW5jZSgpO1xuICBwYXJzZXIuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkVPRik7XG4gIHJldHVybiB0eXBlO1xufVxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGV4cG9ydGVkIG9ubHkgdG8gYXNzaXN0IHBlb3BsZSBpbiBpbXBsZW1lbnRpbmcgdGhlaXIgb3duIHBhcnNlcnNcbiAqIHdpdGhvdXQgZHVwbGljYXRpbmcgdG9vIG11Y2ggY29kZSBhbmQgc2hvdWxkIGJlIHVzZWQgb25seSBhcyBsYXN0IHJlc29ydCBmb3IgY2FzZXNcbiAqIHN1Y2ggYXMgZXhwZXJpbWVudGFsIHN5bnRheCBvciBpZiBjZXJ0YWluIGZlYXR1cmVzIGNvdWxkIG5vdCBiZSBjb250cmlidXRlZCB1cHN0cmVhbS5cbiAqXG4gKiBJdCBpcyBzdGlsbCBwYXJ0IG9mIHRoZSBpbnRlcm5hbCBBUEkgYW5kIGlzIHZlcnNpb25lZCwgc28gYW55IGNoYW5nZXMgdG8gaXQgYXJlIG5ldmVyXG4gKiBjb25zaWRlcmVkIGJyZWFraW5nIGNoYW5nZXMuIElmIHlvdSBzdGlsbCBuZWVkIHRvIHN1cHBvcnQgbXVsdGlwbGUgdmVyc2lvbnMgb2YgdGhlXG4gKiBsaWJyYXJ5LCBwbGVhc2UgdXNlIHRoZSBgdmVyc2lvbkluZm9gIHZhcmlhYmxlIGZvciB2ZXJzaW9uIGRldGVjdGlvbi5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5leHBvcnQgdmFyIFBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBhcnNlcihzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgc291cmNlT2JqID0gaXNTb3VyY2Uoc291cmNlKSA/IHNvdXJjZSA6IG5ldyBTb3VyY2Uoc291cmNlKTtcbiAgICB0aGlzLl9sZXhlciA9IG5ldyBMZXhlcihzb3VyY2VPYmopO1xuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIG5hbWUgbGV4IHRva2VuIGludG8gYSBuYW1lIHBhcnNlIG5vZGUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFBhcnNlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnBhcnNlTmFtZSA9IGZ1bmN0aW9uIHBhcnNlTmFtZSgpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5OQU1FKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5OQU1FLFxuICAgICAgdmFsdWU6IHRva2VuLnZhbHVlLFxuICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICB9O1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIERvY3VtZW50IHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIERvY3VtZW50IDogRGVmaW5pdGlvbitcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VEb2N1bWVudCA9IGZ1bmN0aW9uIHBhcnNlRG9jdW1lbnQoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRE9DVU1FTlQsXG4gICAgICBkZWZpbml0aW9uczogdGhpcy5tYW55KFRva2VuS2luZC5TT0YsIHRoaXMucGFyc2VEZWZpbml0aW9uLCBUb2tlbktpbmQuRU9GKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRGVmaW5pdGlvbiA6XG4gICAqICAgLSBFeGVjdXRhYmxlRGVmaW5pdGlvblxuICAgKiAgIC0gVHlwZVN5c3RlbURlZmluaXRpb25cbiAgICogICAtIFR5cGVTeXN0ZW1FeHRlbnNpb25cbiAgICpcbiAgICogRXhlY3V0YWJsZURlZmluaXRpb24gOlxuICAgKiAgIC0gT3BlcmF0aW9uRGVmaW5pdGlvblxuICAgKiAgIC0gRnJhZ21lbnREZWZpbml0aW9uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRGVmaW5pdGlvbigpIHtcbiAgICBpZiAodGhpcy5wZWVrKFRva2VuS2luZC5OQU1FKSkge1xuICAgICAgc3dpdGNoICh0aGlzLl9sZXhlci50b2tlbi52YWx1ZSkge1xuICAgICAgICBjYXNlICdxdWVyeSc6XG4gICAgICAgIGNhc2UgJ211dGF0aW9uJzpcbiAgICAgICAgY2FzZSAnc3Vic2NyaXB0aW9uJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZU9wZXJhdGlvbkRlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdmcmFnbWVudCc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VGcmFnbWVudERlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdzY2hlbWEnOlxuICAgICAgICBjYXNlICdzY2FsYXInOlxuICAgICAgICBjYXNlICd0eXBlJzpcbiAgICAgICAgY2FzZSAnaW50ZXJmYWNlJzpcbiAgICAgICAgY2FzZSAndW5pb24nOlxuICAgICAgICBjYXNlICdlbnVtJzpcbiAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICBjYXNlICdkaXJlY3RpdmUnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVHlwZVN5c3RlbURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdleHRlbmQnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVHlwZVN5c3RlbUV4dGVuc2lvbigpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKFRva2VuS2luZC5CUkFDRV9MKSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VPcGVyYXRpb25EZWZpbml0aW9uKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBlZWtEZXNjcmlwdGlvbigpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZVR5cGVTeXN0ZW1EZWZpbml0aW9uKCk7XG4gICAgfVxuXG4gICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKCk7XG4gIH0gLy8gSW1wbGVtZW50cyB0aGUgcGFyc2luZyBydWxlcyBpbiB0aGUgT3BlcmF0aW9ucyBzZWN0aW9uLlxuXG4gIC8qKlxuICAgKiBPcGVyYXRpb25EZWZpbml0aW9uIDpcbiAgICogIC0gU2VsZWN0aW9uU2V0XG4gICAqICAtIE9wZXJhdGlvblR5cGUgTmFtZT8gVmFyaWFibGVEZWZpbml0aW9ucz8gRGlyZWN0aXZlcz8gU2VsZWN0aW9uU2V0XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlT3BlcmF0aW9uRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlT3BlcmF0aW9uRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIGlmICh0aGlzLnBlZWsoVG9rZW5LaW5kLkJSQUNFX0wpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiBLaW5kLk9QRVJBVElPTl9ERUZJTklUSU9OLFxuICAgICAgICBvcGVyYXRpb246ICdxdWVyeScsXG4gICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgdmFyaWFibGVEZWZpbml0aW9uczogW10sXG4gICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICBzZWxlY3Rpb25TZXQ6IHRoaXMucGFyc2VTZWxlY3Rpb25TZXQoKSxcbiAgICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIG9wZXJhdGlvbiA9IHRoaXMucGFyc2VPcGVyYXRpb25UeXBlKCk7XG4gICAgdmFyIG5hbWU7XG5cbiAgICBpZiAodGhpcy5wZWVrKFRva2VuS2luZC5OQU1FKSkge1xuICAgICAgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuT1BFUkFUSU9OX0RFRklOSVRJT04sXG4gICAgICBvcGVyYXRpb246IG9wZXJhdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB2YXJpYWJsZURlZmluaXRpb25zOiB0aGlzLnBhcnNlVmFyaWFibGVEZWZpbml0aW9ucygpLFxuICAgICAgZGlyZWN0aXZlczogdGhpcy5wYXJzZURpcmVjdGl2ZXMoZmFsc2UpLFxuICAgICAgc2VsZWN0aW9uU2V0OiB0aGlzLnBhcnNlU2VsZWN0aW9uU2V0KCksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIE9wZXJhdGlvblR5cGUgOiBvbmUgb2YgcXVlcnkgbXV0YXRpb24gc3Vic2NyaXB0aW9uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlT3BlcmF0aW9uVHlwZSA9IGZ1bmN0aW9uIHBhcnNlT3BlcmF0aW9uVHlwZSgpIHtcbiAgICB2YXIgb3BlcmF0aW9uVG9rZW4gPSB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5OQU1FKTtcblxuICAgIHN3aXRjaCAob3BlcmF0aW9uVG9rZW4udmFsdWUpIHtcbiAgICAgIGNhc2UgJ3F1ZXJ5JzpcbiAgICAgICAgcmV0dXJuICdxdWVyeSc7XG5cbiAgICAgIGNhc2UgJ211dGF0aW9uJzpcbiAgICAgICAgcmV0dXJuICdtdXRhdGlvbic7XG5cbiAgICAgIGNhc2UgJ3N1YnNjcmlwdGlvbic6XG4gICAgICAgIHJldHVybiAnc3Vic2NyaXB0aW9uJztcbiAgICB9XG5cbiAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQob3BlcmF0aW9uVG9rZW4pO1xuICB9XG4gIC8qKlxuICAgKiBWYXJpYWJsZURlZmluaXRpb25zIDogKCBWYXJpYWJsZURlZmluaXRpb24rIClcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VWYXJpYWJsZURlZmluaXRpb25zID0gZnVuY3Rpb24gcGFyc2VWYXJpYWJsZURlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbmFsTWFueShUb2tlbktpbmQuUEFSRU5fTCwgdGhpcy5wYXJzZVZhcmlhYmxlRGVmaW5pdGlvbiwgVG9rZW5LaW5kLlBBUkVOX1IpO1xuICB9XG4gIC8qKlxuICAgKiBWYXJpYWJsZURlZmluaXRpb24gOiBWYXJpYWJsZSA6IFR5cGUgRGVmYXVsdFZhbHVlPyBEaXJlY3RpdmVzW0NvbnN0XT9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VWYXJpYWJsZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZVZhcmlhYmxlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5WQVJJQUJMRV9ERUZJTklUSU9OLFxuICAgICAgdmFyaWFibGU6IHRoaXMucGFyc2VWYXJpYWJsZSgpLFxuICAgICAgdHlwZTogKHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkNPTE9OKSwgdGhpcy5wYXJzZVR5cGVSZWZlcmVuY2UoKSksXG4gICAgICBkZWZhdWx0VmFsdWU6IHRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihUb2tlbktpbmQuRVFVQUxTKSA/IHRoaXMucGFyc2VWYWx1ZUxpdGVyYWwodHJ1ZSkgOiB1bmRlZmluZWQsXG4gICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogVmFyaWFibGUgOiAkIE5hbWVcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VWYXJpYWJsZSA9IGZ1bmN0aW9uIHBhcnNlVmFyaWFibGUoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuRE9MTEFSKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5WQVJJQUJMRSxcbiAgICAgIG5hbWU6IHRoaXMucGFyc2VOYW1lKCksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFNlbGVjdGlvblNldCA6IHsgU2VsZWN0aW9uKyB9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlU2VsZWN0aW9uU2V0ID0gZnVuY3Rpb24gcGFyc2VTZWxlY3Rpb25TZXQoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuU0VMRUNUSU9OX1NFVCxcbiAgICAgIHNlbGVjdGlvbnM6IHRoaXMubWFueShUb2tlbktpbmQuQlJBQ0VfTCwgdGhpcy5wYXJzZVNlbGVjdGlvbiwgVG9rZW5LaW5kLkJSQUNFX1IpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBTZWxlY3Rpb24gOlxuICAgKiAgIC0gRmllbGRcbiAgICogICAtIEZyYWdtZW50U3ByZWFkXG4gICAqICAgLSBJbmxpbmVGcmFnbWVudFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVNlbGVjdGlvbiA9IGZ1bmN0aW9uIHBhcnNlU2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBlZWsoVG9rZW5LaW5kLlNQUkVBRCkgPyB0aGlzLnBhcnNlRnJhZ21lbnQoKSA6IHRoaXMucGFyc2VGaWVsZCgpO1xuICB9XG4gIC8qKlxuICAgKiBGaWVsZCA6IEFsaWFzPyBOYW1lIEFyZ3VtZW50cz8gRGlyZWN0aXZlcz8gU2VsZWN0aW9uU2V0P1xuICAgKlxuICAgKiBBbGlhcyA6IE5hbWUgOlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUZpZWxkID0gZnVuY3Rpb24gcGFyc2VGaWVsZCgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgbmFtZU9yQWxpYXMgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBhbGlhcztcbiAgICB2YXIgbmFtZTtcblxuICAgIGlmICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkNPTE9OKSkge1xuICAgICAgYWxpYXMgPSBuYW1lT3JBbGlhcztcbiAgICAgIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZU9yQWxpYXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRklFTEQsXG4gICAgICBhbGlhczogYWxpYXMsXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgYXJndW1lbnRzOiB0aGlzLnBhcnNlQXJndW1lbnRzKGZhbHNlKSxcbiAgICAgIGRpcmVjdGl2ZXM6IHRoaXMucGFyc2VEaXJlY3RpdmVzKGZhbHNlKSxcbiAgICAgIHNlbGVjdGlvblNldDogdGhpcy5wZWVrKFRva2VuS2luZC5CUkFDRV9MKSA/IHRoaXMucGFyc2VTZWxlY3Rpb25TZXQoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogQXJndW1lbnRzW0NvbnN0XSA6ICggQXJndW1lbnRbP0NvbnN0XSsgKVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUFyZ3VtZW50cyA9IGZ1bmN0aW9uIHBhcnNlQXJndW1lbnRzKGlzQ29uc3QpIHtcbiAgICB2YXIgaXRlbSA9IGlzQ29uc3QgPyB0aGlzLnBhcnNlQ29uc3RBcmd1bWVudCA6IHRoaXMucGFyc2VBcmd1bWVudDtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLlBBUkVOX0wsIGl0ZW0sIFRva2VuS2luZC5QQVJFTl9SKTtcbiAgfVxuICAvKipcbiAgICogQXJndW1lbnRbQ29uc3RdIDogTmFtZSA6IFZhbHVlWz9Db25zdF1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VBcmd1bWVudCA9IGZ1bmN0aW9uIHBhcnNlQXJndW1lbnQoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkNPTE9OKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5BUkdVTUVOVCxcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB2YWx1ZTogdGhpcy5wYXJzZVZhbHVlTGl0ZXJhbChmYWxzZSksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLnBhcnNlQ29uc3RBcmd1bWVudCA9IGZ1bmN0aW9uIHBhcnNlQ29uc3RBcmd1bWVudCgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5BUkdVTUVOVCxcbiAgICAgIG5hbWU6IHRoaXMucGFyc2VOYW1lKCksXG4gICAgICB2YWx1ZTogKHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkNPTE9OKSwgdGhpcy5wYXJzZVZhbHVlTGl0ZXJhbCh0cnVlKSksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH0gLy8gSW1wbGVtZW50cyB0aGUgcGFyc2luZyBydWxlcyBpbiB0aGUgRnJhZ21lbnRzIHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIENvcnJlc3BvbmRzIHRvIGJvdGggRnJhZ21lbnRTcHJlYWQgYW5kIElubGluZUZyYWdtZW50IGluIHRoZSBzcGVjLlxuICAgKlxuICAgKiBGcmFnbWVudFNwcmVhZCA6IC4uLiBGcmFnbWVudE5hbWUgRGlyZWN0aXZlcz9cbiAgICpcbiAgICogSW5saW5lRnJhZ21lbnQgOiAuLi4gVHlwZUNvbmRpdGlvbj8gRGlyZWN0aXZlcz8gU2VsZWN0aW9uU2V0XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRnJhZ21lbnQgPSBmdW5jdGlvbiBwYXJzZUZyYWdtZW50KCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLlNQUkVBRCk7XG4gICAgdmFyIGhhc1R5cGVDb25kaXRpb24gPSB0aGlzLmV4cGVjdE9wdGlvbmFsS2V5d29yZCgnb24nKTtcblxuICAgIGlmICghaGFzVHlwZUNvbmRpdGlvbiAmJiB0aGlzLnBlZWsoVG9rZW5LaW5kLk5BTUUpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiBLaW5kLkZSQUdNRU5UX1NQUkVBRCxcbiAgICAgICAgbmFtZTogdGhpcy5wYXJzZUZyYWdtZW50TmFtZSgpLFxuICAgICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyhmYWxzZSksXG4gICAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLklOTElORV9GUkFHTUVOVCxcbiAgICAgIHR5cGVDb25kaXRpb246IGhhc1R5cGVDb25kaXRpb24gPyB0aGlzLnBhcnNlTmFtZWRUeXBlKCkgOiB1bmRlZmluZWQsXG4gICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyhmYWxzZSksXG4gICAgICBzZWxlY3Rpb25TZXQ6IHRoaXMucGFyc2VTZWxlY3Rpb25TZXQoKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRnJhZ21lbnREZWZpbml0aW9uIDpcbiAgICogICAtIGZyYWdtZW50IEZyYWdtZW50TmFtZSBvbiBUeXBlQ29uZGl0aW9uIERpcmVjdGl2ZXM/IFNlbGVjdGlvblNldFxuICAgKlxuICAgKiBUeXBlQ29uZGl0aW9uIDogTmFtZWRUeXBlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRnJhZ21lbnREZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VGcmFnbWVudERlZmluaXRpb24oKSB7XG4gICAgdmFyIF90aGlzJF9vcHRpb25zO1xuXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdmcmFnbWVudCcpOyAvLyBFeHBlcmltZW50YWwgc3VwcG9ydCBmb3IgZGVmaW5pbmcgdmFyaWFibGVzIHdpdGhpbiBmcmFnbWVudHMgY2hhbmdlc1xuICAgIC8vIHRoZSBncmFtbWFyIG9mIEZyYWdtZW50RGVmaW5pdGlvbjpcbiAgICAvLyAgIC0gZnJhZ21lbnQgRnJhZ21lbnROYW1lIFZhcmlhYmxlRGVmaW5pdGlvbnM/IG9uIFR5cGVDb25kaXRpb24gRGlyZWN0aXZlcz8gU2VsZWN0aW9uU2V0XG5cbiAgICBpZiAoKChfdGhpcyRfb3B0aW9ucyA9IHRoaXMuX29wdGlvbnMpID09PSBudWxsIHx8IF90aGlzJF9vcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRfb3B0aW9ucy5leHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcykgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtpbmQ6IEtpbmQuRlJBR01FTlRfREVGSU5JVElPTixcbiAgICAgICAgbmFtZTogdGhpcy5wYXJzZUZyYWdtZW50TmFtZSgpLFxuICAgICAgICB2YXJpYWJsZURlZmluaXRpb25zOiB0aGlzLnBhcnNlVmFyaWFibGVEZWZpbml0aW9ucygpLFxuICAgICAgICB0eXBlQ29uZGl0aW9uOiAodGhpcy5leHBlY3RLZXl3b3JkKCdvbicpLCB0aGlzLnBhcnNlTmFtZWRUeXBlKCkpLFxuICAgICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyhmYWxzZSksXG4gICAgICAgIHNlbGVjdGlvblNldDogdGhpcy5wYXJzZVNlbGVjdGlvblNldCgpLFxuICAgICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5GUkFHTUVOVF9ERUZJTklUSU9OLFxuICAgICAgbmFtZTogdGhpcy5wYXJzZUZyYWdtZW50TmFtZSgpLFxuICAgICAgdHlwZUNvbmRpdGlvbjogKHRoaXMuZXhwZWN0S2V5d29yZCgnb24nKSwgdGhpcy5wYXJzZU5hbWVkVHlwZSgpKSxcbiAgICAgIGRpcmVjdGl2ZXM6IHRoaXMucGFyc2VEaXJlY3RpdmVzKGZhbHNlKSxcbiAgICAgIHNlbGVjdGlvblNldDogdGhpcy5wYXJzZVNlbGVjdGlvblNldCgpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBGcmFnbWVudE5hbWUgOiBOYW1lIGJ1dCBub3QgYG9uYFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUZyYWdtZW50TmFtZSA9IGZ1bmN0aW9uIHBhcnNlRnJhZ21lbnROYW1lKCkge1xuICAgIGlmICh0aGlzLl9sZXhlci50b2tlbi52YWx1ZSA9PT0gJ29uJykge1xuICAgICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucGFyc2VOYW1lKCk7XG4gIH0gLy8gSW1wbGVtZW50cyB0aGUgcGFyc2luZyBydWxlcyBpbiB0aGUgVmFsdWVzIHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIFZhbHVlW0NvbnN0XSA6XG4gICAqICAgLSBbfkNvbnN0XSBWYXJpYWJsZVxuICAgKiAgIC0gSW50VmFsdWVcbiAgICogICAtIEZsb2F0VmFsdWVcbiAgICogICAtIFN0cmluZ1ZhbHVlXG4gICAqICAgLSBCb29sZWFuVmFsdWVcbiAgICogICAtIE51bGxWYWx1ZVxuICAgKiAgIC0gRW51bVZhbHVlXG4gICAqICAgLSBMaXN0VmFsdWVbP0NvbnN0XVxuICAgKiAgIC0gT2JqZWN0VmFsdWVbP0NvbnN0XVxuICAgKlxuICAgKiBCb29sZWFuVmFsdWUgOiBvbmUgb2YgYHRydWVgIGBmYWxzZWBcbiAgICpcbiAgICogTnVsbFZhbHVlIDogYG51bGxgXG4gICAqXG4gICAqIEVudW1WYWx1ZSA6IE5hbWUgYnV0IG5vdCBgdHJ1ZWAsIGBmYWxzZWAgb3IgYG51bGxgXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVmFsdWVMaXRlcmFsID0gZnVuY3Rpb24gcGFyc2VWYWx1ZUxpdGVyYWwoaXNDb25zdCkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgc3dpdGNoICh0b2tlbi5raW5kKSB7XG4gICAgICBjYXNlIFRva2VuS2luZC5CUkFDS0VUX0w6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlTGlzdChpc0NvbnN0KTtcblxuICAgICAgY2FzZSBUb2tlbktpbmQuQlJBQ0VfTDpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VPYmplY3QoaXNDb25zdCk7XG5cbiAgICAgIGNhc2UgVG9rZW5LaW5kLklOVDpcbiAgICAgICAgdGhpcy5fbGV4ZXIuYWR2YW5jZSgpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2luZDogS2luZC5JTlQsXG4gICAgICAgICAgdmFsdWU6IHRva2VuLnZhbHVlLFxuICAgICAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgICAgIH07XG5cbiAgICAgIGNhc2UgVG9rZW5LaW5kLkZMT0FUOlxuICAgICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBraW5kOiBLaW5kLkZMT0FULFxuICAgICAgICAgIHZhbHVlOiB0b2tlbi52YWx1ZSxcbiAgICAgICAgICBsb2M6IHRoaXMubG9jKHRva2VuKVxuICAgICAgICB9O1xuXG4gICAgICBjYXNlIFRva2VuS2luZC5TVFJJTkc6XG4gICAgICBjYXNlIFRva2VuS2luZC5CTE9DS19TVFJJTkc6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlU3RyaW5nTGl0ZXJhbCgpO1xuXG4gICAgICBjYXNlIFRva2VuS2luZC5OQU1FOlxuICAgICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgICAgc3dpdGNoICh0b2tlbi52YWx1ZSkge1xuICAgICAgICAgIGNhc2UgJ3RydWUnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAga2luZDogS2luZC5CT09MRUFOLFxuICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICBjYXNlICdmYWxzZSc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBraW5kOiBLaW5kLkJPT0xFQU4sXG4gICAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICBjYXNlICdudWxsJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGtpbmQ6IEtpbmQuTlVMTCxcbiAgICAgICAgICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAga2luZDogS2luZC5FTlVNLFxuICAgICAgICAgICAgICB2YWx1ZTogdG9rZW4udmFsdWUsXG4gICAgICAgICAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgVG9rZW5LaW5kLkRPTExBUjpcbiAgICAgICAgaWYgKCFpc0NvbnN0KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VWYXJpYWJsZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKCk7XG4gIH07XG5cbiAgX3Byb3RvLnBhcnNlU3RyaW5nTGl0ZXJhbCA9IGZ1bmN0aW9uIHBhcnNlU3RyaW5nTGl0ZXJhbCgpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLlNUUklORyxcbiAgICAgIHZhbHVlOiB0b2tlbi52YWx1ZSxcbiAgICAgIGJsb2NrOiB0b2tlbi5raW5kID09PSBUb2tlbktpbmQuQkxPQ0tfU1RSSU5HLFxuICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBMaXN0VmFsdWVbQ29uc3RdIDpcbiAgICogICAtIFsgXVxuICAgKiAgIC0gWyBWYWx1ZVs/Q29uc3RdKyBdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlTGlzdCA9IGZ1bmN0aW9uIHBhcnNlTGlzdChpc0NvbnN0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgdmFyIGl0ZW0gPSBmdW5jdGlvbiBpdGVtKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnBhcnNlVmFsdWVMaXRlcmFsKGlzQ29uc3QpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5MSVNULFxuICAgICAgdmFsdWVzOiB0aGlzLmFueShUb2tlbktpbmQuQlJBQ0tFVF9MLCBpdGVtLCBUb2tlbktpbmQuQlJBQ0tFVF9SKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogT2JqZWN0VmFsdWVbQ29uc3RdIDpcbiAgICogICAtIHsgfVxuICAgKiAgIC0geyBPYmplY3RGaWVsZFs/Q29uc3RdKyB9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlT2JqZWN0ID0gZnVuY3Rpb24gcGFyc2VPYmplY3QoaXNDb25zdCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICB2YXIgaXRlbSA9IGZ1bmN0aW9uIGl0ZW0oKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLnBhcnNlT2JqZWN0RmllbGQoaXNDb25zdCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLk9CSkVDVCxcbiAgICAgIGZpZWxkczogdGhpcy5hbnkoVG9rZW5LaW5kLkJSQUNFX0wsIGl0ZW0sIFRva2VuS2luZC5CUkFDRV9SKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogT2JqZWN0RmllbGRbQ29uc3RdIDogTmFtZSA6IFZhbHVlWz9Db25zdF1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VPYmplY3RGaWVsZCA9IGZ1bmN0aW9uIHBhcnNlT2JqZWN0RmllbGQoaXNDb25zdCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuT0JKRUNUX0ZJRUxELFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHZhbHVlOiB0aGlzLnBhcnNlVmFsdWVMaXRlcmFsKGlzQ29uc3QpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIERpcmVjdGl2ZXMgc2VjdGlvbi5cblxuICAvKipcbiAgICogRGlyZWN0aXZlc1tDb25zdF0gOiBEaXJlY3RpdmVbP0NvbnN0XStcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VEaXJlY3RpdmVzID0gZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmVzKGlzQ29uc3QpIHtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IFtdO1xuXG4gICAgd2hpbGUgKHRoaXMucGVlayhUb2tlbktpbmQuQVQpKSB7XG4gICAgICBkaXJlY3RpdmVzLnB1c2godGhpcy5wYXJzZURpcmVjdGl2ZShpc0NvbnN0KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG4gIH1cbiAgLyoqXG4gICAqIERpcmVjdGl2ZVtDb25zdF0gOiBAIE5hbWUgQXJndW1lbnRzWz9Db25zdF0/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGlyZWN0aXZlID0gZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmUoaXNDb25zdCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkFUKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5ESVJFQ1RJVkUsXG4gICAgICBuYW1lOiB0aGlzLnBhcnNlTmFtZSgpLFxuICAgICAgYXJndW1lbnRzOiB0aGlzLnBhcnNlQXJndW1lbnRzKGlzQ29uc3QpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIFR5cGVzIHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIFR5cGUgOlxuICAgKiAgIC0gTmFtZWRUeXBlXG4gICAqICAgLSBMaXN0VHlwZVxuICAgKiAgIC0gTm9uTnVsbFR5cGVcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VUeXBlUmVmZXJlbmNlID0gZnVuY3Rpb24gcGFyc2VUeXBlUmVmZXJlbmNlKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciB0eXBlO1xuXG4gICAgaWYgKHRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihUb2tlbktpbmQuQlJBQ0tFVF9MKSkge1xuICAgICAgdHlwZSA9IHRoaXMucGFyc2VUeXBlUmVmZXJlbmNlKCk7XG4gICAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5CUkFDS0VUX1IpO1xuICAgICAgdHlwZSA9IHtcbiAgICAgICAga2luZDogS2luZC5MSVNUX1RZUEUsXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlID0gdGhpcy5wYXJzZU5hbWVkVHlwZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkJBTkcpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiBLaW5kLk5PTl9OVUxMX1RZUEUsXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG4gIC8qKlxuICAgKiBOYW1lZFR5cGUgOiBOYW1lXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlTmFtZWRUeXBlID0gZnVuY3Rpb24gcGFyc2VOYW1lZFR5cGUoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuTkFNRURfVFlQRSxcbiAgICAgIG5hbWU6IHRoaXMucGFyc2VOYW1lKCksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH0gLy8gSW1wbGVtZW50cyB0aGUgcGFyc2luZyBydWxlcyBpbiB0aGUgVHlwZSBEZWZpbml0aW9uIHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIFR5cGVTeXN0ZW1EZWZpbml0aW9uIDpcbiAgICogICAtIFNjaGVtYURlZmluaXRpb25cbiAgICogICAtIFR5cGVEZWZpbml0aW9uXG4gICAqICAgLSBEaXJlY3RpdmVEZWZpbml0aW9uXG4gICAqXG4gICAqIFR5cGVEZWZpbml0aW9uIDpcbiAgICogICAtIFNjYWxhclR5cGVEZWZpbml0aW9uXG4gICAqICAgLSBPYmplY3RUeXBlRGVmaW5pdGlvblxuICAgKiAgIC0gSW50ZXJmYWNlVHlwZURlZmluaXRpb25cbiAgICogICAtIFVuaW9uVHlwZURlZmluaXRpb25cbiAgICogICAtIEVudW1UeXBlRGVmaW5pdGlvblxuICAgKiAgIC0gSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvblxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVR5cGVTeXN0ZW1EZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VUeXBlU3lzdGVtRGVmaW5pdGlvbigpIHtcbiAgICAvLyBNYW55IGRlZmluaXRpb25zIGJlZ2luIHdpdGggYSBkZXNjcmlwdGlvbiBhbmQgcmVxdWlyZSBhIGxvb2thaGVhZC5cbiAgICB2YXIga2V5d29yZFRva2VuID0gdGhpcy5wZWVrRGVzY3JpcHRpb24oKSA/IHRoaXMuX2xleGVyLmxvb2thaGVhZCgpIDogdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICBpZiAoa2V5d29yZFRva2VuLmtpbmQgPT09IFRva2VuS2luZC5OQU1FKSB7XG4gICAgICBzd2l0Y2ggKGtleXdvcmRUb2tlbi52YWx1ZSkge1xuICAgICAgICBjYXNlICdzY2hlbWEnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlU2NoZW1hRGVmaW5pdGlvbigpO1xuXG4gICAgICAgIGNhc2UgJ3NjYWxhcic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VTY2FsYXJUeXBlRGVmaW5pdGlvbigpO1xuXG4gICAgICAgIGNhc2UgJ3R5cGUnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlT2JqZWN0VHlwZURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdpbnRlcmZhY2UnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlSW50ZXJmYWNlVHlwZURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICd1bmlvbic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VVbmlvblR5cGVEZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnZW51bSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFbnVtVHlwZURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VJbnB1dE9iamVjdFR5cGVEZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnZGlyZWN0aXZlJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZURpcmVjdGl2ZURlZmluaXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoa2V5d29yZFRva2VuKTtcbiAgfTtcblxuICBfcHJvdG8ucGVla0Rlc2NyaXB0aW9uID0gZnVuY3Rpb24gcGVla0Rlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBlZWsoVG9rZW5LaW5kLlNUUklORykgfHwgdGhpcy5wZWVrKFRva2VuS2luZC5CTE9DS19TVFJJTkcpO1xuICB9XG4gIC8qKlxuICAgKiBEZXNjcmlwdGlvbiA6IFN0cmluZ1ZhbHVlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGVzY3JpcHRpb24gPSBmdW5jdGlvbiBwYXJzZURlc2NyaXB0aW9uKCkge1xuICAgIGlmICh0aGlzLnBlZWtEZXNjcmlwdGlvbigpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZVN0cmluZ0xpdGVyYWwoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNjaGVtYURlZmluaXRpb24gOiBEZXNjcmlwdGlvbj8gc2NoZW1hIERpcmVjdGl2ZXNbQ29uc3RdPyB7IE9wZXJhdGlvblR5cGVEZWZpbml0aW9uKyB9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlU2NoZW1hRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlU2NoZW1hRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ3NjaGVtYScpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIG9wZXJhdGlvblR5cGVzID0gdGhpcy5tYW55KFRva2VuS2luZC5CUkFDRV9MLCB0aGlzLnBhcnNlT3BlcmF0aW9uVHlwZURlZmluaXRpb24sIFRva2VuS2luZC5CUkFDRV9SKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5TQ0hFTUFfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBvcGVyYXRpb25UeXBlczogb3BlcmF0aW9uVHlwZXMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIE9wZXJhdGlvblR5cGVEZWZpbml0aW9uIDogT3BlcmF0aW9uVHlwZSA6IE5hbWVkVHlwZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZU9wZXJhdGlvblR5cGVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VPcGVyYXRpb25UeXBlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgb3BlcmF0aW9uID0gdGhpcy5wYXJzZU9wZXJhdGlvblR5cGUoKTtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTik7XG4gICAgdmFyIHR5cGUgPSB0aGlzLnBhcnNlTmFtZWRUeXBlKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuT1BFUkFUSU9OX1RZUEVfREVGSU5JVElPTixcbiAgICAgIG9wZXJhdGlvbjogb3BlcmF0aW9uLFxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogU2NhbGFyVHlwZURlZmluaXRpb24gOiBEZXNjcmlwdGlvbj8gc2NhbGFyIE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlU2NhbGFyVHlwZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZVNjYWxhclR5cGVEZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnc2NhbGFyJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuU0NBTEFSX1RZUEVfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBPYmplY3RUeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgRGVzY3JpcHRpb24/XG4gICAqICAgdHlwZSBOYW1lIEltcGxlbWVudHNJbnRlcmZhY2VzPyBEaXJlY3RpdmVzW0NvbnN0XT8gRmllbGRzRGVmaW5pdGlvbj9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VPYmplY3RUeXBlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlT2JqZWN0VHlwZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCd0eXBlJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBpbnRlcmZhY2VzID0gdGhpcy5wYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUZpZWxkc0RlZmluaXRpb24oKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5PQkpFQ1RfVFlQRV9ERUZJTklUSU9OLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGludGVyZmFjZXM6IGludGVyZmFjZXMsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEltcGxlbWVudHNJbnRlcmZhY2VzIDpcbiAgICogICAtIGltcGxlbWVudHMgYCZgPyBOYW1lZFR5cGVcbiAgICogICAtIEltcGxlbWVudHNJbnRlcmZhY2VzICYgTmFtZWRUeXBlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlSW1wbGVtZW50c0ludGVyZmFjZXMgPSBmdW5jdGlvbiBwYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzKCkge1xuICAgIHZhciBfdGhpcyRfb3B0aW9uczI7XG5cbiAgICBpZiAoIXRoaXMuZXhwZWN0T3B0aW9uYWxLZXl3b3JkKCdpbXBsZW1lbnRzJykpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBpZiAoKChfdGhpcyRfb3B0aW9uczIgPSB0aGlzLl9vcHRpb25zKSA9PT0gbnVsbCB8fCBfdGhpcyRfb3B0aW9uczIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJF9vcHRpb25zMi5hbGxvd0xlZ2FjeVNETEltcGxlbWVudHNJbnRlcmZhY2VzKSA9PT0gdHJ1ZSkge1xuICAgICAgdmFyIHR5cGVzID0gW107IC8vIE9wdGlvbmFsIGxlYWRpbmcgYW1wZXJzYW5kXG5cbiAgICAgIHRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihUb2tlbktpbmQuQU1QKTtcblxuICAgICAgZG8ge1xuICAgICAgICB0eXBlcy5wdXNoKHRoaXMucGFyc2VOYW1lZFR5cGUoKSk7XG4gICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkFNUCkgfHwgdGhpcy5wZWVrKFRva2VuS2luZC5OQU1FKSk7XG5cbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kZWxpbWl0ZWRNYW55KFRva2VuS2luZC5BTVAsIHRoaXMucGFyc2VOYW1lZFR5cGUpO1xuICB9XG4gIC8qKlxuICAgKiBGaWVsZHNEZWZpbml0aW9uIDogeyBGaWVsZERlZmluaXRpb24rIH1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VGaWVsZHNEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VGaWVsZHNEZWZpbml0aW9uKCkge1xuICAgIHZhciBfdGhpcyRfb3B0aW9uczM7XG5cbiAgICAvLyBMZWdhY3kgc3VwcG9ydCBmb3IgdGhlIFNETD9cbiAgICBpZiAoKChfdGhpcyRfb3B0aW9uczMgPSB0aGlzLl9vcHRpb25zKSA9PT0gbnVsbCB8fCBfdGhpcyRfb3B0aW9uczMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJF9vcHRpb25zMy5hbGxvd0xlZ2FjeVNETEVtcHR5RmllbGRzKSA9PT0gdHJ1ZSAmJiB0aGlzLnBlZWsoVG9rZW5LaW5kLkJSQUNFX0wpICYmIHRoaXMuX2xleGVyLmxvb2thaGVhZCgpLmtpbmQgPT09IFRva2VuS2luZC5CUkFDRV9SKSB7XG4gICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcblxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm9wdGlvbmFsTWFueShUb2tlbktpbmQuQlJBQ0VfTCwgdGhpcy5wYXJzZUZpZWxkRGVmaW5pdGlvbiwgVG9rZW5LaW5kLkJSQUNFX1IpO1xuICB9XG4gIC8qKlxuICAgKiBGaWVsZERlZmluaXRpb24gOlxuICAgKiAgIC0gRGVzY3JpcHRpb24/IE5hbWUgQXJndW1lbnRzRGVmaW5pdGlvbj8gOiBUeXBlIERpcmVjdGl2ZXNbQ29uc3RdP1xuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUZpZWxkRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRmllbGREZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgYXJncyA9IHRoaXMucGFyc2VBcmd1bWVudERlZnMoKTtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTik7XG4gICAgdmFyIHR5cGUgPSB0aGlzLnBhcnNlVHlwZVJlZmVyZW5jZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRklFTERfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBhcmd1bWVudHM6IGFyZ3MsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogQXJndW1lbnRzRGVmaW5pdGlvbiA6ICggSW5wdXRWYWx1ZURlZmluaXRpb24rIClcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VBcmd1bWVudERlZnMgPSBmdW5jdGlvbiBwYXJzZUFyZ3VtZW50RGVmcygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLlBBUkVOX0wsIHRoaXMucGFyc2VJbnB1dFZhbHVlRGVmLCBUb2tlbktpbmQuUEFSRU5fUik7XG4gIH1cbiAgLyoqXG4gICAqIElucHV0VmFsdWVEZWZpbml0aW9uIDpcbiAgICogICAtIERlc2NyaXB0aW9uPyBOYW1lIDogVHlwZSBEZWZhdWx0VmFsdWU/IERpcmVjdGl2ZXNbQ29uc3RdP1xuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUlucHV0VmFsdWVEZWYgPSBmdW5jdGlvbiBwYXJzZUlucHV0VmFsdWVEZWYoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkNPTE9OKTtcbiAgICB2YXIgdHlwZSA9IHRoaXMucGFyc2VUeXBlUmVmZXJlbmNlKCk7XG4gICAgdmFyIGRlZmF1bHRWYWx1ZTtcblxuICAgIGlmICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkVRVUFMUykpIHtcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IHRoaXMucGFyc2VWYWx1ZUxpdGVyYWwodHJ1ZSk7XG4gICAgfVxuXG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5JTlBVVF9WQUxVRV9ERUZJTklUSU9OLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEludGVyZmFjZVR5cGVEZWZpbml0aW9uIDpcbiAgICogICAtIERlc2NyaXB0aW9uPyBpbnRlcmZhY2UgTmFtZSBEaXJlY3RpdmVzW0NvbnN0XT8gRmllbGRzRGVmaW5pdGlvbj9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnRlcmZhY2VUeXBlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlSW50ZXJmYWNlVHlwZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdpbnRlcmZhY2UnKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGludGVyZmFjZXMgPSB0aGlzLnBhcnNlSW1wbGVtZW50c0ludGVyZmFjZXMoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciBmaWVsZHMgPSB0aGlzLnBhcnNlRmllbGRzRGVmaW5pdGlvbigpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLklOVEVSRkFDRV9UWVBFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgaW50ZXJmYWNlczogaW50ZXJmYWNlcyxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBmaWVsZHM6IGZpZWxkcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogVW5pb25UeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBEZXNjcmlwdGlvbj8gdW5pb24gTmFtZSBEaXJlY3RpdmVzW0NvbnN0XT8gVW5pb25NZW1iZXJUeXBlcz9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VVbmlvblR5cGVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VVbmlvblR5cGVEZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgndW5pb24nKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgdHlwZXMgPSB0aGlzLnBhcnNlVW5pb25NZW1iZXJUeXBlcygpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLlVOSU9OX1RZUEVfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgdHlwZXM6IHR5cGVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBVbmlvbk1lbWJlclR5cGVzIDpcbiAgICogICAtID0gYHxgPyBOYW1lZFR5cGVcbiAgICogICAtIFVuaW9uTWVtYmVyVHlwZXMgfCBOYW1lZFR5cGVcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VVbmlvbk1lbWJlclR5cGVzID0gZnVuY3Rpb24gcGFyc2VVbmlvbk1lbWJlclR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkVRVUFMUykgPyB0aGlzLmRlbGltaXRlZE1hbnkoVG9rZW5LaW5kLlBJUEUsIHRoaXMucGFyc2VOYW1lZFR5cGUpIDogW107XG4gIH1cbiAgLyoqXG4gICAqIEVudW1UeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBEZXNjcmlwdGlvbj8gZW51bSBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdPyBFbnVtVmFsdWVzRGVmaW5pdGlvbj9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VFbnVtVHlwZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUVudW1UeXBlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2VudW0nKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgdmFsdWVzID0gdGhpcy5wYXJzZUVudW1WYWx1ZXNEZWZpbml0aW9uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRU5VTV9UWVBFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBFbnVtVmFsdWVzRGVmaW5pdGlvbiA6IHsgRW51bVZhbHVlRGVmaW5pdGlvbisgfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUVudW1WYWx1ZXNEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VFbnVtVmFsdWVzRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLkJSQUNFX0wsIHRoaXMucGFyc2VFbnVtVmFsdWVEZWZpbml0aW9uLCBUb2tlbktpbmQuQlJBQ0VfUik7XG4gIH1cbiAgLyoqXG4gICAqIEVudW1WYWx1ZURlZmluaXRpb24gOiBEZXNjcmlwdGlvbj8gRW51bVZhbHVlIERpcmVjdGl2ZXNbQ29uc3RdP1xuICAgKlxuICAgKiBFbnVtVmFsdWUgOiBOYW1lXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRW51bVZhbHVlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRW51bVZhbHVlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5FTlVNX1ZBTFVFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBEZXNjcmlwdGlvbj8gaW5wdXQgTmFtZSBEaXJlY3RpdmVzW0NvbnN0XT8gSW5wdXRGaWVsZHNEZWZpbml0aW9uP1xuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUlucHV0T2JqZWN0VHlwZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUlucHV0T2JqZWN0VHlwZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdpbnB1dCcpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciBmaWVsZHMgPSB0aGlzLnBhcnNlSW5wdXRGaWVsZHNEZWZpbml0aW9uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuSU5QVVRfT0JKRUNUX1RZUEVfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIElucHV0RmllbGRzRGVmaW5pdGlvbiA6IHsgSW5wdXRWYWx1ZURlZmluaXRpb24rIH1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnB1dEZpZWxkc0RlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUlucHV0RmllbGRzRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLkJSQUNFX0wsIHRoaXMucGFyc2VJbnB1dFZhbHVlRGVmLCBUb2tlbktpbmQuQlJBQ0VfUik7XG4gIH1cbiAgLyoqXG4gICAqIFR5cGVTeXN0ZW1FeHRlbnNpb24gOlxuICAgKiAgIC0gU2NoZW1hRXh0ZW5zaW9uXG4gICAqICAgLSBUeXBlRXh0ZW5zaW9uXG4gICAqXG4gICAqIFR5cGVFeHRlbnNpb24gOlxuICAgKiAgIC0gU2NhbGFyVHlwZUV4dGVuc2lvblxuICAgKiAgIC0gT2JqZWN0VHlwZUV4dGVuc2lvblxuICAgKiAgIC0gSW50ZXJmYWNlVHlwZUV4dGVuc2lvblxuICAgKiAgIC0gVW5pb25UeXBlRXh0ZW5zaW9uXG4gICAqICAgLSBFbnVtVHlwZUV4dGVuc2lvblxuICAgKiAgIC0gSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvblxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVR5cGVTeXN0ZW1FeHRlbnNpb24gPSBmdW5jdGlvbiBwYXJzZVR5cGVTeXN0ZW1FeHRlbnNpb24oKSB7XG4gICAgdmFyIGtleXdvcmRUb2tlbiA9IHRoaXMuX2xleGVyLmxvb2thaGVhZCgpO1xuXG4gICAgaWYgKGtleXdvcmRUb2tlbi5raW5kID09PSBUb2tlbktpbmQuTkFNRSkge1xuICAgICAgc3dpdGNoIChrZXl3b3JkVG9rZW4udmFsdWUpIHtcbiAgICAgICAgY2FzZSAnc2NoZW1hJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVNjaGVtYUV4dGVuc2lvbigpO1xuXG4gICAgICAgIGNhc2UgJ3NjYWxhcic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VTY2FsYXJUeXBlRXh0ZW5zaW9uKCk7XG5cbiAgICAgICAgY2FzZSAndHlwZSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VPYmplY3RUeXBlRXh0ZW5zaW9uKCk7XG5cbiAgICAgICAgY2FzZSAnaW50ZXJmYWNlJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUludGVyZmFjZVR5cGVFeHRlbnNpb24oKTtcblxuICAgICAgICBjYXNlICd1bmlvbic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VVbmlvblR5cGVFeHRlbnNpb24oKTtcblxuICAgICAgICBjYXNlICdlbnVtJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVudW1UeXBlRXh0ZW5zaW9uKCk7XG5cbiAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlSW5wdXRPYmplY3RUeXBlRXh0ZW5zaW9uKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKGtleXdvcmRUb2tlbik7XG4gIH1cbiAgLyoqXG4gICAqIFNjaGVtYUV4dGVuc2lvbiA6XG4gICAqICAtIGV4dGVuZCBzY2hlbWEgRGlyZWN0aXZlc1tDb25zdF0/IHsgT3BlcmF0aW9uVHlwZURlZmluaXRpb24rIH1cbiAgICogIC0gZXh0ZW5kIHNjaGVtYSBEaXJlY3RpdmVzW0NvbnN0XVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVNjaGVtYUV4dGVuc2lvbiA9IGZ1bmN0aW9uIHBhcnNlU2NoZW1hRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdzY2hlbWEnKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciBvcGVyYXRpb25UeXBlcyA9IHRoaXMub3B0aW9uYWxNYW55KFRva2VuS2luZC5CUkFDRV9MLCB0aGlzLnBhcnNlT3BlcmF0aW9uVHlwZURlZmluaXRpb24sIFRva2VuS2luZC5CUkFDRV9SKTtcblxuICAgIGlmIChkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCAmJiBvcGVyYXRpb25UeXBlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLlNDSEVNQV9FWFRFTlNJT04sXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgb3BlcmF0aW9uVHlwZXM6IG9wZXJhdGlvblR5cGVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBTY2FsYXJUeXBlRXh0ZW5zaW9uIDpcbiAgICogICAtIGV4dGVuZCBzY2FsYXIgTmFtZSBEaXJlY3RpdmVzW0NvbnN0XVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVNjYWxhclR5cGVFeHRlbnNpb24gPSBmdW5jdGlvbiBwYXJzZVNjYWxhclR5cGVFeHRlbnNpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdleHRlbmQnKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ3NjYWxhcicpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuXG4gICAgaWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5TQ0FMQVJfVFlQRV9FWFRFTlNJT04sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogT2JqZWN0VHlwZUV4dGVuc2lvbiA6XG4gICAqICAtIGV4dGVuZCB0eXBlIE5hbWUgSW1wbGVtZW50c0ludGVyZmFjZXM/IERpcmVjdGl2ZXNbQ29uc3RdPyBGaWVsZHNEZWZpbml0aW9uXG4gICAqICAtIGV4dGVuZCB0eXBlIE5hbWUgSW1wbGVtZW50c0ludGVyZmFjZXM/IERpcmVjdGl2ZXNbQ29uc3RdXG4gICAqICAtIGV4dGVuZCB0eXBlIE5hbWUgSW1wbGVtZW50c0ludGVyZmFjZXNcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VPYmplY3RUeXBlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VPYmplY3RUeXBlRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCd0eXBlJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBpbnRlcmZhY2VzID0gdGhpcy5wYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUZpZWxkc0RlZmluaXRpb24oKTtcblxuICAgIGlmIChpbnRlcmZhY2VzLmxlbmd0aCA9PT0gMCAmJiBkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCAmJiBmaWVsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5PQkpFQ1RfVFlQRV9FWFRFTlNJT04sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgaW50ZXJmYWNlczogaW50ZXJmYWNlcyxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBmaWVsZHM6IGZpZWxkcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogSW50ZXJmYWNlVHlwZUV4dGVuc2lvbiA6XG4gICAqICAtIGV4dGVuZCBpbnRlcmZhY2UgTmFtZSBJbXBsZW1lbnRzSW50ZXJmYWNlcz8gRGlyZWN0aXZlc1tDb25zdF0/IEZpZWxkc0RlZmluaXRpb25cbiAgICogIC0gZXh0ZW5kIGludGVyZmFjZSBOYW1lIEltcGxlbWVudHNJbnRlcmZhY2VzPyBEaXJlY3RpdmVzW0NvbnN0XVxuICAgKiAgLSBleHRlbmQgaW50ZXJmYWNlIE5hbWUgSW1wbGVtZW50c0ludGVyZmFjZXNcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdpbnRlcmZhY2UnKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGludGVyZmFjZXMgPSB0aGlzLnBhcnNlSW1wbGVtZW50c0ludGVyZmFjZXMoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciBmaWVsZHMgPSB0aGlzLnBhcnNlRmllbGRzRGVmaW5pdGlvbigpO1xuXG4gICAgaWYgKGludGVyZmFjZXMubGVuZ3RoID09PSAwICYmIGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwICYmIGZpZWxkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLklOVEVSRkFDRV9UWVBFX0VYVEVOU0lPTixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBpbnRlcmZhY2VzOiBpbnRlcmZhY2VzLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGZpZWxkczogZmllbGRzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBVbmlvblR5cGVFeHRlbnNpb24gOlxuICAgKiAgIC0gZXh0ZW5kIHVuaW9uIE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IFVuaW9uTWVtYmVyVHlwZXNcbiAgICogICAtIGV4dGVuZCB1bmlvbiBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVW5pb25UeXBlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VVbmlvblR5cGVFeHRlbnNpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdleHRlbmQnKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ3VuaW9uJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIHR5cGVzID0gdGhpcy5wYXJzZVVuaW9uTWVtYmVyVHlwZXMoKTtcblxuICAgIGlmIChkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCAmJiB0eXBlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLlVOSU9OX1RZUEVfRVhURU5TSU9OLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICB0eXBlczogdHlwZXMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEVudW1UeXBlRXh0ZW5zaW9uIDpcbiAgICogICAtIGV4dGVuZCBlbnVtIE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IEVudW1WYWx1ZXNEZWZpbml0aW9uXG4gICAqICAgLSBleHRlbmQgZW51bSBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRW51bVR5cGVFeHRlbnNpb24gPSBmdW5jdGlvbiBwYXJzZUVudW1UeXBlRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdlbnVtJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMucGFyc2VFbnVtVmFsdWVzRGVmaW5pdGlvbigpO1xuXG4gICAgaWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwICYmIHZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLkVOVU1fVFlQRV9FWFRFTlNJT04sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBJbnB1dE9iamVjdFR5cGVFeHRlbnNpb24gOlxuICAgKiAgIC0gZXh0ZW5kIGlucHV0IE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IElucHV0RmllbGRzRGVmaW5pdGlvblxuICAgKiAgIC0gZXh0ZW5kIGlucHV0IE5hbWUgRGlyZWN0aXZlc1tDb25zdF1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnB1dE9iamVjdFR5cGVFeHRlbnNpb24gPSBmdW5jdGlvbiBwYXJzZUlucHV0T2JqZWN0VHlwZUV4dGVuc2lvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2V4dGVuZCcpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnaW5wdXQnKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUlucHV0RmllbGRzRGVmaW5pdGlvbigpO1xuXG4gICAgaWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwICYmIGZpZWxkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLklOUFVUX09CSkVDVF9UWVBFX0VYVEVOU0lPTixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIERpcmVjdGl2ZURlZmluaXRpb24gOlxuICAgKiAgIC0gRGVzY3JpcHRpb24/IGRpcmVjdGl2ZSBAIE5hbWUgQXJndW1lbnRzRGVmaW5pdGlvbj8gYHJlcGVhdGFibGVgPyBvbiBEaXJlY3RpdmVMb2NhdGlvbnNcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VEaXJlY3RpdmVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmVEZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZGlyZWN0aXZlJyk7XG4gICAgdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuQVQpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgYXJncyA9IHRoaXMucGFyc2VBcmd1bWVudERlZnMoKTtcbiAgICB2YXIgcmVwZWF0YWJsZSA9IHRoaXMuZXhwZWN0T3B0aW9uYWxLZXl3b3JkKCdyZXBlYXRhYmxlJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdvbicpO1xuICAgIHZhciBsb2NhdGlvbnMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlTG9jYXRpb25zKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRElSRUNUSVZFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgYXJndW1lbnRzOiBhcmdzLFxuICAgICAgcmVwZWF0YWJsZTogcmVwZWF0YWJsZSxcbiAgICAgIGxvY2F0aW9uczogbG9jYXRpb25zLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBEaXJlY3RpdmVMb2NhdGlvbnMgOlxuICAgKiAgIC0gYHxgPyBEaXJlY3RpdmVMb2NhdGlvblxuICAgKiAgIC0gRGlyZWN0aXZlTG9jYXRpb25zIHwgRGlyZWN0aXZlTG9jYXRpb25cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VEaXJlY3RpdmVMb2NhdGlvbnMgPSBmdW5jdGlvbiBwYXJzZURpcmVjdGl2ZUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWxpbWl0ZWRNYW55KFRva2VuS2luZC5QSVBFLCB0aGlzLnBhcnNlRGlyZWN0aXZlTG9jYXRpb24pO1xuICB9XG4gIC8qXG4gICAqIERpcmVjdGl2ZUxvY2F0aW9uIDpcbiAgICogICAtIEV4ZWN1dGFibGVEaXJlY3RpdmVMb2NhdGlvblxuICAgKiAgIC0gVHlwZVN5c3RlbURpcmVjdGl2ZUxvY2F0aW9uXG4gICAqXG4gICAqIEV4ZWN1dGFibGVEaXJlY3RpdmVMb2NhdGlvbiA6IG9uZSBvZlxuICAgKiAgIGBRVUVSWWBcbiAgICogICBgTVVUQVRJT05gXG4gICAqICAgYFNVQlNDUklQVElPTmBcbiAgICogICBgRklFTERgXG4gICAqICAgYEZSQUdNRU5UX0RFRklOSVRJT05gXG4gICAqICAgYEZSQUdNRU5UX1NQUkVBRGBcbiAgICogICBgSU5MSU5FX0ZSQUdNRU5UYFxuICAgKlxuICAgKiBUeXBlU3lzdGVtRGlyZWN0aXZlTG9jYXRpb24gOiBvbmUgb2ZcbiAgICogICBgU0NIRU1BYFxuICAgKiAgIGBTQ0FMQVJgXG4gICAqICAgYE9CSkVDVGBcbiAgICogICBgRklFTERfREVGSU5JVElPTmBcbiAgICogICBgQVJHVU1FTlRfREVGSU5JVElPTmBcbiAgICogICBgSU5URVJGQUNFYFxuICAgKiAgIGBVTklPTmBcbiAgICogICBgRU5VTWBcbiAgICogICBgRU5VTV9WQUxVRWBcbiAgICogICBgSU5QVVRfT0JKRUNUYFxuICAgKiAgIGBJTlBVVF9GSUVMRF9ERUZJTklUSU9OYFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZURpcmVjdGl2ZUxvY2F0aW9uID0gZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmVMb2NhdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG5cbiAgICBpZiAoRGlyZWN0aXZlTG9jYXRpb25bbmFtZS52YWx1ZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKHN0YXJ0KTtcbiAgfSAvLyBDb3JlIHBhcnNpbmcgdXRpbGl0eSBmdW5jdGlvbnNcblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvY2F0aW9uIG9iamVjdCwgdXNlZCB0byBpZGVudGlmeSB0aGUgcGxhY2UgaW4gdGhlIHNvdXJjZSB0aGF0IGNyZWF0ZWQgYSBnaXZlbiBwYXJzZWQgb2JqZWN0LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5sb2MgPSBmdW5jdGlvbiBsb2Moc3RhcnRUb2tlbikge1xuICAgIHZhciBfdGhpcyRfb3B0aW9uczQ7XG5cbiAgICBpZiAoKChfdGhpcyRfb3B0aW9uczQgPSB0aGlzLl9vcHRpb25zKSA9PT0gbnVsbCB8fCBfdGhpcyRfb3B0aW9uczQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJF9vcHRpb25zNC5ub0xvY2F0aW9uKSAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIG5ldyBMb2NhdGlvbihzdGFydFRva2VuLCB0aGlzLl9sZXhlci5sYXN0VG9rZW4sIHRoaXMuX2xleGVyLnNvdXJjZSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBuZXh0IHRva2VuIGlzIG9mIGEgZ2l2ZW4ga2luZFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wZWVrID0gZnVuY3Rpb24gcGVlayhraW5kKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xleGVyLnRva2VuLmtpbmQgPT09IGtpbmQ7XG4gIH1cbiAgLyoqXG4gICAqIElmIHRoZSBuZXh0IHRva2VuIGlzIG9mIHRoZSBnaXZlbiBraW5kLCByZXR1cm4gdGhhdCB0b2tlbiBhZnRlciBhZHZhbmNpbmcgdGhlIGxleGVyLlxuICAgKiBPdGhlcndpc2UsIGRvIG5vdCBjaGFuZ2UgdGhlIHBhcnNlciBzdGF0ZSBhbmQgdGhyb3cgYW4gZXJyb3IuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmV4cGVjdFRva2VuID0gZnVuY3Rpb24gZXhwZWN0VG9rZW4oa2luZCkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgaWYgKHRva2VuLmtpbmQgPT09IGtpbmQpIHtcbiAgICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcblxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cblxuICAgIHRocm93IHN5bnRheEVycm9yKHRoaXMuX2xleGVyLnNvdXJjZSwgdG9rZW4uc3RhcnQsIFwiRXhwZWN0ZWQgXCIuY29uY2F0KGdldFRva2VuS2luZERlc2Moa2luZCksIFwiLCBmb3VuZCBcIikuY29uY2F0KGdldFRva2VuRGVzYyh0b2tlbiksIFwiLlwiKSk7XG4gIH1cbiAgLyoqXG4gICAqIElmIHRoZSBuZXh0IHRva2VuIGlzIG9mIHRoZSBnaXZlbiBraW5kLCByZXR1cm4gdGhhdCB0b2tlbiBhZnRlciBhZHZhbmNpbmcgdGhlIGxleGVyLlxuICAgKiBPdGhlcndpc2UsIGRvIG5vdCBjaGFuZ2UgdGhlIHBhcnNlciBzdGF0ZSBhbmQgcmV0dXJuIHVuZGVmaW5lZC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZXhwZWN0T3B0aW9uYWxUb2tlbiA9IGZ1bmN0aW9uIGV4cGVjdE9wdGlvbmFsVG9rZW4oa2luZCkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgaWYgKHRva2VuLmtpbmQgPT09IGtpbmQpIHtcbiAgICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcblxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgLyoqXG4gICAqIElmIHRoZSBuZXh0IHRva2VuIGlzIGEgZ2l2ZW4ga2V5d29yZCwgYWR2YW5jZSB0aGUgbGV4ZXIuXG4gICAqIE90aGVyd2lzZSwgZG8gbm90IGNoYW5nZSB0aGUgcGFyc2VyIHN0YXRlIGFuZCB0aHJvdyBhbiBlcnJvci5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZXhwZWN0S2V5d29yZCA9IGZ1bmN0aW9uIGV4cGVjdEtleXdvcmQodmFsdWUpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIGlmICh0b2tlbi5raW5kID09PSBUb2tlbktpbmQuTkFNRSAmJiB0b2tlbi52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgc3ludGF4RXJyb3IodGhpcy5fbGV4ZXIuc291cmNlLCB0b2tlbi5zdGFydCwgXCJFeHBlY3RlZCBcXFwiXCIuY29uY2F0KHZhbHVlLCBcIlxcXCIsIGZvdW5kIFwiKS5jb25jYXQoZ2V0VG9rZW5EZXNjKHRva2VuKSwgXCIuXCIpKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIElmIHRoZSBuZXh0IHRva2VuIGlzIGEgZ2l2ZW4ga2V5d29yZCwgcmV0dXJuIFwidHJ1ZVwiIGFmdGVyIGFkdmFuY2luZyB0aGUgbGV4ZXIuXG4gICAqIE90aGVyd2lzZSwgZG8gbm90IGNoYW5nZSB0aGUgcGFyc2VyIHN0YXRlIGFuZCByZXR1cm4gXCJmYWxzZVwiLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5leHBlY3RPcHRpb25hbEtleXdvcmQgPSBmdW5jdGlvbiBleHBlY3RPcHRpb25hbEtleXdvcmQodmFsdWUpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIGlmICh0b2tlbi5raW5kID09PSBUb2tlbktpbmQuTkFNRSAmJiB0b2tlbi52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8qKlxuICAgKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGFuIGVycm9yIHdoZW4gYW4gdW5leHBlY3RlZCBsZXhlZCB0b2tlbiBpcyBlbmNvdW50ZXJlZC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udW5leHBlY3RlZCA9IGZ1bmN0aW9uIHVuZXhwZWN0ZWQoYXRUb2tlbikge1xuICAgIHZhciB0b2tlbiA9IGF0VG9rZW4gIT09IG51bGwgJiYgYXRUb2tlbiAhPT0gdm9pZCAwID8gYXRUb2tlbiA6IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHJldHVybiBzeW50YXhFcnJvcih0aGlzLl9sZXhlci5zb3VyY2UsIHRva2VuLnN0YXJ0LCBcIlVuZXhwZWN0ZWQgXCIuY29uY2F0KGdldFRva2VuRGVzYyh0b2tlbiksIFwiLlwiKSk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBwb3NzaWJseSBlbXB0eSBsaXN0IG9mIHBhcnNlIG5vZGVzLCBkZXRlcm1pbmVkIGJ5IHRoZSBwYXJzZUZuLlxuICAgKiBUaGlzIGxpc3QgYmVnaW5zIHdpdGggYSBsZXggdG9rZW4gb2Ygb3BlbktpbmQgYW5kIGVuZHMgd2l0aCBhIGxleCB0b2tlbiBvZiBjbG9zZUtpbmQuXG4gICAqIEFkdmFuY2VzIHRoZSBwYXJzZXIgdG8gdGhlIG5leHQgbGV4IHRva2VuIGFmdGVyIHRoZSBjbG9zaW5nIHRva2VuLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5hbnkgPSBmdW5jdGlvbiBhbnkob3BlbktpbmQsIHBhcnNlRm4sIGNsb3NlS2luZCkge1xuICAgIHRoaXMuZXhwZWN0VG9rZW4ob3BlbktpbmQpO1xuICAgIHZhciBub2RlcyA9IFtdO1xuXG4gICAgd2hpbGUgKCF0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oY2xvc2VLaW5kKSkge1xuICAgICAgbm9kZXMucHVzaChwYXJzZUZuLmNhbGwodGhpcykpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgcGFyc2Ugbm9kZXMsIGRldGVybWluZWQgYnkgdGhlIHBhcnNlRm4uXG4gICAqIEl0IGNhbiBiZSBlbXB0eSBvbmx5IGlmIG9wZW4gdG9rZW4gaXMgbWlzc2luZyBvdGhlcndpc2UgaXQgd2lsbCBhbHdheXMgcmV0dXJuIG5vbi1lbXB0eSBsaXN0XG4gICAqIHRoYXQgYmVnaW5zIHdpdGggYSBsZXggdG9rZW4gb2Ygb3BlbktpbmQgYW5kIGVuZHMgd2l0aCBhIGxleCB0b2tlbiBvZiBjbG9zZUtpbmQuXG4gICAqIEFkdmFuY2VzIHRoZSBwYXJzZXIgdG8gdGhlIG5leHQgbGV4IHRva2VuIGFmdGVyIHRoZSBjbG9zaW5nIHRva2VuLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5vcHRpb25hbE1hbnkgPSBmdW5jdGlvbiBvcHRpb25hbE1hbnkob3BlbktpbmQsIHBhcnNlRm4sIGNsb3NlS2luZCkge1xuICAgIGlmICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4ob3BlbktpbmQpKSB7XG4gICAgICB2YXIgbm9kZXMgPSBbXTtcblxuICAgICAgZG8ge1xuICAgICAgICBub2Rlcy5wdXNoKHBhcnNlRm4uY2FsbCh0aGlzKSk7XG4gICAgICB9IHdoaWxlICghdGhpcy5leHBlY3RPcHRpb25hbFRva2VuKGNsb3NlS2luZCkpO1xuXG4gICAgICByZXR1cm4gbm9kZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbm9uLWVtcHR5IGxpc3Qgb2YgcGFyc2Ugbm9kZXMsIGRldGVybWluZWQgYnkgdGhlIHBhcnNlRm4uXG4gICAqIFRoaXMgbGlzdCBiZWdpbnMgd2l0aCBhIGxleCB0b2tlbiBvZiBvcGVuS2luZCBhbmQgZW5kcyB3aXRoIGEgbGV4IHRva2VuIG9mIGNsb3NlS2luZC5cbiAgICogQWR2YW5jZXMgdGhlIHBhcnNlciB0byB0aGUgbmV4dCBsZXggdG9rZW4gYWZ0ZXIgdGhlIGNsb3NpbmcgdG9rZW4uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm1hbnkgPSBmdW5jdGlvbiBtYW55KG9wZW5LaW5kLCBwYXJzZUZuLCBjbG9zZUtpbmQpIHtcbiAgICB0aGlzLmV4cGVjdFRva2VuKG9wZW5LaW5kKTtcbiAgICB2YXIgbm9kZXMgPSBbXTtcblxuICAgIGRvIHtcbiAgICAgIG5vZGVzLnB1c2gocGFyc2VGbi5jYWxsKHRoaXMpKTtcbiAgICB9IHdoaWxlICghdGhpcy5leHBlY3RPcHRpb25hbFRva2VuKGNsb3NlS2luZCkpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbm9uLWVtcHR5IGxpc3Qgb2YgcGFyc2Ugbm9kZXMsIGRldGVybWluZWQgYnkgdGhlIHBhcnNlRm4uXG4gICAqIFRoaXMgbGlzdCBtYXkgYmVnaW4gd2l0aCBhIGxleCB0b2tlbiBvZiBkZWxpbWl0ZXJLaW5kIGZvbGxvd2VkIGJ5IGl0ZW1zIHNlcGFyYXRlZCBieSBsZXggdG9rZW5zIG9mIHRva2VuS2luZC5cbiAgICogQWR2YW5jZXMgdGhlIHBhcnNlciB0byB0aGUgbmV4dCBsZXggdG9rZW4gYWZ0ZXIgbGFzdCBpdGVtIGluIHRoZSBsaXN0LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZWxpbWl0ZWRNYW55ID0gZnVuY3Rpb24gZGVsaW1pdGVkTWFueShkZWxpbWl0ZXJLaW5kLCBwYXJzZUZuKSB7XG4gICAgdGhpcy5leHBlY3RPcHRpb25hbFRva2VuKGRlbGltaXRlcktpbmQpO1xuICAgIHZhciBub2RlcyA9IFtdO1xuXG4gICAgZG8ge1xuICAgICAgbm9kZXMucHVzaChwYXJzZUZuLmNhbGwodGhpcykpO1xuICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihkZWxpbWl0ZXJLaW5kKSk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH07XG5cbiAgcmV0dXJuIFBhcnNlcjtcbn0oKTtcbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gdG8gZGVzY3JpYmUgYSB0b2tlbiBhcyBhIHN0cmluZyBmb3IgZGVidWdnaW5nLlxuICovXG5cbmZ1bmN0aW9uIGdldFRva2VuRGVzYyh0b2tlbikge1xuICB2YXIgdmFsdWUgPSB0b2tlbi52YWx1ZTtcbiAgcmV0dXJuIGdldFRva2VuS2luZERlc2ModG9rZW4ua2luZCkgKyAodmFsdWUgIT0gbnVsbCA/IFwiIFxcXCJcIi5jb25jYXQodmFsdWUsIFwiXFxcIlwiKSA6ICcnKTtcbn1cbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gdG8gZGVzY3JpYmUgYSB0b2tlbiBraW5kIGFzIGEgc3RyaW5nIGZvciBkZWJ1Z2dpbmcuXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRUb2tlbktpbmREZXNjKGtpbmQpIHtcbiAgcmV0dXJuIGlzUHVuY3R1YXRvclRva2VuS2luZChraW5kKSA/IFwiXFxcIlwiLmNvbmNhdChraW5kLCBcIlxcXCJcIikgOiBraW5kO1xufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb24gfSBmcm9tIFwiLi9sb2NhdGlvbi5tanNcIjtcbi8qKlxuICogUmVuZGVyIGEgaGVscGZ1bCBkZXNjcmlwdGlvbiBvZiB0aGUgbG9jYXRpb24gaW4gdGhlIEdyYXBoUUwgU291cmNlIGRvY3VtZW50LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludExvY2F0aW9uKGxvY2F0aW9uKSB7XG4gIHJldHVybiBwcmludFNvdXJjZUxvY2F0aW9uKGxvY2F0aW9uLnNvdXJjZSwgZ2V0TG9jYXRpb24obG9jYXRpb24uc291cmNlLCBsb2NhdGlvbi5zdGFydCkpO1xufVxuLyoqXG4gKiBSZW5kZXIgYSBoZWxwZnVsIGRlc2NyaXB0aW9uIG9mIHRoZSBsb2NhdGlvbiBpbiB0aGUgR3JhcGhRTCBTb3VyY2UgZG9jdW1lbnQuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50U291cmNlTG9jYXRpb24oc291cmNlLCBzb3VyY2VMb2NhdGlvbikge1xuICB2YXIgZmlyc3RMaW5lQ29sdW1uT2Zmc2V0ID0gc291cmNlLmxvY2F0aW9uT2Zmc2V0LmNvbHVtbiAtIDE7XG4gIHZhciBib2R5ID0gd2hpdGVzcGFjZShmaXJzdExpbmVDb2x1bW5PZmZzZXQpICsgc291cmNlLmJvZHk7XG4gIHZhciBsaW5lSW5kZXggPSBzb3VyY2VMb2NhdGlvbi5saW5lIC0gMTtcbiAgdmFyIGxpbmVPZmZzZXQgPSBzb3VyY2UubG9jYXRpb25PZmZzZXQubGluZSAtIDE7XG4gIHZhciBsaW5lTnVtID0gc291cmNlTG9jYXRpb24ubGluZSArIGxpbmVPZmZzZXQ7XG4gIHZhciBjb2x1bW5PZmZzZXQgPSBzb3VyY2VMb2NhdGlvbi5saW5lID09PSAxID8gZmlyc3RMaW5lQ29sdW1uT2Zmc2V0IDogMDtcbiAgdmFyIGNvbHVtbk51bSA9IHNvdXJjZUxvY2F0aW9uLmNvbHVtbiArIGNvbHVtbk9mZnNldDtcbiAgdmFyIGxvY2F0aW9uU3RyID0gXCJcIi5jb25jYXQoc291cmNlLm5hbWUsIFwiOlwiKS5jb25jYXQobGluZU51bSwgXCI6XCIpLmNvbmNhdChjb2x1bW5OdW0sIFwiXFxuXCIpO1xuICB2YXIgbGluZXMgPSBib2R5LnNwbGl0KC9cXHJcXG58W1xcblxccl0vZyk7XG4gIHZhciBsb2NhdGlvbkxpbmUgPSBsaW5lc1tsaW5lSW5kZXhdOyAvLyBTcGVjaWFsIGNhc2UgZm9yIG1pbmlmaWVkIGRvY3VtZW50c1xuXG4gIGlmIChsb2NhdGlvbkxpbmUubGVuZ3RoID4gMTIwKSB7XG4gICAgdmFyIHN1YkxpbmVJbmRleCA9IE1hdGguZmxvb3IoY29sdW1uTnVtIC8gODApO1xuICAgIHZhciBzdWJMaW5lQ29sdW1uTnVtID0gY29sdW1uTnVtICUgODA7XG4gICAgdmFyIHN1YkxpbmVzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvY2F0aW9uTGluZS5sZW5ndGg7IGkgKz0gODApIHtcbiAgICAgIHN1YkxpbmVzLnB1c2gobG9jYXRpb25MaW5lLnNsaWNlKGksIGkgKyA4MCkpO1xuICAgIH1cblxuICAgIHJldHVybiBsb2NhdGlvblN0ciArIHByaW50UHJlZml4ZWRMaW5lcyhbW1wiXCIuY29uY2F0KGxpbmVOdW0pLCBzdWJMaW5lc1swXV1dLmNvbmNhdChzdWJMaW5lcy5zbGljZSgxLCBzdWJMaW5lSW5kZXggKyAxKS5tYXAoZnVuY3Rpb24gKHN1YkxpbmUpIHtcbiAgICAgIHJldHVybiBbJycsIHN1YkxpbmVdO1xuICAgIH0pLCBbWycgJywgd2hpdGVzcGFjZShzdWJMaW5lQ29sdW1uTnVtIC0gMSkgKyAnXiddLCBbJycsIHN1YkxpbmVzW3N1YkxpbmVJbmRleCArIDFdXV0pKTtcbiAgfVxuXG4gIHJldHVybiBsb2NhdGlvblN0ciArIHByaW50UHJlZml4ZWRMaW5lcyhbLy8gTGluZXMgc3BlY2lmaWVkIGxpa2UgdGhpczogW1wicHJlZml4XCIsIFwic3RyaW5nXCJdLFxuICBbXCJcIi5jb25jYXQobGluZU51bSAtIDEpLCBsaW5lc1tsaW5lSW5kZXggLSAxXV0sIFtcIlwiLmNvbmNhdChsaW5lTnVtKSwgbG9jYXRpb25MaW5lXSwgWycnLCB3aGl0ZXNwYWNlKGNvbHVtbk51bSAtIDEpICsgJ14nXSwgW1wiXCIuY29uY2F0KGxpbmVOdW0gKyAxKSwgbGluZXNbbGluZUluZGV4ICsgMV1dXSk7XG59XG5cbmZ1bmN0aW9uIHByaW50UHJlZml4ZWRMaW5lcyhsaW5lcykge1xuICB2YXIgZXhpc3RpbmdMaW5lcyA9IGxpbmVzLmZpbHRlcihmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfID0gX3JlZlswXSxcbiAgICAgICAgbGluZSA9IF9yZWZbMV07XG4gICAgcmV0dXJuIGxpbmUgIT09IHVuZGVmaW5lZDtcbiAgfSk7XG4gIHZhciBwYWRMZW4gPSBNYXRoLm1heC5hcHBseShNYXRoLCBleGlzdGluZ0xpbmVzLm1hcChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICB2YXIgcHJlZml4ID0gX3JlZjJbMF07XG4gICAgcmV0dXJuIHByZWZpeC5sZW5ndGg7XG4gIH0pKTtcbiAgcmV0dXJuIGV4aXN0aW5nTGluZXMubWFwKGZ1bmN0aW9uIChfcmVmMykge1xuICAgIHZhciBwcmVmaXggPSBfcmVmM1swXSxcbiAgICAgICAgbGluZSA9IF9yZWYzWzFdO1xuICAgIHJldHVybiBsZWZ0UGFkKHBhZExlbiwgcHJlZml4KSArIChsaW5lID8gJyB8ICcgKyBsaW5lIDogJyB8Jyk7XG4gIH0pLmpvaW4oJ1xcbicpO1xufVxuXG5mdW5jdGlvbiB3aGl0ZXNwYWNlKGxlbikge1xuICByZXR1cm4gQXJyYXkobGVuICsgMSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiBsZWZ0UGFkKGxlbiwgc3RyKSB7XG4gIHJldHVybiB3aGl0ZXNwYWNlKGxlbiAtIHN0ci5sZW5ndGgpICsgc3RyO1xufVxuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5pbXBvcnQgeyBTWU1CT0xfVE9fU1RSSU5HX1RBRyB9IGZyb20gXCIuLi9wb2x5ZmlsbHMvc3ltYm9scy5tanNcIjtcbmltcG9ydCBpbnNwZWN0IGZyb20gXCIuLi9qc3V0aWxzL2luc3BlY3QubWpzXCI7XG5pbXBvcnQgZGV2QXNzZXJ0IGZyb20gXCIuLi9qc3V0aWxzL2RldkFzc2VydC5tanNcIjtcbmltcG9ydCBpbnN0YW5jZU9mIGZyb20gXCIuLi9qc3V0aWxzL2luc3RhbmNlT2YubWpzXCI7XG5cbi8qKlxuICogQSByZXByZXNlbnRhdGlvbiBvZiBzb3VyY2UgaW5wdXQgdG8gR3JhcGhRTC4gVGhlIGBuYW1lYCBhbmQgYGxvY2F0aW9uT2Zmc2V0YCBwYXJhbWV0ZXJzIGFyZVxuICogb3B0aW9uYWwsIGJ1dCB0aGV5IGFyZSB1c2VmdWwgZm9yIGNsaWVudHMgd2hvIHN0b3JlIEdyYXBoUUwgZG9jdW1lbnRzIGluIHNvdXJjZSBmaWxlcy5cbiAqIEZvciBleGFtcGxlLCBpZiB0aGUgR3JhcGhRTCBpbnB1dCBzdGFydHMgYXQgbGluZSA0MCBpbiBhIGZpbGUgbmFtZWQgYEZvby5ncmFwaHFsYCwgaXQgbWlnaHRcbiAqIGJlIHVzZWZ1bCBmb3IgYG5hbWVgIHRvIGJlIGBcIkZvby5ncmFwaHFsXCJgIGFuZCBsb2NhdGlvbiB0byBiZSBgeyBsaW5lOiA0MCwgY29sdW1uOiAxIH1gLlxuICogVGhlIGBsaW5lYCBhbmQgYGNvbHVtbmAgcHJvcGVydGllcyBpbiBgbG9jYXRpb25PZmZzZXRgIGFyZSAxLWluZGV4ZWQuXG4gKi9cbmV4cG9ydCB2YXIgU291cmNlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU291cmNlKGJvZHkpIHtcbiAgICB2YXIgbmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ0dyYXBoUUwgcmVxdWVzdCc7XG4gICAgdmFyIGxvY2F0aW9uT2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7XG4gICAgICBsaW5lOiAxLFxuICAgICAgY29sdW1uOiAxXG4gICAgfTtcbiAgICB0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycgfHwgZGV2QXNzZXJ0KDAsIFwiQm9keSBtdXN0IGJlIGEgc3RyaW5nLiBSZWNlaXZlZDogXCIuY29uY2F0KGluc3BlY3QoYm9keSksIFwiLlwiKSk7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubG9jYXRpb25PZmZzZXQgPSBsb2NhdGlvbk9mZnNldDtcbiAgICB0aGlzLmxvY2F0aW9uT2Zmc2V0LmxpbmUgPiAwIHx8IGRldkFzc2VydCgwLCAnbGluZSBpbiBsb2NhdGlvbk9mZnNldCBpcyAxLWluZGV4ZWQgYW5kIG11c3QgYmUgcG9zaXRpdmUuJyk7XG4gICAgdGhpcy5sb2NhdGlvbk9mZnNldC5jb2x1bW4gPiAwIHx8IGRldkFzc2VydCgwLCAnY29sdW1uIGluIGxvY2F0aW9uT2Zmc2V0IGlzIDEtaW5kZXhlZCBhbmQgbXVzdCBiZSBwb3NpdGl2ZS4nKTtcbiAgfSAvLyAkRmxvd0ZpeE1lW3Vuc3VwcG9ydGVkLXN5bnRheF0gRmxvdyBkb2Vzbid0IHN1cHBvcnQgY29tcHV0ZWQgcHJvcGVydGllcyB5ZXRcblxuXG4gIF9jcmVhdGVDbGFzcyhTb3VyY2UsIFt7XG4gICAga2V5OiBTWU1CT0xfVE9fU1RSSU5HX1RBRyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiAnU291cmNlJztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU291cmNlO1xufSgpO1xuLyoqXG4gKiBUZXN0IGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIFNvdXJjZSBvYmplY3QuXG4gKlxuICogQGludGVybmFsXG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuZXhwb3J0IGZ1bmN0aW9uIGlzU291cmNlKHNvdXJjZSkge1xuICByZXR1cm4gaW5zdGFuY2VPZihzb3VyY2UsIFNvdXJjZSk7XG59XG4iLCIvKipcbiAqIEFuIGV4cG9ydGVkIGVudW0gZGVzY3JpYmluZyB0aGUgZGlmZmVyZW50IGtpbmRzIG9mIHRva2VucyB0aGF0IHRoZVxuICogbGV4ZXIgZW1pdHMuXG4gKi9cbmV4cG9ydCB2YXIgVG9rZW5LaW5kID0gT2JqZWN0LmZyZWV6ZSh7XG4gIFNPRjogJzxTT0Y+JyxcbiAgRU9GOiAnPEVPRj4nLFxuICBCQU5HOiAnIScsXG4gIERPTExBUjogJyQnLFxuICBBTVA6ICcmJyxcbiAgUEFSRU5fTDogJygnLFxuICBQQVJFTl9SOiAnKScsXG4gIFNQUkVBRDogJy4uLicsXG4gIENPTE9OOiAnOicsXG4gIEVRVUFMUzogJz0nLFxuICBBVDogJ0AnLFxuICBCUkFDS0VUX0w6ICdbJyxcbiAgQlJBQ0tFVF9SOiAnXScsXG4gIEJSQUNFX0w6ICd7JyxcbiAgUElQRTogJ3wnLFxuICBCUkFDRV9SOiAnfScsXG4gIE5BTUU6ICdOYW1lJyxcbiAgSU5UOiAnSW50JyxcbiAgRkxPQVQ6ICdGbG9hdCcsXG4gIFNUUklORzogJ1N0cmluZycsXG4gIEJMT0NLX1NUUklORzogJ0Jsb2NrU3RyaW5nJyxcbiAgQ09NTUVOVDogJ0NvbW1lbnQnXG59KTtcbi8qKlxuICogVGhlIGVudW0gdHlwZSByZXByZXNlbnRpbmcgdGhlIHRva2VuIGtpbmRzIHZhbHVlcy5cbiAqL1xuIiwiLy8gSW4gRVMyMDE1IChvciBhIHBvbHlmaWxsZWQpIGVudmlyb25tZW50LCB0aGlzIHdpbGwgYmUgU3ltYm9sLml0ZXJhdG9yXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoU2VlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvMjMxNycpXG5leHBvcnQgdmFyIFNZTUJPTF9JVEVSQVRPUiA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yICE9IG51bGwgPyBTeW1ib2wuaXRlcmF0b3IgOiAnQEBpdGVyYXRvcic7IC8vIEluIEVTMjAxNyAob3IgYSBwb2x5ZmlsbGVkKSBlbnZpcm9ubWVudCwgdGhpcyB3aWxsIGJlIFN5bWJvbC5hc3luY0l0ZXJhdG9yXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoU2VlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvMjMxNycpXG5cbmV4cG9ydCB2YXIgU1lNQk9MX0FTWU5DX0lURVJBVE9SID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvciAhPSBudWxsID8gU3ltYm9sLmFzeW5jSXRlcmF0b3IgOiAnQEBhc3luY0l0ZXJhdG9yJzsgLy8gaXN0YW5idWwgaWdub3JlIG5leHQgKFNlZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ncmFwaHFsL2dyYXBocWwtanMvaXNzdWVzLzIzMTcnKVxuXG5leHBvcnQgdmFyIFNZTUJPTF9UT19TVFJJTkdfVEFHID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcgIT0gbnVsbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6ICdAQHRvU3RyaW5nVGFnJztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoc3RyaW5ncywgcmF3KSB7XG4gIGlmICghcmF3KSB7XG4gICAgcmF3ID0gc3RyaW5ncy5zbGljZSgwKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0cmluZ3MsIHtcbiAgICByYXc6IHtcbiAgICAgIHZhbHVlOiBPYmplY3QuZnJlZXplKHJhdylcbiAgICB9XG4gIH0pKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9