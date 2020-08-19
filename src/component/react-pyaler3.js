import React from 'react'
import ReactPlayer from 'react-player'
import '../App.css'
function ReactPlayer3 () {
  return (
    <div className='App'>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=b-2GV0T5Zpc'
        controls
        onReady={() => console.log('onReady callback')}
        onStart={() => console.log('onStart callback')}
        onPause={() => console.log('onPause callback')}
        onEnded={() => console.log('onEnded callback')}
        onError={() => console.log('onError callback')}
      />
    </div>
  )
}

export default ReactPlayer3;
