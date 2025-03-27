

let searchTerms = ["apple", "banana", "orange", "pear", "grape", "pineapple", "mango", "watermelon", "strawberry", "blueberry",
"raspberry", "blackberry", "kiwi", "peach", "plum", "nectarine", "apricot", "cherry", "fig", "pomegranate",
"lime", "lemon", "grapefruit", "coconut", "papaya", "passionfruit", "guava", "lychee", "persimmon", "dragonfruit",
"starfruit", "cranberry", "boysenberry", "mulberry", "elderberry", "gooseberry", "currant", "date", "prune", "raisins",
"avocado", "tomato", "cantaloupe", "honeydew", "jackfruit", "durian", "soursop", "breadfruit", "jambul", "jabuticaba",
"olive", "plantain", "quince", "rambutan", "longan", "langsat", "loquat", "miracle fruit", "tamarind", "sapodilla",
"mangosteen", "salak", "ackee", "bilberry", "cloudberry", "medlar", "rowan", "sea buckthorn", "surinam cherry", "pineberry",
"marionberry", "loganberry", "yumberry", "huckleberry", "saskatoon berry", "jostaberry", "tayberry", "barberry", "acerola", "cherimoya",
"feijoa", "guanabana", "pomelo", "ugli fruit", "mandarin", "tangelo", "clementine", "blood orange", "bergamot", "buddha's hand",
"calamansi", "finger lime", "kumquat", "yuzu", "bitter melon", "horned melon", "karela", "melothria", "chayote", "pepino",
"cucamelon", "balsam apple", "capuli cherry", "camucamu", "jaboticaba", "lucuma", "mamey sapote", "canistel", "black sapote", "santol",
"sugar apple", "custard apple", "pawpaw", "bael", "cempedak", "langsat", "noni", "pineberry", "white currant", "red currant",
"blackcurrant", "goji berry", "golden berry", "inca berry", "mulberry", "snowberry", "white mulberry", "ziziphus", "buffaloberry", "caperberry",
"hog plum", "ambarella", "bacuri", "bignay", "camachile", "guavaberry", "mombin", "soncoya", "tamarillo", "tomatillo",
"cacao", "coffee cherry", "cupuacu", "date plum", "eggfruit", "ilama", "imbe", "jabuticaba", "lúcuma", "monstera",
"nance", "pandanus", "pili nut", "pitomba", "safou", "santol", "soursop", "tucumã", "voavanga", "wood apple"];

let lastSearch = "";

let button = getElement("button");
button.addEventListener("click", buttonClickFunction);
let inputBox = getElement("input");
inputBox.addEventListener("input", enterDownFunction);

function enterDownFunction(keypress) { 
	buttonClickFunction();
}

function buttonClickFunction() {
	// console.log("Button was clicked!");
	if (valueInTextBox() == "") {
		let parent = getElement("ol");
		parent.innerHTML = "";
	} else {
		let searchResults = giveSearchResults(valueInTextBox()); // The search results in HTML fragment form
		drawSearchResults(searchResults);
	}
}

function valueInTextBox() {
	console.log("The value inside the text box was (" + getElement("input").value + ")");
	console.log("The length of the text box was (" + getElement("input").value.length + ")");
	return getElement("input").value.toLowerCase();
}

function getElement(elementType) {
	// console.log("Getting element: " + elementType);
	return document.querySelector(elementType);
}

function giveListItemFromText(text) {
	let newListItem = document.createElement("li");
	newListItem.innerHTML = text;
	return newListItem;
}

function giveSearchResults(searchTerm) {
	searchResults = [];
	for (let i = 0; i < searchTerms.length; i++) {
		if (searchTerms[i].includes(searchTerm)) {
			searchResults.push(giveListItemFromText(searchTerms[i]));
		}
	}
	return searchResults;
}

function drawSearchResults(searchResults) { // The search results are a list of HTML segments 
	let parent = getElement("ol");
	parent.innerHTML = "";
	for (let i = 0; i < searchResults.length; i++) {
		parent.appendChild(searchResults[i]);
	}
}
