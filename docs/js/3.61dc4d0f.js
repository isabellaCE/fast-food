(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"19e1":function(t,e,a){t.exports=a.p+"img/mc-chicken.9ef85f0f.png"},"47e8":function(t,e,a){},6265:function(t,e,a){t.exports=a.p+"img/water.3bea76fa.png"},"665d":function(t,e,a){t.exports=a.p+"img/salad.6bee2269.png"},"68bd":function(t,e,a){t.exports=a.p+"img/fries.68954497.png"},7274:function(t,e,a){t.exports=a.p+"img/lipton.a83e997e.png"},"757e":function(t,e,a){t.exports=a.p+"img/nuggets.8de96f95.png"},"7a31":function(t,e,a){t.exports=a.p+"img/cola.21923ee7.png"},"830c":function(t,e,a){t.exports=a.p+"img/double-cb.9e71e32a.png"},9593:function(t,e,a){},"9e28":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDcxLjYgMjEuN2MtMjEuOS0yMS45LTU3LjMtMjEuOS03OS4yIDBMMzYyLjMgNTEuN2w5Ny45IDk3LjkgMzAuMS0zMC4xYzIxLjktMjEuOSAyMS45LTU3LjMgMC03OS4yTDQ3MS42IDIxLjd6bS0yOTkuMiAyMjBjLTYuMSA2LjEtMTAuOCAxMy42LTEzLjUgMjEuOWwtMjkuNiA4OC44Yy0yLjkgOC42LS42IDE4LjEgNS44IDI0LjZzMTUuOSA4LjcgMjQuNiA1LjhsODguOC0yOS42YzguMi0yLjcgMTUuNy03LjQgMjEuOS0xMy41TDQzNy43IDE3Mi4zIDMzOS43IDc0LjMgMTcyLjQgMjQxLjd6TTk2IDY0QzQzIDY0IDAgMTA3IDAgMTYwVjQxNmMwIDUzIDQzIDk2IDk2IDk2SDM1MmM1MyAwIDk2LTQzIDk2LTk2VjMyMGMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMnY5NmMwIDE3LjctMTQuMyAzMi0zMiAzMkg5NmMtMTcuNyAwLTMyLTE0LjMtMzItMzJWMTYwYzAtMTcuNyAxNC4zLTMyIDMyLTMyaDk2YzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMySDk2eiIvPjwvc3ZnPg=="},a612:function(t,e,a){var n={"./big-mac.png":"e043","./cola.png":"7a31","./double-cb.png":"830c","./fries.png":"68bd","./lipton.png":"7274","./mc-chicken.png":"19e1","./nuggets.png":"757e","./pen-to-square-solid.svg":"9e28","./salad.png":"665d","./trash-solid.svg":"f7be","./water.png":"6265"};function o(t){var e=c(t);return a(e)}function c(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=c,t.exports=o,o.id="a612"},b279:function(t,e,a){"use strict";a("9593")},e043:function(t,e,a){t.exports=a.p+"img/big-mac.88c8ea7d.png"},e2f7:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cardapio"},[e("h4",[t._v("BackOffice")]),t._l(t.produtos,(function(a){return e("div",{key:a.id,staticClass:"produto",on:{click:function(e){return t.toggleActive(a)}}},[e("div",{staticClass:"photo"},[e("img",{attrs:{src:t.getImg(a.photo)}})]),e("div",{staticClass:"description"},[e("span",{staticClass:"name"},[t._v(t._s(a.name))]),e("span",{staticClass:"price"},[t._v("R$ "+t._s(a.price))]),e("div",{staticClass:"quantity-area"},[e("Trash",{attrs:{handleClick:()=>t.removeProduct(a.id)}}),e("Modal",{attrs:{produto:a},on:{updateProductList:function(e){return t.getProducts()}}})],1)])])})),e("ModalAdicionar",{on:{updateProductList:function(e){return t.getProducts()}}})],2)},o=[],c=a("cee4"),i=function(){var t=this,e=t._self._c;return e("svg",{staticClass:"margem",attrs:{xmlns:"http://www.w3.org/2000/svg",height:t.size,viewBox:"0 0 448 512"},on:{click:function(e){return e.preventDefault(),t.handleClick.apply(null,arguments)}}},[e("path",{attrs:{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"}})])},s=[],u={name:"IconTrash",props:{size:{default:"16px"},handleClick:{type:Function,default:()=>{}}}},r=u,l=(a("b279"),a("2877")),d=Object(l["a"])(r,i,s,!1,null,"0089b3da",null),p=d.exports,M=function(){var t=this,e=t._self._c;return e("div",[e("Edit",{attrs:{handleClick:()=>t.openModal=!0}}),e("q-dialog",{attrs:{persistent:""},model:{value:t.openModal,callback:function(e){t.openModal=e},expression:"openModal"}},[e("q-card",[e("q-card-section",{staticClass:"row items-center q-pb-none"},[e("div",{staticClass:"text-h6 q-mr-md"},[t._v("Editar produto")]),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""},on:{click:function(e){return t.cancel()}}})],1),e("q-card-section",[e("q-input",{staticClass:"q-mb-sm",attrs:{outlined:"",value:t.state.name,label:"Nome"},on:{input:function(e){t.state.name=e}}}),e("q-input",{attrs:{outlined:"",value:t.state.price,label:"Preço"},on:{"update:value":function(e){t.state.price=e}}})],1),e("q-card-section",[e("q-btn",{staticClass:"q-mr-sm",attrs:{color:"red",label:"Cancelar"},on:{click:function(e){return t.cancel()}}}),e("q-btn",{attrs:{color:"primary",label:"Confirmar"},on:{click:function(e){return t.updatestate(t.state)}}})],1)],1)],1)],1)},g=[],m=function(){var t=this,e=t._self._c;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:t.size,viewBox:"0 0 512 512"},on:{click:t.handleClick}},[e("path",{attrs:{d:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"}})])},v=[],I={name:"IconEdit",props:{size:{default:"16px"},handleClick:{type:Function,default:()=>{}}}},f=I,h=Object(l["a"])(f,m,v,!1,null,null,null),b=h.exports,L={name:"Modal",components:{Edit:b},props:{produto:{default:{}}},data(){return{state:{},openModal:!1}},methods:{updatestate(t){c["a"].put(`http://localhost:3000/Produtos/${t.id}`,t).then((()=>{this.$emit("updateProductList"),this.openModal=!1})).catch((t=>{console.log(t)}))},cancel(){this.$emit("updateProductList"),this.openModal=!1}},created(){this.state=this.produto}},y=L,C=a("24e8"),z=a("f09f"),j=a("a370"),N=a("9c40"),D=a("27f9"),T=a("7f67"),x=a("eebe"),A=a.n(x),k=Object(l["a"])(y,M,g,!1,null,null,null),w=k.exports;A()(k,"components",{QDialog:C["a"],QCard:z["a"],QCardSection:j["a"],QBtn:N["a"],QInput:D["a"]}),A()(k,"directives",{ClosePopup:T["a"]});var E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"produto"},[e("div",[e("span",{on:{click:function(e){t.openModal=!0}}},[t._v("+")])]),e("q-dialog",{attrs:{persistent:""},model:{value:t.openModal,callback:function(e){t.openModal=e},expression:"openModal"}},[e("q-card",[e("q-card-section",{staticClass:"row items-center q-pb-none"},[e("div",{staticClass:"text-h6 q-mr-md"},[t._v("Adicionar produto")]),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""},on:{click:null}})],1),e("q-card-section",[e("q-input",{staticClass:"q-mb-sm",attrs:{outlined:"",value:t.state.name,label:"Nome"},on:{input:function(e){t.state.name=e}}}),e("q-input",{staticClass:"q-mb-sm",attrs:{outlined:"",value:t.state.price,label:"Preço"},on:{input:function(e){t.state.price=e}}}),e("q-input",{attrs:{outlined:"",value:t.state.photo,label:"Link da imagem"},on:{input:function(e){t.state.photo=e}}})],1),e("q-card-section",[e("q-btn",{staticClass:"q-mr-sm",attrs:{color:"red",label:"Cancelar"}}),e("q-btn",{attrs:{color:"primary",label:"Confirmar"},on:{click:function(e){return t.adicionar()}}})],1)],1)],1)],1)},S=[],q={name:"Modal",data(){return{openModal:!1,state:{id:null,photo:"",name:"",price:null,active:!1,quantity:1}}},methods:{adicionar(){c["a"].post("http://localhost:3000/Produtos/",this.state).then((()=>{this.$emit("updateProductList"),this.openModal=!1})).catch((t=>{console.log(t)}))}}},O=q,Q=(a("f4fa"),Object(l["a"])(O,E,S,!1,null,"76870b54",null)),Y=Q.exports;A()(Q,"components",{QDialog:C["a"],QCard:z["a"],QCardSection:j["a"],QBtn:N["a"],QInput:D["a"]}),A()(Q,"directives",{ClosePopup:T["a"]});var P={components:{Trash:p,Modal:w,ModalAdicionar:Y},name:"BackOffice",data(){return{produtos:{}}},methods:{getProducts(){c["a"].get("http://localhost:3000/Produtos").then((t=>{this.produtos=t.data})).catch((t=>{console.log(t)}))},getImg(t){return t.includes("https")?t:a("a612")("./"+t)},toggleActive(t){t.active=!t.active},total(){var t=0;return this.produtos.forEach((e=>{e.active&&(t+=e.price*e.quantity)})),t.toFixed(2)},removeProduct(t){c["a"].delete(`http://localhost:3000/Produtos/${t}`).then((()=>{this.getProducts()})).catch((t=>{console.log(t)}))}},created(){this.getProducts()},updated(){}},H=P,Z=(a("eb5b"),Object(l["a"])(H,n,o,!1,null,"2816f772",null));e["default"]=Z.exports},e685:function(t,e,a){},eb5b:function(t,e,a){"use strict";a("e685")},f4fa:function(t,e,a){"use strict";a("47e8")},f7be:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTM1LjIgMTcuN0wxMjggMzJIMzJDMTQuMyAzMiAwIDQ2LjMgMCA2NFMxNC4zIDk2IDMyIDk2SDQxNmMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkgzMjBsLTcuMi0xNC4zQzMwNy40IDYuOCAyOTYuMyAwIDI4NC4yIDBIMTYzLjhjLTEyLjEgMC0yMy4yIDYuOC0yOC42IDE3Ljd6TTQxNiAxMjhIMzJMNTMuMiA0NjdjMS42IDI1LjMgMjIuNiA0NSA0Ny45IDQ1SDM0Ni45YzI1LjMgMCA0Ni4zLTE5LjcgNDcuOS00NUw0MTYgMTI4eiIvPjwvc3ZnPg=="}}]);