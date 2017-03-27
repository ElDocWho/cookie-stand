'use strict';

var hours = ['','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm', '8pm','Total'];

var div = document.getElementById('cookietable');

var allStores = [];
var hourlyDailySum = [];

var firstAndPike = new CreateStore('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new CreateStore('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new CreateStore('Seattle Center', 11, 38, 3.7);
var capitolHill = new CreateStore('Capitol Hill', 20, 38, 2.3);
var alki = new CreateStore('Alki', 2, 16, 4.6);

function CreateStore(name,minCust,maxCust,avgCookies) {
  this.name = name;
  this.minCust = minCust,
  this.maxCust = maxCust;
  this.avgCookiesPurch = avgCookies;
  this.salesArray = [];
  this.total = 0;
  this.randomCustomerPerHr = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };

  this.cookiesPurchPerHr = function() {
    for (var i = 0; i < hours.length - 2; i++) {
      var giveMeCookies = Math.floor(this.randomCustomerPerHr() * this.avgCookiesPurch);
      this.salesArray.push(giveMeCookies);
      this.total += giveMeCookies;
    }
  };

  this.generateTableRow = function() {

    this.cookiesPurchPerHr();

    var table = document.getElementById('bodyTable');

    var tr = document.createElement('tr');

    var tbody = document.getElementById('tableBody');
    tbody.appendChild(tr);

    var storeNameTh = document.createElement('th');
    storeNameTh.innerText = this.name;

    tr.appendChild(storeNameTh);

    for (var i = 0; i < hours.length - 2; i++) {
      var newTd = document.createElement('td');
      newTd.innerText = this.salesArray[i];
      tr.appendChild(newTd);
    }
    newTd = document.createElement('td');
    newTd.innerText = this.total;
    tr.appendChild(newTd);
  };
  allStores.push(this);
};

function createTable() {
  var table = document.createElement('table');
  div.appendChild(table);
  table.id = 'bodyTable';

  var thead = document.createElement('thead');
  table.appendChild(thead);

  var tr = document.createElement('tr');
  thead.appendChild(tr);

  for (var i = 0; i < hours.length - 1; i++) {
    var th = document.createElement('th');
    th.innerText = hours[i];
    tr.appendChild(th);
  }
  var th = document.createElement('th');
  th.innerText = hours[i];
  tr.appendChild(th);
  var tbody = document.createElement('tbody');
  table.appendChild(tbody);
  tbody.id = 'tableBody';
  var tfoot = document.createElement('tfoot');
  table.appendChild(tfoot);
  tfoot.id = 'tableFoot';
};
createTable();

function hourlyStoresTotal() {
  var table = document.getElementById('bodyTable');
  var tfoot = document.getElementById('tableFoot');
  table.appendChild(tfoot);
  var tr = document.createElement('tr');
  tfoot.appendChild(tr);
  tr.id = 'totalsRow';
  var th = document.createElement('th');
  th.innerText = 'Total';
  tr.appendChild(th);

  for (var i = 0; i < hours.length - 2; i++) {
    var hrlyTotal = 0;
    for (var x = 0; x < allStores.length; x++) {
      hrlyTotal += allStores[x].salesArray[i];
    }
    var footTD = document.createElement('td');
    footTD.innerText = hrlyTotal;
    footTD.style.backgroundColor = '#40B27C';
    tr.appendChild(footTD);
  }
  var totalOfTotals = 0;
  for (var i = 0; i < allStores.length; i++) {
    totalOfTotals += allStores[i].total;
  }
  var totalTD = document.createElement('td');
  totalTD.innerText = totalOfTotals;
  totalTD.style.backgroundColor = '#40b27c';
  tr.appendChild(totalTD);
};

for (var i = 0; i < allStores.length; i++) {
  allStores[i].generateTableRow();
}

hourlyStoresTotal();

var elStoreForm = document.getElementById('newStoreForm');

function submitButton(event) {
  event.preventDefault();
  var newStoreForm = event.target;
  var strLoc = event.target.storeLocation;
  var minCst = event.target.minimumCustomers;
  var maxCst = event.target.maximumCustomers;
  var avgCook = event.target.averageCookies;
  if (minCst > maxCst) {
    alert('Not valid input values!!!!');
  } else {
    var formVariables = new CreateStore(strLoc.value, minCst.value, maxCst.value, avgCook.value);
    formVariables.generateTableRow();
    var tfoot = document.getElementById('tableFoot');
    var totalsRow = document.getElementById('totalsRow');
    tfoot.removeChild(totalsRow);
    hourlyStoresTotal();
  }
  elStoreForm.reset();
}

elStoreForm.addEventListener('submit',submitButton);
