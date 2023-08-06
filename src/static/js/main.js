/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  // Select DOM Items\n  var menuBtn = document.querySelector(\".menu-btn\");\n  var menu = document.querySelector(\".menu\");\n  var menuLogo = document.querySelector(\"img.logo\");\n  var menuNav = document.querySelector(\".menu-nav\");\n  var menuBody = document.querySelector(\".body-nav\");\n  var navItems = document.querySelectorAll(\".nav-item\");\n  var navlink = document.querySelectorAll(\".nav-link\");\n  var navSozial = document.querySelectorAll(\".sozial\");\n\n  // Set initial state of menu\n  var showMenu = false;\n  menuBtn.addEventListener(\"click\", toggleMenu);\n  function toggleMenu() {\n    if (!showMenu) {\n      menuBtn.classList.add(\"close\");\n      menu.classList.add(\"show\");\n      menuNav.classList.add(\"show\");\n      menuBody.classList.add('show');\n      setTimeout(function () {\n        navlink.forEach(function (item) {\n          return item.classList.add(\"show\");\n        });\n        navItems.forEach(function (item) {\n          return item.classList.add(\"show\");\n        });\n      }, \"500\");\n      setTimeout(function () {\n        navSozial.forEach(function (item) {\n          return item.classList.add(\"show\");\n        });\n        menuLogo.classList.add('show');\n      }, \"900\");\n\n      // Set Menu State\n      showMenu = true;\n    } else {\n      menuBtn.classList.remove(\"close\");\n      menu.classList.remove(\"show\");\n      menuNav.classList.remove(\"show\");\n      menuBody.classList.remove('show');\n      menuLogo.classList.remove('show');\n      navItems.forEach(function (item) {\n        return item.classList.remove(\"show\");\n      });\n      navlink.forEach(function (item) {\n        return item.classList.remove(\"show\");\n      });\n      navSozial.forEach(function (item) {\n        return item.classList.remove(\"show\");\n      });\n\n      // Set Menu State\n      showMenu = false;\n    }\n  }\n\n  //Open PopUp\n  var openOverlay = document.querySelectorAll('.open-overlay');\n  openOverlay.forEach(function (btn) {\n    btn.addEventListener('click', function () {\n      var overlay = document.getElementById(\"overlay\");\n      var content = document.getElementById(\"content\");\n      overlay.classList.add('active');\n      content.classList.add('active');\n    });\n  });\n\n  //Close PopUp\n  var overlay = document.getElementById(\"overlay\");\n  overlay.addEventListener('click', function () {\n    var overlay = document.getElementById(\"overlay\");\n    var content = document.getElementById(\"content\");\n    overlay.classList.remove('active');\n    content.classList.remove('active');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtZW51QnRuIiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJtZW51TG9nbyIsIm1lbnVOYXYiLCJtZW51Qm9keSIsIm5hdkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsIm5hdmxpbmsiLCJuYXZTb3ppYWwiLCJzaG93TWVudSIsInRvZ2dsZU1lbnUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwiZm9yRWFjaCIsIml0ZW0iLCJyZW1vdmUiLCJvcGVuT3ZlcmxheSIsImJ0biIsIm92ZXJsYXkiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRlbnQiXSwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21haW4uanM/Y2JlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgLy8gU2VsZWN0IERPTSBJdGVtc1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG4gICAgY29uc3QgbWVudUxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nLmxvZ29cIik7XG4gICAgY29uc3QgbWVudU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1uYXZcIik7XG4gICAgY29uc3QgbWVudUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvZHktbmF2XCIpO1xuICAgIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtaXRlbVwiKTtcbiAgICBjb25zdCBuYXZsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtbGlua1wiKTtcbiAgICBjb25zdCBuYXZTb3ppYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNvemlhbFwiKTtcblxuICAgIC8vIFNldCBpbml0aWFsIHN0YXRlIG9mIG1lbnVcbiAgICBsZXQgc2hvd01lbnUgPSBmYWxzZTtcblxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU1lbnUpO1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcbiAgICBpZiAoIXNob3dNZW51KSB7XG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlXCIpO1xuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgICBtZW51TmF2LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgICBtZW51Qm9keS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBuYXZsaW5rLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpKTtcbiAgICAgICAgICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpKTtcbiAgICAgICAgfSwgXCI1MDBcIik7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBuYXZTb3ppYWwuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcInNob3dcIikpO1xuICAgICAgICAgICAgbWVudUxvZ28uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICB9LCBcIjkwMFwiKTtcblxuXG4gICAgICAgIC8vIFNldCBNZW51IFN0YXRlXG4gICAgICAgIHNob3dNZW51ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zZVwiKTtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgbWVudU5hdi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgbWVudUJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXG4gICAgICAgIG1lbnVMb2dvLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxuICAgICAgICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKSk7XG4gICAgICAgIG5hdmxpbmsuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIikpO1xuICAgICAgICBuYXZTb3ppYWwuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIikpO1xuXG4gICAgICAgIC8vIFNldCBNZW51IFN0YXRlXG4gICAgICAgIHNob3dNZW51ID0gZmFsc2U7XG4gICAgfVxuICAgIH1cblxuICAgIC8vT3BlbiBQb3BVcFxuICAgIGxldCBvcGVuT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcGVuLW92ZXJsYXknKTtcbiAgICBvcGVuT3ZlcmxheS5mb3JFYWNoKGZ1bmN0aW9uKGJ0bikge1xuXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7XG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG5cbiAgICAgICAgfSk7XG4gXG4gICAgfSk7XG5cbiAgICAvL0Nsb3NlIFBvcFVwXG4gICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7XG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpO1xuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICAgIH0pO1xuXG5cbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUNoRDtFQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsV0FBVyxDQUFDO0VBQ25ELElBQU1DLElBQUksR0FBR0osUUFBUSxDQUFDRyxhQUFhLENBQUMsT0FBTyxDQUFDO0VBQzVDLElBQU1FLFFBQVEsR0FBR0wsUUFBUSxDQUFDRyxhQUFhLENBQUMsVUFBVSxDQUFDO0VBQ25ELElBQU1HLE9BQU8sR0FBR04sUUFBUSxDQUFDRyxhQUFhLENBQUMsV0FBVyxDQUFDO0VBQ25ELElBQU1JLFFBQVEsR0FBR1AsUUFBUSxDQUFDRyxhQUFhLENBQUMsV0FBVyxDQUFDO0VBQ3BELElBQU1LLFFBQVEsR0FBR1IsUUFBUSxDQUFDUyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7RUFDdkQsSUFBTUMsT0FBTyxHQUFHVixRQUFRLENBQUNTLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztFQUN0RCxJQUFNRSxTQUFTLEdBQUdYLFFBQVEsQ0FBQ1MsZ0JBQWdCLENBQUMsU0FBUyxDQUFDOztFQUV0RDtFQUNBLElBQUlHLFFBQVEsR0FBRyxLQUFLO0VBRXBCVixPQUFPLENBQUNELGdCQUFnQixDQUFDLE9BQU8sRUFBRVksVUFBVSxDQUFDO0VBRTdDLFNBQVNBLFVBQVVBLENBQUEsRUFBRztJQUN0QixJQUFJLENBQUNELFFBQVEsRUFBRTtNQUNYVixPQUFPLENBQUNZLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztNQUM5QlgsSUFBSSxDQUFDVSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDMUJULE9BQU8sQ0FBQ1EsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQzdCUixRQUFRLENBQUNPLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUU5QkMsVUFBVSxDQUFDLFlBQU07UUFDYk4sT0FBTyxDQUFDTyxPQUFPLENBQUMsVUFBQUMsSUFBSTtVQUFBLE9BQUlBLElBQUksQ0FBQ0osU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQUEsRUFBQztRQUNuRFAsUUFBUSxDQUFDUyxPQUFPLENBQUMsVUFBQUMsSUFBSTtVQUFBLE9BQUlBLElBQUksQ0FBQ0osU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQUEsRUFBQztNQUN4RCxDQUFDLEVBQUUsS0FBSyxDQUFDO01BRVRDLFVBQVUsQ0FBQyxZQUFNO1FBQ2JMLFNBQVMsQ0FBQ00sT0FBTyxDQUFDLFVBQUFDLElBQUk7VUFBQSxPQUFJQSxJQUFJLENBQUNKLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUFBLEVBQUM7UUFDckRWLFFBQVEsQ0FBQ1MsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQ2xDLENBQUMsRUFBRSxLQUFLLENBQUM7O01BR1Q7TUFDQUgsUUFBUSxHQUFHLElBQUk7SUFDbkIsQ0FBQyxNQUFNO01BQ0hWLE9BQU8sQ0FBQ1ksU0FBUyxDQUFDSyxNQUFNLENBQUMsT0FBTyxDQUFDO01BQ2pDZixJQUFJLENBQUNVLFNBQVMsQ0FBQ0ssTUFBTSxDQUFDLE1BQU0sQ0FBQztNQUM3QmIsT0FBTyxDQUFDUSxTQUFTLENBQUNLLE1BQU0sQ0FBQyxNQUFNLENBQUM7TUFDaENaLFFBQVEsQ0FBQ08sU0FBUyxDQUFDSyxNQUFNLENBQUMsTUFBTSxDQUFDO01BQ2pDZCxRQUFRLENBQUNTLFNBQVMsQ0FBQ0ssTUFBTSxDQUFDLE1BQU0sQ0FBQztNQUNqQ1gsUUFBUSxDQUFDUyxPQUFPLENBQUMsVUFBQUMsSUFBSTtRQUFBLE9BQUlBLElBQUksQ0FBQ0osU0FBUyxDQUFDSyxNQUFNLENBQUMsTUFBTSxDQUFDO01BQUEsRUFBQztNQUN2RFQsT0FBTyxDQUFDTyxPQUFPLENBQUMsVUFBQUMsSUFBSTtRQUFBLE9BQUlBLElBQUksQ0FBQ0osU0FBUyxDQUFDSyxNQUFNLENBQUMsTUFBTSxDQUFDO01BQUEsRUFBQztNQUN0RFIsU0FBUyxDQUFDTSxPQUFPLENBQUMsVUFBQUMsSUFBSTtRQUFBLE9BQUlBLElBQUksQ0FBQ0osU0FBUyxDQUFDSyxNQUFNLENBQUMsTUFBTSxDQUFDO01BQUEsRUFBQzs7TUFFeEQ7TUFDQVAsUUFBUSxHQUFHLEtBQUs7SUFDcEI7RUFDQTs7RUFFQTtFQUNBLElBQUlRLFdBQVcsR0FBR3BCLFFBQVEsQ0FBQ1MsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0VBQzVEVyxXQUFXLENBQUNILE9BQU8sQ0FBQyxVQUFTSSxHQUFHLEVBQUU7SUFFOUJBLEdBQUcsQ0FBQ3BCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BRWhDLElBQUlxQixPQUFPLEdBQUd0QixRQUFRLENBQUN1QixjQUFjLENBQUMsU0FBUyxDQUFDO01BQ2hELElBQUlDLE9BQU8sR0FBR3hCLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxTQUFTLENBQUM7TUFDaERELE9BQU8sQ0FBQ1IsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO01BQy9CUyxPQUFPLENBQUNWLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUduQyxDQUFDLENBQUM7RUFFTixDQUFDLENBQUM7O0VBRUY7RUFDQSxJQUFJTyxPQUFPLEdBQUd0QixRQUFRLENBQUN1QixjQUFjLENBQUMsU0FBUyxDQUFDO0VBQ2hERCxPQUFPLENBQUNyQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUVwQyxJQUFJcUIsT0FBTyxHQUFHdEIsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUNoRCxJQUFJQyxPQUFPLEdBQUd4QixRQUFRLENBQUN1QixjQUFjLENBQUMsU0FBUyxDQUFDO0lBQ2hERCxPQUFPLENBQUNSLFNBQVMsQ0FBQ0ssTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNsQ0ssT0FBTyxDQUFDVixTQUFTLENBQUNLLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFFdEMsQ0FBQyxDQUFDO0FBR04sQ0FBQyxDQUFDIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL21haW4uanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/js/main.js\n");

/***/ }),

/***/ "./assets/scss/page/main.scss":
/*!************************************!*\
  !*** ./assets/scss/page/main.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvc2Nzcy9wYWdlL21haW4uc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9wYWdlL21haW4uc2Nzcz9jNWRiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/scss/page/main.scss\n");

/***/ }),

/***/ "./assets/scss/basic/main.scss":
/*!*************************************!*\
  !*** ./assets/scss/basic/main.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvc2Nzcy9iYXNpYy9tYWluLnNjc3MiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvYmFzaWMvbWFpbi5zY3NzP2RiZWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/scss/basic/main.scss\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/static/js/main": 0,
/******/ 			"static/styles/basic": 0,
/******/ 			"static/styles/style": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["static/styles/basic","static/styles/style"], () => (__webpack_require__("./assets/js/main.js")))
/******/ 	__webpack_require__.O(undefined, ["static/styles/basic","static/styles/style"], () => (__webpack_require__("./assets/scss/page/main.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["static/styles/basic","static/styles/style"], () => (__webpack_require__("./assets/scss/basic/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;