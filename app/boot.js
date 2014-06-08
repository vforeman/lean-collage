require.config({
	paths:{
		jquery : '/vendor/jquery-2.1.1',
		underscore : '/vendor/underscore-1.6.0',
		backbone : '/vendor/backbone-1.1.2',
		handlebars : '/vendor/handlebars-1.3.0',
		text : '/vendor/require-text-2.0.10',
		bootstrap : '/vendor/bootstrap-3.1.1'
	},
	shim: {     
	    jquery: {exports:'$'},
	    underscore: {exports:'_'},
	    backbone: {
	    	deps: ['jquery','underscore'],
	    	exports:'Backbone'},
	    handlebars: {exports: 'Handlebars'},
	    bootstrap: {
	    	deps: ['jquery'],
	    	exports: 'BootStrap'
	    }
	} 
});

require([
// Load our ten module and pass it to our definition function
  'leancollage'
  
],function (LeanCollage){
  
  LeanCollage.initialize();
  
}); 