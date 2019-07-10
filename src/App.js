import React from 'react';

import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap/css/bootstrap-rtl.min.css';
import './assets/vendor/fontawesome/css/fontawesome-all.min.css';
import './assets/icon/feather/css/feather.css';
import './assets/css/style.css';

import Footer from "./components/Layouts/Footer/Footer";
import Background from "./components/Layouts/Backgraound/Background";
import Posts from "./components/Posts/Posts";
import {BrowserRouter, Route} from 'react-router-dom'
import NewPost from "./components/Posts/NewPost";
import Player from "./components/Player/Player";

function App() {
    return (
        <div className="App container">
            <BrowserRouter>
                <Background/>
                <Route path="/" exact component={Posts}/>
                <Route path="/put-message" exact component={NewPost}/>
                <Route path="/player" exact component={Player}/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
