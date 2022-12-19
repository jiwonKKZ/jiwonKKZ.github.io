$(document).ready(function(){

    var mask_w = $('.img_con').width();
    var click_num = 0;

    $('#right').click(function(){

        $('#img_wrap').animate({
            left: -mask_w*2,
        },1000,function(){
            $('#img_wrap').css({
                left: -mask_w,
            }).find('.img_con').first().appendTo('#img_wrap');
        });

        click_num++;

        if(click_num > 5){
            click_num = 0;
        }

        $('.img_con').animate({
            left: -mask_w * click_num,
        });

        $('#circle_wrap .circle').removeClass('active');
        $('#circle_wrap .circle').eq(click_num).addClass('active');

    });

    $('#left').click(function(){
        $('#img_wrap').animate({
            left: 0,
        },1000,function(){
            $('#img_wrap').css({
                left: -mask_w,
            }).find('.img_con').last().prependTo('#img_wrap');
        });

        click_num--;

        if(click_num < 0){
            click_num = 5;
        }

        $('.img_con').animate({
            left: -1200 * click_num,
        });

        $('#circle_wrap .circle').removeClass('active');
        $('#circle_wrap .circle').eq(click_num).addClass('active');

    });

    setInterval(function(){
        $('#right').trigger('click');
    },10000);

    // $('#circle_wrap .circle').each(function(index){
    //     $(this).attr('data-index',index);
    // });

    // $('#circle_wrap .circle').click(function(){

    //     i=$(this).attr('data-index');

    //     $('#img_wrap').animate({
    //         left: -mask_w * i,
    //     });

    // });

    // $('#circle_wrap .circle').each(function(index){
    //     $(this).attr('data-index',index);      
    // });

    // $('#circle_wrap .circle').click(function(){

    //     i=$(this).attr('data-index');

    //     $('#img_wrap').animate({
    //         left: -mask_w*i,
    //     });

    // $('#circle_wrap .circle').removeClass('active');
    // $('#circle_wrap .circle').eq(i).addClass('active');

    // });

}); //end