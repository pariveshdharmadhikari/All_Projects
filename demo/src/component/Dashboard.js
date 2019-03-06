import React from 'react'
import {Link} from 'react-router-dom';
import PostList from './PostList'

class Dashboard extends React.Component {
    
    componentWillMount(){
        this.setState({flag:localStorage.getItem("IsLogedIn")})
    }
    onLogout=()=>{
        localStorage.setItem("IsLogedIn",false);
        localStorage.removeItem('Userid');
    }
    render() {
        return (
            <div>
                <div className=" ui secondary pointing menu" >
                    <div className="right menu" >
                        <Link to="/" onClick={this.onLogout} className="item" >LogOut</Link>
                    </div>
                </div>
                <div>
                    <PostList />
                </div>
            </div>
        );
    }
}

export default Dashboard;