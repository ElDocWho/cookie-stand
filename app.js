'use strict';
var i = 0;
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'total'];
var body = document.getElementsByTagName('body')[0];
var stores = ['1st and Pike','SeaTac Airport','Seattle Center','Capitol Hill','Alki'];
for (var i = 0; i < 5; i++) {
  var x = {
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    salesArr: [],
    name: stores[i],
    randCust: function () {
      return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },
    cookiesSold: function(){
      var total = 0;
      for (var i = 0; i < storeHours.length - 1; i++) {
        var cookiesPerHour = Math.floor(this.avgCookies * this.randCust());
        this.salesArr.push(cookiesPerHour);
        total += cookiesPerHour;
      }
      this.salesArr.push(total);
    },
    createListItems: function(){
      this.cookiesSold();
      var newHeading = document.createElement('h2');
      body.appendChild(newHeading);
      newHeading.innerText = this.name;
      var firstUl = document.createElement('ul');
      for (var i = 0; i < storeHours.length; i++) {
        var newListItem = document.createElement('li');
        newListItem.innerText = storeHours[i] + ': ' + this.salesArr[i] + ' cookies';
        firstUl.appendChild(newListItem);
      }
      body.appendChild(firstUl);
    }
  };
  x.createListItems();



var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var firstPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.3);
var seaCenter = new Store('Seattle Center', 11, 38, 2.3);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

function Store(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.total = 0;
  this.salesArray = [];
  var salesArray = this.salesArray;
  var total = this.total;

  this.randomCust = function() {
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  };

  this.randomHourlySale = function() {
    return Math.floor(this.randomCust() * avgCookieSale);
  };

  this.totalSales = function() {
    for (var i = 0; i < storeHours.length; i++) {
      var randomHourlySale = this.randomHourlySale();
      salesArray.push(randomHourlySale);
      this.total += randomHourlySale;

var body = document.getElementsByTagName('body')[0];
var allStores = [];

var storeHrs = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var oneAndPike = new CookieStand('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new CookieStand('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new CookieStand('Seattle Center', 11, 38, 3.7);
var capitolHill = new CookieStand('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStand('Alki', 2, 16, 4.6);

function CookieStand(name, minHourCust, maxHourCust, avgCookiesPerCust) {
  this.name = name;
  this.minHourCust = minHourCust;
  this.maxHourCust = maxHourCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.total = 0;
  this.salesArr = [];
  this.customersPerHr = function() {
    return Math.floor(Math.random() * (this.maxHourCust - this.minHourCust + 1) + this.minHourCust);
  };

  this.dailyCookies = function() {
    for (var i = 0; i < storeHrs.length - 1; i++) {
      var cookiesPerHr = Math.floor(this.customersPerHr() * this.avgCookiesPerCust);
      this.salesArr.push(cookiesPerHr);
      this.total = cookiesPerHr;

    }
  };

  this.totalSales();
  this.renderHTML = function() {

    var newUl = document.createElement('ul');
    var newHeading = document.createElement('h2');
    newHeading.innerText = name;
    body.appendChild(newHeading);

    for (var i = 0; i < salesArray.length; i++) {
      var newLi = document.createElement('li');
      newLi.innerText = storeHours[i] + ': ' + salesArray[i] + ' cookies';
      newUl.appendChild(newLi);
    }

    var TotalLi = document.createElement('li');
    TotalLi.innerText = 'Total' + ': ' + this.total + ' cookies';
    newUl.appendChild(TotalLi);
    body.appendChild(newUl);
  };
};


var tabFunction = function() {


  var tHead = document.createElement('thead');
  table.appendChild(tHead);
  var headRow = document.createElement('tr');
  tHead.appendChild(headRow);

  var spacer = document.createElement('th');
  headRow.appendChild(spacer);

  for (var i = 0; i < storeHours.length; i++) {
    var tData = document.createElement('th');
    tData.innerText = storeHours[i];
    headRow.appendChild(tData);
  };

  //table body
  var tBody = document.createElement('tbody');
  table.appendChild(tBody);

  var tabRow = document.createElement('tr');
  tBody.appendChild(tabRow);

  newTableRow(firstPike);
  newTableRow(seaTac);
  newTableRow(seaCenter);
  newTableRow(capHill);
  newTableRow(alki);

  var tFoot = document.createElement('tf');
  body.appendChild(tFoot);
};

function newTableRow(store) {
  var tBody = document.getElementsByTagName('tbody')[0];
  var tabRow = document.createElement('tr');
  tBody.appendChild(tabRow);

  var rowName = document.createElement('th');
  tabRow.appendChild(rowName);
  rowName.innerText = store.name;

  for (var i = 0; i < storeHours.length; i++) {
    var tData = document.createElement('td');
    tData.innerText = store.salesArray[i];
    tabRow.appendChild(tData);
  };
}


tabFunction();

var form = document.getElementById('the-form');
function createNewStore(event) {
  event.preventDefault();
  var name = event.target.elements.storeName;
  var minCust = event.target.elements.minCust;
  var maxCust = event.target.elements.maxCust;
  var avgCookieSale = event.target.elements.aveCookies;

  var tableHead = document.createElement('thead');
  table.appendChild(tableHead);
  var tRow = document.createElement('tr');
  tableHead.appendChild(tRow);
  for (var i = 0; i < storeHrs.length; i++) {
    var th = document.createElement('th');
    th.innerText = storeHrs[i];
    tRow.appendChild(th);
  }
  var tableBody = document.createElement('tbody');
  table.appendChild(tableBody);
  tableBody.id = 'table-body';
};
createTable();



  if (maxCust < minCust) {
    alert('The max number of customers should not be larger than the min number of customers');
  } else {
    var newStore = new Store(name.value, Math.floor(minCust.value), Math.floor(maxCust.value), avgCookieSale.value);
    newTableRow(newStore);

    form.reset();
  }
=======
for (var i = 0; i < allStores.length; i++) {
  allStores[i].generateTableRow();

}

form.addEventListener('submit', createNewStore);
