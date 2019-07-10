import React, {Component} from 'react'
import Post from "./Post";
import './Post.modul.css'
import Axios from 'axios';
import urls from "../../hoc/URLHandler/URLHandler";
import ErrorLoading from "./ErrorLoading";
import Loading from "./Loading";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            loaded: false,
            posts: []
        };
    }

    render() {
        return (
            <div className="container rtl">
                {!this.state.loaded ? <Loading/> :null}
                {this.state.error ? <ErrorLoading/>:null}
                <div className="card-columns">
                    {this.state.posts.map(post => {
                        return <Post key={post.id} title={post.title} content={post.post}/>;
                    })}
                </div>
            </div>
        );
    }

    componentDidMount() {
        Axios.get(urls.posts).then(
            response => {
                if (response.data.status === 200 && response.data.hasOwnProperty('posts')) {
                    this.setState({posts: response.data.posts, loaded: true});
                } else {

                    this.setState({loaded: true, error: true});
                }
            }
        ).catch(error => {
            this.setState({loaded: true, error: true});
        });
    }
}

export default Posts;