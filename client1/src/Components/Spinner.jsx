import React, {Component} from 'react';

class Spinner extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center text-success">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>

            /*
            <div className='d-flex align-items-center justify-content-center' style={{height:'calc(100vh - 21vw)'}}>
                <div className="spinner-border text-success m-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            */
        );
    }
}

export default Spinner;