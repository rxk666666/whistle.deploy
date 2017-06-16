/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(10)
  , IE8_DOM_DEFINE = __webpack_require__(45)
  , toPrimitive    = __webpack_require__(30)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(46)
  , defined = __webpack_require__(20);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(2)
  , ctx       = __webpack_require__(43)
  , hide      = __webpack_require__(8)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(5)
  , createDesc = __webpack_require__(16);
module.exports = __webpack_require__(3) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(28)('wks')
  , uid        = __webpack_require__(17)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(50)
  , enumBugKeys = __webpack_require__(21);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 15 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(111)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(110)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(68);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(67);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(10)
  , dPs         = __webpack_require__(88)
  , enumBugKeys = __webpack_require__(21)
  , IE_PROTO    = __webpack_require__(27)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(44)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(81).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(5).f
  , has = __webpack_require__(4)
  , TAG = __webpack_require__(9)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(28)('keys')
  , uid    = __webpack_require__(17);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(12);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(1)
  , core           = __webpack_require__(2)
  , LIBRARY        = __webpack_require__(23)
  , wksExt         = __webpack_require__(32)
  , defineProperty = __webpack_require__(5).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(9);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(73), __esModule: true };

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(37);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(66);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(65);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(19);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(19);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(77);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(11)(function(){
  return Object.defineProperty(__webpack_require__(44)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(42);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(23)
  , $export        = __webpack_require__(7)
  , redefine       = __webpack_require__(51)
  , hide           = __webpack_require__(8)
  , has            = __webpack_require__(4)
  , Iterators      = __webpack_require__(22)
  , $iterCreate    = __webpack_require__(83)
  , setToStringTag = __webpack_require__(26)
  , getPrototypeOf = __webpack_require__(90)
  , ITERATOR       = __webpack_require__(9)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(15)
  , createDesc     = __webpack_require__(16)
  , toIObject      = __webpack_require__(6)
  , toPrimitive    = __webpack_require__(30)
  , has            = __webpack_require__(4)
  , IE8_DOM_DEFINE = __webpack_require__(45)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(3) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(50)
  , hiddenKeys = __webpack_require__(21).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(4)
  , toIObject    = __webpack_require__(6)
  , arrayIndexOf = __webpack_require__(79)(false)
  , IE_PROTO     = __webpack_require__(27)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(20);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function(arr, obj){
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(33);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var util = {
  isAppearSupported: function isAppearSupported(props) {
    return props.transitionName && props.transitionAppear || props.animation.appear;
  },
  isEnterSupported: function isEnterSupported(props) {
    return props.transitionName && props.transitionEnter || props.animation.enter;
  },
  isLeaveSupported: function isLeaveSupported(props) {
    return props.transitionName && props.transitionLeave || props.animation.leave;
  },
  allowAppearCallback: function allowAppearCallback(props) {
    return props.transitionAppear || props.animation.appear;
  },
  allowEnterCallback: function allowEnterCallback(props) {
    return props.transitionEnter || props.animation.enter;
  },
  allowLeaveCallback: function allowLeaveCallback(props) {
    return props.transitionLeave || props.animation.leave;
  }
};
/* harmony default export */ __webpack_exports__["a"] = (util);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.browser = browser;
exports.getOffset = getOffset;
exports.loopAllChildren = loopAllChildren;
exports.isInclude = isInclude;
exports.filterParentPosition = filterParentPosition;
exports.handleCheckState = handleCheckState;
exports.getCheck = getCheck;
exports.getStrictlyValue = getStrictlyValue;
exports.arraysEqual = arraysEqual;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function browser(navigator) {
  var tem = void 0;
  var ua = navigator.userAgent;
  var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return 'IE ' + (tem[1] || '');
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  tem = ua.match(/version\/(\d+)/i);
  if (tem) {
    M.splice(1, 1, tem[1]);
  }
  return M.join(' ');
}

// export function getOffset(el) {
//   const obj = el.getBoundingClientRect();
//   return {
//     left: obj.left + document.body.scrollLeft,
//     top: obj.top + document.body.scrollTop,
//     width: obj.width,
//     height: obj.height
//   };
// }

// // iscroll offset
// offset = function (el) {
//   var left = -el.offsetLeft,
//     top = -el.offsetTop;

//   // jshint -W084
//   while (el = el.offsetParent) {
//     left -= el.offsetLeft;
//     top -= el.offsetTop;
//   }
//   // jshint +W084

//   return {
//     left: left,
//     top: top
//   };
// }

/* eslint-disable */
/* eslint no-loop-func: 0*/

function getOffset(ele) {
  var doc = void 0,
      win = void 0,
      docElem = void 0,
      rect = void 0;

  if (!ele.getClientRects().length) {
    return { top: 0, left: 0 };
  }

  rect = ele.getBoundingClientRect();

  if (rect.width || rect.height) {
    doc = ele.ownerDocument;
    win = doc.defaultView;
    docElem = doc.documentElement;

    return {
      top: rect.top + win.pageYOffset - docElem.clientTop,
      left: rect.left + win.pageXOffset - docElem.clientLeft
    };
  }

  return rect;
}
/* eslint-enable */

function getChildrenlength(children) {
  var len = 1;
  if (Array.isArray(children)) {
    len = children.length;
  }
  return len;
}

function getSiblingPosition(index, len, siblingPosition) {
  if (len === 1) {
    siblingPosition.first = true;
    siblingPosition.last = true;
  } else {
    siblingPosition.first = index === 0;
    siblingPosition.last = index === len - 1;
  }
  return siblingPosition;
}

function loopAllChildren(childs, callback, parent) {
  var loop = function loop(children, level, _parent) {
    var len = getChildrenlength(children);
    _react2["default"].Children.forEach(children, function (item, index) {
      var pos = level + '-' + index;
      if (item.props.children && item.type && item.type.isTreeNode) {
        loop(item.props.children, pos, { node: item, pos: pos });
      }
      callback(item, index, pos, item.key || pos, getSiblingPosition(index, len, {}), _parent);
    });
  };
  loop(childs, 0, parent);
}

function isInclude(smallArray, bigArray) {
  return smallArray.every(function (ii, i) {
    return ii === bigArray[i];
  });
}
// console.log(isInclude(['0', '1'], ['0', '10', '1']));


// arr.length === 628, use time: ~20ms
function filterParentPosition(arr) {
  var levelObj = {};
  arr.forEach(function (item) {
    var posLen = item.split('-').length;
    if (!levelObj[posLen]) {
      levelObj[posLen] = [];
    }
    levelObj[posLen].push(item);
  });
  var levelArr = Object.keys(levelObj).sort(function (a, b) {
    return Number(a) - Number(b);
  });

  var _loop = function _loop(i) {
    if (levelArr[i + 1]) {
      levelObj[levelArr[i]].forEach(function (ii) {
        var _loop2 = function _loop2(j) {
          levelObj[levelArr[j]].forEach(function (_i, index) {
            if (isInclude(ii.split('-'), _i.split('-'))) {
              levelObj[levelArr[j]][index] = null;
            }
          });
          levelObj[levelArr[j]] = levelObj[levelArr[j]].filter(function (p) {
            return p;
          });
        };

        for (var j = i + 1; j < levelArr.length; j++) {
          _loop2(j);
        }
      });
    }
  };

  for (var i = 0; i < levelArr.length; i++) {
    _loop(i);
  }
  var nArr = [];
  levelArr.forEach(function (i) {
    nArr = nArr.concat(levelObj[i]);
  });
  return nArr;
}
// console.log(filterParentPosition(
//   ['0-2', '0-3-3', '0-10', '0-10-0', '0-0-1', '0-0', '0-1-1', '0-1']
// ));


function stripTail(str) {
  var arr = str.match(/(.+)(-[^-]+)$/);
  var st = '';
  if (arr && arr.length === 3) {
    st = arr[1];
  }
  return st;
}
function splitPosition(pos) {
  return pos.split('-');
}

function handleCheckState(obj, checkedPositionArr, checkIt) {
  // console.log(stripTail('0-101-000'));
  var objKeys = Object.keys(obj);
  // let s = Date.now();
  objKeys.forEach(function (i, index) {
    var iArr = splitPosition(i);
    var saved = false;
    checkedPositionArr.forEach(function (_pos) {
      // 设置子节点，全选或全不选
      var _posArr = splitPosition(_pos);
      if (iArr.length > _posArr.length && isInclude(_posArr, iArr)) {
        obj[i].halfChecked = false;
        obj[i].checked = checkIt;
        objKeys[index] = null;
      }
      if (iArr[0] === _posArr[0] && iArr[1] === _posArr[1]) {
        // 如果
        saved = true;
      }
    });
    if (!saved) {
      objKeys[index] = null;
    }
  });
  // TODO: 循环 2470000 次耗时约 1400 ms。 性能瓶颈！
  // console.log(Date.now()-s, checkedPositionArr.length * objKeys.length);
  objKeys = objKeys.filter(function (i) {
    return i;
  }); // filter non null;

  var _loop3 = function _loop3(_pIndex) {
    // 循环设置父节点的 选中 或 半选状态
    var loop = function loop(__pos) {
      var _posLen = splitPosition(__pos).length;
      if (_posLen <= 2) {
        // e.g. '0-0', '0-1'
        return;
      }
      var sibling = 0;
      var siblingChecked = 0;
      var parentPosition = stripTail(__pos);
      objKeys.forEach(function (i /* , index*/) {
        var iArr = splitPosition(i);
        if (iArr.length === _posLen && isInclude(splitPosition(parentPosition), iArr)) {
          sibling++;
          if (obj[i].checked) {
            siblingChecked++;
            var _i = checkedPositionArr.indexOf(i);
            if (_i > -1) {
              checkedPositionArr.splice(_i, 1);
              if (_i <= _pIndex) {
                _pIndex--;
              }
            }
          } else if (obj[i].halfChecked) {
            siblingChecked += 0.5;
          }
          // objKeys[index] = null;
        }
      });
      // objKeys = objKeys.filter(i => i); // filter non null;
      var parent = obj[parentPosition];
      // sibling 不会等于0
      // 全不选 - 全选 - 半选
      if (siblingChecked === 0) {
        parent.checked = false;
        parent.halfChecked = false;
      } else if (siblingChecked === sibling) {
        parent.checked = true;
        parent.halfChecked = false;
      } else {
        parent.halfChecked = true;
        parent.checked = false;
      }
      loop(parentPosition);
    };
    loop(checkedPositionArr[_pIndex], _pIndex);
    pIndex = _pIndex;
  };

  for (var pIndex = 0; pIndex < checkedPositionArr.length; pIndex++) {
    _loop3(pIndex);
  }
  // console.log(Date.now()-s, objKeys.length, checkIt);
}

function getCheck(treeNodesStates) {
  var halfCheckedKeys = [];
  var checkedKeys = [];
  var checkedNodes = [];
  var checkedNodesPositions = [];
  Object.keys(treeNodesStates).forEach(function (item) {
    var itemObj = treeNodesStates[item];
    if (itemObj.checked) {
      checkedKeys.push(itemObj.key);
      checkedNodes.push(itemObj.node);
      checkedNodesPositions.push({ node: itemObj.node, pos: item });
    } else if (itemObj.halfChecked) {
      halfCheckedKeys.push(itemObj.key);
    }
  });
  return {
    halfCheckedKeys: halfCheckedKeys, checkedKeys: checkedKeys, checkedNodes: checkedNodes, checkedNodesPositions: checkedNodesPositions, treeNodesStates: treeNodesStates
  };
}

function getStrictlyValue(checkedKeys, halfChecked) {
  if (halfChecked) {
    return { checked: checkedKeys, halfChecked: halfChecked };
  }
  return checkedKeys;
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a === null || typeof a === 'undefined' || b === null || typeof b === 'undefined') {
    return false;
  }
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// require('./index.scss');
__webpack_require__(62);
var React = __webpack_require__(0);
var LeftTree_1 = __webpack_require__(60);
;
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(LeftTree_1.default, null));
    };
    return App;
}(React.Component));
exports.App = App;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
__webpack_require__(63);
var rc_tree_1 = __webpack_require__(117);
var LeftTree = (function (_super) {
    __extends(LeftTree, _super);
    // state = {
    // }
    function LeftTree(props) {
        return _super.call(this, props) || this;
    }
    LeftTree.prototype.render = function () {
        console.log(rc_tree_1.default);
        return React.createElement(rc_tree_1.default, null);
    };
    return LeftTree;
}(React.Component));
exports.default = LeftTree;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(36);
var _1 = __webpack_require__(59);
ReactDOM.render(React.createElement(_1.App, null), document.getElementById('warpper'));


/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(76), __esModule: true };

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(37);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(64);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
module.exports = __webpack_require__(2).Object.assign;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);
var $Object = __webpack_require__(2).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(98);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
module.exports = __webpack_require__(2).Object.setPrototypeOf;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
__webpack_require__(100);
__webpack_require__(103);
__webpack_require__(104);
module.exports = __webpack_require__(2).Symbol;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
__webpack_require__(105);
module.exports = __webpack_require__(32).f('iterator');

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(6)
  , toLength  = __webpack_require__(94)
  , toIndex   = __webpack_require__(93);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(13)
  , gOPS    = __webpack_require__(25)
  , pIE     = __webpack_require__(15);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(42);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(24)
  , descriptor     = __webpack_require__(16)
  , setToStringTag = __webpack_require__(26)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(8)(IteratorPrototype, __webpack_require__(9)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(13)
  , toIObject = __webpack_require__(6);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(17)('meta')
  , isObject = __webpack_require__(12)
  , has      = __webpack_require__(4)
  , setDesc  = __webpack_require__(5).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(11)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(13)
  , gOPS     = __webpack_require__(25)
  , pIE      = __webpack_require__(15)
  , toObject = __webpack_require__(52)
  , IObject  = __webpack_require__(46)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(11)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(5)
  , anObject = __webpack_require__(10)
  , getKeys  = __webpack_require__(13);

module.exports = __webpack_require__(3) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(6)
  , gOPN      = __webpack_require__(49).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(4)
  , toObject    = __webpack_require__(52)
  , IE_PROTO    = __webpack_require__(27)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(12)
  , anObject = __webpack_require__(10);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(43)(Function.call, __webpack_require__(48).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(29)
  , defined   = __webpack_require__(20);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(29)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(29)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(78)
  , step             = __webpack_require__(84)
  , Iterators        = __webpack_require__(22)
  , toIObject        = __webpack_require__(6);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(47)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(7);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(87)});

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(24)});

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', {defineProperty: __webpack_require__(5).f});

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(7);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(91).set});

/***/ }),
/* 100 */
/***/ (function(module, exports) {



/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(92)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(47)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(1)
  , has            = __webpack_require__(4)
  , DESCRIPTORS    = __webpack_require__(3)
  , $export        = __webpack_require__(7)
  , redefine       = __webpack_require__(51)
  , META           = __webpack_require__(86).KEY
  , $fails         = __webpack_require__(11)
  , shared         = __webpack_require__(28)
  , setToStringTag = __webpack_require__(26)
  , uid            = __webpack_require__(17)
  , wks            = __webpack_require__(9)
  , wksExt         = __webpack_require__(32)
  , wksDefine      = __webpack_require__(31)
  , keyOf          = __webpack_require__(85)
  , enumKeys       = __webpack_require__(80)
  , isArray        = __webpack_require__(82)
  , anObject       = __webpack_require__(10)
  , toIObject      = __webpack_require__(6)
  , toPrimitive    = __webpack_require__(30)
  , createDesc     = __webpack_require__(16)
  , _create        = __webpack_require__(24)
  , gOPNExt        = __webpack_require__(89)
  , $GOPD          = __webpack_require__(48)
  , $DP            = __webpack_require__(5)
  , $keys          = __webpack_require__(13)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(49).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(15).f  = $propertyIsEnumerable;
  __webpack_require__(25).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(23)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(8)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('asyncIterator');

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('observable');

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(95);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(8)
  , Iterators     = __webpack_require__(22)
  , TO_STRING_TAG = __webpack_require__(9)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

try {
  var index = __webpack_require__(54);
} catch (err) {
  var index = __webpack_require__(54);
}

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

module.exports = function(el){
  return new ClassList(el);
};

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name){
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name){
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re){
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force){
  // classList
  if (this.list) {
    if ("undefined" !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ("undefined" !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function(){
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name){
  return this.list
    ? this.list.contains(name)
    : !! ~index(this.array(), name);
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition;
  }

  for (var baseEventName in EVENT_NAME_MAP) {
    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
      var baseEvents = EVENT_NAME_MAP[baseEventName];
      for (var styleName in baseEvents) {
        if (styleName in style) {
          endEvents.push(baseEvents[styleName]);
          break;
        }
      }
    }
  }
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },


  endEvents: endEvents,

  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

exports["default"] = TransitionEvents;
module.exports = exports['default'];

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Event = __webpack_require__(107);

var _Event2 = _interopRequireDefault(_Event);

var _componentClasses = __webpack_require__(106);

var _componentClasses2 = _interopRequireDefault(_componentClasses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isCssAnimationSupported = _Event2["default"].endEvents.length !== 0;


var capitalPrefixes = ['Webkit', 'Moz', 'O',
// ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var nodeClasses = (0, _componentClasses2["default"])(node);

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    nodeClasses.remove(className);
    nodeClasses.remove(activeClassName);

    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (end) {
      end();
    }
  };

  _Event2["default"].addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }
  nodeClasses.add(className);

  node.rcAnimTimeout = setTimeout(function () {
    node.rcAnimTimeout = null;
    nodeClasses.add(activeClassName);
    if (active) {
      setTimeout(active, 0);
    }
    fixBrowserByTimeout(node);
    // 30ms for firefox
  }, 30);

  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  _Event2["default"].addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

exports["default"] = cssAnimation;
module.exports = exports['default'];

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(34);
  var warning = __webpack_require__(55);
  var ReactPropTypesSecret = __webpack_require__(35);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(33);
var invariant = __webpack_require__(34);
var ReactPropTypesSecret = __webpack_require__(35);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(33);
var invariant = __webpack_require__(34);
var warning = __webpack_require__(55);

var ReactPropTypesSecret = __webpack_require__(35);
var checkPropTypes = __webpack_require__(109);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__AnimateChild__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util__ = __webpack_require__(56);










var defaultKey = 'rc_animate_' + Date.now();


function getChildrenFromProps(props) {
  var children = props.children;
  if (__WEBPACK_IMPORTED_MODULE_6_react___default.a.isValidElement(children)) {
    if (!children.key) {
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.cloneElement(children, {
        key: defaultKey
      });
    }
  }
  return children;
}

function noop() {}

var Animate = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Animate, _React$Component);

  function Animate(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Animate);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));

    _initialiseProps.call(_this);

    _this.currentlyAnimatingKeys = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];

    _this.state = {
      children: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["a" /* toArrayChildren */])(getChildrenFromProps(_this.props))
    };

    _this.childrenRefs = {};
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Animate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var showProp = this.props.showProp;
      var children = this.state.children;
      if (showProp) {
        children = children.filter(function (child) {
          return !!child.props[showProp];
        });
      }
      children.forEach(function (child) {
        if (child) {
          _this2.performAppear(child.key);
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.nextProps = nextProps;
      var nextChildren = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["a" /* toArrayChildren */])(getChildrenFromProps(nextProps));
      var props = this.props;
      // exclusive needs immediate response
      if (props.exclusive) {
        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
          _this3.stop(key);
        });
      }
      var showProp = props.showProp;
      var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
      // last props children if exclusive
      var currentChildren = props.exclusive ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["a" /* toArrayChildren */])(getChildrenFromProps(props)) : this.state.children;
      // in case destroy in showProp mode
      var newChildren = [];
      if (showProp) {
        currentChildren.forEach(function (currentChild) {
          var nextChild = currentChild && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["b" /* findChildInChildrenByKey */])(nextChildren, currentChild.key);
          var newChild = void 0;
          if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
            newChild = __WEBPACK_IMPORTED_MODULE_6_react___default.a.cloneElement(nextChild || currentChild, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()({}, showProp, true));
          } else {
            newChild = nextChild;
          }
          if (newChild) {
            newChildren.push(newChild);
          }
        });
        nextChildren.forEach(function (nextChild) {
          if (!nextChild || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["b" /* findChildInChildrenByKey */])(currentChildren, nextChild.key)) {
            newChildren.push(nextChild);
          }
        });
      } else {
        newChildren = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["c" /* mergeChildren */])(currentChildren, nextChildren);
      }

      // need render to avoid update
      this.setState({
        children: newChildren
      });

      nextChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasPrev = child && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["b" /* findChildInChildrenByKey */])(currentChildren, key);
        if (showProp) {
          var showInNext = child.props[showProp];
          if (hasPrev) {
            var showInNow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["d" /* findShownChildInChildrenByKey */])(currentChildren, key, showProp);
            if (!showInNow && showInNext) {
              _this3.keysToEnter.push(key);
            }
          } else if (showInNext) {
            _this3.keysToEnter.push(key);
          }
        } else if (!hasPrev) {
          _this3.keysToEnter.push(key);
        }
      });

      currentChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasNext = child && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["b" /* findChildInChildrenByKey */])(nextChildren, key);
        if (showProp) {
          var showInNow = child.props[showProp];
          if (hasNext) {
            var showInNext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["d" /* findShownChildInChildrenByKey */])(nextChildren, key, showProp);
            if (!showInNext && showInNow) {
              _this3.keysToLeave.push(key);
            }
          } else if (showInNow) {
            _this3.keysToLeave.push(key);
          }
        } else if (!hasNext) {
          _this3.keysToLeave.push(key);
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(this.performEnter);
      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(this.performLeave);
    }
  }, {
    key: 'isValidChildByKey',
    value: function isValidChildByKey(currentChildren, key) {
      var showProp = this.props.showProp;
      if (showProp) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["d" /* findShownChildInChildrenByKey */])(currentChildren, key, showProp);
      }
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["b" /* findChildInChildrenByKey */])(currentChildren, key);
    }
  }, {
    key: 'stop',
    value: function stop(key) {
      delete this.currentlyAnimatingKeys[key];
      var component = this.childrenRefs[key];
      if (component) {
        component.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var props = this.props;
      this.nextProps = props;
      var stateChildren = this.state.children;
      var children = null;
      if (stateChildren) {
        children = stateChildren.map(function (child) {
          if (child === null || child === undefined) {
            return child;
          }
          if (!child.key) {
            throw new Error('must set key for <rc-animate> children');
          }
          return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9__AnimateChild__["a" /* default */],
            {
              key: child.key,
              ref: function ref(node) {
                return _this4.childrenRefs[child.key] = node;
              },
              animation: props.animation,
              transitionName: props.transitionName,
              transitionEnter: props.transitionEnter,
              transitionAppear: props.transitionAppear,
              transitionLeave: props.transitionLeave
            },
            child
          );
        });
      }
      var Component = props.component;
      if (Component) {
        var passedProps = props;
        if (typeof Component === 'string') {
          passedProps = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            className: props.className,
            style: props.style
          }, props.componentProps);
        }
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          Component,
          passedProps,
          children
        );
      }
      return children[0] || null;
    }
  }]);

  return Animate;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

Animate.propTypes = {
  component: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.any,
  componentProps: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,
  animation: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,
  transitionName: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object]),
  transitionEnter: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  transitionAppear: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  exclusive: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  transitionLeave: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  onEnd: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  onEnter: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  onLeave: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  onAppear: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  showProp: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string
};
Animate.defaultProps = {
  animation: {},
  component: 'span',
  componentProps: {},
  transitionEnter: true,
  transitionLeave: true,
  transitionAppear: false,
  onEnd: noop,
  onEnter: noop,
  onLeave: noop,
  onAppear: noop
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.performEnter = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
    }
  };

  this.performAppear = function (key) {
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
    }
  };

  this.handleDoneAdding = function (key, type) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["a" /* toArrayChildren */])(getChildrenFromProps(props));
    if (!_this5.isValidChildByKey(currentChildren, key)) {
      // exclusive will not need this
      _this5.performLeave(key);
    } else {
      if (type === 'appear') {
        if (__WEBPACK_IMPORTED_MODULE_10__util__["a" /* default */].allowAppearCallback(props)) {
          props.onAppear(key);
          props.onEnd(key, true);
        }
      } else {
        if (__WEBPACK_IMPORTED_MODULE_10__util__["a" /* default */].allowEnterCallback(props)) {
          props.onEnter(key);
          props.onEnd(key, true);
        }
      }
    }
  };

  this.performLeave = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
    }
  };

  this.handleDoneLeaving = function (key) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["a" /* toArrayChildren */])(getChildrenFromProps(props));
    // in case state change is too fast
    if (_this5.isValidChildByKey(currentChildren, key)) {
      _this5.performEnter(key);
    } else {
      var end = function end() {
        if (__WEBPACK_IMPORTED_MODULE_10__util__["a" /* default */].allowLeaveCallback(props)) {
          props.onLeave(key);
          props.onEnd(key, false);
        }
      };
      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["e" /* isSameChildren */])(_this5.state.children, currentChildren, props.showProp)) {
        _this5.setState({
          children: currentChildren
        }, end);
      } else {
        end();
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Animate);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_css_animation__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_css_animation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_css_animation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util__ = __webpack_require__(56);











var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(AnimateChild, _React$Component);

  function AnimateChild() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, AnimateChild);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(AnimateChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      if (__WEBPACK_IMPORTED_MODULE_9__util__["a" /* default */].isEnterSupported(this.props)) {
        this.transition('enter', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(done) {
      if (__WEBPACK_IMPORTED_MODULE_9__util__["a" /* default */].isAppearSupported(this.props)) {
        this.transition('appear', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      if (__WEBPACK_IMPORTED_MODULE_9__util__["a" /* default */].isLeaveSupported(this.props)) {
        this.transition('leave', done);
      } else {
        // always sync, do not interupt with react component life cycle
        // update hidden -> animate hidden ->
        // didUpdate -> animate leave -> unmount (if animate is none)
        done();
      }
    }
  }, {
    key: 'transition',
    value: function transition(animationType, finishCallback) {
      var _this2 = this;

      var node = __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.findDOMNode(this);
      var props = this.props;
      var transitionName = props.transitionName;
      var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(transitionName)) === 'object';
      this.stop();
      var end = function end() {
        _this2.stopper = null;
        finishCallback();
      };
      if ((__WEBPACK_IMPORTED_MODULE_8_css_animation__["isCssAnimationSupported"] || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
        var activeName = name + '-active';
        if (nameIsObj && transitionName[animationType + 'Active']) {
          activeName = transitionName[animationType + 'Active'];
        }
        this.stopper = __WEBPACK_IMPORTED_MODULE_8_css_animation___default()(node, {
          name: name,
          active: activeName
        }, end);
      } else {
        this.stopper = props.animation[animationType](node, end);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var stopper = this.stopper;
      if (stopper) {
        this.stopper = null;
        stopper.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AnimateChild;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

AnimateChild.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.any
};
/* harmony default export */ __webpack_exports__["a"] = (AnimateChild);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toArrayChildren;
/* harmony export (immutable) */ __webpack_exports__["b"] = findChildInChildrenByKey;
/* harmony export (immutable) */ __webpack_exports__["d"] = findShownChildInChildrenByKey;
/* unused harmony export findHiddenChildInChildrenByKey */
/* harmony export (immutable) */ __webpack_exports__["e"] = isSameChildren;
/* harmony export (immutable) */ __webpack_exports__["c"] = mergeChildren;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function toArrayChildren(children) {
  var ret = [];
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (child) {
    ret.push(child);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (ret) {
        return;
      }
      if (child && child.key === key) {
        ret = child;
      }
    });
  }
  return ret;
}

function findShownChildInChildrenByKey(children, key, showProp) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (child && child.key === key && child.props[showProp]) {
        if (ret) {
          throw new Error('two child with same key for <rc-animate> children');
        }
        ret = child;
      }
    });
  }
  return ret;
}

function findHiddenChildInChildrenByKey(children, key, showProp) {
  var found = 0;
  if (children) {
    children.forEach(function (child) {
      if (found) {
        return;
      }
      found = child && child.key === key && !child.props[showProp];
    });
  }
  return found;
}

function isSameChildren(c1, c2, showProp) {
  var same = c1.length === c2.length;
  if (same) {
    c1.forEach(function (child, index) {
      var child2 = c2[index];
      if (child && child2) {
        if (child && !child2 || !child && child2) {
          same = false;
        } else if (child.key !== child2.key) {
          same = false;
        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
          same = false;
        }
      }
    });
  }
  return same;
}

function mergeChildren(prev, next) {
  var ret = [];

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  prev.forEach(function (child) {
    if (child && findChildInChildrenByKey(next, child.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[child.key] = pendingChildren;
        pendingChildren = [];
      }
    } else {
      pendingChildren.push(child);
    }
  });

  next.forEach(function (child) {
    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
      ret = ret.concat(nextChildrenPending[child.key]);
    }
    ret.push(child);
  });

  ret = ret.concat(pendingChildren);

  return ret;
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objectAssign = __webpack_require__(58);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _classnames = __webpack_require__(53);

var _classnames2 = _interopRequireDefault(_classnames);

var _util = __webpack_require__(57);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /* eslint no-console:0 */


function noop() {}

var Tree = function (_React$Component) {
  _inherits(Tree, _React$Component);

  function Tree(props) {
    _classCallCheck(this, Tree);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    ['onKeyDown', 'onCheck'].forEach(function (m) {
      _this[m] = _this[m].bind(_this);
    });
    _this.contextmenuKeys = [];
    _this.checkedKeysChange = true;

    _this.state = {
      expandedKeys: _this.getDefaultExpandedKeys(props),
      checkedKeys: _this.getDefaultCheckedKeys(props),
      selectedKeys: _this.getDefaultSelectedKeys(props),
      dragNodesKeys: '',
      dragOverNodeKey: '',
      dropNodeKey: ''
    };
    return _this;
  }

  Tree.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var expandedKeys = this.getDefaultExpandedKeys(nextProps, true);
    var checkedKeys = this.getDefaultCheckedKeys(nextProps, true);
    var selectedKeys = this.getDefaultSelectedKeys(nextProps, true);
    var st = {};
    if (expandedKeys) {
      st.expandedKeys = expandedKeys;
    }
    if (checkedKeys) {
      if (nextProps.checkedKeys === this.props.checkedKeys) {
        this.checkedKeysChange = false;
      } else {
        this.checkedKeysChange = true;
      }
      st.checkedKeys = checkedKeys;
    }
    if (selectedKeys) {
      st.selectedKeys = selectedKeys;
    }
    this.setState(st);
  };

  Tree.prototype.onDragStart = function onDragStart(e, treeNode) {
    this.dragNode = treeNode;
    this.dragNodesKeys = this.getDragNodes(treeNode);
    var st = {
      dragNodesKeys: this.dragNodesKeys
    };
    var expandedKeys = this.getExpandedKeys(treeNode, false);
    if (expandedKeys) {
      // Controlled expand, save and then reset
      this.getRawExpandedKeys();
      st.expandedKeys = expandedKeys;
    }
    this.setState(st);
    this.props.onDragStart({
      event: e,
      node: treeNode
    });
    this._dropTrigger = false;
  };

  Tree.prototype.onDragEnterGap = function onDragEnterGap(e, treeNode) {
    var offsetTop = (0, _util.getOffset)(treeNode.refs.selectHandle).top;
    var offsetHeight = treeNode.refs.selectHandle.offsetHeight;
    var pageY = e.pageY;
    var gapHeight = 2;
    if (pageY > offsetTop + offsetHeight - gapHeight) {
      this.dropPosition = 1;
      return 1;
    }
    if (pageY < offsetTop + gapHeight) {
      this.dropPosition = -1;
      return -1;
    }
    this.dropPosition = 0;
    return 0;
  };

  Tree.prototype.onDragEnter = function onDragEnter(e, treeNode) {
    var enterGap = this.onDragEnterGap(e, treeNode);
    if (this.dragNode.props.eventKey === treeNode.props.eventKey && enterGap === 0) {
      this.setState({
        dragOverNodeKey: ''
      });
      return;
    }
    var st = {
      dragOverNodeKey: treeNode.props.eventKey
    };
    var expandedKeys = this.getExpandedKeys(treeNode, true);
    if (expandedKeys) {
      this.getRawExpandedKeys();
      st.expandedKeys = expandedKeys;
    }
    this.setState(st);
    this.props.onDragEnter({
      event: e,
      node: treeNode,
      expandedKeys: expandedKeys && [].concat(_toConsumableArray(expandedKeys)) || [].concat(_toConsumableArray(this.state.expandedKeys))
    });
  };

  Tree.prototype.onDragOver = function onDragOver(e, treeNode) {
    this.props.onDragOver({ event: e, node: treeNode });
  };

  Tree.prototype.onDragLeave = function onDragLeave(e, treeNode) {
    this.props.onDragLeave({ event: e, node: treeNode });
  };

  Tree.prototype.onDrop = function onDrop(e, treeNode) {
    var key = treeNode.props.eventKey;
    this.setState({
      dragOverNodeKey: '',
      dropNodeKey: key
    });
    if (this.dragNodesKeys.indexOf(key) > -1) {
      if (console.warn) {
        console.warn('can not drop to dragNode(include it\'s children node)');
      }
      return false;
    }

    var posArr = treeNode.props.pos.split('-');
    var res = {
      event: e,
      node: treeNode,
      dragNode: this.dragNode,
      dragNodesKeys: [].concat(_toConsumableArray(this.dragNodesKeys)),
      dropPosition: this.dropPosition + Number(posArr[posArr.length - 1])
    };
    if (this.dropPosition !== 0) {
      res.dropToGap = true;
    }
    if ('expandedKeys' in this.props) {
      res.rawExpandedKeys = [].concat(_toConsumableArray(this._rawExpandedKeys)) || [].concat(_toConsumableArray(this.state.expandedKeys));
    }
    this.props.onDrop(res);
    this._dropTrigger = true;
  };

  Tree.prototype.onDragEnd = function onDragEnd(e, treeNode) {
    this.setState({
      dragOverNodeKey: ''
    });
    this.props.onDragEnd({ event: e, node: treeNode });
  };

  Tree.prototype.onExpand = function onExpand(treeNode) {
    var _this2 = this;

    var expanded = !treeNode.props.expanded;
    var controlled = 'expandedKeys' in this.props;
    var expandedKeys = [].concat(_toConsumableArray(this.state.expandedKeys));
    var index = expandedKeys.indexOf(treeNode.props.eventKey);
    if (expanded && index === -1) {
      expandedKeys.push(treeNode.props.eventKey);
    } else if (!expanded && index > -1) {
      expandedKeys.splice(index, 1);
    }
    if (!controlled) {
      this.setState({ expandedKeys: expandedKeys });
    }
    this.props.onExpand(expandedKeys, { node: treeNode, expanded: expanded });

    // after data loaded, need set new expandedKeys
    if (expanded && this.props.loadData) {
      return this.props.loadData(treeNode).then(function () {
        if (!controlled) {
          _this2.setState({ expandedKeys: expandedKeys });
        }
      });
    }
  };

  Tree.prototype.onCheck = function onCheck(treeNode) {
    var _this3 = this;

    var checked = !treeNode.props.checked;
    if (treeNode.props.halfChecked) {
      checked = true;
    }
    var key = treeNode.props.eventKey;
    var checkedKeys = [].concat(_toConsumableArray(this.state.checkedKeys));
    var index = checkedKeys.indexOf(key);

    var newSt = {
      event: 'check',
      node: treeNode,
      checked: checked
    };

    if (this.props.checkStrictly) {
      if (checked && index === -1) {
        checkedKeys.push(key);
      }
      if (!checked && index > -1) {
        checkedKeys.splice(index, 1);
      }
      newSt.checkedNodes = [];
      (0, _util.loopAllChildren)(this.props.children, function (item, ind, pos, keyOrPos) {
        if (checkedKeys.indexOf(keyOrPos) !== -1) {
          newSt.checkedNodes.push(item);
        }
      });
      if (!('checkedKeys' in this.props)) {
        this.setState({
          checkedKeys: checkedKeys
        });
      }
      var halfChecked = this.props.checkedKeys ? this.props.checkedKeys.halfChecked : [];
      this.props.onCheck((0, _util.getStrictlyValue)(checkedKeys, halfChecked), newSt);
    } else {
      if (checked && index === -1) {
        this.treeNodesStates[treeNode.props.pos].checked = true;
        var checkedPositions = [];
        Object.keys(this.treeNodesStates).forEach(function (i) {
          if (_this3.treeNodesStates[i].checked) {
            checkedPositions.push(i);
          }
        });
        (0, _util.handleCheckState)(this.treeNodesStates, (0, _util.filterParentPosition)(checkedPositions), true);
      }
      if (!checked) {
        this.treeNodesStates[treeNode.props.pos].checked = false;
        this.treeNodesStates[treeNode.props.pos].halfChecked = false;
        (0, _util.handleCheckState)(this.treeNodesStates, [treeNode.props.pos], false);
      }
      var checkKeys = (0, _util.getCheck)(this.treeNodesStates);
      newSt.checkedNodes = checkKeys.checkedNodes;
      newSt.checkedNodesPositions = checkKeys.checkedNodesPositions;
      newSt.halfCheckedKeys = checkKeys.halfCheckedKeys;
      this.checkKeys = checkKeys;

      this._checkedKeys = checkedKeys = checkKeys.checkedKeys;
      if (!('checkedKeys' in this.props)) {
        this.setState({
          checkedKeys: checkedKeys
        });
      }
      this.props.onCheck(checkedKeys, newSt);
    }
  };

  Tree.prototype.onSelect = function onSelect(treeNode) {
    var props = this.props;
    var selectedKeys = [].concat(_toConsumableArray(this.state.selectedKeys));
    var eventKey = treeNode.props.eventKey;
    var index = selectedKeys.indexOf(eventKey);
    var selected = void 0;
    if (index !== -1) {
      selected = false;
      selectedKeys.splice(index, 1);
    } else {
      selected = true;
      if (!props.multiple) {
        selectedKeys.length = 0;
      }
      selectedKeys.push(eventKey);
    }
    var selectedNodes = [];
    if (selectedKeys.length) {
      (0, _util.loopAllChildren)(this.props.children, function (item) {
        if (selectedKeys.indexOf(item.key) !== -1) {
          selectedNodes.push(item);
        }
      });
    }
    var newSt = {
      event: 'select',
      node: treeNode,
      selected: selected,
      selectedNodes: selectedNodes
    };
    if (!('selectedKeys' in this.props)) {
      this.setState({
        selectedKeys: selectedKeys
      });
    }
    props.onSelect(selectedKeys, newSt);
  };

  Tree.prototype.onMouseEnter = function onMouseEnter(e, treeNode) {
    this.props.onMouseEnter({ event: e, node: treeNode });
  };

  Tree.prototype.onMouseLeave = function onMouseLeave(e, treeNode) {
    this.props.onMouseLeave({ event: e, node: treeNode });
  };

  Tree.prototype.onContextMenu = function onContextMenu(e, treeNode) {
    var selectedKeys = [].concat(_toConsumableArray(this.state.selectedKeys));
    var eventKey = treeNode.props.eventKey;
    if (this.contextmenuKeys.indexOf(eventKey) === -1) {
      this.contextmenuKeys.push(eventKey);
    }
    this.contextmenuKeys.forEach(function (key) {
      var index = selectedKeys.indexOf(key);
      if (index !== -1) {
        selectedKeys.splice(index, 1);
      }
    });
    if (selectedKeys.indexOf(eventKey) === -1) {
      selectedKeys.push(eventKey);
    }
    this.setState({
      selectedKeys: selectedKeys
    });
    this.props.onRightClick({ event: e, node: treeNode });
  };

  // all keyboard events callbacks run from here at first


  Tree.prototype.onKeyDown = function onKeyDown(e) {
    e.preventDefault();
  };

  Tree.prototype.getFilterExpandedKeys = function getFilterExpandedKeys(props, expandKeyProp, expandAll) {
    var keys = props[expandKeyProp];
    if (!expandAll && !props.autoExpandParent) {
      return keys || [];
    }
    var expandedPositionArr = [];
    if (props.autoExpandParent) {
      (0, _util.loopAllChildren)(props.children, function (item, index, pos, newKey) {
        if (keys.indexOf(newKey) > -1) {
          expandedPositionArr.push(pos);
        }
      });
    }
    var filterExpandedKeys = [];
    (0, _util.loopAllChildren)(props.children, function (item, index, pos, newKey) {
      if (expandAll) {
        filterExpandedKeys.push(newKey);
      } else if (props.autoExpandParent) {
        expandedPositionArr.forEach(function (p) {
          if ((p.split('-').length > pos.split('-').length && (0, _util.isInclude)(pos.split('-'), p.split('-')) || pos === p) && filterExpandedKeys.indexOf(newKey) === -1) {
            filterExpandedKeys.push(newKey);
          }
        });
      }
    });
    return filterExpandedKeys.length ? filterExpandedKeys : keys;
  };

  Tree.prototype.getDefaultExpandedKeys = function getDefaultExpandedKeys(props, willReceiveProps) {
    var expandedKeys = willReceiveProps ? undefined : this.getFilterExpandedKeys(props, 'defaultExpandedKeys', props.defaultExpandedKeys.length ? false : props.defaultExpandAll);
    if ('expandedKeys' in props) {
      expandedKeys = (props.autoExpandParent ? this.getFilterExpandedKeys(props, 'expandedKeys', false) : props.expandedKeys) || [];
    }
    return expandedKeys;
  };

  Tree.prototype.getDefaultCheckedKeys = function getDefaultCheckedKeys(props, willReceiveProps) {
    var checkedKeys = willReceiveProps ? undefined : props.defaultCheckedKeys;
    if ('checkedKeys' in props) {
      checkedKeys = props.checkedKeys || [];
      if (props.checkStrictly) {
        if (props.checkedKeys.checked) {
          checkedKeys = props.checkedKeys.checked;
        } else if (!Array.isArray(props.checkedKeys)) {
          checkedKeys = [];
        }
      }
    }
    return checkedKeys;
  };

  Tree.prototype.getDefaultSelectedKeys = function getDefaultSelectedKeys(props, willReceiveProps) {
    var getKeys = function getKeys(keys) {
      if (props.multiple) {
        return [].concat(_toConsumableArray(keys));
      }
      if (keys.length) {
        return [keys[0]];
      }
      return keys;
    };
    var selectedKeys = willReceiveProps ? undefined : getKeys(props.defaultSelectedKeys);
    if ('selectedKeys' in props) {
      selectedKeys = getKeys(props.selectedKeys);
    }
    return selectedKeys;
  };

  Tree.prototype.getRawExpandedKeys = function getRawExpandedKeys() {
    if (!this._rawExpandedKeys && 'expandedKeys' in this.props) {
      this._rawExpandedKeys = [].concat(_toConsumableArray(this.state.expandedKeys));
    }
  };

  Tree.prototype.getOpenTransitionName = function getOpenTransitionName() {
    var props = this.props;
    var transitionName = props.openTransitionName;
    var animationName = props.openAnimation;
    if (!transitionName && typeof animationName === 'string') {
      transitionName = props.prefixCls + '-open-' + animationName;
    }
    return transitionName;
  };

  Tree.prototype.getDragNodes = function getDragNodes(treeNode) {
    var dragNodesKeys = [];
    var tPArr = treeNode.props.pos.split('-');
    (0, _util.loopAllChildren)(this.props.children, function (item, index, pos, newKey) {
      var pArr = pos.split('-');
      if (treeNode.props.pos === pos || tPArr.length < pArr.length && (0, _util.isInclude)(tPArr, pArr)) {
        dragNodesKeys.push(newKey);
      }
    });
    return dragNodesKeys;
  };

  Tree.prototype.getExpandedKeys = function getExpandedKeys(treeNode, expand) {
    var key = treeNode.props.eventKey;
    var expandedKeys = this.state.expandedKeys;
    var expandedIndex = expandedKeys.indexOf(key);
    var exKeys = void 0;
    if (expandedIndex > -1 && !expand) {
      exKeys = [].concat(_toConsumableArray(expandedKeys));
      exKeys.splice(expandedIndex, 1);
      return exKeys;
    }
    if (expand && expandedKeys.indexOf(key) === -1) {
      return expandedKeys.concat([key]);
    }
  };

  Tree.prototype.filterTreeNode = function filterTreeNode(treeNode) {
    var filterTreeNode = this.props.filterTreeNode;
    if (typeof filterTreeNode !== 'function' || treeNode.props.disabled) {
      return false;
    }
    return filterTreeNode.call(this, treeNode);
  };

  Tree.prototype.renderTreeNode = function renderTreeNode(child, index) {
    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var pos = level + '-' + index;
    var key = child.key || pos;
    var state = this.state;
    var props = this.props;

    // prefer to child's own selectable property if passed
    var selectable = props.selectable;
    if (child.props.hasOwnProperty('selectable')) {
      selectable = child.props.selectable;
    }

    var cloneProps = {
      ref: 'treeNode-' + key,
      root: this,
      eventKey: key,
      pos: pos,
      selectable: selectable,
      loadData: props.loadData,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      onRightClick: props.onRightClick,
      prefixCls: props.prefixCls,
      showLine: props.showLine,
      showIcon: props.showIcon,
      draggable: props.draggable,
      dragOver: state.dragOverNodeKey === key && this.dropPosition === 0,
      dragOverGapTop: state.dragOverNodeKey === key && this.dropPosition === -1,
      dragOverGapBottom: state.dragOverNodeKey === key && this.dropPosition === 1,
      _dropTrigger: this._dropTrigger,
      expanded: state.expandedKeys.indexOf(key) !== -1,
      selected: state.selectedKeys.indexOf(key) !== -1,
      openTransitionName: this.getOpenTransitionName(),
      openAnimation: props.openAnimation,
      filterTreeNode: this.filterTreeNode.bind(this)
    };
    if (props.checkable) {
      cloneProps.checkable = props.checkable;
      if (props.checkStrictly) {
        if (state.checkedKeys) {
          cloneProps.checked = state.checkedKeys.indexOf(key) !== -1 || false;
        }
        if (props.checkedKeys && props.checkedKeys.halfChecked) {
          cloneProps.halfChecked = props.checkedKeys.halfChecked.indexOf(key) !== -1 || false;
        } else {
          cloneProps.halfChecked = false;
        }
      } else {
        if (this.checkedKeys) {
          cloneProps.checked = this.checkedKeys.indexOf(key) !== -1 || false;
        }
        cloneProps.halfChecked = this.halfCheckedKeys.indexOf(key) !== -1;
      }
    }
    if (this.treeNodesStates && this.treeNodesStates[pos]) {
      (0, _objectAssign2["default"])(cloneProps, this.treeNodesStates[pos].siblingPosition);
    }
    return _react2["default"].cloneElement(child, cloneProps);
  };

  Tree.prototype.render = function render() {
    var _this4 = this;

    var props = this.props;
    var domProps = {
      className: (0, _classnames2["default"])(props.className, props.prefixCls),
      role: 'tree-node'
    };
    if (props.focusable) {
      domProps.tabIndex = '0';
      domProps.onKeyDown = this.onKeyDown;
    }
    var getTreeNodesStates = function getTreeNodesStates() {
      _this4.treeNodesStates = {};
      (0, _util.loopAllChildren)(props.children, function (item, index, pos, keyOrPos, siblingPosition) {
        _this4.treeNodesStates[pos] = {
          siblingPosition: siblingPosition
        };
      });
    };
    if (props.showLine && !props.checkable) {
      getTreeNodesStates();
    }
    if (props.checkable && (this.checkedKeysChange || props.loadData)) {
      if (props.checkStrictly) {
        getTreeNodesStates();
      } else if (props._treeNodesStates) {
        this.treeNodesStates = props._treeNodesStates.treeNodesStates;
        this.halfCheckedKeys = props._treeNodesStates.halfCheckedKeys;
        this.checkedKeys = props._treeNodesStates.checkedKeys;
      } else {
        var checkedKeys = this.state.checkedKeys;
        var checkKeys = void 0;
        if (!props.loadData && this.checkKeys && this._checkedKeys && (0, _util.arraysEqual)(this._checkedKeys, checkedKeys)) {
          // if checkedKeys the same as _checkedKeys from onCheck, use _checkedKeys.
          checkKeys = this.checkKeys;
        } else {
          var checkedPositions = [];
          this.treeNodesStates = {};
          (0, _util.loopAllChildren)(props.children, function (item, index, pos, keyOrPos, siblingPosition) {
            _this4.treeNodesStates[pos] = {
              node: item,
              key: keyOrPos,
              checked: false,
              halfChecked: false,
              siblingPosition: siblingPosition
            };
            if (checkedKeys.indexOf(keyOrPos) !== -1) {
              _this4.treeNodesStates[pos].checked = true;
              checkedPositions.push(pos);
            }
          });
          // if the parent node's key exists, it all children node will be checked
          (0, _util.handleCheckState)(this.treeNodesStates, (0, _util.filterParentPosition)(checkedPositions), true);
          checkKeys = (0, _util.getCheck)(this.treeNodesStates);
        }
        this.halfCheckedKeys = checkKeys.halfCheckedKeys;
        this.checkedKeys = checkKeys.checkedKeys;
      }
    }

    return _react2["default"].createElement(
      'ul',
      _extends({}, domProps, { unselectable: true, ref: 'tree' }),
      _react2["default"].Children.map(props.children, this.renderTreeNode, this)
    );
  };

  return Tree;
}(_react2["default"].Component);

Tree.propTypes = {
  prefixCls: _propTypes2["default"].string,
  children: _propTypes2["default"].any,
  showLine: _propTypes2["default"].bool,
  showIcon: _propTypes2["default"].bool,
  selectable: _propTypes2["default"].bool,
  multiple: _propTypes2["default"].bool,
  checkable: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].node]),
  _treeNodesStates: _propTypes2["default"].object,
  checkStrictly: _propTypes2["default"].bool,
  draggable: _propTypes2["default"].bool,
  autoExpandParent: _propTypes2["default"].bool,
  defaultExpandAll: _propTypes2["default"].bool,
  defaultExpandedKeys: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
  expandedKeys: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
  defaultCheckedKeys: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
  checkedKeys: _propTypes2["default"].oneOfType([_propTypes2["default"].arrayOf(_propTypes2["default"].string), _propTypes2["default"].object]),
  defaultSelectedKeys: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
  selectedKeys: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
  onExpand: _propTypes2["default"].func,
  onCheck: _propTypes2["default"].func,
  onSelect: _propTypes2["default"].func,
  loadData: _propTypes2["default"].func,
  onMouseEnter: _propTypes2["default"].func,
  onMouseLeave: _propTypes2["default"].func,
  onRightClick: _propTypes2["default"].func,
  onDragStart: _propTypes2["default"].func,
  onDragEnter: _propTypes2["default"].func,
  onDragOver: _propTypes2["default"].func,
  onDragLeave: _propTypes2["default"].func,
  onDrop: _propTypes2["default"].func,
  onDragEnd: _propTypes2["default"].func,
  filterTreeNode: _propTypes2["default"].func,
  openTransitionName: _propTypes2["default"].string,
  openAnimation: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object])
};

Tree.defaultProps = {
  prefixCls: 'rc-tree',
  showLine: false,
  showIcon: true,
  selectable: true,
  multiple: false,
  checkable: false,
  checkStrictly: false,
  draggable: false,
  autoExpandParent: true,
  defaultExpandAll: false,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: [],
  onExpand: noop,
  onCheck: noop,
  onSelect: noop,
  onDragStart: noop,
  onDragEnter: noop,
  onDragOver: noop,
  onDragLeave: noop,
  onDrop: noop,
  onDragEnd: noop
};

exports["default"] = Tree;
module.exports = exports['default'];

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objectAssign = __webpack_require__(58);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _classnames = __webpack_require__(53);

var _classnames2 = _interopRequireDefault(_classnames);

var _rcAnimate = __webpack_require__(112);

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _util = __webpack_require__(57);

var _toArray = __webpack_require__(118);

var _toArray2 = _interopRequireDefault(_toArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var browserUa = typeof window !== 'undefined' ? (0, _util.browser)(window.navigator) : '';
var ieOrEdge = /.*(IE|Edge).+/.test(browserUa);
// const uaArray = browserUa.split(' ');
// const gtIE8 = uaArray.length !== 2 || uaArray[0].indexOf('IE') === -1 || Number(uaArray[1]) > 8;

var defaultTitle = '---';

var TreeNode = function (_React$Component) {
  _inherits(TreeNode, _React$Component);

  function TreeNode(props) {
    _classCallCheck(this, TreeNode);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    ['onExpand', 'onCheck', 'onContextMenu', 'onMouseEnter', 'onMouseLeave', 'onDragStart', 'onDragEnter', 'onDragOver', 'onDragLeave', 'onDrop', 'onDragEnd'].forEach(function (m) {
      _this[m] = _this[m].bind(_this);
    });
    _this.state = {
      dataLoading: false,
      dragNodeHighlight: false
    };
    return _this;
  }

  TreeNode.prototype.componentDidMount = function componentDidMount() {
    if (!this.props.root._treeNodeInstances) {
      this.props.root._treeNodeInstances = [];
    }
    this.props.root._treeNodeInstances.push(this);
  };
  // shouldComponentUpdate(nextProps) {
  //   if (!nextProps.expanded) {
  //     return false;
  //   }
  //   return true;
  // }

  TreeNode.prototype.onCheck = function onCheck() {
    this.props.root.onCheck(this);
  };

  TreeNode.prototype.onSelect = function onSelect() {
    this.props.root.onSelect(this);
  };

  TreeNode.prototype.onMouseEnter = function onMouseEnter(e) {
    e.preventDefault();
    this.props.root.onMouseEnter(e, this);
  };

  TreeNode.prototype.onMouseLeave = function onMouseLeave(e) {
    e.preventDefault();
    this.props.root.onMouseLeave(e, this);
  };

  TreeNode.prototype.onContextMenu = function onContextMenu(e) {
    e.preventDefault();
    this.props.root.onContextMenu(e, this);
  };

  TreeNode.prototype.onDragStart = function onDragStart(e) {
    // console.log('dragstart', this.props.eventKey, e);
    // e.preventDefault();
    e.stopPropagation();
    this.setState({
      dragNodeHighlight: true
    });
    this.props.root.onDragStart(e, this);
    try {
      // ie throw error
      // firefox-need-it
      e.dataTransfer.setData('text/plain', '');
    } catch (error) {
      // empty
    }
  };

  TreeNode.prototype.onDragEnter = function onDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.root.onDragEnter(e, this);
  };

  TreeNode.prototype.onDragOver = function onDragOver(e) {
    // todo disabled
    e.preventDefault();
    e.stopPropagation();
    this.props.root.onDragOver(e, this);
    return false;
  };

  TreeNode.prototype.onDragLeave = function onDragLeave(e) {
    e.stopPropagation();
    this.props.root.onDragLeave(e, this);
  };

  TreeNode.prototype.onDrop = function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      dragNodeHighlight: false
    });
    this.props.root.onDrop(e, this);
  };

  TreeNode.prototype.onDragEnd = function onDragEnd(e) {
    e.stopPropagation();
    this.setState({
      dragNodeHighlight: false
    });
    this.props.root.onDragEnd(e, this);
  };

  TreeNode.prototype.onExpand = function onExpand() {
    var _this2 = this;

    var callbackPromise = this.props.root.onExpand(this);
    if (callbackPromise && (typeof callbackPromise === 'undefined' ? 'undefined' : _typeof(callbackPromise)) === 'object') {
      var setLoading = function setLoading(dataLoading) {
        _this2.setState({ dataLoading: dataLoading });
      };
      setLoading(true);
      callbackPromise.then(function () {
        setLoading(false);
      }, function () {
        setLoading(false);
      });
    }
  };

  // keyboard event support


  TreeNode.prototype.onKeyDown = function onKeyDown(e) {
    e.preventDefault();
  };

  TreeNode.prototype.renderSwitcher = function renderSwitcher(props, expandedState) {
    var prefixCls = props.prefixCls;
    var switcherCls = _defineProperty({}, prefixCls + '-switcher', true);
    if (!props.showLine) {
      switcherCls[prefixCls + '-noline_' + expandedState] = true;
    } else if (props.pos === '0-0') {
      switcherCls[prefixCls + '-roots_' + expandedState] = true;
    } else {
      switcherCls[prefixCls + '-center_' + expandedState] = !props.last;
      switcherCls[prefixCls + '-bottom_' + expandedState] = props.last;
    }
    if (props.disabled) {
      switcherCls[prefixCls + '-switcher-disabled'] = true;
      return _react2["default"].createElement('span', { className: (0, _classnames2["default"])(switcherCls) });
    }
    return _react2["default"].createElement('span', { className: (0, _classnames2["default"])(switcherCls), onClick: this.onExpand });
  };

  TreeNode.prototype.renderCheckbox = function renderCheckbox(props) {
    var prefixCls = props.prefixCls;
    var checkboxCls = _defineProperty({}, prefixCls + '-checkbox', true);
    if (props.checked) {
      checkboxCls[prefixCls + '-checkbox-checked'] = true;
    } else if (props.halfChecked) {
      checkboxCls[prefixCls + '-checkbox-indeterminate'] = true;
    }
    var customEle = null;
    if (typeof props.checkable !== 'boolean') {
      customEle = props.checkable;
    }
    if (props.disabled || props.disableCheckbox) {
      checkboxCls[prefixCls + '-checkbox-disabled'] = true;
      return _react2["default"].createElement(
        'span',
        { ref: 'checkbox', className: (0, _classnames2["default"])(checkboxCls) },
        customEle
      );
    }
    return _react2["default"].createElement(
      'span',
      { ref: 'checkbox',
        className: (0, _classnames2["default"])(checkboxCls),
        onClick: this.onCheck
      },
      customEle
    );
  };

  TreeNode.prototype.renderChildren = function renderChildren(props) {
    var renderFirst = this.renderFirst;
    this.renderFirst = 1;
    var transitionAppear = true;
    if (!renderFirst && props.expanded) {
      transitionAppear = false;
    }
    var children = props.children ? (0, _toArray2["default"])(props.children) : props.children;
    var newChildren = children;
    if (children && (Array.isArray(children) && children.every(function (item) {
      return item.type && item.type.isTreeNode;
    }) || children.type && children.type.isTreeNode)) {
      var _cls;

      var cls = (_cls = {}, _defineProperty(_cls, props.prefixCls + '-child-tree', true), _defineProperty(_cls, props.prefixCls + '-child-tree-open', props.expanded), _cls);
      if (props.showLine) {
        cls[props.prefixCls + '-line'] = !props.last;
      }
      var animProps = {};
      if (props.openTransitionName) {
        animProps.transitionName = props.openTransitionName;
      } else if (_typeof(props.openAnimation) === 'object') {
        animProps.animation = (0, _objectAssign2["default"])({}, props.openAnimation);
        if (!transitionAppear) {
          delete animProps.animation.appear;
        }
      }
      newChildren = _react2["default"].createElement(
        _rcAnimate2["default"],
        _extends({}, animProps, {
          showProp: 'data-expanded',
          transitionAppear: transitionAppear,
          component: ''
        }),
        !props.expanded ? null : _react2["default"].createElement(
          'ul',
          { className: (0, _classnames2["default"])(cls), 'data-expanded': props.expanded },
          _react2["default"].Children.map(children, function (item, index) {
            return props.root.renderTreeNode(item, index, props.pos);
          }, props.root)
        )
      );
    }
    return newChildren;
  };

  TreeNode.prototype.render = function render() {
    var _iconEleCls,
        _this3 = this;

    var props = this.props;
    var prefixCls = props.prefixCls;
    var expandedState = props.expanded ? 'open' : 'close';
    var iconState = expandedState;

    var canRenderSwitcher = true;
    var content = props.title;
    var newChildren = this.renderChildren(props);
    if (!newChildren || newChildren === props.children) {
      // content = newChildren;
      newChildren = null;
      if (!props.loadData || props.isLeaf) {
        canRenderSwitcher = false;
        iconState = 'docu';
      }
    }
    // For performance, does't render children into dom when `!props.expanded` (move to Animate)
    // if (!props.expanded) {
    //   newChildren = null;
    // }

    var iconEleCls = (_iconEleCls = {}, _defineProperty(_iconEleCls, prefixCls + '-iconEle', true), _defineProperty(_iconEleCls, prefixCls + '-icon_loading', this.state.dataLoading), _defineProperty(_iconEleCls, prefixCls + '-icon__' + iconState, true), _iconEleCls);

    var selectHandle = function selectHandle() {
      var icon = props.showIcon || props.loadData && _this3.state.dataLoading ? _react2["default"].createElement('span', { className: (0, _classnames2["default"])(iconEleCls) }) : null;
      var title = _react2["default"].createElement(
        'span',
        { className: prefixCls + '-title' },
        content
      );
      var wrap = prefixCls + '-node-content-wrapper';
      var domProps = {
        className: wrap + ' ' + wrap + '-' + (iconState === expandedState ? iconState : 'normal')
      };
      if (!props.disabled) {
        if (props.selected || !props._dropTrigger && _this3.state.dragNodeHighlight) {
          domProps.className += ' ' + prefixCls + '-node-selected';
        }
        domProps.onClick = function (e) {
          e.preventDefault();
          if (props.selectable) {
            _this3.onSelect();
          }
          // not fire check event
          // if (props.checkable) {
          //   this.onCheck();
          // }
        };
        if (props.onRightClick) {
          domProps.onContextMenu = _this3.onContextMenu;
        }
        if (props.onMouseEnter) {
          domProps.onMouseEnter = _this3.onMouseEnter;
        }
        if (props.onMouseLeave) {
          domProps.onMouseLeave = _this3.onMouseLeave;
        }
        if (props.draggable) {
          domProps.className += ' draggable';
          if (ieOrEdge) {
            // ie bug!
            domProps.href = '#';
          }
          domProps.draggable = true;
          domProps['aria-grabbed'] = true;
          domProps.onDragStart = _this3.onDragStart;
        }
      }
      return _react2["default"].createElement(
        'span',
        _extends({ ref: 'selectHandle', title: typeof content === 'string' ? content : '' }, domProps),
        icon,
        title
      );
    };

    var liProps = {};
    if (props.draggable) {
      liProps.onDragEnter = this.onDragEnter;
      liProps.onDragOver = this.onDragOver;
      liProps.onDragLeave = this.onDragLeave;
      liProps.onDrop = this.onDrop;
      liProps.onDragEnd = this.onDragEnd;
    }

    var disabledCls = '';
    var dragOverCls = '';
    if (props.disabled) {
      disabledCls = prefixCls + '-treenode-disabled';
    } else if (props.dragOver) {
      dragOverCls = 'drag-over';
    } else if (props.dragOverGapTop) {
      dragOverCls = 'drag-over-gap-top';
    } else if (props.dragOverGapBottom) {
      dragOverCls = 'drag-over-gap-bottom';
    }

    var filterCls = props.filterTreeNode(this) ? 'filter-node' : '';

    var noopSwitcher = function noopSwitcher() {
      var _cls2;

      var cls = (_cls2 = {}, _defineProperty(_cls2, prefixCls + '-switcher', true), _defineProperty(_cls2, prefixCls + '-switcher-noop', true), _cls2);
      if (props.showLine) {
        cls[prefixCls + '-center_docu'] = !props.last;
        cls[prefixCls + '-bottom_docu'] = props.last;
      } else {
        cls[prefixCls + '-noline_docu'] = true;
      }
      return _react2["default"].createElement('span', { className: (0, _classnames2["default"])(cls) });
    };

    return _react2["default"].createElement(
      'li',
      _extends({}, liProps, { ref: 'li',
        className: (0, _classnames2["default"])(props.className, disabledCls, dragOverCls, filterCls)
      }),
      canRenderSwitcher ? this.renderSwitcher(props, expandedState) : noopSwitcher(),
      props.checkable ? this.renderCheckbox(props) : null,
      selectHandle(),
      newChildren
    );
  };

  return TreeNode;
}(_react2["default"].Component);

TreeNode.isTreeNode = 1;

TreeNode.propTypes = {
  prefixCls: _propTypes2["default"].string,
  disabled: _propTypes2["default"].bool,
  disableCheckbox: _propTypes2["default"].bool,
  expanded: _propTypes2["default"].bool,
  isLeaf: _propTypes2["default"].bool,
  root: _propTypes2["default"].object,
  onSelect: _propTypes2["default"].func
};

TreeNode.defaultProps = {
  title: defaultTitle
};

exports["default"] = TreeNode;
module.exports = exports['default'];

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tree = __webpack_require__(115);

var _Tree2 = _interopRequireDefault(_Tree);

var _TreeNode = __webpack_require__(116);

var _TreeNode2 = _interopRequireDefault(_TreeNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_Tree2["default"].TreeNode = _TreeNode2["default"];

exports["default"] = _Tree2["default"];
module.exports = exports['default'];

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toArray;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function toArray(children) {
  var ret = [];
  _react2['default'].Children.forEach(children, function (c) {
    ret.push(c);
  });
  return ret;
}
module.exports = exports['default'];

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map