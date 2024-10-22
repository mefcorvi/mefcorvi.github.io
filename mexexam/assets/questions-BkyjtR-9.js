import{d as I,o as v,c as f,f as y,_ as i,A as h,H as g,C as _}from"./index-F-FeFYvf.js";const A=["src"],V=I({__name:"SectionImage",props:{section:{}},setup(t){return(o,s)=>o.section.image?(v(),f("img",{key:0,src:`/sections/${o.section.image}`},null,8,A)):y("",!0)}}),D=[{id:"u6w4x",title:"Artes I: Literatura y música",image:"literatura.jpg",ru:{title:"Искусство I: Литература и музыка"},questions:()=>i(()=>import("./art-lit-music-CTAqb8rE.js"),[]).then(t=>t.questions)},{id:"bzymvt",title:"Artes II: Pintura y cine",image:"pintura.jpg",ru:{title:"Искусство II: Живопись и кино"},questions:()=>i(()=>import("./art-paint-cinema-BTqFXaMu.js"),[]).then(t=>t.questions)},{id:"m2661",title:"Civismo",image:"citizenship.jpg",ru:{title:"Гражданство"},questions:()=>i(()=>import("./citizenship-BgOGu2rN.js"),[]).then(t=>t.questions)},{id:"k91hli",title:"Gastronomía",image:"gastronomy.webp",ru:{title:"Гастрономия"},questions:()=>i(()=>import("./gastronomy-D-iSN9E5.js"),[]).then(t=>t.questions)},{id:"hmc4a",title:"Geografía y población",image:"geography.webp",ru:{title:"География и население"},questions:()=>i(()=>import("./geography-Cxsyzvwb.js"),[]).then(t=>t.questions)},{id:"z7ige6",title:"Historia: Conquista y Colonia",ru:{title:"История: Завоевание и колония"},questions:()=>i(()=>import("./history-colony-BWPUwWQe.js"),[]).then(t=>t.questions)},{id:"u7glcp",title:"Historia: Independencia",image:"independency.webp",ru:{title:"История: Независимость"},questions:()=>i(()=>import("./history-independence-CrY8PT0d.js"),[]).then(t=>t.questions)},{id:"okkktn",title:"Historia: México Contemporáneo",image:"modern.webp",ru:{title:"История: Современная Мексика"},questions:()=>i(()=>import("./history-modern-CIl_RQB9.js"),[]).then(t=>t.questions)},{id:"zpvby",title:"Historia: México Prehispánico",image:"prehispanic.webp",ru:{title:"История: Доколумбова Мексика"},questions:()=>i(()=>import("./history-prespain-BFR10AWv.js"),[]).then(t=>t.questions)},{id:"v00zr",title:"Historia: Revolución",image:"revolucion.webp",ru:{title:"История: Революция"},questions:()=>i(()=>import("./history-revolution-Q3jNeZlz.js"),[]).then(t=>t.questions)},{id:"xhrpl7t",title:"Ciencia y deportes",image:"science.webp",ru:{title:"Наука и спорт"},questions:()=>i(()=>import("./science-DlttjLvF.js"),[]).then(t=>t.questions)},{id:"iy3qg",title:"Tradiciones y cultura",image:"traditions.webp",ru:{title:"Традиции и культура"},questions:()=>i(()=>import("./traditions-culture-CuUepV60.js"),[]).then(t=>t.questions)}],P=async()=>D,R=h(()=>{const t=new Map;return{add:(r,n,u)=>{n&&u&&t.set(`$${r}$${n}`,u)},t:(r,n)=>n?t.get(`$${r}$${n}`)??n:""}});var p=(t=>(t.Idle="idle",t.Loading="loading",t.Loaded="loaded",t.Error="error",t))(p||{});function L(t,o){return async()=>{t().loadingStatus="loading";try{await o(),t().loadingStatus="loaded"}catch{t().loadingStatus="error"}}}const b=h(()=>{const t=g(new Map),o=g(new Map),s=R(),r=async()=>{if(o.size>0)return;const u=await P();for(const d of u){const l={id:d.id,title:d.title,questions:[],image:d.image,loadingStatus:p.Idle,load:L(()=>l,async()=>{var m;if(l.loadingStatus===p.Loaded)return;const w=await d.questions();for(const e of w){const a={id:e.id,section:l,answer:e.answer,question:e.question,note:e.note,noteImage:"noteImage"in e?e.noteImage:void 0,options:(m=e.options)==null?void 0:m.map((c,E)=>_({id:E,value:c,isAnswer:!1})),type:e.type==="text"?"text":"choice"};if(e.ru&&(s.add("ru",e.answer,e.ru.answer),s.add("ru",e.question,e.ru.question),s.add("ru",e.note,e.ru.note),e.ru.options&&e.options))for(let c=0;c<e.ru.options.length;c++)s.add("ru",e.options[c],e.ru.options[c]);a.type==="choice"&&a.options&&a.options.push(_({id:a.options.length,isAnswer:!0,value:a.answer}));const q=_(a);t.set(a.id,q),l.questions.push(q)}})};o.set(l.id,_(l)),s.add("ru",d.title,d.ru.title)}};return{loadAll:async()=>{await r(),await Promise.all([...o.values()].map(u=>u.load()))},loadSections:r,questions:t,sections:o}});export{V as _,R as a,b as u};
