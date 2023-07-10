import React, {useState,useRef} from 'react';
import VidOne from "./vidtwo.mp4"

const VideoTwo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    const handleProgress = () => {
        const duration = videoRef.current.duration;
        const currentTime = videoRef.current.currentTime;
        const progress = (currentTime / duration) * 100;
        setProgress(progress);
    };

    return (
        <div><center>
            <video
            onTimeUpdate={handleProgress}
             ref={videoRef} width="60%" height="60%" controls>
                <source src={VidOne} type="video/mp4" />
                <button onClick={togglePlay}>
                {isPlaying ? "Pause" : "Play"}
            </button>
            <progress value={progress} max="100"/>
            </video>
            </center>
        </div>
    )
}

export default VideoTwo;