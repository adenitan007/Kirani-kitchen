import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo,setPlayVideo] = React.useState(false)
  const VidRef = React.useRef();
  const handleVideo = ( )=> {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)
    
  }
  return (
    < div className='app__video' >
      <video src={meal} ref={VidRef} type='video/mp4' loop controls={false} muted />
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_cicle flex__center" onclick>

        </div>
      </div>
    </div >
  )
}



export default Intro;
