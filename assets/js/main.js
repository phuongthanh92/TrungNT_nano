jQuery(function(){
	jQuery('.menu').height('40');
	jQuery('#control_toogle').click(function(){
		jQuery('.menu-toogle').slideToggle('fast');
	});
	
	jQuery(window).resize(function() {
    	applyResponsiveMenu();
    })

});

jQuery(window).load(function() {
	applyResponsiveMenu(); // when the window is first loaded, do the test
});

function applyResponsiveMenu(){
	 jQuery('.menu').show();
	 if( jQuery(window).width() >= 1000 ) {
		jQuery('.menu').show();
		jQuery('.menu-toogle').hide();
		jQuery('#control_toogle').hide();
		jQuery('.top3').hide();	
		jQuery('.top2 .span3').show();
		jQuery('.top2 .menu_product').removeClass('span12').addClass('span9');
		jQuery('.menu-toogle').html('');
		jQuery('.top .top2 form').show();
		
	 } /*else if( jQuery(window).width() >= 980 ){
		jQuery('.menu').show();
		jQuery('.menu-toogle').hide();
		jQuery('#control_toogle').hide();
		jQuery('.top2 .span3').hide();
		jQuery('.top2 .menu_product').removeClass('span9').addClass('span12');	
		jQuery('.top3').show();
		jQuery('.menu-toogle').html(jQuery('.menu').html());
	 } */else{
		jQuery('#control_toogle').show();
		jQuery('.menu').hide();
		jQuery('.menu-toogle').hide();
		jQuery('.top3').show();	
		jQuery('.top2 .span3').hide();
		jQuery('.top2 .menu_product').removeClass('span9').addClass('span12');		
		jQuery('.menu-toogle').html(jQuery('.menu').html());
	 }
	 
	 if( jQuery(window).width() <= 740 ){
		jQuery('.menu_select_head').html('');
		jQuery('.menu_head').hide();
		jQuery('.menu_head li a').each(function(index, value){
			jQuery('.menu_select_head').append('<option value="'+value.href+'">'+value.innerHTML+'</option>');
		});
		jQuery('.menu_select_head').show();
		jQuery('.menu_select_head').change(function(){
			window.location = jQuery(this).val()
		});
	 } else{
		jQuery('.menu_select_head').html('');
		jQuery('.menu_select_head').hide('');
		jQuery('.menu_head').show();
		
	 }
	 
}