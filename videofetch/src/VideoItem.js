import React from 'react'
import './VideoItem.css'


class VideoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            flag:false,
            video:''
        }
        this.renderVideo = this.renderVideo.bind(this);
    }
    renderVideo = (video) => {
        console.log(video)
        const videoSRC =`https://www.youtube.com/embed/${video.id.videoId}`

        this.setState({
            flag:true,
            video:videoSRC,
        })
    }
    
    render(){
        let{ video}=this.props;

        return (
            <div>
                       
             <div  className='item' >
            
                <div className='content'>  
                      
                    <img className='ui-image' src={video.snippet.thumbnails.medium.url} alt='' />
               
                </div>
                <div className='header'>{video.snippet.title}</div>
            </div>
            </div>
        );
    }
};

export default VideoItem;
