module.exports =
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "c267");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0f6b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "1625":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "16b4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var setGlobal = __webpack_require__("c890");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "1a21":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "1a68":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("b1e6");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "1c25":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("61d8");
var exec = __webpack_require__("bba6");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "206e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("5fac");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "22f4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("dfa5");
var global = __webpack_require__("6da9");
var isForced = __webpack_require__("b775");
var redefine = __webpack_require__("40e0");
var has = __webpack_require__("b547");
var classof = __webpack_require__("b2c3");
var inheritIfRequired = __webpack_require__("4aca");
var toPrimitive = __webpack_require__("964c");
var fails = __webpack_require__("5fac");
var create = __webpack_require__("6982");
var getOwnPropertyNames = __webpack_require__("6d9a").f;
var getOwnPropertyDescriptor = __webpack_require__("b71c").f;
var defineProperty = __webpack_require__("b569").f;
var trim = __webpack_require__("d545").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "24c4":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("5fac");
var classof = __webpack_require__("b2c3");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "25c8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");

module.exports = global;


/***/ }),

/***/ "2769":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c4f0");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "2a7c":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("dfa5");
var fails = __webpack_require__("5fac");
var createElement = __webpack_require__("5f8c");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "3159":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("16b4");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "347e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7091");
var isArray = __webpack_require__("3519");
var wellKnownSymbol = __webpack_require__("e314");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "3519":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("b2c3");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "382c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("61d8");
var $reduce = __webpack_require__("da7f").left;
var arrayMethodIsStrict = __webpack_require__("206e");
var arrayMethodUsesToLength = __webpack_require__("fff7");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "3894":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7091");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "40e0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var createNonEnumerableProperty = __webpack_require__("c29f");
var has = __webpack_require__("b547");
var setGlobal = __webpack_require__("c890");
var inspectSource = __webpack_require__("3159");
var InternalStateModule = __webpack_require__("7c00");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "4387":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "44d8":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("b547");
var toIndexedObject = __webpack_require__("c442");
var indexOf = __webpack_require__("d7e0").indexOf;
var hiddenKeys = __webpack_require__("0f6b");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "4aca":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7091");
var setPrototypeOf = __webpack_require__("a3d8");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "4c8c":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("dfa5");
var definePropertyModule = __webpack_require__("b569");
var anObject = __webpack_require__("b5d1");
var objectKeys = __webpack_require__("e14d");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "56ee":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "5f8c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var isObject = __webpack_require__("7091");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "5fac":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "61d8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var getOwnPropertyDescriptor = __webpack_require__("b71c").f;
var createNonEnumerableProperty = __webpack_require__("c29f");
var redefine = __webpack_require__("40e0");
var setGlobal = __webpack_require__("c890");
var copyConstructorProperties = __webpack_require__("a8f2");
var isForced = __webpack_require__("b775");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "6693":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "6982":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("b5d1");
var defineProperties = __webpack_require__("4c8c");
var enumBugKeys = __webpack_require__("e054");
var hiddenKeys = __webpack_require__("0f6b");
var html = __webpack_require__("d6f2");
var documentCreateElement = __webpack_require__("5f8c");
var sharedKey = __webpack_require__("a80a");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "6d9a":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("44d8");
var enumBugKeys = __webpack_require__("e054");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "6da9":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("ad89")))

/***/ }),

/***/ "6e9e":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("7fbb");
var IndexedObject = __webpack_require__("24c4");
var toObject = __webpack_require__("d9ac");
var toLength = __webpack_require__("b13d");
var arraySpeciesCreate = __webpack_require__("347e");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "7091":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "767c":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "7c00":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("b84b");
var global = __webpack_require__("6da9");
var isObject = __webpack_require__("7091");
var createNonEnumerableProperty = __webpack_require__("c29f");
var objectHas = __webpack_require__("b547");
var sharedKey = __webpack_require__("a80a");
var hiddenKeys = __webpack_require__("0f6b");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "7fbb":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("4387");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "83a9":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("5fac");
var wellKnownSymbol = __webpack_require__("e314");
var V8_VERSION = __webpack_require__("e215");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "8550":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("b774").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "9224":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"vue-ziggeo\",\"on\":\"Vue 3 integration for Ziggeo video recording/playback API\",\"version\":\"3.0.3\",\"main\":\"dist/vue-ziggeo.umd.js\",\"module\":\"dist/vue-ziggeo.umd.js\",\"browser\":{\"./sfc\":\"src/main.js\"},\"author\":{\"name\":\"Ziggeo Inc\",\"email\":\"support@ziggeo.com\"},\"license\":\"Apache-2.0\",\"homepage\":\"https://ziggeo.com\",\"scripts\":{\"reinstall\":\"rm -rf node_modules/ && rm yarn.lock && yarn install\",\"build\":\"cross-env NODE_ENV=production vue build -t lib ./src/main.js\",\"postbuild\":\"cp node_modules/ziggeo-client-sdk/build/*.swf dist && cp node_modules/ziggeo-client-sdk/build/*.png dist\"},\"files\":[\"dist/*\"],\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/Ziggeo/vue-ziggeo\"},\"keywords\":[\"vuejs-component\",\"vuejs\",\"vue\",\"ziggeo\"],\"bugs\":{\"url\":\"https://github.com/Ziggeo/vue-ziggeo/issues\"},\"peerDependencies\":{\"vue\":\">=3.0.3\"},\"resolutions\":{\"browserslist\":\"4.14.4\"},\"devDependencies\":{\"@babel/cli\":\"^7.11.6\",\"@babel/core\":\"^7.11.6\",\"@vue/cli-plugin-babel\":\"~4.5.0\",\"@vue/cli-service\":\"^4.5.9\",\"@vue/compiler-sfc\":\"^3.0.3\",\"@vue/web-component-wrapper\":\"^1.2.0\",\"vue\":\"^3.0.3\",\"vue-loader\":\"^15.9.5\",\"vue-style-loader\":\"^4.1.2\",\"vue-template-compiler\":\"^2.6.12\",\"cross-env\":\"^7.0.2\",\"css-loader\":\"^4.2.2\",\"file-loader\":\"^6.0.0\",\"mini-css-extract-plugin\":\"^0.11.0\",\"rimraf\":\"^3.0.2\",\"style-loader\":\"^1.2.1\",\"url-loader\":\"^4.1.0\",\"ziggeo-client-sdk\":\"~2.35.22\"},\"dependencies\":{}}");

/***/ }),

/***/ "964c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7091");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("b5d1");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "a36f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a3d8":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("b5d1");
var aPossiblePrototype = __webpack_require__("3894");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "a80a":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("ea4d");
var uid = __webpack_require__("6693");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "a8ab":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "a8f2":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("b547");
var ownKeys = __webpack_require__("edc9");
var getOwnPropertyDescriptorModule = __webpack_require__("b71c");
var definePropertyModule = __webpack_require__("b569");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "abad":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("61d8");
var toObject = __webpack_require__("d9ac");
var nativeKeys = __webpack_require__("e14d");
var fails = __webpack_require__("5fac");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "ad89":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "adb0":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "b13d":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c4f0");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "b1e6":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("25c8");
var global = __webpack_require__("6da9");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "b2c3":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "b547":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "b569":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("dfa5");
var IE8_DOM_DEFINE = __webpack_require__("2a7c");
var anObject = __webpack_require__("b5d1");
var toPrimitive = __webpack_require__("964c");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "b5d1":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7091");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "b6cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("dfb0");
var anObject = __webpack_require__("b5d1");
var toObject = __webpack_require__("d9ac");
var toLength = __webpack_require__("b13d");
var toInteger = __webpack_require__("c4f0");
var requireObjectCoercible = __webpack_require__("767c");
var advanceStringIndex = __webpack_require__("8550");
var regExpExec = __webpack_require__("d0ab");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "b71c":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("dfa5");
var propertyIsEnumerableModule = __webpack_require__("1625");
var createPropertyDescriptor = __webpack_require__("b81d");
var toIndexedObject = __webpack_require__("c442");
var toPrimitive = __webpack_require__("964c");
var has = __webpack_require__("b547");
var IE8_DOM_DEFINE = __webpack_require__("2a7c");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "b774":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c4f0");
var requireObjectCoercible = __webpack_require__("767c");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "b775":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("5fac");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "b81d":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "b84b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var inspectSource = __webpack_require__("3159");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "bba6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("9def");
var stickyHelpers = __webpack_require__("e458");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "c267":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ZiggeoPlayer", function() { return /* reexport */ components_ZiggeoPlayer; });
__webpack_require__.d(__webpack_exports__, "ZiggeoRecorder", function() { return /* reexport */ components_ZiggeoRecorder; });

// NAMESPACE OBJECT: ./src/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "ZiggeoPlayer", function() { return components_ZiggeoPlayer; });
__webpack_require__.d(components_namespaceObject, "ZiggeoRecorder", function() { return components_ZiggeoRecorder; });

// CONCATENATED MODULE: /Users/rashad/.config/yarn/global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("a8ab")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/ziggeo-client-sdk/build/ziggeo.css
var ziggeo = __webpack_require__("a36f");

// EXTERNAL MODULE: ./node_modules/ziggeo-client-sdk/build/ziggeo.js
var build_ziggeo = __webpack_require__("f518");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: /Users/rashad/.config/yarn/global/node_modules/thread-loader/dist/cjs.js!/Users/rashad/.config/yarn/global/node_modules/babel-loader/lib??ref--12-1!/Users/rashad/.config/yarn/global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/Users/rashad/.config/yarn/global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/rashad/.config/yarn/global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ZiggeoPlayer/ZiggeoPlayer.vue?vue&type=template&id=37833348&bindings={}

var _hoisted_1 = {
  ref: "ziggeoPlayer"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_1, null, 512);
}
// CONCATENATED MODULE: ./src/components/ZiggeoPlayer/ZiggeoPlayer.vue?vue&type=template&id=37833348&bindings={}

// EXTERNAL MODULE: /Users/rashad/.config/yarn/global/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("eae4");

// EXTERNAL MODULE: /Users/rashad/.config/yarn/global/node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("382c");

// EXTERNAL MODULE: /Users/rashad/.config/yarn/global/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("abad");

// EXTERNAL MODULE: /Users/rashad/.config/yarn/global/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("1c25");

// EXTERNAL MODULE: /Users/rashad/.config/yarn/global/node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("b6cf");

// CONCATENATED MODULE: /Users/rashad/.config/yarn/global/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: /Users/rashad/.config/yarn/global/node_modules/@babel/runtime/helpers/esm/objectSpread2.js


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// EXTERNAL MODULE: /Users/rashad/.config/yarn/global/node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("22f4");

// CONCATENATED MODULE: ./src/components/constants.js

// ####################### Application Events #############################
// application.embed_event.on..
var ziggeoApplicationEvents = {
  onError: Function,
  onReady: Function
};
var globalOptions = {
  'auto-install-vue': {
    type: Boolean,
    "default": true
  }
}; // ####################### Player/Recorder Attributes #############################
// When using HTML embed methods, all parameters should be prefixed with ziggeo-
// https://ziggeo.com/docs/sdks/javascript/browser-integration/parameters#javascript-revision=v1-r29&javascript-version=v2

var ziggeoRecorderAttributesPropTypes = {
  // Presentational parameters
  'width': {
    type: [Number, String],
    "default": 640
  },
  'height': {
    type: [Number, String],
    "default": 480
  },
  'responsive': Boolean,
  'faceoutline': Boolean,
  'skipinitial': Boolean,
  'skipinitialonrerecord': Boolean,
  'picksnapshots': {
    type: Boolean,
    "default": true
  },
  'camerafacefront': Boolean,
  'countdown': {
    type: [Number, Function],
    "default": 3
  },
  'stream-width': Number,
  'stream-height': Number,
  'nofullscreen': Boolean,
  'snapshotmax': {
    type: Number,
    "default": 15
  },
  'gallerysnapshots': {
    type: Number,
    "default": 3
  },
  'localplayback': Boolean,
  'stretch': Boolean,
  'theme': {
    type: String,
    "default": 'default'
  },
  'themecolor': String,
  'autorecord': Boolean,
  'primaryrecord': {
    type: Boolean,
    "default": true
  },
  'flip-camera': Boolean,
  'early-rerecord': Boolean,
  'sharevideo': Array,
  // Security parameters
  'server-auth': String,
  'client-auth': String,
  'expiration-days': Number,
  // Video management parameters
  'recordingwidth': {
    type: Number,
    "default": 640
  },
  'recordingheight': {
    type: Number,
    "default": 480
  },
  'video': String,
  'effect-profile': Array,
  'auto-crop': Boolean,
  'auto-pad': Boolean,
  '_key': String,
  // `key` is Vue reserved keyword never use without underscore prefix
  'timelimit': Number,
  'timeminlimit': Number,
  'video-profile': String,
  'meta-profile': String,
  'enforce-duration': Boolean,
  'noaudio': Boolean,
  'source': String,
  'framerate': {
    type: Number,
    "default": 25
  },
  'videobitrate': {
    type: [Number, String],
    "default": 'auto'
  },
  'audiobitrate': {
    type: [Number, String],
    "default": 'auto'
  },
  'microphone-volume': {
    type: Number,
    "default": 1
  },
  'custom-covershots': Boolean,
  // Data parameters
  'tags': Array,
  'custom-data': Object,
  'title': String,
  'description': String,
  // Operational parameters
  'manual_upload': Boolean,
  'rerecordable': Boolean,
  'multistreamreversable': {
    type: Boolean,
    "default": true
  },
  'multistreamdraggable': {
    type: Boolean,
    "default": true
  },
  'multistreamresizeable': {
    type: Boolean,
    "default": false
  },
  'addstreamproportional': {
    type: Boolean,
    "default": true
  },
  'addstreampositionx': {
    type: Number,
    "default": 5
  },
  'addstreampositiony': {
    type: Number,
    "default": 5
  },
  'addstreampositionwidth': {
    type: Number,
    "default": 120
  },
  'addstreampositionheight': {
    type: Number,
    "default": 95
  },
  'addstreamminwidth': {
    type: Number,
    "default": 120
  },
  'addstreamminheight': {
    type: Number,
    "default": 95
  },
  'allowupload': {
    type: Boolean,
    "default": true
  },
  'allowrecord': {
    type: Boolean,
    "default": true
  },
  'allowscreen': {
    type: Boolean,
    "default": false
  },
  'allowmultistreams': {
    type: Boolean,
    "default": false
  },
  'force-overwrite': {
    type: Boolean,
    "default": true
  },
  'display-timer': {
    type: Boolean,
    "default": true
  },
  'autoplay': Boolean,
  'recordings': Number,
  'allowedextensions': Array,
  'application': String,
  'filesizelimit': Number,
  'flashincognitosupport': Boolean,
  'simulate': Boolean,
  'allowcustomupload': Boolean,
  'manual-upload': Boolean,
  'createthumbnails': Boolean,
  'showsettingsmenu': Boolean,
  // As a property show/hide from users
  'hidevolumebar': Boolean,
  'recordermode': {
    type: Boolean,
    "default": true
  },
  'forceflash': Boolean,
  'noflash': Boolean,
  'manualsubmit': Boolean,
  'initialseek': Number,
  'playfullscreenonmobile': Boolean,
  'playwhenvisible': Boolean,
  'playonclick': Boolean,
  'disableseeking': Boolean,
  'disablepause': Boolean,
  'pauseonplay': Boolean,
  'onlyaudio': Boolean,
  'airplay': Boolean,
  'chromecast': Boolean,
  'preload': Boolean,
  'delete-old-streams': Boolean,
  'lazy-application': Boolean,
  'allowcancel': Boolean,
  'orientation': Boolean,
  'popup': Boolean,
  'popup-stretch': Boolean,
  'framerate-warning': String,
  'snapshottype': String,
  "rtmpstreamtype": {
    type: String,
    "default": 'mp4'
  },
  "rtmpmicrophonecodec": {
    type: String,
    "default": 'speex'
  },
  // Form and HTML parameters
  'input-bind': String,
  'form-accept': String,
  // Application Options Container
  applicationOptions: Object,
  screenOptions: {
    type: Object,
    "default": function _default() {
      return {
        chrome_extension_id: "meoefjkcilgjlkibnjjlfdgphacbeglk",
        chrome_extension_install_link: "https://chrome.google.com/webstore/detail/meoefjkcilgjlkibnjjlfdgphacbeglk",
        opera_extension_id: "dnnolmnenehhgplebjhbcmfdbaabkepm",
        opera_extension_install_link: "https://addons.opera.com/en/extensions/details/3d46d4c36fefe97e76622c54b2eb6ea1d5406767"
      };
    }
  }
};
var ziggeoPlayerAttributesPropTypes = {
  // Presentational parameters
  'width': {
    type: [Number, String],
    "default": 640
  },
  'height': {
    type: [Number, String],
    "default": 480
  },
  'allowpip': Boolean,
  'responsive': Boolean,
  'skipinitial': Boolean,
  'picksnapshots': Boolean,
  'playlist': [Array, String],
  'hidebarafter': {
    type: Number,
    "default": 5000 // in milliseconds

  },
  'skipseconds': {
    type: Number,
    "default": 5 // in seconds

  },
  'tracktagsstyled': {
    type: Boolean,
    "default": true
  },
  'hideoninactivity': {
    type: Boolean,
    "default": true
  },
  'countdown': [Number, Function],
  'stretch': Boolean,
  'popup-stretch': Boolean,
  'preventinteraction': Boolean,
  'stretchwidth': Boolean,
  'stretchheight': Boolean,
  'stream-width': Number,
  'stream-height': Number,
  'nofullscreen': Boolean,
  'localplayback': Boolean,
  '_key': String,
  // `key` is Vue reserved keyword never use without underscore prefix
  'theme': {
    type: String,
    "default": 'default'
  },
  'themecolor': {
    type: String,
    "default": 'default'
  },
  'sharevideo': Array,
  // Security parameters
  'server-auth': String,
  'client-auth': String,
  // Video management parameters
  'video': {
    type: String,
    required: true
  },
  'stream': String,
  'effect-profile': Array,
  'video-profile': String,
  'noaudio': Boolean,
  'poster': String,
  'source': String,
  'framerate': Number,
  'videobitrate': [Number, String],
  'audiobitrate': [Number, String],
  // Data parameters
  'tags': Array,
  'custom-data': Object,
  'title': String,
  'description': String,
  // Operational parameters
  'autoplay': Boolean,
  'application': String,
  'flashincognitosupport': Boolean,
  'forceflash': Boolean,
  'noflash': Boolean,
  'initialseek': Number,
  'playfullscreenonmobile': Boolean,
  'playwhenvisible': Boolean,
  'playonclick': Boolean,
  'disableseeking': Boolean,
  'disablepause': Boolean,
  'pauseonplay': Boolean,
  'onlyaudio': Boolean,
  'airplay': Boolean,
  'chromecast': Boolean,
  'preload': Boolean,
  'lazy-application': Boolean,
  // Form and HTML parameters
  'input-bind': String,
  'form-accept': String
}; // #######################  DEFAULTS  ##################################
// #######################  EMBEDDING EVENTS #############################
// Javascript Embed Recorder Events
// https://ziggeo.com/docs/sdks/javascript/browser-interaction/application-embedding-events#javascript-revision=v1-r29
// application.embed_event.on..

var ziggeoRecorderEmbeddingEventsPropTypes = {
  attached: Function,
  loaded: Function,
  bound: Function,
  playing: Function,
  paused: Function,
  ended: Function,
  seek: Function,
  error: Function,
  manually_submitted: Function,
  recording_progress: Function,
  uploaded: Function,
  upload_selected: Function,
  recording: Function,
  uploading: Function,
  rerecord: Function,
  countdown: [Number, Function],
  progress: Function,
  upload_progress: Function,
  processing: Function,
  processed: Function,
  access_forbidden: Function,
  access_granted: Function,
  camera_unresponsive: Function,
  verified: Function,
  no_camera: Function,
  ready_to_record: Function,
  ready_to_play: Function,
  recording_stopped: Function,
  stopped: Function,
  has_camera: Function,
  camera_signal: Function,
  camerahealth: Function,
  camera_nosignal: Function,
  no_microphone: Function,
  has_microphone: Function,
  microphonehealth: Function,
  "invoke-skip": Function,
  "select-image": Function,
  "pause-google-cast": Function,
  "play-google-cast": Function,
  "change-google-cast-volume": Function
};
var ziggeoPlayerEmbeddingEventsPropTypes = {
  attached: Function,
  loaded: Function,
  playing: Function,
  paused: Function,
  ended: Function,
  error: Function,
  seek: Function,
  stopped: Function,
  ready_to_play: Function
}; // #######################  ZIGGEO METHODS  ##############################
// Methods
// https://ziggeo.com/docs/sdks/javascript/browser-interaction/methods#javascript-revision=v1-r29&javascript-version=v2

var ziggeoMethods = {
  play: Function,
  record: Function,
  upload: Function,
  rerecord: Function,
  stop: Function,
  stopRecord: Function,
  hidePopup: Function,
  reset: Function,
  lightLevel: Function,
  soundLevel: Function,
  averageFrameRate: Function,
  isRecording: Function,
  width: Function,
  height: Function,
  isFlash: Function,
  videoWidth: Function,
  videoHeight: Function,
  destroy: Function
}; // #######################    ##############################
// Common Events
// https://ziggeo.com/docs/sdks/javascript/browser-interaction/events#javascript-revision=v1-r29&javascript-version=v2

var ziggeoApiEventsPropTypes = {
  onEventPlay: Function,
  onEventPause: Function,
  onEventStop: Function,
  onEventErrorPlayer: Function,
  onEventSubmitted: Function,
  onEventPlayerSeek: Function,
  onEventManuallySubmitted: Function,
  onEventUploaded: Function,
  onEventUploadSelected: Function,
  onEventRecording: Function,
  onEventUploading: Function,
  onEventFinished: Function,
  onEventDiscarded: Function,
  onEventErrorRecorder: Function,
  onEventCountdown: Function,
  onEventElapsed: Function,
  onEventUploadProgress: Function,
  onEventProcessingProgress: Function,
  onEventReadyToRecord: Function,
  onEventReadyToPlay: Function,
  onEventAccessForbidden: Function,
  onEventAccessGranted: Function,
  onEventAccessRevoked: Function,
  onEventRecorderProcessed: Function
};
var commonApplicationOptions = {
  'auth': {
    type: Boolean,
    "default": false
  },
  'debug': {
    type: Boolean,
    "default": false
  },
  'testing_application': {
    type: Boolean,
    "default": false
  }
}; // #######################  Recorder Application Options  ##############################

var recorderApplicationOptions = {
  'webrtc_streaming': {
    type: Boolean,
    "default": false
  },
  'webrtc_streaming_if_necessary': {
    type: Boolean,
    "default": true
  },
  'webrtc_on_mobile': {
    type: Boolean,
    "default": true
  },
  'chrome_extension_id': {
    type: String,
    "default": 'meoefjkcilgjlkibnjjlfdgphacbeglk'
  },
  'chrome_extension_install_link': {
    type: String,
    "default": 'https://chrome.google.com/webstore/detail/meoefjkcilgjlkibnjjlfdgphacbeglk'
  },
  'opera_extension_id': {
    type: String,
    "default": 'dnnolmnenehhgplebjhbcmfdbaabkepm'
  },
  'opera_extension_install_link': {
    type: String,
    "default": 'https://addons.opera.com/en/extensions/details/3d46d4c36fefe97e76622c54b2eb6ea1d5406767'
  }
};
// CONCATENATED MODULE: /Users/rashad/.config/yarn/global/node_modules/thread-loader/dist/cjs.js!/Users/rashad/.config/yarn/global/node_modules/babel-loader/lib??ref--12-1!/Users/rashad/.config/yarn/global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/rashad/.config/yarn/global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ZiggeoPlayer/ZiggeoPlayer.vue?vue&type=script&lang=js







/* eslint-disable */


var ZiggeoPlayer = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "ZiggeoPlayer",
  props: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
    apiKey: {
      type: String,
      required: true,
      "default": ''
    }
  }, globalOptions), commonApplicationOptions), ziggeoPlayerAttributesPropTypes), ziggeoPlayerEmbeddingEventsPropTypes),
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var player = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["markRaw"])({});
    var ziggeoPlayer = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);

    var _ziggeoAttributes = function _ziggeoAttributes() {
      return Object.keys(props).filter(function (k) {
        return ziggeoPlayerAttributesPropTypes[k];
      }).reduce(function (p, k) {
        p[k.replace(/^_/g, '')] = props[k];
        return p;
      }, {});
    };

    var _ziggeoAppOptions = function _ziggeoAppOptions() {
      var applicationOptions = props.applicationOptions;
      if (applicationOptions) return _objectSpread2(_objectSpread2({}, commonApplicationOptions), applicationOptions);else return _objectSpread2({}, commonApplicationOptions);
    };

    var options = _ziggeoAttributes(); // Could be also used in onBeforeMount


    var ziggeoApp = ZiggeoApi.V2.Application.instanceByToken(props.apiKey, _ziggeoAppOptions());
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      var playerElement = ziggeoPlayer.value;

      if (playerElement && options) {
        player.value = new ZiggeoApi.V2.Player({
          element: playerElement,
          attrs: options
        });
        var playerObj = player.value;
        ziggeoApp.on("ready", function () {
          emit("playerReady", playerObj);
        }); // access the DOM or template refs

        if (playerObj) {
          playerObj.activate();
          Object.keys(ziggeoPlayerEmbeddingEventsPropTypes).reduce(function (memo, propName) {
            playerObj.on(propName, function (args) {
              emit(propName, playerObj, args);
            });
          }, {});
        }
      }
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onDeactivated"])(function () {
      if (typeof player.value !== 'undefined') player.value.destroy();
    });
    return {
      ziggeoPlayer: ziggeoPlayer
    };
  } // render: function (createElement) {
  //   return createElement('div', { ref: 'root' })
  // }
  // render: h => h('div', { ref: 'ziggeoPlayer' })

});
/* harmony default export */ var ZiggeoPlayervue_type_script_lang_js = (ZiggeoPlayer);
// CONCATENATED MODULE: ./src/components/ZiggeoPlayer/ZiggeoPlayer.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/ZiggeoPlayer/ZiggeoPlayer.vue



ZiggeoPlayervue_type_script_lang_js.render = render

/* harmony default export */ var ZiggeoPlayer_ZiggeoPlayer = (ZiggeoPlayervue_type_script_lang_js);
// EXTERNAL MODULE: /Users/rashad/.config/yarn/global/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("c4e9");

// CONCATENATED MODULE: ./src/utils/index.js

var registerComponent = function registerComponent(instance, component) {
  if (component) instance.component(component.name || "", component);
};
var registerComponentProgrammatic = function registerComponentProgrammatic(instance, property, component) {
  if (!instance.config.globalProperties.$test) instance.config.globalProperties.$test = {};
  instance.config.globalProperties.$test[property] = component;
};
// CONCATENATED MODULE: ./src/components/ZiggeoPlayer/index.js
// export { default } from './ZiggeoPlayer.vue';


var Plugin = {
  install: function install(vue) {
    registerComponent(vue, ZiggeoPlayer_ZiggeoPlayer);
  }
};
/* harmony default export */ var components_ZiggeoPlayer = (Plugin);

// CONCATENATED MODULE: /Users/rashad/.config/yarn/global/node_modules/thread-loader/dist/cjs.js!/Users/rashad/.config/yarn/global/node_modules/babel-loader/lib??ref--12-1!/Users/rashad/.config/yarn/global/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!/Users/rashad/.config/yarn/global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/rashad/.config/yarn/global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ZiggeoRecorder/ZiggeoRecorder.vue?vue&type=template&id=46c99047&bindings={}

var ZiggeoRecordervue_type_template_id_46c99047_bindings_hoisted_1 = {
  ref: "ziggeoRecorder"
};
function ZiggeoRecordervue_type_template_id_46c99047_bindings_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", ZiggeoRecordervue_type_template_id_46c99047_bindings_hoisted_1, null, 512);
}
// CONCATENATED MODULE: ./src/components/ZiggeoRecorder/ZiggeoRecorder.vue?vue&type=template&id=46c99047&bindings={}

// CONCATENATED MODULE: /Users/rashad/.config/yarn/global/node_modules/thread-loader/dist/cjs.js!/Users/rashad/.config/yarn/global/node_modules/babel-loader/lib??ref--12-1!/Users/rashad/.config/yarn/global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/rashad/.config/yarn/global/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ZiggeoRecorder/ZiggeoRecorder.vue?vue&type=script&lang=js







/* eslint-disable */


var ZiggeoRecorder = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "ZiggeoRecorder",
  props: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
    apiKey: {
      type: String,
      required: true,
      "default": ''
    }
  }, globalOptions), commonApplicationOptions), recorderApplicationOptions), ziggeoRecorderAttributesPropTypes), ziggeoRecorderEmbeddingEventsPropTypes),
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var recorder = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["markRaw"])({});
    var ziggeoRecorder = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);

    var _ziggeoAttributes = function _ziggeoAttributes() {
      return Object.keys(props).filter(function (k) {
        return ziggeoRecorderAttributesPropTypes[k];
      }).reduce(function (p, k) {
        p[k.replace(/^_/g, '')] = props[k];
        return p;
      }, {});
    };

    var _ziggeoAppOptions = function _ziggeoAppOptions() {
      var applicationOptions = props.applicationOptions;
      if (applicationOptions) return _objectSpread2(_objectSpread2(_objectSpread2({}, commonApplicationOptions), recorderApplicationOptions), applicationOptions);else return _objectSpread2(_objectSpread2({}, commonApplicationOptions), recorderApplicationOptions);
    };

    var options = _ziggeoAttributes(); // Could be also used in onBeforeMount


    var ziggeoApp = ZiggeoApi.V2.Application.instanceByToken(props.apiKey, _ziggeoAppOptions());
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      var recorderElement = ziggeoRecorder.value;

      if (recorderElement && options) {
        recorder.value = new ZiggeoApi.V2.Recorder({
          element: recorderElement,
          attrs: options
        });
        var recorderObj = recorder.value;
        ziggeoApp.on("ready", function () {
          emit("recorderReady", recorderObj);
        }); // access the DOM or template refs

        if (recorderObj) {
          recorderObj.activate();
          Object.keys(ziggeoRecorderEmbeddingEventsPropTypes).reduce(function (memo, propName) {
            recorderObj.on(propName, function (args) {
              emit(propName, recorderObj, args);
            });
          }, {});
        }
      }
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onDeactivated"])(function () {
      if (typeof recorder.value !== 'undefined') recorder.value.destroy();
    });
    return {
      ziggeoRecorder: ziggeoRecorder
    };
  }
});
/* harmony default export */ var ZiggeoRecordervue_type_script_lang_js = (ZiggeoRecorder);
// CONCATENATED MODULE: ./src/components/ZiggeoRecorder/ZiggeoRecorder.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/ZiggeoRecorder/ZiggeoRecorder.vue



ZiggeoRecordervue_type_script_lang_js.render = ZiggeoRecordervue_type_template_id_46c99047_bindings_render

/* harmony default export */ var ZiggeoRecorder_ZiggeoRecorder = (ZiggeoRecordervue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/ZiggeoRecorder/index.js


var ZiggeoRecorder_Plugin = {
  install: function install(vue) {
    registerComponent(vue, ZiggeoRecorder_ZiggeoRecorder);
  }
};
/* harmony default export */ var components_ZiggeoRecorder = (ZiggeoRecorder_Plugin);

// CONCATENATED MODULE: ./src/components/index.js



// CONCATENATED MODULE: ./src/utils/config.js
/* eslint-disable */
var config = {};
var VueInstance;

var setVueInstance = function setVueInstance(instance) {
  VueInstance = instance;
};
// CONCATENATED MODULE: ./src/main.js
/* eslint-disable */
var VERSION = __webpack_require__("9224").version;






var main_install = function install(instance) {
  setVueInstance(instance);

  for (var componentKey in components_namespaceObject) {
    instance.use(components_namespaceObject[componentKey]);
  }
};

var main_ziggeo = {
  VERSION: VERSION,
  install: main_install
};
/* harmony default export */ var main = (main_ziggeo);
 // if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use(install);
//   if (install.installed) {
//     install.installed = false;
//   }
// }
// CONCATENATED MODULE: /Users/rashad/.config/yarn/global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main);



/***/ }),

/***/ "c29f":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("dfa5");
var definePropertyModule = __webpack_require__("b569");
var createPropertyDescriptor = __webpack_require__("b81d");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "c442":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("24c4");
var requireObjectCoercible = __webpack_require__("767c");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "c4e9":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("dfa5");
var defineProperty = __webpack_require__("b569").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "c4f0":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "c890":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var createNonEnumerableProperty = __webpack_require__("c29f");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "cf53":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("dbad");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "d0ab":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("b2c3");
var regexpExec = __webpack_require__("bba6");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "d545":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("767c");
var whitespaces = __webpack_require__("d6c9");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "d6c9":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "d6f2":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("b1e6");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "d7e0":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("c442");
var toLength = __webpack_require__("b13d");
var toAbsoluteIndex = __webpack_require__("2769");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "d9ac":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("767c");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "da7f":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("4387");
var toObject = __webpack_require__("d9ac");
var IndexedObject = __webpack_require__("24c4");
var toLength = __webpack_require__("b13d");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "dbad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("5fac");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "dfa5":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("5fac");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "dfb0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("1c25");
var redefine = __webpack_require__("40e0");
var fails = __webpack_require__("5fac");
var wellKnownSymbol = __webpack_require__("e314");
var regexpExec = __webpack_require__("bba6");
var createNonEnumerableProperty = __webpack_require__("c29f");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "e054":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "e14d":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("44d8");
var enumBugKeys = __webpack_require__("e054");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e215":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var userAgent = __webpack_require__("1a68");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "e314":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var shared = __webpack_require__("ea4d");
var has = __webpack_require__("b547");
var uid = __webpack_require__("6693");
var NATIVE_SYMBOL = __webpack_require__("dbad");
var USE_SYMBOL_AS_UID = __webpack_require__("cf53");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "e458":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("5fac");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "ea4d":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("adb0");
var store = __webpack_require__("16b4");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "eae4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("61d8");
var $filter = __webpack_require__("6e9e").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("83a9");
var arrayMethodUsesToLength = __webpack_require__("fff7");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "edc9":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("b1e6");
var getOwnPropertyNamesModule = __webpack_require__("6d9a");
var getOwnPropertySymbolsModule = __webpack_require__("1a21");
var anObject = __webpack_require__("b5d1");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "f518":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/*!
ziggeo-client-sdk - v2.35.22 - 2020-06-18
Copyright (c) Ziggeo
Closed Source Software License.
*/

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("ad89"), __webpack_require__("56ee")(module)))

/***/ }),

/***/ "fff7":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("dfa5");
var fails = __webpack_require__("5fac");
var has = __webpack_require__("b547");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ })

/******/ });
//# sourceMappingURL=vue-ziggeo.common.js.map