/* const { JSDOM } = require("jsdom");
const dom = new JSDOM("<!DOCTYPE html><p>Hello</p>");
const document = dom.window.document;

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM simulated in Node");
});

*/
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('redirect-button')
    if (button) {
        button.addEventListener('click', () => {
            console.log('Redirecting...');
            window.location.href = 'experience.html';
        });
    } else {
        console.error('Element with ID "resource-page" not found.');
    }

    const blogButton = document.getElementById('mybutton')
    if (blogButton) {
        blogButton.addEventListener('click', () => {
            window.location.href = 'blog.html';
        });
    }
}); 
document.addEventListener('DOMContentLoaded', () => {
    console.log("Scripts.js loaded ");
  });
