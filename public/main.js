(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/es6/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es6/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ../modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ../modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ../modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ../modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ../modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ../modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/es7/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es7/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es7.reflect.define-metadata */ "./node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.delete-metadata */ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata */ "./node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.has-metadata */ "./node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.has-own-metadata */ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.metadata */ "./node_modules/core-js/modules/es7.reflect.metadata.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
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
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
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

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
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

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(/*! ./es6.map */ "./node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
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

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var rApply = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./es6.set */ "./node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    var checkDuplicate = global[('__zone_symbol__forceDuplicateZoneCheck')] === true;
    if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
        }
        else {
            return global['Zone'];
        }
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                    throw Error('Already loaded patch: ' + name);
                }
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = undefined;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) { return delegate.hasTask(target, hasTaskState); },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
        },
        onCancelTask: function (delegate, _, target, task) { return delegate.cancelTask(target, task); }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec &&
                (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? ' or \'' + fromState2 + '\'' : '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                var nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                if (!nativeThen) {
                    // native Promise is not patchable, we need to use `then` directly
                    // issue 1078
                    nativeThen = nativeMicroTaskQueuePromise['then'];
                }
                nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return []; },
        patchThen: function () { return noop; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                    [] :
                    [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var e_1, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                promise && (promise = null || resolve(value));
            }
            function onReject(error) {
                promise && (promise = null || reject(error));
            }
            try {
                for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                    var value = values_1_1.value;
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(onResolve, onReject);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var e_2, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            // Start at 2 to prevent prematurely resolving if .then is called immediately.
            var unresolvedCount = 2;
            var valueIndex = 0;
            var resolvedValues = [];
            var _loop_2 = function (value) {
                if (!isThenable(value)) {
                    value = this_1.resolve(value);
                }
                var curValueIndex = valueIndex;
                value.then(function (value) {
                    resolvedValues[curValueIndex] = value;
                    unresolvedCount--;
                    if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                    }
                }, reject);
                unresolvedCount++;
                valueIndex++;
            };
            var this_1 = this;
            try {
                for (var values_2 = __values(values), values_2_1 = values_2.next(); !values_2_1.done; values_2_1 = values_2.next()) {
                    var value = values_2_1.value;
                    _loop_2(value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (values_2_1 && !values_2_1.done && (_a = values_2.return)) _a.call(values_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // Make the unresolvedCount zero-based again.
            unresolvedCount -= 2;
            if (unresolvedCount === 0) {
                resolve(resolvedValues);
            }
            return promise;
        };
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    if (NativePromise) {
        patchThen(NativePromise);
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('fetch', function (global, Zone, api) {
    var fetch = global['fetch'];
    var ZoneAwarePromise = global.Promise;
    var symbolThenPatched = api.symbol('thenPatched');
    var fetchTaskScheduling = api.symbol('fetchTaskScheduling');
    var fetchTaskAborting = api.symbol('fetchTaskAborting');
    if (typeof fetch !== 'function') {
        return;
    }
    var OriginalAbortController = global['AbortController'];
    var supportAbort = typeof OriginalAbortController === 'function';
    var abortNative = null;
    if (supportAbort) {
        global['AbortController'] = function () {
            var abortController = new OriginalAbortController();
            var signal = abortController.signal;
            signal.abortController = abortController;
            return abortController;
        };
        abortNative = api.patchMethod(OriginalAbortController.prototype, 'abort', function (delegate) { return function (self, args) {
            if (self.task) {
                return self.task.zone.cancelTask(self.task);
            }
            return delegate.apply(self, args);
        }; });
    }
    var placeholder = function () { };
    global['fetch'] = function () {
        var _this = this;
        var args = Array.prototype.slice.call(arguments);
        var options = args.length > 1 ? args[1] : null;
        var signal = options && options.signal;
        return new Promise(function (res, rej) {
            var task = Zone.current.scheduleMacroTask('fetch', placeholder, args, function () {
                var fetchPromise;
                var zone = Zone.current;
                try {
                    zone[fetchTaskScheduling] = true;
                    fetchPromise = fetch.apply(_this, args);
                }
                catch (error) {
                    rej(error);
                    return;
                }
                finally {
                    zone[fetchTaskScheduling] = false;
                }
                if (!(fetchPromise instanceof ZoneAwarePromise)) {
                    var ctor = fetchPromise.constructor;
                    if (!ctor[symbolThenPatched]) {
                        api.patchThen(ctor);
                    }
                }
                fetchPromise.then(function (resource) {
                    if (task.state !== 'notScheduled') {
                        task.invoke();
                    }
                    res(resource);
                }, function (error) {
                    if (task.state !== 'notScheduled') {
                        task.invoke();
                    }
                    rej(error);
                });
            }, function () {
                if (!supportAbort) {
                    rej('No AbortController supported, can not cancel fetch');
                    return;
                }
                if (signal && signal.abortController && !signal.aborted &&
                    typeof signal.abortController.abort === 'function' && abortNative) {
                    try {
                        Zone.current[fetchTaskAborting] = true;
                        abortNative.call(signal.abortController);
                    }
                    finally {
                        Zone.current[fetchTaskAborting] = false;
                    }
                }
                else {
                    rej('cancel fetch need a AbortController.signal');
                }
            });
            if (signal && signal.abortController) {
                signal.abortController.task = task;
            }
        });
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result;
    if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        var errorEvent = event;
        result = listener &&
            listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
        if (result === true) {
            event.preventDefault();
        }
    }
    else {
        result = listener && listener.apply(this, arguments);
        if (result != undefined && !result) {
            event.preventDefault();
        }
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function copySymbolProperties(src, dest) {
    if (typeof Object.getOwnPropertySymbols !== 'function') {
        return;
    }
    var symbols = Object.getOwnPropertySymbols(src);
    symbols.forEach(function (symbol) {
        var desc = Object.getOwnPropertyDescriptor(src, symbol);
        Object.defineProperty(dest, symbol, {
            get: function () {
                return src[symbol];
            },
            set: function (value) {
                if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                    // if src[symbol] is not writable or not have a setter, just return
                    return;
                }
                src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
        });
    });
}
var shouldCopySymbolProperties = false;

function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate = null;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
            if (shouldCopySymbolProperties) {
                copySymbolProperties(delegate, proto[name]);
            }
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIE() {
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
        }
    }
    catch (error) {
    }
    return false;
}
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
        return ieOrEdge;
    }
    catch (error) {
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.apply(this[ORIGINAL_DELEGATE_SYMBOL], arguments);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.apply(nativePromise, arguments);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.apply(nativeError, arguments);
                }
            }
        }
        return originalFunctionToString.apply(this, arguments);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.apply(this, arguments);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        var eventNameToString = patchOptions && patchOptions.eventNameToString;
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        function checkIsPassive(task) {
            if (!passiveSupported && typeof taskData.options !== 'boolean' &&
                typeof taskData.options !== 'undefined' && taskData.options !== null) {
                // options is a non-null non-undefined object
                // passive is not supported
                // don't pass options as object
                // just pass capture as a boolean
                task.options = !!taskData.options.capture;
                taskData.options = task.options;
            }
        }
        var customScheduleGlobal = function (task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var eventName = arguments[0];
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                if (isNode && eventName === 'uncaughtException') {
                    // don't patch uncaughtException of nodejs to prevent endless loop
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
                    var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource +
                        (eventNameToString ? eventNameToString(eventName) : eventName);
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                if (!(!passiveSupported && typeof task.options === 'boolean')) {
                    // if not support passive, and we pass an option object
                    // to addEventListener, we should save the options to task
                    task.options = options;
                }
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                        undefined,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (desc && isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange', 'resume'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    if (canPatchViaPropertyDescriptor()) {
        var ignoreProperties = _global['__Zone_ignore_on_properties'];
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            var internalWindow = window;
            var ignoreErrorProperties = isIE ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof internalWindow['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
            if (HTMLMarqueeElement_1) {
                patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
            }
            var Worker_1 = internalWindow['Worker'];
            if (Worker_1) {
                patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
            }
        }
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        var XMLHttpRequestEventTarget_1 = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget_1) {
            patchFilteredProperties(XMLHttpRequestEventTarget_1 && XMLHttpRequestEventTarget_1.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }
    else {
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents();
        patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
    }
}
function canPatchViaPropertyDescriptor() {
    if ((isBrowser || isMix) && !ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = zoneSymbol('fake');
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
var unboundKey = zoneSymbol('unbound');
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents() {
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    api.patchEventTarget = patchEventTarget;
    return true;
}
function patchEvent(global, api) {
    patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(target, targetName, method, callbacks) {
    var symbol = Zone.__symbol__(method);
    if (target[symbol]) {
        return;
    }
    var nativeDelegate = target[symbol] = target[method];
    target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = targetName + "." + method + "::" + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = wrapWithCurrentZone(descriptor.value, source);
                        _redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return nativeDelegate.call(target, name, opts, options);
    };
    attachOriginToPatched(target[method], nativeDelegate);
}
function registerElementPatch(_global) {
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    patchCallbacks(document, 'Document', 'registerElement', callbacks);
}
function patchCustomElements(_global) {
    if ((!isBrowser && !isMix) || !('customElements' in _global)) {
        return;
    }
    var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    patchCallbacks(_global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    // load blackListEvents from global
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
});
Zone.__load_patch('customElements', function (global, Zone, api) {
    registerElementPatch(global);
    patchCustomElements(global);
});
Zone.__load_patch('canvas', function (global) {
    var HTMLCanvasElement = global['HTMLCanvasElement'];
    if (typeof HTMLCanvasElement !== 'undefined' && HTMLCanvasElement.prototype &&
        HTMLCanvasElement.prototype.toBlob) {
        patchMacroTask(HTMLCanvasElement.prototype, 'toBlob', function (self, args) {
            return { name: 'HTMLCanvasElement.toBlob', target: self, cbIdx: 0, args: args };
        });
    }
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
    function patchXHR(window) {
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget_1) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        // check whether the xhr has registered onload listener
                        // if that is the case, the task should invoke after all
                        // onload listeners finish.
                        var loadTasks = target['__zone_symbol__loadfalse'];
                        if (loadTasks && loadTasks.length > 0) {
                            var oriInvoke_1 = task.invoke;
                            task.invoke = function () {
                                // need to load the tasks again, because in other
                                // load listener, they may remove themselves
                                var loadTasks = target['__zone_symbol__loadfalse'];
                                for (var i = 0; i < loadTasks.length; i++) {
                                    if (loadTasks[i] === task) {
                                        loadTasks.splice(i, 1);
                                    }
                                }
                                if (!data.aborted && task.state === SCHEDULED) {
                                    oriInvoke_1.call(task);
                                }
                            };
                            loadTasks.push(task);
                        }
                        else {
                            task.invoke();
                        }
                    }
                    else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                        // error occurs when xhr.send()
                        target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
            }
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                    task.state === SCHEDULED) {
                    // xhr request throw error when send
                    // we should invoke task instead of leaving a scheduled
                    // pending macroTask
                    task.invoke();
                }
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self, args) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n    /*margin-top: 50px;*/\n    padding: 1rem 1.5rem;\n    font-family: 'Montserrat', serif;\n    max-width: 1468px;\n    max-height: 931px;\n    margin: auto;\n}\n\n.is-gray {\n    background-color: #EAEAEA;\n}\n\n.not-show {\n    display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gICAgLyptYXJnaW4tdG9wOiA1MHB4OyovXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2VyaWY7XG4gICAgbWF4LXdpZHRoOiAxNDY4cHg7XG4gICAgbWF4LWhlaWdodDogOTMxcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaXMtZ3JheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VBRUFFQTtcbn1cblxuLm5vdC1zaG93IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main is-centered is-fullheight\" style=\"padding-top: 0px;padding-bottom: 0px;     padding-left: 12px;\n    padding-right: 12px;\">\n    <app-tabla-lenguas-indigenas></app-tabla-lenguas-indigenas>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'TablaLenguasIndigenas';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var layout_1 = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var tabla_lenguas_indigenas_component_1 = __webpack_require__(/*! ./tabla-lenguas-indigenas/tabla-lenguas-indigenas.component */ "./src/app/tabla-lenguas-indigenas/tabla-lenguas-indigenas.component.ts");
var lenguas_data_service_1 = __webpack_require__(/*! ./tabla-lenguas-indigenas/lenguas-data.service */ "./src/app/tabla-lenguas-indigenas/lenguas-data.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpClientModule, layout_1.LayoutModule
            ],
            declarations: [app_component_1.AppComponent, tabla_lenguas_indigenas_component_1.TablaLenguasIndigenasComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [lenguas_data_service_1.LenguasDataService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/tabla-lenguas-indigenas/lenguas-data.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tabla-lenguas-indigenas/lenguas-data.service.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var LenguasDataService = /** @class */ (function () {
    function LenguasDataService(httpClient) {
        this.httpClient = httpClient;
        this.file = "";
    }
    LenguasDataService.prototype.getJSON = function () {
        return this.httpClient.get("./assets/data/lenguas.json", {
            observe: 'response'
        });
    };
    LenguasDataService.prototype.getExcel = function () {
        return this.httpClient.get("./assets/data/Tabla lenguas indigenas.xlsx", {
            responseType: 'arraybuffer',
            observe: 'response'
        });
    };
    LenguasDataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LenguasDataService);
    return LenguasDataService;
}());
exports.LenguasDataService = LenguasDataService;


/***/ }),

/***/ "./src/app/tabla-lenguas-indigenas/media-queries.css":
/*!***********************************************************!*\
  !*** ./src/app/tabla-lenguas-indigenas/media-queries.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \r\n  ##Device = Desktops\r\n  ##Screen = 1281px to higher resolution desktops\r\n*/\r\n@media (min-width: 1281px) {\r\n    .family-menu {\r\n        /*\r\n        margin-top: 0;\r\n        margin-bottom: 0;\r\n        height: 0;\r\n        */\r\n        display: flex;\r\n        justify-content: center;\r\n        margin-bottom: 5px;\r\n        margin-top: 5px;\r\n\r\n    }\r\n\r\n    .family-menu .family-menu-options {\r\n        display: flex;\r\n        justify-content: flex-end;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu .family-menu-card {\r\n        display: flex;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu table {\r\n        background: none;\r\n        display: table;\r\n        list-style: none;\r\n        position: absolute;\r\n        font-size: 12px;\r\n    }\r\n\r\n    .family-menu .card {\r\n        position: absolute;\r\n    }\r\n\r\n    .family-menu tbody tr {\r\n        /*display: flex;\r\n        justify-content: space-between;*/\r\n    }\r\n\r\n    .family-menu tbody tr td {\r\n        border: none;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .family-menu tbody tr td b {\r\n        padding-left: 5px;\r\n    }\r\n\r\n    .checkbox-option {\r\n        padding-top: 0px;\r\n        padding-bottom: 0px;\r\n        height: 22px;\r\n    }\r\n\r\n    .field:not(:last-child) {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    #Kp.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Cu.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Ay.periodic-table-family{\r\n        grid-column-start: 14;\r\n    }\r\n\r\n    #PoS.periodic-table-family {\r\n        grid-column-start: 13;\r\n    }\r\n\r\n    #Qe.periodic-table-family {\r\n        grid-column-start: 12;\r\n    }\r\n\r\n    #My.periodic-table-population, #Tp.periodic-table-population, #Ya.periodic-table-population, #Ak.periodic-table-population, #It.periodic-table-population {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ts.periodic-table-migration, #Hv.periodic-table-migration, #My.periodic-table-migration, #Kq.periodic-table-migration, #Aw.periodic-table-migration {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ix.periodic-table-rural, #Ci.periodic-table-rural, #Ta.periodic-table-rural, #Mi.periodic-table-rural, #It.periodic-table-rural {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #ThS.periodic-table-ire, #Hu.periodic-table-ire, #ChT.periodic-table-ire {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Aw.periodic-table-variantes, #Ta.periodic-table-variantes, #Mo.periodic-table-variantes, #Ot.periodic-table-variantes , #Tp.periodic-table-variantes  {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    .orden-menu .subtitle {\r\n        margin-bottom: 10px !important;\r\n    }\r\n\r\n    .vertical-grids {\r\n        display: grid;\r\n    }\r\n\r\n    .vertical-grids li {\r\n        max-height: 70px;\r\n        padding: 10px 0;\r\n        height: 4.6vw;\r\n        overflow: hidden;\r\n        margin: 4px;\r\n        z-index: auto;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-grids {\r\n        margin-left: 35px;\r\n        margin-right: 35px;\r\n        padding-top: 10px;\r\n        margin-bottom: 0px;\r\n    }\r\n\r\n    .horizontal-grids > ul {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-a li {\r\n        float: left;\r\n        width: 6.25%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-b li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-c li {\r\n        float: left;\r\n        width: 7.1%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-groups {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-groups li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-symbols{\r\n        padding-top: 0;\r\n    }\r\n\r\n    .periodic-table {\r\n        list-style: none;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .tabs{\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .content-tab{\r\n        padding-bottom: 0;\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .content-tab-symbols {\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n    .content-tab-symbols > table > tbody > tr >td {\r\n        cursor: pointer;\r\n    }\r\n\r\n    .periodic-table-columns {\r\n        display: grid;\r\n        grid-template-columns: 3% 94% 3%;\r\n        grid-template-rows: auto;\r\n    }\r\n\r\n    .periodic-table-columns-div {\r\n        align-self: flex-end;\r\n    }\r\n\r\n    .periodic-table-population-grids, .periodic-table-migration-grids, .periodic-table-rural-grids, .periodic-table-ire-grids, .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 33%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-alphabet-grids{\r\n        display: grid;\r\n        grid-template-columns: repeat(14, 7.1%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(8, 12.5%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids-b {\r\n        display: grid;\r\n        grid-template-columns: repeat(4, 25%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-family-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(16, 6.25%);\r\n    }\r\n\r\n    .column-one {\r\n        padding-right: 0;\r\n    }\r\n\r\n    .column-two, .column-three, .column-four {\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .column-five {\r\n        padding-left: 0;\r\n    }\r\n\r\n    .is-small-button{\r\n        font-size: 9px;\r\n    }\r\n\r\n    .group {\r\n        /*min-height: 103px;*/\r\n        max-height: 70px;\r\n        /*width: 105px;*/\r\n        height: 4.6vw;\r\n        padding: 5px;\r\n        border-radius: 5px;\r\n        overflow: hidden;\r\n        margin: 4px;\r\n        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .1), inset 0 0 0 2px rgba(0, 0, 0, .1);\r\n        transition: all 0.2s linear;\r\n        -webkit-transition: all 0.2s linear;\r\n        z-index: auto;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .group:after {\r\n        border-radius: 5px;\r\n        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\r\n        opacity: 0;\r\n    }\r\n\r\n    .group:hover {\r\n       transform: scale(1.5, 1.5);\r\n    }\r\n\r\n    .element-symbol {\r\n        margin-top: -10px;\r\n        font-size: 19px;\r\n        text-align: left;\r\n    }\r\n\r\n    .element-symbol > b{\r\n    }\r\n\r\n    .number-id {\r\n        font-size: 9px;\r\n        text-align: right;\r\n    }\r\n\r\n    .atomic-orbital-shells {\r\n        float: right;\r\n        font-size: 10px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex: 0;\r\n        position: absolute;\r\n        right: 5px;\r\n    }\r\n\r\n    .atomic-orbital-shells span {\r\n        display: block;\r\n        text-align: right;\r\n        line-height: 10;\r\n    }\r\n\r\n    .element-name{\r\n        font-size: 9px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n        margin-top: -5px;\r\n    }\r\n    .population{\r\n        font-size: 9px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n        margin: -3px -4px 3px;\r\n    }\r\n\r\n    .message-body {\r\n        padding: 30px;\r\n    }\r\n\r\n    .modal-image-full .modal-content{\r\n        margin: 0 20px;\r\n        max-height: calc(100vh - 100px);\r\n        overflow: auto;\r\n        position: relative;\r\n        width: 100%;\r\n    }\r\n}\r\n/*!* */\r\n/*  ##Device = Laptops, Desktops*/\r\n/*  ##Screen = B/w 1025px to 1280*/\r\n/**!*/\r\n@media (min-width: 1024px) and (max-width: 1280px) {\r\n    .family-menu {\r\n        /*\r\n        margin-top: 0;\r\n        margin-bottom: 0;\r\n        height: 0;\r\n        */\r\n        display: flex;\r\n        justify-content: center;\r\n        margin: 5px;\r\n    }\r\n\r\n    .family-menu  label{\r\n        font-size: .55rem;\r\n    }\r\n\r\n    .family-menu .family-menu-options {\r\n        display: flex;\r\n        justify-content: flex-end;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu .family-menu-card {\r\n        display: flex;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu table {\r\n        background: none;\r\n        display: table;\r\n        list-style: none;\r\n        position: absolute;\r\n        font-size: 12px;\r\n    }\r\n\r\n    .family-menu .card {\r\n        position: absolute;\r\n    }\r\n\r\n    .family-menu tbody tr {\r\n        /*display: flex;\r\n        justify-content: space-between;*/\r\n    }\r\n\r\n    .family-menu tbody tr td {\r\n        border: none;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .family-menu tbody tr td b {\r\n        padding-left: 5px;\r\n    }\r\n\r\n    .checkbox-option {\r\n        padding-top: 0px;\r\n        padding-bottom: 0px;\r\n        height: 22px;\r\n    }\r\n\r\n    .field:not(:last-child) {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    #Kp.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Cu.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Ay.periodic-table-family{\r\n        grid-column-start: 14;\r\n    }\r\n\r\n    #PoS.periodic-table-family {\r\n        grid-column-start: 13;\r\n    }\r\n\r\n    #Qe.periodic-table-family {\r\n        grid-column-start: 12;\r\n    }\r\n\r\n    #My.periodic-table-population, #Tp.periodic-table-population, #Ya.periodic-table-population, #Ak.periodic-table-population, #It.periodic-table-population {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ts.periodic-table-migration, #Hv.periodic-table-migration, #My.periodic-table-migration, #Kq.periodic-table-migration, #Aw.periodic-table-migration {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ix.periodic-table-rural, #Ci.periodic-table-rural, #Ta.periodic-table-rural, #Mi.periodic-table-rural, #It.periodic-table-rural {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #ThS.periodic-table-ire, #Hu.periodic-table-ire, #ChT.periodic-table-ire {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Aw.periodic-table-variantes, #Ta.periodic-table-variantes, #Mo.periodic-table-variantes, #Ot.periodic-table-variantes , #Tp.periodic-table-variantes  {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    .orden-menu .subtitle {\r\n        margin-bottom: 10px !important;\r\n    }\r\n\r\n    .vertical-grids {\r\n        display: grid;\r\n    }\r\n\r\n    .vertical-grids li {\r\n        max-height: 70px;\r\n        padding: 10px 0;\r\n        height: 4.2vw;\r\n        overflow: hidden;\r\n        margin: 4px;\r\n        z-index: auto;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-grids {\r\n        margin-left: 30px;\r\n        margin-right: 30px;\r\n        padding-top: 10px;\r\n        margin-bottom: 0px;\r\n    }\r\n\r\n    .horizontal-grids > ul {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-a li {\r\n        float: left;\r\n        width: 6.25%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-b li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-c li {\r\n        float: left;\r\n        width: 7.1%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-groups {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-groups li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-symbols{\r\n        padding-top: 0;\r\n    }\r\n\r\n    .periodic-table {\r\n        list-style: none;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .tabs{\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .content-tab{\r\n        padding-bottom: 0;\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .content-tab-symbols {\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n    .content-tab-symbols > table > tbody > tr >td {\r\n        cursor: pointer;\r\n    }\r\n\r\n    .periodic-table-columns {\r\n        display: grid;\r\n        grid-template-columns: 3% 94% 3%;\r\n        grid-template-rows: auto;\r\n    }\r\n\r\n    .periodic-table-columns-div {\r\n        align-self: flex-end;\r\n    }\r\n\r\n    .periodic-table-population-grids, .periodic-table-migration-grids, .periodic-table-rural-grids, .periodic-table-ire-grids, .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 33%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-alphabet-grids{\r\n        display: grid;\r\n        grid-template-columns: repeat(14, 7.1%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(8, 12.5%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids-b {\r\n        display: grid;\r\n        grid-template-columns: repeat(4, 25%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-family-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(16, 6.25%);\r\n    }\r\n\r\n    .column-one {\r\n        padding-right: 0;\r\n    }\r\n\r\n    .column-two, .column-three, .column-four {\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .column-five {\r\n        padding-left: 0;\r\n    }\r\n\r\n    .is-small-button{\r\n        font-size: 9px;\r\n    }\r\n\r\n    .group {\r\n        /*min-height: 103px;*/\r\n        max-height: 70px;\r\n        /*width: 105px;*/\r\n        height: 4.6vw;\r\n        padding: 3px;\r\n        border-radius: 5px;\r\n        overflow: hidden;\r\n        margin: 2px;\r\n        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .1), inset 0 0 0 2px rgba(0, 0, 0, .1);\r\n        transition: all 0.2s linear;\r\n        -webkit-transition: all 0.2s linear;\r\n        z-index: auto;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .group:after {\r\n        border-radius: 5px;\r\n        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\r\n        opacity: 0;\r\n    }\r\n\r\n    .group:hover {\r\n        transform: scale(1.5, 1.5);\r\n    }\r\n\r\n    .element-symbol {\r\n        margin-top: -10px;\r\n        font-size: 17px;\r\n        text-align: left;\r\n    }\r\n\r\n    .element-symbol > b{\r\n    }\r\n\r\n    .number-id {\r\n        font-size: 7px;\r\n        text-align: right;\r\n    }\r\n\r\n    .atomic-orbital-shells {\r\n        float: right;\r\n        font-size: 10px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex: 0;\r\n        position: absolute;\r\n        right: 5px;\r\n    }\r\n\r\n    .atomic-orbital-shells span {\r\n        display: block;\r\n        text-align: right;\r\n        line-height: 10;\r\n    }\r\n\r\n    .element-name{\r\n        font-size: 7px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n        margin-top: -5px;\r\n    }\r\n    .population{\r\n        font-size: 7px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n        margin: -3px -4px 3px;\r\n    }\r\n\r\n    .message-body {\r\n        padding: 30px;\r\n    }\r\n\r\n    .modal-image-full .modal-content{\r\n        margin: 0 20px;\r\n        max-height: calc(100vh - 100px);\r\n        overflow: auto;\r\n        position: relative;\r\n        width: 100%;\r\n    }\r\n}\r\n/*!* */\r\n/*  ##Device = Tablets, Ipads (portrait)*/\r\n/*  ##Screen = B/w 768px to 1024px*/\r\n/**!*/\r\n@media (min-width: 768px) and (max-width: 1023px) {\r\n    .family-menu {\r\n        /*\r\n        margin-top: 0;\r\n        margin-bottom: 0;\r\n        height: 0;\r\n        */\r\n        display: flex;\r\n        justify-content: center;\r\n        margin: 5px;\r\n\r\n    }\r\n\r\n    .family-menu  label{\r\n        font-size: .6rem;\r\n    }\r\n\r\n    .family-menu .family-menu-options {\r\n        display: flex;\r\n        justify-content: flex-end;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu .family-menu-card {\r\n        display: flex;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu table {\r\n        background: none;\r\n        display: table;\r\n        list-style: none;\r\n        position: absolute;\r\n        font-size: 12px;\r\n    }\r\n\r\n    .family-menu .card {\r\n        position: absolute;\r\n    }\r\n\r\n    .family-menu tbody tr {\r\n        /*display: flex;\r\n        justify-content: space-between;*/\r\n    }\r\n\r\n    .family-menu tbody tr td {\r\n        border: none;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .family-menu tbody tr td b {\r\n        padding-left: 5px;\r\n    }\r\n\r\n    .checkbox-option {\r\n        padding-top: 0px;\r\n        padding-bottom: 0px;\r\n        height: 22px;\r\n    }\r\n\r\n    .field:not(:last-child) {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    #Kp.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Cu.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Ay.periodic-table-family{\r\n        grid-column-start: 14;\r\n    }\r\n\r\n    #PoS.periodic-table-family {\r\n        grid-column-start: 13;\r\n    }\r\n\r\n    #Qe.periodic-table-family {\r\n        grid-column-start: 12;\r\n    }\r\n\r\n    #My.periodic-table-population, #Tp.periodic-table-population, #Ya.periodic-table-population, #Ak.periodic-table-population, #It.periodic-table-population {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ts.periodic-table-migration, #Hv.periodic-table-migration, #My.periodic-table-migration, #Kq.periodic-table-migration, #Aw.periodic-table-migration {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ix.periodic-table-rural, #Ci.periodic-table-rural, #Ta.periodic-table-rural, #Mi.periodic-table-rural, #It.periodic-table-rural {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #ThS.periodic-table-ire, #Hu.periodic-table-ire, #ChT.periodic-table-ire {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Aw.periodic-table-variantes, #Ta.periodic-table-variantes, #Mo.periodic-table-variantes, #Ot.periodic-table-variantes , #Tp.periodic-table-variantes  {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    .orden-menu .subtitle {\r\n        margin-bottom: 10px !important;\r\n    }\r\n\r\n    .vertical-grids {\r\n        display: grid;\r\n    }\r\n\r\n    .vertical-grids li {\r\n        max-height: 70px;\r\n        padding: 10px 0;\r\n        height: 4.2vw;\r\n        overflow: hidden;\r\n        margin: 4px;\r\n        z-index: auto;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-grids {\r\n        display: none;\r\n    }\r\n\r\n    .horizontal-grids > ul {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-a li {\r\n        float: left;\r\n        width: 6.25%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-b li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-c li {\r\n        float: left;\r\n        width: 7.1%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-groups {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-groups li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-symbols{\r\n        padding-top: 0;\r\n    }\r\n\r\n    .periodic-table {\r\n        list-style: none;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .tabs{\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .content-tab{\r\n        padding-bottom: 0;\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .content-tab-symbols {\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n    .content-tab-symbols > table > tbody > tr >td {\r\n        cursor: pointer;\r\n    }\r\n\r\n    .content-tab-symbols label{\r\n        font-size: 9px;\r\n    }\r\n\r\n    .periodic-table-columns {\r\n        display: grid;\r\n        grid-template-columns: 0% 100% 0%;\r\n        grid-template-rows: auto;\r\n    }\r\n\r\n    .periodic-table-columns-div {\r\n        align-self: flex-end;\r\n    }\r\n\r\n    .periodic-table-population-grids, .periodic-table-migration-grids, .periodic-table-rural-grids, .periodic-table-ire-grids, .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 33%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-alphabet-grids{\r\n        display: grid;\r\n        grid-template-columns: repeat(14, 7.1%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(8, 12.5%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids-b {\r\n        display: grid;\r\n        grid-template-columns: repeat(4, 25%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-family-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(16, 6.25%);\r\n    }\r\n\r\n    .column-one {\r\n        padding-right: 0;\r\n    }\r\n\r\n    .column-two, .column-three, .column-four {\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .column-five {\r\n        padding-left: 0;\r\n    }\r\n\r\n    .is-small-button{\r\n        font-size: 9px;\r\n    }\r\n\r\n    .group {\r\n        /*min-height: 103px;*/\r\n        max-height: 70px;\r\n        /*width: 105px;*/\r\n        height: 4.6vw;\r\n        padding: 3px;\r\n        border-radius: 5px;\r\n        overflow: hidden;\r\n        margin: 2px;\r\n        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .1), inset 0 0 0 2px rgba(0, 0, 0, .1);\r\n        transition: all 0.2s linear;\r\n        -webkit-transition: all 0.2s linear;\r\n        z-index: auto;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .group:after {\r\n        border-radius: 5px;\r\n        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\r\n        opacity: 0;\r\n    }\r\n\r\n    .group:hover {\r\n        transform: scale(1.5, 1.5);\r\n    }\r\n\r\n    .element-symbol {\r\n        margin-top: -5px;\r\n        font-size: 17px;\r\n        text-align: left;\r\n    }\r\n\r\n    .element-symbol > b{\r\n    }\r\n\r\n    .number-id {\r\n        font-size: 7px;\r\n        text-align: right;\r\n    }\r\n\r\n    .atomic-orbital-shells {\r\n        float: right;\r\n        font-size: 10px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex: 0;\r\n        position: absolute;\r\n        right: 5px;\r\n    }\r\n\r\n    .atomic-orbital-shells span {\r\n        display: block;\r\n        text-align: right;\r\n        line-height: 10;\r\n    }\r\n\r\n    .element-name{\r\n        font-size: 0px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n        margin-top: -5px;\r\n    }\r\n    .population{\r\n        font-size: 7px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n    }\r\n\r\n    .population span {\r\n        display: none;\r\n    }\r\n\r\n    .message-body {\r\n        padding: 30px;\r\n    }\r\n\r\n    .modal-image-full .modal-content{\r\n        margin: 0 20px;\r\n        max-height: calc(100vh - 100px);\r\n        overflow: auto;\r\n        position: relative;\r\n        width: 100%;\r\n    }\r\n}\r\n/*!* */\r\n/*  ##Device = Tablets, Ipads (landscape)*/\r\n/*  ##Screen = B/w 768px to 1024px*/\r\n/**!*/\r\n@media (min-width: 768px) and (max-width: 1023px) and (orientation: landscape) {\r\n    .family-menu {\r\n        /*\r\n        margin-top: 0;\r\n        margin-bottom: 0;\r\n        height: 0;\r\n        */\r\n        display: flex;\r\n        justify-content: center;\r\n        margin: 5px;\r\n\r\n    }\r\n\r\n    .family-menu  label{\r\n        font-size: .6rem;\r\n    }\r\n\r\n    .family-menu .family-menu-options {\r\n        display: flex;\r\n        justify-content: flex-end;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu .family-menu-card {\r\n        display: flex;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu table {\r\n        background: none;\r\n        display: table;\r\n        list-style: none;\r\n        position: absolute;\r\n        font-size: 12px;\r\n    }\r\n\r\n    .family-menu .card {\r\n        position: absolute;\r\n    }\r\n\r\n    .family-menu tbody tr {\r\n        /*display: flex;\r\n        justify-content: space-between;*/\r\n    }\r\n\r\n    .family-menu tbody tr td {\r\n        border: none;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .family-menu tbody tr td b {\r\n        padding-left: 5px;\r\n    }\r\n\r\n    .checkbox-option {\r\n        padding-top: 0px;\r\n        padding-bottom: 0px;\r\n        height: 22px;\r\n    }\r\n\r\n    .field:not(:last-child) {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    #Kp.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Cu.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Ay.periodic-table-family{\r\n        grid-column-start: 14;\r\n    }\r\n\r\n    #PoS.periodic-table-family {\r\n        grid-column-start: 13;\r\n    }\r\n\r\n    #Qe.periodic-table-family {\r\n        grid-column-start: 12;\r\n    }\r\n\r\n    #My.periodic-table-population, #Tp.periodic-table-population, #Ya.periodic-table-population, #Ak.periodic-table-population, #It.periodic-table-population {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ts.periodic-table-migration, #Hv.periodic-table-migration, #My.periodic-table-migration, #Kq.periodic-table-migration, #Aw.periodic-table-migration {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ix.periodic-table-rural, #Ci.periodic-table-rural, #Ta.periodic-table-rural, #Mi.periodic-table-rural, #It.periodic-table-rural {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #ThS.periodic-table-ire, #Hu.periodic-table-ire, #ChT.periodic-table-ire {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Aw.periodic-table-variantes, #Ta.periodic-table-variantes, #Mo.periodic-table-variantes, #Ot.periodic-table-variantes , #Tp.periodic-table-variantes  {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    .orden-menu .subtitle {\r\n        margin-bottom: 10px !important;\r\n    }\r\n\r\n    .vertical-grids {\r\n        display: grid;\r\n    }\r\n\r\n    .vertical-grids li {\r\n        max-height: 70px;\r\n        padding: 10px 0;\r\n        height: 4.2vw;\r\n        overflow: hidden;\r\n        margin: 4px;\r\n        z-index: auto;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-grids {\r\n        display: none;\r\n    }\r\n\r\n    .horizontal-grids > ul {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-a li {\r\n        float: left;\r\n        width: 6.25%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-b li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-c li {\r\n        float: left;\r\n        width: 7.1%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-groups {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-groups li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-symbols{\r\n        padding-top: 0;\r\n    }\r\n\r\n    .periodic-table {\r\n        list-style: none;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .tabs{\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .content-tab{\r\n        padding-bottom: 0;\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .content-tab-symbols {\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n    .content-tab-symbols > table > tbody > tr >td {\r\n        cursor: pointer;\r\n    }\r\n\r\n    .content-tab-symbols label{\r\n        font-size: 9px;\r\n    }\r\n\r\n    .periodic-table-columns {\r\n        display: grid;\r\n        grid-template-columns: 0% 100% 0%;\r\n        grid-template-rows: auto;\r\n    }\r\n\r\n    .periodic-table-columns-div {\r\n        align-self: flex-end;\r\n    }\r\n\r\n    .periodic-table-population-grids, .periodic-table-migration-grids, .periodic-table-rural-grids, .periodic-table-ire-grids, .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 33%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-alphabet-grids{\r\n        display: grid;\r\n        grid-template-columns: repeat(14, 7.1%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(8, 12.5%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids-b {\r\n        display: grid;\r\n        grid-template-columns: repeat(4, 25%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-family-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(16, 6.25%);\r\n    }\r\n\r\n    .column-one {\r\n        padding-right: 0;\r\n    }\r\n\r\n    .column-two, .column-three, .column-four {\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .column-five {\r\n        padding-left: 0;\r\n    }\r\n\r\n    .is-small-button{\r\n        font-size: 9px;\r\n    }\r\n\r\n    .group {\r\n        /*min-height: 103px;*/\r\n        max-height: 70px;\r\n        /*width: 105px;*/\r\n        height: 4.6vw;\r\n        padding: 3px;\r\n        border-radius: 5px;\r\n        overflow: hidden;\r\n        margin: 2px;\r\n        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .1), inset 0 0 0 2px rgba(0, 0, 0, .1);\r\n        transition: all 0.2s linear;\r\n        -webkit-transition: all 0.2s linear;\r\n        z-index: auto;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .group:after {\r\n        border-radius: 5px;\r\n        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\r\n        opacity: 0;\r\n    }\r\n\r\n    .group:hover {\r\n        transform: scale(1.5, 1.5);\r\n    }\r\n\r\n    .element-symbol {\r\n        margin-top: -5px;\r\n        font-size: 17px;\r\n        text-align: left;\r\n    }\r\n\r\n    .element-symbol > b{\r\n    }\r\n\r\n    .number-id {\r\n        font-size: 7px;\r\n        text-align: right;\r\n    }\r\n\r\n    .atomic-orbital-shells {\r\n        float: right;\r\n        font-size: 10px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex: 0;\r\n        position: absolute;\r\n        right: 5px;\r\n    }\r\n\r\n    .atomic-orbital-shells span {\r\n        display: block;\r\n        text-align: right;\r\n        line-height: 10;\r\n    }\r\n\r\n    .element-name{\r\n        font-size: 0px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n        margin-top: -5px;\r\n    }\r\n    .population{\r\n        font-size: 7px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n    }\r\n\r\n    .population span {\r\n        display: none;\r\n    }\r\n\r\n    .message-body {\r\n        padding: 30px;\r\n    }\r\n\r\n    .modal-image-full .modal-content{\r\n        margin: 0 20px;\r\n        max-height: calc(100vh - 100px);\r\n        overflow: auto;\r\n        position: relative;\r\n        width: 100%;\r\n    }\r\n\r\n    .modal-card-title {\r\n        flex-shrink: 1;\r\n    }\r\n}\r\n/*!* */\r\n/*  ##Device = Low Resolution Tablets, Mobiles (Landscape)*/\r\n/*  ##Screen = B/w 481px to 767px*/\r\n/**!*/\r\n@media (min-width: 481px) and (max-width: 767px) {\r\n    .family-menu {\r\n        /*\r\n        margin-top: 0;\r\n        margin-bottom: 0;\r\n        height: 0;\r\n        */\r\n        display: flex;\r\n        justify-content: center;\r\n        margin: 5px;\r\n\r\n    }\r\n\r\n    .family-menu  label{\r\n        font-size: .6rem;\r\n    }\r\n\r\n    .family-menu .family-menu-options {\r\n        display: flex;\r\n        justify-content: flex-end;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu .family-menu-card {\r\n        display: flex;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu table {\r\n        background: none;\r\n        display: table;\r\n        list-style: none;\r\n        position: absolute;\r\n        font-size: 12px;\r\n    }\r\n\r\n    .family-menu .card {\r\n        position: absolute;\r\n    }\r\n\r\n    .family-menu tbody tr {\r\n        /*display: flex;\r\n        justify-content: space-between;*/\r\n    }\r\n\r\n    .family-menu tbody tr td {\r\n        border: none;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .family-menu tbody tr td b {\r\n        padding-left: 5px;\r\n    }\r\n\r\n    .checkbox-option {\r\n        padding-top: 0px;\r\n        padding-bottom: 0px;\r\n        height: 22px;\r\n    }\r\n\r\n    .field:not(:last-child) {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    /*#Kp.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Cu.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Ay.periodic-table-family{\r\n        grid-column-start: 14;\r\n    }\r\n\r\n    #PoS.periodic-table-family {\r\n        grid-column-start: 13;\r\n    }\r\n\r\n    #Qe.periodic-table-family {\r\n        grid-column-start: 12;\r\n    }*/\r\n\r\n    /*#My.periodic-table-population, #Tp.periodic-table-population, #Ya.periodic-table-population, #Ak.periodic-table-population, #It.periodic-table-population {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ts.periodic-table-migration, #Hv.periodic-table-migration, #My.periodic-table-migration, #Kq.periodic-table-migration, #Aw.periodic-table-migration {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ix.periodic-table-rural, #Ci.periodic-table-rural, #Ta.periodic-table-rural, #Mi.periodic-table-rural, #It.periodic-table-rural {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #ThS.periodic-table-ire, #Hu.periodic-table-ire, #ChT.periodic-table-ire {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Aw.periodic-table-variantes, #Ta.periodic-table-variantes, #Mo.periodic-table-variantes, #Ot.periodic-table-variantes , #Tp.periodic-table-variantes  {\r\n        grid-column-start: 1;\r\n    }\r\n*/\r\n    .orden-menu .subtitle {\r\n        margin-bottom: 10px !important;\r\n    }\r\n\r\n    .vertical-grids {\r\n        display: grid;\r\n    }\r\n\r\n    .vertical-grids li {\r\n        max-height: 70px;\r\n        padding: 10px 0;\r\n        height: 4.2vw;\r\n        overflow: hidden;\r\n        margin: 4px;\r\n        z-index: auto;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-grids {\r\n        display: none;\r\n    }\r\n\r\n    .horizontal-grids > ul {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-a li {\r\n        float: left;\r\n        width: 6.25%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-b li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-c li {\r\n        float: left;\r\n        width: 7.1%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-groups {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-groups li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-symbols{\r\n        padding-top: 0;\r\n    }\r\n\r\n    .periodic-table {\r\n        list-style: none;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .tabs{\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .content-tab{\r\n        padding-bottom: 0;\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .content-tab-symbols {\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n    .content-tab-symbols > table > tbody > tr >td {\r\n        cursor: pointer;\r\n    }\r\n\r\n    .content-tab-symbols label{\r\n        font-size: 9px;\r\n    }\r\n\r\n    .periodic-table-columns {\r\n        display: grid;\r\n        grid-template-columns: 0% 100% 0%;\r\n        grid-template-rows: auto;\r\n    }\r\n\r\n    .periodic-table-columns-div {\r\n        align-self: flex-end;\r\n    }\r\n\r\n    .periodic-table-population-grids, .periodic-table-migration-grids, .periodic-table-rural-grids, .periodic-table-ire-grids, .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 33%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-alphabet-grids{\r\n        display: grid;\r\n        grid-template-columns: repeat(14, 7.1%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(8, 12.5%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids-b {\r\n        display: grid;\r\n        grid-template-columns: repeat(4, 25%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-family-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(5, 20%);\r\n        /*padding-top: 56px;*/\r\n    }\r\n\r\n    .column-one {\r\n        padding-right: 0;\r\n    }\r\n\r\n    .column-two, .column-three, .column-four {\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .column-five {\r\n        padding-left: 0;\r\n    }\r\n\r\n    .is-small-button{\r\n        font-size: 9px;\r\n    }\r\n\r\n    .group {\r\n        /*min-height: 103px;*/\r\n        /*width: 105px;*/\r\n        height: 17vw;\r\n        padding: 3px;\r\n        border-radius: 5px;\r\n        overflow: hidden;\r\n        margin: 2px;\r\n        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .1), inset 0 0 0 2px rgba(0, 0, 0, .1);\r\n        transition: all 0.2s linear;\r\n        -webkit-transition: all 0.2s linear;\r\n        z-index: auto;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .group:after {\r\n        border-radius: 5px;\r\n        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\r\n        opacity: 0;\r\n    }\r\n\r\n    .group:hover {\r\n        transform: scale(1.2, 1.2);\r\n    }\r\n\r\n    .element-symbol {\r\n        margin-top: -10px;\r\n        font-size: 19px;\r\n        text-align: left;\r\n    }\r\n\r\n    .element-symbol > b{\r\n    }\r\n\r\n    .number-id {\r\n        font-size: 9px;\r\n        text-align: right;\r\n    }\r\n\r\n    .atomic-orbital-shells {\r\n        float: right;\r\n        font-size: 10px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex: 0;\r\n        position: absolute;\r\n        right: 5px;\r\n    }\r\n\r\n    .atomic-orbital-shells span {\r\n        display: block;\r\n        text-align: right;\r\n        line-height: 10;\r\n    }\r\n\r\n    .element-name{\r\n        font-size: 13px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n        margin-top: -5px;\r\n    }\r\n    .population{\r\n        font-size: 9px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n        margin: -3px -4px 3px;\r\n    }\r\n\r\n    .message-body {\r\n        padding: 30px;\r\n    }\r\n\r\n    .modal-image-full .modal-content{\r\n        margin: 0 20px;\r\n        max-height: calc(100vh - 100px);\r\n        overflow: auto;\r\n        position: relative;\r\n        width: 100%;\r\n    }\r\n\r\n    .modal-card-title {\r\n        flex-shrink: 1;\r\n    }\r\n\r\n    .tag{\r\n        white-space: normal;\r\n    }\r\n}\r\n/*!* */\r\n/*  ##Device = Most of the Smartphones Mobiles (Portrait)*/\r\n/*  ##Screen = B/w 320 to 479px*/\r\n/**!*/\r\n@media (min-width: 320px) and (max-width: 480px) {\r\n    .family-menu {\r\n        /*\r\n        margin-top: 0;\r\n        margin-bottom: 0;\r\n        height: 0;\r\n        */\r\n        display: flex;\r\n        justify-content: center;\r\n        margin: 5px;\r\n\r\n    }\r\n\r\n    .family-menu  label{\r\n        font-size: .6rem;\r\n    }\r\n\r\n    .family-menu .family-menu-options {\r\n        display: flex;\r\n        justify-content: flex-end;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu .family-menu-card {\r\n        display: flex;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu table {\r\n        background: none;\r\n        display: table;\r\n        list-style: none;\r\n        position: absolute;\r\n        font-size: 12px;\r\n    }\r\n\r\n    .family-menu .card {\r\n        position: absolute;\r\n    }\r\n\r\n    .family-menu tbody tr {\r\n        /*display: flex;\r\n        justify-content: space-between;*/\r\n    }\r\n\r\n    .family-menu tbody tr td {\r\n        border: none;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .family-menu tbody tr td b {\r\n        padding-left: 5px;\r\n    }\r\n\r\n    .checkbox-option {\r\n        padding-top: 0px;\r\n        padding-bottom: 0px;\r\n        height: 22px;\r\n    }\r\n\r\n    .field:not(:last-child) {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    /*#Kp.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Cu.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Ay.periodic-table-family{\r\n        grid-column-start: 14;\r\n    }\r\n\r\n    #PoS.periodic-table-family {\r\n        grid-column-start: 13;\r\n    }\r\n\r\n    #Qe.periodic-table-family {\r\n        grid-column-start: 12;\r\n    }*/\r\n\r\n    /*#My.periodic-table-population, #Tp.periodic-table-population, #Ya.periodic-table-population, #Ak.periodic-table-population, #It.periodic-table-population {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ts.periodic-table-migration, #Hv.periodic-table-migration, #My.periodic-table-migration, #Kq.periodic-table-migration, #Aw.periodic-table-migration {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ix.periodic-table-rural, #Ci.periodic-table-rural, #Ta.periodic-table-rural, #Mi.periodic-table-rural, #It.periodic-table-rural {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #ThS.periodic-table-ire, #Hu.periodic-table-ire, #ChT.periodic-table-ire {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Aw.periodic-table-variantes, #Ta.periodic-table-variantes, #Mo.periodic-table-variantes, #Ot.periodic-table-variantes , #Tp.periodic-table-variantes  {\r\n        grid-column-start: 1;\r\n    }*/\r\n\r\n    .orden-menu .subtitle {\r\n        margin-bottom: 10px !important;\r\n    }\r\n\r\n    .vertical-grids {\r\n        display: grid;\r\n    }\r\n\r\n    .vertical-grids li {\r\n        max-height: 70px;\r\n        padding: 10px 0;\r\n        height: 4.2vw;\r\n        overflow: hidden;\r\n        margin: 4px;\r\n        z-index: auto;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-grids {\r\n        display: none;\r\n    }\r\n\r\n    .horizontal-grids > ul {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-a li {\r\n        float: left;\r\n        width: 6.25%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-b li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-c li {\r\n        float: left;\r\n        width: 7.1%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-groups {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-groups li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-symbols{\r\n        padding-top: 0;\r\n    }\r\n\r\n    .periodic-table {\r\n        list-style: none;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .tabs{\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .content-tab{\r\n        padding-bottom: 0;\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .content-tab-symbols {\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n    .content-tab-symbols > table > tbody > tr >td {\r\n        cursor: pointer;\r\n    }\r\n\r\n    .content-tab-symbols label{\r\n        font-size: 9px;\r\n    }\r\n\r\n    .periodic-table-columns {\r\n        display: grid;\r\n        grid-template-columns: 0% 100% 0%;\r\n        grid-template-rows: auto;\r\n    }\r\n\r\n    .periodic-table-columns-div {\r\n        align-self: flex-end;\r\n    }\r\n\r\n    .periodic-table-population-grids, .periodic-table-migration-grids, .periodic-table-rural-grids, .periodic-table-ire-grids, .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 33%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-alphabet-grids{\r\n        display: grid;\r\n        grid-template-columns: repeat(14, 7.1%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(8, 12.5%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids-b {\r\n        display: grid;\r\n        grid-template-columns: repeat(4, 25%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-family-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 33.33%);\r\n        /*padding-top: 56px;*/\r\n    }\r\n\r\n    .column-one {\r\n        padding-right: 0;\r\n    }\r\n\r\n    .column-two, .column-three, .column-four {\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .column-five {\r\n        padding-left: 0;\r\n    }\r\n\r\n    .is-small-button{\r\n        font-size: 9px;\r\n    }\r\n\r\n    .group {\r\n        /*min-height: 103px;*/\r\n        /*width: 105px;*/\r\n        height: 24vw;\r\n        padding: 3px;\r\n        border-radius: 5px;\r\n        overflow: hidden;\r\n        margin: 2px;\r\n        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .1), inset 0 0 0 2px rgba(0, 0, 0, .1);\r\n        transition: all 0.2s linear;\r\n        -webkit-transition: all 0.2s linear;\r\n        z-index: auto;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .group:after {\r\n        border-radius: 5px;\r\n        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\r\n        opacity: 0;\r\n    }\r\n\r\n    .group:hover {\r\n        transform: scale(1.2, 1.2);\r\n    }\r\n\r\n    .element-symbol {\r\n        margin-top: -10px;\r\n        font-size: 19px;\r\n        text-align: left;\r\n    }\r\n\r\n    .element-symbol > b{\r\n    }\r\n\r\n    .number-id {\r\n        font-size: 9px;\r\n        text-align: right;\r\n    }\r\n\r\n    .atomic-orbital-shells {\r\n        float: right;\r\n        font-size: 10px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex: 0;\r\n        position: absolute;\r\n        right: 5px;\r\n    }\r\n\r\n    .atomic-orbital-shells span {\r\n        display: block;\r\n        text-align: right;\r\n        line-height: 10;\r\n    }\r\n\r\n    .element-name{\r\n        font-size: 13px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n        margin-top: -5px;\r\n    }\r\n    .population{\r\n        font-size: 12px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n        margin: -3px -4px 3px;\r\n    }\r\n\r\n    .message-body {\r\n        padding: 30px;\r\n    }\r\n\r\n    .modal-image-full .modal-content{\r\n        margin: 0 20px;\r\n        max-height: calc(100vh - 100px);\r\n        overflow: auto;\r\n        position: relative;\r\n        width: 100%;\r\n    }\r\n\r\n    .modal-card-title {\r\n        flex-shrink: 1;\r\n    }\r\n\r\n    .tag{\r\n        white-space: normal;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGEtbGVuZ3Vhcy1pbmRpZ2VuYXMvbWVkaWEtcXVlcmllcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFO0FBQ0Y7SUFDSTtRQUNJOzs7O1VBSUU7UUFDRixjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLG1CQUFtQjtRQUNuQixnQkFBZ0I7O0tBRW5COztJQUVEO1FBQ0ksY0FBYztRQUNkLDBCQUEwQjtRQUMxQixjQUFjO0tBQ2pCOztJQUVEO1FBQ0ksY0FBYztRQUNkLGNBQWM7S0FDakI7O0lBRUQ7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksbUJBQW1CO0tBQ3RCOztJQUVEO1FBQ0k7eUNBQ2lDO0tBQ3BDOztJQUVEO1FBQ0ksYUFBYTtRQUNiLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLGtCQUFrQjtLQUNyQjs7SUFFRDtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsYUFBYTtLQUNoQjs7SUFFRDtRQUNJLGlCQUFpQjtLQUNwQjs7SUFFRDtRQUNJLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLHNCQUFzQjtLQUN6Qjs7SUFFRDtRQUNJLHNCQUFzQjtLQUN6Qjs7SUFFRDtRQUNJLHNCQUFzQjtLQUN6Qjs7SUFFRDtRQUNJLHFCQUFxQjtLQUN4Qjs7SUFFRDtRQUNJLHFCQUFxQjtLQUN4Qjs7SUFFRDtRQUNJLHFCQUFxQjtLQUN4Qjs7SUFFRDtRQUNJLHFCQUFxQjtLQUN4Qjs7SUFFRDtRQUNJLHFCQUFxQjtLQUN4Qjs7SUFFRDtRQUNJLCtCQUErQjtLQUNsQzs7SUFFRDtRQUNJLGNBQWM7S0FDakI7O0lBRUQ7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGNBQWM7UUFDZCxjQUFjO1FBQ2Qsb0JBQW9C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QUFVO1FBQ1Ysc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLHNCQUFzQjtLQUN6Qjs7SUFFRDtRQUNJLGNBQWM7S0FDakI7O0lBRUQ7UUFDSSxlQUFlO1FBQ2YsZ0NBQWdDO1FBQ2hDLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsWUFBWTtLQUNmOztJQUVEO1FBQ0ksZUFBZTtLQUNsQjs7SUFFRDtRQUNJLG9CQUFvQjtLQUN2QjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvdGFibGEtbGVuZ3Vhcy1pbmRpZ2VuYXMvbWVkaWEtcXVlcmllcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcclxuICAjI0RldmljZSA9IERlc2t0b3BzXHJcbiAgIyNTY3JlZW4gPSAxMjgxcHggdG8gaGlnaGVyIHJlc29sdXRpb24gZGVza3RvcHNcclxuKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyODFweCkge1xyXG4gICAgLmZhbWlseS1tZW51IHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgKi9cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSAuZmFtaWx5LW1lbnUtb3B0aW9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IC5mYW1pbHktbWVudS1jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IHRhYmxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgLmNhcmQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgdGJvZHkgdHIge1xyXG4gICAgICAgIC8qZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47Ki9cclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgdGJvZHkgdHIgdGQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IHRib2R5IHRyIHRkIGIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGVja2JveC1vcHRpb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpZWxkOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgI0twLnBlcmlvZGljLXRhYmxlLWZhbWlseXtcclxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMTtcclxuICAgIH1cclxuXHJcbiAgICAjQ3UucGVyaW9kaWMtdGFibGUtZmFtaWx5e1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNBeS5wZXJpb2RpYy10YWJsZS1mYW1pbHl7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE0O1xyXG4gICAgfVxyXG5cclxuICAgICNQb1MucGVyaW9kaWMtdGFibGUtZmFtaWx5IHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTM7XHJcbiAgICB9XHJcblxyXG4gICAgI1FlLnBlcmlvZGljLXRhYmxlLWZhbWlseSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDEyO1xyXG4gICAgfVxyXG5cclxuICAgICNNeS5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLCAjVHAucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbiwgI1lhLnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24sICNBay5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLCAjSXQucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbiB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgI1RzLnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI0h2LnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI015LnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI0txLnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI0F3LnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgI0l4LnBlcmlvZGljLXRhYmxlLXJ1cmFsLCAjQ2kucGVyaW9kaWMtdGFibGUtcnVyYWwsICNUYS5wZXJpb2RpYy10YWJsZS1ydXJhbCwgI01pLnBlcmlvZGljLXRhYmxlLXJ1cmFsLCAjSXQucGVyaW9kaWMtdGFibGUtcnVyYWwge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNUaFMucGVyaW9kaWMtdGFibGUtaXJlLCAjSHUucGVyaW9kaWMtdGFibGUtaXJlLCAjQ2hULnBlcmlvZGljLXRhYmxlLWlyZSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgI0F3LnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcywgI1RhLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcywgI01vLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcywgI090LnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcyAsICNUcC5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMgIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIH1cclxuXHJcbiAgICAub3JkZW4tbWVudSAuc3VidGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAudmVydGljYWwtZ3JpZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnZlcnRpY2FsLWdyaWRzIGxpIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBoZWlnaHQ6IDQuNnZ3O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgICAgei1pbmRleDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtZ3JpZHMge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzVweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtZ3JpZHMgPiB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFsLWxpc3QtYSBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDYuMjUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWIgbGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAzMy4zJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtbGlzdC1jIGxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNy4xJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtbGlzdC1ncm91cHMge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWdyb3VwcyBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtc3ltYm9sc3tcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYnN7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC10YWJ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtdGFiLXN5bWJvbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtdGFiLXN5bWJvbHMgPiB0YWJsZSA+IHRib2R5ID4gdHIgPnRkIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLWNvbHVtbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzJSA5NCUgMyU7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1jb2x1bW5zLWRpdiB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24tZ3JpZHMsIC5wZXJpb2RpYy10YWJsZS1taWdyYXRpb24tZ3JpZHMsIC5wZXJpb2RpYy10YWJsZS1ydXJhbC1ncmlkcywgLnBlcmlvZGljLXRhYmxlLWlyZS1ncmlkcywgLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcy1ncmlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMyUpO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1hbHBoYWJldC1ncmlkc3tcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDE0LCA3LjElKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLWdyaWRzIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDEyLjUlKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLWdyaWRzLWIge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMjUlKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtZmFtaWx5LWdyaWRzIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDE2LCA2LjI1JSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbHVtbi1vbmUge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbHVtbi10d28sIC5jb2x1bW4tdGhyZWUsIC5jb2x1bW4tZm91ciB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbHVtbi1maXZlIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmlzLXNtYWxsLWJ1dHRvbntcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JvdXAge1xyXG4gICAgICAgIC8qbWluLWhlaWdodDogMTAzcHg7Ki9cclxuICAgICAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIC8qd2lkdGg6IDEwNXB4OyovXHJcbiAgICAgICAgaGVpZ2h0OiA0LjZ2dztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAuMSksIGluc2V0IDAgMCAwIDJweCByZ2JhKDAsIDAsIDAsIC4xKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgei1pbmRleDogYXV0bztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyb3VwOmFmdGVyIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JvdXA6aG92ZXIge1xyXG4gICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUsIDEuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmVsZW1lbnQtc3ltYm9sIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAuZWxlbWVudC1zeW1ib2wgPiBie1xyXG4gICAgfVxyXG5cclxuICAgIC5udW1iZXItaWQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC5hdG9taWMtb3JiaXRhbC1zaGVsbHMge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXg6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmF0b21pYy1vcmJpdGFsLXNoZWxscyBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTA7XHJcbiAgICB9XHJcblxyXG4gICAgLmVsZW1lbnQtbmFtZXtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICBmbGV4OiAxIDE7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgfVxyXG4gICAgLnBvcHVsYXRpb257XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgZmxleDogMSAxO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luOiAtM3B4IC00cHggM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlLWJvZHkge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsLWltYWdlLWZ1bGwgLm1vZGFsLWNvbnRlbnR7XHJcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qISogKi9cclxuLyogICMjRGV2aWNlID0gTGFwdG9wcywgRGVza3RvcHMqL1xyXG4vKiAgIyNTY3JlZW4gPSBCL3cgMTAyNXB4IHRvIDEyODAqL1xyXG4vKiohKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC5mYW1pbHktbWVudSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgIGxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjU1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSAuZmFtaWx5LW1lbnUtb3B0aW9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IC5mYW1pbHktbWVudS1jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IHRhYmxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgLmNhcmQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgdGJvZHkgdHIge1xyXG4gICAgICAgIC8qZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47Ki9cclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgdGJvZHkgdHIgdGQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IHRib2R5IHRyIHRkIGIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGVja2JveC1vcHRpb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpZWxkOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgI0twLnBlcmlvZGljLXRhYmxlLWZhbWlseXtcclxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMTtcclxuICAgIH1cclxuXHJcbiAgICAjQ3UucGVyaW9kaWMtdGFibGUtZmFtaWx5e1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNBeS5wZXJpb2RpYy10YWJsZS1mYW1pbHl7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE0O1xyXG4gICAgfVxyXG5cclxuICAgICNQb1MucGVyaW9kaWMtdGFibGUtZmFtaWx5IHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTM7XHJcbiAgICB9XHJcblxyXG4gICAgI1FlLnBlcmlvZGljLXRhYmxlLWZhbWlseSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDEyO1xyXG4gICAgfVxyXG5cclxuICAgICNNeS5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLCAjVHAucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbiwgI1lhLnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24sICNBay5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLCAjSXQucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbiB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgI1RzLnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI0h2LnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI015LnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI0txLnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI0F3LnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgI0l4LnBlcmlvZGljLXRhYmxlLXJ1cmFsLCAjQ2kucGVyaW9kaWMtdGFibGUtcnVyYWwsICNUYS5wZXJpb2RpYy10YWJsZS1ydXJhbCwgI01pLnBlcmlvZGljLXRhYmxlLXJ1cmFsLCAjSXQucGVyaW9kaWMtdGFibGUtcnVyYWwge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNUaFMucGVyaW9kaWMtdGFibGUtaXJlLCAjSHUucGVyaW9kaWMtdGFibGUtaXJlLCAjQ2hULnBlcmlvZGljLXRhYmxlLWlyZSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgI0F3LnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcywgI1RhLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcywgI01vLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcywgI090LnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcyAsICNUcC5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMgIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIH1cclxuXHJcbiAgICAub3JkZW4tbWVudSAuc3VidGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAudmVydGljYWwtZ3JpZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnZlcnRpY2FsLWdyaWRzIGxpIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBoZWlnaHQ6IDQuMnZ3O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgICAgei1pbmRleDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtZ3JpZHMge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtZ3JpZHMgPiB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFsLWxpc3QtYSBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDYuMjUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWIgbGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAzMy4zJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtbGlzdC1jIGxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNy4xJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtbGlzdC1ncm91cHMge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWdyb3VwcyBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtc3ltYm9sc3tcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYnN7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC10YWJ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtdGFiLXN5bWJvbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtdGFiLXN5bWJvbHMgPiB0YWJsZSA+IHRib2R5ID4gdHIgPnRkIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLWNvbHVtbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzJSA5NCUgMyU7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1jb2x1bW5zLWRpdiB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24tZ3JpZHMsIC5wZXJpb2RpYy10YWJsZS1taWdyYXRpb24tZ3JpZHMsIC5wZXJpb2RpYy10YWJsZS1ydXJhbC1ncmlkcywgLnBlcmlvZGljLXRhYmxlLWlyZS1ncmlkcywgLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcy1ncmlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMyUpO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1hbHBoYWJldC1ncmlkc3tcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDE0LCA3LjElKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLWdyaWRzIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDEyLjUlKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLWdyaWRzLWIge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMjUlKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtZmFtaWx5LWdyaWRzIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDE2LCA2LjI1JSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbHVtbi1vbmUge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbHVtbi10d28sIC5jb2x1bW4tdGhyZWUsIC5jb2x1bW4tZm91ciB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbHVtbi1maXZlIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmlzLXNtYWxsLWJ1dHRvbntcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JvdXAge1xyXG4gICAgICAgIC8qbWluLWhlaWdodDogMTAzcHg7Ki9cclxuICAgICAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIC8qd2lkdGg6IDEwNXB4OyovXHJcbiAgICAgICAgaGVpZ2h0OiA0LjZ2dztcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAuMSksIGluc2V0IDAgMCAwIDJweCByZ2JhKDAsIDAsIDAsIC4xKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgei1pbmRleDogYXV0bztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyb3VwOmFmdGVyIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JvdXA6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41LCAxLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbGVtZW50LXN5bWJvbCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmVsZW1lbnQtc3ltYm9sID4gYntcclxuICAgIH1cclxuXHJcbiAgICAubnVtYmVyLWlkIHtcclxuICAgICAgICBmb250LXNpemU6IDdweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAuYXRvbWljLW9yYml0YWwtc2hlbGxzIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hdG9taWMtb3JiaXRhbC1zaGVsbHMgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbGVtZW50LW5hbWV7XHJcbiAgICAgICAgZm9udC1zaXplOiA3cHg7XHJcbiAgICAgICAgZmxleDogMSAxO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIH1cclxuICAgIC5wb3B1bGF0aW9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gICAgICAgIGZsZXg6IDEgMTtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICAgIG1hcmdpbjogLTNweCAtNHB4IDNweDtcclxuICAgIH1cclxuXHJcbiAgICAubWVzc2FnZS1ib2R5IHtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbC1pbWFnZS1mdWxsIC5tb2RhbC1jb250ZW50e1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyohKiAqL1xyXG4vKiAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAocG9ydHJhaXQpKi9cclxuLyogICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweCovXHJcbi8qKiEqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcclxuICAgIC5mYW1pbHktbWVudSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51ICBsYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IC42cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSAuZmFtaWx5LW1lbnUtb3B0aW9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IC5mYW1pbHktbWVudS1jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IHRhYmxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgLmNhcmQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgdGJvZHkgdHIge1xyXG4gICAgICAgIC8qZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47Ki9cclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgdGJvZHkgdHIgdGQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IHRib2R5IHRyIHRkIGIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGVja2JveC1vcHRpb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpZWxkOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgI0twLnBlcmlvZGljLXRhYmxlLWZhbWlseXtcclxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMTtcclxuICAgIH1cclxuXHJcbiAgICAjQ3UucGVyaW9kaWMtdGFibGUtZmFtaWx5e1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNBeS5wZXJpb2RpYy10YWJsZS1mYW1pbHl7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE0O1xyXG4gICAgfVxyXG5cclxuICAgICNQb1MucGVyaW9kaWMtdGFibGUtZmFtaWx5IHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTM7XHJcbiAgICB9XHJcblxyXG4gICAgI1FlLnBlcmlvZGljLXRhYmxlLWZhbWlseSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDEyO1xyXG4gICAgfVxyXG5cclxuICAgICNNeS5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLCAjVHAucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbiwgI1lhLnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24sICNBay5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLCAjSXQucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbiB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgI1RzLnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI0h2LnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI015LnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI0txLnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI0F3LnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgI0l4LnBlcmlvZGljLXRhYmxlLXJ1cmFsLCAjQ2kucGVyaW9kaWMtdGFibGUtcnVyYWwsICNUYS5wZXJpb2RpYy10YWJsZS1ydXJhbCwgI01pLnBlcmlvZGljLXRhYmxlLXJ1cmFsLCAjSXQucGVyaW9kaWMtdGFibGUtcnVyYWwge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNUaFMucGVyaW9kaWMtdGFibGUtaXJlLCAjSHUucGVyaW9kaWMtdGFibGUtaXJlLCAjQ2hULnBlcmlvZGljLXRhYmxlLWlyZSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgI0F3LnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcywgI1RhLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcywgI01vLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcywgI090LnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcyAsICNUcC5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMgIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIH1cclxuXHJcbiAgICAub3JkZW4tbWVudSAuc3VidGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAudmVydGljYWwtZ3JpZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnZlcnRpY2FsLWdyaWRzIGxpIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBoZWlnaHQ6IDQuMnZ3O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgICAgei1pbmRleDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtZ3JpZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtZ3JpZHMgPiB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFsLWxpc3QtYSBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDYuMjUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWIgbGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAzMy4zJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtbGlzdC1jIGxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNy4xJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtbGlzdC1ncm91cHMge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWdyb3VwcyBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtc3ltYm9sc3tcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYnN7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC10YWJ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtdGFiLXN5bWJvbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtdGFiLXN5bWJvbHMgPiB0YWJsZSA+IHRib2R5ID4gdHIgPnRkIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtdGFiLXN5bWJvbHMgbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLWNvbHVtbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwJSAxMDAlIDAlO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtY29sdW1ucy1kaXYge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLWdyaWRzLCAucGVyaW9kaWMtdGFibGUtbWlncmF0aW9uLWdyaWRzLCAucGVyaW9kaWMtdGFibGUtcnVyYWwtZ3JpZHMsIC5wZXJpb2RpYy10YWJsZS1pcmUtZ3JpZHMsIC5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMtZ3JpZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzMlKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtYWxwaGFiZXQtZ3JpZHN7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxNCwgNy4xJSk7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcy1ncmlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxMi41JSk7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcy1ncmlkcy1iIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDI1JSk7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLWZhbWlseS1ncmlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxNiwgNi4yNSUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4tb25lIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4tdHdvLCAuY29sdW1uLXRocmVlLCAuY29sdW1uLWZvdXIge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4tZml2ZSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5pcy1zbWFsbC1idXR0b257XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyb3VwIHtcclxuICAgICAgICAvKm1pbi1oZWlnaHQ6IDEwM3B4OyovXHJcbiAgICAgICAgbWF4LWhlaWdodDogNzBweDtcclxuICAgICAgICAvKndpZHRoOiAxMDVweDsqL1xyXG4gICAgICAgIGhlaWdodDogNC42dnc7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCAwIHJnYmEoMCwgMCwgMCwgLjEpLCBpbnNldCAwIDAgMCAycHggcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgICAgIHotaW5kZXg6IGF1dG87XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ncm91cDphZnRlciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyb3VwOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSwgMS41KTtcclxuICAgIH1cclxuXHJcbiAgICAuZWxlbWVudC1zeW1ib2wge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmVsZW1lbnQtc3ltYm9sID4gYntcclxuICAgIH1cclxuXHJcbiAgICAubnVtYmVyLWlkIHtcclxuICAgICAgICBmb250LXNpemU6IDdweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAuYXRvbWljLW9yYml0YWwtc2hlbGxzIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hdG9taWMtb3JiaXRhbC1zaGVsbHMgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbGVtZW50LW5hbWV7XHJcbiAgICAgICAgZm9udC1zaXplOiAwcHg7XHJcbiAgICAgICAgZmxleDogMSAxO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIH1cclxuICAgIC5wb3B1bGF0aW9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gICAgICAgIGZsZXg6IDEgMTtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC5wb3B1bGF0aW9uIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lc3NhZ2UtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWwtaW1hZ2UtZnVsbCAubW9kYWwtY29udGVudHtcclxuICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLyohKiAqL1xyXG4vKiAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAobGFuZHNjYXBlKSovXHJcbi8qICAjI1NjcmVlbiA9IEIvdyA3NjhweCB0byAxMDI0cHgqL1xyXG4vKiohKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAuZmFtaWx5LW1lbnUge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAqL1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSAgbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAuNnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgLmZhbWlseS1tZW51LW9wdGlvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSAuZmFtaWx5LW1lbnUtY2FyZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSB0YWJsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IC5jYXJkIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IHRib2R5IHRyIHtcclxuICAgICAgICAvKmRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyovXHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IHRib2R5IHRyIHRkIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSB0Ym9keSB0ciB0ZCBiIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2hlY2tib3gtb3B0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5maWVsZDpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICNLcC5wZXJpb2RpYy10YWJsZS1mYW1pbHl7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XHJcbiAgICB9XHJcblxyXG4gICAgI0N1LnBlcmlvZGljLXRhYmxlLWZhbWlseXtcclxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMTtcclxuICAgIH1cclxuXHJcbiAgICAjQXkucGVyaW9kaWMtdGFibGUtZmFtaWx5e1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxNDtcclxuICAgIH1cclxuXHJcbiAgICAjUG9TLnBlcmlvZGljLXRhYmxlLWZhbWlseSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDEzO1xyXG4gICAgfVxyXG5cclxuICAgICNRZS5wZXJpb2RpYy10YWJsZS1mYW1pbHkge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxMjtcclxuICAgIH1cclxuXHJcbiAgICAjTXkucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbiwgI1RwLnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24sICNZYS5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLCAjQWsucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbiwgI0l0LnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24ge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNUcy5wZXJpb2RpYy10YWJsZS1taWdyYXRpb24sICNIdi5wZXJpb2RpYy10YWJsZS1taWdyYXRpb24sICNNeS5wZXJpb2RpYy10YWJsZS1taWdyYXRpb24sICNLcS5wZXJpb2RpYy10YWJsZS1taWdyYXRpb24sICNBdy5wZXJpb2RpYy10YWJsZS1taWdyYXRpb24ge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNJeC5wZXJpb2RpYy10YWJsZS1ydXJhbCwgI0NpLnBlcmlvZGljLXRhYmxlLXJ1cmFsLCAjVGEucGVyaW9kaWMtdGFibGUtcnVyYWwsICNNaS5wZXJpb2RpYy10YWJsZS1ydXJhbCwgI0l0LnBlcmlvZGljLXRhYmxlLXJ1cmFsIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIH1cclxuXHJcbiAgICAjVGhTLnBlcmlvZGljLXRhYmxlLWlyZSwgI0h1LnBlcmlvZGljLXRhYmxlLWlyZSwgI0NoVC5wZXJpb2RpYy10YWJsZS1pcmUge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNBdy5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMsICNUYS5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMsICNNby5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMsICNPdC5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMgLCAjVHAucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzICB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLm9yZGVuLW1lbnUgLnN1YnRpdGxlIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnZlcnRpY2FsLWdyaWRzIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC52ZXJ0aWNhbC1ncmlkcyBsaSB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNzBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgaGVpZ2h0OiA0LjJ2dztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbjogNHB4O1xyXG4gICAgICAgIHotaW5kZXg6IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFsLWdyaWRzIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFsLWdyaWRzID4gdWwge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWEgbGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA2LjI1JTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtbGlzdC1iIGxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMzMuMyU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFsLWxpc3QtYyBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDcuMSU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFsLWxpc3QtZ3JvdXBzIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtbGlzdC1ncm91cHMgbGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAzMy4zJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLXN5bWJvbHN7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWJze1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtdGFie1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LXRhYi1zeW1ib2xzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LXRhYi1zeW1ib2xzID4gdGFibGUgPiB0Ym9keSA+IHRyID50ZCB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LXRhYi1zeW1ib2xzIGxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1jb2x1bW5zIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMCUgMTAwJSAwJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLWNvbHVtbnMtZGl2IHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbi1ncmlkcywgLnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbi1ncmlkcywgLnBlcmlvZGljLXRhYmxlLXJ1cmFsLWdyaWRzLCAucGVyaW9kaWMtdGFibGUtaXJlLWdyaWRzLCAucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLWdyaWRzIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDMzJSk7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLWFscGhhYmV0LWdyaWRze1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTQsIDcuMSUpO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMtZ3JpZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMTIuNSUpO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMtZ3JpZHMtYiB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAyNSUpO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1mYW1pbHktZ3JpZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTYsIDYuMjUlKTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLW9uZSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLXR3bywgLmNvbHVtbi10aHJlZSwgLmNvbHVtbi1mb3VyIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLWZpdmUge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuaXMtc21hbGwtYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ncm91cCB7XHJcbiAgICAgICAgLyptaW4taGVpZ2h0OiAxMDNweDsqL1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgLyp3aWR0aDogMTA1cHg7Ki9cclxuICAgICAgICBoZWlnaHQ6IDQuNnZ3O1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCA0cHggMCByZ2JhKDAsIDAsIDAsIC4xKSwgaW5zZXQgMCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgLjEpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgICAgICB6LWluZGV4OiBhdXRvO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JvdXA6YWZ0ZXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5ncm91cDpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUsIDEuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmVsZW1lbnQtc3ltYm9sIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5lbGVtZW50LXN5bWJvbCA+IGJ7XHJcbiAgICB9XHJcblxyXG4gICAgLm51bWJlci1pZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA3cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmF0b21pYy1vcmJpdGFsLXNoZWxscyB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZmxleDogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYXRvbWljLW9yYml0YWwtc2hlbGxzIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDtcclxuICAgIH1cclxuXHJcbiAgICAuZWxlbWVudC1uYW1le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMHB4O1xyXG4gICAgICAgIGZsZXg6IDEgMTtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICB9XHJcbiAgICAucG9wdWxhdGlvbntcclxuICAgICAgICBmb250LXNpemU6IDdweDtcclxuICAgICAgICBmbGV4OiAxIDE7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIH1cclxuXHJcbiAgICAucG9wdWxhdGlvbiBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlLWJvZHkge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsLWltYWdlLWZ1bGwgLm1vZGFsLWNvbnRlbnR7XHJcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsLWNhcmQtdGl0bGUge1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiEqICovXHJcbi8qICAjI0RldmljZSA9IExvdyBSZXNvbHV0aW9uIFRhYmxldHMsIE1vYmlsZXMgKExhbmRzY2FwZSkqL1xyXG4vKiAgIyNTY3JlZW4gPSBCL3cgNDgxcHggdG8gNzY3cHgqL1xyXG4vKiohKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuZmFtaWx5LW1lbnUge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAqL1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSAgbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAuNnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgLmZhbWlseS1tZW51LW9wdGlvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSAuZmFtaWx5LW1lbnUtY2FyZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSB0YWJsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IC5jYXJkIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IHRib2R5IHRyIHtcclxuICAgICAgICAvKmRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyovXHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IHRib2R5IHRyIHRkIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSB0Ym9keSB0ciB0ZCBiIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2hlY2tib3gtb3B0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5maWVsZDpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qI0twLnBlcmlvZGljLXRhYmxlLWZhbWlseXtcclxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMTtcclxuICAgIH1cclxuXHJcbiAgICAjQ3UucGVyaW9kaWMtdGFibGUtZmFtaWx5e1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNBeS5wZXJpb2RpYy10YWJsZS1mYW1pbHl7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE0O1xyXG4gICAgfVxyXG5cclxuICAgICNQb1MucGVyaW9kaWMtdGFibGUtZmFtaWx5IHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTM7XHJcbiAgICB9XHJcblxyXG4gICAgI1FlLnBlcmlvZGljLXRhYmxlLWZhbWlseSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDEyO1xyXG4gICAgfSovXHJcblxyXG4gICAgLyojTXkucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbiwgI1RwLnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24sICNZYS5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLCAjQWsucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbiwgI0l0LnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24ge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNUcy5wZXJpb2RpYy10YWJsZS1taWdyYXRpb24sICNIdi5wZXJpb2RpYy10YWJsZS1taWdyYXRpb24sICNNeS5wZXJpb2RpYy10YWJsZS1taWdyYXRpb24sICNLcS5wZXJpb2RpYy10YWJsZS1taWdyYXRpb24sICNBdy5wZXJpb2RpYy10YWJsZS1taWdyYXRpb24ge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNJeC5wZXJpb2RpYy10YWJsZS1ydXJhbCwgI0NpLnBlcmlvZGljLXRhYmxlLXJ1cmFsLCAjVGEucGVyaW9kaWMtdGFibGUtcnVyYWwsICNNaS5wZXJpb2RpYy10YWJsZS1ydXJhbCwgI0l0LnBlcmlvZGljLXRhYmxlLXJ1cmFsIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIH1cclxuXHJcbiAgICAjVGhTLnBlcmlvZGljLXRhYmxlLWlyZSwgI0h1LnBlcmlvZGljLXRhYmxlLWlyZSwgI0NoVC5wZXJpb2RpYy10YWJsZS1pcmUge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNBdy5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMsICNUYS5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMsICNNby5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMsICNPdC5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMgLCAjVHAucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzICB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcbiovXHJcbiAgICAub3JkZW4tbWVudSAuc3VidGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAudmVydGljYWwtZ3JpZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnZlcnRpY2FsLWdyaWRzIGxpIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBoZWlnaHQ6IDQuMnZ3O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgICAgei1pbmRleDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtZ3JpZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtZ3JpZHMgPiB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFsLWxpc3QtYSBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDYuMjUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWIgbGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAzMy4zJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtbGlzdC1jIGxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNy4xJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtbGlzdC1ncm91cHMge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWdyb3VwcyBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtc3ltYm9sc3tcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYnN7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC10YWJ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtdGFiLXN5bWJvbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtdGFiLXN5bWJvbHMgPiB0YWJsZSA+IHRib2R5ID4gdHIgPnRkIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtdGFiLXN5bWJvbHMgbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLWNvbHVtbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwJSAxMDAlIDAlO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtY29sdW1ucy1kaXYge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLWdyaWRzLCAucGVyaW9kaWMtdGFibGUtbWlncmF0aW9uLWdyaWRzLCAucGVyaW9kaWMtdGFibGUtcnVyYWwtZ3JpZHMsIC5wZXJpb2RpYy10YWJsZS1pcmUtZ3JpZHMsIC5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMtZ3JpZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzMlKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtYWxwaGFiZXQtZ3JpZHN7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxNCwgNy4xJSk7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcy1ncmlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxMi41JSk7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcy1ncmlkcy1iIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDI1JSk7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLWZhbWlseS1ncmlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAyMCUpO1xyXG4gICAgICAgIC8qcGFkZGluZy10b3A6IDU2cHg7Ki9cclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLW9uZSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLXR3bywgLmNvbHVtbi10aHJlZSwgLmNvbHVtbi1mb3VyIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLWZpdmUge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuaXMtc21hbGwtYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ncm91cCB7XHJcbiAgICAgICAgLyptaW4taGVpZ2h0OiAxMDNweDsqL1xyXG4gICAgICAgIC8qd2lkdGg6IDEwNXB4OyovXHJcbiAgICAgICAgaGVpZ2h0OiAxN3Z3O1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCA0cHggMCByZ2JhKDAsIDAsIDAsIC4xKSwgaW5zZXQgMCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgLjEpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgICAgICB6LWluZGV4OiBhdXRvO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JvdXA6YWZ0ZXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5ncm91cDpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XHJcbiAgICB9XHJcblxyXG4gICAgLmVsZW1lbnQtc3ltYm9sIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAuZWxlbWVudC1zeW1ib2wgPiBie1xyXG4gICAgfVxyXG5cclxuICAgIC5udW1iZXItaWQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC5hdG9taWMtb3JiaXRhbC1zaGVsbHMge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXg6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmF0b21pYy1vcmJpdGFsLXNoZWxscyBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTA7XHJcbiAgICB9XHJcblxyXG4gICAgLmVsZW1lbnQtbmFtZXtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZmxleDogMSAxO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIH1cclxuICAgIC5wb3B1bGF0aW9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgIGZsZXg6IDEgMTtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICAgIG1hcmdpbjogLTNweCAtNHB4IDNweDtcclxuICAgIH1cclxuXHJcbiAgICAubWVzc2FnZS1ib2R5IHtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbC1pbWFnZS1mdWxsIC5tb2RhbC1jb250ZW50e1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbC1jYXJkLXRpdGxlIHtcclxuICAgICAgICBmbGV4LXNocmluazogMTtcclxuICAgIH1cclxuXHJcbiAgICAudGFne1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiEqICovXHJcbi8qICAjI0RldmljZSA9IE1vc3Qgb2YgdGhlIFNtYXJ0cGhvbmVzIE1vYmlsZXMgKFBvcnRyYWl0KSovXHJcbi8qICAjI1NjcmVlbiA9IEIvdyAzMjAgdG8gNDc5cHgqL1xyXG4vKiohKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuZmFtaWx5LW1lbnUge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAqL1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSAgbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAuNnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgLmZhbWlseS1tZW51LW9wdGlvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSAuZmFtaWx5LW1lbnUtY2FyZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSB0YWJsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IC5jYXJkIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IHRib2R5IHRyIHtcclxuICAgICAgICAvKmRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyovXHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IHRib2R5IHRyIHRkIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSB0Ym9keSB0ciB0ZCBiIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2hlY2tib3gtb3B0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5maWVsZDpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qI0twLnBlcmlvZGljLXRhYmxlLWZhbWlseXtcclxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMTtcclxuICAgIH1cclxuXHJcbiAgICAjQ3UucGVyaW9kaWMtdGFibGUtZmFtaWx5e1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNBeS5wZXJpb2RpYy10YWJsZS1mYW1pbHl7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE0O1xyXG4gICAgfVxyXG5cclxuICAgICNQb1MucGVyaW9kaWMtdGFibGUtZmFtaWx5IHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTM7XHJcbiAgICB9XHJcblxyXG4gICAgI1FlLnBlcmlvZGljLXRhYmxlLWZhbWlseSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDEyO1xyXG4gICAgfSovXHJcblxyXG4gICAgLyojTXkucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbiwgI1RwLnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24sICNZYS5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLCAjQWsucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbiwgI0l0LnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24ge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNUcy5wZXJpb2RpYy10YWJsZS1taWdyYXRpb24sICNIdi5wZXJpb2RpYy10YWJsZS1taWdyYXRpb24sICNNeS5wZXJpb2RpYy10YWJsZS1taWdyYXRpb24sICNLcS5wZXJpb2RpYy10YWJsZS1taWdyYXRpb24sICNBdy5wZXJpb2RpYy10YWJsZS1taWdyYXRpb24ge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNJeC5wZXJpb2RpYy10YWJsZS1ydXJhbCwgI0NpLnBlcmlvZGljLXRhYmxlLXJ1cmFsLCAjVGEucGVyaW9kaWMtdGFibGUtcnVyYWwsICNNaS5wZXJpb2RpYy10YWJsZS1ydXJhbCwgI0l0LnBlcmlvZGljLXRhYmxlLXJ1cmFsIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIH1cclxuXHJcbiAgICAjVGhTLnBlcmlvZGljLXRhYmxlLWlyZSwgI0h1LnBlcmlvZGljLXRhYmxlLWlyZSwgI0NoVC5wZXJpb2RpYy10YWJsZS1pcmUge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNBdy5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMsICNUYS5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMsICNNby5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMsICNPdC5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMgLCAjVHAucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzICB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9Ki9cclxuXHJcbiAgICAub3JkZW4tbWVudSAuc3VidGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAudmVydGljYWwtZ3JpZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnZlcnRpY2FsLWdyaWRzIGxpIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBoZWlnaHQ6IDQuMnZ3O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgICAgei1pbmRleDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtZ3JpZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtZ3JpZHMgPiB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFsLWxpc3QtYSBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDYuMjUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWIgbGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAzMy4zJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtbGlzdC1jIGxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNy4xJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtbGlzdC1ncm91cHMge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWdyb3VwcyBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtc3ltYm9sc3tcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYnN7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC10YWJ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtdGFiLXN5bWJvbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtdGFiLXN5bWJvbHMgPiB0YWJsZSA+IHRib2R5ID4gdHIgPnRkIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtdGFiLXN5bWJvbHMgbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLWNvbHVtbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwJSAxMDAlIDAlO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtY29sdW1ucy1kaXYge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLWdyaWRzLCAucGVyaW9kaWMtdGFibGUtbWlncmF0aW9uLWdyaWRzLCAucGVyaW9kaWMtdGFibGUtcnVyYWwtZ3JpZHMsIC5wZXJpb2RpYy10YWJsZS1pcmUtZ3JpZHMsIC5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMtZ3JpZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzMlKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtYWxwaGFiZXQtZ3JpZHN7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxNCwgNy4xJSk7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcy1ncmlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxMi41JSk7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcy1ncmlkcy1iIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDI1JSk7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLWZhbWlseS1ncmlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMy4zMyUpO1xyXG4gICAgICAgIC8qcGFkZGluZy10b3A6IDU2cHg7Ki9cclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLW9uZSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLXR3bywgLmNvbHVtbi10aHJlZSwgLmNvbHVtbi1mb3VyIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLWZpdmUge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuaXMtc21hbGwtYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ncm91cCB7XHJcbiAgICAgICAgLyptaW4taGVpZ2h0OiAxMDNweDsqL1xyXG4gICAgICAgIC8qd2lkdGg6IDEwNXB4OyovXHJcbiAgICAgICAgaGVpZ2h0OiAyNHZ3O1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCA0cHggMCByZ2JhKDAsIDAsIDAsIC4xKSwgaW5zZXQgMCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgLjEpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgICAgICB6LWluZGV4OiBhdXRvO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JvdXA6YWZ0ZXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5ncm91cDpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XHJcbiAgICB9XHJcblxyXG4gICAgLmVsZW1lbnQtc3ltYm9sIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAuZWxlbWVudC1zeW1ib2wgPiBie1xyXG4gICAgfVxyXG5cclxuICAgIC5udW1iZXItaWQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC5hdG9taWMtb3JiaXRhbC1zaGVsbHMge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXg6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmF0b21pYy1vcmJpdGFsLXNoZWxscyBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTA7XHJcbiAgICB9XHJcblxyXG4gICAgLmVsZW1lbnQtbmFtZXtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZmxleDogMSAxO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIH1cclxuICAgIC5wb3B1bGF0aW9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmbGV4OiAxIDE7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICBtYXJnaW46IC0zcHggLTRweCAzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lc3NhZ2UtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWwtaW1hZ2UtZnVsbCAubW9kYWwtY29udGVudHtcclxuICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWwtY2FyZC10aXRsZSB7XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhZ3tcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/tabla-lenguas-indigenas/tabla-lenguas-indigenas.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/tabla-lenguas-indigenas/tabla-lenguas-indigenas.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \r\n  ##Device = Desktops\r\n  ##Screen = 1281px to higher resolution desktops\r\n*/\r\n@media (min-width: 1281px) {\r\n    .family-menu {\r\n        /*\r\n        margin-top: 0;\r\n        margin-bottom: 0;\r\n        height: 0;\r\n        */\r\n        display: flex;\r\n        justify-content: center;\r\n        margin-bottom: 5px;\r\n        margin-top: 5px;\r\n\r\n    }\r\n\r\n    .family-menu .family-menu-options {\r\n        display: flex;\r\n        justify-content: flex-end;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu .family-menu-card {\r\n        display: flex;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu table {\r\n        background: none;\r\n        display: table;\r\n        list-style: none;\r\n        position: absolute;\r\n        font-size: 12px;\r\n    }\r\n\r\n    .family-menu .card {\r\n        position: absolute;\r\n    }\r\n\r\n    .family-menu tbody tr {\r\n        /*display: flex;\r\n        justify-content: space-between;*/\r\n    }\r\n\r\n    .family-menu tbody tr td {\r\n        border: none;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .family-menu tbody tr td b {\r\n        padding-left: 5px;\r\n    }\r\n\r\n    .checkbox-option {\r\n        padding-top: 0px;\r\n        padding-bottom: 0px;\r\n        height: 22px;\r\n    }\r\n\r\n    .field:not(:last-child) {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    #Kp.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Cu.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Ay.periodic-table-family{\r\n        grid-column-start: 14;\r\n    }\r\n\r\n    #PoS.periodic-table-family {\r\n        grid-column-start: 13;\r\n    }\r\n\r\n    #Qe.periodic-table-family {\r\n        grid-column-start: 12;\r\n    }\r\n\r\n    #My.periodic-table-population, #Tp.periodic-table-population, #Ya.periodic-table-population, #Ak.periodic-table-population, #It.periodic-table-population {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ts.periodic-table-migration, #Hv.periodic-table-migration, #My.periodic-table-migration, #Kq.periodic-table-migration, #Aw.periodic-table-migration {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ix.periodic-table-rural, #Ci.periodic-table-rural, #Ta.periodic-table-rural, #Mi.periodic-table-rural, #It.periodic-table-rural {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #ThS.periodic-table-ire, #Hu.periodic-table-ire, #ChT.periodic-table-ire {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Aw.periodic-table-variantes, #Ta.periodic-table-variantes, #Mo.periodic-table-variantes, #Ot.periodic-table-variantes , #Tp.periodic-table-variantes  {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    .orden-menu .subtitle {\r\n        margin-bottom: 10px !important;\r\n    }\r\n\r\n    .vertical-grids {\r\n        display: grid;\r\n    }\r\n\r\n    .vertical-grids li {\r\n        max-height: 70px;\r\n        padding: 10px 0;\r\n        height: 4.6vw;\r\n        overflow: hidden;\r\n        margin: 4px;\r\n        z-index: auto;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-grids {\r\n        margin-left: 35px;\r\n        margin-right: 35px;\r\n        padding-top: 10px;\r\n        margin-bottom: 0px;\r\n    }\r\n\r\n    .horizontal-grids > ul {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-a li {\r\n        float: left;\r\n        width: 6.25%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-b li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-c li {\r\n        float: left;\r\n        width: 7.1%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-groups {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-groups li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-symbols{\r\n        padding-top: 0;\r\n    }\r\n\r\n    .periodic-table {\r\n        list-style: none;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .tabs{\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .content-tab{\r\n        padding-bottom: 0;\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .content-tab-symbols {\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n    .content-tab-symbols > table > tbody > tr >td {\r\n        cursor: pointer;\r\n    }\r\n\r\n    .periodic-table-columns {\r\n        display: grid;\r\n        grid-template-columns: 3% 94% 3%;\r\n        grid-template-rows: auto;\r\n    }\r\n\r\n    .periodic-table-columns-div {\r\n        align-self: flex-end;\r\n    }\r\n\r\n    .periodic-table-population-grids, .periodic-table-migration-grids, .periodic-table-rural-grids, .periodic-table-ire-grids, .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 33%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-alphabet-grids{\r\n        display: grid;\r\n        grid-template-columns: repeat(14, 7.1%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(8, 12.5%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids-b {\r\n        display: grid;\r\n        grid-template-columns: repeat(4, 25%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-family-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(16, 6.25%);\r\n    }\r\n\r\n    .column-one {\r\n        padding-right: 0;\r\n    }\r\n\r\n    .column-two, .column-three, .column-four {\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .column-five {\r\n        padding-left: 0;\r\n    }\r\n\r\n    .is-small-button{\r\n        font-size: 9px;\r\n    }\r\n\r\n    .group {\r\n        /*min-height: 103px;*/\r\n        max-height: 70px;\r\n        /*width: 105px;*/\r\n        height: 4.6vw;\r\n        padding: 5px;\r\n        border-radius: 5px;\r\n        overflow: hidden;\r\n        margin: 4px;\r\n        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .1), inset 0 0 0 2px rgba(0, 0, 0, .1);\r\n        transition: all 0.2s linear;\r\n        -webkit-transition: all 0.2s linear;\r\n        z-index: auto;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .group:after {\r\n        border-radius: 5px;\r\n        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\r\n        opacity: 0;\r\n    }\r\n\r\n    .group:hover {\r\n       transform: scale(1.5, 1.5);\r\n    }\r\n\r\n    .element-symbol {\r\n        margin-top: -10px;\r\n        font-size: 19px;\r\n        text-align: left;\r\n    }\r\n\r\n    .element-symbol > b{\r\n    }\r\n\r\n    .number-id {\r\n        font-size: 9px;\r\n        text-align: right;\r\n    }\r\n\r\n    .atomic-orbital-shells {\r\n        float: right;\r\n        font-size: 10px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex: 0;\r\n        position: absolute;\r\n        right: 5px;\r\n    }\r\n\r\n    .atomic-orbital-shells span {\r\n        display: block;\r\n        text-align: right;\r\n        line-height: 10;\r\n    }\r\n\r\n    .element-name{\r\n        font-size: 9px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n        margin-top: -5px;\r\n    }\r\n    .population{\r\n        font-size: 9px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n        margin: -3px -4px 3px;\r\n    }\r\n\r\n    .message-body {\r\n        padding: 30px;\r\n    }\r\n\r\n    .modal-image-full .modal-content{\r\n        margin: 0 20px;\r\n        max-height: calc(100vh - 100px);\r\n        overflow: auto;\r\n        position: relative;\r\n        width: 100%;\r\n    }\r\n}\r\n/*!* */\r\n/*  ##Device = Laptops, Desktops*/\r\n/*  ##Screen = B/w 1025px to 1280*/\r\n/**!*/\r\n@media (min-width: 1024px) and (max-width: 1280px) {\r\n    .family-menu {\r\n        /*\r\n        margin-top: 0;\r\n        margin-bottom: 0;\r\n        height: 0;\r\n        */\r\n        display: flex;\r\n        justify-content: center;\r\n        margin: 5px;\r\n    }\r\n\r\n    .family-menu  label{\r\n        font-size: .55rem;\r\n    }\r\n\r\n    .family-menu .family-menu-options {\r\n        display: flex;\r\n        justify-content: flex-end;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu .family-menu-card {\r\n        display: flex;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu table {\r\n        background: none;\r\n        display: table;\r\n        list-style: none;\r\n        position: absolute;\r\n        font-size: 12px;\r\n    }\r\n\r\n    .family-menu .card {\r\n        position: absolute;\r\n    }\r\n\r\n    .family-menu tbody tr {\r\n        /*display: flex;\r\n        justify-content: space-between;*/\r\n    }\r\n\r\n    .family-menu tbody tr td {\r\n        border: none;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .family-menu tbody tr td b {\r\n        padding-left: 5px;\r\n    }\r\n\r\n    .checkbox-option {\r\n        padding-top: 0px;\r\n        padding-bottom: 0px;\r\n        height: 22px;\r\n    }\r\n\r\n    .field:not(:last-child) {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    #Kp.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Cu.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Ay.periodic-table-family{\r\n        grid-column-start: 14;\r\n    }\r\n\r\n    #PoS.periodic-table-family {\r\n        grid-column-start: 13;\r\n    }\r\n\r\n    #Qe.periodic-table-family {\r\n        grid-column-start: 12;\r\n    }\r\n\r\n    #My.periodic-table-population, #Tp.periodic-table-population, #Ya.periodic-table-population, #Ak.periodic-table-population, #It.periodic-table-population {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ts.periodic-table-migration, #Hv.periodic-table-migration, #My.periodic-table-migration, #Kq.periodic-table-migration, #Aw.periodic-table-migration {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ix.periodic-table-rural, #Ci.periodic-table-rural, #Ta.periodic-table-rural, #Mi.periodic-table-rural, #It.periodic-table-rural {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #ThS.periodic-table-ire, #Hu.periodic-table-ire, #ChT.periodic-table-ire {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Aw.periodic-table-variantes, #Ta.periodic-table-variantes, #Mo.periodic-table-variantes, #Ot.periodic-table-variantes , #Tp.periodic-table-variantes  {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    .orden-menu .subtitle {\r\n        margin-bottom: 10px !important;\r\n    }\r\n\r\n    .vertical-grids {\r\n        display: grid;\r\n    }\r\n\r\n    .vertical-grids li {\r\n        max-height: 70px;\r\n        padding: 10px 0;\r\n        height: 4.2vw;\r\n        overflow: hidden;\r\n        margin: 4px;\r\n        z-index: auto;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-grids {\r\n        margin-left: 30px;\r\n        margin-right: 30px;\r\n        padding-top: 10px;\r\n        margin-bottom: 0px;\r\n    }\r\n\r\n    .horizontal-grids > ul {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-a li {\r\n        float: left;\r\n        width: 6.25%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-b li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-c li {\r\n        float: left;\r\n        width: 7.1%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-groups {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-groups li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-symbols{\r\n        padding-top: 0;\r\n    }\r\n\r\n    .periodic-table {\r\n        list-style: none;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .tabs{\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .content-tab{\r\n        padding-bottom: 0;\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .content-tab-symbols {\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n    .content-tab-symbols > table > tbody > tr >td {\r\n        cursor: pointer;\r\n    }\r\n\r\n    .periodic-table-columns {\r\n        display: grid;\r\n        grid-template-columns: 3% 94% 3%;\r\n        grid-template-rows: auto;\r\n    }\r\n\r\n    .periodic-table-columns-div {\r\n        align-self: flex-end;\r\n    }\r\n\r\n    .periodic-table-population-grids, .periodic-table-migration-grids, .periodic-table-rural-grids, .periodic-table-ire-grids, .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 33%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-alphabet-grids{\r\n        display: grid;\r\n        grid-template-columns: repeat(14, 7.1%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(8, 12.5%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids-b {\r\n        display: grid;\r\n        grid-template-columns: repeat(4, 25%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-family-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(16, 6.25%);\r\n    }\r\n\r\n    .column-one {\r\n        padding-right: 0;\r\n    }\r\n\r\n    .column-two, .column-three, .column-four {\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .column-five {\r\n        padding-left: 0;\r\n    }\r\n\r\n    .is-small-button{\r\n        font-size: 9px;\r\n    }\r\n\r\n    .group {\r\n        /*min-height: 103px;*/\r\n        max-height: 70px;\r\n        /*width: 105px;*/\r\n        height: 4.6vw;\r\n        padding: 3px;\r\n        border-radius: 5px;\r\n        overflow: hidden;\r\n        margin: 2px;\r\n        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .1), inset 0 0 0 2px rgba(0, 0, 0, .1);\r\n        transition: all 0.2s linear;\r\n        -webkit-transition: all 0.2s linear;\r\n        z-index: auto;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .group:after {\r\n        border-radius: 5px;\r\n        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\r\n        opacity: 0;\r\n    }\r\n\r\n    .group:hover {\r\n        transform: scale(1.5, 1.5);\r\n    }\r\n\r\n    .element-symbol {\r\n        margin-top: -10px;\r\n        font-size: 17px;\r\n        text-align: left;\r\n    }\r\n\r\n    .element-symbol > b{\r\n    }\r\n\r\n    .number-id {\r\n        font-size: 7px;\r\n        text-align: right;\r\n    }\r\n\r\n    .atomic-orbital-shells {\r\n        float: right;\r\n        font-size: 10px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex: 0;\r\n        position: absolute;\r\n        right: 5px;\r\n    }\r\n\r\n    .atomic-orbital-shells span {\r\n        display: block;\r\n        text-align: right;\r\n        line-height: 10;\r\n    }\r\n\r\n    .element-name{\r\n        font-size: 7px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n        margin-top: -5px;\r\n    }\r\n    .population{\r\n        font-size: 7px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n        margin: -3px -4px 3px;\r\n    }\r\n\r\n    .message-body {\r\n        padding: 30px;\r\n    }\r\n\r\n    .modal-image-full .modal-content{\r\n        margin: 0 20px;\r\n        max-height: calc(100vh - 100px);\r\n        overflow: auto;\r\n        position: relative;\r\n        width: 100%;\r\n    }\r\n}\r\n/*!* */\r\n/*  ##Device = Tablets, Ipads (portrait)*/\r\n/*  ##Screen = B/w 768px to 1024px*/\r\n/**!*/\r\n@media (min-width: 768px) and (max-width: 1023px) {\r\n    .family-menu {\r\n        /*\r\n        margin-top: 0;\r\n        margin-bottom: 0;\r\n        height: 0;\r\n        */\r\n        display: flex;\r\n        justify-content: center;\r\n        margin: 5px;\r\n\r\n    }\r\n\r\n    .family-menu  label{\r\n        font-size: .6rem;\r\n    }\r\n\r\n    .family-menu .family-menu-options {\r\n        display: flex;\r\n        justify-content: flex-end;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu .family-menu-card {\r\n        display: flex;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu table {\r\n        background: none;\r\n        display: table;\r\n        list-style: none;\r\n        position: absolute;\r\n        font-size: 12px;\r\n    }\r\n\r\n    .family-menu .card {\r\n        position: absolute;\r\n    }\r\n\r\n    .family-menu tbody tr {\r\n        /*display: flex;\r\n        justify-content: space-between;*/\r\n    }\r\n\r\n    .family-menu tbody tr td {\r\n        border: none;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .family-menu tbody tr td b {\r\n        padding-left: 5px;\r\n    }\r\n\r\n    .checkbox-option {\r\n        padding-top: 0px;\r\n        padding-bottom: 0px;\r\n        height: 22px;\r\n    }\r\n\r\n    .field:not(:last-child) {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    #Kp.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Cu.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Ay.periodic-table-family{\r\n        grid-column-start: 14;\r\n    }\r\n\r\n    #PoS.periodic-table-family {\r\n        grid-column-start: 13;\r\n    }\r\n\r\n    #Qe.periodic-table-family {\r\n        grid-column-start: 12;\r\n    }\r\n\r\n    #My.periodic-table-population, #Tp.periodic-table-population, #Ya.periodic-table-population, #Ak.periodic-table-population, #It.periodic-table-population {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ts.periodic-table-migration, #Hv.periodic-table-migration, #My.periodic-table-migration, #Kq.periodic-table-migration, #Aw.periodic-table-migration {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ix.periodic-table-rural, #Ci.periodic-table-rural, #Ta.periodic-table-rural, #Mi.periodic-table-rural, #It.periodic-table-rural {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #ThS.periodic-table-ire, #Hu.periodic-table-ire, #ChT.periodic-table-ire {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Aw.periodic-table-variantes, #Ta.periodic-table-variantes, #Mo.periodic-table-variantes, #Ot.periodic-table-variantes , #Tp.periodic-table-variantes  {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    .orden-menu .subtitle {\r\n        margin-bottom: 10px !important;\r\n    }\r\n\r\n    .vertical-grids {\r\n        display: grid;\r\n    }\r\n\r\n    .vertical-grids li {\r\n        max-height: 70px;\r\n        padding: 10px 0;\r\n        height: 4.2vw;\r\n        overflow: hidden;\r\n        margin: 4px;\r\n        z-index: auto;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-grids {\r\n        display: none;\r\n    }\r\n\r\n    .horizontal-grids > ul {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-a li {\r\n        float: left;\r\n        width: 6.25%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-b li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-c li {\r\n        float: left;\r\n        width: 7.1%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-groups {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-groups li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-symbols{\r\n        padding-top: 0;\r\n    }\r\n\r\n    .periodic-table {\r\n        list-style: none;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .tabs{\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .content-tab{\r\n        padding-bottom: 0;\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .content-tab-symbols {\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n    .content-tab-symbols > table > tbody > tr >td {\r\n        cursor: pointer;\r\n    }\r\n\r\n    .content-tab-symbols label{\r\n        font-size: 9px;\r\n    }\r\n\r\n    .periodic-table-columns {\r\n        display: grid;\r\n        grid-template-columns: 0% 100% 0%;\r\n        grid-template-rows: auto;\r\n    }\r\n\r\n    .periodic-table-columns-div {\r\n        align-self: flex-end;\r\n    }\r\n\r\n    .periodic-table-population-grids, .periodic-table-migration-grids, .periodic-table-rural-grids, .periodic-table-ire-grids, .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 33%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-alphabet-grids{\r\n        display: grid;\r\n        grid-template-columns: repeat(14, 7.1%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(8, 12.5%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids-b {\r\n        display: grid;\r\n        grid-template-columns: repeat(4, 25%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-family-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(16, 6.25%);\r\n    }\r\n\r\n    .column-one {\r\n        padding-right: 0;\r\n    }\r\n\r\n    .column-two, .column-three, .column-four {\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .column-five {\r\n        padding-left: 0;\r\n    }\r\n\r\n    .is-small-button{\r\n        font-size: 9px;\r\n    }\r\n\r\n    .group {\r\n        /*min-height: 103px;*/\r\n        max-height: 70px;\r\n        /*width: 105px;*/\r\n        height: 4.6vw;\r\n        padding: 3px;\r\n        border-radius: 5px;\r\n        overflow: hidden;\r\n        margin: 2px;\r\n        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .1), inset 0 0 0 2px rgba(0, 0, 0, .1);\r\n        transition: all 0.2s linear;\r\n        -webkit-transition: all 0.2s linear;\r\n        z-index: auto;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .group:after {\r\n        border-radius: 5px;\r\n        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\r\n        opacity: 0;\r\n    }\r\n\r\n    .group:hover {\r\n        transform: scale(1.5, 1.5);\r\n    }\r\n\r\n    .element-symbol {\r\n        margin-top: -5px;\r\n        font-size: 17px;\r\n        text-align: left;\r\n    }\r\n\r\n    .element-symbol > b{\r\n    }\r\n\r\n    .number-id {\r\n        font-size: 7px;\r\n        text-align: right;\r\n    }\r\n\r\n    .atomic-orbital-shells {\r\n        float: right;\r\n        font-size: 10px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex: 0;\r\n        position: absolute;\r\n        right: 5px;\r\n    }\r\n\r\n    .atomic-orbital-shells span {\r\n        display: block;\r\n        text-align: right;\r\n        line-height: 10;\r\n    }\r\n\r\n    .element-name{\r\n        font-size: 0px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n        margin-top: -5px;\r\n    }\r\n    .population{\r\n        font-size: 7px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n    }\r\n\r\n    .population span {\r\n        display: none;\r\n    }\r\n\r\n    .message-body {\r\n        padding: 30px;\r\n    }\r\n\r\n    .modal-image-full .modal-content{\r\n        margin: 0 20px;\r\n        max-height: calc(100vh - 100px);\r\n        overflow: auto;\r\n        position: relative;\r\n        width: 100%;\r\n    }\r\n}\r\n/*!* */\r\n/*  ##Device = Tablets, Ipads (landscape)*/\r\n/*  ##Screen = B/w 768px to 1024px*/\r\n/**!*/\r\n@media (min-width: 768px) and (max-width: 1023px) and (orientation: landscape) {\r\n    .family-menu {\r\n        /*\r\n        margin-top: 0;\r\n        margin-bottom: 0;\r\n        height: 0;\r\n        */\r\n        display: flex;\r\n        justify-content: center;\r\n        margin: 5px;\r\n\r\n    }\r\n\r\n    .family-menu  label{\r\n        font-size: .6rem;\r\n    }\r\n\r\n    .family-menu .family-menu-options {\r\n        display: flex;\r\n        justify-content: flex-end;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu .family-menu-card {\r\n        display: flex;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu table {\r\n        background: none;\r\n        display: table;\r\n        list-style: none;\r\n        position: absolute;\r\n        font-size: 12px;\r\n    }\r\n\r\n    .family-menu .card {\r\n        position: absolute;\r\n    }\r\n\r\n    .family-menu tbody tr {\r\n        /*display: flex;\r\n        justify-content: space-between;*/\r\n    }\r\n\r\n    .family-menu tbody tr td {\r\n        border: none;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .family-menu tbody tr td b {\r\n        padding-left: 5px;\r\n    }\r\n\r\n    .checkbox-option {\r\n        padding-top: 0px;\r\n        padding-bottom: 0px;\r\n        height: 22px;\r\n    }\r\n\r\n    .field:not(:last-child) {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    #Kp.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Cu.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Ay.periodic-table-family{\r\n        grid-column-start: 14;\r\n    }\r\n\r\n    #PoS.periodic-table-family {\r\n        grid-column-start: 13;\r\n    }\r\n\r\n    #Qe.periodic-table-family {\r\n        grid-column-start: 12;\r\n    }\r\n\r\n    #My.periodic-table-population, #Tp.periodic-table-population, #Ya.periodic-table-population, #Ak.periodic-table-population, #It.periodic-table-population {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ts.periodic-table-migration, #Hv.periodic-table-migration, #My.periodic-table-migration, #Kq.periodic-table-migration, #Aw.periodic-table-migration {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ix.periodic-table-rural, #Ci.periodic-table-rural, #Ta.periodic-table-rural, #Mi.periodic-table-rural, #It.periodic-table-rural {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #ThS.periodic-table-ire, #Hu.periodic-table-ire, #ChT.periodic-table-ire {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Aw.periodic-table-variantes, #Ta.periodic-table-variantes, #Mo.periodic-table-variantes, #Ot.periodic-table-variantes , #Tp.periodic-table-variantes  {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    .orden-menu .subtitle {\r\n        margin-bottom: 10px !important;\r\n    }\r\n\r\n    .vertical-grids {\r\n        display: grid;\r\n    }\r\n\r\n    .vertical-grids li {\r\n        max-height: 70px;\r\n        padding: 10px 0;\r\n        height: 4.2vw;\r\n        overflow: hidden;\r\n        margin: 4px;\r\n        z-index: auto;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-grids {\r\n        display: none;\r\n    }\r\n\r\n    .horizontal-grids > ul {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-a li {\r\n        float: left;\r\n        width: 6.25%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-b li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-c li {\r\n        float: left;\r\n        width: 7.1%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-groups {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-groups li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-symbols{\r\n        padding-top: 0;\r\n    }\r\n\r\n    .periodic-table {\r\n        list-style: none;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .tabs{\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .content-tab{\r\n        padding-bottom: 0;\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .content-tab-symbols {\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n    .content-tab-symbols > table > tbody > tr >td {\r\n        cursor: pointer;\r\n    }\r\n\r\n    .content-tab-symbols label{\r\n        font-size: 9px;\r\n    }\r\n\r\n    .periodic-table-columns {\r\n        display: grid;\r\n        grid-template-columns: 0% 100% 0%;\r\n        grid-template-rows: auto;\r\n    }\r\n\r\n    .periodic-table-columns-div {\r\n        align-self: flex-end;\r\n    }\r\n\r\n    .periodic-table-population-grids, .periodic-table-migration-grids, .periodic-table-rural-grids, .periodic-table-ire-grids, .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 33%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-alphabet-grids{\r\n        display: grid;\r\n        grid-template-columns: repeat(14, 7.1%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(8, 12.5%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids-b {\r\n        display: grid;\r\n        grid-template-columns: repeat(4, 25%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-family-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(16, 6.25%);\r\n    }\r\n\r\n    .column-one {\r\n        padding-right: 0;\r\n    }\r\n\r\n    .column-two, .column-three, .column-four {\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .column-five {\r\n        padding-left: 0;\r\n    }\r\n\r\n    .is-small-button{\r\n        font-size: 9px;\r\n    }\r\n\r\n    .group {\r\n        /*min-height: 103px;*/\r\n        max-height: 70px;\r\n        /*width: 105px;*/\r\n        height: 4.6vw;\r\n        padding: 3px;\r\n        border-radius: 5px;\r\n        overflow: hidden;\r\n        margin: 2px;\r\n        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .1), inset 0 0 0 2px rgba(0, 0, 0, .1);\r\n        transition: all 0.2s linear;\r\n        -webkit-transition: all 0.2s linear;\r\n        z-index: auto;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .group:after {\r\n        border-radius: 5px;\r\n        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\r\n        opacity: 0;\r\n    }\r\n\r\n    .group:hover {\r\n        transform: scale(1.5, 1.5);\r\n    }\r\n\r\n    .element-symbol {\r\n        margin-top: -5px;\r\n        font-size: 17px;\r\n        text-align: left;\r\n    }\r\n\r\n    .element-symbol > b{\r\n    }\r\n\r\n    .number-id {\r\n        font-size: 7px;\r\n        text-align: right;\r\n    }\r\n\r\n    .atomic-orbital-shells {\r\n        float: right;\r\n        font-size: 10px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex: 0;\r\n        position: absolute;\r\n        right: 5px;\r\n    }\r\n\r\n    .atomic-orbital-shells span {\r\n        display: block;\r\n        text-align: right;\r\n        line-height: 10;\r\n    }\r\n\r\n    .element-name{\r\n        font-size: 0px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n        margin-top: -5px;\r\n    }\r\n    .population{\r\n        font-size: 7px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n    }\r\n\r\n    .population span {\r\n        display: none;\r\n    }\r\n\r\n    .message-body {\r\n        padding: 30px;\r\n    }\r\n\r\n    .modal-image-full .modal-content{\r\n        margin: 0 20px;\r\n        max-height: calc(100vh - 100px);\r\n        overflow: auto;\r\n        position: relative;\r\n        width: 100%;\r\n    }\r\n\r\n    .modal-card-title {\r\n        flex-shrink: 1;\r\n    }\r\n}\r\n/*!* */\r\n/*  ##Device = Low Resolution Tablets, Mobiles (Landscape)*/\r\n/*  ##Screen = B/w 481px to 767px*/\r\n/**!*/\r\n@media (min-width: 481px) and (max-width: 767px) {\r\n    .family-menu {\r\n        /*\r\n        margin-top: 0;\r\n        margin-bottom: 0;\r\n        height: 0;\r\n        */\r\n        display: flex;\r\n        justify-content: center;\r\n        margin: 5px;\r\n\r\n    }\r\n\r\n    .family-menu  label{\r\n        font-size: .6rem;\r\n    }\r\n\r\n    .family-menu .family-menu-options {\r\n        display: flex;\r\n        justify-content: flex-end;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu .family-menu-card {\r\n        display: flex;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu table {\r\n        background: none;\r\n        display: table;\r\n        list-style: none;\r\n        position: absolute;\r\n        font-size: 12px;\r\n    }\r\n\r\n    .family-menu .card {\r\n        position: absolute;\r\n    }\r\n\r\n    .family-menu tbody tr {\r\n        /*display: flex;\r\n        justify-content: space-between;*/\r\n    }\r\n\r\n    .family-menu tbody tr td {\r\n        border: none;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .family-menu tbody tr td b {\r\n        padding-left: 5px;\r\n    }\r\n\r\n    .checkbox-option {\r\n        padding-top: 0px;\r\n        padding-bottom: 0px;\r\n        height: 22px;\r\n    }\r\n\r\n    .field:not(:last-child) {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    /*#Kp.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Cu.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Ay.periodic-table-family{\r\n        grid-column-start: 14;\r\n    }\r\n\r\n    #PoS.periodic-table-family {\r\n        grid-column-start: 13;\r\n    }\r\n\r\n    #Qe.periodic-table-family {\r\n        grid-column-start: 12;\r\n    }*/\r\n\r\n    /*#My.periodic-table-population, #Tp.periodic-table-population, #Ya.periodic-table-population, #Ak.periodic-table-population, #It.periodic-table-population {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ts.periodic-table-migration, #Hv.periodic-table-migration, #My.periodic-table-migration, #Kq.periodic-table-migration, #Aw.periodic-table-migration {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ix.periodic-table-rural, #Ci.periodic-table-rural, #Ta.periodic-table-rural, #Mi.periodic-table-rural, #It.periodic-table-rural {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #ThS.periodic-table-ire, #Hu.periodic-table-ire, #ChT.periodic-table-ire {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Aw.periodic-table-variantes, #Ta.periodic-table-variantes, #Mo.periodic-table-variantes, #Ot.periodic-table-variantes , #Tp.periodic-table-variantes  {\r\n        grid-column-start: 1;\r\n    }\r\n*/\r\n    .orden-menu .subtitle {\r\n        margin-bottom: 10px !important;\r\n    }\r\n\r\n    .vertical-grids {\r\n        display: grid;\r\n    }\r\n\r\n    .vertical-grids li {\r\n        max-height: 70px;\r\n        padding: 10px 0;\r\n        height: 4.2vw;\r\n        overflow: hidden;\r\n        margin: 4px;\r\n        z-index: auto;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-grids {\r\n        display: none;\r\n    }\r\n\r\n    .horizontal-grids > ul {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-a li {\r\n        float: left;\r\n        width: 6.25%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-b li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-c li {\r\n        float: left;\r\n        width: 7.1%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-groups {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-groups li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-symbols{\r\n        padding-top: 0;\r\n    }\r\n\r\n    .periodic-table {\r\n        list-style: none;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .tabs{\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .content-tab{\r\n        padding-bottom: 0;\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .content-tab-symbols {\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n    .content-tab-symbols > table > tbody > tr >td {\r\n        cursor: pointer;\r\n    }\r\n\r\n    .content-tab-symbols label{\r\n        font-size: 9px;\r\n    }\r\n\r\n    .periodic-table-columns {\r\n        display: grid;\r\n        grid-template-columns: 0% 100% 0%;\r\n        grid-template-rows: auto;\r\n    }\r\n\r\n    .periodic-table-columns-div {\r\n        align-self: flex-end;\r\n    }\r\n\r\n    .periodic-table-population-grids, .periodic-table-migration-grids, .periodic-table-rural-grids, .periodic-table-ire-grids, .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 33%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-alphabet-grids{\r\n        display: grid;\r\n        grid-template-columns: repeat(14, 7.1%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(8, 12.5%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids-b {\r\n        display: grid;\r\n        grid-template-columns: repeat(4, 25%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-family-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(5, 20%);\r\n        /*padding-top: 56px;*/\r\n    }\r\n\r\n    .column-one {\r\n        padding-right: 0;\r\n    }\r\n\r\n    .column-two, .column-three, .column-four {\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .column-five {\r\n        padding-left: 0;\r\n    }\r\n\r\n    .is-small-button{\r\n        font-size: 9px;\r\n    }\r\n\r\n    .group {\r\n        /*min-height: 103px;*/\r\n        /*width: 105px;*/\r\n        height: 17vw;\r\n        padding: 3px;\r\n        border-radius: 5px;\r\n        overflow: hidden;\r\n        margin: 2px;\r\n        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .1), inset 0 0 0 2px rgba(0, 0, 0, .1);\r\n        transition: all 0.2s linear;\r\n        -webkit-transition: all 0.2s linear;\r\n        z-index: auto;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .group:after {\r\n        border-radius: 5px;\r\n        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\r\n        opacity: 0;\r\n    }\r\n\r\n    .group:hover {\r\n        transform: scale(1.2, 1.2);\r\n    }\r\n\r\n    .element-symbol {\r\n        margin-top: -10px;\r\n        font-size: 19px;\r\n        text-align: left;\r\n    }\r\n\r\n    .element-symbol > b{\r\n    }\r\n\r\n    .number-id {\r\n        font-size: 9px;\r\n        text-align: right;\r\n    }\r\n\r\n    .atomic-orbital-shells {\r\n        float: right;\r\n        font-size: 10px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex: 0;\r\n        position: absolute;\r\n        right: 5px;\r\n    }\r\n\r\n    .atomic-orbital-shells span {\r\n        display: block;\r\n        text-align: right;\r\n        line-height: 10;\r\n    }\r\n\r\n    .element-name{\r\n        font-size: 13px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n        margin-top: -5px;\r\n    }\r\n    .population{\r\n        font-size: 9px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n        margin: -3px -4px 3px;\r\n    }\r\n\r\n    .message-body {\r\n        padding: 30px;\r\n    }\r\n\r\n    .modal-image-full .modal-content{\r\n        margin: 0 20px;\r\n        max-height: calc(100vh - 100px);\r\n        overflow: auto;\r\n        position: relative;\r\n        width: 100%;\r\n    }\r\n\r\n    .modal-card-title {\r\n        flex-shrink: 1;\r\n    }\r\n\r\n    .tag{\r\n        white-space: normal;\r\n    }\r\n}\r\n/*!* */\r\n/*  ##Device = Most of the Smartphones Mobiles (Portrait)*/\r\n/*  ##Screen = B/w 320 to 479px*/\r\n/**!*/\r\n@media (min-width: 320px) and (max-width: 480px) {\r\n    .family-menu {\r\n        /*\r\n        margin-top: 0;\r\n        margin-bottom: 0;\r\n        height: 0;\r\n        */\r\n        display: flex;\r\n        justify-content: center;\r\n        margin: 5px;\r\n\r\n    }\r\n\r\n    .family-menu  label{\r\n        font-size: .6rem;\r\n    }\r\n\r\n    .family-menu .family-menu-options {\r\n        display: flex;\r\n        justify-content: flex-end;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu .family-menu-card {\r\n        display: flex;\r\n        margin-top: 0;\r\n    }\r\n\r\n    .family-menu table {\r\n        background: none;\r\n        display: table;\r\n        list-style: none;\r\n        position: absolute;\r\n        font-size: 12px;\r\n    }\r\n\r\n    .family-menu .card {\r\n        position: absolute;\r\n    }\r\n\r\n    .family-menu tbody tr {\r\n        /*display: flex;\r\n        justify-content: space-between;*/\r\n    }\r\n\r\n    .family-menu tbody tr td {\r\n        border: none;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .family-menu tbody tr td b {\r\n        padding-left: 5px;\r\n    }\r\n\r\n    .checkbox-option {\r\n        padding-top: 0px;\r\n        padding-bottom: 0px;\r\n        height: 22px;\r\n    }\r\n\r\n    .field:not(:last-child) {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    /*#Kp.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Cu.periodic-table-family{\r\n        grid-column: 1 / span 1;\r\n    }\r\n\r\n    #Ay.periodic-table-family{\r\n        grid-column-start: 14;\r\n    }\r\n\r\n    #PoS.periodic-table-family {\r\n        grid-column-start: 13;\r\n    }\r\n\r\n    #Qe.periodic-table-family {\r\n        grid-column-start: 12;\r\n    }*/\r\n\r\n    /*#My.periodic-table-population, #Tp.periodic-table-population, #Ya.periodic-table-population, #Ak.periodic-table-population, #It.periodic-table-population {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ts.periodic-table-migration, #Hv.periodic-table-migration, #My.periodic-table-migration, #Kq.periodic-table-migration, #Aw.periodic-table-migration {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Ix.periodic-table-rural, #Ci.periodic-table-rural, #Ta.periodic-table-rural, #Mi.periodic-table-rural, #It.periodic-table-rural {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #ThS.periodic-table-ire, #Hu.periodic-table-ire, #ChT.periodic-table-ire {\r\n        grid-column-start: 1;\r\n    }\r\n\r\n    #Aw.periodic-table-variantes, #Ta.periodic-table-variantes, #Mo.periodic-table-variantes, #Ot.periodic-table-variantes , #Tp.periodic-table-variantes  {\r\n        grid-column-start: 1;\r\n    }*/\r\n\r\n    .orden-menu .subtitle {\r\n        margin-bottom: 10px !important;\r\n    }\r\n\r\n    .vertical-grids {\r\n        display: grid;\r\n    }\r\n\r\n    .vertical-grids li {\r\n        max-height: 70px;\r\n        padding: 10px 0;\r\n        height: 4.2vw;\r\n        overflow: hidden;\r\n        margin: 4px;\r\n        z-index: auto;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-grids {\r\n        display: none;\r\n    }\r\n\r\n    .horizontal-grids > ul {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-a li {\r\n        float: left;\r\n        width: 6.25%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-b li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-c li {\r\n        float: left;\r\n        width: 7.1%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .horizontal-list-groups {\r\n        list-style-type: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .horizontal-list-groups li {\r\n        float: left;\r\n        width: 33.3%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-symbols{\r\n        padding-top: 0;\r\n    }\r\n\r\n    .periodic-table {\r\n        list-style: none;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .tabs{\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .content-tab{\r\n        padding-bottom: 0;\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .content-tab-symbols {\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n    .content-tab-symbols > table > tbody > tr >td {\r\n        cursor: pointer;\r\n    }\r\n\r\n    .content-tab-symbols label{\r\n        font-size: 9px;\r\n    }\r\n\r\n    .periodic-table-columns {\r\n        display: grid;\r\n        grid-template-columns: 0% 100% 0%;\r\n        grid-template-rows: auto;\r\n    }\r\n\r\n    .periodic-table-columns-div {\r\n        align-self: flex-end;\r\n    }\r\n\r\n    .periodic-table-population-grids, .periodic-table-migration-grids, .periodic-table-rural-grids, .periodic-table-ire-grids, .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 33%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-alphabet-grids{\r\n        display: grid;\r\n        grid-template-columns: repeat(14, 7.1%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(8, 12.5%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-variantes-grids-b {\r\n        display: grid;\r\n        grid-template-columns: repeat(4, 25%);\r\n        justify-content: center;\r\n    }\r\n\r\n    .periodic-table-family-grids {\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 33.33%);\r\n        /*padding-top: 56px;*/\r\n    }\r\n\r\n    .column-one {\r\n        padding-right: 0;\r\n    }\r\n\r\n    .column-two, .column-three, .column-four {\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .column-five {\r\n        padding-left: 0;\r\n    }\r\n\r\n    .is-small-button{\r\n        font-size: 9px;\r\n    }\r\n\r\n    .group {\r\n        /*min-height: 103px;*/\r\n        /*width: 105px;*/\r\n        height: 24vw;\r\n        padding: 3px;\r\n        border-radius: 5px;\r\n        overflow: hidden;\r\n        margin: 2px;\r\n        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .1), inset 0 0 0 2px rgba(0, 0, 0, .1);\r\n        transition: all 0.2s linear;\r\n        -webkit-transition: all 0.2s linear;\r\n        z-index: auto;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .group:after {\r\n        border-radius: 5px;\r\n        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\r\n        opacity: 0;\r\n    }\r\n\r\n    .group:hover {\r\n        transform: scale(1.2, 1.2);\r\n    }\r\n\r\n    .element-symbol {\r\n        margin-top: -10px;\r\n        font-size: 19px;\r\n        text-align: left;\r\n    }\r\n\r\n    .element-symbol > b{\r\n    }\r\n\r\n    .number-id {\r\n        font-size: 9px;\r\n        text-align: right;\r\n    }\r\n\r\n    .atomic-orbital-shells {\r\n        float: right;\r\n        font-size: 10px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex: 0;\r\n        position: absolute;\r\n        right: 5px;\r\n    }\r\n\r\n    .atomic-orbital-shells span {\r\n        display: block;\r\n        text-align: right;\r\n        line-height: 10;\r\n    }\r\n\r\n    .element-name{\r\n        font-size: 13px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n        margin-top: -5px;\r\n    }\r\n    .population{\r\n        font-size: 12px;\r\n        flex: 1 1;\r\n        align-items: flex-end;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: normal;\r\n        margin: -3px -4px 3px;\r\n    }\r\n\r\n    .message-body {\r\n        padding: 30px;\r\n    }\r\n\r\n    .modal-image-full .modal-content{\r\n        margin: 0 20px;\r\n        max-height: calc(100vh - 100px);\r\n        overflow: auto;\r\n        position: relative;\r\n        width: 100%;\r\n    }\r\n\r\n    .modal-card-title {\r\n        flex-shrink: 1;\r\n    }\r\n\r\n    .tag{\r\n        white-space: normal;\r\n    }\r\n}\r\n.A0, .B0, .C0, .D0 {\n}\r\n.principal {\n    background-color: #a22244;\n}\r\n.bg-principal{\n    background-color: #a22244;\n    color: #FFFFFF;\n}\r\n.bg-none {\n    display: none;\n}\r\n.bg-red {\n    background-color: #DD3430;\n    color: #FFFFFF;\n}\r\n.bg-yellow {\n    background-color: #FDE818;\n    color: #515757;\n}\r\n.bg-orange {\n    background-color: #F39519;\n    color: #FFFFFF;\n}\r\n.bg-green-light {\n    background-color: #68B32D;\n    color: #FFFFFF;\n}\r\n.bg-green {\n    background-color: #207331;\n    color: #FFFFFF;\n}\r\n.green {\n    color: #207331;\n}\r\n.green-checkbox label:before  {\n    background-color: #207331;\n    border-color: #207331;\n}\r\n.green-checkbox label:after {\n    color: #ffffff;\n    border-color: #FFFFFF;\n}\r\n.green-light {\n    color: #68B32D;\n}\r\n.green-light-checkbox label:before  {\n    background-color: #68B32D;\n    border-color: #68B32D;\n}\r\n.green-light-checkbox label:after {\n    color: #ffffff;\n    border-color: #FFFFFF;\n}\r\n.orange {\n    color: #F39519;\n}\r\n.orange-checkbox label:before  {\n    background-color: #F39519;\n    border-color: #F39519;\n}\r\n.orange-checkbox label:after {\n    color: #ffffff;\n    border-color: #FFFFFF;\n}\r\n.yellow {\n    color: #FDE818;\n}\r\n.yellow-checkbox label:before  {\n    background-color: #FDE818;\n    border-color: #FDE818;\n}\r\n.yellow-checkbox label:after {\n    color: #515757;\n    border-color: #FFFFFF;\n}\r\n.red {\n    color: #DD3430;\n}\r\n.red-checkbox label:before  {\n    background-color: #DD3430;\n    border-color: #DD3430;\n}\r\n.red-checkbox label:after {\n    color: #ffffff;\n    border-color: #FFFFFF;\n}\r\n.shadow-green {\n    box-shadow: 0 0 0 4px #207331 !important;\n    border-color: #fff !important;\n    border-style: solid;\n}\r\n.shadow-green-light {\n    box-shadow: 0 0 0 4px #68B32D !important;\n    border-color: #fff !important;\n    border-style: solid;\n}\r\n.shadow-yellow {\n    box-shadow: 0 0 0 4px #FDE818 !important;\n    border-color: #fff !important;\n    border-style: solid;\n}\r\n.shadow-orange {\n    box-shadow: 0 0 0 4px #F39519 !important;\n    border-color: #fff !important;\n    border-style: solid;\n}\r\n.shadow-red {\n    box-shadow: 0 0 0 4px #DD3430 !important;\n    border-color: #fff !important;\n    border-style: solid;\n}\r\n.hvr-grow {\n    display: inline-block;\n    vertical-align: middle;\n    transition: all 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);\n    -webkit-transition: all 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\r\n.hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {\n    transform: scale(1.1);\n}\r\n.gray {\n    color: #515757;\n}\r\n/**FAMILIAS*/\r\n.null, .null.no-focus:hover {\n    display: block;\n    background-color: #ffffff;\n    color: #FFFFFF;\n}\r\n.algica, .algica.no-focus:hover {\n    border-color: transparent;\n    background-color: #ED8965;\n    color: #FFFFFF;\n}\r\n.algica-checkbox label:before  {\n    background-color: #ED8965;\n    border-color: #ED8965;\n}\r\n.algica-checkbox label:after {\n    color: #FFFFFF;\n    border-color: #FFFFFF;\n}\r\n.seri, .seri.no-focus:hover {\n    border-color: transparent;\n    background-color: #9E60A4;\n    color: #FFFFFF;\n}\r\n.seri-checkbox label:before  {\n    background-color: #9E60A4;\n    border-color: #9E60A4;\n}\r\n.seri-checkbox label:after {\n    color: #FFFFFF;\n    border-color: #FFFFFF;\n}\r\n.cochimi-yumana, .cochimi-yumana.no-focus:hover {\n    border-color: transparent;\n    background-color: #C61E26;\n    color: #ffffff;\n}\r\n.cochimi-yumana-checkbox label:before  {\n    background-color: #C61E26;\n    border-color: #C61E26;\n}\r\n.cochimi-yumana-checkbox label:after {\n    color: #FFFFFF;\n    border-color: #FFFFFF;\n}\r\n.oto-mangue, .oto-mangue.no-focus:hover {\n    border-color: transparent;\n    background-color: #799010;\n    color: #ffffff;\n}\r\n.oto-mangue-checkbox label:before  {\n    background-color: #799010;\n    border-color: #799010;\n}\r\n.oto-mangue-checkbox label:after {\n    color: #FFFFFF;\n    border-color: #FFFFFF;\n}\r\n.maya, .maya.no-focus:hover {\n    border-color: transparent;\n    background-color: #83B5C2;\n    color: #ffffff;\n}\r\n.maya-checkbox label:before  {\n    background-color: #83B5C2;\n    border-color: #83B5C2;\n}\r\n.maya-checkbox label:after {\n    color: #FFFFFF;\n    border-color: #FFFFFF;\n}\r\n.yuto-nahua, .yuto-nahua.no-focus:hover {\n    border-color: transparent;\n    background-color: #FAB700;\n    color: #FFFFFF;\n}\r\n.yuto-nahua-checkbox label:before  {\n    background-color: #FAB700;\n    border-color: #FAB700;\n}\r\n.yuto-nahua-checkbox label:after {\n    color: #FFFFFF;\n    border-color: #FFFFFF;\n}\r\n.huave, .huave.no-focus:hover {\n    border-color: transparent;\n    background-color: #1C8E86;\n    color: #ffffff;\n}\r\n.huave-checkbox label:before  {\n    background-color: #1C8E86;\n    border-color: #1C8E86;\n}\r\n.huave-checkbox label:after {\n    color: #FFFFFF;\n    border-color: #FFFFFF;\n}\r\n.mixe-zoque, .mixe-zoque.no-focus:hover {\n    border-color: transparent;\n    background-color: #E4617F;\n    color: #ffffff;\n}\r\n.mixe-zoque-checkbox label:before  {\n    background-color: #E4617F;\n    border-color: #E4617F;\n}\r\n.mixe-zoque-checkbox label:after {\n    color: #FFFFFF;\n    border-color: #FFFFFF;\n}\r\n.teko, .teko.no-focus:hover {\n    border-color: transparent;\n    background-color: #3ab863;\n    color: #FFFFFF;\n}\r\n.teko-checkbox label:before  {\n    background-color: #3ab863;\n    border-color: #3ab863;\n}\r\n.teko-checkbox label:after {\n    color: #FFFFFF;\n    border-color: #FFFFFF;\n}\r\n.totonaco-tepehua, .totonaco-tepehua.no-focus:hover {\n    border-color: transparent;\n    background-color: #9E602C;\n    color: #FFFFFF;\n}\r\n.totonaco-tepehua-checkbox label:before  {\n    background-color: #9E602C;\n    border-color: #9E602C;\n}\r\n.totonaco-tepehua-checkbox label:after {\n    color: #FFFFFF;\n    border-color: #FFFFFF;\n}\r\n.chontal-oaxaca, .chontal-oaxaca.no-focus:hover {\n    border-color: transparent;\n    background-color: #4D71B0;\n    color: #FFFFFF;\n}\r\n.chontal-oaxaca-checkbox label:before  {\n    background-color: #4D71B0;\n    border-color: #4D71B0;\n}\r\n.chontal-oaxaca-checkbox label:after {\n    color: #FFFFFF;\n    border-color: #FFFFFF;\n}\r\n.tarasca, .tarasca.no-focus:hover {\n    border-color: transparent;\n    background-color: #B42E88;\n    color: #FFFFFF;\n}\r\n.tarasca-checkbox label:before  {\n    background-color: #B42E88;\n    border-color: #B42E88;\n}\r\n.tarasca-checkbox label:after {\n    color: #FFFFFF;\n    border-color: #FFFFFF;\n}\r\n.zapoteco, .zapoteco.no-focus:hover {\n    border-color: transparent;\n    background-image: -webkit-linear-gradient(135deg, #51b54f 50%, #92d26b 50%);\n    /*background-color: #51b54f;*/\n    color: #ffffff;\n}\r\n.zapoteco-checkbox label:before  {\n    background-image: -webkit-linear-gradient(135deg, #51b54f 50%, #92d26b 50%);\n    border-color: transparent;\n}\r\n.zapoteco-checkbox label:after {\n    color: #ffffff;\n}\r\n.nahuas, .nahuas.no-focus:hover {\n    border-color: transparent;\n    /*background-color: #8cabde;*/\n    background-image: -webkit-linear-gradient(135deg, #8cabde 50%, #64cab9 50%);\n    color: #515757;\n}\r\n.nahuas-checkbox label:before  {\n    background-image: -webkit-linear-gradient(135deg, #8cabde 50%, #64cab9 50%);\n    border-color: transparent;\n}\r\n.nahuas-checkbox label:after {\n    color: #ffffff;\n}\r\n.bd-color {\r\n    border-radius: 2px;\r\n    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .1), inset 0 0 0 1px rgba(0, 0, 0, .1);\r\n    display: inline-block;\r\n    float: left;\r\n    height: 16px;\r\n    margin-right: 8px;\r\n    width: 16px;\r\n}\r\n.hide {\r\n    background-color: #CCCCCC !important;\r\n    color: #969696 !important;\r\n    pointer-events: none !important;\r\n    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, .1), inset 0 0 0 0px rgba(0, 0, 0, .1) !important;\r\n    background-image: -webkit-linear-gradient(135deg, #CCCCCC 50%, #CCCCCC 50%) !important;\r\n    transition: all 3s cubic-bezier(0.165, 0.84, 0.44, 1);\r\n    -webkit-transition: all 3s cubic-bezier(0.165, 0.84, 0.44, 1);\r\n}\r\n.hide:hover {\r\n    transform: scale(1) !important;\r\n}\r\n.hide-mobile {\r\n    display: none;\r\n}\r\n.tabs.is-toggle li.is-active a {\r\n    background-color: #a22244;\r\n    border-color: #a22244;\r\n    color: #fff;\r\n}\r\n.tabs li.is-active a {\r\n    border-bottom-color: #a22244;\r\n    color: #a22244;\r\n}\r\n.menu-vertical{\r\n    display: none;\r\n}\r\n.navbar-burger{\r\n    display:block\r\n}\r\n.navbar-burger:hover{\r\n    display:block;\r\n    cursor: pointer;\r\n   /* background-color: #FFFFFF;\r\n    color: #a22244;*/\r\n}\r\n.bd-snippet-preview{\r\n    width: 33.3333%;\r\n    padding: 1.5rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGEtbGVuZ3Vhcy1pbmRpZ2VuYXMvbWVkaWEtcXVlcmllcy5jc3MiLCJzcmMvYXBwL3RhYmxhLWxlbmd1YXMtaW5kaWdlbmFzL2NvbG9ycy5jc3MiLCJzcmMvYXBwL3RhYmxhLWxlbmd1YXMtaW5kaWdlbmFzL3RhYmxhLWxlbmd1YXMtaW5kaWdlbmFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFO0FBQ0Y7SUFDSTtRQUNJOzs7O1VBSUU7UUFDRixjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLG1CQUFtQjtRQUNuQixnQkFBZ0I7O0tBRW5COztJQUVEO1FBQ0ksY0FBYztRQUNkLDBCQUEwQjtRQUMxQixjQUFjO0tBQ2pCOztJQUVEO1FBQ0ksY0FBYztRQUNkLGNBQWM7S0FDakI7O0lBRUQ7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksbUJBQW1CO0tBQ3RCOztJQUVEO1FBQ0k7eUNBQ2lDO0tBQ3BDOztJQUVEO1FBQ0ksYUFBYTtRQUNiLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLGtCQUFrQjtLQUNyQjs7SUFFRDtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsYUFBYTtLQUNoQjs7SUFFRDtRQUNJLGlCQUFpQjtLQUNwQjs7SUFFRDtRQUNJLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLHNCQUFzQjtLQUN6Qjs7SUFFRDtRQUNJLHNCQUFzQjtLQUN6Qjs7SUFFRDtRQUNJLHNCQUFzQjtLQUN6Qjs7SUFFRDtRQUNJLHFCQUFxQjtLQUN4Qjs7SUFFRDtRQUNJLHFCQUFxQjtLQUN4Qjs7SUFFRDtRQUNJLHFCQUFxQjtLQUN4Qjs7SUFFRDtRQUNJLHFCQUFxQjtLQUN4Qjs7SUFFRDtRQUNJLHFCQUFxQjtLQUN4Qjs7SUFFRDtRQUNJLCtCQUErQjtLQUNsQzs7SUFFRDtRQUNJLGNBQWM7S0FDakI7O0lBRUQ7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGNBQWM7UUFDZCxjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtLQUN0Qjs7SUFFRDtRQUNJLHNCQUFzQjtRQUN0QixVQUFVO1FBQ1YsV0FBVztLQUNkOztJQUVEO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsY0FBYztRQUNkLG9CQUFvQjtRQUNwQix3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksc0JBQXNCO1FBQ3RCLFVBQVU7UUFDVixXQUFXO0tBQ2Q7O0lBRUQ7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksZUFBZTtLQUNsQjs7SUFFRDtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0tBQ2xCOztJQUVEO1FBQ0ksb0JBQW9CO0tBQ3ZCOztJQUVEO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxjQUFjO1FBQ2Qsd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksY0FBYztRQUNkLGlDQUFpQztRQUNqQyx5QkFBeUI7S0FDNUI7O0lBRUQ7UUFDSSxxQkFBcUI7S0FDeEI7O0lBRUQ7UUFDSSxjQUFjO1FBQ2Qsc0NBQXNDO1FBQ3RDLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLGNBQWM7UUFDZCx3Q0FBd0M7UUFDeEMsd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksY0FBYztRQUNkLHdDQUF3QztRQUN4Qyx3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxjQUFjO1FBQ2Qsc0NBQXNDO1FBQ3RDLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLGNBQWM7UUFDZCx5Q0FBeUM7S0FDNUM7O0lBRUQ7UUFDSSxpQkFBaUI7S0FDcEI7O0lBRUQ7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksZUFBZTtLQUNsQjs7SUFFRDtRQUNJLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osNkVBQTZFO1FBQzdFLDRCQUE0QjtRQUM1QixvQ0FBb0M7UUFDcEMsY0FBYztRQUNkLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLG1CQUFtQjtRQUNuQiwwQ0FBMEM7UUFDMUMsV0FBVztLQUNkOztJQUVEO09BQ0csMkJBQTJCO0tBQzdCOztJQUVEO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixpQkFBaUI7S0FDcEI7O0lBRUQ7S0FDQzs7SUFFRDtRQUNJLGVBQWU7UUFDZixrQkFBa0I7S0FDckI7O0lBRUQ7UUFDSSxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCx1QkFBdUI7UUFDdkIsUUFBUTtRQUNSLG1CQUFtQjtRQUNuQixXQUFXO0tBQ2Q7O0lBRUQ7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLGVBQWU7UUFDZixVQUFVO1FBQ1Ysc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLGlCQUFpQjtLQUNwQjtJQUNEO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVixzQkFBc0I7UUFDdEIsaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIsc0JBQXNCO0tBQ3pCOztJQUVEO1FBQ0ksY0FBYztLQUNqQjs7SUFFRDtRQUNJLGVBQWU7UUFDZixnQ0FBZ0M7UUFDaEMsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixZQUFZO0tBQ2Y7Q0FDSjtBQUVELE9BQU87QUFDUCxrQ0FBa0M7QUFDbEMsbUNBQW1DO0FBQ25DLE1BQU07QUFFTjtJQUNJO1FBQ0k7Ozs7VUFJRTtRQUNGLGNBQWM7UUFDZCx3QkFBd0I7UUFDeEIsWUFBWTtLQUNmOztJQUVEO1FBQ0ksa0JBQWtCO0tBQ3JCOztJQUVEO1FBQ0ksY0FBYztRQUNkLDBCQUEwQjtRQUMxQixjQUFjO0tBQ2pCOztJQUVEO1FBQ0ksY0FBYztRQUNkLGNBQWM7S0FDakI7O0lBRUQ7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksbUJBQW1CO0tBQ3RCOztJQUVEO1FBQ0k7eUNBQ2lDO0tBQ3BDOztJQUVEO1FBQ0ksYUFBYTtRQUNiLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLGtCQUFrQjtLQUNyQjs7SUFFRDtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsYUFBYTtLQUNoQjs7SUFFRDtRQUNJLGlCQUFpQjtLQUNwQjs7SUFFRDtRQUNJLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLHNCQUFzQjtLQUN6Qjs7SUFFRDtRQUNJLHNCQUFzQjtLQUN6Qjs7SUFFRDtRQUNJLHNCQUFzQjtLQUN6Qjs7SUFFRDtRQUNJLHFCQUFxQjtLQUN4Qjs7SUFFRDtRQUNJLHFCQUFxQjtLQUN4Qjs7SUFFRDtRQUNJLHFCQUFxQjtLQUN4Qjs7SUFFRDtRQUNJLHFCQUFxQjtLQUN4Qjs7SUFFRDtRQUNJLHFCQUFxQjtLQUN4Qjs7SUFFRDtRQUNJLCtCQUErQjtLQUNsQzs7SUFFRDtRQUNJLGNBQWM7S0FDakI7O0lBRUQ7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGNBQWM7UUFDZCxjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtLQUN0Qjs7SUFFRDtRQUNJLHNCQUFzQjtRQUN0QixVQUFVO1FBQ1YsV0FBVztLQUNkOztJQUVEO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsY0FBYztRQUNkLG9CQUFvQjtRQUNwQix3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksc0JBQXNCO1FBQ3RCLFVBQVU7UUFDVixXQUFXO0tBQ2Q7O0lBRUQ7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksZUFBZTtLQUNsQjs7SUFFRDtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0tBQ2xCOztJQUVEO1FBQ0ksb0JBQW9CO0tBQ3ZCOztJQUVEO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxjQUFjO1FBQ2Qsd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksY0FBYztRQUNkLGlDQUFpQztRQUNqQyx5QkFBeUI7S0FDNUI7O0lBRUQ7UUFDSSxxQkFBcUI7S0FDeEI7O0lBRUQ7UUFDSSxjQUFjO1FBQ2Qsc0NBQXNDO1FBQ3RDLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLGNBQWM7UUFDZCx3Q0FBd0M7UUFDeEMsd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksY0FBYztRQUNkLHdDQUF3QztRQUN4Qyx3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxjQUFjO1FBQ2Qsc0NBQXNDO1FBQ3RDLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLGNBQWM7UUFDZCx5Q0FBeUM7S0FDNUM7O0lBRUQ7UUFDSSxpQkFBaUI7S0FDcEI7O0lBRUQ7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksZUFBZTtLQUNsQjs7SUFFRDtRQUNJLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osNkVBQTZFO1FBQzdFLDRCQUE0QjtRQUM1QixvQ0FBb0M7UUFDcEMsY0FBYztRQUNkLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLG1CQUFtQjtRQUNuQiwwQ0FBMEM7UUFDMUMsV0FBVztLQUNkOztJQUVEO1FBQ0ksMkJBQTJCO0tBQzlCOztJQUVEO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixpQkFBaUI7S0FDcEI7O0lBRUQ7S0FDQzs7SUFFRDtRQUNJLGVBQWU7UUFDZixrQkFBa0I7S0FDckI7O0lBRUQ7UUFDSSxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCx1QkFBdUI7UUFDdkIsUUFBUTtRQUNSLG1CQUFtQjtRQUNuQixXQUFXO0tBQ2Q7O0lBRUQ7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLGVBQWU7UUFDZixVQUFVO1FBQ1Ysc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLGlCQUFpQjtLQUNwQjtJQUNEO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVixzQkFBc0I7UUFDdEIsaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIsc0JBQXNCO0tBQ3pCOztJQUVEO1FBQ0ksY0FBYztLQUNqQjs7SUFFRDtRQUNJLGVBQWU7UUFDZixnQ0FBZ0M7UUFDaEMsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixZQUFZO0tBQ2Y7Q0FDSjtBQUdELE9BQU87QUFDUCwwQ0FBMEM7QUFDMUMsb0NBQW9DO0FBQ3BDLE1BQU07QUFDTjtJQUNJO1FBQ0k7Ozs7VUFJRTtRQUNGLGNBQWM7UUFDZCx3QkFBd0I7UUFDeEIsWUFBWTs7S0FFZjs7SUFFRDtRQUNJLGlCQUFpQjtLQUNwQjs7SUFFRDtRQUNJLGNBQWM7UUFDZCwwQkFBMEI7UUFDMUIsY0FBYztLQUNqQjs7SUFFRDtRQUNJLGNBQWM7UUFDZCxjQUFjO0tBQ2pCOztJQUVEO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLG1CQUFtQjtLQUN0Qjs7SUFFRDtRQUNJO3lDQUNpQztLQUNwQzs7SUFFRDtRQUNJLGFBQWE7UUFDYixnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxrQkFBa0I7S0FDckI7O0lBRUQ7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLGFBQWE7S0FDaEI7O0lBRUQ7UUFDSSxpQkFBaUI7S0FDcEI7O0lBRUQ7UUFDSSx3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSx3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxzQkFBc0I7S0FDekI7O0lBRUQ7UUFDSSxzQkFBc0I7S0FDekI7O0lBRUQ7UUFDSSxzQkFBc0I7S0FDekI7O0lBRUQ7UUFDSSxxQkFBcUI7S0FDeEI7O0lBRUQ7UUFDSSxxQkFBcUI7S0FDeEI7O0lBRUQ7UUFDSSxxQkFBcUI7S0FDeEI7O0lBRUQ7UUFDSSxxQkFBcUI7S0FDeEI7O0lBRUQ7UUFDSSxxQkFBcUI7S0FDeEI7O0lBRUQ7UUFDSSwrQkFBK0I7S0FDbEM7O0lBRUQ7UUFDSSxjQUFjO0tBQ2pCOztJQUVEO1FBQ0ksaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixjQUFjO1FBQ2QsY0FBYztRQUNkLG9CQUFvQjtRQUNwQix3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxjQUFjO0tBQ2pCOztJQUVEO1FBQ0ksc0JBQXNCO1FBQ3RCLFVBQVU7UUFDVixXQUFXO0tBQ2Q7O0lBRUQ7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLFlBQVk7UUFDWixZQUFZO1FBQ1osY0FBYztRQUNkLG9CQUFvQjtRQUNwQix3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxzQkFBc0I7UUFDdEIsVUFBVTtRQUNWLFdBQVc7S0FDZDs7SUFFRDtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsY0FBYztRQUNkLG9CQUFvQjtRQUNwQix3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxlQUFlO0tBQ2xCOztJQUVEO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7S0FDbEI7O0lBRUQ7UUFDSSxvQkFBb0I7S0FDdkI7O0lBRUQ7UUFDSSxrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLGNBQWM7UUFDZCx3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxlQUFlO0tBQ2xCOztJQUVEO1FBQ0ksY0FBYztRQUNkLGtDQUFrQztRQUNsQyx5QkFBeUI7S0FDNUI7O0lBRUQ7UUFDSSxxQkFBcUI7S0FDeEI7O0lBRUQ7UUFDSSxjQUFjO1FBQ2Qsc0NBQXNDO1FBQ3RDLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLGNBQWM7UUFDZCx3Q0FBd0M7UUFDeEMsd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksY0FBYztRQUNkLHdDQUF3QztRQUN4Qyx3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxjQUFjO1FBQ2Qsc0NBQXNDO1FBQ3RDLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLGNBQWM7UUFDZCx5Q0FBeUM7S0FDNUM7O0lBRUQ7UUFDSSxpQkFBaUI7S0FDcEI7O0lBRUQ7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksZUFBZTtLQUNsQjs7SUFFRDtRQUNJLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osNkVBQTZFO1FBQzdFLDRCQUE0QjtRQUM1QixvQ0FBb0M7UUFDcEMsY0FBYztRQUNkLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLG1CQUFtQjtRQUNuQiwwQ0FBMEM7UUFDMUMsV0FBVztLQUNkOztJQUVEO1FBQ0ksMkJBQTJCO0tBQzlCOztJQUVEO1FBQ0ksaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUI7S0FDcEI7O0lBRUQ7S0FDQzs7SUFFRDtRQUNJLGVBQWU7UUFDZixrQkFBa0I7S0FDckI7O0lBRUQ7UUFDSSxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCx1QkFBdUI7UUFDdkIsUUFBUTtRQUNSLG1CQUFtQjtRQUNuQixXQUFXO0tBQ2Q7O0lBRUQ7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLGVBQWU7UUFDZixVQUFVO1FBQ1Ysc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLGlCQUFpQjtLQUNwQjtJQUNEO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVixzQkFBc0I7UUFDdEIsaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4QixvQkFBb0I7S0FDdkI7O0lBRUQ7UUFDSSxjQUFjO0tBQ2pCOztJQUVEO1FBQ0ksY0FBYztLQUNqQjs7SUFFRDtRQUNJLGVBQWU7UUFDZixnQ0FBZ0M7UUFDaEMsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixZQUFZO0tBQ2Y7Q0FDSjtBQUVELE9BQU87QUFDUCwyQ0FBMkM7QUFDM0Msb0NBQW9DO0FBQ3BDLE1BQU07QUFFTjtJQUNJO1FBQ0k7Ozs7VUFJRTtRQUNGLGNBQWM7UUFDZCx3QkFBd0I7UUFDeEIsWUFBWTs7S0FFZjs7SUFFRDtRQUNJLGlCQUFpQjtLQUNwQjs7SUFFRDtRQUNJLGNBQWM7UUFDZCwwQkFBMEI7UUFDMUIsY0FBYztLQUNqQjs7SUFFRDtRQUNJLGNBQWM7UUFDZCxjQUFjO0tBQ2pCOztJQUVEO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLG1CQUFtQjtLQUN0Qjs7SUFFRDtRQUNJO3lDQUNpQztLQUNwQzs7SUFFRDtRQUNJLGFBQWE7UUFDYixnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxrQkFBa0I7S0FDckI7O0lBRUQ7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLGFBQWE7S0FDaEI7O0lBRUQ7UUFDSSxpQkFBaUI7S0FDcEI7O0lBRUQ7UUFDSSx3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSx3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxzQkFBc0I7S0FDekI7O0lBRUQ7UUFDSSxzQkFBc0I7S0FDekI7O0lBRUQ7UUFDSSxzQkFBc0I7S0FDekI7O0lBRUQ7UUFDSSxxQkFBcUI7S0FDeEI7O0lBRUQ7UUFDSSxxQkFBcUI7S0FDeEI7O0lBRUQ7UUFDSSxxQkFBcUI7S0FDeEI7O0lBRUQ7UUFDSSxxQkFBcUI7S0FDeEI7O0lBRUQ7UUFDSSxxQkFBcUI7S0FDeEI7O0lBRUQ7UUFDSSwrQkFBK0I7S0FDbEM7O0lBRUQ7UUFDSSxjQUFjO0tBQ2pCOztJQUVEO1FBQ0ksaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixjQUFjO1FBQ2QsY0FBYztRQUNkLG9CQUFvQjtRQUNwQix3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxjQUFjO0tBQ2pCOztJQUVEO1FBQ0ksc0JBQXNCO1FBQ3RCLFVBQVU7UUFDVixXQUFXO0tBQ2Q7O0lBRUQ7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLFlBQVk7UUFDWixZQUFZO1FBQ1osY0FBYztRQUNkLG9CQUFvQjtRQUNwQix3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxzQkFBc0I7UUFDdEIsVUFBVTtRQUNWLFdBQVc7S0FDZDs7SUFFRDtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsY0FBYztRQUNkLG9CQUFvQjtRQUNwQix3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxlQUFlO0tBQ2xCOztJQUVEO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7S0FDbEI7O0lBRUQ7UUFDSSxvQkFBb0I7S0FDdkI7O0lBRUQ7UUFDSSxrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLGNBQWM7UUFDZCx3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxlQUFlO0tBQ2xCOztJQUVEO1FBQ0ksY0FBYztRQUNkLGtDQUFrQztRQUNsQyx5QkFBeUI7S0FDNUI7O0lBRUQ7UUFDSSxxQkFBcUI7S0FDeEI7O0lBRUQ7UUFDSSxjQUFjO1FBQ2Qsc0NBQXNDO1FBQ3RDLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLGNBQWM7UUFDZCx3Q0FBd0M7UUFDeEMsd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksY0FBYztRQUNkLHdDQUF3QztRQUN4Qyx3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxjQUFjO1FBQ2Qsc0NBQXNDO1FBQ3RDLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLGNBQWM7UUFDZCx5Q0FBeUM7S0FDNUM7O0lBRUQ7UUFDSSxpQkFBaUI7S0FDcEI7O0lBRUQ7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksZUFBZTtLQUNsQjs7SUFFRDtRQUNJLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osNkVBQTZFO1FBQzdFLDRCQUE0QjtRQUM1QixvQ0FBb0M7UUFDcEMsY0FBYztRQUNkLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLG1CQUFtQjtRQUNuQiwwQ0FBMEM7UUFDMUMsV0FBVztLQUNkOztJQUVEO1FBQ0ksMkJBQTJCO0tBQzlCOztJQUVEO1FBQ0ksaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUI7S0FDcEI7O0lBRUQ7S0FDQzs7SUFFRDtRQUNJLGVBQWU7UUFDZixrQkFBa0I7S0FDckI7O0lBRUQ7UUFDSSxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCx1QkFBdUI7UUFDdkIsUUFBUTtRQUNSLG1CQUFtQjtRQUNuQixXQUFXO0tBQ2Q7O0lBRUQ7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLGVBQWU7UUFDZixVQUFVO1FBQ1Ysc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLGlCQUFpQjtLQUNwQjtJQUNEO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVixzQkFBc0I7UUFDdEIsaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4QixvQkFBb0I7S0FDdkI7O0lBRUQ7UUFDSSxjQUFjO0tBQ2pCOztJQUVEO1FBQ0ksY0FBYztLQUNqQjs7SUFFRDtRQUNJLGVBQWU7UUFDZixnQ0FBZ0M7UUFDaEMsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixZQUFZO0tBQ2Y7O0lBRUQ7UUFDSSxlQUFlO0tBQ2xCO0NBQ0o7QUFFRCxPQUFPO0FBQ1AsNERBQTREO0FBQzVELG1DQUFtQztBQUNuQyxNQUFNO0FBRU47SUFDSTtRQUNJOzs7O1VBSUU7UUFDRixjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLFlBQVk7O0tBRWY7O0lBRUQ7UUFDSSxpQkFBaUI7S0FDcEI7O0lBRUQ7UUFDSSxjQUFjO1FBQ2QsMEJBQTBCO1FBQzFCLGNBQWM7S0FDakI7O0lBRUQ7UUFDSSxjQUFjO1FBQ2QsY0FBYztLQUNqQjs7SUFFRDtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxtQkFBbUI7S0FDdEI7O0lBRUQ7UUFDSTt5Q0FDaUM7S0FDcEM7O0lBRUQ7UUFDSSxhQUFhO1FBQ2IsZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksa0JBQWtCO0tBQ3JCOztJQUVEO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQixhQUFhO0tBQ2hCOztJQUVEO1FBQ0ksaUJBQWlCO0tBQ3BCOztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FrQkc7O0lBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtQkY7SUFDRTtRQUNJLCtCQUErQjtLQUNsQzs7SUFFRDtRQUNJLGNBQWM7S0FDakI7O0lBRUQ7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGNBQWM7UUFDZCxjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLGNBQWM7S0FDakI7O0lBRUQ7UUFDSSxzQkFBc0I7UUFDdEIsVUFBVTtRQUNWLFdBQVc7S0FDZDs7SUFFRDtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsY0FBYztRQUNkLG9CQUFvQjtRQUNwQix3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLHNCQUFzQjtRQUN0QixVQUFVO1FBQ1YsV0FBVztLQUNkOztJQUVEO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLGVBQWU7S0FDbEI7O0lBRUQ7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtLQUNsQjs7SUFFRDtRQUNJLG9CQUFvQjtLQUN2Qjs7SUFFRDtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksY0FBYztRQUNkLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLGVBQWU7S0FDbEI7O0lBRUQ7UUFDSSxjQUFjO1FBQ2Qsa0NBQWtDO1FBQ2xDLHlCQUF5QjtLQUM1Qjs7SUFFRDtRQUNJLHFCQUFxQjtLQUN4Qjs7SUFFRDtRQUNJLGNBQWM7UUFDZCxzQ0FBc0M7UUFDdEMsd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksY0FBYztRQUNkLHdDQUF3QztRQUN4Qyx3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxjQUFjO1FBQ2Qsd0NBQXdDO1FBQ3hDLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLGNBQWM7UUFDZCxzQ0FBc0M7UUFDdEMsd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksY0FBYztRQUNkLHNDQUFzQztRQUN0QyxzQkFBc0I7S0FDekI7O0lBRUQ7UUFDSSxpQkFBaUI7S0FDcEI7O0lBRUQ7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksZUFBZTtLQUNsQjs7SUFFRDtRQUNJLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWiw2RUFBNkU7UUFDN0UsNEJBQTRCO1FBQzVCLG9DQUFvQztRQUNwQyxjQUFjO1FBQ2QsZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksbUJBQW1CO1FBQ25CLDBDQUEwQztRQUMxQyxXQUFXO0tBQ2Q7O0lBRUQ7UUFDSSwyQkFBMkI7S0FDOUI7O0lBRUQ7UUFDSSxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtLQUNwQjs7SUFFRDtLQUNDOztJQUVEO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtLQUNyQjs7SUFFRDtRQUNJLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixRQUFRO1FBQ1IsbUJBQW1CO1FBQ25CLFdBQVc7S0FDZDs7SUFFRDtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVixzQkFBc0I7UUFDdEIsaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIsaUJBQWlCO0tBQ3BCO0lBQ0Q7UUFDSSxlQUFlO1FBQ2YsVUFBVTtRQUNWLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQixzQkFBc0I7S0FDekI7O0lBRUQ7UUFDSSxjQUFjO0tBQ2pCOztJQUVEO1FBQ0ksZUFBZTtRQUNmLGdDQUFnQztRQUNoQyxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLFlBQVk7S0FDZjs7SUFFRDtRQUNJLGVBQWU7S0FDbEI7O0lBRUQ7UUFDSSxvQkFBb0I7S0FDdkI7Q0FDSjtBQUdELE9BQU87QUFDUCwyREFBMkQ7QUFDM0QsaUNBQWlDO0FBQ2pDLE1BQU07QUFFTjtJQUNJO1FBQ0k7Ozs7VUFJRTtRQUNGLGNBQWM7UUFDZCx3QkFBd0I7UUFDeEIsWUFBWTs7S0FFZjs7SUFFRDtRQUNJLGlCQUFpQjtLQUNwQjs7SUFFRDtRQUNJLGNBQWM7UUFDZCwwQkFBMEI7UUFDMUIsY0FBYztLQUNqQjs7SUFFRDtRQUNJLGNBQWM7UUFDZCxjQUFjO0tBQ2pCOztJQUVEO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLG1CQUFtQjtLQUN0Qjs7SUFFRDtRQUNJO3lDQUNpQztLQUNwQzs7SUFFRDtRQUNJLGFBQWE7UUFDYixnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxrQkFBa0I7S0FDckI7O0lBRUQ7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLGFBQWE7S0FDaEI7O0lBRUQ7UUFDSSxpQkFBaUI7S0FDcEI7O0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWtCRzs7SUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Ba0JHOztJQUVIO1FBQ0ksK0JBQStCO0tBQ2xDOztJQUVEO1FBQ0ksY0FBYztLQUNqQjs7SUFFRDtRQUNJLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osY0FBYztRQUNkLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksY0FBYztLQUNqQjs7SUFFRDtRQUNJLHNCQUFzQjtRQUN0QixVQUFVO1FBQ1YsV0FBVztLQUNkOztJQUVEO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsY0FBYztRQUNkLG9CQUFvQjtRQUNwQix3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksc0JBQXNCO1FBQ3RCLFVBQVU7UUFDVixXQUFXO0tBQ2Q7O0lBRUQ7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksZUFBZTtLQUNsQjs7SUFFRDtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0tBQ2xCOztJQUVEO1FBQ0ksb0JBQW9CO0tBQ3ZCOztJQUVEO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxjQUFjO1FBQ2Qsd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksZUFBZTtLQUNsQjs7SUFFRDtRQUNJLGNBQWM7UUFDZCxrQ0FBa0M7UUFDbEMseUJBQXlCO0tBQzVCOztJQUVEO1FBQ0kscUJBQXFCO0tBQ3hCOztJQUVEO1FBQ0ksY0FBYztRQUNkLHNDQUFzQztRQUN0Qyx3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxjQUFjO1FBQ2Qsd0NBQXdDO1FBQ3hDLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLGNBQWM7UUFDZCx3Q0FBd0M7UUFDeEMsd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksY0FBYztRQUNkLHNDQUFzQztRQUN0Qyx3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxjQUFjO1FBQ2QseUNBQXlDO1FBQ3pDLHNCQUFzQjtLQUN6Qjs7SUFFRDtRQUNJLGlCQUFpQjtLQUNwQjs7SUFFRDtRQUNJLGlCQUFpQjtRQUNqQixnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxlQUFlO0tBQ2xCOztJQUVEO1FBQ0ksc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLDZFQUE2RTtRQUM3RSw0QkFBNEI7UUFDNUIsb0NBQW9DO1FBQ3BDLGNBQWM7UUFDZCxnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxtQkFBbUI7UUFDbkIsMENBQTBDO1FBQzFDLFdBQVc7S0FDZDs7SUFFRDtRQUNJLDJCQUEyQjtLQUM5Qjs7SUFFRDtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsaUJBQWlCO0tBQ3BCOztJQUVEO0tBQ0M7O0lBRUQ7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO0tBQ3JCOztJQUVEO1FBQ0ksYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLFFBQVE7UUFDUixtQkFBbUI7UUFDbkIsV0FBVztLQUNkOztJQUVEO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQixpQkFBaUI7S0FDcEI7SUFDRDtRQUNJLGdCQUFnQjtRQUNoQixVQUFVO1FBQ1Ysc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLHNCQUFzQjtLQUN6Qjs7SUFFRDtRQUNJLGNBQWM7S0FDakI7O0lBRUQ7UUFDSSxlQUFlO1FBQ2YsZ0NBQWdDO1FBQ2hDLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsWUFBWTtLQUNmOztJQUVEO1FBQ0ksZUFBZTtLQUNsQjs7SUFFRDtRQUNJLG9CQUFvQjtLQUN2QjtDQUNKO0FDeGxFRDtDQUNDO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxjQUFjO0NBQ2pCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtDQUNsQjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0NBQ2xCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtDQUNsQjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLGVBQWU7SUFDZixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLGVBQWU7SUFDZixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLGVBQWU7SUFDZixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLGVBQWU7SUFDZixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLGVBQWU7SUFDZixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLHlDQUF5QztJQUN6Qyw4QkFBOEI7SUFDOUIsb0JBQW9CO0NBQ3ZCO0FBRUQ7SUFDSSx5Q0FBeUM7SUFDekMsOEJBQThCO0lBQzlCLG9CQUFvQjtDQUN2QjtBQUVEO0lBQ0kseUNBQXlDO0lBQ3pDLDhCQUE4QjtJQUM5QixvQkFBb0I7Q0FDdkI7QUFFRDtJQUNJLHlDQUF5QztJQUN6Qyw4QkFBOEI7SUFDOUIsb0JBQW9CO0NBQ3ZCO0FBRUQ7SUFDSSx5Q0FBeUM7SUFDekMsOEJBQThCO0lBQzlCLG9CQUFvQjtDQUN2QjtBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix3REFBd0Q7SUFDeEQsZ0VBQWdFO0NBQ25FO0FBRUQ7SUFFSSxzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRCxhQUFhO0FBQ2I7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsZUFBZTtDQUNsQjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLHNCQUFzQjtDQUN6QjtBQUVEO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtDQUN6QjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixlQUFlO0NBQ2xCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLGVBQWU7SUFDZixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsZUFBZTtDQUNsQjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLHNCQUFzQjtDQUN6QjtBQUVEO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtDQUN6QjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixlQUFlO0NBQ2xCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLGVBQWU7SUFDZixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsZUFBZTtDQUNsQjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLHNCQUFzQjtDQUN6QjtBQUVEO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtDQUN6QjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixlQUFlO0NBQ2xCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLGVBQWU7SUFDZixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsZUFBZTtDQUNsQjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLHNCQUFzQjtDQUN6QjtBQUVEO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtDQUN6QjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixlQUFlO0NBQ2xCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLGVBQWU7SUFDZixzQkFBc0I7Q0FDekI7QUFHRDtJQUNJLDBCQUEwQjtJQUMxQiw0RUFBNEU7SUFDNUUsOEJBQThCO0lBQzlCLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLDRFQUE0RTtJQUM1RSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsNEVBQTRFO0lBQzVFLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLDRFQUE0RTtJQUM1RSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUMvWEQ7SUFDSSxtQkFBbUI7SUFDbkIsNkVBQTZFO0lBQzdFLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0NBQ2Y7QUFFRDtJQUNJLHFDQUFxQztJQUNyQywwQkFBMEI7SUFDMUIsZ0NBQWdDO0lBQ2hDLHdGQUF3RjtJQUN4Rix1RkFBdUY7SUFDdkYsc0RBQXNEO0lBQ3RELDhEQUE4RDtDQUNqRTtBQUVEO0lBQ0ksK0JBQStCO0NBQ2xDO0FBRUQ7SUFDSSxjQUFjO0NBQ2pCO0FBR0Q7SUFDSSwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLFlBQVk7Q0FDZjtBQUVEO0lBQ0ksNkJBQTZCO0lBQzdCLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLGNBQWM7Q0FDakI7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7QUFFRDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7R0FDakI7cUJBQ2tCO0NBQ3BCO0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvdGFibGEtbGVuZ3Vhcy1pbmRpZ2VuYXMvdGFibGEtbGVuZ3Vhcy1pbmRpZ2VuYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxyXG4gICMjRGV2aWNlID0gRGVza3RvcHNcclxuICAjI1NjcmVlbiA9IDEyODFweCB0byBoaWdoZXIgcmVzb2x1dGlvbiBkZXNrdG9wc1xyXG4qL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MXB4KSB7XHJcbiAgICAuZmFtaWx5LW1lbnUge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAqL1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IC5mYW1pbHktbWVudS1vcHRpb25zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgLmZhbWlseS1tZW51LWNhcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgdGFibGUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSAuY2FyZCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSB0Ym9keSB0ciB7XHJcbiAgICAgICAgLypkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsqL1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSB0Ym9keSB0ciB0ZCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgdGJvZHkgdHIgdGQgYiB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoZWNrYm94LW9wdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmllbGQ6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAjS3AucGVyaW9kaWMtdGFibGUtZmFtaWx5e1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNDdS5wZXJpb2RpYy10YWJsZS1mYW1pbHl7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XHJcbiAgICB9XHJcblxyXG4gICAgI0F5LnBlcmlvZGljLXRhYmxlLWZhbWlseXtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTQ7XHJcbiAgICB9XHJcblxyXG4gICAgI1BvUy5wZXJpb2RpYy10YWJsZS1mYW1pbHkge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxMztcclxuICAgIH1cclxuXHJcbiAgICAjUWUucGVyaW9kaWMtdGFibGUtZmFtaWx5IHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTI7XHJcbiAgICB9XHJcblxyXG4gICAgI015LnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24sICNUcC5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLCAjWWEucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbiwgI0FrLnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24sICNJdC5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIH1cclxuXHJcbiAgICAjVHMucGVyaW9kaWMtdGFibGUtbWlncmF0aW9uLCAjSHYucGVyaW9kaWMtdGFibGUtbWlncmF0aW9uLCAjTXkucGVyaW9kaWMtdGFibGUtbWlncmF0aW9uLCAjS3EucGVyaW9kaWMtdGFibGUtbWlncmF0aW9uLCAjQXcucGVyaW9kaWMtdGFibGUtbWlncmF0aW9uIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIH1cclxuXHJcbiAgICAjSXgucGVyaW9kaWMtdGFibGUtcnVyYWwsICNDaS5wZXJpb2RpYy10YWJsZS1ydXJhbCwgI1RhLnBlcmlvZGljLXRhYmxlLXJ1cmFsLCAjTWkucGVyaW9kaWMtdGFibGUtcnVyYWwsICNJdC5wZXJpb2RpYy10YWJsZS1ydXJhbCB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgI1RoUy5wZXJpb2RpYy10YWJsZS1pcmUsICNIdS5wZXJpb2RpYy10YWJsZS1pcmUsICNDaFQucGVyaW9kaWMtdGFibGUtaXJlIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIH1cclxuXHJcbiAgICAjQXcucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLCAjVGEucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLCAjTW8ucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLCAjT3QucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzICwgI1RwLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcyAge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5vcmRlbi1tZW51IC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC52ZXJ0aWNhbC1ncmlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgIH1cclxuXHJcbiAgICAudmVydGljYWwtZ3JpZHMgbGkge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIGhlaWdodDogNC42dnc7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBtYXJnaW46IDRweDtcclxuICAgICAgICB6LWluZGV4OiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1ncmlkcyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1ncmlkcyA+IHVsIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtbGlzdC1hIGxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNi4yNSU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFsLWxpc3QtYiBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWMgbGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA3LjElO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWdyb3VwcyB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFsLWxpc3QtZ3JvdXBzIGxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMzMuMyU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1zeW1ib2xze1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAudGFic3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LXRhYntcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC10YWItc3ltYm9scyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC10YWItc3ltYm9scyA+IHRhYmxlID4gdGJvZHkgPiB0ciA+dGQge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtY29sdW1ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMlIDk0JSAzJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLWNvbHVtbnMtZGl2IHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbi1ncmlkcywgLnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbi1ncmlkcywgLnBlcmlvZGljLXRhYmxlLXJ1cmFsLWdyaWRzLCAucGVyaW9kaWMtdGFibGUtaXJlLWdyaWRzLCAucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLWdyaWRzIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDMzJSk7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLWFscGhhYmV0LWdyaWRze1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTQsIDcuMSUpO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMtZ3JpZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMTIuNSUpO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMtZ3JpZHMtYiB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAyNSUpO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1mYW1pbHktZ3JpZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTYsIDYuMjUlKTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLW9uZSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLXR3bywgLmNvbHVtbi10aHJlZSwgLmNvbHVtbi1mb3VyIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLWZpdmUge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuaXMtc21hbGwtYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ncm91cCB7XHJcbiAgICAgICAgLyptaW4taGVpZ2h0OiAxMDNweDsqL1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgLyp3aWR0aDogMTA1cHg7Ki9cclxuICAgICAgICBoZWlnaHQ6IDQuNnZ3O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBtYXJnaW46IDRweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCA0cHggMCByZ2JhKDAsIDAsIDAsIC4xKSwgaW5zZXQgMCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgLjEpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgICAgICB6LWluZGV4OiBhdXRvO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JvdXA6YWZ0ZXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5ncm91cDpob3ZlciB7XHJcbiAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSwgMS41KTtcclxuICAgIH1cclxuXHJcbiAgICAuZWxlbWVudC1zeW1ib2wge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5lbGVtZW50LXN5bWJvbCA+IGJ7XHJcbiAgICB9XHJcblxyXG4gICAgLm51bWJlci1pZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmF0b21pYy1vcmJpdGFsLXNoZWxscyB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZmxleDogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYXRvbWljLW9yYml0YWwtc2hlbGxzIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDtcclxuICAgIH1cclxuXHJcbiAgICAuZWxlbWVudC1uYW1le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgIGZsZXg6IDEgMTtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICB9XHJcbiAgICAucG9wdWxhdGlvbntcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICBmbGV4OiAxIDE7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICBtYXJnaW46IC0zcHggLTRweCAzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lc3NhZ2UtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWwtaW1hZ2UtZnVsbCAubW9kYWwtY29udGVudHtcclxuICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLyohKiAqL1xyXG4vKiAgIyNEZXZpY2UgPSBMYXB0b3BzLCBEZXNrdG9wcyovXHJcbi8qICAjI1NjcmVlbiA9IEIvdyAxMDI1cHggdG8gMTI4MCovXHJcbi8qKiEqL1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgLmZhbWlseS1tZW51IHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgKi9cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSAgbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAuNTVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IC5mYW1pbHktbWVudS1vcHRpb25zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgLmZhbWlseS1tZW51LWNhcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgdGFibGUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSAuY2FyZCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSB0Ym9keSB0ciB7XHJcbiAgICAgICAgLypkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsqL1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSB0Ym9keSB0ciB0ZCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgdGJvZHkgdHIgdGQgYiB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoZWNrYm94LW9wdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmllbGQ6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAjS3AucGVyaW9kaWMtdGFibGUtZmFtaWx5e1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNDdS5wZXJpb2RpYy10YWJsZS1mYW1pbHl7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XHJcbiAgICB9XHJcblxyXG4gICAgI0F5LnBlcmlvZGljLXRhYmxlLWZhbWlseXtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTQ7XHJcbiAgICB9XHJcblxyXG4gICAgI1BvUy5wZXJpb2RpYy10YWJsZS1mYW1pbHkge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxMztcclxuICAgIH1cclxuXHJcbiAgICAjUWUucGVyaW9kaWMtdGFibGUtZmFtaWx5IHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTI7XHJcbiAgICB9XHJcblxyXG4gICAgI015LnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24sICNUcC5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLCAjWWEucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbiwgI0FrLnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24sICNJdC5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIH1cclxuXHJcbiAgICAjVHMucGVyaW9kaWMtdGFibGUtbWlncmF0aW9uLCAjSHYucGVyaW9kaWMtdGFibGUtbWlncmF0aW9uLCAjTXkucGVyaW9kaWMtdGFibGUtbWlncmF0aW9uLCAjS3EucGVyaW9kaWMtdGFibGUtbWlncmF0aW9uLCAjQXcucGVyaW9kaWMtdGFibGUtbWlncmF0aW9uIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIH1cclxuXHJcbiAgICAjSXgucGVyaW9kaWMtdGFibGUtcnVyYWwsICNDaS5wZXJpb2RpYy10YWJsZS1ydXJhbCwgI1RhLnBlcmlvZGljLXRhYmxlLXJ1cmFsLCAjTWkucGVyaW9kaWMtdGFibGUtcnVyYWwsICNJdC5wZXJpb2RpYy10YWJsZS1ydXJhbCB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgI1RoUy5wZXJpb2RpYy10YWJsZS1pcmUsICNIdS5wZXJpb2RpYy10YWJsZS1pcmUsICNDaFQucGVyaW9kaWMtdGFibGUtaXJlIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIH1cclxuXHJcbiAgICAjQXcucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLCAjVGEucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLCAjTW8ucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLCAjT3QucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzICwgI1RwLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcyAge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5vcmRlbi1tZW51IC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC52ZXJ0aWNhbC1ncmlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgIH1cclxuXHJcbiAgICAudmVydGljYWwtZ3JpZHMgbGkge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIGhlaWdodDogNC4ydnc7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBtYXJnaW46IDRweDtcclxuICAgICAgICB6LWluZGV4OiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1ncmlkcyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1ncmlkcyA+IHVsIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtbGlzdC1hIGxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNi4yNSU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFsLWxpc3QtYiBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWMgbGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA3LjElO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWdyb3VwcyB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFsLWxpc3QtZ3JvdXBzIGxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMzMuMyU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1zeW1ib2xze1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAudGFic3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LXRhYntcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC10YWItc3ltYm9scyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC10YWItc3ltYm9scyA+IHRhYmxlID4gdGJvZHkgPiB0ciA+dGQge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtY29sdW1ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMlIDk0JSAzJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLWNvbHVtbnMtZGl2IHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbi1ncmlkcywgLnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbi1ncmlkcywgLnBlcmlvZGljLXRhYmxlLXJ1cmFsLWdyaWRzLCAucGVyaW9kaWMtdGFibGUtaXJlLWdyaWRzLCAucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLWdyaWRzIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDMzJSk7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLWFscGhhYmV0LWdyaWRze1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTQsIDcuMSUpO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMtZ3JpZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMTIuNSUpO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMtZ3JpZHMtYiB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAyNSUpO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1mYW1pbHktZ3JpZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTYsIDYuMjUlKTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLW9uZSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLXR3bywgLmNvbHVtbi10aHJlZSwgLmNvbHVtbi1mb3VyIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLWZpdmUge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuaXMtc21hbGwtYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ncm91cCB7XHJcbiAgICAgICAgLyptaW4taGVpZ2h0OiAxMDNweDsqL1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgLyp3aWR0aDogMTA1cHg7Ki9cclxuICAgICAgICBoZWlnaHQ6IDQuNnZ3O1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCA0cHggMCByZ2JhKDAsIDAsIDAsIC4xKSwgaW5zZXQgMCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgLjEpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgICAgICB6LWluZGV4OiBhdXRvO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JvdXA6YWZ0ZXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5ncm91cDpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUsIDEuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmVsZW1lbnQtc3ltYm9sIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAuZWxlbWVudC1zeW1ib2wgPiBie1xyXG4gICAgfVxyXG5cclxuICAgIC5udW1iZXItaWQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC5hdG9taWMtb3JiaXRhbC1zaGVsbHMge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXg6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmF0b21pYy1vcmJpdGFsLXNoZWxscyBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTA7XHJcbiAgICB9XHJcblxyXG4gICAgLmVsZW1lbnQtbmFtZXtcclxuICAgICAgICBmb250LXNpemU6IDdweDtcclxuICAgICAgICBmbGV4OiAxIDE7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgfVxyXG4gICAgLnBvcHVsYXRpb257XHJcbiAgICAgICAgZm9udC1zaXplOiA3cHg7XHJcbiAgICAgICAgZmxleDogMSAxO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luOiAtM3B4IC00cHggM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlLWJvZHkge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsLWltYWdlLWZ1bGwgLm1vZGFsLWNvbnRlbnR7XHJcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiEqICovXHJcbi8qICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChwb3J0cmFpdCkqL1xyXG4vKiAgIyNTY3JlZW4gPSBCL3cgNzY4cHggdG8gMTAyNHB4Ki9cclxuLyoqISovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xyXG4gICAgLmZhbWlseS1tZW51IHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgKi9cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgIGxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjZyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IC5mYW1pbHktbWVudS1vcHRpb25zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgLmZhbWlseS1tZW51LWNhcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgdGFibGUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSAuY2FyZCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSB0Ym9keSB0ciB7XHJcbiAgICAgICAgLypkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsqL1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSB0Ym9keSB0ciB0ZCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgdGJvZHkgdHIgdGQgYiB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoZWNrYm94LW9wdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmllbGQ6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAjS3AucGVyaW9kaWMtdGFibGUtZmFtaWx5e1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNDdS5wZXJpb2RpYy10YWJsZS1mYW1pbHl7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XHJcbiAgICB9XHJcblxyXG4gICAgI0F5LnBlcmlvZGljLXRhYmxlLWZhbWlseXtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTQ7XHJcbiAgICB9XHJcblxyXG4gICAgI1BvUy5wZXJpb2RpYy10YWJsZS1mYW1pbHkge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxMztcclxuICAgIH1cclxuXHJcbiAgICAjUWUucGVyaW9kaWMtdGFibGUtZmFtaWx5IHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTI7XHJcbiAgICB9XHJcblxyXG4gICAgI015LnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24sICNUcC5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLCAjWWEucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbiwgI0FrLnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24sICNJdC5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIH1cclxuXHJcbiAgICAjVHMucGVyaW9kaWMtdGFibGUtbWlncmF0aW9uLCAjSHYucGVyaW9kaWMtdGFibGUtbWlncmF0aW9uLCAjTXkucGVyaW9kaWMtdGFibGUtbWlncmF0aW9uLCAjS3EucGVyaW9kaWMtdGFibGUtbWlncmF0aW9uLCAjQXcucGVyaW9kaWMtdGFibGUtbWlncmF0aW9uIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIH1cclxuXHJcbiAgICAjSXgucGVyaW9kaWMtdGFibGUtcnVyYWwsICNDaS5wZXJpb2RpYy10YWJsZS1ydXJhbCwgI1RhLnBlcmlvZGljLXRhYmxlLXJ1cmFsLCAjTWkucGVyaW9kaWMtdGFibGUtcnVyYWwsICNJdC5wZXJpb2RpYy10YWJsZS1ydXJhbCB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgI1RoUy5wZXJpb2RpYy10YWJsZS1pcmUsICNIdS5wZXJpb2RpYy10YWJsZS1pcmUsICNDaFQucGVyaW9kaWMtdGFibGUtaXJlIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIH1cclxuXHJcbiAgICAjQXcucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLCAjVGEucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLCAjTW8ucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLCAjT3QucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzICwgI1RwLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcyAge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5vcmRlbi1tZW51IC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC52ZXJ0aWNhbC1ncmlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgIH1cclxuXHJcbiAgICAudmVydGljYWwtZ3JpZHMgbGkge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIGhlaWdodDogNC4ydnc7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBtYXJnaW46IDRweDtcclxuICAgICAgICB6LWluZGV4OiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1ncmlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1ncmlkcyA+IHVsIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtbGlzdC1hIGxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNi4yNSU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFsLWxpc3QtYiBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWMgbGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA3LjElO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWdyb3VwcyB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFsLWxpc3QtZ3JvdXBzIGxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMzMuMyU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1zeW1ib2xze1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAudGFic3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LXRhYntcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC10YWItc3ltYm9scyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC10YWItc3ltYm9scyA+IHRhYmxlID4gdGJvZHkgPiB0ciA+dGQge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC10YWItc3ltYm9scyBsYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtY29sdW1ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAlIDEwMCUgMCU7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1jb2x1bW5zLWRpdiB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24tZ3JpZHMsIC5wZXJpb2RpYy10YWJsZS1taWdyYXRpb24tZ3JpZHMsIC5wZXJpb2RpYy10YWJsZS1ydXJhbC1ncmlkcywgLnBlcmlvZGljLXRhYmxlLWlyZS1ncmlkcywgLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcy1ncmlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMyUpO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1hbHBoYWJldC1ncmlkc3tcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDE0LCA3LjElKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLWdyaWRzIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDEyLjUlKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLWdyaWRzLWIge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMjUlKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtZmFtaWx5LWdyaWRzIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDE2LCA2LjI1JSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbHVtbi1vbmUge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbHVtbi10d28sIC5jb2x1bW4tdGhyZWUsIC5jb2x1bW4tZm91ciB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbHVtbi1maXZlIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmlzLXNtYWxsLWJ1dHRvbntcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JvdXAge1xyXG4gICAgICAgIC8qbWluLWhlaWdodDogMTAzcHg7Ki9cclxuICAgICAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIC8qd2lkdGg6IDEwNXB4OyovXHJcbiAgICAgICAgaGVpZ2h0OiA0LjZ2dztcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAuMSksIGluc2V0IDAgMCAwIDJweCByZ2JhKDAsIDAsIDAsIC4xKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgei1pbmRleDogYXV0bztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyb3VwOmFmdGVyIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JvdXA6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41LCAxLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbGVtZW50LXN5bWJvbCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAuZWxlbWVudC1zeW1ib2wgPiBie1xyXG4gICAgfVxyXG5cclxuICAgIC5udW1iZXItaWQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC5hdG9taWMtb3JiaXRhbC1zaGVsbHMge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXg6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmF0b21pYy1vcmJpdGFsLXNoZWxscyBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTA7XHJcbiAgICB9XHJcblxyXG4gICAgLmVsZW1lbnQtbmFtZXtcclxuICAgICAgICBmb250LXNpemU6IDBweDtcclxuICAgICAgICBmbGV4OiAxIDE7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgfVxyXG4gICAgLnBvcHVsYXRpb257XHJcbiAgICAgICAgZm9udC1zaXplOiA3cHg7XHJcbiAgICAgICAgZmxleDogMSAxO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLnBvcHVsYXRpb24gc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubWVzc2FnZS1ib2R5IHtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbC1pbWFnZS1mdWxsIC5tb2RhbC1jb250ZW50e1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiEqICovXHJcbi8qICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChsYW5kc2NhcGUpKi9cclxuLyogICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweCovXHJcbi8qKiEqL1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgIC5mYW1pbHktbWVudSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51ICBsYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IC42cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSAuZmFtaWx5LW1lbnUtb3B0aW9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IC5mYW1pbHktbWVudS1jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IHRhYmxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgLmNhcmQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgdGJvZHkgdHIge1xyXG4gICAgICAgIC8qZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47Ki9cclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgdGJvZHkgdHIgdGQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IHRib2R5IHRyIHRkIGIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGVja2JveC1vcHRpb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpZWxkOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgI0twLnBlcmlvZGljLXRhYmxlLWZhbWlseXtcclxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMTtcclxuICAgIH1cclxuXHJcbiAgICAjQ3UucGVyaW9kaWMtdGFibGUtZmFtaWx5e1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNBeS5wZXJpb2RpYy10YWJsZS1mYW1pbHl7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE0O1xyXG4gICAgfVxyXG5cclxuICAgICNQb1MucGVyaW9kaWMtdGFibGUtZmFtaWx5IHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTM7XHJcbiAgICB9XHJcblxyXG4gICAgI1FlLnBlcmlvZGljLXRhYmxlLWZhbWlseSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDEyO1xyXG4gICAgfVxyXG5cclxuICAgICNNeS5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLCAjVHAucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbiwgI1lhLnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24sICNBay5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLCAjSXQucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbiB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgI1RzLnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI0h2LnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI015LnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI0txLnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI0F3LnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgI0l4LnBlcmlvZGljLXRhYmxlLXJ1cmFsLCAjQ2kucGVyaW9kaWMtdGFibGUtcnVyYWwsICNUYS5wZXJpb2RpYy10YWJsZS1ydXJhbCwgI01pLnBlcmlvZGljLXRhYmxlLXJ1cmFsLCAjSXQucGVyaW9kaWMtdGFibGUtcnVyYWwge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNUaFMucGVyaW9kaWMtdGFibGUtaXJlLCAjSHUucGVyaW9kaWMtdGFibGUtaXJlLCAjQ2hULnBlcmlvZGljLXRhYmxlLWlyZSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgI0F3LnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcywgI1RhLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcywgI01vLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcywgI090LnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcyAsICNUcC5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMgIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIH1cclxuXHJcbiAgICAub3JkZW4tbWVudSAuc3VidGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAudmVydGljYWwtZ3JpZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnZlcnRpY2FsLWdyaWRzIGxpIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBoZWlnaHQ6IDQuMnZ3O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgICAgei1pbmRleDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtZ3JpZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtZ3JpZHMgPiB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFsLWxpc3QtYSBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDYuMjUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWIgbGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAzMy4zJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtbGlzdC1jIGxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNy4xJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtbGlzdC1ncm91cHMge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWdyb3VwcyBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtc3ltYm9sc3tcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYnN7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC10YWJ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtdGFiLXN5bWJvbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtdGFiLXN5bWJvbHMgPiB0YWJsZSA+IHRib2R5ID4gdHIgPnRkIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtdGFiLXN5bWJvbHMgbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLWNvbHVtbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwJSAxMDAlIDAlO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtY29sdW1ucy1kaXYge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLWdyaWRzLCAucGVyaW9kaWMtdGFibGUtbWlncmF0aW9uLWdyaWRzLCAucGVyaW9kaWMtdGFibGUtcnVyYWwtZ3JpZHMsIC5wZXJpb2RpYy10YWJsZS1pcmUtZ3JpZHMsIC5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMtZ3JpZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzMlKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtYWxwaGFiZXQtZ3JpZHN7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxNCwgNy4xJSk7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcy1ncmlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxMi41JSk7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcy1ncmlkcy1iIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDI1JSk7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLWZhbWlseS1ncmlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxNiwgNi4yNSUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4tb25lIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4tdHdvLCAuY29sdW1uLXRocmVlLCAuY29sdW1uLWZvdXIge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4tZml2ZSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5pcy1zbWFsbC1idXR0b257XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyb3VwIHtcclxuICAgICAgICAvKm1pbi1oZWlnaHQ6IDEwM3B4OyovXHJcbiAgICAgICAgbWF4LWhlaWdodDogNzBweDtcclxuICAgICAgICAvKndpZHRoOiAxMDVweDsqL1xyXG4gICAgICAgIGhlaWdodDogNC42dnc7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCAwIHJnYmEoMCwgMCwgMCwgLjEpLCBpbnNldCAwIDAgMCAycHggcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgICAgIHotaW5kZXg6IGF1dG87XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ncm91cDphZnRlciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyb3VwOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSwgMS41KTtcclxuICAgIH1cclxuXHJcbiAgICAuZWxlbWVudC1zeW1ib2wge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmVsZW1lbnQtc3ltYm9sID4gYntcclxuICAgIH1cclxuXHJcbiAgICAubnVtYmVyLWlkIHtcclxuICAgICAgICBmb250LXNpemU6IDdweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAuYXRvbWljLW9yYml0YWwtc2hlbGxzIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hdG9taWMtb3JiaXRhbC1zaGVsbHMgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbGVtZW50LW5hbWV7XHJcbiAgICAgICAgZm9udC1zaXplOiAwcHg7XHJcbiAgICAgICAgZmxleDogMSAxO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIH1cclxuICAgIC5wb3B1bGF0aW9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gICAgICAgIGZsZXg6IDEgMTtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC5wb3B1bGF0aW9uIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lc3NhZ2UtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWwtaW1hZ2UtZnVsbCAubW9kYWwtY29udGVudHtcclxuICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWwtY2FyZC10aXRsZSB7XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qISogKi9cclxuLyogICMjRGV2aWNlID0gTG93IFJlc29sdXRpb24gVGFibGV0cywgTW9iaWxlcyAoTGFuZHNjYXBlKSovXHJcbi8qICAjI1NjcmVlbiA9IEIvdyA0ODFweCB0byA3NjdweCovXHJcbi8qKiEqL1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5mYW1pbHktbWVudSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51ICBsYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IC42cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSAuZmFtaWx5LW1lbnUtb3B0aW9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IC5mYW1pbHktbWVudS1jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IHRhYmxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgLmNhcmQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgdGJvZHkgdHIge1xyXG4gICAgICAgIC8qZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47Ki9cclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgdGJvZHkgdHIgdGQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IHRib2R5IHRyIHRkIGIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGVja2JveC1vcHRpb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpZWxkOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyojS3AucGVyaW9kaWMtdGFibGUtZmFtaWx5e1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNDdS5wZXJpb2RpYy10YWJsZS1mYW1pbHl7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XHJcbiAgICB9XHJcblxyXG4gICAgI0F5LnBlcmlvZGljLXRhYmxlLWZhbWlseXtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTQ7XHJcbiAgICB9XHJcblxyXG4gICAgI1BvUy5wZXJpb2RpYy10YWJsZS1mYW1pbHkge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxMztcclxuICAgIH1cclxuXHJcbiAgICAjUWUucGVyaW9kaWMtdGFibGUtZmFtaWx5IHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTI7XHJcbiAgICB9Ki9cclxuXHJcbiAgICAvKiNNeS5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLCAjVHAucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbiwgI1lhLnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24sICNBay5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLCAjSXQucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbiB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgI1RzLnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI0h2LnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI015LnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI0txLnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI0F3LnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgI0l4LnBlcmlvZGljLXRhYmxlLXJ1cmFsLCAjQ2kucGVyaW9kaWMtdGFibGUtcnVyYWwsICNUYS5wZXJpb2RpYy10YWJsZS1ydXJhbCwgI01pLnBlcmlvZGljLXRhYmxlLXJ1cmFsLCAjSXQucGVyaW9kaWMtdGFibGUtcnVyYWwge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNUaFMucGVyaW9kaWMtdGFibGUtaXJlLCAjSHUucGVyaW9kaWMtdGFibGUtaXJlLCAjQ2hULnBlcmlvZGljLXRhYmxlLWlyZSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgI0F3LnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcywgI1RhLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcywgI01vLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcywgI090LnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcyAsICNUcC5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMgIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIH1cclxuKi9cclxuICAgIC5vcmRlbi1tZW51IC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC52ZXJ0aWNhbC1ncmlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgIH1cclxuXHJcbiAgICAudmVydGljYWwtZ3JpZHMgbGkge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIGhlaWdodDogNC4ydnc7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBtYXJnaW46IDRweDtcclxuICAgICAgICB6LWluZGV4OiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1ncmlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1ncmlkcyA+IHVsIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtbGlzdC1hIGxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNi4yNSU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFsLWxpc3QtYiBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWMgbGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA3LjElO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWdyb3VwcyB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFsLWxpc3QtZ3JvdXBzIGxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMzMuMyU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1zeW1ib2xze1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAudGFic3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LXRhYntcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC10YWItc3ltYm9scyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC10YWItc3ltYm9scyA+IHRhYmxlID4gdGJvZHkgPiB0ciA+dGQge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC10YWItc3ltYm9scyBsYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtY29sdW1ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAlIDEwMCUgMCU7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1jb2x1bW5zLWRpdiB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24tZ3JpZHMsIC5wZXJpb2RpYy10YWJsZS1taWdyYXRpb24tZ3JpZHMsIC5wZXJpb2RpYy10YWJsZS1ydXJhbC1ncmlkcywgLnBlcmlvZGljLXRhYmxlLWlyZS1ncmlkcywgLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcy1ncmlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMyUpO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1hbHBoYWJldC1ncmlkc3tcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDE0LCA3LjElKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLWdyaWRzIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDEyLjUlKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLWdyaWRzLWIge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMjUlKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtZmFtaWx5LWdyaWRzIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDIwJSk7XHJcbiAgICAgICAgLypwYWRkaW5nLXRvcDogNTZweDsqL1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4tb25lIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4tdHdvLCAuY29sdW1uLXRocmVlLCAuY29sdW1uLWZvdXIge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4tZml2ZSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5pcy1zbWFsbC1idXR0b257XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyb3VwIHtcclxuICAgICAgICAvKm1pbi1oZWlnaHQ6IDEwM3B4OyovXHJcbiAgICAgICAgLyp3aWR0aDogMTA1cHg7Ki9cclxuICAgICAgICBoZWlnaHQ6IDE3dnc7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCAwIHJnYmEoMCwgMCwgMCwgLjEpLCBpbnNldCAwIDAgMCAycHggcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgICAgIHotaW5kZXg6IGF1dG87XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ncm91cDphZnRlciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyb3VwOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcclxuICAgIH1cclxuXHJcbiAgICAuZWxlbWVudC1zeW1ib2wge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5lbGVtZW50LXN5bWJvbCA+IGJ7XHJcbiAgICB9XHJcblxyXG4gICAgLm51bWJlci1pZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmF0b21pYy1vcmJpdGFsLXNoZWxscyB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZmxleDogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYXRvbWljLW9yYml0YWwtc2hlbGxzIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDtcclxuICAgIH1cclxuXHJcbiAgICAuZWxlbWVudC1uYW1le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmbGV4OiAxIDE7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgfVxyXG4gICAgLnBvcHVsYXRpb257XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgZmxleDogMSAxO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luOiAtM3B4IC00cHggM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlLWJvZHkge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsLWltYWdlLWZ1bGwgLm1vZGFsLWNvbnRlbnR7XHJcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsLWNhcmQtdGl0bGUge1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWd7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qISogKi9cclxuLyogICMjRGV2aWNlID0gTW9zdCBvZiB0aGUgU21hcnRwaG9uZXMgTW9iaWxlcyAoUG9ydHJhaXQpKi9cclxuLyogICMjU2NyZWVuID0gQi93IDMyMCB0byA0NzlweCovXHJcbi8qKiEqL1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5mYW1pbHktbWVudSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51ICBsYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IC42cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5mYW1pbHktbWVudSAuZmFtaWx5LW1lbnUtb3B0aW9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IC5mYW1pbHktbWVudS1jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IHRhYmxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgLmNhcmQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgdGJvZHkgdHIge1xyXG4gICAgICAgIC8qZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47Ki9cclxuICAgIH1cclxuXHJcbiAgICAuZmFtaWx5LW1lbnUgdGJvZHkgdHIgdGQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhbWlseS1tZW51IHRib2R5IHRyIHRkIGIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGVja2JveC1vcHRpb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpZWxkOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyojS3AucGVyaW9kaWMtdGFibGUtZmFtaWx5e1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNDdS5wZXJpb2RpYy10YWJsZS1mYW1pbHl7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XHJcbiAgICB9XHJcblxyXG4gICAgI0F5LnBlcmlvZGljLXRhYmxlLWZhbWlseXtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTQ7XHJcbiAgICB9XHJcblxyXG4gICAgI1BvUy5wZXJpb2RpYy10YWJsZS1mYW1pbHkge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxMztcclxuICAgIH1cclxuXHJcbiAgICAjUWUucGVyaW9kaWMtdGFibGUtZmFtaWx5IHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTI7XHJcbiAgICB9Ki9cclxuXHJcbiAgICAvKiNNeS5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLCAjVHAucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbiwgI1lhLnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24sICNBay5wZXJpb2RpYy10YWJsZS1wb3B1bGF0aW9uLCAjSXQucGVyaW9kaWMtdGFibGUtcG9wdWxhdGlvbiB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgI1RzLnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI0h2LnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI015LnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI0txLnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiwgI0F3LnBlcmlvZGljLXRhYmxlLW1pZ3JhdGlvbiB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgI0l4LnBlcmlvZGljLXRhYmxlLXJ1cmFsLCAjQ2kucGVyaW9kaWMtdGFibGUtcnVyYWwsICNUYS5wZXJpb2RpYy10YWJsZS1ydXJhbCwgI01pLnBlcmlvZGljLXRhYmxlLXJ1cmFsLCAjSXQucGVyaW9kaWMtdGFibGUtcnVyYWwge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNUaFMucGVyaW9kaWMtdGFibGUtaXJlLCAjSHUucGVyaW9kaWMtdGFibGUtaXJlLCAjQ2hULnBlcmlvZGljLXRhYmxlLWlyZSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgI0F3LnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcywgI1RhLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcywgI01vLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcywgI090LnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcyAsICNUcC5wZXJpb2RpYy10YWJsZS12YXJpYW50ZXMgIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIH0qL1xyXG5cclxuICAgIC5vcmRlbi1tZW51IC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC52ZXJ0aWNhbC1ncmlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgIH1cclxuXHJcbiAgICAudmVydGljYWwtZ3JpZHMgbGkge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIGhlaWdodDogNC4ydnc7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBtYXJnaW46IDRweDtcclxuICAgICAgICB6LWluZGV4OiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1ncmlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1ncmlkcyA+IHVsIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtbGlzdC1hIGxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNi4yNSU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFsLWxpc3QtYiBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWMgbGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA3LjElO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1saXN0LWdyb3VwcyB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFsLWxpc3QtZ3JvdXBzIGxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMzMuMyU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1zeW1ib2xze1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAudGFic3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LXRhYntcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC10YWItc3ltYm9scyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC10YWItc3ltYm9scyA+IHRhYmxlID4gdGJvZHkgPiB0ciA+dGQge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC10YWItc3ltYm9scyBsYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtY29sdW1ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAlIDEwMCUgMCU7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1jb2x1bW5zLWRpdiB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmlvZGljLXRhYmxlLXBvcHVsYXRpb24tZ3JpZHMsIC5wZXJpb2RpYy10YWJsZS1taWdyYXRpb24tZ3JpZHMsIC5wZXJpb2RpYy10YWJsZS1ydXJhbC1ncmlkcywgLnBlcmlvZGljLXRhYmxlLWlyZS1ncmlkcywgLnBlcmlvZGljLXRhYmxlLXZhcmlhbnRlcy1ncmlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMyUpO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJpb2RpYy10YWJsZS1hbHBoYWJldC1ncmlkc3tcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDE0LCA3LjElKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLWdyaWRzIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDEyLjUlKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtdmFyaWFudGVzLWdyaWRzLWIge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMjUlKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGVyaW9kaWMtdGFibGUtZmFtaWx5LWdyaWRzIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDMzLjMzJSk7XHJcbiAgICAgICAgLypwYWRkaW5nLXRvcDogNTZweDsqL1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4tb25lIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4tdHdvLCAuY29sdW1uLXRocmVlLCAuY29sdW1uLWZvdXIge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4tZml2ZSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5pcy1zbWFsbC1idXR0b257XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyb3VwIHtcclxuICAgICAgICAvKm1pbi1oZWlnaHQ6IDEwM3B4OyovXHJcbiAgICAgICAgLyp3aWR0aDogMTA1cHg7Ki9cclxuICAgICAgICBoZWlnaHQ6IDI0dnc7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCAwIHJnYmEoMCwgMCwgMCwgLjEpLCBpbnNldCAwIDAgMCAycHggcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgICAgIHotaW5kZXg6IGF1dG87XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ncm91cDphZnRlciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyb3VwOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcclxuICAgIH1cclxuXHJcbiAgICAuZWxlbWVudC1zeW1ib2wge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5lbGVtZW50LXN5bWJvbCA+IGJ7XHJcbiAgICB9XHJcblxyXG4gICAgLm51bWJlci1pZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmF0b21pYy1vcmJpdGFsLXNoZWxscyB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZmxleDogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYXRvbWljLW9yYml0YWwtc2hlbGxzIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDtcclxuICAgIH1cclxuXHJcbiAgICAuZWxlbWVudC1uYW1le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmbGV4OiAxIDE7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgfVxyXG4gICAgLnBvcHVsYXRpb257XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZsZXg6IDEgMTtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICAgIG1hcmdpbjogLTNweCAtNHB4IDNweDtcclxuICAgIH1cclxuXHJcbiAgICAubWVzc2FnZS1ib2R5IHtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbC1pbWFnZS1mdWxsIC5tb2RhbC1jb250ZW50e1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbC1jYXJkLXRpdGxlIHtcclxuICAgICAgICBmbGV4LXNocmluazogMTtcclxuICAgIH1cclxuXHJcbiAgICAudGFne1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB9XHJcbn1cclxuIiwiLkEwLCAuQjAsIC5DMCwgLkQwIHtcbn1cblxuLnByaW5jaXBhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EyMjI0NDtcbn1cblxuLmJnLXByaW5jaXBhbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTIyMjQ0O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uYmctbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJnLXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0REMzQzMDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmJnLXllbGxvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZERTgxODtcbiAgICBjb2xvcjogIzUxNTc1Nztcbn1cblxuLmJnLW9yYW5nZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzOTUxOTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmJnLWdyZWVuLWxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjhCMzJEO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uYmctZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDczMzE7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5ncmVlbiB7XG4gICAgY29sb3I6ICMyMDczMzE7XG59XG5cbi5ncmVlbi1jaGVja2JveCBsYWJlbDpiZWZvcmUgIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA3MzMxO1xuICAgIGJvcmRlci1jb2xvcjogIzIwNzMzMTtcbn1cblxuLmdyZWVuLWNoZWNrYm94IGxhYmVsOmFmdGVyIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG59XG5cbi5ncmVlbi1saWdodCB7XG4gICAgY29sb3I6ICM2OEIzMkQ7XG59XG5cbi5ncmVlbi1saWdodC1jaGVja2JveCBsYWJlbDpiZWZvcmUgIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjhCMzJEO1xuICAgIGJvcmRlci1jb2xvcjogIzY4QjMyRDtcbn1cblxuLmdyZWVuLWxpZ2h0LWNoZWNrYm94IGxhYmVsOmFmdGVyIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG59XG5cbi5vcmFuZ2Uge1xuICAgIGNvbG9yOiAjRjM5NTE5O1xufVxuXG4ub3JhbmdlLWNoZWNrYm94IGxhYmVsOmJlZm9yZSAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMzk1MTk7XG4gICAgYm9yZGVyLWNvbG9yOiAjRjM5NTE5O1xufVxuXG4ub3JhbmdlLWNoZWNrYm94IGxhYmVsOmFmdGVyIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG59XG5cbi55ZWxsb3cge1xuICAgIGNvbG9yOiAjRkRFODE4O1xufVxuXG4ueWVsbG93LWNoZWNrYm94IGxhYmVsOmJlZm9yZSAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGREU4MTg7XG4gICAgYm9yZGVyLWNvbG9yOiAjRkRFODE4O1xufVxuXG4ueWVsbG93LWNoZWNrYm94IGxhYmVsOmFmdGVyIHtcbiAgICBjb2xvcjogIzUxNTc1NztcbiAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG59XG5cbi5yZWQge1xuICAgIGNvbG9yOiAjREQzNDMwO1xufVxuXG4ucmVkLWNoZWNrYm94IGxhYmVsOmJlZm9yZSAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERDM0MzA7XG4gICAgYm9yZGVyLWNvbG9yOiAjREQzNDMwO1xufVxuXG4ucmVkLWNoZWNrYm94IGxhYmVsOmFmdGVyIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG59XG5cbi5zaGFkb3ctZ3JlZW4ge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCAjMjA3MzMxICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLnNoYWRvdy1ncmVlbi1saWdodCB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICM2OEIzMkQgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4uc2hhZG93LXllbGxvdyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICNGREU4MTggIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4uc2hhZG93LW9yYW5nZSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICNGMzk1MTkgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4uc2hhZG93LXJlZCB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICNERDM0MzAgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4uaHZyLWdyb3cge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRyYW5zaXRpb246IGFsbCAxLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMS41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xufVxuXG4uaHZyLWdyb3c6aG92ZXIsIC5odnItZ3Jvdzpmb2N1cywgLmh2ci1ncm93OmFjdGl2ZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uZ3JheSB7XG4gICAgY29sb3I6ICM1MTU3NTc7XG59XG4vKipGQU1JTElBUyovXG4ubnVsbCwgLm51bGwubm8tZm9jdXM6aG92ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5hbGdpY2EsIC5hbGdpY2Eubm8tZm9jdXM6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VEODk2NTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmFsZ2ljYS1jaGVja2JveCBsYWJlbDpiZWZvcmUgIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUQ4OTY1O1xuICAgIGJvcmRlci1jb2xvcjogI0VEODk2NTtcbn1cblxuLmFsZ2ljYS1jaGVja2JveCBsYWJlbDphZnRlciB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xufVxuXG4uc2VyaSwgLnNlcmkubm8tZm9jdXM6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlFNjBBNDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnNlcmktY2hlY2tib3ggbGFiZWw6YmVmb3JlICB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlFNjBBNDtcbiAgICBib3JkZXItY29sb3I6ICM5RTYwQTQ7XG59XG5cbi5zZXJpLWNoZWNrYm94IGxhYmVsOmFmdGVyIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG59XG5cbi5jb2NoaW1pLXl1bWFuYSwgLmNvY2hpbWkteXVtYW5hLm5vLWZvY3VzOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDNjFFMjY7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jb2NoaW1pLXl1bWFuYS1jaGVja2JveCBsYWJlbDpiZWZvcmUgIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzYxRTI2O1xuICAgIGJvcmRlci1jb2xvcjogI0M2MUUyNjtcbn1cblxuLmNvY2hpbWkteXVtYW5hLWNoZWNrYm94IGxhYmVsOmFmdGVyIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG59XG5cbi5vdG8tbWFuZ3VlLCAub3RvLW1hbmd1ZS5uby1mb2N1czpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5MDEwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ub3RvLW1hbmd1ZS1jaGVja2JveCBsYWJlbDpiZWZvcmUgIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5MDEwO1xuICAgIGJvcmRlci1jb2xvcjogIzc5OTAxMDtcbn1cblxuLm90by1tYW5ndWUtY2hlY2tib3ggbGFiZWw6YWZ0ZXIge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcbn1cblxuLm1heWEsIC5tYXlhLm5vLWZvY3VzOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4M0I1QzI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5tYXlhLWNoZWNrYm94IGxhYmVsOmJlZm9yZSAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4M0I1QzI7XG4gICAgYm9yZGVyLWNvbG9yOiAjODNCNUMyO1xufVxuXG4ubWF5YS1jaGVja2JveCBsYWJlbDphZnRlciB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xufVxuXG4ueXV0by1uYWh1YSwgLnl1dG8tbmFodWEubm8tZm9jdXM6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBQjcwMDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnl1dG8tbmFodWEtY2hlY2tib3ggbGFiZWw6YmVmb3JlICB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBQjcwMDtcbiAgICBib3JkZXItY29sb3I6ICNGQUI3MDA7XG59XG5cbi55dXRvLW5haHVhLWNoZWNrYm94IGxhYmVsOmFmdGVyIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG59XG5cbi5odWF2ZSwgLmh1YXZlLm5vLWZvY3VzOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQzhFODY7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5odWF2ZS1jaGVja2JveCBsYWJlbDpiZWZvcmUgIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUM4RTg2O1xuICAgIGJvcmRlci1jb2xvcjogIzFDOEU4Njtcbn1cblxuLmh1YXZlLWNoZWNrYm94IGxhYmVsOmFmdGVyIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG59XG5cbi5taXhlLXpvcXVlLCAubWl4ZS16b3F1ZS5uby1mb2N1czpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTQ2MTdGO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubWl4ZS16b3F1ZS1jaGVja2JveCBsYWJlbDpiZWZvcmUgIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTQ2MTdGO1xuICAgIGJvcmRlci1jb2xvcjogI0U0NjE3Rjtcbn1cblxuLm1peGUtem9xdWUtY2hlY2tib3ggbGFiZWw6YWZ0ZXIge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcbn1cblxuLnRla28sIC50ZWtvLm5vLWZvY3VzOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYWI4NjM7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi50ZWtvLWNoZWNrYm94IGxhYmVsOmJlZm9yZSAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYWI4NjM7XG4gICAgYm9yZGVyLWNvbG9yOiAjM2FiODYzO1xufVxuXG4udGVrby1jaGVja2JveCBsYWJlbDphZnRlciB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xufVxuXG4udG90b25hY28tdGVwZWh1YSwgLnRvdG9uYWNvLXRlcGVodWEubm8tZm9jdXM6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlFNjAyQztcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnRvdG9uYWNvLXRlcGVodWEtY2hlY2tib3ggbGFiZWw6YmVmb3JlICB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlFNjAyQztcbiAgICBib3JkZXItY29sb3I6ICM5RTYwMkM7XG59XG5cbi50b3RvbmFjby10ZXBlaHVhLWNoZWNrYm94IGxhYmVsOmFmdGVyIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG59XG5cbi5jaG9udGFsLW9heGFjYSwgLmNob250YWwtb2F4YWNhLm5vLWZvY3VzOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RDcxQjA7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5jaG9udGFsLW9heGFjYS1jaGVja2JveCBsYWJlbDpiZWZvcmUgIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEQ3MUIwO1xuICAgIGJvcmRlci1jb2xvcjogIzRENzFCMDtcbn1cblxuLmNob250YWwtb2F4YWNhLWNoZWNrYm94IGxhYmVsOmFmdGVyIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG59XG5cbi50YXJhc2NhLCAudGFyYXNjYS5uby1mb2N1czpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjQyRTg4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4udGFyYXNjYS1jaGVja2JveCBsYWJlbDpiZWZvcmUgIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjQyRTg4O1xuICAgIGJvcmRlci1jb2xvcjogI0I0MkU4ODtcbn1cblxuLnRhcmFzY2EtY2hlY2tib3ggbGFiZWw6YWZ0ZXIge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcbn1cblxuXG4uemFwb3RlY28sIC56YXBvdGVjby5uby1mb2N1czpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1MWI1NGYgNTAlLCAjOTJkMjZiIDUwJSk7XG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjNTFiNTRmOyovXG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi56YXBvdGVjby1jaGVja2JveCBsYWJlbDpiZWZvcmUgIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1MWI1NGYgNTAlLCAjOTJkMjZiIDUwJSk7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnphcG90ZWNvLWNoZWNrYm94IGxhYmVsOmFmdGVyIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLm5haHVhcywgLm5haHVhcy5uby1mb2N1czpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICM4Y2FiZGU7Ki9cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM4Y2FiZGUgNTAlLCAjNjRjYWI5IDUwJSk7XG4gICAgY29sb3I6ICM1MTU3NTc7XG59XG5cbi5uYWh1YXMtY2hlY2tib3ggbGFiZWw6YmVmb3JlICB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOGNhYmRlIDUwJSwgIzY0Y2FiOSA1MCUpO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5uYWh1YXMtY2hlY2tib3ggbGFiZWw6YWZ0ZXIge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufSIsIkBpbXBvcnQgdXJsKFwiLi9tZWRpYS1xdWVyaWVzLmNzc1wiKTtcclxuQGltcG9ydCB1cmwoXCIuL2NvbG9ycy5jc3NcIik7XHJcblxyXG4uYmQtY29sb3Ige1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggM3B4IDAgcmdiYSgwLCAwLCAwLCAuMSksIGluc2V0IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIC4xKTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM5Njk2OTYgIWltcG9ydGFudDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDBweCAwcHggMCByZ2JhKDAsIDAsIDAsIC4xKSwgaW5zZXQgMCAwIDAgMHB4IHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNDQ0NDQ0MgNTAlLCAjQ0NDQ0NDIDUwJSkgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcclxufVxyXG5cclxuLmhpZGU6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGlkZS1tb2JpbGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbi50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTIyMjQ0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYTIyMjQ0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50YWJzIGxpLmlzLWFjdGl2ZSBhIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNhMjIyNDQ7XHJcbiAgICBjb2xvcjogI2EyMjI0NDtcclxufVxyXG5cclxuLm1lbnUtdmVydGljYWx7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubmF2YmFyLWJ1cmdlcntcclxuICAgIGRpc3BsYXk6YmxvY2tcclxufVxyXG5cclxuLm5hdmJhci1idXJnZXI6aG92ZXJ7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgY29sb3I6ICNhMjIyNDQ7Ki9cclxufVxyXG5cclxuLmJkLXNuaXBwZXQtcHJldmlld3tcclxuICAgIHdpZHRoOiAzMy4zMzMzJTtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/tabla-lenguas-indigenas/tabla-lenguas-indigenas.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/tabla-lenguas-indigenas/tabla-lenguas-indigenas.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"isMobile\" class=\"navbar is-fixed-top\" role=\"navigation\" aria-label=\"main navigation\">\n    <div class=\"navbar-brand\">\n       <!-- <a class=\"navbar-item\" href=\"#\">\n            <img src=\"assets/img/logo_inpi-logo-baston-220x70.png\" width=\"80\" height=\"28\">\n        </a>-->\n        <div class=\"navbar-item field\">\n            <div class=\"control\">\n                <div class=\"select is-small is-rounded\">\n                    <select id=\"menu-tabla-periodica-mobile\" (change)=\"onMenuMobile()\">\n                        <option value=\"0\">Familias</option>\n                        <option value=\"1\">Alfabético</option>\n                        <option value=\"2\">Variantes</option>\n                        <option value=\"3\">Población Indígena</option>\n                        <option value=\"4\">Migración</option>\n                        <option value=\"5\">Población Rural</option>\n                        <option value=\"6\">IRE</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n        <a role=\"button\" class=\"navbar-burger burger\" aria-label=\"menu\" aria-expanded=\"false\" data-target=\"navbarBasicExample\" (click)=\"viewMenu()\">\n            <span aria-hidden=\"true\"></span>\n            <span aria-hidden=\"true\"></span>\n            <span aria-hidden=\"true\"></span>\n        </a>\n    </div>\n    <!--\n    <div id=\"navbarBasicExample\" class=\"navbar-menu\">\n        <div class=\"navbar-end\">\n            <div class=\"navbar-item\">\n                <div class=\"buttons\">\n                    <a class=\"button is-primary\">\n                        <strong>Sign up</strong>\n                    </a>\n                    <a class=\"button is-light\">\n                        Log in\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    --->\n</nav>\n\n<div class=\"columns is-mobile\" style=\"justify-content: flex-end;\">\n    <div id=\"nav-menu\" class=\"column is-one-third-desktop is-one-third-fullhd is-one-third-tablet is-four-fifths-mobile menu-vertical\" style=\"position: absolute; height: 100%;\">\n        <aside  class=\"card menu\" style=\"padding: .75rem; z-index: 39; height: 100%\">\n            <a *ngIf=\"isMobile\" role=\"button\" id=\"button-menu\" class=\"navbar-burger is-dark\" aria-label=\"menu\" aria-expanded=\"false\" style=\"z-index: 40; height: 38px;\"\n               (click)=\"viewMenu()\">\n                <span aria-hidden=\"true\"></span>\n                <span aria-hidden=\"true\"></span>\n                <span aria-hidden=\"true\"></span>\n            </a>\n            <p class=\"menu-label\">\n                Menú\n            </p>\n            <ul class=\"menu-list\">\n                <li><a href=\"./assets/codice-mexico-inpi-infografia.pdf\" target=\"_blank\" (click)=\"viewMenu()\">Infografía</a></li>\n                <li><a href=\"./assets/mapa-codice-mexico-inpi.pdf\" target=\"_blank\" (click)=\"viewMenu()\">Mapa</a></li>\n                <li><a (click)=\"viewLenguasExtintas()\">Obituario(lenguas extintas)</a></li>\n            </ul>\n        </aside>\n    </div>\n</div>\n\n<div *ngIf=\"!isMobile\" class=\"tabs is-small is-centered is-boxed\" style =\"margin-bottom: 0;\">\n    <ul class=\"menu-views\">\n        <li class=\"tab is-active\" (click)=\"openTabPeriodicTablet($event, 'periodic-table-family')\"><a><span>Familias</span></a></li>\n        <li class=\"tab\" (click)=\"openTabPeriodicTablet($event, 'periodic-table-alphabet')\"><a><span>Alfabético</span></a></li>\n        <li class=\"tab\" (click)=\"openTabPeriodicTablet($event, 'periodic-table-variantes')\"><a><span>Variantes</span></a></li>\n        <li class=\"tab\" (click)=\"openTabPeriodicTablet($event, 'periodic-table-population')\"><a><span>Población Indígena</span></a></li>\n        <li class=\"tab\" (click)=\"openTabPeriodicTablet($event, 'periodic-table-migration')\"><a><span>Migración</span></a></li>\n        <li class=\"tab\" (click)=\"openTabPeriodicTablet($event, 'periodic-table-rural-population')\"><a><span>Población Rural</span></a></li>\n        <li class=\"tab\" (click)=\"openTabPeriodicTablet($event, 'periodic-table-ire')\"><a><span>{{menu_ire}}</span></a></li>\n    </ul>\n    <a role=\"button\" id=\"button-menu\" class=\"navbar-burger is-dark\" aria-label=\"menu\" aria-expanded=\"false\" style=\"z-index: 40; height: 38px;\"\n       (click)=\"viewMenu()\">\n        <span aria-hidden=\"true\"></span>\n        <span aria-hidden=\"true\"></span>\n        <span aria-hidden=\"true\"></span>\n    </a>\n</div>\n\n<div *ngIf=\"!isMobile\" class=\"columns is-mobile is-multiline is-centered family-menu\">\n    <div class=\"column is-narrow field  algica-checkbox is-inline checkbox-option \" >\n        <input class=\"is-checkradio is-small menu-checkbox \" checked type=\"checkbox\" id=\"familia-algica\" (click)=\"onSelectFamily('algica')\">\n        <label for=\"familia-algica\">\n            Álgica\n        </label>\n    </div>\n    <div class=\"column is-narrow field cochimi-yumana-checkbox is-inline checkbox-option \">\n        <input class=\"is-checkradio is-small menu-checkbox\" checked type=\"checkbox\" id=\"familia-cochimi-yumana\" (click)=\"onSelectFamily('cochimi-yumana')\">\n        <label for=\"familia-cochimi-yumana\">\n            Chochimí-Yumana\n        </label>\n    </div>\n    <div class=\"column is-narrow field chontal-oaxaca-checkbox is-inline checkbox-option \">\n        <input class=\"is-checkradio is-small menu-checkbox\" checked type=\"checkbox\" id=\"familia-chontal-oaxaca\" (click)=\"onSelectFamily('chontal-oaxaca')\">\n        <label for=\"familia-chontal-oaxaca\">\n            Chontal de Oaxaca\n        </label>\n    </div>\n    <div class=\"column is-narrow field huave-checkbox is-inline checkbox-option \">\n        <input class=\"is-checkradio is-small menu-checkbox\" checked type=\"checkbox\" id=\"familia-huave\" (click)=\"onSelectFamily('huave')\">\n        <label for=\"familia-huave\">\n            Huave\n        </label>\n    </div>\n    <div class=\"column is-narrow field maya-checkbox is-inline checkbox-option \">\n        <input class=\"is-checkradio is-small menu-checkbox\" checked type=\"checkbox\" id=\"familia-maya\" (click)=\"onSelectFamily('maya')\">\n        <label for=\"familia-maya\">\n            Maya\n        </label>\n    </div>\n    <div class=\"column is-narrow field mixe-zoque-checkbox is-inline checkbox-option \">\n        <input class=\"is-checkradio is-small menu-checkbox\" checked type=\"checkbox\" id=\"familia-mixe-zoque\" (click)=\"onSelectFamily('mixe-zoque')\">\n        <label for=\"familia-mixe-zoque\">\n            Mixe-Zoque\n        </label>\n    </div>\n    <div class=\"column is-narrow field oto-mangue-checkbox is-inline checkbox-option \">\n        <input class=\"is-checkradio is-small menu-checkbox\" checked type=\"checkbox\" id=\"familia-oto-mangue\" (click)=\"onSelectFamily('oto-mangue')\">\n        <label for=\"familia-oto-mangue\">\n            Oto-Mangue\n        </label>\n    </div>\n    <div class=\"column is-narrow field seri-checkbox is-inline checkbox-option \">\n        <input class=\"is-checkradio is-small menu-checkbox\" checked type=\"checkbox\" id=\"familia-seri\" (click)=\"onSelectFamily('seri')\">\n        <label for=\"familia-seri\">\n            Seri\n        </label>\n    </div>\n    <div class=\"column is-narrow field tarasca-checkbox is-inline checkbox-option \">\n        <input class=\"is-checkradio is-small menu-checkbox\" checked type=\"checkbox\" id=\"familia-tarasca\" (click)=\"onSelectFamily('tarasca')\">\n        <label for=\"familia-tarasca\">\n            Tarasca\n        </label>\n    </div>\n    <div class=\"column is-narrow field totonaco-tepehua-checkbox is-inline checkbox-option \">\n        <input class=\"is-checkradio is-small menu-checkbox\" checked type=\"checkbox\" id=\"familia-totonaco-tepehua\" (click)=\"onSelectFamily('totonaco-tepehua')\">\n        <label for=\"familia-totonaco-tepehua\">\n            Totonaco-Tepehua\n        </label>\n    </div>\n    <div class=\"column is-narrow field yuto-nahua-checkbox is-inline checkbox-option \">\n        <input class=\"is-checkradio is-small menu-checkbox\" checked type=\"checkbox\" id=\"familia-yuto-nahua\" (click)=\"onSelectFamily('yuto-nahua')\">\n        <label for=\"familia-yuto-nahua\">\n            Yuto-Nahua\n        </label>\n    </div>\n</div>\n\n<div *ngIf=\"!isMobile\">\n    <div class=\"tags is-centered is-small\" style=\"margin: 15px;\" *ngIf=\"typeClassTable === 'periodic-table-population'\">\n        <span class=\"tag is-rounded bg-green\"> > de 220 000 a 2 millones 886 mil</span>\n        <span class=\"tag is-rounded bg-green-light\">  > de 37 300 a < de 220 000</span>\n        <span class=\"tag is-rounded bg-yellow\">  > de 4 700 a < de 37 300</span>\n        <span class=\"tag is-rounded bg-orange\"> > de 600 a < de 4 700</span>\n        <span class=\"tag is-rounded bg-red\"> De 30 a 600</span>\n        <span class=\"icon has-text-info tooltip is-tooltip-info is-tooltip-bottom is-tooltip-multiline\" data-tooltip=\"La estimación del volumen de la población indígena se basa en el criterio de hogar indígena, que son aquellos en donde el jefe (a) y/o el cónyuge y/o alguno de los ascendientes (madre, padre, madrastra o padrastro, abuelo (a), bisabuelo (a), tatarabuelo (a), suegro (a) declaró ser hablante de alguna lengua indígena (HLI). De acuerdo al tamaño de la población se definieron cinco grupos o quintiles, donde cada uno contiene al veinte por ciento de los agrupaciones lingüísticas o pueblos indígenas.\">\n          <i class=\"fas fa-info-circle\"></i>\n        </span>\n    </div>\n    <div class=\"tags is-centered is-small\" style=\"margin: 15px;\" *ngIf=\"typeClassTable === 'periodic-table-migration'\">\n        <span class=\"tag is-rounded bg-green\">Muy baja</span>\n        <span class=\"tag is-rounded bg-green-light\">Baja</span>\n        <span class=\"tag is-rounded bg-yellow\">Promedio</span>\n        <span class=\"tag is-rounded bg-orange\">Alta</span>\n        <span class=\"tag is-rounded bg-red\">Muy alta</span>\n        <span class=\"icon has-text-info tooltip is-tooltip-info is-tooltip-bottom is-tooltip-multiline\" data-tooltip=\"La información sobre este tema se refiere a dos formas de identificar la migración, la primera por residir en una entidad distinta al lugar del nacimiento y la segunda por haber cambiado el lugar de residencia en los últimos cinco años. El indicador refleja el promedio de las dos tendencias migratorias en porcentaje y se agrupa en quintiles donde cada uno contiene al veinte por ciento de los agrupaciones lingüísticas o pueblos indígenas.\">\n          <i class=\"fas fa-info-circle\"></i>\n        </span>\n    </div>\n    <div class=\"tags is-centered is-small\" style=\"margin: 15px;\" *ngIf=\"typeClassTable === 'periodic-table-rural'\">\n        <span class=\"tag is-rounded bg-green\" >Muy rural</span>\n        <span class=\"tag is-rounded bg-green-light\" >Rural</span>\n        <span class=\"tag is-rounded bg-yellow\" >Rural promedio</span>\n        <span class=\"tag is-rounded bg-orange\" >Rural - Urbano</span>\n        <span class=\"tag is-rounded bg-red\" >Urbano</span>\n        <span class=\"icon has-text-info tooltip is-tooltip-info is-tooltip-bottom is-tooltip-multiline\" data-tooltip=\"El indicador de población rural se refiere al porcentaje población indígena que habita en localidades menores de 2 mil 500 habitantes y su forma de agrupación son los quintiles donde cada uno contiene al veinte por ciento de los agrupaciones lingüísticas o pueblos indígenas.\">\n          <i class=\"fas fa-info-circle\"></i>\n        </span>\n    </div>\n    <div class=\"tags is-centered is-small\" style=\"margin: 15px;\" *ngIf=\"typeClassTable === 'periodic-table-ire'\">\n        <span class=\"tag is-rounded bg-green\" >Expansión acelerada</span>\n        <span class=\"tag is-rounded bg-green-light\" >Expansión lenta</span>\n        <span class=\"tag is-rounded bg-yellow\" >Equilibrio</span>\n        <span class=\"tag is-rounded bg-orange\" >Extinción lenta</span>\n        <span class=\"tag is-rounded bg-red\" >Extinción acelerada</span>\n        <span class=\"icon has-text-info tooltip is-tooltip-info is-tooltip-bottom is-tooltip-multiline\" data-tooltip=\"  El índice refleja la relación entre los hablantes de lenguas indígenas del grupo de edad de 15 a 49 años con los niños hablantes de lenguas indígenas entre 5 y 9 años, considerando como base un modelo demográfico del estado de Oaxaca.\n        El índice permite medir la condición en que las nuevas generaciones de la población de un grupo etnolingüístico mantienen el uso de las lenguas indígenas.  Sus resultados se clasifican de la siguiente forma: expansión acelerada (valores mayores a 2); expansión lenta (entre 1.11 y 2); equilibrio (entre 0.9 y 1.1); extinción lenta (entre 0.51 y 0.9) y extinción acelerada (menor a 0.5).\">\n          <i class=\"fas fa-info-circle\"></i>\n        </span>\n       </div>\n    <div class=\"tags is-centered is-small\" style=\"margin: 15px;\" *ngIf=\"typeClassTable === 'periodic-table-variantes'\">\n        <span class=\"tag is-rounded bg-green\">1</span>\n        <span class=\"tag is-rounded bg-green-light\">2 - 5</span>\n        <span class=\"tag is-rounded bg-yellow\">6 - 10</span>\n        <span class=\"tag is-rounded bg-orange\">11 - 29</span>\n        <span class=\"tag is-rounded bg-red\">Mas de 30</span>\n    </div>\n</div>\n\n<div *ngIf=\"!isMobile\">\n    <div class=\"periodic-table-columns\">\n        <div>\n            <ol *ngIf=\"typeClassTable === 'periodic-table-family' || typeClassTable === 'periodic-table-ire' \" class=\"vertical-grids\">\n                <li><p>1</p></li>\n                <li><p>2</p></li>\n                <li><p>3</p></li>\n                <li><p>4</p></li>\n                <li><p>5</p></li>\n                <li><p>6</p></li>\n                <li><p>7</p></li>\n            </ol>\n            <ol *ngIf=\"typeClassTable === 'periodic-table-population' || typeClassTable === 'periodic-table-migration' ||\n             typeClassTable === 'periodic-table-rural'|| typeClassTable === 'periodic-table-alphabet' \" class=\"vertical-grids\">\n                <li><p></p></li>\n                <li><p>1</p></li>\n                <li><p>2</p></li>\n                <li><p>3</p></li>\n                <li><p>4</p></li>\n                <li><p>5</p></li>\n            </ol>\n            <ol *ngIf=\"typeClassTable === 'periodic-table-variantes'\" class=\"vertical-grids\">\n                <li><p></p></li>\n                <li><p>1</p></li>\n                <li><p>2</p></li>\n                <li><p>3</p></li>\n                <li><p>4</p></li>\n                <li><p>5</p></li>\n                <li><p>6</p></li>\n            </ol>\n        </div>\n        <div class=\"periodic-table-columns-div\">\n            <div class=\"columns\" style=\"margin: 0px;display: grid;\">\n                <div *ngIf=\"typeClassTable === 'periodic-table-family'\">\n                    <ol *ngIf=\"languages\" class=\"periodic-table-family-grids\">\n                        <li *ngFor=\"let language of languages\" id=\"{{language[2]}}\" (click)=\"onViewLanguage(language)\"\n                            class=\"group {{language[24]}} {{typeClassTable}} {{'A' + language[6]}} {{'B' + language[11] }} {{'C' + language[14]}} {{'D' + language[18]}}\">\n                            <p class=\"number-id\">\n                                <b>{{language[20]}}</b>\n                            </p>\n                            <p class=\"element-symbol\">\n                                <b>{{language[2]}}</b>\n                            </p>\n                            <p class=\"element-name\">\n                                {{language[1]}} ({{language[0]}})\n                            </p>\n                        </li>\n                    </ol>\n                </div>\n                <div class=\"columns is-mobile\" *ngIf=\"typeClassTable === 'periodic-table-population'\">\n                    <div class=\"column is-one-fifth column-one\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-population-grids\"  >\n                            <li *ngFor=\"let language of languagesColumnA\" id=\"{{language[2]}}\" (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[6]] }} periodic-table-population\">\n                                <p class=\"population\">\n                                    <span class=\"icon is-small white\"><i class=\"fas fa-circle\"></i></span>\n                                    {{numberWithCommas(language[5])}}\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                    <div class=\"column is-one-fifth column-two\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-population-grids\">\n                            <li *ngFor=\"let language of languagesColumnB\" id=\"{{language[2]}}\" (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[6]] }} periodic-table-population\">\n                                <p class=\"population\">\n                                    <span class=\"icon is-small white\"><i class=\"fas fa-circle\"></i></span>\n                                    {{numberWithCommas(language[5])}}\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                    <div class=\"column is-one-fifth column-three\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-population-grids\">\n                            <li *ngFor=\"let language of languagesColumnC\" id=\"{{language[2]}}\" (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[6]] }} periodic-table-population\">\n                                <p class=\"population\">\n                                    <span class=\"icon is-small white\"><i class=\"fas fa-circle\"></i></span>\n                                    {{numberWithCommas(language[5])}}\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                    <div class=\"column is-one-fifth column-four\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-population-grids\">\n                            <li *ngFor=\"let language of languagesColumnD\" id=\"{{language[2]}}\" (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[6]] }} periodic-table-population\">\n                                <p class=\"population\">\n                                    <span class=\"icon is-small white\"><i class=\"fas fa-circle\"></i></span>\n                                    {{numberWithCommas(language[5])}}\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                    <div class=\"column is-one-fifth column-five\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-population-grids\">\n                            <li *ngFor=\"let language of languagesColumnE\" id=\"{{language[2]}}\" (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[6]] }} {{language[23]}} periodic-table-population\">\n                                <p class=\"population\">\n                                    <span class=\"icon is-small white\"><i class=\"fas fa-circle\"></i></span>\n                                    {{numberWithCommas(language[5])}}\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                </div>\n                <div class=\"columns is-mobile\" *ngIf=\"typeClassTable === 'periodic-table-migration'\">\n                    <div class=\"column is-one-fifth column-one\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-migration-grids\">\n                            <li *ngFor=\"let language of languagesColumnA\" id=\"{{language[2]}}\"  (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[11]] }} periodic-table-migration\">\n                                <p class=\"population\">\n                                    <span class=\"icon is-small white\"><i class=\"fas fa-square-full\"></i></span>\n                                    {{numberWithCommas(language[10])}}\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                    <div class=\"column is-one-fifth column-two\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-migration-grids\">\n                            <li *ngFor=\"let language of languagesColumnB\" id=\"{{language[2]}}\"  (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[11]] }} periodic-table-migration\">\n                                <p class=\"population\">\n                                    <span class=\"icon is-small white\"><i class=\"fas fa-square-full\"></i></span>\n                                    {{numberWithCommas(language[10])}}\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                    <div class=\"column is-one-fifth column-three\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-migration-grids\">\n                            <li *ngFor=\"let language of languagesColumnC\" id=\"{{language[2]}}\"  (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[11]] }} periodic-table-migration\">\n                                <p class=\"population\">\n                                    <span class=\"icon is-small white\"><i class=\"fas fa-square-full\"></i></span>\n                                    {{numberWithCommas(language[10])}}\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                    <div class=\"column is-one-fifth column-four\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-migration-grids\">\n                            <li *ngFor=\"let language of languagesColumnD\" id=\"{{language[2]}}\"  (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[11]] }} periodic-table-migration\">\n                                <p class=\"population\">\n                                    <span class=\"icon is-small white\"><i class=\"fas fa-square-full\"></i></span>\n                                    {{numberWithCommas(language[10])}}\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                    <div class=\"column is-one-fifth column-five\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-migration-grids\">\n                            <li *ngFor=\"let language of languagesColumnE\" id=\"{{language[2]}}\"  (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[11]] }} periodic-table-migration\">\n                                <p class=\"population\">\n                                    <span class=\"icon is-small white\"><i class=\"fas fa-square-full\"></i></span>\n                                    {{numberWithCommas(language[10])}}\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                </div>\n                <div class=\"columns is-mobile\" *ngIf=\"typeClassTable === 'periodic-table-rural'\">\n                    <div class=\"column is-one-fifth column-one\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-rural-grids\">\n                            <li *ngFor=\"let language of languagesColumnA\" id=\"{{language[2]}}\" (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[14]] }} periodic-table-rural\">\n                                <p class=\"population\">\n                                    <span class=\"icon is-small white\"><i class=\"fas fa-star\"></i></span>\n                                    {{language[13]}}\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                    <div class=\"column is-one-fifth column-two\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-rural-grids\">\n                            <li *ngFor=\"let language of languagesColumnB\"  id=\"{{language[2]}}\" (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[14]] }} periodic-table-rural\">\n                                <p class=\"population\">\n                                    <span class=\"icon is-small white\"><i class=\"fas fa-star\"></i></span>\n                                    {{language[13]}}\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                    <div class=\"column is-one-fifth column-three\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-rural-grids\">\n                            <li *ngFor=\"let language of languagesColumnC\" id=\"{{language[2]}}\" (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[14]] }} periodic-table-rural\">\n                                <p class=\"population\">\n                                    <span class=\"icon is-small white\"><i class=\"fas fa-star\"></i></span>\n                                    {{language[13]}}\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                    <div class=\"column is-one-fifth column-four\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-rural-grids\">\n                            <li *ngFor=\"let language of languagesColumnD\" id=\"{{language[2]}}\"  (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[14]] }} periodic-table-rural\">\n                                <p class=\"population\">\n                                    <span class=\"icon is-small white\"><i class=\"fas fa-star\"></i></span>\n                                    {{language[13]}}\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                    <div class=\"column is-one-fifth column-five\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-rural-grids\">\n                            <li *ngFor=\"let language of languagesColumnE\" id=\"{{language[2]}}\" (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[14]] }} periodic-table-rural\">\n                                <p class=\"population\">\n                                    <span class=\"icon is-small white\"><i class=\"fas fa-star\"></i></span>\n                                    {{language[13]}}\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                </div>\n                <div class=\"columns is-mobile\" *ngIf=\"typeClassTable === 'periodic-table-ire'\">\n                    <div class=\"column column-one\" style=\"align-self: flex-end;\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-ire-grids\">\n                            <li *ngFor=\"let language of languagesColumnA\" id=\"{{language[2]}}\" (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[18]] }} periodic-table-ire\">\n                                <p class=\"population\">\n                                    <span class=\"icon is-small white\"><i class=\"fas fa-play\"></i></span>\n                                    {{language[16]}}\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                    <div class=\"column column-two\" style=\"align-self: flex-end;\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-ire-grids\">\n                            <li *ngFor=\"let language of languagesColumnB\" id=\"{{language[2]}}\"  (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[18]] }} periodic-table-ire\">\n                                <p class=\"population\">\n                                    <span class=\"icon is-small white\"><i class=\"fas fa-play\"></i></span>\n                                    {{language[16]}}\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                    <div class=\"column column-three\" style=\"align-self: flex-end;\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-ire-grids\">\n                            <li *ngFor=\"let language of languagesColumnC\" id=\"{{language[2]}}\"  (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[18]] }} periodic-table-ire\">\n                                <p class=\"population\">\n                                    <span class=\"icon is-small white\"><i class=\"fas fa-play\"></i></span>\n                                    {{language[16]}}\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                    <div class=\"column column-four\" style=\"align-self: flex-end;\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-ire-grids\">\n                            <li *ngFor=\"let language of languagesColumnD\" id=\"{{language[2]}}\"  (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[18]] }} periodic-table-ire\">\n                                <p class=\"population\">\n                                    <span class=\"icon is-small white\"><i class=\"fas fa-play\"></i></span>\n                                    {{language[16]}}\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                    <div class=\"column column-five\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-ire-grids\">\n                            <li *ngFor=\"let language of languagesColumnE\" id=\"{{language[2]}}\"  (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[18]] }} periodic-table-ire\">\n                                <p class=\"population\">\n                                    <span class=\"icon is-small white\"><i class=\"fas fa-play\"></i></span>\n                                    {{language[16]}}\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                </div>\n                <div class=\"columns is-mobile\" *ngIf=\"typeClassTable === 'periodic-table-variantes'\">\n                    <div class=\"column is-half column-one\" style=\"align-self: flex-end;\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-variantes-grids\">\n                            <li *ngFor=\"let language of languagesColumnA\" id=\"{{language[2]}}\" (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[21]] }} periodic-table-variantes\">\n                                <p class=\"number-id\">\n                                    <b>{{language[20]}}</b>\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                    <div class=\"column is-3 column-two\" style=\"align-self: flex-end;\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-variantes-grids-b\">\n                            <li *ngFor=\"let language of languagesColumnB\" id=\"{{language[2]}}\"  (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[21]] }} periodic-table-variantes\">\n                                <p class=\"number-id\">\n                                    <b>{{language[20]}}</b>\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                    <div class=\"column is-3 column-five\" style=\"align-self: flex-end;\">\n                        <ol *ngIf=\"languages\" class=\"periodic-table-variantes-grids-b\">\n                            <li *ngFor=\"let language of languagesColumnC\" id=\"{{language[2]}}\"  (click)=\"onViewLanguage(language)\"\n                                class=\"group {{ COLOR[5 - language[21]] }} periodic-table-variantes\">\n                                <p class=\"number-id\">\n                                    <b>{{language[20]}}</b>\n                                </p>\n                                <p class=\"element-symbol\">\n                                    <b>{{language[2]}}</b>\n                                </p>\n                                <p class=\"element-name\">\n                                    {{language[1]}} ({{language[0]}})\n                                </p>\n                            </li>\n                        </ol>\n                    </div>\n                </div>\n                <div *ngIf=\"typeClassTable === 'periodic-table-alphabet'\">\n                    <ol *ngIf=\"languages\" class=\"periodic-table-alphabet-grids\">\n                        <li *ngFor=\"let language of languages\" id=\"{{language[2]}}\" (click)=\"onViewLanguage(language)\"\n                            class=\"group {{language[24]}} {{typeClassTable}} {{'A' + language[6]}} {{'B' + language[11] }} {{'C' + language[14]}} {{'D' + language[18]}}\">\n                            <p class=\"number-id\">\n                                <b>{{language[0]}}</b>\n                            </p>\n                            <p class=\"element-symbol\">\n                                <b>{{language[2]}}</b>\n                            </p>\n                            <p class=\"element-name\">\n                                {{language[1]}} ({{language[0]}})\n                            </p>\n                        </li>\n                    </ol>\n                </div>\n            </div>\n        </div>\n        <div>\n            <ol *ngIf=\"typeClassTable === 'periodic-table-family' || typeClassTable === 'periodic-table-ire' \" class=\"vertical-grids\">\n                <li><p>1</p></li>\n                <li><p>2</p></li>\n                <li><p>3</p></li>\n                <li><p>4</p></li>\n                <li><p>5</p></li>\n                <li><p>6</p></li>\n                <li><p>7</p></li>\n            </ol>\n            <ol *ngIf=\"typeClassTable === 'periodic-table-population' || typeClassTable === 'periodic-table-migration' ||\n             typeClassTable === 'periodic-table-rural'|| typeClassTable === 'periodic-table-alphabet' \" class=\"vertical-grids\">\n                <li><p></p></li>\n                <li><p>1</p></li>\n                <li><p>2</p></li>\n                <li><p>3</p></li>\n                <li><p>4</p></li>\n                <li><p>5</p></li>\n            </ol>\n            <ol *ngIf=\"typeClassTable === 'periodic-table-variantes'\" class=\"vertical-grids\">\n                <li><p></p></li>\n                <li><p>1</p></li>\n                <li><p>2</p></li>\n                <li><p>3</p></li>\n                <li><p>4</p></li>\n                <li><p>5</p></li>\n                <li><p>6</p></li>\n            </ol>\n        </div>\n    </div>\n    <div class=\"horizontal-grids columns\">\n        <ul *ngIf=\"typeClassTable === 'periodic-table-family' || typeClassTable === 'periodic-table-variantes' || typeClassTable === 'periodic-table-alphabet';then family;else other\"></ul>\n        <ng-template #family>\n            <ul  *ngIf=\"typeClassTable !== 'periodic-table-alphabet'\" class=\"horizontal-list-a column\">\n                <li><p>A</p></li>\n                <li><p>B</p></li>\n                <li><p>C</p></li>\n                <li><p>D</p></li>\n                <li><p>E</p></li>\n                <li><p>F</p></li>\n                <li><p>G</p></li>\n                <li><p>H</p></li>\n                <li><p>I</p></li>\n                <li><p>J</p></li>\n                <li><p>K</p></li>\n                <li><p>L</p></li>\n                <li><p>M</p></li>\n                <li><p>N</p></li>\n                <li><p>O</p></li>\n                <li><p>P</p></li>\n            </ul>\n            <ul  *ngIf=\"typeClassTable === 'periodic-table-alphabet'\" class=\"horizontal-list-c column\">\n                <li><p>A</p></li>\n                <li><p>B</p></li>\n                <li><p>C</p></li>\n                <li><p>D</p></li>\n                <li><p>E</p></li>\n                <li><p>F</p></li>\n                <li><p>G</p></li>\n                <li><p>H</p></li>\n                <li><p>I</p></li>\n                <li><p>J</p></li>\n                <li><p>K</p></li>\n                <li><p>L</p></li>\n                <li><p>M</p></li>\n                <li><p>N</p></li>\n            </ul>\n        </ng-template>\n        <ng-template #other>\n            <div class=\"column\">\n                <div class=\"columns\">\n                    <div class=\"column\">\n                        <ul class=\"horizontal-list-b\">\n                            <li><p>A</p></li>\n                            <li><p>B</p></li>\n                            <li><p>C</p></li>\n                        </ul>\n                    </div>\n                    <div class=\"column\">\n                        <ul class=\"horizontal-list-b\">\n                            <li><p>D</p></li>\n                            <li><p>E</p></li>\n                            <li><p>F</p></li>\n                        </ul>\n                    </div>\n                    <div class=\"column\">\n                        <ul class=\"horizontal-list-b\">\n                            <li><p>G</p></li>\n                            <li><p>H</p></li>\n                            <li><p>I</p></li>\n                        </ul>\n                    </div>\n                    <div class=\"column\">\n                        <ul class=\"horizontal-list-b\">\n                            <li><p>J</p></li>\n                            <li><p>K</p></li>\n                            <li><p>L</p></li>\n                        </ul>\n                    </div>\n                    <div class=\"column\">\n                        <ul class=\"horizontal-list-b\">\n                            <li><p>M</p></li>\n                            <li><p>N</p></li>\n                            <li><p>O</p></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n    </div>\n    <div class=\"periodic-table-symbols\">\n        <div class=\"has-text-centered\">\n            <!--<p><strong>SIMBOLOGÍA</strong></p>-->\n            <div class=\"tabs is-small is-centered\">\n                <ul class=\"menu-views\">\n                    <li class=\"tab-symbols is-active\" (click)=\"openTabPeriodicTabletSymbols($event, 'periodic-table-family-symbol-population')\">\n                        <a>\n                            <span>Población Indígena</span>\n                        </a>\n                    </li>\n                    <li class=\"tab-symbols\" (click)=\"openTabPeriodicTabletSymbols($event, 'periodic-table-family-symbol-migration')\">\n                        <a>\n                            <span>Migración</span>\n                        </a>\n                    </li>\n                    <li class=\"tab-symbols\" (click)=\"openTabPeriodicTabletSymbols($event, 'periodic-table-family-symbol-rural-population')\">\n                        <a>\n                            <span>Población Rural</span>\n                        </a>\n                    </li>\n                    <li class=\"tab-symbols\" (click)=\"openTabPeriodicTabletSymbols($event, 'periodic-table-family-symbol-ire')\">\n                        <a>\n                            <span>Índice de Remplazo Etnolingüístico (IRE)</span>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n            <div id=\"periodic-table-family-symbol-population\" class=\"content-tab-symbols\">\n                <div class=\"field green-checkbox is-inline\" >\n                    <input class=\"is-checkradio is-small a5\" type=\"checkbox\" id=\"a5\" (click)=\"onSelectA('A5')\">\n                    <label for=\"a5\">\n                        > de 220 000 a 2 millones 886 mil\n                    </label>\n                </div>\n                <div class=\"field green-light-checkbox is-inline\" >\n                    <input class=\"is-checkradio is-small a4\" type=\"checkbox\" id=\"a4\" (click)=\"onSelectA('A4')\">\n                    <label for=\"a4\">\n                        > de 37 300 a < de 220 000\n                    </label>\n                </div>\n                <div class=\"field yellow-checkbox is-inline\" >\n                    <input class=\"is-checkradio is-small a3\" type=\"checkbox\" id=\"a3\" (click)=\"onSelectA('A3')\">\n                    <label for=\"a3\">\n                        > de 4 700 a < de 37 300\n                    </label>\n                </div>\n                <div class=\"field orange-checkbox is-inline\" >\n                    <input class=\"is-checkradio is-small a2\" type=\"checkbox\" id=\"a2\" (click)=\"onSelectA('A2')\">\n                    <label for=\"a2\">\n                        > de 600 a < de 4 700\n                    </label>\n                </div>\n                <div class=\"field red-checkbox is-inline\" >\n                    <input class=\"is-checkradio is-small a1\" type=\"checkbox\" id=\"a1\" (click)=\"onSelectA('A1')\">\n                    <label for=\"a1\">\n                        De 30 a 600\n                    </label>\n                </div>\n            </div>\n            <div id=\"periodic-table-family-symbol-migration\" class=\"content-tab-symbols\" style=\"display: none;\">\n                <div class=\"field green-checkbox is-inline\" >\n                    <input class=\"is-checkradio is-small b5\" type=\"checkbox\" id=\"b5\" (click)=\"onSelectA('B5')\">\n                    <label for=\"b5\">\n                        Muy baja\n                    </label>\n                </div>\n                <div class=\"field green-light-checkbox is-inline\" >\n                    <input class=\"is-checkradio is-small b4\" type=\"checkbox\" id=\"b4\" (click)=\"onSelectA('B4')\">\n                    <label for=\"b4\">\n                        Baja\n                    </label>\n                </div>\n                <div class=\"field yellow-checkbox is-inline\" >\n                    <input class=\"is-checkradio is-small b3\" type=\"checkbox\" id=\"b3\" (click)=\"onSelectA('B3')\">\n                    <label for=\"b3\">\n                        Promedio\n                    </label>\n                </div>\n                <div class=\"field orange-checkbox is-inline\" >\n                    <input class=\"is-checkradio is-small b2\" type=\"checkbox\" id=\"b2\" (click)=\"onSelectA('B2')\">\n                    <label for=\"b2\">\n                        Alta\n                    </label>\n                </div>\n                <div class=\"field red-checkbox is-inline\" >\n                    <input class=\"is-checkradio is-small b1\" type=\"checkbox\" id=\"b1\" (click)=\"onSelectA('B1')\">\n                    <label for=\"b1\">\n                        Muy Alta\n                    </label>\n                </div>\n            </div>\n            <div id=\"periodic-table-family-symbol-rural-population\" class=\"content-tab-symbols\" style=\"display: none;\">\n                <div class=\"field green-checkbox is-inline\" >\n                    <input class=\"is-checkradio is-small c5\" type=\"checkbox\" id=\"c5\" (click)=\"onSelectA('C5')\">\n                    <label for=\"c5\">\n                        Muy rural\n                    </label>\n                </div>\n                <div class=\"field green-light-checkbox is-inline\" >\n                    <input class=\"is-checkradio is-small c4\" type=\"checkbox\" id=\"c4\" (click)=\"onSelectA('C4')\">\n                    <label for=\"c4\">\n                        Rural\n                    </label>\n                </div>\n                <div class=\"field yellow-checkbox is-inline\" >\n                    <input class=\"is-checkradio is-small c3\" type=\"checkbox\" id=\"c3\" (click)=\"onSelectA('C3')\">\n                    <label for=\"c3\">\n                        Rural promedio\n                    </label>\n                </div>\n                <div class=\"field orange-checkbox is-inline\" >\n                    <input class=\"is-checkradio is-small c2\" type=\"checkbox\" id=\"c2\" (click)=\"onSelectA('C2')\">\n                    <label for=\"c2\">\n                        Rural - Urbano\n                    </label>\n                </div>\n                <div class=\"field red-checkbox is-inline\" >\n                    <input class=\"is-checkradio is-small c1\" type=\"checkbox\" id=\"c1\" (click)=\"onSelectA('C1')\">\n                    <label for=\"c1\">\n                        Urbano\n                    </label>\n                </div>\n            </div>\n            <div id=\"periodic-table-family-symbol-ire\" class=\"content-tab-symbols\" style=\"display: none;\">\n                <div class=\"field green-checkbox is-inline\" >\n                    <input class=\"is-checkradio is-small d5\" type=\"checkbox\" id=\"d5\" (click)=\"onSelectA('D5')\">\n                    <label for=\"d5\">\n                        Expansión acelerada\n                    </label>\n                </div>\n                <div class=\"field green-light-checkbox is-inline\" >\n                    <input class=\"is-checkradio is-small d4\" type=\"checkbox\" id=\"d4\" (click)=\"onSelectA('D4')\">\n                    <label for=\"d4\">\n                        Expansión lenta\n                    </label>\n                </div>\n                <div class=\"field yellow-checkbox is-inline\" >\n                    <input class=\"is-checkradio is-small d3\" type=\"checkbox\" id=\"d3\" (click)=\"onSelectA('D3')\">\n                    <label for=\"d3\">\n                        Equilibrio\n                    </label>\n                </div>\n                <div class=\"field orange-checkbox is-inline\" >\n                    <input class=\"is-checkradio is-small d2\" type=\"checkbox\" id=\"d2\" (click)=\"onSelectA('D2')\">\n                    <label for=\"d2\">\n                        Extinción lenta\n                    </label>\n                </div>\n                <div class=\"field red-checkbox is-inline\" >\n                    <input class=\"is-checkradio is-small d1\" type=\"checkbox\" id=\"d1\" (click)=\"onSelectA('D1')\">\n                    <label for=\"d1\">\n                        Extinción acelerada\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"isMobile\">\n    <div class=\"tags is-centered is-small tag-info\" style=\"padding-top: 56px;\" *ngIf=\"typeClassTable === 'periodic-table-population'\">\n       <span class=\"tag is-rounded is-small bg-green\"> > de 220 000 a 2 millones 886 mil</span>\n        <span class=\"tag is-rounded is-small bg-green-light\">  > de 37 300 a < de 220 000</span>\n        <span class=\"tag is-rounded is-small bg-yellow\">  > de 4 700 a < de 37 300</span>\n        <span class=\"tag is-rounded is-small bg-orange\"> > de 600 a < de 4 700</span>\n        <span class=\"tag is-rounded is-small bg-red\"> De 30 a 600</span>\n        <span class=\"icon has-text-info\" (click)='viewInfo(\"La estimación del volumen de la población indígena se basa en el criterio de hogar indígena, que son aquellos en donde el jefe (a) y/o el cónyuge y/o alguno de los ascendientes (madre, padre, madrastra o padrastro, abuelo (a), bisabuelo (a), tatarabuelo (a), suegro (a) declaró ser hablante de alguna lengua indígena (HLI). De acuerdo al tamaño de la población se definieron cinco grupos o quintiles, donde cada uno contiene al veinte por ciento de los agrupaciones lingüísticas o pueblos indígenas.\")'>\n          <i class=\"fas fa-info-circle\"></i>\n        </span>\n    </div>\n    <div class=\"tags is-centered is-small\" style=\"padding-top: 56px;\" *ngIf=\"typeClassTable === 'periodic-table-migration'\">\n        <span class=\"tag is-rounded is-small bg-green\">Muy baja</span>\n        <span class=\"tag is-rounded is-small bg-green-light\">Baja</span>\n        <span class=\"tag is-rounded is-small bg-yellow\">Promedio</span>\n        <span class=\"tag is-rounded is-small bg-orange\">Alta</span>\n        <span class=\"tag is-rounded is-small bg-red\">Muy alta</span>\n        <span class=\"icon has-text-info\" (click)='viewInfo(\"La información sobre este tema se refiere a dos formas de identificar la migración, la primera por residir en una entidad distinta al lugar del nacimiento y la segunda por haber cambiado el lugar de residencia en los últimos cinco años. El indicador refleja el promedio de las dos tendencias migratorias en porcentaje y se agrupa en quintiles donde cada uno contiene al veinte por ciento de los agrupaciones lingüísticas o pueblos indígenas.\")'>\n          <i class=\"fas fa-info-circle\"></i>\n        </span>\n    </div>\n    <div class=\"tags is-centered is-small\" style=\"padding-top: 56px;\" *ngIf=\"typeClassTable === 'periodic-table-rural'\">\n        <span class=\"tag is-rounded is-small bg-green\" >Muy rural</span>\n        <span class=\"tag is-rounded is-small bg-green-light\" >Rural</span>\n        <span class=\"tag is-rounded is-small bg-yellow\" >Rural promedio</span>\n        <span class=\"tag is-rounded is-small bg-orange\" >Rural - Urbano</span>\n        <span class=\"tag is-rounded is-small bg-red\" >Urbano</span>\n        <span class=\"icon has-text-info\" (click)='viewInfo(\"El indicador de población rural se refiere al porcentaje población indígena que habita en localidades menores de 2 mil 500 habitantes y su forma de agrupación son los quintiles donde cada uno contiene al veinte por ciento de los agrupaciones lingüísticas o pueblos indígenas.\")'>\n          <i class=\"fas fa-info-circle\"></i>\n        </span>\n    </div>\n    <div class=\"tags is-centered is-small\" style=\"padding-top: 56px;\" *ngIf=\"typeClassTable === 'periodic-table-ire'\">\n        <span class=\"tag is-rounded is-small bg-green\" >Expansión acelerada</span>\n        <span class=\"tag is-rounded is-small bg-green-light\" >Expansión lenta</span>\n        <span class=\"tag is-rounded is-small bg-yellow\" >Equilibrio</span>\n        <span class=\"tag is-rounded is-small bg-orange\" >Extinción lenta</span>\n        <span class=\"tag is-rounded is-small bg-red\" >Extinción acelerada</span>\n        <span class=\"icon has-text-info\" (click)='viewInfo(\"El índice refleja la relación entre los hablantes de lenguas indígenas del grupo de edad de 15 a 49 años con los niños hablantes de lenguas indígenas entre 5 y 9 años, considerando como base un modelo demográfico del estado de Oaxaca. El índice permite medir la condición en que las nuevas generaciones de la población de un grupo etnolingüístico mantienen el uso de las lenguas indígenas.  Sus resultados se clasifican de la siguiente forma: expansión acelerada (valores mayores a 2); expansión lenta (entre 1.11 y 2); equilibrio (entre 0.9 y 1.1); extinción lenta (entre 0.51 y 0.9) y extinción acelerada (menor a 0.5).\")'>\n          <i class=\"fas fa-info-circle\"></i>\n        </span>\n    </div>\n    <div class=\"tags is-centered is-small\" style=\"padding-top: 56px;\" *ngIf=\"typeClassTable === 'periodic-table-variantes'\">\n        <span class=\"tag is-rounded is-small bg-green\">1</span>\n        <span class=\"tag is-rounded is-small bg-green-light\">2 - 5</span>\n        <span class=\"tag is-rounded is-small bg-yellow\">6 - 10</span>\n        <span class=\"tag is-rounded is-small bg-orange\">11 - 29</span>\n        <span class=\"tag is-rounded is-small bg-red\">Mas de 30</span>\n    </div>\n</div>\n\n<div *ngIf=\"isMobile\" style=\"padding-top: 15px;\">\n    <div *ngIf=\"typeClassTable === 'periodic-table-family'\" style=\"padding-top: 56px\">\n        <ol class=\"periodic-table-family-grids\">\n            <li *ngFor=\"let language of languagesMobile\" id=\"{{language[2]}}\" (click)=\"onViewLanguage(language)\"\n                class=\"group {{language[24]}} {{typeClassTable}} {{'A' + language[6]}} {{'B' + language[11] }} {{'C' + language[14]}} {{'D' + language[18]}}\">\n                <p class=\"number-id\">\n                    <b>{{language[20]}}</b>\n                </p>\n                <p class=\"element-symbol\">\n                    <b>{{language[2]}}</b>\n                </p>\n                <p class=\"element-name\">\n                    {{language[1]}} ({{language[0]}})\n                </p>\n            </li>\n        </ol>\n    </div>\n    <div *ngIf=\"typeClassTable === 'periodic-table-alphabet'\"  style=\"padding-top: 56px\">\n        <ol class=\"periodic-table-family-grids\">\n            <li *ngFor=\"let language of languagesMobile\" id=\"{{language[2]}}\" (click)=\"onViewLanguage(language)\"\n                class=\"group {{language[24]}} {{typeClassTable}} {{'A' + language[6]}} {{'B' + language[11] }} {{'C' + language[14]}} {{'D' + language[18]}}\">\n                <p class=\"number-id\">\n                    <b>{{language[0]}}</b>\n                </p>\n                <p class=\"element-symbol\">\n                    <b>{{language[2]}}</b>\n                </p>\n                <p class=\"element-name\">\n                    {{language[1]}} ({{language[0]}})\n                </p>\n            </li>\n        </ol>\n    </div>\n    <div *ngIf=\"typeClassTable === 'periodic-table-population'\">\n        <ol class=\"periodic-table-family-grids\">\n            <li *ngFor=\"let language of languagesMobile\" id=\"{{language[2]}}\" (click)=\"onViewLanguage(language)\"\n                class=\"group {{ COLOR[5 - language[6]] }} periodic-table-population\">\n                 <p class=\"population\">\n                    <span class=\"icon is-small white\"><i class=\"fas fa-circle\"></i></span>\n                    {{numberWithCommas(language[5])}}\n                </p>\n                <p class=\"element-symbol\">\n                    <b>{{language[2]}}</b>\n                </p>\n                <p class=\"element-name\">\n                    {{language[1]}} ({{language[0]}})\n                </p>\n            </li>\n        </ol>\n    </div>\n    <div *ngIf=\"typeClassTable === 'periodic-table-migration'\">\n        <ol class=\"periodic-table-family-grids\">\n            <li *ngFor=\"let language of languagesMobile\" id=\"{{language[2]}}\"  (click)=\"onViewLanguage(language)\"\n                class=\"group {{ COLOR[5 - language[11]] }} periodic-table-migration\">\n                <p class=\"population\">\n                    <span class=\"icon is-small white\"><i class=\"fas fa-square-full\"></i></span>\n                    {{numberWithCommas(language[10])}}\n                </p>\n                <p class=\"element-symbol\">\n                    <b>{{language[2]}}</b>\n                </p>\n                <p class=\"element-name\">\n                    {{language[1]}} ({{language[0]}})\n                </p>\n            </li>\n        </ol>\n    </div>\n    <div *ngIf=\"typeClassTable === 'periodic-table-rural'\">\n        <ol class=\"periodic-table-family-grids\">\n            <li *ngFor=\"let language of languagesMobile\"  id=\"{{language[2]}}\" (click)=\"onViewLanguage(language)\"\n                class=\"group {{ COLOR[5 - language[14]] }} periodic-table-rural\">\n                <p class=\"population\">\n                    <span class=\"icon is-small white\"><i class=\"fas fa-star\"></i></span>\n                    {{language[13]}}\n                </p>\n                <p class=\"element-symbol\">\n                    <b>{{language[2]}}</b>\n                </p>\n                <p class=\"element-name\">\n                    {{language[1]}} ({{language[0]}})\n                </p>\n            </li>\n        </ol>\n    </div>\n    <div *ngIf=\"typeClassTable === 'periodic-table-ire'\">\n        <ol class=\"periodic-table-family-grids\">\n            <li *ngFor=\"let language of languagesMobile\" id=\"{{language[2]}}\" (click)=\"onViewLanguage(language)\"\n                class=\"group {{ COLOR[5 - language[18]] }} periodic-table-ire\">\n                <p class=\"population\">\n                    <span class=\"icon is-small white\"><i class=\"fas fa-play\"></i></span>\n                    {{language[16]}}\n                </p>\n                <p class=\"element-symbol\">\n                    <b>{{language[2]}}</b>\n                </p>\n                <p class=\"element-name\">\n                    {{language[1]}} ({{language[0]}})\n                </p>\n            </li>\n        </ol>\n    </div>\n    <div *ngIf=\"typeClassTable === 'periodic-table-variantes'\">\n        <ol class=\"periodic-table-family-grids\">\n            <li *ngFor=\"let language of languagesMobile\" id=\"{{language[2]}}\" (click)=\"onViewLanguage(language)\"\n                class=\"group {{ COLOR[5 - language[21]] }} periodic-table-variantes\">\n                <p class=\"number-id\">\n                    <b>{{language[20]}}</b>\n                </p>\n                <p class=\"element-symbol\">\n                    <b>{{language[2]}}</b>\n                </p>\n                <p class=\"element-name\">\n                    {{language[1]}} ({{language[0]}})\n                </p>\n            </li>\n        </ol>\n    </div>\n</div>\n\n<div class=\"modal modal-image-full\"  id=\"modal-image\">\n    <div class=\"modal-background\"></div>\n    <div class=\"modal-content\">\n        <p class=\"image\" style=\"width: 100%;\">\n            <img src=\"./assets/img/{{orientacion}}/{{simbolo}}.png\" alt=\"{{nombre}}\">\n        </p>\n    </div>\n    <button class=\"modal-close is-large\" aria-label=\"close\" (click)=\"onCloseImage()\"></button>\n</div>\n\n<div class=\"modal\" id=\"modal-info\">\n    <div class=\"modal-background\"></div>\n    <div class=\"modal-card\">\n        <header class=\"modal-card-head {{clase}}\">\n            <p class=\"modal-card-title {{clase}}\">{{nombre}} ({{simbolo}})</p>\n            <button class=\"delete close\" aria-label=\"close\" (click)=\"onCloseLanguage()\"></button>\n        </header>\n        <section class=\"modal-card-body\">\n            <p><b>Familia: </b></p>\n            <div class=\"tags are-medium\">\n                <span class=\"tag is-rounded\">{{familia}}</span>\n            </div>\n\n            <p><b>Población: </b> {{poblacion}}</p>\n            <div class=\"tags are-medium\">\n                <span class=\"tag is-rounded\">{{categoriaPoblacion}}</span>\n            </div>\n\n            <p><b>Migración: </b> {{migracion}}</p>\n            <div class=\"tags are-medium\">\n                <span class=\"tag is-rounded\">{{categoriaMigracion}}</span>\n            </div>\n\n            <p><b>Población Rural: </b> {{rural}}</p>\n            <div class=\"tags are-medium\">\n                <span class=\"tag is-rounded\">{{ruralMigracion}}</span>\n            </div>\n\n            <p><b>IRE (Índice de Remplazo Etnolingüístico): </b> {{ire}}</p>\n            <div class=\"tags are-medium\">\n                <span class=\"tag is-rounded\">{{ireMigracion}}</span>\n            </div>\n\n            <p><b>Variantes:</b> {{numeroVariantes}}</p>\n            <div class=\"tags are-medium\" *ngIf=\"variantes\">\n                <span *ngFor=\"let variante of variantes\" class=\"tag  is-rounded\">{{variante}}</span>\n            </div>\n        </section>\n        <footer class=\"modal-card-foot\">\n            <button class=\"button {{clase}}\" (click)=\"viewImage()\">Infografía</button>\n            <!--<button class=\"button\" (click)=\"facebookSharing(shareObj)\">Compartir</button>-->\n        </footer>\n    </div>\n</div>\n\n<div class=\"modal\" id=\"modal-menu\" style=\"z-index: 38;\">\n    <div class=\"modal-background\"></div>\n</div>\n\n<div class=\"modal\" id=\"modal-obituario\">\n    <div class=\"modal-background\"></div>\n    <div class=\"modal-card\">\n        <header class=\"modal-card-head\">\n            <p class=\"modal-card-title\">Lengua extintas</p>\n            <button class=\"delete close\" aria-label=\"close\" (click)=\"onCloseLanguasExtintas()\"></button>\n        </header>\n        <section class=\"modal-card-body\">\n            <table class=\"table is-fullwidth\">\n                <thead>\n                <tr>\n                    <th>Lengua extinta</th>\n                    <th>Ubicación</th>\n                </tr>\n                </thead>\n                <tbody>\n            <tr>\n                <td>Acaxe</td>\n                <td>Sinaloa y Durango</td>\n            </tr>\n            <tr>\n                <td>Achire</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Acmara</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Aguata</td>\n                <td>Tamaulipas</td>\n            </tr>\n            <tr>\n                <td>Ahome</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Ahualculco</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Akwáala</td>\n                <td>Baja California</td>\n            </tr>\n            <tr>\n                <td>Alazapa</td>\n                <td>Coahuila y Nuevo    León</td>\n            </tr>\n            <tr>\n                <td>Apache</td>\n                <td>Chihuahua</td>\n            </tr>\n            <tr>\n                <td>Apaneco</td>\n                <td>Jalisco y Michoacán</td>\n            </tr>\n            <tr>\n                <td>Baciroa</td>\n                <td>Sonora</td>\n            </tr>\n            <tr>\n                <td>Baimena</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Basopa</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Baturoque</td>\n                <td>Sonora</td>\n            </tr>\n            <tr>\n                <td>Bausarígame</td>\n                <td>Coahuila</td>\n            </tr>\n            <tr>\n                <td>Bobol</td>\n                <td>Coahuila y Nuevo    León</td>\n            </tr>\n            <tr>\n                <td>Bocalo</td>\n                <td>Nuevo León</td>\n            </tr>\n            <tr>\n                <td>Borrado</td>\n                <td>Tamaulipas y Nuevo    León</td>\n            </tr>\n            <tr>\n                <td>Cabeza</td>\n                <td>Coahuila</td>\n            </tr>\n            <tr>\n                <td>Cácari</td>\n                <td>Durango</td>\n            </tr>\n            <tr>\n                <td>Cacaxte</td>\n                <td>Coahuila y Nuevo    León</td>\n            </tr>\n            <tr>\n                <td>Cacoma</td>\n                <td>Jalisco</td>\n            </tr>\n            <tr>\n                <td>Cacunica</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Cahita</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Cahuillos</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Cahuimeto</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Camoteca</td>\n                <td>Guerrero</td>\n            </tr>\n            <tr>\n                <td>Carrizo</td>\n                <td>Tamaulipas</td>\n            </tr>\n            <tr>\n                <td>Casdal</td>\n                <td>Chiapas</td>\n            </tr>\n            <tr>\n                <td>Cataara</td>\n                <td>Nuevo León</td>\n            </tr>\n            <tr>\n                <td>Catujano</td>\n                <td>Coahuila y Nuevo    León</td>\n            </tr>\n            <tr>\n                <td>Cazcán (o)</td>\n                <td>Jalisco y Zacatecas</td>\n            </tr>\n            <tr>\n                <td>Chabañal&nbsp;</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Chamalteca</td>\n                <td>Jalisco</td>\n            </tr>\n            <tr>\n                <td>Chaneabal</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Chantaleno</td>\n                <td>Oaxaca</td>\n            </tr>\n            <tr>\n                <td>Chiapaneca</td>\n                <td>Chiapas</td>\n            </tr>\n            <tr>\n                <td>Chicomucelteca</td>\n                <td>Chiapas</td>\n            </tr>\n            <tr>\n                <td>Chicorato</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Chimalapas</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Chinarra</td>\n                <td>Chihuahua</td>\n            </tr>\n            <tr>\n                <td>Chínipa</td>\n                <td>Chihuahua</td>\n            </tr>\n            <tr>\n                <td>Chizo</td>\n                <td>Chihuahua</td>\n            </tr>\n            <tr>\n                <td>Chuchonas</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Chumbia</td>\n                <td>Guerrero</td>\n            </tr>\n            <tr>\n                <td>Coahuilteco</td>\n                <td>Coahuila</td>\n            </tr>\n            <tr>\n                <td>Coano</td>\n                <td>Nayarit</td>\n            </tr>\n            <tr>\n                <td>Coca</td>\n                <td>Jalisco, Colima y    Nayarit</td>\n            </tr>\n            <tr>\n                <td>Cochín</td>\n                <td>Jalisco y Michoacán</td>\n            </tr>\n            <tr>\n                <td>Cocomacaque</td>\n                <td>Guerrero</td>\n            </tr>\n            <tr>\n                <td>Colotlan</td>\n                <td>Nayarit y Zacatecas</td>\n            </tr>\n            <tr>\n                <td>Comanche</td>\n                <td>Chihuahua y Coahuila</td>\n            </tr>\n            <tr>\n                <td>Comanito</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Comecrudo</td>\n                <td>Coahuila</td>\n            </tr>\n            <tr>\n                <td>Comepescado</td>\n                <td>Nuevo León</td>\n            </tr>\n            <tr>\n                <td>Comoporí</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Concho</td>\n                <td>Chihuahua</td>\n            </tr>\n            <tr>\n                <td>Conicare</td>\n                <td>Sonora</td>\n            </tr>\n            <tr>\n                <td>Contotor</td>\n                <td>Coahuila</td>\n            </tr>\n            <tr>\n                <td>Cotoname</td>\n                <td>Tamaulipas</td>\n            </tr>\n            <tr>\n                <td>Cuachichil</td>\n                <td>Zacatecas</td>\n            </tr>\n            <tr>\n                <td>Cuauhcomeca</td>\n                <td>Michoacán</td>\n            </tr>\n            <tr>\n                <td>Cucharete</td>\n                <td>Michoacán</td>\n            </tr>\n            <tr>\n                <td>Cuicalteco&nbsp;</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Cuissima&nbsp;</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Cuitlateco o Teco</td>\n                <td>Guerrero y Michoacán</td>\n            </tr>\n            <tr>\n                <td>Culhua</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Cuyumateca o Cuyutumateco</td>\n                <td>Guerrero</td>\n            </tr>\n            <tr>\n                <td>Cuyuteca</td>\n                <td>Jalisco</td>\n            </tr>\n            <tr>\n                <td>Diegueño</td>\n                <td>Baja California</td>\n            </tr>\n            <tr>\n                <td>Eudeve</td>\n                <td>Sonora</td>\n            </tr>\n            <tr>\n                <td>Guachichil</td>\n                <td>Jalisco y Zacatecas</td>\n            </tr>\n            <tr>\n                <td>Guaicura</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Guamare</td>\n                <td>Guanajuato y    Querétaro</td>\n            </tr>\n            <tr>\n                <td>Guasave</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Guaxabana</td>\n                <td>Guanajuato</td>\n            </tr>\n            <tr>\n                <td>Guaycura</td>\n                <td>Baja California Sur</td>\n            </tr>\n            <tr>\n                <td>Guaymas</td>\n                <td>Sonora</td>\n            </tr>\n            <tr>\n                <td>Guazapar</td>\n                <td>Chihuahua</td>\n            </tr>\n            <tr>\n                <td>Guazapare</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Hine</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Hualahuis</td>\n                <td>Nuevo León</td>\n            </tr>\n            <tr>\n                <td>Huatiquimane</td>\n                <td>Oaxaca</td>\n            </tr>\n            <tr>\n                <td>Huavi (Huatzonteco)</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Huaynamota</td>\n                <td>Nayarit</td>\n            </tr>\n            <tr>\n                <td>Hueyquetzal</td>\n                <td>Coahuila</td>\n            </tr>\n            <tr>\n                <td>Huite</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Hume</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Huzco</td>\n                <td>Oaxaca</td>\n            </tr>\n            <tr>\n                <td>Icaura Ayancaura</td>\n                <td>Tamaulipas</td>\n            </tr>\n            <tr>\n                <td>Irritila</td>\n                <td>Coahuila</td>\n            </tr>\n            <tr>\n                <td>Itzuco</td>\n                <td>Guerrero y Michocán</td>\n            </tr>\n            <tr>\n                <td>Janambre</td>\n                <td>Nuevo León y    Tamaulipas</td>\n            </tr>\n            <tr>\n                <td>Jonaz</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Jova</td>\n                <td>Sonora</td>\n            </tr>\n            <tr>\n                <td>Julime</td>\n                <td>Chihuahua</td>\n            </tr>\n            <tr>\n                <td>Jumano</td>\n                <td>Chihuahua</td>\n            </tr>\n            <tr>\n                <td>Kania</td>\n                <td>Baja California</td>\n            </tr>\n            <tr>\n                <td>Kikima</td>\n                <td>Baja California</td>\n            </tr>\n            <tr>\n                <td>Lagunero</td>\n                <td>Coahuila</td>\n            </tr>\n            <tr>\n                <td>Laymón</td>\n                <td>Baja California</td>\n            </tr>\n            <tr>\n                <td>Macoaque</td>\n                <td>México</td>\n            </tr>\n            <tr>\n                <td>Macoyahui</td>\n                <td>Sonora</td>\n            </tr>\n            <tr>\n                <td>Macoyahuy</td>\n                <td>Sonora</td>\n            </tr>\n            <tr>\n                <td>Mancheño</td>\n                <td>Tamaulipas</td>\n            </tr>\n            <tr>\n                <td>Maratín</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Matlame</td>\n                <td>Oaxaca y Guerrero</td>\n            </tr>\n            <tr>\n                <td>Mediotaguel</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Mextitlatecas</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Mocorito</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Nayarita</td>\n                <td>Nayarit</td>\n            </tr>\n            <tr>\n                <td>Negrito</td>\n                <td>San Luis Potosí</td>\n            </tr>\n            <tr>\n                <td>Nevomes</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Nio</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Niquiran</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Obayo</td>\n                <td>Coahuila</td>\n            </tr>\n            <tr>\n                <td>Ocoroni</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Ohuera</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Olive</td>\n                <td>Tamaulipas</td>\n            </tr>\n            <tr>\n                <td>Ópata</td>\n                <td>Sonora</td>\n            </tr>\n            <tr>\n                <td>Pacasa</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Pame del Sur&nbsp;</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Pampuchín</td>\n                <td>Jalisco</td>\n            </tr>\n            <tr>\n                <td>Panteca</td>\n                <td>Guerrero</td>\n            </tr>\n            <tr>\n                <td>Papabucos</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Pelón</td>\n                <td>Tamaulipas</td>\n            </tr>\n            <tr>\n                <td>Pericú</td>\n                <td>Baja California Sur</td>\n            </tr>\n            <tr>\n                <td>Piro</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Pisón</td>\n                <td>Tamaulipas</td>\n            </tr>\n            <tr>\n                <td>Puctunc o puntucne&nbsp;</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Putima</td>\n                <td>Sonora</td>\n            </tr>\n            <tr>\n                <td>Quelen</td>\n                <td>Chiapas</td>\n            </tr>\n            <tr>\n                <td>Sabaguis</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Sabaibo</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Salinero</td>\n                <td>Sonora</td>\n            </tr>\n            <tr>\n                <td>Sayulteca</td>\n                <td>Jalisco y Colima</td>\n            </tr>\n            <tr>\n                <td>Soltecos</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Subtiabe</td>\n                <td>Guerrero</td>\n            </tr>\n            <tr>\n                <td>Suma-Jumano</td>\n                <td>Chihuahua</td>\n            </tr>\n            <tr>\n                <td>Tahue</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Tahueca</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Tamaulipeco</td>\n                <td>Tamaulipas</td>\n            </tr>\n            <tr>\n                <td>Tamazulteca</td>\n                <td>Michoacán</td>\n            </tr>\n            <tr>\n                <td>Tapachulteca I</td>\n                <td>Chiapas</td>\n            </tr>\n            <tr>\n                <td>Tapijulapanes</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Tebaca</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Tecoripas</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Teco-Tecoxquin</td>\n                <td>Nayarit</td>\n            </tr>\n            <tr>\n                <td>Tecual</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Tecuexe</td>\n                <td>Jalisco y Zacatecas</td>\n            </tr>\n            <tr>\n                <td>Tehua</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Tehueco</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Témori</td>\n                <td>Chihuahua</td>\n            </tr>\n            <tr>\n                <td>Tene</td>\n                <td>Jalisco</td>\n            </tr>\n            <tr>\n                <td>Tepahue</td>\n                <td>Sonora</td>\n            </tr>\n            <tr>\n                <td>Teparantana</td>\n                <td>Sonora</td>\n            </tr>\n            <tr>\n                <td>Tepecano</td>\n                <td>Jalisco y Zacatecas</td>\n            </tr>\n            <tr>\n                <td>Tepextiteca</td>\n                <td>Guerrero</td>\n            </tr>\n            <tr>\n                <td>Tepoca</td>\n                <td>Sonora</td>\n            </tr>\n            <tr>\n                <td>Tepocanteco</td>\n                <td>Jalisco</td>\n            </tr>\n            <tr>\n                <td>Tepuzteca-Tlacotepehua</td>\n                <td>Guerrero</td>\n            </tr>\n            <tr>\n                <td>Tequijana</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Teul</td>\n                <td>Zacatecas</td>\n            </tr>\n            <tr>\n                <td>Texcateco</td>\n                <td>Guerrero</td>\n            </tr>\n            <tr>\n                <td>Texome</td>\n                <td>Guerrero</td>\n            </tr>\n            <tr>\n                <td>Texome</td>\n                <td>Guerrero</td>\n            </tr>\n            <tr>\n                <td>Tezcateca</td>\n                <td>Guerrero</td>\n            </tr>\n            <tr>\n                <td>Tiam</td>\n                <td>Jalisco</td>\n            </tr>\n            <tr>\n                <td>Tisteco</td>\n                <td>Guerrero</td>\n            </tr>\n            <tr>\n                <td>Tlacotepehua - Tepoxteca</td>\n                <td>Guerrero</td>\n            </tr>\n            <tr>\n                <td>Tlaltempaneca</td>\n                <td>Michoacán y Jalisco</td>\n            </tr>\n            <tr>\n                <td>Tlascalans</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Tlatzihuiteca</td>\n                <td>Guerrero</td>\n            </tr>\n            <tr>\n                <td>Tlaxomulteca</td>\n                <td>Jalisco</td>\n            </tr>\n            <tr>\n                <td>Toboso</td>\n                <td>Chihuahua y Coahuila</td>\n            </tr>\n            <tr>\n                <td>Tolimeca</td>\n                <td>Guerrero y Michoacán</td>\n            </tr>\n            <tr>\n                <td>Tomateca</td>\n                <td>Michoacán y Jalisco</td>\n            </tr>\n            <tr>\n                <td>Tortuga</td>\n                <td>Tamaulipas y Nuevo    León</td>\n            </tr>\n            <tr>\n                <td>Totorame</td>\n                <td>Nayarit</td>\n            </tr>\n            <tr>\n                <td>Trokek</td>\n                <td>Chiapas</td>\n            </tr>\n            <tr>\n                <td>Tubar</td>\n                <td>Chihuahua</td>\n            </tr>\n            <tr>\n                <td>Tuxteca</td>\n                <td>Guerrero</td>\n            </tr>\n            <tr>\n                <td>Vacoreque</td>\n                <td>Sinaloa</td>\n            </tr>\n            <tr>\n                <td>Vayema</td>\n                <td>Sonora</td>\n            </tr>\n            <tr>\n                <td>Vigitega</td>\n                <td>Nayarit</td>\n            </tr>\n            <tr>\n                <td>Xanambre</td>\n                <td>Tamaulipas</td>\n            </tr>\n            <tr>\n                <td>Xilotlatzinca</td>\n                <td>Jalisco</td>\n            </tr>\n            <tr>\n                <td>Xixime</td>\n                <td>Durango, Coahuila y    Chihuahua</td>\n            </tr>\n            <tr>\n                <td>Xocoteca</td>\n                <td>Michoacán y Jalisco</td>\n            </tr>\n            <tr>\n                <td>Yuma</td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td>Zacateca</td>\n                <td>Zacatecas</td>\n            </tr>\n            <tr>\n                <td>Zapotlaneca</td>\n                <td>Jalisco</td>\n            </tr>\n            <tr>\n                <td>Zayahueco</td>\n                <td>Jalisco y Nayarit</td>\n            </tr>\n            <tr>\n                <td>Zoe</td>\n                <td>Sinaloa y Sonora</td>\n            </tr>\n            <tr>\n                <td>Zotzlem</td>\n                <td>Chiapas</td>\n            </tr>\n            <tr>\n                <td>Zoyateca</td>\n                <td>Jalisco</td>\n            </tr>\n            <tr>\n                <td>Zuaque</td>\n                <td>Sinaloa</td>\n            </tr>\n            </tbody></table>\n        </section>\n    </div>\n</div>\n\n<div class=\"modal\" id=\"modal-info-periodic-table\">\n    <div class=\"modal-background\"></div>\n    <div class=\"modal-content\">\n        <section class=\"modal-card-body\">\n            <p class=\"is-4by3\">\n                {{info}}\n            </p>\n        </section>\n    </div>\n    <button class=\"modal-close is-large\" aria-label=\"close\" (click)=\"onCloseInfo()\"></button>\n</div>\n"

/***/ }),

/***/ "./src/app/tabla-lenguas-indigenas/tabla-lenguas-indigenas.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/tabla-lenguas-indigenas/tabla-lenguas-indigenas.component.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var lenguas_data_service_1 = __webpack_require__(/*! ./lenguas-data.service */ "./src/app/tabla-lenguas-indigenas/lenguas-data.service.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var layout_1 = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var XLSX = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
var COLUMNS;
(function (COLUMNS) {
    COLUMNS[COLUMNS["ID"] = 0] = "ID";
    COLUMNS[COLUMNS["LENGUA"] = 1] = "LENGUA";
    COLUMNS[COLUMNS["CVE_LEN"] = 2] = "CVE_LEN";
    COLUMNS[COLUMNS["FAMILIA"] = 3] = "FAMILIA";
    COLUMNS[COLUMNS["CVE_FAM"] = 4] = "CVE_FAM";
    COLUMNS[COLUMNS["POBLACION_INDIGENA"] = 5] = "POBLACION_INDIGENA";
    COLUMNS[COLUMNS["GRUPOS_DE_POBLACION"] = 6] = "GRUPOS_DE_POBLACION";
    COLUMNS[COLUMNS["CATEGORIA"] = 7] = "CATEGORIA";
    COLUMNS[COLUMNS["PORCENTAJE_DE_POBLACION_INDIGENA_QUE_RESIDIA_EN_OTRA_ENTIDAD_O_PAIS_EN_MARZO_2010_2015"] = 8] = "PORCENTAJE_DE_POBLACION_INDIGENA_QUE_RESIDIA_EN_OTRA_ENTIDAD_O_PAIS_EN_MARZO_2010_2015";
    COLUMNS[COLUMNS["PORCENTAJE_DE_POBLACION_INDIGENA_QUE_NACIO_EN_OTRA_ENTIDAD"] = 9] = "PORCENTAJE_DE_POBLACION_INDIGENA_QUE_NACIO_EN_OTRA_ENTIDAD";
    COLUMNS[COLUMNS["PROMEDIO_DE_MIGRACION_TEMPORAL_Y_ABSOLUTA"] = 10] = "PROMEDIO_DE_MIGRACION_TEMPORAL_Y_ABSOLUTA";
    COLUMNS[COLUMNS["MIGRACION"] = 11] = "MIGRACION";
    COLUMNS[COLUMNS["CATEGORIA_MIGRACION"] = 12] = "CATEGORIA_MIGRACION";
    COLUMNS[COLUMNS["RURAL"] = 13] = "RURAL";
    COLUMNS[COLUMNS["CINCO_GRUPOS_DE_POBLACION_RURAL"] = 14] = "CINCO_GRUPOS_DE_POBLACION_RURAL";
    COLUMNS[COLUMNS["CATEGORIA_POBLACION_RURAL"] = 15] = "CATEGORIA_POBLACION_RURAL";
    COLUMNS[COLUMNS["IRE"] = 16] = "IRE";
    COLUMNS[COLUMNS["GRADO"] = 17] = "GRADO";
    COLUMNS[COLUMNS["GRUPO_IRE"] = 18] = "GRUPO_IRE";
    COLUMNS[COLUMNS["VARIANTES"] = 19] = "VARIANTES";
    COLUMNS[COLUMNS["NUMERO_DE_VARIANTES"] = 20] = "NUMERO_DE_VARIANTES";
    COLUMNS[COLUMNS["GRUPO_DE_VARIANTES"] = 21] = "GRUPO_DE_VARIANTES";
    COLUMNS[COLUMNS["POSICION"] = 22] = "POSICION";
    COLUMNS[COLUMNS["POSICION_EN_LA_TABLA_PERIODICA"] = 23] = "POSICION_EN_LA_TABLA_PERIODICA";
    COLUMNS[COLUMNS["CLASE_HTML"] = 24] = "CLASE_HTML";
    COLUMNS[COLUMNS["COLOR"] = 25] = "COLOR";
})(COLUMNS || (COLUMNS = {}));
var ASC = 1;
var DESC = -1;
var Lengua = /** @class */ (function () {
    function Lengua() {
    }
    return Lengua;
}());
exports.Lengua = Lengua;
var TablaLenguasIndigenasComponent = /** @class */ (function () {
    function TablaLenguasIndigenasComponent(lenguasDataService, sanitizer, breakpointObserver) {
        var _this = this;
        this.lenguasDataService = lenguasDataService;
        this.sanitizer = sanitizer;
        this.breakpointObserver = breakpointObserver;
        this.languages = [];
        this.languagesColumnA = [];
        this.languagesColumnB = [];
        this.languagesColumnC = [];
        this.languagesColumnD = [];
        this.languagesColumnE = [];
        this.nombre = "";
        this.clase = "";
        this.simbolo = "";
        this.orientacion = "horizontal";
        this.descripcion = "";
        this.claveFamilia = "";
        this.poblacion = "";
        this.categoriaPoblacion = "";
        this.migracion = "";
        this.categoriaMigracion = "";
        this.rural = "";
        this.ruralMigracion = "";
        this.ire = "";
        this.ireMigracion = "";
        this.familia = "";
        this.variantes = [];
        this.menu_ire = "Índice de Remplazo Etnolingüístico (IRE)";
        this.COLOR = ["bg-green", "bg-green-light", "bg-yellow", "bg-orange", "bg-red", "bg-none"];
        this.typeClassTable = "periodic-table-family";
        this.isMobile = true;
        this.languagesMobile = [];
        this.info = "";
        this.shareObj = {
            href: "FACEBOOK-SHARE-LINK",
            hashtag: "#FACEBOOK-SHARE-HASGTAG"
        };
        this.filterTypes = [
            { value: 'familias', display: 'Familias' },
            { value: 'language', display: 'Lenguas' },
            { value: 'poblacion', display: 'Población' },
        ];
        this.lenguasDataService.getExcel().subscribe(function (resp) {
            var data = new Uint8Array(resp.body);
            var workbook = XLSX.read(data, { type: "array" });
            var ws = workbook.Sheets['Hoja1'];
            _this.languages = XLSX.utils.sheet_to_json(ws, { header: 1 });
            _this.languages.shift();
            console.log(_this.languages);
            // this.languages.sort((a, b) => {
            //     if (a[COLUMNS.POSICION] < b[COLUMNS.POSICION]) return -1;
            //     if (a[COLUMNS.POSICION] > b[COLUMNS.POSICION]) return 1;
            //     return 0;
            // });
            _this.orderLanguagesBy(_this.languages, COLUMNS.POSICION, ASC);
            _this.languagesMobile = Array.from(_this.languages);
            _this.orderLanguagesBy(_this.languagesMobile, COLUMNS.FAMILIA, ASC);
        });
        this.selectedFilter = 'familia';
    }
    TablaLenguasIndigenasComponent.prototype.numberWithCommas = function (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    TablaLenguasIndigenasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.breakpointObserver
            .observe(['(min-width: 768px) and (max-width: 1023px)'])
            .subscribe(function (state) {
            if (state.matches) {
                _this.menu_ire = "IRE";
            }
            else {
                _this.menu_ire = "Índice de Remplazo Etnolingüístico (IRE)";
            }
        });
        this.breakpointObserver
            .observe(['(min-width: 320px) and (max-width: 767px)'])
            .subscribe(function (state) {
            if (state.matches) {
                _this.orientacion = "vertical";
                _this.isMobile = true;
            }
            else {
                _this.orientacion = "horizontal";
                _this.isMobile = false;
            }
        });
    };
    TablaLenguasIndigenasComponent.prototype.ngAfterViewInit = function () {
    };
    TablaLenguasIndigenasComponent.prototype.resetMenu = function () {
        var e;
        e = document.getElementsByClassName("menu-checkbox");
        for (var i = 0; i < e.length; i++) {
            e[i].checked = true;
        }
    };
    TablaLenguasIndigenasComponent.prototype.resetSymbols = function () {
        var e;
        for (var i = 1; i <= 5; i++) {
            e = document.getElementsByClassName("a" + i);
            for (var i_1 = 0; i_1 < e.length; i_1++) {
                e[i_1].checked = false;
            }
            e = document.getElementsByClassName("b" + i);
            for (var i_2 = 0; i_2 < e.length; i_2++) {
                e[i_2].checked = false;
            }
            e = document.getElementsByClassName("c" + i);
            for (var i_3 = 0; i_3 < e.length; i_3++) {
                e[i_3].checked = false;
            }
            e = document.getElementsByClassName("d" + i);
            for (var i_4 = 0; i_4 < e.length; i_4++) {
                e[i_4].checked = false;
            }
            e = document.getElementsByClassName("e" + i);
            for (var i_5 = 0; i_5 < e.length; i_5++) {
                e[i_5].checked = false;
            }
        }
        e = document.getElementsByClassName("group");
        for (var i = 0; i < e.length; i++) {
            e[i].classList.remove("shadow-green");
            e[i].classList.remove("shadow-green-light");
            e[i].classList.remove("shadow-yellow");
            e[i].classList.remove("shadow-orange");
            e[i].classList.remove("shadow-red");
        }
    };
    TablaLenguasIndigenasComponent.prototype.onSelectA = function (f) {
        //  this.resetSymbols();
        var e = document.getElementsByClassName(f.toLowerCase());
        for (var i = 0; i < e.length; i++) {
            e[i].classList.toggle("hide");
        }
        var className;
        if (f === "A1" || f === "B1" || f === "C1" || f === "D1" || f === "E1")
            className = "shadow-red";
        else if (f === "A2" || f === "B2" || f === "C2" || f === "D2" || f === "E2")
            className = "shadow-orange";
        else if (f === "A3" || f === "B3" || f === "C3" || f === "D3" || f === "E3")
            className = "shadow-yellow";
        else if (f === "A4" || f === "B4" || f === "C4" || f === "D4" || f === "E4")
            className = "shadow-green-light";
        else if (f === "A5" || f === "B5" || f === "C5" || f === "D5" || f === "E5")
            className = "shadow-green";
        var c = document.getElementsByClassName(f);
        for (var i = 0; i < c.length; i++) {
            c[i].classList.toggle(className);
        }
    };
    TablaLenguasIndigenasComponent.prototype.onSelectFamily = function (f) {
        var c = document.getElementsByClassName(f);
        for (var i = 0; i < c.length; i++) {
            c[i].classList.toggle("hide");
            if (this.showContainer && c[i].tagName == "LI")
                c[i].classList.toggle("hide-mobile");
        }
    };
    TablaLenguasIndigenasComponent.prototype.openTabPeriodicTablet = function (evt, tabName) {
        var i, tabLinks;
        tabLinks = document.getElementsByClassName("tab");
        for (i = 0; i < tabLinks.length; i++) {
            tabLinks[i].className = tabLinks[i].className.replace(" is-active", "");
        }
        //document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " is-active";
        if (tabName === "periodic-table-family")
            this.onViewFamily();
        else if (tabName === "periodic-table-population")
            this.onViewPopulation();
        else if (tabName === "periodic-table-migration")
            this.onViewMigration();
        else if (tabName === "periodic-table-rural-population")
            this.onViewPopulationRural();
        else if (tabName === "periodic-table-ire")
            this.onViewIRE();
        else if (tabName === "periodic-table-variantes")
            this.onViewVariantes();
        else if (tabName === "periodic-table-alphabet")
            this.onViewAlphabet();
    };
    TablaLenguasIndigenasComponent.prototype.openTabPeriodicTabletSymbols = function (evt, tabName) {
        var i, x, tabLinks;
        x = document.getElementsByClassName("content-tab-symbols");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        tabLinks = document.getElementsByClassName("tab-symbols");
        for (i = 0; i < x.length; i++) {
            tabLinks[i].className = tabLinks[i].className.replace(" is-active", "");
        }
        document.getElementById(tabName).style.display = "flex";
        evt.currentTarget.className += " is-active";
        this.resetSymbols();
        //if(tabName === "periodic-table-family-symbol-population")
    };
    TablaLenguasIndigenasComponent.prototype.onViewFamily = function () {
        this.typeClassTable = "periodic-table-family";
        this.resetMenu();
        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: show;");
        document.getElementsByClassName("periodic-table-symbols").item(0)
            .setAttribute("style", "display: show;");
        this.orderLanguagesBy(this.languages, COLUMNS.POSICION, ASC);
    };
    TablaLenguasIndigenasComponent.prototype.onViewAlphabet = function () {
        this.typeClassTable = "periodic-table-alphabet";
        this.resetMenu();
        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: visible;");
        document.getElementsByClassName("periodic-table-symbols").item(0)
            .setAttribute("style", "display: visible;");
        this.orderLanguagesBy(this.languages, COLUMNS.ID, ASC);
    };
    TablaLenguasIndigenasComponent.prototype.onViewVariantes = function () {
        this.typeClassTable = "periodic-table-variantes";
        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: none;");
        document.getElementsByClassName("periodic-table-symbols").item(0)
            .setAttribute("style", "display: none;");
        this.languagesColumnA = this.languages.filter(function (l) { return l[COLUMNS.GRUPO_DE_VARIANTES] === 5; });
        this.languagesColumnB = this.languages.filter(function (l) { return l[COLUMNS.GRUPO_DE_VARIANTES] === 4; });
        this.languagesColumnC = this.languages.filter(function (l) { return l[COLUMNS.GRUPO_DE_VARIANTES] === 3 || l[COLUMNS.GRUPO_DE_VARIANTES] === 2 || l[COLUMNS.GRUPO_DE_VARIANTES] === 1; });
        this.orderLanguagesBy(this.languagesColumnA, COLUMNS.ID, ASC);
        this.orderLanguagesBy(this.languagesColumnA, COLUMNS.NUMERO_DE_VARIANTES, DESC);
        this.orderLanguagesBy(this.languagesColumnB, COLUMNS.ID, ASC);
        this.orderLanguagesBy(this.languagesColumnB, COLUMNS.NUMERO_DE_VARIANTES, DESC);
        this.orderLanguagesBy(this.languagesColumnC, COLUMNS.NUMERO_DE_VARIANTES, DESC);
    };
    TablaLenguasIndigenasComponent.prototype.onViewPopulation = function () {
        this.typeClassTable = "periodic-table-population";
        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: none;");
        document.getElementsByClassName("periodic-table-symbols").item(0)
            .setAttribute("style", "display: none;");
        this.languagesColumnA = this.languages.filter(function (l) { return l[COLUMNS.GRUPOS_DE_POBLACION] === 5; });
        this.languagesColumnB = this.languages.filter(function (l) { return l[COLUMNS.GRUPOS_DE_POBLACION] === 4; });
        this.languagesColumnC = this.languages.filter(function (l) { return l[COLUMNS.GRUPOS_DE_POBLACION] === 3; });
        this.languagesColumnD = this.languages.filter(function (l) { return l[COLUMNS.GRUPOS_DE_POBLACION] === 2; });
        this.languagesColumnE = this.languages.filter(function (l) { return l[COLUMNS.GRUPOS_DE_POBLACION] === 1; });
        this.orderLanguagesBy(this.languagesColumnA, COLUMNS.POBLACION_INDIGENA, DESC);
        this.orderLanguagesBy(this.languagesColumnB, COLUMNS.POBLACION_INDIGENA, DESC);
        this.orderLanguagesBy(this.languagesColumnC, COLUMNS.POBLACION_INDIGENA, DESC);
        this.orderLanguagesBy(this.languagesColumnD, COLUMNS.POBLACION_INDIGENA, DESC);
        this.orderLanguagesBy(this.languagesColumnE, COLUMNS.POBLACION_INDIGENA, DESC);
    };
    TablaLenguasIndigenasComponent.prototype.onViewMigration = function () {
        this.typeClassTable = "periodic-table-migration";
        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: none;");
        document.getElementsByClassName("periodic-table-symbols").item(0)
            .setAttribute("style", "display: none;");
        this.languagesColumnA = this.languages.filter(function (l) { return l[COLUMNS.MIGRACION] === 5; });
        this.languagesColumnB = this.languages.filter(function (l) { return l[COLUMNS.MIGRACION] === 4; });
        this.languagesColumnC = this.languages.filter(function (l) { return l[COLUMNS.MIGRACION] === 3; });
        this.languagesColumnD = this.languages.filter(function (l) { return l[COLUMNS.MIGRACION] === 2; });
        this.languagesColumnE = this.languages.filter(function (l) { return l[COLUMNS.MIGRACION] === 1; });
        this.orderLanguagesBy(this.languagesColumnA, COLUMNS.PROMEDIO_DE_MIGRACION_TEMPORAL_Y_ABSOLUTA, DESC);
        this.orderLanguagesBy(this.languagesColumnB, COLUMNS.PROMEDIO_DE_MIGRACION_TEMPORAL_Y_ABSOLUTA, DESC);
        this.orderLanguagesBy(this.languagesColumnC, COLUMNS.PROMEDIO_DE_MIGRACION_TEMPORAL_Y_ABSOLUTA, DESC);
        this.orderLanguagesBy(this.languagesColumnD, COLUMNS.PROMEDIO_DE_MIGRACION_TEMPORAL_Y_ABSOLUTA, DESC);
        this.orderLanguagesBy(this.languagesColumnE, COLUMNS.PROMEDIO_DE_MIGRACION_TEMPORAL_Y_ABSOLUTA, DESC);
    };
    TablaLenguasIndigenasComponent.prototype.onViewPopulationRural = function () {
        this.typeClassTable = "periodic-table-rural";
        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: none;");
        document.getElementsByClassName("periodic-table-symbols").item(0)
            .setAttribute("style", "display: none;");
        this.languagesColumnA = this.languages.filter(function (l) { return l[COLUMNS.CINCO_GRUPOS_DE_POBLACION_RURAL] === 5; });
        this.languagesColumnB = this.languages.filter(function (l) { return l[COLUMNS.CINCO_GRUPOS_DE_POBLACION_RURAL] === 4; });
        this.languagesColumnC = this.languages.filter(function (l) { return l[COLUMNS.CINCO_GRUPOS_DE_POBLACION_RURAL] === 3; });
        this.languagesColumnD = this.languages.filter(function (l) { return l[COLUMNS.CINCO_GRUPOS_DE_POBLACION_RURAL] === 2; });
        this.languagesColumnE = this.languages.filter(function (l) { return l[COLUMNS.CINCO_GRUPOS_DE_POBLACION_RURAL] === 1; });
        this.orderLanguagesBy(this.languagesColumnA, COLUMNS.RURAL, DESC);
        this.orderLanguagesBy(this.languagesColumnB, COLUMNS.RURAL, DESC);
        this.orderLanguagesBy(this.languagesColumnC, COLUMNS.RURAL, DESC);
        this.orderLanguagesBy(this.languagesColumnD, COLUMNS.RURAL, DESC);
        this.orderLanguagesBy(this.languagesColumnE, COLUMNS.RURAL, DESC);
    };
    TablaLenguasIndigenasComponent.prototype.onViewIRE = function () {
        this.typeClassTable = "periodic-table-ire";
        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: none;");
        document.getElementsByClassName("periodic-table-symbols").item(0)
            .setAttribute("style", "display: none;");
        this.languagesColumnA = this.languages.filter(function (l) { return l[COLUMNS.GRUPO_IRE] === 5 || l[COLUMNS.GRUPO_IRE] === 4; });
        this.languagesColumnB = this.languages.filter(function (l) { return l[COLUMNS.GRUPO_IRE] === 3; });
        var yourArray = this.languages.filter(function (l) { return l[COLUMNS.GRUPO_IRE] === 2; });
        this.orderLanguagesBy(yourArray, COLUMNS.IRE, DESC);
        var halfWayThough = Math.floor(yourArray.length / 2);
        var arrayFirstHalf = yourArray.slice(0, halfWayThough);
        var arraySecondHalf = yourArray.slice(halfWayThough, yourArray.length);
        this.languagesColumnC = arrayFirstHalf;
        this.languagesColumnD = arraySecondHalf;
        this.languagesColumnE = this.languages.filter(function (l) { return l[COLUMNS.GRUPO_IRE] === 1; });
        this.orderLanguagesBy(this.languagesColumnA, COLUMNS.IRE, DESC);
        this.orderLanguagesBy(this.languagesColumnB, COLUMNS.IRE, DESC);
        this.orderLanguagesBy(this.languagesColumnC, COLUMNS.IRE, DESC);
        this.orderLanguagesBy(this.languagesColumnD, COLUMNS.IRE, DESC);
        this.orderLanguagesBy(this.languagesColumnE, COLUMNS.IRE, DESC);
    };
    TablaLenguasIndigenasComponent.prototype.onMenuMobile = function () {
        var inputValue = document.getElementById("menu-tabla-periodica-mobile").value;
        if (inputValue === "0") {
            this.orderLanguagesBy(this.languagesMobile, COLUMNS.POSICION, ASC);
            this.orderLanguagesBy(this.languagesMobile, COLUMNS.FAMILIA, ASC);
            this.typeClassTable = "periodic-table-family";
        }
        else if (inputValue === "1") {
            this.orderLanguagesBy(this.languagesMobile, COLUMNS.ID, ASC);
            this.typeClassTable = "periodic-table-alphabet";
        }
        else if (inputValue === "2") {
            this.orderLanguagesBy(this.languagesMobile, COLUMNS.ID, ASC);
            this.orderLanguagesBy(this.languagesMobile, COLUMNS.NUMERO_DE_VARIANTES, DESC);
            this.typeClassTable = "periodic-table-variantes";
        }
        else if (inputValue === "3") {
            this.orderLanguagesBy(this.languagesMobile, COLUMNS.ID, ASC);
            this.orderLanguagesBy(this.languagesMobile, COLUMNS.POBLACION_INDIGENA, DESC);
            this.typeClassTable = "periodic-table-population";
        }
        else if (inputValue === "4") {
            this.orderLanguagesBy(this.languagesMobile, COLUMNS.ID, ASC);
            this.orderLanguagesBy(this.languagesMobile, COLUMNS.MIGRACION, DESC);
            this.typeClassTable = "periodic-table-migration";
        }
        else if (inputValue === "5") {
            this.orderLanguagesBy(this.languagesMobile, COLUMNS.IRE, DESC);
            this.orderLanguagesBy(this.languagesMobile, COLUMNS.RURAL, DESC);
            this.typeClassTable = "periodic-table-rural";
        }
        else if (inputValue === "6") {
            this.orderLanguagesBy(this.languagesMobile, COLUMNS.ID, ASC);
            this.orderLanguagesBy(this.languagesMobile, COLUMNS.IRE, DESC);
            this.typeClassTable = "periodic-table-ire";
        }
    };
    TablaLenguasIndigenasComponent.prototype.onViewSymbolsPopulation = function () {
        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: none;");
    };
    TablaLenguasIndigenasComponent.prototype.onViewLanguage = function (lengua) {
        var c = document.getElementById("modal-info");
        c.classList.toggle("is-active");
        document.getElementsByTagName("html")[0].style.overflowY = "hidden";
        this.nombre = lengua[COLUMNS.LENGUA];
        this.clase = lengua[COLUMNS.CLASE_HTML];
        this.familia = lengua[COLUMNS.FAMILIA];
        this.simbolo = lengua[COLUMNS.CVE_LEN];
        var str = lengua[COLUMNS.VARIANTES];
        //this.descripcion = "";
        this.claveFamilia = lengua[COLUMNS.CVE_FAM];
        this.poblacion = lengua[COLUMNS.POBLACION_INDIGENA];
        this.categoriaPoblacion = lengua[COLUMNS.CATEGORIA];
        this.migracion = lengua[COLUMNS.MIGRACION];
        this.categoriaMigracion = lengua[COLUMNS.CATEGORIA_MIGRACION];
        this.rural = lengua[COLUMNS.RURAL];
        this.ruralMigracion = lengua[COLUMNS.CATEGORIA_POBLACION_RURAL];
        this.ire = lengua[COLUMNS.IRE];
        this.ireMigracion = lengua[COLUMNS.GRADO];
        this.numeroVariantes = lengua[COLUMNS.NUMERO_DE_VARIANTES];
        if (this.numeroVariantes > 0)
            this.variantes = str.split("\n");
        else
            this.variantes = [];
        //this.descripcion = this.sanitizer.bypassSecurityTrustHtml(language.descripcion).toString();
    };
    TablaLenguasIndigenasComponent.prototype.viewMenu = function () {
        console.log(document.getElementsByTagName("html")[0].style.overflowY);
        if (document.getElementsByTagName("html")[0].style.overflowY == "" ||
            document.getElementsByTagName("html")[0].style.overflowY == "auto")
            document.getElementsByTagName("html")[0].style.overflowY = "hidden";
        else
            document.getElementsByTagName("html")[0].style.overflowY = "auto";
        document.getElementById("modal-menu").classList.toggle("is-active");
        document.getElementById('nav-menu').classList.toggle('menu-vertical');
        document.getElementById('button-menu').classList.toggle('is-active');
    };
    TablaLenguasIndigenasComponent.prototype.viewImage = function () {
        this.onCloseLanguage();
        var c = document.getElementById("modal-image");
        c.classList.toggle("is-active");
        document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    };
    TablaLenguasIndigenasComponent.prototype.viewInfo = function (info) {
        this.info = info;
        document.getElementsByTagName("html")[0].style.overflowY = "hidden";
        var c = document.getElementById("modal-info-periodic-table");
        c.classList.toggle("is-active");
    };
    TablaLenguasIndigenasComponent.prototype.viewLenguasExtintas = function () {
        var c = document.getElementById("modal-obituario");
        c.classList.toggle("is-active");
        document.getElementsByTagName("html")[0].style.overflowY = "hidden";
        document.getElementById("modal-menu").classList.toggle("is-active");
        document.getElementById('nav-menu').classList.toggle('menu-vertical');
        document.getElementById('button-menu').classList.toggle('is-active');
    };
    TablaLenguasIndigenasComponent.prototype.onCloseLanguage = function () {
        var c = document.getElementById("modal-info");
        c.classList.toggle("is-active");
        document.getElementsByTagName("html")[0].style.overflowY = "auto";
    };
    TablaLenguasIndigenasComponent.prototype.onCloseImage = function () {
        var c = document.getElementById("modal-image");
        c.classList.toggle("is-active");
        document.getElementsByTagName("html")[0].style.overflowY = "auto";
    };
    TablaLenguasIndigenasComponent.prototype.onCloseInfo = function () {
        var c = document.getElementById("modal-info-periodic-table");
        c.classList.toggle("is-active");
        document.getElementsByTagName("html")[0].style.overflowY = "auto";
    };
    TablaLenguasIndigenasComponent.prototype.onCloseLanguasExtintas = function () {
        var c = document.getElementById("modal-obituario");
        c.classList.toggle("is-active");
        document.getElementsByTagName("html")[0].style.overflowY = "auto";
        document.getElementsByTagName("html")[0].style.overflowY = "auto";
    };
    // public orderByPosicion() {
    //     TablaLenguasIndigenasComponent.typePeriodicTable();
    //     this.orderLanguagesBy(COLUMNS.POSICION, ASC);
    // }
    //
    // public orderByLengua() {
    //     TablaLenguasIndigenasComponent.typeGrid();
    //     this.orderLanguagesBy(COLUMNS.LENGUA, ASC);
    // }
    //
    // public orderByPoblacion() {
    //     TablaLenguasIndigenasComponent.typeGrid();
    //     this.orderLanguagesBy(COLUMNS.TOTAL_DE_POBLACION, ASC);
    // }
    // private filterChanged(selectedValue: string) {
    //     if (selectedValue === 'familias') {
    //         this.orderByPosicion();
    //     } else if (selectedValue === 'language') {
    //         this.orderByLengua();
    //     } else if (selectedValue === 'poblacion') {
    //         this.orderByPoblacion();
    //     }
    // }
    TablaLenguasIndigenasComponent.prototype.orderLanguagesBy = function (array, pos, order) {
        if (order === DESC) {
            array.sort(function (a, b) {
                if (a[pos] < b[pos])
                    return 1;
                if (a[pos] > b[pos])
                    return -1;
                return 0;
            });
        }
        else {
            array.sort(function (a, b) {
                if (a[pos] < b[pos])
                    return -1;
                if (a[pos] > b[pos])
                    return 1;
                return 0;
            });
        }
    };
    TablaLenguasIndigenasComponent = __decorate([
        core_1.Component({
            selector: 'app-tabla-lenguas-indigenas',
            template: __webpack_require__(/*! ./tabla-lenguas-indigenas.component.html */ "./src/app/tabla-lenguas-indigenas/tabla-lenguas-indigenas.component.html"),
            styles: [__webpack_require__(/*! ./tabla-lenguas-indigenas.component.css */ "./src/app/tabla-lenguas-indigenas/tabla-lenguas-indigenas.component.css"), __webpack_require__(/*! ./media-queries.css */ "./src/app/tabla-lenguas-indigenas/media-queries.css")]
        }),
        __metadata("design:paramtypes", [lenguas_data_service_1.LenguasDataService, platform_browser_1.DomSanitizer,
            layout_1.BreakpointObserver])
    ], TablaLenguasIndigenasComponent);
    return TablaLenguasIndigenasComponent;
}());
exports.TablaLenguasIndigenasComponent = TablaLenguasIndigenasComponent;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./polyfills */ "./src/polyfills.ts");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(function (ref) {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
}).catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
Object.defineProperty(exports, "__esModule", { value: true });
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
__webpack_require__(/*! core-js/es6/reflect */ "./node_modules/core-js/es6/reflect.js");
__webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
__webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js"); // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rigoberto/Documentos/github.com/rigobertocanseco/tabla-lenguas-indigenas-angular/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map