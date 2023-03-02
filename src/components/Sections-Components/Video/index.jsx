import { useState, useRef, useEffect } from "react";
import './styles.css'

// icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

import FullscreenIcon from '@mui/icons-material/Fullscreen';

const getMinutesFromSeconds = totalTime => {
    const minutes = parseInt(totalTime / 60)
    const seconds = Math.floor(totalTime % 60)
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

const Video = ({source, title}) => {
    const [videoElement, setVideoElement] = useState(null)

    const [isPlaying, setIsPlaying] = useState(false)

    const [videoCurrentTime, setVideoCurrentTime] = useState(0)
    const [videoDuration, setVideoDuration] = useState(0)

    const [videoIsMuted, setVideoIsMuted ] = useState(false)

    const videoRef = useRef()
    const videoWrapperRef = useRef()
    
    const handlePlayClick = () => {
        !videoElement.paused ? videoElement.pause() : videoElement.play()
        setIsPlaying(!isPlaying)
    }

    const handleTimeUpdate = () => {
        setVideoCurrentTime(videoElement.currentTime)
    }

    const handleStop = () => {
        setIsPlaying(false)
    }

    const handleLoadedData = () => {
        setVideoDuration(videoElement.duration)
    }

    const handleMuteVolume = () => {
        console.log('click', videoIsMuted)
        setVideoIsMuted(!videoIsMuted)
        videoElement.volume = videoIsMuted ? 0 : 1
    }

    useEffect(() => {
        setVideoElement(videoRef.current)
    }, [])

    return (
        <div className="video">
            <div 
                className={`video-wrapper ${!isPlaying ? 'paused' : 'playing'}`} 
                ref={videoWrapperRef}
                onContextMenu={() => false}
                >
                <video
                    onClick={ handlePlayClick } 
                    src={ source }
                    ref={ videoRef } 
                    onTimeUpdate={ handleTimeUpdate } 
                    onLoadedData={ handleLoadedData }
                    onEnded={ handleStop }
                     >
                    <p>Your browser does not support the video tag.</p>
                </video>
                <div className="caption"><h5>{ title }</h5></div>
                <div className="controls">
                    <div className="side left-side">
                        <button className="play-pause" 
                            onClick={ handlePlayClick }>
                            { !isPlaying ? <PlayArrowIcon /> : <PauseIcon /> }
                        </button>
                        <div className="volume-wrapper">
                            <button className="volume"
                                onClick={ handleMuteVolume }>
                                { videoIsMuted ? <VolumeOffIcon /> : <VolumeUpIcon /> }
                            </button>
                            <input type="range" name="volume-range" id="volume-range" />
                        </div>
                        <p>{ getMinutesFromSeconds(videoCurrentTime) } / { getMinutesFromSeconds(videoDuration) }</p>
                    </div>
                    <div className="side right-side">
                        <button className="fullscreen"><FullscreenIcon /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video