$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        alert(season);

/////////////SPRING/////////////////////////////
        if(season == 'Spring'){
        $("html").css("background-color", "#2B7129");
        $("#wear").attr("src","images/spring-wear.jpg");
        $("#logo").attr("src","images/spring.gif");
        $("header h3").text("jump into spring")
    }
/////////////SUMMER//////////////////////////////
        if(season == 'Summer'){
        $("html").css("background-color", "#EBA52B");
        $("#wear").attr("src","images/summer-wear.jpg");
        $("#logo").attr("src","images/summer.gif");
        $("header h3").text("jump into summer")
    }
//////////////FALL//////////////////////////////////
        if(season == 'Fall'){
        $("html").css("background-color", "#A81124");
        $("#wear").attr("src","images/fall-wear.jpg");
        $("#logo").attr("src","images/fall.gif");
        $("header h3").text("jump into fall")
    }
///////////////////////WINTER////////////////////////////
    if(season == 'Winter'){
    $("html").css("background-color", "#005393");
    $("#wear").attr("src","images/winter-wear.jpg");
    $("#logo").attr("src","images/winter.gif");
    $("header h3").text("jump into winter")
}
/////////////////////////DEFUALT/////////////////////
    if(season == 'Default'){
    $("html").css("background-color", "#000000");
    $("#wear").attr("src","images/default-wear.jpg")
    $("#logo").attr("src","images/four-seasons.gif")
    $("header h3").text("jump into Default")
    }
    });
});