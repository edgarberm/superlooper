'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* @class
* Provide infinite loop pagination for Arrays.
* @author: Edgar Bermejo @BuiltByEdgar
* @contributor: Rafa Torres @TorresMalpartida
**/

var Superlooper = function () {

  /**
  * constructor
  * @param {Array} data Array
  * @param {Number} Optional. items to show per page
  **/

  function Superlooper(data) {
    var perPage = arguments.length <= 1 || arguments[1] === undefined ? 3 : arguments[1];

    _classCallCheck(this, Superlooper);

    if (!data) throw new Error('I need an Array to work dude!');
    if (!(data instanceof Array)) throw new Error('Invalid data type. Expected an Array');

    this.data = data;
    this.num = perPage;
    this.index = 0;
    this.len = this.data.length;
  }

  /**
  * Pagination logic.
  * @param {Number} any number
  * @return {Array} corresponding `data` items to show
  **/


  _createClass(Superlooper, [{
    key: 'page',
    value: function page(direction) {
      this.index = this.index + direction;
      var res = [];
      for (var i = 0; i < this.num; i++) {
        var aux = this.index + i;
        aux = this.normalize(aux);
        res.push(this.data[aux]);
      }
      return res;
    }

    /**
    * Normalize pagination index
    * @param {Number} any number
    * @return {Number} corresponding index to `data` Array
    **/

  }, {
    key: 'normalize',
    value: function normalize(i) {
      switch (Math.sign(i % this.len)) {
        case 1:
          return i % this.len;
          break;
        case -1:
          return this.len + i % this.len;
          break;
        default:
          return 0;
          break;
      }
    }

    /**
    * API methods
    **/

  }, {
    key: 'initialize',
    value: function initialize() {
      return this.page(0);
    } // Returns page 0

  }, {
    key: 'next',
    value: function next() {
      return this.page(1);
    }
  }, {
    key: 'prev',
    value: function prev() {
      return this.page(-1);
    }
  }, {
    key: 'goTo',
    value: function goTo(index) {
      return this.page(this.normalize(index - this.index));
    } // Returns corresponding index page

  }]);

  return Superlooper;
}();

exports.default = Superlooper;
