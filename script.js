var css = document.querySelector("h3"); 
var color1 = document.querySelector(".color1"); 
var color2 = document.querySelector(".color2"); 
var color3 = document.querySelector(".color3"); 
var body = document.getElementById("gradient"); 

// function updateColor() {
var updateColor = function() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ", " 
	+ color3.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

window.addEventListener("load", updateColor); 
color1.addEventListener("input", updateColor); 
color2.addEventListener("input", updateColor); 
color3.addEventListener("input", updateColor); 

// textContent, innerHTML, createTextNode ... 
// There are a LOT of ways to add content to the DOM. 
// In the React section, a lot of this logic will have been abstracted and localized. 

// Enhancements: 
// Allow users to add extra color stops and still spit out the css when it's changed 
// Allow users to delete color stops 
// Allow users to update the gradient direction 
// Helpful to reiterate what we've worked on before, basic js stuff. 

// Also work on shine & add some features 
// Get thru next section -- 

// start to transfer files from other shine repo into this one (replace all the html & js)
// There will be 2 locations we can push to: Github and Heroku 
// Get in the habit of pushing to one and then the other so Greg can review 