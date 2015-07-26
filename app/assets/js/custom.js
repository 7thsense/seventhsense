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

        /* Add it back if we dont do anything after focus */
        $('#fieldEmail').blur(function(){
            $(this).attr("placeholder", "Enter email to subscribe");
        });
 
        /* Newsletter submission handler */
        $("#newsletterForm").submit(function (event) {
            /* Stop standard form submission */
            event.preventDefault();
            Sense.Newsletter.submitForm();
        });

        /* Start sticky header
        $(window).load(function () {
            $(".sticky").sticky({
                topSpacing: 0,
                responsiveWidth: true
            });
        });
        */

        /* Parallax */
        $(window).stellar({
            horizontalScrolling: false,
            responsive: true,
            getWidthFrom: "#navbar"
        });

    });

    /* Closes nav menu on click */
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });

})(jQuery);

