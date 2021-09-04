/**
 * Initialise la navigation
 */
$.fn.accordeonMenu = function () {
	
	return this.each(function() {
	
		let menu = $(this);
		
		$(this).children("div").each(function(i, menuGroup) {
			
			let menuItem = $(menuGroup).children().first();
			let subMenu = $(menuGroup).children().last();
			
			menuItem.addClass('plugin_accordeon_menu_item');
			subMenu.addClass('plugin_accordeon_menu_subMenu');
			
			subMenu.hide();
			
			menuItem.click(() => {
				
				let wasSelected = menuItem.hasClass('plugin_accordeon_menu_selected');
				menu.find('.plugin_accordeon_menu_item').removeClass('plugin_accordeon_menu_selected');
				menu.find('.plugin_accordeon_menu_subMenu').hide();
				
				// S'il n''était pas déja selected, alors on l'ouvre'
				if (!wasSelected) {
					menuItem.addClass("plugin_accordeon_menu_selected");
					subMenu.show();
				}
			});
		});
	});
	
}