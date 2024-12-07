import http from "http"

import WebSocket,{ WebSocketServer } from 'ws';
const PORT = 3000;

const server = http.createServer(function(req,res){
    return res.json({msg:"Hi"})
})

const wss = new WebSocketServer({server});

wss.on('connection',function connection(ws){
    ws.on('error',console.error);
    console.log("User Connected!",ws)

    ws.on('message',function message(data,isBinary){
        wss.clients.forEach((client)=>{
            if(client.readyState == WebSocket.OPEN){
                client.send(data,{binary:isBinary})
            }
        })
    })
    
})

server.listen(PORT,()=>{
    console.log(`Server is Listening on PORT : ${PORT}`);
});