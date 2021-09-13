(this["webpackJsonpmelonme-client"]=this["webpackJsonpmelonme-client"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports={container:"FormPage_container__45HQk",title:"FormPage_title__2hUnC","text-button":"FormPage_text-button__hTY1q","input-container":"FormPage_input-container__tCwFi",input:"FormPage_input__2205a","input-label":"FormPage_input-label__6mV-C","submit-button":"FormPage_submit-button__aQnDG"}},function(e,t,n){e.exports={button:"Buttons_button__1AhQg"}},,function(e,t,n){e.exports={header:"Header_header__2xraF","header-links":"Header_header-links__IHDMk"}},function(e,t,n){e.exports={navMenu:"NavMenu_navMenu__2hzxq","header-links":"NavMenu_header-links__3gpoB"}},,,,function(e,t,n){e.exports={"main-container":"StartPage_main-container__AwotB","image-container":"StartPage_image-container__wdSkj",image:"StartPage_image__4k0iC"}},function(e,t,n){e.exports={header:"MobileHeader_header__3Ml4R","hamburger-menu-button":"MobileHeader_hamburger-menu-button__23LH9","hamburger-menu-icon":"MobileHeader_hamburger-menu-icon__1eZ0h"}},,,function(e,t,n){e.exports={"main-container":"MobileStartPage_main-container__2K1da","image-container":"MobileStartPage_image-container__2bgNI",image:"MobileStartPage_image__3p7sS"}},,function(e,t,n){e.exports={button:"Logo_button__3ssEL",h1:"Logo_h1__3ZJZB"}},function(e,t,n){e.exports={"text-container":"AdText_text-container__2vAn3"}},function(e,t,n){e.exports={"text-container":"MobileAdText_text-container__3w2UJ"}},,function(e,t,n){e.exports={card:"Card_card__3ey-9"}},function(e,t,n){e.exports={wrapper:"wrapper_wrapper__e3OvT"}},,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(18),r=n.n(c),i=(n(38),n(3)),o=n(7),l=n(21),u=n.n(l),j=n(25),d=n.n(j),b=n(4),h=n(28),m=n.n(h),x=n(29),p=n.n(x),O=n(14),g=n.n(O),f=n(0);var _=function(){var e=Object(o.useMediaQuery)({query:"(max-device-width: 948px)"}),t=Object(o.useMediaQuery)({query:"(max-device-width: 550px)"});return Object(f.jsxs)("section",{className:e?p.a["text-container"]:m.a["text-container"],children:[Object(f.jsx)("h3",{style:t?{fontSize:"3rem"}:{},children:"Be Healthier. Eat a Melon."}),Object(f.jsx)("h4",{style:t?{fontSize:"2rem"}:{},children:"Get inspired and inspire others towards a healthier lifestyle."}),Object(f.jsx)(b.b,{to:"/form?show=signup",className:g.a.button,style:t?{fontSize:"1.3rem",padding:"1.1rem",marginBottom:"5rem"}:{},children:"Get Started"})]})},v=n.p+"static/media/melon-startpage-graphic.8eb6591b.png";var y=function(){var e=Object(o.useMediaQuery)({query:"(max-device-width: 948px)"});return Object(f.jsxs)("div",{className:e?d.a["main-container"]:u.a["main-container"],children:[Object(f.jsx)(_,{}),Object(f.jsx)("div",{className:e?d.a["image-container"]:u.a["image-container"],children:Object(f.jsx)("img",{src:v,alt:"",className:u.a.image,style:e?{marginTop:"1.4rem"}:{}})})]})},N=n(10),w=n(31),S=n.n(w);var k=function(e){return Object(f.jsx)("div",{className:S.a.card,children:e.children})},M=n(13),F=n.n(M),P=n(11),C=n(20),L=Object(C.b)({name:"auth",initialState:{token:"",isLoggedIn:!1},reducers:{loginHandler:function(e,t){e.token=t.payload,e.isLoggedIn=!0},logoutHandler:function(e){e.token=null,e.isLoggedIn=!1}}}),T=L.actions,I=T.loginHandler,q=T.logoutHandler,A=L;var E=function(e){var t=Object(i.g)(),n=Object(P.b)(),c=Object(a.useState)(!1),r=Object(N.a)(c,2),o=r[0],l=r[1],u=Object(a.useRef)(),j=Object(a.useRef)();return Object(f.jsxs)(s.a.Fragment,{children:[Object(f.jsx)("h3",{className:e.classes.title,children:"Log In"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=u.current.value,s=j.current.value;l(!0),fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD9HdShUymdkJum4g1taCXYbCQqahNhxcg",{method:"POST",body:JSON.stringify({email:a,password:s,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return l(!1),e.ok?e.json():e.json().then((function(e){throw new Error("Login failed! Please check your email and/or password.")}))})).then((function(e){console.log(e),n(I("temp")),t.push("/explore")})).catch((function(e){alert(e.message)}))},children:[Object(f.jsxs)("div",{className:e.classes["input-container"],children:[Object(f.jsx)("label",{className:e.classes["input-label"],htmlFor:"email",children:"Email"}),Object(f.jsx)("input",{className:e.classes.input,type:"email",required:!0,ref:u})]}),Object(f.jsxs)("div",{className:e.classes["input-container"],children:[Object(f.jsx)("label",{className:e.classes["input-label"],htmlFor:"password",children:"Password"}),Object(f.jsx)("input",{className:e.classes.input,type:"password",required:!0,ref:j})]}),Object(f.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:o?Object(f.jsx)("p",{style:{color:"#243537"},children:"Sending..."}):Object(f.jsx)("button",{className:e.classes["submit-button"],children:"Log In"})})]})]})};var H=function(e){var t=Object(i.g)(),n=Object(a.useRef)(),c=Object(a.useRef)(),r=Object(a.useRef)(),o=Object(a.useState)(!1),l=Object(N.a)(o,2),u=l[0],j=l[1];return Object(f.jsxs)(s.a.Fragment,{children:[Object(f.jsx)("h3",{className:e.classes.title,children:"Sign Up"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.current.value;var a=n.current.value,s=c.current.value;j(!0),fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD9HdShUymdkJum4g1taCXYbCQqahNhxcg",{method:"POST",body:JSON.stringify({email:a,password:s,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return j(!1),e.ok?e.json():e.json().then((function(e){var t="Sign up failed!";throw e&&e.error&&e.error.message&&("INVALID_EMAIL"===e.error.message?t+=" Invalid e-mail address.":"WEAK_PASSWORD : Password should be at least 6 characters"===e.error.message?t+=" Password should be at least 6 characters.":"EMAIL_EXISTS"===e.error.message?t+=" The email address is already in use.":t+=" "+e.error.message),new Error(t)}))})).then((function(e){t.push("/form?show=login"),console.log(e)})).catch((function(e){alert(e.message)}))},children:[Object(f.jsxs)("div",{className:e.classes["input-container"],children:[Object(f.jsx)("label",{className:e.classes["input-label"],htmlFor:"text",children:"Username"}),Object(f.jsx)("input",{className:e.classes.input,type:"text",required:!0,ref:r})]}),Object(f.jsxs)("div",{className:e.classes["input-container"],children:[Object(f.jsx)("label",{className:e.classes["input-label"],htmlFor:"email",children:"Email"}),Object(f.jsx)("input",{className:e.classes.input,type:"email",required:!0,ref:n})]}),Object(f.jsxs)("div",{className:e.classes["input-container"],children:[Object(f.jsx)("label",{className:e.classes["input-label"],htmlFor:"password",children:"Password"}),Object(f.jsx)("input",{className:e.classes.input,type:"password",required:!0,ref:c})]}),Object(f.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:u?Object(f.jsx)("p",{style:{color:"#243537"},children:"Sending..."}):Object(f.jsx)("button",{className:e.classes["submit-button"],children:"Create Account"})})]})]})};var Q=function(){var e=Object(a.useState)(),t=Object(N.a)(e,2),n=t[0],s=t[1];function c(e){s(e)}var r=Object(i.h)(),o=Object(i.g)(),l=new URLSearchParams(r.search);function u(e){o.push("/form?show=".concat(e))}return Object(a.useEffect)((function(){"login"===l.get("show")?c(!0):"signup"===l.get("show")&&c(!1)}),[l]),Object(f.jsx)(k,{children:Object(f.jsxs)("div",{className:F.a.container,children:[n?Object(f.jsx)(E,{classes:F.a}):Object(f.jsx)(H,{classes:F.a}),n?Object(f.jsx)("button",{className:F.a["text-button"],onClick:function(){return u("signup")},children:"New here? Sign up!"}):Object(f.jsx)("button",{className:F.a["text-button"],onClick:function(){return u("login")},children:"Already have an account? Log in!"})]})})};var B=function(){return Object(f.jsxs)(s.a.Fragment,{children:[Object(f.jsx)("h3",{children:"Explore"}),Object(f.jsx)("p",{children:"This page is under construction."})]})};var D=function(){return Object(f.jsxs)(s.a.Fragment,{children:[Object(f.jsx)("h3",{children:"About"}),Object(f.jsx)("p",{children:"This page is under construction."})]})};var R=function(){return Object(f.jsxs)(s.a.Fragment,{children:[Object(f.jsx)("h3",{children:"Contact"}),Object(f.jsx)("p",{children:"This page is under construction."})]})};var z=function(){var e=Object(o.useMediaQuery)({query:"(max-device-width: 948px)"}),t=Object(o.useMediaQuery)({query:"(max-device-width: 550px)"}),n={marginRight:"5rem",paddingTop:"0.7rem",paddingBottom:"0.7rem",textDecoration:"none"};e&&(n=t?{paddingTop:"0.7rem",paddingBottom:"0.7rem",paddingLeft:"1rem",paddingRight:"1rem",fontSize:"1.1rem"}:{paddingTop:"0.6rem",paddingBottom:"0.6rem",fontSize:"1.4rem"});var a=Object(P.c)((function(e){return e.auth.isLoggedIn})),c=Object(P.b)(),r=Object(f.jsx)(b.b,{to:"/form?show=login",className:g.a.button,style:n,children:"Log In"}),i=Object(f.jsx)(b.b,{to:"/welcome",className:g.a.button,style:n,onClick:function(){c(q())},children:"Log Out"});return Object(f.jsx)(s.a.Fragment,{children:a?i:r})},J=n(27),U=n.n(J);var G=function(){var e=Object(o.useMediaQuery)({query:"(max-device-width: 948px)"}),t=Object(o.useMediaQuery)({query:"(max-device-width: 550px)"}),n={};return e&&(n=t?{marginRight:"1rem",fontSize:"1.4rem"}:{fontSize:"1.7rem"}),Object(f.jsx)("button",{className:U.a.button,style:e?{marginLeft:"2rem"}:{},children:Object(f.jsx)(b.b,{to:"/welcome",style:{textDecoration:"none"},children:Object(f.jsx)("h1",{className:U.a.h1,style:n,children:"MelonMe"})})})},W=n(16),X=n.n(W);var Y=function(){return Object(f.jsxs)("header",{className:X.a.header,children:[Object(f.jsx)(G,{}),Object(f.jsxs)("div",{children:[Object(f.jsx)(b.b,{className:X.a["header-links"],to:"/explore",children:"Explore"}),Object(f.jsx)(b.b,{className:X.a["header-links"],to:"/about",children:"About"}),Object(f.jsx)(b.b,{className:X.a["header-links"],to:"/contact",children:"Contact"}),Object(f.jsx)(z,{})]})]})},Z=n(32),K=n.n(Z),V=n(33),$=n(17),ee=n.n($);var te=function(){return Object(f.jsxs)("ul",{className:ee.a.navMenu,children:[Object(f.jsx)("li",{children:Object(f.jsx)(b.b,{className:ee.a["header-links"],to:"/explore",children:"Explore"})}),Object(f.jsx)("li",{children:Object(f.jsx)(b.b,{className:ee.a["header-links"],to:"/about",children:"About"})}),Object(f.jsx)("li",{children:Object(f.jsx)(b.b,{className:ee.a["header-links"],to:"/contact",children:"Contact"})})]})},ne=n(22),ae=n.n(ne);var se=function(){var e=Object(a.useState)(!1),t=Object(N.a)(e,2),n=t[0],c=t[1];return Object(f.jsxs)(s.a.Fragment,{children:[Object(f.jsxs)("header",{className:ae.a.header,children:[Object(f.jsx)(G,{}),Object(f.jsx)(z,{}),Object(f.jsx)("button",{className:ae.a["hamburger-menu-button"],onClick:function(){c(!n)},children:Object(f.jsx)(V.a,{className:ae.a["hamburger-menu-icon"]})})]}),n&&Object(f.jsx)(te,{})]})};var ce=function(){var e=Object(o.useMediaQuery)({query:"(max-device-width: 948px)"});return Object(f.jsxs)("div",{children:[e?Object(f.jsx)(se,{}):Object(f.jsx)(Y,{}),Object(f.jsx)("main",{className:K.a.wrapper,children:Object(f.jsxs)(i.d,{children:[Object(f.jsx)(i.b,{path:"/",exact:!0,children:Object(f.jsx)(i.a,{to:"/welcome"})}),Object(f.jsx)(i.b,{path:"/welcome",children:Object(f.jsx)(y,{})}),Object(f.jsx)(i.b,{path:"/form",children:Object(f.jsx)(Q,{})}),Object(f.jsx)(i.b,{path:"/explore",children:Object(f.jsx)(B,{})}),Object(f.jsx)(i.b,{path:"/about",children:Object(f.jsx)(D,{})}),Object(f.jsx)(i.b,{path:"/contact",children:Object(f.jsx)(R,{})}),Object(f.jsx)(i.b,{path:"*",children:Object(f.jsx)(y,{})})]})})]})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))},ie=Object(C.a)({reducer:{auth:A.reducer}});r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(P.a,{store:ie,children:Object(f.jsx)(b.a,{children:Object(f.jsx)(ce,{})})})}),document.getElementById("root")),re()}],[[45,1,2]]]);
//# sourceMappingURL=main.a463d8ee.chunk.js.map