"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAPI = void 0;
var apiConfig_1 = require("./apiConfig");
var apiHelper_1 = require("./apiHelper");
var authAPIEndpoints = {
    signUp: '/auth/signup',
    login: '/auth/login',
    updateProfile: '/profile/update',
    verifyEmail: function (code) { return "/auth/verify?code=".concat(code); },
    resendEmailVerification: '/auth/request-email-verif',
    fetchProfile: '/profile/fetch',
    forgotPassword: '/recovery/forgot-password',
    resetPassword: '/recovery/reset-password'
};
exports.authAPI = {
    signup: function (data) {
        return (0, apiHelper_1.apiCall)('signUp', function () { return apiConfig_1.apiClient.post(authAPIEndpoints.signUp, data); }, 'Signup successful', 'Signup failed');
    },
    login: function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var response, success, responseData;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, apiHelper_1.apiCall)('login', function () { return apiConfig_1.apiClient.post(authAPIEndpoints.login, data); }, 'Login successful', 'Login failed')];
                case 1:
                    response = _b.sent();
                    success = response.success, responseData = response.data;
                    if (success && ((_a = responseData === null || responseData === void 0 ? void 0 : responseData.token) === null || _a === void 0 ? void 0 : _a.token)) {
                        localStorage.setItem('token', responseData.token.token);
                    }
                    return [2 /*return*/, response];
            }
        });
    }); },
    updateProfile: function (id, data) {
        return (0, apiHelper_1.apiCall)('updateProfile', function () { return apiConfig_1.apiClient.put(authAPIEndpoints.updateProfile, data); }, 'Profile updated', 'Updating profile failed');
    },
    verifyEmail: function (code) {
        return (0, apiHelper_1.apiCall)('verifyEmail', function () { return apiConfig_1.apiClient.get(authAPIEndpoints.verifyEmail(code)); }, 'Email verified', 'Email verification failed');
    },
    resendEmailVerification: function (data) {
        return (0, apiHelper_1.apiCall)('resendEmailVerification', function () { return apiConfig_1.apiClient.post(authAPIEndpoints.resendEmailVerification, data); }, 'Verification email resent', 'Resending verification email failed');
    },
    getProfile: function (id) {
        return (0, apiHelper_1.apiCall)('fetchProfile', function () { return apiConfig_1.apiClient.get(authAPIEndpoints.fetchProfile); }, 'Profile fetched', 'Fetching profile failed');
    },
    forgotPassword: function (email) {
        return (0, apiHelper_1.apiCall)('forgotPassword', function () { return apiConfig_1.apiClient.post(authAPIEndpoints.forgotPassword, { email: email }); }, 'Forgot password email sent', 'Forgot password failed');
    },
    resetPassword: function (code, password) {
        return (0, apiHelper_1.apiCall)('resetPassword', function () { return apiConfig_1.apiClient.post(authAPIEndpoints.resetPassword, { code: code, password: password }); }, 'Password reset successful', 'Password reset failed');
    }
};
