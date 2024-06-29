"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[748], {
    271: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return h
            }
        });
        var r = n(5893)
          , o = n(7294)
          , i = n(9477)
          , s = n(990)
          , a = n(5317)
          , l = n(1163);
        function u(e) {
            let t, n, {workItems: u, hoverItemIndex: c, wkClickIndex: f} = e, d = (0,
            o.useState)(), h = (0,
            o.useRef)([]), [m,g] = (0,
            o.useState)(null), [v,p] = (0,
            o.useState)(new i.xsS), w = 0, [P,y] = (0,
            o.useState)(new i.cPb(30,1,.1,1e3)), x = (0,
            o.useRef)({}), S = {
                x: 300,
                y: 300
            }, k = (0,
            l.useRouter)();
            (0,
            o.useEffect)(()=>{
                m ? (T(),
                s.ZP.ticker.add(C),
                s.ZP.ticker.lagSmoothing(),
                window.addEventListener("mousemove", E)) : g(new i.CP7({
                    alpha: !0,
                    powerPreference: "high-performance"
                }))
            }
            , [m]);
            let b = (e,t)=>{
                new URL(t,window.location.href).origin !== window.location.origin && (e.crossOrigin = "")
            }
            ;
            (0,
            o.useEffect)(()=>{
                if (null !== c) {
                    let e = new Image;
                    e.src = u[c].data.images[0].image.url,
                    b(e, e.src);
                    let t = new i.xEZ(e);
                    t.needsUpdate = !0,
                    h.current.mesh.material.uniforms.uTexture.value = t,
                    h.current.mesh.material.uniforms.uImageSizes.value = new i.FM8(2600,1300)
                } else
                    h.current.mesh && (h.current.mesh.material.uniforms.uTexture.value = 0)
            }
            , [c]);
            let T = ()=>{
                t = (d = document.getElementById("canvas_archive")).offsetWidth,
                n = d.offsetHeight,
                P.aspect = window.innerWidth / window.innerHeight,
                P.fov = 2 * Math.atan(n / 2 / 600) * (180 / Math.PI),
                P.updateProjectionMatrix(),
                P.position.z = 600,
                m.setSize(d.offsetWidth, d.offsetHeight),
                m.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
                d.appendChild(m.domElement),
                m.getContext().canvas.addEventListener("webglcontextlost", function(e) {
                    e.preventDefault(),
                    cancelAnimationFrame(C),
                    window.location.reload()
                }, !1),
                _(),
                m.getContext().canvas.addEventListener("webglcontextrestored", function(e) {
                    console.log("restore!")
                }, !1)
            }
              , _ = ()=>{
                let e = new i._12(1,1,10,100)
                  , r = new i.jyz({
                    uniforms: {
                        uTexture: {
                            value: ""
                        },
                        uImageSizes: {
                            value: new i.FM8(2e3,1e3)
                        },
                        uPlaneSizes: {
                            value: new i.FM8(S.x,S.y)
                        },
                        uResolution: {
                            value: new i.FM8(t,n)
                        },
                        mousePower: {
                            value: 0
                        },
                        mouseX: {
                            value: 0
                        },
                        uClickProcess: {
                            value: 0
                        }
                    },
                    vertexShader: "#define GLSLIFY 1\n#define PI 3.1415926535897932384626433832795\n \n\nuniform vec2 uResolution;\nuniform float mousePower;\nuniform float uStrength;\nuniform float uClickProcess;\n\n \nvarying vec2 vUv;\n \nvoid main() {\n  vec4 newTempPos = vec4(position, 1.0);\n  vec4 newPosition = modelViewMatrix * vec4(position, 1.0);\n  \n   newPosition.x += sin(newPosition.y*1.1*PI)*(min((mousePower*0.5<30.?0.:mousePower*0.5),400.))*0.7;\n   //newPosition.z -= cos(newPosition.x/uResolution.x*20.*PI)*(min(mousePower,300.))*0.1;\n   //newPosition.y -= cos(newPosition.x/uResolution.x*20.*PI)*(min(mousePower,300.))*0.1;\n  // newPosition.y += cos(newPosition.y*mousePower*10.)*10.;\n    newPosition.z += cos(newPosition.x/(uResolution.x) * PI)*(sin(uClickProcess*PI))*100.;\n  newPosition.z += cos(newPosition.y/(uResolution.y) * PI)*(sin(uClickProcess*PI))*100.;\n   newPosition.x += sin(newPosition.x/(uResolution.x) * PI)*(sin(uClickProcess*PI))*200.;\n    newPosition.x += sin(newPosition.y*0.1*PI)*(sin(uClickProcess*PI))*100.1;\n  vUv = uv;\n \n  gl_Position = projectionMatrix * newPosition;\n}",
                    fragmentShader: "#define GLSLIFY 1\nuniform sampler2D uTexture;\nuniform float mousePower;\nuniform float mouseX;\nuniform vec2 uResolution;\nvarying vec2 vUv;\nuniform vec2 uImageSizes;\nuniform vec2 uPlaneSizes;\n\nvoid main() {\n vec2 ratio = vec2(\n    min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),\n    min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)\n  );\n  vec2 uv = vec2(\n    vUv.x * ratio.x + (1.0 - ratio.x) * (0.3+(mousePower*0.02)+(mouseX/uResolution.x)*0.4),\n    vUv.y * ratio.y + (1.0 - ratio.y)*0.5\n  );\n \n  gl_FragColor = texture2D(uTexture,uv);\n\n}"
                })
                  , o = new i.Kj0(e,r);
                o.scale.set(S.x, S.y, 1),
                v.add(o),
                h.current = {
                    mesh: o,
                    width: 200,
                    height: 300
                }
            }
              , E = e=>{
                x.current = {
                    x: e.clientX,
                    y: e.clientY,
                    power: (e.movementX * e.movementX + e.movementY * e.movementY) / 4
                }
            };
            (0, o.useEffect)(()=>{
                if (null !== f) {
                    let e = h.current;
                    s.ZP.to(e.mesh.material.uniforms.uClickProcess, .6, {
                        value: 1,
                        ease: a.Aq.easeOut,
                        onComplete: ()=>{ k.push("http://127.0.0.1:5500/work/28.html") }     // + u[f].id
                    }),
                    s.ZP.to(".top_info .pr_top_section", .2, {
                        y: -100,
                        opacity: 0
                    }),
                    s.ZP.to(e.mesh.material.uniforms.uPlaneSizes.value, .5, {
                        x: window.innerWidth
                    }),
                    s.ZP.to(e.mesh.material.uniforms.uPlaneSizes.value, .4, {
                        y: window.innerHeight
                    }),
                    s.ZP.to(e.mesh.scale, .4, {
                        x: window.innerWidth,
                        y: window.innerHeight
                    })
                }
            }
            , [f]);
            let C = ()=>{
                R(),
                m.render(v, P),
                w += 1
            }
              , R = ()=>{
                h.current.mesh.position.x = -(window.innerWidth / 2) + x.current.x,
                h.current.mesh.position.x *= 1 - h.current.mesh.material.uniforms.uClickProcess.value,
                h.current.mesh.position.y = window.innerHeight / 2 - x.current.y,
                h.current.mesh.position.y *= 1 - h.current.mesh.material.uniforms.uClickProcess.value,
                s.ZP.to(h.current.mesh.material.uniforms.mousePower, .7, {
                    value: x.current.power
                }),
                s.ZP.to(h.current.mesh.material.uniforms.mouseX, .2, {
                    value: x.current.x
                })
            }
            ;
            return (0,
            r.jsx)("div", {
                id: "canvas_archive"
            })
        }
        var c = n(4587);
        n(2031);
        var f = n(9577)
          , d = n(4480);
        function h(e) {
            let {workItems: t, scroller: n} = e
              , [i,a] = (0,
            o.useState)(null)
              , [h,m] = (0,
            o.useState)(!1)
              , [g,v] = (0,
            o.useState)(null)
              , [p,w] = (0,
            o.useState)(!1)
              , P = (0,
            l.useRouter)()
              , [y,x] = (0,
            d.FV)(f.tV)
              , [S,k] = (0,
            d.FV)(f.NA);
            (0,
            o.useEffect)(()=>{
                window.innerWidth <= 900 && m(!0)
            }
            );
            let b = e=>{
                if (x(e),
                k(t[e].data.images[0].image),
                window.innerWidth > 900) {
                    w(!0),
                    v(e);
                    let t = s.ZP.timeline({ delay: .4 });
                    t.to(".thunmail_img", .2, { opacity: 1 })
                } else
                    (0, c.i)("http://127.0.0.1:5500/work/28.html", P); // + t[e].id
                    localStorage.setItem("ID", t[e].id );
                    localStorage.setItem("reload", 0)
                n && n.scrollTo(0)
            };

            return (0, r.jsx)(r.Fragment, {
                children: (0, r.jsxs)("div", {
                    className: "archive_section",
                    children: [(0, r.jsxs)("div", {
                        className: "work_count",
                        children: ["Total ", t.length]
                    }), (0, r.jsx)("div", {
                        className: "work_archive_items " + (p ? "click_block" : ""),
                        onMouseLeave: ()=>{ a(null) },
                        children: t.map((e,t)=>(0, r.jsxs)("div", {
                            className: "wc_item " + (e.id == localStorage.getItem("ID") ? "active" : ""),
                            onMouseOver: ()=>{ a(t) },
                            onClick: ()=>{ b(t) },
                            children: [(0, r.jsx)("div", {
                                className: "wc_num",
                                children: "(" + e.id + "th)"
                            }), (0, r.jsx)("div", {
                                className: "wc_title",
                                children: e.data.chair
                            }), (0, r.jsx)("div", {
                                className: "wc_client",
                                children: e.data.time
                            })]
                        }, t))
                    }), !h && (0, r.jsx)(u, {
                        workItems: t,
                        hoverItemIndex: i,
                        wkClickIndex: g
                    })]
                })
            })
        }
    },

    2329: function(e, t) {
        !function(e) {
            function t(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function n() {
                return o || (o = window.gsap) && o.registerPlugin && o
            }
            var r, o, i, s, a, l, u, c, f, d, h, m, g, v, p, w, P = (y.register = function(e) {
                return i || (o = e || n(),
                window.document && (s = window,
                l = (a = document).documentElement,
                u = a.body),
                o && (c = o.utils.toArray,
                f = o.utils.clamp,
                m = o.parseEase("expo"),
                p = o.core.context || function() {}
                ,
                w = o.delayedCall(.2, function() {
                    return d.isRefreshing || h && h.refresh()
                }).pause(),
                d = o.core.globals().ScrollTrigger,
                o.core.globals("ScrollSmoother", y),
                u && d && (g = d.core._getVelocityProp,
                v = d.core._inputObserver,
                y.refresh = d.refresh,
                i = 1))),
                i
            }
            ,
            t(y.prototype, [{
                key: "progress",
                get: function() {
                    return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
                }
            }]),
            r && t(y, r),
            y);
            function y(e) {
                var t = this;
                function n() {
                    return ei.update(-en)
                }
                function r() {
                    return I.style.overflow = "visible"
                }
                function P(e) {
                    e.update();
                    var t = e.getTween();
                    t && (t.pause(),
                    t._time = t._dur,
                    t._tTime = t._tDur),
                    W = !1,
                    e.animation.progress(e.progress, !0)
                }
                function x(e, t) {
                    (e !== en && !U || t) && (et && (I.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)",
                    I._gsap.y = e + "px"),
                    er = e - en,
                    en = e,
                    d.isUpdating || d.update())
                }
                function S(e) {
                    return arguments.length ? (e < 0 && (e = 0),
                    es.y = -e,
                    W = !0,
                    U ? en = -e : x(-e),
                    d.isRefreshing ? F.update() : ee(e),
                    this) : -en
                }
                function k(e) {
                    z.scrollTop = 0,
                    e.target.contains && e.target.contains(z) || G && !1 === G(t, e) || (d.isInViewport(e.target) || e.target === V || t.scrollTo(e.target, !1, "center center"),
                    V = e.target)
                }
                function b(e) {
                    var t, n, r, i;
                    A.forEach(function(s) {
                        t = s.pins,
                        i = s.markers,
                        e.forEach(function(e) {
                            s.trigger && e.trigger && s !== e && (e.trigger === s.trigger || e.pinnedContainer === s.trigger || s.trigger.contains(e.trigger)) && (r = ((n = e.start) - s.start - s.offset) / s.ratio - (n - s.start),
                            t.forEach(function(e) {
                                return r -= e.distance / s.ratio - e.distance
                            }),
                            e.setPositions(n + r, e.end + r),
                            e.markerStart && i.push(o.quickSetter([e.markerStart, e.markerEnd], "y", "px")),
                            e.pin && 0 < e.end && (r = e.end - e.start,
                            t.push({
                                start: e.start,
                                end: e.end,
                                distance: r,
                                trig: e
                            }),
                            s.setPositions(s.start, s.end + r),
                            s.vars.onRefresh(s)))
                        })
                    })
                }
                function T() {
                    r(),
                    requestAnimationFrame(r),
                    A && (A.forEach(function(e) {
                        var t = e.start
                          , n = e.auto ? Math.min(d.maxScroll(e.scroller), e.end) : t + (e.end - t) / e.ratio
                          , r = (n - e.end) / 2;
                        t -= r,
                        n -= r,
                        e.offset = r || 1e-4,
                        e.pins.length = 0,
                        e.setPositions(Math.min(t, n), Math.max(t, n)),
                        e.vars.onRefresh(e)
                    }),
                    b(d.sort())),
                    ei.reset()
                }
                function _() {
                    return d.addEventListener("refresh", T)
                }
                function E() {
                    return A && A.forEach(function(e) {
                        return e.vars.onRefresh(e)
                    })
                }
                function C() {
                    return A && A.forEach(function(e) {
                        return e.vars.onRefreshInit(e)
                    }),
                    E
                }
                function R(e, t, n, r) {
                    return function() {
                        var o = "function" == typeof t ? t(n, r) : t;
                        return o || 0 === o || (o = r.getAttribute("data-" + $ + e) || ("speed" === e ? 1 : 0)),
                        r.setAttribute("data-" + $ + e, o),
                        "auto" === o ? o : parseFloat(o)
                    }
                }
                i || y.register(o) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
                e = this.vars = e || {},
                h && h.kill(),
                p(h = this);
                var I, z, M, F, A, j, L, N, H, U, Z, O, B, W, V, X = e.smoothTouch, Y = e.onUpdate, D = e.onStop, q = e.smooth, G = e.onFocusIn, K = e.normalizeScroll, J = this, Q = "undefined" != typeof ResizeObserver && !1 !== e.autoResize && new ResizeObserver(function() {
                    return d.isRefreshing || w.restart(!0)
                }
                ), $ = e.effectsPrefix || "", ee = d.getScrollFunc(s), et = 1 === d.isTouch ? !0 === X ? .8 : parseFloat(X) || 0 : 0 === q || !1 === q ? 0 : parseFloat(q) || .8, en = 0, er = 0, eo = 1, ei = g(0), es = {
                    y: 0
                };
                function ea() {
                    return M = I.clientHeight,
                    I.style.overflow = "visible",
                    u.style.height = M + "px",
                    M - s.innerHeight
                }
                _(),
                d.addEventListener("killAll", _),
                o.delayedCall(.5, function() {
                    return eo = 0
                }),
                this.scrollTop = S,
                this.scrollTo = function(e, n, r) {
                    var i = o.utils.clamp(0, d.maxScroll(s), isNaN(e) ? t.offset(e, r) : +e);
                    n ? U ? o.to(t, {
                        duration: et,
                        scrollTop: i,
                        overwrite: "auto",
                        ease: m
                    }) : ee(i) : S(i)
                }
                ,
                this.offset = function(e, t) {
                    var n, r = (e = c(e)[0]).style.cssText, i = d.create({
                        trigger: e,
                        start: t || "top top"
                    });
                    return A && b([i]),
                    n = i.start,
                    i.kill(!1),
                    e.style.cssText = r,
                    o.core.getCache(e).uncache = 1,
                    n
                }
                ,
                this.content = function(e) {
                    if (arguments.length) {
                        var t = c(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || u.children[0];
                        return t !== I && (H = (I = t).getAttribute("style") || "",
                        Q && Q.observe(I),
                        o.set(I, {
                            overflow: "visible",
                            width: "100%",
                            boxSizing: "border-box",
                            y: "+=0"
                        }),
                        et || o.set(I, {
                            clearProps: "transform"
                        })),
                        this
                    }
                    return I
                }
                ,
                this.wrapper = function(e) {
                    var t, n;
                    return arguments.length ? (N = (z = c(e || "#smooth-wrapper")[0] || (t = I,
                    (n = a.querySelector(".ScrollSmoother-wrapper")) || ((n = a.createElement("div")).classList.add("ScrollSmoother-wrapper"),
                    t.parentNode.insertBefore(n, t),
                    n.appendChild(t)),
                    n)).getAttribute("style") || "",
                    ea(),
                    o.set(z, et ? {
                        overflow: "hidden",
                        position: "fixed",
                        height: "100%",
                        width: "100%",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    } : {
                        overflow: "visible",
                        position: "relative",
                        width: "100%",
                        height: "auto",
                        top: "auto",
                        bottom: "auto",
                        left: "auto",
                        right: "auto"
                    }),
                    this) : z
                }
                ,
                this.effects = function(e, t) {
                    if (A = A || [],
                    !e)
                        return A.slice(0);
                    (e = c(e)).forEach(function(e) {
                        for (var t = A.length; t--; )
                            A[t].trigger === e && A[t].kill()
                    });
                    var n, r, i = (t = t || {}).speed, a = t.lag, u = [];
                    for (n = 0; n < e.length; n++)
                        (r = function(e, t, n, r) {
                            function i() {
                                t = P(),
                                n = y(),
                                c = parseFloat(t) || 1,
                                p = (g = "auto" === t) ? 0 : .5,
                                v && v.kill(),
                                v = n && o.to(e, {
                                    ease: m,
                                    overwrite: !1,
                                    y: "+=0",
                                    duration: n
                                }),
                                h && (h.ratio = c,
                                h.autoSpeed = g)
                            }
                            function a() {
                                S.y = x + "px",
                                S.renderTransform(1),
                                i()
                            }
                            function u(t) {
                                if (g) {
                                    a();
                                    var n, r, o, i, u, d, h, m, p, P, y = (n = f(0, 1, -t.start / (t.end - t.start)),
                                    i = e.parentNode || l,
                                    u = e.getBoundingClientRect(),
                                    P = -(p = (Math.abs(h = (d = i.getBoundingClientRect()).top - u.top) > Math.abs(m = d.bottom - u.bottom) ? h : m) / (1 - n)) * n,
                                    0 < p && (o = .5 == (r = d.height / (s.innerHeight + d.height)) ? 2 * d.height : 2 * Math.min(d.height, -p * r / (2 * r - 1)) * (n || 1),
                                    P += n ? -o * n : -o / 2,
                                    p += o),
                                    {
                                        change: p,
                                        offset: P
                                    });
                                    T = y.change,
                                    w = y.offset
                                } else
                                    T = (t.end - t.start) * (1 - c),
                                    w = 0;
                                k.forEach(function(e) {
                                    return T -= e.distance * (1 - c)
                                }),
                                t.vars.onUpdate(t),
                                v && v.progress(1)
                            }
                            var c, h, g, v, p, w, P = R("speed", t, r, e), y = R("lag", n, r, e), x = o.getProperty(e, "y"), S = e._gsap, k = [], b = [], T = 0;
                            return i(),
                            (1 !== c || g || v) && (u(h = d.create({
                                trigger: g ? e.parentNode : e,
                                scroller: z,
                                scrub: !0,
                                refreshPriority: -999,
                                onRefreshInit: a,
                                onRefresh: u,
                                onKill: function(e) {
                                    var t = A.indexOf(e);
                                    0 <= t && A.splice(t, 1),
                                    a()
                                },
                                onUpdate: function(e) {
                                    var t, n, r, i = x + T * (e.progress - p), s = k.length, a = 0;
                                    if (e.offset) {
                                        if (s) {
                                            for (n = -en,
                                            r = e.end; s--; ) {
                                                if ((t = k[s]).trig.isActive || n >= t.start && n <= t.end)
                                                    return void (v && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001,
                                                    t.trig.update(0, 0, 1),
                                                    v.resetTo("y", parseFloat(S.y), -er, !0),
                                                    eo && v.progress(1)));
                                                n > t.end && (a += t.distance),
                                                r -= t.distance
                                            }
                                            i = x + a + T * ((o.utils.clamp(e.start, e.end, n) - e.start - a) / (r - e.start) - p)
                                        }
                                        i = Math.round(1e5 * (i + w)) / 1e5 || 0,
                                        b.length && !g && b.forEach(function(e) {
                                            return e(i - a)
                                        }),
                                        v ? (v.resetTo("y", i, -er, !0),
                                        eo && v.progress(1)) : (S.y = i + "px",
                                        S.renderTransform(1))
                                    }
                                }
                            })),
                            o.core.getCache(h.trigger).stRevert = C,
                            h.startY = x,
                            h.pins = k,
                            h.markers = b,
                            h.ratio = c,
                            h.autoSpeed = g,
                            e.style.willChange = "transform"),
                            h
                        }(e[n], i, a, n)) && u.push(r);
                    return A.push.apply(A, u),
                    u
                }
                ,
                this.sections = function(e, t) {
                    if (j = j || [],
                    !e)
                        return j.slice(0);
                    var n = c(e).map(function(e) {
                        return d.create({
                            trigger: e,
                            start: "top 120%",
                            end: "bottom -20%",
                            onToggle: function(t) {
                                e.style.opacity = t.isActive ? "1" : "0",
                                e.style.pointerEvents = t.isActive ? "all" : "none"
                            }
                        })
                    });
                    return t && t.add ? j.push.apply(j, n) : j = n.slice(0),
                    n
                }
                ,
                this.content(e.content),
                this.wrapper(e.wrapper),
                this.render = function(e) {
                    return x(e || 0 === e ? e : en)
                }
                ,
                this.getVelocity = function() {
                    return ei.getVelocity(-en)
                }
                ,
                d.scrollerProxy(z, {
                    scrollTop: S,
                    scrollHeight: function() {
                        return ea() && u.scrollHeight
                    },
                    fixedMarkers: !1 !== e.fixedMarkers && !!et,
                    content: I,
                    getBoundingClientRect: function() {
                        return {
                            top: 0,
                            left: 0,
                            width: s.innerWidth,
                            height: s.innerHeight
                        }
                    }
                }),
                d.defaults({
                    scroller: z
                });
                var el = d.getAll().filter(function(e) {
                    return e.scroller === s || e.scroller === z
                });
                el.forEach(function(e) {
                    return e.revert(!0)
                }),
                F = d.create({
                    animation: o.fromTo(es, {
                        y: 0
                    }, {
                        y: function() {
                            return -ea()
                        },
                        immediateRender: !1,
                        ease: "none",
                        data: "ScrollSmoother",
                        duration: 100,
                        onUpdate: function() {
                            if (this._dur) {
                                var e = W;
                                e && (P(F),
                                es.y = en),
                                x(es.y, e),
                                n(),
                                Y && !U && Y(J)
                            }
                        }
                    }),
                    onRefreshInit: function(e) {
                        if (A) {
                            var t = d.getAll().filter(function(e) {
                                return !!e.pin
                            });
                            A.forEach(function(e) {
                                e.vars.pinnedContainer || t.forEach(function(t) {
                                    if (t.pin.contains(e.trigger)) {
                                        var n = e.vars;
                                        n.pinnedContainer = t.pin,
                                        e.vars = null,
                                        e.init(n, e.animation)
                                    }
                                })
                            })
                        }
                        var n = e.getTween();
                        B = n && n._end > n._dp._time,
                        O = en,
                        es.y = 0,
                        et && (z.style.pointerEvents = "none",
                        z.scrollTop = 0,
                        setTimeout(function() {
                            return z.style.removeProperty("pointer-events")
                        }, 50))
                    },
                    onRefresh: function(e) {
                        e.animation.invalidate(),
                        e.setPositions(e.start, ea()),
                        B || P(e),
                        es.y = -ee(),
                        x(es.y),
                        eo || e.animation.progress(o.utils.clamp(0, 1, -(O / e.end))),
                        B && (e.progress -= .001,
                        e.update())
                    },
                    id: "ScrollSmoother",
                    scroller: s,
                    invalidateOnRefresh: !0,
                    start: 0,
                    refreshPriority: -9999,
                    end: ea,
                    onScrubComplete: function() {
                        ei.reset(),
                        D && D(t)
                    },
                    scrub: et || !0
                }),
                this.smooth = function(e) {
                    return arguments.length && (et = e || 0),
                    arguments.length ? F.scrubDuration(e) : F.getTween() ? F.getTween().duration() : 0
                }
                ,
                F.getTween() && (F.getTween().vars.ease = e.ease || m),
                this.scrollTrigger = F,
                e.effects && this.effects(!0 === e.effects ? "[data-" + $ + "speed], [data-" + $ + "lag]" : e.effects, {}),
                e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections),
                el.forEach(function(e) {
                    e.vars.scroller = z,
                    e.init(e.vars, e.animation)
                }),
                this.paused = function(e, t) {
                    return arguments.length ? (!!U !== e && (e ? (F.getTween() && F.getTween().pause(),
                    ee(-en),
                    ei.reset(),
                    (Z = d.normalizeScroll()) && Z.disable(),
                    (U = d.observe({
                        preventDefault: !0,
                        type: "wheel,touch,scroll",
                        debounce: !1,
                        allowClicks: !0,
                        onChangeY: function() {
                            return S(-en)
                        }
                    })).nested = v(l, "wheel,touch,scroll", !0, !1 !== t)) : (U.nested.kill(),
                    U.kill(),
                    U = 0,
                    Z && Z.enable(),
                    F.progress = (-en - F.start) / (F.end - F.start),
                    P(F))),
                    this) : !!U
                }
                ,
                this.kill = this.revert = function() {
                    t.paused(!1),
                    P(F),
                    F.kill();
                    for (var e = (A || []).concat(j || []), n = e.length; n--; )
                        e[n].kill();
                    d.scrollerProxy(z),
                    d.removeEventListener("killAll", _),
                    d.removeEventListener("refresh", T),
                    z.style.cssText = N,
                    I.style.cssText = H;
                    var r = d.defaults({});
                    r && r.scroller === z && d.defaults({
                        scroller: s
                    }),
                    t.normalizer && d.normalizeScroll(!1),
                    clearInterval(L),
                    h = null,
                    Q && Q.disconnect(),
                    u.style.removeProperty("height"),
                    s.removeEventListener("focusin", k)
                }
                ,
                this.refresh = function(e, t) {
                    return F.refresh(e, t)
                }
                ,
                K && (this.normalizer = d.normalizeScroll(!0 === K ? {
                    debounce: !0,
                    content: !et && I
                } : K)),
                d.config(e),
                "overscrollBehavior"in s.getComputedStyle(u) && o.set([u, l], {
                    overscrollBehavior: "none"
                }),
                "scrollBehavior"in s.getComputedStyle(u) && o.set([u, l], {
                    scrollBehavior: "auto"
                }),
                s.addEventListener("focusin", k),
                L = setInterval(n, 250),
                "loading" === a.readyState || requestAnimationFrame(function() {
                    return d.refresh()
                })
            }
            P.version = "3.11.3",
            P.create = function(e) {
                return h && e && h.content() === c(e.content)[0] ? h : new P(e)
            }
            ,
            P.get = function() {
                return h
            }
            ,
            n() && o.registerPlugin(P),
            e.ScrollSmoother = P,
            e.default = P,
            "undefined" == typeof window || window !== e ? Object.defineProperty(e, "__esModule", {
                value: !0
            }) : delete e.default
        }(t)
    }
}]);
