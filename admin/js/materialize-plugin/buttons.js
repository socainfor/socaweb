!function(t){t(document).ready(function(){t.fn.reverse=[].reverse,t(document).on("mouseenter.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle):not(.toolbar)",function(n){var a=t(this);o(a)}),t(document).on("mouseleave.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle):not(.toolbar)",function(o){var a=t(this);n(a)}),t(document).on("click.fabClickToggle",".fixed-action-btn.click-to-toggle > a",function(a){var i=t(this).parent();i.hasClass("active")?n(i):o(i)}),t(document).on("click.fabToolbar",".fixed-action-btn.toolbar > a",function(o){var n=t(this).parent();a(n)})}),t.fn.extend({openFAB:function(){o(t(this))},closeFAB:function(){n(t(this))},openToolbar:function(){a(t(this))},closeToolbar:function(){i(t(this))}});var o=function(o){var n=o;if(!1===n.hasClass("active")){var a,i;!0===n.hasClass("horizontal")?i=40:a=40,n.addClass("active"),n.find("ul .btn-floating").velocity({scaleY:".4",scaleX:".4",translateY:a+"px",translateX:i+"px"},{duration:0});var r=0;n.find("ul .btn-floating").reverse().each(function(){t(this).velocity({opacity:"1",scaleX:"1",scaleY:"1",translateY:"0",translateX:"0"},{duration:80,delay:r}),r+=40})}},n=function(t){var o,n,a=t;!0===a.hasClass("horizontal")?n=40:o=40,a.removeClass("active");a.find("ul .btn-floating").velocity("stop",!0),a.find("ul .btn-floating").velocity({opacity:"0",scaleX:".4",scaleY:".4",translateY:o+"px",translateX:n+"px"},{duration:80})},a=function(o){if("true"!==o.attr("data-open")){var n,a,r,s=window.innerWidth,e=window.innerHeight,c=o[0].getBoundingClientRect(),l=o.find("> a").first(),f=o.find("> ul").first(),d=t('<div class="fab-backdrop"></div>'),u=l.css("background-color");l.append(d),n=c.left-s/2+c.width/2,a=e-c.bottom,r=s/d.width(),o.attr("data-origin-bottom",c.bottom),o.attr("data-origin-left",c.left),o.attr("data-origin-width",c.width),o.addClass("active"),o.attr("data-open",!0),o.css({"text-align":"center",width:"100%",bottom:0,left:0,transform:"translateX("+n+"px)",transition:"none"}),l.css({transform:"translateY("+-a+"px)",transition:"none"}),d.css({"background-color":u}),setTimeout(function(){o.css({transform:"",transition:"transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"}),l.css({overflow:"visible",transform:"",transition:"transform .2s"}),setTimeout(function(){o.css({overflow:"hidden","background-color":u}),d.css({transform:"scale("+r+")",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"}),f.find("> li > a").css({opacity:1}),t(window).on("scroll.fabToolbarClose",function(){i(o),t(window).off("scroll.fabToolbarClose"),t(document).off("click.fabToolbarClose")}),t(document).on("click.fabToolbarClose",function(n){t(n.target).closest(f).length||(i(o),t(window).off("scroll.fabToolbarClose"),t(document).off("click.fabToolbarClose"))})},100)},0)}},i=function(t){if("true"===t.attr("data-open")){var o,n,a=window.innerWidth,i=window.innerHeight,r=t.attr("data-origin-width"),s=t.attr("data-origin-bottom"),e=t.attr("data-origin-left"),c=t.find("> .btn-floating").first(),l=t.find("> ul").first(),f=t.find(".fab-backdrop"),d=c.css("background-color");o=e-a/2+r/2,n=i-s,a/f.width(),t.removeClass("active"),t.attr("data-open",!1),t.css({"background-color":"transparent",transition:"none"}),c.css({transition:"none"}),f.css({transform:"scale(0)","background-color":d}),l.find("> li > a").css({opacity:""}),setTimeout(function(){f.remove(),t.css({"text-align":"",width:"",bottom:"",left:"",overflow:"","background-color":"",transform:"translate3d("+-o+"px,0,0)"}),c.css({overflow:"",transform:"translate3d(0,"+n+"px,0)"}),setTimeout(function(){t.css({transform:"translate3d(0,0,0)",transition:"transform .2s"}),c.css({transform:"translate3d(0,0,0)",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"})},20)},200)}}}(jQuery);