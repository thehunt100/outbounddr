function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
$(document)
  .ready(function () {
    //get input field values
    var user_email = getParameterByName('email');
    var proceed = true;
    if(user_email == "") {
      $('input[name=email]')
        .css('border-color', '#e41919');
      proceed = false;
    }
    if(proceed) {
      post_data = {
        'email': user_email,
        'choice': 'unsubscribe'
      };
      var url = 'https://script.google.com/macros/s/AKfycbxk_Np2R_F1LlinTA33bAQPyg5XZn-rrs4M5xWC3lGRvts2kSX_/exec';
      var jqxhr = $.post(url, post_data, function (post_data) {
          setTimeout(function () {
            window.location.replace('unsubscribe.html');
          }, 500);
        })
        .fail(function (data) {
          setTimeout(function () {
            window.location.replace('error.html');
          }, 500);
        });
    }
  });
