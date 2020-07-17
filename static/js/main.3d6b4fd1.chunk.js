(this["webpackJsonpplaylist-wizard-client"]=this["webpackJsonpplaylist-wizard-client"]||[]).push([[0],{23:function(e){e.exports=JSON.parse('["acoustic","alt-rock","alternative","ambient","anime","blues","classical","country","drum-and-bass","dubstep","electronic","emo","folk","heavy-metal","hip-hop","house","indie","jazz","k-pop","metal","new-age","pop","punk","r-n-b","reggae","rock","romance","ska","soul","soundtracks","study","techno","trance","work-out"]')},24:function(e){e.exports=JSON.parse('[{"id":0,"label":"Digital","mapsTo":{"id":"example","value":100}},{"id":1,"label":"Acoustic","mapsTo":{"id":"example","value":100}},{"id":2,"label":"Move About","mapsTo":{"id":"example","value":100}},{"id":3,"label":"Chaotic","mapsTo":{"id":"example","value":100}},{"id":4,"label":"Chill","mapsTo":{"id":"example","value":100}},{"id":5,"label":"Wordsy","mapsTo":{"id":"example","value":100}},{"id":6,"label":"Instrumental","mapsTo":{"id":"example","value":100}},{"id":7,"label":"Quiet","mapsTo":{"id":"example","value":100}},{"id":8,"label":"Loud","mapsTo":{"id":"example","value":100}},{"id":9,"label":"Sad","mapsTo":{"id":"example","value":100}},{"id":10,"label":"Happy","mapsTo":{"id":"example","value":100}},{"id":11,"label":"Obscure","mapsTo":{"id":"example","value":100}},{"id":12,"label":"Sing Along","mapsTo":{"id":"example","value":100}},{"id":13,"label":"Slow","mapsTo":{"id":"example","value":100}},{"id":14,"label":"Fast","mapsTo":{"id":"example","value":100}}]')},25:function(e){e.exports=JSON.parse('{"clientId":"f9b65cf8d55e4a3f9e55079e635e9419"}')},28:function(e,t,a){e.exports=a(42)},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),i=a.n(r),u=a(3),c=a(4),o=a(6),s=a(5),m=a(10),d=a(1);function p(){return l.a.createElement("main",null,l.a.createElement("h2",null,"Generate free Spotify playlists magically"),l.a.createElement("p",null,"A quest! The wizard is creating a musical potion in his cauldron. Help him out by adding some ingredients to the mix from scratch, or use the scrying orb to pluck them from your past..."),l.a.createElement(m.b,{to:"/new"},"Create New"))}var h=a(13),v=a(17);function f(e){return l.a.createElement("h3",null,e.title)}function b(e){return l.a.createElement(n.Fragment,null,e.items.map((function(e,t){return l.a.createElement(f,{key:t,title:e.title,icon:e.icon})})))}function E(e){return l.a.createElement("button",{onClick:e.handleClick},e.title)}function g(e){var t=e.step;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null,"Step ",e.index+1," / ",e.max),l.a.createElement(t,{handleValueChange:e.handleValueChange,formValues:e.formValues}),e.index>0&&l.a.createElement(E,{title:"Back",handleClick:e.handleBack}),e.index<e.max-1&&l.a.createElement(E,{title:"Next",handleClick:e.handleNext}),e.index===e.max-1&&l.a.createElement(E,{title:"Reset",handleClick:e.handleReset})),l.a.createElement("div",null,e.inspector))}var x=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={activeIndex:e.props.activeIndex,formValues:{}},e.handleValueChange=function(t){var a=t.target.name,n=t.target.value,l=t.target.type;"number"===l?n=+n:"checkbox"===l&&(n=t.target.checked),e.setState((function(e){return{formValues:Object(v.a)(Object(v.a)({},e.formValues),{},Object(h.a)({},a,n))}}))},e.handleNext=function(){e.setState((function(t){if(t.activeIndex!==e.props.children.length-1)return{activeIndex:t.activeIndex+1}}))},e.handleBack=function(){e.setState((function(e){if(0!==e.activeIndex)return{activeIndex:e.activeIndex-1}}))},e.handleReset=function(){e.setState({activeIndex:0,formValues:{}})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.activeIndex,t=this.props.children.length,a=this.props.children[e];return l.a.createElement("div",null,l.a.createElement(b,{items:this.props.children}),l.a.createElement(g,{index:e,max:t,step:a.step,inspector:a.inspector,handleNext:this.handleNext,handleBack:this.handleBack,handleReset:this.handleReset,handleValueChange:this.handleValueChange,formValues:this.state.formValues}))}}]),a}(l.a.Component);function k(e){return l.a.createElement("header",null,l.a.createElement("h1",null,e.title),l.a.createElement("nav",null,l.a.createElement(m.c,{to:"/about"},l.a.createElement("div",null,"About")),l.a.createElement("a",{href:"https://ko-fi.com/joshmarcushills",target:"_blank",rel:"noopener noreferrer"},"Donate")))}function y(e){return l.a.createElement(n.Fragment,null,l.a.createElement("p",null,l.a.createElement("em",null,"The wizard squints at you expectantly, holding a clattering armful of empty glass vials...")),l.a.createElement("p",null,"Choose the total number of songs you'd like in your playlist"),l.a.createElement("input",{name:"limit",min:"5",max:"100",type:"number",placeholder:"31",value:e.formValues.limit||"",onChange:e.handleValueChange}))}function C(e){return l.a.createElement("button",{onClick:function(){return e.handleClick(e.value)}},e.children," ",e.selected&&"*"," ",e.disabled()&&"-")}var j=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={title:e.props.title,options:e.props.children.options,multi:e.props.multi,max:e.props.max,value:e.props.formValues[e.props.name]||null},e.handleClick=function(t){var a;if(e.state.multi)if(null===e.state.value)a=0===e.state.max?null:[t];else if(e.state.value.includes(t))0===(a=e.state.value.filter((function(e){return e!==t}))).length&&(a=null);else{if(e.state.max&&e.state.value.length===e.state.max)return;a=e.state.value.concat(t)}else a=t===e.state.value?null:t;e.setState({value:a},e.bubbleChange)},e.isDisabled=function(t){return!(!e.state.multi||!e.state.max)&&(0===e.state.max||e.state.value&&!e.state.value.includes(t)&&e.state.value.length===e.state.max)},e.reset=function(){e.setState({value:null},e.bubbleChange)},e.bubbleChange=function(){e.props.handleChange({target:{name:e.props.name,value:e.state.value}})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,this.state.title&&this.state.title),l.a.createElement("p",null,this.state.multi&&this.state.value&&this.state.value.length||"0",this.state.max&&"/ ".concat(this.state.max),this.state.multi&&null!==this.state.value&&l.a.createElement("button",{onClick:this.reset},"X"))),this.state.options.map((function(t){return l.a.createElement(C,{key:t.value,value:t.value,selected:e.state.value&&(e.state.value===t.value||e.state.value.includes(t.value)),handleClick:e.handleClick,disabled:function(){return e.isDisabled(t.value)}},t.label)})))}}]),a}(l.a.Component),V=a(23);function w(e){return l.a.createElement(n.Fragment,null,l.a.createElement("p",null,l.a.createElement("em",null,"The wizard invites you to join a ceremonial dance.")),l.a.createElement(j,{title:"Choose up to two genres...",name:"genres",multi:!0,max:2,handleChange:e.handleValueChange,formValues:e.formValues},{options:V.map((function(e){return{value:e,label:"".concat(e[0].toUpperCase()).concat(e.slice(1))}}))}))}var O=a(24);function T(e){return l.a.createElement(n.Fragment,null,l.a.createElement("p",null,l.a.createElement("em",null,"The wizard examines his spice rack.")),l.a.createElement("p",null,"Create a vibe..."),l.a.createElement(j,{name:"vibes",multi:"true",handleChange:e.handleValueChange,formValues:e.formValues},{options:O.map((function(e){return{value:e.id,label:e.label}}))}))}var S=a(25);function A(e){var t=Object(d.g)().pathname;return l.a.createElement("a",{href:"https://accounts.spotify.com/authorize?client_id=".concat(S.clientId,"&redirect_uri=").concat(window.location.origin,"&response_type=token&state=").concat(encodeURIComponent(t))},"Spotify Login")}var I=a(26),R=a.n(I);function z(e){return l.a.createElement("div",{onClick:e.handleClick},e.data.image&&l.a.createElement("img",{src:e.data.image,alt:e.data.name}),l.a.createElement("p",null,e.data.name),e.handleAdd&&l.a.createElement("button",{onClick:function(){return e.handleAdd(e.data)},disabled:e.disabled},"Add"),e.handleRemove&&l.a.createElement("button",{onClick:function(){return e.handleRemove(e.data)}},"Remove"))}var F=l.a.createContext(null),N=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={results:[],value:e.props.formValues[e.props.name]||null,max:e.props.max},e.bubbleChange=function(){e.props.handleChange({target:{name:e.props.name,value:e.state.value}})},e.onChange=function(t){var a=t.target.value.trim();""!==a?fetch("https://api.spotify.com/v1/search?q=".concat(a,"&type=artist&limit=5"),{headers:{Authorization:"Bearer ".concat(e.context.value)}}).then((function(t){return 200!==t.status?(e.context.clearValue(),null):t.json()})).then((function(t){t&&t.artists&&e.setState({results:t.artists.items.map((function(e){return{id:e.id,name:e.name,image:e.images[0]?e.images[0].url:null}}))})})):e.setState({results:[]})},e.handleAdd=function(t){e.setState((function(e){return{value:e.value?e.value.concat(t):[t]}}),e.bubbleChange)},e.handleRemove=function(t){e.setState((function(e){return{value:e.value?e.value.filter((function(e){return e.id!==t.id})):null}}),e.bubbleChange)},e.handleClear=function(){e.setState({value:null},e.bubbleChange)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("p",null,this.state.value?this.state.value.length:"0",this.state.max&&" / ".concat(this.state.max)),this.state.value&&this.state.value.length>0&&l.a.createElement("button",{onClick:this.handleClear},"Clear"),l.a.createElement(R.a,{minLength:1,debounceTimeout:300,onChange:this.onChange,placeholder:"Search by artist name..."}),l.a.createElement("div",null,this.state.value&&this.state.value.map((function(t){return l.a.createElement(z,{key:t.id,data:t,handleRemove:e.handleRemove})}))),l.a.createElement("hr",null),l.a.createElement("div",null,this.state.results.filter((function(t){return!e.state.value||!e.state.value.includes(t)})).map((function(t){return l.a.createElement(z,{key:t.id,data:t,handleAdd:e.handleAdd,disabled:!e.state.value&&0===e.state.max||e.state.value&&e.state.value.length===e.state.max})}))))}}]),a}(l.a.Component);N.contextType=F;var B=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("p",null,l.a.createElement("em",null,"The wizard holds a lock of hair above the bubbling mixture.")),l.a.createElement("p",null,"Add some artists?"),this.context&&this.context.value?l.a.createElement(N,{name:"artists",max:3,formValues:this.props.formValues,handleChange:this.props.handleValueChange}):l.a.createElement(A,null))}}]),a}(l.a.Component);function _(e){return l.a.createElement("div",null,l.a.createElement("p",null,e.index,": ",e.name," by ",e.artists.map((function(e){return e.name})).join(", ")))}function D(e){return l.a.createElement("div",null,e.tracks.map((function(e,t){return l.a.createElement(_,{key:e.id,index:t,name:e.name,artists:e.artists})})))}B.contextType=F,(function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("p",null,l.a.createElement("em",null,"The wizard holds up a mirror which reflects your younger self.")),l.a.createElement("label",null,"Use your Spotify history to influence the resultant playlist?",this.context?l.a.createElement("input",{name:"useHistory",type:"checkbox",checked:this.props.formValues.useHistory||!1,onChange:this.props.handleValueChange}):l.a.createElement(A,null)))}}]),a}(l.a.Component)).contextType=F;var J=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={addedPlaylist:!1,recommendations:null},e.handleClick=function(){},e.getRecommendations=function(){var t=e.props.formValues.limit,a=e.props.formValues.artists?e.props.formValues.artists.map((function(e){return e.id})).join(","):null,n=e.props.formValues.genres?e.props.formValues.genres.join(","):null;fetch("https://api.spotify.com/v1/recommendations?".concat(t?"&limit=".concat(t):"").concat(a?"&seed_artists=".concat(a):"").concat(n?"&seed_genres=".concat(n):""),{headers:{Authorization:"Bearer ".concat(e.context.value)}}).then((function(t){return 200!==t.status?(e.context.clearValue(),null):t.json()})).then((function(t){t&&t.tracks&&e.setState({recommendations:t.tracks.map((function(e){return{id:e.id,name:e.name,artists:e.artists.map((function(e){return{name:e.name}}))}}))})}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.context&&this.context.value&&this.getRecommendations()}},{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("p",null,l.a.createElement("em",null,"The wizard mumbles an incantation, and a breeze picks up about you. With a sudden flash, it's ready!")),this.context?this.state.recommendations?l.a.createElement("div",null,l.a.createElement(D,{tracks:this.state.recommendations}),l.a.createElement("p",null,"Add this playlist to your Spotify account?"),l.a.createElement("button",{onClick:this.handleClick},"Add Playlist")):l.a.createElement("p",null,"Brewing..."):l.a.createElement("div",null,l.a.createElement("p",null,"Log in to generate your Spotify playlist"),l.a.createElement(A,null)))}}]),a}(l.a.Component);function M(e){return l.a.createElement("p",null,"Model: ",e.model)}function H(){return l.a.createElement(n.Fragment,null,l.a.createElement(k,{title:"PW - Create New"}),l.a.createElement("main",null,l.a.createElement(x,{activeIndex:0},[{title:"Total Songs",icon:"",step:y,inspector:l.a.createElement(M,{model:"potions"}),skippable:!0},{title:"Set Genre",icon:"",step:w,inspector:l.a.createElement(M,{model:"shoes"}),skippable:!0},{title:"Set Vibe",icon:"",step:T,inspector:l.a.createElement(M,{model:"spices"}),skippable:!0},{title:"Add Artists",icon:"",step:B,inspector:l.a.createElement(M,{model:"scissors"}),skippable:!0},{title:"Create Mix",icon:"",step:J,inspector:l.a.createElement(M,{model:"shazam"}),skippable:!1}])))}function L(){return l.a.createElement("p",null,"Not found")}function P(){return l.a.createElement("p",null,"About")}J.contextType=F;var q=a(27),U=a.n(q),W=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={authToken:null,restoredFromRoute:null},e.clearToken=function(){e.setState({authToken:null},(function(){return window.localStorage.removeItem("access-token")}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e,t,a=U.a.parse(window.location.hash.slice(2));a.access_token&&"string"===typeof a.access_token?(e=a.access_token,t=a.state,window.localStorage.setItem("access-token",e)):e=window.localStorage.getItem("access-token"),this.setState({authToken:e,restoredFromRoute:t})}},{key:"render",value:function(){return l.a.createElement(F.Provider,{value:{value:this.state.authToken,clearValue:this.clearToken}},l.a.createElement(m.a,{basename:"/"},this.state.restoredFromRoute&&l.a.createElement(d.a,{to:this.state.restoredFromRoute}),l.a.createElement(d.d,null,l.a.createElement(d.b,{exact:!0,path:"/"},l.a.createElement(p,null)),l.a.createElement(d.b,{path:"/new"},l.a.createElement(H,null)),l.a.createElement(d.b,{path:"/about"},l.a.createElement(P,null)),l.a.createElement(d.b,{path:"*"},l.a.createElement(L,null)))))}}]),a}(l.a.Component);a(41);i.a.render(l.a.createElement(W,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.3d6b4fd1.chunk.js.map