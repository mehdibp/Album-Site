(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
      5317: function(e, t, n) {
          "use strict";
          function r(e) {
              if (void 0 === e)
                  throw ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }
          function i(e, t) {
              e.prototype = Object.create(t.prototype),
              e.prototype.constructor = e,
              e.__proto__ = t
          }
          n.d(t, {
              $i: function() {
                  return e_
              },
              Aq: function() {
                  return nA
              },
              DY: function() {
                  return eb
              },
              EA: function() {
                  return nR
              },
              Fc: function() {
                  return C
              },
              Fo: function() {
                  return nc
              },
              GN: function() {
                  return tT
              },
              JV: function() {
                  return nu
              },
              Ks: function() {
                  return ni
              },
              Ok: function() {
                  return eT
              },
              Pr: function() {
                  return eR
              },
              S5: function() {
                  return nt
              },
              SI: function() {
                  return Z
              },
              UI: function() {
                  return tf
              },
              Wy: function() {
                  return te
              },
              Yp: function() {
                  return nx
              },
              bJ: function() {
                  return nE
              },
              bQ: function() {
                  return J
              },
              cy: function() {
                  return ex
              },
              d4: function() {
                  return X
              },
              fS: function() {
                  return eS
              },
              if: function() {
                  return tQ
              },
              kr: function() {
                  return tR
              },
              l1: function() {
                  return tz
              },
              lC: function() {
                  return eo
              },
              m2: function() {
                  return j
              },
              p8: function() {
                  return nS
              },
              r9: function() {
                  return U
              },
              xr: function() {
                  return tA
              }
          });
          /*!
   * GSAP 3.11.4
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
          var o, a, s, l, u, c, f, h, d, p, _, m, v, g, y, w, b, T, S, R, A, x, E, k, N, M, C = {
              autoSleep: 120,
              force3D: "auto",
              nullTargetWarn: 1,
              units: {
                  lineHeight: ""
              }
          }, L = {
              duration: .5,
              overwrite: !1,
              delay: 0
          }, O = 2 * Math.PI, P = O / 4, D = 0, V = Math.sqrt, I = Math.cos, B = Math.sin, U = function(e) {
              return "string" == typeof e
          }, z = function(e) {
              return "function" == typeof e
          }, F = function(e) {
              return "number" == typeof e
          }, j = function(e) {
              return void 0 === e
          }, W = function(e) {
              return "object" == typeof e
          }, $ = function(e) {
              return !1 !== e
          }, G = function() {
              return "undefined" != typeof window
          }, q = function(e) {
              return z(e) || U(e)
          }, Y = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
          , H = Array.isArray, K = /(?:-?\.?\d|\.)+/gi, Z = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, X = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Q = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, J = /[+-]=-?[.\d]+/, ee = /[^,'"\[\]\s]+/gi, et = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, en = {}, er = {}, ei = function(e) {
              return (er = eO(e, en)) && nS
          }, eo = function(e, t) {
              return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
          }, ea = function(e, t) {
              return !t && console.warn(e)
          }, es = function(e, t) {
              return e && (en[e] = t) && er && (er[e] = t) || en
          }, el = function() {
              return 0
          }, eu = {
              suppressEvents: !0,
              isStart: !0,
              kill: !1
          }, ec = {
              suppressEvents: !0,
              kill: !1
          }, ef = {
              suppressEvents: !0
          }, eh = {}, ed = [], ep = {}, e_ = {}, em = {}, ev = 30, eg = [], ey = "", ew = function(e) {
              var t, n, r = e[0];
              if (W(r) || z(r) || (e = [e]),
              !(t = (r._gsap || {}).harness)) {
                  for (n = eg.length; n-- && !eg[n].targetTest(r); )
                      ;
                  t = eg[n]
              }
              for (n = e.length; n--; )
                  e[n] && (e[n]._gsap || (e[n]._gsap = new tz(e[n],t))) || e.splice(n, 1);
              return e
          }, eb = function(e) {
              return e._gsap || ew(tr(e))[0]._gsap
          }, eT = function(e, t, n) {
              return (n = e[t]) && z(n) ? e[t]() : j(n) && e.getAttribute && e.getAttribute(t) || n
          }, eS = function(e, t) {
              return (e = e.split(",")).forEach(t) || e
          }, eR = function(e) {
              return Math.round(1e5 * e) / 1e5 || 0
          }, eA = function(e) {
              return Math.round(1e7 * e) / 1e7 || 0
          }, ex = function(e, t) {
              var n = t.charAt(0)
                , r = parseFloat(t.substr(2));
              return e = parseFloat(e),
              "+" === n ? e + r : "-" === n ? e - r : "*" === n ? e * r : e / r
          }, eE = function(e, t) {
              for (var n = t.length, r = 0; 0 > e.indexOf(t[r]) && ++r < n; )
                  ;
              return r < n
          }, ek = function() {
              var e, t, n = ed.length, r = ed.slice(0);
              for (e = 0,
              ep = {},
              ed.length = 0; e < n; e++)
                  (t = r[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
          }, eN = function(e, t, n, r) {
              ed.length && !b && ek(),
              e.render(t, n, r || b && t < 0 && (e._initted || e._startAt)),
              ed.length && !b && ek()
          }, eM = function(e) {
              var t = parseFloat(e);
              return (t || 0 === t) && (e + "").match(ee).length < 2 ? t : U(e) ? e.trim() : e
          }, eC = function(e) {
              return e
          }, eL = function(e, t) {
              for (var n in t)
                  n in e || (e[n] = t[n]);
              return e
          }, eO = function(e, t) {
              for (var n in t)
                  e[n] = t[n];
              return e
          }, eP = function e(t, n) {
              for (var r in n)
                  "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = W(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
              return t
          }, eD = function(e, t) {
              var n, r = {};
              for (n in e)
                  n in t || (r[n] = e[n]);
              return r
          }, eV = function(e) {
              var t, n = e.parent || S, r = e.keyframes ? (t = H(e.keyframes),
              function(e, n) {
                  for (var r in n)
                      r in e || "duration" === r && t || "ease" === r || (e[r] = n[r])
              }
              ) : eL;
              if ($(e.inherit))
                  for (; n; )
                      r(e, n.vars.defaults),
                      n = n.parent || n._dp;
              return e
          }, eI = function(e, t) {
              for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n]; )
                  ;
              return n < 0
          }, eB = function(e, t, n, r, i) {
              void 0 === n && (n = "_first"),
              void 0 === r && (r = "_last");
              var o, a = e[r];
              if (i)
                  for (o = t[i]; a && a[i] > o; )
                      a = a._prev;
              return a ? (t._next = a._next,
              a._next = t) : (t._next = e[n],
              e[n] = t),
              t._next ? t._next._prev = t : e[r] = t,
              t._prev = a,
              t.parent = t._dp = e,
              t
          }, eU = function(e, t, n, r) {
              void 0 === n && (n = "_first"),
              void 0 === r && (r = "_last");
              var i = t._prev
                , o = t._next;
              i ? i._next = o : e[n] === t && (e[n] = o),
              o ? o._prev = i : e[r] === t && (e[r] = i),
              t._next = t._prev = t.parent = null
          }, ez = function(e, t) {
              e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e),
              e._act = 0
          }, eF = function(e, t) {
              if (e && (!t || t._end > e._dur || t._start < 0))
                  for (var n = e; n; )
                      n._dirty = 1,
                      n = n.parent;
              return e
          }, ej = function(e) {
              for (var t = e.parent; t && t.parent; )
                  t._dirty = 1,
                  t.totalDuration(),
                  t = t.parent;
              return e
          }, eW = function(e, t, n, r) {
              return e._startAt && (b ? e._startAt.revert(ec) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r))
          }, e$ = function(e) {
              return e._repeat ? eG(e._tTime, e = e.duration() + e._rDelay) * e : 0
          }, eG = function(e, t) {
              var n = Math.floor(e /= t);
              return e && n === e ? n - 1 : n
          }, eq = function(e, t) {
              return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
          }, eY = function(e) {
              return e._end = eA(e._start + (e._tDur / Math.abs(e._ts || e._rts || 1e-8) || 0))
          }, eH = function(e, t) {
              var n = e._dp;
              return n && n.smoothChildTiming && e._ts && (e._start = eA(n._time - (e._ts > 0 ? t / e._ts : -(((e._dirty ? e.totalDuration() : e._tDur) - t) / e._ts))),
              eY(e),
              n._dirty || eF(n, e)),
              e
          }, eK = function(e, t) {
              var n;
              if ((t._time || t._initted && !t._dur) && (n = eq(e.rawTime(), t),
              (!t._dur || e7(0, t.totalDuration(), n) - t._tTime > 1e-8) && t.render(n, !0)),
              eF(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
                  if (e._dur < e.duration())
                      for (n = e; n._dp; )
                          n.rawTime() >= 0 && n.totalTime(n._tTime),
                          n = n._dp;
                  e._zTime = -.00000001
              }
          }, eZ = function(e, t, n, r) {
              return t.parent && ez(t),
              t._start = eA((F(n) ? n : n || e !== S ? e4(e, n, t) : e._time) + t._delay),
              t._end = eA(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
              eB(e, t, "_first", "_last", e._sort ? "_start" : 0),
              e0(t) || (e._recent = t),
              r || eK(e, t),
              e._ts < 0 && eH(e, e._tTime),
              e
          }, eX = function(e, t) {
              return (en.ScrollTrigger || eo("scrollTrigger", t)) && en.ScrollTrigger.create(t, e)
          }, eQ = function(e, t, n, r, i) {
              return (tJ(e, t, i),
              e._initted) ? !n && e._pt && !b && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && k !== tA.frame ? (ed.push(e),
              e._lazy = [i, r],
              1) : void 0 : 1
          }, eJ = function e(t) {
              var n = t.parent;
              return n && n._ts && n._initted && !n._lock && (0 > n.rawTime() || e(n))
          }, e0 = function(e) {
              var t = e.data;
              return "isFromStart" === t || "isStart" === t
          }, e1 = function(e, t, n, r) {
              var i, o, a, s = e.ratio, l = t < 0 || !t && (!e._start && eJ(e) && !(!e._initted && e0(e)) || (e._ts < 0 || e._dp._ts < 0) && !e0(e)) ? 0 : 1, u = e._rDelay, c = 0;
              if (u && e._repeat && (o = eG(c = e7(0, e._tDur, t), u),
              e._yoyo && 1 & o && (l = 1 - l),
              o !== eG(e._tTime, u) && (s = 1 - l,
              e.vars.repeatRefresh && e._initted && e.invalidate())),
              l !== s || b || r || 1e-8 === e._zTime || !t && e._zTime) {
                  if (!e._initted && eQ(e, t, r, n, c))
                      return;
                  for (a = e._zTime,
                  e._zTime = t || (n ? 1e-8 : 0),
                  n || (n = t && !a),
                  e.ratio = l,
                  e._from && (l = 1 - l),
                  e._time = 0,
                  e._tTime = c,
                  i = e._pt; i; )
                      i.r(l, i.d),
                      i = i._next;
                  t < 0 && eW(e, t, n, !0),
                  e._onUpdate && !n && tp(e, "onUpdate"),
                  c && e._repeat && !n && e.parent && tp(e, "onRepeat"),
                  (t >= e._tDur || t < 0) && e.ratio === l && (l && ez(e, 1),
                  n || b || (tp(e, l ? "onComplete" : "onReverseComplete", !0),
                  e._prom && e._prom()))
              } else
                  e._zTime || (e._zTime = t)
          }, e2 = function(e, t, n) {
              var r;
              if (n > t)
                  for (r = e._first; r && r._start <= n; ) {
                      if ("isPause" === r.data && r._start > t)
                          return r;
                      r = r._next
                  }
              else
                  for (r = e._last; r && r._start >= n; ) {
                      if ("isPause" === r.data && r._start < t)
                          return r;
                      r = r._prev
                  }
          }, e5 = function(e, t, n, r) {
              var i = e._repeat
                , o = eA(t) || 0
                , a = e._tTime / e._tDur;
              return a && !r && (e._time *= o / e._dur),
              e._dur = o,
              e._tDur = i ? i < 0 ? 1e10 : eA(o * (i + 1) + e._rDelay * i) : o,
              a > 0 && !r && eH(e, e._tTime = e._tDur * a),
              e.parent && eY(e),
              n || eF(e.parent, e),
              e
          }, e3 = function(e) {
              return e instanceof tj ? eF(e) : e5(e, e._dur)
          }, e8 = {
              _start: 0,
              endTime: el,
              totalDuration: el
          }, e4 = function e(t, n, r) {
              var i, o, a, s = t.labels, l = t._recent || e8, u = t.duration() >= 1e8 ? l.endTime(!1) : t._dur;
              return U(n) && (isNaN(n) || n in s) ? (o = n.charAt(0),
              a = "%" === n.substr(-1),
              i = n.indexOf("="),
              "<" === o || ">" === o) ? (i >= 0 && (n = n.replace(/=/, "")),
              ("<" === o ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (a ? (i < 0 ? l : r).totalDuration() / 100 : 1)) : i < 0 ? (n in s || (s[n] = u),
              s[n]) : (o = parseFloat(n.charAt(i - 1) + n.substr(i + 1)),
              a && r && (o = o / 100 * (H(r) ? r[0] : r).totalDuration()),
              i > 1 ? e(t, n.substr(0, i - 1), r) + o : u + o) : null == n ? u : +n
          }, e9 = function(e, t, n) {
              var r, i, o = F(t[1]), a = (o ? 2 : 1) + (e < 2 ? 0 : 1), s = t[a];
              if (o && (s.duration = t[1]),
              s.parent = n,
              e) {
                  for (r = s,
                  i = n; i && !("immediateRender"in r); )
                      r = i.vars.defaults || {},
                      i = $(i.vars.inherit) && i.parent;
                  s.immediateRender = $(r.immediateRender),
                  e < 2 ? s.runBackwards = 1 : s.startAt = t[a - 1]
              }
              return new t4(t[0],s,t[a + 1])
          }, e6 = function(e, t) {
              return e || 0 === e ? t(e) : t
          }, e7 = function(e, t, n) {
              return n < e ? e : n > t ? t : n
          }, te = function(e, t) {
              return U(e) && (t = et.exec(e)) ? t[1] : ""
          }, tt = [].slice, tn = function(e, t) {
              return e && W(e) && "length"in e && (!t && !e.length || e.length - 1 in e && W(e[0])) && !e.nodeType && e !== R
          }, tr = function(e, t, n) {
              var r;
              return T && !t && T.selector ? T.selector(e) : U(e) && !n && (A || !tx()) ? tt.call((t || x).querySelectorAll(e), 0) : H(e) ? (void 0 === r && (r = []),
              e.forEach(function(e) {
                  var t;
                  return U(e) && !n || tn(e, 1) ? (t = r).push.apply(t, tr(e)) : r.push(e)
              }) || r) : tn(e) ? tt.call(e, 0) : e ? [e] : []
          }, ti = function(e) {
              return e = tr(e)[0] || ea("Invalid scope") || {},
              function(t) {
                  var n = e.current || e.nativeElement || e;
                  return tr(t, n.querySelectorAll ? n : n === e ? ea("Invalid scope") || x.createElement("div") : e)
              }
          }, to = function(e) {
              return e.sort(function() {
                  return .5 - Math.random()
              })
          }, ta = function(e) {
              if (z(e))
                  return e;
              var t = W(e) ? e : {
                  each: e
              }
                , n = tD(t.ease)
                , r = t.from || 0
                , i = parseFloat(t.base) || 0
                , o = {}
                , a = r > 0 && r < 1
                , s = isNaN(r) || a
                , l = t.axis
                , u = r
                , c = r;
              return U(r) ? u = c = ({
                  center: .5,
                  edges: .5,
                  end: 1
              })[r] || 0 : !a && s && (u = r[0],
              c = r[1]),
              function(e, a, f) {
                  var h, d, p, _, m, v, g, y, w, b = (f || t).length, T = o[b];
                  if (!T) {
                      if (!(w = "auto" === t.grid ? 0 : (t.grid || [1, 1e8])[1])) {
                          for (g = -1e8; g < (g = f[w++].getBoundingClientRect().left) && w < b; )
                              ;
                          w--
                      }
                      for (v = 0,
                      T = o[b] = [],
                      h = s ? Math.min(w, b) * u - .5 : r % w,
                      d = 1e8 === w ? 0 : s ? b * c / w - .5 : r / w | 0,
                      g = 0,
                      y = 1e8; v < b; v++)
                          p = v % w - h,
                          _ = d - (v / w | 0),
                          T[v] = m = l ? Math.abs("y" === l ? _ : p) : V(p * p + _ * _),
                          m > g && (g = m),
                          m < y && (y = m);
                      "random" === r && to(T),
                      T.max = g - y,
                      T.min = y,
                      T.v = b = (parseFloat(t.amount) || parseFloat(t.each) * (w > b ? b - 1 : l ? "y" === l ? b / w : w : Math.max(w, b / w)) || 0) * ("edges" === r ? -1 : 1),
                      T.b = b < 0 ? i - b : i,
                      T.u = te(t.amount || t.each) || 0,
                      n = n && b < 0 ? tO(n) : n
                  }
                  return b = (T[e] - T.min) / T.max || 0,
                  eA(T.b + (n ? n(b) : b) * T.v) + T.u
              }
          }, ts = function(e) {
              var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
              return function(n) {
                  var r = eA(Math.round(parseFloat(n) / e) * e * t);
                  return (r - r % 1) / t + (F(n) ? 0 : te(n))
              }
          }, tl = function(e, t) {
              var n, r, i = H(e);
              return !i && W(e) && (n = i = e.radius || 1e8,
              e.values ? (r = !F((e = tr(e.values))[0])) && (n *= n) : e = ts(e.increment)),
              e6(t, i ? z(e) ? function(t) {
                  return Math.abs((r = e(t)) - t) <= n ? r : t
              }
              : function(t) {
                  for (var i, o, a = parseFloat(r ? t.x : t), s = parseFloat(r ? t.y : 0), l = 1e8, u = 0, c = e.length; c--; )
                      (i = r ? (i = e[c].x - a) * i + (o = e[c].y - s) * o : Math.abs(e[c] - a)) < l && (l = i,
                      u = c);
                  return u = !n || l <= n ? e[u] : t,
                  r || u === t || F(t) ? u : u + te(t)
              }
              : ts(e))
          }, tu = function(e, t, n, r) {
              return e6(H(e) ? !t : !0 === n ? (n = 0,
              !1) : !r, function() {
                  return H(e) ? e[~~(Math.random() * e.length)] : (r = (n = n || 1e-5) < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + .99 * n)) / n) * n * r) / r
              })
          }, tc = function(e, t, n) {
              return e6(n, function(n) {
                  return e[~~t(n)]
              })
          }, tf = function(e) {
              for (var t, n, r, i, o = 0, a = ""; ~(t = e.indexOf("random(", o)); )
                  r = e.indexOf(")", t),
                  i = "[" === e.charAt(t + 7),
                  n = e.substr(t + 7, r - t - 7).match(i ? ee : K),
                  a += e.substr(o, t - o) + tu(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5),
                  o = r + 1;
              return a + e.substr(o, e.length - o)
          }, th = function(e, t, n, r, i) {
              var o = t - e
                , a = r - n;
              return e6(i, function(t) {
                  return n + ((t - e) / o * a || 0)
              })
          }, td = function(e, t, n) {
              var r, i, o, a = e.labels, s = 1e8;
              for (r in a)
                  (i = a[r] - t) < 0 == !!n && i && s > (i = Math.abs(i)) && (o = r,
                  s = i);
              return o
          }, tp = function(e, t, n) {
              var r, i, o, a = e.vars, s = a[t], l = T, u = e._ctx;
              if (s)
                  return r = a[t + "Params"],
                  i = a.callbackScope || e,
                  n && ed.length && ek(),
                  u && (T = u),
                  o = r ? s.apply(i, r) : s.call(i),
                  T = l,
                  o
          }, t_ = function(e) {
              return ez(e),
              e.scrollTrigger && e.scrollTrigger.kill(!!b),
              1 > e.progress() && tp(e, "onInterrupt"),
              e
          }, tm = function(e) {
              var t = (e = !e.name && e.default || e).name
                , n = z(e)
                , r = t && !n && e.init ? function() {
                  this._props = []
              }
              : e
                , i = {
                  init: el,
                  render: no,
                  add: tZ,
                  kill: ns,
                  modifier: na,
                  rawVars: 0
              }
                , o = {
                  targetTest: 0,
                  get: 0,
                  getSetter: nt,
                  aliases: {},
                  register: 0
              };
              if (tx(),
              e !== r) {
                  if (e_[t])
                      return;
                  eL(r, eL(eD(e, i), o)),
                  eO(r.prototype, eO(i, eD(e, o))),
                  e_[r.prop = t] = r,
                  e.targetTest && (eg.push(r),
                  eh[t] = 1),
                  t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
              }
              es(t, r),
              e.register && e.register(nS, r, nc)
          }, tv = {
              aqua: [0, 255, 255],
              lime: [0, 255, 0],
              silver: [192, 192, 192],
              black: [0, 0, 0],
              maroon: [128, 0, 0],
              teal: [0, 128, 128],
              blue: [0, 0, 255],
              navy: [0, 0, 128],
              white: [255, 255, 255],
              olive: [128, 128, 0],
              yellow: [255, 255, 0],
              orange: [255, 165, 0],
              gray: [128, 128, 128],
              purple: [128, 0, 128],
              green: [0, 128, 0],
              red: [255, 0, 0],
              pink: [255, 192, 203],
              cyan: [0, 255, 255],
              transparent: [255, 255, 255, 0]
          }, tg = function(e, t, n) {
              return (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (n - t) * e * 6 : e < .5 ? n : 3 * e < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * 255 + .5 | 0
          }, ty = function(e, t, n) {
              var r, i, o, a, s, l, u, c, f, h, d = e ? F(e) ? [e >> 16, e >> 8 & 255, 255 & e] : 0 : tv.black;
              if (!d) {
                  if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)),
                  tv[e])
                      d = tv[e];
                  else if ("#" === e.charAt(0)) {
                      if (e.length < 6 && (e = "#" + (r = e.charAt(1)) + r + (i = e.charAt(2)) + i + (o = e.charAt(3)) + o + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")),
                      9 === e.length)
                          return [(d = parseInt(e.substr(1, 6), 16)) >> 16, d >> 8 & 255, 255 & d, parseInt(e.substr(7), 16) / 255];
                      d = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e]
                  } else if ("hsl" === e.substr(0, 3)) {
                      if (d = h = e.match(K),
                      t) {
                          if (~e.indexOf("="))
                              return d = e.match(Z),
                              n && d.length < 4 && (d[3] = 1),
                              d
                      } else
                          a = +d[0] % 360 / 360,
                          s = +d[1] / 100,
                          i = (l = +d[2] / 100) <= .5 ? l * (s + 1) : l + s - l * s,
                          r = 2 * l - i,
                          d.length > 3 && (d[3] *= 1),
                          d[0] = tg(a + 1 / 3, r, i),
                          d[1] = tg(a, r, i),
                          d[2] = tg(a - 1 / 3, r, i)
                  } else
                      d = e.match(K) || tv.transparent;
                  d = d.map(Number)
              }
              return t && !h && (r = d[0] / 255,
              i = d[1] / 255,
              o = d[2] / 255,
              l = ((u = Math.max(r, i, o)) + (c = Math.min(r, i, o))) / 2,
              u === c ? a = s = 0 : (f = u - c,
              s = l > .5 ? f / (2 - u - c) : f / (u + c),
              a = (u === r ? (i - o) / f + (i < o ? 6 : 0) : u === i ? (o - r) / f + 2 : (r - i) / f + 4) * 60),
              d[0] = ~~(a + .5),
              d[1] = ~~(100 * s + .5),
              d[2] = ~~(100 * l + .5)),
              n && d.length < 4 && (d[3] = 1),
              d
          }, tw = function(e) {
              var t = []
                , n = []
                , r = -1;
              return e.split(tT).forEach(function(e) {
                  var i = e.match(X) || [];
                  t.push.apply(t, i),
                  n.push(r += i.length + 1)
              }),
              t.c = n,
              t
          }, tb = function(e, t, n) {
              var r, i, o, a, s = "", l = (e + s).match(tT), u = t ? "hsla(" : "rgba(", c = 0;
              if (!l)
                  return e;
              if (l = l.map(function(e) {
                  return (e = ty(e, t, 1)) && u + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
              }),
              n && (o = tw(e),
              (r = n.c).join(s) !== o.c.join(s)))
                  for (a = (i = e.replace(tT, "1").split(X)).length - 1; c < a; c++)
                      s += i[c] + (~r.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (o.length ? o : l.length ? l : n).shift());
              if (!i)
                  for (a = (i = e.split(tT)).length - 1; c < a; c++)
                      s += i[c] + l[c];
              return s + i[a]
          }, tT = function() {
              var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
              for (e in tv)
                  t += "|" + e + "\\b";
              return RegExp(t + ")", "gi")
          }(), tS = /hsl[a]?\(/, tR = function(e) {
              var t, n = e.join(" ");
              if (tT.lastIndex = 0,
              tT.test(n))
                  return t = tS.test(n),
                  e[1] = tb(e[1], t),
                  e[0] = tb(e[0], t, tw(e[1])),
                  !0
          }, tA = (h = 500,
          d = 33,
          _ = p = (f = Date.now)(),
          m = 1e3 / 240,
          v = 1e3 / 240,
          g = [],
          y = function e(t) {
              var n, r, i, s, y = f() - _, w = !0 === t;
              if (y > h && (p += y - d),
              _ += y,
              ((n = (i = _ - p) - v) > 0 || w) && (s = ++l.frame,
              u = i - 1e3 * l.time,
              l.time = i /= 1e3,
              v += n + (n >= m ? 4 : m - n),
              r = 1),
              w || (o = a(e)),
              r)
                  for (c = 0; c < g.length; c++)
                      g[c](i, u, s, t)
          }
          ,
          l = {
              time: 0,
              frame: 0,
              tick: function() {
                  y(!0)
              },
              deltaRatio: function(e) {
                  return u / (1e3 / (e || 60))
              },
              wake: function() {
                  E && (!A && G() && (x = (R = A = window).document || {},
                  en.gsap = nS,
                  (R.gsapVersions || (R.gsapVersions = [])).push(nS.version),
                  ei(er || R.GreenSockGlobals || !R.gsap && R || {}),
                  s = R.requestAnimationFrame),
                  o && l.sleep(),
                  a = s || function(e) {
                      return setTimeout(e, v - 1e3 * l.time + 1 | 0)
                  }
                  ,
                  M = 1,
                  y(2))
              },
              sleep: function() {
                  (s ? R.cancelAnimationFrame : clearTimeout)(o),
                  M = 0,
                  a = el
              },
              lagSmoothing: function(e, t) {
                  d = Math.min(t || 33, h = e || 1 / 0)
              },
              fps: function(e) {
                  m = 1e3 / (e || 240),
                  v = 1e3 * l.time + m
              },
              add: function(e, t, n) {
                  var r = t ? function(t, n, i, o) {
                      e(t, n, i, o),
                      l.remove(r)
                  }
                  : e;
                  return l.remove(e),
                  g[n ? "unshift" : "push"](r),
                  tx(),
                  r
              },
              remove: function(e, t) {
                  ~(t = g.indexOf(e)) && g.splice(t, 1) && c >= t && c--
              },
              _listeners: g
          }), tx = function() {
              return !M && tA.wake()
          }, tE = {}, tk = /^[\d.\-M][\d.\-,\s]/, tN = /["']/g, tM = function(e) {
              for (var t, n, r, i = {}, o = e.substr(1, e.length - 3).split(":"), a = o[0], s = 1, l = o.length; s < l; s++)
                  n = o[s],
                  t = s !== l - 1 ? n.lastIndexOf(",") : n.length,
                  r = n.substr(0, t),
                  i[a] = isNaN(r) ? r.replace(tN, "").trim() : +r,
                  a = n.substr(t + 1).trim();
              return i
          }, tC = function(e) {
              var t = e.indexOf("(") + 1
                , n = e.indexOf(")")
                , r = e.indexOf("(", t);
              return e.substring(t, ~r && r < n ? e.indexOf(")", n + 1) : n)
          }, tL = function(e) {
              var t = (e + "").split("(")
                , n = tE[t[0]];
              return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [tM(t[1])] : tC(e).split(",").map(eM)) : tE._CE && tk.test(e) ? tE._CE("", e) : n
          }, tO = function(e) {
              return function(t) {
                  return 1 - e(1 - t)
              }
          }, tP = function e(t, n) {
              for (var r, i = t._first; i; )
                  i instanceof tj ? e(i, n) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === n || (i.timeline ? e(i.timeline, n) : (r = i._ease,
                  i._ease = i._yEase,
                  i._yEase = r,
                  i._yoyo = n)),
                  i = i._next
          }, tD = function(e, t) {
              return e && (z(e) ? e : tE[e] || tL(e)) || t
          }, tV = function(e, t, n, r) {
              void 0 === n && (n = function(e) {
                  return 1 - t(1 - e)
              }
              ),
              void 0 === r && (r = function(e) {
                  return e < .5 ? t(2 * e) / 2 : 1 - t((1 - e) * 2) / 2
              }
              );
              var i, o = {
                  easeIn: t,
                  easeOut: n,
                  easeInOut: r
              };
              return eS(e, function(e) {
                  for (var t in tE[e] = en[e] = o,
                  tE[i = e.toLowerCase()] = n,
                  o)
                      tE[i + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = tE[e + "." + t] = o[t]
              }),
              o
          }, tI = function(e) {
              return function(t) {
                  return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e((t - .5) * 2) / 2
              }
          }, tB = function e(t, n, r) {
              var i = n >= 1 ? n : 1
                , o = (r || (t ? .3 : .45)) / (n < 1 ? n : 1)
                , a = o / O * (Math.asin(1 / i) || 0)
                , s = function(e) {
                  return 1 === e ? 1 : i * Math.pow(2, -10 * e) * B((e - a) * o) + 1
              }
                , l = "out" === t ? s : "in" === t ? function(e) {
                  return 1 - s(1 - e)
              }
              : tI(s);
              return o = O / o,
              l.config = function(n, r) {
                  return e(t, n, r)
              }
              ,
              l
          }, tU = function e(t, n) {
              void 0 === n && (n = 1.70158);
              var r = function(e) {
                  return e ? --e * e * ((n + 1) * e + n) + 1 : 0
              }
                , i = "out" === t ? r : "in" === t ? function(e) {
                  return 1 - r(1 - e)
              }
              : tI(r);
              return i.config = function(n) {
                  return e(t, n)
              }
              ,
              i
          };
          eS("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
              var n = t < 5 ? t + 1 : t;
              tV(e + ",Power" + (n - 1), t ? function(e) {
                  return Math.pow(e, n)
              }
              : function(e) {
                  return e
              }
              , function(e) {
                  return 1 - Math.pow(1 - e, n)
              }, function(e) {
                  return e < .5 ? Math.pow(2 * e, n) / 2 : 1 - Math.pow((1 - e) * 2, n) / 2
              })
          }),
          tE.Linear.easeNone = tE.none = tE.Linear.easeIn,
          tV("Elastic", tB("in"), tB("out"), tB()),
          t$ = 2 * (tW = 1 / 2.75),
          tG = 2.5 * tW,
          tV("Bounce", function(e) {
              return 1 - tq(1 - e)
          }, tq = function(e) {
              return e < tW ? 7.5625 * e * e : e < t$ ? 7.5625 * Math.pow(e - 1.5 / 2.75, 2) + .75 : e < tG ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * Math.pow(e - 2.625 / 2.75, 2) + .984375
          }
          ),
          tV("Expo", function(e) {
              return e ? Math.pow(2, 10 * (e - 1)) : 0
          }),
          tV("Circ", function(e) {
              return -(V(1 - e * e) - 1)
          }),
          tV("Sine", function(e) {
              return 1 === e ? 1 : -I(e * P) + 1
          }),
          tV("Back", tU("in"), tU("out"), tU()),
          tE.SteppedEase = tE.steps = en.SteppedEase = {
              config: function(e, t) {
                  void 0 === e && (e = 1);
                  var n = 1 / e
                    , r = e + (t ? 0 : 1)
                    , i = t ? 1 : 0;
                  return function(e) {
                      return ((r * e7(0, .99999999, e) | 0) + i) * n
                  }
              }
          },
          L.ease = tE["quad.out"],
          eS("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
              return ey += e + "," + e + "Params,"
          });
          var tz = function(e, t) {
              this.id = D++,
              e._gsap = this,
              this.target = e,
              this.harness = t,
              this.get = t ? t.get : eT,
              this.set = t ? t.getSetter : nt
          }
            , tF = function() {
              function e(e) {
                  this.vars = e,
                  this._delay = +e.delay || 0,
                  (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0,
                  this._yoyo = !!e.yoyo || !!e.yoyoEase),
                  this._ts = 1,
                  e5(this, +e.duration, 1, 1),
                  this.data = e.data,
                  T && (this._ctx = T,
                  T.data.push(this)),
                  M || tA.wake()
              }
              var t = e.prototype;
              return t.delay = function(e) {
                  return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay),
                  this._delay = e,
                  this) : this._delay
              }
              ,
              t.duration = function(e) {
                  return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
              }
              ,
              t.totalDuration = function(e) {
                  return arguments.length ? (this._dirty = 0,
                  e5(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
              }
              ,
              t.totalTime = function(e, t) {
                  if (tx(),
                  !arguments.length)
                      return this._tTime;
                  var n = this._dp;
                  if (n && n.smoothChildTiming && this._ts) {
                      for (eH(this, e),
                      !n._dp || n.parent || eK(n, this); n && n.parent; )
                          n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : -((n.totalDuration() - n._tTime) / n._ts)) && n.totalTime(n._tTime, !0),
                          n = n.parent;
                      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && eZ(this._dp, this, this._start - this._delay)
                  }
                  return this._tTime === e && (this._dur || t) && (!this._initted || 1e-8 !== Math.abs(this._zTime)) && (e || this._initted || !this.add && !this._ptLookup) || (this._ts || (this._pTime = e),
                  eN(this, e, t)),
                  this
              }
              ,
              t.time = function(e, t) {
                  return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + e$(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
              }
              ,
              t.totalProgress = function(e, t) {
                  return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
              }
              ,
              t.progress = function(e, t) {
                  return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(1 & this.iteration()) ? 1 - e : e) + e$(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
              }
              ,
              t.iteration = function(e, t) {
                  var n = this.duration() + this._rDelay;
                  return arguments.length ? this.totalTime(this._time + (e - 1) * n, t) : this._repeat ? eG(this._tTime, n) + 1 : 1
              }
              ,
              t.timeScale = function(e) {
                  if (!arguments.length)
                      return -.00000001 === this._rts ? 0 : this._rts;
                  if (this._rts === e)
                      return this;
                  var t = this.parent && this._ts ? eq(this.parent._time, this) : this._tTime;
                  return this._rts = +e || 0,
                  this._ts = this._ps || -.00000001 === e ? 0 : this._rts,
                  this.totalTime(e7(-this._delay, this._tDur, t), !0),
                  eY(this),
                  ej(this)
              }
              ,
              t.paused = function(e) {
                  return arguments.length ? (this._ps !== e && (this._ps = e,
                  e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
                  this._ts = this._act = 0) : (tx(),
                  this._ts = this._rts,
                  this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))),
                  this) : this._ps
              }
              ,
              t.startTime = function(e) {
                  if (arguments.length) {
                      this._start = e;
                      var t = this.parent || this._dp;
                      return t && (t._sort || !this.parent) && eZ(t, this, e - this._delay),
                      this
                  }
                  return this._start
              }
              ,
              t.endTime = function(e) {
                  return this._start + ($(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
              }
              ,
              t.rawTime = function(e) {
                  var t = this.parent || this._dp;
                  return t ? e && (!this._ts || this._repeat && this._time && 1 > this.totalProgress()) ? this._tTime % (this._dur + this._rDelay) : this._ts ? eq(t.rawTime(e), this) : this._tTime : this._tTime
              }
              ,
              t.revert = function(e) {
                  void 0 === e && (e = ef);
                  var t = b;
                  return b = e,
                  (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e),
                  this.totalTime(-.01, e.suppressEvents)),
                  "nested" !== this.data && !1 !== e.kill && this.kill(),
                  b = t,
                  this
              }
              ,
              t.globalTime = function(e) {
                  for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
                      n = t._start + n / (t._ts || 1),
                      t = t._dp;
                  return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(e) : n
              }
              ,
              t.repeat = function(e) {
                  return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e,
                  e3(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
              }
              ,
              t.repeatDelay = function(e) {
                  if (arguments.length) {
                      var t = this._time;
                      return this._rDelay = e,
                      e3(this),
                      t ? this.time(t) : this
                  }
                  return this._rDelay
              }
              ,
              t.yoyo = function(e) {
                  return arguments.length ? (this._yoyo = e,
                  this) : this._yoyo
              }
              ,
              t.seek = function(e, t) {
                  return this.totalTime(e4(this, e), $(t))
              }
              ,
              t.restart = function(e, t) {
                  return this.play().totalTime(e ? -this._delay : 0, $(t))
              }
              ,
              t.play = function(e, t) {
                  return null != e && this.seek(e, t),
                  this.reversed(!1).paused(!1)
              }
              ,
              t.reverse = function(e, t) {
                  return null != e && this.seek(e || this.totalDuration(), t),
                  this.reversed(!0).paused(!1)
              }
              ,
              t.pause = function(e, t) {
                  return null != e && this.seek(e, t),
                  this.paused(!0)
              }
              ,
              t.resume = function() {
                  return this.paused(!1)
              }
              ,
              t.reversed = function(e) {
                  return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -.00000001 : 0)),
                  this) : this._rts < 0
              }
              ,
              t.invalidate = function() {
                  return this._initted = this._act = 0,
                  this._zTime = -.00000001,
                  this
              }
              ,
              t.isActive = function() {
                  var e, t = this.parent || this._dp, n = this._start;
                  return !!(!t || this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= n && e < this.endTime(!0) - 1e-8)
              }
              ,
              t.eventCallback = function(e, t, n) {
                  var r = this.vars;
                  return arguments.length > 1 ? (t ? (r[e] = t,
                  n && (r[e + "Params"] = n),
                  "onUpdate" === e && (this._onUpdate = t)) : delete r[e],
                  this) : r[e]
              }
              ,
              t.then = function(e) {
                  var t = this;
                  return new Promise(function(n) {
                      var r = z(e) ? e : eC
                        , i = function() {
                          var e = t.then;
                          t.then = null,
                          z(r) && (r = r(t)) && (r.then || r === t) && (t.then = e),
                          n(r),
                          t.then = e
                      };
                      t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? i() : t._prom = i
                  }
                  )
              }
              ,
              t.kill = function() {
                  t_(this)
              }
              ,
              e
          }();
          eL(tF.prototype, {
              _time: 0,
              _start: 0,
              _end: 0,
              _tTime: 0,
              _tDur: 0,
              _dirty: 0,
              _repeat: 0,
              _yoyo: !1,
              parent: null,
              _initted: !1,
              _rDelay: 0,
              _ts: 1,
              _dp: 0,
              ratio: 0,
              _zTime: -.00000001,
              _prom: 0,
              _ps: !1,
              _rts: 1
          });
          var tj = function(e) {
              function t(t, n) {
                  var i;
                  return void 0 === t && (t = {}),
                  (i = e.call(this, t) || this).labels = {},
                  i.smoothChildTiming = !!t.smoothChildTiming,
                  i.autoRemoveChildren = !!t.autoRemoveChildren,
                  i._sort = $(t.sortChildren),
                  S && eZ(t.parent || S, r(i), n),
                  t.reversed && i.reverse(),
                  t.paused && i.paused(!0),
                  t.scrollTrigger && eX(r(i), t.scrollTrigger),
                  i
              }
              i(t, e);
              var n = t.prototype;
              return n.to = function(e, t, n) {
                  return e9(0, arguments, this),
                  this
              }
              ,
              n.from = function(e, t, n) {
                  return e9(1, arguments, this),
                  this
              }
              ,
              n.fromTo = function(e, t, n, r) {
                  return e9(2, arguments, this),
                  this
              }
              ,
              n.set = function(e, t, n) {
                  return t.duration = 0,
                  t.parent = this,
                  eV(t).repeatDelay || (t.repeat = 0),
                  t.immediateRender = !!t.immediateRender,
                  new t4(e,t,e4(this, n),1),
                  this
              }
              ,
              n.call = function(e, t, n) {
                  return eZ(this, t4.delayedCall(0, e, t), n)
              }
              ,
              n.staggerTo = function(e, t, n, r, i, o, a) {
                  return n.duration = t,
                  n.stagger = n.stagger || r,
                  n.onComplete = o,
                  n.onCompleteParams = a,
                  n.parent = this,
                  new t4(e,n,e4(this, i)),
                  this
              }
              ,
              n.staggerFrom = function(e, t, n, r, i, o, a) {
                  return n.runBackwards = 1,
                  eV(n).immediateRender = $(n.immediateRender),
                  this.staggerTo(e, t, n, r, i, o, a)
              }
              ,
              n.staggerFromTo = function(e, t, n, r, i, o, a, s) {
                  return r.startAt = n,
                  eV(r).immediateRender = $(r.immediateRender),
                  this.staggerTo(e, t, r, i, o, a, s)
              }
              ,
              n.render = function(e, t, n) {
                  var r, i, o, a, s, l, u, c, f, h, d, p, _ = this._time, m = this._dirty ? this.totalDuration() : this._tDur, v = this._dur, g = e <= 0 ? 0 : eA(e), y = this._zTime < 0 != e < 0 && (this._initted || !v);
                  if (this !== S && g > m && e >= 0 && (g = m),
                  g !== this._tTime || n || y) {
                      if (_ !== this._time && v && (g += this._time - _,
                      e += this._time - _),
                      r = g,
                      f = this._start,
                      l = !(c = this._ts),
                      y && (v || (_ = this._zTime),
                      (e || !t) && (this._zTime = e)),
                      this._repeat) {
                          if (d = this._yoyo,
                          s = v + this._rDelay,
                          this._repeat < -1 && e < 0)
                              return this.totalTime(100 * s + e, t, n);
                          if (r = eA(g % s),
                          g === m ? (a = this._repeat,
                          r = v) : ((a = ~~(g / s)) && a === g / s && (r = v,
                          a--),
                          r > v && (r = v)),
                          h = eG(this._tTime, s),
                          !_ && this._tTime && h !== a && (h = a),
                          d && 1 & a && (r = v - r,
                          p = 1),
                          a !== h && !this._lock) {
                              var w = d && 1 & h
                                , T = w === (d && 1 & a);
                              if (a < h && (w = !w),
                              _ = w ? 0 : v,
                              this._lock = 1,
                              this.render(_ || (p ? 0 : eA(a * s)), t, !v)._lock = 0,
                              this._tTime = g,
                              !t && this.parent && tp(this, "onRepeat"),
                              this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
                              _ && _ !== this._time || !this._ts !== l || this.vars.onRepeat && !this.parent && !this._act || (v = this._dur,
                              m = this._tDur,
                              T && (this._lock = 2,
                              _ = w ? v : -.0001,
                              this.render(_, !0),
                              this.vars.repeatRefresh && !p && this.invalidate()),
                              this._lock = 0,
                              !this._ts && !l))
                                  return this;
                              tP(this, p)
                          }
                      }
                      if (this._hasPause && !this._forcing && this._lock < 2 && (u = e2(this, eA(_), eA(r))) && (g -= r - (r = u._start)),
                      this._tTime = g,
                      this._time = r,
                      this._act = !c,
                      this._initted || (this._onUpdate = this.vars.onUpdate,
                      this._initted = 1,
                      this._zTime = e,
                      _ = 0),
                      !_ && r && !t && (tp(this, "onStart"),
                      this._tTime !== g))
                          return this;
                      if (r >= _ && e >= 0)
                          for (i = this._first; i; ) {
                              if (o = i._next,
                              (i._act || r >= i._start) && i._ts && u !== i) {
                                  if (i.parent !== this)
                                      return this.render(e, t, n);
                                  if (i.render(i._ts > 0 ? (r - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts, t, n),
                                  r !== this._time || !this._ts && !l) {
                                      u = 0,
                                      o && (g += this._zTime = -.00000001);
                                      break
                                  }
                              }
                              i = o
                          }
                      else {
                          i = this._last;
                          for (var R = e < 0 ? e : r; i; ) {
                              if (o = i._prev,
                              (i._act || R <= i._end) && i._ts && u !== i) {
                                  if (i.parent !== this)
                                      return this.render(e, t, n);
                                  if (i.render(i._ts > 0 ? (R - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (R - i._start) * i._ts, t, n || b && (i._initted || i._startAt)),
                                  r !== this._time || !this._ts && !l) {
                                      u = 0,
                                      o && (g += this._zTime = R ? -.00000001 : 1e-8);
                                      break
                                  }
                              }
                              i = o
                          }
                      }
                      if (u && !t && (this.pause(),
                      u.render(r >= _ ? 0 : -.00000001)._zTime = r >= _ ? 1 : -1,
                      this._ts))
                          return this._start = f,
                          eY(this),
                          this.render(e, t, n);
                      this._onUpdate && !t && tp(this, "onUpdate", !0),
                      (g === m && this._tTime >= this.totalDuration() || !g && _) && (f === this._start || Math.abs(c) !== Math.abs(this._ts)) && !this._lock && ((e || !v) && (g === m && this._ts > 0 || !g && this._ts < 0) && ez(this, 1),
                      t || e < 0 && !_ || !g && !_ && m || (tp(this, g === m && e >= 0 ? "onComplete" : "onReverseComplete", !0),
                      this._prom && !(g < m && this.timeScale() > 0) && this._prom()))
                  }
                  return this
              }
              ,
              n.add = function(e, t) {
                  var n = this;
                  if (F(t) || (t = e4(this, t, e)),
                  !(e instanceof tF)) {
                      if (H(e))
                          return e.forEach(function(e) {
                              return n.add(e, t)
                          }),
                          this;
                      if (U(e))
                          return this.addLabel(e, t);
                      if (!z(e))
                          return this;
                      e = t4.delayedCall(0, e)
                  }
                  return this !== e ? eZ(this, e, t) : this
              }
              ,
              n.getChildren = function(e, t, n, r) {
                  void 0 === e && (e = !0),
                  void 0 === t && (t = !0),
                  void 0 === n && (n = !0),
                  void 0 === r && (r = -1e8);
                  for (var i = [], o = this._first; o; )
                      o._start >= r && (o instanceof t4 ? t && i.push(o) : (n && i.push(o),
                      e && i.push.apply(i, o.getChildren(!0, t, n)))),
                      o = o._next;
                  return i
              }
              ,
              n.getById = function(e) {
                  for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
                      if (t[n].vars.id === e)
                          return t[n]
              }
              ,
              n.remove = function(e) {
                  return U(e) ? this.removeLabel(e) : z(e) ? this.killTweensOf(e) : (eU(this, e),
                  e === this._recent && (this._recent = this._last),
                  eF(this))
              }
              ,
              n.totalTime = function(t, n) {
                  return arguments.length ? (this._forcing = 1,
                  !this._dp && this._ts && (this._start = eA(tA.time - (this._ts > 0 ? t / this._ts : -((this.totalDuration() - t) / this._ts)))),
                  e.prototype.totalTime.call(this, t, n),
                  this._forcing = 0,
                  this) : this._tTime
              }
              ,
              n.addLabel = function(e, t) {
                  return this.labels[e] = e4(this, t),
                  this
              }
              ,
              n.removeLabel = function(e) {
                  return delete this.labels[e],
                  this
              }
              ,
              n.addPause = function(e, t, n) {
                  var r = t4.delayedCall(0, t || el, n);
                  return r.data = "isPause",
                  this._hasPause = 1,
                  eZ(this, r, e4(this, e))
              }
              ,
              n.removePause = function(e) {
                  var t = this._first;
                  for (e = e4(this, e); t; )
                      t._start === e && "isPause" === t.data && ez(t),
                      t = t._next
              }
              ,
              n.killTweensOf = function(e, t, n) {
                  for (var r = this.getTweensOf(e, n), i = r.length; i--; )
                      tY !== r[i] && r[i].kill(e, t);
                  return this
              }
              ,
              n.getTweensOf = function(e, t) {
                  for (var n, r = [], i = tr(e), o = this._first, a = F(t); o; )
                      o instanceof t4 ? eE(o._targets, i) && (a ? (!tY || o._initted && o._ts) && o.globalTime(0) <= t && o.globalTime(o.totalDuration()) > t : !t || o.isActive()) && r.push(o) : (n = o.getTweensOf(i, t)).length && r.push.apply(r, n),
                      o = o._next;
                  return r
              }
              ,
              n.tweenTo = function(e, t) {
                  t = t || {};
                  var n, r = this, i = e4(r, e), o = t, a = o.startAt, s = o.onStart, l = o.onStartParams, u = o.immediateRender, c = t4.to(r, eL({
                      ease: t.ease || "none",
                      lazy: !1,
                      immediateRender: !1,
                      time: i,
                      overwrite: "auto",
                      duration: t.duration || Math.abs((i - (a && "time"in a ? a.time : r._time)) / r.timeScale()) || 1e-8,
                      onStart: function() {
                          if (r.pause(),
                          !n) {
                              var e = t.duration || Math.abs((i - (a && "time"in a ? a.time : r._time)) / r.timeScale());
                              c._dur !== e && e5(c, e, 0, 1).render(c._time, !0, !0),
                              n = 1
                          }
                          s && s.apply(c, l || [])
                      }
                  }, t));
                  return u ? c.render(0) : c
              }
              ,
              n.tweenFromTo = function(e, t, n) {
                  return this.tweenTo(t, eL({
                      startAt: {
                          time: e4(this, e)
                      }
                  }, n))
              }
              ,
              n.recent = function() {
                  return this._recent
              }
              ,
              n.nextLabel = function(e) {
                  return void 0 === e && (e = this._time),
                  td(this, e4(this, e))
              }
              ,
              n.previousLabel = function(e) {
                  return void 0 === e && (e = this._time),
                  td(this, e4(this, e), 1)
              }
              ,
              n.currentLabel = function(e) {
                  return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + 1e-8)
              }
              ,
              n.shiftChildren = function(e, t, n) {
                  void 0 === n && (n = 0);
                  for (var r, i = this._first, o = this.labels; i; )
                      i._start >= n && (i._start += e,
                      i._end += e),
                      i = i._next;
                  if (t)
                      for (r in o)
                          o[r] >= n && (o[r] += e);
                  return eF(this)
              }
              ,
              n.invalidate = function(t) {
                  var n = this._first;
                  for (this._lock = 0; n; )
                      n.invalidate(t),
                      n = n._next;
                  return e.prototype.invalidate.call(this, t)
              }
              ,
              n.clear = function(e) {
                  void 0 === e && (e = !0);
                  for (var t, n = this._first; n; )
                      t = n._next,
                      this.remove(n),
                      n = t;
                  return this._dp && (this._time = this._tTime = this._pTime = 0),
                  e && (this.labels = {}),
                  eF(this)
              }
              ,
              n.totalDuration = function(e) {
                  var t, n, r, i = 0, o = this, a = o._last, s = 1e8;
                  if (arguments.length)
                      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -e : e));
                  if (o._dirty) {
                      for (r = o.parent; a; )
                          t = a._prev,
                          a._dirty && a.totalDuration(),
                          (n = a._start) > s && o._sort && a._ts && !o._lock ? (o._lock = 1,
                          eZ(o, a, n - a._delay, 1)._lock = 0) : s = n,
                          n < 0 && a._ts && (i -= n,
                          (!r && !o._dp || r && r.smoothChildTiming) && (o._start += n / o._ts,
                          o._time -= n,
                          o._tTime -= n),
                          o.shiftChildren(-n, !1, -Infinity),
                          s = 0),
                          a._end > i && a._ts && (i = a._end),
                          a = t;
                      e5(o, o === S && o._time > i ? o._time : i, 1, 1),
                      o._dirty = 0
                  }
                  return o._tDur
              }
              ,
              t.updateRoot = function(e) {
                  if (S._ts && (eN(S, eq(e, S)),
                  k = tA.frame),
                  tA.frame >= ev) {
                      ev += C.autoSleep || 120;
                      var t = S._first;
                      if ((!t || !t._ts) && C.autoSleep && tA._listeners.length < 2) {
                          for (; t && !t._ts; )
                              t = t._next;
                          t || tA.sleep()
                      }
                  }
              }
              ,
              t
          }(tF);
          eL(tj.prototype, {
              _lock: 0,
              _hasPause: 0,
              _forcing: 0
          });
          var tW, t$, tG, tq, tY, tH, tK = function(e, t, n, r, i, o, a) {
              var s, l, u, c, f, h, d, p, _ = new nc(this._pt,e,t,0,1,ni,null,i), m = 0, v = 0;
              for (_.b = n,
              _.e = r,
              n += "",
              r += "",
              (d = ~r.indexOf("random(")) && (r = tf(r)),
              o && (o(p = [n, r], e, t),
              n = p[0],
              r = p[1]),
              l = n.match(Q) || []; s = Q.exec(r); )
                  c = s[0],
                  f = r.substring(m, s.index),
                  u ? u = (u + 1) % 5 : "rgba(" === f.substr(-5) && (u = 1),
                  c !== l[v++] && (h = parseFloat(l[v - 1]) || 0,
                  _._pt = {
                      _next: _._pt,
                      p: f || 1 === v ? f : ",",
                      s: h,
                      c: "=" === c.charAt(1) ? ex(h, c) - h : parseFloat(c) - h,
                      m: u && u < 4 ? Math.round : 0
                  },
                  m = Q.lastIndex);
              return _.c = m < r.length ? r.substring(m, r.length) : "",
              _.fp = a,
              (J.test(r) || d) && (_.e = 0),
              this._pt = _,
              _
          }, tZ = function(e, t, n, r, i, o, a, s, l, u) {
              z(r) && (r = r(i || 0, e, o));
              var c, f = e[t], h = "get" !== n ? n : z(f) ? l ? e[t.indexOf("set") || !z(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : f, d = z(f) ? l ? t7 : t6 : t9;
              if (U(r) && (~r.indexOf("random(") && (r = tf(r)),
              "=" === r.charAt(1) && ((c = ex(h, r) + (te(h) || 0)) || 0 === c) && (r = c)),
              !u || h !== r || tH)
                  return isNaN(h * r) || "" === r ? (f || t in e || eo(t, r),
                  tK.call(this, e, t, h, r, d, s || C.stringFilter, l)) : (c = new nc(this._pt,e,t,+h || 0,r - (h || 0),"boolean" == typeof f ? nr : nn,0,d),
                  l && (c.fp = l),
                  a && c.modifier(a, this, e),
                  this._pt = c)
          }, tX = function(e, t, n, r, i) {
              if (z(e) && (e = t5(e, i, t, n, r)),
              !W(e) || e.style && e.nodeType || H(e) || Y(e))
                  return U(e) ? t5(e, i, t, n, r) : e;
              var o, a = {};
              for (o in e)
                  a[o] = t5(e[o], i, t, n, r);
              return a
          }, tQ = function(e, t, n, r, i, o) {
              var a, s, l, u;
              if (e_[e] && !1 !== (a = new e_[e]).init(i, a.rawVars ? t[e] : tX(t[e], r, i, o, n), n, r, o) && (n._pt = s = new nc(n._pt,i,e,0,1,a.render,a,0,a.priority),
              n !== N))
                  for (l = n._ptLookup[n._targets.indexOf(i)],
                  u = a._props.length; u--; )
                      l[a._props[u]] = s;
              return a
          }, tJ = function e(t, n, r) {
              var i, o, a, s, l, u, c, f, h, d, p, _, m, v = t.vars, g = v.ease, y = v.startAt, T = v.immediateRender, R = v.lazy, A = v.onUpdate, x = v.onUpdateParams, E = v.callbackScope, k = v.runBackwards, N = v.yoyoEase, M = v.keyframes, C = v.autoRevert, O = t._dur, P = t._startAt, D = t._targets, V = t.parent, I = V && "nested" === V.data ? V.vars.targets : D, B = "auto" === t._overwrite && !w, U = t.timeline;
              if (!U || M && g || (g = "none"),
              t._ease = tD(g, L.ease),
              t._yEase = N ? tO(tD(!0 === N ? g : N, L.ease)) : 0,
              N && t._yoyo && !t._repeat && (N = t._yEase,
              t._yEase = t._ease,
              t._ease = N),
              t._from = !U && !!v.runBackwards,
              !U || M && !v.stagger) {
                  if (_ = (f = D[0] ? eb(D[0]).harness : 0) && v[f.prop],
                  i = eD(v, eh),
                  P && (P._zTime < 0 && P.progress(1),
                  n < 0 && k && T && !C ? P.render(-1, !0) : P.revert(k && O ? ec : eu),
                  P._lazy = 0),
                  y) {
                      if (ez(t._startAt = t4.set(D, eL({
                          data: "isStart",
                          overwrite: !1,
                          parent: V,
                          immediateRender: !0,
                          lazy: !P && $(R),
                          startAt: null,
                          delay: 0,
                          onUpdate: A,
                          onUpdateParams: x,
                          callbackScope: E,
                          stagger: 0
                      }, y))),
                      t._startAt._dp = 0,
                      t._startAt._sat = t,
                      n < 0 && (b || !T && !C) && t._startAt.revert(ec),
                      T && O && n <= 0 && r <= 0) {
                          n && (t._zTime = n);
                          return
                      }
                  } else if (k && O && !P) {
                      if (n && (T = !1),
                      a = eL({
                          overwrite: !1,
                          data: "isFromStart",
                          lazy: T && !P && $(R),
                          immediateRender: T,
                          stagger: 0,
                          parent: V
                      }, i),
                      _ && (a[f.prop] = _),
                      ez(t._startAt = t4.set(D, a)),
                      t._startAt._dp = 0,
                      t._startAt._sat = t,
                      n < 0 && (b ? t._startAt.revert(ec) : t._startAt.render(-1, !0)),
                      t._zTime = n,
                      T) {
                          if (!n)
                              return
                      } else
                          e(t._startAt, 1e-8, 1e-8)
                  }
                  for (o = 0,
                  t._pt = t._ptCache = 0,
                  R = O && $(R) || R && !O; o < D.length; o++) {
                      if (c = (l = D[o])._gsap || ew(D)[o]._gsap,
                      t._ptLookup[o] = d = {},
                      ep[c.id] && ed.length && ek(),
                      p = I === D ? o : I.indexOf(l),
                      f && !1 !== (h = new f).init(l, _ || i, t, p, I) && (t._pt = s = new nc(t._pt,l,h.name,0,1,h.render,h,0,h.priority),
                      h._props.forEach(function(e) {
                          d[e] = s
                      }),
                      h.priority && (u = 1)),
                      !f || _)
                          for (a in i)
                              e_[a] && (h = tQ(a, i, t, p, l, I)) ? h.priority && (u = 1) : d[a] = s = tZ.call(t, l, a, "get", i[a], p, I, 0, v.stringFilter);
                      t._op && t._op[o] && t.kill(l, t._op[o]),
                      B && t._pt && (tY = t,
                      S.killTweensOf(l, d, t.globalTime(n)),
                      m = !t.parent,
                      tY = 0),
                      t._pt && R && (ep[c.id] = 1)
                  }
                  u && nu(t),
                  t._onInit && t._onInit(t)
              }
              t._onUpdate = A,
              t._initted = (!t._op || t._pt) && !m,
              M && n <= 0 && U.render(1e8, !0, !0)
          }, t0 = function(e, t, n, r, i, o, a) {
              var s, l, u, c, f = (e._pt && e._ptCache || (e._ptCache = {}))[t];
              if (!f)
                  for (f = e._ptCache[t] = [],
                  u = e._ptLookup,
                  c = e._targets.length; c--; ) {
                      if ((s = u[c][t]) && s.d && s.d._pt)
                          for (s = s.d._pt; s && s.p !== t && s.fp !== t; )
                              s = s._next;
                      if (!s)
                          return tH = 1,
                          e.vars[t] = "+=0",
                          tJ(e, a),
                          tH = 0,
                          1;
                      f.push(s)
                  }
              for (c = f.length; c--; )
                  (s = (l = f[c])._pt || l).s = (r || 0 === r) && !i ? r : s.s + (r || 0) + o * s.c,
                  s.c = n - s.s,
                  l.e && (l.e = eR(n) + te(l.e)),
                  l.b && (l.b = s.s + te(l.b))
          }, t1 = function(e, t) {
              var n, r, i, o, a = e[0] ? eb(e[0]).harness : 0, s = a && a.aliases;
              if (!s)
                  return t;
              for (r in n = eO({}, t),
              s)
                  if (r in n)
                      for (i = (o = s[r].split(",")).length; i--; )
                          n[o[i]] = n[r];
              return n
          }, t2 = function(e, t, n, r) {
              var i, o, a = t.ease || r || "power1.inOut";
              if (H(t))
                  o = n[e] || (n[e] = []),
                  t.forEach(function(e, n) {
                      return o.push({
                          t: n / (t.length - 1) * 100,
                          v: e,
                          e: a
                      })
                  });
              else
                  for (i in t)
                      o = n[i] || (n[i] = []),
                      "ease" === i || o.push({
                          t: parseFloat(e),
                          v: t[i],
                          e: a
                      })
          }, t5 = function(e, t, n, r, i) {
              return z(e) ? e.call(t, n, r, i) : U(e) && ~e.indexOf("random(") ? tf(e) : e
          }, t3 = ey + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", t8 = {};
          eS(t3 + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
              return t8[e] = 1
          });
          var t4 = function(e) {
              function t(t, n, i, o) {
                  "number" == typeof n && (i.duration = n,
                  n = i,
                  i = null);
                  var a, s, l, u, c, f, h, d, p, _ = (a = e.call(this, o ? n : eV(n)) || this).vars, m = _.duration, v = _.delay, g = _.immediateRender, y = _.stagger, b = _.overwrite, T = _.keyframes, R = _.defaults, A = _.scrollTrigger, x = _.yoyoEase, E = n.parent || S, k = (H(t) || Y(t) ? F(t[0]) : "length"in n) ? [t] : tr(t);
                  if (a._targets = k.length ? ew(k) : ea("GSAP target " + t + " not found. https://greensock.com", !C.nullTargetWarn) || [],
                  a._ptLookup = [],
                  a._overwrite = b,
                  T || y || q(m) || q(v)) {
                      if (n = a.vars,
                      (s = a.timeline = new tj({
                          data: "nested",
                          defaults: R || {},
                          targets: E && "nested" === E.data ? E.vars.targets : k
                      })).kill(),
                      s.parent = s._dp = r(a),
                      s._start = 0,
                      y || q(m) || q(v)) {
                          if (c = k.length,
                          d = y && ta(y),
                          W(y))
                              for (f in y)
                                  ~t3.indexOf(f) && (p || (p = {}),
                                  p[f] = y[f]);
                          for (l = 0; l < c; l++)
                              (u = eD(n, t8)).stagger = 0,
                              x && (u.yoyoEase = x),
                              p && eO(u, p),
                              h = k[l],
                              u.duration = +t5(m, r(a), l, h, k),
                              u.delay = (+t5(v, r(a), l, h, k) || 0) - a._delay,
                              !y && 1 === c && u.delay && (a._delay = v = u.delay,
                              a._start += v,
                              u.delay = 0),
                              s.to(h, u, d ? d(l, h, k) : 0),
                              s._ease = tE.none;
                          s.duration() ? m = v = 0 : a.timeline = 0
                      } else if (T) {
                          eV(eL(s.vars.defaults, {
                              ease: "none"
                          })),
                          s._ease = tD(T.ease || n.ease || "none");
                          var N, M, L, O = 0;
                          if (H(T))
                              T.forEach(function(e) {
                                  return s.to(k, e, ">")
                              }),
                              s.duration();
                          else {
                              for (f in u = {},
                              T)
                                  "ease" === f || "easeEach" === f || t2(f, T[f], u, T.easeEach);
                              for (f in u)
                                  for (l = 0,
                                  N = u[f].sort(function(e, t) {
                                      return e.t - t.t
                                  }),
                                  O = 0; l < N.length; l++)
                                      (L = {
                                          ease: (M = N[l]).e,
                                          duration: (M.t - (l ? N[l - 1].t : 0)) / 100 * m
                                      })[f] = M.v,
                                      s.to(k, L, O),
                                      O += L.duration;
                              s.duration() < m && s.to({}, {
                                  duration: m - s.duration()
                              })
                          }
                      }
                      m || a.duration(m = s.duration())
                  } else
                      a.timeline = 0;
                  return !0 !== b || w || (tY = r(a),
                  S.killTweensOf(k),
                  tY = 0),
                  eZ(E, r(a), i),
                  n.reversed && a.reverse(),
                  n.paused && a.paused(!0),
                  (g || !m && !T && a._start === eA(E._time) && $(g) && function e(t) {
                      return !t || t._ts && e(t.parent)
                  }(r(a)) && "nested" !== E.data) && (a._tTime = -.00000001,
                  a.render(Math.max(0, -v) || 0)),
                  A && eX(r(a), A),
                  a
              }
              i(t, e);
              var n = t.prototype;
              return n.render = function(e, t, n) {
                  var r, i, o, a, s, l, u, c, f, h = this._time, d = this._tDur, p = this._dur, _ = e < 0, m = e > d - 1e-8 && !_ ? d : e < 1e-8 ? 0 : e;
                  if (p) {
                      if (m !== this._tTime || !e || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== _) {
                          if (r = m,
                          c = this.timeline,
                          this._repeat) {
                              if (a = p + this._rDelay,
                              this._repeat < -1 && _)
                                  return this.totalTime(100 * a + e, t, n);
                              if (r = eA(m % a),
                              m === d ? (o = this._repeat,
                              r = p) : ((o = ~~(m / a)) && o === m / a && (r = p,
                              o--),
                              r > p && (r = p)),
                              (l = this._yoyo && 1 & o) && (f = this._yEase,
                              r = p - r),
                              s = eG(this._tTime, a),
                              r === h && !n && this._initted)
                                  return this._tTime = m,
                                  this;
                              o === s || (c && this._yEase && tP(c, l),
                              !this.vars.repeatRefresh || l || this._lock || (this._lock = n = 1,
                              this.render(eA(a * o), !0).invalidate()._lock = 0))
                          }
                          if (!this._initted) {
                              if (eQ(this, _ ? e : r, n, t, m))
                                  return this._tTime = 0,
                                  this;
                              if (h !== this._time)
                                  return this;
                              if (p !== this._dur)
                                  return this.render(e, t, n)
                          }
                          if (this._tTime = m,
                          this._time = r,
                          !this._act && this._ts && (this._act = 1,
                          this._lazy = 0),
                          this.ratio = u = (f || this._ease)(r / p),
                          this._from && (this.ratio = u = 1 - u),
                          r && !h && !t && (tp(this, "onStart"),
                          this._tTime !== m))
                              return this;
                          for (i = this._pt; i; )
                              i.r(u, i.d),
                              i = i._next;
                          c && c.render(e < 0 ? e : !r && l ? -.00000001 : c._dur * c._ease(r / this._dur), t, n) || this._startAt && (this._zTime = e),
                          this._onUpdate && !t && (_ && eW(this, e, t, n),
                          tp(this, "onUpdate")),
                          this._repeat && o !== s && this.vars.onRepeat && !t && this.parent && tp(this, "onRepeat"),
                          (m === this._tDur || !m) && this._tTime === m && (_ && !this._onUpdate && eW(this, e, !0, !0),
                          (e || !p) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && ez(this, 1),
                          !t && !(_ && !h) && (m || h || l) && (tp(this, m === d ? "onComplete" : "onReverseComplete", !0),
                          this._prom && !(m < d && this.timeScale() > 0) && this._prom()))
                      }
                  } else
                      e1(this, e, t, n);
                  return this
              }
              ,
              n.targets = function() {
                  return this._targets
              }
              ,
              n.invalidate = function(t) {
                  return t && this.vars.runBackwards || (this._startAt = 0),
                  this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
                  this._ptLookup = [],
                  this.timeline && this.timeline.invalidate(t),
                  e.prototype.invalidate.call(this, t)
              }
              ,
              n.resetTo = function(e, t, n, r) {
                  M || tA.wake(),
                  this._ts || this.play();
                  var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                  return (this._initted || tJ(this, i),
                  t0(this, e, t, n, r, this._ease(i / this._dur), i)) ? this.resetTo(e, t, n, r) : (eH(this, 0),
                  this.parent || eB(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
                  this.render(0))
              }
              ,
              n.kill = function(e, t) {
                  if (void 0 === t && (t = "all"),
                  !e && (!t || "all" === t))
                      return this._lazy = this._pt = 0,
                      this.parent ? t_(this) : this;
                  if (this.timeline) {
                      var n = this.timeline.totalDuration();
                      return this.timeline.killTweensOf(e, t, tY && !0 !== tY.vars.overwrite)._first || t_(this),
                      this.parent && n !== this.timeline.totalDuration() && e5(this, this._dur * this.timeline._tDur / n, 0, 1),
                      this
                  }
                  var r, i, o, a, s, l, u, c = this._targets, f = e ? tr(e) : c, h = this._ptLookup, d = this._pt;
                  if ((!t || "all" === t) && eI(c, f))
                      return "all" === t && (this._pt = 0),
                      t_(this);
                  for (r = this._op = this._op || [],
                  "all" !== t && (U(t) && (s = {},
                  eS(t, function(e) {
                      return s[e] = 1
                  }),
                  t = s),
                  t = t1(c, t)),
                  u = c.length; u--; )
                      if (~f.indexOf(c[u]))
                          for (s in i = h[u],
                          "all" === t ? (r[u] = t,
                          a = i,
                          o = {}) : (o = r[u] = r[u] || {},
                          a = t),
                          a)
                              (l = i && i[s]) && ("kill"in l.d && !0 !== l.d.kill(s) || eU(this, l, "_pt"),
                              delete i[s]),
                              "all" !== o && (o[s] = 1);
                  return this._initted && !this._pt && d && t_(this),
                  this
              }
              ,
              t.to = function(e, n) {
                  return new t(e,n,arguments[2])
              }
              ,
              t.from = function(e, t) {
                  return e9(1, arguments)
              }
              ,
              t.delayedCall = function(e, n, r, i) {
                  return new t(n,0,{
                      immediateRender: !1,
                      lazy: !1,
                      overwrite: !1,
                      delay: e,
                      onComplete: n,
                      onReverseComplete: n,
                      onCompleteParams: r,
                      onReverseCompleteParams: r,
                      callbackScope: i
                  })
              }
              ,
              t.fromTo = function(e, t, n) {
                  return e9(2, arguments)
              }
              ,
              t.set = function(e, n) {
                  return n.duration = 0,
                  n.repeatDelay || (n.repeat = 0),
                  new t(e,n)
              }
              ,
              t.killTweensOf = function(e, t, n) {
                  return S.killTweensOf(e, t, n)
              }
              ,
              t
          }(tF);
          eL(t4.prototype, {
              _targets: [],
              _lazy: 0,
              _startAt: 0,
              _op: 0,
              _onInit: 0
          }),
          eS("staggerTo,staggerFrom,staggerFromTo", function(e) {
              t4[e] = function() {
                  var t = new tj
                    , n = tt.call(arguments, 0);
                  return n.splice("staggerFromTo" === e ? 5 : 4, 0, 0),
                  t[e].apply(t, n)
              }
          });
          var t9 = function(e, t, n) {
              return e[t] = n
          }
            , t6 = function(e, t, n) {
              return e[t](n)
          }
            , t7 = function(e, t, n, r) {
              return e[t](r.fp, n)
          }
            , ne = function(e, t, n) {
              return e.setAttribute(t, n)
          }
            , nt = function(e, t) {
              return z(e[t]) ? t6 : j(e[t]) && e.setAttribute ? ne : t9
          }
            , nn = function(e, t) {
              return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
          }
            , nr = function(e, t) {
              return t.set(t.t, t.p, !!(t.s + t.c * e), t)
          }
            , ni = function(e, t) {
              var n = t._pt
                , r = "";
              if (!e && t.b)
                  r = t.b;
              else if (1 === e && t.e)
                  r = t.e;
              else {
                  for (; n; )
                      r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + r,
                      n = n._next;
                  r += t.c
              }
              t.set(t.t, t.p, r, t)
          }
            , no = function(e, t) {
              for (var n = t._pt; n; )
                  n.r(e, n.d),
                  n = n._next
          }
            , na = function(e, t, n, r) {
              for (var i, o = this._pt; o; )
                  i = o._next,
                  o.p === r && o.modifier(e, t, n),
                  o = i
          }
            , ns = function(e) {
              for (var t, n, r = this._pt; r; )
                  n = r._next,
                  (r.p !== e || r.op) && r.op !== e ? r.dep || (t = 1) : eU(this, r, "_pt"),
                  r = n;
              return !t
          }
            , nl = function(e, t, n, r) {
              r.mSet(e, t, r.m.call(r.tween, n, r.mt), r)
          }
            , nu = function(e) {
              for (var t, n, r, i, o = e._pt; o; ) {
                  for (t = o._next,
                  n = r; n && n.pr > o.pr; )
                      n = n._next;
                  (o._prev = n ? n._prev : i) ? o._prev._next = o : r = o,
                  (o._next = n) ? n._prev = o : i = o,
                  o = t
              }
              e._pt = r
          }
            , nc = function() {
              function e(e, t, n, r, i, o, a, s, l) {
                  this.t = t,
                  this.s = r,
                  this.c = i,
                  this.p = n,
                  this.r = o || nn,
                  this.d = a || this,
                  this.set = s || t9,
                  this.pr = l || 0,
                  this._next = e,
                  e && (e._prev = this)
              }
              return e.prototype.modifier = function(e, t, n) {
                  this.mSet = this.mSet || this.set,
                  this.set = nl,
                  this.m = e,
                  this.mt = n,
                  this.tween = t
              }
              ,
              e
          }();
          eS(ey + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(e) {
              return eh[e] = 1
          }),
          en.TweenMax = en.TweenLite = t4,
          en.TimelineLite = en.TimelineMax = tj,
          S = new tj({
              sortChildren: !1,
              defaults: L,
              autoRemoveChildren: !0,
              id: "root",
              smoothChildTiming: !0
          }),
          C.stringFilter = tR;
          var nf = []
            , nh = {}
            , nd = []
            , np = 0
            , n_ = function(e) {
              return (nh[e] || nd).map(function(e) {
                  return e()
              })
          }
            , nm = function() {
              var e = Date.now()
                , t = [];
              e - np > 2 && (n_("matchMediaInit"),
              nf.forEach(function(e) {
                  var n, r, i, o, a = e.queries, s = e.conditions;
                  for (r in a)
                      (n = R.matchMedia(a[r]).matches) && (i = 1),
                      n !== s[r] && (s[r] = n,
                      o = 1);
                  o && (e.revert(),
                  i && t.push(e))
              }),
              n_("matchMediaRevert"),
              t.forEach(function(e) {
                  return e.onMatch(e)
              }),
              np = e,
              n_("matchMedia"))
          }
            , nv = function() {
              function e(e, t) {
                  this.selector = t && ti(t),
                  this.data = [],
                  this._r = [],
                  this.isReverted = !1,
                  e && this.add(e)
              }
              var t = e.prototype;
              return t.add = function(e, t, n) {
                  z(e) && (n = t,
                  t = e,
                  e = z);
                  var r = this
                    , i = function() {
                      var e, i = T, o = r.selector;
                      return i && i !== r && i.data.push(r),
                      n && (r.selector = ti(n)),
                      T = r,
                      e = t.apply(r, arguments),
                      z(e) && r._r.push(e),
                      T = i,
                      r.selector = o,
                      r.isReverted = !1,
                      e
                  };
                  return r.last = i,
                  e === z ? i(r) : e ? r[e] = i : i
              }
              ,
              t.ignore = function(e) {
                  var t = T;
                  T = null,
                  e(this),
                  T = t
              }
              ,
              t.getTweens = function() {
                  var t = [];
                  return this.data.forEach(function(n) {
                      return n instanceof e ? t.push.apply(t, n.getTweens()) : n instanceof t4 && !(n.parent && "nested" === n.parent.data) && t.push(n)
                  }),
                  t
              }
              ,
              t.clear = function() {
                  this._r.length = this.data.length = 0
              }
              ,
              t.kill = function(e, t) {
                  var n = this;
                  if (e) {
                      var r = this.getTweens();
                      this.data.forEach(function(e) {
                          "isFlip" === e.data && (e.revert(),
                          e.getChildren(!0, !0, !1).forEach(function(e) {
                              return r.splice(r.indexOf(e), 1)
                          }))
                      }),
                      r.map(function(e) {
                          return {
                              g: e.globalTime(0),
                              t: e
                          }
                      }).sort(function(e, t) {
                          return t.g - e.g || -1
                      }).forEach(function(t) {
                          return t.t.revert(e)
                      }),
                      this.data.forEach(function(t) {
                          return !(t instanceof tF) && t.revert && t.revert(e)
                      }),
                      this._r.forEach(function(t) {
                          return t(e, n)
                      }),
                      this.isReverted = !0
                  } else
                      this.data.forEach(function(e) {
                          return e.kill && e.kill()
                      });
                  if (this.clear(),
                  t) {
                      var i = nf.indexOf(this);
                      ~i && nf.splice(i, 1)
                  }
              }
              ,
              t.revert = function(e) {
                  this.kill(e || {})
              }
              ,
              e
          }()
            , ng = function() {
              function e(e) {
                  this.contexts = [],
                  this.scope = e
              }
              var t = e.prototype;
              return t.add = function(e, t, n) {
                  W(e) || (e = {
                      matches: e
                  });
                  var r, i, o, a = new nv(0,n || this.scope), s = a.conditions = {};
                  for (i in this.contexts.push(a),
                  t = a.add("onMatch", t),
                  a.queries = e,
                  e)
                      "all" === i ? o = 1 : (r = R.matchMedia(e[i])) && (0 > nf.indexOf(a) && nf.push(a),
                      (s[i] = r.matches) && (o = 1),
                      r.addListener ? r.addListener(nm) : r.addEventListener("change", nm));
                  return o && t(a),
                  this
              }
              ,
              t.revert = function(e) {
                  this.kill(e || {})
              }
              ,
              t.kill = function(e) {
                  this.contexts.forEach(function(t) {
                      return t.kill(e, !0)
                  })
              }
              ,
              e
          }()
            , ny = {
              registerPlugin: function() {
                  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                      t[n] = arguments[n];
                  t.forEach(function(e) {
                      return tm(e)
                  })
              },
              timeline: function(e) {
                  return new tj(e)
              },
              getTweensOf: function(e, t) {
                  return S.getTweensOf(e, t)
              },
              getProperty: function(e, t, n, r) {
                  U(e) && (e = tr(e)[0]);
                  var i = eb(e || {}).get
                    , o = n ? eC : eM;
                  return "native" === n && (n = ""),
                  e ? t ? o((e_[t] && e_[t].get || i)(e, t, n, r)) : function(t, n, r) {
                      return o((e_[t] && e_[t].get || i)(e, t, n, r))
                  }
                  : e
              },
              quickSetter: function(e, t, n) {
                  if ((e = tr(e)).length > 1) {
                      var r = e.map(function(e) {
                          return nS.quickSetter(e, t, n)
                      })
                        , i = r.length;
                      return function(e) {
                          for (var t = i; t--; )
                              r[t](e)
                      }
                  }
                  e = e[0] || {};
                  var o = e_[t]
                    , a = eb(e)
                    , s = a.harness && (a.harness.aliases || {})[t] || t
                    , l = o ? function(t) {
                      var r = new o;
                      N._pt = 0,
                      r.init(e, n ? t + n : t, N, 0, [e]),
                      r.render(1, r),
                      N._pt && no(1, N)
                  }
                  : a.set(e, s);
                  return o ? l : function(t) {
                      return l(e, s, n ? t + n : t, a, 1)
                  }
              },
              quickTo: function(e, t, n) {
                  var r, i = nS.to(e, eO(((r = {})[t] = "+=0.1",
                  r.paused = !0,
                  r), n || {})), o = function(e, n, r) {
                      return i.resetTo(t, e, n, r)
                  };
                  return o.tween = i,
                  o
              },
              isTweening: function(e) {
                  return S.getTweensOf(e, !0).length > 0
              },
              defaults: function(e) {
                  return e && e.ease && (e.ease = tD(e.ease, L.ease)),
                  eP(L, e || {})
              },
              config: function(e) {
                  return eP(C, e || {})
              },
              registerEffect: function(e) {
                  var t = e.name
                    , n = e.effect
                    , r = e.plugins
                    , i = e.defaults
                    , o = e.extendTimeline;
                  (r || "").split(",").forEach(function(e) {
                      return e && !e_[e] && !en[e] && ea(t + " effect requires " + e + " plugin.")
                  }),
                  em[t] = function(e, t, r) {
                      return n(tr(e), eL(t || {}, i), r)
                  }
                  ,
                  o && (tj.prototype[t] = function(e, n, r) {
                      return this.add(em[t](e, W(n) ? n : (r = n) && {}, this), r)
                  }
                  )
              },
              registerEase: function(e, t) {
                  tE[e] = tD(t)
              },
              parseEase: function(e, t) {
                  return arguments.length ? tD(e, t) : tE
              },
              getById: function(e) {
                  return S.getById(e)
              },
              exportRoot: function(e, t) {
                  void 0 === e && (e = {});
                  var n, r, i = new tj(e);
                  for (i.smoothChildTiming = $(e.smoothChildTiming),
                  S.remove(i),
                  i._dp = 0,
                  i._time = i._tTime = S._time,
                  n = S._first; n; )
                      r = n._next,
                      (t || !(!n._dur && n instanceof t4 && n.vars.onComplete === n._targets[0])) && eZ(i, n, n._start - n._delay),
                      n = r;
                  return eZ(S, i, 0),
                  i
              },
              context: function(e, t) {
                  return e ? new nv(e,t) : T
              },
              matchMedia: function(e) {
                  return new ng(e)
              },
              matchMediaRefresh: function() {
                  return nf.forEach(function(e) {
                      var t, n, r = e.conditions;
                      for (n in r)
                          r[n] && (r[n] = !1,
                          t = 1);
                      t && e.revert()
                  }) || nm()
              },
              addEventListener: function(e, t) {
                  var n = nh[e] || (nh[e] = []);
                  ~n.indexOf(t) || n.push(t)
              },
              removeEventListener: function(e, t) {
                  var n = nh[e]
                    , r = n && n.indexOf(t);
                  r >= 0 && n.splice(r, 1)
              },
              utils: {
                  wrap: function e(t, n, r) {
                      var i = n - t;
                      return H(t) ? tc(t, e(0, t.length), n) : e6(r, function(e) {
                          return (i + (e - t) % i) % i + t
                      })
                  },
                  wrapYoyo: function e(t, n, r) {
                      var i = n - t
                        , o = 2 * i;
                      return H(t) ? tc(t, e(0, t.length - 1), n) : e6(r, function(e) {
                          return e = (o + (e - t) % o) % o || 0,
                          t + (e > i ? o - e : e)
                      })
                  },
                  distribute: ta,
                  random: tu,
                  snap: tl,
                  normalize: function(e, t, n) {
                      return th(e, t, 0, 1, n)
                  },
                  getUnit: te,
                  clamp: function(e, t, n) {
                      return e6(n, function(n) {
                          return e7(e, t, n)
                      })
                  },
                  splitColor: ty,
                  toArray: tr,
                  selector: ti,
                  mapRange: th,
                  pipe: function() {
                      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                          t[n] = arguments[n];
                      return function(e) {
                          return t.reduce(function(e, t) {
                              return t(e)
                          }, e)
                      }
                  },
                  unitize: function(e, t) {
                      return function(n) {
                          return e(parseFloat(n)) + (t || te(n))
                      }
                  },
                  interpolate: function e(t, n, r, i) {
                      var o = isNaN(t + n) ? 0 : function(e) {
                          return (1 - e) * t + e * n
                      }
                      ;
                      if (!o) {
                          var a, s, l, u, c, f = U(t), h = {};
                          if (!0 === r && (i = 1) && (r = null),
                          f)
                              t = {
                                  p: t
                              },
                              n = {
                                  p: n
                              };
                          else if (H(t) && !H(n)) {
                              for (s = 1,
                              l = [],
                              c = (u = t.length) - 2; s < u; s++)
                                  l.push(e(t[s - 1], t[s]));
                              u--,
                              o = function(e) {
                                  var t = Math.min(c, ~~(e *= u));
                                  return l[t](e - t)
                              }
                              ,
                              r = n
                          } else
                              i || (t = eO(H(t) ? [] : {}, t));
                          if (!l) {
                              for (a in n)
                                  tZ.call(h, t, a, "get", n[a]);
                              o = function(e) {
                                  return no(e, h) || (f ? t.p : t)
                              }
                          }
                      }
                      return e6(r, o)
                  },
                  shuffle: to
              },
              install: ei,
              effects: em,
              ticker: tA,
              updateRoot: tj.updateRoot,
              plugins: e_,
              globalTimeline: S,
              core: {
                  PropTween: nc,
                  globals: es,
                  Tween: t4,
                  Timeline: tj,
                  Animation: tF,
                  getCache: eb,
                  _removeLinkedListItem: eU,
                  reverting: function() {
                      return b
                  },
                  context: function(e) {
                      return e && T && (T.data.push(e),
                      e._ctx = T),
                      T
                  },
                  suppressOverwrites: function(e) {
                      return w = e
                  }
              }
          };
          eS("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
              return ny[e] = t4[e]
          }),
          tA.add(tj.updateRoot),
          N = ny.to({}, {
              duration: 0
          });
          var nw = function(e, t) {
              for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
                  n = n._next;
              return n
          }
            , nb = function(e, t) {
              var n, r, i, o = e._targets;
              for (n in t)
                  for (r = o.length; r--; )
                      (i = e._ptLookup[r][n]) && (i = i.d) && (i._pt && (i = nw(i, n)),
                      i && i.modifier && i.modifier(t[n], e, o[r], n))
          }
            , nT = function(e, t) {
              return {
                  name: e,
                  rawVars: 1,
                  init: function(e, n, r) {
                      r._onInit = function(e) {
                          var r, i;
                          if (U(n) && (r = {},
                          eS(n, function(e) {
                              return r[e] = 1
                          }),
                          n = r),
                          t) {
                              for (i in r = {},
                              n)
                                  r[i] = t(n[i]);
                              n = r
                          }
                          nb(e, n)
                      }
                  }
              }
          }
            , nS = ny.registerPlugin({
              name: "attr",
              init: function(e, t, n, r, i) {
                  var o, a, s;
                  for (o in this.tween = n,
                  t)
                      s = e.getAttribute(o) || "",
                      (a = this.add(e, "setAttribute", (s || 0) + "", t[o], r, i, 0, 0, o)).op = o,
                      a.b = s,
                      this._props.push(o)
              },
              render: function(e, t) {
                  for (var n = t._pt; n; )
                      b ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d),
                      n = n._next
              }
          }, {
              name: "endArray",
              init: function(e, t) {
                  for (var n = t.length; n--; )
                      this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1)
              }
          }, nT("roundProps", ts), nT("modifiers"), nT("snap", tl)) || ny;
          t4.version = tj.version = nS.version = "3.11.4",
          E = 1,
          G() && tx(),
          tE.Power0;
          var nR = tE.Power1
            , nA = (tE.Power2,
          tE.Power3)
            , nx = tE.Power4
            , nE = tE.Linear;
          tE.Quad,
          tE.Cubic,
          tE.Quart,
          tE.Quint,
          tE.Strong,
          tE.Elastic,
          tE.Back,
          tE.SteppedEase,
          tE.Bounce,
          tE.Sine,
          tE.Expo,
          tE.Circ
      },
      990: function(e, t, n) {
          "use strict";
          n.d(t, {
              ZP: function() {
                  return eS
              }
          });
          var r, i, o, a, s, l, u, c, f, h, d = n(5317), p = {}, _ = 180 / Math.PI, m = Math.PI / 180, v = Math.atan2, g = /([A-Z])/g, y = /(left|right|width|margin|padding|x)/i, w = /[\s,\(]\S/, b = {
              autoAlpha: "opacity,visibility",
              scale: "scaleX,scaleY",
              alpha: "opacity"
          }, T = function(e, t) {
              return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
          }, S = function(e, t) {
              return t.set(t.t, t.p, 1 === e ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
          }, R = function(e, t) {
              return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
          }, A = function(e, t) {
              var n = t.s + t.c * e;
              t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t)
          }, x = function(e, t) {
              return t.set(t.t, t.p, e ? t.e : t.b, t)
          }, E = function(e, t) {
              return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
          }, k = function(e, t, n) {
              return e.style[t] = n
          }, N = function(e, t, n) {
              return e.style.setProperty(t, n)
          }, M = function(e, t, n) {
              return e._gsap[t] = n
          }, C = function(e, t, n) {
              return e._gsap.scaleX = e._gsap.scaleY = n
          }, L = function(e, t, n, r, i) {
              var o = e._gsap;
              o.scaleX = o.scaleY = n,
              o.renderTransform(i, o)
          }, O = function(e, t, n, r, i) {
              var o = e._gsap;
              o[t] = n,
              o.renderTransform(i, o)
          }, P = "transform", D = P + "Origin", V = function(e, t) {
              var n = this
                , r = this.target
                , i = r.style;
              if (e in p) {
                  if (this.tfm = this.tfm || {},
                  "transform" !== e && (~(e = b[e] || e).indexOf(",") ? e.split(",").forEach(function(e) {
                      return n.tfm[e] = ee(r, e)
                  }) : this.tfm[e] = r._gsap.x ? r._gsap[e] : ee(r, e)),
                  this.props.indexOf(P) >= 0)
                      return;
                  r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"),
                  this.props.push(D, t, "")),
                  e = P
              }
              (i || t) && this.props.push(e, t, i[e])
          }, I = function(e) {
              e.translate && (e.removeProperty("translate"),
              e.removeProperty("scale"),
              e.removeProperty("rotate"))
          }, B = function() {
              var e, t, n = this.props, r = this.target, i = r.style, o = r._gsap;
              for (e = 0; e < n.length; e += 3)
                  n[e + 1] ? r[n[e]] = n[e + 2] : n[e + 2] ? i[n[e]] = n[e + 2] : i.removeProperty(n[e].replace(g, "-$1").toLowerCase());
              if (this.tfm) {
                  for (t in this.tfm)
                      o[t] = this.tfm[t];
                  o.svg && (o.renderTransform(),
                  r.setAttribute("data-svg-origin", this.svgo || "")),
                  (e = f()) && !e.isStart && !i[P] && (I(i),
                  o.uncache = 1)
              }
          }, U = function(e, t) {
              var n = {
                  target: e,
                  props: [],
                  revert: B,
                  save: V
              };
              return t && t.split(",").forEach(function(e) {
                  return n.save(e)
              }),
              n
          }, z = function(e, t) {
              var n = a.createElementNS ? a.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : a.createElement(e);
              return n.style ? n : a.createElement(e)
          }, F = function e(t, n, r) {
              var i = getComputedStyle(t);
              return i[n] || i.getPropertyValue(n.replace(g, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && e(t, W(n) || n, 1) || ""
          }, j = "O,Moz,ms,Ms,Webkit".split(","), W = function(e, t, n) {
              var r = (t || u).style
                , i = 5;
              if (e in r && !n)
                  return e;
              for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(j[i] + e in r); )
                  ;
              return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? j[i] : "") + e
          }, $ = function() {
              "undefined" != typeof window && window.document && (s = (a = window.document).documentElement,
              u = z("div") || {
                  style: {}
              },
              z("div"),
              D = (P = W(P)) + "Origin",
              u.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
              h = !!W("perspective"),
              f = d.p8.core.reverting,
              l = 1)
          }, G = function e(t) {
              var n, r = z("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, o = this.nextSibling, a = this.style.cssText;
              if (s.appendChild(r),
              r.appendChild(this),
              this.style.display = "block",
              t)
                  try {
                      n = this.getBBox(),
                      this._gsapBBox = this.getBBox,
                      this.getBBox = e
                  } catch (e) {}
              else
                  this._gsapBBox && (n = this._gsapBBox());
              return i && (o ? i.insertBefore(this, o) : i.appendChild(this)),
              s.removeChild(r),
              this.style.cssText = a,
              n
          }, q = function(e, t) {
              for (var n = t.length; n--; )
                  if (e.hasAttribute(t[n]))
                      return e.getAttribute(t[n])
          }, Y = function(e) {
              var t;
              try {
                  t = e.getBBox()
              } catch (n) {
                  t = G.call(e, !0)
              }
              return t && (t.width || t.height) || e.getBBox === G || (t = G.call(e, !0)),
              !t || t.width || t.x || t.y ? t : {
                  x: +q(e, ["x", "cx", "x1"]) || 0,
                  y: +q(e, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0
              }
          }, H = function(e) {
              return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Y(e))
          }, K = function(e, t) {
              if (t) {
                  var n = e.style;
                  t in p && t !== D && (t = P),
                  n.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t),
                  n.removeProperty(t.replace(g, "-$1").toLowerCase())) : n.removeAttribute(t)
              }
          }, Z = function(e, t, n, r, i, o) {
              var a = new d.Fo(e._pt,t,n,0,1,o ? E : x);
              return e._pt = a,
              a.b = r,
              a.e = i,
              e._props.push(n),
              a
          }, X = {
              deg: 1,
              rad: 1,
              turn: 1
          }, Q = {
              grid: 1,
              flex: 1
          }, J = function e(t, n, r, i) {
              var o, s, l, c, f = parseFloat(r) || 0, h = (r + "").trim().substr((f + "").length) || "px", _ = u.style, m = y.test(n), v = "svg" === t.tagName.toLowerCase(), g = (v ? "client" : "offset") + (m ? "Width" : "Height"), w = "px" === i, b = "%" === i;
              return i === h || !f || X[i] || X[h] ? f : ("px" === h || w || (f = e(t, n, r, "px")),
              c = t.getCTM && H(t),
              (b || "%" === h) && (p[n] || ~n.indexOf("adius"))) ? (o = c ? t.getBBox()[m ? "width" : "height"] : t[g],
              (0,
              d.Pr)(b ? f / o * 100 : f / 100 * o)) : (_[m ? "width" : "height"] = 100 + (w ? h : i),
              s = ~n.indexOf("adius") || "em" === i && t.appendChild && !v ? t : t.parentNode,
              c && (s = (t.ownerSVGElement || {}).parentNode),
              s && s !== a && s.appendChild || (s = a.body),
              (l = s._gsap) && b && l.width && m && l.time === d.xr.time && !l.uncache) ? (0,
              d.Pr)(f / l.width * 100) : ((b || "%" === h) && !Q[F(s, "display")] && (_.position = F(t, "position")),
              s === t && (_.position = "static"),
              s.appendChild(u),
              o = u[g],
              s.removeChild(u),
              _.position = "absolute",
              m && b && ((l = (0,
              d.DY)(s)).time = d.xr.time,
              l.width = s[g]),
              (0,
              d.Pr)(w ? o * f / 100 : o && f ? 100 / o * f : 0))
          }, ee = function(e, t, n, r) {
              var i;
              return l || $(),
              t in b && "transform" !== t && ~(t = b[t]).indexOf(",") && (t = t.split(",")[0]),
              p[t] && "transform" !== t ? (i = eh(e, r),
              i = "transformOrigin" !== t ? i[t] : i.svg ? i.origin : ed(F(e, D)) + " " + i.zOrigin + "px") : (!(i = e.style[t]) || "auto" === i || r || ~(i + "").indexOf("calc(")) && (i = eo[t] && eo[t](e, t, n) || F(e, t) || (0,
              d.Ok)(e, t) || ("opacity" === t ? 1 : 0)),
              n && !~(i + "").trim().indexOf(" ") ? J(e, t, i, n) + n : i
          }, et = function(e, t, n, r) {
              if (!n || "none" === n) {
                  var i = W(t, e, 1)
                    , o = i && F(e, i, 1);
                  o && o !== n ? (t = i,
                  n = o) : "borderColor" === t && (n = F(e, "borderTopColor"))
              }
              var a, s, l, u, c, f, h, p, _, m, v, g = new d.Fo(this._pt,e.style,t,0,1,d.Ks), y = 0, w = 0;
              if (g.b = n,
              g.e = r,
              n += "",
              "auto" == (r += "") && (e.style[t] = r,
              r = F(e, t) || r,
              e.style[t] = n),
              a = [n, r],
              (0,
              d.kr)(a),
              n = a[0],
              r = a[1],
              l = n.match(d.d4) || [],
              (r.match(d.d4) || []).length) {
                  for (; s = d.d4.exec(r); )
                      h = s[0],
                      _ = r.substring(y, s.index),
                      c ? c = (c + 1) % 5 : ("rgba(" === _.substr(-5) || "hsla(" === _.substr(-5)) && (c = 1),
                      h !== (f = l[w++] || "") && (u = parseFloat(f) || 0,
                      v = f.substr((u + "").length),
                      "=" === h.charAt(1) && (h = (0,
                      d.cy)(u, h) + v),
                      p = parseFloat(h),
                      m = h.substr((p + "").length),
                      y = d.d4.lastIndex - m.length,
                      m || (m = m || d.Fc.units[t] || v,
                      y !== r.length || (r += m,
                      g.e += m)),
                      v !== m && (u = J(e, t, f, m) || 0),
                      g._pt = {
                          _next: g._pt,
                          p: _ || 1 === w ? _ : ",",
                          s: u,
                          c: p - u,
                          m: c && c < 4 || "zIndex" === t ? Math.round : 0
                      });
                  g.c = y < r.length ? r.substring(y, r.length) : ""
              } else
                  g.r = "display" === t && "none" === r ? E : x;
              return d.bQ.test(r) && (g.e = 0),
              this._pt = g,
              g
          }, en = {
              top: "0%",
              bottom: "100%",
              left: "0%",
              right: "100%",
              center: "50%"
          }, er = function(e) {
              var t = e.split(" ")
                , n = t[0]
                , r = t[1] || "50%";
              return ("top" === n || "bottom" === n || "left" === r || "right" === r) && (e = n,
              n = r,
              r = e),
              t[0] = en[n] || n,
              t[1] = en[r] || r,
              t.join(" ")
          }, ei = function(e, t) {
              if (t.tween && t.tween._time === t.tween._dur) {
                  var n, r, i, o = t.t, a = o.style, s = t.u, l = o._gsap;
                  if ("all" === s || !0 === s)
                      a.cssText = "",
                      r = 1;
                  else
                      for (i = (s = s.split(",")).length; --i > -1; )
                          p[n = s[i]] && (r = 1,
                          n = "transformOrigin" === n ? D : P),
                          K(o, n);
                  r && (K(o, P),
                  l && (l.svg && o.removeAttribute("transform"),
                  eh(o, 1),
                  l.uncache = 1,
                  I(a)))
              }
          }, eo = {
              clearProps: function(e, t, n, r, i) {
                  if ("isFromStart" !== i.data) {
                      var o = e._pt = new d.Fo(e._pt,t,n,0,0,ei);
                      return o.u = r,
                      o.pr = -10,
                      o.tween = i,
                      e._props.push(n),
                      1
                  }
              }
          }, ea = [1, 0, 0, 1, 0, 0], es = {}, el = function(e) {
              return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
          }, eu = function(e) {
              var t = F(e, P);
              return el(t) ? ea : t.substr(7).match(d.SI).map(d.Pr)
          }, ec = function(e, t) {
              var n, r, i, o, a = e._gsap || (0,
              d.DY)(e), l = e.style, u = eu(e);
              return a.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(i = e.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? ea : u : (u !== ea || e.offsetParent || e === s || a.svg || (i = l.display,
              l.display = "block",
              (n = e.parentNode) && e.offsetParent || (o = 1,
              r = e.nextElementSibling,
              s.appendChild(e)),
              u = eu(e),
              i ? l.display = i : K(e, "display"),
              o && (r ? n.insertBefore(e, r) : n ? n.appendChild(e) : s.removeChild(e))),
              t && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
          }, ef = function(e, t, n, r, i, o) {
              var a, s, l, u, c = e._gsap, f = i || ec(e, !0), h = c.xOrigin || 0, d = c.yOrigin || 0, p = c.xOffset || 0, _ = c.yOffset || 0, m = f[0], v = f[1], g = f[2], y = f[3], w = f[4], b = f[5], T = t.split(" "), S = parseFloat(T[0]) || 0, R = parseFloat(T[1]) || 0;
              n ? f !== ea && (s = m * y - v * g) && (l = S * (y / s) + R * (-g / s) + (g * b - y * w) / s,
              u = S * (-v / s) + R * (m / s) - (m * b - v * w) / s,
              S = l,
              R = u) : (S = (a = Y(e)).x + (~T[0].indexOf("%") ? S / 100 * a.width : S),
              R = a.y + (~(T[1] || T[0]).indexOf("%") ? R / 100 * a.height : R)),
              r || !1 !== r && c.smooth ? (w = S - h,
              b = R - d,
              c.xOffset = p + (w * m + b * g) - w,
              c.yOffset = _ + (w * v + b * y) - b) : c.xOffset = c.yOffset = 0,
              c.xOrigin = S,
              c.yOrigin = R,
              c.smooth = !!r,
              c.origin = t,
              c.originIsAbsolute = !!n,
              e.style[D] = "0px 0px",
              o && (Z(o, c, "xOrigin", h, S),
              Z(o, c, "yOrigin", d, R),
              Z(o, c, "xOffset", p, c.xOffset),
              Z(o, c, "yOffset", _, c.yOffset)),
              e.setAttribute("data-svg-origin", S + " " + R)
          }, eh = function(e, t) {
              var n = e._gsap || new d.l1(e);
              if ("x"in n && !t && !n.uncache)
                  return n;
              var r, i, o, a, s, l, u, c, f, p, g, y, w, b, T, S, R, A, x, E, k, N, M, C, L, O, V, I, B, U, z, j, W = e.style, $ = n.scaleX < 0, G = getComputedStyle(e), q = F(e, D) || "0";
              return r = i = o = l = u = c = f = p = g = 0,
              a = s = 1,
              n.svg = !!(e.getCTM && H(e)),
              G.translate && (("none" !== G.translate || "none" !== G.scale || "none" !== G.rotate) && (W[P] = ("none" !== G.translate ? "translate3d(" + (G.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== G.rotate ? "rotate(" + G.rotate + ") " : "") + ("none" !== G.scale ? "scale(" + G.scale.split(" ").join(",") + ") " : "") + ("none" !== G[P] ? G[P] : "")),
              W.scale = W.rotate = W.translate = "none"),
              b = ec(e, n.svg),
              n.svg && (n.uncache ? (L = e.getBBox(),
              q = n.xOrigin - L.x + "px " + (n.yOrigin - L.y) + "px",
              C = "") : C = !t && e.getAttribute("data-svg-origin"),
              ef(e, C || q, !!C || n.originIsAbsolute, !1 !== n.smooth, b)),
              y = n.xOrigin || 0,
              w = n.yOrigin || 0,
              b !== ea && (A = b[0],
              x = b[1],
              E = b[2],
              k = b[3],
              r = N = b[4],
              i = M = b[5],
              6 === b.length ? (a = Math.sqrt(A * A + x * x),
              s = Math.sqrt(k * k + E * E),
              l = A || x ? v(x, A) * _ : 0,
              (f = E || k ? v(E, k) * _ + l : 0) && (s *= Math.abs(Math.cos(f * m))),
              n.svg && (r -= y - (y * A + w * E),
              i -= w - (y * x + w * k))) : (j = b[6],
              U = b[7],
              V = b[8],
              I = b[9],
              B = b[10],
              z = b[11],
              r = b[12],
              i = b[13],
              o = b[14],
              u = (T = v(j, B)) * _,
              T && (C = N * (S = Math.cos(-T)) + V * (R = Math.sin(-T)),
              L = M * S + I * R,
              O = j * S + B * R,
              V = -(N * R) + V * S,
              I = -(M * R) + I * S,
              B = -(j * R) + B * S,
              z = -(U * R) + z * S,
              N = C,
              M = L,
              j = O),
              c = (T = v(-E, B)) * _,
              T && (C = A * (S = Math.cos(-T)) - V * (R = Math.sin(-T)),
              L = x * S - I * R,
              O = E * S - B * R,
              z = k * R + z * S,
              A = C,
              x = L,
              E = O),
              l = (T = v(x, A)) * _,
              T && (S = Math.cos(T),
              R = Math.sin(T),
              C = A * S + x * R,
              L = N * S + M * R,
              x = x * S - A * R,
              M = M * S - N * R,
              A = C,
              N = L),
              u && Math.abs(u) + Math.abs(l) > 359.9 && (u = l = 0,
              c = 180 - c),
              a = (0,
              d.Pr)(Math.sqrt(A * A + x * x + E * E)),
              s = (0,
              d.Pr)(Math.sqrt(M * M + j * j)),
              f = Math.abs(T = v(N, M)) > 2e-4 ? T * _ : 0,
              g = z ? 1 / (z < 0 ? -z : z) : 0),
              n.svg && (C = e.getAttribute("transform"),
              n.forceCSS = e.setAttribute("transform", "") || !el(F(e, P)),
              C && e.setAttribute("transform", C))),
              Math.abs(f) > 90 && 270 > Math.abs(f) && ($ ? (a *= -1,
              f += l <= 0 ? 180 : -180,
              l += l <= 0 ? 180 : -180) : (s *= -1,
              f += f <= 0 ? 180 : -180)),
              t = t || n.uncache,
              n.x = r - ((n.xPercent = r && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + "px",
              n.y = i - ((n.yPercent = i && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + "px",
              n.z = o + "px",
              n.scaleX = (0,
              d.Pr)(a),
              n.scaleY = (0,
              d.Pr)(s),
              n.rotation = (0,
              d.Pr)(l) + "deg",
              n.rotationX = (0,
              d.Pr)(u) + "deg",
              n.rotationY = (0,
              d.Pr)(c) + "deg",
              n.skewX = f + "deg",
              n.skewY = p + "deg",
              n.transformPerspective = g + "px",
              (n.zOrigin = parseFloat(q.split(" ")[2]) || 0) && (W[D] = ed(q)),
              n.xOffset = n.yOffset = 0,
              n.force3D = d.Fc.force3D,
              n.renderTransform = n.svg ? eg : h ? ev : e_,
              n.uncache = 0,
              n
          }, ed = function(e) {
              return (e = e.split(" "))[0] + " " + e[1]
          }, ep = function(e, t, n) {
              var r = (0,
              d.Wy)(t);
              return (0,
              d.Pr)(parseFloat(t) + parseFloat(J(e, "x", n + "px", r))) + r
          }, e_ = function(e, t) {
              t.z = "0px",
              t.rotationY = t.rotationX = "0deg",
              t.force3D = 0,
              ev(e, t)
          }, em = "0deg", ev = function(e, t) {
              var n = t || this
                , r = n.xPercent
                , i = n.yPercent
                , o = n.x
                , a = n.y
                , s = n.z
                , l = n.rotation
                , u = n.rotationY
                , c = n.rotationX
                , f = n.skewX
                , h = n.skewY
                , d = n.scaleX
                , p = n.scaleY
                , _ = n.transformPerspective
                , v = n.force3D
                , g = n.target
                , y = n.zOrigin
                , w = ""
                , b = "auto" === v && e && 1 !== e || !0 === v;
              if (y && (c !== em || u !== em)) {
                  var T, S = parseFloat(u) * m, R = Math.sin(S), A = Math.cos(S);
                  o = ep(g, o, -(R * (T = Math.cos(S = parseFloat(c) * m)) * y)),
                  a = ep(g, a, -(-Math.sin(S) * y)),
                  s = ep(g, s, -(A * T * y) + y)
              }
              "0px" !== _ && (w += "perspective(" + _ + ") "),
              (r || i) && (w += "translate(" + r + "%, " + i + "%) "),
              (b || "0px" !== o || "0px" !== a || "0px" !== s) && (w += "0px" !== s || b ? "translate3d(" + o + ", " + a + ", " + s + ") " : "translate(" + o + ", " + a + ") "),
              l !== em && (w += "rotate(" + l + ") "),
              u !== em && (w += "rotateY(" + u + ") "),
              c !== em && (w += "rotateX(" + c + ") "),
              (f !== em || h !== em) && (w += "skew(" + f + ", " + h + ") "),
              (1 !== d || 1 !== p) && (w += "scale(" + d + ", " + p + ") "),
              g.style[P] = w || "translate(0, 0)"
          }, eg = function(e, t) {
              var n, r, i, o, a, s = t || this, l = s.xPercent, u = s.yPercent, c = s.x, f = s.y, h = s.rotation, p = s.skewX, _ = s.skewY, v = s.scaleX, g = s.scaleY, y = s.target, w = s.xOrigin, b = s.yOrigin, T = s.xOffset, S = s.yOffset, R = s.forceCSS, A = parseFloat(c), x = parseFloat(f);
              h = parseFloat(h),
              p = parseFloat(p),
              (_ = parseFloat(_)) && (p += _ = parseFloat(_),
              h += _),
              h || p ? (h *= m,
              p *= m,
              n = Math.cos(h) * v,
              r = Math.sin(h) * v,
              i = -(Math.sin(h - p) * g),
              o = Math.cos(h - p) * g,
              p && (_ *= m,
              i *= a = Math.sqrt(1 + (a = Math.tan(p - _)) * a),
              o *= a,
              _ && (n *= a = Math.sqrt(1 + (a = Math.tan(_)) * a),
              r *= a)),
              n = (0,
              d.Pr)(n),
              r = (0,
              d.Pr)(r),
              i = (0,
              d.Pr)(i),
              o = (0,
              d.Pr)(o)) : (n = v,
              o = g,
              r = i = 0),
              (A && !~(c + "").indexOf("px") || x && !~(f + "").indexOf("px")) && (A = J(y, "x", c, "px"),
              x = J(y, "y", f, "px")),
              (w || b || T || S) && (A = (0,
              d.Pr)(A + w - (w * n + b * i) + T),
              x = (0,
              d.Pr)(x + b - (w * r + b * o) + S)),
              (l || u) && (a = y.getBBox(),
              A = (0,
              d.Pr)(A + l / 100 * a.width),
              x = (0,
              d.Pr)(x + u / 100 * a.height)),
              a = "matrix(" + n + "," + r + "," + i + "," + o + "," + A + "," + x + ")",
              y.setAttribute("transform", a),
              R && (y.style[P] = a)
          }, ey = function(e, t, n, r, i) {
              var o, a, s = (0,
              d.r9)(i), l = parseFloat(i) * (s && ~i.indexOf("rad") ? _ : 1) - r, u = r + l + "deg";
              return s && ("short" === (o = i.split("_")[1]) && (l %= 360) != l % 180 && (l += l < 0 ? 360 : -360),
              "cw" === o && l < 0 ? l = (l + 36e9) % 360 - 360 * ~~(l / 360) : "ccw" === o && l > 0 && (l = (l - 36e9) % 360 - 360 * ~~(l / 360))),
              e._pt = a = new d.Fo(e._pt,t,n,r,l,S),
              a.e = u,
              a.u = "deg",
              e._props.push(n),
              a
          }, ew = function(e, t) {
              for (var n in t)
                  e[n] = t[n];
              return e
          }, eb = function(e, t, n) {
              var r, i, o, a, s, l, u, c = ew({}, n._gsap), f = n.style;
              for (i in c.svg ? (o = n.getAttribute("transform"),
              n.setAttribute("transform", ""),
              f[P] = t,
              r = eh(n, 1),
              K(n, P),
              n.setAttribute("transform", o)) : (o = getComputedStyle(n)[P],
              f[P] = t,
              r = eh(n, 1),
              f[P] = o),
              p)
                  (o = c[i]) !== (a = r[i]) && 0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) && (s = (0,
                  d.Wy)(o) !== (u = (0,
                  d.Wy)(a)) ? J(n, i, o, u) : parseFloat(o),
                  l = parseFloat(a),
                  e._pt = new d.Fo(e._pt,r,i,s,l - s,T),
                  e._pt.u = u || 0,
                  e._props.push(i));
              ew(r, c)
          };
          (0,
          d.fS)("padding,margin,Width,Radius", function(e, t) {
              var n = "Right"
                , r = "Bottom"
                , i = "Left"
                , o = (t < 3 ? ["Top", n, r, i] : ["Top" + i, "Top" + n, r + n, r + i]).map(function(n) {
                  return t < 2 ? e + n : "border" + n + e
              });
              eo[t > 1 ? "border" + e : e] = function(e, t, n, r, i) {
                  var a, s;
                  if (arguments.length < 4)
                      return 5 === (s = (a = o.map(function(t) {
                          return ee(e, t, n)
                      })).join(" ")).split(a[0]).length ? a[0] : s;
                  a = (r + "").split(" "),
                  s = {},
                  o.forEach(function(e, t) {
                      return s[e] = a[t] = a[t] || a[(t - 1) / 2 | 0]
                  }),
                  e.init(t, s, i)
              }
          });
          var eT = {
              name: "css",
              register: $,
              targetTest: function(e) {
                  return e.style && e.nodeType
              },
              init: function(e, t, n, r, i) {
                  var o, a, s, u, c, f, h, _, m, v, g, y, S, x, E, k, N = this._props, M = e.style, C = n.vars.startAt;
                  for (h in l || $(),
                  this.styles = this.styles || U(e),
                  k = this.styles.props,
                  this.tween = n,
                  t)
                      if ("autoRound" !== h && (a = t[h],
                      !(d.$i[h] && (0,
                      d.if)(h, t, n, r, e, i)))) {
                          if (c = typeof a,
                          f = eo[h],
                          "function" === c && (c = typeof (a = a.call(n, r, e, i))),
                          "string" === c && ~a.indexOf("random(") && (a = (0,
                          d.UI)(a)),
                          f)
                              f(this, e, h, a, n) && (E = 1);
                          else if ("--" === h.substr(0, 2))
                              o = (getComputedStyle(e).getPropertyValue(h) + "").trim(),
                              a += "",
                              d.GN.lastIndex = 0,
                              d.GN.test(o) || (_ = (0,
                              d.Wy)(o),
                              m = (0,
                              d.Wy)(a)),
                              m ? _ !== m && (o = J(e, h, o, m) + m) : _ && (a += _),
                              this.add(M, "setProperty", o, a, r, i, 0, 0, h),
                              N.push(h),
                              k.push(h, 0, M[h]);
                          else if ("undefined" !== c) {
                              if (C && h in C ? (o = "function" == typeof C[h] ? C[h].call(n, r, e, i) : C[h],
                              (0,
                              d.r9)(o) && ~o.indexOf("random(") && (o = (0,
                              d.UI)(o)),
                              (0,
                              d.Wy)(o + "") || (o += d.Fc.units[h] || (0,
                              d.Wy)(ee(e, h)) || ""),
                              "=" === (o + "").charAt(1) && (o = ee(e, h))) : o = ee(e, h),
                              u = parseFloat(o),
                              (v = "string" === c && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)),
                              s = parseFloat(a),
                              h in b && ("autoAlpha" === h && (1 === u && "hidden" === ee(e, "visibility") && s && (u = 0),
                              k.push("visibility", 0, M.visibility),
                              Z(this, M, "visibility", u ? "inherit" : "hidden", s ? "inherit" : "hidden", !s)),
                              "scale" !== h && "transform" !== h && ~(h = b[h]).indexOf(",") && (h = h.split(",")[0])),
                              g = h in p) {
                                  if (this.styles.save(h),
                                  y || ((S = e._gsap).renderTransform && !t.parseTransform || eh(e, t.parseTransform),
                                  x = !1 !== t.smoothOrigin && S.smooth,
                                  (y = this._pt = new d.Fo(this._pt,M,P,0,1,S.renderTransform,S,0,-1)).dep = 1),
                                  "scale" === h)
                                      this._pt = new d.Fo(this._pt,S,"scaleY",S.scaleY,(v ? (0,
                                      d.cy)(S.scaleY, v + s) : s) - S.scaleY || 0,T),
                                      this._pt.u = 0,
                                      N.push("scaleY", h),
                                      h += "X";
                                  else if ("transformOrigin" === h) {
                                      k.push(D, 0, M[D]),
                                      a = er(a),
                                      S.svg ? ef(e, a, 0, x, 0, this) : ((m = parseFloat(a.split(" ")[2]) || 0) !== S.zOrigin && Z(this, S, "zOrigin", S.zOrigin, m),
                                      Z(this, M, h, ed(o), ed(a)));
                                      continue
                                  } else if ("svgOrigin" === h) {
                                      ef(e, a, 1, x, 0, this);
                                      continue
                                  } else if (h in es) {
                                      ey(this, S, h, u, v ? (0,
                                      d.cy)(u, v + a) : a);
                                      continue
                                  } else if ("smoothOrigin" === h) {
                                      Z(this, S, "smooth", S.smooth, a);
                                      continue
                                  } else if ("force3D" === h) {
                                      S[h] = a;
                                      continue
                                  } else if ("transform" === h) {
                                      eb(this, a, e);
                                      continue
                                  }
                              } else
                                  h in M || (h = W(h) || h);
                              if (g || (s || 0 === s) && (u || 0 === u) && !w.test(a) && h in M)
                                  _ = (o + "").substr((u + "").length),
                                  s || (s = 0),
                                  m = (0,
                                  d.Wy)(a) || (h in d.Fc.units ? d.Fc.units[h] : _),
                                  _ !== m && (u = J(e, h, o, m)),
                                  this._pt = new d.Fo(this._pt,g ? S : M,h,u,(v ? (0,
                                  d.cy)(u, v + s) : s) - u,g || "px" !== m && "zIndex" !== h || !1 === t.autoRound ? T : A),
                                  this._pt.u = m || 0,
                                  _ !== m && "%" !== m && (this._pt.b = o,
                                  this._pt.r = R);
                              else if (h in M)
                                  et.call(this, e, h, o, v ? v + a : a);
                              else if (h in e)
                                  this.add(e, h, o || e[h], v ? v + a : a, r, i);
                              else if ("parseTransform" !== h) {
                                  (0,
                                  d.lC)(h, a);
                                  continue
                              }
                              g || (h in M ? k.push(h, 0, M[h]) : k.push(h, 1, o || e[h])),
                              N.push(h)
                          }
                      }
                  E && (0,
                  d.JV)(this)
              },
              render: function(e, t) {
                  if (t.tween._time || !f())
                      for (var n = t._pt; n; )
                          n.r(e, n.d),
                          n = n._next;
                  else
                      t.styles.revert()
              },
              get: ee,
              aliases: b,
              getSetter: function(e, t, n) {
                  var r = b[t];
                  return r && 0 > r.indexOf(",") && (t = r),
                  t in p && t !== D && (e._gsap.x || ee(e, "x")) ? n && c === n ? "scale" === t ? C : M : (c = n || {},
                  "scale" === t ? L : O) : e.style && !(0,
                  d.m2)(e.style[t]) ? k : ~t.indexOf("-") ? N : (0,
                  d.S5)(e, t)
              },
              core: {
                  _removeProperty: K,
                  _getMatrix: ec
              }
          };
          d.p8.utils.checkPrefix = W,
          d.p8.core.getStyleSaver = U,
          r = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
          i = "rotation,rotationX,rotationY,skewX,skewY",
          o = (0,
          d.fS)(r + "," + i + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(e) {
              p[e] = 1
          }),
          (0,
          d.fS)(i, function(e) {
              d.Fc.units[e] = "deg",
              es[e] = 1
          }),
          b[o[13]] = r + "," + i,
          (0,
          d.fS)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(e) {
              var t = e.split(":");
              b[t[1]] = o[t[0]]
          }),
          (0,
          d.fS)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
              d.Fc.units[e] = "px"
          }),
          d.p8.registerPlugin(eT);
          var eS = d.p8.registerPlugin(eT) || d.p8;
          eS.core.Tween
      },
      3454: function(e, t, n) {
          "use strict";
          var r, i;
          e.exports = (null == (r = n.g.process) ? void 0 : r.env) && "object" == typeof (null == (i = n.g.process) ? void 0 : i.env) ? n.g.process : n(7663)
      },
      1118: function(e, t, n) {
          (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
              return n(9151)
          }
          ])
      },
      723: function(e, t, n) {
          "use strict";
          n.d(t, {
              Z: function() {
                  return i
              }
          });
          var r = n(5893);
          function i(e) {
              return (0,
              r.jsxs)("footer", {
                  className: "footer",
                  children: [(0,
                  r.jsx)("div", {
                      className: "ft_deco_line"
                  }), (0,
                  r.jsxs)("div", {
                      className: "ft_info_section",
                      children: [(0,
                      r.jsxs)("div", {
                          className: "ft_info_item",
                          children: ["Integrated Marketing", (0,
                          r.jsx)("br", {}), "Communication ", (0,
                          r.jsx)("br", {}), "Agency"]
                      }), (0,
                      r.jsxs)("div", {
                          className: "ft_info_item",
                          children: ["10F, 509, Dosan-daero, SD biosensor ", (0,
                          r.jsx)("br", {}), "Gangnam-gu, ", (0,
                          r.jsx)("br", {}), "Seoul, Korea"]
                      }), (0,
                      r.jsxs)("div", {
                          className: "ft_info_item",
                          children: ["soony@alcre.co.kr", (0,
                          r.jsx)("br", {}), "+82 02 556 8335"]
                      })]
                  }), (0,
                  r.jsxs)("ul", {
                      className: "ft_business",
                      children: [(0,
                      r.jsx)("li", {
                          children: "TVCF"
                      }), (0,
                      r.jsx)("li", {
                          children: "BRANDING"
                      }), (0,
                      r.jsx)("li", {
                          children: "DIGITAL"
                      }), (0,
                      r.jsx)("li", {
                          children: "ATL/BTL"
                      })]
                  }), (0,
                  r.jsx)("div", {
                      className: "copyright",
                      children: "\xa92023 aL, Co. All rights reserved"
                  })]
              })
          }
          n(7294)
      },
      2031: function(e, t, n) {
          "use strict";
          n.d(t, {
              A: function() {
                  return u
              }
          });
          let r = e=>/^[a-zA-Z0-9][-a-zA-Z0-9]{2,}[a-zA-Z0-9]$/.test(e);
          var i = Object.defineProperty
            , o = (e,t,n)=>t in e ? i(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n
          }) : e[t] = n
            , a = (e,t,n)=>(o(e, "symbol" != typeof t ? t + "" : t, n),
          n);
          class s extends Error {
              constructor(e="An invalid API response was returned", t, n) {
                  super(e),
                  a(this, "url"),
                  a(this, "response"),
                  this.url = t,
                  this.response = n
              }
          }
          let l = (e=>{
              if (r(e))
                  return `https://${e}.cdn.prismic.io/api/v2`;
              throw new s(`An invalid Prismic repository name was given: ${e}`,void 0,void 0)
          }
          )("alcre")
            , u = (e=>{
              try {
                  return new URL(e).hostname.split(".")[0]
              } catch {
                  throw new s(`An invalid Prismic Rest API V2 endpoint was provided: ${e}`,void 0,void 0)
              }
          }
          )(l)
      },
      4587: function(e, t, n) {
          "use strict";
          n.d(t, {
              h: function() {
                  return o
              },
              i: function() {
                  return a
              }
          });
          var r = n(990)
            , i = n(5317);
          let o = e=>e < 10 ? "0" + e : e
            , a = (e,t)=>{
              if (t.pathname === e)
                  return 0;
              let n = r.ZP.timeline();
              window.innerWidth > 900 ? (n.to("#menuMask path", .5, {
                  attr: {
                      d: "M 0 100 V 50 Q 50 0 100 50 V 100 z"
                  },
                  ease: i.Yp.easeIn
              }),
              n.to("#menuMask path", .2, {
                  attr: {
                      d: "M 0 100 V 0 Q 50 0 100 0 V 100 z"
                  },
                  ease: i.Yp.easeOut
              }),
              n.to("#menuMask path", .5, {
                  attr: {
                      d: "M 0 100 V 0 Q 50 0 100 0 V 100 z"
                  },
                  onComplete: ()=>{
                      t.push(e)
                  }
              })) : n.to("#menuMask path", .5, {
                  attr: {
                      d: "M 0 100 V 0 Q 50 0 100 0 V 100 z"
                  },
                  ease: i.Yp.easeOut,
                  onComplete: ()=>{
                      t.push(e)
                  }
              })
          }
      },
      9577: function(e, t, n) {
          "use strict";
          n.d(t, {
              NA: function() {
                  return o
              },
              RI: function() {
                  return a
              },
              tV: function() {
                  return i
              }
          });
          var r = n(4480);
          let i = (0,
          r.cn)({
              key: "selectedWork",
              default: null
          })
            , o = (0,
          r.cn)({
              key: "selectedWorkImg",
              default: null
          })
            , a = (0,
          r.cn)({
              key: "onceLoadcomplete",
              default: !1
          })
      },
      9749: function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
              value: !0
          }),
          t.default = void 0;
          var r = n(6495).Z
            , i = n(2648).Z
            , o = n(1598).Z
            , a = n(7273).Z
            , s = o(n(7294))
            , l = i(n(3121))
            , u = n(2675)
            , c = n(139)
            , f = n(8730);
          n(7238);
          var h = i(n(9824));
          let d = {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1
          };
          function p(e) {
              return void 0 !== e.default
          }
          function _(e) {
              return "number" == typeof e || void 0 === e ? e : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
          }
          function m(e, t, n, i, o, a, s) {
              if (!e || e["data-loaded-src"] === t)
                  return;
              e["data-loaded-src"] = t;
              let l = "decode"in e ? e.decode() : Promise.resolve();
              l.catch(()=>{}
              ).then(()=>{
                  if (e.parentNode) {
                      if ("blur" === n && a(!0),
                      null == i ? void 0 : i.current) {
                          let t = new Event("load");
                          Object.defineProperty(t, "target", {
                              writable: !1,
                              value: e
                          });
                          let n = !1
                            , o = !1;
                          i.current(r({}, t, {
                              nativeEvent: t,
                              currentTarget: e,
                              target: e,
                              isDefaultPrevented: ()=>n,
                              isPropagationStopped: ()=>o,
                              persist: ()=>{}
                              ,
                              preventDefault: ()=>{
                                  n = !0,
                                  t.preventDefault()
                              }
                              ,
                              stopPropagation: ()=>{
                                  o = !0,
                                  t.stopPropagation()
                              }
                          }))
                      }
                      (null == o ? void 0 : o.current) && o.current(e)
                  }
              }
              )
          }
          let v = s.forwardRef((e,t)=>{
              var {imgAttributes: n, heightInt: i, widthInt: o, qualityInt: l, className: u, imgStyle: c, blurStyle: f, isLazy: h, fill: d, placeholder: p, loading: _, srcString: v, config: g, unoptimized: y, loader: w, onLoadRef: b, onLoadingCompleteRef: T, setBlurComplete: S, setShowAltText: R, onLoad: A, onError: x} = e
                , E = a(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "className", "imgStyle", "blurStyle", "isLazy", "fill", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"]);
              return _ = h ? "lazy" : _,
              s.default.createElement(s.default.Fragment, null, s.default.createElement("img", Object.assign({}, E, n, {
                  width: o,
                  height: i,
                  decoding: "async",
                  "data-nimg": d ? "fill" : "1",
                  className: u,
                  loading: _,
                  style: r({}, c, f),
                  ref: s.useCallback(e=>{
                      t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)),
                      e && (x && (e.src = e.src),
                      e.complete && m(e, v, p, b, T, S, y))
                  }
                  , [v, p, b, T, S, x, y, t]),
                  onLoad: e=>{
                      let t = e.currentTarget;
                      m(t, v, p, b, T, S, y)
                  }
                  ,
                  onError: e=>{
                      R(!0),
                      "blur" === p && S(!0),
                      x && x(e)
                  }
              })))
          }
          )
            , g = s.forwardRef((e,t)=>{
              let n, i;
              var o, {src: m, sizes: g, unoptimized: y=!1, priority: w=!1, loading: b, className: T, quality: S, width: R, height: A, fill: x, style: E, onLoad: k, onLoadingComplete: N, placeholder: M="empty", blurDataURL: C, layout: L, objectFit: O, objectPosition: P, lazyBoundary: D, lazyRoot: V} = e, I = a(e, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"]);
              let B = s.useContext(f.ImageConfigContext)
                , U = s.useMemo(()=>{
                  let e = d || B || c.imageConfigDefault
                    , t = [...e.deviceSizes, ...e.imageSizes].sort((e,t)=>e - t)
                    , n = e.deviceSizes.sort((e,t)=>e - t);
                  return r({}, e, {
                      allSizes: t,
                      deviceSizes: n
                  })
              }
              , [B])
                , z = I
                , F = z.loader || h.default;
              delete z.loader;
              let j = "__next_img_default"in F;
              if (j) {
                  if ("custom" === U.loader)
                      throw Error('Image with src "'.concat(m, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
              } else {
                  let e = F;
                  F = t=>{
                      let {config: n} = t
                        , r = a(t, ["config"]);
                      return e(r)
                  }
              }
              if (L) {
                  "fill" === L && (x = !0);
                  let e = {
                      intrinsic: {
                          maxWidth: "100%",
                          height: "auto"
                      },
                      responsive: {
                          width: "100%",
                          height: "auto"
                      }
                  }[L];
                  e && (E = r({}, E, e));
                  let t = {
                      responsive: "100vw",
                      fill: "100vw"
                  }[L];
                  t && !g && (g = t)
              }
              let W = ""
                , $ = _(R)
                , G = _(A);
              if ("object" == typeof (o = m) && (p(o) || void 0 !== o.src)) {
                  let e = p(m) ? m.default : m;
                  if (!e.src)
                      throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));
                  if (!e.height || !e.width)
                      throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));
                  if (n = e.blurWidth,
                  i = e.blurHeight,
                  C = C || e.blurDataURL,
                  W = e.src,
                  !x) {
                      if ($ || G) {
                          if ($ && !G) {
                              let t = $ / e.width;
                              G = Math.round(e.height * t)
                          } else if (!$ && G) {
                              let t = G / e.height;
                              $ = Math.round(e.width * t)
                          }
                      } else
                          $ = e.width,
                          G = e.height
                  }
              }
              let q = !w && ("lazy" === b || void 0 === b);
              ((m = "string" == typeof m ? m : W).startsWith("data:") || m.startsWith("blob:")) && (y = !0,
              q = !1),
              U.unoptimized && (y = !0),
              j && m.endsWith(".svg") && !U.dangerouslyAllowSVG && (y = !0);
              let[Y,H] = s.useState(!1)
                , [K,Z] = s.useState(!1)
                , X = _(S)
                , Q = Object.assign(x ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: O,
                  objectPosition: P
              } : {}, K ? {} : {
                  color: "transparent"
              }, E)
                , J = "blur" === M && C && !Y ? {
                  backgroundSize: Q.objectFit || "cover",
                  backgroundPosition: Q.objectPosition || "50% 50%",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: 'url("data:image/svg+xml;charset=utf-8,'.concat(u.getImageBlurSvg({
                      widthInt: $,
                      heightInt: G,
                      blurWidth: n,
                      blurHeight: i,
                      blurDataURL: C
                  }), '")')
              } : {}
                , ee = function(e) {
                  let {config: t, src: n, unoptimized: r, width: i, quality: o, sizes: a, loader: s} = e;
                  if (r)
                      return {
                          src: n,
                          srcSet: void 0,
                          sizes: void 0
                      };
                  let {widths: l, kind: u} = function(e, t, n) {
                      let {deviceSizes: r, allSizes: i} = e;
                      if (n) {
                          let e = /(^|\s)(1?\d?\d)vw/g
                            , t = [];
                          for (let r; r = e.exec(n); r)
                              t.push(parseInt(r[2]));
                          if (t.length) {
                              let e = .01 * Math.min(...t);
                              return {
                                  widths: i.filter(t=>t >= r[0] * e),
                                  kind: "w"
                              }
                          }
                          return {
                              widths: i,
                              kind: "w"
                          }
                      }
                      if ("number" != typeof t)
                          return {
                              widths: r,
                              kind: "w"
                          };
                      let o = [...new Set([t, 2 * t].map(e=>i.find(t=>t >= e) || i[i.length - 1]))];
                      return {
                          widths: o,
                          kind: "x"
                      }
                  }(t, i, a)
                    , c = l.length - 1;
                  return {
                      sizes: a || "w" !== u ? a : "100vw",
                      srcSet: l.map((e,r)=>"".concat(s({
                          config: t,
                          src: n,
                          quality: o,
                          width: e
                      }), " ").concat("w" === u ? e : r + 1).concat(u)).join(", "),
                      src: s({
                          config: t,
                          src: n,
                          quality: o,
                          width: l[c]
                      })
                  }
              }({
                  config: U,
                  src: m,
                  unoptimized: y,
                  width: $,
                  quality: X,
                  sizes: g,
                  loader: F
              })
                , et = m
                , en = {
                  imageSrcSet: ee.srcSet,
                  imageSizes: ee.sizes,
                  crossOrigin: z.crossOrigin
              }
                , er = s.useRef(k);
              s.useEffect(()=>{
                  er.current = k
              }
              , [k]);
              let ei = s.useRef(N);
              s.useEffect(()=>{
                  ei.current = N
              }
              , [N]);
              let eo = r({
                  isLazy: q,
                  imgAttributes: ee,
                  heightInt: G,
                  widthInt: $,
                  qualityInt: X,
                  className: T,
                  imgStyle: Q,
                  blurStyle: J,
                  loading: b,
                  config: U,
                  fill: x,
                  unoptimized: y,
                  placeholder: M,
                  loader: F,
                  srcString: et,
                  onLoadRef: er,
                  onLoadingCompleteRef: ei,
                  setBlurComplete: H,
                  setShowAltText: Z
              }, z);
              return s.default.createElement(s.default.Fragment, null, s.default.createElement(v, Object.assign({}, eo, {
                  ref: t
              })), w ? s.default.createElement(l.default, null, s.default.createElement("link", Object.assign({
                  key: "__nimg-" + ee.src + ee.srcSet + ee.sizes,
                  rel: "preload",
                  as: "image",
                  href: ee.srcSet ? void 0 : ee.src
              }, en))) : null)
          }
          );
          t.default = g,
          ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
              value: !0
          }),
          Object.assign(t.default, t),
          e.exports = t.default)
      },
      2675: function(e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
              value: !0
          }),
          t.getImageBlurSvg = function(e) {
              let {widthInt: t, heightInt: n, blurWidth: r, blurHeight: i, blurDataURL: o} = e
                , a = r || t
                , s = i || n
                , l = o.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
              return a && s ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a, " ").concat(s, "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r && i ? "1" : "20", "'/%3E").concat(l, "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o, "'/%3E%3C/svg%3E") : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o, "'/%3E%3C/svg%3E")
          }
      },
      9824: function(e, t) {
          "use strict";
          function n(e) {
              let {config: t, src: n, width: r, quality: i} = e;
              return "".concat(t.path, "?url=").concat(encodeURIComponent(n), "&w=").concat(r, "&q=").concat(i || 75)
          }
          Object.defineProperty(t, "__esModule", {
              value: !0
          }),
          t.default = void 0,
          n.__next_img_default = !0,
          t.default = n
      },
      9151: function(e, t, n) {
          "use strict";
          n.r(t),
          n.d(t, {
              default: function() {
                  return k
              }
          });
          var r = n(5893);
          n(8136),
          n(1447);
          var i = n(7294)
            , o = n(9008)
            , a = n.n(o)
            , s = n(4587)
            , l = n(1163)
            , u = n(10)
            , c = n(5675)
            , f = n.n(c);
          function h(e) {
              let t = (0,
              l.useRouter)()
                , [n,o] = (0,
              i.useState)(!1);
              return (0,
              i.useEffect)(()=>{
                  o(!1)
              }
              , [t]),
              (0,
              r.jsxs)("header", {
                  className: "header " + ("/" !== t.pathname || n ? "" : "introHeader"),
                  children: [(0,
                  r.jsxs)("div", {
                      className: "logo_section",
                      onClick: ()=>{
                          (0,
                          s.i)("/", t)
                      }
                      ,
                      children: [(0,
                      r.jsx)(f(), {
                          width: 35,
                          height: 30,
                          className: "logo_white",
                          style: {
                              height: "auto"
                          },
                          alt: "logo",
                          src: "/img/logo_w.svg"
                      }), (0,
                      r.jsx)(f(), {
                          width: 35,
                          height: 30,
                          className: "logo_black",
                          style: {
                              height: "auto"
                          },
                          alt: "logo",
                          src: "/img/logo.svg"
                      })]
                  }), (0,
                  r.jsxs)("nav", {
                      className: "menu_section",
                      children: [(0,
                      r.jsx)("button", {
                          className: "/about" === t.pathname ? "active" : "",
                          onClick: ()=>{
                              (0,
                              s.i)("/about", t)
                          }
                          ,
                          children: "aBout"
                      }), (0,
                      r.jsx)("button", {
                          onClick: ()=>{
                              (0,
                              u.W)("@@ACTIVE_ACHIVE"),
                              o(!n)
                          }
                          ,
                          children: n ? "Close" : "aRchive"
                      })]
                  })]
              })
          }
          n(723);
          var d = n(9577)
            , p = n(4480);
          let _ = e=>{
              let {children: t} = e;
              (0,
              l.useRouter)();
              let[n,o] = (0,
              p.FV)(d.NA);
              return (0,
              i.useLayoutEffect)(()=>{
                  window.history.scrollRestoration = "manual"
              }
              , []),
              (0,
              r.jsxs)(r.Fragment, {
                  children: [(0,
                  r.jsxs)(a(), {
                      children: [(0,
                      r.jsx)("title", {
                          children: "aL"
                      }), (0,
                      r.jsx)("meta", {
                          name: "description",
                          content: "Integrated Marketing Communication Agency"
                      }), (0,
                      r.jsx)("meta", {
                          name: "viewport",
                          content: "width=device-width, initial-scale=1.0, maximum-scale=5.0"
                      }), (0,
                      r.jsx)("meta", {
                          name: "apple-mobile-web-app-capable",
                          content: "yes"
                      }), (0,
                      r.jsx)("meta", {
                          property: "og:title",
                          content: "aL"
                      }), (0,
                      r.jsx)("meta", {
                          property: "og:description",
                          content: "Integrated Marketing Communication Agency"
                      }), (0,
                      r.jsx)("meta", {
                          property: "og:type",
                          content: "website"
                      }), (0,
                      r.jsx)("meta", {
                          property: "og:url",
                          content: "https://alcre.vercel.app"
                      }), (0,
                      r.jsx)("meta", {
                          property: "og:image",
                          content: "/snsThumnail.png"
                      }), (0,
                      r.jsx)("link", {
                          rel: "apple-touch-icon",
                          sizes: "57x57",
                          href: "/favicon/apple-icon-57x57.png"
                      }), (0,
                      r.jsx)("link", {
                          rel: "apple-touch-icon",
                          sizes: "60x60",
                          href: "/favicon/apple-icon-60x60.png"
                      }), (0,
                      r.jsx)("link", {
                          rel: "apple-touch-icon",
                          sizes: "72x72",
                          href: "/favicon/apple-icon-72x72.png"
                      }), (0,
                      r.jsx)("link", {
                          rel: "apple-touch-icon",
                          sizes: "76x76",
                          href: "/favicon/apple-icon-76x76.png"
                      }), (0,
                      r.jsx)("link", {
                          rel: "apple-touch-icon",
                          sizes: "114x114",
                          href: "/favicon/apple-icon-114x114.png"
                      }), (0,
                      r.jsx)("link", {
                          rel: "apple-touch-icon",
                          sizes: "120x120",
                          href: "/favicon/apple-icon-120x120.png"
                      }), (0,
                      r.jsx)("link", {
                          rel: "apple-touch-icon",
                          sizes: "144x144",
                          href: "/favicon/apple-icon-144x144.png"
                      }), (0,
                      r.jsx)("link", {
                          rel: "apple-touch-icon",
                          sizes: "152x152",
                          href: "/favicon/apple-icon-152x152.png"
                      }), (0,
                      r.jsx)("link", {
                          rel: "apple-touch-icon",
                          sizes: "180x180",
                          href: "/favicon/apple-icon-180x180.png"
                      }), (0,
                      r.jsx)("link", {
                          rel: "icon",
                          type: "image/png",
                          sizes: "192x192",
                          href: "/favicon/android-icon-192x192.png"
                      }), (0,
                      r.jsx)("link", {
                          rel: "icon",
                          type: "image/png",
                          sizes: "32x32",
                          href: "/favicon/favicon-32x32.png"
                      }), (0,
                      r.jsx)("link", {
                          rel: "icon",
                          type: "image/png",
                          sizes: "96x96",
                          href: "/favicon/favicon-96x96.png"
                      }), (0,
                      r.jsx)("link", {
                          rel: "icon",
                          type: "image/png",
                          sizes: "16x16",
                          href: "/favicon/favicon-16x16.png"
                      }), (0,
                      r.jsx)("link", {
                          rel: "manifest",
                          href: "/favicon/manifest.json"
                      }), (0,
                      r.jsx)("meta", {
                          name: "msapplication-TileColor",
                          content: "#111"
                      }), (0,
                      r.jsx)("meta", {
                          name: "msapplication-TileImage",
                          content: "/favicon/ms-icon-144x144.png"
                      }), (0,
                      r.jsx)("meta", {
                          name: "theme-color",
                          content: "#111"
                      })]
                  }), (0,
                  r.jsx)(h, {}), (0,
                  r.jsx)("div", {
                      className: "move_back",
                      children: (0,
                      r.jsx)("svg", {
                          id: "menuMask",
                          className: "transition",
                          viewBox: "0 0 100 100",
                          preserveAspectRatio: "none",
                          children: (0,
                          r.jsx)("path", {
                              className: "path",
                              dur: "10s",
                              fill: "#fff",
                              vectorEffect: "non-scaling-stroke",
                              d: "M 0 100 V 100 Q 50 100 100 100 V 100 z"
                          })
                      })
                  }), (0,
                  r.jsx)("div", {
                      className: "thunmail_img",
                      children: null !== n && (0,
                      r.jsx)(f(), {
                          width: 1900,
                          height: 950,
                          alt: "project thunmail",
                          src: n.url
                      }, "thumnail" + n)
                  }), (0,
                  r.jsx)("div", {
                      id: "smooth-wrapper",
                      children: (0,
                      r.jsx)("main", {
                          className: "contents_wrap",
                          children: t
                      })
                  })]
              })
          }
          ;
          n(4248);
          let m = i.createContext({})
            , v = ({client: e, linkResolver: t, richTextComponents: n, internalLinkComponent: o, externalLinkComponent: a, children: s})=>{
              let l = i.useMemo(()=>({
                  client: e,
                  linkResolver: t,
                  richTextComponents: n,
                  internalLinkComponent: o,
                  externalLinkComponent: a
              }), [e, t, n, o, a]);
              return (0,
              r.jsx)(m.Provider, {
                  value: l,
                  children: s
              })
          }
          ;
          var g = n(4298)
            , y = n.n(g);
          let w = e=>e.replace(/%3B/g, ";")
            , b = e=>{
              let t;
              let n = e.split("; ");
              for (let e of n) {
                  let n = e.split("=")
                    , r = w(n[0]).replace(/%3D/g, "=");
                  if ("io.prismic.preview" === r) {
                      t = w(n.slice(1).join("="));
                      continue
                  }
              }
              return t
          }
            , T = e=>(decodeURIComponent(e).match(/"(.+).prismic.io"/) || [])[1];
          function S({repositoryName: e, children: t, updatePreviewURL: n="/api/preview", exitPreviewURL: o="/api/exit-preview"}) {
              let a = (0,
              l.useRouter)()
                , s = a.basePath + n
                , u = a.basePath + o;
              return i.useEffect(()=>{
                  let t = async()=>{
                      let e = await globalThis.fetch(s);
                      e.redirected ? globalThis.location.reload() : console.error(`[<PrismicPreview>] Failed to start or update Preview Mode using the "${s}" API endpoint. Does it exist?`)
                  }
                    , n = async e=>{
                      e.preventDefault(),
                      await t()
                  }
                    , r = async e=>{
                      e.preventDefault();
                      let t = await globalThis.fetch(u);
                      t.ok ? globalThis.location.reload() : console.error(`[<PrismicPreview>] Failed to exit Preview Mode using the "${u}" API endpoint. Does it exist?`)
                  }
                  ;
                  if (a.isPreview)
                      window.addEventListener("prismicPreviewUpdate", n),
                      window.addEventListener("prismicPreviewEnd", r);
                  else {
                      let n = b(globalThis.document.cookie);
                      if (n) {
                          let r = window.location.href.startsWith(window.location.origin + a.basePath)
                            , i = T(n);
                          r && i === e && t()
                      }
                  }
                  return ()=>{
                      window.removeEventListener("prismicPreviewUpdate", n),
                      window.removeEventListener("prismicPreviewEnd", r)
                  }
              }
              , [e, u, s, a.isPreview, a.basePath]),
              (0,
              r.jsxs)(r.Fragment, {
                  children: [t, (0,
                  r.jsx)(y(), {
                    //   src: `https://static.cdn.prismic.io/prismic.js?repo=${e}&new=true`,
                      strategy: "lazyOnload"
                  })]
              })
          }
          var R = n(2031)
            , A = ()=>{
              window.va || (window.va = function(...e) {
                  (window.vaq = window.vaq || []).push(e)
              }
              )
          }
            , x = (e={
              debug: !0
          })=>{
              var t;
              if (!("undefined" != typeof window))
                  return;
              let n = function(e="auto") {
                  return "auto" === e ? !function() {
                      try {
                          return !1
                      } catch (e) {
                          return !1
                      }
                  }() ? "production" : "development" : e
              }(e.mode);
              A(),
              e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend));
              let r = "development" === n ? "https://cdn.vercel-insights.com/v1/script.debug.js" : "/_vercel/insights/script.js";
              if (document.head.querySelector(`script[src*="${r}"]`))
                  return;
              let i = document.createElement("script");
              i.src = r,
              i.defer = !0,
              i.setAttribute("data-sdkn", "@vercel/analytics"),
              i.setAttribute("data-sdkv", "0.1.11"),
              "development" === n && !1 === e.debug && i.setAttribute("data-debug", "false"),
              document.head.appendChild(i)
          }
          ;
          function E({beforeSend: e, debug: t=!0, mode: n="auto"}) {
              return (0,
              i.useEffect)(()=>{
                  x({
                      beforeSend: e,
                      debug: t,
                      mode: n
                  })
              }
              , [e, t, n]),
              null
          }
          var k = function(e) {
              let {Component: t, pageProps: n} = e;
              return (0,
              r.jsxs)(p.Wh, {
                  children: [(0,
                  r.jsx)(v, {
                      children: (0,
                      r.jsx)(S, {
                          repositoryName: R.A,
                          children: (0,
                          r.jsx)(_, {
                              children: (0,
                              r.jsx)(t, {
                                  ...n
                              })
                          })
                      })
                  }), (0,
                  r.jsx)(E, {})]
              })
          }
      },
      8136: function() {},
      1447: function() {},
      4248: function() {},
      7663: function(e) {
          !function() {
              var t = {
                  229: function(e) {
                      var t, n, r, i = e.exports = {};
                      function o() {
                          throw Error("setTimeout has not been defined")
                      }
                      function a() {
                          throw Error("clearTimeout has not been defined")
                      }
                      function s(e) {
                          if (t === setTimeout)
                              return setTimeout(e, 0);
                          if ((t === o || !t) && setTimeout)
                              return t = setTimeout,
                              setTimeout(e, 0);
                          try {
                              return t(e, 0)
                          } catch (n) {
                              try {
                                  return t.call(null, e, 0)
                              } catch (n) {
                                  return t.call(this, e, 0)
                              }
                          }
                      }
                      !function() {
                          try {
                              t = "function" == typeof setTimeout ? setTimeout : o
                          } catch (e) {
                              t = o
                          }
                          try {
                              n = "function" == typeof clearTimeout ? clearTimeout : a
                          } catch (e) {
                              n = a
                          }
                      }();
                      var l = []
                        , u = !1
                        , c = -1;
                      function f() {
                          u && r && (u = !1,
                          r.length ? l = r.concat(l) : c = -1,
                          l.length && h())
                      }
                      function h() {
                          if (!u) {
                              var e = s(f);
                              u = !0;
                              for (var t = l.length; t; ) {
                                  for (r = l,
                                  l = []; ++c < t; )
                                      r && r[c].run();
                                  c = -1,
                                  t = l.length
                              }
                              r = null,
                              u = !1,
                              function(e) {
                                  if (n === clearTimeout)
                                      return clearTimeout(e);
                                  if ((n === a || !n) && clearTimeout)
                                      return n = clearTimeout,
                                      clearTimeout(e);
                                  try {
                                      n(e)
                                  } catch (t) {
                                      try {
                                          return n.call(null, e)
                                      } catch (t) {
                                          return n.call(this, e)
                                      }
                                  }
                              }(e)
                          }
                      }
                      function d(e, t) {
                          this.fun = e,
                          this.array = t
                      }
                      function p() {}
                      i.nextTick = function(e) {
                          var t = Array(arguments.length - 1);
                          if (arguments.length > 1)
                              for (var n = 1; n < arguments.length; n++)
                                  t[n - 1] = arguments[n];
                          l.push(new d(e,t)),
                          1 !== l.length || u || s(h)
                      }
                      ,
                      d.prototype.run = function() {
                          this.fun.apply(null, this.array)
                      }
                      ,
                      i.title = "browser",
                      i.browser = !0,
                      i.env = {},
                      i.argv = [],
                      i.version = "",
                      i.versions = {},
                      i.on = p,
                      i.addListener = p,
                      i.once = p,
                      i.off = p,
                      i.removeListener = p,
                      i.removeAllListeners = p,
                      i.emit = p,
                      i.prependListener = p,
                      i.prependOnceListener = p,
                      i.listeners = function(e) {
                          return []
                      }
                      ,
                      i.binding = function(e) {
                          throw Error("process.binding is not supported")
                      }
                      ,
                      i.cwd = function() {
                          return "/"
                      }
                      ,
                      i.chdir = function(e) {
                          throw Error("process.chdir is not supported")
                      }
                      ,
                      i.umask = function() {
                          return 0
                      }
                  }
              }
                , n = {};
              function r(e) {
                  var i = n[e];
                  if (void 0 !== i)
                      return i.exports;
                  var o = n[e] = {
                      exports: {}
                  }
                    , a = !0;
                  try {
                      t[e](o, o.exports, r),
                      a = !1
                  } finally {
                      a && delete n[e]
                  }
                  return o.exports
              }
              r.ab = "//";
              var i = r(229);
              e.exports = i
          }()
      },
      9008: function(e, t, n) {
          e.exports = n(3121)
      },
      5675: function(e, t, n) {
          e.exports = n(9749)
      },
      1163: function(e, t, n) {
          e.exports = n(880)
      },
      4298: function(e, t, n) {
          e.exports = n(3573)
      },
      4480: function(e, t, n) {
          "use strict";
          let r;
          n.d(t, {
              FV: function() {
                  return oV
              },
              Wh: function() {
                  return oP
              },
              cn: function() {
                  return oD
              }
          });
          var i, o, a, s, l = n(7294), u = n(3935), c = n(3454), f = function(e) {
              let t = Error(e);
              if (void 0 === t.stack)
                  try {
                      throw t
                  } catch (e) {}
              return t
          }, h = function(e) {
              return !!e && "function" == typeof e.then
          }, d = function(e, t) {
              if (null != e)
                  return e;
              throw f(null != t ? t : "Got unexpected null or undefined")
          };
          function p(e, t, n) {
              return t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = n,
              e
          }
          class _ {
              getValue() {
                  throw f("BaseLoadable")
              }
              toPromise() {
                  throw f("BaseLoadable")
              }
              valueMaybe() {
                  throw f("BaseLoadable")
              }
              valueOrThrow() {
                  throw f(`Loadable expected value, but in "${this.state}" state`)
              }
              promiseMaybe() {
                  throw f("BaseLoadable")
              }
              promiseOrThrow() {
                  throw f(`Loadable expected promise, but in "${this.state}" state`)
              }
              errorMaybe() {
                  throw f("BaseLoadable")
              }
              errorOrThrow() {
                  throw f(`Loadable expected error, but in "${this.state}" state`)
              }
              is(e) {
                  return e.state === this.state && e.contents === this.contents
              }
              map(e) {
                  throw f("BaseLoadable")
              }
          }
          class m extends _ {
              constructor(e) {
                  super(),
                  p(this, "state", "hasValue"),
                  p(this, "contents", void 0),
                  this.contents = e
              }
              getValue() {
                  return this.contents
              }
              toPromise() {
                  return Promise.resolve(this.contents)
              }
              valueMaybe() {
                  return this.contents
              }
              valueOrThrow() {
                  return this.contents
              }
              promiseMaybe() {}
              errorMaybe() {}
              map(e) {
                  try {
                      let t = e(this.contents);
                      return h(t) ? b(t) : R(t) ? t : y(t)
                  } catch (t) {
                      return h(t) ? b(t.next(()=>this.map(e))) : w(t)
                  }
              }
          }
          class v extends _ {
              constructor(e) {
                  super(),
                  p(this, "state", "hasError"),
                  p(this, "contents", void 0),
                  this.contents = e
              }
              getValue() {
                  throw this.contents
              }
              toPromise() {
                  return Promise.reject(this.contents)
              }
              valueMaybe() {}
              promiseMaybe() {}
              errorMaybe() {
                  return this.contents
              }
              errorOrThrow() {
                  return this.contents
              }
              map(e) {
                  return this
              }
          }
          class g extends _ {
              constructor(e) {
                  super(),
                  p(this, "state", "loading"),
                  p(this, "contents", void 0),
                  this.contents = e
              }
              getValue() {
                  throw this.contents
              }
              toPromise() {
                  return this.contents
              }
              valueMaybe() {}
              promiseMaybe() {
                  return this.contents
              }
              promiseOrThrow() {
                  return this.contents
              }
              errorMaybe() {}
              map(e) {
                  return b(this.contents.then(t=>{
                      let n = e(t);
                      if (R(n))
                          switch (n.state) {
                          case "hasValue":
                          case "loading":
                              return n.contents;
                          case "hasError":
                              throw n.contents
                          }
                      return n
                  }
                  ).catch(t=>{
                      if (h(t))
                          return t.then(()=>this.map(e).contents);
                      throw t
                  }
                  ))
              }
          }
          function y(e) {
              return Object.freeze(new m(e))
          }
          function w(e) {
              return Object.freeze(new v(e))
          }
          function b(e) {
              return Object.freeze(new g(e))
          }
          function T() {
              return Object.freeze(new g(new Promise(()=>{}
              )))
          }
          function S(e) {
              let t = Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map(t=>e[t])
                , n = t.map(e=>R(e) ? e : h(e) ? b(e) : y(e))
                , r = n.every(e=>"hasValue" === e.state) ? y(n.map(e=>e.contents)) : n.some(e=>"hasError" === e.state) ? w(d(n.find(e=>"hasError" === e.state), "Invalid loadable passed to loadableAll").contents) : b(Promise.all(n.map(e=>e.contents)));
              return Array.isArray(e) ? r : r.map(t=>Object.getOwnPropertyNames(e).reduce((e,n,r)=>({
                  ...e,
                  [n]: t[r]
              }), {}))
          }
          function R(e) {
              return e instanceof _
          }
          var A = {
              loadableWithValue: y,
              loadableWithError: w,
              loadableWithPromise: b,
              loadableLoading: T,
              loadableAll: S,
              isLoadable: R,
              RecoilLoadable: {
                  of: e=>h(e) ? b(e) : R(e) ? e : y(e),
                  error: e=>w(e),
                  loading: ()=>T(),
                  all: S,
                  isLoadable: R
              }
          }
            , x = Object.freeze({
              __proto__: null,
              loadableWithValue: A.loadableWithValue,
              loadableWithError: A.loadableWithError,
              loadableWithPromise: A.loadableWithPromise,
              loadableLoading: A.loadableLoading,
              loadableAll: A.loadableAll,
              isLoadable: A.isLoadable,
              RecoilLoadable: A.RecoilLoadable
          });
          let E = new Map().set("recoil_hamt_2020", !0).set("recoil_sync_external_store", !0).set("recoil_suppress_rerender_in_callback", !0).set("recoil_memory_managament_2020", !0);
          function k(e) {
              var t;
              return null !== (t = E.get(e)) && void 0 !== t && t
          }
          k.setPass = e=>{
              E.set(e, !0)
          }
          ,
          k.setFail = e=>{
              E.set(e, !1)
          }
          ,
          k.clear = ()=>{
              E.clear()
          }
          ;
          var N = function(e, t, {error: n}={}) {
              return null
          };
          let M = null !== (o = l.createMutableSource) && void 0 !== o ? o : l.unstable_createMutableSource
            , C = null !== (a = l.useMutableSource) && void 0 !== a ? a : l.unstable_useMutableSource
            , L = null !== (s = l.useSyncExternalStore) && void 0 !== s ? s : l.unstable_useSyncExternalStore
            , O = !1;
          var P = {
              createMutableSource: M,
              useMutableSource: C,
              useSyncExternalStore: L,
              currentRendererSupportsUseSyncExternalStore: function() {
                  var e;
                  let {ReactCurrentDispatcher: t, ReactCurrentOwner: n} = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                    , r = null !== (e = null == t ? void 0 : t.current) && void 0 !== e ? e : n.currentDispatcher
                    , i = null != r.useSyncExternalStore;
                  return !L || i || O || (O = !0,
                  N("A React renderer without React 18+ API support is being used with React 18+.")),
                  i
              },
              reactMode: function() {
                  return k("recoil_transition_support") ? {
                      mode: "TRANSITION_SUPPORT",
                      early: !0,
                      concurrent: !0
                  } : k("recoil_sync_external_store") && null != L ? {
                      mode: "SYNC_EXTERNAL_STORE",
                      early: !0,
                      concurrent: !1
                  } : k("recoil_mutable_source") && null != C && "undefined" != typeof window && !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE ? k("recoil_suppress_rerender_in_callback") ? {
                      mode: "MUTABLE_SOURCE",
                      early: !0,
                      concurrent: !0
                  } : {
                      mode: "MUTABLE_SOURCE",
                      early: !1,
                      concurrent: !1
                  } : k("recoil_suppress_rerender_in_callback") ? {
                      mode: "LEGACY",
                      early: !0,
                      concurrent: !1
                  } : {
                      mode: "LEGACY",
                      early: !1,
                      concurrent: !1
                  }
              },
              isFastRefreshEnabled: function() {
                  return !1
              }
          };
          let D = {
              RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0
          };
          !function() {
              var e, t;
              if (void 0 === c || (null == c ? void 0 : c.env) == null)
                  return;
              let n = null === (e = c.env.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED) || void 0 === e ? void 0 : null === (t = e.toLowerCase()) || void 0 === t ? void 0 : t.trim();
              if (null != n && "" !== n) {
                  if (!["true", "false"].includes(n))
                      throw f(`process.env.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED value must be 'true', 'false', or empty: ${n}`);
                  D.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = "true" === n
              }
          }();
          class V {
              constructor(e) {
                  p(this, "key", void 0),
                  this.key = e
              }
              toJSON() {
                  return {
                      key: this.key
                  }
              }
          }
          class I extends V {
          }
          class B extends V {
          }
          var U = {
              AbstractRecoilValue: V,
              RecoilState: I,
              RecoilValueReadOnly: B,
              isRecoilValue: function(e) {
                  return e instanceof I || e instanceof B
              }
          }
            , z = Object.freeze({
              __proto__: null,
              AbstractRecoilValue: U.AbstractRecoilValue,
              RecoilState: U.RecoilState,
              RecoilValueReadOnly: U.RecoilValueReadOnly,
              isRecoilValue: U.isRecoilValue
          })
            , F = function(e, ...t) {}
            , j = function(e, t) {
              return function*() {
                  let n = 0;
                  for (let r of e)
                      yield t(r, n++)
              }()
          };
          let {isFastRefreshEnabled: W} = P;
          class $ {
          }
          let G = new $
            , q = new Map
            , Y = new Map;
          class H extends Error {
          }
          let K = new Map;
          function Z(e) {
              return K.get(e)
          }
          var X = {
              nodes: q,
              recoilValues: Y,
              registerNode: function(e) {
                  D.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED && function(e) {
                      if (q.has(e)) {
                          let t = `Duplicate atom key "${e}". This is a FATAL ERROR in
        production. But it is safe to ignore this warning if it occurred because of
        hot module replacement.`;
                          console.warn(t)
                      }
                  }(e.key),
                  q.set(e.key, e);
                  let t = null == e.set ? new z.RecoilValueReadOnly(e.key) : new z.RecoilState(e.key);
                  return Y.set(e.key, t),
                  t
              },
              getNode: function(e) {
                  let t = q.get(e);
                  if (null == t)
                      throw new H(`Missing definition for RecoilValue: "${e}""`);
                  return t
              },
              getNodeMaybe: function(e) {
                  return q.get(e)
              },
              deleteNodeConfigIfPossible: function(e) {
                  var t, n;
                  if (!k("recoil_memory_managament_2020"))
                      return;
                  let r = q.get(e);
                  null != r && null !== (t = r.shouldDeleteConfigOnRelease) && void 0 !== t && t.call(r) && (q.delete(e),
                  null === (n = Z(e)) || void 0 === n || n(),
                  K.delete(e))
              },
              setConfigDeletionHandler: function(e, t) {
                  k("recoil_memory_managament_2020") && (void 0 === t ? K.delete(e) : K.set(e, t))
              },
              getConfigDeletionHandler: Z,
              recoilValuesForKeys: function(e) {
                  return j(e, e=>d(Y.get(e)))
              },
              NodeMissingError: H,
              DefaultValue: $,
              DEFAULT_VALUE: G
          }
            , Q = {
              enqueueExecution: function(e, t) {
                  t()
              }
          }
            , J = (function(e) {
              var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              }
                , n = {}
                , r = {}
                , i = function(e) {
                  return function() {
                      return e
                  }
              }
                , o = n.hash = function(e) {
                  var n = void 0 === e ? "undefined" : t(e);
                  if ("number" === n)
                      return e;
                  "string" !== n && (e += "");
                  for (var r = 0, i = 0, o = e.length; i < o; ++i)
                      r = (r << 5) - r + e.charCodeAt(i) | 0;
                  return r
              }
                , a = function(e, t) {
                  return t >>> e & 31
              }
                , s = function(e) {
                  return 1 << e
              }
                , l = function(e, t) {
                  var n;
                  return n = e & t - 1,
                  n -= n >> 1 & 1431655765,
                  n = (n = (858993459 & n) + (n >> 2 & 858993459)) + (n >> 4) & 252645135,
                  n += n >> 8,
                  127 & (n += n >> 16)
              }
                , u = function(e, t, n, r) {
                  var i = r;
                  if (!e) {
                      var o = r.length;
                      i = Array(o);
                      for (var a = 0; a < o; ++a)
                          i[a] = r[a]
                  }
                  return i[t] = n,
                  i
              }
                , c = function(e, t, n) {
                  var r = n.length - 1
                    , i = 0
                    , o = 0
                    , a = n;
                  if (e)
                      i = o = t;
                  else
                      for (a = Array(r); i < t; )
                          a[o++] = n[i++];
                  for (++i; i <= r; )
                      a[o++] = n[i++];
                  return e && (a.length = r),
                  a
              }
                , f = function(e, t, n, r) {
                  var i = r.length;
                  if (e) {
                      for (var o = i; o >= t; )
                          r[o--] = r[o];
                      return r[t] = n,
                      r
                  }
                  for (var a = 0, s = 0, l = Array(i + 1); a < t; )
                      l[s++] = r[a++];
                  for (l[t] = n; a < i; )
                      l[++s] = r[a++];
                  return l
              }
                , h = {
                  __hamt_isEmpty: !0
              }
                , d = function(e) {
                  return e === h || e && e.__hamt_isEmpty
              }
                , p = function(e, t, n, r) {
                  return {
                      type: 1,
                      edit: e,
                      hash: t,
                      key: n,
                      value: r,
                      _modify: S
                  }
              }
                , _ = function(e, t, n) {
                  return {
                      type: 2,
                      edit: e,
                      hash: t,
                      children: n,
                      _modify: R
                  }
              }
                , m = function(e, t, n) {
                  return {
                      type: 3,
                      edit: e,
                      mask: t,
                      children: n,
                      _modify: A
                  }
              }
                , v = function(e, t, n) {
                  return {
                      type: 4,
                      edit: e,
                      size: t,
                      children: n,
                      _modify: x
                  }
              }
                , g = function(e, t, n, r, i) {
                  for (var o = [], a = r, s = 0, l = 0; a; ++l)
                      1 & a && (o[l] = i[s++]),
                      a >>>= 1;
                  return o[t] = n,
                  v(e, s + 1, o)
              }
                , y = function(e, t, n, r) {
                  for (var i = Array(t - 1), o = 0, a = 0, s = 0, l = r.length; s < l; ++s)
                      if (s !== n) {
                          var u = r[s];
                          u && !d(u) && (i[o++] = u,
                          a |= 1 << s)
                      }
                  return m(e, a, i)
              }
                , w = function e(t, n, r, i, o, l) {
                  if (r === o)
                      return _(t, r, [l, i]);
                  var u = a(n, r)
                    , c = a(n, o);
                  return m(t, s(u) | s(c), u === c ? [e(t, n + 5, r, i, o, l)] : u < c ? [i, l] : [l, i])
              }
                , b = function(e, t, n, i, o, a, s, l) {
                  for (var f = o.length, h = 0; h < f; ++h) {
                      var d = o[h];
                      if (n(s, d.key)) {
                          var _ = d.value
                            , m = a(_);
                          if (m === _)
                              return o;
                          if (m === r)
                              return --l.value,
                              c(e, h, o);
                          return u(e, h, p(t, i, s, m), o)
                      }
                  }
                  var v = a();
                  return v === r ? o : (++l.value,
                  u(e, f, p(t, i, s, v), o))
              }
                , T = function(e, t) {
                  return e === t.edit
              }
                , S = function(e, t, n, i, o, a, s) {
                  if (t(a, this.key)) {
                      var l = i(this.value);
                      return l === this.value ? this : l === r ? (--s.value,
                      h) : T(e, this) ? (this.value = l,
                      this) : p(e, o, a, l)
                  }
                  var u = i();
                  return u === r ? this : (++s.value,
                  w(e, n, this.hash, this, o, p(e, o, a, u)))
              }
                , R = function(e, t, n, i, o, a, s) {
                  if (o === this.hash) {
                      var l = b(T(e, this), e, t, this.hash, this.children, i, a, s);
                      return l === this.children ? this : l.length > 1 ? _(e, this.hash, l) : l[0]
                  }
                  var u = i();
                  return u === r ? this : (++s.value,
                  w(e, n, this.hash, this, o, p(e, o, a, u)))
              }
                , A = function(e, t, n, r, i, o, p) {
                  var _, v = this.mask, y = this.children, w = a(n, i), b = s(w), S = l(v, b), R = v & b, A = R ? y[S] : h, x = A._modify(e, t, n + 5, r, i, o, p);
                  if (A === x)
                      return this;
                  var E = T(e, this)
                    , k = v
                    , N = void 0;
                  if (R && d(x)) {
                      if (!(k &= ~b))
                          return h;
                      if (y.length <= 2 && ((_ = y[1 ^ S]) === h || 1 === _.type || 2 === _.type))
                          return y[1 ^ S];
                      N = c(E, S, y)
                  } else if (R || d(x))
                      N = u(E, S, x, y);
                  else {
                      if (y.length >= 16)
                          return g(e, w, x, v, y);
                      k |= b,
                      N = f(E, S, x, y)
                  }
                  return E ? (this.mask = k,
                  this.children = N,
                  this) : m(e, k, N)
              }
                , x = function(e, t, n, r, i, o, s) {
                  var l = this.size
                    , c = this.children
                    , f = a(n, i)
                    , p = c[f]
                    , _ = (p || h)._modify(e, t, n + 5, r, i, o, s);
                  if (p === _)
                      return this;
                  var m = T(e, this)
                    , g = void 0;
                  if (d(p) && !d(_))
                      ++l,
                      g = u(m, f, _, c);
                  else if (!d(p) && d(_)) {
                      if (--l <= 8)
                          return y(e, l, f, c);
                      g = u(m, f, h, c)
                  } else
                      g = u(m, f, _, c);
                  return m ? (this.size = l,
                  this.children = g,
                  this) : v(e, l, g)
              };
              function E(e, t, n, r, i) {
                  this._editable = e,
                  this._edit = t,
                  this._config = n,
                  this._root = r,
                  this._size = i
              }
              h._modify = function(e, t, n, i, o, a, s) {
                  var l = i();
                  return l === r ? h : (++s.value,
                  p(e, o, a, l))
              }
              ,
              E.prototype.setTree = function(e, t) {
                  return this._editable ? (this._root = e,
                  this._size = t,
                  this) : e === this._root ? this : new E(this._editable,this._edit,this._config,e,t)
              }
              ;
              var k = n.tryGetHash = function(e, t, n, r) {
                  for (var i = r._root, o = 0, u = r._config.keyEq; ; )
                      switch (i.type) {
                      case 1:
                          return u(n, i.key) ? i.value : e;
                      case 2:
                          if (t === i.hash)
                              for (var c = i.children, f = 0, h = c.length; f < h; ++f) {
                                  var d = c[f];
                                  if (u(n, d.key))
                                      return d.value
                              }
                          return e;
                      case 3:
                          var p = s(a(o, t));
                          if (i.mask & p) {
                              i = i.children[l(i.mask, p)],
                              o += 5;
                              break
                          }
                          return e;
                      case 4:
                          if (i = i.children[a(o, t)]) {
                              o += 5;
                              break
                          }
                          return e;
                      default:
                          return e
                      }
              }
              ;
              E.prototype.tryGetHash = function(e, t, n) {
                  return k(e, t, n, this)
              }
              ;
              var N = n.tryGet = function(e, t, n) {
                  return k(e, n._config.hash(t), t, n)
              }
              ;
              E.prototype.tryGet = function(e, t) {
                  return N(e, t, this)
              }
              ;
              var M = n.getHash = function(e, t, n) {
                  return k(void 0, e, t, n)
              }
              ;
              E.prototype.getHash = function(e, t) {
                  return M(e, t, this)
              }
              ,
              n.get = function(e, t) {
                  return k(void 0, t._config.hash(e), e, t)
              }
              ,
              E.prototype.get = function(e, t) {
                  return N(t, e, this)
              }
              ;
              var C = n.has = function(e, t, n) {
                  return k(r, e, t, n) !== r
              }
              ;
              E.prototype.hasHash = function(e, t) {
                  return C(e, t, this)
              }
              ;
              var L = n.has = function(e, t) {
                  return C(t._config.hash(e), e, t)
              }
              ;
              E.prototype.has = function(e) {
                  return L(e, this)
              }
              ;
              var O = function(e, t) {
                  return e === t
              };
              n.make = function(e) {
                  return new E(0,0,{
                      keyEq: e && e.keyEq || O,
                      hash: e && e.hash || o
                  },h,0)
              }
              ,
              n.empty = n.make();
              var P = n.isEmpty = function(e) {
                  return e && !!d(e._root)
              }
              ;
              E.prototype.isEmpty = function() {
                  return P(this)
              }
              ;
              var D = n.modifyHash = function(e, t, n, r) {
                  var i = {
                      value: r._size
                  }
                    , o = r._root._modify(r._editable ? r._edit : NaN, r._config.keyEq, 0, e, t, n, i);
                  return r.setTree(o, i.value)
              }
              ;
              E.prototype.modifyHash = function(e, t, n) {
                  return D(n, e, t, this)
              }
              ;
              var V = n.modify = function(e, t, n) {
                  return D(e, n._config.hash(t), t, n)
              }
              ;
              E.prototype.modify = function(e, t) {
                  return V(t, e, this)
              }
              ;
              var I = n.setHash = function(e, t, n, r) {
                  return D(i(n), e, t, r)
              }
              ;
              E.prototype.setHash = function(e, t, n) {
                  return I(e, t, n, this)
              }
              ;
              var B = n.set = function(e, t, n) {
                  return I(n._config.hash(e), e, t, n)
              }
              ;
              E.prototype.set = function(e, t) {
                  return B(e, t, this)
              }
              ;
              var U = i(r)
                , z = n.removeHash = function(e, t, n) {
                  return D(U, e, t, n)
              }
              ;
              E.prototype.removeHash = E.prototype.deleteHash = function(e, t) {
                  return z(e, t, this)
              }
              ;
              var F = n.remove = function(e, t) {
                  return z(t._config.hash(e), e, t)
              }
              ;
              E.prototype.remove = E.prototype.delete = function(e) {
                  return F(e, this)
              }
              ;
              var j = n.beginMutation = function(e) {
                  return new E(e._editable + 1,e._edit + 1,e._config,e._root,e._size)
              }
              ;
              E.prototype.beginMutation = function() {
                  return j(this)
              }
              ;
              var W = n.endMutation = function(e) {
                  return e._editable = e._editable && e._editable - 1,
                  e
              }
              ;
              E.prototype.endMutation = function() {
                  return W(this)
              }
              ;
              var $ = n.mutate = function(e, t) {
                  var n = j(t);
                  return e(n),
                  W(n)
              }
              ;
              E.prototype.mutate = function(e) {
                  return $(e, this)
              }
              ;
              var G = function(e) {
                  return e && q(e[0], e[1], e[2], e[3], e[4])
              }
                , q = function(e, t, n, r, i) {
                  for (; n < e; ) {
                      var o = t[n++];
                      if (o && !d(o))
                          return Y(o, r, [e, t, n, r, i])
                  }
                  return G(i)
              }
                , Y = function(e, t, n) {
                  switch (e.type) {
                  case 1:
                      return {
                          value: t(e),
                          rest: n
                      };
                  case 2:
                  case 4:
                  case 3:
                      var r = e.children;
                      return q(r.length, r, 0, t, n);
                  default:
                      return G(n)
                  }
              }
                , H = {
                  done: !0
              };
              function K(e) {
                  this.v = e
              }
              K.prototype.next = function() {
                  if (!this.v)
                      return H;
                  var e = this.v;
                  return this.v = G(e.rest),
                  e
              }
              ,
              K.prototype[Symbol.iterator] = function() {
                  return this
              }
              ;
              var Z = function(e, t) {
                  return new K(Y(e._root, t))
              }
                , X = function(e) {
                  return [e.key, e.value]
              }
                , Q = n.entries = function(e) {
                  return Z(e, X)
              }
              ;
              E.prototype.entries = E.prototype[Symbol.iterator] = function() {
                  return Q(this)
              }
              ;
              var J = function(e) {
                  return e.key
              }
                , ee = n.keys = function(e) {
                  return Z(e, J)
              }
              ;
              E.prototype.keys = function() {
                  return ee(this)
              }
              ;
              var et = function(e) {
                  return e.value
              }
                , en = n.values = E.prototype.values = function(e) {
                  return Z(e, et)
              }
              ;
              E.prototype.values = function() {
                  return en(this)
              }
              ;
              var er = n.fold = function(e, t, n) {
                  var r = n._root;
                  if (1 === r.type)
                      return e(t, r.value, r.key);
                  for (var i = [r.children], o = void 0; o = i.pop(); )
                      for (var a = 0, s = o.length; a < s; ) {
                          var l = o[a++];
                          l && l.type && (1 === l.type ? t = e(t, l.value, l.key) : i.push(l.children))
                      }
                  return t
              }
              ;
              E.prototype.fold = function(e, t) {
                  return er(e, t, this)
              }
              ;
              var ei = n.forEach = function(e, t) {
                  return er(function(n, r, i) {
                      return e(r, i, t)
                  }, null, t)
              }
              ;
              E.prototype.forEach = function(e) {
                  return ei(e, this)
              }
              ;
              var eo = n.count = function(e) {
                  return e._size
              }
              ;
              E.prototype.count = function() {
                  return eo(this)
              }
              ,
              Object.defineProperty(E.prototype, "size", {
                  get: E.prototype.count
              }),
              e.exports ? e.exports = n : undefined.hamt = n
          }(i = {
              exports: {}
          }, i.exports),
          i.exports);
          class ee {
              constructor(e) {
                  p(this, "_map", void 0),
                  this._map = new Map(null == e ? void 0 : e.entries())
              }
              keys() {
                  return this._map.keys()
              }
              entries() {
                  return this._map.entries()
              }
              get(e) {
                  return this._map.get(e)
              }
              has(e) {
                  return this._map.has(e)
              }
              set(e, t) {
                  return this._map.set(e, t),
                  this
              }
              delete(e) {
                  return this._map.delete(e),
                  this
              }
              clone() {
                  return en(this)
              }
              toMap() {
                  return new Map(this._map)
              }
          }
          class et {
              constructor(e) {
                  if (p(this, "_hamt", J.empty.beginMutation()),
                  e instanceof et) {
                      let t = e._hamt.endMutation();
                      e._hamt = t.beginMutation(),
                      this._hamt = t.beginMutation()
                  } else if (e)
                      for (let[t,n] of e.entries())
                          this._hamt.set(t, n)
              }
              keys() {
                  return this._hamt.keys()
              }
              entries() {
                  return this._hamt.entries()
              }
              get(e) {
                  return this._hamt.get(e)
              }
              has(e) {
                  return this._hamt.has(e)
              }
              set(e, t) {
                  return this._hamt.set(e, t),
                  this
              }
              delete(e) {
                  return this._hamt.delete(e),
                  this
              }
              clone() {
                  return en(this)
              }
              toMap() {
                  return new Map(this._hamt)
              }
          }
          function en(e) {
              return k("recoil_hamt_2020") ? new et(e) : new ee(e)
          }
          var er = Object.freeze({
              __proto__: null,
              persistentMap: {
                  persistentMap: en
              }.persistentMap
          })
            , ei = function(e, ...t) {
              let n = new Set;
              e: for (let r of e) {
                  for (let e of t)
                      if (e.has(r))
                          continue e;
                  n.add(r)
              }
              return n
          }
            , eo = function(e, t) {
              let n = new Map;
              return e.forEach((e,r)=>{
                  n.set(r, t(e, r))
              }
              ),
              n
          };
          function ea(e, t, n, r) {
              let {nodeDeps: i, nodeToNodeSubscriptions: o} = n
                , a = i.get(e);
              if (a && r && a !== r.nodeDeps.get(e))
                  return;
              i.set(e, t);
              let s = null == a ? t : ei(t, a);
              for (let t of s) {
                  o.has(t) || o.set(t, new Set);
                  let n = d(o.get(t));
                  n.add(e)
              }
              if (a) {
                  let n = ei(a, t);
                  for (let t of n) {
                      if (!o.has(t))
                          return;
                      let n = d(o.get(t));
                      n.delete(e),
                      0 === n.size && o.delete(t)
                  }
              }
          }
          var es = {
              cloneGraph: function(e) {
                  return {
                      nodeDeps: eo(e.nodeDeps, e=>new Set(e)),
                      nodeToNodeSubscriptions: eo(e.nodeToNodeSubscriptions, e=>new Set(e))
                  }
              },
              graph: function() {
                  return {
                      nodeDeps: new Map,
                      nodeToNodeSubscriptions: new Map
                  }
              },
              saveDepsToStore: function(e, t, n, r) {
                  var i, o, a, s, l;
                  let u = n.getState();
                  r === u.currentTree.version || r === (null === (i = u.nextTree) || void 0 === i ? void 0 : i.version) || r === (null === (o = u.previousTree) || void 0 === o ? void 0 : o.version) || N("Tried to save dependencies to a discarded tree");
                  let c = n.getGraph(r);
                  if (ea(e, t, c),
                  r === (null === (a = u.previousTree) || void 0 === a ? void 0 : a.version)) {
                      let r = n.getGraph(u.currentTree.version);
                      ea(e, t, r, c)
                  }
                  if (r === (null === (s = u.previousTree) || void 0 === s ? void 0 : s.version) || r === u.currentTree.version) {
                      let r = null === (l = u.nextTree) || void 0 === l ? void 0 : l.version;
                      if (void 0 !== r) {
                          let i = n.getGraph(r);
                          ea(e, t, i, c)
                      }
                  }
              }
          };
          let el = 0
            , eu = ()=>el++
            , ec = 0
            , ef = ()=>ec++
            , eh = 0
            , ed = ()=>eh++;
          var ep = {
              getNextTreeStateVersion: eu,
              getNextStoreID: ef,
              getNextComponentID: ed
          };
          let {persistentMap: e_} = er
            , {graph: em} = es
            , {getNextTreeStateVersion: ev} = ep;
          function eg() {
              let e = ev();
              return {
                  version: e,
                  stateID: e,
                  transactionMetadata: {},
                  dirtyAtoms: new Set,
                  atomValues: e_(),
                  nonvalidatedAtoms: e_()
              }
          }
          var ey = {
              makeEmptyTreeState: eg,
              makeEmptyStoreState: function() {
                  let e = eg();
                  return {
                      currentTree: e,
                      nextTree: null,
                      previousTree: null,
                      commitDepth: 0,
                      knownAtoms: new Set,
                      knownSelectors: new Set,
                      transactionSubscriptions: new Map,
                      nodeTransactionSubscriptions: new Map,
                      nodeToComponentSubscriptions: new Map,
                      queuedComponentCallbacks_DEPRECATED: [],
                      suspendedComponentResolvers: new Set,
                      graphsByVersion: new Map().set(e.version, em()),
                      retention: {
                          referenceCounts: new Map,
                          nodesRetainedByZone: new Map,
                          retainablesToCheckForRelease: new Set
                      },
                      nodeCleanupFunctions: new Map
                  }
              },
              getNextTreeStateVersion: ev
          };
          class ew {
          }
          var eb = {
              RetentionZone: ew,
              retentionZone: function() {
                  return new ew
              }
          }
            , eT = {
              setByAddingToSet: function(e, t) {
                  let n = new Set(e);
                  return n.add(t),
                  n
              },
              setByDeletingFromSet: function(e, t) {
                  let n = new Set(e);
                  return n.delete(t),
                  n
              },
              mapBySettingInMap: function(e, t, n) {
                  let r = new Map(e);
                  return r.set(t, n),
                  r
              },
              mapByUpdatingInMap: function(e, t, n) {
                  let r = new Map(e);
                  return r.set(t, n(r.get(t))),
                  r
              },
              mapByDeletingFromMap: function(e, t) {
                  let n = new Map(e);
                  return n.delete(t),
                  n
              },
              mapByDeletingMultipleFromMap: function(e, t) {
                  let n = new Map(e);
                  return t.forEach(e=>n.delete(e)),
                  n
              }
          }
            , eS = function*(e, t) {
              let n = 0;
              for (let r of e)
                  t(r, n++) && (yield r)
          }
            , eR = function(e, t) {
              let n = new Proxy(e,{
                  get: (e,n)=>(!(n in e) && n in t && (e[n] = t[n]()),
                  e[n]),
                  ownKeys: e=>Object.keys(e)
              });
              return n
          };
          let {getNode: eA, getNodeMaybe: ex, recoilValuesForKeys: eE} = X
            , {RetentionZone: ek} = eb
            , {setByAddingToSet: eN} = eT
            , eM = Object.freeze(new Set);
          class eC extends Error {
          }
          function eL(e, t, n, r) {
              let i = e.getState();
              if (i.nodeCleanupFunctions.has(n))
                  return;
              let o = eA(n)
                , a = function(e, t, n) {
                  if (!k("recoil_memory_managament_2020"))
                      return ()=>void 0;
                  let {nodesRetainedByZone: r} = e.getState().retention;
                  function i(e) {
                      let n = r.get(e);
                      n || r.set(e, n = new Set),
                      n.add(t)
                  }
                  if (n instanceof ek)
                      i(n);
                  else if (Array.isArray(n))
                      for (let e of n)
                          i(e);
                  return ()=>{
                      if (!k("recoil_memory_managament_2020"))
                          return;
                      let {retention: r} = e.getState();
                      function i(e) {
                          let n = r.nodesRetainedByZone.get(e);
                          null == n || n.delete(t),
                          n && 0 === n.size && r.nodesRetainedByZone.delete(e)
                      }
                      if (n instanceof ek)
                          i(n);
                      else if (Array.isArray(n))
                          for (let e of n)
                              i(e)
                  }
              }(e, n, o.retainedBy)
                , s = o.init(e, t, r);
              i.nodeCleanupFunctions.set(n, ()=>{
                  s(),
                  a()
              }
              )
          }
          function eO(e, t, n) {
              return eA(n).peek(e, t)
          }
          function eP(e, t, n) {
              let r = new Set
                , i = Array.from(n)
                , o = e.getGraph(t.version);
              for (let e = i.pop(); e; e = i.pop()) {
                  var a;
                  r.add(e);
                  let t = null !== (a = o.nodeToNodeSubscriptions.get(e)) && void 0 !== a ? a : eM;
                  for (let e of t)
                      r.has(e) || i.push(e)
              }
              return r
          }
          var eD = {
              getNodeLoadable: function(e, t, n) {
                  return eL(e, t, n, "get"),
                  eA(n).get(e, t)
              },
              peekNodeLoadable: eO,
              setNodeValue: function(e, t, n, r) {
                  let i = eA(n);
                  if (null == i.set)
                      throw new eC(`Attempt to set read-only RecoilValue: ${n}`);
                  let o = i.set;
                  return eL(e, t, n, "set"),
                  o(e, t, r)
              },
              initializeNode: function(e, t, n) {
                  eL(e, e.getState().currentTree, t, n)
              },
              cleanUpNode: function(e, t) {
                  var n;
                  let r = e.getState();
                  null === (n = r.nodeCleanupFunctions.get(t)) || void 0 === n || n(),
                  r.nodeCleanupFunctions.delete(t)
              },
              setUnvalidatedAtomValue_DEPRECATED: function(e, t, n) {
                  var r;
                  let i = ex(t);
                  return null == i || null === (r = i.invalidate) || void 0 === r || r.call(i, e),
                  {
                      ...e,
                      atomValues: e.atomValues.clone().delete(t),
                      nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
                      dirtyAtoms: eN(e.dirtyAtoms, t)
                  }
              },
              peekNodeInfo: function(e, t, n) {
                  let r = e.getState()
                    , i = e.getGraph(t.version)
                    , o = eA(n).nodeType;
                  return eR({
                      type: o
                  }, {
                      loadable: ()=>eO(e, t, n),
                      isActive: ()=>r.knownAtoms.has(n) || r.knownSelectors.has(n),
                      isSet: ()=>"selector" !== o && t.atomValues.has(n),
                      isModified: ()=>t.dirtyAtoms.has(n),
                      deps: ()=>{
                          var e;
                          return eE(null !== (e = i.nodeDeps.get(n)) && void 0 !== e ? e : [])
                      }
                      ,
                      subscribers: ()=>{
                          var i, o;
                          return {
                              nodes: eE(eS(eP(e, t, new Set([n])), e=>e !== n)),
                              components: j(null !== (i = null === (o = r.nodeToComponentSubscriptions.get(n)) || void 0 === o ? void 0 : o.values()) && void 0 !== i ? i : [], ([e])=>({
                                  name: e
                              }))
                          }
                      }
                  })
              },
              getDownstreamNodes: eP
          };
          let eV = null;
          var eI = {
              setInvalidateMemoizedSnapshot: function(e) {
                  eV = e
              },
              invalidateMemoizedSnapshot: function() {
                  var e;
                  null === (e = eV) || void 0 === e || e()
              }
          };
          let {getDownstreamNodes: eB, getNodeLoadable: eU, setNodeValue: ez} = eD
            , {getNextComponentID: eF} = ep
            , {getNode: ej, getNodeMaybe: eW} = X
            , {DefaultValue: e$} = X
            , {reactMode: eG} = P
            , {AbstractRecoilValue: eq, RecoilState: eY, RecoilValueReadOnly: eH, isRecoilValue: eK} = z
            , {invalidateMemoizedSnapshot: eZ} = eI;
          function eX(e, t, n) {
              "hasValue" === n.state && n.contents instanceof e$ ? e.atomValues.delete(t) : e.atomValues.set(t, n),
              e.dirtyAtoms.add(t),
              e.nonvalidatedAtoms.delete(t)
          }
          function eQ(e, t) {
              e.replaceState(n=>{
                  let r = e1(n);
                  for (let n of t)
                      !function(e, t, n) {
                          if ("set" === n.type) {
                              let {recoilValue: r, valueOrUpdater: i} = n
                                , o = function(e, t, {key: n}, r) {
                                  if ("function" != typeof r)
                                      return r;
                                  {
                                      let i = eU(e, t, n);
                                      if ("loading" === i.state) {
                                          let e = `Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;
                                          throw N(e),
                                          f(e)
                                      }
                                      if ("hasError" === i.state)
                                          throw i.contents;
                                      return r(i.contents)
                                  }
                              }(e, t, r, i)
                                , a = ez(e, t, r.key, o);
                              for (let[e,n] of a.entries())
                                  eX(t, e, n)
                          } else if ("setLoadable" === n.type) {
                              let {recoilValue: {key: e}, loadable: r} = n;
                              eX(t, e, r)
                          } else if ("markModified" === n.type) {
                              let {recoilValue: {key: e}} = n;
                              t.dirtyAtoms.add(e)
                          } else if ("setUnvalidated" === n.type) {
                              var r;
                              let {recoilValue: {key: e}, unvalidatedValue: i} = n
                                , o = eW(e);
                              null == o || null === (r = o.invalidate) || void 0 === r || r.call(o, t),
                              t.atomValues.delete(e),
                              t.nonvalidatedAtoms.set(e, i),
                              t.dirtyAtoms.add(e)
                          } else
                              N(`Unknown action ${n.type}`)
                      }(e, r, n);
                  return e2(e, r),
                  eZ(),
                  r
              }
              )
          }
          function eJ(e, t) {
              if (e0.length) {
                  let n = e0[e0.length - 1]
                    , r = n.get(e);
                  r || n.set(e, r = []),
                  r.push(t)
              } else
                  eQ(e, [t])
          }
          let e0 = [];
          function e1(e) {
              return {
                  ...e,
                  atomValues: e.atomValues.clone(),
                  nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
                  dirtyAtoms: new Set(e.dirtyAtoms)
              }
          }
          function e2(e, t) {
              let n = eB(e, t, t.dirtyAtoms);
              for (let e of n) {
                  var r, i;
                  null === (r = eW(e)) || void 0 === r || null === (i = r.invalidate) || void 0 === i || i.call(r, t)
              }
          }
          function e5(e, t, n) {
              eJ(e, {
                  type: "set",
                  recoilValue: t,
                  valueOrUpdater: n
              })
          }
          var e3 = {
              RecoilValueReadOnly: eH,
              AbstractRecoilValue: eq,
              RecoilState: eY,
              getRecoilValueAsLoadable: function(e, {key: t}, n=e.getState().currentTree) {
                  var r, i;
                  let o = e.getState();
                  n.version === o.currentTree.version || n.version === (null === (r = o.nextTree) || void 0 === r ? void 0 : r.version) || n.version === (null === (i = o.previousTree) || void 0 === i ? void 0 : i.version) || N("Tried to read from a discarded tree");
                  let a = eU(e, n, t);
                  return "loading" === a.state && a.contents.catch(()=>{}
                  ),
                  a
              },
              setRecoilValue: e5,
              setRecoilValueLoadable: function(e, t, n) {
                  if (n instanceof e$)
                      return e5(e, t, n);
                  eJ(e, {
                      type: "setLoadable",
                      recoilValue: t,
                      loadable: n
                  })
              },
              markRecoilValueModified: function(e, t) {
                  eJ(e, {
                      type: "markModified",
                      recoilValue: t
                  })
              },
              setUnvalidatedRecoilValue: function(e, t, n) {
                  eJ(e, {
                      type: "setUnvalidated",
                      recoilValue: t,
                      unvalidatedValue: n
                  })
              },
              subscribeToRecoilValue: function(e, {key: t}, n, r=null) {
                  let i = eF()
                    , o = e.getState();
                  o.nodeToComponentSubscriptions.has(t) || o.nodeToComponentSubscriptions.set(t, new Map),
                  d(o.nodeToComponentSubscriptions.get(t)).set(i, [null != r ? r : "<not captured>", n]);
                  let a = eG();
                  if (a.early && ("LEGACY" === a.mode || "MUTABLE_SOURCE" === a.mode)) {
                      let r = e.getState().nextTree;
                      r && r.dirtyAtoms.has(t) && n(r)
                  }
                  return {
                      release: ()=>{
                          let n = e.getState()
                            , r = n.nodeToComponentSubscriptions.get(t);
                          if (void 0 === r || !r.has(i)) {
                              N(`Subscription missing at release time for atom ${t}. This is a bug in Recoil.`);
                              return
                          }
                          r.delete(i),
                          0 === r.size && n.nodeToComponentSubscriptions.delete(t)
                      }
                  }
              },
              isRecoilValue: eK,
              applyAtomValueWrites: function(e, t) {
                  let n = e.clone();
                  return t.forEach((e,t)=>{
                      "hasValue" === e.state && e.contents instanceof e$ ? n.delete(t) : n.set(t, e)
                  }
                  ),
                  n
              },
              batchStart: function() {
                  let e = new Map;
                  return e0.push(e),
                  ()=>{
                      for (let[t,n] of e)
                          eQ(t, n);
                      let t = e0.pop();
                      t !== e && N("Incorrect order of batch popping")
                  }
              },
              writeLoadableToTreeState: eX,
              invalidateDownstreams: e2,
              copyTreeState: e1,
              refreshRecoilValue: function(e, t) {
                  var n;
                  let {currentTree: r} = e.getState()
                    , i = ej(t.key);
                  null === (n = i.clearCache) || void 0 === n || n.call(i, e, r)
              }
          }
            , e8 = function(e, t, n) {
              let r = e.entries()
                , i = r.next();
              for (; !i.done; ) {
                  let o = i.value;
                  if (t.call(n, o[1], o[0], e))
                      return !0;
                  i = r.next()
              }
              return !1
          };
          let {cleanUpNode: e4} = eD
            , {deleteNodeConfigIfPossible: e9, getNode: e6} = X
            , {RetentionZone: e7} = eb
            , te = new Set;
          function tt(e, t) {
              let n = e.getState()
                , r = n.currentTree;
              if (n.nextTree) {
                  N("releaseNodesNowOnCurrentTree should only be called at the end of a batch");
                  return
              }
              let i = new Set;
              for (let e of t)
                  if (e instanceof e7)
                      for (let t of function(e, t) {
                          var n;
                          return null !== (n = e.retention.nodesRetainedByZone.get(t)) && void 0 !== n ? n : te
                      }(n, e))
                          i.add(t);
                  else
                      i.add(e);
              let o = function(e, t) {
                  let n = e.getState()
                    , r = n.currentTree
                    , i = e.getGraph(r.version)
                    , o = new Set
                    , a = new Set;
                  return function t(s) {
                      var l, u;
                      let c = new Set
                        , f = function(e, t, n, r, i) {
                          let o = e.getGraph(t.version)
                            , a = []
                            , s = new Set;
                          for (; n.size > 0; )
                              (function e(t) {
                                  if (r.has(t) || i.has(t)) {
                                      n.delete(t);
                                      return
                                  }
                                  if (s.has(t))
                                      return;
                                  let l = o.nodeToNodeSubscriptions.get(t);
                                  if (l)
                                      for (let t of l)
                                          e(t);
                                  s.add(t),
                                  n.delete(t),
                                  a.push(t)
                              }
                              )(d(n.values().next().value));
                          return a
                      }(e, r, s, o, a);
                      for (let e of f) {
                          if ("recoilRoot" === e6(e).retainedBy || (null !== (l = n.retention.referenceCounts.get(e)) && void 0 !== l ? l : 0) > 0 || tn(e).some(e=>n.retention.referenceCounts.get(e))) {
                              a.add(e);
                              continue
                          }
                          let t = i.nodeToNodeSubscriptions.get(e);
                          if (t && e8(t, e=>a.has(e))) {
                              a.add(e);
                              continue
                          }
                          o.add(e),
                          c.add(e)
                      }
                      let h = new Set;
                      for (let e of c)
                          for (let t of null !== (u = i.nodeDeps.get(e)) && void 0 !== u ? u : te)
                              o.has(t) || h.add(t);
                      h.size && t(h)
                  }(t),
                  o
              }(e, i);
              for (let t of o)
                  !function(e, t, n) {
                      var r, i;
                      if (!k("recoil_memory_managament_2020"))
                          return;
                      e4(e, n);
                      let o = e.getState();
                      o.knownAtoms.delete(n),
                      o.knownSelectors.delete(n),
                      o.nodeTransactionSubscriptions.delete(n),
                      o.retention.referenceCounts.delete(n);
                      let a = tn(n);
                      for (let e of a)
                          null === (r = o.retention.nodesRetainedByZone.get(e)) || void 0 === r || r.delete(n);
                      t.atomValues.delete(n),
                      t.dirtyAtoms.delete(n),
                      t.nonvalidatedAtoms.delete(n);
                      let s = o.graphsByVersion.get(t.version);
                      if (s) {
                          let e = s.nodeDeps.get(n);
                          if (void 0 !== e)
                              for (let t of (s.nodeDeps.delete(n),
                              e))
                                  null === (i = s.nodeToNodeSubscriptions.get(t)) || void 0 === i || i.delete(n);
                          s.nodeToNodeSubscriptions.delete(n)
                      }
                      e9(n)
                  }(e, r, t)
          }
          function tn(e) {
              let t = e6(e).retainedBy;
              return void 0 === t || "components" === t || "recoilRoot" === t ? [] : t instanceof e7 ? [t] : t
          }
          function tr(e, t) {
              if (!k("recoil_memory_managament_2020"))
                  return;
              let n = e.getState().retention.referenceCounts;
              n.delete(t),
              function(e, t) {
                  let n = e.getState();
                  n.nextTree ? n.retention.retainablesToCheckForRelease.add(t) : tt(e, new Set([t]))
              }(e, t)
          }
          var ti = {
              SUSPENSE_TIMEOUT_MS: 12e4,
              updateRetainCount: function(e, t, n) {
                  var r;
                  if (!k("recoil_memory_managament_2020"))
                      return;
                  let i = e.getState().retention.referenceCounts
                    , o = (null !== (r = i.get(t)) && void 0 !== r ? r : 0) + n;
                  0 === o ? tr(e, t) : i.set(t, o)
              },
              updateRetainCountToZero: tr,
              releaseScheduledRetainablesNow: function(e) {
                  if (!k("recoil_memory_managament_2020"))
                      return;
                  let t = e.getState();
                  tt(e, t.retention.retainablesToCheckForRelease),
                  t.retention.retainablesToCheckForRelease.clear()
              },
              retainedByOptionWithDefault: function(e) {
                  return void 0 === e ? "recoilRoot" : e
              }
          };
          let {unstable_batchedUpdates: to} = u
            , {unstable_batchedUpdates: ta} = {
              unstable_batchedUpdates: to
          }
            , {batchStart: ts} = e3
            , {unstable_batchedUpdates: tl} = {
              unstable_batchedUpdates: ta
          }
            , tu = tl
            , tc = e=>{
              tu = e
          }
            , tf = e=>{
              tu(()=>{
                  let t = ()=>void 0;
                  try {
                      t = ts(),
                      e()
                  } finally {
                      t()
                  }
              }
              )
          }
          ;
          var th = {
              getBatcher: ()=>tu,
              setBatcher: tc,
              batchUpdates: tf
          }
            , td = function*(e) {
              for (let t of e)
                  for (let e of t)
                      yield e
          };
          let tp = "undefined" == typeof Window || "undefined" == typeof window
            , t_ = "undefined" != typeof navigator && "ReactNative" === navigator.product;
          var tm = {
              isSSR: tp,
              isReactNative: t_,
              isWindow: e=>!tp && (e === window || e instanceof Window)
          };
          let {batchUpdates: tv} = th
            , {initializeNode: tg, peekNodeInfo: ty} = eD
            , {graph: tw} = es
            , {getNextStoreID: tb} = ep
            , {DEFAULT_VALUE: tT, recoilValues: tS, recoilValuesForKeys: tR} = X
            , {AbstractRecoilValue: tA, getRecoilValueAsLoadable: tx, setRecoilValue: tE, setUnvalidatedRecoilValue: tk} = e3
            , {updateRetainCount: tN} = ti
            , {setInvalidateMemoizedSnapshot: tM} = eI
            , {getNextTreeStateVersion: tC, makeEmptyStoreState: tL} = ey
            , {isSSR: tO} = tm
            , {memoizeOneWithArgsHashAndInvalidation: tP} = {
              memoizeWithArgsHash: function(e, t) {
                  let n;
                  let r = (...r)=>{
                      n || (n = {});
                      let i = t(...r);
                      return Object.hasOwnProperty.call(n, i) || (n[i] = e(...r)),
                      n[i]
                  }
                  ;
                  return r
              },
              memoizeOneWithArgsHash: function(e, t) {
                  let n, r;
                  let i = (...i)=>{
                      let o = t(...i);
                      return n === o ? r : (n = o,
                      r = e(...i))
                  }
                  ;
                  return i
              },
              memoizeOneWithArgsHashAndInvalidation: function(e, t) {
                  let n, r;
                  let i = (...i)=>{
                      let o = t(...i);
                      return n === o ? r : (n = o,
                      r = e(...i))
                  }
                    , o = ()=>{
                      n = null
                  }
                  ;
                  return [i, o]
              }
          };
          class tD {
              constructor(e, t) {
                  for (let n of (p(this, "_store", void 0),
                  p(this, "_refCount", 1),
                  p(this, "getLoadable", e=>(this.checkRefCount_INTERNAL(),
                  tx(this._store, e))),
                  p(this, "getPromise", e=>(this.checkRefCount_INTERNAL(),
                  this.getLoadable(e).toPromise())),
                  p(this, "getNodes_UNSTABLE", e=>{
                      if (this.checkRefCount_INTERNAL(),
                      (null == e ? void 0 : e.isModified) === !0) {
                          if ((null == e ? void 0 : e.isInitialized) === !1)
                              return [];
                          let t = this._store.getState().currentTree;
                          return tR(t.dirtyAtoms)
                      }
                      let t = this._store.getState().knownAtoms
                        , n = this._store.getState().knownSelectors;
                      return (null == e ? void 0 : e.isInitialized) == null ? tS.values() : !0 === e.isInitialized ? tR(td([t, n])) : eS(tS.values(), ({key: e})=>!t.has(e) && !n.has(e))
                  }
                  ),
                  p(this, "getInfo_UNSTABLE", ({key: e})=>(this.checkRefCount_INTERNAL(),
                  ty(this._store, this._store.getState().currentTree, e))),
                  p(this, "map", e=>{
                      this.checkRefCount_INTERNAL();
                      let t = new tU(this,tv);
                      return e(t),
                      t
                  }
                  ),
                  p(this, "asyncMap", async e=>{
                      this.checkRefCount_INTERNAL();
                      let t = new tU(this,tv);
                      return t.retain(),
                      await e(t),
                      t.autoRelease_INTERNAL(),
                      t
                  }
                  ),
                  this._store = {
                      storeID: tb(),
                      parentStoreID: t,
                      getState: ()=>e,
                      replaceState: t=>{
                          e.currentTree = t(e.currentTree)
                      }
                      ,
                      getGraph: t=>{
                          let n = e.graphsByVersion;
                          if (n.has(t))
                              return d(n.get(t));
                          let r = tw();
                          return n.set(t, r),
                          r
                      }
                      ,
                      subscribeToTransactions: ()=>({
                          release: ()=>{}
                      }),
                      addTransactionMetadata: ()=>{
                          throw f("Cannot subscribe to Snapshots")
                      }
                  },
                  this._store.getState().knownAtoms))
                      tg(this._store, n, "get"),
                      tN(this._store, n, 1);
                  this.autoRelease_INTERNAL()
              }
              retain() {
                  this._refCount <= 0 && N("Attempt to retain() Snapshot that was already released."),
                  this._refCount++;
                  let e = !1;
                  return ()=>{
                      e || (e = !0,
                      this._release())
                  }
              }
              autoRelease_INTERNAL() {
                  tO || window.setTimeout(()=>this._release(), 10)
              }
              _release() {
                  if (this._refCount--,
                  0 === this._refCount) {
                      if (this._store.getState().nodeCleanupFunctions.forEach(e=>e()),
                      this._store.getState().nodeCleanupFunctions.clear(),
                      !k("recoil_memory_managament_2020"))
                          return
                  } else
                      this._refCount
              }
              isRetained() {
                  return this._refCount > 0
              }
              checkRefCount_INTERNAL() {
                  k("recoil_memory_managament_2020") && this._refCount
              }
              getStore_INTERNAL() {
                  return this.checkRefCount_INTERNAL(),
                  this._store
              }
              getID() {
                  return this.checkRefCount_INTERNAL(),
                  this._store.getState().currentTree.stateID
              }
              getStoreID() {
                  return this.checkRefCount_INTERNAL(),
                  this._store.storeID
              }
          }
          function tV(e, t, n=!1) {
              let r = e.getState()
                , i = n ? tC() : t.version;
              return {
                  currentTree: {
                      version: n ? i : t.version,
                      stateID: n ? i : t.stateID,
                      transactionMetadata: {
                          ...t.transactionMetadata
                      },
                      dirtyAtoms: new Set(t.dirtyAtoms),
                      atomValues: t.atomValues.clone(),
                      nonvalidatedAtoms: t.nonvalidatedAtoms.clone()
                  },
                  commitDepth: 0,
                  nextTree: null,
                  previousTree: null,
                  knownAtoms: new Set(r.knownAtoms),
                  knownSelectors: new Set(r.knownSelectors),
                  transactionSubscriptions: new Map,
                  nodeTransactionSubscriptions: new Map,
                  nodeToComponentSubscriptions: new Map,
                  queuedComponentCallbacks_DEPRECATED: [],
                  suspendedComponentResolvers: new Set,
                  graphsByVersion: new Map().set(i, e.getGraph(t.version)),
                  retention: {
                      referenceCounts: new Map,
                      nodesRetainedByZone: new Map,
                      retainablesToCheckForRelease: new Set
                  },
                  nodeCleanupFunctions: new Map(j(r.nodeCleanupFunctions.entries(), ([e])=>[e, ()=>{}
                  ]))
              }
          }
          let[tI,tB] = tP((e,t)=>{
              var n;
              let r = e.getState()
                , i = "latest" === t ? null !== (n = r.nextTree) && void 0 !== n ? n : r.currentTree : d(r.previousTree);
              return new tD(tV(e, i),e.storeID)
          }
          , (e,t)=>{
              var n, r;
              return String(t) + String(e.storeID) + String(null === (n = e.getState().nextTree) || void 0 === n ? void 0 : n.version) + String(e.getState().currentTree.version) + String(null === (r = e.getState().previousTree) || void 0 === r ? void 0 : r.version)
          }
          );
          tM(tB);
          class tU extends tD {
              constructor(e, t) {
                  super(tV(e.getStore_INTERNAL(), e.getStore_INTERNAL().getState().currentTree, !0), e.getStoreID()),
                  p(this, "_batch", void 0),
                  p(this, "set", (e,t)=>{
                      this.checkRefCount_INTERNAL();
                      let n = this.getStore_INTERNAL();
                      this._batch(()=>{
                          tN(n, e.key, 1),
                          tE(this.getStore_INTERNAL(), e, t)
                      }
                      )
                  }
                  ),
                  p(this, "reset", e=>{
                      this.checkRefCount_INTERNAL();
                      let t = this.getStore_INTERNAL();
                      this._batch(()=>{
                          tN(t, e.key, 1),
                          tE(this.getStore_INTERNAL(), e, tT)
                      }
                      )
                  }
                  ),
                  p(this, "setUnvalidatedAtomValues_DEPRECATED", e=>{
                      this.checkRefCount_INTERNAL();
                      let t = this.getStore_INTERNAL();
                      tv(()=>{
                          for (let[n,r] of e.entries())
                              tN(t, n, 1),
                              tk(t, new tA(n), r)
                      }
                      )
                  }
                  ),
                  this._batch = t
              }
          }
          var tz = {
              Snapshot: tD,
              MutableSnapshot: tU,
              freshSnapshot: function(e) {
                  let t = new tD(tL());
                  return null != e ? t.map(e) : t
              },
              cloneSnapshot: function(e, t="latest") {
                  let n = tI(e, t);
                  return n.isRetained() ? n : (tB(),
                  tI(e, t))
              }
          }
            , tF = Object.freeze({
              __proto__: null,
              Snapshot: tz.Snapshot,
              MutableSnapshot: tz.MutableSnapshot,
              freshSnapshot: tz.freshSnapshot,
              cloneSnapshot: tz.cloneSnapshot
          })
            , tj = function(...e) {
              let t = new Set;
              for (let n of e)
                  for (let e of n)
                      t.add(e);
              return t
          };
          let {useRef: tW} = l;
          var t$ = function(e) {
              let t = tW(e);
              return t.current === e && "function" == typeof e && (t.current = e()),
              t
          };
          let {getNextTreeStateVersion: tG, makeEmptyStoreState: tq} = ey
            , {cleanUpNode: tY, getDownstreamNodes: tH, initializeNode: tK, setNodeValue: tZ, setUnvalidatedAtomValue_DEPRECATED: tX} = eD
            , {graph: tQ} = es
            , {cloneGraph: tJ} = es
            , {getNextStoreID: t0} = ep
            , {createMutableSource: t1, reactMode: t2} = P
            , {applyAtomValueWrites: t5} = e3
            , {releaseScheduledRetainablesNow: t3} = ti
            , {freshSnapshot: t8} = tF
            , {useCallback: t4, useContext: t9, useEffect: t6, useMemo: t7, useRef: ne, useState: nt} = l;
          function nn() {
              throw f("This component must be used inside a <RecoilRoot> component.")
          }
          let nr = Object.freeze({
              storeID: t0(),
              getState: nn,
              replaceState: nn,
              getGraph: nn,
              subscribeToTransactions: nn,
              addTransactionMetadata: nn
          })
            , ni = !1;
          function no(e) {
              if (ni)
                  throw f("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");
              let t = e.getState();
              if (null === t.nextTree) {
                  k("recoil_memory_managament_2020") && k("recoil_release_on_cascading_update_killswitch_2021") && t.commitDepth > 0 && t3(e);
                  let n = t.currentTree.version
                    , r = tG();
                  t.nextTree = {
                      ...t.currentTree,
                      version: r,
                      stateID: r,
                      dirtyAtoms: new Set,
                      transactionMetadata: {}
                  },
                  t.graphsByVersion.set(r, tJ(d(t.graphsByVersion.get(n))))
              }
          }
          let na = l.createContext({
              current: nr
          })
            , ns = ()=>t9(na)
            , nl = l.createContext(null);
          function nu(e, t, n) {
              let r = tH(e, n, n.dirtyAtoms);
              for (let e of r) {
                  let r = t.nodeToComponentSubscriptions.get(e);
                  if (r)
                      for (let[e,[t,i]] of r)
                          i(n)
              }
          }
          function nc(e) {
              let t = e.getState()
                , n = t.currentTree
                , r = n.dirtyAtoms;
              if (r.size) {
                  for (let[n,i] of t.nodeTransactionSubscriptions)
                      if (r.has(n))
                          for (let[t,n] of i)
                              n(e);
                  for (let[n,r] of t.transactionSubscriptions)
                      r(e);
                  (!t2().early || t.suspendedComponentResolvers.size > 0) && (nu(e, t, n),
                  t.suspendedComponentResolvers.forEach(e=>e()),
                  t.suspendedComponentResolvers.clear())
              }
              t.queuedComponentCallbacks_DEPRECATED.forEach(e=>e(n)),
              t.queuedComponentCallbacks_DEPRECATED.splice(0, t.queuedComponentCallbacks_DEPRECATED.length)
          }
          function nf({setNotifyBatcherOfChange: e}) {
              let t = ns()
                , [,n] = nt([]);
              return e(()=>n({})),
              t6(()=>(e(()=>n({})),
              ()=>{
                  e(()=>{}
                  )
              }
              ), [e]),
              t6(()=>{
                  Q.enqueueExecution("Batcher", ()=>{
                      !function(e) {
                          let t = e.getState();
                          t.commitDepth++;
                          try {
                              let {nextTree: n} = t;
                              if (null == n)
                                  return;
                              t.previousTree = t.currentTree,
                              t.currentTree = n,
                              t.nextTree = null,
                              nc(e),
                              null != t.previousTree ? t.graphsByVersion.delete(t.previousTree.version) : N("Ended batch with no previous state, which is unexpected", "recoil"),
                              t.previousTree = null,
                              k("recoil_memory_managament_2020") && null == n && t3(e)
                          } finally {
                              t.commitDepth--
                          }
                      }(t.current)
                  }
                  )
              }
              ),
              null
          }
          let nh = 0;
          function nd({initializeState_DEPRECATED: e, initializeState: t, store_INTERNAL: n, children: r}) {
              let i;
              let o = e=>{
                  let t = i.current.graphsByVersion;
                  if (t.has(e))
                      return d(t.get(e));
                  let n = tQ();
                  return t.set(e, n),
                  n
              }
                , a = (e,t)=>{
                  if (null == t) {
                      let {transactionSubscriptions: t} = h.current.getState()
                        , n = nh++;
                      return t.set(n, e),
                      {
                          release: ()=>{
                              t.delete(n)
                          }
                      }
                  }
                  {
                      let {nodeTransactionSubscriptions: n} = h.current.getState();
                      n.has(t) || n.set(t, new Map);
                      let r = nh++;
                      return d(n.get(t)).set(r, e),
                      {
                          release: ()=>{
                              let e = n.get(t);
                              e && (e.delete(r),
                              0 === e.size && n.delete(t))
                          }
                      }
                  }
              }
                , s = e=>{
                  for (let t of (no(h.current),
                  Object.keys(e)))
                      d(h.current.getState().nextTree).transactionMetadata[t] = e[t]
              }
                , u = e=>{
                  let t;
                  no(h.current);
                  let n = d(i.current.nextTree);
                  try {
                      ni = !0,
                      t = e(n)
                  } finally {
                      ni = !1
                  }
                  t !== n && (i.current.nextTree = t,
                  t2().early && nu(h.current, i.current, t),
                  d(c.current)())
              }
                , c = ne(null)
                , f = t4(e=>{
                  c.current = e
              }
              , [c])
                , h = t$(()=>null != n ? n : {
                  storeID: t0(),
                  getState: ()=>i.current,
                  replaceState: u,
                  getGraph: o,
                  subscribeToTransactions: a,
                  addTransactionMetadata: s
              });
              null != n && (h.current = n),
              i = t$(()=>null != e ? function(e, t) {
                  let n = tq();
                  return t({
                      set: (t,r)=>{
                          let i = n.currentTree
                            , o = tZ(e, i, t.key, r)
                            , a = new Set(o.keys())
                            , s = i.nonvalidatedAtoms.clone();
                          for (let e of a)
                              s.delete(e);
                          n.currentTree = {
                              ...i,
                              dirtyAtoms: tj(i.dirtyAtoms, a),
                              atomValues: t5(i.atomValues, o),
                              nonvalidatedAtoms: s
                          }
                      }
                      ,
                      setUnvalidatedAtomValues: e=>{
                          e.forEach((e,t)=>{
                              n.currentTree = tX(n.currentTree, t, e)
                          }
                          )
                      }
                  }),
                  n
              }(h.current, e) : null != t ? function(e) {
                  let t = t8(e)
                    , n = t.getStore_INTERNAL().getState();
                  return t.retain(),
                  n.nodeCleanupFunctions.forEach(e=>e()),
                  n.nodeCleanupFunctions.clear(),
                  n
              }(t) : tq());
              let p = t7(()=>null == t1 ? void 0 : t1(i, ()=>i.current.currentTree.version), [i]);
              return t6(()=>{
                  let e = h.current;
                  for (let t of new Set(e.getState().knownAtoms))
                      tK(e, t, "get");
                  return ()=>{
                      for (let t of e.getState().knownAtoms)
                          tY(e, t)
                  }
              }
              , [h]),
              l.createElement(na.Provider, {
                  value: h
              }, l.createElement(nl.Provider, {
                  value: p
              }, l.createElement(nf, {
                  setNotifyBatcherOfChange: f
              }), r))
          }
          var np = {
              RecoilRoot: function(e) {
                  let {override: t, ...n} = e
                    , r = ns();
                  return !1 === t && r.current !== nr ? e.children : l.createElement(nd, n)
              },
              useStoreRef: ns,
              useRecoilMutableSource: function() {
                  let e = t9(nl);
                  return null == e && F("Attempted to use a Recoil hook outside of a <RecoilRoot>. <RecoilRoot> must be an ancestor of any component that uses Recoil hooks."),
                  e
              },
              useRecoilStoreID: function() {
                  return ns().current.storeID
              },
              notifyComponents_FOR_TESTING: nu,
              sendEndOfBatchNotifications_FOR_TESTING: nc
          }
            , n_ = function(e, t) {
              if (e === t)
                  return !0;
              if (e.length !== t.length)
                  return !1;
              for (let n = 0, r = e.length; n < r; n++)
                  if (e[n] !== t[n])
                      return !1;
              return !0
          };
          let {useEffect: nm, useRef: nv} = l;
          var ng = function(e) {
              let t = nv();
              return nm(()=>{
                  t.current = e
              }
              ),
              t.current
          };
          let {useStoreRef: ny} = np
            , {SUSPENSE_TIMEOUT_MS: nw} = ti
            , {updateRetainCount: nb} = ti
            , {RetentionZone: nT} = eb
            , {useEffect: nS, useRef: nR} = l
            , {isSSR: nA} = tm;
          var nx = function(e) {
              if (k("recoil_memory_managament_2020"))
                  return function(e) {
                      let t = Array.isArray(e) ? e : [e]
                        , n = t.map(e=>e instanceof nT ? e : e.key)
                        , r = ny();
                      nS(()=>{
                          if (!k("recoil_memory_managament_2020"))
                              return;
                          let e = r.current;
                          if (i.current && !nA)
                              window.clearTimeout(i.current),
                              i.current = null;
                          else
                              for (let t of n)
                                  nb(e, t, 1);
                          return ()=>{
                              for (let t of n)
                                  nb(e, t, -1)
                          }
                      }
                      , [r, ...n]);
                      let i = nR()
                        , o = ng(n);
                      if (!nA && (void 0 === o || !n_(o, n))) {
                          let e = r.current;
                          for (let t of n)
                              nb(e, t, 1);
                          if (o)
                              for (let t of o)
                                  nb(e, t, -1);
                          i.current && window.clearTimeout(i.current),
                          i.current = window.setTimeout(()=>{
                              for (let t of (i.current = null,
                              n))
                                  nb(e, t, -1)
                          }
                          , nw)
                      }
                  }(e)
          }
            , nE = function() {
              return "<component name not available>"
          };
          let {batchUpdates: nk} = th
            , {DEFAULT_VALUE: nN} = X
            , {currentRendererSupportsUseSyncExternalStore: nM, reactMode: nC, useMutableSource: nL, useSyncExternalStore: nO} = P
            , {useRecoilMutableSource: nP, useStoreRef: nD} = np
            , {isRecoilValue: nV} = z
            , {AbstractRecoilValue: nI, getRecoilValueAsLoadable: nB, setRecoilValue: nU, setUnvalidatedRecoilValue: nz, subscribeToRecoilValue: nF} = e3
            , {useCallback: nj, useEffect: nW, useMemo: n$, useRef: nG, useState: nq} = l
            , {setByAddingToSet: nY} = eT;
          function nH(e, t, n) {
              if ("hasValue" === e.state)
                  return e.contents;
              if ("loading" === e.state) {
                  let e = new Promise(e=>{
                      n.current.getState().suspendedComponentResolvers.add(e)
                  }
                  );
                  throw e
              }
              if ("hasError" === e.state)
                  throw e.contents;
              throw f(`Invalid value of loadable atom "${t.key}"`)
          }
          function nK(e) {
              let t = nD()
                , n = nE()
                , r = nj(()=>{
                  var n;
                  let r = t.current
                    , i = r.getState()
                    , o = nC().early && null !== (n = i.nextTree) && void 0 !== n ? n : i.currentTree
                    , a = nB(r, e, o);
                  return {
                      loadable: a,
                      key: e.key
                  }
              }
              , [t, e])
                , i = nj(e=>{
                  let t;
                  return ()=>{
                      var n, r;
                      let i = e();
                      return null !== (n = t) && void 0 !== n && n.loadable.is(i.loadable) && (null === (r = t) || void 0 === r ? void 0 : r.key) === i.key ? t : (t = i,
                      i)
                  }
              }
              , [])
                , o = n$(()=>i(r), [r, i])
                , a = nj(r=>{
                  let i = t.current
                    , o = nF(i, e, r, n);
                  return o.release
              }
              , [t, e, n]);
              return nO(a, o, o).loadable
          }
          function nZ(e) {
              let t = nD()
                , n = nj(()=>{
                  var n;
                  let r = t.current
                    , i = r.getState()
                    , o = nC().early && null !== (n = i.nextTree) && void 0 !== n ? n : i.currentTree;
                  return nB(r, e, o)
              }
              , [t, e])
                , r = nj(()=>n(), [n])
                , i = nE()
                , o = nj((r,o)=>{
                  let a = t.current
                    , s = nF(a, e, ()=>{
                      if (!k("recoil_suppress_rerender_in_callback"))
                          return o();
                      let e = n();
                      l.current.is(e) || o(),
                      l.current = e
                  }
                  , i);
                  return s.release
              }
              , [t, e, i, n])
                , a = nP();
              if (null == a)
                  throw f("Recoil hooks must be used in components contained within a <RecoilRoot> component.");
              let s = nL(a, r, o)
                , l = nG(s);
              return nW(()=>{
                  l.current = s
              }
              ),
              s
          }
          function nX(e) {
              let t = nD()
                , n = nE()
                , r = nj(()=>{
                  var n;
                  let r = t.current
                    , i = r.getState()
                    , o = nC().early && null !== (n = i.nextTree) && void 0 !== n ? n : i.currentTree;
                  return nB(r, e, o)
              }
              , [t, e])
                , i = nj(()=>({
                  loadable: r(),
                  key: e.key
              }), [r, e.key])
                , o = nj(e=>{
                  let t = i();
                  return e.loadable.is(t.loadable) && e.key === t.key ? e : t
              }
              , [i]);
              nW(()=>{
                  let r = nF(t.current, e, e=>{
                      s(o)
                  }
                  , n);
                  return s(o),
                  r.release
              }
              , [n, e, t, o]);
              let[a,s] = nq(i);
              return a.key !== e.key ? i().loadable : a.loadable
          }
          function nQ(e) {
              let t = nD()
                , [,n] = nq([])
                , r = nE()
                , i = nj(()=>{
                  var n;
                  let r = t.current
                    , i = r.getState()
                    , o = nC().early && null !== (n = i.nextTree) && void 0 !== n ? n : i.currentTree;
                  return nB(r, e, o)
              }
              , [t, e])
                , o = i()
                , a = nG(o);
              return nW(()=>{
                  a.current = o
              }
              ),
              nW(()=>{
                  let o = t.current
                    , s = o.getState()
                    , l = nF(o, e, e=>{
                      var t;
                      if (!k("recoil_suppress_rerender_in_callback"))
                          return n([]);
                      let r = i();
                      null !== (t = a.current) && void 0 !== t && t.is(r) || n(r),
                      a.current = r
                  }
                  , r);
                  if (s.nextTree)
                      o.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{
                          a.current = null,
                          n([])
                      }
                      );
                  else {
                      var u;
                      if (!k("recoil_suppress_rerender_in_callback"))
                          return n([]);
                      let e = i();
                      null !== (u = a.current) && void 0 !== u && u.is(e) || n(e),
                      a.current = e
                  }
                  return l.release
              }
              , [r, i, e, t]),
              o
          }
          function nJ(e) {
              return k("recoil_memory_managament_2020") && nx(e),
              ({
                  TRANSITION_SUPPORT: nX,
                  SYNC_EXTERNAL_STORE: nM() ? nK : nX,
                  MUTABLE_SOURCE: nZ,
                  LEGACY: nQ
              })[nC().mode](e)
          }
          function n0(e) {
              let t = nD()
                , n = nJ(e);
              return nH(n, e, t)
          }
          function n1(e) {
              let t = nD();
              return nj(n=>{
                  nU(t.current, e, n)
              }
              , [t, e])
          }
          function n2(e) {
              return k("recoil_memory_managament_2020") && nx(e),
              nX(e)
          }
          function n5(e) {
              let t = nD()
                , n = n2(e);
              return nH(n, e, t)
          }
          var n3 = function(e, t) {
              let n = new Map;
              for (let[r,i] of e)
                  t(i, r) && n.set(r, i);
              return n
          }
            , n8 = function(e, t) {
              let n = new Set;
              for (let r of e)
                  t(r) && n.add(r);
              return n
          }
            , n4 = function(...e) {
              let t = new Map;
              for (let n = 0; n < e.length; n++) {
                  let r;
                  let i = e[n].keys();
                  for (; !(r = i.next()).done; )
                      t.set(r.value, e[n].get(r.value))
              }
              return t
          };
          let {batchUpdates: n9} = th
            , {DEFAULT_VALUE: n6, getNode: n7, nodes: re} = X
            , {useStoreRef: rt} = np
            , {AbstractRecoilValue: rn, setRecoilValueLoadable: rr} = e3
            , {SUSPENSE_TIMEOUT_MS: ri} = ti
            , {cloneSnapshot: ro} = tF
            , {useCallback: ra, useEffect: rs, useRef: rl, useState: ru} = l
            , {isSSR: rc} = tm;
          function rf(e) {
              let t = rt();
              rs(()=>{
                  let n = t.current.subscribeToTransactions(e);
                  return n.release
              }
              , [e, t])
          }
          function rh(e) {
              let t = e.atomValues.toMap()
                , n = eo(n3(t, (e,t)=>{
                  let n = n7(t)
                    , r = n.persistence_UNSTABLE;
                  return null != r && "none" !== r.type && "hasValue" === e.state
              }
              ), e=>e.contents);
              return n4(e.nonvalidatedAtoms.toMap(), n)
          }
          function rd(e, t) {
              var n;
              let r = e.getState()
                , i = null !== (n = r.nextTree) && void 0 !== n ? n : r.currentTree
                , o = t.getStore_INTERNAL().getState().currentTree;
              n9(()=>{
                  let n = new Set;
                  for (let e of [i.atomValues.keys(), o.atomValues.keys()])
                      for (let t of e) {
                          var r, a;
                          (null === (r = i.atomValues.get(t)) || void 0 === r ? void 0 : r.contents) !== (null === (a = o.atomValues.get(t)) || void 0 === a ? void 0 : a.contents) && n7(t).shouldRestoreFromSnapshots && n.add(t)
                      }
                  n.forEach(t=>{
                      rr(e, new rn(t), o.atomValues.has(t) ? d(o.atomValues.get(t)) : n6)
                  }
                  ),
                  e.replaceState(e=>({
                      ...e,
                      stateID: t.getID()
                  }))
              }
              )
          }
          var rp = {
              useRecoilSnapshot: function() {
                  let e = rt()
                    , [t,n] = ru(()=>ro(e.current))
                    , r = ng(t)
                    , i = rl()
                    , o = rl();
                  if (rf(ra(e=>n(ro(e)), [])),
                  rs(()=>{
                      let e = t.retain();
                      if (i.current && !rc) {
                          var n;
                          window.clearTimeout(i.current),
                          i.current = null,
                          null === (n = o.current) || void 0 === n || n.call(o),
                          o.current = null
                      }
                      return ()=>{
                          window.setTimeout(e, 10)
                      }
                  }
                  , [t]),
                  r !== t && !rc) {
                      if (i.current) {
                          var a;
                          window.clearTimeout(i.current),
                          i.current = null,
                          null === (a = o.current) || void 0 === a || a.call(o),
                          o.current = null
                      }
                      o.current = t.retain(),
                      i.current = window.setTimeout(()=>{
                          var e;
                          i.current = null,
                          null === (e = o.current) || void 0 === e || e.call(o),
                          o.current = null
                      }
                      , ri)
                  }
                  return t
              },
              gotoSnapshot: rd,
              useGotoRecoilSnapshot: function() {
                  let e = rt();
                  return ra(t=>rd(e.current, t), [e])
              },
              useRecoilTransactionObserver: function(e) {
                  rf(ra(t=>{
                      let n = ro(t, "latest")
                        , r = ro(t, "previous");
                      e({
                          snapshot: n,
                          previousSnapshot: r
                      })
                  }
                  , [e]))
              },
              useTransactionObservation_DEPRECATED: function(e) {
                  rf(ra(t=>{
                      let n = t.getState().previousTree
                        , r = t.getState().currentTree;
                      n || (N("Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil"),
                      n = t.getState().currentTree);
                      let i = rh(r)
                        , o = rh(n)
                        , a = eo(re, e=>{
                          var t, n, r, i;
                          return {
                              persistence_UNSTABLE: {
                                  type: null !== (t = null === (n = e.persistence_UNSTABLE) || void 0 === n ? void 0 : n.type) && void 0 !== t ? t : "none",
                                  backButton: null !== (r = null === (i = e.persistence_UNSTABLE) || void 0 === i ? void 0 : i.backButton) && void 0 !== r && r
                              }
                          }
                      }
                      )
                        , s = n8(r.dirtyAtoms, e=>i.has(e) || o.has(e));
                      e({
                          atomValues: i,
                          previousAtomValues: o,
                          atomInfo: a,
                          modifiedAtoms: s,
                          transactionMetadata: {
                              ...r.transactionMetadata
                          }
                      })
                  }
                  , [e]))
              },
              useTransactionSubscription_DEPRECATED: rf
          };
          let {peekNodeInfo: r_} = eD
            , {useStoreRef: rm} = np
            , {reactMode: rv} = P
            , {RecoilRoot: rg, useStoreRef: ry} = np
            , {useMemo: rw} = l
            , {loadableWithValue: rb} = x
            , {initializeNode: rT} = eD
            , {DEFAULT_VALUE: rS, getNode: rR} = X
            , {copyTreeState: rA, getRecoilValueAsLoadable: rx, invalidateDownstreams: rE, writeLoadableToTreeState: rk} = e3;
          function rN(e) {
              return "atom" === rR(e.key).nodeType
          }
          class rM {
              constructor(e, t) {
                  p(this, "_store", void 0),
                  p(this, "_treeState", void 0),
                  p(this, "_changes", void 0),
                  p(this, "get", e=>{
                      if (this._changes.has(e.key))
                          return this._changes.get(e.key);
                      if (!rN(e))
                          throw f("Reading selectors within atomicUpdate is not supported");
                      let t = rx(this._store, e, this._treeState);
                      if ("hasValue" === t.state)
                          return t.contents;
                      if ("hasError" === t.state)
                          throw t.contents;
                      throw f(`Expected Recoil atom ${e.key} to have a value, but it is in a loading state.`)
                  }
                  ),
                  p(this, "set", (e,t)=>{
                      if (!rN(e))
                          throw f("Setting selectors within atomicUpdate is not supported");
                      if ("function" == typeof t) {
                          let n = this.get(e);
                          this._changes.set(e.key, t(n))
                      } else
                          rT(this._store, e.key, "set"),
                          this._changes.set(e.key, t)
                  }
                  ),
                  p(this, "reset", e=>{
                      this.set(e, rS)
                  }
                  ),
                  this._store = e,
                  this._treeState = t,
                  this._changes = new Map
              }
              newTreeState_INTERNAL() {
                  if (0 === this._changes.size)
                      return this._treeState;
                  let e = rA(this._treeState);
                  for (let[t,n] of this._changes)
                      rk(e, t, rb(n));
                  return rE(this._store, e),
                  e
              }
          }
          var rC = Object.freeze({
              __proto__: null,
              atomicUpdater: function(e) {
                  return t=>{
                      e.replaceState(n=>{
                          let r = new rM(e,n);
                          return t(r),
                          r.newTreeState_INTERNAL()
                      }
                      )
                  }
              }
          })
            , rL = function(e, t) {
              if (!e)
                  throw Error(t)
          };
          let {atomicUpdater: rO} = rC
            , {batchUpdates: rP} = th
            , {DEFAULT_VALUE: rD} = X
            , {useStoreRef: rV} = np
            , {refreshRecoilValue: rI, setRecoilValue: rB} = e3
            , {cloneSnapshot: rU} = tF
            , {gotoSnapshot: rz} = rp
            , {useCallback: rF} = l;
          class rj {
          }
          let rW = new rj;
          function r$(e, t, n, r) {
              let i, o = rW;
              if (rP(()=>{
                  let a = "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
                  if ("function" != typeof t)
                      throw f(a);
                  let s = eR({
                      ...null != r ? r : {},
                      set: (t,n)=>rB(e, t, n),
                      reset: t=>rB(e, t, rD),
                      refresh: t=>rI(e, t),
                      gotoSnapshot: t=>rz(e, t),
                      transact_UNSTABLE: t=>rO(e)(t)
                  }, {
                      snapshot: ()=>{
                          let t = rU(e);
                          return i = t.retain(),
                          t
                      }
                  })
                    , l = t(s);
                  if ("function" != typeof l)
                      throw f(a);
                  o = l(...n)
              }
              ),
              o instanceof rj && rL(!1),
              h(o))
                  o.finally(()=>{
                      var e;
                      null === (e = i) || void 0 === e || e()
                  }
                  );
              else {
                  var a;
                  null === (a = i) || void 0 === a || a()
              }
              return o
          }
          var rG = {
              recoilCallback: r$,
              useRecoilCallback: function(e, t) {
                  let n = rV();
                  return rF((...t)=>r$(n.current, e, t), null != t ? [...t, n] : void 0)
              }
          };
          let {useStoreRef: rq} = np
            , {refreshRecoilValue: rY} = e3
            , {useCallback: rH} = l
            , {atomicUpdater: rK} = rC
            , {useStoreRef: rZ} = np
            , {useMemo: rX} = l;
          var rQ = Object.freeze({
              __proto__: null,
              WrappedValue: {
                  WrappedValue: class {
                      constructor(e) {
                          p(this, "value", void 0),
                          this.value = e
                      }
                  }
              }.WrappedValue
          });
          let {isFastRefreshEnabled: rJ} = P;
          class r0 extends Error {
          }
          var r1 = Object.freeze({
              __proto__: null,
              TreeCache: {
                  TreeCache: class {
                      constructor(e) {
                          var t, n, r;
                          p(this, "_name", void 0),
                          p(this, "_numLeafs", void 0),
                          p(this, "_root", void 0),
                          p(this, "_onHit", void 0),
                          p(this, "_onSet", void 0),
                          p(this, "_mapNodeValue", void 0),
                          this._name = null == e ? void 0 : e.name,
                          this._numLeafs = 0,
                          this._root = null,
                          this._onHit = null !== (t = null == e ? void 0 : e.onHit) && void 0 !== t ? t : ()=>{}
                          ,
                          this._onSet = null !== (n = null == e ? void 0 : e.onSet) && void 0 !== n ? n : ()=>{}
                          ,
                          this._mapNodeValue = null !== (r = null == e ? void 0 : e.mapNodeValue) && void 0 !== r ? r : e=>e
                      }
                      size() {
                          return this._numLeafs
                      }
                      root() {
                          return this._root
                      }
                      get(e, t) {
                          var n;
                          return null === (n = this.getLeafNode(e, t)) || void 0 === n ? void 0 : n.value
                      }
                      getLeafNode(e, t) {
                          if (null == this._root)
                              return;
                          let n = this._root;
                          for (; n; ) {
                              if (null == t || t.onNodeVisit(n),
                              "leaf" === n.type)
                                  return this._onHit(n),
                                  n;
                              let r = this._mapNodeValue(e(n.nodeKey));
                              n = n.branches.get(r)
                          }
                      }
                      set(e, t, n) {
                          let r = ()=>{
                              var r, i, o, a, s, l, u;
                              let c, f;
                              for (let[t,r] of e) {
                                  let e = this._root;
                                  if ((null == e ? void 0 : e.type) === "leaf")
                                      throw this.invalidCacheError();
                                  let i = c;
                                  if ("branch" !== (c = null !== (s = c = i ? i.branches.get(f) : e) && void 0 !== s ? s : {
                                      type: "branch",
                                      nodeKey: t,
                                      parent: i,
                                      branches: new Map,
                                      branchKey: f
                                  }).type || c.nodeKey !== t)
                                      throw this.invalidCacheError();
                                  null == i || i.branches.set(f, c),
                                  null == n || null === (l = n.onNodeVisit) || void 0 === l || l.call(n, c),
                                  f = this._mapNodeValue(r),
                                  this._root = null !== (u = this._root) && void 0 !== u ? u : c
                              }
                              let h = c ? null === (r = c) || void 0 === r ? void 0 : r.branches.get(f) : this._root;
                              if (null != h && ("leaf" !== h.type || h.branchKey !== f))
                                  throw this.invalidCacheError();
                              let d = {
                                  type: "leaf",
                                  value: t,
                                  parent: c,
                                  branchKey: f
                              };
                              null === (i = c) || void 0 === i || i.branches.set(f, d),
                              this._root = null !== (o = this._root) && void 0 !== o ? o : d,
                              this._numLeafs++,
                              this._onSet(d),
                              null == n || null === (a = n.onNodeVisit) || void 0 === a || a.call(n, d)
                          }
                          ;
                          try {
                              r()
                          } catch (e) {
                              if (e instanceof r0)
                                  this.clear(),
                                  r();
                              else
                                  throw e
                          }
                      }
                      delete(e) {
                          let t = this.root();
                          if (!t)
                              return !1;
                          if (e === t)
                              return this._root = null,
                              this._numLeafs = 0,
                              !0;
                          let n = e.parent
                            , r = e.branchKey;
                          for (; n; ) {
                              var i;
                              if (n.branches.delete(r),
                              n === t)
                                  return 0 === n.branches.size ? (this._root = null,
                                  this._numLeafs = 0) : this._numLeafs--,
                                  !0;
                              if (n.branches.size > 0)
                                  break;
                              r = null === (i = n) || void 0 === i ? void 0 : i.branchKey,
                              n = n.parent
                          }
                          for (; n !== t; n = n.parent)
                              if (null == n)
                                  return !1;
                          return this._numLeafs--,
                          !0
                      }
                      clear() {
                          this._numLeafs = 0,
                          this._root = null
                      }
                      invalidCacheError() {
                          let e = rJ() ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache." : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
                          throw N(e + (null != this._name ? ` - ${this._name}` : "")),
                          new r0
                      }
                  }
              }.TreeCache
          })
            , r2 = Object.freeze({
              __proto__: null,
              LRUCache: {
                  LRUCache: class {
                      constructor(e) {
                          var t;
                          p(this, "_maxSize", void 0),
                          p(this, "_size", void 0),
                          p(this, "_head", void 0),
                          p(this, "_tail", void 0),
                          p(this, "_map", void 0),
                          p(this, "_keyMapper", void 0),
                          this._maxSize = e.maxSize,
                          this._size = 0,
                          this._head = null,
                          this._tail = null,
                          this._map = new Map,
                          this._keyMapper = null !== (t = e.mapKey) && void 0 !== t ? t : e=>e
                      }
                      head() {
                          return this._head
                      }
                      tail() {
                          return this._tail
                      }
                      size() {
                          return this._size
                      }
                      maxSize() {
                          return this._maxSize
                      }
                      has(e) {
                          return this._map.has(this._keyMapper(e))
                      }
                      get(e) {
                          let t = this._keyMapper(e)
                            , n = this._map.get(t);
                          if (n)
                              return this.set(e, n.value),
                              n.value
                      }
                      set(e, t) {
                          let n = this._keyMapper(e)
                            , r = this._map.get(n);
                          r && this.delete(e);
                          let i = this.head()
                            , o = {
                              key: e,
                              right: i,
                              left: null,
                              value: t
                          };
                          i ? i.left = o : this._tail = o,
                          this._map.set(n, o),
                          this._head = o,
                          this._size++,
                          this._maybeDeleteLRU()
                      }
                      _maybeDeleteLRU() {
                          this.size() > this.maxSize() && this.deleteLru()
                      }
                      deleteLru() {
                          let e = this.tail();
                          e && this.delete(e.key)
                      }
                      delete(e) {
                          let t = this._keyMapper(e);
                          if (!this._size || !this._map.has(t))
                              return;
                          let n = d(this._map.get(t))
                            , r = n.right
                            , i = n.left;
                          r && (r.left = n.left),
                          i && (i.right = n.right),
                          n === this.head() && (this._head = r),
                          n === this.tail() && (this._tail = i),
                          this._map.delete(t),
                          this._size--
                      }
                      clear() {
                          this._size = 0,
                          this._head = null,
                          this._tail = null,
                          this._map = new Map
                      }
                  }
              }.LRUCache
          });
          let {LRUCache: r5} = r2
            , {TreeCache: r3} = r1;
          var r8 = function({name: e, maxSize: t, mapNodeValue: n=e=>e}) {
              let r = new r5({
                  maxSize: t
              })
                , i = new r3({
                  name: e,
                  mapNodeValue: n,
                  onHit: e=>{
                      r.set(e, !0)
                  }
                  ,
                  onSet: e=>{
                      let n = r.tail();
                      r.set(e, !0),
                      n && i.size() > t && i.delete(n.key)
                  }
              });
              return i
          };
          function r4(e, t, n) {
              if ("string" == typeof e && !e.includes('"') && !e.includes("\\"))
                  return `"${e}"`;
              switch (typeof e) {
              case "undefined":
                  return "";
              case "boolean":
                  return e ? "true" : "false";
              case "number":
              case "symbol":
                  return String(e);
              case "string":
                  return JSON.stringify(e);
              case "function":
                  if ((null == t ? void 0 : t.allowFunctions) !== !0)
                      throw f("Attempt to serialize function in a Recoil cache key");
                  return `__FUNCTION(${e.name})__`
              }
              if (null === e)
                  return "null";
              if ("object" != typeof e) {
                  var r;
                  return null !== (r = JSON.stringify(e)) && void 0 !== r ? r : ""
              }
              if (h(e))
                  return "__PROMISE__";
              if (Array.isArray(e))
                  return `[${e.map((e,n)=>r4(e, t, n.toString()))}]`;
              if ("function" == typeof e.toJSON)
                  return r4(e.toJSON(n), t, n);
              if (e instanceof Map) {
                  let r = {};
                  for (let[n,i] of e)
                      r["string" == typeof n ? n : r4(n, t)] = i;
                  return r4(r, t, n)
              }
              return e instanceof Set ? r4(Array.from(e).sort((e,n)=>r4(e, t).localeCompare(r4(n, t))), t, n) : void 0 !== Symbol && null != e[Symbol.iterator] && "function" == typeof e[Symbol.iterator] ? r4(Array.from(e), t, n) : `{${Object.keys(e).filter(t=>void 0 !== e[t]).sort().map(n=>`${r4(n, t)}:${r4(e[n], t, n)}`).join(",")}}`
          }
          var r9 = function(e, t={
              allowFunctions: !1
          }) {
              return r4(e, t)
          };
          let {TreeCache: r6} = r1
            , r7 = {
              equality: "reference",
              eviction: "keep-all",
              maxSize: 1 / 0
          };
          var ie = function({equality: e=r7.equality, eviction: t=r7.eviction, maxSize: n=r7.maxSize}=r7, r) {
              let i = function(e) {
                  switch (e) {
                  case "reference":
                      return e=>e;
                  case "value":
                      return e=>r9(e)
                  }
                  throw f(`Unrecognized equality policy ${e}`)
              }(e);
              return function(e, t, n, r) {
                  switch (e) {
                  case "keep-all":
                      return new r6({
                          name: r,
                          mapNodeValue: n
                      });
                  case "lru":
                      return r8({
                          name: r,
                          maxSize: d(t),
                          mapNodeValue: n
                      });
                  case "most-recent":
                      return r8({
                          name: r,
                          maxSize: 1,
                          mapNodeValue: n
                      })
                  }
                  throw f(`Unrecognized eviction policy ${e}`)
              }(t, n, i, r)
          };
          let {isReactNative: it, isWindow: ir} = tm
            , {isLoadable: ii, loadableWithError: io, loadableWithPromise: ia, loadableWithValue: is} = x
            , {WrappedValue: il} = rQ
            , {getNodeLoadable: iu, peekNodeLoadable: ic, setNodeValue: ih} = eD
            , {saveDepsToStore: id} = es
            , {DEFAULT_VALUE: ip, getConfigDeletionHandler: i_, getNode: im, registerNode: iv} = X
            , {isRecoilValue: ig} = z
            , {markRecoilValueModified: iy} = e3
            , {retainedByOptionWithDefault: iw} = ti
            , {recoilCallback: ib} = rG
            , {startPerfBlock: iT} = {
              startPerfBlock: function(e) {
                  return ()=>null
              }
          };
          class iS {
          }
          let iR = new iS
            , iA = []
            , ix = new Map
            , iE = (r = 0,
          ()=>r++);
          function ik(e) {
              let t = null
                , {key: n, get: r, cachePolicy_UNSTABLE: i} = e
                , o = null != e.set ? e.set : void 0
                , a = new Set
                , s = ie(null != i ? i : {
                  equality: "reference",
                  eviction: "keep-all"
              }, n)
                , l = iw(e.retainedBy_UNSTABLE)
                , u = new Map
                , c = 0;
              function p() {
                  return !k("recoil_memory_managament_2020") || c > 0
              }
              function _(e) {
                  return e.getState().knownSelectors.add(n),
                  c++,
                  ()=>{
                      c--
                  }
              }
              function m() {
                  return void 0 !== i_(n) && !p()
              }
              function v(e, t) {
                  E(e, t) && x(e),
                  g(t, !0)
              }
              function g(e, n) {
                  let r = ix.get(e);
                  if (null != r) {
                      for (let e of r)
                          iy(e, d(t));
                      n && ix.delete(e)
                  }
              }
              function y(e, t) {
                  let n = ix.get(t);
                  null == n && ix.set(t, n = new Set),
                  n.add(e)
              }
              function w(e, t, n, r, i, o) {
                  return t.then(r=>{
                      if (!p())
                          throw x(e),
                          iR;
                      null != o.loadingDepKey && o.loadingDepPromise === t ? n.atomValues.set(o.loadingDepKey, is(r)) : e.getState().knownSelectors.forEach(e=>{
                          n.atomValues.delete(e)
                      }
                      );
                      let a = S(e, n);
                      if (a && "loading" !== a.state) {
                          if ((E(e, i) || null == A(e)) && v(e, i),
                          "hasValue" === a.state)
                              return a.contents;
                          throw a.contents
                      }
                      if (!E(e, i)) {
                          let t = R(e, n);
                          if (null != t)
                              return t.loadingLoadable.contents
                      }
                      let[s,l] = T(e, n, i);
                      if ("loading" !== s.state && (M(n, s, l),
                      v(e, i)),
                      "hasError" === s.state)
                          throw s.contents;
                      return s.contents
                  }
                  ).catch(t=>{
                      if (t instanceof iS)
                          throw iR;
                      if (!p())
                          throw x(e),
                          iR;
                      let o = io(t);
                      throw M(n, o, r),
                      v(e, i),
                      t
                  }
                  )
              }
              function b(e, t, r, i) {
                  var o, s, l, u, c, f, h;
                  for (let d of ((E(e, i) || t.version === (null === (o = e.getState()) || void 0 === o ? void 0 : null === (s = o.currentTree) || void 0 === s ? void 0 : s.version) || t.version === (null === (l = e.getState()) || void 0 === l ? void 0 : null === (u = l.nextTree) || void 0 === u ? void 0 : u.version)) && id(n, r, e, null !== (c = null === (f = e.getState()) || void 0 === f ? void 0 : null === (h = f.nextTree) || void 0 === h ? void 0 : h.version) && void 0 !== c ? c : e.getState().currentTree.version),
                  r))
                      a.add(d)
              }
              function T(e, i, o) {
                  let a, s;
                  let l = iT(n)
                    , u = !0
                    , c = !0
                    , _ = ()=>{
                      l(),
                      c = !1
                  }
                    , m = !1
                    , y = {
                      loadingDepKey: null,
                      loadingDepPromise: null
                  }
                    , T = new Map;
                  function S({key: t}) {
                      let n = iu(e, i, t);
                      switch (T.set(t, n),
                      u || (b(e, i, new Set(T.keys()), o),
                      function(e, t) {
                          if (E(e, t)) {
                              let n = d(A(e));
                              n.stateVersions.clear(),
                              g(t, !1)
                          }
                      }(e, o)),
                      n.state) {
                      case "hasValue":
                          return n.contents;
                      case "hasError":
                          throw n.contents;
                      case "loading":
                          throw y.loadingDepKey = t,
                          y.loadingDepPromise = n.contents,
                          n.contents
                      }
                      throw f("Invalid Loadable state")
                  }
                  let R = n=>(...r)=>{
                      if (c)
                          throw f("Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.");
                      return null != t || rL(!1),
                      ib(e, n, r, {
                          node: t
                      })
                  }
                  ;
                  try {
                      (a = r({
                          get: S,
                          getCallback: R
                      }),
                      a = ig(a) ? S(a) : a,
                      ii(a) && ("hasError" === a.state && (m = !0),
                      a = a.contents),
                      h(a)) ? a = a.then(t=>{
                          if (!p())
                              throw x(e),
                              iR;
                          let n = is(t);
                          return M(i, n, T),
                          v(e, o),
                          t
                      }
                      ).catch(t=>{
                          if (!p())
                              throw x(e),
                              iR;
                          if (h(t))
                              return w(e, t, i, T, o, y);
                          let n = io(t);
                          throw M(i, n, T),
                          v(e, o),
                          t
                      }
                      ).finally(_) : _(),
                      a = a instanceof il ? a.value : a
                  } catch (t) {
                      h(a = t) ? a = w(e, a, i, T, o, y).finally(_) : (m = !0,
                      _())
                  }
                  return s = m ? io(a) : h(a) ? ia(a) : is(a),
                  u = !1,
                  function(e, t, n) {
                      if (E(e, t)) {
                          let t = A(e);
                          null != t && (t.depValuesDiscoveredSoFarDuringAsyncWork = n)
                      }
                  }(e, o, T),
                  b(e, i, new Set(T.keys()), o),
                  [s, T]
              }
              function S(e, t) {
                  let r = t.atomValues.get(n);
                  if (null != r)
                      return r;
                  let i = new Set;
                  try {
                      r = s.get(n=>("string" != typeof n && rL(!1),
                      iu(e, t, n).contents), {
                          onNodeVisit: e=>{
                              "branch" === e.type && e.nodeKey !== n && i.add(e.nodeKey)
                          }
                      })
                  } catch (e) {
                      throw f(`Problem with cache lookup for selector "${n}": ${e.message}`)
                  }
                  if (r) {
                      var o;
                      t.atomValues.set(n, r),
                      b(e, t, i, null === (o = A(e)) || void 0 === o ? void 0 : o.executionID)
                  }
                  return r
              }
              function R(e, t) {
                  let n = td([u.has(e) ? [d(u.get(e))] : [], j(eS(u, ([t])=>t !== e), ([,e])=>e)]);
                  for (let r of n) {
                      if (r.stateVersions.get(t.version) || !function(n) {
                          for (let[r,i] of n)
                              if (!iu(e, t, r).is(i))
                                  return !0;
                          return !1
                      }(r.depValuesDiscoveredSoFarDuringAsyncWork))
                          return r.stateVersions.set(t.version, !0),
                          r;
                      r.stateVersions.set(t.version, !1)
                  }
              }
              function A(e) {
                  return u.get(e)
              }
              function x(e) {
                  u.delete(e)
              }
              function E(e, t) {
                  var n;
                  return t === (null === (n = A(e)) || void 0 === n ? void 0 : n.executionID)
              }
              function M(e, t, r) {
                  e.atomValues.set(n, t);
                  try {
                      s.set(Array.from(r.entries()).map(([e,t])=>[e, t.contents]), t)
                  } catch (e) {
                      throw f(`Problem with setting cache for selector "${n}": ${e.message}`)
                  }
              }
              function C(e, t) {
                  let r = t.atomValues.get(n);
                  return null != r ? r : s.get(n=>{
                      var r;
                      return "string" != typeof n && rL(!1),
                      null === (r = ic(e, t, n)) || void 0 === r ? void 0 : r.contents
                  }
                  )
              }
              function L(e, t) {
                  return function(e) {
                      if (iA.includes(n)) {
                          let e = `Recoil selector has circular dependencies: ${iA.slice(iA.indexOf(n)).join(" → ")}`;
                          return io(f(e))
                      }
                      iA.push(n);
                      try {
                          return e()
                      } finally {
                          iA.pop()
                      }
                  }(()=>(function(e, t) {
                      var n;
                      let r = S(e, t);
                      if (null != r)
                          return x(e),
                          r;
                      let i = R(e, t);
                      if (null != i)
                          return (null === (n = i.loadingLoadable) || void 0 === n ? void 0 : n.state) === "loading" && y(e, i.executionID),
                          i.loadingLoadable;
                      let o = iE()
                        , [a,s] = T(e, t, o);
                      return "loading" === a.state ? (u.set(e, {
                          depValuesDiscoveredSoFarDuringAsyncWork: s,
                          executionID: o,
                          loadingLoadable: a,
                          stateVersions: new Map([[t.version, !0]])
                      }),
                      y(e, o)) : (x(e),
                      M(t, a, s)),
                      a
                  }
                  )(e, t))
              }
              function O(e) {
                  e.atomValues.delete(n)
              }
              function P(e, n) {
                  for (let i of (null != t || rL(!1),
                  a)) {
                      var r;
                      let t = im(i);
                      null === (r = t.clearCache) || void 0 === r || r.call(t, e, n)
                  }
                  a.clear(),
                  O(n),
                  s.clear(),
                  iy(e, t)
              }
              if (null == o)
                  return t = iv({
                      key: n,
                      nodeType: "selector",
                      peek: C,
                      get: L,
                      init: _,
                      invalidate: O,
                      clearCache: P,
                      shouldDeleteConfigOnRelease: m,
                      dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                      shouldRestoreFromSnapshots: !1,
                      retainedBy: l
                  });
              {
                  let r = (e,t,r)=>{
                      let i = !1
                        , a = new Map;
                      function s({key: r}) {
                          if (i)
                              throw f("Recoil: Async selector sets are not currently supported.");
                          let o = iu(e, t, r);
                          if ("hasValue" === o.state)
                              return o.contents;
                          if ("loading" === o.state) {
                              let e = `Getting value of asynchronous atom or selector "${r}" in a pending state while setting selector "${n}" is not yet supported.`;
                              throw N(e),
                              f(e)
                          }
                          throw o.contents
                      }
                      function l(n, r) {
                          if (i) {
                              let e = "Recoil: Async selector sets are not currently supported.";
                              throw N(e),
                              f(e)
                          }
                          let o = "function" == typeof r ? r(s(n)) : r
                            , l = ih(e, t, n.key, o);
                          l.forEach((e,t)=>a.set(t, e))
                      }
                      let u = o({
                          set: l,
                          get: s,
                          reset: function(e) {
                              l(e, ip)
                          }
                      }, r);
                      if (void 0 !== u)
                          throw h(u) ? f("Recoil: Async selector sets are not currently supported.") : f("Recoil: selector set should be a void function.");
                      return i = !0,
                      a
                  }
                  ;
                  return t = iv({
                      key: n,
                      nodeType: "selector",
                      peek: C,
                      get: L,
                      set: r,
                      init: _,
                      invalidate: O,
                      clearCache: P,
                      shouldDeleteConfigOnRelease: m,
                      dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                      shouldRestoreFromSnapshots: !1,
                      retainedBy: l
                  })
              }
          }
          ik.value = e=>new il(e);
          let {isLoadable: iN, loadableWithError: iM, loadableWithPromise: iC, loadableWithValue: iL} = x
            , {WrappedValue: iO} = rQ
            , {peekNodeInfo: iP} = eD
            , {DEFAULT_VALUE: iD, DefaultValue: iV, getConfigDeletionHandler: iI, registerNode: iB, setConfigDeletionHandler: iU} = X
            , {isRecoilValue: iz} = z
            , {getRecoilValueAsLoadable: iF, markRecoilValueModified: ij, setRecoilValue: iW, setRecoilValueLoadable: i$} = e3
            , {retainedByOptionWithDefault: iG} = ti
            , iq = e=>e instanceof iO ? e.value : e;
          function iY(e) {
              let {...t} = e
                , n = "default"in e ? e.default : new Promise(()=>{}
              );
              return iz(n) ? function(e) {
                  let t = iY({
                      ...e,
                      default: iD,
                      persistence_UNSTABLE: void 0 === e.persistence_UNSTABLE ? void 0 : {
                          ...e.persistence_UNSTABLE,
                          validator: t=>t instanceof iV ? t : d(e.persistence_UNSTABLE).validator(t, iD)
                      },
                      effects: e.effects,
                      effects_UNSTABLE: e.effects_UNSTABLE
                  })
                    , n = ik({
                      key: `${e.key}__withFallback`,
                      get: ({get: n})=>{
                          let r = n(t);
                          return r instanceof iV ? e.default : r
                      }
                      ,
                      set: ({set: e},n)=>e(t, n),
                      cachePolicy_UNSTABLE: {
                          eviction: "most-recent"
                      },
                      dangerouslyAllowMutability: e.dangerouslyAllowMutability
                  });
                  return iU(n.key, iI(e.key)),
                  n
              }({
                  ...t,
                  default: n
              }) : function(e) {
                  var t;
                  let n;
                  let {key: r, persistence_UNSTABLE: i} = e
                    , o = iG(e.retainedBy_UNSTABLE)
                    , a = 0;
                  function s(e) {
                      return iC(e.then(e=>(l = iL(e),
                      e)).catch(e=>{
                          throw l = iM(e),
                          e
                      }
                      ))
                  }
                  let l = h(e.default) ? s(e.default) : iN(e.default) ? "loading" === e.default.state ? s(e.default.contents) : e.default : iL(iq(e.default));
                  l.contents;
                  let u = new Map;
                  function c(e, t) {
                      var i, o;
                      return null !== (i = null !== (o = t.atomValues.get(r)) && void 0 !== o ? o : n) && void 0 !== i ? i : l
                  }
                  let p = iB({
                      key: r,
                      nodeType: "atom",
                      peek: c,
                      get: function(e, t) {
                          if (t.atomValues.has(r))
                              return d(t.atomValues.get(r));
                          if (!t.nonvalidatedAtoms.has(r))
                              return l;
                          {
                              if (null != n)
                                  return n;
                              if (null == i)
                                  return F(`Tried to restore a persisted value for atom ${r} but it has no persistence settings.`),
                                  l;
                              let e = t.nonvalidatedAtoms.get(r)
                                , o = i.validator(e, iD)
                                , a = o instanceof iV ? l : iL(o);
                              return n = a
                          }
                      },
                      set: function(e, t, i) {
                          if (t.atomValues.has(r)) {
                              let e = d(t.atomValues.get(r));
                              if ("hasValue" === e.state && i === e.contents)
                                  return new Map
                          } else if (!t.nonvalidatedAtoms.has(r) && i instanceof iV)
                              return new Map;
                          return n = void 0,
                          new Map().set(r, iL(i))
                      },
                      init: function(t, n, i) {
                          var o, s, d;
                          a++;
                          let _ = ()=>{
                              var e;
                              a--,
                              null === (e = u.get(t)) || void 0 === e || e.forEach(e=>e()),
                              u.delete(t)
                          }
                          ;
                          if (t.getState().knownAtoms.add(r),
                          "loading" === l.state) {
                              let e = ()=>{
                                  var e;
                                  let n = null !== (e = t.getState().nextTree) && void 0 !== e ? e : t.getState().currentTree;
                                  n.atomValues.has(r) || ij(t, p)
                              }
                              ;
                              l.contents.finally(e)
                          }
                          let m = null !== (o = e.effects) && void 0 !== o ? o : e.effects_UNSTABLE;
                          if (null != m) {
                              let e = iD
                                , o = !0
                                , a = !1
                                , _ = null;
                              function v(i) {
                                  if (o && i.key === r) {
                                      let r = e;
                                      return r instanceof iV ? c(t, n) : h(r) ? iC(r.then(e=>e instanceof iV ? l.toPromise() : e)) : iL(r)
                                  }
                                  return iF(t, i)
                              }
                              function g(e) {
                                  return v(e).toPromise()
                              }
                              function y(n) {
                                  var i;
                                  let a = iP(t, null !== (i = t.getState().nextTree) && void 0 !== i ? i : t.getState().currentTree, n.key);
                                  return !o || n.key !== r || e instanceof iV ? a : {
                                      ...a,
                                      isSet: !0,
                                      loadable: v(n)
                                  }
                              }
                              let w = n=>r=>{
                                  if (o) {
                                      let t = v(p)
                                        , i = "hasValue" === t.state ? t.contents : iD;
                                      h(e = "function" == typeof r ? r(i) : r) && (e = e.then(e=>(_ = {
                                          effect: n,
                                          value: e
                                      },
                                      e)))
                                  } else {
                                      if (h(r))
                                          throw f("Setting atoms to async values is not implemented.");
                                      "function" != typeof r && (_ = {
                                          effect: n,
                                          value: iq(r)
                                      }),
                                      iW(t, p, "function" == typeof r ? e=>{
                                          let t = iq(r(e));
                                          return _ = {
                                              effect: n,
                                              value: t
                                          },
                                          t
                                      }
                                      : iq(r))
                                  }
                              }
                                , b = e=>()=>w(e)(iD)
                                , T = e=>n=>{
                                  var i;
                                  let {release: o} = t.subscribeToTransactions(t=>{
                                      var i, o, a, s, u;
                                      let {currentTree: c, previousTree: f} = t.getState();
                                      f || (N("Transaction subscribers notified without a next tree being present -- this is a bug in Recoil"),
                                      f = c);
                                      let h = null !== (i = c.atomValues.get(r)) && void 0 !== i ? i : l;
                                      if ("hasValue" === h.state) {
                                          let t = h.contents
                                            , i = null !== (o = f.atomValues.get(r)) && void 0 !== o ? o : l
                                            , d = "hasValue" === i.state ? i.contents : iD;
                                          (null === (a = _) || void 0 === a ? void 0 : a.effect) !== e || (null === (s = _) || void 0 === s ? void 0 : s.value) !== t ? n(t, d, !c.atomValues.has(r)) : (null === (u = _) || void 0 === u ? void 0 : u.effect) === e && (_ = null)
                                      }
                                  }
                                  , r);
                                  u.set(t, [...null !== (i = u.get(t)) && void 0 !== i ? i : [], o])
                              }
                              ;
                              for (let n of m)
                                  try {
                                      let e = n({
                                          node: p,
                                          storeID: t.storeID,
                                          parentStoreID_UNSTABLE: t.parentStoreID,
                                          trigger: i,
                                          setSelf: w(n),
                                          resetSelf: b(n),
                                          onSet: T(n),
                                          getPromise: g,
                                          getLoadable: v,
                                          getInfo_UNSTABLE: y
                                      });
                                      null != e && u.set(t, [...null !== (s = u.get(t)) && void 0 !== s ? s : [], e])
                                  } catch (t) {
                                      e = t,
                                      a = !0
                                  }
                              if (o = !1,
                              !(e instanceof iV)) {
                                  let i = a ? iM(e) : h(e) ? iC(function(e, t) {
                                      let n = t.then(t=>{
                                          var i, o;
                                          let a = null !== (i = e.getState().nextTree) && void 0 !== i ? i : e.getState().currentTree;
                                          return (null === (o = a.atomValues.get(r)) || void 0 === o ? void 0 : o.contents) === n && iW(e, p, t),
                                          t
                                      }
                                      ).catch(t=>{
                                          var i, o;
                                          let a = null !== (i = e.getState().nextTree) && void 0 !== i ? i : e.getState().currentTree;
                                          throw (null === (o = a.atomValues.get(r)) || void 0 === o ? void 0 : o.contents) === n && i$(e, p, iM(t)),
                                          t
                                      }
                                      );
                                      return n
                                  }(t, e)) : iL(iq(e));
                                  i.contents,
                                  n.atomValues.set(r, i),
                                  null === (d = t.getState().nextTree) || void 0 === d || d.atomValues.set(r, i)
                              }
                          }
                          return _
                      },
                      invalidate: function() {
                          n = void 0
                      },
                      shouldDeleteConfigOnRelease: function() {
                          return void 0 !== iI(r) && a <= 0
                      },
                      dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                      persistence_UNSTABLE: e.persistence_UNSTABLE ? {
                          type: e.persistence_UNSTABLE.type,
                          backButton: e.persistence_UNSTABLE.backButton
                      } : void 0,
                      shouldRestoreFromSnapshots: !0,
                      retainedBy: o
                  });
                  return p
              }({
                  ...t,
                  default: n
              })
          }
          iY.value = e=>new iO(e);
          var iH = Object.freeze({
              __proto__: null,
              MapCache: {
                  MapCache: class {
                      constructor(e) {
                          var t;
                          p(this, "_map", void 0),
                          p(this, "_keyMapper", void 0),
                          this._map = new Map,
                          this._keyMapper = null !== (t = null == e ? void 0 : e.mapKey) && void 0 !== t ? t : e=>e
                      }
                      size() {
                          return this._map.size
                      }
                      has(e) {
                          return this._map.has(this._keyMapper(e))
                      }
                      get(e) {
                          return this._map.get(this._keyMapper(e))
                      }
                      set(e, t) {
                          this._map.set(this._keyMapper(e), t)
                      }
                      delete(e) {
                          this._map.delete(this._keyMapper(e))
                      }
                      clear() {
                          this._map.clear()
                      }
                  }
              }.MapCache
          });
          let {LRUCache: iK} = r2
            , {MapCache: iZ} = iH
            , iX = {
              equality: "reference",
              eviction: "none",
              maxSize: 1 / 0
          };
          var iQ = function({equality: e=iX.equality, eviction: t=iX.eviction, maxSize: n=iX.maxSize}=iX) {
              let r = function(e) {
                  switch (e) {
                  case "reference":
                      return e=>e;
                  case "value":
                      return e=>r9(e)
                  }
                  throw f(`Unrecognized equality policy ${e}`)
              }(e)
                , i = function(e, t, n) {
                  switch (e) {
                  case "keep-all":
                      return new iZ({
                          mapKey: n
                      });
                  case "lru":
                      return new iK({
                          mapKey: n,
                          maxSize: d(t)
                      });
                  case "most-recent":
                      return new iK({
                          mapKey: n,
                          maxSize: 1
                      })
                  }
                  throw f(`Unrecognized eviction policy ${e}`)
              }(t, n, r);
              return i
          };
          let {setConfigDeletionHandler: iJ} = X
            , {setConfigDeletionHandler: i0} = X
            , i1 = 0;
          var i2 = function(e) {
              var t, n;
              let r = iQ({
                  equality: null !== (t = null === (n = e.cachePolicyForParams_UNSTABLE) || void 0 === n ? void 0 : n.equality) && void 0 !== t ? t : "value",
                  eviction: "keep-all"
              });
              return t=>{
                  var n;
                  let i, o;
                  try {
                      i = r.get(t)
                  } catch (t) {
                      throw f(`Problem with cache lookup for selector ${e.key}: ${t.message}`)
                  }
                  if (null != i)
                      return i;
                  let a = `${e.key}__selectorFamily/${null !== (n = r9(t, {
                      allowFunctions: !0
                  })) && void 0 !== n ? n : "void"}/${i1++}`
                    , s = n=>e.get(t)(n)
                    , l = e.cachePolicy_UNSTABLE
                    , u = "function" == typeof e.retainedBy_UNSTABLE ? e.retainedBy_UNSTABLE(t) : e.retainedBy_UNSTABLE;
                  if (null != e.set) {
                      let n = e.set
                        , r = (e,r)=>n(t)(e, r);
                      o = ik({
                          key: a,
                          get: s,
                          set: r,
                          cachePolicy_UNSTABLE: l,
                          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                          retainedBy_UNSTABLE: u
                      })
                  } else
                      o = ik({
                          key: a,
                          get: s,
                          cachePolicy_UNSTABLE: l,
                          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                          retainedBy_UNSTABLE: u
                      });
                  return r.set(t, o),
                  i0(o.key, ()=>{
                      r.delete(t)
                  }
                  ),
                  o
              }
          };
          let i5 = i2({
              key: "__constant",
              get: e=>()=>e,
              cachePolicyForParams_UNSTABLE: {
                  equality: "reference"
              }
          })
            , i3 = i2({
              key: "__error",
              get: e=>()=>{
                  throw f(e)
              }
              ,
              cachePolicyForParams_UNSTABLE: {
                  equality: "reference"
              }
          })
            , {loadableWithError: i8, loadableWithPromise: i4, loadableWithValue: i9} = x;
          function i6(e, t) {
              let n = Array(t.length).fill(void 0)
                , r = Array(t.length).fill(void 0);
              for (let[i,o] of t.entries())
                  try {
                      n[i] = e(o)
                  } catch (e) {
                      r[i] = e
                  }
              return [n, r]
          }
          function i7(e) {
              return null != e && !h(e)
          }
          function oe(e) {
              return Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map(t=>e[t])
          }
          function ot(e, t) {
              return Array.isArray(e) ? t : Object.getOwnPropertyNames(e).reduce((e,n,r)=>({
                  ...e,
                  [n]: t[r]
              }), {})
          }
          function on(e, t, n) {
              let r = n.map((e,n)=>null == e ? i9(t[n]) : h(e) ? i4(e) : i8(e));
              return ot(e, r)
          }
          let or = i2({
              key: "__waitForNone",
              get: e=>({get: t})=>{
                  let n = oe(e)
                    , [r,i] = i6(t, n);
                  return on(e, r, i)
              }
              ,
              dangerouslyAllowMutability: !0
          })
            , oi = i2({
              key: "__waitForAny",
              get: e=>({get: t})=>{
                  let n = oe(e)
                    , [r,i] = i6(t, n);
                  return i.some(e=>!h(e)) ? on(e, r, i) : new Promise(t=>{
                      for (let[n,o] of i.entries())
                          h(o) && o.then(o=>{
                              r[n] = o,
                              i[n] = void 0,
                              t(on(e, r, i))
                          }
                          ).catch(o=>{
                              i[n] = o,
                              t(on(e, r, i))
                          }
                          )
                  }
                  )
              }
              ,
              dangerouslyAllowMutability: !0
          })
            , oo = i2({
              key: "__waitForAll",
              get: e=>({get: t})=>{
                  let n = oe(e)
                    , [r,i] = i6(t, n);
                  if (i.every(e=>null == e))
                      return ot(e, r);
                  let o = i.find(i7);
                  if (null != o)
                      throw o;
                  return Promise.all(i).then(t=>ot(e, t.map((e,t)=>void 0 === e ? r[t] : e)))
              }
              ,
              dangerouslyAllowMutability: !0
          })
            , oa = i2({
              key: "__waitForAllSettled",
              get: e=>({get: t})=>{
                  let n = oe(e)
                    , [r,i] = i6(t, n);
                  return i.every(e=>!h(e)) ? on(e, r, i) : Promise.all(i.map((e,t)=>h(e) ? e.then(e=>{
                      r[t] = e,
                      i[t] = void 0
                  }
                  ).catch(e=>{
                      r[t] = void 0,
                      i[t] = e
                  }
                  ) : null)).then(()=>on(e, r, i))
              }
              ,
              dangerouslyAllowMutability: !0
          })
            , os = i2({
              key: "__noWait",
              get: e=>({get: t})=>{
                  try {
                      return ik.value(i9(t(e)))
                  } catch (e) {
                      return ik.value(h(e) ? i4(e) : i8(e))
                  }
              }
              ,
              dangerouslyAllowMutability: !0
          })
            , {RecoilLoadable: ol} = x
            , {DefaultValue: ou} = X
            , {RecoilRoot: oc, useRecoilStoreID: of} = np
            , {isRecoilValue: oh} = z
            , {retentionZone: od} = eb
            , {freshSnapshot: op} = tF
            , {useRecoilState: o_, useRecoilState_TRANSITION_SUPPORT_UNSTABLE: om, useRecoilStateLoadable: ov, useRecoilValue: og, useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: oy, useRecoilValueLoadable: ow, useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: ob, useResetRecoilState: oT, useSetRecoilState: oS} = {
              recoilComponentGetRecoilValueCount_FOR_TESTING: {
                  current: 0
              },
              useRecoilInterface: function() {
                  let e = nE()
                    , t = nD()
                    , [,n] = nq([])
                    , r = nG(new Set);
                  r.current = new Set;
                  let i = nG(new Set)
                    , o = nG(new Map)
                    , a = nj(e=>{
                      let t = o.current.get(e);
                      t && (t.release(),
                      o.current.delete(e))
                  }
                  , [o])
                    , s = nj((e,t)=>{
                      o.current.has(t) && n([])
                  }
                  , []);
                  return nW(()=>{
                      let n = t.current;
                      ei(r.current, i.current).forEach(t=>{
                          if (o.current.has(t)) {
                              F(`Double subscription to RecoilValue "${t}"`);
                              return
                          }
                          let r = nF(n, new nI(t), e=>s(e, t), e);
                          o.current.set(t, r);
                          let i = n.getState();
                          i.nextTree ? n.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{
                              s(n.getState(), t)
                          }
                          ) : s(n.getState(), t)
                      }
                      ),
                      ei(i.current, r.current).forEach(e=>{
                          a(e)
                      }
                      ),
                      i.current = r.current
                  }
                  ),
                  nW(()=>{
                      let n = o.current;
                      return ei(r.current, new Set(n.keys())).forEach(r=>{
                          let i = nF(t.current, new nI(r), e=>s(e, r), e);
                          n.set(r, i)
                      }
                      ),
                      ()=>n.forEach((e,t)=>a(t))
                  }
                  , [e, t, a, s]),
                  n$(()=>{
                      function e(e) {
                          return n=>{
                              nU(t.current, e, n)
                          }
                      }
                      function n(e) {
                          var n;
                          r.current.has(e.key) || (r.current = nY(r.current, e.key));
                          let i = t.current.getState();
                          return nB(t.current, e, nC().early && null !== (n = i.nextTree) && void 0 !== n ? n : i.currentTree)
                      }
                      function i(e) {
                          let r = n(e);
                          return nH(r, e, t)
                      }
                      return {
                          getRecoilValue: i,
                          getRecoilValueLoadable: n,
                          getRecoilState: function(t) {
                              return [i(t), e(t)]
                          },
                          getRecoilStateLoadable: function(t) {
                              return [n(t), e(t)]
                          },
                          getSetRecoilState: e,
                          getResetRecoilState: function(e) {
                              return ()=>nU(t.current, e, nN)
                          }
                      }
                  }
                  , [r, t])
              },
              useRecoilState: function(e) {
                  return [n0(e), n1(e)]
              },
              useRecoilStateLoadable: function(e) {
                  return [nJ(e), n1(e)]
              },
              useRecoilValue: n0,
              useRecoilValueLoadable: nJ,
              useResetRecoilState: function(e) {
                  let t = nD();
                  return nj(()=>{
                      nU(t.current, e, nN)
                  }
                  , [t, e])
              },
              useSetRecoilState: n1,
              useSetUnvalidatedAtomValues: function() {
                  let e = nD();
                  return (t,n={})=>{
                      nk(()=>{
                          e.current.addTransactionMetadata(n),
                          t.forEach((t,n)=>nz(e.current, new nI(n), t))
                      }
                      )
                  }
              },
              useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: n2,
              useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: n5,
              useRecoilState_TRANSITION_SUPPORT_UNSTABLE: function(e) {
                  return [n5(e), n1(e)]
              }
          }
            , {useGotoRecoilSnapshot: oR, useRecoilSnapshot: oA, useRecoilTransactionObserver: ox} = rp
            , {useRecoilCallback: oE} = rG
            , {noWait: ok, waitForAll: oN, waitForAllSettled: oM, waitForAny: oC, waitForNone: oL} = {
              waitForNone: or,
              waitForAny: oi,
              waitForAll: oo,
              waitForAllSettled: oa,
              noWait: os
          };
          var oO = {
              DefaultValue: ou,
              isRecoilValue: oh,
              RecoilLoadable: ol,
              RecoilEnv: D,
              RecoilRoot: oc,
              useRecoilStoreID: of,
              useRecoilBridgeAcrossReactRoots_UNSTABLE: function() {
                  "MUTABLE_SOURCE" === rv().mode && console.warn("Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.");
                  let e = ry().current;
                  return rw(()=>function({children: t}) {
                      return l.createElement(rg, {
                          store_INTERNAL: e
                      }, t)
                  }
                  , [e])
              },
              atom: iY,
              selector: ik,
              atomFamily: function(e) {
                  var t, n;
                  let r = iQ({
                      equality: null !== (t = null === (n = e.cachePolicyForParams_UNSTABLE) || void 0 === n ? void 0 : n.equality) && void 0 !== t ? t : "value",
                      eviction: "keep-all"
                  });
                  return t=>{
                      var n, i;
                      let o = r.get(t);
                      if (null != o)
                          return o;
                      let {cachePolicyForParams_UNSTABLE: a, ...s} = e
                        , l = "default"in e ? e.default : new Promise(()=>{}
                      )
                        , u = iY({
                          ...s,
                          key: `${e.key}__${null !== (n = r9(t)) && void 0 !== n ? n : "void"}`,
                          default: "function" == typeof l ? l(t) : l,
                          retainedBy_UNSTABLE: "function" == typeof e.retainedBy_UNSTABLE ? e.retainedBy_UNSTABLE(t) : e.retainedBy_UNSTABLE,
                          effects: "function" == typeof e.effects ? e.effects(t) : "function" == typeof e.effects_UNSTABLE ? e.effects_UNSTABLE(t) : null !== (i = e.effects) && void 0 !== i ? i : e.effects_UNSTABLE
                      });
                      return r.set(t, u),
                      iJ(u.key, ()=>{
                          r.delete(t)
                      }
                      ),
                      u
                  }
              },
              selectorFamily: i2,
              constSelector: function(e) {
                  return i5(e)
              },
              errorSelector: function(e) {
                  return i3(e)
              },
              readOnlySelector: function(e) {
                  return e
              },
              noWait: ok,
              waitForNone: oL,
              waitForAny: oC,
              waitForAll: oN,
              waitForAllSettled: oM,
              useRecoilValue: og,
              useRecoilValueLoadable: ow,
              useRecoilState: o_,
              useRecoilStateLoadable: ov,
              useSetRecoilState: oS,
              useResetRecoilState: oT,
              useGetRecoilValueInfo_UNSTABLE: function() {
                  let e = rm();
                  return ({key: t})=>r_(e.current, e.current.getState().currentTree, t)
              },
              useRecoilRefresher_UNSTABLE: function(e) {
                  let t = rq();
                  return rH(()=>{
                      let n = t.current;
                      rY(n, e)
                  }
                  , [e, t])
              },
              useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: ob,
              useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: oy,
              useRecoilState_TRANSITION_SUPPORT_UNSTABLE: om,
              useRecoilCallback: oE,
              useRecoilTransaction_UNSTABLE: function(e, t) {
                  let n = rZ();
                  return rX(()=>(...t)=>{
                      let r = rK(n.current);
                      r(n=>{
                          e(n)(...t)
                      }
                      )
                  }
                  , null != t ? [...t, n] : void 0)
              },
              useGotoRecoilSnapshot: oR,
              useRecoilSnapshot: oA,
              useRecoilTransactionObserver_UNSTABLE: ox,
              snapshot_UNSTABLE: op,
              useRetain: nx,
              retentionZone: od
          };
          oO.DefaultValue,
          oO.isRecoilValue,
          oO.RecoilLoadable,
          oO.RecoilEnv;
          var oP = oO.RecoilRoot;
          oO.useRecoilStoreID,
          oO.useRecoilBridgeAcrossReactRoots_UNSTABLE;
          var oD = oO.atom;
          oO.selector,
          oO.atomFamily,
          oO.selectorFamily,
          oO.constSelector,
          oO.errorSelector,
          oO.readOnlySelector,
          oO.noWait,
          oO.waitForNone,
          oO.waitForAny,
          oO.waitForAll,
          oO.waitForAllSettled,
          oO.useRecoilValue,
          oO.useRecoilValueLoadable;
          var oV = oO.useRecoilState;
          oO.useRecoilStateLoadable,
          oO.useSetRecoilState,
          oO.useResetRecoilState,
          oO.useGetRecoilValueInfo_UNSTABLE,
          oO.useRecoilRefresher_UNSTABLE,
          oO.useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE,
          oO.useRecoilValue_TRANSITION_SUPPORT_UNSTABLE,
          oO.useRecoilState_TRANSITION_SUPPORT_UNSTABLE,
          oO.useRecoilCallback,
          oO.useRecoilTransaction_UNSTABLE,
          oO.useGotoRecoilSnapshot,
          oO.useRecoilSnapshot,
          oO.useRecoilTransactionObserver_UNSTABLE,
          oO.snapshot_UNSTABLE,
          oO.useRetain,
          oO.retentionZone
      },
      10: function(e, t, n) {
          "use strict";
          n.d(t, {
              W: function() {
                  return a
              }
          });
          var r = n(7294);
          let i = []
            , o = (e,t)=>{
              if (null != e && null != t)
                  return i = [...i, [e, t]],
                  ()=>{
                      i = i.filter(e=>e[1] !== t)
                  }
          }
            , a = e=>{
              let {type: t} = e;
              "string" == typeof e && (t = e);
              let n = [];
              "string" == typeof e ? n.push({
                  type: t
              }) : n.push(e),
              i.forEach(([e,r])=>{
                  !("string" == typeof e && e !== t || Array.isArray(e) && !e.includes(t)) && (!(e instanceof RegExp) || e.test(t)) && ("function" != typeof e || e(...n)) && r(...n)
              }
              )
          }
            , s = (e,t,n=[])=>((0,
          r.useEffect)(()=>o(e, t), n),
          a);
          t.Z = s
      }
  }, function(e) {
      var t = function(t) {
          return e(e.s = t)
      };
      e.O(0, [774, 179], function() {
          return t(1118),
          t(880)
      }),
      _N_E = e.O()
  }
  ]);
  