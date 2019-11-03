// pada saat di klik link
$('.page-scroll').on('click', function (e) {

    // ambil isi dari href
    var tujuan = $(this).attr('href');
    // tanggkap elemen dari clas
    var elementujuan = $(tujuan);

    // animasi scrol
    $('html, body').animate({
        scrollTop: elementujuan.offset().top - 50
    }, 1500, 'easeInOutExpo');

    //buka web jquery easing gsgd untuk cari animasi scrol

    e.preventDefault();

});




//membuat efek paralax
$(window).scroll(function () {
    var wscroll = $(this).scrollTop();

    $('.jumbotron img ').css({
        'transform': 'translate(0px, ' + wscroll / 4 + '%)'
    }); //javascrip tolong carikan img yang ada di dalam jumbotron,lalu ubah css transform dengan scroltop

    $('.jumbotron h1 ').css({
        'transform': 'translate(0px, ' + wscroll / 2 + '%)'
    });


    $('.jumbotron p ').css({
        'transform': 'translate(0px, ' + wscroll / 1.2 + '%)'
    });

});