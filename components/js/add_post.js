/**
 * Created by Lena on 25.07.2018.
 */
$(function () {
    $('a.new_post ').click(function () {
        $('div.' + $(this).attr("rel")).fadeIn(500);
        $('body').append("<div id='overlay'></div>");
         $('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
        return false;
    });
    $('a.close').click(function () {
        $(this).parent().fadeOut(100);
         $('#overlay').remove('#overlay');
        return false;
    });


});