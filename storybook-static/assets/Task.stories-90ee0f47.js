import{r as R}from"./index-f1f749bf.js";var p={},S={get exports(){return p},set exports(e){p=e}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A=R,E=Symbol.for("react.element"),N=Symbol.for("react.fragment"),I=Object.prototype.hasOwnProperty,O=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D={key:!0,ref:!0,__self:!0,__source:!0};function x(e,s,a){var t,n={},u=null,k=null;a!==void 0&&(u=""+a),s.key!==void 0&&(u=""+s.key),s.ref!==void 0&&(k=s.ref);for(t in s)I.call(s,t)&&!D.hasOwnProperty(t)&&(n[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps,s)n[t]===void 0&&(n[t]=s[t]);return{$$typeof:E,type:e,key:u,ref:k,props:n,_owner:O.current}}l.Fragment=N;l.jsx=x;l.jsxs=x;(function(e){e.exports=l})(S);const o=p.jsx,m=p.jsxs;function d({task:{id:e,title:s,state:a},onArchiveTask:t,onPinTask:n}){return m("div",{className:`list-item ${a}`,children:[m("label",{htmlFor:"checked","aria-label":`archiveTask-${e}`,className:"checkbox",children:[o("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:a==="TASK_ARCHIVED"}),o("span",{className:"checkbox-custom",onClick:()=>t(e)})]}),o("label",{htmlFor:"title","aria-label":s,className:"title",children:o("input",{type:"text",value:s,readOnly:!0,name:"title",placeholder:"Input title",style:{background:"red"}})}),a!=="TASK_ARCHIVED"&&o("button",{className:"pin-button",onClick:()=>n(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:o("span",{className:"icon-star"})},`pinTask-${e}`)]})}d.propTypes={task:PropTypes.shape({id:PropTypes.string.isRequired,title:PropTypes.string.isRequired,state:PropTypes.string.isRequired}),onArchiveTask:PropTypes.func,onPinTask:PropTypes.func};d.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{type:{name:"custom",raw:`PropTypes.shape({
  /** Id of the task */
  id: PropTypes.string.isRequired,
  /** Title of the task */
  title: PropTypes.string.isRequired,
  /** Current state of the task */
  state: PropTypes.string.isRequired,
})`},required:!1,description:"Composition of the task"},onArchiveTask:{type:{name:"custom",raw:"PropTypes.func"},required:!1,description:"Event to change the task to archived"},onPinTask:{type:{name:"custom",raw:"PropTypes.func"},required:!1,description:"Event to change the task to pinned"}}};const j={component:d,title:"Task",tags:["autodocs"]},r={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},i={args:{task:{...r.args.task,state:"TASK_PINNED"}}},c={args:{task:{...r.args.task,state:"TASK_ARCHIVED"}}};var T,f,_;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(_=(f=r.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var h,y,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(g=(y=i.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var P,v,b;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(b=(v=c.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const q=["Default","Pinned","Archived"],$=Object.freeze(Object.defineProperty({__proto__:null,Archived:c,Default:r,Pinned:i,__namedExportsOrder:q,default:j},Symbol.toStringTag,{value:"Module"}));export{r as D,d as T,m as a,$ as b,o as j};
//# sourceMappingURL=Task.stories-90ee0f47.js.map
