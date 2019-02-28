import React from 'react'
import VideoItem from './VideoItem'

const videoList = (props) => {
    if(props.videos){
        // props.onVideoSelect()
        // console.log(props.videos,"viedkdjd")
        const data = props.videos.data.items.map((video) => {
            console.log(video,"ppp");
        return (
            <div key={video.id} onClick={()=>props.onVideoSelect(video.id.videoId,video.snippet.title,video.snippet.description)}>
                <VideoItem video={video} />
            </div>
        );
    });
    return <div>{data}</div>
}
else{
    return<div>Type for Searching...</div>
}
};

export default videoList;





