import React, {Component} from 'react'
import ReactPlayer from 'react-player'
import '../../assets/css/PlayerControls.css'
import Duration from "./Duration";
import Axios from "axios";
import urls from "../../hoc/URLHandler/URLHandler";

class PlayerControls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: null,
            pip: false,
            playing: this.props.play,
            controls: false,
            light: false,
            volume: 0.8,
            muted: false,
            played: 0,
            loaded: 0,
            duration: 0,
            playbackRate: 1.0,
            loop: false
        };
        this.seekBar = React.createRef()
    }

    load = url => {
        this.setState({
            url,
            played: 0,
            loaded: 0,
            pip: false
        })
    };
    playPause = () => {
        this.setState({playing: !this.state.playing})
    };
    stop = () => {
        this.setState({url: null, playing: false})
    };

    onEnablePIP = () => {
        this.setState({pip: true})
    };
    onDisablePIP = () => {
        this.setState({pip: false})
    };
    onPause = () => {
        this.setState({playing: false})
    };
    onSeekMouseDown = e => {
        this.setState({seeking: true})
    };
    onSeekChange = e => {
        let offset = this.seekBar.current.getBoundingClientRect().left;
        let width = this.seekBar.current.getBoundingClientRect().width;
        let clicked = e.clientX;
        let seek = ((clicked - offset) / (width)) * this.state.duration;
        this.setState({played: parseFloat(seek)})
    };
    onSeekMouseUp = e => {
        let offset = this.seekBar.current.getBoundingClientRect().left;
        let width = this.seekBar.current.getBoundingClientRect().width;
        let clicked = e.clientX;
        let seek = ((clicked - offset) / (width)) * this.state.duration;
        this.setState({seeking: false});
        this.player.seekTo(parseFloat(seek));
    };
    onProgress = state => {
        // We only want to update time slider if we are not currently seeking
        if (!this.state.seeking) {
            this.setState(state)
        }
    };
    onEnded = () => {
        this.setState({playing: this.state.loop})
    };
    onDuration = (duration) => {
        this.setState({duration})
    };
    onClickFullScreen = () => {
        // screenfull.request(findDOMNode(this.player));
    };
    toggleControls = () => {
        const url = this.state.url;
        this.setState({
            controls: !this.state.controls,
            url: null
        }, () => this.load(url))
    };
    toggleLight = () => {
        this.setState({light: !this.state.light})
    };
    toggleLoop = () => {
        this.setState({loop: !this.state.loop})
    };
    setVolume = e => {
        this.setState({volume: parseFloat(e.target.value)})
    };
    toggleMuted = () => {
        this.setState({muted: !this.state.muted})
    };
    setPlaybackRate = e => {
        this.setState({playbackRate: parseFloat(e.target.value)})
    };
    togglePIP = () => {
        this.setState({pip: !this.state.pip})
    };
    onPlay = () => {
        console.log('onPlay');
        this.setState({playing: true})
    };
    ref = player => {
        this.player = player
    };

    render() {

        return (
            <div>
                <ReactPlayer
                    ref={this.ref}
                    onReady={() => {
                    }}
                    loop={true}
                    playing={this.state.playing}
                    onStart={() => {
                    }}
                    onPlay={this.onPlay}
                    onEnablePIP={this.onEnablePIP}
                    onDisablePIP={this.onDisablePIP}
                    onPause={this.onPause}
                    onBuffer={() => {
                    }}
                    onSeek={e => {
                    }}
                    onEnded={this.onEnded}
                    onError={e => {
                    }}
                    onProgress={this.onProgress}
                    onDuration={this.onDuration}
                    url={this.props.src}
                />
                <div className="emb-player-box" id="ap">
                    <audio/>
                    <div className="em-player">
                        <div className="p-cover" style={{backgroundImage: 'url(' + this.props.avatar + ')'}}/>
                        <div className="p-actions">
                            <div className="p-play" onClick={this.playPause}>
                                {!this.state.playing ? <i className="feather icon-play"/> :
                                    <i className="feather icon-pause"/>}
                            </div>
                            <div className="p-prev">
                                <i className="feather icon-rewind"/>
                            </div>
                            {/*<div className="p-prev">*/}
                            {/*<i className="feather icon-square"/>*/}
                            {/*</div>*/}
                            <div className="p-next">
                                <i className="feather icon-fast-forward"/>
                            </div>
                            <div className="p-shuffle">
                                <i className="feather icon-shuffle"/>
                            </div>
                            <div onClick={this.toggleLoop} className={this.state.loop ? 'p-repeat on' : 'p-repeat'}>
                                <i className="feather icon-repeat"/>
                            </div>
                        </div>
                        <div className="p-seekbar">
                            <div className="timer time_played"><Duration
                                seconds={this.state.duration * this.state.played}/></div>
                            <div className="timeline"
                                 ref={this.seekBar}
                                 onMouseDown={this.onSeekMouseDown}
                                 onChange={this.onSeekChange}
                                 onMouseUp={this.onSeekMouseUp}>
                                <div style={{width: (this.state.loaded * 100) + '%'}} className="line_preload"/>
                                <div style={{width: (this.state.played * 100) + '%'}} className="line_played"/>
                            </div>
                            <div className="total full_time"><Duration seconds={this.state.duration}/></div>
                        </div>
                        <div className="p-info">
                            <div className="p-title">{this.props.title}</div>
                            <div className="p-artist">{this.props.artist}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log('mouns');
        // this.setState({playing: this.props.play})
    }
}

export default PlayerControls;