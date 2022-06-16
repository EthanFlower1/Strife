import { useContext, useState, useRef } from 'react'
import { ContextProvider, SocketContext } from '../util/context'

export default function videoPlayer() {
  const {
    call,         // object
    callAccepted, // boolean
    myVideo,      // ref
    userVideo,    // ref
    stream,       // MediaStream
    name,         // origin username
    setName,      // set origin username
    callEnded,    // boolean
    me,           // peer id
    callUser,     // handler
    leaveCall,    // handler
    answerCall,   // handler
  } = useContext(SocketContext)

  const [target, setTarget] = useState("")

  return (
    <div>
      <section>
        <div>You</div>
        <video style={{borderRadius: "3%"}} playsInline autoPlay muted ref={myVideo} />
      </section>
      <section>
        <div>Them</div>
        <video playsInline autoPlay ref={userVideo} />
      </section>

      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="enter your name" />
      <input type="text" value={target} onChange={e => setTarget(e.target.value)} placeholder="who to call?"/>
      <div>Peer id: {me}</div>
      <button onClick={() => callUser(target)}>Call</button>
      <button onClick={leaveCall}>Disconnect</button>
      {
        call.isReceivingCall && !callAccepted && (
          <button onClick={answerCall}>Answer Call</button>
        )
      }
    </div>
  )
}