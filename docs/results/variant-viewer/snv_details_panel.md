---
sidebar_position: 2
sidebar_label: Variant detailed information panel
---

# Variant detailed information panel

Click on the variant row to see a variant detailed information panel at the bottom of the table:

<p align="center">
<img src={require('/img/vv/details_panel.png').default} width="900"/>
</p>

The panel can be resized by hovering over the top border of the panel and dragging down or up.
You can also collapse or expand the panel by clicking on the corresponding arrows <img src={require('/img/vv/collapse.png').default} width="30"/> or <img src={require('/img/vv/expand.png').default} width="30"/>.

<details>
<summary>Click to see panel tabs</summary>

## Detailed information panel tabs

### Common: the basic information about the variant

1. **Gene** is data about the gene in which the variant is located:
- ***Official full name***. When hovering over the gene name, you can see where it was taken from:

<p align="center">
<img src={require('/img/vv/gene_source.png').default} width="300"/>
</p>

- ***Links*** to pages with information about the gene in various databases ([Ensembl](https://www.ensembl.org/Homo_sapiens/Info/Index), [UniProt](https://www.uniprot.org/uniprot/), [GTEx](https://www.gtexportal.org/home/), [OMIM](https://www.omim.org/), [NCBI](https://www.ncbi.nlm.nih.gov/gene/)).
2. **Transcripts** is data on gene transcripts in which the variant is located:
- ***Transcript ID*** from the [Ensembl](https://www.ensembl.org/Homo_sapiens/Info/Index) database. You can open the transcript page by clicking on the ID. The main transcript of the gene is highlighted by a frame.
- ***IMPACT*** is the predicted effect of the variant on the protein (see [a table with impacts of variants in the annotation](/results/variant-viewer/variant-viewer#описание-колонок-таблицы)).
- ***HGVSp*** is an amino acid substitution using [the HGVS notation](https://varnomen.hgvs.org/) (“p.” prefix (protein) + reference amino acid + amino acid position in protein + new amino acid resulting from the substitution).
- ***HGVSc*** - is a nucleotide substitution using [the HGVS notation](https://varnomen.hgvs.org/) (genomic position of the substituted nucleotide + reference allele > alternative allele). Starts with a prefix: “c.” (coding; for a substitution in the coding sequence), “n.” (non-coding; for a substitution in the non-coding sequence).
3. **Samples info**:
- ***Name*** is a name of the sample, the analysis of which discovered the variant.
- ***Genotype*** is allelic values for this sample (0 - reference allele, 1 - first alternative allele, 2 - second alternative allele etc.), divided by ”/” (for unphased genotype) or “|” (for phased genotype).
- ***Read depth*** is the total number of reads of the sequence overlapping the variant position for this sample.
- ***Ref count*** is the reference allele reads count for this sample.
- ***Alt count*** is the alternative allele reads count for this sample.
- ***AF*** - allelic frequency for this sample.

### ClinVar: data on the relationships among variants and phenotypes from the [ClinVar](https://www.ncbi.nlm.nih.gov/clinvar/) database

1. **Haplotype phenotypes** section is present if the variant is part of a haplotype:
* ***Variant Haplotype ID*** is a link to the genotype including the given variant.
* ***Phenotype*** is a phenotype name (with links to various databases).
* ***Clinical Significance*** is a clinical significance of the phenotype (you can find the description of significances [here](https://preview.ncbi.nlm.nih.gov/clinvar/docs/clinsig/#clinsig_scv)).
* ***Review status*** is the level of review supporting the assertion of clinical significance for the variant (you can find the description of review statuses [here](https://preview.ncbi.nlm.nih.gov/clinvar/docs/variation_report/#review_status)).
2. **Phenotypes** section includes data on the phenotypic significance of the variant:
* ***Clinical significance*** is a clinical significance of the phenotype (you can find the description of significances [here](https://preview.ncbi.nlm.nih.gov/clinvar/docs/clinsig/#clinsig_scv)).
There are both the total clinical significance for the variant (on the left) and the clinical significance of each phenotype of the variant (on the right in the table).
* ***ClinVar ID*** is link to a variant in the [ClinVar](https://www.ncbi.nlm.nih.gov/clinvar/) database.
* ***Review status*** is the level of review supporting the assertion of clinical significance for the variant (you can find the description of review statuses [here](https://preview.ncbi.nlm.nih.gov/clinvar/docs/variation_report/#review_status)).
There are both the total review status for the variant (on the left) and the review status of each phenotype of the variant (on the right in the table).
* ***Allele ID*** is the variant ID in ClinVar.
* ***Allele origin*** of the variant (Germline or Somatic).
* ***Cross references*** are links to a variant in various databases.
* ***Phenotype*** is phenotypic trait or disease associated with a variant (with links to various databases).

### GnomAD: data on allele frequencies of the variant from the [gnomAD](https://gnomad.broadinstitute.org/) database:

* ***Allele frequency*** is total allele frequency in gnomAD.
* ***Coverage*** is median per-base depth of coverage binned to rages &lt;10, 10-100, ⩾100.
* ***Number of Homozygotes*** is count of homozygous individuals.
* ***Frequencies in different populations*** (Ashkenazi Jewish, Amish, African/African American, European (Finnish), South Asian, Latino/Admixed American, European (non-Finnish), East Asian, Middle Eastern, Other).
There are the total allele frequency, frequencies in XX, XY subpopulations and the number of homozygotes for each population.

### ExAC: data on allele frequencies from the [ExAC](http://exac.broadinstitute.org/) database

- Allele frequencies and count in different populations (African/African American, American, East Asian, Finnish, European (non-Finnish), South Asian).
In addition, there are allele frequencies in the non-TCGA and non-Psych cohorts.

### Other frequencies

- Data on allele frequencies of the variant from [the 1000 Genomes Project](https://www.internationalgenome.org/) and in combined genotypes in the UK10K cohort from [the UK10K project](https://www.uk10k.org/).

### Conservation: data on the conservation of the variant

* ***Ancestral allele*** predicted by [EPO](https://www.ensembl.org/info/genome/compara/epo_anchors_info.html).
* ***Genotypes*** of Altai Neanderthal, Denisova, Vindijia Neandertal.
* ***Conservation scores*** obtained using prediction by various programs ([FitCons](http://compgen.cshl.edu/fitCons/), [GERP++](http://mendel.stanford.edu/sidowlab/downloads/gerp/index.html), [PhyloP](https://ccg.epfl.ch/mga/hg19/phylop/phylop.html), [PhastCons](http://compgen.cshl.edu/phast/phastCons-HOWTO.html), [SiPhy](http://portals.broadinstitute.org/genome_bio/siphy/documentation.html), BStatistic).

### Protein function effect

- Prediction results of the effect of amino acid substitution on protein function obtained using various algorithms and programs such as [SIFT](https://sift.bii.a-star.edu.sg/), [Polyphen](http://genetics.bwh.harvard.edu/pph/pph_help.html), [SIFT4G](https://sift.bii.a-star.edu.sg/sift4g/), LRT, MutationAssessor, [FAtHMM](http://fathmm.biocompute.org.uk/), [Provean](http://provean.jcvi.org/index.php), [Meta SVM](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5270233/), Meta LR, [M-CAP](http://bejerano.stanford.edu/mcap/), [MutPred](http://mutpred.mutdb.org/), [MVP](https://www.nature.com/articles/s41467-020-20847-0), [Primate AI](https://illumina.github.io/NirvanaDocumentation/3.14/data-sources/primate-ai/), MPC, DEOGEN2, DANN, Eigen.

### Other: additional information about the variant

### Custom annotation sources

- Custom annotation column values corresponding to the found variant. You can add custom annotations in the **Settings** -> **Custom annotations** section.

</details>