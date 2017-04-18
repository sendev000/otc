import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from 'angular2-google-maps/core';
/*
  Generated class for the NearestHospital page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { ChildrenClinicListPage } from '../children-clinic-list/children-clinic-list';

@Component({
  selector: 'page-children-clinic',
  templateUrl: 'children-clinic.html'
})
export class ChildrenClinicPage {

enterLocation: boolean;
  locationPage: number;
  public mapData = {
    latitude: 0,
    longitude: 0,
    zoom: 1,
    location: ""
  }
  public searchControl: FormControl;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,
    private mapsAPILoader: MapsAPILoader,private ngZone: NgZone) 
  {
    this.menu = menu;
    this.enterLocation = false;
    this.locationPage = 1;
  }
  showMenu() {
    this.menu.open();
  }
  transitionPage(pageNum: number){
    if (pageNum == 2)
      this.mapData.location = this.searchElementRef.nativeElement.value;
    this.locationPage = pageNum;
  }
  findHospital(){
    GlobalVars.setMapData(this.mapData);
    this.navCtrl.push(ChildrenClinicListPage);
  }
  useCurrentLocation() {
    this.setCurrentPosition();
    this.locationPage = 3;
  }
  toggleLocationByInput() {
    this.enterLocation = !this.enterLocation;
  }
  ionViewDidLoad() {
  }  
  ngOnInit() {
    //set google maps defaults
    this.mapData.zoom = 4;
    this.mapData.latitude = 39.8282;
    this.mapData.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.mapData.latitude = place.geometry.location.lat();
          this.mapData.longitude = place.geometry.location.lng();
          this.mapData.zoom = 11;
          this.mapData.location = place.formatted_address;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.mapData.latitude = position.coords.latitude;
        this.mapData.longitude = position.coords.longitude;
        this.mapData.zoom = 11;
        this.printAddress(this.mapData.latitude, this.mapData.longitude);
      });
    }
  }
  printAddress(latitude, longitude){
    var geocoder = new google.maps.Geocoder();
    var userLocation = new google.maps.LatLng(latitude, longitude);
    var $this = this;
    geocoder.geocode({'location' : userLocation}, function (results, status){
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          $this.mapData.location = results[0].formatted_address;
        }
      }
    });
  }

}
