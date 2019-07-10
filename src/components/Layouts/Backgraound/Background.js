import React,{Component} from 'react'
import Particles from 'react-particles-js';

class Background extends Component{
    render(){
        return (<div className="background">
            <Particles
                params={{
                    particles: {
                        line_linked: {
                            color: "#959595",
                        },
                        color: {
                            value: '#959595'
                        },
                        size: {
                            value: 2
                        },
                        opacity: {
                            value: 1
                        }
                    },
                }}
            />
        </div>);
    }
}
export default Background;