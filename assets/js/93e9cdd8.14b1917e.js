"use strict";(self.webpackChunkngsw_docs_cnv_en=self.webpackChunkngsw_docs_cnv_en||[]).push([[9889],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),f=r,u=d["".concat(i,".").concat(f)]||d[f]||m[f]||s;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85828:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),o=["components"],l={sidebar_position:12,sidebar_label:"Generate reports"},i="Generate reports",p={unversionedId:"results/workflow-details/fastq-analysis/report-generation",id:"results/workflow-details/fastq-analysis/report-generation",isDocsHomePage:!1,title:"Generate reports",description:"Report generation is started for a sample if the following conditions are met:",source:"@site/docs/results/workflow-details/fastq-analysis/report-generation.mdx",sourceDirName:"results/workflow-details/fastq-analysis",slug:"/results/workflow-details/fastq-analysis/report-generation",permalink:"/ngsw-docs-en/results/workflow-details/fastq-analysis/report-generation",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,sidebar_label:"Generate reports"},sidebar:"tutorialSidebar",previous:{title:"Phenotype prediction",permalink:"/ngsw-docs-en/results/workflow-details/fastq-analysis/phenotypes"},next:{title:"Parameters",permalink:"/ngsw-docs-en/results/parameters"}},c=[],m={toc:c};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"generate-reports"},"Generate reports"),(0,s.kt)("p",null,"Report generation is started for a sample if the following conditions are met:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"There is at least one active ",(0,s.kt)("a",{parentName:"li",href:"/settings/report-templates/report-templates"},"report template")," added to the system\nthat has at least one ",(0,s.kt)("a",{parentName:"li",href:"/settings/report-templates/report-templates#add-block"},"added block"),' and is applicable to the\nsample type. The template can be applicable to tumor, normal, or any samples. In addition, a report template that\nmeets all of the above conditions must be added to the system before the sample analysis was complete.\nIf you added or updated a report template after the sample analysis completion and you want to generate or update\nthe corresponding report for this sample, reprocess the sample from the "',(0,s.kt)("em",{parentName:"li"},"Generate reports"),'" stage.'),(0,s.kt)("li",{parentName:"ol"},"The sample analysis workflow includes alignment and one of the following analysis stages:\n",(0,s.kt)("a",{parentName:"li",href:"/results/workflow-details/fastq-analysis/somatic-snvs-indels"},'"Somatic SNVs/Indels discovery"')," for a tumor sample;\n",(0,s.kt)("a",{parentName:"li",href:"/results/workflow-details/fastq-analysis/germline-snvs-indels"},'"Germline SNVs/Indels discovery"')," for a non-tumor\nor single tumor sample; or ",(0,s.kt)("a",{parentName:"li",href:"/results/workflow-details/fastq-analysis/cnv-discovery"},'"Copy number variations discovery"'),".\nThe presence of other analysis stages may only affect the generation of specific reports or their content."),(0,s.kt)("li",{parentName:"ol"},'The sample analysis has been successfully completed (i.e. all stages included in the analysis workflow\nhave the status "',(0,s.kt)("em",{parentName:"li"},"Complete"),'").')),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:a(42262).Z,width:"1000"})),(0,s.kt)("p",null,'During the "Generate reports" stage, the system considers all report templates that match the above conditions\nand generates reports for these templates if at least one of the following conditions is met:'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If the sample analysis workflow includes ",(0,s.kt)("a",{parentName:"li",href:"/results/workflow-details/fastq-analysis/somatic-snvs-indels"},"somatic"),"\nand/or ",(0,s.kt)("a",{parentName:"li",href:"/results/workflow-details/fastq-analysis/germline-snvs-indels"},"germline")," SNVs/Indels discovery, then to\ngenerate a report, its template must include at least one block with SNVs/Indels that match the origin with\nthe SNVs/Indels discovered in the sample. Thus, if somatic SNVs/Indels were discovered in a sample, then blocks\nwith somatic SNVs/Indels will be generated. And if germline SNVs/Indels were discovered for a sample, then blocks\nwith germline SNVs/Indels will be generated for a sample."),(0,s.kt)("li",{parentName:"ul"},"If the sample analysis workflow\nincludes ",(0,s.kt)("a",{parentName:"li",href:"/results/workflow-details/fastq-analysis/structural-variations"},"structural variations discovery"),", then\nto generate a report, its template must include at least one block with structural variations (in this case,\nit is mandatory to include SNVs/Indels and/or copy number variations discovery in the sample analysis workflow)."),(0,s.kt)("li",{parentName:"ul"},"If the sample analysis workflow\nincludes ",(0,s.kt)("a",{parentName:"li",href:"/results/workflow-details/fastq-analysis/cnv-discovery"},"copy number variations discovery"),", then\nto generate a report, its template must include at least one block with copy number variations."),(0,s.kt)("li",{parentName:"ul"},"A report whose template includes a block with polygenic traits will be generated for a sample if the following\nconditions are met:",(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},"The sample analysis workflow\nincludes ",(0,s.kt)("a",{parentName:"li",href:"/settings/settings/variant-discovery-settings#polygenic-risk-scores-calculation"},"the polygenic risk scores calculation"),"."),(0,s.kt)("li",{parentName:"ol"},"The sample analysis workflow includes SNVs/Indels and/or copy number variations discovery."),(0,s.kt)("li",{parentName:"ol"},"If ",(0,s.kt)("a",{parentName:"li",href:"/settings/settings/variant-discovery-settings#disable-qc-and-imputation"},"QC and imputation")," are included\nin the workflow, then the sample must pass the quality control."))),(0,s.kt)("li",{parentName:"ul"},'The report template includes only blocks that are independent of the analysis stages. These are blocks such as\n"Section", "Patient info", "Sample info", "Control (normal) sample info" (if the samples were uploaded as a\ntumor/control sample pair), "Formatted text", "Disclaimer", "Sign place", "Clinical trials", "Glioma: Literature".')),(0,s.kt)("p",null,'The "Generate reports" stage completes the sample analysis.'))}d.isMDXComponent=!0},42262:function(e,t,a){t.Z=a.p+"assets/images/report_generation_fq-0faa54180d5b37e8e1b9c9ad36f4ff57.png"}}]);