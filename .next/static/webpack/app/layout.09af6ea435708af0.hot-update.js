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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   theme: function() { return /* binding */ theme; }\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/createTheme.js\");\n\nconst theme = {\n    palette: {\n        mode: \"dark\",\n        primary: {\n            main: \"#1a4cd8\",\n            dark: \"#1e2025\"\n        },\n        secondary: {\n            main: \"#9c27b0\",\n            dark: \"#5b708e\",\n            light: \"#75cbc2\"\n        }\n    },\n    components: {\n        MuiAppBar: {\n            styleOverrides: {\n                colorInherit: {\n                    backgroundColor: \"#689f38\",\n                    color: \"#fff\"\n                }\n            }\n        },\n        MuiButton: {\n            styleOverrides: {\n                root: {\n                    background: \"linear-gradient(45deg,#87cfff 30%, #ffff 90%)\",\n                    border: 0,\n                    borderRadius: 3,\n                    boxShadow: \"0 1px 1px 1px rgba(169,204,247, .3)\",\n                    color: \"white\",\n                    height: 48,\n                    padding: \"0 30px\"\n                }\n            }\n        },\n        MuiButtonBase: {\n            defaultProps: {\n                disableRipple: true\n            }\n        },\n        MuiButtonGroup: {\n            defaultProps: {\n                size: \"small\"\n            }\n        },\n        MuiCheckbox: {\n            defaultProps: {\n                size: \"small\"\n            }\n        },\n        MuiFab: {\n            defaultProps: {\n                size: \"small\"\n            }\n        },\n        MuiFormControl: {\n            defaultProps: {\n                margin: \"dense\",\n                size: \"small\"\n            }\n        },\n        MuiFormHelperText: {\n            defaultProps: {\n                margin: \"dense\"\n            }\n        },\n        MuiIconButton: {\n            defaultProps: {\n                size: \"small\"\n            }\n        },\n        MuiInputBase: {\n            defaultProps: {\n                margin: \"dense\"\n            }\n        },\n        MuiInputLabel: {\n            defaultProps: {\n                margin: \"dense\"\n            }\n        },\n        MuiList: {\n            defaultProps: {\n                dense: true\n            }\n        },\n        MuiMenuItem: {\n            defaultProps: {\n                dense: true\n            }\n        },\n        MuiRadio: {\n            defaultProps: {\n                size: \"small\"\n            }\n        },\n        MuiSwitch: {\n            defaultProps: {\n                size: \"small\"\n            },\n            styleOverrides: {\n                root: {\n                    width: 42,\n                    height: 26,\n                    padding: 0,\n                    margin: 8\n                },\n                switchBase: {\n                    padding: 1,\n                    \"&$checked, &$colorPrimary$checked, &$colorSecondary$checked\": {\n                        transform: \"translateX(16px)\",\n                        color: \"#fff\",\n                        \"& + $track\": {\n                            opacity: 1,\n                            border: \"none\"\n                        }\n                    }\n                },\n                thumb: {\n                    width: 24,\n                    height: 24\n                },\n                track: {\n                    borderRadius: 13,\n                    border: \"1px solid #bdbdbd\",\n                    backgroundColor: \"#fafafa\",\n                    opacity: 1,\n                    transition: \"background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms\"\n                }\n            }\n        },\n        MuiTable: {\n            defaultProps: {\n                size: \"small\"\n            }\n        },\n        MuiTextField: {\n            defaultProps: {\n                margin: \"dense\",\n                size: \"small\"\n            }\n        },\n        MuiTooltip: {\n            defaultProps: {\n                arrow: true\n            }\n        }\n    },\n    shape: {\n        borderRadius: 4\n    },\n    spacing: 8\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(theme));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RoZW1lUmVnaXN0cnkvdGhlbWUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUU7QUFFMUQsTUFBTUMsUUFBc0I7SUFDakNDLFNBQVM7UUFDUEMsTUFBTTtRQUNOQyxTQUFTO1lBQ1BDLE1BQU07WUFDTkMsTUFBTTtRQUNSO1FBQ0FDLFdBQVc7WUFDVEYsTUFBTTtZQUNOQyxNQUFNO1lBQ05FLE9BQU87UUFDVDtJQUNGO0lBQ0FDLFlBQVk7UUFDVkMsV0FBVztZQUNUQyxnQkFBZ0I7Z0JBQ2RDLGNBQWM7b0JBQ1pDLGlCQUFpQjtvQkFDakJDLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO1FBQ0FDLFdBQVc7WUFDVEosZ0JBQWdCO2dCQUNkSyxNQUFNO29CQUNKQyxZQUFZO29CQUNaQyxRQUFRO29CQUNSQyxjQUFjO29CQUNkQyxXQUFXO29CQUNYTixPQUFPO29CQUNQTyxRQUFRO29CQUNSQyxTQUFTO2dCQUNYO1lBQ0Y7UUFDRjtRQUNBQyxlQUFlO1lBQ2JDLGNBQWM7Z0JBQ1pDLGVBQWU7WUFDakI7UUFDRjtRQUNBQyxnQkFBZ0I7WUFDZEYsY0FBYztnQkFDWkcsTUFBTTtZQUNSO1FBQ0Y7UUFDQUMsYUFBYTtZQUNYSixjQUFjO2dCQUNaRyxNQUFNO1lBQ1I7UUFDRjtRQUNBRSxRQUFRO1lBQ05MLGNBQWM7Z0JBQ1pHLE1BQU07WUFDUjtRQUNGO1FBQ0FHLGdCQUFnQjtZQUNkTixjQUFjO2dCQUNaTyxRQUFRO2dCQUNSSixNQUFNO1lBQ1I7UUFDRjtRQUNBSyxtQkFBbUI7WUFDakJSLGNBQWM7Z0JBQ1pPLFFBQVE7WUFDVjtRQUNGO1FBQ0FFLGVBQWU7WUFDYlQsY0FBYztnQkFDWkcsTUFBTTtZQUNSO1FBQ0Y7UUFDQU8sY0FBYztZQUNaVixjQUFjO2dCQUNaTyxRQUFRO1lBQ1Y7UUFDRjtRQUNBSSxlQUFlO1lBQ2JYLGNBQWM7Z0JBQ1pPLFFBQVE7WUFDVjtRQUNGO1FBQ0FLLFNBQVM7WUFDUFosY0FBYztnQkFDWmEsT0FBTztZQUNUO1FBQ0Y7UUFDQUMsYUFBYTtZQUNYZCxjQUFjO2dCQUNaYSxPQUFPO1lBQ1Q7UUFDRjtRQUNBRSxVQUFVO1lBQ1JmLGNBQWM7Z0JBQ1pHLE1BQU07WUFDUjtRQUNGO1FBQ0FhLFdBQVc7WUFDVGhCLGNBQWM7Z0JBQ1pHLE1BQU07WUFDUjtZQUNBaEIsZ0JBQWdCO2dCQUNkSyxNQUFNO29CQUNKeUIsT0FBTztvQkFDUHBCLFFBQVE7b0JBQ1JDLFNBQVM7b0JBQ1RTLFFBQVE7Z0JBQ1Y7Z0JBQ0FXLFlBQVk7b0JBQ1ZwQixTQUFTO29CQUNULCtEQUErRDt3QkFDN0RxQixXQUFXO3dCQUNYN0IsT0FBTzt3QkFDUCxjQUFjOzRCQUNaOEIsU0FBUzs0QkFDVDFCLFFBQVE7d0JBQ1Y7b0JBQ0Y7Z0JBQ0Y7Z0JBQ0EyQixPQUFPO29CQUNMSixPQUFPO29CQUNQcEIsUUFBUTtnQkFDVjtnQkFDQXlCLE9BQU87b0JBQ0wzQixjQUFjO29CQUNkRCxRQUFRO29CQUNSTCxpQkFBaUI7b0JBQ2pCK0IsU0FBUztvQkFDVEcsWUFBWTtnQkFDZDtZQUNGO1FBQ0Y7UUFDQUMsVUFBVTtZQUNSeEIsY0FBYztnQkFDWkcsTUFBTTtZQUNSO1FBQ0Y7UUFDQXNCLGNBQWM7WUFDWnpCLGNBQWM7Z0JBQ1pPLFFBQVE7Z0JBQ1JKLE1BQU07WUFDUjtRQUNGO1FBQ0F1QixZQUFZO1lBQ1YxQixjQUFjO2dCQUNaMkIsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUNBQyxPQUFPO1FBQ0xqQyxjQUFjO0lBQ2hCO0lBQ0FrQyxTQUFTO0FBQ1gsRUFBRTtBQUVGLCtEQUFlckQsZ0VBQVdBLENBQUNDLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGhlbWVSZWdpc3RyeS90aGVtZS50cz9hOWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRoZW1lLCBUaGVtZU9wdGlvbnMgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5cbmV4cG9ydCBjb25zdCB0aGVtZTogVGhlbWVPcHRpb25zID0ge1xuICBwYWxldHRlOiB7XG4gICAgbW9kZTogJ2RhcmsnLFxuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjMWE0Y2Q4JyxcbiAgICAgIGRhcms6ICcjMWUyMDI1JyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyM5YzI3YjAnLFxuICAgICAgZGFyazogJyM1YjcwOGUnLFxuICAgICAgbGlnaHQ6ICcjNzVjYmMyJyxcbiAgICB9LFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgTXVpQXBwQmFyOiB7XG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICBjb2xvckluaGVyaXQ6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNjg5ZjM4JyxcbiAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUJ1dHRvbjoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoNDVkZWcsIzg3Y2ZmZiAzMCUsICNmZmZmIDkwJSknLFxuICAgICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDMsXG4gICAgICAgICAgYm94U2hhZG93OiAnMCAxcHggMXB4IDFweCByZ2JhKDE2OSwyMDQsMjQ3LCAuMyknLFxuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGhlaWdodDogNDgsXG4gICAgICAgICAgcGFkZGluZzogJzAgMzBweCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpQnV0dG9uQmFzZToge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGRpc2FibGVSaXBwbGU6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpQnV0dG9uR3JvdXA6IHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBzaXplOiAnc21hbGwnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUNoZWNrYm94OiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgc2l6ZTogJ3NtYWxsJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlGYWI6IHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBzaXplOiAnc21hbGwnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUZvcm1Db250cm9sOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgbWFyZ2luOiAnZGVuc2UnLFxuICAgICAgICBzaXplOiAnc21hbGwnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUZvcm1IZWxwZXJUZXh0OiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgbWFyZ2luOiAnZGVuc2UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUljb25CdXR0b246IHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBzaXplOiAnc21hbGwnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUlucHV0QmFzZToge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIG1hcmdpbjogJ2RlbnNlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlJbnB1dExhYmVsOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgbWFyZ2luOiAnZGVuc2UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUxpc3Q6IHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlNZW51SXRlbToge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aVJhZGlvOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgc2l6ZTogJ3NtYWxsJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlTd2l0Y2g6IHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBzaXplOiAnc21hbGwnLFxuICAgICAgfSxcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICB3aWR0aDogNDIsXG4gICAgICAgICAgaGVpZ2h0OiAyNixcbiAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgIG1hcmdpbjogOCxcbiAgICAgICAgfSxcbiAgICAgICAgc3dpdGNoQmFzZToge1xuICAgICAgICAgIHBhZGRpbmc6IDEsXG4gICAgICAgICAgJyYkY2hlY2tlZCwgJiRjb2xvclByaW1hcnkkY2hlY2tlZCwgJiRjb2xvclNlY29uZGFyeSRjaGVja2VkJzoge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxNnB4KScsXG4gICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgJyYgKyAkdHJhY2snOiB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB0aHVtYjoge1xuICAgICAgICAgIHdpZHRoOiAyNCxcbiAgICAgICAgICBoZWlnaHQ6IDI0LFxuICAgICAgICB9LFxuICAgICAgICB0cmFjazoge1xuICAgICAgICAgIGJvcmRlclJhZGl1czogMTMsXG4gICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNiZGJkYmQnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmYWZhZmEnLFxuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXMsYm9yZGVyIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlUYWJsZToge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHNpemU6ICdzbWFsbCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpVGV4dEZpZWxkOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgbWFyZ2luOiAnZGVuc2UnLFxuICAgICAgICBzaXplOiAnc21hbGwnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aVRvb2x0aXA6IHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBhcnJvdzogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgc2hhcGU6IHtcbiAgICBib3JkZXJSYWRpdXM6IDQsXG4gIH0sXG4gIHNwYWNpbmc6IDgsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUaGVtZSh0aGVtZSk7XG4iXSwibmFtZXMiOlsiY3JlYXRlVGhlbWUiLCJ0aGVtZSIsInBhbGV0dGUiLCJtb2RlIiwicHJpbWFyeSIsIm1haW4iLCJkYXJrIiwic2Vjb25kYXJ5IiwibGlnaHQiLCJjb21wb25lbnRzIiwiTXVpQXBwQmFyIiwic3R5bGVPdmVycmlkZXMiLCJjb2xvckluaGVyaXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIk11aUJ1dHRvbiIsInJvb3QiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiaGVpZ2h0IiwicGFkZGluZyIsIk11aUJ1dHRvbkJhc2UiLCJkZWZhdWx0UHJvcHMiLCJkaXNhYmxlUmlwcGxlIiwiTXVpQnV0dG9uR3JvdXAiLCJzaXplIiwiTXVpQ2hlY2tib3giLCJNdWlGYWIiLCJNdWlGb3JtQ29udHJvbCIsIm1hcmdpbiIsIk11aUZvcm1IZWxwZXJUZXh0IiwiTXVpSWNvbkJ1dHRvbiIsIk11aUlucHV0QmFzZSIsIk11aUlucHV0TGFiZWwiLCJNdWlMaXN0IiwiZGVuc2UiLCJNdWlNZW51SXRlbSIsIk11aVJhZGlvIiwiTXVpU3dpdGNoIiwid2lkdGgiLCJzd2l0Y2hCYXNlIiwidHJhbnNmb3JtIiwib3BhY2l0eSIsInRodW1iIiwidHJhY2siLCJ0cmFuc2l0aW9uIiwiTXVpVGFibGUiLCJNdWlUZXh0RmllbGQiLCJNdWlUb29sdGlwIiwiYXJyb3ciLCJzaGFwZSIsInNwYWNpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ThemeRegistry/theme.ts\n"));

/***/ })

});