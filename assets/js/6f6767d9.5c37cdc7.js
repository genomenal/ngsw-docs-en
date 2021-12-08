"use strict";(self.webpackChunkngsw_docs_cnv_en=self.webpackChunkngsw_docs_cnv_en||[]).push([[7931],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),g=a,d=f["".concat(c,".").concat(g)]||f[g]||u[g]||o;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2049:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={sidebar_position:5,sidebar_label:"Coverage Analysis"},c="Coverage Analysis",l={unversionedId:"results/coverage-analysis",id:"results/coverage-analysis",isDocsHomePage:!1,title:"Coverage Analysis",description:"Genome coverage (or target exome regions or target panel) allows you to assess how informative the CNV discovery is in general. In this section, you can estimate both the fraction of data covered in general, and how much the genes and transcripts of your interest are covered.",source:"@site/docs/results/coverage-analysis.md",sourceDirName:"results",slug:"/results/coverage-analysis",permalink:"/ngsw-docs-en/results/coverage-analysis",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Coverage Analysis"},sidebar:"tutorialSidebar",previous:{title:"Bioinformatic report",permalink:"/ngsw-docs-en/results/bioinformatic-report"},next:{title:"Variant Viewer",permalink:"/ngsw-docs-en/results/variant-viewer/variant-viewer"}},p=[],u={toc:p};function f(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"coverage-analysis"},"Coverage Analysis"),(0,o.kt)("p",null,"Genome coverage (or target exome regions or target panel) allows you to assess how informative the CNV discovery is in general. In this section, you can estimate both the fraction of data covered in general, and how much the genes and transcripts of your interest are covered."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Depth of coverage of target regions (example)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Coverage analysis",src:r(2044).Z})),(0,o.kt)("p",null,"The plot shows which fraction of the genome or target regions is covered at different depths. So, in the example, 96.79% of the target regions are covered with 30 reads, which is a good indicator.\nFor a more accurate assessment of coverage in genes of interest, you can use the search below on the page and select a transcript. To select a transcript, click on the gene name. By default, the transcript of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih.gov/refseq/MANE/"},"MANE Clinical")," database is chosen, if there is no gene in the database, the canonical transcript is chosen according to ",(0,o.kt)("a",{parentName:"p",href:"https://www.ensembl.org/info/docs/tools/vep/index.html"},"Ensembl")," annotation. Search results can be exported as a table."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TP53 gene coverage")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Gene coverage",src:r(2856).Z})))}f.isMDXComponent=!0},2044:function(e,t,r){t.Z=r.p+"assets/images/36-coverage-analysis-676dd4481abaf0d87234dca051cb763a.png"},2856:function(e,t,r){t.Z=r.p+"assets/images/37-gene-coverage-1adfcb4e2a445b0aeca95c4925bea90b.png"}}]);