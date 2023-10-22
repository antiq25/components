"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/authenticate/ApiCalls.ts":
/*!**************************************!*\
  !*** ./src/authenticate/ApiCalls.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateMessage: function() { return /* binding */ generateMessage; },\n/* harmony export */   handleFetchProfile: function() { return /* binding */ handleFetchProfile; },\n/* harmony export */   handleForgotPassword: function() { return /* binding */ handleForgotPassword; },\n/* harmony export */   handleResetPassword: function() { return /* binding */ handleResetPassword; },\n/* harmony export */   handleUpdateProfile: function() { return /* binding */ handleUpdateProfile; },\n/* harmony export */   handleVerifyEmail: function() { return /* binding */ handleVerifyEmail; },\n/* harmony export */   login: function() { return /* binding */ login; },\n/* harmony export */   signUp: function() { return /* binding */ signUp; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/../node_modules/axios/lib/axios.js\");\n\nconst errorInterceptor = (config)=>{\n    return config;\n};\nconst apiClient = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"https://localhost:4443/api/v1\",\n    headers: {\n        \"Content-Type\": \"application/json\"\n    },\n    withCredentials: true\n});\napiClient.interceptors.request.use(errorInterceptor, (error)=>{\n    console.error(\"Error in request interceptor:\", error);\n    return Promise.reject(error);\n});\n// **************************//**************************\n//                        API CALL \n// **** **********************//*************************\nconst apiCall = async (type, call, successMessage, errorMessagePrefix)=>{\n    try {\n        const response = await call();\n        showSuccessMessage(type, successMessage);\n        return {\n            success: true,\n            data: response.data\n        };\n    } catch (error) {\n        var _error_response_data, _error_response;\n        const errorMessage = ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : (_error_response_data = _error_response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.message) || errorMessagePrefix;\n        showErrorMessage(type, \"\".concat(errorMessagePrefix, \": \").concat(errorMessage));\n        return {\n            success: false,\n            error: errorMessage\n        };\n    }\n};\n// **************************//**************************\n//                      START AUTH CALLS\n// **** **********************//*************************\nconst signUp = async (signupData)=>apiCall(\"signUp\", ()=>apiClient.post(\"/auth/signup\", signupData), \"Signup successful\", \"Signup failed\");\nconst login = async (signinData)=>apiCall(\"login\", ()=>apiClient.post(\"/auth/login\", signinData), \"Login successful\", \"Login failed\");\nconst handleVerifyEmail = async (token, verificationCode)=>apiCall(\"verifyEmail\", ()=>apiClient.get(\"/auth/verify?code=\".concat(verificationCode), {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        }), \"Email verified\", \"Email verification failed\");\n// **************************//**************************\n//                      START PROFILE CALLS            \n// **** **********************//*************************\nconst handleFetchProfile = async (token)=>apiCall(\"fetchProfile\", ()=>apiClient.get(\"/profile/fetch\", {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        }), \"Profile fetched\", \"Fetching profile failed\");\nconst handleUpdateProfile = async (token, firstName, lastName)=>apiCall(\"updateProfile\", ()=>apiClient.put(\"/profile/update\", {\n            firstName,\n            lastName\n        }, {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        }), \"Profile updated\", \"Updating profile failed\");\n// **************************//**************************\n//                      START RECOVERY CALLS\n// **** **********************//*************************\nconst handleForgotPassword = async (email)=>apiCall(\"forgotPassword\", ()=>apiClient.post(\"/recovery/forgot-password\", {\n            email\n        }), \"Forgot password email sent\", \"Forgot password failed\");\nconst handleResetPassword = async (code, password)=>apiCall(\"resetPassword\", ()=>apiClient.post(\"/recovery/reset-password\", {\n            password,\n            code\n        }), \"Password reset successful\", \"Password reset failed\");\n// **************************//**************************\n//                      ERROR HELPERS\n// **** **********************//*************************\nconst showSuccessMessage = (type, message)=>console.log(generateMessage(\"success\", type, message));\n// const showWarningMessage = (type: string, message: string) => console.log(generateMessage('warning', type, message)); \nconst showErrorMessage = (type, message)=>console.log(generateMessage(\"error\", type, message));\nconst generateMessage = (messageType, type, message)=>\"[\".concat(messageType.toUpperCase(), \"] \").concat(type, \": \").concat(message); // **************************//**************************\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hdXRoZW50aWNhdGUvQXBpQ2FsbHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTZDO0FBRTdDLE1BQU1DLG1CQUFtQixDQUFDQztJQUN4QixPQUFPQTtBQUNUO0FBRUEsTUFBTUMsWUFBWUgsNkNBQUtBLENBQUNJLE1BQU0sQ0FBQztJQUM3QkMsU0FBUztJQUNUQyxTQUFTO1FBQ1AsZ0JBQWdCO0lBQ2xCO0lBQ0FDLGlCQUFpQjtBQUNuQjtBQUVBSixVQUFVSyxZQUFZLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxrQkFBa0JVLENBQUFBO0lBQ25EQyxRQUFRRCxLQUFLLENBQUMsaUNBQWlDQTtJQUMvQyxPQUFPRSxRQUFRQyxNQUFNLENBQUNIO0FBQ3hCO0FBRUEseURBQXlEO0FBQ3pELG1DQUFtQztBQUNuQyx5REFBeUQ7QUFDekQsTUFBTUksVUFBVSxPQUFPQyxNQUFjQyxNQUFXQyxnQkFBd0JDO0lBQ3RFLElBQUk7UUFDRixNQUFNQyxXQUEwQixNQUFNSDtRQUN0Q0ksbUJBQW1CTCxNQUFNRTtRQUN6QixPQUFPO1lBQ0xJLFNBQVM7WUFDVEMsTUFBTUgsU0FBU0csSUFBSTtRQUNyQjtJQUNGLEVBQUUsT0FBT1osT0FBWTtZQUNFQSxzQkFBQUE7UUFBckIsTUFBTWEsZUFBZWIsRUFBQUEsa0JBQUFBLE1BQU1TLFFBQVEsY0FBZFQsdUNBQUFBLHVCQUFBQSxnQkFBZ0JZLElBQUksY0FBcEJaLDJDQUFBQSxxQkFBc0JjLE9BQU8sS0FBSU47UUFDdERPLGlCQUFpQlYsTUFBTSxHQUEwQlEsT0FBdkJMLG9CQUFtQixNQUFpQixPQUFiSztRQUNqRCxPQUFPO1lBQ0xGLFNBQVM7WUFDVFgsT0FBT2E7UUFDVDtJQUNGO0FBQ0Y7QUFHQSx5REFBeUQ7QUFDekQsd0NBQXdDO0FBQ3hDLHlEQUF5RDtBQUNsRCxNQUFNRyxTQUFTLE9BQU9DLGFBQW9CYixRQUFRLFVBQVUsSUFBTVosVUFBVTBCLElBQUksQ0FBQyxnQkFBZ0JELGFBQWEscUJBQXFCLGlCQUFpQjtBQUVwSixNQUFNRSxRQUFRLE9BQU9DLGFBQW9CaEIsUUFBUSxTQUFTLElBQU1aLFVBQVUwQixJQUFJLENBQUMsZUFBZUUsYUFBYSxvQkFBb0IsZ0JBQWdCO0FBRS9JLE1BQU1DLG9CQUFvQixPQUFPQyxPQUFlQyxtQkFBNkJuQixRQUFRLGVBQWUsSUFBTVosVUFBVWdDLEdBQUcsQ0FBQyxxQkFBc0MsT0FBakJELG1CQUFvQjtZQUFFNUIsU0FBUztnQkFBRThCLGVBQWUsVUFBZ0IsT0FBTkg7WUFBUTtRQUFFLElBQUksa0JBQWtCLDZCQUE2QjtBQUMzUSx5REFBeUQ7QUFDekQsdURBQXVEO0FBQ3ZELHlEQUF5RDtBQUNsRCxNQUFNSSxxQkFBcUIsT0FBT0osUUFBa0JsQixRQUFRLGdCQUFnQixJQUFNWixVQUFVZ0MsR0FBRyxDQUFDLGtCQUFrQjtZQUFFN0IsU0FBUztnQkFBRThCLGVBQWUsVUFBZ0IsT0FBTkg7WUFBUTtRQUFFLElBQUksbUJBQW1CLDJCQUEyQjtBQUVwTixNQUFNSyxzQkFBc0IsT0FBT0wsT0FBZU0sV0FBbUJDLFdBQXFCekIsUUFBUSxpQkFBaUIsSUFBTVosVUFBVXNDLEdBQUcsQ0FBQyxtQkFBbUI7WUFBRUY7WUFBV0M7UUFBUyxHQUFHO1lBQUVsQyxTQUFTO2dCQUFFOEIsZUFBZSxVQUFnQixPQUFOSDtZQUFRO1FBQUUsSUFBSSxtQkFBbUIsMkJBQTJCO0FBQzVSLHlEQUF5RDtBQUN6RCw0Q0FBNEM7QUFDNUMseURBQXlEO0FBQ2xELE1BQU1TLHVCQUF1QixPQUFPQyxRQUFrQjVCLFFBQVEsa0JBQWtCLElBQU1aLFVBQVUwQixJQUFJLENBQUMsNkJBQTZCO1lBQUVjO1FBQU0sSUFBSSw4QkFBOEIsMEJBQTBCO0FBRXRNLE1BQU1DLHNCQUFzQixPQUFPQyxNQUFjQyxXQUFxQi9CLFFBQVEsaUJBQWlCLElBQU1aLFVBQVUwQixJQUFJLENBQUMsNEJBQTRCO1lBQUVpQjtZQUFVRDtRQUFLLElBQUksNkJBQTZCLHlCQUF5QjtBQUNsTyx5REFBeUQ7QUFDekQscUNBQXFDO0FBQ3JDLHlEQUF5RDtBQUN6RCxNQUFNeEIscUJBQXFCLENBQUNMLE1BQWNTLFVBQW9CYixRQUFRbUMsR0FBRyxDQUFDQyxnQkFBZ0IsV0FBV2hDLE1BQU1TO0FBQzNHLHlIQUF5SDtBQUN6SCxNQUFNQyxtQkFBbUIsQ0FBQ1YsTUFBY1MsVUFBb0JiLFFBQVFtQyxHQUFHLENBQUNDLGdCQUFnQixTQUFTaEMsTUFBTVM7QUFDaEcsTUFBTXVCLGtCQUFrQixDQUFDQyxhQUFxQmpDLE1BQWNTLFVBQW9CLElBQWtDVCxPQUE5QmlDLFlBQVlDLFdBQVcsSUFBRyxNQUFhekIsT0FBVFQsTUFBSyxNQUFZLE9BQVJTLFNBQVUsQ0FDNUkseURBQXlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hdXRoZW50aWNhdGUvQXBpQ2FsbHMudHM/OTFkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJztcblxuY29uc3QgZXJyb3JJbnRlcmNlcHRvciA9IChjb25maWc6IGFueSkgPT4ge1xuICByZXR1cm4gY29uZmlnO1xufTtcblxuY29uc3QgYXBpQ2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogJ2h0dHBzOi8vbG9jYWxob3N0OjQ0NDMvYXBpL3YxJyxcbiAgaGVhZGVyczoge1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgfSxcbiAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG59KTtcblxuYXBpQ2xpZW50LmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShlcnJvckludGVyY2VwdG9yLCBlcnJvciA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiByZXF1ZXN0IGludGVyY2VwdG9yOlwiLCBlcnJvcik7XG4gIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG59KTtcblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKiovLyoqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIEFQSSBDQUxMIFxuLy8gKioqKiAqKioqKioqKioqKioqKioqKioqKioqLy8qKioqKioqKioqKioqKioqKioqKioqKioqXG5jb25zdCBhcGlDYWxsID0gYXN5bmMgKHR5cGU6IHN0cmluZywgY2FsbDogYW55LCBzdWNjZXNzTWVzc2FnZTogc3RyaW5nLCBlcnJvck1lc3NhZ2VQcmVmaXg6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlID0gYXdhaXQgY2FsbCgpO1xuICAgIHNob3dTdWNjZXNzTWVzc2FnZSh0eXBlLCBzdWNjZXNzTWVzc2FnZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8IGVycm9yTWVzc2FnZVByZWZpeDtcbiAgICBzaG93RXJyb3JNZXNzYWdlKHR5cGUsIGAke2Vycm9yTWVzc2FnZVByZWZpeH06ICR7ZXJyb3JNZXNzYWdlfWApO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBlcnJvck1lc3NhZ2VcbiAgICB9O1xuICB9XG59O1xuXG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqLy8qKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gICAgICAgICAgICAgICAgICAgICAgU1RBUlQgQVVUSCBDQUxMU1xuLy8gKioqKiAqKioqKioqKioqKioqKioqKioqKioqLy8qKioqKioqKioqKioqKioqKioqKioqKioqXG5leHBvcnQgY29uc3Qgc2lnblVwID0gYXN5bmMgKHNpZ251cERhdGE6IGFueSkgPT4gYXBpQ2FsbCgnc2lnblVwJywgKCkgPT4gYXBpQ2xpZW50LnBvc3QoJy9hdXRoL3NpZ251cCcsIHNpZ251cERhdGEpLCAnU2lnbnVwIHN1Y2Nlc3NmdWwnLCAnU2lnbnVwIGZhaWxlZCcpO1xuXG5leHBvcnQgY29uc3QgbG9naW4gPSBhc3luYyAoc2lnbmluRGF0YTogYW55KSA9PiBhcGlDYWxsKCdsb2dpbicsICgpID0+IGFwaUNsaWVudC5wb3N0KCcvYXV0aC9sb2dpbicsIHNpZ25pbkRhdGEpLCAnTG9naW4gc3VjY2Vzc2Z1bCcsICdMb2dpbiBmYWlsZWQnKTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVZlcmlmeUVtYWlsID0gYXN5bmMgKHRva2VuOiBzdHJpbmcsIHZlcmlmaWNhdGlvbkNvZGU6IHN0cmluZykgPT4gYXBpQ2FsbCgndmVyaWZ5RW1haWwnLCAoKSA9PiBhcGlDbGllbnQuZ2V0KGAvYXV0aC92ZXJpZnk/Y29kZT0ke3ZlcmlmaWNhdGlvbkNvZGV9YCwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gIH0gfSksICdFbWFpbCB2ZXJpZmllZCcsICdFbWFpbCB2ZXJpZmljYXRpb24gZmFpbGVkJyk7XG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKi8vKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICAgICAgICAgICAgICAgICAgICAgIFNUQVJUIFBST0ZJTEUgQ0FMTFMgICAgICAgICAgICBcbi8vICoqKiogKioqKioqKioqKioqKioqKioqKioqKi8vKioqKioqKioqKioqKioqKioqKioqKioqKlxuZXhwb3J0IGNvbnN0IGhhbmRsZUZldGNoUHJvZmlsZSA9IGFzeW5jICh0b2tlbjogc3RyaW5nKSA9PiBhcGlDYWxsKCdmZXRjaFByb2ZpbGUnLCAoKSA9PiBhcGlDbGllbnQuZ2V0KCcvcHJvZmlsZS9mZXRjaCcsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCB9IH0pLCAnUHJvZmlsZSBmZXRjaGVkJywgJ0ZldGNoaW5nIHByb2ZpbGUgZmFpbGVkJyk7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVVcGRhdGVQcm9maWxlID0gYXN5bmMgKHRva2VuOiBzdHJpbmcsIGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKSA9PiBhcGlDYWxsKCd1cGRhdGVQcm9maWxlJywgKCkgPT4gYXBpQ2xpZW50LnB1dCgnL3Byb2ZpbGUvdXBkYXRlJywgeyBmaXJzdE5hbWUsIGxhc3ROYW1lIH0sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCB9IH0pLCAnUHJvZmlsZSB1cGRhdGVkJywgJ1VwZGF0aW5nIHByb2ZpbGUgZmFpbGVkJyk7XG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKi8vKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICAgICAgICAgICAgICAgICAgICAgIFNUQVJUIFJFQ09WRVJZIENBTExTXG4vLyAqKioqICoqKioqKioqKioqKioqKioqKioqKiovLyoqKioqKioqKioqKioqKioqKioqKioqKipcbmV4cG9ydCBjb25zdCBoYW5kbGVGb3Jnb3RQYXNzd29yZCA9IGFzeW5jIChlbWFpbDogc3RyaW5nKSA9PiBhcGlDYWxsKCdmb3Jnb3RQYXNzd29yZCcsICgpID0+IGFwaUNsaWVudC5wb3N0KCcvcmVjb3ZlcnkvZm9yZ290LXBhc3N3b3JkJywgeyBlbWFpbCB9KSwgJ0ZvcmdvdCBwYXNzd29yZCBlbWFpbCBzZW50JywgJ0ZvcmdvdCBwYXNzd29yZCBmYWlsZWQnKTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVJlc2V0UGFzc3dvcmQgPSBhc3luYyAoY29kZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiBhcGlDYWxsKCdyZXNldFBhc3N3b3JkJywgKCkgPT4gYXBpQ2xpZW50LnBvc3QoJy9yZWNvdmVyeS9yZXNldC1wYXNzd29yZCcsIHsgcGFzc3dvcmQsIGNvZGUgfSksICdQYXNzd29yZCByZXNldCBzdWNjZXNzZnVsJywgJ1Bhc3N3b3JkIHJlc2V0IGZhaWxlZCcpO1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKiovLyoqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAgICAgICAgICAgICAgICAgICAgICBFUlJPUiBIRUxQRVJTXG4vLyAqKioqICoqKioqKioqKioqKioqKioqKioqKiovLyoqKioqKioqKioqKioqKioqKioqKioqKipcbmNvbnN0IHNob3dTdWNjZXNzTWVzc2FnZSA9ICh0eXBlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykgPT4gY29uc29sZS5sb2coZ2VuZXJhdGVNZXNzYWdlKCdzdWNjZXNzJywgdHlwZSwgbWVzc2FnZSkpO1xuLy8gY29uc3Qgc2hvd1dhcm5pbmdNZXNzYWdlID0gKHR5cGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyhnZW5lcmF0ZU1lc3NhZ2UoJ3dhcm5pbmcnLCB0eXBlLCBtZXNzYWdlKSk7IFxuY29uc3Qgc2hvd0Vycm9yTWVzc2FnZSA9ICh0eXBlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykgPT4gY29uc29sZS5sb2coZ2VuZXJhdGVNZXNzYWdlKCdlcnJvcicsIHR5cGUsIG1lc3NhZ2UpKTtcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZU1lc3NhZ2UgPSAobWVzc2FnZVR5cGU6IHN0cmluZywgdHlwZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpID0+IGBbJHttZXNzYWdlVHlwZS50b1VwcGVyQ2FzZSgpfV0gJHt0eXBlfTogJHttZXNzYWdlfWA7XG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKi8vKioqKioqKioqKioqKioqKioqKioqKioqKioiXSwibmFtZXMiOlsiYXhpb3MiLCJlcnJvckludGVyY2VwdG9yIiwiY29uZmlnIiwiYXBpQ2xpZW50IiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiZXJyb3IiLCJjb25zb2xlIiwiUHJvbWlzZSIsInJlamVjdCIsImFwaUNhbGwiLCJ0eXBlIiwiY2FsbCIsInN1Y2Nlc3NNZXNzYWdlIiwiZXJyb3JNZXNzYWdlUHJlZml4IiwicmVzcG9uc2UiLCJzaG93U3VjY2Vzc01lc3NhZ2UiLCJzdWNjZXNzIiwiZGF0YSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJzaG93RXJyb3JNZXNzYWdlIiwic2lnblVwIiwic2lnbnVwRGF0YSIsInBvc3QiLCJsb2dpbiIsInNpZ25pbkRhdGEiLCJoYW5kbGVWZXJpZnlFbWFpbCIsInRva2VuIiwidmVyaWZpY2F0aW9uQ29kZSIsImdldCIsIkF1dGhvcml6YXRpb24iLCJoYW5kbGVGZXRjaFByb2ZpbGUiLCJoYW5kbGVVcGRhdGVQcm9maWxlIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJwdXQiLCJoYW5kbGVGb3Jnb3RQYXNzd29yZCIsImVtYWlsIiwiaGFuZGxlUmVzZXRQYXNzd29yZCIsImNvZGUiLCJwYXNzd29yZCIsImxvZyIsImdlbmVyYXRlTWVzc2FnZSIsIm1lc3NhZ2VUeXBlIiwidG9VcHBlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/authenticate/ApiCalls.ts\n"));

/***/ })

});