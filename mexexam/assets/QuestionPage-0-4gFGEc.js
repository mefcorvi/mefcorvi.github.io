const __vite__fileDeps=["assets/interfaces-AKhGdPt-.js","assets/GeneralPage-DD48Jwp2.js","assets/index-DEfrshX-.js","assets/index-CZhs4V27.css","assets/GeneralPage-CyNYAJoz.css","assets/interfaces-CnjOi9ha.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as m,h as ge,r as y,v as M,x as $,y as W,z as he,A as ye,a as re,B as Ae,C as ee,D as ie,E as ke,d as qe,c as Ce,w as H,n as v,g as s,F as Oe,o as q,b as p,q as b,t as x,f as te,p as se,j as O,G as ne,H as oe,l as I,e as be,I as Ee}from"./index-DEfrshX-.js";import{G as Pe,a as Ie}from"./GeneralPage-DD48Jwp2.js";import{G as Re}from"./interfaces-AKhGdPt-.js";const K=Object.assign({"./questions/art-lit-music.ts":()=>m(()=>import("./art-lit-music-BQYj3k_y.js"),[]),"./questions/art-paint-cinema.ts":()=>m(()=>import("./art-paint-cinema-f8o43M2_.js"),[]),"./questions/citizenship.ts":()=>m(()=>import("./citizenship-C8WajnTK.js"),[]),"./questions/gastronomy.ts":()=>m(()=>import("./gastronomy-XnkjYgvu.js"),[]),"./questions/geografy.ts":()=>m(()=>import("./geografy-Djk_r5Cr.js"),[]),"./questions/history-colony.ts":()=>m(()=>import("./history-colony-CEsKSQc0.js"),[]),"./questions/history-independency.ts":()=>m(()=>import("./history-independency-BRIqbiq0.js"),[]),"./questions/history-modern.ts":()=>m(()=>import("./history-modern-C7q8OpuJ.js"),[]),"./questions/history-prespain.ts":()=>m(()=>import("./history-prespain-CDlcUevk.js"),[]),"./questions/history-revoluction.ts":()=>m(()=>import("./history-revoluction-DnDAoPUh.js"),[]),"./questions/interfaces.ts":()=>m(()=>import("./interfaces-AKhGdPt-.js").then(o=>o.i),__vite__mapDeps([0,1,2,3,4,5])),"./questions/science.ts":()=>m(()=>import("./science-Dk57vpCz.js"),[]),"./questions/traditions-culture.ts":()=>m(()=>import("./traditions-culture-C6eoM_xj.js"),[])}),Te=async()=>{const o={sections:[]};await Promise.all(Object.values(K).map(t=>t()));for(const t in K){const u=await K[t]();u&&typeof u=="object"&&"data"in u&&o.sections.push(u.data)}return console.dir(o),o},Qe=ge(()=>{const{questions:o,translations:t,load:u}=De(),d=ae("correct-questions"),a=ae("wrong-questions"),c=y(),g=M({id:-1,value:"No se",isAnswer:!1});t.add("ru","No se","Не знаю");const w=()=>{let r=c.value;for(;r===c.value;)if(r=ze(o,d.value,a.value),!r)return r;return r},e=$(()=>{if(!c.value)return null;const r=o.get(c.value);if(!r)throw new Error(`Failed to get question by id ${c.value}`);return r}),_=y([]),C=()=>{var r;_.value=[...(((r=e.value)==null?void 0:r.options)??[]).sort(()=>Math.random()-.5),g]},l=y(),A=y(!1),k=r=>{c.value=r},h=r=>o.has(r),E=y(0),P=y(0),R=()=>{E.value=0,P.value=0},F=r=>{if(e.value&&e.value.type==="choice"){if(!_.value.includes(r))throw new Error("Current question does not have the selected option");l.value=r}},j=()=>{l.value&&e.value&&(l.value.isAnswer?(E.value++,d.value.add(e.value.id),a.value.delete(e.value.id)):(P.value++,a.value.add(e.value.id),d.value.delete(e.value.id)))},T=()=>{e.value&&e.value.type==="text"&&(A.value=!0)};W(()=>{var r;return(r=e.value)==null?void 0:r.id},()=>{l.value=void 0,A.value=!1,C()},{immediate:!0,flush:"sync"});const L=$(()=>({correctQuestions:d.value.size,wrongQuestions:a.value.size,unansweredQuestions:o.size-d.value.size-a.value.size,totalQuestions:o.size,correctPercentage:d.value.size/o.size*100,wrongPercentage:a.value.size/o.size*100,unansweredPercentage:(o.size-d.value.size-a.value.size)/o.size*100}));return{load:u,stat:L,correctCount:E,correctQuestions:d,wrongQuestions:a,currentOptionsRandomized:_,currentQuestion:e,isAnswerRevealed:A,selectedAnswer:l,translations:t,wrongCount:P,getRandomQuestionId:w,resetCount:R,updateCounters:j,revealAnswer:T,selectAnswer:F,setQuestion:k,hasQuestion:h}});function ae(o){return he(o,()=>new Set,void 0,{serializer:{read(t){return t?new Set(t.split(",")):new Set},write(t){return[...t].join(",")}}})}function ze(o,t,u){if(Math.random()<u.size/10){const a=[...u];return a[Math.floor(Math.random()*a.length)]}if(Math.random()<.2){const a=[...t];return a[Math.floor(Math.random()*a.length)]}const d=[...o.keys()];return d[Math.floor(Math.random()*d.length)]}function De(){const o=new Map,t=new Map,u=xe();return{load:async()=>{var c;const a=await Te();for(const g of a.sections){const w={id:g.id,title:g.title,questions:[]};t.set(w.id,M(w)),u.add("ru",g.title,g.ru.title);for(const e of g.questions){const _={id:e.id,section:w,answer:e.answer,question:e.question,note:e.note,noteImage:"noteImage"in e?e.noteImage:void 0,options:(c=e.options)==null?void 0:c.map((l,A)=>M({id:A,value:l,isAnswer:!1})),type:e.type==="text"?"text":"choice"};if(u.add("ru",e.answer,e.ru.answer),u.add("ru",e.question,e.ru.question),u.add("ru",e.note,e.ru.note),e.ru.options&&e.options)for(let l=0;l<e.ru.options.length;l++)u.add("ru",e.options[l],e.ru.options[l]);_.type==="choice"&&_.options&&_.options.push(M({id:_.options.length,isAnswer:!0,value:_.answer}));const C=M(_);o.set(_.id,C),w.questions.push(C)}}},sections:t,questions:o,translations:u}}const xe=()=>{const o=new Map;return{add:(d,a,c)=>{a&&c&&o.set(`$${d}$${a}`,c)},t:(d,a)=>a?o.get(`$${d}$${a}`)??a:""}},U=new WeakMap;function Me(o,t,u={}){const{mode:d="replace",route:a=ye(),router:c=re(),transform:g=l=>l}=u;U.has(c)||U.set(c,new Map);const w=U.get(c);let e=a.params[o];ke(()=>{e=void 0});let _;const C=Ae((l,A)=>(_=A,{get(){return l(),g(e!==void 0&&e!==""?e:ee(t))},set(k){e!==k&&(e=k===t||k===null?void 0:k,w.set(o,k===t||k===null?void 0:k),A(),ie(()=>{if(w.size===0)return;const h=Object.fromEntries(w.entries());w.clear();const{params:E,query:P,hash:R}=a;c[ee(d)]({params:{...E,...h},query:P,hash:R})}))}}));return W(()=>a.params[o],l=>{e=l,_()},{flush:"sync"}),C}const $e=["src"],Le=["innerHTML"],Ve=qe({__name:"QuestionPage",setup(o){const t=Oe(),u=re(),{load:d,stat:a,isAnswerRevealed:c,correctCount:g,currentOptionsRandomized:w,currentQuestion:e,getRandomQuestionId:_,resetCount:C,revealAnswer:l,selectAnswer:A,updateCounters:k,selectedAnswer:h,setQuestion:E,hasQuestion:P,translations:R,wrongCount:F}=Qe(),j=$(()=>{var n;return((n=e.value)==null?void 0:n.note)!==void 0}),T=Me("id",""),L=y(!1),r=y(!1),J=$(()=>L.value),ue=$(()=>{var n;return r.value||h.value||((n=e.value)==null?void 0:n.type)==="text"}),Q=y(),z=y(!1),X=()=>{if(Q.value=void 0,z.value=!1,P(T.value)){E(T.value);const n=window.history.state["answer-id"],i=window.history.state["answer-revealed"]==="1";if(L.value=!!window.history.state.back,r.value=!!window.history.state.forward,typeof n=="number"){const f=w.value.find(S=>S.id===n);f&&A(f)}i&&l()}else u.replace({params:{id:_()}})};W(T,X),d().then(X);let Y;const G=y(!1);let D;const ce=()=>{Q.value=void 0,window.clearTimeout(Y),D=void 0,window.clearTimeout(D),G.value=!0,D=window.setTimeout(async()=>{var n;D=void 0,history.replaceState({"answer-id":(n=h.value)==null?void 0:n.id,"answer-revealed":c.value?"1":void 0},""),await u.push({params:{id:_()}}),await Ee(h).toBeUndefined(),await ie(),G.value=!1},parseInt(t.pageFadeOutDuration,10))},le=()=>{J.value&&window.history.back()},V=()=>{var n,i;if(!D){if(history.state.forward){history.forward();return}if(!(((n=e.value)==null?void 0:n.type)==="choice"&&!h.value)){if(((i=e.value)==null?void 0:i.type)==="text"&&!c.value){l();return}ce()}}},de=n=>{const i=[];return n.id===-1&&i.push(t.dontKnowOption),h.value?h.value.isAnswer?n===h.value?t.correct:(i.push(t["wrong-fade"]),i):n===Q.value?(i.push(t["correct-blinking"]),i):n.isAnswer?(i.push(t.correct),i):(i.push(t.wrong),i):i},_e=n=>{if(h.value){V();return}if(A(n),k(),!n.isAnswer){const i=w.value.find(f=>f.isAnswer);Q.value=i}Y=window.setTimeout(()=>{Q.value=void 0},1e3)},B=y("es"),ve=n=>{Z(n)||V()},we=()=>{var n;(n=window.getSelection())!=null&&n.isCollapsed&&(B.value==="es"?B.value="ru":B.value="es")},N=n=>R.t(B.value,n),pe=n=>{Z(n)||(n.stopPropagation(),fe())},fe=()=>{z.value=!1},me=()=>{z.value=!0};function Z(n){const i=n.target;return i.tagName==="BUTTON"||i.tagName==="A"}return(n,i)=>(q(),Ce(Pe,{onClick:ve,class:v({[s(t).fadeOut]:G.value})},{topBar:H(()=>[p("div",{class:v(s(t).navigation)},[p("div",{class:v([s(t).backBtn,{[s(t).disabled]:!J.value}]),onClick:b(le,["stop"])},"←",2),p("div",{class:v([s(t).noteBtn,{[s(t).disabled]:!j.value}]),onClick:b(me,["stop"])},"?",2),p("div",{class:v([s(t).forwardBtn,{[s(t).disabled]:!ue.value}]),onClick:b(V,["stop"])},"→",2)],2),p("div",{class:v(s(t).counter),onClick:i[0]||(i[0]=b((...f)=>s(C)&&s(C)(...f),["stop"]))},[p("span",null,x(s(g)),1),te(" / "),p("span",null,x(s(g)+s(F)),1)],2)]),default:H(()=>[p("div",{class:v(s(t).progress)},[p("div",{class:v(s(t).correctAnswers),style:se({width:`${s(a).correctPercentage}%`})},null,6),p("div",{class:v(s(t).wrongAnswers),style:se({width:`${s(a).wrongPercentage}%`})},null,6)],2),s(e)?(q(),O("div",{key:0,class:v(s(t).question)},[p("div",{class:v(s(t).text),onClick:b(we,["stop"])},[p("div",null,x(N(s(e).question)),1)],2),p("div",{class:v(s(t).answers)},[s(e).type==="choice"?(q(!0),O(ne,{key:0},oe(s(w),f=>(q(),O("div",{key:`${s(e).id}-${f.id}`,class:v(s(t).option)},[be(Re,{onClick:b(S=>_e(f),["stop"]),class:v([s(t).button,de(f)])},{default:H(()=>[te(x(N(f.value)),1)]),_:2},1032,["onClick","class"])],2))),128)):I("",!0),s(e).type==="text"?(q(),O("div",{key:1,class:v([s(t).answer,s(c)?"":s(t).hiddenAnswer]),onClick:b(V,["stop"])},[(q(!0),O(ne,null,oe(N(s(e).answer).split(`
`),(f,S)=>(q(),O("p",{key:S},x(f),1))),128))],2)):I("",!0)],2)],2)):I("",!0),s(e)?(q(),O("div",{key:1,onClick:b(pe,["stop"]),class:v([s(t).noteContainer,{[s(t).hidden]:!z.value}])},[s(e).note?(q(),O("div",{key:0,class:v(["scroll",[s(t).note,{[s(t).hidden]:!z.value}]])},[s(e).noteImage?(q(),O("img",{key:0,src:`/notes/${s(e).noteImage}`},null,8,$e)):I("",!0),p("div",{innerHTML:N(s(e).note)},null,8,Le)],2)):I("",!0)],2)):I("",!0)]),_:1},8,["class"]))}}),Be="200ms",Ne="_counter_116a1_4",Se="_question_116a1_8",Fe="_text_116a1_15",je="_answers_116a1_41",Ge="_option_116a1_51",He="_fadeOut_116a1_55",Ke="_button_116a1_61",Ue="_correct_116a1_61",We="_success_116a1_1",Je="_wrong_116a1_68",Xe="_next_116a1_75",Ye="_answer_116a1_41",Ze="_hiddenAnswer_116a1_88",et="_navigation_116a1_91",tt="_back_116a1_98",st="_forward_116a1_102",nt="_disabled_116a1_111",ot="_progress_116a1_115",at="_correctAnswers_116a1_124",rt="_wrongAnswers_116a1_130",it="_noteContainer_116a1_148",ut="_hidden_116a1_88",ct="_note_116a1_148",lt={pageFadeOutDuration:Be,counter:Ne,question:Se,text:Fe,answers:je,option:Ge,fadeOut:He,button:Ke,correct:Ue,"correct-blinking":"_correct-blinking_116a1_65",success:We,wrong:Je,"wrong-fade":"_wrong-fade_116a1_72",next:Xe,answer:Ye,hiddenAnswer:Ze,navigation:et,back:tt,forward:st,disabled:nt,progress:ot,correctAnswers:at,wrongAnswers:rt,noteContainer:it,hidden:ut,note:ct},dt={$style:lt},pt=Ie(Ve,[["__cssModules",dt]]);export{pt as default};
