---
sidebar_position: 3
sidebar_label: Uploading samples for new patient
---

# Uploading samples for new patient

After creating a new patient (as described [here](/add_patient)), you will be on his page.
Select the needed workflow setting (as described [here](/uploading-samples/tumor-only/to_preset)).

Upload tumor sample(s) into the "TUMOR TISSUE" window:

<p align="center">
<img src={require('/img/eng/up_TO.png').default} width="700"/>
</p>

Upload the sample files in a way convenient for you. You can upload several tumor samples of one patient at once, for example, if you have technical replicates. An additional window will appear immediately after uploading the first pair of files (or one file in the case of single-read sequencing).

<p align="center">
<img src={require('/img/eng/upload_tumor_only.png').default} height="250"/>
</p>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip The sample files can be uploaded:

<Tabs
  defaultValue="pc"
  values={[
    {label: 'From computer', value: 'pc'},
    {label: 'From FTP, HTTP or Yandex Disk servers', value: 'url'},
    {label: 'From the NCBI SRA database', value: 'sra'}]}>
  <TabItem value="pc"><p align="center">To upload, drag and drop files or folder containing files into the drop-area or click on it to open the File Browser:<br />
  	<img src={require('/img/eng/9-drag-drop-box.png').default} width="300"/></p>
  </TabItem>
  <TabItem value="url"><p align="center">To upload, paste the link to the file or folder containing files on the server into the placeholder:<br />
  	<img src={require('/img/eng/10-12-url-box.png').default} width="250"/><br />
  and click on the button:<br />
  	<img src={require('/img/eng/11-13-url_active.png').default} width="250"/></p>
  </TabItem>
  <TabItem value="sra"><p align="center">To upload, paste the sample ID (SRRXXXXX) from the database into the placeholder:<br />
  	<img src={require('/img/eng/10-12-url-box.png').default} width="250"/><br />
  and click on the button:<br />
  	<img src={require('/img/eng/11-13-url_active.png').default} width="250"/></p>
  </TabItem></Tabs>
:::

#### Recognizing paired files

- If your sequencing is paired-end and a pair of FASTQ files of the same sample is named in an [Illumina convention](https://support.illumina.com/help/BaseSpace_OLH_009008/Content/Source/Informatics/BS/NamingConvention_FASTQ-files-swBS.htm) (or even by some other common read naming scheme), the files will be automatically recognized as a pair when added:

<p align="center">
<img src={require('/img/eng/4-14-pair.png').default} width="300"/>
</p>

- If the pair is not recognized correctly, you can manually unlink files by clicking on the corresponding button highlighted below:

<p align="center">
<img src={require('/img/eng/5-15-unpair.png').default} width="300"/>
</p>

- If the automatic pair recognition didn’t succeed, you can manually pair the files by clicking and dragging the same element:

<p align="center">
<img src={require('/img/eng/6-16-force-pair.png').default} width="300"/>
</p>

### Filling out the patient card

After adding samples, you can fill out the patient card. We recommend filling out the card right away and documenting the added samples thoroughly - this will make it easier for you to interpret and navigate later.

<p align="center">
<img src={require('/img/eng/3c-patient-page.png').default} width="850"/>
</p>

You can add the details later on this patient's personal page.

### Sequencing type

The sequencing type is usually detected automatically by Genomenal.
However, if you are sure which sequencing type was used to obtain your data, select the appropriate type to speed up the analysis. This can be whole genome sequencing (WGS) or targeted sequencing (exome or panel).
Please note that by selecting the sequencing type, you define it for all samples from the set at once.

### Run analysis

Click on "**Submit Samples**" to start the sample analysis.

<p align="center">
<img src={require('/img/eng/TO_upload.png').default} width="700"/>
</p>

:::danger Attention!
If you upload sample files from a computer, and not by a link, then do not close the tab where files are being uploaded until it is completed. Otherwise, the uploading will be interrupted. After the uploading stage, you can close the tab, the browser and turn off the computer - further analysis does not depend on your device.
:::
