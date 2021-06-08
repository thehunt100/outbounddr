/* ---------------------------------------------
 Contact form
 --------------------------------------------- */
$(document).ready(function(){
    $("#submit_btn").click(function(){

        //get input field values
        var user_name = $('input[name=name]').val();
        var user_email = $('input[name=email]').val();
        var user_message = $('textarea[name=message]').val();
        var choice = $('input[name=choice]').val();

        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if (user_name == "") {
            $('input[name=name]').css('border-color', '#e41919');
            proceed = false;
        }
        if (user_email == "") {
            $('input[name=email]').css('border-color', '#e41919');
            proceed = false;
        }

        if (user_message == "") {
            $('textarea[name=message]').css('border-color', '#e41919');
        //    proceed = false;
        }

        //everything looks good! proceed...
        if (proceed) {
            //data to be sent to server
            post_data = {
                'name': user_name,
                'email': user_email,
                'message': user_message,
                'choice' : choice
            };


            var url = 'https://script.google.com/macros/s/AKfycbxk_Np2R_F1LlinTA33bAQPyg5XZn-rrs4M5xWC3lGRvts2kSX_/exec';
            var jqxhr = $.post(url, post_data, function(post_data) {
                    setTimeout(function() {
                        window.location.replace('/thank-you.html');
                    }, 500);
                })
                .fail(function(data) {
                    setTimeout(function() {
                        window.location.replace('/error.html');
                    }, 500);
                });


        }

        return false;
    });

    //reset previously set border colors and hide all message on .keyup()
    //$("#contact_form input, #contact_form textarea").keyup(function(){
    //    $("#contact_form input, #contact_form textarea").css('border-color', '');
    //    $("#result").slideUp();
    //});

});
