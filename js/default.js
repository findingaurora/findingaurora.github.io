$(function() {
    pageInitModule.setWidth();
    pageInitModule.setSidebar();
})
$(window).resize(function() {
    pageInitModule.setWidth();
})


/*
 * init page when page load
 */
var pageInitModule = (function(mod) {

    mod.setWidth = function() {
        if ($(window).width() < 768) {
            $(".sidebar").css({ left: -220 });
            $(".all").css({ marginLeft: 0 });
        } else {
            $(".sidebar").css({ left: 0 });
            $(".all").css({ marginLeft: 220 });
        }
    };

    mod.setSidebar = function() {
        $('[data-target="sidebar"]').click(function() {
            var asideleft = $(".sidebar").offset().left;
            if (asideleft == 0) {
                $(".sidebar").animate({ left: -220 });
                $(".all").animate({ marginLeft: 0 });
            } else {
                $(".sidebar").animate({ left: 0 });
                $(".all").animate({ marginLeft: 220 });
            }
        });


        $(".has-sub>a").click(function() {
            $(this).parent().siblings().find(".sub-menu").slideUp();
            $(this).parent().find(".sub-menu").slideToggle();
        })
    }
    return mod;
})(window.pageInitModule || {});