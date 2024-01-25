$(".nav-link").click(function(e){
    let hrefEl=$(e.target).attr('href')
    let offset=$(hrefEl).offset().top
    $(e.target).addClass('change')
    $(".nav-link").not(e.target).removeClass('change')
    $("body,html").animate({scrollTop : offset} , {
        queue:false,
        duration:2500,
    })
})

$(".closebtn").click(function(){
    let width=$(".side-menu").outerWidth()
    $(".side").animate({left:`-${width}px`},1000)
})

$(".open").click(function(){
    let width=$(".side-menu").outerWidth()
    $(".side").animate({left:`0px`},1000)
})

$(".drive").click(function(e){
    $(e.target).next().toggle('d-none')
    $('.drive').not(e.target).next().css({'display':'none'})
})

$("#details").countdown('2024-5-3',function(e){
    $("#day").text(e.strftime('-%D'))
    $("#hour").text(e.strftime('%H'))
    $("#minute").text(e.strftime('%M'))
    $("#second").text(e.strftime('%S'))
})

$(".type").keydown(function(e){
    let counter=setInterval(function(){
        console.log(e.which);
        let count=parseInt($("#chars").text())
        if(count>0 ){
            if(e.which==8){
                $("#chars").text(count+1)
                clearInterval(counter)
            }
            else{
                $("#chars").text(count-1)
                clearInterval(counter)
            }
        }
        else{
            $("#chars").text('Your avaliavle character finished')
            clearInterval(counter)
        }
    },1000)
})


