const endpoint="../../data/search-autocomplete.json",matchItems=[];function findMatches(n,t){return t.filter(t=>{var e=new RegExp(n,"gi");return t.match(e)})}function numberWithCommas(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function displayMatches(){const t=findMatches(this.value,matchItems);var e=t.map(t=>{var e=new RegExp(this.value,"gi");return`<li class="match-item">${t.replace(e,`${this.value}`)}</li>`}).join("");0<searchInput.value.length?matchList.innerHTML=e:matchList.innerHTML=""}fetch(endpoint).then(t=>t.json()).then(t=>matchItems.push(...t));const searchInput=document.querySelector("#search"),matchList=document.querySelector("#match-list");searchInput.addEventListener("change",displayMatches),searchInput.addEventListener("keyup",displayMatches);