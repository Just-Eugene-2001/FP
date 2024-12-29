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

    // Обработчик отправки формы
    $("#requestForm").on("submit", function (e) {
        e.preventDefault(); // Предотвращаем стандартное поведение (закрытие формы)

        // Блокируем кнопку submit, чтобы предотвратить повторные клики
        const submitButton = $(this).find('button[type="submit"]');
        submitButton.prop("disabled", true); // Блокируем кнопку

        // Сбор данных из формы
        const formData = {
            surname: $("#requestForm input[name='surname']").val(),
            name: $("#requestForm input[name='name']").val(),
            // Такого в форме нет
            // middleName: $("#requestForm input[name='middleName']").val(),
            directionType: $("#requestForm input[name='direction']:checked").map(function () {
                return $(this).val();
            }).get(),
            email: $("#requestForm input[name='email']").val(),
            loginTg: $("#requestForm input[name='telegram']").val(),
            phoneNumber: $("#requestForm input[name='phone']").val()
        };

        // Логирование данных для проверки
        console.log(formData);

        // Отправка данных на сервер
        $.ajax({
            // TODO: Вставить свой url
            url: "https://localhost:8080",
            method: "POST",
            data: formData,
            success: function (response) {
                console.log("Данные отправлены успешно", response);
                // TODO: Ниже код просто закроет модалку, если запрос успешно отправлен, а так сделаете уведомление или что-то подобное
                // $(".popup").removeClass("active");
            },
            error: function (error) {
                console.error("Ошибка при отправке данных", error);
            },
            complete: function () {
                // Включаем кнопку обратно после завершения отправки (успех или ошибка)
                submitButton.prop("disabled", false);
            }
        });
    });
});
