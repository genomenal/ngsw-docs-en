"use strict";(self.webpackChunkngsw_docs_cnv_en=self.webpackChunkngsw_docs_cnv_en||[]).push([[8808],{3905:function(e,t,n){n.d(t,{Zo:function(){return A},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},A=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,A=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||r;return n?a.createElement(m,o(o({ref:t},A),{},{components:n})):a.createElement(m,o({ref:t},A))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68700:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return A},default:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={sidebar_position:6,sidebar_label:"ClinVar Phenotypes Report"},l="ClinVar Phenotypes Report",p={unversionedId:"results/variants-by-phenotypes",id:"results/variants-by-phenotypes",isDocsHomePage:!1,title:"ClinVar Phenotypes Report",description:"The report includes conditions (ClinVar phenotypes) that have",source:"@site/docs/results/variants-by-phenotypes.mdx",sourceDirName:"results",slug:"/results/variants-by-phenotypes",permalink:"/ngsw-docs-en/results/variants-by-phenotypes",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"ClinVar Phenotypes Report"},sidebar:"tutorialSidebar",previous:{title:"ACMG Secondary Findings Report",permalink:"/ngsw-docs-en/results/acmg-sf-report"},next:{title:"Onco-Genetic Testing Report",permalink:"/ngsw-docs-en/results/onco-genetic-testing-report"}},A=[{value:"1. Report Result and Recommendations",id:"report-result-and-recommendations",children:[]},{value:"2. Detailed Report",id:"detailed-report",children:[]},{value:"3. Excluded Variants",id:"excluded-variants",children:[]},{value:"Reports export",id:"export",children:[]}],h={toc:A};function c(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clinvar-phenotypes-report"},"ClinVar Phenotypes Report"),(0,r.kt)("p",null,"The report includes ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"conditions"))," (",(0,r.kt)("a",{parentName:"p",href:"https://preview.ncbi.nlm.nih.gov/clinvar/"},"ClinVar")," phenotypes) that have\nthe risk of developing in the patient\ndue to pathogenic or likely pathogenic variants discovered in patient sample and associated with these\nconditions, and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"recommendations"))," that can prevent these conditions."),(0,r.kt)("p",null,"To obtain such a report, create ",(0,r.kt)("a",{parentName:"p",href:"/settings/report-templates/report-templates#add-template"},"a report template"),'\nthat includes "SNVs/Indels by ClinVar phenotypes" block.'),(0,r.kt)("p",null,"The report is divided into three main\nsections: ",(0,r.kt)("a",{parentName:"p",href:"/results/variants-by-phenotypes#report-result-and-recommendations"},"Report result and Recommendations"),",\n",(0,r.kt)("a",{parentName:"p",href:"/results/variants-by-phenotypes#detailed-report"},"Detailed report"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"/results/variants-by-phenotypes#excluded-variants"},"Excluded variants"),"."),(0,r.kt)("h3",{id:"report-result-and-recommendations"},"1. Report Result and Recommendations"),(0,r.kt)("p",null,"The sections includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A list of conditions (ClinVar phenotypes) that have the risk of developing in the patient or patient's closest\nrelatives due to pathogenic or likely pathogenic variants discovered in patient sample and associated with these\nconditions. The report may flag conditions that are characteristic of a person of the opposite sex.\nThis means that the variants found may not affect the risk of developing the condition in the patient\nbut may be transmitted from patient to a person or may have been inherited by patient from a person\nwho also may be at risk."),(0,r.kt)("li",{parentName:"ul"},"Pathogenic or likely pathogenic variants associated with the conditions listed above. Listed in a table with\nthe following columns:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Gene")," is the common name of the gene in which the variant is located;"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Genetic variant")," is a variant ID in ",(0,r.kt)("a",{parentName:"li",href:"https://www.ncbi.nlm.nih.gov/snp/"},"dbSNP")," database (rsId);"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Zygosity")," type of the variant: heterozygous or homozygous.")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:n(50821).Z,width:"700"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recommendations for the patient (consultation with a medical geneticist)."),(0,r.kt)("li",{parentName:"ul"},"Information for the doctor: a brief summary of how the report is compiled.")),(0,r.kt)("h3",{id:"detailed-report"},"2. Detailed Report"),(0,r.kt)("p",null,"A detailed report of the conditions listed in the first section. For each state, the following is indicated:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name"),': corresponds to "Report name" field\nfrom ',(0,r.kt)("a",{parentName:"li",href:"/settings/report-templates/report-templates#block-types"},"the template"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Variants")," discovered in the sample that are associated with the condition (with MedGen ID\nand/or ClinVar name in the template). ",(0,r.kt)("strong",{parentName:"li"},"Each variant meets the following conditions"),":")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Pathogenic or likely pathogenic in ClinVar ("Clinical significance" field);'),(0,r.kt)("li",{parentName:"ol"},"Not homozygous for reference (has at least one alternative allele);"),(0,r.kt)("li",{parentName:"ol"},"The total allele frequency in ",(0,r.kt)("a",{parentName:"li",href:"https://gnomad.broadinstitute.org/news/2020-10-gnomad-v3-1/"},"gnomAD 3")," is\nabove the frequency threshold for extremely rare pathogenic variants\nand below the frequency threshold for too frequent pathogenic variants\n(thresholds are set in ",(0,r.kt)("a",{parentName:"li",href:"/settings/report-templates/report-templates#block-types"},"the template"),").")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Recommendations")," that can help reduce the risk of this condition\n(added in ",(0,r.kt)("a",{parentName:"li",href:"/settings/report-templates/report-templates#block-types"},"the template"),").")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:n(22639).Z,width:"900"})),(0,r.kt)("h3",{id:"excluded-variants"},"3. Excluded Variants"),(0,r.kt)("p",null,"Contains variants that were ",(0,r.kt)("strong",{parentName:"p"},"excluded from the detailed report")," according to one of the following criteria\n(while these variants meet all of the above conditions for being included in the report):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Criterion 1"),": variants with ",(0,r.kt)("strong",{parentName:"li"},"too high frequency")," in the human population (greater than 15%).\nPossible pathogenicity of these variants is inconsistent with such a high frequency."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Criterion 2"),": variants that are ",(0,r.kt)("strong",{parentName:"li"},"homozygous")," and that have ",(0,r.kt)("strong",{parentName:"li"},"frequency of less than 1%")," in the\nhuman population. According to ",(0,r.kt)("a",{parentName:"li",href:"https://www.bmj.com/content/372/bmj.n214"},"publication"),", these variants\ncould be detected as a result of a genotyping error carried out using microarray technology."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Criterion 3"),": variants that have a high probability of detection, expected based on the binomial\ndistribution and the probability of detecting a genetic variant among the identified populations.\nThe probability of the variant detection is below the reliability threshold, which is set\nin ",(0,r.kt)("a",{parentName:"li",href:"/settings/report-templates/report-templates#block-types"},"the template"),".",(0,r.kt)("br",null),"The probability\nis calculated as ",(0,r.kt)("em",{parentName:"li"},"(1 - Bin(n; m; p; 1))"),",",(0,r.kt)("br",null),"where\n",(0,r.kt)("em",{parentName:"li"},"Bin(n; m; p; 1)")," is the probability, expected based on the binomial distribution, that the variant\nis detected ",(0,r.kt)("em",{parentName:"li"},"n")," times among ",(0,r.kt)("em",{parentName:"li"},"m")," representatives (samples) of the population;",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"n")," is the number of representatives of the population (samples) in which this variant was detected;",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"m")," is the total number of representatives (samples) in the population;",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"p")," is the probability of detecting the variant in the human population (total allele frequency\nin ",(0,r.kt)("a",{parentName:"li",href:"https://gnomad.broadinstitute.org/news/2020-10-gnomad-v3-1/"},"gnomAD 3")," database). If there is no data on\nthe frequency in the population, then the probability is taken as 0.001.",(0,r.kt)("br",null),"\nThus, variants are excluded from the report if they were detected more than ",(0,r.kt)("em",{parentName:"li"},"n")," times among ",(0,r.kt)("em",{parentName:"li"},"m")," samples\nof the population, but at the same time have a low frequency in the human population, i.e. possible\npathogenicity of these variants is inconsistent with such a high frequency among representatives (samples)\nof the population.",(0,r.kt)("br",null),"\nThe values of ",(0,r.kt)("em",{parentName:"li"},"n")," and ",(0,r.kt)("em",{parentName:"li"},"m")," are taken\nfrom ",(0,r.kt)("a",{parentName:"li",href:"/settings/custom-annotations#define-annotation-type"},"the custom frequency database"),". If the database\nhas not been uploaded into the system, variants will not be excluded by Criterion 3.")),(0,r.kt)("h4",{id:"variant"},"Each variant is presented in the report as follows:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:n(90046).Z,width:"900"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Gene")," is the common name of the gene in which the variant is located."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Variant ID")," is a variant ID in ",(0,r.kt)("a",{parentName:"li",href:"https://www.ncbi.nlm.nih.gov/snp/"},"dbSNP")," database (rsId)."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Reference allele")," of the variant."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Alternative allele")," of the variant."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"gnomAD 3 AF")," is the total allele frequency\nin ",(0,r.kt)("a",{parentName:"li",href:"https://gnomad.broadinstitute.org/news/2020-10-gnomad-v3-1/"},"gnomAD v3")," database."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Chromosome")," is the chromosome in which the variant is located."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Start")," is the start position of the variant on the chromosome."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"End")," is the end position of the variant on the chromosome."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Amino acid change"),": exon number in the transcript that the variant affected; amino acid and nucleotide\nsubstitutions using ",(0,r.kt)("a",{parentName:"li",href:"https://varnomen.hgvs.org/"},"the HGVS notation"),". Amino acid substitution: \u201cp.\u201d prefix\n(protein) + reference amino acid + amino acid position in protein + new amino acid resulting from the substitution.\nNucleotide substitution:  \u201cc.\u201d (coding; for a substitution in the coding sequence) or \u201cn.\u201d (non-coding;\nfor a substitution in the non-coding sequence) + genomic position of the substituted nucleotide + reference\nallele > alternative allele."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Transcript")," is the main transcript ID from ",(0,r.kt)("a",{parentName:"li",href:"https://www.ncbi.nlm.nih.gov/nuccore/"},"RefSeq")," database\n(NM_xxxxxx.x)."),(0,r.kt)("li",{parentName:"ol"},"An indication of the variant zygosity: ",(0,r.kt)("strong",{parentName:"li"},"heterozygous")," or ",(0,r.kt)("strong",{parentName:"li"},"homozygous"),"."),(0,r.kt)("li",{parentName:"ol"},"For variants ",(0,r.kt)("strong",{parentName:"li"},"excluded")," from the detailed report, there is an indication of the criterion by which\nthey were excluded.")),(0,r.kt)("h2",{id:"export"},"Reports export"),(0,r.kt)("p",null,"ClinVar phenotypes report can be downloaded in PDF format.\nTo do this, click on the button ",(0,r.kt)("img",{src:n(44010).Z,width:"150"})," in the\nupper right corner of the report page."))}c.isMDXComponent=!0},50821:function(e,t,n){t.Z=n.p+"assets/images/associated_variants-e8e25f7f6b3b8118d83bcd4579371ed3.png"},44010:function(e,t){t.Z="data:image/png;base64,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"},22639:function(e,t,n){t.Z=n.p+"assets/images/phenotype_info-91f775d782818a36765cd35a2c67686b.png"},90046:function(e,t,n){t.Z=n.p+"assets/images/variant-e724dfd07d5c51a81f10dec0cb8fea57.png"}}]);