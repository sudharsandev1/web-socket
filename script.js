let socket =new WebSocket("ws://localhost:8080");

socket.onopen =function(event){
    displayMessage("Connected to the websocket server.","server");

};
 socket.onmessage=function(event){
    displayMessage(event.data,"server");

 };
function displayMessage(message,sender){
    const messageContainer=document.getElementById("messages");
    const messageElement   =document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add(
        sender==="client"?"client-message":"server-message"
    );
    messageElement.textContent=message;

    const messageWrapper=document.createElement("div");
    messageWrapper.classList.add("message-container")
  messageWrapper.appendChild (messageElement);
  messageContainer.appendChild(messageWrapper);
  messageContainer.scrollTop=messageContainer.scrollHeight;
}      



function sendMessage(){
    let message =document.getElementById('messageInput').value;
    if(message.trim() !==""){
        socket.send(message);
        displayMessage(message,'client');
        document.getElementById("messasgeInput").value="";
    }
}