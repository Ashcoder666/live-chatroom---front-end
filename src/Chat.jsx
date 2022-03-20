import React from 'react'

const Chat = ({username,socket,room}) => {
const [currentMessage,setCurrentMessage] = React.useState('')    
  return (
    <div>
      <div className="chat-haeder">
          <p>Live Chat</p>
      </div>
      <div className="chat-body"></div>
      <div className="chat-footer">
          <input placeholder="Enter your message" onChange={(e)=>{setCurrentMessage(e.target.value)}}/>
          <button>send</button>
      </div>
    </div>
  )
}

export default Chat
