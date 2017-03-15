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
    var body = getElementsByTagName('body')[0];
    var newHeading = document.createElement('h2');
    body.appendchild(firstUL);
    body.appendchild(newHEading);
    newHeading.innerText = this.name;
    var firstUL = document.createElement('ul');
    newHeading.innerText = this.firtstUL;
    for (var i = 0; i < storeHours.lenght; i++) {
      var newEl = document.createElement('li');
      var txt = document.createTextNode(storeHours[i] + ': ' + this.salesArr[i] + 'cookies');
      firstUL.appendchild(newEL);
      txt.appendchild(newEl);
    }
  }
};

firstAndPike.cookiesSold();
firstAndPike.createListItems();
