"use strict";(self.webpackChunkngsw_docs_cnv_en=self.webpackChunkngsw_docs_cnv_en||[]).push([[7275],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,m=c["".concat(s,".").concat(u)]||c[u]||f[u]||i;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},55734:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={sidebar_position:2,sidebar_label:"Upload, identify and verify"},s="Upload, identify and verify",d={unversionedId:"results/workflow-details/fastq-analysis/upload-identify-verify",id:"results/workflow-details/fastq-analysis/upload-identify-verify",isDocsHomePage:!1,title:"Upload, identify and verify",description:"If a single read sequencing sample is uploaded, only one file will be processed and the initial workflow stage",source:"@site/docs/results/workflow-details/fastq-analysis/upload-identify-verify.mdx",sourceDirName:"results/workflow-details/fastq-analysis",slug:"/results/workflow-details/fastq-analysis/upload-identify-verify",permalink:"/ngsw-docs-en/results/workflow-details/fastq-analysis/upload-identify-verify",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Upload, identify and verify"},sidebar:"tutorialSidebar",previous:{title:"Analysis of FASTQ or BAM samples",permalink:"/ngsw-docs-en/results/workflow-details/fastq-analysis/workflow-details"},next:{title:"Check quality and cleanup",permalink:"/ngsw-docs-en/results/workflow-details/fastq-analysis/check-quality-and-cleanup"}},p=[],f={toc:p};function c(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"upload-identify-and-verify"},"Upload, identify and verify"),(0,i.kt)("p",null,'If a single read sequencing sample is uploaded, only one file will be processed and the initial workflow stage\nwill be called "Upload, identify and verify". If a paired read sequencing sample is uploaded, then two paired files\nwill be analyzed and there will be two initial workflow stages: "Upload, identify and verify primary" and\n"Upload, identify and verify mate".'),(0,i.kt)("p",null,"During the initial workflow stage, the FASTQ or BAM format sample file(s) are uploaded, their format is identified,\nand they are verified. If any of the following tasks fail, the sample analysis is stopped."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:a(30938).Z,width:"1000"})),(0,i.kt)("p",null,'The "Upload, identify and verify" stage of sample analysis may include the following tasks:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Upload"),". If you are uploading the sample file(s) from your computer and not via a link, the uploading\nprocess may be interrupted. To restore it, use ",(0,i.kt)("a",{parentName:"li",href:"/uploading-samples/restore_upload"},"the resume upload form"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Identify"),": determination of data format and sequencer. A sample uploaded in BAM format is checked\nto appear to be intact by ",(0,i.kt)("a",{parentName:"li",href:"http://www.htslib.org/doc/samtools-quickcheck.html"},"samtools quickcheck"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Compress FASTQ")," to GZIP archive if the sample was uploaded as a FASTQ file, not packed into an archive or\npacked into an archive other than GZIP (e.g. ZIP, BZIP2, 7-ZIP, XZ, WIM, RAR). Compression is performed\nusing ",(0,i.kt)("a",{parentName:"li",href:"https://zlib.net/pigz/"},"Pigz"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Convert to FASTQ")," if the sample was uploaded in BAM format. It is performed\nusing ",(0,i.kt)("a",{parentName:"li",href:"https://gatk.broadinstitute.org/hc/en-us/articles/360036485372-SamToFastq-Picard-"},"GATK SamToFastq"),".\nThe resulting FASTQ files are compressed into a GZIP archive using ",(0,i.kt)("a",{parentName:"li",href:"https://zlib.net/pigz/"},"Pigz"),'.\nThe original BAM file can be downloaded in the "',(0,i.kt)("em",{parentName:"li"},"Result files"),'" section in the "',(0,i.kt)("em",{parentName:"li"},"Convert to FASTQ"),'" task\ndetails ("',(0,i.kt)("em",{parentName:"li"},"Download Original BAM"),'").'),(0,i.kt)("li",{parentName:"ol"},"The sample can be uploaded as an interleaved file. In such a file, the primary read is always written right\nbefore the corresponding mate read for each pair of reads. Such a sample undergoes additional pre-analysis\ntasks, such as ",(0,i.kt)("strong",{parentName:"li"},"Backup cop")," and ",(0,i.kt)("strong",{parentName:"li"},"Deinterleave Source File"),', which are necessary to accurately split the\nreads from the file into primary and mate reads and write them to two separate files. All pre-split tasks except\n"Identify" will be recorded in the details of the "Upload, identify and verify primary" stage, and the\n"Upload, identify and verify mate" stage will include only the "Identify", "Determine reads type" and "Verify" tasks.'),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Determine reads type"),": DNA, RNA or UNKNOWN. This is an experimental feature that does not affect further\nanalysis. Reads type is determined by a built-in classifier that predicts the sequence type using the LSTM\n(long short-term memory) model. If the type is determined incorrectly, you can change it\non ",(0,i.kt)("a",{parentName:"li",href:"/results/main/main#sample-info"},"the sample page"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Verify")," file integrity; check that there are four lines per read; check that the lengths of sequence and\nsequence qualities are the same.")),(0,i.kt)("p",null,"The uploaded compressed FASTQ sample file(s) can be\ndownloaded ",(0,i.kt)("a",{parentName:"p",href:"/results/workflow-details/workflow-details#sample-files"},'at the top of the "Workflow details" tab'),". In\nthe case of an interleaved paired read sample, you can download there the primary and mate read files after splitting."),(0,i.kt)("p",null,'After the "Upload, identify and verify" stage has successfully completed, the analysis continues\nwith ',(0,i.kt)("a",{parentName:"p",href:"/results/workflow-details/fastq-analysis/check-quality-and-cleanup"},"quality control"),"."))}c.isMDXComponent=!0},30938:function(e,t,a){t.Z=a.p+"assets/images/upload_workflow-34b7a67a1edd446c381af6d4e44ab3be.png"}}]);