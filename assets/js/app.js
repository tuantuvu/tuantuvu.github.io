/*** Format Datepicker
$.fn.datepicker.dates['vi'] = {
    days: ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 6", "Thứ 5", "Thứ 6", "Thứ 7"],
    daysShort: ["Ch", "Ha", "Ba", "Tu", "Na", "Sa", "Ba"],
    daysMin: ["C", "H", "B", "T", "N", "S", "B"],
    months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
    monthsShort: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"],
    today: "Today",
    clear: "Clear",
    format: "dd/mm/yyyy",
    titleFormat: "MM yyyy",
    weekStart: 0
}; ***/

! function($) {
    "use strict";

    function sideNav() {
        $(".side-nav .side-nav-menu li a").on("click", function(e) {
            $(this).parent().hasClass("open") ? $(this).parent().children(".dropdown-menu").slideUp(200, function() {
                $(this).parent().removeClass("open")
            }) : ($(this).parent().parent().children("li.open").children(".dropdown-menu").slideUp(200), $(this).parent().parent().children("li.open").children("a").removeClass("open"), $(this).parent().parent().children("li.open").removeClass("open"), $(this).parent().children(".dropdown-menu").slideDown(200, function() {
                $(this).parent().addClass("open")
            }))
        })
    }

    function sideNavToggle() {
        var count = 0;
        $(".side-nav-toggle").on("click", function(e) {
            count++;
            $(".app").toggleClass("is-collapsed"), e.preventDefault();
            if (count % 2 != 0) {
                $(".side-nav-logo").hide();
            } else {
                $(".side-nav-logo").show();
            }

            /*---- Hover Nav to Show Header App ----*/
            $(".side-nav").hover(function() {
                count++;
                if (count % 2 != 0) {
                    $(".side-nav-logo").hide();
                } else {
                    $(".side-nav-logo").show();
                }
            })
        })
    }

    /* function sideNavFooter() {
        $(".side-nav-toggle").on("click", function (e) {
            if ($("*").width() <= 1440) {
                if ($(".app").hasClass("is-collapsed") == false) {
                    $("#footer_sidenav").css("display", "none");
                } else {
                    $("#footer_sidenav").css("display", "block");
                }
            }

            if ($("*").width() > 1440) {
                if ($(".app").hasClass("is-collapsed") == false) {
                    $("#footer_sidenav").css("display", "block");
                } else {
                    $("#footer_sidenav").css("display", "none");
                }
            }
        })
    } */

    function showULuser() {
        $(".user-drd").on("click", function(e) {
            $(".user-profile").toggleClass("show"), e.preventDefault()
            $(".user-drd-menu").toggleClass("show"), e.preventDefault()
        })
    }

    function sidePanelToggle() {
        $(".side-panel-toggle").on("click", function(e) {
            $(".side-panel").toggleClass("side-panel-open"), e.preventDefault()
        })
    }

    function chatToggle() {
        $(".chat-toggle").on("click", function(e) {
            $(".chat").toggleClass("open"), e.preventDefault()
        })
    }

    function todoToggle() {
        $(".todo-toggle").on("click", function(e) {
            $(".todo-wrapper").toggleClass("open"), e.preventDefault()
        })
    }

    function searchToggle() {
        $(".search-toggle").on("click", function(e) {
            /* if ($("*").width() < 767) { */
            $(".search-box, .search-input").toggleClass("active"),
                $(".search-input input").focus(), e.preventDefault()
                /* } */
        })
    }

    function advanceSearch() {
        $(".search-input input").on("keyup", function() {
            $(this).val().length > 0 ? $(".advanced-search").addClass("active") : $(".advanced-search").removeClass("active"), $(".serach-text-bind").html($(this).val())
        })
    }

    function themeConfig() {
        $(".theme-toggle, .config-close").on("click", function(e) {
            $(".theme-configurator").toggleClass("theme-config-open"), e.preventDefault()
        })
    }

    /* function perfectSB() {
        $(".scrollable").perfectScrollbar()
    } */

    function cardPortletCtrl() {
        $("[data-toggle=card-refresh]").on("click", function(e) {
            var cardRefreshSelector = $(this).parents(".card");
            cardRefreshSelector.addClass("card-refresh"), window.setTimeout(function() {
                cardRefreshSelector.removeClass("card-refresh")
            }, 2e3), e.preventDefault(), e.stopPropagation()
        }), $("[data-toggle=card-delete]").on("click", function(e) {
            var cardDeleteSelector = $(this).parents(".card");
            cardDeleteSelector.addClass("animated zoomOut"), cardDeleteSelector.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
                cardDeleteSelector.remove()
            }), e.preventDefault(), e.stopPropagation()
        })
    }

    function themeColorConfig() {
        $(".header-default input").change(function() {
            $(".app").removeClass("header-primary header-info header-success header-danger header-dark")
        }), $(".header-info input").change(function() {
            $(".app").addClass("header-info"), $(".app").removeClass("header-primary header-success header-danger header-dark")
        }), $(".header-primary input").change(function() {
            $(".app").addClass("header-primary"), $(".app").removeClass("header-info header-success header-danger header-dark")
        }), $(".header-success input").change(function() {
            $(".app").addClass("header-success"), $(".app").removeClass("header-info header-primary header-danger header-dark")
        }), $(".header-danger input").change(function() {
            $(".app").addClass("header-danger"), $(".app").removeClass("header-info header-primary header-success header-dark")
        }), $(".header-dark input").change(function() {
            $(".app").addClass("header-dark"), $(".app").removeClass("header-info header-primary header-success header-danger")
        }), $(".theme-colors.side-nav-dark input").change(function() {
            $(".app").addClass("side-nav-dark"), $(".app").removeClass("side-nav-default")
        }), $(".theme-colors.sidenav-default input").change(function() {
            $(".app").addClass("side-nav-default"), $(".app").removeClass("side-nav-dark")
        }), $("#rtl-toogle").on("click", function(e) {
            $(".app").toggleClass("rtl"), e.preventDefault()
        })
    }

    ! function() {
        sideNav(), sideNavToggle(), /* sideNavFooter(),*/ sidePanelToggle(),
            chatToggle(), todoToggle(), searchToggle(), advanceSearch(),
            themeConfig(), /* perfectSB(), */ cardPortletCtrl(), themeColorConfig(), showULuser()
    }()
}(jQuery);
