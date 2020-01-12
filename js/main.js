$(document).ready(function(){
    $(".ham-burger").click(function(){
        $(".nav").toggleClass("open");
        $(this).toggleClass("active");
    });
    $(".accordian-container").click(function(){
        $(".accordian-container").children(".body").slideUp();
        $(".accordian-container").removeClass("active");
        $(".accordian-container").children(".head").children("span").removeClass("fa-angle-double-down").addClass("fa-angle-double-up");
        $(this).children(".body").slideDown();
        $(this).addClass("active");
        $(this).children(".head").children("span").removeClass("fa-angle-double-up").addClass("fa-angle-double-down");
    });
    $(".nav ul li a").click(function(event){
        if(this.hash!=="")
        {
            event.preventDefaulte();
            var hash=this.hash;
            $('html,body').animate({
                scrollTop:$(hash).offset().top},800,function(){
                    window.location.hash=hash;
            });
        }
    })
});


wow = new WOW(
    {
      animateClass: 'animated',
      offset:       0,
      
    }
  );
  wow.init();