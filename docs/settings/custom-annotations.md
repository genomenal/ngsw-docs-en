---
sidebar_position: 8
sidebar_label: Custom annotations
---

# Custom annotations

If you want to annotate the discovered variants using additional data, 
upload a custom annotation containing this data.

### Start

Open **Settings** -> **Custom annotations** page and click on "**Import from file**":

<p align="center">
<img src={require('/img/custom-annot/main_page.png').default} width="950"/>
</p>

You can specify annotation name and type a description by clicking on "**-**" 
(by default, the annotation name will be the file name):

<p align="center">
<img src={require('/img/custom-annot/name.png').default} height="170"/>
</p>

### Upload file

Upload the annotation file in **VCF**, **CSV** or **TSV** format.
To do this, drop the file into the window or click on it to open File Browser:

<p align="center">
<img src={require('/img/custom-annot/uploading_window.png').default} width="500"/>
</p>

Specify annotation source reference genome (hg19 or hg38) for correct variant identification:

<p align="center">
<img src={require('/img/custom-annot/genome.png').default} width="300"/>
</p>

Immediately after uploading, you will see a preview of the first 7 lines of the annotation.

### Map columns

If you have uploaded an annotation file ***in VCF format***, the columns required to identify a variant 
(CHROM, POS, REF, ALT) will be determined ***automatically***.

If you have uploaded an annotation file ***in CSV or TSV format***, you need to ***define the columns***
required to identify a variant:

<p align="center">
<img src={require('/img/custom-annot/main_columns.png').default} width="950"/>
</p>

- CHROMOSOME is a column with the names of the chromosomes in which the variants are located.
- POSITION (1-BASED) is a column with start positions of variants.
- REFERENCE is a column with reference alleles of variants.
- ALTERNATIVE is a column with alternative alleles of variants.

To do this, select the appropriate column from the annotation you uploaded for each required column.
For example, in this case, the "CHROMOSOME" column corresponds to the "chr" column from the annotation:

<p align="center">
<img src={require('/img/custom-annot/chromosome_column.png').default} width="300"/>
</p>

### Adding an annotation column

In the uploaded annotation, select the columns containing the data which you want to annotate the variants with.

Click on <img src={require('/img/custom-annot/add_new_column.png').default} width="250"/>.
Enter the column name in the opened window:

<p align="center">
<img src={require('/img/custom-annot/column_name.png').default} height="400"/>
</p>

Then specify the selected column in the file.
For instance, we have data with the frequencies of variants in the exome,
and we want to annotate the variants discovered by Genomenal using this information. 
To do this, let's select the appropriate column in the file:

<p align="center">
<img src={require('/img/custom-annot/file_column.png').default} width="350"/>
</p>

Finally, define the field type: text or numeric:

<p align="center">
<img src={require('/img/custom-annot/filed_type.png').default} width="350"/>
</p>

and click on "**ОК**".
An annotation column will be added:

<p align="center">
<img src={require('/img/custom-annot/added_column.png').default} width="340"/>
</p>

A column can be ***edited*** by hovering over it and clicking on the highlighted button:

<p align="center">
<img src={require('/img/custom-annot/edit_column.png').default} width="330"/>
</p>

A column can be ***removed*** by hovering over it and clicking on the cross:

<p align="center">
<img src={require('/img/custom-annot/delete_column.png').default} width="330"/>
</p>

Multiple annotation columns can be added. To add another column, click 
on <img src={require('/img/custom-annot/add_new_column.png').default} width="250"/> again.

### Perform source preparation

To preform the annotation preparation, click on <img src={require('/img/custom-annot/start.png').default} width="200"/>.

:::info
If you skipped one of the required steps of creating an annotation (uploading file, 
selecting source reference genome, filling in the required fields to identify a variant, 
or adding at least one annotation column), then the "**Perform source preparation**" button 
will be inactive. Variants will not be annotated with such file that has not been processed.
:::

While source preparation is in progress, the status will be "**IN_PROGRESS**":

<p align="center">
<img src={require('/img/custom-annot/annotation_in_progress.png').default} width="950"/>
</p>

A successfully prepared annotation will have the status "**SUCCESS**":

<p align="center">
<img src={require('/img/custom-annot/success_status.png').default} width="900"/>
</p>

or "**PROBLEMS**" if non-critical problems occurred during processing 
(more details about the problems can be found below in the "Warnings" section):

<p align="center">
<img src={require('/img/custom-annot/problems_status.png').default} width="900"/>
</p>

Processing of an annotation prepared incorrectly will fail with the "**FAILED**" status
(more details about the error can be found below in the "Errors" section):

<p align="center">
<img src={require('/img/custom-annot/failed_status.png').default} width="900"/>
</p>

In such a situation, correct one of the annotation preparation steps 
(select the correct reference genome, specify the correct annotation column type) 
or upload another annotation file.

To return to the list of all custom annotations, 
click on <img src={require('/img/custom-annot/back_btn.png').default} width="230"/>.

The values of the columns selected for the annotation of variants will be located 
[on the Variant Viewer page](/results/variant-viewer/snv_details_panel#custom-annotation-sources)
and in the file with variants, which can be downloaded from the main page of the sample.
