
export var GlobalVars = {
    AbsoluteURL : "http://www.selfcarepharmacist.com",
    RestApiURL: "api/call.php?",
    dosingWeight: 0,
    mapData : {
        latitude: 0,
        longitude: 0,
        zoom: 1,
        location: ""
    },
    mapPlaceId: "",
    address2: "",
    firstname: "",
    getAbsoluteURL : function() {
        return this.AbsoluteURL;
    },
    getApiURL: function() {
    	return this.RestApiURL;
    },
    getDosingWeight: function() {
    	return this.dosingWeight;
    },
    setDosingWeight: function(wei: number) {
    	this.dosingWeight = wei;
    },
    getMapData: function() {
        return this.mapData;
    },
    setMapData: function(data: any) {
        this.mapData = data;
    },
    getMapPlaceId: function() {
        return this.mapPlaceId;
    },
    setMapPlaceId: function(placeId: string) {
        this.mapPlaceId = placeId;
    },
    getAddress2: function() {
        return this.address2;
    },
    setAddress2: function(addr: string) {
        this.address2 = addr;
    },
    getFirstname: function() {
        return this.firstname;
    },
    setFirstname: function(name: string) {
        this.firstname = name;
    }
};