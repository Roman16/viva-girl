/*!
 dsCountDown v1.0
 jQuery count down plugin
 (c) 2013 I Wayan Wirka - http://iwayanwirka.duststone.com/dscountdown/
 license: http://www.opensource.org/licenses/mit-license.php
 */
(function(e) {
    e.fn.dsCountDown = function(t) {
        var n = this;
        var r = 1e3,
            i = null,
            s = false,
            o = 0,
            u = 1,
            a = 0,
            f = 0,
            l = 0,
            c = 0,
            h = 0,
            p = null,
            d = null,
            v = null,
            m = null;
        var g = {
            startDate: new Date,
            endDate: null,
            elemSelDays: "",
            elemSelHours: "",
            elemSelMinutes: "",
            elemSelSeconds: "",
            theme: "white",
            titleDays: "Days",
            titleHours: "Hours",
            titleMinutes: "Minutes",
            titleSeconds: "Seconds",
            onBevoreStart: null,
            onClocking: null,
            onFinish: null
        };
        var y = e.extend({}, g, t);
        if (this.length > 1) {
            this.each(function() {
                e(this).dsCountDown(t)
            });
            return this
        }
        var b = function() {
            if (!y.elemSelSeconds) {
                n.prepend('<div class="ds-element ds-element-seconds">							<div class="ds-element-title">' + y.titleSeconds + '</div>							<div class="ds-element-value ds-seconds">00</div>						</div>');
                m = n.find(".ds-seconds")
            } else {
                m = n.find(y.elemSelSeconds)
            }
            if (!y.elemSelMinutes) {
                n.prepend('<div class="ds-element ds-element-minutes">							<div class="ds-element-title">' + y.titleMinutes + '</div>							<div class="ds-element-value ds-minutes">00</div>						</div>');
                v = n.find(".ds-minutes")
            } else {
                v = n.find(y.elemSelMinutes)
            }
            if (!y.elemSelHours) {
                n.prepend('<div class="ds-element ds-element-hours">							<div class="ds-element-title">' + y.titleHours + '</div>							<div class="ds-element-value ds-hours">00</div>						</div>');
                d = n.find(".ds-hours")
            } else {
                d = n.find(y.elemSelHours)
            }
            if (!y.elemSelDays) {
                n.prepend('<div class="ds-element ds-element-days">							<div class="ds-element-title">' + y.titleDays + '</div>							<div class="ds-element-value ds-days">00</div>						</div>');
                p = n.find(".ds-days")
            } else {
                p = n.find(y.elemSelDays)
            }
            n.addClass("dsCountDown");
            n.addClass("ds-" + y.theme);
            if (y.startDate && y.endDate) {
                a = y.endDate.getTime() - y.startDate.getTime();
                if (a > 0) {
                    var e = a / 1e3;
                    var t = e % 86400;
                    var r = t % 3600;
                    o = e;
                    h = Math.floor(e / 86400);
                    c = Math.floor(t / 3600);
                    l = Math.floor(r / 60);
                    f = Math.floor(r % 60)
                }
            }
            E()
        };
        var w = function(e) {
            if (s) {
                clearInterval(i);
                s = false
            }
            if (e) {
                e(n)
            }
        };
        var E = function() {
            if (!s) {
                if (o > 0) {
                    if (y.onBevoreStart) {
                        y.onBevoreStart(n)
                    }
                    i = setInterval(function() {
                        if (o > 0) {
                            o -= u;
                            f -= u;
                            if (f <= 0 && (l > 0 || c > 0 || h > 0)) {
                                l--;
                                f = 60
                            }
                            if (l <= 0 && (c > 0 || h > 0)) {
                                c--;
                                l = 60
                            }
                            if (c <= 0 && h > 0) {
                                h--;
                                c = 24
                            }
                            if (p) p.html(h < 10 ? "0" + h : h);
                            if (d) d.html(c < 10 ? "0" + c : c);
                            if (v) v.html(l < 10 ? "0" + l : l);
                            if (m) m.html(f < 10 ? "0" + f : f);
                            if (y.onClocking) {
                                y.onClocking(n)
                            }
                        } else {
                            w(y.onFinish)
                        }
                    }, r);
                    s = true
                } else {
                    if (y.onFinish) {
                        y.onFinish(n)
                    }
                }
            }
        };
        b()
    }
})(jQuery)