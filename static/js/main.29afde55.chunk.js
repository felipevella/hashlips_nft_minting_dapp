(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{240:function(n,e){},242:function(n,e){},244:function(n,e){},248:function(n,e){},275:function(n,e){},277:function(n,e){},286:function(n,e){},288:function(n,e){},298:function(n,e){},300:function(n,e){},419:function(n,e){},421:function(n,e){},428:function(n,e){},429:function(n,e){},520:function(n,e,t){},521:function(n,e,t){"use strict";t.r(e);var c,a,r,o,i,s,l,d,u,p,x,b,j,h,O,g,f=t(1),m=t(83),C=t.n(m),v=t(42),y=t(68),A=t(15),w=t(17),S=t.n(w),E=t(56),T=t(66),N=t.n(T),_=t(214),k=t.n(_),M=t(67),D=t(215),R=t(13),I={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},L=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(R.a)(Object(R.a)({},I),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(R.a)(Object(R.a)({},n),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(R.a)(Object(R.a)({},I),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(R.a)(Object(R.a)({},n),{},{account:e.payload.account});default:return n}},K={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},P=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(R.a)(Object(R.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(R.a)(Object(R.a)({},n),{},{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(R.a)(Object(R.a)({},K),{},{loading:!1,error:!0,errorMsg:e.payload});default:return n}},U=Object(M.b)({blockchain:L,data:P}),F=[D.a],W=Object(M.c)(M.a.apply(void 0,F)),z=Object(M.d)(U,W),H=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},Y=function(){return function(){var n=Object(v.a)(S.a.mark((function n(e){var t;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,z.getState().blockchain.smartContract.methods.totalSupply().call();case 4:t=n.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:t}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),e(H("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},B=function(n){return{type:"CONNECTION_FAILED",payload:n}},G=function(n){return function(){var e=Object(v.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:n}}),t(Y());case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},q=t(16),Q=q.a.div(c||(c=Object(A.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),X=q.a.div(a||(a=Object(A.a)(["\n  height: 8px;\n  width: 8px;\n"]))),J=q.a.div(r||(r=Object(A.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=q.a.div(o||(o=Object(A.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=q.a.div(i||(i=Object(A.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=q.a.div(s||(s=Object(A.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var e=n.flex;return e||0}),(function(n){var e=n.fd;return e||"column"}),(function(n){var e=n.jc;return e||"flex-start"}),(function(n){var e=n.ai;return e||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),nn=q.a.p(l||(l=Object(A.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),en=(q.a.p(d||(d=Object(A.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),q.a.p(u||(u=Object(A.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),tn=(q.a.div(p||(p=Object(A.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),t(4)),cn=q.a.button(x||(x=Object(A.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),an=q.a.button(b||(b=Object(A.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),rn=q.a.div(j||(j=Object(A.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),on=q.a.img(h||(h=Object(A.a)(["\n  width: 100px;\n  @media (min-width: 767px) {\n    width: 150px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),sn=q.a.img(O||(O=Object(A.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),ln=q.a.a(g||(g=Object(A.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var dn=function(){var n,e,t=Object(E.b)(),c=Object(E.c)((function(n){return n.blockchain})),a=Object(E.c)((function(n){return n.data})),r=Object(f.useState)(!1),o=Object(y.a)(r,2),i=o[0],s=o[1],l=Object(f.useState)("Clique em COMPRAR para cunhar seu NFT."),d=Object(y.a)(l,2),u=d[0],p=d[1],x=Object(f.useState)(1),b=Object(y.a)(x,2),j=b[0],h=b[1],O=Object(f.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),g=Object(y.a)(O,2),m=g[0],C=g[1],A=function(){""!==c.account&&null!==c.smartContract&&t(Y(c.account))},w=function(){var n=Object(v.a)(S.a.mark((function n(){var e,t;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,C(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(f.useEffect)((function(){w()}),[]),Object(f.useEffect)((function(){A()}),[c.account]),Object(tn.jsx)(Q,{children:Object(tn.jsxs)($,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:m.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(tn.jsx)(on,{alt:"logo",src:"/config/images/logo.png"}),Object(tn.jsx)(J,{}),Object(tn.jsxs)(rn,{flex:1,style:{padding:24},test:!0,children:[Object(tn.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(tn.jsx)(sn,{alt:"example",src:"/config/images/example.gif"})}),Object(tn.jsx)(Z,{}),Object(tn.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(tn.jsxs)(nn,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[a.totalSupply," / ",m.MAX_SUPPLY]}),Object(tn.jsx)(en,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(tn.jsx)(ln,{target:"_blank",href:m.SCAN_LINK,children:(n=m.CONTRACT_ADDRESS,e=15,n.length>e?"".concat(n.substring(0,e),"..."):n)})}),Object(tn.jsx)(J,{}),Number(a.totalSupply)>=m.MAX_SUPPLY?Object(tn.jsxs)(tn.Fragment,{children:[Object(tn.jsx)(nn,{style:{textAlign:"center",color:"var(--accent-text)"},children:"A campanha Acabou."}),Object(tn.jsxs)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Voc\xea ainda pode encontrar ",m.NFT_NAME," em"]}),Object(tn.jsx)(J,{}),Object(tn.jsx)(ln,{target:"_blank",href:m.MARKETPLACE_LINK,children:m.MARKETPLACE})]}):Object(tn.jsxs)(tn.Fragment,{children:[Object(tn.jsxs)(nn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",m.SYMBOL," custa ",m.DISPLAY_COST," ",m.NETWORK.SYMBOL,"."]}),Object(tn.jsx)(X,{}),Object(tn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:"*exclu\xeddas taxas de g\xe1s."}),Object(tn.jsx)(J,{}),""===c.account||null===c.smartContract?Object(tn.jsxs)($,{ai:"center",jc:"center",children:[Object(tn.jsxs)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Conectar a rede ",m.NETWORK.NAME]}),Object(tn.jsx)(J,{}),Object(tn.jsx)(cn,{onClick:function(n){n.preventDefault(),t(function(){var n=Object(v.a)(S.a.mark((function n(e){var t,c,a,r,o,i,s,l,d;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=n.sent,n.next=6,t.json();case 6:return c=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=n.sent,n.next=12,a.json();case 12:if(r=n.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){n.next=33;break}return N.a.setProvider(i),s=new k.a(i),n.prev=18,n.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=n.sent,n.next=24,i.request({method:"net_version"});case 24:n.sent==r.NETWORK.ID?(d=new N.a(c,r.CONTRACT_ADDRESS),e({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(n){e(G(n[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):e(B("Change network to ".concat(r.NETWORK.NAME,"."))),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(18),e(B("Something went wrong."));case 31:n.next=34;break;case 33:e(B("Install Metamask."));case 34:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(e){return n.apply(this,arguments)}}()),A()},children:"CONECTAR"}),""!==c.errorMsg?Object(tn.jsxs)(tn.Fragment,{children:[Object(tn.jsx)(J,{}),Object(tn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(tn.jsxs)(tn.Fragment,{children:[Object(tn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:u}),Object(tn.jsx)(V,{}),Object(tn.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(tn.jsx)(an,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=j-1;n<1&&(n=1),h(n)}()},children:"-"}),Object(tn.jsx)(V,{}),Object(tn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(tn.jsx)(V,{}),Object(tn.jsx)(an,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=j+1;n>10&&(n=10),h(n)}()},children:"+"})]}),Object(tn.jsx)(J,{}),Object(tn.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(tn.jsx)(cn,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=m.WEI_COST,e=m.GAS_LIMIT,a=String(n*j),r=String(e*j);console.log("Cost: ",a),console.log("Gas limit: ",r),p("Cunhando sua ".concat(m.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(j).send({gasLimit:String(r),to:m.CONTRACT_ADDRESS,from:c.account,value:a}).once("error",(function(n){console.log(n),p("Sorry, something went wrong please try again later."),s(!1)})).then((function(n){console.log(n),p("WOW, the ".concat(m.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),t(Y(c.account))}))}(),A()},children:i?"OCUPADO":"COMPRAR"})})]})]}),Object(tn.jsx)(V,{})]}),Object(tn.jsx)(Z,{}),Object(tn.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(tn.jsx)(sn,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}})})]}),Object(tn.jsx)(V,{}),Object(tn.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(tn.jsxs)(en,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Confirme se est\xe1 conectado a rede correta. (",m.NETWORK.NAME," Mainnet) e se o endere\xe7o do contrato est\xe1 correto. Aten\xe7\xe3o: Uma vez efetuada a compra, \xe9 impossivel reverte-la."]}),Object(tn.jsx)(J,{}),Object(tn.jsxs)(en,{style:{textAlign:"center",color:"var(--primary-text)"},children:["N\xf3s limitamos o valor da taxa de g\xe1s para ",m.GAS_LIMIT,", assim o contrato pode cunhar sua NFT com sucesso. N\xf3s recomendamos que n\xe3o diminuia o limite de g\xe1s."]})]})]})})},un=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,526)).then((function(e){var t=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),c(n),a(n),r(n),o(n)}))};t(520);C.a.render(Object(tn.jsx)(E.a,{store:z,children:Object(tn.jsx)(dn,{})}),document.getElementById("root")),un()}},[[521,1,2]]]);
//# sourceMappingURL=main.29afde55.chunk.js.map