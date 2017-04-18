import {GoogleMapsAPIWrapper}  from 'angular2-google-maps/core';
import { Directive,  Input, Output } from '@angular/core';

declare var google: any;
 
@Directive({
  selector: 'sebm-google-map-directions'
})
export class DirectionsMapDirective {
  @Input() origin:any ;
  @Input() destination:any;
  @Input() originPlaceId:any;
  @Input() destinationPlaceId:any;
  @Input() waypoints:any;
  @Input() directionsDisplay:any;
  @Input() estimatedTime : any;
  @Input() estimatedDistance : any;
  @Input() detailRoute: any;
  @Input() routeHtml: any;
  constructor (private gmapsApi: GoogleMapsAPIWrapper) {
    this.routeHtml = "";
  }
  updateDirections(){
    this.gmapsApi.getNativeMap().then(map => {
      if(!this.originPlaceId || !this.destinationPlaceId ){
        return;
      }
      
      var directionsService = new google.maps.DirectionsService;
      var me = this;
      var latLngA = new google.maps.LatLng({lat: this.origin.latitude, lng: this.origin.longitude });
      var latLngB = new google.maps.LatLng({lat: this.destination.latitude, lng: this.destination.longitude });
      this.directionsDisplay.setMap(map);
      this.directionsDisplay.setOptions({
        polylineOptions: {
                    strokeWeight: 7,
                    strokeOpacity: 0.8,
                    strokeColor:  '#FFAA00' 
                }
        });
      this.directionsDisplay.setDirections({routes: []});
      directionsService.route({
          origin: {placeId : this.originPlaceId },
          destination: {placeId : this.destinationPlaceId },
          avoidHighways: true,
          travelMode: google.maps.DirectionsTravelMode.DRIVING
          //travelMode: 'DRIVING'
        }, function(response: any, status: any) {
            if (status === 'OK') {
              me.directionsDisplay.setDirections(response);
              map.setZoom(11);
              //console.log(me.getcomputeDistance (latLngA, latLngB));
              var point = response.routes[ 0 ].legs[ 0 ];
              me.detailRoute = point.steps;
              me.estimatedTime = point.duration.text ;
              me.estimatedDistance = point.distance.text;
              me.makeRouteHtml();
              // console.log(me.estimatedTime);
              // console.log( 'Estimated travel time: ' + point.duration.text + ' (' + point.distance.text + ')' );

            } else {
              console.log('Directions request failed due to ' + status);
            }
      });
    });
 
  }
  makeRouteHtml() {
    let deetailHtml = "";
    for (let i=0;i<this.detailRoute.length;i++){
      let maneuver = "";
      let mancon = "";  
      if (this.detailRoute[i]["maneuver"] == ""){
        maneuver = "<div jstcache='30' class='adp-maneuver' jsan='7.adp-maneuver'></div>";
        mancon = "<div jstcache='29' class='adp-stepicon' style='display: none;'>" + maneuver + "</div>";
      }
      else{
        maneuver = "<div jstcache='30' class='adp-" + this.detailRoute[i]["maneuver"] + " adp-maneuver' jsan='7.adp-" + this.detailRoute[i]["maneuver"] + ",7.adp-maneuver'></div>";
        mancon = "<div jstcache='29' class='adp-stepicon' >" + maneuver + "</div>";
      }
      deetailHtml += "<tr data-leg-index='0' data-step-index='" + i + "' jstcache='28' jsaction='directionsPanel.selectLegAndStep' jsinstance='0'>\
            <td class='adp-substep'>"
                + mancon + 
            "</td>\
            <td jstcache='31' class='adp-substep' jsan='7.adp-substep'>" + (i+1) + ".</td>\
            <td jstcache='32' class='adp-substep'>\
                " + this.detailRoute[i]["instructions"] + "\
            </td>\
            <td class='adp-substep'>\
                <div jstcache='33' class='adp-distance' jsan='7.adp-distance'>" + this.detailRoute[i]["distance"]["text"] + "</div>\
            </td>\
        </tr>"
    }
    this.routeHtml = " <div id='directions' style='direction: ltr;'>\
        <div jstcache='0'>\
            <div jstcache='124' class='adp'>\
                <div jstcache='19' class='adp-warnbox' style='display:none'>\
                    <div class='warnbox-c2'></div>\
                    <div class='warnbox-c1'></div>\
                    <div jstcache='20' class='warnbox-content' jsan='7.warnbox-content'></div>\
                    <div class='warnbox-c1'></div>\
                    <div class='warnbox-c2'></div>\
                </div>\
                <div data-leg-index='0' jsaction='directionsPanel.selectLeg'>\
                    <table class='adp-placemark'>\
                        <tbody>\
                            <tr>\
                                <td>\
                                  <img jstcache='21' src='https://mts.googleapis.com/maps/vt/icon/name=icons/spotlight/spotlight-waypoint-a.png&amp;text=A&amp;psize=16&amp;font=fonts/Roboto-Regular.ttf&amp;color=ff333333&amp;ax=44&amp;ay=48&amp;scale=1' class='adp-marker'>\
                                </td>\
                                <td jstcache='22' class='adp-text' jsan='7.adp-text'>" + this.origin.address + "</td>\
                            </tr>\
                        </tbody>\
                    </table>\
                </div>\
                <div jstcache='23' jsinstance='*0'>\
                    <div class='adp-summary'>\
                      <span jstcache='24'>" + this.estimatedDistance + "</span>\
                      <span jstcache='25'>. </span>\
                      <span jstcache='26'>About \
                        <span jstcache='50'>" + this.estimatedTime + "</span>\
                      </span> <span jstcache='27' style='display:none'></span></div>\
                    <div>\
                        <table class='adp-directions'>\
                            <tbody>\
                                " + deetailHtml + "\
                            </tbody>\
                        </table>\
                    </div>\
                    <div data-leg-index='1' jstcache='34' jsaction='directionsPanel.selectLeg'>\
                        <table class='adp-placemark'>\
                            <tbody>\
                                <tr>\
                                    <td><img jstcache='35' src='https://mts.googleapis.com/maps/vt/icon/name=icons/spotlight/spotlight-waypoint-b.png&amp;text=B&amp;psize=16&amp;font=fonts/Roboto-Regular.ttf&amp;color=ff333333&amp;ax=44&amp;ay=48&amp;scale=1' class='adp-marker'></td>\
                                    <td jstcache='36' class='adp-text' jsan='7.adp-text'>" + this.destination.address + "</td>\
                                </tr>\
                            </tbody>\
                        </table>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
    ";
  }
  private getcomputeDistance(latLngA: any , latLngB: any ) 
  {
    return (google.maps.geometry.spherical.computeDistanceBetween(latLngA, latLngB) / 1000).toFixed(2);
  }
}