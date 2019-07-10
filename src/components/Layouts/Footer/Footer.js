import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Footer extends  Component{
    render() {
        return (
            <div className="footer-copyright py-1">
                <div className="developer-msg">mmasomi v0.0.2</div>

                <ul className="nav-bottom">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/cv'>About Me</Link></li>
                    <li><Link to='/put-message'>Put Message</Link></li>
                    <li><Link to='/player'>Relax Media</Link></li>
                </ul>
            </div>
        );
    }

}

export default Footer;