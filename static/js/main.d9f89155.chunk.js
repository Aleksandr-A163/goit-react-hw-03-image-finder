(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,a,t){e.exports={imageGalleryItem__image:"ImageGalleryItem_imageGalleryItem__image__2FWrp",imageGalleryItem:"ImageGalleryItem_imageGalleryItem__1YFHt"}},14:function(e,a,t){e.exports={Overlay:"Modal_Overlay__1XBQF",Modal:"Modal_Modal__1-Z_R"}},26:function(e,a,t){e.exports={Button:"Button_Button__31YQl"}},28:function(e,a,t){e.exports={Loader:"Loader_Loader__3Corn"}},29:function(e,a,t){e.exports={imageGallery:"ImageGallery_imageGallery__3nZV6"}},30:function(e,a,t){},36:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(4),c=t.n(o),i=(t(36),t(15)),l=t(16),s=t(5),m=t(6),u=t(8),h=t(7),d=t(25),g=t.n(d),p=function(e,a){return g.a.get("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(a,"&key=").concat("23515062-7934c938ce0e5818a24acf627","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},b=t(26),j=t.n(b),f=t(1),O=function(e){var a=e.onClick;return Object(f.jsx)("button",{type:"button",className:j.a.Button,onClick:a,children:"Load more"})},_=t(27),y=t.n(_),S=(t(76),t(28)),v=t.n(S),x=function(){return Object(f.jsx)("div",{className:v.a.Loader,children:Object(f.jsx)(y.a,{type:"ThreeDots",color:"pink",height:100,width:100,timeout:1e4})})},I=t(29),C=t.n(I),k=t(13),w=t.n(k);var L=function(e){var a=e.images,t=e.onOpenModal;return Object(f.jsx)(f.Fragment,{children:a.map((function(e){var a=e.id,n=e.webformatURL,r=e.largeImageURL;return Object(f.jsx)("li",{className:w.a.imageGalleryItem,children:Object(f.jsx)("img",{src:n,alt:"",className:w.a.imageGalleryItem__image,onClick:function(){return t({largeImageURL:r})}})},a)}))})};function M(e){var a=e.images,t=e.onOpenModal;return Object(f.jsx)("ul",{className:C.a.imageGallery,children:Object(f.jsx)(L,{images:a,onOpenModal:t})})}var F=t(31),N=t(9),B=t.n(N),G=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={name:""},e.handleChange=function(a){e.setState({name:a.currentTarget.value.toLowerCase()})},e.handleSubmit=function(a){(a.preventDefault(),""!==e.state.name.trim())?((0,e.props.onSubmit)(e.state.name),e.setState({name:" "})):F.a.error("Please enter the name of the request")},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state.name;return Object(f.jsx)("header",{className:B.a.Searchbar,children:Object(f.jsxs)("form",{className:B.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(f.jsx)("button",{type:"submit",className:B.a.SearchFormButton}),Object(f.jsx)("input",{className:B.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleChange})]})})}}]),t}(n.Component),D=G,U=t(14),E=t.n(U),R=document.querySelector("#modal-root"),A=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).handleKeyDown=function(a){"Escape"===a.code&&e.props.onClose()},e.handleBackdropClick=function(a){a.currentTarget===a.target&&e.props.onClose()},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(f.jsx)("div",{className:E.a.Overlay,onClick:this.handleBackdropClick,children:Object(f.jsx)("div",{className:E.a.Modal,children:Object(f.jsx)("img",{src:this.props.imageModal,alt:""})})}),R)}}]),t}(n.Component),q=A,J=t(30),K=t.n(J),P={page:1,images:[]},T=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state=Object(l.a)(Object(l.a)({},P),{},{isLoading:!1,name:"",largeImage:"",showModal:!1,error:null}),e.onChangeName=function(a){e.setState({name:a,page:1,images:[]})},e.clickLoadMore=function(a){e.setState({loading:!0}),e.searchImage().then((function(e){return{page:e.page+1}})).catch((function(a){return e.setState({error:a})})).finally((function(){return e.setState({isLoading:!1})}))},e.modalClose=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onClickLargeImage=function(a){e.setState({largeImage:a}),e.modalClose()},e.searchImage=function(){var a=e.state,t=a.name,n=a.page;return e.setState({loading:!0}),p(t,n).then((function(a){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(a)),page:e.page+1}}))}))},e}return Object(m.a)(t,[{key:"componentDidUpdate",value:function(e,a){var t=this;this.state.name!==a.name&&this.searchImage().catch((function(e){return t.setState({error:e})})).finally((function(){return t.setState({isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.showModal,n=e.isLoading,r=e.largeImage;return Object(f.jsxs)("div",{className:K.a.App,children:[Object(f.jsx)(D,{onSubmit:this.onChangeName}),n&&Object(f.jsx)(x,{}),Object(f.jsx)(M,{images:a,onOpenModal:this.onClickLargeImage}),a.length>=12&&Object(f.jsx)(O,{onClick:this.clickLoadMore}),t&&Object(f.jsx)(q,{onClose:this.modalClose,imageModal:r.largeImageURL})]})}}]),t}(n.Component),Y=T;c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(Y,{})}),document.getElementById("root"))},9:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__3lYVd",SearchForm:"Searchbar_SearchForm__3xkXw",SearchFormButton:"Searchbar_SearchFormButton__1fCJS",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1Ia4P",SearchFormInput:"Searchbar_SearchFormInput__E2DbI"}}},[[77,1,2]]]);
//# sourceMappingURL=main.d9f89155.chunk.js.map