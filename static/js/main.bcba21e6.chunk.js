(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__gboaM",galleryItem:"ImageGallery_galleryItem__zZSAU"}},13:function(e,t,a){e.exports={overlay:"Modal_overlay__2GjdW",modal:"Modal_modal__P3_V5"}},25:function(e,t,a){e.exports={image:"ImageGalleryItem_image__2xsbt"}},26:function(e,t,a){e.exports={btn:"Button_btn__3xaJM"}},33:function(e,t,a){},5:function(e,t,a){e.exports={searchBar:"Searchbar_searchBar__3w0z0",searchForm:"Searchbar_searchForm__23jwf",btn:"Searchbar_btn__37Gab",btnLabel:"Searchbar_btnLabel__2RFBj",input:"Searchbar_input__2C4aO"}},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),s=(a(31),a(32),a(33),a(10)),l=a(4),i=a(24),u=a.n(i),b=a(5),j=a.n(b),m=a(1);var d=function(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(l.a)(a,2),c=r[0],o=r[1];return Object(m.jsx)("header",{className:j.a.searchBar,children:Object(m.jsxs)("form",{className:j.a.searchForm,onSubmit:function(e){e.preventDefault(),t(c)},children:[Object(m.jsx)("button",{type:"submit",className:j.a.btn,children:Object(m.jsx)("span",{className:j.a.btnLabel,children:"Search"})}),Object(m.jsx)("input",{className:j.a.input,type:"text",autoComplete:"off",autoFocus:!0,required:!0,placeholder:"Search images and photos",value:c,onChange:function(e){return o(e.target.value)}})]})})},h=a(25),f=a.n(h);var g=function(e){var t=e.src,a=e.photoDescr,n=e.onModalOpen,r=e.largeImageUrl;return Object(m.jsx)("img",{className:f.a.image,src:t,alt:a,onClick:function(){return n(r)}})},O=a(12),p=a.n(O);var _=function(e){var t=e.photos,a=e.onModalOpen;return Object(m.jsx)("ul",{className:p.a.gallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,c=e.tags;return Object(m.jsx)("li",{className:p.a.galleryItem,children:Object(m.jsx)(g,{src:n,photoDescr:c,onModalOpen:a,largeImageUrl:r})},t)}))})},v=a(26),x=a.n(v);var y=function(e){var t=e.onClick;return Object(m.jsx)("button",{className:x.a.btn,type:"button",onClick:t,children:"Load more"})},S=a(13),w=a.n(S);var I=function(e){var t=e.largeImageUrl,a=e.onModalClose;return Object(n.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]),Object(m.jsx)("div",{className:w.a.overlay,onClick:function(e){e.target===e.currentTarget&&a()},children:Object(m.jsx)("div",{className:w.a.modal,children:Object(m.jsx)("img",{src:t,alt:""})})})},L=a(14),U=a.n(L);U.a.defaults.baseURL="https://pixabay.com/api/";var k=function(e,t){var a=new URLSearchParams({key:"23262939-6c0fd5a3da3fb9e3fdc7add54",q:e,page:t,per_page:12,orientation:"horizontal",image_type:"photo"});return U.a.get("?".concat(a)).then((function(e){return e.data.hits.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags}}))}))};var N=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(l.a)(c,2),i=o[0],b=o[1],j=Object(n.useState)(!1),h=Object(l.a)(j,2),f=h[0],g=h[1],O=Object(n.useState)(""),p=Object(l.a)(O,2),v=p[0],x=p[1],S=Object(n.useState)(""),w=Object(l.a)(S,2),L=w[0],U=w[1],N=Object(n.useState)(1),M=Object(l.a)(N,2),C=M[0],F=M[1];Object(n.useEffect)((function(){L&&(R(),k(L,C).then((function(e){if(C>1)return r((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e))})),void window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});r(Object(s.a)(e))})).catch((function(e){return console.log(e)})).finally((function(){return R()})))}),[C,L]);var R=function(){return b((function(e){return!e}))};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d,{onSubmit:function(e){U(e),F(1)}}),Object(m.jsx)(_,{photos:a,onModalOpen:function(e){g(!0),x(e)}}),Boolean(a.length)&&!i&&Object(m.jsx)(y,{onClick:function(){return F((function(e){return e+1}))}}),Object(m.jsx)(u.a,{className:"loader",visible:i,type:"ThreeDots",color:"#00BFFF",height:80,width:80}),f&&Object(m.jsx)(I,{largeImageUrl:v,onModalClose:function(){return g(!1)}})]})};o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.bcba21e6.chunk.js.map