/*! For license information please see main-es2015.2a0030172d40c9b7cb3f.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function (t, e, n) {
      t.exports = n('zUnb');
    },
    '2Yyj': function (t, e, n) {
      var s, i, r;
      !(function (o) {
        if ('object' == typeof t.exports) {
          var a = o(0, e);
          void 0 !== a && (t.exports = a);
        } else
          (i = [n, e]),
            void 0 === (r = 'function' == typeof (s = o) ? s.apply(e, i) : s) ||
              (t.exports = r);
      })(function (t, e) {
        'use strict';
        Object.defineProperty(e, '__esModule', { value: !0 });
        var n = void 0;
        e.default = [
          'es',
          [['a. m.', 'p. m.'], n, n],
          n,
          [
            ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
            ['dom.', 'lun.', 'mar.', 'mi\xe9.', 'jue.', 'vie.', 's\xe1b.'],
            [
              'domingo',
              'lunes',
              'martes',
              'mi\xe9rcoles',
              'jueves',
              'viernes',
              's\xe1bado',
            ],
            ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA'],
          ],
          n,
          [
            ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            [
              'ene.',
              'feb.',
              'mar.',
              'abr.',
              'may.',
              'jun.',
              'jul.',
              'ago.',
              'sept.',
              'oct.',
              'nov.',
              'dic.',
            ],
            [
              'enero',
              'febrero',
              'marzo',
              'abril',
              'mayo',
              'junio',
              'julio',
              'agosto',
              'septiembre',
              'octubre',
              'noviembre',
              'diciembre',
            ],
          ],
          n,
          [['a. C.', 'd. C.'], n, ['antes de Cristo', 'despu\xe9s de Cristo']],
          1,
          [6, 0],
          [
            'd/M/yy',
            'd MMM y',
            "d 'de' MMMM 'de' y",
            "EEEE, d 'de' MMMM 'de' y",
          ],
          ['H:mm', 'H:mm:ss', 'H:mm:ss z', 'H:mm:ss (zzzz)'],
          ['{1} {0}', n, '{1}, {0}', n],
          [
            ',',
            '.',
            ';',
            '%',
            '+',
            '-',
            'E',
            '\xd7',
            '\u2030',
            '\u221e',
            'NaN',
            ':',
          ],
          ['#,##0.###', '#,##0\xa0%', '#,##0.00\xa0\xa4', '#E0'],
          '\u20ac',
          'euro',
          {
            AUD: [n, '$'],
            BRL: [n, 'R$'],
            CNY: [n, '\xa5'],
            EGP: [],
            ESP: ['\u20a7'],
            GBP: [n, '\xa3'],
            HKD: [n, '$'],
            ILS: [n, '\u20aa'],
            INR: [n, '\u20b9'],
            JPY: [n, '\xa5'],
            KRW: [n, '\u20a9'],
            MXN: [n, '$'],
            NZD: [n, '$'],
            RON: [n, 'L'],
            THB: ['\u0e3f'],
            TWD: [n, 'NT$'],
            USD: ['US$', '$'],
            XAF: [],
            XCD: [n, '$'],
            XOF: [],
          },
          function (t) {
            return 1 === t ? 1 : 5;
          },
        ];
      });
    },
    crnd: function (t, e) {
      function n(t) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        });
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (t.exports = n),
        (n.id = 'crnd');
    },
    vzhz: function (t, e) {},
    yLV6: function (t, e, n) {
      var s;
      !(function (i, r, o, a) {
        'use strict';
        var l,
          c = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'],
          h = r.createElement('div'),
          u = Math.round,
          d = Math.abs,
          p = Date.now;
        function f(t, e, n) {
          return setTimeout(w(t, n), e);
        }
        function m(t, e, n) {
          return !!Array.isArray(t) && (g(t, n[e], n), !0);
        }
        function g(t, e, n) {
          var s;
          if (t)
            if (t.forEach) t.forEach(e, n);
            else if (void 0 !== t.length)
              for (s = 0; s < t.length; ) e.call(n, t[s], s, t), s++;
            else for (s in t) t.hasOwnProperty(s) && e.call(n, t[s], s, t);
        }
        function y(t, e, n) {
          var s = 'DEPRECATED METHOD: ' + e + '\n' + n + ' AT \n';
          return function () {
            var e = new Error('get-stack-trace'),
              n =
                e && e.stack
                  ? e.stack
                      .replace(/^[^\(]+?[\n$]/gm, '')
                      .replace(/^\s+at\s+/gm, '')
                      .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
                  : 'Unknown Stack Trace',
              r = i.console && (i.console.warn || i.console.log);
            return r && r.call(i.console, s, n), t.apply(this, arguments);
          };
        }
        l =
          'function' != typeof Object.assign
            ? function (t) {
                if (null == t)
                  throw new TypeError(
                    'Cannot convert undefined or null to object'
                  );
                for (var e = Object(t), n = 1; n < arguments.length; n++) {
                  var s = arguments[n];
                  if (null != s)
                    for (var i in s) s.hasOwnProperty(i) && (e[i] = s[i]);
                }
                return e;
              }
            : Object.assign;
        var _ = y(
            function (t, e, n) {
              for (var s = Object.keys(e), i = 0; i < s.length; )
                (!n || (n && void 0 === t[s[i]])) && (t[s[i]] = e[s[i]]), i++;
              return t;
            },
            'extend',
            'Use `assign`.'
          ),
          v = y(
            function (t, e) {
              return _(t, e, !0);
            },
            'merge',
            'Use `assign`.'
          );
        function b(t, e, n) {
          var s,
            i = e.prototype;
          ((s = t.prototype = Object.create(i)).constructor = t),
            (s._super = i),
            n && l(s, n);
        }
        function w(t, e) {
          return function () {
            return t.apply(e, arguments);
          };
        }
        function S(t, e) {
          return 'function' == typeof t ? t.apply((e && e[0]) || void 0, e) : t;
        }
        function E(t, e) {
          return void 0 === t ? e : t;
        }
        function C(t, e, n) {
          g(D(e), function (e) {
            t.addEventListener(e, n, !1);
          });
        }
        function x(t, e, n) {
          g(D(e), function (e) {
            t.removeEventListener(e, n, !1);
          });
        }
        function T(t, e) {
          for (; t; ) {
            if (t == e) return !0;
            t = t.parentNode;
          }
          return !1;
        }
        function k(t, e) {
          return t.indexOf(e) > -1;
        }
        function D(t) {
          return t.trim().split(/\s+/g);
        }
        function R(t, e, n) {
          if (t.indexOf && !n) return t.indexOf(e);
          for (var s = 0; s < t.length; ) {
            if ((n && t[s][n] == e) || (!n && t[s] === e)) return s;
            s++;
          }
          return -1;
        }
        function A(t) {
          return Array.prototype.slice.call(t, 0);
        }
        function I(t, e, n) {
          for (var s = [], i = [], r = 0; r < t.length; ) {
            var o = e ? t[r][e] : t[r];
            R(i, o) < 0 && s.push(t[r]), (i[r] = o), r++;
          }
          return (
            n &&
              (s = e
                ? s.sort(function (t, n) {
                    return t[e] > n[e];
                  })
                : s.sort()),
            s
          );
        }
        function O(t, e) {
          for (
            var n, s, i = e[0].toUpperCase() + e.slice(1), r = 0;
            r < c.length;

          ) {
            if ((s = (n = c[r]) ? n + i : e) in t) return s;
            r++;
          }
        }
        var P = 1;
        function N(t) {
          var e = t.ownerDocument || t;
          return e.defaultView || e.parentWindow || i;
        }
        var M = 'ontouchstart' in i,
          F = void 0 !== O(i, 'PointerEvent'),
          L =
            M &&
            /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          j = ['x', 'y'],
          V = ['clientX', 'clientY'];
        function H(t, e) {
          var n = this;
          (this.manager = t),
            (this.callback = e),
            (this.element = t.element),
            (this.target = t.options.inputTarget),
            (this.domHandler = function (e) {
              S(t.options.enable, [t]) && n.handler(e);
            }),
            this.init();
        }
        function B(t, e, n) {
          var s = n.pointers.length,
            i = n.changedPointers.length,
            r = 1 & e && s - i == 0,
            o = 12 & e && s - i == 0;
          (n.isFirst = !!r),
            (n.isFinal = !!o),
            r && (t.session = {}),
            (n.eventType = e),
            (function (t, e) {
              var n = t.session,
                s = e.pointers,
                i = s.length;
              n.firstInput || (n.firstInput = U(e)),
                i > 1 && !n.firstMultiple
                  ? (n.firstMultiple = U(e))
                  : 1 === i && (n.firstMultiple = !1);
              var r = n.firstInput,
                o = n.firstMultiple,
                a = o ? o.center : r.center,
                l = (e.center = $(s));
              (e.timeStamp = p()),
                (e.deltaTime = e.timeStamp - r.timeStamp),
                (e.angle = K(a, l)),
                (e.distance = q(a, l)),
                (function (t, e) {
                  var n = e.center,
                    s = t.offsetDelta || {},
                    i = t.prevDelta || {},
                    r = t.prevInput || {};
                  (1 !== e.eventType && 4 !== r.eventType) ||
                    ((i = t.prevDelta = { x: r.deltaX || 0, y: r.deltaY || 0 }),
                    (s = t.offsetDelta = { x: n.x, y: n.y })),
                    (e.deltaX = i.x + (n.x - s.x)),
                    (e.deltaY = i.y + (n.y - s.y));
                })(n, e),
                (e.offsetDirection = W(e.deltaX, e.deltaY));
              var c,
                h,
                u = z(e.deltaTime, e.deltaX, e.deltaY);
              (e.overallVelocityX = u.x),
                (e.overallVelocityY = u.y),
                (e.overallVelocity = d(u.x) > d(u.y) ? u.x : u.y),
                (e.scale = o
                  ? ((c = o.pointers),
                    q((h = s)[0], h[1], V) / q(c[0], c[1], V))
                  : 1),
                (e.rotation = o
                  ? (function (t, e) {
                      return K(e[1], e[0], V) + K(t[1], t[0], V);
                    })(o.pointers, s)
                  : 0),
                (e.maxPointers = n.prevInput
                  ? e.pointers.length > n.prevInput.maxPointers
                    ? e.pointers.length
                    : n.prevInput.maxPointers
                  : e.pointers.length),
                (function (t, e) {
                  var n,
                    s,
                    i,
                    r,
                    o = t.lastInterval || e,
                    a = e.timeStamp - o.timeStamp;
                  if (8 != e.eventType && (a > 25 || void 0 === o.velocity)) {
                    var l = e.deltaX - o.deltaX,
                      c = e.deltaY - o.deltaY,
                      h = z(a, l, c);
                    (s = h.x),
                      (i = h.y),
                      (n = d(h.x) > d(h.y) ? h.x : h.y),
                      (r = W(l, c)),
                      (t.lastInterval = e);
                  } else
                    (n = o.velocity),
                      (s = o.velocityX),
                      (i = o.velocityY),
                      (r = o.direction);
                  (e.velocity = n),
                    (e.velocityX = s),
                    (e.velocityY = i),
                    (e.direction = r);
                })(n, e);
              var f = t.element;
              T(e.srcEvent.target, f) && (f = e.srcEvent.target),
                (e.target = f);
            })(t, n),
            t.emit('hammer.input', n),
            t.recognize(n),
            (t.session.prevInput = n);
        }
        function U(t) {
          for (var e = [], n = 0; n < t.pointers.length; )
            (e[n] = {
              clientX: u(t.pointers[n].clientX),
              clientY: u(t.pointers[n].clientY),
            }),
              n++;
          return {
            timeStamp: p(),
            pointers: e,
            center: $(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY,
          };
        }
        function $(t) {
          var e = t.length;
          if (1 === e) return { x: u(t[0].clientX), y: u(t[0].clientY) };
          for (var n = 0, s = 0, i = 0; i < e; )
            (n += t[i].clientX), (s += t[i].clientY), i++;
          return { x: u(n / e), y: u(s / e) };
        }
        function z(t, e, n) {
          return { x: e / t || 0, y: n / t || 0 };
        }
        function W(t, e) {
          return t === e ? 1 : d(t) >= d(e) ? (t < 0 ? 2 : 4) : e < 0 ? 8 : 16;
        }
        function q(t, e, n) {
          n || (n = j);
          var s = e[n[0]] - t[n[0]],
            i = e[n[1]] - t[n[1]];
          return Math.sqrt(s * s + i * i);
        }
        function K(t, e, n) {
          return (
            n || (n = j),
            (180 * Math.atan2(e[n[1]] - t[n[1]], e[n[0]] - t[n[0]])) / Math.PI
          );
        }
        H.prototype = {
          handler: function () {},
          init: function () {
            this.evEl && C(this.element, this.evEl, this.domHandler),
              this.evTarget && C(this.target, this.evTarget, this.domHandler),
              this.evWin && C(N(this.element), this.evWin, this.domHandler);
          },
          destroy: function () {
            this.evEl && x(this.element, this.evEl, this.domHandler),
              this.evTarget && x(this.target, this.evTarget, this.domHandler),
              this.evWin && x(N(this.element), this.evWin, this.domHandler);
          },
        };
        var Z = { mousedown: 1, mousemove: 2, mouseup: 4 };
        function G() {
          (this.evEl = 'mousedown'),
            (this.evWin = 'mousemove mouseup'),
            (this.pressed = !1),
            H.apply(this, arguments);
        }
        b(G, H, {
          handler: function (t) {
            var e = Z[t.type];
            1 & e && 0 === t.button && (this.pressed = !0),
              2 & e && 1 !== t.which && (e = 4),
              this.pressed &&
                (4 & e && (this.pressed = !1),
                this.callback(this.manager, e, {
                  pointers: [t],
                  changedPointers: [t],
                  pointerType: 'mouse',
                  srcEvent: t,
                }));
          },
        });
        var Q = {
            pointerdown: 1,
            pointermove: 2,
            pointerup: 4,
            pointercancel: 8,
            pointerout: 8,
          },
          Y = { 2: 'touch', 3: 'pen', 4: 'mouse', 5: 'kinect' },
          X = 'pointerdown',
          J = 'pointermove pointerup pointercancel';
        function tt() {
          (this.evEl = X),
            (this.evWin = J),
            H.apply(this, arguments),
            (this.store = this.manager.session.pointerEvents = []);
        }
        i.MSPointerEvent &&
          !i.PointerEvent &&
          ((X = 'MSPointerDown'),
          (J = 'MSPointerMove MSPointerUp MSPointerCancel')),
          b(tt, H, {
            handler: function (t) {
              var e = this.store,
                n = !1,
                s = t.type.toLowerCase().replace('ms', ''),
                i = Q[s],
                r = Y[t.pointerType] || t.pointerType,
                o = 'touch' == r,
                a = R(e, t.pointerId, 'pointerId');
              1 & i && (0 === t.button || o)
                ? a < 0 && (e.push(t), (a = e.length - 1))
                : 12 & i && (n = !0),
                a < 0 ||
                  ((e[a] = t),
                  this.callback(this.manager, i, {
                    pointers: e,
                    changedPointers: [t],
                    pointerType: r,
                    srcEvent: t,
                  }),
                  n && e.splice(a, 1));
            },
          });
        var et = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 };
        function nt() {
          (this.evTarget = 'touchstart'),
            (this.evWin = 'touchstart touchmove touchend touchcancel'),
            (this.started = !1),
            H.apply(this, arguments);
        }
        function st(t, e) {
          var n = A(t.touches),
            s = A(t.changedTouches);
          return 12 & e && (n = I(n.concat(s), 'identifier', !0)), [n, s];
        }
        b(nt, H, {
          handler: function (t) {
            var e = et[t.type];
            if ((1 === e && (this.started = !0), this.started)) {
              var n = st.call(this, t, e);
              12 & e && n[0].length - n[1].length == 0 && (this.started = !1),
                this.callback(this.manager, e, {
                  pointers: n[0],
                  changedPointers: n[1],
                  pointerType: 'touch',
                  srcEvent: t,
                });
            }
          },
        });
        var it = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 };
        function rt() {
          (this.evTarget = 'touchstart touchmove touchend touchcancel'),
            (this.targetIds = {}),
            H.apply(this, arguments);
        }
        function ot(t, e) {
          var n = A(t.touches),
            s = this.targetIds;
          if (3 & e && 1 === n.length) return (s[n[0].identifier] = !0), [n, n];
          var i,
            r,
            o = A(t.changedTouches),
            a = [],
            l = this.target;
          if (
            ((r = n.filter(function (t) {
              return T(t.target, l);
            })),
            1 === e)
          )
            for (i = 0; i < r.length; ) (s[r[i].identifier] = !0), i++;
          for (i = 0; i < o.length; )
            s[o[i].identifier] && a.push(o[i]),
              12 & e && delete s[o[i].identifier],
              i++;
          return a.length ? [I(r.concat(a), 'identifier', !0), a] : void 0;
        }
        function at() {
          H.apply(this, arguments);
          var t = w(this.handler, this);
          (this.touch = new rt(this.manager, t)),
            (this.mouse = new G(this.manager, t)),
            (this.primaryTouch = null),
            (this.lastTouches = []);
        }
        function lt(t, e) {
          1 & t
            ? ((this.primaryTouch = e.changedPointers[0].identifier),
              ct.call(this, e))
            : 12 & t && ct.call(this, e);
        }
        function ct(t) {
          var e = t.changedPointers[0];
          if (e.identifier === this.primaryTouch) {
            var n = { x: e.clientX, y: e.clientY };
            this.lastTouches.push(n);
            var s = this.lastTouches;
            setTimeout(function () {
              var t = s.indexOf(n);
              t > -1 && s.splice(t, 1);
            }, 2500);
          }
        }
        function ht(t) {
          for (
            var e = t.srcEvent.clientX, n = t.srcEvent.clientY, s = 0;
            s < this.lastTouches.length;
            s++
          ) {
            var i = this.lastTouches[s],
              r = Math.abs(e - i.x),
              o = Math.abs(n - i.y);
            if (r <= 25 && o <= 25) return !0;
          }
          return !1;
        }
        b(rt, H, {
          handler: function (t) {
            var e = it[t.type],
              n = ot.call(this, t, e);
            n &&
              this.callback(this.manager, e, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: 'touch',
                srcEvent: t,
              });
          },
        }),
          b(at, H, {
            handler: function (t, e, n) {
              var s = 'mouse' == n.pointerType;
              if (
                !(
                  s &&
                  n.sourceCapabilities &&
                  n.sourceCapabilities.firesTouchEvents
                )
              ) {
                if ('touch' == n.pointerType) lt.call(this, e, n);
                else if (s && ht.call(this, n)) return;
                this.callback(t, e, n);
              }
            },
            destroy: function () {
              this.touch.destroy(), this.mouse.destroy();
            },
          });
        var ut = O(h.style, 'touchAction'),
          dt = void 0 !== ut,
          pt = (function () {
            if (!dt) return !1;
            var t = {},
              e = i.CSS && i.CSS.supports;
            return (
              [
                'auto',
                'manipulation',
                'pan-y',
                'pan-x',
                'pan-x pan-y',
                'none',
              ].forEach(function (n) {
                t[n] = !e || i.CSS.supports('touch-action', n);
              }),
              t
            );
          })();
        function ft(t, e) {
          (this.manager = t), this.set(e);
        }
        function mt(t) {
          (this.options = l({}, this.defaults, t || {})),
            (this.id = P++),
            (this.manager = null),
            (this.options.enable = E(this.options.enable, !0)),
            (this.state = 1),
            (this.simultaneous = {}),
            (this.requireFail = []);
        }
        function gt(t) {
          return 16 & t
            ? 'cancel'
            : 8 & t
            ? 'end'
            : 4 & t
            ? 'move'
            : 2 & t
            ? 'start'
            : '';
        }
        function yt(t) {
          return 16 == t
            ? 'down'
            : 8 == t
            ? 'up'
            : 2 == t
            ? 'left'
            : 4 == t
            ? 'right'
            : '';
        }
        function _t(t, e) {
          var n = e.manager;
          return n ? n.get(t) : t;
        }
        function vt() {
          mt.apply(this, arguments);
        }
        function bt() {
          vt.apply(this, arguments), (this.pX = null), (this.pY = null);
        }
        function wt() {
          vt.apply(this, arguments);
        }
        function St() {
          mt.apply(this, arguments), (this._timer = null), (this._input = null);
        }
        function Et() {
          vt.apply(this, arguments);
        }
        function Ct() {
          vt.apply(this, arguments);
        }
        function xt() {
          mt.apply(this, arguments),
            (this.pTime = !1),
            (this.pCenter = !1),
            (this._timer = null),
            (this._input = null),
            (this.count = 0);
        }
        function Tt(t, e) {
          return (
            ((e = e || {}).recognizers = E(e.recognizers, Tt.defaults.preset)),
            new kt(t, e)
          );
        }
        function kt(t, e) {
          var n;
          (this.options = l({}, Tt.defaults, e || {})),
            (this.options.inputTarget = this.options.inputTarget || t),
            (this.handlers = {}),
            (this.session = {}),
            (this.recognizers = []),
            (this.oldCssProps = {}),
            (this.element = t),
            (this.input = new ((n = this).options.inputClass ||
              (F ? tt : L ? rt : M ? at : G))(n, B)),
            (this.touchAction = new ft(this, this.options.touchAction)),
            Dt(this, !0),
            g(
              this.options.recognizers,
              function (t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
              },
              this
            );
        }
        function Dt(t, e) {
          var n,
            s = t.element;
          s.style &&
            (g(t.options.cssProps, function (i, r) {
              (n = O(s.style, r)),
                e
                  ? ((t.oldCssProps[n] = s.style[n]), (s.style[n] = i))
                  : (s.style[n] = t.oldCssProps[n] || '');
            }),
            e || (t.oldCssProps = {}));
        }
        (ft.prototype = {
          set: function (t) {
            'compute' == t && (t = this.compute()),
              dt &&
                this.manager.element.style &&
                pt[t] &&
                (this.manager.element.style[ut] = t),
              (this.actions = t.toLowerCase().trim());
          },
          update: function () {
            this.set(this.manager.options.touchAction);
          },
          compute: function () {
            var t = [];
            return (
              g(this.manager.recognizers, function (e) {
                S(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
              }),
              (function (t) {
                if (k(t, 'none')) return 'none';
                var e = k(t, 'pan-x'),
                  n = k(t, 'pan-y');
                return e && n
                  ? 'none'
                  : e || n
                  ? e
                    ? 'pan-x'
                    : 'pan-y'
                  : k(t, 'manipulation')
                  ? 'manipulation'
                  : 'auto';
              })(t.join(' '))
            );
          },
          preventDefaults: function (t) {
            var e = t.srcEvent,
              n = t.offsetDirection;
            if (this.manager.session.prevented) e.preventDefault();
            else {
              var s = this.actions,
                i = k(s, 'none') && !pt.none,
                r = k(s, 'pan-y') && !pt['pan-y'],
                o = k(s, 'pan-x') && !pt['pan-x'];
              if (
                i &&
                1 === t.pointers.length &&
                t.distance < 2 &&
                t.deltaTime < 250
              )
                return;
              if (!o || !r)
                return i || (r && 6 & n) || (o && 24 & n)
                  ? this.preventSrc(e)
                  : void 0;
            }
          },
          preventSrc: function (t) {
            (this.manager.session.prevented = !0), t.preventDefault();
          },
        }),
          (mt.prototype = {
            defaults: {},
            set: function (t) {
              return (
                l(this.options, t),
                this.manager && this.manager.touchAction.update(),
                this
              );
            },
            recognizeWith: function (t) {
              if (m(t, 'recognizeWith', this)) return this;
              var e = this.simultaneous;
              return (
                e[(t = _t(t, this)).id] ||
                  ((e[t.id] = t), t.recognizeWith(this)),
                this
              );
            },
            dropRecognizeWith: function (t) {
              return (
                m(t, 'dropRecognizeWith', this) ||
                  ((t = _t(t, this)), delete this.simultaneous[t.id]),
                this
              );
            },
            requireFailure: function (t) {
              if (m(t, 'requireFailure', this)) return this;
              var e = this.requireFail;
              return (
                -1 === R(e, (t = _t(t, this))) &&
                  (e.push(t), t.requireFailure(this)),
                this
              );
            },
            dropRequireFailure: function (t) {
              if (m(t, 'dropRequireFailure', this)) return this;
              t = _t(t, this);
              var e = R(this.requireFail, t);
              return e > -1 && this.requireFail.splice(e, 1), this;
            },
            hasRequireFailures: function () {
              return this.requireFail.length > 0;
            },
            canRecognizeWith: function (t) {
              return !!this.simultaneous[t.id];
            },
            emit: function (t) {
              var e = this,
                n = this.state;
              function s(n) {
                e.manager.emit(n, t);
              }
              n < 8 && s(e.options.event + gt(n)),
                s(e.options.event),
                t.additionalEvent && s(t.additionalEvent),
                n >= 8 && s(e.options.event + gt(n));
            },
            tryEmit: function (t) {
              if (this.canEmit()) return this.emit(t);
              this.state = 32;
            },
            canEmit: function () {
              for (var t = 0; t < this.requireFail.length; ) {
                if (!(33 & this.requireFail[t].state)) return !1;
                t++;
              }
              return !0;
            },
            recognize: function (t) {
              var e = l({}, t);
              if (!S(this.options.enable, [this, e]))
                return this.reset(), void (this.state = 32);
              56 & this.state && (this.state = 1),
                (this.state = this.process(e)),
                30 & this.state && this.tryEmit(e);
            },
            process: function (t) {},
            getTouchAction: function () {},
            reset: function () {},
          }),
          b(vt, mt, {
            defaults: { pointers: 1 },
            attrTest: function (t) {
              var e = this.options.pointers;
              return 0 === e || t.pointers.length === e;
            },
            process: function (t) {
              var e = this.state,
                n = t.eventType,
                s = 6 & e,
                i = this.attrTest(t);
              return s && (8 & n || !i)
                ? 16 | e
                : s || i
                ? 4 & n
                  ? 8 | e
                  : 2 & e
                  ? 4 | e
                  : 2
                : 32;
            },
          }),
          b(bt, vt, {
            defaults: {
              event: 'pan',
              threshold: 10,
              pointers: 1,
              direction: 30,
            },
            getTouchAction: function () {
              var t = this.options.direction,
                e = [];
              return 6 & t && e.push('pan-y'), 24 & t && e.push('pan-x'), e;
            },
            directionTest: function (t) {
              var e = this.options,
                n = !0,
                s = t.distance,
                i = t.direction,
                r = t.deltaX,
                o = t.deltaY;
              return (
                i & e.direction ||
                  (6 & e.direction
                    ? ((i = 0 === r ? 1 : r < 0 ? 2 : 4),
                      (n = r != this.pX),
                      (s = Math.abs(t.deltaX)))
                    : ((i = 0 === o ? 1 : o < 0 ? 8 : 16),
                      (n = o != this.pY),
                      (s = Math.abs(t.deltaY)))),
                (t.direction = i),
                n && s > e.threshold && i & e.direction
              );
            },
            attrTest: function (t) {
              return (
                vt.prototype.attrTest.call(this, t) &&
                (2 & this.state || (!(2 & this.state) && this.directionTest(t)))
              );
            },
            emit: function (t) {
              (this.pX = t.deltaX), (this.pY = t.deltaY);
              var e = yt(t.direction);
              e && (t.additionalEvent = this.options.event + e),
                this._super.emit.call(this, t);
            },
          }),
          b(wt, vt, {
            defaults: { event: 'pinch', threshold: 0, pointers: 2 },
            getTouchAction: function () {
              return ['none'];
            },
            attrTest: function (t) {
              return (
                this._super.attrTest.call(this, t) &&
                (Math.abs(t.scale - 1) > this.options.threshold ||
                  2 & this.state)
              );
            },
            emit: function (t) {
              1 !== t.scale &&
                (t.additionalEvent =
                  this.options.event + (t.scale < 1 ? 'in' : 'out')),
                this._super.emit.call(this, t);
            },
          }),
          b(St, mt, {
            defaults: { event: 'press', pointers: 1, time: 251, threshold: 9 },
            getTouchAction: function () {
              return ['auto'];
            },
            process: function (t) {
              var e = this.options,
                n = t.pointers.length === e.pointers,
                s = t.distance < e.threshold,
                i = t.deltaTime > e.time;
              if (((this._input = t), !s || !n || (12 & t.eventType && !i)))
                this.reset();
              else if (1 & t.eventType)
                this.reset(),
                  (this._timer = f(
                    function () {
                      (this.state = 8), this.tryEmit();
                    },
                    e.time,
                    this
                  ));
              else if (4 & t.eventType) return 8;
              return 32;
            },
            reset: function () {
              clearTimeout(this._timer);
            },
            emit: function (t) {
              8 === this.state &&
                (t && 4 & t.eventType
                  ? this.manager.emit(this.options.event + 'up', t)
                  : ((this._input.timeStamp = p()),
                    this.manager.emit(this.options.event, this._input)));
            },
          }),
          b(Et, vt, {
            defaults: { event: 'rotate', threshold: 0, pointers: 2 },
            getTouchAction: function () {
              return ['none'];
            },
            attrTest: function (t) {
              return (
                this._super.attrTest.call(this, t) &&
                (Math.abs(t.rotation) > this.options.threshold ||
                  2 & this.state)
              );
            },
          }),
          b(Ct, vt, {
            defaults: {
              event: 'swipe',
              threshold: 10,
              velocity: 0.3,
              direction: 30,
              pointers: 1,
            },
            getTouchAction: function () {
              return bt.prototype.getTouchAction.call(this);
            },
            attrTest: function (t) {
              var e,
                n = this.options.direction;
              return (
                30 & n
                  ? (e = t.overallVelocity)
                  : 6 & n
                  ? (e = t.overallVelocityX)
                  : 24 & n && (e = t.overallVelocityY),
                this._super.attrTest.call(this, t) &&
                  n & t.offsetDirection &&
                  t.distance > this.options.threshold &&
                  t.maxPointers == this.options.pointers &&
                  d(e) > this.options.velocity &&
                  4 & t.eventType
              );
            },
            emit: function (t) {
              var e = yt(t.offsetDirection);
              e && this.manager.emit(this.options.event + e, t),
                this.manager.emit(this.options.event, t);
            },
          }),
          b(xt, mt, {
            defaults: {
              event: 'tap',
              pointers: 1,
              taps: 1,
              interval: 300,
              time: 250,
              threshold: 9,
              posThreshold: 10,
            },
            getTouchAction: function () {
              return ['manipulation'];
            },
            process: function (t) {
              var e = this.options,
                n = t.pointers.length === e.pointers,
                s = t.distance < e.threshold,
                i = t.deltaTime < e.time;
              if ((this.reset(), 1 & t.eventType && 0 === this.count))
                return this.failTimeout();
              if (s && i && n) {
                if (4 != t.eventType) return this.failTimeout();
                var r = !this.pTime || t.timeStamp - this.pTime < e.interval,
                  o =
                    !this.pCenter || q(this.pCenter, t.center) < e.posThreshold;
                if (
                  ((this.pTime = t.timeStamp),
                  (this.pCenter = t.center),
                  o && r ? (this.count += 1) : (this.count = 1),
                  (this._input = t),
                  0 == this.count % e.taps)
                )
                  return this.hasRequireFailures()
                    ? ((this._timer = f(
                        function () {
                          (this.state = 8), this.tryEmit();
                        },
                        e.interval,
                        this
                      )),
                      2)
                    : 8;
              }
              return 32;
            },
            failTimeout: function () {
              return (
                (this._timer = f(
                  function () {
                    this.state = 32;
                  },
                  this.options.interval,
                  this
                )),
                32
              );
            },
            reset: function () {
              clearTimeout(this._timer);
            },
            emit: function () {
              8 == this.state &&
                ((this._input.tapCount = this.count),
                this.manager.emit(this.options.event, this._input));
            },
          }),
          (Tt.VERSION = '2.0.7'),
          (Tt.defaults = {
            domEvents: !1,
            touchAction: 'compute',
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
              [Et, { enable: !1 }],
              [wt, { enable: !1 }, ['rotate']],
              [Ct, { direction: 6 }],
              [bt, { direction: 6 }, ['swipe']],
              [xt],
              [xt, { event: 'doubletap', taps: 2 }, ['tap']],
              [St],
            ],
            cssProps: {
              userSelect: 'none',
              touchSelect: 'none',
              touchCallout: 'none',
              contentZooming: 'none',
              userDrag: 'none',
              tapHighlightColor: 'rgba(0,0,0,0)',
            },
          }),
          (kt.prototype = {
            set: function (t) {
              return (
                l(this.options, t),
                t.touchAction && this.touchAction.update(),
                t.inputTarget &&
                  (this.input.destroy(),
                  (this.input.target = t.inputTarget),
                  this.input.init()),
                this
              );
            },
            stop: function (t) {
              this.session.stopped = t ? 2 : 1;
            },
            recognize: function (t) {
              var e = this.session;
              if (!e.stopped) {
                var n;
                this.touchAction.preventDefaults(t);
                var s = this.recognizers,
                  i = e.curRecognizer;
                (!i || (i && 8 & i.state)) && (i = e.curRecognizer = null);
                for (var r = 0; r < s.length; )
                  (n = s[r]),
                    2 === e.stopped || (i && n != i && !n.canRecognizeWith(i))
                      ? n.reset()
                      : n.recognize(t),
                    !i && 14 & n.state && (i = e.curRecognizer = n),
                    r++;
              }
            },
            get: function (t) {
              if (t instanceof mt) return t;
              for (var e = this.recognizers, n = 0; n < e.length; n++)
                if (e[n].options.event == t) return e[n];
              return null;
            },
            add: function (t) {
              if (m(t, 'add', this)) return this;
              var e = this.get(t.options.event);
              return (
                e && this.remove(e),
                this.recognizers.push(t),
                (t.manager = this),
                this.touchAction.update(),
                t
              );
            },
            remove: function (t) {
              if (m(t, 'remove', this)) return this;
              if ((t = this.get(t))) {
                var e = this.recognizers,
                  n = R(e, t);
                -1 !== n && (e.splice(n, 1), this.touchAction.update());
              }
              return this;
            },
            on: function (t, e) {
              if (void 0 !== t && void 0 !== e) {
                var n = this.handlers;
                return (
                  g(D(t), function (t) {
                    (n[t] = n[t] || []), n[t].push(e);
                  }),
                  this
                );
              }
            },
            off: function (t, e) {
              if (void 0 !== t) {
                var n = this.handlers;
                return (
                  g(D(t), function (t) {
                    e ? n[t] && n[t].splice(R(n[t], e), 1) : delete n[t];
                  }),
                  this
                );
              }
            },
            emit: function (t, e) {
              this.options.domEvents &&
                (function (t, e) {
                  var n = r.createEvent('Event');
                  n.initEvent(t, !0, !0),
                    (n.gesture = e),
                    e.target.dispatchEvent(n);
                })(t, e);
              var n = this.handlers[t] && this.handlers[t].slice();
              if (n && n.length) {
                (e.type = t),
                  (e.preventDefault = function () {
                    e.srcEvent.preventDefault();
                  });
                for (var s = 0; s < n.length; ) n[s](e), s++;
              }
            },
            destroy: function () {
              this.element && Dt(this, !1),
                (this.handlers = {}),
                (this.session = {}),
                this.input.destroy(),
                (this.element = null);
            },
          }),
          l(Tt, {
            INPUT_START: 1,
            INPUT_MOVE: 2,
            INPUT_END: 4,
            INPUT_CANCEL: 8,
            STATE_POSSIBLE: 1,
            STATE_BEGAN: 2,
            STATE_CHANGED: 4,
            STATE_ENDED: 8,
            STATE_RECOGNIZED: 8,
            STATE_CANCELLED: 16,
            STATE_FAILED: 32,
            DIRECTION_NONE: 1,
            DIRECTION_LEFT: 2,
            DIRECTION_RIGHT: 4,
            DIRECTION_UP: 8,
            DIRECTION_DOWN: 16,
            DIRECTION_HORIZONTAL: 6,
            DIRECTION_VERTICAL: 24,
            DIRECTION_ALL: 30,
            Manager: kt,
            Input: H,
            TouchAction: ft,
            TouchInput: rt,
            MouseInput: G,
            PointerEventInput: tt,
            TouchMouseInput: at,
            SingleTouchInput: nt,
            Recognizer: mt,
            AttrRecognizer: vt,
            Tap: xt,
            Pan: bt,
            Swipe: Ct,
            Pinch: wt,
            Rotate: Et,
            Press: St,
            on: C,
            off: x,
            each: g,
            merge: v,
            extend: _,
            assign: l,
            inherit: b,
            bindFn: w,
            prefixed: O,
          }),
          ((void 0 !== i
            ? i
            : 'undefined' != typeof self
            ? self
            : {}
          ).Hammer = Tt),
          void 0 ===
            (s = function () {
              return Tt;
            }.call(e, n, e, t)) || (t.exports = s);
      })(window, document);
    },
    zUnb: function (t, e, n) {
      'use strict';
      function s(t) {
        return 'function' == typeof t;
      }
      n.r(e), n('yLV6');
      let i = !1;
      const r = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(t) {
          if (t) {
            const t = new Error();
            console.warn(
              'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' +
                t.stack
            );
          } else
            i &&
              console.log(
                'RxJS: Back to a better error behavior. Thank you. <3'
              );
          i = t;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return i;
        },
      };
      function o(t) {
        setTimeout(() => {
          throw t;
        }, 0);
      }
      const a = {
          closed: !0,
          next(t) {},
          error(t) {
            if (r.useDeprecatedSynchronousErrorHandling) throw t;
            o(t);
          },
          complete() {},
        },
        l = (() =>
          Array.isArray || ((t) => t && 'number' == typeof t.length))();
      function c(t) {
        return null !== t && 'object' == typeof t;
      }
      const h = (() => {
        function t(t) {
          return (
            Error.call(this),
            (this.message = t
              ? `${t.length} errors occurred during unsubscription:\n${t
                  .map((t, e) => `${e + 1}) ${t.toString()}`)
                  .join('\n  ')}`
              : ''),
            (this.name = 'UnsubscriptionError'),
            (this.errors = t),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      let u = (() => {
        class t {
          constructor(t) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t));
          }
          unsubscribe() {
            let e;
            if (this.closed) return;
            let {
              _parentOrParents: n,
              _ctorUnsubscribe: i,
              _unsubscribe: r,
              _subscriptions: o,
            } = this;
            if (
              ((this.closed = !0),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              n instanceof t)
            )
              n.remove(this);
            else if (null !== n)
              for (let t = 0; t < n.length; ++t) n[t].remove(this);
            if (s(r)) {
              i && (this._unsubscribe = void 0);
              try {
                r.call(this);
              } catch (a) {
                e = a instanceof h ? d(a.errors) : [a];
              }
            }
            if (l(o)) {
              let t = -1,
                n = o.length;
              for (; ++t < n; ) {
                const n = o[t];
                if (c(n))
                  try {
                    n.unsubscribe();
                  } catch (a) {
                    (e = e || []),
                      a instanceof h ? (e = e.concat(d(a.errors))) : e.push(a);
                  }
              }
            }
            if (e) throw new h(e);
          }
          add(e) {
            let n = e;
            if (!e) return t.EMPTY;
            switch (typeof e) {
              case 'function':
                n = new t(e);
              case 'object':
                if (
                  n === this ||
                  n.closed ||
                  'function' != typeof n.unsubscribe
                )
                  return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof t)) {
                  const e = n;
                  (n = new t()), (n._subscriptions = [e]);
                }
                break;
              default:
                throw new Error(
                  'unrecognized teardown ' + e + ' added to Subscription.'
                );
            }
            let { _parentOrParents: s } = n;
            if (null === s) n._parentOrParents = this;
            else if (s instanceof t) {
              if (s === this) return n;
              n._parentOrParents = [s, this];
            } else {
              if (-1 !== s.indexOf(this)) return n;
              s.push(this);
            }
            const i = this._subscriptions;
            return null === i ? (this._subscriptions = [n]) : i.push(n), n;
          }
          remove(t) {
            const e = this._subscriptions;
            if (e) {
              const n = e.indexOf(t);
              -1 !== n && e.splice(n, 1);
            }
          }
        }
        return (
          (t.EMPTY = (function (t) {
            return (t.closed = !0), t;
          })(new t())),
          t
        );
      })();
      function d(t) {
        return t.reduce((t, e) => t.concat(e instanceof h ? e.errors : e), []);
      }
      const p = (() =>
        'function' == typeof Symbol
          ? Symbol('rxSubscriber')
          : '@@rxSubscriber_' + Math.random())();
      class f extends u {
        constructor(t, e, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = a;
              break;
            case 1:
              if (!t) {
                this.destination = a;
                break;
              }
              if ('object' == typeof t) {
                t instanceof f
                  ? ((this.syncErrorThrowable = t.syncErrorThrowable),
                    (this.destination = t),
                    t.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new m(this, t)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new m(this, t, e, n));
          }
        }
        [p]() {
          return this;
        }
        static create(t, e, n) {
          const s = new f(t, e, n);
          return (s.syncErrorThrowable = !1), s;
        }
        next(t) {
          this.isStopped || this._next(t);
        }
        error(t) {
          this.isStopped || ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(t) {
          this.destination.next(t);
        }
        _error(t) {
          this.destination.error(t), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: t } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = t),
            this
          );
        }
      }
      class m extends f {
        constructor(t, e, n, i) {
          let r;
          super(), (this._parentSubscriber = t);
          let o = this;
          s(e)
            ? (r = e)
            : e &&
              ((r = e.next),
              (n = e.error),
              (i = e.complete),
              e !== a &&
                ((o = Object.create(e)),
                s(o.unsubscribe) && this.add(o.unsubscribe.bind(o)),
                (o.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = o),
            (this._next = r),
            (this._error = n),
            (this._complete = i);
        }
        next(t) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: e } = this;
            r.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
              ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, t);
          }
        }
        error(t) {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this,
              { useDeprecatedSynchronousErrorHandling: n } = r;
            if (this._error)
              n && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
            else if (e.syncErrorThrowable)
              n ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : o(t),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw t;
              o(t);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this;
            if (this._complete) {
              const e = () => this._complete.call(this._context);
              r.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, e), this.unsubscribe())
                : (this.__tryOrUnsub(e), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(t, e) {
          try {
            t.call(this._context, e);
          } catch (n) {
            if ((this.unsubscribe(), r.useDeprecatedSynchronousErrorHandling))
              throw n;
            o(n);
          }
        }
        __tryOrSetError(t, e, n) {
          if (!r.useDeprecatedSynchronousErrorHandling)
            throw new Error('bad call');
          try {
            e.call(this._context, n);
          } catch (s) {
            return r.useDeprecatedSynchronousErrorHandling
              ? ((t.syncErrorValue = s), (t.syncErrorThrown = !0), !0)
              : (o(s), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: t } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            t.unsubscribe();
        }
      }
      const g = (() =>
        ('function' == typeof Symbol && Symbol.observable) || '@@observable')();
      function y(t) {
        return t;
      }
      function _(...t) {
        return v(t);
      }
      function v(t) {
        return 0 === t.length
          ? y
          : 1 === t.length
          ? t[0]
          : function (e) {
              return t.reduce((t, e) => e(t), e);
            };
      }
      let b = (() => {
        class t {
          constructor(t) {
            (this._isScalar = !1), t && (this._subscribe = t);
          }
          lift(e) {
            const n = new t();
            return (n.source = this), (n.operator = e), n;
          }
          subscribe(t, e, n) {
            const { operator: s } = this,
              i = (function (t, e, n) {
                if (t) {
                  if (t instanceof f) return t;
                  if (t[p]) return t[p]();
                }
                return t || e || n ? new f(t, e, n) : new f(a);
              })(t, e, n);
            if (
              (i.add(
                s
                  ? s.call(i, this.source)
                  : this.source ||
                    (r.useDeprecatedSynchronousErrorHandling &&
                      !i.syncErrorThrowable)
                  ? this._subscribe(i)
                  : this._trySubscribe(i)
              ),
              r.useDeprecatedSynchronousErrorHandling &&
                i.syncErrorThrowable &&
                ((i.syncErrorThrowable = !1), i.syncErrorThrown))
            )
              throw i.syncErrorValue;
            return i;
          }
          _trySubscribe(t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              r.useDeprecatedSynchronousErrorHandling &&
                ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                (function (t) {
                  for (; t; ) {
                    const { closed: e, destination: n, isStopped: s } = t;
                    if (e || s) return !1;
                    t = n && n instanceof f ? n : null;
                  }
                  return !0;
                })(t)
                  ? t.error(e)
                  : console.warn(e);
            }
          }
          forEach(t, e) {
            return new (e = w(e))((e, n) => {
              let s;
              s = this.subscribe(
                (e) => {
                  try {
                    t(e);
                  } catch (i) {
                    n(i), s && s.unsubscribe();
                  }
                },
                n,
                e
              );
            });
          }
          _subscribe(t) {
            const { source: e } = this;
            return e && e.subscribe(t);
          }
          [g]() {
            return this;
          }
          pipe(...t) {
            return 0 === t.length ? this : v(t)(this);
          }
          toPromise(t) {
            return new (t = w(t))((t, e) => {
              let n;
              this.subscribe(
                (t) => (n = t),
                (t) => e(t),
                () => t(n)
              );
            });
          }
        }
        return (t.create = (e) => new t(e)), t;
      })();
      function w(t) {
        if ((t || (t = r.Promise || Promise), !t))
          throw new Error('no Promise impl found');
        return t;
      }
      const S = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = 'object unsubscribed'),
            (this.name = 'ObjectUnsubscribedError'),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      class E extends u {
        constructor(t, e) {
          super(),
            (this.subject = t),
            (this.subscriber = e),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const t = this.subject,
            e = t.observers;
          if (
            ((this.subject = null),
            !e || 0 === e.length || t.isStopped || t.closed)
          )
            return;
          const n = e.indexOf(this.subscriber);
          -1 !== n && e.splice(n, 1);
        }
      }
      class C extends f {
        constructor(t) {
          super(t), (this.destination = t);
        }
      }
      let x = (() => {
        class t extends b {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [p]() {
            return new C(this);
          }
          lift(t) {
            const e = new T(this, this);
            return (e.operator = t), e;
          }
          next(t) {
            if (this.closed) throw new S();
            if (!this.isStopped) {
              const { observers: e } = this,
                n = e.length,
                s = e.slice();
              for (let i = 0; i < n; i++) s[i].next(t);
            }
          }
          error(t) {
            if (this.closed) throw new S();
            (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
            const { observers: e } = this,
              n = e.length,
              s = e.slice();
            for (let i = 0; i < n; i++) s[i].error(t);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new S();
            this.isStopped = !0;
            const { observers: t } = this,
              e = t.length,
              n = t.slice();
            for (let s = 0; s < e; s++) n[s].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(t) {
            if (this.closed) throw new S();
            return super._trySubscribe(t);
          }
          _subscribe(t) {
            if (this.closed) throw new S();
            return this.hasError
              ? (t.error(this.thrownError), u.EMPTY)
              : this.isStopped
              ? (t.complete(), u.EMPTY)
              : (this.observers.push(t), new E(this, t));
          }
          asObservable() {
            const t = new b();
            return (t.source = this), t;
          }
        }
        return (t.create = (t, e) => new T(t, e)), t;
      })();
      class T extends x {
        constructor(t, e) {
          super(), (this.destination = t), (this.source = e);
        }
        next(t) {
          const { destination: e } = this;
          e && e.next && e.next(t);
        }
        error(t) {
          const { destination: e } = this;
          e && e.error && this.destination.error(t);
        }
        complete() {
          const { destination: t } = this;
          t && t.complete && this.destination.complete();
        }
        _subscribe(t) {
          const { source: e } = this;
          return e ? this.source.subscribe(t) : u.EMPTY;
        }
      }
      function k(t) {
        return t && 'function' == typeof t.schedule;
      }
      function D(t, e) {
        return function (n) {
          if ('function' != typeof t)
            throw new TypeError(
              'argument is not a function. Are you looking for `mapTo()`?'
            );
          return n.lift(new R(t, e));
        };
      }
      class R {
        constructor(t, e) {
          (this.project = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new A(t, this.project, this.thisArg));
        }
      }
      class A extends f {
        constructor(t, e, n) {
          super(t),
            (this.project = e),
            (this.count = 0),
            (this.thisArg = n || this);
        }
        _next(t) {
          let e;
          try {
            e = this.project.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      const I = (t) => (e) => {
        for (let n = 0, s = t.length; n < s && !e.closed; n++) e.next(t[n]);
        e.complete();
      };
      function O() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      }
      const P = O(),
        N = (t) => t && 'number' == typeof t.length && 'function' != typeof t;
      function M(t) {
        return (
          !!t && 'function' != typeof t.subscribe && 'function' == typeof t.then
        );
      }
      const F = (t) => {
        if (t && 'function' == typeof t[g])
          return (
            (s = t),
            (t) => {
              const e = s[g]();
              if ('function' != typeof e.subscribe)
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable'
                );
              return e.subscribe(t);
            }
          );
        if (N(t)) return I(t);
        if (M(t))
          return (
            (n = t),
            (t) => (
              n
                .then(
                  (e) => {
                    t.closed || (t.next(e), t.complete());
                  },
                  (e) => t.error(e)
                )
                .then(null, o),
              t
            )
          );
        if (t && 'function' == typeof t[P])
          return (
            (e = t),
            (t) => {
              const n = e[P]();
              for (;;) {
                let e;
                try {
                  e = n.next();
                } catch (s) {
                  return t.error(s), t;
                }
                if (e.done) {
                  t.complete();
                  break;
                }
                if ((t.next(e.value), t.closed)) break;
              }
              return (
                'function' == typeof n.return &&
                  t.add(() => {
                    n.return && n.return();
                  }),
                t
              );
            }
          );
        {
          const e = c(t) ? 'an invalid object' : `'${t}'`;
          throw new TypeError(
            `You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`
          );
        }
        var e, n, s;
      };
      function L(t, e) {
        return new b((n) => {
          const s = new u();
          let i = 0;
          return (
            s.add(
              e.schedule(function () {
                i !== t.length
                  ? (n.next(t[i++]), n.closed || s.add(this.schedule()))
                  : n.complete();
              })
            ),
            s
          );
        });
      }
      function j(t, e) {
        return e
          ? (function (t, e) {
              if (null != t) {
                if (
                  (function (t) {
                    return t && 'function' == typeof t[g];
                  })(t)
                )
                  return (function (t, e) {
                    return new b((n) => {
                      const s = new u();
                      return (
                        s.add(
                          e.schedule(() => {
                            const i = t[g]();
                            s.add(
                              i.subscribe({
                                next(t) {
                                  s.add(e.schedule(() => n.next(t)));
                                },
                                error(t) {
                                  s.add(e.schedule(() => n.error(t)));
                                },
                                complete() {
                                  s.add(e.schedule(() => n.complete()));
                                },
                              })
                            );
                          })
                        ),
                        s
                      );
                    });
                  })(t, e);
                if (M(t))
                  return (function (t, e) {
                    return new b((n) => {
                      const s = new u();
                      return (
                        s.add(
                          e.schedule(() =>
                            t.then(
                              (t) => {
                                s.add(
                                  e.schedule(() => {
                                    n.next(t),
                                      s.add(e.schedule(() => n.complete()));
                                  })
                                );
                              },
                              (t) => {
                                s.add(e.schedule(() => n.error(t)));
                              }
                            )
                          )
                        ),
                        s
                      );
                    });
                  })(t, e);
                if (N(t)) return L(t, e);
                if (
                  (function (t) {
                    return t && 'function' == typeof t[P];
                  })(t) ||
                  'string' == typeof t
                )
                  return (function (t, e) {
                    if (!t) throw new Error('Iterable cannot be null');
                    return new b((n) => {
                      const s = new u();
                      let i;
                      return (
                        s.add(() => {
                          i && 'function' == typeof i.return && i.return();
                        }),
                        s.add(
                          e.schedule(() => {
                            (i = t[P]()),
                              s.add(
                                e.schedule(function () {
                                  if (n.closed) return;
                                  let t, e;
                                  try {
                                    const n = i.next();
                                    (t = n.value), (e = n.done);
                                  } catch (s) {
                                    return void n.error(s);
                                  }
                                  e
                                    ? n.complete()
                                    : (n.next(t), this.schedule());
                                })
                              );
                          })
                        ),
                        s
                      );
                    });
                  })(t, e);
              }
              throw new TypeError(
                ((null !== t && typeof t) || t) + ' is not observable'
              );
            })(t, e)
          : t instanceof b
          ? t
          : new b(F(t));
      }
      class V extends f {
        constructor(t) {
          super(), (this.parent = t);
        }
        _next(t) {
          this.parent.notifyNext(t);
        }
        _error(t) {
          this.parent.notifyError(t), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(), this.unsubscribe();
        }
      }
      class H extends f {
        notifyNext(t) {
          this.destination.next(t);
        }
        notifyError(t) {
          this.destination.error(t);
        }
        notifyComplete() {
          this.destination.complete();
        }
      }
      function B(t, e) {
        if (!e.closed) return t instanceof b ? t.subscribe(e) : F(t)(e);
      }
      function U(t, e, n = Number.POSITIVE_INFINITY) {
        return 'function' == typeof e
          ? (s) =>
              s.pipe(
                U((n, s) => j(t(n, s)).pipe(D((t, i) => e(n, t, s, i))), n)
              )
          : ('number' == typeof e && (n = e), (e) => e.lift(new $(t, n)));
      }
      class $ {
        constructor(t, e = Number.POSITIVE_INFINITY) {
          (this.project = t), (this.concurrent = e);
        }
        call(t, e) {
          return e.subscribe(new z(t, this.project, this.concurrent));
        }
      }
      class z extends H {
        constructor(t, e, n = Number.POSITIVE_INFINITY) {
          super(t),
            (this.project = e),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(t) {
          this.active < this.concurrent
            ? this._tryNext(t)
            : this.buffer.push(t);
        }
        _tryNext(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (s) {
            return void this.destination.error(s);
          }
          this.active++, this._innerSub(e);
        }
        _innerSub(t) {
          const e = new V(this),
            n = this.destination;
          n.add(e);
          const s = B(t, e);
          s !== e && n.add(s);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(t) {
          this.destination.next(t);
        }
        notifyComplete() {
          const t = this.buffer;
          this.active--,
            t.length > 0
              ? this._next(t.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
      function W(t = Number.POSITIVE_INFINITY) {
        return U(y, t);
      }
      function q(t, e) {
        return e ? L(t, e) : new b(I(t));
      }
      function K(...t) {
        let e = Number.POSITIVE_INFINITY,
          n = null,
          s = t[t.length - 1];
        return (
          k(s)
            ? ((n = t.pop()),
              t.length > 1 &&
                'number' == typeof t[t.length - 1] &&
                (e = t.pop()))
            : 'number' == typeof s && (e = t.pop()),
          null === n && 1 === t.length && t[0] instanceof b
            ? t[0]
            : W(e)(q(t, n))
        );
      }
      function Z() {
        return function (t) {
          return t.lift(new G(t));
        };
      }
      class G {
        constructor(t) {
          this.connectable = t;
        }
        call(t, e) {
          const { connectable: n } = this;
          n._refCount++;
          const s = new Q(t, n),
            i = e.subscribe(s);
          return s.closed || (s.connection = n.connect()), i;
        }
      }
      class Q extends f {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _unsubscribe() {
          const { connectable: t } = this;
          if (!t) return void (this.connection = null);
          this.connectable = null;
          const e = t._refCount;
          if (e <= 0) return void (this.connection = null);
          if (((t._refCount = e - 1), e > 1))
            return void (this.connection = null);
          const { connection: n } = this,
            s = t._connection;
          (this.connection = null), !s || (n && s !== n) || s.unsubscribe();
        }
      }
      class Y extends b {
        constructor(t, e) {
          super(),
            (this.source = t),
            (this.subjectFactory = e),
            (this._refCount = 0),
            (this._isComplete = !1);
        }
        _subscribe(t) {
          return this.getSubject().subscribe(t);
        }
        getSubject() {
          const t = this._subject;
          return (
            (t && !t.isStopped) || (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        connect() {
          let t = this._connection;
          return (
            t ||
              ((this._isComplete = !1),
              (t = this._connection = new u()),
              t.add(this.source.subscribe(new J(this.getSubject(), this))),
              t.closed && ((this._connection = null), (t = u.EMPTY))),
            t
          );
        }
        refCount() {
          return Z()(this);
        }
      }
      const X = (() => {
        const t = Y.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: t._subscribe },
          _isComplete: { value: t._isComplete, writable: !0 },
          getSubject: { value: t.getSubject },
          connect: { value: t.connect },
          refCount: { value: t.refCount },
        };
      })();
      class J extends C {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _error(t) {
          this._unsubscribe(), super._error(t);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const t = this.connectable;
          if (t) {
            this.connectable = null;
            const e = t._connection;
            (t._refCount = 0),
              (t._subject = null),
              (t._connection = null),
              e && e.unsubscribe();
          }
        }
      }
      function tt() {
        return new x();
      }
      function et(t, e, n) {
        const s = (function (t) {
          return function (...e) {
            if (t) {
              const n = t(...e);
              for (const t in n) this[t] = n[t];
            }
          };
        })(e);
        function i(...t) {
          if (this instanceof i) return s.apply(this, t), this;
          const e = new i(...t);
          return (n.annotation = e), n;
          function n(t, n, s) {
            const i = t.hasOwnProperty('__parameters__')
              ? t.__parameters__
              : Object.defineProperty(t, '__parameters__', { value: [] })
                  .__parameters__;
            for (; i.length <= s; ) i.push(null);
            return (i[s] = i[s] || []).push(e), t;
          }
        }
        return (
          n && (i.prototype = Object.create(n.prototype)),
          (i.prototype.ngMetadataName = t),
          (i.annotationCls = i),
          i
        );
      }
      const nt = et('Inject', (t) => ({ token: t })),
        st = et('Optional'),
        it = et('Self'),
        rt = et('SkipSelf');
      var ot = (function (t) {
        return (
          (t[(t.Default = 0)] = 'Default'),
          (t[(t.Host = 1)] = 'Host'),
          (t[(t.Self = 2)] = 'Self'),
          (t[(t.SkipSelf = 4)] = 'SkipSelf'),
          (t[(t.Optional = 8)] = 'Optional'),
          t
        );
      })({});
      function at(t) {
        for (let e in t) if (t[e] === at) return e;
        throw Error('Could not find renamed property on target object.');
      }
      function lt(t) {
        return {
          token: t.token,
          providedIn: t.providedIn || null,
          factory: t.factory,
          value: void 0,
        };
      }
      const ct = lt;
      function ht(t) {
        const e = t[ut];
        return e && e.token === t ? e : null;
      }
      const ut = at({ ngInjectableDef: at });
      function dt(t) {
        if ('string' == typeof t) return t;
        if (t instanceof Array) return '[' + t.map(dt).join(', ') + ']';
        if (null == t) return '' + t;
        if (t.overriddenName) return '' + t.overriddenName;
        if (t.name) return '' + t.name;
        const e = t.toString();
        if (null == e) return '' + e;
        const n = e.indexOf('\n');
        return -1 === n ? e : e.substring(0, n);
      }
      const pt = at({ __forward_ref__: at });
      function ft(t) {
        return (
          (t.__forward_ref__ = ft),
          (t.toString = function () {
            return dt(this());
          }),
          t
        );
      }
      function mt(t) {
        const e = t;
        return 'function' == typeof e &&
          e.hasOwnProperty(pt) &&
          e.__forward_ref__ === ft
          ? e()
          : t;
      }
      const gt = 'undefined' != typeof globalThis && globalThis,
        yt = 'undefined' != typeof window && window,
        _t =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        vt = 'undefined' != typeof global && global,
        bt = gt || vt || yt || _t;
      class wt {
        constructor(t, e) {
          (this._desc = t),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ngInjectableDef = void 0),
            'number' == typeof e
              ? (this.__NG_ELEMENT_ID__ = e)
              : void 0 !== e &&
                (this.ngInjectableDef = lt({
                  token: this,
                  providedIn: e.providedIn || 'root',
                  factory: e.factory,
                }));
        }
        toString() {
          return 'InjectionToken ' + this._desc;
        }
      }
      const St = new wt('INJECTOR', -1),
        Et = new Object(),
        Ct = /\n/gm,
        xt = at({ provide: String, useValue: at });
      let Tt = void 0;
      function kt(t) {
        const e = Tt;
        return (Tt = t), e;
      }
      function Dt(t, e = ot.Default) {
        return (function (t, e = ot.Default) {
          if (void 0 === Tt)
            throw new Error(
              'inject() must be called from an injection context'
            );
          return null === Tt
            ? (function (t, e, n) {
                const s = ht(t);
                if (s && 'root' == s.providedIn)
                  return void 0 === s.value ? (s.value = s.factory()) : s.value;
                if (n & ot.Optional) return null;
                throw new Error(`Injector: NOT_FOUND [${dt(t)}]`);
              })(t, 0, e)
            : Tt.get(t, e & ot.Optional ? null : void 0, e);
        })(t, e);
      }
      const Rt = Dt;
      class At {
        get(t, e = Et) {
          if (e === Et) {
            const e = new Error(`NullInjectorError: No provider for ${dt(t)}!`);
            throw ((e.name = 'NullInjectorError'), e);
          }
          return e;
        }
      }
      function It(t, e, n, s = null) {
        t =
          t && '\n' === t.charAt(0) && '\u0275' == t.charAt(1)
            ? t.substr(2)
            : t;
        let i = dt(e);
        if (e instanceof Array) i = e.map(dt).join(' -> ');
        else if ('object' == typeof e) {
          let t = [];
          for (let n in e)
            if (e.hasOwnProperty(n)) {
              let s = e[n];
              t.push(
                n + ':' + ('string' == typeof s ? JSON.stringify(s) : dt(s))
              );
            }
          i = `{${t.join(', ')}}`;
        }
        return `${n}${s ? '(' + s + ')' : ''}[${i}]: ${t.replace(Ct, '\n  ')}`;
      }
      class Ot {}
      class Pt {}
      function Nt(t, e, n) {
        e >= t.length ? t.push(n) : t.splice(e, 0, n);
      }
      function Mt(t, e) {
        return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
      }
      const Ft = (function () {
          var t = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
          return (
            (t[t.Emulated] = 'Emulated'),
            (t[t.Native] = 'Native'),
            (t[t.None] = 'None'),
            (t[t.ShadowDom] = 'ShadowDom'),
            t
          );
        })(),
        Lt = (() =>
          (
            ('undefined' != typeof requestAnimationFrame &&
              requestAnimationFrame) ||
            setTimeout
          ).bind(bt))();
      function jt(t) {
        return t.ngDebugContext;
      }
      function Vt(t) {
        return t.ngOriginalError;
      }
      function Ht(t, ...e) {
        t.error(...e);
      }
      class Bt {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const e = this._findOriginalError(t),
            n = this._findContext(t),
            s = (function (t) {
              return t.ngErrorLogger || Ht;
            })(t);
          s(this._console, 'ERROR', t),
            e && s(this._console, 'ORIGINAL ERROR', e),
            n && s(this._console, 'ERROR CONTEXT', n);
        }
        _findContext(t) {
          return t ? (jt(t) ? jt(t) : this._findContext(Vt(t))) : null;
        }
        _findOriginalError(t) {
          let e = Vt(t);
          for (; e && Vt(e); ) e = Vt(e);
          return e;
        }
      }
      let Ut = !0,
        $t = !1;
      function zt() {
        return ($t = !0), Ut;
      }
      class Wt {
        constructor(t) {
          if (
            ((this.defaultDoc = t),
            (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
              'sanitization-inert'
            )),
            (this.inertBodyElement = this.inertDocument.body),
            null == this.inertBodyElement)
          ) {
            const t = this.inertDocument.createElement('html');
            this.inertDocument.appendChild(t),
              (this.inertBodyElement = this.inertDocument.createElement(
                'body'
              )),
              t.appendChild(this.inertBodyElement);
          }
          (this.inertBodyElement.innerHTML =
            '<svg><g onload="this.parentNode.remove()"></g></svg>'),
            !this.inertBodyElement.querySelector ||
            this.inertBodyElement.querySelector('svg')
              ? ((this.inertBodyElement.innerHTML =
                  '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                (this.getInertBodyElement =
                  this.inertBodyElement.querySelector &&
                  this.inertBodyElement.querySelector('svg img') &&
                  (function () {
                    try {
                      return !!window.DOMParser;
                    } catch (t) {
                      return !1;
                    }
                  })()
                    ? this.getInertBodyElement_DOMParser
                    : this.getInertBodyElement_InertDocument))
              : (this.getInertBodyElement = this.getInertBodyElement_XHR);
        }
        getInertBodyElement_XHR(t) {
          t = '<body><remove></remove>' + t + '</body>';
          try {
            t = encodeURI(t);
          } catch (s) {
            return null;
          }
          const e = new XMLHttpRequest();
          (e.responseType = 'document'),
            e.open('GET', 'data:text/html;charset=utf-8,' + t, !1),
            e.send(void 0);
          const n = e.response.body;
          return n.removeChild(n.firstChild), n;
        }
        getInertBodyElement_DOMParser(t) {
          t = '<body><remove></remove>' + t + '</body>';
          try {
            const e = new window.DOMParser().parseFromString(t, 'text/html')
              .body;
            return e.removeChild(e.firstChild), e;
          } catch (e) {
            return null;
          }
        }
        getInertBodyElement_InertDocument(t) {
          const e = this.inertDocument.createElement('template');
          return 'content' in e
            ? ((e.innerHTML = t), e)
            : ((this.inertBodyElement.innerHTML = t),
              this.defaultDoc.documentMode &&
                this.stripCustomNsAttrs(this.inertBodyElement),
              this.inertBodyElement);
        }
        stripCustomNsAttrs(t) {
          const e = t.attributes;
          for (let s = e.length - 1; 0 < s; s--) {
            const n = e.item(s).name;
            ('xmlns:ns1' !== n && 0 !== n.indexOf('ns1:')) ||
              t.removeAttribute(n);
          }
          let n = t.firstChild;
          for (; n; )
            n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n),
              (n = n.nextSibling);
        }
      }
      const qt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Kt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function Zt(t) {
        return (t = String(t)).match(qt) || t.match(Kt)
          ? t
          : (zt() &&
              console.warn(
                `WARNING: sanitizing unsafe URL value ${t} (see http://g.co/ng/security#xss)`
              ),
            'unsafe:' + t);
      }
      function Gt(t) {
        const e = {};
        for (const n of t.split(',')) e[n] = !0;
        return e;
      }
      function Qt(...t) {
        const e = {};
        for (const n of t)
          for (const t in n) n.hasOwnProperty(t) && (e[t] = !0);
        return e;
      }
      const Yt = Gt('area,br,col,hr,img,wbr'),
        Xt = Gt('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        Jt = Gt('rp,rt'),
        te = Qt(Jt, Xt),
        ee = Qt(
          Yt,
          Qt(
            Xt,
            Gt(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          Qt(
            Jt,
            Gt(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          te
        ),
        ne = Gt('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        se = Gt('srcset'),
        ie = Qt(
          ne,
          se,
          Gt(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          ),
          Gt(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
          )
        ),
        re = Gt('script,style,template');
      class oe {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(t) {
          let e = t.firstChild,
            n = !0;
          for (; e; )
            if (
              (e.nodeType === Node.ELEMENT_NODE
                ? (n = this.startElement(e))
                : e.nodeType === Node.TEXT_NODE
                ? this.chars(e.nodeValue)
                : (this.sanitizedSomething = !0),
              n && e.firstChild)
            )
              e = e.firstChild;
            else
              for (; e; ) {
                e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                let t = this.checkClobberedElement(e, e.nextSibling);
                if (t) {
                  e = t;
                  break;
                }
                e = this.checkClobberedElement(e, e.parentNode);
              }
          return this.buf.join('');
        }
        startElement(t) {
          const e = t.nodeName.toLowerCase();
          if (!ee.hasOwnProperty(e))
            return (this.sanitizedSomething = !0), !re.hasOwnProperty(e);
          this.buf.push('<'), this.buf.push(e);
          const n = t.attributes;
          for (let i = 0; i < n.length; i++) {
            const t = n.item(i),
              e = t.name,
              r = e.toLowerCase();
            if (!ie.hasOwnProperty(r)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let o = t.value;
            ne[r] && (o = Zt(o)),
              se[r] &&
                ((s = o),
                (o = (s = String(s))
                  .split(',')
                  .map((t) => Zt(t.trim()))
                  .join(', '))),
              this.buf.push(' ', e, '="', ce(o), '"');
          }
          var s;
          return this.buf.push('>'), !0;
        }
        endElement(t) {
          const e = t.nodeName.toLowerCase();
          ee.hasOwnProperty(e) &&
            !Yt.hasOwnProperty(e) &&
            (this.buf.push('</'), this.buf.push(e), this.buf.push('>'));
        }
        chars(t) {
          this.buf.push(ce(t));
        }
        checkClobberedElement(t, e) {
          if (
            e &&
            (t.compareDocumentPosition(e) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              'Failed to sanitize html because the element is clobbered: ' +
                t.outerHTML
            );
          return e;
        }
      }
      const ae = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        le = /([^\#-~ |!])/g;
      function ce(t) {
        return t
          .replace(/&/g, '&amp;')
          .replace(ae, function (t) {
            return (
              '&#' +
              (1024 * (t.charCodeAt(0) - 55296) +
                (t.charCodeAt(1) - 56320) +
                65536) +
              ';'
            );
          })
          .replace(le, function (t) {
            return '&#' + t.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let he;
      function ue(t) {
        return 'content' in t &&
          (function (t) {
            return (
              t.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === t.nodeName
            );
          })(t)
          ? t.content
          : null;
      }
      const de = (function () {
        var t = {
          NONE: 0,
          HTML: 1,
          STYLE: 2,
          SCRIPT: 3,
          URL: 4,
          RESOURCE_URL: 5,
        };
        return (
          (t[t.NONE] = 'NONE'),
          (t[t.HTML] = 'HTML'),
          (t[t.STYLE] = 'STYLE'),
          (t[t.SCRIPT] = 'SCRIPT'),
          (t[t.URL] = 'URL'),
          (t[t.RESOURCE_URL] = 'RESOURCE_URL'),
          t
        );
      })();
      class pe {}
      const fe = new RegExp(
          '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
          'g'
        ),
        me = /^url\(([^)]+)\)$/,
        ge = /([A-Z])/g;
      function ye(t) {
        try {
          return null != t ? t.toString().slice(0, 30) : t;
        } catch (e) {
          return '[ERROR] Exception while trying to serialize the value';
        }
      }
      let _e = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => ve()), t;
      })();
      const ve = (...t) => {},
        be = new wt(
          'The presence of this token marks an injector as being the root injector.'
        ),
        we = function (t, e, n) {
          return new ke(t, e, n);
        };
      let Se = (() => {
        class t {
          static create(t, e) {
            return Array.isArray(t)
              ? we(t, e, '')
              : we(t.providers, t.parent, t.name || '');
          }
        }
        return (
          (t.THROW_IF_NOT_FOUND = Et),
          (t.NULL = new At()),
          (t.ngInjectableDef = lt({
            token: t,
            providedIn: 'any',
            factory: () => Dt(St),
          })),
          (t.__NG_ELEMENT_ID__ = -1),
          t
        );
      })();
      const Ee = function (t) {
          return t;
        },
        Ce = [],
        xe = Ee,
        Te = function () {
          return Array.prototype.slice.call(arguments);
        };
      class ke {
        constructor(t, e = Se.NULL, n = null) {
          (this.parent = e), (this.source = n);
          const s = (this._records = new Map());
          s.set(Se, { token: Se, fn: Ee, deps: Ce, value: this, useNew: !1 }),
            s.set(St, { token: St, fn: Ee, deps: Ce, value: this, useNew: !1 }),
            (function t(e, n) {
              if (n)
                if ((n = mt(n)) instanceof Array)
                  for (let s = 0; s < n.length; s++) t(e, n[s]);
                else {
                  if ('function' == typeof n)
                    throw Re('Function/Class not supported', n);
                  if (!n || 'object' != typeof n || !n.provide)
                    throw Re('Unexpected provider', n);
                  {
                    let t = mt(n.provide);
                    const s = (function (t) {
                      const e = (function (t) {
                        let e = Ce;
                        const n = t.deps;
                        if (n && n.length) {
                          e = [];
                          for (let t = 0; t < n.length; t++) {
                            let s = 6,
                              i = mt(n[t]);
                            if (i instanceof Array)
                              for (let t = 0, e = i; t < e.length; t++) {
                                const n = e[t];
                                n instanceof st || n == st
                                  ? (s |= 1)
                                  : n instanceof rt || n == rt
                                  ? (s &= -3)
                                  : n instanceof it || n == it
                                  ? (s &= -5)
                                  : (i = n instanceof nt ? n.token : mt(n));
                              }
                            e.push({ token: i, options: s });
                          }
                        } else if (t.useExisting)
                          e = [{ token: mt(t.useExisting), options: 6 }];
                        else if (!n && !(xt in t))
                          throw Re("'deps' required", t);
                        return e;
                      })(t);
                      let n = Ee,
                        s = Ce,
                        i = !1,
                        r = mt(t.provide);
                      if (xt in t) s = t.useValue;
                      else if (t.useFactory) n = t.useFactory;
                      else if (t.useExisting);
                      else if (t.useClass) (i = !0), (n = mt(t.useClass));
                      else {
                        if ('function' != typeof r)
                          throw Re(
                            'StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable',
                            t
                          );
                        (i = !0), (n = r);
                      }
                      return { deps: e, fn: n, useNew: i, value: s };
                    })(n);
                    if (!0 === n.multi) {
                      let s = e.get(t);
                      if (s) {
                        if (s.fn !== Te) throw De(t);
                      } else
                        e.set(
                          t,
                          (s = {
                            token: n.provide,
                            deps: [],
                            useNew: !1,
                            fn: Te,
                            value: Ce,
                          })
                        );
                      (t = n), s.deps.push({ token: t, options: 6 });
                    }
                    const i = e.get(t);
                    if (i && i.fn == Te) throw De(t);
                    e.set(t, s);
                  }
                }
            })(s, t);
        }
        get(t, e, n = ot.Default) {
          const s = this._records.get(t);
          try {
            return (function t(e, n, s, i, r, o) {
              try {
                return (function (e, n, s, i, r, o) {
                  let a;
                  if (!n || o & ot.SkipSelf)
                    o & ot.Self || (a = i.get(e, r, ot.Default));
                  else {
                    if (((a = n.value), a == xe))
                      throw Error('\u0275Circular dependency');
                    if (a === Ce) {
                      n.value = xe;
                      let e = void 0,
                        r = n.useNew,
                        o = n.fn,
                        l = n.deps,
                        c = Ce;
                      if (l.length) {
                        c = [];
                        for (let e = 0; e < l.length; e++) {
                          const n = l[e],
                            r = n.options,
                            o = 2 & r ? s.get(n.token) : void 0;
                          c.push(
                            t(
                              n.token,
                              o,
                              s,
                              o || 4 & r ? i : Se.NULL,
                              1 & r ? null : Se.THROW_IF_NOT_FOUND,
                              ot.Default
                            )
                          );
                        }
                      }
                      n.value = a = r ? new o(...c) : o.apply(e, c);
                    }
                  }
                  return a;
                })(e, n, s, i, r, o);
              } catch (a) {
                throw (
                  (a instanceof Error || (a = new Error(a)),
                  (a.ngTempTokenPath = a.ngTempTokenPath || []).unshift(e),
                  n && n.value == xe && (n.value = Ce),
                  a)
                );
              }
            })(t, s, this._records, this.parent, e, n);
          } catch (i) {
            return (function (t, e, n, s) {
              const i = t.ngTempTokenPath;
              throw (
                (e.__source && i.unshift(e.__source),
                (t.message = It('\n' + t.message, i, 'StaticInjectorError', s)),
                (t.ngTokenPath = i),
                (t.ngTempTokenPath = null),
                t)
              );
            })(i, t, 0, this.source);
          }
        }
        toString() {
          const t = [];
          return (
            this._records.forEach((e, n) => t.push(dt(n))),
            `StaticInjector[${t.join(', ')}]`
          );
        }
      }
      function De(t) {
        return Re('Cannot mix multi providers and regular providers', t);
      }
      function Re(t, e) {
        return new Error(It(t, e, 'StaticInjectorError'));
      }
      const Ae = new wt('AnalyzeForEntryComponents');
      let Ie = null;
      function Oe() {
        if (!Ie) {
          const t = bt.Symbol;
          if (t && t.iterator) Ie = t.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let e = 0; e < t.length; ++e) {
              const n = t[e];
              'entries' !== n &&
                'size' !== n &&
                Map.prototype[n] === Map.prototype.entries &&
                (Ie = n);
            }
          }
        }
        return Ie;
      }
      function Pe(t, e) {
        return (
          t === e ||
          ('number' == typeof t && 'number' == typeof e && isNaN(t) && isNaN(e))
        );
      }
      function Ne(t, e) {
        const n = Fe(t),
          s = Fe(e);
        if (n && s)
          return (function (t, e, n) {
            const s = t[Oe()](),
              i = e[Oe()]();
            for (;;) {
              const t = s.next(),
                e = i.next();
              if (t.done && e.done) return !0;
              if (t.done || e.done) return !1;
              if (!n(t.value, e.value)) return !1;
            }
          })(t, e, Ne);
        {
          const i = t && ('object' == typeof t || 'function' == typeof t),
            r = e && ('object' == typeof e || 'function' == typeof e);
          return !(n || !i || s || !r) || Pe(t, e);
        }
      }
      class Me {
        constructor(t) {
          this.wrapped = t;
        }
        static wrap(t) {
          return new Me(t);
        }
        static unwrap(t) {
          return Me.isWrapped(t) ? t.wrapped : t;
        }
        static isWrapped(t) {
          return t instanceof Me;
        }
      }
      function Fe(t) {
        return (
          !!Le(t) && (Array.isArray(t) || (!(t instanceof Map) && Oe() in t))
        );
      }
      function Le(t) {
        return null !== t && ('function' == typeof t || 'object' == typeof t);
      }
      function je(t) {
        return !!t && 'function' == typeof t.then;
      }
      function Ve(t) {
        return !!t && 'function' == typeof t.subscribe;
      }
      class He {
        constructor(t, e, n) {
          (this.previousValue = t),
            (this.currentValue = e),
            (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      class Be {}
      function Ue(t) {
        const e = Error(
          `No component factory found for ${dt(
            t
          )}. Did you add it to @NgModule.entryComponents?`
        );
        return (e[$e] = t), e;
      }
      const $e = 'ngComponent';
      class ze {
        resolveComponentFactory(t) {
          throw Ue(t);
        }
      }
      let We = (() => {
        class t {}
        return (t.NULL = new ze()), t;
      })();
      class qe {
        constructor(t, e, n) {
          (this._parent = e),
            (this._ngModule = n),
            (this._factories = new Map());
          for (let s = 0; s < t.length; s++) {
            const e = t[s];
            this._factories.set(e.componentType, e);
          }
        }
        resolveComponentFactory(t) {
          let e = this._factories.get(t);
          if (
            (!e &&
              this._parent &&
              (e = this._parent.resolveComponentFactory(t)),
            !e)
          )
            throw Ue(t);
          return new Ke(e, this._ngModule);
        }
      }
      class Ke extends Be {
        constructor(t, e) {
          super(),
            (this.factory = t),
            (this.ngModule = e),
            (this.selector = t.selector),
            (this.componentType = t.componentType),
            (this.ngContentSelectors = t.ngContentSelectors),
            (this.inputs = t.inputs),
            (this.outputs = t.outputs);
        }
        create(t, e, n, s) {
          return this.factory.create(t, e, n, s || this.ngModule);
        }
      }
      function Ze(...t) {}
      let Ge = (() => {
        class t {
          constructor(t) {
            this.nativeElement = t;
          }
        }
        return (t.__NG_ELEMENT_ID__ = () => Qe(t)), t;
      })();
      const Qe = Ze;
      class Ye {}
      class Xe {}
      const Je = (function () {
        var t = { Important: 1, DashCase: 2 };
        return (t[t.Important] = 'Important'), (t[t.DashCase] = 'DashCase'), t;
      })();
      let tn = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => en()), t;
      })();
      const en = Ze;
      class nn {
        constructor(t) {
          (this.full = t),
            (this.major = t.split('.')[0]),
            (this.minor = t.split('.')[1]),
            (this.patch = t.split('.').slice(2).join('.'));
        }
      }
      const sn = new nn('8.2.14');
      class rn {
        constructor() {}
        supports(t) {
          return Fe(t);
        }
        create(t) {
          return new an(t);
        }
      }
      const on = (t, e) => e;
      class an {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || on);
        }
        forEachItem(t) {
          let e;
          for (e = this._itHead; null !== e; e = e._next) t(e);
        }
        forEachOperation(t) {
          let e = this._itHead,
            n = this._removalsHead,
            s = 0,
            i = null;
          for (; e || n; ) {
            const r = !n || (e && e.currentIndex < un(n, s, i)) ? e : n,
              o = un(r, s, i),
              a = r.currentIndex;
            if (r === n) s--, (n = n._nextRemoved);
            else if (((e = e._next), null == r.previousIndex)) s++;
            else {
              i || (i = []);
              const t = o - s,
                e = a - s;
              if (t != e) {
                for (let n = 0; n < t; n++) {
                  const s = n < i.length ? i[n] : (i[n] = 0),
                    r = s + n;
                  e <= r && r < t && (i[n] = s + 1);
                }
                i[r.previousIndex] = e - t;
              }
            }
            o !== a && t(r, o, a);
          }
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachMovedItem(t) {
          let e;
          for (e = this._movesHead; null !== e; e = e._nextMoved) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        forEachIdentityChange(t) {
          let e;
          for (
            e = this._identityChangesHead;
            null !== e;
            e = e._nextIdentityChange
          )
            t(e);
        }
        diff(t) {
          if ((null == t && (t = []), !Fe(t)))
            throw new Error(
              `Error trying to diff '${dt(
                t
              )}'. Only arrays and iterables are allowed`
            );
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e,
            n,
            s,
            i = this._itHead,
            r = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let e = 0; e < this.length; e++)
              (n = t[e]),
                (s = this._trackByFn(e, n)),
                null !== i && Pe(i.trackById, s)
                  ? (r && (i = this._verifyReinsertion(i, n, s, e)),
                    Pe(i.item, n) || this._addIdentityChange(i, n))
                  : ((i = this._mismatch(i, n, s, e)), (r = !0)),
                (i = i._next);
          } else
            (e = 0),
              (function (t, e) {
                if (Array.isArray(t))
                  for (let n = 0; n < t.length; n++) e(t[n]);
                else {
                  const n = t[Oe()]();
                  let s;
                  for (; !(s = n.next()).done; ) e(s.value);
                }
              })(t, (t) => {
                (s = this._trackByFn(e, t)),
                  null !== i && Pe(i.trackById, s)
                    ? (r && (i = this._verifyReinsertion(i, t, s, e)),
                      Pe(i.item, t) || this._addIdentityChange(i, t))
                    : ((i = this._mismatch(i, t, s, e)), (r = !0)),
                  (i = i._next),
                  e++;
              }),
              (this.length = e);
          return this._truncate(i), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t, e;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = e
            )
              (t.previousIndex = t.currentIndex), (e = t._nextMoved);
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, e, n, s) {
          let i;
          return (
            null === t ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._linkedRecords
                ? null
                : this._linkedRecords.get(n, s))
              ? (Pe(t.item, e) || this._addIdentityChange(t, e),
                this._moveAfter(t, i, s))
              : null !==
                (t =
                  null === this._unlinkedRecords
                    ? null
                    : this._unlinkedRecords.get(n, null))
              ? (Pe(t.item, e) || this._addIdentityChange(t, e),
                this._reinsertAfter(t, i, s))
              : (t = this._addAfter(new ln(e, n), i, s)),
            t
          );
        }
        _verifyReinsertion(t, e, n, s) {
          let i =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(n, null);
          return (
            null !== i
              ? (t = this._reinsertAfter(i, t._prev, s))
              : t.currentIndex != s &&
                ((t.currentIndex = s), this._addToMoves(t, s)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const e = t._next;
            this._addToRemovals(this._unlink(t)), (t = e);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, e, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const s = t._prevRemoved,
            i = t._nextRemoved;
          return (
            null === s ? (this._removalsHead = i) : (s._nextRemoved = i),
            null === i ? (this._removalsTail = s) : (i._prevRemoved = s),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _moveAfter(t, e, n) {
          return (
            this._unlink(t),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _addAfter(t, e, n) {
          return (
            this._insertAfter(t, e, n),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, e, n) {
          const s = null === e ? this._itHead : e._next;
          return (
            (t._next = s),
            (t._prev = e),
            null === s ? (this._itTail = t) : (s._prev = t),
            null === e ? (this._itHead = t) : (e._next = t),
            null === this._linkedRecords && (this._linkedRecords = new hn()),
            this._linkedRecords.put(t),
            (t.currentIndex = n),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const e = t._prev,
            n = t._next;
          return (
            null === e ? (this._itHead = n) : (e._next = n),
            null === n ? (this._itTail = e) : (n._prev = e),
            t
          );
        }
        _addToMoves(t, e) {
          return (
            t.previousIndex === e ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new hn()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, e) {
          return (
            (t.item = e),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class ln {
        constructor(t, e) {
          (this.item = t),
            (this.trackById = e),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class cn {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, e) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if ((null === e || e <= n.currentIndex) && Pe(n.trackById, t))
              return n;
          return null;
        }
        remove(t) {
          const e = t._prevDup,
            n = t._nextDup;
          return (
            null === e ? (this._head = n) : (e._nextDup = n),
            null === n ? (this._tail = e) : (n._prevDup = e),
            null === this._head
          );
        }
      }
      class hn {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const e = t.trackById;
          let n = this.map.get(e);
          n || ((n = new cn()), this.map.set(e, n)), n.add(t);
        }
        get(t, e) {
          const n = this.map.get(t);
          return n ? n.get(t, e) : null;
        }
        remove(t) {
          const e = t.trackById;
          return this.map.get(e).remove(t) && this.map.delete(e), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function un(t, e, n) {
        const s = t.previousIndex;
        if (null === s) return s;
        let i = 0;
        return n && s < n.length && (i = n[s]), s + e + i;
      }
      class dn {
        constructor() {}
        supports(t) {
          return t instanceof Map || Le(t);
        }
        create() {
          return new pn();
        }
      }
      class pn {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let e;
          for (e = this._mapHead; null !== e; e = e._next) t(e);
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachChangedItem(t) {
          let e;
          for (e = this._changesHead; null !== e; e = e._nextChanged) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || Le(t)))
              throw new Error(
                `Error trying to diff '${dt(
                  t
                )}'. Only maps and objects are allowed`
              );
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (t, n) => {
              if (e && e.key === n)
                this._maybeAddToChanges(e, t),
                  (this._appendAfter = e),
                  (e = e._next);
              else {
                const s = this._getOrCreateRecordForKey(n, t);
                e = this._insertBeforeOrAppend(e, s);
              }
            }),
            e)
          ) {
            e._prev && (e._prev._next = null), (this._removalsHead = e);
            for (let t = e; null !== t; t = t._nextRemoved)
              t === this._mapHead && (this._mapHead = null),
                this._records.delete(t.key),
                (t._nextRemoved = t._next),
                (t.previousValue = t.currentValue),
                (t.currentValue = null),
                (t._prev = null),
                (t._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, e) {
          if (t) {
            const n = t._prev;
            return (
              (e._next = t),
              (e._prev = n),
              (t._prev = e),
              n && (n._next = e),
              t === this._mapHead && (this._mapHead = e),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = e), (e._prev = this._appendAfter))
              : (this._mapHead = e),
            (this._appendAfter = e),
            null
          );
        }
        _getOrCreateRecordForKey(t, e) {
          if (this._records.has(t)) {
            const n = this._records.get(t);
            this._maybeAddToChanges(n, e);
            const s = n._prev,
              i = n._next;
            return (
              s && (s._next = i),
              i && (i._prev = s),
              (n._next = null),
              (n._prev = null),
              n
            );
          }
          const n = new fn(t);
          return (
            this._records.set(t, n),
            (n.currentValue = e),
            this._addToAdditions(n),
            n
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, e) {
          Pe(e, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = e),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, e) {
          t instanceof Map
            ? t.forEach(e)
            : Object.keys(t).forEach((n) => e(t[n], n));
        }
      }
      class fn {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      let mn = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(e, n) {
              if (null != n) {
                const t = n.factories.slice();
                e = e.concat(t);
              }
              return new t(e);
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: (n) => {
                  if (!n)
                    throw new Error(
                      'Cannot extend IterableDiffers without a parent injector'
                    );
                  return t.create(e, n);
                },
                deps: [[t, new rt(), new st()]],
              };
            }
            find(t) {
              const e = this.factories.find((e) => e.supports(t));
              if (null != e) return e;
              throw new Error(
                `Cannot find a differ supporting object '${t}' of type '${
                  ((n = t), n.name || typeof n)
                }'`
              );
              var n;
            }
          }
          return (
            (t.ngInjectableDef = lt({
              token: t,
              providedIn: 'root',
              factory: () => new t([new rn()]),
            })),
            t
          );
        })(),
        gn = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(e, n) {
              if (n) {
                const t = n.factories.slice();
                e = e.concat(t);
              }
              return new t(e);
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: (n) => {
                  if (!n)
                    throw new Error(
                      'Cannot extend KeyValueDiffers without a parent injector'
                    );
                  return t.create(e, n);
                },
                deps: [[t, new rt(), new st()]],
              };
            }
            find(t) {
              const e = this.factories.find((e) => e.supports(t));
              if (e) return e;
              throw new Error(`Cannot find a differ supporting object '${t}'`);
            }
          }
          return (
            (t.ngInjectableDef = lt({
              token: t,
              providedIn: 'root',
              factory: () => new t([new dn()]),
            })),
            t
          );
        })();
      const yn = [new dn()],
        _n = new mn([new rn()]),
        vn = new gn(yn);
      let bn = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => wn(t, Ge)), t;
      })();
      const wn = Ze;
      let Sn = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => En(t, Ge)), t;
      })();
      const En = Ze;
      function Cn(t, e, n, s) {
        let i = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '${e}'. Current value: '${n}'.`;
        return (
          s &&
            (i +=
              ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
          (function (t, e) {
            const n = new Error(t);
            return xn(n, e), n;
          })(i, t)
        );
      }
      function xn(t, e) {
        (t.ngDebugContext = e), (t.ngErrorLogger = e.logError.bind(e));
      }
      function Tn(t) {
        return new Error(
          'ViewDestroyedError: Attempt to use a destroyed view: ' + t
        );
      }
      function kn(t, e, n) {
        const s = t.state,
          i = 1792 & s;
        return i === e
          ? ((t.state = (-1793 & s) | n), (t.initIndex = -1), !0)
          : i === n;
      }
      function Dn(t, e, n) {
        return (
          (1792 & t.state) === e &&
          t.initIndex <= n &&
          ((t.initIndex = n + 1), !0)
        );
      }
      function Rn(t, e) {
        return t.nodes[e];
      }
      function An(t, e) {
        return t.nodes[e];
      }
      function In(t, e) {
        return t.nodes[e];
      }
      function On(t, e) {
        return t.nodes[e];
      }
      function Pn(t, e) {
        return t.nodes[e];
      }
      const Nn = {
          setCurrentNode: void 0,
          createRootView: void 0,
          createEmbeddedView: void 0,
          createComponentView: void 0,
          createNgModuleRef: void 0,
          overrideProvider: void 0,
          overrideComponentView: void 0,
          clearOverrides: void 0,
          checkAndUpdateView: void 0,
          checkNoChangesView: void 0,
          destroyView: void 0,
          resolveDep: void 0,
          createDebugContext: void 0,
          handleEvent: void 0,
          updateDirectives: void 0,
          updateRenderer: void 0,
          dirtyParentQueries: void 0,
        },
        Mn = () => {},
        Fn = new Map();
      function Ln(t) {
        let e = Fn.get(t);
        return e || ((e = dt(t) + '_' + Fn.size), Fn.set(t, e)), e;
      }
      function jn(t) {
        return {
          id: '$$undefined',
          styles: t.styles,
          encapsulation: t.encapsulation,
          data: t.data,
        };
      }
      let Vn = 0;
      function Hn(t, e, n, s) {
        return !(!(2 & t.state) && Pe(t.oldValues[e.bindingIndex + n], s));
      }
      function Bn(t, e, n, s) {
        return !!Hn(t, e, n, s) && ((t.oldValues[e.bindingIndex + n] = s), !0);
      }
      function Un(t, e, n, s) {
        const i = t.oldValues[e.bindingIndex + n];
        if (1 & t.state || !Ne(i, s)) {
          const r = e.bindings[n].name;
          throw Cn(
            Nn.createDebugContext(t, e.nodeIndex),
            `${r}: ${i}`,
            `${r}: ${s}`,
            0 != (1 & t.state)
          );
        }
      }
      function $n(t) {
        let e = t;
        for (; e; )
          2 & e.def.flags && (e.state |= 8),
            (e = e.viewContainerParent || e.parent);
      }
      function zn(t, e) {
        let n = t;
        for (; n && n !== e; )
          (n.state |= 64), (n = n.viewContainerParent || n.parent);
      }
      function Wn(t, e, n, s) {
        try {
          return (
            $n(33554432 & t.def.nodes[e].flags ? An(t, e).componentView : t),
            Nn.handleEvent(t, e, n, s)
          );
        } catch (i) {
          t.root.errorHandler.handleError(i);
        }
      }
      function qn(t) {
        return t.parent ? An(t.parent, t.parentNodeDef.nodeIndex) : null;
      }
      function Kn(t) {
        return t.parent ? t.parentNodeDef.parent : null;
      }
      function Zn(t, e) {
        switch (201347067 & e.flags) {
          case 1:
            return An(t, e.nodeIndex).renderElement;
          case 2:
            return Rn(t, e.nodeIndex).renderText;
        }
      }
      function Gn(t) {
        return !!t.parent && !!(32768 & t.parentNodeDef.flags);
      }
      function Qn(t) {
        return !(!t.parent || 32768 & t.parentNodeDef.flags);
      }
      function Yn(t) {
        return 1 << t % 32;
      }
      function Xn(t) {
        const e = {};
        let n = 0;
        const s = {};
        return (
          t &&
            t.forEach(([t, i]) => {
              'number' == typeof t ? ((e[t] = i), (n |= Yn(t))) : (s[t] = i);
            }),
          { matchedQueries: e, references: s, matchedQueryIds: n }
        );
      }
      function Jn(t, e) {
        return t.map((t) => {
          let n, s;
          return (
            Array.isArray(t) ? ([s, n] = t) : ((s = 0), (n = t)),
            n &&
              ('function' == typeof n || 'object' == typeof n) &&
              e &&
              Object.defineProperty(n, '__source', {
                value: e,
                configurable: !0,
              }),
            { flags: s, token: n, tokenKey: Ln(n) }
          );
        });
      }
      function ts(t, e, n) {
        let s = n.renderParent;
        return s
          ? 0 == (1 & s.flags) ||
            0 == (33554432 & s.flags) ||
            (s.element.componentRendererType &&
              s.element.componentRendererType.encapsulation === Ft.Native)
            ? An(t, n.renderParent.nodeIndex).renderElement
            : void 0
          : e;
      }
      const es = new WeakMap();
      function ns(t) {
        let e = es.get(t);
        return e || ((e = t(() => Mn)), (e.factory = t), es.set(t, e)), e;
      }
      function ss(t, e, n, s, i) {
        3 === e && (n = t.renderer.parentNode(Zn(t, t.def.lastRenderRootNode))),
          is(t, e, 0, t.def.nodes.length - 1, n, s, i);
      }
      function is(t, e, n, s, i, r, o) {
        for (let a = n; a <= s; a++) {
          const n = t.def.nodes[a];
          11 & n.flags && os(t, n, e, i, r, o), (a += n.childCount);
        }
      }
      function rs(t, e, n, s, i, r) {
        let o = t;
        for (; o && !Gn(o); ) o = o.parent;
        const a = o.parent,
          l = Kn(o),
          c = l.nodeIndex + l.childCount;
        for (let h = l.nodeIndex + 1; h <= c; h++) {
          const t = a.def.nodes[h];
          t.ngContentIndex === e && os(a, t, n, s, i, r), (h += t.childCount);
        }
        if (!a.parent) {
          const o = t.root.projectableNodes[e];
          if (o) for (let e = 0; e < o.length; e++) as(t, o[e], n, s, i, r);
        }
      }
      function os(t, e, n, s, i, r) {
        if (8 & e.flags) rs(t, e.ngContent.index, n, s, i, r);
        else {
          const o = Zn(t, e);
          if (
            (3 === n && 33554432 & e.flags && 48 & e.bindingFlags
              ? (16 & e.bindingFlags && as(t, o, n, s, i, r),
                32 & e.bindingFlags &&
                  as(An(t, e.nodeIndex).componentView, o, n, s, i, r))
              : as(t, o, n, s, i, r),
            16777216 & e.flags)
          ) {
            const o = An(t, e.nodeIndex).viewContainer._embeddedViews;
            for (let t = 0; t < o.length; t++) ss(o[t], n, s, i, r);
          }
          1 & e.flags &&
            !e.element.name &&
            is(t, n, e.nodeIndex + 1, e.nodeIndex + e.childCount, s, i, r);
        }
      }
      function as(t, e, n, s, i, r) {
        const o = t.renderer;
        switch (n) {
          case 1:
            o.appendChild(s, e);
            break;
          case 2:
            o.insertBefore(s, e, i);
            break;
          case 3:
            o.removeChild(s, e);
            break;
          case 0:
            r.push(e);
        }
      }
      const ls = /^:([^:]+):(.+)$/;
      function cs(t) {
        if (':' === t[0]) {
          const e = t.match(ls);
          return [e[1], e[2]];
        }
        return ['', t];
      }
      function hs(t) {
        let e = 0;
        for (let n = 0; n < t.length; n++) e |= t[n].flags;
        return e;
      }
      const us = new Object(),
        ds = Ln(Se),
        ps = Ln(St),
        fs = Ln(Ot);
      function ms(t, e, n, s) {
        return (
          (n = mt(n)),
          { index: -1, deps: Jn(s, dt(e)), flags: t, token: e, value: n }
        );
      }
      function gs(t, e, n = Se.THROW_IF_NOT_FOUND) {
        const s = kt(t);
        try {
          if (8 & e.flags) return e.token;
          if ((2 & e.flags && (n = null), 1 & e.flags))
            return t._parent.get(e.token, n);
          const o = e.tokenKey;
          switch (o) {
            case ds:
            case ps:
            case fs:
              return t;
          }
          const a = t._def.providersByKey[o];
          let l;
          if (a) {
            let e = t._providers[a.index];
            return (
              void 0 === e && (e = t._providers[a.index] = ys(t, a)),
              e === us ? void 0 : e
            );
          }
          if (
            (l = ht(e.token)) &&
            ((i = t),
            null != (r = l).providedIn &&
              ((function (t, e) {
                return t._def.modules.indexOf(e) > -1;
              })(i, r.providedIn) ||
                ('root' === r.providedIn && i._def.isRoot)))
          ) {
            const n = t._providers.length;
            return (
              (t._def.providers[n] = t._def.providersByKey[e.tokenKey] = {
                flags: 5120,
                value: l.factory,
                deps: [],
                index: n,
                token: e.token,
              }),
              (t._providers[n] = us),
              (t._providers[n] = ys(t, t._def.providersByKey[e.tokenKey]))
            );
          }
          return 4 & e.flags ? n : t._parent.get(e.token, n);
        } finally {
          kt(s);
        }
        var i, r;
      }
      function ys(t, e) {
        let n;
        switch (201347067 & e.flags) {
          case 512:
            n = (function (t, e, n) {
              const s = n.length;
              switch (s) {
                case 0:
                  return new e();
                case 1:
                  return new e(gs(t, n[0]));
                case 2:
                  return new e(gs(t, n[0]), gs(t, n[1]));
                case 3:
                  return new e(gs(t, n[0]), gs(t, n[1]), gs(t, n[2]));
                default:
                  const i = new Array(s);
                  for (let e = 0; e < s; e++) i[e] = gs(t, n[e]);
                  return new e(...i);
              }
            })(t, e.value, e.deps);
            break;
          case 1024:
            n = (function (t, e, n) {
              const s = n.length;
              switch (s) {
                case 0:
                  return e();
                case 1:
                  return e(gs(t, n[0]));
                case 2:
                  return e(gs(t, n[0]), gs(t, n[1]));
                case 3:
                  return e(gs(t, n[0]), gs(t, n[1]), gs(t, n[2]));
                default:
                  const i = Array(s);
                  for (let e = 0; e < s; e++) i[e] = gs(t, n[e]);
                  return e(...i);
              }
            })(t, e.value, e.deps);
            break;
          case 2048:
            n = gs(t, e.deps[0]);
            break;
          case 256:
            n = e.value;
        }
        return (
          n === us ||
            null === n ||
            'object' != typeof n ||
            131072 & e.flags ||
            'function' != typeof n.ngOnDestroy ||
            (e.flags |= 131072),
          void 0 === n ? us : n
        );
      }
      function _s(t, e) {
        const n = t.viewContainer._embeddedViews;
        if (((null == e || e >= n.length) && (e = n.length - 1), e < 0))
          return null;
        const s = n[e];
        return (
          (s.viewContainerParent = null),
          Mt(n, e),
          Nn.dirtyParentQueries(s),
          bs(s),
          s
        );
      }
      function vs(t, e, n) {
        const s = e ? Zn(e, e.def.lastRenderRootNode) : t.renderElement,
          i = n.renderer.parentNode(s),
          r = n.renderer.nextSibling(s);
        ss(n, 2, i, r, void 0);
      }
      function bs(t) {
        ss(t, 3, null, null, void 0);
      }
      const ws = new Object();
      function Ss(t, e, n, s, i, r) {
        return new Es(t, e, n, s, i, r);
      }
      class Es extends Be {
        constructor(t, e, n, s, i, r) {
          super(),
            (this.selector = t),
            (this.componentType = e),
            (this._inputs = s),
            (this._outputs = i),
            (this.ngContentSelectors = r),
            (this.viewDefFactory = n);
        }
        get inputs() {
          const t = [],
            e = this._inputs;
          for (let n in e) t.push({ propName: n, templateName: e[n] });
          return t;
        }
        get outputs() {
          const t = [];
          for (let e in this._outputs)
            t.push({ propName: e, templateName: this._outputs[e] });
          return t;
        }
        create(t, e, n, s) {
          if (!s) throw new Error('ngModule should be provided');
          const i = ns(this.viewDefFactory),
            r = i.nodes[0].element.componentProvider.nodeIndex,
            o = Nn.createRootView(t, e || [], n, i, s, ws),
            a = In(o, r).instance;
          return (
            n &&
              o.renderer.setAttribute(
                An(o, 0).renderElement,
                'ng-version',
                sn.full
              ),
            new Cs(o, new Ds(o), a)
          );
        }
      }
      class Cs extends class {} {
        constructor(t, e, n) {
          super(),
            (this._view = t),
            (this._viewRef = e),
            (this._component = n),
            (this._elDef = this._view.def.nodes[0]),
            (this.hostView = e),
            (this.changeDetectorRef = e),
            (this.instance = n);
        }
        get location() {
          return new Ge(An(this._view, this._elDef.nodeIndex).renderElement);
        }
        get injector() {
          return new Os(this._view, this._elDef);
        }
        get componentType() {
          return this._component.constructor;
        }
        destroy() {
          this._viewRef.destroy();
        }
        onDestroy(t) {
          this._viewRef.onDestroy(t);
        }
      }
      function xs(t, e, n) {
        return new Ts(t, e, n);
      }
      class Ts {
        constructor(t, e, n) {
          (this._view = t),
            (this._elDef = e),
            (this._data = n),
            (this._embeddedViews = []);
        }
        get element() {
          return new Ge(this._data.renderElement);
        }
        get injector() {
          return new Os(this._view, this._elDef);
        }
        get parentInjector() {
          let t = this._view,
            e = this._elDef.parent;
          for (; !e && t; ) (e = Kn(t)), (t = t.parent);
          return t ? new Os(t, e) : new Os(this._view, null);
        }
        clear() {
          for (let t = this._embeddedViews.length - 1; t >= 0; t--) {
            const e = _s(this._data, t);
            Nn.destroyView(e);
          }
        }
        get(t) {
          const e = this._embeddedViews[t];
          if (e) {
            const t = new Ds(e);
            return t.attachToViewContainerRef(this), t;
          }
          return null;
        }
        get length() {
          return this._embeddedViews.length;
        }
        createEmbeddedView(t, e, n) {
          const s = t.createEmbeddedView(e || {});
          return this.insert(s, n), s;
        }
        createComponent(t, e, n, s, i) {
          const r = n || this.parentInjector;
          i || t instanceof Ke || (i = r.get(Ot));
          const o = t.create(r, s, void 0, i);
          return this.insert(o.hostView, e), o;
        }
        insert(t, e) {
          if (t.destroyed)
            throw new Error(
              'Cannot insert a destroyed View in a ViewContainer!'
            );
          const n = t;
          return (
            (function (t, e, n, s) {
              let i = e.viewContainer._embeddedViews;
              null == n && (n = i.length),
                (s.viewContainerParent = t),
                Nt(i, n, s),
                (function (t, e) {
                  const n = qn(e);
                  if (!n || n === t || 16 & e.state) return;
                  e.state |= 16;
                  let s = n.template._projectedViews;
                  s || (s = n.template._projectedViews = []),
                    s.push(e),
                    (function (t, e) {
                      if (4 & e.flags) return;
                      (t.nodeFlags |= 4), (e.flags |= 4);
                      let n = e.parent;
                      for (; n; ) (n.childFlags |= 4), (n = n.parent);
                    })(e.parent.def, e.parentNodeDef);
                })(e, s),
                Nn.dirtyParentQueries(s),
                vs(e, n > 0 ? i[n - 1] : null, s);
            })(this._view, this._data, e, n._view),
            n.attachToViewContainerRef(this),
            t
          );
        }
        move(t, e) {
          if (t.destroyed)
            throw new Error('Cannot move a destroyed View in a ViewContainer!');
          const n = this._embeddedViews.indexOf(t._view);
          return (
            (function (t, e, n) {
              const s = t.viewContainer._embeddedViews,
                i = s[e];
              Mt(s, e),
                null == n && (n = s.length),
                Nt(s, n, i),
                Nn.dirtyParentQueries(i),
                bs(i),
                vs(t, n > 0 ? s[n - 1] : null, i);
            })(this._data, n, e),
            t
          );
        }
        indexOf(t) {
          return this._embeddedViews.indexOf(t._view);
        }
        remove(t) {
          const e = _s(this._data, t);
          e && Nn.destroyView(e);
        }
        detach(t) {
          const e = _s(this._data, t);
          return e ? new Ds(e) : null;
        }
      }
      function ks(t) {
        return new Ds(t);
      }
      class Ds {
        constructor(t) {
          (this._view = t),
            (this._viewContainerRef = null),
            (this._appRef = null);
        }
        get rootNodes() {
          return (function (t) {
            const e = [];
            return ss(t, 0, void 0, void 0, e), e;
          })(this._view);
        }
        get context() {
          return this._view.context;
        }
        get destroyed() {
          return 0 != (128 & this._view.state);
        }
        markForCheck() {
          $n(this._view);
        }
        detach() {
          this._view.state &= -5;
        }
        detectChanges() {
          const t = this._view.root.rendererFactory;
          t.begin && t.begin();
          try {
            Nn.checkAndUpdateView(this._view);
          } finally {
            t.end && t.end();
          }
        }
        checkNoChanges() {
          Nn.checkNoChangesView(this._view);
        }
        reattach() {
          this._view.state |= 4;
        }
        onDestroy(t) {
          this._view.disposables || (this._view.disposables = []),
            this._view.disposables.push(t);
        }
        destroy() {
          this._appRef
            ? this._appRef.detachView(this)
            : this._viewContainerRef &&
              this._viewContainerRef.detach(
                this._viewContainerRef.indexOf(this)
              ),
            Nn.destroyView(this._view);
        }
        detachFromAppRef() {
          (this._appRef = null),
            bs(this._view),
            Nn.dirtyParentQueries(this._view);
        }
        attachToAppRef(t) {
          if (this._viewContainerRef)
            throw new Error(
              'This view is already attached to a ViewContainer!'
            );
          this._appRef = t;
        }
        attachToViewContainerRef(t) {
          if (this._appRef)
            throw new Error(
              'This view is already attached directly to the ApplicationRef!'
            );
          this._viewContainerRef = t;
        }
      }
      function Rs(t, e) {
        return new As(t, e);
      }
      class As extends bn {
        constructor(t, e) {
          super(), (this._parentView = t), (this._def = e);
        }
        createEmbeddedView(t) {
          return new Ds(
            Nn.createEmbeddedView(
              this._parentView,
              this._def,
              this._def.element.template,
              t
            )
          );
        }
        get elementRef() {
          return new Ge(
            An(this._parentView, this._def.nodeIndex).renderElement
          );
        }
      }
      function Is(t, e) {
        return new Os(t, e);
      }
      class Os {
        constructor(t, e) {
          (this.view = t), (this.elDef = e);
        }
        get(t, e = Se.THROW_IF_NOT_FOUND) {
          return Nn.resolveDep(
            this.view,
            this.elDef,
            !!this.elDef && 0 != (33554432 & this.elDef.flags),
            { flags: 0, token: t, tokenKey: Ln(t) },
            e
          );
        }
      }
      function Ps(t, e) {
        const n = t.def.nodes[e];
        if (1 & n.flags) {
          const e = An(t, n.nodeIndex);
          return n.element.template ? e.template : e.renderElement;
        }
        if (2 & n.flags) return Rn(t, n.nodeIndex).renderText;
        if (20240 & n.flags) return In(t, n.nodeIndex).instance;
        throw new Error('Illegal state: read nodeValue for node index ' + e);
      }
      function Ns(t) {
        return new Ms(t.renderer);
      }
      class Ms {
        constructor(t) {
          this.delegate = t;
        }
        selectRootElement(t) {
          return this.delegate.selectRootElement(t);
        }
        createElement(t, e) {
          const [n, s] = cs(e),
            i = this.delegate.createElement(s, n);
          return t && this.delegate.appendChild(t, i), i;
        }
        createViewRoot(t) {
          return t;
        }
        createTemplateAnchor(t) {
          const e = this.delegate.createComment('');
          return t && this.delegate.appendChild(t, e), e;
        }
        createText(t, e) {
          const n = this.delegate.createText(e);
          return t && this.delegate.appendChild(t, n), n;
        }
        projectNodes(t, e) {
          for (let n = 0; n < e.length; n++) this.delegate.appendChild(t, e[n]);
        }
        attachViewAfter(t, e) {
          const n = this.delegate.parentNode(t),
            s = this.delegate.nextSibling(t);
          for (let i = 0; i < e.length; i++)
            this.delegate.insertBefore(n, e[i], s);
        }
        detachView(t) {
          for (let e = 0; e < t.length; e++) {
            const n = t[e],
              s = this.delegate.parentNode(n);
            this.delegate.removeChild(s, n);
          }
        }
        destroyView(t, e) {
          for (let n = 0; n < e.length; n++) this.delegate.destroyNode(e[n]);
        }
        listen(t, e, n) {
          return this.delegate.listen(t, e, n);
        }
        listenGlobal(t, e, n) {
          return this.delegate.listen(t, e, n);
        }
        setElementProperty(t, e, n) {
          this.delegate.setProperty(t, e, n);
        }
        setElementAttribute(t, e, n) {
          const [s, i] = cs(e);
          null != n
            ? this.delegate.setAttribute(t, i, n, s)
            : this.delegate.removeAttribute(t, i, s);
        }
        setBindingDebugInfo(t, e, n) {}
        setElementClass(t, e, n) {
          n ? this.delegate.addClass(t, e) : this.delegate.removeClass(t, e);
        }
        setElementStyle(t, e, n) {
          null != n
            ? this.delegate.setStyle(t, e, n)
            : this.delegate.removeStyle(t, e);
        }
        invokeElementMethod(t, e, n) {
          t[e].apply(t, n);
        }
        setText(t, e) {
          this.delegate.setValue(t, e);
        }
        animate() {
          throw new Error('Renderer.animate is no longer supported!');
        }
      }
      function Fs(t, e, n, s) {
        return new Ls(t, e, n, s);
      }
      class Ls {
        constructor(t, e, n, s) {
          (this._moduleType = t),
            (this._parent = e),
            (this._bootstrapComponents = n),
            (this._def = s),
            (this._destroyListeners = []),
            (this._destroyed = !1),
            (this.injector = this),
            (function (t) {
              const e = t._def,
                n = (t._providers = new Array(e.providers.length));
              for (let s = 0; s < e.providers.length; s++) {
                const i = e.providers[s];
                4096 & i.flags || (void 0 === n[s] && (n[s] = ys(t, i)));
              }
            })(this);
        }
        get(t, e = Se.THROW_IF_NOT_FOUND, n = ot.Default) {
          let s = 0;
          return (
            n & ot.SkipSelf ? (s |= 1) : n & ot.Self && (s |= 4),
            gs(this, { token: t, tokenKey: Ln(t), flags: s }, e)
          );
        }
        get instance() {
          return this.get(this._moduleType);
        }
        get componentFactoryResolver() {
          return this.get(We);
        }
        destroy() {
          if (this._destroyed)
            throw new Error(
              `The ng module ${dt(
                this.instance.constructor
              )} has already been destroyed.`
            );
          (this._destroyed = !0),
            (function (t, e) {
              const n = t._def,
                s = new Set();
              for (let i = 0; i < n.providers.length; i++)
                if (131072 & n.providers[i].flags) {
                  const e = t._providers[i];
                  if (e && e !== us) {
                    const t = e.ngOnDestroy;
                    'function' != typeof t ||
                      s.has(e) ||
                      (t.apply(e), s.add(e));
                  }
                }
            })(this),
            this._destroyListeners.forEach((t) => t());
        }
        onDestroy(t) {
          this._destroyListeners.push(t);
        }
      }
      const js = Ln(Ye),
        Vs = Ln(tn),
        Hs = Ln(Ge),
        Bs = Ln(Sn),
        Us = Ln(bn),
        $s = Ln(_e),
        zs = Ln(Se),
        Ws = Ln(St);
      function qs(t, e, n, s, i, r, o, a) {
        const l = [];
        if (o)
          for (let h in o) {
            const [t, e] = o[h];
            l[t] = {
              flags: 8,
              name: h,
              nonMinifiedName: e,
              ns: null,
              securityContext: null,
              suffix: null,
            };
          }
        const c = [];
        if (a)
          for (let h in a)
            c.push({ type: 1, propName: h, target: null, eventName: a[h] });
        return Zs(t, (e |= 16384), n, s, i, i, r, l, c);
      }
      function Ks(t, e, n, s, i) {
        return Zs(-1, t, e, 0, n, s, i);
      }
      function Zs(t, e, n, s, i, r, o, a, l) {
        const { matchedQueries: c, references: h, matchedQueryIds: u } = Xn(n);
        l || (l = []), a || (a = []), (r = mt(r));
        const d = Jn(o, dt(i));
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: t,
          flags: e,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: c,
          matchedQueryIds: u,
          references: h,
          ngContentIndex: -1,
          childCount: s,
          bindings: a,
          bindingFlags: hs(a),
          outputs: l,
          element: null,
          provider: { token: i, value: r, deps: d },
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function Gs(t, e) {
        return Js(t, e);
      }
      function Qs(t, e) {
        let n = t;
        for (; n.parent && !Gn(n); ) n = n.parent;
        return ti(n.parent, Kn(n), !0, e.provider.value, e.provider.deps);
      }
      function Ys(t, e) {
        const n = ti(
          t,
          e.parent,
          (32768 & e.flags) > 0,
          e.provider.value,
          e.provider.deps
        );
        if (e.outputs.length)
          for (let s = 0; s < e.outputs.length; s++) {
            const i = e.outputs[s],
              r = n[i.propName];
            if (!Ve(r))
              throw new Error(
                `@Output ${i.propName} not initialized in '${n.constructor.name}'.`
              );
            {
              const n = r.subscribe(Xs(t, e.parent.nodeIndex, i.eventName));
              t.disposables[e.outputIndex + s] = n.unsubscribe.bind(n);
            }
          }
        return n;
      }
      function Xs(t, e, n) {
        return (s) => Wn(t, e, n, s);
      }
      function Js(t, e) {
        const n = (8192 & e.flags) > 0,
          s = e.provider;
        switch (201347067 & e.flags) {
          case 512:
            return ti(t, e.parent, n, s.value, s.deps);
          case 1024:
            return (function (t, e, n, s, i) {
              const r = i.length;
              switch (r) {
                case 0:
                  return s();
                case 1:
                  return s(ni(t, e, n, i[0]));
                case 2:
                  return s(ni(t, e, n, i[0]), ni(t, e, n, i[1]));
                case 3:
                  return s(
                    ni(t, e, n, i[0]),
                    ni(t, e, n, i[1]),
                    ni(t, e, n, i[2])
                  );
                default:
                  const o = Array(r);
                  for (let s = 0; s < r; s++) o[s] = ni(t, e, n, i[s]);
                  return s(...o);
              }
            })(t, e.parent, n, s.value, s.deps);
          case 2048:
            return ni(t, e.parent, n, s.deps[0]);
          case 256:
            return s.value;
        }
      }
      function ti(t, e, n, s, i) {
        const r = i.length;
        switch (r) {
          case 0:
            return new s();
          case 1:
            return new s(ni(t, e, n, i[0]));
          case 2:
            return new s(ni(t, e, n, i[0]), ni(t, e, n, i[1]));
          case 3:
            return new s(
              ni(t, e, n, i[0]),
              ni(t, e, n, i[1]),
              ni(t, e, n, i[2])
            );
          default:
            const o = new Array(r);
            for (let s = 0; s < r; s++) o[s] = ni(t, e, n, i[s]);
            return new s(...o);
        }
      }
      const ei = {};
      function ni(t, e, n, s, i = Se.THROW_IF_NOT_FOUND) {
        if (8 & s.flags) return s.token;
        const r = t;
        2 & s.flags && (i = null);
        const o = s.tokenKey;
        o === $s && (n = !(!e || !e.element.componentView)),
          e && 1 & s.flags && ((n = !1), (e = e.parent));
        let a = t;
        for (; a; ) {
          if (e)
            switch (o) {
              case js:
                return Ns(si(a, e, n));
              case Vs:
                return si(a, e, n).renderer;
              case Hs:
                return new Ge(An(a, e.nodeIndex).renderElement);
              case Bs:
                return An(a, e.nodeIndex).viewContainer;
              case Us:
                if (e.element.template) return An(a, e.nodeIndex).template;
                break;
              case $s:
                return ks(si(a, e, n));
              case zs:
              case Ws:
                return Is(a, e);
              default:
                const t = (n
                  ? e.element.allProviders
                  : e.element.publicProviders)[o];
                if (t) {
                  let e = In(a, t.nodeIndex);
                  return (
                    e ||
                      ((e = { instance: Js(a, t) }),
                      (a.nodes[t.nodeIndex] = e)),
                    e.instance
                  );
                }
            }
          (n = Gn(a)), (e = Kn(a)), (a = a.parent), 4 & s.flags && (a = null);
        }
        const l = r.root.injector.get(s.token, ei);
        return l !== ei || i === ei
          ? l
          : r.root.ngModule.injector.get(s.token, i);
      }
      function si(t, e, n) {
        let s;
        if (n) s = An(t, e.nodeIndex).componentView;
        else for (s = t; s.parent && !Gn(s); ) s = s.parent;
        return s;
      }
      function ii(t, e, n, s, i, r) {
        if (32768 & n.flags) {
          const e = An(t, n.parent.nodeIndex).componentView;
          2 & e.def.flags && (e.state |= 8);
        }
        if (((e.instance[n.bindings[s].name] = i), 524288 & n.flags)) {
          r = r || {};
          const e = Me.unwrap(t.oldValues[n.bindingIndex + s]);
          r[n.bindings[s].nonMinifiedName] = new He(e, i, 0 != (2 & t.state));
        }
        return (t.oldValues[n.bindingIndex + s] = i), r;
      }
      function ri(t, e) {
        if (!(t.def.nodeFlags & e)) return;
        const n = t.def.nodes;
        let s = 0;
        for (let i = 0; i < n.length; i++) {
          const r = n[i];
          let o = r.parent;
          for (
            !o && r.flags & e && ai(t, i, r.flags & e, s++),
              0 == (r.childFlags & e) && (i += r.childCount);
            o && 1 & o.flags && i === o.nodeIndex + o.childCount;

          )
            o.directChildFlags & e && (s = oi(t, o, e, s)), (o = o.parent);
        }
      }
      function oi(t, e, n, s) {
        for (let i = e.nodeIndex + 1; i <= e.nodeIndex + e.childCount; i++) {
          const e = t.def.nodes[i];
          e.flags & n && ai(t, i, e.flags & n, s++), (i += e.childCount);
        }
        return s;
      }
      function ai(t, e, n, s) {
        const i = In(t, e);
        if (!i) return;
        const r = i.instance;
        r &&
          (Nn.setCurrentNode(t, e),
          1048576 & n && Dn(t, 512, s) && r.ngAfterContentInit(),
          2097152 & n && r.ngAfterContentChecked(),
          4194304 & n && Dn(t, 768, s) && r.ngAfterViewInit(),
          8388608 & n && r.ngAfterViewChecked(),
          131072 & n && r.ngOnDestroy());
      }
      const li = new wt('SCHEDULER_TOKEN', {
          providedIn: 'root',
          factory: () => Lt,
        }),
        ci = {},
        hi = (function () {
          var t = {
            LocaleId: 0,
            DayPeriodsFormat: 1,
            DayPeriodsStandalone: 2,
            DaysFormat: 3,
            DaysStandalone: 4,
            MonthsFormat: 5,
            MonthsStandalone: 6,
            Eras: 7,
            FirstDayOfWeek: 8,
            WeekendRange: 9,
            DateFormat: 10,
            TimeFormat: 11,
            DateTimeFormat: 12,
            NumberSymbols: 13,
            NumberFormats: 14,
            CurrencySymbol: 15,
            CurrencyName: 16,
            Currencies: 17,
            PluralCase: 18,
            ExtraData: 19,
          };
          return (
            (t[t.LocaleId] = 'LocaleId'),
            (t[t.DayPeriodsFormat] = 'DayPeriodsFormat'),
            (t[t.DayPeriodsStandalone] = 'DayPeriodsStandalone'),
            (t[t.DaysFormat] = 'DaysFormat'),
            (t[t.DaysStandalone] = 'DaysStandalone'),
            (t[t.MonthsFormat] = 'MonthsFormat'),
            (t[t.MonthsStandalone] = 'MonthsStandalone'),
            (t[t.Eras] = 'Eras'),
            (t[t.FirstDayOfWeek] = 'FirstDayOfWeek'),
            (t[t.WeekendRange] = 'WeekendRange'),
            (t[t.DateFormat] = 'DateFormat'),
            (t[t.TimeFormat] = 'TimeFormat'),
            (t[t.DateTimeFormat] = 'DateTimeFormat'),
            (t[t.NumberSymbols] = 'NumberSymbols'),
            (t[t.NumberFormats] = 'NumberFormats'),
            (t[t.CurrencySymbol] = 'CurrencySymbol'),
            (t[t.CurrencyName] = 'CurrencyName'),
            (t[t.Currencies] = 'Currencies'),
            (t[t.PluralCase] = 'PluralCase'),
            (t[t.ExtraData] = 'ExtraData'),
            t
          );
        })(),
        ui = void 0;
      var di = [
        'en',
        [['a', 'p'], ['AM', 'PM'], ui],
        [['AM', 'PM'], ui, ui],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        ],
        ui,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        ],
        ui,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini'],
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', ui, "{1} 'at' {0}", ui],
        [
          '.',
          ',',
          ';',
          '%',
          '+',
          '-',
          'E',
          '\xd7',
          '\u2030',
          '\u221e',
          'NaN',
          ':',
        ],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        '$',
        'US Dollar',
        {},
        function (t) {
          let e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === e && 0 === n ? 1 : 5;
        },
      ];
      function pi(t) {
        const e = t.toLowerCase().replace(/_/g, '-');
        let n = ci[e];
        if (n) return n;
        const s = e.split('-')[0];
        if (((n = ci[s]), n)) return n;
        if ('en' === s) return di;
        throw new Error(`Missing locale data for the locale "${t}".`);
      }
      class fi extends x {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, e, n) {
          let s,
            i = (t) => null,
            r = () => null;
          t && 'object' == typeof t
            ? ((s = this.__isAsync
                ? (e) => {
                    setTimeout(() => t.next(e));
                  }
                : (e) => {
                    t.next(e);
                  }),
              t.error &&
                (i = this.__isAsync
                  ? (e) => {
                      setTimeout(() => t.error(e));
                    }
                  : (e) => {
                      t.error(e);
                    }),
              t.complete &&
                (r = this.__isAsync
                  ? () => {
                      setTimeout(() => t.complete());
                    }
                  : () => {
                      t.complete();
                    }))
            : ((s = this.__isAsync
                ? (e) => {
                    setTimeout(() => t(e));
                  }
                : (e) => {
                    t(e);
                  }),
              e &&
                (i = this.__isAsync
                  ? (t) => {
                      setTimeout(() => e(t));
                    }
                  : (t) => {
                      e(t);
                    }),
              n &&
                (r = this.__isAsync
                  ? () => {
                      setTimeout(() => n());
                    }
                  : () => {
                      n();
                    }));
          const o = super.subscribe(s, i, r);
          return t instanceof u && t.add(o), o;
        }
      }
      function mi() {
        return this._results[Oe()]();
      }
      class gi {
        constructor() {
          (this.dirty = !0),
            (this._results = []),
            (this.changes = new fi()),
            (this.length = 0);
          const t = Oe(),
            e = gi.prototype;
          e[t] || (e[t] = mi);
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, e) {
          return this._results.reduce(t, e);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t) {
          (this._results = (function t(e, n) {
            void 0 === n && (n = e);
            for (let s = 0; s < e.length; s++) {
              let i = e[s];
              Array.isArray(i)
                ? (n === e && (n = e.slice(0, s)), t(i, n))
                : n !== e && n.push(i);
            }
            return n;
          })(t)),
            (this.dirty = !1),
            (this.length = this._results.length),
            (this.last = this._results[this.length - 1]),
            (this.first = this._results[0]);
        }
        notifyOnChanges() {
          this.changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      const yi = new wt('Application Initializer');
      class _i {
        constructor(t) {
          (this.appInits = t),
            (this.initialized = !1),
            (this.done = !1),
            (this.donePromise = new Promise((t, e) => {
              (this.resolve = t), (this.reject = e);
            }));
        }
        runInitializers() {
          if (this.initialized) return;
          const t = [],
            e = () => {
              (this.done = !0), this.resolve();
            };
          if (this.appInits)
            for (let n = 0; n < this.appInits.length; n++) {
              const e = this.appInits[n]();
              je(e) && t.push(e);
            }
          Promise.all(t)
            .then(() => {
              e();
            })
            .catch((t) => {
              this.reject(t);
            }),
            0 === t.length && e(),
            (this.initialized = !0);
        }
      }
      const vi = new wt('AppId');
      function bi() {
        return `${wi()}${wi()}${wi()}`;
      }
      function wi() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Si = new wt('Platform Initializer'),
        Ei = new wt('Platform ID'),
        Ci = new wt('appBootstrapListener');
      class xi {
        log(t) {
          console.log(t);
        }
        warn(t) {
          console.warn(t);
        }
      }
      const Ti = new wt('LocaleId');
      function ki() {
        throw new Error('Runtime compiler is not loaded');
      }
      const Di = ki,
        Ri = ki,
        Ai = ki,
        Ii = ki;
      class Oi {
        constructor() {
          (this.compileModuleSync = Di),
            (this.compileModuleAsync = Ri),
            (this.compileModuleAndAllComponentsSync = Ai),
            (this.compileModuleAndAllComponentsAsync = Ii);
        }
        clearCache() {}
        clearCacheFor(t) {}
        getModuleId(t) {}
      }
      class Pi {}
      let Ni, Mi;
      function Fi() {
        const t = bt.wtf;
        return !(!t || ((Ni = t.trace), !Ni) || ((Mi = Ni.events), 0));
      }
      const Li = Fi();
      function ji(t, e) {
        return null;
      }
      const Vi = Li
          ? function (t, e = null) {
              return Mi.createScope(t, e);
            }
          : (t, e) => ji,
        Hi = Li
          ? function (t, e) {
              return Ni.leaveScope(t, e), e;
            }
          : (t, e) => e,
        Bi = (() => Promise.resolve(0))();
      function Ui(t) {
        'undefined' == typeof Zone
          ? Bi.then(() => {
              t && t.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', t);
      }
      class $i {
        constructor({ enableLongStackTrace: t = !1 }) {
          if (
            ((this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new fi(!1)),
            (this.onMicrotaskEmpty = new fi(!1)),
            (this.onStable = new fi(!1)),
            (this.onError = new fi(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          var e;
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec &&
              (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            ((e = this)._inner = e._inner.fork({
              name: 'angular',
              properties: { isAngularZone: !0 },
              onInvokeTask: (t, n, s, i, r, o) => {
                try {
                  return Ki(e), t.invokeTask(s, i, r, o);
                } finally {
                  Zi(e);
                }
              },
              onInvoke: (t, n, s, i, r, o, a) => {
                try {
                  return Ki(e), t.invoke(s, i, r, o, a);
                } finally {
                  Zi(e);
                }
              },
              onHasTask: (t, n, s, i) => {
                t.hasTask(s, i),
                  n === s &&
                    ('microTask' == i.change
                      ? ((e.hasPendingMicrotasks = i.microTask), qi(e))
                      : 'macroTask' == i.change &&
                        (e.hasPendingMacrotasks = i.macroTask));
              },
              onHandleError: (t, n, s, i) => (
                t.handleError(s, i),
                e.runOutsideAngular(() => e.onError.emit(i)),
                !1
              ),
            }));
        }
        static isInAngularZone() {
          return !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!$i.isInAngularZone())
            throw new Error('Expected to be in Angular Zone, but it is not!');
        }
        static assertNotInAngularZone() {
          if ($i.isInAngularZone())
            throw new Error('Expected to not be in Angular Zone, but it is!');
        }
        run(t, e, n) {
          return this._inner.run(t, e, n);
        }
        runTask(t, e, n, s) {
          const i = this._inner,
            r = i.scheduleEventTask('NgZoneEvent: ' + s, t, Wi, zi, zi);
          try {
            return i.runTask(r, e, n);
          } finally {
            i.cancelTask(r);
          }
        }
        runGuarded(t, e, n) {
          return this._inner.runGuarded(t, e, n);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      function zi() {}
      const Wi = {};
      function qi(t) {
        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
          try {
            t._nesting++, t.onMicrotaskEmpty.emit(null);
          } finally {
            if ((t._nesting--, !t.hasPendingMicrotasks))
              try {
                t.runOutsideAngular(() => t.onStable.emit(null));
              } finally {
                t.isStable = !0;
              }
          }
      }
      function Ki(t) {
        t._nesting++,
          t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
      }
      function Zi(t) {
        t._nesting--, qi(t);
      }
      class Gi {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new fi()),
            (this.onMicrotaskEmpty = new fi()),
            (this.onStable = new fi()),
            (this.onError = new fi());
        }
        run(t) {
          return t();
        }
        runGuarded(t) {
          return t();
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t) {
          return t();
        }
      }
      class Qi {
        constructor(t) {
          (this._ngZone = t),
            (this._pendingCount = 0),
            (this._isZoneStable = !0),
            (this._didWork = !1),
            (this._callbacks = []),
            (this.taskTrackingZone = null),
            this._watchAngularEvents(),
            t.run(() => {
              this.taskTrackingZone =
                'undefined' == typeof Zone
                  ? null
                  : Zone.current.get('TaskTrackingZone');
            });
        }
        _watchAngularEvents() {
          this._ngZone.onUnstable.subscribe({
            next: () => {
              (this._didWork = !0), (this._isZoneStable = !1);
            },
          }),
            this._ngZone.runOutsideAngular(() => {
              this._ngZone.onStable.subscribe({
                next: () => {
                  $i.assertNotInAngularZone(),
                    Ui(() => {
                      (this._isZoneStable = !0), this._runCallbacksIfReady();
                    });
                },
              });
            });
        }
        increasePendingRequestCount() {
          return (
            (this._pendingCount += 1), (this._didWork = !0), this._pendingCount
          );
        }
        decreasePendingRequestCount() {
          if (((this._pendingCount -= 1), this._pendingCount < 0))
            throw new Error('pending async requests below zero');
          return this._runCallbacksIfReady(), this._pendingCount;
        }
        isStable() {
          return (
            this._isZoneStable &&
            0 === this._pendingCount &&
            !this._ngZone.hasPendingMacrotasks
          );
        }
        _runCallbacksIfReady() {
          if (this.isStable())
            Ui(() => {
              for (; 0 !== this._callbacks.length; ) {
                let t = this._callbacks.pop();
                clearTimeout(t.timeoutId), t.doneCb(this._didWork);
              }
              this._didWork = !1;
            });
          else {
            let t = this.getPendingTasks();
            (this._callbacks = this._callbacks.filter(
              (e) =>
                !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1)
            )),
              (this._didWork = !0);
          }
        }
        getPendingTasks() {
          return this.taskTrackingZone
            ? this.taskTrackingZone.macroTasks.map((t) => ({
                source: t.source,
                creationLocation: t.creationLocation,
                data: t.data,
              }))
            : [];
        }
        addCallback(t, e, n) {
          let s = -1;
          e &&
            e > 0 &&
            (s = setTimeout(() => {
              (this._callbacks = this._callbacks.filter(
                (t) => t.timeoutId !== s
              )),
                t(this._didWork, this.getPendingTasks());
            }, e)),
            this._callbacks.push({ doneCb: t, timeoutId: s, updateCb: n });
        }
        whenStable(t, e, n) {
          if (n && !this.taskTrackingZone)
            throw new Error(
              'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
            );
          this.addCallback(t, e, n), this._runCallbacksIfReady();
        }
        getPendingRequestCount() {
          return this._pendingCount;
        }
        findProviders(t, e, n) {
          return [];
        }
      }
      class Yi {
        constructor() {
          (this._applications = new Map()), tr.addToWindow(this);
        }
        registerApplication(t, e) {
          this._applications.set(t, e);
        }
        unregisterApplication(t) {
          this._applications.delete(t);
        }
        unregisterAllApplications() {
          this._applications.clear();
        }
        getTestability(t) {
          return this._applications.get(t) || null;
        }
        getAllTestabilities() {
          return Array.from(this._applications.values());
        }
        getAllRootElements() {
          return Array.from(this._applications.keys());
        }
        findTestabilityInTree(t, e = !0) {
          return tr.findTestabilityInTree(this, t, e);
        }
      }
      class Xi {
        addToWindow(t) {}
        findTestabilityInTree(t, e, n) {
          return null;
        }
      }
      let Ji,
        tr = new Xi();
      const er = new wt('AllowMultipleToken');
      class nr {
        constructor(t, e) {
          (this.name = t), (this.token = e);
        }
      }
      function sr(t, e, n = []) {
        const s = 'Platform: ' + e,
          i = new wt(s);
        return (e = []) => {
          let r = ir();
          if (!r || r.injector.get(er, !1))
            if (t) t(n.concat(e).concat({ provide: i, useValue: !0 }));
            else {
              const t = n.concat(e).concat({ provide: i, useValue: !0 });
              !(function (t) {
                if (Ji && !Ji.destroyed && !Ji.injector.get(er, !1))
                  throw new Error(
                    'There can be only one platform. Destroy the previous one to create a new one.'
                  );
                Ji = t.get(rr);
                const e = t.get(Si, null);
                e && e.forEach((t) => t());
              })(Se.create({ providers: t, name: s }));
            }
          return (function (t) {
            const e = ir();
            if (!e) throw new Error('No platform exists!');
            if (!e.injector.get(t, null))
              throw new Error(
                'A platform with a different configuration has been created. Please destroy it first.'
              );
            return e;
          })(i);
        };
      }
      function ir() {
        return Ji && !Ji.destroyed ? Ji : null;
      }
      class rr {
        constructor(t) {
          (this._injector = t),
            (this._modules = []),
            (this._destroyListeners = []),
            (this._destroyed = !1);
        }
        bootstrapModuleFactory(t, e) {
          const n = (function (t) {
              let e;
              return (
                (e =
                  'noop' === t
                    ? new Gi()
                    : ('zone.js' === t ? void 0 : t) ||
                      new $i({ enableLongStackTrace: zt() })),
                e
              );
            })(e ? e.ngZone : void 0),
            s = [{ provide: $i, useValue: n }];
          return n.run(() => {
            const e = Se.create({
                providers: s,
                parent: this.injector,
                name: t.moduleType.name,
              }),
              i = t.create(e),
              r = i.injector.get(Bt, null);
            if (!r)
              throw new Error(
                'No ErrorHandler. Is platform module (BrowserModule) included?'
              );
            return (
              i.onDestroy(() => lr(this._modules, i)),
              n.runOutsideAngular(() =>
                n.onError.subscribe({
                  next: (t) => {
                    r.handleError(t);
                  },
                })
              ),
              (function (t, e, n) {
                try {
                  const s = n();
                  return je(s)
                    ? s.catch((n) => {
                        throw (e.runOutsideAngular(() => t.handleError(n)), n);
                      })
                    : s;
                } catch (s) {
                  throw (e.runOutsideAngular(() => t.handleError(s)), s);
                }
              })(r, n, () => {
                const t = i.injector.get(_i);
                return (
                  t.runInitializers(),
                  t.donePromise.then(() => (this._moduleDoBootstrap(i), i))
                );
              })
            );
          });
        }
        bootstrapModule(t, e = []) {
          const n = or({}, e);
          return (function (t, e, n) {
            return t.get(Pi).createCompiler([e]).compileModuleAsync(n);
          })(this.injector, n, t).then((t) =>
            this.bootstrapModuleFactory(t, n)
          );
        }
        _moduleDoBootstrap(t) {
          const e = t.injector.get(ar);
          if (t._bootstrapComponents.length > 0)
            t._bootstrapComponents.forEach((t) => e.bootstrap(t));
          else {
            if (!t.instance.ngDoBootstrap)
              throw new Error(
                `The module ${dt(
                  t.instance.constructor
                )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`
              );
            t.instance.ngDoBootstrap(e);
          }
          this._modules.push(t);
        }
        onDestroy(t) {
          this._destroyListeners.push(t);
        }
        get injector() {
          return this._injector;
        }
        destroy() {
          if (this._destroyed)
            throw new Error('The platform has already been destroyed!');
          this._modules.slice().forEach((t) => t.destroy()),
            this._destroyListeners.forEach((t) => t()),
            (this._destroyed = !0);
        }
        get destroyed() {
          return this._destroyed;
        }
      }
      function or(t, e) {
        return Array.isArray(e) ? e.reduce(or, t) : Object.assign({}, t, e);
      }
      let ar = (() => {
        class t {
          constructor(t, e, n, s, i, r) {
            (this._zone = t),
              (this._console = e),
              (this._injector = n),
              (this._exceptionHandler = s),
              (this._componentFactoryResolver = i),
              (this._initStatus = r),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._enforceNoNewChanges = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._enforceNoNewChanges = zt()),
              this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                },
              });
            const o = new b((t) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    t.next(this._stable), t.complete();
                  });
              }),
              a = new b((t) => {
                let e;
                this._zone.runOutsideAngular(() => {
                  e = this._zone.onStable.subscribe(() => {
                    $i.assertNotInAngularZone(),
                      Ui(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), t.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  $i.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        t.next(!1);
                      }));
                });
                return () => {
                  e.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = K(
              o,
              a.pipe((t) => {
                return Z()(
                  ((e = tt),
                  function (t) {
                    let n;
                    n =
                      'function' == typeof e
                        ? e
                        : function () {
                            return e;
                          };
                    const s = Object.create(t, X);
                    return (s.source = t), (s.subjectFactory = n), s;
                  })(t)
                );
                var e;
              })
            );
          }
          bootstrap(t, e) {
            if (!this._initStatus.done)
              throw new Error(
                'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
              );
            let n;
            (n =
              t instanceof Be
                ? t
                : this._componentFactoryResolver.resolveComponentFactory(t)),
              this.componentTypes.push(n.componentType);
            const s = n instanceof Ke ? null : this._injector.get(Ot),
              i = n.create(Se.NULL, [], e || n.selector, s);
            i.onDestroy(() => {
              this._unloadComponent(i);
            });
            const r = i.injector.get(Qi, null);
            return (
              r &&
                i.injector
                  .get(Yi)
                  .registerApplication(i.location.nativeElement, r),
              this._loadComponent(i),
              zt() &&
                this._console.log(
                  'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
                ),
              i
            );
          }
          tick() {
            if (this._runningTick)
              throw new Error('ApplicationRef.tick is called recursively');
            const e = t._tickScope();
            try {
              this._runningTick = !0;
              for (let t of this._views) t.detectChanges();
              if (this._enforceNoNewChanges)
                for (let t of this._views) t.checkNoChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(n)
              );
            } finally {
              (this._runningTick = !1), Hi(e);
            }
          }
          attachView(t) {
            const e = t;
            this._views.push(e), e.attachToAppRef(this);
          }
          detachView(t) {
            const e = t;
            lr(this._views, e), e.detachFromAppRef();
          }
          _loadComponent(t) {
            this.attachView(t.hostView),
              this.tick(),
              this.components.push(t),
              this._injector
                .get(Ci, [])
                .concat(this._bootstrapListeners)
                .forEach((e) => e(t));
          }
          _unloadComponent(t) {
            this.detachView(t.hostView), lr(this.components, t);
          }
          ngOnDestroy() {
            this._views.slice().forEach((t) => t.destroy());
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (t._tickScope = Vi('ApplicationRef#tick()')), t;
      })();
      function lr(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      class cr {}
      class hr {}
      const ur = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' };
      class dr {
        constructor(t, e) {
          (this._compiler = t), (this._config = e || ur);
        }
        load(t) {
          return this._compiler instanceof Oi
            ? this.loadFactory(t)
            : this.loadAndCompile(t);
        }
        loadAndCompile(t) {
          let [e, s] = t.split('#');
          return (
            void 0 === s && (s = 'default'),
            n('crnd')(e)
              .then((t) => t[s])
              .then((t) => pr(t, e, s))
              .then((t) => this._compiler.compileModuleAsync(t))
          );
        }
        loadFactory(t) {
          let [e, s] = t.split('#'),
            i = 'NgFactory';
          return (
            void 0 === s && ((s = 'default'), (i = '')),
            n('crnd')(
              this._config.factoryPathPrefix +
                e +
                this._config.factoryPathSuffix
            )
              .then((t) => t[s + i])
              .then((t) => pr(t, e, s))
          );
        }
      }
      function pr(t, e, n) {
        if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
        return t;
      }
      class fr {
        constructor(t, e) {
          (this.name = t), (this.callback = e);
        }
      }
      class mr {
        constructor(t, e, n) {
          (this.listeners = []),
            (this.parent = null),
            (this._debugContext = n),
            (this.nativeNode = t),
            e && e instanceof gr && e.addChild(this);
        }
        get injector() {
          return this._debugContext.injector;
        }
        get componentInstance() {
          return this._debugContext.component;
        }
        get context() {
          return this._debugContext.context;
        }
        get references() {
          return this._debugContext.references;
        }
        get providerTokens() {
          return this._debugContext.providerTokens;
        }
      }
      class gr extends mr {
        constructor(t, e, n) {
          super(t, e, n),
            (this.properties = {}),
            (this.attributes = {}),
            (this.classes = {}),
            (this.styles = {}),
            (this.childNodes = []),
            (this.nativeElement = t);
        }
        addChild(t) {
          t && (this.childNodes.push(t), (t.parent = this));
        }
        removeChild(t) {
          const e = this.childNodes.indexOf(t);
          -1 !== e && ((t.parent = null), this.childNodes.splice(e, 1));
        }
        insertChildrenAfter(t, e) {
          const n = this.childNodes.indexOf(t);
          -1 !== n &&
            (this.childNodes.splice(n + 1, 0, ...e),
            e.forEach((e) => {
              e.parent && e.parent.removeChild(e), (t.parent = this);
            }));
        }
        insertBefore(t, e) {
          const n = this.childNodes.indexOf(t);
          -1 === n
            ? this.addChild(e)
            : (e.parent && e.parent.removeChild(e),
              (e.parent = this),
              this.childNodes.splice(n, 0, e));
        }
        query(t) {
          return this.queryAll(t)[0] || null;
        }
        queryAll(t) {
          const e = [];
          return (
            (function t(e, n, s) {
              e.childNodes.forEach((e) => {
                e instanceof gr && (n(e) && s.push(e), t(e, n, s));
              });
            })(this, t, e),
            e
          );
        }
        queryAllNodes(t) {
          const e = [];
          return (
            (function t(e, n, s) {
              e instanceof gr &&
                e.childNodes.forEach((e) => {
                  n(e) && s.push(e), e instanceof gr && t(e, n, s);
                });
            })(this, t, e),
            e
          );
        }
        get children() {
          return this.childNodes.filter((t) => t instanceof gr);
        }
        triggerEventHandler(t, e) {
          this.listeners.forEach((n) => {
            n.name == t && n.callback(e);
          });
        }
      }
      const yr = new Map(),
        _r = function (t) {
          return yr.get(t) || null;
        };
      function vr(t) {
        yr.set(t.nativeNode, t);
      }
      const br = sr(null, 'core', [
        { provide: Ei, useValue: 'unknown' },
        { provide: rr, deps: [Se] },
        { provide: Yi, deps: [] },
        { provide: xi, deps: [] },
      ]);
      function wr() {
        return _n;
      }
      function Sr() {
        return vn;
      }
      function Er(t) {
        return t || 'en-US';
      }
      function Cr(t) {
        let e = [];
        return (
          t.onStable.subscribe(() => {
            for (; e.length; ) e.pop()();
          }),
          function (t) {
            e.push(t);
          }
        );
      }
      class xr {
        constructor(t) {}
      }
      function Tr(t, e, n, s, i, r) {
        t |= 1;
        const { matchedQueries: o, references: a, matchedQueryIds: l } = Xn(e);
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          flags: t,
          checkIndex: -1,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: o,
          matchedQueryIds: l,
          references: a,
          ngContentIndex: n,
          childCount: s,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: {
            ns: null,
            name: null,
            attrs: null,
            template: r ? ns(r) : null,
            componentProvider: null,
            componentView: null,
            componentRendererType: null,
            publicProviders: null,
            allProviders: null,
            handleEvent: i || Mn,
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function kr(t, e, n, s, i, r, o = [], a, l, c, h, u) {
        c || (c = Mn);
        const { matchedQueries: d, references: p, matchedQueryIds: f } = Xn(n);
        let m = null,
          g = null;
        r && ([m, g] = cs(r)), (a = a || []);
        const y = new Array(a.length);
        for (let b = 0; b < a.length; b++) {
          const [t, e, n] = a[b],
            [s, i] = cs(e);
          let r = void 0,
            o = void 0;
          switch (15 & t) {
            case 4:
              o = n;
              break;
            case 1:
            case 8:
              r = n;
          }
          y[b] = {
            flags: t,
            ns: s,
            name: i,
            nonMinifiedName: i,
            securityContext: r,
            suffix: o,
          };
        }
        l = l || [];
        const _ = new Array(l.length);
        for (let b = 0; b < l.length; b++) {
          const [t, e] = l[b];
          _[b] = { type: 0, target: t, eventName: e, propName: null };
        }
        const v = (o = o || []).map(([t, e]) => {
          const [n, s] = cs(t);
          return [n, s, e];
        });
        return (
          (u = (function (t) {
            if (t && '$$undefined' === t.id) {
              const e =
                (null != t.encapsulation && t.encapsulation !== Ft.None) ||
                t.styles.length ||
                Object.keys(t.data).length;
              t.id = e ? 'c' + Vn++ : '$$empty';
            }
            return t && '$$empty' === t.id && (t = null), t || null;
          })(u)),
          h && (e |= 33554432),
          {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: t,
            flags: (e |= 1),
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: d,
            matchedQueryIds: f,
            references: p,
            ngContentIndex: s,
            childCount: i,
            bindings: y,
            bindingFlags: hs(y),
            outputs: _,
            element: {
              ns: m,
              name: g,
              attrs: v,
              template: null,
              componentProvider: null,
              componentView: h || null,
              componentRendererType: u,
              publicProviders: null,
              allProviders: null,
              handleEvent: c || Mn,
            },
            provider: null,
            text: null,
            query: null,
            ngContent: null,
          }
        );
      }
      function Dr(t, e, n) {
        const s = n.element,
          i = t.root.selectorOrNode,
          r = t.renderer;
        let o;
        if (t.parent || !i) {
          o = s.name ? r.createElement(s.name, s.ns) : r.createComment('');
          const i = ts(t, e, n);
          i && r.appendChild(i, o);
        } else
          o = r.selectRootElement(
            i,
            !!s.componentRendererType &&
              s.componentRendererType.encapsulation === Ft.ShadowDom
          );
        if (s.attrs)
          for (let a = 0; a < s.attrs.length; a++) {
            const [t, e, n] = s.attrs[a];
            r.setAttribute(o, e, n, t);
          }
        return o;
      }
      function Rr(t, e, n, s) {
        for (let o = 0; o < n.outputs.length; o++) {
          const a = n.outputs[o],
            l = Ar(
              t,
              n.nodeIndex,
              ((r = a.eventName), (i = a.target) ? `${i}:${r}` : r)
            );
          let c = a.target,
            h = t;
          'component' === a.target && ((c = null), (h = e));
          const u = h.renderer.listen(c || s, a.eventName, l);
          t.disposables[n.outputIndex + o] = u;
        }
        var i, r;
      }
      function Ar(t, e, n) {
        return (s) => Wn(t, e, n, s);
      }
      function Ir(t, e, n, s) {
        if (!Bn(t, e, n, s)) return !1;
        const i = e.bindings[n],
          r = An(t, e.nodeIndex),
          o = r.renderElement,
          a = i.name;
        switch (15 & i.flags) {
          case 1:
            !(function (t, e, n, s, i, r) {
              const o = e.securityContext;
              let a = o ? t.root.sanitizer.sanitize(o, r) : r;
              a = null != a ? a.toString() : null;
              const l = t.renderer;
              null != r
                ? l.setAttribute(n, i, a, s)
                : l.removeAttribute(n, i, s);
            })(t, i, o, i.ns, a, s);
            break;
          case 2:
            !(function (t, e, n, s) {
              const i = t.renderer;
              s ? i.addClass(e, n) : i.removeClass(e, n);
            })(t, o, a, s);
            break;
          case 4:
            !(function (t, e, n, s, i) {
              let r = t.root.sanitizer.sanitize(de.STYLE, i);
              if (null != r) {
                r = r.toString();
                const t = e.suffix;
                null != t && (r += t);
              } else r = null;
              const o = t.renderer;
              null != r ? o.setStyle(n, s, r) : o.removeStyle(n, s);
            })(t, i, o, a, s);
            break;
          case 8:
            !(function (t, e, n, s, i) {
              const r = e.securityContext;
              let o = r ? t.root.sanitizer.sanitize(r, i) : i;
              t.renderer.setProperty(n, s, o);
            })(
              33554432 & e.flags && 32 & i.flags ? r.componentView : t,
              i,
              o,
              a,
              s
            );
        }
        return !0;
      }
      function Or(t, e, n) {
        let s = [];
        for (let i in n) s.push({ propName: i, bindingType: n[i] });
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: -1,
          flags: t,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          ngContentIndex: -1,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          childCount: 0,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: { id: e, filterId: Yn(e), bindings: s },
          ngContent: null,
        };
      }
      function Pr(t) {
        const e = t.def.nodeMatchedQueries;
        for (; t.parent && Qn(t); ) {
          let n = t.parentNodeDef;
          t = t.parent;
          const s = n.nodeIndex + n.childCount;
          for (let i = 0; i <= s; i++) {
            const s = t.def.nodes[i];
            67108864 & s.flags &&
              536870912 & s.flags &&
              (s.query.filterId & e) === s.query.filterId &&
              Pn(t, i).setDirty(),
              (!(1 & s.flags && i + s.childCount < n.nodeIndex) &&
                67108864 & s.childFlags &&
                536870912 & s.childFlags) ||
                (i += s.childCount);
          }
        }
        if (134217728 & t.def.nodeFlags)
          for (let n = 0; n < t.def.nodes.length; n++) {
            const e = t.def.nodes[n];
            134217728 & e.flags && 536870912 & e.flags && Pn(t, n).setDirty(),
              (n += e.childCount);
          }
      }
      function Nr(t, e) {
        const n = Pn(t, e.nodeIndex);
        if (!n.dirty) return;
        let s,
          i = void 0;
        if (67108864 & e.flags) {
          const n = e.parent.parent;
          (i = Mr(t, n.nodeIndex, n.nodeIndex + n.childCount, e.query, [])),
            (s = In(t, e.parent.nodeIndex).instance);
        } else
          134217728 & e.flags &&
            ((i = Mr(t, 0, t.def.nodes.length - 1, e.query, [])),
            (s = t.component));
        n.reset(i);
        const r = e.query.bindings;
        let o = !1;
        for (let a = 0; a < r.length; a++) {
          const t = r[a];
          let e;
          switch (t.bindingType) {
            case 0:
              e = n.first;
              break;
            case 1:
              (e = n), (o = !0);
          }
          s[t.propName] = e;
        }
        o && n.notifyOnChanges();
      }
      function Mr(t, e, n, s, i) {
        for (let r = e; r <= n; r++) {
          const e = t.def.nodes[r],
            n = e.matchedQueries[s.id];
          if (
            (null != n && i.push(Fr(t, e, n)),
            1 & e.flags &&
              e.element.template &&
              (e.element.template.nodeMatchedQueries & s.filterId) ===
                s.filterId)
          ) {
            const n = An(t, r);
            if (
              ((e.childMatchedQueries & s.filterId) === s.filterId &&
                (Mr(t, r + 1, r + e.childCount, s, i), (r += e.childCount)),
              16777216 & e.flags)
            ) {
              const t = n.viewContainer._embeddedViews;
              for (let e = 0; e < t.length; e++) {
                const r = t[e],
                  o = qn(r);
                o && o === n && Mr(r, 0, r.def.nodes.length - 1, s, i);
              }
            }
            const o = n.template._projectedViews;
            if (o)
              for (let t = 0; t < o.length; t++) {
                const e = o[t];
                Mr(e, 0, e.def.nodes.length - 1, s, i);
              }
          }
          (e.childMatchedQueries & s.filterId) !== s.filterId &&
            (r += e.childCount);
        }
        return i;
      }
      function Fr(t, e, n) {
        if (null != n)
          switch (n) {
            case 1:
              return An(t, e.nodeIndex).renderElement;
            case 0:
              return new Ge(An(t, e.nodeIndex).renderElement);
            case 2:
              return An(t, e.nodeIndex).template;
            case 3:
              return An(t, e.nodeIndex).viewContainer;
            case 4:
              return In(t, e.nodeIndex).instance;
          }
      }
      function Lr(t, e) {
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: -1,
          flags: 8,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: t,
          childCount: 0,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: null,
          ngContent: { index: e },
        };
      }
      function jr(t, e, n) {
        const s = ts(t, e, n);
        s && rs(t, n.ngContent.index, 1, s, null, void 0);
      }
      function Vr(t, e) {
        const n = Object.keys(e),
          s = n.length,
          i = new Array(s);
        for (let r = 0; r < s; r++) {
          const t = n[r];
          i[e[t]] = t;
        }
        return (function (t, e, n) {
          const s = new Array(n.length);
          for (let i = 0; i < n.length; i++) {
            const t = n[i];
            s[i] = {
              flags: 8,
              name: t,
              ns: null,
              nonMinifiedName: t,
              securityContext: null,
              suffix: null,
            };
          }
          return {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: e,
            flags: 64,
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: {},
            matchedQueryIds: 0,
            references: {},
            ngContentIndex: -1,
            childCount: 0,
            bindings: s,
            bindingFlags: hs(s),
            outputs: [],
            element: null,
            provider: null,
            text: null,
            query: null,
            ngContent: null,
          };
        })(0, t, i);
      }
      function Hr(t, e, n) {
        const s = new Array(n.length - 1);
        for (let i = 1; i < n.length; i++)
          s[i - 1] = {
            flags: 8,
            name: null,
            ns: null,
            nonMinifiedName: null,
            securityContext: null,
            suffix: n[i],
          };
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: t,
          flags: 2,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: e,
          childCount: 0,
          bindings: s,
          bindingFlags: 8,
          outputs: [],
          element: null,
          provider: null,
          text: { prefix: n[0] },
          query: null,
          ngContent: null,
        };
      }
      function Br(t, e, n) {
        let s;
        const i = t.renderer;
        s = i.createText(n.text.prefix);
        const r = ts(t, e, n);
        return r && i.appendChild(r, s), { renderText: s };
      }
      function Ur(t, e) {
        return (null != t ? t.toString() : '') + e.suffix;
      }
      function $r(t, e, n, s) {
        let i = 0,
          r = 0,
          o = 0,
          a = 0,
          l = 0,
          c = null,
          h = null,
          u = !1,
          d = !1,
          p = null;
        for (let f = 0; f < e.length; f++) {
          const t = e[f];
          if (
            ((t.nodeIndex = f),
            (t.parent = c),
            (t.bindingIndex = i),
            (t.outputIndex = r),
            (t.renderParent = h),
            (o |= t.flags),
            (l |= t.matchedQueryIds),
            t.element)
          ) {
            const e = t.element;
            (e.publicProviders = c
              ? c.element.publicProviders
              : Object.create(null)),
              (e.allProviders = e.publicProviders),
              (u = !1),
              (d = !1),
              t.element.template &&
                (l |= t.element.template.nodeMatchedQueries);
          }
          if (
            (Wr(c, t, e.length),
            (i += t.bindings.length),
            (r += t.outputs.length),
            !h && 3 & t.flags && (p = t),
            20224 & t.flags)
          ) {
            u ||
              ((u = !0),
              (c.element.publicProviders = Object.create(
                c.element.publicProviders
              )),
              (c.element.allProviders = c.element.publicProviders));
            const e = 0 != (32768 & t.flags);
            0 == (8192 & t.flags) || e
              ? (c.element.publicProviders[Ln(t.provider.token)] = t)
              : (d ||
                  ((d = !0),
                  (c.element.allProviders = Object.create(
                    c.element.publicProviders
                  ))),
                (c.element.allProviders[Ln(t.provider.token)] = t)),
              e && (c.element.componentProvider = t);
          }
          if (
            (c
              ? ((c.childFlags |= t.flags),
                (c.directChildFlags |= t.flags),
                (c.childMatchedQueries |= t.matchedQueryIds),
                t.element &&
                  t.element.template &&
                  (c.childMatchedQueries |=
                    t.element.template.nodeMatchedQueries))
              : (a |= t.flags),
            t.childCount > 0)
          )
            (c = t), zr(t) || (h = t);
          else
            for (; c && f === c.nodeIndex + c.childCount; ) {
              const t = c.parent;
              t &&
                ((t.childFlags |= c.childFlags),
                (t.childMatchedQueries |= c.childMatchedQueries)),
                (c = t),
                (h = c && zr(c) ? c.renderParent : c);
            }
        }
        return {
          factory: null,
          nodeFlags: o,
          rootNodeFlags: a,
          nodeMatchedQueries: l,
          flags: t,
          nodes: e,
          updateDirectives: n || Mn,
          updateRenderer: s || Mn,
          handleEvent: (t, n, s, i) => e[n].element.handleEvent(t, s, i),
          bindingCount: i,
          outputCount: r,
          lastRenderRootNode: p,
        };
      }
      function zr(t) {
        return 0 != (1 & t.flags) && null === t.element.name;
      }
      function Wr(t, e, n) {
        const s = e.element && e.element.template;
        if (s) {
          if (!s.lastRenderRootNode)
            throw new Error(
              'Illegal State: Embedded templates without nodes are not allowed!'
            );
          if (s.lastRenderRootNode && 16777216 & s.lastRenderRootNode.flags)
            throw new Error(
              `Illegal State: Last root node of a template can't have embedded views, at index ${e.nodeIndex}!`
            );
        }
        if (20224 & e.flags && 0 == (1 & (t ? t.flags : 0)))
          throw new Error(
            `Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ${e.nodeIndex}!`
          );
        if (e.query) {
          if (67108864 & e.flags && (!t || 0 == (16384 & t.flags)))
            throw new Error(
              `Illegal State: Content Query nodes need to be children of directives, at index ${e.nodeIndex}!`
            );
          if (134217728 & e.flags && t)
            throw new Error(
              `Illegal State: View Query nodes have to be top level nodes, at index ${e.nodeIndex}!`
            );
        }
        if (e.childCount) {
          const s = t ? t.nodeIndex + t.childCount : n - 1;
          if (e.nodeIndex <= s && e.nodeIndex + e.childCount > s)
            throw new Error(
              `Illegal State: childCount of node leads outside of parent, at index ${e.nodeIndex}!`
            );
        }
      }
      function qr(t, e, n, s) {
        const i = Gr(t.root, t.renderer, t, e, n);
        return Qr(i, t.component, s), Yr(i), i;
      }
      function Kr(t, e, n) {
        const s = Gr(t, t.renderer, null, null, e);
        return Qr(s, n, n), Yr(s), s;
      }
      function Zr(t, e, n, s) {
        const i = e.element.componentRendererType;
        let r;
        return (
          (r = i
            ? t.root.rendererFactory.createRenderer(s, i)
            : t.root.renderer),
          Gr(t.root, r, t, e.element.componentProvider, n)
        );
      }
      function Gr(t, e, n, s, i) {
        const r = new Array(i.nodes.length),
          o = i.outputCount ? new Array(i.outputCount) : null;
        return {
          def: i,
          parent: n,
          viewContainerParent: null,
          parentNodeDef: s,
          context: null,
          component: null,
          nodes: r,
          state: 13,
          root: t,
          renderer: e,
          oldValues: new Array(i.bindingCount),
          disposables: o,
          initIndex: -1,
        };
      }
      function Qr(t, e, n) {
        (t.component = e), (t.context = n);
      }
      function Yr(t) {
        let e;
        Gn(t) &&
          (e = An(t.parent, t.parentNodeDef.parent.nodeIndex).renderElement);
        const n = t.def,
          s = t.nodes;
        for (let i = 0; i < n.nodes.length; i++) {
          const r = n.nodes[i];
          let o;
          switch ((Nn.setCurrentNode(t, i), 201347067 & r.flags)) {
            case 1:
              const n = Dr(t, e, r);
              let a = void 0;
              if (33554432 & r.flags) {
                const e = ns(r.element.componentView);
                a = Nn.createComponentView(t, r, e, n);
              }
              Rr(t, a, r, n),
                (o = {
                  renderElement: n,
                  componentView: a,
                  viewContainer: null,
                  template: r.element.template ? Rs(t, r) : void 0,
                }),
                16777216 & r.flags && (o.viewContainer = xs(t, r, o));
              break;
            case 2:
              o = Br(t, e, r);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              (o = s[i]), o || 4096 & r.flags || (o = { instance: Gs(t, r) });
              break;
            case 16:
              o = { instance: Qs(t, r) };
              break;
            case 16384:
              (o = s[i]),
                o || (o = { instance: Ys(t, r) }),
                32768 & r.flags &&
                  Qr(
                    An(t, r.parent.nodeIndex).componentView,
                    o.instance,
                    o.instance
                  );
              break;
            case 32:
            case 64:
            case 128:
              o = { value: void 0 };
              break;
            case 67108864:
            case 134217728:
              o = new gi();
              break;
            case 8:
              jr(t, e, r), (o = void 0);
          }
          s[i] = o;
        }
        oo(t, ro.CreateViewNodes), ho(t, 201326592, 268435456, 0);
      }
      function Xr(t) {
        eo(t),
          Nn.updateDirectives(t, 1),
          ao(t, ro.CheckNoChanges),
          Nn.updateRenderer(t, 1),
          oo(t, ro.CheckNoChanges),
          (t.state &= -97);
      }
      function Jr(t) {
        1 & t.state ? ((t.state &= -2), (t.state |= 2)) : (t.state &= -3),
          kn(t, 0, 256),
          eo(t),
          Nn.updateDirectives(t, 0),
          ao(t, ro.CheckAndUpdate),
          ho(t, 67108864, 536870912, 0);
        let e = kn(t, 256, 512);
        ri(t, 2097152 | (e ? 1048576 : 0)),
          Nn.updateRenderer(t, 0),
          oo(t, ro.CheckAndUpdate),
          ho(t, 134217728, 536870912, 0),
          (e = kn(t, 512, 768)),
          ri(t, 8388608 | (e ? 4194304 : 0)),
          2 & t.def.flags && (t.state &= -9),
          (t.state &= -97),
          kn(t, 768, 1024);
      }
      function to(t, e, n, s, i, r, o, a, l, c, h, u, d) {
        return 0 === n
          ? (function (t, e, n, s, i, r, o, a, l, c, h, u) {
              switch (201347067 & e.flags) {
                case 1:
                  return (function (t, e, n, s, i, r, o, a, l, c, h, u) {
                    const d = e.bindings.length;
                    let p = !1;
                    return (
                      d > 0 && Ir(t, e, 0, n) && (p = !0),
                      d > 1 && Ir(t, e, 1, s) && (p = !0),
                      d > 2 && Ir(t, e, 2, i) && (p = !0),
                      d > 3 && Ir(t, e, 3, r) && (p = !0),
                      d > 4 && Ir(t, e, 4, o) && (p = !0),
                      d > 5 && Ir(t, e, 5, a) && (p = !0),
                      d > 6 && Ir(t, e, 6, l) && (p = !0),
                      d > 7 && Ir(t, e, 7, c) && (p = !0),
                      d > 8 && Ir(t, e, 8, h) && (p = !0),
                      d > 9 && Ir(t, e, 9, u) && (p = !0),
                      p
                    );
                  })(t, e, n, s, i, r, o, a, l, c, h, u);
                case 2:
                  return (function (t, e, n, s, i, r, o, a, l, c, h, u) {
                    let d = !1;
                    const p = e.bindings,
                      f = p.length;
                    if (
                      (f > 0 && Bn(t, e, 0, n) && (d = !0),
                      f > 1 && Bn(t, e, 1, s) && (d = !0),
                      f > 2 && Bn(t, e, 2, i) && (d = !0),
                      f > 3 && Bn(t, e, 3, r) && (d = !0),
                      f > 4 && Bn(t, e, 4, o) && (d = !0),
                      f > 5 && Bn(t, e, 5, a) && (d = !0),
                      f > 6 && Bn(t, e, 6, l) && (d = !0),
                      f > 7 && Bn(t, e, 7, c) && (d = !0),
                      f > 8 && Bn(t, e, 8, h) && (d = !0),
                      f > 9 && Bn(t, e, 9, u) && (d = !0),
                      d)
                    ) {
                      let d = e.text.prefix;
                      f > 0 && (d += Ur(n, p[0])),
                        f > 1 && (d += Ur(s, p[1])),
                        f > 2 && (d += Ur(i, p[2])),
                        f > 3 && (d += Ur(r, p[3])),
                        f > 4 && (d += Ur(o, p[4])),
                        f > 5 && (d += Ur(a, p[5])),
                        f > 6 && (d += Ur(l, p[6])),
                        f > 7 && (d += Ur(c, p[7])),
                        f > 8 && (d += Ur(h, p[8])),
                        f > 9 && (d += Ur(u, p[9]));
                      const m = Rn(t, e.nodeIndex).renderText;
                      t.renderer.setValue(m, d);
                    }
                    return d;
                  })(t, e, n, s, i, r, o, a, l, c, h, u);
                case 16384:
                  return (function (t, e, n, s, i, r, o, a, l, c, h, u) {
                    const d = In(t, e.nodeIndex),
                      p = d.instance;
                    let f = !1,
                      m = void 0;
                    const g = e.bindings.length;
                    return (
                      g > 0 &&
                        Hn(t, e, 0, n) &&
                        ((f = !0), (m = ii(t, d, e, 0, n, m))),
                      g > 1 &&
                        Hn(t, e, 1, s) &&
                        ((f = !0), (m = ii(t, d, e, 1, s, m))),
                      g > 2 &&
                        Hn(t, e, 2, i) &&
                        ((f = !0), (m = ii(t, d, e, 2, i, m))),
                      g > 3 &&
                        Hn(t, e, 3, r) &&
                        ((f = !0), (m = ii(t, d, e, 3, r, m))),
                      g > 4 &&
                        Hn(t, e, 4, o) &&
                        ((f = !0), (m = ii(t, d, e, 4, o, m))),
                      g > 5 &&
                        Hn(t, e, 5, a) &&
                        ((f = !0), (m = ii(t, d, e, 5, a, m))),
                      g > 6 &&
                        Hn(t, e, 6, l) &&
                        ((f = !0), (m = ii(t, d, e, 6, l, m))),
                      g > 7 &&
                        Hn(t, e, 7, c) &&
                        ((f = !0), (m = ii(t, d, e, 7, c, m))),
                      g > 8 &&
                        Hn(t, e, 8, h) &&
                        ((f = !0), (m = ii(t, d, e, 8, h, m))),
                      g > 9 &&
                        Hn(t, e, 9, u) &&
                        ((f = !0), (m = ii(t, d, e, 9, u, m))),
                      m && p.ngOnChanges(m),
                      65536 & e.flags &&
                        Dn(t, 256, e.nodeIndex) &&
                        p.ngOnInit(),
                      262144 & e.flags && p.ngDoCheck(),
                      f
                    );
                  })(t, e, n, s, i, r, o, a, l, c, h, u);
                case 32:
                case 64:
                case 128:
                  return (function (t, e, n, s, i, r, o, a, l, c, h, u) {
                    const d = e.bindings;
                    let p = !1;
                    const f = d.length;
                    if (
                      (f > 0 && Bn(t, e, 0, n) && (p = !0),
                      f > 1 && Bn(t, e, 1, s) && (p = !0),
                      f > 2 && Bn(t, e, 2, i) && (p = !0),
                      f > 3 && Bn(t, e, 3, r) && (p = !0),
                      f > 4 && Bn(t, e, 4, o) && (p = !0),
                      f > 5 && Bn(t, e, 5, a) && (p = !0),
                      f > 6 && Bn(t, e, 6, l) && (p = !0),
                      f > 7 && Bn(t, e, 7, c) && (p = !0),
                      f > 8 && Bn(t, e, 8, h) && (p = !0),
                      f > 9 && Bn(t, e, 9, u) && (p = !0),
                      p)
                    ) {
                      const p = On(t, e.nodeIndex);
                      let m;
                      switch (201347067 & e.flags) {
                        case 32:
                          (m = new Array(d.length)),
                            f > 0 && (m[0] = n),
                            f > 1 && (m[1] = s),
                            f > 2 && (m[2] = i),
                            f > 3 && (m[3] = r),
                            f > 4 && (m[4] = o),
                            f > 5 && (m[5] = a),
                            f > 6 && (m[6] = l),
                            f > 7 && (m[7] = c),
                            f > 8 && (m[8] = h),
                            f > 9 && (m[9] = u);
                          break;
                        case 64:
                          (m = {}),
                            f > 0 && (m[d[0].name] = n),
                            f > 1 && (m[d[1].name] = s),
                            f > 2 && (m[d[2].name] = i),
                            f > 3 && (m[d[3].name] = r),
                            f > 4 && (m[d[4].name] = o),
                            f > 5 && (m[d[5].name] = a),
                            f > 6 && (m[d[6].name] = l),
                            f > 7 && (m[d[7].name] = c),
                            f > 8 && (m[d[8].name] = h),
                            f > 9 && (m[d[9].name] = u);
                          break;
                        case 128:
                          const t = n;
                          switch (f) {
                            case 1:
                              m = t.transform(n);
                              break;
                            case 2:
                              m = t.transform(s);
                              break;
                            case 3:
                              m = t.transform(s, i);
                              break;
                            case 4:
                              m = t.transform(s, i, r);
                              break;
                            case 5:
                              m = t.transform(s, i, r, o);
                              break;
                            case 6:
                              m = t.transform(s, i, r, o, a);
                              break;
                            case 7:
                              m = t.transform(s, i, r, o, a, l);
                              break;
                            case 8:
                              m = t.transform(s, i, r, o, a, l, c);
                              break;
                            case 9:
                              m = t.transform(s, i, r, o, a, l, c, h);
                              break;
                            case 10:
                              m = t.transform(s, i, r, o, a, l, c, h, u);
                          }
                      }
                      p.value = m;
                    }
                    return p;
                  })(t, e, n, s, i, r, o, a, l, c, h, u);
                default:
                  throw 'unreachable';
              }
            })(t, e, s, i, r, o, a, l, c, h, u, d)
          : (function (t, e, n) {
              switch (201347067 & e.flags) {
                case 1:
                  return (function (t, e, n) {
                    let s = !1;
                    for (let i = 0; i < n.length; i++)
                      Ir(t, e, i, n[i]) && (s = !0);
                    return s;
                  })(t, e, n);
                case 2:
                  return (function (t, e, n) {
                    const s = e.bindings;
                    let i = !1;
                    for (let r = 0; r < n.length; r++)
                      Bn(t, e, r, n[r]) && (i = !0);
                    if (i) {
                      let i = '';
                      for (let t = 0; t < n.length; t++) i += Ur(n[t], s[t]);
                      i = e.text.prefix + i;
                      const r = Rn(t, e.nodeIndex).renderText;
                      t.renderer.setValue(r, i);
                    }
                    return i;
                  })(t, e, n);
                case 16384:
                  return (function (t, e, n) {
                    const s = In(t, e.nodeIndex),
                      i = s.instance;
                    let r = !1,
                      o = void 0;
                    for (let a = 0; a < n.length; a++)
                      Hn(t, e, a, n[a]) &&
                        ((r = !0), (o = ii(t, s, e, a, n[a], o)));
                    return (
                      o && i.ngOnChanges(o),
                      65536 & e.flags &&
                        Dn(t, 256, e.nodeIndex) &&
                        i.ngOnInit(),
                      262144 & e.flags && i.ngDoCheck(),
                      r
                    );
                  })(t, e, n);
                case 32:
                case 64:
                case 128:
                  return (function (t, e, n) {
                    const s = e.bindings;
                    let i = !1;
                    for (let r = 0; r < n.length; r++)
                      Bn(t, e, r, n[r]) && (i = !0);
                    if (i) {
                      const i = On(t, e.nodeIndex);
                      let r;
                      switch (201347067 & e.flags) {
                        case 32:
                          r = n;
                          break;
                        case 64:
                          r = {};
                          for (let i = 0; i < n.length; i++)
                            r[s[i].name] = n[i];
                          break;
                        case 128:
                          const t = n[0],
                            e = n.slice(1);
                          r = t.transform(...e);
                      }
                      i.value = r;
                    }
                    return i;
                  })(t, e, n);
                default:
                  throw 'unreachable';
              }
            })(t, e, s);
      }
      function eo(t) {
        const e = t.def;
        if (4 & e.nodeFlags)
          for (let n = 0; n < e.nodes.length; n++) {
            const s = e.nodes[n];
            if (4 & s.flags) {
              const e = An(t, n).template._projectedViews;
              if (e)
                for (let n = 0; n < e.length; n++) {
                  const s = e[n];
                  (s.state |= 32), zn(s, t);
                }
            } else 0 == (4 & s.childFlags) && (n += s.childCount);
          }
      }
      function no(t, e, n, s, i, r, o, a, l, c, h, u, d) {
        return (
          0 === n
            ? (function (t, e, n, s, i, r, o, a, l, c, h, u) {
                const d = e.bindings.length;
                d > 0 && Un(t, e, 0, n),
                  d > 1 && Un(t, e, 1, s),
                  d > 2 && Un(t, e, 2, i),
                  d > 3 && Un(t, e, 3, r),
                  d > 4 && Un(t, e, 4, o),
                  d > 5 && Un(t, e, 5, a),
                  d > 6 && Un(t, e, 6, l),
                  d > 7 && Un(t, e, 7, c),
                  d > 8 && Un(t, e, 8, h),
                  d > 9 && Un(t, e, 9, u);
              })(t, e, s, i, r, o, a, l, c, h, u, d)
            : (function (t, e, n) {
                for (let s = 0; s < n.length; s++) Un(t, e, s, n[s]);
              })(t, e, s),
          !1
        );
      }
      function so(t, e) {
        if (Pn(t, e.nodeIndex).dirty)
          throw Cn(
            Nn.createDebugContext(t, e.nodeIndex),
            `Query ${e.query.id} not dirty`,
            `Query ${e.query.id} dirty`,
            0 != (1 & t.state)
          );
      }
      function io(t) {
        if (!(128 & t.state)) {
          if (
            (ao(t, ro.Destroy), oo(t, ro.Destroy), ri(t, 131072), t.disposables)
          )
            for (let e = 0; e < t.disposables.length; e++) t.disposables[e]();
          !(function (t) {
            if (!(16 & t.state)) return;
            const e = qn(t);
            if (e) {
              const n = e.template._projectedViews;
              n && (Mt(n, n.indexOf(t)), Nn.dirtyParentQueries(t));
            }
          })(t),
            t.renderer.destroyNode &&
              (function (t) {
                const e = t.def.nodes.length;
                for (let n = 0; n < e; n++) {
                  const e = t.def.nodes[n];
                  1 & e.flags
                    ? t.renderer.destroyNode(An(t, n).renderElement)
                    : 2 & e.flags
                    ? t.renderer.destroyNode(Rn(t, n).renderText)
                    : (67108864 & e.flags || 134217728 & e.flags) &&
                      Pn(t, n).destroy();
                }
              })(t),
            Gn(t) && t.renderer.destroy(),
            (t.state |= 128);
        }
      }
      const ro = (function () {
        var t = {
          CreateViewNodes: 0,
          CheckNoChanges: 1,
          CheckNoChangesProjectedViews: 2,
          CheckAndUpdate: 3,
          CheckAndUpdateProjectedViews: 4,
          Destroy: 5,
        };
        return (
          (t[t.CreateViewNodes] = 'CreateViewNodes'),
          (t[t.CheckNoChanges] = 'CheckNoChanges'),
          (t[t.CheckNoChangesProjectedViews] = 'CheckNoChangesProjectedViews'),
          (t[t.CheckAndUpdate] = 'CheckAndUpdate'),
          (t[t.CheckAndUpdateProjectedViews] = 'CheckAndUpdateProjectedViews'),
          (t[t.Destroy] = 'Destroy'),
          t
        );
      })();
      function oo(t, e) {
        const n = t.def;
        if (33554432 & n.nodeFlags)
          for (let s = 0; s < n.nodes.length; s++) {
            const i = n.nodes[s];
            33554432 & i.flags
              ? lo(An(t, s).componentView, e)
              : 0 == (33554432 & i.childFlags) && (s += i.childCount);
          }
      }
      function ao(t, e) {
        const n = t.def;
        if (16777216 & n.nodeFlags)
          for (let s = 0; s < n.nodes.length; s++) {
            const i = n.nodes[s];
            if (16777216 & i.flags) {
              const n = An(t, s).viewContainer._embeddedViews;
              for (let t = 0; t < n.length; t++) lo(n[t], e);
            } else 0 == (16777216 & i.childFlags) && (s += i.childCount);
          }
      }
      function lo(t, e) {
        const n = t.state;
        switch (e) {
          case ro.CheckNoChanges:
            0 == (128 & n) &&
              (12 == (12 & n)
                ? Xr(t)
                : 64 & n && co(t, ro.CheckNoChangesProjectedViews));
            break;
          case ro.CheckNoChangesProjectedViews:
            0 == (128 & n) && (32 & n ? Xr(t) : 64 & n && co(t, e));
            break;
          case ro.CheckAndUpdate:
            0 == (128 & n) &&
              (12 == (12 & n)
                ? Jr(t)
                : 64 & n && co(t, ro.CheckAndUpdateProjectedViews));
            break;
          case ro.CheckAndUpdateProjectedViews:
            0 == (128 & n) && (32 & n ? Jr(t) : 64 & n && co(t, e));
            break;
          case ro.Destroy:
            io(t);
            break;
          case ro.CreateViewNodes:
            Yr(t);
        }
      }
      function co(t, e) {
        ao(t, e), oo(t, e);
      }
      function ho(t, e, n, s) {
        if (!(t.def.nodeFlags & e && t.def.nodeFlags & n)) return;
        const i = t.def.nodes.length;
        for (let r = 0; r < i; r++) {
          const i = t.def.nodes[r];
          if (i.flags & e && i.flags & n)
            switch ((Nn.setCurrentNode(t, i.nodeIndex), s)) {
              case 0:
                Nr(t, i);
                break;
              case 1:
                so(t, i);
            }
          (i.childFlags & e && i.childFlags & n) || (r += i.childCount);
        }
      }
      let uo = !1;
      function po(t, e, n, s, i, r) {
        const o = i.injector.get(Xe);
        return Kr(mo(t, i, o, e, n), s, r);
      }
      function fo(t, e, n, s, i, r) {
        const o = i.injector.get(Xe),
          a = mo(t, i, new Ko(o), e, n),
          l = xo(s);
        return Wo(Io.create, Kr, null, [a, l, r]);
      }
      function mo(t, e, n, s, i) {
        const r = e.injector.get(pe),
          o = e.injector.get(Bt),
          a = n.createRenderer(null, null);
        return {
          ngModule: e,
          injector: t,
          projectableNodes: s,
          selectorOrNode: i,
          sanitizer: r,
          rendererFactory: n,
          renderer: a,
          errorHandler: o,
        };
      }
      function go(t, e, n, s) {
        const i = xo(n);
        return Wo(Io.create, qr, null, [t, e, i, s]);
      }
      function yo(t, e, n, s) {
        return (
          (n = wo.get(e.element.componentProvider.provider.token) || xo(n)),
          Wo(Io.create, Zr, null, [t, e, n, s])
        );
      }
      function _o(t, e, n, s) {
        return Fs(
          t,
          e,
          n,
          (function (t) {
            const { hasOverrides: e, hasDeprecatedOverrides: n } = (function (
              t
            ) {
              let e = !1,
                n = !1;
              return (
                0 === vo.size ||
                  (t.providers.forEach((t) => {
                    const s = vo.get(t.token);
                    3840 & t.flags &&
                      s &&
                      ((e = !0), (n = n || s.deprecatedBehavior));
                  }),
                  t.modules.forEach((t) => {
                    bo.forEach((s, i) => {
                      ht(i).providedIn === t &&
                        ((e = !0), (n = n || s.deprecatedBehavior));
                    });
                  })),
                { hasOverrides: e, hasDeprecatedOverrides: n }
              );
            })(t);
            return e
              ? ((function (t) {
                  for (let e = 0; e < t.providers.length; e++) {
                    const s = t.providers[e];
                    n && (s.flags |= 4096);
                    const i = vo.get(s.token);
                    i &&
                      ((s.flags = (-3841 & s.flags) | i.flags),
                      (s.deps = Jn(i.deps)),
                      (s.value = i.value));
                  }
                  if (bo.size > 0) {
                    let e = new Set(t.modules);
                    bo.forEach((s, i) => {
                      if (e.has(ht(i).providedIn)) {
                        let e = {
                          token: i,
                          flags: s.flags | (n ? 4096 : 0),
                          deps: Jn(s.deps),
                          value: s.value,
                          index: t.providers.length,
                        };
                        t.providers.push(e), (t.providersByKey[Ln(i)] = e);
                      }
                    });
                  }
                })((t = t.factory(() => Mn))),
                t)
              : t;
          })(s)
        );
      }
      const vo = new Map(),
        bo = new Map(),
        wo = new Map();
      function So(t) {
        let e;
        vo.set(t.token, t),
          'function' == typeof t.token &&
            (e = ht(t.token)) &&
            'function' == typeof e.providedIn &&
            bo.set(t.token, t);
      }
      function Eo(t, e) {
        const n = ns(e.viewDefFactory),
          s = ns(n.nodes[0].element.componentView);
        wo.set(t, s);
      }
      function Co() {
        vo.clear(), bo.clear(), wo.clear();
      }
      function xo(t) {
        if (0 === vo.size) return t;
        const e = (function (t) {
          const e = [];
          let n = null;
          for (let s = 0; s < t.nodes.length; s++) {
            const i = t.nodes[s];
            1 & i.flags && (n = i),
              n &&
                3840 & i.flags &&
                vo.has(i.provider.token) &&
                (e.push(n.nodeIndex), (n = null));
          }
          return e;
        })(t);
        if (0 === e.length) return t;
        t = t.factory(() => Mn);
        for (let s = 0; s < e.length; s++) n(t, e[s]);
        return t;
        function n(t, e) {
          for (let n = e + 1; n < t.nodes.length; n++) {
            const e = t.nodes[n];
            if (1 & e.flags) return;
            if (3840 & e.flags) {
              const t = e.provider,
                n = vo.get(t.token);
              n &&
                ((e.flags = (-3841 & e.flags) | n.flags),
                (t.deps = Jn(n.deps)),
                (t.value = n.value));
            }
          }
        }
      }
      function To(t, e, n, s, i, r, o, a, l, c, h, u, d) {
        const p = t.def.nodes[e];
        return (
          to(t, p, n, s, i, r, o, a, l, c, h, u, d),
          224 & p.flags ? On(t, e).value : void 0
        );
      }
      function ko(t, e, n, s, i, r, o, a, l, c, h, u, d) {
        const p = t.def.nodes[e];
        return (
          no(t, p, n, s, i, r, o, a, l, c, h, u, d),
          224 & p.flags ? On(t, e).value : void 0
        );
      }
      function Do(t) {
        return Wo(Io.detectChanges, Jr, null, [t]);
      }
      function Ro(t) {
        return Wo(Io.checkNoChanges, Xr, null, [t]);
      }
      function Ao(t) {
        return Wo(Io.destroy, io, null, [t]);
      }
      const Io = (function () {
        var t = {
          create: 0,
          detectChanges: 1,
          checkNoChanges: 2,
          destroy: 3,
          handleEvent: 4,
        };
        return (
          (t[t.create] = 'create'),
          (t[t.detectChanges] = 'detectChanges'),
          (t[t.checkNoChanges] = 'checkNoChanges'),
          (t[t.destroy] = 'destroy'),
          (t[t.handleEvent] = 'handleEvent'),
          t
        );
      })();
      let Oo, Po, No;
      function Mo(t, e) {
        (Po = t), (No = e);
      }
      function Fo(t, e, n, s) {
        return (
          Mo(t, e), Wo(Io.handleEvent, t.def.handleEvent, null, [t, e, n, s])
        );
      }
      function Lo(t, e) {
        if (128 & t.state) throw Tn(Io[Oo]);
        return (
          Mo(t, Bo(t, 0)),
          t.def.updateDirectives(function (t, n, s, ...i) {
            const r = t.def.nodes[n];
            return (
              0 === e ? Vo(t, r, s, i) : Ho(t, r, s, i),
              16384 & r.flags && Mo(t, Bo(t, n)),
              224 & r.flags ? On(t, r.nodeIndex).value : void 0
            );
          }, t)
        );
      }
      function jo(t, e) {
        if (128 & t.state) throw Tn(Io[Oo]);
        return (
          Mo(t, Uo(t, 0)),
          t.def.updateRenderer(function (t, n, s, ...i) {
            const r = t.def.nodes[n];
            return (
              0 === e ? Vo(t, r, s, i) : Ho(t, r, s, i),
              3 & r.flags && Mo(t, Uo(t, n)),
              224 & r.flags ? On(t, r.nodeIndex).value : void 0
            );
          }, t)
        );
      }
      function Vo(t, e, n, s) {
        if (to(t, e, n, ...s)) {
          const r = 1 === n ? s[0] : s;
          if (16384 & e.flags) {
            const n = {};
            for (let t = 0; t < e.bindings.length; t++) {
              const s = e.bindings[t],
                o = r[t];
              8 & s.flags &&
                (n[
                  ((i = s.nonMinifiedName),
                  'ng-reflect-' +
                    i
                      .replace(/[$@]/g, '_')
                      .replace(ge, (...t) => '-' + t[1].toLowerCase()))
                ] = ye(o));
            }
            const s = e.parent,
              o = An(t, s.nodeIndex).renderElement;
            if (s.element.name)
              for (let e in n) {
                const s = n[e];
                null != s
                  ? t.renderer.setAttribute(o, e, s)
                  : t.renderer.removeAttribute(o, e);
              }
            else
              t.renderer.setValue(o, 'bindings=' + JSON.stringify(n, null, 2));
          }
        }
        var i;
      }
      function Ho(t, e, n, s) {
        no(t, e, n, ...s);
      }
      function Bo(t, e) {
        for (let n = e; n < t.def.nodes.length; n++) {
          const e = t.def.nodes[n];
          if (16384 & e.flags && e.bindings && e.bindings.length) return n;
        }
        return null;
      }
      function Uo(t, e) {
        for (let n = e; n < t.def.nodes.length; n++) {
          const e = t.def.nodes[n];
          if (3 & e.flags && e.bindings && e.bindings.length) return n;
        }
        return null;
      }
      class $o {
        constructor(t, e) {
          (this.view = t),
            (this.nodeIndex = e),
            null == e && (this.nodeIndex = e = 0),
            (this.nodeDef = t.def.nodes[e]);
          let n = this.nodeDef,
            s = t;
          for (; n && 0 == (1 & n.flags); ) n = n.parent;
          if (!n) for (; !n && s; ) (n = Kn(s)), (s = s.parent);
          (this.elDef = n), (this.elView = s);
        }
        get elOrCompView() {
          return (
            An(this.elView, this.elDef.nodeIndex).componentView || this.view
          );
        }
        get injector() {
          return Is(this.elView, this.elDef);
        }
        get component() {
          return this.elOrCompView.component;
        }
        get context() {
          return this.elOrCompView.context;
        }
        get providerTokens() {
          const t = [];
          if (this.elDef)
            for (
              let e = this.elDef.nodeIndex + 1;
              e <= this.elDef.nodeIndex + this.elDef.childCount;
              e++
            ) {
              const n = this.elView.def.nodes[e];
              20224 & n.flags && t.push(n.provider.token), (e += n.childCount);
            }
          return t;
        }
        get references() {
          const t = {};
          if (this.elDef) {
            zo(this.elView, this.elDef, t);
            for (
              let e = this.elDef.nodeIndex + 1;
              e <= this.elDef.nodeIndex + this.elDef.childCount;
              e++
            ) {
              const n = this.elView.def.nodes[e];
              20224 & n.flags && zo(this.elView, n, t), (e += n.childCount);
            }
          }
          return t;
        }
        get componentRenderElement() {
          const t = (function (t) {
            for (; t && !Gn(t); ) t = t.parent;
            return t.parent ? An(t.parent, Kn(t).nodeIndex) : null;
          })(this.elOrCompView);
          return t ? t.renderElement : void 0;
        }
        get renderNode() {
          return 2 & this.nodeDef.flags
            ? Zn(this.view, this.nodeDef)
            : Zn(this.elView, this.elDef);
        }
        logError(t, ...e) {
          let n, s;
          2 & this.nodeDef.flags
            ? ((n = this.view.def), (s = this.nodeDef.nodeIndex))
            : ((n = this.elView.def), (s = this.elDef.nodeIndex));
          const i = (function (t, e) {
            let n = -1;
            for (let s = 0; s <= e; s++) 3 & t.nodes[s].flags && n++;
            return n;
          })(n, s);
          let r = -1;
          n.factory(() => (r++, r === i ? t.error.bind(t, ...e) : Mn)),
            r < i &&
              (t.error(
                'Illegal state: the ViewDefinitionFactory did not call the logger!'
              ),
              t.error(...e));
        }
      }
      function zo(t, e, n) {
        for (let s in e.references) n[s] = Fr(t, e, e.references[s]);
      }
      function Wo(t, e, n, s) {
        const i = Oo,
          r = Po,
          o = No;
        try {
          Oo = t;
          const a = e.apply(n, s);
          return (Po = r), (No = o), (Oo = i), a;
        } catch (a) {
          if (jt(a) || !Po) throw a;
          throw (function (t, e) {
            return (
              t instanceof Error || (t = new Error(t.toString())), xn(t, e), t
            );
          })(a, qo());
        }
      }
      function qo() {
        return Po ? new $o(Po, No) : null;
      }
      class Ko {
        constructor(t) {
          this.delegate = t;
        }
        createRenderer(t, e) {
          return new Zo(this.delegate.createRenderer(t, e));
        }
        begin() {
          this.delegate.begin && this.delegate.begin();
        }
        end() {
          this.delegate.end && this.delegate.end();
        }
        whenRenderingDone() {
          return this.delegate.whenRenderingDone
            ? this.delegate.whenRenderingDone()
            : Promise.resolve(null);
        }
      }
      class Zo {
        constructor(t) {
          (this.delegate = t),
            (this.debugContextFactory = qo),
            (this.data = this.delegate.data);
        }
        createDebugContext(t) {
          return this.debugContextFactory(t);
        }
        destroyNode(t) {
          const e = _r(t);
          !(function (t) {
            yr.delete(t.nativeNode);
          })(e),
            e instanceof mr && (e.listeners.length = 0),
            this.delegate.destroyNode && this.delegate.destroyNode(t);
        }
        destroy() {
          this.delegate.destroy();
        }
        createElement(t, e) {
          const n = this.delegate.createElement(t, e),
            s = this.createDebugContext(n);
          if (s) {
            const e = new gr(n, null, s);
            (e.name = t), vr(e);
          }
          return n;
        }
        createComment(t) {
          const e = this.delegate.createComment(t),
            n = this.createDebugContext(e);
          return n && vr(new mr(e, null, n)), e;
        }
        createText(t) {
          const e = this.delegate.createText(t),
            n = this.createDebugContext(e);
          return n && vr(new mr(e, null, n)), e;
        }
        appendChild(t, e) {
          const n = _r(t),
            s = _r(e);
          n && s && n instanceof gr && n.addChild(s),
            this.delegate.appendChild(t, e);
        }
        insertBefore(t, e, n) {
          const s = _r(t),
            i = _r(e),
            r = _r(n);
          s && i && s instanceof gr && s.insertBefore(r, i),
            this.delegate.insertBefore(t, e, n);
        }
        removeChild(t, e) {
          const n = _r(t),
            s = _r(e);
          n && s && n instanceof gr && n.removeChild(s),
            this.delegate.removeChild(t, e);
        }
        selectRootElement(t, e) {
          const n = this.delegate.selectRootElement(t, e),
            s = qo();
          return s && vr(new gr(n, null, s)), n;
        }
        setAttribute(t, e, n, s) {
          const i = _r(t);
          i && i instanceof gr && (i.attributes[s ? s + ':' + e : e] = n),
            this.delegate.setAttribute(t, e, n, s);
        }
        removeAttribute(t, e, n) {
          const s = _r(t);
          s && s instanceof gr && (s.attributes[n ? n + ':' + e : e] = null),
            this.delegate.removeAttribute(t, e, n);
        }
        addClass(t, e) {
          const n = _r(t);
          n && n instanceof gr && (n.classes[e] = !0),
            this.delegate.addClass(t, e);
        }
        removeClass(t, e) {
          const n = _r(t);
          n && n instanceof gr && (n.classes[e] = !1),
            this.delegate.removeClass(t, e);
        }
        setStyle(t, e, n, s) {
          const i = _r(t);
          i && i instanceof gr && (i.styles[e] = n),
            this.delegate.setStyle(t, e, n, s);
        }
        removeStyle(t, e, n) {
          const s = _r(t);
          s && s instanceof gr && (s.styles[e] = null),
            this.delegate.removeStyle(t, e, n);
        }
        setProperty(t, e, n) {
          const s = _r(t);
          s && s instanceof gr && (s.properties[e] = n),
            this.delegate.setProperty(t, e, n);
        }
        listen(t, e, n) {
          if ('string' != typeof t) {
            const s = _r(t);
            s && s.listeners.push(new fr(e, n));
          }
          return this.delegate.listen(t, e, n);
        }
        parentNode(t) {
          return this.delegate.parentNode(t);
        }
        nextSibling(t) {
          return this.delegate.nextSibling(t);
        }
        setValue(t, e) {
          return this.delegate.setValue(t, e);
        }
      }
      function Go(t, e, n) {
        return new Qo(t, e, n);
      }
      class Qo extends Pt {
        constructor(t, e, n) {
          super(),
            (this.moduleType = t),
            (this._bootstrapComponents = e),
            (this._ngModuleDefFactory = n);
        }
        create(t) {
          !(function () {
            if (uo) return;
            uo = !0;
            const t = zt()
              ? {
                  setCurrentNode: Mo,
                  createRootView: fo,
                  createEmbeddedView: go,
                  createComponentView: yo,
                  createNgModuleRef: _o,
                  overrideProvider: So,
                  overrideComponentView: Eo,
                  clearOverrides: Co,
                  checkAndUpdateView: Do,
                  checkNoChangesView: Ro,
                  destroyView: Ao,
                  createDebugContext: (t, e) => new $o(t, e),
                  handleEvent: Fo,
                  updateDirectives: Lo,
                  updateRenderer: jo,
                }
              : {
                  setCurrentNode: () => {},
                  createRootView: po,
                  createEmbeddedView: qr,
                  createComponentView: Zr,
                  createNgModuleRef: Fs,
                  overrideProvider: Mn,
                  overrideComponentView: Mn,
                  clearOverrides: Mn,
                  checkAndUpdateView: Jr,
                  checkNoChangesView: Xr,
                  destroyView: io,
                  createDebugContext: (t, e) => new $o(t, e),
                  handleEvent: (t, e, n, s) => t.def.handleEvent(t, e, n, s),
                  updateDirectives: (t, e) =>
                    t.def.updateDirectives(0 === e ? To : ko, t),
                  updateRenderer: (t, e) =>
                    t.def.updateRenderer(0 === e ? To : ko, t),
                };
            (Nn.setCurrentNode = t.setCurrentNode),
              (Nn.createRootView = t.createRootView),
              (Nn.createEmbeddedView = t.createEmbeddedView),
              (Nn.createComponentView = t.createComponentView),
              (Nn.createNgModuleRef = t.createNgModuleRef),
              (Nn.overrideProvider = t.overrideProvider),
              (Nn.overrideComponentView = t.overrideComponentView),
              (Nn.clearOverrides = t.clearOverrides),
              (Nn.checkAndUpdateView = t.checkAndUpdateView),
              (Nn.checkNoChangesView = t.checkNoChangesView),
              (Nn.destroyView = t.destroyView),
              (Nn.resolveDep = ni),
              (Nn.createDebugContext = t.createDebugContext),
              (Nn.handleEvent = t.handleEvent),
              (Nn.updateDirectives = t.updateDirectives),
              (Nn.updateRenderer = t.updateRenderer),
              (Nn.dirtyParentQueries = Pr);
          })();
          const e = (function (t) {
            const e = Array.from(t.providers),
              n = Array.from(t.modules),
              s = {};
            for (const i in t.providersByKey) s[i] = t.providersByKey[i];
            return {
              factory: t.factory,
              isRoot: t.isRoot,
              providers: e,
              modules: n,
              providersByKey: s,
            };
          })(ns(this._ngModuleDefFactory));
          return Nn.createNgModuleRef(
            this.moduleType,
            t || Se.NULL,
            this._bootstrapComponents,
            e
          );
        }
      }
      class Yo {}
      const Xo = new wt('ApiEndpointBaseUrl');
      class Jo {
        constructor(t) {
          (this.baseUrl = t), (this.env = t);
        }
        get LOGIN() {
          return '/auth';
        }
        get PICTURE() {
          return '/images';
        }
      }
      function ta(...t) {
        let e = t[t.length - 1];
        return k(e) ? (t.pop(), L(t, e)) : q(t);
      }
      function ea(t, e) {
        return U(t, e, 1);
      }
      function na(t, e) {
        return function (n) {
          return n.lift(new sa(t, e));
        };
      }
      class sa {
        constructor(t, e) {
          (this.predicate = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new ia(t, this.predicate, this.thisArg));
        }
      }
      class ia extends f {
        constructor(t, e, n) {
          super(t), (this.predicate = e), (this.thisArg = n), (this.count = 0);
        }
        _next(t) {
          let e;
          try {
            e = this.predicate.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          e && this.destination.next(t);
        }
      }
      class ra {}
      const oa = new wt('Location Initialized');
      class aa {}
      const la = new wt('appBaseHref');
      class ca {
        constructor(t, e) {
          (this._subject = new fi()),
            (this._urlChangeListeners = []),
            (this._platformStrategy = t);
          const n = this._platformStrategy.getBaseHref();
          (this._platformLocation = e),
            (this._baseHref = ca.stripTrailingSlash(ha(n))),
            this._platformStrategy.onPopState((t) => {
              this._subject.emit({
                url: this.path(!0),
                pop: !0,
                state: t.state,
                type: t.type,
              });
            });
        }
        path(t = !1) {
          return this.normalize(this._platformStrategy.path(t));
        }
        getState() {
          return this._platformLocation.getState();
        }
        isCurrentPathEqualTo(t, e = '') {
          return this.path() == this.normalize(t + ca.normalizeQueryParams(e));
        }
        normalize(t) {
          return ca.stripTrailingSlash(
            (function (t, e) {
              return t && e.startsWith(t) ? e.substring(t.length) : e;
            })(this._baseHref, ha(t))
          );
        }
        prepareExternalUrl(t) {
          return (
            t && '/' !== t[0] && (t = '/' + t),
            this._platformStrategy.prepareExternalUrl(t)
          );
        }
        go(t, e = '', n = null) {
          this._platformStrategy.pushState(n, '', t, e),
            this._notifyUrlChangeListeners(
              this.prepareExternalUrl(t + ca.normalizeQueryParams(e)),
              n
            );
        }
        replaceState(t, e = '', n = null) {
          this._platformStrategy.replaceState(n, '', t, e),
            this._notifyUrlChangeListeners(
              this.prepareExternalUrl(t + ca.normalizeQueryParams(e)),
              n
            );
        }
        forward() {
          this._platformStrategy.forward();
        }
        back() {
          this._platformStrategy.back();
        }
        onUrlChange(t) {
          this._urlChangeListeners.push(t),
            this.subscribe((t) => {
              this._notifyUrlChangeListeners(t.url, t.state);
            });
        }
        _notifyUrlChangeListeners(t = '', e) {
          this._urlChangeListeners.forEach((n) => n(t, e));
        }
        subscribe(t, e, n) {
          return this._subject.subscribe({ next: t, error: e, complete: n });
        }
        static normalizeQueryParams(t) {
          return t && '?' !== t[0] ? '?' + t : t;
        }
        static joinWithSlash(t, e) {
          if (0 == t.length) return e;
          if (0 == e.length) return t;
          let n = 0;
          return (
            t.endsWith('/') && n++,
            e.startsWith('/') && n++,
            2 == n ? t + e.substring(1) : 1 == n ? t + e : t + '/' + e
          );
        }
        static stripTrailingSlash(t) {
          const e = t.match(/#|\?|$/),
            n = (e && e.index) || t.length;
          return t.slice(0, n - ('/' === t[n - 1] ? 1 : 0)) + t.slice(n);
        }
      }
      function ha(t) {
        return t.replace(/\/index.html$/, '');
      }
      class ua extends aa {
        constructor(t, e) {
          super(),
            (this._platformLocation = t),
            (this._baseHref = ''),
            null != e && (this._baseHref = e);
        }
        onPopState(t) {
          this._platformLocation.onPopState(t),
            this._platformLocation.onHashChange(t);
        }
        getBaseHref() {
          return this._baseHref;
        }
        path(t = !1) {
          let e = this._platformLocation.hash;
          return null == e && (e = '#'), e.length > 0 ? e.substring(1) : e;
        }
        prepareExternalUrl(t) {
          const e = ca.joinWithSlash(this._baseHref, t);
          return e.length > 0 ? '#' + e : e;
        }
        pushState(t, e, n, s) {
          let i = this.prepareExternalUrl(n + ca.normalizeQueryParams(s));
          0 == i.length && (i = this._platformLocation.pathname),
            this._platformLocation.pushState(t, e, i);
        }
        replaceState(t, e, n, s) {
          let i = this.prepareExternalUrl(n + ca.normalizeQueryParams(s));
          0 == i.length && (i = this._platformLocation.pathname),
            this._platformLocation.replaceState(t, e, i);
        }
        forward() {
          this._platformLocation.forward();
        }
        back() {
          this._platformLocation.back();
        }
      }
      class da extends aa {
        constructor(t, e) {
          if (
            (super(),
            (this._platformLocation = t),
            null == e && (e = this._platformLocation.getBaseHrefFromDOM()),
            null == e)
          )
            throw new Error(
              'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
            );
          this._baseHref = e;
        }
        onPopState(t) {
          this._platformLocation.onPopState(t),
            this._platformLocation.onHashChange(t);
        }
        getBaseHref() {
          return this._baseHref;
        }
        prepareExternalUrl(t) {
          return ca.joinWithSlash(this._baseHref, t);
        }
        path(t = !1) {
          const e =
              this._platformLocation.pathname +
              ca.normalizeQueryParams(this._platformLocation.search),
            n = this._platformLocation.hash;
          return n && t ? `${e}${n}` : e;
        }
        pushState(t, e, n, s) {
          const i = this.prepareExternalUrl(n + ca.normalizeQueryParams(s));
          this._platformLocation.pushState(t, e, i);
        }
        replaceState(t, e, n, s) {
          const i = this.prepareExternalUrl(n + ca.normalizeQueryParams(s));
          this._platformLocation.replaceState(t, e, i);
        }
        forward() {
          this._platformLocation.forward();
        }
        back() {
          this._platformLocation.back();
        }
      }
      const pa = (function () {
          var t = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
          return (
            (t[t.Zero] = 'Zero'),
            (t[t.One] = 'One'),
            (t[t.Two] = 'Two'),
            (t[t.Few] = 'Few'),
            (t[t.Many] = 'Many'),
            (t[t.Other] = 'Other'),
            t
          );
        })(),
        fa = (function () {
          var t = { Format: 0, Standalone: 1 };
          return (t[t.Format] = 'Format'), (t[t.Standalone] = 'Standalone'), t;
        })(),
        ma = (function () {
          var t = { Narrow: 0, Abbreviated: 1, Wide: 2, Short: 3 };
          return (
            (t[t.Narrow] = 'Narrow'),
            (t[t.Abbreviated] = 'Abbreviated'),
            (t[t.Wide] = 'Wide'),
            (t[t.Short] = 'Short'),
            t
          );
        })(),
        ga = (function () {
          var t = { Short: 0, Medium: 1, Long: 2, Full: 3 };
          return (
            (t[t.Short] = 'Short'),
            (t[t.Medium] = 'Medium'),
            (t[t.Long] = 'Long'),
            (t[t.Full] = 'Full'),
            t
          );
        })(),
        ya = (function () {
          var t = {
            Decimal: 0,
            Group: 1,
            List: 2,
            PercentSign: 3,
            PlusSign: 4,
            MinusSign: 5,
            Exponential: 6,
            SuperscriptingExponent: 7,
            PerMille: 8,
            Infinity: 9,
            NaN: 10,
            TimeSeparator: 11,
            CurrencyDecimal: 12,
            CurrencyGroup: 13,
          };
          return (
            (t[t.Decimal] = 'Decimal'),
            (t[t.Group] = 'Group'),
            (t[t.List] = 'List'),
            (t[t.PercentSign] = 'PercentSign'),
            (t[t.PlusSign] = 'PlusSign'),
            (t[t.MinusSign] = 'MinusSign'),
            (t[t.Exponential] = 'Exponential'),
            (t[t.SuperscriptingExponent] = 'SuperscriptingExponent'),
            (t[t.PerMille] = 'PerMille'),
            (t[t.Infinity] = 'Infinity'),
            (t[t.NaN] = 'NaN'),
            (t[t.TimeSeparator] = 'TimeSeparator'),
            (t[t.CurrencyDecimal] = 'CurrencyDecimal'),
            (t[t.CurrencyGroup] = 'CurrencyGroup'),
            t
          );
        })();
      function _a(t, e, n) {
        const s = pi(t),
          i = xa([s[hi.DaysFormat], s[hi.DaysStandalone]], e);
        return xa(i, n);
      }
      function va(t, e, n) {
        const s = pi(t),
          i = xa([s[hi.MonthsFormat], s[hi.MonthsStandalone]], e);
        return xa(i, n);
      }
      function ba(t, e) {
        return xa(pi(t)[hi.DateFormat], e);
      }
      function wa(t, e) {
        return xa(pi(t)[hi.TimeFormat], e);
      }
      function Sa(t, e) {
        return xa(pi(t)[hi.DateTimeFormat], e);
      }
      function Ea(t, e) {
        const n = pi(t),
          s = n[hi.NumberSymbols][e];
        if (void 0 === s) {
          if (e === ya.CurrencyDecimal) return n[hi.NumberSymbols][ya.Decimal];
          if (e === ya.CurrencyGroup) return n[hi.NumberSymbols][ya.Group];
        }
        return s;
      }
      function Ca(t) {
        if (!t[hi.ExtraData])
          throw new Error(
            `Missing extra locale data for the locale "${
              t[hi.LocaleId]
            }". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`
          );
      }
      function xa(t, e) {
        for (let n = e; n > -1; n--) if (void 0 !== t[n]) return t[n];
        throw new Error('Locale data API: locale data undefined');
      }
      function Ta(t) {
        const [e, n] = t.split(':');
        return { hours: +e, minutes: +n };
      }
      const ka = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        Da = {},
        Ra = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
        Aa = (function () {
          var t = { Short: 0, ShortGMT: 1, Long: 2, Extended: 3 };
          return (
            (t[t.Short] = 'Short'),
            (t[t.ShortGMT] = 'ShortGMT'),
            (t[t.Long] = 'Long'),
            (t[t.Extended] = 'Extended'),
            t
          );
        })(),
        Ia = (function () {
          var t = {
            FullYear: 0,
            Month: 1,
            Date: 2,
            Hours: 3,
            Minutes: 4,
            Seconds: 5,
            FractionalSeconds: 6,
            Day: 7,
          };
          return (
            (t[t.FullYear] = 'FullYear'),
            (t[t.Month] = 'Month'),
            (t[t.Date] = 'Date'),
            (t[t.Hours] = 'Hours'),
            (t[t.Minutes] = 'Minutes'),
            (t[t.Seconds] = 'Seconds'),
            (t[t.FractionalSeconds] = 'FractionalSeconds'),
            (t[t.Day] = 'Day'),
            t
          );
        })(),
        Oa = (function () {
          var t = { DayPeriods: 0, Days: 1, Months: 2, Eras: 3 };
          return (
            (t[t.DayPeriods] = 'DayPeriods'),
            (t[t.Days] = 'Days'),
            (t[t.Months] = 'Months'),
            (t[t.Eras] = 'Eras'),
            t
          );
        })();
      function Pa(t, e) {
        return (
          e &&
            (t = t.replace(/\{([^}]+)}/g, function (t, n) {
              return null != e && n in e ? e[n] : t;
            })),
          t
        );
      }
      function Na(t, e, n = '-', s, i) {
        let r = '';
        (t < 0 || (i && t <= 0)) && (i ? (t = 1 - t) : ((t = -t), (r = n)));
        let o = String(t);
        for (; o.length < e; ) o = '0' + o;
        return s && (o = o.substr(o.length - e)), r + o;
      }
      function Ma(t, e, n = 0, s = !1, i = !1) {
        return function (r, o) {
          let a = (function (t, e) {
            switch (t) {
              case Ia.FullYear:
                return e.getFullYear();
              case Ia.Month:
                return e.getMonth();
              case Ia.Date:
                return e.getDate();
              case Ia.Hours:
                return e.getHours();
              case Ia.Minutes:
                return e.getMinutes();
              case Ia.Seconds:
                return e.getSeconds();
              case Ia.FractionalSeconds:
                return e.getMilliseconds();
              case Ia.Day:
                return e.getDay();
              default:
                throw new Error(`Unknown DateType value "${t}".`);
            }
          })(t, r);
          if (((n > 0 || a > -n) && (a += n), t === Ia.Hours))
            0 === a && -12 === n && (a = 12);
          else if (t === Ia.FractionalSeconds)
            return (l = e), Na(a, 3).substr(0, l);
          var l;
          const c = Ea(o, ya.MinusSign);
          return Na(a, e, c, s, i);
        };
      }
      function Fa(t, e, n = fa.Format, s = !1) {
        return function (i, r) {
          return (function (t, e, n, s, i, r) {
            switch (n) {
              case Oa.Months:
                return va(e, i, s)[t.getMonth()];
              case Oa.Days:
                return _a(e, i, s)[t.getDay()];
              case Oa.DayPeriods:
                const o = t.getHours(),
                  a = t.getMinutes();
                if (r) {
                  const t = (function (t) {
                      const e = pi(t);
                      return (
                        Ca(e),
                        (e[hi.ExtraData][2] || []).map((t) =>
                          'string' == typeof t ? Ta(t) : [Ta(t[0]), Ta(t[1])]
                        )
                      );
                    })(e),
                    n = (function (t, e, n) {
                      const s = pi(t);
                      Ca(s);
                      const i =
                        xa([s[hi.ExtraData][0], s[hi.ExtraData][1]], e) || [];
                      return xa(i, n) || [];
                    })(e, i, s);
                  let r;
                  if (
                    (t.forEach((t, e) => {
                      if (Array.isArray(t)) {
                        const { hours: s, minutes: i } = t[0],
                          { hours: l, minutes: c } = t[1];
                        o >= s &&
                          a >= i &&
                          (o < l || (o === l && a < c)) &&
                          (r = n[e]);
                      } else {
                        const { hours: s, minutes: i } = t;
                        s === o && i === a && (r = n[e]);
                      }
                    }),
                    r)
                  )
                    return r;
                }
                return (function (t, e, n) {
                  const s = pi(t),
                    i = xa(
                      [s[hi.DayPeriodsFormat], s[hi.DayPeriodsStandalone]],
                      e
                    );
                  return xa(i, n);
                })(e, i, s)[o < 12 ? 0 : 1];
              case Oa.Eras:
                return (function (t, e) {
                  return xa(pi(t)[hi.Eras], e);
                })(e, s)[t.getFullYear() <= 0 ? 0 : 1];
              default:
                throw new Error('unexpected translation type ' + n);
            }
          })(i, r, t, e, n, s);
        };
      }
      function La(t) {
        return function (e, n, s) {
          const i = -1 * s,
            r = Ea(n, ya.MinusSign),
            o = i > 0 ? Math.floor(i / 60) : Math.ceil(i / 60);
          switch (t) {
            case Aa.Short:
              return (
                (i >= 0 ? '+' : '') + Na(o, 2, r) + Na(Math.abs(i % 60), 2, r)
              );
            case Aa.ShortGMT:
              return 'GMT' + (i >= 0 ? '+' : '') + Na(o, 1, r);
            case Aa.Long:
              return (
                'GMT' +
                (i >= 0 ? '+' : '') +
                Na(o, 2, r) +
                ':' +
                Na(Math.abs(i % 60), 2, r)
              );
            case Aa.Extended:
              return 0 === s
                ? 'Z'
                : (i >= 0 ? '+' : '') +
                    Na(o, 2, r) +
                    ':' +
                    Na(Math.abs(i % 60), 2, r);
            default:
              throw new Error(`Unknown zone width "${t}"`);
          }
        };
      }
      function ja(t, e = !1) {
        return function (n, s) {
          let i;
          if (e) {
            const t = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
              e = n.getDate();
            i = 1 + Math.floor((e + t) / 7);
          } else {
            const t = (function (t) {
                const e = new Date(t, 0, 1).getDay();
                return new Date(t, 0, 1 + (e <= 4 ? 4 : 11) - e);
              })(n.getFullYear()),
              e =
                ((r = n),
                new Date(
                  r.getFullYear(),
                  r.getMonth(),
                  r.getDate() + (4 - r.getDay())
                )).getTime() - t.getTime();
            i = 1 + Math.round(e / 6048e5);
          }
          var r;
          return Na(i, t, Ea(s, ya.MinusSign));
        };
      }
      const Va = {};
      function Ha(t, e) {
        t = t.replace(/:/g, '');
        const n = Date.parse('Jan 01, 1970 00:00:00 ' + t) / 6e4;
        return isNaN(n) ? e : n;
      }
      function Ba(t) {
        return t instanceof Date && !isNaN(t.valueOf());
      }
      const Ua = new wt('UseV4Plurals');
      class $a {}
      class za extends $a {
        constructor(t, e) {
          super(), (this.locale = t), (this.deprecatedPluralFn = e);
        }
        getPluralCategory(t, e) {
          switch (
            this.deprecatedPluralFn
              ? this.deprecatedPluralFn(e || this.locale, t)
              : (function (t) {
                  return pi(t)[hi.PluralCase];
                })(e || this.locale)(t)
          ) {
            case pa.Zero:
              return 'zero';
            case pa.One:
              return 'one';
            case pa.Two:
              return 'two';
            case pa.Few:
              return 'few';
            case pa.Many:
              return 'many';
            default:
              return 'other';
          }
        }
      }
      function Wa(t, e) {
        e = encodeURIComponent(e);
        for (const n of t.split(';')) {
          const t = n.indexOf('='),
            [s, i] = -1 == t ? [n, ''] : [n.slice(0, t), n.slice(t + 1)];
          if (s.trim() === e) return decodeURIComponent(i);
        }
        return null;
      }
      class qa {
        constructor(t, e, n, s) {
          (this.$implicit = t),
            (this.ngForOf = e),
            (this.index = n),
            (this.count = s);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      class Ka {
        constructor(t, e, n) {
          (this._viewContainer = t),
            (this._template = e),
            (this._differs = n),
            (this._ngForOfDirty = !0),
            (this._differ = null);
        }
        set ngForOf(t) {
          (this._ngForOf = t), (this._ngForOfDirty = !0);
        }
        set ngForTrackBy(t) {
          zt() &&
            null != t &&
            'function' != typeof t &&
            console &&
            console.warn &&
            console.warn(
              `trackBy must be a function, but received ${JSON.stringify(
                t
              )}. See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.`
            ),
            (this._trackByFn = t);
        }
        get ngForTrackBy() {
          return this._trackByFn;
        }
        set ngForTemplate(t) {
          t && (this._template = t);
        }
        ngDoCheck() {
          if (this._ngForOfDirty) {
            this._ngForOfDirty = !1;
            const n = this._ngForOf;
            if (!this._differ && n)
              try {
                this._differ = this._differs.find(n).create(this.ngForTrackBy);
              } catch (e) {
                throw new Error(
                  `Cannot find a differ supporting object '${n}' of type '${
                    ((t = n), t.name || typeof t)
                  }'. NgFor only supports binding to Iterables such as Arrays.`
                );
              }
          }
          var t;
          if (this._differ) {
            const t = this._differ.diff(this._ngForOf);
            t && this._applyChanges(t);
          }
        }
        _applyChanges(t) {
          const e = [];
          t.forEachOperation((t, n, s) => {
            if (null == t.previousIndex) {
              const n = this._viewContainer.createEmbeddedView(
                  this._template,
                  new qa(null, this._ngForOf, -1, -1),
                  null === s ? void 0 : s
                ),
                i = new Za(t, n);
              e.push(i);
            } else if (null == s)
              this._viewContainer.remove(null === n ? void 0 : n);
            else if (null !== n) {
              const i = this._viewContainer.get(n);
              this._viewContainer.move(i, s);
              const r = new Za(t, i);
              e.push(r);
            }
          });
          for (let n = 0; n < e.length; n++)
            this._perViewChange(e[n].view, e[n].record);
          for (let n = 0, s = this._viewContainer.length; n < s; n++) {
            const t = this._viewContainer.get(n);
            (t.context.index = n),
              (t.context.count = s),
              (t.context.ngForOf = this._ngForOf);
          }
          t.forEachIdentityChange((t) => {
            this._viewContainer.get(t.currentIndex).context.$implicit = t.item;
          });
        }
        _perViewChange(t, e) {
          t.context.$implicit = e.item;
        }
        static ngTemplateContextGuard(t, e) {
          return !0;
        }
      }
      class Za {
        constructor(t, e) {
          (this.record = t), (this.view = e);
        }
      }
      class Ga {
        constructor(t, e) {
          (this._viewContainer = t),
            (this._context = new Qa()),
            (this._thenTemplateRef = null),
            (this._elseTemplateRef = null),
            (this._thenViewRef = null),
            (this._elseViewRef = null),
            (this._thenTemplateRef = e);
        }
        set ngIf(t) {
          (this._context.$implicit = this._context.ngIf = t),
            this._updateView();
        }
        set ngIfThen(t) {
          Ya('ngIfThen', t),
            (this._thenTemplateRef = t),
            (this._thenViewRef = null),
            this._updateView();
        }
        set ngIfElse(t) {
          Ya('ngIfElse', t),
            (this._elseTemplateRef = t),
            (this._elseViewRef = null),
            this._updateView();
        }
        _updateView() {
          this._context.$implicit
            ? this._thenViewRef ||
              (this._viewContainer.clear(),
              (this._elseViewRef = null),
              this._thenTemplateRef &&
                (this._thenViewRef = this._viewContainer.createEmbeddedView(
                  this._thenTemplateRef,
                  this._context
                )))
            : this._elseViewRef ||
              (this._viewContainer.clear(),
              (this._thenViewRef = null),
              this._elseTemplateRef &&
                (this._elseViewRef = this._viewContainer.createEmbeddedView(
                  this._elseTemplateRef,
                  this._context
                )));
        }
      }
      class Qa {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function Ya(t, e) {
        if (e && !e.createEmbeddedView)
          throw new Error(
            `${t} must be a TemplateRef, but received '${dt(e)}'.`
          );
      }
      class Xa {
        constructor(t) {
          (this._viewContainerRef = t),
            (this._viewRef = null),
            (this.ngTemplateOutletContext = null),
            (this.ngTemplateOutlet = null);
        }
        ngOnChanges(t) {
          this._shouldRecreateView(t)
            ? (this._viewRef &&
                this._viewContainerRef.remove(
                  this._viewContainerRef.indexOf(this._viewRef)
                ),
              this.ngTemplateOutlet &&
                (this._viewRef = this._viewContainerRef.createEmbeddedView(
                  this.ngTemplateOutlet,
                  this.ngTemplateOutletContext
                )))
            : this._viewRef &&
              this.ngTemplateOutletContext &&
              this._updateExistingContext(this.ngTemplateOutletContext);
        }
        _shouldRecreateView(t) {
          const e = t.ngTemplateOutletContext;
          return !!t.ngTemplateOutlet || (e && this._hasContextShapeChanged(e));
        }
        _hasContextShapeChanged(t) {
          const e = Object.keys(t.previousValue || {}),
            n = Object.keys(t.currentValue || {});
          if (e.length === n.length) {
            for (let t of n) if (-1 === e.indexOf(t)) return !0;
            return !1;
          }
          return !0;
        }
        _updateExistingContext(t) {
          for (let e of Object.keys(t))
            this._viewRef.context[e] = this.ngTemplateOutletContext[e];
        }
      }
      class Ja {}
      const tl = new wt('DocumentToken');
      let el = (() => {
        class t {}
        return (
          (t.ngInjectableDef = lt({
            token: t,
            providedIn: 'root',
            factory: () => new nl(Dt(tl), window, Dt(Bt)),
          })),
          t
        );
      })();
      class nl {
        constructor(t, e, n) {
          (this.document = t),
            (this.window = e),
            (this.errorHandler = n),
            (this.offset = () => [0, 0]);
        }
        setOffset(t) {
          this.offset = Array.isArray(t) ? () => t : t;
        }
        getScrollPosition() {
          return this.supportScrollRestoration()
            ? [this.window.scrollX, this.window.scrollY]
            : [0, 0];
        }
        scrollToPosition(t) {
          this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1]);
        }
        scrollToAnchor(t) {
          if (this.supportScrollRestoration()) {
            t =
              this.window.CSS && this.window.CSS.escape
                ? this.window.CSS.escape(t)
                : t.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
            try {
              const e = this.document.querySelector('#' + t);
              if (e) return void this.scrollToElement(e);
              const n = this.document.querySelector(`[name='${t}']`);
              if (n) return void this.scrollToElement(n);
            } catch (e) {
              this.errorHandler.handleError(e);
            }
          }
        }
        setHistoryScrollRestoration(t) {
          if (this.supportScrollRestoration()) {
            const e = this.window.history;
            e && e.scrollRestoration && (e.scrollRestoration = t);
          }
        }
        scrollToElement(t) {
          const e = t.getBoundingClientRect(),
            n = e.left + this.window.pageXOffset,
            s = e.top + this.window.pageYOffset,
            i = this.offset();
          this.window.scrollTo(n - i[0], s - i[1]);
        }
        supportScrollRestoration() {
          try {
            return !!this.window && !!this.window.scrollTo;
          } catch (t) {
            return !1;
          }
        }
      }
      class sl {}
      class il {}
      class rl {
        constructor(t) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            t
              ? (this.lazyInit =
                  'string' == typeof t
                    ? () => {
                        (this.headers = new Map()),
                          t.split('\n').forEach((t) => {
                            const e = t.indexOf(':');
                            if (e > 0) {
                              const n = t.slice(0, e),
                                s = n.toLowerCase(),
                                i = t.slice(e + 1).trim();
                              this.maybeSetNormalizedName(n, s),
                                this.headers.has(s)
                                  ? this.headers.get(s).push(i)
                                  : this.headers.set(s, [i]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(t).forEach((e) => {
                            let n = t[e];
                            const s = e.toLowerCase();
                            'string' == typeof n && (n = [n]),
                              n.length > 0 &&
                                (this.headers.set(s, n),
                                this.maybeSetNormalizedName(e, s));
                          });
                      })
              : (this.headers = new Map());
        }
        has(t) {
          return this.init(), this.headers.has(t.toLowerCase());
        }
        get(t) {
          this.init();
          const e = this.headers.get(t.toLowerCase());
          return e && e.length > 0 ? e[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(t) {
          return this.init(), this.headers.get(t.toLowerCase()) || null;
        }
        append(t, e) {
          return this.clone({ name: t, value: e, op: 'a' });
        }
        set(t, e) {
          return this.clone({ name: t, value: e, op: 's' });
        }
        delete(t, e) {
          return this.clone({ name: t, value: e, op: 'd' });
        }
        maybeSetNormalizedName(t, e) {
          this.normalizedNames.has(e) || this.normalizedNames.set(e, t);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof rl
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((t) => this.applyUpdate(t)),
              (this.lazyUpdate = null)));
        }
        copyFrom(t) {
          t.init(),
            Array.from(t.headers.keys()).forEach((e) => {
              this.headers.set(e, t.headers.get(e)),
                this.normalizedNames.set(e, t.normalizedNames.get(e));
            });
        }
        clone(t) {
          const e = new rl();
          return (
            (e.lazyInit =
              this.lazyInit && this.lazyInit instanceof rl
                ? this.lazyInit
                : this),
            (e.lazyUpdate = (this.lazyUpdate || []).concat([t])),
            e
          );
        }
        applyUpdate(t) {
          const e = t.name.toLowerCase();
          switch (t.op) {
            case 'a':
            case 's':
              let n = t.value;
              if (('string' == typeof n && (n = [n]), 0 === n.length)) return;
              this.maybeSetNormalizedName(t.name, e);
              const s = ('a' === t.op ? this.headers.get(e) : void 0) || [];
              s.push(...n), this.headers.set(e, s);
              break;
            case 'd':
              const i = t.value;
              if (i) {
                let t = this.headers.get(e);
                if (!t) return;
                (t = t.filter((t) => -1 === i.indexOf(t))),
                  0 === t.length
                    ? (this.headers.delete(e), this.normalizedNames.delete(e))
                    : this.headers.set(e, t);
              } else this.headers.delete(e), this.normalizedNames.delete(e);
          }
        }
        forEach(t) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((e) =>
              t(this.normalizedNames.get(e), this.headers.get(e))
            );
        }
      }
      class ol {
        encodeKey(t) {
          return al(t);
        }
        encodeValue(t) {
          return al(t);
        }
        decodeKey(t) {
          return decodeURIComponent(t);
        }
        decodeValue(t) {
          return decodeURIComponent(t);
        }
      }
      function al(t) {
        return encodeURIComponent(t)
          .replace(/%40/gi, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/gi, '$')
          .replace(/%2C/gi, ',')
          .replace(/%3B/gi, ';')
          .replace(/%2B/gi, '+')
          .replace(/%3D/gi, '=')
          .replace(/%3F/gi, '?')
          .replace(/%2F/gi, '/');
      }
      class ll {
        constructor(t = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = t.encoder || new ol()),
            t.fromString)
          ) {
            if (t.fromObject)
              throw new Error('Cannot specify both fromString and fromObject.');
            this.map = (function (t, e) {
              const n = new Map();
              return (
                t.length > 0 &&
                  t.split('&').forEach((t) => {
                    const s = t.indexOf('='),
                      [i, r] =
                        -1 == s
                          ? [e.decodeKey(t), '']
                          : [
                              e.decodeKey(t.slice(0, s)),
                              e.decodeValue(t.slice(s + 1)),
                            ],
                      o = n.get(i) || [];
                    o.push(r), n.set(i, o);
                  }),
                n
              );
            })(t.fromString, this.encoder);
          } else
            t.fromObject
              ? ((this.map = new Map()),
                Object.keys(t.fromObject).forEach((e) => {
                  const n = t.fromObject[e];
                  this.map.set(e, Array.isArray(n) ? n : [n]);
                }))
              : (this.map = null);
        }
        has(t) {
          return this.init(), this.map.has(t);
        }
        get(t) {
          this.init();
          const e = this.map.get(t);
          return e ? e[0] : null;
        }
        getAll(t) {
          return this.init(), this.map.get(t) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(t, e) {
          return this.clone({ param: t, value: e, op: 'a' });
        }
        set(t, e) {
          return this.clone({ param: t, value: e, op: 's' });
        }
        delete(t, e) {
          return this.clone({ param: t, value: e, op: 'd' });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((t) => {
                const e = this.encoder.encodeKey(t);
                return this.map
                  .get(t)
                  .map((t) => e + '=' + this.encoder.encodeValue(t))
                  .join('&');
              })
              .join('&')
          );
        }
        clone(t) {
          const e = new ll({ encoder: this.encoder });
          return (
            (e.cloneFrom = this.cloneFrom || this),
            (e.updates = (this.updates || []).concat([t])),
            e
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((t) => this.map.set(t, this.cloneFrom.map.get(t))),
              this.updates.forEach((t) => {
                switch (t.op) {
                  case 'a':
                  case 's':
                    const e =
                      ('a' === t.op ? this.map.get(t.param) : void 0) || [];
                    e.push(t.value), this.map.set(t.param, e);
                    break;
                  case 'd':
                    if (void 0 === t.value) {
                      this.map.delete(t.param);
                      break;
                    }
                    {
                      let e = this.map.get(t.param) || [];
                      const n = e.indexOf(t.value);
                      -1 !== n && e.splice(n, 1),
                        e.length > 0
                          ? this.map.set(t.param, e)
                          : this.map.delete(t.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      function cl(t) {
        return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer;
      }
      function hl(t) {
        return 'undefined' != typeof Blob && t instanceof Blob;
      }
      function ul(t) {
        return 'undefined' != typeof FormData && t instanceof FormData;
      }
      class dl {
        constructor(t, e, n, s) {
          let i;
          if (
            ((this.url = e),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = 'json'),
            (this.method = t.toUpperCase()),
            (function (t) {
              switch (t) {
                case 'DELETE':
                case 'GET':
                case 'HEAD':
                case 'OPTIONS':
                case 'JSONP':
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || s
              ? ((this.body = void 0 !== n ? n : null), (i = s))
              : (i = n),
            i &&
              ((this.reportProgress = !!i.reportProgress),
              (this.withCredentials = !!i.withCredentials),
              i.responseType && (this.responseType = i.responseType),
              i.headers && (this.headers = i.headers),
              i.params && (this.params = i.params)),
            this.headers || (this.headers = new rl()),
            this.params)
          ) {
            const t = this.params.toString();
            if (0 === t.length) this.urlWithParams = e;
            else {
              const n = e.indexOf('?');
              this.urlWithParams =
                e + (-1 === n ? '?' : n < e.length - 1 ? '&' : '') + t;
            }
          } else (this.params = new ll()), (this.urlWithParams = e);
        }
        serializeBody() {
          return null === this.body
            ? null
            : cl(this.body) ||
              hl(this.body) ||
              ul(this.body) ||
              'string' == typeof this.body
            ? this.body
            : this.body instanceof ll
            ? this.body.toString()
            : 'object' == typeof this.body ||
              'boolean' == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || ul(this.body)
            ? null
            : hl(this.body)
            ? this.body.type || null
            : cl(this.body)
            ? null
            : 'string' == typeof this.body
            ? 'text/plain'
            : this.body instanceof ll
            ? 'application/x-www-form-urlencoded;charset=UTF-8'
            : 'object' == typeof this.body ||
              'number' == typeof this.body ||
              Array.isArray(this.body)
            ? 'application/json'
            : null;
        }
        clone(t = {}) {
          const e = t.method || this.method,
            n = t.url || this.url,
            s = t.responseType || this.responseType,
            i = void 0 !== t.body ? t.body : this.body,
            r =
              void 0 !== t.withCredentials
                ? t.withCredentials
                : this.withCredentials,
            o =
              void 0 !== t.reportProgress
                ? t.reportProgress
                : this.reportProgress;
          let a = t.headers || this.headers,
            l = t.params || this.params;
          return (
            void 0 !== t.setHeaders &&
              (a = Object.keys(t.setHeaders).reduce(
                (e, n) => e.set(n, t.setHeaders[n]),
                a
              )),
            t.setParams &&
              (l = Object.keys(t.setParams).reduce(
                (e, n) => e.set(n, t.setParams[n]),
                l
              )),
            new dl(e, n, i, {
              params: l,
              headers: a,
              reportProgress: o,
              responseType: s,
              withCredentials: r,
            })
          );
        }
      }
      const pl = (function () {
        var t = {
          Sent: 0,
          UploadProgress: 1,
          ResponseHeader: 2,
          DownloadProgress: 3,
          Response: 4,
          User: 5,
        };
        return (
          (t[t.Sent] = 'Sent'),
          (t[t.UploadProgress] = 'UploadProgress'),
          (t[t.ResponseHeader] = 'ResponseHeader'),
          (t[t.DownloadProgress] = 'DownloadProgress'),
          (t[t.Response] = 'Response'),
          (t[t.User] = 'User'),
          t
        );
      })();
      class fl {
        constructor(t, e = 200, n = 'OK') {
          (this.headers = t.headers || new rl()),
            (this.status = void 0 !== t.status ? t.status : e),
            (this.statusText = t.statusText || n),
            (this.url = t.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class ml extends fl {
        constructor(t = {}) {
          super(t), (this.type = pl.ResponseHeader);
        }
        clone(t = {}) {
          return new ml({
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class gl extends fl {
        constructor(t = {}) {
          super(t),
            (this.type = pl.Response),
            (this.body = void 0 !== t.body ? t.body : null);
        }
        clone(t = {}) {
          return new gl({
            body: void 0 !== t.body ? t.body : this.body,
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class yl extends fl {
        constructor(t) {
          super(t, 0, 'Unknown Error'),
            (this.name = 'HttpErrorResponse'),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? 'Http failure during parsing for ' +
                  (t.url || '(unknown url)')
                : `Http failure response for ${t.url || '(unknown url)'}: ${
                    t.status
                  } ${t.statusText}`),
            (this.error = t.error || null);
        }
      }
      function _l(t, e) {
        return {
          body: e,
          headers: t.headers,
          observe: t.observe,
          params: t.params,
          reportProgress: t.reportProgress,
          responseType: t.responseType,
          withCredentials: t.withCredentials,
        };
      }
      class vl {
        constructor(t) {
          this.handler = t;
        }
        request(t, e, n = {}) {
          let s;
          if (t instanceof dl) s = t;
          else {
            let i = void 0;
            i = n.headers instanceof rl ? n.headers : new rl(n.headers);
            let r = void 0;
            n.params &&
              (r =
                n.params instanceof ll
                  ? n.params
                  : new ll({ fromObject: n.params })),
              (s = new dl(t, e, void 0 !== n.body ? n.body : null, {
                headers: i,
                params: r,
                reportProgress: n.reportProgress,
                responseType: n.responseType || 'json',
                withCredentials: n.withCredentials,
              }));
          }
          const i = ta(s).pipe(ea((t) => this.handler.handle(t)));
          if (t instanceof dl || 'events' === n.observe) return i;
          const r = i.pipe(na((t) => t instanceof gl));
          switch (n.observe || 'body') {
            case 'body':
              switch (s.responseType) {
                case 'arraybuffer':
                  return r.pipe(
                    D((t) => {
                      if (null !== t.body && !(t.body instanceof ArrayBuffer))
                        throw new Error('Response is not an ArrayBuffer.');
                      return t.body;
                    })
                  );
                case 'blob':
                  return r.pipe(
                    D((t) => {
                      if (null !== t.body && !(t.body instanceof Blob))
                        throw new Error('Response is not a Blob.');
                      return t.body;
                    })
                  );
                case 'text':
                  return r.pipe(
                    D((t) => {
                      if (null !== t.body && 'string' != typeof t.body)
                        throw new Error('Response is not a string.');
                      return t.body;
                    })
                  );
                case 'json':
                default:
                  return r.pipe(D((t) => t.body));
              }
            case 'response':
              return r;
            default:
              throw new Error(
                `Unreachable: unhandled observe type ${n.observe}}`
              );
          }
        }
        delete(t, e = {}) {
          return this.request('DELETE', t, e);
        }
        get(t, e = {}) {
          return this.request('GET', t, e);
        }
        head(t, e = {}) {
          return this.request('HEAD', t, e);
        }
        jsonp(t, e) {
          return this.request('JSONP', t, {
            params: new ll().append(e, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
          });
        }
        options(t, e = {}) {
          return this.request('OPTIONS', t, e);
        }
        patch(t, e, n = {}) {
          return this.request('PATCH', t, _l(n, e));
        }
        post(t, e, n = {}) {
          return this.request('POST', t, _l(n, e));
        }
        put(t, e, n = {}) {
          return this.request('PUT', t, _l(n, e));
        }
      }
      class bl {
        constructor(t, e) {
          (this.next = t), (this.interceptor = e);
        }
        handle(t) {
          return this.interceptor.intercept(t, this.next);
        }
      }
      const wl = new wt('HTTP_INTERCEPTORS');
      class Sl {
        intercept(t, e) {
          return e.handle(t);
        }
      }
      const El = /^\)\]\}',?\n/;
      class Cl {}
      class xl {
        constructor() {}
        build() {
          return new XMLHttpRequest();
        }
      }
      class Tl {
        constructor(t) {
          this.xhrFactory = t;
        }
        handle(t) {
          if ('JSONP' === t.method)
            throw new Error(
              'Attempted to construct Jsonp request without JsonpClientModule installed.'
            );
          return new b((e) => {
            const n = this.xhrFactory.build();
            if (
              (n.open(t.method, t.urlWithParams),
              t.withCredentials && (n.withCredentials = !0),
              t.headers.forEach((t, e) => n.setRequestHeader(t, e.join(','))),
              t.headers.has('Accept') ||
                n.setRequestHeader(
                  'Accept',
                  'application/json, text/plain, */*'
                ),
              !t.headers.has('Content-Type'))
            ) {
              const e = t.detectContentTypeHeader();
              null !== e && n.setRequestHeader('Content-Type', e);
            }
            if (t.responseType) {
              const e = t.responseType.toLowerCase();
              n.responseType = 'json' !== e ? e : 'text';
            }
            const s = t.serializeBody();
            let i = null;
            const r = () => {
                if (null !== i) return i;
                const e = 1223 === n.status ? 204 : n.status,
                  s = n.statusText || 'OK',
                  r = new rl(n.getAllResponseHeaders()),
                  o =
                    (function (t) {
                      return 'responseURL' in t && t.responseURL
                        ? t.responseURL
                        : /^X-Request-URL:/m.test(t.getAllResponseHeaders())
                        ? t.getResponseHeader('X-Request-URL')
                        : null;
                    })(n) || t.url;
                return (
                  (i = new ml({
                    headers: r,
                    status: e,
                    statusText: s,
                    url: o,
                  })),
                  i
                );
              },
              o = () => {
                let { headers: s, status: i, statusText: o, url: a } = r(),
                  l = null;
                204 !== i &&
                  (l = void 0 === n.response ? n.responseText : n.response),
                  0 === i && (i = l ? 200 : 0);
                let c = i >= 200 && i < 300;
                if ('json' === t.responseType && 'string' == typeof l) {
                  const t = l;
                  l = l.replace(El, '');
                  try {
                    l = '' !== l ? JSON.parse(l) : null;
                  } catch (h) {
                    (l = t), c && ((c = !1), (l = { error: h, text: l }));
                  }
                }
                c
                  ? (e.next(
                      new gl({
                        body: l,
                        headers: s,
                        status: i,
                        statusText: o,
                        url: a || void 0,
                      })
                    ),
                    e.complete())
                  : e.error(
                      new yl({
                        error: l,
                        headers: s,
                        status: i,
                        statusText: o,
                        url: a || void 0,
                      })
                    );
              },
              a = (t) => {
                const { url: s } = r(),
                  i = new yl({
                    error: t,
                    status: n.status || 0,
                    statusText: n.statusText || 'Unknown Error',
                    url: s || void 0,
                  });
                e.error(i);
              };
            let l = !1;
            const c = (s) => {
                l || (e.next(r()), (l = !0));
                let i = { type: pl.DownloadProgress, loaded: s.loaded };
                s.lengthComputable && (i.total = s.total),
                  'text' === t.responseType &&
                    n.responseText &&
                    (i.partialText = n.responseText),
                  e.next(i);
              },
              h = (t) => {
                let n = { type: pl.UploadProgress, loaded: t.loaded };
                t.lengthComputable && (n.total = t.total), e.next(n);
              };
            return (
              n.addEventListener('load', o),
              n.addEventListener('error', a),
              t.reportProgress &&
                (n.addEventListener('progress', c),
                null !== s &&
                  n.upload &&
                  n.upload.addEventListener('progress', h)),
              n.send(s),
              e.next({ type: pl.Sent }),
              () => {
                n.removeEventListener('error', a),
                  n.removeEventListener('load', o),
                  t.reportProgress &&
                    (n.removeEventListener('progress', c),
                    null !== s &&
                      n.upload &&
                      n.upload.removeEventListener('progress', h)),
                  n.abort();
              }
            );
          });
        }
      }
      const kl = new wt('XSRF_COOKIE_NAME'),
        Dl = new wt('XSRF_HEADER_NAME');
      class Rl {}
      class Al {
        constructor(t, e, n) {
          (this.doc = t),
            (this.platform = e),
            (this.cookieName = n),
            (this.lastCookieString = ''),
            (this.lastToken = null),
            (this.parseCount = 0);
        }
        getToken() {
          if ('server' === this.platform) return null;
          const t = this.doc.cookie || '';
          return (
            t !== this.lastCookieString &&
              (this.parseCount++,
              (this.lastToken = Wa(t, this.cookieName)),
              (this.lastCookieString = t)),
            this.lastToken
          );
        }
      }
      class Il {
        constructor(t, e) {
          (this.tokenService = t), (this.headerName = e);
        }
        intercept(t, e) {
          const n = t.url.toLowerCase();
          if (
            'GET' === t.method ||
            'HEAD' === t.method ||
            n.startsWith('http://') ||
            n.startsWith('https://')
          )
            return e.handle(t);
          const s = this.tokenService.getToken();
          return (
            null === s ||
              t.headers.has(this.headerName) ||
              (t = t.clone({ headers: t.headers.set(this.headerName, s) })),
            e.handle(t)
          );
        }
      }
      class Ol {
        constructor(t, e) {
          (this.backend = t), (this.injector = e), (this.chain = null);
        }
        handle(t) {
          if (null === this.chain) {
            const t = this.injector.get(wl, []);
            this.chain = t.reduceRight((t, e) => new bl(t, e), this.backend);
          }
          return this.chain.handle(t);
        }
      }
      class Pl {
        static disable() {
          return { ngModule: Pl, providers: [{ provide: Il, useClass: Sl }] };
        }
        static withOptions(t = {}) {
          return {
            ngModule: Pl,
            providers: [
              t.cookieName ? { provide: kl, useValue: t.cookieName } : [],
              t.headerName ? { provide: Dl, useValue: t.headerName } : [],
            ],
          };
        }
      }
      class Nl {}
      const Ml = new rl({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      });
      class Fl {
        constructor(t) {
          this.httpClient = t;
        }
        get(t, e) {
          return this.httpClient.get(t, { headers: Ml, params: e });
        }
        post(t, e, n) {
          return this.httpClient.post(t, JSON.stringify(e), {
            headers: Ml,
            params: n,
          });
        }
        put(t, e, n) {
          return this.httpClient.put(t, JSON.stringify(e), {
            headers: Ml,
            params: n,
          });
        }
        delete(t, e) {
          return this.httpClient.delete(t, { headers: Ml, params: e });
        }
        getByAnotherEndPoint(t, e = Ml, n = !1, s) {
          return this.httpClient.get(t, {
            headers: e,
            withCredentials: n,
            params: s,
          });
        }
      }
      class Ll {
        constructor(t, e) {
          (this.generalService = t), (this.apiEndpoint = e);
        }
        getPictureById(t) {
          return this.generalService.get(this.apiEndpoint.PICTURE + '/' + t);
        }
        getAllPictures(t = 1) {
          return this.generalService.get(this.apiEndpoint.PICTURE, { page: t });
        }
      }
      class jl {
        setItem(t, e) {
          localStorage.setItem(t, e);
        }
        removeItem(t) {
          localStorage.removeItem(t);
        }
        getItem(t) {
          return localStorage.getItem(t);
        }
        clear() {
          localStorage.clear();
        }
      }
      class Vl {
        constructor(t, e, n) {
          (this.http = t),
            (this.localStorageService = e),
            (this.apiEndpoint = n);
        }
        login(t) {
          return this.http.post(this.apiEndpoint.LOGIN, t);
        }
        getToken() {
          return this.localStorageService.getItem('token');
        }
        isLoggedIn() {
          return !!this.getToken();
        }
        saveResLoginData(t) {
          this.localStorageService.setItem('token', t.token);
        }
      }
      class Hl {
        constructor(t) {
          this.toastr = t;
        }
        success(t, e) {
          this.toastr.success(t, e);
        }
        error(t, e) {
          this.toastr.error(t, e);
        }
        warn(t, e) {
          this.toastr.warning(t, e);
        }
        notify(t, e) {
          this.toastr.info(t, e);
        }
        clearToast() {
          setTimeout(() => {
            this.toastr.clear();
          }, 1e3);
        }
      }
      class Bl {
        constructor(t, e, n) {
          (this.authService = t),
            (this.toastService = e),
            (this.imageService = n),
            (this.images = []),
            (this.actualPage = 1),
            (this.morePages = !0),
            (this.title = 'agileTest');
        }
        ngOnInit() {
          this.login(),
            this.authService.isLoggedIn() && this.getAllImages(this.actualPage);
        }
        getAllImages(t) {
          (this.loading = !0),
            this.authService.isLoggedIn
              ? this.imageService.getAllPictures(t).subscribe(
                  (t) => {
                    (this.loading = !1),
                      this.images.push(...t.pictures),
                      (this.morePages = t.hasMore),
                      (this.totalPage = t.pageCount);
                  },
                  (t) => {
                    401 === t[1].status
                      ? this.login()
                      : (console.log(t.error),
                        this.login(),
                        this.toastService.error(
                          'Images',
                          'Error loading images'
                        ),
                        (this.loading = !1));
                  }
                )
              : this.login();
        }
        login() {
          let t;
          (this.loading = !0),
            (t = this.authService.login({ apiKey: '23567b218376f79d9415' })),
            t.subscribe(
              (t) => {
                this.authService.saveResLoginData(t), (this.loading = !1);
              },
              (t) => {
                console.log(t),
                  this.toastService.error(t.error.messages[0], 'Login Error'),
                  (this.loading = !1);
              }
            );
        }
        onScroll() {
          this.morePages &&
            this.authService.isLoggedIn() &&
            this.actualPage < this.totalPage &&
            (this.actualPage++, this.getAllImages(this.actualPage));
        }
        getImageDetails(t) {
          this.imageService.getPictureById(t).subscribe((t) => {
            console.log(t);
          });
        }
      }
      class Ul extends x {
        constructor(t) {
          super(), (this._value = t);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(t) {
          const e = super._subscribe(t);
          return e && !e.closed && t.next(this._value), e;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new S();
          return this._value;
        }
        next(t) {
          super.next((this._value = t));
        }
      }
      const $l = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = 'no elements in sequence'),
            (this.name = 'EmptyError'),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      class zl extends f {
        notifyNext(t, e, n, s, i) {
          this.destination.next(e);
        }
        notifyError(t, e) {
          this.destination.error(t);
        }
        notifyComplete(t) {
          this.destination.complete();
        }
      }
      class Wl extends f {
        constructor(t, e, n) {
          super(),
            (this.parent = t),
            (this.outerValue = e),
            (this.outerIndex = n),
            (this.index = 0);
        }
        _next(t) {
          this.parent.notifyNext(
            this.outerValue,
            t,
            this.outerIndex,
            this.index++,
            this
          );
        }
        _error(t) {
          this.parent.notifyError(t, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      function ql(t, e, n, s, i = new Wl(t, n, s)) {
        if (!i.closed) return e instanceof b ? e.subscribe(i) : F(e)(i);
      }
      const Kl = {};
      class Zl {
        constructor(t) {
          this.resultSelector = t;
        }
        call(t, e) {
          return e.subscribe(new Gl(t, this.resultSelector));
        }
      }
      class Gl extends zl {
        constructor(t, e) {
          super(t),
            (this.resultSelector = e),
            (this.active = 0),
            (this.values = []),
            (this.observables = []);
        }
        _next(t) {
          this.values.push(Kl), this.observables.push(t);
        }
        _complete() {
          const t = this.observables,
            e = t.length;
          if (0 === e) this.destination.complete();
          else {
            (this.active = e), (this.toRespond = e);
            for (let n = 0; n < e; n++) this.add(ql(this, t[n], void 0, n));
          }
        }
        notifyComplete(t) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(t, e, n) {
          const s = this.values,
            i = this.toRespond
              ? s[n] === Kl
                ? --this.toRespond
                : this.toRespond
              : 0;
          (s[n] = e),
            0 === i &&
              (this.resultSelector
                ? this._tryResultSelector(s)
                : this.destination.next(s.slice()));
        }
        _tryResultSelector(t) {
          let e;
          try {
            e = this.resultSelector.apply(this, t);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      const Ql = new b((t) => t.complete());
      function Yl(t) {
        return t
          ? (function (t) {
              return new b((e) => t.schedule(() => e.complete()));
            })(t)
          : Ql;
      }
      function Xl(t) {
        return new b((e) => {
          let n;
          try {
            n = t();
          } catch (s) {
            return void e.error(s);
          }
          return (n ? j(n) : Yl()).subscribe(e);
        });
      }
      function Jl() {
        return W(1);
      }
      const tc = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = 'argument out of range'),
            (this.name = 'ArgumentOutOfRangeError'),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      function ec(t) {
        return function (e) {
          return 0 === t ? Yl() : e.lift(new nc(t));
        };
      }
      class nc {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new tc();
        }
        call(t, e) {
          return e.subscribe(new sc(t, this.total));
        }
      }
      class sc extends f {
        constructor(t, e) {
          super(t),
            (this.total = e),
            (this.ring = new Array()),
            (this.count = 0);
        }
        _next(t) {
          const e = this.ring,
            n = this.total,
            s = this.count++;
          e.length < n ? e.push(t) : (e[s % n] = t);
        }
        _complete() {
          const t = this.destination;
          let e = this.count;
          if (e > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              s = this.ring;
            for (let i = 0; i < n; i++) {
              const i = e++ % n;
              t.next(s[i]);
            }
          }
          t.complete();
        }
      }
      function ic(t = ac) {
        return (e) => e.lift(new rc(t));
      }
      class rc {
        constructor(t) {
          this.errorFactory = t;
        }
        call(t, e) {
          return e.subscribe(new oc(t, this.errorFactory));
        }
      }
      class oc extends f {
        constructor(t, e) {
          super(t), (this.errorFactory = e), (this.hasValue = !1);
        }
        _next(t) {
          (this.hasValue = !0), this.destination.next(t);
        }
        _complete() {
          if (this.hasValue) return this.destination.complete();
          {
            let e;
            try {
              e = this.errorFactory();
            } catch (t) {
              e = t;
            }
            this.destination.error(e);
          }
        }
      }
      function ac() {
        return new $l();
      }
      function lc(t = null) {
        return (e) => e.lift(new cc(t));
      }
      class cc {
        constructor(t) {
          this.defaultValue = t;
        }
        call(t, e) {
          return e.subscribe(new hc(t, this.defaultValue));
        }
      }
      class hc extends f {
        constructor(t, e) {
          super(t), (this.defaultValue = e), (this.isEmpty = !0);
        }
        _next(t) {
          (this.isEmpty = !1), this.destination.next(t);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue),
            this.destination.complete();
        }
      }
      function uc(t, e) {
        const n = arguments.length >= 2;
        return (s) =>
          s.pipe(
            t ? na((e, n) => t(e, n, s)) : y,
            ec(1),
            n ? lc(e) : ic(() => new $l())
          );
      }
      function dc(t) {
        return function (e) {
          const n = new pc(t),
            s = e.lift(n);
          return (n.caught = s);
        };
      }
      class pc {
        constructor(t) {
          this.selector = t;
        }
        call(t, e) {
          return e.subscribe(new fc(t, this.selector, this.caught));
        }
      }
      class fc extends H {
        constructor(t, e, n) {
          super(t), (this.selector = e), (this.caught = n);
        }
        error(t) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(t, this.caught);
            } catch (e) {
              return void super.error(e);
            }
            this._unsubscribeAndRecycle();
            const s = new V(this);
            this.add(s);
            const i = B(n, s);
            i !== s && this.add(i);
          }
        }
      }
      function mc(t) {
        return (e) => (0 === t ? Yl() : e.lift(new gc(t)));
      }
      class gc {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new tc();
        }
        call(t, e) {
          return e.subscribe(new yc(t, this.total));
        }
      }
      class yc extends f {
        constructor(t, e) {
          super(t), (this.total = e), (this.count = 0);
        }
        _next(t) {
          const e = this.total,
            n = ++this.count;
          n <= e &&
            (this.destination.next(t),
            n === e && (this.destination.complete(), this.unsubscribe()));
        }
      }
      function _c(t, e) {
        const n = arguments.length >= 2;
        return (s) =>
          s.pipe(
            t ? na((e, n) => t(e, n, s)) : y,
            mc(1),
            n ? lc(e) : ic(() => new $l())
          );
      }
      class vc {
        constructor(t, e, n) {
          (this.predicate = t), (this.thisArg = e), (this.source = n);
        }
        call(t, e) {
          return e.subscribe(
            new bc(t, this.predicate, this.thisArg, this.source)
          );
        }
      }
      class bc extends f {
        constructor(t, e, n, s) {
          super(t),
            (this.predicate = e),
            (this.thisArg = n),
            (this.source = s),
            (this.index = 0),
            (this.thisArg = n || this);
        }
        notifyComplete(t) {
          this.destination.next(t), this.destination.complete();
        }
        _next(t) {
          let e = !1;
          try {
            e = this.predicate.call(this.thisArg, t, this.index++, this.source);
          } catch (n) {
            return void this.destination.error(n);
          }
          e || this.notifyComplete(!1);
        }
        _complete() {
          this.notifyComplete(!0);
        }
      }
      function wc(t, e) {
        return 'function' == typeof e
          ? (n) =>
              n.pipe(wc((n, s) => j(t(n, s)).pipe(D((t, i) => e(n, t, s, i)))))
          : (e) => e.lift(new Sc(t));
      }
      class Sc {
        constructor(t) {
          this.project = t;
        }
        call(t, e) {
          return e.subscribe(new Ec(t, this.project));
        }
      }
      class Ec extends H {
        constructor(t, e) {
          super(t), (this.project = e), (this.index = 0);
        }
        _next(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (s) {
            return void this.destination.error(s);
          }
          this._innerSub(e);
        }
        _innerSub(t) {
          const e = this.innerSubscription;
          e && e.unsubscribe();
          const n = new V(this),
            s = this.destination;
          s.add(n),
            (this.innerSubscription = B(t, n)),
            this.innerSubscription !== n && s.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: t } = this;
          (t && !t.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = void 0;
        }
        notifyComplete() {
          (this.innerSubscription = void 0),
            this.isStopped && super._complete();
        }
        notifyNext(t) {
          this.destination.next(t);
        }
      }
      function Cc(...t) {
        return Jl()(ta(...t));
      }
      function xc(...t) {
        const e = t[t.length - 1];
        return k(e) ? (t.pop(), (n) => Cc(t, n, e)) : (e) => Cc(t, e);
      }
      function Tc(t, e) {
        let n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function (s) {
            return s.lift(new kc(t, e, n));
          }
        );
      }
      class kc {
        constructor(t, e, n = !1) {
          (this.accumulator = t), (this.seed = e), (this.hasSeed = n);
        }
        call(t, e) {
          return e.subscribe(
            new Dc(t, this.accumulator, this.seed, this.hasSeed)
          );
        }
      }
      class Dc extends f {
        constructor(t, e, n, s) {
          super(t),
            (this.accumulator = e),
            (this._seed = n),
            (this.hasSeed = s),
            (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(t) {
          (this.hasSeed = !0), (this._seed = t);
        }
        _next(t) {
          if (this.hasSeed) return this._tryNext(t);
          (this.seed = t), this.destination.next(t);
        }
        _tryNext(t) {
          const e = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, t, e);
          } catch (s) {
            this.destination.error(s);
          }
          (this.seed = n), this.destination.next(n);
        }
      }
      function Rc() {}
      function Ac(t, e, n) {
        return function (s) {
          return s.lift(new Ic(t, e, n));
        };
      }
      class Ic {
        constructor(t, e, n) {
          (this.nextOrObserver = t), (this.error = e), (this.complete = n);
        }
        call(t, e) {
          return e.subscribe(
            new Oc(t, this.nextOrObserver, this.error, this.complete)
          );
        }
      }
      class Oc extends f {
        constructor(t, e, n, i) {
          super(t),
            (this._tapNext = Rc),
            (this._tapError = Rc),
            (this._tapComplete = Rc),
            (this._tapError = n || Rc),
            (this._tapComplete = i || Rc),
            s(e)
              ? ((this._context = this), (this._tapNext = e))
              : e &&
                ((this._context = e),
                (this._tapNext = e.next || Rc),
                (this._tapError = e.error || Rc),
                (this._tapComplete = e.complete || Rc));
        }
        _next(t) {
          try {
            this._tapNext.call(this._context, t);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.next(t);
        }
        _error(t) {
          try {
            this._tapError.call(this._context, t);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.error(t);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (t) {
            return void this.destination.error(t);
          }
          return this.destination.complete();
        }
      }
      class Pc {
        constructor(t) {
          this.callback = t;
        }
        call(t, e) {
          return e.subscribe(new Nc(t, this.callback));
        }
      }
      class Nc extends f {
        constructor(t, e) {
          super(t), this.add(new u(e));
        }
      }
      let Mc = null;
      function Fc() {
        return Mc;
      }
      const Lc = {
          class: 'className',
          innerHtml: 'innerHTML',
          readonly: 'readOnly',
          tabindex: 'tabIndex',
        },
        jc = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS',
        },
        Vc = {
          A: '1',
          B: '2',
          C: '3',
          D: '4',
          E: '5',
          F: '6',
          G: '7',
          H: '8',
          I: '9',
          J: '*',
          K: '+',
          M: '-',
          N: '.',
          O: '/',
          '`': '0',
          '\x90': 'NumLock',
        },
        Hc = (() => {
          if (bt.Node)
            return (
              bt.Node.prototype.contains ||
              function (t) {
                return !!(16 & this.compareDocumentPosition(t));
              }
            );
        })();
      class Bc extends class extends class {
        constructor() {
          this.resourceLoaderType = null;
        }
        get attrToPropMap() {
          return this._attrToPropMap;
        }
        set attrToPropMap(t) {
          this._attrToPropMap = t;
        }
      } {
        constructor() {
          super(), (this._animationPrefix = null), (this._transitionEnd = null);
          try {
            const t = this.createElement('div', document);
            if (null != this.getStyle(t, 'animationName'))
              this._animationPrefix = '';
            else {
              const e = ['Webkit', 'Moz', 'O', 'ms'];
              for (let n = 0; n < e.length; n++)
                if (null != this.getStyle(t, e[n] + 'AnimationName')) {
                  this._animationPrefix = '-' + e[n].toLowerCase() + '-';
                  break;
                }
            }
            const e = {
              WebkitTransition: 'webkitTransitionEnd',
              MozTransition: 'transitionend',
              OTransition: 'oTransitionEnd otransitionend',
              transition: 'transitionend',
            };
            Object.keys(e).forEach((n) => {
              null != this.getStyle(t, n) && (this._transitionEnd = e[n]);
            });
          } catch (t) {
            (this._animationPrefix = null), (this._transitionEnd = null);
          }
        }
        getDistributedNodes(t) {
          return t.getDistributedNodes();
        }
        resolveAndSetHref(t, e, n) {
          t.href = null == n ? e : e + '/../' + n;
        }
        supportsDOMEvents() {
          return !0;
        }
        supportsNativeShadowDOM() {
          return 'function' == typeof document.body.createShadowRoot;
        }
        getAnimationPrefix() {
          return this._animationPrefix ? this._animationPrefix : '';
        }
        getTransitionEnd() {
          return this._transitionEnd ? this._transitionEnd : '';
        }
        supportsAnimation() {
          return null != this._animationPrefix && null != this._transitionEnd;
        }
      } {
        parse(t) {
          throw new Error('parse not implemented');
        }
        static makeCurrent() {
          var t;
          (t = new Bc()), Mc || (Mc = t);
        }
        hasProperty(t, e) {
          return e in t;
        }
        setProperty(t, e, n) {
          t[e] = n;
        }
        getProperty(t, e) {
          return t[e];
        }
        invoke(t, e, n) {
          t[e](...n);
        }
        logError(t) {
          window.console && (console.error ? console.error(t) : console.log(t));
        }
        log(t) {
          window.console && window.console.log && window.console.log(t);
        }
        logGroup(t) {
          window.console && window.console.group && window.console.group(t);
        }
        logGroupEnd() {
          window.console &&
            window.console.groupEnd &&
            window.console.groupEnd();
        }
        get attrToPropMap() {
          return Lc;
        }
        contains(t, e) {
          return Hc.call(t, e);
        }
        querySelector(t, e) {
          return t.querySelector(e);
        }
        querySelectorAll(t, e) {
          return t.querySelectorAll(e);
        }
        on(t, e, n) {
          t.addEventListener(e, n, !1);
        }
        onAndCancel(t, e, n) {
          return (
            t.addEventListener(e, n, !1),
            () => {
              t.removeEventListener(e, n, !1);
            }
          );
        }
        dispatchEvent(t, e) {
          t.dispatchEvent(e);
        }
        createMouseEvent(t) {
          const e = this.getDefaultDocument().createEvent('MouseEvent');
          return e.initEvent(t, !0, !0), e;
        }
        createEvent(t) {
          const e = this.getDefaultDocument().createEvent('Event');
          return e.initEvent(t, !0, !0), e;
        }
        preventDefault(t) {
          t.preventDefault(), (t.returnValue = !1);
        }
        isPrevented(t) {
          return (
            t.defaultPrevented || (null != t.returnValue && !t.returnValue)
          );
        }
        getInnerHTML(t) {
          return t.innerHTML;
        }
        getTemplateContent(t) {
          return 'content' in t && this.isTemplateElement(t) ? t.content : null;
        }
        getOuterHTML(t) {
          return t.outerHTML;
        }
        nodeName(t) {
          return t.nodeName;
        }
        nodeValue(t) {
          return t.nodeValue;
        }
        type(t) {
          return t.type;
        }
        content(t) {
          return this.hasProperty(t, 'content') ? t.content : t;
        }
        firstChild(t) {
          return t.firstChild;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        parentElement(t) {
          return t.parentNode;
        }
        childNodes(t) {
          return t.childNodes;
        }
        childNodesAsList(t) {
          const e = t.childNodes,
            n = new Array(e.length);
          for (let s = 0; s < e.length; s++) n[s] = e[s];
          return n;
        }
        clearNodes(t) {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
        }
        appendChild(t, e) {
          t.appendChild(e);
        }
        removeChild(t, e) {
          t.removeChild(e);
        }
        replaceChild(t, e, n) {
          t.replaceChild(e, n);
        }
        remove(t) {
          return t.parentNode && t.parentNode.removeChild(t), t;
        }
        insertBefore(t, e, n) {
          t.insertBefore(n, e);
        }
        insertAllBefore(t, e, n) {
          n.forEach((n) => t.insertBefore(n, e));
        }
        insertAfter(t, e, n) {
          t.insertBefore(n, e.nextSibling);
        }
        setInnerHTML(t, e) {
          t.innerHTML = e;
        }
        getText(t) {
          return t.textContent;
        }
        setText(t, e) {
          t.textContent = e;
        }
        getValue(t) {
          return t.value;
        }
        setValue(t, e) {
          t.value = e;
        }
        getChecked(t) {
          return t.checked;
        }
        setChecked(t, e) {
          t.checked = e;
        }
        createComment(t) {
          return this.getDefaultDocument().createComment(t);
        }
        createTemplate(t) {
          const e = this.getDefaultDocument().createElement('template');
          return (e.innerHTML = t), e;
        }
        createElement(t, e) {
          return (e = e || this.getDefaultDocument()).createElement(t);
        }
        createElementNS(t, e, n) {
          return (n = n || this.getDefaultDocument()).createElementNS(t, e);
        }
        createTextNode(t, e) {
          return (e = e || this.getDefaultDocument()).createTextNode(t);
        }
        createScriptTag(t, e, n) {
          const s = (n = n || this.getDefaultDocument()).createElement(
            'SCRIPT'
          );
          return s.setAttribute(t, e), s;
        }
        createStyleElement(t, e) {
          const n = (e = e || this.getDefaultDocument()).createElement('style');
          return this.appendChild(n, this.createTextNode(t, e)), n;
        }
        createShadowRoot(t) {
          return t.createShadowRoot();
        }
        getShadowRoot(t) {
          return t.shadowRoot;
        }
        getHost(t) {
          return t.host;
        }
        clone(t) {
          return t.cloneNode(!0);
        }
        getElementsByClassName(t, e) {
          return t.getElementsByClassName(e);
        }
        getElementsByTagName(t, e) {
          return t.getElementsByTagName(e);
        }
        classList(t) {
          return Array.prototype.slice.call(t.classList, 0);
        }
        addClass(t, e) {
          t.classList.add(e);
        }
        removeClass(t, e) {
          t.classList.remove(e);
        }
        hasClass(t, e) {
          return t.classList.contains(e);
        }
        setStyle(t, e, n) {
          t.style[e] = n;
        }
        removeStyle(t, e) {
          t.style[e] = '';
        }
        getStyle(t, e) {
          return t.style[e];
        }
        hasStyle(t, e, n) {
          const s = this.getStyle(t, e) || '';
          return n ? s == n : s.length > 0;
        }
        tagName(t) {
          return t.tagName;
        }
        attributeMap(t) {
          const e = new Map(),
            n = t.attributes;
          for (let s = 0; s < n.length; s++) {
            const t = n.item(s);
            e.set(t.name, t.value);
          }
          return e;
        }
        hasAttribute(t, e) {
          return t.hasAttribute(e);
        }
        hasAttributeNS(t, e, n) {
          return t.hasAttributeNS(e, n);
        }
        getAttribute(t, e) {
          return t.getAttribute(e);
        }
        getAttributeNS(t, e, n) {
          return t.getAttributeNS(e, n);
        }
        setAttribute(t, e, n) {
          t.setAttribute(e, n);
        }
        setAttributeNS(t, e, n, s) {
          t.setAttributeNS(e, n, s);
        }
        removeAttribute(t, e) {
          t.removeAttribute(e);
        }
        removeAttributeNS(t, e, n) {
          t.removeAttributeNS(e, n);
        }
        templateAwareRoot(t) {
          return this.isTemplateElement(t) ? this.content(t) : t;
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        getBoundingClientRect(t) {
          try {
            return t.getBoundingClientRect();
          } catch (e) {
            return {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              width: 0,
              height: 0,
            };
          }
        }
        getTitle(t) {
          return t.title;
        }
        setTitle(t, e) {
          t.title = e || '';
        }
        elementMatches(t, e) {
          return (
            !!this.isElementNode(t) &&
            ((t.matches && t.matches(e)) ||
              (t.msMatchesSelector && t.msMatchesSelector(e)) ||
              (t.webkitMatchesSelector && t.webkitMatchesSelector(e)))
          );
        }
        isTemplateElement(t) {
          return this.isElementNode(t) && 'TEMPLATE' === t.nodeName;
        }
        isTextNode(t) {
          return t.nodeType === Node.TEXT_NODE;
        }
        isCommentNode(t) {
          return t.nodeType === Node.COMMENT_NODE;
        }
        isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        }
        hasShadowRoot(t) {
          return null != t.shadowRoot && t instanceof HTMLElement;
        }
        isShadowRoot(t) {
          return t instanceof DocumentFragment;
        }
        importIntoDoc(t) {
          return document.importNode(this.templateAwareRoot(t), !0);
        }
        adoptNode(t) {
          return document.adoptNode(t);
        }
        getHref(t) {
          return t.getAttribute('href');
        }
        getEventKey(t) {
          let e = t.key;
          if (null == e) {
            if (((e = t.keyIdentifier), null == e)) return 'Unidentified';
            e.startsWith('U+') &&
              ((e = String.fromCharCode(parseInt(e.substring(2), 16))),
              3 === t.location && Vc.hasOwnProperty(e) && (e = Vc[e]));
          }
          return jc[e] || e;
        }
        getGlobalEventTarget(t, e) {
          return 'window' === e
            ? window
            : 'document' === e
            ? t
            : 'body' === e
            ? t.body
            : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(t) {
          const e =
            $c || (($c = document.querySelector('base')), $c)
              ? $c.getAttribute('href')
              : null;
          return null == e
            ? null
            : ((n = e),
              Uc || (Uc = document.createElement('a')),
              Uc.setAttribute('href', n),
              '/' === Uc.pathname.charAt(0) ? Uc.pathname : '/' + Uc.pathname);
          var n;
        }
        resetBaseElement() {
          $c = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        setData(t, e, n) {
          this.setAttribute(t, 'data-' + e, n);
        }
        getData(t, e) {
          return this.getAttribute(t, 'data-' + e);
        }
        getComputedStyle(t) {
          return getComputedStyle(t);
        }
        supportsWebAnimation() {
          return 'function' == typeof Element.prototype.animate;
        }
        performanceNow() {
          return window.performance && window.performance.now
            ? window.performance.now()
            : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(t) {
          return Wa(document.cookie, t);
        }
        setCookie(t, e) {
          document.cookie = encodeURIComponent(t) + '=' + encodeURIComponent(e);
        }
      }
      let Uc,
        $c = null;
      function zc() {
        return !!window.history.pushState;
      }
      const Wc = new wt('TRANSITION_ID'),
        qc = [
          {
            provide: yi,
            useFactory: function (t, e, n) {
              return () => {
                n.get(_i).donePromise.then(() => {
                  const n = Fc();
                  Array.prototype.slice
                    .apply(n.querySelectorAll(e, 'style[ng-transition]'))
                    .filter((e) => n.getAttribute(e, 'ng-transition') === t)
                    .forEach((t) => n.remove(t));
                });
              };
            },
            deps: [Wc, tl, Se],
            multi: !0,
          },
        ];
      class Kc {
        static init() {
          var t;
          (t = new Kc()), (tr = t);
        }
        addToWindow(t) {
          (bt.getAngularTestability = (e, n = !0) => {
            const s = t.findTestabilityInTree(e, n);
            if (null == s)
              throw new Error('Could not find testability for element.');
            return s;
          }),
            (bt.getAllAngularTestabilities = () => t.getAllTestabilities()),
            (bt.getAllAngularRootElements = () => t.getAllRootElements()),
            bt.frameworkStabilizers || (bt.frameworkStabilizers = []),
            bt.frameworkStabilizers.push((t) => {
              const e = bt.getAllAngularTestabilities();
              let n = e.length,
                s = !1;
              const i = function (e) {
                (s = s || e), n--, 0 == n && t(s);
              };
              e.forEach(function (t) {
                t.whenStable(i);
              });
            });
        }
        findTestabilityInTree(t, e, n) {
          if (null == e) return null;
          const s = t.getTestability(e);
          return null != s
            ? s
            : n
            ? Fc().isShadowRoot(e)
              ? this.findTestabilityInTree(t, Fc().getHost(e), !0)
              : this.findTestabilityInTree(t, Fc().parentElement(e), !0)
            : null;
        }
      }
      function Zc(t, e) {
        ('undefined' != typeof COMPILED && COMPILED) ||
          ((bt.ng = bt.ng || {})[t] = e);
      }
      const Gc = (() => ({ ApplicationRef: ar, NgZone: $i }))();
      function Qc(t) {
        return _r(t);
      }
      const Yc = new wt('EventManagerPlugins');
      class Xc {
        constructor(t, e) {
          (this._zone = e),
            (this._eventNameToPlugin = new Map()),
            t.forEach((t) => (t.manager = this)),
            (this._plugins = t.slice().reverse());
        }
        addEventListener(t, e, n) {
          return this._findPluginFor(e).addEventListener(t, e, n);
        }
        addGlobalEventListener(t, e, n) {
          return this._findPluginFor(e).addGlobalEventListener(t, e, n);
        }
        getZone() {
          return this._zone;
        }
        _findPluginFor(t) {
          const e = this._eventNameToPlugin.get(t);
          if (e) return e;
          const n = this._plugins;
          for (let s = 0; s < n.length; s++) {
            const e = n[s];
            if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e;
          }
          throw new Error('No event manager plugin found for event ' + t);
        }
      }
      class Jc {
        constructor(t) {
          this._doc = t;
        }
        addGlobalEventListener(t, e, n) {
          const s = Fc().getGlobalEventTarget(this._doc, t);
          if (!s)
            throw new Error(`Unsupported event target ${s} for event ${e}`);
          return this.addEventListener(s, e, n);
        }
      }
      class th {
        constructor() {
          this._stylesSet = new Set();
        }
        addStyles(t) {
          const e = new Set();
          t.forEach((t) => {
            this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t));
          }),
            this.onStylesAdded(e);
        }
        onStylesAdded(t) {}
        getAllStyles() {
          return Array.from(this._stylesSet);
        }
      }
      class eh extends th {
        constructor(t) {
          super(),
            (this._doc = t),
            (this._hostNodes = new Set()),
            (this._styleNodes = new Set()),
            this._hostNodes.add(t.head);
        }
        _addStylesToHost(t, e) {
          t.forEach((t) => {
            const n = this._doc.createElement('style');
            (n.textContent = t), this._styleNodes.add(e.appendChild(n));
          });
        }
        addHost(t) {
          this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t);
        }
        removeHost(t) {
          this._hostNodes.delete(t);
        }
        onStylesAdded(t) {
          this._hostNodes.forEach((e) => this._addStylesToHost(t, e));
        }
        ngOnDestroy() {
          this._styleNodes.forEach((t) => Fc().remove(t));
        }
      }
      const nh = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
        },
        sh = /%COMP%/g;
      function ih(t, e, n) {
        for (let s = 0; s < e.length; s++) {
          let i = e[s];
          Array.isArray(i) ? ih(t, i, n) : ((i = i.replace(sh, t)), n.push(i));
        }
        return n;
      }
      function rh(t) {
        return (e) => {
          !1 === t(e) && (e.preventDefault(), (e.returnValue = !1));
        };
      }
      class oh {
        constructor(t, e, n) {
          (this.eventManager = t),
            (this.sharedStylesHost = e),
            (this.appId = n),
            (this.rendererByCompId = new Map()),
            (this.defaultRenderer = new ah(t));
        }
        createRenderer(t, e) {
          if (!t || !e) return this.defaultRenderer;
          switch (e.encapsulation) {
            case Ft.Emulated: {
              let n = this.rendererByCompId.get(e.id);
              return (
                n ||
                  ((n = new hh(
                    this.eventManager,
                    this.sharedStylesHost,
                    e,
                    this.appId
                  )),
                  this.rendererByCompId.set(e.id, n)),
                n.applyToHost(t),
                n
              );
            }
            case Ft.Native:
            case Ft.ShadowDom:
              return new uh(this.eventManager, this.sharedStylesHost, t, e);
            default:
              if (!this.rendererByCompId.has(e.id)) {
                const t = ih(e.id, e.styles, []);
                this.sharedStylesHost.addStyles(t),
                  this.rendererByCompId.set(e.id, this.defaultRenderer);
              }
              return this.defaultRenderer;
          }
        }
        begin() {}
        end() {}
      }
      class ah {
        constructor(t) {
          (this.eventManager = t), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(t, e) {
          return e
            ? document.createElementNS(nh[e] || e, t)
            : document.createElement(t);
        }
        createComment(t) {
          return document.createComment(t);
        }
        createText(t) {
          return document.createTextNode(t);
        }
        appendChild(t, e) {
          t.appendChild(e);
        }
        insertBefore(t, e, n) {
          t && t.insertBefore(e, n);
        }
        removeChild(t, e) {
          t && t.removeChild(e);
        }
        selectRootElement(t, e) {
          let n = 'string' == typeof t ? document.querySelector(t) : t;
          if (!n)
            throw new Error(`The selector "${t}" did not match any elements`);
          return e || (n.textContent = ''), n;
        }
        parentNode(t) {
          return t.parentNode;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        setAttribute(t, e, n, s) {
          if (s) {
            e = s + ':' + e;
            const i = nh[s];
            i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n);
          } else t.setAttribute(e, n);
        }
        removeAttribute(t, e, n) {
          if (n) {
            const s = nh[n];
            s ? t.removeAttributeNS(s, e) : t.removeAttribute(`${n}:${e}`);
          } else t.removeAttribute(e);
        }
        addClass(t, e) {
          t.classList.add(e);
        }
        removeClass(t, e) {
          t.classList.remove(e);
        }
        setStyle(t, e, n, s) {
          s & Je.DashCase
            ? t.style.setProperty(e, n, s & Je.Important ? 'important' : '')
            : (t.style[e] = n);
        }
        removeStyle(t, e, n) {
          n & Je.DashCase ? t.style.removeProperty(e) : (t.style[e] = '');
        }
        setProperty(t, e, n) {
          ch(e, 'property'), (t[e] = n);
        }
        setValue(t, e) {
          t.nodeValue = e;
        }
        listen(t, e, n) {
          return (
            ch(e, 'listener'),
            'string' == typeof t
              ? this.eventManager.addGlobalEventListener(t, e, rh(n))
              : this.eventManager.addEventListener(t, e, rh(n))
          );
        }
      }
      const lh = (() => '@'.charCodeAt(0))();
      function ch(t, e) {
        if (t.charCodeAt(0) === lh)
          throw new Error(
            `Found the synthetic ${e} ${t}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`
          );
      }
      class hh extends ah {
        constructor(t, e, n, s) {
          super(t), (this.component = n);
          const i = ih(s + '-' + n.id, n.styles, []);
          e.addStyles(i),
            (this.contentAttr = '_ngcontent-%COMP%'.replace(
              sh,
              s + '-' + n.id
            )),
            (this.hostAttr = (function (t) {
              return '_nghost-%COMP%'.replace(sh, t);
            })(s + '-' + n.id));
        }
        applyToHost(t) {
          super.setAttribute(t, this.hostAttr, '');
        }
        createElement(t, e) {
          const n = super.createElement(t, e);
          return super.setAttribute(n, this.contentAttr, ''), n;
        }
      }
      class uh extends ah {
        constructor(t, e, n, s) {
          super(t),
            (this.sharedStylesHost = e),
            (this.hostEl = n),
            (this.component = s),
            (this.shadowRoot =
              s.encapsulation === Ft.ShadowDom
                ? n.attachShadow({ mode: 'open' })
                : n.createShadowRoot()),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const i = ih(s.id, s.styles, []);
          for (let r = 0; r < i.length; r++) {
            const t = document.createElement('style');
            (t.textContent = i[r]), this.shadowRoot.appendChild(t);
          }
        }
        nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(t, e) {
          return super.appendChild(this.nodeOrShadowRoot(t), e);
        }
        insertBefore(t, e, n) {
          return super.insertBefore(this.nodeOrShadowRoot(t), e, n);
        }
        removeChild(t, e) {
          return super.removeChild(this.nodeOrShadowRoot(t), e);
        }
        parentNode(t) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(t))
          );
        }
      }
      const dh = (() =>
          ('undefined' != typeof Zone && Zone.__symbol__) ||
          function (t) {
            return '__zone_symbol__' + t;
          })(),
        ph = dh('addEventListener'),
        fh = dh('removeEventListener'),
        mh = {},
        gh = '__zone_symbol__propagationStopped',
        yh = (() => {
          const t =
            'undefined' != typeof Zone && Zone[dh('BLACK_LISTED_EVENTS')];
          if (t) {
            const e = {};
            return (
              t.forEach((t) => {
                e[t] = t;
              }),
              e
            );
          }
        })(),
        _h = function (t) {
          return !!yh && yh.hasOwnProperty(t);
        },
        vh = function (t) {
          const e = mh[t.type];
          if (!e) return;
          const n = this[e];
          if (!n) return;
          const s = [t];
          if (1 === n.length) {
            const t = n[0];
            return t.zone !== Zone.current
              ? t.zone.run(t.handler, this, s)
              : t.handler.apply(this, s);
          }
          {
            const e = n.slice();
            for (let n = 0; n < e.length && !0 !== t[gh]; n++) {
              const t = e[n];
              t.zone !== Zone.current
                ? t.zone.run(t.handler, this, s)
                : t.handler.apply(this, s);
            }
          }
        };
      class bh extends Jc {
        constructor(t, e, n) {
          super(t),
            (this.ngZone = e),
            (n &&
              (function (t) {
                return 'server' === t;
              })(n)) ||
              this.patchEvent();
        }
        patchEvent() {
          if ('undefined' == typeof Event || !Event || !Event.prototype) return;
          if (Event.prototype.__zone_symbol__stopImmediatePropagation) return;
          const t = (Event.prototype.__zone_symbol__stopImmediatePropagation =
            Event.prototype.stopImmediatePropagation);
          Event.prototype.stopImmediatePropagation = function () {
            this && (this[gh] = !0), t && t.apply(this, arguments);
          };
        }
        supports(t) {
          return !0;
        }
        addEventListener(t, e, n) {
          let s = n;
          if (!t[ph] || ($i.isInAngularZone() && !_h(e)))
            t.addEventListener(e, s, !1);
          else {
            let n = mh[e];
            n || (n = mh[e] = dh('ANGULAR' + e + 'FALSE'));
            let i = t[n];
            const r = i && i.length > 0;
            i || (i = t[n] = []);
            const o = _h(e) ? Zone.root : Zone.current;
            if (0 === i.length) i.push({ zone: o, handler: s });
            else {
              let t = !1;
              for (let e = 0; e < i.length; e++)
                if (i[e].handler === s) {
                  t = !0;
                  break;
                }
              t || i.push({ zone: o, handler: s });
            }
            r || t[ph](e, vh, !1);
          }
          return () => this.removeEventListener(t, e, s);
        }
        removeEventListener(t, e, n) {
          let s = t[fh];
          if (!s) return t.removeEventListener.apply(t, [e, n, !1]);
          let i = mh[e],
            r = i && t[i];
          if (!r) return t.removeEventListener.apply(t, [e, n, !1]);
          let o = !1;
          for (let a = 0; a < r.length; a++)
            if (r[a].handler === n) {
              (o = !0), r.splice(a, 1);
              break;
            }
          o
            ? 0 === r.length && s.apply(t, [e, vh, !1])
            : t.removeEventListener.apply(t, [e, n, !1]);
        }
      }
      const wh = {
          pan: !0,
          panstart: !0,
          panmove: !0,
          panend: !0,
          pancancel: !0,
          panleft: !0,
          panright: !0,
          panup: !0,
          pandown: !0,
          pinch: !0,
          pinchstart: !0,
          pinchmove: !0,
          pinchend: !0,
          pinchcancel: !0,
          pinchin: !0,
          pinchout: !0,
          press: !0,
          pressup: !0,
          rotate: !0,
          rotatestart: !0,
          rotatemove: !0,
          rotateend: !0,
          rotatecancel: !0,
          swipe: !0,
          swipeleft: !0,
          swiperight: !0,
          swipeup: !0,
          swipedown: !0,
          tap: !0,
        },
        Sh = new wt('HammerGestureConfig'),
        Eh = new wt('HammerLoader');
      class Ch {
        constructor() {
          (this.events = []), (this.overrides = {});
        }
        buildHammer(t) {
          const e = new Hammer(t, this.options);
          e.get('pinch').set({ enable: !0 }),
            e.get('rotate').set({ enable: !0 });
          for (const n in this.overrides) e.get(n).set(this.overrides[n]);
          return e;
        }
      }
      class xh extends Jc {
        constructor(t, e, n, s) {
          super(t), (this._config = e), (this.console = n), (this.loader = s);
        }
        supports(t) {
          return !(
            (!wh.hasOwnProperty(t.toLowerCase()) && !this.isCustomEvent(t)) ||
            (!window.Hammer &&
              !this.loader &&
              (this.console.warn(
                `The "${t}" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.`
              ),
              1))
          );
        }
        addEventListener(t, e, n) {
          const s = this.manager.getZone();
          if (((e = e.toLowerCase()), !window.Hammer && this.loader)) {
            let s = !1,
              i = () => {
                s = !0;
              };
            return (
              this.loader()
                .then(() => {
                  if (!window.Hammer)
                    return (
                      this.console.warn(
                        'The custom HAMMER_LOADER completed, but Hammer.JS is not present.'
                      ),
                      void (i = () => {})
                    );
                  s || (i = this.addEventListener(t, e, n));
                })
                .catch(() => {
                  this.console.warn(
                    `The "${e}" event cannot be bound because the custom Hammer.JS loader failed.`
                  ),
                    (i = () => {});
                }),
              () => {
                i();
              }
            );
          }
          return s.runOutsideAngular(() => {
            const i = this._config.buildHammer(t),
              r = function (t) {
                s.runGuarded(function () {
                  n(t);
                });
              };
            return (
              i.on(e, r),
              () => {
                i.off(e, r), 'function' == typeof i.destroy && i.destroy();
              }
            );
          });
        }
        isCustomEvent(t) {
          return this._config.events.indexOf(t) > -1;
        }
      }
      const Th = ['alt', 'control', 'meta', 'shift'],
        kh = {
          alt: (t) => t.altKey,
          control: (t) => t.ctrlKey,
          meta: (t) => t.metaKey,
          shift: (t) => t.shiftKey,
        };
      class Dh extends Jc {
        constructor(t) {
          super(t);
        }
        supports(t) {
          return null != Dh.parseEventName(t);
        }
        addEventListener(t, e, n) {
          const s = Dh.parseEventName(e),
            i = Dh.eventCallback(s.fullKey, n, this.manager.getZone());
          return this.manager
            .getZone()
            .runOutsideAngular(() => Fc().onAndCancel(t, s.domEventName, i));
        }
        static parseEventName(t) {
          const e = t.toLowerCase().split('.'),
            n = e.shift();
          if (0 === e.length || ('keydown' !== n && 'keyup' !== n)) return null;
          const s = Dh._normalizeKey(e.pop());
          let i = '';
          if (
            (Th.forEach((t) => {
              const n = e.indexOf(t);
              n > -1 && (e.splice(n, 1), (i += t + '.'));
            }),
            (i += s),
            0 != e.length || 0 === s.length)
          )
            return null;
          const r = {};
          return (r.domEventName = n), (r.fullKey = i), r;
        }
        static getEventFullKey(t) {
          let e = '',
            n = Fc().getEventKey(t);
          return (
            (n = n.toLowerCase()),
            ' ' === n ? (n = 'space') : '.' === n && (n = 'dot'),
            Th.forEach((s) => {
              s != n && (0, kh[s])(t) && (e += s + '.');
            }),
            (e += n),
            e
          );
        }
        static eventCallback(t, e, n) {
          return (s) => {
            Dh.getEventFullKey(s) === t && n.runGuarded(() => e(s));
          };
        }
        static _normalizeKey(t) {
          switch (t) {
            case 'esc':
              return 'escape';
            default:
              return t;
          }
        }
      }
      class Rh {}
      class Ah extends Rh {
        constructor(t) {
          super(), (this._doc = t);
        }
        sanitize(t, e) {
          if (null == e) return null;
          switch (t) {
            case de.NONE:
              return e;
            case de.HTML:
              return e instanceof Oh
                ? e.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(e, 'HTML'),
                  (function (t, e) {
                    let n = null;
                    try {
                      he = he || new Wt(t);
                      let s = e ? String(e) : '';
                      n = he.getInertBodyElement(s);
                      let i = 5,
                        r = s;
                      do {
                        if (0 === i)
                          throw new Error(
                            'Failed to sanitize html because the input is unstable'
                          );
                        i--,
                          (s = r),
                          (r = n.innerHTML),
                          (n = he.getInertBodyElement(s));
                      } while (s !== r);
                      const o = new oe(),
                        a = o.sanitizeChildren(ue(n) || n);
                      return (
                        zt() &&
                          o.sanitizedSomething &&
                          console.warn(
                            'WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'
                          ),
                        a
                      );
                    } finally {
                      if (n) {
                        const t = ue(n) || n;
                        for (; t.firstChild; ) t.removeChild(t.firstChild);
                      }
                    }
                  })(this._doc, String(e)));
            case de.STYLE:
              return e instanceof Ph
                ? e.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(e, 'Style'),
                  (function (t) {
                    if (!(t = String(t).trim())) return '';
                    const e = t.match(me);
                    return (e && Zt(e[1]) === e[1]) ||
                      (t.match(fe) &&
                        (function (t) {
                          let e = !0,
                            n = !0;
                          for (let s = 0; s < t.length; s++) {
                            const i = t.charAt(s);
                            "'" === i && n
                              ? (e = !e)
                              : '"' === i && e && (n = !n);
                          }
                          return e && n;
                        })(t))
                      ? t
                      : (zt() &&
                          console.warn(
                            `WARNING: sanitizing unsafe style value ${t} (see http://g.co/ng/security#xss).`
                          ),
                        'unsafe');
                  })(e));
            case de.SCRIPT:
              if (e instanceof Nh)
                return e.changingThisBreaksApplicationSecurity;
              throw (
                (this.checkNotSafeValue(e, 'Script'),
                new Error('unsafe value used in a script context'))
              );
            case de.URL:
              return e instanceof Fh || e instanceof Mh
                ? e.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(e, 'URL'), Zt(String(e)));
            case de.RESOURCE_URL:
              if (e instanceof Fh)
                return e.changingThisBreaksApplicationSecurity;
              throw (
                (this.checkNotSafeValue(e, 'ResourceURL'),
                new Error(
                  'unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'
                ))
              );
            default:
              throw new Error(
                `Unexpected SecurityContext ${t} (see http://g.co/ng/security#xss)`
              );
          }
        }
        checkNotSafeValue(t, e) {
          if (t instanceof Ih)
            throw new Error(
              `Required a safe ${e}, got a ${t.getTypeName()} (see http://g.co/ng/security#xss)`
            );
        }
        bypassSecurityTrustHtml(t) {
          return new Oh(t);
        }
        bypassSecurityTrustStyle(t) {
          return new Ph(t);
        }
        bypassSecurityTrustScript(t) {
          return new Nh(t);
        }
        bypassSecurityTrustUrl(t) {
          return new Mh(t);
        }
        bypassSecurityTrustResourceUrl(t) {
          return new Fh(t);
        }
      }
      class Ih {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return (
            'SafeValue must use [property]=binding: ' +
            this.changingThisBreaksApplicationSecurity +
            ' (see http://g.co/ng/security#xss)'
          );
        }
      }
      class Oh extends Ih {
        getTypeName() {
          return 'HTML';
        }
      }
      class Ph extends Ih {
        getTypeName() {
          return 'Style';
        }
      }
      class Nh extends Ih {
        getTypeName() {
          return 'Script';
        }
      }
      class Mh extends Ih {
        getTypeName() {
          return 'URL';
        }
      }
      class Fh extends Ih {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      const Lh = sr(br, 'browser', [
        { provide: Ei, useValue: 'browser' },
        {
          provide: Si,
          useValue: function () {
            Bc.makeCurrent(), Kc.init();
          },
          multi: !0,
        },
        {
          provide: ra,
          useClass: class extends ra {
            constructor(t) {
              super(), (this._doc = t), this._init();
            }
            _init() {
              (this.location = Fc().getLocation()),
                (this._history = Fc().getHistory());
            }
            getBaseHrefFromDOM() {
              return Fc().getBaseHref(this._doc);
            }
            onPopState(t) {
              Fc()
                .getGlobalEventTarget(this._doc, 'window')
                .addEventListener('popstate', t, !1);
            }
            onHashChange(t) {
              Fc()
                .getGlobalEventTarget(this._doc, 'window')
                .addEventListener('hashchange', t, !1);
            }
            get href() {
              return this.location.href;
            }
            get protocol() {
              return this.location.protocol;
            }
            get hostname() {
              return this.location.hostname;
            }
            get port() {
              return this.location.port;
            }
            get pathname() {
              return this.location.pathname;
            }
            get search() {
              return this.location.search;
            }
            get hash() {
              return this.location.hash;
            }
            set pathname(t) {
              this.location.pathname = t;
            }
            pushState(t, e, n) {
              zc()
                ? this._history.pushState(t, e, n)
                : (this.location.hash = n);
            }
            replaceState(t, e, n) {
              zc()
                ? this._history.replaceState(t, e, n)
                : (this.location.hash = n);
            }
            forward() {
              this._history.forward();
            }
            back() {
              this._history.back();
            }
            getState() {
              return this._history.state;
            }
          },
          deps: [tl],
        },
        {
          provide: tl,
          useFactory: function () {
            return document;
          },
          deps: [],
        },
      ]);
      class jh {
        constructor(t) {
          if (t)
            throw new Error(
              'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
            );
        }
        static withServerTransition(t) {
          return {
            ngModule: jh,
            providers: [
              { provide: vi, useValue: t.appId },
              { provide: Wc, useExisting: vi },
              qc,
            ],
          };
        }
      }
      'undefined' != typeof window && window;
      class Vh {
        constructor(t, e) {
          (this.id = t), (this.url = e);
        }
      }
      class Hh extends Vh {
        constructor(t, e, n = 'imperative', s = null) {
          super(t, e), (this.navigationTrigger = n), (this.restoredState = s);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Bh extends Vh {
        constructor(t, e, n) {
          super(t, e), (this.urlAfterRedirects = n);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class Uh extends Vh {
        constructor(t, e, n) {
          super(t, e), (this.reason = n);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class $h extends Vh {
        constructor(t, e, n) {
          super(t, e), (this.error = n);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class zh extends Vh {
        constructor(t, e, n, s) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = s);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Wh extends Vh {
        constructor(t, e, n, s) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = s);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class qh extends Vh {
        constructor(t, e, n, s, i) {
          super(t, e),
            (this.urlAfterRedirects = n),
            (this.state = s),
            (this.shouldActivate = i);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Kh extends Vh {
        constructor(t, e, n, s) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = s);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Zh extends Vh {
        constructor(t, e, n, s) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = s);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Gh {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class Qh {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Yh {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Xh {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Jh {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class tu {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class eu {
        constructor(t, e, n) {
          (this.routerEvent = t), (this.position = e), (this.anchor = n);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class nu {}
      class su {
        constructor(t) {
          this.params = t || {};
        }
        has(t) {
          return this.params.hasOwnProperty(t);
        }
        get(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e[0] : e;
          }
          return null;
        }
        getAll(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e : [e];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function iu(t) {
        return new su(t);
      }
      function ru(t) {
        const e = Error('NavigationCancelingError: ' + t);
        return (e.ngNavigationCancelingError = !0), e;
      }
      function ou(t, e, n) {
        const s = n.path.split('/');
        if (s.length > t.length) return null;
        if ('full' === n.pathMatch && (e.hasChildren() || s.length < t.length))
          return null;
        const i = {};
        for (let r = 0; r < s.length; r++) {
          const e = s[r],
            n = t[r];
          if (e.startsWith(':')) i[e.substring(1)] = n;
          else if (e !== n.path) return null;
        }
        return { consumed: t.slice(0, s.length), posParams: i };
      }
      class au {
        constructor(t, e) {
          (this.routes = t), (this.module = e);
        }
      }
      function lu(t, e = '') {
        for (let n = 0; n < t.length; n++) {
          const s = t[n];
          cu(s, hu(e, s));
        }
      }
      function cu(t, e) {
        if (!t)
          throw new Error(
            `\n      Invalid configuration of route '${e}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
          );
        if (Array.isArray(t))
          throw new Error(
            `Invalid configuration of route '${e}': Array cannot be specified`
          );
        if (
          !t.component &&
          !t.children &&
          !t.loadChildren &&
          t.outlet &&
          'primary' !== t.outlet
        )
          throw new Error(
            `Invalid configuration of route '${e}': a componentless route without children or loadChildren cannot have a named outlet set`
          );
        if (t.redirectTo && t.children)
          throw new Error(
            `Invalid configuration of route '${e}': redirectTo and children cannot be used together`
          );
        if (t.redirectTo && t.loadChildren)
          throw new Error(
            `Invalid configuration of route '${e}': redirectTo and loadChildren cannot be used together`
          );
        if (t.children && t.loadChildren)
          throw new Error(
            `Invalid configuration of route '${e}': children and loadChildren cannot be used together`
          );
        if (t.redirectTo && t.component)
          throw new Error(
            `Invalid configuration of route '${e}': redirectTo and component cannot be used together`
          );
        if (t.path && t.matcher)
          throw new Error(
            `Invalid configuration of route '${e}': path and matcher cannot be used together`
          );
        if (
          void 0 === t.redirectTo &&
          !t.component &&
          !t.children &&
          !t.loadChildren
        )
          throw new Error(
            `Invalid configuration of route '${e}'. One of the following must be provided: component, redirectTo, children or loadChildren`
          );
        if (void 0 === t.path && void 0 === t.matcher)
          throw new Error(
            `Invalid configuration of route '${e}': routes must have either a path or a matcher specified`
          );
        if ('string' == typeof t.path && '/' === t.path.charAt(0))
          throw new Error(
            `Invalid configuration of route '${e}': path cannot start with a slash`
          );
        if ('' === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch)
          throw new Error(
            `Invalid configuration of route '{path: "${e}", redirectTo: "${t.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`
          );
        if (
          void 0 !== t.pathMatch &&
          'full' !== t.pathMatch &&
          'prefix' !== t.pathMatch
        )
          throw new Error(
            `Invalid configuration of route '${e}': pathMatch can only be set to 'prefix' or 'full'`
          );
        t.children && lu(t.children, e);
      }
      function hu(t, e) {
        return e
          ? t || e.path
            ? t && !e.path
              ? t + '/'
              : !t && e.path
              ? e.path
              : `${t}/${e.path}`
            : ''
          : t;
      }
      function uu(t) {
        const e = t.children && t.children.map(uu),
          n = e ? Object.assign({}, t, { children: e }) : Object.assign({}, t);
        return (
          !n.component &&
            (e || n.loadChildren) &&
            n.outlet &&
            'primary' !== n.outlet &&
            (n.component = nu),
          n
        );
      }
      function du(t, e) {
        const n = Object.keys(t),
          s = Object.keys(e);
        if (!n || !s || n.length != s.length) return !1;
        let i;
        for (let r = 0; r < n.length; r++)
          if (((i = n[r]), t[i] !== e[i])) return !1;
        return !0;
      }
      function pu(t) {
        return Array.prototype.concat.apply([], t);
      }
      function fu(t) {
        return t.length > 0 ? t[t.length - 1] : null;
      }
      function mu(t, e) {
        for (const n in t) t.hasOwnProperty(n) && e(t[n], n);
      }
      function gu(t) {
        return Ve(t) ? t : je(t) ? j(Promise.resolve(t)) : ta(t);
      }
      function yu(t, e, n) {
        return n
          ? (function (t, e) {
              return du(t, e);
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                if (!wu(e.segments, n.segments)) return !1;
                if (e.numberOfChildren !== n.numberOfChildren) return !1;
                for (const s in n.children) {
                  if (!e.children[s]) return !1;
                  if (!t(e.children[s], n.children[s])) return !1;
                }
                return !0;
              })(t.root, e.root)
          : (function (t, e) {
              return (
                Object.keys(e).length <= Object.keys(t).length &&
                Object.keys(e).every((n) => e[n] === t[n])
              );
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                return (function e(n, s, i) {
                  if (n.segments.length > i.length)
                    return (
                      !!wu(n.segments.slice(0, i.length), i) && !s.hasChildren()
                    );
                  if (n.segments.length === i.length) {
                    if (!wu(n.segments, i)) return !1;
                    for (const e in s.children) {
                      if (!n.children[e]) return !1;
                      if (!t(n.children[e], s.children[e])) return !1;
                    }
                    return !0;
                  }
                  {
                    const t = i.slice(0, n.segments.length),
                      r = i.slice(n.segments.length);
                    return (
                      !!wu(n.segments, t) &&
                      !!n.children.primary &&
                      e(n.children.primary, s, r)
                    );
                  }
                })(e, n, n.segments);
              })(t.root, e.root);
      }
      class _u {
        constructor(t, e, n) {
          (this.root = t), (this.queryParams = e), (this.fragment = n);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = iu(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return xu.serialize(this);
        }
      }
      class vu {
        constructor(t, e) {
          (this.segments = t),
            (this.children = e),
            (this.parent = null),
            mu(e, (t, e) => (t.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return Tu(this);
        }
      }
      class bu {
        constructor(t, e) {
          (this.path = t), (this.parameters = e);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = iu(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return Ou(this);
        }
      }
      function wu(t, e) {
        return t.length === e.length && t.every((t, n) => t.path === e[n].path);
      }
      function Su(t, e) {
        let n = [];
        return (
          mu(t.children, (t, s) => {
            'primary' === s && (n = n.concat(e(t, s)));
          }),
          mu(t.children, (t, s) => {
            'primary' !== s && (n = n.concat(e(t, s)));
          }),
          n
        );
      }
      class Eu {}
      class Cu {
        parse(t) {
          const e = new Lu(t);
          return new _u(
            e.parseRootSegment(),
            e.parseQueryParams(),
            e.parseFragment()
          );
        }
        serialize(t) {
          return `${
            '/' +
            (function t(e, n) {
              if (!e.hasChildren()) return Tu(e);
              if (n) {
                const n = e.children.primary ? t(e.children.primary, !1) : '',
                  s = [];
                return (
                  mu(e.children, (e, n) => {
                    'primary' !== n && s.push(`${n}:${t(e, !1)}`);
                  }),
                  s.length > 0 ? `${n}(${s.join('//')})` : n
                );
              }
              {
                const n = Su(e, (n, s) =>
                  'primary' === s
                    ? [t(e.children.primary, !1)]
                    : [`${s}:${t(n, !1)}`]
                );
                return `${Tu(e)}/(${n.join('//')})`;
              }
            })(t.root, !0)
          }${(function (t) {
            const e = Object.keys(t).map((e) => {
              const n = t[e];
              return Array.isArray(n)
                ? n.map((t) => `${Du(e)}=${Du(t)}`).join('&')
                : `${Du(e)}=${Du(n)}`;
            });
            return e.length ? '?' + e.join('&') : '';
          })(t.queryParams)}${
            'string' == typeof t.fragment ? '#' + encodeURI(t.fragment) : ''
          }`;
        }
      }
      const xu = new Cu();
      function Tu(t) {
        return t.segments.map((t) => Ou(t)).join('/');
      }
      function ku(t) {
        return encodeURIComponent(t)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function Du(t) {
        return ku(t).replace(/%3B/gi, ';');
      }
      function Ru(t) {
        return ku(t)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function Au(t) {
        return decodeURIComponent(t);
      }
      function Iu(t) {
        return Au(t.replace(/\+/g, '%20'));
      }
      function Ou(t) {
        return `${Ru(t.path)}${
          ((e = t.parameters),
          Object.keys(e)
            .map((t) => `;${Ru(t)}=${Ru(e[t])}`)
            .join(''))
        }`;
        var e;
      }
      const Pu = /^[^\/()?;=#]+/;
      function Nu(t) {
        const e = t.match(Pu);
        return e ? e[0] : '';
      }
      const Mu = /^[^=?&#]+/,
        Fu = /^[^?&#]+/;
      class Lu {
        constructor(t) {
          (this.url = t), (this.remaining = t);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining ||
            this.peekStartsWith('?') ||
            this.peekStartsWith('#')
              ? new vu([], {})
              : new vu([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const t = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(t);
            } while (this.consumeOptional('&'));
          return t;
        }
        parseFragment() {
          return this.consumeOptional('#')
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const t = [];
          for (
            this.peekStartsWith('(') || t.push(this.parseSegment());
            this.peekStartsWith('/') &&
            !this.peekStartsWith('//') &&
            !this.peekStartsWith('/(');

          )
            this.capture('/'), t.push(this.parseSegment());
          let e = {};
          this.peekStartsWith('/(') &&
            (this.capture('/'), (e = this.parseParens(!0)));
          let n = {};
          return (
            this.peekStartsWith('(') && (n = this.parseParens(!1)),
            (t.length > 0 || Object.keys(e).length > 0) &&
              (n.primary = new vu(t, e)),
            n
          );
        }
        parseSegment() {
          const t = Nu(this.remaining);
          if ('' === t && this.peekStartsWith(';'))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            );
          return this.capture(t), new bu(Au(t), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const t = {};
          for (; this.consumeOptional(';'); ) this.parseParam(t);
          return t;
        }
        parseParam(t) {
          const e = Nu(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = '';
          if (this.consumeOptional('=')) {
            const t = Nu(this.remaining);
            t && ((n = t), this.capture(n));
          }
          t[Au(e)] = Au(n);
        }
        parseQueryParam(t) {
          const e = (function (t) {
            const e = t.match(Mu);
            return e ? e[0] : '';
          })(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = '';
          if (this.consumeOptional('=')) {
            const t = (function (t) {
              const e = t.match(Fu);
              return e ? e[0] : '';
            })(this.remaining);
            t && ((n = t), this.capture(n));
          }
          const s = Iu(e),
            i = Iu(n);
          if (t.hasOwnProperty(s)) {
            let e = t[s];
            Array.isArray(e) || ((e = [e]), (t[s] = e)), e.push(i);
          } else t[s] = i;
        }
        parseParens(t) {
          const e = {};
          for (
            this.capture('(');
            !this.consumeOptional(')') && this.remaining.length > 0;

          ) {
            const n = Nu(this.remaining),
              s = this.remaining[n.length];
            if ('/' !== s && ')' !== s && ';' !== s)
              throw new Error(`Cannot parse url '${this.url}'`);
            let i = void 0;
            n.indexOf(':') > -1
              ? ((i = n.substr(0, n.indexOf(':'))),
                this.capture(i),
                this.capture(':'))
              : t && (i = 'primary');
            const r = this.parseChildren();
            (e[i] = 1 === Object.keys(r).length ? r.primary : new vu([], r)),
              this.consumeOptional('//');
          }
          return e;
        }
        peekStartsWith(t) {
          return this.remaining.startsWith(t);
        }
        consumeOptional(t) {
          return (
            !!this.peekStartsWith(t) &&
            ((this.remaining = this.remaining.substring(t.length)), !0)
          );
        }
        capture(t) {
          if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`);
        }
      }
      class ju {
        constructor(t) {
          this._root = t;
        }
        get root() {
          return this._root.value;
        }
        parent(t) {
          const e = this.pathFromRoot(t);
          return e.length > 1 ? e[e.length - 2] : null;
        }
        children(t) {
          const e = Vu(t, this._root);
          return e ? e.children.map((t) => t.value) : [];
        }
        firstChild(t) {
          const e = Vu(t, this._root);
          return e && e.children.length > 0 ? e.children[0].value : null;
        }
        siblings(t) {
          const e = Hu(t, this._root);
          return e.length < 2
            ? []
            : e[e.length - 2].children
                .map((t) => t.value)
                .filter((e) => e !== t);
        }
        pathFromRoot(t) {
          return Hu(t, this._root).map((t) => t.value);
        }
      }
      function Vu(t, e) {
        if (t === e.value) return e;
        for (const n of e.children) {
          const e = Vu(t, n);
          if (e) return e;
        }
        return null;
      }
      function Hu(t, e) {
        if (t === e.value) return [e];
        for (const n of e.children) {
          const s = Hu(t, n);
          if (s.length) return s.unshift(e), s;
        }
        return [];
      }
      class Bu {
        constructor(t, e) {
          (this.value = t), (this.children = e);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Uu(t) {
        const e = {};
        return t && t.children.forEach((t) => (e[t.value.outlet] = t)), e;
      }
      class $u extends ju {
        constructor(t, e) {
          super(t), (this.snapshot = e), Gu(this, t);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function zu(t, e) {
        const n = (function (t, e) {
            const n = new Ku(
              [],
              {},
              {},
              '',
              {},
              'primary',
              e,
              null,
              t.root,
              -1,
              {}
            );
            return new Zu('', new Bu(n, []));
          })(t, e),
          s = new Ul([new bu('', {})]),
          i = new Ul({}),
          r = new Ul({}),
          o = new Ul({}),
          a = new Ul(''),
          l = new Wu(s, i, o, a, r, 'primary', e, n.root);
        return (l.snapshot = n.root), new $u(new Bu(l, []), n);
      }
      class Wu {
        constructor(t, e, n, s, i, r, o, a) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = s),
            (this.data = i),
            (this.outlet = r),
            (this.component = o),
            (this._futureSnapshot = a);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe(D((t) => iu(t)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(D((t) => iu(t)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function qu(t, e = 'emptyOnly') {
        const n = t.pathFromRoot;
        let s = 0;
        if ('always' !== e)
          for (s = n.length - 1; s >= 1; ) {
            const t = n[s],
              e = n[s - 1];
            if (t.routeConfig && '' === t.routeConfig.path) s--;
            else {
              if (e.component) break;
              s--;
            }
          }
        return (function (t) {
          return t.reduce(
            (t, e) => ({
              params: Object.assign({}, t.params, e.params),
              data: Object.assign({}, t.data, e.data),
              resolve: Object.assign({}, t.resolve, e._resolvedData),
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(s));
      }
      class Ku {
        constructor(t, e, n, s, i, r, o, a, l, c, h) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = s),
            (this.data = i),
            (this.outlet = r),
            (this.component = o),
            (this.routeConfig = a),
            (this._urlSegment = l),
            (this._lastPathIndex = c),
            (this._resolve = h);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = iu(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = iu(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((t) => t.toString())
            .join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class Zu extends ju {
        constructor(t, e) {
          super(e), (this.url = t), Gu(this, e);
        }
        toString() {
          return Qu(this._root);
        }
      }
      function Gu(t, e) {
        (e.value._routerState = t), e.children.forEach((e) => Gu(t, e));
      }
      function Qu(t) {
        const e =
          t.children.length > 0 ? ` { ${t.children.map(Qu).join(', ')} } ` : '';
        return `${t.value}${e}`;
      }
      function Yu(t) {
        if (t.snapshot) {
          const e = t.snapshot,
            n = t._futureSnapshot;
          (t.snapshot = n),
            du(e.queryParams, n.queryParams) ||
              t.queryParams.next(n.queryParams),
            e.fragment !== n.fragment && t.fragment.next(n.fragment),
            du(e.params, n.params) || t.params.next(n.params),
            (function (t, e) {
              if (t.length !== e.length) return !1;
              for (let n = 0; n < t.length; ++n) if (!du(t[n], e[n])) return !1;
              return !0;
            })(e.url, n.url) || t.url.next(n.url),
            du(e.data, n.data) || t.data.next(n.data);
        } else
          (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data);
      }
      function Xu(t, e) {
        var n, s;
        return (
          du(t.params, e.params) &&
          wu((n = t.url), (s = e.url)) &&
          n.every((t, e) => du(t.parameters, s[e].parameters)) &&
          !(!t.parent != !e.parent) &&
          (!t.parent || Xu(t.parent, e.parent))
        );
      }
      function Ju(t) {
        return (
          'object' == typeof t && null != t && !t.outlets && !t.segmentPath
        );
      }
      function td(t, e, n, s, i) {
        let r = {};
        return (
          s &&
            mu(s, (t, e) => {
              r[e] = Array.isArray(t) ? t.map((t) => '' + t) : '' + t;
            }),
          new _u(
            n.root === t
              ? e
              : (function t(e, n, s) {
                  const i = {};
                  return (
                    mu(e.children, (e, r) => {
                      i[r] = e === n ? s : t(e, n, s);
                    }),
                    new vu(e.segments, i)
                  );
                })(n.root, t, e),
            r,
            i
          )
        );
      }
      class ed {
        constructor(t, e, n) {
          if (
            ((this.isAbsolute = t),
            (this.numberOfDoubleDots = e),
            (this.commands = n),
            t && n.length > 0 && Ju(n[0]))
          )
            throw new Error('Root segment cannot have matrix parameters');
          const s = n.find(
            (t) => 'object' == typeof t && null != t && t.outlets
          );
          if (s && s !== fu(n))
            throw new Error('{outlets:{}} has to be the last command');
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            '/' == this.commands[0]
          );
        }
      }
      class nd {
        constructor(t, e, n) {
          (this.segmentGroup = t), (this.processChildren = e), (this.index = n);
        }
      }
      function sd(t) {
        return 'object' == typeof t && null != t && t.outlets
          ? t.outlets.primary
          : '' + t;
      }
      function id(t, e, n) {
        if (
          (t || (t = new vu([], {})),
          0 === t.segments.length && t.hasChildren())
        )
          return rd(t, e, n);
        const s = (function (t, e, n) {
            let s = 0,
              i = e;
            const r = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; i < t.segments.length; ) {
              if (s >= n.length) return r;
              const e = t.segments[i],
                o = sd(n[s]),
                a = s < n.length - 1 ? n[s + 1] : null;
              if (i > 0 && void 0 === o) break;
              if (o && a && 'object' == typeof a && void 0 === a.outlets) {
                if (!cd(o, a, e)) return r;
                s += 2;
              } else {
                if (!cd(o, {}, e)) return r;
                s++;
              }
              i++;
            }
            return { match: !0, pathIndex: i, commandIndex: s };
          })(t, e, n),
          i = n.slice(s.commandIndex);
        if (s.match && s.pathIndex < t.segments.length) {
          const e = new vu(t.segments.slice(0, s.pathIndex), {});
          return (
            (e.children.primary = new vu(
              t.segments.slice(s.pathIndex),
              t.children
            )),
            rd(e, 0, i)
          );
        }
        return s.match && 0 === i.length
          ? new vu(t.segments, {})
          : s.match && !t.hasChildren()
          ? od(t, e, n)
          : s.match
          ? rd(t, 0, i)
          : od(t, e, n);
      }
      function rd(t, e, n) {
        if (0 === n.length) return new vu(t.segments, {});
        {
          const s = (function (t) {
              return 'object' != typeof t[0] || void 0 === t[0].outlets
                ? { primary: t }
                : t[0].outlets;
            })(n),
            i = {};
          return (
            mu(s, (n, s) => {
              null !== n && (i[s] = id(t.children[s], e, n));
            }),
            mu(t.children, (t, e) => {
              void 0 === s[e] && (i[e] = t);
            }),
            new vu(t.segments, i)
          );
        }
      }
      function od(t, e, n) {
        const s = t.segments.slice(0, e);
        let i = 0;
        for (; i < n.length; ) {
          if ('object' == typeof n[i] && void 0 !== n[i].outlets) {
            const t = ad(n[i].outlets);
            return new vu(s, t);
          }
          if (0 === i && Ju(n[0])) {
            s.push(new bu(t.segments[e].path, n[0])), i++;
            continue;
          }
          const r = sd(n[i]),
            o = i < n.length - 1 ? n[i + 1] : null;
          r && o && Ju(o)
            ? (s.push(new bu(r, ld(o))), (i += 2))
            : (s.push(new bu(r, {})), i++);
        }
        return new vu(s, {});
      }
      function ad(t) {
        const e = {};
        return (
          mu(t, (t, n) => {
            null !== t && (e[n] = od(new vu([], {}), 0, t));
          }),
          e
        );
      }
      function ld(t) {
        const e = {};
        return mu(t, (t, n) => (e[n] = '' + t)), e;
      }
      function cd(t, e, n) {
        return t == n.path && du(e, n.parameters);
      }
      class hd {
        constructor(t, e, n, s) {
          (this.routeReuseStrategy = t),
            (this.futureState = e),
            (this.currState = n),
            (this.forwardEvent = s);
        }
        activate(t) {
          const e = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(e, n, t),
            Yu(this.futureState.root),
            this.activateChildRoutes(e, n, t);
        }
        deactivateChildRoutes(t, e, n) {
          const s = Uu(e);
          t.children.forEach((t) => {
            const e = t.value.outlet;
            this.deactivateRoutes(t, s[e], n), delete s[e];
          }),
            mu(s, (t, e) => {
              this.deactivateRouteAndItsChildren(t, n);
            });
        }
        deactivateRoutes(t, e, n) {
          const s = t.value,
            i = e ? e.value : null;
          if (s === i)
            if (s.component) {
              const i = n.getContext(s.outlet);
              i && this.deactivateChildRoutes(t, e, i.children);
            } else this.deactivateChildRoutes(t, e, n);
          else i && this.deactivateRouteAndItsChildren(e, n);
        }
        deactivateRouteAndItsChildren(t, e) {
          this.routeReuseStrategy.shouldDetach(t.value.snapshot)
            ? this.detachAndStoreRouteSubtree(t, e)
            : this.deactivateRouteAndOutlet(t, e);
        }
        detachAndStoreRouteSubtree(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n && n.outlet) {
            const e = n.outlet.detach(),
              s = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, {
              componentRef: e,
              route: t,
              contexts: s,
            });
          }
        }
        deactivateRouteAndOutlet(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n) {
            const s = Uu(t),
              i = t.value.component ? n.children : e;
            mu(s, (t, e) => this.deactivateRouteAndItsChildren(t, i)),
              n.outlet &&
                (n.outlet.deactivate(), n.children.onOutletDeactivated());
          }
        }
        activateChildRoutes(t, e, n) {
          const s = Uu(e);
          t.children.forEach((t) => {
            this.activateRoutes(t, s[t.value.outlet], n),
              this.forwardEvent(new tu(t.value.snapshot));
          }),
            t.children.length && this.forwardEvent(new Xh(t.value.snapshot));
        }
        activateRoutes(t, e, n) {
          const s = t.value,
            i = e ? e.value : null;
          if ((Yu(s), s === i))
            if (s.component) {
              const i = n.getOrCreateContext(s.outlet);
              this.activateChildRoutes(t, e, i.children);
            } else this.activateChildRoutes(t, e, n);
          else if (s.component) {
            const e = n.getOrCreateContext(s.outlet);
            if (this.routeReuseStrategy.shouldAttach(s.snapshot)) {
              const t = this.routeReuseStrategy.retrieve(s.snapshot);
              this.routeReuseStrategy.store(s.snapshot, null),
                e.children.onOutletReAttached(t.contexts),
                (e.attachRef = t.componentRef),
                (e.route = t.route.value),
                e.outlet && e.outlet.attach(t.componentRef, t.route.value),
                ud(t.route);
            } else {
              const n = (function (t) {
                  for (let e = t.parent; e; e = e.parent) {
                    const t = e.routeConfig;
                    if (t && t._loadedConfig) return t._loadedConfig;
                    if (t && t.component) return null;
                  }
                  return null;
                })(s.snapshot),
                i = n ? n.module.componentFactoryResolver : null;
              (e.attachRef = null),
                (e.route = s),
                (e.resolver = i),
                e.outlet && e.outlet.activateWith(s, i),
                this.activateChildRoutes(t, null, e.children);
            }
          } else this.activateChildRoutes(t, null, n);
        }
      }
      function ud(t) {
        Yu(t.value), t.children.forEach(ud);
      }
      function dd(t) {
        return 'function' == typeof t;
      }
      function pd(t) {
        return t instanceof _u;
      }
      class fd {
        constructor(t) {
          this.segmentGroup = t || null;
        }
      }
      class md {
        constructor(t) {
          this.urlTree = t;
        }
      }
      function gd(t) {
        return new b((e) => e.error(new fd(t)));
      }
      function yd(t) {
        return new b((e) => e.error(new md(t)));
      }
      function _d(t) {
        return new b((e) =>
          e.error(
            new Error(
              `Only absolute redirects can have named outlets. redirectTo: '${t}'`
            )
          )
        );
      }
      class vd {
        constructor(t, e, n, s, i) {
          (this.configLoader = e),
            (this.urlSerializer = n),
            (this.urlTree = s),
            (this.config = i),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(Ot));
        }
        apply() {
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            this.urlTree.root,
            'primary'
          )
            .pipe(
              D((t) =>
                this.createUrlTree(
                  t,
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              dc((t) => {
                if (t instanceof md)
                  return (this.allowRedirects = !1), this.match(t.urlTree);
                if (t instanceof fd) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        match(t) {
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            t.root,
            'primary'
          )
            .pipe(D((e) => this.createUrlTree(e, t.queryParams, t.fragment)))
            .pipe(
              dc((t) => {
                if (t instanceof fd) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        noMatchError(t) {
          return new Error(
            `Cannot match any routes. URL Segment: '${t.segmentGroup}'`
          );
        }
        createUrlTree(t, e, n) {
          const s = t.segments.length > 0 ? new vu([], { primary: t }) : t;
          return new _u(s, e, n);
        }
        expandSegmentGroup(t, e, n, s) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(t, e, n).pipe(D((t) => new vu([], t)))
            : this.expandSegment(t, n, e, n.segments, s, !0);
        }
        expandChildren(t, e, n) {
          return (function (t, e) {
            if (0 === Object.keys(t).length) return ta({});
            const n = [],
              s = [],
              i = {};
            return (
              mu(t, (t, r) => {
                const o = e(r, t).pipe(D((t) => (i[r] = t)));
                'primary' === r ? n.push(o) : s.push(o);
              }),
              ta.apply(null, n.concat(s)).pipe(
                Jl(),
                uc(),
                D(() => i)
              )
            );
          })(n.children, (n, s) => this.expandSegmentGroup(t, e, s, n));
        }
        expandSegment(t, e, n, s, i, r) {
          return ta(...n).pipe(
            D((o) =>
              this.expandSegmentAgainstRoute(t, e, n, o, s, i, r).pipe(
                dc((t) => {
                  if (t instanceof fd) return ta(null);
                  throw t;
                })
              )
            ),
            Jl(),
            _c((t) => !!t),
            dc((t, n) => {
              if (t instanceof $l || 'EmptyError' === t.name) {
                if (this.noLeftoversInUrl(e, s, i)) return ta(new vu([], {}));
                throw new fd(e);
              }
              throw t;
            })
          );
        }
        noLeftoversInUrl(t, e, n) {
          return 0 === e.length && !t.children[n];
        }
        expandSegmentAgainstRoute(t, e, n, s, i, r, o) {
          return Ed(s) !== r
            ? gd(e)
            : void 0 === s.redirectTo
            ? this.matchSegmentAgainstRoute(t, e, s, i)
            : o && this.allowRedirects
            ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, s, i, r)
            : gd(e);
        }
        expandSegmentAgainstRouteUsingRedirect(t, e, n, s, i, r) {
          return '**' === s.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, s, r)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                t,
                e,
                n,
                s,
                i,
                r
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, s) {
          const i = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith('/')
            ? yd(i)
            : this.lineralizeSegments(n, i).pipe(
                U((n) => {
                  const i = new vu(n, {});
                  return this.expandSegment(t, i, e, n, s, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, s, i, r) {
          const {
            matched: o,
            consumedSegments: a,
            lastChild: l,
            positionalParamSegments: c,
          } = bd(e, s, i);
          if (!o) return gd(e);
          const h = this.applyRedirectCommands(a, s.redirectTo, c);
          return s.redirectTo.startsWith('/')
            ? yd(h)
            : this.lineralizeSegments(s, h).pipe(
                U((s) =>
                  this.expandSegment(t, e, n, s.concat(i.slice(l)), r, !1)
                )
              );
        }
        matchSegmentAgainstRoute(t, e, n, s) {
          if ('**' === n.path)
            return n.loadChildren
              ? this.configLoader
                  .load(t.injector, n)
                  .pipe(D((t) => ((n._loadedConfig = t), new vu(s, {}))))
              : ta(new vu(s, {}));
          const { matched: i, consumedSegments: r, lastChild: o } = bd(e, n, s);
          if (!i) return gd(e);
          const a = s.slice(o);
          return this.getChildConfig(t, n, s).pipe(
            U((t) => {
              const n = t.module,
                s = t.routes,
                { segmentGroup: i, slicedSegments: o } = (function (
                  t,
                  e,
                  n,
                  s
                ) {
                  return n.length > 0 &&
                    (function (t, e, n) {
                      return n.some((n) => Sd(t, e, n) && 'primary' !== Ed(n));
                    })(t, n, s)
                    ? {
                        segmentGroup: wd(
                          new vu(
                            e,
                            (function (t, e) {
                              const n = {};
                              n.primary = e;
                              for (const s of t)
                                '' === s.path &&
                                  'primary' !== Ed(s) &&
                                  (n[Ed(s)] = new vu([], {}));
                              return n;
                            })(s, new vu(n, t.children))
                          )
                        ),
                        slicedSegments: [],
                      }
                    : 0 === n.length &&
                      (function (t, e, n) {
                        return n.some((n) => Sd(t, e, n));
                      })(t, n, s)
                    ? {
                        segmentGroup: wd(
                          new vu(
                            t.segments,
                            (function (t, e, n, s) {
                              const i = {};
                              for (const r of n)
                                Sd(t, e, r) &&
                                  !s[Ed(r)] &&
                                  (i[Ed(r)] = new vu([], {}));
                              return Object.assign({}, s, i);
                            })(t, n, s, t.children)
                          )
                        ),
                        slicedSegments: n,
                      }
                    : { segmentGroup: t, slicedSegments: n };
                })(e, r, a, s);
              return 0 === o.length && i.hasChildren()
                ? this.expandChildren(n, s, i).pipe(D((t) => new vu(r, t)))
                : 0 === s.length && 0 === o.length
                ? ta(new vu(r, {}))
                : this.expandSegment(n, i, s, o, 'primary', !0).pipe(
                    D((t) => new vu(r.concat(t.segments), t.children))
                  );
            })
          );
        }
        getChildConfig(t, e, n) {
          return e.children
            ? ta(new au(e.children, t))
            : e.loadChildren
            ? void 0 !== e._loadedConfig
              ? ta(e._loadedConfig)
              : (function (t, e, n) {
                  const s = e.canLoad;
                  return s && 0 !== s.length
                    ? j(s)
                        .pipe(
                          D((s) => {
                            const i = t.get(s);
                            let r;
                            if (
                              (function (t) {
                                return t && dd(t.canLoad);
                              })(i)
                            )
                              r = i.canLoad(e, n);
                            else {
                              if (!dd(i))
                                throw new Error('Invalid CanLoad guard');
                              r = i(e, n);
                            }
                            return gu(r);
                          })
                        )
                        .pipe(
                          Jl(),
                          ((i = (t) => !0 === t),
                          (t) => t.lift(new vc(i, void 0, t)))
                        )
                    : ta(!0);
                  var i;
                })(t.injector, e, n).pipe(
                  U((n) =>
                    n
                      ? this.configLoader
                          .load(t.injector, e)
                          .pipe(D((t) => ((e._loadedConfig = t), t)))
                      : (function (t) {
                          return new b((e) =>
                            e.error(
                              ru(
                                `Cannot load children because the guard of the route "path: '${t.path}'" returned false`
                              )
                            )
                          );
                        })(e)
                  )
                )
            : ta(new au([], t));
        }
        lineralizeSegments(t, e) {
          let n = [],
            s = e.root;
          for (;;) {
            if (((n = n.concat(s.segments)), 0 === s.numberOfChildren))
              return ta(n);
            if (s.numberOfChildren > 1 || !s.children.primary)
              return _d(t.redirectTo);
            s = s.children.primary;
          }
        }
        applyRedirectCommands(t, e, n) {
          return this.applyRedirectCreatreUrlTree(
            e,
            this.urlSerializer.parse(e),
            t,
            n
          );
        }
        applyRedirectCreatreUrlTree(t, e, n, s) {
          const i = this.createSegmentGroup(t, e.root, n, s);
          return new _u(
            i,
            this.createQueryParams(e.queryParams, this.urlTree.queryParams),
            e.fragment
          );
        }
        createQueryParams(t, e) {
          const n = {};
          return (
            mu(t, (t, s) => {
              if ('string' == typeof t && t.startsWith(':')) {
                const i = t.substring(1);
                n[s] = e[i];
              } else n[s] = t;
            }),
            n
          );
        }
        createSegmentGroup(t, e, n, s) {
          const i = this.createSegments(t, e.segments, n, s);
          let r = {};
          return (
            mu(e.children, (e, i) => {
              r[i] = this.createSegmentGroup(t, e, n, s);
            }),
            new vu(i, r)
          );
        }
        createSegments(t, e, n, s) {
          return e.map((e) =>
            e.path.startsWith(':')
              ? this.findPosParam(t, e, s)
              : this.findOrReturn(e, n)
          );
        }
        findPosParam(t, e, n) {
          const s = n[e.path.substring(1)];
          if (!s)
            throw new Error(
              `Cannot redirect to '${t}'. Cannot find '${e.path}'.`
            );
          return s;
        }
        findOrReturn(t, e) {
          let n = 0;
          for (const s of e) {
            if (s.path === t.path) return e.splice(n), s;
            n++;
          }
          return t;
        }
      }
      function bd(t, e, n) {
        if ('' === e.path)
          return 'full' === e.pathMatch && (t.hasChildren() || n.length > 0)
            ? {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              }
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              };
        const s = (e.matcher || ou)(n, t, e);
        return s
          ? {
              matched: !0,
              consumedSegments: s.consumed,
              lastChild: s.consumed.length,
              positionalParamSegments: s.posParams,
            }
          : {
              matched: !1,
              consumedSegments: [],
              lastChild: 0,
              positionalParamSegments: {},
            };
      }
      function wd(t) {
        if (1 === t.numberOfChildren && t.children.primary) {
          const e = t.children.primary;
          return new vu(t.segments.concat(e.segments), e.children);
        }
        return t;
      }
      function Sd(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) &&
          '' === n.path &&
          void 0 !== n.redirectTo
        );
      }
      function Ed(t) {
        return t.outlet || 'primary';
      }
      class Cd {
        constructor(t) {
          (this.path = t), (this.route = this.path[this.path.length - 1]);
        }
      }
      class xd {
        constructor(t, e) {
          (this.component = t), (this.route = e);
        }
      }
      function Td(t, e, n) {
        const s = t._root;
        return (function t(
          e,
          n,
          s,
          i,
          r = { canDeactivateChecks: [], canActivateChecks: [] }
        ) {
          const o = Uu(n);
          return (
            e.children.forEach((e) => {
              !(function (
                e,
                n,
                s,
                i,
                r = { canDeactivateChecks: [], canActivateChecks: [] }
              ) {
                const o = e.value,
                  a = n ? n.value : null,
                  l = s ? s.getContext(e.value.outlet) : null;
                if (a && o.routeConfig === a.routeConfig) {
                  const c = (function (t, e, n) {
                    if ('function' == typeof n) return n(t, e);
                    switch (n) {
                      case 'pathParamsChange':
                        return !wu(t.url, e.url);
                      case 'pathParamsOrQueryParamsChange':
                        return (
                          !wu(t.url, e.url) || !du(t.queryParams, e.queryParams)
                        );
                      case 'always':
                        return !0;
                      case 'paramsOrQueryParamsChange':
                        return !Xu(t, e) || !du(t.queryParams, e.queryParams);
                      case 'paramsChange':
                      default:
                        return !Xu(t, e);
                    }
                  })(a, o, o.routeConfig.runGuardsAndResolvers);
                  c
                    ? r.canActivateChecks.push(new Cd(i))
                    : ((o.data = a.data), (o._resolvedData = a._resolvedData)),
                    t(e, n, o.component ? (l ? l.children : null) : s, i, r),
                    c &&
                      r.canDeactivateChecks.push(
                        new xd((l && l.outlet && l.outlet.component) || null, a)
                      );
                } else
                  a && Dd(n, l, r),
                    r.canActivateChecks.push(new Cd(i)),
                    t(e, null, o.component ? (l ? l.children : null) : s, i, r);
              })(e, o[e.value.outlet], s, i.concat([e.value]), r),
                delete o[e.value.outlet];
            }),
            mu(o, (t, e) => Dd(t, s.getContext(e), r)),
            r
          );
        })(s, e ? e._root : null, n, [s.value]);
      }
      function kd(t, e, n) {
        const s = (function (t) {
          if (!t) return null;
          for (let e = t.parent; e; e = e.parent) {
            const t = e.routeConfig;
            if (t && t._loadedConfig) return t._loadedConfig;
          }
          return null;
        })(e);
        return (s ? s.module.injector : n).get(t);
      }
      function Dd(t, e, n) {
        const s = Uu(t),
          i = t.value;
        mu(s, (t, s) => {
          Dd(t, i.component ? (e ? e.children.getContext(s) : null) : e, n);
        }),
          n.canDeactivateChecks.push(
            new xd(
              i.component && e && e.outlet && e.outlet.isActivated
                ? e.outlet.component
                : null,
              i
            )
          );
      }
      const Rd = Symbol('INITIAL_VALUE');
      function Ad() {
        return wc((t) =>
          (function (...t) {
            let e = void 0,
              n = void 0;
            return (
              k(t[t.length - 1]) && (n = t.pop()),
              'function' == typeof t[t.length - 1] && (e = t.pop()),
              1 === t.length && l(t[0]) && (t = t[0]),
              q(t, n).lift(new Zl(e))
            );
          })(...t.map((t) => t.pipe(mc(1), xc(Rd)))).pipe(
            Tc((t, e) => {
              let n = !1;
              return e.reduce((t, s, i) => {
                if (t !== Rd) return t;
                if ((s === Rd && (n = !0), !n)) {
                  if (!1 === s) return s;
                  if (i === e.length - 1 || pd(s)) return s;
                }
                return t;
              }, t);
            }, Rd),
            na((t) => t !== Rd),
            D((t) => (pd(t) ? t : !0 === t)),
            mc(1)
          )
        );
      }
      function Id(t, e) {
        return null !== t && e && e(new Jh(t)), ta(!0);
      }
      function Od(t, e) {
        return null !== t && e && e(new Yh(t)), ta(!0);
      }
      function Pd(t, e, n) {
        const s = e.routeConfig ? e.routeConfig.canActivate : null;
        return s && 0 !== s.length
          ? ta(
              s.map((s) =>
                Xl(() => {
                  const i = kd(s, e, n);
                  let r;
                  if (
                    (function (t) {
                      return t && dd(t.canActivate);
                    })(i)
                  )
                    r = gu(i.canActivate(e, t));
                  else {
                    if (!dd(i)) throw new Error('Invalid CanActivate guard');
                    r = gu(i(e, t));
                  }
                  return r.pipe(_c());
                })
              )
            ).pipe(Ad())
          : ta(!0);
      }
      function Nd(t, e, n) {
        const s = e[e.length - 1],
          i = e
            .slice(0, e.length - 1)
            .reverse()
            .map((t) =>
              (function (t) {
                const e = t.routeConfig ? t.routeConfig.canActivateChild : null;
                return e && 0 !== e.length ? { node: t, guards: e } : null;
              })(t)
            )
            .filter((t) => null !== t)
            .map((e) =>
              Xl(() =>
                ta(
                  e.guards.map((i) => {
                    const r = kd(i, e.node, n);
                    let o;
                    if (
                      (function (t) {
                        return t && dd(t.canActivateChild);
                      })(r)
                    )
                      o = gu(r.canActivateChild(s, t));
                    else {
                      if (!dd(r))
                        throw new Error('Invalid CanActivateChild guard');
                      o = gu(r(s, t));
                    }
                    return o.pipe(_c());
                  })
                ).pipe(Ad())
              )
            );
        return ta(i).pipe(Ad());
      }
      class Md {}
      class Fd {
        constructor(t, e, n, s, i, r) {
          (this.rootComponentType = t),
            (this.config = e),
            (this.urlTree = n),
            (this.url = s),
            (this.paramsInheritanceStrategy = i),
            (this.relativeLinkResolution = r);
        }
        recognize() {
          try {
            const t = Vd(
                this.urlTree.root,
                [],
                [],
                this.config,
                this.relativeLinkResolution
              ).segmentGroup,
              e = this.processSegmentGroup(this.config, t, 'primary'),
              n = new Ku(
                [],
                Object.freeze({}),
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                {},
                'primary',
                this.rootComponentType,
                null,
                this.urlTree.root,
                -1,
                {}
              ),
              s = new Bu(n, e),
              i = new Zu(this.url, s);
            return this.inheritParamsAndData(i._root), ta(i);
          } catch (t) {
            return new b((e) => e.error(t));
          }
        }
        inheritParamsAndData(t) {
          const e = t.value,
            n = qu(e, this.paramsInheritanceStrategy);
          (e.params = Object.freeze(n.params)),
            (e.data = Object.freeze(n.data)),
            t.children.forEach((t) => this.inheritParamsAndData(t));
        }
        processSegmentGroup(t, e, n) {
          return 0 === e.segments.length && e.hasChildren()
            ? this.processChildren(t, e)
            : this.processSegment(t, e, e.segments, n);
        }
        processChildren(t, e) {
          const n = Su(e, (e, n) => this.processSegmentGroup(t, e, n));
          return (
            (function (t) {
              const e = {};
              t.forEach((t) => {
                const n = e[t.value.outlet];
                if (n) {
                  const e = n.url.map((t) => t.toString()).join('/'),
                    s = t.value.url.map((t) => t.toString()).join('/');
                  throw new Error(
                    `Two segments cannot have the same outlet name: '${e}' and '${s}'.`
                  );
                }
                e[t.value.outlet] = t.value;
              });
            })(n),
            n.sort((t, e) =>
              'primary' === t.value.outlet
                ? -1
                : 'primary' === e.value.outlet
                ? 1
                : t.value.outlet.localeCompare(e.value.outlet)
            ),
            n
          );
        }
        processSegment(t, e, n, s) {
          for (const r of t)
            try {
              return this.processSegmentAgainstRoute(r, e, n, s);
            } catch (i) {
              if (!(i instanceof Md)) throw i;
            }
          if (this.noLeftoversInUrl(e, n, s)) return [];
          throw new Md();
        }
        noLeftoversInUrl(t, e, n) {
          return 0 === e.length && !t.children[n];
        }
        processSegmentAgainstRoute(t, e, n, s) {
          if (t.redirectTo) throw new Md();
          if ((t.outlet || 'primary') !== s) throw new Md();
          let i,
            r = [],
            o = [];
          if ('**' === t.path) {
            const r = n.length > 0 ? fu(n).parameters : {};
            i = new Ku(
              n,
              r,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              Ud(t),
              s,
              t.component,
              t,
              Ld(e),
              jd(e) + n.length,
              $d(t)
            );
          } else {
            const a = (function (t, e, n) {
              if ('' === e.path) {
                if ('full' === e.pathMatch && (t.hasChildren() || n.length > 0))
                  throw new Md();
                return { consumedSegments: [], lastChild: 0, parameters: {} };
              }
              const s = (e.matcher || ou)(n, t, e);
              if (!s) throw new Md();
              const i = {};
              mu(s.posParams, (t, e) => {
                i[e] = t.path;
              });
              const r =
                s.consumed.length > 0
                  ? Object.assign(
                      {},
                      i,
                      s.consumed[s.consumed.length - 1].parameters
                    )
                  : i;
              return {
                consumedSegments: s.consumed,
                lastChild: s.consumed.length,
                parameters: r,
              };
            })(e, t, n);
            (r = a.consumedSegments),
              (o = n.slice(a.lastChild)),
              (i = new Ku(
                r,
                a.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                Ud(t),
                s,
                t.component,
                t,
                Ld(e),
                jd(e) + r.length,
                $d(t)
              ));
          }
          const a = (function (t) {
              return t.children
                ? t.children
                : t.loadChildren
                ? t._loadedConfig.routes
                : [];
            })(t),
            { segmentGroup: l, slicedSegments: c } = Vd(
              e,
              r,
              o,
              a,
              this.relativeLinkResolution
            );
          if (0 === c.length && l.hasChildren()) {
            const t = this.processChildren(a, l);
            return [new Bu(i, t)];
          }
          if (0 === a.length && 0 === c.length) return [new Bu(i, [])];
          const h = this.processSegment(a, l, c, 'primary');
          return [new Bu(i, h)];
        }
      }
      function Ld(t) {
        let e = t;
        for (; e._sourceSegment; ) e = e._sourceSegment;
        return e;
      }
      function jd(t) {
        let e = t,
          n = e._segmentIndexShift ? e._segmentIndexShift : 0;
        for (; e._sourceSegment; )
          (e = e._sourceSegment),
            (n += e._segmentIndexShift ? e._segmentIndexShift : 0);
        return n - 1;
      }
      function Vd(t, e, n, s, i) {
        if (
          n.length > 0 &&
          (function (t, e, n) {
            return n.some((n) => Hd(t, e, n) && 'primary' !== Bd(n));
          })(t, n, s)
        ) {
          const i = new vu(
            e,
            (function (t, e, n, s) {
              const i = {};
              (i.primary = s),
                (s._sourceSegment = t),
                (s._segmentIndexShift = e.length);
              for (const r of n)
                if ('' === r.path && 'primary' !== Bd(r)) {
                  const n = new vu([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift = e.length),
                    (i[Bd(r)] = n);
                }
              return i;
            })(t, e, s, new vu(n, t.children))
          );
          return (
            (i._sourceSegment = t),
            (i._segmentIndexShift = e.length),
            { segmentGroup: i, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function (t, e, n) {
            return n.some((n) => Hd(t, e, n));
          })(t, n, s)
        ) {
          const r = new vu(
            t.segments,
            (function (t, e, n, s, i, r) {
              const o = {};
              for (const a of s)
                if (Hd(t, n, a) && !i[Bd(a)]) {
                  const n = new vu([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift =
                      'legacy' === r ? t.segments.length : e.length),
                    (o[Bd(a)] = n);
                }
              return Object.assign({}, i, o);
            })(t, e, n, s, t.children, i)
          );
          return (
            (r._sourceSegment = t),
            (r._segmentIndexShift = e.length),
            { segmentGroup: r, slicedSegments: n }
          );
        }
        const r = new vu(t.segments, t.children);
        return (
          (r._sourceSegment = t),
          (r._segmentIndexShift = e.length),
          { segmentGroup: r, slicedSegments: n }
        );
      }
      function Hd(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) &&
          '' === n.path &&
          void 0 === n.redirectTo
        );
      }
      function Bd(t) {
        return t.outlet || 'primary';
      }
      function Ud(t) {
        return t.data || {};
      }
      function $d(t) {
        return t.resolve || {};
      }
      function zd(t, e, n, s) {
        const i = kd(t, e, s);
        return gu(i.resolve ? i.resolve(e, n) : i(e, n));
      }
      function Wd(t) {
        return function (e) {
          return e.pipe(
            wc((e) => {
              const n = t(e);
              return n ? j(n).pipe(D(() => e)) : j([e]);
            })
          );
        };
      }
      class qd {}
      class Kd {
        shouldDetach(t) {
          return !1;
        }
        store(t, e) {}
        shouldAttach(t) {
          return !1;
        }
        retrieve(t) {
          return null;
        }
        shouldReuseRoute(t, e) {
          return t.routeConfig === e.routeConfig;
        }
      }
      const Zd = new wt('ROUTES');
      class Gd {
        constructor(t, e, n, s) {
          (this.loader = t),
            (this.compiler = e),
            (this.onLoadStartListener = n),
            (this.onLoadEndListener = s);
        }
        load(t, e) {
          return (
            this.onLoadStartListener && this.onLoadStartListener(e),
            this.loadModuleFactory(e.loadChildren).pipe(
              D((n) => {
                this.onLoadEndListener && this.onLoadEndListener(e);
                const s = n.create(t);
                return new au(pu(s.injector.get(Zd)).map(uu), s);
              })
            )
          );
        }
        loadModuleFactory(t) {
          return 'string' == typeof t
            ? j(this.loader.load(t))
            : gu(t()).pipe(
                U((t) =>
                  t instanceof Pt
                    ? ta(t)
                    : j(this.compiler.compileModuleAsync(t))
                )
              );
        }
      }
      class Qd {}
      class Yd {
        shouldProcessUrl(t) {
          return !0;
        }
        extract(t) {
          return t;
        }
        merge(t, e) {
          return t;
        }
      }
      function Xd(t) {
        throw t;
      }
      function Jd(t, e, n) {
        return e.parse('/');
      }
      function tp(t, e) {
        return ta(null);
      }
      class ep {
        constructor(t, e, n, s, i, r, o, a) {
          (this.rootComponentType = t),
            (this.urlSerializer = e),
            (this.rootContexts = n),
            (this.location = s),
            (this.config = a),
            (this.lastSuccessfulNavigation = null),
            (this.currentNavigation = null),
            (this.navigationId = 0),
            (this.isNgZoneEnabled = !1),
            (this.events = new x()),
            (this.errorHandler = Xd),
            (this.malformedUriErrorHandler = Jd),
            (this.navigated = !1),
            (this.lastSuccessfulId = -1),
            (this.hooks = { beforePreactivation: tp, afterPreactivation: tp }),
            (this.urlHandlingStrategy = new Yd()),
            (this.routeReuseStrategy = new Kd()),
            (this.onSameUrlNavigation = 'ignore'),
            (this.paramsInheritanceStrategy = 'emptyOnly'),
            (this.urlUpdateStrategy = 'deferred'),
            (this.relativeLinkResolution = 'legacy'),
            (this.ngModule = i.get(Ot)),
            (this.console = i.get(xi));
          const l = i.get($i);
          (this.isNgZoneEnabled = l instanceof $i),
            this.resetConfig(a),
            (this.currentUrlTree = new _u(new vu([], {}), {}, null)),
            (this.rawUrlTree = this.currentUrlTree),
            (this.browserUrlTree = this.currentUrlTree),
            (this.configLoader = new Gd(
              r,
              o,
              (t) => this.triggerEvent(new Gh(t)),
              (t) => this.triggerEvent(new Qh(t))
            )),
            (this.routerState = zu(
              this.currentUrlTree,
              this.rootComponentType
            )),
            (this.transitions = new Ul({
              id: 0,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.currentUrlTree,
              extractedUrl: this.urlHandlingStrategy.extract(
                this.currentUrlTree
              ),
              urlAfterRedirects: this.urlHandlingStrategy.extract(
                this.currentUrlTree
              ),
              rawUrl: this.currentUrlTree,
              extras: {},
              resolve: null,
              reject: null,
              promise: Promise.resolve(!0),
              source: 'imperative',
              restoredState: null,
              currentSnapshot: this.routerState.snapshot,
              targetSnapshot: null,
              currentRouterState: this.routerState,
              targetRouterState: null,
              guards: { canActivateChecks: [], canDeactivateChecks: [] },
              guardsResult: null,
            })),
            (this.navigations = this.setupNavigations(this.transitions)),
            this.processNavigations();
        }
        setupNavigations(t) {
          const e = this.events;
          return t.pipe(
            na((t) => 0 !== t.id),
            D((t) =>
              Object.assign({}, t, {
                extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl),
              })
            ),
            wc((t) => {
              let n = !1,
                s = !1;
              return ta(t).pipe(
                Ac((t) => {
                  this.currentNavigation = {
                    id: t.id,
                    initialUrl: t.currentRawUrl,
                    extractedUrl: t.extractedUrl,
                    trigger: t.source,
                    extras: t.extras,
                    previousNavigation: this.lastSuccessfulNavigation
                      ? Object.assign({}, this.lastSuccessfulNavigation, {
                          previousNavigation: null,
                        })
                      : null,
                  };
                }),
                wc((t) => {
                  const n =
                    !this.navigated ||
                    t.extractedUrl.toString() !==
                      this.browserUrlTree.toString();
                  if (
                    ('reload' === this.onSameUrlNavigation || n) &&
                    this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)
                  )
                    return ta(t).pipe(
                      wc((t) => {
                        const n = this.transitions.getValue();
                        return (
                          e.next(
                            new Hh(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              t.source,
                              t.restoredState
                            )
                          ),
                          n !== this.transitions.getValue() ? Ql : [t]
                        );
                      }),
                      wc((t) => Promise.resolve(t)),
                      ((s = this.ngModule.injector),
                      (i = this.configLoader),
                      (r = this.urlSerializer),
                      (o = this.config),
                      function (t) {
                        return t.pipe(
                          wc((t) =>
                            (function (t, e, n, s, i) {
                              return new vd(t, e, n, s, i).apply();
                            })(s, i, r, t.extractedUrl, o).pipe(
                              D((e) =>
                                Object.assign({}, t, { urlAfterRedirects: e })
                              )
                            )
                          )
                        );
                      }),
                      Ac((t) => {
                        this.currentNavigation = Object.assign(
                          {},
                          this.currentNavigation,
                          { finalUrl: t.urlAfterRedirects }
                        );
                      }),
                      (function (t, e, n, s, i) {
                        return function (r) {
                          return r.pipe(
                            U((r) =>
                              (function (
                                t,
                                e,
                                n,
                                s,
                                i = 'emptyOnly',
                                r = 'legacy'
                              ) {
                                return new Fd(t, e, n, s, i, r).recognize();
                              })(
                                t,
                                e,
                                r.urlAfterRedirects,
                                n(r.urlAfterRedirects),
                                s,
                                i
                              ).pipe(
                                D((t) =>
                                  Object.assign({}, r, { targetSnapshot: t })
                                )
                              )
                            )
                          );
                        };
                      })(
                        this.rootComponentType,
                        this.config,
                        (t) => this.serializeUrl(t),
                        this.paramsInheritanceStrategy,
                        this.relativeLinkResolution
                      ),
                      Ac((t) => {
                        'eager' === this.urlUpdateStrategy &&
                          (t.extras.skipLocationChange ||
                            this.setBrowserUrl(
                              t.urlAfterRedirects,
                              !!t.extras.replaceUrl,
                              t.id,
                              t.extras.state
                            ),
                          (this.browserUrlTree = t.urlAfterRedirects));
                      }),
                      Ac((t) => {
                        const n = new zh(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          this.serializeUrl(t.urlAfterRedirects),
                          t.targetSnapshot
                        );
                        e.next(n);
                      })
                    );
                  var s, i, r, o;
                  if (
                    n &&
                    this.rawUrlTree &&
                    this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                  ) {
                    const {
                        id: n,
                        extractedUrl: s,
                        source: i,
                        restoredState: r,
                        extras: o,
                      } = t,
                      a = new Hh(n, this.serializeUrl(s), i, r);
                    e.next(a);
                    const l = zu(s, this.rootComponentType).snapshot;
                    return ta(
                      Object.assign({}, t, {
                        targetSnapshot: l,
                        urlAfterRedirects: s,
                        extras: Object.assign({}, o, {
                          skipLocationChange: !1,
                          replaceUrl: !1,
                        }),
                      })
                    );
                  }
                  return (
                    (this.rawUrlTree = t.rawUrl),
                    (this.browserUrlTree = t.urlAfterRedirects),
                    t.resolve(null),
                    Ql
                  );
                }),
                Wd((t) => {
                  const {
                    targetSnapshot: e,
                    id: n,
                    extractedUrl: s,
                    rawUrl: i,
                    extras: { skipLocationChange: r, replaceUrl: o },
                  } = t;
                  return this.hooks.beforePreactivation(e, {
                    navigationId: n,
                    appliedUrlTree: s,
                    rawUrlTree: i,
                    skipLocationChange: !!r,
                    replaceUrl: !!o,
                  });
                }),
                Ac((t) => {
                  const e = new Wh(
                    t.id,
                    this.serializeUrl(t.extractedUrl),
                    this.serializeUrl(t.urlAfterRedirects),
                    t.targetSnapshot
                  );
                  this.triggerEvent(e);
                }),
                D((t) =>
                  Object.assign({}, t, {
                    guards: Td(
                      t.targetSnapshot,
                      t.currentSnapshot,
                      this.rootContexts
                    ),
                  })
                ),
                (function (t, e) {
                  return function (n) {
                    return n.pipe(
                      U((n) => {
                        const {
                          targetSnapshot: s,
                          currentSnapshot: i,
                          guards: {
                            canActivateChecks: r,
                            canDeactivateChecks: o,
                          },
                        } = n;
                        return 0 === o.length && 0 === r.length
                          ? ta(Object.assign({}, n, { guardsResult: !0 }))
                          : (function (t, e, n, s) {
                              return j(t).pipe(
                                U((t) =>
                                  (function (t, e, n, s, i) {
                                    const r =
                                      e && e.routeConfig
                                        ? e.routeConfig.canDeactivate
                                        : null;
                                    return r && 0 !== r.length
                                      ? ta(
                                          r.map((r) => {
                                            const o = kd(r, e, i);
                                            let a;
                                            if (
                                              (function (t) {
                                                return t && dd(t.canDeactivate);
                                              })(o)
                                            )
                                              a = gu(
                                                o.canDeactivate(t, e, n, s)
                                              );
                                            else {
                                              if (!dd(o))
                                                throw new Error(
                                                  'Invalid CanDeactivate guard'
                                                );
                                              a = gu(o(t, e, n, s));
                                            }
                                            return a.pipe(_c());
                                          })
                                        ).pipe(Ad())
                                      : ta(!0);
                                  })(t.component, t.route, n, e, s)
                                ),
                                _c((t) => !0 !== t, !0)
                              );
                            })(o, s, i, t).pipe(
                              U((n) =>
                                n && 'boolean' == typeof n
                                  ? (function (t, e, n, s) {
                                      return j(e).pipe(
                                        ea((e) =>
                                          j([
                                            Od(e.route.parent, s),
                                            Id(e.route, s),
                                            Nd(t, e.path, n),
                                            Pd(t, e.route, n),
                                          ]).pipe(
                                            Jl(),
                                            _c((t) => !0 !== t, !0)
                                          )
                                        ),
                                        _c((t) => !0 !== t, !0)
                                      );
                                    })(s, r, t, e)
                                  : ta(n)
                              ),
                              D((t) =>
                                Object.assign({}, n, { guardsResult: t })
                              )
                            );
                      })
                    );
                  };
                })(this.ngModule.injector, (t) => this.triggerEvent(t)),
                Ac((t) => {
                  if (pd(t.guardsResult)) {
                    const e = ru(
                      `Redirecting to "${this.serializeUrl(t.guardsResult)}"`
                    );
                    throw ((e.url = t.guardsResult), e);
                  }
                }),
                Ac((t) => {
                  const e = new qh(
                    t.id,
                    this.serializeUrl(t.extractedUrl),
                    this.serializeUrl(t.urlAfterRedirects),
                    t.targetSnapshot,
                    !!t.guardsResult
                  );
                  this.triggerEvent(e);
                }),
                na((t) => {
                  if (!t.guardsResult) {
                    this.resetUrlToCurrentUrlTree();
                    const n = new Uh(
                      t.id,
                      this.serializeUrl(t.extractedUrl),
                      ''
                    );
                    return e.next(n), t.resolve(!1), !1;
                  }
                  return !0;
                }),
                Wd((t) => {
                  if (t.guards.canActivateChecks.length)
                    return ta(t).pipe(
                      Ac((t) => {
                        const e = new Kh(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          this.serializeUrl(t.urlAfterRedirects),
                          t.targetSnapshot
                        );
                        this.triggerEvent(e);
                      }),
                      ((e = this.paramsInheritanceStrategy),
                      (n = this.ngModule.injector),
                      function (t) {
                        return t.pipe(
                          U((t) => {
                            const {
                              targetSnapshot: s,
                              guards: { canActivateChecks: i },
                            } = t;
                            return i.length
                              ? j(i).pipe(
                                  ea((t) =>
                                    (function (t, e, n, s) {
                                      return (function (t, e, n, s) {
                                        const i = Object.keys(t);
                                        if (0 === i.length) return ta({});
                                        if (1 === i.length) {
                                          const r = i[0];
                                          return zd(t[r], e, n, s).pipe(
                                            D((t) => ({ [r]: t }))
                                          );
                                        }
                                        const r = {};
                                        return j(i)
                                          .pipe(
                                            U((i) =>
                                              zd(t[i], e, n, s).pipe(
                                                D((t) => ((r[i] = t), t))
                                              )
                                            )
                                          )
                                          .pipe(
                                            uc(),
                                            D(() => r)
                                          );
                                      })(t._resolve, t, e, s).pipe(
                                        D(
                                          (e) => (
                                            (t._resolvedData = e),
                                            (t.data = Object.assign(
                                              {},
                                              t.data,
                                              qu(t, n).resolve
                                            )),
                                            null
                                          )
                                        )
                                      );
                                    })(t.route, s, e, n)
                                  ),
                                  (function (t, e) {
                                    return arguments.length >= 2
                                      ? function (n) {
                                          return _(Tc(t, e), ec(1), lc(e))(n);
                                        }
                                      : function (e) {
                                          return _(
                                            Tc((e, n, s) => t(e, n, s + 1)),
                                            ec(1)
                                          )(e);
                                        };
                                  })((t, e) => t),
                                  D((e) => t)
                                )
                              : ta(t);
                          })
                        );
                      }),
                      Ac((t) => {
                        const e = new Zh(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          this.serializeUrl(t.urlAfterRedirects),
                          t.targetSnapshot
                        );
                        this.triggerEvent(e);
                      })
                    );
                  var e, n;
                }),
                Wd((t) => {
                  const {
                    targetSnapshot: e,
                    id: n,
                    extractedUrl: s,
                    rawUrl: i,
                    extras: { skipLocationChange: r, replaceUrl: o },
                  } = t;
                  return this.hooks.afterPreactivation(e, {
                    navigationId: n,
                    appliedUrlTree: s,
                    rawUrlTree: i,
                    skipLocationChange: !!r,
                    replaceUrl: !!o,
                  });
                }),
                D((t) => {
                  const e = (function (t, e, n) {
                    const s = (function t(e, n, s) {
                      if (s && e.shouldReuseRoute(n.value, s.value.snapshot)) {
                        const i = s.value;
                        i._futureSnapshot = n.value;
                        const r = (function (e, n, s) {
                          return n.children.map((n) => {
                            for (const i of s.children)
                              if (e.shouldReuseRoute(i.value.snapshot, n.value))
                                return t(e, n, i);
                            return t(e, n);
                          });
                        })(e, n, s);
                        return new Bu(i, r);
                      }
                      {
                        const s = e.retrieve(n.value);
                        if (s) {
                          const t = s.route;
                          return (
                            (function t(e, n) {
                              if (e.value.routeConfig !== n.value.routeConfig)
                                throw new Error(
                                  'Cannot reattach ActivatedRouteSnapshot created from a different route'
                                );
                              if (e.children.length !== n.children.length)
                                throw new Error(
                                  'Cannot reattach ActivatedRouteSnapshot with a different number of children'
                                );
                              n.value._futureSnapshot = e.value;
                              for (let s = 0; s < e.children.length; ++s)
                                t(e.children[s], n.children[s]);
                            })(n, t),
                            t
                          );
                        }
                        {
                          const s = new Wu(
                              new Ul((i = n.value).url),
                              new Ul(i.params),
                              new Ul(i.queryParams),
                              new Ul(i.fragment),
                              new Ul(i.data),
                              i.outlet,
                              i.component,
                              i
                            ),
                            r = n.children.map((n) => t(e, n));
                          return new Bu(s, r);
                        }
                      }
                      var i;
                    })(t, e._root, n ? n._root : void 0);
                    return new $u(s, e);
                  })(
                    this.routeReuseStrategy,
                    t.targetSnapshot,
                    t.currentRouterState
                  );
                  return Object.assign({}, t, { targetRouterState: e });
                }),
                Ac((t) => {
                  (this.currentUrlTree = t.urlAfterRedirects),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(
                      this.currentUrlTree,
                      t.rawUrl
                    )),
                    (this.routerState = t.targetRouterState),
                    'deferred' === this.urlUpdateStrategy &&
                      (t.extras.skipLocationChange ||
                        this.setBrowserUrl(
                          this.rawUrlTree,
                          !!t.extras.replaceUrl,
                          t.id,
                          t.extras.state
                        ),
                      (this.browserUrlTree = t.urlAfterRedirects));
                }),
                ((r = this.rootContexts),
                (o = this.routeReuseStrategy),
                (a = (t) => this.triggerEvent(t)),
                D(
                  (t) => (
                    new hd(
                      o,
                      t.targetRouterState,
                      t.currentRouterState,
                      a
                    ).activate(r),
                    t
                  )
                )),
                Ac({
                  next() {
                    n = !0;
                  },
                  complete() {
                    n = !0;
                  },
                }),
                ((i = () => {
                  if (!n && !s) {
                    this.resetUrlToCurrentUrlTree();
                    const n = new Uh(
                      t.id,
                      this.serializeUrl(t.extractedUrl),
                      `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`
                    );
                    e.next(n), t.resolve(!1);
                  }
                  this.currentNavigation = null;
                }),
                (t) => t.lift(new Pc(i))),
                dc((n) => {
                  if (((s = !0), (i = n) && i.ngNavigationCancelingError)) {
                    const s = pd(n.url);
                    s ||
                      ((this.navigated = !0),
                      this.resetStateAndUrl(
                        t.currentRouterState,
                        t.currentUrlTree,
                        t.rawUrl
                      ));
                    const i = new Uh(
                      t.id,
                      this.serializeUrl(t.extractedUrl),
                      n.message
                    );
                    e.next(i), t.resolve(!1), s && this.navigateByUrl(n.url);
                  } else {
                    this.resetStateAndUrl(
                      t.currentRouterState,
                      t.currentUrlTree,
                      t.rawUrl
                    );
                    const s = new $h(
                      t.id,
                      this.serializeUrl(t.extractedUrl),
                      n
                    );
                    e.next(s);
                    try {
                      t.resolve(this.errorHandler(n));
                    } catch (r) {
                      t.reject(r);
                    }
                  }
                  var i;
                  return Ql;
                })
              );
              var i, r, o, a;
            })
          );
        }
        resetRootComponentType(t) {
          (this.rootComponentType = t),
            (this.routerState.root.component = this.rootComponentType);
        }
        getTransition() {
          const t = this.transitions.value;
          return (t.urlAfterRedirects = this.browserUrlTree), t;
        }
        setTransition(t) {
          this.transitions.next(Object.assign({}, this.getTransition(), t));
        }
        initialNavigation() {
          this.setUpLocationChangeListener(),
            0 === this.navigationId &&
              this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
        }
        setUpLocationChangeListener() {
          this.locationSubscription ||
            (this.locationSubscription = this.location.subscribe((t) => {
              let e = this.parseUrl(t.url);
              const n = 'popstate' === t.type ? 'popstate' : 'hashchange',
                s = t.state && t.state.navigationId ? t.state : null;
              setTimeout(() => {
                this.scheduleNavigation(e, n, s, { replaceUrl: !0 });
              }, 0);
            }));
        }
        get url() {
          return this.serializeUrl(this.currentUrlTree);
        }
        getCurrentNavigation() {
          return this.currentNavigation;
        }
        triggerEvent(t) {
          this.events.next(t);
        }
        resetConfig(t) {
          lu(t),
            (this.config = t.map(uu)),
            (this.navigated = !1),
            (this.lastSuccessfulId = -1);
        }
        ngOnDestroy() {
          this.dispose();
        }
        dispose() {
          this.locationSubscription &&
            (this.locationSubscription.unsubscribe(),
            (this.locationSubscription = null));
        }
        createUrlTree(t, e = {}) {
          const {
            relativeTo: n,
            queryParams: s,
            fragment: i,
            preserveQueryParams: r,
            queryParamsHandling: o,
            preserveFragment: a,
          } = e;
          zt() &&
            r &&
            console &&
            console.warn &&
            console.warn(
              'preserveQueryParams is deprecated, use queryParamsHandling instead.'
            );
          const l = n || this.routerState.root,
            c = a ? this.currentUrlTree.fragment : i;
          let h = null;
          if (o)
            switch (o) {
              case 'merge':
                h = Object.assign({}, this.currentUrlTree.queryParams, s);
                break;
              case 'preserve':
                h = this.currentUrlTree.queryParams;
                break;
              default:
                h = s || null;
            }
          else h = r ? this.currentUrlTree.queryParams : s || null;
          return (
            null !== h && (h = this.removeEmptyProps(h)),
            (function (t, e, n, s, i) {
              if (0 === n.length) return td(e.root, e.root, e, s, i);
              const r = (function (t) {
                if ('string' == typeof t[0] && 1 === t.length && '/' === t[0])
                  return new ed(!0, 0, t);
                let e = 0,
                  n = !1;
                const s = t.reduce((t, s, i) => {
                  if ('object' == typeof s && null != s) {
                    if (s.outlets) {
                      const e = {};
                      return (
                        mu(s.outlets, (t, n) => {
                          e[n] = 'string' == typeof t ? t.split('/') : t;
                        }),
                        [...t, { outlets: e }]
                      );
                    }
                    if (s.segmentPath) return [...t, s.segmentPath];
                  }
                  return 'string' != typeof s
                    ? [...t, s]
                    : 0 === i
                    ? (s.split('/').forEach((s, i) => {
                        (0 == i && '.' === s) ||
                          (0 == i && '' === s
                            ? (n = !0)
                            : '..' === s
                            ? e++
                            : '' != s && t.push(s));
                      }),
                      t)
                    : [...t, s];
                }, []);
                return new ed(n, e, s);
              })(n);
              if (r.toRoot()) return td(e.root, new vu([], {}), e, s, i);
              const o = (function (t, e, n) {
                  if (t.isAbsolute) return new nd(e.root, !0, 0);
                  if (-1 === n.snapshot._lastPathIndex)
                    return new nd(n.snapshot._urlSegment, !0, 0);
                  const s = Ju(t.commands[0]) ? 0 : 1;
                  return (function (t, e, n) {
                    let s = t,
                      i = e,
                      r = n;
                    for (; r > i; ) {
                      if (((r -= i), (s = s.parent), !s))
                        throw new Error("Invalid number of '../'");
                      i = s.segments.length;
                    }
                    return new nd(s, !1, i - r);
                  })(
                    n.snapshot._urlSegment,
                    n.snapshot._lastPathIndex + s,
                    t.numberOfDoubleDots
                  );
                })(r, e, t),
                a = o.processChildren
                  ? rd(o.segmentGroup, o.index, r.commands)
                  : id(o.segmentGroup, o.index, r.commands);
              return td(o.segmentGroup, a, e, s, i);
            })(l, this.currentUrlTree, t, h, c)
          );
        }
        navigateByUrl(t, e = { skipLocationChange: !1 }) {
          zt() &&
            this.isNgZoneEnabled &&
            !$i.isInAngularZone() &&
            this.console.warn(
              "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
            );
          const n = pd(t) ? t : this.parseUrl(t),
            s = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
          return this.scheduleNavigation(s, 'imperative', null, e);
        }
        navigate(t, e = { skipLocationChange: !1 }) {
          return (
            (function (t) {
              for (let e = 0; e < t.length; e++) {
                const n = t[e];
                if (null == n)
                  throw new Error(
                    `The requested path contains ${n} segment at index ${e}`
                  );
              }
            })(t),
            this.navigateByUrl(this.createUrlTree(t, e), e)
          );
        }
        serializeUrl(t) {
          return this.urlSerializer.serialize(t);
        }
        parseUrl(t) {
          let e;
          try {
            e = this.urlSerializer.parse(t);
          } catch (n) {
            e = this.malformedUriErrorHandler(n, this.urlSerializer, t);
          }
          return e;
        }
        isActive(t, e) {
          if (pd(t)) return yu(this.currentUrlTree, t, e);
          const n = this.parseUrl(t);
          return yu(this.currentUrlTree, n, e);
        }
        removeEmptyProps(t) {
          return Object.keys(t).reduce((e, n) => {
            const s = t[n];
            return null != s && (e[n] = s), e;
          }, {});
        }
        processNavigations() {
          this.navigations.subscribe(
            (t) => {
              (this.navigated = !0),
                (this.lastSuccessfulId = t.id),
                this.events.next(
                  new Bh(
                    t.id,
                    this.serializeUrl(t.extractedUrl),
                    this.serializeUrl(this.currentUrlTree)
                  )
                ),
                (this.lastSuccessfulNavigation = this.currentNavigation),
                (this.currentNavigation = null),
                t.resolve(!0);
            },
            (t) => {
              this.console.warn('Unhandled Navigation Error: ');
            }
          );
        }
        scheduleNavigation(t, e, n, s) {
          const i = this.getTransition();
          if (
            i &&
            'imperative' !== e &&
            'imperative' === i.source &&
            i.rawUrl.toString() === t.toString()
          )
            return Promise.resolve(!0);
          if (
            i &&
            'hashchange' == e &&
            'popstate' === i.source &&
            i.rawUrl.toString() === t.toString()
          )
            return Promise.resolve(!0);
          if (
            i &&
            'popstate' == e &&
            'hashchange' === i.source &&
            i.rawUrl.toString() === t.toString()
          )
            return Promise.resolve(!0);
          let r = null,
            o = null;
          const a = new Promise((t, e) => {
              (r = t), (o = e);
            }),
            l = ++this.navigationId;
          return (
            this.setTransition({
              id: l,
              source: e,
              restoredState: n,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.rawUrlTree,
              rawUrl: t,
              extras: s,
              resolve: r,
              reject: o,
              promise: a,
              currentSnapshot: this.routerState.snapshot,
              currentRouterState: this.routerState,
            }),
            a.catch((t) => Promise.reject(t))
          );
        }
        setBrowserUrl(t, e, n, s) {
          const i = this.urlSerializer.serialize(t);
          (s = s || {}),
            this.location.isCurrentPathEqualTo(i) || e
              ? this.location.replaceState(
                  i,
                  '',
                  Object.assign({}, s, { navigationId: n })
                )
              : this.location.go(
                  i,
                  '',
                  Object.assign({}, s, { navigationId: n })
                );
        }
        resetStateAndUrl(t, e, n) {
          (this.routerState = t),
            (this.currentUrlTree = e),
            (this.rawUrlTree = this.urlHandlingStrategy.merge(
              this.currentUrlTree,
              n
            )),
            this.resetUrlToCurrentUrlTree();
        }
        resetUrlToCurrentUrlTree() {
          this.location.replaceState(
            this.urlSerializer.serialize(this.rawUrlTree),
            '',
            { navigationId: this.lastSuccessfulId }
          );
        }
      }
      class np {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new sp()),
            (this.attachRef = null);
        }
      }
      class sp {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(t, e) {
          const n = this.getOrCreateContext(t);
          (n.outlet = e), this.contexts.set(t, n);
        }
        onChildOutletDestroyed(t) {
          const e = this.getContext(t);
          e && (e.outlet = null);
        }
        onOutletDeactivated() {
          const t = this.contexts;
          return (this.contexts = new Map()), t;
        }
        onOutletReAttached(t) {
          this.contexts = t;
        }
        getOrCreateContext(t) {
          let e = this.getContext(t);
          return e || ((e = new np()), this.contexts.set(t, e)), e;
        }
        getContext(t) {
          return this.contexts.get(t) || null;
        }
      }
      class ip {
        constructor(t, e, n, s, i) {
          (this.parentContexts = t),
            (this.location = e),
            (this.resolver = n),
            (this.changeDetector = i),
            (this.activated = null),
            (this._activatedRoute = null),
            (this.activateEvents = new fi()),
            (this.deactivateEvents = new fi()),
            (this.name = s || 'primary'),
            t.onChildOutletCreated(this.name, this);
        }
        ngOnDestroy() {
          this.parentContexts.onChildOutletDestroyed(this.name);
        }
        ngOnInit() {
          if (!this.activated) {
            const t = this.parentContexts.getContext(this.name);
            t &&
              t.route &&
              (t.attachRef
                ? this.attach(t.attachRef, t.route)
                : this.activateWith(t.route, t.resolver || null));
          }
        }
        get isActivated() {
          return !!this.activated;
        }
        get component() {
          if (!this.activated) throw new Error('Outlet is not activated');
          return this.activated.instance;
        }
        get activatedRoute() {
          if (!this.activated) throw new Error('Outlet is not activated');
          return this._activatedRoute;
        }
        get activatedRouteData() {
          return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
        }
        detach() {
          if (!this.activated) throw new Error('Outlet is not activated');
          this.location.detach();
          const t = this.activated;
          return (this.activated = null), (this._activatedRoute = null), t;
        }
        attach(t, e) {
          (this.activated = t),
            (this._activatedRoute = e),
            this.location.insert(t.hostView);
        }
        deactivate() {
          if (this.activated) {
            const t = this.component;
            this.activated.destroy(),
              (this.activated = null),
              (this._activatedRoute = null),
              this.deactivateEvents.emit(t);
          }
        }
        activateWith(t, e) {
          if (this.isActivated)
            throw new Error('Cannot activate an already activated outlet');
          this._activatedRoute = t;
          const n = (e = e || this.resolver).resolveComponentFactory(
              t._futureSnapshot.routeConfig.component
            ),
            s = this.parentContexts.getOrCreateContext(this.name).children,
            i = new rp(t, s, this.location.injector);
          (this.activated = this.location.createComponent(
            n,
            this.location.length,
            i
          )),
            this.changeDetector.markForCheck(),
            this.activateEvents.emit(this.activated.instance);
        }
      }
      class rp {
        constructor(t, e, n) {
          (this.route = t), (this.childContexts = e), (this.parent = n);
        }
        get(t, e) {
          return t === Wu
            ? this.route
            : t === sp
            ? this.childContexts
            : this.parent.get(t, e);
        }
      }
      class op {}
      class ap {
        preload(t, e) {
          return e().pipe(dc(() => ta(null)));
        }
      }
      class lp {
        preload(t, e) {
          return ta(null);
        }
      }
      class cp {
        constructor(t, e, n, s, i) {
          (this.router = t),
            (this.injector = s),
            (this.preloadingStrategy = i),
            (this.loader = new Gd(
              e,
              n,
              (e) => t.triggerEvent(new Gh(e)),
              (e) => t.triggerEvent(new Qh(e))
            ));
        }
        setUpPreloading() {
          this.subscription = this.router.events
            .pipe(
              na((t) => t instanceof Bh),
              ea(() => this.preload())
            )
            .subscribe(() => {});
        }
        preload() {
          const t = this.injector.get(Ot);
          return this.processRoutes(t, this.router.config);
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
        processRoutes(t, e) {
          const n = [];
          for (const s of e)
            if (s.loadChildren && !s.canLoad && s._loadedConfig) {
              const t = s._loadedConfig;
              n.push(this.processRoutes(t.module, t.routes));
            } else
              s.loadChildren && !s.canLoad
                ? n.push(this.preloadConfig(t, s))
                : s.children && n.push(this.processRoutes(t, s.children));
          return j(n).pipe(
            W(),
            D((t) => {})
          );
        }
        preloadConfig(t, e) {
          return this.preloadingStrategy.preload(e, () =>
            this.loader
              .load(t.injector, e)
              .pipe(
                U(
                  (t) => (
                    (e._loadedConfig = t),
                    this.processRoutes(t.module, t.routes)
                  )
                )
              )
          );
        }
      }
      class hp {
        constructor(t, e, n = {}) {
          (this.router = t),
            (this.viewportScroller = e),
            (this.options = n),
            (this.lastId = 0),
            (this.lastSource = 'imperative'),
            (this.restoredId = 0),
            (this.store = {}),
            (n.scrollPositionRestoration =
              n.scrollPositionRestoration || 'disabled'),
            (n.anchorScrolling = n.anchorScrolling || 'disabled');
        }
        init() {
          'disabled' !== this.options.scrollPositionRestoration &&
            this.viewportScroller.setHistoryScrollRestoration('manual'),
            (this.routerEventsSubscription = this.createScrollEvents()),
            (this.scrollEventsSubscription = this.consumeScrollEvents());
        }
        createScrollEvents() {
          return this.router.events.subscribe((t) => {
            t instanceof Hh
              ? ((this.store[
                  this.lastId
                ] = this.viewportScroller.getScrollPosition()),
                (this.lastSource = t.navigationTrigger),
                (this.restoredId = t.restoredState
                  ? t.restoredState.navigationId
                  : 0))
              : t instanceof Bh &&
                ((this.lastId = t.id),
                this.scheduleScrollEvent(
                  t,
                  this.router.parseUrl(t.urlAfterRedirects).fragment
                ));
          });
        }
        consumeScrollEvents() {
          return this.router.events.subscribe((t) => {
            t instanceof eu &&
              (t.position
                ? 'top' === this.options.scrollPositionRestoration
                  ? this.viewportScroller.scrollToPosition([0, 0])
                  : 'enabled' === this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition(t.position)
                : t.anchor && 'enabled' === this.options.anchorScrolling
                ? this.viewportScroller.scrollToAnchor(t.anchor)
                : 'disabled' !== this.options.scrollPositionRestoration &&
                  this.viewportScroller.scrollToPosition([0, 0]));
          });
        }
        scheduleScrollEvent(t, e) {
          this.router.triggerEvent(
            new eu(
              t,
              'popstate' === this.lastSource
                ? this.store[this.restoredId]
                : null,
              e
            )
          );
        }
        ngOnDestroy() {
          this.routerEventsSubscription &&
            this.routerEventsSubscription.unsubscribe(),
            this.scrollEventsSubscription &&
              this.scrollEventsSubscription.unsubscribe();
        }
      }
      const up = new wt('ROUTER_CONFIGURATION'),
        dp = new wt('ROUTER_FORROOT_GUARD'),
        pp = [
          ca,
          { provide: Eu, useClass: Cu },
          {
            provide: ep,
            useFactory: bp,
            deps: [
              ar,
              Eu,
              sp,
              ca,
              Se,
              cr,
              Oi,
              Zd,
              up,
              [Qd, new st()],
              [qd, new st()],
            ],
          },
          sp,
          { provide: Wu, useFactory: wp, deps: [ep] },
          { provide: cr, useClass: dr },
          cp,
          lp,
          ap,
          { provide: up, useValue: { enableTracing: !1 } },
        ];
      function fp() {
        return new nr('Router', ep);
      }
      class mp {
        constructor(t, e) {}
        static forRoot(t, e) {
          return {
            ngModule: mp,
            providers: [
              pp,
              vp(t),
              { provide: dp, useFactory: _p, deps: [[ep, new st(), new rt()]] },
              { provide: up, useValue: e || {} },
              {
                provide: aa,
                useFactory: yp,
                deps: [ra, [new nt(la), new st()], up],
              },
              { provide: hp, useFactory: gp, deps: [ep, el, up] },
              {
                provide: op,
                useExisting:
                  e && e.preloadingStrategy ? e.preloadingStrategy : lp,
              },
              { provide: nr, multi: !0, useFactory: fp },
              [
                Sp,
                { provide: yi, multi: !0, useFactory: Ep, deps: [Sp] },
                { provide: xp, useFactory: Cp, deps: [Sp] },
                { provide: Ci, multi: !0, useExisting: xp },
              ],
            ],
          };
        }
        static forChild(t) {
          return { ngModule: mp, providers: [vp(t)] };
        }
      }
      function gp(t, e, n) {
        return n.scrollOffset && e.setOffset(n.scrollOffset), new hp(t, e, n);
      }
      function yp(t, e, n = {}) {
        return n.useHash ? new ua(t, e) : new da(t, e);
      }
      function _p(t) {
        if (t)
          throw new Error(
            'RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.'
          );
        return 'guarded';
      }
      function vp(t) {
        return [
          { provide: Ae, multi: !0, useValue: t },
          { provide: Zd, multi: !0, useValue: t },
        ];
      }
      function bp(t, e, n, s, i, r, o, a, l = {}, c, h) {
        const u = new ep(null, e, n, s, i, r, o, pu(a));
        if (
          (c && (u.urlHandlingStrategy = c),
          h && (u.routeReuseStrategy = h),
          l.errorHandler && (u.errorHandler = l.errorHandler),
          l.malformedUriErrorHandler &&
            (u.malformedUriErrorHandler = l.malformedUriErrorHandler),
          l.enableTracing)
        ) {
          const t = Fc();
          u.events.subscribe((e) => {
            t.logGroup('Router Event: ' + e.constructor.name),
              t.log(e.toString()),
              t.log(e),
              t.logGroupEnd();
          });
        }
        return (
          l.onSameUrlNavigation &&
            (u.onSameUrlNavigation = l.onSameUrlNavigation),
          l.paramsInheritanceStrategy &&
            (u.paramsInheritanceStrategy = l.paramsInheritanceStrategy),
          l.urlUpdateStrategy && (u.urlUpdateStrategy = l.urlUpdateStrategy),
          l.relativeLinkResolution &&
            (u.relativeLinkResolution = l.relativeLinkResolution),
          u
        );
      }
      function wp(t) {
        return t.routerState.root;
      }
      class Sp {
        constructor(t) {
          (this.injector = t),
            (this.initNavigation = !1),
            (this.resultOfPreactivationDone = new x());
        }
        appInitializer() {
          return this.injector.get(oa, Promise.resolve(null)).then(() => {
            let t = null;
            const e = new Promise((e) => (t = e)),
              n = this.injector.get(ep),
              s = this.injector.get(up);
            if (this.isLegacyDisabled(s) || this.isLegacyEnabled(s)) t(!0);
            else if ('disabled' === s.initialNavigation)
              n.setUpLocationChangeListener(), t(!0);
            else {
              if ('enabled' !== s.initialNavigation)
                throw new Error(
                  `Invalid initialNavigation options: '${s.initialNavigation}'`
                );
              (n.hooks.afterPreactivation = () =>
                this.initNavigation
                  ? ta(null)
                  : ((this.initNavigation = !0),
                    t(!0),
                    this.resultOfPreactivationDone)),
                n.initialNavigation();
            }
            return e;
          });
        }
        bootstrapListener(t) {
          const e = this.injector.get(up),
            n = this.injector.get(cp),
            s = this.injector.get(hp),
            i = this.injector.get(ep),
            r = this.injector.get(ar);
          t === r.components[0] &&
            (this.isLegacyEnabled(e)
              ? i.initialNavigation()
              : this.isLegacyDisabled(e) && i.setUpLocationChangeListener(),
            n.setUpPreloading(),
            s.init(),
            i.resetRootComponentType(r.componentTypes[0]),
            this.resultOfPreactivationDone.next(null),
            this.resultOfPreactivationDone.complete());
        }
        isLegacyEnabled(t) {
          return (
            'legacy_enabled' === t.initialNavigation ||
            !0 === t.initialNavigation ||
            void 0 === t.initialNavigation
          );
        }
        isLegacyDisabled(t) {
          return (
            'legacy_disabled' === t.initialNavigation ||
            !1 === t.initialNavigation
          );
        }
      }
      function Ep(t) {
        return t.appInitializer.bind(t);
      }
      function Cp(t) {
        return t.bootstrapListener.bind(t);
      }
      const xp = new wt('Router Initializer');
      var Tp = jn({ encapsulation: 2, styles: [], data: {} });
      function kp(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              16777216,
              null,
              null,
              1,
              'router-outlet',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            qs(1, 212992, null, 0, ip, [sp, Sn, We, [8, null], _e], null, null),
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      function Dp(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              1,
              'ng-component',
              [],
              null,
              null,
              null,
              kp,
              Tp
            )),
            qs(1, 49152, null, 0, nu, [], null, null),
          ],
          null,
          null
        );
      }
      var Rp = Ss('ng-component', nu, Dp, {}, {}, []);
      class Ap {
        constructor(t, e, n, s, i, r) {
          (this.toastId = t),
            (this.config = e),
            (this.message = n),
            (this.title = s),
            (this.toastType = i),
            (this.toastRef = r),
            (this._onTap = new x()),
            (this._onAction = new x()),
            this.toastRef.afterClosed().subscribe(() => {
              this._onAction.complete(), this._onTap.complete();
            });
        }
        triggerTap() {
          this._onTap.next(),
            this.config.tapToDismiss && this._onTap.complete();
        }
        onTap() {
          return this._onTap.asObservable();
        }
        triggerAction(t) {
          this._onAction.next(t);
        }
        onAction() {
          return this._onAction.asObservable();
        }
      }
      const Ip = {
          maxOpened: 0,
          autoDismiss: !1,
          newestOnTop: !0,
          preventDuplicates: !1,
          countDuplicates: !1,
          resetTimeoutOnDuplicate: !1,
          iconClasses: {
            error: 'toast-error',
            info: 'toast-info',
            success: 'toast-success',
            warning: 'toast-warning',
          },
          closeButton: !1,
          disableTimeOut: !1,
          timeOut: 5e3,
          extendedTimeOut: 1e3,
          enableHtml: !1,
          progressBar: !1,
          toastClass: 'ngx-toastr',
          positionClass: 'toast-top-right',
          titleClass: 'toast-title',
          messageClass: 'toast-message',
          easing: 'ease-in',
          easeTime: 300,
          tapToDismiss: !0,
          onActivateTick: !1,
          progressAnimation: 'decreasing',
        },
        Op = new wt('ToastConfig');
      class Pp {
        constructor(t, e) {
          (this.component = t), (this.injector = e);
        }
        attach(t, e) {
          return (this._attachedHost = t), t.attach(this, e);
        }
        detach() {
          const t = this._attachedHost;
          if (t) return (this._attachedHost = void 0), t.detach();
        }
        get isAttached() {
          return null != this._attachedHost;
        }
        setAttachedHost(t) {
          this._attachedHost = t;
        }
      }
      class Np extends class {
        attach(t, e) {
          return (this._attachedPortal = t), this.attachComponentPortal(t, e);
        }
        detach() {
          this._attachedPortal && this._attachedPortal.setAttachedHost(),
            (this._attachedPortal = void 0),
            this._disposeFn && (this._disposeFn(), (this._disposeFn = void 0));
        }
        setDisposeFn(t) {
          this._disposeFn = t;
        }
      } {
        constructor(t, e, n) {
          super(),
            (this._hostDomElement = t),
            (this._componentFactoryResolver = e),
            (this._appRef = n);
        }
        attachComponentPortal(t, e) {
          const n = this._componentFactoryResolver.resolveComponentFactory(
            t.component
          );
          let s;
          return (
            (s = n.create(t.injector)),
            this._appRef.attachView(s.hostView),
            this.setDisposeFn(() => {
              this._appRef.detachView(s.hostView), s.destroy();
            }),
            e
              ? this._hostDomElement.insertBefore(
                  this._getComponentRootNode(s),
                  this._hostDomElement.firstChild
                )
              : this._hostDomElement.appendChild(this._getComponentRootNode(s)),
            s
          );
        }
        _getComponentRootNode(t) {
          return t.hostView.rootNodes[0];
        }
      }
      let Mp = (() => {
        let t = class {
          constructor(t) {
            this._document = t;
          }
          ngOnDestroy() {
            this._containerElement &&
              this._containerElement.parentNode &&
              this._containerElement.parentNode.removeChild(
                this._containerElement
              );
          }
          getContainerElement() {
            return (
              this._containerElement || this._createContainer(),
              this._containerElement
            );
          }
          _createContainer() {
            const t = this._document.createElement('div');
            t.classList.add('overlay-container'),
              this._document.body.appendChild(t),
              (this._containerElement = t);
          }
        };
        return (
          (t.ngInjectableDef = ct({
            factory: function () {
              return new t(Rt(tl));
            },
            token: t,
            providedIn: 'root',
          })),
          t
        );
      })();
      class Fp {
        constructor(t) {
          this._portalHost = t;
        }
        attach(t, e = !0) {
          return this._portalHost.attach(t, e);
        }
        detach() {
          return this._portalHost.detach();
        }
      }
      let Lp = (() => {
        let t = class {
          constructor(t, e, n, s) {
            (this._overlayContainer = t),
              (this._componentFactoryResolver = e),
              (this._appRef = n),
              (this._document = s),
              (this._paneElements = new Map());
          }
          create(t, e) {
            return this._createOverlayRef(this.getPaneElement(t, e));
          }
          getPaneElement(t = '', e) {
            return (
              this._paneElements.get(e) || this._paneElements.set(e, {}),
              this._paneElements.get(e)[t] ||
                (this._paneElements.get(e)[t] = this._createPaneElement(t, e)),
              this._paneElements.get(e)[t]
            );
          }
          _createPaneElement(t, e) {
            const n = this._document.createElement('div');
            return (
              (n.id = 'toast-container'),
              n.classList.add(t),
              n.classList.add('toast-container'),
              e
                ? e.getContainerElement().appendChild(n)
                : this._overlayContainer.getContainerElement().appendChild(n),
              n
            );
          }
          _createPortalHost(t) {
            return new Np(t, this._componentFactoryResolver, this._appRef);
          }
          _createOverlayRef(t) {
            return new Fp(this._createPortalHost(t));
          }
        };
        return (
          (t.ngInjectableDef = ct({
            factory: function () {
              return new t(Rt(Mp), Rt(We), Rt(ar), Rt(tl));
            },
            token: t,
            providedIn: 'root',
          })),
          t
        );
      })();
      class jp {
        constructor(t) {
          (this._overlayRef = t),
            (this.duplicatesCount = 0),
            (this._afterClosed = new x()),
            (this._activate = new x()),
            (this._manualClose = new x()),
            (this._resetTimeout = new x()),
            (this._countDuplicate = new x());
        }
        manualClose() {
          this._manualClose.next(), this._manualClose.complete();
        }
        manualClosed() {
          return this._manualClose.asObservable();
        }
        timeoutReset() {
          return this._resetTimeout.asObservable();
        }
        countDuplicate() {
          return this._countDuplicate.asObservable();
        }
        close() {
          this._overlayRef.detach(),
            this._afterClosed.next(),
            this._manualClose.next(),
            this._afterClosed.complete(),
            this._manualClose.complete(),
            this._activate.complete(),
            this._resetTimeout.complete(),
            this._countDuplicate.complete();
        }
        afterClosed() {
          return this._afterClosed.asObservable();
        }
        isInactive() {
          return this._activate.isStopped;
        }
        activate() {
          this._activate.next(), this._activate.complete();
        }
        afterActivate() {
          return this._activate.asObservable();
        }
        onDuplicate(t, e) {
          t && this._resetTimeout.next(),
            e && this._countDuplicate.next(++this.duplicatesCount);
        }
      }
      class Vp {
        constructor(t, e) {
          (this._toastPackage = t), (this._parentInjector = e);
        }
        get(t, e, n) {
          return t === Ap
            ? this._toastPackage
            : this._parentInjector.get(t, e, n);
        }
      }
      let Hp = (() => {
          let t = class {
            constructor(t, e, n, s, i) {
              (this.overlay = e),
                (this._injector = n),
                (this.sanitizer = s),
                (this.ngZone = i),
                (this.currentlyActive = 0),
                (this.toasts = []),
                (this.index = 0),
                (this.toastrConfig = Object.assign({}, t.default, t.config)),
                t.config.iconClasses &&
                  (this.toastrConfig.iconClasses = Object.assign(
                    {},
                    t.default.iconClasses,
                    t.config.iconClasses
                  ));
            }
            show(t, e, n = {}, s = '') {
              return this._preBuildNotification(s, t, e, this.applyConfig(n));
            }
            success(t, e, n = {}) {
              return this._preBuildNotification(
                this.toastrConfig.iconClasses.success || '',
                t,
                e,
                this.applyConfig(n)
              );
            }
            error(t, e, n = {}) {
              return this._preBuildNotification(
                this.toastrConfig.iconClasses.error || '',
                t,
                e,
                this.applyConfig(n)
              );
            }
            info(t, e, n = {}) {
              return this._preBuildNotification(
                this.toastrConfig.iconClasses.info || '',
                t,
                e,
                this.applyConfig(n)
              );
            }
            warning(t, e, n = {}) {
              return this._preBuildNotification(
                this.toastrConfig.iconClasses.warning || '',
                t,
                e,
                this.applyConfig(n)
              );
            }
            clear(t) {
              for (const e of this.toasts)
                if (void 0 !== t) {
                  if (e.toastId === t) return void e.toastRef.manualClose();
                } else e.toastRef.manualClose();
            }
            remove(t) {
              const e = this._findToast(t);
              if (!e) return !1;
              if (
                (e.activeToast.toastRef.close(),
                this.toasts.splice(e.index, 1),
                (this.currentlyActive = this.currentlyActive - 1),
                !this.toastrConfig.maxOpened || !this.toasts.length)
              )
                return !1;
              if (
                this.currentlyActive < this.toastrConfig.maxOpened &&
                this.toasts[this.currentlyActive]
              ) {
                const t = this.toasts[this.currentlyActive].toastRef;
                t.isInactive() ||
                  ((this.currentlyActive = this.currentlyActive + 1),
                  t.activate());
              }
              return !0;
            }
            findDuplicate(t, e, n) {
              for (let s = 0; s < this.toasts.length; s++) {
                const i = this.toasts[s];
                if (i.message === t) return i.toastRef.onDuplicate(e, n), i;
              }
              return null;
            }
            applyConfig(t = {}) {
              return Object.assign({}, this.toastrConfig, t);
            }
            _findToast(t) {
              for (let e = 0; e < this.toasts.length; e++)
                if (this.toasts[e].toastId === t)
                  return { index: e, activeToast: this.toasts[e] };
              return null;
            }
            _preBuildNotification(t, e, n, s) {
              return s.onActivateTick
                ? this.ngZone.run(() => this._buildNotification(t, e, n, s))
                : this._buildNotification(t, e, n, s);
            }
            _buildNotification(t, e, n, s) {
              if (!s.toastComponent) throw new Error('toastComponent required');
              const i = this.findDuplicate(
                e,
                this.toastrConfig.resetTimeoutOnDuplicate && s.timeOut > 0,
                this.toastrConfig.countDuplicates
              );
              if (e && this.toastrConfig.preventDuplicates && null !== i)
                return i;
              this.previousToastMessage = e;
              let r = !1;
              this.toastrConfig.maxOpened &&
                this.currentlyActive >= this.toastrConfig.maxOpened &&
                ((r = !0),
                this.toastrConfig.autoDismiss &&
                  this.clear(this.toasts[0].toastId));
              const o = this.overlay.create(
                s.positionClass,
                this.overlayContainer
              );
              this.index = this.index + 1;
              let a = e;
              e && s.enableHtml && (a = this.sanitizer.sanitize(de.HTML, e));
              const l = new jp(o),
                c = new Ap(this.index, s, a, n, t, l),
                h = new Vp(c, this._injector),
                u = new Pp(s.toastComponent, h),
                d = o.attach(u, this.toastrConfig.newestOnTop);
              l.componentInstance = d._component;
              const p = {
                toastId: this.index,
                message: e || '',
                toastRef: l,
                onShown: l.afterActivate(),
                onHidden: l.afterClosed(),
                onTap: c.onTap(),
                onAction: c.onAction(),
                portal: d,
              };
              return (
                r ||
                  setTimeout(() => {
                    p.toastRef.activate(),
                      (this.currentlyActive = this.currentlyActive + 1);
                  }),
                this.toasts.push(p),
                p
              );
            }
          };
          return (
            (t.ngInjectableDef = ct({
              factory: function () {
                return new t(Rt(Op), Rt(Lp), Rt(St), Rt(Rh), Rt($i));
              },
              token: t,
              providedIn: 'root',
            })),
            t
          );
        })(),
        Bp = class {
          constructor(t, e, n) {
            (this.toastrService = t),
              (this.toastPackage = e),
              (this.ngZone = n),
              (this.width = -1),
              (this.toastClasses = ''),
              (this.state = {
                value: 'inactive',
                params: {
                  easeTime: this.toastPackage.config.easeTime,
                  easing: 'ease-in',
                },
              }),
              (this.message = e.message),
              (this.title = e.title),
              (this.options = e.config),
              (this.originalTimeout = e.config.timeOut),
              (this.toastClasses = `${e.toastType} ${e.config.toastClass}`),
              (this.sub = e.toastRef.afterActivate().subscribe(() => {
                this.activateToast();
              })),
              (this.sub1 = e.toastRef.manualClosed().subscribe(() => {
                this.remove();
              })),
              (this.sub2 = e.toastRef.timeoutReset().subscribe(() => {
                this.resetTimeout();
              })),
              (this.sub3 = e.toastRef.countDuplicate().subscribe((t) => {
                this.duplicatesCount = t;
              }));
          }
          get displayStyle() {
            return 'inactive' === this.state.value ? 'none' : 'inherit';
          }
          ngOnDestroy() {
            this.sub.unsubscribe(),
              this.sub1.unsubscribe(),
              this.sub2.unsubscribe(),
              this.sub3.unsubscribe(),
              clearInterval(this.intervalId),
              clearTimeout(this.timeout);
          }
          activateToast() {
            (this.state = Object.assign({}, this.state, { value: 'active' })),
              !this.options.disableTimeOut &&
                this.options.timeOut &&
                (this.outsideTimeout(() => this.remove(), this.options.timeOut),
                (this.hideTime = new Date().getTime() + this.options.timeOut),
                this.options.progressBar &&
                  this.outsideInterval(() => this.updateProgress(), 10));
          }
          updateProgress() {
            if (0 === this.width || 100 === this.width || !this.options.timeOut)
              return;
            const t = new Date().getTime();
            (this.width = ((this.hideTime - t) / this.options.timeOut) * 100),
              'increasing' === this.options.progressAnimation &&
                (this.width = 100 - this.width),
              this.width <= 0 && (this.width = 0),
              this.width >= 100 && (this.width = 100);
          }
          resetTimeout() {
            clearTimeout(this.timeout),
              clearInterval(this.intervalId),
              (this.state = Object.assign({}, this.state, { value: 'active' })),
              this.outsideTimeout(() => this.remove(), this.originalTimeout),
              (this.options.timeOut = this.originalTimeout),
              (this.hideTime =
                new Date().getTime() + (this.options.timeOut || 0)),
              (this.width = -1),
              this.options.progressBar &&
                this.outsideInterval(() => this.updateProgress(), 10);
          }
          remove() {
            'removed' !== this.state.value &&
              (clearTimeout(this.timeout),
              (this.state = Object.assign({}, this.state, {
                value: 'removed',
              })),
              this.outsideTimeout(
                () => this.toastrService.remove(this.toastPackage.toastId),
                +this.toastPackage.config.easeTime
              ));
          }
          tapToast() {
            'removed' !== this.state.value &&
              (this.toastPackage.triggerTap(),
              this.options.tapToDismiss && this.remove());
          }
          stickAround() {
            'removed' !== this.state.value &&
              (clearTimeout(this.timeout),
              (this.options.timeOut = 0),
              (this.hideTime = 0),
              clearInterval(this.intervalId),
              (this.width = 0));
          }
          delayedHideToast() {
            this.options.disableTimeOut ||
              0 === this.options.extendedTimeOut ||
              'removed' === this.state.value ||
              (this.outsideTimeout(
                () => this.remove(),
                this.options.extendedTimeOut
              ),
              (this.options.timeOut = this.options.extendedTimeOut),
              (this.hideTime =
                new Date().getTime() + (this.options.timeOut || 0)),
              (this.width = -1),
              this.options.progressBar &&
                this.outsideInterval(() => this.updateProgress(), 10));
          }
          outsideTimeout(t, e) {
            this.ngZone
              ? this.ngZone.runOutsideAngular(
                  () =>
                    (this.timeout = setTimeout(
                      () => this.runInsideAngular(t),
                      e
                    ))
                )
              : (this.timeout = setTimeout(() => t(), e));
          }
          outsideInterval(t, e) {
            this.ngZone
              ? this.ngZone.runOutsideAngular(
                  () =>
                    (this.intervalId = setInterval(
                      () => this.runInsideAngular(t),
                      e
                    ))
                )
              : (this.intervalId = setInterval(() => t(), e));
          }
          runInsideAngular(t) {
            this.ngZone ? this.ngZone.run(() => t()) : t();
          }
        };
      var Up;
      const $p = Object.assign({}, Ip, { toastComponent: Bp });
      let zp = (Up = class {
        static forRoot(t = {}) {
          return {
            ngModule: Up,
            providers: [{ provide: Op, useValue: { default: $p, config: t } }],
          };
        }
      });
      var Wp;
      const qp = Object.assign({}, Ip, {
        toastComponent: class {
          constructor(t, e, n) {
            (this.toastrService = t),
              (this.toastPackage = e),
              (this.appRef = n),
              (this.width = -1),
              (this.toastClasses = ''),
              (this.state = 'inactive'),
              (this.message = e.message),
              (this.title = e.title),
              (this.options = e.config),
              (this.originalTimeout = e.config.timeOut),
              (this.toastClasses = `${e.toastType} ${e.config.toastClass}`),
              (this.sub = e.toastRef.afterActivate().subscribe(() => {
                this.activateToast();
              })),
              (this.sub1 = e.toastRef.manualClosed().subscribe(() => {
                this.remove();
              })),
              (this.sub2 = e.toastRef.timeoutReset().subscribe(() => {
                this.resetTimeout();
              })),
              (this.sub3 = e.toastRef.countDuplicate().subscribe((t) => {
                this.duplicatesCount = t;
              }));
          }
          get displayStyle() {
            return 'inactive' === this.state ? 'none' : 'inherit';
          }
          ngOnDestroy() {
            this.sub.unsubscribe(),
              this.sub1.unsubscribe(),
              this.sub2.unsubscribe(),
              this.sub3.unsubscribe(),
              clearInterval(this.intervalId),
              clearTimeout(this.timeout);
          }
          activateToast() {
            (this.state = 'active'),
              !this.options.disableTimeOut &&
                this.options.timeOut &&
                ((this.timeout = setTimeout(() => {
                  this.remove();
                }, this.options.timeOut)),
                (this.hideTime = new Date().getTime() + this.options.timeOut),
                this.options.progressBar &&
                  (this.intervalId = setInterval(
                    () => this.updateProgress(),
                    10
                  ))),
              this.options.onActivateTick && this.appRef.tick();
          }
          updateProgress() {
            if (0 === this.width || 100 === this.width || !this.options.timeOut)
              return;
            const t = new Date().getTime();
            (this.width = ((this.hideTime - t) / this.options.timeOut) * 100),
              'increasing' === this.options.progressAnimation &&
                (this.width = 100 - this.width),
              this.width <= 0 && (this.width = 0),
              this.width >= 100 && (this.width = 100);
          }
          resetTimeout() {
            clearTimeout(this.timeout),
              clearInterval(this.intervalId),
              (this.state = 'active'),
              (this.options.timeOut = this.originalTimeout),
              (this.timeout = setTimeout(
                () => this.remove(),
                this.originalTimeout
              )),
              (this.hideTime =
                new Date().getTime() + (this.originalTimeout || 0)),
              (this.width = -1),
              this.options.progressBar &&
                (this.intervalId = setInterval(
                  () => this.updateProgress(),
                  10
                ));
          }
          remove() {
            'removed' !== this.state &&
              (clearTimeout(this.timeout),
              (this.state = 'removed'),
              (this.timeout = setTimeout(() =>
                this.toastrService.remove(this.toastPackage.toastId)
              )));
          }
          tapToast() {
            'removed' !== this.state &&
              (this.toastPackage.triggerTap(),
              this.options.tapToDismiss && this.remove());
          }
          stickAround() {
            'removed' !== this.state &&
              (clearTimeout(this.timeout),
              (this.options.timeOut = 0),
              (this.hideTime = 0),
              clearInterval(this.intervalId),
              (this.width = 0));
          }
          delayedHideToast() {
            this.options.disableTimeOut ||
              0 === this.options.extendedTimeOut ||
              'removed' === this.state ||
              ((this.timeout = setTimeout(
                () => this.remove(),
                this.options.extendedTimeOut
              )),
              (this.options.timeOut = this.options.extendedTimeOut),
              (this.hideTime =
                new Date().getTime() + (this.options.timeOut || 0)),
              (this.width = -1),
              this.options.progressBar &&
                (this.intervalId = setInterval(
                  () => this.updateProgress(),
                  10
                )));
          }
        },
      });
      Wp = class {
        static forRoot(t = {}) {
          return {
            ngModule: Wp,
            providers: [{ provide: Op, useValue: { default: qp, config: t } }],
          };
        }
      };
      var Kp = jn({
        encapsulation: 2,
        styles: [],
        data: {
          animation: [
            {
              type: 7,
              name: 'flyInOut',
              definitions: [
                {
                  type: 0,
                  name: 'inactive',
                  styles: { type: 6, styles: { opacity: 0 }, offset: null },
                  options: void 0,
                },
                {
                  type: 0,
                  name: 'active',
                  styles: { type: 6, styles: { opacity: 1 }, offset: null },
                  options: void 0,
                },
                {
                  type: 0,
                  name: 'removed',
                  styles: { type: 6, styles: { opacity: 0 }, offset: null },
                  options: void 0,
                },
                {
                  type: 1,
                  expr: 'inactive => active',
                  animation: {
                    type: 4,
                    styles: null,
                    timings: '{{ easeTime }}ms {{ easing }}',
                  },
                  options: null,
                },
                {
                  type: 1,
                  expr: 'active => removed',
                  animation: {
                    type: 4,
                    styles: null,
                    timings: '{{ easeTime }}ms {{ easing }}',
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function Zp(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              2,
              'button',
              [
                ['aria-label', 'Close'],
                ['class', 'toast-close-button'],
              ],
              null,
              [[null, 'click']],
              function (t, e, n) {
                var s = !0;
                return (
                  'click' === e && (s = !1 !== t.component.remove() && s), s
                );
              },
              null,
              null
            )),
            (t()(),
            kr(
              1,
              0,
              null,
              null,
              1,
              'span',
              [['aria-hidden', 'true']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Hr(-1, null, ['\xd7'])),
          ],
          null,
          null
        );
      }
      function Gp(t) {
        return $r(
          0,
          [
            (t()(),
            kr(0, 0, null, null, 1, null, null, null, null, null, null, null)),
            (t()(), Hr(1, null, ['[', ']'])),
          ],
          null,
          function (t, e) {
            t(e, 1, 0, e.component.duplicatesCount + 1);
          }
        );
      }
      function Qp(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              3,
              'div',
              [],
              [
                [8, 'className', 0],
                [1, 'aria-label', 0],
              ],
              null,
              null,
              null,
              null
            )),
            (t()(), Hr(1, null, [' ', ' '])),
            (t()(), Tr(16777216, null, null, 1, null, Gp)),
            qs(3, 16384, null, 0, Ga, [Sn, bn], { ngIf: [0, 'ngIf'] }, null),
          ],
          function (t, e) {
            t(e, 3, 0, e.component.duplicatesCount);
          },
          function (t, e) {
            var n = e.component;
            t(e, 0, 0, n.options.titleClass, n.title), t(e, 1, 0, n.title);
          }
        );
      }
      function Yp(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              0,
              'div',
              [
                ['aria-live', 'polite'],
                ['role', 'alertdialog'],
              ],
              [
                [8, 'className', 0],
                [8, 'innerHTML', 1],
              ],
              null,
              null,
              null,
              null
            )),
          ],
          null,
          function (t, e) {
            var n = e.component;
            t(e, 0, 0, n.options.messageClass, n.message);
          }
        );
      }
      function Xp(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              1,
              'div',
              [
                ['aria-live', 'polite'],
                ['role', 'alertdialog'],
              ],
              [
                [8, 'className', 0],
                [1, 'aria-label', 0],
              ],
              null,
              null,
              null,
              null
            )),
            (t()(), Hr(1, null, [' ', ' '])),
          ],
          null,
          function (t, e) {
            var n = e.component;
            t(e, 0, 0, n.options.messageClass, n.message),
              t(e, 1, 0, n.message);
          }
        );
      }
      function Jp(t) {
        return $r(
          0,
          [
            (t()(),
            kr(0, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (t()(),
            kr(
              1,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'toast-progress']],
              [[4, 'width', null]],
              null,
              null,
              null,
              null
            )),
          ],
          null,
          function (t, e) {
            t(e, 1, 0, e.component.width + '%');
          }
        );
      }
      function tf(t) {
        return $r(
          0,
          [
            (t()(), Tr(16777216, null, null, 1, null, Zp)),
            qs(1, 16384, null, 0, Ga, [Sn, bn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Tr(16777216, null, null, 1, null, Qp)),
            qs(3, 16384, null, 0, Ga, [Sn, bn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Tr(16777216, null, null, 1, null, Yp)),
            qs(5, 16384, null, 0, Ga, [Sn, bn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Tr(16777216, null, null, 1, null, Xp)),
            qs(7, 16384, null, 0, Ga, [Sn, bn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Tr(16777216, null, null, 1, null, Jp)),
            qs(9, 16384, null, 0, Ga, [Sn, bn], { ngIf: [0, 'ngIf'] }, null),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, n.options.closeButton),
              t(e, 3, 0, n.title),
              t(e, 5, 0, n.message && n.options.enableHtml),
              t(e, 7, 0, n.message && !n.options.enableHtml),
              t(e, 9, 0, n.options.progressBar);
          },
          null
        );
      }
      function ef(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['toast-component', '']],
              [
                [8, 'className', 0],
                [40, '@flyInOut', 0],
                [4, 'display', null],
              ],
              [
                [null, 'click'],
                [null, 'mouseenter'],
                [null, 'mouseleave'],
              ],
              function (t, e, n) {
                var s = !0;
                return (
                  'click' === e && (s = !1 !== Ps(t, 1).tapToast() && s),
                  'mouseenter' === e &&
                    (s = !1 !== Ps(t, 1).stickAround() && s),
                  'mouseleave' === e &&
                    (s = !1 !== Ps(t, 1).delayedHideToast() && s),
                  s
                );
              },
              tf,
              Kp
            )),
            qs(1, 180224, null, 0, Bp, [Hp, Ap, $i], null, null),
          ],
          null,
          function (t, e) {
            t(
              e,
              0,
              0,
              Ps(e, 1).toastClasses,
              Ps(e, 1).state,
              Ps(e, 1).displayStyle
            );
          }
        );
      }
      var nf = Ss('[toast-component]', Bp, ef, {}, {}, []);
      class sf {}
      function rf(t, e = null) {
        return { type: 2, steps: t, options: e };
      }
      function of(t) {
        return { type: 6, styles: t, offset: null };
      }
      function af(t) {
        Promise.resolve(null).then(t);
      }
      class lf {
        constructor(t = 0, e = 0) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this._destroyed = !1),
            (this._finished = !1),
            (this.parentPlayer = null),
            (this.totalTime = t + e);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((t) => t()),
            (this._onDoneFns = []));
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        hasStarted() {
          return this._started;
        }
        init() {}
        play() {
          this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
            (this._started = !0);
        }
        triggerMicrotask() {
          af(() => this._onFinish());
        }
        _onStart() {
          this._onStartFns.forEach((t) => t()), (this._onStartFns = []);
        }
        pause() {}
        restart() {}
        finish() {
          this._onFinish();
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.hasStarted() || this._onStart(),
            this.finish(),
            this._onDestroyFns.forEach((t) => t()),
            (this._onDestroyFns = []));
        }
        reset() {}
        setPosition(t) {}
        getPosition() {
          return 0;
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
      }
      class cf {
        constructor(t) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._onDestroyFns = []),
            (this.parentPlayer = null),
            (this.totalTime = 0),
            (this.players = t);
          let e = 0,
            n = 0,
            s = 0;
          const i = this.players.length;
          0 == i
            ? af(() => this._onFinish())
            : this.players.forEach((t) => {
                t.onDone(() => {
                  ++e == i && this._onFinish();
                }),
                  t.onDestroy(() => {
                    ++n == i && this._onDestroy();
                  }),
                  t.onStart(() => {
                    ++s == i && this._onStart();
                  });
              }),
            (this.totalTime = this.players.reduce(
              (t, e) => Math.max(t, e.totalTime),
              0
            ));
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((t) => t()),
            (this._onDoneFns = []));
        }
        init() {
          this.players.forEach((t) => t.init());
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        _onStart() {
          this.hasStarted() ||
            ((this._started = !0),
            this._onStartFns.forEach((t) => t()),
            (this._onStartFns = []));
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this.parentPlayer || this.init(),
            this._onStart(),
            this.players.forEach((t) => t.play());
        }
        pause() {
          this.players.forEach((t) => t.pause());
        }
        restart() {
          this.players.forEach((t) => t.restart());
        }
        finish() {
          this._onFinish(), this.players.forEach((t) => t.finish());
        }
        destroy() {
          this._onDestroy();
        }
        _onDestroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._onFinish(),
            this.players.forEach((t) => t.destroy()),
            this._onDestroyFns.forEach((t) => t()),
            (this._onDestroyFns = []));
        }
        reset() {
          this.players.forEach((t) => t.reset()),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        setPosition(t) {
          const e = t * this.totalTime;
          this.players.forEach((t) => {
            const n = t.totalTime ? Math.min(1, e / t.totalTime) : 1;
            t.setPosition(n);
          });
        }
        getPosition() {
          let t = 0;
          return (
            this.players.forEach((e) => {
              const n = e.getPosition();
              t = Math.min(n, t);
            }),
            t
          );
        }
        beforeDestroy() {
          this.players.forEach((t) => {
            t.beforeDestroy && t.beforeDestroy();
          });
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
      }
      function hf() {
        throw Error('Host already has a portal attached');
      }
      class uf {
        attach(t) {
          return (
            null == t &&
              (function () {
                throw Error(
                  'Attempting to attach a portal to a null PortalOutlet'
                );
              })(),
            t.hasAttached() && hf(),
            (this._attachedHost = t),
            t.attach(this)
          );
        }
        detach() {
          let t = this._attachedHost;
          null == t
            ? (function () {
                throw Error(
                  'Attempting to detach a portal that is not attached to a host'
                );
              })()
            : ((this._attachedHost = null), t.detach());
        }
        get isAttached() {
          return null != this._attachedHost;
        }
        setAttachedHost(t) {
          this._attachedHost = t;
        }
      }
      class df extends uf {
        constructor(t, e, n, s) {
          super(),
            (this.component = t),
            (this.viewContainerRef = e),
            (this.injector = n),
            (this.componentFactoryResolver = s);
        }
      }
      class pf extends uf {
        constructor(t, e, n) {
          super(),
            (this.templateRef = t),
            (this.viewContainerRef = e),
            (this.context = n);
        }
        get origin() {
          return this.templateRef.elementRef;
        }
        attach(t, e = this.context) {
          return (this.context = e), super.attach(t);
        }
        detach() {
          return (this.context = void 0), super.detach();
        }
      }
      class ff {
        constructor() {
          this._isDisposed = !1;
        }
        hasAttached() {
          return !!this._attachedPortal;
        }
        attach(t) {
          return (
            t ||
              (function () {
                throw Error('Must provide a portal to attach');
              })(),
            this.hasAttached() && hf(),
            this._isDisposed &&
              (function () {
                throw Error('This PortalOutlet has already been disposed');
              })(),
            t instanceof df
              ? ((this._attachedPortal = t), this.attachComponentPortal(t))
              : t instanceof pf
              ? ((this._attachedPortal = t), this.attachTemplatePortal(t))
              : void (function () {
                  throw Error(
                    'Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.'
                  );
                })()
          );
        }
        detach() {
          this._attachedPortal &&
            (this._attachedPortal.setAttachedHost(null),
            (this._attachedPortal = null)),
            this._invokeDisposeFn();
        }
        dispose() {
          this.hasAttached() && this.detach(),
            this._invokeDisposeFn(),
            (this._isDisposed = !0);
        }
        setDisposeFn(t) {
          this._disposeFn = t;
        }
        _invokeDisposeFn() {
          this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
        }
      }
      class mf extends ff {
        constructor(t, e, n, s) {
          super(),
            (this.outletElement = t),
            (this._componentFactoryResolver = e),
            (this._appRef = n),
            (this._defaultInjector = s);
        }
        attachComponentPortal(t) {
          const e = (
            t.componentFactoryResolver || this._componentFactoryResolver
          ).resolveComponentFactory(t.component);
          let n;
          return (
            t.viewContainerRef
              ? ((n = t.viewContainerRef.createComponent(
                  e,
                  t.viewContainerRef.length,
                  t.injector || t.viewContainerRef.injector
                )),
                this.setDisposeFn(() => n.destroy()))
              : ((n = e.create(t.injector || this._defaultInjector)),
                this._appRef.attachView(n.hostView),
                this.setDisposeFn(() => {
                  this._appRef.detachView(n.hostView), n.destroy();
                })),
            this.outletElement.appendChild(this._getComponentRootNode(n)),
            n
          );
        }
        attachTemplatePortal(t) {
          let e = t.viewContainerRef,
            n = e.createEmbeddedView(t.templateRef, t.context);
          return (
            n.detectChanges(),
            n.rootNodes.forEach((t) => this.outletElement.appendChild(t)),
            this.setDisposeFn(() => {
              let t = e.indexOf(n);
              -1 !== t && e.remove(t);
            }),
            n
          );
        }
        dispose() {
          super.dispose(),
            null != this.outletElement.parentNode &&
              this.outletElement.parentNode.removeChild(this.outletElement);
        }
        _getComponentRootNode(t) {
          return t.hostView.rootNodes[0];
        }
      }
      class gf extends ff {
        constructor(t, e) {
          super(),
            (this._componentFactoryResolver = t),
            (this._viewContainerRef = e),
            (this._isInitialized = !1),
            (this.attached = new fi());
        }
        get portal() {
          return this._attachedPortal;
        }
        set portal(t) {
          (!this.hasAttached() || t || this._isInitialized) &&
            (this.hasAttached() && super.detach(),
            t && super.attach(t),
            (this._attachedPortal = t));
        }
        get attachedRef() {
          return this._attachedRef;
        }
        ngOnInit() {
          this._isInitialized = !0;
        }
        ngOnDestroy() {
          super.dispose(),
            (this._attachedPortal = null),
            (this._attachedRef = null);
        }
        attachComponentPortal(t) {
          t.setAttachedHost(this);
          const e =
              null != t.viewContainerRef
                ? t.viewContainerRef
                : this._viewContainerRef,
            n = (
              t.componentFactoryResolver || this._componentFactoryResolver
            ).resolveComponentFactory(t.component),
            s = e.createComponent(n, e.length, t.injector || e.injector);
          return (
            super.setDisposeFn(() => s.destroy()),
            (this._attachedPortal = t),
            (this._attachedRef = s),
            this.attached.emit(s),
            s
          );
        }
        attachTemplatePortal(t) {
          t.setAttachedHost(this);
          const e = this._viewContainerRef.createEmbeddedView(
            t.templateRef,
            t.context
          );
          return (
            super.setDisposeFn(() => this._viewContainerRef.clear()),
            (this._attachedPortal = t),
            (this._attachedRef = e),
            this.attached.emit(e),
            e
          );
        }
      }
      class yf {}
      class _f {
        constructor(t, e) {
          (this._parentInjector = t), (this._customTokens = e);
        }
        get(t, e) {
          const n = this._customTokens.get(t);
          return void 0 !== n ? n : this._parentInjector.get(t, e);
        }
      }
      const vf = new wt('cdk-dir-doc', {
        providedIn: 'root',
        factory: function () {
          return Rt(tl);
        },
      });
      let bf = (() => {
        class t {
          constructor(t) {
            if (((this.value = 'ltr'), (this.change = new fi()), t)) {
              const e = t.documentElement ? t.documentElement.dir : null,
                n = (t.body ? t.body.dir : null) || e;
              this.value = 'ltr' === n || 'rtl' === n ? n : 'ltr';
            }
          }
          ngOnDestroy() {
            this.change.complete();
          }
        }
        return (
          (t.ngInjectableDef = lt({
            factory: function () {
              return new t(Dt(vf, 8));
            },
            token: t,
            providedIn: 'root',
          })),
          t
        );
      })();
      class wf {}
      function Sf(t) {
        return Array.isArray(t) ? t : [t];
      }
      function Ef(t) {
        return null == t ? '' : 'string' == typeof t ? t : t + 'px';
      }
      function Cf(t, e, n, i) {
        return (
          s(n) && ((i = n), (n = void 0)),
          i
            ? Cf(t, e, n).pipe(D((t) => (l(t) ? i(...t) : i(t))))
            : new b((s) => {
                !(function t(e, n, s, i, r) {
                  let o;
                  if (
                    (function (t) {
                      return (
                        t &&
                        'function' == typeof t.addEventListener &&
                        'function' == typeof t.removeEventListener
                      );
                    })(e)
                  ) {
                    const t = e;
                    e.addEventListener(n, s, r),
                      (o = () => t.removeEventListener(n, s, r));
                  } else if (
                    (function (t) {
                      return (
                        t &&
                        'function' == typeof t.on &&
                        'function' == typeof t.off
                      );
                    })(e)
                  ) {
                    const t = e;
                    e.on(n, s), (o = () => t.off(n, s));
                  } else if (
                    (function (t) {
                      return (
                        t &&
                        'function' == typeof t.addListener &&
                        'function' == typeof t.removeListener
                      );
                    })(e)
                  ) {
                    const t = e;
                    e.addListener(n, s), (o = () => t.removeListener(n, s));
                  } else {
                    if (!e || !e.length)
                      throw new TypeError('Invalid event target');
                    for (let o = 0, a = e.length; o < a; o++)
                      t(e[o], n, s, i, r);
                  }
                  i.add(o);
                })(
                  t,
                  e,
                  function (t) {
                    s.next(
                      arguments.length > 1
                        ? Array.prototype.slice.call(arguments)
                        : t
                    );
                  },
                  s,
                  n
                );
              })
        );
      }
      class xf extends u {
        constructor(t, e) {
          super();
        }
        schedule(t, e = 0) {
          return this;
        }
      }
      class Tf extends xf {
        constructor(t, e) {
          super(t, e),
            (this.scheduler = t),
            (this.work = e),
            (this.pending = !1);
        }
        schedule(t, e = 0) {
          if (this.closed) return this;
          this.state = t;
          const n = this.id,
            s = this.scheduler;
          return (
            null != n && (this.id = this.recycleAsyncId(s, n, e)),
            (this.pending = !0),
            (this.delay = e),
            (this.id = this.id || this.requestAsyncId(s, this.id, e)),
            this
          );
        }
        requestAsyncId(t, e, n = 0) {
          return setInterval(t.flush.bind(t, this), n);
        }
        recycleAsyncId(t, e, n = 0) {
          if (null !== n && this.delay === n && !1 === this.pending) return e;
          clearInterval(e);
        }
        execute(t, e) {
          if (this.closed) return new Error('executing a cancelled action');
          this.pending = !1;
          const n = this._execute(t, e);
          if (n) return n;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(t, e) {
          let n = !1,
            s = void 0;
          try {
            this.work(t);
          } catch (i) {
            (n = !0), (s = (!!i && i) || new Error(i));
          }
          if (n) return this.unsubscribe(), s;
        }
        _unsubscribe() {
          const t = this.id,
            e = this.scheduler,
            n = e.actions,
            s = n.indexOf(this);
          (this.work = null),
            (this.state = null),
            (this.pending = !1),
            (this.scheduler = null),
            -1 !== s && n.splice(s, 1),
            null != t && (this.id = this.recycleAsyncId(e, t, null)),
            (this.delay = null);
        }
      }
      let kf = (() => {
        class t {
          constructor(e, n = t.now) {
            (this.SchedulerAction = e), (this.now = n);
          }
          schedule(t, e = 0, n) {
            return new this.SchedulerAction(this, t).schedule(n, e);
          }
        }
        return (t.now = () => Date.now()), t;
      })();
      class Df extends kf {
        constructor(t, e = kf.now) {
          super(t, () =>
            Df.delegate && Df.delegate !== this ? Df.delegate.now() : e()
          ),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(t, e = 0, n) {
          return Df.delegate && Df.delegate !== this
            ? Df.delegate.schedule(t, e, n)
            : super.schedule(t, e, n);
        }
        flush(t) {
          const { actions: e } = this;
          if (this.active) return void e.push(t);
          let n;
          this.active = !0;
          do {
            if ((n = t.execute(t.state, t.delay))) break;
          } while ((t = e.shift()));
          if (((this.active = !1), n)) {
            for (; (t = e.shift()); ) t.unsubscribe();
            throw n;
          }
        }
      }
      const Rf = new Df(Tf);
      class Af {
        constructor(t) {
          this.durationSelector = t;
        }
        call(t, e) {
          return e.subscribe(new If(t, this.durationSelector));
        }
      }
      class If extends H {
        constructor(t, e) {
          super(t), (this.durationSelector = e), (this.hasValue = !1);
        }
        _next(t) {
          if (((this.value = t), (this.hasValue = !0), !this.throttled)) {
            let n;
            try {
              const { durationSelector: e } = this;
              n = e(t);
            } catch (e) {
              return this.destination.error(e);
            }
            const s = B(n, new V(this));
            !s || s.closed
              ? this.clearThrottle()
              : this.add((this.throttled = s));
          }
        }
        clearThrottle() {
          const { value: t, hasValue: e, throttled: n } = this;
          n && (this.remove(n), (this.throttled = void 0), n.unsubscribe()),
            e &&
              ((this.value = void 0),
              (this.hasValue = !1),
              this.destination.next(t));
        }
        notifyNext() {
          this.clearThrottle();
        }
        notifyComplete() {
          this.clearThrottle();
        }
      }
      function Of(t) {
        return !l(t) && t - parseFloat(t) + 1 >= 0;
      }
      function Pf(t) {
        const { index: e, period: n, subscriber: s } = t;
        if ((s.next(e), !s.closed)) {
          if (-1 === n) return s.complete();
          (t.index = e + 1), this.schedule(t, n);
        }
      }
      function Nf(t, e = Rf) {
        return (
          (n = () =>
            (function (t = 0, e, n) {
              let s = -1;
              return (
                Of(e) ? (s = Number(e) < 1 ? 1 : Number(e)) : k(e) && (n = e),
                k(n) || (n = Rf),
                new b((e) => {
                  const i = Of(t) ? t : +t - n.now();
                  return n.schedule(Pf, i, {
                    index: 0,
                    period: s,
                    subscriber: e,
                  });
                })
              );
            })(t, e)),
          function (t) {
            return t.lift(new Af(n));
          }
        );
        var n;
      }
      function Mf(t) {
        return (e) => e.lift(new Ff(t));
      }
      class Ff {
        constructor(t) {
          this.notifier = t;
        }
        call(t, e) {
          const n = new Lf(t),
            s = B(this.notifier, new V(n));
          return s && !n.seenValue ? (n.add(s), e.subscribe(n)) : n;
        }
      }
      class Lf extends H {
        constructor(t) {
          super(t), (this.seenValue = !1);
        }
        notifyNext() {
          (this.seenValue = !0), this.complete();
        }
        notifyComplete() {}
      }
      let jf;
      try {
        jf = 'undefined' != typeof Intl && Intl.v8BreakIterator;
      } catch (Bw) {
        jf = !1;
      }
      let Vf = (() => {
        class t {
          constructor(t) {
            (this._platformId = t),
              (this.isBrowser = this._platformId
                ? 'browser' === this._platformId
                : 'object' == typeof document && !!document),
              (this.EDGE =
                this.isBrowser && /(edge)/i.test(navigator.userAgent)),
              (this.TRIDENT =
                this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
              (this.BLINK =
                this.isBrowser &&
                !(!window.chrome && !jf) &&
                'undefined' != typeof CSS &&
                !this.EDGE &&
                !this.TRIDENT),
              (this.WEBKIT =
                this.isBrowser &&
                /AppleWebKit/i.test(navigator.userAgent) &&
                !this.BLINK &&
                !this.EDGE &&
                !this.TRIDENT),
              (this.IOS =
                this.isBrowser &&
                /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                !('MSStream' in window)),
              (this.FIREFOX =
                this.isBrowser &&
                /(firefox|minefield)/i.test(navigator.userAgent)),
              (this.ANDROID =
                this.isBrowser &&
                /android/i.test(navigator.userAgent) &&
                !this.TRIDENT),
              (this.SAFARI =
                this.isBrowser &&
                /safari/i.test(navigator.userAgent) &&
                this.WEBKIT);
          }
        }
        return (
          (t.ngInjectableDef = lt({
            factory: function () {
              return new t(Dt(Ei, 8));
            },
            token: t,
            providedIn: 'root',
          })),
          t
        );
      })();
      class Hf {}
      let Bf = (() => {
        class t {
          constructor(t, e) {
            (this._ngZone = t),
              (this._platform = e),
              (this._scrolled = new x()),
              (this._globalSubscription = null),
              (this._scrolledCount = 0),
              (this.scrollContainers = new Map());
          }
          register(t) {
            this.scrollContainers.has(t) ||
              this.scrollContainers.set(
                t,
                t.elementScrolled().subscribe(() => this._scrolled.next(t))
              );
          }
          deregister(t) {
            const e = this.scrollContainers.get(t);
            e && (e.unsubscribe(), this.scrollContainers.delete(t));
          }
          scrolled(t = 20) {
            return this._platform.isBrowser
              ? new b((e) => {
                  this._globalSubscription || this._addGlobalListener();
                  const n =
                    t > 0
                      ? this._scrolled.pipe(Nf(t)).subscribe(e)
                      : this._scrolled.subscribe(e);
                  return (
                    this._scrolledCount++,
                    () => {
                      n.unsubscribe(),
                        this._scrolledCount--,
                        this._scrolledCount || this._removeGlobalListener();
                    }
                  );
                })
              : ta();
          }
          ngOnDestroy() {
            this._removeGlobalListener(),
              this.scrollContainers.forEach((t, e) => this.deregister(e)),
              this._scrolled.complete();
          }
          ancestorScrolled(t, e) {
            const n = this.getAncestorScrollContainers(t);
            return this.scrolled(e).pipe(na((t) => !t || n.indexOf(t) > -1));
          }
          getAncestorScrollContainers(t) {
            const e = [];
            return (
              this.scrollContainers.forEach((n, s) => {
                this._scrollableContainsElement(s, t) && e.push(s);
              }),
              e
            );
          }
          _scrollableContainsElement(t, e) {
            let n = e.nativeElement,
              s = t.getElementRef().nativeElement;
            do {
              if (n == s) return !0;
            } while ((n = n.parentElement));
            return !1;
          }
          _addGlobalListener() {
            this._globalSubscription = this._ngZone.runOutsideAngular(() =>
              Cf(window.document, 'scroll').subscribe(() =>
                this._scrolled.next()
              )
            );
          }
          _removeGlobalListener() {
            this._globalSubscription &&
              (this._globalSubscription.unsubscribe(),
              (this._globalSubscription = null));
          }
        }
        return (
          (t.ngInjectableDef = lt({
            factory: function () {
              return new t(Dt($i), Dt(Vf));
            },
            token: t,
            providedIn: 'root',
          })),
          t
        );
      })();
      class Uf {}
      let $f = (() => {
        class t {
          constructor(t, e) {
            (this._platform = t),
              e.runOutsideAngular(() => {
                (this._change = t.isBrowser
                  ? K(Cf(window, 'resize'), Cf(window, 'orientationchange'))
                  : ta()),
                  (this._invalidateCache = this.change().subscribe(() =>
                    this._updateViewportSize()
                  ));
              });
          }
          ngOnDestroy() {
            this._invalidateCache.unsubscribe();
          }
          getViewportSize() {
            this._viewportSize || this._updateViewportSize();
            const t = {
              width: this._viewportSize.width,
              height: this._viewportSize.height,
            };
            return this._platform.isBrowser || (this._viewportSize = null), t;
          }
          getViewportRect() {
            const t = this.getViewportScrollPosition(),
              { width: e, height: n } = this.getViewportSize();
            return {
              top: t.top,
              left: t.left,
              bottom: t.top + n,
              right: t.left + e,
              height: n,
              width: e,
            };
          }
          getViewportScrollPosition() {
            if (!this._platform.isBrowser) return { top: 0, left: 0 };
            const t = document.documentElement,
              e = t.getBoundingClientRect();
            return {
              top:
                -e.top ||
                document.body.scrollTop ||
                window.scrollY ||
                t.scrollTop ||
                0,
              left:
                -e.left ||
                document.body.scrollLeft ||
                window.scrollX ||
                t.scrollLeft ||
                0,
            };
          }
          change(t = 20) {
            return t > 0 ? this._change.pipe(Nf(t)) : this._change;
          }
          _updateViewportSize() {
            this._viewportSize = this._platform.isBrowser
              ? { width: window.innerWidth, height: window.innerHeight }
              : { width: 0, height: 0 };
          }
        }
        return (
          (t.ngInjectableDef = lt({
            factory: function () {
              return new t(Dt(Vf), Dt($i));
            },
            token: t,
            providedIn: 'root',
          })),
          t
        );
      })();
      class zf {
        constructor(t, e) {
          (this._viewportRuler = t),
            (this._previousHTMLStyles = { top: '', left: '' }),
            (this._isEnabled = !1),
            (this._document = e);
        }
        attach() {}
        enable() {
          if (this._canBeEnabled()) {
            const t = this._document.documentElement;
            (this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition()),
              (this._previousHTMLStyles.left = t.style.left || ''),
              (this._previousHTMLStyles.top = t.style.top || ''),
              (t.style.left = Ef(-this._previousScrollPosition.left)),
              (t.style.top = Ef(-this._previousScrollPosition.top)),
              t.classList.add('cdk-global-scrollblock'),
              (this._isEnabled = !0);
          }
        }
        disable() {
          if (this._isEnabled) {
            const t = this._document.documentElement,
              e = t.style,
              n = this._document.body.style,
              s = e.scrollBehavior || '',
              i = n.scrollBehavior || '';
            (this._isEnabled = !1),
              (e.left = this._previousHTMLStyles.left),
              (e.top = this._previousHTMLStyles.top),
              t.classList.remove('cdk-global-scrollblock'),
              (e.scrollBehavior = n.scrollBehavior = 'auto'),
              window.scroll(
                this._previousScrollPosition.left,
                this._previousScrollPosition.top
              ),
              (e.scrollBehavior = s),
              (n.scrollBehavior = i);
          }
        }
        _canBeEnabled() {
          if (
            this._document.documentElement.classList.contains(
              'cdk-global-scrollblock'
            ) ||
            this._isEnabled
          )
            return !1;
          const t = this._document.body,
            e = this._viewportRuler.getViewportSize();
          return t.scrollHeight > e.height || t.scrollWidth > e.width;
        }
      }
      function Wf() {
        return Error('Scroll strategy has already been attached.');
      }
      class qf {
        constructor(t, e, n, s) {
          (this._scrollDispatcher = t),
            (this._ngZone = e),
            (this._viewportRuler = n),
            (this._config = s),
            (this._scrollSubscription = null),
            (this._detach = () => {
              this.disable(),
                this._overlayRef.hasAttached() &&
                  this._ngZone.run(() => this._overlayRef.detach());
            });
        }
        attach(t) {
          if (this._overlayRef) throw Wf();
          this._overlayRef = t;
        }
        enable() {
          if (this._scrollSubscription) return;
          const t = this._scrollDispatcher.scrolled(0);
          this._config && this._config.threshold && this._config.threshold > 1
            ? ((this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top),
              (this._scrollSubscription = t.subscribe(() => {
                const t = this._viewportRuler.getViewportScrollPosition().top;
                Math.abs(t - this._initialScrollPosition) >
                this._config.threshold
                  ? this._detach()
                  : this._overlayRef.updatePosition();
              })))
            : (this._scrollSubscription = t.subscribe(this._detach));
        }
        disable() {
          this._scrollSubscription &&
            (this._scrollSubscription.unsubscribe(),
            (this._scrollSubscription = null));
        }
        detach() {
          this.disable(), (this._overlayRef = null);
        }
      }
      class Kf {
        enable() {}
        disable() {}
        attach() {}
      }
      function Zf(t, e) {
        return e.some(
          (e) =>
            t.bottom < e.top ||
            t.top > e.bottom ||
            t.right < e.left ||
            t.left > e.right
        );
      }
      function Gf(t, e) {
        return e.some(
          (e) =>
            t.top < e.top ||
            t.bottom > e.bottom ||
            t.left < e.left ||
            t.right > e.right
        );
      }
      class Qf {
        constructor(t, e, n, s) {
          (this._scrollDispatcher = t),
            (this._viewportRuler = e),
            (this._ngZone = n),
            (this._config = s),
            (this._scrollSubscription = null);
        }
        attach(t) {
          if (this._overlayRef) throw Wf();
          this._overlayRef = t;
        }
        enable() {
          this._scrollSubscription ||
            (this._scrollSubscription = this._scrollDispatcher
              .scrolled(this._config ? this._config.scrollThrottle : 0)
              .subscribe(() => {
                if (
                  (this._overlayRef.updatePosition(),
                  this._config && this._config.autoClose)
                ) {
                  const t = this._overlayRef.overlayElement.getBoundingClientRect(),
                    {
                      width: e,
                      height: n,
                    } = this._viewportRuler.getViewportSize();
                  Zf(t, [
                    {
                      width: e,
                      height: n,
                      bottom: n,
                      right: e,
                      top: 0,
                      left: 0,
                    },
                  ]) &&
                    (this.disable(),
                    this._ngZone.run(() => this._overlayRef.detach()));
                }
              }));
        }
        disable() {
          this._scrollSubscription &&
            (this._scrollSubscription.unsubscribe(),
            (this._scrollSubscription = null));
        }
        detach() {
          this.disable(), (this._overlayRef = null);
        }
      }
      let Yf = (() => {
        class t {
          constructor(t, e, n, s) {
            (this._scrollDispatcher = t),
              (this._viewportRuler = e),
              (this._ngZone = n),
              (this.noop = () => new Kf()),
              (this.close = (t) =>
                new qf(
                  this._scrollDispatcher,
                  this._ngZone,
                  this._viewportRuler,
                  t
                )),
              (this.block = () => new zf(this._viewportRuler, this._document)),
              (this.reposition = (t) =>
                new Qf(
                  this._scrollDispatcher,
                  this._viewportRuler,
                  this._ngZone,
                  t
                )),
              (this._document = s);
          }
        }
        return (
          (t.ngInjectableDef = lt({
            factory: function () {
              return new t(Dt(Bf), Dt($f), Dt($i), Dt(tl));
            },
            token: t,
            providedIn: 'root',
          })),
          t
        );
      })();
      class Xf {
        constructor(t) {
          if (
            ((this.scrollStrategy = new Kf()),
            (this.panelClass = ''),
            (this.hasBackdrop = !1),
            (this.backdropClass = 'cdk-overlay-dark-backdrop'),
            (this.disposeOnNavigation = !1),
            t)
          ) {
            const e = Object.keys(t);
            for (const n of e) void 0 !== t[n] && (this[n] = t[n]);
          }
        }
      }
      class Jf {
        constructor(t, e, n, s, i) {
          (this.offsetX = n),
            (this.offsetY = s),
            (this.panelClass = i),
            (this.originX = t.originX),
            (this.originY = t.originY),
            (this.overlayX = e.overlayX),
            (this.overlayY = e.overlayY);
        }
      }
      class tm {
        constructor(t, e) {
          (this.connectionPair = t), (this.scrollableViewProperties = e);
        }
      }
      function em(t, e) {
        if ('top' !== e && 'bottom' !== e && 'center' !== e)
          throw Error(
            `ConnectedPosition: Invalid ${t} "${e}". Expected "top", "bottom" or "center".`
          );
      }
      function nm(t, e) {
        if ('start' !== e && 'end' !== e && 'center' !== e)
          throw Error(
            `ConnectedPosition: Invalid ${t} "${e}". Expected "start", "end" or "center".`
          );
      }
      let sm = (() => {
          class t {
            constructor(t) {
              (this._attachedOverlays = []),
                (this._keydownListener = (t) => {
                  const e = this._attachedOverlays;
                  for (let n = e.length - 1; n > -1; n--)
                    if (e[n]._keydownEventSubscriptions > 0) {
                      e[n]._keydownEvents.next(t);
                      break;
                    }
                }),
                (this._document = t);
            }
            ngOnDestroy() {
              this._detach();
            }
            add(t) {
              this.remove(t),
                this._isAttached ||
                  (this._document.body.addEventListener(
                    'keydown',
                    this._keydownListener
                  ),
                  (this._isAttached = !0)),
                this._attachedOverlays.push(t);
            }
            remove(t) {
              const e = this._attachedOverlays.indexOf(t);
              e > -1 && this._attachedOverlays.splice(e, 1),
                0 === this._attachedOverlays.length && this._detach();
            }
            _detach() {
              this._isAttached &&
                (this._document.body.removeEventListener(
                  'keydown',
                  this._keydownListener
                ),
                (this._isAttached = !1));
            }
          }
          return (
            (t.ngInjectableDef = lt({
              factory: function () {
                return new t(Dt(tl));
              },
              token: t,
              providedIn: 'root',
            })),
            t
          );
        })(),
        im = (() => {
          class t {
            constructor(t) {
              this._document = t;
            }
            ngOnDestroy() {
              this._containerElement &&
                this._containerElement.parentNode &&
                this._containerElement.parentNode.removeChild(
                  this._containerElement
                );
            }
            getContainerElement() {
              return (
                this._containerElement || this._createContainer(),
                this._containerElement
              );
            }
            _createContainer() {
              const t = this._document.getElementsByClassName(
                'cdk-overlay-container'
              );
              for (let n = 0; n < t.length; n++)
                t[n].parentNode.removeChild(t[n]);
              const e = this._document.createElement('div');
              e.classList.add('cdk-overlay-container'),
                this._document.body.appendChild(e),
                (this._containerElement = e);
            }
          }
          return (
            (t.ngInjectableDef = lt({
              factory: function () {
                return new t(Dt(tl));
              },
              token: t,
              providedIn: 'root',
            })),
            t
          );
        })();
      class rm {
        constructor(t, e, n, s, i, r, o, a) {
          (this._portalOutlet = t),
            (this._host = e),
            (this._pane = n),
            (this._config = s),
            (this._ngZone = i),
            (this._keyboardDispatcher = r),
            (this._document = o),
            (this._location = a),
            (this._backdropElement = null),
            (this._backdropClick = new x()),
            (this._attachments = new x()),
            (this._detachments = new x()),
            (this._locationChanges = u.EMPTY),
            (this._backdropClickHandler = (t) => this._backdropClick.next(t)),
            (this._keydownEventsObservable = new b((t) => {
              const e = this._keydownEvents.subscribe(t);
              return (
                this._keydownEventSubscriptions++,
                () => {
                  e.unsubscribe(), this._keydownEventSubscriptions--;
                }
              );
            })),
            (this._keydownEvents = new x()),
            (this._keydownEventSubscriptions = 0),
            s.scrollStrategy &&
              ((this._scrollStrategy = s.scrollStrategy),
              this._scrollStrategy.attach(this)),
            (this._positionStrategy = s.positionStrategy);
        }
        get overlayElement() {
          return this._pane;
        }
        get backdropElement() {
          return this._backdropElement;
        }
        get hostElement() {
          return this._host;
        }
        attach(t) {
          let e = this._portalOutlet.attach(t);
          return (
            this._positionStrategy && this._positionStrategy.attach(this),
            !this._host.parentElement &&
              this._previousHostParent &&
              this._previousHostParent.appendChild(this._host),
            this._updateStackingOrder(),
            this._updateElementSize(),
            this._updateElementDirection(),
            this._scrollStrategy && this._scrollStrategy.enable(),
            this._ngZone.onStable
              .asObservable()
              .pipe(mc(1))
              .subscribe(() => {
                this.hasAttached() && this.updatePosition();
              }),
            this._togglePointerEvents(!0),
            this._config.hasBackdrop && this._attachBackdrop(),
            this._config.panelClass &&
              this._toggleClasses(this._pane, this._config.panelClass, !0),
            this._attachments.next(),
            this._keyboardDispatcher.add(this),
            this._config.disposeOnNavigation &&
              this._location &&
              (this._locationChanges = this._location.subscribe(() =>
                this.dispose()
              )),
            e
          );
        }
        detach() {
          if (!this.hasAttached()) return;
          this.detachBackdrop(),
            this._togglePointerEvents(!1),
            this._positionStrategy &&
              this._positionStrategy.detach &&
              this._positionStrategy.detach(),
            this._scrollStrategy && this._scrollStrategy.disable();
          const t = this._portalOutlet.detach();
          return (
            this._detachments.next(),
            this._keyboardDispatcher.remove(this),
            this._detachContentWhenStable(),
            this._locationChanges.unsubscribe(),
            t
          );
        }
        dispose() {
          const t = this.hasAttached();
          this._positionStrategy && this._positionStrategy.dispose(),
            this._disposeScrollStrategy(),
            this.detachBackdrop(),
            this._locationChanges.unsubscribe(),
            this._keyboardDispatcher.remove(this),
            this._portalOutlet.dispose(),
            this._attachments.complete(),
            this._backdropClick.complete(),
            this._keydownEvents.complete(),
            this._host &&
              this._host.parentNode &&
              (this._host.parentNode.removeChild(this._host),
              (this._host = null)),
            (this._previousHostParent = this._pane = null),
            t && this._detachments.next(),
            this._detachments.complete();
        }
        hasAttached() {
          return this._portalOutlet.hasAttached();
        }
        backdropClick() {
          return this._backdropClick.asObservable();
        }
        attachments() {
          return this._attachments.asObservable();
        }
        detachments() {
          return this._detachments.asObservable();
        }
        keydownEvents() {
          return this._keydownEventsObservable;
        }
        getConfig() {
          return this._config;
        }
        updatePosition() {
          this._positionStrategy && this._positionStrategy.apply();
        }
        updatePositionStrategy(t) {
          t !== this._positionStrategy &&
            (this._positionStrategy && this._positionStrategy.dispose(),
            (this._positionStrategy = t),
            this.hasAttached() && (t.attach(this), this.updatePosition()));
        }
        updateSize(t) {
          (this._config = Object.assign({}, this._config, t)),
            this._updateElementSize();
        }
        setDirection(t) {
          (this._config = Object.assign({}, this._config, { direction: t })),
            this._updateElementDirection();
        }
        addPanelClass(t) {
          this._pane && this._toggleClasses(this._pane, t, !0);
        }
        removePanelClass(t) {
          this._pane && this._toggleClasses(this._pane, t, !1);
        }
        getDirection() {
          const t = this._config.direction;
          return t ? ('string' == typeof t ? t : t.value) : 'ltr';
        }
        updateScrollStrategy(t) {
          t !== this._scrollStrategy &&
            (this._disposeScrollStrategy(),
            (this._scrollStrategy = t),
            this.hasAttached() && (t.attach(this), t.enable()));
        }
        _updateElementDirection() {
          this._host.setAttribute('dir', this.getDirection());
        }
        _updateElementSize() {
          if (!this._pane) return;
          const t = this._pane.style;
          (t.width = Ef(this._config.width)),
            (t.height = Ef(this._config.height)),
            (t.minWidth = Ef(this._config.minWidth)),
            (t.minHeight = Ef(this._config.minHeight)),
            (t.maxWidth = Ef(this._config.maxWidth)),
            (t.maxHeight = Ef(this._config.maxHeight));
        }
        _togglePointerEvents(t) {
          this._pane.style.pointerEvents = t ? 'auto' : 'none';
        }
        _attachBackdrop() {
          (this._backdropElement = this._document.createElement('div')),
            this._backdropElement.classList.add('cdk-overlay-backdrop'),
            this._config.backdropClass &&
              this._toggleClasses(
                this._backdropElement,
                this._config.backdropClass,
                !0
              ),
            this._host.parentElement.insertBefore(
              this._backdropElement,
              this._host
            ),
            this._backdropElement.addEventListener(
              'click',
              this._backdropClickHandler
            ),
            'undefined' != typeof requestAnimationFrame
              ? this._ngZone.runOutsideAngular(() => {
                  requestAnimationFrame(() => {
                    this._backdropElement &&
                      this._backdropElement.classList.add(
                        'cdk-overlay-backdrop-showing'
                      );
                  });
                })
              : this._backdropElement.classList.add(
                  'cdk-overlay-backdrop-showing'
                );
        }
        _updateStackingOrder() {
          this._host.nextSibling &&
            this._host.parentNode.appendChild(this._host);
        }
        detachBackdrop() {
          let t,
            e = this._backdropElement;
          if (!e) return;
          let n = () => {
            e &&
              (e.removeEventListener('click', this._backdropClickHandler),
              e.removeEventListener('transitionend', n),
              e.parentNode && e.parentNode.removeChild(e)),
              this._backdropElement == e && (this._backdropElement = null),
              this._config.backdropClass &&
                this._toggleClasses(e, this._config.backdropClass, !1),
              clearTimeout(t);
          };
          e.classList.remove('cdk-overlay-backdrop-showing'),
            this._ngZone.runOutsideAngular(() => {
              e.addEventListener('transitionend', n);
            }),
            (e.style.pointerEvents = 'none'),
            (t = this._ngZone.runOutsideAngular(() => setTimeout(n, 500)));
        }
        _toggleClasses(t, e, n) {
          const s = t.classList;
          Sf(e).forEach((t) => {
            t && (n ? s.add(t) : s.remove(t));
          });
        }
        _detachContentWhenStable() {
          this._ngZone.runOutsideAngular(() => {
            const t = this._ngZone.onStable
              .asObservable()
              .pipe(Mf(K(this._attachments, this._detachments)))
              .subscribe(() => {
                (this._pane &&
                  this._host &&
                  0 !== this._pane.children.length) ||
                  (this._pane &&
                    this._config.panelClass &&
                    this._toggleClasses(
                      this._pane,
                      this._config.panelClass,
                      !1
                    ),
                  this._host &&
                    this._host.parentElement &&
                    ((this._previousHostParent = this._host.parentElement),
                    this._previousHostParent.removeChild(this._host)),
                  t.unsubscribe());
              });
          });
        }
        _disposeScrollStrategy() {
          const t = this._scrollStrategy;
          t && (t.disable(), t.detach && t.detach());
        }
      }
      class om {
        constructor(t, e, n, s, i) {
          (this._viewportRuler = e),
            (this._document = n),
            (this._platform = s),
            (this._overlayContainer = i),
            (this._lastBoundingBoxSize = { width: 0, height: 0 }),
            (this._isPushed = !1),
            (this._canPush = !0),
            (this._growAfterOpen = !1),
            (this._hasFlexibleDimensions = !0),
            (this._positionLocked = !1),
            (this._viewportMargin = 0),
            (this._scrollables = []),
            (this._preferredPositions = []),
            (this._positionChanges = new x()),
            (this._resizeSubscription = u.EMPTY),
            (this._offsetX = 0),
            (this._offsetY = 0),
            (this._appliedPanelClasses = []),
            (this.positionChanges = this._positionChanges.asObservable()),
            this.setOrigin(t);
        }
        get positions() {
          return this._preferredPositions;
        }
        attach(t) {
          if (this._overlayRef && t !== this._overlayRef)
            throw Error(
              'This position strategy is already attached to an overlay'
            );
          this._validatePositions(),
            t.hostElement.classList.add(
              'cdk-overlay-connected-position-bounding-box'
            ),
            (this._overlayRef = t),
            (this._boundingBox = t.hostElement),
            (this._pane = t.overlayElement),
            (this._isDisposed = !1),
            (this._isInitialRender = !0),
            (this._lastPosition = null),
            this._resizeSubscription.unsubscribe(),
            (this._resizeSubscription = this._viewportRuler
              .change()
              .subscribe(() => {
                (this._isInitialRender = !0), this.apply();
              }));
        }
        apply() {
          if (this._isDisposed || !this._platform.isBrowser) return;
          if (
            !this._isInitialRender &&
            this._positionLocked &&
            this._lastPosition
          )
            return void this.reapplyLastPosition();
          this._clearPanelClasses(),
            this._resetOverlayElementStyles(),
            this._resetBoundingBoxStyles(),
            (this._viewportRect = this._getNarrowedViewportRect()),
            (this._originRect = this._getOriginRect()),
            (this._overlayRect = this._pane.getBoundingClientRect());
          const t = this._originRect,
            e = this._overlayRect,
            n = this._viewportRect,
            s = [];
          let i;
          for (let r of this._preferredPositions) {
            let o = this._getOriginPoint(t, r),
              a = this._getOverlayPoint(o, e, r),
              l = this._getOverlayFit(a, e, n, r);
            if (l.isCompletelyWithinViewport)
              return (this._isPushed = !1), void this._applyPosition(r, o);
            this._canFitWithFlexibleDimensions(l, a, n)
              ? s.push({
                  position: r,
                  origin: o,
                  overlayRect: e,
                  boundingBoxRect: this._calculateBoundingBoxRect(o, r),
                })
              : (!i || i.overlayFit.visibleArea < l.visibleArea) &&
                (i = {
                  overlayFit: l,
                  overlayPoint: a,
                  originPoint: o,
                  position: r,
                  overlayRect: e,
                });
          }
          if (s.length) {
            let t = null,
              e = -1;
            for (const n of s) {
              const s =
                n.boundingBoxRect.width *
                n.boundingBoxRect.height *
                (n.position.weight || 1);
              s > e && ((e = s), (t = n));
            }
            return (
              (this._isPushed = !1),
              void this._applyPosition(t.position, t.origin)
            );
          }
          if (this._canPush)
            return (
              (this._isPushed = !0),
              void this._applyPosition(i.position, i.originPoint)
            );
          this._applyPosition(i.position, i.originPoint);
        }
        detach() {
          this._clearPanelClasses(),
            (this._lastPosition = null),
            (this._previousPushAmount = null),
            this._resizeSubscription.unsubscribe();
        }
        dispose() {
          this._isDisposed ||
            (this._boundingBox &&
              am(this._boundingBox.style, {
                top: '',
                left: '',
                right: '',
                bottom: '',
                height: '',
                width: '',
                alignItems: '',
                justifyContent: '',
              }),
            this._pane && this._resetOverlayElementStyles(),
            this._overlayRef &&
              this._overlayRef.hostElement.classList.remove(
                'cdk-overlay-connected-position-bounding-box'
              ),
            this.detach(),
            this._positionChanges.complete(),
            (this._overlayRef = this._boundingBox = null),
            (this._isDisposed = !0));
        }
        reapplyLastPosition() {
          if (
            !this._isDisposed &&
            (!this._platform || this._platform.isBrowser)
          ) {
            (this._originRect = this._getOriginRect()),
              (this._overlayRect = this._pane.getBoundingClientRect()),
              (this._viewportRect = this._getNarrowedViewportRect());
            const t = this._lastPosition || this._preferredPositions[0],
              e = this._getOriginPoint(this._originRect, t);
            this._applyPosition(t, e);
          }
        }
        withScrollableContainers(t) {
          return (this._scrollables = t), this;
        }
        withPositions(t) {
          return (
            (this._preferredPositions = t),
            -1 === t.indexOf(this._lastPosition) && (this._lastPosition = null),
            this._validatePositions(),
            this
          );
        }
        withViewportMargin(t) {
          return (this._viewportMargin = t), this;
        }
        withFlexibleDimensions(t = !0) {
          return (this._hasFlexibleDimensions = t), this;
        }
        withGrowAfterOpen(t = !0) {
          return (this._growAfterOpen = t), this;
        }
        withPush(t = !0) {
          return (this._canPush = t), this;
        }
        withLockedPosition(t = !0) {
          return (this._positionLocked = t), this;
        }
        setOrigin(t) {
          return (this._origin = t), this;
        }
        withDefaultOffsetX(t) {
          return (this._offsetX = t), this;
        }
        withDefaultOffsetY(t) {
          return (this._offsetY = t), this;
        }
        withTransformOriginOn(t) {
          return (this._transformOriginSelector = t), this;
        }
        _getOriginPoint(t, e) {
          let n, s;
          if ('center' == e.originX) n = t.left + t.width / 2;
          else {
            const s = this._isRtl() ? t.right : t.left,
              i = this._isRtl() ? t.left : t.right;
            n = 'start' == e.originX ? s : i;
          }
          return (
            (s =
              'center' == e.originY
                ? t.top + t.height / 2
                : 'top' == e.originY
                ? t.top
                : t.bottom),
            { x: n, y: s }
          );
        }
        _getOverlayPoint(t, e, n) {
          let s, i;
          return (
            (s =
              'center' == n.overlayX
                ? -e.width / 2
                : 'start' === n.overlayX
                ? this._isRtl()
                  ? -e.width
                  : 0
                : this._isRtl()
                ? 0
                : -e.width),
            (i =
              'center' == n.overlayY
                ? -e.height / 2
                : 'top' == n.overlayY
                ? 0
                : -e.height),
            { x: t.x + s, y: t.y + i }
          );
        }
        _getOverlayFit(t, e, n, s) {
          let { x: i, y: r } = t,
            o = this._getOffset(s, 'x'),
            a = this._getOffset(s, 'y');
          o && (i += o), a && (r += a);
          let l = 0 - r,
            c = r + e.height - n.height,
            h = this._subtractOverflows(e.width, 0 - i, i + e.width - n.width),
            u = this._subtractOverflows(e.height, l, c),
            d = h * u;
          return {
            visibleArea: d,
            isCompletelyWithinViewport: e.width * e.height === d,
            fitsInViewportVertically: u === e.height,
            fitsInViewportHorizontally: h == e.width,
          };
        }
        _canFitWithFlexibleDimensions(t, e, n) {
          if (this._hasFlexibleDimensions) {
            const s = n.bottom - e.y,
              i = n.right - e.x,
              r = this._overlayRef.getConfig().minHeight,
              o = this._overlayRef.getConfig().minWidth,
              a = t.fitsInViewportHorizontally || (null != o && o <= i);
            return (t.fitsInViewportVertically || (null != r && r <= s)) && a;
          }
          return !1;
        }
        _pushOverlayOnScreen(t, e, n) {
          if (this._previousPushAmount && this._positionLocked)
            return {
              x: t.x + this._previousPushAmount.x,
              y: t.y + this._previousPushAmount.y,
            };
          const s = this._viewportRect,
            i = Math.max(t.x + e.width - s.right, 0),
            r = Math.max(t.y + e.height - s.bottom, 0),
            o = Math.max(s.top - n.top - t.y, 0),
            a = Math.max(s.left - n.left - t.x, 0);
          let l = 0,
            c = 0;
          return (
            (l =
              e.width <= s.width
                ? a || -i
                : t.x < this._viewportMargin
                ? s.left - n.left - t.x
                : 0),
            (c =
              e.height <= s.height
                ? o || -r
                : t.y < this._viewportMargin
                ? s.top - n.top - t.y
                : 0),
            (this._previousPushAmount = { x: l, y: c }),
            { x: t.x + l, y: t.y + c }
          );
        }
        _applyPosition(t, e) {
          if (
            (this._setTransformOrigin(t),
            this._setOverlayElementStyles(e, t),
            this._setBoundingBoxStyles(e, t),
            t.panelClass && this._addPanelClasses(t.panelClass),
            (this._lastPosition = t),
            this._positionChanges.observers.length)
          ) {
            const e = this._getScrollVisibility(),
              n = new tm(t, e);
            this._positionChanges.next(n);
          }
          this._isInitialRender = !1;
        }
        _setTransformOrigin(t) {
          if (!this._transformOriginSelector) return;
          const e = this._boundingBox.querySelectorAll(
            this._transformOriginSelector
          );
          let n,
            s = t.overlayY;
          n =
            'center' === t.overlayX
              ? 'center'
              : this._isRtl()
              ? 'start' === t.overlayX
                ? 'right'
                : 'left'
              : 'start' === t.overlayX
              ? 'left'
              : 'right';
          for (let i = 0; i < e.length; i++)
            e[i].style.transformOrigin = `${n} ${s}`;
        }
        _calculateBoundingBoxRect(t, e) {
          const n = this._viewportRect,
            s = this._isRtl();
          let i, r, o, a, l, c;
          if ('top' === e.overlayY)
            (r = t.y), (i = n.height - r + this._viewportMargin);
          else if ('bottom' === e.overlayY)
            (o = n.height - t.y + 2 * this._viewportMargin),
              (i = n.height - o + this._viewportMargin);
          else {
            const e = Math.min(n.bottom - t.y + n.top, t.y),
              s = this._lastBoundingBoxSize.height;
            (i = 2 * e),
              (r = t.y - e),
              i > s &&
                !this._isInitialRender &&
                !this._growAfterOpen &&
                (r = t.y - s / 2);
          }
          if (('end' === e.overlayX && !s) || ('start' === e.overlayX && s))
            (c = n.width - t.x + this._viewportMargin),
              (a = t.x - this._viewportMargin);
          else if (
            ('start' === e.overlayX && !s) ||
            ('end' === e.overlayX && s)
          )
            (l = t.x), (a = n.right - t.x);
          else {
            const e = Math.min(n.right - t.x + n.left, t.x),
              s = this._lastBoundingBoxSize.width;
            (a = 2 * e),
              (l = t.x - e),
              a > s &&
                !this._isInitialRender &&
                !this._growAfterOpen &&
                (l = t.x - s / 2);
          }
          return { top: r, left: l, bottom: o, right: c, width: a, height: i };
        }
        _setBoundingBoxStyles(t, e) {
          const n = this._calculateBoundingBoxRect(t, e);
          this._isInitialRender ||
            this._growAfterOpen ||
            ((n.height = Math.min(n.height, this._lastBoundingBoxSize.height)),
            (n.width = Math.min(n.width, this._lastBoundingBoxSize.width)));
          const s = {};
          if (this._hasExactPosition())
            (s.top = s.left = '0'),
              (s.bottom = s.right = ''),
              (s.width = s.height = '100%');
          else {
            const t = this._overlayRef.getConfig().maxHeight,
              i = this._overlayRef.getConfig().maxWidth;
            (s.height = Ef(n.height)),
              (s.top = Ef(n.top)),
              (s.bottom = Ef(n.bottom)),
              (s.width = Ef(n.width)),
              (s.left = Ef(n.left)),
              (s.right = Ef(n.right)),
              (s.alignItems =
                'center' === e.overlayX
                  ? 'center'
                  : 'end' === e.overlayX
                  ? 'flex-end'
                  : 'flex-start'),
              (s.justifyContent =
                'center' === e.overlayY
                  ? 'center'
                  : 'bottom' === e.overlayY
                  ? 'flex-end'
                  : 'flex-start'),
              t && (s.maxHeight = Ef(t)),
              i && (s.maxWidth = Ef(i));
          }
          (this._lastBoundingBoxSize = n), am(this._boundingBox.style, s);
        }
        _resetBoundingBoxStyles() {
          am(this._boundingBox.style, {
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            height: '',
            width: '',
            alignItems: '',
            justifyContent: '',
          });
        }
        _resetOverlayElementStyles() {
          am(this._pane.style, {
            top: '',
            left: '',
            bottom: '',
            right: '',
            position: '',
            transform: '',
          });
        }
        _setOverlayElementStyles(t, e) {
          const n = {};
          if (this._hasExactPosition()) {
            const s = this._viewportRuler.getViewportScrollPosition();
            am(n, this._getExactOverlayY(e, t, s)),
              am(n, this._getExactOverlayX(e, t, s));
          } else n.position = 'static';
          let s = '',
            i = this._getOffset(e, 'x'),
            r = this._getOffset(e, 'y');
          i && (s += `translateX(${i}px) `),
            r && (s += `translateY(${r}px)`),
            (n.transform = s.trim()),
            this._hasFlexibleDimensions &&
              this._overlayRef.getConfig().maxHeight &&
              (n.maxHeight = ''),
            this._hasFlexibleDimensions &&
              this._overlayRef.getConfig().maxWidth &&
              (n.maxWidth = ''),
            am(this._pane.style, n);
        }
        _getExactOverlayY(t, e, n) {
          let s = { top: null, bottom: null },
            i = this._getOverlayPoint(e, this._overlayRect, t);
          this._isPushed &&
            (i = this._pushOverlayOnScreen(i, this._overlayRect, n));
          let r = this._overlayContainer
            .getContainerElement()
            .getBoundingClientRect().top;
          return (
            (i.y -= r),
            'bottom' === t.overlayY
              ? (s.bottom =
                  this._document.documentElement.clientHeight -
                  (i.y + this._overlayRect.height) +
                  'px')
              : (s.top = Ef(i.y)),
            s
          );
        }
        _getExactOverlayX(t, e, n) {
          let s,
            i = { left: null, right: null },
            r = this._getOverlayPoint(e, this._overlayRect, t);
          return (
            this._isPushed &&
              (r = this._pushOverlayOnScreen(r, this._overlayRect, n)),
            (s = this._isRtl()
              ? 'end' === t.overlayX
                ? 'left'
                : 'right'
              : 'end' === t.overlayX
              ? 'right'
              : 'left'),
            'right' === s
              ? (i.right =
                  this._document.documentElement.clientWidth -
                  (r.x + this._overlayRect.width) +
                  'px')
              : (i.left = Ef(r.x)),
            i
          );
        }
        _getScrollVisibility() {
          const t = this._getOriginRect(),
            e = this._pane.getBoundingClientRect(),
            n = this._scrollables.map((t) =>
              t.getElementRef().nativeElement.getBoundingClientRect()
            );
          return {
            isOriginClipped: Gf(t, n),
            isOriginOutsideView: Zf(t, n),
            isOverlayClipped: Gf(e, n),
            isOverlayOutsideView: Zf(e, n),
          };
        }
        _subtractOverflows(t, ...e) {
          return e.reduce((t, e) => t - Math.max(e, 0), t);
        }
        _getNarrowedViewportRect() {
          const t = this._document.documentElement.clientWidth,
            e = this._document.documentElement.clientHeight,
            n = this._viewportRuler.getViewportScrollPosition();
          return {
            top: n.top + this._viewportMargin,
            left: n.left + this._viewportMargin,
            right: n.left + t - this._viewportMargin,
            bottom: n.top + e - this._viewportMargin,
            width: t - 2 * this._viewportMargin,
            height: e - 2 * this._viewportMargin,
          };
        }
        _isRtl() {
          return 'rtl' === this._overlayRef.getDirection();
        }
        _hasExactPosition() {
          return !this._hasFlexibleDimensions || this._isPushed;
        }
        _getOffset(t, e) {
          return 'x' === e
            ? null == t.offsetX
              ? this._offsetX
              : t.offsetX
            : null == t.offsetY
            ? this._offsetY
            : t.offsetY;
        }
        _validatePositions() {
          if (!this._preferredPositions.length)
            throw Error(
              'FlexibleConnectedPositionStrategy: At least one position is required.'
            );
          this._preferredPositions.forEach((t) => {
            nm('originX', t.originX),
              em('originY', t.originY),
              nm('overlayX', t.overlayX),
              em('overlayY', t.overlayY);
          });
        }
        _addPanelClasses(t) {
          this._pane &&
            Sf(t).forEach((t) => {
              '' !== t &&
                -1 === this._appliedPanelClasses.indexOf(t) &&
                (this._appliedPanelClasses.push(t),
                this._pane.classList.add(t));
            });
        }
        _clearPanelClasses() {
          this._pane &&
            (this._appliedPanelClasses.forEach((t) => {
              this._pane.classList.remove(t);
            }),
            (this._appliedPanelClasses = []));
        }
        _getOriginRect() {
          const t = this._origin;
          if (t instanceof Ge) return t.nativeElement.getBoundingClientRect();
          if (t instanceof HTMLElement) return t.getBoundingClientRect();
          const e = t.width || 0,
            n = t.height || 0;
          return {
            top: t.y,
            bottom: t.y + n,
            left: t.x,
            right: t.x + e,
            height: n,
            width: e,
          };
        }
      }
      function am(t, e) {
        for (let n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t;
      }
      class lm {
        constructor(t, e, n, s, i, r, o) {
          (this._preferredPositions = []),
            (this._positionStrategy = new om(n, s, i, r, o)
              .withFlexibleDimensions(!1)
              .withPush(!1)
              .withViewportMargin(0)),
            this.withFallbackPosition(t, e);
        }
        get _isRtl() {
          return 'rtl' === this._overlayRef.getDirection();
        }
        get onPositionChange() {
          return this._positionStrategy.positionChanges;
        }
        get positions() {
          return this._preferredPositions;
        }
        attach(t) {
          (this._overlayRef = t),
            this._positionStrategy.attach(t),
            this._direction &&
              (t.setDirection(this._direction), (this._direction = null));
        }
        dispose() {
          this._positionStrategy.dispose();
        }
        detach() {
          this._positionStrategy.detach();
        }
        apply() {
          this._positionStrategy.apply();
        }
        recalculateLastPosition() {
          this._positionStrategy.reapplyLastPosition();
        }
        withScrollableContainers(t) {
          this._positionStrategy.withScrollableContainers(t);
        }
        withFallbackPosition(t, e, n, s) {
          const i = new Jf(t, e, n, s);
          return (
            this._preferredPositions.push(i),
            this._positionStrategy.withPositions(this._preferredPositions),
            this
          );
        }
        withDirection(t) {
          return (
            this._overlayRef
              ? this._overlayRef.setDirection(t)
              : (this._direction = t),
            this
          );
        }
        withOffsetX(t) {
          return this._positionStrategy.withDefaultOffsetX(t), this;
        }
        withOffsetY(t) {
          return this._positionStrategy.withDefaultOffsetY(t), this;
        }
        withLockedPosition(t) {
          return this._positionStrategy.withLockedPosition(t), this;
        }
        withPositions(t) {
          return (
            (this._preferredPositions = t.slice()),
            this._positionStrategy.withPositions(this._preferredPositions),
            this
          );
        }
        setOrigin(t) {
          return this._positionStrategy.setOrigin(t), this;
        }
      }
      class cm {
        constructor() {
          (this._cssPosition = 'static'),
            (this._topOffset = ''),
            (this._bottomOffset = ''),
            (this._leftOffset = ''),
            (this._rightOffset = ''),
            (this._alignItems = ''),
            (this._justifyContent = ''),
            (this._width = ''),
            (this._height = '');
        }
        attach(t) {
          const e = t.getConfig();
          (this._overlayRef = t),
            this._width && !e.width && t.updateSize({ width: this._width }),
            this._height && !e.height && t.updateSize({ height: this._height }),
            t.hostElement.classList.add('cdk-global-overlay-wrapper'),
            (this._isDisposed = !1);
        }
        top(t = '') {
          return (
            (this._bottomOffset = ''),
            (this._topOffset = t),
            (this._alignItems = 'flex-start'),
            this
          );
        }
        left(t = '') {
          return (
            (this._rightOffset = ''),
            (this._leftOffset = t),
            (this._justifyContent = 'flex-start'),
            this
          );
        }
        bottom(t = '') {
          return (
            (this._topOffset = ''),
            (this._bottomOffset = t),
            (this._alignItems = 'flex-end'),
            this
          );
        }
        right(t = '') {
          return (
            (this._leftOffset = ''),
            (this._rightOffset = t),
            (this._justifyContent = 'flex-end'),
            this
          );
        }
        width(t = '') {
          return (
            this._overlayRef
              ? this._overlayRef.updateSize({ width: t })
              : (this._width = t),
            this
          );
        }
        height(t = '') {
          return (
            this._overlayRef
              ? this._overlayRef.updateSize({ height: t })
              : (this._height = t),
            this
          );
        }
        centerHorizontally(t = '') {
          return this.left(t), (this._justifyContent = 'center'), this;
        }
        centerVertically(t = '') {
          return this.top(t), (this._alignItems = 'center'), this;
        }
        apply() {
          if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
          const t = this._overlayRef.overlayElement.style,
            e = this._overlayRef.hostElement.style,
            n = this._overlayRef.getConfig();
          (t.position = this._cssPosition),
            (t.marginLeft = '100%' === n.width ? '0' : this._leftOffset),
            (t.marginTop = '100%' === n.height ? '0' : this._topOffset),
            (t.marginBottom = this._bottomOffset),
            (t.marginRight = this._rightOffset),
            '100%' === n.width
              ? (e.justifyContent = 'flex-start')
              : 'center' === this._justifyContent
              ? (e.justifyContent = 'center')
              : 'rtl' === this._overlayRef.getConfig().direction
              ? 'flex-start' === this._justifyContent
                ? (e.justifyContent = 'flex-end')
                : 'flex-end' === this._justifyContent &&
                  (e.justifyContent = 'flex-start')
              : (e.justifyContent = this._justifyContent),
            (e.alignItems =
              '100%' === n.height ? 'flex-start' : this._alignItems);
        }
        dispose() {
          if (this._isDisposed || !this._overlayRef) return;
          const t = this._overlayRef.overlayElement.style,
            e = this._overlayRef.hostElement,
            n = e.style;
          e.classList.remove('cdk-global-overlay-wrapper'),
            (n.justifyContent = n.alignItems = t.marginTop = t.marginBottom = t.marginLeft = t.marginRight = t.position =
              ''),
            (this._overlayRef = null),
            (this._isDisposed = !0);
        }
      }
      let hm = (() => {
          class t {
            constructor(t, e, n, s) {
              (this._viewportRuler = t),
                (this._document = e),
                (this._platform = n),
                (this._overlayContainer = s);
            }
            global() {
              return new cm();
            }
            connectedTo(t, e, n) {
              return new lm(
                e,
                n,
                t,
                this._viewportRuler,
                this._document,
                this._platform,
                this._overlayContainer
              );
            }
            flexibleConnectedTo(t) {
              return new om(
                t,
                this._viewportRuler,
                this._document,
                this._platform,
                this._overlayContainer
              );
            }
          }
          return (
            (t.ngInjectableDef = lt({
              factory: function () {
                return new t(Dt($f), Dt(tl), Dt(Vf), Dt(im));
              },
              token: t,
              providedIn: 'root',
            })),
            t
          );
        })(),
        um = 0;
      class dm {
        constructor(t, e, n, s, i, r, o, a, l, c) {
          (this.scrollStrategies = t),
            (this._overlayContainer = e),
            (this._componentFactoryResolver = n),
            (this._positionBuilder = s),
            (this._keyboardDispatcher = i),
            (this._injector = r),
            (this._ngZone = o),
            (this._document = a),
            (this._directionality = l),
            (this._location = c);
        }
        create(t) {
          const e = this._createHostElement(),
            n = this._createPaneElement(e),
            s = this._createPortalOutlet(n),
            i = new Xf(t);
          return (
            (i.direction = i.direction || this._directionality.value),
            new rm(
              s,
              e,
              n,
              i,
              this._ngZone,
              this._keyboardDispatcher,
              this._document,
              this._location
            )
          );
        }
        position() {
          return this._positionBuilder;
        }
        _createPaneElement(t) {
          const e = this._document.createElement('div');
          return (
            (e.id = 'cdk-overlay-' + um++),
            e.classList.add('cdk-overlay-pane'),
            t.appendChild(e),
            e
          );
        }
        _createHostElement() {
          const t = this._document.createElement('div');
          return this._overlayContainer.getContainerElement().appendChild(t), t;
        }
        _createPortalOutlet(t) {
          return (
            this._appRef || (this._appRef = this._injector.get(ar)),
            new mf(
              t,
              this._componentFactoryResolver,
              this._appRef,
              this._injector
            )
          );
        }
      }
      const pm = new wt('cdk-connected-overlay-scroll-strategy');
      function fm(t) {
        return () => t.scrollStrategies.reposition();
      }
      class mm {}
      class gm {
        constructor() {
          (this.role = 'dialog'),
            (this.panelClass = ''),
            (this.hasBackdrop = !0),
            (this.backdropClass = ''),
            (this.disableClose = !1),
            (this.width = ''),
            (this.height = ''),
            (this.maxWidth = '80vw'),
            (this.data = null),
            (this.ariaDescribedBy = null),
            (this.ariaLabelledBy = null),
            (this.ariaLabel = null),
            (this.autoFocus = !0),
            (this.restoreFocus = !0),
            (this.closeOnNavigation = !0);
        }
      }
      function ym() {
        throw Error(
          'Attempting to attach dialog content after content is already attached'
        );
      }
      class _m extends ff {
        constructor(t, e, n, s, i) {
          super(),
            (this._elementRef = t),
            (this._focusTrapFactory = e),
            (this._changeDetectorRef = n),
            (this._document = s),
            (this._config = i),
            (this._elementFocusedBeforeDialogWasOpened = null),
            (this._state = 'enter'),
            (this._animationStateChanged = new fi()),
            (this._ariaLabelledBy = i.ariaLabelledBy || null);
        }
        attachComponentPortal(t) {
          return (
            this._portalOutlet.hasAttached() && ym(),
            this._savePreviouslyFocusedElement(),
            this._portalOutlet.attachComponentPortal(t)
          );
        }
        attachTemplatePortal(t) {
          return (
            this._portalOutlet.hasAttached() && ym(),
            this._savePreviouslyFocusedElement(),
            this._portalOutlet.attachTemplatePortal(t)
          );
        }
        _trapFocus() {
          const t = this._elementRef.nativeElement;
          if (
            (this._focusTrap ||
              (this._focusTrap = this._focusTrapFactory.create(t)),
            this._config.autoFocus)
          )
            this._focusTrap.focusInitialElementWhenReady();
          else {
            const e = this._document.activeElement;
            e === t || t.contains(e) || t.focus();
          }
        }
        _restoreFocus() {
          const t = this._elementFocusedBeforeDialogWasOpened;
          this._config.restoreFocus &&
            t &&
            'function' == typeof t.focus &&
            t.focus(),
            this._focusTrap && this._focusTrap.destroy();
        }
        _savePreviouslyFocusedElement() {
          this._document &&
            ((this._elementFocusedBeforeDialogWasOpened = this._document.activeElement),
            this._elementRef.nativeElement.focus &&
              Promise.resolve().then(() =>
                this._elementRef.nativeElement.focus()
              ));
        }
        _onAnimationDone(t) {
          'enter' === t.toState
            ? this._trapFocus()
            : 'exit' === t.toState && this._restoreFocus(),
            this._animationStateChanged.emit(t);
        }
        _onAnimationStart(t) {
          this._animationStateChanged.emit(t);
        }
        _startExitAnimation() {
          (this._state = 'exit'), this._changeDetectorRef.markForCheck();
        }
      }
      let vm = 0;
      class bm {
        constructor(t, e, n, s = 'mat-dialog-' + vm++) {
          (this._overlayRef = t),
            (this._containerInstance = e),
            (this.id = s),
            (this.disableClose = this._containerInstance._config.disableClose),
            (this._afterOpened = new x()),
            (this._afterClosed = new x()),
            (this._beforeClosed = new x()),
            (this._state = 0),
            (e._id = s),
            e._animationStateChanged
              .pipe(
                na((t) => 'done' === t.phaseName && 'enter' === t.toState),
                mc(1)
              )
              .subscribe(() => {
                this._afterOpened.next(), this._afterOpened.complete();
              }),
            e._animationStateChanged
              .pipe(
                na((t) => 'done' === t.phaseName && 'exit' === t.toState),
                mc(1)
              )
              .subscribe(() => {
                clearTimeout(this._closeFallbackTimeout),
                  this._overlayRef.dispose();
              }),
            t.detachments().subscribe(() => {
              this._beforeClosed.next(this._result),
                this._beforeClosed.complete(),
                this._afterClosed.next(this._result),
                this._afterClosed.complete(),
                (this.componentInstance = null),
                this._overlayRef.dispose();
            }),
            t
              .keydownEvents()
              .pipe(
                na(
                  (t) =>
                    27 === t.keyCode &&
                    !this.disableClose &&
                    !(function (t, ...e) {
                      return e.length
                        ? e.some((e) => t[e])
                        : t.altKey || t.shiftKey || t.ctrlKey || t.metaKey;
                    })(t)
                )
              )
              .subscribe((t) => {
                t.preventDefault(), this.close();
              });
        }
        close(t) {
          (this._result = t),
            this._containerInstance._animationStateChanged
              .pipe(
                na((t) => 'start' === t.phaseName),
                mc(1)
              )
              .subscribe((e) => {
                this._beforeClosed.next(t),
                  this._beforeClosed.complete(),
                  (this._state = 2),
                  this._overlayRef.detachBackdrop(),
                  (this._closeFallbackTimeout = setTimeout(() => {
                    this._overlayRef.dispose();
                  }, e.totalTime + 100));
              }),
            this._containerInstance._startExitAnimation(),
            (this._state = 1);
        }
        afterOpened() {
          return this._afterOpened.asObservable();
        }
        afterClosed() {
          return this._afterClosed.asObservable();
        }
        beforeClosed() {
          return this._beforeClosed.asObservable();
        }
        backdropClick() {
          return this._overlayRef.backdropClick();
        }
        keydownEvents() {
          return this._overlayRef.keydownEvents();
        }
        updatePosition(t) {
          let e = this._getPositionStrategy();
          return (
            t && (t.left || t.right)
              ? t.left
                ? e.left(t.left)
                : e.right(t.right)
              : e.centerHorizontally(),
            t && (t.top || t.bottom)
              ? t.top
                ? e.top(t.top)
                : e.bottom(t.bottom)
              : e.centerVertically(),
            this._overlayRef.updatePosition(),
            this
          );
        }
        updateSize(t = '', e = '') {
          return (
            this._getPositionStrategy().width(t).height(e),
            this._overlayRef.updatePosition(),
            this
          );
        }
        addPanelClass(t) {
          return this._overlayRef.addPanelClass(t), this;
        }
        removePanelClass(t) {
          return this._overlayRef.removePanelClass(t), this;
        }
        afterOpen() {
          return this.afterOpened();
        }
        beforeClose() {
          return this.beforeClosed();
        }
        getState() {
          return this._state;
        }
        _getPositionStrategy() {
          return this._overlayRef.getConfig().positionStrategy;
        }
      }
      const wm = new wt('MatDialogData'),
        Sm = new wt('mat-dialog-default-options'),
        Em = new wt('mat-dialog-scroll-strategy');
      function Cm(t) {
        return () => t.scrollStrategies.block();
      }
      class xm {
        constructor(t, e, n, s, i, r, o) {
          (this._overlay = t),
            (this._injector = e),
            (this._location = n),
            (this._defaultOptions = s),
            (this._parentDialog = r),
            (this._overlayContainer = o),
            (this._openDialogsAtThisLevel = []),
            (this._afterAllClosedAtThisLevel = new x()),
            (this._afterOpenedAtThisLevel = new x()),
            (this._ariaHiddenElements = new Map()),
            (this.afterAllClosed = Xl(() =>
              this.openDialogs.length
                ? this._afterAllClosed
                : this._afterAllClosed.pipe(xc(void 0))
            )),
            (this._scrollStrategy = i);
        }
        get openDialogs() {
          return this._parentDialog
            ? this._parentDialog.openDialogs
            : this._openDialogsAtThisLevel;
        }
        get afterOpened() {
          return this._parentDialog
            ? this._parentDialog.afterOpened
            : this._afterOpenedAtThisLevel;
        }
        get afterOpen() {
          return this.afterOpened;
        }
        get _afterAllClosed() {
          const t = this._parentDialog;
          return t ? t._afterAllClosed : this._afterAllClosedAtThisLevel;
        }
        open(t, e) {
          if (
            (e = (function (t, e) {
              return Object.assign({}, e, t);
            })(e, this._defaultOptions || new gm())).id &&
            this.getDialogById(e.id)
          )
            throw Error(
              `Dialog with id "${e.id}" exists already. The dialog id must be unique.`
            );
          const n = this._createOverlay(e),
            s = this._attachDialogContainer(n, e),
            i = this._attachDialogContent(t, s, n, e);
          return (
            this.openDialogs.length ||
              this._hideNonDialogContentFromAssistiveTechnology(),
            this.openDialogs.push(i),
            i.afterClosed().subscribe(() => this._removeOpenDialog(i)),
            this.afterOpened.next(i),
            i
          );
        }
        closeAll() {
          this._closeDialogs(this.openDialogs);
        }
        getDialogById(t) {
          return this.openDialogs.find((e) => e.id === t);
        }
        ngOnDestroy() {
          this._closeDialogs(this._openDialogsAtThisLevel),
            this._afterAllClosedAtThisLevel.complete(),
            this._afterOpenedAtThisLevel.complete();
        }
        _createOverlay(t) {
          const e = this._getOverlayConfig(t);
          return this._overlay.create(e);
        }
        _getOverlayConfig(t) {
          const e = new Xf({
            positionStrategy: this._overlay.position().global(),
            scrollStrategy: t.scrollStrategy || this._scrollStrategy(),
            panelClass: t.panelClass,
            hasBackdrop: t.hasBackdrop,
            direction: t.direction,
            minWidth: t.minWidth,
            minHeight: t.minHeight,
            maxWidth: t.maxWidth,
            maxHeight: t.maxHeight,
            disposeOnNavigation: t.closeOnNavigation,
          });
          return t.backdropClass && (e.backdropClass = t.backdropClass), e;
        }
        _attachDialogContainer(t, e) {
          const n = new _f(
              (e && e.viewContainerRef && e.viewContainerRef.injector) ||
                this._injector,
              new WeakMap([[gm, e]])
            ),
            s = new df(_m, e.viewContainerRef, n, e.componentFactoryResolver);
          return t.attach(s).instance;
        }
        _attachDialogContent(t, e, n, s) {
          const i = new bm(n, e, this._location, s.id);
          if (
            (s.hasBackdrop &&
              n.backdropClick().subscribe(() => {
                i.disableClose || i.close();
              }),
            t instanceof bn)
          )
            e.attachTemplatePortal(
              new pf(t, null, { $implicit: s.data, dialogRef: i })
            );
          else {
            const n = this._createInjector(s, i, e),
              r = e.attachComponentPortal(new df(t, void 0, n));
            i.componentInstance = r.instance;
          }
          return i.updateSize(s.width, s.height).updatePosition(s.position), i;
        }
        _createInjector(t, e, n) {
          const s = t && t.viewContainerRef && t.viewContainerRef.injector,
            i = new WeakMap([
              [_m, n],
              [wm, t.data],
              [bm, e],
            ]);
          return (
            !t.direction ||
              (s && s.get(bf, null)) ||
              i.set(bf, { value: t.direction, change: ta() }),
            new _f(s || this._injector, i)
          );
        }
        _removeOpenDialog(t) {
          const e = this.openDialogs.indexOf(t);
          e > -1 &&
            (this.openDialogs.splice(e, 1),
            this.openDialogs.length ||
              (this._ariaHiddenElements.forEach((t, e) => {
                t
                  ? e.setAttribute('aria-hidden', t)
                  : e.removeAttribute('aria-hidden');
              }),
              this._ariaHiddenElements.clear(),
              this._afterAllClosed.next()));
        }
        _hideNonDialogContentFromAssistiveTechnology() {
          const t = this._overlayContainer.getContainerElement();
          if (t.parentElement) {
            const e = t.parentElement.children;
            for (let n = e.length - 1; n > -1; n--) {
              let s = e[n];
              s === t ||
                'SCRIPT' === s.nodeName ||
                'STYLE' === s.nodeName ||
                s.hasAttribute('aria-live') ||
                (this._ariaHiddenElements.set(s, s.getAttribute('aria-hidden')),
                s.setAttribute('aria-hidden', 'true'));
            }
          }
        }
        _closeDialogs(t) {
          let e = t.length;
          for (; e--; ) t[e].close();
        }
      }
      class Tm {}
      const km = new nn('8.2.3');
      let Dm = (() => {
        class t {
          constructor(t) {
            this._platform = t;
          }
          isDisabled(t) {
            return t.hasAttribute('disabled');
          }
          isVisible(t) {
            return (
              (function (t) {
                return !!(
                  t.offsetWidth ||
                  t.offsetHeight ||
                  ('function' == typeof t.getClientRects &&
                    t.getClientRects().length)
                );
              })(t) && 'visible' === getComputedStyle(t).visibility
            );
          }
          isTabbable(t) {
            if (!this._platform.isBrowser) return !1;
            const e = (function (t) {
              try {
                return t.frameElement;
              } catch (Bw) {
                return null;
              }
            })(
              ((n = t).ownerDocument && n.ownerDocument.defaultView) || window
            );
            var n;
            if (e) {
              const t = e && e.nodeName.toLowerCase();
              if (-1 === Am(e)) return !1;
              if (
                (this._platform.BLINK || this._platform.WEBKIT) &&
                'object' === t
              )
                return !1;
              if (
                (this._platform.BLINK || this._platform.WEBKIT) &&
                !this.isVisible(e)
              )
                return !1;
            }
            let s = t.nodeName.toLowerCase(),
              i = Am(t);
            if (t.hasAttribute('contenteditable')) return -1 !== i;
            if ('iframe' === s) return !1;
            if ('audio' === s) {
              if (!t.hasAttribute('controls')) return !1;
              if (this._platform.BLINK) return !0;
            }
            if ('video' === s) {
              if (!t.hasAttribute('controls') && this._platform.TRIDENT)
                return !1;
              if (this._platform.BLINK || this._platform.FIREFOX) return !0;
            }
            return (
              ('object' !== s ||
                (!this._platform.BLINK && !this._platform.WEBKIT)) &&
              !(
                this._platform.WEBKIT &&
                this._platform.IOS &&
                !(function (t) {
                  let e = t.nodeName.toLowerCase(),
                    n = 'input' === e && t.type;
                  return (
                    'text' === n ||
                    'password' === n ||
                    'select' === e ||
                    'textarea' === e
                  );
                })(t)
              ) &&
              t.tabIndex >= 0
            );
          }
          isFocusable(t) {
            return (
              (function (t) {
                return (
                  !(function (t) {
                    return (
                      (function (t) {
                        return 'input' == t.nodeName.toLowerCase();
                      })(t) && 'hidden' == t.type
                    );
                  })(t) &&
                  ((function (t) {
                    let e = t.nodeName.toLowerCase();
                    return (
                      'input' === e ||
                      'select' === e ||
                      'button' === e ||
                      'textarea' === e
                    );
                  })(t) ||
                    (function (t) {
                      return (
                        (function (t) {
                          return 'a' == t.nodeName.toLowerCase();
                        })(t) && t.hasAttribute('href')
                      );
                    })(t) ||
                    t.hasAttribute('contenteditable') ||
                    Rm(t))
                );
              })(t) &&
              !this.isDisabled(t) &&
              this.isVisible(t)
            );
          }
        }
        return (
          (t.ngInjectableDef = lt({
            factory: function () {
              return new t(Dt(Vf));
            },
            token: t,
            providedIn: 'root',
          })),
          t
        );
      })();
      function Rm(t) {
        if (!t.hasAttribute('tabindex') || void 0 === t.tabIndex) return !1;
        let e = t.getAttribute('tabindex');
        return '-32768' != e && !(!e || isNaN(parseInt(e, 10)));
      }
      function Am(t) {
        if (!Rm(t)) return null;
        const e = parseInt(t.getAttribute('tabindex') || '', 10);
        return isNaN(e) ? -1 : e;
      }
      class Im {
        constructor(t, e, n, s, i = !1) {
          (this._element = t),
            (this._checker = e),
            (this._ngZone = n),
            (this._document = s),
            (this._hasAttached = !1),
            (this.startAnchorListener = () => this.focusLastTabbableElement()),
            (this.endAnchorListener = () => this.focusFirstTabbableElement()),
            (this._enabled = !0),
            i || this.attachAnchors();
        }
        get enabled() {
          return this._enabled;
        }
        set enabled(t) {
          (this._enabled = t),
            this._startAnchor &&
              this._endAnchor &&
              (this._toggleAnchorTabIndex(t, this._startAnchor),
              this._toggleAnchorTabIndex(t, this._endAnchor));
        }
        destroy() {
          const t = this._startAnchor,
            e = this._endAnchor;
          t &&
            (t.removeEventListener('focus', this.startAnchorListener),
            t.parentNode && t.parentNode.removeChild(t)),
            e &&
              (e.removeEventListener('focus', this.endAnchorListener),
              e.parentNode && e.parentNode.removeChild(e)),
            (this._startAnchor = this._endAnchor = null);
        }
        attachAnchors() {
          return (
            !!this._hasAttached ||
            (this._ngZone.runOutsideAngular(() => {
              this._startAnchor ||
                ((this._startAnchor = this._createAnchor()),
                this._startAnchor.addEventListener(
                  'focus',
                  this.startAnchorListener
                )),
                this._endAnchor ||
                  ((this._endAnchor = this._createAnchor()),
                  this._endAnchor.addEventListener(
                    'focus',
                    this.endAnchorListener
                  ));
            }),
            this._element.parentNode &&
              (this._element.parentNode.insertBefore(
                this._startAnchor,
                this._element
              ),
              this._element.parentNode.insertBefore(
                this._endAnchor,
                this._element.nextSibling
              ),
              (this._hasAttached = !0)),
            this._hasAttached)
          );
        }
        focusInitialElementWhenReady() {
          return new Promise((t) => {
            this._executeOnStable(() => t(this.focusInitialElement()));
          });
        }
        focusFirstTabbableElementWhenReady() {
          return new Promise((t) => {
            this._executeOnStable(() => t(this.focusFirstTabbableElement()));
          });
        }
        focusLastTabbableElementWhenReady() {
          return new Promise((t) => {
            this._executeOnStable(() => t(this.focusLastTabbableElement()));
          });
        }
        _getRegionBoundary(t) {
          let e = this._element.querySelectorAll(
            `[cdk-focus-region-${t}], [cdkFocusRegion${t}], [cdk-focus-${t}]`
          );
          for (let n = 0; n < e.length; n++)
            e[n].hasAttribute('cdk-focus-' + t)
              ? console.warn(
                  `Found use of deprecated attribute 'cdk-focus-${t}', use 'cdkFocusRegion${t}' instead. The deprecated attribute will be removed in 8.0.0.`,
                  e[n]
                )
              : e[n].hasAttribute('cdk-focus-region-' + t) &&
                console.warn(
                  `Found use of deprecated attribute 'cdk-focus-region-${t}', use 'cdkFocusRegion${t}' instead. The deprecated attribute will be removed in 8.0.0.`,
                  e[n]
                );
          return 'start' == t
            ? e.length
              ? e[0]
              : this._getFirstTabbableElement(this._element)
            : e.length
            ? e[e.length - 1]
            : this._getLastTabbableElement(this._element);
        }
        focusInitialElement() {
          const t = this._element.querySelector(
            '[cdk-focus-initial], [cdkFocusInitial]'
          );
          return t
            ? (t.hasAttribute('cdk-focus-initial') &&
                console.warn(
                  "Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0",
                  t
                ),
              zt() &&
                !this._checker.isFocusable(t) &&
                console.warn(
                  "Element matching '[cdkFocusInitial]' is not focusable.",
                  t
                ),
              t.focus(),
              !0)
            : this.focusFirstTabbableElement();
        }
        focusFirstTabbableElement() {
          const t = this._getRegionBoundary('start');
          return t && t.focus(), !!t;
        }
        focusLastTabbableElement() {
          const t = this._getRegionBoundary('end');
          return t && t.focus(), !!t;
        }
        hasAttached() {
          return this._hasAttached;
        }
        _getFirstTabbableElement(t) {
          if (this._checker.isFocusable(t) && this._checker.isTabbable(t))
            return t;
          let e = t.children || t.childNodes;
          for (let n = 0; n < e.length; n++) {
            let t =
              e[n].nodeType === this._document.ELEMENT_NODE
                ? this._getFirstTabbableElement(e[n])
                : null;
            if (t) return t;
          }
          return null;
        }
        _getLastTabbableElement(t) {
          if (this._checker.isFocusable(t) && this._checker.isTabbable(t))
            return t;
          let e = t.children || t.childNodes;
          for (let n = e.length - 1; n >= 0; n--) {
            let t =
              e[n].nodeType === this._document.ELEMENT_NODE
                ? this._getLastTabbableElement(e[n])
                : null;
            if (t) return t;
          }
          return null;
        }
        _createAnchor() {
          const t = this._document.createElement('div');
          return (
            this._toggleAnchorTabIndex(this._enabled, t),
            t.classList.add('cdk-visually-hidden'),
            t.classList.add('cdk-focus-trap-anchor'),
            t.setAttribute('aria-hidden', 'true'),
            t
          );
        }
        _toggleAnchorTabIndex(t, e) {
          t ? e.setAttribute('tabindex', '0') : e.removeAttribute('tabindex');
        }
        _executeOnStable(t) {
          this._ngZone.isStable
            ? t()
            : this._ngZone.onStable.asObservable().pipe(mc(1)).subscribe(t);
        }
      }
      let Om = (() => {
        class t {
          constructor(t, e, n) {
            (this._checker = t), (this._ngZone = e), (this._document = n);
          }
          create(t, e = !1) {
            return new Im(t, this._checker, this._ngZone, this._document, e);
          }
        }
        return (
          (t.ngInjectableDef = lt({
            factory: function () {
              return new t(Dt(Dm), Dt($i), Dt(tl));
            },
            token: t,
            providedIn: 'root',
          })),
          t
        );
      })();
      class Pm {}
      const Nm = new nn('8.2.3'),
        Mm = new wt('mat-sanity-checks', {
          providedIn: 'root',
          factory: function () {
            return !0;
          },
        });
      class Fm {
        constructor(t, e) {
          (this._sanityChecksEnabled = t),
            (this._hammerLoader = e),
            (this._hasDoneGlobalChecks = !1),
            (this._hasCheckedHammer = !1),
            (this._document =
              'object' == typeof document && document ? document : null),
            (this._window =
              'object' == typeof window && window ? window : null),
            this._areChecksEnabled() &&
              !this._hasDoneGlobalChecks &&
              (this._checkDoctypeIsDefined(),
              this._checkThemeIsPresent(),
              this._checkCdkVersionMatch(),
              (this._hasDoneGlobalChecks = !0));
        }
        _areChecksEnabled() {
          return this._sanityChecksEnabled && zt() && !this._isTestEnv();
        }
        _isTestEnv() {
          const t = this._window;
          return t && (t.__karma__ || t.jasmine);
        }
        _checkDoctypeIsDefined() {
          this._document &&
            !this._document.doctype &&
            console.warn(
              'Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.'
            );
        }
        _checkThemeIsPresent() {
          if (
            !this._document ||
            !this._document.body ||
            'function' != typeof getComputedStyle
          )
            return;
          const t = this._document.createElement('div');
          t.classList.add('mat-theme-loaded-marker'),
            this._document.body.appendChild(t);
          const e = getComputedStyle(t);
          e &&
            'none' !== e.display &&
            console.warn(
              'Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming'
            ),
            this._document.body.removeChild(t);
        }
        _checkCdkVersionMatch() {
          Nm.full !== km.full &&
            console.warn(
              'The Angular Material version (' +
                Nm.full +
                ') does not match the Angular CDK version (' +
                km.full +
                ').\nPlease ensure the versions of these two packages exactly match.'
            );
        }
        _checkHammerIsAvailable() {
          !this._hasCheckedHammer &&
            this._window &&
            (!this._areChecksEnabled() ||
              this._window.Hammer ||
              this._hammerLoader ||
              console.warn(
                'Could not find HammerJS. Certain Angular Material components may not work correctly.'
              ),
            (this._hasCheckedHammer = !0));
        }
      }
      let Lm;
      try {
        Lm = 'undefined' != typeof Intl;
      } catch (Bw) {
        Lm = !1;
      }
      class jm {}
      var Vm = jn({
        encapsulation: 2,
        styles: [
          '.mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}@media (-ms-high-contrast:active){.mat-dialog-container{outline:solid 1px}}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base{margin-left:0;margin-right:8px}',
        ],
        data: {
          animation: [
            {
              type: 7,
              name: 'dialogContainer',
              definitions: [
                {
                  type: 0,
                  name: 'void, exit',
                  styles: {
                    type: 6,
                    styles: { opacity: 0, transform: 'scale(0.7)' },
                    offset: null,
                  },
                  options: void 0,
                },
                {
                  type: 0,
                  name: 'enter',
                  styles: {
                    type: 6,
                    styles: { transform: 'none' },
                    offset: null,
                  },
                  options: void 0,
                },
                {
                  type: 1,
                  expr: '* => enter',
                  animation: {
                    type: 4,
                    styles: {
                      type: 6,
                      styles: { transform: 'none', opacity: 1 },
                      offset: null,
                    },
                    timings: '150ms cubic-bezier(0, 0, 0.2, 1)',
                  },
                  options: null,
                },
                {
                  type: 1,
                  expr: '* => void, * => exit',
                  animation: {
                    type: 4,
                    styles: { type: 6, styles: { opacity: 0 }, offset: null },
                    timings: '75ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                  },
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      });
      function Hm(t) {
        return $r(0, [(t()(), Tr(0, null, null, 0))], null, null);
      }
      function Bm(t) {
        return $r(
          0,
          [
            Or(402653184, 1, { _portalOutlet: 0 }),
            (t()(), Tr(16777216, null, null, 1, null, Hm)),
            qs(
              2,
              212992,
              [[1, 4]],
              0,
              gf,
              [We, Sn],
              { portal: [0, 'portal'] },
              null
            ),
          ],
          function (t, e) {
            t(e, 2, 0, '');
          },
          null
        );
      }
      function Um(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              1,
              'mat-dialog-container',
              [
                ['aria-modal', 'true'],
                ['class', 'mat-dialog-container'],
                ['tabindex', '-1'],
              ],
              [
                [1, 'id', 0],
                [1, 'role', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-label', 0],
                [1, 'aria-describedby', 0],
                [40, '@dialogContainer', 0],
              ],
              [
                ['component', '@dialogContainer.start'],
                ['component', '@dialogContainer.done'],
              ],
              function (t, e, n) {
                var s = !0;
                return (
                  'component:@dialogContainer.start' === e &&
                    (s = !1 !== Ps(t, 1)._onAnimationStart(n) && s),
                  'component:@dialogContainer.done' === e &&
                    (s = !1 !== Ps(t, 1)._onAnimationDone(n) && s),
                  s
                );
              },
              Bm,
              Vm
            )),
            qs(1, 49152, null, 0, _m, [Ge, Om, _e, [2, tl], gm], null, null),
          ],
          null,
          function (t, e) {
            t(
              e,
              0,
              0,
              Ps(e, 1)._id,
              Ps(e, 1)._config.role,
              Ps(e, 1)._config.ariaLabel ? null : Ps(e, 1)._ariaLabelledBy,
              Ps(e, 1)._config.ariaLabel,
              Ps(e, 1)._config.ariaDescribedBy || null,
              Ps(e, 1)._state
            );
          }
        );
      }
      var $m = Ss('mat-dialog-container', _m, Um, {}, {}, []);
      const zm = new wt('NgValueAccessor');
      class Wm {
        constructor() {
          this._accessors = [];
        }
        add(t, e) {
          this._accessors.push([t, e]);
        }
        remove(t) {
          for (let e = this._accessors.length - 1; e >= 0; --e)
            if (this._accessors[e][1] === t)
              return void this._accessors.splice(e, 1);
        }
        select(t) {
          this._accessors.forEach((e) => {
            this._isSameGroup(e, t) && e[1] !== t && e[1].fireUncheck(t.value);
          });
        }
        _isSameGroup(t, e) {
          return (
            !!t[0].control &&
            t[0]._parent === e._control._parent &&
            t[1].name === e.name
          );
        }
      }
      class qm {
        constructor(t, e, n) {
          (this._element = t),
            (this._renderer = e),
            (this._select = n),
            this._select && (this.id = this._select._registerOption());
        }
        set ngValue(t) {
          null != this._select &&
            (this._select._optionMap.set(this.id, t),
            this._setElementValue(
              (function (t, e) {
                return null == t
                  ? '' + e
                  : (e && 'object' == typeof e && (e = 'Object'),
                    `${t}: ${e}`.slice(0, 50));
              })(this.id, t)
            ),
            this._select.writeValue(this._select.value));
        }
        set value(t) {
          this._setElementValue(t),
            this._select && this._select.writeValue(this._select.value);
        }
        _setElementValue(t) {
          this._renderer.setProperty(this._element.nativeElement, 'value', t);
        }
        ngOnDestroy() {
          this._select &&
            (this._select._optionMap.delete(this.id),
            this._select.writeValue(this._select.value));
        }
      }
      function Km(t, e) {
        return null == t
          ? '' + e
          : ('string' == typeof e && (e = `'${e}'`),
            e && 'object' == typeof e && (e = 'Object'),
            `${t}: ${e}`.slice(0, 50));
      }
      class Zm {
        constructor(t, e, n) {
          (this._element = t),
            (this._renderer = e),
            (this._select = n),
            this._select && (this.id = this._select._registerOption(this));
        }
        set ngValue(t) {
          null != this._select &&
            ((this._value = t),
            this._setElementValue(Km(this.id, t)),
            this._select.writeValue(this._select.value));
        }
        set value(t) {
          this._select
            ? ((this._value = t),
              this._setElementValue(Km(this.id, t)),
              this._select.writeValue(this._select.value))
            : this._setElementValue(t);
        }
        _setElementValue(t) {
          this._renderer.setProperty(this._element.nativeElement, 'value', t);
        }
        _setSelected(t) {
          this._renderer.setProperty(
            this._element.nativeElement,
            'selected',
            t
          );
        }
        ngOnDestroy() {
          this._select &&
            (this._select._optionMap.delete(this.id),
            this._select.writeValue(this._select.value));
        }
      }
      const Gm = new wt('NgFormSelectorWarning');
      class Qm {}
      class Ym {
        static withConfig(t) {
          return {
            ngModule: Ym,
            providers: [
              { provide: Gm, useValue: t.warnOnDeprecatedNgFormSelector },
            ],
          };
        }
      }
      function Xm(...t) {
        return (e) => {
          let n;
          return (
            'function' == typeof t[t.length - 1] && (n = t.pop()),
            e.lift(new Jm(t, n))
          );
        };
      }
      class Jm {
        constructor(t, e) {
          (this.observables = t), (this.project = e);
        }
        call(t, e) {
          return e.subscribe(new tg(t, this.observables, this.project));
        }
      }
      class tg extends zl {
        constructor(t, e, n) {
          super(t),
            (this.observables = e),
            (this.project = n),
            (this.toRespond = []);
          const s = e.length;
          this.values = new Array(s);
          for (let i = 0; i < s; i++) this.toRespond.push(i);
          for (let i = 0; i < s; i++) this.add(ql(this, e[i], void 0, i));
        }
        notifyNext(t, e, n) {
          this.values[n] = e;
          const s = this.toRespond;
          if (s.length > 0) {
            const t = s.indexOf(n);
            -1 !== t && s.splice(t, 1);
          }
        }
        notifyComplete() {}
        _next(t) {
          if (0 === this.toRespond.length) {
            const e = [t, ...this.values];
            this.project ? this._tryProject(e) : this.destination.next(e);
          }
        }
        _tryProject(t) {
          let e;
          try {
            e = this.project.apply(this, t);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      function eg(t) {
        return parseInt('' + t, 10);
      }
      function ng(t) {
        return null != t ? '' + t : '';
      }
      function sg(t) {
        return 'number' == typeof t && isFinite(t) && Math.floor(t) === t;
      }
      function ig(t) {
        return null != t;
      }
      function rg(t, e) {
        return (
          t &&
          t.className &&
          t.className.split &&
          t.className.split(/\s+/).indexOf(e) >= 0
        );
      }
      'undefined' == typeof Element ||
        Element.prototype.closest ||
        (Element.prototype.matches ||
          (Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
        (Element.prototype.closest = function (t) {
          let e = this;
          if (!document.documentElement.contains(e)) return null;
          do {
            if (e.matches(t)) return e;
            e = e.parentElement || e.parentNode;
          } while (null !== e && 1 === e.nodeType);
          return null;
        }));
      class og {}
      let ag = (() => {
        class t {
          constructor() {
            (this.dismissible = !0), (this.type = 'warning');
          }
        }
        return (
          (t.ngInjectableDef = lt({
            factory: function () {
              return new t();
            },
            token: t,
            providedIn: 'root',
          })),
          t
        );
      })();
      class lg {
        constructor(t, e, n) {
          (this._renderer = e),
            (this._element = n),
            (this.close = new fi()),
            (this.dismissible = t.dismissible),
            (this.type = t.type);
        }
        closeHandler() {
          this.close.emit(null);
        }
        ngOnChanges(t) {
          const e = t.type;
          e &&
            !e.firstChange &&
            (this._renderer.removeClass(
              this._element.nativeElement,
              'alert-' + e.previousValue
            ),
            this._renderer.addClass(
              this._element.nativeElement,
              'alert-' + e.currentValue
            ));
        }
        ngOnInit() {
          this._renderer.addClass(
            this._element.nativeElement,
            'alert-' + this.type
          );
        }
      }
      class cg {}
      class hg {}
      class ug {}
      class dg {}
      class pg {
        static from(t) {
          return t instanceof pg
            ? t
            : t
            ? new pg(t.year, t.month, t.day)
            : null;
        }
        constructor(t, e, n) {
          (this.year = sg(t) ? t : null),
            (this.month = sg(e) ? e : null),
            (this.day = sg(n) ? n : null);
        }
        equals(t) {
          return (
            t &&
            this.year === t.year &&
            this.month === t.month &&
            this.day === t.day
          );
        }
        before(t) {
          return (
            !!t &&
            (this.year === t.year
              ? this.month === t.month
                ? this.day !== t.day && this.day < t.day
                : this.month < t.month
              : this.year < t.year)
          );
        }
        after(t) {
          return (
            !!t &&
            (this.year === t.year
              ? this.month === t.month
                ? this.day !== t.day && this.day > t.day
                : this.month > t.month
              : this.year > t.year)
          );
        }
      }
      function fg(t) {
        return new pg(t.getFullYear(), t.getMonth() + 1, t.getDate());
      }
      function mg(t) {
        const e = new Date(t.year, t.month - 1, t.day, 12);
        return isNaN(e.getTime()) || e.setFullYear(t.year), e;
      }
      function gg() {
        return new _g();
      }
      let yg = (() => {
        class t {}
        return (
          (t.ngInjectableDef = lt({
            factory: gg,
            token: t,
            providedIn: 'root',
          })),
          t
        );
      })();
      class _g extends yg {
        getDaysPerWeek() {
          return 7;
        }
        getMonths() {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        }
        getWeeksPerMonth() {
          return 6;
        }
        getNext(t, e = 'd', n = 1) {
          let s = mg(t),
            i = !0,
            r = s.getMonth();
          switch (e) {
            case 'y':
              s.setFullYear(s.getFullYear() + n);
              break;
            case 'm':
              (r += n), s.setMonth(r), (r %= 12), r < 0 && (r += 12);
              break;
            case 'd':
              s.setDate(s.getDate() + n), (i = !1);
              break;
            default:
              return t;
          }
          return i && s.getMonth() !== r && s.setDate(0), fg(s);
        }
        getPrev(t, e = 'd', n = 1) {
          return this.getNext(t, e, -n);
        }
        getWeekday(t) {
          let e = mg(t).getDay();
          return 0 === e ? 7 : e;
        }
        getWeekNumber(t, e) {
          7 === e && (e = 0);
          const n = mg(t[(11 - e) % 7]);
          n.setDate(n.getDate() + 4 - (n.getDay() || 7));
          const s = n.getTime();
          return (
            n.setMonth(0),
            n.setDate(1),
            Math.floor(Math.round((s - n.getTime()) / 864e5) / 7) + 1
          );
        }
        getToday() {
          return fg(new Date());
        }
        isValid(t) {
          if (!(t && sg(t.year) && sg(t.month) && sg(t.day))) return !1;
          if (0 === t.year) return !1;
          const e = mg(t);
          return (
            !isNaN(e.getTime()) &&
            e.getFullYear() === t.year &&
            e.getMonth() + 1 === t.month &&
            e.getDate() === t.day
          );
        }
      }
      function vg(t, e) {
        return !(function (t, e) {
          return (!t && !e) || (!!t && !!e && t.equals(e));
        })(t, e);
      }
      function bg(t, e) {
        return !(
          (!t && !e) ||
          (t && e && t.year === e.year && t.month === e.month)
        );
      }
      function wg(t, e, n) {
        return t && e && t.before(e) ? e : t && n && t.after(n) ? n : t;
      }
      function Sg(t, e) {
        const { minDate: n, maxDate: s, disabled: i, markDisabled: r } = e;
        return !(
          !ig(t) ||
          i ||
          (r && r(t, { year: t.year, month: t.month })) ||
          (n && t.before(n)) ||
          (s && t.after(s))
        );
      }
      let Eg = (() => {
        class t {
          getDayNumerals(t) {
            return '' + t.day;
          }
          getWeekNumerals(t) {
            return '' + t;
          }
          getYearNumerals(t) {
            return '' + t;
          }
        }
        return (
          (t.ngInjectableDef = lt({
            factory: function () {
              return (t = Dt(Ti)), new Cg(t);
              var t;
            },
            token: t,
            providedIn: 'root',
          })),
          t
        );
      })();
      class Cg extends Eg {
        constructor(t) {
          super(), (this._locale = t);
          const e = _a(t, fa.Standalone, ma.Short);
          (this._weekdaysShort = e.map((t, n) => e[(n + 1) % 7])),
            (this._monthsShort = va(t, fa.Standalone, ma.Abbreviated)),
            (this._monthsFull = va(t, fa.Standalone, ma.Wide));
        }
        getWeekdayShortName(t) {
          return this._weekdaysShort[t - 1];
        }
        getMonthShortName(t) {
          return this._monthsShort[t - 1];
        }
        getMonthFullName(t) {
          return this._monthsFull[t - 1];
        }
        getDayAriaLabel(t) {
          return (function (t, e, n, s) {
            let i = (function (t) {
              if (Ba(t)) return t;
              if ('number' == typeof t && !isNaN(t)) return new Date(t);
              if ('string' == typeof t) {
                t = t.trim();
                const e = parseFloat(t);
                if (!isNaN(t - e)) return new Date(e);
                if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(t)) {
                  const [e, n, s] = t.split('-').map((t) => +t);
                  return new Date(e, n - 1, s);
                }
                let n;
                if ((n = t.match(ka)))
                  return (function (t) {
                    const e = new Date(0);
                    let n = 0,
                      s = 0;
                    const i = t[8] ? e.setUTCFullYear : e.setFullYear,
                      r = t[8] ? e.setUTCHours : e.setHours;
                    t[9] &&
                      ((n = Number(t[9] + t[10])), (s = Number(t[9] + t[11]))),
                      i.call(e, Number(t[1]), Number(t[2]) - 1, Number(t[3]));
                    const o = Number(t[4] || 0) - n,
                      a = Number(t[5] || 0) - s,
                      l = Number(t[6] || 0),
                      c = Math.round(1e3 * parseFloat('0.' + (t[7] || 0)));
                    return r.call(e, o, a, l, c), e;
                  })(n);
              }
              const e = new Date(t);
              if (!Ba(e))
                throw new Error(`Unable to convert "${t}" into a date`);
              return e;
            })(t);
            e =
              (function t(e, n) {
                const s = (function (t) {
                  return pi(t)[hi.LocaleId];
                })(e);
                if (((Da[s] = Da[s] || {}), Da[s][n])) return Da[s][n];
                let i = '';
                switch (n) {
                  case 'shortDate':
                    i = ba(e, ga.Short);
                    break;
                  case 'mediumDate':
                    i = ba(e, ga.Medium);
                    break;
                  case 'longDate':
                    i = ba(e, ga.Long);
                    break;
                  case 'fullDate':
                    i = ba(e, ga.Full);
                    break;
                  case 'shortTime':
                    i = wa(e, ga.Short);
                    break;
                  case 'mediumTime':
                    i = wa(e, ga.Medium);
                    break;
                  case 'longTime':
                    i = wa(e, ga.Long);
                    break;
                  case 'fullTime':
                    i = wa(e, ga.Full);
                    break;
                  case 'short':
                    const n = t(e, 'shortTime'),
                      s = t(e, 'shortDate');
                    i = Pa(Sa(e, ga.Short), [n, s]);
                    break;
                  case 'medium':
                    const r = t(e, 'mediumTime'),
                      o = t(e, 'mediumDate');
                    i = Pa(Sa(e, ga.Medium), [r, o]);
                    break;
                  case 'long':
                    const a = t(e, 'longTime'),
                      l = t(e, 'longDate');
                    i = Pa(Sa(e, ga.Long), [a, l]);
                    break;
                  case 'full':
                    const c = t(e, 'fullTime'),
                      h = t(e, 'fullDate');
                    i = Pa(Sa(e, ga.Full), [c, h]);
                }
                return i && (Da[s][n] = i), i;
              })(n, e) || e;
            let r,
              o = [];
            for (; e; ) {
              if (((r = Ra.exec(e)), !r)) {
                o.push(e);
                break;
              }
              {
                o = o.concat(r.slice(1));
                const t = o.pop();
                if (!t) break;
                e = t;
              }
            }
            let a = i.getTimezoneOffset();
            s &&
              ((a = Ha(s, a)),
              (i = (function (t, e, n) {
                const s = t.getTimezoneOffset();
                return (function (t, e) {
                  return (
                    (t = new Date(t.getTime())).setMinutes(t.getMinutes() + e),
                    t
                  );
                })(t, -1 * (Ha(e, s) - s));
              })(i, s)));
            let l = '';
            return (
              o.forEach((t) => {
                const e = (function (t) {
                  if (Va[t]) return Va[t];
                  let e;
                  switch (t) {
                    case 'G':
                    case 'GG':
                    case 'GGG':
                      e = Fa(Oa.Eras, ma.Abbreviated);
                      break;
                    case 'GGGG':
                      e = Fa(Oa.Eras, ma.Wide);
                      break;
                    case 'GGGGG':
                      e = Fa(Oa.Eras, ma.Narrow);
                      break;
                    case 'y':
                      e = Ma(Ia.FullYear, 1, 0, !1, !0);
                      break;
                    case 'yy':
                      e = Ma(Ia.FullYear, 2, 0, !0, !0);
                      break;
                    case 'yyy':
                      e = Ma(Ia.FullYear, 3, 0, !1, !0);
                      break;
                    case 'yyyy':
                      e = Ma(Ia.FullYear, 4, 0, !1, !0);
                      break;
                    case 'M':
                    case 'L':
                      e = Ma(Ia.Month, 1, 1);
                      break;
                    case 'MM':
                    case 'LL':
                      e = Ma(Ia.Month, 2, 1);
                      break;
                    case 'MMM':
                      e = Fa(Oa.Months, ma.Abbreviated);
                      break;
                    case 'MMMM':
                      e = Fa(Oa.Months, ma.Wide);
                      break;
                    case 'MMMMM':
                      e = Fa(Oa.Months, ma.Narrow);
                      break;
                    case 'LLL':
                      e = Fa(Oa.Months, ma.Abbreviated, fa.Standalone);
                      break;
                    case 'LLLL':
                      e = Fa(Oa.Months, ma.Wide, fa.Standalone);
                      break;
                    case 'LLLLL':
                      e = Fa(Oa.Months, ma.Narrow, fa.Standalone);
                      break;
                    case 'w':
                      e = ja(1);
                      break;
                    case 'ww':
                      e = ja(2);
                      break;
                    case 'W':
                      e = ja(1, !0);
                      break;
                    case 'd':
                      e = Ma(Ia.Date, 1);
                      break;
                    case 'dd':
                      e = Ma(Ia.Date, 2);
                      break;
                    case 'E':
                    case 'EE':
                    case 'EEE':
                      e = Fa(Oa.Days, ma.Abbreviated);
                      break;
                    case 'EEEE':
                      e = Fa(Oa.Days, ma.Wide);
                      break;
                    case 'EEEEE':
                      e = Fa(Oa.Days, ma.Narrow);
                      break;
                    case 'EEEEEE':
                      e = Fa(Oa.Days, ma.Short);
                      break;
                    case 'a':
                    case 'aa':
                    case 'aaa':
                      e = Fa(Oa.DayPeriods, ma.Abbreviated);
                      break;
                    case 'aaaa':
                      e = Fa(Oa.DayPeriods, ma.Wide);
                      break;
                    case 'aaaaa':
                      e = Fa(Oa.DayPeriods, ma.Narrow);
                      break;
                    case 'b':
                    case 'bb':
                    case 'bbb':
                      e = Fa(Oa.DayPeriods, ma.Abbreviated, fa.Standalone, !0);
                      break;
                    case 'bbbb':
                      e = Fa(Oa.DayPeriods, ma.Wide, fa.Standalone, !0);
                      break;
                    case 'bbbbb':
                      e = Fa(Oa.DayPeriods, ma.Narrow, fa.Standalone, !0);
                      break;
                    case 'B':
                    case 'BB':
                    case 'BBB':
                      e = Fa(Oa.DayPeriods, ma.Abbreviated, fa.Format, !0);
                      break;
                    case 'BBBB':
                      e = Fa(Oa.DayPeriods, ma.Wide, fa.Format, !0);
                      break;
                    case 'BBBBB':
                      e = Fa(Oa.DayPeriods, ma.Narrow, fa.Format, !0);
                      break;
                    case 'h':
                      e = Ma(Ia.Hours, 1, -12);
                      break;
                    case 'hh':
                      e = Ma(Ia.Hours, 2, -12);
                      break;
                    case 'H':
                      e = Ma(Ia.Hours, 1);
                      break;
                    case 'HH':
                      e = Ma(Ia.Hours, 2);
                      break;
                    case 'm':
                      e = Ma(Ia.Minutes, 1);
                      break;
                    case 'mm':
                      e = Ma(Ia.Minutes, 2);
                      break;
                    case 's':
                      e = Ma(Ia.Seconds, 1);
                      break;
                    case 'ss':
                      e = Ma(Ia.Seconds, 2);
                      break;
                    case 'S':
                      e = Ma(Ia.FractionalSeconds, 1);
                      break;
                    case 'SS':
                      e = Ma(Ia.FractionalSeconds, 2);
                      break;
                    case 'SSS':
                      e = Ma(Ia.FractionalSeconds, 3);
                      break;
                    case 'Z':
                    case 'ZZ':
                    case 'ZZZ':
                      e = La(Aa.Short);
                      break;
                    case 'ZZZZZ':
                      e = La(Aa.Extended);
                      break;
                    case 'O':
                    case 'OO':
                    case 'OOO':
                    case 'z':
                    case 'zz':
                    case 'zzz':
                      e = La(Aa.ShortGMT);
                      break;
                    case 'OOOO':
                    case 'ZZZZ':
                    case 'zzzz':
                      e = La(Aa.Long);
                      break;
                    default:
                      return null;
                  }
                  return (Va[t] = e), e;
                })(t);
                l += e
                  ? e(i, n, a)
                  : "''" === t
                  ? "'"
                  : t.replace(/(^'|'$)/g, '').replace(/''/g, "'");
              }),
              l
            );
          })(new Date(t.year, t.month - 1, t.day), 'fullDate', this._locale);
        }
      }
      class xg {
        constructor(t, e) {
          (this._calendar = t),
            (this._i18n = e),
            (this._VALIDATORS = {
              dayTemplateData: (t) => {
                if (this._state.dayTemplateData !== t)
                  return { dayTemplateData: t };
              },
              displayMonths: (t) => {
                if (sg((t = eg(t))) && t > 0 && this._state.displayMonths !== t)
                  return { displayMonths: t };
              },
              disabled: (t) => {
                if (this._state.disabled !== t) return { disabled: t };
              },
              firstDayOfWeek: (t) => {
                if (
                  sg((t = eg(t))) &&
                  t >= 0 &&
                  this._state.firstDayOfWeek !== t
                )
                  return { firstDayOfWeek: t };
              },
              focusVisible: (t) => {
                if (this._state.focusVisible !== t && !this._state.disabled)
                  return { focusVisible: t };
              },
              markDisabled: (t) => {
                if (this._state.markDisabled !== t) return { markDisabled: t };
              },
              maxDate: (t) => {
                const e = this.toValidDate(t, null);
                if (vg(this._state.maxDate, e)) return { maxDate: e };
              },
              minDate: (t) => {
                const e = this.toValidDate(t, null);
                if (vg(this._state.minDate, e)) return { minDate: e };
              },
              navigation: (t) => {
                if (this._state.navigation !== t) return { navigation: t };
              },
              outsideDays: (t) => {
                if (this._state.outsideDays !== t) return { outsideDays: t };
              },
            }),
            (this._model$ = new x()),
            (this._dateSelect$ = new x()),
            (this._state = {
              disabled: !1,
              displayMonths: 1,
              firstDayOfWeek: 1,
              focusVisible: !1,
              months: [],
              navigation: 'select',
              outsideDays: 'visible',
              prevDisabled: !1,
              nextDisabled: !1,
              selectBoxes: { years: [], months: [] },
              selectedDate: null,
            });
        }
        get model$() {
          return this._model$.pipe(na((t) => t.months.length > 0));
        }
        get dateSelect$() {
          return this._dateSelect$.pipe(na((t) => null !== t));
        }
        set(t) {
          let e = Object.keys(t)
            .map((e) => this._VALIDATORS[e](t[e]))
            .reduce((t, e) => Object.assign({}, t, e), {});
          Object.keys(e).length > 0 && this._nextState(e);
        }
        focus(t) {
          !this._state.disabled &&
            this._calendar.isValid(t) &&
            vg(this._state.focusDate, t) &&
            this._nextState({ focusDate: t });
        }
        focusSelect() {
          Sg(this._state.focusDate, this._state) &&
            this.select(this._state.focusDate, { emitEvent: !0 });
        }
        open(t) {
          const e = this.toValidDate(t, this._calendar.getToday());
          this._state.disabled ||
            (this._state.firstDate && !bg(this._state.firstDate, t)) ||
            this._nextState({ firstDate: e });
        }
        select(t, e = {}) {
          const n = this.toValidDate(t, null);
          this._state.disabled ||
            (vg(this._state.selectedDate, n) &&
              this._nextState({ selectedDate: n }),
            e.emitEvent && Sg(n, this._state) && this._dateSelect$.next(n));
        }
        toValidDate(t, e) {
          const n = pg.from(t);
          return (
            void 0 === e && (e = this._calendar.getToday()),
            this._calendar.isValid(n) ? n : e
          );
        }
        getMonth(t) {
          for (let e of this._state.months)
            if (t.month === e.number && t.year === e.year) return e;
          throw new Error(`month ${t.month} of year ${t.year} not found`);
        }
        _nextState(t) {
          const e = this._updateState(t);
          this._patchContexts(e),
            (this._state = e),
            this._model$.next(this._state);
        }
        _patchContexts(t) {
          const {
            months: e,
            displayMonths: n,
            selectedDate: s,
            focusDate: i,
            focusVisible: r,
            disabled: o,
            outsideDays: a,
          } = t;
          t.months.forEach((t) => {
            t.weeks.forEach((l) => {
              l.days.forEach((l) => {
                i && (l.context.focused = i.equals(l.date) && r),
                  (l.tabindex =
                    !o && l.date.equals(i) && i.month === t.number ? 0 : -1),
                  !0 === o && (l.context.disabled = !0),
                  void 0 !== s &&
                    (l.context.selected = null !== s && s.equals(l.date)),
                  t.number !== l.date.month &&
                    (l.hidden =
                      'hidden' === a ||
                      'collapsed' === a ||
                      (n > 1 &&
                        l.date.after(e[0].firstDate) &&
                        l.date.before(e[n - 1].lastDate)));
              });
            });
          });
        }
        _updateState(t) {
          const e = Object.assign({}, this._state, t);
          let n = e.firstDate;
          if (
            (('minDate' in t || 'maxDate' in t) &&
              ((function (t, e) {
                if (e && t && e.before(t))
                  throw new Error(
                    `'maxDate' ${e} should be greater than 'minDate' ${t}`
                  );
              })(e.minDate, e.maxDate),
              (e.focusDate = wg(e.focusDate, e.minDate, e.maxDate)),
              (e.firstDate = wg(e.firstDate, e.minDate, e.maxDate)),
              (n = e.focusDate)),
            'disabled' in t && (e.focusVisible = !1),
            'selectedDate' in t &&
              0 === this._state.months.length &&
              (n = e.selectedDate),
            'focusVisible' in t)
          )
            return e;
          if (
            'focusDate' in t &&
            ((e.focusDate = wg(e.focusDate, e.minDate, e.maxDate)),
            (n = e.focusDate),
            0 !== e.months.length &&
              !e.focusDate.before(e.firstDate) &&
              !e.focusDate.after(e.lastDate))
          )
            return e;
          if (
            ('firstDate' in t &&
              ((e.firstDate = wg(e.firstDate, e.minDate, e.maxDate)),
              (n = e.firstDate)),
            n)
          ) {
            const s = (function (t, e, n, s, i) {
              const { displayMonths: r, months: o } = n,
                a = o.splice(0, o.length);
              return (
                Array.from({ length: r }, (n, s) => {
                  const r = Object.assign(t.getNext(e, 'm', s), { day: 1 });
                  if (((o[s] = null), !i)) {
                    const t = a.findIndex((t) => t.firstDate.equals(r));
                    -1 !== t && (o[s] = a.splice(t, 1)[0]);
                  }
                  return r;
                }).forEach((e, i) => {
                  null === o[i] &&
                    (o[i] = (function (t, e, n, s, i = {}) {
                      const {
                          dayTemplateData: r,
                          minDate: o,
                          maxDate: a,
                          firstDayOfWeek: l,
                          markDisabled: c,
                          outsideDays: h,
                        } = n,
                        u = t.getToday();
                      (i.firstDate = null),
                        (i.lastDate = null),
                        (i.number = e.month),
                        (i.year = e.year),
                        (i.weeks = i.weeks || []),
                        (i.weekdays = i.weekdays || []),
                        (e = (function (t, e, n) {
                          const s = t.getDaysPerWeek(),
                            i = new pg(e.year, e.month, 1),
                            r = t.getWeekday(i) % s;
                          return t.getPrev(i, 'd', (s + r - n) % s);
                        })(t, e, l));
                      for (let d = 0; d < t.getWeeksPerMonth(); d++) {
                        let n = i.weeks[d];
                        n ||
                          (n = i.weeks[d] = {
                            number: 0,
                            days: [],
                            collapsed: !0,
                          });
                        const p = n.days;
                        for (let l = 0; l < t.getDaysPerWeek(); l++) {
                          0 === d && (i.weekdays[l] = t.getWeekday(e));
                          const n = new pg(e.year, e.month, e.day),
                            h = t.getNext(n),
                            f = s.getDayAriaLabel(n);
                          let m = !!((o && n.before(o)) || (a && n.after(a)));
                          !m &&
                            c &&
                            (m = c(n, { month: i.number, year: i.year }));
                          let g = n.equals(u),
                            y = r
                              ? r(n, { month: i.number, year: i.year })
                              : void 0;
                          null === i.firstDate &&
                            n.month === i.number &&
                            (i.firstDate = n),
                            n.month === i.number &&
                              h.month !== i.number &&
                              (i.lastDate = n);
                          let _ = p[l];
                          _ || (_ = p[l] = {}),
                            (_.date = n),
                            (_.context = Object.assign(_.context || {}, {
                              $implicit: n,
                              date: n,
                              data: y,
                              currentMonth: i.number,
                              currentYear: i.year,
                              disabled: m,
                              focused: !1,
                              selected: !1,
                              today: g,
                            })),
                            (_.tabindex = -1),
                            (_.ariaLabel = f),
                            (_.hidden = !1),
                            (e = h);
                        }
                        (n.number = t.getWeekNumber(
                          p.map((t) => t.date),
                          l
                        )),
                          (n.collapsed =
                            'collapsed' === h &&
                            p[0].date.month !== i.number &&
                            p[p.length - 1].date.month !== i.number);
                      }
                      return i;
                    })(t, e, n, s, a.shift() || {}));
                }),
                o
              );
            })(
              this._calendar,
              n,
              e,
              this._i18n,
              'dayTemplateData' in t ||
                'firstDayOfWeek' in t ||
                'markDisabled' in t ||
                'minDate' in t ||
                'maxDate' in t ||
                'disabled' in t ||
                'outsideDays' in t
            );
            (e.months = s),
              (e.firstDate = s.length > 0 ? s[0].firstDate : void 0),
              (e.lastDate = s.length > 0 ? s[s.length - 1].lastDate : void 0),
              'selectedDate' in t &&
                !Sg(e.selectedDate, e) &&
                (e.selectedDate = null),
              'firstDate' in t &&
                (void 0 === e.focusDate ||
                  e.focusDate.before(e.firstDate) ||
                  e.focusDate.after(e.lastDate)) &&
                (e.focusDate = n);
            const i =
                !this._state.firstDate ||
                this._state.firstDate.year !== e.firstDate.year,
              r =
                !this._state.firstDate ||
                this._state.firstDate.month !== e.firstDate.month;
            'select' === e.navigation
              ? (('minDate' in t ||
                  'maxDate' in t ||
                  0 === e.selectBoxes.years.length ||
                  i) &&
                  (e.selectBoxes.years = (function (t, e, n) {
                    if (!t) return [];
                    const s = e ? Math.max(e.year, t.year - 500) : t.year - 10,
                      i =
                        (n ? Math.min(n.year, t.year + 500) : t.year + 10) -
                        s +
                        1,
                      r = Array(i);
                    for (let o = 0; o < i; o++) r[o] = s + o;
                    return r;
                  })(e.firstDate, e.minDate, e.maxDate)),
                ('minDate' in t ||
                  'maxDate' in t ||
                  0 === e.selectBoxes.months.length ||
                  i) &&
                  (e.selectBoxes.months = (function (t, e, n, s) {
                    if (!e) return [];
                    let i = t.getMonths(e.year);
                    if (n && e.year === n.year) {
                      const t = i.findIndex((t) => t === n.month);
                      i = i.slice(t);
                    }
                    if (s && e.year === s.year) {
                      const t = i.findIndex((t) => t === s.month);
                      i = i.slice(0, t + 1);
                    }
                    return i;
                  })(this._calendar, e.firstDate, e.minDate, e.maxDate)))
              : (e.selectBoxes = { years: [], months: [] }),
              ('arrows' !== e.navigation && 'select' !== e.navigation) ||
                !(
                  r ||
                  i ||
                  'minDate' in t ||
                  'maxDate' in t ||
                  'disabled' in t
                ) ||
                ((e.prevDisabled =
                  e.disabled ||
                  (function (t, e, n) {
                    const s = Object.assign(t.getPrev(e, 'm'), { day: 1 });
                    return (
                      n &&
                      ((s.year === n.year && s.month < n.month) ||
                        (s.year < n.year && 1 === n.month))
                    );
                  })(this._calendar, e.firstDate, e.minDate)),
                (e.nextDisabled =
                  e.disabled ||
                  (function (t, e, n) {
                    const s = Object.assign(t.getNext(e, 'm'), { day: 1 });
                    return n && s.after(n);
                  })(this._calendar, e.lastDate, e.maxDate)));
          }
          return e;
        }
      }
      const Tg = (function () {
        var t = { PREV: 0, NEXT: 1 };
        return (t[t.PREV] = 'PREV'), (t[t.NEXT] = 'NEXT'), t;
      })();
      let kg = (() => {
        class t {
          constructor() {
            (this.displayMonths = 1),
              (this.firstDayOfWeek = 1),
              (this.navigation = 'select'),
              (this.outsideDays = 'visible'),
              (this.showWeekdays = !0),
              (this.showWeekNumbers = !1);
          }
        }
        return (
          (t.ngInjectableDef = lt({
            factory: function () {
              return new t();
            },
            token: t,
            providedIn: 'root',
          })),
          t
        );
      })();
      function Dg() {
        return new Ag();
      }
      let Rg = (() => {
        class t {}
        return (
          (t.ngInjectableDef = lt({
            factory: Dg,
            token: t,
            providedIn: 'root',
          })),
          t
        );
      })();
      class Ag extends Rg {
        fromModel(t) {
          return t && sg(t.year) && sg(t.month) && sg(t.day)
            ? { year: t.year, month: t.month, day: t.day }
            : null;
        }
        toModel(t) {
          return t && sg(t.year) && sg(t.month) && sg(t.day)
            ? { year: t.year, month: t.month, day: t.day }
            : null;
        }
      }
      class Ig {
        constructor(t, e, n, s, i, r, o, a) {
          (this._service = t),
            (this._calendar = e),
            (this.i18n = n),
            (this._elementRef = r),
            (this._ngbDateAdapter = o),
            (this._ngZone = a),
            (this._destroyed$ = new x()),
            (this._publicState = {}),
            (this.navigate = new fi()),
            (this.dateSelect = new fi()),
            (this.select = this.dateSelect),
            (this.onChange = (t) => {}),
            (this.onTouched = () => {}),
            [
              'dayTemplate',
              'dayTemplateData',
              'displayMonths',
              'firstDayOfWeek',
              'footerTemplate',
              'markDisabled',
              'minDate',
              'maxDate',
              'navigation',
              'outsideDays',
              'showWeekdays',
              'showWeekNumbers',
              'startDate',
            ].forEach((t) => (this[t] = s[t])),
            t.dateSelect$.pipe(Mf(this._destroyed$)).subscribe((t) => {
              this.dateSelect.emit(t);
            }),
            t.model$.pipe(Mf(this._destroyed$)).subscribe((t) => {
              const e = t.firstDate,
                n = this.model ? this.model.firstDate : null;
              this._publicState = {
                maxDate: t.maxDate,
                minDate: t.minDate,
                firstDate: t.firstDate,
                lastDate: t.lastDate,
                focusedDate: t.focusDate,
                months: t.months.map((t) => t.firstDate),
              };
              let s = !1;
              if (
                !e.equals(n) &&
                (this.navigate.emit({
                  current: n ? { year: n.year, month: n.month } : null,
                  next: { year: e.year, month: e.month },
                  preventDefault: () => (s = !0),
                }),
                s && null !== n)
              )
                return void this._service.open(n);
              const r = t.selectedDate,
                o = t.focusDate,
                a = this.model ? this.model.focusDate : null;
              (this.model = t),
                vg(r, this._controlValue) &&
                  ((this._controlValue = r),
                  this.onTouched(),
                  this.onChange(this._ngbDateAdapter.toModel(r))),
                vg(o, a) && a && t.focusVisible && this.focus(),
                i.markForCheck();
            });
        }
        get state() {
          return this._publicState;
        }
        get calendar() {
          return this._calendar;
        }
        focusDate(t) {
          this._service.focus(pg.from(t));
        }
        focusSelect() {
          this._service.focusSelect();
        }
        focus() {
          this._ngZone.onStable
            .asObservable()
            .pipe(mc(1))
            .subscribe(() => {
              const t = this._elementRef.nativeElement.querySelector(
                'div.ngb-dp-day[tabindex="0"]'
              );
              t && t.focus();
            });
        }
        navigateTo(t) {
          this._service.open(
            pg.from(t ? (t.day ? t : Object.assign({}, t, { day: 1 })) : null)
          );
        }
        ngAfterViewInit() {
          this._ngZone.runOutsideAngular(() => {
            const t = Cf(this._contentEl.nativeElement, 'focusin'),
              e = Cf(this._contentEl.nativeElement, 'focusout'),
              { nativeElement: n } = this._elementRef;
            K(t, e)
              .pipe(
                na(
                  ({ target: t, relatedTarget: e }) =>
                    !(
                      rg(t, 'ngb-dp-day') &&
                      rg(e, 'ngb-dp-day') &&
                      n.contains(t) &&
                      n.contains(e)
                    )
                ),
                Mf(this._destroyed$)
              )
              .subscribe(({ type: t }) =>
                this._ngZone.run(() =>
                  this._service.set({ focusVisible: 'focusin' === t })
                )
              );
          });
        }
        ngOnDestroy() {
          this._destroyed$.next();
        }
        ngOnInit() {
          if (void 0 === this.model) {
            const t = {};
            [
              'dayTemplateData',
              'displayMonths',
              'markDisabled',
              'firstDayOfWeek',
              'navigation',
              'minDate',
              'maxDate',
              'outsideDays',
            ].forEach((e) => (t[e] = this[e])),
              this._service.set(t),
              this.navigateTo(this.startDate);
          }
          this.dayTemplate || (this.dayTemplate = this._defaultDayTemplate);
        }
        ngOnChanges(t) {
          const e = {};
          if (
            ([
              'dayTemplateData',
              'displayMonths',
              'markDisabled',
              'firstDayOfWeek',
              'navigation',
              'minDate',
              'maxDate',
              'outsideDays',
            ]
              .filter((e) => e in t)
              .forEach((t) => (e[t] = this[t])),
            this._service.set(e),
            'startDate' in t)
          ) {
            const { currentValue: e, previousValue: n } = t.startDate;
            bg(n, e) && this.navigateTo(this.startDate);
          }
        }
        onDateSelect(t) {
          this._service.focus(t), this._service.select(t, { emitEvent: !0 });
        }
        onNavigateDateSelect(t) {
          this._service.open(t);
        }
        onNavigateEvent(t) {
          switch (t) {
            case Tg.PREV:
              this._service.open(
                this._calendar.getPrev(this.model.firstDate, 'm', 1)
              );
              break;
            case Tg.NEXT:
              this._service.open(
                this._calendar.getNext(this.model.firstDate, 'm', 1)
              );
          }
        }
        registerOnChange(t) {
          this.onChange = t;
        }
        registerOnTouched(t) {
          this.onTouched = t;
        }
        setDisabledState(t) {
          this._service.set({ disabled: t });
        }
        writeValue(t) {
          (this._controlValue = pg.from(this._ngbDateAdapter.fromModel(t))),
            this._service.select(this._controlValue);
        }
      }
      const Og = (function () {
        var t = {
          Tab: 9,
          Enter: 13,
          Escape: 27,
          Space: 32,
          PageUp: 33,
          PageDown: 34,
          End: 35,
          Home: 36,
          ArrowLeft: 37,
          ArrowUp: 38,
          ArrowRight: 39,
          ArrowDown: 40,
        };
        return (
          (t[t.Tab] = 'Tab'),
          (t[t.Enter] = 'Enter'),
          (t[t.Escape] = 'Escape'),
          (t[t.Space] = 'Space'),
          (t[t.PageUp] = 'PageUp'),
          (t[t.PageDown] = 'PageDown'),
          (t[t.End] = 'End'),
          (t[t.Home] = 'Home'),
          (t[t.ArrowLeft] = 'ArrowLeft'),
          (t[t.ArrowUp] = 'ArrowUp'),
          (t[t.ArrowRight] = 'ArrowRight'),
          (t[t.ArrowDown] = 'ArrowDown'),
          t
        );
      })();
      let Pg = (() => {
        class t {
          processKey(t, e) {
            const { state: n, calendar: s } = e;
            switch (t.which) {
              case Og.PageUp:
                e.focusDate(
                  s.getPrev(n.focusedDate, t.shiftKey ? 'y' : 'm', 1)
                );
                break;
              case Og.PageDown:
                e.focusDate(
                  s.getNext(n.focusedDate, t.shiftKey ? 'y' : 'm', 1)
                );
                break;
              case Og.End:
                e.focusDate(t.shiftKey ? n.maxDate : n.lastDate);
                break;
              case Og.Home:
                e.focusDate(t.shiftKey ? n.minDate : n.firstDate);
                break;
              case Og.ArrowLeft:
                e.focusDate(s.getPrev(n.focusedDate, 'd', 1));
                break;
              case Og.ArrowUp:
                e.focusDate(s.getPrev(n.focusedDate, 'd', s.getDaysPerWeek()));
                break;
              case Og.ArrowRight:
                e.focusDate(s.getNext(n.focusedDate, 'd', 1));
                break;
              case Og.ArrowDown:
                e.focusDate(s.getNext(n.focusedDate, 'd', s.getDaysPerWeek()));
                break;
              case Og.Enter:
              case Og.Space:
                e.focusSelect();
                break;
              default:
                return;
            }
            t.preventDefault(), t.stopPropagation();
          }
        }
        return (
          (t.ngInjectableDef = lt({
            factory: function () {
              return new t();
            },
            token: t,
            providedIn: 'root',
          })),
          t
        );
      })();
      class Ng {
        constructor(t, e, n, s) {
          (this.i18n = t),
            (this.datepicker = e),
            (this._keyboardService = n),
            (this._service = s);
        }
        set month(t) {
          this.viewModel = this._service.getMonth(t);
        }
        onKeyDown(t) {
          this._keyboardService.processKey(t, this.datepicker);
        }
        doSelect(t) {
          t.context.disabled ||
            t.hidden ||
            this.datepicker.onDateSelect(t.date);
        }
      }
      class Mg {
        constructor(t) {
          (this.i18n = t),
            (this.navigation = Tg),
            (this.months = []),
            (this.navigate = new fi()),
            (this.select = new fi());
        }
        onClickPrev(t) {
          t.currentTarget.focus(), this.navigate.emit(this.navigation.PREV);
        }
        onClickNext(t) {
          t.currentTarget.focus(), this.navigate.emit(this.navigation.NEXT);
        }
      }
      const Fg = [
        'a[href]',
        'button:not([disabled])',
        'input:not([disabled]):not([type="hidden"])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        '[contenteditable]',
        '[tabindex]:not([tabindex="-1"])',
      ].join(', ');
      function Lg(t) {
        const e = Array.from(t.querySelectorAll(Fg)).filter(
          (t) => -1 !== t.tabIndex
        );
        return [e[0], e[e.length - 1]];
      }
      class jg {
        constructor(t) {
          this.i18n = t;
        }
        isMuted() {
          return (
            !this.selected &&
            (this.date.month !== this.currentMonth || this.disabled)
          );
        }
      }
      class Vg {
        constructor(t, e) {
          (this.i18n = t),
            (this._renderer = e),
            (this.select = new fi()),
            (this._month = -1),
            (this._year = -1);
        }
        changeMonth(t) {
          this.select.emit(new pg(this.date.year, eg(t), 1));
        }
        changeYear(t) {
          this.select.emit(new pg(eg(t), this.date.month, 1));
        }
        ngAfterViewChecked() {
          this.date &&
            (this.date.month !== this._month &&
              ((this._month = this.date.month),
              this._renderer.setProperty(
                this.monthSelect.nativeElement,
                'value',
                this._month
              )),
            this.date.year !== this._year &&
              ((this._year = this.date.year),
              this._renderer.setProperty(
                this.yearSelect.nativeElement,
                'value',
                this._year
              )));
        }
      }
      class Hg {}
      class Bg {}
      let Ug = (() => {
        class t {
          constructor() {
            (this.backdrop = !0), (this.keyboard = !0);
          }
        }
        return (
          (t.ngInjectableDef = lt({
            factory: function () {
              return new t();
            },
            token: t,
            providedIn: 'root',
          })),
          t
        );
      })();
      class $g {
        constructor(t, e, n) {
          (this.nodes = t), (this.viewRef = e), (this.componentRef = n);
        }
      }
      const zg = () => {};
      let Wg = (() => {
        class t {
          constructor(t) {
            this._document = t;
          }
          compensate() {
            const t = this._getWidth();
            return this._isPresent(t) ? this._adjustBody(t) : zg;
          }
          _adjustBody(t) {
            const e = this._document.body,
              n = e.style.paddingRight,
              s = parseFloat(window.getComputedStyle(e)['padding-right']);
            return (
              (e.style['padding-right'] = s + t + 'px'),
              () => (e.style['padding-right'] = n)
            );
          }
          _isPresent(t) {
            const e = this._document.body.getBoundingClientRect();
            return window.innerWidth - (e.left + e.right) >= t - 0.1 * t;
          }
          _getWidth() {
            const t = this._document.createElement('div');
            t.className = 'modal-scrollbar-measure';
            const e = this._document.body;
            e.appendChild(t);
            const n = t.getBoundingClientRect().width - t.clientWidth;
            return e.removeChild(t), n;
          }
        }
        return (
          (t.ngInjectableDef = lt({
            factory: function () {
              return new t(Dt(tl));
            },
            token: t,
            providedIn: 'root',
          })),
          t
        );
      })();
      class qg {}
      class Kg {
        close(t) {}
        dismiss(t) {}
      }
      class Zg {
        constructor(t, e, n, s) {
          (this._windowCmptRef = t),
            (this._contentRef = e),
            (this._backdropCmptRef = n),
            (this._beforeDismiss = s),
            t.instance.dismissEvent.subscribe((t) => {
              this.dismiss(t);
            }),
            (this.result = new Promise((t, e) => {
              (this._resolve = t), (this._reject = e);
            })),
            this.result.then(null, () => {});
        }
        get componentInstance() {
          if (this._contentRef && this._contentRef.componentRef)
            return this._contentRef.componentRef.instance;
        }
        close(t) {
          this._windowCmptRef &&
            (this._resolve(t), this._removeModalElements());
        }
        _dismiss(t) {
          this._reject(t), this._removeModalElements();
        }
        dismiss(t) {
          if (this._windowCmptRef)
            if (this._beforeDismiss) {
              const e = this._beforeDismiss();
              e && e.then
                ? e.then(
                    (e) => {
                      !1 !== e && this._dismiss(t);
                    },
                    () => {}
                  )
                : !1 !== e && this._dismiss(t);
            } else this._dismiss(t);
        }
        _removeModalElements() {
          const t = this._windowCmptRef.location.nativeElement;
          if (
            (t.parentNode.removeChild(t),
            this._windowCmptRef.destroy(),
            this._backdropCmptRef)
          ) {
            const t = this._backdropCmptRef.location.nativeElement;
            t.parentNode.removeChild(t), this._backdropCmptRef.destroy();
          }
          this._contentRef &&
            this._contentRef.viewRef &&
            this._contentRef.viewRef.destroy(),
            (this._windowCmptRef = null),
            (this._backdropCmptRef = null),
            (this._contentRef = null);
        }
      }
      const Gg = (function () {
        var t = { BACKDROP_CLICK: 0, ESC: 1 };
        return (t[t.BACKDROP_CLICK] = 'BACKDROP_CLICK'), (t[t.ESC] = 'ESC'), t;
      })();
      class Qg {
        constructor(t, e, n) {
          (this._document = t),
            (this._elRef = e),
            (this._zone = n),
            (this._closed$ = new x()),
            (this.backdrop = !0),
            (this.keyboard = !0),
            (this.dismissEvent = new fi());
        }
        dismiss(t) {
          this.dismissEvent.emit(t);
        }
        ngOnInit() {
          this._elWithFocus = this._document.activeElement;
        }
        ngAfterViewInit() {
          const { nativeElement: t } = this._elRef;
          if (
            (this._zone.runOutsideAngular(() => {
              Cf(t, 'keydown')
                .pipe(
                  Mf(this._closed$),
                  na((t) => t.which === Og.Escape && this.keyboard)
                )
                .subscribe((t) =>
                  requestAnimationFrame(() => {
                    t.defaultPrevented ||
                      this._zone.run(() => this.dismiss(Gg.ESC));
                  })
                );
              let e = !1;
              Cf(this._dialogEl.nativeElement, 'mousedown')
                .pipe(
                  Mf(this._closed$),
                  Ac(() => (e = !1)),
                  wc(() => Cf(t, 'mouseup').pipe(Mf(this._closed$), mc(1))),
                  na(({ target: e }) => t === e)
                )
                .subscribe(() => {
                  e = !0;
                }),
                Cf(t, 'click')
                  .pipe(Mf(this._closed$))
                  .subscribe(({ target: n }) => {
                    !0 !== this.backdrop ||
                      t !== n ||
                      e ||
                      this._zone.run(() => this.dismiss(Gg.BACKDROP_CLICK)),
                      (e = !1);
                  });
            }),
            !t.contains(document.activeElement))
          ) {
            const e = t.querySelector('[ngbAutofocus]'),
              n = Lg(t)[0];
            (e || n || t).focus();
          }
        }
        ngOnDestroy() {
          const t = this._document.body,
            e = this._elWithFocus;
          let n;
          (n = e && e.focus && t.contains(e) ? e : t),
            this._zone.runOutsideAngular(() => {
              setTimeout(() => n.focus()), (this._elWithFocus = null);
            }),
            this._closed$.next();
        }
      }
      let Yg = (() => {
          class t {
            constructor(t, e, n, s, i, r) {
              (this._applicationRef = t),
                (this._injector = e),
                (this._document = n),
                (this._scrollBar = s),
                (this._rendererFactory = i),
                (this._ngZone = r),
                (this._activeWindowCmptHasChanged = new x()),
                (this._ariaHiddenValues = new Map()),
                (this._backdropAttributes = ['backdropClass']),
                (this._modalRefs = []),
                (this._windowAttributes = [
                  'ariaLabelledBy',
                  'backdrop',
                  'centered',
                  'keyboard',
                  'scrollable',
                  'size',
                  'windowClass',
                ]),
                (this._windowCmpts = []),
                this._activeWindowCmptHasChanged.subscribe(() => {
                  if (this._windowCmpts.length) {
                    const t = this._windowCmpts[this._windowCmpts.length - 1];
                    ((t, e, n, s = !1) => {
                      this._ngZone.runOutsideAngular(() => {
                        const t = Cf(e, 'focusin').pipe(
                          Mf(n),
                          D((t) => t.target)
                        );
                        Cf(e, 'keydown')
                          .pipe(
                            Mf(n),
                            na((t) => t.which === Og.Tab),
                            Xm(t)
                          )
                          .subscribe(([t, n]) => {
                            const [s, i] = Lg(e);
                            (n !== s && n !== e) ||
                              !t.shiftKey ||
                              (i.focus(), t.preventDefault()),
                              n !== i ||
                                t.shiftKey ||
                                (s.focus(), t.preventDefault());
                          }),
                          s &&
                            Cf(e, 'click')
                              .pipe(
                                Mf(n),
                                Xm(t),
                                D((t) => t[1])
                              )
                              .subscribe((t) => t.focus());
                      });
                    })(
                      0,
                      t.location.nativeElement,
                      this._activeWindowCmptHasChanged
                    ),
                      this._revertAriaHidden(),
                      this._setAriaHidden(t.location.nativeElement);
                  }
                });
            }
            open(t, e, n, s) {
              const i =
                  s.container instanceof HTMLElement
                    ? s.container
                    : ig(s.container)
                    ? this._document.querySelector(s.container)
                    : this._document.body,
                r = this._rendererFactory.createRenderer(null, null),
                o = this._scrollBar.compensate(),
                a = () => {
                  this._modalRefs.length ||
                    (r.removeClass(this._document.body, 'modal-open'),
                    this._revertAriaHidden());
                };
              if (!i)
                throw new Error(
                  `The specified modal container "${
                    s.container || 'body'
                  }" was not found in the DOM.`
                );
              const l = new Kg(),
                c = this._getContentRef(t, s.injector || e, n, l, s);
              let h = !1 !== s.backdrop ? this._attachBackdrop(t, i) : null,
                u = this._attachWindowComponent(t, i, c),
                d = new Zg(u, c, h, s.beforeDismiss);
              return (
                this._registerModalRef(d),
                this._registerWindowCmpt(u),
                d.result.then(o, o),
                d.result.then(a, a),
                (l.close = (t) => {
                  d.close(t);
                }),
                (l.dismiss = (t) => {
                  d.dismiss(t);
                }),
                this._applyWindowOptions(u.instance, s),
                1 === this._modalRefs.length &&
                  r.addClass(this._document.body, 'modal-open'),
                h && h.instance && this._applyBackdropOptions(h.instance, s),
                d
              );
            }
            dismissAll(t) {
              this._modalRefs.forEach((e) => e.dismiss(t));
            }
            hasOpenModals() {
              return this._modalRefs.length > 0;
            }
            _attachBackdrop(t, e) {
              let n = t.resolveComponentFactory(qg).create(this._injector);
              return (
                this._applicationRef.attachView(n.hostView),
                e.appendChild(n.location.nativeElement),
                n
              );
            }
            _attachWindowComponent(t, e, n) {
              let s = t
                .resolveComponentFactory(Qg)
                .create(this._injector, n.nodes);
              return (
                this._applicationRef.attachView(s.hostView),
                e.appendChild(s.location.nativeElement),
                s
              );
            }
            _applyWindowOptions(t, e) {
              this._windowAttributes.forEach((n) => {
                ig(e[n]) && (t[n] = e[n]);
              });
            }
            _applyBackdropOptions(t, e) {
              this._backdropAttributes.forEach((n) => {
                ig(e[n]) && (t[n] = e[n]);
              });
            }
            _getContentRef(t, e, n, s, i) {
              return n
                ? n instanceof bn
                  ? this._createFromTemplateRef(n, s)
                  : 'string' == typeof n
                  ? this._createFromString(n)
                  : this._createFromComponent(t, e, n, s, i)
                : new $g([]);
            }
            _createFromTemplateRef(t, e) {
              const n = t.createEmbeddedView({
                $implicit: e,
                close(t) {
                  e.close(t);
                },
                dismiss(t) {
                  e.dismiss(t);
                },
              });
              return (
                this._applicationRef.attachView(n), new $g([n.rootNodes], n)
              );
            }
            _createFromString(t) {
              const e = this._document.createTextNode('' + t);
              return new $g([[e]]);
            }
            _createFromComponent(t, e, n, s, i) {
              const r = t.resolveComponentFactory(n),
                o = Se.create({
                  providers: [{ provide: Kg, useValue: s }],
                  parent: e,
                }),
                a = r.create(o),
                l = a.location.nativeElement;
              return (
                i.scrollable && l.classList.add('component-host-scrollable'),
                this._applicationRef.attachView(a.hostView),
                new $g([[l]], a.hostView, a)
              );
            }
            _setAriaHidden(t) {
              const e = t.parentElement;
              e &&
                t !== this._document.body &&
                (Array.from(e.children).forEach((e) => {
                  e !== t &&
                    'SCRIPT' !== e.nodeName &&
                    (this._ariaHiddenValues.set(
                      e,
                      e.getAttribute('aria-hidden')
                    ),
                    e.setAttribute('aria-hidden', 'true'));
                }),
                this._setAriaHidden(e));
            }
            _revertAriaHidden() {
              this._ariaHiddenValues.forEach((t, e) => {
                t
                  ? e.setAttribute('aria-hidden', t)
                  : e.removeAttribute('aria-hidden');
              }),
                this._ariaHiddenValues.clear();
            }
            _registerModalRef(t) {
              const e = () => {
                const e = this._modalRefs.indexOf(t);
                e > -1 && this._modalRefs.splice(e, 1);
              };
              this._modalRefs.push(t), t.result.then(e, e);
            }
            _registerWindowCmpt(t) {
              this._windowCmpts.push(t),
                this._activeWindowCmptHasChanged.next(),
                t.onDestroy(() => {
                  const e = this._windowCmpts.indexOf(t);
                  e > -1 &&
                    (this._windowCmpts.splice(e, 1),
                    this._activeWindowCmptHasChanged.next());
                });
            }
          }
          return (
            (t.ngInjectableDef = lt({
              factory: function () {
                return new t(Dt(ar), Dt(St), Dt(tl), Dt(Wg), Dt(Xe), Dt($i));
              },
              token: t,
              providedIn: 'root',
            })),
            t
          );
        })(),
        Xg = (() => {
          class t {
            constructor(t, e, n, s) {
              (this._moduleCFR = t),
                (this._injector = e),
                (this._modalStack = n),
                (this._config = s);
            }
            open(t, e = {}) {
              const n = Object.assign({}, this._config, e);
              return this._modalStack.open(
                this._moduleCFR,
                this._injector,
                t,
                n
              );
            }
            dismissAll(t) {
              this._modalStack.dismissAll(t);
            }
            hasOpenModals() {
              return this._modalStack.hasOpenModals();
            }
          }
          return (
            (t.ngInjectableDef = lt({
              factory: function () {
                return new t(Dt(We), Dt(St), Dt(Yg), Dt(Ug));
              },
              token: t,
              providedIn: 'root',
            })),
            t
          );
        })();
      class Jg {}
      class ty {}
      class ey {}
      class ny {
        isTitleTemplate() {
          return this.title instanceof bn;
        }
      }
      class sy {}
      class iy {}
      class ry {}
      class oy {}
      class ay {}
      class ly {}
      class cy {}
      class hy {}
      class uy {
        constructor() {
          this.highlightClass = 'ngb-highlight';
        }
        ngOnChanges(t) {
          const e = ng(this.result),
            n = (Array.isArray(this.term) ? this.term : [this.term])
              .map((t) => ng(t).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'))
              .filter((t) => t);
          this.parts = n.length
            ? e.split(new RegExp(`(${n.join('|')})`, 'gmi'))
            : [e];
        }
      }
      class dy {
        constructor() {
          (this.activeIdx = 0),
            (this.focusFirst = !0),
            (this.formatter = ng),
            (this.selectEvent = new fi()),
            (this.activeChangeEvent = new fi());
        }
        hasActive() {
          return this.activeIdx > -1 && this.activeIdx < this.results.length;
        }
        getActive() {
          return this.results[this.activeIdx];
        }
        markActive(t) {
          (this.activeIdx = t), this._activeChanged();
        }
        next() {
          this.activeIdx === this.results.length - 1
            ? (this.activeIdx = this.focusFirst
                ? (this.activeIdx + 1) % this.results.length
                : -1)
            : this.activeIdx++,
            this._activeChanged();
        }
        prev() {
          this.activeIdx < 0
            ? (this.activeIdx = this.results.length - 1)
            : 0 === this.activeIdx
            ? (this.activeIdx = this.focusFirst ? this.results.length - 1 : -1)
            : this.activeIdx--,
            this._activeChanged();
        }
        resetActive() {
          (this.activeIdx = this.focusFirst ? 0 : -1), this._activeChanged();
        }
        select(t) {
          this.selectEvent.emit(t);
        }
        ngOnInit() {
          this.resetActive();
        }
        _activeChanged() {
          this.activeChangeEvent.emit(
            this.activeIdx >= 0 ? this.id + '-' + this.activeIdx : void 0
          );
        }
      }
      class py {}
      class fy {}
      var my = jn({
        encapsulation: 2,
        styles: ['ngb-alert{display:block}'],
        data: {},
      });
      function gy(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              2,
              'button',
              [
                ['aria-label', 'Close'],
                ['class', 'close'],
                ['type', 'button'],
              ],
              null,
              [[null, 'click']],
              function (t, e, n) {
                var s = !0;
                return (
                  'click' === e && (s = !1 !== t.component.closeHandler() && s),
                  s
                );
              },
              null,
              null
            )),
            (t()(),
            kr(
              1,
              0,
              null,
              null,
              1,
              'span',
              [['aria-hidden', 'true']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Hr(-1, null, ['\xd7'])),
          ],
          null,
          null
        );
      }
      function yy(t) {
        return $r(
          2,
          [
            Lr(null, 0),
            (t()(), Tr(16777216, null, null, 1, null, gy)),
            qs(2, 16384, null, 0, Ga, [Sn, bn], { ngIf: [0, 'ngIf'] }, null),
          ],
          function (t, e) {
            t(e, 2, 0, e.component.dismissible);
          },
          null
        );
      }
      function _y(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              1,
              'ngb-alert',
              [
                ['class', 'alert'],
                ['role', 'alert'],
              ],
              [[2, 'alert-dismissible', null]],
              null,
              null,
              yy,
              my
            )),
            qs(1, 638976, null, 0, lg, [ag, tn, Ge], null, null),
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          function (t, e) {
            t(e, 0, 0, Ps(e, 1).dismissible);
          }
        );
      }
      var vy = Ss(
          'ngb-alert',
          lg,
          _y,
          { dismissible: 'dismissible', type: 'type' },
          { close: 'close' },
          ['*']
        ),
        by = jn({
          encapsulation: 2,
          styles: [
            '[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:0 0}[ngbDatepickerDayView].outside{opacity:.5}',
          ],
          data: {},
        });
      function wy(t) {
        return $r(2, [(t()(), Hr(0, null, ['', '']))], null, function (t, e) {
          var n = e.component;
          t(e, 0, 0, n.i18n.getDayNumerals(n.date));
        });
      }
      var Sy = jn({
        encapsulation: 2,
        styles: [
          'ngb-datepicker-navigation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.right .ngb-dp-navigation-chevron{-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow.right{-ms-flex-pack:end;justify-content:flex-end}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:-ms-flexbox;display:flex;-ms-flex:1 1 9rem;flex:1 1 9rem}',
        ],
        data: {},
      });
      function Ey(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              1,
              'ngb-datepicker-navigation-select',
              [['class', 'ngb-dp-navigation-select']],
              null,
              [[null, 'select']],
              function (t, e, n) {
                var s = !0;
                return (
                  'select' === e &&
                    (s = !1 !== t.component.select.emit(n) && s),
                  s
                );
              },
              Oy,
              Ry
            )),
            qs(
              1,
              8437760,
              null,
              0,
              Vg,
              [Eg, tn],
              {
                date: [0, 'date'],
                disabled: [1, 'disabled'],
                months: [2, 'months'],
                years: [3, 'years'],
              },
              { select: 'select' }
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              n.date,
              n.disabled,
              n.selectBoxes.months,
              n.selectBoxes.years
            );
          },
          null
        );
      }
      function Cy(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'ngb-dp-arrow']],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function xy(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'ngb-dp-arrow']],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function Ty(t) {
        return $r(
          0,
          [
            (t()(), Tr(16777216, null, null, 1, null, Cy)),
            qs(1, 16384, null, 0, Ga, [Sn, bn], { ngIf: [0, 'ngIf'] }, null),
            (t()(),
            kr(
              2,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'ngb-dp-month-name']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Hr(3, null, [' ', ' ', ' '])),
            (t()(), Tr(16777216, null, null, 1, null, xy)),
            qs(5, 16384, null, 0, Ga, [Sn, bn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Tr(0, null, null, 0)),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, e.context.index > 0),
              t(e, 5, 0, e.context.index !== n.months.length - 1);
          },
          function (t, e) {
            var n = e.component;
            t(
              e,
              3,
              0,
              n.i18n.getMonthFullName(
                e.context.$implicit.number,
                e.context.$implicit.year
              ),
              n.i18n.getYearNumerals(e.context.$implicit.year)
            );
          }
        );
      }
      function ky(t) {
        return $r(
          0,
          [
            (t()(), Tr(16777216, null, null, 1, null, Ty)),
            qs(
              1,
              278528,
              null,
              0,
              Ka,
              [Sn, bn, mn],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (t()(), Tr(0, null, null, 0)),
          ],
          function (t, e) {
            t(e, 1, 0, e.component.months);
          },
          null
        );
      }
      function Dy(t) {
        return $r(
          2,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'ngb-dp-arrow']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            kr(
              1,
              0,
              null,
              null,
              1,
              'button',
              [
                ['aria-label', 'Previous month'],
                ['class', 'btn btn-link ngb-dp-arrow-btn'],
                ['title', 'Previous month'],
                ['type', 'button'],
              ],
              [[8, 'disabled', 0]],
              [[null, 'click']],
              function (t, e, n) {
                var s = !0;
                return (
                  'click' === e && (s = !1 !== t.component.onClickPrev(n) && s),
                  s
                );
              },
              null,
              null
            )),
            (t()(),
            kr(
              2,
              0,
              null,
              null,
              0,
              'span',
              [['class', 'ngb-dp-navigation-chevron']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Tr(16777216, null, null, 1, null, Ey)),
            qs(4, 16384, null, 0, Ga, [Sn, bn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Tr(16777216, null, null, 1, null, ky)),
            qs(6, 16384, null, 0, Ga, [Sn, bn], { ngIf: [0, 'ngIf'] }, null),
            (t()(),
            kr(
              7,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'ngb-dp-arrow right']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            kr(
              8,
              0,
              null,
              null,
              1,
              'button',
              [
                ['aria-label', 'Next month'],
                ['class', 'btn btn-link ngb-dp-arrow-btn'],
                ['title', 'Next month'],
                ['type', 'button'],
              ],
              [[8, 'disabled', 0]],
              [[null, 'click']],
              function (t, e, n) {
                var s = !0;
                return (
                  'click' === e && (s = !1 !== t.component.onClickNext(n) && s),
                  s
                );
              },
              null,
              null
            )),
            (t()(),
            kr(
              9,
              0,
              null,
              null,
              0,
              'span',
              [['class', 'ngb-dp-navigation-chevron']],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 4, 0, n.showSelect), t(e, 6, 0, !n.showSelect);
          },
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, n.prevDisabled), t(e, 8, 0, n.nextDisabled);
          }
        );
      }
      var Ry = jn({
        encapsulation: 2,
        styles: [
          'ngb-datepicker-navigation-select>.custom-select{-ms-flex:1 1 auto;flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.custom-select:focus{z-index:1}ngb-datepicker-navigation-select>.custom-select::-ms-value{background-color:transparent!important}',
        ],
        data: {},
      });
      function Ay(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              3,
              'option',
              [],
              [[1, 'aria-label', 0]],
              null,
              null,
              null,
              null
            )),
            qs(
              1,
              147456,
              null,
              0,
              qm,
              [Ge, tn, [8, null]],
              { value: [0, 'value'] },
              null
            ),
            qs(
              2,
              147456,
              null,
              0,
              Zm,
              [Ge, tn, [8, null]],
              { value: [0, 'value'] },
              null
            ),
            (t()(), Hr(3, null, ['', ''])),
          ],
          function (t, e) {
            t(e, 1, 0, e.context.$implicit), t(e, 2, 0, e.context.$implicit);
          },
          function (t, e) {
            var n = e.component;
            t(
              e,
              0,
              0,
              n.i18n.getMonthFullName(
                e.context.$implicit,
                null == n.date ? null : n.date.year
              )
            ),
              t(
                e,
                3,
                0,
                n.i18n.getMonthShortName(
                  e.context.$implicit,
                  null == n.date ? null : n.date.year
                )
              );
          }
        );
      }
      function Iy(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              3,
              'option',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            qs(
              1,
              147456,
              null,
              0,
              qm,
              [Ge, tn, [8, null]],
              { value: [0, 'value'] },
              null
            ),
            qs(
              2,
              147456,
              null,
              0,
              Zm,
              [Ge, tn, [8, null]],
              { value: [0, 'value'] },
              null
            ),
            (t()(), Hr(3, null, ['', ''])),
          ],
          function (t, e) {
            t(e, 1, 0, e.context.$implicit), t(e, 2, 0, e.context.$implicit);
          },
          function (t, e) {
            t(e, 3, 0, e.component.i18n.getYearNumerals(e.context.$implicit));
          }
        );
      }
      function Oy(t) {
        return $r(
          2,
          [
            Or(402653184, 1, { monthSelect: 0 }),
            Or(402653184, 2, { yearSelect: 0 }),
            (t()(),
            kr(
              2,
              0,
              [
                [1, 0],
                ['month', 1],
              ],
              null,
              2,
              'select',
              [
                ['aria-label', 'Select month'],
                ['class', 'custom-select'],
                ['title', 'Select month'],
              ],
              [[8, 'disabled', 0]],
              [[null, 'change']],
              function (t, e, n) {
                var s = !0;
                return (
                  'change' === e &&
                    (s = !1 !== t.component.changeMonth(n.target.value) && s),
                  s
                );
              },
              null,
              null
            )),
            (t()(), Tr(16777216, null, null, 1, null, Ay)),
            qs(
              4,
              278528,
              null,
              0,
              Ka,
              [Sn, bn, mn],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (t()(),
            kr(
              5,
              0,
              [
                [2, 0],
                ['year', 1],
              ],
              null,
              2,
              'select',
              [
                ['aria-label', 'Select year'],
                ['class', 'custom-select'],
                ['title', 'Select year'],
              ],
              [[8, 'disabled', 0]],
              [[null, 'change']],
              function (t, e, n) {
                var s = !0;
                return (
                  'change' === e &&
                    (s = !1 !== t.component.changeYear(n.target.value) && s),
                  s
                );
              },
              null,
              null
            )),
            (t()(), Tr(16777216, null, null, 1, null, Iy)),
            qs(
              7,
              278528,
              null,
              0,
              Ka,
              [Sn, bn, mn],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 4, 0, n.months), t(e, 7, 0, n.years);
          },
          function (t, e) {
            var n = e.component;
            t(e, 2, 0, n.disabled), t(e, 5, 0, n.disabled);
          }
        );
      }
      var Py = jn({
        encapsulation: 2,
        styles: [
          'ngb-datepicker{border:1px solid #dfdfdf;border-radius:.25rem;display:inline-block}ngb-datepicker-month{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}.ngb-dp-body{z-index:1050}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-months{display:-ms-flexbox;display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}',
        ],
        data: {},
      });
      function Ny(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              1,
              'div',
              [
                ['class', 'btn-light'],
                ['ngbDatepickerDayView', ''],
              ],
              [
                [2, 'bg-primary', null],
                [2, 'text-white', null],
                [2, 'text-muted', null],
                [2, 'outside', null],
                [2, 'active', null],
              ],
              null,
              null,
              wy,
              by
            )),
            qs(
              1,
              49152,
              null,
              0,
              jg,
              [Eg],
              {
                currentMonth: [0, 'currentMonth'],
                date: [1, 'date'],
                disabled: [2, 'disabled'],
                focused: [3, 'focused'],
                selected: [4, 'selected'],
              },
              null
            ),
          ],
          function (t, e) {
            t(
              e,
              1,
              0,
              e.context.currentMonth,
              e.context.date,
              e.context.disabled,
              e.context.focused,
              e.context.selected
            );
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              Ps(e, 1).selected,
              Ps(e, 1).selected,
              Ps(e, 1).isMuted(),
              Ps(e, 1).isMuted(),
              Ps(e, 1).focused
            );
          }
        );
      }
      function My(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'ngb-dp-month-name']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Hr(1, null, [' ', ' ', ' '])),
          ],
          null,
          function (t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              n.i18n.getMonthFullName(
                e.parent.context.$implicit.number,
                e.parent.context.$implicit.year
              ),
              n.i18n.getYearNumerals(e.parent.context.$implicit.year)
            );
          }
        );
      }
      function Fy(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'ngb-dp-month']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Tr(16777216, null, null, 1, null, My)),
            qs(2, 16384, null, 0, Ga, [Sn, bn], { ngIf: [0, 'ngIf'] }, null),
            (t()(),
            kr(
              3,
              0,
              null,
              null,
              1,
              'ngb-datepicker-month',
              [['role', 'grid']],
              null,
              [[null, 'keydown']],
              function (t, e, n) {
                var s = !0;
                return (
                  'keydown' === e && (s = !1 !== Ps(t, 4).onKeyDown(n) && s), s
                );
              },
              t_,
              zy
            )),
            qs(
              4,
              49152,
              null,
              0,
              Ng,
              [Eg, Ig, Pg, xg],
              { month: [0, 'month'] },
              null
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(
              e,
              2,
              0,
              'none' === n.navigation ||
                (n.displayMonths > 1 && 'select' === n.navigation)
            ),
              t(e, 4, 0, e.context.$implicit.firstDate);
          },
          null
        );
      }
      function Ly(t) {
        return $r(
          0,
          [
            (t()(), Tr(16777216, null, null, 1, null, Fy)),
            qs(
              1,
              278528,
              null,
              0,
              Ka,
              [Sn, bn, mn],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (t()(), Tr(0, null, null, 0)),
          ],
          function (t, e) {
            t(e, 1, 0, e.component.model.months);
          },
          null
        );
      }
      function jy(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              1,
              'ngb-datepicker-navigation',
              [],
              null,
              [
                [null, 'navigate'],
                [null, 'select'],
              ],
              function (t, e, n) {
                var s = !0,
                  i = t.component;
                return (
                  'navigate' === e && (s = !1 !== i.onNavigateEvent(n) && s),
                  'select' === e && (s = !1 !== i.onNavigateDateSelect(n) && s),
                  s
                );
              },
              Dy,
              Sy
            )),
            qs(
              1,
              49152,
              null,
              0,
              Mg,
              [Eg],
              {
                date: [0, 'date'],
                disabled: [1, 'disabled'],
                months: [2, 'months'],
                showSelect: [3, 'showSelect'],
                prevDisabled: [4, 'prevDisabled'],
                nextDisabled: [5, 'nextDisabled'],
                selectBoxes: [6, 'selectBoxes'],
              },
              { navigate: 'navigate', select: 'select' }
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              n.model.firstDate,
              n.model.disabled,
              n.model.months,
              'select' === n.model.navigation,
              n.model.prevDisabled,
              n.model.nextDisabled,
              n.model.selectBoxes
            );
          },
          null
        );
      }
      function Vy(t) {
        return $r(0, [(t()(), Tr(0, null, null, 0))], null, null);
      }
      function Hy(t) {
        return $r(0, [(t()(), Tr(0, null, null, 0))], null, null);
      }
      function By(t) {
        return $r(
          2,
          [
            Or(402653184, 1, { _defaultDayTemplate: 0 }),
            Or(402653184, 2, { _contentEl: 0 }),
            (t()(),
            Tr(
              0,
              [
                [1, 2],
                ['defaultDayTemplate', 2],
              ],
              null,
              0,
              null,
              Ny
            )),
            (t()(), Tr(0, [['defaultContentTemplate', 2]], null, 0, null, Ly)),
            (t()(),
            kr(
              4,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'ngb-dp-header']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Tr(16777216, null, null, 1, null, jy)),
            qs(6, 16384, null, 0, Ga, [Sn, bn], { ngIf: [0, 'ngIf'] }, null),
            (t()(),
            kr(
              7,
              0,
              [
                [2, 0],
                ['content', 1],
              ],
              null,
              2,
              'div',
              [['class', 'ngb-dp-content']],
              [[2, 'ngb-dp-months', null]],
              null,
              null,
              null,
              null
            )),
            (t()(), Tr(16777216, null, null, 1, null, Vy)),
            qs(
              9,
              540672,
              null,
              0,
              Xa,
              [Sn],
              { ngTemplateOutlet: [0, 'ngTemplateOutlet'] },
              null
            ),
            (t()(), Tr(16777216, null, null, 1, null, Hy)),
            qs(
              11,
              540672,
              null,
              0,
              Xa,
              [Sn],
              { ngTemplateOutlet: [0, 'ngTemplateOutlet'] },
              null
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 6, 0, 'none' !== n.navigation),
              t(
                e,
                9,
                0,
                (null == n.contentTemplate
                  ? null
                  : n.contentTemplate.templateRef) || Ps(e, 3)
              ),
              t(e, 11, 0, n.footerTemplate);
          },
          function (t, e) {
            t(e, 7, 0, !e.component.contentTemplate);
          }
        );
      }
      function Uy(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              4,
              'ngb-datepicker',
              [],
              null,
              null,
              null,
              By,
              Py
            )),
            Ks(
              5120,
              null,
              zm,
              function (t) {
                return [t];
              },
              [Ig]
            ),
            Ks(512, null, xg, xg, [yg, Eg]),
            qs(
              3,
              4964352,
              null,
              1,
              Ig,
              [xg, yg, Eg, kg, _e, Ge, Rg, $i],
              null,
              null
            ),
            Or(335544320, 1, { contentTemplate: 0 }),
          ],
          function (t, e) {
            t(e, 3, 0);
          },
          null
        );
      }
      var $y = Ss(
          'ngb-datepicker',
          Ig,
          Uy,
          {
            dayTemplate: 'dayTemplate',
            dayTemplateData: 'dayTemplateData',
            displayMonths: 'displayMonths',
            firstDayOfWeek: 'firstDayOfWeek',
            footerTemplate: 'footerTemplate',
            markDisabled: 'markDisabled',
            maxDate: 'maxDate',
            minDate: 'minDate',
            navigation: 'navigation',
            outsideDays: 'outsideDays',
            showWeekdays: 'showWeekdays',
            showWeekNumbers: 'showWeekNumbers',
            startDate: 'startDate',
          },
          { navigate: 'navigate', dateSelect: 'dateSelect', select: 'select' },
          []
        ),
        zy = jn({
          encapsulation: 2,
          styles: [
            'ngb-datepicker-month{display:block}.ngb-dp-week-number,.ngb-dp-weekday{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:#5bc0de;color:var(--info)}.ngb-dp-week{border-radius:.25rem;display:-ms-flexbox;display:flex}.ngb-dp-weekdays{border-bottom:1px solid rgba(0,0,0,.125);border-radius:0;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-day,.ngb-dp-week-number,.ngb-dp-weekday{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default}.ngb-dp-day[tabindex="0"]{z-index:1}',
          ],
          data: {},
        });
      function Wy(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'ngb-dp-weekday ngb-dp-showweek']],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function qy(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              1,
              'div',
              [
                ['class', 'ngb-dp-weekday small'],
                ['role', 'columnheader'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Hr(1, null, [' ', ' '])),
          ],
          null,
          function (t, e) {
            t(
              e,
              1,
              0,
              e.component.i18n.getWeekdayShortName(e.context.$implicit)
            );
          }
        );
      }
      function Ky(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              4,
              'div',
              [
                ['class', 'ngb-dp-week ngb-dp-weekdays'],
                ['role', 'row'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Tr(16777216, null, null, 1, null, Wy)),
            qs(2, 16384, null, 0, Ga, [Sn, bn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Tr(16777216, null, null, 1, null, qy)),
            qs(
              4,
              278528,
              null,
              0,
              Ka,
              [Sn, bn, mn],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 2, 0, n.datepicker.showWeekNumbers),
              t(e, 4, 0, n.viewModel.weekdays);
          },
          null
        );
      }
      function Zy(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'ngb-dp-week-number small text-muted']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Hr(1, null, ['', ''])),
          ],
          null,
          function (t, e) {
            t(
              e,
              1,
              0,
              e.component.i18n.getWeekNumerals(
                e.parent.parent.context.$implicit.number
              )
            );
          }
        );
      }
      function Gy(t) {
        return $r(0, [(t()(), Tr(0, null, null, 0))], null, null);
      }
      function Qy(t) {
        return $r(
          0,
          [
            (t()(), Tr(16777216, null, null, 1, null, Gy)),
            qs(
              1,
              540672,
              null,
              0,
              Xa,
              [Sn],
              {
                ngTemplateOutletContext: [0, 'ngTemplateOutletContext'],
                ngTemplateOutlet: [1, 'ngTemplateOutlet'],
              },
              null
            ),
            (t()(), Tr(0, null, null, 0)),
          ],
          function (t, e) {
            t(
              e,
              1,
              0,
              e.parent.context.$implicit.context,
              e.component.datepicker.dayTemplate
            );
          },
          null
        );
      }
      function Yy(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              2,
              'div',
              [
                ['class', 'ngb-dp-day'],
                ['role', 'gridcell'],
              ],
              [
                [2, 'disabled', null],
                [8, 'tabIndex', 0],
                [2, 'hidden', null],
                [2, 'ngb-dp-today', null],
                [1, 'aria-label', 0],
              ],
              [[null, 'click']],
              function (t, e, n) {
                var s = !0;
                return (
                  'click' === e &&
                    (t.component.doSelect(t.context.$implicit),
                    (s = !1 !== n.preventDefault() && s)),
                  s
                );
              },
              null,
              null
            )),
            (t()(), Tr(16777216, null, null, 1, null, Qy)),
            qs(2, 16384, null, 0, Ga, [Sn, bn], { ngIf: [0, 'ngIf'] }, null),
          ],
          function (t, e) {
            t(e, 2, 0, !e.context.$implicit.hidden);
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              e.context.$implicit.context.disabled,
              e.context.$implicit.tabindex,
              e.context.$implicit.hidden,
              e.context.$implicit.context.today,
              e.context.$implicit.ariaLabel
            );
          }
        );
      }
      function Xy(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              4,
              'div',
              [
                ['class', 'ngb-dp-week'],
                ['role', 'row'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Tr(16777216, null, null, 1, null, Zy)),
            qs(2, 16384, null, 0, Ga, [Sn, bn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Tr(16777216, null, null, 1, null, Yy)),
            qs(
              4,
              278528,
              null,
              0,
              Ka,
              [Sn, bn, mn],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
          ],
          function (t, e) {
            t(e, 2, 0, e.component.datepicker.showWeekNumbers),
              t(e, 4, 0, e.parent.context.$implicit.days);
          },
          null
        );
      }
      function Jy(t) {
        return $r(
          0,
          [
            (t()(), Tr(16777216, null, null, 1, null, Xy)),
            qs(1, 16384, null, 0, Ga, [Sn, bn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Tr(0, null, null, 0)),
          ],
          function (t, e) {
            t(e, 1, 0, !e.context.$implicit.collapsed);
          },
          null
        );
      }
      function t_(t) {
        return $r(
          0,
          [
            (t()(), Tr(16777216, null, null, 1, null, Ky)),
            qs(1, 16384, null, 0, Ga, [Sn, bn], { ngIf: [0, 'ngIf'] }, null),
            (t()(), Tr(16777216, null, null, 1, null, Jy)),
            qs(
              3,
              278528,
              null,
              0,
              Ka,
              [Sn, bn, mn],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, n.datepicker.showWeekdays),
              t(e, 3, 0, n.viewModel.weeks);
          },
          null
        );
      }
      var e_ = jn({
        encapsulation: 2,
        styles: [
          'ngb-popover-window.bs-popover-bottom>.arrow,ngb-popover-window.bs-popover-top>.arrow{left:50%;margin-left:-.5rem}ngb-popover-window.bs-popover-bottom-left>.arrow,ngb-popover-window.bs-popover-top-left>.arrow{left:2em}ngb-popover-window.bs-popover-bottom-right>.arrow,ngb-popover-window.bs-popover-top-right>.arrow{left:auto;right:2em}ngb-popover-window.bs-popover-left>.arrow,ngb-popover-window.bs-popover-right>.arrow{top:50%;margin-top:-.5rem}ngb-popover-window.bs-popover-left-top>.arrow,ngb-popover-window.bs-popover-right-top>.arrow{top:.7em}ngb-popover-window.bs-popover-left-bottom>.arrow,ngb-popover-window.bs-popover-right-bottom>.arrow{top:auto;bottom:.7em}',
        ],
        data: {},
      });
      function n_(t) {
        return $r(0, [(t()(), Hr(0, null, ['', '']))], null, function (t, e) {
          t(e, 0, 0, e.component.title);
        });
      }
      function s_(t) {
        return $r(0, [(t()(), Tr(0, null, null, 0))], null, null);
      }
      function i_(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              3,
              'h3',
              [['class', 'popover-header']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Tr(0, [['simpleTitle', 2]], null, 0, null, n_)),
            (t()(), Tr(16777216, null, null, 1, null, s_)),
            qs(
              3,
              540672,
              null,
              0,
              Xa,
              [Sn],
              {
                ngTemplateOutletContext: [0, 'ngTemplateOutletContext'],
                ngTemplateOutlet: [1, 'ngTemplateOutlet'],
              },
              null
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 3, 0, n.context, n.isTitleTemplate() ? n.title : Ps(e, 1));
          },
          null
        );
      }
      function r_(t) {
        return $r(
          2,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'arrow']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Tr(16777216, null, null, 1, null, i_)),
            qs(2, 16384, null, 0, Ga, [Sn, bn], { ngIf: [0, 'ngIf'] }, null),
            (t()(),
            kr(
              3,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'popover-body']],
              null,
              null,
              null,
              null,
              null
            )),
            Lr(null, 0),
          ],
          function (t, e) {
            t(e, 2, 0, null != e.component.title);
          },
          null
        );
      }
      function o_(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              1,
              'ngb-popover-window',
              [['role', 'tooltip']],
              [
                [8, 'className', 0],
                [8, 'id', 0],
              ],
              null,
              null,
              r_,
              e_
            )),
            qs(1, 49152, null, 0, ny, [], null, null),
          ],
          null,
          function (t, e) {
            t(
              e,
              0,
              0,
              'popover' +
                (Ps(e, 1).popoverClass ? ' ' + Ps(e, 1).popoverClass : ''),
              Ps(e, 1).id
            );
          }
        );
      }
      var a_ = Ss(
          'ngb-popover-window',
          ny,
          o_,
          {
            title: 'title',
            id: 'id',
            popoverClass: 'popoverClass',
            context: 'context',
          },
          {},
          ['*']
        ),
        l_ = jn({
          encapsulation: 2,
          styles: [
            'ngb-tooltip-window.bs-tooltip-bottom .arrow,ngb-tooltip-window.bs-tooltip-top .arrow{left:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-bottom-left .arrow,ngb-tooltip-window.bs-tooltip-top-left .arrow{left:1em}ngb-tooltip-window.bs-tooltip-bottom-right .arrow,ngb-tooltip-window.bs-tooltip-top-right .arrow{left:auto;right:.8rem}ngb-tooltip-window.bs-tooltip-left .arrow,ngb-tooltip-window.bs-tooltip-right .arrow{top:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-left-top .arrow,ngb-tooltip-window.bs-tooltip-right-top .arrow{top:.4rem}ngb-tooltip-window.bs-tooltip-left-bottom .arrow,ngb-tooltip-window.bs-tooltip-right-bottom .arrow{top:auto;bottom:.4rem}',
          ],
          data: {},
        });
      function c_(t) {
        return $r(
          2,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'arrow']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            kr(
              1,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'tooltip-inner']],
              null,
              null,
              null,
              null,
              null
            )),
            Lr(null, 0),
          ],
          null,
          null
        );
      }
      function h_(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              1,
              'ngb-tooltip-window',
              [['role', 'tooltip']],
              [
                [8, 'className', 0],
                [8, 'id', 0],
              ],
              null,
              null,
              c_,
              l_
            )),
            qs(1, 49152, null, 0, cy, [], null, null),
          ],
          null,
          function (t, e) {
            t(
              e,
              0,
              0,
              'tooltip show' +
                (Ps(e, 1).tooltipClass ? ' ' + Ps(e, 1).tooltipClass : ''),
              Ps(e, 1).id
            );
          }
        );
      }
      var u_ = Ss(
          'ngb-tooltip-window',
          cy,
          h_,
          { id: 'id', tooltipClass: 'tooltipClass' },
          {},
          ['*']
        ),
        d_ = jn({ encapsulation: 2, styles: [], data: {} });
      function p_(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              1,
              'ngb-highlight',
              [],
              null,
              null,
              null,
              E_,
              v_
            )),
            qs(
              1,
              573440,
              null,
              0,
              uy,
              [],
              { result: [0, 'result'], term: [1, 'term'] },
              null
            ),
          ],
          function (t, e) {
            var n = e.context.formatter(e.context.result);
            t(e, 1, 0, n, e.context.term);
          },
          null
        );
      }
      function f_(t) {
        return $r(0, [(t()(), Tr(0, null, null, 0))], null, null);
      }
      function m_(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              3,
              'button',
              [
                ['class', 'dropdown-item'],
                ['role', 'option'],
                ['type', 'button'],
              ],
              [
                [8, 'id', 0],
                [2, 'active', null],
              ],
              [
                [null, 'mouseenter'],
                [null, 'click'],
              ],
              function (t, e, n) {
                var s = !0,
                  i = t.component;
                return (
                  'mouseenter' === e &&
                    (s = !1 !== i.markActive(t.context.index) && s),
                  'click' === e &&
                    (s = !1 !== i.select(t.context.$implicit) && s),
                  s
                );
              },
              null,
              null
            )),
            (t()(), Tr(16777216, null, null, 2, null, f_)),
            qs(
              2,
              540672,
              null,
              0,
              Xa,
              [Sn],
              {
                ngTemplateOutletContext: [0, 'ngTemplateOutletContext'],
                ngTemplateOutlet: [1, 'ngTemplateOutlet'],
              },
              null
            ),
            Vr(3, { result: 0, term: 1, formatter: 2 }),
          ],
          function (t, e) {
            var n = e.component,
              s = t(e, 3, 0, e.context.$implicit, n.term, n.formatter);
            t(e, 2, 0, s, n.resultTemplate || Ps(e.parent, 0));
          },
          function (t, e) {
            var n = e.component;
            t(
              e,
              0,
              0,
              n.id + '-' + e.context.index,
              e.context.index === n.activeIdx
            );
          }
        );
      }
      function g_(t) {
        return $r(
          0,
          [
            (t()(), Tr(0, [['rt', 2]], null, 0, null, p_)),
            (t()(), Tr(16777216, null, null, 1, null, m_)),
            qs(
              2,
              278528,
              null,
              0,
              Ka,
              [Sn, bn, mn],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
          ],
          function (t, e) {
            t(e, 2, 0, e.component.results);
          },
          null
        );
      }
      function y_(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              1,
              'ngb-typeahead-window',
              [
                ['class', 'dropdown-menu show'],
                ['role', 'listbox'],
              ],
              [[8, 'id', 0]],
              [[null, 'mousedown']],
              function (t, e, n) {
                var s = !0;
                return (
                  'mousedown' === e && (s = !1 !== n.preventDefault() && s), s
                );
              },
              g_,
              d_
            )),
            qs(1, 114688, null, 0, dy, [], null, null),
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          function (t, e) {
            t(e, 0, 0, Ps(e, 1).id);
          }
        );
      }
      var __ = Ss(
          'ngb-typeahead-window',
          dy,
          y_,
          {
            id: 'id',
            focusFirst: 'focusFirst',
            results: 'results',
            term: 'term',
            formatter: 'formatter',
            resultTemplate: 'resultTemplate',
          },
          { selectEvent: 'select', activeChangeEvent: 'activeChange' },
          []
        ),
        v_ = jn({
          encapsulation: 2,
          styles: ['.ngb-highlight{font-weight:700}'],
          data: {},
        });
      function b_(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              1,
              'span',
              [],
              [[8, 'className', 0]],
              null,
              null,
              null,
              null
            )),
            (t()(), Hr(1, null, ['', ''])),
          ],
          null,
          function (t, e) {
            t(e, 0, 0, e.component.highlightClass),
              t(e, 1, 0, e.parent.context.$implicit);
          }
        );
      }
      function w_(t) {
        return $r(0, [(t()(), Hr(0, null, ['', '']))], null, function (t, e) {
          t(e, 0, 0, e.parent.context.$implicit);
        });
      }
      function S_(t) {
        return $r(
          0,
          [
            (t()(), Tr(16777216, null, null, 1, null, b_)),
            qs(
              1,
              16384,
              null,
              0,
              Ga,
              [Sn, bn],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null
            ),
            (t()(), Tr(0, [['even', 2]], null, 0, null, w_)),
          ],
          function (t, e) {
            t(e, 1, 0, e.context.odd, Ps(e, 2));
          },
          null
        );
      }
      function E_(t) {
        return $r(
          2,
          [
            (t()(), Tr(16777216, null, null, 1, null, S_)),
            qs(
              1,
              278528,
              null,
              0,
              Ka,
              [Sn, bn, mn],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
          ],
          function (t, e) {
            t(e, 1, 0, e.component.parts);
          },
          null
        );
      }
      var C_ = jn({ encapsulation: 2, styles: [], data: {} });
      function x_(t) {
        return $r(0, [], null, null);
      }
      function T_(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              1,
              'ngb-modal-backdrop',
              [['style', 'z-index: 1050']],
              [[8, 'className', 0]],
              null,
              null,
              x_,
              C_
            )),
            qs(1, 49152, null, 0, qg, [], null, null),
          ],
          null,
          function (t, e) {
            t(
              e,
              0,
              0,
              'modal-backdrop fade show' +
                (Ps(e, 1).backdropClass ? ' ' + Ps(e, 1).backdropClass : '')
            );
          }
        );
      }
      var k_ = Ss(
          'ngb-modal-backdrop',
          qg,
          T_,
          { backdropClass: 'backdropClass' },
          {},
          []
        ),
        D_ = jn({
          encapsulation: 2,
          styles: [
            'ngb-modal-window .component-host-scrollable{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}',
          ],
          data: {},
        });
      function R_(t) {
        return $r(
          0,
          [
            Or(402653184, 1, { _dialogEl: 0 }),
            (t()(),
            kr(
              1,
              0,
              [
                [1, 0],
                ['dialog', 1],
              ],
              null,
              2,
              'div',
              [['role', 'document']],
              [[8, 'className', 0]],
              null,
              null,
              null,
              null
            )),
            (t()(),
            kr(
              2,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'modal-content']],
              null,
              null,
              null,
              null,
              null
            )),
            Lr(null, 0),
          ],
          null,
          function (t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              'modal-dialog' +
                (n.size ? ' modal-' + n.size : '') +
                (n.centered ? ' modal-dialog-centered' : '') +
                (n.scrollable ? ' modal-dialog-scrollable' : '')
            );
          }
        );
      }
      function A_(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              1,
              'ngb-modal-window',
              [
                ['role', 'dialog'],
                ['tabindex', '-1'],
              ],
              [
                [8, 'className', 0],
                [1, 'aria-modal', 0],
                [1, 'aria-labelledby', 0],
              ],
              null,
              null,
              R_,
              D_
            )),
            qs(1, 4440064, null, 0, Qg, [tl, Ge, $i], null, null),
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              'modal fade show d-block' +
                (Ps(e, 1).windowClass ? ' ' + Ps(e, 1).windowClass : ''),
              !0,
              Ps(e, 1).ariaLabelledBy
            );
          }
        );
      }
      var I_ = Ss(
        'ngb-modal-window',
        Qg,
        A_,
        {
          ariaLabelledBy: 'ariaLabelledBy',
          backdrop: 'backdrop',
          centered: 'centered',
          keyboard: 'keyboard',
          scrollable: 'scrollable',
          size: 'size',
          windowClass: 'windowClass',
        },
        { dismissEvent: 'dismiss' },
        ['*']
      );
      const O_ = { leading: !0, trailing: !1 };
      class P_ {
        constructor(t, e, n, s) {
          (this.duration = t),
            (this.scheduler = e),
            (this.leading = n),
            (this.trailing = s);
        }
        call(t, e) {
          return e.subscribe(
            new N_(
              t,
              this.duration,
              this.scheduler,
              this.leading,
              this.trailing
            )
          );
        }
      }
      class N_ extends f {
        constructor(t, e, n, s, i) {
          super(t),
            (this.duration = e),
            (this.scheduler = n),
            (this.leading = s),
            (this.trailing = i),
            (this._hasTrailingValue = !1),
            (this._trailingValue = null);
        }
        _next(t) {
          this.throttled
            ? this.trailing &&
              ((this._trailingValue = t), (this._hasTrailingValue = !0))
            : (this.add(
                (this.throttled = this.scheduler.schedule(M_, this.duration, {
                  subscriber: this,
                }))
              ),
              this.leading
                ? this.destination.next(t)
                : this.trailing &&
                  ((this._trailingValue = t), (this._hasTrailingValue = !0)));
        }
        _complete() {
          this._hasTrailingValue
            ? (this.destination.next(this._trailingValue),
              this.destination.complete())
            : this.destination.complete();
        }
        clearThrottle() {
          const t = this.throttled;
          t &&
            (this.trailing &&
              this._hasTrailingValue &&
              (this.destination.next(this._trailingValue),
              (this._trailingValue = null),
              (this._hasTrailingValue = !1)),
            t.unsubscribe(),
            this.remove(t),
            (this.throttled = null));
        }
      }
      function M_(t) {
        const { subscriber: e } = t;
        e.clearThrottle();
      }
      function F_(t, e, n, s) {
        const i =
          window && !!window.document && window.document.documentElement;
        let r = i && e ? window : n;
        if (
          t &&
          ((r =
            t && i && 'string' == typeof t
              ? (function (t, e, n) {
                  return (n ? window.document : e).querySelector(t);
                })(t, n.nativeElement, s)
              : t),
          !r)
        )
          throw new Error(
            'ngx-infinite-scroll {resolveContainerElement()}: selector for'
          );
        return r;
      }
      function L_(t) {
        return t && !t.firstChange;
      }
      const j_ = {
          clientHeight: 'clientHeight',
          offsetHeight: 'offsetHeight',
          scrollHeight: 'scrollHeight',
          pageYOffset: 'pageYOffset',
          offsetTop: 'offsetTop',
          scrollTop: 'scrollTop',
          top: 'top',
        },
        V_ = {
          clientHeight: 'clientWidth',
          offsetHeight: 'offsetWidth',
          scrollHeight: 'scrollWidth',
          pageYOffset: 'pageXOffset',
          offsetTop: 'offsetLeft',
          scrollTop: 'scrollLeft',
          top: 'left',
        };
      class H_ {
        constructor(t = !0) {
          (this.vertical = t), (this.propsMap = t ? j_ : V_);
        }
        clientHeightKey() {
          return this.propsMap.clientHeight;
        }
        offsetHeightKey() {
          return this.propsMap.offsetHeight;
        }
        scrollHeightKey() {
          return this.propsMap.scrollHeight;
        }
        pageYOffsetKey() {
          return this.propsMap.pageYOffset;
        }
        offsetTopKey() {
          return this.propsMap.offsetTop;
        }
        scrollTopKey() {
          return this.propsMap.scrollTop;
        }
        topKey() {
          return this.propsMap.top;
        }
      }
      function B_(t) {
        return ['Window', 'global'].some((e) =>
          Object.prototype.toString.call(t).includes(e)
        );
      }
      function U_(t, e) {
        return t ? e.document.documentElement : null;
      }
      function $_(t, e) {
        const n = (function ({ container: t, isWindow: e, axis: n }) {
          const { offsetHeightKey: s, clientHeightKey: i } = z_(n);
          return W_(t, e, s, i);
        })(e);
        return e.isWindow
          ? (function (t, e, n) {
              const { axis: s, container: i, isWindow: r } = n,
                { offsetHeightKey: o, clientHeightKey: a } = z_(s),
                l = t + q_(U_(r, i), s, r),
                c = W_(e.nativeElement, r, o, a);
              return {
                height: t,
                scrolled: l,
                totalToScroll:
                  (function (t, e, n) {
                    const s = e.topKey();
                    if (t.getBoundingClientRect)
                      return t.getBoundingClientRect()[s] + q_(t, e, n);
                  })(e.nativeElement, s, r) + c,
                isWindow: r,
              };
            })(n, t, e)
          : (function (t, e, n) {
              const { axis: s, container: i } = n;
              return {
                height: t,
                scrolled: i[s.scrollTopKey()],
                totalToScroll: i[s.scrollHeightKey()],
                isWindow: !1,
              };
            })(n, 0, e);
      }
      function z_(t) {
        return {
          offsetHeightKey: t.offsetHeightKey(),
          clientHeightKey: t.clientHeightKey(),
        };
      }
      function W_(t, e, n, s) {
        if (isNaN(t[n])) {
          const n = U_(e, t);
          return n ? n[s] : 0;
        }
        return t[n];
      }
      function q_(t, e, n) {
        const s = e.pageYOffsetKey(),
          i = e.scrollTopKey(),
          r = e.offsetTopKey();
        return isNaN(window.pageYOffset)
          ? U_(n, t)[i]
          : t.ownerDocument
          ? t.ownerDocument.defaultView[s]
          : t[r];
      }
      function K_(t, e, n) {
        let s, i;
        if (t.totalToScroll <= 0) return !1;
        const r = t.isWindow ? t.scrolled : t.height + t.scrolled;
        return (
          n
            ? ((s = (t.totalToScroll - r) / t.totalToScroll), (i = e.down / 10))
            : ((s = t.scrolled / (t.scrolled + (t.totalToScroll - r))),
              (i = e.up / 10)),
          s <= i
        );
      }
      class Z_ {
        constructor({ totalToScroll: t }) {
          (this.lastScrollPosition = 0),
            (this.lastTotalToScroll = 0),
            (this.totalToScroll = 0),
            (this.triggered = { down: 0, up: 0 }),
            (this.totalToScroll = t);
        }
        updateScrollPosition(t) {
          return (this.lastScrollPosition = t);
        }
        updateTotalToScroll(t) {
          this.lastTotalToScroll !== t &&
            ((this.lastTotalToScroll = this.totalToScroll),
            (this.totalToScroll = t));
        }
        updateScroll(t, e) {
          this.updateScrollPosition(t), this.updateTotalToScroll(e);
        }
        updateTriggeredFlag(t, e) {
          e ? (this.triggered.down = t) : (this.triggered.up = t);
        }
        isTriggeredScroll(t, e) {
          return e ? this.triggered.down === t : this.triggered.up === t;
        }
      }
      function G_(t) {
        const {
          scrollDown: e,
          stats: { scrolled: n },
        } = t;
        return {
          type: e ? '[NGX_ISE] DOWN' : '[NGX_ISE] UP',
          payload: { currentScrollPosition: n },
        };
      }
      class Q_ {
        constructor(t, e) {
          (this.element = t),
            (this.zone = e),
            (this.scrolled = new fi()),
            (this.scrolledUp = new fi()),
            (this.infiniteScrollDistance = 2),
            (this.infiniteScrollUpDistance = 1.5),
            (this.infiniteScrollThrottle = 150),
            (this.infiniteScrollDisabled = !1),
            (this.infiniteScrollContainer = null),
            (this.scrollWindow = !0),
            (this.immediateCheck = !1),
            (this.horizontal = !1),
            (this.alwaysCallback = !1),
            (this.fromRoot = !1);
        }
        ngAfterViewInit() {
          this.infiniteScrollDisabled || this.setup();
        }
        ngOnChanges({
          infiniteScrollContainer: t,
          infiniteScrollDisabled: e,
          infiniteScrollDistance: n,
        }) {
          const s = L_(t),
            i = L_(e),
            r = L_(n),
            o =
              (!i && !this.infiniteScrollDisabled) ||
              (i && !e.currentValue) ||
              r;
          (s || i || r) && (this.destroyScroller(), o && this.setup());
        }
        setup() {
          'undefined' != typeof window &&
            this.zone.runOutsideAngular(() => {
              this.disposeScroller = (function (t) {
                const {
                    scrollContainer: e,
                    scrollWindow: n,
                    element: s,
                    fromRoot: i,
                  } = t,
                  r = (function ({ windowElement: t, axis: e }) {
                    return (function (t, e) {
                      const n =
                        t.isWindow || (e && !e.nativeElement)
                          ? e
                          : e.nativeElement;
                      return Object.assign(Object.assign({}, t), {
                        container: n,
                      });
                    })({ axis: e, isWindow: B_(t) }, t);
                  })({
                    axis: new H_(!t.horizontal),
                    windowElement: F_(e, n, s, i),
                  }),
                  o = new Z_({ totalToScroll: $_(s, r) }),
                  a = { up: t.upDistance, down: t.downDistance };
                return (function (t) {
                  let e = Cf(t.container, 'scroll');
                  return (
                    t.throttle &&
                      (e = e.pipe(
                        (function (t, e = Rf, n = O_) {
                          return (s) =>
                            s.lift(new P_(t, e, n.leading, n.trailing));
                        })(t.throttle)
                      )),
                    e
                  );
                })({ container: r.container, throttle: t.throttle }).pipe(
                  U(() => ta($_(s, r))),
                  D((t) =>
                    (function (t, e, n) {
                      const { scrollDown: s, fire: i } = (function (t, e, n) {
                        const s = (function (t, e) {
                          return t < e.scrolled;
                        })(t, e);
                        return { fire: K_(e, n, s), scrollDown: s };
                      })(t, e, n);
                      return { scrollDown: s, fire: i, stats: e };
                    })(o.lastScrollPosition, t, a)
                  ),
                  Ac(({ stats: t }) =>
                    o.updateScroll(t.scrolled, t.totalToScroll)
                  ),
                  na(
                    ({ fire: e, scrollDown: n, stats: { totalToScroll: s } }) =>
                      (function (t, e, n) {
                        return !(!t || !e) || !(n || !e);
                      })(t.alwaysCallback, e, o.isTriggeredScroll(s, n))
                  ),
                  Ac(({ scrollDown: t, stats: { totalToScroll: e } }) => {
                    o.updateTriggeredFlag(e, t);
                  }),
                  D(G_)
                );
              })({
                fromRoot: this.fromRoot,
                alwaysCallback: this.alwaysCallback,
                disable: this.infiniteScrollDisabled,
                downDistance: this.infiniteScrollDistance,
                element: this.element,
                horizontal: this.horizontal,
                scrollContainer: this.infiniteScrollContainer,
                scrollWindow: this.scrollWindow,
                throttle: this.infiniteScrollThrottle,
                upDistance: this.infiniteScrollUpDistance,
              }).subscribe((t) => this.zone.run(() => this.handleOnScroll(t)));
            });
        }
        handleOnScroll({ type: t, payload: e }) {
          switch (t) {
            case '[NGX_ISE] DOWN':
              return this.scrolled.emit(e);
            case '[NGX_ISE] UP':
              return this.scrolledUp.emit(e);
            default:
              return;
          }
        }
        ngOnDestroy() {
          this.destroyScroller();
        }
        destroyScroller() {
          this.disposeScroller && this.disposeScroller.unsubscribe();
        }
      }
      class Y_ {}
      n('vzhz');
      class X_ {
        constructor(t, e, n) {
          (this.data = t),
            (this.imageService = n),
            (this.indexImage = 0),
            (this.showNavigationArrows = !0),
            (this.showNavigationIndicators = !1),
            (this.images = []),
            (this.idToFind = new fi());
        }
        ngOnInit() {}
      }
      var J_ = (function (t) {
        return (t.RIGHT_ARROW = 'ArrowRight'), (t.LEFT_ARROW = 'ArrowLeft'), t;
      })({});
      class tv {
        constructor(t, e) {
          (this.dialog = t),
            (this.imageService = e),
            (this.images = []),
            (this.hasToScroll = new fi()),
            (this.pictureDetail = []),
            (this.indexSelected = 0);
        }
        ngOnInit() {}
        onScroll() {
          this.hasToScroll.emit(!0);
        }
        keyEvent(t) {
          console.log(t),
            t.key === J_.RIGHT_ARROW &&
              (console.log('entro...'), this.modalIsOpen || this.onRight()),
            t.key === J_.LEFT_ARROW && (this.modalIsOpen || this.onLeft());
        }
        onLeft() {
          this.indexSelected =
            0 === this.indexSelected ? 0 : this.indexSelected - 1;
          const t = this.images[this.indexSelected].cropped_picture;
          console.log(t, this.indexSelected),
            this.goToDetails(t, this.indexSelected);
        }
        onRight() {
          console.log('probandooo ....'),
            (this.indexSelected = this.indexSelected + 1);
          const t = this.images[this.indexSelected].id;
          console.log(t, this.indexSelected),
            this.goToDetails(t, this.indexSelected);
        }
        goToDetails(t, e) {
          (this.indexSelected = e),
            this.imageService.getPictureById(t).subscribe((t) => {
              const e = this.dialog.open(X_, {
                panelClass: 'custom-dialog-container',
                disableClose: !0,
                hasBackdrop: !1,
                data: t,
              });
              e.afterOpened().subscribe((t) => (this.modalIsOpen = !0)),
                e.afterClosed().subscribe((t) => (this.modalIsOpen = !1)),
                console.log(e);
            });
        }
      }
      var ev = jn({
        encapsulation: 0,
        styles: [['.selected[_ngcontent-%COMP%]{border:1px solid grey}']],
        data: {},
      });
      function nv(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'col-12 pr-lg-2 col-lg-3 col-xl-3 mb-3']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            kr(
              1,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'h-100 m-2']],
              [[2, 'selected', null]],
              null,
              null,
              null,
              null
            )),
            (t()(),
            kr(
              2,
              0,
              null,
              null,
              0,
              'img',
              [['class', 'p-2 img-fluid']],
              [[8, 'src', 4]],
              [[null, 'click']],
              function (t, e, n) {
                var s = !0;
                return (
                  'click' === e &&
                    (s =
                      !1 !==
                        t.component.goToDetails(
                          t.context.$implicit.id,
                          t.context.index
                        ) && s),
                  s
                );
              },
              null,
              null
            )),
          ],
          null,
          function (t, e) {
            t(e, 1, 0, e.context.index === e.component.indexSelected),
              t(e, 2, 0, e.context.$implicit.cropped_picture);
          }
        );
      }
      function sv(t) {
        return $r(
          0,
          [
            (t()(),
            kr(0, 0, null, null, 4, null, null, null, null, null, null, null)),
            (t()(),
            kr(
              1,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'mt-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            kr(
              2,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'row row-eq-height d-flex justify-content-center']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Tr(16777216, null, null, 1, null, nv)),
            qs(
              4,
              278528,
              null,
              0,
              Ka,
              [Sn, bn, mn],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
          ],
          function (t, e) {
            t(e, 4, 0, e.component.images);
          },
          null
        );
      }
      function iv(t) {
        return $r(0, [(t()(), Hr(-1, null, [' Loading ... ']))], null, null);
      }
      function rv(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              3,
              'div',
              [
                ['class', 'container'],
                ['infiniteScroll', ''],
              ],
              null,
              [[null, 'scrolled']],
              function (t, e, n) {
                var s = !0;
                return (
                  'scrolled' === e && (s = !1 !== t.component.onScroll() && s),
                  s
                );
              },
              null,
              null
            )),
            qs(
              1,
              4866048,
              null,
              0,
              Q_,
              [Ge, $i],
              { infiniteScrollDistance: [0, 'infiniteScrollDistance'] },
              { scrolled: 'scrolled' }
            ),
            (t()(), Tr(16777216, null, null, 1, null, sv)),
            qs(
              3,
              16384,
              null,
              0,
              Ga,
              [Sn, bn],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null
            ),
            (t()(), Tr(0, [['spinner', 2]], null, 0, null, iv)),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, 8), t(e, 3, 0, n.images.length > 0, Ps(e, 4));
          },
          null
        );
      }
      var ov = jn({ encapsulation: 0, styles: [['']], data: {} });
      function av(t) {
        return $r(
          0,
          [
            (t()(),
            kr(
              0,
              0,
              null,
              null,
              5,
              'div',
              [['class', 'container']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            kr(
              1,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'mt-4 light-grey-background p-2 p-lg-0']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            kr(
              2,
              0,
              null,
              null,
              1,
              'h5',
              [
                [
                  'class',
                  'pb-1 d-flex justify-content-center font-weight-normal mb-3',
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Hr(-1, null, [' Images Galery '])),
            (t()(),
            kr(
              4,
              0,
              null,
              null,
              1,
              'app-image-list',
              [],
              null,
              [
                [null, 'hasToScroll'],
                ['window', 'keydown'],
              ],
              function (t, e, n) {
                var s = !0,
                  i = t.component;
                return (
                  'window:keydown' === e &&
                    (s = !1 !== Ps(t, 5).keyEvent(n) && s),
                  'hasToScroll' === e && (s = !1 !== i.onScroll() && s),
                  s
                );
              },
              rv,
              ev
            )),
            qs(
              5,
              114688,
              null,
              0,
              tv,
              [xm, Ll],
              { loading: [0, 'loading'], images: [1, 'images'] },
              { hasToScroll: 'hasToScroll' }
            ),
            (t()(),
            kr(
              6,
              16777216,
              null,
              null,
              1,
              'router-outlet',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            qs(7, 212992, null, 0, ip, [sp, Sn, We, [8, null], _e], null, null),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 5, 0, n.loading, n.images), t(e, 7, 0);
          },
          null
        );
      }
      function lv(t) {
        return $r(
          0,
          [
            (t()(),
            kr(0, 0, null, null, 1, 'app-root', [], null, null, null, av, ov)),
            qs(1, 114688, null, 0, Bl, [Vl, Hl, Ll], null, null),
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      var cv = Ss('app-root', Bl, lv, {}, {}, []);
      function hv() {
        return 'undefined' != typeof process;
      }
      function uv(t) {
        switch (t.length) {
          case 0:
            return new lf();
          case 1:
            return t[0];
          default:
            return new cf(t);
        }
      }
      function dv(t, e, n, s, i = {}, r = {}) {
        const o = [],
          a = [];
        let l = -1,
          c = null;
        if (
          (s.forEach((t) => {
            const n = t.offset,
              s = n == l,
              h = (s && c) || {};
            Object.keys(t).forEach((n) => {
              let s = n,
                a = t[n];
              if ('offset' !== n)
                switch (((s = e.normalizePropertyName(s, o)), a)) {
                  case '!':
                    a = i[n];
                    break;
                  case '*':
                    a = r[n];
                    break;
                  default:
                    a = e.normalizeStyleValue(n, s, a, o);
                }
              h[s] = a;
            }),
              s || a.push(h),
              (c = h),
              (l = n);
          }),
          o.length)
        ) {
          const t = '\n - ';
          throw new Error(
            `Unable to animate due to the following errors:${t}${o.join(t)}`
          );
        }
        return a;
      }
      function pv(t, e, n, s) {
        switch (e) {
          case 'start':
            t.onStart(() => s(n && fv(n, 'start', t)));
            break;
          case 'done':
            t.onDone(() => s(n && fv(n, 'done', t)));
            break;
          case 'destroy':
            t.onDestroy(() => s(n && fv(n, 'destroy', t)));
        }
      }
      function fv(t, e, n) {
        const s = n.totalTime,
          i = mv(
            t.element,
            t.triggerName,
            t.fromState,
            t.toState,
            e || t.phaseName,
            null == s ? t.totalTime : s,
            !!n.disabled
          ),
          r = t._data;
        return null != r && (i._data = r), i;
      }
      function mv(t, e, n, s, i = '', r = 0, o) {
        return {
          element: t,
          triggerName: e,
          fromState: n,
          toState: s,
          phaseName: i,
          totalTime: r,
          disabled: !!o,
        };
      }
      function gv(t, e, n) {
        let s;
        return (
          t instanceof Map
            ? ((s = t.get(e)), s || t.set(e, (s = n)))
            : ((s = t[e]), s || (s = t[e] = n)),
          s
        );
      }
      function yv(t) {
        const e = t.indexOf(':');
        return [t.substring(1, e), t.substr(e + 1)];
      }
      let _v = (t, e) => !1,
        vv = (t, e) => !1,
        bv = (t, e, n) => [];
      const wv = hv();
      (wv || 'undefined' != typeof Element) &&
        ((_v = (t, e) => t.contains(e)),
        (vv = (() => {
          if (wv || Element.prototype.matches) return (t, e) => t.matches(e);
          {
            const t = Element.prototype,
              e =
                t.matchesSelector ||
                t.mozMatchesSelector ||
                t.msMatchesSelector ||
                t.oMatchesSelector ||
                t.webkitMatchesSelector;
            return e ? (t, n) => e.apply(t, [n]) : vv;
          }
        })()),
        (bv = (t, e, n) => {
          let s = [];
          if (n) s.push(...t.querySelectorAll(e));
          else {
            const n = t.querySelector(e);
            n && s.push(n);
          }
          return s;
        }));
      let Sv = null,
        Ev = !1;
      function Cv(t) {
        Sv ||
          ((Sv = ('undefined' != typeof document ? document.body : null) || {}),
          (Ev = !!Sv.style && 'WebkitAppearance' in Sv.style));
        let e = !0;
        return (
          Sv.style &&
            !(function (t) {
              return 'ebkit' == t.substring(1, 6);
            })(t) &&
            ((e = t in Sv.style), !e && Ev) &&
            (e =
              'Webkit' + t.charAt(0).toUpperCase() + t.substr(1) in Sv.style),
          e
        );
      }
      const xv = vv,
        Tv = _v,
        kv = bv;
      function Dv(t) {
        const e = {};
        return (
          Object.keys(t).forEach((n) => {
            const s = n.replace(/([a-z])([A-Z])/g, '$1-$2');
            e[s] = t[n];
          }),
          e
        );
      }
      class Rv {
        validateStyleProperty(t) {
          return Cv(t);
        }
        matchesElement(t, e) {
          return xv(t, e);
        }
        containsElement(t, e) {
          return Tv(t, e);
        }
        query(t, e, n) {
          return kv(t, e, n);
        }
        computeStyle(t, e, n) {
          return n || '';
        }
        animate(t, e, n, s, i, r = [], o) {
          return new lf(n, s);
        }
      }
      let Av = (() => {
        class t {}
        return (t.NOOP = new Rv()), t;
      })();
      function Iv(t) {
        if ('number' == typeof t) return t;
        const e = t.match(/^(-?[\.\d]+)(m?s)/);
        return !e || e.length < 2 ? 0 : Ov(parseFloat(e[1]), e[2]);
      }
      function Ov(t, e) {
        switch (e) {
          case 's':
            return 1e3 * t;
          default:
            return t;
        }
      }
      function Pv(t, e, n) {
        return t.hasOwnProperty('duration')
          ? t
          : (function (t, e, n) {
              let s,
                i = 0,
                r = '';
              if ('string' == typeof t) {
                const n = t.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
                );
                if (null === n)
                  return (
                    e.push(`The provided timing value "${t}" is invalid.`),
                    { duration: 0, delay: 0, easing: '' }
                  );
                s = Ov(parseFloat(n[1]), n[2]);
                const o = n[3];
                null != o && (i = Ov(parseFloat(o), n[4]));
                const a = n[5];
                a && (r = a);
              } else s = t;
              if (!n) {
                let n = !1,
                  r = e.length;
                s < 0 &&
                  (e.push(
                    'Duration values below 0 are not allowed for this animation step.'
                  ),
                  (n = !0)),
                  i < 0 &&
                    (e.push(
                      'Delay values below 0 are not allowed for this animation step.'
                    ),
                    (n = !0)),
                  n &&
                    e.splice(
                      r,
                      0,
                      `The provided timing value "${t}" is invalid.`
                    );
              }
              return { duration: s, delay: i, easing: r };
            })(t, e, n);
      }
      function Nv(t, e = {}) {
        return (
          Object.keys(t).forEach((n) => {
            e[n] = t[n];
          }),
          e
        );
      }
      function Mv(t, e, n = {}) {
        if (e) for (let s in t) n[s] = t[s];
        else Nv(t, n);
        return n;
      }
      function Fv(t, e, n) {
        return n ? e + ':' + n + ';' : '';
      }
      function Lv(t) {
        let e = '';
        for (let n = 0; n < t.style.length; n++) {
          const s = t.style.item(n);
          e += Fv(0, s, t.style.getPropertyValue(s));
        }
        for (const n in t.style)
          t.style.hasOwnProperty(n) &&
            !n.startsWith('_') &&
            (e += Fv(
              0,
              n.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
              t.style[n]
            ));
        t.setAttribute('style', e);
      }
      function jv(t, e, n) {
        t.style &&
          (Object.keys(e).forEach((s) => {
            const i = qv(s);
            n && !n.hasOwnProperty(s) && (n[s] = t.style[i]),
              (t.style[i] = e[s]);
          }),
          hv() && Lv(t));
      }
      function Vv(t, e) {
        t.style &&
          (Object.keys(e).forEach((e) => {
            const n = qv(e);
            t.style[n] = '';
          }),
          hv() && Lv(t));
      }
      function Hv(t) {
        return Array.isArray(t) ? (1 == t.length ? t[0] : rf(t)) : t;
      }
      const Bv = new RegExp('{{\\s*(.+?)\\s*}}', 'g');
      function Uv(t) {
        let e = [];
        if ('string' == typeof t) {
          const n = t.toString();
          let s;
          for (; (s = Bv.exec(n)); ) e.push(s[1]);
          Bv.lastIndex = 0;
        }
        return e;
      }
      function $v(t, e, n) {
        const s = t.toString(),
          i = s.replace(Bv, (t, s) => {
            let i = e[s];
            return (
              e.hasOwnProperty(s) ||
                (n.push('Please provide a value for the animation param ' + s),
                (i = '')),
              i.toString()
            );
          });
        return i == s ? t : i;
      }
      function zv(t) {
        const e = [];
        let n = t.next();
        for (; !n.done; ) e.push(n.value), (n = t.next());
        return e;
      }
      const Wv = /-+([a-z0-9])/g;
      function qv(t) {
        return t.replace(Wv, (...t) => t[1].toUpperCase());
      }
      function Kv(t, e) {
        return 0 === t || 0 === e;
      }
      function Zv(t, e, n) {
        const s = Object.keys(n);
        if (s.length && e.length) {
          let r = e[0],
            o = [];
          if (
            (s.forEach((t) => {
              r.hasOwnProperty(t) || o.push(t), (r[t] = n[t]);
            }),
            o.length)
          )
            for (var i = 1; i < e.length; i++) {
              let n = e[i];
              o.forEach(function (e) {
                n[e] = Qv(t, e);
              });
            }
        }
        return e;
      }
      function Gv(t, e, n) {
        switch (e.type) {
          case 7:
            return t.visitTrigger(e, n);
          case 0:
            return t.visitState(e, n);
          case 1:
            return t.visitTransition(e, n);
          case 2:
            return t.visitSequence(e, n);
          case 3:
            return t.visitGroup(e, n);
          case 4:
            return t.visitAnimate(e, n);
          case 5:
            return t.visitKeyframes(e, n);
          case 6:
            return t.visitStyle(e, n);
          case 8:
            return t.visitReference(e, n);
          case 9:
            return t.visitAnimateChild(e, n);
          case 10:
            return t.visitAnimateRef(e, n);
          case 11:
            return t.visitQuery(e, n);
          case 12:
            return t.visitStagger(e, n);
          default:
            throw new Error(
              'Unable to resolve animation metadata node #' + e.type
            );
        }
      }
      function Qv(t, e) {
        return window.getComputedStyle(t)[e];
      }
      function Yv(t, e) {
        const n = [];
        return (
          'string' == typeof t
            ? t.split(/\s*,\s*/).forEach((t) =>
                (function (t, e, n) {
                  if (':' == t[0]) {
                    const s = (function (t, e) {
                      switch (t) {
                        case ':enter':
                          return 'void => *';
                        case ':leave':
                          return '* => void';
                        case ':increment':
                          return (t, e) => parseFloat(e) > parseFloat(t);
                        case ':decrement':
                          return (t, e) => parseFloat(e) < parseFloat(t);
                        default:
                          return (
                            e.push(
                              `The transition alias value "${t}" is not supported`
                            ),
                            '* => *'
                          );
                      }
                    })(t, n);
                    if ('function' == typeof s) return void e.push(s);
                    t = s;
                  }
                  const s = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                  if (null == s || s.length < 4)
                    return (
                      n.push(
                        `The provided transition expression "${t}" is not supported`
                      ),
                      e
                    );
                  const i = s[1],
                    r = s[2],
                    o = s[3];
                  e.push(tb(i, o)),
                    '<' != r[0] || ('*' == i && '*' == o) || e.push(tb(o, i));
                })(t, n, e)
              )
            : n.push(t),
          n
        );
      }
      const Xv = new Set(['true', '1']),
        Jv = new Set(['false', '0']);
      function tb(t, e) {
        const n = Xv.has(t) || Jv.has(t),
          s = Xv.has(e) || Jv.has(e);
        return (i, r) => {
          let o = '*' == t || t == i,
            a = '*' == e || e == r;
          return (
            !o && n && 'boolean' == typeof i && (o = i ? Xv.has(t) : Jv.has(t)),
            !a && s && 'boolean' == typeof r && (a = r ? Xv.has(e) : Jv.has(e)),
            o && a
          );
        };
      }
      const eb = new RegExp('s*:selfs*,?', 'g');
      function nb(t, e, n) {
        return new sb(t).build(e, n);
      }
      class sb {
        constructor(t) {
          this._driver = t;
        }
        build(t, e) {
          const n = new ib(e);
          return this._resetContextStyleTimingState(n), Gv(this, Hv(t), n);
        }
        _resetContextStyleTimingState(t) {
          (t.currentQuerySelector = ''),
            (t.collectedStyles = {}),
            (t.collectedStyles[''] = {}),
            (t.currentTime = 0);
        }
        visitTrigger(t, e) {
          let n = (e.queryCount = 0),
            s = (e.depCount = 0);
          const i = [],
            r = [];
          return (
            '@' == t.name.charAt(0) &&
              e.errors.push(
                "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"
              ),
            t.definitions.forEach((t) => {
              if ((this._resetContextStyleTimingState(e), 0 == t.type)) {
                const n = t,
                  s = n.name;
                s
                  .toString()
                  .split(/\s*,\s*/)
                  .forEach((t) => {
                    (n.name = t), i.push(this.visitState(n, e));
                  }),
                  (n.name = s);
              } else if (1 == t.type) {
                const i = this.visitTransition(t, e);
                (n += i.queryCount), (s += i.depCount), r.push(i);
              } else
                e.errors.push(
                  'only state() and transition() definitions can sit inside of a trigger()'
                );
            }),
            {
              type: 7,
              name: t.name,
              states: i,
              transitions: r,
              queryCount: n,
              depCount: s,
              options: null,
            }
          );
        }
        visitState(t, e) {
          const n = this.visitStyle(t.styles, e),
            s = (t.options && t.options.params) || null;
          if (n.containsDynamicStyles) {
            const i = new Set(),
              r = s || {};
            if (
              (n.styles.forEach((t) => {
                if (rb(t)) {
                  const e = t;
                  Object.keys(e).forEach((t) => {
                    Uv(e[t]).forEach((t) => {
                      r.hasOwnProperty(t) || i.add(t);
                    });
                  });
                }
              }),
              i.size)
            ) {
              const n = zv(i.values());
              e.errors.push(
                `state("${
                  t.name
                }", ...) must define default values for all the following style substitutions: ${n.join(
                  ', '
                )}`
              );
            }
          }
          return {
            type: 0,
            name: t.name,
            style: n,
            options: s ? { params: s } : null,
          };
        }
        visitTransition(t, e) {
          (e.queryCount = 0), (e.depCount = 0);
          const n = Gv(this, Hv(t.animation), e);
          return {
            type: 1,
            matchers: Yv(t.expr, e.errors),
            animation: n,
            queryCount: e.queryCount,
            depCount: e.depCount,
            options: ob(t.options),
          };
        }
        visitSequence(t, e) {
          return {
            type: 2,
            steps: t.steps.map((t) => Gv(this, t, e)),
            options: ob(t.options),
          };
        }
        visitGroup(t, e) {
          const n = e.currentTime;
          let s = 0;
          const i = t.steps.map((t) => {
            e.currentTime = n;
            const i = Gv(this, t, e);
            return (s = Math.max(s, e.currentTime)), i;
          });
          return (
            (e.currentTime = s), { type: 3, steps: i, options: ob(t.options) }
          );
        }
        visitAnimate(t, e) {
          const n = (function (t, e) {
            let n = null;
            if (t.hasOwnProperty('duration')) n = t;
            else if ('number' == typeof t) return ab(Pv(t, e).duration, 0, '');
            const s = t;
            if (
              s
                .split(/\s+/)
                .some((t) => '{' == t.charAt(0) && '{' == t.charAt(1))
            ) {
              const t = ab(0, 0, '');
              return (t.dynamic = !0), (t.strValue = s), t;
            }
            return (n = n || Pv(s, e)), ab(n.duration, n.delay, n.easing);
          })(t.timings, e.errors);
          let s;
          e.currentAnimateTimings = n;
          let i = t.styles ? t.styles : of({});
          if (5 == i.type) s = this.visitKeyframes(i, e);
          else {
            let i = t.styles,
              r = !1;
            if (!i) {
              r = !0;
              const t = {};
              n.easing && (t.easing = n.easing), (i = of(t));
            }
            e.currentTime += n.duration + n.delay;
            const o = this.visitStyle(i, e);
            (o.isEmptyStep = r), (s = o);
          }
          return (
            (e.currentAnimateTimings = null),
            { type: 4, timings: n, style: s, options: null }
          );
        }
        visitStyle(t, e) {
          const n = this._makeStyleAst(t, e);
          return this._validateStyleAst(n, e), n;
        }
        _makeStyleAst(t, e) {
          const n = [];
          Array.isArray(t.styles)
            ? t.styles.forEach((t) => {
                'string' == typeof t
                  ? '*' == t
                    ? n.push(t)
                    : e.errors.push(
                        `The provided style string value ${t} is not allowed.`
                      )
                  : n.push(t);
              })
            : n.push(t.styles);
          let s = !1,
            i = null;
          return (
            n.forEach((t) => {
              if (rb(t)) {
                const e = t,
                  n = e.easing;
                if ((n && ((i = n), delete e.easing), !s))
                  for (let t in e)
                    if (e[t].toString().indexOf('{{') >= 0) {
                      s = !0;
                      break;
                    }
              }
            }),
            {
              type: 6,
              styles: n,
              easing: i,
              offset: t.offset,
              containsDynamicStyles: s,
              options: null,
            }
          );
        }
        _validateStyleAst(t, e) {
          const n = e.currentAnimateTimings;
          let s = e.currentTime,
            i = e.currentTime;
          n && i > 0 && (i -= n.duration + n.delay),
            t.styles.forEach((t) => {
              'string' != typeof t &&
                Object.keys(t).forEach((n) => {
                  if (!this._driver.validateStyleProperty(n))
                    return void e.errors.push(
                      `The provided animation property "${n}" is not a supported CSS property for animations`
                    );
                  const r = e.collectedStyles[e.currentQuerySelector],
                    o = r[n];
                  let a = !0;
                  o &&
                    (i != s &&
                      i >= o.startTime &&
                      s <= o.endTime &&
                      (e.errors.push(
                        `The CSS property "${n}" that exists between the times of "${o.startTime}ms" and "${o.endTime}ms" is also being animated in a parallel animation between the times of "${i}ms" and "${s}ms"`
                      ),
                      (a = !1)),
                    (i = o.startTime)),
                    a && (r[n] = { startTime: i, endTime: s }),
                    e.options &&
                      (function (t, e, n) {
                        const s = e.params || {},
                          i = Uv(t);
                        i.length &&
                          i.forEach((t) => {
                            s.hasOwnProperty(t) ||
                              n.push(
                                `Unable to resolve the local animation param ${t} in the given list of values`
                              );
                          });
                      })(t[n], e.options, e.errors);
                });
            });
        }
        visitKeyframes(t, e) {
          const n = { type: 5, styles: [], options: null };
          if (!e.currentAnimateTimings)
            return (
              e.errors.push(
                'keyframes() must be placed inside of a call to animate()'
              ),
              n
            );
          let s = 0;
          const i = [];
          let r = !1,
            o = !1,
            a = 0;
          const l = t.steps.map((t) => {
            const n = this._makeStyleAst(t, e);
            let l =
                null != n.offset
                  ? n.offset
                  : (function (t) {
                      if ('string' == typeof t) return null;
                      let e = null;
                      if (Array.isArray(t))
                        t.forEach((t) => {
                          if (rb(t) && t.hasOwnProperty('offset')) {
                            const n = t;
                            (e = parseFloat(n.offset)), delete n.offset;
                          }
                        });
                      else if (rb(t) && t.hasOwnProperty('offset')) {
                        const n = t;
                        (e = parseFloat(n.offset)), delete n.offset;
                      }
                      return e;
                    })(n.styles),
              c = 0;
            return (
              null != l && (s++, (c = n.offset = l)),
              (o = o || c < 0 || c > 1),
              (r = r || c < a),
              (a = c),
              i.push(c),
              n
            );
          });
          o &&
            e.errors.push(
              'Please ensure that all keyframe offsets are between 0 and 1'
            ),
            r &&
              e.errors.push(
                'Please ensure that all keyframe offsets are in order'
              );
          const c = t.steps.length;
          let h = 0;
          s > 0 && s < c
            ? e.errors.push(
                'Not all style() steps within the declared keyframes() contain offsets'
              )
            : 0 == s && (h = 1 / (c - 1));
          const u = c - 1,
            d = e.currentTime,
            p = e.currentAnimateTimings,
            f = p.duration;
          return (
            l.forEach((t, s) => {
              const r = h > 0 ? (s == u ? 1 : h * s) : i[s],
                o = r * f;
              (e.currentTime = d + p.delay + o),
                (p.duration = o),
                this._validateStyleAst(t, e),
                (t.offset = r),
                n.styles.push(t);
            }),
            n
          );
        }
        visitReference(t, e) {
          return {
            type: 8,
            animation: Gv(this, Hv(t.animation), e),
            options: ob(t.options),
          };
        }
        visitAnimateChild(t, e) {
          return e.depCount++, { type: 9, options: ob(t.options) };
        }
        visitAnimateRef(t, e) {
          return {
            type: 10,
            animation: this.visitReference(t.animation, e),
            options: ob(t.options),
          };
        }
        visitQuery(t, e) {
          const n = e.currentQuerySelector,
            s = t.options || {};
          e.queryCount++, (e.currentQuery = t);
          const [i, r] = (function (t) {
            const e = !!t.split(/\s*,\s*/).find((t) => ':self' == t);
            return (
              e && (t = t.replace(eb, '')),
              [
                (t = t
                  .replace(/@\*/g, '.ng-trigger')
                  .replace(/@\w+/g, (t) => '.ng-trigger-' + t.substr(1))
                  .replace(/:animating/g, '.ng-animating')),
                e,
              ]
            );
          })(t.selector);
          (e.currentQuerySelector = n.length ? n + ' ' + i : i),
            gv(e.collectedStyles, e.currentQuerySelector, {});
          const o = Gv(this, Hv(t.animation), e);
          return (
            (e.currentQuery = null),
            (e.currentQuerySelector = n),
            {
              type: 11,
              selector: i,
              limit: s.limit || 0,
              optional: !!s.optional,
              includeSelf: r,
              animation: o,
              originalSelector: t.selector,
              options: ob(t.options),
            }
          );
        }
        visitStagger(t, e) {
          e.currentQuery ||
            e.errors.push('stagger() can only be used inside of query()');
          const n =
            'full' === t.timings
              ? { duration: 0, delay: 0, easing: 'full' }
              : Pv(t.timings, e.errors, !0);
          return {
            type: 12,
            animation: Gv(this, Hv(t.animation), e),
            timings: n,
            options: null,
          };
        }
      }
      class ib {
        constructor(t) {
          (this.errors = t),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = {}),
            (this.options = null);
        }
      }
      function rb(t) {
        return !Array.isArray(t) && 'object' == typeof t;
      }
      function ob(t) {
        var e;
        return (
          t
            ? (t = Nv(t)).params && (t.params = (e = t.params) ? Nv(e) : null)
            : (t = {}),
          t
        );
      }
      function ab(t, e, n) {
        return { duration: t, delay: e, easing: n };
      }
      function lb(t, e, n, s, i, r, o = null, a = !1) {
        return {
          type: 1,
          element: t,
          keyframes: e,
          preStyleProps: n,
          postStyleProps: s,
          duration: i,
          delay: r,
          totalTime: i + r,
          easing: o,
          subTimeline: a,
        };
      }
      class cb {
        constructor() {
          this._map = new Map();
        }
        consume(t) {
          let e = this._map.get(t);
          return e ? this._map.delete(t) : (e = []), e;
        }
        append(t, e) {
          let n = this._map.get(t);
          n || this._map.set(t, (n = [])), n.push(...e);
        }
        has(t) {
          return this._map.has(t);
        }
        clear() {
          this._map.clear();
        }
      }
      const hb = new RegExp(':enter', 'g'),
        ub = new RegExp(':leave', 'g');
      function db(t, e, n, s, i, r = {}, o = {}, a, l, c = []) {
        return new pb().buildKeyframes(t, e, n, s, i, r, o, a, l, c);
      }
      class pb {
        buildKeyframes(t, e, n, s, i, r, o, a, l, c = []) {
          l = l || new cb();
          const h = new mb(t, e, l, s, i, c, []);
          (h.options = a),
            h.currentTimeline.setStyles([r], null, h.errors, a),
            Gv(this, n, h);
          const u = h.timelines.filter((t) => t.containsAnimation());
          if (u.length && Object.keys(o).length) {
            const t = u[u.length - 1];
            t.allowOnlyTimelineStyles() || t.setStyles([o], null, h.errors, a);
          }
          return u.length
            ? u.map((t) => t.buildKeyframes())
            : [lb(e, [], [], [], 0, 0, '', !1)];
        }
        visitTrigger(t, e) {}
        visitState(t, e) {}
        visitTransition(t, e) {}
        visitAnimateChild(t, e) {
          const n = e.subInstructions.consume(e.element);
          if (n) {
            const s = e.createSubContext(t.options),
              i = e.currentTimeline.currentTime,
              r = this._visitSubInstructions(n, s, s.options);
            i != r && e.transformIntoNewTimeline(r);
          }
          e.previousNode = t;
        }
        visitAnimateRef(t, e) {
          const n = e.createSubContext(t.options);
          n.transformIntoNewTimeline(),
            this.visitReference(t.animation, n),
            e.transformIntoNewTimeline(n.currentTimeline.currentTime),
            (e.previousNode = t);
        }
        _visitSubInstructions(t, e, n) {
          let s = e.currentTimeline.currentTime;
          const i = null != n.duration ? Iv(n.duration) : null,
            r = null != n.delay ? Iv(n.delay) : null;
          return (
            0 !== i &&
              t.forEach((t) => {
                const n = e.appendInstructionToTimeline(t, i, r);
                s = Math.max(s, n.duration + n.delay);
              }),
            s
          );
        }
        visitReference(t, e) {
          e.updateOptions(t.options, !0),
            Gv(this, t.animation, e),
            (e.previousNode = t);
        }
        visitSequence(t, e) {
          const n = e.subContextCount;
          let s = e;
          const i = t.options;
          if (
            i &&
            (i.params || i.delay) &&
            ((s = e.createSubContext(i)),
            s.transformIntoNewTimeline(),
            null != i.delay)
          ) {
            6 == s.previousNode.type &&
              (s.currentTimeline.snapshotCurrentStyles(),
              (s.previousNode = fb));
            const t = Iv(i.delay);
            s.delayNextStep(t);
          }
          t.steps.length &&
            (t.steps.forEach((t) => Gv(this, t, s)),
            s.currentTimeline.applyStylesToKeyframe(),
            s.subContextCount > n && s.transformIntoNewTimeline()),
            (e.previousNode = t);
        }
        visitGroup(t, e) {
          const n = [];
          let s = e.currentTimeline.currentTime;
          const i = t.options && t.options.delay ? Iv(t.options.delay) : 0;
          t.steps.forEach((r) => {
            const o = e.createSubContext(t.options);
            i && o.delayNextStep(i),
              Gv(this, r, o),
              (s = Math.max(s, o.currentTimeline.currentTime)),
              n.push(o.currentTimeline);
          }),
            n.forEach((t) => e.currentTimeline.mergeTimelineCollectedStyles(t)),
            e.transformIntoNewTimeline(s),
            (e.previousNode = t);
        }
        _visitTiming(t, e) {
          if (t.dynamic) {
            const n = t.strValue;
            return Pv(e.params ? $v(n, e.params, e.errors) : n, e.errors);
          }
          return { duration: t.duration, delay: t.delay, easing: t.easing };
        }
        visitAnimate(t, e) {
          const n = (e.currentAnimateTimings = this._visitTiming(t.timings, e)),
            s = e.currentTimeline;
          n.delay && (e.incrementTime(n.delay), s.snapshotCurrentStyles());
          const i = t.style;
          5 == i.type
            ? this.visitKeyframes(i, e)
            : (e.incrementTime(n.duration),
              this.visitStyle(i, e),
              s.applyStylesToKeyframe()),
            (e.currentAnimateTimings = null),
            (e.previousNode = t);
        }
        visitStyle(t, e) {
          const n = e.currentTimeline,
            s = e.currentAnimateTimings;
          !s && n.getCurrentStyleProperties().length && n.forwardFrame();
          const i = (s && s.easing) || t.easing;
          t.isEmptyStep
            ? n.applyEmptyStep(i)
            : n.setStyles(t.styles, i, e.errors, e.options),
            (e.previousNode = t);
        }
        visitKeyframes(t, e) {
          const n = e.currentAnimateTimings,
            s = e.currentTimeline.duration,
            i = n.duration,
            r = e.createSubContext().currentTimeline;
          (r.easing = n.easing),
            t.styles.forEach((t) => {
              r.forwardTime((t.offset || 0) * i),
                r.setStyles(t.styles, t.easing, e.errors, e.options),
                r.applyStylesToKeyframe();
            }),
            e.currentTimeline.mergeTimelineCollectedStyles(r),
            e.transformIntoNewTimeline(s + i),
            (e.previousNode = t);
        }
        visitQuery(t, e) {
          const n = e.currentTimeline.currentTime,
            s = t.options || {},
            i = s.delay ? Iv(s.delay) : 0;
          i &&
            (6 === e.previousNode.type ||
              (0 == n &&
                e.currentTimeline.getCurrentStyleProperties().length)) &&
            (e.currentTimeline.snapshotCurrentStyles(), (e.previousNode = fb));
          let r = n;
          const o = e.invokeQuery(
            t.selector,
            t.originalSelector,
            t.limit,
            t.includeSelf,
            !!s.optional,
            e.errors
          );
          e.currentQueryTotal = o.length;
          let a = null;
          o.forEach((n, s) => {
            e.currentQueryIndex = s;
            const o = e.createSubContext(t.options, n);
            i && o.delayNextStep(i),
              n === e.element && (a = o.currentTimeline),
              Gv(this, t.animation, o),
              o.currentTimeline.applyStylesToKeyframe(),
              (r = Math.max(r, o.currentTimeline.currentTime));
          }),
            (e.currentQueryIndex = 0),
            (e.currentQueryTotal = 0),
            e.transformIntoNewTimeline(r),
            a &&
              (e.currentTimeline.mergeTimelineCollectedStyles(a),
              e.currentTimeline.snapshotCurrentStyles()),
            (e.previousNode = t);
        }
        visitStagger(t, e) {
          const n = e.parentContext,
            s = e.currentTimeline,
            i = t.timings,
            r = Math.abs(i.duration),
            o = r * (e.currentQueryTotal - 1);
          let a = r * e.currentQueryIndex;
          switch (i.duration < 0 ? 'reverse' : i.easing) {
            case 'reverse':
              a = o - a;
              break;
            case 'full':
              a = n.currentStaggerTime;
          }
          const l = e.currentTimeline;
          a && l.delayNextStep(a);
          const c = l.currentTime;
          Gv(this, t.animation, e),
            (e.previousNode = t),
            (n.currentStaggerTime =
              s.currentTime - c + (s.startTime - n.currentTimeline.startTime));
        }
      }
      const fb = {};
      class mb {
        constructor(t, e, n, s, i, r, o, a) {
          (this._driver = t),
            (this.element = e),
            (this.subInstructions = n),
            (this._enterClassName = s),
            (this._leaveClassName = i),
            (this.errors = r),
            (this.timelines = o),
            (this.parentContext = null),
            (this.currentAnimateTimings = null),
            (this.previousNode = fb),
            (this.subContextCount = 0),
            (this.options = {}),
            (this.currentQueryIndex = 0),
            (this.currentQueryTotal = 0),
            (this.currentStaggerTime = 0),
            (this.currentTimeline = a || new gb(this._driver, e, 0)),
            o.push(this.currentTimeline);
        }
        get params() {
          return this.options.params;
        }
        updateOptions(t, e) {
          if (!t) return;
          const n = t;
          let s = this.options;
          null != n.duration && (s.duration = Iv(n.duration)),
            null != n.delay && (s.delay = Iv(n.delay));
          const i = n.params;
          if (i) {
            let t = s.params;
            t || (t = this.options.params = {}),
              Object.keys(i).forEach((n) => {
                (e && t.hasOwnProperty(n)) || (t[n] = $v(i[n], t, this.errors));
              });
          }
        }
        _copyOptions() {
          const t = {};
          if (this.options) {
            const e = this.options.params;
            if (e) {
              const n = (t.params = {});
              Object.keys(e).forEach((t) => {
                n[t] = e[t];
              });
            }
          }
          return t;
        }
        createSubContext(t = null, e, n) {
          const s = e || this.element,
            i = new mb(
              this._driver,
              s,
              this.subInstructions,
              this._enterClassName,
              this._leaveClassName,
              this.errors,
              this.timelines,
              this.currentTimeline.fork(s, n || 0)
            );
          return (
            (i.previousNode = this.previousNode),
            (i.currentAnimateTimings = this.currentAnimateTimings),
            (i.options = this._copyOptions()),
            i.updateOptions(t),
            (i.currentQueryIndex = this.currentQueryIndex),
            (i.currentQueryTotal = this.currentQueryTotal),
            (i.parentContext = this),
            this.subContextCount++,
            i
          );
        }
        transformIntoNewTimeline(t) {
          return (
            (this.previousNode = fb),
            (this.currentTimeline = this.currentTimeline.fork(this.element, t)),
            this.timelines.push(this.currentTimeline),
            this.currentTimeline
          );
        }
        appendInstructionToTimeline(t, e, n) {
          const s = {
              duration: null != e ? e : t.duration,
              delay:
                this.currentTimeline.currentTime +
                (null != n ? n : 0) +
                t.delay,
              easing: '',
            },
            i = new yb(
              this._driver,
              t.element,
              t.keyframes,
              t.preStyleProps,
              t.postStyleProps,
              s,
              t.stretchStartingKeyframe
            );
          return this.timelines.push(i), s;
        }
        incrementTime(t) {
          this.currentTimeline.forwardTime(this.currentTimeline.duration + t);
        }
        delayNextStep(t) {
          t > 0 && this.currentTimeline.delayNextStep(t);
        }
        invokeQuery(t, e, n, s, i, r) {
          let o = [];
          if ((s && o.push(this.element), t.length > 0)) {
            t = (t = t.replace(hb, '.' + this._enterClassName)).replace(
              ub,
              '.' + this._leaveClassName
            );
            let e = this._driver.query(this.element, t, 1 != n);
            0 !== n &&
              (e = n < 0 ? e.slice(e.length + n, e.length) : e.slice(0, n)),
              o.push(...e);
          }
          return (
            i ||
              0 != o.length ||
              r.push(
                `\`query("${e}")\` returned zero elements. (Use \`query("${e}", { optional: true })\` if you wish to allow this.)`
              ),
            o
          );
        }
      }
      class gb {
        constructor(t, e, n, s) {
          (this._driver = t),
            (this.element = e),
            (this.startTime = n),
            (this._elementTimelineStylesLookup = s),
            (this.duration = 0),
            (this._previousKeyframe = {}),
            (this._currentKeyframe = {}),
            (this._keyframes = new Map()),
            (this._styleSummary = {}),
            (this._pendingStyles = {}),
            (this._backFill = {}),
            (this._currentEmptyStepKeyframe = null),
            this._elementTimelineStylesLookup ||
              (this._elementTimelineStylesLookup = new Map()),
            (this._localTimelineStyles = Object.create(this._backFill, {})),
            (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(
              e
            )),
            this._globalTimelineStyles ||
              ((this._globalTimelineStyles = this._localTimelineStyles),
              this._elementTimelineStylesLookup.set(
                e,
                this._localTimelineStyles
              )),
            this._loadKeyframe();
        }
        containsAnimation() {
          switch (this._keyframes.size) {
            case 0:
              return !1;
            case 1:
              return this.getCurrentStyleProperties().length > 0;
            default:
              return !0;
          }
        }
        getCurrentStyleProperties() {
          return Object.keys(this._currentKeyframe);
        }
        get currentTime() {
          return this.startTime + this.duration;
        }
        delayNextStep(t) {
          const e =
            1 == this._keyframes.size &&
            Object.keys(this._pendingStyles).length;
          this.duration || e
            ? (this.forwardTime(this.currentTime + t),
              e && this.snapshotCurrentStyles())
            : (this.startTime += t);
        }
        fork(t, e) {
          return (
            this.applyStylesToKeyframe(),
            new gb(
              this._driver,
              t,
              e || this.currentTime,
              this._elementTimelineStylesLookup
            )
          );
        }
        _loadKeyframe() {
          this._currentKeyframe &&
            (this._previousKeyframe = this._currentKeyframe),
            (this._currentKeyframe = this._keyframes.get(this.duration)),
            this._currentKeyframe ||
              ((this._currentKeyframe = Object.create(this._backFill, {})),
              this._keyframes.set(this.duration, this._currentKeyframe));
        }
        forwardFrame() {
          (this.duration += 1), this._loadKeyframe();
        }
        forwardTime(t) {
          this.applyStylesToKeyframe(),
            (this.duration = t),
            this._loadKeyframe();
        }
        _updateStyle(t, e) {
          (this._localTimelineStyles[t] = e),
            (this._globalTimelineStyles[t] = e),
            (this._styleSummary[t] = { time: this.currentTime, value: e });
        }
        allowOnlyTimelineStyles() {
          return this._currentEmptyStepKeyframe !== this._currentKeyframe;
        }
        applyEmptyStep(t) {
          t && (this._previousKeyframe.easing = t),
            Object.keys(this._globalTimelineStyles).forEach((t) => {
              (this._backFill[t] = this._globalTimelineStyles[t] || '*'),
                (this._currentKeyframe[t] = '*');
            }),
            (this._currentEmptyStepKeyframe = this._currentKeyframe);
        }
        setStyles(t, e, n, s) {
          e && (this._previousKeyframe.easing = e);
          const i = (s && s.params) || {},
            r = (function (t, e) {
              const n = {};
              let s;
              return (
                t.forEach((t) => {
                  '*' === t
                    ? ((s = s || Object.keys(e)),
                      s.forEach((t) => {
                        n[t] = '*';
                      }))
                    : Mv(t, !1, n);
                }),
                n
              );
            })(t, this._globalTimelineStyles);
          Object.keys(r).forEach((t) => {
            const e = $v(r[t], i, n);
            (this._pendingStyles[t] = e),
              this._localTimelineStyles.hasOwnProperty(t) ||
                (this._backFill[t] = this._globalTimelineStyles.hasOwnProperty(
                  t
                )
                  ? this._globalTimelineStyles[t]
                  : '*'),
              this._updateStyle(t, e);
          });
        }
        applyStylesToKeyframe() {
          const t = this._pendingStyles,
            e = Object.keys(t);
          0 != e.length &&
            ((this._pendingStyles = {}),
            e.forEach((e) => {
              this._currentKeyframe[e] = t[e];
            }),
            Object.keys(this._localTimelineStyles).forEach((t) => {
              this._currentKeyframe.hasOwnProperty(t) ||
                (this._currentKeyframe[t] = this._localTimelineStyles[t]);
            }));
        }
        snapshotCurrentStyles() {
          Object.keys(this._localTimelineStyles).forEach((t) => {
            const e = this._localTimelineStyles[t];
            (this._pendingStyles[t] = e), this._updateStyle(t, e);
          });
        }
        getFinalKeyframe() {
          return this._keyframes.get(this.duration);
        }
        get properties() {
          const t = [];
          for (let e in this._currentKeyframe) t.push(e);
          return t;
        }
        mergeTimelineCollectedStyles(t) {
          Object.keys(t._styleSummary).forEach((e) => {
            const n = this._styleSummary[e],
              s = t._styleSummary[e];
            (!n || s.time > n.time) && this._updateStyle(e, s.value);
          });
        }
        buildKeyframes() {
          this.applyStylesToKeyframe();
          const t = new Set(),
            e = new Set(),
            n = 1 === this._keyframes.size && 0 === this.duration;
          let s = [];
          this._keyframes.forEach((i, r) => {
            const o = Mv(i, !0);
            Object.keys(o).forEach((n) => {
              const s = o[n];
              '!' == s ? t.add(n) : '*' == s && e.add(n);
            }),
              n || (o.offset = r / this.duration),
              s.push(o);
          });
          const i = t.size ? zv(t.values()) : [],
            r = e.size ? zv(e.values()) : [];
          if (n) {
            const t = s[0],
              e = Nv(t);
            (t.offset = 0), (e.offset = 1), (s = [t, e]);
          }
          return lb(
            this.element,
            s,
            i,
            r,
            this.duration,
            this.startTime,
            this.easing,
            !1
          );
        }
      }
      class yb extends gb {
        constructor(t, e, n, s, i, r, o = !1) {
          super(t, e, r.delay),
            (this.element = e),
            (this.keyframes = n),
            (this.preStyleProps = s),
            (this.postStyleProps = i),
            (this._stretchStartingKeyframe = o),
            (this.timings = {
              duration: r.duration,
              delay: r.delay,
              easing: r.easing,
            });
        }
        containsAnimation() {
          return this.keyframes.length > 1;
        }
        buildKeyframes() {
          let t = this.keyframes,
            { delay: e, duration: n, easing: s } = this.timings;
          if (this._stretchStartingKeyframe && e) {
            const i = [],
              r = n + e,
              o = e / r,
              a = Mv(t[0], !1);
            (a.offset = 0), i.push(a);
            const l = Mv(t[0], !1);
            (l.offset = _b(o)), i.push(l);
            const c = t.length - 1;
            for (let s = 1; s <= c; s++) {
              let o = Mv(t[s], !1);
              (o.offset = _b((e + o.offset * n) / r)), i.push(o);
            }
            (n = r), (e = 0), (s = ''), (t = i);
          }
          return lb(
            this.element,
            t,
            this.preStyleProps,
            this.postStyleProps,
            n,
            e,
            s,
            !0
          );
        }
      }
      function _b(t, e = 3) {
        const n = Math.pow(10, e - 1);
        return Math.round(t * n) / n;
      }
      class vb {}
      class bb extends vb {
        normalizePropertyName(t, e) {
          return qv(t);
        }
        normalizeStyleValue(t, e, n, s) {
          let i = '';
          const r = n.toString().trim();
          if (wb[e] && 0 !== n && '0' !== n)
            if ('number' == typeof n) i = 'px';
            else {
              const e = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
              e &&
                0 == e[1].length &&
                s.push(`Please provide a CSS unit value for ${t}:${n}`);
            }
          return r + i;
        }
      }
      const wb = (() =>
        (function (t) {
          const e = {};
          return t.forEach((t) => (e[t] = !0)), e;
        })(
          'width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective'.split(
            ','
          )
        ))();
      function Sb(t, e, n, s, i, r, o, a, l, c, h, u, d) {
        return {
          type: 0,
          element: t,
          triggerName: e,
          isRemovalTransition: i,
          fromState: n,
          fromStyles: r,
          toState: s,
          toStyles: o,
          timelines: a,
          queriedElements: l,
          preStyleProps: c,
          postStyleProps: h,
          totalTime: u,
          errors: d,
        };
      }
      const Eb = {};
      class Cb {
        constructor(t, e, n) {
          (this._triggerName = t), (this.ast = e), (this._stateStyles = n);
        }
        match(t, e, n, s) {
          return (function (t, e, n, s, i) {
            return t.some((t) => t(e, n, s, i));
          })(this.ast.matchers, t, e, n, s);
        }
        buildStyles(t, e, n) {
          const s = this._stateStyles['*'],
            i = this._stateStyles[t],
            r = s ? s.buildStyles(e, n) : {};
          return i ? i.buildStyles(e, n) : r;
        }
        build(t, e, n, s, i, r, o, a, l, c) {
          const h = [],
            u = (this.ast.options && this.ast.options.params) || Eb,
            d = this.buildStyles(n, (o && o.params) || Eb, h),
            p = (a && a.params) || Eb,
            f = this.buildStyles(s, p, h),
            m = new Set(),
            g = new Map(),
            y = new Map(),
            _ = 'void' === s,
            v = { params: Object.assign({}, u, p) },
            b = c ? [] : db(t, e, this.ast.animation, i, r, d, f, v, l, h);
          let w = 0;
          if (
            (b.forEach((t) => {
              w = Math.max(t.duration + t.delay, w);
            }),
            h.length)
          )
            return Sb(e, this._triggerName, n, s, _, d, f, [], [], g, y, w, h);
          b.forEach((t) => {
            const n = t.element,
              s = gv(g, n, {});
            t.preStyleProps.forEach((t) => (s[t] = !0));
            const i = gv(y, n, {});
            t.postStyleProps.forEach((t) => (i[t] = !0)), n !== e && m.add(n);
          });
          const S = zv(m.values());
          return Sb(e, this._triggerName, n, s, _, d, f, b, S, g, y, w);
        }
      }
      class xb {
        constructor(t, e) {
          (this.styles = t), (this.defaultParams = e);
        }
        buildStyles(t, e) {
          const n = {},
            s = Nv(this.defaultParams);
          return (
            Object.keys(t).forEach((e) => {
              const n = t[e];
              null != n && (s[e] = n);
            }),
            this.styles.styles.forEach((t) => {
              if ('string' != typeof t) {
                const i = t;
                Object.keys(i).forEach((t) => {
                  let r = i[t];
                  r.length > 1 && (r = $v(r, s, e)), (n[t] = r);
                });
              }
            }),
            n
          );
        }
      }
      class Tb {
        constructor(t, e) {
          (this.name = t),
            (this.ast = e),
            (this.transitionFactories = []),
            (this.states = {}),
            e.states.forEach((t) => {
              this.states[t.name] = new xb(
                t.style,
                (t.options && t.options.params) || {}
              );
            }),
            kb(this.states, 'true', '1'),
            kb(this.states, 'false', '0'),
            e.transitions.forEach((e) => {
              this.transitionFactories.push(new Cb(t, e, this.states));
            }),
            (this.fallbackTransition = new Cb(
              t,
              {
                type: 1,
                animation: { type: 2, steps: [], options: null },
                matchers: [(t, e) => !0],
                options: null,
                queryCount: 0,
                depCount: 0,
              },
              this.states
            ));
        }
        get containsQueries() {
          return this.ast.queryCount > 0;
        }
        matchTransition(t, e, n, s) {
          return (
            this.transitionFactories.find((i) => i.match(t, e, n, s)) || null
          );
        }
        matchStyles(t, e, n) {
          return this.fallbackTransition.buildStyles(t, e, n);
        }
      }
      function kb(t, e, n) {
        t.hasOwnProperty(e)
          ? t.hasOwnProperty(n) || (t[n] = t[e])
          : t.hasOwnProperty(n) && (t[e] = t[n]);
      }
      const Db = new cb();
      class Rb {
        constructor(t, e, n) {
          (this.bodyNode = t),
            (this._driver = e),
            (this._normalizer = n),
            (this._animations = {}),
            (this._playersById = {}),
            (this.players = []);
        }
        register(t, e) {
          const n = [],
            s = nb(this._driver, e, n);
          if (n.length)
            throw new Error(
              'Unable to build the animation due to the following errors: ' +
                n.join('\n')
            );
          this._animations[t] = s;
        }
        _buildPlayer(t, e, n) {
          const s = t.element,
            i = dv(0, this._normalizer, 0, t.keyframes, e, n);
          return this._driver.animate(
            s,
            i,
            t.duration,
            t.delay,
            t.easing,
            [],
            !0
          );
        }
        create(t, e, n = {}) {
          const s = [],
            i = this._animations[t];
          let r;
          const o = new Map();
          if (
            (i
              ? ((r = db(
                  this._driver,
                  e,
                  i,
                  'ng-enter',
                  'ng-leave',
                  {},
                  {},
                  n,
                  Db,
                  s
                )),
                r.forEach((t) => {
                  const e = gv(o, t.element, {});
                  t.postStyleProps.forEach((t) => (e[t] = null));
                }))
              : (s.push(
                  "The requested animation doesn't exist or has already been destroyed"
                ),
                (r = [])),
            s.length)
          )
            throw new Error(
              'Unable to create the animation due to the following errors: ' +
                s.join('\n')
            );
          o.forEach((t, e) => {
            Object.keys(t).forEach((n) => {
              t[n] = this._driver.computeStyle(e, n, '*');
            });
          });
          const a = uv(
            r.map((t) => {
              const e = o.get(t.element);
              return this._buildPlayer(t, {}, e);
            })
          );
          return (
            (this._playersById[t] = a),
            a.onDestroy(() => this.destroy(t)),
            this.players.push(a),
            a
          );
        }
        destroy(t) {
          const e = this._getPlayer(t);
          e.destroy(), delete this._playersById[t];
          const n = this.players.indexOf(e);
          n >= 0 && this.players.splice(n, 1);
        }
        _getPlayer(t) {
          const e = this._playersById[t];
          if (!e)
            throw new Error(
              'Unable to find the timeline player referenced by ' + t
            );
          return e;
        }
        listen(t, e, n, s) {
          const i = mv(e, '', '', '');
          return pv(this._getPlayer(t), n, i, s), () => {};
        }
        command(t, e, n, s) {
          if ('register' == n) return void this.register(t, s[0]);
          if ('create' == n) return void this.create(t, e, s[0] || {});
          const i = this._getPlayer(t);
          switch (n) {
            case 'play':
              i.play();
              break;
            case 'pause':
              i.pause();
              break;
            case 'reset':
              i.reset();
              break;
            case 'restart':
              i.restart();
              break;
            case 'finish':
              i.finish();
              break;
            case 'init':
              i.init();
              break;
            case 'setPosition':
              i.setPosition(parseFloat(s[0]));
              break;
            case 'destroy':
              this.destroy(t);
          }
        }
      }
      const Ab = [],
        Ib = {
          namespaceId: '',
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1,
        },
        Ob = {
          namespaceId: '',
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0,
        };
      class Pb {
        constructor(t, e = '') {
          this.namespaceId = e;
          const n = t && t.hasOwnProperty('value');
          if (((this.value = null != (s = n ? t.value : t) ? s : null), n)) {
            const e = Nv(t);
            delete e.value, (this.options = e);
          } else this.options = {};
          var s;
          this.options.params || (this.options.params = {});
        }
        get params() {
          return this.options.params;
        }
        absorbOptions(t) {
          const e = t.params;
          if (e) {
            const t = this.options.params;
            Object.keys(e).forEach((n) => {
              null == t[n] && (t[n] = e[n]);
            });
          }
        }
      }
      const Nb = new Pb('void');
      class Mb {
        constructor(t, e, n) {
          (this.id = t),
            (this.hostElement = e),
            (this._engine = n),
            (this.players = []),
            (this._triggers = {}),
            (this._queue = []),
            (this._elementListeners = new Map()),
            (this._hostClassName = 'ng-tns-' + t),
            Ub(e, this._hostClassName);
        }
        listen(t, e, n, s) {
          if (!this._triggers.hasOwnProperty(e))
            throw new Error(
              `Unable to listen on the animation trigger event "${n}" because the animation trigger "${e}" doesn't exist!`
            );
          if (null == n || 0 == n.length)
            throw new Error(
              `Unable to listen on the animation trigger "${e}" because the provided event is undefined!`
            );
          if ('start' != (i = n) && 'done' != i)
            throw new Error(
              `The provided animation trigger event "${n}" for the animation trigger "${e}" is not supported!`
            );
          var i;
          const r = gv(this._elementListeners, t, []),
            o = { name: e, phase: n, callback: s };
          r.push(o);
          const a = gv(this._engine.statesByElement, t, {});
          return (
            a.hasOwnProperty(e) ||
              (Ub(t, 'ng-trigger'), Ub(t, 'ng-trigger-' + e), (a[e] = Nb)),
            () => {
              this._engine.afterFlush(() => {
                const t = r.indexOf(o);
                t >= 0 && r.splice(t, 1), this._triggers[e] || delete a[e];
              });
            }
          );
        }
        register(t, e) {
          return !this._triggers[t] && ((this._triggers[t] = e), !0);
        }
        _getTrigger(t) {
          const e = this._triggers[t];
          if (!e)
            throw new Error(
              `The provided animation trigger "${t}" has not been registered!`
            );
          return e;
        }
        trigger(t, e, n, s = !0) {
          const i = this._getTrigger(e),
            r = new Lb(this.id, e, t);
          let o = this._engine.statesByElement.get(t);
          o ||
            (Ub(t, 'ng-trigger'),
            Ub(t, 'ng-trigger-' + e),
            this._engine.statesByElement.set(t, (o = {})));
          let a = o[e];
          const l = new Pb(n, this.id);
          if (
            (!(n && n.hasOwnProperty('value')) &&
              a &&
              l.absorbOptions(a.options),
            (o[e] = l),
            a || (a = Nb),
            'void' !== l.value && a.value === l.value)
          ) {
            if (
              !(function (t, e) {
                const n = Object.keys(t),
                  s = Object.keys(e);
                if (n.length != s.length) return !1;
                for (let i = 0; i < n.length; i++) {
                  const s = n[i];
                  if (!e.hasOwnProperty(s) || t[s] !== e[s]) return !1;
                }
                return !0;
              })(a.params, l.params)
            ) {
              const e = [],
                n = i.matchStyles(a.value, a.params, e),
                s = i.matchStyles(l.value, l.params, e);
              e.length
                ? this._engine.reportError(e)
                : this._engine.afterFlush(() => {
                    Vv(t, n), jv(t, s);
                  });
            }
            return;
          }
          const c = gv(this._engine.playersByElement, t, []);
          c.forEach((t) => {
            t.namespaceId == this.id &&
              t.triggerName == e &&
              t.queued &&
              t.destroy();
          });
          let h = i.matchTransition(a.value, l.value, t, l.params),
            u = !1;
          if (!h) {
            if (!s) return;
            (h = i.fallbackTransition), (u = !0);
          }
          return (
            this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: t,
              triggerName: e,
              transition: h,
              fromState: a,
              toState: l,
              player: r,
              isFallbackTransition: u,
            }),
            u ||
              (Ub(t, 'ng-animate-queued'),
              r.onStart(() => {
                $b(t, 'ng-animate-queued');
              })),
            r.onDone(() => {
              let e = this.players.indexOf(r);
              e >= 0 && this.players.splice(e, 1);
              const n = this._engine.playersByElement.get(t);
              if (n) {
                let t = n.indexOf(r);
                t >= 0 && n.splice(t, 1);
              }
            }),
            this.players.push(r),
            c.push(r),
            r
          );
        }
        deregister(t) {
          delete this._triggers[t],
            this._engine.statesByElement.forEach((e, n) => {
              delete e[t];
            }),
            this._elementListeners.forEach((e, n) => {
              this._elementListeners.set(
                n,
                e.filter((e) => e.name != t)
              );
            });
        }
        clearElementCache(t) {
          this._engine.statesByElement.delete(t),
            this._elementListeners.delete(t);
          const e = this._engine.playersByElement.get(t);
          e &&
            (e.forEach((t) => t.destroy()),
            this._engine.playersByElement.delete(t));
        }
        _signalRemovalForInnerTriggers(t, e, n = !1) {
          this._engine.driver.query(t, '.ng-trigger', !0).forEach((t) => {
            if (t.__ng_removed) return;
            const n = this._engine.fetchNamespacesByElement(t);
            n.size
              ? n.forEach((n) => n.triggerLeaveAnimation(t, e, !1, !0))
              : this.clearElementCache(t);
          });
        }
        triggerLeaveAnimation(t, e, n, s) {
          const i = this._engine.statesByElement.get(t);
          if (i) {
            const r = [];
            if (
              (Object.keys(i).forEach((e) => {
                if (this._triggers[e]) {
                  const n = this.trigger(t, e, 'void', s);
                  n && r.push(n);
                }
              }),
              r.length)
            )
              return (
                this._engine.markElementAsRemoved(this.id, t, !0, e),
                n && uv(r).onDone(() => this._engine.processLeaveNode(t)),
                !0
              );
          }
          return !1;
        }
        prepareLeaveAnimationListeners(t) {
          const e = this._elementListeners.get(t);
          if (e) {
            const n = new Set();
            e.forEach((e) => {
              const s = e.name;
              if (n.has(s)) return;
              n.add(s);
              const i = this._triggers[s].fallbackTransition,
                r = this._engine.statesByElement.get(t)[s] || Nb,
                o = new Pb('void'),
                a = new Lb(this.id, s, t);
              this._engine.totalQueuedPlayers++,
                this._queue.push({
                  element: t,
                  triggerName: s,
                  transition: i,
                  fromState: r,
                  toState: o,
                  player: a,
                  isFallbackTransition: !0,
                });
            });
          }
        }
        removeNode(t, e) {
          const n = this._engine;
          if (
            (t.childElementCount &&
              this._signalRemovalForInnerTriggers(t, e, !0),
            this.triggerLeaveAnimation(t, e, !0))
          )
            return;
          let s = !1;
          if (n.totalAnimations) {
            const e = n.players.length ? n.playersByQueriedElement.get(t) : [];
            if (e && e.length) s = !0;
            else {
              let e = t;
              for (; (e = e.parentNode); )
                if (n.statesByElement.get(e)) {
                  s = !0;
                  break;
                }
            }
          }
          this.prepareLeaveAnimationListeners(t),
            s
              ? n.markElementAsRemoved(this.id, t, !1, e)
              : (n.afterFlush(() => this.clearElementCache(t)),
                n.destroyInnerAnimations(t),
                n._onRemovalComplete(t, e));
        }
        insertNode(t, e) {
          Ub(t, this._hostClassName);
        }
        drainQueuedTransitions(t) {
          const e = [];
          return (
            this._queue.forEach((n) => {
              const s = n.player;
              if (s.destroyed) return;
              const i = n.element,
                r = this._elementListeners.get(i);
              r &&
                r.forEach((e) => {
                  if (e.name == n.triggerName) {
                    const s = mv(
                      i,
                      n.triggerName,
                      n.fromState.value,
                      n.toState.value
                    );
                    (s._data = t), pv(n.player, e.phase, s, e.callback);
                  }
                }),
                s.markedForDestroy
                  ? this._engine.afterFlush(() => {
                      s.destroy();
                    })
                  : e.push(n);
            }),
            (this._queue = []),
            e.sort((t, e) => {
              const n = t.transition.ast.depCount,
                s = e.transition.ast.depCount;
              return 0 == n || 0 == s
                ? n - s
                : this._engine.driver.containsElement(t.element, e.element)
                ? 1
                : -1;
            })
          );
        }
        destroy(t) {
          this.players.forEach((t) => t.destroy()),
            this._signalRemovalForInnerTriggers(this.hostElement, t);
        }
        elementContainsData(t) {
          let e = !1;
          return (
            this._elementListeners.has(t) && (e = !0),
            (e = !!this._queue.find((e) => e.element === t) || e),
            e
          );
        }
      }
      class Fb {
        constructor(t, e, n) {
          (this.bodyNode = t),
            (this.driver = e),
            (this._normalizer = n),
            (this.players = []),
            (this.newHostElements = new Map()),
            (this.playersByElement = new Map()),
            (this.playersByQueriedElement = new Map()),
            (this.statesByElement = new Map()),
            (this.disabledNodes = new Set()),
            (this.totalAnimations = 0),
            (this.totalQueuedPlayers = 0),
            (this._namespaceLookup = {}),
            (this._namespaceList = []),
            (this._flushFns = []),
            (this._whenQuietFns = []),
            (this.namespacesByHostElement = new Map()),
            (this.collectedEnterElements = []),
            (this.collectedLeaveElements = []),
            (this.onRemovalComplete = (t, e) => {});
        }
        _onRemovalComplete(t, e) {
          this.onRemovalComplete(t, e);
        }
        get queuedPlayers() {
          const t = [];
          return (
            this._namespaceList.forEach((e) => {
              e.players.forEach((e) => {
                e.queued && t.push(e);
              });
            }),
            t
          );
        }
        createNamespace(t, e) {
          const n = new Mb(t, e, this);
          return (
            e.parentNode
              ? this._balanceNamespaceList(n, e)
              : (this.newHostElements.set(e, n), this.collectEnterElement(e)),
            (this._namespaceLookup[t] = n)
          );
        }
        _balanceNamespaceList(t, e) {
          const n = this._namespaceList.length - 1;
          if (n >= 0) {
            let s = !1;
            for (let i = n; i >= 0; i--)
              if (
                this.driver.containsElement(
                  this._namespaceList[i].hostElement,
                  e
                )
              ) {
                this._namespaceList.splice(i + 1, 0, t), (s = !0);
                break;
              }
            s || this._namespaceList.splice(0, 0, t);
          } else this._namespaceList.push(t);
          return this.namespacesByHostElement.set(e, t), t;
        }
        register(t, e) {
          let n = this._namespaceLookup[t];
          return n || (n = this.createNamespace(t, e)), n;
        }
        registerTrigger(t, e, n) {
          let s = this._namespaceLookup[t];
          s && s.register(e, n) && this.totalAnimations++;
        }
        destroy(t, e) {
          if (!t) return;
          const n = this._fetchNamespace(t);
          this.afterFlush(() => {
            this.namespacesByHostElement.delete(n.hostElement),
              delete this._namespaceLookup[t];
            const e = this._namespaceList.indexOf(n);
            e >= 0 && this._namespaceList.splice(e, 1);
          }),
            this.afterFlushAnimationsDone(() => n.destroy(e));
        }
        _fetchNamespace(t) {
          return this._namespaceLookup[t];
        }
        fetchNamespacesByElement(t) {
          const e = new Set(),
            n = this.statesByElement.get(t);
          if (n) {
            const t = Object.keys(n);
            for (let s = 0; s < t.length; s++) {
              const i = n[t[s]].namespaceId;
              if (i) {
                const t = this._fetchNamespace(i);
                t && e.add(t);
              }
            }
          }
          return e;
        }
        trigger(t, e, n, s) {
          if (jb(e)) {
            const i = this._fetchNamespace(t);
            if (i) return i.trigger(e, n, s), !0;
          }
          return !1;
        }
        insertNode(t, e, n, s) {
          if (!jb(e)) return;
          const i = e.__ng_removed;
          if (i && i.setForRemoval) {
            (i.setForRemoval = !1), (i.setForMove = !0);
            const t = this.collectedLeaveElements.indexOf(e);
            t >= 0 && this.collectedLeaveElements.splice(t, 1);
          }
          if (t) {
            const s = this._fetchNamespace(t);
            s && s.insertNode(e, n);
          }
          s && this.collectEnterElement(e);
        }
        collectEnterElement(t) {
          this.collectedEnterElements.push(t);
        }
        markElementAsDisabled(t, e) {
          e
            ? this.disabledNodes.has(t) ||
              (this.disabledNodes.add(t), Ub(t, 'ng-animate-disabled'))
            : this.disabledNodes.has(t) &&
              (this.disabledNodes.delete(t), $b(t, 'ng-animate-disabled'));
        }
        removeNode(t, e, n, s) {
          if (jb(e)) {
            const i = t ? this._fetchNamespace(t) : null;
            if (
              (i ? i.removeNode(e, s) : this.markElementAsRemoved(t, e, !1, s),
              n)
            ) {
              const n = this.namespacesByHostElement.get(e);
              n && n.id !== t && n.removeNode(e, s);
            }
          } else this._onRemovalComplete(e, s);
        }
        markElementAsRemoved(t, e, n, s) {
          this.collectedLeaveElements.push(e),
            (e.__ng_removed = {
              namespaceId: t,
              setForRemoval: s,
              hasAnimation: n,
              removedBeforeQueried: !1,
            });
        }
        listen(t, e, n, s, i) {
          return jb(e) ? this._fetchNamespace(t).listen(e, n, s, i) : () => {};
        }
        _buildInstruction(t, e, n, s, i) {
          return t.transition.build(
            this.driver,
            t.element,
            t.fromState.value,
            t.toState.value,
            n,
            s,
            t.fromState.options,
            t.toState.options,
            e,
            i
          );
        }
        destroyInnerAnimations(t) {
          let e = this.driver.query(t, '.ng-trigger', !0);
          e.forEach((t) => this.destroyActiveAnimationsForElement(t)),
            0 != this.playersByQueriedElement.size &&
              ((e = this.driver.query(t, '.ng-animating', !0)),
              e.forEach((t) => this.finishActiveQueriedAnimationOnElement(t)));
        }
        destroyActiveAnimationsForElement(t) {
          const e = this.playersByElement.get(t);
          e &&
            e.forEach((t) => {
              t.queued ? (t.markedForDestroy = !0) : t.destroy();
            });
        }
        finishActiveQueriedAnimationOnElement(t) {
          const e = this.playersByQueriedElement.get(t);
          e && e.forEach((t) => t.finish());
        }
        whenRenderingDone() {
          return new Promise((t) => {
            if (this.players.length) return uv(this.players).onDone(() => t());
            t();
          });
        }
        processLeaveNode(t) {
          const e = t.__ng_removed;
          if (e && e.setForRemoval) {
            if (((t.__ng_removed = Ib), e.namespaceId)) {
              this.destroyInnerAnimations(t);
              const n = this._fetchNamespace(e.namespaceId);
              n && n.clearElementCache(t);
            }
            this._onRemovalComplete(t, e.setForRemoval);
          }
          this.driver.matchesElement(t, '.ng-animate-disabled') &&
            this.markElementAsDisabled(t, !1),
            this.driver.query(t, '.ng-animate-disabled', !0).forEach((t) => {
              this.markElementAsDisabled(t, !1);
            });
        }
        flush(t = -1) {
          let e = [];
          if (
            (this.newHostElements.size &&
              (this.newHostElements.forEach((t, e) =>
                this._balanceNamespaceList(t, e)
              ),
              this.newHostElements.clear()),
            this.totalAnimations && this.collectedEnterElements.length)
          )
            for (let n = 0; n < this.collectedEnterElements.length; n++)
              Ub(this.collectedEnterElements[n], 'ng-star-inserted');
          if (
            this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)
          ) {
            const n = [];
            try {
              e = this._flushAnimations(n, t);
            } finally {
              for (let t = 0; t < n.length; t++) n[t]();
            }
          } else
            for (let n = 0; n < this.collectedLeaveElements.length; n++)
              this.processLeaveNode(this.collectedLeaveElements[n]);
          if (
            ((this.totalQueuedPlayers = 0),
            (this.collectedEnterElements.length = 0),
            (this.collectedLeaveElements.length = 0),
            this._flushFns.forEach((t) => t()),
            (this._flushFns = []),
            this._whenQuietFns.length)
          ) {
            const t = this._whenQuietFns;
            (this._whenQuietFns = []),
              e.length
                ? uv(e).onDone(() => {
                    t.forEach((t) => t());
                  })
                : t.forEach((t) => t());
          }
        }
        reportError(t) {
          throw new Error(
            'Unable to process animations due to the following failed trigger transitions\n ' +
              t.join('\n')
          );
        }
        _flushAnimations(t, e) {
          const n = new cb(),
            s = [],
            i = new Map(),
            r = [],
            o = new Map(),
            a = new Map(),
            l = new Map(),
            c = new Set();
          this.disabledNodes.forEach((t) => {
            c.add(t);
            const e = this.driver.query(t, '.ng-animate-queued', !0);
            for (let n = 0; n < e.length; n++) c.add(e[n]);
          });
          const h = this.bodyNode,
            u = Array.from(this.statesByElement.keys()),
            d = Bb(u, this.collectedEnterElements),
            p = new Map();
          let f = 0;
          d.forEach((t, e) => {
            const n = 'ng-enter' + f++;
            p.set(e, n), t.forEach((t) => Ub(t, n));
          });
          const m = [],
            g = new Set(),
            y = new Set();
          for (let A = 0; A < this.collectedLeaveElements.length; A++) {
            const t = this.collectedLeaveElements[A],
              e = t.__ng_removed;
            e &&
              e.setForRemoval &&
              (m.push(t),
              g.add(t),
              e.hasAnimation
                ? this.driver
                    .query(t, '.ng-star-inserted', !0)
                    .forEach((t) => g.add(t))
                : y.add(t));
          }
          const _ = new Map(),
            v = Bb(u, Array.from(g));
          v.forEach((t, e) => {
            const n = 'ng-leave' + f++;
            _.set(e, n), t.forEach((t) => Ub(t, n));
          }),
            t.push(() => {
              d.forEach((t, e) => {
                const n = p.get(e);
                t.forEach((t) => $b(t, n));
              }),
                v.forEach((t, e) => {
                  const n = _.get(e);
                  t.forEach((t) => $b(t, n));
                }),
                m.forEach((t) => {
                  this.processLeaveNode(t);
                });
            });
          const b = [],
            w = [];
          for (let A = this._namespaceList.length - 1; A >= 0; A--)
            this._namespaceList[A].drainQueuedTransitions(e).forEach((t) => {
              const e = t.player,
                i = t.element;
              if ((b.push(e), this.collectedEnterElements.length)) {
                const t = i.__ng_removed;
                if (t && t.setForMove) return void e.destroy();
              }
              const c = !h || !this.driver.containsElement(h, i),
                u = _.get(i),
                d = p.get(i),
                f = this._buildInstruction(t, n, d, u, c);
              if (f.errors && f.errors.length) w.push(f);
              else {
                if (c)
                  return (
                    e.onStart(() => Vv(i, f.fromStyles)),
                    e.onDestroy(() => jv(i, f.toStyles)),
                    void s.push(e)
                  );
                if (t.isFallbackTransition)
                  return (
                    e.onStart(() => Vv(i, f.fromStyles)),
                    e.onDestroy(() => jv(i, f.toStyles)),
                    void s.push(e)
                  );
                f.timelines.forEach((t) => (t.stretchStartingKeyframe = !0)),
                  n.append(i, f.timelines),
                  r.push({ instruction: f, player: e, element: i }),
                  f.queriedElements.forEach((t) => gv(o, t, []).push(e)),
                  f.preStyleProps.forEach((t, e) => {
                    const n = Object.keys(t);
                    if (n.length) {
                      let t = a.get(e);
                      t || a.set(e, (t = new Set())),
                        n.forEach((e) => t.add(e));
                    }
                  }),
                  f.postStyleProps.forEach((t, e) => {
                    const n = Object.keys(t);
                    let s = l.get(e);
                    s || l.set(e, (s = new Set())), n.forEach((t) => s.add(t));
                  });
              }
            });
          if (w.length) {
            const t = [];
            w.forEach((e) => {
              t.push(`@${e.triggerName} has failed due to:\n`),
                e.errors.forEach((e) => t.push(`- ${e}\n`));
            }),
              b.forEach((t) => t.destroy()),
              this.reportError(t);
          }
          const S = new Map(),
            E = new Map();
          r.forEach((t) => {
            const e = t.element;
            n.has(e) &&
              (E.set(e, e),
              this._beforeAnimationBuild(
                t.player.namespaceId,
                t.instruction,
                S
              ));
          }),
            s.forEach((t) => {
              const e = t.element;
              this._getPreviousPlayers(
                e,
                !1,
                t.namespaceId,
                t.triggerName,
                null
              ).forEach((t) => {
                gv(S, e, []).push(t), t.destroy();
              });
            });
          const C = m.filter((t) => Wb(t, a, l)),
            x = new Map();
          Hb(x, this.driver, y, l, '*').forEach((t) => {
            Wb(t, a, l) && C.push(t);
          });
          const T = new Map();
          d.forEach((t, e) => {
            Hb(T, this.driver, new Set(t), a, '!');
          }),
            C.forEach((t) => {
              const e = x.get(t),
                n = T.get(t);
              x.set(t, Object.assign({}, e, n));
            });
          const k = [],
            D = [],
            R = {};
          r.forEach((t) => {
            const { element: e, player: r, instruction: o } = t;
            if (n.has(e)) {
              if (c.has(e))
                return (
                  r.onDestroy(() => jv(e, o.toStyles)),
                  (r.disabled = !0),
                  r.overrideTotalTime(o.totalTime),
                  void s.push(r)
                );
              let t = R;
              if (E.size > 1) {
                let n = e;
                const s = [];
                for (; (n = n.parentNode); ) {
                  const e = E.get(n);
                  if (e) {
                    t = e;
                    break;
                  }
                  s.push(n);
                }
                s.forEach((e) => E.set(e, t));
              }
              const n = this._buildAnimation(r.namespaceId, o, S, i, T, x);
              if ((r.setRealPlayer(n), t === R)) k.push(r);
              else {
                const e = this.playersByElement.get(t);
                e && e.length && (r.parentPlayer = uv(e)), s.push(r);
              }
            } else
              Vv(e, o.fromStyles),
                r.onDestroy(() => jv(e, o.toStyles)),
                D.push(r),
                c.has(e) && s.push(r);
          }),
            D.forEach((t) => {
              const e = i.get(t.element);
              if (e && e.length) {
                const n = uv(e);
                t.setRealPlayer(n);
              }
            }),
            s.forEach((t) => {
              t.parentPlayer ? t.syncPlayerEvents(t.parentPlayer) : t.destroy();
            });
          for (let A = 0; A < m.length; A++) {
            const t = m[A],
              e = t.__ng_removed;
            if (($b(t, 'ng-leave'), e && e.hasAnimation)) continue;
            let n = [];
            if (o.size) {
              let e = o.get(t);
              e && e.length && n.push(...e);
              let s = this.driver.query(t, '.ng-animating', !0);
              for (let t = 0; t < s.length; t++) {
                let e = o.get(s[t]);
                e && e.length && n.push(...e);
              }
            }
            const s = n.filter((t) => !t.destroyed);
            s.length ? zb(this, t, s) : this.processLeaveNode(t);
          }
          return (
            (m.length = 0),
            k.forEach((t) => {
              this.players.push(t),
                t.onDone(() => {
                  t.destroy();
                  const e = this.players.indexOf(t);
                  this.players.splice(e, 1);
                }),
                t.play();
            }),
            k
          );
        }
        elementContainsData(t, e) {
          let n = !1;
          const s = e.__ng_removed;
          return (
            s && s.setForRemoval && (n = !0),
            this.playersByElement.has(e) && (n = !0),
            this.playersByQueriedElement.has(e) && (n = !0),
            this.statesByElement.has(e) && (n = !0),
            this._fetchNamespace(t).elementContainsData(e) || n
          );
        }
        afterFlush(t) {
          this._flushFns.push(t);
        }
        afterFlushAnimationsDone(t) {
          this._whenQuietFns.push(t);
        }
        _getPreviousPlayers(t, e, n, s, i) {
          let r = [];
          if (e) {
            const e = this.playersByQueriedElement.get(t);
            e && (r = e);
          } else {
            const e = this.playersByElement.get(t);
            if (e) {
              const t = !i || 'void' == i;
              e.forEach((e) => {
                e.queued || ((t || e.triggerName == s) && r.push(e));
              });
            }
          }
          return (
            (n || s) &&
              (r = r.filter(
                (t) => !((n && n != t.namespaceId) || (s && s != t.triggerName))
              )),
            r
          );
        }
        _beforeAnimationBuild(t, e, n) {
          const s = e.element,
            i = e.isRemovalTransition ? void 0 : t,
            r = e.isRemovalTransition ? void 0 : e.triggerName;
          for (const o of e.timelines) {
            const t = o.element,
              a = t !== s,
              l = gv(n, t, []);
            this._getPreviousPlayers(t, a, i, r, e.toState).forEach((t) => {
              const e = t.getRealPlayer();
              e.beforeDestroy && e.beforeDestroy(), t.destroy(), l.push(t);
            });
          }
          Vv(s, e.fromStyles);
        }
        _buildAnimation(t, e, n, s, i, r) {
          const o = e.triggerName,
            a = e.element,
            l = [],
            c = new Set(),
            h = new Set(),
            u = e.timelines.map((e) => {
              const u = e.element;
              c.add(u);
              const d = u.__ng_removed;
              if (d && d.removedBeforeQueried)
                return new lf(e.duration, e.delay);
              const p = u !== a,
                f = (function (t) {
                  const e = [];
                  return (
                    (function t(e, n) {
                      for (let s = 0; s < e.length; s++) {
                        const i = e[s];
                        i instanceof cf ? t(i.players, n) : n.push(i);
                      }
                    })(t, e),
                    e
                  );
                })((n.get(u) || Ab).map((t) => t.getRealPlayer())).filter(
                  (t) => !!t.element && t.element === u
                ),
                m = i.get(u),
                g = r.get(u),
                y = dv(0, this._normalizer, 0, e.keyframes, m, g),
                _ = this._buildPlayer(e, y, f);
              if ((e.subTimeline && s && h.add(u), p)) {
                const e = new Lb(t, o, u);
                e.setRealPlayer(_), l.push(e);
              }
              return _;
            });
          l.forEach((t) => {
            gv(this.playersByQueriedElement, t.element, []).push(t),
              t.onDone(() =>
                (function (t, e, n) {
                  let s;
                  if (t instanceof Map) {
                    if (((s = t.get(e)), s)) {
                      if (s.length) {
                        const t = s.indexOf(n);
                        s.splice(t, 1);
                      }
                      0 == s.length && t.delete(e);
                    }
                  } else if (((s = t[e]), s)) {
                    if (s.length) {
                      const t = s.indexOf(n);
                      s.splice(t, 1);
                    }
                    0 == s.length && delete t[e];
                  }
                  return s;
                })(this.playersByQueriedElement, t.element, t)
              );
          }),
            c.forEach((t) => Ub(t, 'ng-animating'));
          const d = uv(u);
          return (
            d.onDestroy(() => {
              c.forEach((t) => $b(t, 'ng-animating')), jv(a, e.toStyles);
            }),
            h.forEach((t) => {
              gv(s, t, []).push(d);
            }),
            d
          );
        }
        _buildPlayer(t, e, n) {
          return e.length > 0
            ? this.driver.animate(
                t.element,
                e,
                t.duration,
                t.delay,
                t.easing,
                n
              )
            : new lf(t.duration, t.delay);
        }
      }
      class Lb {
        constructor(t, e, n) {
          (this.namespaceId = t),
            (this.triggerName = e),
            (this.element = n),
            (this._player = new lf()),
            (this._containsRealPlayer = !1),
            (this._queuedCallbacks = {}),
            (this.destroyed = !1),
            (this.markedForDestroy = !1),
            (this.disabled = !1),
            (this.queued = !0),
            (this.totalTime = 0);
        }
        setRealPlayer(t) {
          this._containsRealPlayer ||
            ((this._player = t),
            Object.keys(this._queuedCallbacks).forEach((e) => {
              this._queuedCallbacks[e].forEach((n) => pv(t, e, void 0, n));
            }),
            (this._queuedCallbacks = {}),
            (this._containsRealPlayer = !0),
            this.overrideTotalTime(t.totalTime),
            (this.queued = !1));
        }
        getRealPlayer() {
          return this._player;
        }
        overrideTotalTime(t) {
          this.totalTime = t;
        }
        syncPlayerEvents(t) {
          const e = this._player;
          e.triggerCallback && t.onStart(() => e.triggerCallback('start')),
            t.onDone(() => this.finish()),
            t.onDestroy(() => this.destroy());
        }
        _queueEvent(t, e) {
          gv(this._queuedCallbacks, t, []).push(e);
        }
        onDone(t) {
          this.queued && this._queueEvent('done', t), this._player.onDone(t);
        }
        onStart(t) {
          this.queued && this._queueEvent('start', t), this._player.onStart(t);
        }
        onDestroy(t) {
          this.queued && this._queueEvent('destroy', t),
            this._player.onDestroy(t);
        }
        init() {
          this._player.init();
        }
        hasStarted() {
          return !this.queued && this._player.hasStarted();
        }
        play() {
          !this.queued && this._player.play();
        }
        pause() {
          !this.queued && this._player.pause();
        }
        restart() {
          !this.queued && this._player.restart();
        }
        finish() {
          this._player.finish();
        }
        destroy() {
          (this.destroyed = !0), this._player.destroy();
        }
        reset() {
          !this.queued && this._player.reset();
        }
        setPosition(t) {
          this.queued || this._player.setPosition(t);
        }
        getPosition() {
          return this.queued ? 0 : this._player.getPosition();
        }
        triggerCallback(t) {
          const e = this._player;
          e.triggerCallback && e.triggerCallback(t);
        }
      }
      function jb(t) {
        return t && 1 === t.nodeType;
      }
      function Vb(t, e) {
        const n = t.style.display;
        return (t.style.display = null != e ? e : 'none'), n;
      }
      function Hb(t, e, n, s, i) {
        const r = [];
        n.forEach((t) => r.push(Vb(t)));
        const o = [];
        s.forEach((n, s) => {
          const r = {};
          n.forEach((t) => {
            const n = (r[t] = e.computeStyle(s, t, i));
            (n && 0 != n.length) || ((s.__ng_removed = Ob), o.push(s));
          }),
            t.set(s, r);
        });
        let a = 0;
        return n.forEach((t) => Vb(t, r[a++])), o;
      }
      function Bb(t, e) {
        const n = new Map();
        if ((t.forEach((t) => n.set(t, [])), 0 == e.length)) return n;
        const s = new Set(e),
          i = new Map();
        return (
          e.forEach((t) => {
            const e = (function t(e) {
              if (!e) return 1;
              let r = i.get(e);
              if (r) return r;
              const o = e.parentNode;
              return (r = n.has(o) ? o : s.has(o) ? 1 : t(o)), i.set(e, r), r;
            })(t);
            1 !== e && n.get(e).push(t);
          }),
          n
        );
      }
      function Ub(t, e) {
        if (t.classList) t.classList.add(e);
        else {
          let n = t.$$classes;
          n || (n = t.$$classes = {}), (n[e] = !0);
        }
      }
      function $b(t, e) {
        if (t.classList) t.classList.remove(e);
        else {
          let n = t.$$classes;
          n && delete n[e];
        }
      }
      function zb(t, e, n) {
        uv(n).onDone(() => t.processLeaveNode(e));
      }
      function Wb(t, e, n) {
        const s = n.get(t);
        if (!s) return !1;
        let i = e.get(t);
        return i ? s.forEach((t) => i.add(t)) : e.set(t, s), n.delete(t), !0;
      }
      class qb {
        constructor(t, e, n) {
          (this.bodyNode = t),
            (this._driver = e),
            (this._triggerCache = {}),
            (this.onRemovalComplete = (t, e) => {}),
            (this._transitionEngine = new Fb(t, e, n)),
            (this._timelineEngine = new Rb(t, e, n)),
            (this._transitionEngine.onRemovalComplete = (t, e) =>
              this.onRemovalComplete(t, e));
        }
        registerTrigger(t, e, n, s, i) {
          const r = t + '-' + s;
          let o = this._triggerCache[r];
          if (!o) {
            const t = [],
              e = nb(this._driver, i, t);
            if (t.length)
              throw new Error(
                `The animation trigger "${s}" has failed to build due to the following errors:\n - ${t.join(
                  '\n - '
                )}`
              );
            (o = (function (t, e) {
              return new Tb(t, e);
            })(s, e)),
              (this._triggerCache[r] = o);
          }
          this._transitionEngine.registerTrigger(e, s, o);
        }
        register(t, e) {
          this._transitionEngine.register(t, e);
        }
        destroy(t, e) {
          this._transitionEngine.destroy(t, e);
        }
        onInsert(t, e, n, s) {
          this._transitionEngine.insertNode(t, e, n, s);
        }
        onRemove(t, e, n, s) {
          this._transitionEngine.removeNode(t, e, s || !1, n);
        }
        disableAnimations(t, e) {
          this._transitionEngine.markElementAsDisabled(t, e);
        }
        process(t, e, n, s) {
          if ('@' == n.charAt(0)) {
            const [t, i] = yv(n);
            this._timelineEngine.command(t, e, i, s);
          } else this._transitionEngine.trigger(t, e, n, s);
        }
        listen(t, e, n, s, i) {
          if ('@' == n.charAt(0)) {
            const [t, s] = yv(n);
            return this._timelineEngine.listen(t, e, s, i);
          }
          return this._transitionEngine.listen(t, e, n, s, i);
        }
        flush(t = -1) {
          this._transitionEngine.flush(t);
        }
        get players() {
          return this._transitionEngine.players.concat(
            this._timelineEngine.players
          );
        }
        whenRenderingDone() {
          return this._transitionEngine.whenRenderingDone();
        }
      }
      function Kb(t, e) {
        let n = null,
          s = null;
        return (
          Array.isArray(e) && e.length
            ? ((n = Gb(e[0])), e.length > 1 && (s = Gb(e[e.length - 1])))
            : e && (n = Gb(e)),
          n || s ? new Zb(t, n, s) : null
        );
      }
      let Zb = (() => {
        class t {
          constructor(e, n, s) {
            (this._element = e),
              (this._startStyles = n),
              (this._endStyles = s),
              (this._state = 0);
            let i = t.initialStylesByElement.get(e);
            i || t.initialStylesByElement.set(e, (i = {})),
              (this._initialStyles = i);
          }
          start() {
            this._state < 1 &&
              (this._startStyles &&
                jv(this._element, this._startStyles, this._initialStyles),
              (this._state = 1));
          }
          finish() {
            this.start(),
              this._state < 2 &&
                (jv(this._element, this._initialStyles),
                this._endStyles &&
                  (jv(this._element, this._endStyles),
                  (this._endStyles = null)),
                (this._state = 1));
          }
          destroy() {
            this.finish(),
              this._state < 3 &&
                (t.initialStylesByElement.delete(this._element),
                this._startStyles &&
                  (Vv(this._element, this._startStyles),
                  (this._endStyles = null)),
                this._endStyles &&
                  (Vv(this._element, this._endStyles),
                  (this._endStyles = null)),
                jv(this._element, this._initialStyles),
                (this._state = 3));
          }
        }
        return (t.initialStylesByElement = new WeakMap()), t;
      })();
      function Gb(t) {
        let e = null;
        const n = Object.keys(t);
        for (let s = 0; s < n.length; s++) {
          const i = n[s];
          Qb(i) && ((e = e || {}), (e[i] = t[i]));
        }
        return e;
      }
      function Qb(t) {
        return 'display' === t || 'position' === t;
      }
      class Yb {
        constructor(t, e, n, s, i, r, o) {
          (this._element = t),
            (this._name = e),
            (this._duration = n),
            (this._delay = s),
            (this._easing = i),
            (this._fillMode = r),
            (this._onDoneFn = o),
            (this._finished = !1),
            (this._destroyed = !1),
            (this._startTime = 0),
            (this._position = 0),
            (this._eventFn = (t) => this._handleCallback(t));
        }
        apply() {
          !(function (t, e) {
            const n = sw(t, '').trim();
            n.length &&
              ((function (t, e) {
                let n = 0;
                for (let s = 0; s < t.length; s++) ',' === t.charAt(s) && n++;
              })(n),
              (e = `${n}, ${e}`)),
              nw(t, '', e);
          })(
            this._element,
            `${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`
          ),
            ew(this._element, this._eventFn, !1),
            (this._startTime = Date.now());
        }
        pause() {
          Xb(this._element, this._name, 'paused');
        }
        resume() {
          Xb(this._element, this._name, 'running');
        }
        setPosition(t) {
          const e = Jb(this._element, this._name);
          (this._position = t * this._duration),
            nw(this._element, 'Delay', `-${this._position}ms`, e);
        }
        getPosition() {
          return this._position;
        }
        _handleCallback(t) {
          const e = t._ngTestManualTimestamp || Date.now(),
            n = 1e3 * parseFloat(t.elapsedTime.toFixed(3));
          t.animationName == this._name &&
            Math.max(e - this._startTime, 0) >= this._delay &&
            n >= this._duration &&
            this.finish();
        }
        finish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFn(),
            ew(this._element, this._eventFn, !0));
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.finish(),
            (function (t, e) {
              const n = sw(t, '').split(','),
                s = tw(n, e);
              s >= 0 && (n.splice(s, 1), nw(t, '', n.join(',')));
            })(this._element, this._name));
        }
      }
      function Xb(t, e, n) {
        nw(t, 'PlayState', n, Jb(t, e));
      }
      function Jb(t, e) {
        const n = sw(t, '');
        return n.indexOf(',') > 0 ? tw(n.split(','), e) : tw([n], e);
      }
      function tw(t, e) {
        for (let n = 0; n < t.length; n++) if (t[n].indexOf(e) >= 0) return n;
        return -1;
      }
      function ew(t, e, n) {
        n
          ? t.removeEventListener('animationend', e)
          : t.addEventListener('animationend', e);
      }
      function nw(t, e, n, s) {
        const i = 'animation' + e;
        if (null != s) {
          const e = t.style[i];
          if (e.length) {
            const t = e.split(',');
            (t[s] = n), (n = t.join(','));
          }
        }
        t.style[i] = n;
      }
      function sw(t, e) {
        return t.style['animation' + e];
      }
      class iw {
        constructor(t, e, n, s, i, r, o, a) {
          (this.element = t),
            (this.keyframes = e),
            (this.animationName = n),
            (this._duration = s),
            (this._delay = i),
            (this._finalStyles = o),
            (this._specialStyles = a),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this.currentSnapshot = {}),
            (this._state = 0),
            (this.easing = r || 'linear'),
            (this.totalTime = s + i),
            this._buildStyler();
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        destroy() {
          this.init(),
            this._state >= 4 ||
              ((this._state = 4),
              this._styler.destroy(),
              this._flushStartFns(),
              this._flushDoneFns(),
              this._specialStyles && this._specialStyles.destroy(),
              this._onDestroyFns.forEach((t) => t()),
              (this._onDestroyFns = []));
        }
        _flushDoneFns() {
          this._onDoneFns.forEach((t) => t()), (this._onDoneFns = []);
        }
        _flushStartFns() {
          this._onStartFns.forEach((t) => t()), (this._onStartFns = []);
        }
        finish() {
          this.init(),
            this._state >= 3 ||
              ((this._state = 3),
              this._styler.finish(),
              this._flushStartFns(),
              this._specialStyles && this._specialStyles.finish(),
              this._flushDoneFns());
        }
        setPosition(t) {
          this._styler.setPosition(t);
        }
        getPosition() {
          return this._styler.getPosition();
        }
        hasStarted() {
          return this._state >= 2;
        }
        init() {
          this._state >= 1 ||
            ((this._state = 1),
            this._styler.apply(),
            this._delay && this._styler.pause());
        }
        play() {
          this.init(),
            this.hasStarted() ||
              (this._flushStartFns(),
              (this._state = 2),
              this._specialStyles && this._specialStyles.start()),
            this._styler.resume();
        }
        pause() {
          this.init(), this._styler.pause();
        }
        restart() {
          this.reset(), this.play();
        }
        reset() {
          this._styler.destroy(), this._buildStyler(), this._styler.apply();
        }
        _buildStyler() {
          this._styler = new Yb(
            this.element,
            this.animationName,
            this._duration,
            this._delay,
            this.easing,
            'forwards',
            () => this.finish()
          );
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
        beforeDestroy() {
          this.init();
          const t = {};
          if (this.hasStarted()) {
            const e = this._state >= 3;
            Object.keys(this._finalStyles).forEach((n) => {
              'offset' != n &&
                (t[n] = e ? this._finalStyles[n] : Qv(this.element, n));
            });
          }
          this.currentSnapshot = t;
        }
      }
      class rw extends lf {
        constructor(t, e) {
          super(),
            (this.element = t),
            (this._startingStyles = {}),
            (this.__initialized = !1),
            (this._styles = Dv(e));
        }
        init() {
          !this.__initialized &&
            this._startingStyles &&
            ((this.__initialized = !0),
            Object.keys(this._styles).forEach((t) => {
              this._startingStyles[t] = this.element.style[t];
            }),
            super.init());
        }
        play() {
          this._startingStyles &&
            (this.init(),
            Object.keys(this._styles).forEach((t) =>
              this.element.style.setProperty(t, this._styles[t])
            ),
            super.play());
        }
        destroy() {
          this._startingStyles &&
            (Object.keys(this._startingStyles).forEach((t) => {
              const e = this._startingStyles[t];
              e
                ? this.element.style.setProperty(t, e)
                : this.element.style.removeProperty(t);
            }),
            (this._startingStyles = null),
            super.destroy());
        }
      }
      class ow {
        constructor() {
          (this._count = 0),
            (this._head = document.querySelector('head')),
            (this._warningIssued = !1);
        }
        validateStyleProperty(t) {
          return Cv(t);
        }
        matchesElement(t, e) {
          return xv(t, e);
        }
        containsElement(t, e) {
          return Tv(t, e);
        }
        query(t, e, n) {
          return kv(t, e, n);
        }
        computeStyle(t, e, n) {
          return window.getComputedStyle(t)[e];
        }
        buildKeyframeElement(t, e, n) {
          n = n.map((t) => Dv(t));
          let s = `@keyframes ${e} {\n`,
            i = '';
          n.forEach((t) => {
            i = ' ';
            const e = parseFloat(t.offset);
            (s += `${i}${100 * e}% {\n`),
              (i += ' '),
              Object.keys(t).forEach((e) => {
                const n = t[e];
                switch (e) {
                  case 'offset':
                    return;
                  case 'easing':
                    return void (
                      n && (s += `${i}animation-timing-function: ${n};\n`)
                    );
                  default:
                    return void (s += `${i}${e}: ${n};\n`);
                }
              }),
              (s += i + '}\n');
          }),
            (s += '}\n');
          const r = document.createElement('style');
          return (r.innerHTML = s), r;
        }
        animate(t, e, n, s, i, r = [], o) {
          o && this._notifyFaultyScrubber();
          const a = r.filter((t) => t instanceof iw),
            l = {};
          Kv(n, s) &&
            a.forEach((t) => {
              let e = t.currentSnapshot;
              Object.keys(e).forEach((t) => (l[t] = e[t]));
            });
          const c = (function (t) {
            let e = {};
            return (
              t &&
                (Array.isArray(t) ? t : [t]).forEach((t) => {
                  Object.keys(t).forEach((n) => {
                    'offset' != n && 'easing' != n && (e[n] = t[n]);
                  });
                }),
              e
            );
          })((e = Zv(t, e, l)));
          if (0 == n) return new rw(t, c);
          const h = 'gen_css_kf_' + this._count++,
            u = this.buildKeyframeElement(t, h, e);
          document.querySelector('head').appendChild(u);
          const d = Kb(t, e),
            p = new iw(t, e, h, n, s, i, c, d);
          return (
            p.onDestroy(() => {
              var t;
              (t = u).parentNode.removeChild(t);
            }),
            p
          );
        }
        _notifyFaultyScrubber() {
          this._warningIssued ||
            (console.warn(
              '@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n',
              '  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill.'
            ),
            (this._warningIssued = !0));
        }
      }
      class aw {
        constructor(t, e, n, s) {
          (this.element = t),
            (this.keyframes = e),
            (this.options = n),
            (this._specialStyles = s),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._initialized = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this.time = 0),
            (this.parentPlayer = null),
            (this.currentSnapshot = {}),
            (this._duration = n.duration),
            (this._delay = n.delay || 0),
            (this.time = this._duration + this._delay);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((t) => t()),
            (this._onDoneFns = []));
        }
        init() {
          this._buildPlayer(), this._preparePlayerBeforeStart();
        }
        _buildPlayer() {
          if (this._initialized) return;
          this._initialized = !0;
          const t = this.keyframes;
          (this.domPlayer = this._triggerWebAnimation(
            this.element,
            t,
            this.options
          )),
            (this._finalKeyframe = t.length ? t[t.length - 1] : {}),
            this.domPlayer.addEventListener('finish', () => this._onFinish());
        }
        _preparePlayerBeforeStart() {
          this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
        }
        _triggerWebAnimation(t, e, n) {
          return t.animate(e, n);
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        play() {
          this._buildPlayer(),
            this.hasStarted() ||
              (this._onStartFns.forEach((t) => t()),
              (this._onStartFns = []),
              (this._started = !0),
              this._specialStyles && this._specialStyles.start()),
            this.domPlayer.play();
        }
        pause() {
          this.init(), this.domPlayer.pause();
        }
        finish() {
          this.init(),
            this._specialStyles && this._specialStyles.finish(),
            this._onFinish(),
            this.domPlayer.finish();
        }
        reset() {
          this._resetDomPlayerState(),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        _resetDomPlayerState() {
          this.domPlayer && this.domPlayer.cancel();
        }
        restart() {
          this.reset(), this.play();
        }
        hasStarted() {
          return this._started;
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._resetDomPlayerState(),
            this._onFinish(),
            this._specialStyles && this._specialStyles.destroy(),
            this._onDestroyFns.forEach((t) => t()),
            (this._onDestroyFns = []));
        }
        setPosition(t) {
          this.domPlayer.currentTime = t * this.time;
        }
        getPosition() {
          return this.domPlayer.currentTime / this.time;
        }
        get totalTime() {
          return this._delay + this._duration;
        }
        beforeDestroy() {
          const t = {};
          this.hasStarted() &&
            Object.keys(this._finalKeyframe).forEach((e) => {
              'offset' != e &&
                (t[e] = this._finished
                  ? this._finalKeyframe[e]
                  : Qv(this.element, e));
            }),
            (this.currentSnapshot = t);
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
      }
      class lw {
        constructor() {
          (this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(
            cw().toString()
          )),
            (this._cssKeyframesDriver = new ow());
        }
        validateStyleProperty(t) {
          return Cv(t);
        }
        matchesElement(t, e) {
          return xv(t, e);
        }
        containsElement(t, e) {
          return Tv(t, e);
        }
        query(t, e, n) {
          return kv(t, e, n);
        }
        computeStyle(t, e, n) {
          return window.getComputedStyle(t)[e];
        }
        overrideWebAnimationsSupport(t) {
          this._isNativeImpl = t;
        }
        animate(t, e, n, s, i, r = [], o) {
          if (!o && !this._isNativeImpl)
            return this._cssKeyframesDriver.animate(t, e, n, s, i, r);
          const a = {
            duration: n,
            delay: s,
            fill: 0 == s ? 'both' : 'forwards',
          };
          i && (a.easing = i);
          const l = {},
            c = r.filter((t) => t instanceof aw);
          Kv(n, s) &&
            c.forEach((t) => {
              let e = t.currentSnapshot;
              Object.keys(e).forEach((t) => (l[t] = e[t]));
            });
          const h = Kb(t, (e = Zv(t, (e = e.map((t) => Mv(t, !1))), l)));
          return new aw(t, e, a, h);
        }
      }
      function cw() {
        return (
          ('undefined' != typeof window &&
            void 0 !== window.document &&
            Element.prototype.animate) ||
          {}
        );
      }
      class hw extends sf {
        constructor(t, e) {
          super(),
            (this._nextAnimationId = 0),
            (this._renderer = t.createRenderer(e.body, {
              id: '0',
              encapsulation: Ft.None,
              styles: [],
              data: { animation: [] },
            }));
        }
        build(t) {
          const e = this._nextAnimationId.toString();
          this._nextAnimationId++;
          const n = Array.isArray(t) ? rf(t) : t;
          return (
            pw(this._renderer, null, e, 'register', [n]),
            new uw(e, this._renderer)
          );
        }
      }
      class uw extends class {} {
        constructor(t, e) {
          super(), (this._id = t), (this._renderer = e);
        }
        create(t, e) {
          return new dw(this._id, t, e || {}, this._renderer);
        }
      }
      class dw {
        constructor(t, e, n, s) {
          (this.id = t),
            (this.element = e),
            (this._renderer = s),
            (this.parentPlayer = null),
            (this._started = !1),
            (this.totalTime = 0),
            this._command('create', n);
        }
        _listen(t, e) {
          return this._renderer.listen(this.element, `@@${this.id}:${t}`, e);
        }
        _command(t, ...e) {
          return pw(this._renderer, this.element, this.id, t, e);
        }
        onDone(t) {
          this._listen('done', t);
        }
        onStart(t) {
          this._listen('start', t);
        }
        onDestroy(t) {
          this._listen('destroy', t);
        }
        init() {
          this._command('init');
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this._command('play'), (this._started = !0);
        }
        pause() {
          this._command('pause');
        }
        restart() {
          this._command('restart');
        }
        finish() {
          this._command('finish');
        }
        destroy() {
          this._command('destroy');
        }
        reset() {
          this._command('reset');
        }
        setPosition(t) {
          this._command('setPosition', t);
        }
        getPosition() {
          return 0;
        }
      }
      function pw(t, e, n, s, i) {
        return t.setProperty(e, `@@${n}:${s}`, i);
      }
      class fw {
        constructor(t, e, n) {
          (this.delegate = t),
            (this.engine = e),
            (this._zone = n),
            (this._currentId = 0),
            (this._microtaskId = 1),
            (this._animationCallbacksBuffer = []),
            (this._rendererCache = new Map()),
            (this._cdRecurDepth = 0),
            (this.promise = Promise.resolve(0)),
            (e.onRemovalComplete = (t, e) => {
              e && e.parentNode(t) && e.removeChild(t.parentNode, t);
            });
        }
        createRenderer(t, e) {
          const n = this.delegate.createRenderer(t, e);
          if (!(t && e && e.data && e.data.animation)) {
            let t = this._rendererCache.get(n);
            return (
              t ||
                ((t = new mw('', n, this.engine)),
                this._rendererCache.set(n, t)),
              t
            );
          }
          const s = e.id,
            i = e.id + '-' + this._currentId;
          return (
            this._currentId++,
            this.engine.register(i, t),
            e.data.animation.forEach((e) =>
              this.engine.registerTrigger(s, i, t, e.name, e)
            ),
            new gw(this, i, n, this.engine)
          );
        }
        begin() {
          this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
        }
        _scheduleCountTask() {
          this.promise.then(() => {
            this._microtaskId++;
          });
        }
        scheduleListenerCallback(t, e, n) {
          t >= 0 && t < this._microtaskId
            ? this._zone.run(() => e(n))
            : (0 == this._animationCallbacksBuffer.length &&
                Promise.resolve(null).then(() => {
                  this._zone.run(() => {
                    this._animationCallbacksBuffer.forEach((t) => {
                      const [e, n] = t;
                      e(n);
                    }),
                      (this._animationCallbacksBuffer = []);
                  });
                }),
              this._animationCallbacksBuffer.push([e, n]));
        }
        end() {
          this._cdRecurDepth--,
            0 == this._cdRecurDepth &&
              this._zone.runOutsideAngular(() => {
                this._scheduleCountTask(), this.engine.flush(this._microtaskId);
              }),
            this.delegate.end && this.delegate.end();
        }
        whenRenderingDone() {
          return this.engine.whenRenderingDone();
        }
      }
      class mw {
        constructor(t, e, n) {
          (this.namespaceId = t),
            (this.delegate = e),
            (this.engine = n),
            (this.destroyNode = this.delegate.destroyNode
              ? (t) => e.destroyNode(t)
              : null);
        }
        get data() {
          return this.delegate.data;
        }
        destroy() {
          this.engine.destroy(this.namespaceId, this.delegate),
            this.delegate.destroy();
        }
        createElement(t, e) {
          return this.delegate.createElement(t, e);
        }
        createComment(t) {
          return this.delegate.createComment(t);
        }
        createText(t) {
          return this.delegate.createText(t);
        }
        appendChild(t, e) {
          this.delegate.appendChild(t, e),
            this.engine.onInsert(this.namespaceId, e, t, !1);
        }
        insertBefore(t, e, n) {
          this.delegate.insertBefore(t, e, n),
            this.engine.onInsert(this.namespaceId, e, t, !0);
        }
        removeChild(t, e, n) {
          this.engine.onRemove(this.namespaceId, e, this.delegate, n);
        }
        selectRootElement(t, e) {
          return this.delegate.selectRootElement(t, e);
        }
        parentNode(t) {
          return this.delegate.parentNode(t);
        }
        nextSibling(t) {
          return this.delegate.nextSibling(t);
        }
        setAttribute(t, e, n, s) {
          this.delegate.setAttribute(t, e, n, s);
        }
        removeAttribute(t, e, n) {
          this.delegate.removeAttribute(t, e, n);
        }
        addClass(t, e) {
          this.delegate.addClass(t, e);
        }
        removeClass(t, e) {
          this.delegate.removeClass(t, e);
        }
        setStyle(t, e, n, s) {
          this.delegate.setStyle(t, e, n, s);
        }
        removeStyle(t, e, n) {
          this.delegate.removeStyle(t, e, n);
        }
        setProperty(t, e, n) {
          '@' == e.charAt(0) && '@.disabled' == e
            ? this.disableAnimations(t, !!n)
            : this.delegate.setProperty(t, e, n);
        }
        setValue(t, e) {
          this.delegate.setValue(t, e);
        }
        listen(t, e, n) {
          return this.delegate.listen(t, e, n);
        }
        disableAnimations(t, e) {
          this.engine.disableAnimations(t, e);
        }
      }
      class gw extends mw {
        constructor(t, e, n, s) {
          super(e, n, s), (this.factory = t), (this.namespaceId = e);
        }
        setProperty(t, e, n) {
          '@' == e.charAt(0)
            ? '.' == e.charAt(1) && '@.disabled' == e
              ? this.disableAnimations(t, (n = void 0 === n || !!n))
              : this.engine.process(this.namespaceId, t, e.substr(1), n)
            : this.delegate.setProperty(t, e, n);
        }
        listen(t, e, n) {
          if ('@' == e.charAt(0)) {
            const s = (function (t) {
              switch (t) {
                case 'body':
                  return document.body;
                case 'document':
                  return document;
                case 'window':
                  return window;
                default:
                  return t;
              }
            })(t);
            let i = e.substr(1),
              r = '';
            return (
              '@' != i.charAt(0) &&
                ([i, r] = (function (t) {
                  const e = t.indexOf('.');
                  return [t.substring(0, e), t.substr(e + 1)];
                })(i)),
              this.engine.listen(this.namespaceId, s, i, r, (t) => {
                this.factory.scheduleListenerCallback(t._data || -1, n, t);
              })
            );
          }
          return this.delegate.listen(t, e, n);
        }
      }
      class yw extends qb {
        constructor(t, e, n) {
          super(t.body, e, n);
        }
      }
      function _w() {
        return 'function' == typeof cw() ? new lw() : new ow();
      }
      function vw() {
        return new bb();
      }
      function bw(t, e, n) {
        return new fw(t, e, n);
      }
      const ww = new wt('AnimationModuleType');
      class Sw {}
      let Ew = (() => {
        class t {
          create(t) {
            return 'undefined' == typeof MutationObserver
              ? null
              : new MutationObserver(t);
          }
        }
        return (
          (t.ngInjectableDef = lt({
            factory: function () {
              return new t();
            },
            token: t,
            providedIn: 'root',
          })),
          t
        );
      })();
      class Cw {}
      class xw {
        constructor(t) {
          this.localStorageService = t;
        }
        intercept(t, e) {
          const n = this.localStorageService.getItem('token');
          let s = t.headers;
          return (
            n && (s = t.headers.append('Authorization', 'Bearer ' + n)),
            (t = t.clone({ headers: s })),
            e.handle(t).pipe(
              dc((t) =>
                (function (t, e) {
                  return new b((e) => e.error(t));
                })(t)
              )
            )
          );
        }
      }
      class Tw {
        constructor(t, e) {
          (this.authenticationService = t), (this.router = e);
        }
        canActivate(t, e) {
          return !!this.authenticationService.isLoggedIn();
        }
        canActivateChild(t, e) {
          return !!this.authenticationService.isLoggedIn();
        }
      }
      class kw {
        constructor(t) {
          this.injector = t;
        }
        handleError(t) {
          if (t instanceof yl)
            switch (t.status) {
              case 401:
                this.showError(
                  'You dont have permision to enter',
                  'Authentication Error'
                );
                break;
              case 403:
                this.showError(
                  'Su sesion ha sido cerrada.',
                  'Error de Autentificacion.'
                );
                break;
              case 404:
                this.showError(
                  'No hay resultados para esta busqueda.',
                  'No hay datos.'
                );
                break;
              case 418:
                this.showError(
                  'No tiene permisos para utilizar la aplicaci\xf3n,Contacte al Administrador.',
                  'Error de permisos'
                );
                break;
              case 501:
                this.showError(t.error.messages[0], 'ERROR DE SESION'),
                  setTimeout(() => {
                    window.location.href = t.error.redirectUrl;
                  }, 7e3);
                break;
              case 409:
                let e = t.error.messages.map((t, e) => t).join(',');
                (e =
                  e || 'Ha ocurrido un error en el procesamiento de los datos'),
                  this.showError(e, 'Error de validaci\xf3n.');
                break;
              default:
                this.showError('Ha ocurrido un error, intente nuevamente');
            }
          else console.error(t);
        }
        showError(t, e = 'Error') {
          this.injector.get(Hl).error(t, e);
        }
        authService() {
          return this.injector.get(Vl);
        }
        router() {
          return this.injector.get(ep);
        }
      }
      class Dw {}
      class Rw {}
      class Aw {}
      var Iw,
        Ow,
        Pw,
        Nw = n('2Yyj');
      (Iw = n.n(Nw).a),
        'string' != typeof (Ow = 'es') && ((Pw = Ow), (Ow = Iw[hi.LocaleId])),
        (Ow = Ow.toLowerCase().replace(/_/g, '-')),
        (ci[Ow] = Iw),
        Pw && (ci[Ow][hi.ExtraData] = Pw);
      class Mw {
        static forRoot(t) {
          return {
            ngModule: Mw,
            providers: [
              Fl,
              Vl,
              Tw,
              jl,
              Ll,
              Hl,
              Jo,
              { provide: Xo, useValue: t },
              { provide: Bt, useClass: kw },
            ],
          };
        }
      }
      class Fw {}
      const Lw = {},
        jw = {};
      class Vw {}
      var Hw = Go(Yo, [Bl], function (t) {
        return (function (t) {
          const e = {},
            n = [];
          let s = !1;
          for (let i = 0; i < t.length; i++) {
            const r = t[i];
            r.token === be && !0 === r.value && (s = !0),
              1073741824 & r.flags && n.push(r.token),
              (r.index = i),
              (e[Ln(r.token)] = r);
          }
          return {
            factory: null,
            providersByKey: e,
            providers: t,
            modules: n,
            isRoot: s,
          };
        })([
          ms(512, We, qe, [
            [8, [Rp, nf, $m, vy, $y, k_, I_, a_, u_, __, cv]],
            [3, We],
            Ot,
          ]),
          ms(5120, Ti, Er, [[3, Ti]]),
          ms(4608, $a, za, [Ti, [2, Ua]]),
          ms(5120, li, Cr, [$i]),
          ms(5120, vi, bi, []),
          ms(5120, mn, wr, []),
          ms(5120, gn, Sr, []),
          ms(4608, Rh, Ah, [tl]),
          ms(6144, pe, null, [Rh]),
          ms(4608, Sh, Ch, []),
          ms(
            5120,
            Yc,
            function (t, e, n, s, i, r, o, a) {
              return [new bh(t, e, n), new Dh(s), new xh(i, r, o, a)];
            },
            [tl, $i, Ei, tl, tl, Sh, xi, [2, Eh]]
          ),
          ms(4608, Xc, Xc, [Yc, $i]),
          ms(135680, eh, eh, [tl]),
          ms(4608, oh, oh, [Xc, eh, vi]),
          ms(5120, Av, _w, []),
          ms(5120, vb, vw, []),
          ms(4608, qb, yw, [tl, Av, vb]),
          ms(5120, Xe, bw, [oh, qb, $i]),
          ms(6144, th, null, [eh]),
          ms(4608, Qi, Qi, [$i]),
          ms(5120, Wu, wp, [ep]),
          ms(4608, lp, lp, []),
          ms(6144, op, null, [lp]),
          ms(135680, cp, cp, [ep, cr, Oi, Se, op]),
          ms(4608, ap, ap, []),
          ms(5120, hp, gp, [ep, el, up]),
          ms(5120, xp, Cp, [Sp]),
          ms(
            5120,
            Ci,
            function (t) {
              return [t];
            },
            [xp]
          ),
          ms(4608, sf, hw, [Xe, tl]),
          ms(4608, Ew, Ew, []),
          ms(4608, Rl, Al, [tl, Ei, kl]),
          ms(4608, Il, Il, [Rl, Dl]),
          ms(4608, jl, jl, []),
          ms(
            5120,
            wl,
            function (t, e, n, s) {
              return [t, new xw(e), new xw(n), new xw(s)];
            },
            [Il, jl, jl, jl]
          ),
          ms(4608, xl, xl, []),
          ms(6144, Cl, null, [xl]),
          ms(4608, Tl, Tl, [Cl]),
          ms(6144, il, null, [Tl]),
          ms(4608, sl, Ol, [il, Se]),
          ms(4608, vl, vl, [sl]),
          ms(4608, dm, dm, [Yf, im, We, hm, sm, Se, $i, tl, bf, [2, ca]]),
          ms(5120, pm, fm, [dm]),
          ms(5120, Em, Cm, [dm]),
          ms(135680, xm, xm, [dm, Se, [2, ca], [2, Sm], Em, [3, xm], im]),
          ms(4608, Wm, Wm, []),
          ms(4608, Xg, Xg, [We, Se, Yg, Ug]),
          ms(4608, Fl, Fl, [vl]),
          ms(4608, Jo, Jo, [Xo]),
          ms(4608, Vl, Vl, [Fl, jl, Jo]),
          ms(4608, Tw, Tw, [Vl, ep]),
          ms(4608, Ll, Ll, [Fl, Jo]),
          ms(4608, Hl, Hl, [Hp]),
          ms(1073742336, Ja, Ja, []),
          ms(512, Bt, kw, [Se]),
          ms(
            1024,
            nr,
            function () {
              return [fp()];
            },
            []
          ),
          ms(512, Sp, Sp, [Se]),
          ms(
            1024,
            yi,
            function (t, e) {
              return [
                ((n = t),
                Zc('probe', Qc),
                Zc(
                  'coreTokens',
                  Object.assign(
                    {},
                    Gc,
                    (n || []).reduce((t, e) => ((t[e.name] = e.token), t), {})
                  )
                ),
                () => Qc),
                Ep(e),
              ];
              var n;
            },
            [[2, nr], Sp]
          ),
          ms(512, _i, _i, [[2, yi]]),
          ms(131584, ar, ar, [$i, xi, Se, Bt, We, _i]),
          ms(1073742336, xr, xr, [ar]),
          ms(1073742336, jh, jh, [[3, jh]]),
          ms(1024, dp, _p, [[3, ep]]),
          ms(512, Eu, Cu, []),
          ms(512, sp, sp, []),
          ms(256, up, {}, []),
          ms(1024, aa, yp, [ra, [2, la], up]),
          ms(512, ca, ca, [aa, ra]),
          ms(512, Oi, Oi, []),
          ms(512, cr, dr, [Oi, [2, hr]]),
          ms(
            1024,
            Zd,
            function () {
              return [[]];
            },
            []
          ),
          ms(1024, ep, bp, [
            ar,
            Eu,
            sp,
            ca,
            Se,
            cr,
            Oi,
            Zd,
            up,
            [2, Qd],
            [2, qd],
          ]),
          ms(1073742336, mp, mp, [
            [2, dp],
            [2, ep],
          ]),
          ms(1073742336, Dw, Dw, []),
          ms(1073742336, Sw, Sw, []),
          ms(1073742336, Y_, Y_, []),
          ms(1073742336, wf, wf, []),
          ms(1073742336, Fm, Fm, [
            [2, Mm],
            [2, Eh],
          ]),
          ms(1073742336, Rw, Rw, []),
          ms(1073742336, yf, yf, []),
          ms(1073742336, Hf, Hf, []),
          ms(1073742336, jm, jm, []),
          ms(1073742336, Cw, Cw, []),
          ms(1073742336, Pm, Pm, []),
          ms(1073742336, Aw, Aw, []),
          ms(1073742336, Pl, Pl, []),
          ms(1073742336, Nl, Nl, []),
          ms(1073742336, zp, zp, []),
          ms(1073742336, Mw, Mw, []),
          ms(1073742336, Uf, Uf, []),
          ms(1073742336, mm, mm, []),
          ms(1073742336, Tm, Tm, []),
          ms(1073742336, og, og, []),
          ms(1073742336, cg, cg, []),
          ms(1073742336, hg, hg, []),
          ms(1073742336, ug, ug, []),
          ms(1073742336, dg, dg, []),
          ms(1073742336, Qm, Qm, []),
          ms(1073742336, Ym, Ym, []),
          ms(1073742336, Hg, Hg, []),
          ms(1073742336, Bg, Bg, []),
          ms(1073742336, Jg, Jg, []),
          ms(1073742336, ty, ty, []),
          ms(1073742336, ey, ey, []),
          ms(1073742336, sy, sy, []),
          ms(1073742336, iy, iy, []),
          ms(1073742336, ry, ry, []),
          ms(1073742336, oy, oy, []),
          ms(1073742336, ay, ay, []),
          ms(1073742336, ly, ly, []),
          ms(1073742336, hy, hy, []),
          ms(1073742336, py, py, []),
          ms(1073742336, fy, fy, []),
          ms(1073742336, Fw, Fw, []),
          ms(1073742336, Vw, Vw, []),
          ms(1073742336, Yo, Yo, []),
          ms(256, be, !0, []),
          ms(256, ww, 'BrowserAnimations', []),
          ms(256, kl, 'XSRF-TOKEN', []),
          ms(256, Dl, 'X-XSRF-TOKEN', []),
          ms(
            256,
            Op,
            {
              default: $p,
              config: {
                timeOut: 7e3,
                preventDuplicates: !0,
                progressBar: !0,
                closeButton: !0,
                tapToDismiss: !1,
              },
            },
            []
          ),
          ms(256, Xo, 'http://interview.agileengine.com', []),
          ms(256, wm, Lw, []),
          ms(256, bm, jw, []),
        ]);
      });
      (function () {
        if ($t)
          throw new Error('Cannot enable prod mode after platform setup.');
        Ut = !1;
      })(),
        Lh()
          .bootstrapModuleFactory(Hw)
          .catch((t) => console.error(t));
    },
  },
  [[0, 0]],
]);
