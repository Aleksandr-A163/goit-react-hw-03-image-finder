(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={imageGalleryItem__image:"ImageGalleryItem_imageGalleryItem__image__2FWrp",imageGalleryItem:"ImageGalleryItem_imageGalleryItem__1YFHt"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1XBQF",Modal:"Modal_Modal__1-Z_R"}},26:function(e,t,a){e.exports={Button:"Button_Button__31YQl"}},28:function(e,t,a){e.exports={Loader:"Loader_Loader__3Corn"}},29:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__3nZV6"}},30:function(e,t,a){},36:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=(a(36),a(15)),l=a(16),s=a(5),m=a(6),u=a(8),h=a(7),g=a(25),d=a.n(g),p=function(e,t){return d.a.get("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("23515062-7934c938ce0e5818a24acf627","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},b=a(26),f=a.n(b),j=a(1),O=function(e){var t=e.onClick;return Object(j.jsx)("button",{type:"button",className:f.a.Button,onClick:t,children:"Load more"})},_=a(27),y=a.n(_),v=(a(76),a(28)),S=a.n(v),x=function(){return Object(j.jsx)("div",{className:S.a.Loader,children:Object(j.jsx)(y.a,{type:"Puff",color:"#00BFFF",height:80,width:80,timeout:1e4})})},I=a(29),w=a.n(I),C=a(13),L=a.n(C),k=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.onOpenModal;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("li",{className:L.a.imageGalleryItem,children:Object(j.jsx)("img",{src:t,alt:"",className:L.a.imageGalleryItem__image,onClick:function(){return n({largeImageURL:a})}})})})};function F(e){var t=e.images,a=e.onOpenModal;return Object(j.jsx)("ul",{className:w.a.imageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL;return Object(j.jsx)(k,{src:n,onOpenModal:a},t)}))})}var M=a(31),N=a(9),B=a.n(N),G=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:""},e.handleChange=function(t){e.setState({name:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){(t.preventDefault(),""!==e.state.name.trim())?((0,e.props.onSubmit)(e.state.name),e.setState({name:" "})):M.a.error("Please enter the name of the request")},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.name;return Object(j.jsx)("header",{className:B.a.Searchbar,children:Object(j.jsxs)("form",{className:B.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:B.a.SearchFormButton}),Object(j.jsx)("input",{className:B.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleChange})]})})}}]),a}(n.Component),U=G,R=a(14),D=a.n(R),E=document.querySelector("#modal-root"),A=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(j.jsx)("div",{className:D.a.Overlay,onClick:this.handleBackdropClick,children:Object(j.jsx)("div",{className:D.a.Modal,children:Object(j.jsx)("img",{src:this.props.imageModal,alt:""})})}),E)}}]),a}(n.Component),P=A,q=function(e){return e.map((function(e){return{id:e.id,largeImageURL:e.largeImageURL,webformatURL:e.webformatURL}}))},J=a(30),K=a.n(J),T={page:1,images:[]},Y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state=Object(l.a)(Object(l.a)({},T),{},{isLoading:!1,name:"",largeImage:"",showModal:!1,error:null}),e.onChangeName=function(t){e.setState({name:t,page:1,images:[]})},e.clickLoadMore=function(t){t.preventDefault(),e.setState((function(e){return{page:e.page+1}}))},e.modalClose=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onClickLargeImage=function(t){e.setState({largeImage:t}),e.modalClose()},e.getImages=function(){var t=e.state,a=t.name,n=t.page;e.setState({isLoading:!0}),p({name:a,page:n}).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(q(t))),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.state.name!==t.name&&this.getImages(),t.page!==this.state.page&&(this.getImages(),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.showModal,n=e.isLoading,r=e.largeImage,o=e.name;return Object(j.jsxs)("div",{className:K.a.App,children:[Object(j.jsx)(U,{onSubmit:this.onChangeName}),n&&Object(j.jsx)(x,{}),0!==t.length?Object(j.jsx)(F,{images:t,onOpenModal:this.onClickLargeImage}):""!==o&&Object(j.jsx)("p",{children:"No found image"}),t.length>=12&&Object(j.jsx)(O,{onClick:this.clickLoadMore}),a&&Object(j.jsx)(P,{onClose:this.modalClose,imageModal:r.largeImageURL})]})}}]),a}(n.Component),H=Y;c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(H,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3lYVd",SearchForm:"Searchbar_SearchForm__3xkXw",SearchFormButton:"Searchbar_SearchFormButton__1fCJS",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1Ia4P",SearchFormInput:"Searchbar_SearchFormInput__E2DbI"}}},[[77,1,2]]]);
//# sourceMappingURL=main.fbe4f6e7.chunk.js.map