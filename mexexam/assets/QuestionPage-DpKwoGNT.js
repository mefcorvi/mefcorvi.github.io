import{p as de,l as se,q as W,s as ve,v as J,x as te,y as we,z as _e,A as m,B as fe,C as O,d as pe,h as ge,i as L,n as w,b as t,D as he,o as k,a as p,w as q,j as G,t as C,c as y,F as X,r as Y,f as P,m as me,R as Z,E as xe}from"./index-CMloNJWQ.js";import{G as Ae,m as ke,S as V,a as ye,_ as Qe}from"./GeneralPage-E5c_7X1_.js";import{G as Ce}from"./GeneralButton-Cg5dGbHX.js";import{u as ze,a as be}from"./questions-4MzT5Q7R.js";const H=new WeakMap;function ee(r,s,a={}){const{mode:g="replace",route:l=de(),router:_=se(),transform:u=A=>A}=a;H.has(_)||H.set(_,new Map);const d=H.get(_);let v=l.params[r];we(()=>{v=void 0});let e;const c=ve((A,x)=>(e=x,{get(){return A(),u(v!==void 0&&v!==""?v:J(s))},set(f){v!==f&&(v=f===s||f===null?void 0:f,d.set(r,f===s||f===null?void 0:f),x(),te(()=>{if(d.size===0)return;const h=Object.fromEntries(d.entries());d.clear();const{params:M,query:S,hash:T}=l;_[J(g)]({params:{...M,...h},query:S,hash:T})}))}}));return W(()=>l.params[r],A=>{v=A,e()},{flush:"sync"}),c}const Oe=_e(()=>{const r=m(new Map),s=m(new Map),{questions:a,loadAll:g,loadSection:l,reset:_}=ze(),u=m(),d=fe({id:-1,value:"I don't know",isAnswer:!1}),v=()=>{let o=u.value;for(;o===u.value&&a.size>1;)if(o=Me(a,r.value,s.value),!o)return o;return o},e=O(()=>{if(!u.value)return null;const o=a.get(u.value);return o||null}),c=m([]),A=()=>{var o;c.value=[...(((o=e.value)==null?void 0:o.options)??[]).sort(()=>Math.random()-.5),d]},x=m(),f=m(!1),h=o=>{u.value=o},M=o=>a.has(o),S=o=>{if(e.value&&e.value.type==="choice"){if(!c.value.includes(o))throw new Error("Current question does not have the selected option");x.value=o}},T=()=>{x.value&&e.value&&(x.value.isAnswer?(r.value.set(e.value.id,(r.value.get(e.value.id)??0)+1),s.value.set(e.value.id,(s.value.get(e.value.id)??0)-1),(s.value.get(e.value.id)??0)<=0&&s.value.delete(e.value.id)):(s.value.set(e.value.id,(s.value.get(e.value.id)??0)+1),r.value.set(e.value.id,(r.value.get(e.value.id)??0)-1),(r.value.get(e.value.id)??0)<=0&&r.value.delete(e.value.id)))},z=()=>{e.value&&e.value.type==="text"&&(f.value=!0)};W(()=>{var o;return(o=e.value)==null?void 0:o.id},()=>{x.value=void 0,f.value=!1,A()},{immediate:!0,flush:"sync"});const E=O(()=>[...a.values()].filter(o=>o.type==="choice")),Q=O(()=>({correctQuestions:r.value.size,wrongQuestions:s.value.size,unansweredQuestions:a.size-r.value.size-s.value.size,totalQuestions:E.value.length,correctPercentage:r.value.size/a.size*100,wrongPercentage:s.value.size/a.size*100,unansweredPercentage:(a.size-r.value.size-s.value.size)/a.size*100}));return{startAll:async()=>{await g(),r.value.clear(),s.value.clear()},startSection:async o=>{_(),await l(o),r.value.clear(),s.value.clear()},stat:Q,correctCount:O(()=>r.value),correctQuestions:r,wrongQuestions:s,currentOptionsRandomized:c,currentQuestion:e,isAnswerRevealed:f,selectedAnswer:x,wrongCount:O(()=>s.value.size),getRandomQuestionId:v,updateCounters:T,revealAnswer:z,selectAnswer:S,setQuestion:h,hasQuestion:M}});function Me(r,s,a){const g=new Map([...r].filter(([u])=>!s.has(u)&&!a.has(u)));if(g.size>0)return[...g.keys()][Math.floor(Math.random()*g.size)];const l=[...r.keys()],_=l.map(u=>a.has(u)?(a.get(u)||1)*3:1/(s.get(u)||1));return Se(l,_)}function Se(r,s){if(r.length!==s.length)throw new Error("Длины массивов values и weights должны совпадать.");const a=r.length;if(a===0)throw new Error("Массив values не должен быть пустым.");const g=s.reduce((e,c)=>e+c,0);if(g===0)throw new Error("Сумма весов не должна быть равна 0.");const l=new Array(a);for(let e=0;e<a;e++)l[e]=s[e]/g*a;const _=new Array(a),u=[],d=[];for(let e=0;e<a;e++)l[e]<1?u.push(e):d.push(e);for(;u.length>0&&d.length>0;){const e=u.pop(),c=d.pop();_[e]=c,l[c]=l[c]+l[e]-1,l[c]<1?u.push(c):d.push(c)}for(;u.length>0;)l[u.pop()]=1;for(;d.length>0;)l[d.pop()]=1;const v=Math.floor(Math.random()*a);return Math.random()<l[v]?r[v]:r[_[v]]}const Te=["src"],Ie=["innerHTML"],Re=pe({__name:"QuestionPage",setup(r){const s=he(),a=se(),g=be(),{startAll:l,startSection:_,stat:u,isAnswerRevealed:d,currentOptionsRandomized:v,currentQuestion:e,getRandomQuestionId:c,revealAnswer:A,selectAnswer:x,updateCounters:f,selectedAnswer:h,setQuestion:M,hasQuestion:S}=Oe(),T=O(()=>{var n;return((n=e.value)==null?void 0:n.note)!==void 0}),z=ee("id",""),E=ee("sectionId",""),Q=m(),F=m(!1),j=()=>{if(z.value!=="")if(Q.value=void 0,F.value=!1,S(z.value))M(z.value);else{const n=c();if(!n){a.replace({name:Z.Home});return}a.replace({params:{id:n}})}},o=m(!1);W(()=>[z.value,E.value],async(n,i)=>{i||(i=["",""]),!(!n[0]&&!n[1])&&(n[0]===i[0]&&n[1]===i[1]||((n[1]!==i[1]||!i[1])&&(n[1]?(o.value=!1,await _(n[1])):o.value||(o.value=!0,await l())),j()))},{immediate:!0});let K;const B=m(!1);let I;const ne=()=>{Q.value=void 0,window.clearTimeout(K),I=void 0,window.clearTimeout(I),B.value=!0,I=window.setTimeout(async()=>{I=void 0,await a.replace({params:{id:c()}}),await xe(h).toBeUndefined(),await te(),B.value=!1},parseInt(s.pageFadeOutDuration,10))},D=()=>{var n,i;if(!I&&!(((n=e.value)==null?void 0:n.type)==="choice"&&!h.value)){if(((i=e.value)==null?void 0:i.type)==="text"&&!d.value){A();return}ne()}},ae=n=>{const i=[];return n.id===-1&&i.push(s.dontKnowOption),h.value?h.value.isAnswer?n===h.value?s.correct:(i.push(s["wrong-fade"]),i):n===Q.value?(i.push(s["correct-blinking"]),i):n.isAnswer?(i.push(s.correct),i):(i.push(s.wrong),i):i},oe=n=>{if(h.value){D();return}if(x(n),f(),!n.isAnswer){const i=v.value.find($=>$.isAnswer);Q.value=i}K=window.setTimeout(()=>{Q.value=void 0},1e3)},N=m("es"),re=n=>{ce(n)||D()},ie=()=>{var n;(n=window.getSelection())!=null&&n.isCollapsed&&(N.value==="es"?N.value="ru":N.value="es")},R=n=>g.t(N.value,n),ue=()=>{F.value=!0},le=()=>{a.push({name:Z.Settings})};function ce(n){const i=n.target;return i.tagName==="BUTTON"||i.tagName==="A"}return(n,i)=>(k(),ge(Ae,{onClick:re,class:w({[t(s).fadeOut]:B.value})},{topBar:L(()=>[p("div",{class:w(t(s).navigation)},[p("div",{class:w([{[t(s).disabled]:!T.value}]),onClick:q(ue,["stop"])},[G(V,{type:"mdi",path:t(ke)},null,8,["path"])],2),p("div",{onClick:q(le,["stop"])},[G(V,{type:"mdi",path:t(ye)},null,8,["path"])])],2)]),default:L(()=>{var $;return[p("div",{class:w(t(s).progress)},[p("div",{class:w(t(s).correctAnswers)},C(t(u).correctQuestions),3),p("div",{class:w(t(s).wrongAnswers)},C(t(u).wrongQuestions),3),p("div",{class:w(t(s).allAnswers)},C(t(u).totalQuestions),3)],2),t(e)?(k(),y("div",{key:0,class:w(t(s).question)},[p("div",{class:w(t(s).text),onClick:q(ie,["stop"])},[p("div",null,[p("div",{class:w(t(s).sectionTitle)},C(R(t(e).section.title)),3),p("div",null,C(R(t(e).question)),1)])],2),p("div",{class:w(t(s).answers)},[t(e).type==="choice"?(k(!0),y(X,{key:0},Y(t(v),b=>(k(),y("div",{key:`${t(e).id}-${b.id}`,class:w(t(s).option)},[G(Ce,{onClick:q(U=>oe(b),["stop"]),disabled:!!t(h),class:w([t(s).button,ae(b)])},{default:L(()=>[me(C(R(b.value)),1)]),_:2},1032,["onClick","disabled","class"])],2))),128)):P("",!0),t(e).type==="text"?(k(),y("div",{key:1,class:w([t(s).answer,t(d)?"":t(s).hiddenAnswer]),onClick:q(D,["stop"])},[(k(!0),y(X,null,Y(R(t(e).answer).split(`
`),(b,U)=>(k(),y("p",{key:U},C(b),1))),128))],2)):P("",!0)],2),($=t(e))!=null&&$.note?(k(),y("div",{key:t(e).id,class:w(["scroll",[t(s).note,{[t(s).hidden]:!t(h)||B.value}]])},[t(e).noteImage?(k(),y("img",{key:0,src:`/notes/${t(e).noteImage}`},null,8,Te)):P("",!0),p("div",{innerHTML:R(t(e).note)},null,8,Ie)],2)):P("",!0)],2)):P("",!0)]}),_:1},8,["class"]))}}),qe="200ms",Pe="_counter_17esx_4",Be="_question_17esx_8",Ne="_text_17esx_15",$e="_answers_17esx_46",Ee="_option_17esx_56",Fe="_fadeOut_17esx_60",De="_button_17esx_66",Le="_correct_17esx_66",Ge="_success_17esx_1",He="_wrong_17esx_73",We="_next_17esx_80",je="_answer_17esx_46",Ke="_hiddenAnswer_17esx_93",Ue="_navigation_17esx_96",Je="_back_17esx_103",Xe="_forward_17esx_107",Ye="_disabled_17esx_116",Ze="_progress_17esx_120",Ve="_correctAnswers_17esx_134",es="_wrongAnswers_17esx_137",ss="_allAnswers_17esx_140",ts="_note_17esx_155",ns="_hidden_17esx_93",as="_sectionTitle_17esx_203",os={pageFadeOutDuration:qe,counter:Pe,question:Be,text:Ne,answers:$e,option:Ee,fadeOut:Fe,button:De,correct:Le,"correct-blinking":"_correct-blinking_17esx_70",success:Ge,wrong:He,"wrong-fade":"_wrong-fade_17esx_77",next:We,answer:je,hiddenAnswer:Ke,navigation:Ue,back:Je,forward:Xe,disabled:Ye,progress:Ze,correctAnswers:Ve,wrongAnswers:es,allAnswers:ss,note:ts,hidden:ns,sectionTitle:as},rs={$style:os},ds=Qe(Re,[["__cssModules",rs]]);export{ds as default};
