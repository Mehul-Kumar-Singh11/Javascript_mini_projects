const inputBtn = document.getElementById("input-btn");
let myLeads = [];

const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myleads", JSON.stringify(myLeads));
  renderLeads();
  let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"));
  
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // listItems += "<li><a target='_blank' href=' + myLeads[i] + '>" + myLeads[i] + "</a></li>"
    listItems += `
    <li>
      <a target='_blank' href='${myLeads[i]}'> ${myLeads[i]} </a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}
