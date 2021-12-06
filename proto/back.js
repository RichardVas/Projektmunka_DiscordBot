//import lol from './server.mjs'

//lol()

class Rules{
	constructor(){var tomb=[]}
	tomb2 = ["Udvozles","Kick","Filter","Date","Clean", 'Role', 'Emoji','Spam','Picture','Query'];
    tomb3 = ["Uzenet","Role", "Ido", "Channel"]
    //tomb2 = ["Udvozles","Kick","Filter","Date","Role"];
	gettomb2(){return this.tomb2};
    gettomb3(){return this.tomb3};
}

class Controller
{
    
    ids = [0]
    constructor(){
        
    }

    getids()
    {
        return this.ids[0];
    }
    increment(){this.ids[0]++;}

    decrement(){this.ids[0]--;}

    getidstr(){return this.ids[0].toString();}
    
    
    controlTable()
    {
        var torzs = document.getElementById("torzs");
        var sor= document.createElement("tr");

        sor.id= 'sor' + this.getidstr()
        console.log('sorid',sor.id)
    
        var toparse= new Rules();
        var tmp = toparse.gettomb2();
    
        var triggers = toparse.gettomb3();

        var cella = document.createElement("td");
        sor.append(cella);
        var SelectList = document.createElement("Select");
        SelectList.id="select"+this.getids()
/*
        labels0 = document.createElement("label")
        labels0.for(SelectList.id)
        labels0.value="faszom"
*/
        /*---SELECT OSZLOP KEZDETE */
        //SelectList.id="Select2"

        /*nester for loopja, ide jönnek az optionok a selectbe*/
        for(var j=0;j<tmp.length;++j){
        var option = document.createElement("option");
        option.id="option"+j+this.getidstr()
        //console.log(option.id)
        option.value = tmp[j];
        //console.log(tmp[j])
        /*option.text="proba2";*/
        option.text=tmp[j];
        SelectList.appendChild(option);
        }
            
        cella.append(SelectList);
        //cella.append(Inputlist);
        //szoveg.type="text";

        /*---SELECT OSZLOP VEGE */

        /*TEXT FIELD hozzadasa */

        /*---INPUT FIELD KEZDETE */
        var inputfield = document.createElement("td");
        sor.append(inputfield)


        var InputField = document.createElement('input');
       // InputField.value="Message"
        InputField.placeholder="Message sent by BOT"
        var inpfield = "field";
        var actfieldid = this.getidstr()
    //    this.increment();
      //  console.log('ids',this.getids());
        InputField.id= inpfield+actfieldid;
        sor.append(InputField)
        /*---INPUT FIELD VEGE */



        /*inputfield hozzadads*/
        var cella_input = document.createElement("td");
   

        /*---MESSAGE KEZDETE*/
        var Inputlist = document.createElement('input');
       // Inputlist.value="Trigger"
        Inputlist.placeholder = "Trigger Word"
        var str = "inp";
        var tmp = this.getidstr()
       // this.increment();
      //  console.log('ids',this.getids());
        Inputlist.id= str+tmp;
        cella_input.append(Inputlist)

        sor.append(cella_input)

        /*---MESSAGE VEGE*/

        /*---ROLE KEZDETE */
        var role_input = document.createElement("td")
        var RoleList = document.createElement('input');
        //RoleList.value="role"
        RoleList.placeholder = "Applicable by this Role"
        var str = "role";
 //       var tmp = this.getidstr()
 //       this.increment();
      //  console.log('ids',this.getids());
        RoleList.id= str+tmp;
        role_input.append(RoleList)

        sor.append(role_input)

        /*---ROLE VEGE */

        /*Channel Kezdete */
        var channel_input = document.createElement("td")
        var ChannelList = document.createElement('input');
      //  ChannelList.value="channel"
        ChannelList.placeholder = "Only on this channel"
        var str = "channel";
  //      var tmp = this.getidstr()
   //     this.increment();
      //  console.log('ids',this.getids());
        ChannelList.id= str+tmp;
        channel_input.append(ChannelList)

        sor.append(channel_input)

        /*---Channel VEGE */


        /*Date Kezdete */
        var date_input = document.createElement("td")
        var DateList = document.createElement('input');
      //  DateList.value="date"
        DateList.placeholder = "Between these dates"
        var str = "date";
 //       var tmp = this.getidstr()
    //    this.increment();
      //  console.log('ids',this.getids());
        DateList.id= str+tmp;
        date_input.append(DateList)

        sor.append(date_input)

        /*---Date VEGE */

        /*onjoin kezdete */
        /*
        var checkbox = document.createElement('input')
        checkbox.type="checkbox"
        checkbox.name="name"
        checkbox.value="value"
        var str = "box"


        checkbox.id=str+tmp;
        
   //     console.log(checkbox.checked)
        //var text = document.getElementById("text");



        sor.append(checkbox)
        */
      

        /*onjoin vege */

        this.increment()
        torzs.appendChild(sor);

    
    }
    /* this function gives an exportable json format from the given table*/
    extract()
    {
        var toparse= new Rules();
        var tmp = toparse.gettomb2();
        return tmp.length;
    }
    removeline()
    {
        var torzs = document.getElementById("torzs");
        var sor = document.getElementById("sor"+this.getids)
        console.log(sor.value)
        torzs.removeChild(sor)

    }
}

var Manager = new Controller();
//Manager.controlTable()
var jsondata;
window.onload = init()

function init(){
    
    Manager.controlTable();
    //Manager.controlTable()
   // console.log('Init has been called.');

    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log( 'Current page: ',page );
    /*
    var box = document.getElementById('box0')
    console.log(box.checked)
*/

    /*
    const socket1 = io();
    
    socket1.on('uzit', msg =>{
        //jsondata = JSON.stringify(msg);
    })
*/
   // if(page == 'state.html'){publishState(jsondata);}
    //publishState();

   // if(page == 'config.html'){Manager.controlTable();}
/*
   var table = document.getElementById("MyTable");
   var header = table.createTHead();
   var row = header.insertRow();
   var cell1 = row.insertCell();
   var cell2 = row.insertCell();
   var cell3 = row.insertCell();
   var cell4 = row.insertCell();
   cell1.innerHTML = "Select Message";
   cell2.innerHTML = "Message";
   cell3.innerHTML = "Trigger";
   cell4.innerHTML = "Date";
*/
} 


function  removeline()
    {
        var torzs = document.getElementById("torzs");
        it = Manager.getids()
        it = it-1
        console.log('sor'+it)
        Manager.decrement()
        var sor = document.getElementById("sor"+it)
        //console.log(Manager.getids())
        //console.log(sor.value)
        torzs.removeChild(sor)
    }



//init()

/* function that forwards the config of a bot in a json format */

function submit()
{
    var obj = elment();
    var uzi = JSON.stringify(obj); 
    jsondata= uzi;
    console.log(uzi);

    const socket1 = io()
    socket1.emit('uzi',obj)
    window.localStorage.setItem('qwe',uzi)

}

function elment()

{
    
    const jsonData = {
    };
    var optid = 'select';
    var Select_inputfield = 'field'; //message
    var input = 'inp' //trigger
    //var trigger = "trigger"
    var role = "role"
    var channel = "channel"
    var date = "date"
 //   var box = "box"

    var textarea = "textbox"
    var warn = "choice-warn"
    var zero = "choice-zero"


    var warningmessage = "warnmsg"
    var spammsg = "spammsg"
    var rangctn = "range_num"

    var onjoin = "onjoin"
    var onjrang ="onjrang"

    console.log(Manager.getids());

    for(var i = 0; i < Manager.getids(); ++i){
        var iter = i.toString();
        tmp = input + iter
        tmpp = optid + iter
        inpfield_data = Select_inputfield+ iter


        role_data = role + iter

        channel_data = channel + iter

        date_data = date + iter
       // box_data = box + iter

        //trigger_data = trigger + iter



       // Select_inpf_data = 

        /*az option sytaxa : 'option'+'hányadik opció'+'melyik sorban' */
        /*
        for(var j = 0; j< Manager.extract(); ++j){
            tmpp = optid+j+iter;
        }
        */

        
        //console.log(tmp)
        var op = document.getElementById(tmp)

        var opt = document.getElementById('select'+iter)

        //var optt = document.getElementById('trigger'+iter)

        var opttt = document.getElementById('field' + iter)

        var op_inp = document.getElementById('inp' + iter)
        var op_role = document.getElementById('role' + iter)
        var op_channel = document.getElementById('channel' + iter)
        var op_date = document.getElementById('date' + iter)
        //var op_box = document.getElementById('box' + iter)

        var tarea = document.getElementById(textarea)
        var warnvalue = document.getElementById(warn)
        var zerovalue = document.getElementById(zero)


        var warningmessage_content = document.getElementById(warningmessage)
        var spammsg_content = document.getElementById(spammsg)
        var slider_content = document.getElementById(rangctn)

        var onjoin_content = document.getElementById(onjoin)
        var onjrang_content = document.getElementById(onjrang)


       // console.log(op.value)
        jsonData[tmp] = op.value
        jsonData[inpfield_data] = opttt.value
        jsonData[tmpp] = opt.value

        jsonData[role_data] = op_role.value
        jsonData[channel_data] = op_channel.value
        jsonData[date_data] = op_date.value
     //   jsonData[box_data] = op_box.checked

        jsonData[textarea] = tarea.value
        jsonData[warn] = warnvalue.checked
        jsonData[zero] = zerovalue.checked

        jsonData[warningmessage] = warningmessage_content.value
        jsonData[spammsg]=spammsg_content.value
        jsonData[rangctn] = slider_content.value

        jsonData[onjoin] = onjoin_content.value
        jsonData[onjrang] = onjrang_content.value



       // jsonData[trigger_data] = optt.value


       // console.log('Select',opt.value)
        //console.log('trigger',optt.value)
        console.log(jsonData)
    }
    
    //console.log(op.value)

    //console.log(jsonData)
    
    return jsonData;
}

function download(content, fileName, contentType) {
	const a = document.createElement("a");
	const file = new Blob([content], { type: contentType });
	a.href = URL.createObjectURL(file);
	a.download = fileName;
	a.click();
   }

function onDownload(){
    download(submit(), "json-file-name.json", "text/plain");
   }
window.localStorage.setItem('conf','lol')

function publishState(jsonData)
{


    const statuscontainer = document.createElement('div');
    statuscontainer.className = "tableconf";

    statuscontainer.innerHTML = JSON.stringify(jsonData);
   // template.innerHTML = 'Configuration in JSON format here'
    
    document.body.appendChild(statuscontainer);
    console.log(jsondata)

}

function getconfig()
{
    var pls;
    pls = localStorage.getItem('qwe')
    publishState(pls)
    console.log(pls)

}

