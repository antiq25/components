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

/***/ "(app-pages-browser)/./src/components/ThemeRegistry/theme.ts":
/*!***********************************************!*\
  !*** ./src/components/ThemeRegistry/theme.ts ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   theme: function() { return /* binding */ theme; }\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/createTheme.js\");\n\nconst theme = {\n    palette: {\n        mode: \"dark\",\n        primary: {\n            main: \"#1a4cd8\",\n            dark: \"#1e2025\"\n        },\n        secondary: {\n            main: \"#9c27b0\",\n            dark: \"#5b708e\",\n            light: \"#75cbc2\"\n        }\n    },\n    components: {\n        MuiAppBar: {\n            styleOverrides: {\n                colorInherit: {\n                    backgroundColor: \"#689f38\",\n                    color: \"#fff\"\n                }\n            }\n        },\n        MuiButton: {\n            styleOverrides: {\n                root: {\n                    background: \"linear-gradient(45deg,#1a4cd8 30%, #000 90%)\",\n                    border: 0,\n                    borderRadius: 3,\n                    boxShadow: \"0 3px 5px 2px rgba(169,204,247)), .3)\",\n                    color: \"white\",\n                    height: 48,\n                    padding: \"0 30px\"\n                }\n            }\n        },\n        MuiButtonBase: {\n            defaultProps: {\n                disableRipple: true\n            }\n        },\n        MuiButtonGroup: {\n            defaultProps: {\n                size: \"small\"\n            }\n        },\n        MuiCheckbox: {\n            defaultProps: {\n                size: \"small\"\n            }\n        },\n        MuiFab: {\n            defaultProps: {\n                size: \"small\"\n            }\n        },\n        MuiFormControl: {\n            defaultProps: {\n                margin: \"dense\",\n                size: \"small\"\n            }\n        },\n        MuiFormHelperText: {\n            defaultProps: {\n                margin: \"dense\"\n            }\n        },\n        MuiIconButton: {\n            defaultProps: {\n                size: \"small\"\n            }\n        },\n        MuiInputBase: {\n            defaultProps: {\n                margin: \"dense\"\n            }\n        },\n        MuiInputLabel: {\n            defaultProps: {\n                margin: \"dense\"\n            }\n        },\n        MuiList: {\n            defaultProps: {\n                dense: true\n            }\n        },\n        MuiMenuItem: {\n            defaultProps: {\n                dense: true\n            }\n        },\n        MuiRadio: {\n            defaultProps: {\n                size: \"small\"\n            }\n        },\n        MuiSwitch: {\n            defaultProps: {\n                size: \"small\"\n            },\n            styleOverrides: {\n                root: {\n                    width: 42,\n                    height: 26,\n                    padding: 0,\n                    margin: 8\n                },\n                switchBase: {\n                    padding: 1,\n                    \"&$checked, &$colorPrimary$checked, &$colorSecondary$checked\": {\n                        transform: \"translateX(16px)\",\n                        color: \"#fff\",\n                        \"& + $track\": {\n                            opacity: 1,\n                            border: \"none\"\n                        }\n                    }\n                },\n                thumb: {\n                    width: 24,\n                    height: 24\n                },\n                track: {\n                    borderRadius: 13,\n                    border: \"1px solid #bdbdbd\",\n                    backgroundColor: \"#fafafa\",\n                    opacity: 1,\n                    transition: \"background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms\"\n                }\n            }\n        },\n        MuiTable: {\n            defaultProps: {\n                size: \"small\"\n            }\n        },\n        MuiTextField: {\n            defaultProps: {\n                margin: \"dense\",\n                size: \"small\"\n            }\n        },\n        MuiTooltip: {\n            defaultProps: {\n                arrow: true\n            }\n        }\n    },\n    shape: {\n        borderRadius: 4\n    },\n    spacing: 8\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(theme));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RoZW1lUmVnaXN0cnkvdGhlbWUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUU7QUFFMUQsTUFBTUMsUUFBc0I7SUFDakNDLFNBQVM7UUFDUEMsTUFBTTtRQUNOQyxTQUFTO1lBQ1BDLE1BQU07WUFDTkMsTUFBTTtRQUNSO1FBQ0FDLFdBQVc7WUFDVEYsTUFBTTtZQUNOQyxNQUFNO1lBQ05FLE9BQU87UUFDVDtJQUNGO0lBQ0FDLFlBQVk7UUFDVkMsV0FBVztZQUNUQyxnQkFBZ0I7Z0JBQ2RDLGNBQWM7b0JBQ1pDLGlCQUFpQjtvQkFDakJDLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO1FBQ0FDLFdBQVc7WUFDVEosZ0JBQWdCO2dCQUNkSyxNQUFNO29CQUNKQyxZQUFZO29CQUNaQyxRQUFRO29CQUNSQyxjQUFjO29CQUNkQyxXQUFXO29CQUNYTixPQUFPO29CQUNQTyxRQUFRO29CQUNSQyxTQUFTO2dCQUNYO1lBQ0Y7UUFDRjtRQUNBQyxlQUFlO1lBQ2JDLGNBQWM7Z0JBQ1pDLGVBQWU7WUFDakI7UUFDRjtRQUNBQyxnQkFBZ0I7WUFDZEYsY0FBYztnQkFDWkcsTUFBTTtZQUNSO1FBQ0Y7UUFDQUMsYUFBYTtZQUNYSixjQUFjO2dCQUNaRyxNQUFNO1lBQ1I7UUFDRjtRQUNBRSxRQUFRO1lBQ05MLGNBQWM7Z0JBQ1pHLE1BQU07WUFDUjtRQUNGO1FBQ0FHLGdCQUFnQjtZQUNkTixjQUFjO2dCQUNaTyxRQUFRO2dCQUNSSixNQUFNO1lBQ1I7UUFDRjtRQUNBSyxtQkFBbUI7WUFDakJSLGNBQWM7Z0JBQ1pPLFFBQVE7WUFDVjtRQUNGO1FBQ0FFLGVBQWU7WUFDYlQsY0FBYztnQkFDWkcsTUFBTTtZQUNSO1FBQ0Y7UUFDQU8sY0FBYztZQUNaVixjQUFjO2dCQUNaTyxRQUFRO1lBQ1Y7UUFDRjtRQUNBSSxlQUFlO1lBQ2JYLGNBQWM7Z0JBQ1pPLFFBQVE7WUFDVjtRQUNGO1FBQ0FLLFNBQVM7WUFDUFosY0FBYztnQkFDWmEsT0FBTztZQUNUO1FBQ0Y7UUFDQUMsYUFBYTtZQUNYZCxjQUFjO2dCQUNaYSxPQUFPO1lBQ1Q7UUFDRjtRQUNBRSxVQUFVO1lBQ1JmLGNBQWM7Z0JBQ1pHLE1BQU07WUFDUjtRQUNGO1FBQ0FhLFdBQVc7WUFDVGhCLGNBQWM7Z0JBQ1pHLE1BQU07WUFDUjtZQUNBaEIsZ0JBQWdCO2dCQUNkSyxNQUFNO29CQUNKeUIsT0FBTztvQkFDUHBCLFFBQVE7b0JBQ1JDLFNBQVM7b0JBQ1RTLFFBQVE7Z0JBQ1Y7Z0JBQ0FXLFlBQVk7b0JBQ1ZwQixTQUFTO29CQUNULCtEQUErRDt3QkFDN0RxQixXQUFXO3dCQUNYN0IsT0FBTzt3QkFDUCxjQUFjOzRCQUNaOEIsU0FBUzs0QkFDVDFCLFFBQVE7d0JBQ1Y7b0JBQ0Y7Z0JBQ0Y7Z0JBQ0EyQixPQUFPO29CQUNMSixPQUFPO29CQUNQcEIsUUFBUTtnQkFDVjtnQkFDQXlCLE9BQU87b0JBQ0wzQixjQUFjO29CQUNkRCxRQUFRO29CQUNSTCxpQkFBaUI7b0JBQ2pCK0IsU0FBUztvQkFDVEcsWUFBWTtnQkFDZDtZQUNGO1FBQ0Y7UUFDQUMsVUFBVTtZQUNSeEIsY0FBYztnQkFDWkcsTUFBTTtZQUNSO1FBQ0Y7UUFDQXNCLGNBQWM7WUFDWnpCLGNBQWM7Z0JBQ1pPLFFBQVE7Z0JBQ1JKLE1BQU07WUFDUjtRQUNGO1FBQ0F1QixZQUFZO1lBQ1YxQixjQUFjO2dCQUNaMkIsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUNBQyxPQUFPO1FBQ0xqQyxjQUFjO0lBQ2hCO0lBQ0FrQyxTQUFTO0FBQ1gsRUFBRTtBQUVGLCtEQUFlckQsZ0VBQVdBLENBQUNDLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGhlbWVSZWdpc3RyeS90aGVtZS50cz9hOWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRoZW1lLCBUaGVtZU9wdGlvbnMgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5cbmV4cG9ydCBjb25zdCB0aGVtZTogVGhlbWVPcHRpb25zID0ge1xuICBwYWxldHRlOiB7XG4gICAgbW9kZTogJ2RhcmsnLFxuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjMWE0Y2Q4JyxcbiAgICAgIGRhcms6ICcjMWUyMDI1JyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyM5YzI3YjAnLFxuICAgICAgZGFyazogJyM1YjcwOGUnLFxuICAgICAgbGlnaHQ6ICcjNzVjYmMyJyxcbiAgICB9LFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgTXVpQXBwQmFyOiB7XG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICBjb2xvckluaGVyaXQ6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNjg5ZjM4JyxcbiAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUJ1dHRvbjoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoNDVkZWcsIzFhNGNkOCAzMCUsICMwMDAgOTAlKScsXG4gICAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogMyxcbiAgICAgICAgICBib3hTaGFkb3c6ICcwIDNweCA1cHggMnB4IHJnYmEoMTY5LDIwNCwyNDcpKSwgLjMpJyxcbiAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBoZWlnaHQ6IDQ4LFxuICAgICAgICAgIHBhZGRpbmc6ICcwIDMwcHgnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUJ1dHRvbkJhc2U6IHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUJ1dHRvbkdyb3VwOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgc2l6ZTogJ3NtYWxsJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlDaGVja2JveDoge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHNpemU6ICdzbWFsbCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpRmFiOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgc2l6ZTogJ3NtYWxsJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlGb3JtQ29udHJvbDoge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIG1hcmdpbjogJ2RlbnNlJyxcbiAgICAgICAgc2l6ZTogJ3NtYWxsJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlGb3JtSGVscGVyVGV4dDoge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIG1hcmdpbjogJ2RlbnNlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlJY29uQnV0dG9uOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgc2l6ZTogJ3NtYWxsJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlJbnB1dEJhc2U6IHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBtYXJnaW46ICdkZW5zZScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpSW5wdXRMYWJlbDoge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIG1hcmdpbjogJ2RlbnNlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlMaXN0OiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpTWVudUl0ZW06IHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlSYWRpbzoge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHNpemU6ICdzbWFsbCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpU3dpdGNoOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgc2l6ZTogJ3NtYWxsJyxcbiAgICAgIH0sXG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgd2lkdGg6IDQyLFxuICAgICAgICAgIGhlaWdodDogMjYsXG4gICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICBtYXJnaW46IDgsXG4gICAgICAgIH0sXG4gICAgICAgIHN3aXRjaEJhc2U6IHtcbiAgICAgICAgICBwYWRkaW5nOiAxLFxuICAgICAgICAgICcmJGNoZWNrZWQsICYkY29sb3JQcmltYXJ5JGNoZWNrZWQsICYkY29sb3JTZWNvbmRhcnkkY2hlY2tlZCc6IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTZweCknLFxuICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgICcmICsgJHRyYWNrJzoge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdGh1bWI6IHtcbiAgICAgICAgICB3aWR0aDogMjQsXG4gICAgICAgICAgaGVpZ2h0OiAyNCxcbiAgICAgICAgfSxcbiAgICAgICAgdHJhY2s6IHtcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDEzLFxuICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjYmRiZGJkJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmFmYWZhJyxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zLGJvcmRlciAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpVGFibGU6IHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBzaXplOiAnc21hbGwnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aVRleHRGaWVsZDoge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIG1hcmdpbjogJ2RlbnNlJyxcbiAgICAgICAgc2l6ZTogJ3NtYWxsJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlUb29sdGlwOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgYXJyb3c6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHNoYXBlOiB7XG4gICAgYm9yZGVyUmFkaXVzOiA0LFxuICB9LFxuICBzcGFjaW5nOiA4LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGhlbWUodGhlbWUpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVRoZW1lIiwidGhlbWUiLCJwYWxldHRlIiwibW9kZSIsInByaW1hcnkiLCJtYWluIiwiZGFyayIsInNlY29uZGFyeSIsImxpZ2h0IiwiY29tcG9uZW50cyIsIk11aUFwcEJhciIsInN0eWxlT3ZlcnJpZGVzIiwiY29sb3JJbmhlcml0IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJNdWlCdXR0b24iLCJyb290IiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImhlaWdodCIsInBhZGRpbmciLCJNdWlCdXR0b25CYXNlIiwiZGVmYXVsdFByb3BzIiwiZGlzYWJsZVJpcHBsZSIsIk11aUJ1dHRvbkdyb3VwIiwic2l6ZSIsIk11aUNoZWNrYm94IiwiTXVpRmFiIiwiTXVpRm9ybUNvbnRyb2wiLCJtYXJnaW4iLCJNdWlGb3JtSGVscGVyVGV4dCIsIk11aUljb25CdXR0b24iLCJNdWlJbnB1dEJhc2UiLCJNdWlJbnB1dExhYmVsIiwiTXVpTGlzdCIsImRlbnNlIiwiTXVpTWVudUl0ZW0iLCJNdWlSYWRpbyIsIk11aVN3aXRjaCIsIndpZHRoIiwic3dpdGNoQmFzZSIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJ0aHVtYiIsInRyYWNrIiwidHJhbnNpdGlvbiIsIk11aVRhYmxlIiwiTXVpVGV4dEZpZWxkIiwiTXVpVG9vbHRpcCIsImFycm93Iiwic2hhcGUiLCJzcGFjaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ThemeRegistry/theme.ts\n"));

/***/ })

});