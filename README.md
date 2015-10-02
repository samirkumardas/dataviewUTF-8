# dataviewUTF-8
Javascript encoding method from ArrayBuffer to utf-8 String

How to use?
----------
var dataview = new DataView(buffer);  
dataview.getString(0,100); // get string of 100 lengths from the offset 0 
