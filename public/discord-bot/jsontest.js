const jsonData = {
	name: "Jonth",
	email: "jobtd@mail.com",
	website: "www.4codev.com"
   };
   
   function download(content, fileName, contentType) {
	const a = document.createElement("a");
	const file = new Blob([content], { type: contentType });
	a.href = URL.createObjectURL(file);
	a.download = fileName;
	a.click();
   }
   
   function onDownload(){
	download(JSON.stringify(jsonData), "json-file-name.json", "text/plain");
   }