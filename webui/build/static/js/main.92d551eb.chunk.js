(this.webpackJsonpwebui=this.webpackJsonpwebui||[]).push([[0],{152:function(e,t,a){},153:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(0),o=a.n(c),r=a(13),s=a.n(r),i=(a(152),a(153),a(233)),l=a(234),d=a(235),j=a(71),u=a(17),b=a(117),x=a(236),h=function(e){var t=Object(u.a)(),a=Object(b.a)({palette:{primary:{light:i.a[600],main:i.a[800],dark:i.a[800],contrastText:t.palette.getContrastText(i.a[800])},accent:{light:l.a[200],main:l.a[500],dark:l.a[800],contrastText:t.palette.getContrastText(l.a[500])},secondary:{light:i.a[600],main:i.a[700],dark:i.a[800],contrastText:t.palette.getContrastText(i.a[600])},notSelected:{light:d.a[500],main:d.a[700],dark:d.a[800],contrastText:t.palette.getContrastText(d.a[600])},error:{light:j.a[200],main:j.a[500],dark:j.a[800],contrastText:t.palette.getContrastText(j.a[500])}}});return Object(n.jsx)(x.a,{theme:a,children:e.children})},m=a(8),f=a(238),O=a(240),p=a(59),g=a(58),v=function(){var e=Object(g.a)((function(e){return{navbarDisplayFlex:{display:"flex",justifyContent:"space-between"},navDisplayFlex:{display:"flex-right",justifyContent:"space-between"},linkText:{textDecoration:"none",textTransform:"uppercase",color:"white"},appBar:{zIndex:e.zIndex.drawer+1}}}))();return Object(n.jsx)(f.a,{position:"static",className:e.appBar,children:Object(n.jsx)(O.a,{children:Object(n.jsx)(p.a,{variant:"h6",children:"SensiML Streaming Gateway"})})})},S=a(246),y=a(185),w=a(186),C=a(187),D=a(241),I=a(113),N=a.n(I),T=a(111),k=a.n(T),R=a(110),M=a.n(R),_=a(112),B=a.n(_),E=Object(g.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerContainer:{overflow:"auto"},content:{flexGrow:1,padding:e.spacing(3)}}})),L=function(e){switch(e.index){case 0:return Object(n.jsx)(M.a,{});case 1:return Object(n.jsx)(k.a,{});case 2:return Object(n.jsx)(B.a,{});default:return Object(n.jsx)(N.a,{})}},G=function(e){var t=E();return Object(n.jsxs)(S.a,{className:t.drawer,variant:"permanent",classes:{paper:t.drawerPaper},children:[Object(n.jsx)(O.a,{}),Object(n.jsx)("div",{className:t.drawerContainer,children:Object(n.jsx)(y.a,{children:["Gateway Status","Configure Gateway","Stream"].map((function(t,a){return Object(n.jsxs)(w.a,{button:!0,onClick:(c=a,function(t){e.onChange(c)}),children:[Object(n.jsx)(C.a,{children:Object(n.jsx)(L,{index:a,children:" "})}),Object(n.jsx)(D.a,{primary:t})]},t);var c}))})})]})},z=a(114),P=function(){return Object(g.a)((function(e){return{root:{display:"flex"},toolbar:Object(z.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,width:"100%",padding:e.spacing(5,40),justifyContent:"flex-end"}}}))()},A=a(242),F=a(33),J=a.n(F),q=function(e){var t=Object(c.useState)([]),a=Object(m.a)(t,2),o=a[0],r=a[1];return Object(c.useEffect)((function(){J.a.get("".concat("http://localhost:5555/","config")).then((function(t){return r(function(t){t.mode&&e.setStreamingMode(t.mode);return t.streaming=t.streaming?"Yes":"No",e.setColumns(Object.keys(t.column_location).sort()),e.setStreamingSource(t.source),e.setDeviceID(t.device_id),t.column_location="column_location"in t?Object.keys(t.column_location).sort().join(", "):[],t}(t.data))}))}),[]),Object(n.jsxs)(A.a,{xs:12,children:[Object(n.jsxs)(A.a,{children:[Object(n.jsx)(p.a,{color:"primary",children:" Configured Mode: "}),Object(n.jsx)(p.a,{children:o.mode}),Object(n.jsx)(p.a,{color:"primary",children:"Streaming: "}),Object(n.jsx)(p.a,{children:o.streaming}),Object(n.jsx)(p.a,{color:"primary",children:"Sensors: "}),Object(n.jsx)(p.a,{children:o.source}),Object(n.jsx)(p.a,{color:"primary",children:"Device ID: "}),Object(n.jsx)(p.a,{children:o.device_id})]}),"streaming"===o.mode?Object(n.jsxs)(A.a,{children:[Object(n.jsx)(p.a,{color:"primary",children:"Sample Rate: "}),Object(n.jsx)(p.a,{children:o.sample_rate}),Object(n.jsx)(p.a,{color:"primary",children:"Columns:"}),Object(n.jsx)(p.a,{children:o.column_location})]}):Object(n.jsx)(n.Fragment,{})]})},Y=a(245),H=a(247),K=a(193),Q=a(52),U=a(192),V=a(190),W=a(53),X=a(121),Z=a(69),$=Object(g.a)((function(e){return{formControl:{margin:e.spacing(3)},button:{margin:e.spacing(1,1,0,0)},root:{display:"flex"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)}}})),ee=function(e){var t=$(),a=o.a.useState(e.streamingSource),c=Object(m.a)(a,2),r=c[0],s=c[1],i=o.a.useState("results"===e.streamingMode?"config-results":"config"),l=Object(m.a)(i,2),d=l[0],j=l[1],u=o.a.useState(e.deviceID),b=Object(m.a)(u,2),x=b[0],h=b[1],f=o.a.useState(!1),O=Object(m.a)(f,2),p=O[0],g=O[1],v=o.a.useState(""),S=Object(m.a)(v,2),y=S[0],w=S[1],C=o.a.useState([]),D=Object(m.a)(C,2),I=D[0],N=D[1],T=o.a.useState([{field:"id",headerName:"ID",width:120},{field:"device_id",headerName:"Device ID",width:240},{field:"name",headerName:"Name",width:240}]),k=Object(m.a)(T,2),R=k[0];k[1];return Object(n.jsxs)(A.a,{xs:12,container:!0,direction:"columns",children:[Object(n.jsx)(A.a,{xs:4,children:Object(n.jsx)("form",{onSubmit:function(t){t.preventDefault(),""!==x?(console.log(r),console.log(x),J.a.post("".concat("http://localhost:5555/")+d,{device_id:x,source:r.toLowerCase()}).then((function(t){console.log(t.data),console.log(e),e.setStreamingMode(t.data.mode),w("Configured Device")})).catch((function(e){e.response?(w(e.response.data.error.message.join(", ")),console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message)}))):w("Must Set DeviceID")},children:Object(n.jsxs)(Q.a,{component:"fieldset",error:p,className:t.formControl,children:[Object(n.jsx)(V.a,{component:"legend",children:"Source:"}),Object(n.jsxs)(H.a,{"aria-label":"source",name:"source",value:r,onChange:function(e){s(e.target.value)},children:[Object(n.jsx)(K.a,{value:"SERIAL",control:Object(n.jsx)(Y.a,{}),label:"Serial"}),Object(n.jsx)(K.a,{value:"TCPIP",control:Object(n.jsx)(Y.a,{}),label:"TCP/IP"}),Object(n.jsx)(K.a,{value:"BLE",control:Object(n.jsx)(Y.a,{}),label:"BLE"}),Object(n.jsx)(K.a,{value:"TEST",control:Object(n.jsx)(Y.a,{}),label:"Test"})]}),Object(n.jsx)(V.a,{component:"legend",children:"Mode:"}),Object(n.jsxs)(H.a,{"aria-label":"mode",name:"Streaming Source",value:d,onChange:function(e){j(e.target.value)},children:[Object(n.jsx)(K.a,{value:"config",control:Object(n.jsx)(Y.a,{}),label:"Sensor Stream"}),Object(n.jsx)(K.a,{value:"config-results",control:Object(n.jsx)(Y.a,{}),label:"Result Stream"})]}),Object(n.jsx)(V.a,{component:"legend",children:"Device ID:"}),Object(n.jsx)(X.a,{id:"outlined-basic",variant:"outlined",value:x,onChange:function(e){h(e.target.value),w(" "),g(!1)}}),Object(n.jsx)(W.a,{type:"submit",variant:"outlined",color:"primary",className:t.button,children:"Configure"}),Object(n.jsx)(U.a,{children:y})]})})}),Object(n.jsxs)(A.a,{xs:8,children:[Object(n.jsx)(W.a,{type:"submit",variant:"outlined",color:"primary",className:t.button,onClick:function(){J.a.post("".concat("http://localhost:5555/","scan"),{device_id:x,source:r.toLowerCase()}).then((function(e){console.log(e.data),N(e.data)}))},children:"Scan"}),Object(n.jsx)(Z.a,{rows:I,columns:R,onRowSelected:function(e){console.log(e.data.device_id),h(e.data.device_id)}})]})]})},te=a(16),ae=a(116),ne=a.n(ae),ce=function(e){return Object(n.jsx)(ne.a,{data:e.data,layout:{autosize:!0}})},oe=Object(g.a)((function(e){return{root:{display:"flex"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)}}}));var re=function(e,t,a,n){fetch(t,{method:"GET"}).then((function(e){var t=e.body.getReader(),c=new ReadableStream({start:function(e){!function c(){t.read().then((function(t){var o=t.done,r=t.value;if(o)e.close();else{var s=new Int16Array(r.buffer);a(function(e,t){for(var a=e.length/t.length,n=Object(te.a)(Array(a).keys()),c=t.map((function(e){return{x:n,y:[],name:e}})),o=0;o<e.length;o+=t.length)for(var r=0;r<t.length;r++)c[r].y.push(e[o+r]);return c}(s,n)),c()}}))}()}});return new Response(c,{headers:{"Content-Type":"text/html"}})}))},se=function(e){var t=oe();Object(u.a)();return Object(n.jsxs)("div",{className:t.details,children:[Object(n.jsx)(p.a,{component:"h5",variant:"h5",children:"Sensor Data"}),Object(n.jsx)(p.a,{variant:"subtitle1",color:"textSecondary"}),Object(n.jsx)(ce,{data:e.streamData}),Object(n.jsxs)("div",{className:t.controls,children:[Object(n.jsx)(W.a,{"aria-label":"disconnect",onClick:function(){re(0,"".concat("http://localhost:5555/","stream"),e.setStreamData,e.columns)},children:"Stream"}),Object(n.jsx)(W.a,{"aria-label":"disconnect",onClick:function(){J.a.get("".concat("http://localhost:5555/","disconnect")).then((function(e){console.log(e.data)}))},children:"Disconnect"})]})]})},ie=0,le=Object(g.a)((function(e){return{root:{display:"flex"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)}}}));var de=function(e,t,a){ie=0,a([]),fetch(t,{method:"GET"}).then((function(e){var t=e.body.getReader(),n=new ReadableStream({start:function(e){!function n(){t.read().then((function(t){var c=t.done,o=t.value;if(c)e.close();else{for(var r=function(e){var t=String.fromCharCode.apply(null,e).split("\n");return t.pop(),t.map((function(e){return JSON.parse(e)}))}(o),s=0;s<r.length;s++)console.log(r[s]),r[s].id=ie,ie+=1,a((function(e){return[].concat(Object(te.a)(e),[r[s]])}));n()}}))}()}});return new Response(n,{headers:{"Content-Type":"text/html"}})}))},je=function(e){var t=o.a.useState([{field:"id",headerName:"ID",width:70},{field:"ModelNumber",headerName:"Model ID",width:240},{field:"Classification",headerName:"Classification",width:240}]),a=Object(m.a)(t,2),c=a[0],r=(a[1],le());Object(u.a)();return Object(n.jsxs)(A.a,{children:[Object(n.jsxs)("div",{className:r.details,children:[Object(n.jsx)(p.a,{component:"h5",variant:"h5",children:"Model Result"}),Object(n.jsx)(p.a,{variant:"subtitle1",color:"textSecondary"}),Object(n.jsxs)("div",{className:r.controls,children:[Object(n.jsx)(W.a,{"aria-label":"disconnect",onClick:function(){de(0,"".concat("http://localhost:5555/","results"),e.setDeviceRows)},children:"Connect"}),Object(n.jsx)(W.a,{"aria-label":"disconnect",onClick:function(){J.a.get("".concat("http://localhost:5555/","disconnect")).then((function(e){console.log(e.data)}))},children:"Disconnect"})]})]}),Object(n.jsx)("div",{style:{height:600,width:"100%"},children:Object(n.jsx)(Z.a,{rows:e.deviceRows,columns:c,pageSize:15,sortModel:[{field:"id",sort:"desc"}]})})]})},ue=a(243),be=function(){var e=o.a.useState(0),t=Object(m.a)(e,2),a=t[0],c=t[1],r=o.a.useState(0),s=Object(m.a)(r,2),i=s[0],l=s[1],d=o.a.useState(0),j=Object(m.a)(d,2),u=j[0],b=j[1],x=o.a.useState([]),h=Object(m.a)(x,2),f=h[0],O=h[1],p=o.a.useState([]),g=Object(m.a)(p,2),S=g[0],y=g[1],w=o.a.useState([]),C=Object(m.a)(w,2),D=C[0],I=C[1],N=o.a.useState([]),T=Object(m.a)(N,2),k=T[0],R=T[1];var M=P();return Object(n.jsxs)("div",{className:M.root,children:[Object(n.jsx)(ue.a,{}),Object(n.jsxs)(A.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:[Object(n.jsx)(v,{}),Object(n.jsx)(G,{onChange:function(e){a!=e&&c(e)}}),Object(n.jsxs)("main",{className:M.content,children:[0===a?Object(n.jsx)(q,{setStreamingMode:l,setColumns:I,setStreamingSource:b,setDeviceID:R}):null,1===a?Object(n.jsx)(ee,{setStreamingMode:l,streamingSource:u,streamingMode:i,deviceID:k}):null,2===a?"results"==i?Object(n.jsx)(je,{deviceRows:S,setDeviceRows:y}):Object(n.jsx)(se,{streamData:f,setStreamData:O,columns:D}):null]})]})]})},xe=function(){return Object(n.jsx)(h,{children:Object(n.jsx)(be,{})})};s.a.render(Object(n.jsx)(xe,{}),document.getElementById("root"))}},[[182,1,2]]]);
//# sourceMappingURL=main.92d551eb.chunk.js.map