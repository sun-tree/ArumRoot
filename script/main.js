$(function(){
  $(".l-mainmenu > ul > li > a").each(function(){
    $(this).hover(
      function () {
        $(this).siblings("span")
        .velocity({
          opacity:1
        },{
          display: "block",
          queue: false,
          duration: 100
        })
        .velocity("callout.tada",{
          duration: 500,
          queue: false
        });

        $(this)
        .velocity("callout.swing",{
          duration: 300,
          queue: false
        })
      },
      function () {
        $(this).siblings("span").velocity({
          opacity: 0
        },{
          display: "none",
          duration: 500
        });
      }
    );

  });
})
