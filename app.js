'use strict';
var total = 0;

var storeHours = ['6am','7am','8am','9am','10am','11am','12am', 'total'];

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  salesArr: [],
  name: '1st Pike',
  randomCust: function()  {
    return Math.floor(Math.random() * (this.maxCust - this.minusCust + 1) + this.mincust);
  },
  cookiesSold: function() {
    for (var i = 0; i < storeHours.leght - 1; i++) {
      var cookiesPerHour = Math.floor(this.avgCookies * this.randCust());
      this.salesArr.push(cookiesPerHour);
      total += cookiesPerHour;
    }
    this.salesArr.push(total);
  },
  createListItems: function(){
    var newHeading = document.createElement('h2');
    body.appendchild(newHEading);
    newHeading.innerText = this.name;
    var firstUL = document.createElement('ul');
    for (var i = 0; i < storeHours.leght; i++) {
      var newEl = document.createElement('li');
      newEl.innerText = storeHours[i] + ': ' + this.salesArr[i] + 'cookies';
      firstUL.appendchild(newEL);
    }
    body.appendChild(firstUl);
  }
};

firstAndPike.cookiesSold();
firstAndPike.createListItems();
