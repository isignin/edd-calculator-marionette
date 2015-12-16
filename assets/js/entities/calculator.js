EddApp.module("Entities",function(Entities,EddApp, Backbone,Marionette,$,_){
  	Entities.Calculator = Backbone.Model.extend({});
	
	Entities.CalculatorCollection = Backbone.Collection.extend({
	    model: Entities.Calculator
	});
	
	var calculator = new Entities.Calculator(
		{
		current_date: "", 
		lmp_date: "",
		us_date: "",
		ga_us_weeks: "",
		ga_us_days: "", 
		randomize_date: "",
		edd_lmp: "",
		edd_us: "",
		edd_projected: "",
		ga_lmp: "", 
		ga_us: "",
		ga_us_proj: "",
		ga_final: "",
		lmp_us: "",
		edd_lmp_only: ""
	    }
	);
});