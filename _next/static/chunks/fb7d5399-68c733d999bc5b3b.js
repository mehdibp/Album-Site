"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[737], {
    9477: function(e, t, i) {
        let n;
        i.d(t, {
            CP7: function() {
                return nZ
            },
            FM8: function() {
                return v
            },
            Ilk: function() {
                return D
            },
            Kj0: function() {
                return ty
            },
            SUY: function() {
                return r8
            },
            _12: function() {
                return tG
            },
            a$l: function() {
                return e8
            },
            cPb: function() {
                return tL
            },
            dd2: function() {
                return B
            },
            dpR: function() {
                return r7
            },
            iKG: function() {
                return t$
            },
            jyz: function() {
                return tA
            },
            nls: function() {
                return nQ
            },
            rDY: function() {
                return tE
            },
            u9r: function() {
                return ts
            },
            xEZ: function() {
                return U
            },
            xsS: function() {
                return nK
            }
        });
        let r = "srgb"
          , a = "srgb-linear"
          , s = "300 es";
        class o {
            addEventListener(e, t) {
                void 0 === this._listeners && (this._listeners = {});
                let i = this._listeners;
                void 0 === i[e] && (i[e] = []),
                -1 === i[e].indexOf(t) && i[e].push(t)
            }
            hasEventListener(e, t) {
                if (void 0 === this._listeners)
                    return !1;
                let i = this._listeners;
                return void 0 !== i[e] && -1 !== i[e].indexOf(t)
            }
            removeEventListener(e, t) {
                if (void 0 === this._listeners)
                    return;
                let i = this._listeners
                  , n = i[e];
                if (void 0 !== n) {
                    let e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1)
                }
            }
            dispatchEvent(e) {
                if (void 0 === this._listeners)
                    return;
                let t = this._listeners
                  , i = t[e.type];
                if (void 0 !== i) {
                    e.target = this;
                    let t = i.slice(0);
                    for (let i = 0, n = t.length; i < n; i++)
                        t[i].call(this, e);
                    e.target = null
                }
            }
        }
        let l = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"]
          , h = Math.PI / 180
          , u = 180 / Math.PI;
        function c() {
            let e = 4294967295 * Math.random() | 0
              , t = 4294967295 * Math.random() | 0
              , i = 4294967295 * Math.random() | 0
              , n = 4294967295 * Math.random() | 0
              , r = l[255 & e] + l[e >> 8 & 255] + l[e >> 16 & 255] + l[e >> 24 & 255] + "-" + l[255 & t] + l[t >> 8 & 255] + "-" + l[t >> 16 & 15 | 64] + l[t >> 24 & 255] + "-" + l[63 & i | 128] + l[i >> 8 & 255] + "-" + l[i >> 16 & 255] + l[i >> 24 & 255] + l[255 & n] + l[n >> 8 & 255] + l[n >> 16 & 255] + l[n >> 24 & 255];
            return r.toLowerCase()
        }
        function d(e, t, i) {
            return Math.max(t, Math.min(i, e))
        }
        function p(e) {
            return (e & e - 1) == 0 && 0 !== e
        }
        function f(e) {
            return Math.pow(2, Math.floor(Math.log(e) / Math.LN2))
        }
        function m(e, t) {
            switch (t.constructor) {
            case Float32Array:
                return e;
            case Uint16Array:
                return e / 65535;
            case Uint8Array:
                return e / 255;
            case Int16Array:
                return Math.max(e / 32767, -1);
            case Int8Array:
                return Math.max(e / 127, -1);
            default:
                throw Error("Invalid component type.")
            }
        }
        function g(e, t) {
            switch (t.constructor) {
            case Float32Array:
                return e;
            case Uint16Array:
                return Math.round(65535 * e);
            case Uint8Array:
                return Math.round(255 * e);
            case Int16Array:
                return Math.round(32767 * e);
            case Int8Array:
                return Math.round(127 * e);
            default:
                throw Error("Invalid component type.")
            }
        }
        class v {
            constructor(e=0, t=0) {
                v.prototype.isVector2 = !0,
                this.x = e,
                this.y = t
            }
            get width() {
                return this.x
            }
            set width(e) {
                this.x = e
            }
            get height() {
                return this.y
            }
            set height(e) {
                this.y = e
            }
            set(e, t) {
                return this.x = e,
                this.y = t,
                this
            }
            setScalar(e) {
                return this.x = e,
                this.y = e,
                this
            }
            setX(e) {
                return this.x = e,
                this
            }
            setY(e) {
                return this.y = e,
                this
            }
            setComponent(e, t) {
                switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                default:
                    throw Error("index is out of range: " + e)
                }
                return this
            }
            getComponent(e) {
                switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw Error("index is out of range: " + e)
                }
            }
            clone() {
                return new this.constructor(this.x,this.y)
            }
            copy(e) {
                return this.x = e.x,
                this.y = e.y,
                this
            }
            add(e) {
                return this.x += e.x,
                this.y += e.y,
                this
            }
            addScalar(e) {
                return this.x += e,
                this.y += e,
                this
            }
            addVectors(e, t) {
                return this.x = e.x + t.x,
                this.y = e.y + t.y,
                this
            }
            addScaledVector(e, t) {
                return this.x += e.x * t,
                this.y += e.y * t,
                this
            }
            sub(e) {
                return this.x -= e.x,
                this.y -= e.y,
                this
            }
            subScalar(e) {
                return this.x -= e,
                this.y -= e,
                this
            }
            subVectors(e, t) {
                return this.x = e.x - t.x,
                this.y = e.y - t.y,
                this
            }
            multiply(e) {
                return this.x *= e.x,
                this.y *= e.y,
                this
            }
            multiplyScalar(e) {
                return this.x *= e,
                this.y *= e,
                this
            }
            divide(e) {
                return this.x /= e.x,
                this.y /= e.y,
                this
            }
            divideScalar(e) {
                return this.multiplyScalar(1 / e)
            }
            applyMatrix3(e) {
                let t = this.x
                  , i = this.y
                  , n = e.elements;
                return this.x = n[0] * t + n[3] * i + n[6],
                this.y = n[1] * t + n[4] * i + n[7],
                this
            }
            min(e) {
                return this.x = Math.min(this.x, e.x),
                this.y = Math.min(this.y, e.y),
                this
            }
            max(e) {
                return this.x = Math.max(this.x, e.x),
                this.y = Math.max(this.y, e.y),
                this
            }
            clamp(e, t) {
                return this.x = Math.max(e.x, Math.min(t.x, this.x)),
                this.y = Math.max(e.y, Math.min(t.y, this.y)),
                this
            }
            clampScalar(e, t) {
                return this.x = Math.max(e, Math.min(t, this.x)),
                this.y = Math.max(e, Math.min(t, this.y)),
                this
            }
            clampLength(e, t) {
                let i = this.length();
                return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)))
            }
            floor() {
                return this.x = Math.floor(this.x),
                this.y = Math.floor(this.y),
                this
            }
            ceil() {
                return this.x = Math.ceil(this.x),
                this.y = Math.ceil(this.y),
                this
            }
            round() {
                return this.x = Math.round(this.x),
                this.y = Math.round(this.y),
                this
            }
            roundToZero() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
                this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
                this
            }
            negate() {
                return this.x = -this.x,
                this.y = -this.y,
                this
            }
            dot(e) {
                return this.x * e.x + this.y * e.y
            }
            cross(e) {
                return this.x * e.y - this.y * e.x
            }
            lengthSq() {
                return this.x * this.x + this.y * this.y
            }
            length() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }
            manhattanLength() {
                return Math.abs(this.x) + Math.abs(this.y)
            }
            normalize() {
                return this.divideScalar(this.length() || 1)
            }
            angle() {
                let e = Math.atan2(-this.y, -this.x) + Math.PI;
                return e
            }
            distanceTo(e) {
                return Math.sqrt(this.distanceToSquared(e))
            }
            distanceToSquared(e) {
                let t = this.x - e.x
                  , i = this.y - e.y;
                return t * t + i * i
            }
            manhattanDistanceTo(e) {
                return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
            }
            setLength(e) {
                return this.normalize().multiplyScalar(e)
            }
            lerp(e, t) {
                return this.x += (e.x - this.x) * t,
                this.y += (e.y - this.y) * t,
                this
            }
            lerpVectors(e, t, i) {
                return this.x = e.x + (t.x - e.x) * i,
                this.y = e.y + (t.y - e.y) * i,
                this
            }
            equals(e) {
                return e.x === this.x && e.y === this.y
            }
            fromArray(e, t=0) {
                return this.x = e[t],
                this.y = e[t + 1],
                this
            }
            toArray(e=[], t=0) {
                return e[t] = this.x,
                e[t + 1] = this.y,
                e
            }
            fromBufferAttribute(e, t) {
                return this.x = e.getX(t),
                this.y = e.getY(t),
                this
            }
            rotateAround(e, t) {
                let i = Math.cos(t)
                  , n = Math.sin(t)
                  , r = this.x - e.x
                  , a = this.y - e.y;
                return this.x = r * i - a * n + e.x,
                this.y = r * n + a * i + e.y,
                this
            }
            random() {
                return this.x = Math.random(),
                this.y = Math.random(),
                this
            }
            *[Symbol.iterator]() {
                yield this.x,
                yield this.y
            }
        }
        class _ {
            constructor() {
                _.prototype.isMatrix3 = !0,
                this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]
            }
            set(e, t, i, n, r, a, s, o, l) {
                let h = this.elements;
                return h[0] = e,
                h[1] = n,
                h[2] = s,
                h[3] = t,
                h[4] = r,
                h[5] = o,
                h[6] = i,
                h[7] = a,
                h[8] = l,
                this
            }
            identity() {
                return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
                this
            }
            copy(e) {
                let t = this.elements
                  , i = e.elements;
                return t[0] = i[0],
                t[1] = i[1],
                t[2] = i[2],
                t[3] = i[3],
                t[4] = i[4],
                t[5] = i[5],
                t[6] = i[6],
                t[7] = i[7],
                t[8] = i[8],
                this
            }
            extractBasis(e, t, i) {
                return e.setFromMatrix3Column(this, 0),
                t.setFromMatrix3Column(this, 1),
                i.setFromMatrix3Column(this, 2),
                this
            }
            setFromMatrix4(e) {
                let t = e.elements;
                return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
                this
            }
            multiply(e) {
                return this.multiplyMatrices(this, e)
            }
            premultiply(e) {
                return this.multiplyMatrices(e, this)
            }
            multiplyMatrices(e, t) {
                let i = e.elements
                  , n = t.elements
                  , r = this.elements
                  , a = i[0]
                  , s = i[3]
                  , o = i[6]
                  , l = i[1]
                  , h = i[4]
                  , u = i[7]
                  , c = i[2]
                  , d = i[5]
                  , p = i[8]
                  , f = n[0]
                  , m = n[3]
                  , g = n[6]
                  , v = n[1]
                  , _ = n[4]
                  , x = n[7]
                  , y = n[2]
                  , M = n[5]
                  , S = n[8];
                return r[0] = a * f + s * v + o * y,
                r[3] = a * m + s * _ + o * M,
                r[6] = a * g + s * x + o * S,
                r[1] = l * f + h * v + u * y,
                r[4] = l * m + h * _ + u * M,
                r[7] = l * g + h * x + u * S,
                r[2] = c * f + d * v + p * y,
                r[5] = c * m + d * _ + p * M,
                r[8] = c * g + d * x + p * S,
                this
            }
            multiplyScalar(e) {
                let t = this.elements;
                return t[0] *= e,
                t[3] *= e,
                t[6] *= e,
                t[1] *= e,
                t[4] *= e,
                t[7] *= e,
                t[2] *= e,
                t[5] *= e,
                t[8] *= e,
                this
            }
            determinant() {
                let e = this.elements
                  , t = e[0]
                  , i = e[1]
                  , n = e[2]
                  , r = e[3]
                  , a = e[4]
                  , s = e[5]
                  , o = e[6]
                  , l = e[7]
                  , h = e[8];
                return t * a * h - t * s * l - i * r * h + i * s * o + n * r * l - n * a * o
            }
            invert() {
                let e = this.elements
                  , t = e[0]
                  , i = e[1]
                  , n = e[2]
                  , r = e[3]
                  , a = e[4]
                  , s = e[5]
                  , o = e[6]
                  , l = e[7]
                  , h = e[8]
                  , u = h * a - s * l
                  , c = s * o - h * r
                  , d = l * r - a * o
                  , p = t * u + i * c + n * d;
                if (0 === p)
                    return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
                let f = 1 / p;
                return e[0] = u * f,
                e[1] = (n * l - h * i) * f,
                e[2] = (s * i - n * a) * f,
                e[3] = c * f,
                e[4] = (h * t - n * o) * f,
                e[5] = (n * r - s * t) * f,
                e[6] = d * f,
                e[7] = (i * o - l * t) * f,
                e[8] = (a * t - i * r) * f,
                this
            }
            transpose() {
                let e;
                let t = this.elements;
                return e = t[1],
                t[1] = t[3],
                t[3] = e,
                e = t[2],
                t[2] = t[6],
                t[6] = e,
                e = t[5],
                t[5] = t[7],
                t[7] = e,
                this
            }
            getNormalMatrix(e) {
                return this.setFromMatrix4(e).invert().transpose()
            }
            transposeIntoArray(e) {
                let t = this.elements;
                return e[0] = t[0],
                e[1] = t[3],
                e[2] = t[6],
                e[3] = t[1],
                e[4] = t[4],
                e[5] = t[7],
                e[6] = t[2],
                e[7] = t[5],
                e[8] = t[8],
                this
            }
            setUvTransform(e, t, i, n, r, a, s) {
                let o = Math.cos(r)
                  , l = Math.sin(r);
                return this.set(i * o, i * l, -i * (o * a + l * s) + a + e, -n * l, n * o, -n * (-l * a + o * s) + s + t, 0, 0, 1),
                this
            }
            scale(e, t) {
                return this.premultiply(x.makeScale(e, t)),
                this
            }
            rotate(e) {
                return this.premultiply(x.makeRotation(-e)),
                this
            }
            translate(e, t) {
                return this.premultiply(x.makeTranslation(e, t)),
                this
            }
            makeTranslation(e, t) {
                return this.set(1, 0, e, 0, 1, t, 0, 0, 1),
                this
            }
            makeRotation(e) {
                let t = Math.cos(e)
                  , i = Math.sin(e);
                return this.set(t, -i, 0, i, t, 0, 0, 0, 1),
                this
            }
            makeScale(e, t) {
                return this.set(e, 0, 0, 0, t, 0, 0, 0, 1),
                this
            }
            equals(e) {
                let t = this.elements
                  , i = e.elements;
                for (let e = 0; e < 9; e++)
                    if (t[e] !== i[e])
                        return !1;
                return !0
            }
            fromArray(e, t=0) {
                for (let i = 0; i < 9; i++)
                    this.elements[i] = e[i + t];
                return this
            }
            toArray(e=[], t=0) {
                let i = this.elements;
                return e[t] = i[0],
                e[t + 1] = i[1],
                e[t + 2] = i[2],
                e[t + 3] = i[3],
                e[t + 4] = i[4],
                e[t + 5] = i[5],
                e[t + 6] = i[6],
                e[t + 7] = i[7],
                e[t + 8] = i[8],
                e
            }
            clone() {
                return new this.constructor().fromArray(this.elements)
            }
        }
        let x = new _;
        function y(e) {
            for (let t = e.length - 1; t >= 0; --t)
                if (e[t] >= 65535)
                    return !0;
            return !1
        }
        function M(e) {
            return document.createElementNS("http://www.w3.org/1999/xhtml", e)
        }
        function S(e) {
            return e < .04045 ? .0773993808 * e : Math.pow(.9478672986 * e + .0521327014, 2.4)
        }
        function b(e) {
            return e < .0031308 ? 12.92 * e : 1.055 * Math.pow(e, .41666) - .055
        }
        Int8Array,
        Uint8Array,
        Uint8ClampedArray,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array;
        let w = {
            [r]: {
                [a]: S
            },
            [a]: {
                [r]: b
            }
        }
          , T = {
            legacyMode: !0,
            get workingColorSpace() {
                return a
            },
            set workingColorSpace(colorSpace) {
                console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")
            },
            convert: function(e, t, i) {
                if (this.legacyMode || t === i || !t || !i)
                    return e;
                if (w[t] && void 0 !== w[t][i]) {
                    let n = w[t][i];
                    return e.r = n(e.r),
                    e.g = n(e.g),
                    e.b = n(e.b),
                    e
                }
                throw Error("Unsupported color space conversion.")
            },
            fromWorkingColorSpace: function(e, t) {
                return this.convert(e, this.workingColorSpace, t)
            },
            toWorkingColorSpace: function(e, t) {
                return this.convert(e, t, this.workingColorSpace)
            }
        }
          , E = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        }
          , A = {
            r: 0,
            g: 0,
            b: 0
        }
          , C = {
            h: 0,
            s: 0,
            l: 0
        }
          , L = {
            h: 0,
            s: 0,
            l: 0
        };
        function P(e, t, i) {
            return (i < 0 && (i += 1),
            i > 1 && (i -= 1),
            i < 1 / 6) ? e + (t - e) * 6 * i : i < .5 ? t : i < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - i) : e
        }
        function R(e, t) {
            return t.r = e.r,
            t.g = e.g,
            t.b = e.b,
            t
        }
        class D {
            constructor(e, t, i) {
                if (this.isColor = !0,
                this.r = 1,
                this.g = 1,
                this.b = 1,
                void 0 === t && void 0 === i)
                    return this.set(e);
                return this.setRGB(e, t, i)
            }
            set(e) {
                return e && e.isColor ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e),
                this
            }
            setScalar(e) {
                return this.r = e,
                this.g = e,
                this.b = e,
                this
            }
            setHex(e, t=r) {
                return e = Math.floor(e),
                this.r = (e >> 16 & 255) / 255,
                this.g = (e >> 8 & 255) / 255,
                this.b = (255 & e) / 255,
                T.toWorkingColorSpace(this, t),
                this
            }
            setRGB(e, t, i, n=T.workingColorSpace) {
                return this.r = e,
                this.g = t,
                this.b = i,
                T.toWorkingColorSpace(this, n),
                this
            }
            setHSL(e, t, i, n=T.workingColorSpace) {
                if (e = (e % 1 + 1) % 1,
                t = d(t, 0, 1),
                i = d(i, 0, 1),
                0 === t)
                    this.r = this.g = this.b = i;
                else {
                    let n = i <= .5 ? i * (1 + t) : i + t - i * t
                      , r = 2 * i - n;
                    this.r = P(r, n, e + 1 / 3),
                    this.g = P(r, n, e),
                    this.b = P(r, n, e - 1 / 3)
                }
                return T.toWorkingColorSpace(this, n),
                this
            }
            setStyle(e, t=r) {
                let i;
                function n(t) {
                    void 0 !== t && 1 > parseFloat(t) && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
                }
                if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
                    let e;
                    let r = i[1]
                      , a = i[2];
                    switch (r) {
                    case "rgb":
                    case "rgba":
                        if (e = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
                            return this.r = Math.min(255, parseInt(e[1], 10)) / 255,
                            this.g = Math.min(255, parseInt(e[2], 10)) / 255,
                            this.b = Math.min(255, parseInt(e[3], 10)) / 255,
                            T.toWorkingColorSpace(this, t),
                            n(e[4]),
                            this;
                        if (e = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
                            return this.r = Math.min(100, parseInt(e[1], 10)) / 100,
                            this.g = Math.min(100, parseInt(e[2], 10)) / 100,
                            this.b = Math.min(100, parseInt(e[3], 10)) / 100,
                            T.toWorkingColorSpace(this, t),
                            n(e[4]),
                            this;
                        break;
                    case "hsl":
                    case "hsla":
                        if (e = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
                            let i = parseFloat(e[1]) / 360
                              , r = parseFloat(e[2]) / 100
                              , a = parseFloat(e[3]) / 100;
                            return n(e[4]),
                            this.setHSL(i, r, a, t)
                        }
                    }
                } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
                    let e = i[1]
                      , n = e.length;
                    if (3 === n)
                        return this.r = parseInt(e.charAt(0) + e.charAt(0), 16) / 255,
                        this.g = parseInt(e.charAt(1) + e.charAt(1), 16) / 255,
                        this.b = parseInt(e.charAt(2) + e.charAt(2), 16) / 255,
                        T.toWorkingColorSpace(this, t),
                        this;
                    if (6 === n)
                        return this.r = parseInt(e.charAt(0) + e.charAt(1), 16) / 255,
                        this.g = parseInt(e.charAt(2) + e.charAt(3), 16) / 255,
                        this.b = parseInt(e.charAt(4) + e.charAt(5), 16) / 255,
                        T.toWorkingColorSpace(this, t),
                        this
                }
                return e && e.length > 0 ? this.setColorName(e, t) : this
            }
            setColorName(e, t=r) {
                let i = E[e.toLowerCase()];
                return void 0 !== i ? this.setHex(i, t) : console.warn("THREE.Color: Unknown color " + e),
                this
            }
            clone() {
                return new this.constructor(this.r,this.g,this.b)
            }
            copy(e) {
                return this.r = e.r,
                this.g = e.g,
                this.b = e.b,
                this
            }
            copySRGBToLinear(e) {
                return this.r = S(e.r),
                this.g = S(e.g),
                this.b = S(e.b),
                this
            }
            copyLinearToSRGB(e) {
                return this.r = b(e.r),
                this.g = b(e.g),
                this.b = b(e.b),
                this
            }
            convertSRGBToLinear() {
                return this.copySRGBToLinear(this),
                this
            }
            convertLinearToSRGB() {
                return this.copyLinearToSRGB(this),
                this
            }
            getHex(e=r) {
                return T.fromWorkingColorSpace(R(this, A), e),
                d(255 * A.r, 0, 255) << 16 ^ d(255 * A.g, 0, 255) << 8 ^ d(255 * A.b, 0, 255) << 0
            }
            getHexString(e=r) {
                return ("000000" + this.getHex(e).toString(16)).slice(-6)
            }
            getHSL(e, t=T.workingColorSpace) {
                let i, n;
                T.fromWorkingColorSpace(R(this, A), t);
                let r = A.r
                  , a = A.g
                  , s = A.b
                  , o = Math.max(r, a, s)
                  , l = Math.min(r, a, s)
                  , h = (l + o) / 2;
                if (l === o)
                    i = 0,
                    n = 0;
                else {
                    let e = o - l;
                    switch (n = h <= .5 ? e / (o + l) : e / (2 - o - l),
                    o) {
                    case r:
                        i = (a - s) / e + (a < s ? 6 : 0);
                        break;
                    case a:
                        i = (s - r) / e + 2;
                        break;
                    case s:
                        i = (r - a) / e + 4
                    }
                    i /= 6
                }
                return e.h = i,
                e.s = n,
                e.l = h,
                e
            }
            getRGB(e, t=T.workingColorSpace) {
                return T.fromWorkingColorSpace(R(this, A), t),
                e.r = A.r,
                e.g = A.g,
                e.b = A.b,
                e
            }
            getStyle(e=r) {
                return (T.fromWorkingColorSpace(R(this, A), e),
                e !== r) ? `color(${e} ${A.r} ${A.g} ${A.b})` : `rgb(${255 * A.r | 0},${255 * A.g | 0},${255 * A.b | 0})`
            }
            offsetHSL(e, t, i) {
                return this.getHSL(C),
                C.h += e,
                C.s += t,
                C.l += i,
                this.setHSL(C.h, C.s, C.l),
                this
            }
            add(e) {
                return this.r += e.r,
                this.g += e.g,
                this.b += e.b,
                this
            }
            addColors(e, t) {
                return this.r = e.r + t.r,
                this.g = e.g + t.g,
                this.b = e.b + t.b,
                this
            }
            addScalar(e) {
                return this.r += e,
                this.g += e,
                this.b += e,
                this
            }
            sub(e) {
                return this.r = Math.max(0, this.r - e.r),
                this.g = Math.max(0, this.g - e.g),
                this.b = Math.max(0, this.b - e.b),
                this
            }
            multiply(e) {
                return this.r *= e.r,
                this.g *= e.g,
                this.b *= e.b,
                this
            }
            multiplyScalar(e) {
                return this.r *= e,
                this.g *= e,
                this.b *= e,
                this
            }
            lerp(e, t) {
                return this.r += (e.r - this.r) * t,
                this.g += (e.g - this.g) * t,
                this.b += (e.b - this.b) * t,
                this
            }
            lerpColors(e, t, i) {
                return this.r = e.r + (t.r - e.r) * i,
                this.g = e.g + (t.g - e.g) * i,
                this.b = e.b + (t.b - e.b) * i,
                this
            }
            lerpHSL(e, t) {
                this.getHSL(C),
                e.getHSL(L);
                let i = (1 - t) * C.h + t * L.h
                  , n = (1 - t) * C.s + t * L.s
                  , r = (1 - t) * C.l + t * L.l;
                return this.setHSL(i, n, r),
                this
            }
            equals(e) {
                return e.r === this.r && e.g === this.g && e.b === this.b
            }
            fromArray(e, t=0) {
                return this.r = e[t],
                this.g = e[t + 1],
                this.b = e[t + 2],
                this
            }
            toArray(e=[], t=0) {
                return e[t] = this.r,
                e[t + 1] = this.g,
                e[t + 2] = this.b,
                e
            }
            fromBufferAttribute(e, t) {
                return this.r = e.getX(t),
                this.g = e.getY(t),
                this.b = e.getZ(t),
                this
            }
            toJSON() {
                return this.getHex()
            }
            *[Symbol.iterator]() {
                yield this.r,
                yield this.g,
                yield this.b
            }
        }
        D.NAMES = E;
        class I {
            static getDataURL(e) {
                let t;
                if (/^data:/i.test(e.src) || "undefined" == typeof HTMLCanvasElement)
                    return e.src;
                if (e instanceof HTMLCanvasElement)
                    t = e;
                else {
                    void 0 === n && (n = M("canvas")),
                    n.width = e.width,
                    n.height = e.height;
                    let i = n.getContext("2d");
                    e instanceof ImageData ? i.putImageData(e, 0, 0) : i.drawImage(e, 0, 0, e.width, e.height),
                    t = n
                }
                return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e),
                t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png")
            }
            static sRGBToLinear(e) {
                if ("undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap) {
                    let t = M("canvas");
                    t.width = e.width,
                    t.height = e.height;
                    let i = t.getContext("2d");
                    i.drawImage(e, 0, 0, e.width, e.height);
                    let n = i.getImageData(0, 0, e.width, e.height)
                      , r = n.data;
                    for (let e = 0; e < r.length; e++)
                        r[e] = 255 * S(r[e] / 255);
                    return i.putImageData(n, 0, 0),
                    t
                }
                if (!e.data)
                    return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),
                    e;
                {
                    let t = e.data.slice(0);
                    for (let e = 0; e < t.length; e++)
                        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[e] = Math.floor(255 * S(t[e] / 255)) : t[e] = S(t[e]);
                    return {
                        data: t,
                        width: e.width,
                        height: e.height
                    }
                }
            }
        }
        class N {
            constructor(e=null) {
                this.isSource = !0,
                this.uuid = c(),
                this.data = e,
                this.version = 0
            }
            set needsUpdate(e) {
                !0 === e && this.version++
            }
            toJSON(e) {
                let t = void 0 === e || "string" == typeof e;
                if (!t && void 0 !== e.images[this.uuid])
                    return e.images[this.uuid];
                let i = {
                    uuid: this.uuid,
                    url: ""
                }
                  , n = this.data;
                if (null !== n) {
                    let e;
                    if (Array.isArray(n)) {
                        e = [];
                        for (let t = 0, i = n.length; t < i; t++)
                            n[t].isDataTexture ? e.push(O(n[t].image)) : e.push(O(n[t]))
                    } else
                        e = O(n);
                    i.url = e
                }
                return t || (e.images[this.uuid] = i),
                i
            }
        }
        function O(e) {
            return "undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap ? I.getDataURL(e) : e.data ? {
                data: Array.from(e.data),
                width: e.width,
                height: e.height,
                type: e.data.constructor.name
            } : (console.warn("THREE.Texture: Unable to serialize Texture."),
            {})
        }
        let z = 0;
        class U extends o {
            constructor(e=U.DEFAULT_IMAGE, t=U.DEFAULT_MAPPING, i=1001, n=1001, r=1006, a=1008, s=1023, o=1009, l=U.DEFAULT_ANISOTROPY, h=3e3) {
                super(),
                this.isTexture = !0,
                Object.defineProperty(this, "id", {
                    value: z++
                }),
                this.uuid = c(),
                this.name = "",
                this.source = new N(e),
                this.mipmaps = [],
                this.mapping = t,
                this.wrapS = i,
                this.wrapT = n,
                this.magFilter = r,
                this.minFilter = a,
                this.anisotropy = l,
                this.format = s,
                this.internalFormat = null,
                this.type = o,
                this.offset = new v(0,0),
                this.repeat = new v(1,1),
                this.center = new v(0,0),
                this.rotation = 0,
                this.matrixAutoUpdate = !0,
                this.matrix = new _,
                this.generateMipmaps = !0,
                this.premultiplyAlpha = !1,
                this.flipY = !0,
                this.unpackAlignment = 4,
                this.encoding = h,
                this.userData = {},
                this.version = 0,
                this.onUpdate = null,
                this.isRenderTargetTexture = !1,
                this.needsPMREMUpdate = !1
            }
            get image() {
                return this.source.data
            }
            set image(e) {
                this.source.data = e
            }
            updateMatrix() {
                this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
            }
            clone() {
                return new this.constructor().copy(this)
            }
            copy(e) {
                return this.name = e.name,
                this.source = e.source,
                this.mipmaps = e.mipmaps.slice(0),
                this.mapping = e.mapping,
                this.wrapS = e.wrapS,
                this.wrapT = e.wrapT,
                this.magFilter = e.magFilter,
                this.minFilter = e.minFilter,
                this.anisotropy = e.anisotropy,
                this.format = e.format,
                this.internalFormat = e.internalFormat,
                this.type = e.type,
                this.offset.copy(e.offset),
                this.repeat.copy(e.repeat),
                this.center.copy(e.center),
                this.rotation = e.rotation,
                this.matrixAutoUpdate = e.matrixAutoUpdate,
                this.matrix.copy(e.matrix),
                this.generateMipmaps = e.generateMipmaps,
                this.premultiplyAlpha = e.premultiplyAlpha,
                this.flipY = e.flipY,
                this.unpackAlignment = e.unpackAlignment,
                this.encoding = e.encoding,
                this.userData = JSON.parse(JSON.stringify(e.userData)),
                this.needsUpdate = !0,
                this
            }
            toJSON(e) {
                let t = void 0 === e || "string" == typeof e;
                if (!t && void 0 !== e.textures[this.uuid])
                    return e.textures[this.uuid];
                let i = {
                    metadata: {
                        version: 4.5,
                        type: "Texture",
                        generator: "Texture.toJSON"
                    },
                    uuid: this.uuid,
                    name: this.name,
                    image: this.source.toJSON(e).uuid,
                    mapping: this.mapping,
                    repeat: [this.repeat.x, this.repeat.y],
                    offset: [this.offset.x, this.offset.y],
                    center: [this.center.x, this.center.y],
                    rotation: this.rotation,
                    wrap: [this.wrapS, this.wrapT],
                    format: this.format,
                    type: this.type,
                    encoding: this.encoding,
                    minFilter: this.minFilter,
                    magFilter: this.magFilter,
                    anisotropy: this.anisotropy,
                    flipY: this.flipY,
                    generateMipmaps: this.generateMipmaps,
                    premultiplyAlpha: this.premultiplyAlpha,
                    unpackAlignment: this.unpackAlignment
                };
                return Object.keys(this.userData).length > 0 && (i.userData = this.userData),
                t || (e.textures[this.uuid] = i),
                i
            }
            dispose() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
            transformUv(e) {
                if (300 !== this.mapping)
                    return e;
                if (e.applyMatrix3(this.matrix),
                e.x < 0 || e.x > 1)
                    switch (this.wrapS) {
                    case 1e3:
                        e.x = e.x - Math.floor(e.x);
                        break;
                    case 1001:
                        e.x = e.x < 0 ? 0 : 1;
                        break;
                    case 1002:
                        1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
                    }
                if (e.y < 0 || e.y > 1)
                    switch (this.wrapT) {
                    case 1e3:
                        e.y = e.y - Math.floor(e.y);
                        break;
                    case 1001:
                        e.y = e.y < 0 ? 0 : 1;
                        break;
                    case 1002:
                        1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
                    }
                return this.flipY && (e.y = 1 - e.y),
                e
            }
            set needsUpdate(e) {
                !0 === e && (this.version++,
                this.source.needsUpdate = !0)
            }
        }
        U.DEFAULT_IMAGE = null,
        U.DEFAULT_MAPPING = 300,
        U.DEFAULT_ANISOTROPY = 1;
        class F {
            constructor(e=0, t=0, i=0, n=1) {
                F.prototype.isVector4 = !0,
                this.x = e,
                this.y = t,
                this.z = i,
                this.w = n
            }
            get width() {
                return this.z
            }
            set width(e) {
                this.z = e
            }
            get height() {
                return this.w
            }
            set height(e) {
                this.w = e
            }
            set(e, t, i, n) {
                return this.x = e,
                this.y = t,
                this.z = i,
                this.w = n,
                this
            }
            setScalar(e) {
                return this.x = e,
                this.y = e,
                this.z = e,
                this.w = e,
                this
            }
            setX(e) {
                return this.x = e,
                this
            }
            setY(e) {
                return this.y = e,
                this
            }
            setZ(e) {
                return this.z = e,
                this
            }
            setW(e) {
                return this.w = e,
                this
            }
            setComponent(e, t) {
                switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                case 2:
                    this.z = t;
                    break;
                case 3:
                    this.w = t;
                    break;
                default:
                    throw Error("index is out of range: " + e)
                }
                return this
            }
            getComponent(e) {
                switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw Error("index is out of range: " + e)
                }
            }
            clone() {
                return new this.constructor(this.x,this.y,this.z,this.w)
            }
            copy(e) {
                return this.x = e.x,
                this.y = e.y,
                this.z = e.z,
                this.w = void 0 !== e.w ? e.w : 1,
                this
            }
            add(e) {
                return this.x += e.x,
                this.y += e.y,
                this.z += e.z,
                this.w += e.w,
                this
            }
            addScalar(e) {
                return this.x += e,
                this.y += e,
                this.z += e,
                this.w += e,
                this
            }
            addVectors(e, t) {
                return this.x = e.x + t.x,
                this.y = e.y + t.y,
                this.z = e.z + t.z,
                this.w = e.w + t.w,
                this
            }
            addScaledVector(e, t) {
                return this.x += e.x * t,
                this.y += e.y * t,
                this.z += e.z * t,
                this.w += e.w * t,
                this
            }
            sub(e) {
                return this.x -= e.x,
                this.y -= e.y,
                this.z -= e.z,
                this.w -= e.w,
                this
            }
            subScalar(e) {
                return this.x -= e,
                this.y -= e,
                this.z -= e,
                this.w -= e,
                this
            }
            subVectors(e, t) {
                return this.x = e.x - t.x,
                this.y = e.y - t.y,
                this.z = e.z - t.z,
                this.w = e.w - t.w,
                this
            }
            multiply(e) {
                return this.x *= e.x,
                this.y *= e.y,
                this.z *= e.z,
                this.w *= e.w,
                this
            }
            multiplyScalar(e) {
                return this.x *= e,
                this.y *= e,
                this.z *= e,
                this.w *= e,
                this
            }
            applyMatrix4(e) {
                let t = this.x
                  , i = this.y
                  , n = this.z
                  , r = this.w
                  , a = e.elements;
                return this.x = a[0] * t + a[4] * i + a[8] * n + a[12] * r,
                this.y = a[1] * t + a[5] * i + a[9] * n + a[13] * r,
                this.z = a[2] * t + a[6] * i + a[10] * n + a[14] * r,
                this.w = a[3] * t + a[7] * i + a[11] * n + a[15] * r,
                this
            }
            divideScalar(e) {
                return this.multiplyScalar(1 / e)
            }
            setAxisAngleFromQuaternion(e) {
                this.w = 2 * Math.acos(e.w);
                let t = Math.sqrt(1 - e.w * e.w);
                return t < 1e-4 ? (this.x = 1,
                this.y = 0,
                this.z = 0) : (this.x = e.x / t,
                this.y = e.y / t,
                this.z = e.z / t),
                this
            }
            setAxisAngleFromRotationMatrix(e) {
                let t, i, n;
                let r = e.elements
                  , a = r[0]
                  , s = r[4]
                  , o = r[8]
                  , l = r[1]
                  , h = r[5]
                  , u = r[9]
                  , c = r[2]
                  , d = r[6]
                  , p = r[10];
                if (.01 > Math.abs(s - l) && .01 > Math.abs(o - c) && .01 > Math.abs(u - d)) {
                    if (.1 > Math.abs(s + l) && .1 > Math.abs(o + c) && .1 > Math.abs(u + d) && .1 > Math.abs(a + h + p - 3))
                        return this.set(1, 0, 0, 0),
                        this;
                    let e = (a + 1) / 2
                      , r = (h + 1) / 2
                      , f = (p + 1) / 2
                      , m = (s + l) / 4
                      , g = (o + c) / 4
                      , v = (u + d) / 4;
                    return e > r && e > f ? e < .01 ? (t = 0,
                    i = .707106781,
                    n = .707106781) : (i = m / (t = Math.sqrt(e)),
                    n = g / t) : r > f ? r < .01 ? (t = .707106781,
                    i = 0,
                    n = .707106781) : (t = m / (i = Math.sqrt(r)),
                    n = v / i) : f < .01 ? (t = .707106781,
                    i = .707106781,
                    n = 0) : (t = g / (n = Math.sqrt(f)),
                    i = v / n),
                    this.set(t, i, n, Math.PI),
                    this
                }
                let f = Math.sqrt((d - u) * (d - u) + (o - c) * (o - c) + (l - s) * (l - s));
                return .001 > Math.abs(f) && (f = 1),
                this.x = (d - u) / f,
                this.y = (o - c) / f,
                this.z = (l - s) / f,
                this.w = Math.acos((a + h + p - 1) / 2),
                this
            }
            min(e) {
                return this.x = Math.min(this.x, e.x),
                this.y = Math.min(this.y, e.y),
                this.z = Math.min(this.z, e.z),
                this.w = Math.min(this.w, e.w),
                this
            }
            max(e) {
                return this.x = Math.max(this.x, e.x),
                this.y = Math.max(this.y, e.y),
                this.z = Math.max(this.z, e.z),
                this.w = Math.max(this.w, e.w),
                this
            }
            clamp(e, t) {
                return this.x = Math.max(e.x, Math.min(t.x, this.x)),
                this.y = Math.max(e.y, Math.min(t.y, this.y)),
                this.z = Math.max(e.z, Math.min(t.z, this.z)),
                this.w = Math.max(e.w, Math.min(t.w, this.w)),
                this
            }
            clampScalar(e, t) {
                return this.x = Math.max(e, Math.min(t, this.x)),
                this.y = Math.max(e, Math.min(t, this.y)),
                this.z = Math.max(e, Math.min(t, this.z)),
                this.w = Math.max(e, Math.min(t, this.w)),
                this
            }
            clampLength(e, t) {
                let i = this.length();
                return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)))
            }
            floor() {
                return this.x = Math.floor(this.x),
                this.y = Math.floor(this.y),
                this.z = Math.floor(this.z),
                this.w = Math.floor(this.w),
                this
            }
            ceil() {
                return this.x = Math.ceil(this.x),
                this.y = Math.ceil(this.y),
                this.z = Math.ceil(this.z),
                this.w = Math.ceil(this.w),
                this
            }
            round() {
                return this.x = Math.round(this.x),
                this.y = Math.round(this.y),
                this.z = Math.round(this.z),
                this.w = Math.round(this.w),
                this
            }
            roundToZero() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
                this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
                this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
                this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
                this
            }
            negate() {
                return this.x = -this.x,
                this.y = -this.y,
                this.z = -this.z,
                this.w = -this.w,
                this
            }
            dot(e) {
                return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
            }
            lengthSq() {
                return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
            }
            length() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
            }
            manhattanLength() {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
            }
            normalize() {
                return this.divideScalar(this.length() || 1)
            }
            setLength(e) {
                return this.normalize().multiplyScalar(e)
            }
            lerp(e, t) {
                return this.x += (e.x - this.x) * t,
                this.y += (e.y - this.y) * t,
                this.z += (e.z - this.z) * t,
                this.w += (e.w - this.w) * t,
                this
            }
            lerpVectors(e, t, i) {
                return this.x = e.x + (t.x - e.x) * i,
                this.y = e.y + (t.y - e.y) * i,
                this.z = e.z + (t.z - e.z) * i,
                this.w = e.w + (t.w - e.w) * i,
                this
            }
            equals(e) {
                return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
            }
            fromArray(e, t=0) {
                return this.x = e[t],
                this.y = e[t + 1],
                this.z = e[t + 2],
                this.w = e[t + 3],
                this
            }
            toArray(e=[], t=0) {
                return e[t] = this.x,
                e[t + 1] = this.y,
                e[t + 2] = this.z,
                e[t + 3] = this.w,
                e
            }
            fromBufferAttribute(e, t) {
                return this.x = e.getX(t),
                this.y = e.getY(t),
                this.z = e.getZ(t),
                this.w = e.getW(t),
                this
            }
            random() {
                return this.x = Math.random(),
                this.y = Math.random(),
                this.z = Math.random(),
                this.w = Math.random(),
                this
            }
            *[Symbol.iterator]() {
                yield this.x,
                yield this.y,
                yield this.z,
                yield this.w
            }
        }
        class B extends o {
            constructor(e=1, t=1, i={}) {
                super(),
                this.isWebGLRenderTarget = !0,
                this.width = e,
                this.height = t,
                this.depth = 1,
                this.scissor = new F(0,0,e,t),
                this.scissorTest = !1,
                this.viewport = new F(0,0,e,t),
                this.texture = new U({
                    width: e,
                    height: t,
                    depth: 1
                },i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),
                this.texture.isRenderTargetTexture = !0,
                this.texture.flipY = !1,
                this.texture.generateMipmaps = void 0 !== i.generateMipmaps && i.generateMipmaps,
                this.texture.internalFormat = void 0 !== i.internalFormat ? i.internalFormat : null,
                this.texture.minFilter = void 0 !== i.minFilter ? i.minFilter : 1006,
                this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer,
                this.stencilBuffer = void 0 !== i.stencilBuffer && i.stencilBuffer,
                this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null,
                this.samples = void 0 !== i.samples ? i.samples : 0
            }
            setSize(e, t, i=1) {
                (this.width !== e || this.height !== t || this.depth !== i) && (this.width = e,
                this.height = t,
                this.depth = i,
                this.texture.image.width = e,
                this.texture.image.height = t,
                this.texture.image.depth = i,
                this.dispose()),
                this.viewport.set(0, 0, e, t),
                this.scissor.set(0, 0, e, t)
            }
            clone() {
                return new this.constructor().copy(this)
            }
            copy(e) {
                this.width = e.width,
                this.height = e.height,
                this.depth = e.depth,
                this.viewport.copy(e.viewport),
                this.texture = e.texture.clone(),
                this.texture.isRenderTargetTexture = !0;
                let t = Object.assign({}, e.texture.image);
                return this.texture.source = new N(t),
                this.depthBuffer = e.depthBuffer,
                this.stencilBuffer = e.stencilBuffer,
                null !== e.depthTexture && (this.depthTexture = e.depthTexture.clone()),
                this.samples = e.samples,
                this
            }
            dispose() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }
        class V extends U {
            constructor(e=null, t=1, i=1, n=1) {
                super(null),
                this.isDataArrayTexture = !0,
                this.image = {
                    data: e,
                    width: t,
                    height: i,
                    depth: n
                },
                this.magFilter = 1003,
                this.minFilter = 1003,
                this.wrapR = 1001,
                this.generateMipmaps = !1,
                this.flipY = !1,
                this.unpackAlignment = 1
            }
        }
        class k {
            constructor(e=0, t=0, i=0, n=1) {
                this.isQuaternion = !0,
                this._x = e,
                this._y = t,
                this._z = i,
                this._w = n
            }
            static slerpFlat(e, t, i, n, r, a, s) {
                let o = i[n + 0]
                  , l = i[n + 1]
                  , h = i[n + 2]
                  , u = i[n + 3]
                  , c = r[a + 0]
                  , d = r[a + 1]
                  , p = r[a + 2]
                  , f = r[a + 3];
                if (0 === s) {
                    e[t + 0] = o,
                    e[t + 1] = l,
                    e[t + 2] = h,
                    e[t + 3] = u;
                    return
                }
                if (1 === s) {
                    e[t + 0] = c,
                    e[t + 1] = d,
                    e[t + 2] = p,
                    e[t + 3] = f;
                    return
                }
                if (u !== f || o !== c || l !== d || h !== p) {
                    let e = 1 - s
                      , t = o * c + l * d + h * p + u * f
                      , i = t >= 0 ? 1 : -1
                      , n = 1 - t * t;
                    if (n > Number.EPSILON) {
                        let r = Math.sqrt(n)
                          , a = Math.atan2(r, t * i);
                        e = Math.sin(e * a) / r,
                        s = Math.sin(s * a) / r
                    }
                    let r = s * i;
                    if (o = o * e + c * r,
                    l = l * e + d * r,
                    h = h * e + p * r,
                    u = u * e + f * r,
                    e === 1 - s) {
                        let e = 1 / Math.sqrt(o * o + l * l + h * h + u * u);
                        o *= e,
                        l *= e,
                        h *= e,
                        u *= e
                    }
                }
                e[t] = o,
                e[t + 1] = l,
                e[t + 2] = h,
                e[t + 3] = u
            }
            static multiplyQuaternionsFlat(e, t, i, n, r, a) {
                let s = i[n]
                  , o = i[n + 1]
                  , l = i[n + 2]
                  , h = i[n + 3]
                  , u = r[a]
                  , c = r[a + 1]
                  , d = r[a + 2]
                  , p = r[a + 3];
                return e[t] = s * p + h * u + o * d - l * c,
                e[t + 1] = o * p + h * c + l * u - s * d,
                e[t + 2] = l * p + h * d + s * c - o * u,
                e[t + 3] = h * p - s * u - o * c - l * d,
                e
            }
            get x() {
                return this._x
            }
            set x(e) {
                this._x = e,
                this._onChangeCallback()
            }
            get y() {
                return this._y
            }
            set y(e) {
                this._y = e,
                this._onChangeCallback()
            }
            get z() {
                return this._z
            }
            set z(e) {
                this._z = e,
                this._onChangeCallback()
            }
            get w() {
                return this._w
            }
            set w(e) {
                this._w = e,
                this._onChangeCallback()
            }
            set(e, t, i, n) {
                return this._x = e,
                this._y = t,
                this._z = i,
                this._w = n,
                this._onChangeCallback(),
                this
            }
            clone() {
                return new this.constructor(this._x,this._y,this._z,this._w)
            }
            copy(e) {
                return this._x = e.x,
                this._y = e.y,
                this._z = e.z,
                this._w = e.w,
                this._onChangeCallback(),
                this
            }
            setFromEuler(e, t) {
                let i = e._x
                  , n = e._y
                  , r = e._z
                  , a = e._order
                  , s = Math.cos
                  , o = Math.sin
                  , l = s(i / 2)
                  , h = s(n / 2)
                  , u = s(r / 2)
                  , c = o(i / 2)
                  , d = o(n / 2)
                  , p = o(r / 2);
                switch (a) {
                case "XYZ":
                    this._x = c * h * u + l * d * p,
                    this._y = l * d * u - c * h * p,
                    this._z = l * h * p + c * d * u,
                    this._w = l * h * u - c * d * p;
                    break;
                case "YXZ":
                    this._x = c * h * u + l * d * p,
                    this._y = l * d * u - c * h * p,
                    this._z = l * h * p - c * d * u,
                    this._w = l * h * u + c * d * p;
                    break;
                case "ZXY":
                    this._x = c * h * u - l * d * p,
                    this._y = l * d * u + c * h * p,
                    this._z = l * h * p + c * d * u,
                    this._w = l * h * u - c * d * p;
                    break;
                case "ZYX":
                    this._x = c * h * u - l * d * p,
                    this._y = l * d * u + c * h * p,
                    this._z = l * h * p - c * d * u,
                    this._w = l * h * u + c * d * p;
                    break;
                case "YZX":
                    this._x = c * h * u + l * d * p,
                    this._y = l * d * u + c * h * p,
                    this._z = l * h * p - c * d * u,
                    this._w = l * h * u - c * d * p;
                    break;
                case "XZY":
                    this._x = c * h * u - l * d * p,
                    this._y = l * d * u - c * h * p,
                    this._z = l * h * p + c * d * u,
                    this._w = l * h * u + c * d * p;
                    break;
                default:
                    console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
                }
                return !1 !== t && this._onChangeCallback(),
                this
            }
            setFromAxisAngle(e, t) {
                let i = t / 2
                  , n = Math.sin(i);
                return this._x = e.x * n,
                this._y = e.y * n,
                this._z = e.z * n,
                this._w = Math.cos(i),
                this._onChangeCallback(),
                this
            }
            setFromRotationMatrix(e) {
                let t = e.elements
                  , i = t[0]
                  , n = t[4]
                  , r = t[8]
                  , a = t[1]
                  , s = t[5]
                  , o = t[9]
                  , l = t[2]
                  , h = t[6]
                  , u = t[10]
                  , c = i + s + u;
                if (c > 0) {
                    let e = .5 / Math.sqrt(c + 1);
                    this._w = .25 / e,
                    this._x = (h - o) * e,
                    this._y = (r - l) * e,
                    this._z = (a - n) * e
                } else if (i > s && i > u) {
                    let e = 2 * Math.sqrt(1 + i - s - u);
                    this._w = (h - o) / e,
                    this._x = .25 * e,
                    this._y = (n + a) / e,
                    this._z = (r + l) / e
                } else if (s > u) {
                    let e = 2 * Math.sqrt(1 + s - i - u);
                    this._w = (r - l) / e,
                    this._x = (n + a) / e,
                    this._y = .25 * e,
                    this._z = (o + h) / e
                } else {
                    let e = 2 * Math.sqrt(1 + u - i - s);
                    this._w = (a - n) / e,
                    this._x = (r + l) / e,
                    this._y = (o + h) / e,
                    this._z = .25 * e
                }
                return this._onChangeCallback(),
                this
            }
            setFromUnitVectors(e, t) {
                let i = e.dot(t) + 1;
                return i < Number.EPSILON ? (i = 0,
                Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y,
                this._y = e.x,
                this._z = 0,
                this._w = i) : (this._x = 0,
                this._y = -e.z,
                this._z = e.y,
                this._w = i)) : (this._x = e.y * t.z - e.z * t.y,
                this._y = e.z * t.x - e.x * t.z,
                this._z = e.x * t.y - e.y * t.x,
                this._w = i),
                this.normalize()
            }
            angleTo(e) {
                return 2 * Math.acos(Math.abs(d(this.dot(e), -1, 1)))
            }
            rotateTowards(e, t) {
                let i = this.angleTo(e);
                return 0 === i || this.slerp(e, Math.min(1, t / i)),
                this
            }
            identity() {
                return this.set(0, 0, 0, 1)
            }
            invert() {
                return this.conjugate()
            }
            conjugate() {
                return this._x *= -1,
                this._y *= -1,
                this._z *= -1,
                this._onChangeCallback(),
                this
            }
            dot(e) {
                return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
            }
            lengthSq() {
                return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
            }
            length() {
                return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
            }
            normalize() {
                let e = this.length();
                return 0 === e ? (this._x = 0,
                this._y = 0,
                this._z = 0,
                this._w = 1) : (e = 1 / e,
                this._x = this._x * e,
                this._y = this._y * e,
                this._z = this._z * e,
                this._w = this._w * e),
                this._onChangeCallback(),
                this
            }
            multiply(e) {
                return this.multiplyQuaternions(this, e)
            }
            premultiply(e) {
                return this.multiplyQuaternions(e, this)
            }
            multiplyQuaternions(e, t) {
                let i = e._x
                  , n = e._y
                  , r = e._z
                  , a = e._w
                  , s = t._x
                  , o = t._y
                  , l = t._z
                  , h = t._w;
                return this._x = i * h + a * s + n * l - r * o,
                this._y = n * h + a * o + r * s - i * l,
                this._z = r * h + a * l + i * o - n * s,
                this._w = a * h - i * s - n * o - r * l,
                this._onChangeCallback(),
                this
            }
            slerp(e, t) {
                if (0 === t)
                    return this;
                if (1 === t)
                    return this.copy(e);
                let i = this._x
                  , n = this._y
                  , r = this._z
                  , a = this._w
                  , s = a * e._w + i * e._x + n * e._y + r * e._z;
                if (s < 0 ? (this._w = -e._w,
                this._x = -e._x,
                this._y = -e._y,
                this._z = -e._z,
                s = -s) : this.copy(e),
                s >= 1)
                    return this._w = a,
                    this._x = i,
                    this._y = n,
                    this._z = r,
                    this;
                let o = 1 - s * s;
                if (o <= Number.EPSILON) {
                    let e = 1 - t;
                    return this._w = e * a + t * this._w,
                    this._x = e * i + t * this._x,
                    this._y = e * n + t * this._y,
                    this._z = e * r + t * this._z,
                    this.normalize(),
                    this._onChangeCallback(),
                    this
                }
                let l = Math.sqrt(o)
                  , h = Math.atan2(l, s)
                  , u = Math.sin((1 - t) * h) / l
                  , c = Math.sin(t * h) / l;
                return this._w = a * u + this._w * c,
                this._x = i * u + this._x * c,
                this._y = n * u + this._y * c,
                this._z = r * u + this._z * c,
                this._onChangeCallback(),
                this
            }
            slerpQuaternions(e, t, i) {
                return this.copy(e).slerp(t, i)
            }
            random() {
                let e = Math.random()
                  , t = Math.sqrt(1 - e)
                  , i = Math.sqrt(e)
                  , n = 2 * Math.PI * Math.random()
                  , r = 2 * Math.PI * Math.random();
                return this.set(t * Math.cos(n), i * Math.sin(r), i * Math.cos(r), t * Math.sin(n))
            }
            equals(e) {
                return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
            }
            fromArray(e, t=0) {
                return this._x = e[t],
                this._y = e[t + 1],
                this._z = e[t + 2],
                this._w = e[t + 3],
                this._onChangeCallback(),
                this
            }
            toArray(e=[], t=0) {
                return e[t] = this._x,
                e[t + 1] = this._y,
                e[t + 2] = this._z,
                e[t + 3] = this._w,
                e
            }
            fromBufferAttribute(e, t) {
                return this._x = e.getX(t),
                this._y = e.getY(t),
                this._z = e.getZ(t),
                this._w = e.getW(t),
                this
            }
            _onChange(e) {
                return this._onChangeCallback = e,
                this
            }
            _onChangeCallback() {}
            *[Symbol.iterator]() {
                yield this._x,
                yield this._y,
                yield this._z,
                yield this._w
            }
        }
        class G {
            constructor(e=0, t=0, i=0) {
                G.prototype.isVector3 = !0,
                this.x = e,
                this.y = t,
                this.z = i
            }
            set(e, t, i) {
                return void 0 === i && (i = this.z),
                this.x = e,
                this.y = t,
                this.z = i,
                this
            }
            setScalar(e) {
                return this.x = e,
                this.y = e,
                this.z = e,
                this
            }
            setX(e) {
                return this.x = e,
                this
            }
            setY(e) {
                return this.y = e,
                this
            }
            setZ(e) {
                return this.z = e,
                this
            }
            setComponent(e, t) {
                switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                case 2:
                    this.z = t;
                    break;
                default:
                    throw Error("index is out of range: " + e)
                }
                return this
            }
            getComponent(e) {
                switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw Error("index is out of range: " + e)
                }
            }
            clone() {
                return new this.constructor(this.x,this.y,this.z)
            }
            copy(e) {
                return this.x = e.x,
                this.y = e.y,
                this.z = e.z,
                this
            }
            add(e) {
                return this.x += e.x,
                this.y += e.y,
                this.z += e.z,
                this
            }
            addScalar(e) {
                return this.x += e,
                this.y += e,
                this.z += e,
                this
            }
            addVectors(e, t) {
                return this.x = e.x + t.x,
                this.y = e.y + t.y,
                this.z = e.z + t.z,
                this
            }
            addScaledVector(e, t) {
                return this.x += e.x * t,
                this.y += e.y * t,
                this.z += e.z * t,
                this
            }
            sub(e) {
                return this.x -= e.x,
                this.y -= e.y,
                this.z -= e.z,
                this
            }
            subScalar(e) {
                return this.x -= e,
                this.y -= e,
                this.z -= e,
                this
            }
            subVectors(e, t) {
                return this.x = e.x - t.x,
                this.y = e.y - t.y,
                this.z = e.z - t.z,
                this
            }
            multiply(e) {
                return this.x *= e.x,
                this.y *= e.y,
                this.z *= e.z,
                this
            }
            multiplyScalar(e) {
                return this.x *= e,
                this.y *= e,
                this.z *= e,
                this
            }
            multiplyVectors(e, t) {
                return this.x = e.x * t.x,
                this.y = e.y * t.y,
                this.z = e.z * t.z,
                this
            }
            applyEuler(e) {
                return this.applyQuaternion(W.setFromEuler(e))
            }
            applyAxisAngle(e, t) {
                return this.applyQuaternion(W.setFromAxisAngle(e, t))
            }
            applyMatrix3(e) {
                let t = this.x
                  , i = this.y
                  , n = this.z
                  , r = e.elements;
                return this.x = r[0] * t + r[3] * i + r[6] * n,
                this.y = r[1] * t + r[4] * i + r[7] * n,
                this.z = r[2] * t + r[5] * i + r[8] * n,
                this
            }
            applyNormalMatrix(e) {
                return this.applyMatrix3(e).normalize()
            }
            applyMatrix4(e) {
                let t = this.x
                  , i = this.y
                  , n = this.z
                  , r = e.elements
                  , a = 1 / (r[3] * t + r[7] * i + r[11] * n + r[15]);
                return this.x = (r[0] * t + r[4] * i + r[8] * n + r[12]) * a,
                this.y = (r[1] * t + r[5] * i + r[9] * n + r[13]) * a,
                this.z = (r[2] * t + r[6] * i + r[10] * n + r[14]) * a,
                this
            }
            applyQuaternion(e) {
                let t = this.x
                  , i = this.y
                  , n = this.z
                  , r = e.x
                  , a = e.y
                  , s = e.z
                  , o = e.w
                  , l = o * t + a * n - s * i
                  , h = o * i + s * t - r * n
                  , u = o * n + r * i - a * t
                  , c = -r * t - a * i - s * n;
                return this.x = l * o + -(c * r) + -(h * s) - -(u * a),
                this.y = h * o + -(c * a) + -(u * r) - -(l * s),
                this.z = u * o + -(c * s) + -(l * a) - -(h * r),
                this
            }
            project(e) {
                return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
            }
            unproject(e) {
                return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
            }
            transformDirection(e) {
                let t = this.x
                  , i = this.y
                  , n = this.z
                  , r = e.elements;
                return this.x = r[0] * t + r[4] * i + r[8] * n,
                this.y = r[1] * t + r[5] * i + r[9] * n,
                this.z = r[2] * t + r[6] * i + r[10] * n,
                this.normalize()
            }
            divide(e) {
                return this.x /= e.x,
                this.y /= e.y,
                this.z /= e.z,
                this
            }
            divideScalar(e) {
                return this.multiplyScalar(1 / e)
            }
            min(e) {
                return this.x = Math.min(this.x, e.x),
                this.y = Math.min(this.y, e.y),
                this.z = Math.min(this.z, e.z),
                this
            }
            max(e) {
                return this.x = Math.max(this.x, e.x),
                this.y = Math.max(this.y, e.y),
                this.z = Math.max(this.z, e.z),
                this
            }
            clamp(e, t) {
                return this.x = Math.max(e.x, Math.min(t.x, this.x)),
                this.y = Math.max(e.y, Math.min(t.y, this.y)),
                this.z = Math.max(e.z, Math.min(t.z, this.z)),
                this
            }
            clampScalar(e, t) {
                return this.x = Math.max(e, Math.min(t, this.x)),
                this.y = Math.max(e, Math.min(t, this.y)),
                this.z = Math.max(e, Math.min(t, this.z)),
                this
            }
            clampLength(e, t) {
                let i = this.length();
                return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)))
            }
            floor() {
                return this.x = Math.floor(this.x),
                this.y = Math.floor(this.y),
                this.z = Math.floor(this.z),
                this
            }
            ceil() {
                return this.x = Math.ceil(this.x),
                this.y = Math.ceil(this.y),
                this.z = Math.ceil(this.z),
                this
            }
            round() {
                return this.x = Math.round(this.x),
                this.y = Math.round(this.y),
                this.z = Math.round(this.z),
                this
            }
            roundToZero() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
                this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
                this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
                this
            }
            negate() {
                return this.x = -this.x,
                this.y = -this.y,
                this.z = -this.z,
                this
            }
            dot(e) {
                return this.x * e.x + this.y * e.y + this.z * e.z
            }
            lengthSq() {
                return this.x * this.x + this.y * this.y + this.z * this.z
            }
            length() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
            }
            manhattanLength() {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
            }
            normalize() {
                return this.divideScalar(this.length() || 1)
            }
            setLength(e) {
                return this.normalize().multiplyScalar(e)
            }
            lerp(e, t) {
                return this.x += (e.x - this.x) * t,
                this.y += (e.y - this.y) * t,
                this.z += (e.z - this.z) * t,
                this
            }
            lerpVectors(e, t, i) {
                return this.x = e.x + (t.x - e.x) * i,
                this.y = e.y + (t.y - e.y) * i,
                this.z = e.z + (t.z - e.z) * i,
                this
            }
            cross(e) {
                return this.crossVectors(this, e)
            }
            crossVectors(e, t) {
                let i = e.x
                  , n = e.y
                  , r = e.z
                  , a = t.x
                  , s = t.y
                  , o = t.z;
                return this.x = n * o - r * s,
                this.y = r * a - i * o,
                this.z = i * s - n * a,
                this
            }
            projectOnVector(e) {
                let t = e.lengthSq();
                if (0 === t)
                    return this.set(0, 0, 0);
                let i = e.dot(this) / t;
                return this.copy(e).multiplyScalar(i)
            }
            projectOnPlane(e) {
                return H.copy(this).projectOnVector(e),
                this.sub(H)
            }
            reflect(e) {
                return this.sub(H.copy(e).multiplyScalar(2 * this.dot(e)))
            }
            angleTo(e) {
                let t = Math.sqrt(this.lengthSq() * e.lengthSq());
                if (0 === t)
                    return Math.PI / 2;
                let i = this.dot(e) / t;
                return Math.acos(d(i, -1, 1))
            }
            distanceTo(e) {
                return Math.sqrt(this.distanceToSquared(e))
            }
            distanceToSquared(e) {
                let t = this.x - e.x
                  , i = this.y - e.y
                  , n = this.z - e.z;
                return t * t + i * i + n * n
            }
            manhattanDistanceTo(e) {
                return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
            }
            setFromSpherical(e) {
                return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
            }
            setFromSphericalCoords(e, t, i) {
                let n = Math.sin(t) * e;
                return this.x = n * Math.sin(i),
                this.y = Math.cos(t) * e,
                this.z = n * Math.cos(i),
                this
            }
            setFromCylindrical(e) {
                return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
            }
            setFromCylindricalCoords(e, t, i) {
                return this.x = e * Math.sin(t),
                this.y = i,
                this.z = e * Math.cos(t),
                this
            }
            setFromMatrixPosition(e) {
                let t = e.elements;
                return this.x = t[12],
                this.y = t[13],
                this.z = t[14],
                this
            }
            setFromMatrixScale(e) {
                let t = this.setFromMatrixColumn(e, 0).length()
                  , i = this.setFromMatrixColumn(e, 1).length()
                  , n = this.setFromMatrixColumn(e, 2).length();
                return this.x = t,
                this.y = i,
                this.z = n,
                this
            }
            setFromMatrixColumn(e, t) {
                return this.fromArray(e.elements, 4 * t)
            }
            setFromMatrix3Column(e, t) {
                return this.fromArray(e.elements, 3 * t)
            }
            setFromEuler(e) {
                return this.x = e._x,
                this.y = e._y,
                this.z = e._z,
                this
            }
            equals(e) {
                return e.x === this.x && e.y === this.y && e.z === this.z
            }
            fromArray(e, t=0) {
                return this.x = e[t],
                this.y = e[t + 1],
                this.z = e[t + 2],
                this
            }
            toArray(e=[], t=0) {
                return e[t] = this.x,
                e[t + 1] = this.y,
                e[t + 2] = this.z,
                e
            }
            fromBufferAttribute(e, t) {
                return this.x = e.getX(t),
                this.y = e.getY(t),
                this.z = e.getZ(t),
                this
            }
            random() {
                return this.x = Math.random(),
                this.y = Math.random(),
                this.z = Math.random(),
                this
            }
            randomDirection() {
                let e = (Math.random() - .5) * 2
                  , t = Math.random() * Math.PI * 2
                  , i = Math.sqrt(1 - e ** 2);
                return this.x = i * Math.cos(t),
                this.y = i * Math.sin(t),
                this.z = e,
                this
            }
            *[Symbol.iterator]() {
                yield this.x,
                yield this.y,
                yield this.z
            }
        }
        let H = new G
          , W = new k;
        class j {
            constructor(e=new G(Infinity,Infinity,Infinity), t=new G(-1 / 0,-1 / 0,-1 / 0)) {
                this.isBox3 = !0,
                this.min = e,
                this.max = t
            }
            set(e, t) {
                return this.min.copy(e),
                this.max.copy(t),
                this
            }
            setFromArray(e) {
                let t = Infinity
                  , i = Infinity
                  , n = Infinity
                  , r = -1 / 0
                  , a = -1 / 0
                  , s = -1 / 0;
                for (let o = 0, l = e.length; o < l; o += 3) {
                    let l = e[o]
                      , h = e[o + 1]
                      , u = e[o + 2];
                    l < t && (t = l),
                    h < i && (i = h),
                    u < n && (n = u),
                    l > r && (r = l),
                    h > a && (a = h),
                    u > s && (s = u)
                }
                return this.min.set(t, i, n),
                this.max.set(r, a, s),
                this
            }
            setFromBufferAttribute(e) {
                let t = Infinity
                  , i = Infinity
                  , n = Infinity
                  , r = -1 / 0
                  , a = -1 / 0
                  , s = -1 / 0;
                for (let o = 0, l = e.count; o < l; o++) {
                    let l = e.getX(o)
                      , h = e.getY(o)
                      , u = e.getZ(o);
                    l < t && (t = l),
                    h < i && (i = h),
                    u < n && (n = u),
                    l > r && (r = l),
                    h > a && (a = h),
                    u > s && (s = u)
                }
                return this.min.set(t, i, n),
                this.max.set(r, a, s),
                this
            }
            setFromPoints(e) {
                this.makeEmpty();
                for (let t = 0, i = e.length; t < i; t++)
                    this.expandByPoint(e[t]);
                return this
            }
            setFromCenterAndSize(e, t) {
                let i = X.copy(t).multiplyScalar(.5);
                return this.min.copy(e).sub(i),
                this.max.copy(e).add(i),
                this
            }
            setFromObject(e, t=!1) {
                return this.makeEmpty(),
                this.expandByObject(e, t)
            }
            clone() {
                return new this.constructor().copy(this)
            }
            copy(e) {
                return this.min.copy(e.min),
                this.max.copy(e.max),
                this
            }
            makeEmpty() {
                return this.min.x = this.min.y = this.min.z = Infinity,
                this.max.x = this.max.y = this.max.z = -1 / 0,
                this
            }
            isEmpty() {
                return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
            }
            getCenter(e) {
                return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
            }
            getSize(e) {
                return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
            }
            expandByPoint(e) {
                return this.min.min(e),
                this.max.max(e),
                this
            }
            expandByVector(e) {
                return this.min.sub(e),
                this.max.add(e),
                this
            }
            expandByScalar(e) {
                return this.min.addScalar(-e),
                this.max.addScalar(e),
                this
            }
            expandByObject(e, t=!1) {
                e.updateWorldMatrix(!1, !1);
                let i = e.geometry;
                if (void 0 !== i) {
                    if (t && void 0 != i.attributes && void 0 !== i.attributes.position) {
                        let t = i.attributes.position;
                        for (let i = 0, n = t.count; i < n; i++)
                            X.fromBufferAttribute(t, i).applyMatrix4(e.matrixWorld),
                            this.expandByPoint(X)
                    } else
                        null === i.boundingBox && i.computeBoundingBox(),
                        J.copy(i.boundingBox),
                        J.applyMatrix4(e.matrixWorld),
                        this.union(J)
                }
                let n = e.children;
                for (let e = 0, i = n.length; e < i; e++)
                    this.expandByObject(n[e], t);
                return this
            }
            containsPoint(e) {
                return !(e.x < this.min.x) && !(e.x > this.max.x) && !(e.y < this.min.y) && !(e.y > this.max.y) && !(e.z < this.min.z) && !(e.z > this.max.z)
            }
            containsBox(e) {
                return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
            }
            getParameter(e, t) {
                return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
            }
            intersectsBox(e) {
                return !(e.max.x < this.min.x) && !(e.min.x > this.max.x) && !(e.max.y < this.min.y) && !(e.min.y > this.max.y) && !(e.max.z < this.min.z) && !(e.min.z > this.max.z)
            }
            intersectsSphere(e) {
                return this.clampPoint(e.center, X),
                X.distanceToSquared(e.center) <= e.radius * e.radius
            }
            intersectsPlane(e) {
                let t, i;
                return e.normal.x > 0 ? (t = e.normal.x * this.min.x,
                i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x,
                i = e.normal.x * this.min.x),
                e.normal.y > 0 ? (t += e.normal.y * this.min.y,
                i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y,
                i += e.normal.y * this.min.y),
                e.normal.z > 0 ? (t += e.normal.z * this.min.z,
                i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z,
                i += e.normal.z * this.min.z),
                t <= -e.constant && i >= -e.constant
            }
            intersectsTriangle(e) {
                if (this.isEmpty())
                    return !1;
                this.getCenter(et),
                ei.subVectors(this.max, et),
                Y.subVectors(e.a, et),
                Z.subVectors(e.b, et),
                K.subVectors(e.c, et),
                Q.subVectors(Z, Y),
                $.subVectors(K, Z),
                ee.subVectors(Y, K);
                let t = [0, -Q.z, Q.y, 0, -$.z, $.y, 0, -ee.z, ee.y, Q.z, 0, -Q.x, $.z, 0, -$.x, ee.z, 0, -ee.x, -Q.y, Q.x, 0, -$.y, $.x, 0, -ee.y, ee.x, 0];
                return !!(ea(t, Y, Z, K, ei) && ea(t = [1, 0, 0, 0, 1, 0, 0, 0, 1], Y, Z, K, ei)) && (en.crossVectors(Q, $),
                ea(t = [en.x, en.y, en.z], Y, Z, K, ei))
            }
            clampPoint(e, t) {
                return t.copy(e).clamp(this.min, this.max)
            }
            distanceToPoint(e) {
                let t = X.copy(e).clamp(this.min, this.max);
                return t.sub(e).length()
            }
            getBoundingSphere(e) {
                return this.getCenter(e.center),
                e.radius = .5 * this.getSize(X).length(),
                e
            }
            intersect(e) {
                return this.min.max(e.min),
                this.max.min(e.max),
                this.isEmpty() && this.makeEmpty(),
                this
            }
            union(e) {
                return this.min.min(e.min),
                this.max.max(e.max),
                this
            }
            applyMatrix4(e) {
                return this.isEmpty() || (q[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
                q[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
                q[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
                q[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
                q[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
                q[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
                q[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
                q[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
                this.setFromPoints(q)),
                this
            }
            translate(e) {
                return this.min.add(e),
                this.max.add(e),
                this
            }
            equals(e) {
                return e.min.equals(this.min) && e.max.equals(this.max)
            }
        }
        let q = [new G, new G, new G, new G, new G, new G, new G, new G]
          , X = new G
          , J = new j
          , Y = new G
          , Z = new G
          , K = new G
          , Q = new G
          , $ = new G
          , ee = new G
          , et = new G
          , ei = new G
          , en = new G
          , er = new G;
        function ea(e, t, i, n, r) {
            for (let a = 0, s = e.length - 3; a <= s; a += 3) {
                er.fromArray(e, a);
                let s = r.x * Math.abs(er.x) + r.y * Math.abs(er.y) + r.z * Math.abs(er.z)
                  , o = t.dot(er)
                  , l = i.dot(er)
                  , h = n.dot(er);
                if (Math.max(-Math.max(o, l, h), Math.min(o, l, h)) > s)
                    return !1
            }
            return !0
        }
        let es = new j
          , eo = new G
          , el = new G;
        class eh {
            constructor(e=new G, t=-1) {
                this.center = e,
                this.radius = t
            }
            set(e, t) {
                return this.center.copy(e),
                this.radius = t,
                this
            }
            setFromPoints(e, t) {
                let i = this.center;
                void 0 !== t ? i.copy(t) : es.setFromPoints(e).getCenter(i);
                let n = 0;
                for (let t = 0, r = e.length; t < r; t++)
                    n = Math.max(n, i.distanceToSquared(e[t]));
                return this.radius = Math.sqrt(n),
                this
            }
            copy(e) {
                return this.center.copy(e.center),
                this.radius = e.radius,
                this
            }
            isEmpty() {
                return this.radius < 0
            }
            makeEmpty() {
                return this.center.set(0, 0, 0),
                this.radius = -1,
                this
            }
            containsPoint(e) {
                return e.distanceToSquared(this.center) <= this.radius * this.radius
            }
            distanceToPoint(e) {
                return e.distanceTo(this.center) - this.radius
            }
            intersectsSphere(e) {
                let t = this.radius + e.radius;
                return e.center.distanceToSquared(this.center) <= t * t
            }
            intersectsBox(e) {
                return e.intersectsSphere(this)
            }
            intersectsPlane(e) {
                return Math.abs(e.distanceToPoint(this.center)) <= this.radius
            }
            clampPoint(e, t) {
                let i = this.center.distanceToSquared(e);
                return t.copy(e),
                i > this.radius * this.radius && (t.sub(this.center).normalize(),
                t.multiplyScalar(this.radius).add(this.center)),
                t
            }
            getBoundingBox(e) {
                return this.isEmpty() ? (e.makeEmpty(),
                e) : (e.set(this.center, this.center),
                e.expandByScalar(this.radius),
                e)
            }
            applyMatrix4(e) {
                return this.center.applyMatrix4(e),
                this.radius = this.radius * e.getMaxScaleOnAxis(),
                this
            }
            translate(e) {
                return this.center.add(e),
                this
            }
            expandByPoint(e) {
                if (this.isEmpty())
                    return this.center.copy(e),
                    this.radius = 0,
                    this;
                eo.subVectors(e, this.center);
                let t = eo.lengthSq();
                if (t > this.radius * this.radius) {
                    let e = Math.sqrt(t)
                      , i = (e - this.radius) * .5;
                    this.center.addScaledVector(eo, i / e),
                    this.radius += i
                }
                return this
            }
            union(e) {
                return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e),
                this) : (!0 === this.center.equals(e.center) ? this.radius = Math.max(this.radius, e.radius) : (el.subVectors(e.center, this.center).setLength(e.radius),
                this.expandByPoint(eo.copy(e.center).add(el)),
                this.expandByPoint(eo.copy(e.center).sub(el))),
                this)
            }
            equals(e) {
                return e.center.equals(this.center) && e.radius === this.radius
            }
            clone() {
                return new this.constructor().copy(this)
            }
        }
        let eu = new G
          , ec = new G
          , ed = new G
          , ep = new G
          , ef = new G
          , em = new G
          , eg = new G;
        class ev {
            constructor() {
                ev.prototype.isMatrix4 = !0,
                this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
            }
            set(e, t, i, n, r, a, s, o, l, h, u, c, d, p, f, m) {
                let g = this.elements;
                return g[0] = e,
                g[4] = t,
                g[8] = i,
                g[12] = n,
                g[1] = r,
                g[5] = a,
                g[9] = s,
                g[13] = o,
                g[2] = l,
                g[6] = h,
                g[10] = u,
                g[14] = c,
                g[3] = d,
                g[7] = p,
                g[11] = f,
                g[15] = m,
                this
            }
            identity() {
                return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
                this
            }
            clone() {
                return new ev().fromArray(this.elements)
            }
            copy(e) {
                let t = this.elements
                  , i = e.elements;
                return t[0] = i[0],
                t[1] = i[1],
                t[2] = i[2],
                t[3] = i[3],
                t[4] = i[4],
                t[5] = i[5],
                t[6] = i[6],
                t[7] = i[7],
                t[8] = i[8],
                t[9] = i[9],
                t[10] = i[10],
                t[11] = i[11],
                t[12] = i[12],
                t[13] = i[13],
                t[14] = i[14],
                t[15] = i[15],
                this
            }
            copyPosition(e) {
                let t = this.elements
                  , i = e.elements;
                return t[12] = i[12],
                t[13] = i[13],
                t[14] = i[14],
                this
            }
            setFromMatrix3(e) {
                let t = e.elements;
                return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1),
                this
            }
            extractBasis(e, t, i) {
                return e.setFromMatrixColumn(this, 0),
                t.setFromMatrixColumn(this, 1),
                i.setFromMatrixColumn(this, 2),
                this
            }
            makeBasis(e, t, i) {
                return this.set(e.x, t.x, i.x, 0, e.y, t.y, i.y, 0, e.z, t.z, i.z, 0, 0, 0, 0, 1),
                this
            }
            extractRotation(e) {
                let t = this.elements
                  , i = e.elements
                  , n = 1 / e_.setFromMatrixColumn(e, 0).length()
                  , r = 1 / e_.setFromMatrixColumn(e, 1).length()
                  , a = 1 / e_.setFromMatrixColumn(e, 2).length();
                return t[0] = i[0] * n,
                t[1] = i[1] * n,
                t[2] = i[2] * n,
                t[3] = 0,
                t[4] = i[4] * r,
                t[5] = i[5] * r,
                t[6] = i[6] * r,
                t[7] = 0,
                t[8] = i[8] * a,
                t[9] = i[9] * a,
                t[10] = i[10] * a,
                t[11] = 0,
                t[12] = 0,
                t[13] = 0,
                t[14] = 0,
                t[15] = 1,
                this
            }
            makeRotationFromEuler(e) {
                let t = this.elements
                  , i = e.x
                  , n = e.y
                  , r = e.z
                  , a = Math.cos(i)
                  , s = Math.sin(i)
                  , o = Math.cos(n)
                  , l = Math.sin(n)
                  , h = Math.cos(r)
                  , u = Math.sin(r);
                if ("XYZ" === e.order) {
                    let e = a * h
                      , i = a * u
                      , n = s * h
                      , r = s * u;
                    t[0] = o * h,
                    t[4] = -o * u,
                    t[8] = l,
                    t[1] = i + n * l,
                    t[5] = e - r * l,
                    t[9] = -s * o,
                    t[2] = r - e * l,
                    t[6] = n + i * l,
                    t[10] = a * o
                } else if ("YXZ" === e.order) {
                    let e = o * h
                      , i = o * u
                      , n = l * h
                      , r = l * u;
                    t[0] = e + r * s,
                    t[4] = n * s - i,
                    t[8] = a * l,
                    t[1] = a * u,
                    t[5] = a * h,
                    t[9] = -s,
                    t[2] = i * s - n,
                    t[6] = r + e * s,
                    t[10] = a * o
                } else if ("ZXY" === e.order) {
                    let e = o * h
                      , i = o * u
                      , n = l * h
                      , r = l * u;
                    t[0] = e - r * s,
                    t[4] = -a * u,
                    t[8] = n + i * s,
                    t[1] = i + n * s,
                    t[5] = a * h,
                    t[9] = r - e * s,
                    t[2] = -a * l,
                    t[6] = s,
                    t[10] = a * o
                } else if ("ZYX" === e.order) {
                    let e = a * h
                      , i = a * u
                      , n = s * h
                      , r = s * u;
                    t[0] = o * h,
                    t[4] = n * l - i,
                    t[8] = e * l + r,
                    t[1] = o * u,
                    t[5] = r * l + e,
                    t[9] = i * l - n,
                    t[2] = -l,
                    t[6] = s * o,
                    t[10] = a * o
                } else if ("YZX" === e.order) {
                    let e = a * o
                      , i = a * l
                      , n = s * o
                      , r = s * l;
                    t[0] = o * h,
                    t[4] = r - e * u,
                    t[8] = n * u + i,
                    t[1] = u,
                    t[5] = a * h,
                    t[9] = -s * h,
                    t[2] = -l * h,
                    t[6] = i * u + n,
                    t[10] = e - r * u
                } else if ("XZY" === e.order) {
                    let e = a * o
                      , i = a * l
                      , n = s * o
                      , r = s * l;
                    t[0] = o * h,
                    t[4] = -u,
                    t[8] = l * h,
                    t[1] = e * u + r,
                    t[5] = a * h,
                    t[9] = i * u - n,
                    t[2] = n * u - i,
                    t[6] = s * h,
                    t[10] = r * u + e
                }
                return t[3] = 0,
                t[7] = 0,
                t[11] = 0,
                t[12] = 0,
                t[13] = 0,
                t[14] = 0,
                t[15] = 1,
                this
            }
            makeRotationFromQuaternion(e) {
                return this.compose(ey, e, eM)
            }
            lookAt(e, t, i) {
                let n = this.elements;
                return ew.subVectors(e, t),
                0 === ew.lengthSq() && (ew.z = 1),
                ew.normalize(),
                eS.crossVectors(i, ew),
                0 === eS.lengthSq() && (1 === Math.abs(i.z) ? ew.x += 1e-4 : ew.z += 1e-4,
                ew.normalize(),
                eS.crossVectors(i, ew)),
                eS.normalize(),
                eb.crossVectors(ew, eS),
                n[0] = eS.x,
                n[4] = eb.x,
                n[8] = ew.x,
                n[1] = eS.y,
                n[5] = eb.y,
                n[9] = ew.y,
                n[2] = eS.z,
                n[6] = eb.z,
                n[10] = ew.z,
                this
            }
            multiply(e) {
                return this.multiplyMatrices(this, e)
            }
            premultiply(e) {
                return this.multiplyMatrices(e, this)
            }
            multiplyMatrices(e, t) {
                let i = e.elements
                  , n = t.elements
                  , r = this.elements
                  , a = i[0]
                  , s = i[4]
                  , o = i[8]
                  , l = i[12]
                  , h = i[1]
                  , u = i[5]
                  , c = i[9]
                  , d = i[13]
                  , p = i[2]
                  , f = i[6]
                  , m = i[10]
                  , g = i[14]
                  , v = i[3]
                  , _ = i[7]
                  , x = i[11]
                  , y = i[15]
                  , M = n[0]
                  , S = n[4]
                  , b = n[8]
                  , w = n[12]
                  , T = n[1]
                  , E = n[5]
                  , A = n[9]
                  , C = n[13]
                  , L = n[2]
                  , P = n[6]
                  , R = n[10]
                  , D = n[14]
                  , I = n[3]
                  , N = n[7]
                  , O = n[11]
                  , z = n[15];
                return r[0] = a * M + s * T + o * L + l * I,
                r[4] = a * S + s * E + o * P + l * N,
                r[8] = a * b + s * A + o * R + l * O,
                r[12] = a * w + s * C + o * D + l * z,
                r[1] = h * M + u * T + c * L + d * I,
                r[5] = h * S + u * E + c * P + d * N,
                r[9] = h * b + u * A + c * R + d * O,
                r[13] = h * w + u * C + c * D + d * z,
                r[2] = p * M + f * T + m * L + g * I,
                r[6] = p * S + f * E + m * P + g * N,
                r[10] = p * b + f * A + m * R + g * O,
                r[14] = p * w + f * C + m * D + g * z,
                r[3] = v * M + _ * T + x * L + y * I,
                r[7] = v * S + _ * E + x * P + y * N,
                r[11] = v * b + _ * A + x * R + y * O,
                r[15] = v * w + _ * C + x * D + y * z,
                this
            }
            multiplyScalar(e) {
                let t = this.elements;
                return t[0] *= e,
                t[4] *= e,
                t[8] *= e,
                t[12] *= e,
                t[1] *= e,
                t[5] *= e,
                t[9] *= e,
                t[13] *= e,
                t[2] *= e,
                t[6] *= e,
                t[10] *= e,
                t[14] *= e,
                t[3] *= e,
                t[7] *= e,
                t[11] *= e,
                t[15] *= e,
                this
            }
            determinant() {
                let e = this.elements
                  , t = e[0]
                  , i = e[4]
                  , n = e[8]
                  , r = e[12]
                  , a = e[1]
                  , s = e[5]
                  , o = e[9]
                  , l = e[13]
                  , h = e[2]
                  , u = e[6]
                  , c = e[10]
                  , d = e[14]
                  , p = e[3]
                  , f = e[7]
                  , m = e[11]
                  , g = e[15];
                return p * (+r * o * u - n * l * u - r * s * c + i * l * c + n * s * d - i * o * d) + f * (+t * o * d - t * l * c + r * a * c - n * a * d + n * l * h - r * o * h) + m * (+t * l * u - t * s * d - r * a * u + i * a * d + r * s * h - i * l * h) + g * (-n * s * h - t * o * u + t * s * c + n * a * u - i * a * c + i * o * h)
            }
            transpose() {
                let e;
                let t = this.elements;
                return e = t[1],
                t[1] = t[4],
                t[4] = e,
                e = t[2],
                t[2] = t[8],
                t[8] = e,
                e = t[6],
                t[6] = t[9],
                t[9] = e,
                e = t[3],
                t[3] = t[12],
                t[12] = e,
                e = t[7],
                t[7] = t[13],
                t[13] = e,
                e = t[11],
                t[11] = t[14],
                t[14] = e,
                this
            }
            setPosition(e, t, i) {
                let n = this.elements;
                return e.isVector3 ? (n[12] = e.x,
                n[13] = e.y,
                n[14] = e.z) : (n[12] = e,
                n[13] = t,
                n[14] = i),
                this
            }
            invert() {
                let e = this.elements
                  , t = e[0]
                  , i = e[1]
                  , n = e[2]
                  , r = e[3]
                  , a = e[4]
                  , s = e[5]
                  , o = e[6]
                  , l = e[7]
                  , h = e[8]
                  , u = e[9]
                  , c = e[10]
                  , d = e[11]
                  , p = e[12]
                  , f = e[13]
                  , m = e[14]
                  , g = e[15]
                  , v = u * m * l - f * c * l + f * o * d - s * m * d - u * o * g + s * c * g
                  , _ = p * c * l - h * m * l - p * o * d + a * m * d + h * o * g - a * c * g
                  , x = h * f * l - p * u * l + p * s * d - a * f * d - h * s * g + a * u * g
                  , y = p * u * o - h * f * o - p * s * c + a * f * c + h * s * m - a * u * m
                  , M = t * v + i * _ + n * x + r * y;
                if (0 === M)
                    return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                let S = 1 / M;
                return e[0] = v * S,
                e[1] = (f * c * r - u * m * r - f * n * d + i * m * d + u * n * g - i * c * g) * S,
                e[2] = (s * m * r - f * o * r + f * n * l - i * m * l - s * n * g + i * o * g) * S,
                e[3] = (u * o * r - s * c * r - u * n * l + i * c * l + s * n * d - i * o * d) * S,
                e[4] = _ * S,
                e[5] = (h * m * r - p * c * r + p * n * d - t * m * d - h * n * g + t * c * g) * S,
                e[6] = (p * o * r - a * m * r - p * n * l + t * m * l + a * n * g - t * o * g) * S,
                e[7] = (a * c * r - h * o * r + h * n * l - t * c * l - a * n * d + t * o * d) * S,
                e[8] = x * S,
                e[9] = (p * u * r - h * f * r - p * i * d + t * f * d + h * i * g - t * u * g) * S,
                e[10] = (a * f * r - p * s * r + p * i * l - t * f * l - a * i * g + t * s * g) * S,
                e[11] = (h * s * r - a * u * r - h * i * l + t * u * l + a * i * d - t * s * d) * S,
                e[12] = y * S,
                e[13] = (h * f * n - p * u * n + p * i * c - t * f * c - h * i * m + t * u * m) * S,
                e[14] = (p * s * n - a * f * n - p * i * o + t * f * o + a * i * m - t * s * m) * S,
                e[15] = (a * u * n - h * s * n + h * i * o - t * u * o - a * i * c + t * s * c) * S,
                this
            }
            scale(e) {
                let t = this.elements
                  , i = e.x
                  , n = e.y
                  , r = e.z;
                return t[0] *= i,
                t[4] *= n,
                t[8] *= r,
                t[1] *= i,
                t[5] *= n,
                t[9] *= r,
                t[2] *= i,
                t[6] *= n,
                t[10] *= r,
                t[3] *= i,
                t[7] *= n,
                t[11] *= r,
                this
            }
            getMaxScaleOnAxis() {
                let e = this.elements
                  , t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
                  , i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6]
                  , n = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
                return Math.sqrt(Math.max(t, i, n))
            }
            makeTranslation(e, t, i) {
                return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1),
                this
            }
            makeRotationX(e) {
                let t = Math.cos(e)
                  , i = Math.sin(e);
                return this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1),
                this
            }
            makeRotationY(e) {
                let t = Math.cos(e)
                  , i = Math.sin(e);
                return this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1),
                this
            }
            makeRotationZ(e) {
                let t = Math.cos(e)
                  , i = Math.sin(e);
                return this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
                this
            }
            makeRotationAxis(e, t) {
                let i = Math.cos(t)
                  , n = Math.sin(t)
                  , r = 1 - i
                  , a = e.x
                  , s = e.y
                  , o = e.z
                  , l = r * a
                  , h = r * s;
                return this.set(l * a + i, l * s - n * o, l * o + n * s, 0, l * s + n * o, h * s + i, h * o - n * a, 0, l * o - n * s, h * o + n * a, r * o * o + i, 0, 0, 0, 0, 1),
                this
            }
            makeScale(e, t, i) {
                return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1),
                this
            }
            makeShear(e, t, i, n, r, a) {
                return this.set(1, i, r, 0, e, 1, a, 0, t, n, 1, 0, 0, 0, 0, 1),
                this
            }
            compose(e, t, i) {
                let n = this.elements
                  , r = t._x
                  , a = t._y
                  , s = t._z
                  , o = t._w
                  , l = r + r
                  , h = a + a
                  , u = s + s
                  , c = r * l
                  , d = r * h
                  , p = r * u
                  , f = a * h
                  , m = a * u
                  , g = s * u
                  , v = o * l
                  , _ = o * h
                  , x = o * u
                  , y = i.x
                  , M = i.y
                  , S = i.z;
                return n[0] = (1 - (f + g)) * y,
                n[1] = (d + x) * y,
                n[2] = (p - _) * y,
                n[3] = 0,
                n[4] = (d - x) * M,
                n[5] = (1 - (c + g)) * M,
                n[6] = (m + v) * M,
                n[7] = 0,
                n[8] = (p + _) * S,
                n[9] = (m - v) * S,
                n[10] = (1 - (c + f)) * S,
                n[11] = 0,
                n[12] = e.x,
                n[13] = e.y,
                n[14] = e.z,
                n[15] = 1,
                this
            }
            decompose(e, t, i) {
                let n = this.elements
                  , r = e_.set(n[0], n[1], n[2]).length()
                  , a = e_.set(n[4], n[5], n[6]).length()
                  , s = e_.set(n[8], n[9], n[10]).length()
                  , o = this.determinant();
                o < 0 && (r = -r),
                e.x = n[12],
                e.y = n[13],
                e.z = n[14],
                ex.copy(this);
                let l = 1 / r
                  , h = 1 / a
                  , u = 1 / s;
                return ex.elements[0] *= l,
                ex.elements[1] *= l,
                ex.elements[2] *= l,
                ex.elements[4] *= h,
                ex.elements[5] *= h,
                ex.elements[6] *= h,
                ex.elements[8] *= u,
                ex.elements[9] *= u,
                ex.elements[10] *= u,
                t.setFromRotationMatrix(ex),
                i.x = r,
                i.y = a,
                i.z = s,
                this
            }
            makePerspective(e, t, i, n, r, a) {
                let s = this.elements;
                return s[0] = 2 * r / (t - e),
                s[4] = 0,
                s[8] = (t + e) / (t - e),
                s[12] = 0,
                s[1] = 0,
                s[5] = 2 * r / (i - n),
                s[9] = (i + n) / (i - n),
                s[13] = 0,
                s[2] = 0,
                s[6] = 0,
                s[10] = -(a + r) / (a - r),
                s[14] = -2 * a * r / (a - r),
                s[3] = 0,
                s[7] = 0,
                s[11] = -1,
                s[15] = 0,
                this
            }
            makeOrthographic(e, t, i, n, r, a) {
                let s = this.elements
                  , o = 1 / (t - e)
                  , l = 1 / (i - n)
                  , h = 1 / (a - r);
                return s[0] = 2 * o,
                s[4] = 0,
                s[8] = 0,
                s[12] = -((t + e) * o),
                s[1] = 0,
                s[5] = 2 * l,
                s[9] = 0,
                s[13] = -((i + n) * l),
                s[2] = 0,
                s[6] = 0,
                s[10] = -2 * h,
                s[14] = -((a + r) * h),
                s[3] = 0,
                s[7] = 0,
                s[11] = 0,
                s[15] = 1,
                this
            }
            equals(e) {
                let t = this.elements
                  , i = e.elements;
                for (let e = 0; e < 16; e++)
                    if (t[e] !== i[e])
                        return !1;
                return !0
            }
            fromArray(e, t=0) {
                for (let i = 0; i < 16; i++)
                    this.elements[i] = e[i + t];
                return this
            }
            toArray(e=[], t=0) {
                let i = this.elements;
                return e[t] = i[0],
                e[t + 1] = i[1],
                e[t + 2] = i[2],
                e[t + 3] = i[3],
                e[t + 4] = i[4],
                e[t + 5] = i[5],
                e[t + 6] = i[6],
                e[t + 7] = i[7],
                e[t + 8] = i[8],
                e[t + 9] = i[9],
                e[t + 10] = i[10],
                e[t + 11] = i[11],
                e[t + 12] = i[12],
                e[t + 13] = i[13],
                e[t + 14] = i[14],
                e[t + 15] = i[15],
                e
            }
        }
        let e_ = new G
          , ex = new ev
          , ey = new G(0,0,0)
          , eM = new G(1,1,1)
          , eS = new G
          , eb = new G
          , ew = new G
          , eT = new ev
          , eE = new k;
        class eA {
            constructor(e=0, t=0, i=0, n=eA.DefaultOrder) {
                this.isEuler = !0,
                this._x = e,
                this._y = t,
                this._z = i,
                this._order = n
            }
            get x() {
                return this._x
            }
            set x(e) {
                this._x = e,
                this._onChangeCallback()
            }
            get y() {
                return this._y
            }
            set y(e) {
                this._y = e,
                this._onChangeCallback()
            }
            get z() {
                return this._z
            }
            set z(e) {
                this._z = e,
                this._onChangeCallback()
            }
            get order() {
                return this._order
            }
            set order(e) {
                this._order = e,
                this._onChangeCallback()
            }
            set(e, t, i, n=this._order) {
                return this._x = e,
                this._y = t,
                this._z = i,
                this._order = n,
                this._onChangeCallback(),
                this
            }
            clone() {
                return new this.constructor(this._x,this._y,this._z,this._order)
            }
            copy(e) {
                return this._x = e._x,
                this._y = e._y,
                this._z = e._z,
                this._order = e._order,
                this._onChangeCallback(),
                this
            }
            setFromRotationMatrix(e, t=this._order, i=!0) {
                let n = e.elements
                  , r = n[0]
                  , a = n[4]
                  , s = n[8]
                  , o = n[1]
                  , l = n[5]
                  , h = n[9]
                  , u = n[2]
                  , c = n[6]
                  , p = n[10];
                switch (t) {
                case "XYZ":
                    this._y = Math.asin(d(s, -1, 1)),
                    .9999999 > Math.abs(s) ? (this._x = Math.atan2(-h, p),
                    this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(c, l),
                    this._z = 0);
                    break;
                case "YXZ":
                    this._x = Math.asin(-d(h, -1, 1)),
                    .9999999 > Math.abs(h) ? (this._y = Math.atan2(s, p),
                    this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-u, r),
                    this._z = 0);
                    break;
                case "ZXY":
                    this._x = Math.asin(d(c, -1, 1)),
                    .9999999 > Math.abs(c) ? (this._y = Math.atan2(-u, p),
                    this._z = Math.atan2(-a, l)) : (this._y = 0,
                    this._z = Math.atan2(o, r));
                    break;
                case "ZYX":
                    this._y = Math.asin(-d(u, -1, 1)),
                    .9999999 > Math.abs(u) ? (this._x = Math.atan2(c, p),
                    this._z = Math.atan2(o, r)) : (this._x = 0,
                    this._z = Math.atan2(-a, l));
                    break;
                case "YZX":
                    this._z = Math.asin(d(o, -1, 1)),
                    .9999999 > Math.abs(o) ? (this._x = Math.atan2(-h, l),
                    this._y = Math.atan2(-u, r)) : (this._x = 0,
                    this._y = Math.atan2(s, p));
                    break;
                case "XZY":
                    this._z = Math.asin(-d(a, -1, 1)),
                    .9999999 > Math.abs(a) ? (this._x = Math.atan2(c, l),
                    this._y = Math.atan2(s, r)) : (this._x = Math.atan2(-h, p),
                    this._y = 0);
                    break;
                default:
                    console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
                }
                return this._order = t,
                !0 === i && this._onChangeCallback(),
                this
            }
            setFromQuaternion(e, t, i) {
                return eT.makeRotationFromQuaternion(e),
                this.setFromRotationMatrix(eT, t, i)
            }
            setFromVector3(e, t=this._order) {
                return this.set(e.x, e.y, e.z, t)
            }
            reorder(e) {
                return eE.setFromEuler(this),
                this.setFromQuaternion(eE, e)
            }
            equals(e) {
                return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
            }
            fromArray(e) {
                return this._x = e[0],
                this._y = e[1],
                this._z = e[2],
                void 0 !== e[3] && (this._order = e[3]),
                this._onChangeCallback(),
                this
            }
            toArray(e=[], t=0) {
                return e[t] = this._x,
                e[t + 1] = this._y,
                e[t + 2] = this._z,
                e[t + 3] = this._order,
                e
            }
            _onChange(e) {
                return this._onChangeCallback = e,
                this
            }
            _onChangeCallback() {}
            *[Symbol.iterator]() {
                yield this._x,
                yield this._y,
                yield this._z,
                yield this._order
            }
            toVector3() {
                console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")
            }
        }
        eA.DefaultOrder = "XYZ",
        eA.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
        class eC {
            constructor() {
                this.mask = 1
            }
            set(e) {
                this.mask = (1 << e | 0) >>> 0
            }
            enable(e) {
                this.mask |= 1 << e | 0
            }
            enableAll() {
                this.mask = -1
            }
            toggle(e) {
                this.mask ^= 1 << e | 0
            }
            disable(e) {
                this.mask &= ~(1 << e | 0)
            }
            disableAll() {
                this.mask = 0
            }
            test(e) {
                return (this.mask & e.mask) != 0
            }
            isEnabled(e) {
                return (this.mask & (1 << e | 0)) != 0
            }
        }
        let eL = 0
          , eP = new G
          , eR = new k
          , eD = new ev
          , eI = new G
          , eN = new G
          , eO = new G
          , ez = new k
          , eU = new G(1,0,0)
          , eF = new G(0,1,0)
          , eB = new G(0,0,1)
          , eV = {
            type: "added"
        }
          , ek = {
            type: "removed"
        };
        class eG extends o {
            constructor() {
                super(),
                this.isObject3D = !0,
                Object.defineProperty(this, "id", {
                    value: eL++
                }),
                this.uuid = c(),
                this.name = "",
                this.type = "Object3D",
                this.parent = null,
                this.children = [],
                this.up = eG.DefaultUp.clone();
                let e = new G
                  , t = new eA
                  , i = new k
                  , n = new G(1,1,1);
                t._onChange(function() {
                    i.setFromEuler(t, !1)
                }),
                i._onChange(function() {
                    t.setFromQuaternion(i, void 0, !1)
                }),
                Object.defineProperties(this, {
                    position: {
                        configurable: !0,
                        enumerable: !0,
                        value: e
                    },
                    rotation: {
                        configurable: !0,
                        enumerable: !0,
                        value: t
                    },
                    quaternion: {
                        configurable: !0,
                        enumerable: !0,
                        value: i
                    },
                    scale: {
                        configurable: !0,
                        enumerable: !0,
                        value: n
                    },
                    modelViewMatrix: {
                        value: new ev
                    },
                    normalMatrix: {
                        value: new _
                    }
                }),
                this.matrix = new ev,
                this.matrixWorld = new ev,
                this.matrixAutoUpdate = eG.DefaultMatrixAutoUpdate,
                this.matrixWorldNeedsUpdate = !1,
                this.matrixWorldAutoUpdate = eG.DefaultMatrixWorldAutoUpdate,
                this.layers = new eC,
                this.visible = !0,
                this.castShadow = !1,
                this.receiveShadow = !1,
                this.frustumCulled = !0,
                this.renderOrder = 0,
                this.animations = [],
                this.userData = {}
            }
            onBeforeRender() {}
            onAfterRender() {}
            applyMatrix4(e) {
                this.matrixAutoUpdate && this.updateMatrix(),
                this.matrix.premultiply(e),
                this.matrix.decompose(this.position, this.quaternion, this.scale)
            }
            applyQuaternion(e) {
                return this.quaternion.premultiply(e),
                this
            }
            setRotationFromAxisAngle(e, t) {
                this.quaternion.setFromAxisAngle(e, t)
            }
            setRotationFromEuler(e) {
                this.quaternion.setFromEuler(e, !0)
            }
            setRotationFromMatrix(e) {
                this.quaternion.setFromRotationMatrix(e)
            }
            setRotationFromQuaternion(e) {
                this.quaternion.copy(e)
            }
            rotateOnAxis(e, t) {
                return eR.setFromAxisAngle(e, t),
                this.quaternion.multiply(eR),
                this
            }
            rotateOnWorldAxis(e, t) {
                return eR.setFromAxisAngle(e, t),
                this.quaternion.premultiply(eR),
                this
            }
            rotateX(e) {
                return this.rotateOnAxis(eU, e)
            }
            rotateY(e) {
                return this.rotateOnAxis(eF, e)
            }
            rotateZ(e) {
                return this.rotateOnAxis(eB, e)
            }
            translateOnAxis(e, t) {
                return eP.copy(e).applyQuaternion(this.quaternion),
                this.position.add(eP.multiplyScalar(t)),
                this
            }
            translateX(e) {
                return this.translateOnAxis(eU, e)
            }
            translateY(e) {
                return this.translateOnAxis(eF, e)
            }
            translateZ(e) {
                return this.translateOnAxis(eB, e)
            }
            localToWorld(e) {
                return this.updateWorldMatrix(!0, !1),
                e.applyMatrix4(this.matrixWorld)
            }
            worldToLocal(e) {
                return this.updateWorldMatrix(!0, !1),
                e.applyMatrix4(eD.copy(this.matrixWorld).invert())
            }
            lookAt(e, t, i) {
                e.isVector3 ? eI.copy(e) : eI.set(e, t, i);
                let n = this.parent;
                this.updateWorldMatrix(!0, !1),
                eN.setFromMatrixPosition(this.matrixWorld),
                this.isCamera || this.isLight ? eD.lookAt(eN, eI, this.up) : eD.lookAt(eI, eN, this.up),
                this.quaternion.setFromRotationMatrix(eD),
                n && (eD.extractRotation(n.matrixWorld),
                eR.setFromRotationMatrix(eD),
                this.quaternion.premultiply(eR.invert()))
            }
            add(e) {
                if (arguments.length > 1) {
                    for (let e = 0; e < arguments.length; e++)
                        this.add(arguments[e]);
                    return this
                }
                return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e),
                this) : (e && e.isObject3D ? (null !== e.parent && e.parent.remove(e),
                e.parent = this,
                this.children.push(e),
                e.dispatchEvent(eV)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e),
                this)
            }
            remove(e) {
                if (arguments.length > 1) {
                    for (let e = 0; e < arguments.length; e++)
                        this.remove(arguments[e]);
                    return this
                }
                let t = this.children.indexOf(e);
                return -1 !== t && (e.parent = null,
                this.children.splice(t, 1),
                e.dispatchEvent(ek)),
                this
            }
            removeFromParent() {
                let e = this.parent;
                return null !== e && e.remove(this),
                this
            }
            clear() {
                for (let e = 0; e < this.children.length; e++) {
                    let t = this.children[e];
                    t.parent = null,
                    t.dispatchEvent(ek)
                }
                return this.children.length = 0,
                this
            }
            attach(e) {
                return this.updateWorldMatrix(!0, !1),
                eD.copy(this.matrixWorld).invert(),
                null !== e.parent && (e.parent.updateWorldMatrix(!0, !1),
                eD.multiply(e.parent.matrixWorld)),
                e.applyMatrix4(eD),
                this.add(e),
                e.updateWorldMatrix(!1, !0),
                this
            }
            getObjectById(e) {
                return this.getObjectByProperty("id", e)
            }
            getObjectByName(e) {
                return this.getObjectByProperty("name", e)
            }
            getObjectByProperty(e, t) {
                if (this[e] === t)
                    return this;
                for (let i = 0, n = this.children.length; i < n; i++) {
                    let n = this.children[i]
                      , r = n.getObjectByProperty(e, t);
                    if (void 0 !== r)
                        return r
                }
            }
            getObjectsByProperty(e, t) {
                let i = [];
                this[e] === t && i.push(this);
                for (let n = 0, r = this.children.length; n < r; n++) {
                    let r = this.children[n].getObjectsByProperty(e, t);
                    r.length > 0 && (i = i.concat(r))
                }
                return i
            }
            getWorldPosition(e) {
                return this.updateWorldMatrix(!0, !1),
                e.setFromMatrixPosition(this.matrixWorld)
            }
            getWorldQuaternion(e) {
                return this.updateWorldMatrix(!0, !1),
                this.matrixWorld.decompose(eN, e, eO),
                e
            }
            getWorldScale(e) {
                return this.updateWorldMatrix(!0, !1),
                this.matrixWorld.decompose(eN, ez, e),
                e
            }
            getWorldDirection(e) {
                this.updateWorldMatrix(!0, !1);
                let t = this.matrixWorld.elements;
                return e.set(t[8], t[9], t[10]).normalize()
            }
            raycast() {}
            traverse(e) {
                e(this);
                let t = this.children;
                for (let i = 0, n = t.length; i < n; i++)
                    t[i].traverse(e)
            }
            traverseVisible(e) {
                if (!1 === this.visible)
                    return;
                e(this);
                let t = this.children;
                for (let i = 0, n = t.length; i < n; i++)
                    t[i].traverseVisible(e)
            }
            traverseAncestors(e) {
                let t = this.parent;
                null !== t && (e(t),
                t.traverseAncestors(e))
            }
            updateMatrix() {
                this.matrix.compose(this.position, this.quaternion, this.scale),
                this.matrixWorldNeedsUpdate = !0
            }
            updateMatrixWorld(e) {
                this.matrixAutoUpdate && this.updateMatrix(),
                (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
                this.matrixWorldNeedsUpdate = !1,
                e = !0);
                let t = this.children;
                for (let i = 0, n = t.length; i < n; i++) {
                    let n = t[i];
                    (!0 === n.matrixWorldAutoUpdate || !0 === e) && n.updateMatrixWorld(e)
                }
            }
            updateWorldMatrix(e, t) {
                let i = this.parent;
                if (!0 === e && null !== i && !0 === i.matrixWorldAutoUpdate && i.updateWorldMatrix(!0, !1),
                this.matrixAutoUpdate && this.updateMatrix(),
                null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
                !0 === t) {
                    let e = this.children;
                    for (let t = 0, i = e.length; t < i; t++) {
                        let i = e[t];
                        !0 === i.matrixWorldAutoUpdate && i.updateWorldMatrix(!1, !0)
                    }
                }
            }
            toJSON(e) {
                let t = void 0 === e || "string" == typeof e
                  , i = {};
                t && (e = {
                    geometries: {},
                    materials: {},
                    textures: {},
                    images: {},
                    shapes: {},
                    skeletons: {},
                    animations: {},
                    nodes: {}
                },
                i.metadata = {
                    version: 4.5,
                    type: "Object",
                    generator: "Object3D.toJSON"
                });
                let n = {};
                function r(t, i) {
                    return void 0 === t[i.uuid] && (t[i.uuid] = i.toJSON(e)),
                    i.uuid
                }
                if (n.uuid = this.uuid,
                n.type = this.type,
                "" !== this.name && (n.name = this.name),
                !0 === this.castShadow && (n.castShadow = !0),
                !0 === this.receiveShadow && (n.receiveShadow = !0),
                !1 === this.visible && (n.visible = !1),
                !1 === this.frustumCulled && (n.frustumCulled = !1),
                0 !== this.renderOrder && (n.renderOrder = this.renderOrder),
                Object.keys(this.userData).length > 0 && (n.userData = this.userData),
                n.layers = this.layers.mask,
                n.matrix = this.matrix.toArray(),
                !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1),
                this.isInstancedMesh && (n.type = "InstancedMesh",
                n.count = this.count,
                n.instanceMatrix = this.instanceMatrix.toJSON(),
                null !== this.instanceColor && (n.instanceColor = this.instanceColor.toJSON())),
                this.isScene)
                    this.background && (this.background.isColor ? n.background = this.background.toJSON() : this.background.isTexture && (n.background = this.background.toJSON(e).uuid)),
                    this.environment && this.environment.isTexture && !0 !== this.environment.isRenderTargetTexture && (n.environment = this.environment.toJSON(e).uuid);
                else if (this.isMesh || this.isLine || this.isPoints) {
                    n.geometry = r(e.geometries, this.geometry);
                    let t = this.geometry.parameters;
                    if (void 0 !== t && void 0 !== t.shapes) {
                        let i = t.shapes;
                        if (Array.isArray(i))
                            for (let t = 0, n = i.length; t < n; t++) {
                                let n = i[t];
                                r(e.shapes, n)
                            }
                        else
                            r(e.shapes, i)
                    }
                }
                if (this.isSkinnedMesh && (n.bindMode = this.bindMode,
                n.bindMatrix = this.bindMatrix.toArray(),
                void 0 !== this.skeleton && (r(e.skeletons, this.skeleton),
                n.skeleton = this.skeleton.uuid)),
                void 0 !== this.material) {
                    if (Array.isArray(this.material)) {
                        let t = [];
                        for (let i = 0, n = this.material.length; i < n; i++)
                            t.push(r(e.materials, this.material[i]));
                        n.material = t
                    } else
                        n.material = r(e.materials, this.material)
                }
                if (this.children.length > 0) {
                    n.children = [];
                    for (let t = 0; t < this.children.length; t++)
                        n.children.push(this.children[t].toJSON(e).object)
                }
                if (this.animations.length > 0) {
                    n.animations = [];
                    for (let t = 0; t < this.animations.length; t++) {
                        let i = this.animations[t];
                        n.animations.push(r(e.animations, i))
                    }
                }
                if (t) {
                    let t = a(e.geometries)
                      , n = a(e.materials)
                      , r = a(e.textures)
                      , s = a(e.images)
                      , o = a(e.shapes)
                      , l = a(e.skeletons)
                      , h = a(e.animations)
                      , u = a(e.nodes);
                    t.length > 0 && (i.geometries = t),
                    n.length > 0 && (i.materials = n),
                    r.length > 0 && (i.textures = r),
                    s.length > 0 && (i.images = s),
                    o.length > 0 && (i.shapes = o),
                    l.length > 0 && (i.skeletons = l),
                    h.length > 0 && (i.animations = h),
                    u.length > 0 && (i.nodes = u)
                }
                return i.object = n,
                i;
                function a(e) {
                    let t = [];
                    for (let i in e) {
                        let n = e[i];
                        delete n.metadata,
                        t.push(n)
                    }
                    return t
                }
            }
            clone(e) {
                return new this.constructor().copy(this, e)
            }
            copy(e, t=!0) {
                if (this.name = e.name,
                this.up.copy(e.up),
                this.position.copy(e.position),
                this.rotation.order = e.rotation.order,
                this.quaternion.copy(e.quaternion),
                this.scale.copy(e.scale),
                this.matrix.copy(e.matrix),
                this.matrixWorld.copy(e.matrixWorld),
                this.matrixAutoUpdate = e.matrixAutoUpdate,
                this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate,
                this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate,
                this.layers.mask = e.layers.mask,
                this.visible = e.visible,
                this.castShadow = e.castShadow,
                this.receiveShadow = e.receiveShadow,
                this.frustumCulled = e.frustumCulled,
                this.renderOrder = e.renderOrder,
                this.userData = JSON.parse(JSON.stringify(e.userData)),
                !0 === t)
                    for (let t = 0; t < e.children.length; t++) {
                        let i = e.children[t];
                        this.add(i.clone())
                    }
                return this
            }
        }
        eG.DefaultUp = new G(0,1,0),
        eG.DefaultMatrixAutoUpdate = !0,
        eG.DefaultMatrixWorldAutoUpdate = !0;
        let eH = new G
          , eW = new G
          , ej = new G
          , eq = new G
          , eX = new G
          , eJ = new G
          , eY = new G
          , eZ = new G
          , eK = new G
          , eQ = new G;
        class e$ {
            constructor(e=new G, t=new G, i=new G) {
                this.a = e,
                this.b = t,
                this.c = i
            }
            static getNormal(e, t, i, n) {
                n.subVectors(i, t),
                eH.subVectors(e, t),
                n.cross(eH);
                let r = n.lengthSq();
                return r > 0 ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0)
            }
            static getBarycoord(e, t, i, n, r) {
                eH.subVectors(n, t),
                eW.subVectors(i, t),
                ej.subVectors(e, t);
                let a = eH.dot(eH)
                  , s = eH.dot(eW)
                  , o = eH.dot(ej)
                  , l = eW.dot(eW)
                  , h = eW.dot(ej)
                  , u = a * l - s * s;
                if (0 === u)
                    return r.set(-2, -1, -1);
                let c = 1 / u
                  , d = (l * o - s * h) * c
                  , p = (a * h - s * o) * c;
                return r.set(1 - d - p, p, d)
            }
            static containsPoint(e, t, i, n) {
                return this.getBarycoord(e, t, i, n, eq),
                eq.x >= 0 && eq.y >= 0 && eq.x + eq.y <= 1
            }
            static getUV(e, t, i, n, r, a, s, o) {
                return this.getBarycoord(e, t, i, n, eq),
                o.set(0, 0),
                o.addScaledVector(r, eq.x),
                o.addScaledVector(a, eq.y),
                o.addScaledVector(s, eq.z),
                o
            }
            static isFrontFacing(e, t, i, n) {
                return eH.subVectors(i, t),
                eW.subVectors(e, t),
                0 > eH.cross(eW).dot(n)
            }
            set(e, t, i) {
                return this.a.copy(e),
                this.b.copy(t),
                this.c.copy(i),
                this
            }
            setFromPointsAndIndices(e, t, i, n) {
                return this.a.copy(e[t]),
                this.b.copy(e[i]),
                this.c.copy(e[n]),
                this
            }
            setFromAttributeAndIndices(e, t, i, n) {
                return this.a.fromBufferAttribute(e, t),
                this.b.fromBufferAttribute(e, i),
                this.c.fromBufferAttribute(e, n),
                this
            }
            clone() {
                return new this.constructor().copy(this)
            }
            copy(e) {
                return this.a.copy(e.a),
                this.b.copy(e.b),
                this.c.copy(e.c),
                this
            }
            getArea() {
                return eH.subVectors(this.c, this.b),
                eW.subVectors(this.a, this.b),
                .5 * eH.cross(eW).length()
            }
            getMidpoint(e) {
                return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
            }
            getNormal(e) {
                return e$.getNormal(this.a, this.b, this.c, e)
            }
            getPlane(e) {
                return e.setFromCoplanarPoints(this.a, this.b, this.c)
            }
            getBarycoord(e, t) {
                return e$.getBarycoord(e, this.a, this.b, this.c, t)
            }
            getUV(e, t, i, n, r) {
                return e$.getUV(e, this.a, this.b, this.c, t, i, n, r)
            }
            containsPoint(e) {
                return e$.containsPoint(e, this.a, this.b, this.c)
            }
            isFrontFacing(e) {
                return e$.isFrontFacing(this.a, this.b, this.c, e)
            }
            intersectsBox(e) {
                return e.intersectsTriangle(this)
            }
            closestPointToPoint(e, t) {
                let i, n;
                let r = this.a
                  , a = this.b
                  , s = this.c;
                eX.subVectors(a, r),
                eJ.subVectors(s, r),
                eZ.subVectors(e, r);
                let o = eX.dot(eZ)
                  , l = eJ.dot(eZ);
                if (o <= 0 && l <= 0)
                    return t.copy(r);
                eK.subVectors(e, a);
                let h = eX.dot(eK)
                  , u = eJ.dot(eK);
                if (h >= 0 && u <= h)
                    return t.copy(a);
                let c = o * u - h * l;
                if (c <= 0 && o >= 0 && h <= 0)
                    return i = o / (o - h),
                    t.copy(r).addScaledVector(eX, i);
                eQ.subVectors(e, s);
                let d = eX.dot(eQ)
                  , p = eJ.dot(eQ);
                if (p >= 0 && d <= p)
                    return t.copy(s);
                let f = d * l - o * p;
                if (f <= 0 && l >= 0 && p <= 0)
                    return n = l / (l - p),
                    t.copy(r).addScaledVector(eJ, n);
                let m = h * p - d * u;
                if (m <= 0 && u - h >= 0 && d - p >= 0)
                    return eY.subVectors(s, a),
                    n = (u - h) / (u - h + (d - p)),
                    t.copy(a).addScaledVector(eY, n);
                let g = 1 / (m + f + c);
                return i = f * g,
                n = c * g,
                t.copy(r).addScaledVector(eX, i).addScaledVector(eJ, n)
            }
            equals(e) {
                return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
            }
        }
        let e0 = 0;
        class e1 extends o {
            constructor() {
                super(),
                this.isMaterial = !0,
                Object.defineProperty(this, "id", {
                    value: e0++
                }),
                this.uuid = c(),
                this.name = "",
                this.type = "Material",
                this.blending = 1,
                this.side = 0,
                this.vertexColors = !1,
                this.opacity = 1,
                this.transparent = !1,
                this.blendSrc = 204,
                this.blendDst = 205,
                this.blendEquation = 100,
                this.blendSrcAlpha = null,
                this.blendDstAlpha = null,
                this.blendEquationAlpha = null,
                this.depthFunc = 3,
                this.depthTest = !0,
                this.depthWrite = !0,
                this.stencilWriteMask = 255,
                this.stencilFunc = 519,
                this.stencilRef = 0,
                this.stencilFuncMask = 255,
                this.stencilFail = 7680,
                this.stencilZFail = 7680,
                this.stencilZPass = 7680,
                this.stencilWrite = !1,
                this.clippingPlanes = null,
                this.clipIntersection = !1,
                this.clipShadows = !1,
                this.shadowSide = null,
                this.colorWrite = !0,
                this.precision = null,
                this.polygonOffset = !1,
                this.polygonOffsetFactor = 0,
                this.polygonOffsetUnits = 0,
                this.dithering = !1,
                this.alphaToCoverage = !1,
                this.premultipliedAlpha = !1,
                this.visible = !0,
                this.toneMapped = !0,
                this.userData = {},
                this.version = 0,
                this._alphaTest = 0
            }
            get alphaTest() {
                return this._alphaTest
            }
            set alphaTest(e) {
                this._alphaTest > 0 != e > 0 && this.version++,
                this._alphaTest = e
            }
            onBuild() {}
            onBeforeRender() {}
            onBeforeCompile() {}
            customProgramCacheKey() {
                return this.onBeforeCompile.toString()
            }
            setValues(e) {
                if (void 0 !== e)
                    for (let t in e) {
                        let i = e[t];
                        if (void 0 === i) {
                            console.warn("THREE.Material: '" + t + "' parameter is undefined.");
                            continue
                        }
                        let n = this[t];
                        if (void 0 === n) {
                            console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
                            continue
                        }
                        n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[t] = i
                    }
            }
            toJSON(e) {
                let t = void 0 === e || "string" == typeof e;
                t && (e = {
                    textures: {},
                    images: {}
                });
                let i = {
                    metadata: {
                        version: 4.5,
                        type: "Material",
                        generator: "Material.toJSON"
                    }
                };
                function n(e) {
                    let t = [];
                    for (let i in e) {
                        let n = e[i];
                        delete n.metadata,
                        t.push(n)
                    }
                    return t
                }
                if (i.uuid = this.uuid,
                i.type = this.type,
                "" !== this.name && (i.name = this.name),
                this.color && this.color.isColor && (i.color = this.color.getHex()),
                void 0 !== this.roughness && (i.roughness = this.roughness),
                void 0 !== this.metalness && (i.metalness = this.metalness),
                void 0 !== this.sheen && (i.sheen = this.sheen),
                this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()),
                void 0 !== this.sheenRoughness && (i.sheenRoughness = this.sheenRoughness),
                this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()),
                this.emissiveIntensity && 1 !== this.emissiveIntensity && (i.emissiveIntensity = this.emissiveIntensity),
                this.specular && this.specular.isColor && (i.specular = this.specular.getHex()),
                void 0 !== this.specularIntensity && (i.specularIntensity = this.specularIntensity),
                this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()),
                void 0 !== this.shininess && (i.shininess = this.shininess),
                void 0 !== this.clearcoat && (i.clearcoat = this.clearcoat),
                void 0 !== this.clearcoatRoughness && (i.clearcoatRoughness = this.clearcoatRoughness),
                this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
                this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
                this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid,
                i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
                void 0 !== this.iridescence && (i.iridescence = this.iridescence),
                void 0 !== this.iridescenceIOR && (i.iridescenceIOR = this.iridescenceIOR),
                void 0 !== this.iridescenceThicknessRange && (i.iridescenceThicknessRange = this.iridescenceThicknessRange),
                this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
                this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid),
                this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid),
                this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid),
                this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid),
                this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid,
                i.lightMapIntensity = this.lightMapIntensity),
                this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid,
                i.aoMapIntensity = this.aoMapIntensity),
                this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid,
                i.bumpScale = this.bumpScale),
                this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid,
                i.normalMapType = this.normalMapType,
                i.normalScale = this.normalScale.toArray()),
                this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid,
                i.displacementScale = this.displacementScale,
                i.displacementBias = this.displacementBias),
                this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid),
                this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid),
                this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid),
                this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid),
                this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
                this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(e).uuid),
                this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid,
                void 0 !== this.combine && (i.combine = this.combine)),
                void 0 !== this.envMapIntensity && (i.envMapIntensity = this.envMapIntensity),
                void 0 !== this.reflectivity && (i.reflectivity = this.reflectivity),
                void 0 !== this.refractionRatio && (i.refractionRatio = this.refractionRatio),
                this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid),
                void 0 !== this.transmission && (i.transmission = this.transmission),
                this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid),
                void 0 !== this.thickness && (i.thickness = this.thickness),
                this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid),
                void 0 !== this.attenuationDistance && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance),
                void 0 !== this.attenuationColor && (i.attenuationColor = this.attenuationColor.getHex()),
                void 0 !== this.size && (i.size = this.size),
                null !== this.shadowSide && (i.shadowSide = this.shadowSide),
                void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation),
                1 !== this.blending && (i.blending = this.blending),
                0 !== this.side && (i.side = this.side),
                this.vertexColors && (i.vertexColors = !0),
                this.opacity < 1 && (i.opacity = this.opacity),
                !0 === this.transparent && (i.transparent = this.transparent),
                i.depthFunc = this.depthFunc,
                i.depthTest = this.depthTest,
                i.depthWrite = this.depthWrite,
                i.colorWrite = this.colorWrite,
                i.stencilWrite = this.stencilWrite,
                i.stencilWriteMask = this.stencilWriteMask,
                i.stencilFunc = this.stencilFunc,
                i.stencilRef = this.stencilRef,
                i.stencilFuncMask = this.stencilFuncMask,
                i.stencilFail = this.stencilFail,
                i.stencilZFail = this.stencilZFail,
                i.stencilZPass = this.stencilZPass,
                void 0 !== this.rotation && 0 !== this.rotation && (i.rotation = this.rotation),
                !0 === this.polygonOffset && (i.polygonOffset = !0),
                0 !== this.polygonOffsetFactor && (i.polygonOffsetFactor = this.polygonOffsetFactor),
                0 !== this.polygonOffsetUnits && (i.polygonOffsetUnits = this.polygonOffsetUnits),
                void 0 !== this.linewidth && 1 !== this.linewidth && (i.linewidth = this.linewidth),
                void 0 !== this.dashSize && (i.dashSize = this.dashSize),
                void 0 !== this.gapSize && (i.gapSize = this.gapSize),
                void 0 !== this.scale && (i.scale = this.scale),
                !0 === this.dithering && (i.dithering = !0),
                this.alphaTest > 0 && (i.alphaTest = this.alphaTest),
                !0 === this.alphaToCoverage && (i.alphaToCoverage = this.alphaToCoverage),
                !0 === this.premultipliedAlpha && (i.premultipliedAlpha = this.premultipliedAlpha),
                !0 === this.wireframe && (i.wireframe = this.wireframe),
                this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth),
                "round" !== this.wireframeLinecap && (i.wireframeLinecap = this.wireframeLinecap),
                "round" !== this.wireframeLinejoin && (i.wireframeLinejoin = this.wireframeLinejoin),
                !0 === this.flatShading && (i.flatShading = this.flatShading),
                !1 === this.visible && (i.visible = !1),
                !1 === this.toneMapped && (i.toneMapped = !1),
                !1 === this.fog && (i.fog = !1),
                Object.keys(this.userData).length > 0 && (i.userData = this.userData),
                t) {
                    let t = n(e.textures)
                      , r = n(e.images);
                    t.length > 0 && (i.textures = t),
                    r.length > 0 && (i.images = r)
                }
                return i
            }
            clone() {
                return new this.constructor().copy(this)
            }
            copy(e) {
                this.name = e.name,
                this.blending = e.blending,
                this.side = e.side,
                this.vertexColors = e.vertexColors,
                this.opacity = e.opacity,
                this.transparent = e.transparent,
                this.blendSrc = e.blendSrc,
                this.blendDst = e.blendDst,
                this.blendEquation = e.blendEquation,
                this.blendSrcAlpha = e.blendSrcAlpha,
                this.blendDstAlpha = e.blendDstAlpha,
                this.blendEquationAlpha = e.blendEquationAlpha,
                this.depthFunc = e.depthFunc,
                this.depthTest = e.depthTest,
                this.depthWrite = e.depthWrite,
                this.stencilWriteMask = e.stencilWriteMask,
                this.stencilFunc = e.stencilFunc,
                this.stencilRef = e.stencilRef,
                this.stencilFuncMask = e.stencilFuncMask,
                this.stencilFail = e.stencilFail,
                this.stencilZFail = e.stencilZFail,
                this.stencilZPass = e.stencilZPass,
                this.stencilWrite = e.stencilWrite;
                let t = e.clippingPlanes
                  , i = null;
                if (null !== t) {
                    let e = t.length;
                    i = Array(e);
                    for (let n = 0; n !== e; ++n)
                        i[n] = t[n].clone()
                }
                return this.clippingPlanes = i,
                this.clipIntersection = e.clipIntersection,
                this.clipShadows = e.clipShadows,
                this.shadowSide = e.shadowSide,
                this.colorWrite = e.colorWrite,
                this.precision = e.precision,
                this.polygonOffset = e.polygonOffset,
                this.polygonOffsetFactor = e.polygonOffsetFactor,
                this.polygonOffsetUnits = e.polygonOffsetUnits,
                this.dithering = e.dithering,
                this.alphaTest = e.alphaTest,
                this.alphaToCoverage = e.alphaToCoverage,
                this.premultipliedAlpha = e.premultipliedAlpha,
                this.visible = e.visible,
                this.toneMapped = e.toneMapped,
                this.userData = JSON.parse(JSON.stringify(e.userData)),
                this
            }
            dispose() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
            set needsUpdate(e) {
                !0 === e && this.version++
            }
        }
        class e3 extends e1 {
            constructor(e) {
                super(),
                this.isMeshBasicMaterial = !0,
                this.type = "MeshBasicMaterial",
                this.color = new D(16777215),
                this.map = null,
                this.lightMap = null,
                this.lightMapIntensity = 1,
                this.aoMap = null,
                this.aoMapIntensity = 1,
                this.specularMap = null,
                this.alphaMap = null,
                this.envMap = null,
                this.combine = 0,
                this.reflectivity = 1,
                this.refractionRatio = .98,
                this.wireframe = !1,
                this.wireframeLinewidth = 1,
                this.wireframeLinecap = "round",
                this.wireframeLinejoin = "round",
                this.fog = !0,
                this.setValues(e)
            }
            copy(e) {
                return super.copy(e),
                this.color.copy(e.color),
                this.map = e.map,
                this.lightMap = e.lightMap,
                this.lightMapIntensity = e.lightMapIntensity,
                this.aoMap = e.aoMap,
                this.aoMapIntensity = e.aoMapIntensity,
                this.specularMap = e.specularMap,
                this.alphaMap = e.alphaMap,
                this.envMap = e.envMap,
                this.combine = e.combine,
                this.reflectivity = e.reflectivity,
                this.refractionRatio = e.refractionRatio,
                this.wireframe = e.wireframe,
                this.wireframeLinewidth = e.wireframeLinewidth,
                this.wireframeLinecap = e.wireframeLinecap,
                this.wireframeLinejoin = e.wireframeLinejoin,
                this.fog = e.fog,
                this
            }
        }
        let e2 = new G
          , e4 = new v;
        class e5 {
            constructor(e, t, i=!1) {
                if (Array.isArray(e))
                    throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
                this.isBufferAttribute = !0,
                this.name = "",
                this.array = e,
                this.itemSize = t,
                this.count = void 0 !== e ? e.length / t : 0,
                this.normalized = i,
                this.usage = 35044,
                this.updateRange = {
                    offset: 0,
                    count: -1
                },
                this.version = 0
            }
            onUploadCallback() {}
            set needsUpdate(e) {
                !0 === e && this.version++
            }
            setUsage(e) {
                return this.usage = e,
                this
            }
            copy(e) {
                return this.name = e.name,
                this.array = new e.array.constructor(e.array),
                this.itemSize = e.itemSize,
                this.count = e.count,
                this.normalized = e.normalized,
                this.usage = e.usage,
                this
            }
            copyAt(e, t, i) {
                e *= this.itemSize,
                i *= t.itemSize;
                for (let n = 0, r = this.itemSize; n < r; n++)
                    this.array[e + n] = t.array[i + n];
                return this
            }
            copyArray(e) {
                return this.array.set(e),
                this
            }
            applyMatrix3(e) {
                if (2 === this.itemSize)
                    for (let t = 0, i = this.count; t < i; t++)
                        e4.fromBufferAttribute(this, t),
                        e4.applyMatrix3(e),
                        this.setXY(t, e4.x, e4.y);
                else if (3 === this.itemSize)
                    for (let t = 0, i = this.count; t < i; t++)
                        e2.fromBufferAttribute(this, t),
                        e2.applyMatrix3(e),
                        this.setXYZ(t, e2.x, e2.y, e2.z);
                return this
            }
            applyMatrix4(e) {
                for (let t = 0, i = this.count; t < i; t++)
                    e2.fromBufferAttribute(this, t),
                    e2.applyMatrix4(e),
                    this.setXYZ(t, e2.x, e2.y, e2.z);
                return this
            }
            applyNormalMatrix(e) {
                for (let t = 0, i = this.count; t < i; t++)
                    e2.fromBufferAttribute(this, t),
                    e2.applyNormalMatrix(e),
                    this.setXYZ(t, e2.x, e2.y, e2.z);
                return this
            }
            transformDirection(e) {
                for (let t = 0, i = this.count; t < i; t++)
                    e2.fromBufferAttribute(this, t),
                    e2.transformDirection(e),
                    this.setXYZ(t, e2.x, e2.y, e2.z);
                return this
            }
            set(e, t=0) {
                return this.array.set(e, t),
                this
            }
            getX(e) {
                let t = this.array[e * this.itemSize];
                return this.normalized && (t = m(t, this.array)),
                t
            }
            setX(e, t) {
                return this.normalized && (t = g(t, this.array)),
                this.array[e * this.itemSize] = t,
                this
            }
            getY(e) {
                let t = this.array[e * this.itemSize + 1];
                return this.normalized && (t = m(t, this.array)),
                t
            }
            setY(e, t) {
                return this.normalized && (t = g(t, this.array)),
                this.array[e * this.itemSize + 1] = t,
                this
            }
            getZ(e) {
                let t = this.array[e * this.itemSize + 2];
                return this.normalized && (t = m(t, this.array)),
                t
            }
            setZ(e, t) {
                return this.normalized && (t = g(t, this.array)),
                this.array[e * this.itemSize + 2] = t,
                this
            }
            getW(e) {
                let t = this.array[e * this.itemSize + 3];
                return this.normalized && (t = m(t, this.array)),
                t
            }
            setW(e, t) {
                return this.normalized && (t = g(t, this.array)),
                this.array[e * this.itemSize + 3] = t,
                this
            }
            setXY(e, t, i) {
                return e *= this.itemSize,
                this.normalized && (t = g(t, this.array),
                i = g(i, this.array)),
                this.array[e + 0] = t,
                this.array[e + 1] = i,
                this
            }
            setXYZ(e, t, i, n) {
                return e *= this.itemSize,
                this.normalized && (t = g(t, this.array),
                i = g(i, this.array),
                n = g(n, this.array)),
                this.array[e + 0] = t,
                this.array[e + 1] = i,
                this.array[e + 2] = n,
                this
            }
            setXYZW(e, t, i, n, r) {
                return e *= this.itemSize,
                this.normalized && (t = g(t, this.array),
                i = g(i, this.array),
                n = g(n, this.array),
                r = g(r, this.array)),
                this.array[e + 0] = t,
                this.array[e + 1] = i,
                this.array[e + 2] = n,
                this.array[e + 3] = r,
                this
            }
            onUpload(e) {
                return this.onUploadCallback = e,
                this
            }
            clone() {
                return new this.constructor(this.array,this.itemSize).copy(this)
            }
            toJSON() {
                let e = {
                    itemSize: this.itemSize,
                    type: this.array.constructor.name,
                    array: Array.from(this.array),
                    normalized: this.normalized
                };
                return "" !== this.name && (e.name = this.name),
                35044 !== this.usage && (e.usage = this.usage),
                (0 !== this.updateRange.offset || -1 !== this.updateRange.count) && (e.updateRange = this.updateRange),
                e
            }
            copyColorsArray() {
                console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")
            }
            copyVector2sArray() {
                console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")
            }
            copyVector3sArray() {
                console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")
            }
            copyVector4sArray() {
                console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")
            }
        }
        class e6 extends e5 {
            constructor(e, t, i) {
                super(new Uint16Array(e), t, i)
            }
        }
        class e7 extends e5 {
            constructor(e, t, i) {
                super(new Uint32Array(e), t, i)
            }
        }
        class e8 extends e5 {
            constructor(e, t, i) {
                super(new Float32Array(e), t, i)
            }
        }
        let e9 = 0
          , te = new ev
          , tt = new eG
          , ti = new G
          , tn = new j
          , tr = new j
          , ta = new G;
        class ts extends o {
            constructor() {
                super(),
                this.isBufferGeometry = !0,
                Object.defineProperty(this, "id", {
                    value: e9++
                }),
                this.uuid = c(),
                this.name = "",
                this.type = "BufferGeometry",
                this.index = null,
                this.attributes = {},
                this.morphAttributes = {},
                this.morphTargetsRelative = !1,
                this.groups = [],
                this.boundingBox = null,
                this.boundingSphere = null,
                this.drawRange = {
                    start: 0,
                    count: 1 / 0
                },
                this.userData = {}
            }
            getIndex() {
                return this.index
            }
            setIndex(e) {
                return Array.isArray(e) ? this.index = new (y(e) ? e7 : e6)(e,1) : this.index = e,
                this
            }
            getAttribute(e) {
                return this.attributes[e]
            }
            setAttribute(e, t) {
                return this.attributes[e] = t,
                this
            }
            deleteAttribute(e) {
                return delete this.attributes[e],
                this
            }
            hasAttribute(e) {
                return void 0 !== this.attributes[e]
            }
            addGroup(e, t, i=0) {
                this.groups.push({
                    start: e,
                    count: t,
                    materialIndex: i
                })
            }
            clearGroups() {
                this.groups = []
            }
            setDrawRange(e, t) {
                this.drawRange.start = e,
                this.drawRange.count = t
            }
            applyMatrix4(e) {
                let t = this.attributes.position;
                void 0 !== t && (t.applyMatrix4(e),
                t.needsUpdate = !0);
                let i = this.attributes.normal;
                if (void 0 !== i) {
                    let t = new _().getNormalMatrix(e);
                    i.applyNormalMatrix(t),
                    i.needsUpdate = !0
                }
                let n = this.attributes.tangent;
                return void 0 !== n && (n.transformDirection(e),
                n.needsUpdate = !0),
                null !== this.boundingBox && this.computeBoundingBox(),
                null !== this.boundingSphere && this.computeBoundingSphere(),
                this
            }
            applyQuaternion(e) {
                return te.makeRotationFromQuaternion(e),
                this.applyMatrix4(te),
                this
            }
            rotateX(e) {
                return te.makeRotationX(e),
                this.applyMatrix4(te),
                this
            }
            rotateY(e) {
                return te.makeRotationY(e),
                this.applyMatrix4(te),
                this
            }
            rotateZ(e) {
                return te.makeRotationZ(e),
                this.applyMatrix4(te),
                this
            }
            translate(e, t, i) {
                return te.makeTranslation(e, t, i),
                this.applyMatrix4(te),
                this
            }
            scale(e, t, i) {
                return te.makeScale(e, t, i),
                this.applyMatrix4(te),
                this
            }
            lookAt(e) {
                return tt.lookAt(e),
                tt.updateMatrix(),
                this.applyMatrix4(tt.matrix),
                this
            }
            center() {
                return this.computeBoundingBox(),
                this.boundingBox.getCenter(ti).negate(),
                this.translate(ti.x, ti.y, ti.z),
                this
            }
            setFromPoints(e) {
                let t = [];
                for (let i = 0, n = e.length; i < n; i++) {
                    let n = e[i];
                    t.push(n.x, n.y, n.z || 0)
                }
                return this.setAttribute("position", new e8(t,3)),
                this
            }
            computeBoundingBox() {
                null === this.boundingBox && (this.boundingBox = new j);
                let e = this.attributes.position
                  , t = this.morphAttributes.position;
                if (e && e.isGLBufferAttribute) {
                    console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this),
                    this.boundingBox.set(new G(-1 / 0,-1 / 0,-1 / 0), new G(Infinity,Infinity,Infinity));
                    return
                }
                if (void 0 !== e) {
                    if (this.boundingBox.setFromBufferAttribute(e),
                    t)
                        for (let e = 0, i = t.length; e < i; e++) {
                            let i = t[e];
                            tn.setFromBufferAttribute(i),
                            this.morphTargetsRelative ? (ta.addVectors(this.boundingBox.min, tn.min),
                            this.boundingBox.expandByPoint(ta),
                            ta.addVectors(this.boundingBox.max, tn.max),
                            this.boundingBox.expandByPoint(ta)) : (this.boundingBox.expandByPoint(tn.min),
                            this.boundingBox.expandByPoint(tn.max))
                        }
                } else
                    this.boundingBox.makeEmpty();
                (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
            }
            computeBoundingSphere() {
                null === this.boundingSphere && (this.boundingSphere = new eh);
                let e = this.attributes.position
                  , t = this.morphAttributes.position;
                if (e && e.isGLBufferAttribute) {
                    console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this),
                    this.boundingSphere.set(new G, 1 / 0);
                    return
                }
                if (e) {
                    let i = this.boundingSphere.center;
                    if (tn.setFromBufferAttribute(e),
                    t)
                        for (let e = 0, i = t.length; e < i; e++) {
                            let i = t[e];
                            tr.setFromBufferAttribute(i),
                            this.morphTargetsRelative ? (ta.addVectors(tn.min, tr.min),
                            tn.expandByPoint(ta),
                            ta.addVectors(tn.max, tr.max),
                            tn.expandByPoint(ta)) : (tn.expandByPoint(tr.min),
                            tn.expandByPoint(tr.max))
                        }
                    tn.getCenter(i);
                    let n = 0;
                    for (let t = 0, r = e.count; t < r; t++)
                        ta.fromBufferAttribute(e, t),
                        n = Math.max(n, i.distanceToSquared(ta));
                    if (t)
                        for (let r = 0, a = t.length; r < a; r++) {
                            let a = t[r]
                              , s = this.morphTargetsRelative;
                            for (let t = 0, r = a.count; t < r; t++)
                                ta.fromBufferAttribute(a, t),
                                s && (ti.fromBufferAttribute(e, t),
                                ta.add(ti)),
                                n = Math.max(n, i.distanceToSquared(ta))
                        }
                    this.boundingSphere.radius = Math.sqrt(n),
                    isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            }
            computeTangents() {
                let e = this.index
                  , t = this.attributes;
                if (null === e || void 0 === t.position || void 0 === t.normal || void 0 === t.uv) {
                    console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
                    return
                }
                let i = e.array
                  , n = t.position.array
                  , r = t.normal.array
                  , a = t.uv.array
                  , s = n.length / 3;
                !1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new e5(new Float32Array(4 * s),4));
                let o = this.getAttribute("tangent").array
                  , l = []
                  , h = [];
                for (let e = 0; e < s; e++)
                    l[e] = new G,
                    h[e] = new G;
                let u = new G
                  , c = new G
                  , d = new G
                  , p = new v
                  , f = new v
                  , m = new v
                  , g = new G
                  , _ = new G
                  , x = this.groups;
                0 === x.length && (x = [{
                    start: 0,
                    count: i.length
                }]);
                for (let e = 0, t = x.length; e < t; ++e) {
                    let t = x[e]
                      , r = t.start
                      , s = t.count;
                    for (let e = r, t = r + s; e < t; e += 3)
                        !function(e, t, i) {
                            u.fromArray(n, 3 * e),
                            c.fromArray(n, 3 * t),
                            d.fromArray(n, 3 * i),
                            p.fromArray(a, 2 * e),
                            f.fromArray(a, 2 * t),
                            m.fromArray(a, 2 * i),
                            c.sub(u),
                            d.sub(u),
                            f.sub(p),
                            m.sub(p);
                            let r = 1 / (f.x * m.y - m.x * f.y);
                            isFinite(r) && (g.copy(c).multiplyScalar(m.y).addScaledVector(d, -f.y).multiplyScalar(r),
                            _.copy(d).multiplyScalar(f.x).addScaledVector(c, -m.x).multiplyScalar(r),
                            l[e].add(g),
                            l[t].add(g),
                            l[i].add(g),
                            h[e].add(_),
                            h[t].add(_),
                            h[i].add(_))
                        }(i[e + 0], i[e + 1], i[e + 2])
                }
                let y = new G
                  , M = new G
                  , S = new G
                  , b = new G;
                function w(e) {
                    S.fromArray(r, 3 * e),
                    b.copy(S);
                    let t = l[e];
                    y.copy(t),
                    y.sub(S.multiplyScalar(S.dot(t))).normalize(),
                    M.crossVectors(b, t);
                    let i = M.dot(h[e]);
                    o[4 * e] = y.x,
                    o[4 * e + 1] = y.y,
                    o[4 * e + 2] = y.z,
                    o[4 * e + 3] = i < 0 ? -1 : 1
                }
                for (let e = 0, t = x.length; e < t; ++e) {
                    let t = x[e]
                      , n = t.start
                      , r = t.count;
                    for (let e = n, t = n + r; e < t; e += 3)
                        w(i[e + 0]),
                        w(i[e + 1]),
                        w(i[e + 2])
                }
            }
            computeVertexNormals() {
                let e = this.index
                  , t = this.getAttribute("position");
                if (void 0 !== t) {
                    let i = this.getAttribute("normal");
                    if (void 0 === i)
                        i = new e5(new Float32Array(3 * t.count),3),
                        this.setAttribute("normal", i);
                    else
                        for (let e = 0, t = i.count; e < t; e++)
                            i.setXYZ(e, 0, 0, 0);
                    let n = new G
                      , r = new G
                      , a = new G
                      , s = new G
                      , o = new G
                      , l = new G
                      , h = new G
                      , u = new G;
                    if (e)
                        for (let c = 0, d = e.count; c < d; c += 3) {
                            let d = e.getX(c + 0)
                              , p = e.getX(c + 1)
                              , f = e.getX(c + 2);
                            n.fromBufferAttribute(t, d),
                            r.fromBufferAttribute(t, p),
                            a.fromBufferAttribute(t, f),
                            h.subVectors(a, r),
                            u.subVectors(n, r),
                            h.cross(u),
                            s.fromBufferAttribute(i, d),
                            o.fromBufferAttribute(i, p),
                            l.fromBufferAttribute(i, f),
                            s.add(h),
                            o.add(h),
                            l.add(h),
                            i.setXYZ(d, s.x, s.y, s.z),
                            i.setXYZ(p, o.x, o.y, o.z),
                            i.setXYZ(f, l.x, l.y, l.z)
                        }
                    else
                        for (let e = 0, s = t.count; e < s; e += 3)
                            n.fromBufferAttribute(t, e + 0),
                            r.fromBufferAttribute(t, e + 1),
                            a.fromBufferAttribute(t, e + 2),
                            h.subVectors(a, r),
                            u.subVectors(n, r),
                            h.cross(u),
                            i.setXYZ(e + 0, h.x, h.y, h.z),
                            i.setXYZ(e + 1, h.x, h.y, h.z),
                            i.setXYZ(e + 2, h.x, h.y, h.z);
                    this.normalizeNormals(),
                    i.needsUpdate = !0
                }
            }
            merge() {
                return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),
                this
            }
            normalizeNormals() {
                let e = this.attributes.normal;
                for (let t = 0, i = e.count; t < i; t++)
                    ta.fromBufferAttribute(e, t),
                    ta.normalize(),
                    e.setXYZ(t, ta.x, ta.y, ta.z)
            }
            toNonIndexed() {
                function e(e, t) {
                    let i = e.array
                      , n = e.itemSize
                      , r = e.normalized
                      , a = new i.constructor(t.length * n)
                      , s = 0
                      , o = 0;
                    for (let r = 0, l = t.length; r < l; r++) {
                        s = e.isInterleavedBufferAttribute ? t[r] * e.data.stride + e.offset : t[r] * n;
                        for (let e = 0; e < n; e++)
                            a[o++] = i[s++]
                    }
                    return new e5(a,n,r)
                }
                if (null === this.index)
                    return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
                    this;
                let t = new ts
                  , i = this.index.array
                  , n = this.attributes;
                for (let r in n) {
                    let a = n[r]
                      , s = e(a, i);
                    t.setAttribute(r, s)
                }
                let r = this.morphAttributes;
                for (let n in r) {
                    let a = []
                      , s = r[n];
                    for (let t = 0, n = s.length; t < n; t++) {
                        let n = s[t]
                          , r = e(n, i);
                        a.push(r)
                    }
                    t.morphAttributes[n] = a
                }
                t.morphTargetsRelative = this.morphTargetsRelative;
                let a = this.groups;
                for (let e = 0, i = a.length; e < i; e++) {
                    let i = a[e];
                    t.addGroup(i.start, i.count, i.materialIndex)
                }
                return t
            }
            toJSON() {
                let e = {
                    metadata: {
                        version: 4.5,
                        type: "BufferGeometry",
                        generator: "BufferGeometry.toJSON"
                    }
                };
                if (e.uuid = this.uuid,
                e.type = this.type,
                "" !== this.name && (e.name = this.name),
                Object.keys(this.userData).length > 0 && (e.userData = this.userData),
                void 0 !== this.parameters) {
                    let t = this.parameters;
                    for (let i in t)
                        void 0 !== t[i] && (e[i] = t[i]);
                    return e
                }
                e.data = {
                    attributes: {}
                };
                let t = this.index;
                null !== t && (e.data.index = {
                    type: t.array.constructor.name,
                    array: Array.prototype.slice.call(t.array)
                });
                let i = this.attributes;
                for (let t in i) {
                    let n = i[t];
                    e.data.attributes[t] = n.toJSON(e.data)
                }
                let n = {}
                  , r = !1;
                for (let t in this.morphAttributes) {
                    let i = this.morphAttributes[t]
                      , a = [];
                    for (let t = 0, n = i.length; t < n; t++) {
                        let n = i[t];
                        a.push(n.toJSON(e.data))
                    }
                    a.length > 0 && (n[t] = a,
                    r = !0)
                }
                r && (e.data.morphAttributes = n,
                e.data.morphTargetsRelative = this.morphTargetsRelative);
                let a = this.groups;
                a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
                let s = this.boundingSphere;
                return null !== s && (e.data.boundingSphere = {
                    center: s.center.toArray(),
                    radius: s.radius
                }),
                e
            }
            clone() {
                return new this.constructor().copy(this)
            }
            copy(e) {
                this.index = null,
                this.attributes = {},
                this.morphAttributes = {},
                this.groups = [],
                this.boundingBox = null,
                this.boundingSphere = null;
                let t = {};
                this.name = e.name;
                let i = e.index;
                null !== i && this.setIndex(i.clone(t));
                let n = e.attributes;
                for (let e in n) {
                    let i = n[e];
                    this.setAttribute(e, i.clone(t))
                }
                let r = e.morphAttributes;
                for (let e in r) {
                    let i = []
                      , n = r[e];
                    for (let e = 0, r = n.length; e < r; e++)
                        i.push(n[e].clone(t));
                    this.morphAttributes[e] = i
                }
                this.morphTargetsRelative = e.morphTargetsRelative;
                let a = e.groups;
                for (let e = 0, t = a.length; e < t; e++) {
                    let t = a[e];
                    this.addGroup(t.start, t.count, t.materialIndex)
                }
                let s = e.boundingBox;
                null !== s && (this.boundingBox = s.clone());
                let o = e.boundingSphere;
                return null !== o && (this.boundingSphere = o.clone()),
                this.drawRange.start = e.drawRange.start,
                this.drawRange.count = e.drawRange.count,
                this.userData = e.userData,
                void 0 !== e.parameters && (this.parameters = Object.assign({}, e.parameters)),
                this
            }
            dispose() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }
        let to = new ev
          , tl = new class {
            constructor(e=new G, t=new G(0,0,-1)) {
                this.origin = e,
                this.direction = t
            }
            set(e, t) {
                return this.origin.copy(e),
                this.direction.copy(t),
                this
            }
            copy(e) {
                return this.origin.copy(e.origin),
                this.direction.copy(e.direction),
                this
            }
            at(e, t) {
                return t.copy(this.direction).multiplyScalar(e).add(this.origin)
            }
            lookAt(e) {
                return this.direction.copy(e).sub(this.origin).normalize(),
                this
            }
            recast(e) {
                return this.origin.copy(this.at(e, eu)),
                this
            }
            closestPointToPoint(e, t) {
                t.subVectors(e, this.origin);
                let i = t.dot(this.direction);
                return i < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(i).add(this.origin)
            }
            distanceToPoint(e) {
                return Math.sqrt(this.distanceSqToPoint(e))
            }
            distanceSqToPoint(e) {
                let t = eu.subVectors(e, this.origin).dot(this.direction);
                return t < 0 ? this.origin.distanceToSquared(e) : (eu.copy(this.direction).multiplyScalar(t).add(this.origin),
                eu.distanceToSquared(e))
            }
            distanceSqToSegment(e, t, i, n) {
                let r, a, s, o;
                ec.copy(e).add(t).multiplyScalar(.5),
                ed.copy(t).sub(e).normalize(),
                ep.copy(this.origin).sub(ec);
                let l = .5 * e.distanceTo(t)
                  , h = -this.direction.dot(ed)
                  , u = ep.dot(this.direction)
                  , c = -ep.dot(ed)
                  , d = ep.lengthSq()
                  , p = Math.abs(1 - h * h);
                if (p > 0) {
                    if (r = h * c - u,
                    a = h * u - c,
                    o = l * p,
                    r >= 0) {
                        if (a >= -o) {
                            if (a <= o) {
                                let e = 1 / p;
                                r *= e,
                                a *= e,
                                s = r * (r + h * a + 2 * u) + a * (h * r + a + 2 * c) + d
                            } else
                                s = -(r = Math.max(0, -(h * (a = l) + u))) * r + a * (a + 2 * c) + d
                        } else
                            s = -(r = Math.max(0, -(h * (a = -l) + u))) * r + a * (a + 2 * c) + d
                    } else
                        a <= -o ? (a = (r = Math.max(0, -(-h * l + u))) > 0 ? -l : Math.min(Math.max(-l, -c), l),
                        s = -r * r + a * (a + 2 * c) + d) : a <= o ? (r = 0,
                        s = (a = Math.min(Math.max(-l, -c), l)) * (a + 2 * c) + d) : (a = (r = Math.max(0, -(h * l + u))) > 0 ? l : Math.min(Math.max(-l, -c), l),
                        s = -r * r + a * (a + 2 * c) + d)
                } else
                    a = h > 0 ? -l : l,
                    s = -(r = Math.max(0, -(h * a + u))) * r + a * (a + 2 * c) + d;
                return i && i.copy(this.direction).multiplyScalar(r).add(this.origin),
                n && n.copy(ed).multiplyScalar(a).add(ec),
                s
            }
            intersectSphere(e, t) {
                eu.subVectors(e.center, this.origin);
                let i = eu.dot(this.direction)
                  , n = eu.dot(eu) - i * i
                  , r = e.radius * e.radius;
                if (n > r)
                    return null;
                let a = Math.sqrt(r - n)
                  , s = i - a
                  , o = i + a;
                return s < 0 && o < 0 ? null : s < 0 ? this.at(o, t) : this.at(s, t)
            }
            intersectsSphere(e) {
                return this.distanceSqToPoint(e.center) <= e.radius * e.radius
            }
            distanceToPlane(e) {
                let t = e.normal.dot(this.direction);
                if (0 === t)
                    return 0 === e.distanceToPoint(this.origin) ? 0 : null;
                let i = -(this.origin.dot(e.normal) + e.constant) / t;
                return i >= 0 ? i : null
            }
            intersectPlane(e, t) {
                let i = this.distanceToPlane(e);
                return null === i ? null : this.at(i, t)
            }
            intersectsPlane(e) {
                let t = e.distanceToPoint(this.origin);
                if (0 === t)
                    return !0;
                let i = e.normal.dot(this.direction);
                return i * t < 0
            }
            intersectBox(e, t) {
                let i, n, r, a, s, o;
                let l = 1 / this.direction.x
                  , h = 1 / this.direction.y
                  , u = 1 / this.direction.z
                  , c = this.origin;
                return (l >= 0 ? (i = (e.min.x - c.x) * l,
                n = (e.max.x - c.x) * l) : (i = (e.max.x - c.x) * l,
                n = (e.min.x - c.x) * l),
                h >= 0 ? (r = (e.min.y - c.y) * h,
                a = (e.max.y - c.y) * h) : (r = (e.max.y - c.y) * h,
                a = (e.min.y - c.y) * h),
                i > a || r > n) ? null : ((r > i || isNaN(i)) && (i = r),
                (a < n || isNaN(n)) && (n = a),
                u >= 0 ? (s = (e.min.z - c.z) * u,
                o = (e.max.z - c.z) * u) : (s = (e.max.z - c.z) * u,
                o = (e.min.z - c.z) * u),
                i > o || s > n) ? null : ((s > i || i != i) && (i = s),
                (o < n || n != n) && (n = o),
                n < 0) ? null : this.at(i >= 0 ? i : n, t)
            }
            intersectsBox(e) {
                return null !== this.intersectBox(e, eu)
            }
            intersectTriangle(e, t, i, n, r) {
                let a;
                ef.subVectors(t, e),
                em.subVectors(i, e),
                eg.crossVectors(ef, em);
                let s = this.direction.dot(eg);
                if (s > 0) {
                    if (n)
                        return null;
                    a = 1
                } else {
                    if (!(s < 0))
                        return null;
                    a = -1,
                    s = -s
                }
                ep.subVectors(this.origin, e);
                let o = a * this.direction.dot(em.crossVectors(ep, em));
                if (o < 0)
                    return null;
                let l = a * this.direction.dot(ef.cross(ep));
                if (l < 0 || o + l > s)
                    return null;
                let h = -a * ep.dot(eg);
                return h < 0 ? null : this.at(h / s, r)
            }
            applyMatrix4(e) {
                return this.origin.applyMatrix4(e),
                this.direction.transformDirection(e),
                this
            }
            equals(e) {
                return e.origin.equals(this.origin) && e.direction.equals(this.direction)
            }
            clone() {
                return new this.constructor().copy(this)
            }
        }
          , th = new eh
          , tu = new G
          , tc = new G
          , td = new G
          , tp = new G
          , tf = new G
          , tm = new v
          , tg = new v
          , tv = new v
          , t_ = new G
          , tx = new G;
        class ty extends eG {
            constructor(e=new ts, t=new e3) {
                super(),
                this.isMesh = !0,
                this.type = "Mesh",
                this.geometry = e,
                this.material = t,
                this.updateMorphTargets()
            }
            copy(e, t) {
                return super.copy(e, t),
                void 0 !== e.morphTargetInfluences && (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
                void 0 !== e.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)),
                this.material = e.material,
                this.geometry = e.geometry,
                this
            }
            updateMorphTargets() {
                let e = this.geometry
                  , t = e.morphAttributes
                  , i = Object.keys(t);
                if (i.length > 0) {
                    let e = t[i[0]];
                    if (void 0 !== e) {
                        this.morphTargetInfluences = [],
                        this.morphTargetDictionary = {};
                        for (let t = 0, i = e.length; t < i; t++) {
                            let i = e[t].name || String(t);
                            this.morphTargetInfluences.push(0),
                            this.morphTargetDictionary[i] = t
                        }
                    }
                }
            }
            getVertexPosition(e, t) {
                let i = this.geometry
                  , n = i.attributes.position
                  , r = i.morphAttributes.position
                  , a = i.morphTargetsRelative;
                t.fromBufferAttribute(n, e);
                let s = this.morphTargetInfluences;
                if (r && s) {
                    tf.set(0, 0, 0);
                    for (let i = 0, n = r.length; i < n; i++) {
                        let n = s[i]
                          , o = r[i];
                        0 !== n && (tp.fromBufferAttribute(o, e),
                        a ? tf.addScaledVector(tp, n) : tf.addScaledVector(tp.sub(t), n))
                    }
                    t.add(tf)
                }
                return this.isSkinnedMesh && this.boneTransform(e, t),
                t
            }
            raycast(e, t) {
                let i;
                let n = this.geometry
                  , r = this.material
                  , a = this.matrixWorld;
                if (void 0 === r || (null === n.boundingSphere && n.computeBoundingSphere(),
                th.copy(n.boundingSphere),
                th.applyMatrix4(a),
                !1 === e.ray.intersectsSphere(th)) || (to.copy(a).invert(),
                tl.copy(e.ray).applyMatrix4(to),
                null !== n.boundingBox && !1 === tl.intersectsBox(n.boundingBox)))
                    return;
                let s = n.index
                  , o = n.attributes.position
                  , l = n.attributes.uv
                  , h = n.attributes.uv2
                  , u = n.groups
                  , c = n.drawRange;
                if (null !== s) {
                    if (Array.isArray(r))
                        for (let n = 0, a = u.length; n < a; n++) {
                            let a = u[n]
                              , o = r[a.materialIndex]
                              , d = Math.max(a.start, c.start)
                              , p = Math.min(s.count, Math.min(a.start + a.count, c.start + c.count));
                            for (let n = d; n < p; n += 3) {
                                let r = s.getX(n)
                                  , u = s.getX(n + 1)
                                  , c = s.getX(n + 2);
                                (i = tM(this, o, e, tl, l, h, r, u, c)) && (i.faceIndex = Math.floor(n / 3),
                                i.face.materialIndex = a.materialIndex,
                                t.push(i))
                            }
                        }
                    else {
                        let n = Math.max(0, c.start)
                          , a = Math.min(s.count, c.start + c.count);
                        for (let o = n; o < a; o += 3) {
                            let n = s.getX(o)
                              , a = s.getX(o + 1)
                              , u = s.getX(o + 2);
                            (i = tM(this, r, e, tl, l, h, n, a, u)) && (i.faceIndex = Math.floor(o / 3),
                            t.push(i))
                        }
                    }
                } else if (void 0 !== o) {
                    if (Array.isArray(r))
                        for (let n = 0, a = u.length; n < a; n++) {
                            let a = u[n]
                              , s = r[a.materialIndex]
                              , d = Math.max(a.start, c.start)
                              , p = Math.min(o.count, Math.min(a.start + a.count, c.start + c.count));
                            for (let n = d; n < p; n += 3) {
                                let r = n
                                  , o = n + 1
                                  , u = n + 2;
                                (i = tM(this, s, e, tl, l, h, r, o, u)) && (i.faceIndex = Math.floor(n / 3),
                                i.face.materialIndex = a.materialIndex,
                                t.push(i))
                            }
                        }
                    else {
                        let n = Math.max(0, c.start)
                          , a = Math.min(o.count, c.start + c.count);
                        for (let s = n; s < a; s += 3) {
                            let n = s
                              , a = s + 1
                              , o = s + 2;
                            (i = tM(this, r, e, tl, l, h, n, a, o)) && (i.faceIndex = Math.floor(s / 3),
                            t.push(i))
                        }
                    }
                }
            }
        }
        function tM(e, t, i, n, r, a, s, o, l) {
            e.getVertexPosition(s, tu),
            e.getVertexPosition(o, tc),
            e.getVertexPosition(l, td);
            let h = function(e, t, i, n, r, a, s, o) {
                if (null === (1 === t.side ? n.intersectTriangle(s, a, r, !0, o) : n.intersectTriangle(r, a, s, 0 === t.side, o)))
                    return null;
                tx.copy(o),
                tx.applyMatrix4(e.matrixWorld);
                let l = i.ray.origin.distanceTo(tx);
                return l < i.near || l > i.far ? null : {
                    distance: l,
                    point: tx.clone(),
                    object: e
                }
            }(e, t, i, n, tu, tc, td, t_);
            if (h) {
                r && (tm.fromBufferAttribute(r, s),
                tg.fromBufferAttribute(r, o),
                tv.fromBufferAttribute(r, l),
                h.uv = e$.getUV(t_, tu, tc, td, tm, tg, tv, new v)),
                a && (tm.fromBufferAttribute(a, s),
                tg.fromBufferAttribute(a, o),
                tv.fromBufferAttribute(a, l),
                h.uv2 = e$.getUV(t_, tu, tc, td, tm, tg, tv, new v));
                let e = {
                    a: s,
                    b: o,
                    c: l,
                    normal: new G,
                    materialIndex: 0
                };
                e$.getNormal(tu, tc, td, e.normal),
                h.face = e
            }
            return h
        }
        class tS extends ts {
            constructor(e=1, t=1, i=1, n=1, r=1, a=1) {
                super(),
                this.type = "BoxGeometry",
                this.parameters = {
                    width: e,
                    height: t,
                    depth: i,
                    widthSegments: n,
                    heightSegments: r,
                    depthSegments: a
                };
                let s = this;
                n = Math.floor(n),
                r = Math.floor(r),
                a = Math.floor(a);
                let o = []
                  , l = []
                  , h = []
                  , u = []
                  , c = 0
                  , d = 0;
                function p(e, t, i, n, r, a, p, f, m, g, v) {
                    let _ = a / m
                      , x = p / g
                      , y = a / 2
                      , M = p / 2
                      , S = f / 2
                      , b = m + 1
                      , w = g + 1
                      , T = 0
                      , E = 0
                      , A = new G;
                    for (let a = 0; a < w; a++) {
                        let s = a * x - M;
                        for (let o = 0; o < b; o++) {
                            let c = o * _ - y;
                            A[e] = c * n,
                            A[t] = s * r,
                            A[i] = S,
                            l.push(A.x, A.y, A.z),
                            A[e] = 0,
                            A[t] = 0,
                            A[i] = f > 0 ? 1 : -1,
                            h.push(A.x, A.y, A.z),
                            u.push(o / m),
                            u.push(1 - a / g),
                            T += 1
                        }
                    }
                    for (let e = 0; e < g; e++)
                        for (let t = 0; t < m; t++) {
                            let i = c + t + b * e
                              , n = c + t + b * (e + 1)
                              , r = c + (t + 1) + b * (e + 1)
                              , a = c + (t + 1) + b * e;
                            o.push(i, n, a),
                            o.push(n, r, a),
                            E += 6
                        }
                    s.addGroup(d, E, v),
                    d += E,
                    c += T
                }
                p("z", "y", "x", -1, -1, i, t, e, a, r, 0),
                p("z", "y", "x", 1, -1, i, t, -e, a, r, 1),
                p("x", "z", "y", 1, 1, e, i, t, n, a, 2),
                p("x", "z", "y", 1, -1, e, i, -t, n, a, 3),
                p("x", "y", "z", 1, -1, e, t, i, n, r, 4),
                p("x", "y", "z", -1, -1, e, t, -i, n, r, 5),
                this.setIndex(o),
                this.setAttribute("position", new e8(l,3)),
                this.setAttribute("normal", new e8(h,3)),
                this.setAttribute("uv", new e8(u,2))
            }
            static fromJSON(e) {
                return new tS(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)
            }
        }
        function tb(e) {
            let t = {};
            for (let i in e)
                for (let n in t[i] = {},
                e[i]) {
                    let r = e[i][n];
                    r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? t[i][n] = r.clone() : Array.isArray(r) ? t[i][n] = r.slice() : t[i][n] = r
                }
            return t
        }
        function tw(e) {
            let t = {};
            for (let i = 0; i < e.length; i++) {
                let n = tb(e[i]);
                for (let e in n)
                    t[e] = n[e]
            }
            return t
        }
        function tT(e) {
            return null === e.getRenderTarget() && 3001 === e.outputEncoding ? r : a
        }
        let tE = {
            clone: tb,
            merge: tw
        };
        class tA extends e1 {
            constructor(e) {
                super(),
                this.isShaderMaterial = !0,
                this.type = "ShaderMaterial",
                this.defines = {},
                this.uniforms = {},
                this.uniformsGroups = [],
                this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
                this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",
                this.linewidth = 1,
                this.wireframe = !1,
                this.wireframeLinewidth = 1,
                this.fog = !1,
                this.lights = !1,
                this.clipping = !1,
                this.extensions = {
                    derivatives: !1,
                    fragDepth: !1,
                    drawBuffers: !1,
                    shaderTextureLOD: !1
                },
                this.defaultAttributeValues = {
                    color: [1, 1, 1],
                    uv: [0, 0],
                    uv2: [0, 0]
                },
                this.index0AttributeName = void 0,
                this.uniformsNeedUpdate = !1,
                this.glslVersion = null,
                void 0 !== e && this.setValues(e)
            }
            copy(e) {
                return super.copy(e),
                this.fragmentShader = e.fragmentShader,
                this.vertexShader = e.vertexShader,
                this.uniforms = tb(e.uniforms),
                this.uniformsGroups = function(e) {
                    let t = [];
                    for (let i = 0; i < e.length; i++)
                        t.push(e[i].clone());
                    return t
                }(e.uniformsGroups),
                this.defines = Object.assign({}, e.defines),
                this.wireframe = e.wireframe,
                this.wireframeLinewidth = e.wireframeLinewidth,
                this.fog = e.fog,
                this.lights = e.lights,
                this.clipping = e.clipping,
                this.extensions = Object.assign({}, e.extensions),
                this.glslVersion = e.glslVersion,
                this
            }
            toJSON(e) {
                let t = super.toJSON(e);
                for (let i in t.glslVersion = this.glslVersion,
                t.uniforms = {},
                this.uniforms) {
                    let n = this.uniforms[i]
                      , r = n.value;
                    r && r.isTexture ? t.uniforms[i] = {
                        type: "t",
                        value: r.toJSON(e).uuid
                    } : r && r.isColor ? t.uniforms[i] = {
                        type: "c",
                        value: r.getHex()
                    } : r && r.isVector2 ? t.uniforms[i] = {
                        type: "v2",
                        value: r.toArray()
                    } : r && r.isVector3 ? t.uniforms[i] = {
                        type: "v3",
                        value: r.toArray()
                    } : r && r.isVector4 ? t.uniforms[i] = {
                        type: "v4",
                        value: r.toArray()
                    } : r && r.isMatrix3 ? t.uniforms[i] = {
                        type: "m3",
                        value: r.toArray()
                    } : r && r.isMatrix4 ? t.uniforms[i] = {
                        type: "m4",
                        value: r.toArray()
                    } : t.uniforms[i] = {
                        value: r
                    }
                }
                Object.keys(this.defines).length > 0 && (t.defines = this.defines),
                t.vertexShader = this.vertexShader,
                t.fragmentShader = this.fragmentShader;
                let i = {};
                for (let e in this.extensions)
                    !0 === this.extensions[e] && (i[e] = !0);
                return Object.keys(i).length > 0 && (t.extensions = i),
                t
            }
        }
        class tC extends eG {
            constructor() {
                super(),
                this.isCamera = !0,
                this.type = "Camera",
                this.matrixWorldInverse = new ev,
                this.projectionMatrix = new ev,
                this.projectionMatrixInverse = new ev
            }
            copy(e, t) {
                return super.copy(e, t),
                this.matrixWorldInverse.copy(e.matrixWorldInverse),
                this.projectionMatrix.copy(e.projectionMatrix),
                this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
                this
            }
            getWorldDirection(e) {
                this.updateWorldMatrix(!0, !1);
                let t = this.matrixWorld.elements;
                return e.set(-t[8], -t[9], -t[10]).normalize()
            }
            updateMatrixWorld(e) {
                super.updateMatrixWorld(e),
                this.matrixWorldInverse.copy(this.matrixWorld).invert()
            }
            updateWorldMatrix(e, t) {
                super.updateWorldMatrix(e, t),
                this.matrixWorldInverse.copy(this.matrixWorld).invert()
            }
            clone() {
                return new this.constructor().copy(this)
            }
        }
        class tL extends tC {
            constructor(e=50, t=1, i=.1, n=2e3) {
                super(),
                this.isPerspectiveCamera = !0,
                this.type = "PerspectiveCamera",
                this.fov = e,
                this.zoom = 1,
                this.near = i,
                this.far = n,
                this.focus = 10,
                this.aspect = t,
                this.view = null,
                this.filmGauge = 35,
                this.filmOffset = 0,
                this.updateProjectionMatrix()
            }
            copy(e, t) {
                return super.copy(e, t),
                this.fov = e.fov,
                this.zoom = e.zoom,
                this.near = e.near,
                this.far = e.far,
                this.focus = e.focus,
                this.aspect = e.aspect,
                this.view = null === e.view ? null : Object.assign({}, e.view),
                this.filmGauge = e.filmGauge,
                this.filmOffset = e.filmOffset,
                this
            }
            setFocalLength(e) {
                let t = .5 * this.getFilmHeight() / e;
                this.fov = 2 * u * Math.atan(t),
                this.updateProjectionMatrix()
            }
            getFocalLength() {
                let e = Math.tan(.5 * h * this.fov);
                return .5 * this.getFilmHeight() / e
            }
            getEffectiveFOV() {
                return 2 * u * Math.atan(Math.tan(.5 * h * this.fov) / this.zoom)
            }
            getFilmWidth() {
                return this.filmGauge * Math.min(this.aspect, 1)
            }
            getFilmHeight() {
                return this.filmGauge / Math.max(this.aspect, 1)
            }
            setViewOffset(e, t, i, n, r, a) {
                this.aspect = e / t,
                null === this.view && (this.view = {
                    enabled: !0,
                    fullWidth: 1,
                    fullHeight: 1,
                    offsetX: 0,
                    offsetY: 0,
                    width: 1,
                    height: 1
                }),
                this.view.enabled = !0,
                this.view.fullWidth = e,
                this.view.fullHeight = t,
                this.view.offsetX = i,
                this.view.offsetY = n,
                this.view.width = r,
                this.view.height = a,
                this.updateProjectionMatrix()
            }
            clearViewOffset() {
                null !== this.view && (this.view.enabled = !1),
                this.updateProjectionMatrix()
            }
            updateProjectionMatrix() {
                let e = this.near
                  , t = e * Math.tan(.5 * h * this.fov) / this.zoom
                  , i = 2 * t
                  , n = this.aspect * i
                  , r = -.5 * n
                  , a = this.view;
                if (null !== this.view && this.view.enabled) {
                    let e = a.fullWidth
                      , s = a.fullHeight;
                    r += a.offsetX * n / e,
                    t -= a.offsetY * i / s,
                    n *= a.width / e,
                    i *= a.height / s
                }
                let s = this.filmOffset;
                0 !== s && (r += e * s / this.getFilmWidth()),
                this.projectionMatrix.makePerspective(r, r + n, t, t - i, e, this.far),
                this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
            }
            toJSON(e) {
                let t = super.toJSON(e);
                return t.object.fov = this.fov,
                t.object.zoom = this.zoom,
                t.object.near = this.near,
                t.object.far = this.far,
                t.object.focus = this.focus,
                t.object.aspect = this.aspect,
                null !== this.view && (t.object.view = Object.assign({}, this.view)),
                t.object.filmGauge = this.filmGauge,
                t.object.filmOffset = this.filmOffset,
                t
            }
        }
        class tP extends eG {
            constructor(e, t, i) {
                super(),
                this.type = "CubeCamera",
                this.renderTarget = i;
                let n = new tL(-90,1,e,t);
                n.layers = this.layers,
                n.up.set(0, 1, 0),
                n.lookAt(1, 0, 0),
                this.add(n);
                let r = new tL(-90,1,e,t);
                r.layers = this.layers,
                r.up.set(0, 1, 0),
                r.lookAt(-1, 0, 0),
                this.add(r);
                let a = new tL(-90,1,e,t);
                a.layers = this.layers,
                a.up.set(0, 0, -1),
                a.lookAt(0, 1, 0),
                this.add(a);
                let s = new tL(-90,1,e,t);
                s.layers = this.layers,
                s.up.set(0, 0, 1),
                s.lookAt(0, -1, 0),
                this.add(s);
                let o = new tL(-90,1,e,t);
                o.layers = this.layers,
                o.up.set(0, 1, 0),
                o.lookAt(0, 0, 1),
                this.add(o);
                let l = new tL(-90,1,e,t);
                l.layers = this.layers,
                l.up.set(0, 1, 0),
                l.lookAt(0, 0, -1),
                this.add(l)
            }
            update(e, t) {
                null === this.parent && this.updateMatrixWorld();
                let i = this.renderTarget
                  , [n,r,a,s,o,l] = this.children
                  , h = e.getRenderTarget()
                  , u = e.toneMapping
                  , c = e.xr.enabled;
                e.toneMapping = 0,
                e.xr.enabled = !1;
                let d = i.texture.generateMipmaps;
                i.texture.generateMipmaps = !1,
                e.setRenderTarget(i, 0),
                e.render(t, n),
                e.setRenderTarget(i, 1),
                e.render(t, r),
                e.setRenderTarget(i, 2),
                e.render(t, a),
                e.setRenderTarget(i, 3),
                e.render(t, s),
                e.setRenderTarget(i, 4),
                e.render(t, o),
                i.texture.generateMipmaps = d,
                e.setRenderTarget(i, 5),
                e.render(t, l),
                e.setRenderTarget(h),
                e.toneMapping = u,
                e.xr.enabled = c,
                i.texture.needsPMREMUpdate = !0
            }
        }
        class tR extends U {
            constructor(e, t, i, n, r, a, s, o, l, h) {
                super(e = void 0 !== e ? e : [], t = void 0 !== t ? t : 301, i, n, r, a, s, o, l, h),
                this.isCubeTexture = !0,
                this.flipY = !1
            }
            get images() {
                return this.image
            }
            set images(e) {
                this.image = e
            }
        }
        class tD extends B {
            constructor(e=1, t={}) {
                super(e, e, t),
                this.isWebGLCubeRenderTarget = !0;
                let i = {
                    width: e,
                    height: e,
                    depth: 1
                };
                this.texture = new tR([i, i, i, i, i, i],t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),
                this.texture.isRenderTargetTexture = !0,
                this.texture.generateMipmaps = void 0 !== t.generateMipmaps && t.generateMipmaps,
                this.texture.minFilter = void 0 !== t.minFilter ? t.minFilter : 1006
            }
            fromEquirectangularTexture(e, t) {
                this.texture.type = t.type,
                this.texture.encoding = t.encoding,
                this.texture.generateMipmaps = t.generateMipmaps,
                this.texture.minFilter = t.minFilter,
                this.texture.magFilter = t.magFilter;
                let i = {
                    uniforms: {
                        tEquirect: {
                            value: null
                        }
                    },
                    vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
                    fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
                }
                  , n = new tS(5,5,5)
                  , r = new tA({
                    name: "CubemapFromEquirect",
                    uniforms: tb(i.uniforms),
                    vertexShader: i.vertexShader,
                    fragmentShader: i.fragmentShader,
                    side: 1,
                    blending: 0
                });
                r.uniforms.tEquirect.value = t;
                let a = new ty(n,r)
                  , s = t.minFilter;
                1008 === t.minFilter && (t.minFilter = 1006);
                let o = new tP(1,10,this);
                return o.update(e, a),
                t.minFilter = s,
                a.geometry.dispose(),
                a.material.dispose(),
                this
            }
            clear(e, t, i, n) {
                let r = e.getRenderTarget();
                for (let r = 0; r < 6; r++)
                    e.setRenderTarget(this, r),
                    e.clear(t, i, n);
                e.setRenderTarget(r)
            }
        }
        let tI = new G
          , tN = new G
          , tO = new _;
        class tz {
            constructor(e=new G(1,0,0), t=0) {
                this.isPlane = !0,
                this.normal = e,
                this.constant = t
            }
            set(e, t) {
                return this.normal.copy(e),
                this.constant = t,
                this
            }
            setComponents(e, t, i, n) {
                return this.normal.set(e, t, i),
                this.constant = n,
                this
            }
            setFromNormalAndCoplanarPoint(e, t) {
                return this.normal.copy(e),
                this.constant = -t.dot(this.normal),
                this
            }
            setFromCoplanarPoints(e, t, i) {
                let n = tI.subVectors(i, t).cross(tN.subVectors(e, t)).normalize();
                return this.setFromNormalAndCoplanarPoint(n, e),
                this
            }
            copy(e) {
                return this.normal.copy(e.normal),
                this.constant = e.constant,
                this
            }
            normalize() {
                let e = 1 / this.normal.length();
                return this.normal.multiplyScalar(e),
                this.constant *= e,
                this
            }
            negate() {
                return this.constant *= -1,
                this.normal.negate(),
                this
            }
            distanceToPoint(e) {
                return this.normal.dot(e) + this.constant
            }
            distanceToSphere(e) {
                return this.distanceToPoint(e.center) - e.radius
            }
            projectPoint(e, t) {
                return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
            }
            intersectLine(e, t) {
                let i = e.delta(tI)
                  , n = this.normal.dot(i);
                if (0 === n)
                    return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : null;
                let r = -(e.start.dot(this.normal) + this.constant) / n;
                return r < 0 || r > 1 ? null : t.copy(i).multiplyScalar(r).add(e.start)
            }
            intersectsLine(e) {
                let t = this.distanceToPoint(e.start)
                  , i = this.distanceToPoint(e.end);
                return t < 0 && i > 0 || i < 0 && t > 0
            }
            intersectsBox(e) {
                return e.intersectsPlane(this)
            }
            intersectsSphere(e) {
                return e.intersectsPlane(this)
            }
            coplanarPoint(e) {
                return e.copy(this.normal).multiplyScalar(-this.constant)
            }
            applyMatrix4(e, t) {
                let i = t || tO.getNormalMatrix(e)
                  , n = this.coplanarPoint(tI).applyMatrix4(e)
                  , r = this.normal.applyMatrix3(i).normalize();
                return this.constant = -n.dot(r),
                this
            }
            translate(e) {
                return this.constant -= e.dot(this.normal),
                this
            }
            equals(e) {
                return e.normal.equals(this.normal) && e.constant === this.constant
            }
            clone() {
                return new this.constructor().copy(this)
            }
        }
        let tU = new eh
          , tF = new G;
        class tB {
            constructor(e=new tz, t=new tz, i=new tz, n=new tz, r=new tz, a=new tz) {
                this.planes = [e, t, i, n, r, a]
            }
            set(e, t, i, n, r, a) {
                let s = this.planes;
                return s[0].copy(e),
                s[1].copy(t),
                s[2].copy(i),
                s[3].copy(n),
                s[4].copy(r),
                s[5].copy(a),
                this
            }
            copy(e) {
                let t = this.planes;
                for (let i = 0; i < 6; i++)
                    t[i].copy(e.planes[i]);
                return this
            }
            setFromProjectionMatrix(e) {
                let t = this.planes
                  , i = e.elements
                  , n = i[0]
                  , r = i[1]
                  , a = i[2]
                  , s = i[3]
                  , o = i[4]
                  , l = i[5]
                  , h = i[6]
                  , u = i[7]
                  , c = i[8]
                  , d = i[9]
                  , p = i[10]
                  , f = i[11]
                  , m = i[12]
                  , g = i[13]
                  , v = i[14]
                  , _ = i[15];
                return t[0].setComponents(s - n, u - o, f - c, _ - m).normalize(),
                t[1].setComponents(s + n, u + o, f + c, _ + m).normalize(),
                t[2].setComponents(s + r, u + l, f + d, _ + g).normalize(),
                t[3].setComponents(s - r, u - l, f - d, _ - g).normalize(),
                t[4].setComponents(s - a, u - h, f - p, _ - v).normalize(),
                t[5].setComponents(s + a, u + h, f + p, _ + v).normalize(),
                this
            }
            intersectsObject(e) {
                let t = e.geometry;
                return null === t.boundingSphere && t.computeBoundingSphere(),
                tU.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
                this.intersectsSphere(tU)
            }
            intersectsSprite(e) {
                return tU.center.set(0, 0, 0),
                tU.radius = .7071067811865476,
                tU.applyMatrix4(e.matrixWorld),
                this.intersectsSphere(tU)
            }
            intersectsSphere(e) {
                let t = this.planes
                  , i = e.center
                  , n = -e.radius;
                for (let e = 0; e < 6; e++) {
                    let r = t[e].distanceToPoint(i);
                    if (r < n)
                        return !1
                }
                return !0
            }
            intersectsBox(e) {
                let t = this.planes;
                for (let i = 0; i < 6; i++) {
                    let n = t[i];
                    if (tF.x = n.normal.x > 0 ? e.max.x : e.min.x,
                    tF.y = n.normal.y > 0 ? e.max.y : e.min.y,
                    tF.z = n.normal.z > 0 ? e.max.z : e.min.z,
                    0 > n.distanceToPoint(tF))
                        return !1
                }
                return !0
            }
            containsPoint(e) {
                let t = this.planes;
                for (let i = 0; i < 6; i++)
                    if (0 > t[i].distanceToPoint(e))
                        return !1;
                return !0
            }
            clone() {
                return new this.constructor().copy(this)
            }
        }
        function tV() {
            let e = null
              , t = !1
              , i = null
              , n = null;
            function r(t, a) {
                i(t, a),
                n = e.requestAnimationFrame(r)
            }
            return {
                start: function() {
                    !0 !== t && null !== i && (n = e.requestAnimationFrame(r),
                    t = !0)
                },
                stop: function() {
                    e.cancelAnimationFrame(n),
                    t = !1
                },
                setAnimationLoop: function(e) {
                    i = e
                },
                setContext: function(t) {
                    e = t
                }
            }
        }
        function tk(e, t) {
            let i = t.isWebGL2
              , n = new WeakMap;
            return {
                get: function(e) {
                    return e.isInterleavedBufferAttribute && (e = e.data),
                    n.get(e)
                },
                remove: function(t) {
                    t.isInterleavedBufferAttribute && (t = t.data);
                    let i = n.get(t);
                    i && (e.deleteBuffer(i.buffer),
                    n.delete(t))
                },
                update: function(t, r) {
                    if (t.isGLBufferAttribute) {
                        let e = n.get(t);
                        (!e || e.version < t.version) && n.set(t, {
                            buffer: t.buffer,
                            type: t.type,
                            bytesPerElement: t.elementSize,
                            version: t.version
                        });
                        return
                    }
                    t.isInterleavedBufferAttribute && (t = t.data);
                    let a = n.get(t);
                    void 0 === a ? n.set(t, function(t, n) {
                        let r;
                        let a = t.array
                          , s = t.usage
                          , o = e.createBuffer();
                        if (e.bindBuffer(n, o),
                        e.bufferData(n, a, s),
                        t.onUploadCallback(),
                        a instanceof Float32Array)
                            r = 5126;
                        else if (a instanceof Uint16Array) {
                            if (t.isFloat16BufferAttribute) {
                                if (i)
                                    r = 5131;
                                else
                                    throw Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.")
                            } else
                                r = 5123
                        } else if (a instanceof Int16Array)
                            r = 5122;
                        else if (a instanceof Uint32Array)
                            r = 5125;
                        else if (a instanceof Int32Array)
                            r = 5124;
                        else if (a instanceof Int8Array)
                            r = 5120;
                        else if (a instanceof Uint8Array)
                            r = 5121;
                        else if (a instanceof Uint8ClampedArray)
                            r = 5121;
                        else
                            throw Error("THREE.WebGLAttributes: Unsupported buffer data format: " + a);
                        return {
                            buffer: o,
                            type: r,
                            bytesPerElement: a.BYTES_PER_ELEMENT,
                            version: t.version
                        }
                    }(t, r)) : a.version < t.version && (!function(t, n, r) {
                        let a = n.array
                          , s = n.updateRange;
                        e.bindBuffer(r, t),
                        -1 === s.count ? e.bufferSubData(r, 0, a) : (i ? e.bufferSubData(r, s.offset * a.BYTES_PER_ELEMENT, a, s.offset, s.count) : e.bufferSubData(r, s.offset * a.BYTES_PER_ELEMENT, a.subarray(s.offset, s.offset + s.count)),
                        s.count = -1),
                        n.onUploadCallback()
                    }(a.buffer, t, r),
                    a.version = t.version)
                }
            }
        }
        class tG extends ts {
            constructor(e=1, t=1, i=1, n=1) {
                super(),
                this.type = "PlaneGeometry",
                this.parameters = {
                    width: e,
                    height: t,
                    widthSegments: i,
                    heightSegments: n
                };
                let r = e / 2
                  , a = t / 2
                  , s = Math.floor(i)
                  , o = Math.floor(n)
                  , l = s + 1
                  , h = o + 1
                  , u = e / s
                  , c = t / o
                  , d = []
                  , p = []
                  , f = []
                  , m = [];
                for (let e = 0; e < h; e++) {
                    let t = e * c - a;
                    for (let i = 0; i < l; i++) {
                        let n = i * u - r;
                        p.push(n, -t, 0),
                        f.push(0, 0, 1),
                        m.push(i / s),
                        m.push(1 - e / o)
                    }
                }
                for (let e = 0; e < o; e++)
                    for (let t = 0; t < s; t++) {
                        let i = t + l * e
                          , n = t + l * (e + 1)
                          , r = t + 1 + l * (e + 1)
                          , a = t + 1 + l * e;
                        d.push(i, n, a),
                        d.push(n, r, a)
                    }
                this.setIndex(d),
                this.setAttribute("position", new e8(p,3)),
                this.setAttribute("normal", new e8(f,3)),
                this.setAttribute("uv", new e8(m,2))
            }
            static fromJSON(e) {
                return new tG(e.width,e.height,e.widthSegments,e.heightSegments)
            }
        }
        let tH = {
            alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
            alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
            alphatest_fragment: "#ifdef USE_ALPHATEST\n	if ( diffuseColor.a < alphaTest ) discard;\n#endif",
            alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
            aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
            aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
            begin_vertex: "vec3 transformed = vec3( position );",
            beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
            bsdfs: "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( V * D );\n}\n#ifdef USE_IRIDESCENCE\n	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif",
            iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			 return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float R21 = R12;\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif",
            bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = dFdx( surf_pos.xyz );\n		vec3 vSigmaY = dFdy( surf_pos.xyz );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
            clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n		plane = clippingPlanes[ i ];\n		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n	}\n	#pragma unroll_loop_end\n	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n		bool clipped = true;\n		#pragma unroll_loop_start\n		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n		}\n		#pragma unroll_loop_end\n		if ( clipped ) discard;\n	#endif\n#endif",
            clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
            clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
            clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
            color_fragment: "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif",
            color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif",
            color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	varying vec3 vColor;\n#endif",
            color_vertex: "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif",
            common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n	return dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}",
            cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_v0 0.339\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_v1 0.276\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_v4 0.046\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_v5 0.016\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_v6 0.0038\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
            defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n	mat3 m = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n	transformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif",
            displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
            displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
            emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
            emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
            encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
            encodings_pars_fragment: "vec4 LinearToLinear( in vec4 value ) {\n	return value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
            envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif",
            envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif",
            envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
            envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
            envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n#endif",
            envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
            fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
            fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
            fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
            fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
            gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}",
            lightmap_fragment: "#ifdef USE_LIGHTMAP\n	vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n	reflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
            lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
            lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
            lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert",
            lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n		if ( cutoffDistance > 0.0 ) {\n			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n		}\n		return distanceFalloff;\n	#else\n		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n		}\n		return 1.0;\n	#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif",
            lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
            lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon",
            lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
            lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong",
            lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULARINTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n		#endif\n		#ifdef USE_SPECULARCOLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEENCOLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEENROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n	#endif\n#endif",
            lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometry.normal;\n		vec3 viewDir = geometry.viewDir;\n		vec3 position = geometry.position;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n	#endif\n	#ifdef USE_IRIDESCENCE\n		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );\n	#else\n		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
            lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n	geometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometry.viewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometry, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
            lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometry.normal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
            lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
            logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
            logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
            logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n		varying float vIsPerspective;\n	#else\n		uniform float logDepthBufFC;\n	#endif\n#endif",
            logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n	#else\n		if ( isPerspectiveMatrix( projectionMatrix ) ) {\n			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n			gl_Position.z *= gl_Position.w;\n		}\n	#endif\n#endif",
            map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
            map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
            map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
            map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	uniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
            metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
            metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
            morphcolor_vertex: "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
            morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n	#endif\n#endif",
            morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	uniform float morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n		uniform sampler2DArray morphTargetsTexture;\n		uniform ivec2 morphTargetsTextureSize;\n		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n			int y = texelIndex / morphTargetsTextureSize.x;\n			int x = texelIndex - y * morphTargetsTextureSize.x;\n			ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n			return texelFetch( morphTargetsTexture, morphUV, 0 );\n		}\n	#else\n		#ifndef USE_MORPHNORMALS\n			uniform float morphTargetInfluences[ 8 ];\n		#else\n			uniform float morphTargetInfluences[ 4 ];\n		#endif\n	#endif\n#endif",
            morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		transformed += morphTarget0 * morphTargetInfluences[ 0 ];\n		transformed += morphTarget1 * morphTargetInfluences[ 1 ];\n		transformed += morphTarget2 * morphTargetInfluences[ 2 ];\n		transformed += morphTarget3 * morphTargetInfluences[ 3 ];\n		#ifndef USE_MORPHNORMALS\n			transformed += morphTarget4 * morphTargetInfluences[ 4 ];\n			transformed += morphTarget5 * morphTargetInfluences[ 5 ];\n			transformed += morphTarget6 * morphTargetInfluences[ 6 ];\n			transformed += morphTarget7 * morphTargetInfluences[ 7 ];\n		#endif\n	#endif\n#endif",
            normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	#ifdef USE_TANGENT\n		vec3 tangent = normalize( vTangent );\n		vec3 bitangent = normalize( vBitangent );\n		#ifdef DOUBLE_SIDED\n			tangent = tangent * faceDirection;\n			bitangent = bitangent * faceDirection;\n		#endif\n		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n			mat3 vTBN = mat3( tangent, bitangent, normal );\n		#endif\n	#endif\n#endif\nvec3 geometryNormal = normal;",
            normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	#ifdef USE_TANGENT\n		normal = normalize( vTBN * mapN );\n	#else\n		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n	#endif\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
            normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
            normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
            normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif",
            normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n	}\n#endif",
            clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = geometryNormal;\n#endif",
            clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	#ifdef USE_TANGENT\n		clearcoatNormal = normalize( vTBN * clearcoatMapN );\n	#else\n		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n	#endif\n#endif",
            clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif",
            iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif",
            output_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
            packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n	return packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n	return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
            premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
            project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
            dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
            dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
            roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
            roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
            shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return shadow;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;\n		vec3 bd3D = normalize( lightToPosition );\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif",
            shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
            shadowmap_vertex: "#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		vec4 shadowWorldPosition;\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n#endif",
            shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
            skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
            skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	uniform int boneTextureSize;\n	mat4 getBoneMatrix( const in float i ) {\n		float j = i * 4.0;\n		float x = mod( j, float( boneTextureSize ) );\n		float y = floor( j / float( boneTextureSize ) );\n		float dx = 1.0 / float( boneTextureSize );\n		float dy = 1.0 / float( boneTextureSize );\n		y = dy * ( y + 0.5 );\n		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n		mat4 bone = mat4( v1, v2, v3, v4 );\n		return bone;\n	}\n#endif",
            skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
            skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
            specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
            specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
            tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
            tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
            transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmission = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );\n#endif",
            transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		#ifdef texture2DLodEXT\n			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n		#else\n			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n		#endif\n	}\n	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return radiance;\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n		vec3 refractedRayExit = position + transmissionRay;\n		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n		vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n		refractionCoords += 1.0;\n		refractionCoords /= 2.0;\n		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n	}\n#endif",
            uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n	varying vec2 vUv;\n#endif",
            uv_pars_vertex: "#ifdef USE_UV\n	#ifdef UVS_VERTEX_ONLY\n		vec2 vUv;\n	#else\n		varying vec2 vUv;\n	#endif\n	uniform mat3 uvTransform;\n#endif",
            uv_vertex: "#ifdef USE_UV\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
            uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	varying vec2 vUv2;\n#endif",
            uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n	uniform mat3 uv2Transform;\n#endif",
            uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
            worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
            background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
            background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
            backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
            backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
            cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
            cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
            depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
            depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#endif\n}",
            distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
            distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}",
            equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
            equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
            linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
            linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
            meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
            meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
            meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
            meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
            meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
            meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
            meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
            meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
            meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
            meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
            meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
            meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULARINTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n	#ifdef USE_SPECULARCOLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEENCOLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEENROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n	#endif\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
            meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
            meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
            points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
            points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
            shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
            shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
            sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n	vec2 scale;\n	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
            sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}"
        }
          , tW = {
            common: {
                diffuse: {
                    value: new D(16777215)
                },
                opacity: {
                    value: 1
                },
                map: {
                    value: null
                },
                uvTransform: {
                    value: new _
                },
                uv2Transform: {
                    value: new _
                },
                alphaMap: {
                    value: null
                },
                alphaTest: {
                    value: 0
                }
            },
            specularmap: {
                specularMap: {
                    value: null
                }
            },
            envmap: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                },
                reflectivity: {
                    value: 1
                },
                ior: {
                    value: 1.5
                },
                refractionRatio: {
                    value: .98
                }
            },
            aomap: {
                aoMap: {
                    value: null
                },
                aoMapIntensity: {
                    value: 1
                }
            },
            lightmap: {
                lightMap: {
                    value: null
                },
                lightMapIntensity: {
                    value: 1
                }
            },
            emissivemap: {
                emissiveMap: {
                    value: null
                }
            },
            bumpmap: {
                bumpMap: {
                    value: null
                },
                bumpScale: {
                    value: 1
                }
            },
            normalmap: {
                normalMap: {
                    value: null
                },
                normalScale: {
                    value: new v(1,1)
                }
            },
            displacementmap: {
                displacementMap: {
                    value: null
                },
                displacementScale: {
                    value: 1
                },
                displacementBias: {
                    value: 0
                }
            },
            roughnessmap: {
                roughnessMap: {
                    value: null
                }
            },
            metalnessmap: {
                metalnessMap: {
                    value: null
                }
            },
            gradientmap: {
                gradientMap: {
                    value: null
                }
            },
            fog: {
                fogDensity: {
                    value: 25e-5
                },
                fogNear: {
                    value: 1
                },
                fogFar: {
                    value: 2e3
                },
                fogColor: {
                    value: new D(16777215)
                }
            },
            lights: {
                ambientLightColor: {
                    value: []
                },
                lightProbe: {
                    value: []
                },
                directionalLights: {
                    value: [],
                    properties: {
                        direction: {},
                        color: {}
                    }
                },
                directionalLightShadows: {
                    value: [],
                    properties: {
                        shadowBias: {},
                        shadowNormalBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                directionalShadowMap: {
                    value: []
                },
                directionalShadowMatrix: {
                    value: []
                },
                spotLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        direction: {},
                        distance: {},
                        coneCos: {},
                        penumbraCos: {},
                        decay: {}
                    }
                },
                spotLightShadows: {
                    value: [],
                    properties: {
                        shadowBias: {},
                        shadowNormalBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                spotLightMap: {
                    value: []
                },
                spotShadowMap: {
                    value: []
                },
                spotLightMatrix: {
                    value: []
                },
                pointLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        decay: {},
                        distance: {}
                    }
                },
                pointLightShadows: {
                    value: [],
                    properties: {
                        shadowBias: {},
                        shadowNormalBias: {},
                        shadowRadius: {},
                        shadowMapSize: {},
                        shadowCameraNear: {},
                        shadowCameraFar: {}
                    }
                },
                pointShadowMap: {
                    value: []
                },
                pointShadowMatrix: {
                    value: []
                },
                hemisphereLights: {
                    value: [],
                    properties: {
                        direction: {},
                        skyColor: {},
                        groundColor: {}
                    }
                },
                rectAreaLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        width: {},
                        height: {}
                    }
                },
                ltc_1: {
                    value: null
                },
                ltc_2: {
                    value: null
                }
            },
            points: {
                diffuse: {
                    value: new D(16777215)
                },
                opacity: {
                    value: 1
                },
                size: {
                    value: 1
                },
                scale: {
                    value: 1
                },
                map: {
                    value: null
                },
                alphaMap: {
                    value: null
                },
                alphaTest: {
                    value: 0
                },
                uvTransform: {
                    value: new _
                }
            },
            sprite: {
                diffuse: {
                    value: new D(16777215)
                },
                opacity: {
                    value: 1
                },
                center: {
                    value: new v(.5,.5)
                },
                rotation: {
                    value: 0
                },
                map: {
                    value: null
                },
                alphaMap: {
                    value: null
                },
                alphaTest: {
                    value: 0
                },
                uvTransform: {
                    value: new _
                }
            }
        }
          , tj = {
            basic: {
                uniforms: tw([tW.common, tW.specularmap, tW.envmap, tW.aomap, tW.lightmap, tW.fog]),
                vertexShader: tH.meshbasic_vert,
                fragmentShader: tH.meshbasic_frag
            },
            lambert: {
                uniforms: tw([tW.common, tW.specularmap, tW.envmap, tW.aomap, tW.lightmap, tW.emissivemap, tW.bumpmap, tW.normalmap, tW.displacementmap, tW.fog, tW.lights, {
                    emissive: {
                        value: new D(0)
                    }
                }]),
                vertexShader: tH.meshlambert_vert,
                fragmentShader: tH.meshlambert_frag
            },
            phong: {
                uniforms: tw([tW.common, tW.specularmap, tW.envmap, tW.aomap, tW.lightmap, tW.emissivemap, tW.bumpmap, tW.normalmap, tW.displacementmap, tW.fog, tW.lights, {
                    emissive: {
                        value: new D(0)
                    },
                    specular: {
                        value: new D(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }]),
                vertexShader: tH.meshphong_vert,
                fragmentShader: tH.meshphong_frag
            },
            standard: {
                uniforms: tw([tW.common, tW.envmap, tW.aomap, tW.lightmap, tW.emissivemap, tW.bumpmap, tW.normalmap, tW.displacementmap, tW.roughnessmap, tW.metalnessmap, tW.fog, tW.lights, {
                    emissive: {
                        value: new D(0)
                    },
                    roughness: {
                        value: 1
                    },
                    metalness: {
                        value: 0
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }]),
                vertexShader: tH.meshphysical_vert,
                fragmentShader: tH.meshphysical_frag
            },
            toon: {
                uniforms: tw([tW.common, tW.aomap, tW.lightmap, tW.emissivemap, tW.bumpmap, tW.normalmap, tW.displacementmap, tW.gradientmap, tW.fog, tW.lights, {
                    emissive: {
                        value: new D(0)
                    }
                }]),
                vertexShader: tH.meshtoon_vert,
                fragmentShader: tH.meshtoon_frag
            },
            matcap: {
                uniforms: tw([tW.common, tW.bumpmap, tW.normalmap, tW.displacementmap, tW.fog, {
                    matcap: {
                        value: null
                    }
                }]),
                vertexShader: tH.meshmatcap_vert,
                fragmentShader: tH.meshmatcap_frag
            },
            points: {
                uniforms: tw([tW.points, tW.fog]),
                vertexShader: tH.points_vert,
                fragmentShader: tH.points_frag
            },
            dashed: {
                uniforms: tw([tW.common, tW.fog, {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }]),
                vertexShader: tH.linedashed_vert,
                fragmentShader: tH.linedashed_frag
            },
            depth: {
                uniforms: tw([tW.common, tW.displacementmap]),
                vertexShader: tH.depth_vert,
                fragmentShader: tH.depth_frag
            },
            normal: {
                uniforms: tw([tW.common, tW.bumpmap, tW.normalmap, tW.displacementmap, {
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: tH.meshnormal_vert,
                fragmentShader: tH.meshnormal_frag
            },
            sprite: {
                uniforms: tw([tW.sprite, tW.fog]),
                vertexShader: tH.sprite_vert,
                fragmentShader: tH.sprite_frag
            },
            background: {
                uniforms: {
                    uvTransform: {
                        value: new _
                    },
                    t2D: {
                        value: null
                    },
                    backgroundIntensity: {
                        value: 1
                    }
                },
                vertexShader: tH.background_vert,
                fragmentShader: tH.background_frag
            },
            backgroundCube: {
                uniforms: {
                    envMap: {
                        value: null
                    },
                    flipEnvMap: {
                        value: -1
                    },
                    backgroundBlurriness: {
                        value: 0
                    },
                    backgroundIntensity: {
                        value: 1
                    }
                },
                vertexShader: tH.backgroundCube_vert,
                fragmentShader: tH.backgroundCube_frag
            },
            cube: {
                uniforms: {
                    tCube: {
                        value: null
                    },
                    tFlip: {
                        value: -1
                    },
                    opacity: {
                        value: 1
                    }
                },
                vertexShader: tH.cube_vert,
                fragmentShader: tH.cube_frag
            },
            equirect: {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: tH.equirect_vert,
                fragmentShader: tH.equirect_frag
            },
            distanceRGBA: {
                uniforms: tw([tW.common, tW.displacementmap, {
                    referencePosition: {
                        value: new G
                    },
                    nearDistance: {
                        value: 1
                    },
                    farDistance: {
                        value: 1e3
                    }
                }]),
                vertexShader: tH.distanceRGBA_vert,
                fragmentShader: tH.distanceRGBA_frag
            },
            shadow: {
                uniforms: tw([tW.lights, tW.fog, {
                    color: {
                        value: new D(0)
                    },
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: tH.shadow_vert,
                fragmentShader: tH.shadow_frag
            }
        };
        tj.physical = {
            uniforms: tw([tj.standard.uniforms, {
                clearcoat: {
                    value: 0
                },
                clearcoatMap: {
                    value: null
                },
                clearcoatRoughness: {
                    value: 0
                },
                clearcoatRoughnessMap: {
                    value: null
                },
                clearcoatNormalScale: {
                    value: new v(1,1)
                },
                clearcoatNormalMap: {
                    value: null
                },
                iridescence: {
                    value: 0
                },
                iridescenceMap: {
                    value: null
                },
                iridescenceIOR: {
                    value: 1.3
                },
                iridescenceThicknessMinimum: {
                    value: 100
                },
                iridescenceThicknessMaximum: {
                    value: 400
                },
                iridescenceThicknessMap: {
                    value: null
                },
                sheen: {
                    value: 0
                },
                sheenColor: {
                    value: new D(0)
                },
                sheenColorMap: {
                    value: null
                },
                sheenRoughness: {
                    value: 1
                },
                sheenRoughnessMap: {
                    value: null
                },
                transmission: {
                    value: 0
                },
                transmissionMap: {
                    value: null
                },
                transmissionSamplerSize: {
                    value: new v
                },
                transmissionSamplerMap: {
                    value: null
                },
                thickness: {
                    value: 0
                },
                thicknessMap: {
                    value: null
                },
                attenuationDistance: {
                    value: 0
                },
                attenuationColor: {
                    value: new D(0)
                },
                specularIntensity: {
                    value: 1
                },
                specularIntensityMap: {
                    value: null
                },
                specularColor: {
                    value: new D(1,1,1)
                },
                specularColorMap: {
                    value: null
                }
            }]),
            vertexShader: tH.meshphysical_vert,
            fragmentShader: tH.meshphysical_frag
        };
        let tq = {
            r: 0,
            b: 0,
            g: 0
        };
        function tX(e, t, i, n, r, a, s) {
            let o, l;
            let h = new D(0)
              , u = !0 === a ? 0 : 1
              , c = null
              , d = 0
              , p = null;
            function f(t, i) {
                t.getRGB(tq, tT(e)),
                n.buffers.color.setClear(tq.r, tq.g, tq.b, i, s)
            }
            return {
                getClearColor: function() {
                    return h
                },
                setClearColor: function(e, t=1) {
                    h.set(e),
                    f(h, u = t)
                },
                getClearAlpha: function() {
                    return u
                },
                setClearAlpha: function(e) {
                    f(h, u = e)
                },
                render: function(n, a) {
                    let s = !1
                      , m = !0 === a.isScene ? a.background : null;
                    if (m && m.isTexture) {
                        let e = a.backgroundBlurriness > 0;
                        m = (e ? i : t).get(m)
                    }
                    let g = e.xr
                      , v = g.getSession && g.getSession();
                    v && "additive" === v.environmentBlendMode && (m = null),
                    null === m ? f(h, u) : m && m.isColor && (f(m, 1),
                    s = !0),
                    (e.autoClear || s) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
                    m && (m.isCubeTexture || 306 === m.mapping) ? (void 0 === l && ((l = new ty(new tS(1,1,1),new tA({
                        name: "BackgroundCubeMaterial",
                        uniforms: tb(tj.backgroundCube.uniforms),
                        vertexShader: tj.backgroundCube.vertexShader,
                        fragmentShader: tj.backgroundCube.fragmentShader,
                        side: 1,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1
                    }))).geometry.deleteAttribute("normal"),
                    l.geometry.deleteAttribute("uv"),
                    l.onBeforeRender = function(e, t, i) {
                        this.matrixWorld.copyPosition(i.matrixWorld)
                    }
                    ,
                    Object.defineProperty(l.material, "envMap", {
                        get: function() {
                            return this.uniforms.envMap.value
                        }
                    }),
                    r.update(l)),
                    l.material.uniforms.envMap.value = m,
                    l.material.uniforms.flipEnvMap.value = m.isCubeTexture && !1 === m.isRenderTargetTexture ? -1 : 1,
                    l.material.uniforms.backgroundBlurriness.value = a.backgroundBlurriness,
                    l.material.uniforms.backgroundIntensity.value = a.backgroundIntensity,
                    l.material.toneMapped = 3001 !== m.encoding,
                    (c !== m || d !== m.version || p !== e.toneMapping) && (l.material.needsUpdate = !0,
                    c = m,
                    d = m.version,
                    p = e.toneMapping),
                    l.layers.enableAll(),
                    n.unshift(l, l.geometry, l.material, 0, 0, null)) : m && m.isTexture && (void 0 === o && ((o = new ty(new tG(2,2),new tA({
                        name: "BackgroundMaterial",
                        uniforms: tb(tj.background.uniforms),
                        vertexShader: tj.background.vertexShader,
                        fragmentShader: tj.background.fragmentShader,
                        side: 0,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1
                    }))).geometry.deleteAttribute("normal"),
                    Object.defineProperty(o.material, "map", {
                        get: function() {
                            return this.uniforms.t2D.value
                        }
                    }),
                    r.update(o)),
                    o.material.uniforms.t2D.value = m,
                    o.material.uniforms.backgroundIntensity.value = a.backgroundIntensity,
                    o.material.toneMapped = 3001 !== m.encoding,
                    !0 === m.matrixAutoUpdate && m.updateMatrix(),
                    o.material.uniforms.uvTransform.value.copy(m.matrix),
                    (c !== m || d !== m.version || p !== e.toneMapping) && (o.material.needsUpdate = !0,
                    c = m,
                    d = m.version,
                    p = e.toneMapping),
                    o.layers.enableAll(),
                    n.unshift(o, o.geometry, o.material, 0, 0, null))
                }
            }
        }
        function tJ(e, t, i, n) {
            let r = e.getParameter(34921)
              , a = n.isWebGL2 ? null : t.get("OES_vertex_array_object")
              , s = n.isWebGL2 || null !== a
              , o = {}
              , l = p(null)
              , h = l
              , u = !1;
            function c(t) {
                return n.isWebGL2 ? e.bindVertexArray(t) : a.bindVertexArrayOES(t)
            }
            function d(t) {
                return n.isWebGL2 ? e.deleteVertexArray(t) : a.deleteVertexArrayOES(t)
            }
            function p(e) {
                let t = []
                  , i = []
                  , n = [];
                for (let e = 0; e < r; e++)
                    t[e] = 0,
                    i[e] = 0,
                    n[e] = 0;
                return {
                    geometry: null,
                    program: null,
                    wireframe: !1,
                    newAttributes: t,
                    enabledAttributes: i,
                    attributeDivisors: n,
                    object: e,
                    attributes: {},
                    index: null
                }
            }
            function f() {
                let e = h.newAttributes;
                for (let t = 0, i = e.length; t < i; t++)
                    e[t] = 0
            }
            function m(e) {
                g(e, 0)
            }
            function g(i, r) {
                let a = h.newAttributes
                  , s = h.enabledAttributes
                  , o = h.attributeDivisors;
                if (a[i] = 1,
                0 === s[i] && (e.enableVertexAttribArray(i),
                s[i] = 1),
                o[i] !== r) {
                    let a = n.isWebGL2 ? e : t.get("ANGLE_instanced_arrays");
                    a[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](i, r),
                    o[i] = r
                }
            }
            function v() {
                let t = h.newAttributes
                  , i = h.enabledAttributes;
                for (let n = 0, r = i.length; n < r; n++)
                    i[n] !== t[n] && (e.disableVertexAttribArray(n),
                    i[n] = 0)
            }
            function _(t, i, r, a, s, o) {
                !0 === n.isWebGL2 && (5124 === r || 5125 === r) ? e.vertexAttribIPointer(t, i, r, s, o) : e.vertexAttribPointer(t, i, r, a, s, o)
            }
            function x() {
                y(),
                u = !0,
                h !== l && c((h = l).object)
            }
            function y() {
                l.geometry = null,
                l.program = null,
                l.wireframe = !1
            }
            return {
                setup: function(r, l, d, x, y) {
                    let M = !1;
                    if (s) {
                        let t = function(t, i, r) {
                            let s = !0 === r.wireframe
                              , l = o[t.id];
                            void 0 === l && (l = {},
                            o[t.id] = l);
                            let h = l[i.id];
                            void 0 === h && (h = {},
                            l[i.id] = h);
                            let u = h[s];
                            return void 0 === u && (u = p(n.isWebGL2 ? e.createVertexArray() : a.createVertexArrayOES()),
                            h[s] = u),
                            u
                        }(x, d, l);
                        h !== t && c((h = t).object),
                        (M = function(e, t, i, n) {
                            let r = h.attributes
                              , a = t.attributes
                              , s = 0
                              , o = i.getAttributes();
                            for (let t in o) {
                                let i = o[t];
                                if (i.location >= 0) {
                                    let i = r[t]
                                      , n = a[t];
                                    if (void 0 === n && ("instanceMatrix" === t && e.instanceMatrix && (n = e.instanceMatrix),
                                    "instanceColor" === t && e.instanceColor && (n = e.instanceColor)),
                                    void 0 === i || i.attribute !== n || n && i.data !== n.data)
                                        return !0;
                                    s++
                                }
                            }
                            return h.attributesNum !== s || h.index !== n
                        }(r, x, d, y)) && function(e, t, i, n) {
                            let r = {}
                              , a = t.attributes
                              , s = 0
                              , o = i.getAttributes();
                            for (let t in o) {
                                let i = o[t];
                                if (i.location >= 0) {
                                    let i = a[t];
                                    void 0 === i && ("instanceMatrix" === t && e.instanceMatrix && (i = e.instanceMatrix),
                                    "instanceColor" === t && e.instanceColor && (i = e.instanceColor));
                                    let n = {};
                                    n.attribute = i,
                                    i && i.data && (n.data = i.data),
                                    r[t] = n,
                                    s++
                                }
                            }
                            h.attributes = r,
                            h.attributesNum = s,
                            h.index = n
                        }(r, x, d, y)
                    } else {
                        let e = !0 === l.wireframe;
                        (h.geometry !== x.id || h.program !== d.id || h.wireframe !== e) && (h.geometry = x.id,
                        h.program = d.id,
                        h.wireframe = e,
                        M = !0)
                    }
                    null !== y && i.update(y, 34963),
                    (M || u) && (u = !1,
                    function(r, a, s, o) {
                        if (!1 === n.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === t.get("ANGLE_instanced_arrays"))
                            return;
                        f();
                        let l = o.attributes
                          , h = s.getAttributes()
                          , u = a.defaultAttributeValues;
                        for (let t in h) {
                            let n = h[t];
                            if (n.location >= 0) {
                                let a = l[t];
                                if (void 0 === a && ("instanceMatrix" === t && r.instanceMatrix && (a = r.instanceMatrix),
                                "instanceColor" === t && r.instanceColor && (a = r.instanceColor)),
                                void 0 !== a) {
                                    let t = a.normalized
                                      , s = a.itemSize
                                      , l = i.get(a);
                                    if (void 0 === l)
                                        continue;
                                    let h = l.buffer
                                      , u = l.type
                                      , c = l.bytesPerElement;
                                    if (a.isInterleavedBufferAttribute) {
                                        let i = a.data
                                          , l = i.stride
                                          , d = a.offset;
                                        if (i.isInstancedInterleavedBuffer) {
                                            for (let e = 0; e < n.locationSize; e++)
                                                g(n.location + e, i.meshPerAttribute);
                                            !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = i.meshPerAttribute * i.count)
                                        } else
                                            for (let e = 0; e < n.locationSize; e++)
                                                m(n.location + e);
                                        e.bindBuffer(34962, h);
                                        for (let e = 0; e < n.locationSize; e++)
                                            _(n.location + e, s / n.locationSize, u, t, l * c, (d + s / n.locationSize * e) * c)
                                    } else {
                                        if (a.isInstancedBufferAttribute) {
                                            for (let e = 0; e < n.locationSize; e++)
                                                g(n.location + e, a.meshPerAttribute);
                                            !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = a.meshPerAttribute * a.count)
                                        } else
                                            for (let e = 0; e < n.locationSize; e++)
                                                m(n.location + e);
                                        e.bindBuffer(34962, h);
                                        for (let e = 0; e < n.locationSize; e++)
                                            _(n.location + e, s / n.locationSize, u, t, s * c, s / n.locationSize * e * c)
                                    }
                                } else if (void 0 !== u) {
                                    let i = u[t];
                                    if (void 0 !== i)
                                        switch (i.length) {
                                        case 2:
                                            e.vertexAttrib2fv(n.location, i);
                                            break;
                                        case 3:
                                            e.vertexAttrib3fv(n.location, i);
                                            break;
                                        case 4:
                                            e.vertexAttrib4fv(n.location, i);
                                            break;
                                        default:
                                            e.vertexAttrib1fv(n.location, i)
                                        }
                                }
                            }
                        }
                        v()
                    }(r, l, d, x),
                    null !== y && e.bindBuffer(34963, i.get(y).buffer))
                },
                reset: x,
                resetDefaultState: y,
                dispose: function() {
                    for (let e in x(),
                    o) {
                        let t = o[e];
                        for (let e in t) {
                            let i = t[e];
                            for (let e in i)
                                d(i[e].object),
                                delete i[e];
                            delete t[e]
                        }
                        delete o[e]
                    }
                },
                releaseStatesOfGeometry: function(e) {
                    if (void 0 === o[e.id])
                        return;
                    let t = o[e.id];
                    for (let e in t) {
                        let i = t[e];
                        for (let e in i)
                            d(i[e].object),
                            delete i[e];
                        delete t[e]
                    }
                    delete o[e.id]
                },
                releaseStatesOfProgram: function(e) {
                    for (let t in o) {
                        let i = o[t];
                        if (void 0 === i[e.id])
                            continue;
                        let n = i[e.id];
                        for (let e in n)
                            d(n[e].object),
                            delete n[e];
                        delete i[e.id]
                    }
                },
                initAttributes: f,
                enableAttribute: m,
                disableUnusedAttributes: v
            }
        }
        function tY(e, t, i, n) {
            let r;
            let a = n.isWebGL2;
            this.setMode = function(e) {
                r = e
            }
            ,
            this.render = function(t, n) {
                e.drawArrays(r, t, n),
                i.update(n, r, 1)
            }
            ,
            this.renderInstances = function(n, s, o) {
                let l, h;
                if (0 !== o) {
                    if (a)
                        l = e,
                        h = "drawArraysInstanced";
                    else if (l = t.get("ANGLE_instanced_arrays"),
                    h = "drawArraysInstancedANGLE",
                    null === l) {
                        console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                        return
                    }
                    l[h](r, n, s, o),
                    i.update(s, r, o)
                }
            }
        }
        function tZ(e, t, i) {
            let n;
            function r(t) {
                if ("highp" === t) {
                    if (e.getShaderPrecisionFormat(35633, 36338).precision > 0 && e.getShaderPrecisionFormat(35632, 36338).precision > 0)
                        return "highp";
                    t = "mediump"
                }
                return "mediump" === t && e.getShaderPrecisionFormat(35633, 36337).precision > 0 && e.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
            }
            let a = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && e instanceof WebGL2ComputeRenderingContext
              , s = void 0 !== i.precision ? i.precision : "highp"
              , o = r(s);
            o !== s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", o, "instead."),
            s = o);
            let l = a || t.has("WEBGL_draw_buffers")
              , h = !0 === i.logarithmicDepthBuffer
              , u = e.getParameter(34930)
              , c = e.getParameter(35660)
              , d = e.getParameter(3379)
              , p = e.getParameter(34076)
              , f = e.getParameter(34921)
              , m = e.getParameter(36347)
              , g = e.getParameter(36348)
              , v = e.getParameter(36349)
              , _ = c > 0
              , x = a || t.has("OES_texture_float")
              , y = a ? e.getParameter(36183) : 0;
            return {
                isWebGL2: a,
                drawBuffers: l,
                getMaxAnisotropy: function() {
                    if (void 0 !== n)
                        return n;
                    if (!0 === t.has("EXT_texture_filter_anisotropic")) {
                        let i = t.get("EXT_texture_filter_anisotropic");
                        n = e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                    } else
                        n = 0;
                    return n
                },
                getMaxPrecision: r,
                precision: s,
                logarithmicDepthBuffer: h,
                maxTextures: u,
                maxVertexTextures: c,
                maxTextureSize: d,
                maxCubemapSize: p,
                maxAttributes: f,
                maxVertexUniforms: m,
                maxVaryings: g,
                maxFragmentUniforms: v,
                vertexTextures: _,
                floatFragmentTextures: x,
                floatVertexTextures: _ && x,
                maxSamples: y
            }
        }
        function tK(e) {
            let t = this
              , i = null
              , n = 0
              , r = !1
              , a = !1
              , s = new tz
              , o = new _
              , l = {
                value: null,
                needsUpdate: !1
            };
            function h() {
                l.value !== i && (l.value = i,
                l.needsUpdate = n > 0),
                t.numPlanes = n,
                t.numIntersection = 0
            }
            function u(e, i, n, r) {
                let a = null !== e ? e.length : 0
                  , h = null;
                if (0 !== a) {
                    if (h = l.value,
                    !0 !== r || null === h) {
                        let t = n + 4 * a
                          , r = i.matrixWorldInverse;
                        o.getNormalMatrix(r),
                        (null === h || h.length < t) && (h = new Float32Array(t));
                        for (let t = 0, i = n; t !== a; ++t,
                        i += 4)
                            s.copy(e[t]).applyMatrix4(r, o),
                            s.normal.toArray(h, i),
                            h[i + 3] = s.constant
                    }
                    l.value = h,
                    l.needsUpdate = !0
                }
                return t.numPlanes = a,
                t.numIntersection = 0,
                h
            }
            this.uniform = l,
            this.numPlanes = 0,
            this.numIntersection = 0,
            this.init = function(e, t, a) {
                let s = 0 !== e.length || t || 0 !== n || r;
                return r = t,
                i = u(e, a, 0),
                n = e.length,
                s
            }
            ,
            this.beginShadows = function() {
                a = !0,
                u(null)
            }
            ,
            this.endShadows = function() {
                a = !1,
                h()
            }
            ,
            this.setState = function(t, s, o) {
                let c = t.clippingPlanes
                  , d = t.clipIntersection
                  , p = t.clipShadows
                  , f = e.get(t);
                if (r && null !== c && 0 !== c.length && (!a || p)) {
                    let e = a ? 0 : n
                      , t = 4 * e
                      , r = f.clippingState || null;
                    l.value = r,
                    r = u(c, s, t, o);
                    for (let e = 0; e !== t; ++e)
                        r[e] = i[e];
                    f.clippingState = r,
                    this.numIntersection = d ? this.numPlanes : 0,
                    this.numPlanes += e
                } else
                    a ? u(null) : h()
            }
        }
        function tQ(e) {
            let t = new WeakMap;
            function i(e, t) {
                return 303 === t ? e.mapping = 301 : 304 === t && (e.mapping = 302),
                e
            }
            function n(e) {
                let i = e.target;
                i.removeEventListener("dispose", n);
                let r = t.get(i);
                void 0 !== r && (t.delete(i),
                r.dispose())
            }
            return {
                get: function(r) {
                    if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
                        let a = r.mapping;
                        if (303 === a || 304 === a) {
                            if (t.has(r)) {
                                let e = t.get(r).texture;
                                return i(e, r.mapping)
                            }
                            {
                                let a = r.image;
                                if (!a || !(a.height > 0))
                                    return null;
                                {
                                    let s = new tD(a.height / 2);
                                    return s.fromEquirectangularTexture(e, r),
                                    t.set(r, s),
                                    r.addEventListener("dispose", n),
                                    i(s.texture, r.mapping)
                                }
                            }
                        }
                    }
                    return r
                },
                dispose: function() {
                    t = new WeakMap
                }
            }
        }
        class t$ extends tC {
            constructor(e=-1, t=1, i=1, n=-1, r=.1, a=2e3) {
                super(),
                this.isOrthographicCamera = !0,
                this.type = "OrthographicCamera",
                this.zoom = 1,
                this.view = null,
                this.left = e,
                this.right = t,
                this.top = i,
                this.bottom = n,
                this.near = r,
                this.far = a,
                this.updateProjectionMatrix()
            }
            copy(e, t) {
                return super.copy(e, t),
                this.left = e.left,
                this.right = e.right,
                this.top = e.top,
                this.bottom = e.bottom,
                this.near = e.near,
                this.far = e.far,
                this.zoom = e.zoom,
                this.view = null === e.view ? null : Object.assign({}, e.view),
                this
            }
            setViewOffset(e, t, i, n, r, a) {
                null === this.view && (this.view = {
                    enabled: !0,
                    fullWidth: 1,
                    fullHeight: 1,
                    offsetX: 0,
                    offsetY: 0,
                    width: 1,
                    height: 1
                }),
                this.view.enabled = !0,
                this.view.fullWidth = e,
                this.view.fullHeight = t,
                this.view.offsetX = i,
                this.view.offsetY = n,
                this.view.width = r,
                this.view.height = a,
                this.updateProjectionMatrix()
            }
            clearViewOffset() {
                null !== this.view && (this.view.enabled = !1),
                this.updateProjectionMatrix()
            }
            updateProjectionMatrix() {
                let e = (this.right - this.left) / (2 * this.zoom)
                  , t = (this.top - this.bottom) / (2 * this.zoom)
                  , i = (this.right + this.left) / 2
                  , n = (this.top + this.bottom) / 2
                  , r = i - e
                  , a = i + e
                  , s = n + t
                  , o = n - t;
                if (null !== this.view && this.view.enabled) {
                    let e = (this.right - this.left) / this.view.fullWidth / this.zoom
                      , t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                    r += e * this.view.offsetX,
                    a = r + e * this.view.width,
                    s -= t * this.view.offsetY,
                    o = s - t * this.view.height
                }
                this.projectionMatrix.makeOrthographic(r, a, s, o, this.near, this.far),
                this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
            }
            toJSON(e) {
                let t = super.toJSON(e);
                return t.object.zoom = this.zoom,
                t.object.left = this.left,
                t.object.right = this.right,
                t.object.top = this.top,
                t.object.bottom = this.bottom,
                t.object.near = this.near,
                t.object.far = this.far,
                null !== this.view && (t.object.view = Object.assign({}, this.view)),
                t
            }
        }
        let t0 = [.125, .215, .35, .446, .526, .582]
          , t1 = new t$
          , t3 = new D
          , t2 = null
          , t4 = (1 + Math.sqrt(5)) / 2
          , t5 = 1 / t4
          , t6 = [new G(1,1,1), new G(-1,1,1), new G(1,1,-1), new G(-1,1,-1), new G(0,t4,t5), new G(0,t4,-t5), new G(t5,0,t4), new G(-t5,0,t4), new G(t4,t5,0), new G(-t4,t5,0)];
        class t7 {
            constructor(e) {
                this._renderer = e,
                this._pingPongRenderTarget = null,
                this._lodMax = 0,
                this._cubeSize = 0,
                this._lodPlanes = [],
                this._sizeLods = [],
                this._sigmas = [],
                this._blurMaterial = null,
                this._cubemapMaterial = null,
                this._equirectMaterial = null,
                this._compileMaterial(this._blurMaterial)
            }
            fromScene(e, t=0, i=.1, n=100) {
                t2 = this._renderer.getRenderTarget(),
                this._setSize(256);
                let r = this._allocateTargets();
                return r.depthBuffer = !0,
                this._sceneToCubeUV(e, i, n, r),
                t > 0 && this._blur(r, 0, 0, t),
                this._applyPMREM(r),
                this._cleanup(r),
                r
            }
            fromEquirectangular(e, t=null) {
                return this._fromTexture(e, t)
            }
            fromCubemap(e, t=null) {
                return this._fromTexture(e, t)
            }
            compileCubemapShader() {
                null === this._cubemapMaterial && (this._cubemapMaterial = it(),
                this._compileMaterial(this._cubemapMaterial))
            }
            compileEquirectangularShader() {
                null === this._equirectMaterial && (this._equirectMaterial = ie(),
                this._compileMaterial(this._equirectMaterial))
            }
            dispose() {
                this._dispose(),
                null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
                null !== this._equirectMaterial && this._equirectMaterial.dispose()
            }
            _setSize(e) {
                this._lodMax = Math.floor(Math.log2(e)),
                this._cubeSize = Math.pow(2, this._lodMax)
            }
            _dispose() {
                null !== this._blurMaterial && this._blurMaterial.dispose(),
                null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
                for (let e = 0; e < this._lodPlanes.length; e++)
                    this._lodPlanes[e].dispose()
            }
            _cleanup(e) {
                this._renderer.setRenderTarget(t2),
                e.scissorTest = !1,
                t9(e, 0, 0, e.width, e.height)
            }
            _fromTexture(e, t) {
                301 === e.mapping || 302 === e.mapping ? this._setSize(0 === e.image.length ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4),
                t2 = this._renderer.getRenderTarget();
                let i = t || this._allocateTargets();
                return this._textureToCubeUV(e, i),
                this._applyPMREM(i),
                this._cleanup(i),
                i
            }
            _allocateTargets() {
                let e = 3 * Math.max(this._cubeSize, 112)
                  , t = 4 * this._cubeSize
                  , i = {
                    magFilter: 1006,
                    minFilter: 1006,
                    generateMipmaps: !1,
                    type: 1016,
                    format: 1023,
                    encoding: 3e3,
                    depthBuffer: !1
                }
                  , n = t8(e, t, i);
                if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== e) {
                    null !== this._pingPongRenderTarget && this._dispose(),
                    this._pingPongRenderTarget = t8(e, t, i);
                    let {_lodMax: n} = this;
                    ({sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas} = function(e) {
                        let t = []
                          , i = []
                          , n = []
                          , r = e
                          , a = e - 4 + 1 + t0.length;
                        for (let s = 0; s < a; s++) {
                            let a = Math.pow(2, r);
                            i.push(a);
                            let o = 1 / a;
                            s > e - 4 ? o = t0[s - e + 4 - 1] : 0 === s && (o = 0),
                            n.push(o);
                            let l = 1 / (a - 2)
                              , h = -l
                              , u = 1 + l
                              , c = [h, h, u, h, u, u, h, h, u, u, h, u]
                              , d = new Float32Array(108)
                              , p = new Float32Array(72)
                              , f = new Float32Array(36);
                            for (let e = 0; e < 6; e++) {
                                let t = e % 3 * 2 / 3 - 1
                                  , i = e > 2 ? 0 : -1
                                  , n = [t, i, 0, t + 2 / 3, i, 0, t + 2 / 3, i + 1, 0, t, i, 0, t + 2 / 3, i + 1, 0, t, i + 1, 0];
                                d.set(n, 18 * e),
                                p.set(c, 12 * e);
                                let r = [e, e, e, e, e, e];
                                f.set(r, 6 * e)
                            }
                            let m = new ts;
                            m.setAttribute("position", new e5(d,3)),
                            m.setAttribute("uv", new e5(p,2)),
                            m.setAttribute("faceIndex", new e5(f,1)),
                            t.push(m),
                            r > 4 && r--
                        }
                        return {
                            lodPlanes: t,
                            sizeLods: i,
                            sigmas: n
                        }
                    }(n)),
                    this._blurMaterial = function(e, t, i) {
                        let n = new Float32Array(20)
                          , r = new G(0,1,0)
                          , a = new tA({
                            name: "SphericalGaussianBlur",
                            defines: {
                                n: 20,
                                CUBEUV_TEXEL_WIDTH: 1 / t,
                                CUBEUV_TEXEL_HEIGHT: 1 / i,
                                CUBEUV_MAX_MIP: `${e}.0`
                            },
                            uniforms: {
                                envMap: {
                                    value: null
                                },
                                samples: {
                                    value: 1
                                },
                                weights: {
                                    value: n
                                },
                                latitudinal: {
                                    value: !1
                                },
                                dTheta: {
                                    value: 0
                                },
                                mipInt: {
                                    value: 0
                                },
                                poleAxis: {
                                    value: r
                                }
                            },
                            vertexShader: ii(),
                            fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
                            blending: 0,
                            depthTest: !1,
                            depthWrite: !1
                        });
                        return a
                    }(n, e, t)
                }
                return n
            }
            _compileMaterial(e) {
                let t = new ty(this._lodPlanes[0],e);
                this._renderer.compile(t, t1)
            }
            _sceneToCubeUV(e, t, i, n) {
                let r = new tL(90,1,t,i)
                  , a = [1, -1, 1, 1, 1, 1]
                  , s = [1, 1, 1, -1, -1, -1]
                  , o = this._renderer
                  , l = o.autoClear
                  , h = o.toneMapping;
                o.getClearColor(t3),
                o.toneMapping = 0,
                o.autoClear = !1;
                let u = new e3({
                    name: "PMREM.Background",
                    side: 1,
                    depthWrite: !1,
                    depthTest: !1
                })
                  , c = new ty(new tS,u)
                  , d = !1
                  , p = e.background;
                p ? p.isColor && (u.color.copy(p),
                e.background = null,
                d = !0) : (u.color.copy(t3),
                d = !0);
                for (let t = 0; t < 6; t++) {
                    let i = t % 3;
                    0 === i ? (r.up.set(0, a[t], 0),
                    r.lookAt(s[t], 0, 0)) : 1 === i ? (r.up.set(0, 0, a[t]),
                    r.lookAt(0, s[t], 0)) : (r.up.set(0, a[t], 0),
                    r.lookAt(0, 0, s[t]));
                    let l = this._cubeSize;
                    t9(n, i * l, t > 2 ? l : 0, l, l),
                    o.setRenderTarget(n),
                    d && o.render(c, r),
                    o.render(e, r)
                }
                c.geometry.dispose(),
                c.material.dispose(),
                o.toneMapping = h,
                o.autoClear = l,
                e.background = p
            }
            _textureToCubeUV(e, t) {
                let i = this._renderer
                  , n = 301 === e.mapping || 302 === e.mapping;
                n ? (null === this._cubemapMaterial && (this._cubemapMaterial = it()),
                this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === e.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = ie());
                let r = n ? this._cubemapMaterial : this._equirectMaterial
                  , a = new ty(this._lodPlanes[0],r)
                  , s = r.uniforms;
                s.envMap.value = e;
                let o = this._cubeSize;
                t9(t, 0, 0, 3 * o, 2 * o),
                i.setRenderTarget(t),
                i.render(a, t1)
            }
            _applyPMREM(e) {
                let t = this._renderer
                  , i = t.autoClear;
                t.autoClear = !1;
                for (let t = 1; t < this._lodPlanes.length; t++) {
                    let i = Math.sqrt(this._sigmas[t] * this._sigmas[t] - this._sigmas[t - 1] * this._sigmas[t - 1])
                      , n = t6[(t - 1) % t6.length];
                    this._blur(e, t - 1, t, i, n)
                }
                t.autoClear = i
            }
            _blur(e, t, i, n, r) {
                let a = this._pingPongRenderTarget;
                this._halfBlur(e, a, t, i, n, "latitudinal", r),
                this._halfBlur(a, e, i, i, n, "longitudinal", r)
            }
            _halfBlur(e, t, i, n, r, a, s) {
                let o = this._renderer
                  , l = this._blurMaterial;
                "latitudinal" !== a && "longitudinal" !== a && console.error("blur direction must be either latitudinal or longitudinal!");
                let h = new ty(this._lodPlanes[n],l)
                  , u = l.uniforms
                  , c = this._sizeLods[i] - 1
                  , d = isFinite(r) ? Math.PI / (2 * c) : 2 * Math.PI / 39
                  , p = r / d
                  , f = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
                f > 20 && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`);
                let m = []
                  , g = 0;
                for (let e = 0; e < 20; ++e) {
                    let t = e / p
                      , i = Math.exp(-t * t / 2);
                    m.push(i),
                    0 === e ? g += i : e < f && (g += 2 * i)
                }
                for (let e = 0; e < m.length; e++)
                    m[e] = m[e] / g;
                u.envMap.value = e.texture,
                u.samples.value = f,
                u.weights.value = m,
                u.latitudinal.value = "latitudinal" === a,
                s && (u.poleAxis.value = s);
                let {_lodMax: v} = this;
                u.dTheta.value = d,
                u.mipInt.value = v - i;
                let _ = this._sizeLods[n]
                  , x = 4 * (this._cubeSize - _);
                t9(t, 3 * _ * (n > v - 4 ? n - v + 4 : 0), x, 3 * _, 2 * _),
                o.setRenderTarget(t),
                o.render(h, t1)
            }
        }
        function t8(e, t, i) {
            let n = new B(e,t,i);
            return n.texture.mapping = 306,
            n.texture.name = "PMREM.cubeUv",
            n.scissorTest = !0,
            n
        }
        function t9(e, t, i, n, r) {
            e.viewport.set(t, i, n, r),
            e.scissor.set(t, i, n, r)
        }
        function ie() {
            return new tA({
                name: "EquirectangularToCubeUV",
                uniforms: {
                    envMap: {
                        value: null
                    }
                },
                vertexShader: ii(),
                fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
                blending: 0,
                depthTest: !1,
                depthWrite: !1
            })
        }
        function it() {
            return new tA({
                name: "CubemapToCubeUV",
                uniforms: {
                    envMap: {
                        value: null
                    },
                    flipEnvMap: {
                        value: -1
                    }
                },
                vertexShader: ii(),
                fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
                blending: 0,
                depthTest: !1,
                depthWrite: !1
            })
        }
        function ii() {
            return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
        }
        function ir(e) {
            let t = new WeakMap
              , i = null;
            function n(e) {
                let i = e.target;
                i.removeEventListener("dispose", n);
                let r = t.get(i);
                void 0 !== r && (t.delete(i),
                r.dispose())
            }
            return {
                get: function(r) {
                    if (r && r.isTexture) {
                        let a = r.mapping
                          , s = 303 === a || 304 === a
                          , o = 301 === a || 302 === a;
                        if (s || o) {
                            if (r.isRenderTargetTexture && !0 === r.needsPMREMUpdate) {
                                r.needsPMREMUpdate = !1;
                                let n = t.get(r);
                                return null === i && (i = new t7(e)),
                                n = s ? i.fromEquirectangular(r, n) : i.fromCubemap(r, n),
                                t.set(r, n),
                                n.texture
                            }
                            if (t.has(r))
                                return t.get(r).texture;
                            {
                                let a = r.image;
                                if (!(s && a && a.height > 0 || o && a && function(e) {
                                    let t = 0;
                                    for (let i = 0; i < 6; i++)
                                        void 0 !== e[i] && t++;
                                    return 6 === t
                                }(a)))
                                    return null;
                                {
                                    null === i && (i = new t7(e));
                                    let a = s ? i.fromEquirectangular(r) : i.fromCubemap(r);
                                    return t.set(r, a),
                                    r.addEventListener("dispose", n),
                                    a.texture
                                }
                            }
                        }
                    }
                    return r
                },
                dispose: function() {
                    t = new WeakMap,
                    null !== i && (i.dispose(),
                    i = null)
                }
            }
        }
        function ia(e) {
            let t = {};
            function i(i) {
                let n;
                if (void 0 !== t[i])
                    return t[i];
                switch (i) {
                case "WEBGL_depth_texture":
                    n = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    n = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    n = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    n = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                default:
                    n = e.getExtension(i)
                }
                return t[i] = n,
                n
            }
            return {
                has: function(e) {
                    return null !== i(e)
                },
                init: function(e) {
                    e.isWebGL2 ? i("EXT_color_buffer_float") : (i("WEBGL_depth_texture"),
                    i("OES_texture_float"),
                    i("OES_texture_half_float"),
                    i("OES_texture_half_float_linear"),
                    i("OES_standard_derivatives"),
                    i("OES_element_index_uint"),
                    i("OES_vertex_array_object"),
                    i("ANGLE_instanced_arrays")),
                    i("OES_texture_float_linear"),
                    i("EXT_color_buffer_half_float"),
                    i("WEBGL_multisampled_render_to_texture")
                },
                get: function(e) {
                    let t = i(e);
                    return null === t && console.warn("THREE.WebGLRenderer: " + e + " extension not supported."),
                    t
                }
            }
        }
        function is(e, t, i, n) {
            let r = {}
              , a = new WeakMap;
            function s(e) {
                let o = e.target;
                for (let e in null !== o.index && t.remove(o.index),
                o.attributes)
                    t.remove(o.attributes[e]);
                o.removeEventListener("dispose", s),
                delete r[o.id];
                let l = a.get(o);
                l && (t.remove(l),
                a.delete(o)),
                n.releaseStatesOfGeometry(o),
                !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
                i.memory.geometries--
            }
            function o(e) {
                let i = []
                  , n = e.index
                  , r = e.attributes.position
                  , s = 0;
                if (null !== n) {
                    let e = n.array;
                    s = n.version;
                    for (let t = 0, n = e.length; t < n; t += 3) {
                        let n = e[t + 0]
                          , r = e[t + 1]
                          , a = e[t + 2];
                        i.push(n, r, r, a, a, n)
                    }
                } else {
                    let e = r.array;
                    s = r.version;
                    for (let t = 0, n = e.length / 3 - 1; t < n; t += 3) {
                        let e = t + 0
                          , n = t + 1
                          , r = t + 2;
                        i.push(e, n, n, r, r, e)
                    }
                }
                let o = new (y(i) ? e7 : e6)(i,1);
                o.version = s;
                let l = a.get(e);
                l && t.remove(l),
                a.set(e, o)
            }
            return {
                get: function(e, t) {
                    return !0 === r[t.id] || (t.addEventListener("dispose", s),
                    r[t.id] = !0,
                    i.memory.geometries++),
                    t
                },
                update: function(e) {
                    let i = e.attributes;
                    for (let e in i)
                        t.update(i[e], 34962);
                    let n = e.morphAttributes;
                    for (let e in n) {
                        let i = n[e];
                        for (let e = 0, n = i.length; e < n; e++)
                            t.update(i[e], 34962)
                    }
                },
                getWireframeAttribute: function(e) {
                    let t = a.get(e);
                    if (t) {
                        let i = e.index;
                        null !== i && t.version < i.version && o(e)
                    } else
                        o(e);
                    return a.get(e)
                }
            }
        }
        function io(e, t, i, n) {
            let r, a, s;
            let o = n.isWebGL2;
            this.setMode = function(e) {
                r = e
            }
            ,
            this.setIndex = function(e) {
                a = e.type,
                s = e.bytesPerElement
            }
            ,
            this.render = function(t, n) {
                e.drawElements(r, n, a, t * s),
                i.update(n, r, 1)
            }
            ,
            this.renderInstances = function(n, l, h) {
                let u, c;
                if (0 !== h) {
                    if (o)
                        u = e,
                        c = "drawElementsInstanced";
                    else if (u = t.get("ANGLE_instanced_arrays"),
                    c = "drawElementsInstancedANGLE",
                    null === u) {
                        console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                        return
                    }
                    u[c](r, l, a, n * s, h),
                    i.update(l, r, h)
                }
            }
        }
        function il(e) {
            let t = {
                frame: 0,
                calls: 0,
                triangles: 0,
                points: 0,
                lines: 0
            };
            return {
                memory: {
                    geometries: 0,
                    textures: 0
                },
                render: t,
                programs: null,
                autoReset: !0,
                reset: function() {
                    t.frame++,
                    t.calls = 0,
                    t.triangles = 0,
                    t.points = 0,
                    t.lines = 0
                },
                update: function(e, i, n) {
                    switch (t.calls++,
                    i) {
                    case 4:
                        t.triangles += n * (e / 3);
                        break;
                    case 1:
                        t.lines += n * (e / 2);
                        break;
                    case 3:
                        t.lines += n * (e - 1);
                        break;
                    case 2:
                        t.lines += n * e;
                        break;
                    case 0:
                        t.points += n * e;
                        break;
                    default:
                        console.error("THREE.WebGLInfo: Unknown draw mode:", i)
                    }
                }
            }
        }
        function ih(e, t) {
            return e[0] - t[0]
        }
        function iu(e, t) {
            return Math.abs(t[1]) - Math.abs(e[1])
        }
        function ic(e, t, i) {
            let n = {}
              , r = new Float32Array(8)
              , a = new WeakMap
              , s = new F
              , o = [];
            for (let e = 0; e < 8; e++)
                o[e] = [e, 0];
            return {
                update: function(l, h, u, c) {
                    let d = l.morphTargetInfluences;
                    if (!0 === t.isWebGL2) {
                        let n = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color
                          , r = void 0 !== n ? n.length : 0
                          , o = a.get(h);
                        if (void 0 === o || o.count !== r) {
                            void 0 !== o && o.texture.dispose();
                            let e = void 0 !== h.morphAttributes.position
                              , i = void 0 !== h.morphAttributes.normal
                              , n = void 0 !== h.morphAttributes.color
                              , l = h.morphAttributes.position || []
                              , u = h.morphAttributes.normal || []
                              , c = h.morphAttributes.color || []
                              , d = 0;
                            !0 === e && (d = 1),
                            !0 === i && (d = 2),
                            !0 === n && (d = 3);
                            let p = h.attributes.position.count * d
                              , f = 1;
                            p > t.maxTextureSize && (f = Math.ceil(p / t.maxTextureSize),
                            p = t.maxTextureSize);
                            let m = new Float32Array(p * f * 4 * r)
                              , g = new V(m,p,f,r);
                            g.type = 1015,
                            g.needsUpdate = !0;
                            let _ = 4 * d;
                            for (let t = 0; t < r; t++) {
                                let r = l[t]
                                  , a = u[t]
                                  , o = c[t]
                                  , h = p * f * 4 * t;
                                for (let t = 0; t < r.count; t++) {
                                    let l = t * _;
                                    !0 === e && (s.fromBufferAttribute(r, t),
                                    m[h + l + 0] = s.x,
                                    m[h + l + 1] = s.y,
                                    m[h + l + 2] = s.z,
                                    m[h + l + 3] = 0),
                                    !0 === i && (s.fromBufferAttribute(a, t),
                                    m[h + l + 4] = s.x,
                                    m[h + l + 5] = s.y,
                                    m[h + l + 6] = s.z,
                                    m[h + l + 7] = 0),
                                    !0 === n && (s.fromBufferAttribute(o, t),
                                    m[h + l + 8] = s.x,
                                    m[h + l + 9] = s.y,
                                    m[h + l + 10] = s.z,
                                    m[h + l + 11] = 4 === o.itemSize ? s.w : 1)
                                }
                            }
                            o = {
                                count: r,
                                texture: g,
                                size: new v(p,f)
                            },
                            a.set(h, o),
                            h.addEventListener("dispose", function e() {
                                g.dispose(),
                                a.delete(h),
                                h.removeEventListener("dispose", e)
                            })
                        }
                        let l = 0;
                        for (let e = 0; e < d.length; e++)
                            l += d[e];
                        let u = h.morphTargetsRelative ? 1 : 1 - l;
                        c.getUniforms().setValue(e, "morphTargetBaseInfluence", u),
                        c.getUniforms().setValue(e, "morphTargetInfluences", d),
                        c.getUniforms().setValue(e, "morphTargetsTexture", o.texture, i),
                        c.getUniforms().setValue(e, "morphTargetsTextureSize", o.size)
                    } else {
                        let t = void 0 === d ? 0 : d.length
                          , i = n[h.id];
                        if (void 0 === i || i.length !== t) {
                            i = [];
                            for (let e = 0; e < t; e++)
                                i[e] = [e, 0];
                            n[h.id] = i
                        }
                        for (let e = 0; e < t; e++) {
                            let t = i[e];
                            t[0] = e,
                            t[1] = d[e]
                        }
                        i.sort(iu);
                        for (let e = 0; e < 8; e++)
                            e < t && i[e][1] ? (o[e][0] = i[e][0],
                            o[e][1] = i[e][1]) : (o[e][0] = Number.MAX_SAFE_INTEGER,
                            o[e][1] = 0);
                        o.sort(ih);
                        let a = h.morphAttributes.position
                          , s = h.morphAttributes.normal
                          , l = 0;
                        for (let e = 0; e < 8; e++) {
                            let t = o[e]
                              , i = t[0]
                              , n = t[1];
                            i !== Number.MAX_SAFE_INTEGER && n ? (a && h.getAttribute("morphTarget" + e) !== a[i] && h.setAttribute("morphTarget" + e, a[i]),
                            s && h.getAttribute("morphNormal" + e) !== s[i] && h.setAttribute("morphNormal" + e, s[i]),
                            r[e] = n,
                            l += n) : (a && !0 === h.hasAttribute("morphTarget" + e) && h.deleteAttribute("morphTarget" + e),
                            s && !0 === h.hasAttribute("morphNormal" + e) && h.deleteAttribute("morphNormal" + e),
                            r[e] = 0)
                        }
                        let u = h.morphTargetsRelative ? 1 : 1 - l;
                        c.getUniforms().setValue(e, "morphTargetBaseInfluence", u),
                        c.getUniforms().setValue(e, "morphTargetInfluences", r)
                    }
                }
            }
        }
        function id(e, t, i, n) {
            let r = new WeakMap;
            function a(e) {
                let t = e.target;
                t.removeEventListener("dispose", a),
                i.remove(t.instanceMatrix),
                null !== t.instanceColor && i.remove(t.instanceColor)
            }
            return {
                update: function(e) {
                    let s = n.render.frame
                      , o = e.geometry
                      , l = t.get(e, o);
                    return r.get(l) !== s && (t.update(l),
                    r.set(l, s)),
                    e.isInstancedMesh && (!1 === e.hasEventListener("dispose", a) && e.addEventListener("dispose", a),
                    i.update(e.instanceMatrix, 34962),
                    null !== e.instanceColor && i.update(e.instanceColor, 34962)),
                    l
                },
                dispose: function() {
                    r = new WeakMap
                }
            }
        }
        let ip = new U
          , im = new V
          , ig = new class extends U {
            constructor(e=null, t=1, i=1, n=1) {
                super(null),
                this.isData3DTexture = !0,
                this.image = {
                    data: e,
                    width: t,
                    height: i,
                    depth: n
                },
                this.magFilter = 1003,
                this.minFilter = 1003,
                this.wrapR = 1001,
                this.generateMipmaps = !1,
                this.flipY = !1,
                this.unpackAlignment = 1
            }
        }
          , iv = new tR
          , i_ = []
          , ix = []
          , iy = new Float32Array(16)
          , iM = new Float32Array(9)
          , iS = new Float32Array(4);
        function ib(e, t, i) {
            let n = e[0];
            if (n <= 0 || n > 0)
                return e;
            let r = t * i
              , a = i_[r];
            if (void 0 === a && (a = new Float32Array(r),
            i_[r] = a),
            0 !== t) {
                n.toArray(a, 0);
                for (let n = 1, r = 0; n !== t; ++n)
                    r += i,
                    e[n].toArray(a, r)
            }
            return a
        }
        function iw(e, t) {
            if (e.length !== t.length)
                return !1;
            for (let i = 0, n = e.length; i < n; i++)
                if (e[i] !== t[i])
                    return !1;
            return !0
        }
        function iT(e, t) {
            for (let i = 0, n = t.length; i < n; i++)
                e[i] = t[i]
        }
        function iE(e, t) {
            let i = ix[t];
            void 0 === i && (i = new Int32Array(t),
            ix[t] = i);
            for (let n = 0; n !== t; ++n)
                i[n] = e.allocateTextureUnit();
            return i
        }
        function iA(e, t) {
            let i = this.cache;
            i[0] !== t && (e.uniform1f(this.addr, t),
            i[0] = t)
        }
        function iC(e, t) {
            let i = this.cache;
            if (void 0 !== t.x)
                (i[0] !== t.x || i[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y),
                i[0] = t.x,
                i[1] = t.y);
            else {
                if (iw(i, t))
                    return;
                e.uniform2fv(this.addr, t),
                iT(i, t)
            }
        }
        function iL(e, t) {
            let i = this.cache;
            if (void 0 !== t.x)
                (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z),
                i[0] = t.x,
                i[1] = t.y,
                i[2] = t.z);
            else if (void 0 !== t.r)
                (i[0] !== t.r || i[1] !== t.g || i[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b),
                i[0] = t.r,
                i[1] = t.g,
                i[2] = t.b);
            else {
                if (iw(i, t))
                    return;
                e.uniform3fv(this.addr, t),
                iT(i, t)
            }
        }
        function iP(e, t) {
            let i = this.cache;
            if (void 0 !== t.x)
                (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z || i[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w),
                i[0] = t.x,
                i[1] = t.y,
                i[2] = t.z,
                i[3] = t.w);
            else {
                if (iw(i, t))
                    return;
                e.uniform4fv(this.addr, t),
                iT(i, t)
            }
        }
        function iR(e, t) {
            let i = this.cache
              , n = t.elements;
            if (void 0 === n) {
                if (iw(i, t))
                    return;
                e.uniformMatrix2fv(this.addr, !1, t),
                iT(i, t)
            } else {
                if (iw(i, n))
                    return;
                iS.set(n),
                e.uniformMatrix2fv(this.addr, !1, iS),
                iT(i, n)
            }
        }
        function iD(e, t) {
            let i = this.cache
              , n = t.elements;
            if (void 0 === n) {
                if (iw(i, t))
                    return;
                e.uniformMatrix3fv(this.addr, !1, t),
                iT(i, t)
            } else {
                if (iw(i, n))
                    return;
                iM.set(n),
                e.uniformMatrix3fv(this.addr, !1, iM),
                iT(i, n)
            }
        }
        function iI(e, t) {
            let i = this.cache
              , n = t.elements;
            if (void 0 === n) {
                if (iw(i, t))
                    return;
                e.uniformMatrix4fv(this.addr, !1, t),
                iT(i, t)
            } else {
                if (iw(i, n))
                    return;
                iy.set(n),
                e.uniformMatrix4fv(this.addr, !1, iy),
                iT(i, n)
            }
        }
        function iN(e, t) {
            let i = this.cache;
            i[0] !== t && (e.uniform1i(this.addr, t),
            i[0] = t)
        }
        function iO(e, t) {
            let i = this.cache;
            if (void 0 !== t.x)
                (i[0] !== t.x || i[1] !== t.y) && (e.uniform2i(this.addr, t.x, t.y),
                i[0] = t.x,
                i[1] = t.y);
            else {
                if (iw(i, t))
                    return;
                e.uniform2iv(this.addr, t),
                iT(i, t)
            }
        }
        function iz(e, t) {
            let i = this.cache;
            if (void 0 !== t.x)
                (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z) && (e.uniform3i(this.addr, t.x, t.y, t.z),
                i[0] = t.x,
                i[1] = t.y,
                i[2] = t.z);
            else {
                if (iw(i, t))
                    return;
                e.uniform3iv(this.addr, t),
                iT(i, t)
            }
        }
        function iU(e, t) {
            let i = this.cache;
            if (void 0 !== t.x)
                (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z || i[3] !== t.w) && (e.uniform4i(this.addr, t.x, t.y, t.z, t.w),
                i[0] = t.x,
                i[1] = t.y,
                i[2] = t.z,
                i[3] = t.w);
            else {
                if (iw(i, t))
                    return;
                e.uniform4iv(this.addr, t),
                iT(i, t)
            }
        }
        function iF(e, t) {
            let i = this.cache;
            i[0] !== t && (e.uniform1ui(this.addr, t),
            i[0] = t)
        }
        function iB(e, t) {
            let i = this.cache;
            if (void 0 !== t.x)
                (i[0] !== t.x || i[1] !== t.y) && (e.uniform2ui(this.addr, t.x, t.y),
                i[0] = t.x,
                i[1] = t.y);
            else {
                if (iw(i, t))
                    return;
                e.uniform2uiv(this.addr, t),
                iT(i, t)
            }
        }
        function iV(e, t) {
            let i = this.cache;
            if (void 0 !== t.x)
                (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z) && (e.uniform3ui(this.addr, t.x, t.y, t.z),
                i[0] = t.x,
                i[1] = t.y,
                i[2] = t.z);
            else {
                if (iw(i, t))
                    return;
                e.uniform3uiv(this.addr, t),
                iT(i, t)
            }
        }
        function ik(e, t) {
            let i = this.cache;
            if (void 0 !== t.x)
                (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z || i[3] !== t.w) && (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w),
                i[0] = t.x,
                i[1] = t.y,
                i[2] = t.z,
                i[3] = t.w);
            else {
                if (iw(i, t))
                    return;
                e.uniform4uiv(this.addr, t),
                iT(i, t)
            }
        }
        function iG(e, t, i) {
            let n = this.cache
              , r = i.allocateTextureUnit();
            n[0] !== r && (e.uniform1i(this.addr, r),
            n[0] = r),
            i.setTexture2D(t || ip, r)
        }
        function iH(e, t, i) {
            let n = this.cache
              , r = i.allocateTextureUnit();
            n[0] !== r && (e.uniform1i(this.addr, r),
            n[0] = r),
            i.setTexture3D(t || ig, r)
        }
        function iW(e, t, i) {
            let n = this.cache
              , r = i.allocateTextureUnit();
            n[0] !== r && (e.uniform1i(this.addr, r),
            n[0] = r),
            i.setTextureCube(t || iv, r)
        }
        function ij(e, t, i) {
            let n = this.cache
              , r = i.allocateTextureUnit();
            n[0] !== r && (e.uniform1i(this.addr, r),
            n[0] = r),
            i.setTexture2DArray(t || im, r)
        }
        function iq(e, t) {
            e.uniform1fv(this.addr, t)
        }
        function iX(e, t) {
            let i = ib(t, this.size, 2);
            e.uniform2fv(this.addr, i)
        }
        function iJ(e, t) {
            let i = ib(t, this.size, 3);
            e.uniform3fv(this.addr, i)
        }
        function iY(e, t) {
            let i = ib(t, this.size, 4);
            e.uniform4fv(this.addr, i)
        }
        function iZ(e, t) {
            let i = ib(t, this.size, 4);
            e.uniformMatrix2fv(this.addr, !1, i)
        }
        function iK(e, t) {
            let i = ib(t, this.size, 9);
            e.uniformMatrix3fv(this.addr, !1, i)
        }
        function iQ(e, t) {
            let i = ib(t, this.size, 16);
            e.uniformMatrix4fv(this.addr, !1, i)
        }
        function i$(e, t) {
            e.uniform1iv(this.addr, t)
        }
        function i0(e, t) {
            e.uniform2iv(this.addr, t)
        }
        function i1(e, t) {
            e.uniform3iv(this.addr, t)
        }
        function i3(e, t) {
            e.uniform4iv(this.addr, t)
        }
        function i2(e, t) {
            e.uniform1uiv(this.addr, t)
        }
        function i4(e, t) {
            e.uniform2uiv(this.addr, t)
        }
        function i5(e, t) {
            e.uniform3uiv(this.addr, t)
        }
        function i6(e, t) {
            e.uniform4uiv(this.addr, t)
        }
        function i7(e, t, i) {
            let n = this.cache
              , r = t.length
              , a = iE(i, r);
            iw(n, a) || (e.uniform1iv(this.addr, a),
            iT(n, a));
            for (let e = 0; e !== r; ++e)
                i.setTexture2D(t[e] || ip, a[e])
        }
        function i8(e, t, i) {
            let n = this.cache
              , r = t.length
              , a = iE(i, r);
            iw(n, a) || (e.uniform1iv(this.addr, a),
            iT(n, a));
            for (let e = 0; e !== r; ++e)
                i.setTexture3D(t[e] || ig, a[e])
        }
        function i9(e, t, i) {
            let n = this.cache
              , r = t.length
              , a = iE(i, r);
            iw(n, a) || (e.uniform1iv(this.addr, a),
            iT(n, a));
            for (let e = 0; e !== r; ++e)
                i.setTextureCube(t[e] || iv, a[e])
        }
        function ne(e, t, i) {
            let n = this.cache
              , r = t.length
              , a = iE(i, r);
            iw(n, a) || (e.uniform1iv(this.addr, a),
            iT(n, a));
            for (let e = 0; e !== r; ++e)
                i.setTexture2DArray(t[e] || im, a[e])
        }
        class nt {
            constructor(e, t, i) {
                this.id = e,
                this.addr = i,
                this.cache = [],
                this.setValue = function(e) {
                    switch (e) {
                    case 5126:
                        return iA;
                    case 35664:
                        return iC;
                    case 35665:
                        return iL;
                    case 35666:
                        return iP;
                    case 35674:
                        return iR;
                    case 35675:
                        return iD;
                    case 35676:
                        return iI;
                    case 5124:
                    case 35670:
                        return iN;
                    case 35667:
                    case 35671:
                        return iO;
                    case 35668:
                    case 35672:
                        return iz;
                    case 35669:
                    case 35673:
                        return iU;
                    case 5125:
                        return iF;
                    case 36294:
                        return iB;
                    case 36295:
                        return iV;
                    case 36296:
                        return ik;
                    case 35678:
                    case 36198:
                    case 36298:
                    case 36306:
                    case 35682:
                        return iG;
                    case 35679:
                    case 36299:
                    case 36307:
                        return iH;
                    case 35680:
                    case 36300:
                    case 36308:
                    case 36293:
                        return iW;
                    case 36289:
                    case 36303:
                    case 36311:
                    case 36292:
                        return ij
                    }
                }(t.type)
            }
        }
        class ni {
            constructor(e, t, i) {
                this.id = e,
                this.addr = i,
                this.cache = [],
                this.size = t.size,
                this.setValue = function(e) {
                    switch (e) {
                    case 5126:
                        return iq;
                    case 35664:
                        return iX;
                    case 35665:
                        return iJ;
                    case 35666:
                        return iY;
                    case 35674:
                        return iZ;
                    case 35675:
                        return iK;
                    case 35676:
                        return iQ;
                    case 5124:
                    case 35670:
                        return i$;
                    case 35667:
                    case 35671:
                        return i0;
                    case 35668:
                    case 35672:
                        return i1;
                    case 35669:
                    case 35673:
                        return i3;
                    case 5125:
                        return i2;
                    case 36294:
                        return i4;
                    case 36295:
                        return i5;
                    case 36296:
                        return i6;
                    case 35678:
                    case 36198:
                    case 36298:
                    case 36306:
                    case 35682:
                        return i7;
                    case 35679:
                    case 36299:
                    case 36307:
                        return i8;
                    case 35680:
                    case 36300:
                    case 36308:
                    case 36293:
                        return i9;
                    case 36289:
                    case 36303:
                    case 36311:
                    case 36292:
                        return ne
                    }
                }(t.type)
            }
        }
        class nn {
            constructor(e) {
                this.id = e,
                this.seq = [],
                this.map = {}
            }
            setValue(e, t, i) {
                let n = this.seq;
                for (let r = 0, a = n.length; r !== a; ++r) {
                    let a = n[r];
                    a.setValue(e, t[a.id], i)
                }
            }
        }
        let nr = /(\w+)(\])?(\[|\.)?/g;
        function na(e, t) {
            e.seq.push(t),
            e.map[t.id] = t
        }
        class ns {
            constructor(e, t) {
                this.seq = [],
                this.map = {};
                let i = e.getProgramParameter(t, 35718);
                for (let n = 0; n < i; ++n) {
                    let i = e.getActiveUniform(t, n)
                      , r = e.getUniformLocation(t, i.name);
                    !function(e, t, i) {
                        let n = e.name
                          , r = n.length;
                        for (nr.lastIndex = 0; ; ) {
                            let a = nr.exec(n)
                              , s = nr.lastIndex
                              , o = a[1]
                              , l = "]" === a[2]
                              , h = a[3];
                            if (l && (o |= 0),
                            void 0 === h || "[" === h && s + 2 === r) {
                                na(i, void 0 === h ? new nt(o,e,t) : new ni(o,e,t));
                                break
                            }
                            {
                                let e = i.map
                                  , t = e[o];
                                void 0 === t && na(i, t = new nn(o)),
                                i = t
                            }
                        }
                    }(i, r, this)
                }
            }
            setValue(e, t, i, n) {
                let r = this.map[t];
                void 0 !== r && r.setValue(e, i, n)
            }
            setOptional(e, t, i) {
                let n = t[i];
                void 0 !== n && this.setValue(e, i, n)
            }
            static upload(e, t, i, n) {
                for (let r = 0, a = t.length; r !== a; ++r) {
                    let a = t[r]
                      , s = i[a.id];
                    !1 !== s.needsUpdate && a.setValue(e, s.value, n)
                }
            }
            static seqWithValue(e, t) {
                let i = [];
                for (let n = 0, r = e.length; n !== r; ++n) {
                    let r = e[n];
                    r.id in t && i.push(r)
                }
                return i
            }
        }
        function no(e, t, i) {
            let n = e.createShader(t);
            return e.shaderSource(n, i),
            e.compileShader(n),
            n
        }
        let nl = 0;
        function nh(e, t, i) {
            let n = e.getShaderParameter(t, 35713)
              , r = e.getShaderInfoLog(t).trim();
            if (n && "" === r)
                return "";
            let a = /ERROR: 0:(\d+)/.exec(r);
            if (!a)
                return r;
            {
                let n = parseInt(a[1]);
                return i.toUpperCase() + "\n\n" + r + "\n\n" + function(e, t) {
                    let i = e.split("\n")
                      , n = []
                      , r = Math.max(t - 6, 0)
                      , a = Math.min(t + 6, i.length);
                    for (let e = r; e < a; e++) {
                        let r = e + 1;
                        n.push(`${r === t ? ">" : " "} ${r}: ${i[e]}`)
                    }
                    return n.join("\n")
                }(e.getShaderSource(t), n)
            }
        }
        function nu(e) {
            return "" !== e
        }
        function nc(e, t) {
            let i = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
            return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, i).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows)
        }
        function nd(e, t) {
            return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection)
        }
        let np = /^[ \t]*#include +<([\w\d./]+)>/gm;
        function nf(e) {
            return e.replace(np, nm)
        }
        function nm(e, t) {
            let i = tH[t];
            if (void 0 === i)
                throw Error("Can not resolve #include <" + t + ">");
            return nf(i)
        }
        let ng = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
        function nv(e) {
            return e.replace(ng, n_)
        }
        function n_(e, t, i, n) {
            let r = "";
            for (let e = parseInt(t); e < parseInt(i); e++)
                r += n.replace(/\[\s*i\s*\]/g, "[ " + e + " ]").replace(/UNROLLED_LOOP_INDEX/g, e);
            return r
        }
        function nx(e) {
            let t = "precision " + e.precision + " float;\nprecision " + e.precision + " int;";
            return "highp" === e.precision ? t += "\n#define HIGH_PRECISION" : "mediump" === e.precision ? t += "\n#define MEDIUM_PRECISION" : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"),
            t
        }
        function ny(e, t, i, n) {
            let r, a, o, l, h, u;
            let c = e.getContext()
              , d = i.defines
              , p = i.vertexShader
              , f = i.fragmentShader
              , m = (h = "SHADOWMAP_TYPE_BASIC",
            1 === i.shadowMapType ? h = "SHADOWMAP_TYPE_PCF" : 2 === i.shadowMapType ? h = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === i.shadowMapType && (h = "SHADOWMAP_TYPE_VSM"),
            h)
              , g = function(e) {
                let t = "ENVMAP_TYPE_CUBE";
                if (e.envMap)
                    switch (e.envMapMode) {
                    case 301:
                    case 302:
                        t = "ENVMAP_TYPE_CUBE";
                        break;
                    case 306:
                        t = "ENVMAP_TYPE_CUBE_UV"
                    }
                return t
            }(i)
              , v = (u = "ENVMAP_MODE_REFLECTION",
            i.envMap && 302 === i.envMapMode && (u = "ENVMAP_MODE_REFRACTION"),
            u)
              , _ = function(e) {
                let t = "ENVMAP_BLENDING_NONE";
                if (e.envMap)
                    switch (e.combine) {
                    case 0:
                        t = "ENVMAP_BLENDING_MULTIPLY";
                        break;
                    case 1:
                        t = "ENVMAP_BLENDING_MIX";
                        break;
                    case 2:
                        t = "ENVMAP_BLENDING_ADD"
                    }
                return t
            }(i)
              , x = function(e) {
                let t = e.envMapCubeUVHeight;
                if (null === t)
                    return null;
                let i = Math.log2(t) - 2;
                return {
                    texelWidth: 1 / (3 * Math.max(Math.pow(2, i), 112)),
                    texelHeight: 1 / t,
                    maxMip: i
                }
            }(i)
              , y = i.isWebGL2 ? "" : function(e) {
                let t = [e.extensionDerivatives || e.envMapCubeUVHeight || e.bumpMap || e.tangentSpaceNormalMap || e.clearcoatNormalMap || e.flatShading || "physical" === e.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (e.extensionFragDepth || e.logarithmicDepthBuffer) && e.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", e.extensionDrawBuffers && e.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (e.extensionShaderTextureLOD || e.envMap || e.transmission) && e.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""];
                return t.filter(nu).join("\n")
            }(i)
              , M = function(e) {
                let t = [];
                for (let i in e) {
                    let n = e[i];
                    !1 !== n && t.push("#define " + i + " " + n)
                }
                return t.join("\n")
            }(d)
              , S = c.createProgram()
              , b = i.glslVersion ? "#version " + i.glslVersion + "\n" : "";
            i.isRawShaderMaterial ? ((r = [M].filter(nu).join("\n")).length > 0 && (r += "\n"),
            (a = [y, M].filter(nu).join("\n")).length > 0 && (a += "\n")) : (r = [nx(i), "#define SHADER_NAME " + i.shaderName, M, i.instancing ? "#define USE_INSTANCING" : "", i.instancingColor ? "#define USE_INSTANCING_COLOR" : "", i.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "", i.map ? "#define USE_MAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + v : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.aoMap ? "#define USE_AOMAP" : "", i.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.normalMap && i.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", i.normalMap && i.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", i.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", i.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", i.displacementMap && i.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", i.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i.metalnessMap ? "#define USE_METALNESSMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.transmission ? "#define USE_TRANSMISSION" : "", i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", i.thicknessMap ? "#define USE_THICKNESSMAP" : "", i.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", i.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", i.vertexTangents ? "#define USE_TANGENT" : "", i.vertexColors ? "#define USE_COLOR" : "", i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", i.vertexUvs ? "#define USE_UV" : "", i.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.skinning ? "#define USE_SKINNING" : "", i.morphTargets ? "#define USE_MORPHTARGETS" : "", i.morphNormals && !1 === i.flatShading ? "#define USE_MORPHNORMALS" : "", i.morphColors && i.isWebGL2 ? "#define USE_MORPHCOLORS" : "", i.morphTargetsCount > 0 && i.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", i.morphTargetsCount > 0 && i.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + i.morphTextureStride : "", i.morphTargetsCount > 0 && i.isWebGL2 ? "#define MORPHTARGETS_COUNT " + i.morphTargetsCount : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + m : "", i.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", i.logarithmicDepthBuffer && i.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(nu).join("\n"),
            a = [y, nx(i), "#define SHADER_NAME " + i.shaderName, M, i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "", i.map ? "#define USE_MAP" : "", i.matcap ? "#define USE_MATCAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + g : "", i.envMap ? "#define " + v : "", i.envMap ? "#define " + _ : "", x ? "#define CUBEUV_TEXEL_WIDTH " + x.texelWidth : "", x ? "#define CUBEUV_TEXEL_HEIGHT " + x.texelHeight : "", x ? "#define CUBEUV_MAX_MIP " + x.maxMip + ".0" : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.aoMap ? "#define USE_AOMAP" : "", i.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.normalMap && i.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", i.normalMap && i.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", i.clearcoat ? "#define USE_CLEARCOAT" : "", i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", i.iridescence ? "#define USE_IRIDESCENCE" : "", i.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", i.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", i.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i.metalnessMap ? "#define USE_METALNESSMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.alphaTest ? "#define USE_ALPHATEST" : "", i.sheen ? "#define USE_SHEEN" : "", i.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", i.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", i.transmission ? "#define USE_TRANSMISSION" : "", i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", i.thicknessMap ? "#define USE_THICKNESSMAP" : "", i.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", i.vertexTangents ? "#define USE_TANGENT" : "", i.vertexColors || i.instancingColor ? "#define USE_COLOR" : "", i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", i.vertexUvs ? "#define USE_UV" : "", i.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", i.gradientMap ? "#define USE_GRADIENTMAP" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + m : "", i.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", i.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", i.logarithmicDepthBuffer && i.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== i.toneMapping ? "#define TONE_MAPPING" : "", 0 !== i.toneMapping ? tH.tonemapping_pars_fragment : "", 0 !== i.toneMapping ? function(e, t) {
                let i;
                switch (t) {
                case 1:
                    i = "Linear";
                    break;
                case 2:
                    i = "Reinhard";
                    break;
                case 3:
                    i = "OptimizedCineon";
                    break;
                case 4:
                    i = "ACESFilmic";
                    break;
                case 5:
                    i = "Custom";
                    break;
                default:
                    console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t),
                    i = "Linear"
                }
                return "vec3 " + e + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
            }("toneMapping", i.toneMapping) : "", i.dithering ? "#define DITHERING" : "", i.opaque ? "#define OPAQUE" : "", tH.encodings_pars_fragment, function(e, t) {
                let i = function(e) {
                    switch (e) {
                    case 3e3:
                        return ["Linear", "( value )"];
                    case 3001:
                        return ["sRGB", "( value )"];
                    default:
                        return console.warn("THREE.WebGLProgram: Unsupported encoding:", e),
                        ["Linear", "( value )"]
                    }
                }(t);
                return "vec4 " + e + "( vec4 value ) { return LinearTo" + i[0] + i[1] + "; }"
            }("linearToOutputTexel", i.outputEncoding), i.useDepthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "", "\n"].filter(nu).join("\n")),
            p = nd(p = nc(p = nf(p), i), i),
            f = nd(f = nc(f = nf(f), i), i),
            p = nv(p),
            f = nv(f),
            i.isWebGL2 && !0 !== i.isRawShaderMaterial && (b = "#version 300 es\n",
            r = "precision mediump sampler2DArray;\n#define attribute in\n#define varying out\n#define texture2D texture\n" + r,
            a = ["#define varying in", i.glslVersion === s ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", i.glslVersion === s ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + a);
            let w = b + r + p
              , T = b + a + f
              , E = no(c, 35633, w)
              , A = no(c, 35632, T);
            if (c.attachShader(S, E),
            c.attachShader(S, A),
            void 0 !== i.index0AttributeName ? c.bindAttribLocation(S, 0, i.index0AttributeName) : !0 === i.morphTargets && c.bindAttribLocation(S, 0, "position"),
            c.linkProgram(S),
            e.debug.checkShaderErrors) {
                let e = c.getProgramInfoLog(S).trim()
                  , t = c.getShaderInfoLog(E).trim()
                  , i = c.getShaderInfoLog(A).trim()
                  , n = !0
                  , s = !0;
                if (!1 === c.getProgramParameter(S, 35714)) {
                    n = !1;
                    let t = nh(c, E, "vertex")
                      , i = nh(c, A, "fragment");
                    console.error("THREE.WebGLProgram: Shader Error " + c.getError() + " - VALIDATE_STATUS " + c.getProgramParameter(S, 35715) + "\n\nProgram Info Log: " + e + "\n" + t + "\n" + i)
                } else
                    "" !== e ? console.warn("THREE.WebGLProgram: Program Info Log:", e) : ("" === t || "" === i) && (s = !1);
                s && (this.diagnostics = {
                    runnable: n,
                    programLog: e,
                    vertexShader: {
                        log: t,
                        prefix: r
                    },
                    fragmentShader: {
                        log: i,
                        prefix: a
                    }
                })
            }
            return c.deleteShader(E),
            c.deleteShader(A),
            this.getUniforms = function() {
                return void 0 === o && (o = new ns(c,S)),
                o
            }
            ,
            this.getAttributes = function() {
                return void 0 === l && (l = function(e, t) {
                    let i = {}
                      , n = e.getProgramParameter(t, 35721);
                    for (let r = 0; r < n; r++) {
                        let n = e.getActiveAttrib(t, r)
                          , a = n.name
                          , s = 1;
                        35674 === n.type && (s = 2),
                        35675 === n.type && (s = 3),
                        35676 === n.type && (s = 4),
                        i[a] = {
                            type: n.type,
                            location: e.getAttribLocation(t, a),
                            locationSize: s
                        }
                    }
                    return i
                }(c, S)),
                l
            }
            ,
            this.destroy = function() {
                n.releaseStatesOfProgram(this),
                c.deleteProgram(S),
                this.program = void 0
            }
            ,
            this.name = i.shaderName,
            this.id = nl++,
            this.cacheKey = t,
            this.usedTimes = 1,
            this.program = S,
            this.vertexShader = E,
            this.fragmentShader = A,
            this
        }
        let nM = 0;
        class nS {
            constructor() {
                this.shaderCache = new Map,
                this.materialCache = new Map
            }
            update(e) {
                let t = e.vertexShader
                  , i = e.fragmentShader
                  , n = this._getShaderStage(t)
                  , r = this._getShaderStage(i)
                  , a = this._getShaderCacheForMaterial(e);
                return !1 === a.has(n) && (a.add(n),
                n.usedTimes++),
                !1 === a.has(r) && (a.add(r),
                r.usedTimes++),
                this
            }
            remove(e) {
                let t = this.materialCache.get(e);
                for (let e of t)
                    e.usedTimes--,
                    0 === e.usedTimes && this.shaderCache.delete(e.code);
                return this.materialCache.delete(e),
                this
            }
            getVertexShaderID(e) {
                return this._getShaderStage(e.vertexShader).id
            }
            getFragmentShaderID(e) {
                return this._getShaderStage(e.fragmentShader).id
            }
            dispose() {
                this.shaderCache.clear(),
                this.materialCache.clear()
            }
            _getShaderCacheForMaterial(e) {
                let t = this.materialCache
                  , i = t.get(e);
                return void 0 === i && (i = new Set,
                t.set(e, i)),
                i
            }
            _getShaderStage(e) {
                let t = this.shaderCache
                  , i = t.get(e);
                return void 0 === i && (i = new nb(e),
                t.set(e, i)),
                i
            }
        }
        class nb {
            constructor(e) {
                this.id = nM++,
                this.code = e,
                this.usedTimes = 0
            }
        }
        function nw(e, t, i, n, r, a, s) {
            let o = new eC
              , l = new nS
              , h = []
              , u = r.isWebGL2
              , c = r.logarithmicDepthBuffer
              , d = r.vertexTextures
              , p = r.precision
              , f = {
                MeshDepthMaterial: "depth",
                MeshDistanceMaterial: "distanceRGBA",
                MeshNormalMaterial: "normal",
                MeshBasicMaterial: "basic",
                MeshLambertMaterial: "lambert",
                MeshPhongMaterial: "phong",
                MeshToonMaterial: "toon",
                MeshStandardMaterial: "physical",
                MeshPhysicalMaterial: "physical",
                MeshMatcapMaterial: "matcap",
                LineBasicMaterial: "basic",
                LineDashedMaterial: "dashed",
                PointsMaterial: "points",
                ShadowMaterial: "shadow",
                SpriteMaterial: "sprite"
            };
            return {
                getParameters: function(a, o, h, m, g) {
                    let v, _, x, y;
                    let M = m.fog
                      , S = g.geometry
                      , b = a.isMeshStandardMaterial ? m.environment : null
                      , w = (a.isMeshStandardMaterial ? i : t).get(a.envMap || b)
                      , T = w && 306 === w.mapping ? w.image.height : null
                      , E = f[a.type];
                    null !== a.precision && (p = r.getMaxPrecision(a.precision)) !== a.precision && console.warn("THREE.WebGLProgram.getParameters:", a.precision, "not supported, using", p, "instead.");
                    let A = S.morphAttributes.position || S.morphAttributes.normal || S.morphAttributes.color
                      , C = void 0 !== A ? A.length : 0
                      , L = 0;
                    if (void 0 !== S.morphAttributes.position && (L = 1),
                    void 0 !== S.morphAttributes.normal && (L = 2),
                    void 0 !== S.morphAttributes.color && (L = 3),
                    E) {
                        let e = tj[E];
                        v = e.vertexShader,
                        _ = e.fragmentShader
                    } else
                        v = a.vertexShader,
                        _ = a.fragmentShader,
                        l.update(a),
                        x = l.getVertexShaderID(a),
                        y = l.getFragmentShaderID(a);
                    let P = e.getRenderTarget()
                      , R = a.alphaTest > 0
                      , D = a.clearcoat > 0
                      , I = a.iridescence > 0
                      , N = {
                        isWebGL2: u,
                        shaderID: E,
                        shaderName: a.type,
                        vertexShader: v,
                        fragmentShader: _,
                        defines: a.defines,
                        customVertexShaderID: x,
                        customFragmentShaderID: y,
                        isRawShaderMaterial: !0 === a.isRawShaderMaterial,
                        glslVersion: a.glslVersion,
                        precision: p,
                        instancing: !0 === g.isInstancedMesh,
                        instancingColor: !0 === g.isInstancedMesh && null !== g.instanceColor,
                        supportsVertexTextures: d,
                        outputEncoding: null === P ? e.outputEncoding : !0 === P.isXRRenderTarget ? P.texture.encoding : 3e3,
                        map: !!a.map,
                        matcap: !!a.matcap,
                        envMap: !!w,
                        envMapMode: w && w.mapping,
                        envMapCubeUVHeight: T,
                        lightMap: !!a.lightMap,
                        aoMap: !!a.aoMap,
                        emissiveMap: !!a.emissiveMap,
                        bumpMap: !!a.bumpMap,
                        normalMap: !!a.normalMap,
                        objectSpaceNormalMap: 1 === a.normalMapType,
                        tangentSpaceNormalMap: 0 === a.normalMapType,
                        decodeVideoTexture: !!a.map && !0 === a.map.isVideoTexture && 3001 === a.map.encoding,
                        clearcoat: D,
                        clearcoatMap: D && !!a.clearcoatMap,
                        clearcoatRoughnessMap: D && !!a.clearcoatRoughnessMap,
                        clearcoatNormalMap: D && !!a.clearcoatNormalMap,
                        iridescence: I,
                        iridescenceMap: I && !!a.iridescenceMap,
                        iridescenceThicknessMap: I && !!a.iridescenceThicknessMap,
                        displacementMap: !!a.displacementMap,
                        roughnessMap: !!a.roughnessMap,
                        metalnessMap: !!a.metalnessMap,
                        specularMap: !!a.specularMap,
                        specularIntensityMap: !!a.specularIntensityMap,
                        specularColorMap: !!a.specularColorMap,
                        opaque: !1 === a.transparent && 1 === a.blending,
                        alphaMap: !!a.alphaMap,
                        alphaTest: R,
                        gradientMap: !!a.gradientMap,
                        sheen: a.sheen > 0,
                        sheenColorMap: !!a.sheenColorMap,
                        sheenRoughnessMap: !!a.sheenRoughnessMap,
                        transmission: a.transmission > 0,
                        transmissionMap: !!a.transmissionMap,
                        thicknessMap: !!a.thicknessMap,
                        combine: a.combine,
                        vertexTangents: !!a.normalMap && !!S.attributes.tangent,
                        vertexColors: a.vertexColors,
                        vertexAlphas: !0 === a.vertexColors && !!S.attributes.color && 4 === S.attributes.color.itemSize,
                        vertexUvs: !!a.map || !!a.bumpMap || !!a.normalMap || !!a.specularMap || !!a.alphaMap || !!a.emissiveMap || !!a.roughnessMap || !!a.metalnessMap || !!a.clearcoatMap || !!a.clearcoatRoughnessMap || !!a.clearcoatNormalMap || !!a.iridescenceMap || !!a.iridescenceThicknessMap || !!a.displacementMap || !!a.transmissionMap || !!a.thicknessMap || !!a.specularIntensityMap || !!a.specularColorMap || !!a.sheenColorMap || !!a.sheenRoughnessMap,
                        uvsVertexOnly: !(a.map || a.bumpMap || a.normalMap || a.specularMap || a.alphaMap || a.emissiveMap || a.roughnessMap || a.metalnessMap || a.clearcoatNormalMap || a.iridescenceMap || a.iridescenceThicknessMap || a.transmission > 0 || a.transmissionMap || a.thicknessMap || a.specularIntensityMap || a.specularColorMap || a.sheen > 0 || a.sheenColorMap || a.sheenRoughnessMap) && !!a.displacementMap,
                        fog: !!M,
                        useFog: !0 === a.fog,
                        fogExp2: M && M.isFogExp2,
                        flatShading: !!a.flatShading,
                        sizeAttenuation: a.sizeAttenuation,
                        logarithmicDepthBuffer: c,
                        skinning: !0 === g.isSkinnedMesh,
                        morphTargets: void 0 !== S.morphAttributes.position,
                        morphNormals: void 0 !== S.morphAttributes.normal,
                        morphColors: void 0 !== S.morphAttributes.color,
                        morphTargetsCount: C,
                        morphTextureStride: L,
                        numDirLights: o.directional.length,
                        numPointLights: o.point.length,
                        numSpotLights: o.spot.length,
                        numSpotLightMaps: o.spotLightMap.length,
                        numRectAreaLights: o.rectArea.length,
                        numHemiLights: o.hemi.length,
                        numDirLightShadows: o.directionalShadowMap.length,
                        numPointLightShadows: o.pointShadowMap.length,
                        numSpotLightShadows: o.spotShadowMap.length,
                        numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
                        numClippingPlanes: s.numPlanes,
                        numClipIntersection: s.numIntersection,
                        dithering: a.dithering,
                        shadowMapEnabled: e.shadowMap.enabled && h.length > 0,
                        shadowMapType: e.shadowMap.type,
                        toneMapping: a.toneMapped ? e.toneMapping : 0,
                        physicallyCorrectLights: e.physicallyCorrectLights,
                        premultipliedAlpha: a.premultipliedAlpha,
                        doubleSided: 2 === a.side,
                        flipSided: 1 === a.side,
                        useDepthPacking: !!a.depthPacking,
                        depthPacking: a.depthPacking || 0,
                        index0AttributeName: a.index0AttributeName,
                        extensionDerivatives: a.extensions && a.extensions.derivatives,
                        extensionFragDepth: a.extensions && a.extensions.fragDepth,
                        extensionDrawBuffers: a.extensions && a.extensions.drawBuffers,
                        extensionShaderTextureLOD: a.extensions && a.extensions.shaderTextureLOD,
                        rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
                        rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
                        rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
                        customProgramCacheKey: a.customProgramCacheKey()
                    };
                    return N
                },
                getProgramCacheKey: function(t) {
                    let i = [];
                    if (t.shaderID ? i.push(t.shaderID) : (i.push(t.customVertexShaderID),
                    i.push(t.customFragmentShaderID)),
                    void 0 !== t.defines)
                        for (let e in t.defines)
                            i.push(e),
                            i.push(t.defines[e]);
                    return !1 === t.isRawShaderMaterial && (i.push(t.precision),
                    i.push(t.outputEncoding),
                    i.push(t.envMapMode),
                    i.push(t.envMapCubeUVHeight),
                    i.push(t.combine),
                    i.push(t.vertexUvs),
                    i.push(t.fogExp2),
                    i.push(t.sizeAttenuation),
                    i.push(t.morphTargetsCount),
                    i.push(t.morphAttributeCount),
                    i.push(t.numDirLights),
                    i.push(t.numPointLights),
                    i.push(t.numSpotLights),
                    i.push(t.numSpotLightMaps),
                    i.push(t.numHemiLights),
                    i.push(t.numRectAreaLights),
                    i.push(t.numDirLightShadows),
                    i.push(t.numPointLightShadows),
                    i.push(t.numSpotLightShadows),
                    i.push(t.numSpotLightShadowsWithMaps),
                    i.push(t.shadowMapType),
                    i.push(t.toneMapping),
                    i.push(t.numClippingPlanes),
                    i.push(t.numClipIntersection),
                    i.push(t.depthPacking),
                    o.disableAll(),
                    t.isWebGL2 && o.enable(0),
                    t.supportsVertexTextures && o.enable(1),
                    t.instancing && o.enable(2),
                    t.instancingColor && o.enable(3),
                    t.map && o.enable(4),
                    t.matcap && o.enable(5),
                    t.envMap && o.enable(6),
                    t.lightMap && o.enable(7),
                    t.aoMap && o.enable(8),
                    t.emissiveMap && o.enable(9),
                    t.bumpMap && o.enable(10),
                    t.normalMap && o.enable(11),
                    t.objectSpaceNormalMap && o.enable(12),
                    t.tangentSpaceNormalMap && o.enable(13),
                    t.clearcoat && o.enable(14),
                    t.clearcoatMap && o.enable(15),
                    t.clearcoatRoughnessMap && o.enable(16),
                    t.clearcoatNormalMap && o.enable(17),
                    t.iridescence && o.enable(18),
                    t.iridescenceMap && o.enable(19),
                    t.iridescenceThicknessMap && o.enable(20),
                    t.displacementMap && o.enable(21),
                    t.specularMap && o.enable(22),
                    t.roughnessMap && o.enable(23),
                    t.metalnessMap && o.enable(24),
                    t.gradientMap && o.enable(25),
                    t.alphaMap && o.enable(26),
                    t.alphaTest && o.enable(27),
                    t.vertexColors && o.enable(28),
                    t.vertexAlphas && o.enable(29),
                    t.vertexUvs && o.enable(30),
                    t.vertexTangents && o.enable(31),
                    t.uvsVertexOnly && o.enable(32),
                    i.push(o.mask),
                    o.disableAll(),
                    t.fog && o.enable(0),
                    t.useFog && o.enable(1),
                    t.flatShading && o.enable(2),
                    t.logarithmicDepthBuffer && o.enable(3),
                    t.skinning && o.enable(4),
                    t.morphTargets && o.enable(5),
                    t.morphNormals && o.enable(6),
                    t.morphColors && o.enable(7),
                    t.premultipliedAlpha && o.enable(8),
                    t.shadowMapEnabled && o.enable(9),
                    t.physicallyCorrectLights && o.enable(10),
                    t.doubleSided && o.enable(11),
                    t.flipSided && o.enable(12),
                    t.useDepthPacking && o.enable(13),
                    t.dithering && o.enable(14),
                    t.specularIntensityMap && o.enable(15),
                    t.specularColorMap && o.enable(16),
                    t.transmission && o.enable(17),
                    t.transmissionMap && o.enable(18),
                    t.thicknessMap && o.enable(19),
                    t.sheen && o.enable(20),
                    t.sheenColorMap && o.enable(21),
                    t.sheenRoughnessMap && o.enable(22),
                    t.decodeVideoTexture && o.enable(23),
                    t.opaque && o.enable(24),
                    i.push(o.mask),
                    i.push(e.outputEncoding)),
                    i.push(t.customProgramCacheKey),
                    i.join()
                },
                getUniforms: function(e) {
                    let t;
                    let i = f[e.type];
                    if (i) {
                        let e = tj[i];
                        t = tE.clone(e.uniforms)
                    } else
                        t = e.uniforms;
                    return t
                },
                acquireProgram: function(t, i) {
                    let n;
                    for (let e = 0, t = h.length; e < t; e++) {
                        let t = h[e];
                        if (t.cacheKey === i) {
                            n = t,
                            ++n.usedTimes;
                            break
                        }
                    }
                    return void 0 === n && (n = new ny(e,i,t,a),
                    h.push(n)),
                    n
                },
                releaseProgram: function(e) {
                    if (0 == --e.usedTimes) {
                        let t = h.indexOf(e);
                        h[t] = h[h.length - 1],
                        h.pop(),
                        e.destroy()
                    }
                },
                releaseShaderCache: function(e) {
                    l.remove(e)
                },
                programs: h,
                dispose: function() {
                    l.dispose()
                }
            }
        }
        function nT() {
            let e = new WeakMap;
            return {
                get: function(t) {
                    let i = e.get(t);
                    return void 0 === i && (i = {},
                    e.set(t, i)),
                    i
                },
                remove: function(t) {
                    e.delete(t)
                },
                update: function(t, i, n) {
                    e.get(t)[i] = n
                },
                dispose: function() {
                    e = new WeakMap
                }
            }
        }
        function nE(e, t) {
            return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
        }
        function nA(e, t) {
            return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
        }
        function nC() {
            let e = []
              , t = 0
              , i = []
              , n = []
              , r = [];
            function a(i, n, r, a, s, o) {
                let l = e[t];
                return void 0 === l ? (l = {
                    id: i.id,
                    object: i,
                    geometry: n,
                    material: r,
                    groupOrder: a,
                    renderOrder: i.renderOrder,
                    z: s,
                    group: o
                },
                e[t] = l) : (l.id = i.id,
                l.object = i,
                l.geometry = n,
                l.material = r,
                l.groupOrder = a,
                l.renderOrder = i.renderOrder,
                l.z = s,
                l.group = o),
                t++,
                l
            }
            return {
                opaque: i,
                transmissive: n,
                transparent: r,
                init: function() {
                    t = 0,
                    i.length = 0,
                    n.length = 0,
                    r.length = 0
                },
                push: function(e, t, s, o, l, h) {
                    let u = a(e, t, s, o, l, h);
                    s.transmission > 0 ? n.push(u) : !0 === s.transparent ? r.push(u) : i.push(u)
                },
                unshift: function(e, t, s, o, l, h) {
                    let u = a(e, t, s, o, l, h);
                    s.transmission > 0 ? n.unshift(u) : !0 === s.transparent ? r.unshift(u) : i.unshift(u)
                },
                finish: function() {
                    for (let i = t, n = e.length; i < n; i++) {
                        let t = e[i];
                        if (null === t.id)
                            break;
                        t.id = null,
                        t.object = null,
                        t.geometry = null,
                        t.material = null,
                        t.group = null
                    }
                },
                sort: function(e, t) {
                    i.length > 1 && i.sort(e || nE),
                    n.length > 1 && n.sort(t || nA),
                    r.length > 1 && r.sort(t || nA)
                }
            }
        }
        function nL() {
            let e = new WeakMap;
            return {
                get: function(t, i) {
                    let n;
                    let r = e.get(t);
                    return void 0 === r ? (n = new nC,
                    e.set(t, [n])) : i >= r.length ? (n = new nC,
                    r.push(n)) : n = r[i],
                    n
                },
                dispose: function() {
                    e = new WeakMap
                }
            }
        }
        function nP() {
            let e = {};
            return {
                get: function(t) {
                    let i;
                    if (void 0 !== e[t.id])
                        return e[t.id];
                    switch (t.type) {
                    case "DirectionalLight":
                        i = {
                            direction: new G,
                            color: new D
                        };
                        break;
                    case "SpotLight":
                        i = {
                            position: new G,
                            direction: new G,
                            color: new D,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0
                        };
                        break;
                    case "PointLight":
                        i = {
                            position: new G,
                            color: new D,
                            distance: 0,
                            decay: 0
                        };
                        break;
                    case "HemisphereLight":
                        i = {
                            direction: new G,
                            skyColor: new D,
                            groundColor: new D
                        };
                        break;
                    case "RectAreaLight":
                        i = {
                            color: new D,
                            position: new G,
                            halfWidth: new G,
                            halfHeight: new G
                        }
                    }
                    return e[t.id] = i,
                    i
                }
            }
        }
        let nR = 0;
        function nD(e, t) {
            return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (e.map ? 1 : 0)
        }
        function nI(e, t) {
            let i = new nP
              , n = function() {
                let e = {};
                return {
                    get: function(t) {
                        let i;
                        if (void 0 !== e[t.id])
                            return e[t.id];
                        switch (t.type) {
                        case "DirectionalLight":
                        case "SpotLight":
                            i = {
                                shadowBias: 0,
                                shadowNormalBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new v
                            };
                            break;
                        case "PointLight":
                            i = {
                                shadowBias: 0,
                                shadowNormalBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new v,
                                shadowCameraNear: 1,
                                shadowCameraFar: 1e3
                            }
                        }
                        return e[t.id] = i,
                        i
                    }
                }
            }()
              , r = {
                version: 0,
                hash: {
                    directionalLength: -1,
                    pointLength: -1,
                    spotLength: -1,
                    rectAreaLength: -1,
                    hemiLength: -1,
                    numDirectionalShadows: -1,
                    numPointShadows: -1,
                    numSpotShadows: -1,
                    numSpotMaps: -1
                },
                ambient: [0, 0, 0],
                probe: [],
                directional: [],
                directionalShadow: [],
                directionalShadowMap: [],
                directionalShadowMatrix: [],
                spot: [],
                spotLightMap: [],
                spotShadow: [],
                spotShadowMap: [],
                spotLightMatrix: [],
                rectArea: [],
                rectAreaLTC1: null,
                rectAreaLTC2: null,
                point: [],
                pointShadow: [],
                pointShadowMap: [],
                pointShadowMatrix: [],
                hemi: [],
                numSpotLightShadowsWithMaps: 0
            };
            for (let e = 0; e < 9; e++)
                r.probe.push(new G);
            let a = new G
              , s = new ev
              , o = new ev;
            return {
                setup: function(a, s) {
                    let o = 0
                      , l = 0
                      , h = 0;
                    for (let e = 0; e < 9; e++)
                        r.probe[e].set(0, 0, 0);
                    let u = 0
                      , c = 0
                      , d = 0
                      , p = 0
                      , f = 0
                      , m = 0
                      , g = 0
                      , v = 0
                      , _ = 0
                      , x = 0;
                    a.sort(nD);
                    let y = !0 !== s ? Math.PI : 1;
                    for (let e = 0, t = a.length; e < t; e++) {
                        let t = a[e]
                          , s = t.color
                          , M = t.intensity
                          , S = t.distance
                          , b = t.shadow && t.shadow.map ? t.shadow.map.texture : null;
                        if (t.isAmbientLight)
                            o += s.r * M * y,
                            l += s.g * M * y,
                            h += s.b * M * y;
                        else if (t.isLightProbe)
                            for (let e = 0; e < 9; e++)
                                r.probe[e].addScaledVector(t.sh.coefficients[e], M);
                        else if (t.isDirectionalLight) {
                            let e = i.get(t);
                            if (e.color.copy(t.color).multiplyScalar(t.intensity * y),
                            t.castShadow) {
                                let e = t.shadow
                                  , i = n.get(t);
                                i.shadowBias = e.bias,
                                i.shadowNormalBias = e.normalBias,
                                i.shadowRadius = e.radius,
                                i.shadowMapSize = e.mapSize,
                                r.directionalShadow[u] = i,
                                r.directionalShadowMap[u] = b,
                                r.directionalShadowMatrix[u] = t.shadow.matrix,
                                m++
                            }
                            r.directional[u] = e,
                            u++
                        } else if (t.isSpotLight) {
                            let e = i.get(t);
                            e.position.setFromMatrixPosition(t.matrixWorld),
                            e.color.copy(s).multiplyScalar(M * y),
                            e.distance = S,
                            e.coneCos = Math.cos(t.angle),
                            e.penumbraCos = Math.cos(t.angle * (1 - t.penumbra)),
                            e.decay = t.decay,
                            r.spot[d] = e;
                            let a = t.shadow;
                            if (t.map && (r.spotLightMap[_] = t.map,
                            _++,
                            a.updateMatrices(t),
                            t.castShadow && x++),
                            r.spotLightMatrix[d] = a.matrix,
                            t.castShadow) {
                                let e = n.get(t);
                                e.shadowBias = a.bias,
                                e.shadowNormalBias = a.normalBias,
                                e.shadowRadius = a.radius,
                                e.shadowMapSize = a.mapSize,
                                r.spotShadow[d] = e,
                                r.spotShadowMap[d] = b,
                                v++
                            }
                            d++
                        } else if (t.isRectAreaLight) {
                            let e = i.get(t);
                            e.color.copy(s).multiplyScalar(M),
                            e.halfWidth.set(.5 * t.width, 0, 0),
                            e.halfHeight.set(0, .5 * t.height, 0),
                            r.rectArea[p] = e,
                            p++
                        } else if (t.isPointLight) {
                            let e = i.get(t);
                            if (e.color.copy(t.color).multiplyScalar(t.intensity * y),
                            e.distance = t.distance,
                            e.decay = t.decay,
                            t.castShadow) {
                                let e = t.shadow
                                  , i = n.get(t);
                                i.shadowBias = e.bias,
                                i.shadowNormalBias = e.normalBias,
                                i.shadowRadius = e.radius,
                                i.shadowMapSize = e.mapSize,
                                i.shadowCameraNear = e.camera.near,
                                i.shadowCameraFar = e.camera.far,
                                r.pointShadow[c] = i,
                                r.pointShadowMap[c] = b,
                                r.pointShadowMatrix[c] = t.shadow.matrix,
                                g++
                            }
                            r.point[c] = e,
                            c++
                        } else if (t.isHemisphereLight) {
                            let e = i.get(t);
                            e.skyColor.copy(t.color).multiplyScalar(M * y),
                            e.groundColor.copy(t.groundColor).multiplyScalar(M * y),
                            r.hemi[f] = e,
                            f++
                        }
                    }
                    p > 0 && (t.isWebGL2 ? (r.rectAreaLTC1 = tW.LTC_FLOAT_1,
                    r.rectAreaLTC2 = tW.LTC_FLOAT_2) : !0 === e.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = tW.LTC_FLOAT_1,
                    r.rectAreaLTC2 = tW.LTC_FLOAT_2) : !0 === e.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = tW.LTC_HALF_1,
                    r.rectAreaLTC2 = tW.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),
                    r.ambient[0] = o,
                    r.ambient[1] = l,
                    r.ambient[2] = h;
                    let M = r.hash;
                    (M.directionalLength !== u || M.pointLength !== c || M.spotLength !== d || M.rectAreaLength !== p || M.hemiLength !== f || M.numDirectionalShadows !== m || M.numPointShadows !== g || M.numSpotShadows !== v || M.numSpotMaps !== _) && (r.directional.length = u,
                    r.spot.length = d,
                    r.rectArea.length = p,
                    r.point.length = c,
                    r.hemi.length = f,
                    r.directionalShadow.length = m,
                    r.directionalShadowMap.length = m,
                    r.pointShadow.length = g,
                    r.pointShadowMap.length = g,
                    r.spotShadow.length = v,
                    r.spotShadowMap.length = v,
                    r.directionalShadowMatrix.length = m,
                    r.pointShadowMatrix.length = g,
                    r.spotLightMatrix.length = v + _ - x,
                    r.spotLightMap.length = _,
                    r.numSpotLightShadowsWithMaps = x,
                    M.directionalLength = u,
                    M.pointLength = c,
                    M.spotLength = d,
                    M.rectAreaLength = p,
                    M.hemiLength = f,
                    M.numDirectionalShadows = m,
                    M.numPointShadows = g,
                    M.numSpotShadows = v,
                    M.numSpotMaps = _,
                    r.version = nR++)
                },
                setupView: function(e, t) {
                    let i = 0
                      , n = 0
                      , l = 0
                      , h = 0
                      , u = 0
                      , c = t.matrixWorldInverse;
                    for (let t = 0, d = e.length; t < d; t++) {
                        let d = e[t];
                        if (d.isDirectionalLight) {
                            let e = r.directional[i];
                            e.direction.setFromMatrixPosition(d.matrixWorld),
                            a.setFromMatrixPosition(d.target.matrixWorld),
                            e.direction.sub(a),
                            e.direction.transformDirection(c),
                            i++
                        } else if (d.isSpotLight) {
                            let e = r.spot[l];
                            e.position.setFromMatrixPosition(d.matrixWorld),
                            e.position.applyMatrix4(c),
                            e.direction.setFromMatrixPosition(d.matrixWorld),
                            a.setFromMatrixPosition(d.target.matrixWorld),
                            e.direction.sub(a),
                            e.direction.transformDirection(c),
                            l++
                        } else if (d.isRectAreaLight) {
                            let e = r.rectArea[h];
                            e.position.setFromMatrixPosition(d.matrixWorld),
                            e.position.applyMatrix4(c),
                            o.identity(),
                            s.copy(d.matrixWorld),
                            s.premultiply(c),
                            o.extractRotation(s),
                            e.halfWidth.set(.5 * d.width, 0, 0),
                            e.halfHeight.set(0, .5 * d.height, 0),
                            e.halfWidth.applyMatrix4(o),
                            e.halfHeight.applyMatrix4(o),
                            h++
                        } else if (d.isPointLight) {
                            let e = r.point[n];
                            e.position.setFromMatrixPosition(d.matrixWorld),
                            e.position.applyMatrix4(c),
                            n++
                        } else if (d.isHemisphereLight) {
                            let e = r.hemi[u];
                            e.direction.setFromMatrixPosition(d.matrixWorld),
                            e.direction.transformDirection(c),
                            u++
                        }
                    }
                },
                state: r
            }
        }
        function nN(e, t) {
            let i = new nI(e,t)
              , n = []
              , r = [];
            return {
                init: function() {
                    n.length = 0,
                    r.length = 0
                },
                state: {
                    lightsArray: n,
                    shadowsArray: r,
                    lights: i
                },
                setupLights: function(e) {
                    i.setup(n, e)
                },
                setupLightsView: function(e) {
                    i.setupView(n, e)
                },
                pushLight: function(e) {
                    n.push(e)
                },
                pushShadow: function(e) {
                    r.push(e)
                }
            }
        }
        function nO(e, t) {
            let i = new WeakMap;
            return {
                get: function(n, r=0) {
                    let a;
                    let s = i.get(n);
                    return void 0 === s ? (a = new nN(e,t),
                    i.set(n, [a])) : r >= s.length ? (a = new nN(e,t),
                    s.push(a)) : a = s[r],
                    a
                },
                dispose: function() {
                    i = new WeakMap
                }
            }
        }
        class nz extends e1 {
            constructor(e) {
                super(),
                this.isMeshDepthMaterial = !0,
                this.type = "MeshDepthMaterial",
                this.depthPacking = 3200,
                this.map = null,
                this.alphaMap = null,
                this.displacementMap = null,
                this.displacementScale = 1,
                this.displacementBias = 0,
                this.wireframe = !1,
                this.wireframeLinewidth = 1,
                this.setValues(e)
            }
            copy(e) {
                return super.copy(e),
                this.depthPacking = e.depthPacking,
                this.map = e.map,
                this.alphaMap = e.alphaMap,
                this.displacementMap = e.displacementMap,
                this.displacementScale = e.displacementScale,
                this.displacementBias = e.displacementBias,
                this.wireframe = e.wireframe,
                this.wireframeLinewidth = e.wireframeLinewidth,
                this
            }
        }
        class nU extends e1 {
            constructor(e) {
                super(),
                this.isMeshDistanceMaterial = !0,
                this.type = "MeshDistanceMaterial",
                this.referencePosition = new G,
                this.nearDistance = 1,
                this.farDistance = 1e3,
                this.map = null,
                this.alphaMap = null,
                this.displacementMap = null,
                this.displacementScale = 1,
                this.displacementBias = 0,
                this.setValues(e)
            }
            copy(e) {
                return super.copy(e),
                this.referencePosition.copy(e.referencePosition),
                this.nearDistance = e.nearDistance,
                this.farDistance = e.farDistance,
                this.map = e.map,
                this.alphaMap = e.alphaMap,
                this.displacementMap = e.displacementMap,
                this.displacementScale = e.displacementScale,
                this.displacementBias = e.displacementBias,
                this
            }
        }
        function nF(e, t, i) {
            let n = new tB
              , r = new v
              , a = new v
              , s = new F
              , o = new nz({
                depthPacking: 3201
            })
              , l = new nU
              , h = {}
              , u = i.maxTextureSize
              , c = {
                0: 1,
                1: 0,
                2: 2
            }
              , d = new tA({
                defines: {
                    VSM_SAMPLES: 8
                },
                uniforms: {
                    shadow_pass: {
                        value: null
                    },
                    resolution: {
                        value: new v
                    },
                    radius: {
                        value: 4
                    }
                },
                vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}",
                fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
            })
              , p = d.clone();
            p.defines.HORIZONTAL_PASS = 1;
            let f = new ts;
            f.setAttribute("position", new e5(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]),3));
            let m = new ty(f,d)
              , g = this;
            function _(t, i, n, r, a, s) {
                let u = null
                  , d = !0 === n.isPointLight ? t.customDistanceMaterial : t.customDepthMaterial;
                if (void 0 !== d)
                    u = d;
                else if (u = !0 === n.isPointLight ? l : o,
                e.localClippingEnabled && !0 === i.clipShadows && Array.isArray(i.clippingPlanes) && 0 !== i.clippingPlanes.length || i.displacementMap && 0 !== i.displacementScale || i.alphaMap && i.alphaTest > 0 || i.map && i.alphaTest > 0) {
                    let e = u.uuid
                      , t = i.uuid
                      , n = h[e];
                    void 0 === n && (n = {},
                    h[e] = n);
                    let r = n[t];
                    void 0 === r && (r = u.clone(),
                    n[t] = r),
                    u = r
                }
                return u.visible = i.visible,
                u.wireframe = i.wireframe,
                3 === s ? u.side = null !== i.shadowSide ? i.shadowSide : i.side : u.side = null !== i.shadowSide ? i.shadowSide : c[i.side],
                u.alphaMap = i.alphaMap,
                u.alphaTest = i.alphaTest,
                u.map = i.map,
                u.clipShadows = i.clipShadows,
                u.clippingPlanes = i.clippingPlanes,
                u.clipIntersection = i.clipIntersection,
                u.displacementMap = i.displacementMap,
                u.displacementScale = i.displacementScale,
                u.displacementBias = i.displacementBias,
                u.wireframeLinewidth = i.wireframeLinewidth,
                u.linewidth = i.linewidth,
                !0 === n.isPointLight && !0 === u.isMeshDistanceMaterial && (u.referencePosition.setFromMatrixPosition(n.matrixWorld),
                u.nearDistance = r,
                u.farDistance = a),
                u
            }
            this.enabled = !1,
            this.autoUpdate = !0,
            this.needsUpdate = !1,
            this.type = 1,
            this.render = function(i, o, l) {
                if (!1 === g.enabled || !1 === g.autoUpdate && !1 === g.needsUpdate || 0 === i.length)
                    return;
                let h = e.getRenderTarget()
                  , c = e.getActiveCubeFace()
                  , f = e.getActiveMipmapLevel()
                  , v = e.state;
                v.setBlending(0),
                v.buffers.color.setClear(1, 1, 1, 1),
                v.buffers.depth.setTest(!0),
                v.setScissorTest(!1);
                for (let h = 0, c = i.length; h < c; h++) {
                    let c = i[h]
                      , f = c.shadow;
                    if (void 0 === f) {
                        console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
                        continue
                    }
                    if (!1 === f.autoUpdate && !1 === f.needsUpdate)
                        continue;
                    r.copy(f.mapSize);
                    let g = f.getFrameExtents();
                    if (r.multiply(g),
                    a.copy(f.mapSize),
                    (r.x > u || r.y > u) && (r.x > u && (a.x = Math.floor(u / g.x),
                    r.x = a.x * g.x,
                    f.mapSize.x = a.x),
                    r.y > u && (a.y = Math.floor(u / g.y),
                    r.y = a.y * g.y,
                    f.mapSize.y = a.y)),
                    null === f.map) {
                        let e = 3 !== this.type ? {
                            minFilter: 1003,
                            magFilter: 1003
                        } : {};
                        f.map = new B(r.x,r.y,e),
                        f.map.texture.name = c.name + ".shadowMap",
                        f.camera.updateProjectionMatrix()
                    }
                    e.setRenderTarget(f.map),
                    e.clear();
                    let x = f.getViewportCount();
                    for (let i = 0; i < x; i++) {
                        let r = f.getViewport(i);
                        s.set(a.x * r.x, a.y * r.y, a.x * r.z, a.y * r.w),
                        v.viewport(s),
                        f.updateMatrices(c, i),
                        n = f.getFrustum(),
                        function i(r, a, s, o, l) {
                            if (!1 === r.visible)
                                return;
                            let h = r.layers.test(a.layers);
                            if (h && (r.isMesh || r.isLine || r.isPoints) && (r.castShadow || r.receiveShadow && 3 === l) && (!r.frustumCulled || n.intersectsObject(r))) {
                                r.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, r.matrixWorld);
                                let i = t.update(r)
                                  , n = r.material;
                                if (Array.isArray(n)) {
                                    let t = i.groups;
                                    for (let a = 0, h = t.length; a < h; a++) {
                                        let h = t[a]
                                          , u = n[h.materialIndex];
                                        if (u && u.visible) {
                                            let t = _(r, u, o, s.near, s.far, l);
                                            e.renderBufferDirect(s, null, i, t, r, h)
                                        }
                                    }
                                } else if (n.visible) {
                                    let t = _(r, n, o, s.near, s.far, l);
                                    e.renderBufferDirect(s, null, i, t, r, null)
                                }
                            }
                            let u = r.children;
                            for (let e = 0, t = u.length; e < t; e++)
                                i(u[e], a, s, o, l)
                        }(o, l, f.camera, c, this.type)
                    }
                    !0 !== f.isPointLightShadow && 3 === this.type && function(i, n) {
                        let a = t.update(m);
                        d.defines.VSM_SAMPLES !== i.blurSamples && (d.defines.VSM_SAMPLES = i.blurSamples,
                        p.defines.VSM_SAMPLES = i.blurSamples,
                        d.needsUpdate = !0,
                        p.needsUpdate = !0),
                        null === i.mapPass && (i.mapPass = new B(r.x,r.y)),
                        d.uniforms.shadow_pass.value = i.map.texture,
                        d.uniforms.resolution.value = i.mapSize,
                        d.uniforms.radius.value = i.radius,
                        e.setRenderTarget(i.mapPass),
                        e.clear(),
                        e.renderBufferDirect(n, null, a, d, m, null),
                        p.uniforms.shadow_pass.value = i.mapPass.texture,
                        p.uniforms.resolution.value = i.mapSize,
                        p.uniforms.radius.value = i.radius,
                        e.setRenderTarget(i.map),
                        e.clear(),
                        e.renderBufferDirect(n, null, a, p, m, null)
                    }(f, l),
                    f.needsUpdate = !1
                }
                g.needsUpdate = !1,
                e.setRenderTarget(h, c, f)
            }
        }
        function nB(e, t, i) {
            let n = i.isWebGL2
              , r = new function() {
                let t = !1
                  , i = new F
                  , n = null
                  , r = new F(0,0,0,0);
                return {
                    setMask: function(i) {
                        n === i || t || (e.colorMask(i, i, i, i),
                        n = i)
                    },
                    setLocked: function(e) {
                        t = e
                    },
                    setClear: function(t, n, a, s, o) {
                        !0 === o && (t *= s,
                        n *= s,
                        a *= s),
                        i.set(t, n, a, s),
                        !1 === r.equals(i) && (e.clearColor(t, n, a, s),
                        r.copy(i))
                    },
                    reset: function() {
                        t = !1,
                        n = null,
                        r.set(-1, 0, 0, 0)
                    }
                }
            }
              , a = new function() {
                let t = !1
                  , i = null
                  , n = null
                  , r = null;
                return {
                    setTest: function(e) {
                        e ? V(2929) : k(2929)
                    },
                    setMask: function(n) {
                        i === n || t || (e.depthMask(n),
                        i = n)
                    },
                    setFunc: function(t) {
                        if (n !== t) {
                            switch (t) {
                            case 0:
                                e.depthFunc(512);
                                break;
                            case 1:
                                e.depthFunc(519);
                                break;
                            case 2:
                                e.depthFunc(513);
                                break;
                            case 3:
                            default:
                                e.depthFunc(515);
                                break;
                            case 4:
                                e.depthFunc(514);
                                break;
                            case 5:
                                e.depthFunc(518);
                                break;
                            case 6:
                                e.depthFunc(516);
                                break;
                            case 7:
                                e.depthFunc(517)
                            }
                            n = t
                        }
                    },
                    setLocked: function(e) {
                        t = e
                    },
                    setClear: function(t) {
                        r !== t && (e.clearDepth(t),
                        r = t)
                    },
                    reset: function() {
                        t = !1,
                        i = null,
                        n = null,
                        r = null
                    }
                }
            }
              , s = new function() {
                let t = !1
                  , i = null
                  , n = null
                  , r = null
                  , a = null
                  , s = null
                  , o = null
                  , l = null
                  , h = null;
                return {
                    setTest: function(e) {
                        t || (e ? V(2960) : k(2960))
                    },
                    setMask: function(n) {
                        i === n || t || (e.stencilMask(n),
                        i = n)
                    },
                    setFunc: function(t, i, s) {
                        (n !== t || r !== i || a !== s) && (e.stencilFunc(t, i, s),
                        n = t,
                        r = i,
                        a = s)
                    },
                    setOp: function(t, i, n) {
                        (s !== t || o !== i || l !== n) && (e.stencilOp(t, i, n),
                        s = t,
                        o = i,
                        l = n)
                    },
                    setLocked: function(e) {
                        t = e
                    },
                    setClear: function(t) {
                        h !== t && (e.clearStencil(t),
                        h = t)
                    },
                    reset: function() {
                        t = !1,
                        i = null,
                        n = null,
                        r = null,
                        a = null,
                        s = null,
                        o = null,
                        l = null,
                        h = null
                    }
                }
            }
              , o = new WeakMap
              , l = new WeakMap
              , h = {}
              , u = {}
              , c = new WeakMap
              , d = []
              , p = null
              , f = !1
              , m = null
              , g = null
              , v = null
              , _ = null
              , x = null
              , y = null
              , M = null
              , S = !1
              , b = null
              , w = null
              , T = null
              , E = null
              , A = null
              , C = e.getParameter(35661)
              , L = !1
              , P = e.getParameter(7938);
            -1 !== P.indexOf("WebGL") ? L = parseFloat(/^WebGL (\d)/.exec(P)[1]) >= 1 : -1 !== P.indexOf("OpenGL ES") && (L = parseFloat(/^OpenGL ES (\d)/.exec(P)[1]) >= 2);
            let R = null
              , D = {}
              , I = e.getParameter(3088)
              , N = e.getParameter(2978)
              , O = new F().fromArray(I)
              , z = new F().fromArray(N);
            function U(t, i, n) {
                let r = new Uint8Array(4)
                  , a = e.createTexture();
                e.bindTexture(t, a),
                e.texParameteri(t, 10241, 9728),
                e.texParameteri(t, 10240, 9728);
                for (let t = 0; t < n; t++)
                    e.texImage2D(i + t, 0, 6408, 1, 1, 0, 6408, 5121, r);
                return a
            }
            let B = {};
            function V(t) {
                !0 !== h[t] && (e.enable(t),
                h[t] = !0)
            }
            function k(t) {
                !1 !== h[t] && (e.disable(t),
                h[t] = !1)
            }
            B[3553] = U(3553, 3553, 1),
            B[34067] = U(34067, 34069, 6),
            r.setClear(0, 0, 0, 1),
            a.setClear(1),
            s.setClear(0),
            V(2929),
            a.setFunc(3),
            j(!1),
            q(1),
            V(2884),
            W(0);
            let G = {
                100: 32774,
                101: 32778,
                102: 32779
            };
            if (n)
                G[103] = 32775,
                G[104] = 32776;
            else {
                let e = t.get("EXT_blend_minmax");
                null !== e && (G[103] = e.MIN_EXT,
                G[104] = e.MAX_EXT)
            }
            let H = {
                200: 0,
                201: 1,
                202: 768,
                204: 770,
                210: 776,
                208: 774,
                206: 772,
                203: 769,
                205: 771,
                209: 775,
                207: 773
            };
            function W(t, i, n, r, a, s, o, l) {
                if (0 === t) {
                    !0 === f && (k(3042),
                    f = !1);
                    return
                }
                if (!1 === f && (V(3042),
                f = !0),
                5 !== t) {
                    if (t !== m || l !== S) {
                        if ((100 !== g || 100 !== x) && (e.blendEquation(32774),
                        g = 100,
                        x = 100),
                        l)
                            switch (t) {
                            case 1:
                                e.blendFuncSeparate(1, 771, 1, 771);
                                break;
                            case 2:
                                e.blendFunc(1, 1);
                                break;
                            case 3:
                                e.blendFuncSeparate(0, 769, 0, 1);
                                break;
                            case 4:
                                e.blendFuncSeparate(0, 768, 0, 770);
                                break;
                            default:
                                console.error("THREE.WebGLState: Invalid blending: ", t)
                            }
                        else
                            switch (t) {
                            case 1:
                                e.blendFuncSeparate(770, 771, 1, 771);
                                break;
                            case 2:
                                e.blendFunc(770, 1);
                                break;
                            case 3:
                                e.blendFuncSeparate(0, 769, 0, 1);
                                break;
                            case 4:
                                e.blendFunc(0, 768);
                                break;
                            default:
                                console.error("THREE.WebGLState: Invalid blending: ", t)
                            }
                        v = null,
                        _ = null,
                        y = null,
                        M = null,
                        m = t,
                        S = l
                    }
                    return
                }
                a = a || i,
                s = s || n,
                o = o || r,
                (i !== g || a !== x) && (e.blendEquationSeparate(G[i], G[a]),
                g = i,
                x = a),
                (n !== v || r !== _ || s !== y || o !== M) && (e.blendFuncSeparate(H[n], H[r], H[s], H[o]),
                v = n,
                _ = r,
                y = s,
                M = o),
                m = t,
                S = !1
            }
            function j(t) {
                b !== t && (t ? e.frontFace(2304) : e.frontFace(2305),
                b = t)
            }
            function q(t) {
                0 !== t ? (V(2884),
                t !== w && (1 === t ? e.cullFace(1029) : 2 === t ? e.cullFace(1028) : e.cullFace(1032))) : k(2884),
                w = t
            }
            function X(t, i, n) {
                t ? (V(32823),
                (E !== i || A !== n) && (e.polygonOffset(i, n),
                E = i,
                A = n)) : k(32823)
            }
            return {
                buffers: {
                    color: r,
                    depth: a,
                    stencil: s
                },
                enable: V,
                disable: k,
                bindFramebuffer: function(t, i) {
                    return u[t] !== i && (e.bindFramebuffer(t, i),
                    u[t] = i,
                    n && (36009 === t && (u[36160] = i),
                    36160 === t && (u[36009] = i)),
                    !0)
                },
                drawBuffers: function(n, r) {
                    let a = d
                      , s = !1;
                    if (n) {
                        if (void 0 === (a = c.get(r)) && (a = [],
                        c.set(r, a)),
                        n.isWebGLMultipleRenderTargets) {
                            let e = n.texture;
                            if (a.length !== e.length || 36064 !== a[0]) {
                                for (let t = 0, i = e.length; t < i; t++)
                                    a[t] = 36064 + t;
                                a.length = e.length,
                                s = !0
                            }
                        } else
                            36064 !== a[0] && (a[0] = 36064,
                            s = !0)
                    } else
                        1029 !== a[0] && (a[0] = 1029,
                        s = !0);
                    s && (i.isWebGL2 ? e.drawBuffers(a) : t.get("WEBGL_draw_buffers").drawBuffersWEBGL(a))
                },
                useProgram: function(t) {
                    return p !== t && (e.useProgram(t),
                    p = t,
                    !0)
                },
                setBlending: W,
                setMaterial: function(e, t) {
                    2 === e.side ? k(2884) : V(2884);
                    let i = 1 === e.side;
                    t && (i = !i),
                    j(i),
                    1 === e.blending && !1 === e.transparent ? W(0) : W(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha),
                    a.setFunc(e.depthFunc),
                    a.setTest(e.depthTest),
                    a.setMask(e.depthWrite),
                    r.setMask(e.colorWrite);
                    let n = e.stencilWrite;
                    s.setTest(n),
                    n && (s.setMask(e.stencilWriteMask),
                    s.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask),
                    s.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)),
                    X(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits),
                    !0 === e.alphaToCoverage ? V(32926) : k(32926)
                },
                setFlipSided: j,
                setCullFace: q,
                setLineWidth: function(t) {
                    t !== T && (L && e.lineWidth(t),
                    T = t)
                },
                setPolygonOffset: X,
                setScissorTest: function(e) {
                    e ? V(3089) : k(3089)
                },
                activeTexture: function(t) {
                    void 0 === t && (t = 33984 + C - 1),
                    R !== t && (e.activeTexture(t),
                    R = t)
                },
                bindTexture: function(t, i, n) {
                    void 0 === n && (n = null === R ? 33984 + C - 1 : R);
                    let r = D[n];
                    void 0 === r && (r = {
                        type: void 0,
                        texture: void 0
                    },
                    D[n] = r),
                    (r.type !== t || r.texture !== i) && (R !== n && (e.activeTexture(n),
                    R = n),
                    e.bindTexture(t, i || B[t]),
                    r.type = t,
                    r.texture = i)
                },
                unbindTexture: function() {
                    let t = D[R];
                    void 0 !== t && void 0 !== t.type && (e.bindTexture(t.type, null),
                    t.type = void 0,
                    t.texture = void 0)
                },
                compressedTexImage2D: function() {
                    try {
                        e.compressedTexImage2D.apply(e, arguments)
                    } catch (e) {
                        console.error("THREE.WebGLState:", e)
                    }
                },
                compressedTexImage3D: function() {
                    try {
                        e.compressedTexImage3D.apply(e, arguments)
                    } catch (e) {
                        console.error("THREE.WebGLState:", e)
                    }
                },
                texImage2D: function() {
                    try {
                        e.texImage2D.apply(e, arguments)
                    } catch (e) {
                        console.error("THREE.WebGLState:", e)
                    }
                },
                texImage3D: function() {
                    try {
                        e.texImage3D.apply(e, arguments)
                    } catch (e) {
                        console.error("THREE.WebGLState:", e)
                    }
                },
                updateUBOMapping: function(t, i) {
                    let n = l.get(i);
                    void 0 === n && (n = new WeakMap,
                    l.set(i, n));
                    let r = n.get(t);
                    void 0 === r && (r = e.getUniformBlockIndex(i, t.name),
                    n.set(t, r))
                },
                uniformBlockBinding: function(t, i) {
                    let n = l.get(i)
                      , r = n.get(t);
                    o.get(i) !== r && (e.uniformBlockBinding(i, r, t.__bindingPointIndex),
                    o.set(i, r))
                },
                texStorage2D: function() {
                    try {
                        e.texStorage2D.apply(e, arguments)
                    } catch (e) {
                        console.error("THREE.WebGLState:", e)
                    }
                },
                texStorage3D: function() {
                    try {
                        e.texStorage3D.apply(e, arguments)
                    } catch (e) {
                        console.error("THREE.WebGLState:", e)
                    }
                },
                texSubImage2D: function() {
                    try {
                        e.texSubImage2D.apply(e, arguments)
                    } catch (e) {
                        console.error("THREE.WebGLState:", e)
                    }
                },
                texSubImage3D: function() {
                    try {
                        e.texSubImage3D.apply(e, arguments)
                    } catch (e) {
                        console.error("THREE.WebGLState:", e)
                    }
                },
                compressedTexSubImage2D: function() {
                    try {
                        e.compressedTexSubImage2D.apply(e, arguments)
                    } catch (e) {
                        console.error("THREE.WebGLState:", e)
                    }
                },
                compressedTexSubImage3D: function() {
                    try {
                        e.compressedTexSubImage3D.apply(e, arguments)
                    } catch (e) {
                        console.error("THREE.WebGLState:", e)
                    }
                },
                scissor: function(t) {
                    !1 === O.equals(t) && (e.scissor(t.x, t.y, t.z, t.w),
                    O.copy(t))
                },
                viewport: function(t) {
                    !1 === z.equals(t) && (e.viewport(t.x, t.y, t.z, t.w),
                    z.copy(t))
                },
                reset: function() {
                    e.disable(3042),
                    e.disable(2884),
                    e.disable(2929),
                    e.disable(32823),
                    e.disable(3089),
                    e.disable(2960),
                    e.disable(32926),
                    e.blendEquation(32774),
                    e.blendFunc(1, 0),
                    e.blendFuncSeparate(1, 0, 1, 0),
                    e.colorMask(!0, !0, !0, !0),
                    e.clearColor(0, 0, 0, 0),
                    e.depthMask(!0),
                    e.depthFunc(513),
                    e.clearDepth(1),
                    e.stencilMask(4294967295),
                    e.stencilFunc(519, 0, 4294967295),
                    e.stencilOp(7680, 7680, 7680),
                    e.clearStencil(0),
                    e.cullFace(1029),
                    e.frontFace(2305),
                    e.polygonOffset(0, 0),
                    e.activeTexture(33984),
                    e.bindFramebuffer(36160, null),
                    !0 === n && (e.bindFramebuffer(36009, null),
                    e.bindFramebuffer(36008, null)),
                    e.useProgram(null),
                    e.lineWidth(1),
                    e.scissor(0, 0, e.canvas.width, e.canvas.height),
                    e.viewport(0, 0, e.canvas.width, e.canvas.height),
                    h = {},
                    R = null,
                    D = {},
                    u = {},
                    c = new WeakMap,
                    d = [],
                    p = null,
                    f = !1,
                    m = null,
                    g = null,
                    v = null,
                    _ = null,
                    x = null,
                    y = null,
                    M = null,
                    S = !1,
                    b = null,
                    w = null,
                    T = null,
                    E = null,
                    A = null,
                    O.set(0, 0, e.canvas.width, e.canvas.height),
                    z.set(0, 0, e.canvas.width, e.canvas.height),
                    r.reset(),
                    a.reset(),
                    s.reset()
                }
            }
        }
        function nV(e, t, i, n, r, a, s) {
            let o;
            let l = r.isWebGL2
              , h = r.maxTextures
              , u = r.maxCubemapSize
              , c = r.maxTextureSize
              , d = r.maxSamples
              , m = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null
              , g = "undefined" != typeof navigator && /OculusBrowser/g.test(navigator.userAgent)
              , v = new WeakMap
              , _ = new WeakMap
              , x = !1;
            try {
                x = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1,1).getContext("2d")
            } catch (e) {}
            function y(e, t) {
                return x ? new OffscreenCanvas(e,t) : M("canvas")
            }
            function S(e, t, i, n) {
                let r = 1;
                if ((e.width > n || e.height > n) && (r = n / Math.max(e.width, e.height)),
                r < 1 || !0 === t) {
                    if ("undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap) {
                        let n = t ? f : Math.floor
                          , a = n(r * e.width)
                          , s = n(r * e.height);
                        void 0 === o && (o = y(a, s));
                        let l = i ? y(a, s) : o;
                        l.width = a,
                        l.height = s;
                        let h = l.getContext("2d");
                        return h.drawImage(e, 0, 0, a, s),
                        console.warn("THREE.WebGLRenderer: Texture has been resized from (" + e.width + "x" + e.height + ") to (" + a + "x" + s + ")."),
                        l
                    }
                    "data"in e && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + e.width + "x" + e.height + ").")
                }
                return e
            }
            function b(e) {
                return p(e.width) && p(e.height)
            }
            function w(e, t) {
                return e.generateMipmaps && t && 1003 !== e.minFilter && 1006 !== e.minFilter
            }
            function T(t) {
                e.generateMipmap(t)
            }
            function E(i, n, r, a, s=!1) {
                if (!1 === l)
                    return n;
                if (null !== i) {
                    if (void 0 !== e[i])
                        return e[i];
                    console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + i + "'")
                }
                let o = n;
                return 6403 === n && (5126 === r && (o = 33326),
                5131 === r && (o = 33325),
                5121 === r && (o = 33321)),
                33319 === n && (5126 === r && (o = 33328),
                5131 === r && (o = 33327),
                5121 === r && (o = 33323)),
                6408 === n && (5126 === r && (o = 34836),
                5131 === r && (o = 34842),
                5121 === r && (o = 3001 === a && !1 === s ? 35907 : 32856),
                32819 === r && (o = 32854),
                32820 === r && (o = 32855)),
                (33325 === o || 33326 === o || 33327 === o || 33328 === o || 34842 === o || 34836 === o) && t.get("EXT_color_buffer_float"),
                o
            }
            function A(e, t, i) {
                return !0 === w(e, i) || e.isFramebufferTexture && 1003 !== e.minFilter && 1006 !== e.minFilter ? Math.log2(Math.max(t.width, t.height)) + 1 : void 0 !== e.mipmaps && e.mipmaps.length > 0 ? e.mipmaps.length : e.isCompressedTexture && Array.isArray(e.image) ? t.mipmaps.length : 1
            }
            function C(e) {
                return 1003 === e || 1004 === e || 1005 === e ? 9728 : 9729
            }
            function L(e) {
                let t = e.target;
                t.removeEventListener("dispose", L),
                function(e) {
                    let t = n.get(e);
                    if (void 0 === t.__webglInit)
                        return;
                    let i = e.source
                      , r = _.get(i);
                    if (r) {
                        let n = r[t.__cacheKey];
                        n.usedTimes--,
                        0 === n.usedTimes && R(e),
                        0 === Object.keys(r).length && _.delete(i)
                    }
                    n.remove(e)
                }(t),
                t.isVideoTexture && v.delete(t)
            }
            function P(t) {
                let i = t.target;
                i.removeEventListener("dispose", P),
                function(t) {
                    let i = t.texture
                      , r = n.get(t)
                      , a = n.get(i);
                    if (void 0 !== a.__webglTexture && (e.deleteTexture(a.__webglTexture),
                    s.memory.textures--),
                    t.depthTexture && t.depthTexture.dispose(),
                    t.isWebGLCubeRenderTarget)
                        for (let t = 0; t < 6; t++)
                            e.deleteFramebuffer(r.__webglFramebuffer[t]),
                            r.__webglDepthbuffer && e.deleteRenderbuffer(r.__webglDepthbuffer[t]);
                    else {
                        if (e.deleteFramebuffer(r.__webglFramebuffer),
                        r.__webglDepthbuffer && e.deleteRenderbuffer(r.__webglDepthbuffer),
                        r.__webglMultisampledFramebuffer && e.deleteFramebuffer(r.__webglMultisampledFramebuffer),
                        r.__webglColorRenderbuffer)
                            for (let t = 0; t < r.__webglColorRenderbuffer.length; t++)
                                r.__webglColorRenderbuffer[t] && e.deleteRenderbuffer(r.__webglColorRenderbuffer[t]);
                        r.__webglDepthRenderbuffer && e.deleteRenderbuffer(r.__webglDepthRenderbuffer)
                    }
                    if (t.isWebGLMultipleRenderTargets)
                        for (let t = 0, r = i.length; t < r; t++) {
                            let r = n.get(i[t]);
                            r.__webglTexture && (e.deleteTexture(r.__webglTexture),
                            s.memory.textures--),
                            n.remove(i[t])
                        }
                    n.remove(i),
                    n.remove(t)
                }(i)
            }
            function R(t) {
                let i = n.get(t);
                e.deleteTexture(i.__webglTexture);
                let r = t.source
                  , a = _.get(r);
                delete a[i.__cacheKey],
                s.memory.textures--
            }
            let D = 0;
            function N(e, t) {
                let r = n.get(e);
                if (e.isVideoTexture && function(e) {
                    let t = s.render.frame;
                    v.get(e) !== t && (v.set(e, t),
                    e.update())
                }(e),
                !1 === e.isRenderTargetTexture && e.version > 0 && r.__version !== e.version) {
                    let i = e.image;
                    if (null === i)
                        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
                    else if (!1 === i.complete)
                        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
                    else {
                        B(r, e, t);
                        return
                    }
                }
                i.bindTexture(3553, r.__webglTexture, 33984 + t)
            }
            let O = {
                1e3: 10497,
                1001: 33071,
                1002: 33648
            }
              , z = {
                1003: 9728,
                1004: 9984,
                1005: 9986,
                1006: 9729,
                1007: 9985,
                1008: 9987
            };
            function U(i, a, s) {
                if (s ? (e.texParameteri(i, 10242, O[a.wrapS]),
                e.texParameteri(i, 10243, O[a.wrapT]),
                (32879 === i || 35866 === i) && e.texParameteri(i, 32882, O[a.wrapR]),
                e.texParameteri(i, 10240, z[a.magFilter]),
                e.texParameteri(i, 10241, z[a.minFilter])) : (e.texParameteri(i, 10242, 33071),
                e.texParameteri(i, 10243, 33071),
                (32879 === i || 35866 === i) && e.texParameteri(i, 32882, 33071),
                (1001 !== a.wrapS || 1001 !== a.wrapT) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),
                e.texParameteri(i, 10240, C(a.magFilter)),
                e.texParameteri(i, 10241, C(a.minFilter)),
                1003 !== a.minFilter && 1006 !== a.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),
                !0 === t.has("EXT_texture_filter_anisotropic")) {
                    let s = t.get("EXT_texture_filter_anisotropic");
                    1003 !== a.magFilter && (1005 === a.minFilter || 1008 === a.minFilter) && (1015 !== a.type || !1 !== t.has("OES_texture_float_linear")) && (!1 !== l || 1016 !== a.type || !1 !== t.has("OES_texture_half_float_linear")) && (a.anisotropy > 1 || n.get(a).__currentAnisotropy) && (e.texParameterf(i, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())),
                    n.get(a).__currentAnisotropy = a.anisotropy)
                }
            }
            function F(t, i) {
                let n = !1;
                void 0 === t.__webglInit && (t.__webglInit = !0,
                i.addEventListener("dispose", L));
                let r = i.source
                  , a = _.get(r);
                void 0 === a && (a = {},
                _.set(r, a));
                let o = function(e) {
                    let t = [];
                    return t.push(e.wrapS),
                    t.push(e.wrapT),
                    t.push(e.wrapR || 0),
                    t.push(e.magFilter),
                    t.push(e.minFilter),
                    t.push(e.anisotropy),
                    t.push(e.internalFormat),
                    t.push(e.format),
                    t.push(e.type),
                    t.push(e.generateMipmaps),
                    t.push(e.premultiplyAlpha),
                    t.push(e.flipY),
                    t.push(e.unpackAlignment),
                    t.push(e.encoding),
                    t.join()
                }(i);
                if (o !== t.__cacheKey) {
                    void 0 === a[o] && (a[o] = {
                        texture: e.createTexture(),
                        usedTimes: 0
                    },
                    s.memory.textures++,
                    n = !0),
                    a[o].usedTimes++;
                    let r = a[t.__cacheKey];
                    void 0 !== r && (a[t.__cacheKey].usedTimes--,
                    0 === r.usedTimes && R(i)),
                    t.__cacheKey = o,
                    t.__webglTexture = a[o].texture
                }
                return n
            }
            function B(t, r, s) {
                let o = 3553;
                (r.isDataArrayTexture || r.isCompressedArrayTexture) && (o = 35866),
                r.isData3DTexture && (o = 32879);
                let h = F(t, r)
                  , u = r.source;
                i.bindTexture(o, t.__webglTexture, 33984 + s);
                let d = n.get(u);
                if (u.version !== d.__version || !0 === h) {
                    let t;
                    i.activeTexture(33984 + s),
                    e.pixelStorei(37440, r.flipY),
                    e.pixelStorei(37441, r.premultiplyAlpha),
                    e.pixelStorei(3317, r.unpackAlignment),
                    e.pixelStorei(37443, 0);
                    let n = !l && (1001 !== r.wrapS || 1001 !== r.wrapT || 1003 !== r.minFilter && 1006 !== r.minFilter) && !1 === b(r.image)
                      , p = S(r.image, n, !1, c);
                    p = j(r, p);
                    let f = b(p) || l
                      , m = a.convert(r.format, r.encoding)
                      , g = a.convert(r.type)
                      , v = E(r.internalFormat, m, g, r.encoding, r.isVideoTexture);
                    U(o, r, f);
                    let _ = r.mipmaps
                      , x = l && !0 !== r.isVideoTexture
                      , y = void 0 === d.__version || !0 === h
                      , M = A(r, p, f);
                    if (r.isDepthTexture)
                        v = 6402,
                        l ? v = 1015 === r.type ? 36012 : 1014 === r.type ? 33190 : 1020 === r.type ? 35056 : 33189 : 1015 === r.type && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),
                        1026 === r.format && 6402 === v && 1012 !== r.type && 1014 !== r.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
                        r.type = 1014,
                        g = a.convert(r.type)),
                        1027 === r.format && 6402 === v && (v = 34041,
                        1020 !== r.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
                        r.type = 1020,
                        g = a.convert(r.type))),
                        y && (x ? i.texStorage2D(3553, 1, v, p.width, p.height) : i.texImage2D(3553, 0, v, p.width, p.height, 0, m, g, null));
                    else if (r.isDataTexture) {
                        if (_.length > 0 && f) {
                            x && y && i.texStorage2D(3553, M, v, _[0].width, _[0].height);
                            for (let e = 0, n = _.length; e < n; e++)
                                t = _[e],
                                x ? i.texSubImage2D(3553, e, 0, 0, t.width, t.height, m, g, t.data) : i.texImage2D(3553, e, v, t.width, t.height, 0, m, g, t.data);
                            r.generateMipmaps = !1
                        } else
                            x ? (y && i.texStorage2D(3553, M, v, p.width, p.height),
                            i.texSubImage2D(3553, 0, 0, 0, p.width, p.height, m, g, p.data)) : i.texImage2D(3553, 0, v, p.width, p.height, 0, m, g, p.data)
                    } else if (r.isCompressedTexture) {
                        if (r.isCompressedArrayTexture) {
                            x && y && i.texStorage3D(35866, M, v, _[0].width, _[0].height, p.depth);
                            for (let e = 0, n = _.length; e < n; e++)
                                t = _[e],
                                1023 !== r.format ? null !== m ? x ? i.compressedTexSubImage3D(35866, e, 0, 0, 0, t.width, t.height, p.depth, m, t.data, 0, 0) : i.compressedTexImage3D(35866, e, v, t.width, t.height, p.depth, 0, t.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : x ? i.texSubImage3D(35866, e, 0, 0, 0, t.width, t.height, p.depth, m, g, t.data) : i.texImage3D(35866, e, v, t.width, t.height, p.depth, 0, m, g, t.data)
                        } else {
                            x && y && i.texStorage2D(3553, M, v, _[0].width, _[0].height);
                            for (let e = 0, n = _.length; e < n; e++)
                                t = _[e],
                                1023 !== r.format ? null !== m ? x ? i.compressedTexSubImage2D(3553, e, 0, 0, t.width, t.height, m, t.data) : i.compressedTexImage2D(3553, e, v, t.width, t.height, 0, t.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : x ? i.texSubImage2D(3553, e, 0, 0, t.width, t.height, m, g, t.data) : i.texImage2D(3553, e, v, t.width, t.height, 0, m, g, t.data)
                        }
                    } else if (r.isDataArrayTexture)
                        x ? (y && i.texStorage3D(35866, M, v, p.width, p.height, p.depth),
                        i.texSubImage3D(35866, 0, 0, 0, 0, p.width, p.height, p.depth, m, g, p.data)) : i.texImage3D(35866, 0, v, p.width, p.height, p.depth, 0, m, g, p.data);
                    else if (r.isData3DTexture)
                        x ? (y && i.texStorage3D(32879, M, v, p.width, p.height, p.depth),
                        i.texSubImage3D(32879, 0, 0, 0, 0, p.width, p.height, p.depth, m, g, p.data)) : i.texImage3D(32879, 0, v, p.width, p.height, p.depth, 0, m, g, p.data);
                    else if (r.isFramebufferTexture) {
                        if (y) {
                            if (x)
                                i.texStorage2D(3553, M, v, p.width, p.height);
                            else {
                                let e = p.width
                                  , t = p.height;
                                for (let n = 0; n < M; n++)
                                    i.texImage2D(3553, n, v, e, t, 0, m, g, null),
                                    e >>= 1,
                                    t >>= 1
                            }
                        }
                    } else if (_.length > 0 && f) {
                        x && y && i.texStorage2D(3553, M, v, _[0].width, _[0].height);
                        for (let e = 0, n = _.length; e < n; e++)
                            t = _[e],
                            x ? i.texSubImage2D(3553, e, 0, 0, m, g, t) : i.texImage2D(3553, e, v, m, g, t);
                        r.generateMipmaps = !1
                    } else
                        x ? (y && i.texStorage2D(3553, M, v, p.width, p.height),
                        i.texSubImage2D(3553, 0, 0, 0, m, g, p)) : i.texImage2D(3553, 0, v, m, g, p);
                    w(r, f) && T(o),
                    d.__version = u.version,
                    r.onUpdate && r.onUpdate(r)
                }
                t.__version = r.version
            }
            function V(t, r, s, o, l) {
                let h = a.convert(s.format, s.encoding)
                  , u = a.convert(s.type)
                  , c = E(s.internalFormat, h, u, s.encoding)
                  , d = n.get(r);
                d.__hasExternalTextures || (32879 === l || 35866 === l ? i.texImage3D(l, 0, c, r.width, r.height, r.depth, 0, h, u, null) : i.texImage2D(l, 0, c, r.width, r.height, 0, h, u, null)),
                i.bindFramebuffer(36160, t),
                W(r) ? m.framebufferTexture2DMultisampleEXT(36160, o, l, n.get(s).__webglTexture, 0, H(r)) : (3553 === l || l >= 34069 && l <= 34074) && e.framebufferTexture2D(36160, o, l, n.get(s).__webglTexture, 0),
                i.bindFramebuffer(36160, null)
            }
            function k(t, i, n) {
                if (e.bindRenderbuffer(36161, t),
                i.depthBuffer && !i.stencilBuffer) {
                    let r = 33189;
                    if (n || W(i)) {
                        let t = i.depthTexture;
                        t && t.isDepthTexture && (1015 === t.type ? r = 36012 : 1014 === t.type && (r = 33190));
                        let n = H(i);
                        W(i) ? m.renderbufferStorageMultisampleEXT(36161, n, r, i.width, i.height) : e.renderbufferStorageMultisample(36161, n, r, i.width, i.height)
                    } else
                        e.renderbufferStorage(36161, r, i.width, i.height);
                    e.framebufferRenderbuffer(36160, 36096, 36161, t)
                } else if (i.depthBuffer && i.stencilBuffer) {
                    let r = H(i);
                    n && !1 === W(i) ? e.renderbufferStorageMultisample(36161, r, 35056, i.width, i.height) : W(i) ? m.renderbufferStorageMultisampleEXT(36161, r, 35056, i.width, i.height) : e.renderbufferStorage(36161, 34041, i.width, i.height),
                    e.framebufferRenderbuffer(36160, 33306, 36161, t)
                } else {
                    let t = !0 === i.isWebGLMultipleRenderTargets ? i.texture : [i.texture];
                    for (let r = 0; r < t.length; r++) {
                        let s = t[r]
                          , o = a.convert(s.format, s.encoding)
                          , l = a.convert(s.type)
                          , h = E(s.internalFormat, o, l, s.encoding)
                          , u = H(i);
                        n && !1 === W(i) ? e.renderbufferStorageMultisample(36161, u, h, i.width, i.height) : W(i) ? m.renderbufferStorageMultisampleEXT(36161, u, h, i.width, i.height) : e.renderbufferStorage(36161, h, i.width, i.height)
                    }
                }
                e.bindRenderbuffer(36161, null)
            }
            function G(t) {
                let r = n.get(t)
                  , a = !0 === t.isWebGLCubeRenderTarget;
                if (t.depthTexture && !r.__autoAllocateDepthBuffer) {
                    if (a)
                        throw Error("target.depthTexture not supported in Cube render targets");
                    !function(t, r) {
                        let a = r && r.isWebGLCubeRenderTarget;
                        if (a)
                            throw Error("Depth Texture with cube render targets is not supported");
                        if (i.bindFramebuffer(36160, t),
                        !(r.depthTexture && r.depthTexture.isDepthTexture))
                            throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                        n.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width,
                        r.depthTexture.image.height = r.height,
                        r.depthTexture.needsUpdate = !0),
                        N(r.depthTexture, 0);
                        let s = n.get(r.depthTexture).__webglTexture
                          , o = H(r);
                        if (1026 === r.depthTexture.format)
                            W(r) ? m.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, s, 0, o) : e.framebufferTexture2D(36160, 36096, 3553, s, 0);
                        else if (1027 === r.depthTexture.format)
                            W(r) ? m.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, s, 0, o) : e.framebufferTexture2D(36160, 33306, 3553, s, 0);
                        else
                            throw Error("Unknown depthTexture format")
                    }(r.__webglFramebuffer, t)
                } else if (a) {
                    r.__webglDepthbuffer = [];
                    for (let n = 0; n < 6; n++)
                        i.bindFramebuffer(36160, r.__webglFramebuffer[n]),
                        r.__webglDepthbuffer[n] = e.createRenderbuffer(),
                        k(r.__webglDepthbuffer[n], t, !1)
                } else
                    i.bindFramebuffer(36160, r.__webglFramebuffer),
                    r.__webglDepthbuffer = e.createRenderbuffer(),
                    k(r.__webglDepthbuffer, t, !1);
                i.bindFramebuffer(36160, null)
            }
            function H(e) {
                return Math.min(d, e.samples)
            }
            function W(e) {
                let i = n.get(e);
                return l && e.samples > 0 && !0 === t.has("WEBGL_multisampled_render_to_texture") && !1 !== i.__useRenderToTexture
            }
            function j(e, i) {
                let n = e.encoding
                  , r = e.format
                  , a = e.type;
                return !0 === e.isCompressedTexture || !0 === e.isVideoTexture || 1035 === e.format || 3e3 !== n && (3001 === n ? !1 === l ? !0 === t.has("EXT_sRGB") && 1023 === r ? (e.format = 1035,
                e.minFilter = 1006,
                e.generateMipmaps = !1) : i = I.sRGBToLinear(i) : (1023 !== r || 1009 !== a) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", n)),
                i
            }
            this.allocateTextureUnit = function() {
                let e = D;
                return e >= h && console.warn("THREE.WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + h),
                D += 1,
                e
            }
            ,
            this.resetTextureUnits = function() {
                D = 0
            }
            ,
            this.setTexture2D = N,
            this.setTexture2DArray = function(e, t) {
                let r = n.get(e);
                if (e.version > 0 && r.__version !== e.version) {
                    B(r, e, t);
                    return
                }
                i.bindTexture(35866, r.__webglTexture, 33984 + t)
            }
            ,
            this.setTexture3D = function(e, t) {
                let r = n.get(e);
                if (e.version > 0 && r.__version !== e.version) {
                    B(r, e, t);
                    return
                }
                i.bindTexture(32879, r.__webglTexture, 33984 + t)
            }
            ,
            this.setTextureCube = function(t, r) {
                let s = n.get(t);
                if (t.version > 0 && s.__version !== t.version) {
                    (function(t, r, s) {
                        if (6 !== r.image.length)
                            return;
                        let o = F(t, r)
                          , h = r.source;
                        i.bindTexture(34067, t.__webglTexture, 33984 + s);
                        let c = n.get(h);
                        if (h.version !== c.__version || !0 === o) {
                            let t;
                            i.activeTexture(33984 + s),
                            e.pixelStorei(37440, r.flipY),
                            e.pixelStorei(37441, r.premultiplyAlpha),
                            e.pixelStorei(3317, r.unpackAlignment),
                            e.pixelStorei(37443, 0);
                            let n = r.isCompressedTexture || r.image[0].isCompressedTexture
                              , d = r.image[0] && r.image[0].isDataTexture
                              , p = [];
                            for (let e = 0; e < 6; e++)
                                n || d ? p[e] = d ? r.image[e].image : r.image[e] : p[e] = S(r.image[e], !1, !0, u),
                                p[e] = j(r, p[e]);
                            let f = p[0]
                              , m = b(f) || l
                              , g = a.convert(r.format, r.encoding)
                              , v = a.convert(r.type)
                              , _ = E(r.internalFormat, g, v, r.encoding)
                              , x = l && !0 !== r.isVideoTexture
                              , y = void 0 === c.__version || !0 === o
                              , M = A(r, f, m);
                            if (U(34067, r, m),
                            n) {
                                x && y && i.texStorage2D(34067, M, _, f.width, f.height);
                                for (let e = 0; e < 6; e++) {
                                    t = p[e].mipmaps;
                                    for (let n = 0; n < t.length; n++) {
                                        let a = t[n];
                                        1023 !== r.format ? null !== g ? x ? i.compressedTexSubImage2D(34069 + e, n, 0, 0, a.width, a.height, g, a.data) : i.compressedTexImage2D(34069 + e, n, _, a.width, a.height, 0, a.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : x ? i.texSubImage2D(34069 + e, n, 0, 0, a.width, a.height, g, v, a.data) : i.texImage2D(34069 + e, n, _, a.width, a.height, 0, g, v, a.data)
                                    }
                                }
                            } else {
                                t = r.mipmaps,
                                x && y && (t.length > 0 && M++,
                                i.texStorage2D(34067, M, _, p[0].width, p[0].height));
                                for (let e = 0; e < 6; e++)
                                    if (d) {
                                        x ? i.texSubImage2D(34069 + e, 0, 0, 0, p[e].width, p[e].height, g, v, p[e].data) : i.texImage2D(34069 + e, 0, _, p[e].width, p[e].height, 0, g, v, p[e].data);
                                        for (let n = 0; n < t.length; n++) {
                                            let r = t[n]
                                              , a = r.image[e].image;
                                            x ? i.texSubImage2D(34069 + e, n + 1, 0, 0, a.width, a.height, g, v, a.data) : i.texImage2D(34069 + e, n + 1, _, a.width, a.height, 0, g, v, a.data)
                                        }
                                    } else {
                                        x ? i.texSubImage2D(34069 + e, 0, 0, 0, g, v, p[e]) : i.texImage2D(34069 + e, 0, _, g, v, p[e]);
                                        for (let n = 0; n < t.length; n++) {
                                            let r = t[n];
                                            x ? i.texSubImage2D(34069 + e, n + 1, 0, 0, g, v, r.image[e]) : i.texImage2D(34069 + e, n + 1, _, g, v, r.image[e])
                                        }
                                    }
                            }
                            w(r, m) && T(34067),
                            c.__version = h.version,
                            r.onUpdate && r.onUpdate(r)
                        }
                        t.__version = r.version
                    }
                    )(s, t, r);
                    return
                }
                i.bindTexture(34067, s.__webglTexture, 33984 + r)
            }
            ,
            this.rebindTextures = function(e, t, i) {
                let r = n.get(e);
                void 0 !== t && V(r.__webglFramebuffer, e, e.texture, 36064, 3553),
                void 0 !== i && G(e)
            }
            ,
            this.setupRenderTarget = function(t) {
                let o = t.texture
                  , h = n.get(t)
                  , u = n.get(o);
                t.addEventListener("dispose", P),
                !0 !== t.isWebGLMultipleRenderTargets && (void 0 === u.__webglTexture && (u.__webglTexture = e.createTexture()),
                u.__version = o.version,
                s.memory.textures++);
                let c = !0 === t.isWebGLCubeRenderTarget
                  , d = !0 === t.isWebGLMultipleRenderTargets
                  , p = b(t) || l;
                if (c) {
                    h.__webglFramebuffer = [];
                    for (let t = 0; t < 6; t++)
                        h.__webglFramebuffer[t] = e.createFramebuffer()
                } else {
                    if (h.__webglFramebuffer = e.createFramebuffer(),
                    d) {
                        if (r.drawBuffers) {
                            let i = t.texture;
                            for (let t = 0, r = i.length; t < r; t++) {
                                let r = n.get(i[t]);
                                void 0 === r.__webglTexture && (r.__webglTexture = e.createTexture(),
                                s.memory.textures++)
                            }
                        } else
                            console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.")
                    }
                    if (l && t.samples > 0 && !1 === W(t)) {
                        let n = d ? o : [o];
                        h.__webglMultisampledFramebuffer = e.createFramebuffer(),
                        h.__webglColorRenderbuffer = [],
                        i.bindFramebuffer(36160, h.__webglMultisampledFramebuffer);
                        for (let i = 0; i < n.length; i++) {
                            let r = n[i];
                            h.__webglColorRenderbuffer[i] = e.createRenderbuffer(),
                            e.bindRenderbuffer(36161, h.__webglColorRenderbuffer[i]);
                            let s = a.convert(r.format, r.encoding)
                              , o = a.convert(r.type)
                              , l = E(r.internalFormat, s, o, r.encoding, !0 === t.isXRRenderTarget)
                              , u = H(t);
                            e.renderbufferStorageMultisample(36161, u, l, t.width, t.height),
                            e.framebufferRenderbuffer(36160, 36064 + i, 36161, h.__webglColorRenderbuffer[i])
                        }
                        e.bindRenderbuffer(36161, null),
                        t.depthBuffer && (h.__webglDepthRenderbuffer = e.createRenderbuffer(),
                        k(h.__webglDepthRenderbuffer, t, !0)),
                        i.bindFramebuffer(36160, null)
                    }
                }
                if (c) {
                    i.bindTexture(34067, u.__webglTexture),
                    U(34067, o, p);
                    for (let e = 0; e < 6; e++)
                        V(h.__webglFramebuffer[e], t, o, 36064, 34069 + e);
                    w(o, p) && T(34067),
                    i.unbindTexture()
                } else if (d) {
                    let e = t.texture;
                    for (let r = 0, a = e.length; r < a; r++) {
                        let a = e[r]
                          , s = n.get(a);
                        i.bindTexture(3553, s.__webglTexture),
                        U(3553, a, p),
                        V(h.__webglFramebuffer, t, a, 36064 + r, 3553),
                        w(a, p) && T(3553)
                    }
                    i.unbindTexture()
                } else {
                    let e = 3553;
                    (t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (l ? e = t.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),
                    i.bindTexture(e, u.__webglTexture),
                    U(e, o, p),
                    V(h.__webglFramebuffer, t, o, 36064, e),
                    w(o, p) && T(e),
                    i.unbindTexture()
                }
                t.depthBuffer && G(t)
            }
            ,
            this.updateRenderTargetMipmap = function(e) {
                let t = b(e) || l
                  , r = !0 === e.isWebGLMultipleRenderTargets ? e.texture : [e.texture];
                for (let a = 0, s = r.length; a < s; a++) {
                    let s = r[a];
                    if (w(s, t)) {
                        let t = e.isWebGLCubeRenderTarget ? 34067 : 3553
                          , r = n.get(s).__webglTexture;
                        i.bindTexture(t, r),
                        T(t),
                        i.unbindTexture()
                    }
                }
            }
            ,
            this.updateMultisampleRenderTarget = function(t) {
                if (l && t.samples > 0 && !1 === W(t)) {
                    let r = t.isWebGLMultipleRenderTargets ? t.texture : [t.texture]
                      , a = t.width
                      , s = t.height
                      , o = 16384
                      , l = []
                      , h = t.stencilBuffer ? 33306 : 36096
                      , u = n.get(t)
                      , c = !0 === t.isWebGLMultipleRenderTargets;
                    if (c)
                        for (let t = 0; t < r.length; t++)
                            i.bindFramebuffer(36160, u.__webglMultisampledFramebuffer),
                            e.framebufferRenderbuffer(36160, 36064 + t, 36161, null),
                            i.bindFramebuffer(36160, u.__webglFramebuffer),
                            e.framebufferTexture2D(36009, 36064 + t, 3553, null, 0);
                    i.bindFramebuffer(36008, u.__webglMultisampledFramebuffer),
                    i.bindFramebuffer(36009, u.__webglFramebuffer);
                    for (let i = 0; i < r.length; i++) {
                        l.push(36064 + i),
                        t.depthBuffer && l.push(h);
                        let d = void 0 !== u.__ignoreDepthValues && u.__ignoreDepthValues;
                        if (!1 === d && (t.depthBuffer && (o |= 256),
                        t.stencilBuffer && (o |= 1024)),
                        c && e.framebufferRenderbuffer(36008, 36064, 36161, u.__webglColorRenderbuffer[i]),
                        !0 === d && (e.invalidateFramebuffer(36008, [h]),
                        e.invalidateFramebuffer(36009, [h])),
                        c) {
                            let t = n.get(r[i]).__webglTexture;
                            e.framebufferTexture2D(36009, 36064, 3553, t, 0)
                        }
                        e.blitFramebuffer(0, 0, a, s, 0, 0, a, s, o, 9728),
                        g && e.invalidateFramebuffer(36008, l)
                    }
                    if (i.bindFramebuffer(36008, null),
                    i.bindFramebuffer(36009, null),
                    c)
                        for (let t = 0; t < r.length; t++) {
                            i.bindFramebuffer(36160, u.__webglMultisampledFramebuffer),
                            e.framebufferRenderbuffer(36160, 36064 + t, 36161, u.__webglColorRenderbuffer[t]);
                            let a = n.get(r[t]).__webglTexture;
                            i.bindFramebuffer(36160, u.__webglFramebuffer),
                            e.framebufferTexture2D(36009, 36064 + t, 3553, a, 0)
                        }
                    i.bindFramebuffer(36009, u.__webglMultisampledFramebuffer)
                }
            }
            ,
            this.setupDepthRenderbuffer = G,
            this.setupFrameBufferTexture = V,
            this.useMultisampledRTT = W
        }
        function nk(e, t, i) {
            let n = i.isWebGL2;
            return {
                convert: function(i, r=null) {
                    let a;
                    if (1009 === i)
                        return 5121;
                    if (1017 === i)
                        return 32819;
                    if (1018 === i)
                        return 32820;
                    if (1010 === i)
                        return 5120;
                    if (1011 === i)
                        return 5122;
                    if (1012 === i)
                        return 5123;
                    if (1013 === i)
                        return 5124;
                    if (1014 === i)
                        return 5125;
                    if (1015 === i)
                        return 5126;
                    if (1016 === i)
                        return n ? 5131 : null !== (a = t.get("OES_texture_half_float")) ? a.HALF_FLOAT_OES : null;
                    if (1021 === i)
                        return 6406;
                    if (1023 === i)
                        return 6408;
                    if (1024 === i)
                        return 6409;
                    if (1025 === i)
                        return 6410;
                    if (1026 === i)
                        return 6402;
                    if (1027 === i)
                        return 34041;
                    if (1022 === i)
                        return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),
                        6408;
                    if (1035 === i)
                        return null !== (a = t.get("EXT_sRGB")) ? a.SRGB_ALPHA_EXT : null;
                    if (1028 === i)
                        return 6403;
                    if (1029 === i)
                        return 36244;
                    if (1030 === i)
                        return 33319;
                    if (1031 === i)
                        return 33320;
                    if (1033 === i)
                        return 36249;
                    if (33776 === i || 33777 === i || 33778 === i || 33779 === i) {
                        if (3001 === r) {
                            if (null === (a = t.get("WEBGL_compressed_texture_s3tc_srgb")))
                                return null;
                            if (33776 === i)
                                return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                            if (33777 === i)
                                return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                            if (33778 === i)
                                return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                            if (33779 === i)
                                return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                        } else {
                            if (null === (a = t.get("WEBGL_compressed_texture_s3tc")))
                                return null;
                            if (33776 === i)
                                return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
                            if (33777 === i)
                                return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                            if (33778 === i)
                                return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                            if (33779 === i)
                                return a.COMPRESSED_RGBA_S3TC_DXT5_EXT
                        }
                    }
                    if (35840 === i || 35841 === i || 35842 === i || 35843 === i) {
                        if (null === (a = t.get("WEBGL_compressed_texture_pvrtc")))
                            return null;
                        if (35840 === i)
                            return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                        if (35841 === i)
                            return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                        if (35842 === i)
                            return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                        if (35843 === i)
                            return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                    }
                    if (36196 === i)
                        return null !== (a = t.get("WEBGL_compressed_texture_etc1")) ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
                    if (37492 === i || 37496 === i) {
                        if (null === (a = t.get("WEBGL_compressed_texture_etc")))
                            return null;
                        if (37492 === i)
                            return 3001 === r ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
                        if (37496 === i)
                            return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC
                    }
                    if (37808 === i || 37809 === i || 37810 === i || 37811 === i || 37812 === i || 37813 === i || 37814 === i || 37815 === i || 37816 === i || 37817 === i || 37818 === i || 37819 === i || 37820 === i || 37821 === i) {
                        if (null === (a = t.get("WEBGL_compressed_texture_astc")))
                            return null;
                        if (37808 === i)
                            return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
                        if (37809 === i)
                            return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
                        if (37810 === i)
                            return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
                        if (37811 === i)
                            return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
                        if (37812 === i)
                            return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
                        if (37813 === i)
                            return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
                        if (37814 === i)
                            return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
                        if (37815 === i)
                            return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
                        if (37816 === i)
                            return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
                        if (37817 === i)
                            return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
                        if (37818 === i)
                            return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
                        if (37819 === i)
                            return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
                        if (37820 === i)
                            return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
                        if (37821 === i)
                            return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR
                    }
                    if (36492 === i) {
                        if (null === (a = t.get("EXT_texture_compression_bptc")))
                            return null;
                        if (36492 === i)
                            return 3001 === r ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT
                    }
                    return 1020 === i ? n ? 34042 : null !== (a = t.get("WEBGL_depth_texture")) ? a.UNSIGNED_INT_24_8_WEBGL : null : void 0 !== e[i] ? e[i] : null
                }
            }
        }
        class nG extends tL {
            constructor(e=[]) {
                super(),
                this.isArrayCamera = !0,
                this.cameras = e
            }
        }
        class nH extends eG {
            constructor() {
                super(),
                this.isGroup = !0,
                this.type = "Group"
            }
        }
        let nW = {
            type: "move"
        };
        class nj {
            constructor() {
                this._targetRay = null,
                this._grip = null,
                this._hand = null
            }
            getHandSpace() {
                return null === this._hand && (this._hand = new nH,
                this._hand.matrixAutoUpdate = !1,
                this._hand.visible = !1,
                this._hand.joints = {},
                this._hand.inputState = {
                    pinching: !1
                }),
                this._hand
            }
            getTargetRaySpace() {
                return null === this._targetRay && (this._targetRay = new nH,
                this._targetRay.matrixAutoUpdate = !1,
                this._targetRay.visible = !1,
                this._targetRay.hasLinearVelocity = !1,
                this._targetRay.linearVelocity = new G,
                this._targetRay.hasAngularVelocity = !1,
                this._targetRay.angularVelocity = new G),
                this._targetRay
            }
            getGripSpace() {
                return null === this._grip && (this._grip = new nH,
                this._grip.matrixAutoUpdate = !1,
                this._grip.visible = !1,
                this._grip.hasLinearVelocity = !1,
                this._grip.linearVelocity = new G,
                this._grip.hasAngularVelocity = !1,
                this._grip.angularVelocity = new G),
                this._grip
            }
            dispatchEvent(e) {
                return null !== this._targetRay && this._targetRay.dispatchEvent(e),
                null !== this._grip && this._grip.dispatchEvent(e),
                null !== this._hand && this._hand.dispatchEvent(e),
                this
            }
            connect(e) {
                if (e && e.hand) {
                    let t = this._hand;
                    if (t)
                        for (let i of e.hand.values())
                            this._getHandJoint(t, i)
                }
                return this.dispatchEvent({
                    type: "connected",
                    data: e
                }),
                this
            }
            disconnect(e) {
                return this.dispatchEvent({
                    type: "disconnected",
                    data: e
                }),
                null !== this._targetRay && (this._targetRay.visible = !1),
                null !== this._grip && (this._grip.visible = !1),
                null !== this._hand && (this._hand.visible = !1),
                this
            }
            update(e, t, i) {
                let n = null
                  , r = null
                  , a = null
                  , s = this._targetRay
                  , o = this._grip
                  , l = this._hand;
                if (e && "visible-blurred" !== t.session.visibilityState) {
                    if (l && e.hand) {
                        for (let n of (a = !0,
                        e.hand.values())) {
                            let e = t.getJointPose(n, i)
                              , r = this._getHandJoint(l, n);
                            null !== e && (r.matrix.fromArray(e.transform.matrix),
                            r.matrix.decompose(r.position, r.rotation, r.scale),
                            r.jointRadius = e.radius),
                            r.visible = null !== e
                        }
                        let n = l.joints["index-finger-tip"]
                          , r = l.joints["thumb-tip"]
                          , s = n.position.distanceTo(r.position);
                        l.inputState.pinching && s > .025 ? (l.inputState.pinching = !1,
                        this.dispatchEvent({
                            type: "pinchend",
                            handedness: e.handedness,
                            target: this
                        })) : !l.inputState.pinching && s <= .015 && (l.inputState.pinching = !0,
                        this.dispatchEvent({
                            type: "pinchstart",
                            handedness: e.handedness,
                            target: this
                        }))
                    } else
                        null !== o && e.gripSpace && null !== (r = t.getPose(e.gripSpace, i)) && (o.matrix.fromArray(r.transform.matrix),
                        o.matrix.decompose(o.position, o.rotation, o.scale),
                        r.linearVelocity ? (o.hasLinearVelocity = !0,
                        o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1,
                        r.angularVelocity ? (o.hasAngularVelocity = !0,
                        o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1);
                    null !== s && (null === (n = t.getPose(e.targetRaySpace, i)) && null !== r && (n = r),
                    null !== n && (s.matrix.fromArray(n.transform.matrix),
                    s.matrix.decompose(s.position, s.rotation, s.scale),
                    n.linearVelocity ? (s.hasLinearVelocity = !0,
                    s.linearVelocity.copy(n.linearVelocity)) : s.hasLinearVelocity = !1,
                    n.angularVelocity ? (s.hasAngularVelocity = !0,
                    s.angularVelocity.copy(n.angularVelocity)) : s.hasAngularVelocity = !1,
                    this.dispatchEvent(nW)))
                }
                return null !== s && (s.visible = null !== n),
                null !== o && (o.visible = null !== r),
                null !== l && (l.visible = null !== a),
                this
            }
            _getHandJoint(e, t) {
                if (void 0 === e.joints[t.jointName]) {
                    let i = new nH;
                    i.matrixAutoUpdate = !1,
                    i.visible = !1,
                    e.joints[t.jointName] = i,
                    e.add(i)
                }
                return e.joints[t.jointName]
            }
        }
        class nq extends U {
            constructor(e, t, i, n, r, a, s, o, l, h) {
                if (1026 !== (h = void 0 !== h ? h : 1026) && 1027 !== h)
                    throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
                void 0 === i && 1026 === h && (i = 1014),
                void 0 === i && 1027 === h && (i = 1020),
                super(null, n, r, a, s, o, h, i, l),
                this.isDepthTexture = !0,
                this.image = {
                    width: e,
                    height: t
                },
                this.magFilter = void 0 !== s ? s : 1003,
                this.minFilter = void 0 !== o ? o : 1003,
                this.flipY = !1,
                this.generateMipmaps = !1
            }
        }
        class nX extends o {
            constructor(e, t) {
                super();
                let i = this
                  , n = null
                  , r = 1
                  , a = null
                  , s = "local-floor"
                  , o = null
                  , l = null
                  , h = null
                  , u = null
                  , c = null
                  , d = null
                  , p = t.getContextAttributes()
                  , f = null
                  , m = null
                  , g = []
                  , v = []
                  , _ = new Set
                  , x = new Map
                  , y = new tL;
                y.layers.enable(1),
                y.viewport = new F;
                let M = new tL;
                M.layers.enable(2),
                M.viewport = new F;
                let S = [y, M]
                  , b = new nG;
                b.layers.enable(1),
                b.layers.enable(2);
                let w = null
                  , T = null;
                function E(e) {
                    let t = v.indexOf(e.inputSource);
                    if (-1 === t)
                        return;
                    let i = g[t];
                    void 0 !== i && i.dispatchEvent({
                        type: e.type,
                        data: e.inputSource
                    })
                }
                function A() {
                    n.removeEventListener("select", E),
                    n.removeEventListener("selectstart", E),
                    n.removeEventListener("selectend", E),
                    n.removeEventListener("squeeze", E),
                    n.removeEventListener("squeezestart", E),
                    n.removeEventListener("squeezeend", E),
                    n.removeEventListener("end", A),
                    n.removeEventListener("inputsourceschange", C);
                    for (let e = 0; e < g.length; e++) {
                        let t = v[e];
                        null !== t && (v[e] = null,
                        g[e].disconnect(t))
                    }
                    w = null,
                    T = null,
                    e.setRenderTarget(f),
                    c = null,
                    u = null,
                    h = null,
                    n = null,
                    m = null,
                    I.stop(),
                    i.isPresenting = !1,
                    i.dispatchEvent({
                        type: "sessionend"
                    })
                }
                function C(e) {
                    for (let t = 0; t < e.removed.length; t++) {
                        let i = e.removed[t]
                          , n = v.indexOf(i);
                        n >= 0 && (v[n] = null,
                        g[n].disconnect(i))
                    }
                    for (let t = 0; t < e.added.length; t++) {
                        let i = e.added[t]
                          , n = v.indexOf(i);
                        if (-1 === n) {
                            for (let e = 0; e < g.length; e++) {
                                if (e >= v.length) {
                                    v.push(i),
                                    n = e;
                                    break
                                }
                                if (null === v[e]) {
                                    v[e] = i,
                                    n = e;
                                    break
                                }
                            }
                            if (-1 === n)
                                break
                        }
                        let r = g[n];
                        r && r.connect(i)
                    }
                }
                this.cameraAutoUpdate = !0,
                this.enabled = !1,
                this.isPresenting = !1,
                this.getController = function(e) {
                    let t = g[e];
                    return void 0 === t && (t = new nj,
                    g[e] = t),
                    t.getTargetRaySpace()
                }
                ,
                this.getControllerGrip = function(e) {
                    let t = g[e];
                    return void 0 === t && (t = new nj,
                    g[e] = t),
                    t.getGripSpace()
                }
                ,
                this.getHand = function(e) {
                    let t = g[e];
                    return void 0 === t && (t = new nj,
                    g[e] = t),
                    t.getHandSpace()
                }
                ,
                this.setFramebufferScaleFactor = function(e) {
                    r = e,
                    !0 === i.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
                }
                ,
                this.setReferenceSpaceType = function(e) {
                    s = e,
                    !0 === i.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
                }
                ,
                this.getReferenceSpace = function() {
                    return o || a
                }
                ,
                this.setReferenceSpace = function(e) {
                    o = e
                }
                ,
                this.getBaseLayer = function() {
                    return null !== u ? u : c
                }
                ,
                this.getBinding = function() {
                    return h
                }
                ,
                this.getFrame = function() {
                    return d
                }
                ,
                this.getSession = function() {
                    return n
                }
                ,
                this.setSession = async function(l) {
                    if (null !== (n = l)) {
                        if (f = e.getRenderTarget(),
                        n.addEventListener("select", E),
                        n.addEventListener("selectstart", E),
                        n.addEventListener("selectend", E),
                        n.addEventListener("squeeze", E),
                        n.addEventListener("squeezestart", E),
                        n.addEventListener("squeezeend", E),
                        n.addEventListener("end", A),
                        n.addEventListener("inputsourceschange", C),
                        !0 !== p.xrCompatible && await t.makeXRCompatible(),
                        void 0 === n.renderState.layers || !1 === e.capabilities.isWebGL2) {
                            let i = {
                                antialias: void 0 !== n.renderState.layers || p.antialias,
                                alpha: p.alpha,
                                depth: p.depth,
                                stencil: p.stencil,
                                framebufferScaleFactor: r
                            };
                            c = new XRWebGLLayer(n,t,i),
                            n.updateRenderState({
                                baseLayer: c
                            }),
                            m = new B(c.framebufferWidth,c.framebufferHeight,{
                                format: 1023,
                                type: 1009,
                                encoding: e.outputEncoding,
                                stencilBuffer: p.stencil
                            })
                        } else {
                            let i = null
                              , a = null
                              , s = null;
                            p.depth && (s = p.stencil ? 35056 : 33190,
                            i = p.stencil ? 1027 : 1026,
                            a = p.stencil ? 1020 : 1014);
                            let o = {
                                colorFormat: 32856,
                                depthFormat: s,
                                scaleFactor: r
                            };
                            u = (h = new XRWebGLBinding(n,t)).createProjectionLayer(o),
                            n.updateRenderState({
                                layers: [u]
                            }),
                            m = new B(u.textureWidth,u.textureHeight,{
                                format: 1023,
                                type: 1009,
                                depthTexture: new nq(u.textureWidth,u.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,i),
                                stencilBuffer: p.stencil,
                                encoding: e.outputEncoding,
                                samples: p.antialias ? 4 : 0
                            });
                            let l = e.properties.get(m);
                            l.__ignoreDepthValues = u.ignoreDepthValues
                        }
                        m.isXRRenderTarget = !0,
                        this.setFoveation(1),
                        o = null,
                        a = await n.requestReferenceSpace(s),
                        I.setContext(n),
                        I.start(),
                        i.isPresenting = !0,
                        i.dispatchEvent({
                            type: "sessionstart"
                        })
                    }
                }
                ;
                let L = new G
                  , P = new G;
                function R(e, t) {
                    null === t ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix),
                    e.matrixWorldInverse.copy(e.matrixWorld).invert()
                }
                this.updateCamera = function(e) {
                    if (null === n)
                        return;
                    b.near = M.near = y.near = e.near,
                    b.far = M.far = y.far = e.far,
                    (w !== b.near || T !== b.far) && (n.updateRenderState({
                        depthNear: b.near,
                        depthFar: b.far
                    }),
                    w = b.near,
                    T = b.far);
                    let t = e.parent
                      , i = b.cameras;
                    R(b, t);
                    for (let e = 0; e < i.length; e++)
                        R(i[e], t);
                    b.matrixWorld.decompose(b.position, b.quaternion, b.scale),
                    e.matrix.copy(b.matrix),
                    e.matrix.decompose(e.position, e.quaternion, e.scale);
                    let r = e.children;
                    for (let e = 0, t = r.length; e < t; e++)
                        r[e].updateMatrixWorld(!0);
                    2 === i.length ? function(e, t, i) {
                        L.setFromMatrixPosition(t.matrixWorld),
                        P.setFromMatrixPosition(i.matrixWorld);
                        let n = L.distanceTo(P)
                          , r = t.projectionMatrix.elements
                          , a = i.projectionMatrix.elements
                          , s = r[14] / (r[10] - 1)
                          , o = r[14] / (r[10] + 1)
                          , l = (r[9] + 1) / r[5]
                          , h = (r[9] - 1) / r[5]
                          , u = (r[8] - 1) / r[0]
                          , c = (a[8] + 1) / a[0]
                          , d = n / (-u + c)
                          , p = -(d * u);
                        t.matrixWorld.decompose(e.position, e.quaternion, e.scale),
                        e.translateX(p),
                        e.translateZ(d),
                        e.matrixWorld.compose(e.position, e.quaternion, e.scale),
                        e.matrixWorldInverse.copy(e.matrixWorld).invert();
                        let f = s + d
                          , m = o + d;
                        e.projectionMatrix.makePerspective(s * u - p, s * c + (n - p), l * o / m * f, h * o / m * f, f, m)
                    }(b, y, M) : b.projectionMatrix.copy(y.projectionMatrix)
                }
                ,
                this.getCamera = function() {
                    return b
                }
                ,
                this.getFoveation = function() {
                    return null !== u ? u.fixedFoveation : null !== c ? c.fixedFoveation : void 0
                }
                ,
                this.setFoveation = function(e) {
                    null !== u && (u.fixedFoveation = e),
                    null !== c && void 0 !== c.fixedFoveation && (c.fixedFoveation = e)
                }
                ,
                this.getPlanes = function() {
                    return _
                }
                ;
                let D = null
                  , I = new tV;
                I.setAnimationLoop(function(t, n) {
                    if (l = n.getViewerPose(o || a),
                    d = n,
                    null !== l) {
                        let t = l.views;
                        null !== c && (e.setRenderTargetFramebuffer(m, c.framebuffer),
                        e.setRenderTarget(m));
                        let i = !1;
                        t.length !== b.cameras.length && (b.cameras.length = 0,
                        i = !0);
                        for (let n = 0; n < t.length; n++) {
                            let r = t[n]
                              , a = null;
                            if (null !== c)
                                a = c.getViewport(r);
                            else {
                                let t = h.getViewSubImage(u, r);
                                a = t.viewport,
                                0 === n && (e.setRenderTargetTextures(m, t.colorTexture, u.ignoreDepthValues ? void 0 : t.depthStencilTexture),
                                e.setRenderTarget(m))
                            }
                            let s = S[n];
                            void 0 === s && ((s = new tL).layers.enable(n),
                            s.viewport = new F,
                            S[n] = s),
                            s.matrix.fromArray(r.transform.matrix),
                            s.projectionMatrix.fromArray(r.projectionMatrix),
                            s.viewport.set(a.x, a.y, a.width, a.height),
                            0 === n && b.matrix.copy(s.matrix),
                            !0 === i && b.cameras.push(s)
                        }
                    }
                    for (let e = 0; e < g.length; e++) {
                        let t = v[e]
                          , i = g[e];
                        null !== t && void 0 !== i && i.update(t, n, o || a)
                    }
                    if (D && D(t, n),
                    n.detectedPlanes) {
                        i.dispatchEvent({
                            type: "planesdetected",
                            data: n.detectedPlanes
                        });
                        let e = null;
                        for (let t of _)
                            n.detectedPlanes.has(t) || (null === e && (e = []),
                            e.push(t));
                        if (null !== e)
                            for (let t of e)
                                _.delete(t),
                                x.delete(t),
                                i.dispatchEvent({
                                    type: "planeremoved",
                                    data: t
                                });
                        for (let e of n.detectedPlanes)
                            if (_.has(e)) {
                                let t = x.get(e);
                                e.lastChangedTime > t && (x.set(e, e.lastChangedTime),
                                i.dispatchEvent({
                                    type: "planechanged",
                                    data: e
                                }))
                            } else
                                _.add(e),
                                x.set(e, n.lastChangedTime),
                                i.dispatchEvent({
                                    type: "planeadded",
                                    data: e
                                })
                    }
                    d = null
                }),
                this.setAnimationLoop = function(e) {
                    D = e
                }
                ,
                this.dispose = function() {}
            }
        }
        function nJ(e, t) {
            function i(i, n) {
                let r, a;
                i.opacity.value = n.opacity,
                n.color && i.diffuse.value.copy(n.color),
                n.emissive && i.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),
                n.map && (i.map.value = n.map),
                n.alphaMap && (i.alphaMap.value = n.alphaMap),
                n.bumpMap && (i.bumpMap.value = n.bumpMap,
                i.bumpScale.value = n.bumpScale,
                1 === n.side && (i.bumpScale.value *= -1)),
                n.displacementMap && (i.displacementMap.value = n.displacementMap,
                i.displacementScale.value = n.displacementScale,
                i.displacementBias.value = n.displacementBias),
                n.emissiveMap && (i.emissiveMap.value = n.emissiveMap),
                n.normalMap && (i.normalMap.value = n.normalMap,
                i.normalScale.value.copy(n.normalScale),
                1 === n.side && i.normalScale.value.negate()),
                n.specularMap && (i.specularMap.value = n.specularMap),
                n.alphaTest > 0 && (i.alphaTest.value = n.alphaTest);
                let s = t.get(n).envMap;
                if (s && (i.envMap.value = s,
                i.flipEnvMap.value = s.isCubeTexture && !1 === s.isRenderTargetTexture ? -1 : 1,
                i.reflectivity.value = n.reflectivity,
                i.ior.value = n.ior,
                i.refractionRatio.value = n.refractionRatio),
                n.lightMap) {
                    i.lightMap.value = n.lightMap;
                    let t = !0 !== e.physicallyCorrectLights ? Math.PI : 1;
                    i.lightMapIntensity.value = n.lightMapIntensity * t
                }
                n.aoMap && (i.aoMap.value = n.aoMap,
                i.aoMapIntensity.value = n.aoMapIntensity),
                n.map ? r = n.map : n.specularMap ? r = n.specularMap : n.displacementMap ? r = n.displacementMap : n.normalMap ? r = n.normalMap : n.bumpMap ? r = n.bumpMap : n.roughnessMap ? r = n.roughnessMap : n.metalnessMap ? r = n.metalnessMap : n.alphaMap ? r = n.alphaMap : n.emissiveMap ? r = n.emissiveMap : n.clearcoatMap ? r = n.clearcoatMap : n.clearcoatNormalMap ? r = n.clearcoatNormalMap : n.clearcoatRoughnessMap ? r = n.clearcoatRoughnessMap : n.iridescenceMap ? r = n.iridescenceMap : n.iridescenceThicknessMap ? r = n.iridescenceThicknessMap : n.specularIntensityMap ? r = n.specularIntensityMap : n.specularColorMap ? r = n.specularColorMap : n.transmissionMap ? r = n.transmissionMap : n.thicknessMap ? r = n.thicknessMap : n.sheenColorMap ? r = n.sheenColorMap : n.sheenRoughnessMap && (r = n.sheenRoughnessMap),
                void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture),
                !0 === r.matrixAutoUpdate && r.updateMatrix(),
                i.uvTransform.value.copy(r.matrix)),
                n.aoMap ? a = n.aoMap : n.lightMap && (a = n.lightMap),
                void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture),
                !0 === a.matrixAutoUpdate && a.updateMatrix(),
                i.uv2Transform.value.copy(a.matrix))
            }
            return {
                refreshFogUniforms: function(t, i) {
                    i.color.getRGB(t.fogColor.value, tT(e)),
                    i.isFog ? (t.fogNear.value = i.near,
                    t.fogFar.value = i.far) : i.isFogExp2 && (t.fogDensity.value = i.density)
                },
                refreshMaterialUniforms: function(e, n, r, a, s) {
                    var o, l, h, u, c, d, p, f, m;
                    let g, v;
                    n.isMeshBasicMaterial ? i(e, n) : n.isMeshLambertMaterial ? i(e, n) : n.isMeshToonMaterial ? (i(e, n),
                    o = e,
                    n.gradientMap && (o.gradientMap.value = n.gradientMap)) : n.isMeshPhongMaterial ? (i(e, n),
                    (l = e).specular.value.copy(n.specular),
                    l.shininess.value = Math.max(n.shininess, 1e-4)) : n.isMeshStandardMaterial ? (i(e, n),
                    function(e, i) {
                        e.roughness.value = i.roughness,
                        e.metalness.value = i.metalness,
                        i.roughnessMap && (e.roughnessMap.value = i.roughnessMap),
                        i.metalnessMap && (e.metalnessMap.value = i.metalnessMap);
                        let n = t.get(i).envMap;
                        n && (e.envMapIntensity.value = i.envMapIntensity)
                    }(e, n),
                    n.isMeshPhysicalMaterial && ((h = e).ior.value = n.ior,
                    n.sheen > 0 && (h.sheenColor.value.copy(n.sheenColor).multiplyScalar(n.sheen),
                    h.sheenRoughness.value = n.sheenRoughness,
                    n.sheenColorMap && (h.sheenColorMap.value = n.sheenColorMap),
                    n.sheenRoughnessMap && (h.sheenRoughnessMap.value = n.sheenRoughnessMap)),
                    n.clearcoat > 0 && (h.clearcoat.value = n.clearcoat,
                    h.clearcoatRoughness.value = n.clearcoatRoughness,
                    n.clearcoatMap && (h.clearcoatMap.value = n.clearcoatMap),
                    n.clearcoatRoughnessMap && (h.clearcoatRoughnessMap.value = n.clearcoatRoughnessMap),
                    n.clearcoatNormalMap && (h.clearcoatNormalScale.value.copy(n.clearcoatNormalScale),
                    h.clearcoatNormalMap.value = n.clearcoatNormalMap,
                    1 === n.side && h.clearcoatNormalScale.value.negate())),
                    n.iridescence > 0 && (h.iridescence.value = n.iridescence,
                    h.iridescenceIOR.value = n.iridescenceIOR,
                    h.iridescenceThicknessMinimum.value = n.iridescenceThicknessRange[0],
                    h.iridescenceThicknessMaximum.value = n.iridescenceThicknessRange[1],
                    n.iridescenceMap && (h.iridescenceMap.value = n.iridescenceMap),
                    n.iridescenceThicknessMap && (h.iridescenceThicknessMap.value = n.iridescenceThicknessMap)),
                    n.transmission > 0 && (h.transmission.value = n.transmission,
                    h.transmissionSamplerMap.value = s.texture,
                    h.transmissionSamplerSize.value.set(s.width, s.height),
                    n.transmissionMap && (h.transmissionMap.value = n.transmissionMap),
                    h.thickness.value = n.thickness,
                    n.thicknessMap && (h.thicknessMap.value = n.thicknessMap),
                    h.attenuationDistance.value = n.attenuationDistance,
                    h.attenuationColor.value.copy(n.attenuationColor)),
                    h.specularIntensity.value = n.specularIntensity,
                    h.specularColor.value.copy(n.specularColor),
                    n.specularIntensityMap && (h.specularIntensityMap.value = n.specularIntensityMap),
                    n.specularColorMap && (h.specularColorMap.value = n.specularColorMap))) : n.isMeshMatcapMaterial ? (i(e, n),
                    u = e,
                    n.matcap && (u.matcap.value = n.matcap)) : n.isMeshDepthMaterial ? i(e, n) : n.isMeshDistanceMaterial ? (i(e, n),
                    (c = e).referencePosition.value.copy(n.referencePosition),
                    c.nearDistance.value = n.nearDistance,
                    c.farDistance.value = n.farDistance) : n.isMeshNormalMaterial ? i(e, n) : n.isLineBasicMaterial ? ((d = e).diffuse.value.copy(n.color),
                    d.opacity.value = n.opacity,
                    n.isLineDashedMaterial && ((p = e).dashSize.value = n.dashSize,
                    p.totalSize.value = n.dashSize + n.gapSize,
                    p.scale.value = n.scale)) : n.isPointsMaterial ? ((f = e).diffuse.value.copy(n.color),
                    f.opacity.value = n.opacity,
                    f.size.value = n.size * r,
                    f.scale.value = .5 * a,
                    n.map && (f.map.value = n.map),
                    n.alphaMap && (f.alphaMap.value = n.alphaMap),
                    n.alphaTest > 0 && (f.alphaTest.value = n.alphaTest),
                    n.map ? g = n.map : n.alphaMap && (g = n.alphaMap),
                    void 0 !== g && (!0 === g.matrixAutoUpdate && g.updateMatrix(),
                    f.uvTransform.value.copy(g.matrix))) : n.isSpriteMaterial ? ((m = e).diffuse.value.copy(n.color),
                    m.opacity.value = n.opacity,
                    m.rotation.value = n.rotation,
                    n.map && (m.map.value = n.map),
                    n.alphaMap && (m.alphaMap.value = n.alphaMap),
                    n.alphaTest > 0 && (m.alphaTest.value = n.alphaTest),
                    n.map ? v = n.map : n.alphaMap && (v = n.alphaMap),
                    void 0 !== v && (!0 === v.matrixAutoUpdate && v.updateMatrix(),
                    m.uvTransform.value.copy(v.matrix))) : n.isShadowMaterial ? (e.color.value.copy(n.color),
                    e.opacity.value = n.opacity) : n.isShaderMaterial && (n.uniformsNeedUpdate = !1)
                }
            }
        }
        function nY(e, t, i, n) {
            let r = {}
              , a = {}
              , s = []
              , o = i.isWebGL2 ? e.getParameter(35375) : 0;
            function l(e) {
                let t = {
                    boundary: 0,
                    storage: 0
                };
                return "number" == typeof e ? (t.boundary = 4,
                t.storage = 4) : e.isVector2 ? (t.boundary = 8,
                t.storage = 8) : e.isVector3 || e.isColor ? (t.boundary = 16,
                t.storage = 12) : e.isVector4 ? (t.boundary = 16,
                t.storage = 16) : e.isMatrix3 ? (t.boundary = 48,
                t.storage = 48) : e.isMatrix4 ? (t.boundary = 64,
                t.storage = 64) : e.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", e),
                t
            }
            function h(t) {
                let i = t.target;
                i.removeEventListener("dispose", h);
                let n = s.indexOf(i.__bindingPointIndex);
                s.splice(n, 1),
                e.deleteBuffer(r[i.id]),
                delete r[i.id],
                delete a[i.id]
            }
            return {
                bind: function(e, t) {
                    let i = t.program;
                    n.uniformBlockBinding(e, i)
                },
                update: function(i, u) {
                    let c = r[i.id];
                    void 0 === c && (function(e) {
                        let t = e.uniforms
                          , i = 0
                          , n = 0;
                        for (let e = 0, r = t.length; e < r; e++) {
                            let r = t[e]
                              , a = {
                                boundary: 0,
                                storage: 0
                            }
                              , s = Array.isArray(r.value) ? r.value : [r.value];
                            for (let e = 0, t = s.length; e < t; e++) {
                                let t = s[e]
                                  , i = l(t);
                                a.boundary += i.boundary,
                                a.storage += i.storage
                            }
                            if (r.__data = new Float32Array(a.storage / Float32Array.BYTES_PER_ELEMENT),
                            r.__offset = i,
                            e > 0) {
                                n = i % 16;
                                let e = 16 - n;
                                0 !== n && e - a.boundary < 0 && (i += 16 - n,
                                r.__offset = i)
                            }
                            i += a.storage
                        }
                        (n = i % 16) > 0 && (i += 16 - n),
                        e.__size = i,
                        e.__cache = {}
                    }(i),
                    c = function(t) {
                        let i = function() {
                            for (let e = 0; e < o; e++)
                                if (-1 === s.indexOf(e))
                                    return s.push(e),
                                    e;
                            return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),
                            0
                        }();
                        t.__bindingPointIndex = i;
                        let n = e.createBuffer()
                          , r = t.__size
                          , a = t.usage;
                        return e.bindBuffer(35345, n),
                        e.bufferData(35345, r, a),
                        e.bindBuffer(35345, null),
                        e.bindBufferBase(35345, i, n),
                        n
                    }(i),
                    r[i.id] = c,
                    i.addEventListener("dispose", h));
                    let d = u.program;
                    n.updateUBOMapping(i, d);
                    let p = t.render.frame;
                    a[i.id] !== p && (function(t) {
                        let i = r[t.id]
                          , n = t.uniforms
                          , a = t.__cache;
                        e.bindBuffer(35345, i);
                        for (let t = 0, i = n.length; t < i; t++) {
                            let i = n[t];
                            if (!0 === function(e, t, i) {
                                let n = e.value;
                                if (void 0 === i[t]) {
                                    if ("number" == typeof n)
                                        i[t] = n;
                                    else {
                                        let e = Array.isArray(n) ? n : [n]
                                          , r = [];
                                        for (let t = 0; t < e.length; t++)
                                            r.push(e[t].clone());
                                        i[t] = r
                                    }
                                    return !0
                                }
                                if ("number" == typeof n) {
                                    if (i[t] !== n)
                                        return i[t] = n,
                                        !0
                                } else {
                                    let e = Array.isArray(i[t]) ? i[t] : [i[t]]
                                      , r = Array.isArray(n) ? n : [n];
                                    for (let t = 0; t < e.length; t++) {
                                        let i = e[t];
                                        if (!1 === i.equals(r[t]))
                                            return i.copy(r[t]),
                                            !0
                                    }
                                }
                                return !1
                            }(i, t, a)) {
                                let t = i.__offset
                                  , n = Array.isArray(i.value) ? i.value : [i.value]
                                  , r = 0;
                                for (let a = 0; a < n.length; a++) {
                                    let s = n[a]
                                      , o = l(s);
                                    "number" == typeof s ? (i.__data[0] = s,
                                    e.bufferSubData(35345, t + r, i.__data)) : s.isMatrix3 ? (i.__data[0] = s.elements[0],
                                    i.__data[1] = s.elements[1],
                                    i.__data[2] = s.elements[2],
                                    i.__data[3] = s.elements[0],
                                    i.__data[4] = s.elements[3],
                                    i.__data[5] = s.elements[4],
                                    i.__data[6] = s.elements[5],
                                    i.__data[7] = s.elements[0],
                                    i.__data[8] = s.elements[6],
                                    i.__data[9] = s.elements[7],
                                    i.__data[10] = s.elements[8],
                                    i.__data[11] = s.elements[0]) : (s.toArray(i.__data, r),
                                    r += o.storage / Float32Array.BYTES_PER_ELEMENT)
                                }
                                e.bufferSubData(35345, t, i.__data)
                            }
                        }
                        e.bindBuffer(35345, null)
                    }(i),
                    a[i.id] = p)
                },
                dispose: function() {
                    for (let t in r)
                        e.deleteBuffer(r[t]);
                    s = [],
                    r = {},
                    a = {}
                }
            }
        }
        function nZ(e={}) {
            let t, i, n, r, a, s, o, l, h, u, c, d, p, m, g, _, x, y, S, b, w, T, E, A, C;
            this.isWebGLRenderer = !0;
            let L = void 0 !== e.canvas ? e.canvas : function() {
                let e = M("canvas");
                return e.style.display = "block",
                e
            }()
              , P = void 0 !== e.context ? e.context : null
              , R = void 0 === e.depth || e.depth
              , D = void 0 === e.stencil || e.stencil
              , I = void 0 !== e.antialias && e.antialias
              , N = void 0 === e.premultipliedAlpha || e.premultipliedAlpha
              , O = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer
              , z = void 0 !== e.powerPreference ? e.powerPreference : "default"
              , U = void 0 !== e.failIfMajorPerformanceCaveat && e.failIfMajorPerformanceCaveat;
            t = null !== P ? P.getContextAttributes().alpha : void 0 !== e.alpha && e.alpha;
            let V = null
              , k = null
              , H = []
              , W = [];
            this.domElement = L,
            this.debug = {
                checkShaderErrors: !0
            },
            this.autoClear = !0,
            this.autoClearColor = !0,
            this.autoClearDepth = !0,
            this.autoClearStencil = !0,
            this.sortObjects = !0,
            this.clippingPlanes = [],
            this.localClippingEnabled = !1,
            this.outputEncoding = 3e3,
            this.physicallyCorrectLights = !1,
            this.toneMapping = 0,
            this.toneMappingExposure = 1;
            let j = this
              , q = !1
              , X = 0
              , J = 0
              , Y = null
              , Z = -1
              , K = null
              , Q = new F
              , $ = new F
              , ee = null
              , et = L.width
              , ei = L.height
              , en = 1
              , er = null
              , ea = null
              , es = new F(0,0,et,ei)
              , eo = new F(0,0,et,ei)
              , el = !1
              , eh = new tB
              , eu = !1
              , ec = !1
              , ed = null
              , ep = new ev
              , ef = new v
              , em = new G
              , eg = {
                background: null,
                fog: null,
                environment: null,
                overrideMaterial: null,
                isScene: !0
            };
            function e_() {
                return null === Y ? en : 1
            }
            let ex = P;
            function ey(e, t) {
                for (let i = 0; i < e.length; i++) {
                    let n = e[i]
                      , r = L.getContext(n, t);
                    if (null !== r)
                        return r
                }
                return null
            }
            try {
                if ("setAttribute"in L && L.setAttribute("data-engine", "three.js r148"),
                L.addEventListener("webglcontextlost", eb, !1),
                L.addEventListener("webglcontextrestored", ew, !1),
                L.addEventListener("webglcontextcreationerror", eT, !1),
                null === ex) {
                    let e = ["webgl2", "webgl", "experimental-webgl"];
                    if (!0 === j.isWebGL1Renderer && e.shift(),
                    ex = ey(e, {
                        alpha: !0,
                        depth: R,
                        stencil: D,
                        antialias: I,
                        premultipliedAlpha: N,
                        preserveDrawingBuffer: O,
                        powerPreference: z,
                        failIfMajorPerformanceCaveat: U
                    }),
                    null === ex) {
                        if (ey(e))
                            throw Error("Error creating WebGL context with your selected attributes.");
                        throw Error("Error creating WebGL context.")
                    }
                }
                void 0 === ex.getShaderPrecisionFormat && (ex.getShaderPrecisionFormat = function() {
                    return {
                        rangeMin: 1,
                        rangeMax: 1,
                        precision: 1
                    }
                }
                )
            } catch (e) {
                throw console.error("THREE.WebGLRenderer: " + e.message),
                e
            }
            function eM() {
                i = new ia(ex),
                n = new tZ(ex,i,e),
                i.init(n),
                E = new nk(ex,i,n),
                r = new nB(ex,i,n),
                a = new il,
                s = new nT,
                o = new nV(ex,i,r,s,n,E,a),
                l = new tQ(j),
                h = new ir(j),
                u = new tk(ex,n),
                A = new tJ(ex,i,u,n),
                c = new is(ex,u,a,A),
                d = new id(ex,c,u,a),
                b = new ic(ex,n,o),
                x = new tK(s),
                p = new nw(j,l,h,i,n,A,x),
                m = new nJ(j,s),
                g = new nL,
                _ = new nO(i,n),
                S = new tX(j,l,h,r,d,t,N),
                y = new nF(j,d,n),
                C = new nY(ex,a,n,r),
                w = new tY(ex,i,a,n),
                T = new io(ex,i,a,n),
                a.programs = p.programs,
                j.capabilities = n,
                j.extensions = i,
                j.properties = s,
                j.renderLists = g,
                j.shadowMap = y,
                j.state = r,
                j.info = a
            }
            eM();
            let eS = new nX(j,ex);
            function eb(e) {
                e.preventDefault(),
                console.log("THREE.WebGLRenderer: Context Lost."),
                q = !0
            }
            function ew() {
                console.log("THREE.WebGLRenderer: Context Restored."),
                q = !1;
                let e = a.autoReset
                  , t = y.enabled
                  , i = y.autoUpdate
                  , n = y.needsUpdate
                  , r = y.type;
                eM(),
                a.autoReset = e,
                y.enabled = t,
                y.autoUpdate = i,
                y.needsUpdate = n,
                y.type = r
            }
            function eT(e) {
                console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", e.statusMessage)
            }
            function eE(e) {
                let t = e.target;
                t.removeEventListener("dispose", eE),
                function(e) {
                    let t = s.get(e).programs;
                    void 0 !== t && (t.forEach(function(e) {
                        p.releaseProgram(e)
                    }),
                    e.isShaderMaterial && p.releaseShaderCache(e))
                }(t),
                s.remove(t)
            }
            this.xr = eS,
            this.getContext = function() {
                return ex
            }
            ,
            this.getContextAttributes = function() {
                return ex.getContextAttributes()
            }
            ,
            this.forceContextLoss = function() {
                let e = i.get("WEBGL_lose_context");
                e && e.loseContext()
            }
            ,
            this.forceContextRestore = function() {
                let e = i.get("WEBGL_lose_context");
                e && e.restoreContext()
            }
            ,
            this.getPixelRatio = function() {
                return en
            }
            ,
            this.setPixelRatio = function(e) {
                void 0 !== e && (en = e,
                this.setSize(et, ei, !1))
            }
            ,
            this.getSize = function(e) {
                return e.set(et, ei)
            }
            ,
            this.setSize = function(e, t, i) {
                if (eS.isPresenting) {
                    console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
                    return
                }
                et = e,
                ei = t,
                L.width = Math.floor(e * en),
                L.height = Math.floor(t * en),
                !1 !== i && (L.style.width = e + "px",
                L.style.height = t + "px"),
                this.setViewport(0, 0, e, t)
            }
            ,
            this.getDrawingBufferSize = function(e) {
                return e.set(et * en, ei * en).floor()
            }
            ,
            this.setDrawingBufferSize = function(e, t, i) {
                et = e,
                ei = t,
                en = i,
                L.width = Math.floor(e * i),
                L.height = Math.floor(t * i),
                this.setViewport(0, 0, e, t)
            }
            ,
            this.getCurrentViewport = function(e) {
                return e.copy(Q)
            }
            ,
            this.getViewport = function(e) {
                return e.copy(es)
            }
            ,
            this.setViewport = function(e, t, i, n) {
                e.isVector4 ? es.set(e.x, e.y, e.z, e.w) : es.set(e, t, i, n),
                r.viewport(Q.copy(es).multiplyScalar(en).floor())
            }
            ,
            this.getScissor = function(e) {
                return e.copy(eo)
            }
            ,
            this.setScissor = function(e, t, i, n) {
                e.isVector4 ? eo.set(e.x, e.y, e.z, e.w) : eo.set(e, t, i, n),
                r.scissor($.copy(eo).multiplyScalar(en).floor())
            }
            ,
            this.getScissorTest = function() {
                return el
            }
            ,
            this.setScissorTest = function(e) {
                r.setScissorTest(el = e)
            }
            ,
            this.setOpaqueSort = function(e) {
                er = e
            }
            ,
            this.setTransparentSort = function(e) {
                ea = e
            }
            ,
            this.getClearColor = function(e) {
                return e.copy(S.getClearColor())
            }
            ,
            this.setClearColor = function() {
                S.setClearColor.apply(S, arguments)
            }
            ,
            this.getClearAlpha = function() {
                return S.getClearAlpha()
            }
            ,
            this.setClearAlpha = function() {
                S.setClearAlpha.apply(S, arguments)
            }
            ,
            this.clear = function(e=!0, t=!0, i=!0) {
                let n = 0;
                e && (n |= 16384),
                t && (n |= 256),
                i && (n |= 1024),
                ex.clear(n)
            }
            ,
            this.clearColor = function() {
                this.clear(!0, !1, !1)
            }
            ,
            this.clearDepth = function() {
                this.clear(!1, !0, !1)
            }
            ,
            this.clearStencil = function() {
                this.clear(!1, !1, !0)
            }
            ,
            this.dispose = function() {
                L.removeEventListener("webglcontextlost", eb, !1),
                L.removeEventListener("webglcontextrestored", ew, !1),
                L.removeEventListener("webglcontextcreationerror", eT, !1),
                g.dispose(),
                _.dispose(),
                s.dispose(),
                l.dispose(),
                h.dispose(),
                d.dispose(),
                A.dispose(),
                C.dispose(),
                p.dispose(),
                eS.dispose(),
                eS.removeEventListener("sessionstart", eC),
                eS.removeEventListener("sessionend", eL),
                ed && (ed.dispose(),
                ed = null),
                eP.stop()
            }
            ,
            this.renderBufferDirect = function(e, t, i, a, d, p) {
                let f;
                null === t && (t = eg);
                let g = d.isMesh && 0 > d.matrixWorld.determinant()
                  , v = function(e, t, i, a, u) {
                    var c, d;
                    !0 !== t.isScene && (t = eg),
                    o.resetTextureUnits();
                    let p = t.fog
                      , f = a.isMeshStandardMaterial ? t.environment : null
                      , g = null === Y ? j.outputEncoding : !0 === Y.isXRRenderTarget ? Y.texture.encoding : 3e3
                      , v = (a.isMeshStandardMaterial ? h : l).get(a.envMap || f)
                      , _ = !0 === a.vertexColors && !!i.attributes.color && 4 === i.attributes.color.itemSize
                      , y = !!a.normalMap && !!i.attributes.tangent
                      , M = !!i.morphAttributes.position
                      , S = !!i.morphAttributes.normal
                      , w = !!i.morphAttributes.color
                      , T = a.toneMapped ? j.toneMapping : 0
                      , E = i.morphAttributes.position || i.morphAttributes.normal || i.morphAttributes.color
                      , A = void 0 !== E ? E.length : 0
                      , L = s.get(a)
                      , P = k.state.lights;
                    if (!0 === eu && (!0 === ec || e !== K)) {
                        let t = e === K && a.id === Z;
                        x.setState(a, e, t)
                    }
                    let R = !1;
                    a.version === L.__version ? L.needsLights && L.lightsStateVersion !== P.state.version ? R = !0 : L.outputEncoding !== g ? R = !0 : u.isInstancedMesh && !1 === L.instancing ? R = !0 : u.isInstancedMesh || !0 !== L.instancing ? u.isSkinnedMesh && !1 === L.skinning ? R = !0 : u.isSkinnedMesh || !0 !== L.skinning ? L.envMap !== v ? R = !0 : !0 === a.fog && L.fog !== p ? R = !0 : void 0 !== L.numClippingPlanes && (L.numClippingPlanes !== x.numPlanes || L.numIntersection !== x.numIntersection) ? R = !0 : L.vertexAlphas !== _ ? R = !0 : L.vertexTangents !== y ? R = !0 : L.morphTargets !== M ? R = !0 : L.morphNormals !== S ? R = !0 : L.morphColors !== w ? R = !0 : L.toneMapping !== T ? R = !0 : !0 === n.isWebGL2 && L.morphTargetsCount !== A && (R = !0) : R = !0 : R = !0 : (R = !0,
                    L.__version = a.version);
                    let D = L.currentProgram;
                    !0 === R && (D = eI(a, t, u));
                    let I = !1
                      , N = !1
                      , O = !1
                      , z = D.getUniforms()
                      , U = L.uniforms;
                    if (r.useProgram(D.program) && (I = !0,
                    N = !0,
                    O = !0),
                    a.id !== Z && (Z = a.id,
                    N = !0),
                    I || K !== e) {
                        if (z.setValue(ex, "projectionMatrix", e.projectionMatrix),
                        n.logarithmicDepthBuffer && z.setValue(ex, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)),
                        K !== e && (K = e,
                        N = !0,
                        O = !0),
                        a.isShaderMaterial || a.isMeshPhongMaterial || a.isMeshToonMaterial || a.isMeshStandardMaterial || a.envMap) {
                            let t = z.map.cameraPosition;
                            void 0 !== t && t.setValue(ex, em.setFromMatrixPosition(e.matrixWorld))
                        }
                        (a.isMeshPhongMaterial || a.isMeshToonMaterial || a.isMeshLambertMaterial || a.isMeshBasicMaterial || a.isMeshStandardMaterial || a.isShaderMaterial) && z.setValue(ex, "isOrthographic", !0 === e.isOrthographicCamera),
                        (a.isMeshPhongMaterial || a.isMeshToonMaterial || a.isMeshLambertMaterial || a.isMeshBasicMaterial || a.isMeshStandardMaterial || a.isShaderMaterial || a.isShadowMaterial || u.isSkinnedMesh) && z.setValue(ex, "viewMatrix", e.matrixWorldInverse)
                    }
                    if (u.isSkinnedMesh) {
                        z.setOptional(ex, u, "bindMatrix"),
                        z.setOptional(ex, u, "bindMatrixInverse");
                        let e = u.skeleton;
                        e && (n.floatVertexTextures ? (null === e.boneTexture && e.computeBoneTexture(),
                        z.setValue(ex, "boneTexture", e.boneTexture, o),
                        z.setValue(ex, "boneTextureSize", e.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))
                    }
                    let F = i.morphAttributes;
                    if ((void 0 !== F.position || void 0 !== F.normal || void 0 !== F.color && !0 === n.isWebGL2) && b.update(u, i, a, D),
                    (N || L.receiveShadow !== u.receiveShadow) && (L.receiveShadow = u.receiveShadow,
                    z.setValue(ex, "receiveShadow", u.receiveShadow)),
                    a.isMeshGouraudMaterial && null !== a.envMap && (U.envMap.value = v,
                    U.flipEnvMap.value = v.isCubeTexture && !1 === v.isRenderTargetTexture ? -1 : 1),
                    N && (z.setValue(ex, "toneMappingExposure", j.toneMappingExposure),
                    L.needsLights && (c = U,
                    d = O,
                    c.ambientLightColor.needsUpdate = d,
                    c.lightProbe.needsUpdate = d,
                    c.directionalLights.needsUpdate = d,
                    c.directionalLightShadows.needsUpdate = d,
                    c.pointLights.needsUpdate = d,
                    c.pointLightShadows.needsUpdate = d,
                    c.spotLights.needsUpdate = d,
                    c.spotLightShadows.needsUpdate = d,
                    c.rectAreaLights.needsUpdate = d,
                    c.hemisphereLights.needsUpdate = d),
                    p && !0 === a.fog && m.refreshFogUniforms(U, p),
                    m.refreshMaterialUniforms(U, a, en, ei, ed),
                    ns.upload(ex, L.uniformsList, U, o)),
                    a.isShaderMaterial && !0 === a.uniformsNeedUpdate && (ns.upload(ex, L.uniformsList, U, o),
                    a.uniformsNeedUpdate = !1),
                    a.isSpriteMaterial && z.setValue(ex, "center", u.center),
                    z.setValue(ex, "modelViewMatrix", u.modelViewMatrix),
                    z.setValue(ex, "normalMatrix", u.normalMatrix),
                    z.setValue(ex, "modelMatrix", u.matrixWorld),
                    a.isShaderMaterial || a.isRawShaderMaterial) {
                        let e = a.uniformsGroups;
                        for (let t = 0, i = e.length; t < i; t++)
                            if (n.isWebGL2) {
                                let i = e[t];
                                C.update(i, D),
                                C.bind(i, D)
                            } else
                                console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")
                    }
                    return D
                }(e, t, i, a, d);
                r.setMaterial(a, g);
                let _ = i.index
                  , y = 1;
                !0 === a.wireframe && (_ = c.getWireframeAttribute(i),
                y = 2);
                let M = i.drawRange
                  , S = i.attributes.position
                  , E = M.start * y
                  , L = (M.start + M.count) * y;
                null !== p && (E = Math.max(E, p.start * y),
                L = Math.min(L, (p.start + p.count) * y)),
                null !== _ ? (E = Math.max(E, 0),
                L = Math.min(L, _.count)) : null != S && (E = Math.max(E, 0),
                L = Math.min(L, S.count));
                let P = L - E;
                if (P < 0 || P === 1 / 0)
                    return;
                A.setup(d, a, v, i, _);
                let R = w;
                if (null !== _ && (f = u.get(_),
                (R = T).setIndex(f)),
                d.isMesh)
                    !0 === a.wireframe ? (r.setLineWidth(a.wireframeLinewidth * e_()),
                    R.setMode(1)) : R.setMode(4);
                else if (d.isLine) {
                    let e = a.linewidth;
                    void 0 === e && (e = 1),
                    r.setLineWidth(e * e_()),
                    d.isLineSegments ? R.setMode(1) : d.isLineLoop ? R.setMode(2) : R.setMode(3)
                } else
                    d.isPoints ? R.setMode(0) : d.isSprite && R.setMode(4);
                if (d.isInstancedMesh)
                    R.renderInstances(E, P, d.count);
                else if (i.isInstancedBufferGeometry) {
                    let e = void 0 !== i._maxInstanceCount ? i._maxInstanceCount : 1 / 0
                      , t = Math.min(i.instanceCount, e);
                    R.renderInstances(E, P, t)
                } else
                    R.render(E, P)
            }
            ,
            this.compile = function(e, t) {
                function i(e, t, i) {
                    !0 === e.transparent && 3 === e.side ? (e.side = 1,
                    e.needsUpdate = !0,
                    eI(e, t, i),
                    e.side = 0,
                    e.needsUpdate = !0,
                    eI(e, t, i),
                    e.side = 3) : eI(e, t, i)
                }
                (k = _.get(e)).init(),
                W.push(k),
                e.traverseVisible(function(e) {
                    e.isLight && e.layers.test(t.layers) && (k.pushLight(e),
                    e.castShadow && k.pushShadow(e))
                }),
                k.setupLights(j.physicallyCorrectLights),
                e.traverse(function(t) {
                    let n = t.material;
                    if (n) {
                        if (Array.isArray(n))
                            for (let r = 0; r < n.length; r++) {
                                let a = n[r];
                                i(a, e, t)
                            }
                        else
                            i(n, e, t)
                    }
                }),
                W.pop(),
                k = null
            }
            ;
            let eA = null;
            function eC() {
                eP.stop()
            }
            function eL() {
                eP.start()
            }
            let eP = new tV;
            function eR(e, t, a, s) {
                let l = e.opaque
                  , h = e.transmissive
                  , u = e.transparent;
                k.setupLightsView(a),
                h.length > 0 && function(e, t, r) {
                    let a = n.isWebGL2;
                    null === ed && (ed = new B(1,1,{
                        generateMipmaps: !0,
                        type: i.has("EXT_color_buffer_half_float") ? 1016 : 1009,
                        minFilter: 1008,
                        samples: a && !0 === I ? 4 : 0
                    })),
                    j.getDrawingBufferSize(ef),
                    a ? ed.setSize(ef.x, ef.y) : ed.setSize(f(ef.x), f(ef.y));
                    let s = j.getRenderTarget();
                    j.setRenderTarget(ed),
                    j.clear();
                    let l = j.toneMapping;
                    j.toneMapping = 0,
                    eD(e, t, r),
                    j.toneMapping = l,
                    o.updateMultisampleRenderTarget(ed),
                    o.updateRenderTargetMipmap(ed),
                    j.setRenderTarget(s)
                }(l, t, a),
                s && r.viewport(Q.copy(s)),
                l.length > 0 && eD(l, t, a),
                h.length > 0 && eD(h, t, a),
                u.length > 0 && eD(u, t, a),
                r.buffers.depth.setTest(!0),
                r.buffers.depth.setMask(!0),
                r.buffers.color.setMask(!0),
                r.setPolygonOffset(!1)
            }
            function eD(e, t, i) {
                let n = !0 === t.isScene ? t.overrideMaterial : null;
                for (let a = 0, s = e.length; a < s; a++) {
                    var r;
                    let s = e[a]
                      , o = s.object
                      , l = s.geometry
                      , h = null === n ? s.material : n
                      , u = s.group;
                    o.layers.test(i.layers) && (r = h,
                    o.onBeforeRender(j, t, i, l, r, u),
                    o.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, o.matrixWorld),
                    o.normalMatrix.getNormalMatrix(o.modelViewMatrix),
                    r.onBeforeRender(j, t, i, l, o, u),
                    !0 === r.transparent && 3 === r.side ? (r.side = 1,
                    r.needsUpdate = !0,
                    j.renderBufferDirect(i, t, l, r, o, u),
                    r.side = 0,
                    r.needsUpdate = !0,
                    j.renderBufferDirect(i, t, l, r, o, u),
                    r.side = 3) : j.renderBufferDirect(i, t, l, r, o, u),
                    o.onAfterRender(j, t, i, l, r, u))
                }
            }
            function eI(e, t, i) {
                !0 !== t.isScene && (t = eg);
                let n = s.get(e)
                  , r = k.state.lights
                  , a = k.state.shadowsArray
                  , o = r.state.version
                  , u = p.getParameters(e, r.state, a, t, i)
                  , c = p.getProgramCacheKey(u)
                  , d = n.programs;
                n.environment = e.isMeshStandardMaterial ? t.environment : null,
                n.fog = t.fog,
                n.envMap = (e.isMeshStandardMaterial ? h : l).get(e.envMap || n.environment),
                void 0 === d && (e.addEventListener("dispose", eE),
                d = new Map,
                n.programs = d);
                let f = d.get(c);
                if (void 0 !== f) {
                    if (n.currentProgram === f && n.lightsStateVersion === o)
                        return eN(e, u),
                        f
                } else
                    u.uniforms = p.getUniforms(e),
                    e.onBuild(i, u, j),
                    e.onBeforeCompile(u, j),
                    f = p.acquireProgram(u, c),
                    d.set(c, f),
                    n.uniforms = u.uniforms;
                let m = n.uniforms;
                (e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping || (m.clippingPlanes = x.uniform),
                eN(e, u),
                n.needsLights = e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && !0 === e.lights,
                n.lightsStateVersion = o,
                n.needsLights && (m.ambientLightColor.value = r.state.ambient,
                m.lightProbe.value = r.state.probe,
                m.directionalLights.value = r.state.directional,
                m.directionalLightShadows.value = r.state.directionalShadow,
                m.spotLights.value = r.state.spot,
                m.spotLightShadows.value = r.state.spotShadow,
                m.rectAreaLights.value = r.state.rectArea,
                m.ltc_1.value = r.state.rectAreaLTC1,
                m.ltc_2.value = r.state.rectAreaLTC2,
                m.pointLights.value = r.state.point,
                m.pointLightShadows.value = r.state.pointShadow,
                m.hemisphereLights.value = r.state.hemi,
                m.directionalShadowMap.value = r.state.directionalShadowMap,
                m.directionalShadowMatrix.value = r.state.directionalShadowMatrix,
                m.spotShadowMap.value = r.state.spotShadowMap,
                m.spotLightMatrix.value = r.state.spotLightMatrix,
                m.spotLightMap.value = r.state.spotLightMap,
                m.pointShadowMap.value = r.state.pointShadowMap,
                m.pointShadowMatrix.value = r.state.pointShadowMatrix);
                let g = f.getUniforms()
                  , v = ns.seqWithValue(g.seq, m);
                return n.currentProgram = f,
                n.uniformsList = v,
                f
            }
            function eN(e, t) {
                let i = s.get(e);
                i.outputEncoding = t.outputEncoding,
                i.instancing = t.instancing,
                i.skinning = t.skinning,
                i.morphTargets = t.morphTargets,
                i.morphNormals = t.morphNormals,
                i.morphColors = t.morphColors,
                i.morphTargetsCount = t.morphTargetsCount,
                i.numClippingPlanes = t.numClippingPlanes,
                i.numIntersection = t.numClipIntersection,
                i.vertexAlphas = t.vertexAlphas,
                i.vertexTangents = t.vertexTangents,
                i.toneMapping = t.toneMapping
            }
            eP.setAnimationLoop(function(e) {
                eA && eA(e)
            }),
            "undefined" != typeof self && eP.setContext(self),
            this.setAnimationLoop = function(e) {
                eA = e,
                eS.setAnimationLoop(e),
                null === e ? eP.stop() : eP.start()
            }
            ,
            eS.addEventListener("sessionstart", eC),
            eS.addEventListener("sessionend", eL),
            this.render = function(e, t) {
                if (void 0 !== t && !0 !== t.isCamera) {
                    console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                    return
                }
                if (!0 === q)
                    return;
                !0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(),
                null === t.parent && !0 === t.matrixWorldAutoUpdate && t.updateMatrixWorld(),
                !0 === eS.enabled && !0 === eS.isPresenting && (!0 === eS.cameraAutoUpdate && eS.updateCamera(t),
                t = eS.getCamera()),
                !0 === e.isScene && e.onBeforeRender(j, e, t, Y),
                (k = _.get(e, W.length)).init(),
                W.push(k),
                ep.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
                eh.setFromProjectionMatrix(ep),
                ec = this.localClippingEnabled,
                eu = x.init(this.clippingPlanes, ec, t),
                (V = g.get(e, H.length)).init(),
                H.push(V),
                function e(t, i, n, r) {
                    if (!1 === t.visible)
                        return;
                    let s = t.layers.test(i.layers);
                    if (s) {
                        if (t.isGroup)
                            n = t.renderOrder;
                        else if (t.isLOD)
                            !0 === t.autoUpdate && t.update(i);
                        else if (t.isLight)
                            k.pushLight(t),
                            t.castShadow && k.pushShadow(t);
                        else if (t.isSprite) {
                            if (!t.frustumCulled || eh.intersectsSprite(t)) {
                                r && em.setFromMatrixPosition(t.matrixWorld).applyMatrix4(ep);
                                let e = d.update(t)
                                  , i = t.material;
                                i.visible && V.push(t, e, i, n, em.z, null)
                            }
                        } else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== a.render.frame && (t.skeleton.update(),
                        t.skeleton.frame = a.render.frame),
                        !t.frustumCulled || eh.intersectsObject(t))) {
                            r && em.setFromMatrixPosition(t.matrixWorld).applyMatrix4(ep);
                            let e = d.update(t)
                              , i = t.material;
                            if (Array.isArray(i)) {
                                let r = e.groups;
                                for (let a = 0, s = r.length; a < s; a++) {
                                    let s = r[a]
                                      , o = i[s.materialIndex];
                                    o && o.visible && V.push(t, e, o, n, em.z, s)
                                }
                            } else
                                i.visible && V.push(t, e, i, n, em.z, null)
                        }
                    }
                    let o = t.children;
                    for (let t = 0, a = o.length; t < a; t++)
                        e(o[t], i, n, r)
                }(e, t, 0, j.sortObjects),
                V.finish(),
                !0 === j.sortObjects && V.sort(er, ea),
                !0 === eu && x.beginShadows();
                let i = k.state.shadowsArray;
                if (y.render(i, e, t),
                !0 === eu && x.endShadows(),
                !0 === this.info.autoReset && this.info.reset(),
                S.render(V, e),
                k.setupLights(j.physicallyCorrectLights),
                t.isArrayCamera) {
                    let i = t.cameras;
                    for (let t = 0, n = i.length; t < n; t++) {
                        let n = i[t];
                        eR(V, e, n, n.viewport)
                    }
                } else
                    eR(V, e, t);
                null !== Y && (o.updateMultisampleRenderTarget(Y),
                o.updateRenderTargetMipmap(Y)),
                !0 === e.isScene && e.onAfterRender(j, e, t),
                A.resetDefaultState(),
                Z = -1,
                K = null,
                W.pop(),
                k = W.length > 0 ? W[W.length - 1] : null,
                H.pop(),
                V = H.length > 0 ? H[H.length - 1] : null
            }
            ,
            this.getActiveCubeFace = function() {
                return X
            }
            ,
            this.getActiveMipmapLevel = function() {
                return J
            }
            ,
            this.getRenderTarget = function() {
                return Y
            }
            ,
            this.setRenderTargetTextures = function(e, t, n) {
                s.get(e.texture).__webglTexture = t,
                s.get(e.depthTexture).__webglTexture = n;
                let r = s.get(e);
                r.__hasExternalTextures = !0,
                r.__hasExternalTextures && (r.__autoAllocateDepthBuffer = void 0 === n,
                r.__autoAllocateDepthBuffer || !0 !== i.has("WEBGL_multisampled_render_to_texture") || (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),
                r.__useRenderToTexture = !1))
            }
            ,
            this.setRenderTargetFramebuffer = function(e, t) {
                let i = s.get(e);
                i.__webglFramebuffer = t,
                i.__useDefaultFramebuffer = void 0 === t
            }
            ,
            this.setRenderTarget = function(e, t=0, i=0) {
                Y = e,
                X = t,
                J = i;
                let a = !0
                  , l = null
                  , h = !1
                  , u = !1;
                if (e) {
                    let i = s.get(e);
                    void 0 !== i.__useDefaultFramebuffer ? (r.bindFramebuffer(36160, null),
                    a = !1) : void 0 === i.__webglFramebuffer ? o.setupRenderTarget(e) : i.__hasExternalTextures && o.rebindTextures(e, s.get(e.texture).__webglTexture, s.get(e.depthTexture).__webglTexture);
                    let c = e.texture;
                    (c.isData3DTexture || c.isDataArrayTexture || c.isCompressedArrayTexture) && (u = !0);
                    let d = s.get(e).__webglFramebuffer;
                    e.isWebGLCubeRenderTarget ? (l = d[t],
                    h = !0) : l = n.isWebGL2 && e.samples > 0 && !1 === o.useMultisampledRTT(e) ? s.get(e).__webglMultisampledFramebuffer : d,
                    Q.copy(e.viewport),
                    $.copy(e.scissor),
                    ee = e.scissorTest
                } else
                    Q.copy(es).multiplyScalar(en).floor(),
                    $.copy(eo).multiplyScalar(en).floor(),
                    ee = el;
                let c = r.bindFramebuffer(36160, l);
                if (c && n.drawBuffers && a && r.drawBuffers(e, l),
                r.viewport(Q),
                r.scissor($),
                r.setScissorTest(ee),
                h) {
                    let n = s.get(e.texture);
                    ex.framebufferTexture2D(36160, 36064, 34069 + t, n.__webglTexture, i)
                } else if (u) {
                    let n = s.get(e.texture);
                    ex.framebufferTextureLayer(36160, 36064, n.__webglTexture, i || 0, t || 0)
                }
                Z = -1
            }
            ,
            this.readRenderTargetPixels = function(e, t, a, o, l, h, u) {
                if (!(e && e.isWebGLRenderTarget)) {
                    console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                    return
                }
                let c = s.get(e).__webglFramebuffer;
                if (e.isWebGLCubeRenderTarget && void 0 !== u && (c = c[u]),
                c) {
                    r.bindFramebuffer(36160, c);
                    try {
                        let r = e.texture
                          , s = r.format
                          , u = r.type;
                        if (1023 !== s && E.convert(s) !== ex.getParameter(35739)) {
                            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                            return
                        }
                        let c = 1016 === u && (i.has("EXT_color_buffer_half_float") || n.isWebGL2 && i.has("EXT_color_buffer_float"));
                        if (1009 !== u && E.convert(u) !== ex.getParameter(35738) && !(1015 === u && (n.isWebGL2 || i.has("OES_texture_float") || i.has("WEBGL_color_buffer_float"))) && !c) {
                            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                            return
                        }
                        t >= 0 && t <= e.width - o && a >= 0 && a <= e.height - l && ex.readPixels(t, a, o, l, E.convert(s), E.convert(u), h)
                    } finally {
                        let e = null !== Y ? s.get(Y).__webglFramebuffer : null;
                        r.bindFramebuffer(36160, e)
                    }
                }
            }
            ,
            this.copyFramebufferToTexture = function(e, t, i=0) {
                let n = Math.pow(2, -i)
                  , a = Math.floor(t.image.width * n)
                  , s = Math.floor(t.image.height * n);
                o.setTexture2D(t, 0),
                ex.copyTexSubImage2D(3553, i, 0, 0, e.x, e.y, a, s),
                r.unbindTexture()
            }
            ,
            this.copyTextureToTexture = function(e, t, i, n=0) {
                let a = t.image.width
                  , s = t.image.height
                  , l = E.convert(i.format)
                  , h = E.convert(i.type);
                o.setTexture2D(i, 0),
                ex.pixelStorei(37440, i.flipY),
                ex.pixelStorei(37441, i.premultiplyAlpha),
                ex.pixelStorei(3317, i.unpackAlignment),
                t.isDataTexture ? ex.texSubImage2D(3553, n, e.x, e.y, a, s, l, h, t.image.data) : t.isCompressedTexture ? ex.compressedTexSubImage2D(3553, n, e.x, e.y, t.mipmaps[0].width, t.mipmaps[0].height, l, t.mipmaps[0].data) : ex.texSubImage2D(3553, n, e.x, e.y, l, h, t.image),
                0 === n && i.generateMipmaps && ex.generateMipmap(3553),
                r.unbindTexture()
            }
            ,
            this.copyTextureToTexture3D = function(e, t, i, n, a=0) {
                let s;
                if (j.isWebGL1Renderer) {
                    console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
                    return
                }
                let l = e.max.x - e.min.x + 1
                  , h = e.max.y - e.min.y + 1
                  , u = e.max.z - e.min.z + 1
                  , c = E.convert(n.format)
                  , d = E.convert(n.type);
                if (n.isData3DTexture)
                    o.setTexture3D(n, 0),
                    s = 32879;
                else if (n.isDataArrayTexture)
                    o.setTexture2DArray(n, 0),
                    s = 35866;
                else {
                    console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                    return
                }
                ex.pixelStorei(37440, n.flipY),
                ex.pixelStorei(37441, n.premultiplyAlpha),
                ex.pixelStorei(3317, n.unpackAlignment);
                let p = ex.getParameter(3314)
                  , f = ex.getParameter(32878)
                  , m = ex.getParameter(3316)
                  , g = ex.getParameter(3315)
                  , v = ex.getParameter(32877)
                  , _ = i.isCompressedTexture ? i.mipmaps[0] : i.image;
                ex.pixelStorei(3314, _.width),
                ex.pixelStorei(32878, _.height),
                ex.pixelStorei(3316, e.min.x),
                ex.pixelStorei(3315, e.min.y),
                ex.pixelStorei(32877, e.min.z),
                i.isDataTexture || i.isData3DTexture ? ex.texSubImage3D(s, a, t.x, t.y, t.z, l, h, u, c, d, _.data) : i.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),
                ex.compressedTexSubImage3D(s, a, t.x, t.y, t.z, l, h, u, c, _.data)) : ex.texSubImage3D(s, a, t.x, t.y, t.z, l, h, u, c, d, _),
                ex.pixelStorei(3314, p),
                ex.pixelStorei(32878, f),
                ex.pixelStorei(3316, m),
                ex.pixelStorei(3315, g),
                ex.pixelStorei(32877, v),
                0 === a && n.generateMipmaps && ex.generateMipmap(s),
                r.unbindTexture()
            }
            ,
            this.initTexture = function(e) {
                e.isCubeTexture ? o.setTextureCube(e, 0) : e.isData3DTexture ? o.setTexture3D(e, 0) : e.isDataArrayTexture || e.isCompressedArrayTexture ? o.setTexture2DArray(e, 0) : o.setTexture2D(e, 0),
                r.unbindTexture()
            }
            ,
            this.resetState = function() {
                X = 0,
                J = 0,
                Y = null,
                r.reset(),
                A.reset()
            }
            ,
            "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
                detail: this
            }))
        }
        (class extends nZ {
        }
        ).prototype.isWebGL1Renderer = !0;
        class nK extends eG {
            constructor() {
                super(),
                this.isScene = !0,
                this.type = "Scene",
                this.background = null,
                this.environment = null,
                this.fog = null,
                this.backgroundBlurriness = 0,
                this.backgroundIntensity = 1,
                this.overrideMaterial = null,
                "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
                    detail: this
                }))
            }
            copy(e, t) {
                return super.copy(e, t),
                null !== e.background && (this.background = e.background.clone()),
                null !== e.environment && (this.environment = e.environment.clone()),
                null !== e.fog && (this.fog = e.fog.clone()),
                this.backgroundBlurriness = e.backgroundBlurriness,
                this.backgroundIntensity = e.backgroundIntensity,
                null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()),
                this.matrixAutoUpdate = e.matrixAutoUpdate,
                this
            }
            toJSON(e) {
                let t = super.toJSON(e);
                return null !== this.fog && (t.object.fog = this.fog.toJSON()),
                this.backgroundBlurriness > 0 && (t.backgroundBlurriness = this.backgroundBlurriness),
                1 !== this.backgroundIntensity && (t.backgroundIntensity = this.backgroundIntensity),
                t
            }
            get autoUpdate() {
                return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),
                this.matrixWorldAutoUpdate
            }
            set autoUpdate(e) {
                console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),
                this.matrixWorldAutoUpdate = e
            }
        }
        class nQ extends e1 {
            constructor(e) {
                super(),
                this.isLineBasicMaterial = !0,
                this.type = "LineBasicMaterial",
                this.color = new D(16777215),
                this.linewidth = 1,
                this.linecap = "round",
                this.linejoin = "round",
                this.fog = !0,
                this.setValues(e)
            }
            copy(e) {
                return super.copy(e),
                this.color.copy(e.color),
                this.linewidth = e.linewidth,
                this.linecap = e.linecap,
                this.linejoin = e.linejoin,
                this.fog = e.fog,
                this
            }
        }
        class n$ {
            constructor() {
                this.type = "Curve",
                this.arcLengthDivisions = 200
            }
            getPoint() {
                return console.warn("THREE.Curve: .getPoint() not implemented."),
                null
            }
            getPointAt(e, t) {
                let i = this.getUtoTmapping(e);
                return this.getPoint(i, t)
            }
            getPoints(e=5) {
                let t = [];
                for (let i = 0; i <= e; i++)
                    t.push(this.getPoint(i / e));
                return t
            }
            getSpacedPoints(e=5) {
                let t = [];
                for (let i = 0; i <= e; i++)
                    t.push(this.getPointAt(i / e));
                return t
            }
            getLength() {
                let e = this.getLengths();
                return e[e.length - 1]
            }
            getLengths(e=this.arcLengthDivisions) {
                if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
                    return this.cacheArcLengths;
                this.needsUpdate = !1;
                let t = [], i, n = this.getPoint(0), r = 0;
                t.push(0);
                for (let a = 1; a <= e; a++)
                    t.push(r += (i = this.getPoint(a / e)).distanceTo(n)),
                    n = i;
                return this.cacheArcLengths = t,
                t
            }
            updateArcLengths() {
                this.needsUpdate = !0,
                this.getLengths()
            }
            getUtoTmapping(e, t) {
                let i;
                let n = this.getLengths()
                  , r = 0
                  , a = n.length;
                i = t || e * n[a - 1];
                let s = 0, o = a - 1, l;
                for (; s <= o; )
                    if ((l = n[r = Math.floor(s + (o - s) / 2)] - i) < 0)
                        s = r + 1;
                    else if (l > 0)
                        o = r - 1;
                    else {
                        o = r;
                        break
                    }
                if (n[r = o] === i)
                    return r / (a - 1);
                let h = n[r]
                  , u = n[r + 1]
                  , c = (r + (i - h) / (u - h)) / (a - 1);
                return c
            }
            getTangent(e, t) {
                let i = e - 1e-4
                  , n = e + 1e-4;
                i < 0 && (i = 0),
                n > 1 && (n = 1);
                let r = this.getPoint(i)
                  , a = this.getPoint(n)
                  , s = t || (r.isVector2 ? new v : new G);
                return s.copy(a).sub(r).normalize(),
                s
            }
            getTangentAt(e, t) {
                let i = this.getUtoTmapping(e);
                return this.getTangent(i, t)
            }
            computeFrenetFrames(e, t) {
                let i = new G
                  , n = []
                  , r = []
                  , a = []
                  , s = new G
                  , o = new ev;
                for (let t = 0; t <= e; t++) {
                    let i = t / e;
                    n[t] = this.getTangentAt(i, new G)
                }
                r[0] = new G,
                a[0] = new G;
                let l = Number.MAX_VALUE
                  , h = Math.abs(n[0].x)
                  , u = Math.abs(n[0].y)
                  , c = Math.abs(n[0].z);
                h <= l && (l = h,
                i.set(1, 0, 0)),
                u <= l && (l = u,
                i.set(0, 1, 0)),
                c <= l && i.set(0, 0, 1),
                s.crossVectors(n[0], i).normalize(),
                r[0].crossVectors(n[0], s),
                a[0].crossVectors(n[0], r[0]);
                for (let t = 1; t <= e; t++) {
                    if (r[t] = r[t - 1].clone(),
                    a[t] = a[t - 1].clone(),
                    s.crossVectors(n[t - 1], n[t]),
                    s.length() > Number.EPSILON) {
                        s.normalize();
                        let e = Math.acos(d(n[t - 1].dot(n[t]), -1, 1));
                        r[t].applyMatrix4(o.makeRotationAxis(s, e))
                    }
                    a[t].crossVectors(n[t], r[t])
                }
                if (!0 === t) {
                    let t = Math.acos(d(r[0].dot(r[e]), -1, 1));
                    t /= e,
                    n[0].dot(s.crossVectors(r[0], r[e])) > 0 && (t = -t);
                    for (let i = 1; i <= e; i++)
                        r[i].applyMatrix4(o.makeRotationAxis(n[i], t * i)),
                        a[i].crossVectors(n[i], r[i])
                }
                return {
                    tangents: n,
                    normals: r,
                    binormals: a
                }
            }
            clone() {
                return new this.constructor().copy(this)
            }
            copy(e) {
                return this.arcLengthDivisions = e.arcLengthDivisions,
                this
            }
            toJSON() {
                let e = {
                    metadata: {
                        version: 4.5,
                        type: "Curve",
                        generator: "Curve.toJSON"
                    }
                };
                return e.arcLengthDivisions = this.arcLengthDivisions,
                e.type = this.type,
                e
            }
            fromJSON(e) {
                return this.arcLengthDivisions = e.arcLengthDivisions,
                this
            }
        }
        class n0 extends n$ {
            constructor(e=0, t=0, i=1, n=1, r=0, a=2 * Math.PI, s=!1, o=0) {
                super(),
                this.isEllipseCurve = !0,
                this.type = "EllipseCurve",
                this.aX = e,
                this.aY = t,
                this.xRadius = i,
                this.yRadius = n,
                this.aStartAngle = r,
                this.aEndAngle = a,
                this.aClockwise = s,
                this.aRotation = o
            }
            getPoint(e, t) {
                let i = t || new v
                  , n = 2 * Math.PI
                  , r = this.aEndAngle - this.aStartAngle
                  , a = Math.abs(r) < Number.EPSILON;
                for (; r < 0; )
                    r += n;
                for (; r > n; )
                    r -= n;
                r < Number.EPSILON && (r = a ? 0 : n),
                !0 !== this.aClockwise || a || (r === n ? r = -n : r -= n);
                let s = this.aStartAngle + e * r
                  , o = this.aX + this.xRadius * Math.cos(s)
                  , l = this.aY + this.yRadius * Math.sin(s);
                if (0 !== this.aRotation) {
                    let e = Math.cos(this.aRotation)
                      , t = Math.sin(this.aRotation)
                      , i = o - this.aX
                      , n = l - this.aY;
                    o = i * e - n * t + this.aX,
                    l = i * t + n * e + this.aY
                }
                return i.set(o, l)
            }
            copy(e) {
                return super.copy(e),
                this.aX = e.aX,
                this.aY = e.aY,
                this.xRadius = e.xRadius,
                this.yRadius = e.yRadius,
                this.aStartAngle = e.aStartAngle,
                this.aEndAngle = e.aEndAngle,
                this.aClockwise = e.aClockwise,
                this.aRotation = e.aRotation,
                this
            }
            toJSON() {
                let e = super.toJSON();
                return e.aX = this.aX,
                e.aY = this.aY,
                e.xRadius = this.xRadius,
                e.yRadius = this.yRadius,
                e.aStartAngle = this.aStartAngle,
                e.aEndAngle = this.aEndAngle,
                e.aClockwise = this.aClockwise,
                e.aRotation = this.aRotation,
                e
            }
            fromJSON(e) {
                return super.fromJSON(e),
                this.aX = e.aX,
                this.aY = e.aY,
                this.xRadius = e.xRadius,
                this.yRadius = e.yRadius,
                this.aStartAngle = e.aStartAngle,
                this.aEndAngle = e.aEndAngle,
                this.aClockwise = e.aClockwise,
                this.aRotation = e.aRotation,
                this
            }
        }
        function n1() {
            let e = 0
              , t = 0
              , i = 0
              , n = 0;
            function r(r, a, s, o) {
                e = r,
                t = s,
                i = -3 * r + 3 * a - 2 * s - o,
                n = 2 * r - 2 * a + s + o
            }
            return {
                initCatmullRom: function(e, t, i, n, a) {
                    r(t, i, a * (i - e), a * (n - t))
                },
                initNonuniformCatmullRom: function(e, t, i, n, a, s, o) {
                    let l = (t - e) / a - (i - e) / (a + s) + (i - t) / s
                      , h = (i - t) / s - (n - t) / (s + o) + (n - i) / o;
                    r(t, i, l *= s, h *= s)
                },
                calc: function(r) {
                    let a = r * r;
                    return e + t * r + i * a + n * (a * r)
                }
            }
        }
        let n3 = new G
          , n2 = new n1
          , n4 = new n1
          , n5 = new n1;
        function n6(e, t, i, n, r) {
            let a = (n - t) * .5
              , s = (r - i) * .5
              , o = e * e;
            return (2 * i - 2 * n + a + s) * (e * o) + (-3 * i + 3 * n - 2 * a - s) * o + a * e + i
        }
        function n7(e, t, i, n) {
            return function(e, t) {
                let i = 1 - e;
                return i * i * t
            }(e, t) + 2 * (1 - e) * e * i + e * e * n
        }
        function n8(e, t, i, n, r) {
            return function(e, t) {
                let i = 1 - e;
                return i * i * i * t
            }(e, t) + function(e, t) {
                let i = 1 - e;
                return 3 * i * i * e * t
            }(e, i) + 3 * (1 - e) * e * e * n + e * e * e * r
        }
        class n9 extends n$ {
            constructor(e=new v, t=new v, i=new v, n=new v) {
                super(),
                this.isCubicBezierCurve = !0,
                this.type = "CubicBezierCurve",
                this.v0 = e,
                this.v1 = t,
                this.v2 = i,
                this.v3 = n
            }
            getPoint(e, t=new v) {
                let i = this.v0
                  , n = this.v1
                  , r = this.v2
                  , a = this.v3;
                return t.set(n8(e, i.x, n.x, r.x, a.x), n8(e, i.y, n.y, r.y, a.y)),
                t
            }
            copy(e) {
                return super.copy(e),
                this.v0.copy(e.v0),
                this.v1.copy(e.v1),
                this.v2.copy(e.v2),
                this.v3.copy(e.v3),
                this
            }
            toJSON() {
                let e = super.toJSON();
                return e.v0 = this.v0.toArray(),
                e.v1 = this.v1.toArray(),
                e.v2 = this.v2.toArray(),
                e.v3 = this.v3.toArray(),
                e
            }
            fromJSON(e) {
                return super.fromJSON(e),
                this.v0.fromArray(e.v0),
                this.v1.fromArray(e.v1),
                this.v2.fromArray(e.v2),
                this.v3.fromArray(e.v3),
                this
            }
        }
        class re extends n$ {
            constructor(e=new v, t=new v) {
                super(),
                this.isLineCurve = !0,
                this.type = "LineCurve",
                this.v1 = e,
                this.v2 = t
            }
            getPoint(e, t=new v) {
                return 1 === e ? t.copy(this.v2) : (t.copy(this.v2).sub(this.v1),
                t.multiplyScalar(e).add(this.v1)),
                t
            }
            getPointAt(e, t) {
                return this.getPoint(e, t)
            }
            getTangent(e, t) {
                let i = t || new v;
                return i.copy(this.v2).sub(this.v1).normalize(),
                i
            }
            copy(e) {
                return super.copy(e),
                this.v1.copy(e.v1),
                this.v2.copy(e.v2),
                this
            }
            toJSON() {
                let e = super.toJSON();
                return e.v1 = this.v1.toArray(),
                e.v2 = this.v2.toArray(),
                e
            }
            fromJSON(e) {
                return super.fromJSON(e),
                this.v1.fromArray(e.v1),
                this.v2.fromArray(e.v2),
                this
            }
        }
        class rt extends n$ {
            constructor(e=new v, t=new v, i=new v) {
                super(),
                this.isQuadraticBezierCurve = !0,
                this.type = "QuadraticBezierCurve",
                this.v0 = e,
                this.v1 = t,
                this.v2 = i
            }
            getPoint(e, t=new v) {
                let i = this.v0
                  , n = this.v1
                  , r = this.v2;
                return t.set(n7(e, i.x, n.x, r.x), n7(e, i.y, n.y, r.y)),
                t
            }
            copy(e) {
                return super.copy(e),
                this.v0.copy(e.v0),
                this.v1.copy(e.v1),
                this.v2.copy(e.v2),
                this
            }
            toJSON() {
                let e = super.toJSON();
                return e.v0 = this.v0.toArray(),
                e.v1 = this.v1.toArray(),
                e.v2 = this.v2.toArray(),
                e
            }
            fromJSON(e) {
                return super.fromJSON(e),
                this.v0.fromArray(e.v0),
                this.v1.fromArray(e.v1),
                this.v2.fromArray(e.v2),
                this
            }
        }
        class ri extends n$ {
            constructor(e=new G, t=new G, i=new G) {
                super(),
                this.isQuadraticBezierCurve3 = !0,
                this.type = "QuadraticBezierCurve3",
                this.v0 = e,
                this.v1 = t,
                this.v2 = i
            }
            getPoint(e, t=new G) {
                let i = this.v0
                  , n = this.v1
                  , r = this.v2;
                return t.set(n7(e, i.x, n.x, r.x), n7(e, i.y, n.y, r.y), n7(e, i.z, n.z, r.z)),
                t
            }
            copy(e) {
                return super.copy(e),
                this.v0.copy(e.v0),
                this.v1.copy(e.v1),
                this.v2.copy(e.v2),
                this
            }
            toJSON() {
                let e = super.toJSON();
                return e.v0 = this.v0.toArray(),
                e.v1 = this.v1.toArray(),
                e.v2 = this.v2.toArray(),
                e
            }
            fromJSON(e) {
                return super.fromJSON(e),
                this.v0.fromArray(e.v0),
                this.v1.fromArray(e.v1),
                this.v2.fromArray(e.v2),
                this
            }
        }
        class rn extends n$ {
            constructor(e=[]) {
                super(),
                this.isSplineCurve = !0,
                this.type = "SplineCurve",
                this.points = e
            }
            getPoint(e, t=new v) {
                let i = this.points
                  , n = (i.length - 1) * e
                  , r = Math.floor(n)
                  , a = n - r
                  , s = i[0 === r ? r : r - 1]
                  , o = i[r]
                  , l = i[r > i.length - 2 ? i.length - 1 : r + 1]
                  , h = i[r > i.length - 3 ? i.length - 1 : r + 2];
                return t.set(n6(a, s.x, o.x, l.x, h.x), n6(a, s.y, o.y, l.y, h.y)),
                t
            }
            copy(e) {
                super.copy(e),
                this.points = [];
                for (let t = 0, i = e.points.length; t < i; t++) {
                    let i = e.points[t];
                    this.points.push(i.clone())
                }
                return this
            }
            toJSON() {
                let e = super.toJSON();
                e.points = [];
                for (let t = 0, i = this.points.length; t < i; t++) {
                    let i = this.points[t];
                    e.points.push(i.toArray())
                }
                return e
            }
            fromJSON(e) {
                super.fromJSON(e),
                this.points = [];
                for (let t = 0, i = e.points.length; t < i; t++) {
                    let i = e.points[t];
                    this.points.push(new v().fromArray(i))
                }
                return this
            }
        }
        var rr = Object.freeze({
            __proto__: null,
            ArcCurve: class extends n0 {
                constructor(e, t, i, n, r, a) {
                    super(e, t, i, i, n, r, a),
                    this.isArcCurve = !0,
                    this.type = "ArcCurve"
                }
            }
            ,
            CatmullRomCurve3: class extends n$ {
                constructor(e=[], t=!1, i="centripetal", n=.5) {
                    super(),
                    this.isCatmullRomCurve3 = !0,
                    this.type = "CatmullRomCurve3",
                    this.points = e,
                    this.closed = t,
                    this.curveType = i,
                    this.tension = n
                }
                getPoint(e, t=new G) {
                    let i, n;
                    let r = this.points
                      , a = r.length
                      , s = (a - (this.closed ? 0 : 1)) * e
                      , o = Math.floor(s)
                      , l = s - o;
                    this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / a) + 1) * a : 0 === l && o === a - 1 && (o = a - 2,
                    l = 1),
                    this.closed || o > 0 ? i = r[(o - 1) % a] : (n3.subVectors(r[0], r[1]).add(r[0]),
                    i = n3);
                    let h = r[o % a]
                      , u = r[(o + 1) % a];
                    if (this.closed || o + 2 < a ? n = r[(o + 2) % a] : (n3.subVectors(r[a - 1], r[a - 2]).add(r[a - 1]),
                    n = n3),
                    "centripetal" === this.curveType || "chordal" === this.curveType) {
                        let e = "chordal" === this.curveType ? .5 : .25
                          , t = Math.pow(i.distanceToSquared(h), e)
                          , r = Math.pow(h.distanceToSquared(u), e)
                          , a = Math.pow(u.distanceToSquared(n), e);
                        r < 1e-4 && (r = 1),
                        t < 1e-4 && (t = r),
                        a < 1e-4 && (a = r),
                        n2.initNonuniformCatmullRom(i.x, h.x, u.x, n.x, t, r, a),
                        n4.initNonuniformCatmullRom(i.y, h.y, u.y, n.y, t, r, a),
                        n5.initNonuniformCatmullRom(i.z, h.z, u.z, n.z, t, r, a)
                    } else
                        "catmullrom" === this.curveType && (n2.initCatmullRom(i.x, h.x, u.x, n.x, this.tension),
                        n4.initCatmullRom(i.y, h.y, u.y, n.y, this.tension),
                        n5.initCatmullRom(i.z, h.z, u.z, n.z, this.tension));
                    return t.set(n2.calc(l), n4.calc(l), n5.calc(l)),
                    t
                }
                copy(e) {
                    super.copy(e),
                    this.points = [];
                    for (let t = 0, i = e.points.length; t < i; t++) {
                        let i = e.points[t];
                        this.points.push(i.clone())
                    }
                    return this.closed = e.closed,
                    this.curveType = e.curveType,
                    this.tension = e.tension,
                    this
                }
                toJSON() {
                    let e = super.toJSON();
                    e.points = [];
                    for (let t = 0, i = this.points.length; t < i; t++) {
                        let i = this.points[t];
                        e.points.push(i.toArray())
                    }
                    return e.closed = this.closed,
                    e.curveType = this.curveType,
                    e.tension = this.tension,
                    e
                }
                fromJSON(e) {
                    super.fromJSON(e),
                    this.points = [];
                    for (let t = 0, i = e.points.length; t < i; t++) {
                        let i = e.points[t];
                        this.points.push(new G().fromArray(i))
                    }
                    return this.closed = e.closed,
                    this.curveType = e.curveType,
                    this.tension = e.tension,
                    this
                }
            }
            ,
            CubicBezierCurve: n9,
            CubicBezierCurve3: class extends n$ {
                constructor(e=new G, t=new G, i=new G, n=new G) {
                    super(),
                    this.isCubicBezierCurve3 = !0,
                    this.type = "CubicBezierCurve3",
                    this.v0 = e,
                    this.v1 = t,
                    this.v2 = i,
                    this.v3 = n
                }
                getPoint(e, t=new G) {
                    let i = this.v0
                      , n = this.v1
                      , r = this.v2
                      , a = this.v3;
                    return t.set(n8(e, i.x, n.x, r.x, a.x), n8(e, i.y, n.y, r.y, a.y), n8(e, i.z, n.z, r.z, a.z)),
                    t
                }
                copy(e) {
                    return super.copy(e),
                    this.v0.copy(e.v0),
                    this.v1.copy(e.v1),
                    this.v2.copy(e.v2),
                    this.v3.copy(e.v3),
                    this
                }
                toJSON() {
                    let e = super.toJSON();
                    return e.v0 = this.v0.toArray(),
                    e.v1 = this.v1.toArray(),
                    e.v2 = this.v2.toArray(),
                    e.v3 = this.v3.toArray(),
                    e
                }
                fromJSON(e) {
                    return super.fromJSON(e),
                    this.v0.fromArray(e.v0),
                    this.v1.fromArray(e.v1),
                    this.v2.fromArray(e.v2),
                    this.v3.fromArray(e.v3),
                    this
                }
            }
            ,
            EllipseCurve: n0,
            LineCurve: re,
            LineCurve3: class extends n$ {
                constructor(e=new G, t=new G) {
                    super(),
                    this.isLineCurve3 = !0,
                    this.type = "LineCurve3",
                    this.v1 = e,
                    this.v2 = t
                }
                getPoint(e, t=new G) {
                    return 1 === e ? t.copy(this.v2) : (t.copy(this.v2).sub(this.v1),
                    t.multiplyScalar(e).add(this.v1)),
                    t
                }
                getPointAt(e, t) {
                    return this.getPoint(e, t)
                }
                copy(e) {
                    return super.copy(e),
                    this.v1.copy(e.v1),
                    this.v2.copy(e.v2),
                    this
                }
                toJSON() {
                    let e = super.toJSON();
                    return e.v1 = this.v1.toArray(),
                    e.v2 = this.v2.toArray(),
                    e
                }
                fromJSON(e) {
                    return super.fromJSON(e),
                    this.v1.fromArray(e.v1),
                    this.v2.fromArray(e.v2),
                    this
                }
            }
            ,
            QuadraticBezierCurve: rt,
            QuadraticBezierCurve3: ri,
            SplineCurve: rn
        });
        class ra extends n$ {
            constructor() {
                super(),
                this.type = "CurvePath",
                this.curves = [],
                this.autoClose = !1
            }
            add(e) {
                this.curves.push(e)
            }
            closePath() {
                let e = this.curves[0].getPoint(0)
                  , t = this.curves[this.curves.length - 1].getPoint(1);
                e.equals(t) || this.curves.push(new re(t,e))
            }
            getPoint(e, t) {
                let i = e * this.getLength()
                  , n = this.getCurveLengths()
                  , r = 0;
                for (; r < n.length; ) {
                    if (n[r] >= i) {
                        let e = n[r] - i
                          , a = this.curves[r]
                          , s = a.getLength()
                          , o = 0 === s ? 0 : 1 - e / s;
                        return a.getPointAt(o, t)
                    }
                    r++
                }
                return null
            }
            getLength() {
                let e = this.getCurveLengths();
                return e[e.length - 1]
            }
            updateArcLengths() {
                this.needsUpdate = !0,
                this.cacheLengths = null,
                this.getCurveLengths()
            }
            getCurveLengths() {
                if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
                    return this.cacheLengths;
                let e = []
                  , t = 0;
                for (let i = 0, n = this.curves.length; i < n; i++)
                    e.push(t += this.curves[i].getLength());
                return this.cacheLengths = e,
                e
            }
            getSpacedPoints(e=40) {
                let t = [];
                for (let i = 0; i <= e; i++)
                    t.push(this.getPoint(i / e));
                return this.autoClose && t.push(t[0]),
                t
            }
            getPoints(e=12) {
                let t;
                let i = [];
                for (let n = 0, r = this.curves; n < r.length; n++) {
                    let a = r[n]
                      , s = a.isEllipseCurve ? 2 * e : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? e * a.points.length : e
                      , o = a.getPoints(s);
                    for (let e = 0; e < o.length; e++) {
                        let n = o[e];
                        t && t.equals(n) || (i.push(n),
                        t = n)
                    }
                }
                return this.autoClose && i.length > 1 && !i[i.length - 1].equals(i[0]) && i.push(i[0]),
                i
            }
            copy(e) {
                super.copy(e),
                this.curves = [];
                for (let t = 0, i = e.curves.length; t < i; t++) {
                    let i = e.curves[t];
                    this.curves.push(i.clone())
                }
                return this.autoClose = e.autoClose,
                this
            }
            toJSON() {
                let e = super.toJSON();
                e.autoClose = this.autoClose,
                e.curves = [];
                for (let t = 0, i = this.curves.length; t < i; t++) {
                    let i = this.curves[t];
                    e.curves.push(i.toJSON())
                }
                return e
            }
            fromJSON(e) {
                super.fromJSON(e),
                this.autoClose = e.autoClose,
                this.curves = [];
                for (let t = 0, i = e.curves.length; t < i; t++) {
                    let i = e.curves[t];
                    this.curves.push(new rr[i.type]().fromJSON(i))
                }
                return this
            }
        }
        class rs extends ra {
            constructor(e) {
                super(),
                this.type = "Path",
                this.currentPoint = new v,
                e && this.setFromPoints(e)
            }
            setFromPoints(e) {
                this.moveTo(e[0].x, e[0].y);
                for (let t = 1, i = e.length; t < i; t++)
                    this.lineTo(e[t].x, e[t].y);
                return this
            }
            moveTo(e, t) {
                return this.currentPoint.set(e, t),
                this
            }
            lineTo(e, t) {
                let i = new re(this.currentPoint.clone(),new v(e,t));
                return this.curves.push(i),
                this.currentPoint.set(e, t),
                this
            }
            quadraticCurveTo(e, t, i, n) {
                let r = new rt(this.currentPoint.clone(),new v(e,t),new v(i,n));
                return this.curves.push(r),
                this.currentPoint.set(i, n),
                this
            }
            bezierCurveTo(e, t, i, n, r, a) {
                let s = new n9(this.currentPoint.clone(),new v(e,t),new v(i,n),new v(r,a));
                return this.curves.push(s),
                this.currentPoint.set(r, a),
                this
            }
            splineThru(e) {
                let t = [this.currentPoint.clone()].concat(e)
                  , i = new rn(t);
                return this.curves.push(i),
                this.currentPoint.copy(e[e.length - 1]),
                this
            }
            arc(e, t, i, n, r, a) {
                let s = this.currentPoint.x
                  , o = this.currentPoint.y;
                return this.absarc(e + s, t + o, i, n, r, a),
                this
            }
            absarc(e, t, i, n, r, a) {
                return this.absellipse(e, t, i, i, n, r, a),
                this
            }
            ellipse(e, t, i, n, r, a, s, o) {
                let l = this.currentPoint.x
                  , h = this.currentPoint.y;
                return this.absellipse(e + l, t + h, i, n, r, a, s, o),
                this
            }
            absellipse(e, t, i, n, r, a, s, o) {
                let l = new n0(e,t,i,n,r,a,s,o);
                if (this.curves.length > 0) {
                    let e = l.getPoint(0);
                    e.equals(this.currentPoint) || this.lineTo(e.x, e.y)
                }
                this.curves.push(l);
                let h = l.getPoint(1);
                return this.currentPoint.copy(h),
                this
            }
            copy(e) {
                return super.copy(e),
                this.currentPoint.copy(e.currentPoint),
                this
            }
            toJSON() {
                let e = super.toJSON();
                return e.currentPoint = this.currentPoint.toArray(),
                e
            }
            fromJSON(e) {
                return super.fromJSON(e),
                this.currentPoint.fromArray(e.currentPoint),
                this
            }
        }
        class ro extends ts {
            constructor(e=[new v(0,-.5), new v(.5,0), new v(0,.5)], t=12, i=0, n=2 * Math.PI) {
                super(),
                this.type = "LatheGeometry",
                this.parameters = {
                    points: e,
                    segments: t,
                    phiStart: i,
                    phiLength: n
                },
                t = Math.floor(t),
                n = d(n, 0, 2 * Math.PI);
                let r = []
                  , a = []
                  , s = []
                  , o = []
                  , l = []
                  , h = 1 / t
                  , u = new G
                  , c = new v
                  , p = new G
                  , f = new G
                  , m = new G
                  , g = 0
                  , _ = 0;
                for (let t = 0; t <= e.length - 1; t++)
                    switch (t) {
                    case 0:
                        g = e[t + 1].x - e[t].x,
                        _ = e[t + 1].y - e[t].y,
                        p.x = 1 * _,
                        p.y = -g,
                        p.z = 0 * _,
                        m.copy(p),
                        p.normalize(),
                        o.push(p.x, p.y, p.z);
                        break;
                    case e.length - 1:
                        o.push(m.x, m.y, m.z);
                        break;
                    default:
                        g = e[t + 1].x - e[t].x,
                        _ = e[t + 1].y - e[t].y,
                        p.x = 1 * _,
                        p.y = -g,
                        p.z = 0 * _,
                        f.copy(p),
                        p.x += m.x,
                        p.y += m.y,
                        p.z += m.z,
                        p.normalize(),
                        o.push(p.x, p.y, p.z),
                        m.copy(f)
                    }
                for (let r = 0; r <= t; r++) {
                    let d = i + r * h * n
                      , p = Math.sin(d)
                      , f = Math.cos(d);
                    for (let i = 0; i <= e.length - 1; i++) {
                        u.x = e[i].x * p,
                        u.y = e[i].y,
                        u.z = e[i].x * f,
                        a.push(u.x, u.y, u.z),
                        c.x = r / t,
                        c.y = i / (e.length - 1),
                        s.push(c.x, c.y);
                        let n = o[3 * i + 0] * p
                          , h = o[3 * i + 1]
                          , d = o[3 * i + 0] * f;
                        l.push(n, h, d)
                    }
                }
                for (let i = 0; i < t; i++)
                    for (let t = 0; t < e.length - 1; t++) {
                        let n = t + i * e.length
                          , a = n + e.length
                          , s = n + e.length + 1
                          , o = n + 1;
                        r.push(n, a, o),
                        r.push(s, o, a)
                    }
                this.setIndex(r),
                this.setAttribute("position", new e8(a,3)),
                this.setAttribute("uv", new e8(s,2)),
                this.setAttribute("normal", new e8(l,3))
            }
            static fromJSON(e) {
                return new ro(e.points,e.segments,e.phiStart,e.phiLength)
            }
        }
        class rl extends ro {
            constructor(e=1, t=1, i=4, n=8) {
                let r = new rs;
                r.absarc(0, -t / 2, e, 1.5 * Math.PI, 0),
                r.absarc(0, t / 2, e, 0, .5 * Math.PI),
                super(r.getPoints(i), n),
                this.type = "CapsuleGeometry",
                this.parameters = {
                    radius: e,
                    height: t,
                    capSegments: i,
                    radialSegments: n
                }
            }
            static fromJSON(e) {
                return new rl(e.radius,e.length,e.capSegments,e.radialSegments)
            }
        }
        class rh extends ts {
            constructor(e=1, t=32, i=0, n=2 * Math.PI) {
                super(),
                this.type = "CircleGeometry",
                this.parameters = {
                    radius: e,
                    segments: t,
                    thetaStart: i,
                    thetaLength: n
                },
                t = Math.max(3, t);
                let r = []
                  , a = []
                  , s = []
                  , o = []
                  , l = new G
                  , h = new v;
                a.push(0, 0, 0),
                s.push(0, 0, 1),
                o.push(.5, .5);
                for (let r = 0, u = 3; r <= t; r++,
                u += 3) {
                    let c = i + r / t * n;
                    l.x = e * Math.cos(c),
                    l.y = e * Math.sin(c),
                    a.push(l.x, l.y, l.z),
                    s.push(0, 0, 1),
                    h.x = (a[u] / e + 1) / 2,
                    h.y = (a[u + 1] / e + 1) / 2,
                    o.push(h.x, h.y)
                }
                for (let e = 1; e <= t; e++)
                    r.push(e, e + 1, 0);
                this.setIndex(r),
                this.setAttribute("position", new e8(a,3)),
                this.setAttribute("normal", new e8(s,3)),
                this.setAttribute("uv", new e8(o,2))
            }
            static fromJSON(e) {
                return new rh(e.radius,e.segments,e.thetaStart,e.thetaLength)
            }
        }
        class ru extends ts {
            constructor(e=1, t=1, i=1, n=32, r=1, a=!1, s=0, o=2 * Math.PI) {
                super(),
                this.type = "CylinderGeometry",
                this.parameters = {
                    radiusTop: e,
                    radiusBottom: t,
                    height: i,
                    radialSegments: n,
                    heightSegments: r,
                    openEnded: a,
                    thetaStart: s,
                    thetaLength: o
                };
                let l = this;
                n = Math.floor(n),
                r = Math.floor(r);
                let h = []
                  , u = []
                  , c = []
                  , d = []
                  , p = 0
                  , f = []
                  , m = i / 2
                  , g = 0;
                function _(i) {
                    let r = p
                      , a = new v
                      , f = new G
                      , _ = 0
                      , x = !0 === i ? e : t
                      , y = !0 === i ? 1 : -1;
                    for (let e = 1; e <= n; e++)
                        u.push(0, m * y, 0),
                        c.push(0, y, 0),
                        d.push(.5, .5),
                        p++;
                    let M = p;
                    for (let e = 0; e <= n; e++) {
                        let t = e / n
                          , i = t * o + s
                          , r = Math.cos(i)
                          , l = Math.sin(i);
                        f.x = x * l,
                        f.y = m * y,
                        f.z = x * r,
                        u.push(f.x, f.y, f.z),
                        c.push(0, y, 0),
                        a.x = .5 * r + .5,
                        a.y = .5 * l * y + .5,
                        d.push(a.x, a.y),
                        p++
                    }
                    for (let e = 0; e < n; e++) {
                        let t = r + e
                          , n = M + e;
                        !0 === i ? h.push(n, n + 1, t) : h.push(n + 1, n, t),
                        _ += 3
                    }
                    l.addGroup(g, _, !0 === i ? 1 : 2),
                    g += _
                }
                (function() {
                    let a = new G
                      , v = new G
                      , _ = 0
                      , x = (t - e) / i;
                    for (let l = 0; l <= r; l++) {
                        let h = []
                          , g = l / r
                          , _ = g * (t - e) + e;
                        for (let e = 0; e <= n; e++) {
                            let t = e / n
                              , r = t * o + s
                              , l = Math.sin(r)
                              , f = Math.cos(r);
                            v.x = _ * l,
                            v.y = -g * i + m,
                            v.z = _ * f,
                            u.push(v.x, v.y, v.z),
                            a.set(l, x, f).normalize(),
                            c.push(a.x, a.y, a.z),
                            d.push(t, 1 - g),
                            h.push(p++)
                        }
                        f.push(h)
                    }
                    for (let e = 0; e < n; e++)
                        for (let t = 0; t < r; t++) {
                            let i = f[t][e]
                              , n = f[t + 1][e]
                              , r = f[t + 1][e + 1]
                              , a = f[t][e + 1];
                            h.push(i, n, a),
                            h.push(n, r, a),
                            _ += 6
                        }
                    l.addGroup(g, _, 0),
                    g += _
                }
                )(),
                !1 === a && (e > 0 && _(!0),
                t > 0 && _(!1)),
                this.setIndex(h),
                this.setAttribute("position", new e8(u,3)),
                this.setAttribute("normal", new e8(c,3)),
                this.setAttribute("uv", new e8(d,2))
            }
            static fromJSON(e) {
                return new ru(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)
            }
        }
        class rc extends ru {
            constructor(e=1, t=1, i=32, n=1, r=!1, a=0, s=2 * Math.PI) {
                super(0, e, t, i, n, r, a, s),
                this.type = "ConeGeometry",
                this.parameters = {
                    radius: e,
                    height: t,
                    radialSegments: i,
                    heightSegments: n,
                    openEnded: r,
                    thetaStart: a,
                    thetaLength: s
                }
            }
            static fromJSON(e) {
                return new rc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)
            }
        }
        class rd extends ts {
            constructor(e=[], t=[], i=1, n=0) {
                super(),
                this.type = "PolyhedronGeometry",
                this.parameters = {
                    vertices: e,
                    indices: t,
                    radius: i,
                    detail: n
                };
                let r = []
                  , a = [];
                function s(e) {
                    r.push(e.x, e.y, e.z)
                }
                function o(t, i) {
                    let n = 3 * t;
                    i.x = e[n + 0],
                    i.y = e[n + 1],
                    i.z = e[n + 2]
                }
                function l(e, t, i, n) {
                    n < 0 && 1 === e.x && (a[t] = e.x - 1),
                    0 === i.x && 0 === i.z && (a[t] = n / 2 / Math.PI + .5)
                }
                function h(e) {
                    return Math.atan2(e.z, -e.x)
                }
                (function(e) {
                    let i = new G
                      , n = new G
                      , r = new G;
                    for (let a = 0; a < t.length; a += 3)
                        o(t[a + 0], i),
                        o(t[a + 1], n),
                        o(t[a + 2], r),
                        function(e, t, i, n) {
                            let r = n + 1
                              , a = [];
                            for (let n = 0; n <= r; n++) {
                                a[n] = [];
                                let s = e.clone().lerp(i, n / r)
                                  , o = t.clone().lerp(i, n / r)
                                  , l = r - n;
                                for (let e = 0; e <= l; e++)
                                    0 === e && n === r ? a[n][e] = s : a[n][e] = s.clone().lerp(o, e / l)
                            }
                            for (let e = 0; e < r; e++)
                                for (let t = 0; t < 2 * (r - e) - 1; t++) {
                                    let i = Math.floor(t / 2);
                                    t % 2 == 0 ? (s(a[e][i + 1]),
                                    s(a[e + 1][i]),
                                    s(a[e][i])) : (s(a[e][i + 1]),
                                    s(a[e + 1][i + 1]),
                                    s(a[e + 1][i]))
                                }
                        }(i, n, r, e)
                }
                )(n),
                function(e) {
                    let t = new G;
                    for (let i = 0; i < r.length; i += 3)
                        t.x = r[i + 0],
                        t.y = r[i + 1],
                        t.z = r[i + 2],
                        t.normalize().multiplyScalar(e),
                        r[i + 0] = t.x,
                        r[i + 1] = t.y,
                        r[i + 2] = t.z
                }(i),
                function() {
                    let e = new G;
                    for (let t = 0; t < r.length; t += 3) {
                        e.x = r[t + 0],
                        e.y = r[t + 1],
                        e.z = r[t + 2];
                        let i = h(e) / 2 / Math.PI + .5
                          , n = Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + .5;
                        a.push(i, 1 - n)
                    }
                    (function() {
                        let e = new G
                          , t = new G
                          , i = new G
                          , n = new G
                          , s = new v
                          , o = new v
                          , u = new v;
                        for (let c = 0, d = 0; c < r.length; c += 9,
                        d += 6) {
                            e.set(r[c + 0], r[c + 1], r[c + 2]),
                            t.set(r[c + 3], r[c + 4], r[c + 5]),
                            i.set(r[c + 6], r[c + 7], r[c + 8]),
                            s.set(a[d + 0], a[d + 1]),
                            o.set(a[d + 2], a[d + 3]),
                            u.set(a[d + 4], a[d + 5]),
                            n.copy(e).add(t).add(i).divideScalar(3);
                            let p = h(n);
                            l(s, d + 0, e, p),
                            l(o, d + 2, t, p),
                            l(u, d + 4, i, p)
                        }
                    }
                    )(),
                    function() {
                        for (let e = 0; e < a.length; e += 6) {
                            let t = a[e + 0]
                              , i = a[e + 2]
                              , n = a[e + 4]
                              , r = Math.max(t, i, n)
                              , s = Math.min(t, i, n);
                            r > .9 && s < .1 && (t < .2 && (a[e + 0] += 1),
                            i < .2 && (a[e + 2] += 1),
                            n < .2 && (a[e + 4] += 1))
                        }
                    }()
                }(),
                this.setAttribute("position", new e8(r,3)),
                this.setAttribute("normal", new e8(r.slice(),3)),
                this.setAttribute("uv", new e8(a,2)),
                0 === n ? this.computeVertexNormals() : this.normalizeNormals()
            }
            static fromJSON(e) {
                return new rd(e.vertices,e.indices,e.radius,e.details)
            }
        }
        class rp extends rd {
            constructor(e=1, t=0) {
                let i = (1 + Math.sqrt(5)) / 2
                  , n = 1 / i;
                super([-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], e, t),
                this.type = "DodecahedronGeometry",
                this.parameters = {
                    radius: e,
                    detail: t
                }
            }
            static fromJSON(e) {
                return new rp(e.radius,e.detail)
            }
        }
        class rf extends rs {
            constructor(e) {
                super(e),
                this.uuid = c(),
                this.type = "Shape",
                this.holes = []
            }
            getPointsHoles(e) {
                let t = [];
                for (let i = 0, n = this.holes.length; i < n; i++)
                    t[i] = this.holes[i].getPoints(e);
                return t
            }
            extractPoints(e) {
                return {
                    shape: this.getPoints(e),
                    holes: this.getPointsHoles(e)
                }
            }
            copy(e) {
                super.copy(e),
                this.holes = [];
                for (let t = 0, i = e.holes.length; t < i; t++) {
                    let i = e.holes[t];
                    this.holes.push(i.clone())
                }
                return this
            }
            toJSON() {
                let e = super.toJSON();
                e.uuid = this.uuid,
                e.holes = [];
                for (let t = 0, i = this.holes.length; t < i; t++) {
                    let i = this.holes[t];
                    e.holes.push(i.toJSON())
                }
                return e
            }
            fromJSON(e) {
                super.fromJSON(e),
                this.uuid = e.uuid,
                this.holes = [];
                for (let t = 0, i = e.holes.length; t < i; t++) {
                    let i = e.holes[t];
                    this.holes.push(new rs().fromJSON(i))
                }
                return this
            }
        }
        let rm = {
            triangulate: function(e, t, i=2) {
                let n, r, a, s, o, l, h;
                let u = t && t.length
                  , c = u ? t[0] * i : e.length
                  , d = rg(e, 0, c, i, !0)
                  , p = [];
                if (!d || d.next === d.prev)
                    return p;
                if (u && (d = function(e, t, i, n) {
                    let r, a, s, o, l;
                    let h = [];
                    for (r = 0,
                    a = t.length; r < a; r++)
                        s = t[r] * n,
                        o = r < a - 1 ? t[r + 1] * n : e.length,
                        (l = rg(e, s, o, n, !1)) === l.next && (l.steiner = !0),
                        h.push(function(e) {
                            let t = e
                              , i = e;
                            do
                                (t.x < i.x || t.x === i.x && t.y < i.y) && (i = t),
                                t = t.next;
                            while (t !== e);
                            return i
                        }(l));
                    for (h.sort(r_),
                    r = 0; r < h.length; r++)
                        i = function(e, t) {
                            let i = function(e, t) {
                                let i = t, n = -1 / 0, r, a = e.x, s = e.y;
                                do {
                                    if (s <= i.y && s >= i.next.y && i.next.y !== i.y) {
                                        let e = i.x + (s - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
                                        if (e <= a && e > n && (n = e,
                                        r = i.x < i.next.x ? i : i.next,
                                        e === a))
                                            return r
                                    }
                                    i = i.next
                                } while (i !== t);
                                if (!r)
                                    return null;
                                let o = r, l = r.x, h = r.y, u = 1 / 0, c;
                                i = r;
                                do {
                                    var d, p;
                                    a >= i.x && i.x >= l && a !== i.x && ry(s < h ? a : n, s, l, h, s < h ? n : a, s, i.x, i.y) && (c = Math.abs(s - i.y) / (a - i.x),
                                    rE(i, e) && (c < u || c === u && (i.x > r.x || i.x === r.x && (d = r,
                                    p = i,
                                    0 > rM(d.prev, d, p.prev) && 0 > rM(p.next, d, d.next)))) && (r = i,
                                    u = c)),
                                    i = i.next
                                } while (i !== o);
                                return r
                            }(e, t);
                            if (!i)
                                return t;
                            let n = rA(i, e);
                            return rv(n, n.next),
                            rv(i, i.next)
                        }(h[r], i);
                    return i
                }(e, t, d, i)),
                e.length > 80 * i) {
                    n = a = e[0],
                    r = s = e[1];
                    for (let t = i; t < c; t += i)
                        o = e[t],
                        l = e[t + 1],
                        o < n && (n = o),
                        l < r && (r = l),
                        o > a && (a = o),
                        l > s && (s = l);
                    h = 0 !== (h = Math.max(a - n, s - r)) ? 32767 / h : 0
                }
                return function e(t, i, n, r, a, s, o) {
                    if (!t)
                        return;
                    !o && s && function(e, t, i, n) {
                        let r = e;
                        do
                            0 === r.z && (r.z = rx(r.x, r.y, t, i, n)),
                            r.prevZ = r.prev,
                            r.nextZ = r.next,
                            r = r.next;
                        while (r !== e);
                        r.prevZ.nextZ = null,
                        r.prevZ = null,
                        function(e) {
                            let t, i, n, r, a, s, o, l, h = 1;
                            do {
                                for (i = e,
                                e = null,
                                a = null,
                                s = 0; i; ) {
                                    for (s++,
                                    n = i,
                                    o = 0,
                                    t = 0; t < h && (o++,
                                    n = n.nextZ); t++)
                                        ;
                                    for (l = h; o > 0 || l > 0 && n; )
                                        0 !== o && (0 === l || !n || i.z <= n.z) ? (r = i,
                                        i = i.nextZ,
                                        o--) : (r = n,
                                        n = n.nextZ,
                                        l--),
                                        a ? a.nextZ = r : e = r,
                                        r.prevZ = a,
                                        a = r;
                                    i = n
                                }
                                a.nextZ = null,
                                h *= 2
                            } while (s > 1)
                        }(r)
                    }(t, r, a, s);
                    let l = t, h, u;
                    for (; t.prev !== t.next; ) {
                        if (h = t.prev,
                        u = t.next,
                        s ? function(e, t, i, n) {
                            let r = e.prev
                              , a = e.next;
                            if (rM(r, e, a) >= 0)
                                return !1;
                            let s = r.x
                              , o = e.x
                              , l = a.x
                              , h = r.y
                              , u = e.y
                              , c = a.y
                              , d = s < o ? s < l ? s : l : o < l ? o : l
                              , p = h < u ? h < c ? h : c : u < c ? u : c
                              , f = s > o ? s > l ? s : l : o > l ? o : l
                              , m = h > u ? h > c ? h : c : u > c ? u : c
                              , g = rx(d, p, t, i, n)
                              , v = rx(f, m, t, i, n)
                              , _ = e.prevZ
                              , x = e.nextZ;
                            for (; _ && _.z >= g && x && x.z <= v; ) {
                                if (_.x >= d && _.x <= f && _.y >= p && _.y <= m && _ !== r && _ !== a && ry(s, h, o, u, l, c, _.x, _.y) && rM(_.prev, _, _.next) >= 0 || (_ = _.prevZ,
                                x.x >= d && x.x <= f && x.y >= p && x.y <= m && x !== r && x !== a && ry(s, h, o, u, l, c, x.x, x.y) && rM(x.prev, x, x.next) >= 0))
                                    return !1;
                                x = x.nextZ
                            }
                            for (; _ && _.z >= g; ) {
                                if (_.x >= d && _.x <= f && _.y >= p && _.y <= m && _ !== r && _ !== a && ry(s, h, o, u, l, c, _.x, _.y) && rM(_.prev, _, _.next) >= 0)
                                    return !1;
                                _ = _.prevZ
                            }
                            for (; x && x.z <= v; ) {
                                if (x.x >= d && x.x <= f && x.y >= p && x.y <= m && x !== r && x !== a && ry(s, h, o, u, l, c, x.x, x.y) && rM(x.prev, x, x.next) >= 0)
                                    return !1;
                                x = x.nextZ
                            }
                            return !0
                        }(t, r, a, s) : function(e) {
                            let t = e.prev
                              , i = e.next;
                            if (rM(t, e, i) >= 0)
                                return !1;
                            let n = t.x
                              , r = e.x
                              , a = i.x
                              , s = t.y
                              , o = e.y
                              , l = i.y
                              , h = n < r ? n < a ? n : a : r < a ? r : a
                              , u = s < o ? s < l ? s : l : o < l ? o : l
                              , c = n > r ? n > a ? n : a : r > a ? r : a
                              , d = s > o ? s > l ? s : l : o > l ? o : l
                              , p = i.next;
                            for (; p !== t; ) {
                                if (p.x >= h && p.x <= c && p.y >= u && p.y <= d && ry(n, s, r, o, a, l, p.x, p.y) && rM(p.prev, p, p.next) >= 0)
                                    return !1;
                                p = p.next
                            }
                            return !0
                        }(t)) {
                            i.push(h.i / n | 0),
                            i.push(t.i / n | 0),
                            i.push(u.i / n | 0),
                            rL(t),
                            t = u.next,
                            l = u.next;
                            continue
                        }
                        if ((t = u) === l) {
                            o ? 1 === o ? e(t = function(e, t, i) {
                                let n = e;
                                do {
                                    let r = n.prev
                                      , a = n.next.next;
                                    !rS(r, a) && rb(r, n, n.next, a) && rE(r, a) && rE(a, r) && (t.push(r.i / i | 0),
                                    t.push(n.i / i | 0),
                                    t.push(a.i / i | 0),
                                    rL(n),
                                    rL(n.next),
                                    n = e = a),
                                    n = n.next
                                } while (n !== e);
                                return rv(n)
                            }(rv(t), i, n), i, n, r, a, s, 2) : 2 === o && function(t, i, n, r, a, s) {
                                let o = t;
                                do {
                                    let t = o.next.next;
                                    for (; t !== o.prev; ) {
                                        var l, h;
                                        if (o.i !== t.i && (l = o,
                                        h = t,
                                        l.next.i !== h.i && l.prev.i !== h.i && !function(e, t) {
                                            let i = e;
                                            do {
                                                if (i.i !== e.i && i.next.i !== e.i && i.i !== t.i && i.next.i !== t.i && rb(i, i.next, e, t))
                                                    return !0;
                                                i = i.next
                                            } while (i !== e);
                                            return !1
                                        }(l, h) && (rE(l, h) && rE(h, l) && function(e, t) {
                                            let i = e
                                              , n = !1
                                              , r = (e.x + t.x) / 2
                                              , a = (e.y + t.y) / 2;
                                            do
                                                i.y > a != i.next.y > a && i.next.y !== i.y && r < (i.next.x - i.x) * (a - i.y) / (i.next.y - i.y) + i.x && (n = !n),
                                                i = i.next;
                                            while (i !== e);
                                            return n
                                        }(l, h) && (rM(l.prev, l, h.prev) || rM(l, h.prev, h)) || rS(l, h) && rM(l.prev, l, l.next) > 0 && rM(h.prev, h, h.next) > 0))) {
                                            let l = rA(o, t);
                                            o = rv(o, o.next),
                                            l = rv(l, l.next),
                                            e(o, i, n, r, a, s, 0),
                                            e(l, i, n, r, a, s, 0);
                                            return
                                        }
                                        t = t.next
                                    }
                                    o = o.next
                                } while (o !== t)
                            }(t, i, n, r, a, s) : e(rv(t), i, n, r, a, s, 1);
                            break
                        }
                    }
                }(d, p, i, n, r, h, 0),
                p
            }
        };
        function rg(e, t, i, n, r) {
            let a, s;
            if (r === function(e, t, i, n) {
                let r = 0;
                for (let a = t, s = i - n; a < i; a += n)
                    r += (e[s] - e[a]) * (e[a + 1] + e[s + 1]),
                    s = a;
                return r
            }(e, t, i, n) > 0)
                for (a = t; a < i; a += n)
                    s = rC(a, e[a], e[a + 1], s);
            else
                for (a = i - n; a >= t; a -= n)
                    s = rC(a, e[a], e[a + 1], s);
            return s && rS(s, s.next) && (rL(s),
            s = s.next),
            s
        }
        function rv(e, t) {
            if (!e)
                return e;
            t || (t = e);
            let i = e, n;
            do
                if (n = !1,
                !i.steiner && (rS(i, i.next) || 0 === rM(i.prev, i, i.next))) {
                    if (rL(i),
                    (i = t = i.prev) === i.next)
                        break;
                    n = !0
                } else
                    i = i.next;
            while (n || i !== t);
            return t
        }
        function r_(e, t) {
            return e.x - t.x
        }
        function rx(e, t, i, n, r) {
            return (e = ((e = ((e = ((e = ((e = (e - i) * r | 0) | e << 8) & 16711935) | e << 4) & 252645135) | e << 2) & 858993459) | e << 1) & 1431655765) | (t = ((t = ((t = ((t = ((t = (t - n) * r | 0) | t << 8) & 16711935) | t << 4) & 252645135) | t << 2) & 858993459) | t << 1) & 1431655765) << 1
        }
        function ry(e, t, i, n, r, a, s, o) {
            return (r - s) * (t - o) >= (e - s) * (a - o) && (e - s) * (n - o) >= (i - s) * (t - o) && (i - s) * (a - o) >= (r - s) * (n - o)
        }
        function rM(e, t, i) {
            return (t.y - e.y) * (i.x - t.x) - (t.x - e.x) * (i.y - t.y)
        }
        function rS(e, t) {
            return e.x === t.x && e.y === t.y
        }
        function rb(e, t, i, n) {
            let r = rT(rM(e, t, i))
              , a = rT(rM(e, t, n))
              , s = rT(rM(i, n, e))
              , o = rT(rM(i, n, t));
            return !!(r !== a && s !== o || 0 === r && rw(e, i, t) || 0 === a && rw(e, n, t) || 0 === s && rw(i, e, n) || 0 === o && rw(i, t, n))
        }
        function rw(e, t, i) {
            return t.x <= Math.max(e.x, i.x) && t.x >= Math.min(e.x, i.x) && t.y <= Math.max(e.y, i.y) && t.y >= Math.min(e.y, i.y)
        }
        function rT(e) {
            return e > 0 ? 1 : e < 0 ? -1 : 0
        }
        function rE(e, t) {
            return 0 > rM(e.prev, e, e.next) ? rM(e, t, e.next) >= 0 && rM(e, e.prev, t) >= 0 : 0 > rM(e, t, e.prev) || 0 > rM(e, e.next, t)
        }
        function rA(e, t) {
            let i = new rP(e.i,e.x,e.y)
              , n = new rP(t.i,t.x,t.y)
              , r = e.next
              , a = t.prev;
            return e.next = t,
            t.prev = e,
            i.next = r,
            r.prev = i,
            n.next = i,
            i.prev = n,
            a.next = n,
            n.prev = a,
            n
        }
        function rC(e, t, i, n) {
            let r = new rP(e,t,i);
            return n ? (r.next = n.next,
            r.prev = n,
            n.next.prev = r,
            n.next = r) : (r.prev = r,
            r.next = r),
            r
        }
        function rL(e) {
            e.next.prev = e.prev,
            e.prev.next = e.next,
            e.prevZ && (e.prevZ.nextZ = e.nextZ),
            e.nextZ && (e.nextZ.prevZ = e.prevZ)
        }
        function rP(e, t, i) {
            this.i = e,
            this.x = t,
            this.y = i,
            this.prev = null,
            this.next = null,
            this.z = 0,
            this.prevZ = null,
            this.nextZ = null,
            this.steiner = !1
        }
        class rR {
            static area(e) {
                let t = e.length
                  , i = 0;
                for (let n = t - 1, r = 0; r < t; n = r++)
                    i += e[n].x * e[r].y - e[r].x * e[n].y;
                return .5 * i
            }
            static isClockWise(e) {
                return 0 > rR.area(e)
            }
            static triangulateShape(e, t) {
                let i = []
                  , n = []
                  , r = [];
                rD(e),
                rI(i, e);
                let a = e.length;
                t.forEach(rD);
                for (let e = 0; e < t.length; e++)
                    n.push(a),
                    a += t[e].length,
                    rI(i, t[e]);
                let s = rm.triangulate(i, n);
                for (let e = 0; e < s.length; e += 3)
                    r.push(s.slice(e, e + 3));
                return r
            }
        }
        function rD(e) {
            let t = e.length;
            t > 2 && e[t - 1].equals(e[0]) && e.pop()
        }
        function rI(e, t) {
            for (let i = 0; i < t.length; i++)
                e.push(t[i].x),
                e.push(t[i].y)
        }
        class rN extends ts {
            constructor(e=new rf([new v(.5,.5), new v(-.5,.5), new v(-.5,-.5), new v(.5,-.5)]), t={}) {
                super(),
                this.type = "ExtrudeGeometry",
                this.parameters = {
                    shapes: e,
                    options: t
                },
                e = Array.isArray(e) ? e : [e];
                let i = this
                  , n = []
                  , r = [];
                for (let a = 0, s = e.length; a < s; a++) {
                    let s = e[a];
                    !function(e) {
                        let a, s, o, l;
                        let h = [], u = void 0 !== t.curveSegments ? t.curveSegments : 12, c = void 0 !== t.steps ? t.steps : 1, d = void 0 !== t.depth ? t.depth : 1, p = void 0 === t.bevelEnabled || t.bevelEnabled, f = void 0 !== t.bevelThickness ? t.bevelThickness : .2, m = void 0 !== t.bevelSize ? t.bevelSize : f - .1, g = void 0 !== t.bevelOffset ? t.bevelOffset : 0, _ = void 0 !== t.bevelSegments ? t.bevelSegments : 3, x = t.extrudePath, y = void 0 !== t.UVGenerator ? t.UVGenerator : rO, M, S = !1;
                        x && (M = x.getSpacedPoints(c),
                        S = !0,
                        p = !1,
                        a = x.computeFrenetFrames(c, !1),
                        s = new G,
                        o = new G,
                        l = new G),
                        p || (_ = 0,
                        f = 0,
                        m = 0,
                        g = 0);
                        let b = e.extractPoints(u)
                          , w = b.shape
                          , T = b.holes
                          , E = !rR.isClockWise(w);
                        if (E) {
                            w = w.reverse();
                            for (let e = 0, t = T.length; e < t; e++) {
                                let t = T[e];
                                rR.isClockWise(t) && (T[e] = t.reverse())
                            }
                        }
                        let A = rR.triangulateShape(w, T)
                          , C = w;
                        for (let e = 0, t = T.length; e < t; e++) {
                            let t = T[e];
                            w = w.concat(t)
                        }
                        function L(e, t, i) {
                            return t || console.error("THREE.ExtrudeGeometry: vec does not exist"),
                            t.clone().multiplyScalar(i).add(e)
                        }
                        let P = w.length
                          , R = A.length;
                        function D(e, t, i) {
                            let n, r, a;
                            let s = e.x - t.x
                              , o = e.y - t.y
                              , l = i.x - e.x
                              , h = i.y - e.y
                              , u = s * s + o * o;
                            if (Math.abs(s * h - o * l) > Number.EPSILON) {
                                let c = Math.sqrt(u)
                                  , d = Math.sqrt(l * l + h * h)
                                  , p = t.x - o / c
                                  , f = t.y + s / c
                                  , m = i.x - h / d
                                  , g = i.y + l / d
                                  , _ = ((m - p) * h - (g - f) * l) / (s * h - o * l);
                                n = p + s * _ - e.x,
                                r = f + o * _ - e.y;
                                let x = n * n + r * r;
                                if (x <= 2)
                                    return new v(n,r);
                                a = Math.sqrt(x / 2)
                            } else {
                                let e = !1;
                                s > Number.EPSILON ? l > Number.EPSILON && (e = !0) : s < -Number.EPSILON ? l < -Number.EPSILON && (e = !0) : Math.sign(o) === Math.sign(h) && (e = !0),
                                e ? (n = -o,
                                r = s,
                                a = Math.sqrt(u)) : (n = s,
                                r = o,
                                a = Math.sqrt(u / 2))
                            }
                            return new v(n / a,r / a)
                        }
                        let I = [];
                        for (let e = 0, t = C.length, i = t - 1, n = e + 1; e < t; e++,
                        i++,
                        n++)
                            i === t && (i = 0),
                            n === t && (n = 0),
                            I[e] = D(C[e], C[i], C[n]);
                        let N = [], O, z = I.concat();
                        for (let e = 0, t = T.length; e < t; e++) {
                            let t = T[e];
                            O = [];
                            for (let e = 0, i = t.length, n = i - 1, r = e + 1; e < i; e++,
                            n++,
                            r++)
                                n === i && (n = 0),
                                r === i && (r = 0),
                                O[e] = D(t[e], t[n], t[r]);
                            N.push(O),
                            z = z.concat(O)
                        }
                        for (let e = 0; e < _; e++) {
                            let t = e / _
                              , i = f * Math.cos(t * Math.PI / 2)
                              , n = m * Math.sin(t * Math.PI / 2) + g;
                            for (let e = 0, t = C.length; e < t; e++) {
                                let t = L(C[e], I[e], n);
                                B(t.x, t.y, -i)
                            }
                            for (let e = 0, t = T.length; e < t; e++) {
                                let t = T[e];
                                O = N[e];
                                for (let e = 0, r = t.length; e < r; e++) {
                                    let r = L(t[e], O[e], n);
                                    B(r.x, r.y, -i)
                                }
                            }
                        }
                        let U = m + g;
                        for (let e = 0; e < P; e++) {
                            let t = p ? L(w[e], z[e], U) : w[e];
                            S ? (o.copy(a.normals[0]).multiplyScalar(t.x),
                            s.copy(a.binormals[0]).multiplyScalar(t.y),
                            l.copy(M[0]).add(o).add(s),
                            B(l.x, l.y, l.z)) : B(t.x, t.y, 0)
                        }
                        for (let e = 1; e <= c; e++)
                            for (let t = 0; t < P; t++) {
                                let i = p ? L(w[t], z[t], U) : w[t];
                                S ? (o.copy(a.normals[e]).multiplyScalar(i.x),
                                s.copy(a.binormals[e]).multiplyScalar(i.y),
                                l.copy(M[e]).add(o).add(s),
                                B(l.x, l.y, l.z)) : B(i.x, i.y, d / c * e)
                            }
                        for (let e = _ - 1; e >= 0; e--) {
                            let t = e / _
                              , i = f * Math.cos(t * Math.PI / 2)
                              , n = m * Math.sin(t * Math.PI / 2) + g;
                            for (let e = 0, t = C.length; e < t; e++) {
                                let t = L(C[e], I[e], n);
                                B(t.x, t.y, d + i)
                            }
                            for (let e = 0, t = T.length; e < t; e++) {
                                let t = T[e];
                                O = N[e];
                                for (let e = 0, r = t.length; e < r; e++) {
                                    let r = L(t[e], O[e], n);
                                    S ? B(r.x, r.y + M[c - 1].y, M[c - 1].x + i) : B(r.x, r.y, d + i)
                                }
                            }
                        }
                        function F(e, t) {
                            let r = e.length;
                            for (; --r >= 0; ) {
                                let a = r
                                  , s = r - 1;
                                s < 0 && (s = e.length - 1);
                                for (let e = 0, r = c + 2 * _; e < r; e++) {
                                    let r = P * e
                                      , o = P * (e + 1)
                                      , l = t + a + r
                                      , h = t + s + r
                                      , u = t + s + o
                                      , c = t + a + o;
                                    !function(e, t, r, a) {
                                        k(e),
                                        k(t),
                                        k(a),
                                        k(t),
                                        k(r),
                                        k(a);
                                        let s = n.length / 3
                                          , o = y.generateSideWallUV(i, n, s - 6, s - 3, s - 2, s - 1);
                                        H(o[0]),
                                        H(o[1]),
                                        H(o[3]),
                                        H(o[1]),
                                        H(o[2]),
                                        H(o[3])
                                    }(l, h, u, c)
                                }
                            }
                        }
                        function B(e, t, i) {
                            h.push(e),
                            h.push(t),
                            h.push(i)
                        }
                        function V(e, t, r) {
                            k(e),
                            k(t),
                            k(r);
                            let a = n.length / 3
                              , s = y.generateTopUV(i, n, a - 3, a - 2, a - 1);
                            H(s[0]),
                            H(s[1]),
                            H(s[2])
                        }
                        function k(e) {
                            n.push(h[3 * e + 0]),
                            n.push(h[3 * e + 1]),
                            n.push(h[3 * e + 2])
                        }
                        function H(e) {
                            r.push(e.x),
                            r.push(e.y)
                        }
                        (function() {
                            let e = n.length / 3;
                            if (p) {
                                let e = 0 * P;
                                for (let t = 0; t < R; t++) {
                                    let i = A[t];
                                    V(i[2] + e, i[1] + e, i[0] + e)
                                }
                                e = P * (c + 2 * _);
                                for (let t = 0; t < R; t++) {
                                    let i = A[t];
                                    V(i[0] + e, i[1] + e, i[2] + e)
                                }
                            } else {
                                for (let e = 0; e < R; e++) {
                                    let t = A[e];
                                    V(t[2], t[1], t[0])
                                }
                                for (let e = 0; e < R; e++) {
                                    let t = A[e];
                                    V(t[0] + P * c, t[1] + P * c, t[2] + P * c)
                                }
                            }
                            i.addGroup(e, n.length / 3 - e, 0)
                        }
                        )(),
                        function() {
                            let e = n.length / 3
                              , t = 0;
                            F(C, 0),
                            t += C.length;
                            for (let e = 0, i = T.length; e < i; e++) {
                                let i = T[e];
                                F(i, t),
                                t += i.length
                            }
                            i.addGroup(e, n.length / 3 - e, 1)
                        }()
                    }(s)
                }
                this.setAttribute("position", new e8(n,3)),
                this.setAttribute("uv", new e8(r,2)),
                this.computeVertexNormals()
            }
            toJSON() {
                let e = super.toJSON()
                  , t = this.parameters.shapes
                  , i = this.parameters.options;
                return function(e, t, i) {
                    if (i.shapes = [],
                    Array.isArray(e))
                        for (let t = 0, n = e.length; t < n; t++) {
                            let n = e[t];
                            i.shapes.push(n.uuid)
                        }
                    else
                        i.shapes.push(e.uuid);
                    return i.options = Object.assign({}, t),
                    void 0 !== t.extrudePath && (i.options.extrudePath = t.extrudePath.toJSON()),
                    i
                }(t, i, e)
            }
            static fromJSON(e, t) {
                let i = [];
                for (let n = 0, r = e.shapes.length; n < r; n++) {
                    let r = t[e.shapes[n]];
                    i.push(r)
                }
                let n = e.options.extrudePath;
                return void 0 !== n && (e.options.extrudePath = new rr[n.type]().fromJSON(n)),
                new rN(i,e.options)
            }
        }
        let rO = {
            generateTopUV: function(e, t, i, n, r) {
                let a = t[3 * i]
                  , s = t[3 * i + 1]
                  , o = t[3 * n]
                  , l = t[3 * n + 1]
                  , h = t[3 * r]
                  , u = t[3 * r + 1];
                return [new v(a,s), new v(o,l), new v(h,u)]
            },
            generateSideWallUV: function(e, t, i, n, r, a) {
                let s = t[3 * i]
                  , o = t[3 * i + 1]
                  , l = t[3 * i + 2]
                  , h = t[3 * n]
                  , u = t[3 * n + 1]
                  , c = t[3 * n + 2]
                  , d = t[3 * r]
                  , p = t[3 * r + 1]
                  , f = t[3 * r + 2]
                  , m = t[3 * a]
                  , g = t[3 * a + 1]
                  , _ = t[3 * a + 2];
                return Math.abs(o - u) < Math.abs(s - h) ? [new v(s,1 - l), new v(h,1 - c), new v(d,1 - f), new v(m,1 - _)] : [new v(o,1 - l), new v(u,1 - c), new v(p,1 - f), new v(g,1 - _)]
            }
        };
        class rz extends rd {
            constructor(e=1, t=0) {
                let i = (1 + Math.sqrt(5)) / 2;
                super([-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], e, t),
                this.type = "IcosahedronGeometry",
                this.parameters = {
                    radius: e,
                    detail: t
                }
            }
            static fromJSON(e) {
                return new rz(e.radius,e.detail)
            }
        }
        class rU extends rd {
            constructor(e=1, t=0) {
                super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], e, t),
                this.type = "OctahedronGeometry",
                this.parameters = {
                    radius: e,
                    detail: t
                }
            }
            static fromJSON(e) {
                return new rU(e.radius,e.detail)
            }
        }
        class rF extends ts {
            constructor(e=.5, t=1, i=32, n=1, r=0, a=2 * Math.PI) {
                super(),
                this.type = "RingGeometry",
                this.parameters = {
                    innerRadius: e,
                    outerRadius: t,
                    thetaSegments: i,
                    phiSegments: n,
                    thetaStart: r,
                    thetaLength: a
                },
                i = Math.max(3, i),
                n = Math.max(1, n);
                let s = []
                  , o = []
                  , l = []
                  , h = []
                  , u = e
                  , c = (t - e) / n
                  , d = new G
                  , p = new v;
                for (let e = 0; e <= n; e++) {
                    for (let e = 0; e <= i; e++) {
                        let n = r + e / i * a;
                        d.x = u * Math.cos(n),
                        d.y = u * Math.sin(n),
                        o.push(d.x, d.y, d.z),
                        l.push(0, 0, 1),
                        p.x = (d.x / t + 1) / 2,
                        p.y = (d.y / t + 1) / 2,
                        h.push(p.x, p.y)
                    }
                    u += c
                }
                for (let e = 0; e < n; e++) {
                    let t = e * (i + 1);
                    for (let e = 0; e < i; e++) {
                        let n = e + t
                          , r = n + i + 1
                          , a = n + i + 2
                          , o = n + 1;
                        s.push(n, r, o),
                        s.push(r, a, o)
                    }
                }
                this.setIndex(s),
                this.setAttribute("position", new e8(o,3)),
                this.setAttribute("normal", new e8(l,3)),
                this.setAttribute("uv", new e8(h,2))
            }
            static fromJSON(e) {
                return new rF(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)
            }
        }
        class rB extends ts {
            constructor(e=new rf([new v(0,.5), new v(-.5,-.5), new v(.5,-.5)]), t=12) {
                super(),
                this.type = "ShapeGeometry",
                this.parameters = {
                    shapes: e,
                    curveSegments: t
                };
                let i = []
                  , n = []
                  , r = []
                  , a = []
                  , s = 0
                  , o = 0;
                if (!1 === Array.isArray(e))
                    l(e);
                else
                    for (let t = 0; t < e.length; t++)
                        l(e[t]),
                        this.addGroup(s, o, t),
                        s += o,
                        o = 0;
                function l(e) {
                    let s = n.length / 3
                      , l = e.extractPoints(t)
                      , h = l.shape
                      , u = l.holes;
                    !1 === rR.isClockWise(h) && (h = h.reverse());
                    for (let e = 0, t = u.length; e < t; e++) {
                        let t = u[e];
                        !0 === rR.isClockWise(t) && (u[e] = t.reverse())
                    }
                    let c = rR.triangulateShape(h, u);
                    for (let e = 0, t = u.length; e < t; e++) {
                        let t = u[e];
                        h = h.concat(t)
                    }
                    for (let e = 0, t = h.length; e < t; e++) {
                        let t = h[e];
                        n.push(t.x, t.y, 0),
                        r.push(0, 0, 1),
                        a.push(t.x, t.y)
                    }
                    for (let e = 0, t = c.length; e < t; e++) {
                        let t = c[e]
                          , n = t[0] + s
                          , r = t[1] + s
                          , a = t[2] + s;
                        i.push(n, r, a),
                        o += 3
                    }
                }
                this.setIndex(i),
                this.setAttribute("position", new e8(n,3)),
                this.setAttribute("normal", new e8(r,3)),
                this.setAttribute("uv", new e8(a,2))
            }
            toJSON() {
                let e = super.toJSON()
                  , t = this.parameters.shapes;
                return function(e, t) {
                    if (t.shapes = [],
                    Array.isArray(e))
                        for (let i = 0, n = e.length; i < n; i++) {
                            let n = e[i];
                            t.shapes.push(n.uuid)
                        }
                    else
                        t.shapes.push(e.uuid);
                    return t
                }(t, e)
            }
            static fromJSON(e, t) {
                let i = [];
                for (let n = 0, r = e.shapes.length; n < r; n++) {
                    let r = t[e.shapes[n]];
                    i.push(r)
                }
                return new rB(i,e.curveSegments)
            }
        }
        class rV extends ts {
            constructor(e=1, t=32, i=16, n=0, r=2 * Math.PI, a=0, s=Math.PI) {
                super(),
                this.type = "SphereGeometry",
                this.parameters = {
                    radius: e,
                    widthSegments: t,
                    heightSegments: i,
                    phiStart: n,
                    phiLength: r,
                    thetaStart: a,
                    thetaLength: s
                },
                t = Math.max(3, Math.floor(t)),
                i = Math.max(2, Math.floor(i));
                let o = Math.min(a + s, Math.PI)
                  , l = 0
                  , h = []
                  , u = new G
                  , c = new G
                  , d = []
                  , p = []
                  , f = []
                  , m = [];
                for (let d = 0; d <= i; d++) {
                    let g = []
                      , v = d / i
                      , _ = 0;
                    0 == d && 0 == a ? _ = .5 / t : d == i && o == Math.PI && (_ = -.5 / t);
                    for (let i = 0; i <= t; i++) {
                        let o = i / t;
                        u.x = -e * Math.cos(n + o * r) * Math.sin(a + v * s),
                        u.y = e * Math.cos(a + v * s),
                        u.z = e * Math.sin(n + o * r) * Math.sin(a + v * s),
                        p.push(u.x, u.y, u.z),
                        c.copy(u).normalize(),
                        f.push(c.x, c.y, c.z),
                        m.push(o + _, 1 - v),
                        g.push(l++)
                    }
                    h.push(g)
                }
                for (let e = 0; e < i; e++)
                    for (let n = 0; n < t; n++) {
                        let t = h[e][n + 1]
                          , r = h[e][n]
                          , s = h[e + 1][n]
                          , l = h[e + 1][n + 1];
                        (0 !== e || a > 0) && d.push(t, r, l),
                        (e !== i - 1 || o < Math.PI) && d.push(r, s, l)
                    }
                this.setIndex(d),
                this.setAttribute("position", new e8(p,3)),
                this.setAttribute("normal", new e8(f,3)),
                this.setAttribute("uv", new e8(m,2))
            }
            static fromJSON(e) {
                return new rV(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)
            }
        }
        class rk extends rd {
            constructor(e=1, t=0) {
                super([1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], e, t),
                this.type = "TetrahedronGeometry",
                this.parameters = {
                    radius: e,
                    detail: t
                }
            }
            static fromJSON(e) {
                return new rk(e.radius,e.detail)
            }
        }
        class rG extends ts {
            constructor(e=1, t=.4, i=12, n=48, r=2 * Math.PI) {
                super(),
                this.type = "TorusGeometry",
                this.parameters = {
                    radius: e,
                    tube: t,
                    radialSegments: i,
                    tubularSegments: n,
                    arc: r
                },
                i = Math.floor(i),
                n = Math.floor(n);
                let a = []
                  , s = []
                  , o = []
                  , l = []
                  , h = new G
                  , u = new G
                  , c = new G;
                for (let a = 0; a <= i; a++)
                    for (let d = 0; d <= n; d++) {
                        let p = d / n * r
                          , f = a / i * Math.PI * 2;
                        u.x = (e + t * Math.cos(f)) * Math.cos(p),
                        u.y = (e + t * Math.cos(f)) * Math.sin(p),
                        u.z = t * Math.sin(f),
                        s.push(u.x, u.y, u.z),
                        h.x = e * Math.cos(p),
                        h.y = e * Math.sin(p),
                        c.subVectors(u, h).normalize(),
                        o.push(c.x, c.y, c.z),
                        l.push(d / n),
                        l.push(a / i)
                    }
                for (let e = 1; e <= i; e++)
                    for (let t = 1; t <= n; t++) {
                        let i = (n + 1) * e + t - 1
                          , r = (n + 1) * (e - 1) + t - 1
                          , s = (n + 1) * (e - 1) + t
                          , o = (n + 1) * e + t;
                        a.push(i, r, o),
                        a.push(r, s, o)
                    }
                this.setIndex(a),
                this.setAttribute("position", new e8(s,3)),
                this.setAttribute("normal", new e8(o,3)),
                this.setAttribute("uv", new e8(l,2))
            }
            static fromJSON(e) {
                return new rG(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)
            }
        }
        class rH extends ts {
            constructor(e=1, t=.4, i=64, n=8, r=2, a=3) {
                super(),
                this.type = "TorusKnotGeometry",
                this.parameters = {
                    radius: e,
                    tube: t,
                    tubularSegments: i,
                    radialSegments: n,
                    p: r,
                    q: a
                },
                i = Math.floor(i),
                n = Math.floor(n);
                let s = []
                  , o = []
                  , l = []
                  , h = []
                  , u = new G
                  , c = new G
                  , d = new G
                  , p = new G
                  , f = new G
                  , m = new G
                  , g = new G;
                for (let s = 0; s <= i; ++s) {
                    let _ = s / i * r * Math.PI * 2;
                    v(_, r, a, e, d),
                    v(_ + .01, r, a, e, p),
                    m.subVectors(p, d),
                    g.addVectors(p, d),
                    f.crossVectors(m, g),
                    g.crossVectors(f, m),
                    f.normalize(),
                    g.normalize();
                    for (let e = 0; e <= n; ++e) {
                        let r = e / n * Math.PI * 2
                          , a = -t * Math.cos(r)
                          , p = t * Math.sin(r);
                        u.x = d.x + (a * g.x + p * f.x),
                        u.y = d.y + (a * g.y + p * f.y),
                        u.z = d.z + (a * g.z + p * f.z),
                        o.push(u.x, u.y, u.z),
                        c.subVectors(u, d).normalize(),
                        l.push(c.x, c.y, c.z),
                        h.push(s / i),
                        h.push(e / n)
                    }
                }
                for (let e = 1; e <= i; e++)
                    for (let t = 1; t <= n; t++) {
                        let i = (n + 1) * (e - 1) + (t - 1)
                          , r = (n + 1) * e + (t - 1)
                          , a = (n + 1) * e + t
                          , o = (n + 1) * (e - 1) + t;
                        s.push(i, r, o),
                        s.push(r, a, o)
                    }
                function v(e, t, i, n, r) {
                    let a = i / t * e
                      , s = Math.cos(a);
                    r.x = n * (2 + s) * .5 * Math.cos(e),
                    r.y = n * (2 + s) * Math.sin(e) * .5,
                    r.z = n * Math.sin(a) * .5
                }
                this.setIndex(s),
                this.setAttribute("position", new e8(o,3)),
                this.setAttribute("normal", new e8(l,3)),
                this.setAttribute("uv", new e8(h,2))
            }
            static fromJSON(e) {
                return new rH(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)
            }
        }
        class rW extends ts {
            constructor(e=new ri(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)), t=64, i=1, n=8, r=!1) {
                super(),
                this.type = "TubeGeometry",
                this.parameters = {
                    path: e,
                    tubularSegments: t,
                    radius: i,
                    radialSegments: n,
                    closed: r
                };
                let a = e.computeFrenetFrames(t, r);
                this.tangents = a.tangents,
                this.normals = a.normals,
                this.binormals = a.binormals;
                let s = new G
                  , o = new G
                  , l = new v
                  , h = new G
                  , u = []
                  , c = []
                  , d = []
                  , p = [];
                function f(r) {
                    h = e.getPointAt(r / t, h);
                    let l = a.normals[r]
                      , d = a.binormals[r];
                    for (let e = 0; e <= n; e++) {
                        let t = e / n * Math.PI * 2
                          , r = Math.sin(t)
                          , a = -Math.cos(t);
                        o.x = a * l.x + r * d.x,
                        o.y = a * l.y + r * d.y,
                        o.z = a * l.z + r * d.z,
                        o.normalize(),
                        c.push(o.x, o.y, o.z),
                        s.x = h.x + i * o.x,
                        s.y = h.y + i * o.y,
                        s.z = h.z + i * o.z,
                        u.push(s.x, s.y, s.z)
                    }
                }
                (function() {
                    for (let e = 0; e < t; e++)
                        f(e);
                    f(!1 === r ? t : 0),
                    function() {
                        for (let e = 0; e <= t; e++)
                            for (let i = 0; i <= n; i++)
                                l.x = e / t,
                                l.y = i / n,
                                d.push(l.x, l.y)
                    }(),
                    function() {
                        for (let e = 1; e <= t; e++)
                            for (let t = 1; t <= n; t++) {
                                let i = (n + 1) * (e - 1) + (t - 1)
                                  , r = (n + 1) * e + (t - 1)
                                  , a = (n + 1) * e + t
                                  , s = (n + 1) * (e - 1) + t;
                                p.push(i, r, s),
                                p.push(r, a, s)
                            }
                    }()
                }
                )(),
                this.setIndex(p),
                this.setAttribute("position", new e8(u,3)),
                this.setAttribute("normal", new e8(c,3)),
                this.setAttribute("uv", new e8(d,2))
            }
            toJSON() {
                let e = super.toJSON();
                return e.path = this.parameters.path.toJSON(),
                e
            }
            static fromJSON(e) {
                return new rW(new rr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)
            }
        }
        function rj(e, t, i) {
            return rX(e) ? new e.constructor(e.subarray(t, void 0 !== i ? i : e.length)) : e.slice(t, i)
        }
        function rq(e, t, i) {
            return e && (i || e.constructor !== t) ? "number" == typeof t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e) : e
        }
        function rX(e) {
            return ArrayBuffer.isView(e) && !(e instanceof DataView)
        }
        class rJ {
            constructor(e, t, i, n) {
                this.parameterPositions = e,
                this._cachedIndex = 0,
                this.resultBuffer = void 0 !== n ? n : new t.constructor(i),
                this.sampleValues = t,
                this.valueSize = i,
                this.settings = null,
                this.DefaultSettings_ = {}
            }
            evaluate(e) {
                let t = this.parameterPositions
                  , i = this._cachedIndex
                  , n = t[i]
                  , r = t[i - 1];
                e: {
                    t: {
                        let a;
                        i: {
                            n: if (!(e < n)) {
                                for (let a = i + 2; ; ) {
                                    if (void 0 === n) {
                                        if (e < r)
                                            break n;
                                        return i = t.length,
                                        this._cachedIndex = i,
                                        this.copySampleValue_(i - 1)
                                    }
                                    if (i === a)
                                        break;
                                    if (r = n,
                                    e < (n = t[++i]))
                                        break t
                                }
                                a = t.length;
                                break i
                            }
                            if (!(e >= r)) {
                                let s = t[1];
                                e < s && (i = 2,
                                r = s);
                                for (let a = i - 2; ; ) {
                                    if (void 0 === r)
                                        return this._cachedIndex = 0,
                                        this.copySampleValue_(0);
                                    if (i === a)
                                        break;
                                    if (n = r,
                                    e >= (r = t[--i - 1]))
                                        break t
                                }
                                a = i,
                                i = 0;
                                break i
                            }
                            break e
                        }
                        for (; i < a; ) {
                            let n = i + a >>> 1;
                            e < t[n] ? a = n : i = n + 1
                        }
                        if (n = t[i],
                        void 0 === (r = t[i - 1]))
                            return this._cachedIndex = 0,
                            this.copySampleValue_(0);
                        if (void 0 === n)
                            return i = t.length,
                            this._cachedIndex = i,
                            this.copySampleValue_(i - 1)
                    }
                    this._cachedIndex = i,
                    this.intervalChanged_(i, r, n)
                }
                return this.interpolate_(i, r, e, n)
            }
            getSettings_() {
                return this.settings || this.DefaultSettings_
            }
            copySampleValue_(e) {
                let t = this.resultBuffer
                  , i = this.sampleValues
                  , n = this.valueSize
                  , r = e * n;
                for (let e = 0; e !== n; ++e)
                    t[e] = i[r + e];
                return t
            }
            interpolate_() {
                throw Error("call to abstract method")
            }
            intervalChanged_() {}
        }
        class rY extends rJ {
            constructor(e, t, i, n) {
                super(e, t, i, n),
                this._weightPrev = -0,
                this._offsetPrev = -0,
                this._weightNext = -0,
                this._offsetNext = -0,
                this.DefaultSettings_ = {
                    endingStart: 2400,
                    endingEnd: 2400
                }
            }
            intervalChanged_(e, t, i) {
                let n = this.parameterPositions
                  , r = e - 2
                  , a = e + 1
                  , s = n[r]
                  , o = n[a];
                if (void 0 === s)
                    switch (this.getSettings_().endingStart) {
                    case 2401:
                        r = e,
                        s = 2 * t - i;
                        break;
                    case 2402:
                        r = n.length - 2,
                        s = t + n[r] - n[r + 1];
                        break;
                    default:
                        r = e,
                        s = i
                    }
                if (void 0 === o)
                    switch (this.getSettings_().endingEnd) {
                    case 2401:
                        a = e,
                        o = 2 * i - t;
                        break;
                    case 2402:
                        a = 1,
                        o = i + n[1] - n[0];
                        break;
                    default:
                        a = e - 1,
                        o = t
                    }
                let l = (i - t) * .5
                  , h = this.valueSize;
                this._weightPrev = l / (t - s),
                this._weightNext = l / (o - i),
                this._offsetPrev = r * h,
                this._offsetNext = a * h
            }
            interpolate_(e, t, i, n) {
                let r = this.resultBuffer
                  , a = this.sampleValues
                  , s = this.valueSize
                  , o = e * s
                  , l = o - s
                  , h = this._offsetPrev
                  , u = this._offsetNext
                  , c = this._weightPrev
                  , d = this._weightNext
                  , p = (i - t) / (n - t)
                  , f = p * p
                  , m = f * p
                  , g = -c * m + 2 * c * f - c * p
                  , v = (1 + c) * m + (-1.5 - 2 * c) * f + (-.5 + c) * p + 1
                  , _ = (-1 - d) * m + (1.5 + d) * f + .5 * p
                  , x = d * m - d * f;
                for (let e = 0; e !== s; ++e)
                    r[e] = g * a[h + e] + v * a[l + e] + _ * a[o + e] + x * a[u + e];
                return r
            }
        }
        class rZ extends rJ {
            constructor(e, t, i, n) {
                super(e, t, i, n)
            }
            interpolate_(e, t, i, n) {
                let r = this.resultBuffer
                  , a = this.sampleValues
                  , s = this.valueSize
                  , o = e * s
                  , l = o - s
                  , h = (i - t) / (n - t)
                  , u = 1 - h;
                for (let e = 0; e !== s; ++e)
                    r[e] = a[l + e] * u + a[o + e] * h;
                return r
            }
        }
        class rK extends rJ {
            constructor(e, t, i, n) {
                super(e, t, i, n)
            }
            interpolate_(e) {
                return this.copySampleValue_(e - 1)
            }
        }
        class rQ {
            constructor(e, t, i, n) {
                if (void 0 === e)
                    throw Error("THREE.KeyframeTrack: track name is undefined");
                if (void 0 === t || 0 === t.length)
                    throw Error("THREE.KeyframeTrack: no keyframes in track named " + e);
                this.name = e,
                this.times = rq(t, this.TimeBufferType),
                this.values = rq(i, this.ValueBufferType),
                this.setInterpolation(n || this.DefaultInterpolation)
            }
            static toJSON(e) {
                let t;
                let i = e.constructor;
                if (i.toJSON !== this.toJSON)
                    t = i.toJSON(e);
                else {
                    t = {
                        name: e.name,
                        times: rq(e.times, Array),
                        values: rq(e.values, Array)
                    };
                    let i = e.getInterpolation();
                    i !== e.DefaultInterpolation && (t.interpolation = i)
                }
                return t.type = e.ValueTypeName,
                t
            }
            InterpolantFactoryMethodDiscrete(e) {
                return new rK(this.times,this.values,this.getValueSize(),e)
            }
            InterpolantFactoryMethodLinear(e) {
                return new rZ(this.times,this.values,this.getValueSize(),e)
            }
            InterpolantFactoryMethodSmooth(e) {
                return new rY(this.times,this.values,this.getValueSize(),e)
            }
            setInterpolation(e) {
                let t;
                switch (e) {
                case 2300:
                    t = this.InterpolantFactoryMethodDiscrete;
                    break;
                case 2301:
                    t = this.InterpolantFactoryMethodLinear;
                    break;
                case 2302:
                    t = this.InterpolantFactoryMethodSmooth
                }
                if (void 0 === t) {
                    let t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                    if (void 0 === this.createInterpolant) {
                        if (e !== this.DefaultInterpolation)
                            this.setInterpolation(this.DefaultInterpolation);
                        else
                            throw Error(t)
                    }
                    return console.warn("THREE.KeyframeTrack:", t),
                    this
                }
                return this.createInterpolant = t,
                this
            }
            getInterpolation() {
                switch (this.createInterpolant) {
                case this.InterpolantFactoryMethodDiscrete:
                    return 2300;
                case this.InterpolantFactoryMethodLinear:
                    return 2301;
                case this.InterpolantFactoryMethodSmooth:
                    return 2302
                }
            }
            getValueSize() {
                return this.values.length / this.times.length
            }
            shift(e) {
                if (0 !== e) {
                    let t = this.times;
                    for (let i = 0, n = t.length; i !== n; ++i)
                        t[i] += e
                }
                return this
            }
            scale(e) {
                if (1 !== e) {
                    let t = this.times;
                    for (let i = 0, n = t.length; i !== n; ++i)
                        t[i] *= e
                }
                return this
            }
            trim(e, t) {
                let i = this.times
                  , n = i.length
                  , r = 0
                  , a = n - 1;
                for (; r !== n && i[r] < e; )
                    ++r;
                for (; -1 !== a && i[a] > t; )
                    --a;
                if (++a,
                0 !== r || a !== n) {
                    r >= a && (r = (a = Math.max(a, 1)) - 1);
                    let e = this.getValueSize();
                    this.times = rj(i, r, a),
                    this.values = rj(this.values, r * e, a * e)
                }
                return this
            }
            validate() {
                let e = !0
                  , t = this.getValueSize();
                t - Math.floor(t) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
                e = !1);
                let i = this.times
                  , n = this.values
                  , r = i.length;
                0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this),
                e = !1);
                let a = null;
                for (let t = 0; t !== r; t++) {
                    let n = i[t];
                    if ("number" == typeof n && isNaN(n)) {
                        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, t, n),
                        e = !1;
                        break
                    }
                    if (null !== a && a > n) {
                        console.error("THREE.KeyframeTrack: Out of order keys.", this, t, n, a),
                        e = !1;
                        break
                    }
                    a = n
                }
                if (void 0 !== n && rX(n))
                    for (let t = 0, i = n.length; t !== i; ++t) {
                        let i = n[t];
                        if (isNaN(i)) {
                            console.error("THREE.KeyframeTrack: Value is not a valid number.", this, t, i),
                            e = !1;
                            break
                        }
                    }
                return e
            }
            optimize() {
                let e = rj(this.times)
                  , t = rj(this.values)
                  , i = this.getValueSize()
                  , n = 2302 === this.getInterpolation()
                  , r = e.length - 1
                  , a = 1;
                for (let s = 1; s < r; ++s) {
                    let r = !1
                      , o = e[s]
                      , l = e[s + 1];
                    if (o !== l && (1 !== s || o !== e[0])) {
                        if (n)
                            r = !0;
                        else {
                            let e = s * i
                              , n = e - i
                              , a = e + i;
                            for (let s = 0; s !== i; ++s) {
                                let i = t[e + s];
                                if (i !== t[n + s] || i !== t[a + s]) {
                                    r = !0;
                                    break
                                }
                            }
                        }
                    }
                    if (r) {
                        if (s !== a) {
                            e[a] = e[s];
                            let n = s * i
                              , r = a * i;
                            for (let e = 0; e !== i; ++e)
                                t[r + e] = t[n + e]
                        }
                        ++a
                    }
                }
                if (r > 0) {
                    e[a] = e[r];
                    for (let e = r * i, n = a * i, s = 0; s !== i; ++s)
                        t[n + s] = t[e + s];
                    ++a
                }
                return a !== e.length ? (this.times = rj(e, 0, a),
                this.values = rj(t, 0, a * i)) : (this.times = e,
                this.values = t),
                this
            }
            clone() {
                let e = rj(this.times, 0)
                  , t = rj(this.values, 0)
                  , i = this.constructor
                  , n = new i(this.name,e,t);
                return n.createInterpolant = this.createInterpolant,
                n
            }
        }
        rQ.prototype.TimeBufferType = Float32Array,
        rQ.prototype.ValueBufferType = Float32Array,
        rQ.prototype.DefaultInterpolation = 2301;
        class r$ extends rQ {
        }
        r$.prototype.ValueTypeName = "bool",
        r$.prototype.ValueBufferType = Array,
        r$.prototype.DefaultInterpolation = 2300,
        r$.prototype.InterpolantFactoryMethodLinear = void 0,
        r$.prototype.InterpolantFactoryMethodSmooth = void 0,
        (class extends rQ {
        }
        ).prototype.ValueTypeName = "color",
        (class extends rQ {
        }
        ).prototype.ValueTypeName = "number";
        class r0 extends rJ {
            constructor(e, t, i, n) {
                super(e, t, i, n)
            }
            interpolate_(e, t, i, n) {
                let r = this.resultBuffer
                  , a = this.sampleValues
                  , s = this.valueSize
                  , o = (i - t) / (n - t)
                  , l = e * s;
                for (let e = l + s; l !== e; l += 4)
                    k.slerpFlat(r, 0, a, l - s, a, l, o);
                return r
            }
        }
        class r1 extends rQ {
            InterpolantFactoryMethodLinear(e) {
                return new r0(this.times,this.values,this.getValueSize(),e)
            }
        }
        r1.prototype.ValueTypeName = "quaternion",
        r1.prototype.DefaultInterpolation = 2301,
        r1.prototype.InterpolantFactoryMethodSmooth = void 0;
        class r3 extends rQ {
        }
        r3.prototype.ValueTypeName = "string",
        r3.prototype.ValueBufferType = Array,
        r3.prototype.DefaultInterpolation = 2300,
        r3.prototype.InterpolantFactoryMethodLinear = void 0,
        r3.prototype.InterpolantFactoryMethodSmooth = void 0,
        (class extends rQ {
        }
        ).prototype.ValueTypeName = "vector";
        let r2 = {
            enabled: !1,
            files: {},
            add: function(e, t) {
                !1 !== this.enabled && (this.files[e] = t)
            },
            get: function(e) {
                if (!1 !== this.enabled)
                    return this.files[e]
            },
            remove: function(e) {
                delete this.files[e]
            },
            clear: function() {
                this.files = {}
            }
        }
          , r4 = new class {
            constructor(e, t, i) {
                let n;
                let r = this
                  , a = !1
                  , s = 0
                  , o = 0
                  , l = [];
                this.onStart = void 0,
                this.onLoad = e,
                this.onProgress = t,
                this.onError = i,
                this.itemStart = function(e) {
                    o++,
                    !1 === a && void 0 !== r.onStart && r.onStart(e, s, o),
                    a = !0
                }
                ,
                this.itemEnd = function(e) {
                    s++,
                    void 0 !== r.onProgress && r.onProgress(e, s, o),
                    s === o && (a = !1,
                    void 0 !== r.onLoad && r.onLoad())
                }
                ,
                this.itemError = function(e) {
                    void 0 !== r.onError && r.onError(e)
                }
                ,
                this.resolveURL = function(e) {
                    return n ? n(e) : e
                }
                ,
                this.setURLModifier = function(e) {
                    return n = e,
                    this
                }
                ,
                this.addHandler = function(e, t) {
                    return l.push(e, t),
                    this
                }
                ,
                this.removeHandler = function(e) {
                    let t = l.indexOf(e);
                    return -1 !== t && l.splice(t, 2),
                    this
                }
                ,
                this.getHandler = function(e) {
                    for (let t = 0, i = l.length; t < i; t += 2) {
                        let i = l[t]
                          , n = l[t + 1];
                        if (i.global && (i.lastIndex = 0),
                        i.test(e))
                            return n
                    }
                    return null
                }
            }
        }
        ;
        class r5 {
            constructor(e) {
                this.manager = void 0 !== e ? e : r4,
                this.crossOrigin = "anonymous",
                this.withCredentials = !1,
                this.path = "",
                this.resourcePath = "",
                this.requestHeader = {}
            }
            load() {}
            loadAsync(e, t) {
                let i = this;
                return new Promise(function(n, r) {
                    i.load(e, n, t, r)
                }
                )
            }
            parse() {}
            setCrossOrigin(e) {
                return this.crossOrigin = e,
                this
            }
            setWithCredentials(e) {
                return this.withCredentials = e,
                this
            }
            setPath(e) {
                return this.path = e,
                this
            }
            setResourcePath(e) {
                return this.resourcePath = e,
                this
            }
            setRequestHeader(e) {
                return this.requestHeader = e,
                this
            }
        }
        class r6 extends r5 {
            constructor(e) {
                super(e)
            }
            load(e, t, i, n) {
                void 0 !== this.path && (e = this.path + e),
                e = this.manager.resolveURL(e);
                let r = this
                  , a = r2.get(e);
                if (void 0 !== a)
                    return r.manager.itemStart(e),
                    setTimeout(function() {
                        t && t(a),
                        r.manager.itemEnd(e)
                    }, 0),
                    a;
                let s = M("img");
                function o() {
                    h(),
                    r2.add(e, this),
                    t && t(this),
                    r.manager.itemEnd(e)
                }
                function l(t) {
                    h(),
                    n && n(t),
                    r.manager.itemError(e),
                    r.manager.itemEnd(e)
                }
                function h() {
                    s.removeEventListener("load", o, !1),
                    s.removeEventListener("error", l, !1)
                }
                return s.addEventListener("load", o, !1),
                s.addEventListener("error", l, !1),
                "data:" !== e.slice(0, 5) && void 0 !== this.crossOrigin && (s.crossOrigin = this.crossOrigin),
                r.manager.itemStart(e),
                s.src = e,
                s
            }
        }
        class r7 extends r5 {
            constructor(e) {
                super(e)
            }
            load(e, t, i, n) {
                let r = new U
                  , a = new r6(this.manager);
                return a.setCrossOrigin(this.crossOrigin),
                a.setPath(this.path),
                a.load(e, function(e) {
                    r.image = e,
                    r.needsUpdate = !0,
                    void 0 !== t && t(r)
                }, i, n),
                r
            }
        }
        class r8 {
            constructor(e=!0) {
                this.autoStart = e,
                this.startTime = 0,
                this.oldTime = 0,
                this.elapsedTime = 0,
                this.running = !1
            }
            start() {
                this.startTime = r9(),
                this.oldTime = this.startTime,
                this.elapsedTime = 0,
                this.running = !0
            }
            stop() {
                this.getElapsedTime(),
                this.running = !1,
                this.autoStart = !1
            }
            getElapsedTime() {
                return this.getDelta(),
                this.elapsedTime
            }
            getDelta() {
                let e = 0;
                if (this.autoStart && !this.running)
                    return this.start(),
                    0;
                if (this.running) {
                    let t = r9();
                    e = (t - this.oldTime) / 1e3,
                    this.oldTime = t,
                    this.elapsedTime += e
                }
                return e
            }
        }
        function r9() {
            return ("undefined" == typeof performance ? Date : performance).now()
        }
        let ae = "\\[\\]\\.:\\/"
          , at = RegExp("[" + ae + "]", "g")
          , ai = "[^" + ae + "]"
          , an = "[^" + ae.replace("\\.", "") + "]"
          , ar = /((?:WC+[\/:])*)/.source.replace("WC", ai)
          , aa = /(WCOD+)?/.source.replace("WCOD", an)
          , as = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", ai)
          , ao = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", ai)
          , al = RegExp("^" + ar + aa + as + ao + "$")
          , ah = ["material", "materials", "bones", "map"];
        class au {
            constructor(e, t, i) {
                this.path = t,
                this.parsedPath = i || au.parseTrackName(t),
                this.node = au.findNode(e, this.parsedPath.nodeName) || e,
                this.rootNode = e,
                this.getValue = this._getValue_unbound,
                this.setValue = this._setValue_unbound
            }
            static create(e, t, i) {
                return e && e.isAnimationObjectGroup ? new au.Composite(e,t,i) : new au(e,t,i)
            }
            static sanitizeNodeName(e) {
                return e.replace(/\s/g, "_").replace(at, "")
            }
            static parseTrackName(e) {
                let t = al.exec(e);
                if (null === t)
                    throw Error("PropertyBinding: Cannot parse trackName: " + e);
                let i = {
                    nodeName: t[2],
                    objectName: t[3],
                    objectIndex: t[4],
                    propertyName: t[5],
                    propertyIndex: t[6]
                }
                  , n = i.nodeName && i.nodeName.lastIndexOf(".");
                if (void 0 !== n && -1 !== n) {
                    let e = i.nodeName.substring(n + 1);
                    -1 !== ah.indexOf(e) && (i.nodeName = i.nodeName.substring(0, n),
                    i.objectName = e)
                }
                if (null === i.propertyName || 0 === i.propertyName.length)
                    throw Error("PropertyBinding: can not parse propertyName from trackName: " + e);
                return i
            }
            static findNode(e, t) {
                if (void 0 === t || "" === t || "." === t || -1 === t || t === e.name || t === e.uuid)
                    return e;
                if (e.skeleton) {
                    let i = e.skeleton.getBoneByName(t);
                    if (void 0 !== i)
                        return i
                }
                if (e.children) {
                    let i = function(e) {
                        for (let n = 0; n < e.length; n++) {
                            let r = e[n];
                            if (r.name === t || r.uuid === t)
                                return r;
                            let a = i(r.children);
                            if (a)
                                return a
                        }
                        return null
                    }
                      , n = i(e.children);
                    if (n)
                        return n
                }
                return null
            }
            _getValue_unavailable() {}
            _setValue_unavailable() {}
            _getValue_direct(e, t) {
                e[t] = this.targetObject[this.propertyName]
            }
            _getValue_array(e, t) {
                let i = this.resolvedProperty;
                for (let n = 0, r = i.length; n !== r; ++n)
                    e[t++] = i[n]
            }
            _getValue_arrayElement(e, t) {
                e[t] = this.resolvedProperty[this.propertyIndex]
            }
            _getValue_toArray(e, t) {
                this.resolvedProperty.toArray(e, t)
            }
            _setValue_direct(e, t) {
                this.targetObject[this.propertyName] = e[t]
            }
            _setValue_direct_setNeedsUpdate(e, t) {
                this.targetObject[this.propertyName] = e[t],
                this.targetObject.needsUpdate = !0
            }
            _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
                this.targetObject[this.propertyName] = e[t],
                this.targetObject.matrixWorldNeedsUpdate = !0
            }
            _setValue_array(e, t) {
                let i = this.resolvedProperty;
                for (let n = 0, r = i.length; n !== r; ++n)
                    i[n] = e[t++]
            }
            _setValue_array_setNeedsUpdate(e, t) {
                let i = this.resolvedProperty;
                for (let n = 0, r = i.length; n !== r; ++n)
                    i[n] = e[t++];
                this.targetObject.needsUpdate = !0
            }
            _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
                let i = this.resolvedProperty;
                for (let n = 0, r = i.length; n !== r; ++n)
                    i[n] = e[t++];
                this.targetObject.matrixWorldNeedsUpdate = !0
            }
            _setValue_arrayElement(e, t) {
                this.resolvedProperty[this.propertyIndex] = e[t]
            }
            _setValue_arrayElement_setNeedsUpdate(e, t) {
                this.resolvedProperty[this.propertyIndex] = e[t],
                this.targetObject.needsUpdate = !0
            }
            _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
                this.resolvedProperty[this.propertyIndex] = e[t],
                this.targetObject.matrixWorldNeedsUpdate = !0
            }
            _setValue_fromArray(e, t) {
                this.resolvedProperty.fromArray(e, t)
            }
            _setValue_fromArray_setNeedsUpdate(e, t) {
                this.resolvedProperty.fromArray(e, t),
                this.targetObject.needsUpdate = !0
            }
            _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
                this.resolvedProperty.fromArray(e, t),
                this.targetObject.matrixWorldNeedsUpdate = !0
            }
            _getValue_unbound(e, t) {
                this.bind(),
                this.getValue(e, t)
            }
            _setValue_unbound(e, t) {
                this.bind(),
                this.setValue(e, t)
            }
            bind() {
                let e = this.node
                  , t = this.parsedPath
                  , i = t.objectName
                  , n = t.propertyName
                  , r = t.propertyIndex;
                if (e || (e = au.findNode(this.rootNode, t.nodeName) || this.rootNode,
                this.node = e),
                this.getValue = this._getValue_unavailable,
                this.setValue = this._setValue_unavailable,
                !e) {
                    console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
                    return
                }
                if (i) {
                    let n = t.objectIndex;
                    switch (i) {
                    case "materials":
                        if (!e.material) {
                            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                            return
                        }
                        if (!e.material.materials) {
                            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                            return
                        }
                        e = e.material.materials;
                        break;
                    case "bones":
                        if (!e.skeleton) {
                            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                            return
                        }
                        e = e.skeleton.bones;
                        for (let t = 0; t < e.length; t++)
                            if (e[t].name === n) {
                                n = t;
                                break
                            }
                        break;
                    case "map":
                        if ("map"in e) {
                            e = e.map;
                            break
                        }
                        if (!e.material) {
                            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                            return
                        }
                        if (!e.material.map) {
                            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
                            return
                        }
                        e = e.material.map;
                        break;
                    default:
                        if (void 0 === e[i]) {
                            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                            return
                        }
                        e = e[i]
                    }
                    if (void 0 !== n) {
                        if (void 0 === e[n]) {
                            console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
                            return
                        }
                        e = e[n]
                    }
                }
                let a = e[n];
                if (void 0 === a) {
                    let i = t.nodeName;
                    console.error("THREE.PropertyBinding: Trying to update property for track: " + i + "." + n + " but it wasn't found.", e);
                    return
                }
                let s = this.Versioning.None;
                this.targetObject = e,
                void 0 !== e.needsUpdate ? s = this.Versioning.NeedsUpdate : void 0 !== e.matrixWorldNeedsUpdate && (s = this.Versioning.MatrixWorldNeedsUpdate);
                let o = this.BindingType.Direct;
                if (void 0 !== r) {
                    if ("morphTargetInfluences" === n) {
                        if (!e.geometry) {
                            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                            return
                        }
                        if (!e.geometry.morphAttributes) {
                            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                            return
                        }
                        void 0 !== e.morphTargetDictionary[r] && (r = e.morphTargetDictionary[r])
                    }
                    o = this.BindingType.ArrayElement,
                    this.resolvedProperty = a,
                    this.propertyIndex = r
                } else
                    void 0 !== a.fromArray && void 0 !== a.toArray ? (o = this.BindingType.HasFromToArray,
                    this.resolvedProperty = a) : Array.isArray(a) ? (o = this.BindingType.EntireArray,
                    this.resolvedProperty = a) : this.propertyName = n;
                this.getValue = this.GetterByBindingType[o],
                this.setValue = this.SetterByBindingTypeAndVersioning[o][s]
            }
            unbind() {
                this.node = null,
                this.getValue = this._getValue_unbound,
                this.setValue = this._setValue_unbound
            }
        }
        au.Composite = class {
            constructor(e, t, i) {
                let n = i || au.parseTrackName(t);
                this._targetGroup = e,
                this._bindings = e.subscribe_(t, n)
            }
            getValue(e, t) {
                this.bind();
                let i = this._targetGroup.nCachedObjects_
                  , n = this._bindings[i];
                void 0 !== n && n.getValue(e, t)
            }
            setValue(e, t) {
                let i = this._bindings;
                for (let n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n)
                    i[n].setValue(e, t)
            }
            bind() {
                let e = this._bindings;
                for (let t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t)
                    e[t].bind()
            }
            unbind() {
                let e = this._bindings;
                for (let t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t)
                    e[t].unbind()
            }
        }
        ,
        au.prototype.BindingType = {
            Direct: 0,
            EntireArray: 1,
            ArrayElement: 2,
            HasFromToArray: 3
        },
        au.prototype.Versioning = {
            None: 0,
            NeedsUpdate: 1,
            MatrixWorldNeedsUpdate: 2
        },
        au.prototype.GetterByBindingType = [au.prototype._getValue_direct, au.prototype._getValue_array, au.prototype._getValue_arrayElement, au.prototype._getValue_toArray],
        au.prototype.SetterByBindingTypeAndVersioning = [[au.prototype._setValue_direct, au.prototype._setValue_direct_setNeedsUpdate, au.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [au.prototype._setValue_array, au.prototype._setValue_array_setNeedsUpdate, au.prototype._setValue_array_setMatrixWorldNeedsUpdate], [au.prototype._setValue_arrayElement, au.prototype._setValue_arrayElement_setNeedsUpdate, au.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [au.prototype._setValue_fromArray, au.prototype._setValue_fromArray_setNeedsUpdate, au.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],
        new Float32Array(1),
        "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{
            detail: {
                revision: "148"
            }
        })),
        "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "148")
    }
}]);
