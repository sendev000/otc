
export var GlobalVars = {
    AbsoluteURL : "http://www.selfcarepharmacist.com",
    RestApiURL: "api/call.php?",
    dosingWeight: 0,
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
    }
};