const jsonData = {
	name: 'Richard',
   };
   
   function download(content, fileName, contentType) {
	const a = document.createElement("a");
	const file = new Blob([content], { type: contentType });
	a.href = URL.createObjectURL(file);
	a.download = fileName;
	a.click();
   }
   
   function onDownload(){
	download(JSON.stringify(jsonData), "test.json", "text/plain");
   }