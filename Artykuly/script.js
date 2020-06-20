$( ()=> {

  // let counter = 0;
  //
  // $("#flash").on('click', ()=> {
  //   if(counter == 0) {
  //       $("#flash_open").css({'display':'flex', })
  //       counter++;
  //   } else {
  //       $("#flash_open").css({'display': 'none',})
  //       counter = 0;
  //   }
  //
  // })

  $(document).on('scroll', ()=> {
    if ( $(document).scrollTop() >= 500 ) {
      $(".up_button").css({'opacity':'1'})
    } else if( $(document).scrollTop() <= 500 ) {
      $(".up_button").css({'opacity':'0'})
    }


  })

  // $(document).on('click', (e)=> {
  //   if(e.pageY < $('.menu').offset().top || e.pageY > $('.menu').height()
  //      +$('.menu').offset().top && e.pageY < $('.menu_open').offset().top ||
  //      e.pageY > $('.menu_open').height()
  //      +$('.menu_open').offset().top)  {
  //
  //      counter=0;
  //      $("#open").css({'display': 'none',})
  //   }
  //
  //   if(e.pageY > $('.menu').offset().top && e.pageY < $('.menu').height()
  //      +$('.menu').offset().top && e.pageX > $(".menu").offset().left
  //      +$(".menu").width()) {
  //      counter=0;
  //      $("#open").css({'display': 'none',})
  //
  //   }
  //
  // })




});
