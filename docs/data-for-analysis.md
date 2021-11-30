---
sidebar_position: 4
sidebar_label: Samples for analysis
---

# Samples for analysis

Genomenal supports FASTQ, BAM, VCF, TXT, TSV file formats:
1. **FASTQ** file(s) with reads obtained by sequencing. In this case, a sample is either ***a single file*** (in the case of single-read sequencing), or ***a pair of files*** (in the case of paired-end sequencing).
3. **VCF** file with variant annotation.
4. **BAM** file with aligned sequences.
5. Tab-delimited files with genotype data (**TXT**, **TSV** formats representing 23andMe or alike genotype data).

:::info
Genomenal can recognize compressed files (GZIP, ZIP, BZIP2, 7-ZIP, XZ, WIM, RAR).
:::

:::tip
If you have a pair of **tumor/normal** samples, use FASTQ or BAM files.
:::

:::tip
If the purpose of your analysis is **copy number variations** (CNV) discovery, use FASTQ or BAM files.
:::
