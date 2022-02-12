/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Contact.js":
/*!************************!*\
  !*** ./src/Contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var _initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial page-load.js */ "./src/initial page-load.js");
/* harmony import */ var _Contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.js */ "./src/Contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");



function Contact() {
  document.querySelector("#content").innerHTML = `<div class="background">
  </div>
  <nav>
  <button id="home"> accueil</button>
  <button id="menu"> Menu</button>
<button id="contact"> Contact</button></nav>
  <article>
  <header><h1>Menna Yacine FORGE</h1></header>
  <section>
 <p> contactez nous sur facebook <a href="https://www.facebook.com/Technicalmourning09">Menna Yacine</a></p>
 <p> numéro de téléphone 0771201530</p>
  </section>

  </article>`;
  const Contact = document.querySelector("#contact");
  Contact.addEventListener("click", _Contact_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const home = document.querySelector("#home");
  home.addEventListener("click", _initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  const menu = document.querySelector("#menu");
  menu.addEventListener("click", _menu_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
}


/***/ }),

/***/ "./src/initial page-load.js":
/*!**********************************!*\
  !*** ./src/initial page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageload)
/* harmony export */ });
/* harmony import */ var _Contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.js */ "./src/Contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");


function pageload() {
  document.querySelector("#content").innerHTML = `<div class="background">
</div>
<nav>
<button id="home"> accueil</button>
   <button id="menu"> Menu</button>
 <button id="contact"> Contact</button>
</nav>
<article>
<header><h1>Menna Yacine FORGE</h1></header>
<section>Menna Yacine Forge est un atelier pour tout ce qui concerne le métal, des petits produits tels que les portes jusqu'aux exigences des grandes installations telles que la charpent metalic.</section>
<section class="hours">
    <h3>Heures de travail</h3>
    <p>Sunday: 8am - 5pm</p>

   <p>Monday: 8am - 5pm</p>
    
    <p>Tuesday: 8am - 5pm</p>
    
   <p>Wednesday: 8am - 5pm</p>
    
    <p>Thursday: 8am - 12pm</p>
    
   <p>Saturday: 8am - 5pm</p>
</section>
<section><h3>Location</h3>
<p>Algeria,Blida route slimane chaachoue</p>
</section>
</article>`;
  const Contact = document.querySelector("#contact");
  Contact.addEventListener("click", _Contact_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  const home = document.querySelector("#home");
  home.addEventListener("click", pageload);
  const menu = document.querySelector("#menu");
  menu.addEventListener("click", _menu_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial page-load.js */ "./src/initial page-load.js");
/* harmony import */ var _Contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.js */ "./src/Contact.js");


function menu() {
  document.querySelector("#content").innerHTML = `<div class="background">
    </div>
    <nav>
    <button id="home"> accueil</button>
    <button id="menu"> Menu</button>
  <button id="contact"> Contact</button></nav>
    <article>
    <header><h1>Menna Yacine FORGE</h1></header>
    <section>
    vous pouvez commander sur mesure en nous envoyant la photo que vous souhaitez dans notre <a href="https://www.facebook.com/Technicalmourning09">page Facebook</a> 
    ou vous pouvez choisir parmi les options ci-dessus
    </section>
    </article>`;
  const Contact = document.querySelector("#contact");
  Contact.addEventListener("click", _Contact_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const home = document.querySelector("#home");
  home.addEventListener("click", _initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  const menu = document.querySelector("#menu");
  menu.addEventListener("click", Menu);
}


/***/ })

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
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDWDtBQUNOO0FBQ2Q7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbURBQU87QUFDM0M7QUFDQSxpQ0FBaUMsNkRBQVE7QUFDekM7QUFDQSxpQ0FBaUMsZ0RBQUk7QUFDckM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJtQztBQUNOO0FBQ2Q7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1EQUFPO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxnREFBSTtBQUNyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQzhDO0FBQ1g7QUFDcEI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1EQUFPO0FBQzNDO0FBQ0EsaUNBQWlDLDZEQUFRO0FBQ3pDO0FBQ0E7QUFDQTs7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RvLy4vc3JjL0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvaW5pdGlhbCBwYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGFnZWxvYWQgZnJvbSBcIi4vaW5pdGlhbCBwYWdlLWxvYWQuanNcIjtcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vQ29udGFjdC5qc1wiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZFwiPlxyXG4gIDwvZGl2PlxyXG4gIDxuYXY+XHJcbiAgPGJ1dHRvbiBpZD1cImhvbWVcIj4gYWNjdWVpbDwvYnV0dG9uPlxyXG4gIDxidXR0b24gaWQ9XCJtZW51XCI+IE1lbnU8L2J1dHRvbj5cclxuPGJ1dHRvbiBpZD1cImNvbnRhY3RcIj4gQ29udGFjdDwvYnV0dG9uPjwvbmF2PlxyXG4gIDxhcnRpY2xlPlxyXG4gIDxoZWFkZXI+PGgxPk1lbm5hIFlhY2luZSBGT1JHRTwvaDE+PC9oZWFkZXI+XHJcbiAgPHNlY3Rpb24+XHJcbiA8cD4gY29udGFjdGV6IG5vdXMgc3VyIGZhY2Vib29rIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vVGVjaG5pY2FsbW91cm5pbmcwOVwiPk1lbm5hIFlhY2luZTwvYT48L3A+XHJcbiA8cD4gbnVtw6lybyBkZSB0w6lsw6lwaG9uZSAwNzcxMjAxNTMwPC9wPlxyXG4gIDwvc2VjdGlvbj5cclxuXHJcbiAgPC9hcnRpY2xlPmA7XHJcbiAgY29uc3QgQ29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdFwiKTtcclxuICBDb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb250YWN0KTtcclxuICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpO1xyXG4gIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBhZ2Vsb2FkKTtcclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xyXG4gIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE1lbnUpO1xyXG59XHJcbiIsImltcG9ydCBjb250YWN0IGZyb20gXCIuL0NvbnRhY3QuanNcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlbG9hZCgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJiYWNrZ3JvdW5kXCI+XHJcbjwvZGl2PlxyXG48bmF2PlxyXG48YnV0dG9uIGlkPVwiaG9tZVwiPiBhY2N1ZWlsPC9idXR0b24+XHJcbiAgIDxidXR0b24gaWQ9XCJtZW51XCI+IE1lbnU8L2J1dHRvbj5cclxuIDxidXR0b24gaWQ9XCJjb250YWN0XCI+IENvbnRhY3Q8L2J1dHRvbj5cclxuPC9uYXY+XHJcbjxhcnRpY2xlPlxyXG48aGVhZGVyPjxoMT5NZW5uYSBZYWNpbmUgRk9SR0U8L2gxPjwvaGVhZGVyPlxyXG48c2VjdGlvbj5NZW5uYSBZYWNpbmUgRm9yZ2UgZXN0IHVuIGF0ZWxpZXIgcG91ciB0b3V0IGNlIHF1aSBjb25jZXJuZSBsZSBtw6l0YWwsIGRlcyBwZXRpdHMgcHJvZHVpdHMgdGVscyBxdWUgbGVzIHBvcnRlcyBqdXNxdSdhdXggZXhpZ2VuY2VzIGRlcyBncmFuZGVzIGluc3RhbGxhdGlvbnMgdGVsbGVzIHF1ZSBsYSBjaGFycGVudCBtZXRhbGljLjwvc2VjdGlvbj5cclxuPHNlY3Rpb24gY2xhc3M9XCJob3Vyc1wiPlxyXG4gICAgPGgzPkhldXJlcyBkZSB0cmF2YWlsPC9oMz5cclxuICAgIDxwPlN1bmRheTogOGFtIC0gNXBtPC9wPlxyXG5cclxuICAgPHA+TW9uZGF5OiA4YW0gLSA1cG08L3A+XHJcbiAgICBcclxuICAgIDxwPlR1ZXNkYXk6IDhhbSAtIDVwbTwvcD5cclxuICAgIFxyXG4gICA8cD5XZWRuZXNkYXk6IDhhbSAtIDVwbTwvcD5cclxuICAgIFxyXG4gICAgPHA+VGh1cnNkYXk6IDhhbSAtIDEycG08L3A+XHJcbiAgICBcclxuICAgPHA+U2F0dXJkYXk6IDhhbSAtIDVwbTwvcD5cclxuPC9zZWN0aW9uPlxyXG48c2VjdGlvbj48aDM+TG9jYXRpb248L2gzPlxyXG48cD5BbGdlcmlhLEJsaWRhIHJvdXRlIHNsaW1hbmUgY2hhYWNob3VlPC9wPlxyXG48L3NlY3Rpb24+XHJcbjwvYXJ0aWNsZT5gO1xyXG4gIGNvbnN0IENvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RcIik7XHJcbiAgQ29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29udGFjdCk7XHJcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKTtcclxuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwYWdlbG9hZCk7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKTtcclxuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBNZW51KTtcclxufVxyXG4iLCJpbXBvcnQgcGFnZWxvYWQgZnJvbSBcIi4vaW5pdGlhbCBwYWdlLWxvYWQuanNcIjtcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vQ29udGFjdC5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImJhY2tncm91bmRcIj5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5hdj5cclxuICAgIDxidXR0b24gaWQ9XCJob21lXCI+IGFjY3VlaWw8L2J1dHRvbj5cclxuICAgIDxidXR0b24gaWQ9XCJtZW51XCI+IE1lbnU8L2J1dHRvbj5cclxuICA8YnV0dG9uIGlkPVwiY29udGFjdFwiPiBDb250YWN0PC9idXR0b24+PC9uYXY+XHJcbiAgICA8YXJ0aWNsZT5cclxuICAgIDxoZWFkZXI+PGgxPk1lbm5hIFlhY2luZSBGT1JHRTwvaDE+PC9oZWFkZXI+XHJcbiAgICA8c2VjdGlvbj5cclxuICAgIHZvdXMgcG91dmV6IGNvbW1hbmRlciBzdXIgbWVzdXJlIGVuIG5vdXMgZW52b3lhbnQgbGEgcGhvdG8gcXVlIHZvdXMgc291aGFpdGV6IGRhbnMgbm90cmUgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9UZWNobmljYWxtb3VybmluZzA5XCI+cGFnZSBGYWNlYm9vazwvYT4gXHJcbiAgICBvdSB2b3VzIHBvdXZleiBjaG9pc2lyIHBhcm1pIGxlcyBvcHRpb25zIGNpLWRlc3N1c1xyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPC9hcnRpY2xlPmA7XHJcbiAgY29uc3QgQ29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdFwiKTtcclxuICBDb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb250YWN0KTtcclxuICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpO1xyXG4gIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBhZ2Vsb2FkKTtcclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xyXG4gIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE1lbnUpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWVudS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==