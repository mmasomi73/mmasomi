import React, {Component} from 'react'
import PlayerControls from "./PlayerControls";
import PlayList from "./PlayList";

class Player extends Component {
    musics = [
        {
            id: 4,
            src: 'http://dl.nex1music.ir/1397/10/28/Evan%20Band%20-%20To%20Ke%20Maroufi%20[128].mp3?time=1562751274&filename=/1397/10/28/Evan%20Band%20-%20To%20Ke%20Maroufi%20[128].mp3',
            avatar: 'https://nex1music.ir/upload/2019-01-18/evan-band-to-ke-maroufi-2019-01-18-22-46-03.jpg',
            title: 'معروفی',
            artist: 'آیدا محمد نقی بخش',
        }, {
            id: 5,
            src: 'https://nava.ir/wp-content/uploads/2018/02/Roozbeh-Bemani-Koja-Bayad-Beram-128.mp3',
            avatar: 'https://nava.ir/wp-content/uploads/2018/02/Roozbeh-Bemani-Koja-Bayad-Beram-mp3-image.jpg',
            title: 'کجا باید برم',
            artist: 'روزبه بمانی',
        }, {
            id: 6,
            src: 'https://nava.ir/wp-content/uploads/2018/02/Roozbeh-Bemani-Koja-Bayad-Beram-128.mp3',
            avatar: 'https://nava.ir/wp-content/uploads/2018/02/Roozbeh-Bemani-Koja-Bayad-Beram-mp3-image.jpg',
            title: 'کجا باید برم',
            artist: 'روزبه بمانی',
        }, {
            id: 7,
            src: 'https://nava.ir/wp-content/uploads/2018/02/Roozbeh-Bemani-Koja-Bayad-Beram-128.mp3',
            avatar: 'https://nava.ir/wp-content/uploads/2018/02/Roozbeh-Bemani-Koja-Bayad-Beram-mp3-image.jpg',
            title: 'کجا باید برم',
            artist: 'روزبه بمانی',
        }, {
            id: 8,
            src: 'https://nava.ir/wp-content/uploads/2018/02/Roozbeh-Bemani-Koja-Bayad-Beram-128.mp3',
            avatar: 'https://nava.ir/wp-content/uploads/2018/02/Roozbeh-Bemani-Koja-Bayad-Beram-mp3-image.jpg',
            title: 'کجا باید برم',
            artist: 'روزبه بمانی',
        }, {
            id: 9,
            src: 'https://nava.ir/wp-content/uploads/2018/02/Roozbeh-Bemani-Koja-Bayad-Beram-128.mp3',
            avatar: 'https://nava.ir/wp-content/uploads/2018/02/Roozbeh-Bemani-Koja-Bayad-Beram-mp3-image.jpg',
            title: 'کجا باید برم',
            artist: 'روزبه بمانی',
        }, {
            id: 10,
            src: 'https://nava.ir/wp-content/uploads/2018/02/Roozbeh-Bemani-Koja-Bayad-Beram-128.mp3',
            avatar: 'https://nava.ir/wp-content/uploads/2018/02/Roozbeh-Bemani-Koja-Bayad-Beram-mp3-image.jpg',
            title: 'کجا باید برم',
            artist: 'روزبه بمانی',
        }
    ];

    constructor(props) {
        super(props);
        this.state = {
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
                <PlayList click={this.listActivate} musics={this.musics}/>
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
}

export default Player;