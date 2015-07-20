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

        /* Start sticky header */
        $(window).load(function () {
            $(".sticky").sticky({
                topSpacing: 0
            });
        });

        /* Parallax */
        $(window).stellar({
            horizontalScrolling: false,
            responsive: true
        });

    });

})(jQuery);


//parallax
$(document).ready(function () {
    $(window).stellar({
        horizontalScrolling: false,
        responsive: true/*,
         scrollProperty: 'scroll',
         parallaxElements: false,
         horizontalScrolling: false,
         horizontalOffset: 0,
         verticalOffset: 0*/
    });
});