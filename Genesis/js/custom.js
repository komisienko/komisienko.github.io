jQuery(document).ready(function () {
    $('.registration-form fieldset:first-child').fadeIn('slow');

    $('.registration-form input[type="text"], .registration-form input[type="password"], .registration-form input[type="email"], input[type="checkbox"]').on('focus', function () {
        $(this).removeClass('input-error');
        $(this).closest('div').removeClass("input-error_after");
    });

    // next step
    $('.registration-form .btn-next').on('click', function () {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;

        if (next_step) {
            parent_fieldset.fadeOut(400, function () {
                $(this).next().fadeIn();
            });
        }

    });


    // submit
    $('.registration-form').on('submit', function (e) {
        if ($('#user_accepted_rules').hasClass("input-error")) {
            $('#user_accepted_rules').closest('label').addClass("after_test");
        } else {
            $('#user_accepted_rules').closest('label').removeClass("after_test");
        }
        ;
        $(this).find('input[type="text"], input[type="password"], input[type="email"], input[type="checkbox"] ').each(function () {
            if ($(this).val() == "") {
                e.preventDefault();
                $(this).addClass('input-error');
                $(this).closest('div').addClass("input-error_after");
                $('button[type="submit"]').attr("style", "background-color: #fff !important;color:#aaa9a9;")

            } else {
                $(this).removeClass('input-error');
                $(this).closest('div').removeClass("input-error_after");
            }
        });



    });



    $('#second_slide .question_answers .btn-answer').on("click", function () {
        if ($(this).hasClass("selected_answer")) {
            return false;
        }
        $("#second_slide .question_answers .btn-answer").removeClass("selected_answer");
        $(this).addClass("selected_answer");

        $('#second_slide .btn-next').show();
        var secondslide_answer = $(this).data('secondslide_answer');
        var random_number = Math.floor(Math.random() * 101);

        switch (secondslide_answer) {
            case 1:
                $("#second_slide .selected_answer_tospan").text("A");
                $("#second_slide .how_many").text(random_number + "%");
                break;
            case 2:
                $("#second_slide .selected_answer_tospan").text("Б");
                $("#second_slide .how_many").text(random_number + "%");
                break;
            case 3:
                $("#second_slide .selected_answer_tospan").text("В");
                $("#second_slide .how_many").text(random_number + "%");
                break;
            default:
                alert('nothing to test');
        }
        $('#second_slide .left-part_afteranswer_wrap').show();
        var check_width = $("#second_slide .how_many").width();
        $("#second_slide .how_many_descr").width(check_width - 10);
    });
    $('#third_slide .question_answers .btn-answer').on("click", function () {
        if ($(this).hasClass("selected_answer")) {
            return false;
        }
        $("#third_slide .question_answers .btn-answer").removeClass("selected_answer");
        $(this).addClass("selected_answer");
        $('#third_slide .btn-next').show();
        var thirdslide_answer = $(this).data('thirdslide_answer');
        var random_number = (Math.random() * 101).toFixed(1).replace(".", ",");

        switch (thirdslide_answer) {
            case 1:
                $("#third_slide .selected_answer_tospan").text("A");
                $("#third_slide .how_many").text(random_number + "%");
                break;
            case 2:
                $("#third_slide .selected_answer_tospan").text("Б");
                $("#third_slide .how_many").text(random_number + "%");
                break;
            default:
                alert('nothing to test');
        }
        $('#third_slide .left-part_afteranswer_wrap').show();
        var check_width = $("#third_slide .how_many").width();
        $("#third_slide .how_many_descr").width(check_width - 10);
    });
});
//Вот тут реализазия если нужно запретить клик

//    $('#second_slide .question_answers .btn-answer').on("click", function () {
//        if ($('#second_slide .question_answers [class*="selected_answer"]').length ==1) {
////            $(this).off('click');
//        } else {
//            $(this).addClass("selected_answer");
//            $('#second_slide .btn-next').show();
//            var secondslide_answer = $(this).data('secondslide_answer');
//            var random_number = Math.floor(Math.random() * 101);
//            switch (secondslide_answer) {
//                case 1:
//                    $("#second_slide .selected_answer_tospan").text("A");
//                    $("#second_slide .how_many").text(random_number + "%");
//                    break;
//                case 2:
//                    $("#second_slide .selected_answer_tospan").text("Б");
//                    $("#second_slide .how_many").text(random_number + "%");
//                    break;
//                case 3:
//                    $("#second_slide .selected_answer_tospan").text("В");
//                    $("#second_slide .how_many").text(random_number + "%");
//                    break;
//                default:
//                    alert('nothing to test');
//            }
//            $('#second_slide .left-part_afteranswer_wrap').show();
//            var check_width = $("#second_slide .how_many").width();
//            $("#second_slide .how_many_descr").width(check_width - 10);
//        }
//    });
//    $('#third_slide .question_answers .btn-answer').on("click", function () {
//        if ($('#third_slide .question_answers [class*="selected_answer"]').length ==1) {
//            $(this).off('click');
//        } else {
//                     $(this).addClass("selected_answer");
//            $('#third_slide .btn-next').show();
//            var thirdslide_answer = $(this).data('thirdslide_answer');
//            var random_number = (Math.random() * 101).toFixed(1).replace(".", ",");
//           
//            switch (thirdslide_answer) {
//                case 1:
//                    $("#third_slide .selected_answer_tospan").text("A");
//                    $("#third_slide .how_many").text(random_number + "%");
//                    break;
//                case 2:
//                    $("#third_slide .selected_answer_tospan").text("Б");
//                    $("#third_slide .how_many").text(random_number + "%");
//                    break;
//                default:
//                    alert('nothing to test');
//            }
////                console.log(seconslide_answer);
//            $('#third_slide .left-part_afteranswer_wrap').show();
//            var check_width = $("#third_slide .how_many").width();
//            $("#third_slide .how_many_descr").width(check_width - 10);
//        }
//    });


  