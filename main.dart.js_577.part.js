self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
b8B(d){return d.VertexMode},
bDQ(d){var x,w,v,u=d.length,t=new Float32Array(u*2)
for(x=0;x<u;++x){w=2*x
v=d[x]
t[w]=v.a
t[w+1]=v.b}return t},
boh(d,e,f,g,h){var x,w,v=null,u=e.length
if(f.length!==u)throw B.i(B.cV('"positions" and "colors" lengths must match.',v))
u=$.bmD()[d.a]
x=A.bDQ(e)
w=B.bjZ(f)
u=new A.Hu(u,x,v,w,v)
u.zN(v,y.U)
return u},
Hu:function Hu(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=null},
avV(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.ap(0,e)
w=f.ap(0,e)
return e.a_(0,w.zG(B.K(x.DN(w)/t,0,1)))},
bt4(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.ap(0,q),o=e.b,n=o.ap(0,q),m=e.d,l=m.ap(0,q),k=p.DN(n),j=n.DN(n),i=p.DN(l),h=l.DN(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[A.avV(d,q,o),A.avV(d,o,x),A.avV(d,x,m),A.avV(d,m,q)]
v=B.bJ("closestOverall")
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.ox()},
bw5(){var x=new B.bs(new Float64Array(16))
x.tW()
return new A.a6Z(x,$.aa())},
biD(d,e){var x,w,v,u,t,s,r=new B.bs(new Float64Array(16))
r.rs(d)
r.C3(r)
x=e.a
w=e.b
v=new B.cq(new Float64Array(3))
v.ui(x,w,0)
v=r.zC(v)
u=e.c
t=new B.cq(new Float64Array(3))
t.ui(u,w,0)
t=r.zC(t)
w=e.d
s=new B.cq(new Float64Array(3))
s.ui(u,w,0)
s=r.zC(s)
u=new B.cq(new Float64Array(3))
u.ui(x,w,0)
u=r.zC(u)
x=new B.cq(new Float64Array(3))
x.rs(v)
w=new B.cq(new Float64Array(3))
w.rs(t)
v=new B.cq(new Float64Array(3))
v.rs(s)
t=new B.cq(new Float64Array(3))
t.rs(u)
return new A.a47(x,w,v,t)},
bi5(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.o,w=0;w<4;++w){v=r[w]
u=A.bt4(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new B.k(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new B.k(x.a,t)}return A.bbq(x)},
bbq(d){return new B.k(B.ajO(C.e.oJ(d.a,9)),B.ajO(C.e.oJ(d.b,9)))},
bz9(d,e){if(d.m(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.a2:C.x},
Jq:function Jq(d,e,f,g,h,i){var _=this
_.e=d
_.r=e
_.as=f
_.ax=g
_.ch=h
_.a=i},
Q8:function Q8(d,e,f,g,h){var _=this
_.d=null
_.e=d
_.f=e
_.r=null
_.w=$
_.z=_.y=_.x=null
_.as=_.Q=0
_.at=null
_.oS$=f
_.a2$=g
_.a=null
_.b=h
_.c=null},
aUc:function aUc(){},
abS:function abS(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a6Z:function a6Z(d,e){var _=this
_.a=d
_.x1$=0
_.x2$=e
_.y1$=_.xr$=0
_.y2$=!1},
EL:function EL(d,e){this.a=d
this.b=e},
UE:function UE(){},
bw6(){return new A.t9(null)},
t9:function t9(d){this.a=d},
Tk:function Tk(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.w=$
_.x=null
_.oS$=g
_.a2$=h
_.a=null
_.b=i
_.c=null},
b1W:function b1W(d,e){this.a=d
this.b=e},
b1X:function b1X(d){this.a=d},
b22:function b22(d){this.a=d},
b21:function b21(d){this.a=d},
b20:function b20(d){this.a=d},
b2_:function b2_(d){this.a=d},
b1Z:function b1Z(d,e){this.a=d
this.b=e},
b1Y:function b1Y(d,e,f){this.a=d
this.b=e
this.c=f},
a8e:function a8e(d,e){this.b=d
this.a=e},
aLc:function aLc(d,e){this.a=d
this.b=e},
Vk:function Vk(){},
b8r(d,e,f,g,h){var x=new A.Wr(e,g,f,B.b([],y.g),h,B.b([],y.h))
x.ajG(d,e,f,g,h)
return x},
Wr:function Wr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
alm:function alm(d){this.a=d},
all:function all(d){this.a=d},
alk:function alk(d){this.a=d},
aLb:function aLb(d){this.a=d
this.c=this.b=null},
aY8:function aY8(d,e){this.a=d
this.b=e},
h_:function h_(d,e,f){this.a=d
this.b=e
this.c=f},
a8f:function a8f(){},
Xw:function Xw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amD:function amD(d){this.a=d},
amC:function amC(d,e){this.a=d
this.b=e},
yT:function yT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aMZ:function aMZ(d){this.a=d},
a_B:function a_B(d,e,f){this.c=d
this.d=e
this.a=f},
a47:function a47(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bwk(d,e,f){var x=A.boh(d,e,f,null,null)
return x}},B,C,D,E,J,F
A=a.updateHolder(c[86],A)
B=c[0]
C=c[2]
D=c[126]
E=c[115]
J=c[1]
F=c[98]
A.Hu.prototype={
yA(){var x=this
return B.bg($.cE.rW(),"MakeVertices",[x.b,x.c,x.d,x.e,x.f])},
An(){return this.yA()},
wR(d){var x=this.a
if(x!=null)x.delete()}}
A.Jq.prototype={
F(){var x=null,w=y.z
return new A.Q8(new B.ad(x,w),new B.ad(x,w),x,x,C.j)}}
A.Q8.prototype={
gL2(){var x=$.P.G$.z.i(0,this.e).gI()
x.toString
x=y.x.a(x).k3
x.toString
return this.a.e.FR(new B.C(0,0,0+x.a,0+x.b))},
gMJ(){var x=$.P.G$.z.i(0,this.f).gI()
x.toString
x=y.x.a(x).k3
return new B.C(0,0,0+x.a,0+x.b)},
LV(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.m(0,C.o)){x=new B.bs(new Float64Array(16))
x.rs(a0)
return x}d.a.toString
w=new B.bs(new Float64Array(16))
w.rs(a0)
w.qZ(0,a1.a,a1.b)
v=A.biD(w,d.gMJ())
x=d.gL2()
if(x.ga9S(x))return w
x=d.gL2()
u=d.as
t=new B.bs(new Float64Array(16))
t.tW()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.qZ(0,q/2,o/2)
t.P3(u)
t.qZ(0,-q/2,-o/2)
u=new B.cq(new Float64Array(3))
u.ui(r,x,0)
u=t.zC(u)
q=new B.cq(new Float64Array(3))
q.ui(s,x,0)
q=t.zC(q)
x=new B.cq(new Float64Array(3))
x.ui(s,p,0)
x=t.zC(x)
s=new B.cq(new Float64Array(3))
s.ui(r,p,0)
s=t.zC(s)
r=new Float64Array(3)
new B.cq(r).rs(u)
u=new Float64Array(3)
new B.cq(u).rs(q)
q=new Float64Array(3)
new B.cq(q).rs(x)
x=new Float64Array(3)
new B.cq(x).rs(s)
s=r[0]
p=u[0]
o=q[0]
n=x[0]
m=Math.min(s,Math.min(p,Math.min(o,n)))
r=r[1]
u=u[1]
q=q[1]
x=x[1]
l=Math.min(r,Math.min(u,Math.min(q,x)))
k=Math.max(s,Math.max(p,Math.max(o,n)))
j=Math.max(r,Math.max(u,Math.max(q,x)))
x=new B.cq(new Float64Array(3))
x.ui(m,l,0)
u=new B.cq(new Float64Array(3))
u.ui(k,l,0)
s=new B.cq(new Float64Array(3))
s.ui(k,j,0)
r=new B.cq(new Float64Array(3))
r.ui(m,j,0)
q=new B.cq(new Float64Array(3))
q.rs(x)
x=new B.cq(new Float64Array(3))
x.rs(u)
u=new B.cq(new Float64Array(3))
u.rs(s)
s=new B.cq(new Float64Array(3))
s.rs(r)
i=new A.a47(q,x,u,s)
h=A.bi5(i,v)
if(h.m(0,C.o))return w
x=w.PB().a
u=x[0]
x=x[1]
g=a0.Kg()
u-=h.a*g
x-=h.b*g
f=new B.bs(new Float64Array(16))
f.rs(a0)
s=new B.cq(new Float64Array(3))
s.ui(u,x,0)
f.YY(s)
e=A.bi5(i,A.biD(f,d.gMJ()))
if(e.m(0,C.o))return f
s=e.a===0
if(!s&&e.b!==0){x=new B.bs(new Float64Array(16))
x.rs(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new B.bs(new Float64Array(16))
s.rs(a0)
r=new B.cq(new Float64Array(3))
r.ui(u,x,0)
s.YY(r)
return s},
a39(d,e){var x,w,v,u,t,s,r=this
if(e===1){x=new B.bs(new Float64Array(16))
x.rs(d)
return x}w=r.d.a.Kg()
x=r.gMJ()
v=r.gL2()
u=r.gMJ()
t=r.gL2()
s=B.K(Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b))),r.a.as,2.5)
x=new B.bs(new Float64Array(16))
x.rs(d)
x.rC(0,s/w)
return x},
awj(d,e,f){var x,w,v,u
if(e===0){x=new B.bs(new Float64Array(16))
x.rs(d)
return x}w=this.d.zA(f)
x=new B.bs(new Float64Array(16))
x.rs(d)
v=w.a
u=w.b
x.qZ(0,v,u)
x.P3(-e)
x.qZ(0,-v,-u)
return x},
RJ(d){switch(d){case D.awN:return!1
case D.tN:this.a.toString
return!0
case D.lO:case null:this.a.toString
return!0}},
a1E(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.tN
else return D.lO},
avx(d){var x,w,v=this
v.a.ax.$1(d)
x=v.w
x===$&&B.c()
w=x.r
if(w!=null&&w.a!=null){x.tG(0)
x=v.w
x.sl(0,x.a)
x=v.r
if(x!=null)x.a.B(0,v.gM5())
v.r=null}v.x=v.at=null
v.z=v.d.a.Kg()
v.y=v.d.zA(d.b)
v.Q=v.as},
axy(d){var x,w,v,u,t,s,r=this,q=r.d.a.Kg(),p=d.c,o=r.d.zA(p),n=r.at
if(n===D.lO)n=r.at=r.a1E(d)
else if(n==null){n=r.a1E(d)
r.at=n}if(!r.RJ(n)){r.a.toString
return}switch(r.at.a){case 1:n=r.z
n.toString
x=r.d
x.sl(0,r.a39(x.a,n*d.d/q))
w=r.d.zA(p)
n=r.d
x=n.a
v=r.y
v.toString
n.sl(0,r.LV(x,w.ap(0,v)))
u=r.d.zA(p)
p=r.y
p.toString
if(!A.bbq(p).m(0,A.bbq(u)))r.y=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}x=r.Q
x.toString
t=x+n
n=r.d
n.sl(0,r.awj(n.a,r.as-t,p))
r.as=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.x==null){n=r.y
n.toString
r.x=A.bz9(n,o)}n=r.y
n.toString
s=o.ap(0,n)
n=r.d
n.sl(0,r.LV(n.a,s))
r.y=r.d.zA(p)
break}r.a.toString},
axu(d){var x,w,v,u,t,s,r,q,p=this
p.a.toString
p.y=p.Q=p.z=null
x=p.r
if(x!=null)x.a.B(0,p.gM5())
x=p.w
x===$&&B.c()
x.sl(0,x.a)
if(!p.RJ(p.at)){p.x=null
return}if(p.at!==D.lO||d.a.a.gtS()<50){p.x=null
return}x=p.d.a.PB().a
w=x[0]
x=x[1]
v=d.a.a
u=Math.log(0.0000135)
t=Math.log(0.0000135)
s=Math.log(10/v.gtS())
r=Math.log(135e-9)
u=new B.AX(0.0000135,u,w,v.a,C.cw).gIT()
v=new B.AX(0.0000135,t,x,v.b,C.cw).gIT()
t=y.L
q=B.aK(C.dS,p.w,null)
p.r=new B.F(q,new B.a7(new B.k(w,x),new B.k(u,v),t),t.h("F<Y.T>"))
p.w.e=B.dn(0,0,0,C.e.ow(s/r*1000),0,0)
q.a5(0,p.gM5())
p.w.oT(0)},
avz(d){var x,w,v,u,t,s,r=this
if(y.C.b(d)){if(d.gGE().b===0)return
x=r.a.ax
w=d.grd(d)
v=d.gvy()
x.$1(new B.CD(w,v,0))
x=d.gGE()
r.a.toString
u=Math.exp(-x.b/200)
if(!r.RJ(D.tN)){r.a.toString
return}x=r.d
x.toString
t=x.zA(d.gvy())
x=r.d
x.sl(0,r.a39(x.a,u))
x=r.d
x.toString
s=x.zA(d.gvy())
x=r.d
x.sl(0,r.LV(x.a,s.ap(0,t)))
r.a.toString}},
awW(){var x,w,v,u,t=this,s=t.w
s===$&&B.c()
s=s.r
if(!(s!=null&&s.a!=null)){t.x=null
s=t.r
if(s!=null)s.a.B(0,t.gM5())
t.r=null
s=t.w
s.sl(0,s.a)
return}s=t.d.a.PB().a
x=s[0]
s=s[1]
w=t.d.zA(new B.k(x,s))
s=t.d
s.toString
x=t.r
v=x.b
x=x.a
u=s.zA(v.O(0,x.gl(x))).ap(0,w)
x=t.d
x.sl(0,t.LV(x.a,u))},
axM(){this.D(new A.aUc())},
a3(){var x,w=this,v=null
w.ac()
x=w.a.ch
w.d=x
x.a5(0,w.gSL())
w.w=B.aQ(C.t,v,v,v,1,v,w)},
ab(d){var x,w,v=this
v.am(d)
x=v.a
if(x.ch!==d.ch){x=v.gSL()
v.d.B(0,x)
w=v.a.ch
v.d=w
w.a5(0,x)}},
k(){var x=this,w=x.w
w===$&&B.c()
w.k()
x.d.B(0,x.gSL())
x.a.toString
x.aiD()},
n(d){var x,w,v=this,u=null,t=v.a
t.toString
x=v.d.a
w=new A.abS(t.r,v.e,C.q,!0,x,u)
return B.JX(C.e7,B.cu(C.aJ,w,C.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,v.gaxt(),v.gavw(),v.gaxx(),u,u,u,u,u,u,u),v.f,u,u,u,v.gavy(),u)}}
A.abS.prototype={
n(d){var x=this,w=B.lI(null,new B.fD(x.c,x.d),x.r,!0)
return B.iI(w,x.e,null)}}
A.a6Z.prototype={
zA(d){var x=this.a,w=new B.bs(new Float64Array(16))
if(w.C3(x)===0)B.Q(B.ig(x,"other","Matrix cannot be inverted"))
x=new B.cq(new Float64Array(3))
x.ui(d.a,d.b,0)
x=w.zC(x).a
return new B.k(x[0],x[1])}}
A.EL.prototype={
j(d){return"_GestureType."+this.b}}
A.UE.prototype={
ps(){this.qp()
this.pT()
this.rQ()},
k(){var x=this,w=x.a2$
if(w!=null)w.B(0,x.grO())
x.a2$=null
x.V()}}
A.t9.prototype={
F(){var x=null
return new A.Tk(new B.ad(x,y.z),A.b8r(x,8,1,16,x),A.bw5(),x,x,C.j)}}
A.Tk.prototype={
awX(){var x=this,w=x.r,v=w.b
w=w.a
x.f.sl(0,v.O(0,w.gl(w)))
w=x.w
w===$&&B.c()
w=w.r
if(!(w!=null&&w.a!=null)){w=x.r
if(w!=null)w.a.B(0,x.gSG())
x.r=null
w=x.w
w.sl(0,w.a)}},
axw(d){var x,w=this,v=w.w
v===$&&B.c()
x=v.Q
x===$&&B.c()
if(x===C.ai){v.tG(0)
v=w.r
if(v!=null)v.a.B(0,w.gSG())
w.r=null
v=w.w
v.sl(0,v.a)}},
axJ(d){var x=this,w=x.f.zA(d.a.ap(0,B.ds(y.x.a($.P.G$.z.i(0,x.d).gI()).rM(0,null),C.o)))
x.D(new A.b1W(x,x.e.aLS(w)))},
a3(){var x=null
this.ac()
this.w=B.aQ(C.t,x,x,x,1,x,this)},
n(d){var x=null,w=B.t(d)
return B.bS(B.cs(x,x,!1,x,x,x,1,x,x,x,!1,x,x,x,x,x,!0,x,x,x,x,x,x,B.r(B.u(d,C.h,y.s).gbd(),x,x,x,x,x,x,x,x),x,x,x,1,x),w.ay.b,B.S(x,new B.cW(new A.b1X(this),x),C.d,D.vm,x,x,x,x,x,x,x,x,x,x),x,x,!1,x,x,x,B.b([this.gaMB(),this.gaHe()],y.p),x)},
gaMB(){var x=null,w=this.c
w.toString
return B.c0(B.t(w).ay.cy,!0,x,D.a3R,x,x,new A.b22(this),C.J,x,"Reset")},
gaHe(){var x=null,w=this.c
w.toString
return B.c0(B.t(w).ay.cy,!0,x,E.nW,x,x,new A.b20(this),C.J,x,"Edit")},
k(){var x=this.w
x===$&&B.c()
x.k()
this.ajy()}}
A.a8e.prototype={
aD(d,e){this.b.ad(0,new A.aLc(this,d))},
us(d){return d.b!==this.b}}
A.Vk.prototype={
ps(){this.qp()
this.pT()
this.rQ()},
k(){var x=this,w=x.a2$
if(w!=null)w.B(0,x.grO())
x.a2$=null
x.V()}}
A.Wr.prototype={
ajG(d,e,f,g,h){var x,w,v,u,t,s=this,r=s.b,q=-r,p=r-s.c,o=Math.sqrt(3)/2*p
r=0+o
x=q+0.5*p
w=q+1.5*p
v=q+2*p
u=0-o
C.b.a9(s.d,B.b([new B.k(0,q),new B.k(r,x),new B.k(r,w),new B.k(r,w),new B.k(0,v),new B.k(0,v),new B.k(u,w),new B.k(u,w),new B.k(u,x)],y.g))
if(d!=null)C.b.a9(s.f,d)
else{t=s.a1J(null)
for(r=s.f;t!=null;){r.push(t)
t=s.a1J(t)}}},
goB(d){return new A.aLb(this.f)},
a1N(d){var x=this.a,w=-x
if(d<=0)w-=d
else x-=d
return new A.aY8(w,x)},
a1J(d){var x,w,v,u=this
if(d==null)return new A.h_(-u.a,0,D.hF)
x=d.a
w=u.a1N(x)
if(x>=u.a&&d.b>=w.b)return null
v=d.b
if(v>=w.b){++x
return new A.h_(x,u.a1N(x).a,D.hF)}return new A.h_(x,v+1,D.hF)},
gut(d){var x=this.b,w=this.a
return new B.J((w*2+1)*(Math.sqrt(3)/2*x)*2,2*(x+w*1.5*x))},
aLS(d){var x=this,w=x.gut(x),v=d.b-x.gut(x).b/2,u=x.b,t=new A.h_(C.e.ow((Math.sqrt(3)/3*(d.a-w.a/2)-0.3333333333333333*v)/u),C.e.ow(0.6666666666666666*v/u),D.hF)
w=D.Ol.ga8d().a
v=t.ga8d().a
if(C.e.rG(Math.abs(w[0]-v[0])+Math.abs(w[1]-v[1])+Math.abs(w[2]-v[2]),2)>x.a)return null
return C.b.FL(x.f,new A.alm(t))},
act(d,e){var x=this,w=Math.sqrt(3),v=x.b,u=d.a,t=Math.sqrt(3),s=d.b,r=x.d,q=B.ag(r).h("aE<1,k>"),p=B.aA(new B.aE(r,new A.all(new B.rn(w*v*u+t/2*v*s+x.gut(x).a/2,1.5*v*s+x.gut(x).b/2,y.O)),q),!0,q.h("bN.E"))
return A.bwk(C.awc,p,B.bL(p.length,e,!1,y.G))},
aGD(d){var x=this
if(J.l(x.e,d))return x
return A.b8r(x.f,x.a,x.c,x.b,d)},
aGC(d,e){var x,w,v=this,u=new A.h_(d.a,d.b,e),t=v.f,s=C.b.Ob(t,new A.alk(d))
if(J.l(v.rl(0,s),d)&&d.c.m(0,e))return v
x=B.hn(t,!0,y.X)
x[s]=u
w=v.e
if(d.m(0,w))w=u
return A.b8r(x,v.a,v.c,v.b,w)},
$iH:1}
A.aLb.prototype={
C(){var x,w=this,v=w.b
v=v==null?w.b=0:w.b=v+1
x=w.a
if(v>=x.length){w.c=null
return!1}w.c=x[v]
return!0},
gW(d){return this.c}}
A.aY8.prototype={}
A.h_.prototype={
j(d){return"BoardPoint("+this.a+", "+this.b+", "+this.c.j(0)+")"},
m(d,e){if(e==null)return!1
if(J.at(e)!==B.a_(this))return!1
return e instanceof A.h_&&e.a===this.a&&e.b===this.b},
gM(d){return B.af(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
ga8d(){var x=this.a,w=this.b,v=new B.cq(new Float64Array(3))
v.ui(x,w,-x-w)
return v}}
A.a8f.prototype={}
A.Xw.prototype={
n(d){var x=this.c,w=B.f(x).h("l9<1,yT>")
return B.as(B.aA(new B.l9(x,new A.amD(this),w),!0,w.h("H.E")),C.l,null,C.a_,C.i,null)}}
A.yT.prototype={
n(d){var x=null,w=!this.d?x:D.a36
return B.S(x,B.bfM(!1,w,C.d,C.Pc,0,2,!0,this.c,x,4,x,8,x,4,x,x,new A.aMZ(this),C.dE,x,x),C.d,x,x,x,x,60,x,x,D.a0n,x,x,60)}}
A.a_B.prototype={
n(d){var x=null,w=B.dJ([C.n,C.js,C.mK,C.vt,D.vm],y.G),v=this.c
return B.a8(B.b([B.r(""+v.a+", "+v.b,x,x,x,x,C.lD,C.tb,x,x),new A.Xw(w,v.c,this.d,x)],y.p),C.aD,x,C.k,C.i,C.m)}}
A.a47.prototype={}
var z=a.updateTypes(["~()","~(CD)","L(h_)","~(M2)","~(CC)","~(ki)","~(j2)","~(h_?)","yT(j)"])
A.aUc.prototype={
$0(){},
$S:0}
A.b1W.prototype={
$0(){var x=this.a
x.e=x.e.aGD(this.b)},
$S:0}
A.b1X.prototype={
$2(d,e){var x,w,v,u=null,t=e.b,s=e.d,r=this.a
if(r.x==null){x=new B.bs(new Float64Array(16))
x.tW()
w=r.e
w=w.gut(w)
v=r.e
x.qZ(0,t/2-w.a/2,s/2-v.gut(v).b/2)
r.x=x
r.f.sl(0,x)}x=r.e
x=x.gut(x)
return B.iI(B.dt(B.cu(C.aJ,new A.Jq(new B.X(t,s,t,s),B.bad(B.h0(u,u,u,new A.a8e(r.e,u),x)),0.01,r.gaxv(),r.f,r.d),C.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,r.gaxI(),u,u,u),C.af,u,u,u,u),C.q,u)},
$S:763}
A.b22.prototype={
$0(){var x=this.a
x.D(new A.b21(x))},
$S:0}
A.b21.prototype={
$0(){var x,w,v=this.a,u=v.w
u===$&&B.c()
u.sl(0,u.a)
u=v.f.a
x=v.x
w=v.w
v.r=new B.F(w,new B.oj(u,x),y.d.h("F<Y.T>"))
w.e=C.hM
w.a5(0,v.gSG())
v.w.oT(0)},
$S:0}
A.b20.prototype={
$0(){var x,w=this.a
if(w.e.e==null)return
x=w.c
x.toString
F.bbO(new A.b2_(w),x,y.l)},
$S:0}
A.b2_.prototype={
$1(d){var x=null,w=this.a,v=w.e.e
v.toString
return B.S(x,new A.a_B(v,new A.b1Z(w,d),x),C.d,x,x,x,x,150,x,x,C.hO,x,x,1/0)},
$S:764}
A.b1Z.prototype={
$1(d){var x=this.a
x.D(new A.b1Y(x,d,this.b))},
$S:765}
A.b1Y.prototype={
$0(){var x=this.a,w=x.e,v=w.e
v.toString
x.e=w.aGC(v,this.b)
B.bw(this.c,!1).tx(null)},
$S:0}
A.aLc.prototype={
$1(d){var x=d.c,w=this.a.b,v=w.act(d,B.V(C.e.ow(255*(J.l(w.e,d)?0.7:1)),x.gl(x)>>>16&255,x.gl(x)>>>8&255,x.gl(x)&255))
x=B.aP()
this.b.IJ(v,C.Oi,x)},
$S:z+7}
A.alm.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.all.prototype={
$1(d){var x=this.a
return new B.k(d.a+x.a,d.b+x.b)},
$S:237}
A.alk.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.amD.prototype={
$1(d){var x=this.a
return new A.yT(d,d.m(0,x.d),new A.amC(x,d),null)},
$S:z+8}
A.amC.prototype={
$0(){this.a.e.$1(this.b)},
$S:14}
A.aMZ.prototype={
$0(){this.a.e.$0()},
$S:0};(function aliases(){var x=A.UE.prototype
x.aiD=x.k
x=A.Vk.prototype
x.ajy=x.k})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=A.Q8.prototype,"gavw","avx",1)
x(v,"gaxx","axy",3)
x(v,"gaxt","axu",4)
x(v,"gavy","avz",5)
w(v,"gM5","awW",0)
w(v,"gSL","axM",0)
w(v=A.Tk.prototype,"gSG","awX",0)
x(v,"gaxv","axw",1)
x(v,"gaxI","axJ",6)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Hu,B.hp)
u(B.w,[A.Jq,A.t9])
u(B.D,[A.UE,A.Vk])
v(A.Q8,A.UE)
u(B.hf,[A.aUc,A.b1W,A.b22,A.b21,A.b20,A.b1Y,A.amC,A.aMZ])
u(B.q,[A.abS,A.Xw,A.yT,A.a_B])
v(A.a6Z,B.bY)
v(A.EL,B.ph)
v(A.Tk,A.Vk)
v(A.b1X,B.hO)
u(B.de,[A.b2_,A.b1Z,A.aLc,A.alm,A.all,A.alk,A.amD])
v(A.a8e,B.nL)
u(B.a1,[A.a8f,A.aY8,A.h_,A.a47])
v(A.Wr,A.a8f)
v(A.aLb,B.Jv)
x(A.UE,B.cp)
x(A.Vk,B.cp)
w(A.a8f,B.ju)})()
B.aW(b.typeUniverse,JSON.parse('{"Hu":{"hp":["rY"],"fe":["rY"]},"Jq":{"w":[],"d":[]},"Q8":{"D":["Jq"]},"abS":{"q":[],"d":[]},"a6Z":{"bY":["bs"],"ab":[]},"EL":{"W":[]},"t9":{"w":[],"d":[]},"Tk":{"D":["t9"]},"a8e":{"ab":[]},"Wr":{"ju":["h_?"],"H":["h_?"],"ju.E":"h_?"},"yT":{"q":[],"d":[]},"Xw":{"q":[],"d":[]},"a_B":{"q":[],"d":[]}}'))
var y=(function rtii(){var x=B.a4
return{X:x("h_"),G:x("j"),s:x("z"),h:x("A<h_>"),g:x("A<k>"),p:x("A<d>"),z:x("ad<D<w>>"),d:x("oj"),O:x("rn<x>"),C:x("rq"),x:x("y"),U:x("rY"),L:x("a7<k>"),l:x("d")}})();(function constants(){D.hF=new B.j(4291677645)
D.Ol=new A.h_(0,0,D.hF)
D.vm=new B.j(4280756007)
D.a0n=new B.X(2,0,2,0)
D.a1M=new B.aD(57686,"MaterialIcons",null,!1)
D.a36=new B.bA(D.a1M,null,C.n,null,null)
D.a2r=new B.aD(58659,"MaterialIcons",null,!1)
D.a3R=new B.bA(D.a2r,null,null,null,null)
D.lO=new A.EL(0,"pan")
D.tN=new A.EL(1,"scale")
D.awN=new A.EL(2,"rotate")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bIC","bmD",()=>B.b([B.b_(A.b8B(B.aZ()),"Triangles"),B.b_(A.b8B(B.aZ()),"TrianglesStrip"),B.b_(A.b8B(B.aZ()),"TriangleFan")],B.a4("A<m>")))})()}
$__dart_deferred_initializers__["DEE6qgHtMqUxxgwhfiIxHfcIgtY="] = $__dart_deferred_initializers__.current
