/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var bookmarklet = __webpack_require__(1);

	var link = document.createElement('a');
	link.href = bookmarklet;
	link.innerHTML = "Jira Interval"

	document.querySelector('#bookmarklet').appendChild(link);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "javascript:(function()%7B!function()%7Bvar%20e%3Ddocument.querySelector(%22%23log-work-date-logged-date-picker%22)%2Ct%3Dnew%20Date(e.value)%2Co%3Ddocument.querySelector(%22%23log-work-time-logged%22)%2Ca%3Dnew%20Date%3Ba.setFullYear(t.getFullYear())%2Ca.setMonth(t.getMonth())%2Ca.setDate(t.getDate())%3Bvar%20l%3Dwindow.prompt(%22Choose%20End%20time%22%2Ca.toLocaleString())%3Bif(l)%7Bvar%20r%3Dnew%20Date(l)%2Cn%3Dr-t%2Cu%3Dn%2F1e3%2F60%2F60%3Bu%3C1%3Fo.value%3D(60*u).toFixed(0)%2B%22m%22%3Ao.value%3Du.toFixed(2)%2B%22h%22%2Co.focus()%7D%7D()%3B%7D)()%3B"

/***/ }
/******/ ]);