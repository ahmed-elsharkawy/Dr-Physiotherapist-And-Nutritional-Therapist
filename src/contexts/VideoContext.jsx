import { createContext, useState } from "react";

export const  VideoContext = createContext()

const VideoStateProvider = (props) => {
    const [ videoState, setVideoState ] = useState(false)
    const toggleVideoState = () => {
        setVideoState(!videoState)
    }

    return(
        <VideoContext.Provider value={{videoState, toggleVideoState}}>{props.children}</VideoContext.Provider>
    )
}

export default VideoStateProvider