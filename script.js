$(function() {
     $("li").on('click','a.pager:not(.selected)', function(event){
        event.preventDefault();
        $('.selected').removeClass('selected');
        $('#header-navigation li').addClass('trans');
        $(this).addClass('selected').parent().removeClass('trans');
        var page = $(this).attr('href');
        console.log('closed ' + page);
        $(page).addClass('selected');
    });
    $("li").on('click','a.pager.selected', function(event){
        event.preventDefault();
        $('.selected').removeClass('selected');
    });
});

$(function() {
   $("a.show-hide").click(function(){
    $(this).parent().toggleClass('hide');
   });
});
