const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");


const html = fs.readFileSync(path.resolve(__dirname, "./login.html"), "utf8");

const dom = new JSDOM(html, { runScripts: "dangerously" });
const { window } = dom;

global.document = window.document;
global.window = window;

const loginScript = require("./login.js");

const { validateUser } = loginScript;

const { describe, test, expect } = require("@jest/globals");

describe("Login Form Validation", () => {
    test("validateUser function should validate user credentials", () => {
       
        expect(validateUser("jane@yahoo.com", "Admin123")).toBe(true);
        expect(validateUser("jane@yahoo.com", "wrongPassword")).toBe(false);
        expect(validateUser("wrongemail@yahoo.com", "Admin123")).toBe(false);
        expect(validateUser("wrongemail@yahoo.com", "wrongPassword")).toBe(false);
    });

    // Test the toggle password functionality
    test("togglePassword should change the type of password input field", () => {
        const togglePassword = window.document.getElementById("togglePassword");
        togglePassword.click();
        const passwordInput = window.document.getElementById("psw");
        expect(passwordInput.getAttribute("type")).toBe("text");
        togglePassword.click();
        expect(passwordInput.getAttribute("type")).toBe("password");
    });
});
