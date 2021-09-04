/**
 * Initialise la navigation
 */
$.fn.accordeonMenu = function () {
	
	return this.each(function() {
	
		let menu = $(this);
		
		// Each menu group
		$(this).children("div").each(function() {
			
			let menuGroup = $(this);
			
			let menuItem = menuGroup.children().first();
			let subMenu = menuGroup.children().last();
			
			menuGroup.addClass('plugin_accordeon_menu_group');
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
			
			// Each sub menu item
			subMenu.children("div").each(function() {
				
				let subMenuItem = $(this);
				subMenuItem.addClass('plugin_accordeon_menu_subMenuItem');
				
				subMenuItem.click(() => {
					menu.find('.plugin_accordeon_menu_subMenuItem').removeClass('plugin_accordeon_menu_selected');
					subMenuItem.addClass("plugin_accordeon_menu_selected");
				});
			});
		});
	});
	
}