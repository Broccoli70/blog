$( ()=> {

  let counter = 0;

  $("#menu").on('click', ()=> {

    if(counter == 0) {
        $("#open").css({'display':'flex', })
        counter++;
    } else {
        $("#open").css({'display': 'none',})
        counter = 0;
    }

  })

  $(document).on('click', (e)=> {
    if(e.pageY < $('.menu').offset().top || e.pageY > $('.menu').height()
       +$('.menu').offset().top && e.pageY < $('.menu_open').offset().top ||
       e.pageY > $('.menu_open').height()
       +$('.menu_open').offset().top)  {

       counter=0;
       $("#open").css({'display': 'none',})
    }

    if(e.pageY > $('.menu').offset().top && e.pageY < $('.menu').height()
       +$('.menu').offset().top && e.pageX > $(".menu").offset().left
       +$(".menu").width()) {
       counter=0;
       $("#open").css({'display': 'none',})

    }

  })






});
