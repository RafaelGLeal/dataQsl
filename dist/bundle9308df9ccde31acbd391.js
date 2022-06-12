/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/loader.js":
/*!******************************!*\
  !*** ./src/script/loader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var loader = function loader() {
  // Select all links with hashes
  $('a[href*="#"]') // Remove links that don't actually link to anything
  .not('[href="#"]').not('[href="#0"]').click(function (event) {
    // On-page links
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]"); // Does a scroll target exist?

      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();

          if ($target.is(":focus")) {
            // Checking if the target was focused
            return false;
          } else {
            $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable

            $target.focus(); // Set focus again
          }
        });
      }
    }
  }); // Select all links with hashes

  $('a[href*="#"]') // Remove links that don't actually link to anything
  .not('[href="#"]').not('[href="#0"]').click(function (event) {
    // On-page links
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]"); // Does a scroll target exist?

      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();

          if ($target.is(":focus")) {
            // Checking if the target was focused
            return false;
          } else {
            $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable

            $target.focus(); // Set focus again
          }
        });
      }
    }
  });
  $(document).ready(function () {
    var counter = 0;
    var c = 0;
    var i = setInterval(function () {
      $(".counter h2").html(c);
      counter++;
      c++;

      if (counter == 101) {
        $(".pageLoader").addClass("active");
        $(".header").addClass("active");
        setTimeout(function () {
          $(".wrapper-loader").addClass("remove");
          $("#pageLoaded").addClass("display");
          setTimeout(function () {
            $("#pageLoaded").addClass("active");
          }, 200);
        }, 1400);
        clearInterval(i);
      }
    }, 40);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loader);

/***/ }),

/***/ "./src/script/toggleDark.js":
/*!**********************************!*\
  !*** ./src/script/toggleDark.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var toggleMode = function toggleMode() {
  var toggleBtn = document.getElementById("toggleDark");
  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("darkMode");
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMode);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../headFont.otf */ "./headFont.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\nThis file is used to contain all abstracts imports.\nFiles inside this folder can contain abstract settings, helpers or functions. They have no direct output.\n*/\n@font-face {\n  font-family: \"Grotesque\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n/*\nThis file is used to contain all base imports.\nFiles inside this folder can contain global styles used in the project.\n*/\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\na {\n  color: hsl(0deg, 0%, 0%);\n}\n\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n/*\nThis file is used to contain all components imports.\nFiles inside this folder can contain global styles used in the project.\n*/\n.btn {\n  border: none;\n  background-color: #ba2e31;\n  cursor: pointer;\n  clip-path: polygon(10% 0, 100% 0, 100% 20%, 100% 85%, 90% 100%, 20% 100%, 0 100%, 0 15%);\n  font-family: \"Grotesque\", sans-serif;\n  width: fit-content;\n  color: #f4f4f4;\n  padding: 0.6em 1.8em 0.6em 1em;\n  position: relative;\n  transition: 0.6s ease all;\n}\n.btn:hover {\n  transition: 0.6s ease all;\n  clip-path: polygon(20% 0%, 100% 0, 100% 20%, 100% 81%, 100% 100%, 20% 100%, 0 100%, 0 0);\n}\n.btn:hover .btn-icon {\n  transition: 0.5s ease;\n  transform: rotate(45deg);\n  right: 8px;\n}\n\n.btn-icon {\n  transition: 0.5s ease;\n  position: absolute;\n  right: 2px;\n  top: 15%;\n  color: #f4f4f4;\n  font-size: 1.5em;\n}\n\n@keyframes lineLoader {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 40%;\n  }\n}\n@keyframes squareRotate {\n  0% {\n    transform: translate(0);\n  }\n  25% {\n    transform: translate(4px, 2px);\n  }\n  50% {\n    transform: translate(0px, 0px);\n  }\n  75% {\n    transform: translate(-3px, -6px);\n  }\n  100% {\n    transform: translate(0);\n  }\n}\n@keyframes textReveal {\n  0% {\n    transform: translateX(-50px) rotate(0deg);\n    opacity: 0;\n  }\n  50% {\n    transform: translateX(0px) rotate(10deg);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(50px) rotate(0deg);\n    opacity: 0;\n  }\n}\n.pageLoader {\n  width: 100%;\n  height: 100%;\n  font-size: 3.063em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n}\n.pageLoader::before {\n  content: \"\";\n  position: absolute;\n  width: 40%;\n  height: 1px;\n  background-color: #252526;\n  top: 40%;\n  left: 0;\n  animation: lineLoader 5s ease-in reverse forwards;\n}\n.pageLoader::after {\n  content: \"\";\n  position: absolute;\n  width: 40%;\n  height: 1px;\n  background-color: #252526;\n  bottom: 40%;\n  right: 0;\n  animation: lineLoader 5s ease-in reverse forwards;\n}\n.pageLoader h1 {\n  font-family: \"Grotesque\", sans-serif;\n  position: relative;\n}\n.pageLoader .counter {\n  display: flex;\n  position: absolute;\n  right: 5%;\n  bottom: 10%;\n  font-family: \"Grotesque\", sans-serif;\n}\n\n.pageLoader.active {\n  transform: translate(-100%);\n  opacity: 0;\n  transition: 1s ease-in;\n  visibility: hidden;\n}\n\n.wrapper-loader.remove {\n  display: none;\n  transition: 1s ease-in;\n}\n\n.wrapper-loader {\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);\n  z-index: 1;\n  overflow-x: hidden;\n  transition: 1s ease-in;\n}\n\n#bgLoad {\n  opacity: 0.2;\n  position: absolute;\n  right: 0;\n  top: -150px;\n  animation: squareRotate 8s linear infinite;\n  rotate: 190deg;\n}\n\n#pageLoaded {\n  transform: translateY(-200px);\n  display: none;\n  opacity: 0;\n  transition: 1s ease-in;\n  transition: display 2s ease;\n}\n#pageLoaded .hero-col-1 .hero__title {\n  transition: 1s ease-in;\n  transform: translateX(-100px);\n}\n#pageLoaded .hero-col-1 .btn {\n  transform: translatey(-200px);\n}\n\n#pageLoaded.display {\n  display: block;\n}\n\n#pageLoaded.active {\n  transform: translateY(0px);\n  opacity: 1;\n  transition: display 2s ease;\n  transition: 1s ease-in;\n}\n#pageLoaded.active .hero-col-1 .hero__title {\n  transition: 1s ease-in;\n  transform: translateX(0px);\n}\n#pageLoaded.active .hero-col-1 .btn {\n  transform: translatey(0px);\n}\n\n.header {\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n}\n.header #bgNav {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n  filter: invert(100%) opacity(0.5);\n}\n\n.navbar {\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  padding: 1em 5em 2em;\n}\n.navbar__list ul {\n  display: flex;\n  gap: 3em;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.navbar__list ul a {\n  font-weight: 500;\n  font-size: 0.8em;\n  position: relative;\n  transition: 0.4s ease-in;\n  padding: 0.2em;\n}\n.navbar__list ul a:hover {\n  color: #f4f4f4;\n  transition: 0.4s ease-in;\n}\n.navbar__list ul a::before {\n  transform: scaleX(0);\n  transform-origin: bottom right;\n}\n.navbar__list ul a:hover::before {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n.navbar__list ul a::before {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  inset: 0 0 0 0;\n  background: #ba2e31;\n  z-index: -1;\n  transition: transform 0.3s ease;\n}\n.navbar #brandLogoWhite {\n  display: none;\n}\n\n.hero {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  place-items: center;\n  height: 80vh;\n  margin: 0 auto;\n  position: relative;\n}\n.hero::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 105%;\n  background-color: #252526;\n  top: -3vh;\n  clip-path: polygon(0 0, 100% 0, 100% 60%, 75% 100%, 25% 100%, 0 100%);\n  z-index: -10;\n}\n\n.hero-col-1 {\n  width: 70%;\n}\n.hero-col-1 h1 {\n  font-weight: 600;\n  font-size: 4.375em;\n  flex-direction: column;\n  margin: 1em 0 0;\n  line-height: 80px;\n  letter-spacing: 7px;\n  position: relative;\n}\n.hero-col-1 h1::before {\n  content: \"\";\n  position: absolute;\n  width: 140px;\n  height: 2px;\n  background-color: #f4f4f4;\n  left: -140px;\n  top: 20%;\n}\n.hero-col-1 h1 span {\n  font-family: \"Grotesque\", sans-serif !important;\n  color: #f4f4f4;\n}\n.hero-col-1 p {\n  margin: 1em 0;\n  max-width: 40ch;\n  line-height: 25px;\n  color: #f4f4f4 !important;\n  letter-spacing: 1px;\n}\n\n.hero-col-2 {\n  width: 70%;\n  height: 100%;\n  position: relative;\n}\n.hero-col-2 #bgHero {\n  position: absolute;\n  height: 60%;\n  width: fit-content;\n  top: 10%;\n  right: 0;\n  filter: opacity(0.1) invert(100%);\n  animation: squareRotate 8s linear infinite;\n}\n.hero-col-2 .icons-fixed {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n\n.icons-fixed li:nth-child(1) a {\n  margin-bottom: 1em;\n}\n.icons-fixed a {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n}\n.icons-fixed a i {\n  font-size: 1.5em;\n  border-radius: 50%;\n  padding: 0.2em;\n  opacity: 0.9;\n  transition: 0.3s ease-in;\n}\n.icons-fixed a span {\n  margin-right: 1em;\n  visibility: hidden;\n  transition: 0.3s ease-in;\n  opacity: 0;\n}\n.icons-fixed li:hover i {\n  background-color: rgba(134, 134, 134, 0.337254902);\n  transition: 0.3s ease-in;\n}\n.icons-fixed li:hover span {\n  visibility: visible;\n  opacity: 1;\n  transition: 0.3s ease-in;\n}\n\n.projects {\n  min-height: 100vh;\n  width: 80%;\n  margin: 40vh auto 0;\n}\n.projects h5 {\n  font-family: \"Inter\", sans-serif;\n  width: fit-content;\n}\n.projects h5 a {\n  text-decoration: underline;\n}\n\n.article-title {\n  font-size: 2.25em;\n  position: relative;\n}\n.article-title::before {\n  content: \"\";\n  position: absolute;\n  width: 140px;\n  height: 1px;\n  background-color: #252526;\n  left: -140px;\n  top: 40%;\n}\n\n.project__box {\n  margin: 20em auto;\n  display: flex;\n}\n.project__box-view {\n  width: 100%;\n  position: relative;\n}\n.project__box-view .svg-dot {\n  position: absolute;\n  top: -10%;\n  left: -7%;\n  z-index: -1;\n  animation: squareRotate 9s linear infinite;\n}\n.project__box-view .box img {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n.project__box-view .box {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n}\n.project__box-view .box::before {\n  content: \"\";\n  position: absolute;\n  width: 150%;\n  height: 180%;\n  background-color: #252526;\n  top: -25%;\n  left: -20%;\n  opacity: 0.9;\n  transition: 1s ease;\n  transform: rotate(30deg);\n}\n.project__box-view .box:hover::before {\n  transform: translateY(-100%);\n  transition: 1s ease;\n}\n.project__box .wrapper {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n  margin-left: 3em;\n  padding: 1em 0;\n}\n.project__box .wrapper .project__box-title {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.5em;\n}\n.project__box .wrapper .project__box-title span {\n  font-size: 0.7em;\n  font-style: italic;\n}\n.project__box .wrapper .project__box-desc {\n  max-width: 40ch;\n  line-height: 24px;\n}\n.project__box .wrapper h4 {\n  font-family: \"Inter\", sans-serif;\n}\n.project__box .wrapper h4 ul {\n  margin-top: 0.5em;\n  display: flex;\n  gap: 1em;\n  font-style: italic;\n}\n.project__box .wrapper .project__box-icons {\n  position: absolute;\n  right: 0;\n}\n.project__box .wrapper .project__box-icons::before {\n  content: \"\";\n  position: absolute;\n  width: 1px;\n  height: 200px;\n  background-color: #252526;\n  left: 78%;\n  top: 150%;\n}\n.project__box .wrapper .project__box-icons a {\n  display: flex;\n  align-items: center;\n  flex-direction: row-reverse;\n}\n.project__box .wrapper .project__box-icons a i {\n  font-size: 1.5em;\n  border-radius: 50%;\n  padding: 0.3em;\n  transition: 0.3s ease-in;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n}\n.project__box .wrapper .project__box-icons a span {\n  visibility: hidden;\n  opacity: 0;\n  margin-right: 1em;\n  transition: 0.3s ease-in;\n}\n.project__box .wrapper .project__box-icons a:hover span {\n  opacity: 1;\n  visibility: visible;\n  transition: 0.3s ease-in;\n}\n.project__box .wrapper .project__box-icons a:hover i {\n  background-color: rgba(134, 134, 134, 0.337254902);\n  transition: 0.3s ease-in;\n}\n.project__box .wrapper .project__box-icons a:nth-child(1) {\n  margin-bottom: 1em;\n}\n\n.project__box:nth-child(2) {\n  margin-top: 10em;\n}\n\n.project__box:nth-child(3) {\n  display: flex;\n  flex-direction: row-reverse;\n  text-align: right;\n}\n.project__box:nth-child(3) .project__box-view .svg-dot {\n  left: 90%;\n}\n.project__box:nth-child(3) .project__box-view .box:hover::before {\n  transform: translatex(100%);\n  transition: 1s ease;\n}\n.project__box:nth-child(3) .wrapper {\n  flex-direction: column;\n  position: relative;\n  align-items: flex-end;\n  margin-right: 3em;\n}\n.project__box:nth-child(3) .wrapper .project__box-icons {\n  position: absolute;\n  right: 90%;\n}\n.project__box:nth-child(3) .wrapper .project__box-icons::before {\n  left: 20%;\n}\n.project__box:nth-child(3) .wrapper .project__box-icons a {\n  flex-direction: row;\n}\n.project__box:nth-child(3) .wrapper .project__box-icons a span {\n  margin: 0 0 0 1em;\n}\n\n.project__box:nth-child(4) .project__box-view .box {\n  transition: 1s ease;\n}\n.project__box:nth-child(4) .project__box-view .box:hover::before {\n  transform: translateY(100%);\n  left: -40%;\n  transition: 1s ease;\n}\n\n.project__box:nth-of-type(3) {\n  margin-bottom: 5em;\n}\n\n.about {\n  width: 80%;\n  margin: 30vh auto 0;\n}\n.about h2 {\n  margin-bottom: 20vh;\n}\n.about-profile {\n  display: flex;\n  position: relative;\n}\n.about-profile__photo {\n  position: relative;\n}\n.about-profile__photo .svg-dot {\n  position: absolute;\n  left: -13%;\n  bottom: -12%;\n  z-index: -1;\n}\n.about-profile__list {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  margin-left: 5em;\n}\n.about-profile__list h3 {\n  font-size: 1.5em;\n}\n.about-profile__list li {\n  margin: 1.5em 0;\n  font-family: \"Inter\", sans-serif;\n  max-width: 20ch;\n}\n.about-profile__list .btn {\n  padding-right: 2.6em;\n}\n.about-profile__list .btn-icon {\n  color: #f4f4f4;\n  right: 6px;\n}\n.about-profile__list .btn:hover .btn-icon {\n  transform: rotate(0);\n}\n.about-profile__icons {\n  position: relative;\n  margin-left: 5em;\n}\n.about-profile__icons .icons-fixed {\n  position: absolute;\n  top: 0;\n}\n.about-profile__icons .icons-fixed i {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n}\n.about-description {\n  display: flex;\n  margin-top: 8em;\n  gap: 5em;\n  width: 100%;\n}\n.about-description__paragraph {\n  max-width: 50ch;\n  line-height: 30px;\n}\n.about-description__list {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.about-description__list ul {\n  display: flex;\n  width: 50%;\n  margin: 0.5em 1em;\n  gap: 0.5em 4em;\n  flex-wrap: wrap;\n  list-style: circle;\n  font-family: \"Inter\", sans-serif;\n  color: #252526;\n}\n.about .logo-slide {\n  width: 80%;\n  margin: 8em auto;\n  display: flex;\n  justify-content: space-between;\n}\n.about .logo-slide img {\n  max-width: 120px;\n  padding: 1em 2em;\n  border-radius: 10px;\n}\n.about .logo-slide img:nth-child(1) {\n  animation: iconOpac 8s linear infinite;\n}\n.about .logo-slide img:nth-child(2) {\n  animation: iconOpac 6s linear infinite;\n  animation-delay: 2s;\n}\n.about .logo-slide img:nth-child(3) {\n  animation: iconOpac 4s linear infinite;\n  animation-delay: 4s;\n}\n.about .logo-slide img:nth-child(4) {\n  animation: iconOpac 4s linear infinite;\n  animation-delay: 6s;\n}\n\n@keyframes iconOpac {\n  0% {\n    filter: grayscale(100%) opacity(0.5);\n  }\n  50% {\n    filter: grayscale(0%) opacity(1);\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n  }\n  100% {\n    filter: grayscale(100%) opacity(0.5);\n  }\n}\n.contact {\n  width: 80%;\n  margin: 15em auto 0;\n  display: flex;\n  flex-direction: column;\n}\n.contact .wrapper {\n  width: 100%;\n  position: relative;\n}\n.contact .wrapper .form-info {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.contact .wrapper .form-info li {\n  margin: 1em 0;\n  line-height: 25px;\n}\n.contact .wrapper .form-info li p {\n  opacity: 0.6;\n}\n.contact-subtitle {\n  margin: 3em 0;\n}\n.contact form {\n  display: grid;\n  width: fit-content;\n  gap: 2em 0;\n  font-family: \"Inter\", sans-serif;\n}\n.contact form input,\n.contact form textarea {\n  border: none;\n  padding: 1em;\n  margin-right: 2em;\n  border-bottom: 1px solid #252526;\n  background-color: transparent;\n}\n.contact form input:focus,\n.contact form textarea:focus {\n  outline: none;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n}\n.contact form .btn {\n  background-color: #ba2e31;\n  border: none;\n}\n\nfooter {\n  display: flex;\n  width: 80%;\n  margin: 5em auto 1em;\n  justify-content: space-around;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 16px;\n  max-width: 1440px;\n  margin: 0 auto;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  position: relative;\n}\nbody a,\nbody p,\nbody h1,\nbody h2,\nbody h3,\nbody h4,\nbody h5,\nbody h6,\nbody span,\nbody input,\nbody li {\n  color: #252526;\n  margin: 0;\n  padding: 0;\n}\nbody a,\nbody p,\nbody span,\nbody input {\n  font-family: \"Inter\", sans-serif;\n  text-decoration: none;\n}\nbody .bx-sun {\n  display: none;\n}\nbody i {\n  cursor: pointer;\n  color: #252526;\n}\nbody h1,\nbody h2,\nbody h3,\nbody h4,\nbody h5,\nbody h6 {\n  font-family: \"Grotesque\", sans-serif;\n}\n\nbody.darkMode {\n  background-image: none;\n  background-color: #323232;\n}\nbody.darkMode #bgHero {\n  filter: invert(100%) opacity(0.1);\n}\nbody.darkMode #brandLogoWhite {\n  display: block;\n}\nbody.darkMode #brandLogo {\n  display: none;\n}\nbody.darkMode #bgNav {\n  filter: invert(0) opacity(0.5);\n}\nbody.darkMode #toggleDark .bx-moon {\n  display: none;\n}\nbody.darkMode #toggleDark .bx-sun {\n  display: inline;\n}\nbody.darkMode a,\nbody.darkMode p,\nbody.darkMode h1,\nbody.darkMode h2,\nbody.darkMode h3,\nbody.darkMode h4,\nbody.darkMode h5,\nbody.darkMode h6,\nbody.darkMode span,\nbody.darkMode input,\nbody.darkMode i,\nbody.darkMode li,\nbody.darkMode ::placeholder {\n  color: #f4f4f4;\n}\nbody.darkMode .article-title:after,\nbody.darkMode .article-title:before {\n  background-color: #f4f4f4;\n}\nbody.darkMode .hero-col-1 h1::before,\nbody.darkMode .project__box-icons:before {\n  background-color: #f4f4f4 !important;\n}\nbody.darkMode .box::before {\n  background-color: #f4f4f4;\n}\nbody.darkMode .svg-dot {\n  filter: invert(100%);\n}\nbody.darkMode input,\nbody.darkMode textarea {\n  border-bottom: 1px solid #f4f4f4;\n}\nbody.darkMode .logo-slide img {\n  background-color: rgba(255, 255, 255, 0.151);\n}", "",{"version":3,"sources":["webpack://./src/style/abstracts/__abstracts-dir.scss","webpack://./src/style/abstracts/_fonts.scss","webpack://./src/style/main.scss","webpack://./src/style/base/__base-dir.scss","webpack://./src/style/base/_reset.scss","webpack://./src/style/base/_normalize.scss","webpack://./src/style/components/__components-dir.scss","webpack://./src/style/components/_buttons.scss","webpack://./src/style/abstracts/_variables.scss","webpack://./src/style/components/_animations.scss","webpack://./src/style/components/_loader.scss","webpack://./src/style/components/_header.scss","webpack://./src/style/components/_hero.scss","webpack://./src/style/components/_projects.scss","webpack://./src/style/components/_about.scss","webpack://./src/style/components/_contact.scss"],"names":[],"mappings":"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","sourcesContent":["/*\r\nThis file is used to contain all abstracts imports.\r\nFiles inside this folder can contain abstract settings, helpers or functions. They have no direct output.\r\n*/\r\n\r\n//Import Abstracts files\r\n@import 'fonts';\r\n@import 'mixins';\r\n@import 'variables';","$font-paragraph: \"Inter\", sans-serif;\n$font-heading: \"Grotesque\", sans-serif;\n@font-face {\n  font-family: \"Grotesque\";\n  src: url(/headFont.otf);\n}\n","@import \"abstracts/__abstracts-dir\";\n@import \"base/__base-dir\";\n@import \"components/__components-dir\";\n\nhtml {\n  box-sizing: border-box;\n  font-size: 16px;\n  max-width: 1440px;\n  margin: 0 auto;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  background-image: $bg-light;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  position: relative;\n  a,\n  p,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  span,\n  input,\n  li {\n    color: $color-black;\n    margin: 0;\n    padding: 0;\n  }\n  a,\n  p,\n  span,\n  input {\n    font-family: $font-paragraph;\n    text-decoration: none;\n  }\n  .bx-sun {\n    display: none;\n  }\n  i {\n    cursor: pointer;\n    color: $color-black;\n  }\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: $font-heading;\n  }\n}\n\nbody.darkMode {\n  background-image: none;\n  background-color: #323232;\n  #bgHero {\n    filter: invert(100%) opacity(0.1);\n  }\n  #brandLogoWhite {\n    display: block;\n  }\n  #brandLogo {\n    display: none;\n  }\n  #bgNav {\n    filter: invert(0) opacity(0.5);\n  }\n  #toggleDark {\n    .bx-moon {\n      display: none;\n    }\n    .bx-sun {\n      display: inline;\n    }\n  }\n  a,\n  p,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  span,\n  input,\n  i,\n  li,\n  ::placeholder {\n    color: $color-white;\n  }\n  .article-title:after,\n  .article-title:before {\n    background-color: $color-white;\n  }\n  .hero-col-1 h1::before,\n  .project__box-icons:before {\n    background-color: $color-white !important;\n  }\n  .box::before {\n    background-color: $color-white;\n  }\n  .svg-dot {\n    filter: invert(100%);\n  }\n  input,\n  textarea {\n    border-bottom: 1px solid $color-white;\n  }\n  .logo-slide img {\n    background-color: rgba(255, 255, 255, 0.151);\n  }\n}\n","/*\r\nThis file is used to contain all base imports.\r\nFiles inside this folder can contain global styles used in the project.\r\n*/\r\n\r\n//Import Base files\r\n@import \"reset\";\r\n@import \"normalize\";\r\n","/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\na{\r\n\tcolor: hsl(0, 0%, 0%);\r\n}","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n","/*\r\nThis file is used to contain all components imports.\r\nFiles inside this folder can contain global styles used in the project.\r\n*/\r\n\r\n//Import components files\r\n@import \"buttons\";\r\n@import \"hoover\";\r\n@import \"animations\";\r\n@import \"loader\";\r\n@import \"header\";\r\n@import \"hero\";\r\n@import \"projects\";\r\n@import \"about\";\r\n@import \"contact\";\r\n",".btn {\n  border: none;\n  background-color: $color-red;\n  cursor: pointer;\n  clip-path: polygon(\n    10% 0,\n    100% 0,\n    100% 20%,\n    100% 85%,\n    90% 100%,\n    20% 100%,\n    0 100%,\n    0 15%\n  );\n  font-family: $font-heading;\n  width: fit-content;\n  color: $color-white;\n  padding: 0.6em 1.8em 0.6em 1em;\n  position: relative;\n  transition: 0.6s ease all;\n  &:hover {\n    transition: 0.6s ease all;\n    clip-path: polygon(\n      20% 0%,\n      100% 0,\n      100% 20%,\n      100% 81%,\n      100% 100%,\n      20% 100%,\n      0 100%,\n      0 0\n    );\n    .btn-icon {\n      transition: 0.5s ease;\n      transform: rotate(45deg);\n      right: 8px;\n    }\n  }\n}\n\n.btn-icon {\n  transition: 0.5s ease;\n  position: absolute;\n  right: 2px;\n  top: 15%;\n  color: $color-white;\n  font-size: 1.5em;\n}\n","// colors\n\n$bg-light: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);\n$bg-dark: #252526;\n\n$color-black: #252526;\n$color-white: #f4f4f4;\n$color-red: #ba2e31;\n\n$box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n","@keyframes lineLoader {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 40%;\n  }\n}\n\n@keyframes squareRotate {\n  0% {\n    transform: translate(0);\n  }\n  25% {\n    transform: translate(4px, 2px);\n  }\n  50% {\n    transform: translate(0px, 0px);\n  }\n  75% {\n    transform: translate(-3px, -6px);\n  }\n  100% {\n    transform: translate(0);\n  }\n}\n\n@keyframes textReveal {\n  0% {\n    transform: translateX(-50px) rotate(0deg);\n    opacity: 0;\n  }\n  50% {\n    transform: translateX(0px) rotate(10deg);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(50px) rotate(0deg);\n    opacity: 0;\n  }\n}\n",".pageLoader {\n  width: 100%;\n  height: 100%;\n  font-size: 3.063em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n  &::before {\n    content: \"\";\n    position: absolute;\n    width: 40%;\n    height: 1px;\n    background-color: $color-black;\n    top: 40%;\n    left: 0;\n    animation: lineLoader 5s ease-in reverse forwards;\n  }\n  &::after {\n    content: \"\";\n    position: absolute;\n    width: 40%;\n    height: 1px;\n    background-color: $color-black;\n    bottom: 40%;\n    right: 0;\n    animation: lineLoader 5s ease-in reverse forwards;\n  }\n  h1 {\n    font-family: $font-heading;\n    position: relative;\n  }\n  .counter {\n    display: flex;\n    position: absolute;\n    right: 5%;\n    bottom: 10%;\n    font-family: $font-heading;\n  }\n}\n.pageLoader.active {\n  transform: translate(-100%);\n  opacity: 0;\n  transition: 1s ease-in;\n  visibility: hidden;\n}\n.wrapper-loader.remove {\n  display: none;\n  transition: 1s ease-in;\n}\n.wrapper-loader {\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  background-image: $bg-light;\n  z-index: 1;\n  overflow-x: hidden;\n  transition: 1s ease-in;\n}\n\n#bgLoad {\n  opacity: 0.2;\n  position: absolute;\n  right: 0;\n  top: -150px;\n  animation: squareRotate 8s linear infinite;\n  rotate: 190deg;\n}\n\n#pageLoaded {\n  transform: translateY(-200px);\n  display: none;\n  opacity: 0;\n  transition: 1s ease-in;\n  transition: display 2s ease;\n  .hero-col-1 {\n    .hero__title {\n      transition: 1s ease-in;\n      transform: translateX(-100px);\n    }\n    .btn {\n      transform: translatey(-200px);\n    }\n  }\n}\n#pageLoaded.display {\n  display: block;\n}\n#pageLoaded.active {\n  transform: translateY(0px);\n  opacity: 1;\n  transition: display 2s ease;\n  transition: 1s ease-in;\n  .hero-col-1 {\n    .hero__title {\n      transition: 1s ease-in;\n      transform: translateX(0px);\n    }\n    .btn {\n      transform: translatey(0px);\n    }\n  }\n}\n",".header {\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n  #bgNav {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    z-index: -1;\n    filter: invert(100%) opacity(0.5);\n  }\n}\n.navbar {\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  padding: 1em 5em 2em;\n\n  &__list ul {\n    display: flex;\n    gap: 3em;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    a {\n      font-weight: 500;\n      font-size: 0.8em;\n      position: relative;\n      transition: 0.4s ease-in;\n      padding: 0.2em;\n      &:hover {\n        color: $color-white;\n        transition: 0.4s ease-in;\n      }\n    }\n    a::before {\n      transform: scaleX(0);\n      transform-origin: bottom right;\n    }\n\n    a:hover::before {\n      transform: scaleX(1);\n      transform-origin: bottom left;\n    }\n\n    a::before {\n      content: \" \";\n      display: block;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      inset: 0 0 0 0;\n      background: $color-red;\n      z-index: -1;\n      transition: transform 0.3s ease;\n    }\n  }\n  #brandLogoWhite {\n    display: none;\n  }\n}\n",".hero {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  place-items: center;\n  height: 80vh;\n  margin: 0 auto;\n  position: relative;\n  &::before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 105%;\n    background-color: $color-black;\n    top: -3vh;\n    clip-path: polygon(0 0, 100% 0, 100% 60%, 75% 100%, 25% 100%, 0 100%);\n    z-index: -10;\n  }\n}\n.hero-col-1 {\n  width: 70%;\n  h1 {\n    font-weight: 600;\n    font-size: 4.375em;\n    flex-direction: column;\n    margin: 1em 0 0;\n    line-height: 80px;\n    letter-spacing: 7px;\n    position: relative;\n    &::before {\n      content: \"\";\n      position: absolute;\n      width: 140px;\n      height: 2px;\n      background-color: $color-white;\n      left: -140px;\n      top: 20%;\n    }\n    span {\n      font-family: $font-heading !important;\n      color: $color-white;\n    }\n  }\n  p {\n    margin: 1em 0;\n    max-width: 40ch;\n    line-height: 25px;\n    color: $color-white !important;\n    letter-spacing: 1px;\n  }\n}\n.hero-col-2 {\n  width: 70%;\n  height: 100%;\n  position: relative;\n  #bgHero {\n    position: absolute;\n    height: 60%;\n    width: fit-content;\n    top: 10%;\n    right: 0;\n    filter: opacity(0.1) invert(100%);\n    animation: squareRotate 8s linear infinite;\n  }\n  .icons-fixed {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n  }\n}\n\n.icons-fixed {\n  li:nth-child(1) a {\n    margin-bottom: 1em;\n  }\n  a {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n\n    i {\n      font-size: 1.5em;\n      border-radius: 50%;\n      padding: 0.2em;\n      opacity: 0.9;\n      transition: 0.3s ease-in;\n    }\n    span {\n      margin-right: 1em;\n      visibility: hidden;\n      transition: 0.3s ease-in;\n      opacity: 0;\n    }\n  }\n  li:hover {\n    i {\n      background-color: #86868656;\n      transition: 0.3s ease-in;\n    }\n  }\n  li:hover span {\n    visibility: visible;\n    opacity: 1;\n    transition: 0.3s ease-in;\n  }\n}\n",".projects {\n  min-height: 100vh;\n  width: 80%;\n  margin: 40vh auto 0;\n\n  h5 {\n    font-family: $font-paragraph;\n    width: fit-content;\n    a {\n      text-decoration: underline;\n    }\n  }\n}\n.article-title {\n  font-size: 2.25em;\n  position: relative;\n  &::before {\n    content: \"\";\n    position: absolute;\n    width: 140px;\n    height: 1px;\n    background-color: $color-black;\n    left: -140px;\n    top: 40%;\n  }\n}\n.project__box {\n  margin: 20em auto;\n  display: flex;\n  &-view {\n    width: 100%;\n    position: relative;\n    .svg-dot {\n      position: absolute;\n      top: -10%;\n      left: -7%;\n      z-index: -1;\n      animation: squareRotate 9s linear infinite;\n    }\n\n    .box img {\n      width: 100%;\n      padding: 0;\n      margin: 0;\n    }\n    .box {\n      width: 100%;\n      height: 100%;\n      position: relative;\n      overflow: hidden;\n      box-shadow: $box-shadow;\n      &::before {\n        content: \"\";\n        position: absolute;\n        width: 150%;\n        height: 180%;\n        background-color: $color-black;\n        top: -25%;\n        left: -20%;\n        opacity: 0.9;\n        transition: 1s ease;\n        transform: rotate(30deg);\n      }\n      &:hover {\n        &::before {\n          transform: translateY(-100%);\n          transition: 1s ease;\n        }\n      }\n    }\n  }\n  .wrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    position: relative;\n    margin-left: 3em;\n    padding: 1em 0;\n    .project__box-title {\n      display: flex;\n      flex-direction: column;\n      font-size: 1.5em;\n      span {\n        font-size: 0.7em;\n        font-style: italic;\n      }\n    }\n    .project__box-desc {\n      max-width: 40ch;\n      line-height: 24px;\n    }\n    h4 {\n      font-family: $font-paragraph;\n      ul {\n        margin-top: 0.5em;\n        display: flex;\n        gap: 1em;\n        font-style: italic;\n      }\n    }\n    .project__box-icons {\n      position: absolute;\n      right: 0;\n      &::before {\n        content: \"\";\n        position: absolute;\n        width: 1px;\n        height: 200px;\n        background-color: $color-black;\n        left: 78%;\n        top: 150%;\n      }\n      a {\n        display: flex;\n        align-items: center;\n        flex-direction: row-reverse;\n        i {\n          font-size: 1.5em;\n          border-radius: 50%;\n          padding: 0.3em;\n          transition: 0.3s ease-in;\n          box-shadow: $box-shadow;\n        }\n        span {\n          visibility: hidden;\n          opacity: 0;\n          margin-right: 1em;\n          transition: 0.3s ease-in;\n        }\n      }\n      a:hover span {\n        opacity: 1;\n        visibility: visible;\n        transition: 0.3s ease-in;\n      }\n      a:hover i {\n        background-color: #86868656;\n        transition: 0.3s ease-in;\n      }\n      a:nth-child(1) {\n        margin-bottom: 1em;\n      }\n    }\n  }\n}\n.project__box:nth-child(2) {\n  margin-top: 10em;\n}\n.project__box:nth-child(3) {\n  display: flex;\n  flex-direction: row-reverse;\n  text-align: right;\n  .project__box-view {\n    .svg-dot {\n      left: 90%;\n    }\n    .box:hover {\n      &::before {\n        transform: translatex(100%);\n        transition: 1s ease;\n      }\n    }\n  }\n  .wrapper {\n    flex-direction: column;\n    position: relative;\n    align-items: flex-end;\n    margin-right: 3em;\n    .project__box-icons {\n      position: absolute;\n      right: 90%;\n      &::before {\n        left: 20%;\n      }\n      a {\n        flex-direction: row;\n        span {\n          margin: 0 0 0 1em;\n        }\n      }\n    }\n  }\n}\n\n.project__box:nth-child(4) .project__box-view {\n  .box {\n    transition: 1s ease;\n  }\n  .box:hover::before {\n    transform: translateY(100%);\n    left: -40%;\n    transition: 1s ease;\n  }\n}\n\n.project__box:nth-of-type(3) {\n  margin-bottom: 5em;\n}\n",".about {\n  width: 80%;\n  margin: 30vh auto 0;\n  h2 {\n    margin-bottom: 20vh;\n  }\n  &-profile {\n    display: flex;\n    position: relative;\n    &__photo {\n      position: relative;\n      .svg-dot {\n        position: absolute;\n        left: -13%;\n        bottom: -12%;\n        z-index: -1;\n      }\n    }\n    &__list {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around;\n      margin-left: 5em;\n      h3 {\n        font-size: 1.5em;\n      }\n      li {\n        margin: 1.5em 0;\n        font-family: $font-paragraph;\n        max-width: 20ch;\n      }\n      .btn {\n        padding-right: 2.6em;\n        &-icon {\n          color: $color-white;\n          right: 6px;\n        }\n      }\n      .btn:hover {\n        .btn-icon {\n          transform: rotate(0);\n        }\n      }\n    }\n    &__icons {\n      position: relative;\n      margin-left: 5em;\n      .icons-fixed {\n        position: absolute;\n        top: 0;\n        i {\n          box-shadow: $box-shadow;\n        }\n      }\n    }\n  }\n  &-description {\n    display: flex;\n    margin-top: 8em;\n    gap: 5em;\n    width: 100%;\n    &__paragraph {\n      max-width: 50ch;\n      line-height: 30px;\n    }\n    &__list {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      ul {\n        display: flex;\n        width: 50%;\n        margin: 0.5em 1em;\n        gap: 0.5em 4em;\n        flex-wrap: wrap;\n        list-style: circle;\n        font-family: $font-paragraph;\n        color: $color-black;\n      }\n    }\n  }\n  .logo-slide {\n    width: 80%;\n    margin: 8em auto;\n    display: flex;\n    justify-content: space-between;\n    img {\n      max-width: 120px;\n      padding: 1em 2em;\n      border-radius: 10px;\n    }\n    img:nth-child(1) {\n      animation: iconOpac 8s linear infinite;\n    }\n    img:nth-child(2) {\n      animation: iconOpac 6s linear infinite;\n      animation-delay: 2s;\n    }\n    img:nth-child(3) {\n      animation: iconOpac 4s linear infinite;\n      animation-delay: 4s;\n    }\n    img:nth-child(4) {\n      animation: iconOpac 4s linear infinite;\n      animation-delay: 6s;\n    }\n  }\n}\n\n@keyframes iconOpac {\n  0% {\n    filter: grayscale(100%) opacity(0.5);\n  }\n  50% {\n    filter: grayscale(0%) opacity(1);\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n  }\n  100% {\n    filter: grayscale(100%) opacity(0.5);\n  }\n}\n",".contact {\n  width: 80%;\n  margin: 15em auto 0;\n  display: flex;\n  flex-direction: column;\n  .wrapper {\n    width: 100%;\n    position: relative;\n    .form-info {\n      position: absolute;\n      right: 0;\n      top: 0;\n      li {\n        margin: 1em 0;\n        line-height: 25px;\n        p {\n          opacity: 0.6;\n        }\n      }\n    }\n  }\n  &-subtitle {\n    margin: 3em 0;\n  }\n  form {\n    display: grid;\n    width: fit-content;\n    gap: 2em 0;\n    font-family: $font-paragraph;\n    input,\n    textarea {\n      border: none;\n      padding: 1em;\n      margin-right: 2em;\n      border-bottom: 1px solid $color-black;\n      background-color: transparent;\n      &:focus {\n        outline: none;\n        box-shadow: $box-shadow;\n      }\n    }\n    .btn {\n      background-color: $color-red;\n      border: none;\n    }\n  }\n}\n\nfooter {\n  display: flex;\n  width: 80%;\n  margin: 5em auto 1em;\n  justify-content: space-around;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./headFont.otf":
/*!**********************!*\
  !*** ./headFont.otf ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "headFont.otf";

/***/ }),

/***/ "./src/assets/BG-hero.png":
/*!********************************!*\
  !*** ./src/assets/BG-hero.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "BG-hero.png";

/***/ }),

/***/ "./src/assets/DotGrid.png":
/*!********************************!*\
  !*** ./src/assets/DotGrid.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "DotGrid.png";

/***/ }),

/***/ "./src/assets/Vector.png":
/*!*******************************!*\
  !*** ./src/assets/Vector.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Vector.png";

/***/ }),

/***/ "./src/assets/javascript.svg":
/*!***********************************!*\
  !*** ./src/assets/javascript.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "javascript.svg";

/***/ }),

/***/ "./src/assets/laravel.svg":
/*!********************************!*\
  !*** ./src/assets/laravel.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "laravel.svg";

/***/ }),

/***/ "./src/assets/logo-white.svg":
/*!***********************************!*\
  !*** ./src/assets/logo-white.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo-white.svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.svg";

/***/ }),

/***/ "./src/assets/php.svg":
/*!****************************!*\
  !*** ./src/assets/php.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "php.svg";

/***/ }),

/***/ "./src/assets/profilepic.png":
/*!***********************************!*\
  !*** ./src/assets/profilepic.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "profilepic.png";

/***/ }),

/***/ "./src/assets/vue.svg":
/*!****************************!*\
  !*** ./src/assets/vue.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "vue.svg";

/***/ }),

/***/ "./src/assets/ww.png":
/*!***************************!*\
  !*** ./src/assets/ww.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ww.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_BG_hero_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/BG-hero.png */ "./src/assets/BG-hero.png");
/* harmony import */ var _assets_Vector_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/Vector.png */ "./src/assets/Vector.png");
/* harmony import */ var _assets_ww_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/ww.png */ "./src/assets/ww.png");
/* harmony import */ var _assets_DotGrid_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/DotGrid.png */ "./src/assets/DotGrid.png");
/* harmony import */ var _assets_profilepic_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/profilepic.png */ "./src/assets/profilepic.png");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_logo_white_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/logo-white.svg */ "./src/assets/logo-white.svg");
/* harmony import */ var _assets_javascript_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/javascript.svg */ "./src/assets/javascript.svg");
/* harmony import */ var _assets_php_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/php.svg */ "./src/assets/php.svg");
/* harmony import */ var _assets_laravel_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/laravel.svg */ "./src/assets/laravel.svg");
/* harmony import */ var _assets_vue_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/vue.svg */ "./src/assets/vue.svg");
/* harmony import */ var _script_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./script/loader */ "./src/script/loader.js");
/* harmony import */ var _script_toggleDark__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./script/toggleDark */ "./src/script/toggleDark.js");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style/main.scss */ "./src/style/main.scss");
// Images




 //Svg






 //Scripts




var logo = document.getElementById("brandLogo");
var logoMode = document.getElementById("brandLogoWhite");
var bgNavbar = document.getElementById("bgNav");
var hero = document.getElementById("bgHero");
var mockupProject1 = document.querySelectorAll(".img-1");
var dotGrid = document.querySelectorAll(".svg-dot");
var profile = document.getElementById("profile-photo");
var logoSlider = document.querySelector(".logo-slide").children;
var logoArray = [_assets_javascript_svg__WEBPACK_IMPORTED_MODULE_7__, _assets_php_svg__WEBPACK_IMPORTED_MODULE_8__, _assets_laravel_svg__WEBPACK_IMPORTED_MODULE_9__, _assets_vue_svg__WEBPACK_IMPORTED_MODULE_10__];
dotGrid.forEach(function (img) {
  img.src = _assets_DotGrid_png__WEBPACK_IMPORTED_MODULE_3__;
});
mockupProject1.forEach(function (img) {
  img.src = _assets_ww_png__WEBPACK_IMPORTED_MODULE_2__;
});
profile.src = _assets_profilepic_png__WEBPACK_IMPORTED_MODULE_4__;
logoMode.src = _assets_logo_white_svg__WEBPACK_IMPORTED_MODULE_6__;
logo.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__;
bgNavbar.src = _assets_Vector_png__WEBPACK_IMPORTED_MODULE_1__;
hero.src = _assets_BG_hero_png__WEBPACK_IMPORTED_MODULE_0__;
logoSlider[0].src = logoArray[0];
logoSlider[1].src = logoArray[1];
logoSlider[2].src = logoArray[2];
logoSlider[3].src = logoArray[3];
(0,_script_loader__WEBPACK_IMPORTED_MODULE_11__["default"])();
(0,_script_toggleDark__WEBPACK_IMPORTED_MODULE_12__["default"])();

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("b5lSr9BjAbz8bQdpY");
})();

window.onload = function () {
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // generate a five digit number for the contact_number variable

    this.contact_number.value = Math.random() * 100000 | 0; // these IDs from the previous steps

    emailjs.sendForm("service_cirdjbl", "contact_form", this).then(function () {
      console.log("SUCCESS!");
    }, function (error) {
      console.log("FAILED...", error);
    });
  });
};
})();

/******/ })()
;
//# sourceMappingURL=bundle9308df9ccde31acbd391.js.map