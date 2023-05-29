"use strict";(self.webpackChunkngsw_docs_cnv_en=self.webpackChunkngsw_docs_cnv_en||[]).push([[9817],{3905:function(A,e,n){n.d(e,{Zo:function(){return c},kt:function(){return Q}});var t=n(67294);function a(A,e,n){return e in A?Object.defineProperty(A,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):A[e]=n,A}function i(A,e){var n=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),n.push.apply(n,t)}return n}function r(A){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(A,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(n,e))}))}return A}function o(A,e){if(null==A)return{};var n,t,a=function(A,e){if(null==A)return{};var n,t,a={},i=Object.keys(A);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(a[n]=A[n]);return a}(A,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(A,n)&&(a[n]=A[n])}return a}var s=t.createContext({}),l=function(A){var e=t.useContext(s),n=e;return A&&(n="function"==typeof A?A(e):r(r({},e),A)),n},c=function(A){var e=l(A.components);return t.createElement(s.Provider,{value:e},A.children)},u={inlineCode:"code",wrapper:function(A){var e=A.children;return t.createElement(t.Fragment,{},e)}},g=t.forwardRef((function(A,e){var n=A.components,a=A.mdxType,i=A.originalType,s=A.parentName,c=o(A,["components","mdxType","originalType","parentName"]),g=l(n),Q=a,d=g["".concat(s,".").concat(Q)]||g[Q]||u[Q]||i;return n?t.createElement(d,r(r({ref:e},c),{},{components:n})):t.createElement(d,r({ref:e},c))}));function Q(A,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var i=n.length,r=new Array(i);r[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=A,o.mdxType="string"==typeof A?A:a,r[1]=o;for(var l=2;l<i;l++)r[l]=n[l];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},63468:function(A,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return g}});var t=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],o={sidebar_position:6,sidebar_label:"Edit Table Columns"},s="Edit Table Columns",l={unversionedId:"results/main/snvs-indels/edit-table-columns",id:"results/main/snvs-indels/edit-table-columns",isDocsHomePage:!1,title:"Edit Table Columns",description:"You can add additional columns or remove unnecessary ones, and also change the order of columns in the Variant Viewer",source:"@site/docs/results/main/snvs-indels/edit-table-columns.mdx",sourceDirName:"results/main/snvs-indels",slug:"/results/main/snvs-indels/edit-table-columns",permalink:"/ngsw-docs-en/results/main/snvs-indels/edit-table-columns",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Edit Table Columns"},sidebar:"tutorialSidebar",previous:{title:"Advanced Filtering of Variants",permalink:"/ngsw-docs-en/results/main/snvs-indels/advanced-filtering"},next:{title:"Structural Variations",permalink:"/ngsw-docs-en/results/main/structural-variations"}},c=[{value:"Editing columns",id:"edit-columns",children:[]},{value:"Adding columns",id:"add-columns",children:[]},{value:"Removing columns",id:"remove-columns",children:[]},{value:"Changing the order of columns",id:"change-columns-order",children:[]},{value:"Applying",id:"apply",children:[]},{value:"Return to default columns",id:"return-to-default",children:[]}],u={toc:c};function g(A){var e=A.components,o=(0,a.Z)(A,r);return(0,i.kt)("wrapper",(0,t.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"edit-table-columns"},"Edit Table Columns"),(0,i.kt)("p",null,"You can add additional columns or remove unnecessary ones, and also change the order of columns in the Variant Viewer\ntable. This section describes how to do this.\nYou can read about the default set of\ncolumns ",(0,i.kt)("a",{parentName:"p",href:"/results/main/snvs-indels/variant-viewer#columns-description"},"here"),"."),(0,i.kt)("h3",{id:"edit-columns"},"Editing columns"),(0,i.kt)("p",null,"From the main Variant Viewer page, click on ",(0,i.kt)("img",{src:n(32112).Z,width:"40"}),"\nin the upper right corner. In the opened window, on the right, a set of the selected columns is shown in the order\nin which they are located in the table:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:n(57657).Z,height:"500"})),(0,i.kt)("h3",{id:"add-columns"},"Adding columns"),(0,i.kt)("p",null,"In order to find the column you want, start typing its name into the search box or\nexpand the corresponding group of columns by clicking on the arrow (the groups correspond\nto ",(0,i.kt)("a",{parentName:"p",href:"/results/main/snvs-indels/snv-details-panel#panel-tabs"},"the detailed information panel tabs"),"):"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:n(38100).Z,height:"500"})),(0,i.kt)("p",null,'For instance, let\'s expand the "Common" group. Selected columns are highlighted in blue and have a check mark.\nYou can see that the "End" column with the variant end position is not selected and is not displayed in the\nVariant Viewer table.'),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:n(14614).Z,height:"400"})),(0,i.kt)("p",null,"To ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"add a column")),", check the box.\nNote that when you add a new column, it will appear at the end of the column list.\nIf you want to change its location in the table,\nuse ",(0,i.kt)("a",{parentName:"p",href:"/results/main/snvs-indels/edit-table-columns#change-columns-order"},"the corresponding section"),"."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:n(79265).Z,width:"700"})),(0,i.kt)("p",null,"In the same way, you can add as many columns as you need."),(0,i.kt)("h3",{id:"remove-columns"},"Removing columns"),(0,i.kt)("p",null,"If you want no unnecessary columns to be displayed in Variant Viewer, either uncheck them in the group list\n(on the left), or click on ",(0,i.kt)("img",{src:n(30649).Z,width:"20"})," in\nthe column row (on the right):"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:n(34267).Z,width:"800"})),(0,i.kt)("h3",{id:"change-columns-order"},"Changing the order of columns"),(0,i.kt)("p",null,"To change the column position in the table, click on the column row:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:n(95178).Z,width:"400"})),(0,i.kt)("p",null,"and change its order using the arrows. To put the column closer to the beginning of the table,\nclick on ",(0,i.kt)("img",{src:n(67428).Z,width:"40"}),", and to put the column closer to the end, click on ",(0,i.kt)("img",{src:n(5623).Z,width:"40"}),"."),(0,i.kt)("h3",{id:"apply"},"Applying"),(0,i.kt)("p",null,"If you have finished making changes, click on ",(0,i.kt)("img",{src:n(92162).Z,width:"150"}),"."),(0,i.kt)("h3",{id:"return-to-default"},"Return to default columns"),(0,i.kt)("p",null,"To return to the default column set and order, click\non ",(0,i.kt)("img",{src:n(55110).Z,width:"150"})," and then on ",(0,i.kt)("img",{src:n(92162).Z,width:"150"}),"."))}g.isMDXComponent=!0},38100:function(A,e,n){e.Z=n.p+"assets/images/Find_column-47bb340e3196b5555ab34baca2461984.png"},92162:function(A,e){e.Z="data:image/png;base64,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"},95178:function(A,e){e.Z="data:image/png;base64,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"},79265:function(A,e,n){e.Z=n.p+"assets/images/chosen_column-ea9d0c5dab09afa3899e037a305f3fee.png"},14614:function(A,e,n){e.Z=n.p+"assets/images/common_group-43b82b1deab7e197c118da2e357d2016.png"},55110:function(A,e){e.Z="data:image/png;base64,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"},57657:function(A,e,n){e.Z=n.p+"assets/images/default_order-64920126a99eb904907ae6c3e978d9ea.png"},34267:function(A,e,n){e.Z=n.p+"assets/images/delete_column-b473fd2cd3b2391f6438504cb6b611a9.png"},5623:function(A,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA3CAYAAABdJVn2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAALwSURBVGhD7Zq7jtNAFIb3IajpaSmp6SkpeQIqOt6AhmrfAYmCp0BCvAXKzfEtcZz7ddhvyInG41x2YWN7lvmls4oSx/m+Ocf2SvaNekB2u12j6iG5KGrueLvdNqpMtks5KWrLjfKpCqOhandj9asV1lowwAKTLX0qR0VNyVE+Oex4Mp2r9Xqz36q+wACLLDyMl2RLoiK42WxUnGSqF6RqvljtP21eYIMRVphF2E5B1JZkxVwJrOdkD6J8QLFhlo1V926VXAvMsOMgPpKCKCuxWq303Dd5XE8FZthxsLuqRUVyvV6rYZY7NbJ2YMcBF1O2IMpKBGGqz2iuBnYc7K4eRJnrxWKhW9+ES8jfBnYccJFjldxIN2n1fD7XF2TXgwMu5vgeRGn1bDZ7MqK4mONbEJ1Op09GFBcv6kUdixf1oo7Gi3pRR1O56KfPt7ou5b7b3TeVin7/8VM9e/5C18tXr/fvlvPm7bvDdq12Z//uv6Xyjr7/8PGsrCnJ68dK5aJ0iJE0ZXmPupYkqVyUHJO9piSpRZTYsteUJLWJSkxZjt9rpXZR8uXrt0e9lBxLI0SriBf1oo7Gi3pRR+NFvaij8aL/pWirEzl/IxiHi6K9IHH+1j4OZ0W5eRrHA9UPB/uvuRfYcTh5I1hu7ed5rlvv6uM3sONQurXPBryQhzUmk4kKo1R1eon+skuBGXYcSg9r8Ee6KuM7Go1UN4hV4NAIwwoz7PbYktIDVdLV4XCour1Ir1KTxxg2GGGFWbppji3RosTsKvM9Ho/1F/v9WM89K8YZrQmXHhj+PDg10Gwwwgoz7HY3SUGUYq6Xy6Vuv8imaaqCfqTa3VC12pG+INdZMMACE2wiCTPscmweFSV8wEqILKvDKDD3Ipwkyd3pOy5UFEVXLfv3YBBB2GCEVSTtbpKCKDFlGQHmnZViZ5y22XGWZbr4oSpLfhcGWGCCDUZYT0mSkihhQxHmoBZhVo0d819HnQUDLCJonniOSSql1G9Ur9pqSOfUCAAAAABJRU5ErkJggg=="},32112:function(A,e){e.Z="data:image/png;base64,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"},30649:function(A,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAoCAYAAABnyQNuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAHrSURBVFhH7dNPSsNAFMfxnMZz6CHUhXgBdS3uxBtYEe/QPx7B1pXgVvAA/qFtalFr2kjStOP8qgMhvs68mSRgpA++Gzvz8kESL4oiUZVW2LLy4jgWVala2Ol0KqrS/8QGV03y73my3WnEhnc3oru5tsjfWxfv9VPynE1Apndy0V6SJELX8HhHdLfk4lQjCabOchq3JTSzD2DqbDYjNrtY5QKmoCrqfDYj9vX8kFyObMA6KJ5B3clmxEa9B+Hvb5APQRywDord1B0qIxZF/UcxkEt7cjnVqF4j7yFAqTsIO6k7y/Jms5ngFCvwtnwQ0Uej9uvOpN0izyLsyp43xcai2P8G9+XDqNLgSadFnkEuUGSFRRxwGVDkzedzYdvUfxIvGvCycIfax80JixbgAz4YZ6k9NjljERdcBBTlwiIOmLrnUm5sqPmYVIH86Ki7tuXCcqCqoHFG7rDJGWsDVeUFO2HDziWJQXh/de9w0HQHW2NNUJwxfXSuYCssB6oqA8zGhtd8qKpoMAvrAlUVCfaEYaL7W+HLpVRDieBMMnhenKV2oE/5z+CMEft2sks+gAtVowNzdxmxeZZnRwfmjBE7lu9UeqkrVA0FHl0c/fyqHyMWy/FO4XUAvIhx3WnE/qVZYcuaFbasqRBWiC+N36QcPfFWQQAAAABJRU5ErkJggg=="},67428:function(A,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA5CAYAAABnLziGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAL+SURBVGhD7Zq7jtNAFIb3IajpaSmp6SkpeQIqOt6Ahop3QKLgKZAQb4GSzcWXJI5zvx72G3Ki8STeELSJPbvzS2eVKI7zfXOO7ZXsG3kiOUt0u93Wqs7JSVF7x5vNplZls51KqagrN8wnEsUDabYS+d2IKi0YYIHJlS7LUVFbcpiP9zseT2ayWq13W1UXGGDRhYfxlOyBqAqu12tJ0kzanZ7M5svdp/ULbDDCCrMKuymIupKsmC+B9T7ZvSgfUGyYZSNp3a2Sb4EZdhzUR1MQZSWWy6WZ+zqPa1lghh0Ht6tGVCVXq5UMstyrkXUDOw642LIFUVaiE/XMGc3XwI6D29W9KHM9n89N6+twCfnfwI4DLnqskhvtJq2ezWbmgux7cMDFHt+9KK2eTqePRhQXe3wLopPJ5NGI4hJEg6hnCaJB1NME0SDqaWoh+unzF/n67fvu3WVSuej7Dx/l2fMXphC+VCoVffP23V5SC/FLpDJRW/Llq9emLilbiagrSRrN24vKXl3UluS1HWSPLcJD5KqiP37+KpXUuLK8f4hcvaOcWU+dXZH7l+3OydVFq0oQDaKeJogGUU8TRIOopwmiT1K0cRt7fyMYh5Oi7U7q/a19HO4V5eZpkvSlG/V3X/MvsONQeiNYb+3neW5a7+vjN7DjcHBrnw14oQ9rjMdjieKe3LZT82WfAjPsOBw8rMEf7aqO73A4lFYnkY5HIwwrzLC7Y0sOHqjSrg4GA2m1Y7NKdR5j2GCEFWbtpj22xIgSu6vM92g0Ml/sdhMz96wYZ7Q6XHpg+PvgVN+wwQgrzLC73SQFUYq5XiwWpv0q2+v1pNONpdmKpNGMzQW5yoIBFphgU0mYYddj86go4QNWQmVZHUaBuVfhNE3vTt9JoeI4vmi5vweDCsIGI6wq6XaTFESJLcsIMO+sFDvjtM2OsywzxQ9ds/R3YYAFJthghLVMkhyIEjZUYQ5qFWbV2DH/dVRZMMCigvaJ55gkOSpKbFntsErXoWDRDp6SFBH5Ay+dpSNNECrsAAAAAElFTkSuQmCC"}}]);