(function() {
    var eb = Object.create || function(a) {
        return {
            __proto__: a
        }
    }
    ;
    function Kf(a, b) {
        a.prototype = eb(b.prototype),
        a.prototype.constructor = a
    }
    var Lf = Math.imul || function(a, b) {
        return (a * (b >>> 16) << 16) + a * (b & 65535) | 0
    }
    ;
    var Aa;
    function pb(c, a, b) {
        return c.a = a,
        c.b = b,
        c.c = a.length,
        c
    }
    function Zb(c) {
        if (c.b < 1)
            return -1;
        var a = c.a.charCodeAt(c.b = c.b - 1 | 0);
        if (a & 64512 ^ 56320)
            return a;
        if (c.b < 1)
            return -1;
        var b = c.a.charCodeAt(c.b = c.b - 1 | 0);
        return ((b << 10) + a | 0) - 56613888 | 0
    }
    function Pa(c) {
        if (c.b >= c.c)
            return -1;
        var a = c.a.charCodeAt((c.b = c.b + 1 | 0) - 1 | 0);
        if (a & 64512 ^ 55296)
            return a;
        if (c.b >= c.c)
            return -1;
        var b = c.a.charCodeAt((c.b = c.b + 1 | 0) - 1 | 0);
        return ((a << 10) + b | 0) - 56613888 | 0
    }
    function Rd(f, a, b, c, d, e) {
        f.k[a] = new Xf(a,b,c,d,e,f.Xb())
    }
    function Sd(f, a, b, c) {
        (f.a ^ a || f.b ^ b || f.c != c) && (f.a = a,
        f.b = b,
        f.c = c,
        f.e.width = Math.round(a * c),
        f.e.height = Math.round(b * c),
        Qd(f.k, function(d, e) {
            fc(e, f.Xb())
        }),
        f.kd())
    }
    function Ba(c, a) {
        var b = L(c.n, a, null);
        return b == null && (b = 'rgba(' + (a >> 16 & 255) + ',' + (a >> 8 & 255) + ',' + (a & 255) + ',' + (a >>> 24) / 255 + ')',
        c.n[a] = b),
        b
    }
    function Sa(a, b, c, d, e, f, g, i, h) {
        a.lineTo(b, c),
        a.bezierCurveTo(d, e, f, g, i, h)
    }
    function hb(d, a, b, c) {
        c && c.a.length && (cc(d),
        Yd(b),
        d.v || (d.v = d.j.createBuffer()),
        d.j.bindBuffer(34962, d.v),
        d.j.bufferData(34962, c.a, 35048),
        Td(d, b.b),
        dc(d),
        d.j.drawArrays(a ? 5 : 4, 0, c.a.length / b.b.b | 0),
        d.i = !1)
    }
    function ld(c, a, b) {
        c.u = a,
        c.k = b,
        c.o = new Dg(0,0,a,b)
    }
    function md(b, a) {
        cc(b),
        dc(b),
        a != b.f && (b.j.clearColor((a >> 16 & 255) / 255, (a >> 8 & 255) / 255, (a & 255) / 255, (a >>> 24) / 255),
        b.f = a),
        b.j.clear(16384)
    }
    function ib(e, a, b, c) {
        var d = new Vf(e,a,b,c);
        return qb(d),
        d
    }
    function nd(e, a, b, c, d) {
        return new Wf(e,a,b,c,d && d.a)
    }
    function cc(d) {
        var a = d.g
          , b = d.o
          , c = d.j;
        (d.i || d.n != a) && (c.bindFramebuffer(36160, a && Zd(a)),
        d.n = a),
        (d.i || !bf(d.l, b)) && (c.viewport(b.a | 0, (a ? a.a.d : d.k) - (b.b + b.d | 0) | 0, b.c | 0, b.d | 0),
        d.l = b)
    }
    function dc(f) {
        if (f.i || f.m ^ f.c) {
            var a = f.j
              , b = f.c
              , c = f.m
              , d = b & 15
              , e = b >> 4;
            b ^ 1 ? ((f.i || c == 1) && a.enable(3042),
            a.blendFunc(f.b[d], f.b[e])) : a.disable(3042),
            f.m = b
        }
    }
    function Td(i, a) {
        for (var b = i.j, c = a.a, d = c.length, e = 0; e < d; e = e + 1 | 0) {
            var f = c[e]
              , g = f.b == 1;
            b.vertexAttribPointer(e, f.c, g ? 5121 : 5126, g, a.b, f.d)
        }
        for (; i.a < d; )
            b.enableVertexAttribArray(i.a),
            i.a = i.a + 1 | 0;
        for (; i.a > d; )
            i.a = i.a - 1 | 0,
            b.disableVertexAttribArray(i.a);
        i.a = d
    }
    function Ta(b) {
        var a = b.a.a;
        return b.c ^ a.h && (b.d = a.j.getUniformLocation(qb(b.a), b.b),
        b.c = a.h),
        b.d
    }
    function Ud(b, a) {
        a ^ b.f && (b.f = a,
        b.e = !0)
    }
    function Vd(c, a, b) {
        (a != c.g || b != c.i) && (c.g = a,
        c.i = b,
        c.e = !0)
    }
    function Wd(e, a, b, c, d) {
        (a != e.h || b != e.j || c != e.k || d != e.m) && (e.h = a,
        e.j = b,
        e.k = c,
        e.m = d,
        e.e = !0)
    }
    function Xd(c, a, b) {
        (c.n != a || c.l ^ b) && (c.n = a,
        c.l = b,
        c.e = !0)
    }
    function od(d, a, b) {
        var c = Ra(d.e, a, null);
        c || (c = new Rf(d,a),
        d.e[a] = c,
        d.f.push(c)),
        Ud(c, b)
    }
    function Ja(e, a, b, c) {
        var d = Ra(e.e, a, null);
        d || (d = new Sf(e,a),
        e.e[a] = d,
        e.f.push(d)),
        Vd(d, b, c)
    }
    function pd(g, a, b, c, d, e) {
        var f = Ra(g.e, a, null);
        f || (f = new Tf(g,a),
        g.e[a] = f,
        g.f.push(f)),
        Wd(f, b, c, d, e)
    }
    function qd(e, a, b, c) {
        var d = Ra(e.e, a, null);
        d || (d = new Uf(e,a),
        e.e[a] = d,
        e.f.push(d)),
        Xd(d, b, c)
    }
    function qb(d) {
        var a = d.a.j;
        if (d.g ^ d.a.h) {
            d.i = a.createProgram(),
            ec(d, a, 35633, d.c),
            ec(d, a, 35632, d.d);
            for (var b = d.b.a, c = 0, e = b.length; c < e; c = c + 1 | 0)
                a.bindAttribLocation(d.i, c, b[c].a);
            if (a.linkProgram(d.i),
            !a.getProgramParameter(d.i, 35714))
                throw new Error(a.getProgramInfoLog(d.i));
            d.g = d.a.h
        }
        return d.i
    }
    function Yd(b) {
        b.a.j.useProgram(qb(b));
        for (var c = 0, d = b.f, e = d.length; c < e; c = c + 1 | 0) {
            var a = d[c];
            a.ed()
        }
    }
    function ec(e, a, b, c) {
        var d = a.createShader(b);
        if (a.shaderSource(d, c),
        a.compileShader(d),
        !a.getShaderParameter(d, 35713))
            throw new Error(a.getShaderInfoLog(d));
        a.attachShader(e.i, d)
    }
    function rd(d, a, b, c) {
        d.c = a,
        d.d = b,
        d.e = c && c.a,
        d.h = !0
    }
    function sd(i, a, b, c, d, e) {
        i.e || (i.e = new Uint8Array(i.c * i.d << 2));
        for (var f = i.a.j, g = 0; g < e; g = g + 1 | 0)
            i.e.set(a.a.subarray(g * d << 2, (g + 1 | 0) * d << 2), b + Lf(c + g | 0, i.c) << 2);
        f.bindTexture(3553, rb(i)),
        f.texSubImage2D(3553, 0, b, c, d, e, 6408, 5121, a.a)
    }
    function rb(b) {
        var a = b.a.j;
        return b.i ^ b.a.h && (b.g = a.createTexture(),
        b.i = b.a.h,
        a.bindTexture(3553, b.g),
        a.texParameteri(3553, 10240, b.b.b ? 9729 : 9728),
        a.texParameteri(3553, 10241, b.b.a ? 9729 : 9728),
        a.texParameteri(3553, 10242, b.b.c ? 33071 : 10497),
        a.texParameteri(3553, 10243, b.b.c ? 33071 : 10497),
        b.h = !0),
        b.h && (a.bindTexture(3553, b.g),
        a.texImage2D(3553, 0, 6408, b.c, b.d, 0, 6408, 5121, b.e),
        b.h = !1),
        b.g
    }
    function Zd(c) {
        var a = c.a.j
          , b = rb(c.a);
        return c.a ^ c.a.h && (c.a = a.createFramebuffer(),
        c.a = c.a.h,
        a.bindFramebuffer(36160, c.a),
        a.framebufferTexture2D(36160, 36064, 3553, b, 0)),
        c.a
    }
    function fa(c, a) {
        var b = L(c.f, a, -1);
        return b == -1 && (b = c.g.measureText(Nd(_b(a), 100)).width / (c.h * 100),
        c.f[a] = b),
        b
    }
    function fc(d, a) {
        if (a != d.h) {
            var b = d.c * a;
            d.h = a,
            d.j = (d.e & 2 ? 'italic ' : '') + (d.e & 1 ? 'bold ' : '') + b + 'px ' + d.b.join(', ');
            var c = Math.ceil(b * 2) | 0;
            d.g.canvas.width = d.g.canvas.height = c,
            d.g.font = d.j,
            d.i = new Int32Array(Lf(c, c)),
            d.k = c
        }
    }
    function td(D, a) {
        for (var b = D.k, c = b / 4 | 0, d = b / 4 | 0, e = D.i, f = 0; f < 3; f = f + 1 | 0) {
            D.g.clearRect(0, 0, b, b),
            D.g.fillText(_b(a), c + f / 3, d + D.c * D.h);
            for (var g = D.g.getImageData(0, 0, b, b).data, i = f << 3, h = 0, j = 3; h < e.length; h = h + 1 | 0,
            j = j + 4 | 0)
                e[h] = i ? e[h] | g[j] << i : g[j]
        }
        for (var k = 0, m = 0, n = b, l = b, o = !1; k < n; k = k + 1 | 0) {
            for (var q = m, v = k + Lf(q, b) | 0; !o && q < l; q = q + 1 | 0,
            v = v + b | 0)
                o = e[v] > 0;
            if (o)
                break
        }
        for (var u = !1; k < n; n = n - 1 | 0) {
            for (var t = m, p = (n - 1 | 0) + Lf(t, b) | 0; !u && t < l; t = t + 1 | 0,
            p = p + b | 0)
                u = e[p] > 0;
            if (u)
                break
        }
        for (var z = !1; m < l; m = m + 1 | 0) {
            for (var A = k, s = A + Lf(m, b) | 0; !z && A < n; A = A + 1 | 0,
            s = s + 1 | 0)
                z = e[s] > 0;
            if (z)
                break
        }
        for (var F = !1; m < l; l = l - 1 | 0) {
            for (var J = k, H = J + Lf(l - 1 | 0, b) | 0; !F && J < n; J = J + 1 | 0,
            H = H + 1 | 0)
                F = e[H] > 0;
            if (F)
                break
        }
        for (var w = n - k | 0, W = l - m | 0, Q = new wg(w,W), B = Q.c, M = 0, K = 0; M < W; M = M + 1 | 0)
            for (var _ = 0, $ = k + Lf(m + M | 0, b) | 0; _ < w; _ = _ + 1 | 0,
            $ = $ + 1 | 0,
            K = K + 4 | 0)
                B.a[K] = e[$],
                B.a[K + 1 | 0] = e[$] >> 8,
                B.a[K + 2 | 0] = e[$] >> 16;
        return new tg(a,Q,c - k | 0,d - m | 0,1 / D.h,fa(D, a))
    }
    function _d(i) {
        var a = i.d.style;
        a.position = 'fixed',
        a.left = a.top = a.right = a.bottom = '0',
        a.overflow = 'hidden',
        V.body.appendChild(i.d);
        var b = function(c) {
            $d(i, ia.innerWidth, ia.innerHeight)
        }
          , d = function(e) {
            i.g = !0,
            sb(i, !0)
        };
        I(ia, 'resize', b),
        I(ia, 'focus', d),
        I(ia, 'blur', function(f) {
            i.g = !1,
            tb(i)
        }),
        I(V, 'visibilitychange', function(g) {
            tb(i)
        }),
        b(null),
        d(null)
    }
    function $d(e, a, b) {
        var c = ia.devicePixelRatio || 1
          , d = e.d.style;
        e.b ^ 4 || (c *= (V.width / ia.innerWidth + V.height / ia.innerHeight) / 2),
        d.width = a + 'px',
        d.height = b + 'px',
        Sd(e.c, a, b, c),
        nf(e, new Eg(a,b), c)
    }
    function lb(a) {
        return (ia.performance || Date).now() / 1000
    }
    function xd(b) {
        var a = b.k;
        return b.k = null,
        a
    }
    function ae(a) {
        try {
            return new Of(a)
        } catch (b) {}
        return new Nf(a)
    }
    function be(k) {
        var a = k.d.style;
        a.position = 'relative',
        a.overflow = 'hidden',
        k.d.appendChild(k.c.e),
        k.h = function(b) {
            Z(k, Ua(k, 1, b, null))
        }
        ,
        k.j = function(c) {
            Z(k, Ua(k, 2, c, null)),
            vb(k, 0),
            k.i = null
        }
        ,
        I(k.d, 'mousedown', function(d) {
            d.preventDefault(),
            sb(k, !0),
            k.i = null,
            k.i = Z(k, Ua(k, 0, d, null)),
            vb(k, 1)
        }),
        I(k.d, 'contextmenu', function(e) {
            e.preventDefault()
        }),
        I(k.d, 'wheel', function(f) {
            if (!f.ctrlKey) {
                var g = f.deltaX
                  , i = f.deltaY
                  , h = f.deltaMode
                  , j = h ^ 2 ? h ^ 1 ? 1 : 16 : k.v.b;
                Z(k, Ua(k, 3, f, new Eg(g * j,i * j))),
                f.preventDefault()
            }
        }),
        vb(k, 0)
    }
    function Ua(g, a, b, c) {
        var d = g.d.getBoundingClientRect()
          , e = new Eg(b.pageX - d.left,b.pageY - d.top)
          , f = g.i || mf(g, e);
        return new Hg(a,f,e,ic(b),b.detail | 0,c)
    }
    function sb(b, a) {
        a ? (b.e.enabled = !0,
        b.e.value = '',
        b.e.focus()) : (b.e.blur(),
        b.e.enabled = !1),
        tb(b)
    }
    function tb(a) {
        a.p = V.activeElement === a.e && !V.hidden && a.g
    }
    function ce(l) {
        var a = l.e.style;
        a.position = 'absolute',
        a.border = a.outline = 'none',
        a.opacity = a.padding = '0',
        a.transform = 'scaleX(0)',
        a.left = a.top = '0',
        I(l.e, 'blur', function(b) {
            sb(l, !1)
        }),
        I(l.e, 'keydown', function(c) {
            var o, d = ic(c), e = De(l.f, ee(c), d);
            if (e == 1 || e == 2) {
                if (l.m) {
                    var f = new Ig(e ^ 1 ? 9 : 8,l.q,l.l);
                    Z(l, f),
                    l.l = f.i
                }
            } else
                e && e ^ 3 ? ((o = l.z) && Ed(o, e),
                c.preventDefault()) : c.which === 13 && (hc(l, '\n', !1),
                c.preventDefault())
        });
        var g = !1;
        I(l.e, 'compositionstart', function(i) {
            g = !0
        }),
        I(l.e, 'compositionend', function(h) {
            g = !1
        }),
        I(l.e, 'input', function(j) {
            hc(l, l.e.value, g)
        }),
        I(l.e, 'cut', function(k) {
            ub(l, k, 8)
        }),
        I(l.e, 'copy', function(m) {
            ub(l, m, 9)
        }),
        I(l.e, 'paste', function(n) {
            ub(l, n, 10)
        }),
        l.d.appendChild(l.e)
    }
    function hc(c, a, b) {
        Z(c, new Jg(11,c.q,a,b)),
        b || (c.e.value = '')
    }
    function ub(g, a, b) {
        var c = a.clipboardData
          , d = ia.clipboardData
          , e = g.l;
        c ? e = c.getData('text/plain') : d && (e = d.getData('Text')),
        g.m && (b == 10 && e == g.n ? e = g.l : (g.n = g.l = e));
        var f = new Ig(b,g.q,e);
        Z(g, f),
        f.i != e && (c ? c.setData('text/plain', f.i) : d && d.setData('Text', f.i),
        g.l = f.i),
        a.preventDefault()
    }
    function de(b) {
        var a = function() {
            var c;
            (c = b.z) && Dd(c),
            b.d.scrollLeft = b.d.scrollTop = 0,
            b.t && (b.wd(),
            b.t = !1),
            (ia.requestAnimationFrame || setTimeout)(a)
        };
        a()
    }
    function vb(d, a) {
        var b = a ^ 1 ? V : d.d
          , c = a ^ 1 ? d.d : V;
        gc(b, 'mousemove', d.h),
        gc(b, 'mouseup', d.j),
        I(c, 'mousemove', d.h),
        I(c, 'mouseup', d.j)
    }
    function ic(a) {
        return (a.altKey ? 1 : 0) | (a.metaKey ? 2 : 0) | (a.shiftKey ? 4 : 0) | (a.ctrlKey ? 8 : 0)
    }
    function ee(a) {
        var b = a.which | 0;
        return b > 64 && b < 91 ? b - 64 | 0 : b > 47 && b < 58 ? b - 21 | 0 : L(sf, a.which | 0, 0)
    }
    function I(a, b, c) {
        a.addEventListener(b, c, !1)
    }
    function gc(a, b, c) {
        a.removeEventListener(b, c, !1)
    }
    function Zf() {
        var a = new Yf;
        _d(a),
        new _f(a)
    }
    function wb(f, a, b) {
        var c = f.a.length;
        if (!a)
            return b == 0;
        if (a == c)
            return b != 0;
        var d = jc(f.a.charCodeAt(a - 1 | 0))
          , e = jc(f.a.charCodeAt(a));
        return b ? d < e : d > e
    }
    function xb(f, a, b, c) {
        if (c == 2)
            return b ? f.a.length : 0;
        for (var d = pb(Md, f.a, a); ; ) {
            var e = b ? Pa(d) : Zb(d);
            if (!c || e == -1 || wb(f, d.b, b))
                return d.b
        }
    }
    function jc(a) {
        return oc(a) ? 2 : tc(a) ? 0 : 1
    }
    function he(a) {
        for (var b = [], d = 0, e = a.split('\n'), f = e.length; d < f; d = d + 1 | 0) {
            var c = e[d];
            b.push(new $f(c))
        }
        return b
    }
    function kc(a) {
        for (var b = '', c = 0, d = a.length; c < d; c = c + 1 | 0)
            c && (b += '\n'),
            b += a[c].a;
        return b
    }
    function yb(a) {
        for (var b = 0, d = 0, e = a.length; d < e; d = d + 1 | 0) {
            var c = a[d];
            b = Math.max(b, c.b)
        }
        return b
    }
    function ie(e, a, b, c) {
        if (e.b != -1) {
            var d = yb(c);
            d > e.b ? e.b = d : yb(e.a.slice(a, b)) == e.b && (e.b = -1)
        }
        bc(e.a, a, b),
        Od(e.a, a, c)
    }
    function lc(a) {
        return a.b == -1 && (a.b = yb(a.a)),
        a.b
    }
    function je(b) {
        for (var c = 0, d = b.a, e = d.length; c < e; c = c + 1 | 0) {
            var a = d[c];
            a.c = a.d = a.e = null
        }
    }
    function Ca(a) {
        return (ka(a.a) ? 0 : 2) | (a.b != '' ? 1 : 0)
    }
    function ke(a, b) {
        if (a.length ^ b.length)
            return null;
        for (var c = [], d = 0, e = 0, f = 0, g = 0, q = a.length; g < q; g = g + 1 | 0) {
            var i = a[g]
              , h = b[g]
              , j = G(i.a)
              , k = C(h.a)
              , m = i.b.split('\n')
              , n = m.length
              , l = ((n ^ 1 ? 0 : j.a) + m[n - 1 | 0].length | 0) + (j.b ^ f ? 0 : d) | 0
              , o = ((j.b + n | 0) - 1 | 0) + e | 0;
            if (Ca(i) ^ 1 || Ca(h) ^ 1 || l ^ k.a || o ^ k.b)
                return null;
            c.push(new bg(i.a,i.b + h.b)),
            d = l - j.a | 0,
            e = o - j.b | 0,
            f = j.b
        }
        return c
    }
    function le(a, b) {
        for (var c = [], d = 0, e = 0, f = 0, g = 0, t = a.length; g < t; g = g + 1 | 0) {
            var i = a[g]
              , h = b[g]
              , j = C(i.a)
              , k = G(i.a)
              , m = C(h.a)
              , n = G(h.a)
              , l = j.a + (j.b ^ f ? 0 : d) | 0
              , o = j.b + e | 0
              , q = k.a + (k.b ^ f ? 0 : d) | 0
              , v = k.b + e | 0
              , u = Ca(i);
            if (u ^ 2 && u ^ 3 || Ca(h) ^ 2 || q ^ m.a || v ^ m.b)
                return null;
            c.push(new bg(new jg(new ig(l,o,-1),n),i.b)),
            d = m.b ^ n.b ? n.a : (d + n.a | 0) - m.a | 0,
            e = e + (n.b - m.b | 0) | 0,
            f = k.b
        }
        return c
    }
    function me(a) {
        for (var b = !1, g = 0, i = a.length; g < i; g = g + 1 | 0)
            for (var c = a[g], d = 0, f = c.b.length; d < f; d = d + 1 | 0) {
                var e = c.b.charCodeAt(d);
                if (e ^ 32 && e ^ 9 && e ^ 10)
                    return !1;
                b = !0
            }
        return b
    }
    function oe(g, a, b) {
        g.c = b,
        T(g.h, a.a),
        g.d = a,
        g.e = 0,
        g.f = -1,
        g.i = 0,
        g.g = a.a.length,
        g.b = [],
        g.a(g);
        for (var c = 0, d = g.b.length, e = 0; e < d; e = e + 1 | 0) {
            var f = g.b[e];
            nc(g, c, f.a),
            c = f.b
        }
        nc(g, c, g.g),
        g.b.length ^ d && g.b.sort(tf),
        a.c = b,
        a.d = g.c,
        a.e = g.b
    }
    function Va(a) {
        return a.e < a.g
    }
    function zb(a) {
        a.e ^ a.h.a.b || ta(a.h),
        a.e = a.h.a.b
    }
    function Ab(a) {
        return qe(a),
        a.f
    }
    function pe(b) {
        var a = Ab(b);
        return zb(b),
        a
    }
    function Bb(c) {
        for (var a = ''; Va(c); ) {
            var b = Ab(c);
            if (!tc(b))
                break;
            zb(c),
            a += String.fromCharCode(b)
        }
        return a
    }
    function Wa(c, a, b) {
        c.c = a,
        c.i = b
    }
    function ja(h, a, b, c) {
        P(h.h, a);
        for (var d = a, e = h.h.c; h.h.a.b < b; ) {
            var f = h.h.a.b
              , g = h.h.c
              , i = ta(h.h);
            i ^ 9 || (h.b.push(new dg(d,f,e,g - e,c)),
            d = h.h.a.b,
            e = h.h.c,
            h.b.push(new dg(f,d,g,e - g,c)))
        }
        d < b && h.b.push(new dg(d,h.h.a.b,e,h.h.c - e,c)),
        P(h.h, h.e)
    }
    function mc(c, a) {
        var b = Qa(c.b);
        Ld(c.b, new dg(b.a,b.b,b.c,b.d,a))
    }
    function qe(a) {
        a.h.a.b ^ a.e || (a.f = ta(a.h))
    }
    function nc(e, a, b) {
        for (var c = e.d, d = a; d < b; d = d + 1 | 0)
            c.a.charCodeAt(d) ^ 9 || ja(e, d, d + 1 | 0, 8)
    }
    function oc(a) {
        return a == 32 || a == 9
    }
    function pc(a) {
        return a > 47 && a < 58
    }
    function qc(a) {
        return a > 64 && a < 91
    }
    function rc(a) {
        return a > 96 && a < 123
    }
    function sc(a) {
        return qc(a) || rc(a) || a == 95
    }
    function tc(a) {
        return sc(a) || pc(a)
    }
    function re(a) {
        for (var b = 0, c = a.length; b < c; b = b + 1 | 0)
            if (rc(a.charCodeAt(b)))
                return !0;
        return !1
    }
    function se(a) {
        return a.j < a.g.length
    }
    function te(a) {
        a.j > 0 && (a.j = a.j - 1 | 0,
        vc(a, a.g[a.j], 0))
    }
    function uc(a) {
        se(a) && (vc(a, a.g[a.j], 1),
        a.j = a.j + 1 | 0)
    }
    function ue(c, a) {
        if (c.e != a) {
            c.e = a,
            Ob(c.e.h, c.c, c.d),
            c.k = 0,
            je(c.h);
            for (var d = 0, e = c.f, f = e.length; d < f; d = d + 1 | 0) {
                var b = e[d];
                S(b, 0)
            }
        }
    }
    function ve(f, a, b) {
        if (f.e) {
            for (var c = f.k ? f.h.a[f.k - 1 | 0].d : null, d = f.k; d < b; ) {
                var e = f.h.a[d];
                (!c || !e.c || e.c != c) && oe(f.e, e, c),
                c = e.d,
                d = d + 1 | 0
            }
            f.k = d
        }
    }
    function we(d, a) {
        if (a.length) {
            for (; d.g.length > d.j; )
                d.g.pop();
            d.g.push(new cg(a,lb(d.b),me(a))),
            uc(d);
            var b = d.g.length;
            if (b > 1) {
                var c = ye(d.g[b - 2 | 0], d.g[b - 1 | 0]);
                c && (bc(d.g, b - 2 | 0, b),
                d.g.push(c),
                d.j = d.j - 1 | 0)
            }
        }
    }
    function xe(i, a) {
        var b = C(a)
          , c = G(a)
          , d = i.h.a[b.b]
          , e = i.h.a[c.b];
        if (d == e)
            return d.a.slice(b.a, c.a);
        for (var f = d.a.slice(b.a, d.a.length), g = b.b + 1 | 0; g < c.b; g = g + 1 | 0)
            f += '\n' + i.h.a[g].a;
        return f += '\n' + e.a.slice(0, c.a),
        f
    }
    function vc(s, a, b) {
        for (var c = 0, d = 0, e = 0, f = 0, H = 0, w = a.a, W = w.length; H < W; H = H + 1 | 0) {
            var g = w[H]
              , i = C(g.a)
              , h = G(g.a)
              , j = i.a + (i.b ^ f ? 0 : c) | 0
              , k = h.a + (h.b ^ f ? 0 : c) | 0
              , m = i.b + d | 0
              , n = h.b + d | 0;
            e = h.a,
            f = h.b;
            var l = s.h.a.slice(m, n + 1 | 0)
              , o = he(g.b)
              , q = l.length
              , v = o.length
              , u = l[q - 1 | 0]
              , t = o[v - 1 | 0];
            o[v - 1 | 0] = new $f(t.a + u.a.slice(k, u.a.length)),
            o[0] = new $f(l[0].a.slice(0, j) + o[0].a),
            l[q - 1 | 0] = new $f(u.a.slice(0, k)),
            l[0] = new $f(l[0].a.slice(j, l[0].a.length));
            var p = If;
            Ob(p, s.c, s.d);
            for (var F = 0, J = o.length; F < J; F = F + 1 | 0) {
                var z = o[F];
                T(p, z.a),
                P(p, z.a.length),
                z.b = p.c
            }
            ie(s.h, m, n + 1 | 0, o),
            k = k + (o[v - 1 | 0].a.length - u.a.length | 0) | 0,
            n = (m + o.length | 0) - 1 | 0,
            g.a = new jg(new ig(j,m,-1),new ig(k,n,-1)),
            g.b = kc(l),
            c = k - e | 0,
            d = n - f | 0,
            s.k = Math.min(s.k, m)
        }
        for (var Q = 0, B = s.f, M = B.length; Q < M; Q = Q + 1 | 0) {
            var A = B[Q];
            yd(A, s, a, b)
        }
        s.i && ne(s.i, s.a, kc(s.h.a))
    }
    function ye(a, b) {
        if (!a.c && b.c || a.a.length ^ b.a.length || b.b - a.b > .5)
            return null;
        var c = Math.max(a.b, b.b)
          , d = a.c && b.c
          , e = ke(b.a, a.a);
        if (e)
            return new cg(e,c,d);
        var f = le(a.a, b.a);
        return f && new cg(f,c,d)
    }
    function Xa(a) {
        return a.g < a.h
    }
    function ze(b, a) {
        return b.k + b.n / 2 + (a - b.g / 2) * (b.m - b.n) / (b.h - b.g)
    }
    function ba(b, a) {
        return a = Math.max(0, Math.min(a, b.h - b.g)),
        b.j != a ? (b.j = a,
        Ya(b),
        !0) : !1
    }
    function wc(b, a) {
        b.f = a,
        Ya(b)
    }
    function xc(e, a, b, c, d) {
        e.b = a,
        e.c = b,
        e.d = c - a,
        e.e = d - b,
        e.k = e.a ? e.b : e.c,
        e.m = e.a ? e.d : e.e,
        Ya(e)
    }
    function yc(c, a, b) {
        (c.g != a || c.h != b) && (c.g = a,
        c.h = b,
        ba(c, c.j) || Ya(c))
    }
    function zc(b, a) {
        Xa(b) && Id(a, b.a ? b.b + b.l : b.b, b.a ? b.c : b.c + b.l, b.a ? b.n : b.d, b.a ? b.e : b.n, 8)
    }
    function Cb(d, a) {
        var b = a.a - d.b
          , c = a.b - d.c;
        return Xa(d) && b >= 0 && c >= 0 && b < d.d && c < d.e
    }
    function Ac(d, a, b) {
        if (Cb(d, a)) {
            var c = d.g * (d.m - d.n) / (d.h - d.g);
            return d.o = b & 1 ? d.n / 2 : (d.a ? a.a - d.b : a.b - d.c) - d.l,
            d.o += c * (d.o < 0 ? 1 : d.o >= d.n ? -1 : 0),
            !0
        }
        return !1
    }
    function Ae(b, a) {
        return ba(b, ((b.a ? a.a - b.b : a.b - b.c) - b.o) * (b.h - b.g) / (b.m - b.n))
    }
    function Ya(a) {
        a.n = Math.max(a.f, a.m * a.g / a.h),
        a.l = (a.m - a.n) * a.j / (a.h - a.g)
    }
    function Db(b, a) {
        return b.a == a.a && b.b == a.b && b.c == a.c
    }
    function Da(c, a) {
        var b = Oa(c.b, a.b);
        return b || Oa(c.a, a.a)
    }
    function Bc(a, b) {
        return Da(a, b) < 0 ? a : b
    }
    function Cc(a, b) {
        return Da(a, b) > 0 ? a : b
    }
    function C(a) {
        return Bc(a.a, a.b)
    }
    function G(a) {
        return Cc(a.a, a.b)
    }
    function ka(a) {
        return Db(a.a, a.b)
    }
    function Ea(a) {
        return new jg(a,a)
    }
    function Za(a, b) {
        var c = Bc(C(a), C(b))
          , d = Cc(G(a), G(b));
        return Db(c, a.a) || Db(d, b.b) ? new jg(c,d) : new jg(d,c)
    }
    function Ce(b) {
        for (var c = 0, d = b.a, e = d.length; c < e; c = c + 1 | 0) {
            var a = d[c];
            if (!ka(a))
                return !1
        }
        return !0
    }
    function y(e, a, b, c) {
        var d = L(e.a, a, null);
        d || (d = [],
        e.a[a] = d),
        d.push(new lg(c,b))
    }
    function De(e, a, b) {
        var c = L(e.a, a, null);
        if (c)
            for (var f = 0, g = c.length; f < g; f = f + 1 | 0) {
                var d = c[f];
                if (d.b == b)
                    return d.a
            }
        return 0
    }
    function Ee(a, b) {
        var c = b.a ^ 3 ? 8 : 2
          , d = b.a == 3;
        y(a, 1, c, 6),
        y(a, 3, c, 2),
        y(a, 12, c | 4, 7),
        y(a, 12, c, 8),
        y(a, 22, c, 3),
        y(a, 24, c, 1),
        y(a, 25, c, 5),
        y(a, 26, c | 4, 5),
        y(a, 26, c, 4),
        y(a, 45, c | 4, 15),
        y(a, 45, c, 16),
        y(a, 46, 0, 9),
        y(a, 53, 4, 17),
        y(a, 53, 0, 18),
        y(a, 51, c, 10),
        y(a, 51, c | 4, 11),
        y(a, 42, 1, 11),
        y(a, 50, 1, 10),
        R(a, 38, 39, 0, 26, 29, 38, 41),
        R(a, 38, 39, d ? 1 : 8, 28, 31, 40, 43),
        R(a, 49, 48, 0, 34, 25, 46, 37),
        R(a, 40, 37, 0, 33, 24, 45, 36),
        X(a, 41, 43, 0, 50, 53),
        X(a, 41, 43, 4, 50, 53),
        X(a, 41, 43, d ? 1 : 8, 52, 55),
        X(a, 40, 37, c | 1, 13, 14),
        d ? (X(a, 47, 44, 0, 21, 19),
        R(a, 38, 39, 2, 27, 30, 39, 42),
        R(a, 40, 37, 1, 27, 30, 39, 42),
        R(a, 40, 37, 2, 32, 23, 44, 35),
        X(a, 41, 43, 2, 51, 54),
        y(a, 11, 8, 54),
        y(a, 8, 8, 50),
        y(a, 4, 8, 53),
        R(a, 1, 5, 8, 27, 30, 39, 42),
        R(a, 16, 14, 8, 33, 24, 45, 36)) : (R(a, 47, 44, 0, 27, 30, 39, 42),
        R(a, 47, 44, 8, 32, 23, 44, 35),
        X(a, 40, 37, 8, 22, 20))
    }
    function X(a, b, c, d, e, f) {
        y(a, b, d, e),
        y(a, c, d, f)
    }
    function R(a, b, c, d, e, f, g, i) {
        X(a, b, c, d, e, f),
        X(a, b, c, d | 4, g, i)
    }
    function Fe(e, a, b, c, d) {
        e.s = a,
        e.F = b,
        e.J = c,
        e.H = d,
        pa(e, 0)
    }
    function Ge(c, a, b) {
        c.M = a,
        c.K = b,
        pa(c, 0)
    }
    function Eb(e, a, b) {
        var c = ba(e.t, e.t.j + a)
          , d = ba(e.p, e.p.j + b);
        (c || d) && (S(e, 0),
        e.k && Fa(e, e.k))
    }
    function Dc(b, a) {
        return new Eg(a.a + b.t.j - b.s - b.B,za(Math.floor((a.b + b.p.j - b.F) / b.w) | 0, 0, b.c.h.a.length - 1 | 0))
    }
    function Fa(s, a) {
        if (s.n)
            Ae(s.n, a) && S(s, 0),
            s.D.jb(0);
        else if (s.l) {
            var b = s.m ? s.j.a.slice() : []
              , c = Fb(s, a);
            switch (s.l) {
            case 1:
                b.push(s.m ^ 2 ? Za(s.u, Gc(s, a, s.o)) : Za(b.pop(), Ea(c)));
                break;
            case 2:
                var d = Math.min(s.v.b, c.b)
                  , e = Math.max(s.v.b, c.b)
                  , f = s.c.h.a.length - 1 | 0
                  , g = new ig(0,d,-1)
                  , i = e ^ f ? new ig(0,e + 1 | 0,-1) : new ig(s.c.h.a[f].a.length,e,-1)
                  , h = c.b < s.v.b ? new jg(i,g) : new jg(g,i);
                b.push(s.m ^ 2 ? h : Za(b.pop(), Ea(h.b)));
                break;
            case 3:
                for (var j = Dc(s, a), k = Math.min(s.q.a, j.a), m = Math.max(s.q.a, j.a), n = Math.min(s.q.b, j.b) | 0, l = Math.max(s.q.b, j.b) | 0, o = s.b, q = b.length, v = !1, u = n; u <= l; u = u + 1 | 0) {
                    var t = s.c.h.a[u];
                    T(o, t.a),
                    cb(o, k);
                    var p = new ig(o.a.b,u,-1);
                    cb(o, m);
                    var z = new ig(o.a.b,u,-1);
                    b.push(s.q.a == k ? new jg(p,z) : new jg(z,p)),
                    p.a ^ z.a && (v = !0)
                }
                if (v)
                    for (var A = q; A < b.length; A = A + 1 | 0)
                        ka(b[A]) && (b.splice(A, 1),
                        A = A - 1 | 0);
                break
            }
            O(s, new kg(b), 1),
            s.D.jb(1)
        } else
            s.D.jb(Cb(s.t, a) || Cb(s.p, a) ? 0 : 1);
        s.k = a
    }
    function Ec(b) {
        var a = b.c.h.a.length - 1 | 0;
        return new kg([new jg(ad,new ig(b.c.h.a[a].a.length,a,-1))])
    }
    function Fc(f) {
        for (var a = f.c.h.a.length - 1 | 0, b = [], g = 0, i = f.d.a, h = i.length; g < h; g = g + 1 | 0) {
            var c = i[g]
              , d = C(c)
              , e = G(c);
            b.push(new jg(new ig(0,d.b,-1),e.b ^ a ? new ig(0,e.b + 1 | 0,-1) : new ig(f.c.h.a[a].a.length,e.b,-1)))
        }
        return new kg(b)
    }
    function He(f) {
        for (var a = [], i = 0, h = f.d.a, j = h.length; i < j; i = i + 1 | 0)
            for (var b = h[i], c = C(b), d = G(b), e = c.b, g = c.b ^ d.b && !d.a ? d.b : d.b + 1 | 0; e < g; e = e + 1 | 0)
                a.push(new jg(new ig(e ^ c.b ? 0 : c.a,e,-1),new ig(e ^ d.b ? f.c.h.a[e].a.length : d.a,e,-1)));
        return new kg(a)
    }
    function O(c, a, b) {
        c.d = a,
        c.i = null,
        Le(c, a, b),
        S(c, 1)
    }
    function Ie(e, a) {
        for (var b = a.a, c = '', d = 0, f = b.length; d < f; d = d + 1 | 0)
            d && (c += '\n'),
            c += xe(e.c, b[d]);
        return c
    }
    function Je(b, a) {
        b.c != a && (b.c && ac(b.c.f, b),
        b.c = a,
        $b(a.f, b),
        pa(b, 1))
    }
    function la(e, a) {
        for (var b = [], f = 0, g = e.d.a, i = g.length; f < i; f = f + 1 | 0) {
            var c = g[f]
              , d = new bg(c,a);
            Ca(d) && b.push(d)
        }
        e.g = !1,
        e.i = null,
        we(e.c, b),
        _a(e, G(Qa(e.d.a)))
    }
    function S(b, a) {
        b.D.t = !0,
        a ^ 1 || (b.f = lb(b.D.xa()))
    }
    function Bd(b) {
        if (b.D.q == b) {
            var a = b.D.p && ((lb(b.D.xa()) - b.f) * 2 & 1) == 0;
            if (a == b.e) {
                if (b.h = b.h + 1 | 0,
                b.D.xa().b || !b.D.p || b.h % 6 || b.h > 299)
                    return
            } else
                b.h = 0;
            b.e = a,
            b.D.t = !0
        }
    }
    function Cd(c, a) {
        if (c.D.q == c) {
            var b = fe(a) ? c.g ? 1 : 0 : ge(a) ? 1 : 2;
            b ^ 1 && a ^ 12 && (c.g = !1);
            switch (a) {
            case 4:
                te(c.c);
                break;
            case 5:
                uc(c.c);
                break;
            case 6:
                O(c, Ec(c), 0);
                break;
            case 7:
                O(c, He(c), 0);
                break;
            case 8:
                O(c, Fc(c), 0);
                break;
            case 9:
                Ke(c);
                break;
            case 10:
                Hc(c, 1);
                break;
            case 11:
                Hc(c, 0);
                break;
            case 12:
                c.g = !c.g;
                break;
            case 13:
                Ic(c, 0);
                break;
            case 14:
                Ic(c, 1);
                break;
            case 15:
                Jc(c, 0);
                break;
            case 16:
                Jc(c, 1);
                break;
            case 17:
            case 18:
                la(c, '\t');
                break;
            case 19:
                _a(c, G(Qa(Ec(c).a)));
                break;
            case 20:
                Eb(c, 0, c.w);
                break;
            case 21:
                _a(c, ad);
                break;
            case 22:
                Eb(c, 0, -c.w);
                break;
            case 23:
            case 35:
            case 47:
                oa(c, b, 1, 2);
                break;
            case 24:
            case 36:
            case 48:
                oa(c, b, 1, 0);
                break;
            case 25:
            case 37:
            case 49:
                oa(c, b, 1, 1);
                break;
            case 26:
            case 38:
            case 50:
                ca(c, b, 0, 0);
                break;
            case 27:
            case 39:
            case 51:
                ca(c, b, 0, 2);
                break;
            case 28:
            case 40:
            case 52:
                ca(c, b, 0, 1);
                break;
            case 29:
            case 41:
            case 53:
                ca(c, b, 1, 0);
                break;
            case 30:
            case 42:
            case 54:
                ca(c, b, 1, 2);
                break;
            case 31:
            case 43:
            case 55:
                ca(c, b, 1, 1);
                break;
            case 32:
            case 44:
            case 56:
                oa(c, b, 0, 2);
                break;
            case 33:
            case 45:
            case 57:
                oa(c, b, 0, 0);
                break;
            case 34:
            case 46:
            case 58:
                oa(c, b, 0, 1);
                break
            }
        }
    }
    function yd(g, a, b, c) {
        for (var d = [], i = 0, h = b.a, j = h.length; i < j; i = i + 1 | 0) {
            var e = h[i]
              , f = G(e.a);
            d.push(new jg(c ? f : C(e.a),f))
        }
        O(g, new kg(d), 1),
        pa(g, 1)
    }
    function Fb(e, a) {
        var b = za(Math.floor((a.b + e.p.j - e.F) / e.w) | 0, 0, e.c.h.a.length - 1 | 0)
          , c = a.a + e.t.j - e.s - e.B
          , d = e.b;
        return T(d, e.c.h.a[b].a),
        cb(d, c),
        new ig(d.a.b,b,-1)
    }
    function Gc(g, a, b) {
        var c = Fb(g, a)
          , d = c.a
          , e = c.b
          , f = g.c.h.a[e];
        return b ? new jg(new ig(b == 2 || !wb(f, d, 0) ? xb(f, d, 0, b) : d,e,-1),new ig(b == 2 || !wb(f, d, 1) ? xb(f, d, 1, b) : d,e,-1)) : Ea(c)
    }
    function Ke(b) {
        var a = b.d.a[0];
        O(b, new kg([a]), 0),
        _a(b, C(a))
    }
    function Hc(m, a) {
        for (var b = Qa(m.d.a), c = a ? G(b) : C(b), d = m.c.h.a.length, e = 0; e <= d; e = e + 1 | 0) {
            var f = ((c.b + d | 0) + Lf(e, a) | 0) % d | 0
              , g = m.c.h.a[f]
              , i = g.f;
            if (i)
                for (var h = i.length, j = 0; j < h; j = j + 1 | 0) {
                    var k = i[a ? j : (h - j | 0) - 1 | 0];
                    if (e || (a ? k.a > c.a : k.a < c.a)) {
                        O(m, new kg([new jg(new ig(k.a,f,-1),new ig(k.a,f,-1))]), 2);
                        return
                    }
                }
        }
    }
    function Ic(g, a) {
        for (var b = g.c.h.a.length - 1 | 0, c = g.d.a, d = c.slice(), i = 0, h = c.length; i < h; i = i + 1 | 0) {
            var e = c[i]
              , f = Kc(g, a ? G(e) : C(e));
            d.push(Ea(Lc(g, f.c, za(f.b + (a ? 1 : -1) | 0, 0, b))))
        }
        O(g, new kg(d), 1)
    }
    function Jc(b, a) {
        ca(b, 0, a, 2),
        a || ca(b, 0, 0, 0),
        la(b, '\n')
    }
    function ca(n, a, b, c) {
        for (var d = n.c.h.a.length - 1 | 0, e = [], l = 0, o = n.d.a, q = o.length; l < q; l = l + 1 | 0) {
            var f = o[l]
              , g = !ka(f)
              , i = g && a == 0 && c != 2;
            if (a == 2 && g)
                e.push(f);
            else {
                var h = f.b
                  , j = n.c.h.a[h.b]
                  , k = n.c.h.a[b ? Math.min(h.b + 1 | 0, d) : Math.max(h.b - 1 | 0, 0)]
                  , m = xb(j, h.a, b, c);
                h = i ? b ? G(f) : C(f) : m ^ h.a || c == 2 ? new ig(m,h.b,-1) : b ? h.b ^ d ? new ig(0,h.b + 1 | 0,-1) : h : h.b ? new ig(k.a.length,h.b - 1 | 0,-1) : h,
                e.push(new jg(a ? f.a : h,h))
            }
        }
        O(n, new kg(e), 1),
        a ^ 2 || la(n, '')
    }
    function oa(h, a, b, c) {
        for (var d = h.c.h.a.length - 1 | 0, e = c ? Math.round((h.A - h.F - h.H) / h.w - 1) | 0 : 1, f = [], j = 0, k = h.d.a, m = k.length; j < m; j = j + 1 | 0) {
            var g = k[j];
            if (a == 2 && !ka(g))
                f.push(g);
            else {
                var i = a ^ 1 ? b ? G(g) : C(g) : g.b;
                c == 2 || i.b == (b ? d : 0) ? i = b ? new ig(h.c.h.a[d].a.length,d,-1) : ad : (i = Kc(h, i),
                i = Lc(h, i.c, b ? Math.min(i.b + e | 0, d) : Math.max(i.b - e | 0, 0))),
                f.push(new jg(a ? g.a : i,i))
            }
        }
        O(h, new kg(f), 1),
        a ^ 2 || la(h, '')
    }
    function Kc(c, a) {
        if (a.c == -1) {
            var b = c.b;
            T(b, c.c.h.a[a.b].a),
            P(b, a.a),
            a = new ig(a.a,a.b,b.c)
        }
        return a
    }
    function Lc(d, a, b) {
        var c = d.b;
        return T(c, d.c.h.a[b].a),
        cb(c, a),
        new ig(c.a.b,b,a)
    }
    function pa(d, a) {
        if (d.z != 0 && d.A != 0) {
            d.B = d.$[1] ? Math.floor(d.M + d.c.h.a.length.toString().length * d.Q + d.K) : 0;
            var b = d.B + d.s + lc(d.c.h) + d.J
              , c = d.c.h.a.length * d.w + (d.$[0] ? d.A - d.w : d.H + d.F);
            yc(d.t, d.z, b),
            yc(d.p, d.A, c),
            xc(d.t, d.B, d.A - d._, d.z - (Xa(d.p) ? d._ : 0), d.A),
            xc(d.p, d.z - d._, 0, d.z, d.A - (Xa(d.t) ? d._ : 0)),
            S(d, a)
        }
    }
    function Gb(a) {
        return a.t.j - a.s
    }
    function Hb(a) {
        return a.z - a.B + a.t.j - a.J
    }
    function Ib(a) {
        return za(Math.floor((a.p.j - a.F) / a.w) | 0, 0, a.c.h.a.length - 1 | 0)
    }
    function Jb(a) {
        return za((Math.ceil((a.A + a.p.j - a.F) / a.w) | 0) - 1 | 0, 0, a.c.h.a.length - 1 | 0)
    }
    function Le(q, a, b) {
        if (b) {
            for (var c = a.a, d = Gb(q), e = Hb(q), f = Ib(q), g = Jb(q), i = lc(q.c.h), h = 0, j = q.c.h.a.length - 1 | 0, k = 0, v = 0, u = c.length; v < u; v = v + 1 | 0) {
                var m = c[v]
                  , n = m.b
                  , l = Mb(q, n);
                i = Math.min(i, l),
                h = Math.max(h, l),
                j = Math.min(j, n.b),
                k = Math.max(k, n.b)
            }
            if (b ^ 1) {
                if (b == 2 && (h <= d || i >= e || k <= f || j >= g)) {
                    var o = C(c[0]);
                    ba(q.t, Mb(q, o) - (q.z - q.s - q.J - q.B) / 2),
                    ba(q.p, o.b * q.w - (q.A - q.w - q.F - q.H) / 2),
                    S(q, 1)
                }
            } else
                h <= d ? Kb(q, h) : i >= e && Kb(q, i),
                k <= f ? Lb(q, k) : j >= g && Lb(q, j)
        }
    }
    function _a(b, a) {
        Kb(b, Mb(b, a)),
        Lb(b, a.b)
    }
    function Kb(e, a) {
        var b = Gb(e)
          , c = Hb(e)
          , d = e.t.j;
        a <= b ? d = a : a >= c && (d = a - (e.z - e.s - e.J - e.B)),
        ba(e.t, d) && S(e, 1)
    }
    function Lb(e, a) {
        var b = Ib(e)
          , c = Jb(e)
          , d = e.p.j;
        a <= b ? d = a * e.w : a >= c && (d = Math.max(d, (a + 1 | 0) * e.w - (e.A - e.F - e.H))),
        ba(e.p, d) && S(e, 1)
    }
    function Mb(c, a) {
        var b = c.b;
        return T(b, c.c.h.a[a.b].a),
        P(b, a.a),
        b.c
    }
    function Dd(b) {
        for (var c = 0, d = b.b, e = d.length; c < e; c = c + 1 | 0) {
            var a = d[c];
            Bd(a)
        }
    }
    function Ed(c, a) {
        for (var d = 0, e = c.b, f = e.length; d < f; d = d + 1 | 0) {
            var b = e[d];
            Cd(b, a)
        }
    }
    function fe(a) {
        return a > 22 && a < 35
    }
    function ge(a) {
        return a > 34 && a < 47
    }
    function qa(d, a, b, c) {
        return d.a.push(new pg(a,b,c,d.b)),
        d.b = d.b + Lf(c, b ? 1 : 4) | 0,
        d
    }
    function Ne(c, a, b) {
        c.a = a,
        c.b = b,
        Ja(c.d, 'e', 2 / c.a, -2 / c.b)
    }
    function Oe(k, a, b, c, d, e, f, g, i, h, j) {
        !(e >= k.a) && !(f >= k.b) && !(e + g <= 0) && !(f + i <= 0) && (k.e.b[0] = e,
        k.e.b[1] = f,
        k.e.b[2] = e + g,
        k.e.b[3] = f,
        k.e.b[4] = e,
        k.e.b[5] = f + i,
        k.e.b[6] = e + g,
        k.e.b[7] = f + i,
        pd(k.d, 'n', a, b, a + c, b + d),
        Ja(k.d, 'm', h, j),
        k.c.c = 129,
        hb(k.c, 1, k.d, k.e))
    }
    function Pe(d, a, b, c) {
        d.h = a,
        d.j = b,
        Ja(d.b, 'e', 2 / a, -2 / b),
        c != d.k && (d.k = c,
        d.f = {},
        d.d = new zg(d.g,d.i,1))
    }
    function Qe(w, a, b, c, d, e) {
        var f = b | a.a << 21
          , g = L(w.f, f, null);
        if (g) {
            if (c >= w.h || d >= w.j || c + g.a.f <= 0 || d + a.c <= 0)
                return g.a.f
        } else {
            var i = fa(a, b);
            if (c >= w.h || d >= w.j || c + i <= 0 || d + a.c <= 0)
                return i;
            var h = td(a, b)
              , j = Pc(w.d, h.b);
            g = new ug(h,j),
            w.f[f] = g,
            j || (ma(w),
            Re(w),
            j = g.b)
        }
        var k = g.a
          , m = g.b
          , n = w.e
          , l = w.m
          , o = k.b
          , q = k.e
          , v = c - Math.floor(c)
          , u = v * 255 | 0
          , t = c - k.c * q - v
          , p = d - k.d * q
          , z = t + o.a * q
          , A = p + o.b * q
          , s = m.a
          , F = m.b
          , J = m.c
          , H = m.d;
        return sa(n, t, p, s, F, e, u, l, 0, 0),
        sa(n, z, p, J, F, e, u, l, 0, 0),
        sa(n, z, A, J, H, e, u, l, 0, 0),
        sa(n, t, p, s, F, e, u, l, 0, 0),
        sa(n, z, A, J, H, e, u, l, 0, 0),
        sa(n, t, A, s, H, e, u, l, 0, 0),
        k.f
    }
    function ma(c) {
        if (c.e.b) {
            c.c ? (c.c.c ^ c.g || c.c.d ^ c.i) && rd(c.c, c.g, c.i, null) : (c.c = nd(c.a, zf, c.g, c.i, null),
            qd(c.b, 'o', c.c, 0));
            var a = Te(c.d);
            if (a) {
                var b = new wg(Nc(a),Oc(a));
                Mc(b, 0, 0, c.d.f, a.a, a.b, a.c, a.d),
                sd(c.c, b.c, a.a, a.b, Nc(a), Oc(a))
            }
            c.a.c = 129,
            hb(c.a, 0, c.b, Tc(c.e)),
            c.e.b = 0
        }
    }
    function Re(e) {
        var a = Pd(e.f)
          , b = !0;
        for (a.sort(Af); b; ) {
            b = !1,
            e.g > e.i ? e.i = e.i << 1 : e.g = e.g << 1,
            e.d = new zg(e.g,e.i,1);
            for (var c = 0; !b && c < a.length; c = c + 1 | 0) {
                var d = a[c];
                d.b = Pc(e.d, d.a.b),
                b = d.b == null
            }
        }
    }
    function Mc(l, a, b, c, d, e, f, g) {
        for (var i = c.c, h = l.c, j = c.a, k = l.a, m = f - d << 2, n = e; n < g; n = n + 1 | 0)
            h.a.set(new Bg.Sc(i,d + Lf(n, j) << 2,m).a, a + Lf((b - e | 0) + n | 0, k) << 2)
    }
    function Nc(a) {
        return a.c - a.a | 0
    }
    function Oc(a) {
        return a.d - a.b | 0
    }
    function Se(e, a, b, c, d) {
        e.a = Math.min(e.a, a),
        e.b = Math.min(e.b, b),
        e.c = Math.max(e.c, c),
        e.d = Math.max(e.d, d)
    }
    function Te(b) {
        var a = b.d;
        return b.d = null,
        a
    }
    function Pc(p, a) {
        var b = p.e
          , c = a.a
          , d = a.b
          , e = c + (b << 1) | 0
          , f = d + (b << 1) | 0
          , g = p.f.a
          , i = p.f.b
          , h = (p.a + e | 0) > g;
        if ((p.b + f | 0) > i || h && ((p.b + p.c | 0) + f | 0) > i)
            return null;
        h && (p.a = 0,
        p.b = p.b + p.c | 0);
        var j = p.a
          , k = p.b
          , m = j + e | 0
          , n = k + f | 0
          , l = p.a + b | 0
          , o = p.b + b | 0
          , q = l + c | 0
          , v = o + d | 0
          , u = 1 / g
          , t = 1 / i;
        return Mc(p.f, l, o, a, 0, 0, c, d),
        p.a = p.a + e | 0,
        p.c = Math.max(p.c, f),
        p.d ? Se(p.d, j, k, m, n) : p.d = new yg(j,k,m,n),
        new xg(l * u,o * t,q * u,v * t)
    }
    function Qc(b, a) {
        return b & 16777215 | Lf(b >>> 24, a) / 255 << 24
    }
    function $a(b) {
        var a = b >>> 24;
        return Lf(b >> 16 & 255, a) / 255 << 16 | Lf(b >> 8 & 255, a) / 255 << 8 | Lf(b & 255, a) / 255 | a << 24
    }
    function Ue(a) {
        return (a >> 16 & 255) * .299 + (a >> 8 & 255) * .587 + (a & 255) * .114 | 0
    }
    function Ve(d, a, b, c) {
        d.f = a,
        d.g = b,
        Ja(d.b, 'e', 2 / a, -2 / b),
        d.i = 1 / c
    }
    function ab(a) {
        a.d.b && (a.e.c = 129,
        hb(a.e, 1, a.b, Tc(a.d)),
        a.d.b = 0)
    }
    function We(g, a, b, c, d, e) {
        if (!(a >= g.f) && !(b >= g.g) && !(a + c <= 0) && !(b + d <= 0)) {
            var f = Bf;
            f[0] = a,
            f[1] = b,
            f[2] = a + c,
            f[3] = b,
            f[4] = a + c,
            f[5] = b + d,
            f[6] = a,
            f[7] = b + d,
            Rc(g, f, e)
        }
    }
    function Xe(l, a, b, c, d, e, f) {
        if (!(a >= l.f) && !(b >= l.g) && !(a + c <= 0) && !(b + d <= 0)) {
            f = Math.min(f, c / 2, d / 2);
            var g = []
              , i = a + f
              , h = b + f
              , j = a + c - f
              , k = b + d - f
              , m = f == c / 2
              , n = f == d / 2;
            bb(l, g, i, h, f, -3.141592653589793, -1.5707963267948966, n),
            bb(l, g, j, h, f, -1.5707963267948966, 0, m),
            bb(l, g, j, k, f, 0, 1.5707963267948966, n),
            bb(l, g, i, k, f, 1.5707963267948966, 3.141592653589793, m),
            Rc(l, g, e)
        }
    }
    function bb(k, a, b, c, d, e, f, g) {
        for (var i = 1 + (Math.ceil(d / (k.i * 3.141592653589793)) | 0) | 0, h = g | 0; h <= i; h = h + 1 | 0) {
            var j = e + (f - e) * h / i;
            a.push(b + Math.cos(j) * d),
            a.push(c + Math.sin(j) * d)
        }
    }
    function Rc(K, a, b) {
        var c = K.a
          , d = K.c
          , e = a.length;
        if (e >= 6) {
            for (; c.length < e; )
                c.push(0),
                c.push(0),
                d.push(0),
                d.push(0);
            for (var f = 0; f < e; f = f + 2 | 0) {
                var g = a[((f + e | 0) - 2 | 0) % e | 0]
                  , i = a[((f + e | 0) - 1 | 0) % e | 0]
                  , h = a[f]
                  , j = a[f + 1 | 0]
                  , k = a[(f + 2 | 0) % e | 0]
                  , m = a[(f + 3 | 0) % e | 0]
                  , n = i - j
                  , l = h - g
                  , o = ra(K, n, l)
                  , q = j - m
                  , v = k - h
                  , u = ra(K, q, v)
                  , t = n / o + q / u
                  , p = l / o + v / u
                  , z = K.i * .5 * o / (n * t + l * p)
                  , A = t * z
                  , s = p * z;
                d[f] = h - A,
                d[f + 1 | 0] = j - s,
                c[f] = h + A,
                c[f + 1 | 0] = j + s
            }
            for (var F = 0, J = e - 2 | 0; F <= J; F = F + 2 | 0,
            J = J - 2 | 0) {
                var H = c[F]
                  , w = c[F + 1 | 0]
                  , W = c[J]
                  , Q = c[J + 1 | 0];
                x(K, H, w, 1, 1, b),
                F || da(K),
                F < J && x(K, W, Q, 1, 1, b)
            }
            da(K);
            for (var B = 0; B <= e; B = B + 2 | 0) {
                var M = B ^ e ? B : 0;
                x(K, d[M], d[M + 1 | 0], 0, 0, b),
                B || da(K),
                x(K, c[M], c[M + 1 | 0], 1, 1, b)
            }
            da(K)
        }
    }
    function Ye(E, a, b, c, d) {
        var e = (c + E.i) / E.i
          , f = (c + E.i) / 2
          , g = a.length;
        if (g >= 4) {
            if (d) {
                var i = a[0]
                  , h = a[1]
                  , j = a[2]
                  , k = a[3]
                  , m = j - i
                  , n = k - h
                  , l = ra(E, m, n)
                  , o = E.i * .5 / l
                  , q = m * o
                  , v = n * o
                  , u = f / l
                  , t = -n * u
                  , p = m * u;
                d ^ 2 ? (x(E, i, h, e / 2, e / 2, b),
                da(E),
                x(E, i + q + t, h + v + p, 0, e, b),
                x(E, i - q + t, h - v + p, 0, e, b),
                x(E, i - q - t, h - v - p, 0, e, b),
                x(E, i, h, e / 2, e / 2, b),
                x(E, i + q - t, h + v - p, 0, e, b),
                x(E, i + q + t, h + v + p, e, 0, b)) : (x(E, i - t, h - p, 0, e, b),
                da(E),
                x(E, i + t, h + p, e, 0, b))
            }
            for (var z = d ? 2 : 0, A = (d ? g - 2 : g + 2) | 0, s = z; s < A; s = s + 2 | 0) {
                var F = a[((s + g | 0) - 2 | 0) % g | 0]
                  , J = a[((s + g | 0) - 1 | 0) % g | 0]
                  , H = a[s % g | 0]
                  , w = a[(s + 1 | 0) % g | 0]
                  , W = a[(s + 2 | 0) % g | 0]
                  , Q = a[(s + 3 | 0) % g | 0]
                  , B = J - w
                  , M = H - F
                  , K = ra(E, B, M)
                  , _ = w - Q
                  , $ = W - H
                  , D = ra(E, _, $)
                  , N = B / K + _ / D
                  , U = M / K + $ / D
                  , aa = f * K / (B * N + M * U)
                  , Ha = N * aa
                  , wa = U * aa;
                x(E, H - Ha, w - wa, 0, e, b),
                s || da(E),
                x(E, H + Ha, w + wa, e, 0, b)
            }
            if (d) {
                var mb = a[g - 4 | 0]
                  , Pb = a[g - 3 | 0]
                  , ea = a[g - 2 | 0]
                  , ga = a[g - 1 | 0]
                  , db = ea - mb
                  , nb = ga - Pb
                  , ya = ra(E, db, nb)
                  , Qb = E.i * .5 / ya
                  , Ma = db * Qb
                  , na = nb * Qb
                  , ob = f / ya
                  , ua = -nb * ob
                  , va = db * ob;
                d ^ 2 ? (x(E, ea - Ma - ua, ga - na - va, 0, e, b),
                x(E, ea - Ma + ua, ga - na + va, e, 0, b),
                x(E, ea, ga, e / 2, e / 2, b),
                x(E, ea + Ma + ua, ga + na + va, e, 0, b),
                x(E, ea + Ma - ua, ga + na - va, e, 0, b),
                x(E, ea - Ma - ua, ga - na - va, e, 0, b),
                x(E, ea, ga, e / 2, e / 2, b)) : (x(E, ea - ua, ga - va, 0, e, b),
                x(E, ea + ua, ga + va, e, 0, b))
            }
            da(E)
        }
    }
    function x(f, a, b, c, d, e) {
        f.m = a,
        f.n = b,
        f.j = c,
        f.k = d,
        f.h = e,
        Ze(f.d, a, b, c, d, e)
    }
    function da(a) {
        x(a, a.m, a.n, a.j, a.k, a.h)
    }
    function ra(c, a, b) {
        return Math.sqrt(a * a + b * b)
    }
    function Y(c, a) {
        for (; !(a in c.a); ) {
            var b = L(Hf, a, a);
            if (b ^ a)
                a = b;
            else
                return c != Xc ? Y(Xc, a) : 0
        }
        return c.a[a]
    }
    function Nb(d, a) {
        for (var b = d.d.a, c = d.d.b; a; )
            b -= a.U.a,
            c -= a.U.b,
            a = a.N;
        return new Eg(b,c)
    }
    function T(b, a) {
        pb(b.a, a, 0),
        b.c = 0
    }
    function Ob(c, a, b) {
        c.b != a && (c.b = a,
        c.d = fa(a, 32)),
        c.e = c.d * b
    }
    function ta(b) {
        var a = Pa(b.a);
        return ~a && (a ^ 9 ? b.c += fa(b.b, a) : b.c = hf(b.c, b.e)),
        a
    }
    function P(e, a) {
        var b = e.a
          , c = b.b;
        if (a ^ c)
            if (a > c)
                for (; b.b < a && ~ta(e); )
                    ;
            else {
                if (a > (c / 2 | 0))
                    for (; ; ) {
                        var d = Zb(b);
                        if (d == 9) {
                            b.b = 0;
                            break
                        }
                        if (e.c -= fa(e.b, d),
                        b.b <= a)
                            return
                    }
                for (b.b = 0,
                e.c = 0; b.b < a && ~ta(e); )
                    ;
            }
    }
    function cb(d, a) {
        for (var b = d.c, c = d.a.b; d.c < a && (b = d.c,
        c = d.a.b,
        ta(d) != -1); )
            ;
        a < (b + d.c) / 2 && (d.a.b = c,
        d.c = b)
    }
    function Yb(h, a) {
        var b = a.U
          , c = h.c
          , d = c.a + Math.max(b.a, 0)
          , e = c.b + Math.max(b.b, 0)
          , f = c.a + Math.min(Vc(b), c.c)
          , g = c.b + Math.min(Wc(b), c.d)
          , i = a == a.D.o ? a.U : new Dg(d,e,f - d,g - e);
        h.a.Wb(i.a, i.b, i.c, i.d),
        h.c = i,
        a.Ad(),
        h.c = c
    }
    function jf(b, a) {
        b.b = a,
        b.a.fd(Y(a, 1))
    }
    function Na(f, a, b, c, d, e) {
        f.a.Ia(a, b, c, d, Y(f.b, e))
    }
    function Fd(d, a, b, c) {
        d.d = a + d.c.a,
        d.e = b + d.c.b,
        d.a.Ia(a, b, 1, L(d.a.k, 0, null).d, Y(d.b, c))
    }
    function Jd(i, a, b, c, d, e) {
        var f = 2
          , g = [];
        for (a = Math.floor(a) + .5,
        b = Math.floor(b + d * .9) + .5; c > 0; )
            g.push(a),
            g.push(b),
            a += 2,
            b += f,
            c -= 2,
            f = -f;
        i.a.hd(g, Y(i.b, e), 1)
    }
    function Hd(e, a, b, c, d) {
        e.a.jd(a - c * 2, b - c, c * 2, d + c * 2, a, b, c, d, .5, c / 3)
    }
    function ha(g, a, b, c, d, e, f) {
        g.a.id(a, b, c, d, Qc(Y(g.b, e), f))
    }
    function Gd(e, a, b, c, d) {
        e.a.Ia(a, c, b - a, 1, Y(e.b, d))
    }
    function Kd(e, a, b, c, d) {
        e.a.Ia(a, b, 1, c - b, Y(e.b, d))
    }
    function Id(g, a, b, c, d, e) {
        var f = Math.round(Math.min(c, d) / 6);
        a += f,
        b += f,
        c -= f * 2,
        d -= f * 2,
        g.a.gd(a, b, c, d, Qc(Y(g.b, e), 127), c / 2)
    }
    function Yc(b, a) {
        return b.a ^ 2 ? b.b : a + b.b
    }
    function Zc(b, a) {
        return b.a ? a + b.c : b.c
    }
    function kf(c, a) {
        lf(c);
        var b = a.aa.slice();
        b.push(c),
        a.aa = b.slice(),
        c.N = a,
        c.La()
    }
    function lf(b) {
        if (b.N) {
            var a = b.N.aa.slice();
            ac(a, b),
            b.N.aa = a.slice(),
            b.N = null
        }
    }
    function $c(c, a) {
        var b = c.q;
        b != a && (c.q = a,
        Z(c, new Gg(7,b)),
        Z(c, new Gg(6,a)))
    }
    function mf(g, a) {
        var b = function(c, d) {
            for (var e = c.aa.length - 1 | 0; e > -1; e = e - 1 | 0) {
                var f = c.aa[e];
                if (af(f.U, d))
                    return b(f, cf(d, _e(f.U)))
            }
            return c
        };
        return b(g.o, a)
    }
    function Z(c, a) {
        for (var b = a.b; b; ) {
            if (b.zd(a),
            a.c)
                break;
            b = b.N
        }
        return b
    }
    function nf(c, a, b) {
        (!df(c.v, a) || c.u != b) && (c.v = a,
        c.u = b,
        c.o.La(),
        c.t = !0)
    }
    function hf(a, b) {
        return Math.floor(a / b + 1) * b
    }
    function Tc(a) {
        return new Bg.Sc(a.a,0,a.b)
    }
    function Ze(g, a, b, c, d, e) {
        var f = g.b;
        Uc(g, 20),
        g.a.b[f >> 2] = a,
        g.a.b[f + 4 >> 2] = b,
        g.a.b[f + 8 >> 2] = c,
        g.a.b[f + 12 >> 2] = d,
        g.a.a[f + 16 | 0] = e >> 16 & 255,
        g.a.a[f + 17 | 0] = e >> 8 & 255,
        g.a.a[f + 18 | 0] = e & 255,
        g.a.a[f + 19 | 0] = e >>> 24,
        g.b = f + 20 | 0
    }
    function sa(k, a, b, c, d, e, f, g, i, h) {
        var j = k.b;
        Uc(k, 24),
        k.a.b[j >> 2] = a,
        k.a.b[j + 4 >> 2] = b,
        k.a.b[j + 8 >> 2] = c,
        k.a.b[j + 12 >> 2] = d,
        k.a.a[j + 16 | 0] = e >> 16 & 255,
        k.a.a[j + 17 | 0] = e >> 8 & 255,
        k.a.a[j + 18 | 0] = e & 255,
        k.a.a[j + 19 | 0] = e >>> 24,
        k.a.a[j + 20 | 0] = f,
        k.a.a[j + 21 | 0] = g,
        k.a.a[j + 22 | 0] = i,
        k.a.a[j + 23 | 0] = h,
        k.b = j + 24 | 0
    }
    function Uc(c, a) {
        if ((c.b + a | 0) > c.c) {
            c.c = c.c << 1;
            var b = new Bg(c.c);
            b.a.set(c.a.a, 0),
            c.a = b
        }
    }
    function Vc(a) {
        return a.a + a.c
    }
    function Wc(a) {
        return a.b + a.d
    }
    function _e(a) {
        return new Eg(a.b,a.a)
    }
    function $e(a) {
        return new Eg(a.c,a.d)
    }
    function af(b, a) {
        return b.a <= a.a && a.a < Vc(b) && b.b <= a.b && a.b < Wc(b)
    }
    function bf(b, a) {
        return b.a == a.a && b.b == a.b && b.c == a.c && b.d == a.d
    }
    function cf(b, a) {
        return new Eg(b.a - a.a,b.b - a.b)
    }
    function df(b, a) {
        return b.a == a.a && b.b == a.b
    }
    function gf(a) {
        var b = null;
        for (a.c || Wa(a, ef, 0); Va(a); ) {
            var c = a.e
              , d = a.c
              , e = pe(a);
            if (oc(e))
                continue;
            else if (d == Rb || d == dd)
                e == 92 && Va(a) ? zb(a) : e ^ (d == Rb ? 34 : 39) || (ja(a, a.i, a.e, d == Rb ? 22 : 20),
                Wa(a, ef, a.e));
            else if (sc(e)) {
                var f = String.fromCharCode(e) + Bb(a)
                  , g = f in Cf ? 18 : f in Df ? 19 : f.length > 1 && !re(f) ? 15 : f in Ef || qc(e) || f == 'fn' && (!Va(a) || Ab(a) == 40) ? 23 : e ^ 95 ? 8 : 17
                  , i = (g == 8 || g == 23 || g == 17 || g == 15) && b != null && b in ff;
                i && (mc(a, 18),
                g = 16),
                ja(a, c, a.e, g),
                b = f;
                continue
            } else if (e ^ 64) {
                if (e ^ 35)
                    pc(e) ? (Bb(a),
                    ja(a, c, a.e, 20)) : e ^ 34 ? e ^ 39 || Wa(a, dd, c) : Wa(a, Rb, c);
                else {
                    ja(a, c, a.g, 14);
                    return
                }
            } else
                Bb(a),
                ja(a, c, a.e, 13);
            b = null
        }
        var h = a.c
          , j = h == Rb ? 22 : h == dd ? 20 : 8;
        j ^ 8 && a.i ^ a.g ? ja(a, a.i, a.g, j) : b != null && b in ff && mc(a, 18)
    }
    function Ld(b, a) {
        return b[b.length - 1 | 0] = a
    }
    function Qa(a) {
        return a[a.length - 1 | 0]
    }
    function Od(d, a, b) {
        for (var e = 0, f = b.length; e < f; e = e + 1 | 0) {
            var c = b[e];
            d.splice(a, 0, c),
            a = a + 1 | 0
        }
    }
    function $b(b, a) {
        ~b.indexOf(a) || b.push(a)
    }
    function ac(c, a) {
        var b = c.indexOf(a);
        b > -1 && c.splice(b, 1)
    }
    function bc(c, a, b) {
        c.splice(a, b - a | 0)
    }
    function r(c, a, b) {
        return c[a] = b,
        c
    }
    function Ra(d, a, b) {
        var c = d[a];
        return c !== void 0 ? c : b
    }
    function Pd(c) {
        var a = [];
        for (var b in c)
            a.push(c[b]);
        return a
    }
    function L(d, a, b) {
        var c = d[a];
        return c !== void 0 ? c : b
    }
    function Qd(c, a) {
        for (var b in c)
            a(b | 0, c[b])
    }
    function za(a, b, c) {
        return a < b ? b : a > c ? c : a
    }
    function Oa(b, a) {
        return (a < b | 0) - (a > b | 0) | 0
    }
    function Nd(d, a) {
        for (var b = '', c = 0; c < a; c = c + 1 | 0)
            b += d;
        return b
    }
    function _b(a) {
        return a < 65536 ? String.fromCharCode(a) : String.fromCharCode((a - 65536 >> 10) + 55296 | 0) + String.fromCharCode((a - 65536 & 1023) + 56320 | 0)
    }
    function tf(a, b) {
        return Oa(a.a, b.a)
    }
    function uf(a, b) {
        return Da(C(a), C(b))
    }
    function Af(a, b) {
        return Oa(a.a.b.b, b.a.b.b)
    }
    function Bg(a) {
        this.a = this.b = null,
        this.a = new Uint8Array(a),
        this.b = new Float32Array(this.a.buffer,0,a >> 2)
    }
    Bg.Sc = function(a, b, c) {
        this.a = this.b = null,
        this.a = a.a.subarray(b, b + c | 0),
        this.b = new Float32Array(a.a.buffer,a.a.byteOffset + b | 0,c >> 2)
    }
    ;
    Bg.Sc.prototype = Bg.prototype;
    function Cg() {
        this.a = null,
        this.b = 0,
        this.c = 256,
        this.a = new Bg(256)
    }
    function Dg(a, b, c, d) {
        this.a = a,
        this.b = b,
        this.c = c,
        this.d = d
    }
    function Eg(a, b) {
        this.a = a,
        this.b = b
    }
    function Jf() {
        this.a = '',
        this.b = this.c = 0
    }
    function Mf(a) {
        this.a = this.b = 0,
        this.c = 0,
        this.d = !1,
        this.e = V.createElement('canvas'),
        this.f = this.g = this.i = this.h = null,
        this.j = V.createElement('canvas').getContext('2d'),
        this.k = {},
        this.i = a,
        this.h = new Lg(this);
        var b = this.e.style;
        b.width = b.height = '100%'
    }
    Aa = Mf.prototype;
    Aa.fb = function() {
        this.d = !0
    }
    ;
    Aa.gb = function() {
        this.d = !1
    }
    ;
    Aa.Xb = function() {
        return 1
    }
    ;
    function Nf(a) {
        Mf.call(this, a),
        this.m = null,
        this.n = {},
        this.l = !1,
        this.o = 0,
        this.q = !1,
        this.m = this.e.getContext('2d')
    }
    Kf(Nf, Mf);
    Aa = Nf.prototype;
    Aa.fd = function(a) {
        this.e.style.background = Ba(this, a)
    }
    ;
    Aa.Wb = function(a, b, c, d) {
        this.l && this.m.restore(),
        this.m.save(),
        this.m.translate(a, b),
        this.m.beginPath(),
        this.m.rect(0, 0, c, d),
        this.m.clip(),
        this.l = !0
    }
    ;
    Aa.kd = function() {
        this.m.scale(this.c, this.c)
    }
    ;
    Aa.fb = function() {
        Mf.prototype.fb.call(this),
        this.q = !1,
        this.m.clearRect(0, 0, this.a, this.b)
    }
    ;
    Aa.gb = function() {
        Mf.prototype.gb.call(this),
        this.l && (this.m.restore(),
        this.l = !1)
    }
    ;
    Aa.Ia = function(a, b, c, d, e) {
        !(a >= this.a) && !(b >= this.b) && !(a + c <= 0) && !(b + d <= 0) && (this.m.fillStyle = Ba(this, e),
        this.m.fillRect(a, b, c, d))
    }
    ;
    Aa.gd = function(a, b, c, d, e, f) {
        if (!(a >= this.a) && !(b >= this.b) && !(a + c <= 0) && !(b + d <= 0)) {
            f = Math.min(f, c / 2, d / 2);
            var g = this.m
              , i = f * .4477152501692065
              , h = a + c
              , j = b + d;
            g.fillStyle = Ba(this, e),
            g.beginPath(),
            Sa(g, a, b + f, a, b + i, a + i, b, a + f, b),
            Sa(g, h - f, b, h - i, b, h, b + i, h, b + f),
            Sa(g, h, j - f, h, j - i, h - i, j, h - f, j),
            Sa(g, a + f, j, a + i, j, a, j - i, a, j - f),
            g.fill()
        }
    }
    ;
    Aa.hd = function(a, b, c) {
        var d = this.m;
        d.strokeStyle = Ba(this, b),
        d.lineWidth = c,
        d.beginPath();
        for (var e = 0; e < a.length; e = e + 2 | 0)
            d.lineTo(a[e], a[e + 1 | 0]);
        d.stroke()
    }
    ;
    Aa.jd = function(a, b, c, d, e, f, g, i, h, j) {
        if (!(e >= this.a) && !(f >= this.b) && !(e + g <= 0) && !(f + i <= 0)) {
            var k = this.m;
            k.save(),
            k.rect(e, f, g, i),
            k.clip(),
            k.shadowColor = 'rgba(0,0,0,' + h + ')',
            k.shadowOffsetX = k.shadowOffsetY = this.c * 1000,
            k.shadowBlur = j * 3 * this.c,
            k.fillStyle = '#000',
            k.fillRect(a - 1000, b - 1000, c, d),
            k.restore()
        }
    }
    ;
    Aa.id = function(a, b, c, d, e) {
        var f = L(this.k, d, null);
        f && !(a >= this.a) && !(b >= this.b) && !(b + f.c <= 0) && ((!this.q || d ^ this.o) && (this.o = d,
        this.q = !0,
        this.m.font = f.j),
        this.m.fillStyle = Ba(this, e),
        this.m.fillText(c, a, b + f.c))
    }
    ;
    function Of(a) {
        Mf.call(this, a),
        this.v = this.u = this.t = this.p = null,
        this.z = 0;
        var b = null
          , c = {
            alpha: !1,
            antialias: !1,
            depth: !1,
            failIfMajorPerformanceCaveat: !0,
            preserveDrawingBuffer: !0,
            stencil: !1
        };
        try {
            b = this.e.getContext('webgl', c)
        } catch (d) {}
        b || (b = this.e.getContext('experimental-webgl', c)),
        this.v = new Pf(b),
        this.u = new Ag(this.v),
        this.t = new vg(a.xa(),this.v),
        this.p = new sg(this.v)
    }
    Kf(Of, Mf);
    Aa = Of.prototype;
    Aa.fd = function(a) {
        this.t.m = Ue(a),
        this.z = a
    }
    ;
    Aa.Wb = function(a, b, c, d) {
        ab(this.u),
        ma(this.t),
        this.v.o = new Dg(Math.round(a * this.c) | 0,Math.round(b * this.c) | 0,Math.round(c * this.c) | 0,Math.round(d * this.c) | 0),
        Ve(this.u, c, d, this.c),
        Pe(this.t, c, d, this.c),
        Ne(this.p, c, d)
    }
    ;
    Aa.kd = function() {
        ld(this.v, this.e.width, this.e.height),
        this.Wb(0, 0, this.a, this.b)
    }
    ;
    Aa.fb = function() {
        Mf.prototype.fb.call(this),
        md(this.v, this.z)
    }
    ;
    Aa.gb = function() {
        Mf.prototype.gb.call(this),
        ab(this.u),
        ma(this.t)
    }
    ;
    Aa.Ia = function(a, b, c, d, e) {
        !(a >= this.a) && !(b >= this.b) && !(a + c <= 0) && !(b + d <= 0) && (ma(this.t),
        We(this.u, a, b, c, d, $a(e)))
    }
    ;
    Aa.gd = function(a, b, c, d, e, f) {
        !(a >= this.a) && !(b >= this.b) && !(a + c <= 0) && !(b + d <= 0) && (ma(this.t),
        Xe(this.u, a, b, c, d, $a(e), f))
    }
    ;
    Aa.hd = function(a, b, c) {
        ma(this.t),
        Ye(this.u, a, $a(b), c, 1)
    }
    ;
    Aa.jd = function(a, b, c, d, e, f, g, i, h, j) {
        !(e >= this.a) && !(f >= this.b) && !(e + g <= 0) && !(f + i <= 0) && (ab(this.u),
        ma(this.t),
        Oe(this.p, a, b, c, d, e, f, g, i, h, j))
    }
    ;
    Aa.id = function(a, b, c, d, e) {
        var f = L(this.k, d, null);
        if (f && !(a >= this.a) && !(b >= this.b) && !(b + f.c <= 0)) {
            var g = pb(Md, c, 0);
            ab(this.u),
            e = $a(e);
            for (var i = Pa(g); ~i; i = Pa(g))
                a += Qe(this.t, f, i, a, b, e)
        }
    }
    ;
    Aa.Xb = function() {
        return this.c
    }
    ;
    function Pf(a) {
        var e = this;
        e.a = 0,
        e.b = null,
        e.c = 0,
        e.d = null,
        e.e = [],
        e.f = 0,
        e.g = null,
        e.i = !0,
        e.h = 1,
        e.k = e.m = 0,
        e.n = null,
        e.l = e.o = Ga,
        e.q = e.v = null,
        e.u = 0,
        e.j = a;
        var b = e.j.canvas;
        b.width = b.height = 0,
        b.addEventListener('webglcontextlost', function(c) {
            c.preventDefault()
        }),
        b.addEventListener('webglcontextrestored', function() {
            e.a = e.f = 0,
            e.i = !0,
            e.v = null,
            e.l = e.o = Ga,
            e.h = e.h + 1 | 0;
            for (var f = 0, g = e.e, i = g.length; f < i; f = f + 1 | 0) {
                var d = g[f];
                d()
            }
        }),
        e.b = {
            0: 0,
            1: 1,
            2: 768,
            3: 774,
            4: 769,
            5: 775,
            6: 770,
            7: 772,
            8: 771,
            9: 773,
            10: 32769,
            11: 32770
        }
    }
    function Qf(a, b) {
        this.a = a,
        this.b = b,
        this.c = 0,
        this.d = null,
        this.e = !0
    }
    function Rf(a, b) {
        Qf.call(this, a, b),
        this.f = 0
    }
    Kf(Rf, Qf);
    Rf.prototype.ed = function() {
        var a = this.a.a;
        (this.c ^ a.h || this.e) && (a.j.uniform1i(Ta(this), this.f),
        this.e = !1)
    }
    ;
    function Sf(a, b) {
        Qf.call(this, a, b),
        this.g = this.i = 0
    }
    Kf(Sf, Qf);
    Sf.prototype.ed = function() {
        var a = this.a.a;
        (this.c ^ a.h || this.e) && (a.j.uniform2f(Ta(this), this.g, this.i),
        this.e = !1)
    }
    ;
    function Tf(a, b) {
        Qf.call(this, a, b),
        this.h = this.j = this.k = this.m = 0
    }
    Kf(Tf, Qf);
    Tf.prototype.ed = function() {
        var a = this.a.a;
        (this.c ^ a.h || this.e) && (a.j.uniform4f(Ta(this), this.h, this.j, this.k, this.m),
        this.e = !1)
    }
    ;
    function Uf(a, b) {
        Qf.call(this, a, b),
        this.n = null,
        this.l = -1
    }
    Kf(Uf, Qf);
    Uf.prototype.ed = function() {
        var a = this.a.a
          , b = a.j;
        (this.c ^ a.h || this.e) && (b.uniform1i(Ta(this), this.l),
        this.e = !1),
        b.activeTexture(33984 + this.l | 0),
        b.bindTexture(3553, this.n && this.n.c > 0 && this.n.d > 0 ? rb(this.n) : null)
    }
    ;
    function Vf(a, b, c, d) {
        this.a = a,
        this.b = b,
        this.c = c,
        this.d = d,
        this.e = eb(null),
        this.f = [],
        this.g = 0,
        this.i = null
    }
    function Wf(a, b, c, d, e) {
        this.a = a,
        this.b = b,
        this.c = c,
        this.d = d,
        this.e = e,
        this.f = this.g = null,
        this.i = 0,
        this.h = !0
    }
    function Xf(a, b, c, d, e, f) {
        this.a = 0,
        this.b = null,
        this.c = this.d = 0,
        this.e = 0,
        this.f = {},
        this.g = V.createElement('canvas').getContext('2d'),
        this.i = null,
        this.h = 0,
        this.j = '',
        this.k = 0,
        this.a = a,
        this.b = b,
        this.c = c,
        this.d = d,
        this.e = e,
        fc(this, f)
    }
    function _f(a) {
        this.a = a,
        new og(this.a)
    }
    function $f(a) {
        this.a = a,
        this.b = -1,
        this.c = this.d = this.e = this.f = null,
        this.g = !1
    }
    function ag() {
        this.a = [new $f('')],
        this.b = 0,
        this.a[0].b = 0
    }
    function bg(a, b) {
        this.a = a,
        this.b = b
    }
    function cg(a, b, c) {
        this.a = a,
        this.b = b,
        this.c = c
    }
    function dg(a, b, c, d, e) {
        this.a = a,
        this.b = b,
        this.c = c,
        this.d = d,
        this.e = e
    }
    function eg() {}
    function fg(a) {
        this.a = a,
        this.b = this.c = this.d = null,
        this.e = this.f = this.g = this.i = 0,
        this.h = new Kg
    }
    function gg(a, b, c, d) {
        this.a = a,
        this.b = b,
        this.c = c,
        this.d = d,
        this.e = null,
        this.f = [],
        this.g = [],
        this.i = null,
        this.h = new ag,
        this.j = this.k = 0
    }
    function hg(a) {
        this.b = this.c = this.d = this.e = this.f = this.g = this.i = this.h = this.j = this.k = this.m = this.n = this.l = this.o = 0,
        this.q = !1,
        this.a = a == 0
    }
    function ig(a, b, c) {
        this.a = a,
        this.b = b,
        this.c = c
    }
    function jg(a, b) {
        this.a = a,
        this.b = b
    }
    function kg(a) {
        this.a = a,
        a.sort(uf);
        for (var b = 0, c = 0; b < a.length; ) {
            for (var d = a[b]; (b + 1 | 0) < a.length; ) {
                var e = a[b + 1 | 0]
                  , f = Da(G(d), C(e));
                if (f < 1 && (f || !ka(d) && !ka(e)))
                    break;
                d = Za(d, e),
                b = b + 1 | 0
            }
            a[c] = d,
            c = c + 1 | 0,
            b = b + 1 | 0
        }
        for (; a.length > c; )
            a.pop()
    }
    function lg(a, b) {
        this.a = a,
        this.b = b
    }
    function mg(a) {
        this.a = {},
        Ee(this, a)
    }
    function og(a) {
        this.a = null,
        this.b = [];
        var b = xd(a);
        b.ud('Untitled - Sky Text Editor'),
        b.vd(Gf),
        b.kb(0, Me, 12, 16, 0),
        b.kb(1, Me, 10, 14, 0),
        b.kb(2, vf, 12, 16, 0),
        this.a = b;
        var c = new gg('Untitled',a,L(b.Ka().a.k, 0, null),2);
        ue(c, Ff);
        var d = new ng(this,c);
        Fe(d, 5, 5, 5, 5),
        Ge(d, 15, 5),
        kf(d, b.o),
        b.z = this,
        $c(b, d)
    }
    function pg(a, b, c, d) {
        this.a = a,
        this.b = b,
        this.c = c,
        this.d = d
    }
    function qg() {
        this.a = [],
        this.b = 0
    }
    function rg(a, b, c) {
        this.a = a,
        this.b = b,
        this.c = c
    }
    function sg(a) {
        this.a = this.b = 0,
        this.c = this.d = null,
        this.e = new Bg(32),
        this.c = a,
        this.d = ib(a, wf, 'precision highp float;uniform vec2 e;attribute vec2 l;varying vec2 j;void main(){j=l,gl_Position=vec4(l.xy*e-sign(e),0,1);}', 'precision highp float;uniform vec2 m;uniform vec4 n;varying vec2 j;vec4 s(vec4 a){vec4 d=sign(a),b=abs(a);a=b*(b*(b*b*.078108+.230389)+.278393)+1.,a*=a;return d-d/(a*a);}float q(vec2 d,vec2 g,vec2 b,float r){vec4 t=vec4(b-d,b-g),a=.5+.5*s(t*(sqrt(.5)/r));return (a.z-a.x)*(a.w-a.y);}float u(){return fract(sin(dot(vec2(12.9898,78.233),gl_FragCoord.xy))*43758.5453);}void main(){float a=m.x*q(n.xy,n.zw,j.xy,m.y);a+=(u()-.5)/128.,gl_FragColor=vec4(0,0,0,a);}')
    }
    function tg(a, b, c, d, e, f) {
        this.a = a,
        this.b = b,
        this.c = c,
        this.d = d,
        this.e = e,
        this.f = f
    }
    function ug(a, b) {
        this.a = a,
        this.b = b
    }
    function vg(a, b) {
        this.a = this.b = this.c = this.d = null,
        this.e = new Cg,
        this.f = null,
        this.g = this.i = 512,
        this.h = this.j = this.k = 0,
        this.m = 0,
        this.a = b,
        this.b = ib(b, yf, 'precision highp float;uniform vec2 e;attribute vec4 i,k,h;varying vec4 f,c;void main(){c=vec4(h.zw,k.x*3.,k.y),f=i,gl_Position=vec4(h.xy*e-sign(e),0,1);}', 'precision highp float;uniform sampler2D o;uniform bool p;varying vec4 f,c;void main(){vec4 d=texture2D(o,c.xy);float a=c.w,g=dot(f.rgb,vec3(.299,.587,.114)),b=c.z<1.?d.x:c.z<2.?d.y:d.z;p?b+=((sqrt(mix(a*a,g*g,sqrt(b)))-a)/(g-a)-b)*.5:0.,gl_FragColor=f*b;}'),
        od(this.b, 'p', 1)
    }
    function wg(a, b) {
        this.c = null,
        this.a = a,
        this.b = b,
        this.c = new Bg(a * b << 2)
    }
    function xg(a, b, c, d) {
        this.a = a,
        this.b = b,
        this.c = c,
        this.d = d
    }
    function yg(a, b, c, d) {
        this.a = a,
        this.b = b,
        this.c = c,
        this.d = d
    }
    function zg(a, b, c) {
        this.a = this.b = this.c = 0,
        this.d = this.f = null,
        this.e = c,
        this.f = new wg(a,b)
    }
    function Ag(a) {
        this.a = [],
        this.b = null,
        this.c = [],
        this.d = new Cg,
        this.f = this.g = 0,
        this.i = 1,
        this.h = 0,
        this.j = this.k = this.m = this.n = 0,
        this.e = a,
        this.b = ib(a, xf, 'precision highp float;uniform vec2 e;attribute vec4 i,h;varying vec4 f,c;void main(){c=h,f=i,gl_Position=vec4(h.xy*e-sign(e),0,1);}', 'precision highp float;varying vec4 f,c;void main(){gl_FragColor=f*min(1.,min(c.z,c.w));}')
    }
    function Fg(a) {
        this.a = a
    }
    function Gg(a, b) {
        this.a = a,
        this.b = b,
        this.c = !1
    }
    function Hg(a, b, c, d, e, f) {
        Gg.call(this, a, b),
        this.d = c,
        this.e = d,
        this.f = e,
        this.g = f
    }
    Kf(Hg, Gg);
    function Ig(a, b, c) {
        Gg.call(this, a, b),
        this.i = c
    }
    Kf(Ig, Gg);
    function Jg(a, b, c, d) {
        Gg.call(this, a, b),
        this.h = c,
        this.j = d
    }
    Kf(Jg, Gg);
    function Kg() {
        this.a = new Jf,
        this.b = null,
        this.c = this.d = this.e = 0
    }
    function Lg(a) {
        this.a = a,
        this.b = Xc,
        this.c = Ga,
        this.d = this.e = 0
    }
    function Mg(a, b, c) {
        this.a = a,
        this.b = b,
        this.c = c
    }
    function Ng(a) {
        this.D = a,
        this.N = null,
        this.U = Ga,
        this.aa = [].slice(),
        this.Ha = this.wa = _c
    }
    Aa = Ng.prototype;
    Aa.zd = function(a) {}
    ;
    Aa.Ad = function() {
        for (var a = 0, b = this.aa.length; a < b; a = a + 1 | 0)
            Yb(this.D.Ka(), this.aa[a])
    }
    ;
    Aa.La = function() {
        var a = this.N ? $e(this.N.U) : this == this.D.o ? this.D.v : cd
          , b = Yc(this.Ha, a.a)
          , c = Yc(this.wa, a.b)
          , d = Zc(this.Ha, a.a)
          , e = Zc(this.wa, a.b)
          , f = new Dg(b,c,d - b,e - c)
          , g = this.U;
        if (this.U = f,
        g.c != f.c || g.d != f.d)
            for (var i = 0, h = this.aa.length; i < h; i = i + 1 | 0)
                this.aa[i].La()
    }
    ;
    function ng(a, b) {
        Ng.call(this, a.a),
        this.a = null,
        this.b = new Kg,
        this.c = null,
        this.d = new kg([Be]),
        this.e = !1,
        this.f = 0,
        this.g = !1,
        this.i = null,
        this.h = 0,
        this.j = this.k = null,
        this.m = 0,
        this.n = null,
        this.l = this.o = 0,
        this.q = this.v = this.u = null,
        this.t = new hg(0),
        this.p = new hg(1),
        this.z = this.A = this.s = this.F = this.J = this.H = 0,
        this.w = this.W = this.Q = 1,
        this.B = this.M = this.K = 0,
        this._ = 11,
        this.$ = {
            0: !0,
            1: !0
        },
        this.a = a,
        $b(a.b, this),
        Je(this, b);
        var c = this.D.Ka()
          , d = L(c.a.k, 0, null);
        this.W = fa(d, 183),
        this.Q = fa(L(c.a.k, 1, null), 183),
        this.w = d.d,
        Ob(this.b, d, b.d),
        wc(this.t, this.w * 3),
        wc(this.p, this.w * 3),
        pa(this, 0),
        S(this, 1)
    }
    Kf(ng, Ng);
    Aa = ng.prototype;
    Aa.La = function() {
        Ng.prototype.La.call(this),
        this.z = this.U.c,
        this.A = this.U.d,
        pa(this, 0)
    }
    ;
    Aa.zd = function(a) {
        switch (a.a) {
        case 0:
            var b = Nb(a, this);
            Fa(this, b),
            $c(this.D, this),
            Ac(this.t, b, a.e) ? this.n = this.t : Ac(this.p, b, a.e) ? this.n = this.p : (this.n = null,
            this.m = (this.D.xa().a ^ 3 ? 8 : 2) & a.e ? 1 : a.e & 4 ? 2 : 0,
            this.j = this.d,
            this.l = a.d.a < this.B ? 2 : a.e & 1 ? 3 : 1,
            this.o = (a.f + 2 | 0) % 3,
            this.q = Dc(this, b),
            this.v = Fb(this, b),
            this.u = Gc(this, b, this.o)),
            Fa(this, b),
            a.c = !0;
            break;
        case 1:
            Fa(this, Nb(a, this));
            break;
        case 2:
            Fa(this, Nb(a, this)),
            this.n = null,
            this.l = 0;
            break;
        case 3:
            Eb(this, a.g.a, a.g.b);
            break;
        case 6:
            S(this, 1);
            break;
        case 7:
            this.e && (S(this, 0),
            this.e = !1);
            break;
        case 8:
        case 9:
            var c = Ce(this.d) ? Fc(this) : this.d;
            a.i = Ie(this, c),
            a.a ^ 8 || (O(this, c, 0),
            la(this, ''));
            break;
        case 10:
            la(this, a.i);
            break;
        case 11:
            if (this.i != null) {
                for (var d = this.i.length, e = [], k = 0, m = this.d.a, n = m.length; k < n; k = k + 1 | 0) {
                    var f = m[k]
                      , g = C(f)
                      , i = G(f)
                      , h = this.c.h.a[g.b]
                      , j = g.a - d | 0;
                    g.a == i.a && g.b == i.b && j > -1 && h.a.slice(j, g.a) == this.i && (g = new ig(j,g.b,-1)),
                    e.push(new jg(g,i))
                }
                O(this, new kg(e), 0)
            }
            la(this, a.h),
            a.j && (this.i = a.h);
            break
        }
    }
    ;
    Aa.Ad = function() {
        var a = this.D.Ka()
          , b = this.s - this.t.j + this.B
          , c = this.F - this.p.j
          , d = Gb(this)
          , e = Hb(this)
          , f = Ib(this)
          , g = Jb(this) + 1 | 0
          , i = this.d.a
          , h = this.b;
        ve(this.c, f, g),
        Na(a, 0, 0, this.z, this.A, 1);
        for (var Sb = 0, of = i.length; Sb < of; Sb = Sb + 1 | 0)
            for (var j = i[Sb], k = C(j), m = G(j), n = Math.max(k.b, f), l = Math.min(m.b, g), o = n; o <= l; o = o + 1 | 0) {
                var q = this.c.h.a[o]
                  , v = q.a.length
                  , u = o ^ k.b ? 0 : k.a
                  , t = o ^ m.b ? v + 1 | 0 : m.a;
                if (u ^ t) {
                    var p = c + this.w * o;
                    T(h, q.a),
                    P(h, u);
                    var z = h.c;
                    P(h, t);
                    var A = h.c;
                    t ^ v + 1 || (A += this.W),
                    Na(a, b + z, p, A - z, this.w, 6);
                    for (var s = Math.min(t, v), F = u, J = '', H = u; H <= t; H = H + 1 | 0) {
                        var w = H < s ? q.a.charCodeAt(H) : 0;
                        w ^ 32 ? (J != '' && (P(h, F),
                        ha(a, b + h.c, p, J, 0, 8, 63),
                        J = ''),
                        w ^ 9 || (P(h, H),
                        ha(a, b + h.c, p, '→', 0, 8, 63)),
                        F = H + 1 | 0) : J += '·'
                    }
                }
            }
        for (var W = f; W < g; W = W + 1 | 0) {
            var Q = c + W * this.w
              , B = this.c.h.a[W]
              , M = B.e
              , K = B.f;
            if (M) {
                for (var _ = B.a.length, $ = 0, D = 0, Tb = 0, pf = M.length; Tb < pf; Tb = Tb + 1 | 0) {
                    var N = M[Tb]
                      , U = N.a
                      , aa = N.b;
                    if (N.c > e) {
                        _ = N.a;
                        break
                    }
                    N.c + N.d >= d && (D < U && ha(a, b + $, Q, B.a.slice(D, U), 0, 8, 255),
                    ha(a, b + N.c, Q, B.a.slice(U, aa), 0, N.e, 255)),
                    $ = N.c + N.d,
                    D = aa
                }
                D < _ && $ < e && ha(a, b + $, Q, B.a.slice(D, _), 0, 8, 255)
            } else
                ha(a, b, Q, B.a, 0, 8, 255);
            if (K)
                for (var Ha = 0, Ub = 0, qf = K.length; Ub < qf; Ub = Ub + 1 | 0) {
                    var wa = K[Ub]
                      , mb = wa.a
                      , Pb = Math.max(wa.a, mb + 1 | 0);
                    if (mb >= Ha) {
                        T(h, B.a),
                        P(h, mb);
                        var ea = h.c;
                        P(h, Pb);
                        var ga = h.c;
                        ga >= d && ea <= e && (Jd(a, b + ea, Q, ga - ea, this.w, wa.a ? 3 : 2),
                        Ha = Pb)
                    }
                }
        }
        for (var db = {}, Vb = 0, rf = i.length; Vb < rf; Vb = Vb + 1 | 0) {
            var nb = i[Vb]
              , ya = nb.b;
            f <= ya.b && ya.b <= g && (this.e && (T(h, this.c.h.a[ya.b].a),
            P(h, ya.a),
            Fd(a, b + h.c, c + this.w * ya.b, 7)),
            db[ya.b] = !0)
        }
        if (this.B != 0) {
            this.t.j != 0 && Hd(a, this.B, 0, 20, this.A),
            Na(a, 0, 0, this.B, this.A, 4);
            for (var Qb = L(a.a.k, 0, null).c - L(a.a.k, 1, null).c, Ma = this.c.h.a.length.toString().length, na = f; na < g; na = na + 1 | 0) {
                var ob = (na + 1 | 0).toString()
                  , ua = c + na * this.w
                  , va = na in db;
                va && Na(a, 0, ua, this.B, this.w, 5),
                ha(a, this.M + this.Q * (Ma - ob.length | 0), ua + Qb, ob, 1, va ? 12 : 11, 255)
            }
            Kd(a, this.B, 0, this.A, 0)
        }
        for (var E = 0; E < this.c.h.a.length; E = E + 1 | 0) {
            var bd = this.c.h.a[E];
            bd.f && Gd(a, this.z - this._, this.z, ze(this.p, this.F + this.w * (E + .5)), bd.g ? 2 : 3)
        }
        zc(this.t, a),
        zc(this.p, a)
    }
    ;
    function Og() {
        this.o = this.q = null,
        this.v = cd,
        this.u = 0,
        this.t = !1,
        this.p = !0,
        this.z = null,
        this.o = new Ng(this),
        this.q = this.o
    }
    Aa = Og.prototype;
    function Yf() {
        Og.call(this),
        this.a = this.b = 0,
        this.c = null,
        this.d = V.createElement('div'),
        this.e = V.createElement('input'),
        this.f = null,
        this.g = !1,
        this.i = this.h = this.j = this.k = null,
        this.m = !1,
        this.n = null,
        this.l = '';
        var a = navigator.platform
          , b = navigator.userAgent
          , c = navigator.vendor;
        this.a = a == 'MacIntel' || a == 'MacPPC' ? 3 : a == 'Win32' || a == 'Win64' ? 5 : a == 'iPhone' || a == 'iPad' ? 1 : ~b.indexOf('Android') ? 0 : ~a.indexOf('Linux') ? 2 : 4,
        this.b = ~b.indexOf('Trident') ? 3 : ~b.indexOf('Edge') ? 1 : ~b.indexOf('Chrome') ? 0 : ~b.indexOf('Firefox') ? 2 : ~c.indexOf('Apple') ? 4 : 5,
        this.m = this.b == 3 || this.b == 1 || this.b == 4,
        this.f = new mg(this),
        this.c = ae(this),
        ce(this),
        de(this),
        be(this),
        this.k = this
    }
    Kf(Yf, Og);
    Aa = Yf.prototype;
    Aa.xa = function() {
        return this
    }
    ;
    Aa.ud = function(a) {
        V.title = a
    }
    ;
    Aa.vd = function(a) {
        jf(this.c.h, a)
    }
    ;
    Aa.jb = function(a) {
        this.d.style.cursor = a ^ 1 ? 'default' : 'text'
    }
    ;
    Aa.Ka = function() {
        return this.c.h
    }
    ;
    Aa.wd = function() {
        var a = this.c.h;
        this.c.fb(),
        Yb(a, this.o),
        this.c.gb(),
        this.e.style.transform = 'translate(' + a.d + 'px, ' + a.e + 'px)'
    }
    ;
    Aa.kb = function(a, b, c, d, e) {
        a || (this.e.style.height = d + 'px'),
        Rd(this.c, a, b, c, d, e)
    }
    ;
    var Md = new Jf
      , V = document
      , ia = window
      , sf = {
        8: 41,
        9: 53,
        13: 45,
        27: 46,
        33: 49,
        34: 48,
        35: 44,
        36: 47,
        37: 38,
        38: 40,
        39: 39,
        40: 37,
        44: 42,
        46: 43,
        59: 51,
        186: 51,
        188: 42,
        190: 50
    }
      , Ff = new fg(function(a) {
        gf(a)
    }
    )
      , ad = new ig(0,0,-1)
      , Be = Ea(new ig(0,0,-1))
      , Me = ['Monaco', 'Menlo', 'Consolas', 'Courier New', 'monospace']
      , vf = ['San Francisco', 'Lucida Grande', 'Segoe UI', 'Arial', 'sans-serif']
      , wf = qa(new qg, 'l', 0, 2)
      , xf = qa(qa(new qg, 'h', 0, 4), 'i', 1, 4)
      , yf = qa(qa(qa(new qg, 'h', 0, 4), 'i', 1, 4), 'k', 1, 4)
      , zf = new rg(0,0,1)
      , Bf = [0, 0, 0, 0, 0, 0, 0, 0]
      , Gf = new Fg({
        1: -1,
        4: -526345,
        6: -5515521,
        0: 1606401983,
        13: -15855873,
        14: -16747520,
        15: -14334390,
        8: 255 << 24,
        16: -10803815,
        18: -5698159,
        11: -7171438,
        20: -14942002,
        21: -10274785,
        22: -3925483,
        23: -12685964
    })
      , Xc = new Fg({
        1: -1,
        2: -30601,
        3: -4352,
        6: -4202497,
        0: 0,
        8: 255 << 24,
        9: 255 << 24,
        10: 255 << 24
    })
      , If = new Kg
      , _c = new Mg(1,0,0)
      , Hf = {
        4: 1,
        5: 4,
        13: 18,
        7: 8,
        14: 8,
        15: 8,
        16: 8,
        17: 8,
        18: 8,
        19: 18,
        11: 8,
        12: 11,
        20: 8,
        21: 8,
        22: 8,
        23: 8
    }
      , Ga = new Dg(0,0,0,0)
      , cd = new Eg(0,0)
      , dd = new eg
      , ef = new eg
      , Rb = new eg
      , Cf = r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(eb(null), 'as', 0), 'break', 0), 'case', 0), 'catch', 0), 'const', 0), 'continue', 0), 'default', 0), 'else', 0), 'finally', 0), 'for', 0), 'if', 0), 'in', 0), 'is', 0), 'return', 0), 'super', 0), 'switch', 0), 'throw', 0), 'try', 0), 'var', 0), 'while', 0)
      , Df = r(r(r(r(eb(null), 'false', 0), 'null', 0), 'self', 0), 'true', 0)
      , ff = r(r(r(r(r(r(r(r(r(r(r(r(eb(null), 'catch', 0), 'class', 0), 'const', 0), 'def', 0), 'enum', 0), 'flags', 0), 'for', 0), 'interface', 0), 'namespace', 0), 'over', 0), 'type', 0), 'var', 0)
      , Ef = r(r(r(r(r(eb(null), 'bool', 0), 'double', 0), 'dynamic', 0), 'int', 0), 'string', 0);
    Zf()
}
)();
