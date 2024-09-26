const webSocket= require("ws");

const wss=new webSocket.Server({port:8080});

wss.on("connection",ws=>{

   console.log(`New client Connected, Total no of Clients:${wss.clients.size}`);

   // send a message to the connectly web  socket server

   ws.send('Welcome to Web Socket Server !');

    ws.on("message",(message)=>{
        console.log(`Received from client:${message}`);
        ws.send(`Server response : you sent Message->${message}`)
        
    })
   
// send message on every five seconds
  setInterval(()=>{
    ws.send(`Totally there are ${wss.clients.size} clients connected to the server`)
  },5000)

  ws.on('close',()=>console.log(`Client Disconnted, Total no of client:${wss.clients.size}`))


})


console.log("web socket server running on ws://localhost:8080")