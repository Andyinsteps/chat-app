import React from 'react';

class Hello extends React.Component {
    render() {
        return (
            <div>
                <p>Hello {this.props.name}</p>
                <h3>This would be my homework.</h3>
            </div>
        );
    }
}

export default Hello;
