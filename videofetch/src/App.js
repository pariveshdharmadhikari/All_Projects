import React, { Component } from 'react';
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import { connect } from 'react-redux'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoSrc: '',
      title:'',
      description:''
    }
  }
  videoSelect = (videoSrc,title,description) => {
    const videoSRC = `https://www.youtube.com/embed/${videoSrc}`
    this.setState({
      videoSrc:videoSRC,
      title:title,
      description:description
    })
  }

  framerender=()=>{
    window.scrollTo(0,0);
    return(
      <div className="videoplaycontainer" ><div className="iframe">
      <iframe src={this.state.videoSrc} style={{border: "0", width: "600px", height: "400px"}} /> 
      </div>
      <h4 className="ui-header">{this.state.title}</h4>
      <p>{this.state.description}</p>
      </div>
    );
}

  render() {

    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div>
          { this.state.videoSrc && this.framerender()
          // <div className="videoplaycontainer" ><div className="iframe">
          //   <iframe src={this.state.videoSrc} style={{border: "0", width: "600px", height: "400px"}} /> 
          //   </div>
          //   <h4 className="ui-header">{this.state.title}</h4>
          //   <p>{this.state.description}</p>
          //   </div>
          }
        </div>
        <VideoList videos={this.props.videos} onVideoSelect={this.videoSelect} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { videos: state.videos }
}
export default connect(mapStateToProps)(App);

