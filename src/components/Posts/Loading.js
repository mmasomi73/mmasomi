import React,{Component} from  'react';

class Loading extends  Component{

    render() {
        return (
            <div className="col-lg-8  offset-2 rtl modern has-warning ">
                <div className="card" style={{minHeight:'20rem'}}>
                    <div className="lock isf">
                        <i className="fas fa-circle-notch fa-spin"/>
                        <div className="modern message">اندکی صبر بباید ...</div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">&#160;</h5>
                    </div>

                    <div className="card-footer">
                        <div className="align-content-center text-center">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading;