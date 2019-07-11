import React, {Component} from 'react';
import Axios from 'axios';
import urls from "../../hoc/URLHandler/URLHandler";

class NewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: '',
            title: '',
            post: '',
            backPost: '',
            error: false,
            sending: false,
            send: false,
        };

        this.changeTitle = this.changeTitle.bind(this);
        this.changePost = this.changePost.bind(this);
        this.changeBackPost = this.changeBackPost.bind(this);
    }

    submitPost = () => {
        this.setState({sending: true});
        if (this.state.title.length > 0 && (this.state.post.length > 0 || this.state.backPost.length > 0)) {
            Axios.post(urls.newPost, {
                key: this.state.key,
                title: this.state.title,
                post: this.state.post,
                backPost: this.state.backPost,
            }).then(response => {
                this.setState({sending: false, send: true});
            }).catch(error => {
                this.setState({sending: false, error: true});
            });
        }
    };
    changeKey = (event) => {
        this.setState({key: event.target.key});
    };
    changeTitle = (event) => {
        this.setState({title: event.target.value});
    };
    changePost = (event) => {
        this.setState({post: event.target.value});
    };
    changeBackPost = (event) => {
        this.setState({backPost: event.target.value});
    };

    render() {
        let classes = 'col-lg-8  offset-2 rtl';
        classes += this.state.sending ? ' modern has-warning' : '';
        classes += this.state.error ? ' modern has-lock' : '';
        classes += this.state.send ? ' modern has-success' : '';
        return (
            <div className={classes}>

                <div className="card">
                    {/*--------------= Cover =--------------*/}
                    {this.state.sending ? <div className="lock">
                        <i className="fas fa-circle-notch fa-spin"/>
                        <div className="modern message">اندکی صبر بباید ...</div>
                    </div> : null}
                    {this.state.send ? <div className="lock">
                        <i className="fas fa-check"/>
                        <div className="modern message"> صنما، بتا، نگارا، پیاماتان مرقوم گشت ...</div>
                    </div> : null}
                    {this.state.error ? <div className="lock">
                        <i className="fas fa-lock"/>
                        <div className="modern message">با ما چه سر جنگ تو داری...؟!</div>
                    </div> : null}
                    <div className="card-body">
                        <h5 className="card-title isf">یک پیام بگذارید</h5>

                        {/*--------------= Key =--------------*/}
                        <div className="row modern">
                            <div className="col-lg-3 text-left">
                                <label htmlFor="key" className="control-label d-inline modern">
                                    >&#160;&#160;&#160;&#160;&#160;&#160;&#160;کلید: </label>
                            </div>
                            <div className="col-lg-9">
                                <input onChange={this.changeKey} type="password" name="key" id="key"
                                       className="form-control modern-inp"/>
                            </div>

                        </div>
                        {/*--------------= Title =--------------*/}
                        <div className="row modern">
                            <div className="col-lg-3 text-left">
                                <label htmlFor="title" className="control-label d-inline modern">
                                    >&#160;&#160;&#160;&#160;&#160;&#160;&#160;عنوان: </label>
                            </div>
                            <div className="col-lg-9">
                                <input onChange={this.changeTitle} type="text" name="title" id="title"
                                       className="form-control modern-inp"/>
                            </div>

                        </div>
                        {/*--------------= Post =--------------*/}
                        <div className="row modern">
                            <div className="col-lg-3 text-left">
                                <label htmlFor="post"
                                       className="control-label d-inline modern"> >&#160;&#160; پست:  &#160;</label>
                            </div>
                            <div className="col-lg-9">
                                    <textarea name="post" id="post" cols="30" rows="5"
                                              onChange={this.changePost}
                                              className="form-control modern-inp"/>
                            </div>

                        </div>
                        {/*--------------= Back Post =--------------*/}
                        <div className="row modern">
                            <div className="col-lg-3 text-left">
                                <label htmlFor="back_post"
                                       className="control-label d-inline modern"> >&#160;&#160; بک
                                    پست:  &#160;</label>
                            </div>
                            <div className="col-lg-9">
                                    <textarea name="back_post" id="back_post" cols="30" rows="5"
                                              onChange={this.changeBackPost}
                                              className="form-control modern-inp"/>
                            </div>

                        </div>


                        <div className="form-group">
                            <button onClick={this.submitPost.bind(this)} type="button" id="send"
                                    className="btn btn-block modern-btn"> ارسال
                            </button>
                        </div>
                    </div>

                    <div className="card-footer">
                        <div className="align-content-center text-center">
                            <span className="waves-effect fnt-11 isf">دارم از زلف سیاهش گله چندان که مپرس . . .</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewPost;