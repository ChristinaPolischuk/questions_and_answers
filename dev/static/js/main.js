// const endpoint = '../../data/search-autocomplete.json';
// const matchItems = [];
// fetch(endpoint)
// 	.then(raw => raw.json())
// 	.then(data => matchItems.push(...data));

// function findMatches(wordToMatch, matchItems) {
// 	return matchItems.filter(matchItem => {
// 		const regex = new RegExp(wordToMatch, "gi");
// 		return matchItem.title.match(regex);
// 	});
// }
// function numberWithCommas(x) {
// 	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }
// function displayMatches() {
// 	const matchArray = findMatches(this.value, matchItems);
// 	const html = matchArray.map(matchItem => {
// 		const regex = new RegExp(this.value, 'gi');
// 		const item = matchItem.title.replace(regex, `${this.value}`);
// 		const url = matchItem.url;
// 		return `<li class="match-item"><a href="${url}">${item}</a></li>`;
// 	}).join('');
// 	if (searchInput.value.length > 0) {
// 		matchList.innerHTML = html;
// 	} else {
// 		matchList.innerHTML = '';
// 	}
// }
// const searchInput = document.querySelector("#search");
// const matchList = document.querySelector("#match-list");
// searchInput.addEventListener("change", displayMatches);
// searchInput.addEventListener("keyup", displayMatches);



async function getResponse() {
	return await fetch('../../data/search-autocomplete.json');
}

console.log(getResponse());