import React, { Component } from 'react';
import GamesList from './GamesList';


class Home extends Component {

    render() {
        return (
            <React.Fragment>                               
                <GamesList games={this.props.games} />
            </React.Fragment>
        );
    }
}

export default Home;