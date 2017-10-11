$(function(){

    $menuBtn = $("#spanBtn");
    $menu = $("#menuWrapper");

    $menuBtn.on('click', function(){
        $menu.css("display", "block");
        $menu.css("z-index", "1");
        $("#main").css("z-index", "0");
    });

    // function slideMenu(){
    //     $slideMenu = $("#menuWrapper");
    //
    //     $slideMenu.add("id='slideIn'");
    //
    //
    // }

});
