import video from '../../assets/video.mp4'
import './video.css'

const VideoComponent = () => {
  return (
    <div className="video-container">
      <video className="fullscreen-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
};

export default VideoComponent;
