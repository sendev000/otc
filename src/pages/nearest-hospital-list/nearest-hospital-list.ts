import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
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

@Component({
  selector: 'page-nearest-hospital-list',
  templateUrl: 'nearest-hospital-list.html'
})
export class NearestHospitalListPage implements OnInit {
	public mapData = {
		latitude: 0,
		longitude: 0,
		zoom: 1,
		location: ""
	};
	TableData: any;
	TableLength: number;
	TableOneTimeLength: number;
	RestApiURL: string;
	constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,
    	private mapsAPILoader: MapsAPILoader,private ngZone: NgZone, public http: Http, private sanitizer: DomSanitizer) 
	{
		this.menu = menu;
		this.TableData = [];
		this.TableLength = 0;
		this.TableOneTimeLength = 15;	// default;
		this.RestApiURL = GlobalVars.getApiURL() + "ppp=nearest_hospital";
	}
	loadData() {
	    let url = this.RestApiURL + "&lat=" + this.mapData.latitude + "&lng=" + this.mapData.longitude;
	    console.log(url);
	    this.http.get(url).map(res => res.json())
	      .subscribe(data => {
	        this.TableData = data;
	        console.log(this.TableData);
	      }),
	      err => {
	        console.log("Oops!");
	      }
	  }
	ngOnInit() {
		this.mapData = GlobalVars.getMapData();
		this.loadData();
	}
	toggleResult(id: number){
		console.log(id);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad NearestHospitalListPage');
	}

}
