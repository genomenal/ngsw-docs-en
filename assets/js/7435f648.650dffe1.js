"use strict";(self.webpackChunkngsw_docs_cnv_en=self.webpackChunkngsw_docs_cnv_en||[]).push([[4590],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66703:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],l={sidebar_position:5,sidebar_label:"Generate reports"},i="Generate reports",p={unversionedId:"results/workflow-details/vcf-analysis/report-generation",id:"results/workflow-details/vcf-analysis/report-generation",isDocsHomePage:!1,title:"Generate reports",description:"Report generation is started for a sample if the following conditions are met:",source:"@site/docs/results/workflow-details/vcf-analysis/report-generation.mdx",sourceDirName:"results/workflow-details/vcf-analysis",slug:"/results/workflow-details/vcf-analysis/report-generation",permalink:"/ngsw-docs-en/results/workflow-details/vcf-analysis/report-generation",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Generate reports"},sidebar:"tutorialSidebar",previous:{title:"Phenotype prediction",permalink:"/ngsw-docs-en/results/workflow-details/vcf-analysis/phenotypes"},next:{title:"Parameters",permalink:"/ngsw-docs-en/results/parameters"}},c=[],m={toc:c};function u(e){var t=e.components,l=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generate-reports"},"Generate reports"),(0,o.kt)("p",null,"Report generation is started for a sample if the following conditions are met:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"There is at least one active ",(0,o.kt)("a",{parentName:"li",href:"/settings/report-templates/report-templates"},"report template")," added to the system\nthat has at least one ",(0,o.kt)("a",{parentName:"li",href:"/settings/report-templates/report-templates#add-block"},"added block"),' and is applicable to the\nsample type. The template can be applicable to tumor, normal, or any samples. In addition, a report template that\nmeets all of the above conditions must be added to the system before the sample analysis was complete.\nIf you added or updated a report template after the sample analysis completion and you want to generate or update\nthe corresponding report for this sample, reprocess the sample from the "',(0,o.kt)("em",{parentName:"li"},"Generate reports"),'" stage.'),(0,o.kt)("li",{parentName:"ol"},'The sample analysis has been successfully completed (i.e. all stages included in the workflow have the status\n"',(0,o.kt)("em",{parentName:"li"},"Complete"),'").'),(0,o.kt)("li",{parentName:"ol"},"The uploaded annotation contains SNVs/Indels.")),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:n(41341).Z,width:"750"})),(0,o.kt)("p",null,'During the "Generate reports" stage, the system considers all report templates that match the above conditions\nand generates reports for these templates if at least one of the following conditions is met:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The report template must include at least one block with SNVs/Indels that match the origin with\nthe SNVs/Indels in the sample. Thus, for a tumor sample, somatic SNVs/Indels will be obtained, and\nblocks with somatic SNVs/Indels will be suitable for it. And for a non-tumor sample, blocks with germline\nSNVs/Indels will be suitable."),(0,o.kt)("li",{parentName:"ul"},"A report whose template includes a block with polygenic traits will be generated for a sample if the following\nconditions are met:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"The sample analysis workflow\nincludes ",(0,o.kt)("a",{parentName:"li",href:"/settings/settings/variant-discovery-settings#polygenic-risk-scores-calculation"},"the polygenic risk scores calculation"),"."),(0,o.kt)("li",{parentName:"ol"},"If ",(0,o.kt)("a",{parentName:"li",href:"/settings/settings/variant-discovery-settings#disable-qc-and-imputation"},"QC and imputation")," are included\nin the workflow, then the sample must pass the quality control."))),(0,o.kt)("li",{parentName:"ul"},'The report template includes only blocks that are independent of the analysis stages. These are blocks such as\n"Section", "Patient info", "Sample info", "Control (normal) sample info" (if the samples were uploaded as a\ntumor/control sample pair), "Formatted text", "Disclaimer", "Sign place", "Clinical trials", "Glioma: Literature".')),(0,o.kt)("p",null,'The "Generate reports" stage completes the sample analysis.'))}u.isMDXComponent=!0},41341:function(e,t,n){t.Z=n.p+"assets/images/report_generation-994e9cff28b429a118725adeba01d151.png"}}]);