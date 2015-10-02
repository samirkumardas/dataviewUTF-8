# dataviewUTF-8
Javascript method for converting ArrayBuffer to utf-8 String

How to use?
----------
You will have to add utf8.js file in your project.

I am assuming that You have already input buffer from websocket or ajax 

var dataview = new DataView(buffer);  
dataview.getString(0,100); // get string of 100 lengths from the offset 0 
