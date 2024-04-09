import React, {Component} from 'react';

class Spinner extends Component {
    render() {
        return (
            <div className="spinner-border text-success m-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }
}

export default Spinner;