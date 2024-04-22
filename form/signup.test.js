// Load the necessary modules
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Load the HTML content
const html = fs.readFileSync(path.resolve(__dirname, './signup.html'), 'utf8');

let dom;
let document;
let window;

beforeEach(() => {
  // Create a new JSDOM instance before each test
  dom = new JSDOM(html, { runScripts: 'dangerously' });
  document = dom.window.document;
  window = dom.window;

  // Add the JavaScript file to the JSDOM environment
  const scriptPath = path.resolve(__dirname, './signup.js');
  const scriptContent = fs.readFileSync(scriptPath, 'utf8');
  const scriptElement = document.createElement('script');
  scriptElement.textContent = scriptContent;
  document.body.appendChild(scriptElement);

  // Mock the intlTelInput function
  window.intlTelInput = jest.fn().mockReturnValue({
    getSelectedCountryData: () => ({ dialCode: '1' })
  });
});

test('Form submission with valid data', () => {
  // Mock the alert function
  window.alert = jest.fn();

  // Fill the form fields with valid data
  document.getElementById('firstName').value = 'Jane';
  document.getElementById('surname').value = 'Moraa';
  document.getElementById('email').value = 'jane@yahoo.com';
  document.getElementById('password').value = 'Admin123!';
  document.getElementById('confirmPassword').value = 'Admin123!';
  document.getElementById('dateOfBirth').value = '1990-01-01';
  document.getElementById('gender').value = 'female';
  document.getElementById('location').value = 'Nakuru';
  document.getElementById('countryCode').value = 'Kenya';
  document.getElementById('mobileNumber').value = '1234567890';
  document.getElementById('height').value = '180';
  document.getElementById('weight').value = '70';
  document.getElementById('bloodTypeInput').value = 'A+';

  // Submit the form
  document.getElementById('signup-form').dispatchEvent(new window.Event('submit'));

  // Check if alert was called with the success message
  expect(window.alert).toHaveBeenCalledWith('Form submitted successfully');
});

test('Form submission with weak password', () => {
  // Mock the alert function
  window.alert = jest.fn();

  // Fill the form fields with weak password
  document.getElementById('firstName').value = 'Jane';
  document.getElementById('surname').value = 'Moraa';
  document.getElementById('email').value = 'jane@yahoo.com';
  document.getElementById('password').value = 'admin';
  document.getElementById('confirmPassword').value = 'admin';
  document.getElementById('dateOfBirth').value = '1990-01-01';
  document.getElementById('gender').value = 'female';
  document.getElementById('location').value = 'Nakuru';
  document.getElementById('countryCode').value = 'Kenya';
  document.getElementById('mobileNumber').value = '1234567890';
  document.getElementById('height').value = '180';
  document.getElementById('weight').value = '70';
  document.getElementById('bloodTypeInput').value = 'A+';

  // Submit the form
  document.getElementById('signup-form').dispatchEvent(new window.Event('submit'));

  // Check if alert was called with the error message
  expect(window.alert).toHaveBeenCalledWith('Please enter a stronger password');
});

test('Form submission with mismatched passwords', () => {
  // Mock the alert function
  window.alert = jest.fn();

  // Fill the form fields with mismatched passwords
  document.getElementById('firstName').value = 'Jane';
  document.getElementById('surname').value = 'Moraa';
  document.getElementById('email').value = 'jane@yahoo.com';
  document.getElementById('password').value = 'Admin123!';
  document.getElementById('confirmPassword').value = 'Admin12345'; 
  document.getElementById('dateOfBirth').value = '1990-01-01';
  document.getElementById('gender').value = 'female';
  document.getElementById('location').value = 'Nakuru';
  document.getElementById('countryCode').value = 'Kenya';
  document.getElementById('mobileNumber').value = '1234567890';
  document.getElementById('height').value = '180';
  document.getElementById('weight').value = '70';
  document.getElementById('bloodTypeInput').value = 'A+';

  // Submit the form
  document.getElementById('signup-form').dispatchEvent(new window.Event('submit'));

  // Check if alert was called with the error message
  expect(window.alert).toHaveBeenCalledWith('Passwords do not match');
});
