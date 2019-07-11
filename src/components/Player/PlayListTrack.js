import React, {Component} from 'react'

class PlayList extends Component {

    render() {
        let classes = 'row ltr music-list';
        classes += this.props.active ? ' active' : '';
        return (
            <li className={classes} onClick={this.props.click}>
                <div className="col-lg-12 pull-left text-left detail">
                    <div className="cover"
                         style={{backgroundImage: 'url(' + this.props.music.avatar + ')'}}>
                    </div>
                    <div className="artist">{this.props.music.artist}</div>
                    <div className="title">{this.props.music.title}</div>
                </div>
            </li>
        );
    }
}

export default PlayList;