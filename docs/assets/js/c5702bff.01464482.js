"use strict";(self.webpackChunkfeedzback_docs=self.webpackChunkfeedzback_docs||[]).push([[990],{9527:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var t=s(4848),l=s(8453);const i={},a="Styles",c={id:"technical-guides/client/styles",title:"Styles",description:"Global styles",source:"@site/docs/technical-guides/client/styles.md",sourceDirName:"technical-guides/client",slug:"/technical-guides/client/styles",permalink:"/feedzback/docs/technical-guides/client/styles",draft:!1,unlisted:!1,editUrl:"https://github.com/Zenika/feedzback/tree/main/docs-source/docs/technical-guides/client/styles.md",tags:[],version:"current",frontMatter:{},sidebar:"default",previous:{title:"Firebase Hosting",permalink:"/feedzback/docs/technical-guides/client/firebase-hosting"},next:{title:"Icons",permalink:"/feedzback/docs/technical-guides/client/icons"}},o={},r=[{value:"Global styles",id:"global-styles",level:2},{value:"Component styles",id:"component-styles",level:2},{value:"Material",id:"material",level:2},{value:"Tailwindcss",id:"tailwindcss",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"styles",children:"Styles"}),"\n",(0,t.jsx)(n.h2,{id:"global-styles",children:"Global styles"}),"\n",(0,t.jsxs)(n.p,{children:["The entry point of the global styles is as usual for an Angular application: ",(0,t.jsx)(n.a,{href:"https://github.com/Zenika/feedzback/tree/main/client/src/styles.scss",children:"client/src/styles.scss"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scss",children:"// ----- Base -----\n\n@import './styles/fonts';\n@import './styles/tailwind.css';\n@import './styles/material';\n@import './styles/base';\n\n// ----- Special `.gbl-*` styles -----\n\n@import './styles/common';\n@import './styles/info';\n@import './styles/landing';\n@import './styles/forms';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["All special global styles starts with ",(0,t.jsx)(n.code,{children:".gbl-*"})," prefix."]}),"\n",(0,t.jsx)(n.h2,{id:"component-styles",children:"Component styles"}),"\n",(0,t.jsxs)(n.p,{children:["All component styles starts with ",(0,t.jsx)(n.code,{children:".app-*"})," prefix."]}),"\n",(0,t.jsxs)(n.p,{children:["Component styles are encapsulated manually following the ",(0,t.jsx)(n.a,{href:"https://getbem.com/introduction/",children:"BEM"})," convention (",(0,t.jsx)(n.strong,{children:"B"}),"lock-",(0,t.jsx)(n.strong,{children:"E"}),"lement-",(0,t.jsx)(n.strong,{children:"M"}),"odifier)."]}),"\n",(0,t.jsx)(n.p,{children:"Here's an example with the header component:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="client/src/app/header/header.component.ts"',children:"import { Component, ViewEncapsulation } from '@angular/core';\n\n@Component({\n  selector: 'app-header',\n  host: { class: 'app-header' }, // Component root css class\n  standalone: true,\n  templateUrl: './header.component.html',\n  styleUrl: './header.component.scss',\n  encapsulation: ViewEncapsulation.None, // No framework encapsulation\n})\nexport class HeaderComponent {}\n"})}),"\n",(0,t.jsx)(n.p,{children:"This is what the final markup looks like when rendered in the browser:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'\x3c!-- Block --\x3e\n<app-header class="app-header">\n  \x3c!-- Element --\x3e\n  <div class="app-header__logo">...</div>\n  \x3c!-- Element and Modifier --\x3e\n  <nav class="app-header__menu app-header__menu--visible">...</nav>\n  ...\n</app-header>\n'})}),"\n",(0,t.jsx)(n.p,{children:"And the Sass styles should looks like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scss",metastring:'title="client/src/app/header/header.component.scss"',children:"@use '../app.scss' as app;\n\n.app-header {\n  &__logo {\n    // ...\n  }\n  &__menu {\n    // ...\n    &--visible {\n      // ...\n    }\n  }\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/Zenika/feedzback/blob/main/client/src/app/app.scss",children:(0,t.jsx)(n.code,{children:"src/app/app.scss"})})," file gives you access to the global Sass variables and mixins in the component styles."]})}),"\n",(0,t.jsx)(n.h2,{id:"material",children:"Material"}),"\n",(0,t.jsxs)(n.p,{children:["Material design is enabled for the entire HTML page using the ",(0,t.jsx)(n.code,{children:".mat-typography"})," css class on the body tag:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="client/src/index.html"',children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <title>FeedZback</title>\n    <base href="/" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <link rel="icon" type="image/svg+xml" href="favicon.svg" />\n  </head>\n  <body class="mat-typography">\n    <app-root></app-root>\n  </body>\n</html>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Only the styles of the Material components that are used in the application are included.\nSee ",(0,t.jsx)(n.a,{href:"https://github.com/Zenika/feedzback/tree/main/client/src/styles/material/index.scss",children:"here"})," for more infos."]}),"\n",(0,t.jsx)(n.h2,{id:"tailwindcss",children:"Tailwindcss"}),"\n",(0,t.jsxs)(n.p,{children:["Tailwind is only used in Angular component templates for utility classes like: ",(0,t.jsx)(n.code,{children:"ms-4"}),", ",(0,t.jsx)(n.code,{children:"me-4"}),", ",(0,t.jsx)(n.code,{children:"mb-4"}),", ",(0,t.jsx)(n.code,{children:"flex"}),", ",(0,t.jsx)(n.code,{children:"items-center"}),", ",(0,t.jsx)(n.code,{children:"justify-center"}),", ...\nThe main styles are written in Angular component styles following the ",(0,t.jsx)(n.strong,{children:"BEM"})," convention."]}),"\n",(0,t.jsxs)(n.p,{children:['Currently, Tailwind "Preflight" breaks some Angular material components.\nIt also conflicts with the global ',(0,t.jsx)(n.code,{children:".mat-typography"}),".\nTherefore it has been disabled:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="client/tailwind.config.ts"',children:"import type { Config } from 'tailwindcss';\n\nexport default {\n  corePlugins: {\n    // Warning: Tailwind \"Preflight\" breaks some Angular material components\n    //\n    // Learn more about this issue and a hack to solve it:\n    //    https://github.com/tailwindlabs/tailwindcss/discussions/9993\n    preflight: false,\n  },\n} satisfies Config;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var t=s(6540);const l={},i=t.createContext(l);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);