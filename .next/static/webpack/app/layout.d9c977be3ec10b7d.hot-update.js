"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/layout.tsx":
/*!****************************!*\
  !*** ./src/app/layout.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SwipeableTemporaryDrawer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/SwipeableDrawer */ \"(app-pages-browser)/./node_modules/@mui/material/SwipeableDrawer/SwipeableDrawer.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/List */ \"(app-pages-browser)/./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Divider */ \"(app-pages-browser)/./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ListItem */ \"(app-pages-browser)/./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/ListItemButton */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemButton/ListItemButton.js\");\n/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/ListItemIcon */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemIcon/ListItemIcon.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ListItemText */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemText/ListItemText.js\");\n/* harmony import */ var _mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/MoveToInbox */ \"(app-pages-browser)/./node_modules/@mui/icons-material/MoveToInbox.js\");\n/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Mail */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Mail.js\");\n/* harmony import */ var _mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Dashboard */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Dashboard.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction SwipeableTemporaryDrawer() {\n    _s();\n    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1__.useState({\n        top: false,\n        left: false,\n        bottom: false,\n        right: false\n    });\n    const toggleDrawer = (anchor, open)=>(event)=>{\n            if (event && event.type === \"keydown\" && (event.key === \"Tab\" || event.key === \"Shift\")) {\n                return;\n            }\n            setState({\n                ...state,\n                [anchor]: open\n            });\n        };\n    const list = (anchor)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            sx: {\n                width: anchor === \"top\" || anchor === \"bottom\" ? \"auto\" : 250\n            },\n            role: \"presentation\",\n            onClick: toggleDrawer(anchor, false),\n            onKeyDown: toggleDrawer(anchor, false),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: [\n                        \"Inbox\",\n                        \"Starred\",\n                        \"Send email\",\n                        \"Drafts\"\n                    ].map((text, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            disablePadding: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                component: \"a\",\n                                href: \"/\".concat(text.toLowerCase().replace(\" \", \"-\")),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        children: index % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/app/layout.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 36\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/app/layout.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 52\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/app/layout.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        primary: text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/app/layout.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/app/layout.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        }, text, false, {\n                            fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/app/layout.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/app/layout.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/app/layout.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: [\n                        \"All mail\",\n                        \"Trash\",\n                        \"Spam\"\n                    ].map((text, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            disablePadding: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                component: \"a\",\n                                href: \"/\".concat(text.toLowerCase().replace(\" \", \"-\")),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        children: index % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/app/layout.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 36\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/app/layout.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 52\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/app/layout.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        primary: text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/app/layout.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/app/layout.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        }, text, false, {\n                            fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/app/layout.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/app/layout.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/app/layout.tsx\",\n            lineNumber: 42,\n            columnNumber: 5\n        }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"left\"\n        ].map((anchor)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        onClick: toggleDrawer(anchor, true),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                sx: {\n                                    color: \"#fff\",\n                                    mr: 2,\n                                    transform: \"translateY(-2px)\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/app/layout.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this),\n                            \"Dashboard\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/app/layout.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                        anchor: anchor,\n                        open: state[anchor],\n                        onClose: toggleDrawer(anchor, false),\n                        onOpen: toggleDrawer(anchor, true),\n                        children: list(anchor)\n                    }, void 0, false, {\n                        fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/app/layout.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, anchor, true, {\n                fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/app/layout.tsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/app/layout.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this);\n}\n_s(SwipeableTemporaryDrawer, \"1pMNg3VN85DbQ9xKOBrfZl7gTaU=\");\n_c = SwipeableTemporaryDrawer;\nvar _c;\n$RefreshReg$(_c, \"SwipeableTemporaryDrawer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDK0I7QUFDSztBQUN3QjtBQUNsQjtBQUNKO0FBQ007QUFDRTtBQUNZO0FBQ0o7QUFDQTtBQUNFO0FBQ1I7QUFDVTtBQUkzQyxTQUFTYTs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdmLDJDQUFjLENBQUM7UUFDdkNpQixLQUFLO1FBQ0xDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxlQUFlLENBQUNDLFFBQWdCQyxPQUFrQixDQUN0REM7WUFFQSxJQUNFQSxTQUNBQSxNQUFNQyxJQUFJLEtBQUssYUFDZCxPQUErQkMsR0FBRyxLQUFLLFNBQ3RDLE1BQStCQSxHQUFHLEtBQUssT0FBTSxHQUMvQztnQkFDQTtZQUNGO1lBRUFYLFNBQVM7Z0JBQUMsR0FBR0QsS0FBSztnQkFBRSxDQUFDUSxPQUFPLEVBQUVDO1lBQUk7UUFDcEM7SUFFQSxNQUFNSSxPQUFPLENBQUNMLHVCQUNaLDhEQUFDckIseURBQUdBO1lBQ0YyQixJQUFJO2dCQUNGQyxPQUFPUCxXQUFXLFNBQVNBLFdBQVcsV0FBVyxTQUFTO1lBQzVEO1lBQ0FRLE1BQUs7WUFDTEMsU0FBU1YsYUFBYUMsUUFBUTtZQUM5QlUsV0FBV1gsYUFBYUMsUUFBUTs7OEJBQ2hDLDhEQUFDbEIsMERBQUlBOzhCQUNGO3dCQUFDO3dCQUFTO3dCQUFXO3dCQUFjO3FCQUFTLENBQUM2QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3ZELDhEQUFDN0IsOERBQVFBOzRCQUFZOEIsY0FBYztzQ0FDakMsNEVBQUM3QixvRUFBY0E7Z0NBQUM4QixXQUFVO2dDQUFJQyxNQUFNLElBQXlDLE9BQXJDSixLQUFLSyxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxLQUFLOztrREFDdEUsOERBQUNoQyxrRUFBWUE7a0RBQ1YyQixRQUFRLE1BQU0sa0JBQUksOERBQUN6Qix1RUFBU0E7Ozs7aUVBQU0sOERBQUNDLGdFQUFRQTs7Ozs7Ozs7OztrREFFOUMsOERBQUNGLGtFQUFZQTt3Q0FBQ2dDLFNBQVNQOzs7Ozs7Ozs7Ozs7MkJBTFpBOzs7Ozs7Ozs7OzhCQVVuQiw4REFBQzdCLDhEQUFPQTs7Ozs7OEJBQ1IsOERBQUNELDBEQUFJQTs4QkFDRjt3QkFBQzt3QkFBWTt3QkFBUztxQkFBTyxDQUFDNkIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUN4Qyw4REFBQzdCLDhEQUFRQTs0QkFBWThCLGNBQWM7c0NBQ2pDLDRFQUFDN0Isb0VBQWNBO2dDQUFDOEIsV0FBVTtnQ0FBSUMsTUFBTSxJQUF5QyxPQUFyQ0osS0FBS0ssV0FBVyxHQUFHQyxPQUFPLENBQUMsS0FBSzs7a0RBQ3RFLDhEQUFDaEMsa0VBQVlBO2tEQUNWMkIsUUFBUSxNQUFNLGtCQUFJLDhEQUFDekIsdUVBQVNBOzs7O2lFQUFNLDhEQUFDQyxnRUFBUUE7Ozs7Ozs7Ozs7a0RBRTlDLDhEQUFDRixrRUFBWUE7d0NBQUNnQyxTQUFTUDs7Ozs7Ozs7Ozs7OzJCQUxaQTs7Ozs7Ozs7Ozs7Ozs7OztJQWF2QixxQkFDRSw4REFBQ1E7a0JBQ0U7WUFBRTtTQUFPLENBQVdULEdBQUcsQ0FBQyxDQUFDWCx1QkFDeEIsOERBQUN0QiwyQ0FBYzs7a0NBQ2IsOERBQUNHLDZEQUFNQTt3QkFBQzRCLFNBQVNWLGFBQWFDLFFBQVE7OzBDQUNwQyw4REFBQ1Ysc0VBQWFBO2dDQUFDZ0IsSUFBSTtvQ0FBQ2dCLE9BQU87b0NBQVFDLElBQUk7b0NBQUdDLFdBQVc7Z0NBQWtCOzs7Ozs7NEJBQUs7Ozs7Ozs7a0NBRzlFLDhEQUFDNUMsc0VBQWVBO3dCQUNkb0IsUUFBUUE7d0JBQ1JDLE1BQU1ULEtBQUssQ0FBQ1EsT0FBTzt3QkFDbkJ5QixTQUFTMUIsYUFBYUMsUUFBUTt3QkFDOUIwQixRQUFRM0IsYUFBYUMsUUFBUTtrQ0FDNUJLLEtBQUtMOzs7Ozs7O2VBVldBOzs7Ozs7Ozs7O0FBZ0I3QjtHQTlFd0JUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbGF5b3V0LnRzeD81N2E5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgU3dpcGVhYmxlRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU3dpcGVhYmxlRHJhd2VyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGl2aWRlcic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbUJ1dHRvbic7XG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1JY29uJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IEluYm94SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vdmVUb0luYm94JztcbmltcG9ydCBNYWlsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01haWwnO1xuaW1wb3J0IERhc2hib2FyZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EYXNoYm9hcmQnO1xuXG50eXBlIEFuY2hvciA9ICd0b3AnIHwgJ2xlZnQnIHwgJ2JvdHRvbScgfCAncmlnaHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTd2lwZWFibGVUZW1wb3JhcnlEcmF3ZXIoKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIHRvcDogZmFsc2UsXG4gICAgbGVmdDogZmFsc2UsXG4gICAgYm90dG9tOiBmYWxzZSxcbiAgICByaWdodDogZmFsc2UsXG4gIH0pO1xuXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9IChhbmNob3I6IEFuY2hvciwgb3BlbjogYm9vbGVhbikgPT4gKFxuICAgIGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50IHwgUmVhY3QuTW91c2VFdmVudCxcbiAgKSA9PiB7XG4gICAgaWYgKFxuICAgICAgZXZlbnQgJiZcbiAgICAgIGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJyAmJlxuICAgICAgKChldmVudCBhcyBSZWFjdC5LZXlib2FyZEV2ZW50KS5rZXkgPT09ICdUYWInIHx8XG4gICAgICAgIChldmVudCBhcyBSZWFjdC5LZXlib2FyZEV2ZW50KS5rZXkgPT09ICdTaGlmdCcpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0U3RhdGUoey4uLnN0YXRlLCBbYW5jaG9yXTogb3Blbn0pO1xuICB9O1xuXG4gIGNvbnN0IGxpc3QgPSAoYW5jaG9yOiBBbmNob3IpID0+IChcbiAgICA8Qm94XG4gICAgICBzeD17e1xuICAgICAgICB3aWR0aDogYW5jaG9yID09PSAndG9wJyB8fCBhbmNob3IgPT09ICdib3R0b20nID8gJ2F1dG8nIDogMjUwLFxuICAgICAgfX1cbiAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxuICAgICAgb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgPExpc3Q+XG4gICAgICAgIHtbJ0luYm94JywgJ1N0YXJyZWQnLCAnU2VuZCBlbWFpbCcsICdEcmFmdHMnXS5tYXAoKHRleHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPExpc3RJdGVtIGtleT17dGV4dH0gZGlzYWJsZVBhZGRpbmc+XG4gICAgICAgICAgICA8TGlzdEl0ZW1CdXR0b24gY29tcG9uZW50PVwiYVwiIGhyZWY9e2AvJHt0ZXh0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnICcsICctJyl9YH0+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAge2luZGV4ICUgMiA9PT0gMCA/IDxJbmJveEljb24gLz4gOiA8TWFpbEljb24gLz59XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IC8+XG4gICAgICAgICAgICA8L0xpc3RJdGVtQnV0dG9uPlxuICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICkpfVxuICAgICAgPC9MaXN0PlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDxMaXN0PlxuICAgICAgICB7WydBbGwgbWFpbCcsICdUcmFzaCcsICdTcGFtJ10ubWFwKCh0ZXh0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e3RleHR9IGRpc2FibGVQYWRkaW5nPlxuICAgICAgICAgICAgPExpc3RJdGVtQnV0dG9uIGNvbXBvbmVudD1cImFcIiBocmVmPXtgLyR7dGV4dC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJyAnLCAnLScpfWB9PlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgIHtpbmRleCAlIDIgPT09IDAgPyA8SW5ib3hJY29uIC8+IDogPE1haWxJY29uIC8+fVxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxuICAgICAgICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvTGlzdD5cbiAgICA8L0JveD5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7KFsnbGVmdCddIGFzIGNvbnN0KS5tYXAoKGFuY2hvcikgPT4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXthbmNob3J9PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgdHJ1ZSl9PlxuICAgICAgICAgICAgPERhc2hib2FyZEljb24gc3g9e3tjb2xvcjogJyNmZmYnLCBtcjogMiwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMnB4KSd9fSAvPlxuICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPFN3aXBlYWJsZURyYXdlclxuICAgICAgICAgICAgYW5jaG9yPXthbmNob3J9XG4gICAgICAgICAgICBvcGVuPXtzdGF0ZVthbmNob3JdfVxuICAgICAgICAgICAgb25DbG9zZT17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxuICAgICAgICAgICAgb25PcGVuPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCB0cnVlKX0+XG4gICAgICAgICAgICB7bGlzdChhbmNob3IpfVxuICAgICAgICAgIDwvU3dpcGVhYmxlRHJhd2VyPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJTd2lwZWFibGVEcmF3ZXIiLCJCdXR0b24iLCJMaXN0IiwiRGl2aWRlciIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJJbmJveEljb24iLCJNYWlsSWNvbiIsIkRhc2hib2FyZEljb24iLCJTd2lwZWFibGVUZW1wb3JhcnlEcmF3ZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJ0b2dnbGVEcmF3ZXIiLCJhbmNob3IiLCJvcGVuIiwiZXZlbnQiLCJ0eXBlIiwia2V5IiwibGlzdCIsInN4Iiwid2lkdGgiLCJyb2xlIiwib25DbGljayIsIm9uS2V5RG93biIsIm1hcCIsInRleHQiLCJpbmRleCIsImRpc2FibGVQYWRkaW5nIiwiY29tcG9uZW50IiwiaHJlZiIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInByaW1hcnkiLCJkaXYiLCJGcmFnbWVudCIsImNvbG9yIiwibXIiLCJ0cmFuc2Zvcm0iLCJvbkNsb3NlIiwib25PcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layout.tsx\n"));

/***/ })

});