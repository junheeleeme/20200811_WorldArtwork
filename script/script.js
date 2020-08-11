


$("#exitBtn").click(function(){

    $("#noticeModal").css("display", "none");


});



$("#post_1").click(function(){

    $("#noticeModal").css("display", "block");

});




$("#mainMenu>li").mouseover(function(){                                                                                                 $(this).children("ul").stop().fadeIn();
});

$("#mainMenu>li").mouseout(function(){                                                                                                  $(this).children("ul").stop().fadeOut();
});


$("#mainMenu").mouseover(function(){

    $("#promotionText").css("display", "none");

});

$("#mainMenu").mouseout(function(){

    $("#promotionText").css("display", "block");

});

//풀다운 네비게이션 끝


