import $ from 'jquery';
import bsp_utils from 'bsp-utils';


export default class ScrollChecker {

    constructor(options) {
        var self = this;
        self.settings = $.extend({}, self.defaults, options);
        self._adjustClass();
        $(window).on('scroll', bsp_utils.throttle(self.settings.throttle,() => {
            self._adjustClass();
        }));
    }

    _adjustClass() {
        var self = this;
        var $body = $('body');
        var bodyHeight = $body.height();
        var scrollY = window.scrollY;
        var windowHeight = $(window).height();

        if (!bodyHeight) {
            bodyHeight = $('body').height();
        }
        if(bodyHeight > windowHeight) {
            if(scrollY > self.settings.offsetTop) {
                $body.addClass(self.settings.classScrolling);
                if (bodyHeight > self.settings.bottomMinHeight && scrollY >= (bodyHeight - windowHeight - self.settings.offsetBottom)) {
                    $body.addClass(self.settings.classBottom);
                } else {
                    $body.removeClass(self.settings.classBottom);
                }
            } else {
                $body.removeClass(self.settings.classScrolling);
            }
        }
    }

}

ScrollChecker.prototype.defaults = {
    bottomMinHeight: 768,
    classScrolling: 'bsp-scrolling',
    classBottom: 'bsp-scrolling-bottom',
    offsetBottom: 0,
    offsetTop: 0,
    throttle: 100
};