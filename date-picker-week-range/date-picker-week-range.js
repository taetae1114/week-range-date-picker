import { ref as X, watch as tt, resolveComponent as et, openBlock as nt, createElementBlock as rt, createVNode as at, withCtx as st, createElementVNode as G, normalizeClass as Q, toDisplayString as it } from "vue";
var ot = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, K = { exports: {} };
(function($, Y) {
  (function(m, c) {
    $.exports = c();
  })(ot, function() {
    var m = 1e3, c = 6e4, v = 36e5, y = "millisecond", p = "second", f = "minute", w = "hour", k = "day", P = "week", S = "month", F = "quarter", C = "year", O = "date", N = "Invalid Date", J = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, R = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, x = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, U = function(r, e, t) {
      var a = String(r);
      return !a || a.length >= e ? r : "" + Array(e + 1 - a.length).join(t) + r;
    }, q = { s: U, z: function(r) {
      var e = -r.utcOffset(), t = Math.abs(e), a = Math.floor(t / 60), n = t % 60;
      return (e <= 0 ? "+" : "-") + U(a, 2, "0") + ":" + U(n, 2, "0");
    }, m: function r(e, t) {
      if (e.date() < t.date())
        return -r(t, e);
      var a = 12 * (t.year() - e.year()) + (t.month() - e.month()), n = e.clone().add(a, S), o = t - n < 0, i = e.clone().add(a + (o ? -1 : 1), S);
      return +(-(a + (t - n) / (o ? n - i : i - n)) || 0);
    }, a: function(r) {
      return r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
    }, p: function(r) {
      return { M: S, y: C, w: P, d: k, D: O, h: w, m: f, s: p, ms: y, Q: F }[r] || String(r || "").toLowerCase().replace(/s$/, "");
    }, u: function(r) {
      return r === void 0;
    } }, W = "en", H = {};
    H[W] = x;
    var z = function(r) {
      return r instanceof _;
    }, s = function r(e, t, a) {
      var n;
      if (!e)
        return W;
      if (typeof e == "string") {
        var o = e.toLowerCase();
        H[o] && (n = o), t && (H[o] = t, n = o);
        var i = e.split("-");
        if (!n && i.length > 1)
          return r(i[0]);
      } else {
        var d = e.name;
        H[d] = e, n = d;
      }
      return !a && n && (W = n), n || !a && W;
    }, l = function(r, e) {
      if (z(r))
        return r.clone();
      var t = typeof e == "object" ? e : {};
      return t.date = r, t.args = arguments, new _(t);
    }, u = q;
    u.l = s, u.i = z, u.w = function(r, e) {
      return l(r, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset });
    };
    var _ = function() {
      function r(t) {
        this.$L = s(t.locale, null, !0), this.parse(t);
      }
      var e = r.prototype;
      return e.parse = function(t) {
        this.$d = function(a) {
          var n = a.date, o = a.utc;
          if (n === null)
            return new Date(NaN);
          if (u.u(n))
            return new Date();
          if (n instanceof Date)
            return new Date(n);
          if (typeof n == "string" && !/Z$/i.test(n)) {
            var i = n.match(J);
            if (i) {
              var d = i[2] - 1 || 0, g = (i[7] || "0").substring(0, 3);
              return o ? new Date(Date.UTC(i[1], d, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, g)) : new Date(i[1], d, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, g);
            }
          }
          return new Date(n);
        }(t), this.$x = t.x || {}, this.init();
      }, e.init = function() {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, e.$utils = function() {
        return u;
      }, e.isValid = function() {
        return this.$d.toString() !== N;
      }, e.isSame = function(t, a) {
        var n = l(t);
        return this.startOf(a) <= n && n <= this.endOf(a);
      }, e.isAfter = function(t, a) {
        return l(t) < this.startOf(a);
      }, e.isBefore = function(t, a) {
        return this.endOf(a) < l(t);
      }, e.$g = function(t, a, n) {
        return u.u(t) ? this[a] : this.set(n, t);
      }, e.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, e.valueOf = function() {
        return this.$d.getTime();
      }, e.startOf = function(t, a) {
        var n = this, o = !!u.u(a) || a, i = u.p(t), d = function(A, M) {
          var V = u.w(n.$u ? Date.UTC(n.$y, M, A) : new Date(n.$y, M, A), n);
          return o ? V : V.endOf(k);
        }, g = function(A, M) {
          return u.w(n.toDate()[A].apply(n.toDate("s"), (o ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(M)), n);
        }, h = this.$W, D = this.$M, b = this.$D, j = "set" + (this.$u ? "UTC" : "");
        switch (i) {
          case C:
            return o ? d(1, 0) : d(31, 11);
          case S:
            return o ? d(1, D) : d(0, D + 1);
          case P:
            var I = this.$locale().weekStart || 0, L = (h < I ? h + 7 : h) - I;
            return d(o ? b - L : b + (6 - L), D);
          case k:
          case O:
            return g(j + "Hours", 0);
          case w:
            return g(j + "Minutes", 1);
          case f:
            return g(j + "Seconds", 2);
          case p:
            return g(j + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, e.endOf = function(t) {
        return this.startOf(t, !1);
      }, e.$set = function(t, a) {
        var n, o = u.p(t), i = "set" + (this.$u ? "UTC" : ""), d = (n = {}, n[k] = i + "Date", n[O] = i + "Date", n[S] = i + "Month", n[C] = i + "FullYear", n[w] = i + "Hours", n[f] = i + "Minutes", n[p] = i + "Seconds", n[y] = i + "Milliseconds", n)[o], g = o === k ? this.$D + (a - this.$W) : a;
        if (o === S || o === C) {
          var h = this.clone().set(O, 1);
          h.$d[d](g), h.init(), this.$d = h.set(O, Math.min(this.$D, h.daysInMonth())).$d;
        } else
          d && this.$d[d](g);
        return this.init(), this;
      }, e.set = function(t, a) {
        return this.clone().$set(t, a);
      }, e.get = function(t) {
        return this[u.p(t)]();
      }, e.add = function(t, a) {
        var n, o = this;
        t = Number(t);
        var i = u.p(a), d = function(D) {
          var b = l(o);
          return u.w(b.date(b.date() + Math.round(D * t)), o);
        };
        if (i === S)
          return this.set(S, this.$M + t);
        if (i === C)
          return this.set(C, this.$y + t);
        if (i === k)
          return d(1);
        if (i === P)
          return d(7);
        var g = (n = {}, n[f] = c, n[w] = v, n[p] = m, n)[i] || 1, h = this.$d.getTime() + t * g;
        return u.w(h, this);
      }, e.subtract = function(t, a) {
        return this.add(-1 * t, a);
      }, e.format = function(t) {
        var a = this, n = this.$locale();
        if (!this.isValid())
          return n.invalidDate || N;
        var o = t || "YYYY-MM-DDTHH:mm:ssZ", i = u.z(this), d = this.$H, g = this.$m, h = this.$M, D = n.weekdays, b = n.months, j = function(M, V, Z, B) {
          return M && (M[V] || M(a, o)) || Z[V].slice(0, B);
        }, I = function(M) {
          return u.s(d % 12 || 12, M, "0");
        }, L = n.meridiem || function(M, V, Z) {
          var B = M < 12 ? "AM" : "PM";
          return Z ? B.toLowerCase() : B;
        }, A = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: h + 1, MM: u.s(h + 1, 2, "0"), MMM: j(n.monthsShort, h, b, 3), MMMM: j(b, h), D: this.$D, DD: u.s(this.$D, 2, "0"), d: String(this.$W), dd: j(n.weekdaysMin, this.$W, D, 2), ddd: j(n.weekdaysShort, this.$W, D, 3), dddd: D[this.$W], H: String(d), HH: u.s(d, 2, "0"), h: I(1), hh: I(2), a: L(d, g, !0), A: L(d, g, !1), m: String(g), mm: u.s(g, 2, "0"), s: String(this.$s), ss: u.s(this.$s, 2, "0"), SSS: u.s(this.$ms, 3, "0"), Z: i };
        return o.replace(R, function(M, V) {
          return V || A[M] || i.replace(":", "");
        });
      }, e.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, e.diff = function(t, a, n) {
        var o, i = u.p(a), d = l(t), g = (d.utcOffset() - this.utcOffset()) * c, h = this - d, D = u.m(this, d);
        return D = (o = {}, o[C] = D / 12, o[S] = D, o[F] = D / 3, o[P] = (h - g) / 6048e5, o[k] = (h - g) / 864e5, o[w] = h / v, o[f] = h / c, o[p] = h / m, o)[i] || h, n ? D : u.a(D);
      }, e.daysInMonth = function() {
        return this.endOf(S).$D;
      }, e.$locale = function() {
        return H[this.$L];
      }, e.locale = function(t, a) {
        if (!t)
          return this.$L;
        var n = this.clone(), o = s(t, a, !0);
        return o && (n.$L = o), n;
      }, e.clone = function() {
        return u.w(this.$d, this);
      }, e.toDate = function() {
        return new Date(this.valueOf());
      }, e.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, e.toISOString = function() {
        return this.$d.toISOString();
      }, e.toString = function() {
        return this.$d.toUTCString();
      }, r;
    }(), T = _.prototype;
    return l.prototype = T, [["$ms", y], ["$s", p], ["$m", f], ["$H", w], ["$W", k], ["$M", S], ["$y", C], ["$D", O]].forEach(function(r) {
      T[r[1]] = function(e) {
        return this.$g(e, r[0], r[1]);
      };
    }), l.extend = function(r, e) {
      return r.$i || (r(e, _, l), r.$i = !0), l;
    }, l.locale = s, l.isDayjs = z, l.unix = function(r) {
      return l(1e3 * r);
    }, l.en = H[W], l.Ls = H, l.p = {}, l;
  });
})(K);
const E = K.exports;
const ut = ($, Y) => {
  const m = $.__vccOpts || $;
  for (const [c, v] of Y)
    m[c] = v;
  return m;
}, lt = {
  props: {
    rangeSeparator: {
      type: String
    },
    startPlaceholder: {
      type: String
    },
    endPlaceholder: {
      type: String
    },
    format: {
      type: String
    },
    modelValue: {
      type: Array
    },
    unlinkPanels: {
      type: Boolean
    },
    shortcuts: {
      type: Array
    }
  },
  setup($, Y) {
    let m = X("");
    const c = E(new Date()).format("YYYY/MM/DD");
    let v, y, p, f, w = !1;
    const k = $.rangeSeparator || "To", P = $.startPlaceholder || "start week", S = $.endPlaceholder || "end week", F = $.format || "YYYY [Week] ww", C = $.unlinkPanels || !1;
    m.value = $.modelValue.value;
    let O = [];
    if ($.shortcuts) {
      let s = $.shortcuts.length;
      const l = [];
      for (let u = 0; u < s; u++) {
        let _ = $.shortcuts[u].text, T = $.shortcuts[u].value();
        const r = new Date(T[1]), e = new Date(T[0]);
        l.push({
          text: _,
          value: () => {
            let t = e.getDay(), a = r.getDay();
            e.setTime(
              e.getTime() - t * 3600 * 24 * 1e3 - e.getHours() * 3600 * 1e3 - e.getMinutes() * 60 * 1e3 - e.getSeconds() * 1e3
            ), r.setTime(
              r.getTime() + (6 - a * 3600 * 24 * 1e3) - r.getHours() * 3600 * 1e3 - r.getMinutes() * 60 * 1e3 - r.getSeconds() * 1e3
            ), m.value = [e, r], v = E(e), y = E(r), Y.emit("update:modelValue", m.value);
          }
        });
      }
      O = l;
    }
    tt(
      m.value,
      (s, l) => {
      },
      {
        deep: !0
      }
    );
    const N = (s) => {
      let l = "YYYY/MM/DD";
      return s.dayjs.format(l) === c;
    }, J = () => {
      let s = p.column;
      v.$D;
      let l, u = m.value[0], _ = m.value[1];
      if (s !== 0 && (u = E(m.value[0] - s * 24 * 3600 * 1e3)), f !== null && y !== null && (l = f.column, y.$D, l !== 6)) {
        let T = 6 - l, r = new Date(m.value[1]).getTime();
        _ = E(r + T * 24 * 3600 * 1e3);
      }
      m.value = [new Date(u), new Date(_)], Y.emit("update:modelValue", m.value);
    }, R = (s) => {
      s = new Date(s);
      let l = new Date(s.getFullYear(), 0, 1), u = s.getDay() + 1, _ = l.getDay() + 1, T = Math.round(
        (s.getTime() - l.getTime() + (_ - u) * (24 * 60 * 60 * 1e3)) / 864e5
      );
      return Math.ceil(T / 7) + 1 > 52 ? s.getFullYear() + 1 + "\u7B2C1\u5468" : s.getFullYear() + " \u7B2C" + (Math.ceil(T / 7) + 1) + "\u5468";
    }, x = (s, l) => R(s) === R(l);
    return {
      value: m,
      separator: k,
      startPlaceHolder: P,
      endPlaceHolder: S,
      format: F,
      unlinkPanels: C,
      shortcuts: O,
      handleChange: J,
      isToday: N,
      cellClick: (s, l, u) => {
        w === !1 && (v = s.dayjs, p = s, y = null, f = null), w && (y = s.dayjs, f = s), w = !w;
      },
      isEnded: (s) => x(s.dayjs, y) && s.column === 6 && v < y && y !== null ? !0 : !!(x(s.dayjs, v) && s.column === 6 && y !== null && v >= y),
      isStarted: (s) => w && x(s.dayjs, v) && s.column === 0 || x(s.dayjs, v) && s.column === 0 && v < y ? !0 : !!(x(s.dayjs, y) && s.column === 0 && v >= y),
      isInRange: (s) => !!(x(s.dayjs, y) || x(s.dayjs, v) || s.inRange === !0),
      calendarChange: () => {
      }
    };
  }
}, dt = ["onClick"];
function ct($, Y, m, c, v, y) {
  const p = et("el-date-picker");
  return nt(), rt("div", null, [
    at(p, {
      modelValue: c.value,
      "onUpdate:modelValue": Y[0] || (Y[0] = (f) => c.value = f),
      type: "daterange",
      format: c.format,
      "range-separator": c.separator,
      "start-placeholder": c.startPlaceHolder,
      "end-placeholder": c.endPlaceHolder,
      "unlink-panels": c.unlinkPanels,
      onChange: c.handleChange,
      onCalendarChange: c.calendarChange,
      shortcuts: c.shortcuts
    }, {
      default: st((f) => [
        G("div", {
          class: Q(["cell", {
            inrange: c.isInRange(f) && !c.isEnded(f) && !c.isStarted(f),
            ended: c.isEnded(f),
            started: c.isStarted(f)
          }]),
          onClick: (w) => c.cellClick(f, f.column, f.row)
        }, [
          G("span", {
            class: Q(["text", { today: c.isToday(f) }])
          }, it(f.text), 3)
        ], 10, dt)
      ]),
      _: 1
    }, 8, ["modelValue", "format", "range-separator", "start-placeholder", "end-placeholder", "unlink-panels", "onChange", "onCalendarChange", "shortcuts"])
  ]);
}
const ft = /* @__PURE__ */ ut(lt, [["render", ct]]), gt = {
  install: ($, Y) => {
    console.log("date-picker-week-range\u63D2\u4EF6\u5DF2\u5B89\u88C5\u2764 "), $.component("week-range", ft);
  }
};
export {
  ft as WeekRange,
  gt as default
};
