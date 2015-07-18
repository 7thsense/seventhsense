"use strict";

(function ($) {

    var Sense = Sense || {};

    Sense.Newsletter = Sense.Newsletter || {
        /**
        * Post our form
        * Remove the newsletter form from the DOM
        * Show thank you message
        **/
        submitForm: function () {
            var $form = $('#newsletterForm'),
                emailAddress = $form.find('input[name="cm-gtuji-gtuji"]').val(),
                url = $form.attr("action"),
                postForm = $.post(url, {'cm-gtuji-gtuji': emailAddress});

            postForm.done(function () {
                $('#newsletterForm').remove();
                $('#newsletterThankYou').removeClass('dn');
            });
        }
    };

    $(document).ready(function () {

        /* Clear newsletter default text */
        $('#fieldEmail').focus(function(){
            $(this).attr("placeholder", "");
        });

        $('#fieldEmail').blur(function(){
            $(this).attr("placeholder", "Enter email to subscribe");
        });
 
        /* Newsletter submission handler */
        $("#newsletterForm").submit(function (event) {
            /* Stop standard form submission */
            event.preventDefault();
            Sense.Newsletter.submitForm();
        });

    });

})(jQuery);
