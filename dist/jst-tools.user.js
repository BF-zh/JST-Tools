// ==UserScript==
// @name         聚水潭 Tools
// @namespace    npm/vite-plugin-monkey
// @version      0.0.2
// @author       BF-<2581807417@qq.com>
// @description  聚水潭(erp321.com) 快捷工具 包含快递单号录入 排除等
// @copyright    北风-JST
// @icon         http://q2.qlogo.cn/headimg_dl?dst_uin=2581807417&spec=100
// @match        *://*.erp321.com/*
// @require      https://unpkg.com/vue@3.4.21/dist/vue.global.prod.js
// @require      https://unpkg.com/vue-demi@latest/lib/index.iife.js
// @require      data:application/javascript,%3Bwindow.Vue%3DVue%3B
// @grant        GM_addStyle
// ==/UserScript==

(e=>{if(typeof GM_addStyle=="function"){GM_addStyle(e);return}const o=document.createElement("style");o.textContent=e,document.head.append(o)})(' *,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.prose :where(h1,h2,h3,h4,h5,h6):not(:where(.not-prose,.not-prose *)){color:var(--un-prose-headings);font-weight:600;line-height:1.25}.prose :where(a):not(:where(.not-prose,.not-prose *)){color:var(--un-prose-links);text-decoration:underline;font-weight:500}.prose :where(a code):not(:where(.not-prose,.not-prose *)){color:var(--un-prose-links)}.prose :where(p,ul,ol,pre):not(:where(.not-prose,.not-prose *)){margin:1em 0;line-height:1.75}.prose :where(blockquote):not(:where(.not-prose,.not-prose *)){margin:1em 0;padding-left:1em;font-style:italic;border-left:.25em solid var(--un-prose-borders)}.prose :where(h1):not(:where(.not-prose,.not-prose *)){margin:1rem 0;font-size:2.25em}.prose :where(h2):not(:where(.not-prose,.not-prose *)){margin:1.75em 0 .5em;font-size:1.75em}.prose :where(h3):not(:where(.not-prose,.not-prose *)){margin:1.5em 0 .5em;font-size:1.375em}.prose :where(h4):not(:where(.not-prose,.not-prose *)){margin:1em 0;font-size:1.125em}.prose :where(img,video):not(:where(.not-prose,.not-prose *)){max-width:100%}.prose :where(figure,picture):not(:where(.not-prose,.not-prose *)){margin:1em 0}.prose :where(figcaption):not(:where(.not-prose,.not-prose *)){color:var(--un-prose-captions);font-size:.875em}.prose :where(code):not(:where(.not-prose,.not-prose *)){color:var(--un-prose-code);font-size:.875em;font-weight:600;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.prose :where(:not(pre)>code):not(:where(.not-prose,.not-prose *)):before,.prose :where(:not(pre)>code):not(:where(.not-prose,.not-prose *)):after{content:"`"}.prose :where(pre):not(:where(.not-prose,.not-prose *)){padding:1.25rem 1.5rem;overflow-x:auto;border-radius:.375rem}.prose :where(pre,code):not(:where(.not-prose,.not-prose *)){white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;hyphens:none;background:transparent}.prose :where(pre code):not(:where(.not-prose,.not-prose *)){font-weight:inherit}.prose :where(ol,ul):not(:where(.not-prose,.not-prose *)){padding-left:1.25em}.prose :where(ol):not(:where(.not-prose,.not-prose *)){list-style-type:decimal}.prose :where(ol[type=A]):not(:where(.not-prose,.not-prose *)){list-style-type:upper-alpha}.prose :where(ol[type=a]):not(:where(.not-prose,.not-prose *)){list-style-type:lower-alpha}.prose :where(ol[type=A s]):not(:where(.not-prose,.not-prose *)){list-style-type:upper-alpha}.prose :where(ol[type=a s]):not(:where(.not-prose,.not-prose *)){list-style-type:lower-alpha}.prose :where(ol[type=I]):not(:where(.not-prose,.not-prose *)){list-style-type:upper-roman}.prose :where(ol[type=i]):not(:where(.not-prose,.not-prose *)){list-style-type:lower-roman}.prose :where(ol[type=I s]):not(:where(.not-prose,.not-prose *)){list-style-type:upper-roman}.prose :where(ol[type=i s]):not(:where(.not-prose,.not-prose *)){list-style-type:lower-roman}.prose :where(ol[type="1"]):not(:where(.not-prose,.not-prose *)){list-style-type:decimal}.prose :where(ul):not(:where(.not-prose,.not-prose *)){list-style-type:disc}.prose :where(ol>li):not(:where(.not-prose,.not-prose *))::marker,.prose :where(ul>li):not(:where(.not-prose,.not-prose *))::marker,.prose :where(summary):not(:where(.not-prose,.not-prose *))::marker{color:var(--un-prose-lists)}.prose :where(hr):not(:where(.not-prose,.not-prose *)){margin:2em 0;border:1px solid var(--un-prose-hr)}.prose :where(table):not(:where(.not-prose,.not-prose *)){display:block;margin:1em 0;border-collapse:collapse;overflow-x:auto}.prose :where(tr):not(:where(.not-prose,.not-prose *)):nth-child(2n){background:var(--un-prose-bg-soft)}.prose :where(td,th):not(:where(.not-prose,.not-prose *)){border:1px solid var(--un-prose-borders);padding:.625em 1em}.prose :where(abbr):not(:where(.not-prose,.not-prose *)){cursor:help}.prose :where(kbd):not(:where(.not-prose,.not-prose *)){color:var(--un-prose-code);border:1px solid;padding:.25rem .5rem;font-size:.875em;border-radius:.25rem}.prose :where(details):not(:where(.not-prose,.not-prose *)){margin:1em 0;padding:1.25rem 1.5rem;background:var(--un-prose-bg-soft)}.prose :where(summary):not(:where(.not-prose,.not-prose *)){cursor:pointer;font-weight:600}.prose{color:var(--un-prose-body);max-width:65ch}.m-auto{margin:auto}.text-left{text-align:left} ');

(function (vue) {
	'use strict';

	const p=(n,o)=>{const t=n.__vccOpts||n;for(const[e,c]of o)t[e]=c;return t},l={};function a(n,o){return vue.openBlock(),vue.createElementBlock("div",null,"123123121241234")}const i=p(l,[["render",a]]),u=f({name:"setting",displayName:"设置",entry(){_(i),console.log("setting entry");}});function _(n,o){const t=vue.createApp(n);return t.mount(o||document.body),t}const f=n=>n,d=()=>[u];(async()=>{const n=d();console.log(n);})();

})(Vue);