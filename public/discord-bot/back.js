

class Rules{
	constructor(){var tomb=[]}
	tomb2 = ["opt1","opt2","opt3"];
	gettomb2(){return this.tomb2};
}

function myfunc(){
	console.log("Hello & Szoszi");
	}
function steal(){	
	var tbox = document.getElementById("box")
	var cont = tbox.value
	console.log(cont)
}
function sum()
{
	var n1 = document.getElementById("num1").value
	var n2 = document.getElementById("num2").value
	console.log(n1,n2)
	var res = parseFloat(n1)+parseFloat(n2)
	console.log(res)
}

function init()
{
	console.log("iniqqqqt");

}
/*ahányszor betölt az oldal meghívhatok egy függvényt*/ 
window.onload=init();
function hozzaad()
{
	var torzs = document.getElementById("torzs");
	var sor= document.createElement("tr");

	var toparse= new Rules();
	var tmp = toparse.gettomb2();

	for(var i=0;i<3;++i)
	{
		var cella = document.createElement("td");
		sor.append(cella);
		var SelectList = document.createElement("Select");
		SelectList.id="Select2"

		/*nester for loopja, ide jönnek az optionok a selectbe*/
		for(var j=0;j<3;j++){
		var option = document.createElement("option");
		option.id="option1"
		option.value = "proba1";
		/*option.text="proba2";*/
		option.text=tmp[j];
		SelectList.appendChild(option);
		}

		cella.append(SelectList);
		//szoveg.type="text";
	}
	torzs.append(sor);

	


}
/*
function getjson()
{
	var tbox = document.getElementById("option1");
	var cont = tbox.value;
	console.log(cont)
	
	//console.log("Submitted");
}
*/

    



function getjson2()
{
	//var tbox = document.getElementById("Select1");
	var Slist= document.getElementsByTagName("Select");
	console.log(Slist);
	writeFile('./helloworld.txt', 'Hello World!', function (err) {
		if (err) return console.log(err);
		console.log('Hello World > helloworld.txt');
	});
	/*for (i in Slist){
		console.log(i);
	}*/


	
	//console.log("Submitted");
}
