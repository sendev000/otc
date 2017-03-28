
export var GlobalVars = {
    AbsoluteURL : "http://www.selfcarepharmacist.com",
    RestApiURL: "api/call.php?",
    getAbsoluteURL : function() {
        return this.AbsoluteURL;
    },
    getApiURL: function() {
    	return this.RestApiURL;
    }
};