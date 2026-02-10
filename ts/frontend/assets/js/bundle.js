/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/A0020-exercicio/form-control.ts"
/*!*********************************************!*\
  !*** ./src/A0020-exercicio/form-control.ts ***!
  \*********************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const isEmail_1 = __importDefault(__webpack_require__(/*! validator/lib/isEmail */ "./node_modules/validator/lib/isEmail.js"));
const SHOW_ERROR_MESSAGES = 'show-error-message';
const form = document.querySelector('.form');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const password2 = document.querySelector('.password2');
const valida = [username, email, password, password2];
form.addEventListener('submit', function (event) {
    event.preventDefault();
    hideErrorMessages(this);
    checkForEmptyFields(valida);
    checkEmail(email);
    checkPasswords(password, password2);
    if (shouldSendForm(this))
        console.log("Formulario enviado");
});
function checkForEmptyFields(input) {
    for (let i = 0; i < input.length; i++) {
        if (!input[i].value) {
            showErrorMessage(input[i], "Os campos nao podem ficar vazios");
        }
    }
}
function checkEmail(input) {
    if (!(0, isEmail_1.default)(input.value))
        showErrorMessage(input, "Email invalido");
}
function checkPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        showErrorMessage(input1, "Senhas devem coincidir");
        showErrorMessage(input2, "Senhas devem coincidir");
    }
}
function hideErrorMessages(form) {
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(item => item.classList.remove(SHOW_ERROR_MESSAGES));
}
function showErrorMessage(input, msg) {
    const formFields = input.parentElement;
    const errorMessage = formFields.querySelector('.error-message');
    ;
    errorMessage.innerText = msg;
    formFields.classList.add(SHOW_ERROR_MESSAGES);
}
function shouldSendForm(form) {
    let send = true;
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(() => (send = false));
    return send;
}


/***/ },

/***/ "./node_modules/validator/lib/isByteLength.js"
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isByteLength.js ***!
  \****************************************************/
(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isByteLength;
var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString.default)(str);
  var min;
  var max;
  if (_typeof(options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports.default;
module.exports["default"] = exports.default;

/***/ },

/***/ "./node_modules/validator/lib/isEmail.js"
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isEmail.js ***!
  \***********************************************/
(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isEmail;
var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));
var _checkHost = _interopRequireDefault(__webpack_require__(/*! ./util/checkHost */ "./node_modules/validator/lib/util/checkHost.js"));
var _isByteLength = _interopRequireDefault(__webpack_require__(/*! ./isByteLength */ "./node_modules/validator/lib/isByteLength.js"));
var _isFQDN = _interopRequireDefault(__webpack_require__(/*! ./isFQDN */ "./node_modules/validator/lib/isFQDN.js"));
var _isIP = _interopRequireDefault(__webpack_require__(/*! ./isIP */ "./node_modules/validator/lib/isIP.js"));
var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var default_email_options = {
  allow_display_name: false,
  allow_underscores: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true,
  blacklisted_chars: '',
  ignore_max_length: false,
  host_blacklist: [],
  host_whitelist: []
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var gmailUserPart = /^[a-z\d]+$/;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
var defaultMaxEmailLength = 254;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

/**
 * Validate display name according to the RFC2822: https://tools.ietf.org/html/rfc2822#appendix-A.1.2
 * @param {String} display_name
 */
function validateDisplayName(display_name) {
  var display_name_without_quotes = display_name.replace(/^"(.+)"$/, '$1');
  // display name with only spaces is not valid
  if (!display_name_without_quotes.trim()) {
    return false;
  }

  // check whether display name contains illegal character
  var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);
  if (contains_illegal) {
    // if contains illegal characters,
    // must to be enclosed in double-quotes, otherwise it's not a valid display name
    if (display_name_without_quotes === display_name) {
      return false;
    }

    // the quotes in display name must start with character symbol \
    var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;
    if (!all_start_with_back_slash) {
      return false;
    }
  }
  return true;
}
function isEmail(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_email_options);
  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(splitNameAddress);
    if (display_email) {
      var display_name = display_email[1];

      // Remove display name and angle brackets to get email address
      // Can be done in the regex but will introduce a ReDOS (See  #1597 for more info)
      str = str.replace(display_name, '').replace(/(^<|>$)/g, '');

      // sometimes need to trim the last space to get the display name
      // because there may be a space between display name and email address
      // eg. myname <address@gmail.com>
      // the display name is `myname` instead of `myname `, so need to trim the last space
      if (display_name.endsWith(' ')) {
        display_name = display_name.slice(0, -1);
      }
      if (!validateDisplayName(display_name)) {
        return false;
      }
    } else if (options.require_display_name) {
      return false;
    }
  }
  if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
    return false;
  }
  var parts = str.split('@');
  var domain = parts.pop();
  var lower_domain = domain.toLowerCase();
  if (options.host_blacklist.length > 0 && (0, _checkHost.default)(lower_domain, options.host_blacklist)) {
    return false;
  }
  if (options.host_whitelist.length > 0 && !(0, _checkHost.default)(lower_domain, options.host_whitelist)) {
    return false;
  }
  var user = parts.join('@');
  if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {
    /*
    Previously we removed dots for gmail addresses before validating.
    This was removed because it allows `multiple..dots@gmail.com`
    to be reported as valid, but it is not.
    Gmail only normalizes single dots, removing them from here is pointless,
    should be done in normalizeEmail
    */
    user = user.toLowerCase();

    // Removing sub-address from username before gmail validation
    var username = user.split('+')[0];

    // Dots are not included in gmail length restriction
    if (!(0, _isByteLength.default)(username.replace(/\./g, ''), {
      min: 6,
      max: 30
    })) {
      return false;
    }
    var _user_parts = username.split('.');
    for (var i = 0; i < _user_parts.length; i++) {
      if (!gmailUserPart.test(_user_parts[i])) {
        return false;
      }
    }
  }
  if (options.ignore_max_length === false && (!(0, _isByteLength.default)(user, {
    max: 64
  }) || !(0, _isByteLength.default)(domain, {
    max: 254
  }))) {
    return false;
  }
  if (!(0, _isFQDN.default)(domain, {
    require_tld: options.require_tld,
    ignore_max_length: options.ignore_max_length,
    allow_underscores: options.allow_underscores
  })) {
    if (!options.allow_ip_domain) {
      return false;
    }
    if (!(0, _isIP.default)(domain)) {
      if (!domain.startsWith('[') || !domain.endsWith(']')) {
        return false;
      }
      var noBracketdomain = domain.slice(1, -1);
      if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {
        return false;
      }
    }
  }
  if (options.blacklisted_chars) {
    if (user.search(new RegExp("[".concat(options.blacklisted_chars, "]+"), 'g')) !== -1) return false;
  }
  if (user[0] === '"' && user[user.length - 1] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }
  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
  var user_parts = user.split('.');
  for (var _i = 0; _i < user_parts.length; _i++) {
    if (!pattern.test(user_parts[_i])) {
      return false;
    }
  }
  return true;
}
module.exports = exports.default;
module.exports["default"] = exports.default;

/***/ },

/***/ "./node_modules/validator/lib/isFQDN.js"
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isFQDN.js ***!
  \**********************************************/
(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isFQDN;
var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));
var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_numeric_tld: false,
  allow_wildcard: false,
  ignore_max_length: false
};
function isFQDN(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }

  /* Remove the optional wildcard before checking validity */
  if (options.allow_wildcard === true && str.indexOf('*.') === 0) {
    str = str.substring(2);
  }
  var parts = str.split('.');
  var tld = parts[parts.length - 1];
  if (options.require_tld) {
    // disallow fqdns without tld
    if (parts.length < 2) {
      return false;
    }
    if (!options.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }

    // disallow spaces
    if (/\s/.test(tld)) {
      return false;
    }
  }

  // reject numeric TLDs
  if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
    return false;
  }
  return parts.every(function (part) {
    if (part.length > 63 && !options.ignore_max_length) {
      return false;
    }
    if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }

    // disallow full-width chars
    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }

    // disallow parts starting or ending with hyphen
    if (/^-|-$/.test(part)) {
      return false;
    }
    if (!options.allow_underscores && /_/.test(part)) {
      return false;
    }
    return true;
  });
}
module.exports = exports.default;
module.exports["default"] = exports.default;

/***/ },

/***/ "./node_modules/validator/lib/isIP.js"
/*!********************************************!*\
  !*** ./node_modules/validator/lib/isIP.js ***!
  \********************************************/
(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isIP;
var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
11.3.  Examples

   The following addresses

             fe80::1234 (on the 1st link of the node)
             ff02::5678 (on the 5th link of the node)
             ff08::9abc (on the 10th organization of the node)

   would be represented as follows:

             fe80::1234%1
             ff02::5678%5
             ff08::9abc%10

   (Here we assume a natural translation from a zone index to the
   <zone_id> part, where the Nth zone of any scope is translated into
   "N".)

   If we use interface names as <zone_id>, those addresses could also be
   represented as follows:

            fe80::1234%ne0
            ff02::5678%pvc1.3
            ff08::9abc%interface10

   where the interface "ne0" belongs to the 1st link, "pvc1.3" belongs
   to the 5th link, and "interface10" belongs to the 10th organization.
 * * */
var IPv4SegmentFormat = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
var IPv6SegmentFormat = '(?:[0-9a-fA-F]{1,4})';
var IPv6AddressRegExp = new RegExp('^(' + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ')(%[0-9a-zA-Z.]{1,})?$');
function isIP(ipAddress) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0, _assertString.default)(ipAddress);

  // accessing 'arguments' for backwards compatibility: isIP(ipAddress [, version])
  // eslint-disable-next-line prefer-rest-params
  var version = (_typeof(options) === 'object' ? options.version : arguments[1]) || '';
  if (!version) {
    return isIP(ipAddress, {
      version: 4
    }) || isIP(ipAddress, {
      version: 6
    });
  }
  if (version.toString() === '4') {
    return IPv4AddressRegExp.test(ipAddress);
  }
  if (version.toString() === '6') {
    return IPv6AddressRegExp.test(ipAddress);
  }
  return false;
}
module.exports = exports.default;
module.exports["default"] = exports.default;

/***/ },

/***/ "./node_modules/validator/lib/util/assertString.js"
/*!*********************************************************!*\
  !*** ./node_modules/validator/lib/util/assertString.js ***!
  \*********************************************************/
(module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = assertString;
function assertString(input) {
  if (input === undefined || input === null) throw new TypeError("Expected a string but received a ".concat(input));
  if (input.constructor.name !== 'String') throw new TypeError("Expected a string but received a ".concat(input.constructor.name));
}
module.exports = exports.default;
module.exports["default"] = exports.default;

/***/ },

/***/ "./node_modules/validator/lib/util/checkHost.js"
/*!******************************************************!*\
  !*** ./node_modules/validator/lib/util/checkHost.js ***!
  \******************************************************/
(module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = checkHost;
function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}
function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }
  return false;
}
module.exports = exports.default;
module.exports["default"] = exports.default;

/***/ },

/***/ "./node_modules/validator/lib/util/merge.js"
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/util/merge.js ***!
  \**************************************************/
(module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = merge;
function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments.length > 1 ? arguments[1] : undefined;
  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
module.exports = exports.default;
module.exports["default"] = exports.default;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**************************************!*\
  !*** ./src/A0020-exercicio/index.ts ***!
  \**************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./form-control */ "./src/A0020-exercicio/form-control.ts");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBc0IsbUI7Ozs7Ozs7Ozs7QUNsRVQ7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXNCLG1COzs7Ozs7Ozs7O0FDWFQ7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFzQixtQjs7Ozs7Ozs7OztBQ25CVDs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBc0IsbUI7Ozs7OztVQ2pCdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDNUJBLG1GQUF1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLy4vc3JjL0EwMDIwLWV4ZXJjaWNpby9mb3JtLWNvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vdHMvLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0J5dGVMZW5ndGguanMiLCJ3ZWJwYWNrOi8vdHMvLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0VtYWlsLmpzIiwid2VicGFjazovL3RzLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNGUUROLmpzIiwid2VicGFjazovL3RzLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNJUC5qcyIsIndlYnBhY2s6Ly90cy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3V0aWwvYXNzZXJ0U3RyaW5nLmpzIiwid2VicGFjazovL3RzLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdXRpbC9jaGVja0hvc3QuanMiLCJ3ZWJwYWNrOi8vdHMvLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi91dGlsL21lcmdlLmpzIiwid2VicGFjazovL3RzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLy4vc3JjL0EwMDIwLWV4ZXJjaWNpby9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNFbWFpbCBmcm9tIFwidmFsaWRhdG9yL2xpYi9pc0VtYWlsXCI7XG5cblxuY29uc3QgU0hPV19FUlJPUl9NRVNTQUdFUyA9ICdzaG93LWVycm9yLW1lc3NhZ2UnO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG5jb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VybmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBwYXNzd29yZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmQyJykgYXMgSFRNTElucHV0RWxlbWVudDtcblxuY29uc3QgdmFsaWRhOkFycmF5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gW3VzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHBhc3N3b3JkMl07XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQ6IEV2ZW50KXtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgaGlkZUVycm9yTWVzc2FnZXModGhpcyk7XG4gIGNoZWNrRm9yRW1wdHlGaWVsZHModmFsaWRhKTtcbiAgY2hlY2tFbWFpbChlbWFpbCk7XG4gIGNoZWNrUGFzc3dvcmRzKHBhc3N3b3JkLCBwYXNzd29yZDIpO1xuICBpZihzaG91bGRTZW5kRm9ybSh0aGlzKSkgY29uc29sZS5sb2coXCJGb3JtdWxhcmlvIGVudmlhZG9cIik7XG59KTtcblxuZnVuY3Rpb24gY2hlY2tGb3JFbXB0eUZpZWxkcyhpbnB1dDpBcnJheTxIVE1MSW5wdXRFbGVtZW50Pik6dm9pZHtcbiAgZm9yKGxldCBpID0gMDtpIDwgaW5wdXQubGVuZ3RoO2krKyl7XG4gICAgaWYoIWlucHV0W2ldLnZhbHVlKXtcbiAgICAgIHNob3dFcnJvck1lc3NhZ2UoaW5wdXRbaV0sIFwiT3MgY2FtcG9zIG5hbyBwb2RlbSBmaWNhciB2YXppb3NcIik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRW1haWwoaW5wdXQ6SFRNTElucHV0RWxlbWVudCk6dm9pZHtcbiAgaWYoIWlzRW1haWwoaW5wdXQudmFsdWUpKSBzaG93RXJyb3JNZXNzYWdlKGlucHV0LCBcIkVtYWlsIGludmFsaWRvXCIpO1xufVxuXG5mdW5jdGlvbiBjaGVja1Bhc3N3b3JkcyhpbnB1dDE6SFRNTElucHV0RWxlbWVudCwgaW5wdXQyOkhUTUxJbnB1dEVsZW1lbnQpOiB2b2lke1xuICBpZihpbnB1dDEudmFsdWUgIT09IGlucHV0Mi52YWx1ZSl7XG4gICAgc2hvd0Vycm9yTWVzc2FnZShpbnB1dDEsIFwiU2VuaGFzIGRldmVtIGNvaW5jaWRpclwiKVxuICAgIHNob3dFcnJvck1lc3NhZ2UoaW5wdXQyLCBcIlNlbmhhcyBkZXZlbSBjb2luY2lkaXJcIilcbiAgfVxufVxuXG5mdW5jdGlvbiBoaWRlRXJyb3JNZXNzYWdlcyhmb3JtOiBIVE1MRm9ybUVsZW1lbnQpOiB2b2lke1xuICBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgU0hPV19FUlJPUl9NRVNTQUdFUykuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShTSE9XX0VSUk9SX01FU1NBR0VTKSk7XG59XG5cblxuXG5mdW5jdGlvbiBzaG93RXJyb3JNZXNzYWdlKGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LCBtc2c6c3RyaW5nKTogdm9pZHtcbiAgY29uc3QgZm9ybUZpZWxkcyA9IGlucHV0LnBhcmVudEVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IGZvcm1GaWVsZHMucXVlcnlTZWxlY3RvcignLmVycm9yLW1lc3NhZ2UnKSBhcyBIVE1MU3BhbkVsZW1lbnQ7O1xuICBlcnJvck1lc3NhZ2UuaW5uZXJUZXh0ID0gbXNnO1xuICBmb3JtRmllbGRzLmNsYXNzTGlzdC5hZGQoU0hPV19FUlJPUl9NRVNTQUdFUyk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFNlbmRGb3JtKGZvcm06SFRNTEZvcm1FbGVtZW50KTogYm9vbGVhbntcbiAgbGV0IHNlbmQgPSB0cnVlO1xuICBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgU0hPV19FUlJPUl9NRVNTQUdFUykuZm9yRWFjaCgoKSA9PiAoc2VuZCA9IGZhbHNlKSk7XG4gIHJldHVybiBzZW5kO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQnl0ZUxlbmd0aDtcbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItcmVzdC1wYXJhbXMgKi9cbmZ1bmN0aW9uIGlzQnl0ZUxlbmd0aChzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIG1pbjtcbiAgdmFyIG1heDtcbiAgaWYgKF90eXBlb2Yob3B0aW9ucykgPT09ICdvYmplY3QnKSB7XG4gICAgbWluID0gb3B0aW9ucy5taW4gfHwgMDtcbiAgICBtYXggPSBvcHRpb25zLm1heDtcbiAgfSBlbHNlIHtcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eTogaXNCeXRlTGVuZ3RoKHN0ciwgbWluIFssIG1heF0pXG4gICAgbWluID0gYXJndW1lbnRzWzFdO1xuICAgIG1heCA9IGFyZ3VtZW50c1syXTtcbiAgfVxuICB2YXIgbGVuID0gZW5jb2RlVVJJKHN0cikuc3BsaXQoLyUuLnwuLykubGVuZ3RoIC0gMTtcbiAgcmV0dXJuIGxlbiA+PSBtaW4gJiYgKHR5cGVvZiBtYXggPT09ICd1bmRlZmluZWQnIHx8IGxlbiA8PSBtYXgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNFbWFpbDtcbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG52YXIgX2NoZWNrSG9zdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9jaGVja0hvc3RcIikpO1xudmFyIF9pc0J5dGVMZW5ndGggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2lzQnl0ZUxlbmd0aFwiKSk7XG52YXIgX2lzRlFETiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXNGUUROXCIpKTtcbnZhciBfaXNJUCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXNJUFwiKSk7XG52YXIgX21lcmdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL21lcmdlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbnZhciBkZWZhdWx0X2VtYWlsX29wdGlvbnMgPSB7XG4gIGFsbG93X2Rpc3BsYXlfbmFtZTogZmFsc2UsXG4gIGFsbG93X3VuZGVyc2NvcmVzOiBmYWxzZSxcbiAgcmVxdWlyZV9kaXNwbGF5X25hbWU6IGZhbHNlLFxuICBhbGxvd191dGY4X2xvY2FsX3BhcnQ6IHRydWUsXG4gIHJlcXVpcmVfdGxkOiB0cnVlLFxuICBibGFja2xpc3RlZF9jaGFyczogJycsXG4gIGlnbm9yZV9tYXhfbGVuZ3RoOiBmYWxzZSxcbiAgaG9zdF9ibGFja2xpc3Q6IFtdLFxuICBob3N0X3doaXRlbGlzdDogW11cbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cbnZhciBzcGxpdE5hbWVBZGRyZXNzID0gL14oW15cXHgwMC1cXHgxRlxceDdGLVxceDlGXFxjWF0rKTwvaTtcbnZhciBlbWFpbFVzZXJQYXJ0ID0gL15bYS16XFxkISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5dKyQvaTtcbnZhciBnbWFpbFVzZXJQYXJ0ID0gL15bYS16XFxkXSskLztcbnZhciBxdW90ZWRFbWFpbFVzZXIgPSAvXihbXFxzXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHg3ZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3ZV18KFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGQtXFx4N2ZdKSkqJC9pO1xudmFyIGVtYWlsVXNlclV0ZjhQYXJ0ID0gL15bYS16XFxkISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5cXHUwMEExLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKyQvaTtcbnZhciBxdW90ZWRFbWFpbFVzZXJVdGY4ID0gL14oW1xcc1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4N2ZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2VcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdfChcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBkLVxceDdmXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKiQvaTtcbnZhciBkZWZhdWx0TWF4RW1haWxMZW5ndGggPSAyNTQ7XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1lbmFibGUgbm8tY29udHJvbC1yZWdleCAqL1xuXG4vKipcbiAqIFZhbGlkYXRlIGRpc3BsYXkgbmFtZSBhY2NvcmRpbmcgdG8gdGhlIFJGQzI4MjI6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyODIyI2FwcGVuZGl4LUEuMS4yXG4gKiBAcGFyYW0ge1N0cmluZ30gZGlzcGxheV9uYW1lXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlRGlzcGxheU5hbWUoZGlzcGxheV9uYW1lKSB7XG4gIHZhciBkaXNwbGF5X25hbWVfd2l0aG91dF9xdW90ZXMgPSBkaXNwbGF5X25hbWUucmVwbGFjZSgvXlwiKC4rKVwiJC8sICckMScpO1xuICAvLyBkaXNwbGF5IG5hbWUgd2l0aCBvbmx5IHNwYWNlcyBpcyBub3QgdmFsaWRcbiAgaWYgKCFkaXNwbGF5X25hbWVfd2l0aG91dF9xdW90ZXMudHJpbSgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gY2hlY2sgd2hldGhlciBkaXNwbGF5IG5hbWUgY29udGFpbnMgaWxsZWdhbCBjaGFyYWN0ZXJcbiAgdmFyIGNvbnRhaW5zX2lsbGVnYWwgPSAvW1xcLlwiOzw+XS8udGVzdChkaXNwbGF5X25hbWVfd2l0aG91dF9xdW90ZXMpO1xuICBpZiAoY29udGFpbnNfaWxsZWdhbCkge1xuICAgIC8vIGlmIGNvbnRhaW5zIGlsbGVnYWwgY2hhcmFjdGVycyxcbiAgICAvLyBtdXN0IHRvIGJlIGVuY2xvc2VkIGluIGRvdWJsZS1xdW90ZXMsIG90aGVyd2lzZSBpdCdzIG5vdCBhIHZhbGlkIGRpc3BsYXkgbmFtZVxuICAgIGlmIChkaXNwbGF5X25hbWVfd2l0aG91dF9xdW90ZXMgPT09IGRpc3BsYXlfbmFtZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHRoZSBxdW90ZXMgaW4gZGlzcGxheSBuYW1lIG11c3Qgc3RhcnQgd2l0aCBjaGFyYWN0ZXIgc3ltYm9sIFxcXG4gICAgdmFyIGFsbF9zdGFydF93aXRoX2JhY2tfc2xhc2ggPSBkaXNwbGF5X25hbWVfd2l0aG91dF9xdW90ZXMuc3BsaXQoJ1wiJykubGVuZ3RoID09PSBkaXNwbGF5X25hbWVfd2l0aG91dF9xdW90ZXMuc3BsaXQoJ1xcXFxcIicpLmxlbmd0aDtcbiAgICBpZiAoIWFsbF9zdGFydF93aXRoX2JhY2tfc2xhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBpc0VtYWlsKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gKDAsIF9tZXJnZS5kZWZhdWx0KShvcHRpb25zLCBkZWZhdWx0X2VtYWlsX29wdGlvbnMpO1xuICBpZiAob3B0aW9ucy5yZXF1aXJlX2Rpc3BsYXlfbmFtZSB8fCBvcHRpb25zLmFsbG93X2Rpc3BsYXlfbmFtZSkge1xuICAgIHZhciBkaXNwbGF5X2VtYWlsID0gc3RyLm1hdGNoKHNwbGl0TmFtZUFkZHJlc3MpO1xuICAgIGlmIChkaXNwbGF5X2VtYWlsKSB7XG4gICAgICB2YXIgZGlzcGxheV9uYW1lID0gZGlzcGxheV9lbWFpbFsxXTtcblxuICAgICAgLy8gUmVtb3ZlIGRpc3BsYXkgbmFtZSBhbmQgYW5nbGUgYnJhY2tldHMgdG8gZ2V0IGVtYWlsIGFkZHJlc3NcbiAgICAgIC8vIENhbiBiZSBkb25lIGluIHRoZSByZWdleCBidXQgd2lsbCBpbnRyb2R1Y2UgYSBSZURPUyAoU2VlICAjMTU5NyBmb3IgbW9yZSBpbmZvKVxuICAgICAgc3RyID0gc3RyLnJlcGxhY2UoZGlzcGxheV9uYW1lLCAnJykucmVwbGFjZSgvKF48fD4kKS9nLCAnJyk7XG5cbiAgICAgIC8vIHNvbWV0aW1lcyBuZWVkIHRvIHRyaW0gdGhlIGxhc3Qgc3BhY2UgdG8gZ2V0IHRoZSBkaXNwbGF5IG5hbWVcbiAgICAgIC8vIGJlY2F1c2UgdGhlcmUgbWF5IGJlIGEgc3BhY2UgYmV0d2VlbiBkaXNwbGF5IG5hbWUgYW5kIGVtYWlsIGFkZHJlc3NcbiAgICAgIC8vIGVnLiBteW5hbWUgPGFkZHJlc3NAZ21haWwuY29tPlxuICAgICAgLy8gdGhlIGRpc3BsYXkgbmFtZSBpcyBgbXluYW1lYCBpbnN0ZWFkIG9mIGBteW5hbWUgYCwgc28gbmVlZCB0byB0cmltIHRoZSBsYXN0IHNwYWNlXG4gICAgICBpZiAoZGlzcGxheV9uYW1lLmVuZHNXaXRoKCcgJykpIHtcbiAgICAgICAgZGlzcGxheV9uYW1lID0gZGlzcGxheV9uYW1lLnNsaWNlKDAsIC0xKTtcbiAgICAgIH1cbiAgICAgIGlmICghdmFsaWRhdGVEaXNwbGF5TmFtZShkaXNwbGF5X25hbWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMucmVxdWlyZV9kaXNwbGF5X25hbWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKCFvcHRpb25zLmlnbm9yZV9tYXhfbGVuZ3RoICYmIHN0ci5sZW5ndGggPiBkZWZhdWx0TWF4RW1haWxMZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KCdAJyk7XG4gIHZhciBkb21haW4gPSBwYXJ0cy5wb3AoKTtcbiAgdmFyIGxvd2VyX2RvbWFpbiA9IGRvbWFpbi50b0xvd2VyQ2FzZSgpO1xuICBpZiAob3B0aW9ucy5ob3N0X2JsYWNrbGlzdC5sZW5ndGggPiAwICYmICgwLCBfY2hlY2tIb3N0LmRlZmF1bHQpKGxvd2VyX2RvbWFpbiwgb3B0aW9ucy5ob3N0X2JsYWNrbGlzdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaG9zdF93aGl0ZWxpc3QubGVuZ3RoID4gMCAmJiAhKDAsIF9jaGVja0hvc3QuZGVmYXVsdCkobG93ZXJfZG9tYWluLCBvcHRpb25zLmhvc3Rfd2hpdGVsaXN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdXNlciA9IHBhcnRzLmpvaW4oJ0AnKTtcbiAgaWYgKG9wdGlvbnMuZG9tYWluX3NwZWNpZmljX3ZhbGlkYXRpb24gJiYgKGxvd2VyX2RvbWFpbiA9PT0gJ2dtYWlsLmNvbScgfHwgbG93ZXJfZG9tYWluID09PSAnZ29vZ2xlbWFpbC5jb20nKSkge1xuICAgIC8qXG4gICAgUHJldmlvdXNseSB3ZSByZW1vdmVkIGRvdHMgZm9yIGdtYWlsIGFkZHJlc3NlcyBiZWZvcmUgdmFsaWRhdGluZy5cbiAgICBUaGlzIHdhcyByZW1vdmVkIGJlY2F1c2UgaXQgYWxsb3dzIGBtdWx0aXBsZS4uZG90c0BnbWFpbC5jb21gXG4gICAgdG8gYmUgcmVwb3J0ZWQgYXMgdmFsaWQsIGJ1dCBpdCBpcyBub3QuXG4gICAgR21haWwgb25seSBub3JtYWxpemVzIHNpbmdsZSBkb3RzLCByZW1vdmluZyB0aGVtIGZyb20gaGVyZSBpcyBwb2ludGxlc3MsXG4gICAgc2hvdWxkIGJlIGRvbmUgaW4gbm9ybWFsaXplRW1haWxcbiAgICAqL1xuICAgIHVzZXIgPSB1c2VyLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyBSZW1vdmluZyBzdWItYWRkcmVzcyBmcm9tIHVzZXJuYW1lIGJlZm9yZSBnbWFpbCB2YWxpZGF0aW9uXG4gICAgdmFyIHVzZXJuYW1lID0gdXNlci5zcGxpdCgnKycpWzBdO1xuXG4gICAgLy8gRG90cyBhcmUgbm90IGluY2x1ZGVkIGluIGdtYWlsIGxlbmd0aCByZXN0cmljdGlvblxuICAgIGlmICghKDAsIF9pc0J5dGVMZW5ndGguZGVmYXVsdCkodXNlcm5hbWUucmVwbGFjZSgvXFwuL2csICcnKSwge1xuICAgICAgbWluOiA2LFxuICAgICAgbWF4OiAzMFxuICAgIH0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBfdXNlcl9wYXJ0cyA9IHVzZXJuYW1lLnNwbGl0KCcuJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdXNlcl9wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFnbWFpbFVzZXJQYXJ0LnRlc3QoX3VzZXJfcGFydHNbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKG9wdGlvbnMuaWdub3JlX21heF9sZW5ndGggPT09IGZhbHNlICYmICghKDAsIF9pc0J5dGVMZW5ndGguZGVmYXVsdCkodXNlciwge1xuICAgIG1heDogNjRcbiAgfSkgfHwgISgwLCBfaXNCeXRlTGVuZ3RoLmRlZmF1bHQpKGRvbWFpbiwge1xuICAgIG1heDogMjU0XG4gIH0pKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoISgwLCBfaXNGUUROLmRlZmF1bHQpKGRvbWFpbiwge1xuICAgIHJlcXVpcmVfdGxkOiBvcHRpb25zLnJlcXVpcmVfdGxkLFxuICAgIGlnbm9yZV9tYXhfbGVuZ3RoOiBvcHRpb25zLmlnbm9yZV9tYXhfbGVuZ3RoLFxuICAgIGFsbG93X3VuZGVyc2NvcmVzOiBvcHRpb25zLmFsbG93X3VuZGVyc2NvcmVzXG4gIH0pKSB7XG4gICAgaWYgKCFvcHRpb25zLmFsbG93X2lwX2RvbWFpbikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoISgwLCBfaXNJUC5kZWZhdWx0KShkb21haW4pKSB7XG4gICAgICBpZiAoIWRvbWFpbi5zdGFydHNXaXRoKCdbJykgfHwgIWRvbWFpbi5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHZhciBub0JyYWNrZXRkb21haW4gPSBkb21haW4uc2xpY2UoMSwgLTEpO1xuICAgICAgaWYgKG5vQnJhY2tldGRvbWFpbi5sZW5ndGggPT09IDAgfHwgISgwLCBfaXNJUC5kZWZhdWx0KShub0JyYWNrZXRkb21haW4pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKG9wdGlvbnMuYmxhY2tsaXN0ZWRfY2hhcnMpIHtcbiAgICBpZiAodXNlci5zZWFyY2gobmV3IFJlZ0V4cChcIltcIi5jb25jYXQob3B0aW9ucy5ibGFja2xpc3RlZF9jaGFycywgXCJdK1wiKSwgJ2cnKSkgIT09IC0xKSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHVzZXJbMF0gPT09ICdcIicgJiYgdXNlclt1c2VyLmxlbmd0aCAtIDFdID09PSAnXCInKSB7XG4gICAgdXNlciA9IHVzZXIuc2xpY2UoMSwgdXNlci5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gb3B0aW9ucy5hbGxvd191dGY4X2xvY2FsX3BhcnQgPyBxdW90ZWRFbWFpbFVzZXJVdGY4LnRlc3QodXNlcikgOiBxdW90ZWRFbWFpbFVzZXIudGVzdCh1c2VyKTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IG9wdGlvbnMuYWxsb3dfdXRmOF9sb2NhbF9wYXJ0ID8gZW1haWxVc2VyVXRmOFBhcnQgOiBlbWFpbFVzZXJQYXJ0O1xuICB2YXIgdXNlcl9wYXJ0cyA9IHVzZXIuc3BsaXQoJy4nKTtcbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHVzZXJfcGFydHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgaWYgKCFwYXR0ZXJuLnRlc3QodXNlcl9wYXJ0c1tfaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNGUUROO1xudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcbnZhciBfbWVyZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvbWVyZ2VcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxudmFyIGRlZmF1bHRfZnFkbl9vcHRpb25zID0ge1xuICByZXF1aXJlX3RsZDogdHJ1ZSxcbiAgYWxsb3dfdW5kZXJzY29yZXM6IGZhbHNlLFxuICBhbGxvd190cmFpbGluZ19kb3Q6IGZhbHNlLFxuICBhbGxvd19udW1lcmljX3RsZDogZmFsc2UsXG4gIGFsbG93X3dpbGRjYXJkOiBmYWxzZSxcbiAgaWdub3JlX21heF9sZW5ndGg6IGZhbHNlXG59O1xuZnVuY3Rpb24gaXNGUUROKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gKDAsIF9tZXJnZS5kZWZhdWx0KShvcHRpb25zLCBkZWZhdWx0X2ZxZG5fb3B0aW9ucyk7XG5cbiAgLyogUmVtb3ZlIHRoZSBvcHRpb25hbCB0cmFpbGluZyBkb3QgYmVmb3JlIGNoZWNraW5nIHZhbGlkaXR5ICovXG4gIGlmIChvcHRpb25zLmFsbG93X3RyYWlsaW5nX2RvdCAmJiBzdHJbc3RyLmxlbmd0aCAtIDFdID09PSAnLicpIHtcbiAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIC8qIFJlbW92ZSB0aGUgb3B0aW9uYWwgd2lsZGNhcmQgYmVmb3JlIGNoZWNraW5nIHZhbGlkaXR5ICovXG4gIGlmIChvcHRpb25zLmFsbG93X3dpbGRjYXJkID09PSB0cnVlICYmIHN0ci5pbmRleE9mKCcqLicpID09PSAwKSB7XG4gICAgc3RyID0gc3RyLnN1YnN0cmluZygyKTtcbiAgfVxuICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoJy4nKTtcbiAgdmFyIHRsZCA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuICBpZiAob3B0aW9ucy5yZXF1aXJlX3RsZCkge1xuICAgIC8vIGRpc2FsbG93IGZxZG5zIHdpdGhvdXQgdGxkXG4gICAgaWYgKHBhcnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLmFsbG93X251bWVyaWNfdGxkICYmICEvXihbYS16XFx1MDBBMS1cXHUwMEE4XFx1MDBBQS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXXsyLH18eG5bYS16MC05LV17Mix9KSQvaS50ZXN0KHRsZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBkaXNhbGxvdyBzcGFjZXNcbiAgICBpZiAoL1xccy8udGVzdCh0bGQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVqZWN0IG51bWVyaWMgVExEc1xuICBpZiAoIW9wdGlvbnMuYWxsb3dfbnVtZXJpY190bGQgJiYgL15cXGQrJC8udGVzdCh0bGQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBwYXJ0cy5ldmVyeShmdW5jdGlvbiAocGFydCkge1xuICAgIGlmIChwYXJ0Lmxlbmd0aCA+IDYzICYmICFvcHRpb25zLmlnbm9yZV9tYXhfbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghL15bYS16X1xcdTAwYTEtXFx1ZmZmZjAtOS1dKyQvaS50ZXN0KHBhcnQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZGlzYWxsb3cgZnVsbC13aWR0aCBjaGFyc1xuICAgIGlmICgvW1xcdWZmMDEtXFx1ZmY1ZV0vLnRlc3QocGFydCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBkaXNhbGxvdyBwYXJ0cyBzdGFydGluZyBvciBlbmRpbmcgd2l0aCBoeXBoZW5cbiAgICBpZiAoL14tfC0kLy50ZXN0KHBhcnQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5hbGxvd191bmRlcnNjb3JlcyAmJiAvXy8udGVzdChwYXJ0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0lQO1xudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbi8qKlxuMTEuMy4gIEV4YW1wbGVzXG5cbiAgIFRoZSBmb2xsb3dpbmcgYWRkcmVzc2VzXG5cbiAgICAgICAgICAgICBmZTgwOjoxMjM0IChvbiB0aGUgMXN0IGxpbmsgb2YgdGhlIG5vZGUpXG4gICAgICAgICAgICAgZmYwMjo6NTY3OCAob24gdGhlIDV0aCBsaW5rIG9mIHRoZSBub2RlKVxuICAgICAgICAgICAgIGZmMDg6OjlhYmMgKG9uIHRoZSAxMHRoIG9yZ2FuaXphdGlvbiBvZiB0aGUgbm9kZSlcblxuICAgd291bGQgYmUgcmVwcmVzZW50ZWQgYXMgZm9sbG93czpcblxuICAgICAgICAgICAgIGZlODA6OjEyMzQlMVxuICAgICAgICAgICAgIGZmMDI6OjU2NzglNVxuICAgICAgICAgICAgIGZmMDg6OjlhYmMlMTBcblxuICAgKEhlcmUgd2UgYXNzdW1lIGEgbmF0dXJhbCB0cmFuc2xhdGlvbiBmcm9tIGEgem9uZSBpbmRleCB0byB0aGVcbiAgIDx6b25lX2lkPiBwYXJ0LCB3aGVyZSB0aGUgTnRoIHpvbmUgb2YgYW55IHNjb3BlIGlzIHRyYW5zbGF0ZWQgaW50b1xuICAgXCJOXCIuKVxuXG4gICBJZiB3ZSB1c2UgaW50ZXJmYWNlIG5hbWVzIGFzIDx6b25lX2lkPiwgdGhvc2UgYWRkcmVzc2VzIGNvdWxkIGFsc28gYmVcbiAgIHJlcHJlc2VudGVkIGFzIGZvbGxvd3M6XG5cbiAgICAgICAgICAgIGZlODA6OjEyMzQlbmUwXG4gICAgICAgICAgICBmZjAyOjo1Njc4JXB2YzEuM1xuICAgICAgICAgICAgZmYwODo6OWFiYyVpbnRlcmZhY2UxMFxuXG4gICB3aGVyZSB0aGUgaW50ZXJmYWNlIFwibmUwXCIgYmVsb25ncyB0byB0aGUgMXN0IGxpbmssIFwicHZjMS4zXCIgYmVsb25nc1xuICAgdG8gdGhlIDV0aCBsaW5rLCBhbmQgXCJpbnRlcmZhY2UxMFwiIGJlbG9uZ3MgdG8gdGhlIDEwdGggb3JnYW5pemF0aW9uLlxuICogKiAqL1xudmFyIElQdjRTZWdtZW50Rm9ybWF0ID0gJyg/OlswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSknO1xudmFyIElQdjRBZGRyZXNzRm9ybWF0ID0gXCIoXCIuY29uY2F0KElQdjRTZWdtZW50Rm9ybWF0LCBcIlsuXSl7M31cIikuY29uY2F0KElQdjRTZWdtZW50Rm9ybWF0KTtcbnZhciBJUHY0QWRkcmVzc1JlZ0V4cCA9IG5ldyBSZWdFeHAoXCJeXCIuY29uY2F0KElQdjRBZGRyZXNzRm9ybWF0LCBcIiRcIikpO1xudmFyIElQdjZTZWdtZW50Rm9ybWF0ID0gJyg/OlswLTlhLWZBLUZdezEsNH0pJztcbnZhciBJUHY2QWRkcmVzc1JlZ0V4cCA9IG5ldyBSZWdFeHAoJ14oJyArIFwiKD86XCIuY29uY2F0KElQdjZTZWdtZW50Rm9ybWF0LCBcIjopezd9KD86XCIpLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCJ8Oil8XCIpICsgXCIoPzpcIi5jb25jYXQoSVB2NlNlZ21lbnRGb3JtYXQsIFwiOil7Nn0oPzpcIikuY29uY2F0KElQdjRBZGRyZXNzRm9ybWF0LCBcInw6XCIpLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCJ8Oil8XCIpICsgXCIoPzpcIi5jb25jYXQoSVB2NlNlZ21lbnRGb3JtYXQsIFwiOil7NX0oPzo6XCIpLmNvbmNhdChJUHY0QWRkcmVzc0Zvcm1hdCwgXCJ8KDpcIikuY29uY2F0KElQdjZTZWdtZW50Rm9ybWF0LCBcIil7MSwyfXw6KXxcIikgKyBcIig/OlwiLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCI6KXs0fSg/Oig6XCIpLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCIpezAsMX06XCIpLmNvbmNhdChJUHY0QWRkcmVzc0Zvcm1hdCwgXCJ8KDpcIikuY29uY2F0KElQdjZTZWdtZW50Rm9ybWF0LCBcIil7MSwzfXw6KXxcIikgKyBcIig/OlwiLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCI6KXszfSg/Oig6XCIpLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCIpezAsMn06XCIpLmNvbmNhdChJUHY0QWRkcmVzc0Zvcm1hdCwgXCJ8KDpcIikuY29uY2F0KElQdjZTZWdtZW50Rm9ybWF0LCBcIil7MSw0fXw6KXxcIikgKyBcIig/OlwiLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCI6KXsyfSg/Oig6XCIpLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCIpezAsM306XCIpLmNvbmNhdChJUHY0QWRkcmVzc0Zvcm1hdCwgXCJ8KDpcIikuY29uY2F0KElQdjZTZWdtZW50Rm9ybWF0LCBcIil7MSw1fXw6KXxcIikgKyBcIig/OlwiLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCI6KXsxfSg/Oig6XCIpLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCIpezAsNH06XCIpLmNvbmNhdChJUHY0QWRkcmVzc0Zvcm1hdCwgXCJ8KDpcIikuY29uY2F0KElQdjZTZWdtZW50Rm9ybWF0LCBcIil7MSw2fXw6KXxcIikgKyBcIig/OjooKD86OlwiLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCIpezAsNX06XCIpLmNvbmNhdChJUHY0QWRkcmVzc0Zvcm1hdCwgXCJ8KD86OlwiKS5jb25jYXQoSVB2NlNlZ21lbnRGb3JtYXQsIFwiKXsxLDd9fDopKVwiKSArICcpKCVbMC05YS16QS1aLl17MSx9KT8kJyk7XG5mdW5jdGlvbiBpc0lQKGlwQWRkcmVzcykge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKGlwQWRkcmVzcyk7XG5cbiAgLy8gYWNjZXNzaW5nICdhcmd1bWVudHMnIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eTogaXNJUChpcEFkZHJlc3MgWywgdmVyc2lvbl0pXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgdmFyIHZlcnNpb24gPSAoX3R5cGVvZihvcHRpb25zKSA9PT0gJ29iamVjdCcgPyBvcHRpb25zLnZlcnNpb24gOiBhcmd1bWVudHNbMV0pIHx8ICcnO1xuICBpZiAoIXZlcnNpb24pIHtcbiAgICByZXR1cm4gaXNJUChpcEFkZHJlc3MsIHtcbiAgICAgIHZlcnNpb246IDRcbiAgICB9KSB8fCBpc0lQKGlwQWRkcmVzcywge1xuICAgICAgdmVyc2lvbjogNlxuICAgIH0pO1xuICB9XG4gIGlmICh2ZXJzaW9uLnRvU3RyaW5nKCkgPT09ICc0Jykge1xuICAgIHJldHVybiBJUHY0QWRkcmVzc1JlZ0V4cC50ZXN0KGlwQWRkcmVzcyk7XG4gIH1cbiAgaWYgKHZlcnNpb24udG9TdHJpbmcoKSA9PT0gJzYnKSB7XG4gICAgcmV0dXJuIElQdjZBZGRyZXNzUmVnRXhwLnRlc3QoaXBBZGRyZXNzKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBhc3NlcnRTdHJpbmc7XG5mdW5jdGlvbiBhc3NlcnRTdHJpbmcoaW5wdXQpIHtcbiAgaWYgKGlucHV0ID09PSB1bmRlZmluZWQgfHwgaW5wdXQgPT09IG51bGwpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhIHN0cmluZyBidXQgcmVjZWl2ZWQgYSBcIi5jb25jYXQoaW5wdXQpKTtcbiAgaWYgKGlucHV0LmNvbnN0cnVjdG9yLm5hbWUgIT09ICdTdHJpbmcnKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYSBzdHJpbmcgYnV0IHJlY2VpdmVkIGEgXCIuY29uY2F0KGlucHV0LmNvbnN0cnVjdG9yLm5hbWUpKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNoZWNrSG9zdDtcbmZ1bmN0aW9uIGlzUmVnRXhwKG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZnVuY3Rpb24gY2hlY2tIb3N0KGhvc3QsIG1hdGNoZXMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG1hdGNoID0gbWF0Y2hlc1tpXTtcbiAgICBpZiAoaG9zdCA9PT0gbWF0Y2ggfHwgaXNSZWdFeHAobWF0Y2gpICYmIG1hdGNoLnRlc3QoaG9zdCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBtZXJnZTtcbmZ1bmN0aW9uIG1lcmdlKCkge1xuICB2YXIgb2JqID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGRlZmF1bHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gIGZvciAodmFyIGtleSBpbiBkZWZhdWx0cykge1xuICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBvYmpba2V5XSA9IGRlZmF1bHRzW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmo7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0ICcuL2Zvcm0tY29udHJvbCdcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==