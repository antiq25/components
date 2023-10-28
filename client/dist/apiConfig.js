"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiClient = void 0;
var axios_1 = __importDefault(require("axios"));
exports.apiClient = axios_1.default.create({
    baseURL: 'http://localhost:3000/api/v1',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});
//  conditionally set the bearer token if the request calls for it & store the server jwt.
//  intercept if token doesnt match
exports.apiClient.interceptors.request.use(function (config) {
    var token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = "Bearer ".concat(token);
    }
    return config;
}, function (error) {
    console.error("Error in request interceptor:", error);
    return Promise.reject(error);
});
exports.apiClient.interceptors.response.use(function (response) { return response; }, function (error) {
    var _a, _b, _c;
    console.error((_a = error.response) === null || _a === void 0 ? void 0 : _a.data);
    var clientErrorMessage = ((_c = (_b = error.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.forClient)
        ? error.response.data.message
        : 'Something went wrong. Please try again later.';
    return Promise.reject(clientErrorMessage);
});
