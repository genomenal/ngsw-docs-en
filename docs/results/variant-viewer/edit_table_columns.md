---
sidebar_position: 5
sidebar_label: Edit table columns
---

# Edit table columns

You can add additional columns or remove unnecessary ones, and also change the order of columns in the Variant Viewer 
table. This section describes how to do this.
You can read about the default set of columns [here](/results/variant-viewer/variant-viewer#основная-страница).

### Edit columns

From the main Variant Viewer page, click on the settings button:

<p align="center">
<img src={require('/img/vv/edit_columns_btn.png').default} width="900"/>
</p>

In the opened window, on the right, a set of the selected columns is shown in the order in which they are located in 
the table:

<p align="center">
<img src={require('/img/vv/default_order.png').default} height="500"/>
</p>

### Adding columns

In order to find the column you want, start typing its name into the search box or 
expand the corresponding group of columns by clicking on the arrow (the groups correspond 
to [the detailed information panel tabs](/results/variant-viewer/snv_details_panel#detailed-information-panel-tabs)):

<p align="center">
<img src={require('/img/vv/Find_column.png').default} height="400"/>
</p>

For instance, let's expand the "Common" group. Selected columns are highlighted in blue and have a check mark.
You can see that the "End" column with the variant end position is not selected and is not displayed in the 
Variant Viewer table.

<p align="center">
<img src={require('/img/vv/common_group.png').default} height="400"/>
</p>

To ***add a column***, check the box.
Note that when you add a new column, it will appear at the end of the column list.
If you want to change its location in the table, 
use [the corresponding section](/results/variant-viewer/edit_table_columns#changing-the-order-of-columns).

<p align="center">
<img src={require('/img/vv/chosen_column.png').default} width="700"/>
</p>

In the same way, you can add as many columns as you need.

### Removing columns

If you want Variant Viewer to display no unnecessary columns, either uncheck them in the group list (on the left), 
or click on the cross next to the column (on the right):

<p align="center">
<img src={require('/img/vv/delete_column.png').default} width="700"/>
</p>

### Changing the order of columns

To change the column position in the table, click on the row of the column

<p align="center">
<img src={require('/img/vv/change_order.png').default} width="400"/>
</p>

and change its order using the arrows. If you want to put the column closer to the beginning, 
click on <img src={require('/img/vv/up.png').default} width="40"/>, and if closer to the end, 
click on <img src={require('/img/vv/down.png').default} width="40"/>.

### Applying

If you have finished making changes, click on <img src={require('/img/vv/apply.png').default} width="150"/>.

### Return to default columns

To return to the default column set and order, click 
on <img src={require('/img/vv/default_btn.png').default} width="150"/> and then
on <img src={require('/img/vv/apply.png').default} width="150"/>.
