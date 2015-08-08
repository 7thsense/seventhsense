"use strict";

(function ($) {

    var Sense = Sense || {
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
        },

        /**
        * Highlight our navigation based on url
        **/
        setNavigation: function() {
        var path = window.location.pathname;
            path = path.replace(/\/$/, "");
            path = decodeURIComponent(path);

            $(".nav a").each(function () {
                var href = $(this).attr('href');
                if (path.substring(0, href.length) === href) {
                    $(this).closest('li').addClass('active');
                }
            });   
        }
    };

    $(document).ready(function () {

        Sense.setNavigation();

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
            Sense.submitForm();
        });

        /* Start sticky header */
        $(window).load(function () {
            $(".sticky").sticky({
                topSpacing: 0,
                responsiveWidth: true,
                getWidthFrom: ".navbar-sticky-wrapper"
            });
        });

        /* Parallax */
        $(window).stellar({
            horizontalScrolling: false,
            responsive: true
        });

    });

    /* Closes nav menu on click */
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });

})(jQuery);


