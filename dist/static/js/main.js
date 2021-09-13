function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
function getResponse() {
  return _getResponse.apply(this, arguments);
}

function _getResponse() {
  _getResponse = _asyncToGenerator(function* () {
    return yield fetch('../../data/search-autocomplete.json');
  });
  return _getResponse.apply(this, arguments);
}

console.log(getResponse());