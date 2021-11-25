---
sidebar_position: 4
sidebar_label: Samples for analysis
---

# Samples for analysis

Select a sample or samples for analysis.

Genomenal supports FASTQ, BAM, VCF, TXT, TSV file formats:
1. **FASTQ** file(s) with reads obtained by sequencing. In this case, a sample is either ***a single file*** (in the case of single-read sequencing), or ***a pair of files*** (in the case of paired-end sequencing).
3. **VCF** file with variant annotation.
4. **BAM** file with aligned sequences.
5. Tab-delimited files with genotype data (**TXT**, **TSV** formats).

:::info
Genomenal can recognize compressed files (GZ, ZIP, BZ2, SEVEN_ZIP, XZ, WIM, RAR).
:::

:::tip
If you have a pair of **tumor/normal** samples, use FASTQ and BAM files.
:::

:::tip
If the purpose of your analysis is **copy number variations** (CNV) discovery, use FASTQ and BAM files.
:::
