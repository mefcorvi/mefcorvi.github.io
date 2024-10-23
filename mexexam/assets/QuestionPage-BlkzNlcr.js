import{p as ve,l as se,q as V,s as pe,v as U,x as ne,y as we,z as _e,A as me,B as f,C as fe,D as j,d as ge,h as he,i as G,n as d,b as t,E as ke,R as W,o as h,a as _,w as q,j as L,e as J,c as A,t as F,F as X,r as Y,f as I,m as ye,G as Ae}from"./index-DxGORYw-.js";import{G as Ce,m as Qe,S as Z,a as be,_ as ze}from"./GeneralPage-DqIrPIig.js";import{G as Se}from"./GeneralButton-Bv6z9W0U.js";import{u as xe,a as Oe}from"./questions-DOVNKCQB.js";const H=new WeakMap;function ee(l,e,i={}){const{mode:k="replace",route:c=ve(),router:o=se(),transform:p=v=>v}=i;H.has(o)||H.set(o,new Map);const g=H.get(o);let a=c.params[l];we(()=>{a=void 0});let r;const z=pe((v,y)=>(r=y,{get(){return v(),p(a!==void 0&&a!==""?a:U(e))},set(m){a!==m&&(a=m===e||m===null?void 0:m,g.set(l,m===e||m===null?void 0:m),y(),ne(()=>{if(g.size===0)return;const w=Object.fromEntries(g.entries());g.clear();const{params:C,query:Q,hash:O}=c;o[U(k)]({params:{...C,...w},query:Q,hash:O})}))}}));return V(()=>c.params[l],v=>{a=v,r()},{flush:"sync"}),z}function te(l){return _e(l,()=>new Set,void 0,{serializer:{read(e){return e?new Set(e.split(",")):new Set},write(e){return[...e].join(",")}}})}const Me=me(()=>{const l=te("correct-questions-2"),e=te("wrong-questions-2"),{questions:i,loadAll:k,loadSection:c}=xe(),o=f(),p=fe({id:-1,value:"I don't know",isAnswer:!1}),g=()=>{let s=o.value;for(;s===o.value;)if(s=Te(i,l.value,e.value),!s)return s;return s},a=j(()=>{if(!o.value)return null;const s=i.get(o.value);if(!s)throw new Error(`Failed to get question by id ${o.value}`);return s}),r=f([]),z=()=>{var s;r.value=[...(((s=a.value)==null?void 0:s.options)??[]).sort(()=>Math.random()-.5),p]},v=f(),y=f(!1),m=s=>{o.value=s},w=s=>i.has(s),C=f(0),Q=f(0),O=()=>{C.value=0,Q.value=0},S=s=>{if(a.value&&a.value.type==="choice"){if(!r.value.includes(s))throw new Error("Current question does not have the selected option");v.value=s}},P=()=>{v.value&&a.value&&(v.value.isAnswer?(C.value++,l.value.add(a.value.id),e.value.delete(a.value.id)):(Q.value++,e.value.add(a.value.id),l.value.delete(a.value.id)))},b=()=>{a.value&&a.value.type==="text"&&(y.value=!0)};V(()=>{var s;return(s=a.value)==null?void 0:s.id},()=>{v.value=void 0,y.value=!1,z()},{immediate:!0,flush:"sync"});const R=j(()=>({correctQuestions:l.value.size,wrongQuestions:e.value.size,unansweredQuestions:i.size-l.value.size-e.value.size,totalQuestions:i.size,correctPercentage:l.value.size/i.size*100,wrongPercentage:e.value.size/i.size*100,unansweredPercentage:(i.size-l.value.size-e.value.size)/i.size*100}));return{startAll:async()=>{await k()},startSection:async s=>{await c(s)},stat:R,correctCount:C,correctQuestions:l,wrongQuestions:e,currentOptionsRandomized:r,currentQuestion:a,isAnswerRevealed:y,selectedAnswer:v,wrongCount:Q,getRandomQuestionId:g,resetCount:O,updateCounters:P,revealAnswer:b,selectAnswer:S,setQuestion:m,hasQuestion:w}});function Te(l,e,i){if(Math.random()<i.size/10){const c=[...i];let o="";for(;c.length>0;){const p=Math.floor(Math.random()*c.length);if(o=c[p],l.has(o))return o;c.splice(p,1),i.delete(o)}}if(Math.random()<.2){const c=[...e];let o="";for(;c.length>0;){const p=Math.floor(Math.random()*c.length);if(o=c[p],l.has(o))return o;c.splice(p,1),e.delete(o)}}const k=[...l.keys()];return k[Math.floor(Math.random()*k.length)]}const qe=["src"],Ie=["innerHTML"],Pe=ge({__name:"QuestionPage",setup(l){const e=ke(),i=se(),k=Oe(),{startAll:c,startSection:o,stat:p,isAnswerRevealed:g,currentOptionsRandomized:a,currentQuestion:r,getRandomQuestionId:z,revealAnswer:v,selectAnswer:y,updateCounters:m,selectedAnswer:w,setQuestion:C,hasQuestion:Q}=Me(),O=j(()=>{var n;return((n=r.value)==null?void 0:n.note)!==void 0}),S=ee("id",""),P=ee("sectionId",""),b=f(),R=f(!1),N=()=>{if(S.value!=="")if(b.value=void 0,R.value=!1,Q(S.value))C(S.value);else{const n=z();if(!n){i.replace({name:W.Home});return}i.replace({params:{id:n}})}};V(S,N),P.value?o(P.value).then(N):c().then(N);let D;const s=f(!1);let M;const oe=()=>{b.value=void 0,window.clearTimeout(D),M=void 0,window.clearTimeout(M),s.value=!0,M=window.setTimeout(async()=>{M=void 0,await i.replace({params:{id:z()}}),await Ae(w).toBeUndefined(),await ne(),s.value=!1},parseInt(e.pageFadeOutDuration,10))},E=()=>{var n,u;if(!M&&!(((n=r.value)==null?void 0:n.type)==="choice"&&!w.value)){if(((u=r.value)==null?void 0:u.type)==="text"&&!g.value){v();return}oe()}},ae=n=>{const u=[];return n.id===-1&&u.push(e.dontKnowOption),w.value?w.value.isAnswer?n===w.value?e.correct:(u.push(e["wrong-fade"]),u):n===b.value?(u.push(e["correct-blinking"]),u):n.isAnswer?(u.push(e.correct),u):(u.push(e.wrong),u):u},re=n=>{if(w.value){E();return}if(y(n),m(),!n.isAnswer){const u=a.value.find(B=>B.isAnswer);b.value=u}D=window.setTimeout(()=>{b.value=void 0},1e3)},$=f("es"),ie=n=>{de(n)||E()},le=()=>{var n;(n=window.getSelection())!=null&&n.isCollapsed&&($.value==="es"?$.value="ru":$.value="es")},T=n=>k.t($.value,n),ue=()=>{R.value=!0},ce=()=>{i.push({name:W.Settings})};function de(n){const u=n.target;return u.tagName==="BUTTON"||u.tagName==="A"}return(n,u)=>(h(),he(Ce,{onClick:ie,class:d({[t(e).fadeOut]:s.value})},{topBar:G(()=>[_("div",{class:d(t(e).navigation)},[_("div",{class:d([{[t(e).disabled]:!O.value}]),onClick:q(ue,["stop"])},[L(Z,{type:"mdi",path:t(Qe)},null,8,["path"])],2),_("div",{onClick:q(ce,["stop"])},[L(Z,{type:"mdi",path:t(be)},null,8,["path"])])],2)]),default:G(()=>{var B;return[_("div",{class:d(t(e).progress)},[_("div",{class:d(t(e).correctAnswers),style:J({width:`${t(p).correctPercentage}%`})},null,6),_("div",{class:d(t(e).wrongAnswers),style:J({width:`${t(p).wrongPercentage}%`})},null,6)],2),t(r)?(h(),A("div",{key:0,class:d(t(e).question)},[_("div",{class:d(t(e).text),onClick:q(le,["stop"])},[_("div",null,[_("div",{class:d(t(e).sectionTitle)},F(T(t(r).section.title)),3),_("div",null,F(T(t(r).question)),1)])],2),_("div",{class:d(t(e).answers)},[t(r).type==="choice"?(h(!0),A(X,{key:0},Y(t(a),x=>(h(),A("div",{key:`${t(r).id}-${x.id}`,class:d(t(e).option)},[L(Se,{onClick:q(K=>re(x),["stop"]),disabled:!!t(w),class:d([t(e).button,ae(x)])},{default:G(()=>[ye(F(T(x.value)),1)]),_:2},1032,["onClick","disabled","class"])],2))),128)):I("",!0),t(r).type==="text"?(h(),A("div",{key:1,class:d([t(e).answer,t(g)?"":t(e).hiddenAnswer]),onClick:q(E,["stop"])},[(h(!0),A(X,null,Y(T(t(r).answer).split(`
`),(x,K)=>(h(),A("p",{key:K},F(x),1))),128))],2)):I("",!0)],2),(B=t(r))!=null&&B.note?(h(),A("div",{key:t(r).id,class:d(["scroll",[t(e).note,{[t(e).hidden]:!t(w)||s.value}]])},[t(r).noteImage?(h(),A("img",{key:0,src:`/notes/${t(r).noteImage}`},null,8,qe)):I("",!0),_("div",{innerHTML:T(t(r).note)},null,8,Ie)],2)):I("",!0)],2)):I("",!0)]}),_:1},8,["class"]))}}),Re="200ms",Ne="_counter_1plem_4",$e="_question_1plem_8",Be="_text_1plem_15",Fe="_answers_1plem_46",De="_option_1plem_56",Ee="_fadeOut_1plem_60",Ge="_button_1plem_66",Le="_correct_1plem_66",He="_success_1plem_1",je="_wrong_1plem_73",Ve="_next_1plem_80",Ke="_answer_1plem_46",Ue="_hiddenAnswer_1plem_93",We="_navigation_1plem_96",Je="_back_1plem_103",Xe="_forward_1plem_107",Ye="_disabled_1plem_116",Ze="_progress_1plem_120",et="_correctAnswers_1plem_129",tt="_wrongAnswers_1plem_135",st="_note_1plem_153",nt="_hidden_1plem_93",ot="_sectionTitle_1plem_201",at={pageFadeOutDuration:Re,counter:Ne,question:$e,text:Be,answers:Fe,option:De,fadeOut:Ee,button:Ge,correct:Le,"correct-blinking":"_correct-blinking_1plem_70",success:He,wrong:je,"wrong-fade":"_wrong-fade_1plem_77",next:Ve,answer:Ke,hiddenAnswer:Ue,navigation:We,back:Je,forward:Xe,disabled:Ye,progress:Ze,correctAnswers:et,wrongAnswers:tt,note:st,hidden:nt,sectionTitle:ot},rt={$style:at},dt=ze(Pe,[["__cssModules",rt]]);export{dt as default};
