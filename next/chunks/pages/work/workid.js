//import { ExportID } from '../index.js'
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[606], {

    7775: function(e, i, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/work/[workid]", function() { return t(953) } ]) 
    },

    953: function(e, i, t) {
        "use strict";
        t.r(i),
        t.d(i, {
            __N_SSG: function() { return j },
            default: function() { return N }
        });

        var s = t(5893)
          , l = t(7294)
          , a = t(6546)
          , r = t(4873)
          , d = t(990)
          , o = t(5317)
          , n = t(2329)
          , c = t(723)
          , m = t(5675)
          , h = t.n(m)
          , _ = t(6403)
          , u = t(1163)
          , g = t(4587)
          , p = t(9577)
          , w = t(10)
          , x = t(271)
          , v = t(4480);


        d.ZP.registerPlugin(a.ScrollTrigger, n.ScrollSmoother, r.SplitText, _.TextPlugin);
        var j = !0;

        function N(e) {
            let i, {workItems: t, params: m} = e; 
		    //m = {workid: ExportID().ID};
	        let N = (0, u.useRouter)(), 
            [_,j] = (0, l.useState)(null), 
            [f,y] = (0, l.useState)(!1), 
            [k,b] = (0, l.useState)(!1), 
            [P,S] = (0, l.useState)(t.filter((e,i) => e.id === m.workid)[0]),
            [T,Z] = (0, l.useState)(0), 
            [E,C] = (0, l.useState)({}), 
            [q,H] = (0, l.useState)(null), 
            [I,A] = (0, v.FV)(p.tV), 
            [O,V] = (0, l.useState)(null), 
            [X,B] = (0, l.useState)(null);

            //let mm = {workid: ExportID().ID};
            //console.log(mm);
            

            return (0, w.Z)("@@ACTIVE_ACHIVE", ()=>{ f ? _ && _.paused(!1) : _ && _.paused(!0), y(!f) }
            , [f, _]),
            (0, l.useEffect)(()=>{ _ && _.paused(!1), y(!1) }
            , [N, _]),
            (0, l.useLayoutEffect)(()=>{
                window.innerWidth <= 900 && (b(!0),
                document.querySelector(".wd1 .back_img").style.height = window.innerHeight + "px")
            }
            , []),
            (0, l.useLayoutEffect)(()=>(t.map((e,i)=>{
                e.id === m.workid && (S(e),
                Z(i + 1),
                C(t[i >= t.length - 1 ? 0 : i + 1]),
                H(i >= t.length - 1 ? 0 : i + 1))
            }),
            ()=>{}
            ), [N]),
            (0, l.useEffect)(()=>{
                let e = [];
                if (window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "instant"
                }),
                document.querySelector("#smooth-content").scrollTo(0, 0),
                d.ZP.to(".pr_title", 0, {
                    opacity: 1
                }),
                window.innerWidth > 900) {
                    let e = new r.SplitText(".wd1 .pr_title",{
                        type: "chars,words",
                        wordDelimiter: "*"
                    });
                    d.ZP.from(e.chars, .7, {
                        opacity: 0,
                        x: -10,
                        y: 300,
                        rotateX: -200,
                        transformOrigin: "0% 50% 20%",
                        stagger: .04
                    })
                } else
                    d.ZP.from(".wd1 .pr_title", .7, {
                        delay: .6,
                        opacity: 0
                    }),
                    d.ZP.from(".wd1 .pr_num_mobile", .7, {
                        delay: .4,
                        y: 100,
                        opacity: 0
                    }),
                    d.ZP.from(".wd1 .pr_num_client", .7, {
                        delay: .4,
                        y: -100,
                        opacity: 0
                    }),
                    d.ZP.from(".wd1 .back_img img", 1.5, {
                        delay: .2,
                        scale: 1.2,
                        ease: o.bJ.easeNone
                    });
                if (d.ZP.to("#menuMask path", 1.2, {
                    attr: {
                        d: "M 0 100 V 100 Q 50 100 100 100 V 100 z"
                    },
                    ease: o.Yp.easeOut
                }),
                window.innerWidth > 900) {
                    let t = n.ScrollSmoother.create({
                        smooth: 1.1
                    });
                    j(t),
                    t.scrollTo(0, !1),
                    document.querySelector(".thunmail_img") && d.ZP.to(".thunmail_img", .1, {
                        delay: .2,
                        opacity: 0
                    }),
                    d.ZP.fromTo(".top_info .pr_top_section", .5, {
                        y: -100,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1
                    }),
                    d.ZP.to(".wd1 .back_img img", {
                        scale: 1.3,
                        ease: o.bJ.easeNone,
                        scrollTrigger: {
                            trigger: ".wd1",
                            start: "+=0",
                            end: "+=" + window.innerHeight,
                            scrub: 1
                        }
                    }),
                    d.ZP.fromTo(".wd2 .deco_line", 1.2, {
                        scaleX: 0
                    }, {
                        scaleX: 1,
                        ease: o.Aq.easeIn,
                        stagger: .3,
                        scrollTrigger: {
                            trigger: ".wd2",
                            start: "-=" + .9 * window.innerHeight
                        }
                    }),
                    i = d.ZP.from(".pri_item div", .5, {
                        text: "",
                        ease: o.Aq.easeIn,
                        stagger: .1,
                        scrollTrigger: {
                            trigger: ".wd2",
                            start: "-=" + .9 * window.innerHeight
                        }
                    }),
                    d.ZP.from(".wd2 .pr_desc p", 2, {
                        text: "",
                        scrollTrigger: {
                            trigger: ".wd2",
                            start: "-=" + .9 * window.innerHeight
                        }
                    });
                    let s = [...document.querySelectorAll(".wd_work_items img")];
                    s.map((i,t)=>{
                        let s = i.getBoundingClientRect();
                        e[t] = d.ZP.fromTo(i, .8, {
                            width: 1300,
                            height: 0,
                            ease: o.Yp.easeOut
                        }, {
                            width: 1300,
                            height: s.height,
                            scrollTrigger: {
                                trigger: i,
                                start: "-=" + 1 * window.innerHeight
                            }
                        })
                    }
                    )
                } else
                    document.querySelector(".work_detail_wrap").scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "instant"
                    });
                return ()=>{
                    _ && _.kill(),
                    d.ZP.globalTimeline.clear(),
                    i && i.kill(),
                    e.length && e.forEach(e=>e.kill()),
                    a.ScrollTrigger.getAll().forEach(e=>e.kill()),
                    a.ScrollTrigger.refresh()
                }
            }
            , [P]),


            (0, s.jsxs)(s.Fragment, {
                children: [O && (0, s.jsxs)("div", {
                    className: "work_popup",
                    children: [(0, s.jsx)("div", {
                        className: "close_bt",
                        onClick: ()=>{ V(null), d.ZP.to(".header", .2, { autoAlpha: 1 }) },
                        children: "Close"
                    }), (0, s.jsx)("div", {
                        className: "loading_t",
                        children: "loading..."
                    }), (0, s.jsx)("div", {
                        className: "main_video",
                        children: (0, s.jsx)("iframe", {
                            src: "img/" + O + ".m4v",
                            frameBorder: "0",
                            allow: "autoplay; fullscreen; picture-in-picture",
                            style: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%"
                            }
                        })
                    })]
                }), (0, s.jsx)("div", {
                    className: "work_detail top_info",
                    children: (0, s.jsxs)("div", {
                        className: "pr_top_section",
                        children: [(0,
                        s.jsx)("button", {
                            className: "default_bt back_bt",
                            onClick: ()=>{ (0, g.i)("http://127.0.0.1:5500/index.html", N) },
                            children: "Back to List"
                        }), 
                        (0, s.jsx)("div", { className: "deco_line" }), 
                        (0, s.jsxs)("div", {
                            className: "prt_item",
                            children: ["(", (0,
                            g.h)(29-T), ")"]
                        }), 
                        (0, s.jsx)("div", { className: "deco_line" }), 
                        (0, s.jsx)("div", {
                            className: "prt_item",
                            children: P.data.time
                        })]
                    })
                }),

                (0, s.jsxs)("div", {
                    className: "work_detail_wrap",
                    style: { height: k ? window.innerHeight : "inherit" },
                    children: [(0, s.jsxs)("section", {
                        className: "work_detail wd1",
                        tabIndex: "0",
                        children: [(0, s.jsxs)("div", {
                            className: "pr_num_mobile",
                            children: ["(", (0, g.h)(T), ")"]
                        }), (0, s.jsx)("h2", {
                            className: "pr_title",
                            children: P.data.pr_title
                        }), (0, s.jsx)("div", {
                            className: "pr_num_client",
                            children: P.data.time
                        }), (0, s.jsx)("div", {
                            className: "back_img",
                            style: { height: k ? window.innerHeight : null },
                            children: (0, s.jsx)(h(), {
                                width: 1900,
                                height: 950,
                                quality: 100,
                                priority: !0,
                                unoptimized: !0,
                                alt: "project cover image",
                                src: P.data.images[0].image.url
                            }, "prT" + P.id)
                        }), (0, s.jsx)("div", {
                            className: "scroll_down_msg",
                            children: "Please scroll down"
                        })]
                    }), 
                (0, s.jsxs)("div", {
                    id: "smooth-content",
                    children: [(0, s.jsx)("section", {
                        className: "work_detail wd2",
                        tabIndex: "1",
                        children: (0, s.jsxs)("div", {
                            className: "section_container",
                            children: [(0, s.jsx)("div", {
                                className: "pr_desc",
                                children: P.data.description && P.data.description.split("\n").map((e,i)=>(0, s.jsx)
                                ("p", { children: e }, "de" + i))
                            }), 
                            (0, s.jsxs)("div", {
                                className: "pr_info_items",
                                children: [(0, s.jsxs)("div", {
                                    className: "pri_item",
                                    children: [(0, s.jsx)("div", {
                                        className: "deco_line"
                                    }), (0, s.jsx)("div", {
                                        className: "pri_title",
                                        children: "Chair"
                                    }), (0, s.jsx)("div", {
                                        className: "pri_contents",
                                        children: P.data.chair
                                    })]
                                }, "pir" + P.id), 
                                (0, s.jsxs)("div", {
                                    className: "pri_item",
                                    children: [
                                    (0, s.jsx)("div", { className: "deco_line" }), 
                                    (0, s.jsx)("div", {
                                        className: "pri_title",
                                        children: "Time"
                                    }), 
                                    (0, s.jsx)("div", {
                                        className: "pri_contents",
                                        children: P.data.time
                                    })]
                                }, "pir2" + P.id), 
                                (0, s.jsxs)("div", {
                                    className: "pri_item last_item",
                                    children: [
                                    (0, s.jsx)("div", { className: "deco_line" }), 
                                    (0, s.jsx)("div", {
                                        className: "pri_title",
                                        children: "Execution"
                                    }), 
                                    (0, s.jsx)("a", {
                                        className: "pri_contents",
                                        children: P.data.execution,
                                        href: P.data.href
                                        
                                    }), 
                                    (0, s.jsx)("div", { className: "deco_line bottom_line" })]
                                }, "pir3" + P.id)
                            ] })]
                        })
                    }),

                    
                    (0,s.jsx)("section", {
                        className: "work_detail wd3",
                        tabIndex: "2",
                        children: (0, s.jsxs)("div", {
                            className: "wd_work_items",
                            children: [
                            P.data.video_items.filter(e=>null !== e.video_url).map((e,i)=>(0, s.jsxs)("div", {
                                className: "work_item video_item vi" + i,
                                onClick: ()=>{
                                    V(e.video_url),
                                    d.ZP.to(".header", .2, { autoAlpha: 0 })
                                },
                                onMouseOver: ()=>{ k || d.ZP.to(".video_item.vi" + i + " img", .5, { scale: 1.2 }) },
                                onMouseOut:  ()=>{ k || d.ZP.to(".video_item.vi" + i + " img", .5, { scale: 1 }) },
                                children: [
                                (0, s.jsx)("div", { className: "deco_rec dr1" }), 
                                (0, s.jsx)("div", { className: "deco_rec dr2" }), 
                                (0, s.jsx)("div", { className: "deco_rec dr3" }), 
                                (0, s.jsx)("div", { className: "deco_rec dr4" }), 
                                (0, s.jsx)("button", {
                                    className: "play_bt",
                                    children: "Play Video"
                                }), 
                                (0, s.jsx)(h(), {
                                    src: e.video_image.url,
                                    priority: !0,
                                    quality: 95,
                                    width: 2400,
                                    height: 1223,
                                    style: { width: "100%", height: "auto" },
                                    alt: "video thumnail image"
                                })]

                            }, "video" + i)), 
                            
                            P.data.images.filter((e,i)=>i > 0).map((e,i)=>void 0 === e.image.dimensions ? (0, s.jsx) (s.Fragment, {}): 
                            (0, s.jsx)("div", {
                                className: "work_item",
                                style: { height: 1300 / (e.image.dimensions.width / e.image.dimensions.height) },
                                children: (0, s.jsx)(h(), {
                                    priority: !0,
                                    src: e.image.url,      // decodeURIComponent() in 3851 _app
                                    quality: 95,
                                    width: 2e3,
                                    height: 2e3 / (e.image.dimensions.width / e.image.dimensions.height),
                                    style: { width: "100%", height: "auto" },
                                    alt: "project image " + i
                                }, e.image.url)
                            }, e.order + "_" + i))]
                        })
                    }), 

                    // (0, s.jsx)("section", {
                    //     className: "work_detail wd4",
                    //     tabIndex: "3",
                    //     children: (0,
                    //     s.jsxs)("div", {
                    //         className: "next_pr_section",
                    //         onClick: ()=>{
                    //             A(q),
                    //             (0, g.i)("/work/" + E.id, N, _),
                    //             setTimeout( ()=>{ _ && _.scrollTo(0, !1) } , 600)
                    //         },
                            // children: [(0, s.jsx)("div", {
                            //     className: "next_subtitle",
                            //     children: "Next Project"
                            // }), E.data && (0, s.jsx)("button", {
                            //     className: "next_title",
                            //     children: E.data.pr_title
                            // })]
                    //     })
                    // })
                        , 
                        // console.log(P.data.images[0].image.url[6])
                        (0, s.jsx)(c.Z, {}), (0, s.jsx)("div", { className: "work_detail wd5" })
                    ]
                    })]
                }), f && (0,
                s.jsx)(x.Z, {
                    scroller: _,
                    workItems: t
                })]
            })
        }
    }
},

function(e) {
    e.O(0, [737, 689, 748, 873, 774, 888, 179], function() {
        return e(e.s = 7775)
    }),
    _N_E = e.O()
}

]);
