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

/***/ "(app-pages-browser)/./src/components/drawer.tsx":
/*!***********************************!*\
  !*** ./src/components/drawer.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SwipeableTemporaryDrawer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/SwipeableDrawer */ \"(app-pages-browser)/./node_modules/@mui/material/SwipeableDrawer/SwipeableDrawer.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/List */ \"(app-pages-browser)/./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Divider */ \"(app-pages-browser)/./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ListItem */ \"(app-pages-browser)/./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/ListItemButton */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemButton/ListItemButton.js\");\n/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/ListItemIcon */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemIcon/ListItemIcon.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ListItemText */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemText/ListItemText.js\");\n/* harmony import */ var _mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/MoveToInbox */ \"(app-pages-browser)/./node_modules/@mui/icons-material/MoveToInbox.js\");\n/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Mail */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Mail.js\");\n/* harmony import */ var _mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Dashboard */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Dashboard.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction SwipeableTemporaryDrawer() {\n    _s();\n    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1__.useState({\n        top: false,\n        left: false,\n        bottom: false,\n        right: false\n    });\n    const toggleDrawer = (anchor, open)=>(event)=>{\n            if (event && event.type === \"keydown\" && (event.key === \"Tab\" || event.key === \"Shift\")) {\n                return;\n            }\n            setState({\n                ...state,\n                [anchor]: open\n            });\n        };\n    const list = (anchor)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            sx: {\n                width: anchor === \"top\" || anchor === \"bottom\" ? \"auto\" : 250\n            },\n            role: \"presentation\",\n            onClick: toggleDrawer(anchor, false),\n            onKeyDown: toggleDrawer(anchor, false),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: [\n                        \"HomePage\",\n                        \"Starred\",\n                        \"Tasks\"\n                    ].map((text, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            disablePadding: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                component: \"a\",\n                                href: text === \"HomePage\" ? \"/\" : \"/\".concat(text.toLowerCase().replace(\" \", \"-\")),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        children: index % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/components/drawer.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 30\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/components/drawer.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 46\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/components/drawer.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        primary: text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/components/drawer.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/components/drawer.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 7\n                            }, this)\n                        }, text, false, {\n                            fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/components/drawer.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 5\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/components/drawer.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 4\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/components/drawer.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/components/drawer.tsx\",\n            lineNumber: 45,\n            columnNumber: 5\n        }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"left\"\n        ].map((anchor)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        onClick: toggleDrawer(anchor, !state[anchor]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                sx: {\n                                    color: \"#fff\",\n                                    mr: 2,\n                                    transform: \"translateY(-2px)\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/components/drawer.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this),\n                            \"Dashboard\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/components/drawer.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                        anchor: anchor,\n                        open: state[anchor],\n                        onClose: toggleDrawer(anchor, false),\n                        onOpen: toggleDrawer(anchor, true),\n                        children: list(anchor)\n                    }, void 0, false, {\n                        fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/components/drawer.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, anchor, true, {\n                fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/components/drawer.tsx\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/anti/Desktop/test/material-ui-nextjs-ts/src/components/drawer.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(SwipeableTemporaryDrawer, \"1pMNg3VN85DbQ9xKOBrfZl7gTaU=\");\n_c = SwipeableTemporaryDrawer;\nvar _c;\n$RefreshReg$(_c, \"SwipeableTemporaryDrawer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2RyYXdlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBQ0s7QUFDd0I7QUFDbEI7QUFDSjtBQUNNO0FBQ0U7QUFDWTtBQUNKO0FBQ0E7QUFDRTtBQUNSO0FBQ1U7QUFNM0MsU0FBU2E7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHZiwyQ0FBYyxDQUFDO1FBQ3ZDaUIsS0FBSztRQUNMQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBRUEsTUFBTUMsZUFBZSxDQUFDQyxRQUFnQkMsT0FBa0IsQ0FDdERDO1lBRUEsSUFDRUEsU0FDQUEsTUFBTUMsSUFBSSxLQUFLLGFBQ2QsT0FBK0JDLEdBQUcsS0FBSyxTQUN0QyxNQUErQkEsR0FBRyxLQUFLLE9BQU0sR0FDL0M7Z0JBQ0E7WUFDRjtZQUVBWCxTQUFTO2dCQUFFLEdBQUdELEtBQUs7Z0JBQUUsQ0FBQ1EsT0FBTyxFQUFFQztZQUFLO1FBQ3RDO0lBRUEsTUFBTUksT0FBTyxDQUFDTCx1QkFDWiw4REFBQ3JCLHlEQUFHQTtZQUNGMkIsSUFBSTtnQkFDRkMsT0FBT1AsV0FBVyxTQUFTQSxXQUFXLFdBQVcsU0FBUztZQUM1RDtZQUNBUSxNQUFLO1lBQ0xDLFNBQVNWLGFBQWFDLFFBQVE7WUFDOUJVLFdBQVdYLGFBQWFDLFFBQVE7OzhCQUVuQyw4REFBQ2xCLDBEQUFJQTs4QkFDTDt3QkFBQzt3QkFBWTt3QkFBVztxQkFBUSxDQUFDNkIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUMzQyw4REFBQzdCLDhEQUFRQTs0QkFBWThCLGNBQWM7c0NBQ2pDLDRFQUFDN0Isb0VBQWNBO2dDQUFDOEIsV0FBVTtnQ0FBSUMsTUFBTUosU0FBUyxhQUFhLE1BQU0sSUFBeUMsT0FBckNBLEtBQUtLLFdBQVcsR0FBR0MsT0FBTyxDQUFDLEtBQUs7O2tEQUNsRyw4REFBQ2hDLGtFQUFZQTtrREFDVjJCLFFBQVEsTUFBTSxrQkFBSSw4REFBQ3pCLHVFQUFTQTs7OztpRUFBTSw4REFBQ0MsZ0VBQVFBOzs7Ozs7Ozs7O2tEQUU5Qyw4REFBQ0Ysa0VBQVlBO3dDQUFDZ0MsU0FBU1A7Ozs7Ozs7Ozs7OzsyQkFMWkE7Ozs7Ozs7Ozs7OEJBV2IsOERBQUM3Qiw4REFBT0E7Ozs7Ozs7Ozs7O0lBS1oscUJBQ0UsOERBQUNxQztrQkFDRTtZQUFFO1NBQU8sQ0FBV1QsR0FBRyxDQUFDLENBQUNYLHVCQUN4Qiw4REFBQ3RCLDJDQUFjOztrQ0FDYiw4REFBQ0csNkRBQU1BO3dCQUFDNEIsU0FBU1YsYUFBYUMsUUFBUSxDQUFDUixLQUFLLENBQUNRLE9BQU87OzBDQUNsRCw4REFBQ1Ysc0VBQWFBO2dDQUFDZ0IsSUFBSTtvQ0FBRWdCLE9BQU87b0NBQVFDLElBQUk7b0NBQUdDLFdBQVc7Z0NBQW1COzs7Ozs7NEJBQUs7Ozs7Ozs7a0NBR2hGLDhEQUFDNUMsc0VBQWVBO3dCQUNkb0IsUUFBUUE7d0JBQ1JDLE1BQU1ULEtBQUssQ0FBQ1EsT0FBTzt3QkFDbkJ5QixTQUFTMUIsYUFBYUMsUUFBUTt3QkFDOUIwQixRQUFRM0IsYUFBYUMsUUFBUTtrQ0FFNUJLLEtBQUtMOzs7Ozs7O2VBWFdBOzs7Ozs7Ozs7O0FBaUI3QjtHQXRFd0JUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2RyYXdlci50c3g/Yjk5OCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IFN3aXBlYWJsZURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL1N3aXBlYWJsZURyYXdlcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbXVpL21hdGVyaWFsL0RpdmlkZXInO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1CdXR0b24nO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtSWNvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBJbmJveEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3ZlVG9JbmJveCc7XG5pbXBvcnQgTWFpbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NYWlsJztcbmltcG9ydCBEYXNoYm9hcmRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGFzaGJvYXJkJztcbmltcG9ydCBIb21lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0hvbWUnO1xuXG5cbnR5cGUgQW5jaG9yID0gJ3RvcCcgfCAnbGVmdCcgfCAnYm90dG9tJyB8ICdyaWdodCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN3aXBlYWJsZVRlbXBvcmFyeURyYXdlcigpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgdG9wOiBmYWxzZSxcbiAgICBsZWZ0OiBmYWxzZSxcbiAgICBib3R0b206IGZhbHNlLFxuICAgIHJpZ2h0OiBmYWxzZSxcbiAgfSk7XG5cbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKGFuY2hvcjogQW5jaG9yLCBvcGVuOiBib29sZWFuKSA9PiAoXG4gICAgZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQgfCBSZWFjdC5Nb3VzZUV2ZW50LFxuICApID0+IHtcbiAgICBpZiAoXG4gICAgICBldmVudCAmJlxuICAgICAgZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nICYmXG4gICAgICAoKGV2ZW50IGFzIFJlYWN0LktleWJvYXJkRXZlbnQpLmtleSA9PT0gJ1RhYicgfHxcbiAgICAgICAgKGV2ZW50IGFzIFJlYWN0LktleWJvYXJkRXZlbnQpLmtleSA9PT0gJ1NoaWZ0JylcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbYW5jaG9yXTogb3BlbiB9KTtcbiAgfTtcblxuICBjb25zdCBsaXN0ID0gKGFuY2hvcjogQW5jaG9yKSA9PiAoXG4gICAgPEJveFxuICAgICAgc3g9e3tcbiAgICAgICAgd2lkdGg6IGFuY2hvciA9PT0gJ3RvcCcgfHwgYW5jaG9yID09PSAnYm90dG9tJyA/ICdhdXRvJyA6IDI1MCxcbiAgICAgIH19XG4gICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cbiAgICAgIG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxuICAgID5cbiAgIDxMaXN0PlxuICB7WydIb21lUGFnZScsICdTdGFycmVkJywgJ1Rhc2tzJ10ubWFwKCh0ZXh0LCBpbmRleCkgPT4gKFxuICAgIDxMaXN0SXRlbSBrZXk9e3RleHR9IGRpc2FibGVQYWRkaW5nPlxuICAgICAgPExpc3RJdGVtQnV0dG9uIGNvbXBvbmVudD1cImFcIiBocmVmPXt0ZXh0ID09PSAnSG9tZVBhZ2UnID8gJy8nIDogYC8ke3RleHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCcgJywgJy0nKX1gfT5cbiAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICB7aW5kZXggJSAyID09PSAwID8gPEluYm94SWNvbiAvPiA6IDxNYWlsSWNvbiAvPn1cbiAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGV4dH0gLz5cbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XG4gICAgPC9MaXN0SXRlbT5cbiAgKSl9XG48L0xpc3Q+XG5cbiAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICA8L0JveD5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7KFsnbGVmdCddIGFzIGNvbnN0KS5tYXAoKGFuY2hvcikgPT4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXthbmNob3J9PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgIXN0YXRlW2FuY2hvcl0pfT5cbiAgICAgICAgICAgIDxEYXNoYm9hcmRJY29uIHN4PXt7IGNvbG9yOiAnI2ZmZicsIG1yOiAyLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0ycHgpJyB9fSAvPlxuICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPFN3aXBlYWJsZURyYXdlclxuICAgICAgICAgICAgYW5jaG9yPXthbmNob3J9XG4gICAgICAgICAgICBvcGVuPXtzdGF0ZVthbmNob3JdfVxuICAgICAgICAgICAgb25DbG9zZT17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxuICAgICAgICAgICAgb25PcGVuPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCB0cnVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGlzdChhbmNob3IpfVxuICAgICAgICAgIDwvU3dpcGVhYmxlRHJhd2VyPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJTd2lwZWFibGVEcmF3ZXIiLCJCdXR0b24iLCJMaXN0IiwiRGl2aWRlciIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJJbmJveEljb24iLCJNYWlsSWNvbiIsIkRhc2hib2FyZEljb24iLCJTd2lwZWFibGVUZW1wb3JhcnlEcmF3ZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJ0b2dnbGVEcmF3ZXIiLCJhbmNob3IiLCJvcGVuIiwiZXZlbnQiLCJ0eXBlIiwia2V5IiwibGlzdCIsInN4Iiwid2lkdGgiLCJyb2xlIiwib25DbGljayIsIm9uS2V5RG93biIsIm1hcCIsInRleHQiLCJpbmRleCIsImRpc2FibGVQYWRkaW5nIiwiY29tcG9uZW50IiwiaHJlZiIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInByaW1hcnkiLCJkaXYiLCJGcmFnbWVudCIsImNvbG9yIiwibXIiLCJ0cmFuc2Zvcm0iLCJvbkNsb3NlIiwib25PcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/drawer.tsx\n"));

/***/ })

});