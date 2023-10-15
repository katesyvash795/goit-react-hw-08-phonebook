"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[391],{7391:function(n,r,e){e.r(r),e.d(r,{default:function(){return H}});var t,o,i,c,d,a=e(2204),s=e(2791),u=e(9434),l=e(5705),x=e(5218),p=e(168),f=e(6487),b=f.ZP.div(t||(t=(0,p.Z)(["\ndisplay: flex;\n    flex-direction: column;\n    background-color: #d9d9d9;\n    padding: 50px;\n    border-radius: 10px;\n    width: 400px;\n    margin: 0 auto;\n    "]))),m=f.ZP.label(o||(o=(0,p.Z)(["\n  margin-bottom: 5px;\n"]))),h=(0,f.ZP)(l.l0)(i||(i=(0,p.Z)(["\n  flex-direction: column;\n  align-items: center;\n  justyfy-content: center;\n  display: flex;\n"]))),j=(0,f.ZP)(l.gN)(c||(c=(0,p.Z)(["\n  padding: 5px;\n  margin-bottom: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 16px;\n"]))),v=f.ZP.button(d||(d=(0,p.Z)(["\n  padding: 10px 20px;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 16px;\n\n  &:hover {\n    background-color: #014287;\n  }\n"]))),Z=function(n){return n.contacts.items},g=function(n){return n.contacts.isLoading},k=function(n){return n.contacts.error},y=function(n){return n.filter},P=e(184);var w,C,z,F=function(){var n=(0,u.I0)(),r=(0,u.v9)(Z);return(0,P.jsx)(l.J9,{initialValues:{name:"",number:""},onSubmit:function(e,t){var o=t.resetForm,i=e.name,c=e.number;if(r.find((function(n){return n.name.toLowerCase()===i.toLowerCase()})))return x.ZP.error("".concat(i," already exists.")),void o();n((0,a.uK)({name:i,number:c})),x.ZP.success("".concat(i," added")),o()},children:function(n){var r=n.handleSubmit;return(0,P.jsx)(b,{children:(0,P.jsxs)(h,{onSubmit:r,children:[(0,P.jsx)(m,{htmlFor:"name",children:"Name:"}),(0,P.jsx)(j,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0}),(0,P.jsx)(m,{htmlFor:"number",children:"Number:"}),(0,P.jsx)(j,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",required:!0}),(0,P.jsx)(v,{type:"submit",children:"Add Contact"}),(0,P.jsx)(x.x7,{})]})})}})},L=f.ZP.ul(w||(w=(0,p.Z)(["\n  list-style: none;\n  width: 400px;\n  padding: 0;\n"]))),N=f.ZP.li(C||(C=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 10px 0;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n"]))),A=f.ZP.button(z||(z=(0,p.Z)(["\npadding: 10px 20px;\nbackground-color: #e30b0b;\ncolor: #fff;\nborder: none;\ntext-decoration: none;\nborder-radius: 4px;\ncursor: pointer;\nfont-size: 16px;\n\n&:hover {\n  background-color:#9d0000;\n}\n"])));var I,_,S,q,E=function(){var n=(0,u.v9)(Z),r=(0,u.v9)(y),e=(0,u.I0)(),t=n.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())}));return(0,P.jsx)(L,{children:t.map((function(n){return(0,P.jsxs)(N,{children:[(0,P.jsxs)("div",{children:[(0,P.jsxs)("b",{children:[n.name,":"]})," ",n.number]}),(0,P.jsx)(A,{onClick:function(){return r=n.id,void e((0,a.GK)(r));var r},children:"Delete"})]},n.id)}))})},G=e(4794),K=f.ZP.div(I||(I=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 300px;\n  margin: 0 auto;\n"]))),D=f.ZP.label(_||(_=(0,p.Z)(["\n  margin-bottom: 5px;\n"]))),J=f.ZP.input(S||(S=(0,p.Z)(["\n  padding: 5px;\n  margin-bottom: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 16px;\n"]))),R=f.ZP.button(q||(q=(0,p.Z)(["\n  padding: 10px 20px;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 16px;\n\n  &:hover {\n    background-color: #014287;\n  }\n"])));var T=function(){var n=(0,u.v9)(y),r=(0,u.I0)();return(0,P.jsxs)(K,{children:[(0,P.jsx)(D,{children:"Filter contacts by name:"}),(0,P.jsx)(J,{type:"text",name:"filter",value:n,onChange:function(n){r((0,G.N)(n.currentTarget.value))}}),(0,P.jsx)(R,{type:"button",onClick:function(){r((0,G.N)(""))},children:"Reset filters"})]})},V=e(1006),Y=e(9806),$=e(1632),B=function(){return(0,P.jsxs)("div",{children:[(0,P.jsx)("h1",{margin:"20px",children:"Error"}),(0,P.jsx)(Y.G,{icon:$.nYk,size:"3x",color:"red"})]})};var H=function(){var n=(0,u.v9)(g),r=(0,u.v9)(k),e=(0,u.I0)();return(0,s.useEffect)((function(){e((0,a.yF)())}),[e]),(0,P.jsx)("div",{children:(0,P.jsxs)("center",{children:[(0,P.jsx)("h1",{children:"Phonebook"}),(0,P.jsx)(F,{}),(0,P.jsx)("h2",{children:"Contacts"}),(0,P.jsx)(T,{}),n&&!r&&(0,P.jsx)(V.Z,{}),r&&!n&&(0,P.jsx)(B,{}),!n&&!r&&(0,P.jsx)(E,{})]})})}}}]);
//# sourceMappingURL=391.b884046e.chunk.js.map