
export var GlobalVars = {
    AbsoluteURL : "http://www.selfcarepharmacist.com",
    RestApiURL: "api/call.php?",
    dosingWeight: 0,
    mapData : {
        latitude: 0,
        longitude: 0,
        zoom: 1
    },
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
    }
};