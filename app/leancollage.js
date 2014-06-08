define(['jquery','underscore','backbone','handlebars','router'], 
function ($,_,Backbone,Handlebars,Router){
	var initialize = function(){
		//register template helper functions
		Handlebars.registerHelper('sidebar',function (icons){
			
		});

		this.router = new Router();
	}
	return {
		initialize:initialize
	};
});