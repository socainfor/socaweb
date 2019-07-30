!function(e){var t={data:[],placeholder:"",secondaryPlaceholder:"",autocompleteOptions:{}};e(document).ready(function(){e(document).on("click",".chip .close",function(t){e(this).closest(".chips").attr("data-initialized")||e(this).closest(".chip").remove()})}),e.fn.material_chip=function(i){var a=this;if(this.$el=e(this),this.$document=e(document),this.SELS={CHIPS:".chips",CHIP:".chip",INPUT:"input",DELETE:".material-icons",SELECTED_CHIP:".selected"},"data"===i)return this.$el.data("chips");var c=e.extend({},t,i);a.hasAutocomplete=!e.isEmptyObject(c.autocompleteOptions.data),this.init=function(){var t=0;a.$el.each(function(){var i=e(this),s=Materialize.guid();a.chipId=s,c.data&&c.data instanceof Array||(c.data=[]),i.data("chips",c.data),i.attr("data-index",t),i.attr("data-initialized",!0),i.hasClass(a.SELS.CHIPS)||i.addClass("chips"),a.chips(i,s),t++})},this.handleEvents=function(){var t=a.SELS;a.$document.off("click.chips-focus",t.CHIPS).on("click.chips-focus",t.CHIPS,function(i){e(i.target).find(t.INPUT).focus()}),a.$document.off("click.chips-select",t.CHIP).on("click.chips-select",t.CHIP,function(i){var c=e(i.target);if(c.length){var s=c.hasClass("selected"),n=c.closest(t.CHIPS);e(t.CHIP).removeClass("selected"),s||a.selectChip(c.index(),n)}}),a.$document.off("keydown.chips").on("keydown.chips",function(i){if(!e(i.target).is("input, textarea")){var c,s=a.$document.find(t.CHIP+t.SELECTED_CHIP),n=s.closest(t.CHIPS),o=s.siblings(t.CHIP).length;if(s.length)if(8===i.which||46===i.which){i.preventDefault(),c=s.index(),a.deleteChip(c,n);var l=null;c+1<o?l=c:c!==o&&c+1!==o||(l=o-1),l<0&&(l=null),null!==l&&a.selectChip(l,n),o||n.find("input").focus()}else if(37===i.which){if((c=s.index()-1)<0)return;e(t.CHIP).removeClass("selected"),a.selectChip(c,n)}else if(39===i.which){if(c=s.index()+1,e(t.CHIP).removeClass("selected"),c>o)return void n.find("input").focus();a.selectChip(c,n)}}}),a.$document.off("focusin.chips",t.CHIPS+" "+t.INPUT).on("focusin.chips",t.CHIPS+" "+t.INPUT,function(i){var a=e(i.target).closest(t.CHIPS);a.addClass("focus"),a.siblings("label, .prefix").addClass("active"),e(t.CHIP).removeClass("selected")}),a.$document.off("focusout.chips",t.CHIPS+" "+t.INPUT).on("focusout.chips",t.CHIPS+" "+t.INPUT,function(i){var a=e(i.target).closest(t.CHIPS);a.removeClass("focus"),void 0!==a.data("chips")&&a.data("chips").length||a.siblings("label").removeClass("active"),a.siblings(".prefix").removeClass("active")}),a.$document.off("keydown.chips-add",t.CHIPS+" "+t.INPUT).on("keydown.chips-add",t.CHIPS+" "+t.INPUT,function(i){var c=e(i.target),s=c.closest(t.CHIPS),n=s.children(t.CHIP).length;if(13===i.which){if(a.hasAutocomplete&&s.find(".autocomplete-content.dropdown-content").length&&s.find(".autocomplete-content.dropdown-content").children().length)return;return i.preventDefault(),a.addChip({tag:c.val()},s),void c.val("")}if((8===i.keyCode||37===i.keyCode)&&""===c.val()&&n)return i.preventDefault(),a.selectChip(n-1,s),void c.blur()}),a.$document.off("click.chips-delete",t.CHIPS+" "+t.DELETE).on("click.chips-delete",t.CHIPS+" "+t.DELETE,function(i){var c=e(i.target),s=c.closest(t.CHIPS),n=c.closest(t.CHIP);i.stopPropagation(),a.deleteChip(n.index(),s),s.find("input").focus()})},this.chips=function(t,i){t.empty(),t.data("chips").forEach(function(e){t.append(a.renderChip(e))}),t.append(e('<input id="'+i+'" class="input" placeholder="">')),a.setPlaceholder(t);var s=t.next("label");s.length&&(s.attr("for",i),void 0!==t.data("chips")&&t.data("chips").length&&s.addClass("active"));var n=e("#"+i);a.hasAutocomplete&&(c.autocompleteOptions.onAutocomplete=function(e){a.addChip({tag:e},t),n.val(""),n.focus()},n.autocomplete(c.autocompleteOptions))},this.renderChip=function(t){if(t.tag){var i=e('<div class="chip"></div>');return i.text(t.tag),t.image&&i.prepend(e("<img />").attr("src",t.image)),i.append(e('<i class="material-icons close">close</i>')),i}},this.setPlaceholder=function(e){void 0!==e.data("chips")&&!e.data("chips").length&&c.placeholder?e.find("input").prop("placeholder",c.placeholder):(void 0===e.data("chips")||e.data("chips").length)&&c.secondaryPlaceholder&&e.find("input").prop("placeholder",c.secondaryPlaceholder)},this.isValid=function(e,t){for(var i=e.data("chips"),a=!1,c=0;c<i.length;c++)if(i[c].tag===t.tag)return void(a=!0);return""!==t.tag&&!a},this.addChip=function(e,t){if(a.isValid(t,e)){for(var i=a.renderChip(e),c=[],s=t.data("chips"),n=0;n<s.length;n++)c.push(s[n]);c.push(e),t.data("chips",c),i.insertBefore(t.find("input")),t.trigger("chip.add",e),a.setPlaceholder(t)}},this.deleteChip=function(e,t){var i=t.data("chips")[e];t.find(".chip").eq(e).remove();for(var c=[],s=t.data("chips"),n=0;n<s.length;n++)n!==e&&c.push(s[n]);t.data("chips",c),t.trigger("chip.delete",i),a.setPlaceholder(t)},this.selectChip=function(e,t){var i=t.find(".chip").eq(e);i&&!1===i.hasClass("selected")&&(i.addClass("selected"),t.trigger("chip.select",t.data("chips")[e]))},this.getChipsElement=function(e,t){return t.eq(e)},this.init(),this.handleEvents()}}(jQuery);