import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, Platform } from 'ionic-angular';

import { NgZone, OnInit } from '@angular/core';
import { MapsAPILoader } from 'angular2-google-maps/core';

import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the NearestHospital page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { PlaceNavigationPage } from '../place-navigation/place-navigation';

declare var google: any;

@Component({
  selector: 'page-place-details',
  templateUrl: 'place-details.html'
})
export class PlaceDetailsPage {
	placeId: string;
  	mapData = {
		latitude: 0,
		longitude: 0,
		zoom: 1,
		location: ""
	};
	locationData = {
		name: "",
		formatted_address: "",
		website: "",
		telnumber: "",
		telfullnumber: ""
	};
	map: any;
	MapHeight: number;
	greviews: any;
	RestApiURL: string;
	constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,
    	private mapsAPILoader: MapsAPILoader,private ngZone: NgZone, public http: Http, 
    	private sanitizer: DomSanitizer, platform: Platform) 
	{
		this.menu = menu;
		this.MapHeight = 400;
		this.greviews = [];
		this.map = null;
		this.RestApiURL = GlobalVars.getApiURL() + "ppp=nearest_hospital";
	}
	getDirection() {
		this.navCtrl.push(PlaceNavigationPage);
	}
	loadData() {
		this.displayInformationWithPlaceId(this.placeId);
	}
	displayInformationWithPlaceId(placeId){
		var geocoder = new google.maps.Geocoder;
		var request = { placeId: placeId };
		let $this = this;
		this.map = new google.maps.Map(document.createElement('div'), {
			mapTypeId: google.maps.MapTypeId.HYBRID,
		});
		geocoder.geocode({'placeId': placeId[0]}, function(results, status) {
		    if (status === google.maps.GeocoderStatus.OK) {
		      	if (results[0]){
		      		var location;
		      		let result = results[0];
		      		$this.mapData.zoom = 11;
		      		$this.mapData.latitude = result.geometry.location.lat();
					$this.mapData.longitude = result.geometry.location.lng();
					$this.mapData.location = location = result.formatted_address;

					GlobalVars.setAddress2($this.mapData.location);
		      	}
		    } else {
		    }
	  	});
		this.getService(request);
	}
	getService(request) {
		let service = new google.maps.places.PlacesService(this.map);
		let $this = this;
		service.getDetails(request, function(details, status) {
			if (status == google.maps.places.PlacesServiceStatus.OK) {
             	var website;
				if (details.website == undefined)
					website = "";
				else
					website = details.website;

				$this.locationData.name = details.name;
				$this.locationData.formatted_address = details.formatted_address;
				$this.locationData.website = website;
				$this.locationData.telnumber = details.formatted_phone_number;
				$this.locationData.telfullnumber = 'tel:+1' + details.formatted_phone_number; 

				if (details.reviews != undefined)
					$this.calcRating(details);
            }
		});
	}
	calcRating(details){
		let reviews = details.reviews;
		let minrate = 0;
		reviews = this.sortByDate(reviews);
		for (let i=0;i<reviews.length;i++)
		{
			if (reviews[i].rating >= minrate)
			{
				let each = {};
				let stars = this.renderStars(reviews[i].rating);
				let date = this.convertTime(reviews[i].time);
				each['author_url'] = reviews[i].author_url;
				each['author_name'] = reviews[i].author_name;
				each['date'] = date;
				each['stars'] = stars;
				each['text'] = reviews[i].text;
				this.greviews.push(each);
			}
		}
	}
	sortByDate(ray){
		ray.sort(function(a, b){
            var keyA = new Date(a.time),
            keyB = new Date(b.time);
            // Compare the 2 dates
            if(keyA < keyB) return -1;
            if(keyA > keyB) return 1;
            return 0;
		});
		return ray;
	}
	renderStars(rating){
		var stars = "<div class='review-stars'><ul>";      
		for (var i = 0; i < rating; i++) {
		stars = stars+"<li><i class='star'></i></li>";
		};
		if(rating < 5){
			for (var i = 0; i < (5 - rating); i++) {
			  stars = stars+"<li><i class='star inactive'></i></li>";
			};
		}
		stars = stars+"</ul></div>";
		return stars;
	}
	convertTime = function(UNIX_timestamp){
		var a = new Date(UNIX_timestamp * 1000);
		var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		var time = months[a.getMonth()] + ' ' + a.getDate() + ', ' + a.getFullYear();
		return time;
	}
	ngOnInit() {
		
	}
	ionViewDidLoad() {
		this.placeId = GlobalVars.getMapPlaceId();
		this.loadData();
		console.log('ionViewDidLoad NearestHospitalListPage');
	}

}
