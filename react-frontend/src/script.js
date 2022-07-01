
    $(document).ready(function(){
        $(document).on('click','ul li a',function(){
            $('li').removeClass("active_dash");
            $(this).parent('li').addClass("active_dash");

            // without this below, the click on the link changes
            // the page, so the HTML gets reset
            return false ;
        })
    }) ;

