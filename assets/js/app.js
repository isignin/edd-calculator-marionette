var EddCalculator = new Marionette.Application();

EddCalculator.addRegions({
  headerRegion: "#header-region",
  mainRegion: "#main-region",
  inputsRegion: "#input_box",
  resultRegion: "#calc_result",		
  dialogRegion: Marionette.Region.Dialog.extend({
    el: "#dialog-region"
  })
});

EddCalculator.navigate = function(route,  options){
  options || (options = {});
  Backbone.history.navigate(route, options);
};

EddCalculator.getCurrentRoute = function(){
  return Backbone.history.fragment
};

EddCalculator.on("initialize:after", function(){
  if(Backbone.history){
    Backbone.history.start();
/*
    if(this.getCurrentRoute() === ""){
      ContactManager.trigger("contacts:list");
    }
*/	
  }
});