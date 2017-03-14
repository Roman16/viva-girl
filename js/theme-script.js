jQuery(document).ready(function() {
    jQuery(window).resize(
        function(){
            if(!jQuery('body').hasClass('cherry-fixed-layout')) {
                jQuery('.full-width-block').width(jQuery(window).width());
                jQuery('.full-width-block').css({width: jQuery(window).width(), "margin-left": (jQuery(window).width()/-2), left: "50%", "position": "relative"});
            };
        }
    ).trigger('resize');

    jQuery('input[type="submit"], input[type="reset"]').each(function(){
        if(!jQuery(this).hasClass('adminbar-button') && !jQuery(this).hasClass('search-form_is')) {
            jQuery(this).wrap('<span class="input-btn btn"><span></span></span>').removeClass('btn').removeClass('btn-primary');
        };
    });

    jQuery(".sf-menu > li > a").each(function(){
        var btn_text = jQuery(this).text();
        jQuery(this).empty().append('<span data-hover="'+btn_text+'">'+btn_text+'</span>');
    });

    if(!jQuery('body').hasClass('cherry-fixed-layout')) {
        jQuery('body').addClass('cherry-full-layout')
    }

    jQuery('#content.span8').each(function(){
        if( jQuery(this).hasClass('left') ) {
            jQuery('#sidebar').addClass('left');
        }
    });

    jQuery('.cherry-single-carousel-container .cherry-single-carousel-item').each(function(){
        var $this = jQuery(this);
        var targetDate = $this.find('.date').text();

        jQuery(this).find('#showTime').dsCountDown({
            endDate: new Date(targetDate)
        });
    });
})