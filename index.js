const Utils = {
    getDocumentElementId(name) {
        const idMap = {
            'signupEmail': 'signup-email',
            'signupPassword': 'signup-password',
            'signupFirstName': 'signup-firstName',
            'signupLastName': 'signup-lastName',
            'loginEmail': 'login-email',
            'loginPassword': 'login-password',
            // ... add more mappings as needed
        };
        return document.getElementById(idMap[name]);
    },

    getValue(name) {
        return this.getDocumentElementId(name).value;
    },

    getValues(names) {
        return names.reduce((acc, name) => {
            acc[name] = this.getValue(name);
            return acc;
        }, {});
    },

    displayResponse(message) {
        const responseElement = document.getElementById('response-text');
        responseElement.textContent = message;
    }
};

// Placeholder for your actual API methods
const authAPI = {
    signup: async ({ email, password, firstName, lastName }) => {
        // Replace with actual API call
        return { success: true, message: 'Signed up!' };
    },
    login: async ({ email, password }) => {
        // Replace with actual API call
        return { success: true, message: 'Logged in!' };
    },
    verifyEmail: async (code) => {
        // Replace with actual API call
        return { success: true, message: 'Email verified!' };
    },
    resendEmailVerification: async ({ email }) => {
        // Replace with actual API call
        return { success: true, message: 'Email verification resent!' };
    },
    getProfile: async (id) => {
        // Replace with actual API call
        return { success: true, message: 'Profile fetched!' };
    },
    updateProfile: async (id, profileData) => {
        // Replace with actual API call
        return { success: true, message: 'Profile updated!' };
    },
    forgotPassword: async (email) => {
        // Replace with actual API call
        return { success: true, message: 'Forgot password email sent!' };
    },
    resetPassword: async (token, password) => {
        // Replace with actual API call
        return { success: true, message: 'Password reset!' };
    }
};

class FormManager {
    static async submitForm(apiMethod, fields, type) {
        const inputData = Utils.getValues(fields);
        try {
            const data = await apiMethod(inputData);
            Utils.displayResponse(JSON.stringify(data));
        } catch (error) {
            Utils.displayResponse(error.message || `Error in ${type}`);
        }
    }
}

// Handlers for the forms
const handleSignup = () => {
    FormManager.submitForm(authAPI.signup, ['signupEmail', 'signupPassword', 'signupFirstName', 'signupLastName'], 'Signup');
};

const handleLogin = () => {
    FormManager.submitForm(authAPI.login, ['loginEmail', 'loginPassword'], 'Login');
};

// ... add more handlers for other forms ...

document.addEventListener('DOMContentLoaded', () => {
    Utils.getDocumentElementId('signupButton').addEventListener('click', handleSignup);
    Utils.getDocumentElementId('loginButton').addEventListener('click', handleLogin);
    // ... bind other buttons ...
});
const Utils = {
    getDocumentElementId(name) {
        const idMap = {
            'signupEmail': 'signup-email',
            'signupPassword': 'signup-password',
            'signupFirstName': 'signup-firstName',
            'signupLastName': 'signup-lastName',
            'loginEmail': 'login-email',
            'loginPassword': 'login-password',
            // ... add more mappings as needed
        };
        return document.getElementById(idMap[name]);
    },

    getValue(name) {
        return this.getDocumentElementId(name).value;
    },

    getValues(names) {
        return names.reduce((acc, name) => {
            acc[name] = this.getValue(name);
            return acc;
        }, {});
    },

    displayResponse(message) {
        const responseElement = document.getElementById('response-text');
        responseElement.textContent = message;
    }
};

// Placeholder for your actual API methods
const authAPI = {
    signup: async ({ email, password, firstName, lastName }) => {
        // Replace with actual API call
        return { success: true, message: 'Signed up!' };
    },
    login: async ({ email, password }) => {
        // Replace with actual API call
        return { success: true, message: 'Logged in!' };
    },
    verifyEmail: async (code) => {
        // Replace with actual API call
        return { success: true, message: 'Email verified!' };
    },
    resendEmailVerification: async ({ email }) => {
        // Replace with actual API call
        return { success: true, message: 'Email verification resent!' };
    },
    getProfile: async (id) => {
        // Replace with actual API call
        return { success: true, message: 'Profile fetched!' };
    },
    updateProfile: async (id, profileData) => {
        // Replace with actual API call
        return { success: true, message: 'Profile updated!' };
    },
    forgotPassword: async (email) => {
        // Replace with actual API call
        return { success: true, message: 'Forgot password email sent!' };
    },
    resetPassword: async (token, password) => {
        // Replace with actual API call
        return { success: true, message: 'Password reset!' };
    }
};

class FormManager {
    static async submitForm(apiMethod, fields, type) {
        const inputData = Utils.getValues(fields);
        try {
            const data = await apiMethod(inputData);
            Utils.displayResponse(JSON.stringify(data));
        } catch (error) {
            Utils.displayResponse(error.message || `Error in ${type}`);
        }
    }
}

// Handlers for the forms
const handleSignup = () => {
    FormManager.submitForm(authAPI.signup, ['signupEmail', 'signupPassword', 'signupFirstName', 'signupLastName'], 'Signup');
};

const handleLogin = () => {
    FormManager.submitForm(authAPI.login, ['loginEmail', 'loginPassword'], 'Login');
};

// ... add more handlers for other forms ...

document.addEventListener('DOMContentLoaded', () => {
    Utils.getDocumentElementId('signupButton').addEventListener('click', handleSignup);
    Utils.getDocumentElementId('loginButton').addEventListener('click', handleLogin);
    // ... bind other buttons ...
});
