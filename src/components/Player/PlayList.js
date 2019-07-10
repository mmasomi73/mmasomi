import React, {Component} from 'react'
import PlayListTrack from "./PlayListTrack";

class PlayList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            active: false,
            src: '',
            avatar: '',
            title: '',
            artist: '',
        }
    }

    listActivate = (music) => {
        let active = true;
        if(this.state.id === music.id)
            active = this.state.active;
        else{
            active = !active;
        }
        this.setState({
            active: !active,
            id: music.id,
            src: music.src,
            avatar: music.avatar,
            title: music.title,
            artist: music.artist,
        });
        this.props.click(music);
    };

    render() {
        return (
            <div className="play-list-box">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                {/*<div> Music list</div>*/}
                                <ul className="ltr">
                                    {this.props.musics.map((music, key) => {
                                        return (<PlayListTrack key={music.id}
                                                               music={music}
                                                               id={music.id}
                                                               active={music.id === this.state.id ? this.state.active : false}
                                                               click={() => this.listActivate(music)}/>)
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayList;