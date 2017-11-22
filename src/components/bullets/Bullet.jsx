import React, {Component} from 'react';

class Bullet extends Component {

    render() {
        return (
            <div className="bullet">
                <p> {this.props.text} </p>
            </div>
        );
    }
}

export default Bullet