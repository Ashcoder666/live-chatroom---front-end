import React from 'react'


const Chat = ({username,socket,room}) => {
const [currentMessage,setCurrentMessage] = React.useState('')    

    const sendMessage = async() =>{
        if( currentMessage !== ""){
            const messageData ={
                room:room,
                username,
                message: currentMessage,
                // time:
                //         new Date (Date.now().getHours()) + ':' +  new Date(Date.now().getMinutes()) 
            }

            await socket.emit("send_message",messageData)
        }
    }

    React.useEffect(()=>{
        socket.on("receive_message",(data)=>{
            console.log(data)
        })
    },[socket])

  return (
    <div>
      <div className="chat-haeder">
          <p>Live Chat</p>
      </div>
      <div className="chat-body"></div>
      <div className="chat-footer">
          <input placeholder="Enter your message" onChange={(e)=>{setCurrentMessage(e.target.value)}}/>
          <button onClick={sendMessage}>send</button>
      </div>
    </div>
  )
}

export default Chat
