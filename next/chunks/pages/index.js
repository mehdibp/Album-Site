let globalVariableID = { ID: '0' };
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {

    
    5557: function(e, t, i) {
        (window.__NEXT_P = window.__NEXT_P || []).push([ "/", function() {  return i(9158) } ])
    },
    
    9158: function(e, t, i) {
        "use strict";
        i.r(t),
        i.d(t, {
            __N_SSG: function() { return Z },
            default: function() { return b }
        });
        var r = i(5893)
          , s = i(5675)
          , n = i.n(s)
          , o = i(990)
          , l = i(5317)
          , a = i(2329)
          , c = i(6546)
          , u = i(7294)
          , d = i(9477)
          , h = i(6403);
        let m = {
            uniforms: {
                tDiffuse: { value: null },
                opacity:  { value: 1 }
            },
            vertexShader: `

		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,
            fragmentShader: `

		uniform float opacity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;
		void main() {
			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;

		}`
        };

        class f {
            constructor() {
                this.enabled = !0,
                this.needsSwap = !0,
                this.clear = !1,
                this.renderToScreen = !1
            }
            setSize() {}
            render() {
                console.error("THREE.Pass: .render() must be implemented in derived pass.")
            }
            dispose() {}
        }
        let w = new d.iKG(-1,1,1,-1,0,1) , p = new d.u9r;
        p.setAttribute("position", new d.a$l([-1, 3, 0, -1, -1, 0, 3, -1, 0],3)),
        p.setAttribute("uv", new d.a$l([0, 2, 0, 0, 2, 0],2));
        class v {
            constructor(e) { this._mesh = new d.Kj0(p,e) }
            dispose() { this._mesh.geometry.dispose() }
            render(e) { e.render(this._mesh, w) }
            get material() { return this._mesh.material }
            set material(e) { this._mesh.material = e }
        }

        class _ extends f {
            constructor(e, t) {
                super(),
                this.textureID = void 0 !== t ? t : "tDiffuse",
                e instanceof d.jyz ? (this.uniforms = e.uniforms,
                this.material = e) : e && (this.uniforms = d.rDY.clone(e.uniforms),
                this.material = new d.jyz({
                    defines: Object.assign({}, e.defines),
                    uniforms: this.uniforms,
                    vertexShader: e.vertexShader,
                    fragmentShader: e.fragmentShader
                })),
                this.fsQuad = new v(this.material)
            }
            render(e, t, i) {
                this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = i.texture),
                this.fsQuad.material = this.material,
                this.renderToScreen ? (e.setRenderTarget(null),
                this.fsQuad.render(e)) : (e.setRenderTarget(t),
                this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
                this.fsQuad.render(e))
            }
            dispose() {
                this.material.dispose(),
                this.fsQuad.dispose()
            }
        }
        class g extends f {
            constructor(e, t) {
                super(),
                this.scene = e,
                this.camera = t,
                this.clear = !0,
                this.needsSwap = !1,
                this.inverse = !1
            }
            render(e, t, i) {
                let r, s;
                let n = e.getContext()
                  , o = e.state;
                o.buffers.color.setMask(!1),
                o.buffers.depth.setMask(!1),
                o.buffers.color.setLocked(!0),
                o.buffers.depth.setLocked(!0),
                this.inverse ? (r = 0,
                s = 1) : (r = 1,
                s = 0),
                o.buffers.stencil.setTest(!0),
                o.buffers.stencil.setOp(n.REPLACE, n.REPLACE, n.REPLACE),
                o.buffers.stencil.setFunc(n.ALWAYS, r, 4294967295),
                o.buffers.stencil.setClear(s),
                o.buffers.stencil.setLocked(!0),
                e.setRenderTarget(i),
                this.clear && e.clear(),
                e.render(this.scene, this.camera),
                e.setRenderTarget(t),
                this.clear && e.clear(),
                e.render(this.scene, this.camera),
                o.buffers.color.setLocked(!1),
                o.buffers.depth.setLocked(!1),
                o.buffers.stencil.setLocked(!1),
                o.buffers.stencil.setFunc(n.EQUAL, 1, 4294967295),
                o.buffers.stencil.setOp(n.KEEP, n.KEEP, n.KEEP),
                o.buffers.stencil.setLocked(!0)
            }
        }
        class x extends f {
            constructor() {
                super(),
                this.needsSwap = !1
            }
            render(e) {
                e.state.buffers.stencil.setLocked(!1),
                e.state.buffers.stencil.setTest(!1)
            }
        }
        class P {
            constructor(e, t) {
                if (this.renderer = e,
                void 0 === t) {
                    let i = e.getSize(new d.FM8);
                    this._pixelRatio = e.getPixelRatio(),
                    this._width = i.width,
                    this._height = i.height,
                    (t = new d.dd2(this._width * this._pixelRatio,this._height * this._pixelRatio)).texture.name = "EffectComposer.rt1"
                } else
                    this._pixelRatio = 1,
                    this._width = t.width,
                    this._height = t.height;
                this.renderTarget1 = t,
                this.renderTarget2 = t.clone(),
                this.renderTarget2.texture.name = "EffectComposer.rt2",
                this.writeBuffer = this.renderTarget1,
                this.readBuffer = this.renderTarget2,
                this.renderToScreen = !0,
                this.passes = [],
                this.copyPass = new _(m),
                this.clock = new d.SUY
            }
            swapBuffers() {
                let e = this.readBuffer;
                this.readBuffer = this.writeBuffer,
                this.writeBuffer = e
            }
            addPass(e) {
                this.passes.push(e),
                e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
            }
            insertPass(e, t) {
                this.passes.splice(t, 0, e),
                e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
            }
            removePass(e) {
                let t = this.passes.indexOf(e);
                -1 !== t && this.passes.splice(t, 1)
            }
            isLastEnabledPass(e) {
                for (let t = e + 1; t < this.passes.length; t++)
                    if (this.passes[t].enabled)
                        return !1;
                return !0
            }
            render(e) {
                void 0 === e && (e = this.clock.getDelta());
                let t = this.renderer.getRenderTarget()
                  , i = !1;
                for (let t = 0, r = this.passes.length; t < r; t++) {
                    let r = this.passes[t];
                    if (!1 !== r.enabled) {
                        if (r.renderToScreen = this.renderToScreen && this.isLastEnabledPass(t),
                        r.render(this.renderer, this.writeBuffer, this.readBuffer, e, i),
                        r.needsSwap) {
                            if (i) {
                                let t = this.renderer.getContext()
                                  , i = this.renderer.state.buffers.stencil;
                                i.setFunc(t.NOTEQUAL, 1, 4294967295),
                                this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e),
                                i.setFunc(t.EQUAL, 1, 4294967295)
                            }
                            this.swapBuffers()
                        }
                        void 0 !== g && (r instanceof g ? i = !0 : r instanceof x && (i = !1))
                    }
                }
                this.renderer.setRenderTarget(t)
            }
            reset(e) {
                if (void 0 === e) {
                    let t = this.renderer.getSize(new d.FM8);
                    this._pixelRatio = this.renderer.getPixelRatio(),
                    this._width = t.width,
                    this._height = t.height,
                    (e = this.renderTarget1.clone()).setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
                }
                this.renderTarget1.dispose(),
                this.renderTarget2.dispose(),
                this.renderTarget1 = e,
                this.renderTarget2 = e.clone(),
                this.writeBuffer = this.renderTarget1,
                this.readBuffer = this.renderTarget2
            }
            setSize(e, t) {
                this._width = e,
                this._height = t;
                let i = this._width * this._pixelRatio
                  , r = this._height * this._pixelRatio;
                this.renderTarget1.setSize(i, r),
                this.renderTarget2.setSize(i, r);
                for (let e = 0; e < this.passes.length; e++)
                    this.passes[e].setSize(i, r)
            }
            setPixelRatio(e) {
                this._pixelRatio = e,
                this.setSize(this._width, this._height)
            }
            dispose() {
                this.renderTarget1.dispose(),
                this.renderTarget2.dispose(),
                this.copyPass.dispose()
            }
        }
        class y extends f {
            constructor(e, t, i, r, s) {
                super(),
                this.scene = e,
                this.camera = t,
                this.overrideMaterial = i,
                this.clearColor = r,
                this.clearAlpha = void 0 !== s ? s : 0,
                this.clear = !0,
                this.clearDepth = !1,
                this.needsSwap = !1,
                this._oldClearColor = new d.Ilk
            }
            render(e, t, i) {
                let r, s;
                let n = e.autoClear;
                e.autoClear = !1,
                void 0 !== this.overrideMaterial && (s = this.scene.overrideMaterial,
                this.scene.overrideMaterial = this.overrideMaterial),
                this.clearColor && (e.getClearColor(this._oldClearColor),
                r = e.getClearAlpha(),
                e.setClearColor(this.clearColor, this.clearAlpha)),
                this.clearDepth && e.clearDepth(),
                e.setRenderTarget(this.renderToScreen ? null : i),
                this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
                e.render(this.scene, this.camera),
                this.clearColor && e.setClearColor(this._oldClearColor, r),
                void 0 !== this.overrideMaterial && (this.scene.overrideMaterial = s),
                e.autoClear = n
            }
        }
        
        var S = i(4873);
        function k(e) {
            let t, i, s, n, {loadComplete: a, scroller: c, currentWorkIndex: h, scrolling: m, archiveActive: f, hoverCurrentWorkIndex: w, wkClickIndex: p} = e,
            v = (0, u.useState)(),
            g = (0, u.useRef)([]), x = 0, 
            [k,T] = (0, u.useState)(null), 
            C = new d.xsS, 
            E = 0,
            j = (0, u.useRef)(null), 
            I = new d.cPb(30,1,100,1e3), 
            M = (0, u.useRef)({}), 
            Z = (0, u.useRef)(-2200), 
            b = (0, u.useRef)(0), 
            R = (0, u.useRef)(!1), 
            L = (0, u.useRef)(null), 
            N = (0, u.useRef)(!1);

            
            
            (0, u.useEffect)(()=>(k && a && null !== c ? (W(), X(),
            f ? (o.ZP.ticker.remove(A),
            window.addEventListener("mousemove", z)) : (B(),
            o.ZP.ticker.add(A),
            o.ZP.ticker.lagSmoothing(),
            window.addEventListener("mousemove", z),
            window.addEventListener("mousedown", U),
            window.addEventListener("mouseup", H),
            window.addEventListener("mouseLeave", H),
            window.addEventListener("resize", q))) : k || T(new d.CP7({
                canvas: L.current,
                powerPreference: "high-performance"
            })),

            ()=>{
                window.removeEventListener("mousemove", z),
                window.removeEventListener("mousedown", U),
                window.removeEventListener("mouseup", H),
                window.removeEventListener("mouseleave", H),
                window.removeEventListener("resize", q)
            }
            ), 
            [k, f, a, c]), (0, u.useEffect)(()=>{
                if (0 === Z.current && j.current && !m && null === w) {
                    let e = g.current[h];
                    e && (j.current.position.y = e.mesh.position.y + (e.height / 2 + 35),
                    o.ZP.to(e, .2, { currentMove: 20 }),
                    o.ZP.fromTo(j.current.scale, .1, { x: 0 }, { x: .2 * e.width }),
                    j.current.position.x = e.mesh.position.x)
                } else if (0 !== Z.current && j.current && !m && null === w) ;
                  else if (j.current && !m && M.current.x) {
                    let e = Number(document.elementsFromPoint(M.current.x, M.current.y)[0].id.substr(2, 99))
                      , t = g.current[null !== e ? e : w];
                    t && (j.current.position.y = t.mesh.position.y + (t.height / 2 + 35),
                    o.ZP.to(t, .2, { currentMove: 20 }),
                    o.ZP.fromTo(j.current.scale, .1, { x: 0 }, { x: .2 * t.width }),
                    o.ZP.to(j.current.position, .2, { x: t.mesh.position.x }))
                }
                m && (j.current && o.ZP.to(j.current.scale, .2, { x: 0 }),
                g.current.map((e,t)=>{ o.ZP.to(e, .2, { currentMove: 0 }) }
                ))
            }, 
            [m, 0 === Z.current]), (0, u.useEffect)(()=>{
                0 === Z.current && null !== w && j.current && !m && null === p && g.current.map((e,t)=>{
                    if (t === w) {
                        o.ZP.to(e, .2, { currentMove: 20 }),
                        o.ZP.fromTo(j.current.scale, .2, { x: 0 }, { x: .2 * e.width });
                        let t = Math.cos(e.mesh.position.x / window.innerWidth * Math.PI) * window.innerHeight * .1 - .11 * window.innerHeight;
                        j.current.position.x = e.mesh.position.x,
                        j.current.position.y = t + (e.height / 2 + 35)
                    } else
                        o.ZP.to(e.mesh.position, 0, { z: 0 }),
                        o.ZP.to(e, .2, { currentMove: 0 })
                })
            }, 
            [w]), (0, u.useEffect)(()=>{
                if (null !== p) {
                    let e = g.current[p];
                    o.ZP.to(j.current.scale, .2, { x: 0 }),
                    o.ZP.to(e.mesh.material.uniforms.uClickProcess, .7, { value: 1, ease: l.Aq.easeOut }),
                    o.ZP.to(e.mesh.material.uniforms.uPlaneSizes.value, .8, { x: window.innerWidth }),
                    o.ZP.to(e.mesh.material.uniforms.uPlaneSizes.value, .9, { y: window.innerHeight }),
                    o.ZP.to(e.mesh.scale, .4, {
                        x: window.innerWidth,
                        y: window.innerHeight
                    }),
                    j.current.position.y = 5e3,
                    g.current.map((e,t)=>{
                        t !== p && o.ZP.to(e.mesh.scale, .1, {
                            x: 0,
                            y: 0
                        })
                    } )
                }
            }, 
            [p]);

            let z = e=>{
                if (M.current = {
                    x: e.clientX,
                    y: e.clientY,
                    power: (e.movementX * e.movementX + e.movementY * e.movementY) / 4
                },
                R.current) {
                    let t = b.current - e.clientX;
                    c.scrollTo(c.scrollTop() + 2 * t, !0)
                }
            }
              , W = ()=>{
                N.current = !0,
                Z.current = -(1.5 * window.innerWidth),
                t = (v = document.getElementById("app_canvas")).offsetWidth,
                i = v.offsetHeight,
                C.background = new d.Ilk(16777215),
                I.aspect = t / i,
                I.fov = 2 * Math.atan(i / 2 / 600) * (180 / Math.PI),
                I.updateProjectionMatrix(),
                I.position.z = 600,
                k.setSize(v.offsetWidth, v.offsetHeight),
                k.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
                k.getContext().canvas.addEventListener("webglcontextlost", function(e) {
                    e.preventDefault(),
                    cancelAnimationFrame(A),
                    window.location.reload()
                }, !1),
                F(),
                k.getContext().canvas.addEventListener("webglcontextrestored", function(e) {
                    console.log("restore!")
                    
                }, !1)
            }
              , A = ()=>{
                D(),
                s.render(),
                E += 1
            }
              , D = ()=>{
                let e;
                c ? (x = -c.getVelocity() / 50,
                e = c.scrollTop()) : e = 0,
                g.current.map(t=>{
                    t.mesh.position.x = (t.left - e) * (1 - t.mesh.material.uniforms.uClickProcess.value) + Z.current,
                    t.mesh.position.y = Math.cos(t.mesh.position.x / window.innerWidth * Math.PI) * i * .1 - .11 * i + t.currentMove,
                    t.mesh.position.y *= 1 - t.mesh.material.uniforms.uClickProcess.value,
                    o.ZP.to(t.mesh.material.uniforms.mousePower, 1, {
                        value: x
                    }),
                    t.mesh.material.uniforms.scrollTop.value = e
                }
                ),
                o.ZP.to(n.uniforms.mousePower, 1, {
                    value: x
                })
            }
              , F = ()=>{
                window.TEXTURES = {};
                let e = [...document.querySelectorAll(".work_item")]
                  , r = [...document.querySelectorAll(".work_img")];
                e.map((e,s)=>{
                    let n = new d.dpR().load(r[s].src, ()=>{
                        let e = n.clone();
                        e.needsUpdate = !0
                    }
                    )
                      , o = new d._12(1,1,10,500)
                      , l = e.getBoundingClientRect()
                      , a = new d.jyz({
                        uniforms: {
                            uIndex: { value: s },
                            uTexture: { value: "" },
                            uImageSizes: { value: new d.FM8(1900,950) },
                            uPlaneSizes: { value: new d.FM8(l.width,2.4 * l.width) },
                            uResolution: { value: new d.FM8(t,i) },
                            mousePower: { value: 0 },
                            scrollTop: { value: 0 },
                            uClickProcess: { value: 0 },
                            uIntroProcess: { value: 1 }
                        },
                        vertexShader: "#define GLSLIFY 1\n#define PI 3.1415926535897932384626433832795\n \n\nuniform vec2 uResolution;\nuniform vec2 uPlaneSizes;\nuniform float mousePower;\nuniform float uClickProcess;\nuniform float uIntroProcess;\nuniform float uStrength;\n \nvarying vec2 vUv;\n \nvoid main() {\n  vec4 fullscreenMatrix;\n  vec4 newPosition = modelViewMatrix * vec4(position, 1.0);\n  //float posX =  min(0.,sin(newPosition.x / uResolution.x * PI+PI));\n  //float posX =  sin(newPosition.x / uResolution.x * PI+PI);\n  float posX =  smoothstep(.8,-.2 , cos(newPosition.x/ uResolution.x * PI));\n  newPosition.z += posX*-abs(mousePower)*2.5+cos(newPosition.x/ uResolution.x * PI)*(uIntroProcess*0.7)*500.;\n  newPosition.x += sin(newPosition.y*20.1*PI)*(sin(uIntroProcess*PI))*30.;\n  newPosition.z += cos(newPosition.x/(uResolution.x)*1.2* PI)*(sin(uClickProcess*PI))*150.;\n  newPosition.z += cos(newPosition.y/(uResolution.y)*1.2* PI)*(sin(uClickProcess*PI))*150.;\n  newPosition.x += sin(newPosition.x/(uResolution.x) * PI)*(sin(uClickProcess*PI))*200.;\n  newPosition.x += sin(newPosition.y*7.1*PI)*(sin(uClickProcess*1.*PI))*50.;\n  newPosition.y += posX*-abs(mousePower)*2.5;\n  \n \n \n  vUv = uv;\n  gl_Position = projectionMatrix * newPosition;\n}",
                        fragmentShader: "#define GLSLIFY 1\nuniform sampler2D uTexture;\nuniform vec2 uResolution;\nuniform float uIndex;\nuniform float scrollTop;\nuniform float uClickProcess;\nvarying vec2 vUv;\nuniform vec2 uImageSizes;\nuniform vec2 uPlaneSizes;\nuniform float uSelectProcess;\n\nvoid main() {\n vec2 ratio = vec2(\n    min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),\n    min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)\n  );\n  vec2 uv = vec2(\n    vUv.x * ratio.x + (1.0 - ratio.x) * (0.44+(0.2-scrollTop/(uIndex*2.7+10.)*0.004)*(1.-uClickProcess)),\n    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5\n  );\n  vec4 tt = texture2D(uTexture,uv);\n  //gl_FragColor = vec4(tt.r*0.8,tt.g*0.8,tt.b*0.8,1.);\n  gl_FragColor =tt;\n\n}"
                    })
                      , c = new d.Kj0(o,a);
                    c.scale.set(0, 0, 1),
                    c.material.uniforms.uTexture.value = n,
                    C.add(c),
                    g.current.push({
                        mesh: c,
                        width: l.width,
                        currentMove: 0,
                        height: 2.4 * l.width,
                        top: 0,
                        left: s * (l.width + 10)
                    })
                }
                );
                let s = new d._12(1,1,1,1)
                  , n = new d.nls({ color: 0 });
                j.current = new d.Kj0(s,n),
                C.add(j.current)
            }
              , q = ()=>{
                let e;
                t = (v = document.getElementById("app_canvas")).offsetWidth,
                i = v.offsetHeight,
                I.aspect = t / i,
                k.setSize(t, i),
                I.fov = 2 * Math.atan(i / 2 / 600) * (180 / Math.PI),
                I.updateProjectionMatrix();
                let r = [...document.querySelectorAll(".work_img")]
                  , s = {
                    width: .1 * window.innerWidth,
                    height: .1 * window.innerWidth * 2.4
                }
                  , n = document.getElementById("smooth-content");
                e = 0 + ((r.length - 1) * (.1 * window.innerWidth + 10) + 5 + window.innerHeight),
                n.style.height = e + "px",
                g.current.length && (g.current = g.current.map((e,t)=>(e.mesh.scale.set(s.width, s.height, 1),
                {
                    mesh: e.mesh,
                    width: s.width,
                    currentMove: e.currentMove,
                    height: 2.4 * s.width,
                    top: 0,
                    left: t * (s.width + 10)
                })))
            }
              , B = ()=>{
                let e = new o.ZP.timeline;
                setTimeout(()=>{
                    e.to(Z, 1, { current: 0,  ease: l.EA.easeIn }, 0),
                    e.to(".pr_info", 0, { opacity: 1 }, 0),
                    e.to(".pr_info .pr_title_t", 0, { opacity: 0 }, 0),
                    e.from(".pr_info .pr_bar", .3, { scaleX: 0 }, 1.4),
                    e.from(".pr_info .pr_detail", .3, {
                        delay: 1.4,
                        opacity: 0
                    }, .5),
                    g.current[0],
                    g.current.map(e=>{
                        o.ZP.to(e.mesh.scale, 1.8, {
                            x: e.width,
                            y: 2.4 * e.width
                        }),
                        o.ZP.to(e.mesh.material.uniforms.uIntroProcess, .7, {
                            value: 0,
                            delay: 1
                        })
                    })
                } , 500),
                setTimeout(()=>{
                    o.ZP.to(".pr_info .pr_title_t", 0, { opacity: 1 });
                    let e = new S.SplitText(".pr_info .pr_title_t",{
                        type: "chars,words",
                        wordDelimiter: "*"
                    });
                    o.ZP.from(e.chars, 1, {
                        opacity: 0,
                        x: -100,
                        y: 150,
                        rotateX: -400,
                        transformOrigin: "0% 50% 30%",
                        stagger: .03
                    })
                } , 1800)
            }
              , U = e=>{
                R.current = !0,
                b.current = e.clientX
            }
              , H = e=>{
                R.current = !1,
                b.current = e.clientX
            }
              , X = ()=>{
                s = new P(k);
                let e = new y(C,I);
                s.addPass(e);
                let r = {
                    uniforms: {
                        tDiffuse: {
                            value: null
                        },
                        uResolution: {
                            value: new d.FM8(t,i)
                        },
                        mousePower: {
                            value: 0
                        }
                    },
                    vertexShader: "#define GLSLIFY 1\n#define PI 3.1415926535897932384626433832795\n \n\nuniform vec2 uResolution;\nuniform float mousePower;\n  varying vec2 vUv;\nvoid main() {\n  vec4 newPosition = modelViewMatrix * vec4(position, 1.0);\n\n  vUv = uv;\n \n  gl_Position = projectionMatrix * newPosition;\n}\n",
                    fragmentShader: "\n            uniform sampler2D tDiffuse;\n            uniform float mousePower;\n            varying vec2 vUv;\n\n            void main(){\n                vec2 newUv = vec2(vUv.x-mousePower*0.002,vUv.y);\n               \n                gl_FragColor =  mix(vec4(0.),texture2D(tDiffuse, newUv),1.);\n            }\n            "
                };
                (n = new _(r)).renderToScreen = !0,
                s.addPass(n)
            };
            return (0, r.jsx)("div", {
                id: "app_canvas",
                children: (0, r.jsx)("canvas", {
                    ref: L,
                    id: "canvas",
                    width: "100%",
                    height: "100%"
                })
            })
        }

        o.ZP.registerPlugin(h.TextPlugin),
        o.ZP.registerPlugin(S.SplitText);
        var T = i(271)
          , C = i(4587)
          , E = i(1163)
          , j = i(9577)
          , I = i(4480)
          , M = i(10);
        o.ZP.registerPlugin(c.ScrollTrigger, h.TextPlugin, a.ScrollSmoother);
        var Z = !0;

        function b(e) {
            let t, 
            {workItems: i} = e,
                d = (0, E.useRouter)(), 
            [s,c] = (0, u.useState)(0), 
            [h,m] = (0, u.useState)(null), 
            [f,w] = (0, u.useState)(null), 
            [p,v] = (0, u.useState)(!1), 
            [_,g] = (0, u.useState)(!1), 
            [x,P] = (0, I.FV)(j.tV), 
            [y,Z] = (0, I.FV)(j.NA), 
            [b,R] = (0, I.FV)(j.RI), 
            [L,N] = (0, u.useState)(x), 
            [z,W] = (0, u.useState)(null), 
            [A,D] = (0, u.useState)(!0), 
            [F,q] = (0, u.useState)(!!b), 
            [B,U] = (0, u.useState)(!1);

            (0, M.Z)("@@ACTIVE_ACHIVE", ()=>{
                _ && !B && (D(!0),
                v(!0),
                h.paused(!0),
                setTimeout(()=>{
                    D(!1),
                    h.paused(!1),
                    v(!1)
                } , 2e3)),
                g(!_)
            }
            , [_, h]);

            let H = (e,t)=>{
                let i = 0 , r = e.length;
                e.forEach(function(e) {
                    X(e, ()=>{
                        c(++i / r),
                        o.ZP.to(".scroll_info .since_info", .2, { x: 340 * (i / r) }),
                        i == r && t()
                    })
                })
            }
              , X = (e,t)=>{
                let i = new Image;
                i.onload = t,
                i.src = e
            };

            (0, u.useEffect)(()=>{
                let e = document.body , t = document.documentElement;
                if (e.scrollHeight,
                e.offsetHeight,
                t.clientHeight,
                t.scrollHeight,
                t.offsetHeight,
                b)
                    V(), o.ZP.to(".company_info", 0, {
                        opacity: 0,
                        y: 50
                    }),
                    window.innerWidth <= 900 && (U(!0),
                    q(!0),
                    D(!1),
                    document.querySelector(".contents_wrap").addEventListener("scroll", Y));
                else if (window.innerWidth <= 900) {
                    U(!0),
                    q(!0),
                    D(!1),
                    document.querySelector(".contents_wrap").addEventListener("scroll", Y),
                    V();
                    let e = new S.SplitText(".mobile_intro .main_title",{
                        type: "chars,words",
                        wordDelimiter: "*"
                    })
                      , t = new o.ZP.timeline;
                    t.from(e.chars, .8, {
                        opacity: 0,
                        x: -10,
                        y: 50,
                        rotateX: -200,
                        transformOrigin: "0% 50% 20%",
                        stagger: .03
                    }, 0),
                    t.from(".mobile_intro .scroll_down_info", .5, {
                        opacity: 0,
                        y: 30
                    }, 1.2),
                    t.from(".scroll_info ", .5, {
                        opacity: 0,
                        y: 30
                    }, 1.4)
                } else
                    o.ZP.to("#menuMask path", 0, {
                        attr: {
                            d: "M 0 100 V 100 Q 50 100 100 100 V 100 z"
                        },
                        ease: l.Yp.easeOut
                    }),
                    O();
                return ()=>{
                    document.querySelector(".contents_wrap") && document.querySelector(".contents_wrap").removeEventListener("scroll", Y),
                    o.ZP.globalTimeline.clear(),
                    h && h.kill()
                }
            }
            , []);

            let O = ()=>{
                let e = [...i.map(e=>e.data.images[0].image.url)];
                new Image,
                H(e, ()=>{
                    setTimeout(()=>{ q(!0), R(!0) } , 500),
                    o.ZP.to(".company_info", .3, { opacity: 0,  y: 50, delay: .3 }),
                    setTimeout(()=>{ V(),
                        o.ZP.to("header", 1, { delay: 1, opacity: 1 })
                    }
                    , 1500)
                })
            }
              , V = ()=>{
                let e = 0;
                o.ZP.to("#menuMask path", .1, {
                    attr: {
                        d: "M 0 100 V 100 Q 50 100 100 100 V 100 z"
                    },
                    ease: l.Yp.easeOut
                }),
                document.querySelectorAll(".work_items")[0];
                let r = document.getElementById("smooth-content")
                  , s = [...document.querySelectorAll(".work_item")];
                if (window.innerWidth > 900 && (e += (s.length - 1) * (.1 * window.innerWidth + 10) + 5 + window.innerHeight,
                r.style.height = e + "px",
                setTimeout(()=>{ document.querySelector(".scroll_info_tl").classList.remove("intro_duration") } , 2e3),
                m(t = a.ScrollSmoother.create({
                    smooth: 1.2,
                    effects: !0,
                    smoothTouch: .1,
                    onStop: e=>{
                        if (window.innerWidth > 900) {
                            let t = Math.floor((e.scrollTop() + .05 * window.innerWidth) / (.1 * window.innerWidth + 10));
                            void 0 !== i[t] && (o.ZP.to(".pr_info .pr_num", 0, {
                                text: "(" + (0, C.h)(t + 1) + ")"
                            }),
                            o.ZP.to(".pr_info .pr_title_t", .2, {
                                text: i[t].data.pr_title
                            }),
                            o.ZP.to(".pr_info .pr_client", 0, {
                                text: i[t].data.time
                            }),
                            N(t),
                            v(!1))
                        }
                    },

                    onUpdate: e=>{
                        c(e.progress),
                        o.ZP.to(".scrolldown_info", .4, { scaleY: 0 }),
                        v(!0),
                        o.ZP.to(".work_items", 0, { x: -e.scrollTop(),  y:  e.scrollTop() })
                    }
                }))),
                window.innerWidth > 900) {
                    let e = null === x ? 2 : x;
                    t.paused(!0),
                    t.scrollTo((.1 * window.innerWidth + 10) * e),
                    o.ZP.to(".work_items", 0, {
                        x: -t.scrollTop(),
                        y:  t.scrollTop()
                    }),
                    o.ZP.to(".pr_info .pr_title_t", .1, {
                        text: i[e].data.pr_title
                    }),
                    o.ZP.to(".pr_info .pr_num", 0, {
                        text: "(" + (0, C.h)(Number(e) + 1) + ")"
                    }),
                    c(e / i.length),
                    setTimeout(()=>{
                        D(!1),
                        t.paused(!1),
                        v(!1),
                        b || o.ZP.to(".scrolldown_info", .4, {
                            scaleY: 1,
                            delay: .5
                        })
                    }
                    , 2e3)
                } else
                    D(!1)
            }
              , Y = ()=>{
                let e = [...document.querySelectorAll(".work_wrap .work_item")]
                  , t = document.querySelector(".contents_wrap").scrollTop - .9 * window.innerHeight;
                t = t < -150 ? -150 : t;
                let r = t / (document.querySelector("#smooth-content").offsetHeight - window.innerHeight);
                c(r);
                let s = t / 210 < 0 ? -1 : t / 210;
                e.map((e,t)=>{
                    let r = -Math.cos((t - (-1 === s ? 1 : s + 1)) / Math.PI * 2) * window.innerWidth / 3 + window.innerWidth / 3;
                    o.ZP.to(e, 0, { x: r, ease: l.bJ.easeNone }),
                    o.ZP.to(".work_top_info .work_title", 0, { text: i[Math.floor(s) + 1].data.pr_title }),
                    o.ZP.to(".work_top_info .work_index", 0, { text: Math.floor(s) + 2 })
                }
                ),
                document.querySelector(".work_top_info") && (t > -150 ? (document.querySelector(".header").classList.add("active"),
                document.querySelector(".work_top_info").classList.add("active"),
                document.querySelector(".scroll_info").classList.add("active"),
                document.querySelector(".work_wrap").classList.add("active")) : (document.querySelector(".header").classList.remove("active"),
                document.querySelector(".work_top_info").classList.remove("active"),
                document.querySelector(".scroll_info").classList.remove("active"),
                document.querySelector(".work_wrap").classList.remove("active")))
            };

            (0, u.useEffect)(()=>{
                null !== f && (o.ZP.to(".pr_info .pr_title_t", .2, {
                    text: i[f].data.pr_title
                }),
                o.ZP.to(".pr_info .pr_num", 0, {
                    text: "(" + (0, C.h)(f + 1) + ")"
                }),
                o.ZP.to(".pr_info .pr_client", 0, {
                    text: i[f].data.time
                }))
            } , [f]),
            (0, u.useEffect)(()=>{
                !p && f && (o.ZP.to(".pr_info .pr_title_t", .2, {
                    text: i[f].data.pr_title
                }),
                o.ZP.to(".pr_info .pr_num", 0, {
                    text: "(" + (0, C.h)(f + 1) + ")"
                }))
            } , [p]);

            let Q = ee=>{        // "e" means corent index clicked
                if (P(ee),
                    Z(i[ee].data.images[0].image),
                    o.ZP.to(".scrolldown_info", .3, { opacity: 0 }),
                    window.innerWidth > 900) 
                {
                    D(!0), W(ee),
                    o.ZP.to(".pr_info", .3, { y: -50, opacity: 0 });
                    let t = o.ZP.timeline({ delay: .2 });
                    t.to(".thunmail_img", .2, {  opacity: 1 }),

                    setTimeout(()=>{
                        d.push("http://127.0.0.1:5500/work/" + i[ee].id + ".html")
                    }, 800)

                } else
                    document.querySelector(".contents_wrap").removeEventListener("scroll", Y),
                    (0, C.i)("http://127.0.0.1:5500/work/" + i[ee].id + ".html", d)
                    
                    // globalVariableID = { ID: i[ee].id };      // Global Variable ID
                    // console.log(globalVariableID)
                
            };


            return (0, r.jsx)(r.Fragment, {
                children: (0, r.jsxs)("div", {
                    className: "main",
                    style: { height: B ? window.innerHeight : "inherit" },
                    children: [(0, r.jsxs)("div", {
                        className: "work_top_info",
                        children: [(0, r.jsx)("h2", {
                            className: "work_title",
                            children: "29th Special School on Topics in Physic"
                        }), (0, r.jsxs)("div", {
                            className: "work_index_tl",
                            children: [(0,
                            r.jsx)("span", {
                                className: "work_index"
                            }), "/", i.length]
                        })]
                    }), (0, r.jsx)("div", {
                        className: "pr_info ",
                        children: (0, r.jsxs)("div", {
                            className: "pr_title",
                            children: [(0, r.jsx)("h2", {
                                className: "pr_title_t",
                                children: "29th Special School on Topics in Physic"
                            }), (0, r.jsxs)("div", {
                                className: "pr_subinfo",
                                children: [(0, r.jsx)("button", {
                                    className: "back_bt",
                                    children: "Back to List"
                                }), (0, r.jsx)("div", {
                                    className: "pr_bar hide_bar"
                                }), (0, r.jsx)("div", {
                                    className: "pr_num pr_detail",
                                    children: "(03)"
                                }), (0, r.jsx)("div", {
                                    className: "pr_bar"
                                }), (0, r.jsx)("div", {
                                    className: "pr_client pr_detail",
                                    children: "Summer-2023"
                                })]
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: "scroll_info " + (F ? "" : "load_intro"),
                        children: (0, r.jsxs)("div", {
                            className: "scroll_info_tl intro_duration",
                            children: [(0, r.jsx)("div", {
                                className: "since_info",
                                children: 2016 + Math.floor(s * (Number(new Date().getFullYear()) % 2016))
                            }), i.length && i.map((e,t)=>{
                                let n = 30 * Math.cos((t / i.length - s) * Math.PI);
                                return (0, r.jsxs)(u.Fragment, {
                                    children: [(0, r.jsx)("div", {
                                        className: "si_item",
                                        style: { height: n < 19 ? 19 : n }
                                    }), !0 === B && (0, r.jsx)("div", {
                                        className: "si_item",
                                        style: { height: n < 16 ? 16 : n }
                                    }, t)]
                                }, t)
                            }
                            )]
                        })
                    }), (0, r.jsxs)("div", {
                        className: "company_info load_intro",
                        children: ["Physics School Album", (0, r.jsx)]
                    }), (0, r.jsx)("div", {
                        className: "mobile_intro",
                        style: { height: B ? window.innerHeight : "inherit" },
                        children: (0, r.jsxs)("div", {
                            className: "intro_container",
                            children: [(0, r.jsxs)("div", {
                                className: "main_title",
                                children: ["Physics", (0,
                                r.jsx)("br", {}), "School ", (0,
                                r.jsx)("br", {}), "Album"]
                            }), (0, r.jsx)("div", {
                                className: "scroll_down_info",
                                children: "please scroll down"
                            })]
                        })
                    }),
                    (0, r.jsxs)("div", {
                        className: "scrolldown_info",
                        children: [(0, r.jsxs)("svg", {
                            width: "40px",
                            height: "100%",
                            viewBox: "0 0 247 390",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            style: {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: 1.5
                            },
                            children: [(0, r.jsx)("path", {
                                id: "wheel",
                                d: "M123.359,79.775l0,72.843",
                                style: {
                                    fill: "none",
                                    stroke: "#181818",
                                    strokeWidth: "20px"
                                }
                            }), 
                            (0, r.jsx)("path", {
                                id: "mouse",
                                d: "M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",
                                style: {
                                    fill: "none",
                                    stroke: "#181818",
                                    strokeWidth: "20px"
                                }
                            })]
                        }), "please scroll"]
                    }), 

                    (0, r.jsxs)("div", {
                        id: "smooth-content",
                        children: [(0, r.jsx)("div", {
                            className: "mobile_intro_space",
                            style: { height: B ? window.innerHeight : "800px" }
                        }), 

                        (0, r.jsx)("div", {
                            className: "work_wrap",
                            children: (0, r.jsx)("div", {
                                className: "work_items " + (A || !F ? "click_block" : ""),
                                onMouseLeave: ()=>{ w(null) },
                                children: i.map((e,t)=>(0, r.jsxs) ("div", {

                                    id: "wk" + t,
                                    className: "work_item",
                                    onMouseOver: ()=>{ w(t) },
                                    onClick: ()=>{ Q(t)},                      // ID (t == index of id)
                                    children: [!0 === B && (0, r.jsxs)("div", {
                                        className: "work_num",
                                        children: ["(", (0, C.h)(t + 1), ")"]
                                    }),
                                    !0 === B && (0, r.jsx)("div", {
                                        className: "work_title",
                                        children: e.data.time
                                    }),
                                    !0 === B && (0, r.jsx)(n(), {
                                        className: "work_img",
                                        alt: "project thumnail " + t,
                                        src: e.data.images[1].image.url,
                                        fill: !0,
                                        style: { objectFit: "cover" }
                                    }),
                                    !0 !== B && F && (0, r.jsx)(n(), {
                                        className: "work_img",
                                        unoptimized: !0,                // without this line work_img use path (/img)
                                        alt: "project thumnail",
                                        src: e.data.images[0].image.url,
                                        width:  e.data.images[0].image.dimensions.width,
                                        height: e.data.images[0].image.dimensions.height,
                                        quality: 100
                                    })]

                                }, "wk" + t))
                            })
                        })]
                    }),


                    _ && (0, r.jsx)(T.Z, { workItems: i }), 
                    !_ && !B && (0, r.jsx)(k, {
                        loadComplete: F,
                        scroller: h,
                        scrolling: p,
                        currentWorkIndex: L,
                        archiveActive: _,
                        hoverCurrentWorkIndex: f,
                        wkClickIndex: z
                        
                    })]
                })
            })

        }
    }
},


function(e) {
    e.O(0, [737, 689, 748, 873, 774, 888, 179], function() { return e(e.s = 5557) }),
    _N_E = e.O()
},

]);

// function ExportID() { return globalVariableID }
// export {ExportID};
