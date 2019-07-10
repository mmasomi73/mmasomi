import React,{Component} from  'react';

class ErrorLoading extends  Component{

    render() {
        return (
            <div className="col-lg-8  offset-2 rtl modern has-lock ">
                <div className="card" style={{minHeight:'20rem'}}>
                    <div className="lock isf">
                        <i className="fas fa-lock"/>
                        <div className="modern message">قاصدک کاش نگویی که خبر یادت نیست ...</div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">&#160;</h5>
                    </div>

                    <div className="card-footer">
                        <div className="align-content-center text-center">&#160;</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ErrorLoading;