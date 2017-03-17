'use strict';

var i = 0;
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'total'];
var body = document.getElementsByTagName('body')[0];
var stores = [];
for (var a = 0; i < 5; i++) {
  if (a = 0) {
    var store = stores[a];
  }
  if (a = 1) {
    var store = stores[a];
  }
  if (a = 2) {
    var store = stores[a];
  }
  if (a = 3) {
    var store = stores[a];
  }
  if (a = 4) {
    var store = stores[a];
  }
  var store = {
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    salesArr: [],
    name: (store),
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

  store.createListItems();
}
