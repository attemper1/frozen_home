//#gnb
$(function(){
    $(".toggle").on("click",function(){
        $("#gnb").addClass("show");
    });
});
$(function(){
    $(".close").on("click",function(){
        $("#gnb").removeClass("show");
    });
});
//#gallery
$(function(){
    $("#gallery ul.thumb li").on("click",function(){
        let getUrl=$(this).find("img").attr("src");
        console.log(getUrl);
        $("#gallery figure>img").attr("src",getUrl);
    });
});