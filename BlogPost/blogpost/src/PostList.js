import React from 'react';
import { fetchPosts } from './actions';
import { connect } from 'react-redux';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderList() {
        return this.props.posts.map((post) => {
            return (
                <div className='item' key={post.id} >
                    <i className=' huge big circle outline icon blue user icon' />
                    <div className="content" >
                        <div className='description' >
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            );
        });
    };



    render() {
        console.log(this.props.posts);
        return (
            <div className='ui relaxed divided list'>{this.renderList()}</div>
        )
    };

}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps, { fetchPosts })(PostList);