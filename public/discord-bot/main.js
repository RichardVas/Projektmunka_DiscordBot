const socket = io();

socket.on('message',message =>{
 // console.log(message);
  var tbox = document.getElementById("box");
  tbox.value=JSON.stringify(message);
});