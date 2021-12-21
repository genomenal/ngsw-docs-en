"use strict";(self.webpackChunkngsw_docs_cnv_en=self.webpackChunkngsw_docs_cnv_en||[]).push([[6420],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,v=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7762:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:6,sidebar_label:"Copy number variations discovery"},c="Copy number variations discovery",l={unversionedId:"workflow_details/cnv-discovery",id:"workflow_details/cnv-discovery",isDocsHomePage:!1,title:"Copy number variations discovery",description:"This is a key step in discovering how many copies of a DNA region were present in the sequenced genome on average.",source:"@site/docs/workflow_details/cnv-discovery.md",sourceDirName:"workflow_details",slug:"/workflow_details/cnv-discovery",permalink:"/ngsw-docs-en/workflow_details/cnv-discovery",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Copy number variations discovery"},sidebar:"tutorialSidebar",previous:{title:"Variant discovery preprocessing",permalink:"/ngsw-docs-en/workflow_details/variant-discovery-preprocessing"},next:{title:"Example of a sample with no aneuploidy and normal data quality",permalink:"/ngsw-docs-en/sample-examples/normal-no-cnvs"}},p=[{value:"1. Estimate read counts or depths",id:"1-estimate-read-counts-or-depths",children:[]},{value:"2. Calculate coverage in the given regions",id:"2-calculate-coverage-in-the-given-regions",children:[]},{value:"3. Compile a copy-number reference",id:"3-compile-a-copy-number-reference",children:[]},{value:"4. CNV discovery",id:"4-cnv-discovery",children:[]},{value:"5. Annotate CNV VCF",id:"5-annotate-cnv-vcf",children:[]},{value:"6. Evaluating and visualizing biological features",id:"6-evaluating-and-visualizing-biological-features",children:[]},{value:"7. Generate CNV report",id:"7-generate-cnv-report",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"copy-number-variations-discovery"},"Copy number variations discovery"),(0,i.kt)("p",null,"This is a key step in discovering how many copies of a DNA region were present in the sequenced genome on average."),(0,i.kt)("h2",{id:"1-estimate-read-counts-or-depths"},"1. Estimate read counts or depths"),(0,i.kt)("p",null,"Depending on the depth of coverage and the sequencing type (targeted selection or WGS), genome span should be split into regions of appropriate size. Then reads within these regions are quantitated. At this stage, depth analysis is carried out in order to find the optimal genome fragmentation for coverage estimating."),(0,i.kt)("h2",{id:"2-calculate-coverage-in-the-given-regions"},"2. Calculate coverage in the given regions"),(0,i.kt)("p",null,"At this stage, the counting of reads in each of the regions that were determined in the previous stage is undertaken."),(0,i.kt)("h2",{id:"3-compile-a-copy-number-reference"},"3. Compile a copy-number reference"),(0,i.kt)("p",null,"It is necessary to estimate the deviation of the depth from the norm due to intrinsic properties of the region. At this stage, the pipeline takes into account GC content and other characteristics of the regions in order to identify the expected coverage within them."),(0,i.kt)("h2",{id:"4-cnv-discovery"},"4. CNV discovery"),(0,i.kt)("p",null,"This is a key step in copy number variations detection. For single samples (for example, sequencing of only tumor tissue or prenatal genetic testing), ",(0,i.kt)("a",{parentName:"p",href:"https://cnvkit.readthedocs.io/en/stable/"},"CNVkit")," is used. In the case of analysis of paired samples (for example, tumor tissue analyzed against matched non-tumor tissue), ",(0,i.kt)("a",{parentName:"p",href:"https://gatk.broadinstitute.org/"},"GATK")," pipeline is used."),(0,i.kt)("h2",{id:"5-annotate-cnv-vcf"},"5. Annotate CNV VCF"),(0,i.kt)("p",null,"For a complete and effective interpretation of the CNV effect on the phenotype, we annotate each discovered variant. The format and fields of annotation can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://lbgi.fr/AnnotSV/Documentation/README.AnnotSV_latest.pdf"},"the documentation of the AnnotSV tool"),"."),(0,i.kt)("h2",{id:"6-evaluating-and-visualizing-biological-features"},"6. Evaluating and visualizing biological features"),(0,i.kt)("p",null,"Result suitable for interpretation requires data on specific features of the genome instead of chromosome coordinates. At this stage, computed copy number deviations on the genome are used to find CNVs in biological features like chromosome arms or genes, depending on the analysis configuration. Additionally, visualization of the calls is done at this stage."),(0,i.kt)("h2",{id:"7-generate-cnv-report"},"7. Generate CNV report"),(0,i.kt)("p",null,"At this stage, a report on the results of the analysis is generated.\nThe report can be viewed on ",(0,i.kt)("a",{parentName:"p",href:"/results/cnv-report/sample-cnv-report"},'the "CNV Report" tab')," and constitutes a raw\ndocument summarizing variants detected for the processed sample."))}u.isMDXComponent=!0}}]);