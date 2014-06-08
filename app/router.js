define(['jquery','underscore','backbone','handlebars'], 
function ($,_,Backbone,Handlebars){
	var AppRouter = Backbone.Router.extend({
		initialize : function(){			
			Backbone.history.start();
		},
		routes:{
			'':'home'

		},
		'home' : function(){
	
			

		}
	});
	
	return AppRouter;
});