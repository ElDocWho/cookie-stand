'use strict';

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

  this.generateTableRow = function() {
    this.dailyCookies();
    var table = document.getElementsByTagName('table')[0];
    var tRow = document.createElement('tr');
    var tableBody = document.getElementById('table-body');
    tableBody.appendChild(tRow);
    var nameTD = document.createElement('th');
    nameTD.innerText = this.name;
    tRow.appendChild(nameTD);
    for (var i = 0; i < storeHrs.length - 1; i++) {
      var newTD = document.createElement('td');
      newTD.innerText = this.salesArr[i];
      tRow.appendChild(newTD);
  };
  allStores.push(this);

function createTable() {
  var table = document.createElement('table');
  body.appendChild(table);
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

for (var i = 0; i < allStores.length; i++) {
  allStores[i].generateTableRow();
}
