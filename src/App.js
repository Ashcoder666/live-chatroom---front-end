import './App.css';
import io from 'socket.io-client'
import {useState} from 'react'
import Chat from './Chat';

const socket = io.connect("http://localhost:3001");

function App() {
  const [username,setUsername]= useState('')
  const [roomid,setRoomid]= useState('')
  const [showChat,setshowChat]= useState(false)

  const joinRoom = ()=>{
    if( username !== "" || roomid !== "" ){
        socket.emit('join_room', roomid)
        setshowChat(true)
    }
  }

  return (
    <div className="App">
      {!showChat?(
 <div class="login">
 <div className="form">
   <div className="login-form">
     <span className="material-icons">Live ChatRooms</span>
     <input type="text" placeholder="Room ID" required onChange={(e)=>setRoomid(e.target.value)}/>
     <input type="text" placeholder="UserName" required onChange={(e)=>setUsername(e.target.value)}/>
     <button onClick={joinRoom}>JOIN</button>
   </div>  
 </div>
</div>
      ):(
<Chat socket={socket} username={username} room={roomid}/>
      )}
     

    </div>
  );
}

export default App;
