"use strict";(self.webpackChunkngsw_docs_cnv_en=self.webpackChunkngsw_docs_cnv_en||[]).push([[4420],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),c=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return l.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=c(n),p=r,k=f["".concat(u,".").concat(p)]||f[p]||d[p]||i;return n?l.createElement(k,a(a({ref:t},s),{},{components:n})):l.createElement(k,a({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}f.displayName="MDXCreateElement"},144:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var l=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],o={sidebar_position:3,sidebar_label:"Check file quality and cleanup"},u="Check file quality and cleanup",c={unversionedId:"workflow_details/check-quality-and-cleanup",id:"workflow_details/check-quality-and-cleanup",isDocsHomePage:!1,title:"Check file quality and cleanup",description:"The reads in the file(s) are checked for compliance with quality criteria. Depending on the results of the check, reads that do not meet the criteria will be filtered out, and nucleotides at the ends of reads with quality below the threshold will be truncated. In addition, the adapter sequences will be trimmed. This can significantly improve the quality of alignment and variant discovery.",source:"@site/docs/workflow_details/check-quality-and-cleanup.md",sourceDirName:"workflow_details",slug:"/workflow_details/check-quality-and-cleanup",permalink:"/ngsw-docs-en/workflow_details/check-quality-and-cleanup",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Check file quality and cleanup"},sidebar:"tutorialSidebar",previous:{title:"Upload, identify and verify file",permalink:"/ngsw-docs-en/workflow_details/upload-identify-verify"},next:{title:"Alignment",permalink:"/ngsw-docs-en/workflow_details/alignment"}},s=[],d={toc:s};function f(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,l.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"check-file-quality-and-cleanup"},"Check file quality and cleanup"),(0,i.kt)("p",null,"The reads in the file(s) are checked for compliance with quality criteria. Depending on the results of the check, reads that do not meet the criteria will be filtered out, and nucleotides at the ends of reads with quality below the threshold will be truncated. In addition, the adapter sequences will be trimmed. This can significantly improve the quality of alignment and variant discovery."),(0,i.kt)("p",null,"In the eponymous section of \u201cWorkflow details\u201d, information about the thresholds and quality checks that the samples passed are displayed. Here you can also download a detailed report with visualizations about each of the files before and after cleaning."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:n(1028).Z,width:"300"})),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to see the sequence quality control metrics"),(0,i.kt)("h4",{id:"the-sequence-quality-control-metrics"},"The sequence quality control metrics"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Metric"),(0,i.kt)("td",null,"Description"),(0,i.kt)("td",null,"Threshold")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Total sequences"),(0,i.kt)("td",null,"Number of sequences"),(0,i.kt)("td",null,">200 000")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Length distribution"),(0,i.kt)("td",null,"Sequence length distribution"),(0,i.kt)("td",null,"Short sequences percent < 25%, short sequence length \u2264 20")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Tiles sequence quality"),(0,i.kt)("td",null,"Number of tiles"),(0,i.kt)("td",null,"Number of tile bad quality cells with maximum deviation 1,165 < 7")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"First base sequence quality"),(0,i.kt)("td",null,"First nucleotides quality"),(0,i.kt)("td",null,"10% of the lowest quality first bases (3 nucleotides) are of quality > 20")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Middle base sequence quality"),(0,i.kt)("td",null,"Middle nucleotides quality"),(0,i.kt)("td",null,"10% of the lowest quality middle bases are of quality > 20")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Last base sequence quality"),(0,i.kt)("td",null,"Last nucleotides quality"),(0,i.kt)("td",null,"10% of the lowest quality last bases (3 nucleotides) are of quality > 20")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Overrepresented sequences"),(0,i.kt)("td",null,"Overrepresented sequences"),(0,i.kt)("td",null,"Overrepresented sequences percent < 1")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Adapter contaminated"),(0,i.kt)("td",null,"Adapter sequence contamination"),(0,i.kt)("td",null,"Adapter contaminated percent < 1")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Base N content"),(0,i.kt)("td",null,"Number of N among bases"),(0,i.kt)("td",null,"N content percent < 20")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"GC content"),(0,i.kt)("td",null,"GC content"),(0,i.kt)("td",null,"Presence of one GC peak")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Base sequence content"),(0,i.kt)("td",null,"AT/GC ratio"),(0,i.kt)("td",null,"Average difference between A and T < 1%, maximum difference < 20%, average difference between G and C < 1%, maximum difference < 20%")))))}f.isMDXComponent=!0},1028:function(e,t,n){t.Z=n.p+"assets/images/20-quality-control-report-29bba859fef368df27eb96461a289d77.png"}}]);