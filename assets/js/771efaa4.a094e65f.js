"use strict";(self.webpackChunkngsw_docs_cnv_en=self.webpackChunkngsw_docs_cnv_en||[]).push([[622],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,f=m["".concat(s,".").concat(u)]||m[u]||h[u]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75692:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={sidebar_position:3,sidebar_label:"Variant Details Panel"},s="Variant Details Panel",p={unversionedId:"results/main/snvs-indels/snv-details-panel",id:"results/main/snvs-indels/snv-details-panel",isDocsHomePage:!1,title:"Variant Details Panel",description:"Click on the variant row to see a variant details panel under the table:",source:"@site/docs/results/main/snvs-indels/snv-details-panel.mdx",sourceDirName:"results/main/snvs-indels",slug:"/results/main/snvs-indels/snv-details-panel",permalink:"/ngsw-docs-en/results/main/snvs-indels/snv-details-panel",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Variant Details Panel"},sidebar:"tutorialSidebar",previous:{title:"Variant Viewer",permalink:"/ngsw-docs-en/results/main/snvs-indels/variant-viewer"},next:{title:"Basic Filtering of Variants",permalink:"/ngsw-docs-en/results/main/snvs-indels/basic-filtering"}},c=[{value:"Details panel tabs",id:"panel-tabs",children:[{value:"Common: the basic information about the variant",id:"common-tab",children:[]},{value:"ClinVar: data on the relationships among variants and phenotypes from the ClinVar database",id:"clinvar-tab",children:[]},{value:"GnomAD: data on allele frequencies of the variant from the gnomAD database",id:"gnomad-tab",children:[]},{value:"ExAC: data on allele frequencies from the ExAC database",id:"exac-tab",children:[]},{value:"Other frequencies",id:"other-frequencies-tab",children:[]},{value:"Conservation: data on the conservation of the variant",id:"conservation-tab",children:[]},{value:"Protein function effect",id:"protein-function-effect-tab",children:[]},{value:"Other: additional information about the variant",id:"other-tab",children:[]},{value:"Custom annotation sources",id:"custom-annotation-sources-tab",children:[]}]}],h={toc:c};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"variant-details-panel"},"Variant Details Panel"),(0,r.kt)("p",null,"Click on the variant row to see a variant details panel under the table:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:n(9152).Z,width:"900"})),(0,r.kt)("p",null,"The panel can be resized by hovering over the top border of the panel and dragging down or up.\nYou can also collapse or expand the panel by\nclicking on ",(0,r.kt)("img",{src:n(55236).Z,width:"30"}),"or ",(0,r.kt)("img",{src:n(73365).Z,width:"30"}),", respectively."),(0,r.kt)("h2",{id:"panel-tabs"},"Details panel tabs"),(0,r.kt)("h3",{id:"common-tab"},"Common: the basic information about the variant"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Gene")," is data about the gene in which the variant is located:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Official full name")),". When hovering over the gene name, you can see where it was taken from:")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:n(96618).Z,width:"300"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Links"))," to pages with information about the gene in various databases\n(",(0,r.kt)("a",{parentName:"li",href:"https://www.ensembl.org/Homo_sapiens/Info/Index"},"Ensembl"),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.uniprot.org/uniprot/"},"UniProt"),",\n",(0,r.kt)("a",{parentName:"li",href:"https://www.gtexportal.org/home/"},"GTEx"),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.omim.org/"},"OMIM"),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.ncbi.nlm.nih.gov/gene/"},"NCBI"),").")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Transcripts")," is data on gene transcripts in which the variant is located:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Transcript IDs"))," from ",(0,r.kt)("a",{parentName:"li",href:"https://www.ensembl.org/Homo_sapiens/Info/Index"},"Ensembl")," (ENSTxxxxxxxxxxx) and\n",(0,r.kt)("a",{parentName:"li",href:"https://www.ncbi.nlm.nih.gov/nuccore/"},"RefSeq")," (NM_xxxxxx.x). You can open the transcript page by clicking on the ID.\nThe main gene transcript according to ",(0,r.kt)("a",{parentName:"li",href:"https://www.ncbi.nlm.nih.gov/refseq/MANE/#Select"},"MANE Select"),",\n",(0,r.kt)("a",{parentName:"li",href:"https://www.ncbi.nlm.nih.gov/refseq/MANE/#:~:text=MANE%20Plus%20Clinical%3A%20The%20MANE,variants%20available%20in%20public%20resources."},"MANE plus clinical"),"\nor ",(0,r.kt)("a",{parentName:"li",href:"https://www.ensembl.org/info/genome/genebuild/canonical.html"},"Ensembl canonical")," is marked\nwith ",(0,r.kt)("img",{src:n(51194).Z,width:"20"}),". The gene transcript chosen as main\nfor the variant is highlighted by a frame. Impact, HGVSp and HGVSc values for this transcript are shown for the\nvariant in the Variant Viewer table."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"IMPACT"))," is the predicted effect of the variant on the protein (see more information\n",(0,r.kt)("a",{parentName:"li",href:"/results/main/snvs-indels/variant-viewer#variant-impacts"},"here"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"HGVSp"))," is an amino acid substitution using ",(0,r.kt)("a",{parentName:"li",href:"https://varnomen.hgvs.org/"},"the HGVS notation")," (\u201cp.\u201d prefix\n(protein) + reference amino acid + amino acid position in protein + new amino acid resulting from the substitution)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"HGVSc"))," - is a nucleotide substitution using ",(0,r.kt)("a",{parentName:"li",href:"https://varnomen.hgvs.org/"},"the HGVS notation")," (genomic position\nof the substituted nucleotide + reference allele > alternative allele). Starts with a prefix: \u201cc.\u201d (coding; for a\nsubstitution in the coding sequence), \u201cn.\u201d (non-coding; for a substitution in the non-coding sequence).")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"External links")," are links to pages with variant information\nin ",(0,r.kt)("a",{href:"https://www.ncbi.nlm.nih.gov/snp/"},"dbSNP"),", ",(0,r.kt)("a",{href:"https://varsome.com/"},"VarSome"),", ",(0,r.kt)("a",{href:"https://preview.ncbi.nlm.nih.gov/clinvar/"},"ClinVar"),", ",(0,r.kt)("a",{href:"https://cancer.sanger.ac.uk/cosmic/"},"COSMIC")," (if it was ",(0,r.kt)("a",{parentName:"li",href:"/settings/custom-annotations"},"uploaded as a custom annotation"),")."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Samples info"),":")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Name"))," is a name of the sample, the analysis of which discovered the variant."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Genotype"))," is the allelic values for this sample (0 - reference allele, 1 - first alternative allele, 2 - second\nalternative allele etc.), divided by \u201d/\u201d (for unphased genotype) or \u201c|\u201d (for phased genotype)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Read depth"))," is the total number of reads of the sequence overlapping the variant position for this sample."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Ref count"))," is the reference allele reads count for this sample."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Alt count"))," is the alternative allele reads count for this sample."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"AF"))," is the allelic frequency for this sample.")),(0,r.kt)("h3",{id:"clinvar-tab"},"ClinVar: data on the relationships among variants and phenotypes from the ",(0,r.kt)("a",{parentName:"h3",href:"https://www.ncbi.nlm.nih.gov/clinvar/"},"ClinVar")," database"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Haplotype phenotypes")," section is present if the variant is part of a haplotype:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Variant Haplotype ID"))," is a link to the genotype including the given variant."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Phenotype"))," is a phenotype name (with links to various databases)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Clinical Significance"))," is a clinical significance of the phenotype (you can find the description of\nsignificances ",(0,r.kt)("a",{parentName:"li",href:"https://preview.ncbi.nlm.nih.gov/clinvar/docs/clinsig/#clinsig_scv"},"here"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Review status"))," is the level of review supporting the assertion of clinical significance for the\nvariant (you can find the description of review\nstatuses ",(0,r.kt)("a",{parentName:"li",href:"https://preview.ncbi.nlm.nih.gov/clinvar/docs/variation_report/#review_status"},"here"),").")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Phenotypes")," section includes data on the phenotypic significance of the variant:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Clinical significance"))," is a clinical significance of the phenotype (you can find the description of\nsignificances ",(0,r.kt)("a",{parentName:"li",href:"https://preview.ncbi.nlm.nih.gov/clinvar/docs/clinsig/#clinsig_scv"},"here"),").\nThere are both the total clinical significance for the variant (on the left) and the clinical significance\nof each phenotype of the variant (on the right in the table)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"ClinVar ID"))," is link to a variant in the ",(0,r.kt)("a",{parentName:"li",href:"https://www.ncbi.nlm.nih.gov/clinvar/"},"ClinVar")," database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Review status"))," is the level of review supporting the assertion of clinical significance for the variant\n(you can find the description of review\nstatuses ",(0,r.kt)("a",{parentName:"li",href:"https://preview.ncbi.nlm.nih.gov/clinvar/docs/variation_report/#review_status"},"here"),").\nThere are both the total review status for the variant (on the left) and the review status of each phenotype\nof the variant (on the right in the table)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Allele ID"))," is the variant ID in ClinVar."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Allele origin"))," of the variant (Germline or Somatic)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Cross references"))," are links to a variant in various databases."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Phenotype"))," is phenotypic trait or disease associated with a variant (with links to various databases).")),(0,r.kt)("h3",{id:"gnomad-tab"},"GnomAD: data on allele frequencies of the variant from the ",(0,r.kt)("a",{parentName:"h3",href:"https://gnomad.broadinstitute.org/"},"gnomAD")," database"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Allele frequency"))," is total allele frequency in gnomAD."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Coverage"))," is median per-base depth of coverage binned to rages ","<","10, 10-100, \u2a7e100."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Number of Homozygotes"))," is count of homozygous individuals."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Frequencies in different populations"))," (Ashkenazi Jewish, Amish, African/African American, European (Finnish),\nSouth Asian, Latino/Admixed American, European (non-Finnish), East Asian, Middle Eastern, Other).\nThere are the total allele frequency, frequencies in XX, XY subpopulations and the number of homozygotes\nfor each population.")),(0,r.kt)("h3",{id:"exac-tab"},"ExAC: data on allele frequencies from the ",(0,r.kt)("a",{parentName:"h3",href:"http://exac.broadinstitute.org/"},"ExAC")," database"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allele frequencies and count in different populations (African/African American, American, East Asian, Finnish,\nEuropean (non-Finnish), South Asian).\nIn addition, there are allele frequencies in the non-TCGA and non-Psych cohorts.")),(0,r.kt)("h3",{id:"other-frequencies-tab"},"Other frequencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data on allele frequencies of the variant from ",(0,r.kt)("a",{parentName:"li",href:"https://www.internationalgenome.org/"},"the 1000 Genomes Project"),"\nand in combined genotypes in the UK10K cohort from ",(0,r.kt)("a",{parentName:"li",href:"https://www.uk10k.org/"},"the UK10K project"),".")),(0,r.kt)("h3",{id:"conservation-tab"},"Conservation: data on the conservation of the variant"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Ancestral allele"))," predicted by ",(0,r.kt)("a",{parentName:"li",href:"https://www.ensembl.org/info/genome/compara/epo_anchors_info.html"},"EPO"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Genotypes"))," of Altai Neanderthal, Denisova, Vindijia Neandertal."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Conservation scores"))," obtained using prediction by various programs (",(0,r.kt)("a",{parentName:"li",href:"http://compgen.cshl.edu/fitCons/"},"FitCons"),",\n",(0,r.kt)("a",{parentName:"li",href:"http://mendel.stanford.edu/sidowlab/downloads/gerp/index.html"},"GERP++"),",\n",(0,r.kt)("a",{parentName:"li",href:"https://ccg.epfl.ch/mga/hg19/phylop/phylop.html"},"PhyloP"),",\n",(0,r.kt)("a",{parentName:"li",href:"http://compgen.cshl.edu/phast/phastCons-HOWTO.html"},"PhastCons"),",\n",(0,r.kt)("a",{parentName:"li",href:"http://portals.broadinstitute.org/genome_bio/siphy/documentation.html"},"SiPhy"),", BStatistic).")),(0,r.kt)("h3",{id:"protein-function-effect-tab"},"Protein function effect"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prediction results of the effect of amino acid substitution on protein function, obtained using various algorithms\nand programs such as ",(0,r.kt)("a",{parentName:"li",href:"https://sift.bii.a-star.edu.sg/"},"SIFT"),",\n",(0,r.kt)("a",{parentName:"li",href:"http://genetics.bwh.harvard.edu/pph/pph_help.html"},"Polyphen"),", ",(0,r.kt)("a",{parentName:"li",href:"https://sift.bii.a-star.edu.sg/sift4g/"},"SIFT4G"),", LRT,\nMutationAssessor, ",(0,r.kt)("a",{parentName:"li",href:"http://fathmm.biocompute.org.uk/"},"FAtHMM"),", ",(0,r.kt)("a",{parentName:"li",href:"http://provean.jcvi.org/index.php"},"Provean"),",\n",(0,r.kt)("a",{parentName:"li",href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5270233/"},"Meta SVM"),", Meta LR, ",(0,r.kt)("a",{parentName:"li",href:"http://bejerano.stanford.edu/mcap/"},"M-CAP"),",\n",(0,r.kt)("a",{parentName:"li",href:"http://mutpred.mutdb.org/"},"MutPred"),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.nature.com/articles/s41467-020-20847-0"},"MVP"),",\n",(0,r.kt)("a",{parentName:"li",href:"https://illumina.github.io/NirvanaDocumentation/3.14/data-sources/primate-ai/"},"Primate AI"),", MPC, DEOGEN2,\n",(0,r.kt)("a",{parentName:"li",href:"https://cbcl.ics.uci.edu/public_data/DANN/"},"DANN"),", Eigen.")),(0,r.kt)("h3",{id:"other-tab"},"Other: additional information about the variant"),(0,r.kt)("h3",{id:"custom-annotation-sources-tab"},"Custom annotation sources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Custom annotation column values corresponding to the found variant. You can add custom annotations on the\n"',(0,r.kt)("strong",{parentName:"li"},"Custom annotations"),'" page (you can read more about this in ',(0,r.kt)("a",{parentName:"li",href:"/settings/custom-annotations"},"the corresponding section"),").")))}m.isMDXComponent=!0},73365:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAARCAYAAABASYU2AAAA+UlEQVRIDeWUvQ3CQAxGMwQ1PS0lNT0lJRNQ0bEBDRUjISHWAPY49IqLLo4d7reIsBQlciJ/z5/P6dwMopsBo/tPyNf7446ns7tcb9WGVNVJwBbLVX/t9gcHdGlUgQRkvdn2cCEo+VJXiyCBk+4BSE5CcwRyIxvy/niOnAvHqzWQ62oyJOLAxI6UZqSrqeNPgtRGGzNGy1UaiIkoSMu9WBEPIpuMHf9PSFnYL4YXTr1brpK3woTUFoPOp4pZIlpeNj/l6gjSGi1Fa4elJY0YQPIy3Fqe2eSWgabmanjeB5DA+N8L9ocftgSlNrBoasaMIH1nraG0+pb2F3Unu19fQerdAAAAAElFTkSuQmCC"},9152:function(e,t,n){t.Z=n.p+"assets/images/details_panel-75e385f3a60b93abbe418c096e4afb98.png"},55236:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAASCAYAAAAg9DzcAAABLUlEQVRIDdWVsQ3CMBBFMwQ1PS0lNT0lJRNQ0bEBDRU7IFEwBRJiDWAPoxfpR050sZ3ggHISuojg/1++z6FwI6tiZLxu3MDP19sdjqe/hY43DKGqJbxab9xkOnPzxfKn4EDKmx6qCvh2f5SwAOuz3e2jTxwST7lHqvJTD6VcASOukdBC+lBp+6nKD68QLIw1YCVyvlxLUAkJPCam9bFupZp6dkxgDIdIuy1VxjG1WoElgAlb1Uy7iwla7JqvwXVqqmKhR4H5kZW2DLkXqhyp+vpJwFqAOW8OP6nQobTePH1SlT+9E7AWphzK5sHiwbqOkfz83gsYAWtMgGIHmjMf+zPwgWLXvYElDHgTUCOTK1V50b8GRsRKO2eq2YElCDig3x4s6Vk9S8KW8FDffQB0pjRcbUu4nQAAAABJRU5ErkJggg=="},96618:function(e,t){t.Z="data:image/png;base64,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"},51194:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABdCAYAAADHcWrDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAQDSURBVHhe7ZrBjRQxEEXJiDiIgziQCIEbV0KACAiAAyFw4ohWQgghJNTshynJ9lS7v+2ye9uuL73b2O1501Plcc+zzTM8Lv2EUNK/PvzZPn35vb39+HN7+e779vz1N+fGizcP26v3P/65gSMmh9IxkXYxRwcfAj6AXHal4+7GYG1i55ic+F3p+MS0yRweONSiSve6bQfqfZo76V7D7fnw+dfN7v/cSdcGOW2kZSaSjk9EG+S0E24nI+m+W+lHuJuJpKPoawOcdrA5kUTSfZvYj7CuR9K1Fzt2SFz6QCQufSASE+moV2jCJWjznIG2thwtfU9iIh2LKQ3GaHONZPS6JadJfwrHDez5d5hLS0fOPFgL980lubz0M48d0kMoNpeXjgcl2nwjwLVrcnnpyBklpmW9U0g/o6HWNFDJFNKR0Xd7S6aRPrKh1jZQyTTSRzbU2gYqmUY6MqLEWKxzKukjGmpraUGmko6vfe+HKBaZSjrS8xmt1Rqnk96zobY2UMl00pEeDdVyfVNK79FQLRqoZErpPUqMZS4nHa9jzj1a3lhKydqYtKxNMlx67n/bEsu7nWmgKD9TSw//dJOLRUPFHEzkwTqTS0rH65kSY3EIxjRQuc700pk70KLEMJE1TS+dLTEtb5BdU+nrW9YkOUU6YL76LXv20hK2hPSeDbVm7iWkg14NteZbtIx0ZlxNQ2X25jVrQdJxJUhOld6jxLBrwbVrxl1eOmBKTElDrS1ZS0lnfzWydzsTba6lpAPm7mSeKjHnOog2djnpVodg7OGWNnY56RYNlV1D2kBLx08jHbQ2VGZvntvzLymdaai5EsMkd/0lpbMlRmuo7PXTcSFLSgdMidDu9pYGKiwrvaahstc+2ucvKx2U/qJkvh25BiwsLZ2ZKywxTKyuizBz7SF5ctLZEoO52Ovu7c1DLN/DHpInJx0wJYZpnshRAxWWl87s2dkcNVBheemAuduZaHNruPRH2BPDXJiTScGlP8I21FyYBiq49BstJYZtoIJLv9HSUEuv5dJvtJQYbb4cLj2A+ZmfprS0AJceUHO3s3vzEJeeUNJQmcMtDZeewM6P9L5G7fxAcgnpJSWmZG8e4tIVmBJT00AFl67A7NlrGqjg0nc4utu1MSyXk446isUcUVtvBYzfQ3t9CZhDW3NKy7UkJtIdDolLH4jEpQ9EEkm3qI3OPpJIesuWy8mDJiyJpJc83nLKCB8/RtJrD4ucY8Ij6kg6/kvidb0PYSLpSMv5haOT/pK+k46g6GuDnXLCBipRpXuZsQEOtajSEYj33Uw92h0u2ZUuQY33u54Hro5OQw+lI7jrMRE+gNaTttmAC/yoRFU4ki2hpHts49JPiEsfnm37CzH4jI5dvUxJAAAAAElFTkSuQmCC"}}]);