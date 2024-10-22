import{p as le,l as Y,q as G,s as ce,v as V,x as Z,y as de,z as ve,A as _e,B as f,C as we,D as E,d as fe,h as pe,i as B,n as d,b as t,E as ge,o as w,a as _,w as O,j as T,e as K,c as m,t as F,F as U,r as W,f as S,m as me,G as ke,R as he}from"./index-BoMVGiAV.js";import{G as be,m as ye,S as J,a as Ae,_ as Ce}from"./GeneralPage-CdK4FDLy.js";import{G as je}from"./GeneralButton-BT71v6vz.js";import{u as Qe,a as ze,_ as xe}from"./questions-B5amNmbu.js";const D=new WeakMap;function Oe(l,e,i={}){const{mode:k="replace",route:u=le(),router:p=Y(),transform:z=v=>v}=i;D.has(p)||D.set(p,new Map);const r=D.get(p);let s=u.params[l];de(()=>{s=void 0});let y;const g=ce((v,x)=>(y=x,{get(){return v(),z(s!==void 0&&s!==""?s:V(e))},set(c){s!==c&&(s=c===e||c===null?void 0:c,r.set(l,c===e||c===null?void 0:c),x(),Z(()=>{if(r.size===0)return;const A=Object.fromEntries(r.entries());r.clear();const{params:C,query:M,hash:h}=u;p[V(k)]({params:{...C,...A},query:M,hash:h})}))}}));return G(()=>u.params[l],v=>{s=v,y()},{flush:"sync"}),g}function X(l){return ve(l,()=>new Set,void 0,{serializer:{read(e){return e?new Set(e.split(",")):new Set},write(e){return[...e].join(",")}}})}const Se=_e(()=>{const l=X("correct-questions-2"),e=X("wrong-questions-2"),{questions:i,loadAll:k}=Qe(),u=f(),p=we({id:-1,value:"I don't know",isAnswer:!1}),z=()=>{let o=u.value;for(;o===u.value;)if(o=Me(i,l.value,e.value),!o)return o;return o},r=E(()=>{if(!u.value)return null;const o=i.get(u.value);if(!o)throw new Error(`Failed to get question by id ${u.value}`);return o}),s=f([]),y=()=>{var o;s.value=[...(((o=r.value)==null?void 0:o.options)??[]).sort(()=>Math.random()-.5),p]},g=f(),v=f(!1),x=o=>{u.value=o},c=o=>i.has(o),A=f(0),C=f(0),M=()=>{A.value=0,C.value=0},h=o=>{if(r.value&&r.value.type==="choice"){if(!s.value.includes(o))throw new Error("Current question does not have the selected option");g.value=o}},j=()=>{g.value&&r.value&&(g.value.isAnswer?(A.value++,l.value.add(r.value.id),e.value.delete(r.value.id)):(C.value++,e.value.add(r.value.id),l.value.delete(r.value.id)))},Q=()=>{r.value&&r.value.type==="text"&&(v.value=!0)};G(()=>{var o;return(o=r.value)==null?void 0:o.id},()=>{g.value=void 0,v.value=!1,y()},{immediate:!0,flush:"sync"});const P=E(()=>({correctQuestions:l.value.size,wrongQuestions:e.value.size,unansweredQuestions:i.size-l.value.size-e.value.size,totalQuestions:i.size,correctPercentage:l.value.size/i.size*100,wrongPercentage:e.value.size/i.size*100,unansweredPercentage:(i.size-l.value.size-e.value.size)/i.size*100}));return{startAll:async()=>{await k()},stat:P,correctCount:A,correctQuestions:l,wrongQuestions:e,currentOptionsRandomized:s,currentQuestion:r,isAnswerRevealed:v,selectedAnswer:g,wrongCount:C,getRandomQuestionId:z,resetCount:M,updateCounters:j,revealAnswer:Q,selectAnswer:h,setQuestion:x,hasQuestion:c}});function Me(l,e,i){if(Math.random()<i.size/10){const u=[...i];return u[Math.floor(Math.random()*u.length)]}if(Math.random()<.2){const u=[...e];return u[Math.floor(Math.random()*u.length)]}const k=[...l.keys()];return k[Math.floor(Math.random()*k.length)]}const qe=["src"],Pe=["innerHTML"],Re=fe({__name:"QuestionPage",setup(l){const e=ge(),i=Y(),k=ze(),{startAll:u,stat:p,isAnswerRevealed:z,currentOptionsRandomized:r,currentQuestion:s,getRandomQuestionId:y,revealAnswer:g,selectAnswer:v,updateCounters:x,selectedAnswer:c,setQuestion:A,hasQuestion:C}=Se(),M=E(()=>{var n;return((n=s.value)==null?void 0:n.note)!==void 0}),h=Oe("id",""),j=f(),Q=f(!1),P=()=>{h.value!==""&&(j.value=void 0,Q.value=!1,C(h.value)?A(h.value):i.replace({params:{id:y()}}))};G(h,P),u().then(P);let I;const o=f(!1);let q;const ee=()=>{j.value=void 0,window.clearTimeout(I),q=void 0,window.clearTimeout(q),o.value=!0,q=window.setTimeout(async()=>{q=void 0,await i.replace({params:{id:y()}}),await ke(c).toBeUndefined(),await Z(),o.value=!1},parseInt(e.pageFadeOutDuration,10))},$=()=>{var n,a;if(!q&&!(((n=s.value)==null?void 0:n.type)==="choice"&&!c.value)){if(((a=s.value)==null?void 0:a.type)==="text"&&!z.value){g();return}ee()}},te=n=>{const a=[];return n.id===-1&&a.push(e.dontKnowOption),c.value?c.value.isAnswer?n===c.value?e.correct:(a.push(e["wrong-fade"]),a):n===j.value?(a.push(e["correct-blinking"]),a):n.isAnswer?(a.push(e.correct),a):(a.push(e.wrong),a):a},se=n=>{if(c.value){$();return}if(v(n),x(),!n.isAnswer){const a=r.value.find(b=>b.isAnswer);j.value=a}I=window.setTimeout(()=>{j.value=void 0},1e3)},R=f("es"),ne=n=>{L(n)||$()},oe=()=>{var n;(n=window.getSelection())!=null&&n.isCollapsed&&(R.value==="es"?R.value="ru":R.value="es")},N=n=>k.t(R.value,n),re=n=>{L(n)||(n.stopPropagation(),ae())},ae=()=>{Q.value=!1},ie=()=>{Q.value=!0},ue=()=>{i.push({name:he.Settings})};function L(n){const a=n.target;return a.tagName==="BUTTON"||a.tagName==="A"}return(n,a)=>(w(),pe(be,{onClick:ne,class:d({[t(e).fadeOut]:o.value})},{topBar:B(()=>[_("div",{class:d(t(e).navigation)},[_("div",{class:d([{[t(e).disabled]:!M.value}]),onClick:O(ie,["stop"])},[T(J,{type:"mdi",path:t(ye)},null,8,["path"])],2),_("div",{onClick:O(ue,["stop"])},[T(J,{type:"mdi",path:t(Ae)},null,8,["path"])])],2)]),default:B(()=>[_("div",{class:d(t(e).progress)},[_("div",{class:d(t(e).correctAnswers),style:K({width:`${t(p).correctPercentage}%`})},null,6),_("div",{class:d(t(e).wrongAnswers),style:K({width:`${t(p).wrongPercentage}%`})},null,6)],2),t(s)?(w(),m("div",{key:0,class:d(t(e).question)},[_("div",{class:d(t(e).text),onClick:O(oe,["stop"])},[_("div",null,[T(xe,{section:t(s).section},null,8,["section"]),_("div",null,F(N(t(s).question)),1)])],2),_("div",{class:d(t(e).answers)},[t(s).type==="choice"?(w(!0),m(U,{key:0},W(t(r),b=>(w(),m("div",{key:`${t(s).id}-${b.id}`,class:d(t(e).option)},[T(je,{onClick:O(H=>se(b),["stop"]),class:d([t(e).button,te(b)])},{default:B(()=>[me(F(N(b.value)),1)]),_:2},1032,["onClick","class"])],2))),128)):S("",!0),t(s).type==="text"?(w(),m("div",{key:1,class:d([t(e).answer,t(z)?"":t(e).hiddenAnswer]),onClick:O($,["stop"])},[(w(!0),m(U,null,W(N(t(s).answer).split(`
`),(b,H)=>(w(),m("p",{key:H},F(b),1))),128))],2)):S("",!0)],2)],2)):S("",!0),t(s)?(w(),m("div",{key:1,onClick:O(re,["stop"]),class:d([t(e).noteContainer,{[t(e).hidden]:!Q.value}])},[t(s).note?(w(),m("div",{key:0,class:d(["scroll",[t(e).note,{[t(e).hidden]:!Q.value}]])},[t(s).noteImage?(w(),m("img",{key:0,src:`/notes/${t(s).noteImage}`},null,8,qe)):S("",!0),_("div",{innerHTML:N(t(s).note)},null,8,Pe)],2)):S("",!0)],2)):S("",!0)]),_:1},8,["class"]))}}),Ne="200ms",Te="_counter_1lkbj_4",Ie="_question_1lkbj_8",$e="_text_1lkbj_15",Be="_answers_1lkbj_46",Fe="_option_1lkbj_56",De="_fadeOut_1lkbj_60",Ee="_button_1lkbj_66",Ge="_correct_1lkbj_66",Le="_success_1lkbj_1",He="_wrong_1lkbj_73",Ve="_next_1lkbj_80",Ke="_answer_1lkbj_46",Ue="_hiddenAnswer_1lkbj_93",We="_navigation_1lkbj_96",Je="_back_1lkbj_103",Xe="_forward_1lkbj_107",Ye="_disabled_1lkbj_116",Ze="_progress_1lkbj_120",et="_correctAnswers_1lkbj_129",tt="_wrongAnswers_1lkbj_135",st="_noteContainer_1lkbj_153",nt="_hidden_1lkbj_93",ot="_note_1lkbj_153",rt={pageFadeOutDuration:Ne,counter:Te,question:Ie,text:$e,answers:Be,option:Fe,fadeOut:De,button:Ee,correct:Ge,"correct-blinking":"_correct-blinking_1lkbj_70",success:Le,wrong:He,"wrong-fade":"_wrong-fade_1lkbj_77",next:Ve,answer:Ke,hiddenAnswer:Ue,navigation:We,back:Je,forward:Xe,disabled:Ye,progress:Ze,correctAnswers:et,wrongAnswers:tt,noteContainer:st,hidden:nt,note:ot},at={$style:rt},dt=Ce(Re,[["__cssModules",at]]);export{dt as default};
