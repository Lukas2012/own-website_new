$(function() {




    var page; // the id of our page to open
    var fixHeight; // fixing the height animation problem needs some calculation



     $("li").on('click','a.pager:not(.selected)', function(event){
        event.preventDefault(); // prevent default events from being passed

        // find out where we want the magic to happen
        page = $(this).attr('href'); // this will get the id of our element
        //  we need to calculate the height of our content.
        // we wrapped our content with an extra div so we can now get it's height
        fixHeight =  $(page).find('.fix-height').outerHeight() + 60; // the height of our inner content (respecting the padding)

        $('.content').css('height', ""); // reset all contents inline height style
        $('.selected').removeClass('selected'); // remove all selected classes

        $(page).addClass('selected').css('height', fixHeight);// now we can add the selected class to page and set it's height

        // changing the unselected elements appearance
        $('#header-navigation li').addClass('trans'); // add some class to handle the unselected navigation elements
        $(this).addClass('selected').parent().removeClass('trans'); // this link should be selected so let's add the class and remove the trans class
    });
    $("li").on('click','a.pager.selected', function(event){
        $('.content').css('height', ""); // reset all contents inline height style
        event.preventDefault(); // prevent default events from being passed
        $('.selected').removeClass('selected'); // we want to remove selections if we click a selected li
    });

   // some pages allow to extend the view
    $("a.show-hide").click(function(){
        $(this).parent().toggleClass('hide'); // let's toggle the class to allow resizing the view
        fixHeight =  $(page).find('.fix-height').outerHeight() + 60; // the height of our inner content (respecting the padding)
        $(page).css('height', fixHeight); // now we  can add the new height to our page
    });






});
