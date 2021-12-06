function publishState(jsonData)
{
    const template = document.createElement('div');
    template.innerHTML = JSON.stringify(jsonData);
   // template.innerHTML = 'Configuration in JSON format here'
    
    document.body.appendChild(template);

}

function init(){
    const socket1 = io();
    var jsondata;
    socket1.on('uzit', msg =>{
        jsondata = msg;
        publishState(jsondata)
    })
    console.log('state')
    
}

window.onload= init();







