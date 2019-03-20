$("button").click(function(){
    var name= $(".name").val();
    var mcdonalds=parseInt($(".mcdonalds").val());
    var money=parseInt($(".money").val());
    var math= 31*mcdonalds* 52;
    var mathTwo= mcdonalds*52*31*money;
    console.log(name);
    console.log(mcdonalds);
    console.log(money);
    
    $(".results").append("<p> Hello " + name + " by 2050 you have visited McDonalds    " + math +" times and you have spent appromixately $"  + mathTwo+ "</p>");
});

$(".container").mouseenter(function(){ 
    $(".container").addClass("border-enter");
    });
$(".container").mouseleave(function(){ 
    $(".container").removeClass("border-enter");
    });
