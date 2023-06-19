"use strict";(self.webpackChunkngsw_docs_cnv_en=self.webpackChunkngsw_docs_cnv_en||[]).push([[8808],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,u=m["".concat(l,".").concat(d)]||m[d]||h[d]||r;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68700:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={sidebar_position:3,sidebar_label:"ClinVar Phenotypes Report"},l="ClinVar Phenotypes Report",p={unversionedId:"results/variants-by-phenotypes",id:"results/variants-by-phenotypes",isDocsHomePage:!1,title:"ClinVar Phenotypes Report",description:"The report includes conditions (ClinVar phenotypes) that have the risk of developing in the patient",source:"@site/docs/results/variants-by-phenotypes.mdx",sourceDirName:"results",slug:"/results/variants-by-phenotypes",permalink:"/ngsw-docs-en/results/variants-by-phenotypes",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"ClinVar Phenotypes Report"},sidebar:"tutorialSidebar",previous:{title:"Alignments",permalink:"/ngsw-docs-en/results/main/alignments"},next:{title:"Onco-Genetic Testing Report",permalink:"/ngsw-docs-en/results/onco-genetic-testing-report"}},c=[{value:"1. Report Result and Recommendations",id:"report-result-and-recommendations",children:[]},{value:"2. Detailed Report",id:"detailed-report",children:[]},{value:"3. Excluded Variants",id:"excluded-variants",children:[]}],h={toc:c};function m(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clinvar-phenotypes-report"},"ClinVar Phenotypes Report"),(0,r.kt)("p",null,"The report includes ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"conditions"))," (ClinVar phenotypes) that have the risk of developing in the patient\ndue to pathogenic or likely pathogenic variants discovered in patient sample and associated with these\nconditions, and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"recommendations"))," that can prevent these conditions."),(0,r.kt)("p",null,"To obtain such a report, create ",(0,r.kt)("a",{parentName:"p",href:"/settings/report-templates/report-templates#add-template"},"a report template"),'\nthat includes "SNVs/Indels by ClinVar phenotypes" block.'),(0,r.kt)("p",null,"The report is divided into three main\nsections: ",(0,r.kt)("a",{parentName:"p",href:"/results/variants-by-phenotypes#report-result-and-recommendations"},"Report result and Recommendations"),",\n",(0,r.kt)("a",{parentName:"p",href:"/results/variants-by-phenotypes#detailed-report"},"Detailed report"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"/results/variants-by-phenotypes#excluded-variants"},"Excluded variants"),"."),(0,r.kt)("h3",{id:"report-result-and-recommendations"},"1. Report Result and Recommendations"),(0,r.kt)("p",null,"The sections includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A list of conditions (ClinVar phenotypes) that have the risk of developing in the patient or patient's closest\nrelatives due to pathogenic or likely pathogenic variants discovered in patient sample and associated with these\nconditions. The report may flag conditions that are characteristic of a person of the opposite sex.\nThis means that the variants found may not affect the risk of developing the condition in the patient\nbut may be transmitted from patient to a person or may have been inherited by patient from a person\nwho also may be at risk."),(0,r.kt)("li",{parentName:"ul"},"Pathogenic or likely pathogenic variants associated with the conditions listed above. Listed in a table with\nthe following columns:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Gene")," is the common name of the gene in which the variant is located;"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Genetic variant")," is a variant ID in ",(0,r.kt)("a",{parentName:"li",href:"https://www.ncbi.nlm.nih.gov/snp/"},"dbSNP")," database (rsId);"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Zygosity")," type of the variant: heterozygous or homozygous.")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:n(50821).Z,width:"700"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recommendations for the patient (consultation with a medical geneticist)."),(0,r.kt)("li",{parentName:"ul"},"Information for the doctor: a brief summary of how the report is compiled.")),(0,r.kt)("h3",{id:"detailed-report"},"2. Detailed Report"),(0,r.kt)("p",null,"A detailed report of the conditions listed in the first section. For each state, the following is indicated:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name"),': corresponds to "Report name" field\nfrom ',(0,r.kt)("a",{parentName:"li",href:"/settings/report-templates/report-templates#block-types"},"the template"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Variants")," discovered in the sample that are associated with the condition (with MedGen ID\nand/or ClinVar name in the template). ",(0,r.kt)("strong",{parentName:"li"},"Each variant meets the following conditions"),":")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Pathogenic or likely pathogenic in ClinVar ("Clinical significance" field);'),(0,r.kt)("li",{parentName:"ol"},"Not homozygous for reference (has at least one alternative allele);"),(0,r.kt)("li",{parentName:"ol"},"The total allele frequency in gnomAD is above the frequency threshold for extremely rare pathogenic variants\nand below the frequency threshold for too frequent pathogenic variants\n(thresholds are set in ",(0,r.kt)("a",{parentName:"li",href:"/settings/report-templates/report-templates#block-types"},"the template"),").")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Recommendations")," that can help reduce the risk of this condition\n(added in ",(0,r.kt)("a",{parentName:"li",href:"/settings/report-templates/report-templates#block-types"},"the template"),").")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:n(22639).Z,width:"900"})),(0,r.kt)("h3",{id:"excluded-variants"},"3. Excluded Variants"),(0,r.kt)("p",null,"Contains variants that were ",(0,r.kt)("strong",{parentName:"p"},"excluded from the detailed report")," according to one of the following criteria\n(while these variants meet all of the above conditions for being included in the report):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Criterion 1"),": variants with ",(0,r.kt)("strong",{parentName:"li"},"too high frequency")," in the human population (greater than 15%).\nPossible pathogenicity of these variants is inconsistent with such a high frequency."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Criterion 2"),": variants that are ",(0,r.kt)("strong",{parentName:"li"},"homozygous")," and that have ",(0,r.kt)("strong",{parentName:"li"},"frequency of less than 1%")," in the\nhuman population. According to ",(0,r.kt)("a",{parentName:"li",href:"https://www.bmj.com/content/372/bmj.n214"},"publication"),", these variants\ncould be detected as a result of a genotyping error carried out using microarray technology."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Criterion 3"),": variants that have a high probability of detection, expected based on the binomial\ndistribution and the probability of detecting a genetic variant among the identified populations.\nThe probability of the variant detection is below the reliability threshold, which is set\nin ",(0,r.kt)("a",{parentName:"li",href:"/settings/report-templates/report-templates#block-types"},"the template"),".",(0,r.kt)("br",null),"The probability\nis calculated as ",(0,r.kt)("em",{parentName:"li"},"(1 - Bin(n; m; p; 1))"),",",(0,r.kt)("br",null),"where\n",(0,r.kt)("em",{parentName:"li"},"Bin(n; m; p; 1)")," is the probability, expected based on the binomial distribution, that the variant\nis detected ",(0,r.kt)("em",{parentName:"li"},"n")," times among ",(0,r.kt)("em",{parentName:"li"},"m")," representatives (samples) of the population;",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"n")," is the number of representatives of the population (samples) in which this variant was detected;",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"m")," is the total number of representatives (samples) in the population;",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"p")," is the probability of detecting the variant in the human population (total allele frequency\nin ",(0,r.kt)("a",{parentName:"li",href:"https://gnomad.broadinstitute.org/"},"gnomAD")," database). If there is no data on the frequency in the\npopulation, then the probability is taken as 0.001.",(0,r.kt)("br",null),"\nThus, variants are excluded from the report if they were detected more than ",(0,r.kt)("em",{parentName:"li"},"n")," times among ",(0,r.kt)("em",{parentName:"li"},"m")," samples\nof the population, but at the same time have a low frequency in the human population, i.e. possible\npathogenicity of these variants is inconsistent with such a high frequency among representatives (samples)\nof the population.",(0,r.kt)("br",null),"\nThe values of ",(0,r.kt)("em",{parentName:"li"},"n")," and ",(0,r.kt)("em",{parentName:"li"},"m")," are taken\nfrom ",(0,r.kt)("a",{parentName:"li",href:"/settings/custom-annotations#define-annotation-type"},"the custom frequency database"),". If the database\nhas not been uploaded into the system, variants will not be excluded by Criterion 3.")),(0,r.kt)("h4",{id:"variant"},"Each variant is presented in the report as follows:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:n(90046).Z,width:"900"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Gene")," is the common name of the gene in which the variant is located."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Variant ID")," is a variant ID in ",(0,r.kt)("a",{parentName:"li",href:"https://www.ncbi.nlm.nih.gov/snp/"},"dbSNP")," database (rsId)."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Reference allele")," of the variant."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Alternative allele")," of the variant."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"gnomAD AF")," is the total allele frequency in ",(0,r.kt)("a",{parentName:"li",href:"https://gnomad.broadinstitute.org/"},"gnomAD")," database."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Chromosome")," is the chromosome in which the variant is located."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Start")," is the start position of the variant on the chromosome."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"End")," is the end position of the variant on the chromosome."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Amino acid change"),": exon number in the transcript that the variant affected; amino acid and nucleotide\nsubstitutions using ",(0,r.kt)("a",{parentName:"li",href:"https://varnomen.hgvs.org/"},"the HGVS notation"),". Amino acid substitution: \u201cp.\u201d prefix\n(protein) + reference amino acid + amino acid position in protein + new amino acid resulting from the substitution.\nNucleotide substitution:  \u201cc.\u201d (coding; for a substitution in the coding sequence) or \u201cn.\u201d (non-coding;\nfor a substitution in the non-coding sequence) + genomic position of the substituted nucleotide + reference\nallele > alternative allele."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Transcript")," is the main transcript ID from ",(0,r.kt)("a",{parentName:"li",href:"https://www.ncbi.nlm.nih.gov/nuccore/"},"RefSeq")," database\n(NM_xxxxxx.x)."),(0,r.kt)("li",{parentName:"ol"},"An indication of the variant zygosity: ",(0,r.kt)("strong",{parentName:"li"},"heterozygous")," or ",(0,r.kt)("strong",{parentName:"li"},"homozygous"),"."),(0,r.kt)("li",{parentName:"ol"},"For variants ",(0,r.kt)("strong",{parentName:"li"},"excluded")," from the detailed report, there is an indication of the criterion by which\nthey were excluded.")))}m.isMDXComponent=!0},50821:function(e,t,n){t.Z=n.p+"assets/images/associated_variants-e8e25f7f6b3b8118d83bcd4579371ed3.png"},22639:function(e,t,n){t.Z=n.p+"assets/images/phenotype_info-d74ddfe073d1b202dd0ff3bc5093e5c9.png"},90046:function(e,t,n){t.Z=n.p+"assets/images/variant-bd379cace99d5bb1ed5f73ce236cbdf6.png"}}]);