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

    var radio_wrap = $(".minilast_form_radiogroup .radio_label");
    var user_gender_choise = $('input[name=gender]');
    var user_name = $("#user_name");
    var user_email = $("#user_email");
    var user_pass = $("#user_password");
    var user_accepted_rules = $("#user_accepted_rules");
//    $('.registration-form').change(function () {
//        $([user_email, user_name, user_pass, user_gender_choise, user_accepted_rules]).each(function(){
//           var errors = 0;
//         if( !$(this).val() ) {  
//                errors++;
//         } 
//         console.log(errors);
//         if (errors = 0){
//             $("button[type=submit").prop("disabled", false);
//         }
//        });
//    });


    $('.registration-form').change(function () {

        if (user_gender_choise.is(":checked") && user_name.val().length > 0 && user_email.val().length > 0 && user_email.val().length > 0 && user_pass.length > 0) {
            $("button[type=submit").prop("disabled", false);
        }
    });


    $('.registration-form').on('submit', function (e) {
        $(this).closest('div').removeClass("input-error_after");


        $([user_email, user_name, user_pass]).each(function () {
            if (!$(this).val() && !$(this).is('input-error')) {
                $(this).addClass('input-error');
                $("button[type=submit").prop("disabled", true);
                $(this).closest('div').addClass("input-error_after");
                e.preventDefault();
            } else if (!user_gender_choise.is(":checked")) {
                e.preventDefault();
                $(".minilast_form_radiogroup .radio_label").addClass("input-error");
            } else if (!user_accepted_rules.is(":checked")) {
                e.preventDefault();
                 $(".user_accepted_rules_wrapper").addClass("after_test");
            } else {
                $(this).removeClass('input-error');
                // $("button[type=submit").prop("disabled", true);
                $(this).closest('div').removeClass("input-error_after");

                $(".input-error_after").on("click", function () {
                    $(this).children("input").focus();
                    console.log("clicked");
                });
            }
            if ($('input:radio[name=gender]').is(':checked')) {
                $(".minilast_form_radiogroup .radio_label").removeClass("input-error");
            }
            if ($('#user_accepted_rules').is(':checked')) {
                $(".user_accepted_rules_wrapper").removeClass("after_test");
            }
           
        });

        $('input:radio[name=gender]').click(function () {
            if ($(this).is(':checked')) {
                $(".minilast_form_radiogroup .radio_label").removeClass("input-error");
            }
        });
        $("#user_accepted_rules").click(function () {
            if ($(this).is(':checked')) {
                $(".user_accepted_rules_wrapper").removeClass("after_test");
            }
        });

//
//        if (!$('input[name=gender]').is(":checked")) {
//            $(".minilast_form_radiogroup .radio_label").addClass("input-error");
//        }
//        ;
//        if (!$("#user_accepted_rules").is(":checked")) {
//            $(".user_accepted_rules_wrapper").addClass("after_test");
//        }
    });
//        $(this).closest('div').removeClass("input-error_after");
//        if (user_gender_choise.length > 0 && user_name.val().length > 0 && user_email.val().length > 0 && user_pass.val().length > 0) {
//            e.preventDefault();
//            alert("DONE");
//        } else if (user_gender_choise.length == 0 && user_name.val().length == 0 && user_email.val().length == 0 && user_pass.val().length == 0) {
//            e.preventDefault();
//            $([user_email, user_name, user_pass, radio_wrap]).each(function () {
//                $(this).addClass('input-error');
//                //$("button[type=submit").prop("disabled", true);
//                $(this).closest('div').addClass("input-error_after");
//            });
//            $("button[type=submit").prop("disabled", false);
//        }
//    });
//    
//    $("input[name=gender]").on("click", function(){
//        radio_wrap.removeClass("input-error");
//    });


//        if ($('#user_accepted_rules').hasClass("input-error")) {
//            $('#user_accepted_rules').closest('label').addClass("after_test");
//        } else {
//            $('#user_accepted_rules').closest('label').removeClass("after_test");
//        }
//        ;
//        $(this).find('input[type="text"], input[type="password"], input[type="email"], input[type="checkbox"] ').each(function () {
//            if ($(this).val() == "") {
//                e.preventDefault();
//                $(this).addClass('input-error');
//                $(this).closest('div').addClass("input-error_after");
//                $('button[type="submit"]').attr("style", "background-color: #fff !important;color:#aaa9a9;")
//
//            } else {
//                $(this).removeClass('input-error');
//                $(this).closest('div').removeClass("input-error_after");
//            }
//        });




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
