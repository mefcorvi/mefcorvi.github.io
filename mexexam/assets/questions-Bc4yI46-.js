import{d as v,o as f,c as y,f as A,_ as o,A as h,H as w,C as _}from"./index-C8Ap_B6C.js";const D=["src"],b=v({__name:"SectionImage",props:{section:{}},setup(t){return(i,s)=>i.section.image?(f(),y("img",{key:0,src:`/sections/${i.section.image}`},null,8,D)):A("",!0)}}),P=[{id:"u6w4x",title:"Artes I: Literatura y música",image:"literatura.jpg",ru:{title:"Искусство I: Литература и музыка"},questions:()=>o(()=>import("./art-lit-music-CTAqb8rE.js"),[]).then(t=>t.questions)},{id:"bzymvt",title:"Artes II: Pintura y cine",image:"pintura.jpg",ru:{title:"Искусство II: Живопись и кино"},questions:()=>o(()=>import("./art-paint-cinema-BTqFXaMu.js"),[]).then(t=>t.questions)},{id:"m2661",title:"Civismo",image:"citizenship.jpg",ru:{title:"Гражданство"},questions:()=>o(()=>import("./citizenship-BgOGu2rN.js"),[]).then(t=>t.questions)},{id:"k91hli",title:"Gastronomía",image:"gastronomy.webp",ru:{title:"Гастрономия"},questions:()=>o(()=>import("./gastronomy-D-iSN9E5.js"),[]).then(t=>t.questions)},{id:"hmc4a",title:"Geografía y población",image:"geography.webp",ru:{title:"География и население"},questions:()=>o(()=>import("./geography-Cxsyzvwb.js"),[]).then(t=>t.questions)},{id:"z7ige6",title:"Historia: Conquista y Colonia",ru:{title:"История: Завоевание и колония"},questions:()=>o(()=>import("./history-colony-BWPUwWQe.js"),[]).then(t=>t.questions)},{id:"u7glcp",title:"Historia: Independencia",image:"independency.webp",ru:{title:"История: Независимость"},questions:()=>o(()=>import("./history-independence-CrY8PT0d.js"),[]).then(t=>t.questions)},{id:"okkktn",title:"Historia: México Contemporáneo",image:"modern.webp",ru:{title:"История: Современная Мексика"},questions:()=>o(()=>import("./history-modern-CIl_RQB9.js"),[]).then(t=>t.questions)},{id:"zpvby",title:"Historia: México Prehispánico",image:"prehispanic.webp",ru:{title:"История: Доколумбова Мексика"},questions:()=>o(()=>import("./history-prespain-BFR10AWv.js"),[]).then(t=>t.questions)},{id:"v00zr",title:"Historia: Revolución",image:"revolucion.webp",ru:{title:"История: Революция"},questions:()=>o(()=>import("./history-revolution-Q3jNeZlz.js"),[]).then(t=>t.questions)},{id:"xhrpl7t",title:"Ciencia y deportes",image:"science.webp",ru:{title:"Наука и спорт"},questions:()=>o(()=>import("./science-DlttjLvF.js"),[]).then(t=>t.questions)},{id:"iy3qg",title:"Tradiciones y cultura",image:"traditions.webp",ru:{title:"Традиции и культура"},questions:()=>o(()=>import("./traditions-culture-CuUepV60.js"),[]).then(t=>t.questions)}],R=async()=>P,L=h(()=>{const t=new Map,i=(a,r,p)=>{r&&p&&t.set(`$${a}$${r}`,p)},s=(a,r)=>r?t.get(`$${a}$${r}`)??r:"";return i("es","I don't know","No sé"),i("ru","I don't know","Не знаю"),{add:i,t:s}});var m=(t=>(t.Idle="idle",t.Loading="loading",t.Loaded="loaded",t.Error="error",t))(m||{});function T(t,i){return async()=>{t().loadingStatus="loading";try{await i(),t().loadingStatus="loaded"}catch{t().loadingStatus="error"}}}const O=h(()=>{const t=w(new Map),i=w(new Map),s=L(),a=async()=>{if(i.size>0)return;const c=await R();for(const n of c){const d={id:n.id,title:n.title,questions:[],image:n.image,loadingStatus:m.Idle,load:T(()=>d,async()=>{var g;if(d.loadingStatus===m.Loaded)return;const I=await n.questions();for(const e of I){const u={id:e.id,section:d,answer:e.answer,question:e.question,note:e.note,noteImage:"noteImage"in e?e.noteImage:void 0,options:(g=e.options)==null?void 0:g.map((l,E)=>_({id:E,value:l,isAnswer:!1})),type:e.type==="text"?"text":"choice"};if(e.ru&&(s.add("ru",e.answer,e.ru.answer),s.add("ru",e.question,e.ru.question),s.add("ru",e.note,e.ru.note),e.ru.options&&e.options))for(let l=0;l<e.ru.options.length;l++)s.add("ru",e.options[l],e.ru.options[l]);u.type==="choice"&&u.options&&u.options.push(_({id:u.options.length,isAnswer:!0,value:u.answer}));const q=_(u);t.set(u.id,q),d.questions.push(q)}})};i.set(d.id,_(d)),s.add("ru",n.title,n.ru.title)}};return{loadAll:async()=>{await a(),await Promise.all([...i.values()].map(c=>c.load()))},loadSection:async c=>{await a();const n=i.get(c);n&&await n.load()},loadSections:a,questions:t,sections:i}});export{b as _,L as a,O as u};
