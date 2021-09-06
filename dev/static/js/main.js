const endpoint = '../../data/search-autocomplete.json';

const matchItems = [];

fetch(endpoint)
	.then(raw => raw.json())
	.then(data => matchItems.push(...data));

function findMatches(wordToMatch, matchItems) {
	return matchItems.filter(matchItem => {
		const regex = new RegExp(wordToMatch, "gi");
		return matchItem.match(regex);
	});
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
	const matchArray = findMatches(this.value, matchItems);
	const html = matchArray.map(matchItem => {
		const regex = new RegExp(this.value, 'gi');
		const item = matchItem.replace(regex, `${this.value}`);
		return `<li class="match-item">${item}</li>`;
	}).join('');
	if (searchInput.value.length > 0) {
		matchList.innerHTML = html;
	} else {
		matchList.innerHTML = '';
	}
}

const searchInput = document.querySelector("#search");
const matchList = document.querySelector("#match-list");
searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);