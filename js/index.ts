class Mylocation{
	id;
	address;
	district;
	city;
	constructor(id,address,district,city){
		this.id = id;
		this.address = address;
		this.district = district;
		this.city = city;
	}

}
class resturant extends Mylocation {
	name: string;
	image: string;
	Tel: string;
	rate :string;
	typeRes :string;
	website : string;
	constructor(id,address,district,city,name,image,Tel,rate,typeRes,website) {
		super(id,address,district,city);
		this.name = name;
		this.image = image;
		this.Tel = Tel;
		this.typeRes = typeRes;
		this.rate = rate;
		this.website = website;
		// code...
	}
}
class myEvent extends Mylocation {
	name: string;
	image: string;
	place: string;
	Tel: string;
	dateVon: string;
	datebis: string;
	timeEve: string;
	price: string;
	typeEve :string;
	website : string;
	constructor(id,address,district,city,name,image,place,Tel,dateVon,datebis,timeEve,price,typeEve,website) {
		super(id,address,district,city);
		this.name = name;
		this.image = image;
		this.place = place;
		this.Tel = Tel;
		this.typeEve = typeEve;
		this.dateVon = dateVon;
		this.datebis = datebis;
		this.timeEve = timeEve;
		this.price = price;
		this.website = website;
		// code...
	}
}
class List<T> {
    private items: Array<T>;

    constructor() {
        this.items = [];
    }

    size(): number {
        return this.items.length;
    }

    add(value: T): void {
        this.items.push(value);
    }

    get(index: number): T {
        return this.items[index];
    }
}
// import {default as restaurants} from "restaurants-json.js";
var restaurants2 = Restaurants.Restaurant;
// console.log(restaurants);

//console.log(restaurants2);
var resList = new List<T>();
for (let entry of restaurants2)  {
	var res = new resturant(
		entry.id,
		entry.address,
		entry.district,
		entry.city,
		entry.name,
		entry.image,
		entry.Tel,
		entry.rate,
		entry.resType,
		entry.website);
	resList.add(res);
	//console.log(res);

}
createRestaurants(resList);

function createRestaurants(res :List<T>) {

	for (let item of res.items)  {
		var resItemHtml =`		
            <div class="card divResItem col-xs-12 col-md-6 col-lg-3 mr-5 mb-5">
            	<div>
                	<h4 class="card-title m-3">` + item.name + `</h5>
                	<input type="text" class="rating rating-loading" value="2" data-size="xs" title="">
    			</div>
              	<div class="stadt brandon smaller m-2">
              	  	<a rel="nofollow" href="https://www.diefruehstueckerinnen.at/stadt/wien/5" class="city-link">
              	  	<img src="img/location.png" alt="location">Wien, ` + item.district + ` Bezirk</a>
              	</div> 
              	<div class="DivresImg">         	
              		<img class="card-img-bottom resImg" src="` + item.image + `" alt="Card image cap">
              		<div class="middle text p-2">
              			<div>
							 ` + item.typeRes + ` Food
						</div>
              			<div>
    			 			<img class="left" src="img/location.png" alt="location"> `
    			  			+ item.address + ` ` + item.district + ` ` + item.city + `
						</div>
						<div>
						 	` + item.Tel + `
						</div>
						<div>
							` + item.website + `
						</div>
					</div>
  				</div>
            </div>
		`;
		document.getElementById('resItems').innerHTML += resItemHtml;
	}
	// body...
	var eventsList = myEvents.myEvent;
	var eveList = new List<T>();
	for (let entry of eventsList)  {
		var eve = new myEvent(
			entry.id,
			entry.address,
			entry.district,
			entry.city,
			entry.name,			
			entry.image,
			entry.place,			
			entry.Tel,
			entry.dateVon,
			entry.datebis,
			entry.timeEve,
			entry.price,
			entry.type,
			entry.website);
		eveList.add(eve);
		//console.log(res);

	}
createEvents(eveList);

function createEvents(eve :List<T>) {

	for (let item of eve.items)  {
		var eveItemHtml =`		
            <div class="card divEveItem col-xs-12 col-md-6 col-lg-3 mr-5 mb-5">
            	<div class="eveTitle">
                	<h4 class="card-title m-3">` + item.name + `</h5>
                	<p class="m-3">` + item.dateVon + ` - ` + item.datebis + `</p>    				
                </div>              	
              	<div class="DivEveImg">         	
              		<img class="card-img-bottom resImg eveImg" src="` + item.image + `" alt="Card image cap">
              		<div class="middleEve textEve p-2">
              			<div>
							 ` + item.typeEve + `  ` + item.price +  `$
						</div>
						<div>
    			 			<img class="left" src="img/location.png" alt="location"> ` + item.place + `<p>`
    			  			+ item.address + ` ` + item.district + ` ` + item.city + `</p>
						</div>
						<div>
						 	` + item.Tel + `
						</div>
						<div>
							` + item.website + `
						</div>
					</div>
  				</div>
            </div>
		`;
		document.getElementById('eveItems').innerHTML += eveItemHtml;
	}

}

