import { ref as X, watch as tt, resolveComponent as et, openBlock as nt, createElementBlock as rt, createVNode as at, withCtx as it, createElementVNode as G, normalizeClass as Q, toDisplayString as st } from "vue";
var ot = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, K = { exports: {} };
(function(_, m) {
  (function(O, u) {
    _.exports = u();
  })(ot, function() {
    var O = 1e3, u = 6e4, $ = 36e5, H = "millisecond", w = "second", c = "minute", T = "hour", C = "day", I = "week", S = "month", E = "quarter", Y = "year", D = "date", U = "Invalid Date", J = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Z = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, B = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, A = function(o, n, t) {
      var r = String(o);
      return !r || r.length >= n ? o : "" + Array(n + 1 - r.length).join(t) + o;
    }, s = { s: A, z: function(o) {
      var n = -o.utcOffset(), t = Math.abs(n), r = Math.floor(t / 60), e = t % 60;
      return (n <= 0 ? "+" : "-") + A(r, 2, "0") + ":" + A(e, 2, "0");
    }, m: function o(n, t) {
      if (n.date() < t.date())
        return -o(t, n);
      var r = 12 * (t.year() - n.year()) + (t.month() - n.month()), e = n.clone().add(r, S), i = t - e < 0, a = n.clone().add(r + (i ? -1 : 1), S);
      return +(-(r + (t - e) / (i ? e - a : a - e)) || 0);
    }, a: function(o) {
      return o < 0 ? Math.ceil(o) || 0 : Math.floor(o);
    }, p: function(o) {
      return { M: S, y: Y, w: I, d: C, D, h: T, m: c, s: w, ms: H, Q: E }[o] || String(o || "").toLowerCase().replace(/s$/, "");
    }, u: function(o) {
      return o === void 0;
    } }, v = "en", y = {};
    y[v] = B;
    var j = function(o) {
      return o instanceof F;
    }, k = function o(n, t, r) {
      var e;
      if (!n)
        return v;
      if (typeof n == "string") {
        var i = n.toLowerCase();
        y[i] && (e = i), t && (y[i] = t, e = i);
        var a = n.split("-");
        if (!e && a.length > 1)
          return o(a[0]);
      } else {
        var l = n.name;
        y[l] = n, e = l;
      }
      return !r && e && (v = e), e || !r && v;
    }, f = function(o, n) {
      if (j(o))
        return o.clone();
      var t = typeof n == "object" ? n : {};
      return t.date = o, t.args = arguments, new F(t);
    }, d = s;
    d.l = k, d.i = j, d.w = function(o, n) {
      return f(o, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
    };
    var F = function() {
      function o(t) {
        this.$L = k(t.locale, null, !0), this.parse(t);
      }
      var n = o.prototype;
      return n.parse = function(t) {
        this.$d = function(r) {
          var e = r.date, i = r.utc;
          if (e === null)
            return new Date(NaN);
          if (d.u(e))
            return new Date();
          if (e instanceof Date)
            return new Date(e);
          if (typeof e == "string" && !/Z$/i.test(e)) {
            var a = e.match(J);
            if (a) {
              var l = a[2] - 1 || 0, g = (a[7] || "0").substring(0, 3);
              return i ? new Date(Date.UTC(a[1], l, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, g)) : new Date(a[1], l, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, g);
            }
          }
          return new Date(e);
        }(t), this.$x = t.x || {}, this.init();
      }, n.init = function() {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, n.$utils = function() {
        return d;
      }, n.isValid = function() {
        return this.$d.toString() !== U;
      }, n.isSame = function(t, r) {
        var e = f(t);
        return this.startOf(r) <= e && e <= this.endOf(r);
      }, n.isAfter = function(t, r) {
        return f(t) < this.startOf(r);
      }, n.isBefore = function(t, r) {
        return this.endOf(r) < f(t);
      }, n.$g = function(t, r, e) {
        return d.u(t) ? this[r] : this.set(e, t);
      }, n.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, n.valueOf = function() {
        return this.$d.getTime();
      }, n.startOf = function(t, r) {
        var e = this, i = !!d.u(r) || r, a = d.p(t), l = function(P, M) {
          var W = d.w(e.$u ? Date.UTC(e.$y, M, P) : new Date(e.$y, M, P), e);
          return i ? W : W.endOf(C);
        }, g = function(P, M) {
          return d.w(e.toDate()[P].apply(e.toDate("s"), (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(M)), e);
        }, h = this.$W, p = this.$M, b = this.$D, x = "set" + (this.$u ? "UTC" : "");
        switch (a) {
          case Y:
            return i ? l(1, 0) : l(31, 11);
          case S:
            return i ? l(1, p) : l(0, p + 1);
          case I:
            var V = this.$locale().weekStart || 0, L = (h < V ? h + 7 : h) - V;
            return l(i ? b - L : b + (6 - L), p);
          case C:
          case D:
            return g(x + "Hours", 0);
          case T:
            return g(x + "Minutes", 1);
          case c:
            return g(x + "Seconds", 2);
          case w:
            return g(x + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, n.endOf = function(t) {
        return this.startOf(t, !1);
      }, n.$set = function(t, r) {
        var e, i = d.p(t), a = "set" + (this.$u ? "UTC" : ""), l = (e = {}, e[C] = a + "Date", e[D] = a + "Date", e[S] = a + "Month", e[Y] = a + "FullYear", e[T] = a + "Hours", e[c] = a + "Minutes", e[w] = a + "Seconds", e[H] = a + "Milliseconds", e)[i], g = i === C ? this.$D + (r - this.$W) : r;
        if (i === S || i === Y) {
          var h = this.clone().set(D, 1);
          h.$d[l](g), h.init(), this.$d = h.set(D, Math.min(this.$D, h.daysInMonth())).$d;
        } else
          l && this.$d[l](g);
        return this.init(), this;
      }, n.set = function(t, r) {
        return this.clone().$set(t, r);
      }, n.get = function(t) {
        return this[d.p(t)]();
      }, n.add = function(t, r) {
        var e, i = this;
        t = Number(t);
        var a = d.p(r), l = function(p) {
          var b = f(i);
          return d.w(b.date(b.date() + Math.round(p * t)), i);
        };
        if (a === S)
          return this.set(S, this.$M + t);
        if (a === Y)
          return this.set(Y, this.$y + t);
        if (a === C)
          return l(1);
        if (a === I)
          return l(7);
        var g = (e = {}, e[c] = u, e[T] = $, e[w] = O, e)[a] || 1, h = this.$d.getTime() + t * g;
        return d.w(h, this);
      }, n.subtract = function(t, r) {
        return this.add(-1 * t, r);
      }, n.format = function(t) {
        var r = this, e = this.$locale();
        if (!this.isValid())
          return e.invalidDate || U;
        var i = t || "YYYY-MM-DDTHH:mm:ssZ", a = d.z(this), l = this.$H, g = this.$m, h = this.$M, p = e.weekdays, b = e.months, x = function(M, W, z, N) {
          return M && (M[W] || M(r, i)) || z[W].slice(0, N);
        }, V = function(M) {
          return d.s(l % 12 || 12, M, "0");
        }, L = e.meridiem || function(M, W, z) {
          var N = M < 12 ? "AM" : "PM";
          return z ? N.toLowerCase() : N;
        }, P = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: h + 1, MM: d.s(h + 1, 2, "0"), MMM: x(e.monthsShort, h, b, 3), MMMM: x(b, h), D: this.$D, DD: d.s(this.$D, 2, "0"), d: String(this.$W), dd: x(e.weekdaysMin, this.$W, p, 2), ddd: x(e.weekdaysShort, this.$W, p, 3), dddd: p[this.$W], H: String(l), HH: d.s(l, 2, "0"), h: V(1), hh: V(2), a: L(l, g, !0), A: L(l, g, !1), m: String(g), mm: d.s(g, 2, "0"), s: String(this.$s), ss: d.s(this.$s, 2, "0"), SSS: d.s(this.$ms, 3, "0"), Z: a };
        return i.replace(Z, function(M, W) {
          return W || P[M] || a.replace(":", "");
        });
      }, n.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, n.diff = function(t, r, e) {
        var i, a = d.p(r), l = f(t), g = (l.utcOffset() - this.utcOffset()) * u, h = this - l, p = d.m(this, l);
        return p = (i = {}, i[Y] = p / 12, i[S] = p, i[E] = p / 3, i[I] = (h - g) / 6048e5, i[C] = (h - g) / 864e5, i[T] = h / $, i[c] = h / u, i[w] = h / O, i)[a] || h, e ? p : d.a(p);
      }, n.daysInMonth = function() {
        return this.endOf(S).$D;
      }, n.$locale = function() {
        return y[this.$L];
      }, n.locale = function(t, r) {
        if (!t)
          return this.$L;
        var e = this.clone(), i = k(t, r, !0);
        return i && (e.$L = i), e;
      }, n.clone = function() {
        return d.w(this.$d, this);
      }, n.toDate = function() {
        return new Date(this.valueOf());
      }, n.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, n.toISOString = function() {
        return this.$d.toISOString();
      }, n.toString = function() {
        return this.$d.toUTCString();
      }, o;
    }(), q = F.prototype;
    return f.prototype = q, [["$ms", H], ["$s", w], ["$m", c], ["$H", T], ["$W", C], ["$M", S], ["$y", Y], ["$D", D]].forEach(function(o) {
      q[o[1]] = function(n) {
        return this.$g(n, o[0], o[1]);
      };
    }), f.extend = function(o, n) {
      return o.$i || (o(n, F, f), o.$i = !0), f;
    }, f.locale = k, f.isDayjs = j, f.unix = function(o) {
      return f(1e3 * o);
    }, f.en = y[v], f.Ls = y, f.p = {}, f;
  });
})(K);
const R = K.exports;
const ut = (_, m) => {
  const O = _.__vccOpts || _;
  for (const [u, $] of m)
    O[u] = $;
  return O;
}, lt = {
  props: {
    separator: {
      type: String
    },
    startPlaceholder: {
      type: String
    },
    endPlaceholder: {
      type: String
    }
  },
  setup(_) {
    let m = X("");
    const O = R(new Date()).format("YYYY/MM/DD");
    let u, $, H, w, c = !1;
    const T = _.separator || "To", C = _.startPlaceholder || "start week", I = _.endPlaceholder || "end week";
    console.log("start place:", C), tt(
      m.value,
      (s, v) => {
      },
      {
        deep: !0
      }
    );
    const S = (s) => {
      let v = "YYYY/MM/DD";
      return s.dayjs.format(v) === O;
    }, E = () => {
      let s = H.column, v = u.$D, y, j, k = m.value[0], f = m.value[1];
      s !== 0 && s >= v && (k = R(m.value[0] - s * 24 * 3600 * 1e3)), w !== null && $ !== null && (y = w.column, j = $.$D, y !== 0 && y >= j && (f = R(m.value[1] - y * 24 * 3600 * 1e3))), y !== 0 && y >= j && (f = R(m.value[1] - y * 24 * 3600 * 1e3)), m.value = [new Date(k), new Date(f)];
    }, Y = (s) => {
      s = new Date(s);
      var v = new Date(s.getFullYear(), 0, 1), y = s.getDay() + 1, j = v.getDay() + 1;
      let k = Math.round(
        (s.getTime() - v.getTime() + (j - y) * (24 * 60 * 60 * 1e3)) / 864e5
      );
      return Math.ceil(k / 7) + 1 > 52 ? s.getFullYear() + 1 + "\u7B2C1\u5468" : s.getFullYear() + " \u7B2C" + (Math.ceil(k / 7) + 1) + "\u5468";
    }, D = (s, v) => Y(s) === Y(v);
    return {
      value1: m,
      separator: T,
      startPlaceholder: C,
      endPlaceholder: I,
      handleChange: E,
      isToday: S,
      cellClick: (s, v, y) => {
        c === !1 && (u = s.dayjs, H = s, $ = null, w = null), c && ($ = s.dayjs, w = s), c = !c;
      },
      isEnded: (s) => D(s.dayjs, $) && s.column === 6 && u < $ && $ !== null ? !0 : !!(D(s.dayjs, u) && s.column === 6 && $ !== null && u >= $),
      isStarted: (s) => c && D(s.dayjs, u) && s.column === 0 || D(s.dayjs, u) && s.column === 0 && u < $ ? !0 : !!(D(s.dayjs, $) && s.column === 0 && u >= $),
      isInRange: (s) => !!(D(s.dayjs, $) || D(s.dayjs, u) || s.inRange === !0),
      calendarChange: () => {
      }
    };
  }
}, dt = ["onClick"];
function ct(_, m, O, u, $, H) {
  const w = et("el-date-picker");
  return nt(), rt("div", null, [
    at(w, {
      modelValue: u.value1,
      "onUpdate:modelValue": m[0] || (m[0] = (c) => u.value1 = c),
      type: "daterange",
      format: "YYYY\u5E74-ww\u5468(MM\u6708)",
      "range-separator": u.separator,
      "start-placeholder": u.startPlaceholder,
      "end-placeholder": u.endPlaceholder,
      onChange: u.handleChange,
      onCalendarChange: u.calendarChange,
      onInput: m[1] || (m[1] = (c) => _.$forceupdate())
    }, {
      default: it((c) => [
        G("div", {
          class: Q(["cell", {
            inrange: u.isInRange(c) && !u.isEnded(c) && !u.isStarted(c),
            ended: u.isEnded(c),
            started: u.isStarted(c)
          }]),
          onClick: (T) => u.cellClick(c, c.column, c.row)
        }, [
          G("span", {
            class: Q(["text", { today: u.isToday(c) }])
          }, st(c.text), 3)
        ], 10, dt)
      ]),
      _: 1
    }, 8, ["modelValue", "range-separator", "start-placeholder", "end-placeholder", "onChange", "onCalendarChange"])
  ]);
}
const ft = /* @__PURE__ */ ut(lt, [["render", ct], ["__scopeId", "data-v-adc099c5"]]), gt = {
  install: (_, m) => {
    console.log("\u8FD9\u662F\u4E00\u4E2A\u63D2\u4EF6"), _.component("week-range", ft);
  }
};
export {
  gt as default
};
