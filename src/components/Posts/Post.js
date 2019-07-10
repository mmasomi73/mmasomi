import React, {Component} from 'react'

class Post extends Component {

    render() {
        return (
            <div className="card">
                {/*<img class="card-img-top">*/}
                <div className="card-body">
                    {/*<div class="card-img-circle">*/}
                    {/*</div>*/}
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">
                        {this.props.content}
                    </p>
                </div>
                <div className="card-footer">
                    <div className="align-content-center text-center">
                        <span className="waves-effect"><i className="fab fa-facebook-f"/></span>
                        <span className="waves-effect"><i className="fab fa-instagram"/></span>
                        <span className="waves-effect"><i className="fab fa-twitter"/></span>
                        <span className="waves-effect"><i className="fab fa-telegram"/></span>
                        <span className="waves-effect"><i className="fas fa-undo-alt"/></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;