(this["webpackJsonpcao-few-1-2-final"]=this["webpackJsonpcao-few-1-2-final"]||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){},17:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t(1),s=t.n(i),r=t(8),o=t.n(r);t(15),t.p,t(16);function l(){return Object(a.jsxs)("div",{className:"heading",children:[Object(a.jsx)("h1",{children:"Cao Mai"}),Object(a.jsx)("p",{children:"FEW 1.2 Final Assessment"}),Object(a.jsx)("p",{children:"Total Band: 50"}),Object(a.jsx)("p",{children:"Styles: 47"})]})}var d=t(9),m=t(2),c=t(3),f=t(4),h=t(6),b=t(5),p=function(e){Object(h.a)(t,e);var n=Object(b.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state={count:0},a}return Object(f.a)(t,[{key:"increment",value:function(){this.setState({count:this.state.count+parseInt(this.props.count)})}},{key:"decrement",value:function(){this.state.count<=0?this.setState.count=0:this.setState({count:this.state.count-parseInt(this.props.count)})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"LikeButtonSection",children:[Object(a.jsx)("button",{className:"likeButton",onClick:function(n){e.decrement()},children:"DisLike"}),Object(a.jsx)("p",{className:"LikeButtonLabel",children:this.state.count}),Object(a.jsx)("button",{className:"likeButton",onClick:function(n){e.increment()},children:"Like"})]})}}]),t}(i.Component),g=function(e){Object(h.a)(t,e);var n=Object(b.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state={id:e.id},a}return Object(f.a)(t,[{key:"split",value:function(e){if("-"===e)return Object(a.jsx)(p,{count:"1"})}},{key:"render",value:function(){var e=m[this.state.id],n=e.band_name,t=e.fans,i=e.formed,s=e.origin,r=e.split,o=e.style;return Object(a.jsxs)("div",{className:"BandDetails",children:[Object(a.jsx)("h1",{children:n}),Object(a.jsxs)("p",{style:{fontWeight:"bold"},children:["Origin: ",s,"Fans: ",t.toLocaleString("en-US",{maximumFractionDigits:2})," ","Formed: ",i," Split: ",r]}),Object(a.jsx)("br",{}),Object(a.jsx)("ul",{children:o.split(",").map((function(e){return Object(a.jsx)("li",{children:e})}))}),this.split(r)]})}}]),t}(i.Component);t(17);var y=function(){var e=Object(i.useState)(""),n=Object(d.a)(e,2),t=n[0],s=n[1],r=m.filter((function(e){var n=e.band_name.toLowerCase().includes(t.toLowerCase()),a=e.style.toLowerCase().includes(t.toLowerCase());return n||a})).map((function(e,n){var t=e.band_name,i=e.fans,s=e.formed,r=e.origin,o=e.split,l=e.style;return Object(a.jsx)(g,{id:n,band_name:t,fans:i,formed:s,origin:r,split:o,style:l},t)}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("form",{className:"filter-field",children:Object(a.jsx)("input",{value:t,placeholder:"filter band by name or style",onChange:function(e){return s(e.target.value)}})}),Object(a.jsx)("div",{className:"BandList",children:r})]})};var u=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(l,{}),Object(a.jsx)(y,{})]})},D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),a(e),i(e),s(e),r(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root")),D()},2:function(e){e.exports=JSON.parse('[{"ID":0,"band_name":"Iron Maiden","fans":4195,"formed":"1975","origin":"United Kingdom","split":"-","style":"New wave of british heavy,Heavy"},{"ID":1,"band_name":"Opeth","fans":4147,"formed":"1990","origin":"Sweden","split":"1990","style":"Extreme progressive,Progressive rock,Progressive"},{"ID":2,"band_name":"Metallica","fans":3712,"formed":"1981","origin":"USA","split":"-","style":"Heavy,Bay area thrash"},{"ID":3,"band_name":"Megadeth","fans":3105,"formed":"1983","origin":"USA","split":"1983","style":"Thrash,Heavy,Hard rock"},{"ID":4,"band_name":"Amon Amarth","fans":3054,"formed":"1988","origin":"Sweden","split":"-","style":"Melodic death"},{"ID":5,"band_name":"Slayer","fans":2955,"formed":"1981","origin":"USA","split":"1981","style":"Thrash"},{"ID":6,"band_name":"Death","fans":2690,"formed":"1983","origin":"USA","split":"2001","style":"Progressive death,Death,Progressive thrash"},{"ID":7,"band_name":"Dream Theater","fans":2329,"formed":"1985","origin":"USA","split":"1985","style":"Progressive"},{"ID":8,"band_name":"Black Sabbath","fans":2307,"formed":"1968","origin":"United Kingdom","split":"-","style":"Doom,Heavy,Hard rock"},{"ID":9,"band_name":"Nightwish","fans":2183,"formed":"1996","origin":"Finland","split":"1996","style":"Symphonic power,Gothic,Symphonic"},{"ID":10,"band_name":"Children Of Bodom","fans":2153,"formed":"1993","origin":"Finland","split":"-","style":"Extreme power"},{"ID":11,"band_name":"Judas Priest","fans":2094,"formed":"1969","origin":"United Kingdom","split":"1969","style":"Heavy,Hard rock"},{"ID":12,"band_name":"Blind Guardian","fans":2040,"formed":"1984","origin":"Germany","split":"-","style":"Power,Speed"},{"ID":13,"band_name":"In Flames","fans":1932,"formed":"1990","origin":"Sweden","split":"1990","style":"Gothenburg,Alternative"},{"ID":14,"band_name":"Pantera","fans":1920,"formed":"1981","origin":"USA","split":"2003","style":"Heavy,Groove thrash,Groove metal"},{"ID":15,"band_name":"Dark Tranquillity","fans":1898,"formed":"1989","origin":"Sweden","split":"1989","style":"Gothenburg"},{"ID":16,"band_name":"Agalloch","fans":1881,"formed":"1995","origin":"USA","split":"2016","style":"Atmospheric black,Neofolk"},{"ID":17,"band_name":"Ensiferum","fans":1879,"formed":"1995","origin":"Finland","split":"1995","style":"Extreme folk"},{"ID":18,"band_name":"Arch Enemy","fans":1750,"formed":"1996","origin":"Sweden","split":"-","style":"Gothenburg"},{"ID":19,"band_name":"Katatonia","fans":1735,"formed":"1991","origin":"Sweden","split":"1991","style":"Blackened doom,Death doom,Alternative rock,Gothic doom"},{"ID":20,"band_name":"Behemoth","fans":1721,"formed":"1991","origin":"Poland","split":"-","style":"Death,Black,Blackened death"},{"ID":21,"band_name":"Dimmu Borgir","fans":1688,"formed":"1993","origin":"Norway","split":"1993","style":"Symphonic black,Black"},{"ID":22,"band_name":"Kreator","fans":1646,"formed":"1982","origin":"Germany","split":"-","style":"Teutonic thrash"},{"ID":23,"band_name":"Wintersun","fans":1640,"formed":"2004","origin":"Finland","split":"2004","style":"Extreme power"},{"ID":24,"band_name":"Insomnium","fans":1547,"formed":"1997","origin":"Finland","split":"-","style":"Melodic death"},{"ID":25,"band_name":"Amorphis","fans":1528,"formed":"1990","origin":"Finland","split":"1990","style":"Death,Melodic death,Folk,Progressive"},{"ID":26,"band_name":"Kamelot","fans":1520,"formed":"1991","origin":"USA","split":"-","style":"Symphonic power"},{"ID":27,"band_name":"Tool","fans":1506,"formed":"1988","origin":"USA","split":"1988","style":"Progressive,Alternative"},{"ID":28,"band_name":"Helloween","fans":1501,"formed":"1978","origin":"Germany","split":"-","style":"Speed,Power"},{"ID":29,"band_name":"Testament","fans":1500,"formed":"1983","origin":"USA","split":"1983","style":"Bay area thrash"},{"ID":30,"band_name":"Epica","fans":1450,"formed":"2002","origin":"The Netherlands","split":"-","style":"Symphonic"},{"ID":31,"band_name":"Immortal","fans":1436,"formed":"1990","origin":"Norway","split":"1990","style":"Death,Black"},{"ID":32,"band_name":"Lamb Of God","fans":1433,"formed":"1999","origin":"USA","split":"-","style":"Groove thrash"},{"ID":33,"band_name":"Iced Earth","fans":1403,"formed":"1985","origin":"USA","split":"1985","style":"Heavy,Us power"},{"ID":34,"band_name":"Anathema","fans":1400,"formed":"1990","origin":"United Kingdom","split":"-","style":"Death doom,Atmospheric rock,Doom"},{"ID":35,"band_name":"Symphony X","fans":1343,"formed":"1994","origin":"USA","split":"1994","style":"Progressive,Symphonic power"},{"ID":36,"band_name":"Eluveitie","fans":1328,"formed":"2002","origin":"Switzerland","split":"-","style":"Celtic folk,Gothenburg"},{"ID":37,"band_name":"Gojira","fans":1300,"formed":"1996","origin":"France","split":"1996","style":"Progressive death"},{"ID":38,"band_name":"Rammstein","fans":1251,"formed":"1994","origin":"Germany","split":"-","style":"Industrial"},{"ID":39,"band_name":"Sonata Arctica","fans":1242,"formed":"1996","origin":"Finland","split":"1996","style":"Power"},{"ID":40,"band_name":"Mastodon","fans":1232,"formed":"1999","origin":"USA","split":"-","style":"Progressive stoner,Progressive sludge"},{"ID":41,"band_name":"Nile","fans":1189,"formed":"1993","origin":"USA","split":"1993","style":"Brutal death,Technical death"},{"ID":42,"band_name":"Sepultura","fans":1185,"formed":"1984","origin":"Brazil","split":"-","style":"Alternative,Death,Groove thrash,Thrash"},{"ID":43,"band_name":"Moonspell","fans":1173,"formed":"1989","origin":"Portugal","split":"1989","style":"Folk,Gothic black,Gothic,Symphonic black,Black"},{"ID":44,"band_name":"Therion","fans":1167,"formed":"1987","origin":"Sweden","split":"-","style":"Death,Symphonic"},{"ID":45,"band_name":"Cannibal Corpse","fans":1162,"formed":"1988","origin":"USA","split":"1988","style":"Death"},{"ID":46,"band_name":"Enslaved","fans":1146,"formed":"1991","origin":"Norway","split":"-","style":"Viking black,Progressive black"},{"ID":47,"band_name":"Emperor","fans":1132,"formed":"1991","origin":"Norway","split":"1991","style":"Black,Symphonic black"},{"ID":48,"band_name":"Porcupine Tree","fans":1094,"formed":"1987","origin":"United Kingdom","split":"-","style":"Progressive rock,Progressive"},{"ID":49,"band_name":"Cradle Of Filth","fans":1084,"formed":"1991","origin":"United Kingdom","split":"1991","style":"Extreme gothic,Symphonic black,Death,Symphonic"}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.2afab241.chunk.js.map