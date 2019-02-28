import React, { Component } from 'react';
import {connect} from 'react-redux'
import {FetchVideo} from './actions'
import './SearchBar.css';
// import Videolist from './VideoList'


class SearchBar extends Component {
  state = { searchdata: ''}

    onFormSubmit=async (event)=> {
        event.preventDefault();
        if(this.state.searchdata==='')
        {
          alert("enter data for search");
        }
        else{
          this.props.FetchVideo(this.state.searchdata);
        }  
    }

    onInputChange=(event)=>{
        this.setState({searchdata:event.target.value})
    }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div id="container">
            <input type="text" onChange={this.onInputChange}></input>
            <button  className='ui primary button' type="submit" >Search</button>
          </div>
        </form>
        {/* <ImageRender imageresult={this.state.images}/> */}
             
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{videos:state.videos}
}


export default connect(mapStateToProps,{FetchVideo})(SearchBar);
