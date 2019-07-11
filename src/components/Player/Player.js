import React, {Component} from 'react'
import PlayerControls from "./PlayerControls";
import PlayList from "./PlayList";
import Axios from "axios";
import urls from "../../hoc/URLHandler/URLHandler";

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            musics:[],
            loaded:false,
            error:false,
            id: 0,
            src: '',
            avatar: '',
            title: '',
            artist: '',
            play: false,
        }
    }

    listActivate = (music) => {
        this.setState({
            id: music.id,
            src: music.src,
            avatar: music.avatar,
            title: music.title,
            artist: music.artist,
            play: true,
        });
    };

    render() {
        return (
            <div>
                <PlayList click={this.listActivate} musics={this.state.musics}/>
                <PlayerControls
                    play={this.state.play}
                    src={this.state.src}
                    avatar={this.state.avatar}
                    title={this.state.title}
                    artist={this.state.artist}
                />
            </div>
        );
    }

    componentDidMount() {
        Axios.get(urls.musics).then(
            response => {
                if (response.data.status === 200 && response.data.hasOwnProperty('musics')) {
                    this.setState({musics: response.data.musics});
                } else {

                    this.setState({loaded: true, error: true});
                }
            }
        ).catch(error => {
            this.setState({loaded: true, error: true});
        });
    }
}

export default Player;