(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){e.exports=t(53)},23:function(e,a,t){},25:function(e,a,t){},27:function(e,a,t){},29:function(e,a,t){},31:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),o=t.n(c),d=(t(23),t(1)),i=t(12),s=t(13),l=t(16),u=t(14),g=t(17),m=t(3),b=(t(25),function(e){var a=e.onNewGame;return r.a.createElement("header",null,r.a.createElement("h2",null,r.a.createElement("a",null,"Woof Woof Memory Game")),r.a.createElement("nav",null,r.a.createElement("li",null,r.a.createElement("a",{onClick:a,className:"btn",id:"slide"},"New Game"))))}),k=(t(27),function(e){var a={};return e.showing&&(a.backgroundImage="url(".concat(e.backgroundImage,")")),e.opacity&&(a.filter="grayscale(100%)",a.border=".18rem solid #000"),r.a.createElement("div",{onClick:e.onClick,className:"card-container",style:a})}),I=(t(29),function(e){return r.a.createElement("div",{className:"bg"},r.a.createElement("div",{id:"dog"},r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"mask mask-head"},r.a.createElement("div",{className:"nose"}),r.a.createElement("div",{className:"eye"})),r.a.createElement("div",{className:"ear"})),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"shirt"}),r.a.createElement("div",{className:"mask-body"},r.a.createElement("div",{className:"leg"})),r.a.createElement("div",{className:"foot"})),r.a.createElement("div",{className:"back-body"},r.a.createElement("div",{className:"mask-back-body"})),r.a.createElement("div",{className:"mask-tail"})),r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"bounce1"}),r.a.createElement("div",{className:"bounce2"}),r.a.createElement("div",{className:"bounce3"})))}),h=(t(31),t(15)),N=t.n(h),f={HIDDING:0,SHOWING:1,MATCHING:2},v=function(e){function a(e){var t;Object(i.a)(this,a),t=Object(l.a)(this,Object(u.a)(a).call(this,e));var n=[{id:0,cardState:f.HIDING,backgroundColor:"red",backgroundImage:""},{id:1,cardState:f.HIDING,backgroundColor:"red",backgroundImage:""},{id:2,cardState:f.HIDING,backgroundColor:"navy",backgroundImage:""},{id:3,cardState:f.HIDING,backgroundColor:"navy",backgroundImage:""},{id:4,cardState:f.HIDING,backgroundColor:"yellow",backgroundImage:""},{id:5,cardState:f.HIDING,backgroundColor:"yellow",backgroundImage:""},{id:6,cardState:f.HIDING,backgroundColor:"green",backgroundImage:""},{id:7,cardState:f.HIDING,backgroundColor:"green",backgroundImage:""},{id:8,cardState:f.HIDING,backgroundColor:"black",backgroundImage:""},{id:9,cardState:f.HIDING,backgroundColor:"black",backgroundImage:""},{id:10,cardState:f.HIDING,backgroundColor:"purple",backgroundImage:""},{id:11,cardState:f.HIDING,backgroundColor:"purple",backgroundImage:""},{id:12,cardState:f.HIDING,backgroundColor:"pink",backgroundImage:""},{id:13,cardState:f.HIDING,backgroundColor:"pink",backgroundImage:""},{id:14,cardState:f.HIDING,backgroundColor:"lightsky",backgroundImage:""},{id:15,cardState:f.HIDING,backgroundColor:"lightsky",backgroundImage:""},{id:16,cardState:f.HIDING,backgroundColor:"brown",backgroundImage:""},{id:17,cardState:f.HIDING,backgroundColor:"brown",backgroundImage:""},{id:18,cardState:f.HIDING,backgroundColor:"white",backgroundImage:""},{id:19,cardState:f.HIDING,backgroundColor:"white",backgroundImage:""}];return n=t.shuffle(n),t.state={cards:n,noClick:!1,isVis:!0},t.handleClick=t.handleClick.bind(Object(m.a)(Object(m.a)(t))),t.handleNewGame=t.handleNewGame.bind(Object(m.a)(Object(m.a)(t))),t.getAllDogs=t.getAllDogs.bind(Object(m.a)(Object(m.a)(t))),t.shuffle=t.shuffle.bind(Object(m.a)(Object(m.a)(t))),t}return Object(g.a)(a,e),Object(s.a)(a,[{key:"shuffle",value:function(e){var a,t,n;for(a=e.length-1;a>0;a--)t=Math.floor(Math.random()*(a+1)),n=e[a],e[a]=e[t],e[t]=n;return e}},{key:"getAllDogs",value:function(){for(var e=this,a=[],t=0;t<10;t++)N.a.get("https://dog.ceo/api/breeds/image/random?nocache="+(new Date).getTime()).then(function(e){return a.push(e.data.message)}).catch(function(e){return console.log(e)});setTimeout(function(){var t=e.state.cards.map(function(e){switch(e.backgroundColor){case"red":return Object(d.a)({},e,{backgroundImage:a[0]});case"navy":return Object(d.a)({},e,{backgroundImage:a[1]});case"yellow":return Object(d.a)({},e,{backgroundImage:a[2]});case"green":return Object(d.a)({},e,{backgroundImage:a[3]});case"black":return Object(d.a)({},e,{backgroundImage:a[4]});case"purple":return Object(d.a)({},e,{backgroundImage:a[5]});case"pink":return Object(d.a)({},e,{backgroundImage:a[6]});case"lightsky":return Object(d.a)({},e,{backgroundImage:a[7]});case"brown":return Object(d.a)({},e,{backgroundImage:a[8]});case"white":return Object(d.a)({},e,{backgroundImage:a[9]});default:return e}});e.setState({cards:t,isVis:!1})},8e3)}},{key:"componentWillMount",value:function(){this.getAllDogs()}},{key:"handleNewGame",value:function(){var e=this;this.setState({isVis:!0}),setTimeout(function(){e.setState({isVis:!1})},8e3);var a=this.state.cards.map(function(e){return Object(d.a)({},e,{cardState:f.HIDING})});a=this.shuffle(a),this.setState({cards:a}),this.getAllDogs()}},{key:"handleClick",value:function(e){var a=this,t=function(e,a,t){return e.map(function(e){return a.includes(e.id)?Object(d.a)({},e,{cardState:t}):e})},n=this.state.cards.find(function(a){return a.id===e});if(!this.state.noClick&&n.cardState===f.HIDING){var r=!1,c=t(this.state.cards,[e],f.SHOWING),o=c.filter(function(e){return e.cardState===f.SHOWING}),i=o.map(function(e){return e.id});if(2===o.length&&o[0].backgroundColor===o[1].backgroundColor)c=t(this.state.cards,i,f.MATCHING);else if(2===o.length){var s=t(this.state.cards,i,f.HIDING);r=!0,this.setState({cards:c,noClick:r},function(){setTimeout(function(){a.setState({cards:s,noClick:!1})},1500)})}this.setState({cards:c,noClick:r})}}},{key:"render",value:function(){var e=this,a=t(52)("load",{hide:!this.state.isVis,show:this.state.isVis}),n=this.state.cards.map(function(a){return r.a.createElement(k,{key:a.id,opacity:a.cardState===f.MATCHING,showing:a.cardState!==f.HIDING,backgroundColor:a.backgroundColor,backgroundImage:a.backgroundImage,onClick:function(){return e.handleClick(a.id)}})}),c={};return this.state.isVis?this.state.isVis&&(c.display="none"):c.display="grid",r.a.createElement("div",{className:"container"},r.a.createElement(b,{onNewGame:this.handleNewGame}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"cardsContainer",style:c},n)),r.a.createElement("div",{className:a},r.a.createElement(I,null)))}}]),a}(n.Component);o.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.20f32398.chunk.js.map