/*This is the client side js*/

const socket = io();

socket.on('message',message =>{
 // console.log(message);
  var tbox = document.getElementById("box");
  tbox.value=JSON.stringify(message);

});

function setParam()
{
  var tbox = document.getElementById("box");
  var param = tbox.value;
//  console.log(param);
  socket.emit('param',param);


}