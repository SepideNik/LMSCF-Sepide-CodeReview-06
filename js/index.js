var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mylocation = /** @class */ (function () {
    function Mylocation(id, address, district, city) {
        this.id = id;
        this.address = address;
        this.district = district;
        this.city = city;
    }
    return Mylocation;
}());
var resturant = /** @class */ (function (_super) {
    __extends(resturant, _super);
    function resturant(id, address, district, city, name, image, Tel, rate, typeRes, website) {
        var _this = _super.call(this, id, address, district, city) || this;
        _this.name = name;
        _this.image = image;
        _this.Tel = Tel;
        _this.typeRes = typeRes;
        _this.rate = rate;
        _this.website = website;
        return _this;
        // code...
    }
    return resturant;
}(Mylocation));
var myEvent = /** @class */ (function (_super) {
    __extends(myEvent, _super);
    function myEvent(id, address, district, city, name, image, place, Tel, dateVon, datebis, timeEve, price, typeEve, website) {
        var _this = _super.call(this, id, address, district, city) || this;
        _this.name = name;
        _this.image = image;
        _this.place = place;
        _this.Tel = Tel;
        _this.typeEve = typeEve;
        _this.dateVon = dateVon;
        _this.datebis = datebis;
        _this.timeEve = timeEve;
        _this.price = price;
        _this.website = website;
        return _this;
        // code...
    }
    return myEvent;
}(Mylocation));
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.size = function () {
        return this.items.length;
    };
    List.prototype.add = function (value) {
        this.items.push(value);
    };
    List.prototype.get = function (index) {
        return this.items[index];
    };
    return List;
}());
// import {default as restaurants} from "restaurants-json.js";
var restaurants2 = Restaurants.Restaurant;
// console.log(restaurants);
//console.log(restaurants2);
var resList = new List();
for (var _i = 0, restaurants2_1 = restaurants2; _i < restaurants2_1.length; _i++) {
    var entry = restaurants2_1[_i];
    var res = new resturant(entry.id, entry.address, entry.district, entry.city, entry.name, entry.image, entry.Tel, entry.rate, entry.resType, entry.website);
    resList.add(res);
    //console.log(res);
}
createRestaurants(resList);
function createRestaurants(res) {
    for (var _i = 0, _a = res.items; _i < _a.length; _i++) {
        var item = _a[_i];
        var resItemHtml = "\t\t\n            <div class=\"card divResItem col-xs-12 col-md-6 col-lg-3 mr-5 mb-5\">\n            \t<div>\n                \t<h4 class=\"card-title m-3\">" + item.name + "</h5>\n                \t<input type=\"text\" class=\"rating rating-loading\" value=\"2\" data-size=\"xs\" title=\"\">\n    \t\t\t</div>\n              \t<div class=\"stadt brandon smaller m-2\">\n              \t  \t<a rel=\"nofollow\" href=\"https://www.diefruehstueckerinnen.at/stadt/wien/5\" class=\"city-link\">\n              \t  \t<img src=\"img/location.png\" alt=\"location\">Wien, " + item.district + " Bezirk</a>\n              \t</div> \n              \t<div class=\"DivresImg\">         \t\n              \t\t<img class=\"card-img-bottom resImg\" src=\"" + item.image + "\" alt=\"Card image cap\">\n              \t\t<div class=\"middle text p-2\">\n              \t\t\t<div>\n\t\t\t\t\t\t\t " + item.typeRes + " Food\n\t\t\t\t\t\t</div>\n              \t\t\t<div>\n    \t\t\t \t\t\t<img class=\"left\" src=\"img/location.png\" alt=\"location\"> "
            + item.address + " " + item.district + " " + item.city + "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t \t" + item.Tel + "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t" + item.website + "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n  \t\t\t\t</div>\n            </div>\n\t\t";
        document.getElementById('resItems').innerHTML += resItemHtml;
    }
    // body...
    var eventsList = myEvents.myEvent;
    var eveList = new List();
    for (var _b = 0, eventsList_1 = eventsList; _b < eventsList_1.length; _b++) {
        var entry = eventsList_1[_b];
        var eve = new myEvent(entry.id, entry.address, entry.district, entry.city, entry.name, entry.image, entry.place, entry.Tel, entry.dateVon, entry.datebis, entry.timeEve, entry.price, entry.type, entry.website);
        eveList.add(eve);
        //console.log(res);
    }
    createEvents(eveList);
    function createEvents(eve) {
        for (var _i = 0, _a = eve.items; _i < _a.length; _i++) {
            var item = _a[_i];
            var eveItemHtml = "\t\t\n            <div class=\"card divEveItem col-xs-12 col-md-6 col-lg-3 mr-5 mb-5\">\n            \t<div class=\"eveTitle\">\n                \t<h4 class=\"card-title m-3\">" + item.name + "</h5>\n                \t<p class=\"m-3\">" + item.dateVon + " - " + item.datebis + "</p>    \t\t\t\t\n                </div>              \t\n              \t<div class=\"DivEveImg\">         \t\n              \t\t<img class=\"card-img-bottom resImg eveImg\" src=\"" + item.image + "\" alt=\"Card image cap\">\n              \t\t<div class=\"middleEve textEve p-2\">\n              \t\t\t<div>\n\t\t\t\t\t\t\t " + item.typeEve + "  " + item.price + "$\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n    \t\t\t \t\t\t<img class=\"left\" src=\"img/location.png\" alt=\"location\"> " + item.place + "<p>"
                + item.address + " " + item.district + " " + item.city + "</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t \t" + item.Tel + "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t" + item.website + "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n  \t\t\t\t</div>\n            </div>\n\t\t";
            document.getElementById('eveItems').innerHTML += eveItemHtml;
        }
    }
}
