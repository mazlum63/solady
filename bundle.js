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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_base_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_base_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_base_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dist_index_html__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dist_index_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dist_index_html__);
// Js Files
/* import './js/scripts.js'; */

// Scss Files


// Html Files


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"tr\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"assets/libs/bootstrap/css/bootstrap.min.css\">\n    <link rel=\"stylesheet\" href=\"assets/libs/swiper/swiper.min.css\">\n    <link rel=\"stylesheet\" href=\"assets/fonts/flaticon.css\">\n    <link rel=\"stylesheet\" href=\"assets/libs/wow/animate.css\">\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n\n<body>\n    <header>\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 text-right\">\n                    <div class=\"socialMedya inline-block\">\n                        <a href=\"#\"><span class=\"flaticon-facebook\"></span></a>\n                        <a href=\"#\"><span class=\"flaticon-instagram-logo\"></span></a>\n                        <a href=\"#\"><span class=\"flaticon-linkedin-logo\"></span></a>\n                        <a href=\"#\"><span class=\"flaticon-youtube-symbol\"></span></a>\n                    </div>\n                </div>\n                <div class=\"col-sm-12 text-center\">\n                    <img src=\"assets/images/ladyLogo.png\" class=\"header-logo img-responsive\" alt=\"\">\n                </div>\n                <div class=\"col-sm-12 text-right\">\n                        <form class=\"form-inline\">\n                            <div class=\"input-group mb-2 mr-sm-2 mb-sm-0 header-form\">\n                                <div class=\"input-group-addon\"><span class=\"flaticon-tool\"></span></div>\n                                <input type=\"text\" class=\"form-control search\">\n                            </div>\n                            <a href=\"login.html\" class=\"form-control login\"><span class=\"flaticon-people\"></span>LOGIN</a>\n                        </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <nav class=\"navbar navbar-default\">\n                        <div class=\"container-fluid\">\n                          <!-- Brand and toggle get grouped for better mobile display -->\n                          <div class=\"navbar-header\">\n                            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                              <span class=\"sr-only\">Toggle navigation</span>\n                              <span class=\"icon-bar\"></span>\n                              <span class=\"icon-bar\"></span>\n                              <span class=\"icon-bar\"></span>\n                            </button>\n                          </div>\n                      \n                          <!-- Collect the nav links, forms, and other content for toggling -->\n                          <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                            <ul class=\"nav navbar-nav\">\n                                <li class=\"dropdown\">\n                                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">COLLECTION</a>\n                                    <ul class=\"dropdown-menu\">\n                                        <li><a href=\"collection17.html\">Collection 2017</a></li>\n                                        <li><a href=\"collection16.html\">Collection 2016</a></li>\n                                    </ul>\n                                </li>\n                                <li><a href=\"about.html\">ABOUT US</a></li>\n                                <li><a href=\"where.html\">WHERE TO FIND</a></li>\n                                <li><a href=\"backstage.html\">BACKSTAGE</a></li>\n                                <li><a href=\"contact.html\">CONTACT</a></li>\n                            </ul>\n                          </div><!-- /.navbar-collapse -->\n                        </div><!-- /.container-fluid -->\n                      </nav>\n                </div>\n            </div>\n        </div>\n    </header>\n\n    <main id=\"index\">\n        <div class=\"container-fluid\">\n            <div class=\"row wow fadeInUp\">\n                <div class=\"col-sm-12\">\n                    <img src=\"assets/images/resim1.jpg\" class=\"img-responsive\" alt=\"\">\n                    <div class=\"view-collection\">\n                        <h1>ENHANCE YOUR STYLE</h1><br>\n                        <a href=\"#\">VIEW COLLECTION</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row collections\">\n                <div class=\"col-sm-6 wow slideInLeft\">\n                    <div class=\"col-sm-10 text-right\">\n                        <h2>COLLECTION 2016</h2>\n                    </div>\n                    <div class=\"col-sm-12 text-right\">\n                        <div class=\"collection-years\" style=\"background-image: url(assets/images/resim2.jpg)\">\n                            <a href=\"#\" ><img src=\"assets/images/resim2.jpg\" alt=\"\"></a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6 wow slideInRight\">\n                    <div class=\"col-sm-10 col-sm-offset-2\">\n                        <h2>COLLECTION 2017</h2>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"collection-years\" style=\"background-image: url(assets/images/resim3.jpg)\">\n                            <a href=\"#\" ><img src=\"assets/images/resim3.jpg\" alt=\"\"></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-5 col-sm-offset-7 text-left wow slideInRight\">\n                    <h2>NEW</h2>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-6 wow slideInLeft\">\n                    <div class=\"col-sm-12 text-right\">\n                        <div class=\"collection-new\" style=\"background-image: url(assets/images/resim4.jpg)\">\n                            <a href=\"#\" ><img src=\"assets/images/resim4.jpg\" alt=\"\"></a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6 wow slideInRight\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"collection-new\" style=\"background-image: url(assets/images/resim5.jpg)\">\n                            <a href=\"#\" ><img src=\"assets/images/resim5.jpg\" alt=\"\"></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-9 text-right wow slideInLeft\">\n                    <h2>Backstage Video</h2>\n                </div>\n            </div>\n        </div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 wow fadeInUp\">\n                    <iframe id=\"video\" class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/xxdZXtpivJI?rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen=\"\"></iframe>\n                </div>\n            </div>\n        </div>\n        <div class=\"container-fluid wow fadeInUp\">\n            <div class=\"row\">\n                <div class=\"col-sm-8 col-sm-offset-4\">\n                    <h2>Instagram Feed</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-8 col-sm-offset-2\">\n                <div class=\"swiper-container\">\n                    <!-- Additional required wrapper -->\n                    <div class=\"swiper-wrapper\">\n                        <!-- Slides -->\n                        <div class=\"swiper-slide\">\n                            <a href=\"#\">\n                                <div class=\"more-dress\" style=\"background-image: url(assets/images/resim1.jpg)\">\n                                    <img src=\"assets/images/resim1.jpg\" alt=\"\">\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"swiper-slide\">\n                            <a href=\"#\">\n                                <div class=\"more-dress\" style=\"background-image: url(assets/images/resim2.jpg)\">\n                                    <img src=\"assets/images/resim2.jpg\" alt=\"\">\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"swiper-slide\">\n                            <a href=\"#\">\n                                <div class=\"more-dress\" style=\"background-image: url(assets/images/resim3.jpg)\">\n                                    <img src=\"assets/images/resim3.jpg\" alt=\"\">\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"swiper-slide\">\n                            <a href=\"#\">\n                                <div class=\"more-dress\" style=\"background-image: url(assets/images/resim4.jpg)\">\n                                    <img src=\"assets/images/resim4.jpg\" alt=\"\">\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"swiper-slide\">\n                            <a href=\"#\">\n                                <div class=\"more-dress\" style=\"background-image: url(assets/images/resim5.jpg)\">\n                                    <img src=\"assets/images/resim5.jpg\" alt=\"\">\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"swiper-slide\">\n                            <a href=\"#\">\n                                <div class=\"more-dress\" style=\"background-image: url(assets/images/resim6.jpg)\">\n                                    <img src=\"assets/images/resim6.jpg\" alt=\"\">\n                                </div>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </main>\n\n    <footer>\n       <div class=\"container-fluid\">\n           <div class=\"row\">\n               <div class=\"col-sm-5 col-sm-offset-1\">\n                   <div class=\"container-fluid\">\n                       <div class=\"row phone\">\n                           <div class=\"col-xs-2\"><span class=\"flaticon-telephone img-circle\"></span></div>\n                           <div class=\"col-xs-10\"><p>+90 232 425 10 14</p></div>\n                       </div>\n                       <div class=\"row\">\n                            <div class=\"col-xs-2\"><span class=\"flaticon-printer img-circle\"></span></div>\n                            <div class=\"col-xs-10\"><p>+90 232 484 73 68</p></div>\n                       </div>\n                       <div class=\"row\">\n                            <div class=\"col-xs-2\"><span class=\"flaticon-maps-and-flags img-circle\"></span></div>\n                            <div class=\"col-xs-10\"><p>Akdeniz Mahallesi, Mimar Kemalettin Caddesi, No:26/A, 35210 Konak/İZMİR</p></div>\n                       </div>\n                   </div>\n                </div>\n                <div class=\"col-sm-5 col-sm-offset-1\">\n                    <div class=\"container-fluid\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-2\"><span class=\"flaticon-close-envelope img-circle\"></span></div>\n                            <div class=\"col-xs-10\"><p><a href=\"#\">info@solady.com.tr</a></p></div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-2\"><span class=\"flaticon-facebook img-circle\"></span></div>\n                            <div class=\"col-xs-10\"><p><a href=\"#\">/SoLadyWomen</a></p></div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-2\"><span class=\"flaticon-instagram-logo img-circle\"></span></div>\n                            <div class=\"col-xs-10\"><p><a href=\"#\">/soladywomen</a></p></div>\n                        </div>\n                    </div>\n                </div>\n           </div>\n       </div>\n    </footer>\n    <script src=\"assets/libs/jquery/js/jquery-3.2.1.min.js\"></script>\n    <script src=\"assets/libs/bootstrap/js/bootstrap.min.js\"></script>\n    <script src=\"assets/libs/swiper/swiper.min.js\"></script>\n    <script type=\"text/javascript\" src=\"bundle.js\"></script>\n    <script src=\"assets/libs/wow/wow.min.js\"></script>\n    <script>\n        new WOW().init();\n        var swiper = new Swiper('.swiper-container', {\n            slidesPerView: 5,\n            spaceBetween: 30,\n            loop: true,\n            pagination: {\n              el: '.swiper-pagination',\n              clickable: true,\n            },\n          });\n    </script>\n</body>\n\n</html>"

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);