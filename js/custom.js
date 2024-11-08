$(function () {


    const tl = gsap.timeline();

    tl


    $('#content').fullpage({
        anchors: ['intro', 'pf01', 'pf02', 'pf03', 'pf04', 'pf05', 'profile'],
        onLeave: function (idx, nidx, dir) {
            console.log(idx, nidx, dir);
            $('#header .gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            $('.section').eq(nidx - 1).addClass('on').siblings().removeClass('on');

            if (nidx == 1) {
                tl.restart();
            }

            if (nidx == 1) {
                $('#header .gnb').removeClass('on')
            } else {
                $('#header .gnb').addClass('on')
            }
        }
    });

    $('#header .menu').on('click', function () {
        $(this).toggleClass('on');
        $('#header .cover').toggleClass('on');
    });


    $('#header .cover a').on('click', function () {
        $('#header .cover').removeClass('on');
        $('#header .menu').removeClass('on');
    });


    $('#header .cover').on('wheel', function (e) {
        e.stopPropagation();
    });

});

