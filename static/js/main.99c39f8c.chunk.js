(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__2sIAW",avatar:"Profile_avatar__39c48",name:"Profile_name__1edWV",tag:"Profile_tag__3sCDP",location:"Profile_location__3rzEG",stats:"Profile_stats__nIdRI",label:"Profile_label__2TRP2",quantity:"Profile_quantity__1UXd5"}},function(e,a,t){e.exports={friendList:"FriendList_friendList__3q1f8",item:"FriendList_item__3vROL",statusOnline:"FriendList_statusOnline__XFIDl",statusOffline:"FriendList_statusOffline__1SqpJ",avatar:"FriendList_avatar__2Bm3G",name:"FriendList_name__TZrUX"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e,a,t){e.exports={statistics:"Statistics_statistics__2sx_7",title:"Statistics_title__C8syC",statList:"Statistics_statList__3uNi2",item:"Statistics_item__2XXIS",label:"Statistics_label__1b1z-",percentage:"Statistics_percentage__3r7jk"}},,,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports={transactionHistory:"TransactionHistory_transactionHistory__3UCeZ"}},,,,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var s=t(5),c=t.n(s),i=t(7),n=t.n(i),r=(t(16),t(3)),l=t(1),d=t.n(l),o=t(0);var b=function(e){var a=e.name,t=e.tag,s=e.location,c=e.avatar,i=e.followers,n=e.views,r=e.likes;return Object(o.jsxs)("div",{className:d.a.profile,children:[Object(o.jsxs)("div",{className:d.a.description,children:[Object(o.jsx)("img",{src:c,alt:a,width:"120",className:d.a.avatar}),Object(o.jsx)("p",{className:d.a.name,children:a}),Object(o.jsxs)("p",{className:d.a.tag,children:["@",t]}),Object(o.jsx)("p",{className:d.a.location,children:s})]}),Object(o.jsxs)("ul",{className:d.a.stats,children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:d.a.label,children:"Followers"}),Object(o.jsx)("span",{className:d.a.quantity,children:i})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:d.a.label,children:"Views"}),Object(o.jsx)("span",{className:d.a.quantity,children:n})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:d.a.label,children:"Likes"}),Object(o.jsx)("span",{className:d.a.quantity,children:r})]})]})]})},m=t(8),u=t(4),j=t.n(u);var f=function(e){var a=e.title,t=e.stats;return Object(o.jsxs)("section",{className:j.a.statistics,children:[a&&Object(o.jsx)("h2",{className:j.a.title,children:"Upload stats"}),Object(o.jsx)("ul",{className:j.a.statList,children:t.map((function(e){var a,t,s=e.id,c=e.label,i=e.percentage;return Object(o.jsxs)("li",{className:j.a.item,style:{backgroundColor:(a=0,t=255,"rgb(\n      ".concat(Math.random()*(t-a)+a,",\n      ").concat(Math.random()*(t-a)+a,",\n      ").concat(Math.random()*(t-a)+a,"\n  )"))},children:[Object(o.jsx)("span",{className:j.a.label,children:c}),Object(o.jsxs)("span",{className:j.a.percentage,children:[i,"%"]})]},s)}))})]})},p=t(9),O=t(2),h=t.n(O);var y=function(e){var a=e.friend;return Object(o.jsxs)("li",{className:h.a.item,children:[Object(o.jsx)("span",{className:a.isOnline?h.a.statusOnline:h.a.statusOffline}),Object(o.jsx)("img",{className:h.a.avatar,src:a.avatar,alt:a.name,width:"48"}),Object(o.jsx)("p",{className:h.a.name,children:a.name})]})};var _=function(e){var a=e.friends;return Object(o.jsx)("ul",{className:h.a.friendList,children:a.map((function(e){return Object(o.jsx)(y,{friend:e},e.id)}))})},v=t(10),x=t(11),w=t.n(x);var g=function(e){var a=e.items;return Object(o.jsxs)("table",{className:w.a.transactionHistory,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Type"}),Object(o.jsx)("th",{children:"Amount"}),Object(o.jsx)("th",{children:"Currency"})]})}),Object(o.jsx)("tbody",{children:a.map((function(e){var a=e.id,t=e.type,s=e.amount,c=e.currency;return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t[0].toUpperCase()+t.slice(1)}),Object(o.jsx)("td",{children:s}),Object(o.jsx)("td",{children:c})]},a)}))})]})};var N=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{name:r.name,tag:r.tag,location:r.location,avatar:r.avatar,followers:r.stats.followers,views:r.stats.views,likes:r.stats.likes}),Object(o.jsx)(f,{title:"Upload stats",stats:m}),Object(o.jsx)(_,{friends:p}),Object(o.jsx)(g,{items:v})]})};n.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.99c39f8c.chunk.js.map