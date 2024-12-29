// Запрет на копирование текста на сайте
document.ondragstart = noselect;
function noselect() {return false;}

// ***************************************************

$(document).ready(function(){
    $(".open-form").on("click", function() {
        $(".popup").addClass("active");
        $("body").addClass("active");
    });
    $(".popup__background, .x-cnt").on("click", function() {
        $(".popup").removeClass("active");
        $("body").removeClass("active");
    });

    $('.accordion__top').click(function() {
        $('.accordion__top').not(this).removeClass('active').next('.accordion__bottom').slideUp();
        $(this).toggleClass('active');
        $(this).next('.accordion__bottom').slideToggle(300, "swing");
    });

    $('.links__cnt').hover(
      function() {
        $(this).find('.nav-dropdown').stop(true, true).slideDown(200, "swing");
      },
      function() {
        $(this).find('.nav-dropdown').stop(true, true).slideUp(200, "swing");
      }
    );
    $('.index__link').hover(
      function() {
        $(this).find('.index__icn').stop(true, true).css('opacity', 1);
      },
      function() {
        $(this).find('.index__icn').stop(true, true).css('opacity', 0);
      }
    );
    $('.nav__burger').click(function() {
      $('.burger').slideToggle(300, "swing");
      $("body").toggleClass("active");
    });  
});
