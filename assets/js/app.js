var EddApp = new Marionette.Application();
  
  EddApp.addRegions({
	  headerRegion: "#header-region",
	  iconRegion: "#menu-icons",
	  inputRegion: "#input-box",
	  resultRegion: "#calc-result"
  });

  EddApp.HeaderView = Marionette.ItemView.extend({
	      template: "#header-template"
	  });
	  
   EddApp.IconsView = Marionette.ItemView.extend({
	      template: "#menuIcons-template"
	  });
	  
	  EddApp.InputsView = Marionette.ItemView.extend({
	      template: "#inputs-template"
	  });
	  
	  EddApp.ResultsView = Marionette.ItemView.extend({
	      template: "#results-template"
	  });
	
	EddApp.on("initialize:after", function(){ 
		  var headerView = new EddApp.HeaderView(); 
		  var iconsView = new EddApp.IconsView();
		  var inputsView = new EddApp.InputsView();
		  var resultsView = new EddApp.ResultsView();

		  EddApp.headerRegion.show(headerView);
		  EddApp.iconRegion.show(iconsView);
		  EddApp.inputRegion.show(inputsView);
		  EddApp.resultRegion.show(resultsView);
		var defLang = new EddApp.Entities.Language();
		console.log(defLang.en);
	    });
	